
/******/ (function(modules) { // webpackBootstrap
/******/ // The module cache
/******/ var installedModules = {};
/******/
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/
/******/ // Check if module is in cache
/******/ if(installedModules[moduleId]) {
/******/ return installedModules[moduleId].exports;
/******/ }
/******/ // Create a new module (and put it into the cache)
/******/ var module = installedModules[moduleId] = {
/******/ i: moduleId,
/******/ l: false,
/******/ exports: {}
/******/ };
/******/
/******/ // Execute the module function
/******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ // Flag the module as loaded
/******/ module.l = true;
/******/
/******/ // Return the exports of the module
/******/ return module.exports;
/******/ }
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/ __webpack_require__.m = modules;
/******/
/******/ // expose the module cache
/******/ __webpack_require__.c = installedModules;
/******/
/******/ // define getter function for harmony exports
/******/ __webpack_require__.d = function(exports, name, getter) {
/******/ if(!__webpack_require__.o(exports, name)) {
/******/ Object.defineProperty(exports, name, {
/******/ configurable: false,
/******/ enumerable: true,
/******/ get: getter
/******/ });
/******/ }
/******/ };
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/ __webpack_require__.n = function(module) {
/******/ var getter = module && module.__esModule ?
/******/ function getDefault() { return module['default']; } :
/******/ function getModuleExports() { return module; };
/******/ __webpack_require__.d(getter, 'a', getter);
/******/ return getter;
/******/ };
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/ __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ // __webpack_public_path__
/******/ __webpack_require__.p = "";
/******/
/******/ // Load entry module and return exports
/******/ return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
* Checks if `value` is classified as an `Array` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an array, else `false`.
* @example
*
* _.isArray([1, 2, 3]);
* // => true
*
* _.isArray(document.body.children);
* // => false
*
* _.isArray('abc');
* // => false
*
* _.isArray(_.noop);
* // => false
*/
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(58);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
* Checks if `value` is the
* [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
* of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an object, else `false`.
* @example
*
* _.isObject({});
* // => true
*
* _.isObject([1, 2, 3]);
* // => true
*
* _.isObject(_.noop);
* // => true
*
* _.isObject(null);
* // => false
*/
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(126),
    getValue = __webpack_require__(131);

/**
* Gets the native function at `key` of `object`.
*
* @private
* @param {Object} object The object to query.
* @param {string} key The key of the method to get.
* @returns {*} Returns the function if it's native, else `undefined`.
*/
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
* Checks if `value` is object-like. A value is object-like if it's not `null`
* and has a `typeof` result of "object".
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is object-like, else `false`.
* @example
*
* _.isObjectLike({});
* // => true
*
* _.isObjectLike([1, 2, 3]);
* // => true
*
* _.isObjectLike(_.noop);
* // => false
*
* _.isObjectLike(null);
* // => false
*/
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
* Webflow: Core site library
*/

var Webflow = {};
var modules = {};
var primary = [];
var secondary = window.Webflow || [];
var $ = window.jQuery;
var $win = $(window);
var $doc = $(document);
var isFunction = $.isFunction;
var _ = Webflow._ = __webpack_require__(87);
var tram = __webpack_require__(46) && $.tram;
var domready = false;
var destroyed = false;
tram.config.hideBackface = false;
tram.config.keepInherited = true;

/**
* Webflow.define - Define a named module
* @param  {string} name
* @param  {function} factory
* @param  {object} options
* @return {object}
*/
Webflow.define = function (name, factory, options) {
  if (modules[name]) {
    unbindModule(modules[name]);
  }
  var instance = modules[name] = factory($, _, options) || {};
  bindModule(instance);
  return instance;
};

/**
* Webflow.require - Require a named module
* @param  {string} name
* @return {object}
*/
Webflow.require = function (name) {
  return modules[name];
};

function bindModule(module) {
  // If running in Webflow app, subscribe to design/preview events
  if (Webflow.env()) {
    isFunction(module.design) && $win.on('__wf_design', module.design);
    isFunction(module.preview) && $win.on('__wf_preview', module.preview);
  }
  // Subscribe to front-end destroy event
  isFunction(module.destroy) && $win.on('__wf_destroy', module.destroy);
  // Look for ready method on module
  if (module.ready && isFunction(module.ready)) {
    addReady(module);
  }
}

function addReady(module) {
  // If domready has already happened, run ready method
  if (domready) {
    module.ready();
    return;
  }
  // Otherwise add ready method to the primary queue (only once)
  if (_.contains(primary, module.ready)) {
    return;
  }
  primary.push(module.ready);
}

function unbindModule(module) {
  // Unsubscribe module from window events
  isFunction(module.design) && $win.off('__wf_design', module.design);
  isFunction(module.preview) && $win.off('__wf_preview', module.preview);
  isFunction(module.destroy) && $win.off('__wf_destroy', module.destroy);
  // Remove ready method from primary queue
  if (module.ready && isFunction(module.ready)) {
    removeReady(module);
  }
}

function removeReady(module) {
  primary = _.filter(primary, function (readyFn) {
    return readyFn !== module.ready;
  });
}

/**
* Webflow.push - Add a ready handler into secondary queue
* @param {function} ready  Callback to invoke on domready
*/
Webflow.push = function (ready) {
  // If domready has already happened, invoke handler
  if (domready) {
    isFunction(ready) && ready();
    return;
  }
  // Otherwise push into secondary queue
  secondary.push(ready);
};

/**
* Webflow.env - Get the state of the Webflow app
* @param {string} mode [optional]
* @return {boolean}
*/
Webflow.env = function (mode) {
  var designFlag = window.__wf_design;
  var inApp = typeof designFlag !== 'undefined';
  if (!mode) {
    return inApp;
  }
  if (mode === 'design') {
    return inApp && designFlag;
  }
  if (mode === 'preview') {
    return inApp && !designFlag;
  }
  if (mode === 'slug') {
    return inApp && window.__wf_slug;
  }
  if (mode === 'editor') {
    return window.WebflowEditor;
  }
  if (mode === 'test') {
    return false || window.__wf_test;
  }
  if (mode === 'frame') {
    return window !== window.top;
  }
};

// Feature detects + browser sniffs  ಠ_ಠ
var userAgent = navigator.userAgent.toLowerCase();
var touch = Webflow.env.touch = 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch;
var chrome = Webflow.env.chrome = /chrome/.test(userAgent) && /Google/.test(navigator.vendor) && parseInt(userAgent.match(/chrome\/(\d+)\./)[1], 10);
var ios = Webflow.env.ios = /(ipod|iphone|ipad)/.test(userAgent);
Webflow.env.safari = /safari/.test(userAgent) && !chrome && !ios;

// Maintain current touch target to prevent late clicks on touch devices
var touchTarget;
// Listen for both events to support touch/mouse hybrid devices
touch && $doc.on('touchstart mousedown', function (evt) {
  touchTarget = evt.target;
});

/**
* Webflow.validClick - validate click target against current touch target
* @param  {HTMLElement} clickTarget  Element being clicked
* @return {Boolean}  True if click target is valid (always true on non-touch)
*/
Webflow.validClick = touch ? function (clickTarget) {
  return clickTarget === touchTarget || $.contains(clickTarget, touchTarget);
} : function () {
  return true;
};

/**
* Webflow.resize, Webflow.scroll - throttled event proxies
*/
var resizeEvents = 'resize.webflow orientationchange.webflow load.webflow';
var scrollEvents = 'scroll.webflow ' + resizeEvents;
Webflow.resize = eventProxy($win, resizeEvents);
Webflow.scroll = eventProxy($win, scrollEvents);
Webflow.redraw = eventProxy();

// Create a proxy instance for throttled events
function eventProxy(target, types) {

  // Set up throttled method (using custom frame-based _.throttle)
  var handlers = [];
  var proxy = {};
  proxy.up = _.throttle(function (evt) {
    _.each(handlers, function (h) {
      h(evt);
    });
  });

  // Bind events to target
  if (target && types) {
    target.on(types, proxy.up);
  }

  /**
   * Add an event handler
   * @param  {function} handler
   */
  proxy.on = function (handler) {
    if (typeof handler !== 'function') {
      return;
    }
    if (_.contains(handlers, handler)) {
      return;
    }
    handlers.push(handler);
  };

  /**
   * Remove an event handler
   * @param  {function} handler
   */
  proxy.off = function (handler) {
    // If no arguments supplied, clear all handlers
    if (!arguments.length) {
      handlers = [];
      return;
    }
    // Otherwise, remove handler from the list
    handlers = _.filter(handlers, function (h) {
      return h !== handler;
    });
  };

  return proxy;
}

// Webflow.location - Wrap window.location in api
Webflow.location = function (url) {
  window.location = url;
};

if (Webflow.env()) {
  // Ignore redirects inside a Webflow design/edit environment
  Webflow.location = function () {};
}

// Webflow.ready - Call primary and secondary handlers
Webflow.ready = function () {
  domready = true;

  // Restore modules after destroy
  if (destroyed) {
    restoreModules();

    // Otherwise run primary ready methods
  } else {
    _.each(primary, callReady);
  }

  // Run secondary ready methods
  _.each(secondary, callReady);

  // Trigger resize
  Webflow.resize.up();
};

function callReady(readyFn) {
  isFunction(readyFn) && readyFn();
}

function restoreModules() {
  destroyed = false;
  _.each(modules, bindModule);
}

/**
* Webflow.load - Add a window load handler that will run even if load event has already happened
* @param  {function} handler
*/
var deferLoad;
Webflow.load = function (handler) {
  deferLoad.then(handler);
};

function bindLoad() {
  // Reject any previous deferred (to support destroy)
  if (deferLoad) {
    deferLoad.reject();
    $win.off('load', deferLoad.resolve);
  }
  // Create deferred and bind window load event
  deferLoad = new $.Deferred();
  $win.on('load', deferLoad.resolve);
}

// Webflow.destroy - Trigger a destroy event for all modules
Webflow.destroy = function (options) {
  options = options || {};
  destroyed = true;
  $win.triggerHandler('__wf_destroy');

  // Allow domready reset for tests
  if (options.domready != null) {
    domready = options.domready;
  }

  // Unbind modules
  _.each(modules, unbindModule);

  // Clear any proxy event handlers
  Webflow.resize.off();
  Webflow.scroll.off();
  Webflow.redraw.off();

  // Clear any queued ready methods
  primary = [];
  secondary = [];

  // If load event has not yet fired, replace the deferred
  if (deferLoad.state() === 'pending') {
    bindLoad();
  }
};

// Listen for domready
$(Webflow.ready);

// Listen for window.onload and resolve deferred
bindLoad();

// Export commonjs module
module.exports = window.Webflow = Webflow;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return IX2_RAW_DATA_IMPORTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return IX2_SESSION_INITIALIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return IX2_SESSION_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return IX2_SESSION_STOPPED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return IX2_PREVIEW_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return IX2_PLAYBACK_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return IX2_STOP_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IX2_CLEAR_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IX2_EVENT_LISTENER_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return IX2_EVENT_STATE_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IX2_ANIMATION_FRAME_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return IX2_PARAMETER_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return IX2_INSTANCE_ADDED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return IX2_INSTANCE_STARTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return IX2_INSTANCE_REMOVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IX2_ACTION_LIST_PLAYBACK_CHANGED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return IX2_VIEWPORT_WIDTH_CHANGED; });
var IX2_RAW_DATA_IMPORTED = 'IX2_RAW_DATA_IMPORTED';
var IX2_SESSION_INITIALIZED = 'IX2_SESSION_INITIALIZED';
var IX2_SESSION_STARTED = 'IX2_SESSION_STARTED';
var IX2_SESSION_STOPPED = 'IX2_SESSION_STOPPED';
var IX2_PREVIEW_REQUESTED = 'IX2_PREVIEW_REQUESTED';
var IX2_PLAYBACK_REQUESTED = 'IX2_PLAYBACK_REQUESTED';
var IX2_STOP_REQUESTED = 'IX2_STOP_REQUESTED';
var IX2_CLEAR_REQUESTED = 'IX2_CLEAR_REQUESTED';
var IX2_EVENT_LISTENER_ADDED = 'IX2_EVENT_LISTENER_ADDED';
var IX2_EVENT_STATE_CHANGED = 'IX2_EVENT_STATE_CHANGED';
var IX2_ANIMATION_FRAME_CHANGED = 'IX2_ANIMATION_FRAME_CHANGED';
var IX2_PARAMETER_CHANGED = 'IX2_PARAMETER_CHANGED';
var IX2_INSTANCE_ADDED = 'IX2_INSTANCE_ADDED';
var IX2_INSTANCE_STARTED = 'IX2_INSTANCE_STARTED';
var IX2_INSTANCE_REMOVED = 'IX2_INSTANCE_REMOVED';
var IX2_ACTION_LIST_PLAYBACK_CHANGED = 'IX2_ACTION_LIST_PLAYBACK_CHANGED';
var IX2_VIEWPORT_WIDTH_CHANGED = 'IX2_VIEWPORT_WIDTH_CHANGED';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(114),
    baseMatchesProperty = __webpack_require__(168),
    identity = __webpack_require__(37),
    isArray = __webpack_require__(0),
    property = __webpack_require__(175);

