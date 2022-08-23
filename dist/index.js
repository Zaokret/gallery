/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_startup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/startup */ \"./lib/startup.js\");\n/* harmony import */ var _middleware_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middleware/index */ \"./middleware/index.js\");\n/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/logger */ \"./lib/logger.js\");\n/* harmony import */ var _websockets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./websockets */ \"./websockets/index.js\");\n/* harmony import */ var _websockets_emit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./websockets/emit */ \"./websockets/emit.js\");\n\n\n\n\n\n\n(0,_lib_startup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then(function () {\n  var app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n  var port = {\"TERM_PROGRAM\":\"vscode\",\"NODE\":\"/opt/homebrew/Cellar/node/18.7.0/bin/node\",\"INIT_CWD\":\"/Users/lazar/audio-control-hub\",\"TERM\":\"xterm-256color\",\"SHELL\":\"/bin/zsh\",\"npm_config_metrics_registry\":\"https://registry.npmjs.org/\",\"TMPDIR\":\"/var/folders/59/5vxv6v850cz4fvt_xxm2xp5m0000gn/T/\",\"npm_config_global_prefix\":\"/opt/homebrew\",\"TERM_PROGRAM_VERSION\":\"1.69.2\",\"ORIGINAL_XDG_CURRENT_DESKTOP\":\"undefined\",\"MallocNanoZone\":\"0\",\"COLOR\":\"1\",\"npm_config_noproxy\":\"\",\"npm_config_local_prefix\":\"/Users/lazar/audio-control-hub\",\"USER\":\"lazar\",\"COMMAND_MODE\":\"unix2003\",\"npm_config_globalconfig\":\"/opt/homebrew/etc/npmrc\",\"SSH_AUTH_SOCK\":\"/private/tmp/com.apple.launchd.B3S2BnTeFU/Listeners\",\"__CF_USER_TEXT_ENCODING\":\"0x1F5:0x0:0x0\",\"npm_execpath\":\"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js\",\"PATH\":\"/Users/lazar/audio-control-hub/node_modules/.bin:/Users/lazar/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:/opt/homebrew/binexport:/opt/homebrew/binexport\",\"npm_package_json\":\"/Users/lazar/audio-control-hub/package.json\",\"_\":\"/Users/lazar/audio-control-hub/node_modules/.bin/cross-env\",\"npm_config_userconfig\":\"/Users/lazar/.npmrc\",\"npm_config_init_module\":\"/Users/lazar/.npm-init.js\",\"__CFBundleIdentifier\":\"com.microsoft.VSCode\",\"npm_command\":\"run-script\",\"PWD\":\"/Users/lazar/audio-control-hub\",\"npm_lifecycle_event\":\"dev\",\"EDITOR\":\"vi\",\"npm_package_name\":\"nodejs-server\",\"LANG\":\"en_GB.UTF-8\",\"VSCODE_GIT_ASKPASS_EXTRA_ARGS\":\"--ms-enable-electron-run-as-node\",\"XPC_FLAGS\":\"0x0\",\"npm_config_node_gyp\":\"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js\",\"XPC_SERVICE_NAME\":\"0\",\"SHLVL\":\"2\",\"HOME\":\"/Users/lazar\",\"VSCODE_GIT_ASKPASS_MAIN\":\"/private/var/folders/59/5vxv6v850cz4fvt_xxm2xp5m0000gn/T/AppTranslocation/BDB45C59-E6A2-4BC2-AF2D-53198C2239AB/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js\",\"npm_config_cache\":\"/Users/lazar/.npm\",\"LOGNAME\":\"lazar\",\"npm_lifecycle_script\":\"cross-env NODE_ENV=development node -r @babel/register ./.app/development.js\",\"VSCODE_GIT_IPC_HANDLE\":\"/var/folders/59/5vxv6v850cz4fvt_xxm2xp5m0000gn/T/vscode-git-48b8ae016f.sock\",\"npm_config_user_agent\":\"npm/8.15.0 node/v18.7.0 darwin arm64 workspaces/false\",\"VSCODE_GIT_ASKPASS_NODE\":\"/private/var/folders/59/5vxv6v850cz4fvt_xxm2xp5m0000gn/T/AppTranslocation/BDB45C59-E6A2-4BC2-AF2D-53198C2239AB/d/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper\",\"GIT_ASKPASS\":\"/private/var/folders/59/5vxv6v850cz4fvt_xxm2xp5m0000gn/T/AppTranslocation/BDB45C59-E6A2-4BC2-AF2D-53198C2239AB/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh\",\"npm_node_execpath\":\"/opt/homebrew/Cellar/node/18.7.0/bin/node\",\"npm_config_prefix\":\"/opt/homebrew\",\"COLORTERM\":\"truecolor\",\"NODE_ENV\":\"development\",\"APP_SETTINGS\":\"{ \\n  \\\"urls\\\": {\\n    \\\"api\\\": \\\"http://localhost:1337\\\"\\n  }\\n}\"}.PORT || 1337;\n  (0,_middleware_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\n  var server = app.listen(port, function () {\n    if (process.send) {\n      process.send(\"Server running at http://localhost:\".concat(port, \"\\n\\n\"));\n    }\n  });\n  var ws = (0,_websockets__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(server);\n  app.put('/control', function (req, res) {\n    (0,_websockets_emit__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ws, JSON.stringify(req.body));\n    console.log(\"Received put request at '/control'.\");\n    res.sendStatus(201);\n  });\n  process.on(\"message\", function (message) {\n    console.log(message);\n  });\n})[\"catch\"](function (error) {\n  _lib_logger__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(error);\n});\n\n//# sourceURL=webpack://nodejs-server/./index.js?");

