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
exports.id = "app/api/todos/route";
exports.ids = ["app/api/todos/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=%2FUsers%2Fmasynctech%2FDesktop%2FPROGRAMMING%2FUDEMY-COURSES%2FTEACHING%2FFull-Stack-Web-Development-Bootcamp-Course%20Teaching%2FPROJECTS%2FNextJS-API-Dev%2Fnext-api-mongodb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmasynctech%2FDesktop%2FPROGRAMMING%2FUDEMY-COURSES%2FTEACHING%2FFull-Stack-Web-Development-Bootcamp-Course%20Teaching%2FPROJECTS%2FNextJS-API-Dev%2Fnext-api-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=%2FUsers%2Fmasynctech%2FDesktop%2FPROGRAMMING%2FUDEMY-COURSES%2FTEACHING%2FFull-Stack-Web-Development-Bootcamp-Course%20Teaching%2FPROJECTS%2FNextJS-API-Dev%2Fnext-api-mongodb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmasynctech%2FDesktop%2FPROGRAMMING%2FUDEMY-COURSES%2FTEACHING%2FFull-Stack-Web-Development-Bootcamp-Course%20Teaching%2FPROJECTS%2FNextJS-API-Dev%2Fnext-api-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_masynctech_Desktop_PROGRAMMING_UDEMY_COURSES_TEACHING_Full_Stack_Web_Development_Bootcamp_Course_Teaching_PROJECTS_NextJS_API_Dev_next_api_mongodb_app_api_todos_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/todos/route.js */ \"(rsc)/./app/api/todos/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/todos/route\",\n        pathname: \"/api/todos\",\n        filename: \"route\",\n        bundlePath: \"app/api/todos/route\"\n    },\n    resolvedPagePath: \"/Users/masynctech/Desktop/PROGRAMMING/UDEMY-COURSES/TEACHING/Full-Stack-Web-Development-Bootcamp-Course Teaching/PROJECTS/NextJS-API-Dev/next-api-mongodb/app/api/todos/route.js\",\n    nextConfigOutput,\n    userland: _Users_masynctech_Desktop_PROGRAMMING_UDEMY_COURSES_TEACHING_Full_Stack_Web_Development_Bootcamp_Course_Teaching_PROJECTS_NextJS_API_Dev_next_api_mongodb_app_api_todos_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/todos/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0b2RvcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdG9kb3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0b2RvcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRm1hc3luY3RlY2glMkZEZXNrdG9wJTJGUFJPR1JBTU1JTkclMkZVREVNWS1DT1VSU0VTJTJGVEVBQ0hJTkclMkZGdWxsLVN0YWNrLVdlYi1EZXZlbG9wbWVudC1Cb290Y2FtcC1Db3Vyc2UlMjBUZWFjaGluZyUyRlBST0pFQ1RTJTJGTmV4dEpTLUFQSS1EZXYlMkZuZXh0LWFwaS1tb25nb2RiJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRm1hc3luY3RlY2glMkZEZXNrdG9wJTJGUFJPR1JBTU1JTkclMkZVREVNWS1DT1VSU0VTJTJGVEVBQ0hJTkclMkZGdWxsLVN0YWNrLVdlYi1EZXZlbG9wbWVudC1Cb290Y2FtcC1Db3Vyc2UlMjBUZWFjaGluZyUyRlBST0pFQ1RTJTJGTmV4dEpTLUFQSS1EZXYlMkZuZXh0LWFwaS1tb25nb2RiJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNnSTtBQUM3TTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBpLW1vbmdvZGIvPzZjY2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL21hc3luY3RlY2gvRGVza3RvcC9QUk9HUkFNTUlORy9VREVNWS1DT1VSU0VTL1RFQUNISU5HL0Z1bGwtU3RhY2stV2ViLURldmVsb3BtZW50LUJvb3RjYW1wLUNvdXJzZSBUZWFjaGluZy9QUk9KRUNUUy9OZXh0SlMtQVBJLURldi9uZXh0LWFwaS1tb25nb2RiL2FwcC9hcGkvdG9kb3Mvcm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3RvZG9zL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvdG9kb3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3RvZG9zL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL21hc3luY3RlY2gvRGVza3RvcC9QUk9HUkFNTUlORy9VREVNWS1DT1VSU0VTL1RFQUNISU5HL0Z1bGwtU3RhY2stV2ViLURldmVsb3BtZW50LUJvb3RjYW1wLUNvdXJzZSBUZWFjaGluZy9QUk9KRUNUUy9OZXh0SlMtQVBJLURldi9uZXh0LWFwaS1tb25nb2RiL2FwcC9hcGkvdG9kb3Mvcm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3RvZG9zL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=%2FUsers%2Fmasynctech%2FDesktop%2FPROGRAMMING%2FUDEMY-COURSES%2FTEACHING%2FFull-Stack-Web-Development-Bootcamp-Course%20Teaching%2FPROJECTS%2FNextJS-API-Dev%2Fnext-api-mongodb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmasynctech%2FDesktop%2FPROGRAMMING%2FUDEMY-COURSES%2FTEACHING%2FFull-Stack-Web-Development-Bootcamp-Course%20Teaching%2FPROJECTS%2FNextJS-API-Dev%2Fnext-api-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/todos/route.js":
/*!********************************!*\
  !*** ./app/api/todos/route.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _src_models_Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/models/Todo */ \"(rsc)/./src/models/Todo.js\");\n/* harmony import */ var _src_utils_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/utils/dbConnect */ \"(rsc)/./src/utils/dbConnect.js\");\n\n\n\n//! Create todo\nasync function POST(request) {\n    //connect to db\n    (0,_src_utils_dbConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    //create the todo\n    const todoData = await request.json();\n    const todo = await _src_models_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(todoData);\n    return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(todo));\n}\n//! Fetching\nasync function GET(request) {\n    //connect to db\n    (0,_src_utils_dbConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const todos = await _src_models_Todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n    return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(todos));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RvZG9zL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTJDO0FBQ047QUFDUztBQUU5QyxlQUFlO0FBQ1IsZUFBZUcsS0FBS0MsT0FBTztJQUNoQyxlQUFlO0lBQ2ZGLGdFQUFTQTtJQUNULGlCQUFpQjtJQUNqQixNQUFNRyxXQUFXLE1BQU1ELFFBQVFFLElBQUk7SUFDbkMsTUFBTUMsT0FBTyxNQUFNTix3REFBSUEsQ0FBQ08sTUFBTSxDQUFDSDtJQUMvQixPQUFPLElBQUlMLHFEQUFZQSxDQUFDUyxLQUFLQyxTQUFTLENBQUNIO0FBQ3pDO0FBRUEsWUFBWTtBQUNMLGVBQWVJLElBQUlQLE9BQU87SUFDL0IsZUFBZTtJQUNmRixnRUFBU0E7SUFDVCxNQUFNVSxRQUFRLE1BQU1YLHdEQUFJQSxDQUFDWSxJQUFJO0lBQzdCLE9BQU8sSUFBSWIscURBQVlBLENBQUNTLEtBQUtDLFNBQVMsQ0FBQ0U7QUFDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwaS1tb25nb2RiLy4vYXBwL2FwaS90b2Rvcy9yb3V0ZS5qcz9hZWUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IFRvZG8gZnJvbSBcIkAvc3JjL21vZGVscy9Ub2RvXCI7XG5pbXBvcnQgY29ubmVjdERCIGZyb20gXCJAL3NyYy91dGlscy9kYkNvbm5lY3RcIjtcblxuLy8hIENyZWF0ZSB0b2RvXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG4gIC8vY29ubmVjdCB0byBkYlxuICBjb25uZWN0REIoKTtcbiAgLy9jcmVhdGUgdGhlIHRvZG9cbiAgY29uc3QgdG9kb0RhdGEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgY29uc3QgdG9kbyA9IGF3YWl0IFRvZG8uY3JlYXRlKHRvZG9EYXRhKTtcbiAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkodG9kbykpO1xufVxuXG4vLyEgRmV0Y2hpbmdcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xuICAvL2Nvbm5lY3QgdG8gZGJcbiAgY29ubmVjdERCKCk7XG4gIGNvbnN0IHRvZG9zID0gYXdhaXQgVG9kby5maW5kKCk7XG4gIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiVG9kbyIsImNvbm5lY3REQiIsIlBPU1QiLCJyZXF1ZXN0IiwidG9kb0RhdGEiLCJqc29uIiwidG9kbyIsImNyZWF0ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJHRVQiLCJ0b2RvcyIsImZpbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/todos/route.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Todo.js":
/*!****************************!*\
  !*** ./src/models/Todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// models/Todo.js\n\nconst TodoSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: [\n            true,\n            \"Please add a title\"\n        ],\n        trim: true,\n        maxlength: [\n            40,\n            \"Title cannot be more than 40 characters\"\n        ]\n    },\n    completed: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Todo || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Todo\", TodoSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1RvZG8uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsaUJBQWlCO0FBQ2U7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxPQUFPO1FBQ0xDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXFCO1FBQ3RDQyxNQUFNO1FBQ05DLFdBQVc7WUFBQztZQUFJO1NBQTBDO0lBQzVEO0lBQ0FDLFdBQVc7UUFDVEwsTUFBTU07UUFDTkMsU0FBUztJQUNYO0FBQ0YsR0FDQTtJQUFFQyxZQUFZO0FBQUs7QUFHckIsaUVBQWVaLHdEQUFlLENBQUNjLElBQUksSUFBSWQscURBQWMsQ0FBQyxRQUFRQyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcGktbW9uZ29kYi8uL3NyYy9tb2RlbHMvVG9kby5qcz9jZjg3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIG1vZGVscy9Ub2RvLmpzXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFRvZG9TY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgdGl0bGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgYWRkIGEgdGl0bGVcIl0sXG4gICAgICB0cmltOiB0cnVlLFxuICAgICAgbWF4bGVuZ3RoOiBbNDAsIFwiVGl0bGUgY2Fubm90IGJlIG1vcmUgdGhhbiA0MCBjaGFyYWN0ZXJzXCJdLFxuICAgIH0sXG4gICAgY29tcGxldGVkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cbik7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Ub2RvIHx8IG1vbmdvb3NlLm1vZGVsKFwiVG9kb1wiLCBUb2RvU2NoZW1hKTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlRvZG9TY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJtYXhsZW5ndGgiLCJjb21wbGV0ZWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJUb2RvIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Todo.js\n");

/***/ }),