/**
* The base implementation of `_.iteratee`.
*
* @private
* @param {*} [value=_.identity] The value to convert to an iteratee.
* @returns {Function} Returns the iteratee.
*/
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10),
    getRawTag = __webpack_require__(127),
    objectToString = __webpack_require__(128);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
* The base implementation of `getTag` without fallbacks for buggy environments.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(57),
    isLength = __webpack_require__(31);

/**
* Checks if `value` is array-like. A value is considered array-like if it's
* not a function and has a `value.length` that's an integer greater than or
* equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is array-like, else `false`.
* @example
*
* _.isArrayLike([1, 2, 3]);
* // => true
*
* _.isArrayLike(document.body.children);
* // => true
*
* _.isArrayLike('abc');
* // => true
*
* _.isArrayLike(_.noop);
* // => false
*/
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(21);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
* Converts `value` to a string key if it's not a string or symbol.
*
* @private
* @param {*} value The value to inspect.
* @returns {string|symbol} Returns the key.
*/
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var invariant = __webpack_require__(107);

var hasOwnProperty = Object.prototype.hasOwnProperty;
var splice = Array.prototype.splice;

var assign = Object.assign || /* istanbul ignore next */ function assign(target, source) {
  getAllKeys(source).forEach(function(key) {
    if (hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  });
  return target;
};

var getAllKeys = typeof Object.getOwnPropertySymbols === 'function' ?
  function(obj) { return Object.keys(obj).concat(Object.getOwnPropertySymbols(obj)) } :
  /* istanbul ignore next */ function(obj) { return Object.keys(obj) };

function copy(object) {
  if (object instanceof Array) {
    return object.slice();
  } else if (object && typeof object === 'object') {
    return assign(new object.constructor(), object);
  } else {
    return object;
  }
}

function newContext() {
  var commands = assign({}, defaultCommands);
  update.extend = function(directive, fn) {
    commands[directive] = fn;
  };

  return update;

  function update(object, spec) {
    if (!(Array.isArray(object) && Array.isArray(spec))) {
      invariant(
        !Array.isArray(spec),
        'update(): You provided an invalid spec to update(). The spec may ' +
        'not contain an array except as the value of $set, $push, $unshift, ' +
        '$splice or any custom command allowing an array value.'
      );
    }

    invariant(
      typeof spec === 'object' && spec !== null,
      'update(): You provided an invalid spec to update(). The spec and ' +
      'every included key path must be plain objects containing one of the ' +
      'following commands: %s.',
      Object.keys(commands).join(', ')
    );

    var nextObject = object;
    var specKeys = getAllKeys(spec);
    var index, key;
    getAllKeys(spec).forEach(function(key) {
      if (hasOwnProperty.call(commands, key)) {
        nextObject = commands[key](spec[key], nextObject, spec, object);
      } else {
        var nextValueForKey = update(object[key], spec[key]);
        if (nextValueForKey !== nextObject[key]) {
          if (nextObject === object) {
            nextObject = copy(object);
          }
          nextObject[key] = nextValueForKey;
        }
      }
    })
    return nextObject;
  }

}

var defaultCommands = {
  $push: function(value, original, spec) {
    invariantPushAndUnshift(original, spec, '$push');
    return original.concat(value);
  },
  $unshift: function(value, original, spec) {
    invariantPushAndUnshift(original, spec, '$unshift');
    return value.concat(original);
  },
  $splice: function(value, nextObject, spec, object) {
    var originalValue = nextObject === object ? copy(object) : nextObject;
    invariantSplices(originalValue, spec);
    value.forEach(function(args) {
      invariantSplice(args);
      splice.apply(originalValue, args);
    });
    return originalValue;
  },
  $set: function(value, original, spec) {
    invariantSet(spec);
    return value;
  },
  $unset: function(value, nextObject, spec, object) {
    invariant(
      Array.isArray(value),
      'update(): expected spec of $unset to be an array; got %s. ' +
      'Did you forget to wrap the key(s) in an array?',
      value
    );
    var originalValue = nextObject;
    value.forEach(function(key) {
      if (Object.hasOwnProperty.call(originalValue, key)) {
        if (nextObject === object) nextObject = copy(object);
        delete nextObject[key];
      }
    });
    return nextObject;
  },
  $merge: function(value, nextObject, spec, object) {
    var nextObject = nextObject;
    invariantMerge(nextObject, value);
    getAllKeys(value).forEach(function(key) {
      if (value[key] !== nextObject[key]) {
        if (nextObject === object) nextObject = copy(object);
        nextObject[key] = value[key];
      }
    });
    return nextObject;
  },
  $apply: function(value, original) {
    invariantApply(value);
    return value(original);
  }
};

module.exports = newContext();
module.exports.newContext = newContext;

// invariants

function invariantPushAndUnshift(value, spec, command) {
  invariant(
    Array.isArray(value),
    'update(): expected target of %s to be an array; got %s.',
    command,
    value
  );
  var specValue = spec[command];
  invariant(
    Array.isArray(specValue),
    'update(): expected spec of %s to be an array; got %s. ' +
    'Did you forget to wrap your parameter in an array?',
    command,
    specValue
  );
}

function invariantSplices(value, spec) {
  invariant(
    Array.isArray(value),
    'Expected $splice target to be an array; got %s',
    value
  );
  invariantSplice(spec['$splice']);
}

function invariantSplice(value) {
  invariant(
    Array.isArray(value),
    'update(): expected spec of $splice to be an array of arrays; got %s. ' +
    'Did you forget to wrap your parameters in an array?',
    value
  );
}

function invariantApply(fn) {
  invariant(
    typeof fn === 'function',
    'update(): expected spec of $apply to be a function; got %s.',
    fn
  );
}

function invariantSet(spec) {
  invariant(
    Object.keys(spec).length === 1,
    'Cannot have more than one key in an object with $set'
  );
}

function invariantMerge(target, specValue) {
  invariant(
    specValue && typeof specValue === 'object',
    'update(): $merge expects a spec of type \'object\'; got %s',
    specValue
  );
  invariant(
    target && typeof target === 'object',
    'update(): $merge expects a target of type \'object\'; got %s',
    target
  );
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(116),
    listCacheDelete = __webpack_require__(117),
    listCacheGet = __webpack_require__(118),
    listCacheHas = __webpack_require__(119),
    listCacheSet = __webpack_require__(120);

/**
* Creates an list cache object.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(24);

/**
* Gets the index at which the `key` is found in `array` of key-value pairs.
*
* @private
* @param {Array} array The array to inspect.
* @param {*} key The key to search for.
* @returns {number} Returns the index of the matched value, else `-1`.
*/
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(140);

/**
* Gets the data for `map`.
*
* @private
* @param {Object} map The map to query.
* @param {string} key The reference key.
* @returns {*} Returns the map data.
*/
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(65),
    baseKeys = __webpack_require__(32),
    isArrayLike = __webpack_require__(9);

/**
* Creates an array of the own enumerable property names of `object`.
*
* **Note:** Non-object values are coerced to objects. See the
* [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
* for more details.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Object
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
* @example
*
* function Foo() {
*   this.a = 1;
*   this.b = 2;
* }
*
* Foo.prototype.c = 3;
*
* _.keys(new Foo);
* // => ['a', 'b'] (iteration order is not guaranteed)
*
* _.keys('hi');
* // => ['0', '1']
*/
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(158),
    isObjectLike = __webpack_require__(4);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
* Checks if `value` is likely an `arguments` object.
*
* @static
* @memberOf _
* @since 0.1.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is an `arguments` object,
*  else `false`.
* @example
*
* _.isArguments(function() { return arguments; }());
* // => true
*
* _.isArguments([1, 2, 3]);
* // => false
*/
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(35);

/**
* Gets the value at `path` of `object`. If the resolved value is
* `undefined`, the `defaultValue` is returned in its place.
*
* @static
* @memberOf _
* @since 3.7.0
* @category Object
* @param {Object} object The object to query.
* @param {Array|string} path The path of the property to get.
* @param {*} [defaultValue] The value returned for `undefined` resolved values.
* @returns {*} Returns the resolved value.
* @example
*
* var object = { 'a': [{ 'b': { 'c': 3 } }] };
*
* _.get(object, 'a[0].b.c');
* // => 3
*
* _.get(object, ['a', '0', 'b', 'c']);
* // => 3
*
* _.get(object, 'a.b.c', 'default');
* // => 'default'
*/
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isKey = __webpack_require__(36),
    stringToPath = __webpack_require__(169),
    toString = __webpack_require__(71);

/**
* Casts `value` to a path array if it's not one.
*
* @private
* @param {*} value The value to inspect.
* @param {Object} [object] The object to query keys on.
* @returns {Array} Returns the cast property path array.
*/
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(8),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
* Checks if `value` is classified as a `Symbol` primitive or object.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
* @example
*
* _.isSymbol(Symbol.iterator);
* // => true
*
* _.isSymbol('abc');
* // => false
*/
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return IX2_ID_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return WF_PAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return BOUNDARY_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return TRANSFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return TRANSLATE_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return TRANSLATE_Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return TRANSLATE_Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SCALE_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SCALE_Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SCALE_Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ROTATE_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return ROTATE_Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return ROTATE_Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return SKEW_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return SKEW_Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return OPACITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BACKGROUND_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BACKGROUND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BORDER_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DISPLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return FLEX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return WILL_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AUTO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return COMMA_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COLON_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BAR_DELIMITER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHILDREN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return IMMEDIATE_CHILDREN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SIBLINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return PRESERVE_3D; });
var IX2_ID_DELIMITER = '|';
var WF_PAGE = 'data-wf-page';
var BOUNDARY_SELECTOR = '.w-dyn-item';
var TRANSFORM = 'transform';
var TRANSLATE_X = 'translateX';
var TRANSLATE_Y = 'translateY';
var TRANSLATE_Z = 'translateZ';
var SCALE_X = 'scaleX';
var SCALE_Y = 'scaleY';
var SCALE_Z = 'scaleZ';
var ROTATE_X = 'rotateX';
var ROTATE_Y = 'rotateY';
var ROTATE_Z = 'rotateZ';
var SKEW_X = 'skewX';
var SKEW_Y = 'skewY';
var OPACITY = 'opacity';
var WIDTH = 'width';
var HEIGHT = 'height';
var BACKGROUND_COLOR = 'backgroundColor';
var BACKGROUND = 'background';
var BORDER_COLOR = 'borderColor';
var COLOR = 'color';
var DISPLAY = 'display';
var FLEX = 'flex';
var WILL_CHANGE = 'willChange';
var AUTO = 'AUTO';
var COMMA_DELIMITER = ',';
var COLON_DELIMITER = ':';
var BAR_DELIMITER = '|';
var CHILDREN = 'CHILDREN';
var IMMEDIATE_CHILDREN = 'IMMEDIATE_CHILDREN';
var SIBLINGS = 'SIBLINGS';
var PRESERVE_3D = 'preserve-3d';

