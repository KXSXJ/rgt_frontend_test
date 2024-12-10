"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/books";
exports.ids = ["pages/api/books"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiUrl\": () => (/* binding */ apiUrl),\n/* harmony export */   \"handleMySql\": () => (/* binding */ handleMySql),\n/* harmony export */   \"pool\": () => (/* binding */ pool),\n/* harmony export */   \"selectAllBooks\": () => (/* binding */ selectAllBooks)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst apiUrl = \"http://localhost:3000\";\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME,\n    port: 3306\n});\nconst handleMySql = async (sqlQuery)=>{\n    try {\n        const [rows] = await pool.query(sqlQuery);\n        return rows;\n    } catch (err) {\n        console.error(\"MySQL query error: \", err);\n        throw new Error(\"Database query failed\");\n    }\n};\nconst selectAllBooks = async ()=>{\n    const sqlQuery = \"SELECT * FROM books\";\n    const [rows] = await pool.query(sqlQuery);\n    return rows;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtQztBQUc1QixNQUFNQyxNQUFNLEdBQUdDLHVCQUErQixDQUFDO0FBRS9DLE1BQU1HLElBQUksR0FBR0wsZ0VBQWdCLENBQUM7SUFDakNPLElBQUksRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLE9BQU87SUFDekJDLElBQUksRUFBRVAsT0FBTyxDQUFDQyxHQUFHLENBQUNPLE9BQU87SUFDekJDLFFBQVEsRUFBRVQsT0FBTyxDQUFDQyxHQUFHLENBQUNTLFdBQVc7SUFDakNDLFFBQVEsRUFBRVgsT0FBTyxDQUFDQyxHQUFHLENBQUNXLE9BQU87SUFDN0JDLElBQUksRUFBRSxJQUFJO0NBQ2IsQ0FBQyxDQUFDO0FBR0ksTUFBTUMsV0FBVyxHQUFHLE9BQU9DLFFBQWdCLEdBQUs7SUFDbkQsSUFBSTtRQUNBLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsTUFBTWIsSUFBSSxDQUFDYyxLQUFLLENBQUNGLFFBQVEsQ0FBQztRQUN6QyxPQUFPQyxJQUFJLENBQUM7SUFDaEIsRUFBRSxPQUFPRSxHQUFHLEVBQUU7UUFDVkMsT0FBTyxDQUFDQyxLQUFLLENBQUMscUJBQXFCLEVBQUVGLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNMLENBQUM7QUFHTSxNQUFNQyxjQUFjLEdBQUcsVUFBMEI7SUFDcEQsTUFBTVAsUUFBUSxHQUFHLHFCQUFxQjtJQUN0QyxNQUFNLENBQUNDLElBQUksQ0FBQyxHQUFHLE1BQU1iLElBQUksQ0FBQ2MsS0FBSyxDQUFDRixRQUFRLENBQUM7SUFDekMsT0FBT0MsSUFBSSxDQUFXO0FBQzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RiLnRzPzllNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vayB9IGZyb20gJ0AvcGFnZXMvYXBpL2Jvb2tzJztcclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcclxuXHJcbmV4cG9ydCBjb25zdCBwb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgcG9ydCA6MzMwNixcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU15U3FsID0gYXN5bmMgKHNxbFF1ZXJ5OiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgcG9vbC5xdWVyeShzcWxRdWVyeSk7XHJcbiAgICAgICAgcmV0dXJuIHJvd3M7IFxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTXlTUUwgcXVlcnkgZXJyb3I6ICcsIGVycik7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhYmFzZSBxdWVyeSBmYWlsZWQnKTsgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QWxsQm9va3MgPSBhc3luYyAoKTpQcm9taXNlPEJvb2tbXT49PntcclxuICAgIGNvbnN0IHNxbFF1ZXJ5ID0gJ1NFTEVDVCAqIEZST00gYm9va3MnO1xyXG4gICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgcG9vbC5xdWVyeShzcWxRdWVyeSk7XHJcbiAgICByZXR1cm4gcm93cyBhcyBCb29rW107XHJcbn0iXSwibmFtZXMiOlsibXlzcWwiLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInBvb2wiLCJjcmVhdGVQb29sIiwiaG9zdCIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJwb3J0IiwiaGFuZGxlTXlTcWwiLCJzcWxRdWVyeSIsInJvd3MiLCJxdWVyeSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwic2VsZWN0QWxsQm9va3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/lib/db.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/books/index.ts":
/*!**************************************!*\
  !*** ./src/pages/api/books/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(api)/./src/lib/db.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const books = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.selectAllBooks)();\n            res.status(200).json(books);\n        } catch (error) {\n            console.error(\"책 목록을 가져오는 데 실패했습니다:\", error);\n            res.status(500).json({\n                error: \"책 목록을 가져오는 데 실패했습니다.\"\n            });\n        }\n    } else if (req.method === \"POST\") {}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Jvb2tzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtEO0FBb0JsQyxlQUFlQyxPQUFPLENBQUVDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUc7SUFDaEYsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssS0FBSyxFQUFFO1FBQ3RCLElBQUk7WUFDRixNQUFNQyxLQUFLLEdBQUcsTUFBTUwsdURBQWMsRUFBRTtZQUNwQ0csR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsS0FBSyxDQUFDLENBQUM7UUFDOUIsRUFBRSxPQUFPRyxLQUFLLEVBQUU7WUFDZEMsT0FBTyxDQUFDRCxLQUFLLENBQUMsc0JBQXNCLEVBQUVBLEtBQUssQ0FBQyxDQUFDO1lBQzdDTCxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxLQUFLLEVBQUUsc0JBQXNCO2FBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7SUFDSCxPQUFNLElBQUdOLEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBQyxDQUVqQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvYm9va3MvaW5kZXgudHM/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGlVcmwsIHNlbGVjdEFsbEJvb2tzIH0gZnJvbSBcIkAvbGliL2RiXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IEVycm9yIGZyb20gXCJuZXh0L2Vycm9yXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQm9va3tcclxuICAgIGlkIDogbnVtYmVyLFxyXG4gICAgdGl0bGUgOnN0cmluZyxcclxuICAgIHN1Yl90aXRsZTpzdHJpbmcsXHJcbiAgICBwcmljZSA6IG51bWJlcixcclxuICAgIGF1dGhvciA6c3RyaW5nLFxyXG4gICAgaW1hZ2VfdXJsIDpzdHJpbmcsXHJcbiAgICBwdWJsaXNoZXIgOiBzdHJpbmcsXHJcbiAgICBwdWJsaXNoZWRfZGF0ZTpEYXRlLFxyXG4gICAgc2FsZXNfcXVhbnRpdHk6bnVtYmVyLFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSAge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgc2VsZWN0QWxsQm9va3MoKTsgXHJcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihib29rcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+yxhSDrqqnroZ3snYQg6rCA7KC47Jik64qUIOuNsCDsi6TtjKjtlojsirXri4jri6Q6JywgZXJyb3IpO1xyXG4gICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ+yxhSDrqqnroZ3snYQg6rCA7KC47Jik64qUIOuNsCDsi6TtjKjtlojsirXri4jri6QuJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1lbHNlIGlmKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsic2VsZWN0QWxsQm9va3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiYm9va3MiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/books/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/books/index.ts"));
module.exports = __webpack_exports__;

})();