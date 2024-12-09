// app/_lib/db.ts
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    port :3306,
});

export const handleMySql = async (sqlQuery: string) => {
    try {
        const [rows] = await pool.query(sqlQuery);
        return rows; 
    } catch (err) {
        console.error('MySQL query error: ', err);
        throw new Error('Database query failed'); 
    }
}

export const createBook = async ()=>{
    const sqlQuery = 'INSERT INTO books (title, author, publication_year) VALUES (?,?,?)';
    const bookData = ['New Book', 'Author Name', 2022];
}

export const selectAllBooks = async ()=>{
    const sqlQuery = 'SELECT * FROM books';
    return await handleMySql(sqlQuery);
}