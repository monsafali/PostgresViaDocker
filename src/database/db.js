import dotenv from "dotenv";
dotenv.config();


// import pkg from "pg";
// const { Pool } = pkg;

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASSWORD,
//   port: process.env.DB_PORT,
// });



// pool.on("connect", () => {
//   console.log("connected pool extablished database");
// });


// export default pool;






// import pkg from "pg";

// const { Pool } = pkg;

// const pool = new Pool({
//   connectionString: process.env.NEON_CONNECTION_STRING,
//   ssl: {
//     rejectUnauthorized: false, // Neon requires SSL
//   },
// });

// pool.on("connect", () => {
//   console.log("Connected to NeonDB successfully!");
// });

// export default pool;







// import pkg from "pg";
// const { Client } = pkg;
// const pool = new Client({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// try {
//   await pool.connect();
//   console.log("Database connected succesfuly");
// } catch (error) {
//   console.log("Somethign went wrong while connecting on database");
//   console.log(error);
//   process.exit(1);
// }

// export default pool;