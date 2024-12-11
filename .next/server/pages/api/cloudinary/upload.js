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
exports.id = "pages/api/cloudinary/upload";
exports.ids = ["pages/api/cloudinary/upload"];
exports.modules = {

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ "(api)/./src/pages/api/cloudinary/upload/index.tsx":
/*!***************************************************!*\
  !*** ./src/pages/api/cloudinary/upload/index.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formidable */ \"formidable\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_1__]);\nformidable__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\ncloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.config({\n    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,\n    api_key: process.env.CLOUDINARY_API_KEY,\n    api_secret: process.env.CLOUDINARY_API_SECRET\n});\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const form = (0,formidable__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        form.parse(req, async (err, fields, files)=>{\n            if (err) {\n                console.error(\"파일 파싱 에러:\", err);\n                res.status(500).json({\n                    error: \"파일 파싱 실패\"\n                });\n                return;\n            }\n            const file = Array.isArray(files.file) ? files.file[0] : files.file;\n            if (!file) {\n                console.error(\"파일이 없음\");\n                res.status(400).json({\n                    error: \"파일이 없습니다.\"\n                });\n                return;\n            }\n            console.log(\"File path:\", file.filepath); // 파일 경로 확인\n            try {\n                const result = await cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.uploader.upload(file.filepath, {\n                    folder: \"rgt_frontend_test_images\"\n                });\n                res.status(200).json({\n                    secure_url: result.secure_url\n                });\n            } catch (error) {\n                console.error(\"Cloudinary 업로드 에러:\", error);\n                res.status(500).json({\n                    error: \"이미지 업로드 실패\"\n                });\n            }\n        });\n    } else {\n        res.status(405).json({\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2Nsb3VkaW5hcnkvdXBsb2FkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUM4QztBQUNWO0FBS3BDQyxpREFBaUIsQ0FBQztJQUNoQkcsVUFBVSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MscUJBQXFCO0lBQzdDQyxPQUFPLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxrQkFBa0I7SUFDdkNDLFVBQVUsRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLHFCQUFxQjtDQUM5QyxDQUFDLENBQUM7QUFFSSxNQUFNUixNQUFNLEdBQUc7SUFDcEJTLEdBQUcsRUFBRTtRQUNIQyxVQUFVLEVBQUUsS0FBSztLQUNsQjtDQUNGO0FBRWMsZUFBZUMsT0FBTyxDQUFDQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQzdFLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN2QixNQUFNQyxJQUFJLEdBQUdoQixzREFBVSxFQUFFO1FBQ3pCZ0IsSUFBSSxDQUFDQyxLQUFLLENBQUNKLEdBQUcsRUFBRSxPQUFPSyxHQUFHLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxHQUFLO1lBQzFDLElBQUlGLEdBQUcsRUFBRTtnQkFDUEcsT0FBTyxDQUFDQyxLQUFLLENBQUMsV0FBVyxFQUFFSixHQUFHLENBQUMsQ0FBQztnQkFDaENKLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVGLEtBQUssRUFBRSxVQUFVO2lCQUFFLENBQUMsQ0FBQztnQkFDNUMsT0FBTztZQUNULENBQUM7WUFDRCxNQUFNRyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDUCxLQUFLLENBQUNLLElBQUksQ0FBQyxHQUFHTCxLQUFLLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0wsS0FBSyxDQUFDSyxJQUFJO1lBRW5FLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2dCQUNUSixPQUFPLENBQUNDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDeEJSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVGLEtBQUssRUFBRSxXQUFXO2lCQUFFLENBQUMsQ0FBQztnQkFDN0MsT0FBTztZQUNULENBQUM7WUFFREQsT0FBTyxDQUFDTyxHQUFHLENBQUMsWUFBWSxFQUFFSCxJQUFJLENBQUNJLFFBQVEsQ0FBQyxDQUFDLENBQUMsV0FBVztZQUVyRCxJQUFJO2dCQUNGLE1BQU1DLE1BQU0sR0FBRyxNQUFNL0IsMERBQTBCLENBQUMwQixJQUFJLENBQUNJLFFBQVEsRUFBRTtvQkFDN0RJLE1BQU0sRUFBRSwwQkFBMEI7aUJBQ25DLENBQUM7Z0JBQ0ZuQixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFVSxVQUFVLEVBQUVKLE1BQU0sQ0FBQ0ksVUFBVTtpQkFBRSxDQUFDLENBQUM7WUFDMUQsRUFBRSxPQUFPWixLQUFLLEVBQUU7Z0JBQ2RELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLG9CQUFvQixFQUFFQSxLQUFLLENBQUMsQ0FBQztnQkFDM0NSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVGLEtBQUssRUFBRSxZQUFZO2lCQUFFLENBQUMsQ0FBQztZQUNoRCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxPQUFPO1FBQ0xSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUYsS0FBSyxFQUFFLG9CQUFvQjtTQUFFLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQ1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvY2xvdWRpbmFyeS91cGxvYWQvaW5kZXgudHN4PzRiN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XHJcbmltcG9ydCB7IHYyIGFzIGNsb3VkaW5hcnkgfSBmcm9tICdjbG91ZGluYXJ5JztcclxuaW1wb3J0IGZvcm1pZGFibGUgZnJvbSAnZm9ybWlkYWJsZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGFwaVVybCB9IGZyb20gJ0AvbGliL2RiJztcclxuXHJcblxyXG5jbG91ZGluYXJ5LmNvbmZpZyh7XHJcbiAgY2xvdWRfbmFtZTogcHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9DTE9VRF9OQU1FLFxyXG4gIGFwaV9rZXk6IHByb2Nlc3MuZW52LkNMT1VESU5BUllfQVBJX0tFWSxcclxuICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9TRUNSRVQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCBmb3JtID0gZm9ybWlkYWJsZSgpO1xyXG4gICAgICAgIGZvcm0ucGFyc2UocmVxLCBhc3luYyAoZXJyLCBmaWVsZHMsIGZpbGVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCftjIzsnbwg7YyM7IuxIOyXkOufrDonLCBlcnIpO1xyXG4gICAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6ICftjIzsnbwg7YyM7IuxIOyLpO2MqCcgfSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gQXJyYXkuaXNBcnJheShmaWxlcy5maWxlKSA/IGZpbGVzLmZpbGVbMF0gOiBmaWxlcy5maWxlO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghZmlsZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ+2MjOydvOydtCDsl4bsnYwnKTtcclxuICAgICAgICAgICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAn7YyM7J287J20IOyXhuyKteuLiOuLpC4nIH0pO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGaWxlIHBhdGg6JywgZmlsZS5maWxlcGF0aCk7IC8vIO2MjOydvCDqsr3roZwg7ZmV7J24XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbG91ZGluYXJ5LnVwbG9hZGVyLnVwbG9hZChmaWxlLmZpbGVwYXRoLCB7XHJcbiAgICAgICAgICAgICAgICBmb2xkZXI6ICdyZ3RfZnJvbnRlbmRfdGVzdF9pbWFnZXMnLFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc2VjdXJlX3VybDogcmVzdWx0LnNlY3VyZV91cmwgfSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2xvdWRpbmFyeSDsl4XroZzrk5wg7JeQ65+sOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAn7J2066+47KeAIOyXheuhnOuTnCDsi6TtjKgnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XHJcbiAgICAgIH1cclxufSJdLCJuYW1lcyI6WyJ2MiIsImNsb3VkaW5hcnkiLCJmb3JtaWRhYmxlIiwiY29uZmlnIiwiY2xvdWRfbmFtZSIsInByb2Nlc3MiLCJlbnYiLCJDTE9VRElOQVJZX0NMT1VEX05BTUUiLCJhcGlfa2V5IiwiQ0xPVURJTkFSWV9BUElfS0VZIiwiYXBpX3NlY3JldCIsIkNMT1VESU5BUllfQVBJX1NFQ1JFVCIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZm9ybSIsInBhcnNlIiwiZXJyIiwiZmllbGRzIiwiZmlsZXMiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZmlsZSIsIkFycmF5IiwiaXNBcnJheSIsImxvZyIsImZpbGVwYXRoIiwicmVzdWx0IiwidXBsb2FkZXIiLCJ1cGxvYWQiLCJmb2xkZXIiLCJzZWN1cmVfdXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/cloudinary/upload/index.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/cloudinary/upload/index.tsx"));
module.exports = __webpack_exports__;

})();