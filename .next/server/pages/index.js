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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiUrl\": () => (/* binding */ apiUrl),\n/* harmony export */   \"handleMySql\": () => (/* binding */ handleMySql),\n/* harmony export */   \"pool\": () => (/* binding */ pool),\n/* harmony export */   \"selectAllBooks\": () => (/* binding */ selectAllBooks)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst apiUrl = \"http://localhost:3000\";\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME,\n    port: 3306\n});\nconst handleMySql = async (sqlQuery)=>{\n    try {\n        const [rows] = await pool.query(sqlQuery);\n        return rows;\n    } catch (err) {\n        console.error(\"MySQL query error: \", err);\n        throw new Error(\"Database query failed\");\n    }\n};\nconst selectAllBooks = async ()=>{\n    const sqlQuery = \"SELECT * FROM books\";\n    const [rows] = await pool.query(sqlQuery);\n    return rows;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNtQztBQUc1QixNQUFNQyxNQUFNLEdBQUdDLHVCQUErQixDQUFDO0FBRS9DLE1BQU1HLElBQUksR0FBR0wsZ0VBQWdCLENBQUM7SUFDakNPLElBQUksRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLE9BQU87SUFDekJDLElBQUksRUFBRVAsT0FBTyxDQUFDQyxHQUFHLENBQUNPLE9BQU87SUFDekJDLFFBQVEsRUFBRVQsT0FBTyxDQUFDQyxHQUFHLENBQUNTLFdBQVc7SUFDakNDLFFBQVEsRUFBRVgsT0FBTyxDQUFDQyxHQUFHLENBQUNXLE9BQU87SUFDN0JDLElBQUksRUFBRSxJQUFJO0NBQ2IsQ0FBQyxDQUFDO0FBR0ksTUFBTUMsV0FBVyxHQUFHLE9BQU9DLFFBQWdCLEdBQUs7SUFDbkQsSUFBSTtRQUNBLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsTUFBTWIsSUFBSSxDQUFDYyxLQUFLLENBQUNGLFFBQVEsQ0FBQztRQUN6QyxPQUFPQyxJQUFJLENBQUM7SUFDaEIsRUFBRSxPQUFPRSxHQUFHLEVBQUU7UUFDVkMsT0FBTyxDQUFDQyxLQUFLLENBQUMscUJBQXFCLEVBQUVGLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sSUFBSUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNMLENBQUM7QUFHTSxNQUFNQyxjQUFjLEdBQUcsVUFBMEI7SUFDcEQsTUFBTVAsUUFBUSxHQUFHLHFCQUFxQjtJQUN0QyxNQUFNLENBQUNDLElBQUksQ0FBQyxHQUFHLE1BQU1iLElBQUksQ0FBQ2MsS0FBSyxDQUFDRixRQUFRLENBQUM7SUFDekMsT0FBT0MsSUFBSSxDQUFXO0FBQzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL2RiLnRzPzllNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vayB9IGZyb20gJ0AvcGFnZXMvYXBpL2Jvb2tzJztcclxuaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcclxuXHJcbmV4cG9ydCBjb25zdCBwb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgdXNlcjogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTV09SRCxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgcG9ydCA6MzMwNixcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU15U3FsID0gYXN5bmMgKHNxbFF1ZXJ5OiBzdHJpbmcpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgcG9vbC5xdWVyeShzcWxRdWVyeSk7XHJcbiAgICAgICAgcmV0dXJuIHJvd3M7IFxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignTXlTUUwgcXVlcnkgZXJyb3I6ICcsIGVycik7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhYmFzZSBxdWVyeSBmYWlsZWQnKTsgXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QWxsQm9va3MgPSBhc3luYyAoKTpQcm9taXNlPEJvb2tbXT49PntcclxuICAgIGNvbnN0IHNxbFF1ZXJ5ID0gJ1NFTEVDVCAqIEZST00gYm9va3MnO1xyXG4gICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgcG9vbC5xdWVyeShzcWxRdWVyeSk7XHJcbiAgICByZXR1cm4gcm93cyBhcyBCb29rW107XHJcbn0iXSwibmFtZXMiOlsibXlzcWwiLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInBvb2wiLCJjcmVhdGVQb29sIiwiaG9zdCIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJwb3J0IiwiaGFuZGxlTXlTcWwiLCJzcWxRdWVyeSIsInJvd3MiLCJxdWVyeSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwic2VsZWN0QWxsQm9va3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/db.ts\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"./src/lib/db.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst getServerSideProps = async ()=>{\n    try {\n        const books = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`${_lib_db__WEBPACK_IMPORTED_MODULE_1__.apiUrl}/api/books`).then((res)=>res.data);\n        return {\n            props: {\n                books\n            }\n        };\n    } catch (error) {\n        return {\n            props: {\n                books: []\n            }\n        };\n    }\n};\nconst HomePage = ({ books  })=>{\n    console.log(books);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQWtDO0FBQ1I7QUFRbkIsTUFBTUUsa0JBQWtCLEdBQXVCLFVBQVk7SUFDOUQsSUFBSTtRQUNGLE1BQU1DLEtBQUssR0FBRyxNQUFNRixpREFBUyxDQUFDLENBQUMsRUFBRUQsMkNBQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDSyxJQUFJLENBQUMsQ0FBQ0MsR0FBRyxHQUFHQSxHQUFHLENBQUNDLElBQUksQ0FBQztRQUUxRSxPQUFPO1lBQ0xDLEtBQUssRUFBRTtnQkFBRUwsS0FBSzthQUFFO1NBQ2pCLENBQUM7SUFDSixFQUFFLE9BQU9NLEtBQUssRUFBRTtRQUNkLE9BQU87WUFDTEQsS0FBSyxFQUFFO2dCQUFFTCxLQUFLLEVBQUUsRUFBRTthQUFFO1NBQ3JCLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQyxDQUFDO0FBRUosTUFBTU8sUUFBUSxHQUFHLENBQUMsRUFBRVAsS0FBSyxHQUFpQixHQUFLO0lBQzNDUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsS0FBSyxDQUFDO0lBQ2xCLHFCQUNRLDZJQUVHLENBQ1Y7QUFDTCxDQUFDO0FBRUQsaUVBQWVPLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGlVcmwgfSBmcm9tIFwiQC9saWIvZGJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5pbXBvcnQgeyBCb29rIH0gZnJvbSBcIi4vYXBpL2Jvb2tzXCI7XHJcblxyXG5pbnRlcmZhY2UgSG9tZVBhZ2VQcm9wcyB7XHJcbiAgICBib29rczogQm9va1tdO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGJvb2tzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH0vYXBpL2Jvb2tzYCkudGhlbigocmVzKT0+cmVzLmRhdGEpO1xyXG4gICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgYm9va3MgfSxcclxuICAgICAgfTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgYm9va3M6IFtdIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuY29uc3QgSG9tZVBhZ2UgPSAoeyBib29rcyB9OiBIb21lUGFnZVByb3BzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhib29rcylcclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsiYXBpVXJsIiwiYXhpb3MiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJib29rcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwicHJvcHMiLCJlcnJvciIsIkhvbWVQYWdlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();