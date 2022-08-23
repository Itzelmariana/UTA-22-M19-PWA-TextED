/*! For license information please see main.bundle.js.LICENSE.txt */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  /******/ var __webpack_modules__ = {
    /***/ './src/js/index.js':
      /*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var workbox_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! workbox-window */ \"./node_modules/workbox-window/build/workbox-window.prod.es5.mjs\");\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n\n // Check if service workers are supported\n\nif ('serviceWorker' in navigator) {\n  // Register workbox service worker\n  var workboxSW = new workbox_window__WEBPACK_IMPORTED_MODULE_0__.Workbox('./src-sw.js');\n  workboxSW.register();\n} else {\n  console.error('Service workers are not supported in this browser.');\n}\n\n//# sourceURL=webpack://Contact/./src/js/index.js?"
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/cjs.js!./src/css/styles.css':
      /*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg> */ \"data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg>\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#navbar {\\n    height: 70px;\\n    background-color: #31a9e1;\\n    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    color: white;\\n    font-size: 22px;\\n    font-weight: 550;\\n    letter-spacing: 0.9px;\\n  }\\n\\n  @media only screen and (max-width: 600px) {\\n    .nav-btn {\\n      display: none;\\n    }\\n  \\n    #navbar {\\n      justify-content: center;\\n    }\\n  \\n  }\\n\\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n/* Document\\n   ========================================================================== */\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n html {\\n    line-height: 1.15;\\n    /* 1 */\\n    -webkit-text-size-adjust: 100%;\\n    /* 2 */\\n  }\\n  \\n  /* Sections\\n     ========================================================================== */\\n  /**\\n   * Remove the margin in all browsers.\\n   */\\n  body {\\n    margin: 0;\\n  }\\n  \\n  /**\\n   * Render the `main` element consistently in IE.\\n   */\\n  main {\\n    display: block;\\n  }\\n  \\n  /**\\n   * Correct the font size and margin on `h1` elements within `section` and\\n   * `article` contexts in Chrome, Firefox, and Safari.\\n   */\\n  h1 {\\n    font-size: 1.5em;\\n    margin: 0.67em 0;\\n  }\\n  \\n  /* Grouping content\\n     ========================================================================== */\\n  /**\\n   * 1. Add the correct box sizing in Firefox.\\n   * 2. Show the overflow in Edge and IE.\\n   */\\n  hr {\\n    box-sizing: content-box;\\n    /* 1 */\\n    height: 0;\\n    /* 1 */\\n    overflow: visible;\\n    /* 2 */\\n  }\\n  \\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd `em` font sizing in all browsers.\\n   */\\n  pre {\\n    font-family: monospace, monospace;\\n    /* 1 */\\n    font-size: 1em;\\n    /* 2 */\\n  }\\n  \\n  /* Text-level semantics\\n     ========================================================================== */\\n  /**\\n   * Remove the gray background on active links in IE 10.\\n   */\\n  a {\\n    background-color: transparent;\\n  }\\n  \\n  /**\\n   * 1. Remove the bottom border in Chrome 57-\\n   * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n   */\\n  abbr[title] {\\n    border-bottom: none;\\n    /* 1 */\\n    text-decoration: underline;\\n    /* 2 */\\n    text-decoration: underline dotted;\\n    /* 2 */\\n  }\\n  \\n  /**\\n   * Add the correct font weight in Chrome, Edge, and Safari.\\n   */\\n  b,\\n  strong {\\n    font-weight: bolder;\\n  }\\n  \\n  /**\\n   * 1. Correct the inheritance and scaling of font size in all browsers.\\n   * 2. Correct the odd `em` font sizing in all browsers.\\n   */\\n  code,\\n  kbd,\\n  samp {\\n    font-family: monospace, monospace;\\n    /* 1 */\\n    font-size: 1em;\\n    /* 2 */\\n  }\\n  \\n  /**\\n   * Add the correct font size in all browsers.\\n   */\\n  small {\\n    font-size: 80%;\\n  }\\n  \\n  /**\\n   * Prevent `sub` and `sup` elements from affecting the line height in\\n   * all browsers.\\n   */\\n  sub,\\n  sup {\\n    font-size: 75%;\\n    line-height: 0;\\n    position: relative;\\n    vertical-align: baseline;\\n  }\\n  \\n  sub {\\n    bottom: -0.25em;\\n  }\\n  \\n  sup {\\n    top: -0.5em;\\n  }\\n  \\n  /* Embedded content\\n     ========================================================================== */\\n  /**\\n   * Remove the border on images inside links in IE 10.\\n   */\\n  img {\\n    border-style: none;\\n  }\\n  \\n  /* Forms\\n     ========================================================================== */\\n  /**\\n   * 1. Change the font styles in all browsers.\\n   * 2. Remove the margin in Firefox and Safari.\\n   */\\n  button,\\n  input,\\n  optgroup,\\n  select,\\n  textarea {\\n    font-family: inherit;\\n    /* 1 */\\n    font-size: 100%;\\n    /* 1 */\\n    line-height: 1.15;\\n    /* 1 */\\n    margin: 0;\\n    /* 2 */\\n  }\\n  \\n  /**\\n   * Show the overflow in IE.\\n   * 1. Show the overflow in Edge.\\n   */\\n  button,\\n  input {\\n    /* 1 */\\n    overflow: visible;\\n  }\\n  \\n  /**\\n   * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n   * 1. Remove the inheritance of text transform in Firefox.\\n   */\\n  button,\\n  select {\\n    /* 1 */\\n    text-transform: none;\\n  }\\n  \\n  /**\\n   * Correct the inability to style clickable types in iOS and Safari.\\n   */\\n  button,\\n  [type='button'],\\n  [type='reset'],\\n  [type='submit'] {\\n    -webkit-appearance: button;\\n  }\\n  \\n  /**\\n   * Remove the inner border and padding in Firefox.\\n   */\\n  button::-moz-focus-inner,\\n  [type='button']::-moz-focus-inner,\\n  [type='reset']::-moz-focus-inner,\\n  [type='submit']::-moz-focus-inner {\\n    border-style: none;\\n    padding: 0;\\n  }\\n  \\n  /**\\n   * Restore the focus styles unset by the previous rule.\\n   */\\n  button:-moz-focusring,\\n  [type='button']:-moz-focusring,\\n  [type='reset']:-moz-focusring,\\n  [type='submit']:-moz-focusring {\\n    outline: 1px dotted ButtonText;\\n  }\\n  \\n  /**\\n   * Correct the padding in Firefox.\\n   */\\n  fieldset {\\n    padding: 0.35em 0.75em 0.625em;\\n  }\\n  \\n  /**\\n   * 1. Correct the text wrapping in Edge and IE.\\n   * 2. Correct the color inheritance from `fieldset` elements in IE.\\n   * 3. Remove the padding so developers are not caught out when they zero out\\n   *    `fieldset` elements in all browsers.\\n   */\\n  legend {\\n    box-sizing: border-box;\\n    /* 1 */\\n    color: inherit;\\n    /* 2 */\\n    display: table;\\n    /* 1 */\\n    max-width: 100%;\\n    /* 1 */\\n    padding: 0;\\n    /* 3 */\\n    white-space: normal;\\n    /* 1 */\\n  }\\n  \\n  /**\\n   * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n   */\\n  progress {\\n    vertical-align: baseline;\\n  }\\n  \\n  /**\\n   * Remove the default vertical scrollbar in IE 10+.\\n   */\\n  textarea {\\n    overflow: auto;\\n  }\\n  \\n  /**\\n   * 1. Add the correct box sizing in IE 10.\\n   * 2. Remove the padding in IE 10.\\n   */\\n  [type='checkbox'],\\n  [type='radio'] {\\n    box-sizing: border-box;\\n    /* 1 */\\n    padding: 0;\\n    /* 2 */\\n  }\\n  \\n  /**\\n   * Correct the cursor style of increment and decrement buttons in Chrome.\\n   */\\n  [type='number']::-webkit-inner-spin-button,\\n  [type='number']::-webkit-outer-spin-button {\\n    height: auto;\\n  }\\n  \\n  /**\\n   * 1. Correct the odd appearance in Chrome and Safari.\\n   * 2. Correct the outline style in Safari.\\n   */\\n  [type='search'] {\\n    -webkit-appearance: textfield;\\n    /* 1 */\\n    outline-offset: -2px;\\n    /* 2 */\\n  }\\n  \\n  /**\\n   * Remove the inner padding in Chrome and Safari on macOS.\\n   */\\n  [type='search']::-webkit-search-decoration {\\n    -webkit-appearance: none;\\n  }\\n  \\n  /**\\n   * 1. Correct the inability to style clickable types in iOS and Safari.\\n   * 2. Change font properties to `inherit` in Safari.\\n   */\\n  ::-webkit-file-upload-button {\\n    -webkit-appearance: button;\\n    /* 1 */\\n    font: inherit;\\n    /* 2 */\\n  }\\n  \\n  /* Interactive\\n     ========================================================================== */\\n  /*\\n   * Add the correct display in Edge, IE 10+, and Firefox.\\n   */\\n  details {\\n    display: block;\\n  }\\n  \\n  /*\\n   * Add the correct display in all browsers.\\n   */\\n  summary {\\n    display: list-item;\\n  }\\n  \\n  /* Misc\\n     ========================================================================== */\\n  /**\\n   * Add the correct display in IE 10+.\\n   */\\n  template {\\n    display: none;\\n  }\\n  \\n  /**\\n   * Add the correct display in IE 10.\\n   */\\n  [hidden] {\\n    display: none;\\n  }\\n  \\n  /* \\n  =================\\n  END NORMALIZE CSS\\n  =================\\n  */\\n  *,\\n  *::before,\\n  *::after {\\n    box-sizing: border-box;\\n  }\\n  \\n  html,\\n  body {\\n    min-height: 100%;\\n  }\\n  \\n  body {\\n    margin: 0;\\n    padding: 0;\\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\\n    font-size: 16px;\\n    color: #1a1a1a;\\n  }\\n  \\n  h1,\\n  h2,\\n  h3,\\n  h4,\\n  h5,\\n  h6 {\\n    margin: 0 0 0.5rem;\\n    line-height: 1.25;\\n  }\\n  \\n  h1 {\\n    font-size: 2.25rem;\\n  }\\n  \\n  h2 {\\n    font-size: 2rem;\\n  }\\n  \\n  h3 {\\n    font-size: 1.75rem;\\n  }\\n  \\n  h4 {\\n    font-size: 1.5rem;\\n  }\\n  \\n  h5 {\\n    font-size: 1.25rem;\\n  }\\n  \\n  h6 {\\n    font-size: 1rem;\\n  }\\n  \\n  p {\\n    font-size: 1.1rem;\\n    margin: 0 0 1rem;\\n    line-height: 1.5;\\n  }\\n  \\n  ul,\\n  ol,\\n  dl {\\n    margin-top: 0;\\n    margin-bottom: 1rem;\\n  }\\n  \\n  label {\\n    display: inline-block;\\n  }\\n  \\n  input,\\n  select,\\n  textarea,\\n  button {\\n    margin: 0;\\n  }\\n  \\n  a {\\n    color: #1b89bc;\\n    text-decoration: none;\\n  }\\n  \\n  a:hover {\\n    color: #065b83;\\n    text-decoration: underline;\\n  }\\n  \\n  /* HEIGHT / WIDTH UTILS */\\n  .w-100 {\\n    width: 100%;\\n  }\\n  \\n  .w-75 {\\n    width: 75%;\\n  }\\n  \\n  .w-50 {\\n    width: 50%;\\n  }\\n  \\n  .w-25 {\\n    width: 25%;\\n  }\\n  \\n  .min-100-vh {\\n    min-height: 100vh;\\n  }\\n  \\n  .min-100-vw {\\n    min-width: 100vw;\\n  }\\n  \\n  /* MARGIN/PADDING UTILS */\\n  /* Margin - all sides */\\n  .m-0 {\\n    margin: 0;\\n  }\\n  \\n  .m-1 {\\n    margin: 0.375rem;\\n  }\\n  \\n  .m-2 {\\n    margin: 0.625rem;\\n  }\\n  \\n  .m-3 {\\n    margin: 1rem;\\n  }\\n  \\n  .m-4 {\\n    margin: 1.375rem;\\n  }\\n  \\n  .m-5 {\\n    margin: 1.625rem;\\n  }\\n  \\n  .m-auto {\\n    margin: auto;\\n  }\\n  \\n  /* Margin-bottom */\\n  .mb-0 {\\n    margin-bottom: 0;\\n  }\\n  \\n  .mb-1 {\\n    margin-bottom: 0.375rem;\\n  }\\n  \\n  .mb-2 {\\n    margin-bottom: 0.625rem;\\n  }\\n  \\n  .mb-3 {\\n    margin-bottom: 1rem;\\n  }\\n  \\n  .mb-4 {\\n    margin-bottom: 1.375rem;\\n  }\\n  \\n  .mb-5 {\\n    margin-bottom: 1.625rem;\\n  }\\n  \\n  .mb-auto {\\n    margin-bottom: auto;\\n  }\\n  \\n  /* Margin-top */\\n  .mt-0 {\\n    margin-top: 0;\\n  }\\n  \\n  .mt-1 {\\n    margin-top: 0.375rem;\\n  }\\n  \\n  .mt-2 {\\n    margin-top: 0.625rem;\\n  }\\n  \\n  .mt-3 {\\n    margin-top: 1rem;\\n  }\\n  \\n  .mt-4 {\\n    margin-top: 1.375rem;\\n  }\\n  \\n  .mt-5 {\\n    margin-top: 1.625rem;\\n  }\\n  \\n  .mt-auto {\\n    margin-top: auto;\\n  }\\n  \\n  /* Margin-right */\\n  .mr-0 {\\n    margin-right: 0;\\n  }\\n  \\n  .mr-1 {\\n    margin-right: 0.375rem;\\n  }\\n  \\n  .mr-2 {\\n    margin-right: 0.625rem;\\n  }\\n  \\n  .mr-3 {\\n    margin-right: 1rem;\\n  }\\n  \\n  .mr-4 {\\n    margin-right: 1.375rem;\\n  }\\n  \\n  .mr-5 {\\n    margin-right: 1.625rem;\\n  }\\n  \\n  .mr-auto {\\n    margin-right: auto;\\n  }\\n  \\n  /* Margin-left */\\n  .ml-0 {\\n    margin-left: 0;\\n  }\\n  \\n  .ml-1 {\\n    margin-left: 0.375rem;\\n  }\\n  \\n  .ml-2 {\\n    margin-left: 0.625rem;\\n  }\\n  \\n  .ml-3 {\\n    margin-left: 1rem;\\n  }\\n  \\n  .ml-4 {\\n    margin-left: 1.375rem;\\n  }\\n  \\n  .ml-5 {\\n    margin-left: 1.625rem;\\n  }\\n  \\n  .ml-auto {\\n    margin-left: auto;\\n  }\\n  \\n  /* Margin - x axis */\\n  .mx-0 {\\n    margin-right: 0;\\n    margin-left: 0;\\n  }\\n  \\n  .mx-1 {\\n    margin-right: 0.375rem;\\n    margin-left: 0.375rem;\\n  }\\n  \\n  .mx-2 {\\n    margin-right: 0.625rem;\\n    margin-left: 0.625rem;\\n  }\\n  \\n  .mx-3 {\\n    margin-right: 1rem;\\n    margin-left: 1rem;\\n  }\\n  \\n  .mx-4 {\\n    margin-right: 1.375rem;\\n    margin-left: 1.375rem;\\n  }\\n  \\n  .mx-5 {\\n    margin-right: 1.625rem;\\n    margin-left: 1.625rem;\\n  }\\n  \\n  .mx-auto {\\n    margin-right: auto;\\n    margin-left: auto;\\n  }\\n  \\n  /* Margin - y axis */\\n  .my-0 {\\n    margin-top: 0;\\n    margin-bottom: 0;\\n  }\\n  \\n  .my-1 {\\n    margin-top: 0.375rem;\\n    margin-bottom: 0.375rem;\\n  }\\n  \\n  .my-2 {\\n    margin-top: 0.625rem;\\n    margin-bottom: 0.625rem;\\n  }\\n  \\n  .my-3 {\\n    margin-top: 1rem;\\n    margin-bottom: 1rem;\\n  }\\n  \\n  .my-4 {\\n    margin-top: 1.375rem;\\n    margin-bottom: 1.375rem;\\n  }\\n  \\n  .my-5 {\\n    margin-top: 1.625rem;\\n    margin-bottom: 1.625rem;\\n  }\\n  \\n  .my-auto {\\n    margin-top: auto;\\n    margin-bottom: auto;\\n  }\\n  \\n  /* Padding - all sides */\\n  .p-0 {\\n    padding: 0;\\n  }\\n  \\n  .p-1 {\\n    padding: 0.375rem;\\n  }\\n  \\n  .p-2 {\\n    padding: 0.625rem;\\n  }\\n  \\n  .p-3 {\\n    padding: 1rem;\\n  }\\n  \\n  .p-4 {\\n    padding: 1.375rem;\\n  }\\n  \\n  .p-5 {\\n    padding: 1.625rem;\\n  }\\n  \\n  /* padding-bottom */\\n  .pb-0 {\\n    padding-bottom: 0;\\n  }\\n  \\n  .pb-1 {\\n    padding-bottom: 0.375rem;\\n  }\\n  \\n  .pb-2 {\\n    padding-bottom: 0.625rem;\\n  }\\n  \\n  .pb-3 {\\n    padding-bottom: 1rem;\\n  }\\n  \\n  .pb-4 {\\n    padding-bottom: 1.375rem;\\n  }\\n  \\n  .pb-5 {\\n    padding-bottom: 1.625rem;\\n  }\\n  \\n  /* padding-top */\\n  .pt-0 {\\n    padding-top: 0;\\n  }\\n  \\n  .pt-1 {\\n    padding-top: 0.375rem;\\n  }\\n  \\n  .pt-2 {\\n    padding-top: 0.625rem;\\n  }\\n  \\n  .pt-3 {\\n    padding-top: 1rem;\\n  }\\n  \\n  .pt-4 {\\n    padding-top: 1.375rem;\\n  }\\n  \\n  .pt-5 {\\n    padding-top: 1.625rem;\\n  }\\n  \\n  /* padding-right */\\n  .pr-0 {\\n    padding-right: 0;\\n  }\\n  \\n  .pr-1 {\\n    padding-right: 0.375rem;\\n  }\\n  \\n  .pr-2 {\\n    padding-right: 0.625rem;\\n  }\\n  \\n  .pr-3 {\\n    padding-right: 1rem;\\n  }\\n  \\n  .pr-4 {\\n    padding-right: 1.375rem;\\n  }\\n  \\n  .pr-5 {\\n    padding-right: 1.625rem;\\n  }\\n  \\n  /* padding-left */\\n  .pl-0 {\\n    padding-left: 0;\\n  }\\n  \\n  .pl-1 {\\n    padding-left: 0.375rem;\\n  }\\n  \\n  .pl-2 {\\n    padding-left: 0.625rem;\\n  }\\n  \\n  .pl-3 {\\n    padding-left: 1rem;\\n  }\\n  \\n  .pl-4 {\\n    padding-left: 1.375rem;\\n  }\\n  \\n  .pl-5 {\\n    padding-left: 1.625rem;\\n  }\\n  \\n  /* padding - x axis */\\n  .px-0 {\\n    padding-right: 0;\\n    padding-left: 0;\\n  }\\n  \\n  .px-1 {\\n    padding-right: 0.375rem;\\n    padding-left: 0.375rem;\\n  }\\n  \\n  .px-2 {\\n    padding-right: 0.625rem;\\n    padding-left: 0.625rem;\\n  }\\n  \\n  .px-3 {\\n    padding-right: 1rem;\\n    padding-left: 1rem;\\n  }\\n  \\n  .px-4 {\\n    padding-right: 1.375rem;\\n    padding-left: 1.375rem;\\n  }\\n  \\n  .px-5 {\\n    padding-right: 1.625rem;\\n    padding-left: 1.625rem;\\n  }\\n  \\n  /* Padding - y axis */\\n  .py-0 {\\n    padding-top: 0;\\n    padding-bottom: 0;\\n  }\\n  \\n  .py-1 {\\n    padding-top: 0.375rem;\\n    padding-bottom: 0.375rem;\\n  }\\n  \\n  .py-2 {\\n    padding-top: 0.625rem;\\n    padding-bottom: 0.625rem;\\n  }\\n  \\n  .py-3 {\\n    padding-top: 1rem;\\n    padding-bottom: 1rem;\\n  }\\n  \\n  .py-4 {\\n    padding-top: 1.375rem;\\n    padding-bottom: 1.375rem;\\n  }\\n  \\n  .py-5 {\\n    padding-top: 1.625rem;\\n    padding-bottom: 1.625rem;\\n  }\\n  \\n  .text-uppercase {\\n    text-transform: uppercase !important;\\n  }\\n  \\n  .text-lowercase {\\n    text-transform: lowercase !important;\\n  }\\n  \\n  .text-center {\\n    text-align: center !important;\\n  }\\n  \\n  .text-justify {\\n    text-align: justify !important;\\n  }\\n  \\n  .text-right {\\n    text-align: right !important;\\n  }\\n  \\n  .text-primary {\\n    color: #2d3e50 !important;\\n  }\\n  \\n  .text-info {\\n    color: #1bbc9b !important;\\n  }\\n  \\n  .text-danger {\\n    color: #e64c66 !important;\\n  }\\n  \\n  .text-default {\\n    color: #aeaeae !important;\\n  }\\n  \\n  .text-light {\\n    color: #d9e9e8 !important;\\n  }\\n  \\n  .text-dark {\\n    color: #1a1a1a !important;\\n  }\\n  \\n  .text-white {\\n    color: #ffffff !important;\\n  }\\n  \\n  .text-black {\\n    color: #000000 !important;\\n  }\\n  \\n  .text-link {\\n    color: #1b89bc !important;\\n  }\\n  \\n  /* BACKGROUND UTILS */\\n  .bg-primary {\\n    background-color: #2d3e50 !important;\\n  }\\n  \\n  .bg-info {\\n    background-color: #1bbc9b !important;\\n  }\\n  \\n  .bg-danger {\\n    background-color: #e64c66 !important;\\n  }\\n  \\n  .bg-light {\\n    background-color: #d9e9e8 !important;\\n  }\\n  \\n  .bg-dark {\\n    background-color: #1a1a1a !important;\\n  }\\n  \\n  .bg-white {\\n    background-color: #ffffff !important;\\n  }\\n  \\n  .bg-black {\\n    background-color: #000000 !important;\\n  }\\n  \\n  .bg-link {\\n    background-color: #1b89bc !important;\\n  }\\n  \\n  /* DISPLAY */\\n  .display-none {\\n    display: none !important;\\n  }\\n  \\n  .display-block {\\n    display: block !important;\\n  }\\n  \\n  .display-inline-block {\\n    display: inline-block !important;\\n  }\\n  \\n  .display-inline {\\n    display: inline !important;\\n  }\\n  \\n  .display-flex {\\n    display: flex !important;\\n  }\\n  \\n  .btn {\\n    text-align: center;\\n    display: inline-block;\\n    padding: 0.5rem 1.2rem;\\n    margin: 0;\\n    text-decoration: none;\\n    font-size: 1rem;\\n    border-radius: 0.3rem;\\n    border: 1px solid transparent;\\n    outline: none;\\n    color: #1a1a1a;\\n    background-color: #aeaeae;\\n    transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\\n  }\\n  \\n  .btn:hover {\\n    background-color: #cecece;\\n  }\\n  \\n  .btn.btn-squared {\\n    border-radius: 0;\\n  }\\n  \\n  .btn.btn-sm {\\n    font-size: 0.85rem;\\n    padding: 0.3rem 0.9rem;\\n  }\\n  \\n  .btn.btn-lg {\\n    font-size: 1.25rem;\\n    padding: 0.8rem 1.4rem;\\n  }\\n  \\n  .btn.btn-block {\\n    width: 100%;\\n    display: block;\\n    text-align: center;\\n  }\\n  \\n  .btn.btn-primary {\\n    background-color: #2d3e50;\\n    color: #d9e9e8;\\n  }\\n  \\n  .btn.btn-primary:hover {\\n    background-color: #57779a;\\n  }\\n  \\n  .btn.btn-danger {\\n    background-color: #e64c66;\\n    color: #ffffff;\\n  }\\n  \\n  .btn.btn-danger:hover {\\n    background-color: #ee8294;\\n  }\\n  \\n  .btn.btn-info {\\n    background-color: #1bbc9b;\\n    color: #ffffff;\\n  }\\n  \\n  .btn.btn-info:hover {\\n    background-color: #31e1bd;\\n  }\\n  \\n  .btn.btn-light {\\n    background-color: #d9e9e8;\\n    color: #1a1a1a;\\n  }\\n  \\n  .btn.btn-light:hover {\\n    background-color: #84b8b4;\\n  }\\n  \\n  .btn.btn-dark {\\n    background-color: #1a1a1a;\\n    color: #d9e9e8;\\n  }\\n  \\n  .btn.btn-dark:hover {\\n    background-color: #5f5f5f;\\n  }\\n  \\n  .btn.btn-white {\\n    background-color: #ffffff;\\n    color: #1a1a1a;\\n  }\\n  \\n  .btn.btn-white:hover {\\n    background-color: #cccccc;\\n  }\\n  \\n  .btn.btn-black {\\n    background-color: #000000;\\n    color: #ffffff;\\n  }\\n  \\n  .btn.btn-black:hover {\\n    background-color: #666666;\\n  }\\n  \\n  .btn.btn-link {\\n    background-color: #1b89bc;\\n    color: #ffffff;\\n  }\\n  \\n  .btn.btn-link:hover {\\n    background-color: #31a9e1;\\n  }\\n  \\n  .card {\\n    border: 1px solid #1a1a1a;\\n    margin-bottom: 1rem;\\n  }\\n  \\n  .card .card-header {\\n    padding: 0.375rem;\\n    background-color: #2d3e50;\\n    color: #d9e9e8;\\n  }\\n  \\n  .card .card-body {\\n    padding: 0.375rem;\\n  }\\n  \\n  .card .card-footer {\\n    border-top: 1px solid #1a1a1a;\\n    padding: 0.375rem;\\n  }\\n  \\n  .card.card-rounded {\\n    border-radius: 0.3rem;\\n  }\\n  \\n  .card.card-rounded .card-header {\\n    border-radius: calc(0.18rem - 1px) calc(0.18rem - 1px) 0 0;\\n  }\\n  \\n  form {\\n    width: 100%;\\n  }\\n  \\n  form .form-group {\\n    display: block;\\n    width: 100%;\\n    margin: 0.625rem 0;\\n  }\\n  \\n  form .form-input,\\n  form .form-textarea {\\n    display: block;\\n  }\\n  \\n  form select {\\n    -webkit-appearance: none;\\n    -moz-appearance: none;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    background-position-x: 98%;\\n    background-position-y: 50%;\\n  }\\n  \\n  form label,\\n  form .form-label {\\n    display: inline-block;\\n    font-size: 1.2rem;\\n    margin: 0.625rem 0 0.25rem 0.3rem;\\n  }\\n  \\n  form .form-input {\\n    width: 100%;\\n    padding: 0.75rem;\\n    color: #1a1a1a;\\n    background-color: #ffffff;\\n    margin: 0.625rem 0;\\n    font-size: 1.2rem;\\n    border: 1px solid #484848;\\n    border-radius: 0.3rem;\\n  }\\n  \\n  form .form-input.form-input-squared {\\n    border-radius: 0;\\n  }\\n  \\n  form [type='checkbox'],\\n  form [type='radio'] {\\n    display: inline-block;\\n  }\\n  \\n  label form [type='checkbox'], label\\n  form [type='radio'] {\\n    display: inline-block;\\n  }\\n  \\n  .container {\\n    width: 85%;\\n    max-width: 1200px;\\n    margin-left: auto;\\n    margin-right: auto;\\n  }\\n  \\n  .container.container-fluid {\\n    width: 92%;\\n  }\\n  \\n  /* FLEX CONTENT */\\n  .flex-row {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n  }\\n  \\n  .flex-column {\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: wrap;\\n  }\\n  \\n  .flex-wrap {\\n    flex-wrap: wrap;\\n  }\\n  \\n  .flex-no-wrap {\\n    flex-wrap: nowrap;\\n  }\\n  \\n  .justify-space-between {\\n    justify-content: space-between;\\n  }\\n  \\n  .justify-space-around {\\n    justify-content: space-around;\\n  }\\n  \\n  .justify-flex-start {\\n    justify-content: flex-start;\\n  }\\n  \\n  .justify-flex-end {\\n    justify-content: flex-end;\\n  }\\n  \\n  .justify-center {\\n    justify-content: center;\\n  }\\n  \\n  .align-start {\\n    align-items: flex-start;\\n  }\\n  \\n  .align-stretch {\\n    align-items: stretch;\\n  }\\n  \\n  .align-end {\\n    align-items: flex-end;\\n  }\\n  \\n  .align-center {\\n    align-items: center;\\n  }\\n  \\n  .align-content-start {\\n    align-content: flex-start;\\n  }\\n  \\n  .align-content-stretch {\\n    align-content: stretch;\\n  }\\n  \\n  .align-content-end {\\n    align-content: flex-end;\\n  }\\n  \\n  .align-content-center {\\n    align-content: center;\\n  }\\n  \\n  .row {\\n    display: flex;\\n    flex-wrap: wrap;\\n    flex-direction: row;\\n    margin-left: -15px;\\n    margin-right: -15px;\\n  }\\n  \\n  [class*='col-'] {\\n    position: relative;\\n    width: 100%;\\n    padding-right: 15px;\\n    padding-left: 15px;\\n  }\\n  \\n  .col-auto {\\n    flex-grow: 1;\\n    flex-basis: 0;\\n  }\\n  \\n  .col-1 {\\n    flex: 0 0 8.33333%;\\n    max-width: 8.33333%;\\n  }\\n  \\n  .col-2 {\\n    flex: 0 0 16.66667%;\\n    max-width: 16.66667%;\\n  }\\n  \\n  .col-3 {\\n    flex: 0 0 25%;\\n    max-width: 25%;\\n  }\\n  \\n  .col-4 {\\n    flex: 0 0 33.33333%;\\n    max-width: 33.33333%;\\n  }\\n  \\n  .col-5 {\\n    flex: 0 0 41.66667%;\\n    max-width: 41.66667%;\\n  }\\n  \\n  .col-6 {\\n    flex: 0 0 50%;\\n    max-width: 50%;\\n  }\\n  \\n  .col-7 {\\n    flex: 0 0 58.33333%;\\n    max-width: 58.33333%;\\n  }\\n  \\n  .col-8 {\\n    flex: 0 0 66.66667%;\\n    max-width: 66.66667%;\\n  }\\n  \\n  .col-9 {\\n    flex: 0 0 75%;\\n    max-width: 75%;\\n  }\\n  \\n  .col-10 {\\n    flex: 0 0 83.33333%;\\n    max-width: 83.33333%;\\n  }\\n  \\n  .col-11 {\\n    flex: 0 0 91.66667%;\\n    max-width: 91.66667%;\\n  }\\n  \\n  .col-12 {\\n    flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n  \\n  /* col-sm */\\n  @media screen and (min-width: 640px) {\\n    .col-sm-auto {\\n      flex-grow: 1;\\n      flex-basis: 0;\\n    }\\n    .col-sm-1 {\\n      flex: 0 0 8.33333%;\\n      max-width: 8.33333%;\\n    }\\n    .col-sm-2 {\\n      flex: 0 0 16.66667%;\\n      max-width: 16.66667%;\\n    }\\n    .col-sm-3 {\\n      flex: 0 0 25%;\\n      max-width: 25%;\\n    }\\n    .col-sm-4 {\\n      flex: 0 0 33.33333%;\\n      max-width: 33.33333%;\\n    }\\n    .col-sm-5 {\\n      flex: 0 0 41.66667%;\\n      max-width: 41.66667%;\\n    }\\n    .col-sm-6 {\\n      flex: 0 0 50%;\\n      max-width: 50%;\\n    }\\n    .col-sm-7 {\\n      flex: 0 0 58.33333%;\\n      max-width: 58.33333%;\\n    }\\n    .col-sm-8 {\\n      flex: 0 0 66.66667%;\\n      max-width: 66.66667%;\\n    }\\n    .col-sm-9 {\\n      flex: 0 0 75%;\\n      max-width: 75%;\\n    }\\n    .col-sm-10 {\\n      flex: 0 0 83.33333%;\\n      max-width: 83.33333%;\\n    }\\n    .col-sm-11 {\\n      flex: 0 0 91.66667%;\\n      max-width: 91.66667%;\\n    }\\n    .col-sm-12 {\\n      flex: 0 0 100%;\\n      max-width: 100%;\\n    }\\n    .justify-space-between-sm {\\n      justify-content: space-between;\\n    }\\n    .justify-space-around-sm {\\n      justify-content: space-around;\\n    }\\n    .justify-flex-start-sm {\\n      justify-content: flex-start;\\n    }\\n    .justify-flex-end-sm {\\n      justify-content: flex-end;\\n    }\\n    .justify-center-sm {\\n      justify-content: center;\\n    }\\n    .align-start-sm {\\n      align-items: flex-start;\\n    }\\n    .align-stretch-sm {\\n      align-items: stretch;\\n    }\\n    .align-end-sm {\\n      align-items: flex-end;\\n    }\\n    .align-center-sm {\\n      align-items: center;\\n    }\\n    .align-content-start-sm {\\n      align-content: flex-start;\\n    }\\n    .align-content-stretch-sm {\\n      align-content: stretch;\\n    }\\n    .align-content-end-sm {\\n      align-content: flex-end;\\n    }\\n    .align-content-center-sm {\\n      align-content: center;\\n    }\\n  }\\n  \\n  /* col-md */\\n  @media screen and (min-width: 768px) {\\n    .col-md-auto {\\n      flex-grow: 1;\\n      flex-basis: 0;\\n    }\\n    .col-md-1 {\\n      flex: 0 0 8.33333%;\\n      max-width: 8.33333%;\\n    }\\n    .col-md-2 {\\n      flex: 0 0 16.66667%;\\n      max-width: 16.66667%;\\n    }\\n    .col-md-3 {\\n      flex: 0 0 25%;\\n      max-width: 25%;\\n    }\\n    .col-md-4 {\\n      flex: 0 0 33.33333%;\\n      max-width: 33.33333%;\\n    }\\n    .col-md-5 {\\n      flex: 0 0 41.66667%;\\n      max-width: 41.66667%;\\n    }\\n    .col-md-6 {\\n      flex: 0 0 50%;\\n      max-width: 50%;\\n    }\\n    .col-md-7 {\\n      flex: 0 0 58.33333%;\\n      max-width: 58.33333%;\\n    }\\n    .col-md-8 {\\n      flex: 0 0 66.66667%;\\n      max-width: 66.66667%;\\n    }\\n    .col-md-9 {\\n      flex: 0 0 75%;\\n      max-width: 75%;\\n    }\\n    .col-md-10 {\\n      flex: 0 0 83.33333%;\\n      max-width: 83.33333%;\\n    }\\n    .col-md-11 {\\n      flex: 0 0 91.66667%;\\n      max-width: 91.66667%;\\n    }\\n    .col-md-12 {\\n      flex: 0 0 100%;\\n      max-width: 100%;\\n    }\\n    .justify-space-between-md {\\n      justify-content: space-between;\\n    }\\n    .justify-space-around-md {\\n      justify-content: space-around;\\n    }\\n    .justify-flex-start-md {\\n      justify-content: flex-start;\\n    }\\n    .justify-flex-end-md {\\n      justify-content: flex-end;\\n    }\\n    .justify-center-md {\\n      justify-content: center;\\n    }\\n    .align-start-md {\\n      align-items: flex-start;\\n    }\\n    .align-stretch-md {\\n      align-items: stretch;\\n    }\\n    .align-end-md {\\n      align-items: flex-end;\\n    }\\n    .align-center-md {\\n      align-items: center;\\n    }\\n    .align-content-start-md {\\n      align-content: flex-start;\\n    }\\n    .align-content-stretch-md {\\n      align-content: stretch;\\n    }\\n    .align-content-end-md {\\n      align-content: flex-end;\\n    }\\n    .align-content-center-md {\\n      align-content: center;\\n    }\\n  }\\n  \\n  /* col-lg */\\n  @media screen and (min-width: 992px) {\\n    .col-md-auto {\\n      flex-grow: 1;\\n      flex-basis: 0;\\n    }\\n    .col-lg-1 {\\n      flex: 0 0 8.33333%;\\n      max-width: 8.33333%;\\n    }\\n    .col-lg-2 {\\n      flex: 0 0 16.66667%;\\n      max-width: 16.66667%;\\n    }\\n    .col-lg-3 {\\n      flex: 0 0 25%;\\n      max-width: 25%;\\n    }\\n    .col-lg-4 {\\n      flex: 0 0 33.33333%;\\n      max-width: 33.33333%;\\n    }\\n    .col-lg-5 {\\n      flex: 0 0 41.66667%;\\n      max-width: 41.66667%;\\n    }\\n    .col-lg-6 {\\n      flex: 0 0 50%;\\n      max-width: 50%;\\n    }\\n    .col-lg-7 {\\n      flex: 0 0 58.33333%;\\n      max-width: 58.33333%;\\n    }\\n    .col-lg-8 {\\n      flex: 0 0 66.66667%;\\n      max-width: 66.66667%;\\n    }\\n    .col-lg-9 {\\n      flex: 0 0 75%;\\n      max-width: 75%;\\n    }\\n    .col-lg-10 {\\n      flex: 0 0 83.33333%;\\n      max-width: 83.33333%;\\n    }\\n    .col-lg-11 {\\n      flex: 0 0 91.66667%;\\n      max-width: 91.66667%;\\n    }\\n    .col-lg-12 {\\n      flex: 0 0 100%;\\n      max-width: 100%;\\n    }\\n    .justify-space-between-lg {\\n      justify-content: space-between;\\n    }\\n    .justify-space-around-lg {\\n      justify-content: space-around;\\n    }\\n    .justify-flex-start-lg {\\n      justify-content: flex-start;\\n    }\\n    .justify-flex-end-lg {\\n      justify-content: flex-end;\\n    }\\n    .justify-center-lg {\\n      justify-content: center;\\n    }\\n    .align-start-lg {\\n      align-items: flex-start;\\n    }\\n    .align-stretch-lg {\\n      align-items: stretch;\\n    }\\n    .align-end-lg {\\n      align-items: flex-end;\\n    }\\n    .align-center-lg {\\n      align-items: center;\\n    }\\n    .align-content-start-lg {\\n      align-content: flex-start;\\n    }\\n    .align-content-stretch-lg {\\n      align-content: stretch;\\n    }\\n    .align-content-end-lg {\\n      align-content: flex-end;\\n    }\\n    .align-content-center-lg {\\n      align-content: center;\\n    }\\n  }\\n  \\n  /* col-xl */\\n  @media screen and (min-width: 1200px) {\\n    .col-xl-1 {\\n      flex: 0 0 8.33333%;\\n      max-width: 8.33333%;\\n    }\\n    .col-xl-2 {\\n      flex: 0 0 16.66667%;\\n      max-width: 16.66667%;\\n    }\\n    .col-xl-3 {\\n      flex: 0 0 25%;\\n      max-width: 25%;\\n    }\\n    .col-xl-4 {\\n      flex: 0 0 33.33333%;\\n      max-width: 33.33333%;\\n    }\\n    .col-xl-5 {\\n      flex: 0 0 41.66667%;\\n      max-width: 41.66667%;\\n    }\\n    .col-xl-6 {\\n      flex: 0 0 50%;\\n      max-width: 50%;\\n    }\\n    .col-xl-7 {\\n      flex: 0 0 58.33333%;\\n      max-width: 58.33333%;\\n    }\\n    .col-xl-8 {\\n      flex: 0 0 66.66667%;\\n      max-width: 66.66667%;\\n    }\\n    .col-xl-9 {\\n      flex: 0 0 75%;\\n      max-width: 75%;\\n    }\\n    .col-xl-10 {\\n      flex: 0 0 83.33333%;\\n      max-width: 83.33333%;\\n    }\\n    .col-xl-11 {\\n      flex: 0 0 100%;\\n      max-width: 100%;\\n    }\\n    .col-xl-12 {\\n      flex: 0 0 100%;\\n      max-width: 100%;\\n    }\\n    .justify-space-between-xl {\\n      justify-content: space-between;\\n    }\\n    .justify-space-around-xl {\\n      justify-content: space-around;\\n    }\\n    .justify-flex-start-xl {\\n      justify-content: flex-start;\\n    }\\n    .justify-flex-end-xl {\\n      justify-content: flex-end;\\n    }\\n    .justify-center-xl {\\n      justify-content: center;\\n    }\\n    .align-start-xl {\\n      align-items: flex-start;\\n    }\\n    .align-stretch-xl {\\n      align-items: stretch;\\n    }\\n    .align-end-xl {\\n      align-items: flex-end;\\n    }\\n    .align-center-xl {\\n      align-items: center;\\n    }\\n    .align-content-start-xl {\\n      align-content: flex-start;\\n    }\\n    .align-content-stretch-xl {\\n      align-content: stretch;\\n    }\\n    .align-content-end-xl {\\n      align-content: flex-end;\\n    }\\n    .align-content-center-xl {\\n      align-content: center;\\n    }\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Contact/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js"
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/api.js':
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
        eval(
          '\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += "}";\n      }\n\n      if (item[2]) {\n        content += "}";\n      }\n\n      if (item[4]) {\n        content += "}";\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Contact/./node_modules/css-loader/dist/runtime/api.js?'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/getUrl.js':
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^[\'"].*[\'"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/["\'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return "\\"".concat(url.replace(/"/g, \'\\\\"\').replace(/\\n/g, "\\\\n"), "\\"");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://Contact/./node_modules/css-loader/dist/runtime/getUrl.js?'
        );

        /***/
      },

    /***/ './node_modules/css-loader/dist/runtime/noSourceMaps.js':
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
      /***/ (module) => {
        eval(
          '\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Contact/./node_modules/css-loader/dist/runtime/noSourceMaps.js?'
        );

        /***/
      },

    /***/ './src/css/styles.css':
      /*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);\n\n\n//# sourceURL=webpack://Contact/./src/css/styles.css?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js':
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Contact/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertBySelector.js':
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        eval(
          '\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Contact/./node_modules/style-loader/dist/runtime/insertBySelector.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/insertStyleElement.js':
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Contact/./node_modules/style-loader/dist/runtime/insertStyleElement.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js':
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Contact/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleDomAPI.js':
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n\n  var needLayer = typeof obj.layer !== "undefined";\n\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += "}";\n  }\n\n  if (obj.media) {\n    css += "}";\n  }\n\n  if (obj.supports) {\n    css += "}";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Contact/./node_modules/style-loader/dist/runtime/styleDomAPI.js?'
        );

        /***/
      },

    /***/ './node_modules/style-loader/dist/runtime/styleTagTransform.js':
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
        eval(
          '\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Contact/./node_modules/style-loader/dist/runtime/styleTagTransform.js?'
        );

        /***/
      },

    /***/ 'data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg>':
      /*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg> ***!
  \*************************************************************************************************************************************************************************************************************************************/
      /***/ (module) => {
        eval(
          'module.exports = "data:image/svg+xml;utf8,<svg fill=%27black%27 height=%2724%27 viewBox=%270 0 24 24%27 width=%2724%27 xmlns=%27http://www.w3.org/2000/svg%27><path d=%27M7 10l5 5 5-5z%27/><path d=%27M0 0h24v24H0z%27 fill=%27none%27/></svg>";\n\n//# sourceURL=webpack://Contact/data:image/svg+xml;utf8,%3Csvg_fill=%2527black%2527_height=%252724%2527_viewBox=%25270_0_24_24%2527_width=%252724%2527_xmlns=%2527http://www.w3.org/2000/svg%2527%3E%3Cpath_d=%2527M7_10l5_5_5-5z%2527/%3E%3Cpath_d=%2527M0_0h24v24H0z%2527_fill=%2527none%2527/%3E%3C/svg%3E?'
        );

        /***/
      },

    /***/ './node_modules/workbox-window/build/workbox-window.prod.es5.mjs':
      /*!***********************************************************************!*\
  !*** ./node_modules/workbox-window/build/workbox-window.prod.es5.mjs ***!
  \***********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Workbox": () => (/* binding */ v),\n/* harmony export */   "WorkboxEvent": () => (/* binding */ u),\n/* harmony export */   "messageSW": () => (/* binding */ n)\n/* harmony export */ });\ntry{self["workbox:window:6.5.3"]&&_()}catch(n){}function n(n,t){return new Promise((function(r){var e=new MessageChannel;e.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[e.port2])}))}function t(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function e(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var i=0;return function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(e=n[Symbol.iterator]()).next.bind(e)}try{self["workbox:core:6.5.3"]&&_()}catch(n){}var i=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};function o(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var u=function(n,t){this.type=n,Object.assign(this,t)};function a(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function c(){}var f={type:"SKIP_WAITING"};function s(n,t){if(!t)return n&&n.then?n.then(c):Promise.resolve()}var v=function(r){var e,c;function v(n,t){var e,c;return void 0===t&&(t={}),(e=r.call(this)||this).nn={},e.tn=0,e.rn=new i,e.en=new i,e.on=new i,e.un=0,e.an=new Set,e.cn=function(){var n=e.fn,t=n.installing;e.tn>0||!o(t.scriptURL,e.sn.toString())||performance.now()>e.un+6e4?(e.vn=t,n.removeEventListener("updatefound",e.cn)):(e.hn=t,e.an.add(t),e.rn.resolve(t)),++e.tn,t.addEventListener("statechange",e.ln)},e.ln=function(n){var t=e.fn,r=n.target,i=r.state,o=r===e.vn,a={sw:r,isExternal:o,originalEvent:n};!o&&e.mn&&(a.isUpdate=!0),e.dispatchEvent(new u(i,a)),"installed"===i?e.wn=self.setTimeout((function(){"installed"===i&&t.waiting===r&&e.dispatchEvent(new u("waiting",a))}),200):"activating"===i&&(clearTimeout(e.wn),o||e.en.resolve(r))},e.dn=function(n){var t=e.hn,r=t!==navigator.serviceWorker.controller;e.dispatchEvent(new u("controlling",{isExternal:r,originalEvent:n,sw:t,isUpdate:e.mn})),r||e.on.resolve(t)},e.gn=(c=function(n){var t=n.data,r=n.ports,i=n.source;return a(e.getSW(),(function(){e.an.has(i)&&e.dispatchEvent(new u("message",{data:t,originalEvent:n,ports:r,sw:i}))}))},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(c.apply(this,n))}catch(n){return Promise.reject(n)}}),e.sn=n,e.nn=t,navigator.serviceWorker.addEventListener("message",e.gn),e}c=r,(e=v).prototype=Object.create(c.prototype),e.prototype.constructor=e,e.__proto__=c;var h,l,m,w=v.prototype;return w.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var e=this;return function(n,t){var r=n();if(r&&r.then)return r.then(t);return t(r)}((function(){if(!r&&"complete"!==document.readyState)return s(new Promise((function(n){return window.addEventListener("load",n)})))}),(function(){return e.mn=Boolean(navigator.serviceWorker.controller),e.yn=e.pn(),a(e.bn(),(function(n){e.fn=n,e.yn&&(e.hn=e.yn,e.en.resolve(e.yn),e.on.resolve(e.yn),e.yn.addEventListener("statechange",e.ln,{once:!0}));var t=e.fn.waiting;return t&&o(t.scriptURL,e.sn.toString())&&(e.hn=t,Promise.resolve().then((function(){e.dispatchEvent(new u("waiting",{sw:t,wasWaitingBeforeRegister:!0}))})).then((function(){}))),e.hn&&(e.rn.resolve(e.hn),e.an.add(e.hn)),e.fn.addEventListener("updatefound",e.cn),navigator.serviceWorker.addEventListener("controllerchange",e.dn),e.fn}))}))}catch(n){return Promise.reject(n)}},w.update=function(){try{return this.fn?s(this.fn.update()):void 0}catch(n){return Promise.reject(n)}},w.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},w.messageSW=function(t){try{return a(this.getSW(),(function(r){return n(r,t)}))}catch(n){return Promise.reject(n)}},w.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&n(this.fn.waiting,f)},w.pn=function(){var n=navigator.serviceWorker.controller;return n&&o(n.scriptURL,this.sn.toString())?n:void 0},w.bn=function(){try{var n=this;return function(n,t){try{var r=n()}catch(n){return t(n)}if(r&&r.then)return r.then(void 0,t);return r}((function(){return a(navigator.serviceWorker.register(n.sn,n.nn),(function(t){return n.un=performance.now(),t}))}),(function(n){throw n}))}catch(n){return Promise.reject(n)}},h=v,(l=[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}])&&t(h.prototype,l),m&&t(h,m),v}(function(){function n(){this.Pn=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this.Sn(n).add(t)},t.removeEventListener=function(n,t){this.Sn(n).delete(t)},t.dispatchEvent=function(n){n.target=this;for(var t,r=e(this.Sn(n.type));!(t=r()).done;){(0,t.value)(n)}},t.Sn=function(n){return this.Pn.has(n)||this.Pn.set(n,new Set),this.Pn.get(n)},n}());\n//# sourceMappingURL=workbox-window.prod.es5.mjs.map\n\n\n//# sourceURL=webpack://Contact/./node_modules/workbox-window/build/workbox-window.prod.es5.mjs?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__('./src/js/index.js');
  /******/
  /******/
})();

