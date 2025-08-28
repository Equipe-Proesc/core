import * as v from "react";
import se from "react";
var O = { exports: {} }, x = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function le() {
  if (M) return x;
  M = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function t(a, o, l) {
    var f = null;
    if (l !== void 0 && (f = "" + l), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      l = {};
      for (var c in o)
        c !== "key" && (l[c] = o[c]);
    } else l = o;
    return o = l.ref, {
      $$typeof: r,
      type: a,
      key: f,
      ref: o !== void 0 ? o : null,
      props: l
    };
  }
  return x.Fragment = n, x.jsx = t, x.jsxs = t, x;
}
var k = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var U;
function ie() {
  return U || (U = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ne ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case y:
          return "Fragment";
        case X:
          return "Profiler";
        case T:
          return "StrictMode";
        case K:
          return "Suspense";
        case ee:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case A:
            return "Portal";
          case Z:
            return (e.displayName || "Context") + ".Provider";
          case H:
            return (e._context.displayName || "Context") + ".Consumer";
          case Q:
            var s = e.render;
            return e = e.displayName, e || (e = s.displayName || s.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case re:
            return s = e.displayName || null, s !== null ? s : r(e.type) || "Memo";
          case I:
            s = e._payload, e = e._init;
            try {
              return r(e(s));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function t(e) {
      try {
        n(e);
        var s = !1;
      } catch {
        s = !0;
      }
      if (s) {
        s = console;
        var i = s.error, d = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          s,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          d
        ), n(e);
      }
    }
    function a(e) {
      if (e === y) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var s = r(e);
        return s ? "<" + s + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (Y.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function c(e, s) {
      function i() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          s
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function R() {
      var e = r(this.type);
      return D[e] || (D[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function u(e, s, i, d, g, _, P, N) {
      return i = _.ref, e = {
        $$typeof: S,
        type: e,
        key: s,
        props: _,
        _owner: g
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: P
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: N
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function b(e, s, i, d, g, _, P, N) {
      var m = s.children;
      if (m !== void 0)
        if (d)
          if (oe(m)) {
            for (d = 0; d < m.length; d++)
              p(m[d]);
            Object.freeze && Object.freeze(m);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(m);
      if (Y.call(s, "key")) {
        m = r(e);
        var h = Object.keys(s).filter(function(ae) {
          return ae !== "key";
        });
        d = 0 < h.length ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}", L[m + d] || (h = 0 < h.length ? "{" + h.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          d,
          m,
          h,
          m
        ), L[m + d] = !0);
      }
      if (m = null, i !== void 0 && (t(i), m = "" + i), f(s) && (t(s.key), m = "" + s.key), "key" in s) {
        i = {};
        for (var C in s)
          C !== "key" && (i[C] = s[C]);
      } else i = s;
      return m && c(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), u(
        e,
        m,
        _,
        g,
        o(),
        i,
        P,
        N
      );
    }
    function p(e) {
      typeof e == "object" && e !== null && e.$$typeof === S && e._store && (e._store.validated = 1);
    }
    var E = se, S = Symbol.for("react.transitional.element"), A = Symbol.for("react.portal"), y = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), X = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), Z = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), ne = Symbol.for("react.client.reference"), j = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, oe = Array.isArray, w = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var W, D = {}, F = E.react_stack_bottom_frame.bind(
      E,
      l
    )(), $ = w(a(l)), L = {};
    k.Fragment = y, k.jsx = function(e, s, i, d, g) {
      var _ = 1e4 > j.recentlyCreatedOwnerStacks++;
      return b(
        e,
        s,
        i,
        !1,
        d,
        g,
        _ ? Error("react-stack-top-frame") : F,
        _ ? w(a(e)) : $
      );
    }, k.jsxs = function(e, s, i, d, g) {
      var _ = 1e4 > j.recentlyCreatedOwnerStacks++;
      return b(
        e,
        s,
        i,
        !0,
        d,
        g,
        _ ? Error("react-stack-top-frame") : F,
        _ ? w(a(e)) : $
      );
    };
  })()), k;
}
var z;
function ue() {
  return z || (z = 1, process.env.NODE_ENV === "production" ? O.exports = le() : O.exports = ie()), O.exports;
}
var V = ue();
function J(r, n) {
  if (typeof r == "function")
    return r(n);
  r != null && (r.current = n);
}
function ce(...r) {
  return (n) => {
    let t = !1;
    const a = r.map((o) => {
      const l = J(o, n);
      return !t && typeof l == "function" && (t = !0), l;
    });
    if (t)
      return () => {
        for (let o = 0; o < a.length; o++) {
          const l = a[o];
          typeof l == "function" ? l() : J(r[o], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function fe(r) {
  const n = /* @__PURE__ */ me(r), t = v.forwardRef((a, o) => {
    const { children: l, ...f } = a, c = v.Children.toArray(l), R = c.find(be);
    if (R) {
      const u = R.props.children, b = c.map((p) => p === R ? v.Children.count(u) > 1 ? v.Children.only(null) : v.isValidElement(u) ? u.props.children : null : p);
      return /* @__PURE__ */ V.jsx(n, { ...f, ref: o, children: v.isValidElement(u) ? v.cloneElement(u, void 0, b) : null });
    }
    return /* @__PURE__ */ V.jsx(n, { ...f, ref: o, children: l });
  });
  return t.displayName = `${r}.Slot`, t;
}
var de = /* @__PURE__ */ fe("Slot");
// @__NO_SIDE_EFFECTS__
function me(r) {
  const n = v.forwardRef((t, a) => {
    const { children: o, ...l } = t;
    if (v.isValidElement(o)) {
      const f = Ee(o), c = pe(l, o.props);
      return o.type !== v.Fragment && (c.ref = a ? ce(a, f) : f), v.cloneElement(o, c);
    }
    return v.Children.count(o) > 1 ? v.Children.only(null) : null;
  });
  return n.displayName = `${r}.SlotClone`, n;
}
var ve = Symbol("radix.slottable");
function be(r) {
  return v.isValidElement(r) && typeof r.type == "function" && "__radixId" in r.type && r.type.__radixId === ve;
}
function pe(r, n) {
  const t = { ...n };
  for (const a in n) {
    const o = r[a], l = n[a];
    /^on[A-Z]/.test(a) ? o && l ? t[a] = (...c) => {
      const R = l(...c);
      return o(...c), R;
    } : o && (t[a] = o) : a === "style" ? t[a] = { ...o, ...l } : a === "className" && (t[a] = [o, l].filter(Boolean).join(" "));
  }
  return { ...r, ...t };
}
function Ee(r) {
  let n = Object.getOwnPropertyDescriptor(r.props, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning;
  return t ? r.ref : (n = Object.getOwnPropertyDescriptor(r, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? r.props.ref : r.props.ref || r.ref);
}
function G(r) {
  var n, t, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object") if (Array.isArray(r)) {
    var o = r.length;
    for (n = 0; n < o; n++) r[n] && (t = G(r[n])) && (a && (a += " "), a += t);
  } else for (t in r) r[t] && (a && (a += " "), a += t);
  return a;
}
function _e() {
  for (var r, n, t = 0, a = "", o = arguments.length; t < o; t++) (r = arguments[t]) && (n = G(r)) && (a && (a += " "), a += n);
  return a;
}
const q = (r) => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r, B = _e, Re = (r, n) => (t) => {
  var a;
  if (n?.variants == null) return B(r, t?.class, t?.className);
  const { variants: o, defaultVariants: l } = n, f = Object.keys(o).map((u) => {
    const b = t?.[u], p = l?.[u];
    if (b === null) return null;
    const E = q(b) || q(p);
    return o[u][E];
  }), c = t && Object.entries(t).reduce((u, b) => {
    let [p, E] = b;
    return E === void 0 || (u[p] = E), u;
  }, {}), R = n == null || (a = n.compoundVariants) === null || a === void 0 ? void 0 : a.reduce((u, b) => {
    let { class: p, className: E, ...S } = b;
    return Object.entries(S).every((A) => {
      let [y, T] = A;
      return Array.isArray(T) ? T.includes({
        ...l,
        ...c
      }[y]) : {
        ...l,
        ...c
      }[y] === T;
    }) ? [
      ...u,
      p,
      E
    ] : u;
  }, []);
  return B(r, f, R, t?.class, t?.className);
};
function ge(...r) {
  return r.filter(Boolean).join(" ");
}
const ye = Re(
  "inline-flex dark:bg-gray-700 dark:hover:bg-gray-800 items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-green-800 hover:bg-green-900 text-primary-foreground shadow",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), he = v.forwardRef(
  ({ className: r, variant: n, size: t, asChild: a = !1, ...o }, l) => {
    const f = a ? de : "button";
    return /* @__PURE__ */ V.jsx(
      f,
      {
        className: ge(ye({ variant: n, size: t, className: r })),
        ref: l,
        ...o
      }
    );
  }
);
he.displayName = "Button";
export {
  he as Button,
  ye as buttonVariants,
  ge as cn
};
