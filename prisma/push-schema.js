const { execSync } = require("child_process");
const { createClient } = require("@libsql/client");
require("dotenv").config();

async function main() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    console.error("Error: TURSO_DATABASE_URL and TURSO_AUTH_TOKEN must be defined in your .env file.");
    process.exit(1);
  }

  console.log("Generating SQL from schema.prisma...");
  let sql;
  try {
    sql = execSync("npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script", {
      encoding: "utf-8",
    });
    console.log("Generated SQL successfully.");
  } catch (error) {
    console.error("Failed to generate schema SQL:", error.message);
    process.exit(1);
  }

  console.log("Connecting to Turso database at:", url);
  const client = createClient({ url, authToken });

  console.log("Applying schema SQL to Turso database...");
  try {
    await client.executeMultiple(sql);
    console.log("Schema successfully synchronized to Turso database!");
  } catch (error) {
    console.error("Failed to apply schema SQL to Turso database:", error.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

main();
