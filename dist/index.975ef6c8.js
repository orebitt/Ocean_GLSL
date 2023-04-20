// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"jC2qd":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets, assetsToDispose, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets); // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                } // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle, id) {
    // Execute the module.
    bundle(id); // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            }); // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
/**
 * With codesandbox we import our functions from the files they live in
 * rather than import that file in the HTML file like we usually do
 *
 * ALSO NOTE that there is NO main function being called.
 * index.js IS your main function and the code written in it is run
 * on page load.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _stylesCss = require("./styles.css");
var _cuonUtils = require("../lib/cuon-utils");
var _context = require("./Context");
var _contextDefault = parcelHelpers.interopDefault(_context);
var _camera = require("./Camera");
var _cameraDefault = parcelHelpers.interopDefault(_camera);
var _controls = require("./Controls");
var _controlsDefault = parcelHelpers.interopDefault(_controls);
var _ocean = require("./Ocean");
var _oceanDefault = parcelHelpers.interopDefault(_ocean);
var _sky = require("./Sky");
var _skyDefault = parcelHelpers.interopDefault(_sky);
const VERTEX_SHADER = `
  precision mediump float;
  attribute vec3 position;
  attribute vec2 uv;
  attribute vec3 normal;
  
  uniform mat4 modelMatrix;
  uniform mat4 normalMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  
  varying vec3 vNormal;
  
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
    vNormal = (normalMatrix * vec4(normal, 1.0)).xyz;
  }
  `;
const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec3 vNormal;

  void main() {
    vec3 norm = normalize(vNormal);
    
    gl_FragColor = vec4(norm, 1.0);
  }
`;
// Get the rendering context for WebGL
var gl = (0, _contextDefault.default)();
if (!(0, _cuonUtils.initShaders)(gl, VERTEX_SHADER, FRAGMENT_SHADER)) console.error("Could not init shaders");
const camera = new (0, _cameraDefault.default)([
    0,
    2.5,
    5
], [
    0,
    1,
    0
]);
const controls = new (0, _controlsDefault.default)(gl, camera);
function tick() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    (0, _oceanDefault.default).render(gl, camera);
    (0, _skyDefault.default).render(gl, camera);
    controls.update();
    requestAnimationFrame(tick);
}
tick();

},{"./styles.css":"lW6qc","../lib/cuon-utils":"jJDed","./Context":"49Q86","./Camera":"hWRa6","./Controls":"9msoh","./Ocean":"bQTr1","./Sky":"2OhnR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lW6qc":[function() {},{}],"jJDed":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getWebGLContext", ()=>getWebGLContext);
parcelHelpers.export(exports, "loadShader", ()=>loadShader);
parcelHelpers.export(exports, "createProgram", ()=>createProgram);
parcelHelpers.export(exports, "initShaders", ()=>initShaders);
var _webglUtils = require("./webgl-utils");
var _webglDebug = require("./webgl-debug");
// cuon-utils.js (c) 2012 kanda and matsuda
/**
 * Create a program object and make current
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return true, if the program object was created and successfully made current
 */ function initShaders(gl, vshader, fshader) {
    var program = createProgram(gl, vshader, fshader);
    if (!program) {
        console.log("Failed to create program");
        return false;
    }
    gl.useProgram(program);
    gl.program = program;
    return true;
}
/**
 * Create the linked program object
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return created program object, or null if the creation has failed
 */ function createProgram(gl, vshader, fshader) {
    // Create shader object
    var vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
    var fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);
    if (!vertexShader || !fragmentShader) return null;
    // Create a program object
    var program = gl.createProgram();
    if (!program) return null;
    // Attach the shader objects
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // Link the program object
    gl.linkProgram(program);
    // Check the result of linking
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        var error = gl.getProgramInfoLog(program);
        console.log("Failed to link program: " + error);
        gl.deleteProgram(program);
        gl.deleteShader(fragmentShader);
        gl.deleteShader(vertexShader);
        return null;
    }
    return program;
}
/**
 * Create a shader object
 * @param gl GL context
 * @param type the type of the shader object to be created
 * @param source shader program (string)
 * @return created shader object, or null if the creation has failed.
 */ function loadShader(gl, type, source) {
    // Create shader object
    var shader = gl.createShader(type);
    if (shader == null) {
        console.log("unable to create shader");
        return null;
    }
    // Set the shader program
    gl.shaderSource(shader, source);
    // Compile the shader
    gl.compileShader(shader);
    // Check the result of compilation
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        var error = gl.getShaderInfoLog(shader);
        console.log("Failed to compile shader: " + error);
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}
/**
 * Initialize and get the rendering for WebGL
 * @param canvas <cavnas> element
 * @param opt_debug flag to initialize the context for debugging
 * @return the rendering context for WebGL
 */ function getWebGLContext(canvas, opt_debug) {
    // Get the rendering context for WebGL
    var gl = (0, _webglUtils.WebGLUtils).setupWebGL(canvas);
    if (!gl) return null;
    // if opt_debug is explicitly false, create the context for debugging
    if (arguments.length < 2 || opt_debug) gl = (0, _webglDebug.WebGLDebugUtils).makeDebugContext(gl);
    return gl;
}

},{"./webgl-utils":"gZNqd","./webgl-debug":"1qAIX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gZNqd":[function(require,module,exports) {
/*
 * Copyright 2010, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ /**
 * @fileoverview This file contains functions every webgl program will need
 * a version of one way or another.
 *
 * Instead of setting up a context manually it is recommended to
 * use. This will check for success or failure. On failure it
 * will attempt to present an approriate message to the user.
 *
 *       gl = WebGLUtils.setupWebGL(canvas);
 *
 * For animated WebGL apps use of setTimeout or setInterval are
 * discouraged. It is recommended you structure your rendering
 * loop like this.
 *
 *       function render() {
 *         window.requestAnimationFrame(render, canvas);
 *
 *         // do rendering
 *         ...
 *       }
 *       render();
 *
 * This will call your rendering function up to the refresh rate
 * of your display but will stop rendering if your app is not
 * visible.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WebGLUtils", ()=>WebGLUtils);
parcelHelpers.export(exports, "redefineRequestAnimationFrame", ()=>redefineRequestAnimationFrame);
parcelHelpers.export(exports, "redefineCancelAnimationFrame", ()=>redefineCancelAnimationFrame);
var WebGLUtils = function() {
    /**
   * Creates the HTLM for a failure message
   * @param {string} canvasContainerId id of container of th
   *        canvas.
   * @return {string} The html.
   */ var makeFailHTML = function(msg) {
        return '<div style="margin: auto; width:500px;z-index:10000;margin-top:20em;text-align:center;">' + msg + "</div>";
    };
    /**
   * Mesasge for getting a webgl browser
   * @type {string}
   */ var GET_A_WEBGL_BROWSER = 'This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>';
    /**
   * Mesasge for need better hardware
   * @type {string}
   */ var OTHER_PROBLEM = 'It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org">Click here for more information.</a>';
    /**
   * Creates a webgl context. If creation fails it will
   * change the contents of the container of the <canvas>
   * tag to an error message with the correct links for WebGL.
   * @param {Element} canvas. The canvas element to create a
   *     context from.
   * @param {WebGLContextCreationAttirbutes} opt_attribs Any
   *     creation attributes you want to pass in.
   * @param {function:(msg)} opt_onError An function to call
   *     if there is an error during creation.
   * @return {WebGLRenderingContext} The created context.
   */ const setupWebGL = (canvas, opt_attribs, opt_onError)=>{
        function handleCreationError(msg) {
            var container = document.getElementsByTagName("body")[0];
            //var container = canvas.parentNode;
            if (container) {
                var str = window.WebGLRenderingContext ? OTHER_PROBLEM : GET_A_WEBGL_BROWSER;
                if (msg) str += "<br/><br/>Status: " + msg;
                container.innerHTML = makeFailHTML(str);
            }
        }
        opt_onError = opt_onError || handleCreationError;
        if (canvas.addEventListener) canvas.addEventListener("webglcontextcreationerror", function(event) {
            opt_onError(event.statusMessage);
        }, false);
        var context = create3DContext(canvas, opt_attribs);
        if (!context) {
            if (!window.WebGLRenderingContext) opt_onError("");
            else opt_onError("");
        }
        return context;
    };
    /**
   * Creates a webgl context.
   * @param {!Canvas} canvas The canvas tag to get context
   *     from. If one is not passed in one will be created.
   * @return {!WebGLContext} The created context.
   */ var create3DContext = function(canvas, opt_attribs) {
        var names = [
            "webgl",
            "experimental-webgl",
            "webkit-3d",
            "moz-webgl"
        ];
        var context = null;
        for(var ii = 0; ii < names.length; ++ii){
            try {
                context = canvas.getContext(names[ii], opt_attribs);
            } catch (e) {}
            if (context) break;
        }
        return context;
    };
    return {
        create3DContext: create3DContext,
        setupWebGL: setupWebGL
    };
}();
/**
 * Provides requestAnimationFrame in a cross browser
 * way.
 */ const redefineRequestAnimationFrame = ()=>{
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            window.setTimeout(callback, 1000 / 60);
        };
    }();
};
/** * ERRATA: 'cancelRequestAnimationFrame' renamed to 'cancelAnimationFrame' to reflect an update to the W3C Animation-Timing Spec.
 *
 * Cancels an animation frame request.
 * Checks for cross-browser support, falls back to clearTimeout.
 * @param {number}  Animation frame request. */ const redefineCancelAnimationFrame = ()=>{
    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = window.cancelRequestAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame || window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame || window.clearTimeout;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1qAIX":[function(require,module,exports) {
//Copyright (c) 2009 The Chromium Authors. All rights reserved.
//Use of this source code is governed by a BSD-style license that can be
//found in the LICENSE file.
// Various functions for helping debug WebGL apps.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WebGLDebugUtils", ()=>WebGLDebugUtils);
var WebGLDebugUtils = function() {
    /**
   * Wrapped logging function.
   * @param {string} msg Message to log.
   */ var log = function(msg) {
        if (window.console && window.console.log) window.console.log(msg);
    };
    /**
   * Which arguements are enums.
   * @type {!Object.<number, string>}
   */ var glValidEnumContexts = {
        // Generic setters and getters
        enable: {
            0: true
        },
        disable: {
            0: true
        },
        getParameter: {
            0: true
        },
        // Rendering
        drawArrays: {
            0: true
        },
        drawElements: {
            0: true,
            2: true
        },
        // Shaders
        createShader: {
            0: true
        },
        getShaderParameter: {
            1: true
        },
        getProgramParameter: {
            1: true
        },
        // Vertex attributes
        getVertexAttrib: {
            1: true
        },
        vertexAttribPointer: {
            2: true
        },
        // Textures
        bindTexture: {
            0: true
        },
        activeTexture: {
            0: true
        },
        getTexParameter: {
            0: true,
            1: true
        },
        texParameterf: {
            0: true,
            1: true
        },
        texParameteri: {
            0: true,
            1: true,
            2: true
        },
        texImage2D: {
            0: true,
            2: true,
            6: true,
            7: true
        },
        texSubImage2D: {
            0: true,
            6: true,
            7: true
        },
        copyTexImage2D: {
            0: true,
            2: true
        },
        copyTexSubImage2D: {
            0: true
        },
        generateMipmap: {
            0: true
        },
        // Buffer objects
        bindBuffer: {
            0: true
        },
        bufferData: {
            0: true,
            2: true
        },
        bufferSubData: {
            0: true
        },
        getBufferParameter: {
            0: true,
            1: true
        },
        // Renderbuffers and framebuffers
        pixelStorei: {
            0: true,
            1: true
        },
        readPixels: {
            4: true,
            5: true
        },
        bindRenderbuffer: {
            0: true
        },
        bindFramebuffer: {
            0: true
        },
        checkFramebufferStatus: {
            0: true
        },
        framebufferRenderbuffer: {
            0: true,
            1: true,
            2: true
        },
        framebufferTexture2D: {
            0: true,
            1: true,
            2: true
        },
        getFramebufferAttachmentParameter: {
            0: true,
            1: true,
            2: true
        },
        getRenderbufferParameter: {
            0: true,
            1: true
        },
        renderbufferStorage: {
            0: true,
            1: true
        },
        // Frame buffer operations (clear, blend, depth test, stencil)
        clear: {
            0: true
        },
        depthFunc: {
            0: true
        },
        blendFunc: {
            0: true,
            1: true
        },
        blendFuncSeparate: {
            0: true,
            1: true,
            2: true,
            3: true
        },
        blendEquation: {
            0: true
        },
        blendEquationSeparate: {
            0: true,
            1: true
        },
        stencilFunc: {
            0: true
        },
        stencilFuncSeparate: {
            0: true,
            1: true
        },
        stencilMaskSeparate: {
            0: true
        },
        stencilOp: {
            0: true,
            1: true,
            2: true
        },
        stencilOpSeparate: {
            0: true,
            1: true,
            2: true,
            3: true
        },
        // Culling
        cullFace: {
            0: true
        },
        frontFace: {
            0: true
        }
    };
    /**
   * Map of numbers to names.
   * @type {Object}
   */ var glEnums = null;
    /**
   * Initializes this module. Safe to call more than once.
   * @param {!WebGLRenderingContext} ctx A WebGL context. If
   *    you have more than one context it doesn't matter which one
   *    you pass in, it is only used to pull out constants.
   */ function init(ctx) {
        if (glEnums == null) {
            glEnums = {};
            for(var propertyName in ctx)if (typeof ctx[propertyName] == "number") glEnums[ctx[propertyName]] = propertyName;
        }
    }
    /**
   * Checks the utils have been initialized.
   */ function checkInit() {
        if (glEnums == null) throw "WebGLDebugUtils.init(ctx) not called";
    }
    /**
   * Returns true or false if value matches any WebGL enum
   * @param {*} value Value to check if it might be an enum.
   * @return {boolean} True if value matches one of the WebGL defined enums
   */ function mightBeEnum(value) {
        checkInit();
        return glEnums[value] !== undefined;
    }
    /**
   * Gets an string version of an WebGL enum.
   *
   * Example:
   *   var str = WebGLDebugUtil.glEnumToString(ctx.getError());
   *
   * @param {number} value Value to return an enum for
   * @return {string} The string version of the enum.
   */ function glEnumToString(value) {
        checkInit();
        var name = glEnums[value];
        return name !== undefined ? name : "*UNKNOWN WebGL ENUM (0x" + value.toString(16) + ")";
    }
    /**
   * Returns the string version of a WebGL argument.
   * Attempts to convert enum arguments to strings.
   * @param {string} functionName the name of the WebGL function.
   * @param {number} argumentIndx the index of the argument.
   * @param {*} value The value of the argument.
   * @return {string} The value as a string.
   */ function glFunctionArgToString(functionName, argumentIndex, value) {
        var funcInfo = glValidEnumContexts[functionName];
        if (funcInfo !== undefined) {
            if (funcInfo[argumentIndex]) return glEnumToString(value);
        }
        return value.toString();
    }
    /**
   * Given a WebGL context returns a wrapped context that calls
   * gl.getError after every command and calls a function if the
   * result is not gl.NO_ERROR.
   *
   * @param {!WebGLRenderingContext} ctx The webgl context to
   *        wrap.
   * @param {!function(err, funcName, args): void} opt_onErrorFunc
   *        The function to call when gl.getError returns an
   *        error. If not specified the default function calls
   *        console.log with a message.
   */ function makeDebugContext(ctx, opt_onErrorFunc) {
        init(ctx);
        opt_onErrorFunc = opt_onErrorFunc || function(err, functionName, args) {
            // apparently we can't do args.join(",");
            var argStr = "";
            for(var ii = 0; ii < args.length; ++ii)argStr += (ii == 0 ? "" : ", ") + glFunctionArgToString(functionName, ii, args[ii]);
            log("WebGL error " + glEnumToString(err) + " in " + functionName + "(" + argStr + ")");
        };
        // Holds booleans for each GL error so after we get the error ourselves
        // we can still return it to the client app.
        var glErrorShadow = {};
        // Makes a function that calls a WebGL function and then calls getError.
        function makeErrorWrapper(ctx, functionName) {
            return function() {
                var result = ctx[functionName].apply(ctx, arguments);
                var err = ctx.getError();
                if (err != 0) {
                    glErrorShadow[err] = true;
                    opt_onErrorFunc(err, functionName, arguments);
                }
                return result;
            };
        }
        // Make a an object that has a copy of every property of the WebGL context
        // but wraps all functions.
        var wrapper = {};
        for(var propertyName in ctx)if (typeof ctx[propertyName] == "function") wrapper[propertyName] = makeErrorWrapper(ctx, propertyName);
        else wrapper[propertyName] = ctx[propertyName];
        // Override the getError function with one that returns our saved results.
        wrapper.getError = function() {
            for(var err in glErrorShadow)if (glErrorShadow[err]) {
                glErrorShadow[err] = false;
                return err;
            }
            return ctx.NO_ERROR;
        };
        return wrapper;
    }
    function resetToInitialState(ctx) {
        var numAttribs = ctx.getParameter(ctx.MAX_VERTEX_ATTRIBS);
        var tmp = ctx.createBuffer();
        ctx.bindBuffer(ctx.ARRAY_BUFFER, tmp);
        for(var ii = 0; ii < numAttribs; ++ii){
            ctx.disableVertexAttribArray(ii);
            ctx.vertexAttribPointer(ii, 4, ctx.FLOAT, false, 0, 0);
            ctx.vertexAttrib1f(ii, 0);
        }
        ctx.deleteBuffer(tmp);
        var numTextureUnits = ctx.getParameter(ctx.MAX_TEXTURE_IMAGE_UNITS);
        for(var ii = 0; ii < numTextureUnits; ++ii){
            ctx.activeTexture(ctx.TEXTURE0 + ii);
            ctx.bindTexture(ctx.TEXTURE_CUBE_MAP, null);
            ctx.bindTexture(ctx.TEXTURE_2D, null);
        }
        ctx.activeTexture(ctx.TEXTURE0);
        ctx.useProgram(null);
        ctx.bindBuffer(ctx.ARRAY_BUFFER, null);
        ctx.bindBuffer(ctx.ELEMENT_ARRAY_BUFFER, null);
        ctx.bindFramebuffer(ctx.FRAMEBUFFER, null);
        ctx.bindRenderbuffer(ctx.RENDERBUFFER, null);
        ctx.disable(ctx.BLEND);
        ctx.disable(ctx.CULL_FACE);
        ctx.disable(ctx.DEPTH_TEST);
        ctx.disable(ctx.DITHER);
        ctx.disable(ctx.SCISSOR_TEST);
        ctx.blendColor(0, 0, 0, 0);
        ctx.blendEquation(ctx.FUNC_ADD);
        ctx.blendFunc(ctx.ONE, ctx.ZERO);
        ctx.clearColor(0, 0, 0, 0);
        ctx.clearDepth(1);
        ctx.clearStencil(-1);
        ctx.colorMask(true, true, true, true);
        ctx.cullFace(ctx.BACK);
        ctx.depthFunc(ctx.LESS);
        ctx.depthMask(true);
        ctx.depthRange(0, 1);
        ctx.frontFace(ctx.CCW);
        ctx.hint(ctx.GENERATE_MIPMAP_HINT, ctx.DONT_CARE);
        ctx.lineWidth(1);
        ctx.pixelStorei(ctx.PACK_ALIGNMENT, 4);
        ctx.pixelStorei(ctx.UNPACK_ALIGNMENT, 4);
        ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, false);
        ctx.pixelStorei(ctx.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        // TODO: Delete this IF.
        if (ctx.UNPACK_COLORSPACE_CONVERSION_WEBGL) ctx.pixelStorei(ctx.UNPACK_COLORSPACE_CONVERSION_WEBGL, ctx.BROWSER_DEFAULT_WEBGL);
        ctx.polygonOffset(0, 0);
        ctx.sampleCoverage(1, false);
        ctx.scissor(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.stencilFunc(ctx.ALWAYS, 0, 0xffffffff);
        ctx.stencilMask(0xffffffff);
        ctx.stencilOp(ctx.KEEP, ctx.KEEP, ctx.KEEP);
        ctx.viewport(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
        ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT | ctx.STENCIL_BUFFER_BIT);
        // TODO: This should NOT be needed but Firefox fails with 'hint'
        while(ctx.getError());
    }
    function makeLostContextSimulatingContext(ctx) {
        var wrapper_ = {};
        var contextId_ = 1;
        var contextLost_ = false;
        var resourceId_ = 0;
        var resourceDb_ = [];
        var onLost_ = undefined;
        var onRestored_ = undefined;
        var nextOnRestored_ = undefined;
        // Holds booleans for each GL error so can simulate errors.
        var glErrorShadow_ = {};
        function isWebGLObject(obj) {
            //return false;
            return obj instanceof WebGLBuffer || obj instanceof WebGLFramebuffer || obj instanceof WebGLProgram || obj instanceof WebGLRenderbuffer || obj instanceof WebGLShader || obj instanceof WebGLTexture;
        }
        function checkResources(args) {
            for(var ii = 0; ii < args.length; ++ii){
                var arg = args[ii];
                if (isWebGLObject(arg)) return arg.__webglDebugContextLostId__ == contextId_;
            }
            return true;
        }
        function clearErrors() {
            var k = Object.keys(glErrorShadow_);
            for(var ii = 0; ii < k.length; ++ii)delete glErrorShdow_[k];
        }
        // Makes a function that simulates WebGL when out of context.
        function makeLostContextWrapper(ctx, functionName) {
            var f = ctx[functionName];
            return function() {
                // Only call the functions if the context is not lost.
                if (!contextLost_) {
                    if (!checkResources(arguments)) {
                        glErrorShadow_[ctx.INVALID_OPERATION] = true;
                        return;
                    }
                    var result = f.apply(ctx, arguments);
                    return result;
                }
            };
        }
        for(var propertyName in ctx)if (typeof ctx[propertyName] == "function") wrapper_[propertyName] = makeLostContextWrapper(ctx, propertyName);
        else wrapper_[propertyName] = ctx[propertyName];
        function makeWebGLContextEvent(statusMessage) {
            return {
                statusMessage: statusMessage
            };
        }
        function freeResources() {
            for(var ii = 0; ii < resourceDb_.length; ++ii){
                var resource = resourceDb_[ii];
                if (resource instanceof WebGLBuffer) ctx.deleteBuffer(resource);
                else if (resource instanceof WebctxFramebuffer) ctx.deleteFramebuffer(resource);
                else if (resource instanceof WebctxProgram) ctx.deleteProgram(resource);
                else if (resource instanceof WebctxRenderbuffer) ctx.deleteRenderbuffer(resource);
                else if (resource instanceof WebctxShader) ctx.deleteShader(resource);
                else if (resource instanceof WebctxTexture) ctx.deleteTexture(resource);
            }
        }
        wrapper_.loseContext = function() {
            if (!contextLost_) {
                contextLost_ = true;
                ++contextId_;
                while(ctx.getError());
                clearErrors();
                glErrorShadow_[ctx.CONTEXT_LOST_WEBGL] = true;
                setTimeout(function() {
                    if (onLost_) onLost_(makeWebGLContextEvent("context lost"));
                }, 0);
            }
        };
        wrapper_.restoreContext = function() {
            if (contextLost_) {
                if (onRestored_) setTimeout(function() {
                    freeResources();
                    resetToInitialState(ctx);
                    contextLost_ = false;
                    if (onRestored_) {
                        var callback = onRestored_;
                        onRestored_ = nextOnRestored_;
                        nextOnRestored_ = undefined;
                        callback(makeWebGLContextEvent("context restored"));
                    }
                }, 0);
                else throw "You can not restore the context without a listener";
            }
        };
        // Wrap a few functions specially.
        wrapper_.getError = function() {
            if (!contextLost_) {
                var err;
                while(err = ctx.getError())glErrorShadow_[err] = true;
            }
            for(var err in glErrorShadow_)if (glErrorShadow_[err]) {
                delete glErrorShadow_[err];
                return err;
            }
            return ctx.NO_ERROR;
        };
        var creationFunctions = [
            "createBuffer",
            "createFramebuffer",
            "createProgram",
            "createRenderbuffer",
            "createShader",
            "createTexture"
        ];
        for(var ii = 0; ii < creationFunctions.length; ++ii){
            var functionName = creationFunctions[ii];
            wrapper_[functionName] = function(f) {
                return function() {
                    if (contextLost_) return null;
                    var obj = f.apply(ctx, arguments);
                    obj.__webglDebugContextLostId__ = contextId_;
                    resourceDb_.push(obj);
                    return obj;
                };
            }(ctx[functionName]);
        }
        var functionsThatShouldReturnNull = [
            "getActiveAttrib",
            "getActiveUniform",
            "getBufferParameter",
            "getContextAttributes",
            "getAttachedShaders",
            "getFramebufferAttachmentParameter",
            "getParameter",
            "getProgramParameter",
            "getProgramInfoLog",
            "getRenderbufferParameter",
            "getShaderParameter",
            "getShaderInfoLog",
            "getShaderSource",
            "getTexParameter",
            "getUniform",
            "getUniformLocation",
            "getVertexAttrib"
        ];
        for(var ii = 0; ii < functionsThatShouldReturnNull.length; ++ii){
            var functionName = functionsThatShouldReturnNull[ii];
            wrapper_[functionName] = function(f) {
                return function() {
                    if (contextLost_) return null;
                    return f.apply(ctx, arguments);
                };
            }(wrapper_[functionName]);
        }
        var isFunctions = [
            "isBuffer",
            "isEnabled",
            "isFramebuffer",
            "isProgram",
            "isRenderbuffer",
            "isShader",
            "isTexture"
        ];
        for(var ii = 0; ii < isFunctions.length; ++ii){
            var functionName = isFunctions[ii];
            wrapper_[functionName] = function(f) {
                return function() {
                    if (contextLost_) return false;
                    return f.apply(ctx, arguments);
                };
            }(wrapper_[functionName]);
        }
        wrapper_.checkFramebufferStatus = function(f) {
            return function() {
                if (contextLost_) return ctx.FRAMEBUFFER_UNSUPPORTED;
                return f.apply(ctx, arguments);
            };
        }(wrapper_.checkFramebufferStatus);
        wrapper_.getAttribLocation = function(f) {
            return function() {
                if (contextLost_) return -1;
                return f.apply(ctx, arguments);
            };
        }(wrapper_.getAttribLocation);
        wrapper_.getVertexAttribOffset = function(f) {
            return function() {
                if (contextLost_) return 0;
                return f.apply(ctx, arguments);
            };
        }(wrapper_.getVertexAttribOffset);
        wrapper_.isContextLost = function() {
            return contextLost_;
        };
        function wrapEvent(listener) {
            if (typeof listener == "function") return listener;
            else return function(info) {
                listener.handleEvent(info);
            };
        }
        wrapper_.registerOnContextLostListener = function(listener) {
            onLost_ = wrapEvent(listener);
        };
        wrapper_.registerOnContextRestoredListener = function(listener) {
            if (contextLost_) nextOnRestored_ = wrapEvent(listener);
            else onRestored_ = wrapEvent(listener);
        };
        return wrapper_;
    }
    return {
        /**
     * Initializes this module. Safe to call more than once.
     * @param {!WebGLRenderingContext} ctx A WebGL context. If
     *    you have more than one context it doesn't matter which one
     *    you pass in, it is only used to pull out constants.
     */ init: init,
        /**
     * Returns true or false if value matches any WebGL enum
     * @param {*} value Value to check if it might be an enum.
     * @return {boolean} True if value matches one of the WebGL defined enums
     */ mightBeEnum: mightBeEnum,
        /**
     * Gets an string version of an WebGL enum.
     *
     * Example:
     *   WebGLDebugUtil.init(ctx);
     *   var str = WebGLDebugUtil.glEnumToString(ctx.getError());
     *
     * @param {number} value Value to return an enum for
     * @return {string} The string version of the enum.
     */ glEnumToString: glEnumToString,
        /**
     * Converts the argument of a WebGL function to a string.
     * Attempts to convert enum arguments to strings.
     *
     * Example:
     *   WebGLDebugUtil.init(ctx);
     *   var str = WebGLDebugUtil.glFunctionArgToString('bindTexture', 0, gl.TEXTURE_2D);
     *
     * would return 'TEXTURE_2D'
     *
     * @param {string} functionName the name of the WebGL function.
     * @param {number} argumentIndx the index of the argument.
     * @param {*} value The value of the argument.
     * @return {string} The value as a string.
     */ glFunctionArgToString: glFunctionArgToString,
        /**
     * Given a WebGL context returns a wrapped context that calls
     * gl.getError after every command and calls a function if the
     * result is not NO_ERROR.
     *
     * You can supply your own function if you want. For example, if you'd like
     * an exception thrown on any GL error you could do this
     *
     *    function throwOnGLError(err, funcName, args) {
     *      throw WebGLDebugUtils.glEnumToString(err) + " was caused by call to" +
     *            funcName;
     *    };
     *
     *    ctx = WebGLDebugUtils.makeDebugContext(
     *        canvas.getContext("webgl"), throwOnGLError);
     *
     * @param {!WebGLRenderingContext} ctx The webgl context to wrap.
     * @param {!function(err, funcName, args): void} opt_onErrorFunc The function
     *     to call when gl.getError returns an error. If not specified the default
     *     function calls console.log with a message.
     */ makeDebugContext: makeDebugContext,
        /**
     * Given a WebGL context returns a wrapped context that adds 4
     * functions.
     *
     * ctx.loseContext:
     *   simulates a lost context event.
     *
     * ctx.restoreContext:
     *   simulates the context being restored.
     *
     * ctx.registerOnContextLostListener(listener):
     *   lets you register a listener for context lost. Use instead
     *   of addEventListener('webglcontextlostevent', listener);
     *
     * ctx.registerOnContextRestoredListener(listener):
     *   lets you register a listener for context restored. Use
     *   instead of addEventListener('webglcontextrestored',
     *   listener);
     *
     * @param {!WebGLRenderingContext} ctx The webgl context to wrap.
     */ makeLostContextSimulatingContext: makeLostContextSimulatingContext,
        /**
     * Resets a context to the initial state.
     * @param {!WebGLRenderingContext} ctx The webgl context to
     *     reset.
     */ resetToInitialState: resetToInitialState
    };
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49Q86":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getContext() {
    // Retrieve <canvas> element
    var canvas = document.getElementById("webgl");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Get the rendering context for WebGL
    const gl = canvas.getContext("webgl");
    if (!gl) console.log("Failed to get the rendering context for WebGL");
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.2, 0.2, 0.25, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    window.addEventListener("resize", (e)=>{
        gl.canvas.width = window.innerWidth;
        gl.canvas.height = window.innerHeight;
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    });
    return gl;
}
exports.default = getContext;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWRa6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cuonMatrixCse160 = require("../lib/cuon-matrix-cse160");
class Camera {
    constructor(position = [
        0,
        1,
        2
    ], rotation = [
        0,
        0,
        0
    ]){
        this.position = new (0, _cuonMatrixCse160.Vector3)(position);
        this.rotation = new (0, _cuonMatrixCse160.Vector3)(rotation);
        this.viewMatrix = new (0, _cuonMatrixCse160.Matrix4)();
        this.projectionMatrix = new (0, _cuonMatrixCse160.Matrix4)();
        this.up = new (0, _cuonMatrixCse160.Vector3)([
            0,
            1,
            0
        ]);
        this.aspect = window.innerWidth / window.innerHeight;
        this.near = 0.01;
        this.far = 100;
        this.fov = 50;
        window.addEventListener("resize", (e)=>{
            this.aspect = window.innerWidth / window.innerHeight;
            this.calculateViewProjection();
        });
        this.calculateViewProjection();
    }
    calculateViewProjection() {
        let [rx, ry, rz] = this.rotation.elements;
        this.viewMatrix.setTranslate(...this.position.elements);
        this.viewMatrix.rotate(ry, 0, 1, 0).rotate(rx, 1, 0, 0).rotate(rz, 0, 0, 1);
        this.viewMatrix.invert();
        this.projectionMatrix.setPerspective(this.fov, this.aspect, this.near, this.far);
    }
}
exports.default = Camera;

},{"../lib/cuon-matrix-cse160":"adUeE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adUeE":[function(require,module,exports) {
/* eslint-disable no-throw-literal */ // cuon-matrix.js (c) 2012 kanda and matsuda
/**
 * This is a class treating 4x4 matrix.
 * This class contains the function that is equivalent to OpenGL matrix stack.
 * The matrix after conversion is calculated by multiplying a conversion matrix from the right.
 * The matrix is replaced by the calculated result.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * note this is required to use the imports in index.js
 * this is required for the type of JS we need to write in codesandbox
 */ parcelHelpers.export(exports, "Vector3", ()=>Vector3);
parcelHelpers.export(exports, "Vector4", ()=>Vector4);
parcelHelpers.export(exports, "Matrix4", ()=>Matrix4);
class Vector3 {
    constructor(opt_src){
        var v = new Float32Array(3);
        if (opt_src && typeof opt_src === "object") {
            v[0] = opt_src[0];
            v[1] = opt_src[1];
            v[2] = opt_src[2];
        }
        this.elements = v;
    }
    /**
   * Copy vector.
   * @param src source vector
   * @return this
   */ set(src) {
        var i, s, d;
        s = src.elements;
        d = this.elements;
        if (s === d) return;
        for(i = 0; i < 3; ++i)d[i] = s[i];
        return this;
    }
    /**
   * Add other to this vector.
   * @return this
   */ add(other) {
        for(var i = 0; i < 3; i++)this.elements[i] += other.elements[i];
        // Don't delete the return statement.
        return this;
    }
    /**
   * Subtract other from this vector.
   * @return this
   */ sub(other) {
        for(var i = 0; i < 3; i++)this.elements[i] -= other.elements[i];
        // Don't delete the return statement.
        return this;
    }
    /**
   * Divide this vector by a scalar.
   * @return this
   */ div(scalar) {
        for(var i = 0; i < 3; i++)this.elements[i] /= scalar;
        // Don't delete the return statement.
        return this;
    }
    /**
   * Multiply this vector by a scalar.
   * @return this
   */ mul(scalar) {
        for(var i = 0; i < 3; i++)this.elements[i] *= scalar;
        // Don't delete the return statement.
        return this;
    }
    /**
   * Calcualte the dop product between this vector and other.
   * @return scalar
   */ static dot(other1, other2) {
        let d = 0;
        for(var i = 0; i < 3; i++)d += other1.elements[i] * other2.elements[i];
        // Don't delete the return statement.
        return d;
    }
    /**
   * Calcualte the cross product between this vector and other.
   * @return new vector
   */ static cross(other1, other2) {
        let a = other1.elements;
        let b = other2.elements;
        let i = a[1] * b[2] - a[2] * b[1];
        let j = -1 * (a[0] * b[2] - a[2] * b[0]);
        let k = a[0] * b[1] - a[1] * b[0];
        let v3 = new Vector3([
            i,
            j,
            k
        ]); // Modify this line to calculate cross product between other1 and other2.
        // Don't delete the return statement.
        return v3;
    }
    /**
   * Calculate the magnitude (or length) of this vector.
   * @return scalar
   */ magnitude() {
        // Insert your code here.
        let m = 0; // Modify this line to calculate this vector's magnitude.
        for(var i = 0; i < 3; i++)m += this.elements[i] * this.elements[i];
        m = Math.sqrt(m);
        // Don't delete the return statement.
        return m;
    }
    /**
   * Normalize this vector.
   * @return this
   */ normalize() {
        this.div(this.magnitude());
        // Don't delete the return statement.
        return this;
    }
}
class Vector4 {
    /**
   * Constructor of Vector4
   * If opt_src is specified, new vector is initialized by opt_src.
   * @param opt_src source vector(option)
   */ constructor(opt_src){
        var v = new Float32Array(4);
        if (opt_src && typeof opt_src === "object") {
            v[0] = opt_src[0];
            v[1] = opt_src[1];
            v[2] = opt_src[2];
            v[3] = opt_src[3];
        }
        this.elements = v;
    }
}
class Matrix4 {
    /**
   * Constructor of Matrix4
   * If opt_src is specified, new matrix is initialized by opt_src.
   * Otherwise, new matrix is initialized by identity matrix.
   * @param opt_src source matrix(option)
   */ constructor(opt_src){
        var i, s, d;
        if (opt_src && typeof opt_src === "object" && opt_src.hasOwnProperty("elements")) {
            s = opt_src.elements;
            d = new Float32Array(16);
            for(i = 0; i < 16; ++i)d[i] = s[i];
            this.elements = d;
        } else this.elements = new Float32Array([
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            1
        ]);
    }
    /**
   * Set the identity matrix.
   * @return this
   */ setIdentity() {
        var e = this.elements;
        e[0] = 1;
        e[4] = 0;
        e[8] = 0;
        e[12] = 0;
        e[1] = 0;
        e[5] = 1;
        e[9] = 0;
        e[13] = 0;
        e[2] = 0;
        e[6] = 0;
        e[10] = 1;
        e[14] = 0;
        e[3] = 0;
        e[7] = 0;
        e[11] = 0;
        e[15] = 1;
        return this;
    }
    /**
   * Copy matrix.
   * @param src source matrix
   * @return this
   */ set(src) {
        var i, s, d;
        s = src.elements;
        d = this.elements;
        if (s === d) return;
        for(i = 0; i < 16; ++i)d[i] = s[i];
        return this;
    }
    /**
   * Multiply the matrix from the right.
   * @param other The multiply matrix
   * @return this
   */ multiply(other) {
        var i, e, a, b, ai0, ai1, ai2, ai3;
        // Calculate e = a * b
        e = this.elements;
        a = this.elements;
        b = other.elements;
        // If e equals b, copy b to temporary matrix.
        if (e === b) {
            b = new Float32Array(16);
            for(i = 0; i < 16; ++i)b[i] = e[i];
        }
        for(i = 0; i < 4; i++){
            ai0 = a[i];
            ai1 = a[i + 4];
            ai2 = a[i + 8];
            ai3 = a[i + 12];
            e[i] = ai0 * b[0] + ai1 * b[1] + ai2 * b[2] + ai3 * b[3];
            e[i + 4] = ai0 * b[4] + ai1 * b[5] + ai2 * b[6] + ai3 * b[7];
            e[i + 8] = ai0 * b[8] + ai1 * b[9] + ai2 * b[10] + ai3 * b[11];
            e[i + 12] = ai0 * b[12] + ai1 * b[13] + ai2 * b[14] + ai3 * b[15];
        }
        return this;
    }
    concat(other) {
        return this.multiply(other);
    }
    /**
   * Multiply the three-dimensional vector.
   * @param pos  The multiply vector
   * @return The result of multiplication(Float32Array)
   */ multiplyVector3(pos) {
        var e = this.elements;
        var p = pos.elements;
        var v = new Vector3();
        var result = v.elements;
        result[0] = p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + e[12];
        result[1] = p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + e[13];
        result[2] = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + e[14];
        return v;
    }
    /**
   * Multiply the four-dimensional vector.
   * @param pos  The multiply vector
   * @return The result of multiplication(Float32Array)
   */ multiplyVector4(pos) {
        var e = this.elements;
        var p = pos.elements;
        var v = new Vector4();
        var result = v.elements;
        result[0] = p[0] * e[0] + p[1] * e[4] + p[2] * e[8] + p[3] * e[12];
        result[1] = p[0] * e[1] + p[1] * e[5] + p[2] * e[9] + p[3] * e[13];
        result[2] = p[0] * e[2] + p[1] * e[6] + p[2] * e[10] + p[3] * e[14];
        result[3] = p[0] * e[3] + p[1] * e[7] + p[2] * e[11] + p[3] * e[15];
        return v;
    }
    /**
   * Transpose the matrix.
   * @return this
   */ transpose() {
        var e, t;
        e = this.elements;
        t = e[1];
        e[1] = e[4];
        e[4] = t;
        t = e[2];
        e[2] = e[8];
        e[8] = t;
        t = e[3];
        e[3] = e[12];
        e[12] = t;
        t = e[6];
        e[6] = e[9];
        e[9] = t;
        t = e[7];
        e[7] = e[13];
        e[13] = t;
        t = e[11];
        e[11] = e[14];
        e[14] = t;
        return this;
    }
    /**
   * Calculate the inverse matrix of specified matrix, and set to this.
   * @param other The source matrix
   * @return this
   */ setInverseOf(other) {
        var i, s, d, inv, det;
        s = other.elements;
        d = this.elements;
        inv = new Float32Array(16);
        inv[0] = s[5] * s[10] * s[15] - s[5] * s[11] * s[14] - s[9] * s[6] * s[15] + s[9] * s[7] * s[14] + s[13] * s[6] * s[11] - s[13] * s[7] * s[10];
        inv[4] = -s[4] * s[10] * s[15] + s[4] * s[11] * s[14] + s[8] * s[6] * s[15] - s[8] * s[7] * s[14] - s[12] * s[6] * s[11] + s[12] * s[7] * s[10];
        inv[8] = s[4] * s[9] * s[15] - s[4] * s[11] * s[13] - s[8] * s[5] * s[15] + s[8] * s[7] * s[13] + s[12] * s[5] * s[11] - s[12] * s[7] * s[9];
        inv[12] = -s[4] * s[9] * s[14] + s[4] * s[10] * s[13] + s[8] * s[5] * s[14] - s[8] * s[6] * s[13] - s[12] * s[5] * s[10] + s[12] * s[6] * s[9];
        inv[1] = -s[1] * s[10] * s[15] + s[1] * s[11] * s[14] + s[9] * s[2] * s[15] - s[9] * s[3] * s[14] - s[13] * s[2] * s[11] + s[13] * s[3] * s[10];
        inv[5] = s[0] * s[10] * s[15] - s[0] * s[11] * s[14] - s[8] * s[2] * s[15] + s[8] * s[3] * s[14] + s[12] * s[2] * s[11] - s[12] * s[3] * s[10];
        inv[9] = -s[0] * s[9] * s[15] + s[0] * s[11] * s[13] + s[8] * s[1] * s[15] - s[8] * s[3] * s[13] - s[12] * s[1] * s[11] + s[12] * s[3] * s[9];
        inv[13] = s[0] * s[9] * s[14] - s[0] * s[10] * s[13] - s[8] * s[1] * s[14] + s[8] * s[2] * s[13] + s[12] * s[1] * s[10] - s[12] * s[2] * s[9];
        inv[2] = s[1] * s[6] * s[15] - s[1] * s[7] * s[14] - s[5] * s[2] * s[15] + s[5] * s[3] * s[14] + s[13] * s[2] * s[7] - s[13] * s[3] * s[6];
        inv[6] = -s[0] * s[6] * s[15] + s[0] * s[7] * s[14] + s[4] * s[2] * s[15] - s[4] * s[3] * s[14] - s[12] * s[2] * s[7] + s[12] * s[3] * s[6];
        inv[10] = s[0] * s[5] * s[15] - s[0] * s[7] * s[13] - s[4] * s[1] * s[15] + s[4] * s[3] * s[13] + s[12] * s[1] * s[7] - s[12] * s[3] * s[5];
        inv[14] = -s[0] * s[5] * s[14] + s[0] * s[6] * s[13] + s[4] * s[1] * s[14] - s[4] * s[2] * s[13] - s[12] * s[1] * s[6] + s[12] * s[2] * s[5];
        inv[3] = -s[1] * s[6] * s[11] + s[1] * s[7] * s[10] + s[5] * s[2] * s[11] - s[5] * s[3] * s[10] - s[9] * s[2] * s[7] + s[9] * s[3] * s[6];
        inv[7] = s[0] * s[6] * s[11] - s[0] * s[7] * s[10] - s[4] * s[2] * s[11] + s[4] * s[3] * s[10] + s[8] * s[2] * s[7] - s[8] * s[3] * s[6];
        inv[11] = -s[0] * s[5] * s[11] + s[0] * s[7] * s[9] + s[4] * s[1] * s[11] - s[4] * s[3] * s[9] - s[8] * s[1] * s[7] + s[8] * s[3] * s[5];
        inv[15] = s[0] * s[5] * s[10] - s[0] * s[6] * s[9] - s[4] * s[1] * s[10] + s[4] * s[2] * s[9] + s[8] * s[1] * s[6] - s[8] * s[2] * s[5];
        det = s[0] * inv[0] + s[1] * inv[4] + s[2] * inv[8] + s[3] * inv[12];
        if (det === 0) return this;
        det = 1 / det;
        for(i = 0; i < 16; i++)d[i] = inv[i] * det;
        return this;
    }
    /**
   * Calculate the inverse matrix of this, and set to this.
   * @return this
   */ invert() {
        return this.setInverseOf(this);
    }
    /**
   * Set the orthographic projection matrix.
   * @param left The coordinate of the left of clipping plane.
   * @param right The coordinate of the right of clipping plane.
   * @param bottom The coordinate of the bottom of clipping plane.
   * @param top The coordinate of the top top clipping plane.
   * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
   * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
   * @return this
   */ setOrtho(left, right, bottom, top, near, far) {
        var e, rw, rh, rd;
        if (left === right || bottom === top || near === far) throw "null frustum";
        rw = 1 / (right - left);
        rh = 1 / (top - bottom);
        rd = 1 / (far - near);
        e = this.elements;
        e[0] = 2 * rw;
        e[1] = 0;
        e[2] = 0;
        e[3] = 0;
        e[4] = 0;
        e[5] = 2 * rh;
        e[6] = 0;
        e[7] = 0;
        e[8] = 0;
        e[9] = 0;
        e[10] = -2 * rd;
        e[11] = 0;
        e[12] = -(right + left) * rw;
        e[13] = -(top + bottom) * rh;
        e[14] = -(far + near) * rd;
        e[15] = 1;
        return this;
    }
    /**
   * Multiply the orthographic projection matrix from the right.
   * @param left The coordinate of the left of clipping plane.
   * @param right The coordinate of the right of clipping plane.
   * @param bottom The coordinate of the bottom of clipping plane.
   * @param top The coordinate of the top top clipping plane.
   * @param near The distances to the nearer depth clipping plane. This value is minus if the plane is to be behind the viewer.
   * @param far The distances to the farther depth clipping plane. This value is minus if the plane is to be behind the viewer.
   * @return this
   */ ortho(left, right, bottom, top, near, far) {
        return this.concat(new Matrix4().setOrtho(left, right, bottom, top, near, far));
    }
    /**
   * Set the perspective projection matrix.
   * @param left The coordinate of the left of clipping plane.
   * @param right The coordinate of the right of clipping plane.
   * @param bottom The coordinate of the bottom of clipping plane.
   * @param top The coordinate of the top top clipping plane.
   * @param near The distances to the nearer depth clipping plane. This value must be plus value.
   * @param far The distances to the farther depth clipping plane. This value must be plus value.
   * @return this
   */ setFrustum(left, right, bottom, top, near, far) {
        var e, rw, rh, rd;
        if (left === right || top === bottom || near === far) throw "null frustum";
        if (near <= 0) throw "near <= 0";
        if (far <= 0) throw "far <= 0";
        rw = 1 / (right - left);
        rh = 1 / (top - bottom);
        rd = 1 / (far - near);
        e = this.elements;
        e[0] = 2 * near * rw;
        e[1] = 0;
        e[2] = 0;
        e[3] = 0;
        e[4] = 0;
        e[5] = 2 * near * rh;
        e[6] = 0;
        e[7] = 0;
        e[8] = (right + left) * rw;
        e[9] = (top + bottom) * rh;
        e[10] = -(far + near) * rd;
        e[11] = -1;
        e[12] = 0;
        e[13] = 0;
        e[14] = -2 * near * far * rd;
        e[15] = 0;
        return this;
    }
    /**
   * Multiply the perspective projection matrix from the right.
   * @param left The coordinate of the left of clipping plane.
   * @param right The coordinate of the right of clipping plane.
   * @param bottom The coordinate of the bottom of clipping plane.
   * @param top The coordinate of the top top clipping plane.
   * @param near The distances to the nearer depth clipping plane. This value must be plus value.
   * @param far The distances to the farther depth clipping plane. This value must be plus value.
   * @return this
   */ frustum(left, right, bottom, top, near, far) {
        return this.concat(new Matrix4().setFrustum(left, right, bottom, top, near, far));
    }
    /**
   * Set the perspective projection matrix by fovy and aspect.
   * @param fovy The angle between the upper and lower sides of the frustum.
   * @param aspect The aspect ratio of the frustum. (width/height)
   * @param near The distances to the nearer depth clipping plane. This value must be plus value.
   * @param far The distances to the farther depth clipping plane. This value must be plus value.
   * @return this
   */ setPerspective(fovy, aspect, near, far) {
        var e, rd, s, ct;
        if (near === far || aspect === 0) throw "null frustum";
        if (near <= 0) throw "near <= 0";
        if (far <= 0) throw "far <= 0";
        fovy = Math.PI * fovy / 180 / 2;
        s = Math.sin(fovy);
        if (s === 0) throw "null frustum";
        rd = 1 / (far - near);
        ct = Math.cos(fovy) / s;
        e = this.elements;
        e[0] = ct / aspect;
        e[1] = 0;
        e[2] = 0;
        e[3] = 0;
        e[4] = 0;
        e[5] = ct;
        e[6] = 0;
        e[7] = 0;
        e[8] = 0;
        e[9] = 0;
        e[10] = -(far + near) * rd;
        e[11] = -1;
        e[12] = 0;
        e[13] = 0;
        e[14] = -2 * near * far * rd;
        e[15] = 0;
        return this;
    }
    /**
   * Multiply the perspective projection matrix from the right.
   * @param fovy The angle between the upper and lower sides of the frustum.
   * @param aspect The aspect ratio of the frustum. (width/height)
   * @param near The distances to the nearer depth clipping plane. This value must be plus value.
   * @param far The distances to the farther depth clipping plane. This value must be plus value.
   * @return this
   */ perspective(fovy, aspect, near, far) {
        return this.concat(new Matrix4().setPerspective(fovy, aspect, near, far));
    }
    /**
   * Set the matrix for scaling.
   * @param x The scale factor along the X axis
   * @param y The scale factor along the Y axis
   * @param z The scale factor along the Z axis
   * @return this
   */ setScale(x, y, z) {
        var e = this.elements;
        e[0] = x;
        e[4] = 0;
        e[8] = 0;
        e[12] = 0;
        e[1] = 0;
        e[5] = y;
        e[9] = 0;
        e[13] = 0;
        e[2] = 0;
        e[6] = 0;
        e[10] = z;
        e[14] = 0;
        e[3] = 0;
        e[7] = 0;
        e[11] = 0;
        e[15] = 1;
        return this;
    }
    /**
   * Multiply the matrix for scaling from the right.
   * @param x The scale factor along the X axis
   * @param y The scale factor along the Y axis
   * @param z The scale factor along the Z axis
   * @return this
   */ scale(x, y, z) {
        var e = this.elements;
        e[0] *= x;
        e[4] *= y;
        e[8] *= z;
        e[1] *= x;
        e[5] *= y;
        e[9] *= z;
        e[2] *= x;
        e[6] *= y;
        e[10] *= z;
        e[3] *= x;
        e[7] *= y;
        e[11] *= z;
        return this;
    }
    /**
   * Set the matrix for translation.
   * @param x The X value of a translation.
   * @param y The Y value of a translation.
   * @param z The Z value of a translation.
   * @return this
   */ setTranslate(x, y, z) {
        var e = this.elements;
        e[0] = 1;
        e[4] = 0;
        e[8] = 0;
        e[12] = x;
        e[1] = 0;
        e[5] = 1;
        e[9] = 0;
        e[13] = y;
        e[2] = 0;
        e[6] = 0;
        e[10] = 1;
        e[14] = z;
        e[3] = 0;
        e[7] = 0;
        e[11] = 0;
        e[15] = 1;
        return this;
    }
    /**
   * Multiply the matrix for translation from the right.
   * @param x The X value of a translation.
   * @param y The Y value of a translation.
   * @param z The Z value of a translation.
   * @return this
   */ translate(x, y, z) {
        var e = this.elements;
        e[12] += e[0] * x + e[4] * y + e[8] * z;
        e[13] += e[1] * x + e[5] * y + e[9] * z;
        e[14] += e[2] * x + e[6] * y + e[10] * z;
        e[15] += e[3] * x + e[7] * y + e[11] * z;
        return this;
    }
    /**
   * Set the matrix for rotation.
   * The vector of rotation axis may not be normalized.
   * @param angle The angle of rotation (degrees)
   * @param x The X coordinate of vector of rotation axis.
   * @param y The Y coordinate of vector of rotation axis.
   * @param z The Z coordinate of vector of rotation axis.
   * @return this
   */ setRotate(angle, x, y, z) {
        var e, s, c, len, rlen, nc, xy, yz, zx, xs, ys, zs;
        angle = Math.PI * angle / 180;
        e = this.elements;
        s = Math.sin(angle);
        c = Math.cos(angle);
        if (0 !== x && 0 === y && 0 === z) {
            // Rotation around X axis
            if (x < 0) s = -s;
            e[0] = 1;
            e[4] = 0;
            e[8] = 0;
            e[12] = 0;
            e[1] = 0;
            e[5] = c;
            e[9] = -s;
            e[13] = 0;
            e[2] = 0;
            e[6] = s;
            e[10] = c;
            e[14] = 0;
            e[3] = 0;
            e[7] = 0;
            e[11] = 0;
            e[15] = 1;
        } else if (0 === x && 0 !== y && 0 === z) {
            // Rotation around Y axis
            if (y < 0) s = -s;
            e[0] = c;
            e[4] = 0;
            e[8] = s;
            e[12] = 0;
            e[1] = 0;
            e[5] = 1;
            e[9] = 0;
            e[13] = 0;
            e[2] = -s;
            e[6] = 0;
            e[10] = c;
            e[14] = 0;
            e[3] = 0;
            e[7] = 0;
            e[11] = 0;
            e[15] = 1;
        } else if (0 === x && 0 === y && 0 !== z) {
            // Rotation around Z axis
            if (z < 0) s = -s;
            e[0] = c;
            e[4] = -s;
            e[8] = 0;
            e[12] = 0;
            e[1] = s;
            e[5] = c;
            e[9] = 0;
            e[13] = 0;
            e[2] = 0;
            e[6] = 0;
            e[10] = 1;
            e[14] = 0;
            e[3] = 0;
            e[7] = 0;
            e[11] = 0;
            e[15] = 1;
        } else {
            // Rotation around another axis
            len = Math.sqrt(x * x + y * y + z * z);
            if (len !== 1) {
                rlen = 1 / len;
                x *= rlen;
                y *= rlen;
                z *= rlen;
            }
            nc = 1 - c;
            xy = x * y;
            yz = y * z;
            zx = z * x;
            xs = x * s;
            ys = y * s;
            zs = z * s;
            e[0] = x * x * nc + c;
            e[1] = xy * nc + zs;
            e[2] = zx * nc - ys;
            e[3] = 0;
            e[4] = xy * nc - zs;
            e[5] = y * y * nc + c;
            e[6] = yz * nc + xs;
            e[7] = 0;
            e[8] = zx * nc + ys;
            e[9] = yz * nc - xs;
            e[10] = z * z * nc + c;
            e[11] = 0;
            e[12] = 0;
            e[13] = 0;
            e[14] = 0;
            e[15] = 1;
        }
        return this;
    }
    /**
   * Multiply the matrix for rotation from the right.
   * The vector of rotation axis may not be normalized.
   * @param angle The angle of rotation (degrees)
   * @param x The X coordinate of vector of rotation axis.
   * @param y The Y coordinate of vector of rotation axis.
   * @param z The Z coordinate of vector of rotation axis.
   * @return this
   */ rotate(angle, x, y, z) {
        return this.concat(new Matrix4().setRotate(angle, x, y, z));
    }
    /**
   * Set the viewing matrix.
   * @param eyeX, eyeY, eyeZ The position of the eye point.
   * @param centerX, centerY, centerZ The position of the reference point.
   * @param upX, upY, upZ The direction of the up vector.
   * @return this
   */ setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
        var e, fx, fy, fz, rlf, sx, sy, sz, rls, ux, uy, uz;
        fx = centerX - eyeX;
        fy = centerY - eyeY;
        fz = centerZ - eyeZ;
        // Normalize f.
        rlf = 1 / Math.sqrt(fx * fx + fy * fy + fz * fz);
        fx *= rlf;
        fy *= rlf;
        fz *= rlf;
        // Calculate cross product of f and up.
        sx = fy * upZ - fz * upY;
        sy = fz * upX - fx * upZ;
        sz = fx * upY - fy * upX;
        // Normalize s.
        rls = 1 / Math.sqrt(sx * sx + sy * sy + sz * sz);
        sx *= rls;
        sy *= rls;
        sz *= rls;
        // Calculate cross product of s and f.
        ux = sy * fz - sz * fy;
        uy = sz * fx - sx * fz;
        uz = sx * fy - sy * fx;
        // Set to this.
        e = this.elements;
        e[0] = sx;
        e[1] = ux;
        e[2] = -fx;
        e[3] = 0;
        e[4] = sy;
        e[5] = uy;
        e[6] = -fy;
        e[7] = 0;
        e[8] = sz;
        e[9] = uz;
        e[10] = -fz;
        e[11] = 0;
        e[12] = 0;
        e[13] = 0;
        e[14] = 0;
        e[15] = 1;
        // Translate.
        return this.translate(-eyeX, -eyeY, -eyeZ);
    }
    /**
   * Multiply the viewing matrix from the right.
   * @param eyeX, eyeY, eyeZ The position of the eye point.
   * @param centerX, centerY, centerZ The position of the reference point.
   * @param upX, upY, upZ The direction of the up vector.
   * @return this
   */ lookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ) {
        return this.concat(new Matrix4().setLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ));
    }
    /**
   * Multiply the matrix for project vertex to plane from the right.
   * @param plane The array[A, B, C, D] of the equation of plane "Ax + By + Cz + D = 0".
   * @param light The array which stored coordinates of the light. if light[3]=0, treated as parallel light.
   * @return this
   */ dropShadow(plane, light) {
        var mat = new Matrix4();
        var e = mat.elements;
        var dot = plane[0] * light[0] + plane[1] * light[1] + plane[2] * light[2] + plane[3] * light[3];
        e[0] = dot - light[0] * plane[0];
        e[1] = -light[1] * plane[0];
        e[2] = -light[2] * plane[0];
        e[3] = -light[3] * plane[0];
        e[4] = -light[0] * plane[1];
        e[5] = dot - light[1] * plane[1];
        e[6] = -light[2] * plane[1];
        e[7] = -light[3] * plane[1];
        e[8] = -light[0] * plane[2];
        e[9] = -light[1] * plane[2];
        e[10] = dot - light[2] * plane[2];
        e[11] = -light[3] * plane[2];
        e[12] = -light[0] * plane[3];
        e[13] = -light[1] * plane[3];
        e[14] = -light[2] * plane[3];
        e[15] = dot - light[3] * plane[3];
        return this.concat(mat);
    }
    /**
   * Multiply the matrix for project vertex to plane from the right.(Projected by parallel light.)
   * @param normX, normY, normZ The normal vector of the plane.(Not necessary to be normalized.)
   * @param planeX, planeY, planeZ The coordinate of arbitrary points on a plane.
   * @param lightX, lightY, lightZ The vector of the direction of light.(Not necessary to be normalized.)
   * @return this
   */ dropShadowDirectionally(normX, normY, normZ, planeX, planeY, planeZ, lightX, lightY, lightZ) {
        var a = planeX * normX + planeY * normY + planeZ * normZ;
        return this.dropShadow([
            normX,
            normY,
            normZ,
            -a
        ], [
            lightX,
            lightY,
            lightZ,
            0
        ]);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9msoh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cuonMatrixCse160 = require("../lib/cuon-matrix-cse160");
class Controls {
    constructor(gl, camera, rotation = [
        0,
        0,
        0
    ]){
        this.canvas = gl.canvas;
        this.camera = camera;
        this.mouse = new (0, _cuonMatrixCse160.Vector3)(); // will use as vector2
        this.rotation = new (0, _cuonMatrixCse160.Vector3)(rotation);
        this.matrix = new (0, _cuonMatrixCse160.Matrix4)();
        this.dragging = false;
        this.setHandlers();
    }
    setHandlers() {
        this.canvas.onmousedown = (e)=>{
            this.dragging = true;
            let x = e.clientX / e.target.clientWidth * 2.0 - 1.0;
            let y = -e.clientY / e.target.clientHeight * 2.0 + 1.0;
            this.mouse.elements.set([
                x,
                y,
                0
            ]);
        };
        this.canvas.onmouseup = this.canvas.onmouseleave = (e)=>{
            this.dragging = false;
        };
        this.canvas.onmousemove = (e)=>{
            let x = e.clientX / e.target.clientWidth * 2.0 - 1.0;
            let y = -e.clientY / e.target.clientHeight * 2.0 + 1.0;
            if (this.dragging) {
                let dx = x - this.mouse.elements[0];
                let dy = y - this.mouse.elements[1];
                this.rotation.elements[0] -= dy * 50;
                this.rotation.elements[1] += dx * 50;
                this.mouse.elements.set([
                    x,
                    y,
                    0
                ]);
            }
        };
    }
    update() {
        // linearly interpolate rotation of object towards desired rotation
        // results in smooth rotation of camera via mouse by lerping 20% each tick
        let x = 0.8 * this.camera.rotation.elements[0] + 0.2 * this.rotation.elements[0];
        let y = 0.8 * this.camera.rotation.elements[1] + 0.2 * this.rotation.elements[1];
        this.camera.rotation.elements.set([
            x,
            y,
            0
        ]);
    }
}
exports.default = Controls;

},{"../lib/cuon-matrix-cse160":"adUeE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQTr1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _plane = require("./primitives/Plane");
var _planeDefault = parcelHelpers.interopDefault(_plane);
var _ocean = require("./shaders/Ocean");
const Ocean = new (0, _planeDefault.default)(30, 30);
Ocean.scale.mul(100); // make it 100x100 units
Ocean.rotation.elements[0] = -90; // make it horizontal
Ocean.setShaders((0, _ocean.VertexShader), (0, _ocean.FragmentShader));
exports.default = Ocean;

},{"./primitives/Plane":"11M3Z","./shaders/Ocean":"8pyKN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"11M3Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cuonMatrixCse160 = require("../../lib/cuon-matrix-cse160");
var _cuonUtils = require("../../lib/cuon-utils");
var _normal = require("../shaders/Normal");
class Plane {
    constructor(widthSegments = 1, heightSegments = 1){
        // buffers
        this.vertexBuffer = null;
        this.indexBuffer = null;
        this.uvBuffer = null;
        this.normalBuffer = null;
        // shader programs
        this.vertexShader = (0, _normal.VertexShader);
        this.fragmentShader = (0, _normal.FragmentShader);
        this.program = null;
        // data arrays
        this.vertices = null;
        this.indices = null;
        this.uvs = null;
        this.normals = null;
        // transformations
        this.position = new (0, _cuonMatrixCse160.Vector3)([
            0,
            0,
            0
        ]);
        this.rotation = new (0, _cuonMatrixCse160.Vector3)([
            0,
            0,
            0
        ]);
        this.scale = new (0, _cuonMatrixCse160.Vector3)([
            1,
            1,
            1
        ]);
        this.modelMatrix = new (0, _cuonMatrixCse160.Matrix4)();
        this.normalMatrix = new (0, _cuonMatrixCse160.Matrix4)();
        this.generatePlane(widthSegments, heightSegments);
    }
    setShaders(vertShader, fragShader) {
        this.vertexShader = vertShader;
        this.fragmentShader = fragShader;
        this.program = null;
    }
    generatePlane(widthSegments, heightSegments) {
        const seg_width = 1.0 / widthSegments;
        const seg_height = 1.0 / widthSegments;
        const vertices = [];
        const indices = [];
        const uvs = [];
        const normals = [];
        /**
     * generate widthSegments by heightSegments grid of vertices centered on origin
     * generate uv's and normals along the way
     * */ for(let i = 0; i < heightSegments + 1; i++){
            const y = i * seg_height - 0.5;
            for(let j = 0; j < widthSegments + 1; j++){
                let x = j * seg_width - 0.5;
                vertices.push(x, -y, 0);
                // facing towards camera at first
                normals.push(0, 0, 1);
                uvs.push(j / widthSegments);
                uvs.push(1 - i / heightSegments);
            }
            for(let i = 0; i < heightSegments; i++)for(let j = 0; j < widthSegments; j++){
                let a = j + (widthSegments + 1) * i;
                let b = j + (widthSegments + 1) * (i + 1);
                let c = j + 1 + (widthSegments + 1) * (i + 1);
                let d = j + 1 + (widthSegments + 1) * i;
                // this indices compose the two triangles that create the square
                // on the grid at [i,j]
                indices.push(a, b, d);
                indices.push(b, c, d);
            }
            this.vertices = new Float32Array(vertices);
            this.indices = new Uint16Array(indices);
            this.uvs = new Float32Array(uvs);
            this.normals = new Float32Array(normals);
        }
    }
    calculateMatrix() {
        let [x, y, z] = this.position.elements;
        let [rx, ry, rz] = this.rotation.elements;
        let [sx, sy, sz] = this.scale.elements;
        this.modelMatrix.setTranslate(x, y, z).rotate(rx, 1, 0, 0).rotate(ry, 0, 1, 0).rotate(rz, 0, 0, 1).scale(sx, sy, sz);
        this.normalMatrix.set(this.modelMatrix).invert().transpose();
    }
    render(gl, camera) {
        // only render once a valid shader program is in use
        if (this.program === null) {
            this.program = (0, _cuonUtils.createProgram)(gl, this.vertexShader, this.fragmentShader);
            if (!this.program) console.error("could not compile shader");
        }
        // tell webGL to use this objects program
        gl.useProgram(this.program);
        if (this.vertexBuffer === null) this.vertexBuffer = gl.createBuffer();
        if (this.indexBuffer === null) this.indexBuffer = gl.createBuffer();
        if (this.uvBuffer === null) this.uvBuffer = gl.createBuffer();
        if (this.normalBuffer === null) this.normalBuffer = gl.createBuffer();
        this.calculateMatrix();
        camera.calculateViewProjection();
        const uTime = gl.getUniformLocation(this.program, "uTime"); // ADD THIS
        const position = gl.getAttribLocation(this.program, "position");
        const uv = gl.getAttribLocation(this.program, "uv");
        const normal = gl.getAttribLocation(this.program, "normal");
        const modelMatrix = gl.getUniformLocation(this.program, "modelMatrix");
        const normalMatrix = gl.getUniformLocation(this.program, "normalMatrix");
        const viewMatrix = gl.getUniformLocation(this.program, "viewMatrix");
        const projectionMatrix = gl.getUniformLocation(this.program, "projectionMatrix");
        gl.uniform1f(uTime, performance.now() / 1000); // ADD THIS
        gl.uniformMatrix4fv(modelMatrix, false, this.modelMatrix.elements);
        gl.uniformMatrix4fv(normalMatrix, false, this.normalMatrix.elements);
        gl.uniformMatrix4fv(viewMatrix, false, camera.viewMatrix.elements);
        gl.uniformMatrix4fv(projectionMatrix, false, camera.projectionMatrix.elements);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);
        gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(position);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.uvs, gl.DYNAMIC_DRAW);
        gl.vertexAttribPointer(uv, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(uv);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.DYNAMIC_DRAW);
        gl.vertexAttribPointer(normal, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(normal);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.DYNAMIC_DRAW);
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }
}
exports.default = Plane;

},{"../../lib/cuon-matrix-cse160":"adUeE","../../lib/cuon-utils":"jJDed","../shaders/Normal":"fuh3k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fuh3k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VertexShader", ()=>VertexShader);
parcelHelpers.export(exports, "FragmentShader", ()=>FragmentShader);
const VertexShader = `
  precision mediump float;
  attribute vec3 position;
  attribute vec2 uv;
  attribute vec3 normal;

  uniform mat4 modelMatrix;
  uniform mat4 normalMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;

  varying vec3 vNormal;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    gl_Position = projectionMatrix * viewMatrix * modelPosition;
    vNormal = (normalMatrix * vec4(normal, 1.0)).xyz;
  }
  `;
