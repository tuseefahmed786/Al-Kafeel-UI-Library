'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Button = function Button(_ref) {
  var label = _ref.label,
    color = _ref.color,
    variant = _ref.variant,
    width = _ref.width,
    borderRadius = _ref.borderRadius;
  var _React$useState = React__default["default"].useState("hello"),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    first = _React$useState2[0];
    _React$useState2[1];
  console.log(first);
  return /*#__PURE__*/React__default["default"].createElement("button", {
    className: "default ".concat(variant, " ").concat(width, " ").concat(borderRadius),
    style: {
      color: "".concat(color)
    }
  }, label);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".d-flex {\r\n    display: flex;\r\n}\r\n\r\n/* Button Starting.... */\r\n\r\n.default {\r\n    border: none;\r\n    background: transparent;\r\n    border-radius: .2em;\r\n    padding: 0.5em 0.9em;\r\n    width: fit-content;\r\n    background-color: black;\r\n}\r\n\r\n.contained {\r\n    background-color: rgb(25, 118, 210);\r\n    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 1px -5px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\r\n}\r\n\r\n.outlined {\r\n    border: 1px solid rgb(25, 118, 210);\r\n    color: currentColor;\r\n}\r\n\r\n.parentwidth{\r\nwidth: 100%;\r\n}\r\n\r\n.rounded-pill{\r\nborder-radius: 200px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* Layout Starting */\r\n.column {\r\n    flex-direction: column;\r\n}\r\n\r\n.row {\r\n    flex-direction: row;\r\n}\r\n\r\n.reversecolumn {\r\n    flex-direction: column-reverse;\r\n}\r\n\r\n.reverserow {\r\n    flex-direction: row-reverse;\r\n}";
styleInject(css_248z$2);

var Layout = function Layout(_ref) {
  var children = _ref.children,
    gap = _ref.gap,
    direction = _ref.direction;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "d-flex ".concat(direction),
    style: {
      gap: "".concat(gap, "em")
    }
  }, children));
};

var css_248z$1 = ".avatarHeight {\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.avatarImage {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.plusavatar{\r\n    border-radius: 38px;\r\n    border: 2px solid white;\r\n    background: rgb(189, 189, 189);\r\n    color: white;\r\n}\r\n.avatarImage img {\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.cirecleRadius{\r\n    border-radius: 299px;\r\n}\r\n.forcheck{\r\n    border-radius: 2px;\r\n}\r\n/* Avatar Layout */\r\n\r\n.avatarLayout .avatarImage{\r\n    margin-left: -5px;\r\n}\r\n\r\n.avatarLayout .avatarImage img{\r\nborder: 2px solid white;\r\n}\r\n\r\n\r\n";
styleInject(css_248z$1);

function Avatar(_ref) {
  var src = _ref.src,
    alt = _ref.alt,
    borderRadius = _ref.borderRadius;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "avatarImage avatarHeight"
  }, /*#__PURE__*/React__default["default"].createElement("img", {
    className: "".concat(borderRadius),
    src: src,
    alt: alt
  })));
}
Avatar.defaultProps = {
  borderRadius: 'cirecleRadius'
};

var AvatarLayout = function AvatarLayout(_ref) {
  var children = _ref.children,
    max = _ref.max;
  if (max) {
    if (children.length > max.length) {
      var sliceMax = Array.from(children).slice(0, max);
      var count = children.length - sliceMax.length;
      console.log(count);
    }
  }
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "avatarImage  avatarLayout"
  }, children.length > max.length ? sliceMax.map(function (e) {
    return e;
  }) : children, children.length > max.length && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "d-flex avatarImage avatarHeight plusavatar"
  }, /*#__PURE__*/React__default["default"].createElement("span", null, "+ ".concat(count))));
};

var css_248z = "p {\r\n  margin: 0;\r\n}\r\n\r\n.sm-text {\r\n  font-size: 12px;\r\n}\r\n.align-items-center{\r\n  align-items: center;\r\n}\r\n.py-6{\r\n  padding-top: 0.2em;\r\n  padding-bottom: 0.2em;\r\n}\r\n.lg-white{\r\n  color: (0,0%,100%,.8);\r\n}\r\n.py-1 {\r\n  padding-top: .5em;\r\n  padding-bottom: .5em;\r\n}\r\n\r\n.box-sizing {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.blur {\r\n  border-radius: 10px;\r\n  backdrop-filter: blur(5px) saturate(1.5)\r\n}\r\n\r\n.ph-1 {\r\n  padding-left: .5em;\r\n  padding-right: .5em;\r\n}\r\n\r\n.ph-2 {\r\n  padding-left: .7em;\r\n  padding-right: .7em;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n.absolute {\r\n  position: absolute;\r\n}\r\n\r\n.bootom-1 {\r\n  bottom: 0.35em;\r\n}\r\n\r\n.width-100 {\r\n  width: 100%;\r\n}\r\n\r\n.width-cal-8-100 {\r\n  width: calc(100% - 8px);\r\n  margin-left: 3px;\r\n}\r\n\r\n.height-100 {\r\n  height: 100%;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.justify-content-space-between {\r\n  justify-content: space-between;\r\n}\r\n\r\n.bg-none {\r\n  background: none;\r\n}\r\n\r\n.border-none {\r\n  border: none;\r\n}\r\n\r\n.border-1 {\r\n  border: 1px solid hsla(0, 0%, 100%, .2);\r\n}\r\n\r\n.white-clr {\r\n  color: white;\r\n}\r\n\r\n.bg-black {\r\n  background: rgba(0, 0, 0, .2);\r\n}\r\n\r\n.radius-2 {\r\n  padding: 8px 11px;\r\n  border-radius: 11px;\r\n}\r\n\r\n.radius-1{\r\nborder-radius: 12px;\r\n}\r\n.object-fit-cover{\r\n  object-fit: cover;\r\n}";
styleInject(css_248z);

function Card(_ref) {
  var children = _ref.children,
    className = _ref.className,
    width = _ref.width,
    height = _ref.height;
  var styles = {
    box: {
      height: height,
      width: width
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    style: styles.box,
    className: "card relative ".concat(className)
  }, children));
}

function Image(_ref) {
  var className = _ref.className,
    src = _ref.src,
    borderRadius = _ref.borderRadius;
  var styles = {
    box: {
      borderRadius: borderRadius
    }
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("img", {
    className: "".concat(className),
    src: src,
    style: styles.box
  }));
}

function FooterCard(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(className)
  }, children));
}

exports.Avatar = Avatar;
exports.AvatarLayout = AvatarLayout;
exports.Button = Button;
exports.Card = Card;
exports.FooterCard = FooterCard;
exports.Image = Image;
exports.Layout = Layout;