/***/ }),
/* 23 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
return this;
})();

try {
// This works if eval is allowed (see CSP)
g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
// This works if the window reference is available
if(typeof window === "object")
g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
* Performs a
* [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
* comparison between two values to determine if they are equivalent.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to compare.
* @param {*} other The other value to compare.
* @returns {boolean} Returns `true` if the values are equivalent, else `false`.
* @example
*
* var object = { 'a': 1 };
* var other = { 'a': 1 };
*
* _.eq(object, object);
* // => true
*
* _.eq(object, other);
* // => false
*
* _.eq('a', 'a');
* // => true
*
* _.eq('a', Object('a'));
* // => false
*
* _.eq(NaN, NaN);
* // => true
*/
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(132),
    mapCacheDelete = __webpack_require__(139),
    mapCacheGet = __webpack_require__(141),
    mapCacheHas = __webpack_require__(142),
    mapCacheSet = __webpack_require__(143);

/**
* Creates a map cache object to store key-value pairs.
*
* @private
* @constructor
* @param {Array} [entries] The key-value pairs to cache.
*/
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
* Appends the elements of `values` to `array`.
*
* @private
* @param {Array} array The array to modify.
* @param {Array} values The values to append.
* @returns {Array} Returns `array`.
*/
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
    stubFalse = __webpack_require__(159);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
