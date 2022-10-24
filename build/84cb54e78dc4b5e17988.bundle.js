/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 950:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(663);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(79);
;// CONCATENATED MODULE: ./src/assets/resource/icecream.png
const icecream_namespaceObject = __webpack_require__.p + "images/icecream.png";
;// CONCATENATED MODULE: ./src/assets/resource/chocolate.png
const chocolate_namespaceObject = __webpack_require__.p + "images/chocolate.png";
;// CONCATENATED MODULE: ./src/assets/resource/caramel.png
const caramel_namespaceObject = __webpack_require__.p + "images/caramel.png";
;// CONCATENATED MODULE: ./src/assets/components/ToppingList.js




function ToppingList() {
  const [currentIndex, setCurrentIndex] = (0,react.useState)(-1);
  return /*#__PURE__*/react.createElement("div", {
    className: "mt-4 flex flex-row justify-between space-x-2"
  }, /*#__PURE__*/react.createElement(TopingItem, {
    index: 1,
    handler: () => {
      if (currentIndex == 1) setCurrentIndex(-1);else setCurrentIndex(1);
    },
    enabled: currentIndex === 1,
    image: icecream_namespaceObject,
    title: "\u041C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435",
    dimensions: "w-16 h-16"
  }), /*#__PURE__*/react.createElement(TopingItem, {
    index: 2,
    handler: () => {
      if (currentIndex == 2) setCurrentIndex(-1);else setCurrentIndex(2);
    },
    enabled: currentIndex === 2,
    image: chocolate_namespaceObject,
    title: "\u0428\u043E\u043A\u043E\u043B\u0430\u0434",
    dimensions: "w-24 h-12"
  }), /*#__PURE__*/react.createElement(TopingItem, {
    index: 3,
    handler: () => {
      if (currentIndex == 3) setCurrentIndex(-1);else setCurrentIndex(3);
    },
    enabled: currentIndex === 3,
    image: caramel_namespaceObject,
    title: "\u041A\u0430\u0440\u0430\u043C\u0435\u043B\u044C",
    dimensions: "w-24 h-14"
  }));
}
function TopingItem(props) {
  return /*#__PURE__*/react.createElement("div", {
    onClick: props.handler,
    className: props.enabled ? "p-3 w-28 h-28 flex flex-col justify-between items-center border-2 rounded-xl border-neutral-900" : "p-3 w-28 h-28 flex flex-col justify-between items-center border-2 rounded-xl border-neutral-900/50"
  }, /*#__PURE__*/react.createElement("img", {
    className: props.dimensions,
    src: props.image
  }), /*#__PURE__*/react.createElement("p", {
    className: "text-sm font-semibold"
  }, props.title));
}
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var index_esm = __webpack_require__(191);
;// CONCATENATED MODULE: ./src/assets/components/InputField.js


function InputField() {
  const input = (0,react.useRef)(null);
  const iconStyle = {
    color: "white"
  };
  const [enabled, setEnabled] = (0,react.useState)(true);
  function handler() {
    setEnabled(!enabled);
    if (enabled) input.current.focus();
  }
  return /*#__PURE__*/react.createElement("div", {
    className: "mt-4 mx-2 flex justify-around space-x-2"
  }, /*#__PURE__*/react.createElement("input", {
    placeholder: "\u0410\u0434\u0440\u0435\u0441",
    ref: input,
    disabled: enabled,
    className: "leading-4 p-3 grow h-12 rounded-xl border-2 border-gray-900"
  }), /*#__PURE__*/react.createElement("div", {
    onClick: handler,
    onBlur: handler,
    className: "flex justify-center items-center h-12 w-12 grow-0 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900"
  }, /*#__PURE__*/react.createElement(index_esm/* BsPencil */.jox, {
    style: iconStyle
  })));
}
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(626);
;// CONCATENATED MODULE: ./src/assets/components/Popup.js


function SimplePopup(props) {
  const buttonIconStyle = {
    color: "white",
    size: "30px"
  };
  return /*#__PURE__*/react.createElement("div", {
    style: {
      visibility: props.visible ? "visible" : "hidden"
    },
    className: "w-full h-full bg-white/75 absolute flex justify-center items-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "bg-white border-2 border-gray-700 rounded-xl p-4"
  }, /*#__PURE__*/react.createElement("h1", {
    className: "font-semibold text-xl mb-4"
  }, "\u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u0438\u043C \u0437\u0430 \u0437\u0430\u043A\u0430\u0437"), /*#__PURE__*/react.createElement("div", {
    onClick: () => props.handlers.onFinishClick(),
    className: "mb-4 flex px-4 justify-around text-white font-semibold text-sm items-center h-12 grow-0 rounded-xl bg-gradient-to-r from-gray-700 to-gray-900"
  }, /*#__PURE__*/react.createElement(bi_index_esm/* BiCoin */.v8A, {
    style: buttonIconStyle
  }), "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0447\u0430\u0435\u0432\u044B\u0435"), /*#__PURE__*/react.createElement("div", {
    onClick: () => props.handlers.onFinishClick(),
    className: "flex px-4 justify-around text-gray-700 font-semibold text-sm items-center h-12 grow-0 rounded-xl border-2 border-gray-700"
  }, "\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C")));
}
;// CONCATENATED MODULE: ./src/assets/resource/coffee.png
const coffee_namespaceObject = __webpack_require__.p + "images/coffee.png";
;// CONCATENATED MODULE: ./src/App.js





function App() {
  const [orderFinished, setOrderFinished] = (0,react.useState)(true);
  const popUpHandlers = {
    onFinishClick: () => {
      setOrderFinished(true);
    },
    onTipsClick: () => {
      setOrderFinished(true);
    }
  };
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(SimplePopup, {
    handlers: popUpHandlers,
    visible: !orderFinished
  }), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col items-center mt-8 mb-6"
  }, /*#__PURE__*/react.createElement("img", {
    src: coffee_namespaceObject,
    className: "mb-6"
  }), /*#__PURE__*/react.createElement("h1", {
    className: "font-semibold text-lg leading-4"
  }, "\u0421\u0438\u0440\u043E\u043F"), /*#__PURE__*/react.createElement(ToppingList, null)), /*#__PURE__*/react.createElement(InputField, null), /*#__PURE__*/react.createElement("div", {
    className: "p-3 h-12 text-sm mx-2 mt-4 rounded-xl border-2 border-gray-900"
  }, "\u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043E \u0431\u043E\u043D\u0443\u0441\u043E\u0432 : ", /*#__PURE__*/react.createElement("strong", null, "10")), /*#__PURE__*/react.createElement("div", {
    onClick: () => setOrderFinished(false),
    className: "mb-5 mx-2 mt-4 h-12 flex justify-center items-center bg-gradient-to-r from-gray-700 to-gray-900 font-semibold text-sm text-white rounded-xl"
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"));
}
;// CONCATENATED MODULE: ./src/index.js




render();
window.Telegram.WebApp.themeParams.bg_color = "#FFFFFF";
window.Telegram.WebApp.themeParams.secondary_bg_color = "#FFFFFF";
function render() {
  const root = client/* createRoot */.s(document.getElementById('root'));
  const element = /*#__PURE__*/react.createElement(App, null);
  root.render(element);
}

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweb_app_food"] = self["webpackChunkweb_app_food"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [216], () => (__webpack_require__(950)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;