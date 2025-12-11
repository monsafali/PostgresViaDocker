import pool from "../database/db.js";

export const ProductTable = async () => {
  const Query = `
    CREATE TABLE IF NOT EXISTS products (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      price NUMERIC(10, 2) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;

  try {
    await pool.query(Query);
    console.log("Products table created");
  } catch (err) {
    console.error("Error creating Products table", err);
  }
};