const FragmentShader = `
  precision mediump float;
  varying vec3 vNormal;

  void main() {
    vec3 norm = normalize(vNormal);
    
    gl_FragColor = vec4(norm, 1.0);
  }
  `;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pyKN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VertexShader", ()=>VertexShader);
parcelHelpers.export(exports, "FragmentShader", ()=>FragmentShader);
const VertexShader = `
  precision mediump float;
  attribute vec3 position;
  attribute vec2 uv;
  attribute vec3 normal;

  uniform mat4 modelMatrix;
  uniform mat4 normalMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime; // ADD THIS

  varying vec3 vNormal;
  varying float vWaveHeight;

  float rand(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
  }

  //
  // GLSL textureless classic 3D noise "cnoise",
  // with an RSL-style periodic variant "pnoise".
  // Author:  Stefan Gustavson (stefan.gustavson@liu.se)
  // Version: 2011-10-11
  //
  // Many thanks to Ian McEwan of Ashima Arts for the
  // ideas for permutation and gradient selection.
  //
  // Copyright (c) 2011 Stefan Gustavson. All rights reserved.
  // Distributed under the MIT license. See LICENSE file.
  // https://github.com/ashima/webgl-noise
  //

  vec3 mod289(vec3 x)
  {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x)
  {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x)
  {
    return mod289(((x*34.0)+1.0)*x);
  }

  vec4 taylorInvSqrt(vec4 r)
  {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  vec3 fade(vec3 t) {
    return t*t*t*(t*(t*6.0-15.0)+10.0);
  }

  // Classic Perlin noise
  float cnoise(vec3 P)
  {
    vec3 Pi0 = floor(P); // Integer part for indexing
    vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
  }

  void main() {
    vec4 transformedPosition = modelMatrix * vec4(position, 1.0);

    float waveIntensity = cnoise(vec3(transformedPosition.xz, uTime * 0.2));

    transformedPosition.y += waveIntensity;

    gl_Position = projectionMatrix * viewMatrix * transformedPosition;
    vNormal = (normalMatrix * vec4(normal, 1.0)).xyz;
    vWaveHeight = (waveIntensity + 2.0) * 0.25; // map waves from [-2,2] to [0,1]
  }
  `;