* Checks if `value` is a buffer.
*
* @static
* @memberOf _
* @since 4.3.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
* @example
*
* _.isBuffer(new Buffer(2));
* // => true
*
* _.isBuffer(new Uint8Array(2));
* // => false
*/
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)(module)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
* Checks if `value` is a valid array-like index.
*
* @private
* @param {*} value The value to check.
* @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
* @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
*/
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(160),
    baseUnary = __webpack_require__(161),
    nodeUtil = __webpack_require__(162);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
* Checks if `value` is classified as a typed array.
*
* @static
* @memberOf _
* @since 3.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
* @example
*
* _.isTypedArray(new Uint8Array);
* // => true
*
* _.isTypedArray([]);
* // => false
*/
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
* Checks if `value` is a valid array-like length.
*
* **Note:** This method is loosely based on
* [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
* @example
*
* _.isLength(3);
* // => true
*
* _.isLength(Number.MIN_VALUE);
* // => false
*
* _.isLength(Infinity);
* // => false
*
* _.isLength('3');
* // => false
*/
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(33),
    nativeKeys = __webpack_require__(163);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
* The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
*
* @private
* @param {Object} object The object to query.
* @returns {Array} Returns the array of property names.
*/
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
* Checks if `value` is likely a prototype object.
*
* @private
* @param {*} value The value to check.
* @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
*/
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(164),
    Map = __webpack_require__(25),
    Promise = __webpack_require__(165),
    Set = __webpack_require__(166),
    WeakMap = __webpack_require__(68),
    baseGetTag = __webpack_require__(8),
    toSource = __webpack_require__(59);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
* Gets the `toStringTag` of `value`.
*
* @private
* @param {*} value The value to query.
* @returns {string} Returns the `toStringTag`.
*/
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(20),
    toKey = __webpack_require__(11);

/**
* The base implementation of `_.get` without support for default values.
*
* @private
* @param {Object} object The object to query.
* @param {Array|string} path The path of the property to get.
* @returns {*} Returns the resolved value.
*/
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(0),
    isSymbol = __webpack_require__(21);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
* Checks if `value` is a property name and not a property path.
*
* @private
* @param {*} value The value to check.
* @param {Object} [object] The object to query keys on.
* @returns {boolean} Returns `true` if `value` is a property name, else `false`.
*/
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
* This method returns the first argument it receives.
*
* @static
* @since 0.1.0
* @memberOf _
* @category Util
* @param {*} value Any value.
* @returns {*} Returns `value`.
* @example
*
* var object = { 'a': 1 };
*
* console.log(_.identity(object) === object);
* // => true
*/
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2),
    isSymbol = __webpack_require__(21);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
