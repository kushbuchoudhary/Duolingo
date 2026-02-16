import dotenv from "dotenv";
dotenv.config();

import { neon } from "@neondatabase/serverless";

console.log("Loaded DATABASE_URL:", process.env.DATABASE_URL); // debug line

const sql = neon(process.env.DATABASE_URL);

async function main() {
  try {
    const rows = await sql`SELECT * FROM courses`;


    console.log("Course Records:");
    console.log(rows);
  } catch (err) {
    console.error("DB Error:", err);
  }
}

main();
