import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const IMPORT_REGEXP =
  /^((import|export) [^';]* from "(\.\/|(\.\.\/)+)[^';]*)"/g;

const initialPath = path.join(process.cwd(), "dist", "esm");
fixImportsAtFolder(initialPath);

function fixImportsAtFolder(rootPath) {
  const entries = fs.readdirSync(rootPath);

  for (const entry of entries) {
    const entryPath = path.join(rootPath, entry);
    if (entry.endsWith(".js")) {
      fixImportsAtFile(entryPath);
    } else if (!path.extname(entry)) {
      const stat = fs.statSync(entryPath);
      if (stat.isDirectory()) {
        fixImportsAtFolder(entryPath);
      }
    }
  }
}

function fixImportsAtFile(filePath) {
  const fileContents = fs.readFileSync(filePath).toString("utf8");
  const lines = fileContents.split("\n");
  const fixedLines = lines.map((line) => {
    if (!IMPORT_REGEXP.test(line)) {
      return line;
    }

    const [, importPath] = line.split(`"`);

    const fullPath = path.join(filePath, "..", importPath);
    if (!fs.existsSync(fullPath)) {
      return line.replaceAll(IMPORT_REGEXP, '$1.js"');
    }

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      return line.replaceAll(IMPORT_REGEXP, '$1/index.js"');
    }

    return line;
  });

  const withFixedImports = fixedLines.join("\n");
  fs.writeFileSync(filePath, withFixedImports);
}