* Converts `value` to a number.
*
* @static
* @memberOf _
* @since 4.0.0
* @category Lang
* @param {*} value The value to process.
* @returns {number} Returns the number.
* @example
*
* _.toNumber(3.2);
* // => 3.2
*
* _.toNumber(Number.MIN_VALUE);
* // => 5e-324
*
* _.toNumber(Infinity);
* // => Infinity
*
* _.toNumber('3.2');
* // => 3.2
*/
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = getInstanceId;
/* harmony export (immutable) */ __webpack_exports__["l"] = reifyState;
/* harmony export (immutable) */ __webpack_exports__["j"] = observeStore;
/* unused harmony export normalizeTarget */
/* harmony export (immutable) */ __webpack_exports__["c"] = getAffectedElements;
/* harmony export (immutable) */ __webpack_exports__["d"] = getComputedStyle;
/* harmony export (immutable) */ __webpack_exports__["g"] = getInstanceOrigin;
/* harmony export (immutable) */ __webpack_exports__["e"] = getDestinationValues;
/* harmony export (immutable) */ __webpack_exports__["m"] = renderInstance;
/* unused harmony export parseTransform */
/* unused harmony export renderStyle */
/* unused harmony export renderGeneral */
/* unused harmony export addWillChange */
/* unused harmony export removeWillChange */
/* harmony export (immutable) */ __webpack_exports__["b"] = clearAllStyles;
/* harmony export (immutable) */ __webpack_exports__["a"] = cleanupInstance;
/* harmony export (immutable) */ __webpack_exports__["h"] = getMaxDurationItemIndex;
/* unused harmony export getActionListProgress */
/* harmony export (immutable) */ __webpack_exports__["k"] = reduceListToGroup;
/* harmony export (immutable) */ __webpack_exports__["o"] = shouldNamespaceEventParameter;
/* harmony export (immutable) */ __webpack_exports__["i"] = getNamespacedParameterId;
/* harmony export (immutable) */ __webpack_exports__["n"] = shouldAllowMediaQuery;
/* harmony export (immutable) */ __webpack_exports__["p"] = stringifyTarget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_get__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_defaultTo__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_defaultTo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_defaultTo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutability_helper__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_immutability_helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_immutability_helper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__IX2EasingUtils__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants_IX2EngineItemTypes__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_IX2EngineEventTypes__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__IX2BrowserSupport__ = __webpack_require__(81);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Object$freeze, _Object$freeze2, _transformDefaults;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var trim = function trim(v) {
  return v.trim();
};

