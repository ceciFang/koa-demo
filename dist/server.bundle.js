/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/a.js":
/*!**********************!*\
  !*** ./src/api/a.js ***!
  \**********************/
/***/ ((module) => {

eval("// function a(ctx) {\n//   ctx, body = {\n//     mesg: 'hello word! where is a.'\n//   }\n// }\n// module.exports = {\n//   a\n// }\n// 业务代码\nmodule.exports = function (ctx) {\n  console.log(ctx);\n  ctx.body = {\n    'message': 'hello word! where is a. !!!'\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2EuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29hLWRlbW8vLi9zcmMvYXBpL2EuanM/MDI3NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmdW5jdGlvbiBhKGN0eCkge1xuLy8gICBjdHgsIGJvZHkgPSB7XG4vLyAgICAgbWVzZzogJ2hlbGxvIHdvcmQhIHdoZXJlIGlzIGEuJ1xuLy8gICB9XG4vLyB9XG4vLyBtb2R1bGUuZXhwb3J0cyA9IHtcbi8vICAgYVxuLy8gfVxuLy8g5Lia5Yqh5Luj56CBXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgY29uc29sZS5sb2coY3R4KTtcbiAgY3R4LmJvZHkgPSB7XG4gICAgJ21lc3NhZ2UnOiAnaGVsbG8gd29yZCEgd2hlcmUgaXMgYS4gISEhJ1xuICB9O1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/a.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Koa = __webpack_require__(/*! koa */ \"koa\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst app = new Koa();\n\nconst helmet = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n\nconst statics = __webpack_require__(/*! koa-static */ \"koa-static\");\n\nconst router = __webpack_require__(/*! ./routers/routes */ \"./src/routers/routes.js\");\n\napp.use(helmet());\napp.use(statics(path.join(__dirname, '../public')));\napp.use(router());\napp.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9pbmRleC5qcz9kOWJlIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEtvYSA9IHJlcXVpcmUoJ2tvYScpO1xuXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5jb25zdCBhcHAgPSBuZXcgS29hKCk7XG5cbmNvbnN0IGhlbG1ldCA9IHJlcXVpcmUoJ2tvYS1oZWxtZXQnKTtcblxuY29uc3Qgc3RhdGljcyA9IHJlcXVpcmUoJ2tvYS1zdGF0aWMnKTtcblxuY29uc3Qgcm91dGVyID0gcmVxdWlyZSgnLi9yb3V0ZXJzL3JvdXRlcycpO1xuXG5hcHAudXNlKGhlbG1ldCgpKTtcbmFwcC51c2Uoc3RhdGljcyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljJykpKTtcbmFwcC51c2Uocm91dGVyKCkpO1xuYXBwLmxpc3RlbigzMDAwKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/routers/aRouter.js":
/*!********************************!*\
  !*** ./src/routers/aRouter.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Router = __webpack_require__(/*! koa-router */ \"koa-router\");\n\nconst a = __webpack_require__(/*! ../api/a */ \"./src/api/a.js\");\n\nconst router = new Router(); // 设置路由\n\nrouter.get('/a', a);\nmodule.exports = router;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVycy9hUm91dGVyLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb2EtZGVtby8uL3NyYy9yb3V0ZXJzL2FSb3V0ZXIuanM/ZThmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSb3V0ZXIgPSByZXF1aXJlKCdrb2Etcm91dGVyJyk7XG5cbmNvbnN0IGEgPSByZXF1aXJlKCcuLi9hcGkvYScpO1xuXG5jb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7IC8vIOiuvue9rui3r+eUsVxuXG5yb3V0ZXIuZ2V0KCcvYScsIGEpO1xubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/routers/aRouter.js\n");

/***/ }),

/***/ "./src/routers/routes.js":
/*!*******************************!*\
  !*** ./src/routers/routes.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// 合并路由\nconst combineRouter = __webpack_require__(/*! koa-combine-routers */ \"koa-combine-routers\");\n\nconst arouter = __webpack_require__(/*! ./aRouter */ \"./src/routers/aRouter.js\");\n\nmodule.exports = combineRouter(arouter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVycy9yb3V0ZXMuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va29hLWRlbW8vLi9zcmMvcm91dGVycy9yb3V0ZXMuanM/ODY2NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyDlkIjlubbot6/nlLFcbmNvbnN0IGNvbWJpbmVSb3V0ZXIgPSByZXF1aXJlKCdrb2EtY29tYmluZS1yb3V0ZXJzJyk7XG5cbmNvbnN0IGFyb3V0ZXIgPSByZXF1aXJlKCcuL2FSb3V0ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb21iaW5lUm91dGVyKGFyb3V0ZXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/routers/routes.js\n");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("koa");

/***/ }),

/***/ "koa-combine-routers":
/*!**************************************!*\
  !*** external "koa-combine-routers" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-combine-routers");

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-helmet");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-router");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("koa-static");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;