(() => {
  var n = {
      402: (n, t, e) => {
        'use strict';
        e.d(t, { Z: () => c });
        var r = e(81),
          o = e.n(r),
          i = e(645),
          a = e.n(i)()(o());
        a.push([
          n.id,
          "/* app shell CSS */\n:root {\n  --primary: #31a9e1;\n  --gray: #ececec;\n  --whitesmoke: #f5f5f5;\n  --dark: #222;\n  --monoaki: #272822;\n  --navbar-height: 50px;\n}\n\nbody {\n  margin: 0;\n  background-color: var(--monoaki);\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n}\n\nh1 {\n  font-size: 22px;\n}\n\n#navbar {\n  height: var(--navbar-height);\n  background-color: var(--primary);\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  color: white;\n  font-size: 22px;\n  font-weight: 550;\n  letter-spacing: 0.9px;\n}\n\n.navbar-brand img {\n  padding-top: 10px;\n}\n\n.loading-spinner {\n  animation-duration: 0.75s;\n  animation-iteration-count: infinite;\n  animation-name: rotate-forever;\n  animation-timing-function: linear;\n  height: 30px;\n  width: 30px;\n  border: 3px solid var(--primary);\n  border-right-color: transparent;\n  border-radius: 50%;\n}\n\n.loading-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: calc(100vh - var(--navbar-height));\n}\n\n@keyframes rotate-forever {\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.app-update {\n  display: none;\n  position: absolute;\n  right: 10px;\n}\n\n.app-update.show {\n  display: block;\n}\n\n.nav-btn {\n  margin: 25px;\n}\n\n.btn {\n  text-align: center;\n  display: inline-block;\n  padding: 0.5rem 1.2rem;\n  margin: 0;\n  text-decoration: none;\n  font-size: 1rem;\n  border-radius: 0.3rem;\n  border: 1px solid transparent;\n  outline: none;\n  color: #1a1a1a;\n  background-color: #aeaeae;\n  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;\n}\n\n.btn:hover {\n  background-color: #cecece;\n  cursor: pointer;\n}\n\n.btn.btn-squared {\n  border-radius: 0;\n}\n\n.btn.btn-sm {\n  font-size: 0.85rem;\n  padding: 0.3rem 0.9rem;\n}\n\n.btn.btn-lg {\n  font-size: 1.25rem;\n  padding: 0.8rem 1.4rem;\n}\n\n.btn.btn-block {\n  width: 100%;\n  display: block;\n  text-align: center;\n}\n\n.btn.btn-primary {\n  background-color: #2d3e50;\n  color: #d9e9e8;\n}\n\n.btn.btn-primary:hover {\n  background-color: #57779a;\n}\n\n.btn.btn-danger {\n  background-color: #e64c66;\n  color: #ffffff;\n}\n\n.btn.btn-danger:hover {\n  background-color: #ee8294;\n}\n\n.btn.btn-info {\n  background-color: #1bbc9b;\n  color: #ffffff;\n}\n\n.btn.btn-info:hover {\n  background-color: #31e1bd;\n}\n\n.btn.btn-light {\n  background-color: #d9e9e8;\n  color: #1a1a1a;\n}\n\n.btn.btn-light:hover {\n  background-color: #84b8b4;\n}\n\n.btn.btn-dark {\n  background-color: #1a1a1a;\n  color: #d9e9e8;\n}\n\n.btn.btn-dark:hover {\n  background-color: #5f5f5f;\n}\n\n.btn.btn-white {\n  background-color: #ffffff;\n  color: #1a1a1a;\n}\n\n.btn.btn-white:hover {\n  background-color: #cccccc;\n}\n\n.btn.btn-black {\n  background-color: #000000;\n  color: #ffffff;\n}\n\n.btn.btn-black:hover {\n  background-color: #666666;\n}\n\n.btn.btn-link {\n  background-color: #1b89bc;\n  color: #ffffff;\n}\n\n.btn.btn-link:hover {\n  background-color: #31a9e1;\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-btn {\n    display: none;\n  }\n\n  .navbar-brand {\n    display: none;\n  }\n\n  #navbar {\n    justify-content: center;\n  }\n\n  h1 {\n    font-size: 18px;\n  }\n}\n",
          '',
        ]);
        const c = a;
      },
      645: (n) => {
        'use strict';
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = '',
                  r = void 0 !== t[5];
                return (
                  t[4] && (e += '@supports ('.concat(t[4], ') {')),
                  t[2] && (e += '@media '.concat(t[2], ' {')),
                  r &&
                    (e += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (e += n(t)),
                  r && (e += '}'),
                  t[2] && (e += '}'),
                  t[4] && (e += '}'),
                  e
                );
              }).join('');
            }),
            (t.i = function (n, e, r, o, i) {
              'string' == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (a[s] = !0);
                }
              for (var u = 0; u < n.length; u++) {
                var l = [].concat(n[u]);
                (r && a[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] ||
                      (l[1] = '@layer'
                        .concat(l[5].length > 0 ? ' '.concat(l[5]) : '', ' {')
                        .concat(l[1], '}')),
                    (l[5] = i)),
                  e &&
                    (l[2]
                      ? ((l[1] = '@media '
                          .concat(l[2], ' {')
                          .concat(l[1], '}')),
                        (l[2] = e))
                      : (l[2] = e)),
                  o &&
                    (l[4]
                      ? ((l[1] = '@supports ('
                          .concat(l[4], ') {')
                          .concat(l[1], '}')),
                        (l[4] = o))
                      : (l[4] = ''.concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      81: (n) => {
        'use strict';
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        'use strict';
        var t = [];
        function e(n) {
          for (var e = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === n) {
              e = r;
              break;
            }
          return e;
        }
        function r(n, r) {
          for (var i = {}, a = [], c = 0; c < n.length; c++) {
            var s = n[c],
              u = r.base ? s[0] + r.base : s[0],
              l = i[u] || 0,
              f = ''.concat(u, ' ').concat(l);
            i[u] = l + 1;
            var d = e(f),
              p = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(p);
            else {
              var h = o(p, r);
              (r.byIndex = c),
                t.splice(c, 0, { identifier: f, updater: h, references: 1 });
            }
            a.push(f);
          }
          return a;
        }
        function o(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var c = e(i[a]);
              t[c].references--;
            }
            for (var s = r(n, o), u = 0; u < i.length; u++) {
              var l = e(i[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            i = s;
          };
        };
      },
      569: (n) => {
        'use strict';
        var t = {};
        n.exports = function (n, e) {
          var r = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(e);
        };
      },
      216: (n) => {
        'use strict';
        n.exports = function (n) {
          var t = document.createElement('style');
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      565: (n, t, e) => {
        'use strict';
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute('nonce', t);
        };
      },
      795: (n) => {
        'use strict';
        n.exports = function (n) {
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var r = '';
                e.supports && (r += '@supports ('.concat(e.supports, ') {')),
                  e.media && (r += '@media '.concat(e.media, ' {'));
                var o = void 0 !== e.layer;
                o &&
                  (r += '@layer'.concat(
                    e.layer.length > 0 ? ' '.concat(e.layer) : '',
                    ' {'
                  )),
                  (r += e.css),
                  o && (r += '}'),
                  e.media && (r += '}'),
                  e.supports && (r += '}');
                var i = e.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (r +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */'
                    )),
                  t.styleTagTransform(r, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
      589: (n) => {
        'use strict';
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
      61: (n, t, e) => {
        var r = e(698).default;
        function o() {
          'use strict';
          (n.exports = o =
            function () {
              return t;
            }),
            (n.exports.__esModule = !0),
            (n.exports.default = n.exports);
          var t = {},
            e = Object.prototype,
            i = e.hasOwnProperty,
            a = 'function' == typeof Symbol ? Symbol : {},
            c = a.iterator || '@@iterator',
            s = a.asyncIterator || '@@asyncIterator',
            u = a.toStringTag || '@@toStringTag';
          function l(n, t, e) {
            return (
              Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              n[t]
            );
          }
          try {
            l({}, '');
          } catch (n) {
            l = function (n, t, e) {
              return (n[t] = e);
            };
          }
          function f(n, t, e, r) {
            var o = t && t.prototype instanceof h ? t : h,
              i = Object.create(o.prototype),
              a = new L(r || []);
            return (
              (i._invoke = (function (n, t, e) {
                var r = 'suspendedStart';
                return function (o, i) {
                  if ('executing' === r)
                    throw new Error('Generator is already running');
                  if ('completed' === r) {
                    if ('throw' === o) throw i;
                    return { value: void 0, done: !0 };
                  }
                  for (e.method = o, e.arg = i; ; ) {
                    var a = e.delegate;
                    if (a) {
                      var c = k(a, e);
                      if (c) {
                        if (c === p) continue;
                        return c;
                      }
                    }
                    if ('next' === e.method) e.sent = e._sent = e.arg;
                    else if ('throw' === e.method) {
                      if ('suspendedStart' === r)
                        throw ((r = 'completed'), e.arg);
                      e.dispatchException(e.arg);
                    } else 'return' === e.method && e.abrupt('return', e.arg);
                    r = 'executing';
                    var s = d(n, t, e);
                    if ('normal' === s.type) {
                      if (
                        ((r = e.done ? 'completed' : 'suspendedYield'),
                        s.arg === p)
                      )
                        continue;
                      return { value: s.arg, done: e.done };
                    }
                    'throw' === s.type &&
                      ((r = 'completed'),
                      (e.method = 'throw'),
                      (e.arg = s.arg));
                  }
                };
              })(n, e, a)),
              i
            );
          }
          function d(n, t, e) {
            try {
              return { type: 'normal', arg: n.call(t, e) };
            } catch (n) {
              return { type: 'throw', arg: n };
            }
          }
          t.wrap = f;
          var p = {};
          function h() {}
          function v() {}
          function g() {}
          var m = {};
          l(m, c, function () {
            return this;
          });
          var y = Object.getPrototypeOf,
            b = y && y(y(j([])));
          b && b !== e && i.call(b, c) && (m = b);
          var w = (g.prototype = h.prototype = Object.create(m));
          function x(n) {
            ['next', 'throw', 'return'].forEach(function (t) {
              l(n, t, function (n) {
                return this._invoke(t, n);
              });
            });
          }
          function _(n, t) {
            function e(o, a, c, s) {
              var u = d(n[o], n, a);
              if ('throw' !== u.type) {
                var l = u.arg,
                  f = l.value;
                return f && 'object' == r(f) && i.call(f, '__await')
                  ? t.resolve(f.__await).then(
                      function (n) {
                        e('next', n, c, s);
                      },
                      function (n) {
                        e('throw', n, c, s);
                      }
                    )
                  : t.resolve(f).then(
                      function (n) {
                        (l.value = n), c(l);
                      },
                      function (n) {
                        return e('throw', n, c, s);
                      }
                    );
              }
              s(u.arg);
            }
            var o;
            this._invoke = function (n, r) {
              function i() {
                return new t(function (t, o) {
                  e(n, r, t, o);
                });
              }
              return (o = o ? o.then(i, i) : i());
            };
          }
          function k(n, t) {
            var e = n.iterator[t.method];
            if (void 0 === e) {
              if (((t.delegate = null), 'throw' === t.method)) {
                if (
                  n.iterator.return &&
                  ((t.method = 'return'),
                  (t.arg = void 0),
                  k(n, t),
                  'throw' === t.method)
                )
                  return p;
                (t.method = 'throw'),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return p;
            }
            var r = d(e, n.iterator, t.arg);
            if ('throw' === r.type)
              return (
                (t.method = 'throw'), (t.arg = r.arg), (t.delegate = null), p
              );
            var o = r.arg;
            return o
              ? o.done
                ? ((t[n.resultName] = o.value),
                  (t.next = n.nextLoc),
                  'return' !== t.method &&
                    ((t.method = 'next'), (t.arg = void 0)),
                  (t.delegate = null),
                  p)
                : o
              : ((t.method = 'throw'),
                (t.arg = new TypeError('iterator result is not an object')),
                (t.delegate = null),
                p);
          }
          function E(n) {
            var t = { tryLoc: n[0] };
            1 in n && (t.catchLoc = n[1]),
              2 in n && ((t.finallyLoc = n[2]), (t.afterLoc = n[3])),
              this.tryEntries.push(t);
          }
          function S(n) {
            var t = n.completion || {};
            (t.type = 'normal'), delete t.arg, (n.completion = t);
          }
          function L(n) {
            (this.tryEntries = [{ tryLoc: 'root' }]),
              n.forEach(E, this),
              this.reset(!0);
          }
          function j(n) {
            if (n) {
              var t = n[c];
              if (t) return t.call(n);
              if ('function' == typeof n.next) return n;
              if (!isNaN(n.length)) {
                var e = -1,
                  r = function t() {
                    for (; ++e < n.length; )
                      if (i.call(n, e))
                        return (t.value = n[e]), (t.done = !1), t;
                    return (t.value = void 0), (t.done = !0), t;
                  };
                return (r.next = r);
              }
            }
            return { next: I };
          }
          function I() {
            return { value: void 0, done: !0 };
          }
          return (
            (v.prototype = g),
            l(w, 'constructor', g),
            l(g, 'constructor', v),
            (v.displayName = l(g, u, 'GeneratorFunction')),
            (t.isGeneratorFunction = function (n) {
              var t = 'function' == typeof n && n.constructor;
              return (
                !!t &&
                (t === v || 'GeneratorFunction' === (t.displayName || t.name))
              );
            }),
            (t.mark = function (n) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(n, g)
                  : ((n.__proto__ = g), l(n, u, 'GeneratorFunction')),
                (n.prototype = Object.create(w)),
                n
              );
            }),
            (t.awrap = function (n) {
              return { __await: n };
            }),
            x(_.prototype),
            l(_.prototype, s, function () {
              return this;
            }),
            (t.AsyncIterator = _),
            (t.async = function (n, e, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new _(f(n, e, r, o), i);
              return t.isGeneratorFunction(e)
                ? a
                : a.next().then(function (n) {
                    return n.done ? n.value : a.next();
                  });
            }),
            x(w),
            l(w, u, 'Generator'),
            l(w, c, function () {
              return this;
            }),
            l(w, 'toString', function () {
              return '[object Generator]';
            }),
            (t.keys = function (n) {
              var t = [];
              for (var e in n) t.push(e);
              return (
                t.reverse(),
                function e() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in n) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (t.values = j),
            (L.prototype = {
              constructor: L,
              reset: function (n) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = void 0),
                  this.tryEntries.forEach(S),
                  !n)
                )
                  for (var t in this)
                    't' === t.charAt(0) &&
                      i.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = void 0);
              },
              stop: function () {
                this.done = !0;
                var n = this.tryEntries[0].completion;
                if ('throw' === n.type) throw n.arg;
                return this.rval;
              },
              dispatchException: function (n) {
                if (this.done) throw n;
                var t = this;
                function e(e, r) {
                  return (
                    (a.type = 'throw'),
                    (a.arg = n),
                    (t.next = e),
                    r && ((t.method = 'next'), (t.arg = void 0)),
                    !!r
                  );
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r],
                    a = o.completion;
                  if ('root' === o.tryLoc) return e('end');
                  if (o.tryLoc <= this.prev) {
                    var c = i.call(o, 'catchLoc'),
                      s = i.call(o, 'finallyLoc');
                    if (c && s) {
                      if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                    } else if (c) {
                      if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          'try statement without catch or finally'
                        );
                      if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (n, t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (
                    r.tryLoc <= this.prev &&
                    i.call(r, 'finallyLoc') &&
                    this.prev < r.finallyLoc
                  ) {
                    var o = r;
                    break;
                  }
                }
                o &&
                  ('break' === n || 'continue' === n) &&
                  o.tryLoc <= t &&
                  t <= o.finallyLoc &&
                  (o = null);
                var a = o ? o.completion : {};
                return (
                  (a.type = n),
                  (a.arg = t),
                  o
                    ? ((this.method = 'next'), (this.next = o.finallyLoc), p)
                    : this.complete(a)
                );
              },
              complete: function (n, t) {
                if ('throw' === n.type) throw n.arg;
                return (
                  'break' === n.type || 'continue' === n.type
                    ? (this.next = n.arg)
                    : 'return' === n.type
                    ? ((this.rval = this.arg = n.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === n.type && t && (this.next = t),
                  p
                );
              },
              finish: function (n) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var e = this.tryEntries[t];
                  if (e.finallyLoc === n)
                    return this.complete(e.completion, e.afterLoc), S(e), p;
                }
              },
              catch: function (n) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var e = this.tryEntries[t];
                  if (e.tryLoc === n) {
                    var r = e.completion;
                    if ('throw' === r.type) {
                      var o = r.arg;
                      S(e);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (n, t, e) {
                return (
                  (this.delegate = {
                    iterator: j(n),
                    resultName: t,
                    nextLoc: e,
                  }),
                  'next' === this.method && (this.arg = void 0),
                  p
                );
              },
            }),
            t
          );
        }
        (n.exports = o),
          (n.exports.__esModule = !0),
          (n.exports.default = n.exports);
      },
      698: (n) => {
        function t(e) {
          return (
            (n.exports = t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      'function' == typeof Symbol &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? 'symbol'
                      : typeof n;
                  }),
            (n.exports.__esModule = !0),
            (n.exports.default = n.exports),
            t(e)
          );
        }
        (n.exports = t),
          (n.exports.__esModule = !0),
          (n.exports.default = n.exports);
      },
      687: (n, t, e) => {
        var r = e(61)();
        n.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (n) {
          'object' == typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function('r', 'regeneratorRuntime = r')(r);
        }
      },
    },
    t = {};
  function e(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return n[r](i, i.exports, e), i.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var r in t)
        e.o(t, r) &&
          !e.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0),
    (() => {
      'use strict';
      try {
        self['workbox:window:6.5.3'] && _();
      } catch (n) {}
      function n(n, t) {
        return new Promise(function (e) {
          var r = new MessageChannel();
          (r.port1.onmessage = function (n) {
            e(n.data);
          }),
            n.postMessage(t, [r.port2]);
        });
      }
      function t(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var e = 0, r = new Array(t); e < t; e++) r[e] = n[e];
        return r;
      }
      function r(n, e) {
        var r;
        if ('undefined' == typeof Symbol || null == n[Symbol.iterator]) {
          if (
            Array.isArray(n) ||
            (r = (function (n, e) {
              if (n) {
                if ('string' == typeof n) return t(n, e);
                var r = Object.prototype.toString.call(n).slice(8, -1);
                return (
                  'Object' === r && n.constructor && (r = n.constructor.name),
                  'Map' === r || 'Set' === r
                    ? Array.from(n)
                    : 'Arguments' === r ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                    ? t(n, e)
                    : void 0
                );
              }
            })(n)) ||
            (e && n && 'number' == typeof n.length)
          ) {
            r && (n = r);
            var o = 0;
            return function () {
              return o >= n.length ? { done: !0 } : { done: !1, value: n[o++] };
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
          );
        }
        return (r = n[Symbol.iterator]()).next.bind(r);
      }
      try {
        self['workbox:core:6.5.3'] && _();
      } catch (n) {}
      var o = function () {
        var n = this;
        this.promise = new Promise(function (t, e) {
          (n.resolve = t), (n.reject = e);
        });
      };
      function i(n, t) {
        var e = location.href;
        return new URL(n, e).href === new URL(t, e).href;
      }
      var a = function (n, t) {
        (this.type = n), Object.assign(this, t);
      };
      function c(n, t, e) {
        return e
          ? t
            ? t(n)
            : n
          : ((n && n.then) || (n = Promise.resolve(n)), t ? n.then(t) : n);
      }
      function s() {}
      var u = { type: 'SKIP_WAITING' };
      function l(n, t) {
        if (!t) return n && n.then ? n.then(s) : Promise.resolve();
      }
      var f = (function (t) {
        var e, r;
        function s(n, e) {
          var r, s;
          return (
            void 0 === e && (e = {}),
            ((r = t.call(this) || this).nn = {}),
            (r.tn = 0),
            (r.rn = new o()),
            (r.en = new o()),
            (r.on = new o()),
            (r.un = 0),
            (r.an = new Set()),
            (r.cn = function () {
              var n = r.fn,
                t = n.installing;
              r.tn > 0 ||
              !i(t.scriptURL, r.sn.toString()) ||
              performance.now() > r.un + 6e4
                ? ((r.vn = t), n.removeEventListener('updatefound', r.cn))
                : ((r.hn = t), r.an.add(t), r.rn.resolve(t)),
                ++r.tn,
                t.addEventListener('statechange', r.ln);
            }),
            (r.ln = function (n) {
              var t = r.fn,
                e = n.target,
                o = e.state,
                i = e === r.vn,
                c = { sw: e, isExternal: i, originalEvent: n };
              !i && r.mn && (c.isUpdate = !0),
                r.dispatchEvent(new a(o, c)),
                'installed' === o
                  ? (r.wn = self.setTimeout(function () {
                      'installed' === o &&
                        t.waiting === e &&
                        r.dispatchEvent(new a('waiting', c));
                    }, 200))
                  : 'activating' === o &&
                    (clearTimeout(r.wn), i || r.en.resolve(e));
            }),
            (r.dn = function (n) {
              var t = r.hn,
                e = t !== navigator.serviceWorker.controller;
              r.dispatchEvent(
                new a('controlling', {
                  isExternal: e,
                  originalEvent: n,
                  sw: t,
                  isUpdate: r.mn,
                })
              ),
                e || r.on.resolve(t);
            }),
            (r.gn =
              ((s = function (n) {
                var t = n.data,
                  e = n.ports,
                  o = n.source;
                return c(r.getSW(), function () {
                  r.an.has(o) &&
                    r.dispatchEvent(
                      new a('message', {
                        data: t,
                        originalEvent: n,
                        ports: e,
                        sw: o,
                      })
                    );
                });
              }),
              function () {
                for (var n = [], t = 0; t < arguments.length; t++)
                  n[t] = arguments[t];
                try {
                  return Promise.resolve(s.apply(this, n));
                } catch (n) {
                  return Promise.reject(n);
                }
              })),
            (r.sn = n),
            (r.nn = e),
            navigator.serviceWorker.addEventListener('message', r.gn),
            r
          );
        }
        (r = t),
          ((e = s).prototype = Object.create(r.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = r);
        var f,
          d = s.prototype;
        return (
          (d.register = function (n) {
            var t = (void 0 === n ? {} : n).immediate,
              e = void 0 !== t && t;
            try {
              var r = this;
              return (function (n, t) {
                var e = n();
                return e && e.then ? e.then(t) : t();
              })(
                function () {
                  if (!e && 'complete' !== document.readyState)
                    return l(
                      new Promise(function (n) {
                        return window.addEventListener('load', n);
                      })
                    );
                },
                function () {
                  return (
                    (r.mn = Boolean(navigator.serviceWorker.controller)),
                    (r.yn = r.pn()),
                    c(r.bn(), function (n) {
                      (r.fn = n),
                        r.yn &&
                          ((r.hn = r.yn),
                          r.en.resolve(r.yn),
                          r.on.resolve(r.yn),
                          r.yn.addEventListener('statechange', r.ln, {
                            once: !0,
                          }));
                      var t = r.fn.waiting;
                      return (
                        t &&
                          i(t.scriptURL, r.sn.toString()) &&
                          ((r.hn = t),
                          Promise.resolve()
                            .then(function () {
                              r.dispatchEvent(
                                new a('waiting', {
                                  sw: t,
                                  wasWaitingBeforeRegister: !0,
                                })
                              );
                            })
                            .then(function () {})),
                        r.hn && (r.rn.resolve(r.hn), r.an.add(r.hn)),
                        r.fn.addEventListener('updatefound', r.cn),
                        navigator.serviceWorker.addEventListener(
                          'controllerchange',
                          r.dn
                        ),
                        r.fn
                      );
                    })
                  );
                }
              );
            } catch (n) {
              return Promise.reject(n);
            }
          }),
          (d.update = function () {
            try {
              return this.fn ? l(this.fn.update()) : void 0;
            } catch (n) {
              return Promise.reject(n);
            }
          }),
          (d.getSW = function () {
            return void 0 !== this.hn
              ? Promise.resolve(this.hn)
              : this.rn.promise;
          }),
          (d.messageSW = function (t) {
            try {
              return c(this.getSW(), function (e) {
                return n(e, t);
              });
            } catch (n) {
              return Promise.reject(n);
            }
          }),
          (d.messageSkipWaiting = function () {
            this.fn && this.fn.waiting && n(this.fn.waiting, u);
          }),
          (d.pn = function () {
            var n = navigator.serviceWorker.controller;
            return n && i(n.scriptURL, this.sn.toString()) ? n : void 0;
          }),
          (d.bn = function () {
            try {
              var n = this;
              return (function (n, t) {
                try {
                  var e = n();
                } catch (n) {
                  return t(n);
                }
                return e && e.then ? e.then(void 0, t) : e;
              })(
                function () {
                  return c(
                    navigator.serviceWorker.register(n.sn, n.nn),
                    function (t) {
                      return (n.un = performance.now()), t;
                    }
                  );
                },
                function (n) {
                  throw n;
                }
              );
            } catch (n) {
              return Promise.reject(n);
            }
          }),
          (f = [
            {
              key: 'active',
              get: function () {
                return this.en.promise;
              },
            },
            {
              key: 'controlling',
              get: function () {
                return this.on.promise;
              },
            },
          ]) &&
            (function (n, t) {
              for (var e = 0; e < t.length; e++) {
                var r = t[e];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  'value' in r && (r.writable = !0),
                  Object.defineProperty(n, r.key, r);
              }
            })(s.prototype, f),
          s
        );
      })(
        (function () {
          function n() {
            this.Pn = new Map();
          }
          var t = n.prototype;
          return (
            (t.addEventListener = function (n, t) {
              this.Sn(n).add(t);
            }),
            (t.removeEventListener = function (n, t) {
              this.Sn(n).delete(t);
            }),
            (t.dispatchEvent = function (n) {
              n.target = this;
              for (var t, e = r(this.Sn(n.type)); !(t = e()).done; )
                (0, t.value)(n);
            }),
            (t.Sn = function (n) {
              return (
                this.Pn.has(n) || this.Pn.set(n, new Set()), this.Pn.get(n)
              );
            }),
            n
          );
        })()
      );
      function d(n, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      function p(n, t, e) {
        return (
          t && d(n.prototype, t),
          e && d(n, e),
          Object.defineProperty(n, 'prototype', { writable: !1 }),
          n
        );
      }
      function h(n, t, e, r, o, i, a) {
        try {
          var c = n[i](a),
            s = c.value;
        } catch (n) {
          return void e(n);
        }
        c.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function v(n) {
        return function () {
          var t = this,
            e = arguments;
          return new Promise(function (r, o) {
            var i = n.apply(t, e);
            function a(n) {
              h(i, r, o, a, c, 'next', n);
            }
            function c(n) {
              h(i, r, o, a, c, 'throw', n);
            }
            a(void 0);
          });
        };
      }
      var g = e(687),
        m = e.n(g);
      let y, b;
      const w = new WeakMap(),
        x = new WeakMap(),
        k = new WeakMap(),
        E = new WeakMap(),
        S = new WeakMap();
      let L = {
        get(n, t, e) {
          if (n instanceof IDBTransaction) {
            if ('done' === t) return x.get(n);
            if ('objectStoreNames' === t) return n.objectStoreNames || k.get(n);
            if ('store' === t)
              return e.objectStoreNames[1]
                ? void 0
                : e.objectStore(e.objectStoreNames[0]);
          }
          return I(n[t]);
        },
        set: (n, t, e) => ((n[t] = e), !0),
        has: (n, t) =>
          (n instanceof IDBTransaction && ('done' === t || 'store' === t)) ||
          t in n,
      };
      function j(n) {
        return 'function' == typeof n
          ? (t = n) !== IDBDatabase.prototype.transaction ||
            'objectStoreNames' in IDBTransaction.prototype
            ? (
                b ||
                (b = [
                  IDBCursor.prototype.advance,
                  IDBCursor.prototype.continue,
                  IDBCursor.prototype.continuePrimaryKey,
                ])
              ).includes(t)
              ? function (...n) {
                  return t.apply(P(this), n), I(w.get(this));
                }
              : function (...n) {
                  return I(t.apply(P(this), n));
                }
            : function (n, ...e) {
                const r = t.call(P(this), n, ...e);
                return k.set(r, n.sort ? n.sort() : [n]), I(r);
              }
          : (n instanceof IDBTransaction &&
              (function (n) {
                if (x.has(n)) return;
                const t = new Promise((t, e) => {
                  const r = () => {
                      n.removeEventListener('complete', o),
                        n.removeEventListener('error', i),
                        n.removeEventListener('abort', i);
                    },
                    o = () => {
                      t(), r();
                    },
                    i = () => {
                      e(
                        n.error || new DOMException('AbortError', 'AbortError')
                      ),
                        r();
                    };
                  n.addEventListener('complete', o),
                    n.addEventListener('error', i),
                    n.addEventListener('abort', i);
                });
                x.set(n, t);
              })(n),
            (e = n),
            (
              y ||
              (y = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ])
            ).some((n) => e instanceof n)
              ? new Proxy(n, L)
              : n);
        var t, e;
      }
      function I(n) {
        if (n instanceof IDBRequest)
          return (function (n) {
            const t = new Promise((t, e) => {
              const r = () => {
                  n.removeEventListener('success', o),
                    n.removeEventListener('error', i);
                },
                o = () => {
                  t(I(n.result)), r();
                },
                i = () => {
                  e(n.error), r();
                };
              n.addEventListener('success', o), n.addEventListener('error', i);
            });
            return (
              t
                .then((t) => {
                  t instanceof IDBCursor && w.set(t, n);
                })
                .catch(() => {}),
              S.set(t, n),
              t
            );
          })(n);
        if (E.has(n)) return E.get(n);
        const t = j(n);
        return t !== n && (E.set(n, t), S.set(t, n)), t;
      }
      const P = (n) => S.get(n);
      function M(
        n,
        t,
        { blocked: e, upgrade: r, blocking: o, terminated: i } = {}
      ) {
        const a = indexedDB.open(n, t),
          c = I(a);
        return (
          r &&
            a.addEventListener('upgradeneeded', (n) => {
              r(I(a.result), n.oldVersion, n.newVersion, I(a.transaction));
            }),
          e && a.addEventListener('blocked', () => e()),
          c
            .then((n) => {
              i && n.addEventListener('close', () => i()),
                o && n.addEventListener('versionchange', () => o());
            })
            .catch(() => {}),
          c
        );
      }
      const T = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
        D = ['put', 'add', 'delete', 'clear'],
        O = new Map();
      function B(n, t) {
        if (!(n instanceof IDBDatabase) || t in n || 'string' != typeof t)
          return;
        if (O.get(t)) return O.get(t);
        const e = t.replace(/FromIndex$/, ''),
          r = t !== e,
          o = D.includes(e);
        if (
          !(e in (r ? IDBIndex : IDBObjectStore).prototype) ||
          (!o && !T.includes(e))
        )
          return;
        const i = async function (n, ...t) {
          const i = this.transaction(n, o ? 'readwrite' : 'readonly');
          let a = i.store;
          return (
            r && (a = a.index(t.shift())),
            (await Promise.all([a[e](...t), o && i.done]))[0]
          );
        };
        return O.set(t, i), i;
      }
      var C;
      (C = L),
        (L = {
          ...C,
          get: (n, t, e) => B(n, t) || C.get(n, t, e),
          has: (n, t) => !!B(n, t) || C.has(n, t),
        });
      var N = (function () {
          var n = v(
            m().mark(function n() {
              return m().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return n.abrupt(
                        'return',
                        M('jate', 1, {
                          upgrade: function (n) {
                            n.objectStoreNames.contains('jate');
                          },
                        })
                      );
                    case 1:
                    case 'end':
                      return n.stop();
                  }
              }, n);
            })
          );
          return function () {
            return n.apply(this, arguments);
          };
        })(),
        W = (function () {
          var n = v(
            m().mark(function n(t) {
              return m().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:

                    case 1:
                    case 'end':
                      return n.stop();
                  }
              }, n);
            })
          );
          return function (t) {
            return n.apply(this, arguments);
          };
        })(),
        A = (function () {
          var n = v(
            m().mark(function n() {
              return m().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                    case 1:
                    case 'end':
                      return n.stop();
                  }
              }, n);
            })
          );
          return function () {
            return n.apply(this, arguments);
          };
        })();
      N();
      var R = p(function n() {
          var t = this;
          !(function (n, t) {
            if (!(n instanceof t))
              throw new TypeError('Cannot call a class as a function');
          })(this, n);
          var e = localStorage.getItem('content');
          if ('undefined' == typeof CodeMirror)
            throw new Error('CodeMirror is not loaded');
          (this.editor = CodeMirror(document.querySelector('#main'), {
            value: '',
            mode: 'javascript',
            theme: 'monokai',
            lineNumbers: !0,
            lineWrapping: !0,
            autofocus: !0,
            indentUnit: 2,
            tabSize: 2,
          })),
            A().then(function (n) {
              console.info('Loaded data from IndexedDB, injecting into editor'),
                t.editor.setValue(
                  n ||
                    e ||
                    '\n/*\n       _____  ____________\n      / /   |/_  __/ ____/\n __  / / /| | / / / __/   \n/ /_/ / ___ |/ / / /___   \n ____/_/  |_/_/ /_____/   \njust another text editor\n*/                          \n'
                );
            }),
            this.editor.on('change', function () {
              localStorage.setItem('content', t.editor.getValue());
            }),
            this.editor.on('blur', function () {
              W(localStorage.getItem('content'));
            });
        }),
        U = e(379),
        F = e.n(U),
        G = e(795),
        z = e.n(G),
        q = e(569),
        H = e.n(q),
        Z = e(565),
        K = e.n(Z),
        V = e(216),
        Y = e.n(V),
        $ = e(589),
        J = e.n($),
        Q = e(402),
        X = {};
      (X.styleTagTransform = J()),
        (X.setAttributes = K()),
        (X.insert = H().bind(null, 'head')),
        (X.domAPI = z()),
        (X.insertStyleElement = Y()),
        F()(Q.Z, X),
        Q.Z && Q.Z.locals && Q.Z.locals;
      var nn,
        tn = document.querySelector('#main');
      (tn.innerHTML = ''),
        void 0 === new R() &&
          ((nn = document.createElement('div')).classList.add('spinner'),
          (nn.innerHTML =
            '\n  <div class="loading-container">\n  <div class="loading-spinner" />\n  </div>\n  '),
          tn.appendChild(nn)),
        'serviceWorker' in navigator
          ? new f('/src-sw.js').register()
          : console.error('Service workers are not supported in this browser.');
    })();
})();
