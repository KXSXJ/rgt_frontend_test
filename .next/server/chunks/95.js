"use strict";
exports.id = 95;
exports.ids = [95];
exports.modules = {

/***/ 4095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IY": () => (/* binding */ createBook),
/* harmony export */   "JW": () => (/* binding */ apiUrl),
/* harmony export */   "MC": () => (/* binding */ deleteBook),
/* harmony export */   "u8": () => (/* binding */ updateBook),
/* harmony export */   "xH": () => (/* binding */ selectBookDetail),
/* harmony export */   "xk": () => (/* binding */ selectBooks)
/* harmony export */ });
/* unused harmony exports pool, handleMySql, getTotalCount */
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2418);
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_1__);


const apiUrl = "http://localhost:3000";
const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_1___default().createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
});
const handleMySql = async (sqlQuery)=>{
    try {
        const [rows] = await pool.query(sqlQuery);
        return rows;
    } catch (err) {
        console.error("MySQL query error: ", err);
        throw new Error("Database query failed");
    }
};
const selectBooks = async (page)=>{
    const sqlQuery = `SELECT * FROM books WHERE id > ${page * 10 - 10} LIMIT 10`;
    const [rows] = await pool.query(sqlQuery);
    return rows;
};
const getTotalCount = async ()=>{
    const sqlQuery = `SELECT COUNT(*) as total_count FROM books`;
    const [rows] = await pool.query(sqlQuery);
    return rows[0].total_count;
};
const selectBookDetail = async (id)=>{
    const sqlQuery = `SELECT * FROM books WHERE id = ${id}`;
    const [row] = await pool.query(sqlQuery);
    return row[0];
};
const updateBook = async (id, book)=>{
    const sqlQuery = `
    UPDATE books 
    SET 
        title = '${book.title}',
        sub_title = '${book.sub_title}',
        price = ${book.price},
        author = '${book.author}',
        image_url = '${book.image_url}',
        publisher = '${book.publisher}',
        published_date = '${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(book.published_date).format("YYYY-MM-DD")}',
        sales_quantity = ${book.sales_quantity} 
    WHERE id = ${id}`;
    await pool.query(sqlQuery);
};
const createBook = async (book)=>{
    const sqlQuery = `
      INSERT INTO books (title, sub_title, price, author, image_url, publisher, published_date, sales_quantity)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
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
        console.error("책 생성 오류:", error);
        throw error;
    }
};
const deleteBook = async (id)=>{
    const sqlQuery = `DELETE FROM books WHERE id = ${id}`;
    try {
        const [result] = await pool.query(sqlQuery);
        if (result.affectedRows === 0) {
            throw new Error("책을 찾을 수 없습니다.");
        }
    } catch (error) {
        console.error("책 삭제 오류:", error);
        throw error;
    }
};


/***/ })

};
;