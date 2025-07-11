/******/ var __webpack_modules__ = ({

/***/ 237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var moduleMap = {
	"./Module": () => {
		return Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(209), __webpack_require__.e(93), __webpack_require__.e(431), __webpack_require__.e(731)]).then(() => (() => ((__webpack_require__(8431)))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope) => {
	if (!__webpack_require__.S) return;
	var name = "default"
	var oldScope = __webpack_require__.S[name];
	if(oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
	__webpack_require__.S[name] = shareScope;
	return __webpack_require__.I(name, initScope);
};

// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = __webpack_modules__;
/******/ 
/******/ // expose the module cache
/******/ __webpack_require__.c = __webpack_module_cache__;
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/ensure chunk */
/******/ (() => {
/******/ 	__webpack_require__.f = {};
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = (chunkId) => {
/******/ 		return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 			__webpack_require__.f[key](chunkId, promises);
/******/ 			return promises;
/******/ 		}, []));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get javascript chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.u = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return "" + (chunkId === 592 ? "common" : chunkId) + "." + {"1":"617974d261681261","6":"064d9bff326e665d","54":"4bf217e3ccfee61f","86":"7880f9ed691b002a","93":"066050f4b00ed9fe","162":"49ad38e44bb35986","209":"47c6d2f81f6424bd","236":"a40af3e039dac110","238":"07960fe55ec2f09a","246":"97782350510611d0","281":"39e9a1f0a0168fc7","284":"d7dff39d188e1357","340":"debb028f824fe0a6","372":"03b83c10ee1758ec","413":"42d11e695f0ae187","431":"42aa4a0d02fdd590","451":"68678cb49dc0f1d0","481":"091dd0892af72fec","498":"278924994b1b19a0","529":"1b1ae0d746862568","530":"5b39f89c7a250263","559":"8f00d5bcfda0717f","565":"7df2e786452e830b","592":"b377b5c89d918b0e","635":"e08646131763dc14","650":"984a312a4587ed16","731":"0490c83c44c90af0","793":"32ac1eb6248805e7","885":"e1c58a548b96c3ab","893":"1f1aa5c86291303c","895":"f6a987af60d6566a"}[chunkId] + ".js";
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/get mini-css chunk filename */
/******/ (() => {
/******/ 	// This function allow to reference async chunks
/******/ 	__webpack_require__.miniCssF = (chunkId) => {
/******/ 		// return url for filenames based on template
/******/ 		return undefined;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/load script */
/******/ (() => {
/******/ 	var inProgress = {};
/******/ 	var dataWebpackPrefix = "forum:";
/******/ 	// loadScript function to load a script via script tag
/******/ 	__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 		if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 		var script, needAttach;
/******/ 		if(key !== undefined) {
/******/ 			var scripts = document.getElementsByTagName("script");
/******/ 			for(var i = 0; i < scripts.length; i++) {
/******/ 				var s = scripts[i];
/******/ 				if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 			}
/******/ 		}
/******/ 		if(!script) {
/******/ 			needAttach = true;
/******/ 			script = document.createElement('script');
/******/ 			script.type = "module";
/******/ 			script.charset = 'utf-8';
/******/ 			script.timeout = 120;
/******/ 			if (__webpack_require__.nc) {
/******/ 				script.setAttribute("nonce", __webpack_require__.nc);
/******/ 			}
/******/ 			script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 			script.src = __webpack_require__.tu(url);
/******/ 		}
/******/ 		inProgress[url] = [done];
/******/ 		var onScriptComplete = (prev, event) => {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var doneFns = inProgress[url];
/******/ 			delete inProgress[url];
/******/ 			script.parentNode && script.parentNode.removeChild(script);
/******/ 			doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 			if(prev) return prev(event);
/******/ 		};
/******/ 		var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 		script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 		script.onload = onScriptComplete.bind(null, script.onload);
/******/ 		needAttach && document.head.appendChild(script);
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ (() => {
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = (name, initScope) => {
/******/ 		if(!initScope) initScope = [];
/******/ 		// handling circular init calls
/******/ 		var initToken = initTokens[name];
/******/ 		if(!initToken) initToken = initTokens[name] = {};
/******/ 		if(initScope.indexOf(initToken) >= 0) return;
/******/ 		initScope.push(initToken);
/******/ 		// only runs once
/******/ 		if(initPromises[name]) return initPromises[name];
/******/ 		// creates a new share scope if needed
/******/ 		if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 		// runs all init snippets from all modules reachable
/******/ 		var scope = __webpack_require__.S[name];
/******/ 		var warn = (msg) => (typeof console !== "undefined" && console.warn && console.warn(msg));
/******/ 		var uniqueName = "forum";
/******/ 		var register = (name, version, factory, eager) => {
/******/ 			var versions = scope[name] = scope[name] || {};
/******/ 			var activeVersion = versions[version];
/******/ 			if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 		};
/******/ 		var initExternal = (id) => {
/******/ 			var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 			try {
/******/ 				var module = __webpack_require__(id);
/******/ 				if(!module) return;
/******/ 				var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 				if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 				var initResult = initFn(module);
/******/ 				if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 			} catch(err) { handleError(err); }
/******/ 		}
/******/ 		var promises = [];
/******/ 		switch(name) {
/******/ 			case "default": {
/******/ 				register("@abacritt/angularx-social-login", "2.0.0", () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(209), __webpack_require__.e(565)]).then(() => (() => (__webpack_require__(5565))))));
/******/ 				register("@angular/animations/browser", "15.2.4", () => (Promise.all([__webpack_require__.e(209), __webpack_require__.e(372), __webpack_require__.e(1)]).then(() => (() => (__webpack_require__(5001))))));
/******/ 				register("@angular/animations", "15.2.4", () => (__webpack_require__.e(340).then(() => (() => (__webpack_require__(7340))))));
/******/ 				register("@angular/common/http", "15.2.4", () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(209), __webpack_require__.e(529)]).then(() => (() => (__webpack_require__(529))))));
/******/ 				register("@angular/common", "15.2.4", () => (Promise.all([__webpack_require__.e(209), __webpack_require__.e(895)]).then(() => (() => (__webpack_require__(6895))))));
/******/ 				register("@angular/core", "15.2.4", () => (Promise.all([__webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(650)]).then(() => (() => (__webpack_require__(4650))))));
/******/ 				register("@angular/forms", "15.2.4", () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(209), __webpack_require__.e(6)]).then(() => (() => (__webpack_require__(4006))))));
/******/ 				register("@angular/material/core", "15.2.4", () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(209), __webpack_require__.e(413), __webpack_require__.e(246), __webpack_require__.e(238), __webpack_require__.e(281)]).then(() => (() => (__webpack_require__(3238))))));
/******/ 				register("@angular/material/dialog", "15.2.4", () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(209), __webpack_require__.e(413), __webpack_require__.e(372), __webpack_require__.e(246), __webpack_require__.e(54), __webpack_require__.e(86)]).then(() => (() => (__webpack_require__(2086))))));
/******/ 				register("@angular/material/progress-bar", "15.2.4", () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(209), __webpack_require__.e(413), __webpack_require__.e(54), __webpack_require__.e(162)]).then(() => (() => (__webpack_require__(3162))))));
/******/ 				register("@angular/platform-browser/animations", "15.2.4", () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(209), __webpack_require__.e(451), __webpack_require__.e(372), __webpack_require__.e(498), __webpack_require__.e(592)]).then(() => (() => (__webpack_require__(4934))))));
/******/ 				register("@angular/platform-browser", "15.2.4", () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(209), __webpack_require__.e(481)]).then(() => (() => (__webpack_require__(1481))))));
/******/ 				register("@angular/router", "15.2.4", () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(209), __webpack_require__.e(451), __webpack_require__.e(793)]).then(() => (() => (__webpack_require__(4793))))));
/******/ 				register("@ng-bootstrap/ng-bootstrap", "14.0.1", () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(209), __webpack_require__.e(93), __webpack_require__.e(885)]).then(() => (() => (__webpack_require__(2885))))));
/******/ 				register("@ngneat/until-destroy", "9.2.3", () => (Promise.all([__webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(209), __webpack_require__.e(592)]).then(() => (() => (__webpack_require__(9933))))));
/******/ 				register("ngx-cookie-service", "15.0.0", () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(209), __webpack_require__.e(592)]).then(() => (() => (__webpack_require__(5657))))));
/******/ 				register("rxjs/operators", "7.8.0", () => (Promise.all([__webpack_require__.e(530), __webpack_require__.e(559)]).then(() => (() => (__webpack_require__(7559))))));
/******/ 				register("rxjs", "7.8.0", () => (Promise.all([__webpack_require__.e(530), __webpack_require__.e(284)]).then(() => (() => (__webpack_require__(7284))))));
/******/ 			}
/******/ 			break;
/******/ 		}
/******/ 		if(!promises.length) return initPromises[name] = 1;
/******/ 		return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types policy */
/******/ (() => {
/******/ 	var policy;
/******/ 	__webpack_require__.tt = () => {
/******/ 		// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 		if (policy === undefined) {
/******/ 			policy = {
/******/ 				createScriptURL: (url) => (url)
/******/ 			};
/******/ 			if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 				policy = trustedTypes.createPolicy("angular#bundler", policy);
/******/ 			}
/******/ 		}
/******/ 		return policy;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/trusted types script url */
/******/ (() => {
/******/ 	__webpack_require__.tu = (url) => (__webpack_require__.tt().createScriptURL(url));
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	var scriptUrl;
/******/ 	if (typeof import.meta.url === "string") scriptUrl = import.meta.url
/******/ 	// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 	// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 	if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 	scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 	__webpack_require__.p = scriptUrl;
/******/ })();
/******/ 
/******/ /* webpack/runtime/consumes */
/******/ (() => {
/******/ 	var parseVersion = (str) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var p=p=>{return p.split(".").map((p=>{return+p==p?+p:p}))},n=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(str),r=n[1]?p(n[1]):[];return n[2]&&(r.length++,r.push.apply(r,p(n[2]))),n[3]&&(r.push([]),r.push.apply(r,p(n[3]))),r;
/******/ 	}
/******/ 	var versionLt = (a, b) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		a=parseVersion(a),b=parseVersion(b);for(var r=0;;){if(r>=a.length)return r<b.length&&"u"!=(typeof b[r])[0];var e=a[r],n=(typeof e)[0];if(r>=b.length)return"u"==n;var t=b[r],f=(typeof t)[0];if(n!=f)return"o"==n&&"n"==f||("s"==f||"u"==n);if("o"!=n&&"u"!=n&&e!=t)return e<t;r++}
/******/ 	}
/******/ 	var rangeToString = (range) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		var r=range[0],n="";if(1===range.length)return"*";if(r+.5){n+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var e=1,a=1;a<range.length;a++){e--,n+="u"==(typeof(t=range[a]))[0]?"-":(e>0?".":"")+(e=2,t)}return n}var g=[];for(a=1;a<range.length;a++){var t=range[a];g.push(0===t?"not("+o()+")":1===t?"("+o()+" || "+o()+")":2===t?g.pop()+" "+g.pop():rangeToString(t))}return o();function o(){return g.pop().replace(/^\((.+)\)$/,"$1")}
/******/ 	}
/******/ 	var satisfy = (range, version) => {
/******/ 		// see webpack/lib/util/semver.js for original code
/******/ 		if(0 in range){version=parseVersion(version);var e=range[0],r=e<0;r&&(e=-e-1);for(var n=0,i=1,a=!0;;i++,n++){var f,s,g=i<range.length?(typeof range[i])[0]:"";if(n>=version.length||"o"==(s=(typeof(f=version[n]))[0]))return!a||("u"==g?i>e&&!r:""==g!=r);if("u"==s){if(!a||"u"!=g)return!1}else if(a)if(g==s)if(i<=e){if(f!=range[i])return!1}else{if(r?f>range[i]:f<range[i])return!1;f!=range[i]&&(a=!1)}else if("s"!=g&&"n"!=g){if(r||i<=e)return!1;a=!1,i--}else{if(i<=e||s<g!=r)return!1;a=!1}else"s"!=g&&"n"!=g&&(a=!1,i--)}}var t=[],o=t.pop.bind(t);for(n=1;n<range.length;n++){var u=range[n];t.push(1==u?o()|o():2==u?o()&o():u?satisfy(u,version):!o())}return!!o();
/******/ 	}
/******/ 	var ensureExistence = (scopeName, key) => {
/******/ 		var scope = __webpack_require__.S[scopeName];
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) throw new Error("Shared module " + key + " doesn't exist in shared scope " + scopeName);
/******/ 		return scope;
/******/ 	};
/******/ 	var findVersion = (scope, key) => {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce((a, b) => {
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var findSingletonVersionKey = (scope, key) => {
/******/ 		var versions = scope[key];
/******/ 		return Object.keys(versions).reduce((a, b) => {
/******/ 			return !a || (!versions[a].loaded && versionLt(a, b)) ? b : a;
/******/ 		}, 0);
/******/ 	};
/******/ 	var getInvalidSingletonVersionMessage = (scope, key, version, requiredVersion) => {
/******/ 		return "Unsatisfied version " + version + " from " + (version && scope[key][version].from) + " of shared singleton module " + key + " (required " + rangeToString(requiredVersion) + ")"
/******/ 	};
/******/ 	var getSingleton = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var getSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) typeof console !== "undefined" && console.warn && console.warn(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var getStrictSingletonVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var version = findSingletonVersionKey(scope, key);
/******/ 		if (!satisfy(requiredVersion, version)) throw new Error(getInvalidSingletonVersionMessage(scope, key, version, requiredVersion));
/******/ 		return get(scope[key][version]);
/******/ 	};
/******/ 	var findValidVersion = (scope, key, requiredVersion) => {
/******/ 		var versions = scope[key];
/******/ 		var key = Object.keys(versions).reduce((a, b) => {
/******/ 			if (!satisfy(requiredVersion, b)) return a;
/******/ 			return !a || versionLt(a, b) ? b : a;
/******/ 		}, 0);
/******/ 		return key && versions[key]
/******/ 	};
/******/ 	var getInvalidVersionMessage = (scope, scopeName, key, requiredVersion) => {
/******/ 		var versions = scope[key];
/******/ 		return "No satisfying version (" + rangeToString(requiredVersion) + ") of shared module " + key + " found in shared scope " + scopeName + ".\n" +
/******/ 			"Available versions: " + Object.keys(versions).map((key) => {
/******/ 			return key + " from " + versions[key].from;
/******/ 		}).join(", ");
/******/ 	};
/******/ 	var getValidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		var entry = findValidVersion(scope, key, requiredVersion);
/******/ 		if(entry) return get(entry);
/******/ 		throw new Error(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var warnInvalidVersion = (scope, scopeName, key, requiredVersion) => {
/******/ 		typeof console !== "undefined" && console.warn && console.warn(getInvalidVersionMessage(scope, scopeName, key, requiredVersion));
/******/ 	};
/******/ 	var get = (entry) => {
/******/ 		entry.loaded = 1;
/******/ 		return entry.get()
/******/ 	};
/******/ 	var init = (fn) => (function(scopeName, a, b, c) {
/******/ 		var promise = __webpack_require__.I(scopeName);
/******/ 		if (promise && promise.then) return promise.then(fn.bind(fn, scopeName, __webpack_require__.S[scopeName], a, b, c));
/******/ 		return fn(scopeName, __webpack_require__.S[scopeName], a, b, c);
/******/ 	});
/******/ 	
/******/ 	var load = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findVersion(scope, key));
/******/ 	});
/******/ 	var loadFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 		return scope && __webpack_require__.o(scope, key) ? get(findVersion(scope, key)) : fallback();
/******/ 	});
/******/ 	var loadVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingleton = /*#__PURE__*/ init((scopeName, scope, key) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getSingleton(scope, scopeName, key);
/******/ 	});
/******/ 	var loadSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getValidVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheck = /*#__PURE__*/ init((scopeName, scope, key, version) => {
/******/ 		ensureExistence(scopeName, key);
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return get(findValidVersion(scope, key, version) || warnInvalidVersion(scope, scopeName, key, version) || findVersion(scope, key));
/******/ 	});
/******/ 	var loadSingletonFallback = /*#__PURE__*/ init((scopeName, scope, key, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getSingleton(scope, scopeName, key);
/******/ 	});
/******/ 	var loadSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var loadStrictVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		var entry = scope && __webpack_require__.o(scope, key) && findValidVersion(scope, key, version);
/******/ 		return entry ? get(entry) : fallback();
/******/ 	});
/******/ 	var loadStrictSingletonVersionCheckFallback = /*#__PURE__*/ init((scopeName, scope, key, version, fallback) => {
/******/ 		if(!scope || !__webpack_require__.o(scope, key)) return fallback();
/******/ 		return getStrictSingletonVersion(scope, scopeName, key, version);
/******/ 	});
/******/ 	var installedModules = {};
/******/ 	var moduleToHandlerMapping = {
/******/ 		8236: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/common", [2,15,2,0], () => (__webpack_require__.e(895).then(() => (() => (__webpack_require__(6895))))))),
/******/ 		3635: () => (loadStrictSingletonVersionCheckFallback("default", "rxjs", [2,7,8,0], () => (Promise.all([__webpack_require__.e(530), __webpack_require__.e(284)]).then(() => (() => (__webpack_require__(7284))))))),
/******/ 		1209: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/core", [2,15,2,0], () => (Promise.all([__webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(650)]).then(() => (() => (__webpack_require__(4650))))))),
/******/ 		4093: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/forms", [2,15,2,0], () => (Promise.all([__webpack_require__.e(893), __webpack_require__.e(6)]).then(() => (() => (__webpack_require__(4006))))))),
/******/ 		4293: () => (loadStrictSingletonVersionCheckFallback("default", "ngx-cookie-service", [1,15,0,0], () => (__webpack_require__.e(592).then(() => (() => (__webpack_require__(5657))))))),
/******/ 		7104: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/material/progress-bar", [1,15,2,4], () => (Promise.all([__webpack_require__.e(413), __webpack_require__.e(54), __webpack_require__.e(162)]).then(() => (() => (__webpack_require__(3162))))))),
/******/ 		9843: () => (loadStrictSingletonVersionCheckFallback("default", "@ngneat/until-destroy", [1,9,2,3], () => (Promise.all([__webpack_require__.e(893), __webpack_require__.e(592)]).then(() => (() => (__webpack_require__(9933))))))),
/******/ 		2416: () => (loadStrictSingletonVersionCheckFallback("default", "@abacritt/angularx-social-login", [1,2,0,0], () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(565)]).then(() => (() => (__webpack_require__(5565))))))),
/******/ 		729: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/common/http", [2,15,2,0], () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(529)]).then(() => (() => (__webpack_require__(529))))))),
/******/ 		367: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/material/dialog", [1,15,2,4], () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(413), __webpack_require__.e(372), __webpack_require__.e(246), __webpack_require__.e(54), __webpack_require__.e(86)]).then(() => (() => (__webpack_require__(2086))))))),
/******/ 		4313: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/router", [2,15,2,0], () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(451), __webpack_require__.e(793)]).then(() => (() => (__webpack_require__(4793))))))),
/******/ 		5893: () => (loadStrictSingletonVersionCheckFallback("default", "rxjs/operators", [2,7,8,0], () => (Promise.all([__webpack_require__.e(530), __webpack_require__.e(559)]).then(() => (() => (__webpack_require__(7559))))))),
/******/ 		372: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/animations", [2,15,2,0], () => (__webpack_require__.e(340).then(() => (() => (__webpack_require__(7340))))))),
/******/ 		2413: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/platform-browser/animations", [2,15,2,0], () => (Promise.all([__webpack_require__.e(451), __webpack_require__.e(372), __webpack_require__.e(498), __webpack_require__.e(592)]).then(() => (() => (__webpack_require__(4934))))))),
/******/ 		2054: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/material/core", [1,15,2,4], () => (Promise.all([__webpack_require__.e(635), __webpack_require__.e(893), __webpack_require__.e(246), __webpack_require__.e(238)]).then(() => (() => (__webpack_require__(3238))))))),
/******/ 		9451: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/platform-browser", [2,15,2,0], () => (Promise.all([__webpack_require__.e(236), __webpack_require__.e(481)]).then(() => (() => (__webpack_require__(1481))))))),
/******/ 		1498: () => (loadStrictSingletonVersionCheckFallback("default", "@angular/animations/browser", [2,15,2,0], () => (__webpack_require__.e(1).then(() => (() => (__webpack_require__(5001)))))))
/******/ 	};
/******/ 	// no consumes in initial chunks
/******/ 	var chunkMapping = {
/******/ 		"54": [
/******/ 			2054
/******/ 		],
/******/ 		"93": [
/******/ 			4093
/******/ 		],
/******/ 		"209": [
/******/ 			1209
/******/ 		],
/******/ 		"236": [
/******/ 			8236
/******/ 		],
/******/ 		"372": [
/******/ 			372
/******/ 		],
/******/ 		"413": [
/******/ 			2413
/******/ 		],
/******/ 		"431": [
/******/ 			4293,
/******/ 			7104,
/******/ 			9843
/******/ 		],
/******/ 		"451": [
/******/ 			9451
/******/ 		],
/******/ 		"498": [
/******/ 			1498
/******/ 		],
/******/ 		"635": [
/******/ 			3635
/******/ 		],
/******/ 		"731": [
/******/ 			2416,
/******/ 			729,
/******/ 			367,
/******/ 			4313
/******/ 		],
/******/ 		"893": [
/******/ 			5893
/******/ 		]
/******/ 	};
/******/ 	__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 		if(__webpack_require__.o(chunkMapping, chunkId)) {
/******/ 			chunkMapping[chunkId].forEach((id) => {
/******/ 				if(__webpack_require__.o(installedModules, id)) return promises.push(installedModules[id]);
/******/ 				var onFactory = (factory) => {
/******/ 					installedModules[id] = 0;
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						delete __webpack_require__.c[id];
/******/ 						module.exports = factory();
/******/ 					}
/******/ 				};
/******/ 				var onError = (error) => {
/******/ 					delete installedModules[id];
/******/ 					__webpack_require__.m[id] = (module) => {
/******/ 						delete __webpack_require__.c[id];
/******/ 						throw error;
/******/ 					}
/******/ 				};
/******/ 				try {
/******/ 					var promise = moduleToHandlerMapping[id]();
/******/ 					if(promise.then) {
/******/ 						promises.push(installedModules[id] = promise.then(onFactory)['catch'](onError));
/******/ 					} else onFactory(promise);
/******/ 				} catch(e) { onError(e); }
/******/ 			});
/******/ 		}
/******/ 	}
/******/ })();
/******/ 
/******/ /* webpack/runtime/jsonp chunk loading */
/******/ (() => {
/******/ 	// no baseURI
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		315: 0
/******/ 	};
/******/ 	
/******/ 	__webpack_require__.f.j = (chunkId, promises) => {
/******/ 			// JSONP chunk loading for javascript
/******/ 			var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 			if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 	
/******/ 				// a Promise means "currently loading".
/******/ 				if(installedChunkData) {
/******/ 					promises.push(installedChunkData[2]);
/******/ 				} else {
/******/ 					if(!/^(4(13|51|98)|(|8)93|209|236|372|54|635|731)$/.test(chunkId)) {
/******/ 						// setup Promise in chunk cache
/******/ 						var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 						promises.push(installedChunkData[2] = promise);
/******/ 	
/******/ 						// start chunk loading
/******/ 						var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 						// create error before stack unwound to get useful stacktrace later
/******/ 						var error = new Error();
/******/ 						var loadingEnded = (event) => {
/******/ 							if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 								installedChunkData = installedChunks[chunkId];
/******/ 								if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 								if(installedChunkData) {
/******/ 									var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 									var realSrc = event && event.target && event.target.src;
/******/ 									error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 									error.name = 'ChunkLoadError';
/******/ 									error.type = errorType;
/******/ 									error.request = realSrc;
/******/ 									installedChunkData[1](error);
/******/ 								}
/******/ 							}
/******/ 						};
/******/ 						__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 					} else installedChunks[chunkId] = 0;
/******/ 				}
/******/ 			}
/******/ 	};
/******/ 	
/******/ 	// no prefetching
/******/ 	
/******/ 	// no preloaded
/******/ 	
/******/ 	// no HMR
/******/ 	
/******/ 	// no HMR manifest
/******/ 	
/******/ 	// no on chunks loaded
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 		var [chunkIds, moreModules, runtime] = data;
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0;
/******/ 		if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 		}
/******/ 		if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				installedChunks[chunkId][0]();
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 	
/******/ 	}
/******/ 	
/******/ 	var chunkLoadingGlobal = self["webpackChunkforum"] = self["webpackChunkforum"] || [];
/******/ 	chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 	chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // module cache are used so entry inlining is disabled
/******/ // startup
/******/ // Load entry module and return exports
/******/ var __webpack_exports__ = __webpack_require__(237);
/******/ var __webpack_exports__get = __webpack_exports__.get;
/******/ var __webpack_exports__init = __webpack_exports__.init;
/******/ export { __webpack_exports__get as get, __webpack_exports__init as init };
/******/ 