/***/ }),

/***/ "./lib/logger.js":
/*!***********************!*\
  !*** ./lib/logger.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chalk */ \"chalk\");\n/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar Logger = /*#__PURE__*/function () {\n  function Logger() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Logger);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Logger, [{\n    key: \"isErrorObject\",\n    value: function isErrorObject(value) {\n      return value && value instanceof Error;\n    }\n  }, {\n    key: \"getErrorMessage\",\n    value: function getErrorMessage(value) {\n      var isErrorObject = this.isErrorObject(value);\n\n      if (isErrorObject) {\n        return (value === null || value === void 0 ? void 0 : value.message) || (value === null || value === void 0 ? void 0 : value.reason) || value;\n      }\n\n      return value;\n    }\n  }, {\n    key: \"log\",\n    value: function log() {\n      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n\n      if (message) {\n        console.log(\"\".concat(message));\n      }\n    }\n  }, {\n    key: \"info\",\n    value: function info(message) {\n      this.log(chalk__WEBPACK_IMPORTED_MODULE_2___default().blue(this.getErrorMessage(message)));\n      this.externalHandler(message);\n    }\n  }, {\n    key: \"success\",\n    value: function success(message) {\n      this.log(chalk__WEBPACK_IMPORTED_MODULE_2___default().green(this.getErrorMessage(message)));\n      this.externalHandler(message);\n    }\n  }, {\n    key: \"warn\",\n    value: function warn(message) {\n      this.log(chalk__WEBPACK_IMPORTED_MODULE_2___default().yellow(this.getErrorMessage(message)));\n      this.externalHandler(message);\n    }\n  }, {\n    key: \"error\",\n    value: function error(_error) {\n      this.log(chalk__WEBPACK_IMPORTED_MODULE_2___default().red(this.getErrorMessage(_error)));\n      this.externalHandler(_error);\n    }\n  }, {\n    key: \"externalHandler\",\n    value: function externalHandler(message) {// NOTE: Implement calls to third-party logging services here.\n    }\n  }]);\n\n  return Logger;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Logger());\n\n//# sourceURL=webpack://nodejs-server/./lib/logger.js?");

/***/ }),

