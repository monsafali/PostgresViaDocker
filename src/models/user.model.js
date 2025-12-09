import pool from "../database/db.js";



const createUserTable = async () => {
    const QueryText = `
    CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW()
   
)`;
    
try {
    pool.query(QueryText)
    console.log("User table created if not exits")
} catch (error) {
    console.log("Somethign went wrong while created table", error)
    
}
}



export default createUserTable;