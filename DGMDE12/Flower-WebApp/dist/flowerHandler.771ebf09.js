// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"flowerHandler.js":[function(require,module,exports) {
var organicStemGrowth = 0; //create a flower using the user's selection

function Flower(x, y, shape, color, accentColor, petalCount, stopGrowth, angle) {
  //at mouseX and mouseY start a flower when the user clicks
  this.x = x;
  this.y = y;
  this.stemDiameter = 5;
  this.finalSize = size * 10; //upon plant, create a stem out of an ellipse repeated over and over again.  

  this.plant = function () {
    stroke("#49793f");
    fill("#87A658");
    ellipse(this.x, this.y, this.stemDiameter, this.stemDiameter);
  }; //after planting, grow the stem until ready to bloom. This stem grows using perlin noise. 


  this.grow = function () {
    if (stopGrowth == 0) {
      this.bloom();
    } else {
      /*-----------CITATION-----------*/
      //Thanks for helping me with this part, Ed :) https://codepen.io/edhebert/pen/ybgMYm?editors=0010
      push();
      this.y--;
      organicStemGrowth += .05;
      this.x = noise(organicStemGrowth) - angle + this.x;
      pop(); //Each time a stem segment is drawn, the stopGrowth will move closer to zero. 

      stopGrowth--; //add branches. Branches are added by pushing new mini-flowers based on original flower to the garden array. Randomizing the angle, ensures that the branch could be drawn in either direction. 

      if (stopGrowth == 300 || stopGrowth == 200) {
        garden.push(new Flower(this.x, this.y, shape, color, accentColor, petalCount, 100, random(0, 1)));
      }
    }
  }; //the bloom depends on user selection


  this.bloom = function () {
    push();
    stroke(accentColor);
    translate(this.x, this.y);

    if (shape == "circle") {
      for (var i = 0; i < petalCount; i++) {
        rotate(i / 24 * PI);
        fill(color);
        ellipse(0, -size, size / 8, size / 8);

        for (var j = .5; j > 0; j = j - .1) {
          rotate(i / 12 * PI);
          ellipse(0, -size * j, j * size, j * size);
        }
      }
    } else if (shape == "oval") {
      for (var i = 0; i < petalCount; i++) {
        rotate(i / (petalCount / 2) * PI);
        fill(color);
        ellipse(0, -size, size / 4, size);
        ellipse(0, 0, size / 8, size);
      }
    } else if (shape == "square") {
      for (var i = 0; i < petalCount; i++) {
        rotate(i / (petalCount / 2) * PI);
        fill(color);
        rect(0, -size, size / 2, size);
        rect(0, 0, size, size);
      }
    } else if (shape == "triangle") {
      for (var i = 0; i < petalCount; i++) {
        rotate(i / (petalCount / 2) * PI);
        fill(color);
        triangle(size, size, -size, 0, -size, -size);
        ellipse(0, 0, size / 2, size / 2);
      }
    } else if (shape == "leaf") {
      for (var i = 0; i < petalCount; i++) {
        rotate(i / (petalCount / 2) * PI);
        fill(color);
        beginShape();
        vertex(size / 4, 0);
        vertex(-size / 4, 0);
        vertex(-size / 4, size / 6);
        vertex(-size / 4, size);
        vertex(-size / 12, size / 4);
        vertex(-size / 6, size * 2);
        vertex(0, size + size / 8);
        vertex(size / 8, size);
        vertex(size / 4, size / 6);
        endShape(CLOSE);
        fill(accentColor);
        beginShape();
        vertex(-1, 0);
        vertex(-1, size);
        vertex(0, size + 1);
        vertex(1, size / 2);
        vertex(1, 0);
        endShape(CLOSE);
      }
    } else if (shape == "lotus") {
      for (var i = 0; i < petalCount; i++) {
        rotate(i / (petalCount / 2) * PI);
        fill(color);
        beginShape();
        vertex(0, 0);
        vertex(-size / 1.5, size / 1.5);
        vertex(-size / 1.5, size * 1.5);
        vertex(0, size * 2);
        vertex(size / 1.5, size * 1.5);
        vertex(size / 1.5, size / 1.5);
        endShape(CLOSE);
        fill(accentColor);
        beginShape();
        vertex(0, 0);
        vertex(-1, size / 1.5);
        vertex(-1, size * 1.5);
        vertex(0, size * 2);
        vertex(1, size * 1.5);
        vertex(1, size / 1.5);
        endShape(CLOSE);
      }
    }

    pop();
  };
}
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50716" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","flowerHandler.js"], null)
//# sourceMappingURL=/flowerHandler.771ebf09.js.map