/***/ "./lib/settings.js":
/*!*************************!*\
  !*** ./lib/settings.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JSON.parse({\"TERM_PROGRAM\":\"vscode\",\"NODE\":\"/opt/homebrew/Cellar/node/18.7.0/bin/node\",\"INIT_CWD\":\"/Users/lazar/audio-control-hub\",\"TERM\":\"xterm-256color\",\"SHELL\":\"/bin/zsh\",\"npm_config_metrics_registry\":\"https://registry.npmjs.org/\",\"TMPDIR\":\"/var/folders/59/5vxv6v850cz4fvt_xxm2xp5m0000gn/T/\",\"npm_config_global_prefix\":\"/opt/homebrew\",\"TERM_PROGRAM_VERSION\":\"1.69.2\",\"ORIGINAL_XDG_CURRENT_DESKTOP\":\"undefined\",\"MallocNanoZone\":\"0\",\"COLOR\":\"1\",\"npm_config_noproxy\":\"\",\"npm_config_local_prefix\":\"/Users/lazar/audio-control-hub\",\"USER\":\"lazar\",\"COMMAND_MODE\":\"unix2003\",\"npm_config_globalconfig\":\"/opt/homebrew/etc/npmrc\",\"SSH_AUTH_SOCK\":\"/private/tmp/com.apple.launchd.B3S2BnTeFU/Listeners\",\"__CF_USER_TEXT_ENCODING\":\"0x1F5:0x0:0x0\",\"npm_execpath\":\"/opt/homebrew/lib/node_modules/npm/bin/npm-cli.js\",\"PATH\":\"/Users/lazar/audio-control-hub/node_modules/.bin:/Users/lazar/node_modules/.bin:/Users/node_modules/.bin:/node_modules/.bin:/opt/homebrew/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin:/opt/homebrew/binexport:/opt/homebrew/binexport\",\"npm_package_json\":\"/Users/lazar/audio-control-hub/package.json\",\"_\":\"/Users/lazar/audio-control-hub/node_modules/.bin/cross-env\",\"npm_config_userconfig\":\"/Users/lazar/.npmrc\",\"npm_config_init_module\":\"/Users/lazar/.npm-init.js\",\"__CFBundleIdentifier\":\"com.microsoft.VSCode\",\"npm_command\":\"run-script\",\"PWD\":\"/Users/lazar/audio-control-hub\",\"npm_lifecycle_event\":\"dev\",\"EDITOR\":\"vi\",\"npm_package_name\":\"nodejs-server\",\"LANG\":\"en_GB.UTF-8\",\"VSCODE_GIT_ASKPASS_EXTRA_ARGS\":\"--ms-enable-electron-run-as-node\",\"XPC_FLAGS\":\"0x0\",\"npm_config_node_gyp\":\"/opt/homebrew/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js\",\"XPC_SERVICE_NAME\":\"0\",\"SHLVL\":\"2\",\"HOME\":\"/Users/lazar\",\"VSCODE_GIT_ASKPASS_MAIN\":\"/private/var/folders/59/5vxv6v850cz4fvt_xxm2xp5m0000gn/T/AppTranslocation/BDB45C59-E6A2-4BC2-AF2D-53198C2239AB/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass-main.js\",\"npm_config_cache\":\"/Users/lazar/.npm\",\"LOGNAME\":\"lazar\",\"npm_lifecycle_script\":\"cross-env NODE_ENV=development node -r @babel/register ./.app/development.js\",\"VSCODE_GIT_IPC_HANDLE\":\"/var/folders/59/5vxv6v850cz4fvt_xxm2xp5m0000gn/T/vscode-git-48b8ae016f.sock\",\"npm_config_user_agent\":\"npm/8.15.0 node/v18.7.0 darwin arm64 workspaces/false\",\"VSCODE_GIT_ASKPASS_NODE\":\"/private/var/folders/59/5vxv6v850cz4fvt_xxm2xp5m0000gn/T/AppTranslocation/BDB45C59-E6A2-4BC2-AF2D-53198C2239AB/d/Visual Studio Code.app/Contents/Frameworks/Code Helper.app/Contents/MacOS/Code Helper\",\"GIT_ASKPASS\":\"/private/var/folders/59/5vxv6v850cz4fvt_xxm2xp5m0000gn/T/AppTranslocation/BDB45C59-E6A2-4BC2-AF2D-53198C2239AB/d/Visual Studio Code.app/Contents/Resources/app/extensions/git/dist/askpass.sh\",\"npm_node_execpath\":\"/opt/homebrew/Cellar/node/18.7.0/bin/node\",\"npm_config_prefix\":\"/opt/homebrew\",\"COLORTERM\":\"truecolor\",\"NODE_ENV\":\"development\",\"APP_SETTINGS\":\"{ \\n  \\\"urls\\\": {\\n    \\\"api\\\": \\\"http://localhost:1337\\\"\\n  }\\n}\"}.APP_SETTINGS || fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(\"settings-\".concat(\"development\", \".json\"), \"utf-8\") || \"{}\"));\n\n//# sourceURL=webpack://nodejs-server/./lib/settings.js?");

/***/ }),

