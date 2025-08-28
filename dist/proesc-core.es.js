import * as c from "react";
import O, { forwardRef as ln, createElement as ot, PureComponent as Rc, useState as Vt, useRef as Zt, useCallback as Ac, useMemo as ea, useEffect as Ct, useLayoutEffect as ta } from "react";
import * as na from "react-dom";
import Pc from "react-dom";
var jt = { exports: {} }, mt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var so;
function _c() {
  if (so) return mt;
  so = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, o, a) {
    var s = null;
    if (a !== void 0 && (s = "" + a), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      a = {};
      for (var i in o)
        i !== "key" && (a[i] = o[i]);
    } else a = o;
    return o = a.ref, {
      $$typeof: e,
      type: r,
      key: s,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return mt.Fragment = t, mt.jsx = n, mt.jsxs = n, mt;
}
var ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function Oc() {
  return co || (co = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === D ? null : R.displayName || R.name || null;
      if (typeof R == "string") return R;
      switch (R) {
        case m:
          return "Fragment";
        case g:
          return "Profiler";
        case w:
          return "StrictMode";
        case E:
          return "Suspense";
        case _:
          return "SuspenseList";
        case P:
          return "Activity";
      }
      if (typeof R == "object")
        switch (typeof R.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), R.$$typeof) {
          case b:
            return "Portal";
          case S:
            return (R.displayName || "Context") + ".Provider";
          case x:
            return (R._context.displayName || "Context") + ".Consumer";
          case y:
            var $ = R.render;
            return R = R.displayName, R || (R = $.displayName || $.name || "", R = R !== "" ? "ForwardRef(" + R + ")" : "ForwardRef"), R;
          case C:
            return $ = R.displayName || null, $ !== null ? $ : e(R.type) || "Memo";
          case A:
            $ = R._payload, R = R._init;
            try {
              return e(R($));
            } catch {
            }
        }
      return null;
    }
    function t(R) {
      return "" + R;
    }
    function n(R) {
      try {
        t(R);
        var $ = !1;
      } catch {
        $ = !0;
      }
      if ($) {
        $ = console;
        var Y = $.error, G = typeof Symbol == "function" && Symbol.toStringTag && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return Y.call(
          $,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), t(R);
      }
    }
    function r(R) {
      if (R === m) return "<>";
      if (typeof R == "object" && R !== null && R.$$typeof === A)
        return "<...>";
      try {
        var $ = e(R);
        return $ ? "<" + $ + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var R = j.A;
      return R === null ? null : R.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(R) {
      if (I.call(R, "key")) {
        var $ = Object.getOwnPropertyDescriptor(R, "key").get;
        if ($ && $.isReactWarning) return !1;
      }
      return R.key !== void 0;
    }
    function i(R, $) {
      function Y() {
        H || (H = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          $
        ));
      }
      Y.isReactWarning = !0, Object.defineProperty(R, "key", {
        get: Y,
        configurable: !0
      });
    }
    function p() {
      var R = e(this.type);
      return z[R] || (z[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function u(R, $, Y, G, ee, ne, ce, X) {
      return Y = ne.ref, R = {
        $$typeof: v,
        type: R,
        key: $,
        props: ne,
        _owner: ee
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: p
      }) : Object.defineProperty(R, "ref", { enumerable: !1, value: null }), R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(R, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(R, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ce
      }), Object.defineProperty(R, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    }
    function d(R, $, Y, G, ee, ne, ce, X) {
      var Z = $.children;
      if (Z !== void 0)
        if (G)
          if (T(Z)) {
            for (G = 0; G < Z.length; G++)
              f(Z[G]);
            Object.freeze && Object.freeze(Z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(Z);
      if (I.call($, "key")) {
        Z = e(R);
        var he = Object.keys($).filter(function(Re) {
          return Re !== "key";
        });
        G = 0 < he.length ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}", N[Z + G] || (he = 0 < he.length ? "{" + he.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          Z,
          he,
          Z
        ), N[Z + G] = !0);
      }
      if (Z = null, Y !== void 0 && (n(Y), Z = "" + Y), s($) && (n($.key), Z = "" + $.key), "key" in $) {
        Y = {};
        for (var Ie in $)
          Ie !== "key" && (Y[Ie] = $[Ie]);
      } else Y = $;
      return Z && i(
        Y,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), u(
        R,
        Z,
        ne,
        ee,
        o(),
        Y,
        ce,
        X
      );
    }
    function f(R) {
      typeof R == "object" && R !== null && R.$$typeof === v && R._store && (R._store.validated = 1);
    }
    var h = O, v = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), P = Symbol.for("react.activity"), D = Symbol.for("react.client.reference"), j = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, T = Array.isArray, L = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(R) {
        return R();
      }
    };
    var H, z = {}, B = h.react_stack_bottom_frame.bind(
      h,
      a
    )(), k = L(r(a)), N = {};
    ht.Fragment = m, ht.jsx = function(R, $, Y, G, ee) {
      var ne = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        R,
        $,
        Y,
        !1,
        G,
        ee,
        ne ? Error("react-stack-top-frame") : B,
        ne ? L(r(R)) : k
      );
    }, ht.jsxs = function(R, $, Y, G, ee) {
      var ne = 1e4 > j.recentlyCreatedOwnerStacks++;
      return d(
        R,
        $,
        Y,
        !0,
        G,
        ee,
        ne ? Error("react-stack-top-frame") : B,
        ne ? L(r(R)) : k
      );
    };
  })()), ht;
}
var lo;
function Tc() {
  return lo || (lo = 1, process.env.NODE_ENV === "production" ? jt.exports = _c() : jt.exports = Oc()), jt.exports;
}
var l = Tc();
function uo(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function un(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = uo(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : uo(e[o], null);
        }
      };
  };
}
function J(...e) {
  return c.useCallback(un(...e), e);
}
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  const t = /* @__PURE__ */ Nc(e), n = c.forwardRef((r, o) => {
    const { children: a, ...s } = r, i = c.Children.toArray(a), p = i.find(Ic);
    if (p) {
      const u = p.props.children, d = i.map((f) => f === p ? c.Children.count(u) > 1 ? c.Children.only(null) : c.isValidElement(u) ? u.props.children : null : f);
      return /* @__PURE__ */ l.jsx(t, { ...s, ref: o, children: c.isValidElement(u) ? c.cloneElement(u, void 0, d) : null });
    }
    return /* @__PURE__ */ l.jsx(t, { ...s, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var ra = /* @__PURE__ */ Xe("Slot");
// @__NO_SIDE_EFFECTS__
function Nc(e) {
  const t = c.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (c.isValidElement(o)) {
      const s = jc(o), i = Mc(a, o.props);
      return o.type !== c.Fragment && (i.ref = r ? un(r, s) : s), c.cloneElement(o, i);
    }
    return c.Children.count(o) > 1 ? c.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Dc = Symbol("radix.slottable");
function Ic(e) {
  return c.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Dc;
}
function Mc(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const p = a(...i);
      return o(...i), p;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function jc(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function oa(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = oa(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function kc() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = oa(e)) && (r && (r += " "), r += t);
  return r;
}
const fo = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, po = kc, Et = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return po(e, n?.class, n?.className);
  const { variants: o, defaultVariants: a } = t, s = Object.keys(o).map((u) => {
    const d = n?.[u], f = a?.[u];
    if (d === null) return null;
    const h = fo(d) || fo(f);
    return o[u][h];
  }), i = n && Object.entries(n).reduce((u, d) => {
    let [f, h] = d;
    return h === void 0 || (u[f] = h), u;
  }, {}), p = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, d) => {
    let { class: f, className: h, ...v } = d;
    return Object.entries(v).every((b) => {
      let [m, w] = b;
      return Array.isArray(w) ? w.includes({
        ...a,
        ...i
      }[m]) : {
        ...a,
        ...i
      }[m] === w;
    }) ? [
      ...u,
      f,
      h
    ] : u;
  }, []);
  return po(e, s, p, n?.class, n?.className);
};
function M(...e) {
  return e.filter(Boolean).join(" ");
}
const Lc = Et(
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
), $c = c.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
    const s = r ? ra : "button";
    return /* @__PURE__ */ l.jsx(
      s,
      {
        className: M(Lc({ variant: t, size: n, className: e })),
        ref: a,
        "aria-label": o["aria-label"] || (typeof o.children == "string" ? o.children : void 0),
        ...o
      }
    );
  }
);
$c.displayName = "Button";
function Fc(e, t) {
  const n = c.createContext(t), r = (a) => {
    const { children: s, ...i } = a, p = c.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ l.jsx(n.Provider, { value: p, children: s });
  };
  r.displayName = e + "Provider";
  function o(a) {
    const s = c.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function Se(e, t = []) {
  let n = [];
  function r(a, s) {
    const i = c.createContext(s), p = n.length;
    n = [...n, s];
    const u = (f) => {
      const { scope: h, children: v, ...b } = f, m = h?.[e]?.[p] || i, w = c.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ l.jsx(m.Provider, { value: w, children: v });
    };
    u.displayName = a + "Provider";
    function d(f, h) {
      const v = h?.[e]?.[p] || i, b = c.useContext(v);
      if (b) return b;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [u, d];
  }
  const o = () => {
    const a = n.map((s) => c.createContext(s));
    return function(i) {
      const p = i?.[e] || a;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: p } }),
        [i, p]
      );
    };
  };
  return o.scopeName = e, [r, zc(o, ...t)];
}
function zc(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: p, scopeName: u }) => {
        const f = p(a)[`__scope${u}`];
        return { ...i, ...f };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function pr(e) {
  const t = e + "CollectionProvider", [n, r] = Se(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (m) => {
    const { scope: w, children: g } = m, x = O.useRef(null), S = O.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l.jsx(o, { scope: w, itemMap: S, collectionRef: x, children: g });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", p = /* @__PURE__ */ Xe(i), u = O.forwardRef(
    (m, w) => {
      const { scope: g, children: x } = m, S = a(i, g), y = J(w, S.collectionRef);
      return /* @__PURE__ */ l.jsx(p, { ref: y, children: x });
    }
  );
  u.displayName = i;
  const d = e + "CollectionItemSlot", f = "data-radix-collection-item", h = /* @__PURE__ */ Xe(d), v = O.forwardRef(
    (m, w) => {
      const { scope: g, children: x, ...S } = m, y = O.useRef(null), E = J(w, y), _ = a(d, g);
      return O.useEffect(() => (_.itemMap.set(y, { ref: y, ...S }), () => void _.itemMap.delete(y))), /* @__PURE__ */ l.jsx(h, { [f]: "", ref: E, children: x });
    }
  );
  v.displayName = d;
  function b(m) {
    const w = a(e + "CollectionConsumer", m);
    return O.useCallback(() => {
      const x = w.collectionRef.current;
      if (!x) return [];
      const S = Array.from(x.querySelectorAll(`[${f}]`));
      return Array.from(w.itemMap.values()).sort(
        (_, C) => S.indexOf(_.ref.current) - S.indexOf(C.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [
    { Provider: s, Slot: u, ItemSlot: v },
    b,
    r
  ];
}
function F(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var me = globalThis?.document ? c.useLayoutEffect : () => {
}, Wc = c[" useInsertionEffect ".trim().toString()] || me;
function Be({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = Bc({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, p = i ? e : o;
  {
    const d = c.useRef(e !== void 0);
    c.useEffect(() => {
      const f = d.current;
      f !== i && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = i;
    }, [i, r]);
  }
  const u = c.useCallback(
    (d) => {
      if (i) {
        const f = Hc(d) ? d(e) : d;
        f !== e && s.current?.(f);
      } else
        a(d);
    },
    [i, e, a, s]
  );
  return [p, u];
}
function Bc({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), a = c.useRef(t);
  return Wc(() => {
    a.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (a.current?.(n), o.current = n);
  }, [n, o]), [n, r, a];
}
function Hc(e) {
  return typeof e == "function";
}
var Uc = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], V = Uc.reduce((e, t) => {
  const n = /* @__PURE__ */ Xe(`Primitive.${t}`), r = c.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, p = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(p, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function aa(e, t) {
  e && na.flushSync(() => e.dispatchEvent(t));
}
function Vc(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var ue = (e) => {
  const { present: t, children: n } = e, r = Yc(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), a = J(r.ref, Gc(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: a }) : null;
};
ue.displayName = "Presence";
function Yc(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), a = c.useRef("none"), s = e ? "mounted" : "unmounted", [i, p] = Vc(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return c.useEffect(() => {
    const u = kt(r.current);
    a.current = i === "mounted" ? u : "none";
  }, [i]), me(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const h = a.current, v = kt(u);
      e ? p("MOUNT") : v === "none" || u?.display === "none" ? p("UNMOUNT") : p(d && h !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, p]), me(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (v) => {
        const m = kt(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && m && (p("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, h = (v) => {
        v.target === t && (a.current = kt(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      p("ANIMATION_END");
  }, [t, p]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: c.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function kt(e) {
  return e?.animationName || "none";
}
function Gc(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Kc = c[" useId ".trim().toString()] || (() => {
}), Xc = 0;
function be(e) {
  const [t, n] = c.useState(Kc());
  return me(() => {
    n((r) => r ?? String(Xc++));
  }, [e]), t ? `radix-${t}` : "";
}
var dn = "Collapsible", [qc, ia] = Se(dn), [Zc, mr] = qc(dn), sa = c.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: s,
      ...i
    } = e, [p, u] = Be({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: dn
    });
    return /* @__PURE__ */ l.jsx(
      Zc,
      {
        scope: n,
        disabled: a,
        contentId: be(),
        open: p,
        onOpenToggle: c.useCallback(() => u((d) => !d), [u]),
        children: /* @__PURE__ */ l.jsx(
          V.div,
          {
            "data-state": vr(p),
            "data-disabled": a ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
sa.displayName = dn;
var ca = "CollapsibleTrigger", la = c.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = mr(ca, n);
    return /* @__PURE__ */ l.jsx(
      V.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": vr(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
la.displayName = ca;
var hr = "CollapsibleContent", ua = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = mr(hr, e.__scopeCollapsible);
    return /* @__PURE__ */ l.jsx(ue, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ l.jsx(Jc, { ...r, ref: t, present: a }) });
  }
);
ua.displayName = hr;
var Jc = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = mr(hr, n), [i, p] = c.useState(r), u = c.useRef(null), d = J(t, u), f = c.useRef(0), h = f.current, v = c.useRef(0), b = v.current, m = s.open || i, w = c.useRef(m), g = c.useRef(void 0);
  return c.useEffect(() => {
    const x = requestAnimationFrame(() => w.current = !1);
    return () => cancelAnimationFrame(x);
  }, []), me(() => {
    const x = u.current;
    if (x) {
      g.current = g.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const S = x.getBoundingClientRect();
      f.current = S.height, v.current = S.width, w.current || (x.style.transitionDuration = g.current.transitionDuration, x.style.animationName = g.current.animationName), p(r);
    }
  }, [s.open, r]), /* @__PURE__ */ l.jsx(
    V.div,
    {
      "data-state": vr(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !m,
      ...a,
      ref: d,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": b ? `${b}px` : void 0,
        ...e.style
      },
      children: m && o
    }
  );
});
function vr(e) {
  return e ? "open" : "closed";
}
var Qc = sa, el = la, tl = ua, nl = c.createContext(void 0);
function fn(e) {
  const t = c.useContext(nl);
  return e || t || "ltr";
}
var Ce = "Accordion", rl = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [gr, ol, al] = pr(Ce), [pn, qh] = Se(Ce, [
  al,
  ia
]), wr = ia(), da = O.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ l.jsx(gr.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ l.jsx(ll, { ...a, ref: t }) : /* @__PURE__ */ l.jsx(cl, { ...o, ref: t }) });
  }
);
da.displayName = Ce;
var [fa, il] = pn(Ce), [pa, sl] = pn(
  Ce,
  { collapsible: !1 }
), cl = O.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...s
    } = e, [i, p] = Be({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Ce
    });
    return /* @__PURE__ */ l.jsx(
      fa,
      {
        scope: e.__scopeAccordion,
        value: O.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: p,
        onItemClose: O.useCallback(() => a && p(""), [a, p]),
        children: /* @__PURE__ */ l.jsx(pa, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ l.jsx(ma, { ...s, ref: t }) })
      }
    );
  }
), ll = O.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, i] = Be({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Ce
  }), p = O.useCallback(
    (d) => i((f = []) => [...f, d]),
    [i]
  ), u = O.useCallback(
    (d) => i((f = []) => f.filter((h) => h !== d)),
    [i]
  );
  return /* @__PURE__ */ l.jsx(
    fa,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: p,
      onItemClose: u,
      children: /* @__PURE__ */ l.jsx(pa, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ l.jsx(ma, { ...a, ref: t }) })
    }
  );
}), [ul, mn] = pn(Ce), ma = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = O.useRef(null), p = J(i, t), u = ol(n), f = fn(o) === "ltr", h = F(e.onKeyDown, (v) => {
      if (!rl.includes(v.key)) return;
      const b = v.target, m = u().filter((A) => !A.ref.current?.disabled), w = m.findIndex((A) => A.ref.current === b), g = m.length;
      if (w === -1) return;
      v.preventDefault();
      let x = w;
      const S = 0, y = g - 1, E = () => {
        x = w + 1, x > y && (x = S);
      }, _ = () => {
        x = w - 1, x < S && (x = y);
      };
      switch (v.key) {
        case "Home":
          x = S;
          break;
        case "End":
          x = y;
          break;
        case "ArrowRight":
          a === "horizontal" && (f ? E() : _());
          break;
        case "ArrowDown":
          a === "vertical" && E();
          break;
        case "ArrowLeft":
          a === "horizontal" && (f ? _() : E());
          break;
        case "ArrowUp":
          a === "vertical" && _();
          break;
      }
      const C = x % g;
      m[C].ref.current?.focus();
    });
    return /* @__PURE__ */ l.jsx(
      ul,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ l.jsx(gr.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(
          V.div,
          {
            ...s,
            "data-orientation": a,
            ref: p,
            onKeyDown: r ? void 0 : h
          }
        ) })
      }
    );
  }
), Jt = "AccordionItem", [dl, br] = pn(Jt), ha = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = mn(Jt, n), s = il(Jt, n), i = wr(n), p = be(), u = r && s.value.includes(r) || !1, d = a.disabled || e.disabled;
    return /* @__PURE__ */ l.jsx(
      dl,
      {
        scope: n,
        open: u,
        disabled: d,
        triggerId: p,
        children: /* @__PURE__ */ l.jsx(
          Qc,
          {
            "data-orientation": a.orientation,
            "data-state": ya(u),
            ...i,
            ...o,
            ref: t,
            disabled: d,
            open: u,
            onOpenChange: (f) => {
              f ? s.onItemOpen(r) : s.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
ha.displayName = Jt;
var va = "AccordionHeader", ga = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = mn(Ce, n), a = br(va, n);
    return /* @__PURE__ */ l.jsx(
      V.h3,
      {
        "data-orientation": o.orientation,
        "data-state": ya(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
ga.displayName = va;
var er = "AccordionTrigger", wa = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = mn(Ce, n), a = br(er, n), s = sl(er, n), i = wr(n);
    return /* @__PURE__ */ l.jsx(gr.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
      el,
      {
        "aria-disabled": a.open && !s.collapsible || void 0,
        "data-orientation": o.orientation,
        id: a.triggerId,
        ...i,
        ...r,
        ref: t
      }
    ) });
  }
);
wa.displayName = er;
var ba = "AccordionContent", xa = O.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = mn(Ce, n), a = br(ba, n), s = wr(n);
    return /* @__PURE__ */ l.jsx(
      tl,
      {
        role: "region",
        "aria-labelledby": a.triggerId,
        "data-orientation": o.orientation,
        ...s,
        ...r,
        ref: t,
        style: {
          "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
          "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
          ...e.style
        }
      }
    );
  }
);
xa.displayName = ba;
function ya(e) {
  return e ? "open" : "closed";
}
var fl = da, pl = ha, ml = ga, hl = wa, vl = xa;
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gl = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), wl = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), mo = (e) => {
  const t = wl(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Sa = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), bl = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var xl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yl = ln(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: s,
    ...i
  }, p) => ot(
    "svg",
    {
      ref: p,
      ...xl,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Sa("lucide", o),
      ...!a && !bl(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...s.map(([u, d]) => ot(u, d)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ke = (e, t) => {
  const n = ln(
    ({ className: r, ...o }, a) => ot(yl, {
      ref: a,
      iconNode: t,
      className: Sa(
        `lucide-${gl(mo(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = mo(e), n;
};
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], tr = ke("check", Sl);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cl = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]], Ca = ke("chevron-down", Cl);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], Ea = ke("chevron-right", El);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rl = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
], Al = ke("circle-alert", Rl);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pl = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], _l = ke("circle", Pl);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ol = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
], Tl = ke("ellipsis", Ol);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nl = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], Dl = ke("image", Nl);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Il = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], Ml = ke("loader-circle", Il);
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jl = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], xr = ke("x", jl);
function Zh({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(fl, { "data-slot": "accordion", ...e });
}
function Jh({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    pl,
    {
      "data-slot": "accordion-item",
      className: M("border-b last:border-b-0", e),
      ...t
    }
  );
}
function Qh({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(ml, { className: "flex", children: /* @__PURE__ */ l.jsxs(
    hl,
    {
      "data-slot": "accordion-trigger",
      className: M(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ l.jsx(Ca, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function ev({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    vl,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...n,
      children: /* @__PURE__ */ l.jsx("div", { className: M("pt-0 pb-4", e), children: t })
    }
  );
}
function nr() {
  return nr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, nr.apply(null, arguments);
}
function ho(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function rr(e, t) {
  return rr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, rr(e, t);
}
function kl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, rr(e, t);
}
var vo = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function Ll(e, t) {
  return !!(e === t || vo(e) && vo(t));
}
function $l(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!Ll(e[n], t[n]))
      return !1;
  return !0;
}
function kn(e, t) {
  t === void 0 && (t = $l);
  var n, r = [], o, a = !1;
  function s() {
    for (var i = [], p = 0; p < arguments.length; p++)
      i[p] = arguments[p];
    return a && n === this && t(i, r) || (o = e.apply(this, i), a = !0, n = this, r = i), o;
  }
  return s;
}
var Fl = typeof performance == "object" && typeof performance.now == "function", go = Fl ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function wo(e) {
  cancelAnimationFrame(e.id);
}
function zl(e, t) {
  var n = go();
  function r() {
    go() - n >= t ? e.call(null) : o.id = requestAnimationFrame(r);
  }
  var o = {
    id: requestAnimationFrame(r)
  };
  return o;
}
var Ln = -1;
function bo(e) {
  if (e === void 0 && (e = !1), Ln === -1 || e) {
    var t = document.createElement("div"), n = t.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", document.body.appendChild(t), Ln = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return Ln;
}
var et = null;
function xo(e) {
  if (e === void 0 && (e = !1), et === null || e) {
    var t = document.createElement("div"), n = t.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
    var r = document.createElement("div"), o = r.style;
    return o.width = "100px", o.height = "100px", t.appendChild(r), document.body.appendChild(t), t.scrollLeft > 0 ? et = "positive-descending" : (t.scrollLeft = 1, t.scrollLeft === 0 ? et = "negative" : et = "positive-ascending"), document.body.removeChild(t), et;
  }
  return et;
}
process.env.NODE_ENV;
var Wl = 150, Bl = function(t, n) {
  return t;
}, Yt = null, Gt = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && typeof window.WeakSet < "u" && (Yt = /* @__PURE__ */ new WeakSet(), Gt = /* @__PURE__ */ new WeakSet());
function Hl(e) {
  var t, n = e.getItemOffset, r = e.getEstimatedTotalSize, o = e.getItemSize, a = e.getOffsetForIndexAndAlignment, s = e.getStartIndexForOffset, i = e.getStopIndexForStartIndex, p = e.initInstanceProps, u = e.shouldResetStyleCacheOnItemSizeChange, d = e.validateProps;
  return t = /* @__PURE__ */ (function(f) {
    kl(h, f);
    function h(b) {
      var m;
      return m = f.call(this, b) || this, m._instanceProps = p(m.props, ho(m)), m._outerRef = void 0, m._resetIsScrollingTimeoutId = null, m.state = {
        instance: ho(m),
        isScrolling: !1,
        scrollDirection: "forward",
        scrollOffset: typeof m.props.initialScrollOffset == "number" ? m.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: !1
      }, m._callOnItemsRendered = void 0, m._callOnItemsRendered = kn(function(w, g, x, S) {
        return m.props.onItemsRendered({
          overscanStartIndex: w,
          overscanStopIndex: g,
          visibleStartIndex: x,
          visibleStopIndex: S
        });
      }), m._callOnScroll = void 0, m._callOnScroll = kn(function(w, g, x) {
        return m.props.onScroll({
          scrollDirection: w,
          scrollOffset: g,
          scrollUpdateWasRequested: x
        });
      }), m._getItemStyle = void 0, m._getItemStyle = function(w) {
        var g = m.props, x = g.direction, S = g.itemSize, y = g.layout, E = m._getItemStyleCache(u && S, u && y, u && x), _;
        if (E.hasOwnProperty(w))
          _ = E[w];
        else {
          var C = n(m.props, w, m._instanceProps), A = o(m.props, w, m._instanceProps), P = x === "horizontal" || y === "horizontal", D = x === "rtl", j = P ? C : 0;
          E[w] = _ = {
            position: "absolute",
            left: D ? void 0 : j,
            right: D ? j : void 0,
            top: P ? 0 : C,
            height: P ? "100%" : A,
            width: P ? A : "100%"
          };
        }
        return _;
      }, m._getItemStyleCache = void 0, m._getItemStyleCache = kn(function(w, g, x) {
        return {};
      }), m._onScrollHorizontal = function(w) {
        var g = w.currentTarget, x = g.clientWidth, S = g.scrollLeft, y = g.scrollWidth;
        m.setState(function(E) {
          if (E.scrollOffset === S)
            return null;
          var _ = m.props.direction, C = S;
          if (_ === "rtl")
            switch (xo()) {
              case "negative":
                C = -S;
                break;
              case "positive-descending":
                C = y - x - S;
                break;
            }
          return C = Math.max(0, Math.min(C, y - x)), {
            isScrolling: !0,
            scrollDirection: E.scrollOffset < C ? "forward" : "backward",
            scrollOffset: C,
            scrollUpdateWasRequested: !1
          };
        }, m._resetIsScrollingDebounced);
      }, m._onScrollVertical = function(w) {
        var g = w.currentTarget, x = g.clientHeight, S = g.scrollHeight, y = g.scrollTop;
        m.setState(function(E) {
          if (E.scrollOffset === y)
            return null;
          var _ = Math.max(0, Math.min(y, S - x));
          return {
            isScrolling: !0,
            scrollDirection: E.scrollOffset < _ ? "forward" : "backward",
            scrollOffset: _,
            scrollUpdateWasRequested: !1
          };
        }, m._resetIsScrollingDebounced);
      }, m._outerRefSetter = function(w) {
        var g = m.props.outerRef;
        m._outerRef = w, typeof g == "function" ? g(w) : g != null && typeof g == "object" && g.hasOwnProperty("current") && (g.current = w);
      }, m._resetIsScrollingDebounced = function() {
        m._resetIsScrollingTimeoutId !== null && wo(m._resetIsScrollingTimeoutId), m._resetIsScrollingTimeoutId = zl(m._resetIsScrolling, Wl);
      }, m._resetIsScrolling = function() {
        m._resetIsScrollingTimeoutId = null, m.setState({
          isScrolling: !1
        }, function() {
          m._getItemStyleCache(-1, null);
        });
      }, m;
    }
    h.getDerivedStateFromProps = function(m, w) {
      return Ul(m, w), d(m), null;
    };
    var v = h.prototype;
    return v.scrollTo = function(m) {
      m = Math.max(0, m), this.setState(function(w) {
        return w.scrollOffset === m ? null : {
          scrollDirection: w.scrollOffset < m ? "forward" : "backward",
          scrollOffset: m,
          scrollUpdateWasRequested: !0
        };
      }, this._resetIsScrollingDebounced);
    }, v.scrollToItem = function(m, w) {
      w === void 0 && (w = "auto");
      var g = this.props, x = g.itemCount, S = g.layout, y = this.state.scrollOffset;
      m = Math.max(0, Math.min(m, x - 1));
      var E = 0;
      if (this._outerRef) {
        var _ = this._outerRef;
        S === "vertical" ? E = _.scrollWidth > _.clientWidth ? bo() : 0 : E = _.scrollHeight > _.clientHeight ? bo() : 0;
      }
      this.scrollTo(a(this.props, m, w, y, this._instanceProps, E));
    }, v.componentDidMount = function() {
      var m = this.props, w = m.direction, g = m.initialScrollOffset, x = m.layout;
      if (typeof g == "number" && this._outerRef != null) {
        var S = this._outerRef;
        w === "horizontal" || x === "horizontal" ? S.scrollLeft = g : S.scrollTop = g;
      }
      this._callPropsCallbacks();
    }, v.componentDidUpdate = function() {
      var m = this.props, w = m.direction, g = m.layout, x = this.state, S = x.scrollOffset, y = x.scrollUpdateWasRequested;
      if (y && this._outerRef != null) {
        var E = this._outerRef;
        if (w === "horizontal" || g === "horizontal")
          if (w === "rtl")
            switch (xo()) {
              case "negative":
                E.scrollLeft = -S;
                break;
              case "positive-ascending":
                E.scrollLeft = S;
                break;
              default:
                var _ = E.clientWidth, C = E.scrollWidth;
                E.scrollLeft = C - _ - S;
                break;
            }
          else
            E.scrollLeft = S;
        else
          E.scrollTop = S;
      }
      this._callPropsCallbacks();
    }, v.componentWillUnmount = function() {
      this._resetIsScrollingTimeoutId !== null && wo(this._resetIsScrollingTimeoutId);
    }, v.render = function() {
      var m = this.props, w = m.children, g = m.className, x = m.direction, S = m.height, y = m.innerRef, E = m.innerElementType, _ = m.innerTagName, C = m.itemCount, A = m.itemData, P = m.itemKey, D = P === void 0 ? Bl : P, j = m.layout, I = m.outerElementType, T = m.outerTagName, L = m.style, H = m.useIsScrolling, z = m.width, B = this.state.isScrolling, k = x === "horizontal" || j === "horizontal", N = k ? this._onScrollHorizontal : this._onScrollVertical, R = this._getRangeToRender(), $ = R[0], Y = R[1], G = [];
      if (C > 0)
        for (var ee = $; ee <= Y; ee++)
          G.push(ot(w, {
            data: A,
            key: D(ee, A),
            index: ee,
            isScrolling: H ? B : void 0,
            style: this._getItemStyle(ee)
          }));
      var ne = r(this.props, this._instanceProps);
      return ot(I || T || "div", {
        className: g,
        onScroll: N,
        ref: this._outerRefSetter,
        style: nr({
          position: "relative",
          height: S,
          width: z,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction: x
        }, L)
      }, ot(E || _ || "div", {
        children: G,
        ref: y,
        style: {
          height: k ? "100%" : ne,
          pointerEvents: B ? "none" : void 0,
          width: k ? ne : "100%"
        }
      }));
    }, v._callPropsCallbacks = function() {
      if (typeof this.props.onItemsRendered == "function") {
        var m = this.props.itemCount;
        if (m > 0) {
          var w = this._getRangeToRender(), g = w[0], x = w[1], S = w[2], y = w[3];
          this._callOnItemsRendered(g, x, S, y);
        }
      }
      if (typeof this.props.onScroll == "function") {
        var E = this.state, _ = E.scrollDirection, C = E.scrollOffset, A = E.scrollUpdateWasRequested;
        this._callOnScroll(_, C, A);
      }
    }, v._getRangeToRender = function() {
      var m = this.props, w = m.itemCount, g = m.overscanCount, x = this.state, S = x.isScrolling, y = x.scrollDirection, E = x.scrollOffset;
      if (w === 0)
        return [0, 0, 0, 0];
      var _ = s(this.props, E, this._instanceProps), C = i(this.props, _, E, this._instanceProps), A = !S || y === "backward" ? Math.max(1, g) : 1, P = !S || y === "forward" ? Math.max(1, g) : 1;
      return [Math.max(0, _ - A), Math.max(0, Math.min(w - 1, C + P)), _, C];
    }, h;
  })(Rc), t.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  }, t;
}
var Ul = function(t, n) {
  var r = t.children, o = t.direction, a = t.height, s = t.layout, i = t.innerTagName, p = t.outerTagName, u = t.width, d = n.instance;
  if (process.env.NODE_ENV !== "production") {
    (i != null || p != null) && Gt && !Gt.has(d) && (Gt.add(d), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
    var f = o === "horizontal" || s === "horizontal";
    switch (o) {
      case "horizontal":
      case "vertical":
        Yt && !Yt.has(d) && (Yt.add(d), console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + o + '" was specified.'));
    }
    switch (s) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + s + '" was specified.'));
    }
    if (r == null)
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (r === null ? "null" : typeof r) + '" was specified.'));
    if (f && typeof u != "number")
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (u === null ? "null" : typeof u) + '" was specified.'));
    if (!f && typeof a != "number")
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (a === null ? "null" : typeof a) + '" was specified.'));
  }
}, Vl = /* @__PURE__ */ Hl({
  getItemOffset: function(t, n) {
    var r = t.itemSize;
    return n * r;
  },
  getItemSize: function(t, n) {
    var r = t.itemSize;
    return r;
  },
  getEstimatedTotalSize: function(t) {
    var n = t.itemCount, r = t.itemSize;
    return r * n;
  },
  getOffsetForIndexAndAlignment: function(t, n, r, o, a, s) {
    var i = t.direction, p = t.height, u = t.itemCount, d = t.itemSize, f = t.layout, h = t.width, v = i === "horizontal" || f === "horizontal", b = v ? h : p, m = Math.max(0, u * d - b), w = Math.min(m, n * d), g = Math.max(0, n * d - b + d + s);
    switch (r === "smart" && (o >= g - b && o <= w + b ? r = "auto" : r = "center"), r) {
      case "start":
        return w;
      case "end":
        return g;
      case "center": {
        var x = Math.round(g + (w - g) / 2);
        return x < Math.ceil(b / 2) ? 0 : x > m + Math.floor(b / 2) ? m : x;
      }
      case "auto":
      default:
        return o >= g && o <= w ? o : o < g ? g : w;
    }
  },
  getStartIndexForOffset: function(t, n) {
    var r = t.itemCount, o = t.itemSize;
    return Math.max(0, Math.min(r - 1, Math.floor(n / o)));
  },
  getStopIndexForStartIndex: function(t, n, r) {
    var o = t.direction, a = t.height, s = t.itemCount, i = t.itemSize, p = t.layout, u = t.width, d = o === "horizontal" || p === "horizontal", f = n * i, h = d ? u : a, v = Math.ceil((h + r - f) / i);
    return Math.max(0, Math.min(
      s - 1,
      n + v - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function(t) {
  },
  shouldResetStyleCacheOnItemSizeChange: !0,
  validateProps: function(t) {
    var n = t.itemSize;
    if (process.env.NODE_ENV !== "production" && typeof n != "number")
      throw Error('An invalid "itemSize" prop has been specified. Value should be a number. ' + ('"' + (n === null ? "null" : typeof n) + '" was specified.'));
  }
});
function Yl({ open: e, rootRef: t, setOpen: n, setSearchTerm: r }) {
  Ct(() => {
    function o(a) {
      e && t.current && !t.current.contains(a.target) && (n(!1), r(""));
    }
    return document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, [e, t, n, r]);
}
function Gl({ open: e, searchable: t, searchInputRef: n }) {
  Ct(() => {
    e && t && n.current && n.current.focus();
  }, [e, t, n]);
}
function Kl({ open: e, setOpen: t, setSearchTerm: n }) {
  Ct(() => {
    function r(o) {
      o.key === "Escape" && e && (t(!1), n(""));
    }
    return document.addEventListener("keydown", r), () => {
      document.removeEventListener("keydown", r);
    };
  }, [e, t, n]);
}
const Xl = ln(
  ({
    options: e,
    value: t,
    onChange: n,
    placeholder: r = "Selecione...",
    disabled: o = !1,
    className: a = "",
    itemHeight: s = 36,
    listHeight: i = 200,
    virtualizationThreshold: p = 100,
    searchable: u = !1,
    clearable: d = !1,
    emptyMessage: f = "Nenhuma opção encontrada",
    "aria-label": h
  }, v) => {
    const [b, m] = Vt(!1), [w, g] = Vt(""), x = Zt(null), S = Zt(null), [y, E] = Vt(e?.find((I) => I.value == t) || void 0), _ = Ac(
      (I) => {
        x.current = I, typeof v == "function" ? v(I) : v && (v.current = I);
      },
      [v]
    ), C = ea(() => !u || !w.trim() ? e : e.filter(
      (I) => I.label.toLowerCase().includes(w.toLowerCase())
    ), [e, w, u]);
    Gl({ open: b, searchable: u, searchInputRef: S }), Kl({ open: b, setOpen: m, setSearchTerm: g }), Yl({ open: b, rootRef: x, setOpen: m, setSearchTerm: g });
    const A = C.length > p, P = (I) => {
      n(I), E(e.find((T) => T.value === I)), m(!1), g("");
    }, D = (I) => {
      I.stopPropagation(), n(""), E(void 0), m(!1), g("");
    }, j = () => {
      o || (m((I) => !I), b || g(""));
    };
    return /* @__PURE__ */ l.jsxs(
      "div",
      {
        ref: _,
        className: M("relative inline-block w-full", a),
        children: [
          /* @__PURE__ */ l.jsxs(
            "button",
            {
              type: "button",
              className: M(
                "w-full flex items-center justify-between rounded px-4 py-2",
                "border border-border bg-white text-foreground",
                "hover:border-theta-primary/50 focus:outline-none focus:ring-2 focus:ring-theta-primary/50 focus:border-theta-primary",
                "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted/50",
                "text-sm transition-colors min-h-[40px]",
                b && "ring-2 ring-theta-primary/50 border-theta-primary"
              ),
              onClick: j,
              disabled: o,
              "aria-label": h,
              "aria-expanded": b,
              "aria-haspopup": "listbox",
              children: [
                /* @__PURE__ */ l.jsx("span", { className: M(
                  "truncate text-left",
                  !y?.label && "text-muted-foreground",
                  y?.label && "text-theta-primary font-medium"
                ), children: y?.label || r }),
                /* @__PURE__ */ l.jsxs("div", { className: "flex items-center ml-2 flex-shrink-0", children: [
                  d && y?.value && /* @__PURE__ */ l.jsx(
                    xr,
                    {
                      className: "h-4 w-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer mr-1",
                      onClick: D
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Ca,
                    {
                      className: M(
                        "h-4 w-4 transition-transform text-muted-foreground",
                        b && "rotate-180"
                      )
                    }
                  )
                ] })
              ]
            }
          ),
          b && /* @__PURE__ */ l.jsxs("div", { className: "absolute z-50 mt-1 w-full bg-white border border-border shadow-lg rounded max-h-64 overflow-hidden", children: [
            u && /* @__PURE__ */ l.jsx("div", { className: "p-2 border-b border-border bg-white", children: /* @__PURE__ */ l.jsx(
              "input",
              {
                ref: S,
                type: "text",
                placeholder: "Buscar...",
                value: w,
                onChange: (I) => g(I.target.value),
                className: "w-full px-3 py-2 border border-border rounded text-sm bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-theta-primary/50 focus:border-theta-primary",
                onClick: (I) => I.stopPropagation()
              }
            ) }),
            C.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "px-4 py-2 text-muted-foreground text-sm bg-white", children: f }) : A ? /* @__PURE__ */ l.jsx(
              Vl,
              {
                height: Math.min(i, C.length * s),
                itemCount: C.length,
                itemSize: s,
                width: "100%",
                children: ({ index: I, style: T }) => {
                  const L = C[I], H = L.value === t;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      style: T,
                      className: M(
                        "px-4 py-2 flex items-center justify-between cursor-pointer text-sm rounded transition-colors",
                        H ? "bg-theta-primary/10 text-theta-primary" : "hover:bg-accent hover:text-accent-foreground text-foreground",
                        L.disabled && "opacity-50 cursor-not-allowed"
                      ),
                      onClick: () => {
                        L.disabled || P(L.value);
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("span", { className: "truncate", children: L.label }),
                        H && /* @__PURE__ */ l.jsx(tr, { className: "h-4 w-4 ml-2 flex-shrink-0 text-theta-primary" })
                      ]
                    },
                    L.value
                  );
                }
              }
            ) : /* @__PURE__ */ l.jsx("div", { className: "max-h-48 overflow-y-auto bg-white", children: C.map((I, T) => {
              const L = I.value === t;
              return /* @__PURE__ */ l.jsxs(
                "div",
                {
                  className: M(
                    "px-4 py-2 flex items-center justify-between cursor-pointer text-sm rounded transition-colors",
                    L ? "bg-theta-primary/10 text-theta-primary" : "hover:bg-accent hover:text-accent-foreground text-foreground",
                    I.disabled && "opacity-50 cursor-not-allowed"
                  ),
                  onClick: () => {
                    I.disabled || P(I.value);
                  },
                  children: [
                    /* @__PURE__ */ l.jsx("span", { className: "truncate", children: I.label }),
                    L && /* @__PURE__ */ l.jsx(tr, { className: "h-4 w-4 ml-2 flex-shrink-0 text-theta-primary" })
                  ]
                },
                `${I.value}-${T}`
              );
            }) })
          ] })
        ]
      }
    );
  }
);
Xl.displayName = "NativeSelect";
const ql = Et(
  "",
  {
    variants: {
      variant: {
        default: "",
        circle: "rounded-full",
        square: "rounded-none",
        rounded: "rounded-lg"
      },
      size: {
        xs: "w-8 h-8",
        sm: "w-12 h-12",
        md: "w-16 h-16",
        lg: "w-24 h-24",
        xl: "w-32 h-32",
        "2xl": "w-40 h-40",
        auto: "w-auto h-auto",
        full: "w-full h-full"
      },
      aspect: {
        square: "aspect-square",
        video: "aspect-video",
        portrait: "aspect-[3/4]",
        landscape: "aspect-[4/3]",
        auto: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      aspect: "auto"
    }
  }
), Zl = Et(
  "absolute inset-0 flex items-center justify-center bg-muted transition-opacity duration-300",
  {
    variants: {
      state: {
        loading: "opacity-100",
        loaded: "opacity-0 pointer-events-none",
        error: "opacity-100"
      }
    },
    defaultVariants: {
      state: "loading"
    }
  }
), Jl = (e, t = !1) => {
  const [n, r] = c.useState("loading");
  return c.useEffect(() => {
    if (!e || !t) return;
    r("loading");
    const o = new window.Image();
    return o.onload = () => r("loaded"), o.onerror = () => r("error"), o.src = e, () => {
      o.onload = null, o.onerror = null;
    };
  }, [e, t]), n;
}, Ql = c.forwardRef(
  ({
    className: e,
    containerClassName: t,
    variant: n,
    size: r,
    aspect: o,
    src: a,
    alt: s,
    fallbackSrc: i,
    lazy: p = !1,
    preload: u = !1,
    showPlaceholder: d = !0,
    placeholderIcon: f = Dl,
    onLoad: h,
    onError: v,
    ...b
  }, m) => {
    const [w, g] = c.useState("loading"), [x, S] = c.useState(a), [y, E] = c.useState(!1), _ = Jl(a, u);
    c.useEffect(() => {
      g("loading"), S(a), E(!1);
    }, [a]), c.useEffect(() => {
      u && g(_);
    }, [u, _]);
    const C = c.useCallback(() => {
      g("loaded"), h?.();
    }, [h]), A = c.useCallback(() => {
      if (!y && i && x !== i) {
        S(i), E(!0);
        return;
      }
      g("error"), v?.();
    }, [i, x, y, v]), P = M(
      ql({ variant: n, size: r, aspect: o }),
      t
    ), D = M(
      "w-full h-full object-cover transition-opacity duration-300",
      w === "loaded" ? "opacity-100" : "opacity-0",
      e
    ), j = () => w === "error" ? /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center justify-center text-muted-foreground gap-2", children: [
      /* @__PURE__ */ l.jsx(Al, { className: "w-6 h-6" }),
      /* @__PURE__ */ l.jsx("span", { className: "text-xs text-center", children: "Erro ao carregar" })
    ] }) : w === "loading" ? /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center justify-center text-muted-foreground gap-2", children: [
      /* @__PURE__ */ l.jsx(Ml, { className: "w-6 h-6 animate-spin" }),
      /* @__PURE__ */ l.jsx("span", { className: "text-xs", children: "Carregando..." })
    ] }) : /* @__PURE__ */ l.jsx(f, { className: "w-6 h-6 text-muted-foreground" });
    return /* @__PURE__ */ l.jsxs("div", { className: P, children: [
      /* @__PURE__ */ l.jsx(
        "img",
        {
          ref: m,
          src: x,
          alt: s,
          className: D,
          loading: p ? "lazy" : "eager",
          onLoad: C,
          onError: A,
          ...b
        }
      ),
      d && /* @__PURE__ */ l.jsx("div", { className: Zl({ state: w }), children: /* @__PURE__ */ l.jsx(j, {}) })
    ] });
  }
);
Ql.displayName = "Image";
const eu = Et(
  "relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function tv({
  className: e,
  variant: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: M(eu({ variant: t }), e),
      ...n
    }
  );
}
function nv({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "alert-title",
      className: M(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        e
      ),
      ...t
    }
  );
}
function rv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "alert-description",
      className: M(
        "text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed",
        e
      ),
      ...t
    }
  );
}
var tu = "AspectRatio", Ra = c.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...o } = e;
    return /* @__PURE__ */ l.jsx(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / n}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ l.jsx(
          V.div,
          {
            ...o,
            ref: t,
            style: {
              ...r,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
Ra.displayName = tu;
var nu = Ra;
function ov({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(nu, { "data-slot": "aspect-ratio", ...e });
}
function ie(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => t.current?.(...n), []);
}
var Lt = { exports: {} }, $n = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function ru() {
  if (yo) return $n;
  yo = 1;
  var e = O;
  function t(f, h) {
    return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(f, h) {
    var v = h(), b = r({ inst: { value: v, getSnapshot: h } }), m = b[0].inst, w = b[1];
    return a(
      function() {
        m.value = v, m.getSnapshot = h, p(m) && w({ inst: m });
      },
      [f, v, h]
    ), o(
      function() {
        return p(m) && w({ inst: m }), f(function() {
          p(m) && w({ inst: m });
        });
      },
      [f]
    ), s(v), v;
  }
  function p(f) {
    var h = f.getSnapshot;
    f = f.value;
    try {
      var v = h();
      return !n(f, v);
    } catch {
      return !0;
    }
  }
  function u(f, h) {
    return h();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : i;
  return $n.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, $n;
}
var Fn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var So;
function ou() {
  return So || (So = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(v, b) {
      return v === b && (v !== 0 || 1 / v === 1 / b) || v !== v && b !== b;
    }
    function t(v, b) {
      d || o.startTransition === void 0 || (d = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = b();
      if (!f) {
        var w = b();
        a(m, w) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), f = !0);
      }
      w = s({
        inst: { value: m, getSnapshot: b }
      });
      var g = w[0].inst, x = w[1];
      return p(
        function() {
          g.value = m, g.getSnapshot = b, n(g) && x({ inst: g });
        },
        [v, m, b]
      ), i(
        function() {
          return n(g) && x({ inst: g }), v(function() {
            n(g) && x({ inst: g });
          });
        },
        [v]
      ), u(m), m;
    }
    function n(v) {
      var b = v.getSnapshot;
      v = v.value;
      try {
        var m = b();
        return !a(v, m);
      } catch {
        return !0;
      }
    }
    function r(v, b) {
      return b();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var o = O, a = typeof Object.is == "function" ? Object.is : e, s = o.useState, i = o.useEffect, p = o.useLayoutEffect, u = o.useDebugValue, d = !1, f = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    Fn.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Fn;
}
var Co;
function au() {
  return Co || (Co = 1, process.env.NODE_ENV === "production" ? Lt.exports = ru() : Lt.exports = ou()), Lt.exports;
}
var iu = au();
function su() {
  return iu.useSyncExternalStore(
    cu,
    () => !0,
    () => !1
  );
}
function cu() {
  return () => {
  };
}
var yr = "Avatar", [lu, av] = Se(yr), [uu, Aa] = lu(yr), Pa = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = c.useState("idle");
    return /* @__PURE__ */ l.jsx(
      uu,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ l.jsx(V.span, { ...r, ref: t })
      }
    );
  }
);
Pa.displayName = yr;
var _a = "AvatarImage", Oa = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...a } = e, s = Aa(_a, n), i = du(r, a), p = ie((u) => {
      o(u), s.onImageLoadingStatusChange(u);
    });
    return me(() => {
      i !== "idle" && p(i);
    }, [i, p]), i === "loaded" ? /* @__PURE__ */ l.jsx(V.img, { ...a, ref: t, src: r }) : null;
  }
);
Oa.displayName = _a;
var Ta = "AvatarFallback", Na = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = Aa(Ta, n), [s, i] = c.useState(r === void 0);
    return c.useEffect(() => {
      if (r !== void 0) {
        const p = window.setTimeout(() => i(!0), r);
        return () => window.clearTimeout(p);
      }
    }, [r]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ l.jsx(V.span, { ...o, ref: t }) : null;
  }
);
Na.displayName = Ta;
function Eo(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function du(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = su(), o = c.useRef(null), a = r ? (o.current || (o.current = new window.Image()), o.current) : null, [s, i] = c.useState(
    () => Eo(a, e)
  );
  return me(() => {
    i(Eo(a, e));
  }, [a, e]), me(() => {
    const p = (f) => () => {
      i(f);
    };
    if (!a) return;
    const u = p("loaded"), d = p("error");
    return a.addEventListener("load", u), a.addEventListener("error", d), t && (a.referrerPolicy = t), typeof n == "string" && (a.crossOrigin = n), () => {
      a.removeEventListener("load", u), a.removeEventListener("error", d);
    };
  }, [a, n, t]), s;
}
var fu = Pa, pu = Oa, mu = Na;
function hu(e) {
  const [t, n] = c.useState(!1), [r, o] = c.useState(!1);
  return c.useEffect(() => {
    if (!e) {
      n(!1), o(!1);
      return;
    }
    n(!1), o(!1);
    const a = new Image(), s = () => {
      n(!0), o(!1);
    }, i = () => {
      o(!0), n(!1);
    };
    return a.addEventListener("load", s), a.addEventListener("error", i), a.src = e, () => {
      a.removeEventListener("load", s), a.removeEventListener("error", i);
    };
  }, [e]), { isLoaded: t, isError: r };
}
function iv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    fu,
    {
      "data-slot": "avatar",
      className: M(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        e
      ),
      ...t
    }
  );
}
function sv({
  className: e,
  src: t,
  showLoadingState: n = !0,
  ...r
}) {
  const { isLoaded: o, isError: a } = hu(t);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      pu,
      {
        "data-slot": "avatar-image",
        className: M(
          "aspect-square size-full transition-opacity duration-200",
          !o && n ? "opacity-0" : "opacity-100",
          e
        ),
        src: t,
        ...r
      }
    ),
    n && !o && !a && /* @__PURE__ */ l.jsx(
      "div",
      {
        "data-slot": "avatar-loading",
        className: "absolute inset-0 flex items-center justify-center bg-muted rounded-full",
        children: /* @__PURE__ */ l.jsx("div", { className: "w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" })
      }
    )
  ] });
}
function cv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    mu,
    {
      "data-slot": "avatar-fallback",
      className: M(
        "bg-muted flex size-full items-center justify-center rounded-full",
        e
      ),
      ...t
    }
  );
}
const vu = Et(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary-500 text-secondary-foreground hover:bg-secondary-500/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
        info: "border-transparent bg-blue-500 text-white hover:bg-blue-600",
        success: "border-transparent bg-green-500 text-white hover:bg-green-600",
        warning: "border-transparent bg-yellow-500 text-black hover:bg-yellow-600",
        error: "border-transparent bg-red-500 text-white hover:bg-red-600",
        purple: "border-transparent bg-purple-500 text-white hover:bg-purple-600",
        indigo: "border-transparent bg-indigo-500 text-white hover:bg-indigo-600",
        teal: "border-transparent bg-teal-500 text-white hover:bg-teal-600"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function lv({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ l.jsx("div", { className: M(vu({ variant: t }), e), ...n });
}
function uv({ ...e }) {
  return /* @__PURE__ */ l.jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function dv({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: M(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        e
      ),
      ...t
    }
  );
}
function fv({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: M("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function pv({
  asChild: e,
  className: t,
  ...n
}) {
  const r = e ? ra : "a";
  return /* @__PURE__ */ l.jsx(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: M("hover:text-foreground transition-colors", t),
      ...n
    }
  );
}
function mv({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: M("text-foreground font-normal", e),
      ...t
    }
  );
}
function hv({
  children: e,
  className: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: M("[&>svg]:size-3.5", t),
      ...n,
      children: e ?? /* @__PURE__ */ l.jsx(Ea, {})
    }
  );
}
function vv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsxs(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: M("flex size-9 items-center justify-center", e),
      ...t,
      children: [
        /* @__PURE__ */ l.jsx(Tl, { className: "size-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
const Da = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M(
      "rounded-xl border bg-card text-card-foreground shadow",
      e
    ),
    ...t
  }
));
Da.displayName = "Card";
const gu = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
gu.displayName = "CardHeader";
const wu = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("font-semibold leading-none tracking-tight", e),
    ...t
  }
));
wu.displayName = "CardTitle";
const bu = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
bu.displayName = "CardDescription";
const Ia = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: M("p-6 pt-0", e), ...t }));
Ia.displayName = "CardContent";
const xu = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("flex items-center p-6 pt-0", e),
    ...t
  }
));
xu.displayName = "CardFooter";
function yu(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Su(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var Sr = "ScrollArea", [Ma, gv] = Se(Sr), [Cu, ge] = Ma(Sr), ja = c.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...s
    } = e, [i, p] = c.useState(null), [u, d] = c.useState(null), [f, h] = c.useState(null), [v, b] = c.useState(null), [m, w] = c.useState(null), [g, x] = c.useState(0), [S, y] = c.useState(0), [E, _] = c.useState(!1), [C, A] = c.useState(!1), P = J(t, (j) => p(j)), D = fn(o);
    return /* @__PURE__ */ l.jsx(
      Cu,
      {
        scope: n,
        type: r,
        dir: D,
        scrollHideDelay: a,
        scrollArea: i,
        viewport: u,
        onViewportChange: d,
        content: f,
        onContentChange: h,
        scrollbarX: v,
        onScrollbarXChange: b,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: _,
        scrollbarY: m,
        onScrollbarYChange: w,
        scrollbarYEnabled: C,
        onScrollbarYEnabledChange: A,
        onCornerWidthChange: x,
        onCornerHeightChange: y,
        children: /* @__PURE__ */ l.jsx(
          V.div,
          {
            dir: D,
            ...s,
            ref: P,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": g + "px",
              "--radix-scroll-area-corner-height": S + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
ja.displayName = Sr;
var ka = "ScrollAreaViewport", La = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, s = ge(ka, n), i = c.useRef(null), p = J(t, i, s.onViewportChange);
    return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ l.jsx(
        V.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...a,
          ref: p,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: s.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: s.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ l.jsx("div", { ref: s.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
La.displayName = ka;
var Ne = "ScrollAreaScrollbar", $a = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ge(Ne, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
    return c.useEffect(() => (i ? a(!0) : s(!0), () => {
      i ? a(!1) : s(!1);
    }), [i, a, s]), o.type === "hover" ? /* @__PURE__ */ l.jsx(Eu, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ l.jsx(Ru, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ l.jsx(Fa, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ l.jsx(Cr, { ...r, ref: t }) : null;
  }
);
$a.displayName = Ne;
var Eu = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ge(Ne, e.__scopeScrollArea), [a, s] = c.useState(!1);
  return c.useEffect(() => {
    const i = o.scrollArea;
    let p = 0;
    if (i) {
      const u = () => {
        window.clearTimeout(p), s(!0);
      }, d = () => {
        p = window.setTimeout(() => s(!1), o.scrollHideDelay);
      };
      return i.addEventListener("pointerenter", u), i.addEventListener("pointerleave", d), () => {
        window.clearTimeout(p), i.removeEventListener("pointerenter", u), i.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ l.jsx(ue, { present: n || a, children: /* @__PURE__ */ l.jsx(
    Fa,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), Ru = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ge(Ne, e.__scopeScrollArea), a = e.orientation === "horizontal", s = vn(() => p("SCROLL_END"), 100), [i, p] = Su("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return c.useEffect(() => {
    if (i === "idle") {
      const u = window.setTimeout(() => p("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [i, o.scrollHideDelay, p]), c.useEffect(() => {
    const u = o.viewport, d = a ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[d];
      const h = () => {
        const v = u[d];
        f !== v && (p("SCROLL"), s()), f = v;
      };
      return u.addEventListener("scroll", h), () => u.removeEventListener("scroll", h);
    }
  }, [o.viewport, a, p, s]), /* @__PURE__ */ l.jsx(ue, { present: n || i !== "hidden", children: /* @__PURE__ */ l.jsx(
    Cr,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: F(e.onPointerEnter, () => p("POINTER_ENTER")),
      onPointerLeave: F(e.onPointerLeave, () => p("POINTER_LEAVE"))
    }
  ) });
}), Fa = c.forwardRef((e, t) => {
  const n = ge(Ne, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = c.useState(!1), i = e.orientation === "horizontal", p = vn(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? u : d);
    }
  }, 10);
  return st(n.viewport, p), st(n.content, p), /* @__PURE__ */ l.jsx(ue, { present: r || a, children: /* @__PURE__ */ l.jsx(
    Cr,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Cr = c.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = ge(Ne, e.__scopeScrollArea), a = c.useRef(null), s = c.useRef(0), [i, p] = c.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = Ua(i.viewport, i.content), d = {
    ...r,
    sizes: i,
    onSizesChange: p,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (h) => a.current = h,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (h) => s.current = h
  };
  function f(h, v) {
    return Nu(h, s.current, i, v);
  }
  return n === "horizontal" ? /* @__PURE__ */ l.jsx(
    Au,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollLeft, v = Ro(h, i, o.dir);
          a.current.style.transform = `translate3d(${v}px, 0, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = f(h, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ l.jsx(
    Pu,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollTop, v = Ro(h, i);
          a.current.style.transform = `translate3d(0, ${v}px, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = f(h));
      }
    }
  ) : null;
}), Au = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = ge(Ne, e.__scopeScrollArea), [s, i] = c.useState(), p = c.useRef(null), u = J(t, p, a.onScrollbarXChange);
  return c.useEffect(() => {
    p.current && i(getComputedStyle(p.current));
  }, [p]), /* @__PURE__ */ l.jsx(
    Wa,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": hn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, f) => {
        if (a.viewport) {
          const h = a.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(h), Ya(h, f) && d.preventDefault();
        }
      },
      onResize: () => {
        p.current && a.viewport && s && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: p.current.clientWidth,
            paddingStart: en(s.paddingLeft),
            paddingEnd: en(s.paddingRight)
          }
        });
      }
    }
  );
}), Pu = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = ge(Ne, e.__scopeScrollArea), [s, i] = c.useState(), p = c.useRef(null), u = J(t, p, a.onScrollbarYChange);
  return c.useEffect(() => {
    p.current && i(getComputedStyle(p.current));
  }, [p]), /* @__PURE__ */ l.jsx(
    Wa,
    {
      "data-orientation": "vertical",
      ...o,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": hn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (a.viewport) {
          const h = a.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(h), Ya(h, f) && d.preventDefault();
        }
      },
      onResize: () => {
        p.current && a.viewport && s && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: p.current.clientHeight,
            paddingStart: en(s.paddingTop),
            paddingEnd: en(s.paddingBottom)
          }
        });
      }
    }
  );
}), [_u, za] = Ma(Ne), Wa = c.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: s,
    onThumbPointerDown: i,
    onThumbPositionChange: p,
    onDragScroll: u,
    onWheelScroll: d,
    onResize: f,
    ...h
  } = e, v = ge(Ne, n), [b, m] = c.useState(null), w = J(t, (P) => m(P)), g = c.useRef(null), x = c.useRef(""), S = v.viewport, y = r.content - r.viewport, E = ie(d), _ = ie(p), C = vn(f, 10);
  function A(P) {
    if (g.current) {
      const D = P.clientX - g.current.left, j = P.clientY - g.current.top;
      u({ x: D, y: j });
    }
  }
  return c.useEffect(() => {
    const P = (D) => {
      const j = D.target;
      b?.contains(j) && E(D, y);
    };
    return document.addEventListener("wheel", P, { passive: !1 }), () => document.removeEventListener("wheel", P, { passive: !1 });
  }, [S, b, y, E]), c.useEffect(_, [r, _]), st(b, C), st(v.content, C), /* @__PURE__ */ l.jsx(
    _u,
    {
      scope: n,
      scrollbar: b,
      hasThumb: o,
      onThumbChange: ie(a),
      onThumbPointerUp: ie(s),
      onThumbPositionChange: _,
      onThumbPointerDown: ie(i),
      children: /* @__PURE__ */ l.jsx(
        V.div,
        {
          ...h,
          ref: w,
          style: { position: "absolute", ...h.style },
          onPointerDown: F(e.onPointerDown, (P) => {
            P.button === 0 && (P.target.setPointerCapture(P.pointerId), g.current = b.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), A(P));
          }),
          onPointerMove: F(e.onPointerMove, A),
          onPointerUp: F(e.onPointerUp, (P) => {
            const D = P.target;
            D.hasPointerCapture(P.pointerId) && D.releasePointerCapture(P.pointerId), document.body.style.webkitUserSelect = x.current, v.viewport && (v.viewport.style.scrollBehavior = ""), g.current = null;
          })
        }
      )
    }
  );
}), Qt = "ScrollAreaThumb", Ba = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = za(Qt, e.__scopeScrollArea);
    return /* @__PURE__ */ l.jsx(ue, { present: n || o.hasThumb, children: /* @__PURE__ */ l.jsx(Ou, { ref: t, ...r }) });
  }
), Ou = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = ge(Qt, n), s = za(Qt, n), { onThumbPositionChange: i } = s, p = J(
      t,
      (f) => s.onThumbChange(f)
    ), u = c.useRef(void 0), d = vn(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return c.useEffect(() => {
      const f = a.viewport;
      if (f) {
        const h = () => {
          if (d(), !u.current) {
            const v = Du(f, i);
            u.current = v, i();
          }
        };
        return i(), f.addEventListener("scroll", h), () => f.removeEventListener("scroll", h);
      }
    }, [a.viewport, d, i]), /* @__PURE__ */ l.jsx(
      V.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: p,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: F(e.onPointerDownCapture, (f) => {
          const v = f.target.getBoundingClientRect(), b = f.clientX - v.left, m = f.clientY - v.top;
          s.onThumbPointerDown({ x: b, y: m });
        }),
        onPointerUp: F(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
Ba.displayName = Qt;
var Er = "ScrollAreaCorner", Ha = c.forwardRef(
  (e, t) => {
    const n = ge(Er, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ l.jsx(Tu, { ...e, ref: t }) : null;
  }
);
Ha.displayName = Er;
var Tu = c.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = ge(Er, n), [a, s] = c.useState(0), [i, p] = c.useState(0), u = !!(a && i);
  return st(o.scrollbarX, () => {
    const d = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(d), p(d);
  }), st(o.scrollbarY, () => {
    const d = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(d), s(d);
  }), u ? /* @__PURE__ */ l.jsx(
    V.div,
    {
      ...r,
      ref: t,
      style: {
        width: a,
        height: i,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function en(e) {
  return e ? parseInt(e, 10) : 0;
}
function Ua(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function hn(e) {
  const t = Ua(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function Nu(e, t, n, r = "ltr") {
  const o = hn(n), a = o / 2, s = t || a, i = o - s, p = n.scrollbar.paddingStart + s, u = n.scrollbar.size - n.scrollbar.paddingEnd - i, d = n.content - n.viewport, f = r === "ltr" ? [0, d] : [d * -1, 0];
  return Va([p, u], f)(e);
}
function Ro(e, t, n = "ltr") {
  const r = hn(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, p = n === "ltr" ? [0, s] : [s * -1, 0], u = yu(e, p);
  return Va([0, s], [0, i])(u);
}
function Va(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Ya(e, t) {
  return e > 0 && e < t;
}
var Du = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== a.left, i = n.top !== a.top;
    (s || i) && t(), n = a, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function vn(e, t) {
  const n = ie(e), r = c.useRef(0);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), c.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function st(e, t) {
  const n = ie(t);
  me(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var Iu = ja, Mu = La, ju = Ha;
function ku({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsxs(
    Iu,
    {
      "data-slot": "scroll-area",
      className: M("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ l.jsx(
          Mu,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ l.jsx(Ga, {}),
        /* @__PURE__ */ l.jsx(ju, {})
      ]
    }
  );
}
function Ga({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    $a,
    {
      "data-slot": "scroll-area-scrollbar",
      orientation: t,
      className: M(
        "flex touch-none p-px transition-colors select-none",
        t === "vertical" && "h-full w-2.5 border-l border-l-transparent",
        t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent",
        e
      ),
      ...n,
      children: /* @__PURE__ */ l.jsx(
        Ba,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
const Lu = ln(
  ({ dateRange: e, onSelect: t, dateValue: n }, r) => {
    const o = Zt(null), a = Zt(!1);
    Ct(() => {
      if (!o.current || a.current) return;
      const p = setTimeout(() => {
        if (n) {
          const u = o.current?.querySelector(
            `[data-key="${n}"]`
          );
          if (u) {
            u.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest"
            }), a.current = !0;
            return;
          }
        }
        if (e.length > 0) {
          const u = o.current?.querySelector(
            "[data-key]"
          );
          u && (u.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest"
          }), a.current = !0);
        }
      }, 100);
      return () => clearTimeout(p);
    }, [n, e]);
    const s = (i, p) => {
      const u = `${p.year}-${String(p.month_number).padStart(2, "0")}-${String(p.day_number).padStart(2, "0")}`;
      t && t(u), i.currentTarget.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    };
    return /* @__PURE__ */ l.jsx(
      Da,
      {
        ref: r,
        className: M(
          "bg-white m-4 border-none shadow-none max-w-[95%] min-w-[80%]"
        ),
        children: /* @__PURE__ */ l.jsx(Ia, { className: "p-0", children: /* @__PURE__ */ l.jsxs(ku, { className: "w-full", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              ref: o,
              className: "flex space-x-4 py-4 px-2 justify-start",
              children: e.map((i) => {
                const p = `${i.year}-${String(i.month_number).padStart(2, "0")}-${String(i.day_number).padStart(2, "0")}`, u = p === n;
                return /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    "data-key": p,
                    onClick: (d) => s(d, i),
                    role: "button",
                    tabIndex: 0,
                    className: M(
                      "flex flex-col items-center flex-shrink-0 px-4 cursor-pointer transition-colors p-2",
                      u ? "bg-primary text-background rounded-xl" : "text-foreground"
                    ),
                    children: [
                      /* @__PURE__ */ l.jsxs("span", { className: "text-sm uppercase tracking-wide flex items-center", children: [
                        u && /* @__PURE__ */ l.jsx("span", { className: "mr-1", children: "🍃" }),
                        i.day
                      ] }),
                      /* @__PURE__ */ l.jsx(
                        "span",
                        {
                          className: M(
                            "text-2xl font-semibold mt-1",
                            u ? "text-background" : "text-accent"
                          ),
                          children: i.day_number
                        }
                      ),
                      /* @__PURE__ */ l.jsx("span", { className: "text-sm uppercase tracking-wide flex items-center", children: i.count > 0 && /* @__PURE__ */ l.jsx(
                        "div",
                        {
                          className: "w-2 h-2 bg-primary rounded-full",
                          title: `Você tem ${i.count} solicitações pendentes`
                        }
                      ) }),
                      /* @__PURE__ */ l.jsxs(
                        "span",
                        {
                          className: M(
                            "text-xs mt-1",
                            u ? "text-background/90" : "text-muted-foreground/50"
                          ),
                          children: [
                            i.month,
                            " ",
                            i.year
                          ]
                        }
                      )
                    ]
                  },
                  p
                );
              })
            }
          ),
          /* @__PURE__ */ l.jsx(Ga, { orientation: "horizontal", className: "bg-input hidden lg:block" })
        ] }) })
      }
    );
  }
);
Lu.displayName = "DateRangeDisplay";
function $u(e, t = globalThis?.document) {
  const n = ie(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Fu = "DismissableLayer", or = "dismissableLayer.update", zu = "dismissableLayer.pointerDownOutside", Wu = "dismissableLayer.focusOutside", Ao, Ka = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), gn = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...p
    } = e, u = c.useContext(Ka), [d, f] = c.useState(null), h = d?.ownerDocument ?? globalThis?.document, [, v] = c.useState({}), b = J(t, (C) => f(C)), m = Array.from(u.layers), [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), g = m.indexOf(w), x = d ? m.indexOf(d) : -1, S = u.layersWithOutsidePointerEventsDisabled.size > 0, y = x >= g, E = Uu((C) => {
      const A = C.target, P = [...u.branches].some((D) => D.contains(A));
      !y || P || (o?.(C), s?.(C), C.defaultPrevented || i?.());
    }, h), _ = Vu((C) => {
      const A = C.target;
      [...u.branches].some((D) => D.contains(A)) || (a?.(C), s?.(C), C.defaultPrevented || i?.());
    }, h);
    return $u((C) => {
      x === u.layers.size - 1 && (r?.(C), !C.defaultPrevented && i && (C.preventDefault(), i()));
    }, h), c.useEffect(() => {
      if (d)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Ao = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Po(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Ao);
        };
    }, [d, h, n, u]), c.useEffect(() => () => {
      d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Po());
    }, [d, u]), c.useEffect(() => {
      const C = () => v({});
      return document.addEventListener(or, C), () => document.removeEventListener(or, C);
    }, []), /* @__PURE__ */ l.jsx(
      V.div,
      {
        ...p,
        ref: b,
        style: {
          pointerEvents: S ? y ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: F(e.onFocusCapture, _.onFocusCapture),
        onBlurCapture: F(e.onBlurCapture, _.onBlurCapture),
        onPointerDownCapture: F(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
gn.displayName = Fu;
var Bu = "DismissableLayerBranch", Hu = c.forwardRef((e, t) => {
  const n = c.useContext(Ka), r = c.useRef(null), o = J(t, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ l.jsx(V.div, { ...e, ref: o });
});
Hu.displayName = Bu;
function Uu(e, t = globalThis?.document) {
  const n = ie(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let p = function() {
          Xa(
            zu,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = p, t.addEventListener("click", o.current, { once: !0 })) : p();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Vu(e, t = globalThis?.document) {
  const n = ie(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Xa(Wu, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Po() {
  const e = new CustomEvent(or);
  document.dispatchEvent(e);
}
function Xa(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? aa(o, a) : o.dispatchEvent(a);
}
var zn = "focusScope.autoFocusOnMount", Wn = "focusScope.autoFocusOnUnmount", _o = { bubbles: !1, cancelable: !0 }, Yu = "FocusScope", wn = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, p] = c.useState(null), u = ie(o), d = ie(a), f = c.useRef(null), h = J(t, (m) => p(m)), v = c.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  c.useEffect(() => {
    if (r) {
      let m = function(S) {
        if (v.paused || !i) return;
        const y = S.target;
        i.contains(y) ? f.current = y : Fe(f.current, { select: !0 });
      }, w = function(S) {
        if (v.paused || !i) return;
        const y = S.relatedTarget;
        y !== null && (i.contains(y) || Fe(f.current, { select: !0 }));
      }, g = function(S) {
        if (document.activeElement === document.body)
          for (const E of S)
            E.removedNodes.length > 0 && Fe(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", w);
      const x = new MutationObserver(g);
      return i && x.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", w), x.disconnect();
      };
    }
  }, [r, i, v.paused]), c.useEffect(() => {
    if (i) {
      To.add(v);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const g = new CustomEvent(zn, _o);
        i.addEventListener(zn, u), i.dispatchEvent(g), g.defaultPrevented || (Gu(Ju(qa(i)), { select: !0 }), document.activeElement === m && Fe(i));
      }
      return () => {
        i.removeEventListener(zn, u), setTimeout(() => {
          const g = new CustomEvent(Wn, _o);
          i.addEventListener(Wn, d), i.dispatchEvent(g), g.defaultPrevented || Fe(m ?? document.body, { select: !0 }), i.removeEventListener(Wn, d), To.remove(v);
        }, 0);
      };
    }
  }, [i, u, d, v]);
  const b = c.useCallback(
    (m) => {
      if (!n && !r || v.paused) return;
      const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, g = document.activeElement;
      if (w && g) {
        const x = m.currentTarget, [S, y] = Ku(x);
        S && y ? !m.shiftKey && g === y ? (m.preventDefault(), n && Fe(S, { select: !0 })) : m.shiftKey && g === S && (m.preventDefault(), n && Fe(y, { select: !0 })) : g === x && m.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ l.jsx(V.div, { tabIndex: -1, ...s, ref: h, onKeyDown: b });
});
wn.displayName = Yu;
function Gu(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Fe(r, { select: t }), document.activeElement !== n) return;
}
function Ku(e) {
  const t = qa(e), n = Oo(t, e), r = Oo(t.reverse(), e);
  return [n, r];
}
function qa(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Oo(e, t) {
  for (const n of e)
    if (!Xu(n, { upTo: t })) return n;
}
function Xu(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function qu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Fe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && qu(e) && t && e.select();
  }
}
var To = Zu();
function Zu() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = No(e, t), e.unshift(t);
    },
    remove(t) {
      e = No(e, t), e[0]?.resume();
    }
  };
}
function No(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ju(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Qu = "Portal", bn = c.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, a] = c.useState(!1);
  me(() => a(!0), []);
  const s = n || o && globalThis?.document?.body;
  return s ? Pc.createPortal(/* @__PURE__ */ l.jsx(V.div, { ...r, ref: t }), s) : null;
});
bn.displayName = Qu;
var Bn = 0;
function Rr() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Do()), document.body.insertAdjacentElement("beforeend", e[1] ?? Do()), Bn++, () => {
      Bn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Bn--;
    };
  }, []);
}
function Do() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Pe = function() {
  return Pe = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Pe.apply(this, arguments);
};
function Za(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function ed(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Kt = "right-scroll-bar-position", Xt = "width-before-scroll-bar", td = "with-scroll-bars-hidden", nd = "--removed-body-scroll-bar-size";
function Hn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function rd(e, t) {
  var n = Vt(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var od = typeof window < "u" ? c.useLayoutEffect : c.useEffect, Io = /* @__PURE__ */ new WeakMap();
function ad(e, t) {
  var n = rd(null, function(r) {
    return e.forEach(function(o) {
      return Hn(o, r);
    });
  });
  return od(function() {
    var r = Io.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || Hn(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Hn(i, s);
      });
    }
    Io.set(n, e);
  }, [e]), n;
}
function id(e) {
  return e;
}
function sd(e, t) {
  t === void 0 && (t = id);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var p = function() {
        var d = s;
        s = [], d.forEach(a);
      }, u = function() {
        return Promise.resolve().then(p);
      };
      u(), n = {
        push: function(d) {
          s.push(d), u();
        },
        filter: function(d) {
          return s = s.filter(d), n;
        }
      };
    }
  };
  return o;
}
function cd(e) {
  e === void 0 && (e = {});
  var t = sd(null);
  return t.options = Pe({ async: !0, ssr: !1 }, e), t;
}
var Ja = function(e) {
  var t = e.sideCar, n = Za(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, Pe({}, n));
};
Ja.isSideCarExport = !0;
function ld(e, t) {
  return e.useMedium(t), Ja;
}
var Qa = cd(), Un = function() {
}, xn = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: Un,
    onWheelCapture: Un,
    onTouchMoveCapture: Un
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, p = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, h = e.sideCar, v = e.noRelative, b = e.noIsolation, m = e.inert, w = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, S = e.gapMode, y = Za(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = h, _ = ad([n, t]), C = Pe(Pe({}, y), o);
  return c.createElement(
    c.Fragment,
    null,
    d && c.createElement(E, { sideCar: Qa, removeScrollBar: u, shards: f, noRelative: v, noIsolation: b, inert: m, setCallbacks: a, allowPinchZoom: !!w, lockRef: n, gapMode: S }),
    s ? c.cloneElement(c.Children.only(i), Pe(Pe({}, C), { ref: _ })) : c.createElement(x, Pe({}, C, { className: p, ref: _ }), i)
  );
});
xn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
xn.classNames = {
  fullWidth: Xt,
  zeroRight: Kt
};
var ud = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function dd() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ud();
  return t && e.setAttribute("nonce", t), e;
}
function fd(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function pd(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var md = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = dd()) && (fd(t, n), pd(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, hd = function() {
  var e = md();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, ei = function() {
  var e = hd(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, vd = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Vn = function(e) {
  return parseInt(e || "", 10) || 0;
}, gd = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Vn(n), Vn(r), Vn(o)];
}, wd = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return vd;
  var t = gd(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, bd = ei(), at = "data-scroll-locked", xd = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(td, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(at, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Kt, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Xt, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Kt, " .").concat(Kt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Xt, " .").concat(Xt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(at, `] {
    `).concat(nd, ": ").concat(i, `px;
  }
`);
}, Mo = function() {
  var e = parseInt(document.body.getAttribute(at) || "0", 10);
  return isFinite(e) ? e : 0;
}, yd = function() {
  c.useEffect(function() {
    return document.body.setAttribute(at, (Mo() + 1).toString()), function() {
      var e = Mo() - 1;
      e <= 0 ? document.body.removeAttribute(at) : document.body.setAttribute(at, e.toString());
    };
  }, []);
}, Sd = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  yd();
  var a = c.useMemo(function() {
    return wd(o);
  }, [o]);
  return c.createElement(bd, { styles: xd(a, !t, o, n ? "" : "!important") });
}, ar = !1;
if (typeof window < "u")
  try {
    var $t = Object.defineProperty({}, "passive", {
      get: function() {
        return ar = !0, !0;
      }
    });
    window.addEventListener("test", $t, $t), window.removeEventListener("test", $t, $t);
  } catch {
    ar = !1;
  }
var tt = ar ? { passive: !1 } : !1, Cd = function(e) {
  return e.tagName === "TEXTAREA";
}, ti = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Cd(e) && n[t] === "visible")
  );
}, Ed = function(e) {
  return ti(e, "overflowY");
}, Rd = function(e) {
  return ti(e, "overflowX");
}, jo = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = ni(e, r);
    if (o) {
      var a = ri(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Ad = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Pd = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, ni = function(e, t) {
  return e === "v" ? Ed(t) : Rd(t);
}, ri = function(e, t) {
  return e === "v" ? Ad(t) : Pd(t);
}, _d = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Od = function(e, t, n, r, o) {
  var a = _d(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, p = t.contains(i), u = !1, d = s > 0, f = 0, h = 0;
  do {
    if (!i)
      break;
    var v = ri(e, i), b = v[0], m = v[1], w = v[2], g = m - w - a * b;
    (b || g) && ni(e, i) && (f += g, h += b);
    var x = i.parentNode;
    i = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !p && i !== document.body || // self content
    p && (t.contains(i) || t === i)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(h) < 1) && (u = !0), u;
}, Ft = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ko = function(e) {
  return [e.deltaX, e.deltaY];
}, Lo = function(e) {
  return e && "current" in e ? e.current : e;
}, Td = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Nd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Dd = 0, nt = [];
function Id(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(Dd++)[0], a = c.useState(ei)[0], s = c.useRef(e);
  c.useEffect(function() {
    s.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = ed([e.lockRef.current], (e.shards || []).map(Lo), !0).filter(Boolean);
      return m.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = c.useCallback(function(m, w) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !s.current.allowPinchZoom;
    var g = Ft(m), x = n.current, S = "deltaX" in m ? m.deltaX : x[0] - g[0], y = "deltaY" in m ? m.deltaY : x[1] - g[1], E, _ = m.target, C = Math.abs(S) > Math.abs(y) ? "h" : "v";
    if ("touches" in m && C === "h" && _.type === "range")
      return !1;
    var A = jo(C, _);
    if (!A)
      return !0;
    if (A ? E = C : (E = C === "v" ? "h" : "v", A = jo(C, _)), !A)
      return !1;
    if (!r.current && "changedTouches" in m && (S || y) && (r.current = E), !E)
      return !0;
    var P = r.current || E;
    return Od(P, w, m, P === "h" ? S : y);
  }, []), p = c.useCallback(function(m) {
    var w = m;
    if (!(!nt.length || nt[nt.length - 1] !== a)) {
      var g = "deltaY" in w ? ko(w) : Ft(w), x = t.current.filter(function(E) {
        return E.name === w.type && (E.target === w.target || w.target === E.shadowParent) && Td(E.delta, g);
      })[0];
      if (x && x.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!x) {
        var S = (s.current.shards || []).map(Lo).filter(Boolean).filter(function(E) {
          return E.contains(w.target);
        }), y = S.length > 0 ? i(w, S[0]) : !s.current.noIsolation;
        y && w.cancelable && w.preventDefault();
      }
    }
  }, []), u = c.useCallback(function(m, w, g, x) {
    var S = { name: m, delta: w, target: g, should: x, shadowParent: Md(g) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== S;
      });
    }, 1);
  }, []), d = c.useCallback(function(m) {
    n.current = Ft(m), r.current = void 0;
  }, []), f = c.useCallback(function(m) {
    u(m.type, ko(m), m.target, i(m, e.lockRef.current));
  }, []), h = c.useCallback(function(m) {
    u(m.type, Ft(m), m.target, i(m, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return nt.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", p, tt), document.addEventListener("touchmove", p, tt), document.addEventListener("touchstart", d, tt), function() {
      nt = nt.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", p, tt), document.removeEventListener("touchmove", p, tt), document.removeEventListener("touchstart", d, tt);
    };
  }, []);
  var v = e.removeScrollBar, b = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    b ? c.createElement(a, { styles: Nd(o) }) : null,
    v ? c.createElement(Sd, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Md(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const jd = ld(Qa, Id);
var yn = c.forwardRef(function(e, t) {
  return c.createElement(xn, Pe({}, e, { ref: t, sideCar: jd }));
});
yn.classNames = xn.classNames;
var kd = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Wt = {}, Yn = 0, oi = function(e) {
  return e && (e.host || oi(e.parentNode));
}, Ld = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = oi(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, $d = function(e, t, n, r) {
  var o = Ld(t, Array.isArray(e) ? e : [e]);
  Wt[n] || (Wt[n] = /* @__PURE__ */ new WeakMap());
  var a = Wt[n], s = [], i = /* @__PURE__ */ new Set(), p = new Set(o), u = function(f) {
    !f || i.has(f) || (i.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || p.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (i.has(h))
        d(h);
      else
        try {
          var v = h.getAttribute(r), b = v !== null && v !== "false", m = (rt.get(h) || 0) + 1, w = (a.get(h) || 0) + 1;
          rt.set(h, m), a.set(h, w), s.push(h), m === 1 && b && zt.set(h, !0), w === 1 && h.setAttribute(n, "true"), b || h.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", h, g);
        }
    });
  };
  return d(t), i.clear(), Yn++, function() {
    s.forEach(function(f) {
      var h = rt.get(f) - 1, v = a.get(f) - 1;
      rt.set(f, h), a.set(f, v), h || (zt.has(f) || f.removeAttribute(r), zt.delete(f)), v || f.removeAttribute(n);
    }), Yn--, Yn || (rt = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new WeakMap(), Wt = {});
  };
}, Ar = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = kd(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), $d(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, Sn = "Dialog", [ai, wv] = Se(Sn), [Fd, Ee] = ai(Sn), ii = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = c.useRef(null), p = c.useRef(null), [u, d] = Be({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Sn
  });
  return /* @__PURE__ */ l.jsx(
    Fd,
    {
      scope: t,
      triggerRef: i,
      contentRef: p,
      contentId: be(),
      titleId: be(),
      descriptionId: be(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((f) => !f), [d]),
      modal: s,
      children: n
    }
  );
};
ii.displayName = Sn;
var si = "DialogTrigger", ci = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ee(si, n), a = J(t, o.triggerRef);
    return /* @__PURE__ */ l.jsx(
      V.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Or(o.open),
        ...r,
        ref: a,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ci.displayName = si;
var Pr = "DialogPortal", [zd, li] = ai(Pr, {
  forceMount: void 0
}), ui = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Ee(Pr, t);
  return /* @__PURE__ */ l.jsx(zd, { scope: t, forceMount: n, children: c.Children.map(r, (s) => /* @__PURE__ */ l.jsx(ue, { present: n || a.open, children: /* @__PURE__ */ l.jsx(bn, { asChild: !0, container: o, children: s }) })) });
};
ui.displayName = Pr;
var tn = "DialogOverlay", di = c.forwardRef(
  (e, t) => {
    const n = li(tn, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Ee(tn, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ l.jsx(ue, { present: r || a.open, children: /* @__PURE__ */ l.jsx(Bd, { ...o, ref: t }) }) : null;
  }
);
di.displayName = tn;
var Wd = /* @__PURE__ */ Xe("DialogOverlay.RemoveScroll"), Bd = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ee(tn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l.jsx(yn, { as: Wd, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ l.jsx(
        V.div,
        {
          "data-state": Or(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), qe = "DialogContent", fi = c.forwardRef(
  (e, t) => {
    const n = li(qe, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Ee(qe, e.__scopeDialog);
    return /* @__PURE__ */ l.jsx(ue, { present: r || a.open, children: a.modal ? /* @__PURE__ */ l.jsx(Hd, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(Ud, { ...o, ref: t }) });
  }
);
fi.displayName = qe;
var Hd = c.forwardRef(
  (e, t) => {
    const n = Ee(qe, e.__scopeDialog), r = c.useRef(null), o = J(t, n.contentRef, r);
    return c.useEffect(() => {
      const a = r.current;
      if (a) return Ar(a);
    }, []), /* @__PURE__ */ l.jsx(
      pi,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (a) => {
          a.preventDefault(), n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: F(e.onPointerDownOutside, (a) => {
          const s = a.detail.originalEvent, i = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || i) && a.preventDefault();
        }),
        onFocusOutside: F(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Ud = c.forwardRef(
  (e, t) => {
    const n = Ee(qe, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      pi,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || n.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          n.triggerRef.current?.contains(s) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), pi = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Ee(qe, n), p = c.useRef(null), u = J(t, p);
    return Rr(), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        wn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ l.jsx(
            gn,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Or(i.open),
              ...s,
              ref: u,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Vd, { titleId: i.titleId }),
        /* @__PURE__ */ l.jsx(Gd, { contentRef: p, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), _r = "DialogTitle", mi = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ee(_r, n);
    return /* @__PURE__ */ l.jsx(V.h2, { id: o.titleId, ...r, ref: t });
  }
);
mi.displayName = _r;
var hi = "DialogDescription", vi = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ee(hi, n);
    return /* @__PURE__ */ l.jsx(V.p, { id: o.descriptionId, ...r, ref: t });
  }
);
vi.displayName = hi;
var gi = "DialogClose", wi = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ee(gi, n);
    return /* @__PURE__ */ l.jsx(
      V.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: F(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
wi.displayName = gi;
function Or(e) {
  return e ? "open" : "closed";
}
var bi = "DialogTitleWarning", [bv, xi] = Fc(bi, {
  contentName: qe,
  titleName: _r,
  docsSlug: "dialog"
}), Vd = ({ titleId: e }) => {
  const t = xi(bi), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Yd = "DialogDescriptionWarning", Gd = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${xi(Yd).contentName}}.`;
  return c.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Tr = ii, Nr = ci, yi = ui, Dr = di, Cn = fi, En = mi, Rn = vi, Ir = wi;
const An = c.createContext(
  void 0
);
function xv({ children: e, open: t, defaultOpen: n, onOpenChange: r }) {
  const o = t !== void 0, [a, s] = c.useState(n ?? !1), i = o ? t : a, p = (f) => {
    o || s(f), r?.(f);
  }, [u, d] = c.useState(!1);
  return /* @__PURE__ */ l.jsx(An.Provider, { value: { innerOpen: u, setInnerOpen: d }, children: /* @__PURE__ */ l.jsx(
    Tr,
    {
      open: i,
      defaultOpen: n,
      onOpenChange: p,
      children: e
    }
  ) });
}
const yv = Nr, Si = yi, Kd = Ir, Ci = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Dr,
  {
    ref: n,
    className: M(
      "fixed inset-0 z-50 bg-background/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Ci.displayName = Dr.displayName;
const Xd = c.forwardRef(({ className: e, children: t, ...n }, r) => {
  const o = c.useContext(An);
  if (!o) throw new Error("DialogContent must be used within a Dialog");
  return /* @__PURE__ */ l.jsxs(Si, { children: [
    /* @__PURE__ */ l.jsx(Ci, {}),
    /* @__PURE__ */ l.jsxs(
      Cn,
      {
        ref: r,
        className: M(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          o.innerOpen && "translate-y-[-55%] scale-[0.97]",
          e
        ),
        ...n,
        children: [
          t,
          /* @__PURE__ */ l.jsxs(Kd, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ l.jsx(xr, { className: "h-4 w-4" }),
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
Xd.displayName = Cn.displayName;
function Sv({ children: e }) {
  const t = c.useContext(An);
  if (!t) throw new Error("InnerDialog must be used within a Dialog");
  return c.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && t.innerOpen && (t.setInnerOpen(!1), r.stopPropagation());
    };
    return document.addEventListener("keydown", n), () => {
      document.removeEventListener("keydown", n);
    };
  }, [t.innerOpen, t.setInnerOpen]), /* @__PURE__ */ l.jsx(
    Tr,
    {
      open: t.innerOpen,
      onOpenChange: t.setInnerOpen,
      children: e
    }
  );
}
const Cv = Nr, qd = Ir, Zd = c.forwardRef(
  ({ className: e, children: t, position: n = "default", draggable: r = !1, ...o }, a) => {
    const s = c.useContext(An);
    if (!s)
      throw new Error("InnerDialogContent must be used within a Dialog");
    const [i, p] = c.useState(!1), [u, d] = c.useState(0), [f, h] = c.useState(0), [v, b] = c.useState(!1), m = c.useRef(null);
    c.useEffect(() => {
      s.innerOpen && (h(0), b(!1));
    }, [s.innerOpen]);
    const w = (S) => {
      r && (p(!0), d(S.clientY - f), S.currentTarget.setPointerCapture(S.pointerId));
    }, g = (S) => {
      if (!i || !r) return;
      const y = S.clientY - u;
      h(y > 0 ? y : 0);
    }, x = () => {
      r && (p(!1), f > (m.current?.offsetHeight || 0) / 2 ? (b(!0), s.setInnerOpen(!1)) : h(0));
    };
    return /* @__PURE__ */ l.jsx(Si, { children: /* @__PURE__ */ l.jsxs(
      Cn,
      {
        ref: a,
        onPointerDown: w,
        onPointerMove: g,
        onPointerUp: x,
        style: {
          transform: `translate(-50%, calc(-50% + ${f}px))`,
          transition: i ? "none" : "transform 0.3s ease-out"
        },
        className: M(
          "fixed left-[50%] top-[50%] z-[60] grid w-full max-w-lg translate-x-[-50%] translate-y-[-45%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200",
          v ? "data-[state=closed]:animate-none data-[state=closed]:fade-out-0" : "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          n === "default" && "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          n === "bottom" && "data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full",
          n === "top" && "data-[state=closed]:slide-out-to-top-full data-[state=open]:slide-in-from-top-full",
          n === "left" && "data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-left-full",
          n === "right" && "data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full",
          r && "",
          e
        ),
        ...o,
        children: [
          /* @__PURE__ */ l.jsx("div", { ref: m, children: t }),
          /* @__PURE__ */ l.jsxs(qd, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ l.jsx(xr, { className: "h-4 w-4" }),
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    ) });
  }
);
Zd.displayName = "InnerDialogContent";
const Jd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Jd.displayName = "InnerDialogHeader";
const Qd = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M("flex flex-col-reverse sm:flex-row sm:space-x-2", e),
    ...t
  }
);
Qd.displayName = "InnerDialogFooter";
const ef = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  En,
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
ef.displayName = "InnerDialogTitle";
const tf = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Rn,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
tf.displayName = "InnerDialogDescription";
const nf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
nf.displayName = "DialogHeader";
const rf = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M("flex flex-col-reverse sm:flex-row sm:space-x-2", e),
    ...t
  }
);
rf.displayName = "DialogFooter";
const of = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  En,
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
of.displayName = En.displayName;
const af = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Rn,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
af.displayName = Rn.displayName;
function sf(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const Ei = O.createContext({
  drawerRef: {
    current: null
  },
  overlayRef: {
    current: null
  },
  onPress: () => {
  },
  onRelease: () => {
  },
  onDrag: () => {
  },
  onNestedDrag: () => {
  },
  onNestedOpenChange: () => {
  },
  onNestedRelease: () => {
  },
  openProp: void 0,
  dismissible: !1,
  isOpen: !1,
  isDragging: !1,
  keyboardIsOpen: {
    current: !1
  },
  snapPointsOffset: null,
  snapPoints: null,
  handleOnly: !1,
  modal: !1,
  shouldFade: !1,
  activeSnapPoint: null,
  onOpenChange: () => {
  },
  setActiveSnapPoint: () => {
  },
  closeDrawer: () => {
  },
  direction: "bottom",
  shouldAnimate: {
    current: !0
  },
  shouldScaleBackground: !1,
  setBackgroundColorOnScale: !0,
  noBodyStyles: !1,
  container: null,
  autoFocus: !1
}), Rt = () => {
  const e = O.useContext(Ei);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
sf(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function cf() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function lf() {
  return Mr(/^Mac/);
}
function uf() {
  return Mr(/^iPhone/);
}
function $o() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function df() {
  return Mr(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  lf() && navigator.maxTouchPoints > 1;
}
function Ri() {
  return uf() || df();
}
function Mr(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const ff = 24, pf = typeof window < "u" ? ta : Ct;
function Fo(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const Gn = typeof document < "u" && window.visualViewport;
function zo(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Ai(e) {
  for (zo(e) && (e = e.parentElement); e && !zo(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const mf = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
let Bt = 0, Kn;
function hf(e = {}) {
  let { isDisabled: t } = e;
  pf(() => {
    if (!t)
      return Bt++, Bt === 1 && Ri() && (Kn = vf()), () => {
        Bt--, Bt === 0 && Kn?.();
      };
  }, [
    t
  ]);
}
function vf() {
  let e, t = 0, n = (f) => {
    e = Ai(f.target), !(e === document.documentElement && e === document.body) && (t = f.changedTouches[0].pageY);
  }, r = (f) => {
    if (!e || e === document.documentElement || e === document.body) {
      f.preventDefault();
      return;
    }
    let h = f.changedTouches[0].pageY, v = e.scrollTop, b = e.scrollHeight - e.clientHeight;
    b !== 0 && ((v <= 0 && h > t || v >= b && h < t) && f.preventDefault(), t = h);
  }, o = (f) => {
    let h = f.target;
    ir(h) && h !== document.activeElement && (f.preventDefault(), h.style.transform = "translateY(-2000px)", h.focus(), requestAnimationFrame(() => {
      h.style.transform = "";
    }));
  }, a = (f) => {
    let h = f.target;
    ir(h) && (h.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      h.style.transform = "", Gn && (Gn.height < window.innerHeight ? requestAnimationFrame(() => {
        Wo(h);
      }) : Gn.addEventListener("resize", () => Wo(h), {
        once: !0
      }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, p = window.pageYOffset, u = Fo(gf(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let d = Fo(vt(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), vt(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), vt(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), vt(document, "focus", a, !0), vt(window, "scroll", s));
  return () => {
    u(), d(), window.scrollTo(i, p);
  };
}
function gf(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function vt(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function Wo(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = Ai(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const s = n.getBoundingClientRect().bottom + ff;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function ir(e) {
  return e instanceof HTMLInputElement && !mf.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function wf(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function bf(...e) {
  return (t) => e.forEach((n) => wf(n, t));
}
function Pi(...e) {
  return c.useCallback(bf(...e), e);
}
const _i = /* @__PURE__ */ new WeakMap();
function ae(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && _i.set(e, r);
}
function xf(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = _i.get(e);
  n && (e.style[t] = n[t]);
}
const oe = (e) => {
  switch (e) {
    case "top":
    case "bottom":
      return !0;
    case "left":
    case "right":
      return !1;
    default:
      return e;
  }
};
function Ht(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[oe(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[oe(t) ? 5 : 4]) : null);
}
function yf(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Xn(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function Sf(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
const te = {
  DURATION: 0.5,
  EASE: [
    0.32,
    0.72,
    0,
    1
  ]
}, Oi = 0.4, Cf = 0.25, Ef = 100, Ti = 8, Ke = 16, sr = 26, qn = "vaul-dragging";
function Ni(e) {
  const t = O.useRef(e);
  return O.useEffect(() => {
    t.current = e;
  }), O.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function Rf({ defaultProp: e, onChange: t }) {
  const n = O.useState(e), [r] = n, o = O.useRef(r), a = Ni(t);
  return O.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function Di({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = Rf({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Ni(n), p = O.useCallback((u) => {
    if (a) {
      const f = typeof u == "function" ? u(e) : u;
      f !== e && i(f);
    } else
      o(u);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    p
  ];
}
function Af({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s, direction: i = "bottom", container: p, snapToSequentialPoint: u }) {
  const [d, f] = Di({
    prop: e,
    defaultProp: n?.[0],
    onChange: t
  }), [h, v] = O.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  O.useEffect(() => {
    function C() {
      v({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, []);
  const b = O.useMemo(() => d === n?.[n.length - 1] || null, [
    n,
    d
  ]), m = O.useMemo(() => {
    var C;
    return (C = n?.findIndex((A) => A === d)) != null ? C : null;
  }, [
    n,
    d
  ]), w = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === d || !n, g = O.useMemo(() => {
    const C = p ? {
      width: p.getBoundingClientRect().width,
      height: p.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var A;
    return (A = n?.map((P) => {
      const D = typeof P == "string";
      let j = 0;
      if (D && (j = parseInt(P, 10)), oe(i)) {
        const T = D ? j : h ? P * C.height : 0;
        return h ? i === "bottom" ? C.height - T : -C.height + T : T;
      }
      const I = D ? j : h ? P * C.width : 0;
      return h ? i === "right" ? C.width - I : -C.width + I : I;
    })) != null ? A : [];
  }, [
    n,
    h,
    p
  ]), x = O.useMemo(() => m !== null ? g?.[m] : null, [
    g,
    m
  ]), S = O.useCallback((C) => {
    var A;
    const P = (A = g?.findIndex((D) => D === C)) != null ? A : null;
    s(P), ae(r.current, {
      transition: `transform ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      transform: oe(i) ? `translate3d(0, ${C}px, 0)` : `translate3d(${C}px, 0, 0)`
    }), g && P !== g.length - 1 && a !== void 0 && P !== a && P < a ? ae(o.current, {
      transition: `opacity ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      opacity: "0"
    }) : ae(o.current, {
      transition: `opacity ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      opacity: "1"
    }), f(n?.[Math.max(P, 0)]);
  }, [
    r.current,
    n,
    g,
    a,
    o,
    f
  ]);
  O.useEffect(() => {
    if (d || e) {
      var C;
      const A = (C = n?.findIndex((P) => P === e || P === d)) != null ? C : -1;
      g && A !== -1 && typeof g[A] == "number" && S(g[A]);
    }
  }, [
    d,
    e,
    n,
    g,
    S
  ]);
  function y({ draggedDistance: C, closeDrawer: A, velocity: P, dismissible: D }) {
    if (a === void 0) return;
    const j = i === "bottom" || i === "right" ? (x ?? 0) - C : (x ?? 0) + C, I = m === a - 1, T = m === 0, L = C > 0;
    if (I && ae(o.current, {
      transition: `opacity ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`
    }), !u && P > 2 && !L) {
      D ? A() : S(g[0]);
      return;
    }
    if (!u && P > 2 && L && g && n) {
      S(g[n.length - 1]);
      return;
    }
    const H = g?.reduce((B, k) => typeof B != "number" || typeof k != "number" ? B : Math.abs(k - j) < Math.abs(B - j) ? k : B), z = oe(i) ? window.innerHeight : window.innerWidth;
    if (P > Oi && Math.abs(C) < z * 0.4) {
      const B = L ? 1 : -1;
      if (B > 0 && b && n) {
        S(g[n.length - 1]);
        return;
      }
      if (T && B < 0 && D && A(), m === null) return;
      S(g[m + B]);
      return;
    }
    S(H);
  }
  function E({ draggedDistance: C }) {
    if (x === null) return;
    const A = i === "bottom" || i === "right" ? x - C : x + C;
    (i === "bottom" || i === "right") && A < g[g.length - 1] || (i === "top" || i === "left") && A > g[g.length - 1] || ae(r.current, {
      transform: oe(i) ? `translate3d(0, ${A}px, 0)` : `translate3d(${A}px, 0, 0)`
    });
  }
  function _(C, A) {
    if (!n || typeof m != "number" || !g || a === void 0) return null;
    const P = m === a - 1;
    if (m >= a && A)
      return 0;
    if (P && !A) return 1;
    if (!w && !P) return null;
    const j = P ? m + 1 : m - 1, I = P ? g[j] - g[j - 1] : g[j + 1] - g[j], T = C / Math.abs(I);
    return P ? 1 - T : T;
  }
  return {
    isLastSnapPoint: b,
    activeSnapPoint: d,
    shouldFade: w,
    getPercentageDragged: _,
    setActiveSnapPoint: f,
    activeSnapPointIndex: m,
    onRelease: y,
    onDrag: E,
    snapPointsOffset: g
  };
}
const Pf = () => () => {
};
function _f() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = Rt(), a = O.useRef(null), s = ea(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - sr) / window.innerWidth;
  }
  O.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const p = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!p) return;
      Sf(r && !o ? Xn(document.body, {
        background: "black"
      }) : Pf, Xn(p, {
        transformOrigin: oe(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${te.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${te.EASE.join(",")})`
      }));
      const u = Xn(p, {
        borderRadius: `${Ti}px`,
        overflow: "hidden",
        ...oe(e) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        u(), a.current = window.setTimeout(() => {
          s ? document.body.style.background = s : document.body.style.removeProperty("background");
        }, te.DURATION * 1e3);
      };
    }
  }, [
    t,
    n,
    s
  ]);
}
let gt = null;
function Of({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [s, i] = O.useState(() => typeof window < "u" ? window.location.href : ""), p = O.useRef(0), u = O.useCallback(() => {
    if ($o() && gt === null && e && !a) {
      gt = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: f, innerHeight: h } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-p.current}px`,
        left: `${-f}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const v = h - window.innerHeight;
        v && p.current >= h && (document.body.style.top = `${-(p.current + v)}px`);
      }), 300);
    }
  }, [
    e
  ]), d = O.useCallback(() => {
    if ($o() && gt !== null && !a) {
      const f = -parseInt(document.body.style.top, 10), h = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, gt), window.requestAnimationFrame(() => {
        if (o && s !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(h, f);
      }), gt = null;
    }
  }, [
    s
  ]);
  return O.useEffect(() => {
    function f() {
      p.current = window.scrollY;
    }
    return f(), window.addEventListener("scroll", f), () => {
      window.removeEventListener("scroll", f);
    };
  }, []), O.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || d();
      };
  }, [
    t,
    d
  ]), O.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && u(), t || window.setTimeout(() => {
      d();
    }, 500)) : d());
  }, [
    e,
    r,
    s,
    t,
    n,
    u,
    d
  ]), {
    restorePositionSetting: d
  };
}
function Tf({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: s = !1, setBackgroundColorOnScale: i = !0, closeThreshold: p = Cf, scrollLockTimeout: u = Ef, dismissible: d = !0, handleOnly: f = !1, fadeFromIndex: h = a && a.length - 1, activeSnapPoint: v, setActiveSnapPoint: b, fixed: m, modal: w = !0, onClose: g, nested: x, noBodyStyles: S = !1, direction: y = "bottom", defaultOpen: E = !1, disablePreventScroll: _ = !0, snapToSequentialPoint: C = !1, preventScrollRestoration: A = !1, repositionInputs: P = !0, onAnimationEnd: D, container: j, autoFocus: I = !1 }) {
  var T, L;
  const [H = !1, z] = Di({
    defaultProp: E,
    prop: e,
    onChange: (W) => {
      t?.(W), !W && !x && gc(), setTimeout(() => {
        D?.(W);
      }, te.DURATION * 1e3), W && !w && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), W || (document.body.style.pointerEvents = "auto");
    }
  }), [B, k] = O.useState(!1), [N, R] = O.useState(!1), [$, Y] = O.useState(!1), G = O.useRef(null), ee = O.useRef(null), ne = O.useRef(null), ce = O.useRef(null), X = O.useRef(null), Z = O.useRef(!1), he = O.useRef(null), Ie = O.useRef(0), Re = O.useRef(!1), Dt = O.useRef(!E), Ye = O.useRef(0), U = O.useRef(null), eo = O.useRef(((T = U.current) == null ? void 0 : T.getBoundingClientRect().height) || 0), to = O.useRef(((L = U.current) == null ? void 0 : L.getBoundingClientRect().width) || 0), jn = O.useRef(0), fc = O.useCallback((W) => {
    a && W === ft.length - 1 && (ee.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: pc, activeSnapPointIndex: Qe, setActiveSnapPoint: no, onRelease: mc, snapPointsOffset: ft, onDrag: hc, shouldFade: ro, getPercentageDragged: vc } = Af({
    snapPoints: a,
    activeSnapPointProp: v,
    setActiveSnapPointProp: b,
    drawerRef: U,
    fadeFromIndex: h,
    overlayRef: G,
    onSnapPointChange: fc,
    direction: y,
    container: j,
    snapToSequentialPoint: C
  });
  hf({
    isDisabled: !H || N || !w || $ || !B || !P || !_
  });
  const { restorePositionSetting: gc } = Of({
    isOpen: H,
    modal: w,
    nested: x ?? !1,
    hasBeenOpened: B,
    preventScrollRestoration: A,
    noBodyStyles: S
  });
  function It() {
    return (window.innerWidth - sr) / window.innerWidth;
  }
  function wc(W) {
    var q, Q;
    !d && !a || U.current && !U.current.contains(W.target) || (eo.current = ((q = U.current) == null ? void 0 : q.getBoundingClientRect().height) || 0, to.current = ((Q = U.current) == null ? void 0 : Q.getBoundingClientRect().width) || 0, R(!0), ne.current = /* @__PURE__ */ new Date(), Ri() && window.addEventListener("touchend", () => Z.current = !1, {
      once: !0
    }), W.target.setPointerCapture(W.pointerId), Ie.current = oe(y) ? W.pageY : W.pageX);
  }
  function oo(W, q) {
    var Q;
    let K = W;
    const re = (Q = window.getSelection()) == null ? void 0 : Q.toString(), de = U.current ? Ht(U.current, y) : null, le = /* @__PURE__ */ new Date();
    if (K.tagName === "SELECT" || K.hasAttribute("data-vaul-no-drag") || K.closest("[data-vaul-no-drag]"))
      return !1;
    if (y === "right" || y === "left")
      return !0;
    if (ee.current && le.getTime() - ee.current.getTime() < 500)
      return !1;
    if (de !== null && (y === "bottom" ? de > 0 : de < 0))
      return !0;
    if (re && re.length > 0)
      return !1;
    if (X.current && le.getTime() - X.current.getTime() < u && de === 0 || q)
      return X.current = le, !1;
    for (; K; ) {
      if (K.scrollHeight > K.clientHeight) {
        if (K.scrollTop !== 0)
          return X.current = /* @__PURE__ */ new Date(), !1;
        if (K.getAttribute("role") === "dialog")
          return !0;
      }
      K = K.parentNode;
    }
    return !0;
  }
  function bc(W) {
    if (U.current && N) {
      const q = y === "bottom" || y === "right" ? 1 : -1, Q = (Ie.current - (oe(y) ? W.pageY : W.pageX)) * q, K = Q > 0, re = a && !d && !K;
      if (re && Qe === 0) return;
      const de = Math.abs(Q), le = document.querySelector("[data-vaul-drawer-wrapper]"), Le = y === "bottom" || y === "top" ? eo.current : to.current;
      let we = de / Le;
      const Ge = vc(de, K);
      if (Ge !== null && (we = Ge), re && we >= 1 || !Z.current && !oo(W.target, K)) return;
      if (U.current.classList.add(qn), Z.current = !0, ae(U.current, {
        transition: "none"
      }), ae(G.current, {
        transition: "none"
      }), a && hc({
        draggedDistance: Q
      }), K && !a) {
        const Ae = yf(Q), Mt = Math.min(Ae * -1, 0) * q;
        ae(U.current, {
          transform: oe(y) ? `translate3d(0, ${Mt}px, 0)` : `translate3d(${Mt}px, 0, 0)`
        });
        return;
      }
      const $e = 1 - we;
      if ((ro || h && Qe === h - 1) && (r?.(W, we), ae(G.current, {
        opacity: `${$e}`,
        transition: "none"
      }, !0)), le && G.current && s) {
        const Ae = Math.min(It() + we * (1 - It()), 1), Mt = 8 - we * 8, io = Math.max(0, 14 - we * 14);
        ae(le, {
          borderRadius: `${Mt}px`,
          transform: oe(y) ? `scale(${Ae}) translate3d(0, ${io}px, 0)` : `scale(${Ae}) translate3d(${io}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const Ae = de * q;
        ae(U.current, {
          transform: oe(y) ? `translate3d(0, ${Ae}px, 0)` : `translate3d(${Ae}px, 0, 0)`
        });
      }
    }
  }
  O.useEffect(() => {
    window.requestAnimationFrame(() => {
      Dt.current = !0;
    });
  }, []), O.useEffect(() => {
    var W;
    function q() {
      if (!U.current || !P) return;
      const Q = document.activeElement;
      if (ir(Q) || Re.current) {
        var K;
        const re = ((K = window.visualViewport) == null ? void 0 : K.height) || 0, de = window.innerHeight;
        let le = de - re;
        const Le = U.current.getBoundingClientRect().height || 0, we = Le > de * 0.8;
        jn.current || (jn.current = Le);
        const Ge = U.current.getBoundingClientRect().top;
        if (Math.abs(Ye.current - le) > 60 && (Re.current = !Re.current), a && a.length > 0 && ft && Qe) {
          const $e = ft[Qe] || 0;
          le += $e;
        }
        if (Ye.current = le, Le > re || Re.current) {
          const $e = U.current.getBoundingClientRect().height;
          let Ae = $e;
          $e > re && (Ae = re - (we ? Ge : sr)), m ? U.current.style.height = `${$e - Math.max(le, 0)}px` : U.current.style.height = `${Math.max(Ae, re - Ge)}px`;
        } else cf() || (U.current.style.height = `${jn.current}px`);
        a && a.length > 0 && !Re.current ? U.current.style.bottom = "0px" : U.current.style.bottom = `${Math.max(le, 0)}px`;
      }
    }
    return (W = window.visualViewport) == null || W.addEventListener("resize", q), () => {
      var Q;
      return (Q = window.visualViewport) == null ? void 0 : Q.removeEventListener("resize", q);
    };
  }, [
    Qe,
    a,
    ft
  ]);
  function pt(W) {
    xc(), g?.(), W || z(!1), setTimeout(() => {
      a && no(a[0]);
    }, te.DURATION * 1e3);
  }
  function ao() {
    if (!U.current) return;
    const W = document.querySelector("[data-vaul-drawer-wrapper]"), q = Ht(U.current, y);
    ae(U.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`
    }), ae(G.current, {
      transition: `opacity ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      opacity: "1"
    }), s && q && q > 0 && H && ae(W, {
      borderRadius: `${Ti}px`,
      overflow: "hidden",
      ...oe(y) ? {
        transform: `scale(${It()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${It()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${te.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${te.EASE.join(",")})`
    }, !0);
  }
  function xc() {
    !N || !U.current || (U.current.classList.remove(qn), Z.current = !1, R(!1), ce.current = /* @__PURE__ */ new Date());
  }
  function yc(W) {
    if (!N || !U.current) return;
    U.current.classList.remove(qn), Z.current = !1, R(!1), ce.current = /* @__PURE__ */ new Date();
    const q = Ht(U.current, y);
    if (!W || !oo(W.target, !1) || !q || Number.isNaN(q) || ne.current === null) return;
    const Q = ce.current.getTime() - ne.current.getTime(), K = Ie.current - (oe(y) ? W.pageY : W.pageX), re = Math.abs(K) / Q;
    if (re > 0.05 && (Y(!0), setTimeout(() => {
      Y(!1);
    }, 200)), a) {
      mc({
        draggedDistance: K * (y === "bottom" || y === "right" ? 1 : -1),
        closeDrawer: pt,
        velocity: re,
        dismissible: d
      }), o?.(W, !0);
      return;
    }
    if (y === "bottom" || y === "right" ? K > 0 : K < 0) {
      ao(), o?.(W, !0);
      return;
    }
    if (re > Oi) {
      pt(), o?.(W, !1);
      return;
    }
    var de;
    const le = Math.min((de = U.current.getBoundingClientRect().height) != null ? de : 0, window.innerHeight);
    var Le;
    const we = Math.min((Le = U.current.getBoundingClientRect().width) != null ? Le : 0, window.innerWidth), Ge = y === "left" || y === "right";
    if (Math.abs(q) >= (Ge ? we : le) * p) {
      pt(), o?.(W, !1);
      return;
    }
    o?.(W, !0), ao();
  }
  O.useEffect(() => (H && (ae(document.documentElement, {
    scrollBehavior: "auto"
  }), ee.current = /* @__PURE__ */ new Date()), () => {
    xf(document.documentElement, "scrollBehavior");
  }), [
    H
  ]);
  function Sc(W) {
    const q = W ? (window.innerWidth - Ke) / window.innerWidth : 1, Q = W ? -Ke : 0;
    he.current && window.clearTimeout(he.current), ae(U.current, {
      transition: `transform ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      transform: oe(y) ? `scale(${q}) translate3d(0, ${Q}px, 0)` : `scale(${q}) translate3d(${Q}px, 0, 0)`
    }), !W && U.current && (he.current = setTimeout(() => {
      const K = Ht(U.current, y);
      ae(U.current, {
        transition: "none",
        transform: oe(y) ? `translate3d(0, ${K}px, 0)` : `translate3d(${K}px, 0, 0)`
      });
    }, 500));
  }
  function Cc(W, q) {
    if (q < 0) return;
    const Q = (window.innerWidth - Ke) / window.innerWidth, K = Q + q * (1 - Q), re = -Ke + q * Ke;
    ae(U.current, {
      transform: oe(y) ? `scale(${K}) translate3d(0, ${re}px, 0)` : `scale(${K}) translate3d(${re}px, 0, 0)`,
      transition: "none"
    });
  }
  function Ec(W, q) {
    const Q = oe(y) ? window.innerHeight : window.innerWidth, K = q ? (Q - Ke) / Q : 1, re = q ? -Ke : 0;
    q && ae(U.current, {
      transition: `transform ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      transform: oe(y) ? `scale(${K}) translate3d(0, ${re}px, 0)` : `scale(${K}) translate3d(${re}px, 0, 0)`
    });
  }
  return O.useEffect(() => {
    w || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    w
  ]), /* @__PURE__ */ O.createElement(Tr, {
    defaultOpen: E,
    onOpenChange: (W) => {
      !d && !W || (W ? k(!0) : pt(!0), z(W));
    },
    open: H
  }, /* @__PURE__ */ O.createElement(Ei.Provider, {
    value: {
      activeSnapPoint: pc,
      snapPoints: a,
      setActiveSnapPoint: no,
      drawerRef: U,
      overlayRef: G,
      onOpenChange: t,
      onPress: wc,
      onRelease: yc,
      onDrag: bc,
      dismissible: d,
      shouldAnimate: Dt,
      handleOnly: f,
      isOpen: H,
      isDragging: N,
      shouldFade: ro,
      closeDrawer: pt,
      onNestedDrag: Cc,
      onNestedOpenChange: Sc,
      onNestedRelease: Ec,
      keyboardIsOpen: Re,
      modal: w,
      snapPointsOffset: ft,
      activeSnapPointIndex: Qe,
      direction: y,
      shouldScaleBackground: s,
      setBackgroundColorOnScale: i,
      noBodyStyles: S,
      container: j,
      autoFocus: I
    }
  }, n));
}
const Ii = /* @__PURE__ */ O.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: a, isOpen: s, modal: i, shouldAnimate: p } = Rt(), u = Pi(t, n), d = r && r.length > 0;
  if (!i)
    return null;
  const f = O.useCallback((h) => o(h), [
    o
  ]);
  return /* @__PURE__ */ O.createElement(Dr, {
    onMouseUp: f,
    ref: u,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": s && d ? "true" : "false",
    "data-vaul-snap-points-overlay": s && a ? "true" : "false",
    "data-vaul-animate": p?.current ? "true" : "false",
    ...e
  });
});
Ii.displayName = "Drawer.Overlay";
const Mi = /* @__PURE__ */ O.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: a, onPress: s, onRelease: i, onDrag: p, keyboardIsOpen: u, snapPointsOffset: d, activeSnapPointIndex: f, modal: h, isOpen: v, direction: b, snapPoints: m, container: w, handleOnly: g, shouldAnimate: x, autoFocus: S } = Rt(), [y, E] = O.useState(!1), _ = Pi(o, a), C = O.useRef(null), A = O.useRef(null), P = O.useRef(!1), D = m && m.length > 0;
  _f();
  const j = (T, L, H = 0) => {
    if (P.current) return !0;
    const z = Math.abs(T.y), B = Math.abs(T.x), k = B > z, N = [
      "bottom",
      "right"
    ].includes(L) ? 1 : -1;
    if (L === "left" || L === "right") {
      if (!(T.x * N < 0) && B >= 0 && B <= H)
        return k;
    } else if (!(T.y * N < 0) && z >= 0 && z <= H)
      return !k;
    return P.current = !0, !0;
  };
  O.useEffect(() => {
    D && window.requestAnimationFrame(() => {
      E(!0);
    });
  }, []);
  function I(T) {
    C.current = null, P.current = !1, i(T);
  }
  return /* @__PURE__ */ O.createElement(Cn, {
    "data-vaul-drawer-direction": b,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": y ? "true" : "false",
    "data-vaul-snap-points": v && D ? "true" : "false",
    "data-vaul-custom-container": w ? "true" : "false",
    "data-vaul-animate": x?.current ? "true" : "false",
    ...r,
    ref: _,
    style: d && d.length > 0 ? {
      "--snap-point-height": `${d[f ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (T) => {
      g || (r.onPointerDown == null || r.onPointerDown.call(r, T), C.current = {
        x: T.pageX,
        y: T.pageY
      }, s(T));
    },
    onOpenAutoFocus: (T) => {
      n?.(T), S || T.preventDefault();
    },
    onPointerDownOutside: (T) => {
      if (e?.(T), !h || T.defaultPrevented) {
        T.preventDefault();
        return;
      }
      u.current && (u.current = !1);
    },
    onFocusOutside: (T) => {
      if (!h) {
        T.preventDefault();
        return;
      }
    },
    onPointerMove: (T) => {
      if (A.current = T, g || (r.onPointerMove == null || r.onPointerMove.call(r, T), !C.current)) return;
      const L = T.pageY - C.current.y, H = T.pageX - C.current.x, z = T.pointerType === "touch" ? 10 : 2;
      j({
        x: H,
        y: L
      }, b, z) ? p(T) : (Math.abs(H) > z || Math.abs(L) > z) && (C.current = null);
    },
    onPointerUp: (T) => {
      r.onPointerUp == null || r.onPointerUp.call(r, T), C.current = null, P.current = !1, i(T);
    },
    onPointerOut: (T) => {
      r.onPointerOut == null || r.onPointerOut.call(r, T), I(A.current);
    },
    onContextMenu: (T) => {
      r.onContextMenu == null || r.onContextMenu.call(r, T), A.current && I(A.current);
    }
  });
});
Mi.displayName = "Drawer.Content";
const Nf = 250, Df = 120, If = /* @__PURE__ */ O.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: a, snapPoints: s, activeSnapPoint: i, setActiveSnapPoint: p, dismissible: u, handleOnly: d, isOpen: f, onPress: h, onDrag: v } = Rt(), b = O.useRef(null), m = O.useRef(!1);
  function w() {
    if (m.current) {
      S();
      return;
    }
    window.setTimeout(() => {
      g();
    }, Df);
  }
  function g() {
    if (a || e || m.current) {
      S();
      return;
    }
    if (S(), !s || s.length === 0) {
      u || o();
      return;
    }
    if (i === s[s.length - 1] && u) {
      o();
      return;
    }
    const E = s.findIndex((C) => C === i);
    if (E === -1) return;
    const _ = s[E + 1];
    p(_);
  }
  function x() {
    b.current = window.setTimeout(() => {
      m.current = !0;
    }, Nf);
  }
  function S() {
    b.current && window.clearTimeout(b.current), m.current = !1;
  }
  return /* @__PURE__ */ O.createElement("div", {
    onClick: w,
    onPointerCancel: S,
    onPointerDown: (y) => {
      d && h(y), x();
    },
    onPointerMove: (y) => {
      d && v(y);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": f ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ O.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
If.displayName = "Drawer.Handle";
function Mf(e) {
  const t = Rt(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ O.createElement(yi, {
    container: n,
    ...r
  });
}
const He = {
  Root: Tf,
  Content: Mi,
  Overlay: Ii,
  Trigger: Nr,
  Portal: Mf,
  Close: Ir,
  Title: En,
  Description: Rn
};
function Ev({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(He.Root, { "data-slot": "drawer", ...e });
}
function Rv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(He.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function jf({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(He.Portal, { "data-slot": "drawer-portal", ...e });
}
function Av({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(He.Close, { "data-slot": "drawer-close", ...e });
}
function kf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    He.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: M(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  );
}
function Pv({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsxs(jf, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ l.jsx(kf, {}),
    /* @__PURE__ */ l.jsxs(
      He.Content,
      {
        "data-slot": "drawer-content",
        className: M(
          "group/drawer-content bg-background fixed z-50 flex h-auto flex-col",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm",
          e
        ),
        ...n,
        children: [
          /* @__PURE__ */ l.jsx("div", { className: "bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          t
        ]
      }
    )
  ] });
}
function _v({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "drawer-header",
      className: M(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left",
        e
      ),
      ...t
    }
  );
}
function Ov({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "drawer-footer",
      className: M("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function Tv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    He.Title,
    {
      "data-slot": "drawer-title",
      className: M("text-foreground font-semibold", e),
      ...t
    }
  );
}
function Nv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    He.Description,
    {
      "data-slot": "drawer-description",
      className: M("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const Lf = ["top", "right", "bottom", "left"], ze = Math.min, fe = Math.max, nn = Math.round, Ut = Math.floor, Oe = (e) => ({
  x: e,
  y: e
}), $f = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ff = {
  start: "end",
  end: "start"
};
function cr(e, t, n) {
  return fe(e, ze(t, n));
}
function Me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function je(e) {
  return e.split("-")[0];
}
function ut(e) {
  return e.split("-")[1];
}
function jr(e) {
  return e === "x" ? "y" : "x";
}
function kr(e) {
  return e === "y" ? "height" : "width";
}
const zf = /* @__PURE__ */ new Set(["top", "bottom"]);
function _e(e) {
  return zf.has(je(e)) ? "y" : "x";
}
function Lr(e) {
  return jr(_e(e));
}
function Wf(e, t, n) {
  n === void 0 && (n = !1);
  const r = ut(e), o = Lr(e), a = kr(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = rn(s)), [s, rn(s)];
}
function Bf(e) {
  const t = rn(e);
  return [lr(e), t, lr(t)];
}
function lr(e) {
  return e.replace(/start|end/g, (t) => Ff[t]);
}
const Bo = ["left", "right"], Ho = ["right", "left"], Hf = ["top", "bottom"], Uf = ["bottom", "top"];
function Vf(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Ho : Bo : t ? Bo : Ho;
    case "left":
    case "right":
      return t ? Hf : Uf;
    default:
      return [];
  }
}
function Yf(e, t, n, r) {
  const o = ut(e);
  let a = Vf(je(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(lr)))), a;
}
function rn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $f[t]);
}
function Gf(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ji(e) {
  return typeof e != "number" ? Gf(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function on(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Uo(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = _e(t), s = Lr(t), i = kr(s), p = je(t), u = a === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let v;
  switch (p) {
    case "top":
      v = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (ut(t)) {
    case "start":
      v[s] -= h * (n && u ? -1 : 1);
      break;
    case "end":
      v[s] += h * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const Kf = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), p = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Uo(u, r, p), h = r, v = {}, b = 0;
  for (let m = 0; m < i.length; m++) {
    const {
      name: w,
      fn: g
    } = i[m], {
      x,
      y: S,
      data: y,
      reset: E
    } = await g({
      x: d,
      y: f,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: v,
      rects: u,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = x ?? d, f = S ?? f, v = {
      ...v,
      [w]: {
        ...v[w],
        ...y
      }
    }, E && b <= 50 && (b++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (u = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: d,
      y: f
    } = Uo(u, h, p)), m = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: v
  };
};
async function bt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: p
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: v = 0
  } = Me(t, e), b = ji(v), w = i[h ? f === "floating" ? "reference" : "floating" : f], g = on(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: u,
    rootBoundary: d,
    strategy: p
  })), x = f === "floating" ? {
    x: r,
    y: o,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), y = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = on(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: S,
    strategy: p
  }) : x);
  return {
    top: (g.top - E.top + b.top) / y.y,
    bottom: (E.bottom - g.bottom + b.bottom) / y.y,
    left: (g.left - E.left + b.left) / y.x,
    right: (E.right - g.right + b.right) / y.x
  };
}
const Xf = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: s,
      elements: i,
      middlewareData: p
    } = t, {
      element: u,
      padding: d = 0
    } = Me(e, t) || {};
    if (u == null)
      return {};
    const f = ji(d), h = {
      x: n,
      y: r
    }, v = Lr(o), b = kr(v), m = await s.getDimensions(u), w = v === "y", g = w ? "top" : "left", x = w ? "bottom" : "right", S = w ? "clientHeight" : "clientWidth", y = a.reference[b] + a.reference[v] - h[v] - a.floating[b], E = h[v] - a.reference[v], _ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let C = _ ? _[S] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(_))) && (C = i.floating[S] || a.floating[b]);
    const A = y / 2 - E / 2, P = C / 2 - m[b] / 2 - 1, D = ze(f[g], P), j = ze(f[x], P), I = D, T = C - m[b] - j, L = C / 2 - m[b] / 2 + A, H = cr(I, L, T), z = !p.arrow && ut(o) != null && L !== H && a.reference[b] / 2 - (L < I ? D : j) - m[b] / 2 < 0, B = z ? L < I ? L - I : L - T : 0;
    return {
      [v]: h[v] + B,
      data: {
        [v]: H,
        centerOffset: L - H - B,
        ...z && {
          alignmentOffset: B
        }
      },
      reset: z
    };
  }
}), qf = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: s,
        initialPlacement: i,
        platform: p,
        elements: u
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: m = !0,
        ...w
      } = Me(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const g = je(o), x = _e(i), S = je(i) === i, y = await (p.isRTL == null ? void 0 : p.isRTL(u.floating)), E = h || (S || !m ? [rn(i)] : Bf(i)), _ = b !== "none";
      !h && _ && E.push(...Yf(i, m, b, y));
      const C = [i, ...E], A = await bt(t, w), P = [];
      let D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && P.push(A[g]), f) {
        const L = Wf(o, s, y);
        P.push(A[L[0]], A[L[1]]);
      }
      if (D = [...D, {
        placement: o,
        overflows: P
      }], !P.every((L) => L <= 0)) {
        var j, I;
        const L = (((j = a.flip) == null ? void 0 : j.index) || 0) + 1, H = C[L];
        if (H && (!(f === "alignment" ? x !== _e(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        D.every((k) => _e(k.placement) === x ? k.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: D
            },
            reset: {
              placement: H
            }
          };
        let z = (I = D.filter((B) => B.overflows[0] <= 0).sort((B, k) => B.overflows[1] - k.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!z)
          switch (v) {
            case "bestFit": {
              var T;
              const B = (T = D.filter((k) => {
                if (_) {
                  const N = _e(k.placement);
                  return N === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((N) => N > 0).reduce((N, R) => N + R, 0)]).sort((k, N) => k[1] - N[1])[0]) == null ? void 0 : T[0];
              B && (z = B);
              break;
            }
            case "initialPlacement":
              z = i;
              break;
          }
        if (o !== z)
          return {
            reset: {
              placement: z
            }
          };
      }
      return {};
    }
  };
};
function Vo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Yo(e) {
  return Lf.some((t) => e[t] >= 0);
}
const Zf = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Me(e, t);
      switch (r) {
        case "referenceHidden": {
          const a = await bt(t, {
            ...o,
            elementContext: "reference"
          }), s = Vo(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: Yo(s)
            }
          };
        }
        case "escaped": {
          const a = await bt(t, {
            ...o,
            altBoundary: !0
          }), s = Vo(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: Yo(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, ki = /* @__PURE__ */ new Set(["left", "top"]);
async function Jf(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = je(n), i = ut(n), p = _e(n) === "y", u = ki.has(s) ? -1 : 1, d = a && p ? -1 : 1, f = Me(t, e);
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: b
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof b == "number" && (v = i === "end" ? b * -1 : b), p ? {
    x: v * d,
    y: h * u
  } : {
    x: h * u,
    y: v * d
  };
}
const Qf = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: s,
        middlewareData: i
      } = t, p = await Jf(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + p.x,
        y: a + p.y,
        data: {
          ...p,
          placement: s
        }
      };
    }
  };
}, ep = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: i = {
          fn: (w) => {
            let {
              x: g,
              y: x
            } = w;
            return {
              x: g,
              y: x
            };
          }
        },
        ...p
      } = Me(e, t), u = {
        x: n,
        y: r
      }, d = await bt(t, p), f = _e(je(o)), h = jr(f);
      let v = u[h], b = u[f];
      if (a) {
        const w = h === "y" ? "top" : "left", g = h === "y" ? "bottom" : "right", x = v + d[w], S = v - d[g];
        v = cr(x, v, S);
      }
      if (s) {
        const w = f === "y" ? "top" : "left", g = f === "y" ? "bottom" : "right", x = b + d[w], S = b - d[g];
        b = cr(x, b, S);
      }
      const m = i.fn({
        ...t,
        [h]: v,
        [f]: b
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [h]: a,
            [f]: s
          }
        }
      };
    }
  };
}, tp = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: s
      } = t, {
        offset: i = 0,
        mainAxis: p = !0,
        crossAxis: u = !0
      } = Me(e, t), d = {
        x: n,
        y: r
      }, f = _e(o), h = jr(f);
      let v = d[h], b = d[f];
      const m = Me(i, t), w = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (p) {
        const S = h === "y" ? "height" : "width", y = a.reference[h] - a.floating[S] + w.mainAxis, E = a.reference[h] + a.reference[S] - w.mainAxis;
        v < y ? v = y : v > E && (v = E);
      }
      if (u) {
        var g, x;
        const S = h === "y" ? "width" : "height", y = ki.has(je(o)), E = a.reference[f] - a.floating[S] + (y && ((g = s.offset) == null ? void 0 : g[f]) || 0) + (y ? 0 : w.crossAxis), _ = a.reference[f] + a.reference[S] + (y ? 0 : ((x = s.offset) == null ? void 0 : x[f]) || 0) - (y ? w.crossAxis : 0);
        b < E ? b = E : b > _ && (b = _);
      }
      return {
        [h]: v,
        [f]: b
      };
    }
  };
}, np = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: s,
        elements: i
      } = t, {
        apply: p = () => {
        },
        ...u
      } = Me(e, t), d = await bt(t, u), f = je(o), h = ut(o), v = _e(o) === "y", {
        width: b,
        height: m
      } = a.floating;
      let w, g;
      f === "top" || f === "bottom" ? (w = f, g = h === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = f, w = h === "end" ? "top" : "bottom");
      const x = m - d.top - d.bottom, S = b - d.left - d.right, y = ze(m - d[w], x), E = ze(b - d[g], S), _ = !t.middlewareData.shift;
      let C = y, A = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (A = S), (r = t.middlewareData.shift) != null && r.enabled.y && (C = x), _ && !h) {
        const D = fe(d.left, 0), j = fe(d.right, 0), I = fe(d.top, 0), T = fe(d.bottom, 0);
        v ? A = b - 2 * (D !== 0 || j !== 0 ? D + j : fe(d.left, d.right)) : C = m - 2 * (I !== 0 || T !== 0 ? I + T : fe(d.top, d.bottom));
      }
      await p({
        ...t,
        availableWidth: A,
        availableHeight: C
      });
      const P = await s.getDimensions(i.floating);
      return b !== P.width || m !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Pn() {
  return typeof window < "u";
}
function dt(e) {
  return Li(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function De(e) {
  var t;
  return (t = (Li(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Li(e) {
  return Pn() ? e instanceof Node || e instanceof pe(e).Node : !1;
}
function xe(e) {
  return Pn() ? e instanceof Element || e instanceof pe(e).Element : !1;
}
function Te(e) {
  return Pn() ? e instanceof HTMLElement || e instanceof pe(e).HTMLElement : !1;
}
function Go(e) {
  return !Pn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pe(e).ShadowRoot;
}
const rp = /* @__PURE__ */ new Set(["inline", "contents"]);
function At(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ye(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !rp.has(o);
}
const op = /* @__PURE__ */ new Set(["table", "td", "th"]);
function ap(e) {
  return op.has(dt(e));
}
const ip = [":popover-open", ":modal"];
function _n(e) {
  return ip.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const sp = ["transform", "translate", "scale", "rotate", "perspective"], cp = ["transform", "translate", "scale", "rotate", "perspective", "filter"], lp = ["paint", "layout", "strict", "content"];
function $r(e) {
  const t = Fr(), n = xe(e) ? ye(e) : e;
  return sp.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || cp.some((r) => (n.willChange || "").includes(r)) || lp.some((r) => (n.contain || "").includes(r));
}
function up(e) {
  let t = We(e);
  for (; Te(t) && !ct(t); ) {
    if ($r(t))
      return t;
    if (_n(t))
      return null;
    t = We(t);
  }
  return null;
}
function Fr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const dp = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function ct(e) {
  return dp.has(dt(e));
}
function ye(e) {
  return pe(e).getComputedStyle(e);
}
function On(e) {
  return xe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function We(e) {
  if (dt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Go(e) && e.host || // Fallback.
    De(e)
  );
  return Go(t) ? t.host : t;
}
function $i(e) {
  const t = We(e);
  return ct(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Te(t) && At(t) ? t : $i(t);
}
function xt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = $i(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = pe(o);
  if (a) {
    const i = ur(s);
    return t.concat(s, s.visualViewport || [], At(o) ? o : [], i && n ? xt(i) : []);
  }
  return t.concat(o, xt(o, [], n));
}
function ur(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Fi(e) {
  const t = ye(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Te(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = nn(n) !== a || nn(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function zr(e) {
  return xe(e) ? e : e.contextElement;
}
function it(e) {
  const t = zr(e);
  if (!Te(t))
    return Oe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Fi(t);
  let s = (a ? nn(n.width) : n.width) / r, i = (a ? nn(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const fp = /* @__PURE__ */ Oe(0);
function zi(e) {
  const t = pe(e);
  return !Fr() || !t.visualViewport ? fp : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function pp(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== pe(e) ? !1 : t;
}
function Ze(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = zr(e);
  let s = Oe(1);
  t && (r ? xe(r) && (s = it(r)) : s = it(e));
  const i = pp(a, n, r) ? zi(a) : Oe(0);
  let p = (o.left + i.x) / s.x, u = (o.top + i.y) / s.y, d = o.width / s.x, f = o.height / s.y;
  if (a) {
    const h = pe(a), v = r && xe(r) ? pe(r) : r;
    let b = h, m = ur(b);
    for (; m && r && v !== b; ) {
      const w = it(m), g = m.getBoundingClientRect(), x = ye(m), S = g.left + (m.clientLeft + parseFloat(x.paddingLeft)) * w.x, y = g.top + (m.clientTop + parseFloat(x.paddingTop)) * w.y;
      p *= w.x, u *= w.y, d *= w.x, f *= w.y, p += S, u += y, b = pe(m), m = ur(b);
    }
  }
  return on({
    width: d,
    height: f,
    x: p,
    y: u
  });
}
function Tn(e, t) {
  const n = On(e).scrollLeft;
  return t ? t.left + n : Ze(De(e)).left + n;
}
function Wi(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Tn(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function mp(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = De(r), i = t ? _n(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Oe(1);
  const d = Oe(0), f = Te(r);
  if ((f || !f && !a) && ((dt(r) !== "body" || At(s)) && (p = On(r)), Te(r))) {
    const v = Ze(r);
    u = it(r), d.x = v.x + r.clientLeft, d.y = v.y + r.clientTop;
  }
  const h = s && !f && !a ? Wi(s, p) : Oe(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - p.scrollLeft * u.x + d.x + h.x,
    y: n.y * u.y - p.scrollTop * u.y + d.y + h.y
  };
}
function hp(e) {
  return Array.from(e.getClientRects());
}
function vp(e) {
  const t = De(e), n = On(e), r = e.ownerDocument.body, o = fe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = fe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Tn(e);
  const i = -n.scrollTop;
  return ye(r).direction === "rtl" && (s += fe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const Ko = 25;
function gp(e, t) {
  const n = pe(e), r = De(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, p = 0;
  if (o) {
    a = o.width, s = o.height;
    const d = Fr();
    (!d || d && t === "fixed") && (i = o.offsetLeft, p = o.offsetTop);
  }
  const u = Tn(r);
  if (u <= 0) {
    const d = r.ownerDocument, f = d.body, h = getComputedStyle(f), v = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, b = Math.abs(r.clientWidth - f.clientWidth - v);
    b <= Ko && (a -= b);
  } else u <= Ko && (a += u);
  return {
    width: a,
    height: s,
    x: i,
    y: p
  };
}
const wp = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function bp(e, t) {
  const n = Ze(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Te(e) ? it(e) : Oe(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, p = o * a.x, u = r * a.y;
  return {
    width: s,
    height: i,
    x: p,
    y: u
  };
}
function Xo(e, t, n) {
  let r;
  if (t === "viewport")
    r = gp(e, n);
  else if (t === "document")
    r = vp(De(e));
  else if (xe(t))
    r = bp(t, n);
  else {
    const o = zi(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return on(r);
}
function Bi(e, t) {
  const n = We(e);
  return n === t || !xe(n) || ct(n) ? !1 : ye(n).position === "fixed" || Bi(n, t);
}
function xp(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = xt(e, [], !1).filter((i) => xe(i) && dt(i) !== "body"), o = null;
  const a = ye(e).position === "fixed";
  let s = a ? We(e) : e;
  for (; xe(s) && !ct(s); ) {
    const i = ye(s), p = $r(s);
    !p && i.position === "fixed" && (o = null), (a ? !p && !o : !p && i.position === "static" && !!o && wp.has(o.position) || At(s) && !p && Bi(e, s)) ? r = r.filter((d) => d !== s) : o = i, s = We(s);
  }
  return t.set(e, r), r;
}
function yp(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? _n(t) ? [] : xp(t, this._c) : [].concat(n), r], i = s[0], p = s.reduce((u, d) => {
    const f = Xo(t, d, o);
    return u.top = fe(f.top, u.top), u.right = ze(f.right, u.right), u.bottom = ze(f.bottom, u.bottom), u.left = fe(f.left, u.left), u;
  }, Xo(t, i, o));
  return {
    width: p.right - p.left,
    height: p.bottom - p.top,
    x: p.left,
    y: p.top
  };
}
function Sp(e) {
  const {
    width: t,
    height: n
  } = Fi(e);
  return {
    width: t,
    height: n
  };
}
function Cp(e, t, n) {
  const r = Te(t), o = De(t), a = n === "fixed", s = Ze(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const p = Oe(0);
  function u() {
    p.x = Tn(o);
  }
  if (r || !r && !a)
    if ((dt(t) !== "body" || At(o)) && (i = On(t)), r) {
      const v = Ze(t, !0, a, t);
      p.x = v.x + t.clientLeft, p.y = v.y + t.clientTop;
    } else o && u();
  a && !r && o && u();
  const d = o && !r && !a ? Wi(o, i) : Oe(0), f = s.left + i.scrollLeft - p.x - d.x, h = s.top + i.scrollTop - p.y - d.y;
  return {
    x: f,
    y: h,
    width: s.width,
    height: s.height
  };
}
function Zn(e) {
  return ye(e).position === "static";
}
function qo(e, t) {
  if (!Te(e) || ye(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return De(e) === n && (n = n.ownerDocument.body), n;
}
function Hi(e, t) {
  const n = pe(e);
  if (_n(e))
    return n;
  if (!Te(e)) {
    let o = We(e);
    for (; o && !ct(o); ) {
      if (xe(o) && !Zn(o))
        return o;
      o = We(o);
    }
    return n;
  }
  let r = qo(e, t);
  for (; r && ap(r) && Zn(r); )
    r = qo(r, t);
  return r && ct(r) && Zn(r) && !$r(r) ? n : r || up(e) || n;
}
const Ep = async function(e) {
  const t = this.getOffsetParent || Hi, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Cp(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Rp(e) {
  return ye(e).direction === "rtl";
}
const Ap = {
  convertOffsetParentRelativeRectToViewportRelativeRect: mp,
  getDocumentElement: De,
  getClippingRect: yp,
  getOffsetParent: Hi,
  getElementRects: Ep,
  getClientRects: hp,
  getDimensions: Sp,
  getScale: it,
  isElement: xe,
  isRTL: Rp
};
function Ui(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Pp(e, t) {
  let n = null, r;
  const o = De(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, p) {
    i === void 0 && (i = !1), p === void 0 && (p = 1), a();
    const u = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: h,
      height: v
    } = u;
    if (i || t(), !h || !v)
      return;
    const b = Ut(f), m = Ut(o.clientWidth - (d + h)), w = Ut(o.clientHeight - (f + v)), g = Ut(d), S = {
      rootMargin: -b + "px " + -m + "px " + -w + "px " + -g + "px",
      threshold: fe(0, ze(1, p)) || 1
    };
    let y = !0;
    function E(_) {
      const C = _[0].intersectionRatio;
      if (C !== p) {
        if (!y)
          return s();
        C ? s(!1, C) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !Ui(u, e.getBoundingClientRect()) && s(), y = !1;
    }
    try {
      n = new IntersectionObserver(E, {
        ...S,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(E, S);
    }
    n.observe(e);
  }
  return s(!0), a;
}
function _p(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: p = !1
  } = r, u = zr(e), d = o || a ? [...u ? xt(u) : [], ...xt(t)] : [];
  d.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), a && g.addEventListener("resize", n);
  });
  const f = u && i ? Pp(u, n) : null;
  let h = -1, v = null;
  s && (v = new ResizeObserver((g) => {
    let [x] = g;
    x && x.target === u && v && (v.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var S;
      (S = v) == null || S.observe(t);
    })), n();
  }), u && !p && v.observe(u), v.observe(t));
  let b, m = p ? Ze(e) : null;
  p && w();
  function w() {
    const g = Ze(e);
    m && !Ui(m, g) && n(), m = g, b = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    d.forEach((x) => {
      o && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), f?.(), (g = v) == null || g.disconnect(), v = null, p && cancelAnimationFrame(b);
  };
}
const Op = Qf, Tp = ep, Np = qf, Dp = np, Ip = Zf, Zo = Xf, Mp = tp, jp = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ap,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Kf(e, t, {
    ...o,
    platform: a
  });
};
var kp = typeof document < "u", Lp = function() {
}, qt = kp ? ta : Lp;
function an(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!an(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !an(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Vi(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Jo(e, t) {
  const n = Vi(e);
  return Math.round(t * n) / n;
}
function Jn(e) {
  const t = c.useRef(e);
  return qt(() => {
    t.current = e;
  }), t;
}
function $p(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: i = !0,
    whileElementsMounted: p,
    open: u
  } = e, [d, f] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, v] = c.useState(r);
  an(h, r) || v(r);
  const [b, m] = c.useState(null), [w, g] = c.useState(null), x = c.useCallback((k) => {
    k !== _.current && (_.current = k, m(k));
  }, []), S = c.useCallback((k) => {
    k !== C.current && (C.current = k, g(k));
  }, []), y = a || b, E = s || w, _ = c.useRef(null), C = c.useRef(null), A = c.useRef(d), P = p != null, D = Jn(p), j = Jn(o), I = Jn(u), T = c.useCallback(() => {
    if (!_.current || !C.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: h
    };
    j.current && (k.platform = j.current), jp(_.current, C.current, k).then((N) => {
      const R = {
        ...N,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      L.current && !an(A.current, R) && (A.current = R, na.flushSync(() => {
        f(R);
      }));
    });
  }, [h, t, n, j, I]);
  qt(() => {
    u === !1 && A.current.isPositioned && (A.current.isPositioned = !1, f((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [u]);
  const L = c.useRef(!1);
  qt(() => (L.current = !0, () => {
    L.current = !1;
  }), []), qt(() => {
    if (y && (_.current = y), E && (C.current = E), y && E) {
      if (D.current)
        return D.current(y, E, T);
      T();
    }
  }, [y, E, T, D, P]);
  const H = c.useMemo(() => ({
    reference: _,
    floating: C,
    setReference: x,
    setFloating: S
  }), [x, S]), z = c.useMemo(() => ({
    reference: y,
    floating: E
  }), [y, E]), B = c.useMemo(() => {
    const k = {
      position: n,
      left: 0,
      top: 0
    };
    if (!z.floating)
      return k;
    const N = Jo(z.floating, d.x), R = Jo(z.floating, d.y);
    return i ? {
      ...k,
      transform: "translate(" + N + "px, " + R + "px)",
      ...Vi(z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: N,
      top: R
    };
  }, [n, i, z.floating, d.x, d.y]);
  return c.useMemo(() => ({
    ...d,
    update: T,
    refs: H,
    elements: z,
    floatingStyles: B
  }), [d, T, H, z, B]);
}
const Fp = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Zo({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Zo({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, zp = (e, t) => ({
  ...Op(e),
  options: [e, t]
}), Wp = (e, t) => ({
  ...Tp(e),
  options: [e, t]
}), Bp = (e, t) => ({
  ...Mp(e),
  options: [e, t]
}), Hp = (e, t) => ({
  ...Np(e),
  options: [e, t]
}), Up = (e, t) => ({
  ...Dp(e),
  options: [e, t]
}), Vp = (e, t) => ({
  ...Ip(e),
  options: [e, t]
}), Yp = (e, t) => ({
  ...Fp(e),
  options: [e, t]
});
var Gp = "Arrow", Yi = c.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ l.jsx(
    V.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ l.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Yi.displayName = Gp;
var Kp = Yi;
function Xp(e) {
  const [t, n] = c.useState(void 0);
  return me(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let s, i;
        if ("borderBoxSize" in a) {
          const p = a.borderBoxSize, u = Array.isArray(p) ? p[0] : p;
          s = u.inlineSize, i = u.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({ width: s, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var Wr = "Popper", [Gi, Nn] = Se(Wr), [qp, Ki] = Gi(Wr), Xi = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ l.jsx(qp, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Xi.displayName = Wr;
var qi = "PopperAnchor", Zi = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Ki(qi, n), s = c.useRef(null), i = J(t, s), p = c.useRef(null);
    return c.useEffect(() => {
      const u = p.current;
      p.current = r?.current || s.current, u !== p.current && a.onAnchorChange(p.current);
    }), r ? null : /* @__PURE__ */ l.jsx(V.div, { ...o, ref: i });
  }
);
Zi.displayName = qi;
var Br = "PopperContent", [Zp, Jp] = Gi(Br), Ji = c.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: i = 0,
      avoidCollisions: p = !0,
      collisionBoundary: u = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: b,
      ...m
    } = e, w = Ki(Br, n), [g, x] = c.useState(null), S = J(t, (X) => x(X)), [y, E] = c.useState(null), _ = Xp(y), C = _?.width ?? 0, A = _?.height ?? 0, P = r + (a !== "center" ? "-" + a : ""), D = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, j = Array.isArray(u) ? u : [u], I = j.length > 0, T = {
      padding: D,
      boundary: j.filter(em),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: I
    }, { refs: L, floatingStyles: H, placement: z, isPositioned: B, middlewareData: k } = $p({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: P,
      whileElementsMounted: (...X) => _p(...X, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        zp({ mainAxis: o + A, alignmentAxis: s }),
        p && Wp({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Bp() : void 0,
          ...T
        }),
        p && Hp({ ...T }),
        Up({
          ...T,
          apply: ({ elements: X, rects: Z, availableWidth: he, availableHeight: Ie }) => {
            const { width: Re, height: Dt } = Z.reference, Ye = X.floating.style;
            Ye.setProperty("--radix-popper-available-width", `${he}px`), Ye.setProperty("--radix-popper-available-height", `${Ie}px`), Ye.setProperty("--radix-popper-anchor-width", `${Re}px`), Ye.setProperty("--radix-popper-anchor-height", `${Dt}px`);
          }
        }),
        y && Yp({ element: y, padding: i }),
        tm({ arrowWidth: C, arrowHeight: A }),
        h && Vp({ strategy: "referenceHidden", ...T })
      ]
    }), [N, R] = ts(z), $ = ie(b);
    me(() => {
      B && $?.();
    }, [B, $]);
    const Y = k.arrow?.x, G = k.arrow?.y, ee = k.arrow?.centerOffset !== 0, [ne, ce] = c.useState();
    return me(() => {
      g && ce(window.getComputedStyle(g).zIndex);
    }, [g]), /* @__PURE__ */ l.jsx(
      "div",
      {
        ref: L.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: B ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ne,
          "--radix-popper-transform-origin": [
            k.transformOrigin?.x,
            k.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...k.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ l.jsx(
          Zp,
          {
            scope: n,
            placedSide: N,
            onArrowChange: E,
            arrowX: Y,
            arrowY: G,
            shouldHideArrow: ee,
            children: /* @__PURE__ */ l.jsx(
              V.div,
              {
                "data-side": N,
                "data-align": R,
                ...m,
                ref: S,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: B ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Ji.displayName = Br;
var Qi = "PopperArrow", Qp = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, es = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Jp(Qi, r), s = Qp[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ l.jsx(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ l.jsx(
          Kp,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
es.displayName = Qi;
function em(e) {
  return e !== null;
}
var tm = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, s = o.arrow?.centerOffset !== 0, i = s ? 0 : e.arrowWidth, p = s ? 0 : e.arrowHeight, [u, d] = ts(n), f = { start: "0%", center: "50%", end: "100%" }[d], h = (o.arrow?.x ?? 0) + i / 2, v = (o.arrow?.y ?? 0) + p / 2;
    let b = "", m = "";
    return u === "bottom" ? (b = s ? f : `${h}px`, m = `${-p}px`) : u === "top" ? (b = s ? f : `${h}px`, m = `${r.floating.height + p}px`) : u === "right" ? (b = `${-p}px`, m = s ? f : `${v}px`) : u === "left" && (b = `${r.floating.width + p}px`, m = s ? f : `${v}px`), { data: { x: b, y: m } };
  }
});
function ts(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Hr = Xi, Ur = Zi, ns = Ji, rs = es, Qn = "rovingFocusGroup.onEntryFocus", nm = { bubbles: !1, cancelable: !0 }, Pt = "RovingFocusGroup", [dr, os, rm] = pr(Pt), [om, as] = Se(
  Pt,
  [rm]
), [am, im] = om(Pt), is = c.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(dr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(dr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(sm, { ...e, ref: t }) }) })
);
is.displayName = Pt;
var sm = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: p,
    onEntryFocus: u,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, h = c.useRef(null), v = J(t, h), b = fn(a), [m, w] = Be({
    prop: s,
    defaultProp: i ?? null,
    onChange: p,
    caller: Pt
  }), [g, x] = c.useState(!1), S = ie(u), y = os(n), E = c.useRef(!1), [_, C] = c.useState(0);
  return c.useEffect(() => {
    const A = h.current;
    if (A)
      return A.addEventListener(Qn, S), () => A.removeEventListener(Qn, S);
  }, [S]), /* @__PURE__ */ l.jsx(
    am,
    {
      scope: n,
      orientation: r,
      dir: b,
      loop: o,
      currentTabStopId: m,
      onItemFocus: c.useCallback(
        (A) => w(A),
        [w]
      ),
      onItemShiftTab: c.useCallback(() => x(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => C((A) => A + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => C((A) => A - 1),
        []
      ),
      children: /* @__PURE__ */ l.jsx(
        V.div,
        {
          tabIndex: g || _ === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: F(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: F(e.onFocus, (A) => {
            const P = !E.current;
            if (A.target === A.currentTarget && P && !g) {
              const D = new CustomEvent(Qn, nm);
              if (A.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const j = y().filter((z) => z.focusable), I = j.find((z) => z.active), T = j.find((z) => z.id === m), H = [I, T, ...j].filter(
                  Boolean
                ).map((z) => z.ref.current);
                ls(H, d);
              }
            }
            E.current = !1;
          }),
          onBlur: F(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), ss = "RovingFocusGroupItem", cs = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, p = be(), u = a || p, d = im(ss, n), f = d.currentTabStopId === u, h = os(n), { onFocusableItemAdd: v, onFocusableItemRemove: b, currentTabStopId: m } = d;
    return c.useEffect(() => {
      if (r)
        return v(), () => b();
    }, [r, v, b]), /* @__PURE__ */ l.jsx(
      dr.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ l.jsx(
          V.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": d.orientation,
            ...i,
            ref: t,
            onMouseDown: F(e.onMouseDown, (w) => {
              r ? d.onItemFocus(u) : w.preventDefault();
            }),
            onFocus: F(e.onFocus, () => d.onItemFocus(u)),
            onKeyDown: F(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const g = um(w, d.orientation, d.dir);
              if (g !== void 0) {
                if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                w.preventDefault();
                let S = h().filter((y) => y.focusable).map((y) => y.ref.current);
                if (g === "last") S.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && S.reverse();
                  const y = S.indexOf(w.currentTarget);
                  S = d.loop ? dm(S, y + 1) : S.slice(y + 1);
                }
                setTimeout(() => ls(S));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: f, hasTabStop: m != null }) : s
          }
        )
      }
    );
  }
);
cs.displayName = ss;
var cm = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function lm(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function um(e, t, n) {
  const r = lm(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return cm[r];
}
function ls(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function dm(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var fm = is, pm = cs, fr = ["Enter", " "], mm = ["ArrowDown", "PageUp", "Home"], us = ["ArrowUp", "PageDown", "End"], hm = [...mm, ...us], vm = {
  ltr: [...fr, "ArrowRight"],
  rtl: [...fr, "ArrowLeft"]
}, gm = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, _t = "Menu", [yt, wm, bm] = pr(_t), [Je, ds] = Se(_t, [
  bm,
  Nn,
  as
]), Ot = Nn(), fs = as(), [ps, Ue] = Je(_t), [xm, Tt] = Je(_t), ms = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = Ot(t), [p, u] = c.useState(null), d = c.useRef(!1), f = ie(a), h = fn(o);
  return c.useEffect(() => {
    const v = () => {
      d.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => d.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l.jsx(Hr, { ...i, children: /* @__PURE__ */ l.jsx(
    ps,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: p,
      onContentChange: u,
      children: /* @__PURE__ */ l.jsx(
        xm,
        {
          scope: t,
          onClose: c.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: h,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
ms.displayName = _t;
var ym = "MenuAnchor", Vr = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ot(n);
    return /* @__PURE__ */ l.jsx(Ur, { ...o, ...r, ref: t });
  }
);
Vr.displayName = ym;
var Yr = "MenuPortal", [Sm, hs] = Je(Yr, {
  forceMount: void 0
}), vs = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Ue(Yr, t);
  return /* @__PURE__ */ l.jsx(Sm, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ue, { present: n || a.open, children: /* @__PURE__ */ l.jsx(bn, { asChild: !0, container: o, children: r }) }) });
};
vs.displayName = Yr;
var ve = "MenuContent", [Cm, Gr] = Je(ve), gs = c.forwardRef(
  (e, t) => {
    const n = hs(ve, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Ue(ve, e.__scopeMenu), s = Tt(ve, e.__scopeMenu);
    return /* @__PURE__ */ l.jsx(yt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ue, { present: r || a.open, children: /* @__PURE__ */ l.jsx(yt.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ l.jsx(Em, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(Rm, { ...o, ref: t }) }) }) });
  }
), Em = c.forwardRef(
  (e, t) => {
    const n = Ue(ve, e.__scopeMenu), r = c.useRef(null), o = J(t, r);
    return c.useEffect(() => {
      const a = r.current;
      if (a) return Ar(a);
    }, []), /* @__PURE__ */ l.jsx(
      Kr,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: F(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Rm = c.forwardRef((e, t) => {
  const n = Ue(ve, e.__scopeMenu);
  return /* @__PURE__ */ l.jsx(
    Kr,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Am = /* @__PURE__ */ Xe("MenuContent.ScrollLock"), Kr = c.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEntryFocus: p,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: h,
      onDismiss: v,
      disableOutsideScroll: b,
      ...m
    } = e, w = Ue(ve, n), g = Tt(ve, n), x = Ot(n), S = fs(n), y = wm(n), [E, _] = c.useState(null), C = c.useRef(null), A = J(t, C, w.onContentChange), P = c.useRef(0), D = c.useRef(""), j = c.useRef(0), I = c.useRef(null), T = c.useRef("right"), L = c.useRef(0), H = b ? yn : c.Fragment, z = b ? { as: Am, allowPinchZoom: !0 } : void 0, B = (N) => {
      const R = D.current + N, $ = y().filter((X) => !X.disabled), Y = document.activeElement, G = $.find((X) => X.ref.current === Y)?.textValue, ee = $.map((X) => X.textValue), ne = $m(ee, R, G), ce = $.find((X) => X.textValue === ne)?.ref.current;
      (function X(Z) {
        D.current = Z, window.clearTimeout(P.current), Z !== "" && (P.current = window.setTimeout(() => X(""), 1e3));
      })(R), ce && setTimeout(() => ce.focus());
    };
    c.useEffect(() => () => window.clearTimeout(P.current), []), Rr();
    const k = c.useCallback((N) => T.current === I.current?.side && zm(N, I.current?.area), []);
    return /* @__PURE__ */ l.jsx(
      Cm,
      {
        scope: n,
        searchRef: D,
        onItemEnter: c.useCallback(
          (N) => {
            k(N) && N.preventDefault();
          },
          [k]
        ),
        onItemLeave: c.useCallback(
          (N) => {
            k(N) || (C.current?.focus(), _(null));
          },
          [k]
        ),
        onTriggerLeave: c.useCallback(
          (N) => {
            k(N) && N.preventDefault();
          },
          [k]
        ),
        pointerGraceTimerRef: j,
        onPointerGraceIntentChange: c.useCallback((N) => {
          I.current = N;
        }, []),
        children: /* @__PURE__ */ l.jsx(H, { ...z, children: /* @__PURE__ */ l.jsx(
          wn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: F(a, (N) => {
              N.preventDefault(), C.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ l.jsx(
              gn,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: v,
                children: /* @__PURE__ */ l.jsx(
                  fm,
                  {
                    asChild: !0,
                    ...S,
                    dir: g.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: _,
                    onEntryFocus: F(p, (N) => {
                      g.isUsingKeyboardRef.current || N.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l.jsx(
                      ns,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Ms(w.open),
                        "data-radix-menu-content": "",
                        dir: g.dir,
                        ...x,
                        ...m,
                        ref: A,
                        style: { outline: "none", ...m.style },
                        onKeyDown: F(m.onKeyDown, (N) => {
                          const $ = N.target.closest("[data-radix-menu-content]") === N.currentTarget, Y = N.ctrlKey || N.altKey || N.metaKey, G = N.key.length === 1;
                          $ && (N.key === "Tab" && N.preventDefault(), !Y && G && B(N.key));
                          const ee = C.current;
                          if (N.target !== ee || !hm.includes(N.key)) return;
                          N.preventDefault();
                          const ce = y().filter((X) => !X.disabled).map((X) => X.ref.current);
                          us.includes(N.key) && ce.reverse(), km(ce);
                        }),
                        onBlur: F(e.onBlur, (N) => {
                          N.currentTarget.contains(N.target) || (window.clearTimeout(P.current), D.current = "");
                        }),
                        onPointerMove: F(
                          e.onPointerMove,
                          St((N) => {
                            const R = N.target, $ = L.current !== N.clientX;
                            if (N.currentTarget.contains(R) && $) {
                              const Y = N.clientX > L.current ? "right" : "left";
                              T.current = Y, L.current = N.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
gs.displayName = ve;
var Pm = "MenuGroup", Xr = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(V.div, { role: "group", ...r, ref: t });
  }
);
Xr.displayName = Pm;
var _m = "MenuLabel", ws = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(V.div, { ...r, ref: t });
  }
);
ws.displayName = _m;
var sn = "MenuItem", Qo = "menu.itemSelect", Dn = c.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = c.useRef(null), s = Tt(sn, e.__scopeMenu), i = Gr(sn, e.__scopeMenu), p = J(t, a), u = c.useRef(!1), d = () => {
      const f = a.current;
      if (!n && f) {
        const h = new CustomEvent(Qo, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Qo, (v) => r?.(v), { once: !0 }), aa(f, h), h.defaultPrevented ? u.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ l.jsx(
      bs,
      {
        ...o,
        ref: p,
        disabled: n,
        onClick: F(e.onClick, d),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), u.current = !0;
        },
        onPointerUp: F(e.onPointerUp, (f) => {
          u.current || f.currentTarget?.click();
        }),
        onKeyDown: F(e.onKeyDown, (f) => {
          const h = i.searchRef.current !== "";
          n || h && f.key === " " || fr.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
Dn.displayName = sn;
var bs = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Gr(sn, n), i = fs(n), p = c.useRef(null), u = J(t, p), [d, f] = c.useState(!1), [h, v] = c.useState("");
    return c.useEffect(() => {
      const b = p.current;
      b && v((b.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ l.jsx(
      yt.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ l.jsx(pm, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ l.jsx(
          V.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: u,
            onPointerMove: F(
              e.onPointerMove,
              St((b) => {
                r ? s.onItemLeave(b) : (s.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: F(
              e.onPointerLeave,
              St((b) => s.onItemLeave(b))
            ),
            onFocus: F(e.onFocus, () => f(!0)),
            onBlur: F(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), Om = "MenuCheckboxItem", xs = c.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ l.jsx(Rs, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ l.jsx(
      Dn,
      {
        role: "menuitemcheckbox",
        "aria-checked": cn(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Jr(n),
        onSelect: F(
          o.onSelect,
          () => r?.(cn(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
xs.displayName = Om;
var ys = "MenuRadioGroup", [Tm, Nm] = Je(
  ys,
  { value: void 0, onValueChange: () => {
  } }
), Ss = c.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = ie(r);
    return /* @__PURE__ */ l.jsx(Tm, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ l.jsx(Xr, { ...o, ref: t }) });
  }
);
Ss.displayName = ys;
var Cs = "MenuRadioItem", Es = c.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Nm(Cs, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ l.jsx(Rs, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ l.jsx(
      Dn,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Jr(a),
        onSelect: F(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Es.displayName = Cs;
var qr = "MenuItemIndicator", [Rs, Dm] = Je(
  qr,
  { checked: !1 }
), As = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = Dm(qr, n);
    return /* @__PURE__ */ l.jsx(
      ue,
      {
        present: r || cn(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          V.span,
          {
            ...o,
            ref: t,
            "data-state": Jr(a.checked)
          }
        )
      }
    );
  }
);
As.displayName = qr;
var Im = "MenuSeparator", Ps = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(
      V.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Ps.displayName = Im;
var Mm = "MenuArrow", _s = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Ot(n);
    return /* @__PURE__ */ l.jsx(rs, { ...o, ...r, ref: t });
  }
);
_s.displayName = Mm;
var Zr = "MenuSub", [jm, Os] = Je(Zr), Ts = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = Ue(Zr, t), s = Ot(t), [i, p] = c.useState(null), [u, d] = c.useState(null), f = ie(o);
  return c.useEffect(() => (a.open === !1 && f(!1), () => f(!1)), [a.open, f]), /* @__PURE__ */ l.jsx(Hr, { ...s, children: /* @__PURE__ */ l.jsx(
    ps,
    {
      scope: t,
      open: r,
      onOpenChange: f,
      content: u,
      onContentChange: d,
      children: /* @__PURE__ */ l.jsx(
        jm,
        {
          scope: t,
          contentId: be(),
          triggerId: be(),
          trigger: i,
          onTriggerChange: p,
          children: n
        }
      )
    }
  ) });
};
Ts.displayName = Zr;
var wt = "MenuSubTrigger", Ns = c.forwardRef(
  (e, t) => {
    const n = Ue(wt, e.__scopeMenu), r = Tt(wt, e.__scopeMenu), o = Os(wt, e.__scopeMenu), a = Gr(wt, e.__scopeMenu), s = c.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: p } = a, u = { __scopeMenu: e.__scopeMenu }, d = c.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return c.useEffect(() => d, [d]), c.useEffect(() => {
      const f = i.current;
      return () => {
        window.clearTimeout(f), p(null);
      };
    }, [i, p]), /* @__PURE__ */ l.jsx(Vr, { asChild: !0, ...u, children: /* @__PURE__ */ l.jsx(
      bs,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Ms(n.open),
        ...e,
        ref: un(t, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: F(
          e.onPointerMove,
          St((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: F(
          e.onPointerLeave,
          St((f) => {
            d();
            const h = n.content?.getBoundingClientRect();
            if (h) {
              const v = n.content?.dataset.side, b = v === "right", m = b ? -5 : 5, w = h[b ? "left" : "right"], g = h[b ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + m, y: f.clientY },
                  { x: w, y: h.top },
                  { x: g, y: h.top },
                  { x: g, y: h.bottom },
                  { x: w, y: h.bottom }
                ],
                side: v
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(f), f.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: F(e.onKeyDown, (f) => {
          const h = a.searchRef.current !== "";
          e.disabled || h && f.key === " " || vm[r.dir].includes(f.key) && (n.onOpenChange(!0), n.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Ns.displayName = wt;
var Ds = "MenuSubContent", Is = c.forwardRef(
  (e, t) => {
    const n = hs(ve, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Ue(ve, e.__scopeMenu), s = Tt(ve, e.__scopeMenu), i = Os(Ds, e.__scopeMenu), p = c.useRef(null), u = J(t, p);
    return /* @__PURE__ */ l.jsx(yt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ue, { present: r || a.open, children: /* @__PURE__ */ l.jsx(yt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(
      Kr,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          s.isUsingKeyboardRef.current && p.current?.focus(), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: F(e.onFocusOutside, (d) => {
          d.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: F(e.onEscapeKeyDown, (d) => {
          s.onClose(), d.preventDefault();
        }),
        onKeyDown: F(e.onKeyDown, (d) => {
          const f = d.currentTarget.contains(d.target), h = gm[s.dir].includes(d.key);
          f && h && (a.onOpenChange(!1), i.trigger?.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
Is.displayName = Ds;
function Ms(e) {
  return e ? "open" : "closed";
}
function cn(e) {
  return e === "indeterminate";
}
function Jr(e) {
  return cn(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function km(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Lm(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function $m(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = Lm(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const p = s.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return p !== n ? p : void 0;
}
function Fm(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], p = t[s], u = i.x, d = i.y, f = p.x, h = p.y;
    d > r != h > r && n < (f - u) * (r - d) / (h - d) + u && (o = !o);
  }
  return o;
}
function zm(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Fm(n, t);
}
function St(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Wm = ms, Bm = Vr, Hm = vs, Um = gs, Vm = Xr, Ym = ws, Gm = Dn, Km = xs, Xm = Ss, qm = Es, Zm = As, Jm = Ps, Qm = _s, eh = Ts, th = Ns, nh = Is, In = "DropdownMenu", [rh, Dv] = Se(
  In,
  [ds]
), se = ds(), [oh, js] = rh(In), ks = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, p = se(t), u = c.useRef(null), [d, f] = Be({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: In
  });
  return /* @__PURE__ */ l.jsx(
    oh,
    {
      scope: t,
      triggerId: be(),
      triggerRef: u,
      contentId: be(),
      open: d,
      onOpenChange: f,
      onOpenToggle: c.useCallback(() => f((h) => !h), [f]),
      modal: i,
      children: /* @__PURE__ */ l.jsx(Wm, { ...p, open: d, onOpenChange: f, dir: r, modal: i, children: n })
    }
  );
};
ks.displayName = In;
var Ls = "DropdownMenuTrigger", $s = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = js(Ls, n), s = se(n);
    return /* @__PURE__ */ l.jsx(Bm, { asChild: !0, ...s, children: /* @__PURE__ */ l.jsx(
      V.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: un(t, a.triggerRef),
        onPointerDown: F(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
        }),
        onKeyDown: F(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
$s.displayName = Ls;
var ah = "DropdownMenuPortal", Fs = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = se(t);
  return /* @__PURE__ */ l.jsx(Hm, { ...r, ...n });
};
Fs.displayName = ah;
var zs = "DropdownMenuContent", Ws = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = js(zs, n), a = se(n), s = c.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      Um,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (i) => {
          s.current || o.triggerRef.current?.focus(), s.current = !1, i.preventDefault();
        }),
        onInteractOutside: F(e.onInteractOutside, (i) => {
          const p = i.detail.originalEvent, u = p.button === 0 && p.ctrlKey === !0, d = p.button === 2 || u;
          (!o.modal || d) && (s.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Ws.displayName = zs;
var ih = "DropdownMenuGroup", Bs = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
    return /* @__PURE__ */ l.jsx(Vm, { ...o, ...r, ref: t });
  }
);
Bs.displayName = ih;
var sh = "DropdownMenuLabel", Hs = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
    return /* @__PURE__ */ l.jsx(Ym, { ...o, ...r, ref: t });
  }
);
Hs.displayName = sh;
var ch = "DropdownMenuItem", Us = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
    return /* @__PURE__ */ l.jsx(Gm, { ...o, ...r, ref: t });
  }
);
Us.displayName = ch;
var lh = "DropdownMenuCheckboxItem", Vs = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(Km, { ...o, ...r, ref: t });
});
Vs.displayName = lh;
var uh = "DropdownMenuRadioGroup", Ys = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(Xm, { ...o, ...r, ref: t });
});
Ys.displayName = uh;
var dh = "DropdownMenuRadioItem", Gs = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(qm, { ...o, ...r, ref: t });
});
Gs.displayName = dh;
var fh = "DropdownMenuItemIndicator", Ks = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(Zm, { ...o, ...r, ref: t });
});
Ks.displayName = fh;
var ph = "DropdownMenuSeparator", Xs = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(Jm, { ...o, ...r, ref: t });
});
Xs.displayName = ph;
var mh = "DropdownMenuArrow", hh = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
    return /* @__PURE__ */ l.jsx(Qm, { ...o, ...r, ref: t });
  }
);
hh.displayName = mh;
var vh = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = se(t), [i, p] = Be({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ l.jsx(eh, { ...s, open: i, onOpenChange: p, children: n });
}, gh = "DropdownMenuSubTrigger", qs = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(th, { ...o, ...r, ref: t });
});
qs.displayName = gh;
var wh = "DropdownMenuSubContent", Zs = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(
    nh,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Zs.displayName = wh;
var bh = ks, xh = $s, Js = Fs, yh = Ws, Sh = Bs, Ch = Hs, Eh = Us, Rh = Vs, Ah = Ys, Ph = Gs, Qs = Ks, _h = Xs, Oh = vh, Th = qs, Nh = Zs;
function Iv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(bh, { "data-slot": "dropdown-menu", ...e });
}
function Mv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Js, { "data-slot": "dropdown-menu-portal", ...e });
}
function jv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(
    xh,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function kv({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(Js, { children: /* @__PURE__ */ l.jsx(
    yh,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      className: M(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        e
      ),
      ...n
    }
  ) });
}
function Lv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Sh, { "data-slot": "dropdown-menu-group", ...e });
}
function $v({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ l.jsx(
    Eh,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: M(
        "focus:bg-slate-50/60 focus:text-slate-700 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-slate-400 relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...r
    }
  );
}
function Fv({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ l.jsxs(
    Rh,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: M(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Qs, { children: /* @__PURE__ */ l.jsx(tr, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function zv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(
    Ah,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function Wv({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsxs(
    Ph,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: M(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Qs, { children: /* @__PURE__ */ l.jsx(_l, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function Bv({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    Ch,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": t,
      className: M(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...n
    }
  );
}
function Hv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    _h,
    {
      "data-slot": "dropdown-menu-separator",
      className: M("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Uv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: M(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...t
    }
  );
}
function Vv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Oh, { "data-slot": "dropdown-menu-sub", ...e });
}
function Yv({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ l.jsxs(
    Th,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": t,
      className: M(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...r,
      children: [
        n,
        /* @__PURE__ */ l.jsx(Ea, { className: "ml-auto size-4" })
      ]
    }
  );
}
function Gv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    Nh,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: M(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...t
    }
  );
}
var Dh = "Label", ec = c.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
  V.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
ec.displayName = Dh;
var Ih = ec;
function Kv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    Ih,
    {
      "data-slot": "label",
      className: M(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
var Mn = "Popover", [tc, Xv] = Se(Mn, [
  Nn
]), Nt = Nn(), [Mh, Ve] = tc(Mn), nc = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = Nt(t), p = c.useRef(null), [u, d] = c.useState(!1), [f, h] = Be({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: Mn
  });
  return /* @__PURE__ */ l.jsx(Hr, { ...i, children: /* @__PURE__ */ l.jsx(
    Mh,
    {
      scope: t,
      contentId: be(),
      triggerRef: p,
      open: f,
      onOpenChange: h,
      onOpenToggle: c.useCallback(() => h((v) => !v), [h]),
      hasCustomAnchor: u,
      onCustomAnchorAdd: c.useCallback(() => d(!0), []),
      onCustomAnchorRemove: c.useCallback(() => d(!1), []),
      modal: s,
      children: n
    }
  ) });
};
nc.displayName = Mn;
var rc = "PopoverAnchor", oc = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ve(rc, n), a = Nt(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return c.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ l.jsx(Ur, { ...a, ...r, ref: t });
  }
);
oc.displayName = rc;
var ac = "PopoverTrigger", ic = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ve(ac, n), a = Nt(n), s = J(t, o.triggerRef), i = /* @__PURE__ */ l.jsx(
      V.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": dc(o.open),
        ...r,
        ref: s,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ l.jsx(Ur, { asChild: !0, ...a, children: i });
  }
);
ic.displayName = ac;
var Qr = "PopoverPortal", [jh, kh] = tc(Qr, {
  forceMount: void 0
}), sc = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Ve(Qr, t);
  return /* @__PURE__ */ l.jsx(jh, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ue, { present: n || a.open, children: /* @__PURE__ */ l.jsx(bn, { asChild: !0, container: o, children: r }) }) });
};
sc.displayName = Qr;
var lt = "PopoverContent", cc = c.forwardRef(
  (e, t) => {
    const n = kh(lt, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Ve(lt, e.__scopePopover);
    return /* @__PURE__ */ l.jsx(ue, { present: r || a.open, children: a.modal ? /* @__PURE__ */ l.jsx($h, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(Fh, { ...o, ref: t }) });
  }
);
cc.displayName = lt;
var Lh = /* @__PURE__ */ Xe("PopoverContent.RemoveScroll"), $h = c.forwardRef(
  (e, t) => {
    const n = Ve(lt, e.__scopePopover), r = c.useRef(null), o = J(t, r), a = c.useRef(!1);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return Ar(s);
    }, []), /* @__PURE__ */ l.jsx(yn, { as: Lh, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
      lc,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: F(e.onCloseAutoFocus, (s) => {
          s.preventDefault(), a.current || n.triggerRef.current?.focus();
        }),
        onPointerDownOutside: F(
          e.onPointerDownOutside,
          (s) => {
            const i = s.detail.originalEvent, p = i.button === 0 && i.ctrlKey === !0, u = i.button === 2 || p;
            a.current = u;
          },
          { checkForDefaultPrevented: !1 }
        ),
        onFocusOutside: F(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
), Fh = c.forwardRef(
  (e, t) => {
    const n = Ve(lt, e.__scopePopover), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      lc,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          e.onCloseAutoFocus?.(a), a.defaultPrevented || (r.current || n.triggerRef.current?.focus(), a.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (a) => {
          e.onInteractOutside?.(a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const s = a.target;
          n.triggerRef.current?.contains(s) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && o.current && a.preventDefault();
        }
      }
    );
  }
), lc = c.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: p,
      onFocusOutside: u,
      onInteractOutside: d,
      ...f
    } = e, h = Ve(lt, n), v = Nt(n);
    return Rr(), /* @__PURE__ */ l.jsx(
      wn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ l.jsx(
          gn,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: d,
            onEscapeKeyDown: i,
            onPointerDownOutside: p,
            onFocusOutside: u,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ l.jsx(
              ns,
              {
                "data-state": dc(h.open),
                role: "dialog",
                id: h.contentId,
                ...v,
                ...f,
                ref: t,
                style: {
                  ...f.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              }
            )
          }
        )
      }
    );
  }
), uc = "PopoverClose", zh = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ve(uc, n);
    return /* @__PURE__ */ l.jsx(
      V.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: F(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
zh.displayName = uc;
var Wh = "PopoverArrow", Bh = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Nt(n);
    return /* @__PURE__ */ l.jsx(rs, { ...o, ...r, ref: t });
  }
);
Bh.displayName = Wh;
function dc(e) {
  return e ? "open" : "closed";
}
var Hh = nc, Uh = oc, Vh = ic, Yh = sc, Gh = cc;
function qv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Hh, { "data-slot": "popover", ...e });
}
function Zv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Vh, { "data-slot": "popover-trigger", ...e });
}
function Jv({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ l.jsx(Yh, { children: /* @__PURE__ */ l.jsx(
    Gh,
    {
      "data-slot": "popover-content",
      align: t,
      sideOffset: n,
      className: M(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        e
      ),
      ...r
    }
  ) });
}
function Qv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Uh, { "data-slot": "popover-anchor", ...e });
}
export {
  Zh as Accordion,
  ev as AccordionContent,
  Jh as AccordionItem,
  Qh as AccordionTrigger,
  tv as Alert,
  rv as AlertDescription,
  nv as AlertTitle,
  ov as AspectRatio,
  iv as Avatar,
  cv as AvatarFallback,
  sv as AvatarImage,
  lv as Badge,
  uv as Breadcrumb,
  vv as BreadcrumbEllipsis,
  fv as BreadcrumbItem,
  pv as BreadcrumbLink,
  dv as BreadcrumbList,
  mv as BreadcrumbPage,
  hv as BreadcrumbSeparator,
  $c as Button,
  Da as Card,
  Ia as CardContent,
  bu as CardDescription,
  xu as CardFooter,
  gu as CardHeader,
  wu as CardTitle,
  xv as Dialog,
  Kd as DialogClose,
  Xd as DialogContent,
  af as DialogDescription,
  rf as DialogFooter,
  nf as DialogHeader,
  Ci as DialogOverlay,
  Si as DialogPortal,
  of as DialogTitle,
  yv as DialogTrigger,
  Ev as Drawer,
  Av as DrawerClose,
  Pv as DrawerContent,
  Nv as DrawerDescription,
  Ov as DrawerFooter,
  _v as DrawerHeader,
  kf as DrawerOverlay,
  jf as DrawerPortal,
  Tv as DrawerTitle,
  Rv as DrawerTrigger,
  Iv as DropdownMenu,
  Fv as DropdownMenuCheckboxItem,
  kv as DropdownMenuContent,
  Lv as DropdownMenuGroup,
  $v as DropdownMenuItem,
  Bv as DropdownMenuLabel,
  Mv as DropdownMenuPortal,
  zv as DropdownMenuRadioGroup,
  Wv as DropdownMenuRadioItem,
  Hv as DropdownMenuSeparator,
  Uv as DropdownMenuShortcut,
  Vv as DropdownMenuSub,
  Gv as DropdownMenuSubContent,
  Yv as DropdownMenuSubTrigger,
  jv as DropdownMenuTrigger,
  Ql as Image,
  Sv as InnerDialog,
  qd as InnerDialogClose,
  Zd as InnerDialogContent,
  tf as InnerDialogDescription,
  Qd as InnerDialogFooter,
  Jd as InnerDialogHeader,
  ef as InnerDialogTitle,
  Cv as InnerDialogTrigger,
  Kv as Label,
  Xl as NativeSelect,
  qv as Popover,
  Qv as PopoverAnchor,
  Jv as PopoverContent,
  Zv as PopoverTrigger,
  ku as ScrollArea,
  Ga as ScrollBar,
  vu as badgeVariants,
  Lc as buttonVariants,
  M as cn,
  ql as imageVariants
};
