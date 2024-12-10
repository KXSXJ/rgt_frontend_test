import { Book } from '@/pages/api/books';
import mysql from 'mysql2/promise';


export const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
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


export const selectAllBooks = async ():Promise<Book[]>=>{
    const sqlQuery = 'SELECT * FROM books';
    const [rows] = await pool.query(sqlQuery);
    return rows as Book[];
}