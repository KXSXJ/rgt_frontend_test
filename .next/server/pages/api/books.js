"use strict";
(() => {
var exports = {};
exports.id = 187;
exports.ids = [187];
exports.modules = {

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2418:
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 9015:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBook": () => (/* binding */ createBook),
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "getBooks": () => (/* binding */ getBooks)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4095);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const page = req.query.page || 1;
            const books = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .selectBooks */ .xk)(Number(page));
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
            (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .createBook */ .IY)(data);
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

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [95], () => (__webpack_exec__(9015)));
module.exports = __webpack_exports__;

})();