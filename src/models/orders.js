import pool from "../database/db.js";

export const OrdersTable = async () => {
  const Query = `
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(id),
      product_id INT REFERENCES products(id),
      quantity INT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;

  try {
    await pool.query(Query);
    console.log("Orders table created");
  } catch (err) {
    console.error("Error creating Orders table", err);
  }
};
