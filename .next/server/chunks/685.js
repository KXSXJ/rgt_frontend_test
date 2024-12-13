"use strict";
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 8828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FX": () => (/* binding */ getTotalCount),
/* harmony export */   "JW": () => (/* binding */ apiUrl)
/* harmony export */ });
/* unused harmony exports pool, handleMySql, selectBooks, selectBookDetail, updateBook, createBook, deleteBook */
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
        published_date = '${dayjs(book.published_date).format("YYYY-MM-DD")}',
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


/***/ }),

/***/ 6940:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G7": () => (/* binding */ getBookDetail),
/* harmony export */   "TS": () => (/* binding */ deleteBookDetail),
/* harmony export */   "rP": () => (/* binding */ updateBookDetail)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8828);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const id = req.query.id || 1;
            const book = await selectBookDetail(Number(id));
            res.status(200).json(book);
        } catch (error) {
            console.error("책 정보를 가져오는 데 실패했습니다:", error);
            res.status(500).json({
                error: "책 정보를 가져오는 데 실패했습니다."
            });
        }
    } else if (req.method === "PUT") {
        try {
            const id1 = req.query.id || 1;
            const { title , sub_title , price , author , image_url , publisher , published_date , sales_quantity  } = req.body;
            const data = {
                title,
                sub_title,
                price,
                author,
                image_url,
                publisher,
                published_date: published_date,
                sales_quantity
            };
            updateBookQuery(Number(id1), data);
            res.status(200);
        } catch (error1) {
            console.error("책 정보를 업데이트에 실패했습니다. :", error1);
            res.status(500).json({
                error: "책 정보를 업데이트에 실패했습니다."
            });
        }
    } else if (req.method === "DELETE") {
        try {
            const id2 = req.query.id || 1;
            deleteBookQuery(Number(id2));
        } catch (error2) {
            console.error("책 삭제에 패했습니다. :", error2);
            res.status(500).json({
                error: "책 삭제에 패했습니다."
            });
        }
    }
}
const getBookDetail = (id)=>{
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .apiUrl */ .JW}/api/books/${id}`).then((res)=>res.data).catch((err)=>{
        console.error(err);
        throw new Error("책 정보를 가져오는데 실패했습니다.");
    });
};
const updateBookDetail = (id, data)=>{
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].put(`${_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .apiUrl */ .JW}/api/books/${id}`, data).then((res)=>{
        window.confirm("수정이 완료되었습니다.");
        res.data;
    }).catch((err)=>{
        console.error(err);
        throw new Error("책 정보 업데이트에 실패했습니다.");
    });
};
const deleteBookDetail = (id)=>{
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](`${_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .apiUrl */ .JW}/api/books/${id}`).then((res)=>res.data).catch((err)=>{
        console.error(err);
        throw new Error("책을 삭제하는데 실패했습니다.");
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IY": () => (/* binding */ createBook),
/* harmony export */   "yZ": () => (/* binding */ getBooks)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8828);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const page = req.query.page || 1;
            const books = await selectBooks(Number(page));
            res.status(200).json(books);
        } catch (error) {
            console.error("책 목록을 가져오는 데 실패했습니다:", error);
            res.status(500).json({
                error: "책 목록을 가져오는 데 실패했습니다."
            });
        }
    } else if (req.method === "POST") {
        //생성
        try {
            const { title , sub_title , price , author , image_url , publisher , published_date , sales_quantity  } = req.body;
            const data = {
                title,
                sub_title,
                price,
                author,
                image_url,
                publisher,
                published_date: published_date,
                sales_quantity
            };
            console.log(data);
            createBookQuery(data);
        } catch (error1) {
            console.error("책 생성에 실패했습니다:", error1);
            res.status(500).json({
                error: "책 생성에 실패했습니다."
            });
        }
    }
}
const getBooks = async (page)=>{
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(`${_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .apiUrl */ .JW}/api/books?page=${page}`).then((res)=>res.data).catch((err)=>{
        console.error(err);
        throw new Error("목록을 가져오는데 실패했습니다.");
    });
};
const createBook = async (data)=>{
    return axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .apiUrl */ .JW}/api/books`, data).then((res)=>{});
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;