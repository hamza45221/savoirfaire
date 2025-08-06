var qe = Object.defineProperty;
var ke = (e, t, r) => t in e ? qe(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var f = (e, t, r) => (ke(e, typeof t != "symbol" ? t + "" : t, r),
    r);
import {g as Ce, c as w} from "./_commonjsHelpers.042e6b4d.js";
import {l as Ye} from "./_plugin-vue_export-helper.9c4d1f6f.js";
import {x as Ze} from "./entry.70905c58.js";
var B = {}, Je = {
    get exports() {
        return B
    },
    set exports(e) {
        B = e
    }
}, ae = !1, l, G, H, E, j, Ae, C, W, X, R, Oe, K, V, Se, Me;
function c() {
    if (!ae) {
        ae = !0;
        var e = navigator.userAgent
            , t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e)
            , r = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
        if (K = /\b(iPhone|iP[ao]d)/.exec(e),
            V = /\b(iP[ao]d)/.exec(e),
            R = /Android/i.exec(e),
            Se = /FBAN\/\w+;/i.exec(e),
            Me = /Mobile/i.exec(e),
            Oe = !!/Win64/.exec(e),
            t) {
            l = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN,
            l && document && document.documentMode && (l = document.documentMode);
            var a = /(?:Trident\/(\d+.\d+))/.exec(e);
            Ae = a ? parseFloat(a[1]) + 4 : l,
                G = t[2] ? parseFloat(t[2]) : NaN,
                H = t[3] ? parseFloat(t[3]) : NaN,
                E = t[4] ? parseFloat(t[4]) : NaN,
                E ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(e),
                    j = t && t[1] ? parseFloat(t[1]) : NaN) : j = NaN
        } else
            l = G = H = j = E = NaN;
        if (r) {
            if (r[1]) {
                var n = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
                C = n ? parseFloat(n[1].replace("_", ".")) : !0
            } else
                C = !1;
            W = !!r[2],
                X = !!r[3]
        } else
            C = W = X = !1
    }
}
var q = {
    ie: function() {
        return c() || l
    },
    ieCompatibilityMode: function() {
        return c() || Ae > l
    },
    ie64: function() {
        return q.ie() && Oe
    },
    firefox: function() {
        return c() || G
    },
    opera: function() {
        return c() || H
    },
    webkit: function() {
        return c() || E
    },
    safari: function() {
        return q.webkit()
    },
    chrome: function() {
        return c() || j
    },
    windows: function() {
        return c() || W
    },
    osx: function() {
        return c() || C
    },
    linux: function() {
        return c() || X
    },
    iphone: function() {
        return c() || K
    },
    mobile: function() {
        return c() || K || V || R || Me
    },
    nativeApp: function() {
        return c() || Se
    },
    android: function() {
        return c() || R
    },
    ipad: function() {
        return c() || V
    }
}, Qe = q, T = !!(typeof window < "u" && window.document && window.document.createElement), et = {
    canUseDOM: T,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: T && !!(window.addEventListener || window.attachEvent),
    canUseViewport: T && !!window.screen,
    isInWorker: !T
}, tt = et, De = tt, Pe;
De.canUseDOM && (Pe = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function rt(e, t) {
    if (!De.canUseDOM || t && !("addEventListener"in document))
        return !1;
    var r = "on" + e
        , a = r in document;
    if (!a) {
        var n = document.createElement("div");
        n.setAttribute(r, "return;"),
            a = typeof n[r] == "function"
    }
    return !a && Pe && e === "wheel" && (a = document.implementation.hasFeature("Events.wheel", "3.0")),
        a
}
var at = rt
    , nt = Qe
    , it = at
    , ne = 10
    , ie = 40
    , oe = 800;
function Fe(e) {
    var t = 0
        , r = 0
        , a = 0
        , n = 0;
    return "detail"in e && (r = e.detail),
    "wheelDelta"in e && (r = -e.wheelDelta / 120),
    "wheelDeltaY"in e && (r = -e.wheelDeltaY / 120),
    "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
    "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = r,
        r = 0),
        a = t * ne,
        n = r * ne,
    "deltaY"in e && (n = e.deltaY),
    "deltaX"in e && (a = e.deltaX),
    (a || n) && e.deltaMode && (e.deltaMode == 1 ? (a *= ie,
        n *= ie) : (a *= oe,
        n *= oe)),
    a && !t && (t = a < 1 ? -1 : 1),
    n && !r && (r = n < 1 ? -1 : 1),
        {
            spinX: t,
            spinY: r,
            pixelX: a,
            pixelY: n
        }
}
Fe.getEventType = function() {
    return nt.firefox() ? "DOMMouseScroll" : it("wheel") ? "wheel" : "mousewheel"
}
;
var ot = Fe;
(function(e) {
        e.exports = ot
    }
)(Je);
const st = Ce(B);
var A = {}
    , ct = {
    get exports() {
        return A
    },
    set exports(e) {
        A = e
    }
}
    , se = typeof document < "u" ? document.createElement("p").style : {}
    , ce = ["O", "ms", "Moz", "Webkit"]
    , I = /([A-Z])/g
    , N = {};
