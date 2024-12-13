exports.id = 582;
exports.ids = [582];
exports.modules = {

/***/ 3988:
/***/ ((module) => {

// Exports
module.exports = {
	"formWrapper": "form_formWrapper__cNlD9",
	"formTitle": "form_formTitle__AwdkR",
	"formGroup": "form_formGroup__UC2iV",
	"formError": "form_formError__aixgf",
	"formButtons": "form_formButtons__6ccNJ",
	"cancelBtn": "form_cancelBtn__b9ZJT",
	"submitBtn": "form_submitBtn__QOo4g",
	"previewImage": "form_previewImage__CJgV3"
};


/***/ }),

/***/ 8582:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BookEdit)
/* harmony export */ });
/* unused harmony export getStaticProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_api_books__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(781);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1908);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
/* harmony import */ var _utils_hooks_useSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6820);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8828);
/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3988);
/* harmony import */ var _styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _pages_api_books_id___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6940);
/* harmony import */ var _utils_hooks_useConfrim__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1877);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_books__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_7__, _pages_api_books_id___WEBPACK_IMPORTED_MODULE_9__]);
([_pages_api_books__WEBPACK_IMPORTED_MODULE_1__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, react_hook_form__WEBPACK_IMPORTED_MODULE_4__, axios__WEBPACK_IMPORTED_MODULE_7__, _pages_api_books_id___WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













async function uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file);
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].post(`${_lib_db__WEBPACK_IMPORTED_MODULE_8__/* .apiUrl */ .JW}/api/cloudinary/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data.secure_url;
    } catch (error) {
        console.error("이미지 업로드 실패:", error);
        throw new Error("Image upload failed");
    }
}
async function getStaticProps(context) {
    const { id , mode  } = context.params;
    const book = await getBookDetail(id); // 실제 API 호출로 교체
    return {
        props: {
            book: book || {},
            mode: mode
        }
    };
}
function BookEdit({ book , mode  }) {
    const { 0: preview , 1: setPreview  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(book?.image_url || "");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const schema = (0,_utils_hooks_useSchema__WEBPACK_IMPORTED_MODULE_5__/* .useSchema */ .I)();
    const { register , handleSubmit , formState: { errors  } , setValue  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(schema),
        mode: "onTouched",
        defaultValues: book
    });
    const onValid = async (data)=>{
        // 여기에 서버로 postData를 보내는 로직 추가
        if (mode === "edit") {
            (0,_utils_hooks_useConfrim__WEBPACK_IMPORTED_MODULE_11__/* .useConfirm */ .N)("정말로 수정하시겠습니까?", ()=>{
                (0,_pages_api_books_id___WEBPACK_IMPORTED_MODULE_9__/* .updateBookDetail */ .rP)(book.id, data).then(()=>{
                    window.alert("수정이 완료되었습니다.");
                });
            });
        } else if (mode === "create") {
            (0,_utils_hooks_useConfrim__WEBPACK_IMPORTED_MODULE_11__/* .useConfirm */ .N)("정말로 생성하시겠습니까?", ()=>{
                (0,_pages_api_books__WEBPACK_IMPORTED_MODULE_1__/* .createBook */ .IY)(data).then(()=>{
                    window.alert("생성이 완료되었습니다.");
                });
            });
        }
        router.push("/books");
    };
    //실패 시
    const onInvalid = (errors)=>{
        if (errors) {
            window.alert("모든 내용을 채워주세요.");
        }
    };
    const handleFileChange = async (event)=>{
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = ()=>setPreview(reader.result);
            reader.readAsDataURL(file);
            let img_url = await uploadImage(file);
            setValue("image_url", img_url);
            setPreview(img_url);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit(onValid, onInvalid),
        encType: "multipart/form-data",
        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formWrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formTitle),
                children: mode === "edit" ? "책 수정하기" : "책 추가하기"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formGroup),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "제목"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        ...register("title", {
                            required: "제목은 필수 항목입니다."
                        })
                    }),
                    errors.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formError),
                        children: errors.title.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formGroup),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "부제목"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        ...register("sub_title", {
                            required: "부제목은 필수 항목입니다."
                        })
                    }),
                    errors.sub_title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formError),
                        children: errors.sub_title.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formGroup),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "가격"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "number",
                        ...register("price", {
                            required: "가격을 입력하세요."
                        })
                    }),
                    errors.price && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formError),
                        children: errors.price.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formGroup),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "저자"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        ...register("author", {
                            required: "저자를 입력하세요."
                        })
                    }),
                    errors.author && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formError),
                        children: errors.author.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formGroup),
                children: [
                    preview.includes("http") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: preview,
                        alt: "book_img",
                        width: 350,
                        height: 400,
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().previewImage)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "image_url",
                        children: "이미지 URL 또는 파일 업로드"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        ...register("image_url"),
                        placeholder: "이미지 URL 입력"
                    }),
                    errors.image_url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formError),
                        children: errors.image_url.message
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "file",
                        accept: "image/png, image/jpeg",
                        id: "image_url",
                        name: "image_url",
                        ...register("image_url"),
                        onChange: handleFileChange
                    }),
                    errors.image_url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formError),
                        children: errors.image_url.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formGroup),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "출판사"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        ...register("publisher", {
                            required: "출판사를 입력하세요."
                        })
                    }),
                    errors.publisher && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formError),
                        children: errors.publisher.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formGroup),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "출판일"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "date",
                        ...register("published_date", {
                            required: "출판일을 입력하세요."
                        })
                    }),
                    errors.published_date && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formError),
                        children: errors.published_date.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formGroup),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        children: "판매 수량"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "number",
                        ...register("sales_quantity", {
                            required: "판매 수량을 입력하세요."
                        })
                    }),
                    errors.sales_quantity && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formError),
                        children: errors.sales_quantity.message
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formButtons),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().cancelBtn),
                        onClick: ()=>{
                            window.history.back();
                        },
                        children: "취소"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: (_styles_form_module_css__WEBPACK_IMPORTED_MODULE_12___default().submitBtn),
                        children: mode === "edit" ? "수정" : "생성"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ useConfirm)
/* harmony export */ });
const useConfirm = (massage = " ", onConfirm)=>{
    let result;
    if (typeof onConfirm !== "function") {
        return;
    }
    const confrimAction = ()=>{
        if (window.confirm(massage)) {
            onConfirm();
            result = true;
        } else {
            result = false;
        }
    };
    confrimAction();
    return result;
};


/***/ }),

/***/ 6820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useSchema)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const useSchema = ()=>{
    return yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
        title: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("제목을 입력하세요.").max(50, "제목은 50자를 초과할 수 없습니다."),
        sub_title: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("부제목을 입력하세요.").max(100, "부제목은 100자를 초과할 수 없습니다."),
        price: yup__WEBPACK_IMPORTED_MODULE_0__.number().typeError("가격은 숫자로 입력해야 합니다.").required("가격을 입력하세요.").min(0, "가격은 0 이상이어야 합니다."),
        author: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("저자를 입력하세요.").max(50, "저자는 50자를 초과할 수 없습니다."),
        image_url: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("이미지 URL을 입력하세요.").url("유효한 URL을 입력하세요."),
        publisher: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("출판사를 입력하세요.").max(50, "출판사는 50자를 초과할 수 없습니다."),
        published_date: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("출판일은 필수입니다"),
        sales_quantity: yup__WEBPACK_IMPORTED_MODULE_0__.number().typeError("판매 수량은 숫자로 입력해야 합니다.").required("판매 수량을 입력하세요.").min(0, "판매 수량은 0 이상이어야 합니다.")
    });
};


/***/ })

};
;