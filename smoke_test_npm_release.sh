rm -rf tmp

mkdir tmp
cd tmp

npm init -y
npm install @withabound/node-sdk

cat > index.js << EOF
const process = require("node:process");
const { Abound } = require("@withabound/node-sdk");

main()
async function main() {
  const abound = new Abound({
    appId: process.env.ABOUND_SMOKE_TEST_APP_ID,
    appSecret: process.env.ABOUND_SMOKE_TEST_APP_SECRET,
    environment: "SANDBOX",
  });

  const response = await abound.users.create({
    email: "smoke_test_npm_release@domain.com"
  });

  console.log(response);
}
EOF

node index.js