function Le(e) {
    if (e = e.replace(/-([a-z])/g, function(n, i) {
        return i.toUpperCase()
    }),
    se[e] !== void 0)
        return e;
    for (var t = e.charAt(0).toUpperCase() + e.slice(1), r = ce.length; r--; ) {
        var a = ce[r] + t;
        if (se[a] !== void 0)
            return a
    }
    return e
}
function ut(e) {
    return e in N ? N[e] : N[e] = Le(e)
}
function ht(e) {
    return e = Le(e),
    I.test(e) && (e = "-" + e.replace(I, "-$1"),
        I.lastIndex = 0),
        e.toLowerCase()
}
ct.exports = ut;
A.dash = ht;
var k = {}
    , ft = {
    get exports() {
        return k
    },
    set exports(e) {
        k = e
    }
};
function pt(e, t) {
    for (var r = -1, a = e == null ? 0 : e.length; ++r < a && t(e[r], r, e) !== !1; )
        ;
    return e
}
var vt = pt;
function lt(e) {
    return function(t, r, a) {
        for (var n = -1, i = Object(t), s = a(t), h = s.length; h--; ) {
            var p = s[e ? h : ++n];
            if (r(i[p], p, i) === !1)
                break
        }
        return t
    }
}
var dt = lt
    , gt = dt
    , _t = gt()
    , bt = _t;
function mt(e, t) {
    for (var r = -1, a = Array(e); ++r < e; )
        a[r] = t(r);
    return a
}
var $t = mt
    , yt = typeof w == "object" && w && w.Object === Object && w
    , Ie = yt
    , wt = Ie
    , Tt = typeof self == "object" && self && self.Object === Object && self
    , xt = wt || Tt || Function("return this")()
    , v = xt
    , Et = v
    , jt = Et.Symbol
    , M = jt
    , ue = M
    , Ne = Object.prototype
    , Ct = Ne.hasOwnProperty
    , At = Ne.toString
    , y = ue ? ue.toStringTag : void 0;
function Ot(e) {
    var t = Ct.call(e, y)
        , r = e[y];
    try {
        e[y] = void 0;
        var a = !0
    } catch {}
    var n = At.call(e);
    return a && (t ? e[y] = r : delete e[y]),
        n
}
var St = Ot
    , Mt = Object.prototype
    , Dt = Mt.toString;
function Pt(e) {
    return Dt.call(e)
}
var Ft = Pt
    , he = M
    , Lt = St
    , It = Ft
    , Nt = "[object Null]"
    , Ut = "[object Undefined]"
    , fe = he ? he.toStringTag : void 0;
function zt(e) {
    return e == null ? e === void 0 ? Ut : Nt : fe && fe in Object(e) ? Lt(e) : It(e)
}
var D = zt;
function Bt(e) {
    return e != null && typeof e == "object"
}
var te = Bt
    , Gt = D
    , Ht = te
    , Wt = "[object Arguments]";