var colorStyleProps = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, __WEBPACK_IMPORTED_MODULE_5__constants_IX2EngineItemTypes__["d" /* STYLE_BACKGROUND_COLOR */], __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["c" /* BACKGROUND_COLOR */]), _defineProperty(_Object$freeze, __WEBPACK_IMPORTED_MODULE_5__constants_IX2EngineItemTypes__["e" /* STYLE_BORDER */], __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["e" /* BORDER_COLOR */]), _defineProperty(_Object$freeze, __WEBPACK_IMPORTED_MODULE_5__constants_IX2EngineItemTypes__["h" /* STYLE_TEXT_COLOR */], __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["i" /* COLOR */]), _Object$freeze));

var willChangeProps = Object.freeze((_Object$freeze2 = {}, _defineProperty(_Object$freeze2, __WEBPACK_IMPORTED_MODULE_8__IX2BrowserSupport__["d" /* TRANSFORM_PREFIXED */], __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["A" /* TRANSFORM */]), _defineProperty(_Object$freeze2, __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["c" /* BACKGROUND_COLOR */], __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["b" /* BACKGROUND */]), _defineProperty(_Object$freeze2, __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["p" /* OPACITY */], __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["p" /* OPACITY */]), _defineProperty(_Object$freeze2, __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["F" /* WIDTH */], __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["F" /* WIDTH */]), _defineProperty(_Object$freeze2, __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["m" /* HEIGHT */], __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["m" /* HEIGHT */]), _Object$freeze2));