/***/ "./lib/startup.js":
/*!************************!*\
  !*** ./lib/startup.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger */ \"./lib/logger.js\");\n\n\n\n/* eslint-disable consistent-return */\n\n\nvar handleProcessEvents = function handleProcessEvents() {\n  try {\n    process.on(\"exit\", /*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (process.mongodb && process.mongodb.connection && process.mongodb.connection.isConnected()) {\n                process.mongodb.connection.close();\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n    process.on(\"uncaughtException\", function (error) {\n      _logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(error);\n      console.warn(error);\n    });\n    process.on(\"uncaughtException\", /*#__PURE__*/function () {\n      var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(error) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(error);\n                console.warn(error);\n\n              case 2:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n    process.on(\"unhandledRejection\", /*#__PURE__*/function () {\n      var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(error) {\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(error);\n                console.warn(error);\n\n              case 2:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3);\n      }));\n\n      return function (_x2) {\n        return _ref3.apply(this, arguments);\n      };\n    }());\n  } catch (exception) {\n    throw new Error(\"[startup.handleProcessEvents] \".concat(exception.message || exception));\n  }\n};\n\nvar startup = /*#__PURE__*/function () {\n  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee4(options, _ref4) {\n    var resolve, reject;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            resolve = _ref4.resolve, reject = _ref4.reject;\n\n            try {\n              handleProcessEvents();\n              resolve();\n            } catch (exception) {\n              reject(\"[startup] \".concat(exception.message));\n            }\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function startup(_x3, _x4) {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (options) {\n  return new Promise(function (resolve, reject) {\n    startup(options, {\n      resolve: resolve,\n      reject: reject\n    });\n  });\n});\n\n//# sourceURL=webpack://nodejs-server/./lib/startup.js?");

/***/ }),

/***/ "./middleware/bodyParser.js":
/*!**********************************!*\
  !*** ./middleware/bodyParser.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res, next) {\n  var contentType = req.headers[\"content-type\"];\n\n  if (contentType && contentType === \"application/x-www-form-urlencoded\") {\n    return body_parser__WEBPACK_IMPORTED_MODULE_0___default().urlencoded({\n      extended: true\n    })(req, res, next);\n  }\n\n  return body_parser__WEBPACK_IMPORTED_MODULE_0___default().json()(req, res, next);\n});\n\n//# sourceURL=webpack://nodejs-server/./middleware/bodyParser.js?");

/***/ }),