function Xt(e) {
    return Ht(e) && Gt(e) == Wt
}
var Rt = Xt
    , pe = Rt
    , Kt = te
    , Ue = Object.prototype
    , Vt = Ue.hasOwnProperty
    , qt = Ue.propertyIsEnumerable
    , kt = pe(function() {
    return arguments
}()) ? pe : function(e) {
    return Kt(e) && Vt.call(e, "callee") && !qt.call(e, "callee")
}
    , Yt = kt
    , Zt = Array.isArray
    , ze = Zt
    , O = {}
    , Jt = {
    get exports() {
        return O
    },
    set exports(e) {
        O = e
    }
};
function Qt() {
    return !1
}
var er = Qt;
(function(e, t) {
        var r = v
            , a = er
            , n = t && !t.nodeType && t
            , i = n && !0 && e && !e.nodeType && e
            , s = i && i.exports === n
            , h = s ? r.Buffer : void 0
            , p = h ? h.isBuffer : void 0
            , u = p || a;
        e.exports = u
    }
)(Jt, O);
var tr = 9007199254740991
    , rr = /^(?:0|[1-9]\d*)$/;
function ar(e, t) {
    var r = typeof e;
    return t = t ?? tr,
    !!t && (r == "number" || r != "symbol" && rr.test(e)) && e > -1 && e % 1 == 0 && e < t
}
var nr = ar
    , ir = 9007199254740991;
function or(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ir
}
var Be = or
    , sr = D
    , cr = Be
    , ur = te
    , hr = "[object Arguments]"
    , fr = "[object Array]"
    , pr = "[object Boolean]"
    , vr = "[object Date]"
    , lr = "[object Error]"
    , dr = "[object Function]"
    , gr = "[object Map]"
    , _r = "[object Number]"
    , br = "[object Object]"
    , mr = "[object RegExp]"
    , $r = "[object Set]"
    , yr = "[object String]"
    , wr = "[object WeakMap]"
    , Tr = "[object ArrayBuffer]"
    , xr = "[object DataView]"
    , Er = "[object Float32Array]"
    , jr = "[object Float64Array]"
    , Cr = "[object Int8Array]"
    , Ar = "[object Int16Array]"
    , Or = "[object Int32Array]"
    , Sr = "[object Uint8Array]"
    , Mr = "[object Uint8ClampedArray]"
    , Dr = "[object Uint16Array]"
    , Pr = "[object Uint32Array]"
    , o = {};
o[Er] = o[jr] = o[Cr] = o[Ar] = o[Or] = o[Sr] = o[Mr] = o[Dr] = o[Pr] = !0;
o[hr] = o[fr] = o[Tr] = o[pr] = o[xr] = o[vr] = o[lr] = o[dr] = o[gr] = o[_r] = o[br] = o[mr] = o[$r] = o[yr] = o[wr] = !1;
function Fr(e) {
    return ur(e) && cr(e.length) && !!o[sr(e)]
}
var Lr = Fr;
function Ir(e) {
    return function(t) {
        return e(t)
    }
}
var Nr = Ir
    , S = {}
    , Ur = {
    get exports() {
        return S
    },
    set exports(e) {
        S = e
    }
};
(function(e, t) {
        var r = Ie
            , a = t && !t.nodeType && t
            , n = a && !0 && e && !e.nodeType && e
            , i = n && n.exports === a
            , s = i && r.process
            , h = function() {
            try {
                var p = n && n.require && n.require("util").types;
                return p || s && s.binding && s.binding("util")
            } catch {}
        }();
        e.exports = h
    }
)(Ur, S);
var zr = Lr
    , Br = Nr
    , ve = S
    , le = ve && ve.isTypedArray
    , Gr = le ? Br(le) : zr
    , Hr = Gr
    , Wr = $t
    , Xr = Yt
    , Rr = ze
    , Kr = O
    , Vr = nr
    , qr = Hr
    , kr = Object.prototype
    , Yr = kr.hasOwnProperty;
function Zr(e, t) {
    var r = Rr(e)
        , a = !r && Xr(e)
        , n = !r && !a && Kr(e)
        , i = !r && !a && !n && qr(e)
        , s = r || a || n || i
        , h = s ? Wr(e.length, String) : []
        , p = h.length;
    for (var u in e)
        (t || Yr.call(e, u)) && !(s && (u == "length" || n && (u == "offset" || u == "parent") || i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || Vr(u, p))) && h.push(u);
    return h
}
var Jr = Zr
    , Qr = Object.prototype;
