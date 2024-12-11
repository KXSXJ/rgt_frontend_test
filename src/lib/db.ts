import { Book } from '@/pages/api/books';
import dayjs from 'dayjs';
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


export const selectBooks = async (page:number):Promise<Book[]>=>{
    const sqlQuery = `SELECT * FROM books WHERE id > ${(page*10)-10} LIMIT 10`;
    const [rows] = await pool.query(sqlQuery);
    return rows as Book[];
}


export const getTotalCount = async ()=>{
    const sqlQuery = `SELECT COUNT(*) as total_count FROM books`;
    const [rows] = await pool.query(sqlQuery);
    return rows[0].total_count;
}

export const selectBookDetail = async (id:number):Promise<Book>=>{
    const sqlQuery =`SELECT * FROM books WHERE id = ${id}`;
    const [row] = await pool.query(sqlQuery);
    return row[0] as Book;
}

export const updateBook = async (id:number,book:Omit<Book,'id'>)=> {
    const sqlQuery = `
    UPDATE books 
    SET 
        title = '${book.title}',
        sub_title = '${book.sub_title}',
        price = ${book.price},
        author = '${book.author}',
        image_url = '${book.image_url}',
        publisher = '${book.publisher}',
        published_date = '${dayjs(book.published_date).format('YYYY-MM-DD')}',
        sales_quantity = ${book.sales_quantity} 
    WHERE id = ${id}`;

    await pool.query(sqlQuery);
}

export const createBook = async (book: Omit<Book, 'id'>) => {
    const sqlQuery = `
      INSERT INTO books (title, sub_title, price, author, image_url, publisher, published_date, sales_quantity)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
   
    const values= [
      book.title,
      book.sub_title,
      book.price,
      book.author,
      book.image_url,
      book.publisher,
      book.published_date,
      book.sales_quantity
    ];
    
    try {
      await pool.query(sqlQuery, values);
    } catch (error) {
      console.error('책 생성 오류:', error);
      throw error;
    }
  };



  export const deleteBook = async (id: number) => {
    const sqlQuery = `DELETE FROM books WHERE id = ${id}`;

    try {
      const [result] = await pool.query(sqlQuery);
      
      if ((result as any).affectedRows === 0) {
        throw new Error('책을 찾을 수 없습니다.');
      }
    } catch (error) {
      console.error('책 삭제 오류:', error);
      throw error;
    }
  };

