import * as c from "react";
import T, { createElement as Nn, PureComponent as wc, forwardRef as Ko, useState as Ht, useRef as Xt, useCallback as bc, useMemo as Xo, useEffect as yt, useLayoutEffect as qo } from "react";
import { Slot as Zo, createSlot as ot } from "@radix-ui/react-slot";
import { cva as St } from "class-variance-authority";
import * as Jo from "react-dom";
import xc from "react-dom";
import { ChevronDownIcon as Qo, XIcon as yc, CheckIcon as Zn, ImageIcon as Sc, AlertCircle as Cc, Loader2 as Ec, ChevronRight as Rc, MoreHorizontal as Pc, X as ea, CircleIcon as Ac, ChevronRightIcon as _c } from "lucide-react";
var It = { exports: {} }, ft = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oo;
function Tc() {
  if (oo) return ft;
  oo = 1;
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
  return ft.Fragment = t, ft.jsx = n, ft.jsxs = n, ft;
}
var pt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function Oc() {
  return ao || (ao = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(R) {
      if (R == null) return null;
      if (typeof R == "function")
        return R.$$typeof === N ? null : R.displayName || R.name || null;
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
        case A:
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
          case P:
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
      if (typeof R == "object" && R !== null && R.$$typeof === P)
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
    function f() {
      var R = e(this.type);
      return z[R] || (z[R] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), R = this.props.ref, R !== void 0 ? R : null;
    }
    function p(R, $, Y, G, ee, ne, ce, X) {
      return Y = ne.ref, R = {
        $$typeof: v,
        type: R,
        key: $,
        props: ne,
        _owner: ee
      }, (Y !== void 0 ? Y : null) !== null ? Object.defineProperty(R, "ref", {
        enumerable: !1,
        get: f
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
    function u(R, $, Y, G, ee, ne, ce, X) {
      var Z = $.children;
      if (Z !== void 0)
        if (G)
          if (O(Z)) {
            for (G = 0; G < Z.length; G++)
              d(Z[G]);
            Object.freeze && Object.freeze(Z);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(Z);
      if (I.call($, "key")) {
        Z = e(R);
        var he = Object.keys($).filter(function(Re) {
          return Re !== "key";
        });
        G = 0 < he.length ? "{key: someKey, " + he.join(": ..., ") + ": ...}" : "{key: someKey}", D[Z + G] || (he = 0 < he.length ? "{" + he.join(": ..., ") + ": ...}" : "{}", console.error(
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
        ), D[Z + G] = !0);
      }
      if (Z = null, Y !== void 0 && (n(Y), Z = "" + Y), s($) && (n($.key), Z = "" + $.key), "key" in $) {
        Y = {};
        for (var Ie in $)
          Ie !== "key" && (Y[Ie] = $[Ie]);
      } else Y = $;
      return Z && i(
        Y,
        typeof R == "function" ? R.displayName || R.name || "Unknown" : R
      ), p(
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
    function d(R) {
      typeof R == "object" && R !== null && R.$$typeof === v && R._store && (R._store.validated = 1);
    }
    var h = T, v = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), A = Symbol.for("react.activity"), N = Symbol.for("react.client.reference"), j = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, O = Array.isArray, L = console.createTask ? console.createTask : function() {
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
    )(), k = L(r(a)), D = {};
    pt.Fragment = m, pt.jsx = function(R, $, Y, G, ee) {
      var ne = 1e4 > j.recentlyCreatedOwnerStacks++;
      return u(
        R,
        $,
        Y,
        !1,
        G,
        ee,
        ne ? Error("react-stack-top-frame") : B,
        ne ? L(r(R)) : k
      );
    }, pt.jsxs = function(R, $, Y, G, ee) {
      var ne = 1e4 > j.recentlyCreatedOwnerStacks++;
      return u(
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
  })()), pt;
}
var io;
function Dc() {
  return io || (io = 1, process.env.NODE_ENV === "production" ? It.exports = Tc() : It.exports = Oc()), It.exports;
}
var l = Dc();
function M(...e) {
  return e.filter(Boolean).join(" ");
}
const Nc = St(
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
), Ic = c.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
    const s = r ? Zo : "button";
    return /* @__PURE__ */ l.jsx(
      s,
      {
        className: M(Nc({ variant: t, size: n, className: e })),
        ref: a,
        "aria-label": o["aria-label"] || (typeof o.children == "string" ? o.children : void 0),
        ...o
      }
    );
  }
);
Ic.displayName = "Button";
function Mc(e, t) {
  const n = c.createContext(t), r = (a) => {
    const { children: s, ...i } = a, f = c.useMemo(() => i, Object.values(i));
    return /* @__PURE__ */ l.jsx(n.Provider, { value: f, children: s });
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
    const i = c.createContext(s), f = n.length;
    n = [...n, s];
    const p = (d) => {
      const { scope: h, children: v, ...b } = d, m = h?.[e]?.[f] || i, w = c.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ l.jsx(m.Provider, { value: w, children: v });
    };
    p.displayName = a + "Provider";
    function u(d, h) {
      const v = h?.[e]?.[f] || i, b = c.useContext(v);
      if (b) return b;
      if (s !== void 0) return s;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [p, u];
  }
  const o = () => {
    const a = n.map((s) => c.createContext(s));
    return function(i) {
      const f = i?.[e] || a;
      return c.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: f } }),
        [i, f]
      );
    };
  };
  return o.scopeName = e, [r, jc(o, ...t)];
}
function jc(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const s = r.reduce((i, { useScope: f, scopeName: p }) => {
        const d = f(a)[`__scope${p}`];
        return { ...i, ...d };
      }, {});
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function so(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ur(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = so(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : so(e[o], null);
        }
      };
  };
}
function J(...e) {
  return c.useCallback(ur(...e), e);
}
function dr(e) {
  const t = e + "CollectionProvider", [n, r] = Se(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), s = (m) => {
    const { scope: w, children: g } = m, x = T.useRef(null), S = T.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ l.jsx(o, { scope: w, itemMap: S, collectionRef: x, children: g });
  };
  s.displayName = t;
  const i = e + "CollectionSlot", f = ot(i), p = T.forwardRef(
    (m, w) => {
      const { scope: g, children: x } = m, S = a(i, g), y = J(w, S.collectionRef);
      return /* @__PURE__ */ l.jsx(f, { ref: y, children: x });
    }
  );
  p.displayName = i;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", h = ot(u), v = T.forwardRef(
    (m, w) => {
      const { scope: g, children: x, ...S } = m, y = T.useRef(null), E = J(w, y), _ = a(u, g);
      return T.useEffect(() => (_.itemMap.set(y, { ref: y, ...S }), () => void _.itemMap.delete(y))), /* @__PURE__ */ l.jsx(h, { [d]: "", ref: E, children: x });
    }
  );
  v.displayName = u;
  function b(m) {
    const w = a(e + "CollectionConsumer", m);
    return T.useCallback(() => {
      const x = w.collectionRef.current;
      if (!x) return [];
      const S = Array.from(x.querySelectorAll(`[${d}]`));
      return Array.from(w.itemMap.values()).sort(
        (_, C) => S.indexOf(_.ref.current) - S.indexOf(C.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [
    { Provider: s, Slot: p, ItemSlot: v },
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
}, kc = c[" useInsertionEffect ".trim().toString()] || me;
function We({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, s] = Lc({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, f = i ? e : o;
  {
    const u = c.useRef(e !== void 0);
    c.useEffect(() => {
      const d = u.current;
      d !== i && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = i;
    }, [i, r]);
  }
  const p = c.useCallback(
    (u) => {
      if (i) {
        const d = $c(u) ? u(e) : u;
        d !== e && s.current?.(d);
      } else
        a(u);
    },
    [i, e, a, s]
  );
  return [f, p];
}
function Lc({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = c.useState(e), o = c.useRef(n), a = c.useRef(t);
  return kc(() => {
    a.current = t;
  }, [t]), c.useEffect(() => {
    o.current !== n && (a.current?.(n), o.current = n);
  }, [n, o]), [n, r, a];
}
function $c(e) {
  return typeof e == "function";
}
var Fc = [
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
], V = Fc.reduce((e, t) => {
  const n = ot(`Primitive.${t}`), r = c.forwardRef((o, a) => {
    const { asChild: s, ...i } = o, f = s ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(f, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ta(e, t) {
  e && Jo.flushSync(() => e.dispatchEvent(t));
}
function zc(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var ue = (e) => {
  const { present: t, children: n } = e, r = Wc(t), o = typeof n == "function" ? n({ present: r.isPresent }) : c.Children.only(n), a = J(r.ref, Bc(o));
  return typeof n == "function" || r.isPresent ? c.cloneElement(o, { ref: a }) : null;
};
ue.displayName = "Presence";
function Wc(e) {
  const [t, n] = c.useState(), r = c.useRef(null), o = c.useRef(e), a = c.useRef("none"), s = e ? "mounted" : "unmounted", [i, f] = zc(s, {
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
    const p = Mt(r.current);
    a.current = i === "mounted" ? p : "none";
  }, [i]), me(() => {
    const p = r.current, u = o.current;
    if (u !== e) {
      const h = a.current, v = Mt(p);
      e ? f("MOUNT") : v === "none" || p?.display === "none" ? f("UNMOUNT") : f(u && h !== v ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, f]), me(() => {
    if (t) {
      let p;
      const u = t.ownerDocument.defaultView ?? window, d = (v) => {
        const m = Mt(r.current).includes(CSS.escape(v.animationName));
        if (v.target === t && m && (f("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", p = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, h = (v) => {
        v.target === t && (a.current = Mt(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(p), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: c.useCallback((p) => {
      r.current = p ? getComputedStyle(p) : null, n(p);
    }, [])
  };
}
function Mt(e) {
  return e?.animationName || "none";
}
function Bc(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Hc = c[" useId ".trim().toString()] || (() => {
}), Uc = 0;
function be(e) {
  const [t, n] = c.useState(Hc());
  return me(() => {
    n((r) => r ?? String(Uc++));
  }, [e]), t ? `radix-${t}` : "";
}
var sn = "Collapsible", [Vc, na] = Se(sn), [Yc, fr] = Vc(sn), ra = c.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: a,
      onOpenChange: s,
      ...i
    } = e, [f, p] = We({
      prop: r,
      defaultProp: o ?? !1,
      onChange: s,
      caller: sn
    });
    return /* @__PURE__ */ l.jsx(
      Yc,
      {
        scope: n,
        disabled: a,
        contentId: be(),
        open: f,
        onOpenToggle: c.useCallback(() => p((u) => !u), [p]),
        children: /* @__PURE__ */ l.jsx(
          V.div,
          {
            "data-state": mr(f),
            "data-disabled": a ? "" : void 0,
            ...i,
            ref: t
          }
        )
      }
    );
  }
);
ra.displayName = sn;
var oa = "CollapsibleTrigger", aa = c.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = fr(oa, n);
    return /* @__PURE__ */ l.jsx(
      V.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": mr(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
aa.displayName = oa;
var pr = "CollapsibleContent", ia = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = fr(pr, e.__scopeCollapsible);
    return /* @__PURE__ */ l.jsx(ue, { present: n || o.open, children: ({ present: a }) => /* @__PURE__ */ l.jsx(Gc, { ...r, ref: t, present: a }) });
  }
);
ia.displayName = pr;
var Gc = c.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...a } = e, s = fr(pr, n), [i, f] = c.useState(r), p = c.useRef(null), u = J(t, p), d = c.useRef(0), h = d.current, v = c.useRef(0), b = v.current, m = s.open || i, w = c.useRef(m), g = c.useRef(void 0);
  return c.useEffect(() => {
    const x = requestAnimationFrame(() => w.current = !1);
    return () => cancelAnimationFrame(x);
  }, []), me(() => {
    const x = p.current;
    if (x) {
      g.current = g.current || {
        transitionDuration: x.style.transitionDuration,
        animationName: x.style.animationName
      }, x.style.transitionDuration = "0s", x.style.animationName = "none";
      const S = x.getBoundingClientRect();
      d.current = S.height, v.current = S.width, w.current || (x.style.transitionDuration = g.current.transitionDuration, x.style.animationName = g.current.animationName), f(r);
    }
  }, [s.open, r]), /* @__PURE__ */ l.jsx(
    V.div,
    {
      "data-state": mr(s.open),
      "data-disabled": s.disabled ? "" : void 0,
      id: s.contentId,
      hidden: !m,
      ...a,
      ref: u,
      style: {
        "--radix-collapsible-content-height": h ? `${h}px` : void 0,
        "--radix-collapsible-content-width": b ? `${b}px` : void 0,
        ...e.style
      },
      children: m && o
    }
  );
});
function mr(e) {
  return e ? "open" : "closed";
}
var Kc = ra, Xc = aa, qc = ia, Zc = c.createContext(void 0);
function cn(e) {
  const t = c.useContext(Zc);
  return e || t || "ltr";
}
var Ce = "Accordion", Jc = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"], [hr, Qc, el] = dr(Ce), [ln, Th] = Se(Ce, [
  el,
  na
]), vr = na(), sa = T.forwardRef(
  (e, t) => {
    const { type: n, ...r } = e, o = r, a = r;
    return /* @__PURE__ */ l.jsx(hr.Provider, { scope: e.__scopeAccordion, children: n === "multiple" ? /* @__PURE__ */ l.jsx(ol, { ...a, ref: t }) : /* @__PURE__ */ l.jsx(rl, { ...o, ref: t }) });
  }
);
sa.displayName = Ce;
var [ca, tl] = ln(Ce), [la, nl] = ln(
  Ce,
  { collapsible: !1 }
), rl = T.forwardRef(
  (e, t) => {
    const {
      value: n,
      defaultValue: r,
      onValueChange: o = () => {
      },
      collapsible: a = !1,
      ...s
    } = e, [i, f] = We({
      prop: n,
      defaultProp: r ?? "",
      onChange: o,
      caller: Ce
    });
    return /* @__PURE__ */ l.jsx(
      ca,
      {
        scope: e.__scopeAccordion,
        value: T.useMemo(() => i ? [i] : [], [i]),
        onItemOpen: f,
        onItemClose: T.useCallback(() => a && f(""), [a, f]),
        children: /* @__PURE__ */ l.jsx(la, { scope: e.__scopeAccordion, collapsible: a, children: /* @__PURE__ */ l.jsx(ua, { ...s, ref: t }) })
      }
    );
  }
), ol = T.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...a
  } = e, [s, i] = We({
    prop: n,
    defaultProp: r ?? [],
    onChange: o,
    caller: Ce
  }), f = T.useCallback(
    (u) => i((d = []) => [...d, u]),
    [i]
  ), p = T.useCallback(
    (u) => i((d = []) => d.filter((h) => h !== u)),
    [i]
  );
  return /* @__PURE__ */ l.jsx(
    ca,
    {
      scope: e.__scopeAccordion,
      value: s,
      onItemOpen: f,
      onItemClose: p,
      children: /* @__PURE__ */ l.jsx(la, { scope: e.__scopeAccordion, collapsible: !0, children: /* @__PURE__ */ l.jsx(ua, { ...a, ref: t }) })
    }
  );
}), [al, un] = ln(Ce), ua = T.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, disabled: r, dir: o, orientation: a = "vertical", ...s } = e, i = T.useRef(null), f = J(i, t), p = Qc(n), d = cn(o) === "ltr", h = F(e.onKeyDown, (v) => {
      if (!Jc.includes(v.key)) return;
      const b = v.target, m = p().filter((P) => !P.ref.current?.disabled), w = m.findIndex((P) => P.ref.current === b), g = m.length;
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
          a === "horizontal" && (d ? E() : _());
          break;
        case "ArrowDown":
          a === "vertical" && E();
          break;
        case "ArrowLeft":
          a === "horizontal" && (d ? _() : E());
          break;
        case "ArrowUp":
          a === "vertical" && _();
          break;
      }
      const C = x % g;
      m[C].ref.current?.focus();
    });
    return /* @__PURE__ */ l.jsx(
      al,
      {
        scope: n,
        disabled: r,
        direction: o,
        orientation: a,
        children: /* @__PURE__ */ l.jsx(hr.Slot, { scope: n, children: /* @__PURE__ */ l.jsx(
          V.div,
          {
            ...s,
            "data-orientation": a,
            ref: f,
            onKeyDown: r ? void 0 : h
          }
        ) })
      }
    );
  }
), qt = "AccordionItem", [il, gr] = ln(qt), da = T.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, value: r, ...o } = e, a = un(qt, n), s = tl(qt, n), i = vr(n), f = be(), p = r && s.value.includes(r) || !1, u = a.disabled || e.disabled;
    return /* @__PURE__ */ l.jsx(
      il,
      {
        scope: n,
        open: p,
        disabled: u,
        triggerId: f,
        children: /* @__PURE__ */ l.jsx(
          Kc,
          {
            "data-orientation": a.orientation,
            "data-state": ga(p),
            ...i,
            ...o,
            ref: t,
            disabled: u,
            open: p,
            onOpenChange: (d) => {
              d ? s.onItemOpen(r) : s.onItemClose(r);
            }
          }
        )
      }
    );
  }
);
da.displayName = qt;
var fa = "AccordionHeader", pa = T.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = un(Ce, n), a = gr(fa, n);
    return /* @__PURE__ */ l.jsx(
      V.h3,
      {
        "data-orientation": o.orientation,
        "data-state": ga(a.open),
        "data-disabled": a.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
pa.displayName = fa;
var Jn = "AccordionTrigger", ma = T.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = un(Ce, n), a = gr(Jn, n), s = nl(Jn, n), i = vr(n);
    return /* @__PURE__ */ l.jsx(hr.ItemSlot, { scope: n, children: /* @__PURE__ */ l.jsx(
      Xc,
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
ma.displayName = Jn;
var ha = "AccordionContent", va = T.forwardRef(
  (e, t) => {
    const { __scopeAccordion: n, ...r } = e, o = un(Ce, n), a = gr(ha, n), s = vr(n);
    return /* @__PURE__ */ l.jsx(
      qc,
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
va.displayName = ha;
function ga(e) {
  return e ? "open" : "closed";
}
var sl = sa, cl = da, ll = pa, ul = ma, dl = va;
function Oh({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(sl, { "data-slot": "accordion", ...e });
}
function Dh({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    cl,
    {
      "data-slot": "accordion-item",
      className: M("border-b last:border-b-0", e),
      ...t
    }
  );
}
function Nh({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(ll, { className: "flex", children: /* @__PURE__ */ l.jsxs(
    ul,
    {
      "data-slot": "accordion-trigger",
      className: M(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ l.jsx(Qo, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
      ]
    }
  ) });
}
function Ih({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    dl,
    {
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
      ...n,
      children: /* @__PURE__ */ l.jsx("div", { className: M("pt-0 pb-4", e), children: t })
    }
  );
}
function Qn() {
  return Qn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Qn.apply(null, arguments);
}
function co(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function er(e, t) {
  return er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, er(e, t);
}
function fl(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, er(e, t);
}
var lo = Number.isNaN || function(t) {
  return typeof t == "number" && t !== t;
};
function pl(e, t) {
  return !!(e === t || lo(e) && lo(t));
}
function ml(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (!pl(e[n], t[n]))
      return !1;
  return !0;
}
function In(e, t) {
  t === void 0 && (t = ml);
  var n, r = [], o, a = !1;
  function s() {
    for (var i = [], f = 0; f < arguments.length; f++)
      i[f] = arguments[f];
    return a && n === this && t(i, r) || (o = e.apply(this, i), a = !0, n = this, r = i), o;
  }
  return s;
}
var hl = typeof performance == "object" && typeof performance.now == "function", uo = hl ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function fo(e) {
  cancelAnimationFrame(e.id);
}
function vl(e, t) {
  var n = uo();
  function r() {
    uo() - n >= t ? e.call(null) : o.id = requestAnimationFrame(r);
  }
  var o = {
    id: requestAnimationFrame(r)
  };
  return o;
}
var Mn = -1;
function po(e) {
  if (e === void 0 && (e = !1), Mn === -1 || e) {
    var t = document.createElement("div"), n = t.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", document.body.appendChild(t), Mn = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
  }
  return Mn;
}
var Je = null;
function mo(e) {
  if (e === void 0 && (e = !1), Je === null || e) {
    var t = document.createElement("div"), n = t.style;
    n.width = "50px", n.height = "50px", n.overflow = "scroll", n.direction = "rtl";
    var r = document.createElement("div"), o = r.style;
    return o.width = "100px", o.height = "100px", t.appendChild(r), document.body.appendChild(t), t.scrollLeft > 0 ? Je = "positive-descending" : (t.scrollLeft = 1, t.scrollLeft === 0 ? Je = "negative" : Je = "positive-ascending"), document.body.removeChild(t), Je;
  }
  return Je;
}
process.env.NODE_ENV;
var gl = 150, wl = function(t, n) {
  return t;
}, Ut = null, Vt = null;
process.env.NODE_ENV !== "production" && typeof window < "u" && typeof window.WeakSet < "u" && (Ut = /* @__PURE__ */ new WeakSet(), Vt = /* @__PURE__ */ new WeakSet());
function bl(e) {
  var t, n = e.getItemOffset, r = e.getEstimatedTotalSize, o = e.getItemSize, a = e.getOffsetForIndexAndAlignment, s = e.getStartIndexForOffset, i = e.getStopIndexForStartIndex, f = e.initInstanceProps, p = e.shouldResetStyleCacheOnItemSizeChange, u = e.validateProps;
  return t = /* @__PURE__ */ (function(d) {
    fl(h, d);
    function h(b) {
      var m;
      return m = d.call(this, b) || this, m._instanceProps = f(m.props, co(m)), m._outerRef = void 0, m._resetIsScrollingTimeoutId = null, m.state = {
        instance: co(m),
        isScrolling: !1,
        scrollDirection: "forward",
        scrollOffset: typeof m.props.initialScrollOffset == "number" ? m.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: !1
      }, m._callOnItemsRendered = void 0, m._callOnItemsRendered = In(function(w, g, x, S) {
        return m.props.onItemsRendered({
          overscanStartIndex: w,
          overscanStopIndex: g,
          visibleStartIndex: x,
          visibleStopIndex: S
        });
      }), m._callOnScroll = void 0, m._callOnScroll = In(function(w, g, x) {
        return m.props.onScroll({
          scrollDirection: w,
          scrollOffset: g,
          scrollUpdateWasRequested: x
        });
      }), m._getItemStyle = void 0, m._getItemStyle = function(w) {
        var g = m.props, x = g.direction, S = g.itemSize, y = g.layout, E = m._getItemStyleCache(p && S, p && y, p && x), _;
        if (E.hasOwnProperty(w))
          _ = E[w];
        else {
          var C = n(m.props, w, m._instanceProps), P = o(m.props, w, m._instanceProps), A = x === "horizontal" || y === "horizontal", N = x === "rtl", j = A ? C : 0;
          E[w] = _ = {
            position: "absolute",
            left: N ? void 0 : j,
            right: N ? j : void 0,
            top: A ? 0 : C,
            height: A ? "100%" : P,
            width: A ? P : "100%"
          };
        }
        return _;
      }, m._getItemStyleCache = void 0, m._getItemStyleCache = In(function(w, g, x) {
        return {};
      }), m._onScrollHorizontal = function(w) {
        var g = w.currentTarget, x = g.clientWidth, S = g.scrollLeft, y = g.scrollWidth;
        m.setState(function(E) {
          if (E.scrollOffset === S)
            return null;
          var _ = m.props.direction, C = S;
          if (_ === "rtl")
            switch (mo()) {
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
        m._resetIsScrollingTimeoutId !== null && fo(m._resetIsScrollingTimeoutId), m._resetIsScrollingTimeoutId = vl(m._resetIsScrolling, gl);
      }, m._resetIsScrolling = function() {
        m._resetIsScrollingTimeoutId = null, m.setState({
          isScrolling: !1
        }, function() {
          m._getItemStyleCache(-1, null);
        });
      }, m;
    }
    h.getDerivedStateFromProps = function(m, w) {
      return xl(m, w), u(m), null;
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
        S === "vertical" ? E = _.scrollWidth > _.clientWidth ? po() : 0 : E = _.scrollHeight > _.clientHeight ? po() : 0;
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
            switch (mo()) {
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
      this._resetIsScrollingTimeoutId !== null && fo(this._resetIsScrollingTimeoutId);
    }, v.render = function() {
      var m = this.props, w = m.children, g = m.className, x = m.direction, S = m.height, y = m.innerRef, E = m.innerElementType, _ = m.innerTagName, C = m.itemCount, P = m.itemData, A = m.itemKey, N = A === void 0 ? wl : A, j = m.layout, I = m.outerElementType, O = m.outerTagName, L = m.style, H = m.useIsScrolling, z = m.width, B = this.state.isScrolling, k = x === "horizontal" || j === "horizontal", D = k ? this._onScrollHorizontal : this._onScrollVertical, R = this._getRangeToRender(), $ = R[0], Y = R[1], G = [];
      if (C > 0)
        for (var ee = $; ee <= Y; ee++)
          G.push(Nn(w, {
            data: P,
            key: N(ee, P),
            index: ee,
            isScrolling: H ? B : void 0,
            style: this._getItemStyle(ee)
          }));
      var ne = r(this.props, this._instanceProps);
      return Nn(I || O || "div", {
        className: g,
        onScroll: D,
        ref: this._outerRefSetter,
        style: Qn({
          position: "relative",
          height: S,
          width: z,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction: x
        }, L)
      }, Nn(E || _ || "div", {
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
        var E = this.state, _ = E.scrollDirection, C = E.scrollOffset, P = E.scrollUpdateWasRequested;
        this._callOnScroll(_, C, P);
      }
    }, v._getRangeToRender = function() {
      var m = this.props, w = m.itemCount, g = m.overscanCount, x = this.state, S = x.isScrolling, y = x.scrollDirection, E = x.scrollOffset;
      if (w === 0)
        return [0, 0, 0, 0];
      var _ = s(this.props, E, this._instanceProps), C = i(this.props, _, E, this._instanceProps), P = !S || y === "backward" ? Math.max(1, g) : 1, A = !S || y === "forward" ? Math.max(1, g) : 1;
      return [Math.max(0, _ - P), Math.max(0, Math.min(w - 1, C + A)), _, C];
    }, h;
  })(wc), t.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  }, t;
}
var xl = function(t, n) {
  var r = t.children, o = t.direction, a = t.height, s = t.layout, i = t.innerTagName, f = t.outerTagName, p = t.width, u = n.instance;
  if (process.env.NODE_ENV !== "production") {
    (i != null || f != null) && Vt && !Vt.has(u) && (Vt.add(u), console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));
    var d = o === "horizontal" || s === "horizontal";
    switch (o) {
      case "horizontal":
      case "vertical":
        Ut && !Ut.has(u) && (Ut.add(u), console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));
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
    if (d && typeof p != "number")
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (p === null ? "null" : typeof p) + '" was specified.'));
    if (!d && typeof a != "number")
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (a === null ? "null" : typeof a) + '" was specified.'));
  }
}, yl = /* @__PURE__ */ bl({
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
    var i = t.direction, f = t.height, p = t.itemCount, u = t.itemSize, d = t.layout, h = t.width, v = i === "horizontal" || d === "horizontal", b = v ? h : f, m = Math.max(0, p * u - b), w = Math.min(m, n * u), g = Math.max(0, n * u - b + u + s);
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
    var o = t.direction, a = t.height, s = t.itemCount, i = t.itemSize, f = t.layout, p = t.width, u = o === "horizontal" || f === "horizontal", d = n * i, h = u ? p : a, v = Math.ceil((h + r - d) / i);
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
function Sl({ open: e, rootRef: t, setOpen: n, setSearchTerm: r }) {
  yt(() => {
    function o(a) {
      e && t.current && !t.current.contains(a.target) && (n(!1), r(""));
    }
    return document.addEventListener("mousedown", o), () => {
      document.removeEventListener("mousedown", o);
    };
  }, [e, t, n, r]);
}
function Cl({ open: e, searchable: t, searchInputRef: n }) {
  yt(() => {
    e && t && n.current && n.current.focus();
  }, [e, t, n]);
}
function El({ open: e, setOpen: t, setSearchTerm: n }) {
  yt(() => {
    function r(o) {
      o.key === "Escape" && e && (t(!1), n(""));
    }
    return document.addEventListener("keydown", r), () => {
      document.removeEventListener("keydown", r);
    };
  }, [e, t, n]);
}
const Rl = Ko(
  ({
    options: e,
    value: t,
    onChange: n,
    placeholder: r = "Selecione...",
    disabled: o = !1,
    className: a = "",
    itemHeight: s = 36,
    listHeight: i = 200,
    virtualizationThreshold: f = 100,
    searchable: p = !1,
    clearable: u = !1,
    emptyMessage: d = "Nenhuma opção encontrada",
    "aria-label": h
  }, v) => {
    const [b, m] = Ht(!1), [w, g] = Ht(""), x = Xt(null), S = Xt(null), [y, E] = Ht(e?.find((I) => I.value == t) || void 0), _ = bc(
      (I) => {
        x.current = I, typeof v == "function" ? v(I) : v && (v.current = I);
      },
      [v]
    ), C = Xo(() => !p || !w.trim() ? e : e.filter(
      (I) => I.label.toLowerCase().includes(w.toLowerCase())
    ), [e, w, p]);
    Cl({ open: b, searchable: p, searchInputRef: S }), El({ open: b, setOpen: m, setSearchTerm: g }), Sl({ open: b, rootRef: x, setOpen: m, setSearchTerm: g });
    const P = C.length > f, A = (I) => {
      n(I), E(e.find((O) => O.value === I)), m(!1), g("");
    }, N = (I) => {
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
                  u && y?.value && /* @__PURE__ */ l.jsx(
                    yc,
                    {
                      className: "h-4 w-4 text-muted-foreground hover:text-foreground transition-colors cursor-pointer mr-1",
                      onClick: N
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    Qo,
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
            p && /* @__PURE__ */ l.jsx("div", { className: "p-2 border-b border-border bg-white", children: /* @__PURE__ */ l.jsx(
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
            C.length === 0 ? /* @__PURE__ */ l.jsx("div", { className: "px-4 py-2 text-muted-foreground text-sm bg-white", children: d }) : P ? /* @__PURE__ */ l.jsx(
              yl,
              {
                height: Math.min(i, C.length * s),
                itemCount: C.length,
                itemSize: s,
                width: "100%",
                children: ({ index: I, style: O }) => {
                  const L = C[I], H = L.value === t;
                  return /* @__PURE__ */ l.jsxs(
                    "div",
                    {
                      style: O,
                      className: M(
                        "px-4 py-2 flex items-center justify-between cursor-pointer text-sm rounded transition-colors",
                        H ? "bg-theta-primary/10 text-theta-primary" : "hover:bg-accent hover:text-accent-foreground text-foreground",
                        L.disabled && "opacity-50 cursor-not-allowed"
                      ),
                      onClick: () => {
                        L.disabled || A(L.value);
                      },
                      children: [
                        /* @__PURE__ */ l.jsx("span", { className: "truncate", children: L.label }),
                        H && /* @__PURE__ */ l.jsx(Zn, { className: "h-4 w-4 ml-2 flex-shrink-0 text-theta-primary" })
                      ]
                    },
                    L.value
                  );
                }
              }
            ) : /* @__PURE__ */ l.jsx("div", { className: "max-h-48 overflow-y-auto bg-white", children: C.map((I, O) => {
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
                    I.disabled || A(I.value);
                  },
                  children: [
                    /* @__PURE__ */ l.jsx("span", { className: "truncate", children: I.label }),
                    L && /* @__PURE__ */ l.jsx(Zn, { className: "h-4 w-4 ml-2 flex-shrink-0 text-theta-primary" })
                  ]
                },
                `${I.value}-${O}`
              );
            }) })
          ] })
        ]
      }
    );
  }
);
Rl.displayName = "NativeSelect";
const Pl = St(
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
), Al = St(
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
), _l = (e, t = !1) => {
  const [n, r] = c.useState("loading");
  return c.useEffect(() => {
    if (!e || !t) return;
    r("loading");
    const o = new window.Image();
    return o.onload = () => r("loaded"), o.onerror = () => r("error"), o.src = e, () => {
      o.onload = null, o.onerror = null;
    };
  }, [e, t]), n;
}, Tl = c.forwardRef(
  ({
    className: e,
    containerClassName: t,
    variant: n,
    size: r,
    aspect: o,
    src: a,
    alt: s,
    fallbackSrc: i,
    lazy: f = !1,
    preload: p = !1,
    showPlaceholder: u = !0,
    placeholderIcon: d = Sc,
    onLoad: h,
    onError: v,
    ...b
  }, m) => {
    const [w, g] = c.useState("loading"), [x, S] = c.useState(a), [y, E] = c.useState(!1), _ = _l(a, p);
    c.useEffect(() => {
      g("loading"), S(a), E(!1);
    }, [a]), c.useEffect(() => {
      p && g(_);
    }, [p, _]);
    const C = c.useCallback(() => {
      g("loaded"), h?.();
    }, [h]), P = c.useCallback(() => {
      if (!y && i && x !== i) {
        S(i), E(!0);
        return;
      }
      g("error"), v?.();
    }, [i, x, y, v]), A = M(
      Pl({ variant: n, size: r, aspect: o }),
      t
    ), N = M(
      "w-full h-full object-cover transition-opacity duration-300",
      w === "loaded" ? "opacity-100" : "opacity-0",
      e
    ), j = () => w === "error" ? /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center justify-center text-muted-foreground gap-2", children: [
      /* @__PURE__ */ l.jsx(Cc, { className: "w-6 h-6" }),
      /* @__PURE__ */ l.jsx("span", { className: "text-xs text-center", children: "Erro ao carregar" })
    ] }) : w === "loading" ? /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col items-center justify-center text-muted-foreground gap-2", children: [
      /* @__PURE__ */ l.jsx(Ec, { className: "w-6 h-6 animate-spin" }),
      /* @__PURE__ */ l.jsx("span", { className: "text-xs", children: "Carregando..." })
    ] }) : /* @__PURE__ */ l.jsx(d, { className: "w-6 h-6 text-muted-foreground" });
    return /* @__PURE__ */ l.jsxs("div", { className: A, children: [
      /* @__PURE__ */ l.jsx(
        "img",
        {
          ref: m,
          src: x,
          alt: s,
          className: N,
          loading: f ? "lazy" : "eager",
          onLoad: C,
          onError: P,
          ...b
        }
      ),
      u && /* @__PURE__ */ l.jsx("div", { className: Al({ state: w }), children: /* @__PURE__ */ l.jsx(j, {}) })
    ] });
  }
);
Tl.displayName = "Image";
const Ol = St(
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
function Mh({
  className: e,
  variant: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: M(Ol({ variant: t }), e),
      ...n
    }
  );
}
function jh({ className: e, ...t }) {
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
function kh({
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
var Dl = "AspectRatio", wa = c.forwardRef(
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
wa.displayName = Dl;
var Nl = wa;
function Lh({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Nl, { "data-slot": "aspect-ratio", ...e });
}
function ie(e) {
  const t = c.useRef(e);
  return c.useEffect(() => {
    t.current = e;
  }), c.useMemo(() => (...n) => t.current?.(...n), []);
}
var jt = { exports: {} }, jn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ho;
function Il() {
  if (ho) return jn;
  ho = 1;
  var e = T;
  function t(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useState, o = e.useEffect, a = e.useLayoutEffect, s = e.useDebugValue;
  function i(d, h) {
    var v = h(), b = r({ inst: { value: v, getSnapshot: h } }), m = b[0].inst, w = b[1];
    return a(
      function() {
        m.value = v, m.getSnapshot = h, f(m) && w({ inst: m });
      },
      [d, v, h]
    ), o(
      function() {
        return f(m) && w({ inst: m }), d(function() {
          f(m) && w({ inst: m });
        });
      },
      [d]
    ), s(v), v;
  }
  function f(d) {
    var h = d.getSnapshot;
    d = d.value;
    try {
      var v = h();
      return !n(d, v);
    } catch {
      return !0;
    }
  }
  function p(d, h) {
    return h();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? p : i;
  return jn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, jn;
}
var kn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vo;
function Ml() {
  return vo || (vo = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(v, b) {
      return v === b && (v !== 0 || 1 / v === 1 / b) || v !== v && b !== b;
    }
    function t(v, b) {
      u || o.startTransition === void 0 || (u = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var m = b();
      if (!d) {
        var w = b();
        a(m, w) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), d = !0);
      }
      w = s({
        inst: { value: m, getSnapshot: b }
      });
      var g = w[0].inst, x = w[1];
      return f(
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
      ), p(m), m;
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
    var o = T, a = typeof Object.is == "function" ? Object.is : e, s = o.useState, i = o.useEffect, f = o.useLayoutEffect, p = o.useDebugValue, u = !1, d = !1, h = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : t;
    kn.useSyncExternalStore = o.useSyncExternalStore !== void 0 ? o.useSyncExternalStore : h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), kn;
}
var go;
function jl() {
  return go || (go = 1, process.env.NODE_ENV === "production" ? jt.exports = Il() : jt.exports = Ml()), jt.exports;
}
var kl = jl();
function Ll() {
  return kl.useSyncExternalStore(
    $l,
    () => !0,
    () => !1
  );
}
function $l() {
  return () => {
  };
}
var wr = "Avatar", [Fl, $h] = Se(wr), [zl, ba] = Fl(wr), xa = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, a] = c.useState("idle");
    return /* @__PURE__ */ l.jsx(
      zl,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: a,
        children: /* @__PURE__ */ l.jsx(V.span, { ...r, ref: t })
      }
    );
  }
);
xa.displayName = wr;
var ya = "AvatarImage", Sa = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...a } = e, s = ba(ya, n), i = Wl(r, a), f = ie((p) => {
      o(p), s.onImageLoadingStatusChange(p);
    });
    return me(() => {
      i !== "idle" && f(i);
    }, [i, f]), i === "loaded" ? /* @__PURE__ */ l.jsx(V.img, { ...a, ref: t, src: r }) : null;
  }
);
Sa.displayName = ya;
var Ca = "AvatarFallback", Ea = c.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, a = ba(Ca, n), [s, i] = c.useState(r === void 0);
    return c.useEffect(() => {
      if (r !== void 0) {
        const f = window.setTimeout(() => i(!0), r);
        return () => window.clearTimeout(f);
      }
    }, [r]), s && a.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ l.jsx(V.span, { ...o, ref: t }) : null;
  }
);
Ea.displayName = Ca;
function wo(e, t) {
  return e ? t ? (e.src !== t && (e.src = t), e.complete && e.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function Wl(e, { referrerPolicy: t, crossOrigin: n }) {
  const r = Ll(), o = c.useRef(null), a = r ? (o.current || (o.current = new window.Image()), o.current) : null, [s, i] = c.useState(
    () => wo(a, e)
  );
  return me(() => {
    i(wo(a, e));
  }, [a, e]), me(() => {
    const f = (d) => () => {
      i(d);
    };
    if (!a) return;
    const p = f("loaded"), u = f("error");
    return a.addEventListener("load", p), a.addEventListener("error", u), t && (a.referrerPolicy = t), typeof n == "string" && (a.crossOrigin = n), () => {
      a.removeEventListener("load", p), a.removeEventListener("error", u);
    };
  }, [a, n, t]), s;
}
var Bl = xa, Hl = Sa, Ul = Ea;
function Vl(e) {
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
function Fh({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    Bl,
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
function zh({
  className: e,
  src: t,
  showLoadingState: n = !0,
  ...r
}) {
  const { isLoaded: o, isError: a } = Vl(t);
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsx(
      Hl,
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
function Wh({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    Ul,
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
const Yl = St(
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
function Bh({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ l.jsx("div", { className: M(Yl({ variant: t }), e), ...n });
}
function Hh({ ...e }) {
  return /* @__PURE__ */ l.jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...e });
}
function Uh({ className: e, ...t }) {
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
function Vh({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: M("inline-flex items-center gap-1.5", e),
      ...t
    }
  );
}
function Yh({
  asChild: e,
  className: t,
  ...n
}) {
  const r = e ? Zo : "a";
  return /* @__PURE__ */ l.jsx(
    r,
    {
      "data-slot": "breadcrumb-link",
      className: M("hover:text-foreground transition-colors", t),
      ...n
    }
  );
}
function Gh({ className: e, ...t }) {
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
function Kh({
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
      children: e ?? /* @__PURE__ */ l.jsx(Rc, {})
    }
  );
}
function Xh({
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
        /* @__PURE__ */ l.jsx(Pc, { className: "size-4" }),
        /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
const Ra = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
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
Ra.displayName = "Card";
const Gl = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Gl.displayName = "CardHeader";
const Kl = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("font-semibold leading-none tracking-tight", e),
    ...t
  }
));
Kl.displayName = "CardTitle";
const Xl = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
Xl.displayName = "CardDescription";
const Pa = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx("div", { ref: n, className: M("p-6 pt-0", e), ...t }));
Pa.displayName = "CardContent";
const ql = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  "div",
  {
    ref: n,
    className: M("flex items-center p-6 pt-0", e),
    ...t
  }
));
ql.displayName = "CardFooter";
function Zl(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function Jl(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e);
}
var br = "ScrollArea", [Aa, qh] = Se(br), [Ql, ge] = Aa(br), _a = c.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: a = 600,
      ...s
    } = e, [i, f] = c.useState(null), [p, u] = c.useState(null), [d, h] = c.useState(null), [v, b] = c.useState(null), [m, w] = c.useState(null), [g, x] = c.useState(0), [S, y] = c.useState(0), [E, _] = c.useState(!1), [C, P] = c.useState(!1), A = J(t, (j) => f(j)), N = cn(o);
    return /* @__PURE__ */ l.jsx(
      Ql,
      {
        scope: n,
        type: r,
        dir: N,
        scrollHideDelay: a,
        scrollArea: i,
        viewport: p,
        onViewportChange: u,
        content: d,
        onContentChange: h,
        scrollbarX: v,
        onScrollbarXChange: b,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: _,
        scrollbarY: m,
        onScrollbarYChange: w,
        scrollbarYEnabled: C,
        onScrollbarYEnabledChange: P,
        onCornerWidthChange: x,
        onCornerHeightChange: y,
        children: /* @__PURE__ */ l.jsx(
          V.div,
          {
            dir: N,
            ...s,
            ref: A,
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
_a.displayName = br;
var Ta = "ScrollAreaViewport", Oa = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...a } = e, s = ge(Ta, n), i = c.useRef(null), f = J(t, i, s.onViewportChange);
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
          ref: f,
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
Oa.displayName = Ta;
var De = "ScrollAreaScrollbar", Da = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = ge(De, e.__scopeScrollArea), { onScrollbarXEnabledChange: a, onScrollbarYEnabledChange: s } = o, i = e.orientation === "horizontal";
    return c.useEffect(() => (i ? a(!0) : s(!0), () => {
      i ? a(!1) : s(!1);
    }), [i, a, s]), o.type === "hover" ? /* @__PURE__ */ l.jsx(eu, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ l.jsx(tu, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ l.jsx(Na, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ l.jsx(xr, { ...r, ref: t }) : null;
  }
);
Da.displayName = De;
var eu = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ge(De, e.__scopeScrollArea), [a, s] = c.useState(!1);
  return c.useEffect(() => {
    const i = o.scrollArea;
    let f = 0;
    if (i) {
      const p = () => {
        window.clearTimeout(f), s(!0);
      }, u = () => {
        f = window.setTimeout(() => s(!1), o.scrollHideDelay);
      };
      return i.addEventListener("pointerenter", p), i.addEventListener("pointerleave", u), () => {
        window.clearTimeout(f), i.removeEventListener("pointerenter", p), i.removeEventListener("pointerleave", u);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ l.jsx(ue, { present: n || a, children: /* @__PURE__ */ l.jsx(
    Na,
    {
      "data-state": a ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), tu = c.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = ge(De, e.__scopeScrollArea), a = e.orientation === "horizontal", s = fn(() => f("SCROLL_END"), 100), [i, f] = Jl("hidden", {
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
      const p = window.setTimeout(() => f("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(p);
    }
  }, [i, o.scrollHideDelay, f]), c.useEffect(() => {
    const p = o.viewport, u = a ? "scrollLeft" : "scrollTop";
    if (p) {
      let d = p[u];
      const h = () => {
        const v = p[u];
        d !== v && (f("SCROLL"), s()), d = v;
      };
      return p.addEventListener("scroll", h), () => p.removeEventListener("scroll", h);
    }
  }, [o.viewport, a, f, s]), /* @__PURE__ */ l.jsx(ue, { present: n || i !== "hidden", children: /* @__PURE__ */ l.jsx(
    xr,
    {
      "data-state": i === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: F(e.onPointerEnter, () => f("POINTER_ENTER")),
      onPointerLeave: F(e.onPointerLeave, () => f("POINTER_LEAVE"))
    }
  ) });
}), Na = c.forwardRef((e, t) => {
  const n = ge(De, e.__scopeScrollArea), { forceMount: r, ...o } = e, [a, s] = c.useState(!1), i = e.orientation === "horizontal", f = fn(() => {
    if (n.viewport) {
      const p = n.viewport.offsetWidth < n.viewport.scrollWidth, u = n.viewport.offsetHeight < n.viewport.scrollHeight;
      s(i ? p : u);
    }
  }, 10);
  return at(n.viewport, f), at(n.content, f), /* @__PURE__ */ l.jsx(ue, { present: r || a, children: /* @__PURE__ */ l.jsx(
    xr,
    {
      "data-state": a ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), xr = c.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = ge(De, e.__scopeScrollArea), a = c.useRef(null), s = c.useRef(0), [i, f] = c.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), p = La(i.viewport, i.content), u = {
    ...r,
    sizes: i,
    onSizesChange: f,
    hasThumb: p > 0 && p < 1,
    onThumbChange: (h) => a.current = h,
    onThumbPointerUp: () => s.current = 0,
    onThumbPointerDown: (h) => s.current = h
  };
  function d(h, v) {
    return su(h, s.current, i, v);
  }
  return n === "horizontal" ? /* @__PURE__ */ l.jsx(
    nu,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollLeft, v = bo(h, i, o.dir);
          a.current.style.transform = `translate3d(${v}px, 0, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollLeft = d(h, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ l.jsx(
    ru,
    {
      ...u,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && a.current) {
          const h = o.viewport.scrollTop, v = bo(h, i);
          a.current.style.transform = `translate3d(0, ${v}px, 0)`;
        }
      },
      onWheelScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = h);
      },
      onDragScroll: (h) => {
        o.viewport && (o.viewport.scrollTop = d(h));
      }
    }
  ) : null;
}), nu = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = ge(De, e.__scopeScrollArea), [s, i] = c.useState(), f = c.useRef(null), p = J(t, f, a.onScrollbarXChange);
  return c.useEffect(() => {
    f.current && i(getComputedStyle(f.current));
  }, [f]), /* @__PURE__ */ l.jsx(
    Ma,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: p,
      sizes: n,
      style: {
        bottom: 0,
        left: a.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: a.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": dn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
      onDragScroll: (u) => e.onDragScroll(u.x),
      onWheelScroll: (u, d) => {
        if (a.viewport) {
          const h = a.viewport.scrollLeft + u.deltaX;
          e.onWheelScroll(h), Fa(h, d) && u.preventDefault();
        }
      },
      onResize: () => {
        f.current && a.viewport && s && r({
          content: a.viewport.scrollWidth,
          viewport: a.viewport.offsetWidth,
          scrollbar: {
            size: f.current.clientWidth,
            paddingStart: Jt(s.paddingLeft),
            paddingEnd: Jt(s.paddingRight)
          }
        });
      }
    }
  );
}), ru = c.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, a = ge(De, e.__scopeScrollArea), [s, i] = c.useState(), f = c.useRef(null), p = J(t, f, a.onScrollbarYChange);
  return c.useEffect(() => {
    f.current && i(getComputedStyle(f.current));
  }, [f]), /* @__PURE__ */ l.jsx(
    Ma,
    {
      "data-orientation": "vertical",
      ...o,
      ref: p,
      sizes: n,
      style: {
        top: 0,
        right: a.dir === "ltr" ? 0 : void 0,
        left: a.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": dn(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
      onDragScroll: (u) => e.onDragScroll(u.y),
      onWheelScroll: (u, d) => {
        if (a.viewport) {
          const h = a.viewport.scrollTop + u.deltaY;
          e.onWheelScroll(h), Fa(h, d) && u.preventDefault();
        }
      },
      onResize: () => {
        f.current && a.viewport && s && r({
          content: a.viewport.scrollHeight,
          viewport: a.viewport.offsetHeight,
          scrollbar: {
            size: f.current.clientHeight,
            paddingStart: Jt(s.paddingTop),
            paddingEnd: Jt(s.paddingBottom)
          }
        });
      }
    }
  );
}), [ou, Ia] = Aa(De), Ma = c.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: a,
    onThumbPointerUp: s,
    onThumbPointerDown: i,
    onThumbPositionChange: f,
    onDragScroll: p,
    onWheelScroll: u,
    onResize: d,
    ...h
  } = e, v = ge(De, n), [b, m] = c.useState(null), w = J(t, (A) => m(A)), g = c.useRef(null), x = c.useRef(""), S = v.viewport, y = r.content - r.viewport, E = ie(u), _ = ie(f), C = fn(d, 10);
  function P(A) {
    if (g.current) {
      const N = A.clientX - g.current.left, j = A.clientY - g.current.top;
      p({ x: N, y: j });
    }
  }
  return c.useEffect(() => {
    const A = (N) => {
      const j = N.target;
      b?.contains(j) && E(N, y);
    };
    return document.addEventListener("wheel", A, { passive: !1 }), () => document.removeEventListener("wheel", A, { passive: !1 });
  }, [S, b, y, E]), c.useEffect(_, [r, _]), at(b, C), at(v.content, C), /* @__PURE__ */ l.jsx(
    ou,
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
          onPointerDown: F(e.onPointerDown, (A) => {
            A.button === 0 && (A.target.setPointerCapture(A.pointerId), g.current = b.getBoundingClientRect(), x.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), P(A));
          }),
          onPointerMove: F(e.onPointerMove, P),
          onPointerUp: F(e.onPointerUp, (A) => {
            const N = A.target;
            N.hasPointerCapture(A.pointerId) && N.releasePointerCapture(A.pointerId), document.body.style.webkitUserSelect = x.current, v.viewport && (v.viewport.style.scrollBehavior = ""), g.current = null;
          })
        }
      )
    }
  );
}), Zt = "ScrollAreaThumb", ja = c.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Ia(Zt, e.__scopeScrollArea);
    return /* @__PURE__ */ l.jsx(ue, { present: n || o.hasThumb, children: /* @__PURE__ */ l.jsx(au, { ref: t, ...r }) });
  }
), au = c.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, a = ge(Zt, n), s = Ia(Zt, n), { onThumbPositionChange: i } = s, f = J(
      t,
      (d) => s.onThumbChange(d)
    ), p = c.useRef(void 0), u = fn(() => {
      p.current && (p.current(), p.current = void 0);
    }, 100);
    return c.useEffect(() => {
      const d = a.viewport;
      if (d) {
        const h = () => {
          if (u(), !p.current) {
            const v = cu(d, i);
            p.current = v, i();
          }
        };
        return i(), d.addEventListener("scroll", h), () => d.removeEventListener("scroll", h);
      }
    }, [a.viewport, u, i]), /* @__PURE__ */ l.jsx(
      V.div,
      {
        "data-state": s.hasThumb ? "visible" : "hidden",
        ...o,
        ref: f,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: F(e.onPointerDownCapture, (d) => {
          const v = d.target.getBoundingClientRect(), b = d.clientX - v.left, m = d.clientY - v.top;
          s.onThumbPointerDown({ x: b, y: m });
        }),
        onPointerUp: F(e.onPointerUp, s.onThumbPointerUp)
      }
    );
  }
);
ja.displayName = Zt;
var yr = "ScrollAreaCorner", ka = c.forwardRef(
  (e, t) => {
    const n = ge(yr, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ l.jsx(iu, { ...e, ref: t }) : null;
  }
);
ka.displayName = yr;
var iu = c.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = ge(yr, n), [a, s] = c.useState(0), [i, f] = c.useState(0), p = !!(a && i);
  return at(o.scrollbarX, () => {
    const u = o.scrollbarX?.offsetHeight || 0;
    o.onCornerHeightChange(u), f(u);
  }), at(o.scrollbarY, () => {
    const u = o.scrollbarY?.offsetWidth || 0;
    o.onCornerWidthChange(u), s(u);
  }), p ? /* @__PURE__ */ l.jsx(
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
function Jt(e) {
  return e ? parseInt(e, 10) : 0;
}
function La(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function dn(e) {
  const t = La(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function su(e, t, n, r = "ltr") {
  const o = dn(n), a = o / 2, s = t || a, i = o - s, f = n.scrollbar.paddingStart + s, p = n.scrollbar.size - n.scrollbar.paddingEnd - i, u = n.content - n.viewport, d = r === "ltr" ? [0, u] : [u * -1, 0];
  return $a([f, p], d)(e);
}
function bo(e, t, n = "ltr") {
  const r = dn(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, a = t.scrollbar.size - o, s = t.content - t.viewport, i = a - r, f = n === "ltr" ? [0, s] : [s * -1, 0], p = Zl(e, f);
  return $a([0, s], [0, i])(p);
}
function $a(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Fa(e, t) {
  return e > 0 && e < t;
}
var cu = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return (function o() {
    const a = { left: e.scrollLeft, top: e.scrollTop }, s = n.left !== a.left, i = n.top !== a.top;
    (s || i) && t(), n = a, r = window.requestAnimationFrame(o);
  })(), () => window.cancelAnimationFrame(r);
};
function fn(e, t) {
  const n = ie(e), r = c.useRef(0);
  return c.useEffect(() => () => window.clearTimeout(r.current), []), c.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function at(e, t) {
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
var lu = _a, uu = Oa, du = ka;
function fu({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsxs(
    lu,
    {
      "data-slot": "scroll-area",
      className: M("relative", e),
      ...n,
      children: [
        /* @__PURE__ */ l.jsx(
          uu,
          {
            "data-slot": "scroll-area-viewport",
            className: "focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",
            children: t
          }
        ),
        /* @__PURE__ */ l.jsx(za, {}),
        /* @__PURE__ */ l.jsx(du, {})
      ]
    }
  );
}
function za({
  className: e,
  orientation: t = "vertical",
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    Da,
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
        ja,
        {
          "data-slot": "scroll-area-thumb",
          className: "bg-border relative flex-1 rounded-full"
        }
      )
    }
  );
}
const pu = Ko(
  ({ dateRange: e, onSelect: t, dateValue: n }, r) => {
    const o = Xt(null), a = Xt(!1);
    yt(() => {
      if (!o.current || a.current) return;
      const f = setTimeout(() => {
        if (n) {
          const p = o.current?.querySelector(
            `[data-key="${n}"]`
          );
          if (p) {
            p.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest"
            }), a.current = !0;
            return;
          }
        }
        if (e.length > 0) {
          const p = o.current?.querySelector(
            "[data-key]"
          );
          p && (p.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "nearest"
          }), a.current = !0);
        }
      }, 100);
      return () => clearTimeout(f);
    }, [n, e]);
    const s = (i, f) => {
      const p = `${f.year}-${String(f.month_number).padStart(2, "0")}-${String(f.day_number).padStart(2, "0")}`;
      t && t(p), i.currentTarget.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest"
      });
    };
    return /* @__PURE__ */ l.jsx(
      Ra,
      {
        ref: r,
        className: M(
          "bg-white m-4 border-none shadow-none max-w-[95%] min-w-[80%]"
        ),
        children: /* @__PURE__ */ l.jsx(Pa, { className: "p-0", children: /* @__PURE__ */ l.jsxs(fu, { className: "w-full", children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              ref: o,
              className: "flex space-x-4 py-4 px-2 justify-start",
              children: e.map((i) => {
                const f = `${i.year}-${String(i.month_number).padStart(2, "0")}-${String(i.day_number).padStart(2, "0")}`, p = f === n;
                return /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    "data-key": f,
                    onClick: (u) => s(u, i),
                    role: "button",
                    tabIndex: 0,
                    className: M(
                      "flex flex-col items-center flex-shrink-0 px-4 cursor-pointer transition-colors p-2",
                      p ? "bg-primary text-background rounded-xl" : "text-foreground"
                    ),
                    children: [
                      /* @__PURE__ */ l.jsxs("span", { className: "text-sm uppercase tracking-wide flex items-center", children: [
                        p && /* @__PURE__ */ l.jsx("span", { className: "mr-1", children: "🍃" }),
                        i.day
                      ] }),
                      /* @__PURE__ */ l.jsx(
                        "span",
                        {
                          className: M(
                            "text-2xl font-semibold mt-1",
                            p ? "text-background" : "text-accent"
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
                            p ? "text-background/90" : "text-muted-foreground/50"
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
                  f
                );
              })
            }
          ),
          /* @__PURE__ */ l.jsx(za, { orientation: "horizontal", className: "bg-input hidden lg:block" })
        ] }) })
      }
    );
  }
);
pu.displayName = "DateRangeDisplay";
function mu(e, t = globalThis?.document) {
  const n = ie(e);
  c.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var hu = "DismissableLayer", tr = "dismissableLayer.update", vu = "dismissableLayer.pointerDownOutside", gu = "dismissableLayer.focusOutside", xo, Wa = c.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), pn = c.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: i,
      ...f
    } = e, p = c.useContext(Wa), [u, d] = c.useState(null), h = u?.ownerDocument ?? globalThis?.document, [, v] = c.useState({}), b = J(t, (C) => d(C)), m = Array.from(p.layers), [w] = [...p.layersWithOutsidePointerEventsDisabled].slice(-1), g = m.indexOf(w), x = u ? m.indexOf(u) : -1, S = p.layersWithOutsidePointerEventsDisabled.size > 0, y = x >= g, E = xu((C) => {
      const P = C.target, A = [...p.branches].some((N) => N.contains(P));
      !y || A || (o?.(C), s?.(C), C.defaultPrevented || i?.());
    }, h), _ = yu((C) => {
      const P = C.target;
      [...p.branches].some((N) => N.contains(P)) || (a?.(C), s?.(C), C.defaultPrevented || i?.());
    }, h);
    return mu((C) => {
      x === p.layers.size - 1 && (r?.(C), !C.defaultPrevented && i && (C.preventDefault(), i()));
    }, h), c.useEffect(() => {
      if (u)
        return n && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (xo = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(u)), p.layers.add(u), yo(), () => {
          n && p.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = xo);
        };
    }, [u, h, n, p]), c.useEffect(() => () => {
      u && (p.layers.delete(u), p.layersWithOutsidePointerEventsDisabled.delete(u), yo());
    }, [u, p]), c.useEffect(() => {
      const C = () => v({});
      return document.addEventListener(tr, C), () => document.removeEventListener(tr, C);
    }, []), /* @__PURE__ */ l.jsx(
      V.div,
      {
        ...f,
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
pn.displayName = hu;
var wu = "DismissableLayerBranch", bu = c.forwardRef((e, t) => {
  const n = c.useContext(Wa), r = c.useRef(null), o = J(t, r);
  return c.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ l.jsx(V.div, { ...e, ref: o });
});
bu.displayName = wu;
function xu(e, t = globalThis?.document) {
  const n = ie(e), r = c.useRef(!1), o = c.useRef(() => {
  });
  return c.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let f = function() {
          Ba(
            vu,
            n,
            p,
            { discrete: !0 }
          );
        };
        const p = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = f, t.addEventListener("click", o.current, { once: !0 })) : f();
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
function yu(e, t = globalThis?.document) {
  const n = ie(e), r = c.useRef(!1);
  return c.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Ba(gu, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function yo() {
  const e = new CustomEvent(tr);
  document.dispatchEvent(e);
}
function Ba(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? ta(o, a) : o.dispatchEvent(a);
}
var Ln = "focusScope.autoFocusOnMount", $n = "focusScope.autoFocusOnUnmount", So = { bubbles: !1, cancelable: !0 }, Su = "FocusScope", mn = c.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...s
  } = e, [i, f] = c.useState(null), p = ie(o), u = ie(a), d = c.useRef(null), h = J(t, (m) => f(m)), v = c.useRef({
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
        i.contains(y) ? d.current = y : $e(d.current, { select: !0 });
      }, w = function(S) {
        if (v.paused || !i) return;
        const y = S.relatedTarget;
        y !== null && (i.contains(y) || $e(d.current, { select: !0 }));
      }, g = function(S) {
        if (document.activeElement === document.body)
          for (const E of S)
            E.removedNodes.length > 0 && $e(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", w);
      const x = new MutationObserver(g);
      return i && x.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", w), x.disconnect();
      };
    }
  }, [r, i, v.paused]), c.useEffect(() => {
    if (i) {
      Eo.add(v);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const g = new CustomEvent(Ln, So);
        i.addEventListener(Ln, p), i.dispatchEvent(g), g.defaultPrevented || (Cu(_u(Ha(i)), { select: !0 }), document.activeElement === m && $e(i));
      }
      return () => {
        i.removeEventListener(Ln, p), setTimeout(() => {
          const g = new CustomEvent($n, So);
          i.addEventListener($n, u), i.dispatchEvent(g), g.defaultPrevented || $e(m ?? document.body, { select: !0 }), i.removeEventListener($n, u), Eo.remove(v);
        }, 0);
      };
    }
  }, [i, p, u, v]);
  const b = c.useCallback(
    (m) => {
      if (!n && !r || v.paused) return;
      const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, g = document.activeElement;
      if (w && g) {
        const x = m.currentTarget, [S, y] = Eu(x);
        S && y ? !m.shiftKey && g === y ? (m.preventDefault(), n && $e(S, { select: !0 })) : m.shiftKey && g === S && (m.preventDefault(), n && $e(y, { select: !0 })) : g === x && m.preventDefault();
      }
    },
    [n, r, v.paused]
  );
  return /* @__PURE__ */ l.jsx(V.div, { tabIndex: -1, ...s, ref: h, onKeyDown: b });
});
mn.displayName = Su;
function Cu(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ($e(r, { select: t }), document.activeElement !== n) return;
}
function Eu(e) {
  const t = Ha(e), n = Co(t, e), r = Co(t.reverse(), e);
  return [n, r];
}
function Ha(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Co(e, t) {
  for (const n of e)
    if (!Ru(n, { upTo: t })) return n;
}
function Ru(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Pu(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function $e(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Pu(e) && t && e.select();
  }
}
var Eo = Au();
function Au() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Ro(e, t), e.unshift(t);
    },
    remove(t) {
      e = Ro(e, t), e[0]?.resume();
    }
  };
}
function Ro(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function _u(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Tu = "Portal", hn = c.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, a] = c.useState(!1);
  me(() => a(!0), []);
  const s = n || o && globalThis?.document?.body;
  return s ? xc.createPortal(/* @__PURE__ */ l.jsx(V.div, { ...r, ref: t }), s) : null;
});
hn.displayName = Tu;
var Fn = 0;
function Sr() {
  c.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Po()), document.body.insertAdjacentElement("beforeend", e[1] ?? Po()), Fn++, () => {
      Fn === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Fn--;
    };
  }, []);
}
function Po() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ae = function() {
  return Ae = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ae.apply(this, arguments);
};
function Ua(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ou(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Yt = "right-scroll-bar-position", Gt = "width-before-scroll-bar", Du = "with-scroll-bars-hidden", Nu = "--removed-body-scroll-bar-size";
function zn(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Iu(e, t) {
  var n = Ht(function() {
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
var Mu = typeof window < "u" ? c.useLayoutEffect : c.useEffect, Ao = /* @__PURE__ */ new WeakMap();
function ju(e, t) {
  var n = Iu(null, function(r) {
    return e.forEach(function(o) {
      return zn(o, r);
    });
  });
  return Mu(function() {
    var r = Ao.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), s = n.current;
      o.forEach(function(i) {
        a.has(i) || zn(i, null);
      }), a.forEach(function(i) {
        o.has(i) || zn(i, s);
      });
    }
    Ao.set(n, e);
  }, [e]), n;
}
function ku(e) {
  return e;
}
function Lu(e, t) {
  t === void 0 && (t = ku);
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
      var f = function() {
        var u = s;
        s = [], u.forEach(a);
      }, p = function() {
        return Promise.resolve().then(f);
      };
      p(), n = {
        push: function(u) {
          s.push(u), p();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function $u(e) {
  e === void 0 && (e = {});
  var t = Lu(null);
  return t.options = Ae({ async: !0, ssr: !1 }, e), t;
}
var Va = function(e) {
  var t = e.sideCar, n = Ua(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return c.createElement(r, Ae({}, n));
};
Va.isSideCarExport = !0;
function Fu(e, t) {
  return e.useMedium(t), Va;
}
var Ya = $u(), Wn = function() {
}, vn = c.forwardRef(function(e, t) {
  var n = c.useRef(null), r = c.useState({
    onScrollCapture: Wn,
    onWheelCapture: Wn,
    onTouchMoveCapture: Wn
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, f = e.className, p = e.removeScrollBar, u = e.enabled, d = e.shards, h = e.sideCar, v = e.noRelative, b = e.noIsolation, m = e.inert, w = e.allowPinchZoom, g = e.as, x = g === void 0 ? "div" : g, S = e.gapMode, y = Ua(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = h, _ = ju([n, t]), C = Ae(Ae({}, y), o);
  return c.createElement(
    c.Fragment,
    null,
    u && c.createElement(E, { sideCar: Ya, removeScrollBar: p, shards: d, noRelative: v, noIsolation: b, inert: m, setCallbacks: a, allowPinchZoom: !!w, lockRef: n, gapMode: S }),
    s ? c.cloneElement(c.Children.only(i), Ae(Ae({}, C), { ref: _ })) : c.createElement(x, Ae({}, C, { className: f, ref: _ }), i)
  );
});
vn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
vn.classNames = {
  fullWidth: Gt,
  zeroRight: Yt
};
var zu = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Wu() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = zu();
  return t && e.setAttribute("nonce", t), e;
}
function Bu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Hu(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Uu = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Wu()) && (Bu(t, n), Hu(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Vu = function() {
  var e = Uu();
  return function(t, n) {
    c.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ga = function() {
  var e = Vu(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Yu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Bn = function(e) {
  return parseInt(e || "", 10) || 0;
}, Gu = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Bn(n), Bn(r), Bn(o)];
}, Ku = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Yu;
  var t = Gu(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Xu = Ga(), nt = "data-scroll-locked", qu = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Du, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(nt, `] {
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
  
  .`).concat(Yt, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Gt, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(Yt, " .").concat(Yt, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Gt, " .").concat(Gt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(nt, `] {
    `).concat(Nu, ": ").concat(i, `px;
  }
`);
}, _o = function() {
  var e = parseInt(document.body.getAttribute(nt) || "0", 10);
  return isFinite(e) ? e : 0;
}, Zu = function() {
  c.useEffect(function() {
    return document.body.setAttribute(nt, (_o() + 1).toString()), function() {
      var e = _o() - 1;
      e <= 0 ? document.body.removeAttribute(nt) : document.body.setAttribute(nt, e.toString());
    };
  }, []);
}, Ju = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Zu();
  var a = c.useMemo(function() {
    return Ku(o);
  }, [o]);
  return c.createElement(Xu, { styles: qu(a, !t, o, n ? "" : "!important") });
}, nr = !1;
if (typeof window < "u")
  try {
    var kt = Object.defineProperty({}, "passive", {
      get: function() {
        return nr = !0, !0;
      }
    });
    window.addEventListener("test", kt, kt), window.removeEventListener("test", kt, kt);
  } catch {
    nr = !1;
  }
var Qe = nr ? { passive: !1 } : !1, Qu = function(e) {
  return e.tagName === "TEXTAREA";
}, Ka = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Qu(e) && n[t] === "visible")
  );
}, ed = function(e) {
  return Ka(e, "overflowY");
}, td = function(e) {
  return Ka(e, "overflowX");
}, To = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = Xa(e, r);
    if (o) {
      var a = qa(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, nd = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, rd = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Xa = function(e, t) {
  return e === "v" ? ed(t) : td(t);
}, qa = function(e, t) {
  return e === "v" ? nd(t) : rd(t);
}, od = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, ad = function(e, t, n, r, o) {
  var a = od(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, f = t.contains(i), p = !1, u = s > 0, d = 0, h = 0;
  do {
    if (!i)
      break;
    var v = qa(e, i), b = v[0], m = v[1], w = v[2], g = m - w - a * b;
    (b || g) && Xa(e, i) && (d += g, h += b);
    var x = i.parentNode;
    i = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !f && i !== document.body || // self content
    f && (t.contains(i) || t === i)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(h) < 1) && (p = !0), p;
}, Lt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Oo = function(e) {
  return [e.deltaX, e.deltaY];
}, Do = function(e) {
  return e && "current" in e ? e.current : e;
}, id = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, sd = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, cd = 0, et = [];
function ld(e) {
  var t = c.useRef([]), n = c.useRef([0, 0]), r = c.useRef(), o = c.useState(cd++)[0], a = c.useState(Ga)[0], s = c.useRef(e);
  c.useEffect(function() {
    s.current = e;
  }, [e]), c.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Ou([e.lockRef.current], (e.shards || []).map(Do), !0).filter(Boolean);
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
    var g = Lt(m), x = n.current, S = "deltaX" in m ? m.deltaX : x[0] - g[0], y = "deltaY" in m ? m.deltaY : x[1] - g[1], E, _ = m.target, C = Math.abs(S) > Math.abs(y) ? "h" : "v";
    if ("touches" in m && C === "h" && _.type === "range")
      return !1;
    var P = To(C, _);
    if (!P)
      return !0;
    if (P ? E = C : (E = C === "v" ? "h" : "v", P = To(C, _)), !P)
      return !1;
    if (!r.current && "changedTouches" in m && (S || y) && (r.current = E), !E)
      return !0;
    var A = r.current || E;
    return ad(A, w, m, A === "h" ? S : y);
  }, []), f = c.useCallback(function(m) {
    var w = m;
    if (!(!et.length || et[et.length - 1] !== a)) {
      var g = "deltaY" in w ? Oo(w) : Lt(w), x = t.current.filter(function(E) {
        return E.name === w.type && (E.target === w.target || w.target === E.shadowParent) && id(E.delta, g);
      })[0];
      if (x && x.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!x) {
        var S = (s.current.shards || []).map(Do).filter(Boolean).filter(function(E) {
          return E.contains(w.target);
        }), y = S.length > 0 ? i(w, S[0]) : !s.current.noIsolation;
        y && w.cancelable && w.preventDefault();
      }
    }
  }, []), p = c.useCallback(function(m, w, g, x) {
    var S = { name: m, delta: w, target: g, should: x, shadowParent: ud(g) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(y) {
        return y !== S;
      });
    }, 1);
  }, []), u = c.useCallback(function(m) {
    n.current = Lt(m), r.current = void 0;
  }, []), d = c.useCallback(function(m) {
    p(m.type, Oo(m), m.target, i(m, e.lockRef.current));
  }, []), h = c.useCallback(function(m) {
    p(m.type, Lt(m), m.target, i(m, e.lockRef.current));
  }, []);
  c.useEffect(function() {
    return et.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", f, Qe), document.addEventListener("touchmove", f, Qe), document.addEventListener("touchstart", u, Qe), function() {
      et = et.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", f, Qe), document.removeEventListener("touchmove", f, Qe), document.removeEventListener("touchstart", u, Qe);
    };
  }, []);
  var v = e.removeScrollBar, b = e.inert;
  return c.createElement(
    c.Fragment,
    null,
    b ? c.createElement(a, { styles: sd(o) }) : null,
    v ? c.createElement(Ju, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function ud(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const dd = Fu(Ya, ld);
var gn = c.forwardRef(function(e, t) {
  return c.createElement(vn, Ae({}, e, { ref: t, sideCar: dd }));
});
gn.classNames = vn.classNames;
var fd = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, tt = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Ft = {}, Hn = 0, Za = function(e) {
  return e && (e.host || Za(e.parentNode));
}, pd = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Za(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, md = function(e, t, n, r) {
  var o = pd(t, Array.isArray(e) ? e : [e]);
  Ft[n] || (Ft[n] = /* @__PURE__ */ new WeakMap());
  var a = Ft[n], s = [], i = /* @__PURE__ */ new Set(), f = new Set(o), p = function(d) {
    !d || i.has(d) || (i.add(d), p(d.parentNode));
  };
  o.forEach(p);
  var u = function(d) {
    !d || f.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (i.has(h))
        u(h);
      else
        try {
          var v = h.getAttribute(r), b = v !== null && v !== "false", m = (tt.get(h) || 0) + 1, w = (a.get(h) || 0) + 1;
          tt.set(h, m), a.set(h, w), s.push(h), m === 1 && b && $t.set(h, !0), w === 1 && h.setAttribute(n, "true"), b || h.setAttribute(r, "true");
        } catch (g) {
          console.error("aria-hidden: cannot operate on ", h, g);
        }
    });
  };
  return u(t), i.clear(), Hn++, function() {
    s.forEach(function(d) {
      var h = tt.get(d) - 1, v = a.get(d) - 1;
      tt.set(d, h), a.set(d, v), h || ($t.has(d) || d.removeAttribute(r), $t.delete(d)), v || d.removeAttribute(n);
    }), Hn--, Hn || (tt = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), $t = /* @__PURE__ */ new WeakMap(), Ft = {});
  };
}, Cr = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = fd(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), md(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, wn = "Dialog", [Ja, Zh] = Se(wn), [hd, Ee] = Ja(wn), Qa = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, i = c.useRef(null), f = c.useRef(null), [p, u] = We({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: wn
  });
  return /* @__PURE__ */ l.jsx(
    hd,
    {
      scope: t,
      triggerRef: i,
      contentRef: f,
      contentId: be(),
      titleId: be(),
      descriptionId: be(),
      open: p,
      onOpenChange: u,
      onOpenToggle: c.useCallback(() => u((d) => !d), [u]),
      modal: s,
      children: n
    }
  );
};
Qa.displayName = wn;
var ei = "DialogTrigger", ti = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ee(ei, n), a = J(t, o.triggerRef);
    return /* @__PURE__ */ l.jsx(
      V.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Pr(o.open),
        ...r,
        ref: a,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
  }
);
ti.displayName = ei;
var Er = "DialogPortal", [vd, ni] = Ja(Er, {
  forceMount: void 0
}), ri = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, a = Ee(Er, t);
  return /* @__PURE__ */ l.jsx(vd, { scope: t, forceMount: n, children: c.Children.map(r, (s) => /* @__PURE__ */ l.jsx(ue, { present: n || a.open, children: /* @__PURE__ */ l.jsx(hn, { asChild: !0, container: o, children: s }) })) });
};
ri.displayName = Er;
var Qt = "DialogOverlay", oi = c.forwardRef(
  (e, t) => {
    const n = ni(Qt, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Ee(Qt, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ l.jsx(ue, { present: r || a.open, children: /* @__PURE__ */ l.jsx(wd, { ...o, ref: t }) }) : null;
  }
);
oi.displayName = Qt;
var gd = ot("DialogOverlay.RemoveScroll"), wd = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ee(Qt, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l.jsx(gn, { as: gd, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ l.jsx(
        V.div,
        {
          "data-state": Pr(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Ke = "DialogContent", ai = c.forwardRef(
  (e, t) => {
    const n = ni(Ke, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, a = Ee(Ke, e.__scopeDialog);
    return /* @__PURE__ */ l.jsx(ue, { present: r || a.open, children: a.modal ? /* @__PURE__ */ l.jsx(bd, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(xd, { ...o, ref: t }) });
  }
);
ai.displayName = Ke;
var bd = c.forwardRef(
  (e, t) => {
    const n = Ee(Ke, e.__scopeDialog), r = c.useRef(null), o = J(t, n.contentRef, r);
    return c.useEffect(() => {
      const a = r.current;
      if (a) return Cr(a);
    }, []), /* @__PURE__ */ l.jsx(
      ii,
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
), xd = c.forwardRef(
  (e, t) => {
    const n = Ee(Ke, e.__scopeDialog), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      ii,
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
), ii = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: a, ...s } = e, i = Ee(Ke, n), f = c.useRef(null), p = J(t, f);
    return Sr(), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        mn,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ l.jsx(
            pn,
            {
              role: "dialog",
              id: i.contentId,
              "aria-describedby": i.descriptionId,
              "aria-labelledby": i.titleId,
              "data-state": Pr(i.open),
              ...s,
              ref: p,
              onDismiss: () => i.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(yd, { titleId: i.titleId }),
        /* @__PURE__ */ l.jsx(Cd, { contentRef: f, descriptionId: i.descriptionId })
      ] })
    ] });
  }
), Rr = "DialogTitle", si = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ee(Rr, n);
    return /* @__PURE__ */ l.jsx(V.h2, { id: o.titleId, ...r, ref: t });
  }
);
si.displayName = Rr;
var ci = "DialogDescription", li = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ee(ci, n);
    return /* @__PURE__ */ l.jsx(V.p, { id: o.descriptionId, ...r, ref: t });
  }
);
li.displayName = ci;
var ui = "DialogClose", di = c.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = Ee(ui, n);
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
di.displayName = ui;
function Pr(e) {
  return e ? "open" : "closed";
}
var fi = "DialogTitleWarning", [Jh, pi] = Mc(fi, {
  contentName: Ke,
  titleName: Rr,
  docsSlug: "dialog"
}), yd = ({ titleId: e }) => {
  const t = pi(fi), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return c.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Sd = "DialogDescriptionWarning", Cd = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${pi(Sd).contentName}}.`;
  return c.useEffect(() => {
    const o = e.current?.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Ar = Qa, _r = ti, mi = ri, Tr = oi, bn = ai, xn = si, yn = li, Or = di;
const Sn = c.createContext(
  void 0
);
function Qh({ children: e, open: t, defaultOpen: n, onOpenChange: r }) {
  const o = t !== void 0, [a, s] = c.useState(n ?? !1), i = o ? t : a, f = (d) => {
    o || s(d), r?.(d);
  }, [p, u] = c.useState(!1);
  return /* @__PURE__ */ l.jsx(Sn.Provider, { value: { innerOpen: p, setInnerOpen: u }, children: /* @__PURE__ */ l.jsx(
    Ar,
    {
      open: i,
      defaultOpen: n,
      onOpenChange: f,
      children: e
    }
  ) });
}
const ev = _r, hi = mi, Ed = Or, vi = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  Tr,
  {
    ref: n,
    className: M(
      "fixed inset-0 z-50 bg-background/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
vi.displayName = Tr.displayName;
const Rd = c.forwardRef(({ className: e, children: t, ...n }, r) => {
  const o = c.useContext(Sn);
  if (!o) throw new Error("DialogContent must be used within a Dialog");
  return /* @__PURE__ */ l.jsxs(hi, { children: [
    /* @__PURE__ */ l.jsx(vi, {}),
    /* @__PURE__ */ l.jsxs(
      bn,
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
          /* @__PURE__ */ l.jsxs(Ed, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ l.jsx(ea, { className: "h-4 w-4" }),
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
});
Rd.displayName = bn.displayName;
function tv({ children: e }) {
  const t = c.useContext(Sn);
  if (!t) throw new Error("InnerDialog must be used within a Dialog");
  return c.useEffect(() => {
    const n = (r) => {
      r.key === "Escape" && t.innerOpen && (t.setInnerOpen(!1), r.stopPropagation());
    };
    return document.addEventListener("keydown", n), () => {
      document.removeEventListener("keydown", n);
    };
  }, [t.innerOpen, t.setInnerOpen]), /* @__PURE__ */ l.jsx(
    Ar,
    {
      open: t.innerOpen,
      onOpenChange: t.setInnerOpen,
      children: e
    }
  );
}
const nv = _r, Pd = Or, Ad = c.forwardRef(
  ({ className: e, children: t, position: n = "default", draggable: r = !1, ...o }, a) => {
    const s = c.useContext(Sn);
    if (!s)
      throw new Error("InnerDialogContent must be used within a Dialog");
    const [i, f] = c.useState(!1), [p, u] = c.useState(0), [d, h] = c.useState(0), [v, b] = c.useState(!1), m = c.useRef(null);
    c.useEffect(() => {
      s.innerOpen && (h(0), b(!1));
    }, [s.innerOpen]);
    const w = (S) => {
      r && (f(!0), u(S.clientY - d), S.currentTarget.setPointerCapture(S.pointerId));
    }, g = (S) => {
      if (!i || !r) return;
      const y = S.clientY - p;
      h(y > 0 ? y : 0);
    }, x = () => {
      r && (f(!1), d > (m.current?.offsetHeight || 0) / 2 ? (b(!0), s.setInnerOpen(!1)) : h(0));
    };
    return /* @__PURE__ */ l.jsx(hi, { children: /* @__PURE__ */ l.jsxs(
      bn,
      {
        ref: a,
        onPointerDown: w,
        onPointerMove: g,
        onPointerUp: x,
        style: {
          transform: `translate(-50%, calc(-50% + ${d}px))`,
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
          /* @__PURE__ */ l.jsxs(Pd, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ l.jsx(ea, { className: "h-4 w-4" }),
            /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    ) });
  }
);
Ad.displayName = "InnerDialogContent";
const _d = ({
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
_d.displayName = "InnerDialogHeader";
const Td = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M("flex flex-col-reverse sm:flex-row sm:space-x-2", e),
    ...t
  }
);
Td.displayName = "InnerDialogFooter";
const Od = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xn,
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Od.displayName = "InnerDialogTitle";
const Dd = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  yn,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
Dd.displayName = "InnerDialogDescription";
const Nd = ({
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
Nd.displayName = "DialogHeader";
const Id = ({
  className: e,
  ...t
}) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: M("flex flex-col-reverse sm:flex-row sm:space-x-2", e),
    ...t
  }
);
Id.displayName = "DialogFooter";
const Md = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  xn,
  {
    ref: n,
    className: M(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Md.displayName = xn.displayName;
const jd = c.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ l.jsx(
  yn,
  {
    ref: n,
    className: M("text-sm text-muted-foreground", e),
    ...t
  }
));
jd.displayName = yn.displayName;
function kd(e) {
  if (typeof document > "u") return;
  let t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
  n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
}
const gi = T.createContext({
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
}), Ct = () => {
  const e = T.useContext(gi);
  if (!e)
    throw new Error("useDrawerContext must be used within a Drawer.Root");
  return e;
};
kd(`[data-vaul-drawer]{touch-action:none;will-change:transform;transition:transform .5s cubic-bezier(.32, .72, 0, 1);animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=open]{animation-name:slideFromBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=bottom][data-state=closed]{animation-name:slideToBottom}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=open]{animation-name:slideFromTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=top][data-state=closed]{animation-name:slideToTop}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=open]{animation-name:slideFromLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=left][data-state=closed]{animation-name:slideToLeft}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=open]{animation-name:slideFromRight}[data-vaul-drawer][data-vaul-snap-points=false][data-vaul-drawer-direction=right][data-state=closed]{animation-name:slideToRight}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--initial-transform,100%),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}[data-vaul-drawer][data-vaul-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--initial-transform,100%),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=top]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=bottom]{transform:translate3d(0,var(--snap-point-height,0),0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=left]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-drawer][data-vaul-delayed-snap-points=true][data-vaul-drawer-direction=right]{transform:translate3d(var(--snap-point-height,0),0,0)}[data-vaul-overlay][data-vaul-snap-points=false]{animation-duration:.5s;animation-timing-function:cubic-bezier(0.32,0.72,0,1)}[data-vaul-overlay][data-vaul-snap-points=false][data-state=open]{animation-name:fadeIn}[data-vaul-overlay][data-state=closed]{animation-name:fadeOut}[data-vaul-animate=false]{animation:none!important}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:0;transition:opacity .5s cubic-bezier(.32, .72, 0, 1)}[data-vaul-overlay][data-vaul-snap-points=true]{opacity:1}[data-vaul-drawer]:not([data-vaul-custom-container=true])::after{content:'';position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction=top]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=bottom]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction=left]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction=right]::after{left:100%;right:initial;top:0;bottom:0;width:200%}[data-vaul-overlay][data-vaul-snap-points=true]:not([data-vaul-snap-points-overlay=true]):not(
[data-state=closed]
){opacity:0}[data-vaul-overlay][data-vaul-snap-points-overlay=true]{opacity:1}[data-vaul-handle]{display:block;position:relative;opacity:.7;background:#e2e2e4;margin-left:auto;margin-right:auto;height:5px;width:32px;border-radius:1rem;touch-action:pan-y}[data-vaul-handle]:active,[data-vaul-handle]:hover{opacity:1}[data-vaul-handle-hitarea]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:max(100%,2.75rem);height:max(100%,2.75rem);touch-action:inherit}@media (hover:hover) and (pointer:fine){[data-vaul-drawer]{user-select:none}}@media (pointer:fine){[data-vaul-handle-hitarea]:{width:100%;height:100%}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{to{opacity:0}}@keyframes slideFromBottom{from{transform:translate3d(0,var(--initial-transform,100%),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToBottom{to{transform:translate3d(0,var(--initial-transform,100%),0)}}@keyframes slideFromTop{from{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}to{transform:translate3d(0,0,0)}}@keyframes slideToTop{to{transform:translate3d(0,calc(var(--initial-transform,100%) * -1),0)}}@keyframes slideFromLeft{from{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToLeft{to{transform:translate3d(calc(var(--initial-transform,100%) * -1),0,0)}}@keyframes slideFromRight{from{transform:translate3d(var(--initial-transform,100%),0,0)}to{transform:translate3d(0,0,0)}}@keyframes slideToRight{to{transform:translate3d(var(--initial-transform,100%),0,0)}}`);
function Ld() {
  const e = navigator.userAgent;
  return typeof window < "u" && (/Firefox/.test(e) && /Mobile/.test(e) || // Android Firefox
  /FxiOS/.test(e));
}
function $d() {
  return Dr(/^Mac/);
}
function Fd() {
  return Dr(/^iPhone/);
}
function No() {
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}
function zd() {
  return Dr(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $d() && navigator.maxTouchPoints > 1;
}
function wi() {
  return Fd() || zd();
}
function Dr(e) {
  return typeof window < "u" && window.navigator != null ? e.test(window.navigator.platform) : void 0;
}
const Wd = 24, Bd = typeof window < "u" ? qo : yt;
function Io(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
const Un = typeof document < "u" && window.visualViewport;
function Mo(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function bi(e) {
  for (Mo(e) && (e = e.parentElement); e && !Mo(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
const Hd = /* @__PURE__ */ new Set([
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
let zt = 0, Vn;
function Ud(e = {}) {
  let { isDisabled: t } = e;
  Bd(() => {
    if (!t)
      return zt++, zt === 1 && wi() && (Vn = Vd()), () => {
        zt--, zt === 0 && Vn?.();
      };
  }, [
    t
  ]);
}
function Vd() {
  let e, t = 0, n = (d) => {
    e = bi(d.target), !(e === document.documentElement && e === document.body) && (t = d.changedTouches[0].pageY);
  }, r = (d) => {
    if (!e || e === document.documentElement || e === document.body) {
      d.preventDefault();
      return;
    }
    let h = d.changedTouches[0].pageY, v = e.scrollTop, b = e.scrollHeight - e.clientHeight;
    b !== 0 && ((v <= 0 && h > t || v >= b && h < t) && d.preventDefault(), t = h);
  }, o = (d) => {
    let h = d.target;
    rr(h) && h !== document.activeElement && (d.preventDefault(), h.style.transform = "translateY(-2000px)", h.focus(), requestAnimationFrame(() => {
      h.style.transform = "";
    }));
  }, a = (d) => {
    let h = d.target;
    rr(h) && (h.style.transform = "translateY(-2000px)", requestAnimationFrame(() => {
      h.style.transform = "", Un && (Un.height < window.innerHeight ? requestAnimationFrame(() => {
        jo(h);
      }) : Un.addEventListener("resize", () => jo(h), {
        once: !0
      }));
    }));
  }, s = () => {
    window.scrollTo(0, 0);
  }, i = window.pageXOffset, f = window.pageYOffset, p = Io(Yd(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`));
  window.scrollTo(0, 0);
  let u = Io(mt(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), mt(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), mt(document, "touchend", o, {
    passive: !1,
    capture: !0
  }), mt(document, "focus", a, !0), mt(window, "scroll", s));
  return () => {
    p(), u(), window.scrollTo(i, f);
  };
}
function Yd(e, t, n) {
  let r = e.style[t];
  return e.style[t] = n, () => {
    e.style[t] = r;
  };
}
function mt(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function jo(e) {
  let t = document.scrollingElement || document.documentElement;
  for (; e && e !== t; ) {
    let n = bi(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      let r = n.getBoundingClientRect().top, o = e.getBoundingClientRect().top, a = e.getBoundingClientRect().bottom;
      const s = n.getBoundingClientRect().bottom + Wd;
      a > s && (n.scrollTop += o - r);
    }
    e = n.parentElement;
  }
}
function rr(e) {
  return e instanceof HTMLInputElement && !Hd.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
function Gd(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Kd(...e) {
  return (t) => e.forEach((n) => Gd(n, t));
}
function xi(...e) {
  return c.useCallback(Kd(...e), e);
}
const yi = /* @__PURE__ */ new WeakMap();
function ae(e, t, n = !1) {
  if (!e || !(e instanceof HTMLElement)) return;
  let r = {};
  Object.entries(t).forEach(([o, a]) => {
    if (o.startsWith("--")) {
      e.style.setProperty(o, a);
      return;
    }
    r[o] = e.style[o], e.style[o] = a;
  }), !n && yi.set(e, r);
}
function Xd(e, t) {
  if (!e || !(e instanceof HTMLElement)) return;
  let n = yi.get(e);
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
function Wt(e, t) {
  if (!e)
    return null;
  const n = window.getComputedStyle(e), r = (
    // @ts-ignore
    n.transform || n.webkitTransform || n.mozTransform
  );
  let o = r.match(/^matrix3d\((.+)\)$/);
  return o ? parseFloat(o[1].split(", ")[oe(t) ? 13 : 12]) : (o = r.match(/^matrix\((.+)\)$/), o ? parseFloat(o[1].split(", ")[oe(t) ? 5 : 4]) : null);
}
function qd(e) {
  return 8 * (Math.log(e + 1) - 2);
}
function Yn(e, t) {
  if (!e) return () => {
  };
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function Zd(...e) {
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
}, Si = 0.4, Jd = 0.25, Qd = 100, Ci = 8, Ge = 16, or = 26, Gn = "vaul-dragging";
function Ei(e) {
  const t = T.useRef(e);
  return T.useEffect(() => {
    t.current = e;
  }), T.useMemo(() => (...n) => t.current == null ? void 0 : t.current.call(t, ...n), []);
}
function ef({ defaultProp: e, onChange: t }) {
  const n = T.useState(e), [r] = n, o = T.useRef(r), a = Ei(t);
  return T.useEffect(() => {
    o.current !== r && (a(r), o.current = r);
  }, [
    r,
    o,
    a
  ]), n;
}
function Ri({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, o] = ef({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, s = a ? e : r, i = Ei(n), f = T.useCallback((p) => {
    if (a) {
      const d = typeof p == "function" ? p(e) : p;
      d !== e && i(d);
    } else
      o(p);
  }, [
    a,
    e,
    o,
    i
  ]);
  return [
    s,
    f
  ];
}
function tf({ activeSnapPointProp: e, setActiveSnapPointProp: t, snapPoints: n, drawerRef: r, overlayRef: o, fadeFromIndex: a, onSnapPointChange: s, direction: i = "bottom", container: f, snapToSequentialPoint: p }) {
  const [u, d] = Ri({
    prop: e,
    defaultProp: n?.[0],
    onChange: t
  }), [h, v] = T.useState(typeof window < "u" ? {
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  } : void 0);
  T.useEffect(() => {
    function C() {
      v({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight
      });
    }
    return window.addEventListener("resize", C), () => window.removeEventListener("resize", C);
  }, []);
  const b = T.useMemo(() => u === n?.[n.length - 1] || null, [
    n,
    u
  ]), m = T.useMemo(() => {
    var C;
    return (C = n?.findIndex((P) => P === u)) != null ? C : null;
  }, [
    n,
    u
  ]), w = n && n.length > 0 && (a || a === 0) && !Number.isNaN(a) && n[a] === u || !n, g = T.useMemo(() => {
    const C = f ? {
      width: f.getBoundingClientRect().width,
      height: f.getBoundingClientRect().height
    } : typeof window < "u" ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
    var P;
    return (P = n?.map((A) => {
      const N = typeof A == "string";
      let j = 0;
      if (N && (j = parseInt(A, 10)), oe(i)) {
        const O = N ? j : h ? A * C.height : 0;
        return h ? i === "bottom" ? C.height - O : -C.height + O : O;
      }
      const I = N ? j : h ? A * C.width : 0;
      return h ? i === "right" ? C.width - I : -C.width + I : I;
    })) != null ? P : [];
  }, [
    n,
    h,
    f
  ]), x = T.useMemo(() => m !== null ? g?.[m] : null, [
    g,
    m
  ]), S = T.useCallback((C) => {
    var P;
    const A = (P = g?.findIndex((N) => N === C)) != null ? P : null;
    s(A), ae(r.current, {
      transition: `transform ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      transform: oe(i) ? `translate3d(0, ${C}px, 0)` : `translate3d(${C}px, 0, 0)`
    }), g && A !== g.length - 1 && a !== void 0 && A !== a && A < a ? ae(o.current, {
      transition: `opacity ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      opacity: "0"
    }) : ae(o.current, {
      transition: `opacity ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      opacity: "1"
    }), d(n?.[Math.max(A, 0)]);
  }, [
    r.current,
    n,
    g,
    a,
    o,
    d
  ]);
  T.useEffect(() => {
    if (u || e) {
      var C;
      const P = (C = n?.findIndex((A) => A === e || A === u)) != null ? C : -1;
      g && P !== -1 && typeof g[P] == "number" && S(g[P]);
    }
  }, [
    u,
    e,
    n,
    g,
    S
  ]);
  function y({ draggedDistance: C, closeDrawer: P, velocity: A, dismissible: N }) {
    if (a === void 0) return;
    const j = i === "bottom" || i === "right" ? (x ?? 0) - C : (x ?? 0) + C, I = m === a - 1, O = m === 0, L = C > 0;
    if (I && ae(o.current, {
      transition: `opacity ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`
    }), !p && A > 2 && !L) {
      N ? P() : S(g[0]);
      return;
    }
    if (!p && A > 2 && L && g && n) {
      S(g[n.length - 1]);
      return;
    }
    const H = g?.reduce((B, k) => typeof B != "number" || typeof k != "number" ? B : Math.abs(k - j) < Math.abs(B - j) ? k : B), z = oe(i) ? window.innerHeight : window.innerWidth;
    if (A > Si && Math.abs(C) < z * 0.4) {
      const B = L ? 1 : -1;
      if (B > 0 && b && n) {
        S(g[n.length - 1]);
        return;
      }
      if (O && B < 0 && N && P(), m === null) return;
      S(g[m + B]);
      return;
    }
    S(H);
  }
  function E({ draggedDistance: C }) {
    if (x === null) return;
    const P = i === "bottom" || i === "right" ? x - C : x + C;
    (i === "bottom" || i === "right") && P < g[g.length - 1] || (i === "top" || i === "left") && P > g[g.length - 1] || ae(r.current, {
      transform: oe(i) ? `translate3d(0, ${P}px, 0)` : `translate3d(${P}px, 0, 0)`
    });
  }
  function _(C, P) {
    if (!n || typeof m != "number" || !g || a === void 0) return null;
    const A = m === a - 1;
    if (m >= a && P)
      return 0;
    if (A && !P) return 1;
    if (!w && !A) return null;
    const j = A ? m + 1 : m - 1, I = A ? g[j] - g[j - 1] : g[j + 1] - g[j], O = C / Math.abs(I);
    return A ? 1 - O : O;
  }
  return {
    isLastSnapPoint: b,
    activeSnapPoint: u,
    shouldFade: w,
    getPercentageDragged: _,
    setActiveSnapPoint: d,
    activeSnapPointIndex: m,
    onRelease: y,
    onDrag: E,
    snapPointsOffset: g
  };
}
const nf = () => () => {
};
function rf() {
  const { direction: e, isOpen: t, shouldScaleBackground: n, setBackgroundColorOnScale: r, noBodyStyles: o } = Ct(), a = T.useRef(null), s = Xo(() => document.body.style.backgroundColor, []);
  function i() {
    return (window.innerWidth - or) / window.innerWidth;
  }
  T.useEffect(() => {
    if (t && n) {
      a.current && clearTimeout(a.current);
      const f = document.querySelector("[data-vaul-drawer-wrapper]") || document.querySelector("[vaul-drawer-wrapper]");
      if (!f) return;
      Zd(r && !o ? Yn(document.body, {
        background: "black"
      }) : nf, Yn(f, {
        transformOrigin: oe(e) ? "top" : "left",
        transitionProperty: "transform, border-radius",
        transitionDuration: `${te.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${te.EASE.join(",")})`
      }));
      const p = Yn(f, {
        borderRadius: `${Ci}px`,
        overflow: "hidden",
        ...oe(e) ? {
          transform: `scale(${i()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`
        } : {
          transform: `scale(${i()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`
        }
      });
      return () => {
        p(), a.current = window.setTimeout(() => {
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
let ht = null;
function of({ isOpen: e, modal: t, nested: n, hasBeenOpened: r, preventScrollRestoration: o, noBodyStyles: a }) {
  const [s, i] = T.useState(() => typeof window < "u" ? window.location.href : ""), f = T.useRef(0), p = T.useCallback(() => {
    if (No() && ht === null && e && !a) {
      ht = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left,
        height: document.body.style.height,
        right: "unset"
      };
      const { scrollX: d, innerHeight: h } = window;
      document.body.style.setProperty("position", "fixed", "important"), Object.assign(document.body.style, {
        top: `${-f.current}px`,
        left: `${-d}px`,
        right: "0px",
        height: "auto"
      }), window.setTimeout(() => window.requestAnimationFrame(() => {
        const v = h - window.innerHeight;
        v && f.current >= h && (document.body.style.top = `${-(f.current + v)}px`);
      }), 300);
    }
  }, [
    e
  ]), u = T.useCallback(() => {
    if (No() && ht !== null && !a) {
      const d = -parseInt(document.body.style.top, 10), h = -parseInt(document.body.style.left, 10);
      Object.assign(document.body.style, ht), window.requestAnimationFrame(() => {
        if (o && s !== window.location.href) {
          i(window.location.href);
          return;
        }
        window.scrollTo(h, d);
      }), ht = null;
    }
  }, [
    s
  ]);
  return T.useEffect(() => {
    function d() {
      f.current = window.scrollY;
    }
    return d(), window.addEventListener("scroll", d), () => {
      window.removeEventListener("scroll", d);
    };
  }, []), T.useEffect(() => {
    if (t)
      return () => {
        typeof document > "u" || document.querySelector("[data-vaul-drawer]") || u();
      };
  }, [
    t,
    u
  ]), T.useEffect(() => {
    n || !r || (e ? (!window.matchMedia("(display-mode: standalone)").matches && p(), t || window.setTimeout(() => {
      u();
    }, 500)) : u());
  }, [
    e,
    r,
    s,
    t,
    n,
    p,
    u
  ]), {
    restorePositionSetting: u
  };
}
function af({ open: e, onOpenChange: t, children: n, onDrag: r, onRelease: o, snapPoints: a, shouldScaleBackground: s = !1, setBackgroundColorOnScale: i = !0, closeThreshold: f = Jd, scrollLockTimeout: p = Qd, dismissible: u = !0, handleOnly: d = !1, fadeFromIndex: h = a && a.length - 1, activeSnapPoint: v, setActiveSnapPoint: b, fixed: m, modal: w = !0, onClose: g, nested: x, noBodyStyles: S = !1, direction: y = "bottom", defaultOpen: E = !1, disablePreventScroll: _ = !0, snapToSequentialPoint: C = !1, preventScrollRestoration: P = !1, repositionInputs: A = !0, onAnimationEnd: N, container: j, autoFocus: I = !1 }) {
  var O, L;
  const [H = !1, z] = Ri({
    defaultProp: E,
    prop: e,
    onChange: (W) => {
      t?.(W), !W && !x && uc(), setTimeout(() => {
        N?.(W);
      }, te.DURATION * 1e3), W && !w && typeof window < "u" && window.requestAnimationFrame(() => {
        document.body.style.pointerEvents = "auto";
      }), W || (document.body.style.pointerEvents = "auto");
    }
  }), [B, k] = T.useState(!1), [D, R] = T.useState(!1), [$, Y] = T.useState(!1), G = T.useRef(null), ee = T.useRef(null), ne = T.useRef(null), ce = T.useRef(null), X = T.useRef(null), Z = T.useRef(!1), he = T.useRef(null), Ie = T.useRef(0), Re = T.useRef(!1), Ot = T.useRef(!E), Ve = T.useRef(0), U = T.useRef(null), Zr = T.useRef(((O = U.current) == null ? void 0 : O.getBoundingClientRect().height) || 0), Jr = T.useRef(((L = U.current) == null ? void 0 : L.getBoundingClientRect().width) || 0), Dn = T.useRef(0), ac = T.useCallback((W) => {
    a && W === ut.length - 1 && (ee.current = /* @__PURE__ */ new Date());
  }, []), { activeSnapPoint: ic, activeSnapPointIndex: Ze, setActiveSnapPoint: Qr, onRelease: sc, snapPointsOffset: ut, onDrag: cc, shouldFade: eo, getPercentageDragged: lc } = tf({
    snapPoints: a,
    activeSnapPointProp: v,
    setActiveSnapPointProp: b,
    drawerRef: U,
    fadeFromIndex: h,
    overlayRef: G,
    onSnapPointChange: ac,
    direction: y,
    container: j,
    snapToSequentialPoint: C
  });
  Ud({
    isDisabled: !H || D || !w || $ || !B || !A || !_
  });
  const { restorePositionSetting: uc } = of({
    isOpen: H,
    modal: w,
    nested: x ?? !1,
    hasBeenOpened: B,
    preventScrollRestoration: P,
    noBodyStyles: S
  });
  function Dt() {
    return (window.innerWidth - or) / window.innerWidth;
  }
  function dc(W) {
    var q, Q;
    !u && !a || U.current && !U.current.contains(W.target) || (Zr.current = ((q = U.current) == null ? void 0 : q.getBoundingClientRect().height) || 0, Jr.current = ((Q = U.current) == null ? void 0 : Q.getBoundingClientRect().width) || 0, R(!0), ne.current = /* @__PURE__ */ new Date(), wi() && window.addEventListener("touchend", () => Z.current = !1, {
      once: !0
    }), W.target.setPointerCapture(W.pointerId), Ie.current = oe(y) ? W.pageY : W.pageX);
  }
  function to(W, q) {
    var Q;
    let K = W;
    const re = (Q = window.getSelection()) == null ? void 0 : Q.toString(), de = U.current ? Wt(U.current, y) : null, le = /* @__PURE__ */ new Date();
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
    if (X.current && le.getTime() - X.current.getTime() < p && de === 0 || q)
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
  function fc(W) {
    if (U.current && D) {
      const q = y === "bottom" || y === "right" ? 1 : -1, Q = (Ie.current - (oe(y) ? W.pageY : W.pageX)) * q, K = Q > 0, re = a && !u && !K;
      if (re && Ze === 0) return;
      const de = Math.abs(Q), le = document.querySelector("[data-vaul-drawer-wrapper]"), ke = y === "bottom" || y === "top" ? Zr.current : Jr.current;
      let we = de / ke;
      const Ye = lc(de, K);
      if (Ye !== null && (we = Ye), re && we >= 1 || !Z.current && !to(W.target, K)) return;
      if (U.current.classList.add(Gn), Z.current = !0, ae(U.current, {
        transition: "none"
      }), ae(G.current, {
        transition: "none"
      }), a && cc({
        draggedDistance: Q
      }), K && !a) {
        const Pe = qd(Q), Nt = Math.min(Pe * -1, 0) * q;
        ae(U.current, {
          transform: oe(y) ? `translate3d(0, ${Nt}px, 0)` : `translate3d(${Nt}px, 0, 0)`
        });
        return;
      }
      const Le = 1 - we;
      if ((eo || h && Ze === h - 1) && (r?.(W, we), ae(G.current, {
        opacity: `${Le}`,
        transition: "none"
      }, !0)), le && G.current && s) {
        const Pe = Math.min(Dt() + we * (1 - Dt()), 1), Nt = 8 - we * 8, ro = Math.max(0, 14 - we * 14);
        ae(le, {
          borderRadius: `${Nt}px`,
          transform: oe(y) ? `scale(${Pe}) translate3d(0, ${ro}px, 0)` : `scale(${Pe}) translate3d(${ro}px, 0, 0)`,
          transition: "none"
        }, !0);
      }
      if (!a) {
        const Pe = de * q;
        ae(U.current, {
          transform: oe(y) ? `translate3d(0, ${Pe}px, 0)` : `translate3d(${Pe}px, 0, 0)`
        });
      }
    }
  }
  T.useEffect(() => {
    window.requestAnimationFrame(() => {
      Ot.current = !0;
    });
  }, []), T.useEffect(() => {
    var W;
    function q() {
      if (!U.current || !A) return;
      const Q = document.activeElement;
      if (rr(Q) || Re.current) {
        var K;
        const re = ((K = window.visualViewport) == null ? void 0 : K.height) || 0, de = window.innerHeight;
        let le = de - re;
        const ke = U.current.getBoundingClientRect().height || 0, we = ke > de * 0.8;
        Dn.current || (Dn.current = ke);
        const Ye = U.current.getBoundingClientRect().top;
        if (Math.abs(Ve.current - le) > 60 && (Re.current = !Re.current), a && a.length > 0 && ut && Ze) {
          const Le = ut[Ze] || 0;
          le += Le;
        }
        if (Ve.current = le, ke > re || Re.current) {
          const Le = U.current.getBoundingClientRect().height;
          let Pe = Le;
          Le > re && (Pe = re - (we ? Ye : or)), m ? U.current.style.height = `${Le - Math.max(le, 0)}px` : U.current.style.height = `${Math.max(Pe, re - Ye)}px`;
        } else Ld() || (U.current.style.height = `${Dn.current}px`);
        a && a.length > 0 && !Re.current ? U.current.style.bottom = "0px" : U.current.style.bottom = `${Math.max(le, 0)}px`;
      }
    }
    return (W = window.visualViewport) == null || W.addEventListener("resize", q), () => {
      var Q;
      return (Q = window.visualViewport) == null ? void 0 : Q.removeEventListener("resize", q);
    };
  }, [
    Ze,
    a,
    ut
  ]);
  function dt(W) {
    pc(), g?.(), W || z(!1), setTimeout(() => {
      a && Qr(a[0]);
    }, te.DURATION * 1e3);
  }
  function no() {
    if (!U.current) return;
    const W = document.querySelector("[data-vaul-drawer-wrapper]"), q = Wt(U.current, y);
    ae(U.current, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`
    }), ae(G.current, {
      transition: `opacity ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      opacity: "1"
    }), s && q && q > 0 && H && ae(W, {
      borderRadius: `${Ci}px`,
      overflow: "hidden",
      ...oe(y) ? {
        transform: `scale(${Dt()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
        transformOrigin: "top"
      } : {
        transform: `scale(${Dt()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
        transformOrigin: "left"
      },
      transitionProperty: "transform, border-radius",
      transitionDuration: `${te.DURATION}s`,
      transitionTimingFunction: `cubic-bezier(${te.EASE.join(",")})`
    }, !0);
  }
  function pc() {
    !D || !U.current || (U.current.classList.remove(Gn), Z.current = !1, R(!1), ce.current = /* @__PURE__ */ new Date());
  }
  function mc(W) {
    if (!D || !U.current) return;
    U.current.classList.remove(Gn), Z.current = !1, R(!1), ce.current = /* @__PURE__ */ new Date();
    const q = Wt(U.current, y);
    if (!W || !to(W.target, !1) || !q || Number.isNaN(q) || ne.current === null) return;
    const Q = ce.current.getTime() - ne.current.getTime(), K = Ie.current - (oe(y) ? W.pageY : W.pageX), re = Math.abs(K) / Q;
    if (re > 0.05 && (Y(!0), setTimeout(() => {
      Y(!1);
    }, 200)), a) {
      sc({
        draggedDistance: K * (y === "bottom" || y === "right" ? 1 : -1),
        closeDrawer: dt,
        velocity: re,
        dismissible: u
      }), o?.(W, !0);
      return;
    }
    if (y === "bottom" || y === "right" ? K > 0 : K < 0) {
      no(), o?.(W, !0);
      return;
    }
    if (re > Si) {
      dt(), o?.(W, !1);
      return;
    }
    var de;
    const le = Math.min((de = U.current.getBoundingClientRect().height) != null ? de : 0, window.innerHeight);
    var ke;
    const we = Math.min((ke = U.current.getBoundingClientRect().width) != null ? ke : 0, window.innerWidth), Ye = y === "left" || y === "right";
    if (Math.abs(q) >= (Ye ? we : le) * f) {
      dt(), o?.(W, !1);
      return;
    }
    o?.(W, !0), no();
  }
  T.useEffect(() => (H && (ae(document.documentElement, {
    scrollBehavior: "auto"
  }), ee.current = /* @__PURE__ */ new Date()), () => {
    Xd(document.documentElement, "scrollBehavior");
  }), [
    H
  ]);
  function hc(W) {
    const q = W ? (window.innerWidth - Ge) / window.innerWidth : 1, Q = W ? -Ge : 0;
    he.current && window.clearTimeout(he.current), ae(U.current, {
      transition: `transform ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      transform: oe(y) ? `scale(${q}) translate3d(0, ${Q}px, 0)` : `scale(${q}) translate3d(${Q}px, 0, 0)`
    }), !W && U.current && (he.current = setTimeout(() => {
      const K = Wt(U.current, y);
      ae(U.current, {
        transition: "none",
        transform: oe(y) ? `translate3d(0, ${K}px, 0)` : `translate3d(${K}px, 0, 0)`
      });
    }, 500));
  }
  function vc(W, q) {
    if (q < 0) return;
    const Q = (window.innerWidth - Ge) / window.innerWidth, K = Q + q * (1 - Q), re = -Ge + q * Ge;
    ae(U.current, {
      transform: oe(y) ? `scale(${K}) translate3d(0, ${re}px, 0)` : `scale(${K}) translate3d(${re}px, 0, 0)`,
      transition: "none"
    });
  }
  function gc(W, q) {
    const Q = oe(y) ? window.innerHeight : window.innerWidth, K = q ? (Q - Ge) / Q : 1, re = q ? -Ge : 0;
    q && ae(U.current, {
      transition: `transform ${te.DURATION}s cubic-bezier(${te.EASE.join(",")})`,
      transform: oe(y) ? `scale(${K}) translate3d(0, ${re}px, 0)` : `scale(${K}) translate3d(${re}px, 0, 0)`
    });
  }
  return T.useEffect(() => {
    w || window.requestAnimationFrame(() => {
      document.body.style.pointerEvents = "auto";
    });
  }, [
    w
  ]), /* @__PURE__ */ T.createElement(Ar, {
    defaultOpen: E,
    onOpenChange: (W) => {
      !u && !W || (W ? k(!0) : dt(!0), z(W));
    },
    open: H
  }, /* @__PURE__ */ T.createElement(gi.Provider, {
    value: {
      activeSnapPoint: ic,
      snapPoints: a,
      setActiveSnapPoint: Qr,
      drawerRef: U,
      overlayRef: G,
      onOpenChange: t,
      onPress: dc,
      onRelease: mc,
      onDrag: fc,
      dismissible: u,
      shouldAnimate: Ot,
      handleOnly: d,
      isOpen: H,
      isDragging: D,
      shouldFade: eo,
      closeDrawer: dt,
      onNestedDrag: vc,
      onNestedOpenChange: hc,
      onNestedRelease: gc,
      keyboardIsOpen: Re,
      modal: w,
      snapPointsOffset: ut,
      activeSnapPointIndex: Ze,
      direction: y,
      shouldScaleBackground: s,
      setBackgroundColorOnScale: i,
      noBodyStyles: S,
      container: j,
      autoFocus: I
    }
  }, n));
}
const Pi = /* @__PURE__ */ T.forwardRef(function({ ...e }, t) {
  const { overlayRef: n, snapPoints: r, onRelease: o, shouldFade: a, isOpen: s, modal: i, shouldAnimate: f } = Ct(), p = xi(t, n), u = r && r.length > 0;
  if (!i)
    return null;
  const d = T.useCallback((h) => o(h), [
    o
  ]);
  return /* @__PURE__ */ T.createElement(Tr, {
    onMouseUp: d,
    ref: p,
    "data-vaul-overlay": "",
    "data-vaul-snap-points": s && u ? "true" : "false",
    "data-vaul-snap-points-overlay": s && a ? "true" : "false",
    "data-vaul-animate": f?.current ? "true" : "false",
    ...e
  });
});
Pi.displayName = "Drawer.Overlay";
const Ai = /* @__PURE__ */ T.forwardRef(function({ onPointerDownOutside: e, style: t, onOpenAutoFocus: n, ...r }, o) {
  const { drawerRef: a, onPress: s, onRelease: i, onDrag: f, keyboardIsOpen: p, snapPointsOffset: u, activeSnapPointIndex: d, modal: h, isOpen: v, direction: b, snapPoints: m, container: w, handleOnly: g, shouldAnimate: x, autoFocus: S } = Ct(), [y, E] = T.useState(!1), _ = xi(o, a), C = T.useRef(null), P = T.useRef(null), A = T.useRef(!1), N = m && m.length > 0;
  rf();
  const j = (O, L, H = 0) => {
    if (A.current) return !0;
    const z = Math.abs(O.y), B = Math.abs(O.x), k = B > z, D = [
      "bottom",
      "right"
    ].includes(L) ? 1 : -1;
    if (L === "left" || L === "right") {
      if (!(O.x * D < 0) && B >= 0 && B <= H)
        return k;
    } else if (!(O.y * D < 0) && z >= 0 && z <= H)
      return !k;
    return A.current = !0, !0;
  };
  T.useEffect(() => {
    N && window.requestAnimationFrame(() => {
      E(!0);
    });
  }, []);
  function I(O) {
    C.current = null, A.current = !1, i(O);
  }
  return /* @__PURE__ */ T.createElement(bn, {
    "data-vaul-drawer-direction": b,
    "data-vaul-drawer": "",
    "data-vaul-delayed-snap-points": y ? "true" : "false",
    "data-vaul-snap-points": v && N ? "true" : "false",
    "data-vaul-custom-container": w ? "true" : "false",
    "data-vaul-animate": x?.current ? "true" : "false",
    ...r,
    ref: _,
    style: u && u.length > 0 ? {
      "--snap-point-height": `${u[d ?? 0]}px`,
      ...t
    } : t,
    onPointerDown: (O) => {
      g || (r.onPointerDown == null || r.onPointerDown.call(r, O), C.current = {
        x: O.pageX,
        y: O.pageY
      }, s(O));
    },
    onOpenAutoFocus: (O) => {
      n?.(O), S || O.preventDefault();
    },
    onPointerDownOutside: (O) => {
      if (e?.(O), !h || O.defaultPrevented) {
        O.preventDefault();
        return;
      }
      p.current && (p.current = !1);
    },
    onFocusOutside: (O) => {
      if (!h) {
        O.preventDefault();
        return;
      }
    },
    onPointerMove: (O) => {
      if (P.current = O, g || (r.onPointerMove == null || r.onPointerMove.call(r, O), !C.current)) return;
      const L = O.pageY - C.current.y, H = O.pageX - C.current.x, z = O.pointerType === "touch" ? 10 : 2;
      j({
        x: H,
        y: L
      }, b, z) ? f(O) : (Math.abs(H) > z || Math.abs(L) > z) && (C.current = null);
    },
    onPointerUp: (O) => {
      r.onPointerUp == null || r.onPointerUp.call(r, O), C.current = null, A.current = !1, i(O);
    },
    onPointerOut: (O) => {
      r.onPointerOut == null || r.onPointerOut.call(r, O), I(P.current);
    },
    onContextMenu: (O) => {
      r.onContextMenu == null || r.onContextMenu.call(r, O), P.current && I(P.current);
    }
  });
});
Ai.displayName = "Drawer.Content";
const sf = 250, cf = 120, lf = /* @__PURE__ */ T.forwardRef(function({ preventCycle: e = !1, children: t, ...n }, r) {
  const { closeDrawer: o, isDragging: a, snapPoints: s, activeSnapPoint: i, setActiveSnapPoint: f, dismissible: p, handleOnly: u, isOpen: d, onPress: h, onDrag: v } = Ct(), b = T.useRef(null), m = T.useRef(!1);
  function w() {
    if (m.current) {
      S();
      return;
    }
    window.setTimeout(() => {
      g();
    }, cf);
  }
  function g() {
    if (a || e || m.current) {
      S();
      return;
    }
    if (S(), !s || s.length === 0) {
      p || o();
      return;
    }
    if (i === s[s.length - 1] && p) {
      o();
      return;
    }
    const E = s.findIndex((C) => C === i);
    if (E === -1) return;
    const _ = s[E + 1];
    f(_);
  }
  function x() {
    b.current = window.setTimeout(() => {
      m.current = !0;
    }, sf);
  }
  function S() {
    b.current && window.clearTimeout(b.current), m.current = !1;
  }
  return /* @__PURE__ */ T.createElement("div", {
    onClick: w,
    onPointerCancel: S,
    onPointerDown: (y) => {
      u && h(y), x();
    },
    onPointerMove: (y) => {
      u && v(y);
    },
    // onPointerUp is already handled by the content component
    ref: r,
    "data-vaul-drawer-visible": d ? "true" : "false",
    "data-vaul-handle": "",
    "aria-hidden": "true",
    ...n
  }, /* @__PURE__ */ T.createElement("span", {
    "data-vaul-handle-hitarea": "",
    "aria-hidden": "true"
  }, t));
});
lf.displayName = "Drawer.Handle";
function uf(e) {
  const t = Ct(), { container: n = t.container, ...r } = e;
  return /* @__PURE__ */ T.createElement(mi, {
    container: n,
    ...r
  });
}
const Be = {
  Root: af,
  Content: Ai,
  Overlay: Pi,
  Trigger: _r,
  Portal: uf,
  Close: Or,
  Title: xn,
  Description: yn
};
function rv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Be.Root, { "data-slot": "drawer", ...e });
}
function ov({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Be.Trigger, { "data-slot": "drawer-trigger", ...e });
}
function df({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Be.Portal, { "data-slot": "drawer-portal", ...e });
}
function av({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Be.Close, { "data-slot": "drawer-close", ...e });
}
function ff({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    Be.Overlay,
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
function iv({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsxs(df, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ l.jsx(ff, {}),
    /* @__PURE__ */ l.jsxs(
      Be.Content,
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
function sv({ className: e, ...t }) {
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
function cv({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "drawer-footer",
      className: M("mt-auto flex flex-col gap-2 p-4", e),
      ...t
    }
  );
}
function lv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    Be.Title,
    {
      "data-slot": "drawer-title",
      className: M("text-foreground font-semibold", e),
      ...t
    }
  );
}
function uv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    Be.Description,
    {
      "data-slot": "drawer-description",
      className: M("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
const pf = ["top", "right", "bottom", "left"], Fe = Math.min, fe = Math.max, en = Math.round, Bt = Math.floor, Te = (e) => ({
  x: e,
  y: e
}), mf = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, hf = {
  start: "end",
  end: "start"
};
function ar(e, t, n) {
  return fe(e, Fe(t, n));
}
function Me(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function je(e) {
  return e.split("-")[0];
}
function ct(e) {
  return e.split("-")[1];
}
function Nr(e) {
  return e === "x" ? "y" : "x";
}
function Ir(e) {
  return e === "y" ? "height" : "width";
}
const vf = /* @__PURE__ */ new Set(["top", "bottom"]);
function _e(e) {
  return vf.has(je(e)) ? "y" : "x";
}
function Mr(e) {
  return Nr(_e(e));
}
function gf(e, t, n) {
  n === void 0 && (n = !1);
  const r = ct(e), o = Mr(e), a = Ir(o);
  let s = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = tn(s)), [s, tn(s)];
}
function wf(e) {
  const t = tn(e);
  return [ir(e), t, ir(t)];
}
function ir(e) {
  return e.replace(/start|end/g, (t) => hf[t]);
}
const ko = ["left", "right"], Lo = ["right", "left"], bf = ["top", "bottom"], xf = ["bottom", "top"];
function yf(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Lo : ko : t ? ko : Lo;
    case "left":
    case "right":
      return t ? bf : xf;
    default:
      return [];
  }
}
function Sf(e, t, n, r) {
  const o = ct(e);
  let a = yf(je(e), n === "start", r);
  return o && (a = a.map((s) => s + "-" + o), t && (a = a.concat(a.map(ir)))), a;
}
function tn(e) {
  return e.replace(/left|right|bottom|top/g, (t) => mf[t]);
}
function Cf(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function _i(e) {
  return typeof e != "number" ? Cf(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function nn(e) {
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
function $o(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = _e(t), s = Mr(t), i = Ir(s), f = je(t), p = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let v;
  switch (f) {
    case "top":
      v = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      v = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      v = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (ct(t)) {
    case "start":
      v[s] -= h * (n && p ? -1 : 1);
      break;
    case "end":
      v[s] += h * (n && p ? -1 : 1);
      break;
  }
  return v;
}
const Ef = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: s
  } = n, i = a.filter(Boolean), f = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let p = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = $o(p, r, f), h = r, v = {}, b = 0;
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
      x: u,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: v,
      rects: p,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = x ?? u, d = S ?? d, v = {
      ...v,
      [w]: {
        ...v[w],
        ...y
      }
    }, E && b <= 50 && (b++, typeof E == "object" && (E.placement && (h = E.placement), E.rects && (p = E.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: u,
      y: d
    } = $o(p, h, f)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: v
  };
};
async function gt(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: s,
    elements: i,
    strategy: f
  } = e, {
    boundary: p = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: v = 0
  } = Me(t, e), b = _i(v), w = i[h ? d === "floating" ? "reference" : "floating" : d], g = nn(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: p,
    rootBoundary: u,
    strategy: f
  })), x = d === "floating" ? {
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
  }, E = nn(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: x,
    offsetParent: S,
    strategy: f
  }) : x);
  return {
    top: (g.top - E.top + b.top) / y.y,
    bottom: (E.bottom - g.bottom + b.bottom) / y.y,
    left: (g.left - E.left + b.left) / y.x,
    right: (E.right - g.right + b.right) / y.x
  };
}
const Rf = (e) => ({
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
      middlewareData: f
    } = t, {
      element: p,
      padding: u = 0
    } = Me(e, t) || {};
    if (p == null)
      return {};
    const d = _i(u), h = {
      x: n,
      y: r
    }, v = Mr(o), b = Ir(v), m = await s.getDimensions(p), w = v === "y", g = w ? "top" : "left", x = w ? "bottom" : "right", S = w ? "clientHeight" : "clientWidth", y = a.reference[b] + a.reference[v] - h[v] - a.floating[b], E = h[v] - a.reference[v], _ = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(p));
    let C = _ ? _[S] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(_))) && (C = i.floating[S] || a.floating[b]);
    const P = y / 2 - E / 2, A = C / 2 - m[b] / 2 - 1, N = Fe(d[g], A), j = Fe(d[x], A), I = N, O = C - m[b] - j, L = C / 2 - m[b] / 2 + P, H = ar(I, L, O), z = !f.arrow && ct(o) != null && L !== H && a.reference[b] / 2 - (L < I ? N : j) - m[b] / 2 < 0, B = z ? L < I ? L - I : L - O : 0;
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
}), Pf = function(e) {
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
        platform: f,
        elements: p
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: b = "none",
        flipAlignment: m = !0,
        ...w
      } = Me(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const g = je(o), x = _e(i), S = je(i) === i, y = await (f.isRTL == null ? void 0 : f.isRTL(p.floating)), E = h || (S || !m ? [tn(i)] : wf(i)), _ = b !== "none";
      !h && _ && E.push(...Sf(i, m, b, y));
      const C = [i, ...E], P = await gt(t, w), A = [];
      let N = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && A.push(P[g]), d) {
        const L = gf(o, s, y);
        A.push(P[L[0]], P[L[1]]);
      }
      if (N = [...N, {
        placement: o,
        overflows: A
      }], !A.every((L) => L <= 0)) {
        var j, I;
        const L = (((j = a.flip) == null ? void 0 : j.index) || 0) + 1, H = C[L];
        if (H && (!(d === "alignment" ? x !== _e(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        N.every((k) => _e(k.placement) === x ? k.overflows[0] > 0 : !0)))
          return {
            data: {
              index: L,
              overflows: N
            },
            reset: {
              placement: H
            }
          };
        let z = (I = N.filter((B) => B.overflows[0] <= 0).sort((B, k) => B.overflows[1] - k.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!z)
          switch (v) {
            case "bestFit": {
              var O;
              const B = (O = N.filter((k) => {
                if (_) {
                  const D = _e(k.placement);
                  return D === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  D === "y";
                }
                return !0;
              }).map((k) => [k.placement, k.overflows.filter((D) => D > 0).reduce((D, R) => D + R, 0)]).sort((k, D) => k[1] - D[1])[0]) == null ? void 0 : O[0];
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
function Fo(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function zo(e) {
  return pf.some((t) => e[t] >= 0);
}
const Af = function(e) {
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
          const a = await gt(t, {
            ...o,
            elementContext: "reference"
          }), s = Fo(a, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: zo(s)
            }
          };
        }
        case "escaped": {
          const a = await gt(t, {
            ...o,
            altBoundary: !0
          }), s = Fo(a, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: zo(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ti = /* @__PURE__ */ new Set(["left", "top"]);
async function _f(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), s = je(n), i = ct(n), f = _e(n) === "y", p = Ti.has(s) ? -1 : 1, u = a && f ? -1 : 1, d = Me(t, e);
  let {
    mainAxis: h,
    crossAxis: v,
    alignmentAxis: b
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof b == "number" && (v = i === "end" ? b * -1 : b), f ? {
    x: v * u,
    y: h * p
  } : {
    x: h * p,
    y: v * u
  };
}
const Tf = function(e) {
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
      } = t, f = await _f(t, e);
      return s === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + f.x,
        y: a + f.y,
        data: {
          ...f,
          placement: s
        }
      };
    }
  };
}, Of = function(e) {
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
        ...f
      } = Me(e, t), p = {
        x: n,
        y: r
      }, u = await gt(t, f), d = _e(je(o)), h = Nr(d);
      let v = p[h], b = p[d];
      if (a) {
        const w = h === "y" ? "top" : "left", g = h === "y" ? "bottom" : "right", x = v + u[w], S = v - u[g];
        v = ar(x, v, S);
      }
      if (s) {
        const w = d === "y" ? "top" : "left", g = d === "y" ? "bottom" : "right", x = b + u[w], S = b - u[g];
        b = ar(x, b, S);
      }
      const m = i.fn({
        ...t,
        [h]: v,
        [d]: b
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r,
          enabled: {
            [h]: a,
            [d]: s
          }
        }
      };
    }
  };
}, Df = function(e) {
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
        mainAxis: f = !0,
        crossAxis: p = !0
      } = Me(e, t), u = {
        x: n,
        y: r
      }, d = _e(o), h = Nr(d);
      let v = u[h], b = u[d];
      const m = Me(i, t), w = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (f) {
        const S = h === "y" ? "height" : "width", y = a.reference[h] - a.floating[S] + w.mainAxis, E = a.reference[h] + a.reference[S] - w.mainAxis;
        v < y ? v = y : v > E && (v = E);
      }
      if (p) {
        var g, x;
        const S = h === "y" ? "width" : "height", y = Ti.has(je(o)), E = a.reference[d] - a.floating[S] + (y && ((g = s.offset) == null ? void 0 : g[d]) || 0) + (y ? 0 : w.crossAxis), _ = a.reference[d] + a.reference[S] + (y ? 0 : ((x = s.offset) == null ? void 0 : x[d]) || 0) - (y ? w.crossAxis : 0);
        b < E ? b = E : b > _ && (b = _);
      }
      return {
        [h]: v,
        [d]: b
      };
    }
  };
}, Nf = function(e) {
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
        apply: f = () => {
        },
        ...p
      } = Me(e, t), u = await gt(t, p), d = je(o), h = ct(o), v = _e(o) === "y", {
        width: b,
        height: m
      } = a.floating;
      let w, g;
      d === "top" || d === "bottom" ? (w = d, g = h === (await (s.isRTL == null ? void 0 : s.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = d, w = h === "end" ? "top" : "bottom");
      const x = m - u.top - u.bottom, S = b - u.left - u.right, y = Fe(m - u[w], x), E = Fe(b - u[g], S), _ = !t.middlewareData.shift;
      let C = y, P = E;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = S), (r = t.middlewareData.shift) != null && r.enabled.y && (C = x), _ && !h) {
        const N = fe(u.left, 0), j = fe(u.right, 0), I = fe(u.top, 0), O = fe(u.bottom, 0);
        v ? P = b - 2 * (N !== 0 || j !== 0 ? N + j : fe(u.left, u.right)) : C = m - 2 * (I !== 0 || O !== 0 ? I + O : fe(u.top, u.bottom));
      }
      await f({
        ...t,
        availableWidth: P,
        availableHeight: C
      });
      const A = await s.getDimensions(i.floating);
      return b !== A.width || m !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Cn() {
  return typeof window < "u";
}
function lt(e) {
  return Oi(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ne(e) {
  var t;
  return (t = (Oi(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Oi(e) {
  return Cn() ? e instanceof Node || e instanceof pe(e).Node : !1;
}
function xe(e) {
  return Cn() ? e instanceof Element || e instanceof pe(e).Element : !1;
}
function Oe(e) {
  return Cn() ? e instanceof HTMLElement || e instanceof pe(e).HTMLElement : !1;
}
function Wo(e) {
  return !Cn() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pe(e).ShadowRoot;
}
const If = /* @__PURE__ */ new Set(["inline", "contents"]);
function Et(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ye(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !If.has(o);
}
const Mf = /* @__PURE__ */ new Set(["table", "td", "th"]);
function jf(e) {
  return Mf.has(lt(e));
}
const kf = [":popover-open", ":modal"];
function En(e) {
  return kf.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const Lf = ["transform", "translate", "scale", "rotate", "perspective"], $f = ["transform", "translate", "scale", "rotate", "perspective", "filter"], Ff = ["paint", "layout", "strict", "content"];
function jr(e) {
  const t = kr(), n = xe(e) ? ye(e) : e;
  return Lf.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || $f.some((r) => (n.willChange || "").includes(r)) || Ff.some((r) => (n.contain || "").includes(r));
}
function zf(e) {
  let t = ze(e);
  for (; Oe(t) && !it(t); ) {
    if (jr(t))
      return t;
    if (En(t))
      return null;
    t = ze(t);
  }
  return null;
}
function kr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Wf = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function it(e) {
  return Wf.has(lt(e));
}
function ye(e) {
  return pe(e).getComputedStyle(e);
}
function Rn(e) {
  return xe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ze(e) {
  if (lt(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Wo(e) && e.host || // Fallback.
    Ne(e)
  );
  return Wo(t) ? t.host : t;
}
function Di(e) {
  const t = ze(e);
  return it(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Oe(t) && Et(t) ? t : Di(t);
}
function wt(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Di(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), s = pe(o);
  if (a) {
    const i = sr(s);
    return t.concat(s, s.visualViewport || [], Et(o) ? o : [], i && n ? wt(i) : []);
  }
  return t.concat(o, wt(o, [], n));
}
function sr(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ni(e) {
  const t = ye(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = Oe(e), a = o ? e.offsetWidth : n, s = o ? e.offsetHeight : r, i = en(n) !== a || en(r) !== s;
  return i && (n = a, r = s), {
    width: n,
    height: r,
    $: i
  };
}
function Lr(e) {
  return xe(e) ? e : e.contextElement;
}
function rt(e) {
  const t = Lr(e);
  if (!Oe(t))
    return Te(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = Ni(t);
  let s = (a ? en(n.width) : n.width) / r, i = (a ? en(n.height) : n.height) / o;
  return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: s,
    y: i
  };
}
const Bf = /* @__PURE__ */ Te(0);
function Ii(e) {
  const t = pe(e);
  return !kr() || !t.visualViewport ? Bf : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Hf(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== pe(e) ? !1 : t;
}
function Xe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Lr(e);
  let s = Te(1);
  t && (r ? xe(r) && (s = rt(r)) : s = rt(e));
  const i = Hf(a, n, r) ? Ii(a) : Te(0);
  let f = (o.left + i.x) / s.x, p = (o.top + i.y) / s.y, u = o.width / s.x, d = o.height / s.y;
  if (a) {
    const h = pe(a), v = r && xe(r) ? pe(r) : r;
    let b = h, m = sr(b);
    for (; m && r && v !== b; ) {
      const w = rt(m), g = m.getBoundingClientRect(), x = ye(m), S = g.left + (m.clientLeft + parseFloat(x.paddingLeft)) * w.x, y = g.top + (m.clientTop + parseFloat(x.paddingTop)) * w.y;
      f *= w.x, p *= w.y, u *= w.x, d *= w.y, f += S, p += y, b = pe(m), m = sr(b);
    }
  }
  return nn({
    width: u,
    height: d,
    x: f,
    y: p
  });
}
function Pn(e, t) {
  const n = Rn(e).scrollLeft;
  return t ? t.left + n : Xe(Ne(e)).left + n;
}
function Mi(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Pn(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Uf(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", s = Ne(r), i = t ? En(t.floating) : !1;
  if (r === s || i && a)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = Te(1);
  const u = Te(0), d = Oe(r);
  if ((d || !d && !a) && ((lt(r) !== "body" || Et(s)) && (f = Rn(r)), Oe(r))) {
    const v = Xe(r);
    p = rt(r), u.x = v.x + r.clientLeft, u.y = v.y + r.clientTop;
  }
  const h = s && !d && !a ? Mi(s, f) : Te(0);
  return {
    width: n.width * p.x,
    height: n.height * p.y,
    x: n.x * p.x - f.scrollLeft * p.x + u.x + h.x,
    y: n.y * p.y - f.scrollTop * p.y + u.y + h.y
  };
}
function Vf(e) {
  return Array.from(e.getClientRects());
}
function Yf(e) {
  const t = Ne(e), n = Rn(e), r = e.ownerDocument.body, o = fe(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = fe(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + Pn(e);
  const i = -n.scrollTop;
  return ye(r).direction === "rtl" && (s += fe(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: s,
    y: i
  };
}
const Bo = 25;
function Gf(e, t) {
  const n = pe(e), r = Ne(e), o = n.visualViewport;
  let a = r.clientWidth, s = r.clientHeight, i = 0, f = 0;
  if (o) {
    a = o.width, s = o.height;
    const u = kr();
    (!u || u && t === "fixed") && (i = o.offsetLeft, f = o.offsetTop);
  }
  const p = Pn(r);
  if (p <= 0) {
    const u = r.ownerDocument, d = u.body, h = getComputedStyle(d), v = u.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, b = Math.abs(r.clientWidth - d.clientWidth - v);
    b <= Bo && (a -= b);
  } else p <= Bo && (a += p);
  return {
    width: a,
    height: s,
    x: i,
    y: f
  };
}
const Kf = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function Xf(e, t) {
  const n = Xe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = Oe(e) ? rt(e) : Te(1), s = e.clientWidth * a.x, i = e.clientHeight * a.y, f = o * a.x, p = r * a.y;
  return {
    width: s,
    height: i,
    x: f,
    y: p
  };
}
function Ho(e, t, n) {
  let r;
  if (t === "viewport")
    r = Gf(e, n);
  else if (t === "document")
    r = Yf(Ne(e));
  else if (xe(t))
    r = Xf(t, n);
  else {
    const o = Ii(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return nn(r);
}
function ji(e, t) {
  const n = ze(e);
  return n === t || !xe(n) || it(n) ? !1 : ye(n).position === "fixed" || ji(n, t);
}
function qf(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = wt(e, [], !1).filter((i) => xe(i) && lt(i) !== "body"), o = null;
  const a = ye(e).position === "fixed";
  let s = a ? ze(e) : e;
  for (; xe(s) && !it(s); ) {
    const i = ye(s), f = jr(s);
    !f && i.position === "fixed" && (o = null), (a ? !f && !o : !f && i.position === "static" && !!o && Kf.has(o.position) || Et(s) && !f && ji(e, s)) ? r = r.filter((u) => u !== s) : o = i, s = ze(s);
  }
  return t.set(e, r), r;
}
function Zf(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const s = [...n === "clippingAncestors" ? En(t) ? [] : qf(t, this._c) : [].concat(n), r], i = s[0], f = s.reduce((p, u) => {
    const d = Ho(t, u, o);
    return p.top = fe(d.top, p.top), p.right = Fe(d.right, p.right), p.bottom = Fe(d.bottom, p.bottom), p.left = fe(d.left, p.left), p;
  }, Ho(t, i, o));
  return {
    width: f.right - f.left,
    height: f.bottom - f.top,
    x: f.left,
    y: f.top
  };
}
function Jf(e) {
  const {
    width: t,
    height: n
  } = Ni(e);
  return {
    width: t,
    height: n
  };
}
function Qf(e, t, n) {
  const r = Oe(t), o = Ne(t), a = n === "fixed", s = Xe(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = Te(0);
  function p() {
    f.x = Pn(o);
  }
  if (r || !r && !a)
    if ((lt(t) !== "body" || Et(o)) && (i = Rn(t)), r) {
      const v = Xe(t, !0, a, t);
      f.x = v.x + t.clientLeft, f.y = v.y + t.clientTop;
    } else o && p();
  a && !r && o && p();
  const u = o && !r && !a ? Mi(o, i) : Te(0), d = s.left + i.scrollLeft - f.x - u.x, h = s.top + i.scrollTop - f.y - u.y;
  return {
    x: d,
    y: h,
    width: s.width,
    height: s.height
  };
}
function Kn(e) {
  return ye(e).position === "static";
}
function Uo(e, t) {
  if (!Oe(e) || ye(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ne(e) === n && (n = n.ownerDocument.body), n;
}
function ki(e, t) {
  const n = pe(e);
  if (En(e))
    return n;
  if (!Oe(e)) {
    let o = ze(e);
    for (; o && !it(o); ) {
      if (xe(o) && !Kn(o))
        return o;
      o = ze(o);
    }
    return n;
  }
  let r = Uo(e, t);
  for (; r && jf(r) && Kn(r); )
    r = Uo(r, t);
  return r && it(r) && Kn(r) && !jr(r) ? n : r || zf(e) || n;
}
const ep = async function(e) {
  const t = this.getOffsetParent || ki, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Qf(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function tp(e) {
  return ye(e).direction === "rtl";
}
const np = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Uf,
  getDocumentElement: Ne,
  getClippingRect: Zf,
  getOffsetParent: ki,
  getElementRects: ep,
  getClientRects: Vf,
  getDimensions: Jf,
  getScale: rt,
  isElement: xe,
  isRTL: tp
};
function Li(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function rp(e, t) {
  let n = null, r;
  const o = Ne(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function s(i, f) {
    i === void 0 && (i = !1), f === void 0 && (f = 1), a();
    const p = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: h,
      height: v
    } = p;
    if (i || t(), !h || !v)
      return;
    const b = Bt(d), m = Bt(o.clientWidth - (u + h)), w = Bt(o.clientHeight - (d + v)), g = Bt(u), S = {
      rootMargin: -b + "px " + -m + "px " + -w + "px " + -g + "px",
      threshold: fe(0, Fe(1, f)) || 1
    };
    let y = !0;
    function E(_) {
      const C = _[0].intersectionRatio;
      if (C !== f) {
        if (!y)
          return s();
        C ? s(!1, C) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      C === 1 && !Li(p, e.getBoundingClientRect()) && s(), y = !1;
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
function op(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = r, p = Lr(e), u = o || a ? [...p ? wt(p) : [], ...wt(t)] : [];
  u.forEach((g) => {
    o && g.addEventListener("scroll", n, {
      passive: !0
    }), a && g.addEventListener("resize", n);
  });
  const d = p && i ? rp(p, n) : null;
  let h = -1, v = null;
  s && (v = new ResizeObserver((g) => {
    let [x] = g;
    x && x.target === p && v && (v.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var S;
      (S = v) == null || S.observe(t);
    })), n();
  }), p && !f && v.observe(p), v.observe(t));
  let b, m = f ? Xe(e) : null;
  f && w();
  function w() {
    const g = Xe(e);
    m && !Li(m, g) && n(), m = g, b = requestAnimationFrame(w);
  }
  return n(), () => {
    var g;
    u.forEach((x) => {
      o && x.removeEventListener("scroll", n), a && x.removeEventListener("resize", n);
    }), d?.(), (g = v) == null || g.disconnect(), v = null, f && cancelAnimationFrame(b);
  };
}
const ap = Tf, ip = Of, sp = Pf, cp = Nf, lp = Af, Vo = Rf, up = Df, dp = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: np,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Ef(e, t, {
    ...o,
    platform: a
  });
};
var fp = typeof document < "u", pp = function() {
}, Kt = fp ? qo : pp;
function rn(e, t) {
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
        if (!rn(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !rn(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function $i(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Yo(e, t) {
  const n = $i(e);
  return Math.round(t * n) / n;
}
function Xn(e) {
  const t = c.useRef(e);
  return Kt(() => {
    t.current = e;
  }), t;
}
function mp(e) {
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
    whileElementsMounted: f,
    open: p
  } = e, [u, d] = c.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, v] = c.useState(r);
  rn(h, r) || v(r);
  const [b, m] = c.useState(null), [w, g] = c.useState(null), x = c.useCallback((k) => {
    k !== _.current && (_.current = k, m(k));
  }, []), S = c.useCallback((k) => {
    k !== C.current && (C.current = k, g(k));
  }, []), y = a || b, E = s || w, _ = c.useRef(null), C = c.useRef(null), P = c.useRef(u), A = f != null, N = Xn(f), j = Xn(o), I = Xn(p), O = c.useCallback(() => {
    if (!_.current || !C.current)
      return;
    const k = {
      placement: t,
      strategy: n,
      middleware: h
    };
    j.current && (k.platform = j.current), dp(_.current, C.current, k).then((D) => {
      const R = {
        ...D,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      L.current && !rn(P.current, R) && (P.current = R, Jo.flushSync(() => {
        d(R);
      }));
    });
  }, [h, t, n, j, I]);
  Kt(() => {
    p === !1 && P.current.isPositioned && (P.current.isPositioned = !1, d((k) => ({
      ...k,
      isPositioned: !1
    })));
  }, [p]);
  const L = c.useRef(!1);
  Kt(() => (L.current = !0, () => {
    L.current = !1;
  }), []), Kt(() => {
    if (y && (_.current = y), E && (C.current = E), y && E) {
      if (N.current)
        return N.current(y, E, O);
      O();
    }
  }, [y, E, O, N, A]);
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
    const D = Yo(z.floating, u.x), R = Yo(z.floating, u.y);
    return i ? {
      ...k,
      transform: "translate(" + D + "px, " + R + "px)",
      ...$i(z.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: D,
      top: R
    };
  }, [n, i, z.floating, u.x, u.y]);
  return c.useMemo(() => ({
    ...u,
    update: O,
    refs: H,
    elements: z,
    floatingStyles: B
  }), [u, O, H, z, B]);
}
const hp = (e) => {
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
      return r && t(r) ? r.current != null ? Vo({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Vo({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, vp = (e, t) => ({
  ...ap(e),
  options: [e, t]
}), gp = (e, t) => ({
  ...ip(e),
  options: [e, t]
}), wp = (e, t) => ({
  ...up(e),
  options: [e, t]
}), bp = (e, t) => ({
  ...sp(e),
  options: [e, t]
}), xp = (e, t) => ({
  ...cp(e),
  options: [e, t]
}), yp = (e, t) => ({
  ...lp(e),
  options: [e, t]
}), Sp = (e, t) => ({
  ...hp(e),
  options: [e, t]
});
var Cp = "Arrow", Fi = c.forwardRef((e, t) => {
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
Fi.displayName = Cp;
var Ep = Fi;
function Rp(e) {
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
          const f = a.borderBoxSize, p = Array.isArray(f) ? f[0] : f;
          s = p.inlineSize, i = p.blockSize;
        } else
          s = e.offsetWidth, i = e.offsetHeight;
        n({ width: s, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var $r = "Popper", [zi, An] = Se($r), [Pp, Wi] = zi($r), Bi = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = c.useState(null);
  return /* @__PURE__ */ l.jsx(Pp, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
Bi.displayName = $r;
var Hi = "PopperAnchor", Ui = c.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = Wi(Hi, n), s = c.useRef(null), i = J(t, s), f = c.useRef(null);
    return c.useEffect(() => {
      const p = f.current;
      f.current = r?.current || s.current, p !== f.current && a.onAnchorChange(f.current);
    }), r ? null : /* @__PURE__ */ l.jsx(V.div, { ...o, ref: i });
  }
);
Ui.displayName = Hi;
var Fr = "PopperContent", [Ap, _p] = zi(Fr), Vi = c.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: i = 0,
      avoidCollisions: f = !0,
      collisionBoundary: p = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: v = "optimized",
      onPlaced: b,
      ...m
    } = e, w = Wi(Fr, n), [g, x] = c.useState(null), S = J(t, (X) => x(X)), [y, E] = c.useState(null), _ = Rp(y), C = _?.width ?? 0, P = _?.height ?? 0, A = r + (a !== "center" ? "-" + a : ""), N = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, j = Array.isArray(p) ? p : [p], I = j.length > 0, O = {
      padding: N,
      boundary: j.filter(Op),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: I
    }, { refs: L, floatingStyles: H, placement: z, isPositioned: B, middlewareData: k } = mp({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: A,
      whileElementsMounted: (...X) => op(...X, {
        animationFrame: v === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        vp({ mainAxis: o + P, alignmentAxis: s }),
        f && gp({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? wp() : void 0,
          ...O
        }),
        f && bp({ ...O }),
        xp({
          ...O,
          apply: ({ elements: X, rects: Z, availableWidth: he, availableHeight: Ie }) => {
            const { width: Re, height: Ot } = Z.reference, Ve = X.floating.style;
            Ve.setProperty("--radix-popper-available-width", `${he}px`), Ve.setProperty("--radix-popper-available-height", `${Ie}px`), Ve.setProperty("--radix-popper-anchor-width", `${Re}px`), Ve.setProperty("--radix-popper-anchor-height", `${Ot}px`);
          }
        }),
        y && Sp({ element: y, padding: i }),
        Dp({ arrowWidth: C, arrowHeight: P }),
        h && yp({ strategy: "referenceHidden", ...O })
      ]
    }), [D, R] = Ki(z), $ = ie(b);
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
          Ap,
          {
            scope: n,
            placedSide: D,
            onArrowChange: E,
            arrowX: Y,
            arrowY: G,
            shouldHideArrow: ee,
            children: /* @__PURE__ */ l.jsx(
              V.div,
              {
                "data-side": D,
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
Vi.displayName = Fr;
var Yi = "PopperArrow", Tp = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Gi = c.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = _p(Yi, r), s = Tp[a.placedSide];
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
          Ep,
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
Gi.displayName = Yi;
function Op(e) {
  return e !== null;
}
var Dp = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, s = o.arrow?.centerOffset !== 0, i = s ? 0 : e.arrowWidth, f = s ? 0 : e.arrowHeight, [p, u] = Ki(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (o.arrow?.x ?? 0) + i / 2, v = (o.arrow?.y ?? 0) + f / 2;
    let b = "", m = "";
    return p === "bottom" ? (b = s ? d : `${h}px`, m = `${-f}px`) : p === "top" ? (b = s ? d : `${h}px`, m = `${r.floating.height + f}px`) : p === "right" ? (b = `${-f}px`, m = s ? d : `${v}px`) : p === "left" && (b = `${r.floating.width + f}px`, m = s ? d : `${v}px`), { data: { x: b, y: m } };
  }
});
function Ki(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var zr = Bi, Wr = Ui, Xi = Vi, qi = Gi, qn = "rovingFocusGroup.onEntryFocus", Np = { bubbles: !1, cancelable: !0 }, Rt = "RovingFocusGroup", [cr, Zi, Ip] = dr(Rt), [Mp, Ji] = Se(
  Rt,
  [Ip]
), [jp, kp] = Mp(Rt), Qi = c.forwardRef(
  (e, t) => /* @__PURE__ */ l.jsx(cr.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(cr.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ l.jsx(Lp, { ...e, ref: t }) }) })
);
Qi.displayName = Rt;
var Lp = c.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: s,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: f,
    onEntryFocus: p,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, h = c.useRef(null), v = J(t, h), b = cn(a), [m, w] = We({
    prop: s,
    defaultProp: i ?? null,
    onChange: f,
    caller: Rt
  }), [g, x] = c.useState(!1), S = ie(p), y = Zi(n), E = c.useRef(!1), [_, C] = c.useState(0);
  return c.useEffect(() => {
    const P = h.current;
    if (P)
      return P.addEventListener(qn, S), () => P.removeEventListener(qn, S);
  }, [S]), /* @__PURE__ */ l.jsx(
    jp,
    {
      scope: n,
      orientation: r,
      dir: b,
      loop: o,
      currentTabStopId: m,
      onItemFocus: c.useCallback(
        (P) => w(P),
        [w]
      ),
      onItemShiftTab: c.useCallback(() => x(!0), []),
      onFocusableItemAdd: c.useCallback(
        () => C((P) => P + 1),
        []
      ),
      onFocusableItemRemove: c.useCallback(
        () => C((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ l.jsx(
        V.div,
        {
          tabIndex: g || _ === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: v,
          style: { outline: "none", ...e.style },
          onMouseDown: F(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: F(e.onFocus, (P) => {
            const A = !E.current;
            if (P.target === P.currentTarget && A && !g) {
              const N = new CustomEvent(qn, Np);
              if (P.currentTarget.dispatchEvent(N), !N.defaultPrevented) {
                const j = y().filter((z) => z.focusable), I = j.find((z) => z.active), O = j.find((z) => z.id === m), H = [I, O, ...j].filter(
                  Boolean
                ).map((z) => z.ref.current);
                ns(H, u);
              }
            }
            E.current = !1;
          }),
          onBlur: F(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), es = "RovingFocusGroupItem", ts = c.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: s,
      ...i
    } = e, f = be(), p = a || f, u = kp(es, n), d = u.currentTabStopId === p, h = Zi(n), { onFocusableItemAdd: v, onFocusableItemRemove: b, currentTabStopId: m } = u;
    return c.useEffect(() => {
      if (r)
        return v(), () => b();
    }, [r, v, b]), /* @__PURE__ */ l.jsx(
      cr.ItemSlot,
      {
        scope: n,
        id: p,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ l.jsx(
          V.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: F(e.onMouseDown, (w) => {
              r ? u.onItemFocus(p) : w.preventDefault();
            }),
            onFocus: F(e.onFocus, () => u.onItemFocus(p)),
            onKeyDown: F(e.onKeyDown, (w) => {
              if (w.key === "Tab" && w.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (w.target !== w.currentTarget) return;
              const g = zp(w, u.orientation, u.dir);
              if (g !== void 0) {
                if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                w.preventDefault();
                let S = h().filter((y) => y.focusable).map((y) => y.ref.current);
                if (g === "last") S.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && S.reverse();
                  const y = S.indexOf(w.currentTarget);
                  S = u.loop ? Wp(S, y + 1) : S.slice(y + 1);
                }
                setTimeout(() => ns(S));
              }
            }),
            children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: m != null }) : s
          }
        )
      }
    );
  }
);
ts.displayName = es;
var $p = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Fp(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function zp(e, t, n) {
  const r = Fp(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return $p[r];
}
function ns(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Wp(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Bp = Qi, Hp = ts, lr = ["Enter", " "], Up = ["ArrowDown", "PageUp", "Home"], rs = ["ArrowUp", "PageDown", "End"], Vp = [...Up, ...rs], Yp = {
  ltr: [...lr, "ArrowRight"],
  rtl: [...lr, "ArrowLeft"]
}, Gp = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Pt = "Menu", [bt, Kp, Xp] = dr(Pt), [qe, os] = Se(Pt, [
  Xp,
  An,
  Ji
]), At = An(), as = Ji(), [is, He] = qe(Pt), [qp, _t] = qe(Pt), ss = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: s = !0 } = e, i = At(t), [f, p] = c.useState(null), u = c.useRef(!1), d = ie(a), h = cn(o);
  return c.useEffect(() => {
    const v = () => {
      u.current = !0, document.addEventListener("pointerdown", b, { capture: !0, once: !0 }), document.addEventListener("pointermove", b, { capture: !0, once: !0 });
    }, b = () => u.current = !1;
    return document.addEventListener("keydown", v, { capture: !0 }), () => {
      document.removeEventListener("keydown", v, { capture: !0 }), document.removeEventListener("pointerdown", b, { capture: !0 }), document.removeEventListener("pointermove", b, { capture: !0 });
    };
  }, []), /* @__PURE__ */ l.jsx(zr, { ...i, children: /* @__PURE__ */ l.jsx(
    is,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: f,
      onContentChange: p,
      children: /* @__PURE__ */ l.jsx(
        qp,
        {
          scope: t,
          onClose: c.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: h,
          modal: s,
          children: r
        }
      )
    }
  ) });
};
ss.displayName = Pt;
var Zp = "MenuAnchor", Br = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = At(n);
    return /* @__PURE__ */ l.jsx(Wr, { ...o, ...r, ref: t });
  }
);
Br.displayName = Zp;
var Hr = "MenuPortal", [Jp, cs] = qe(Hr, {
  forceMount: void 0
}), ls = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = He(Hr, t);
  return /* @__PURE__ */ l.jsx(Jp, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ue, { present: n || a.open, children: /* @__PURE__ */ l.jsx(hn, { asChild: !0, container: o, children: r }) }) });
};
ls.displayName = Hr;
var ve = "MenuContent", [Qp, Ur] = qe(ve), us = c.forwardRef(
  (e, t) => {
    const n = cs(ve, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = He(ve, e.__scopeMenu), s = _t(ve, e.__scopeMenu);
    return /* @__PURE__ */ l.jsx(bt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ue, { present: r || a.open, children: /* @__PURE__ */ l.jsx(bt.Slot, { scope: e.__scopeMenu, children: s.modal ? /* @__PURE__ */ l.jsx(em, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(tm, { ...o, ref: t }) }) }) });
  }
), em = c.forwardRef(
  (e, t) => {
    const n = He(ve, e.__scopeMenu), r = c.useRef(null), o = J(t, r);
    return c.useEffect(() => {
      const a = r.current;
      if (a) return Cr(a);
    }, []), /* @__PURE__ */ l.jsx(
      Vr,
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
), tm = c.forwardRef((e, t) => {
  const n = He(ve, e.__scopeMenu);
  return /* @__PURE__ */ l.jsx(
    Vr,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), nm = ot("MenuContent.ScrollLock"), Vr = c.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: s,
      disableOutsidePointerEvents: i,
      onEntryFocus: f,
      onEscapeKeyDown: p,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: h,
      onDismiss: v,
      disableOutsideScroll: b,
      ...m
    } = e, w = He(ve, n), g = _t(ve, n), x = At(n), S = as(n), y = Kp(n), [E, _] = c.useState(null), C = c.useRef(null), P = J(t, C, w.onContentChange), A = c.useRef(0), N = c.useRef(""), j = c.useRef(0), I = c.useRef(null), O = c.useRef("right"), L = c.useRef(0), H = b ? gn : c.Fragment, z = b ? { as: nm, allowPinchZoom: !0 } : void 0, B = (D) => {
      const R = N.current + D, $ = y().filter((X) => !X.disabled), Y = document.activeElement, G = $.find((X) => X.ref.current === Y)?.textValue, ee = $.map((X) => X.textValue), ne = mm(ee, R, G), ce = $.find((X) => X.textValue === ne)?.ref.current;
      (function X(Z) {
        N.current = Z, window.clearTimeout(A.current), Z !== "" && (A.current = window.setTimeout(() => X(""), 1e3));
      })(R), ce && setTimeout(() => ce.focus());
    };
    c.useEffect(() => () => window.clearTimeout(A.current), []), Sr();
    const k = c.useCallback((D) => O.current === I.current?.side && vm(D, I.current?.area), []);
    return /* @__PURE__ */ l.jsx(
      Qp,
      {
        scope: n,
        searchRef: N,
        onItemEnter: c.useCallback(
          (D) => {
            k(D) && D.preventDefault();
          },
          [k]
        ),
        onItemLeave: c.useCallback(
          (D) => {
            k(D) || (C.current?.focus(), _(null));
          },
          [k]
        ),
        onTriggerLeave: c.useCallback(
          (D) => {
            k(D) && D.preventDefault();
          },
          [k]
        ),
        pointerGraceTimerRef: j,
        onPointerGraceIntentChange: c.useCallback((D) => {
          I.current = D;
        }, []),
        children: /* @__PURE__ */ l.jsx(H, { ...z, children: /* @__PURE__ */ l.jsx(
          mn,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: F(a, (D) => {
              D.preventDefault(), C.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: s,
            children: /* @__PURE__ */ l.jsx(
              pn,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: p,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: h,
                onDismiss: v,
                children: /* @__PURE__ */ l.jsx(
                  Bp,
                  {
                    asChild: !0,
                    ...S,
                    dir: g.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: _,
                    onEntryFocus: F(f, (D) => {
                      g.isUsingKeyboardRef.current || D.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ l.jsx(
                      Xi,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": As(w.open),
                        "data-radix-menu-content": "",
                        dir: g.dir,
                        ...x,
                        ...m,
                        ref: P,
                        style: { outline: "none", ...m.style },
                        onKeyDown: F(m.onKeyDown, (D) => {
                          const $ = D.target.closest("[data-radix-menu-content]") === D.currentTarget, Y = D.ctrlKey || D.altKey || D.metaKey, G = D.key.length === 1;
                          $ && (D.key === "Tab" && D.preventDefault(), !Y && G && B(D.key));
                          const ee = C.current;
                          if (D.target !== ee || !Vp.includes(D.key)) return;
                          D.preventDefault();
                          const ce = y().filter((X) => !X.disabled).map((X) => X.ref.current);
                          rs.includes(D.key) && ce.reverse(), fm(ce);
                        }),
                        onBlur: F(e.onBlur, (D) => {
                          D.currentTarget.contains(D.target) || (window.clearTimeout(A.current), N.current = "");
                        }),
                        onPointerMove: F(
                          e.onPointerMove,
                          xt((D) => {
                            const R = D.target, $ = L.current !== D.clientX;
                            if (D.currentTarget.contains(R) && $) {
                              const Y = D.clientX > L.current ? "right" : "left";
                              O.current = Y, L.current = D.clientX;
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
us.displayName = ve;
var rm = "MenuGroup", Yr = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(V.div, { role: "group", ...r, ref: t });
  }
);
Yr.displayName = rm;
var om = "MenuLabel", ds = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ l.jsx(V.div, { ...r, ref: t });
  }
);
ds.displayName = om;
var on = "MenuItem", Go = "menu.itemSelect", _n = c.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = c.useRef(null), s = _t(on, e.__scopeMenu), i = Ur(on, e.__scopeMenu), f = J(t, a), p = c.useRef(!1), u = () => {
      const d = a.current;
      if (!n && d) {
        const h = new CustomEvent(Go, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Go, (v) => r?.(v), { once: !0 }), ta(d, h), h.defaultPrevented ? p.current = !1 : s.onClose();
      }
    };
    return /* @__PURE__ */ l.jsx(
      fs,
      {
        ...o,
        ref: f,
        disabled: n,
        onClick: F(e.onClick, u),
        onPointerDown: (d) => {
          e.onPointerDown?.(d), p.current = !0;
        },
        onPointerUp: F(e.onPointerUp, (d) => {
          p.current || d.currentTarget?.click();
        }),
        onKeyDown: F(e.onKeyDown, (d) => {
          const h = i.searchRef.current !== "";
          n || h && d.key === " " || lr.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
_n.displayName = on;
var fs = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, s = Ur(on, n), i = as(n), f = c.useRef(null), p = J(t, f), [u, d] = c.useState(!1), [h, v] = c.useState("");
    return c.useEffect(() => {
      const b = f.current;
      b && v((b.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ l.jsx(
      bt.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ l.jsx(Hp, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ l.jsx(
          V.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: p,
            onPointerMove: F(
              e.onPointerMove,
              xt((b) => {
                r ? s.onItemLeave(b) : (s.onItemEnter(b), b.defaultPrevented || b.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: F(
              e.onPointerLeave,
              xt((b) => s.onItemLeave(b))
            ),
            onFocus: F(e.onFocus, () => d(!0)),
            onBlur: F(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), am = "MenuCheckboxItem", ps = c.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ l.jsx(ws, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ l.jsx(
      _n,
      {
        role: "menuitemcheckbox",
        "aria-checked": an(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Xr(n),
        onSelect: F(
          o.onSelect,
          () => r?.(an(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
ps.displayName = am;
var ms = "MenuRadioGroup", [im, sm] = qe(
  ms,
  { value: void 0, onValueChange: () => {
  } }
), hs = c.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = ie(r);
    return /* @__PURE__ */ l.jsx(im, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ l.jsx(Yr, { ...o, ref: t }) });
  }
);
hs.displayName = ms;
var vs = "MenuRadioItem", gs = c.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = sm(vs, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ l.jsx(ws, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ l.jsx(
      _n,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Xr(a),
        onSelect: F(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
gs.displayName = vs;
var Gr = "MenuItemIndicator", [ws, cm] = qe(
  Gr,
  { checked: !1 }
), bs = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = cm(Gr, n);
    return /* @__PURE__ */ l.jsx(
      ue,
      {
        present: r || an(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ l.jsx(
          V.span,
          {
            ...o,
            ref: t,
            "data-state": Xr(a.checked)
          }
        )
      }
    );
  }
);
bs.displayName = Gr;
var lm = "MenuSeparator", xs = c.forwardRef(
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
xs.displayName = lm;
var um = "MenuArrow", ys = c.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = At(n);
    return /* @__PURE__ */ l.jsx(qi, { ...o, ...r, ref: t });
  }
);
ys.displayName = um;
var Kr = "MenuSub", [dm, Ss] = qe(Kr), Cs = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: o } = e, a = He(Kr, t), s = At(t), [i, f] = c.useState(null), [p, u] = c.useState(null), d = ie(o);
  return c.useEffect(() => (a.open === !1 && d(!1), () => d(!1)), [a.open, d]), /* @__PURE__ */ l.jsx(zr, { ...s, children: /* @__PURE__ */ l.jsx(
    is,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: p,
      onContentChange: u,
      children: /* @__PURE__ */ l.jsx(
        dm,
        {
          scope: t,
          contentId: be(),
          triggerId: be(),
          trigger: i,
          onTriggerChange: f,
          children: n
        }
      )
    }
  ) });
};
Cs.displayName = Kr;
var vt = "MenuSubTrigger", Es = c.forwardRef(
  (e, t) => {
    const n = He(vt, e.__scopeMenu), r = _t(vt, e.__scopeMenu), o = Ss(vt, e.__scopeMenu), a = Ur(vt, e.__scopeMenu), s = c.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: f } = a, p = { __scopeMenu: e.__scopeMenu }, u = c.useCallback(() => {
      s.current && window.clearTimeout(s.current), s.current = null;
    }, []);
    return c.useEffect(() => u, [u]), c.useEffect(() => {
      const d = i.current;
      return () => {
        window.clearTimeout(d), f(null);
      };
    }, [i, f]), /* @__PURE__ */ l.jsx(Br, { asChild: !0, ...p, children: /* @__PURE__ */ l.jsx(
      fs,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": As(n.open),
        ...e,
        ref: ur(t, o.onTriggerChange),
        onClick: (d) => {
          e.onClick?.(d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: F(
          e.onPointerMove,
          xt((d) => {
            a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !s.current && (a.onPointerGraceIntentChange(null), s.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: F(
          e.onPointerLeave,
          xt((d) => {
            u();
            const h = n.content?.getBoundingClientRect();
            if (h) {
              const v = n.content?.dataset.side, b = v === "right", m = b ? -5 : 5, w = h[b ? "left" : "right"], g = h[b ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + m, y: d.clientY },
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
              if (a.onTriggerLeave(d), d.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: F(e.onKeyDown, (d) => {
          const h = a.searchRef.current !== "";
          e.disabled || h && d.key === " " || Yp[r.dir].includes(d.key) && (n.onOpenChange(!0), n.content?.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Es.displayName = vt;
var Rs = "MenuSubContent", Ps = c.forwardRef(
  (e, t) => {
    const n = cs(ve, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = He(ve, e.__scopeMenu), s = _t(ve, e.__scopeMenu), i = Ss(Rs, e.__scopeMenu), f = c.useRef(null), p = J(t, f);
    return /* @__PURE__ */ l.jsx(bt.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(ue, { present: r || a.open, children: /* @__PURE__ */ l.jsx(bt.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ l.jsx(
      Vr,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ref: p,
        align: "start",
        side: s.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          s.isUsingKeyboardRef.current && f.current?.focus(), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: F(e.onFocusOutside, (u) => {
          u.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: F(e.onEscapeKeyDown, (u) => {
          s.onClose(), u.preventDefault();
        }),
        onKeyDown: F(e.onKeyDown, (u) => {
          const d = u.currentTarget.contains(u.target), h = Gp[s.dir].includes(u.key);
          d && h && (a.onOpenChange(!1), i.trigger?.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ps.displayName = Rs;
function As(e) {
  return e ? "open" : "closed";
}
function an(e) {
  return e === "indeterminate";
}
function Xr(e) {
  return an(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function fm(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function pm(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function mm(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((p) => p === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let s = pm(e, Math.max(a, 0));
  o.length === 1 && (s = s.filter((p) => p !== n));
  const f = s.find(
    (p) => p.toLowerCase().startsWith(o.toLowerCase())
  );
  return f !== n ? f : void 0;
}
function hm(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const i = t[a], f = t[s], p = i.x, u = i.y, d = f.x, h = f.y;
    u > r != h > r && n < (d - p) * (r - u) / (h - u) + p && (o = !o);
  }
  return o;
}
function vm(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return hm(n, t);
}
function xt(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var gm = ss, wm = Br, bm = ls, xm = us, ym = Yr, Sm = ds, Cm = _n, Em = ps, Rm = hs, Pm = gs, Am = bs, _m = xs, Tm = ys, Om = Cs, Dm = Es, Nm = Ps, Tn = "DropdownMenu", [Im, dv] = Se(
  Tn,
  [os]
), se = os(), [Mm, _s] = Im(Tn), Ts = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: s,
    modal: i = !0
  } = e, f = se(t), p = c.useRef(null), [u, d] = We({
    prop: o,
    defaultProp: a ?? !1,
    onChange: s,
    caller: Tn
  });
  return /* @__PURE__ */ l.jsx(
    Mm,
    {
      scope: t,
      triggerId: be(),
      triggerRef: p,
      contentId: be(),
      open: u,
      onOpenChange: d,
      onOpenToggle: c.useCallback(() => d((h) => !h), [d]),
      modal: i,
      children: /* @__PURE__ */ l.jsx(gm, { ...f, open: u, onOpenChange: d, dir: r, modal: i, children: n })
    }
  );
};
Ts.displayName = Tn;
var Os = "DropdownMenuTrigger", Ds = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = _s(Os, n), s = se(n);
    return /* @__PURE__ */ l.jsx(wm, { asChild: !0, ...s, children: /* @__PURE__ */ l.jsx(
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
        ref: ur(t, a.triggerRef),
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
Ds.displayName = Os;
var jm = "DropdownMenuPortal", Ns = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = se(t);
  return /* @__PURE__ */ l.jsx(bm, { ...r, ...n });
};
Ns.displayName = jm;
var Is = "DropdownMenuContent", Ms = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = _s(Is, n), a = se(n), s = c.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      xm,
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
          const f = i.detail.originalEvent, p = f.button === 0 && f.ctrlKey === !0, u = f.button === 2 || p;
          (!o.modal || u) && (s.current = !0);
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
Ms.displayName = Is;
var km = "DropdownMenuGroup", js = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
    return /* @__PURE__ */ l.jsx(ym, { ...o, ...r, ref: t });
  }
);
js.displayName = km;
var Lm = "DropdownMenuLabel", ks = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
    return /* @__PURE__ */ l.jsx(Sm, { ...o, ...r, ref: t });
  }
);
ks.displayName = Lm;
var $m = "DropdownMenuItem", Ls = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
    return /* @__PURE__ */ l.jsx(Cm, { ...o, ...r, ref: t });
  }
);
Ls.displayName = $m;
var Fm = "DropdownMenuCheckboxItem", $s = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(Em, { ...o, ...r, ref: t });
});
$s.displayName = Fm;
var zm = "DropdownMenuRadioGroup", Fs = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(Rm, { ...o, ...r, ref: t });
});
Fs.displayName = zm;
var Wm = "DropdownMenuRadioItem", zs = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(Pm, { ...o, ...r, ref: t });
});
zs.displayName = Wm;
var Bm = "DropdownMenuItemIndicator", Ws = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(Am, { ...o, ...r, ref: t });
});
Ws.displayName = Bm;
var Hm = "DropdownMenuSeparator", Bs = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(_m, { ...o, ...r, ref: t });
});
Bs.displayName = Hm;
var Um = "DropdownMenuArrow", Vm = c.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
    return /* @__PURE__ */ l.jsx(Tm, { ...o, ...r, ref: t });
  }
);
Vm.displayName = Um;
var Ym = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: o, defaultOpen: a } = e, s = se(t), [i, f] = We({
    prop: r,
    defaultProp: a ?? !1,
    onChange: o,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ l.jsx(Om, { ...s, open: i, onOpenChange: f, children: n });
}, Gm = "DropdownMenuSubTrigger", Hs = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(Dm, { ...o, ...r, ref: t });
});
Hs.displayName = Gm;
var Km = "DropdownMenuSubContent", Us = c.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = se(n);
  return /* @__PURE__ */ l.jsx(
    Nm,
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
Us.displayName = Km;
var Xm = Ts, qm = Ds, Vs = Ns, Zm = Ms, Jm = js, Qm = ks, eh = Ls, th = $s, nh = Fs, rh = zs, Ys = Ws, oh = Bs, ah = Ym, ih = Hs, sh = Us;
function fv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Xm, { "data-slot": "dropdown-menu", ...e });
}
function pv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Vs, { "data-slot": "dropdown-menu-portal", ...e });
}
function mv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(
    qm,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function hv({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(Vs, { children: /* @__PURE__ */ l.jsx(
    Zm,
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
function vv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(Jm, { "data-slot": "dropdown-menu-group", ...e });
}
function gv({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ l.jsx(
    eh,
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
function wv({
  className: e,
  children: t,
  checked: n,
  ...r
}) {
  return /* @__PURE__ */ l.jsxs(
    th,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: M(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: n,
      ...r,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Ys, { children: /* @__PURE__ */ l.jsx(Zn, { className: "size-4" }) }) }),
        t
      ]
    }
  );
}
function bv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(
    nh,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function xv({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsxs(
    rh,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: M(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ l.jsx("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ l.jsx(Ys, { children: /* @__PURE__ */ l.jsx(Ac, { className: "size-2 fill-current" }) }) }),
        t
      ]
    }
  );
}
function yv({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ l.jsx(
    Qm,
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
function Sv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    oh,
    {
      "data-slot": "dropdown-menu-separator",
      className: M("bg-border -mx-1 my-1 h-px", e),
      ...t
    }
  );
}
function Cv({
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
function Ev({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(ah, { "data-slot": "dropdown-menu-sub", ...e });
}
function Rv({
  className: e,
  inset: t,
  children: n,
  ...r
}) {
  return /* @__PURE__ */ l.jsxs(
    ih,
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
        /* @__PURE__ */ l.jsx(_c, { className: "ml-auto size-4" })
      ]
    }
  );
}
function Pv({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    sh,
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
var ch = "Label", Gs = c.forwardRef((e, t) => /* @__PURE__ */ l.jsx(
  V.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      n.target.closest("button, input, select, textarea") || (e.onMouseDown?.(n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Gs.displayName = ch;
var lh = Gs;
function Av({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    lh,
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
var On = "Popover", [Ks, _v] = Se(On, [
  An
]), Tt = An(), [uh, Ue] = Ks(On), Xs = (e) => {
  const {
    __scopePopover: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !1
  } = e, i = Tt(t), f = c.useRef(null), [p, u] = c.useState(!1), [d, h] = We({
    prop: r,
    defaultProp: o ?? !1,
    onChange: a,
    caller: On
  });
  return /* @__PURE__ */ l.jsx(zr, { ...i, children: /* @__PURE__ */ l.jsx(
    uh,
    {
      scope: t,
      contentId: be(),
      triggerRef: f,
      open: d,
      onOpenChange: h,
      onOpenToggle: c.useCallback(() => h((v) => !v), [h]),
      hasCustomAnchor: p,
      onCustomAnchorAdd: c.useCallback(() => u(!0), []),
      onCustomAnchorRemove: c.useCallback(() => u(!1), []),
      modal: s,
      children: n
    }
  ) });
};
Xs.displayName = On;
var qs = "PopoverAnchor", Zs = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ue(qs, n), a = Tt(n), { onCustomAnchorAdd: s, onCustomAnchorRemove: i } = o;
    return c.useEffect(() => (s(), () => i()), [s, i]), /* @__PURE__ */ l.jsx(Wr, { ...a, ...r, ref: t });
  }
);
Zs.displayName = qs;
var Js = "PopoverTrigger", Qs = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ue(Js, n), a = Tt(n), s = J(t, o.triggerRef), i = /* @__PURE__ */ l.jsx(
      V.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": oc(o.open),
        ...r,
        ref: s,
        onClick: F(e.onClick, o.onOpenToggle)
      }
    );
    return o.hasCustomAnchor ? i : /* @__PURE__ */ l.jsx(Wr, { asChild: !0, ...a, children: i });
  }
);
Qs.displayName = Js;
var qr = "PopoverPortal", [dh, fh] = Ks(qr, {
  forceMount: void 0
}), ec = (e) => {
  const { __scopePopover: t, forceMount: n, children: r, container: o } = e, a = Ue(qr, t);
  return /* @__PURE__ */ l.jsx(dh, { scope: t, forceMount: n, children: /* @__PURE__ */ l.jsx(ue, { present: n || a.open, children: /* @__PURE__ */ l.jsx(hn, { asChild: !0, container: o, children: r }) }) });
};
ec.displayName = qr;
var st = "PopoverContent", tc = c.forwardRef(
  (e, t) => {
    const n = fh(st, e.__scopePopover), { forceMount: r = n.forceMount, ...o } = e, a = Ue(st, e.__scopePopover);
    return /* @__PURE__ */ l.jsx(ue, { present: r || a.open, children: a.modal ? /* @__PURE__ */ l.jsx(mh, { ...o, ref: t }) : /* @__PURE__ */ l.jsx(hh, { ...o, ref: t }) });
  }
);
tc.displayName = st;
var ph = ot("PopoverContent.RemoveScroll"), mh = c.forwardRef(
  (e, t) => {
    const n = Ue(st, e.__scopePopover), r = c.useRef(null), o = J(t, r), a = c.useRef(!1);
    return c.useEffect(() => {
      const s = r.current;
      if (s) return Cr(s);
    }, []), /* @__PURE__ */ l.jsx(gn, { as: ph, allowPinchZoom: !0, children: /* @__PURE__ */ l.jsx(
      nc,
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
            const i = s.detail.originalEvent, f = i.button === 0 && i.ctrlKey === !0, p = i.button === 2 || f;
            a.current = p;
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
), hh = c.forwardRef(
  (e, t) => {
    const n = Ue(st, e.__scopePopover), r = c.useRef(!1), o = c.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      nc,
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
), nc = c.forwardRef(
  (e, t) => {
    const {
      __scopePopover: n,
      trapFocus: r,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEscapeKeyDown: i,
      onPointerDownOutside: f,
      onFocusOutside: p,
      onInteractOutside: u,
      ...d
    } = e, h = Ue(st, n), v = Tt(n);
    return Sr(), /* @__PURE__ */ l.jsx(
      mn,
      {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: o,
        onUnmountAutoFocus: a,
        children: /* @__PURE__ */ l.jsx(
          pn,
          {
            asChild: !0,
            disableOutsidePointerEvents: s,
            onInteractOutside: u,
            onEscapeKeyDown: i,
            onPointerDownOutside: f,
            onFocusOutside: p,
            onDismiss: () => h.onOpenChange(!1),
            children: /* @__PURE__ */ l.jsx(
              Xi,
              {
                "data-state": oc(h.open),
                role: "dialog",
                id: h.contentId,
                ...v,
                ...d,
                ref: t,
                style: {
                  ...d.style,
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
), rc = "PopoverClose", vh = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Ue(rc, n);
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
vh.displayName = rc;
var gh = "PopoverArrow", wh = c.forwardRef(
  (e, t) => {
    const { __scopePopover: n, ...r } = e, o = Tt(n);
    return /* @__PURE__ */ l.jsx(qi, { ...o, ...r, ref: t });
  }
);
wh.displayName = gh;
function oc(e) {
  return e ? "open" : "closed";
}
var bh = Xs, xh = Zs, yh = Qs, Sh = ec, Ch = tc;
function Tv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(bh, { "data-slot": "popover", ...e });
}
function Ov({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(yh, { "data-slot": "popover-trigger", ...e });
}
function Dv({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...r
}) {
  return /* @__PURE__ */ l.jsx(Sh, { children: /* @__PURE__ */ l.jsx(
    Ch,
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
function Nv({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(xh, { "data-slot": "popover-anchor", ...e });
}
export {
  Oh as Accordion,
  Ih as AccordionContent,
  Dh as AccordionItem,
  Nh as AccordionTrigger,
  Mh as Alert,
  kh as AlertDescription,
  jh as AlertTitle,
  Lh as AspectRatio,
  Fh as Avatar,
  Wh as AvatarFallback,
  zh as AvatarImage,
  Bh as Badge,
  Hh as Breadcrumb,
  Xh as BreadcrumbEllipsis,
  Vh as BreadcrumbItem,
  Yh as BreadcrumbLink,
  Uh as BreadcrumbList,
  Gh as BreadcrumbPage,
  Kh as BreadcrumbSeparator,
  Ic as Button,
  Ra as Card,
  Pa as CardContent,
  Xl as CardDescription,
  ql as CardFooter,
  Gl as CardHeader,
  Kl as CardTitle,
  Qh as Dialog,
  Ed as DialogClose,
  Rd as DialogContent,
  jd as DialogDescription,
  Id as DialogFooter,
  Nd as DialogHeader,
  vi as DialogOverlay,
  hi as DialogPortal,
  Md as DialogTitle,
  ev as DialogTrigger,
  rv as Drawer,
  av as DrawerClose,
  iv as DrawerContent,
  uv as DrawerDescription,
  cv as DrawerFooter,
  sv as DrawerHeader,
  ff as DrawerOverlay,
  df as DrawerPortal,
  lv as DrawerTitle,
  ov as DrawerTrigger,
  fv as DropdownMenu,
  wv as DropdownMenuCheckboxItem,
  hv as DropdownMenuContent,
  vv as DropdownMenuGroup,
  gv as DropdownMenuItem,
  yv as DropdownMenuLabel,
  pv as DropdownMenuPortal,
  bv as DropdownMenuRadioGroup,
  xv as DropdownMenuRadioItem,
  Sv as DropdownMenuSeparator,
  Cv as DropdownMenuShortcut,
  Ev as DropdownMenuSub,
  Pv as DropdownMenuSubContent,
  Rv as DropdownMenuSubTrigger,
  mv as DropdownMenuTrigger,
  Tl as Image,
  tv as InnerDialog,
  Pd as InnerDialogClose,
  Ad as InnerDialogContent,
  Dd as InnerDialogDescription,
  Td as InnerDialogFooter,
  _d as InnerDialogHeader,
  Od as InnerDialogTitle,
  nv as InnerDialogTrigger,
  Av as Label,
  Rl as NativeSelect,
  Tv as Popover,
  Nv as PopoverAnchor,
  Dv as PopoverContent,
  Ov as PopoverTrigger,
  fu as ScrollArea,
  za as ScrollBar,
  Yl as badgeVariants,
  Nc as buttonVariants,
  M as cn,
  Pl as imageVariants
};