function ea(e) {
    var t = e && e.constructor
        , r = typeof t == "function" && t.prototype || Qr;
    return e === r
}
var ta = ea;
function ra(e, t) {
    return function(r) {
        return e(t(r))
    }
}
var aa = ra
    , na = aa
    , ia = na(Object.keys, Object)
    , oa = ia
    , sa = ta
    , ca = oa
    , ua = Object.prototype
    , ha = ua.hasOwnProperty;
function fa(e) {
    if (!sa(e))
        return ca(e);
    var t = [];
    for (var r in Object(e))
        ha.call(e, r) && r != "constructor" && t.push(r);
    return t
}
var pa = fa;
function va(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function")
}
var Ge = va
    , la = D
    , da = Ge
    , ga = "[object AsyncFunction]"
    , _a = "[object Function]"
    , ba = "[object GeneratorFunction]"
    , ma = "[object Proxy]";
function $a(e) {
    if (!da(e))
        return !1;
    var t = la(e);
    return t == _a || t == ba || t == ga || t == ma
}
var He = $a
    , ya = He
    , wa = Be;
function Ta(e) {
    return e != null && wa(e.length) && !ya(e)
}
var We = Ta
    , xa = Jr
    , Ea = pa
    , ja = We;
function Ca(e) {
    return ja(e) ? xa(e) : Ea(e)
}
var Aa = Ca
    , Oa = bt
    , Sa = Aa;
function Ma(e, t) {
    return e && Oa(e, t, Sa)
}
var Da = Ma
    , Pa = We;
function Fa(e, t) {
    return function(r, a) {
        if (r == null)
            return r;
        if (!Pa(r))
            return e(r, a);
        for (var n = r.length, i = t ? n : -1, s = Object(r); (t ? i-- : ++i < n) && a(s[i], i, s) !== !1; )
            ;
        return r
    }
}
var La = Fa
    , Ia = Da
    , Na = La
    , Ua = Na(Ia)
    , za = Ua;
function Ba(e) {
    return e
}
var Ga = Ba
    , Ha = Ga;
function Wa(e) {
    return typeof e == "function" ? e : Ha
}
var Xa = Wa
    , Ra = vt
    , Ka = za
    , Va = Xa
    , qa = ze;
function ka(e, t) {
    var r = qa(e) ? Ra : Ka;
    return r(e, Va(t))
}
var Ya = ka;
(function(e) {
        e.exports = Ya
    }
)(ft);
const x = Ce(k);
function Za() {
    this.__data__ = [],
        this.size = 0
}
var Ja = Za;
function Qa(e, t) {
    return e === t || e !== e && t !== t
}
var en = Qa
    , tn = en;
function rn(e, t) {
    for (var r = e.length; r--; )
        if (tn(e[r][0], t))
            return r;
    return -1
}
var P = rn
    , an = P
    , nn = Array.prototype
    , on = nn.splice;
function sn(e) {
    var t = this.__data__
        , r = an(t, e);
    if (r < 0)
        return !1;
    var a = t.length - 1;
    return r == a ? t.pop() : on.call(t, r, 1),
        --this.size,
        !0
}
var cn = sn
    , un = P;
function hn(e) {
    var t = this.__data__
        , r = un(t, e);
    return r < 0 ? void 0 : t[r][1]
}
var fn = hn
    , pn = P;
function vn(e) {
    return pn(this.__data__, e) > -1
}
var ln = vn
    , dn = P;
function gn(e, t) {
    var r = this.__data__
        , a = dn(r, e);
    return a < 0 ? (++this.size,
        r.push([e, t])) : r[a][1] = t,
        this
}
var _n = gn
    , bn = Ja
    , mn = cn
    , $n = fn
    , yn = ln
    , wn = _n;
function g(e) {
    var t = -1
        , r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var a = e[t];
        this.set(a[0], a[1])
    }
}
g.prototype.clear = bn;
g.prototype.delete = mn;
g.prototype.get = $n;
g.prototype.has = yn;
g.prototype.set = wn;
var Tn = g
    , xn = v
    , En = xn["__core-js_shared__"]
    , jn = En
    , U = jn
    , de = function() {
    var e = /[^.]+$/.exec(U && U.keys && U.keys.IE_PROTO || "");
    return e ? "Symbol(src)_1." + e : ""
}();
function Cn(e) {
    return !!de && de in e
}
var An = Cn
    , On = Function.prototype
    , Sn = On.toString;