/***/ "(rsc)/./src/utils/dbConnect.js":
/*!********************************!*\
  !*** ./src/utils/dbConnect.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        const conn = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(\"mongodb://localhost:27017/next-api\");\n        console.log(\"DB connected\");\n    } catch (error) {\n        console.log(\"db connecting error\", error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvZGJDb25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZO0lBQ2hCLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1GLHVEQUFnQixDQUFDO1FBQ3BDSSxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUMsR0FBRyxDQUFDLHVCQUF1QkM7SUFDckM7QUFDRjtBQUNBLGlFQUFlTCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcGktbW9uZ29kYi8uL3NyYy91dGlscy9kYkNvbm5lY3QuanM/ODMxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb25uID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChcIm1vbmdvZGI6Ly9sb2NhbGhvc3Q6MjcwMTcvbmV4dC1hcGlcIik7XG4gICAgY29uc29sZS5sb2coXCJEQiBjb25uZWN0ZWRcIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJkYiBjb25uZWN0aW5nIGVycm9yXCIsIGVycm9yKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3REQiIsImNvbm4iLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftodos%2Froute&page=%2Fapi%2Ftodos%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftodos%2Froute.js&appDir=%2FUsers%2Fmasynctech%2FDesktop%2FPROGRAMMING%2FUDEMY-COURSES%2FTEACHING%2FFull-Stack-Web-Development-Bootcamp-Course%20Teaching%2FPROJECTS%2FNextJS-API-Dev%2Fnext-api-mongodb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fmasynctech%2FDesktop%2FPROGRAMMING%2FUDEMY-COURSES%2FTEACHING%2FFull-Stack-Web-Development-Bootcamp-Course%20Teaching%2FPROJECTS%2FNextJS-API-Dev%2Fnext-api-mongodb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();