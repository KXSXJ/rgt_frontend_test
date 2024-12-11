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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiUrl\": () => (/* binding */ apiUrl),\n/* harmony export */   \"getTotalCount\": () => (/* binding */ getTotalCount),\n/* harmony export */   \"handleMySql\": () => (/* binding */ handleMySql),\n/* harmony export */   \"pool\": () => (/* binding */ pool),\n/* harmony export */   \"selectBooks\": () => (/* binding */ selectBooks)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst apiUrl = \"http://localhost:3000\";\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    password: process.env.DB_PASSWORD,\n    database: process.env.DB_NAME,\n    port: 3306\n});\nconst handleMySql = async (sqlQuery)=>{\n    try {\n        const [rows] = await pool.query(sqlQuery);\n        return rows;\n    } catch (err) {\n        console.error(\"MySQL query error: \", err);\n        throw new Error(\"Database query failed\");\n    }\n};\nconst selectBooks = async (page)=>{\n    const sqlQuery = `SELECT * FROM books WHERE id > ${page * 10 - 10} LIMIT 10`;\n    const [rows] = await pool.query(sqlQuery);\n    return rows;\n};\nconst getTotalCount = async ()=>{\n    const sqlQuery = `SELECT COUNT(*) as total_count FROM books`;\n    const [rows] = await pool.query(sqlQuery);\n    return rows[0].total_count;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvbGliL2RiLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDbUM7QUFHNUIsTUFBTUMsTUFBTSxHQUFHQyx1QkFBK0IsQ0FBQztBQUUvQyxNQUFNRyxJQUFJLEdBQUdMLGdFQUFnQixDQUFDO0lBQ2pDTyxJQUFJLEVBQUVMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxPQUFPO0lBQ3pCQyxJQUFJLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxPQUFPO0lBQ3pCQyxRQUFRLEVBQUVULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxXQUFXO0lBQ2pDQyxRQUFRLEVBQUVYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxPQUFPO0lBQzdCQyxJQUFJLEVBQUUsSUFBSTtDQUNiLENBQUMsQ0FBQztBQUdJLE1BQU1DLFdBQVcsR0FBRyxPQUFPQyxRQUFnQixHQUFLO0lBQ25ELElBQUk7UUFDQSxNQUFNLENBQUNDLElBQUksQ0FBQyxHQUFHLE1BQU1iLElBQUksQ0FBQ2MsS0FBSyxDQUFDRixRQUFRLENBQUM7UUFDekMsT0FBT0MsSUFBSSxDQUFDO0lBQ2hCLEVBQUUsT0FBT0UsR0FBRyxFQUFFO1FBQ1ZDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLHFCQUFxQixFQUFFRixHQUFHLENBQUMsQ0FBQztRQUMxQyxNQUFNLElBQUlHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7QUFDTCxDQUFDO0FBR00sTUFBTUMsV0FBVyxHQUFHLE9BQU9DLElBQVcsR0FBbUI7SUFDNUQsTUFBTVIsUUFBUSxHQUFHLENBQUMsK0JBQStCLEVBQUUsSUFBSyxHQUFDLEVBQUUsR0FBRSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQzFFLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsTUFBTWIsSUFBSSxDQUFDYyxLQUFLLENBQUNGLFFBQVEsQ0FBQztJQUN6QyxPQUFPQyxJQUFJLENBQVc7QUFDMUIsQ0FBQztBQUVNLE1BQU1RLGFBQWEsR0FBRyxVQUFVO0lBQ25DLE1BQU1ULFFBQVEsR0FBRyxDQUFDLHlDQUF5QyxDQUFDO0lBQzVELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEdBQUcsTUFBTWIsSUFBSSxDQUFDYyxLQUFLLENBQUNGLFFBQVEsQ0FBQztJQUN6QyxPQUFPQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNTLFdBQVcsQ0FBQztBQUMvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9kYi50cz85ZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb2sgfSBmcm9tICdAL3BhZ2VzL2FwaS9ib29rcyc7XHJcbmltcG9ydCBteXNxbCBmcm9tICdteXNxbDIvcHJvbWlzZSc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFwaVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkw7XHJcblxyXG5leHBvcnQgY29uc3QgcG9vbCA9IG15c3FsLmNyZWF0ZVBvb2woe1xyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIHVzZXI6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTU1dPUkQsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIHBvcnQgOjMzMDYsXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVNeVNxbCA9IGFzeW5jIChzcWxRdWVyeTogc3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IHBvb2wucXVlcnkoc3FsUXVlcnkpO1xyXG4gICAgICAgIHJldHVybiByb3dzOyBcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ015U1FMIHF1ZXJ5IGVycm9yOiAnLCBlcnIpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRGF0YWJhc2UgcXVlcnkgZmFpbGVkJyk7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEJvb2tzID0gYXN5bmMgKHBhZ2U6bnVtYmVyKTpQcm9taXNlPEJvb2tbXT49PntcclxuICAgIGNvbnN0IHNxbFF1ZXJ5ID0gYFNFTEVDVCAqIEZST00gYm9va3MgV0hFUkUgaWQgPiAkeyhwYWdlKjEwKS0xMH0gTElNSVQgMTBgO1xyXG4gICAgY29uc3QgW3Jvd3NdID0gYXdhaXQgcG9vbC5xdWVyeShzcWxRdWVyeSk7XHJcbiAgICByZXR1cm4gcm93cyBhcyBCb29rW107XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUb3RhbENvdW50ID0gYXN5bmMgKCk9PntcclxuICAgIGNvbnN0IHNxbFF1ZXJ5ID0gYFNFTEVDVCBDT1VOVCgqKSBhcyB0b3RhbF9jb3VudCBGUk9NIGJvb2tzYDtcclxuICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IHBvb2wucXVlcnkoc3FsUXVlcnkpO1xyXG4gICAgcmV0dXJuIHJvd3NbMF0udG90YWxfY291bnQ7XHJcbn0iXSwibmFtZXMiOlsibXlzcWwiLCJhcGlVcmwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsInBvb2wiLCJjcmVhdGVQb29sIiwiaG9zdCIsIkRCX0hPU1QiLCJ1c2VyIiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJwb3J0IiwiaGFuZGxlTXlTcWwiLCJzcWxRdWVyeSIsInJvd3MiLCJxdWVyeSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwic2VsZWN0Qm9va3MiLCJwYWdlIiwiZ2V0VG90YWxDb3VudCIsInRvdGFsX2NvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/lib/db.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/books/index.ts":
/*!**************************************!*\
  !*** ./src/pages/api/books/index.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"getBooks\": () => (/* binding */ getBooks)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db */ \"(api)/./src/lib/db.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const page = req.query.page || 1;\n            const books = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.selectBooks)(Number(page));\n            res.status(200).json(books);\n        } catch (error) {\n            console.error(\"책 목록을 가져오는 데 실패했습니다:\", error);\n            res.status(500).json({\n                error: \"책 목록을 가져오는 데 실패했습니다.\"\n            });\n        }\n    } else if (req.method === \"POST\") {}\n}\nconst getBooks = async (page)=>{\n    return axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(`${_lib_db__WEBPACK_IMPORTED_MODULE_0__.apiUrl}/api/books?page=${page}`).then((res)=>res.data).catch((err)=>{\n        console.error(err);\n        throw new Error(\"목록을 가져오는데 실패했습니다.\");\n    });\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Jvb2tzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0M7QUFDckI7QUF5QlYsZUFBZUcsT0FBTyxDQUFFQyxHQUFtQixFQUFFQyxHQUFvQixFQUFHO0lBQ2hGLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUV0QixJQUFJO1lBQ0YsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLEtBQUssQ0FBQ0QsSUFBSSxJQUFHLENBQUM7WUFDL0IsTUFBTUUsS0FBSyxHQUFHLE1BQU1SLG9EQUFXLENBQUNTLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDLENBQUM7WUFDN0NGLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNILEtBQUssQ0FBQyxDQUFDO1FBQzlCLEVBQUUsT0FBT0ksS0FBSyxFQUFFO1lBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHNCQUFzQixFQUFFQSxLQUFLLENBQUMsQ0FBQztZQUM3Q1IsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFLHNCQUFzQjthQUFFLENBQUMsQ0FBQztRQUMxRCxDQUFDO0lBQ0gsT0FBTSxJQUFHVCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUMsQ0FFakMsQ0FBQztBQUNMLENBQUM7QUFHTSxNQUFNUyxRQUFRLEdBQUcsT0FBTVIsSUFBVyxHQUFtQjtJQUMxRCxPQUFPTCxpREFBUyxDQUFDLENBQUMsRUFBRUYsMkNBQU0sQ0FBQyxnQkFBZ0IsRUFBRU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNuRFUsSUFBSSxDQUFDWixDQUFBQSxHQUFHLEdBQUVBLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDLENBQ25CQyxLQUFLLENBQUNDLENBQUFBLEdBQUcsR0FBRTtRQUNWTixPQUFPLENBQUNELEtBQUssQ0FBQ08sR0FBRyxDQUFDLENBQUM7UUFDbkIsTUFBTSxJQUFJQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9ib29rcy9pbmRleC50cz9mNjhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaVVybCwgc2VsZWN0Qm9va3MgfSBmcm9tIFwiQC9saWIvZGJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJvb2t7XHJcbiAgICBpZCA6IG51bWJlcixcclxuICAgIHRpdGxlIDpzdHJpbmcsXHJcbiAgICBzdWJfdGl0bGU6c3RyaW5nLFxyXG4gICAgcHJpY2UgOiBudW1iZXIsXHJcbiAgICBhdXRob3IgOnN0cmluZyxcclxuICAgIGltYWdlX3VybCA6c3RyaW5nLFxyXG4gICAgcHVibGlzaGVyIDogc3RyaW5nLFxyXG4gICAgcHVibGlzaGVkX2RhdGU6RGF0ZSxcclxuICAgIHNhbGVzX3F1YW50aXR5Om51bWJlcixcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCb29rTGlzdFByb3BzIHtcclxuICAgIGJvb2tzOiBCb29rW107XHJcbiAgfVxyXG5leHBvcnQgaW50ZXJmYWNlIEJvb2tJdGVtUHJvcHN7XHJcbiAgICBib29rOkJvb2s7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlciAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpICB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcclxuICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBwYWdlID0gcmVxLnF1ZXJ5LnBhZ2V8fCAxO1xyXG4gICAgICAgICAgY29uc3QgYm9va3MgPSBhd2FpdCBzZWxlY3RCb29rcyhOdW1iZXIocGFnZSkpOyBcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGJvb2tzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcign7LGFIOuqqeuhneydhCDqsIDsoLjsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpDonLCBlcnJvcik7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAn7LGFIOuqqeuhneydhCDqsIDsoLjsmKTripQg642wIOyLpO2MqO2WiOyKteuLiOuLpC4nIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfWVsc2UgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCb29rcyA9IGFzeW5jKHBhZ2U6bnVtYmVyKTpQcm9taXNlPEJvb2tbXT49PntcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAke2FwaVVybH0vYXBpL2Jvb2tzP3BhZ2U9JHtwYWdlfWApXHJcbiAgLnRoZW4ocmVzPT5yZXMuZGF0YSlcclxuICAuY2F0Y2goZXJyPT57XHJcbiAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ+uqqeuhneydhCDqsIDsoLjsmKTripTrjbAg7Iuk7Yyo7ZaI7Iq164uI64ukLicpO1xyXG4gIH0pXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6WyJhcGlVcmwiLCJzZWxlY3RCb29rcyIsImF4aW9zIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInBhZ2UiLCJxdWVyeSIsImJvb2tzIiwiTnVtYmVyIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImdldEJvb2tzIiwiZ2V0IiwidGhlbiIsImRhdGEiLCJjYXRjaCIsImVyciIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/books/index.ts\n");

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