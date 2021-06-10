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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addLeadingZeros)\n/* harmony export */ });\nfunction addLeadingZeros(number, targetLength) {\n  var sign = number < 0 ? '-' : '';\n  var output = Math.abs(number).toString();\n\n  while (output.length < targetLength) {\n    output = '0' + output;\n  }\n\n  return sign + output;\n}\n\n//# sourceURL=webpack://organize-self/./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ requiredArgs)\n/* harmony export */ });\nfunction requiredArgs(required, args) {\n  if (args.length < required) {\n    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');\n  }\n}\n\n//# sourceURL=webpack://organize-self/./node_modules/date-fns/esm/_lib/requiredArgs/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/formatISO/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/formatISO/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ formatISO)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isValid/index.js */ \"./node_modules/date-fns/esm/isValid/index.js\");\n/* harmony import */ var _lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/addLeadingZeros/index.js */ \"./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js\");\n\n\n\n/**\n * @name formatISO\n * @category Common Helpers\n * @summary Format the date according to the ISO 8601 standard (http://support.sas.com/documentation/cdl/en/lrdict/64316/HTML/default/viewer.htm#a003169814.htm).\n *\n * @description\n * Return the formatted date string in ISO 8601 format. Options may be passed to control the parts and notations of the date.\n *\n * @param {Date|Number} date - the original date\n * @param {Object} [options] - an object with options.\n * @param {'extended'|'basic'} [options.format='extended'] - if 'basic', hide delimiters between date and time values.\n * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with time zone, or both.\n * @returns {String} the formatted date string\n * @throws {TypeError} 1 argument required\n * @throws {RangeError} `date` must not be Invalid Date\n * @throws {RangeError} `options.format` must be 'extended' or 'basic'\n * @throws {RangeError} `options.represenation` must be 'date', 'time' or 'complete'\n *\n * @example\n * // Represent 18 September 2019 in ISO 8601 format (UTC):\n * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52))\n * //=> '2019-09-18T19:00:52Z'\n *\n * @example\n * // Represent 18 September 2019 in ISO 8601, short format (UTC):\n * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { format: 'basic' })\n * //=> '20190918T190052'\n *\n * @example\n * // Represent 18 September 2019 in ISO 8601 format, date only:\n * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'date' })\n * //=> '2019-09-18'\n *\n * @example\n * // Represent 18 September 2019 in ISO 8601 format, time only (UTC):\n * const result = formatISO(new Date(2019, 8, 18, 19, 0, 52), { representation: 'time' })\n * //=> '19:00:52Z'\n */\n\nfunction formatISO(dirtyDate, dirtyOptions) {\n  if (arguments.length < 1) {\n    throw new TypeError(\"1 argument required, but only \".concat(arguments.length, \" present\"));\n  }\n\n  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(dirtyDate);\n\n  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(originalDate)) {\n    throw new RangeError('Invalid time value');\n  }\n\n  var options = dirtyOptions || {};\n  var format = options.format == null ? 'extended' : String(options.format);\n  var representation = options.representation == null ? 'complete' : String(options.representation);\n\n  if (format !== 'extended' && format !== 'basic') {\n    throw new RangeError(\"format must be 'extended' or 'basic'\");\n  }\n\n  if (representation !== 'date' && representation !== 'time' && representation !== 'complete') {\n    throw new RangeError(\"representation must be 'date', 'time', or 'complete'\");\n  }\n\n  var result = '';\n  var tzOffset = '';\n  var dateDelimiter = format === 'extended' ? '-' : '';\n  var timeDelimiter = format === 'extended' ? ':' : ''; // Representation is either 'date' or 'complete'\n\n  if (representation !== 'time') {\n    var day = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getDate(), 2);\n    var month = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getMonth() + 1, 2);\n    var year = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getFullYear(), 4); // yyyyMMdd or yyyy-MM-dd.\n\n    result = \"\".concat(year).concat(dateDelimiter).concat(month).concat(dateDelimiter).concat(day);\n  } // Representation is either 'time' or 'complete'\n\n\n  if (representation !== 'date') {\n    // Add the timezone.\n    var offset = originalDate.getTimezoneOffset();\n\n    if (offset !== 0) {\n      var absoluteOffset = Math.abs(offset);\n      var hourOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absoluteOffset / 60), 2);\n      var minuteOffset = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absoluteOffset % 60, 2); // If less than 0, the sign is +, because it is ahead of time.\n\n      var sign = offset < 0 ? '+' : '-';\n      tzOffset = \"\".concat(sign).concat(hourOffset, \":\").concat(minuteOffset);\n    } else {\n      tzOffset = 'Z';\n    }\n\n    var hour = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getHours(), 2);\n    var minute = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getMinutes(), 2);\n    var second = (0,_lib_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(originalDate.getSeconds(), 2); // If there's also date, separate it with time with 'T'\n\n    var separator = result === '' ? '' : 'T'; // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.\n\n    var time = [hour, minute, second].join(timeDelimiter); // HHmmss or HH:mm:ss.\n\n    result = \"\".concat(result).concat(separator).concat(time).concat(tzOffset);\n  }\n\n  return result;\n}\n\n//# sourceURL=webpack://organize-self/./node_modules/date-fns/esm/formatISO/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isValid)\n/* harmony export */ });\n/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ \"./node_modules/date-fns/esm/toDate/index.js\");\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n\n/**\n * @name isValid\n * @category Common Helpers\n * @summary Is the given date valid?\n *\n * @description\n * Returns false if argument is Invalid Date and true otherwise.\n * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}\n * Invalid Date is a Date, whose time value is NaN.\n *\n * Time value of Date: http://es5.github.io/#x15.9.1.1\n *\n * ### v2.0.0 breaking changes:\n *\n * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).\n *\n * - Now `isValid` doesn't throw an exception\n *   if the first argument is not an instance of Date.\n *   Instead, argument is converted beforehand using `toDate`.\n *\n *   Examples:\n *\n *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |\n *   |---------------------------|---------------|---------------|\n *   | `new Date()`              | `true`        | `true`        |\n *   | `new Date('2016-01-01')`  | `true`        | `true`        |\n *   | `new Date('')`            | `false`       | `false`       |\n *   | `new Date(1488370835081)` | `true`        | `true`        |\n *   | `new Date(NaN)`           | `false`       | `false`       |\n *   | `'2016-01-01'`            | `TypeError`   | `false`       |\n *   | `''`                      | `TypeError`   | `false`       |\n *   | `1488370835081`           | `TypeError`   | `true`        |\n *   | `NaN`                     | `TypeError`   | `false`       |\n *\n *   We introduce this change to make *date-fns* consistent with ECMAScript behavior\n *   that try to coerce arguments to the expected type\n *   (which is also the case with other *date-fns* functions).\n *\n * @param {*} date - the date to check\n * @returns {Boolean} the date is valid\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // For the valid date:\n * var result = isValid(new Date(2014, 1, 31))\n * //=> true\n *\n * @example\n * // For the value, convertable into a date:\n * var result = isValid(1393804800000)\n * //=> true\n *\n * @example\n * // For the invalid date:\n * var result = isValid(new Date(''))\n * //=> false\n */\n\nfunction isValid(dirtyDate) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);\n  return !isNaN(date);\n}\n\n//# sourceURL=webpack://organize-self/./node_modules/date-fns/esm/isValid/index.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toDate)\n/* harmony export */ });\n/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ \"./node_modules/date-fns/esm/_lib/requiredArgs/index.js\");\n\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @param {Date|Number} argument - the value to convert\n * @returns {Date} the parsed date in the local time zone\n * @throws {TypeError} 1 argument required\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\n\nfunction toDate(argument) {\n  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);\n  var argStr = Object.prototype.toString.call(argument); // Clone the date\n\n  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new Date(argument.getTime());\n  } else if (typeof argument === 'number' || argStr === '[object Number]') {\n    return new Date(argument);\n  } else {\n    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {\n      // eslint-disable-next-line no-console\n      console.warn(\"Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule\"); // eslint-disable-next-line no-console\n\n      console.warn(new Error().stack);\n    }\n\n    return new Date(NaN);\n  }\n}\n\n//# sourceURL=webpack://organize-self/./node_modules/date-fns/esm/toDate/index.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\nconst dom = {\r\n  projectShelf: document.getElementById(\"project_list\"),\r\n  taskShelf: document.getElementById(\"project_tasks_container\"),\r\n  projectTaskContainer: document.getElementById(\"project_container\"),\r\n  projectAddForm: document.getElementById(\"add_project_container\"),\r\n  projectAddNameIn: document.getElementById(\"project_name_form\"),\r\n  projectTitle: document.getElementById(\"project_title\"),\r\n  addTaskButton: document.getElementById(\"add_task\"),\r\n  addTaskForm: document.getElementById(\"add_task_container\"),\r\n  taskDelete: document.getElementById(\"task_delete_button\"),\r\n  taskEdit: document.getElementById(\"task_edit_button\"),\r\n  taskEditForm: document.getElementById(\"edit_task_container\"),\r\n  taskEditConfirm: document.getElementById(\"confirm_changes\"),\r\n  appendTask: (currentTask, taskID, projectID) => {\r\n    const singleTask = document.createElement(\"div\");\r\n    singleTask.className = \"todo_task\";\r\n    singleTask.dataset.task_id = taskID;\r\n    singleTask.innerHTML = `        \r\n            <table>\r\n              <tr>\r\n                <th colspan=\"2\" id=\"task_title\">\r\n                ${currentTask.title}\r\n                <td>\r\n                <button class=\"edit_button\">Edit</button>\r\n                <button class=\"delete_button\">Delete</button></th>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td colspan=\"3\" id=\"task_desc\">\r\n                  ${currentTask.desc}  \r\n                </td>                \r\n              </tr>\r\n              <tr>\r\n                <td id=\"date_made\">Created on ${currentTask.dateMade}</td>\r\n                <td>\r\n                Status: ${currentTask.status ? \"Done!\" : \"Pending\"}\r\n                ${\r\n                  currentTask.status\r\n                    ? \" \"\r\n                    : `<button class=\"done_button\">Done</button>`\r\n                }         \r\n                </td>\r\n                <th id=\"date_due\">\r\n                  Due on: ${currentTask.dateDue}\r\n                </th>\r\n              </tr>\r\n            </table>        \r\n          `;\r\n    if (!currentTask.status) {\r\n      singleTask\r\n        .querySelector(\".done_button\")\r\n        .addEventListener(\"click\", (e) => {\r\n          console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.default.myProjects[projectID].taskList[taskID].status);\r\n          _project_js__WEBPACK_IMPORTED_MODULE_0__.default.myProjects[projectID].taskList[taskID].status = true;\r\n          e.target.parentNode.innerHTML = \"Status: Done!\";\r\n          e.target.remove();\r\n        });\r\n    }\r\n    singleTask\r\n      .querySelector(\".delete_button\")\r\n      .addEventListener(\"click\", (e) => {\r\n        _project_js__WEBPACK_IMPORTED_MODULE_0__.default.myProjects[projectID].taskList.splice(taskID, 1);\r\n        dom.displayProjectContents(projectID);\r\n      });\r\n    singleTask.querySelector(\".edit_button\").addEventListener(\"click\", (e) => {\r\n      _task_js__WEBPACK_IMPORTED_MODULE_1__.default.editTask(currentTask);\r\n    });\r\n    dom.taskShelf.appendChild(singleTask);\r\n  },\r\n  displayProjectTab: (projectObject) => {\r\n    const projTab = document.createElement(\"div\");\r\n    projTab.className = \"project_tab\";\r\n    projTab.dataset.project = projectObject.id;\r\n    projTab.innerHTML = `<p>${projectObject.projectName}</p>`;\r\n    projTab.addEventListener(\"click\", _project_js__WEBPACK_IMPORTED_MODULE_0__.default.swapProject);\r\n    projTab.appendChild(dom.makeProjectDeleteButton(projectObject.id));\r\n    dom.projectShelf.appendChild(projTab);\r\n    dom.projectAddNameIn.value = \"\";\r\n    projTab.click();\r\n  },\r\n  makeProjectDeleteButton: (id) => {\r\n    const deleteButton = document.createElement(\"button\");\r\n    deleteButton.innerText = \"X\";\r\n    deleteButton.id = \"project_delete_button\";\r\n    deleteButton.addEventListener(\"click\", (e) => {\r\n      e.stopPropagation();\r\n      if (\r\n        Object.keys(_project_js__WEBPACK_IMPORTED_MODULE_0__.default.myProjects) !== 0 &&\r\n        confirm(\r\n          \"Are you sure you want to delete this project and all its tasks?\"\r\n        )\r\n      ) {\r\n        delete _project_js__WEBPACK_IMPORTED_MODULE_0__.default.myProjects[id];\r\n        dom.refreshList();\r\n      }\r\n    });\r\n    return deleteButton;\r\n  },\r\n  displayProjectContents: (projectID) => {\r\n    const projectObject = _project_js__WEBPACK_IMPORTED_MODULE_0__.default.myProjects[projectID];\r\n    dom.projectTitle.innerText = projectObject.projectName;\r\n    dom.taskShelf.innerHTML = \"\";\r\n    projectObject.taskList.forEach((x, ind) => {\r\n      dom.appendTask(x, ind, projectID);\r\n    });\r\n  },\r\n  refreshList: () => {\r\n    dom.projectShelf.innerHTML = \"\";\r\n    for (const key in _project_js__WEBPACK_IMPORTED_MODULE_0__.default.myProjects) {\r\n      dom.displayProjectTab(_project_js__WEBPACK_IMPORTED_MODULE_0__.default.myProjects[key]);\r\n    }\r\n  },\r\n  projectFormVisibility: () => {\r\n    dom.projectAddForm.classList.toggle(\"add_project_container_hidden\");\r\n  },\r\n  taskFormVisibility: () => {\r\n    dom.addTaskForm.classList.toggle(\"add_task_container_hidden\");\r\n  },\r\n  taskEditVisibility: () => {\r\n    dom.taskEditForm.classList.toggle(\"edit_task_container_hidden\");\r\n  },\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\r\n\n\n//# sourceURL=webpack://organize-self/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/formatISO/index.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\n\r\n\r\n\r\nfunction listeners() {\r\n  document.getElementById(\"dateDue_form\").min = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.default)(Date.now(), {\r\n    representation: \"date\",\r\n  });\r\n  document\r\n    .getElementById(\"add_project_button\")\r\n    .addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.projectFormVisibility);\r\n  document\r\n    .getElementById(\"add_task_button\")\r\n    .addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.taskFormVisibility);\r\n  document\r\n    .getElementById(\"confirm_project\")\r\n    .addEventListener(\"click\", _project_js__WEBPACK_IMPORTED_MODULE_2__.default.newProject);\r\n  document\r\n    .getElementById(\"cancel_project\")\r\n    .addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.projectFormVisibility);\r\n  document\r\n    .getElementById(\"confirm_task\")\r\n    .addEventListener(\"click\", _task_js__WEBPACK_IMPORTED_MODULE_1__.default.makeNewTask);\r\n  document\r\n    .getElementById(\"cancel_task\")\r\n    .addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.taskFormVisibility);\r\n  _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.projectShelf.querySelectorAll(\"p\")\r\n    .forEach((a) => a.addEventListener(\"click\", _project_js__WEBPACK_IMPORTED_MODULE_2__.default.swapProject));\r\n  document\r\n    .getElementById(\"cancel_changes\")\r\n    .addEventListener(\"click\", _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.taskEditVisibility);\r\n}\r\nlisteners();\r\n_project_js__WEBPACK_IMPORTED_MODULE_2__.default.newProject(\"\", \"Example\");\r\n\n\n//# sourceURL=webpack://organize-self/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\nclass Project {\r\n  static myProjects = {};\r\n  static activeProject = 0;\r\n  static projectIDTracker = 0;\r\n  constructor(projectName) {\r\n    this.projectName = projectName;\r\n    this.taskList = [];\r\n    this.id = Project.projectIDTracker;\r\n    Project.projectIDTracker++;\r\n  }\r\n  static newProject(e, name) {\r\n    if (name === undefined) name = _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.projectAddNameIn.value;\r\n    let project = new Project(name);\r\n    const date = Date.now();\r\n    let defaultTask = new _task_js__WEBPACK_IMPORTED_MODULE_1__.default(\r\n      date,\r\n      \"Example\",\r\n      \"Type in a description of what your task entails.\",\r\n      0\r\n    );\r\n    project.addTask(defaultTask);\r\n    Project.myProjects[project.id] = project;\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.displayProjectTab(project);\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.projectFormVisibility();\r\n  }\r\n  addTask(task) {\r\n    this.taskList.push(task);\r\n  }\r\n  static swapProject(e) {\r\n    e.preventDefault();\r\n    console.log(\"here\");\r\n    Project.activeProject = this.dataset.project;\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.displayProjectContents(this.dataset.project);\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\r\n\n\n//# sourceURL=webpack://organize-self/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/formatISO/index.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\n\r\n\r\n\r\nclass Task {\r\n  constructor(dateDue, title, desc, priority, id) {\r\n    if (dateDue !== \"\" && dateDue !== undefined)\r\n      dateDue = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(dateDue, { representation: \"date\" });\r\n    this.dateDue = dateDue;\r\n    this.title = title;\r\n    this.desc = desc;\r\n    this.priority = priority;\r\n    this.status = false;\r\n    this.dateMade = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(Date.now(), { representation: \"date\" });\r\n    this.id = 0;\r\n  }\r\n  static makeNewTask(e) {\r\n    e.preventDefault();\r\n    const form = _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.addTaskForm.querySelectorAll(\"input\");\r\n    const task = new Task();\r\n    for (let i = 0; i < form.length; i++) {\r\n      if (form[i].value === \"\" || form[i].value === undefined) {\r\n        alert(\"Fill in all fields to create a task.\");\r\n        return;\r\n      }\r\n      task[form[i].name] = form[i].value;\r\n    }\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.taskFormVisibility();\r\n    form.forEach((x) => (x.value = \"\"));\r\n    _project_js__WEBPACK_IMPORTED_MODULE_1__.default.myProjects[_project_js__WEBPACK_IMPORTED_MODULE_1__.default.activeProject].addTask(task);\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.displayProjectContents(_project_js__WEBPACK_IMPORTED_MODULE_1__.default.activeProject);\r\n  }\r\n  static editTask(taskObject) {\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.taskEditVisibility();\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.taskEditForm.querySelectorAll(\"input\").forEach((x) => {\r\n      if (x.type === \"checkbox\") {\r\n        x.checked = taskObject[x.name];\r\n      } else {\r\n        x.value = taskObject[x.name];\r\n      }\r\n    });\r\n    _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.taskEditConfirm.addEventListener(\"click\", updateTask);\r\n    function updateTask() {\r\n      _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.taskEditForm.querySelectorAll(\"input\").forEach((x) => {\r\n        console.log(x.value);\r\n        if (x.name === \"dateMade\") return;\r\n        if (x.type !== \"checkbox\") {\r\n          taskObject[x.name] = x.value;\r\n          x.value = \"\";\r\n        } else {\r\n          taskObject[x.name] = x.checked;\r\n          x.checked = false;\r\n        }\r\n        _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.displayProjectContents(_project_js__WEBPACK_IMPORTED_MODULE_1__.default.activeProject);\r\n      });\r\n      _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.taskEditVisibility();\r\n      _dom_js__WEBPACK_IMPORTED_MODULE_0__.default.taskEditConfirm.removeEventListener(\"click\", updateTask);\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\r\n\n\n//# sourceURL=webpack://organize-self/./src/task.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;