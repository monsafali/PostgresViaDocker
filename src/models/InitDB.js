import { OrdersTable } from "./orders.js";
import { ProductTable } from "./products.js";
import { createUserTable } from "./user.js";





export async function InitDB() {
  try {
    await createUserTable();
    await ProductTable();
    await OrdersTable();

    console.log("All tables created successfully!");
  } catch (error) {
    console.log("Error creating tables:", error);
  }
}