var uuid = 1;
function getInstanceId() {
  return 'i' + uuid++;
}

function reifyState() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      events = _ref.events,
      actionLists = _ref.actionLists,
      site = _ref.site;

  var eventTypeMap = __WEBPACK_IMPORTED_MODULE_2_lodash_reduce___default()(events, function (result, event) {
    var eventTypeId = event.eventTypeId;

    if (!result[eventTypeId]) {
      result[eventTypeId] = {};
    }
    result[eventTypeId][event.id] = event;
    return result;
  }, {});

  var mediaQueries = site && site.mediaQueries;
  var mediaQueryKeys = [];
  if (mediaQueries) {
    mediaQueryKeys = mediaQueries.map(function (mq) {
      return mq.key;
    });
  } else {
    mediaQueries = [];
    console.warn('IX2 missing mediaQueries in site data');
  }

  return {
    ixData: {
      events: events,
      actionLists: actionLists,
      eventTypeMap: eventTypeMap,
      mediaQueries: mediaQueries,
      mediaQueryKeys: mediaQueryKeys
    }
  };
}

var strictEqual = function strictEqual(a, b) {
  return a === b;
};

function observeStore(_ref2) {
  var store = _ref2.store,
      select = _ref2.select,
      onChange = _ref2.onChange,
      _ref2$comparator = _ref2.comparator,
      comparator = _ref2$comparator === undefined ? strictEqual : _ref2$comparator;
  var getState = store.getState,
      subscribe = store.subscribe;

  var unsubscribe = subscribe(handleChange);
  var currentState = select(getState());
  function handleChange() {
    var nextState = select(getState());
    if (nextState == null) {
      unsubscribe();
      return;
    }
    if (!comparator(nextState, currentState)) {
      currentState = nextState;
      onChange(currentState, store);
    }
  }
  return unsubscribe;
}