function Mn(e) {
    if (e != null) {
        try {
            return Sn.call(e)
        } catch {}
        try {
            return e + ""
        } catch {}
    }
    return ""
}
var Xe = Mn
    , Dn = He
    , Pn = An
    , Fn = Ge
    , Ln = Xe
    , In = /[\\^$.*+?()[\]{}|]/g
    , Nn = /^\[object .+?Constructor\]$/
    , Un = Function.prototype
    , zn = Object.prototype
    , Bn = Un.toString
    , Gn = zn.hasOwnProperty
    , Hn = RegExp("^" + Bn.call(Gn).replace(In, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Wn(e) {
    if (!Fn(e) || Pn(e))
        return !1;
    var t = Dn(e) ? Hn : Nn;
    return t.test(Ln(e))
}
var Xn = Wn;
function Rn(e, t) {
    return e == null ? void 0 : e[t]
}
var Kn = Rn
    , Vn = Xn
    , qn = Kn;
function kn(e, t) {
    var r = qn(e, t);
    return Vn(r) ? r : void 0
}
var _ = kn
    , Yn = _
    , Zn = v
    , Jn = Yn(Zn, "Map")
    , Re = Jn
    , Qn = _
    , ei = Qn(Object, "create")
    , F = ei
    , ge = F;
function ti() {
    this.__data__ = ge ? ge(null) : {},
        this.size = 0
}
var ri = ti;
function ai(e) {
    var t = this.has(e) && delete this.__data__[e];
    return this.size -= t ? 1 : 0,
        t
}
var ni = ai
    , ii = F
    , oi = "__lodash_hash_undefined__"
    , si = Object.prototype
    , ci = si.hasOwnProperty;
function ui(e) {
    var t = this.__data__;
    if (ii) {
        var r = t[e];
        return r === oi ? void 0 : r
    }
    return ci.call(t, e) ? t[e] : void 0
}
var hi = ui
    , fi = F
    , pi = Object.prototype
    , vi = pi.hasOwnProperty;
function li(e) {
    var t = this.__data__;
    return fi ? t[e] !== void 0 : vi.call(t, e)
}
var di = li
    , gi = F
    , _i = "__lodash_hash_undefined__";
function bi(e, t) {
    var r = this.__data__;
    return this.size += this.has(e) ? 0 : 1,
        r[e] = gi && t === void 0 ? _i : t,
        this
}
var mi = bi
    , $i = ri
    , yi = ni
    , wi = hi
    , Ti = di
    , xi = mi;
function b(e) {
    var t = -1
        , r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var a = e[t];
        this.set(a[0], a[1])
    }
}
b.prototype.clear = $i;
b.prototype.delete = yi;
b.prototype.get = wi;
b.prototype.has = Ti;
b.prototype.set = xi;
var Ei = b
    , _e = Ei
    , ji = Tn
    , Ci = Re;
function Ai() {
    this.size = 0,
        this.__data__ = {
            hash: new _e,
            map: new (Ci || ji),
            string: new _e
        }
}
var Oi = Ai;
function Si(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
}
var Mi = Si
    , Di = Mi;
function Pi(e, t) {
    var r = e.__data__;
    return Di(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
}
var L = Pi
    , Fi = L;
function Li(e) {
    var t = Fi(this, e).delete(e);
    return this.size -= t ? 1 : 0,
        t
}
var Ii = Li
    , Ni = L;
function Ui(e) {
    return Ni(this, e).get(e)
}
var zi = Ui
    , Bi = L;
function Gi(e) {
    return Bi(this, e).has(e)
}
var Hi = Gi
    , Wi = L;
function Xi(e, t) {
    var r = Wi(this, e)
        , a = r.size;
    return r.set(e, t),
        this.size += r.size == a ? 0 : 1,
        this
}
var Ri = Xi
    , Ki = Oi
    , Vi = Ii
    , qi = zi
    , ki = Hi
    , Yi = Ri;
function m(e) {
    var t = -1
        , r = e == null ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var a = e[t];
        this.set(a[0], a[1])
    }
}
m.prototype.clear = Ki;
m.prototype.delete = Vi;
m.prototype.get = qi;
m.prototype.has = ki;
m.prototype.set = Yi;
var Zi = m
    , Ji = v;
Ji.Uint8Array;
var be = M
    , me = be ? be.prototype : void 0;
me && me.valueOf;
var Qi = _
    , eo = v
    , to = Qi(eo, "DataView")
    , ro = to
    , ao = _
    , no = v
    , io = ao(no, "Promise")
    , oo = io
    , so = _
    , co = v
    , uo = so(co, "Set")
    , ho = uo
    , fo = _
    , po = v
    , vo = fo(po, "WeakMap")
    , lo = vo
    , Y = ro
    , Z = Re
    , J = oo
    , Q = ho
    , ee = lo
    , Ke = D
    , $ = Xe
    , $e = "[object Map]"
    , go = "[object Object]"
    , ye = "[object Promise]"
    , we = "[object Set]"
    , Te = "[object WeakMap]"
    , xe = "[object DataView]"
    , _o = $(Y)
    , bo = $(Z)
    , mo = $(J)
    , $o = $(Q)
    , yo = $(ee)
    , d = Ke;
(Y && d(new Y(new ArrayBuffer(1))) != xe || Z && d(new Z) != $e || J && d(J.resolve()) != ye || Q && d(new Q) != we || ee && d(new ee) != Te) && (d = function(e) {
        var t = Ke(e)
            , r = t == go ? e.constructor : void 0
            , a = r ? $(r) : "";
        if (a)
            switch (a) {
                case _o:
                    return xe;
                case bo:
                    return $e;
                case mo:
                    return ye;
                case $o:
                    return we;
                case yo:
                    return Te
            }
        return t
    }
);
var Ve = Zi
    , wo = "Expected a function";
function re(e, t) {
    if (typeof e != "function" || t != null && typeof t != "function")
        throw new TypeError(wo);
    var r = function() {
        var a = arguments
            , n = t ? t.apply(this, a) : a[0]
            , i = r.cache;
        if (i.has(n))
            return i.get(n);
        var s = e.apply(this, a);
        return r.cache = i.set(n, s) || i,
            s
    };
    return r.cache = new (re.Cache || Ve),
        r
}
re.Cache = Ve;
var To = re
    , xo = To
    , Eo = 500;
function jo(e) {
    var t = xo(e, function(a) {
        return r.size === Eo && r.clear(),
            a
    })
        , r = t.cache;
    return t
}
var Co = jo
    , Ao = Co
    , Oo = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
    , So = /\\(\\)?/g;
Ao(function(e) {
    var t = [];
    return e.charCodeAt(0) === 46 && t.push(""),
        e.replace(Oo, function(r, a, n, i) {
            t.push(n ? i.replace(So, "$1") : a || r)
        }),
        t
});
var Ee = M
    , je = Ee ? Ee.prototype : void 0;
je && je.toString;
const z = (e, t=0) => {
        const r = e.getBoundingClientRect();
        return {
            bottom: r.bottom,
            height: r.height,
            left: r.left,
            top: r.top + t,
            width: r.width
        }
    }
;
class Lo {
    constructor(t) {
        f(this, "onTouchDown", t => {
                this.isDown = !0,
                    this.scroll.position = this.scroll.current,
                    this.start = t.touches ? t.touches[0].clientX : t.clientX
            }
        );
        f(this, "onTouchMove", t => {
                setTimeout( () => {
                        window.isDragging = !0
                    }
                    , 25);
                const r = t.touches ? t.touches[0].clientX : t.clientX
                    , a = (this.start - r) * 2;
                window.isDragging = !0,
                    this.scroll.target = this.scroll.position + a
            }
        );
        f(this, "onTouchUp", t => {
                setTimeout( () => {
                        window.isDragging = !1
                    }
                    , 50),
                    this.isDown = !1
            }
        );
        f(this, "onWheel", t => {
                const a = st(t).pixelY;
                this.scroll.target += a * this.marqueeSpeed
            }
        );
        f(this, "update", () => {
                this.scroll.target += this.isHovering,
                    this.scroll.current = Ye(this.scroll.current, this.scroll.target, this.scroll.ease);
                const t = Math.round(this.scroll.current % this.widthTotal);
                this.scroll.current < this.scroll.last ? this.direction = "down" : this.direction = "up",
                    x(this.elements, r => {
                            r.position = -this.scroll.current - r.extra;
                            const a = r.position + r.offset + r.width;
                            r.isBefore = a < 0,
                                r.isAfter = a > this.widthTotal,
                            this.direction === "up" && r.isBefore && (r.extra = r.extra - this.widthTotal,
                                r.isBefore = !1,
                                r.isAfter = !1),
                            this.direction === "down" && r.isAfter && (r.extra = r.extra + this.widthTotal,
                                r.isBefore = !1,
                                r.isAfter = !1),
                                r.clamp = r.extra % t,
                                this.transform(r, r.position)
                        }
                    ),
                    this.scroll.last = this.scroll.current,
                    this.scroll.clamp = t,
                    window.requestAnimationFrame(this.update.bind(this))
            }
        );
        f(this, "onResize", () => {
                x(this.elements, t => {
                        this.transform(t, 0);
                        const r = z(t);
                        t.extra = 0,
                            t.width = r.width,
                            t.offset = r.left,
                            t.position = 0
                    }
                ),
                    this.widthTotal = this.element.getBoundingClientRect().width,
                    this.scroll = {
                        ease: .1,
                        position: 0,
                        current: 0,
                        target: 0,
                        last: 0
                    }
            }
        );
        f(this, "addEventListeners", () => {
                this.element.addEventListener("mousedown", this.onTouchDown, {
                    passive: !0
                }),
                    this.element.addEventListener("mousemove", this.onTouchMove, {
                        passive: !0
                    }),
                    this.element.addEventListener("mouseup", this.onTouchUp, {
                        passive: !0
                    }),
                    this.element.addEventListener("mouseleave", this.onTouchUp, {
                        passive: !0
                    }),
                    this.element.addEventListener("touchstart", this.onTouchDown, {
                        passive: !0
                    }),
                    this.element.addEventListener("touchmove", this.onTouchMove, {
                        passive: !0
                    }),
                    this.element.addEventListener("touchend", this.onTouchUp, {
                        passive: !0
                    }),
                    window.addEventListener("mousewheel", this.onWheel, {
                        passive: !0
                    }),
                    window.addEventListener("wheel", this.onWheel, {
                        passive: !0
                    })
            }
        );
        f(this, "removeEventListeners", () => {
                this.element.removeEventListener("mousedown", this.onTouchDown),
                    this.element.removeEventListener("mousemove", this.onTouchMove),
                    this.element.removeEventListener("mouseup", this.onTouchUp),
                    this.element.removeEventListener("mouseleave", this.onTouchUp),
                    this.element.removeEventListener("touchstart", this.onTouchDown),
                    this.element.removeEventListener("touchmove", this.onTouchMove),
                    this.element.removeEventListener("touchend", this.onTouchUp),
                    window.removeEventListener("mousewheel", this.onWheel),
                    window.removeEventListener("wheel", this.onWheel)
            }
        );
        f(this, "reset", () => {
                window.cancelAnimationFrame(this.update.bind(this)),
                    x(this.elements, t => {
                            this.transform(t, 0);
                            const r = z(t);
                            t.extra = 0,
                                t.width = r.width,
                                t.offset = r.left,
                                t.position = 0
                        }
                    )
            }
        );
        this.element = t,
            this.elements = t.querySelectorAll(".marquee--item"),
            this.transformPrefix = A("transform"),
            this.ticker = Ze(),
            this.scroll = {
                ease: .1,
                position: 0,
                current: 0,
                target: 0,
                last: 0,
                clamp: 0
            },
            this.marqueeSpeed = .5,
            x(this.elements, r => {
                    const a = z(r);
                    r.extra = 0,
                        r.width = a.width,
                        r.offset = a.left,
                        r.position = 0
                }
            ),
            this.length = this.elements.length,
            this.widthTotal = this.element.getBoundingClientRect().width,
            this.isHovering = 1,
            this.isEnabled = !0,
            this.addEventListeners(),
            this.update()
    }
    transform(t, r) {
        t.style[this.transformPrefix] = `translate3d(${Math.floor(parseInt(r))}px, 0, 0)`
    }
}
export {Lo as M};