const FragmentShader = `
  precision mediump float;
  varying vec3 vNormal;
  varying float vWaveHeight;

  void main() {
    vec3 norm = normalize(vNormal);

    vec3 color = vec3(0.15, 0.35, 0.75); // bluish color

    color = mix(color, vec3(1.0), smoothstep(0.35, 1.0, vWaveHeight));
    
    gl_FragColor = vec4(color, 1.0);
  }
  `;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2OhnR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _sphere = require("./primitives/Sphere");
var _sphereDefault = parcelHelpers.interopDefault(_sphere);
var _sky = require("./shaders/Sky");
const Sky = new (0, _sphereDefault.default)(50, 20, 20); // radius 50, 20x20 resolution
Sky.setShaders((0, _sky.VertexShader), (0, _sky.FragmentShader));
exports.default = Sky;

},{"./primitives/Sphere":"mLBX0","./shaders/Sky":"a9cQs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"mLBX0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cuonMatrixCse160 = require("../../lib/cuon-matrix-cse160");
var _cuonUtils = require("../../lib/cuon-utils");
var _normal = require("../shaders/Normal");
class Sphere {
    constructor(radius = 0.5, widthSegments = 3, heightSegments = 2){
        // buffers
        this.vertexBuffer = null;
        this.indexBuffer = null;
        this.uvBuffer = null;
        this.normalBuffer = null;
        // shader programs
        this.vertexShader = (0, _normal.VertexShader);
        this.fragmentShader = (0, _normal.FragmentShader);
        this.program = null;
        // data arrays
        this.vertices = null;
        this.indices = null;
        this.uvs = null;
        this.normals = null;
        // transformations
        this.position = new (0, _cuonMatrixCse160.Vector3)([
            0,
            0,
            0
        ]);
        this.rotation = new (0, _cuonMatrixCse160.Vector3)([
            0,
            0,
            0
        ]);
        this.scale = new (0, _cuonMatrixCse160.Vector3)([
            1,
            1,
            1
        ]);
        this.modelMatrix = new (0, _cuonMatrixCse160.Matrix4)();
        this.normalMatrix = new (0, _cuonMatrixCse160.Matrix4)();
        widthSegments = Math.max(3, Math.floor(widthSegments));
        heightSegments = Math.max(2, Math.floor(heightSegments));
        this.generateSphere(radius, widthSegments, heightSegments);
    }
    setShaders(vertShader, fragShader) {
        this.vertexShader = vertShader;
        this.fragmentShader = fragShader;
        this.program = null;
    }
    generateSphere(radius, widthSegments, heightSegments) {
        let index = 0;
        const grid = [];
        const vertex = new (0, _cuonMatrixCse160.Vector3)();
        const normal = new (0, _cuonMatrixCse160.Vector3)();
        // buffers
        const indices = [];
        const vertices = [];
        const normals = [];
        const uvs = [];
        for(let j = 0; j <= heightSegments; j++){
            const row = [];
            const v = j / heightSegments;
            let uOffset = 0;
            // special cases for poles
            if (j === 0) uOffset = 0.5 / widthSegments;
            else if (j === heightSegments) uOffset = -0.5 / widthSegments;
            for(let i = 0; i <= widthSegments; i++){
                const u = i / widthSegments;
                vertex.elements[0] = -radius * Math.cos(u * Math.PI * 2) * Math.sin(v * Math.PI);
                vertex.elements[1] = radius * Math.cos(v * Math.PI);
                vertex.elements[2] = radius * Math.sin(u * Math.PI * 2) * Math.sin(v * Math.PI);
                vertices.push(...vertex.elements);
                normal.set(vertex).normalize();
                normals.push(...normal.elements);
                uvs.push(u + uOffset, 1 - v);
                row.push(index++);
            }
            grid.push(row);
        }
        for(let j = 0; j < heightSegments; j++)for(let i = 0; i < widthSegments; i++){
            const a = grid[j][i + 1];
            const b = grid[j][i];
            const c = grid[j + 1][i];
            const d = grid[j + 1][i + 1];
            if (j !== 0) indices.push(a, b, d);
            if (j !== heightSegments - 1) indices.push(b, c, d);
        }
        this.vertices = new Float32Array(vertices);
        this.indices = new Uint16Array(indices);
        this.uvs = new Float32Array(uvs);
        this.normals = new Float32Array(normals);
    }
    calculateMatrix() {
        let [x, y, z] = this.position.elements;
        let [rx, ry, rz] = this.rotation.elements;
        let [sx, sy, sz] = this.scale.elements;
        this.modelMatrix.setTranslate(x, y, z).rotate(rx, 1, 0, 0).rotate(ry, 0, 1, 0).rotate(rz, 0, 0, 1).scale(sx, sy, sz);
        this.normalMatrix.set(this.modelMatrix).invert().transpose();
    }
    render(gl, camera) {
        // only render once a valid shader program is in use
        if (this.program === null) {
            this.program = (0, _cuonUtils.createProgram)(gl, this.vertexShader, this.fragmentShader);
            if (!this.program) console.error("could not compile shader");
        }
        // tell webGL to use this objects program
        gl.useProgram(this.program);
        const uTime = gl.getUniformLocation(this.program, "uTime");
        gl.uniform1f(uTime, performance.now() / 1000);
        if (this.vertexBuffer === null) this.vertexBuffer = gl.createBuffer();
        if (this.indexBuffer === null) this.indexBuffer = gl.createBuffer();
        if (this.uvBuffer === null) this.uvBuffer = gl.createBuffer();
        if (this.normalBuffer === null) this.normalBuffer = gl.createBuffer();
        this.calculateMatrix();
        camera.calculateViewProjection();
        const position = gl.getAttribLocation(this.program, "position");
        const uv = gl.getAttribLocation(this.program, "uv");
        const normal = gl.getAttribLocation(this.program, "normal");
        const modelMatrix = gl.getUniformLocation(this.program, "modelMatrix");
        const normalMatrix = gl.getUniformLocation(this.program, "normalMatrix");
        const viewMatrix = gl.getUniformLocation(this.program, "viewMatrix");
        const projectionMatrix = gl.getUniformLocation(this.program, "projectionMatrix");
        gl.uniformMatrix4fv(modelMatrix, false, this.modelMatrix.elements);
        gl.uniformMatrix4fv(normalMatrix, false, this.normalMatrix.elements);
        gl.uniformMatrix4fv(viewMatrix, false, camera.viewMatrix.elements);
        gl.uniformMatrix4fv(projectionMatrix, false, camera.projectionMatrix.elements);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);
        gl.vertexAttribPointer(position, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(position);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.uvs, gl.DYNAMIC_DRAW);
        gl.vertexAttribPointer(uv, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(uv);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.normalBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.normals, gl.DYNAMIC_DRAW);
        gl.vertexAttribPointer(normal, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(normal);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.DYNAMIC_DRAW);
        gl.drawElements(gl.TRIANGLES, this.indices.length, gl.UNSIGNED_SHORT, 0);
    }
}
exports.default = Sphere;

},{"../../lib/cuon-matrix-cse160":"adUeE","../../lib/cuon-utils":"jJDed","../shaders/Normal":"fuh3k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a9cQs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VertexShader", ()=>VertexShader);
parcelHelpers.export(exports, "FragmentShader", ()=>FragmentShader);
const VertexShader = `
  precision mediump float;
  attribute vec3 position;
  attribute vec2 uv;
  attribute vec3 normal;

  uniform mat4 modelMatrix;
  uniform mat4 normalMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  
  varying vec3 vPos;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    vPos = modelPosition.xyz;
  }
`;
const FragmentShader = `
//
// GLSL textureless classic 4D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-08-22
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//
precision mediump float;

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 fade(vec4 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float cnoise(vec4 P)
{
  vec4 Pi0 = floor(P); // Integer part for indexing
  vec4 Pi1 = Pi0 + 1.0; // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec4 Pf0 = fract(P); // Fractional part for interpolation
  vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.zzzz);
  vec4 iz1 = vec4(Pi1.zzzz);
  vec4 iw0 = vec4(Pi0.wwww);
  vec4 iw1 = vec4(Pi1.wwww);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 ixy00 = permute(ixy0 + iw0);
  vec4 ixy01 = permute(ixy0 + iw1);
  vec4 ixy10 = permute(ixy1 + iw0);
  vec4 ixy11 = permute(ixy1 + iw1);

  vec4 gx00 = ixy00 * (1.0 / 7.0);
  vec4 gy00 = floor(gx00) * (1.0 / 7.0);
  vec4 gz00 = floor(gy00) * (1.0 / 6.0);
  gx00 = fract(gx00) - 0.5;
  gy00 = fract(gy00) - 0.5;
  gz00 = fract(gz00) - 0.5;
  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
  vec4 sw00 = step(gw00, vec4(0.0));
  gx00 -= sw00 * (step(0.0, gx00) - 0.5);
  gy00 -= sw00 * (step(0.0, gy00) - 0.5);

  vec4 gx01 = ixy01 * (1.0 / 7.0);
  vec4 gy01 = floor(gx01) * (1.0 / 7.0);
  vec4 gz01 = floor(gy01) * (1.0 / 6.0);
  gx01 = fract(gx01) - 0.5;
  gy01 = fract(gy01) - 0.5;
  gz01 = fract(gz01) - 0.5;
  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
  vec4 sw01 = step(gw01, vec4(0.0));
  gx01 -= sw01 * (step(0.0, gx01) - 0.5);
  gy01 -= sw01 * (step(0.0, gy01) - 0.5);

  vec4 gx10 = ixy10 * (1.0 / 7.0);
  vec4 gy10 = floor(gx10) * (1.0 / 7.0);
  vec4 gz10 = floor(gy10) * (1.0 / 6.0);
  gx10 = fract(gx10) - 0.5;
  gy10 = fract(gy10) - 0.5;
  gz10 = fract(gz10) - 0.5;
  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
  vec4 sw10 = step(gw10, vec4(0.0));
  gx10 -= sw10 * (step(0.0, gx10) - 0.5);
  gy10 -= sw10 * (step(0.0, gy10) - 0.5);

  vec4 gx11 = ixy11 * (1.0 / 7.0);
  vec4 gy11 = floor(gx11) * (1.0 / 7.0);
  vec4 gz11 = floor(gy11) * (1.0 / 6.0);
  gx11 = fract(gx11) - 0.5;
  gy11 = fract(gy11) - 0.5;
  gz11 = fract(gz11) - 0.5;
  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
  vec4 sw11 = step(gw11, vec4(0.0));
  gx11 -= sw11 * (step(0.0, gx11) - 0.5);
  gy11 -= sw11 * (step(0.0, gy11) - 0.5);

  vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
  vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
  vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
  vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
  vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
  vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
  vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
  vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
  vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
  vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
  vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
  vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
  vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
  vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
  vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
  vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

  vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
  g0000 *= norm00.x;
  g0100 *= norm00.y;
  g1000 *= norm00.z;
  g1100 *= norm00.w;

  vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
  g0001 *= norm01.x;
  g0101 *= norm01.y;
  g1001 *= norm01.z;
  g1101 *= norm01.w;

  vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
  g0010 *= norm10.x;
  g0110 *= norm10.y;
  g1010 *= norm10.z;
  g1110 *= norm10.w;

  vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
  g0011 *= norm11.x;
  g0111 *= norm11.y;
  g1011 *= norm11.z;
  g1111 *= norm11.w;

  float n0000 = dot(g0000, Pf0);
  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
  float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
  float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
  float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
  float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
  float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
  float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
  float n1111 = dot(g1111, Pf1);

  vec4 fade_xyzw = fade(Pf0);
  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
  return 2.2 * n_xyzw;
}


/*
original_author: Patricio Gonzalez Vivo
description: Fractal Brownian Motion
use: fbm(<vec2> pos)
options:
    FBM_OCTAVES: numbers of octaves. Default is 4.
    FBM_NOISE_FNC(POS_UV): noise function to use Default 'snoise(POS_UV)' (simplex noise)
    FBM_VALUE_INITIAL: initial value. Default is 0.
    FBM_SCALE_SCALAR: scalar. Defualt is 2.
    FBM_AMPLITUD_INITIAL: initial amplitud value. Default is 0.5
    FBM_AMPLITUD_SCALAR: amplitud scalar. Default is 0.5
*/

#ifndef FBM_OCTAVES
#define FBM_OCTAVES 4
#endif

#ifndef FBM_NOISE_FNC
#define FBM_NOISE_FNC(POS_UV) cnoise(POS_UV)
#endif

#ifndef FBM_NOISE2_FNC
#define FBM_NOISE2_FNC(POS_UV) FBM_NOISE_FNC(POS_UV)
#endif

#ifndef FBM_NOISE3_FNC
#define FBM_NOISE3_FNC(POS_UV) FBM_NOISE_FNC(POS_UV)
#endif


#ifndef FBM_NOISE_TYPE
#define FBM_NOISE_TYPE float
#endif

#ifndef FBM_VALUE_INITIAL
#define FBM_VALUE_INITIAL 0.0
#endif

#ifndef FBM_SCALE_SCALAR
#define FBM_SCALE_SCALAR 2.0
#endif

#ifndef FBM_AMPLITUD_INITIAL
#define FBM_AMPLITUD_INITIAL 0.5
#endif

#ifndef FBM_AMPLITUD_SCALAR
#define FBM_AMPLITUD_SCALAR 0.5
#endif

#ifndef FNC_FBM
#define FNC_FBM

FBM_NOISE_TYPE fbm(in vec4 pos) {
    // Initial values
    FBM_NOISE_TYPE value = FBM_NOISE_TYPE(FBM_VALUE_INITIAL);
    float amplitud = FBM_AMPLITUD_INITIAL;

    // Loop of octaves
    for (int i = 0; i < FBM_OCTAVES; i++) {
        value += amplitud * FBM_NOISE3_FNC(pos);
        pos *= FBM_SCALE_SCALAR;
        amplitud *= FBM_AMPLITUD_SCALAR;
    }
    return value;
}
#endif



  #define SUN_POS vec3(0.0, 8.68240888, -49.24038765)
  #define SUN_SIZE 10.0 // ADD THIS
  varying vec3 vPos;
  uniform float uTime;
  void main() {
    float d = distance(SUN_POS, vPos); // dont need the divide anymore
    float sunIntensity = SUN_SIZE / d;
    vec3 color = vec3(0.1, 0.12, 0.4); // pick ur sky color if u want
    vec3 sunColor = vec3(0.95, 0.85, 0.5); // pick sun color
    color = mix(color, sunColor, pow(sunIntensity, 2.0));
    float mist = fbm(vec4(vPos * 0.02, uTime * 0.05));    vec3 mistColor = vec3(0.7);
    color += mistColor * mist;
    gl_FragColor = vec4(color, 1.0);
  }
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["jC2qd","8lqZg"], "8lqZg", "parcelRequired227")

//# sourceMappingURL=index.975ef6c8.js.map