function normalizeTarget(target) {
  var type = typeof target === 'undefined' ? 'undefined' : _typeof(target);
  if (type === 'string') {
    return { id: target };
  } else if (target != null && type === 'object') {
    var id = target.id,
        selector = target.selector,
        selectorGuids = target.selectorGuids,
        appliesTo = target.appliesTo,
        useEventTarget = target.useEventTarget;

    return { id: id, selector: selector, selectorGuids: selectorGuids, appliesTo: appliesTo, useEventTarget: useEventTarget };
  }
  return {};
}

function getAffectedElements(_ref3) {
  var config = _ref3.config,
      event = _ref3.event,
      eventTarget = _ref3.eventTarget,
      elementRoot = _ref3.elementRoot,
      elementApi = _ref3.elementApi;

  if (!elementApi) {
    throw new Error('IX2 missing elementApi');
  }

  var getValidDocument = elementApi.getValidDocument,
      getQuerySelector = elementApi.getQuerySelector,
      queryDocument = elementApi.queryDocument,
      getChildElements = elementApi.getChildElements,
      getSiblingElements = elementApi.getSiblingElements,
      matchSelector = elementApi.matchSelector,
      elementContains = elementApi.elementContains,
      isSiblingNode = elementApi.isSiblingNode;
  var target = config.target;

  if (!target) {
    return [];
  }

  var _normalizeTarget = normalizeTarget(target),
      id = _normalizeTarget.id,
      selector = _normalizeTarget.selector,
      selectorGuids = _normalizeTarget.selectorGuids,
      appliesTo = _normalizeTarget.appliesTo,
      useEventTarget = _normalizeTarget.useEventTarget;

  if (appliesTo === __WEBPACK_IMPORTED_MODULE_6__constants_IX2EngineEventTypes__["o" /* PAGE */]) {
    var doc = getValidDocument(id);
    return doc ? [doc] : [];
  }

  var overrides = __WEBPACK_IMPORTED_MODULE_0_lodash_get___default()(event, 'action.config.affectedElements', {});
  var override = overrides[id || selector] || {};
  var validOverride = Boolean(override.id || override.selector);

  var limitAffectedElements = void 0;
  var baseSelector = void 0;
  var finalSelector = void 0;

  var eventTargetSelector = event && getQuerySelector(normalizeTarget(event.target));

  if (validOverride) {
    limitAffectedElements = override.limitAffectedElements;
    baseSelector = eventTargetSelector;
    finalSelector = getQuerySelector(override);
  } else {

    // pass in selectorGuids as well for server-side rendering.
    baseSelector = finalSelector = getQuerySelector({ id: id, selector: selector, selectorGuids: selectorGuids });
  }

  if (event && useEventTarget) {

    // eventTarget is not defined when this function is called in a clear request, so find
    // all target elements associated with the event data, and return affected elements.
    var eventTargets = eventTarget && finalSelector ? [eventTarget] : queryDocument(eventTargetSelector);

    if (finalSelector) {
      if (useEventTarget === __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["g" /* CHILDREN */]) {
        return queryDocument(finalSelector).filter(function (childElement) {
          return eventTargets.some(function (targetElement) {
            return elementContains(targetElement, childElement);
          });
        });
      }
      if (useEventTarget === __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["x" /* SIBLINGS */]) {
        return queryDocument(finalSelector).filter(function (siblingElement) {
          return eventTargets.some(function (targetElement) {
            return isSiblingNode(targetElement, siblingElement);
          });
        });
      }
    }
    return eventTargets;
  }

  if (baseSelector == null || finalSelector == null) {
    return [];
  }

  if (__WEBPACK_IMPORTED_MODULE_8__IX2BrowserSupport__["c" /* IS_BROWSER_ENV */] && elementRoot) {
    return queryDocument(finalSelector).filter(function (element) {
      return elementRoot.contains(element);
    });
  }

  if (limitAffectedElements === __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["g" /* CHILDREN */]) {
    return queryDocument(baseSelector, finalSelector);
  } else if (limitAffectedElements === __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["n" /* IMMEDIATE_CHILDREN */]) {
    return getChildElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
  } else if (limitAffectedElements === __WEBPACK_IMPORTED_MODULE_7__constants_IX2EngineConstants__["x" /* SIBLINGS */]) {
    return getSiblingElements(queryDocument(baseSelector)).filter(matchSelector(finalSelector));
  } else {
    return queryDocument(finalSelector);
