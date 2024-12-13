(() => {
var exports = {};
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 7101:
/***/ ((module) => {

// Exports
module.exports = {
	"books_container": "books_books_container__MESel",
	"books_grid": "books_books_grid__9tXbj",
	"item_container": "books_item_container__yZya2"
};


/***/ }),

/***/ 2645:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "pagination_wrapper__VeffM",
	"page": "pagination_page__EkVkV",
	"icon": "pagination_icon__9IPm_",
	"move": "pagination_move__MyfNS",
	"li_margin": "pagination_li_margin__xiO4E",
	"invisible": "pagination_invisible__mG0t_",
	"active": "pagination_active__BkigM"
};


/***/ }),

/***/ 1678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BookList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/books.module.css
var books_module = __webpack_require__(7101);
var books_module_default = /*#__PURE__*/__webpack_require__.n(books_module);
// EXTERNAL MODULE: ./src/utils/dayjs-format.ts
var dayjs_format = __webpack_require__(8804);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/books/book-item.tsx





function BookItem({ book  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: `/books/${book.id}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
            className: (books_module_default()).item_container,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: `${book.image_url}`,
                    alt: "book_img",
                    width: 100,
                    height: 100,
                    loading: "lazy"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: book.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                book.author,
                                " \xb7 ",
                                (0,dayjs_format/* formatDate */.p)(new Date(book.published_date))
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                book.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                                "원"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "판매수량 : ",
                                book.sales_quantity,
                                "권"
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/books/index.tsx



function BookList({ books  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (books_module_default()).books_container,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (books_module_default()).books_grid,
            children: books.map((book)=>/*#__PURE__*/ jsx_runtime_.jsx(BookItem, {
                    book: book
                }, book.id))
        })
    });
}


/***/ }),

/***/ 4260:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_pagination_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2645);
/* harmony import */ var _styles_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pagination_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




function Pagination({ totalItems , itemCountPerPage , pageCount , currentPage  }) {
    const totalPages = Math.ceil(totalItems / itemCountPerPage);
    const { 0: start , 1: setStart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const noPrev = start === 1;
    const noNext = start + pageCount - 1 >= totalPages;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (currentPage === start + pageCount) setStart((prev)=>prev + pageCount);
        if (currentPage < start) setStart((prev)=>prev - pageCount);
    }, [
        currentPage,
        pageCount,
        start
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().move)} ${noPrev && (_styles_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().invisible)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `?page=${start - 1}`,
                    children: "이전"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    ...Array(pageCount)
                ].map((a, i)=>start + i <= totalPages && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: (_styles_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().li_margin),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: `${(_styles_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().page)} ${currentPage === start + i && (_styles_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().active)}`,
                            href: `?page=${start + i}`,
                            children: start + i
                        })
                    }, i))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().move)} ${noNext && (_styles_pagination_module_css__WEBPACK_IMPORTED_MODULE_3___default().invisible)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: `?page=${start + pageCount}`,
                    children: "다음"
                })
            })
        ]
    });
}


/***/ }),

/***/ 3923:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8828);
/* harmony import */ var _api_books__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(781);
/* harmony import */ var _utils_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2142);
/* harmony import */ var _components_books__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1678);
/* harmony import */ var _components_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4260);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_books__WEBPACK_IMPORTED_MODULE_3__, _utils_react_query__WEBPACK_IMPORTED_MODULE_4__]);
([_api_books__WEBPACK_IMPORTED_MODULE_3__, _utils_react_query__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const getServerSideProps = async ({ query  })=>{
    const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient();
    const page = query.page || 1;
    await queryClient.prefetchQuery([
        _utils_react_query__WEBPACK_IMPORTED_MODULE_4__/* .QUERY_BOOKS_KEY */ .cs,
        page
    ], ()=>(0,_api_books__WEBPACK_IMPORTED_MODULE_3__/* .getBooks */ .yZ)(Number(page)));
    const totalCount = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__/* .getTotalCount */ .FX)();
    return {
        props: {
            dehydratedState: (0,react_query__WEBPACK_IMPORTED_MODULE_1__.dehydrate)(queryClient),
            page: Number(page),
            total: totalCount
        }
    };
};
const BookStore = ({ dehydratedState , page , total  })=>{
    const { data  } = (0,_utils_react_query__WEBPACK_IMPORTED_MODULE_4__/* .useFetchBooks */ .lB)(page);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_query__WEBPACK_IMPORTED_MODULE_1__.Hydrate, {
        state: dehydratedState,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
                href: "/books/create",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    children: "추가하기"
                })
            }),
            data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_books__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        books: data
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_pagination__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        totalItems: total,
                        itemCountPerPage: 10,
                        pageCount: 5,
                        currentPage: page
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8804:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ formatDate)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const formatDate = (date)=>{
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format("YYYY년 MM월 DD일");
};


/***/ }),

/***/ 2142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cs": () => (/* binding */ QUERY_BOOKS_KEY),
/* harmony export */   "lB": () => (/* binding */ useFetchBooks),
/* harmony export */   "ll": () => (/* binding */ useFetchBookDetail)
/* harmony export */ });
/* unused harmony export QUERY_BOOK_DETAIL_KEY */
/* harmony import */ var _pages_api_books__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(781);
/* harmony import */ var _pages_api_books_id___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6940);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_books__WEBPACK_IMPORTED_MODULE_0__, _pages_api_books_id___WEBPACK_IMPORTED_MODULE_1__]);
([_pages_api_books__WEBPACK_IMPORTED_MODULE_0__, _pages_api_books_id___WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const QUERY_BOOKS_KEY = "QUERY_BOOKS_KEY";
const QUERY_BOOK_DETAIL_KEY = "QUERY_BOOK_DETAIL_KEY";
const useFetchBooks = (page)=>(0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)({
        queryKey: [
            QUERY_BOOKS_KEY,
            {
                page
            }
        ],
        queryFn: ()=>(0,_pages_api_books__WEBPACK_IMPORTED_MODULE_0__/* .getBooks */ .yZ)(page),
        keepPreviousData: true
    });
const useFetchBookDetail = (id)=>(0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)({
        queryKey: [
            QUERY_BOOK_DETAIL_KEY,
            {
                id
            }
        ],
        queryFn: ()=>(0,_pages_api_books_id___WEBPACK_IMPORTED_MODULE_1__/* .getBookDetail */ .G7)(id)
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 2418:
/***/ ((module) => {

"use strict";
module.exports = require("mysql2/promise");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,664,675,685], () => (__webpack_exec__(3923)));
module.exports = __webpack_exports__;

})();