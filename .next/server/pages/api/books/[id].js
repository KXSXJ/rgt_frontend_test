"use strict";
(() => {
var exports = {};
exports.id = 228;
exports.ids = [228];
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

/***/ 5456:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler),
/* harmony export */   "deleteBookDetail": () => (/* binding */ deleteBookDetail),
/* harmony export */   "getBookDetail": () => (/* binding */ getBookDetail),
/* harmony export */   "updateBookDetail": () => (/* binding */ updateBookDetail)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4095);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    if (req.method === "GET") {
        try {
            const id = req.query.id || 1;
            const book = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .selectBookDetail */ .xH)(Number(id));
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
            (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .updateBook */ .u8)(Number(id1), data);
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
            (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__/* .deleteBook */ .MC)(Number(id2));
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [95], () => (__webpack_exec__(5456)));
module.exports = __webpack_exports__;

})();