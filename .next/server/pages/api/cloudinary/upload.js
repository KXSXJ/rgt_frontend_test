"use strict";
(() => {
var exports = {};
exports.id = 182;
exports.ids = [182];
exports.modules = {

/***/ 3518:
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ 6705:
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ 9085:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3518);
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6705);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_1__]);
formidable__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
const config = {
    api: {
        bodyParser: false
    }
};
async function handler(req, res) {
    if (req.method === "POST") {
        const form = (0,formidable__WEBPACK_IMPORTED_MODULE_1__["default"])();
        form.parse(req, async (err, fields, files)=>{
            if (err) {
                console.error("파일 파싱 에러:", err);
                res.status(500).json({
                    error: "파일 파싱 실패"
                });
                return;
            }
            const file = Array.isArray(files.file) ? files.file[0] : files.file;
            if (!file) {
                console.error("파일이 없음");
                res.status(400).json({
                    error: "파일이 없습니다."
                });
                return;
            }
            console.log("File path:", file.filepath); // 파일 경로 확인
            try {
                const result = await cloudinary__WEBPACK_IMPORTED_MODULE_0__.v2.uploader.upload(file.filepath, {
                    folder: "rgt_frontend_test_images"
                });
                res.status(200).json({
                    secure_url: result.secure_url
                });
            } catch (error) {
                console.error("Cloudinary 업로드 에러:", error);
                res.status(500).json({
                    error: "이미지 업로드 실패"
                });
            }
        });
    } else {
        res.status(405).json({
            error: "Method Not Allowed"
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9085));
module.exports = __webpack_exports__;

})();