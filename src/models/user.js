import pool from "../database/db.js";

export const createUserTable = async () => {
  const QueryText = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255),
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;

  try {
    await pool.query(QueryText);
    console.log("Users table created (if not exists)");
  } catch (error) {
    console.log("Error creating Users table:", error);
  }
};


