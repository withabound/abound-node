import path from "path";
import fs from "fs";

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
    if (importPath.includes(".json")) {
      return `import { createRequire } from "module";
const require = createRequire(import.meta.url);
const { version } = require("${importPath}");`;
    }

    const fullPath = path.join(filePath, "..", importPath);
    if (!fs.existsSync(fullPath)) {
      return line.replace(IMPORT_REGEXP, '$1.js"');
    }

    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      return line.replace(IMPORT_REGEXP, '$1/index.js"');
    }

    return line;
  });

  const withFixedImports = fixedLines.join("\n");
  fs.writeFileSync(filePath, withFixedImports);
}