/***/ "./middleware/cors.js":
/*!****************************!*\
  !*** ./middleware/cors.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"configuration\": () => (/* binding */ configuration),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/settings */ \"./lib/settings.js\");\n\n\n\nvar urlsAllowedToAccess = Object.entries(_lib_settings__WEBPACK_IMPORTED_MODULE_2__[\"default\"].urls || {}).map(function (_ref) {\n  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n      key = _ref2[0],\n      value = _ref2[1];\n\n  return value;\n}) || [];\nvar configuration = {\n  \"origin\": \"*\",\n  \"methods\": \"GET,HEAD,PUT,PATCH,POST,DELETE\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res, next) {\n  return cors__WEBPACK_IMPORTED_MODULE_1___default()(configuration)(req, res, next);\n});\n\n//# sourceURL=webpack://nodejs-server/./middleware/cors.js?");

/***/ }),

/***/ "./middleware/index.js":
/*!*****************************!*\
  !*** ./middleware/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! serve-favicon */ \"serve-favicon\");\n/* harmony import */ var serve_favicon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(serve_favicon__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _requestMethods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./requestMethods */ \"./middleware/requestMethods.js\");\n/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cors */ \"./middleware/cors.js\");\n/* harmony import */ var _bodyParser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bodyParser */ \"./middleware/bodyParser.js\");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {\n  app.use(_requestMethods__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  app.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());\n  app.use(serve_favicon__WEBPACK_IMPORTED_MODULE_3___default()(\"public/favicon.ico\"));\n  app.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\"));\n  app.use(_cors__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  app.use(_bodyParser__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\n});\n\n//# sourceURL=webpack://nodejs-server/./middleware/index.js?");

/***/ }),

/***/ "./middleware/requestMethods.js":
/*!**************************************!*\
  !*** ./middleware/requestMethods.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req, res, next) {\n  // NOTE: Exclude TRACE and TRACK methods to avoid XST attacks.\n  var allowedMethods = [\"OPTIONS\", \"HEAD\", \"CONNECT\", \"GET\", \"POST\", \"PUT\", \"DELETE\", \"PATCH\"];\n\n  if (!allowedMethods.includes(req.method)) {\n    res.status(405).send(\"\".concat(req.method, \" not allowed.\"));\n  }\n\n  next();\n});\n\n//# sourceURL=webpack://nodejs-server/./middleware/requestMethods.js?");

/***/ }),

/***/ "./websockets/emit.js":
/*!****************************!*\
  !*** ./websockets/emit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ \"ws\");\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(ws, message) {\n  ws.clients.forEach(function each(client) {\n    if (client !== ws && client.readyState === (ws__WEBPACK_IMPORTED_MODULE_0___default().OPEN)) {\n      client.send(message);\n    }\n  });\n}\n\n//# sourceURL=webpack://nodejs-server/./websockets/emit.js?");

/***/ }),

/***/ "./websockets/index.js":
/*!*****************************!*\
  !*** ./websockets/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ws */ \"ws\");\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_0__);\n // import queryString from \"query-string\";\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (expressServer) {\n  var ws = new (ws__WEBPACK_IMPORTED_MODULE_0___default().Server)({\n    noServer: true,\n    path: \"/websockets\"\n  });\n  expressServer.on(\"upgrade\", function (request, socket, head) {\n    ws.handleUpgrade(request, socket, head, function (websocket) {\n      ws.emit(\"connection\", websocket, request);\n    });\n  });\n  ws.on(\"connection\", function connection(websocketConnection, connectionRequest) {\n    console.log(\"websockets connected\"); //const [_path, params] = connectionRequest?.url?.split(\"?\");\n    //const connectionParams = queryString.parse(params);\n    // NOTE: connectParams are not used here but good to understand how to get\n    // to them if you need to pass data with the connection to identify it (e.g., a userId).\n    //console.log(connectionParams);\n\n    websocketConnection.on(\"message\", function (message) {\n      var parsedMessage = JSON.parse(message);\n      console.log(parsedMessage);\n      websocketConnection.send(JSON.stringify({\n        message: 'There be gold in them thar hills.'\n      }));\n    });\n  });\n  return ws;\n});\n\n//# sourceURL=webpack://nodejs-server/./websockets/index.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("serve-favicon");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("ws");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;