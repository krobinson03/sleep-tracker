import { a as bc, b as nt, f as Ac } from "@nf-internal/chunk-IGYUEDIQ";
import { B as _c, E as Sc, F as ch, G as lh, H as Rc, I as uh, J as dh, K as fh, L as CM, a as ae, b as R, c as Si, f as wc, g as bi, n as qo, p as Ai, r as Ri, s as Ot, w as ki, x as sh, y as ah } from "@nf-internal/chunk-4RZLOFAI";
import { a as z, b as we, d as ze } from "@nf-internal/chunk-4CLCTAJ7";
import { BehaviorSubject as MM, Observable as NM, Subject as wM, Subscription as _M } from "rxjs";
import { setActiveConsumer as Fn } from "@angular/core/primitives/signals";
import { isNotFound as SM } from "@angular/core/primitives/di";
var xi = class {
    full;
    major;
    minor;
    patch;
    constructor(t) { this.full = t; let n = t.split("."); this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join("."); }
}, Oc = new xi("21.2.12"), Wc = (() => { let e = Oc.full; return `https://${e.includes("-next") || e.includes("-rc") || e === "0.0.0-PLACEHOLDER" ? "next" : `v${Oc.major}`}.angular.dev`; })();
var Vi = "https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss", D = class extends Error {
    code;
    constructor(t, n) { super(Ko(t, n)), this.code = t; }
};
function bM(e) { return `NG0${Math.abs(e)}`; }
function Ko(e, t) { return `${bM(e)}${t ? ": " + t : ""}`; }
var Se = globalThis;
function j(e) { for (let t in e)
    if (e[t] === j)
        return t; throw Error(""); }
function vh(e, t) { for (let n in t)
    t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]); }
function Jo(e) {
    if (typeof e == "string")
        return e;
    if (Array.isArray(e))
        return `[${e.map(Jo).join(", ")}]`;
    if (e == null)
        return "" + e;
    let t = e.overriddenName || e.name;
    if (t)
        return `${t}`;
    let n = e.toString();
    if (n == null)
        return "" + n;
    let o = n.indexOf(`
`);
    return o >= 0 ? n.slice(0, o) : n;
}
function Hi(e, t) { return e ? t ? `${e} ${t}` : e : t || ""; }
function AM(e, t = 100) { if (!e || t < 1 || e.length <= t)
    return e; if (t == 1)
    return e.substring(0, 1) + "..."; let n = Math.round(t / 2); return e.substring(0, n) + "..." + e.substring(e.length - n); }
var RM = j({ __forward_ref__: j });
function Xo(e) { return e.__forward_ref__ = Xo, e; }
function P(e) { return er(e) ? e() : e; }
function er(e) { return typeof e == "function" && e.hasOwnProperty(RM) && e.__forward_ref__ === Xo; }
function Eh(e, t, n) { e != t && zc(n, e, t, "=="); }
function zc(e, t, n, o) { throw new Error(`ASSERTION ERROR: ${e}` + (o == null ? "" : ` [Expected=> ${n} ${o} ${t} <=Actual]`)); }
function B(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; }
function tr(e) { return { providers: e.providers || [], imports: e.imports || [] }; }
function nr(e) { return OM(e, Vn); }
function kM(e) { return nr(e) !== null; }
function OM(e, t) { return e.hasOwnProperty(t) && e[t] || null; }
function xM(e) { let t = e?.[Vn] ?? null; return t || null; }
function xc(e) { return e && e.hasOwnProperty(Wo) ? e[Wo] : null; }
var Vn = j({ \u0275prov: j }), Wo = j({ \u0275inj: j }), C = class {
    _desc;
    ngMetadataName = "InjectionToken";
    \u0275prov;
    constructor(t, n) { this._desc = t, this.\u0275prov = void 0, typeof n == "number" ? this.__NG_ELEMENT_ID__ = n : n !== void 0 && (this.\u0275prov = B({ token: this, providedIn: n.providedIn || "root", factory: n.factory })); }
    get multi() { return this; }
    toString() { return `InjectionToken ${this._desc}`; }
}, ph;
function PM(e) { zc("setInjectorProfilerContext should never be called in production mode"); let t = ph; return ph = e, t; }
function Qc(e) { return e && !!e.\u0275providers; }
var rn = j({ \u0275cmp: j }), or = j({ \u0275dir: j }), rr = j({ \u0275pipe: j }), Bi = j({ \u0275mod: j }), ot = j({ \u0275fac: j }), sn = j({ __NG_ELEMENT_ID__: j }), hh = j({ __NG_ENV_ID__: j });
function an(e) { return Ui(e, "@NgModule"), e[Bi] || null; }
function $i(e) { let t = an(e); if (!t)
    throw new D(915, !1); return t; }
function W(e) { return Ui(e, "@Component"), e[rn] || null; }
function be(e) { return Ui(e, "@Directive"), e[or] || null; }
function Qe(e) { return Ui(e, "@Pipe"), e[rr] || null; }
function Ui(e, t) { if (e == null)
    throw new D(-919, !1); }
function ir(e) { let t = W(e) || be(e) || Qe(e); return t !== null && t.standalone; }
function b(e) { return typeof e == "string" ? e : e == null ? "" : String(e); }
function Pe(e) { return typeof e == "function" ? e.name || e.toString() : typeof e == "object" && e != null && typeof e.type == "function" ? e.type.name || e.type.toString() : b(e); }
var Ih = j({ ngErrorCode: j }), LM = j({ ngErrorMessage: j }), FM = j({ ngTokenPath: j });
function Zc(e, t) { return Dh("", -200, t); }
function qi(e, t) { throw new D(-201, !1); }
function Dh(e, t, n) { let o = new D(t, e); return o[Ih] = t, o[LM] = e, n && (o[FM] = n), o; }
function jM(e) { return e[Ih]; }
var Pc;
function Th() { return Pc; }
function Ie(e) { let t = Pc; return Pc = e, t; }
function Yc(e, t, n) { let o = nr(e); if (o && o.providedIn == "root")
    return o.value === void 0 ? o.value = o.factory() : o.value; if (n & 8)
    return null; if (t !== void 0)
    return t; qi(e, ""); }
var VM = {}, en = VM, Lc = "__NG_DI_FLAG__", Fc = class {
    injector;
    constructor(t) { this.injector = t; }
    retrieve(t, n) { let o = tn(n) || 0; try {
        return this.injector.get(t, o & 8 ? null : en, o);
    }
    catch (r) {
        if (Ac(r))
            return r;
        throw r;
    } }
};
function HM(e, t = 0) { let n = bc(); if (n === void 0)
    throw new D(-203, !1); if (n === null)
    return Yc(e, void 0, t); {
    let o = BM(t), r = n.retrieve(e, o);
    if (Ac(r)) {
        if (o.optional)
            return null;
        throw r;
    }
    return r;
} }
function pe(e, t = 0) { return (Th() || HM)(P(e), t); }
function Gi(e) { throw new D(202, !1); }
function v(e, t) { return pe(e, tn(t)); }
function tn(e) { return typeof e > "u" || typeof e == "number" ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4); }
function BM(e) { return { optional: !!(e & 8), host: !!(e & 1), self: !!(e & 2), skipSelf: !!(e & 4) }; }
function jc(e) { let t = []; for (let n = 0; n < e.length; n++) {
    let o = P(e[n]);
    if (Array.isArray(o)) {
        if (o.length === 0)
            throw new D(900, !1);
        let r, i = 0;
        for (let s = 0; s < o.length; s++) {
            let a = o[s], c = $M(a);
            typeof c == "number" ? c === -1 ? r = a.token : i |= c : r = a;
        }
        t.push(pe(r, i));
    }
    else
        t.push(pe(o));
} return t; }
function Hn(e, t) { return e[Lc] = t, e.prototype[Lc] = t, e; }
function $M(e) { return e[Lc]; }
function xt(e, t) { let n = e.hasOwnProperty(ot); return n ? e[ot] : null; }
function Ch(e, t, n) { if (e.length !== t.length)
    return !1; for (let o = 0; o < e.length; o++) {
    let r = e[o], i = t[o];
    if (n && (r = n(r), i = n(i)), i !== r)
        return !1;
} return !0; }
function Ze(e) { return e.flat(Number.POSITIVE_INFINITY); }
function Wi(e, t) { e.forEach(n => Array.isArray(n) ? Wi(n, t) : t(n)); }
function Kc(e, t, n) { t >= e.length ? e.push(n) : e.splice(t, 0, n); }
function sr(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]; }
function ar(e, t) { let n = []; for (let o = 0; o < e; o++)
    n.push(t); return n; }
function Jc(e, t, n) { let o = e.length - n; for (; t < o;)
    e[t] = e[t + n], t++; for (; n--;)
    e.pop(); }
function Xc(e, t, n, o) { let r = e.length; if (r == t)
    e.push(n, o);
else if (r === 1)
    e.push(o, e[0]), e[0] = n;
else {
    for (r--, e.push(e[r - 1], e[r]); r > t;) {
        let i = r - 2;
        e[r] = e[i], r--;
    }
    e[t] = n, e[t + 1] = o;
} }
function cr(e, t, n) { let o = Bn(e, t); return o >= 0 ? e[o | 1] = n : (o = ~o, Xc(e, o, t, n)), o; }
function zi(e, t) { let n = Bn(e, t); if (n >= 0)
    return e[n | 1]; }
function Bn(e, t) { return UM(e, t, 1); }
function UM(e, t, n) { let o = 0, r = e.length >> n; for (; r !== o;) {
    let i = o + (r - o >> 1), s = e[i << n];
    if (t === s)
        return i << n;
    s > t ? r = i : o = i + 1;
} return ~(r << n); }
var Le = {}, F = [], Fe = new C(""), el = new C("", -1), tl = new C(""), zo = class {
    get(t, n = en) { if (n === en) {
        let r = Dh("", -201);
        throw r.name = "\u0275NotFound", r;
    } return n; }
};
function Ye(e) { return { \u0275providers: e }; }
function Mh(e) { return Ye([{ provide: Fe, multi: !0, useValue: e }]); }
function Nh(...e) { return { \u0275providers: Qi(!0, e), \u0275fromNgModule: !0 }; }
function Qi(e, ...t) { let n = [], o = new Set, r, i = s => { n.push(s); }; return Wi(t, s => { let a = s; Pi(a, i, [], o) && (r ||= [], r.push(a)); }), r !== void 0 && wh(r, i), n; }
function wh(e, t) { for (let n = 0; n < e.length; n++) {
    let { ngModule: o, providers: r } = e[n];
    nl(r, i => { t(i, o); });
} }
function Pi(e, t, n, o) { if (e = P(e), !e)
    return !1; let r = null, i = xc(e), s = !i && W(e); if (!i && !s) {
    let c = e.ngModule;
    if (i = xc(c), i)
        r = c;
    else
        return !1;
}
else {
    if (s && !s.standalone)
        return !1;
    r = e;
} let a = o.has(r); if (s) {
    if (a)
        return !1;
    if (o.add(r), s.dependencies) {
        let c = typeof s.dependencies == "function" ? s.dependencies() : s.dependencies;
        for (let l of c)
            Pi(l, t, n, o);
    }
}
else if (i) {
    if (i.imports != null && !a) {
        o.add(r);
        let l;
        Wi(i.imports, u => { Pi(u, t, n, o) && (l ||= [], l.push(u)); }), l !== void 0 && wh(l, t);
    }
    if (!a) {
        let l = xt(r) || (() => new r);
        t({ provide: r, useFactory: l, deps: F }, r), t({ provide: tl, useValue: r, multi: !0 }, r), t({ provide: Fe, useValue: () => pe(r), multi: !0 }, r);
    }
    let c = i.providers;
    if (c != null && !a) {
        let l = e;
        nl(c, u => { t(u, l); });
    }
}
else
    return !1; return r !== e && e.providers !== void 0; }
function nl(e, t) { for (let n of e)
    Qc(n) && (n = n.\u0275providers), Array.isArray(n) ? nl(n, t) : t(n); }
var qM = j({ provide: String, useValue: j });
function _h(e) { return e !== null && typeof e == "object" && qM in e; }
function GM(e) { return !!(e && e.useExisting); }
function WM(e) { return !!(e && e.useFactory); }
function nn(e) { return typeof e == "function"; }
function Sh(e) { return !!e.useClass; }
var ol = new C(""), Oi = {}, gh = {}, kc;
function $n() { return kc === void 0 && (kc = new zo), kc; }
var _e = class {
}, on = class extends _e {
    parent;
    source;
    scopes;
    records = new Map;
    _ngOnDestroyHooks = new Set;
    _onDestroyHooks = [];
    get destroyed() { return this._destroyed; }
    _destroyed = !1;
    injectorDefTypes;
    constructor(t, n, o, r) { super(), this.parent = n, this.source = o, this.scopes = r, Hc(t, s => this.processProvider(s)), this.records.set(el, jn(void 0, this)), r.has("environment") && this.records.set(_e, jn(void 0, this)); let i = this.records.get(ol); i != null && typeof i.value == "string" && this.scopes.add(i.value), this.injectorDefTypes = new Set(this.get(tl, F, { self: !0 })); }
    retrieve(t, n) { let o = tn(n) || 0; try {
        return this.get(t, en, o);
    }
    catch (r) {
        if (SM(r))
            return r;
        throw r;
    } }
    destroy() { Go(this), this._destroyed = !0; let t = Fn(null); try {
        for (let o of this._ngOnDestroyHooks)
            o.ngOnDestroy();
        let n = this._onDestroyHooks;
        this._onDestroyHooks = [];
        for (let o of n)
            o();
    }
    finally {
        this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear(), Fn(t);
    } }
    onDestroy(t) { return Go(this), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t); }
    runInContext(t) { Go(this); let n = nt(this), o = Ie(void 0), r; try {
        return t();
    }
    finally {
        nt(n), Ie(o);
    } }
    get(t, n = en, o) { if (Go(this), t.hasOwnProperty(hh))
        return t[hh](this); let r = tn(o), i, s = nt(this), a = Ie(void 0); try {
        if (!(r & 4)) {
            let l = this.records.get(t);
            if (l === void 0) {
                let u = KM(t) && nr(t);
                u && this.injectableDefInScope(u) ? l = jn(Vc(t), Oi) : l = null, this.records.set(t, l);
            }
            if (l != null)
                return this.hydrate(t, l, r);
        }
        let c = r & 2 ? $n() : this.parent;
        return n = r & 8 && n === en ? null : n, c.get(t, n);
    }
    catch (c) {
        let l = jM(c);
        throw l === -200 || l === -201 ? new D(l, null) : c;
    }
    finally {
        Ie(a), nt(s);
    } }
    resolveInjectorInitializers() { let t = Fn(null), n = nt(this), o = Ie(void 0), r; try {
        let i = this.get(Fe, F, { self: !0 });
        for (let s of i)
            s();
    }
    finally {
        nt(n), Ie(o), Fn(t);
    } }
    toString() { return "R3Injector[...]"; }
    processProvider(t) { t = P(t); let n = nn(t) ? t : P(t && t.provide), o = QM(t); if (!nn(t) && t.multi === !0) {
        let r = this.records.get(n);
        r || (r = jn(void 0, Oi, !0), r.factory = () => jc(r.multi), this.records.set(n, r)), n = t, r.multi.push(t);
    } this.records.set(n, o); }
    hydrate(t, n, o) { let r = Fn(null); try {
        if (n.value === gh)
            throw Zc("");
        return n.value === Oi && (n.value = gh, n.value = n.factory(void 0, o)), typeof n.value == "object" && n.value && YM(n.value) && this._ngOnDestroyHooks.add(n.value), n.value;
    }
    finally {
        Fn(r);
    } }
    injectableDefInScope(t) { if (!t.providedIn)
        return !1; let n = P(t.providedIn); return typeof n == "string" ? n === "any" || this.scopes.has(n) : this.injectorDefTypes.has(n); }
    removeOnDestroy(t) { let n = this._onDestroyHooks.indexOf(t); n !== -1 && this._onDestroyHooks.splice(n, 1); }
};
function Vc(e) { let t = nr(e), n = t !== null ? t.factory : xt(e); if (n !== null)
    return n; if (e instanceof C)
    throw new D(-204, !1); if (e instanceof Function)
    return zM(e); throw new D(-204, !1); }
function zM(e) { if (e.length > 0)
    throw new D(-204, !1); let n = xM(e); return n !== null ? () => n.factory(e) : () => new e; }
function QM(e) { if (_h(e))
    return jn(void 0, e.useValue); {
    let t = rl(e);
    return jn(t, Oi);
} }
function rl(e, t, n) { let o; if (nn(e)) {
    let r = P(e);
    return xt(r) || Vc(r);
}
else if (_h(e))
    o = () => P(e.useValue);
else if (WM(e))
    o = () => e.useFactory(...jc(e.deps || []));
else if (GM(e))
    o = (r, i) => pe(P(e.useExisting), i !== void 0 && i & 8 ? 8 : void 0);
else {
    let r = P(e && (e.useClass || e.provide));
    if (ZM(e))
        o = () => new r(...jc(e.deps));
    else
        return xt(r) || Vc(r);
} return o; }
function Go(e) { if (e.destroyed)
    throw new D(-205, !1); }
function jn(e, t, n = !1) { return { factory: e, value: t, multi: n ? [] : void 0 }; }
function ZM(e) { return !!e.deps; }
function YM(e) { return e !== null && typeof e == "object" && typeof e.ngOnDestroy == "function"; }
function KM(e) { return typeof e == "function" || typeof e == "object" && e.ngMetadataName === "InjectionToken"; }
function Hc(e, t) { for (let n of e)
    Array.isArray(n) ? Hc(n, t) : n && Qc(n) ? Hc(n.\u0275providers, t) : t(n); }
function Zi(e, t) { let n; e instanceof on ? (Go(e), n = e) : n = new Fc(e); let o, r = nt(n), i = Ie(void 0); try {
    return t();
}
finally {
    nt(r), Ie(i);
} }
function Yi() { return Th() !== void 0 || bc() != null; }
function JM(e) { if (!Yi())
    throw new D(-203, !1); }
var $ = 0, m = 1, N = 2, Q = 3, he = 4, le = 5, ue = 6, Lt = 7, U = 8, L = 9, je = 10, w = 11, Ft = 12, lr = 13, cn = 14, ee = 15, jt = 16, ln = 17, rt = 18, Ve = 19, il = 20, mt = 21, Ki = 22, Pt = 23, Ae = 24, un = 25, it = 26, I = 27, sl = 1, Re = 6, Ke = 7, ur = 8, dn = 9, G = 10;
function ne(e) { return Array.isArray(e) && typeof e[sl] == "object"; }
function K(e) { return Array.isArray(e) && e[sl] === !0; }
function al(e) { return (e.flags & 4) !== 0; }
function De(e) { return e.componentOffset > -1; }
function Un(e) { return (e.flags & 1) === 1; }
function He(e) { return !!e.template; }
function st(e) { return (e[N] & 512) !== 0; }
function cl(e) { return (e.type & 16) === 16; }
function bh(e) { return (e[N] & 32) === 32; }
function at(e) { return (e[N] & 256) === 256; }
var ll = "svg", ul = "math";
function O(e) { for (; Array.isArray(e);)
    e = e[$]; return e; }
function dr(e) { for (; Array.isArray(e);) {
    if (typeof e[sl] == "object")
        return e;
    e = e[$];
} return null; }
function fn(e, t) { return O(t[e]); }
function ie(e, t) { return O(t[e.index]); }
function Ah(e, t) { let n = e === null ? -1 : e.index; return n !== -1 ? O(t[n]) : null; }
function Vt(e, t) { return e.data[t]; }
function Ht(e, t) { return e[t]; }
function fr(e, t, n, o) { n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = o; }
function ye(e, t) { let n = t[e]; return ne(n) ? n : n[$]; }
function Rh(e) { return (e[N] & 4) === 4; }
function Ji(e) { return (e[N] & 128) === 128; }
function kh(e) { return K(e[Q]); }
function ge(e, t) { return t == null ? null : e[t]; }
function dl(e) { e[ln] = 0; }
function Xi(e) { e[N] & 1024 || (e[N] |= 1024, Ji(e) && pn(e)); }
function fl(e, t) { for (; e > 0;)
    t = t[cn], e--; return t; }
function qn(e) { return !!(e[N] & 9216 || e[Ae]?.dirty); }
function es(e) { e[je].changeDetectionScheduler?.notify(8), e[N] & 64 && (e[N] |= 1024), qn(e) && pn(e); }
function pn(e) { e[je].changeDetectionScheduler?.notify(0); let t = yt(e); for (; t !== null && !(t[N] & 8192 || (t[N] |= 8192, !Ji(t)));)
    t = yt(t); }
function pr(e, t) { if (at(e))
    throw new D(911, !1); e[mt] === null && (e[mt] = []), e[mt].push(t); }
function ts(e, t) { if (e[mt] === null)
    return; let n = e[mt].indexOf(t); n !== -1 && e[mt].splice(n, 1); }
function yt(e) { let t = e[Q]; return K(t) ? t[Q] : t; }
function pl(e) { return e[Lt] ??= []; }
function hl(e) { return e.cleanup ??= []; }
function Oh(e, t, n, o) { let r = pl(t); r.push(n), e.firstCreatePass && hl(e).push(o, r.length - 1); }
var S = { lFrame: Bh(null), bindingsEnabled: !0, skipHydrationRootTNode: null };
var Bc = !1;
function xh() { return S.lFrame.elementDepthCount; }
function Ph() { S.lFrame.elementDepthCount++; }
function gl() { S.lFrame.elementDepthCount--; }
function ns() { return S.bindingsEnabled; }
function hr() { return S.skipHydrationRootTNode !== null; }
function ml(e) { return S.skipHydrationRootTNode === e; }
function yl() { S.bindingsEnabled = !0; }
function Lh(e) { S.skipHydrationRootTNode = e; }
function vl() { S.bindingsEnabled = !1; }
function El() { S.skipHydrationRootTNode = null; }
function g() { return S.lFrame.lView; }
function A() { return S.lFrame.tView; }
function Il(e) { return S.lFrame.contextLView = e, e[U]; }
function Dl(e) { return S.lFrame.contextLView = null, e; }
function _() { let e = Tl(); for (; e !== null && e.type === 64;)
    e = e.parent; return e; }
function Tl() { return S.lFrame.currentTNode; }
function Gn() { let e = S.lFrame, t = e.currentTNode; return e.isParent ? t : t.parent; }
function ct(e, t) { let n = S.lFrame; n.currentTNode = e, n.isParent = t; }
function Cl() { return S.lFrame.isParent; }
function Ml() { S.lFrame.isParent = !1; }
function Nl() { return S.lFrame.contextLView; }
function wl() { return Bc; }
function Qo(e) { let t = Bc; return Bc = e, t; }
function me() { let e = S.lFrame, t = e.bindingRootIndex; return t === -1 && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t; }
function lt() { return S.lFrame.bindingIndex; }
function _l(e) { return S.lFrame.bindingIndex = e; }
function ve() { return S.lFrame.bindingIndex++; }
function ut(e) { let t = S.lFrame, n = t.bindingIndex; return t.bindingIndex = t.bindingIndex + e, n; }
function Fh() { return S.lFrame.inI18n; }
function Sl(e) { S.lFrame.inI18n = e; }
function jh(e, t) { let n = S.lFrame; n.bindingIndex = n.bindingRootIndex = e, os(t); }
function Vh() { return S.lFrame.currentDirectiveIndex; }
function os(e) { S.lFrame.currentDirectiveIndex = e; }
function rs(e) { let t = S.lFrame.currentDirectiveIndex; return t === -1 ? null : e[t]; }
function is() { return S.lFrame.currentQueryIndex; }
function gr(e) { S.lFrame.currentQueryIndex = e; }
function XM(e) { let t = e[m]; return t.type === 2 ? t.declTNode : t.type === 1 ? e[le] : null; }
function bl(e, t, n) { if (n & 4) {
    let r = t, i = e;
    for (; r = r.parent, r === null && !(n & 1);)
        if (r = XM(i), r === null || (i = i[cn], r.type & 10))
            break;
    if (r === null)
        return !1;
    t = r, e = i;
} let o = S.lFrame = Hh(); return o.currentTNode = t, o.lView = e, !0; }
function ss(e) { let t = Hh(), n = e[m]; S.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1; }
function Hh() { let e = S.lFrame, t = e === null ? null : e.child; return t === null ? Bh(e) : t; }
function Bh(e) { let t = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return e !== null && (e.child = t), t; }
function $h() { let e = S.lFrame; return S.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; }
var Al = $h;
function as() { let e = $h(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; }
function Uh(e) { return (S.lFrame.contextLView = fl(e, S.lFrame.contextLView))[U]; }
function de() { return S.lFrame.selectedIndex; }
function Bt(e) { S.lFrame.selectedIndex = e; }
function ke() { let e = S.lFrame; return Vt(e.tView, e.selectedIndex); }
function Rl() { S.lFrame.currentNamespace = ll; }
function kl() { S.lFrame.currentNamespace = ul; }
function Ol() { eN(); }
function eN() { S.lFrame.currentNamespace = null; }
function xl() { return S.lFrame.currentNamespace; }
var qh = !0;
function mr() { return qh; }
function Je(e) { qh = e; }
function $c(e, t = null, n = null, o) { let r = Pl(e, t, n, o); return r.resolveInjectorInitializers(), r; }
function Pl(e, t = null, n = null, o, r = new Set) { let i = [n || F, Nh(e)], s; return new on(i, t || $n(), s || null, r); }
var ce = class e {
    static THROW_IF_NOT_FOUND = en;
    static NULL = new zo;
    static create(t, n) { if (Array.isArray(t))
        return $c({ name: "" }, n, t, ""); {
        let o = t.name ?? "";
        return $c({ name: o }, t.parent, t.providers, o);
    } }
    static \u0275prov = B({ token: e, providedIn: "any", factory: () => pe(el) });
    static __NG_ELEMENT_ID__ = -1;
}, $t = new C(""), Be = (() => { class e {
    static __NG_ELEMENT_ID__ = tN;
    static __NG_ENV_ID__ = n => n;
} return e; })(), Li = class extends Be {
    _lView;
    constructor(t) { super(), this._lView = t; }
    get destroyed() { return at(this._lView); }
    onDestroy(t) { let n = this._lView; return pr(n, t), () => ts(n, t); }
};
function tN() { return new Li(g()); }
var Ll = !1, Fl = new C(""), Et = (() => { class e {
    taskId = 0;
    pendingTasks = new Set;
    destroyed = !1;
    pendingTask = new MM(!1);
    debugTaskTracker = v(Fl, { optional: !0 });
    get hasPendingTasks() { return this.destroyed ? !1 : this.pendingTask.value; }
    get hasPendingTasksObservable() { return this.destroyed ? new NM(n => { n.next(!1), n.complete(); }) : this.pendingTask; }
    add() { !this.hasPendingTasks && !this.destroyed && this.pendingTask.next(!0); let n = this.taskId++; return this.pendingTasks.add(n), this.debugTaskTracker?.add(n), n; }
    has(n) { return this.pendingTasks.has(n); }
    remove(n) { this.pendingTasks.delete(n), this.debugTaskTracker?.remove(n), this.pendingTasks.size === 0 && this.hasPendingTasks && this.pendingTask.next(!1); }
    ngOnDestroy() { this.pendingTasks.clear(), this.hasPendingTasks && this.pendingTask.next(!1), this.destroyed = !0, this.pendingTask.unsubscribe(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Uc = class extends wM {
    __isAsync;
    destroyRef = void 0;
    pendingTasks = void 0;
    constructor(t = !1) { super(), this.__isAsync = t, Yi() && (this.destroyRef = v(Be, { optional: !0 }) ?? void 0, this.pendingTasks = v(Et, { optional: !0 }) ?? void 0); }
    emit(t) { let n = R(null); try {
        super.next(t);
    }
    finally {
        R(n);
    } }
    subscribe(t, n, o) { let r = t, i = n || (() => null), s = o; if (t && typeof t == "object") {
        let c = t;
        r = c.next?.bind(c), i = c.error?.bind(c), s = c.complete?.bind(c);
    } this.__isAsync && (i = this.wrapInTimeout(i), r && (r = this.wrapInTimeout(r)), s && (s = this.wrapInTimeout(s))); let a = super.subscribe({ next: r, error: i, complete: s }); return t instanceof _M && t.add(a), a; }
    wrapInTimeout(t) { return n => { let o = this.pendingTasks?.add(); setTimeout(() => { try {
        t(n);
    }
    finally {
        o !== void 0 && this.pendingTasks?.remove(o);
    } }); }; }
}, gt = Uc;
function Fi(...e) { }
function jl(e) { let t, n; function o() { e = Fi; try {
    n !== void 0 && typeof cancelAnimationFrame == "function" && cancelAnimationFrame(n), t !== void 0 && clearTimeout(t);
}
catch { } } return t = setTimeout(() => { e(), o(); }), typeof requestAnimationFrame == "function" && (n = requestAnimationFrame(() => { e(), o(); })), () => o(); }
function Gh(e) { return queueMicrotask(() => e()), () => { e = Fi; }; }
var Vl = "isAngularZone", Zo = Vl + "_ID", nN = 0, q = class e {
    hasPendingMacrotasks = !1;
    hasPendingMicrotasks = !1;
    isStable = !0;
    onUnstable = new gt(!1);
    onMicrotaskEmpty = new gt(!1);
    onStable = new gt(!1);
    onError = new gt(!1);
    constructor(t) { let { enableLongStackTrace: n = !1, shouldCoalesceEventChangeDetection: o = !1, shouldCoalesceRunChangeDetection: r = !1, scheduleInRootZone: i = Ll } = t; if (typeof Zone > "u")
        throw new D(908, !1); Zone.assertZonePatched(); let s = this; s._nesting = 0, s._outer = s._inner = Zone.current, Zone.TaskTrackingZoneSpec && (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec)), n && Zone.longStackTraceZoneSpec && (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)), s.shouldCoalesceEventChangeDetection = !r && o, s.shouldCoalesceRunChangeDetection = r, s.callbackScheduled = !1, s.scheduleInRootZone = i, iN(s); }
    static isInAngularZone() { return typeof Zone < "u" && Zone.current.get(Vl) === !0; }
    static assertInAngularZone() { if (!e.isInAngularZone())
        throw new D(909, !1); }
    static assertNotInAngularZone() { if (e.isInAngularZone())
        throw new D(909, !1); }
    run(t, n, o) { return this._inner.run(t, n, o); }
    runTask(t, n, o, r) { let i = this._inner, s = i.scheduleEventTask("NgZoneEvent: " + r, t, oN, Fi, Fi); try {
        return i.runTask(s, n, o);
    }
    finally {
        i.cancelTask(s);
    } }
    runGuarded(t, n, o) { return this._inner.runGuarded(t, n, o); }
    runOutsideAngular(t) { return this._outer.run(t); }
}, oN = {};
function Hl(e) { if (e._nesting == 0 && !e.hasPendingMicrotasks && !e.isStable)
    try {
        e._nesting++, e.onMicrotaskEmpty.emit(null);
    }
    finally {
        if (e._nesting--, !e.hasPendingMicrotasks)
            try {
                e.runOutsideAngular(() => e.onStable.emit(null));
            }
            finally {
                e.isStable = !0;
            }
    } }
function rN(e) { if (e.isCheckStableRunning || e.callbackScheduled)
    return; e.callbackScheduled = !0; function t() { jl(() => { e.callbackScheduled = !1, qc(e), e.isCheckStableRunning = !0, Hl(e), e.isCheckStableRunning = !1; }); } e.scheduleInRootZone ? Zone.root.run(() => { t(); }) : e._outer.run(() => { t(); }), qc(e); }
function iN(e) { let t = () => { rN(e); }, n = nN++; e._inner = e._inner.fork({ name: "angular", properties: { [Vl]: !0, [Zo]: n, [Zo + n]: !0 }, onInvokeTask: (o, r, i, s, a, c) => { if (sN(c))
        return o.invokeTask(i, s, a, c); try {
        return mh(e), o.invokeTask(i, s, a, c);
    }
    finally {
        (e.shouldCoalesceEventChangeDetection && s.type === "eventTask" || e.shouldCoalesceRunChangeDetection) && t(), yh(e);
    } }, onInvoke: (o, r, i, s, a, c, l) => { try {
        return mh(e), o.invoke(i, s, a, c, l);
    }
    finally {
        e.shouldCoalesceRunChangeDetection && !e.callbackScheduled && !aN(c) && t(), yh(e);
    } }, onHasTask: (o, r, i, s) => { o.hasTask(i, s), r === i && (s.change == "microTask" ? (e._hasPendingMicrotasks = s.microTask, qc(e), Hl(e)) : s.change == "macroTask" && (e.hasPendingMacrotasks = s.macroTask)); }, onHandleError: (o, r, i, s) => (o.handleError(i, s), e.runOutsideAngular(() => e.onError.emit(s)), !1) }); }
function qc(e) { e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && e.callbackScheduled === !0 ? e.hasPendingMicrotasks = !0 : e.hasPendingMicrotasks = !1; }
function mh(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); }
function yh(e) { e._nesting--, Hl(e); }
var Yo = class {
    hasPendingMicrotasks = !1;
    hasPendingMacrotasks = !1;
    isStable = !0;
    onUnstable = new gt;
    onMicrotaskEmpty = new gt;
    onStable = new gt;
    onError = new gt;
    run(t, n, o) { return t.apply(n, o); }
    runGuarded(t, n, o) { return t.apply(n, o); }
    runOutsideAngular(t) { return t(); }
    runTask(t, n, o, r) { return t.apply(n, o); }
};
function sN(e) { return Wh(e, "__ignore_ng_zone__"); }
function aN(e) { return Wh(e, "__scheduler_tick__"); }
function Wh(e, t) { return !Array.isArray(e) || e.length !== 1 ? !1 : e[0]?.data?.[t] === !0; }
var vt = class {
    _console = console;
    handleError(t) { this._console.error("ERROR", t); }
}, It = new C("", { factory: () => { let e = v(q), t = v(_e), n; return o => { e.runOutsideAngular(() => { t.destroyed && !n ? setTimeout(() => { throw o; }) : (n ??= t.get(vt), n.handleError(o)); }); }; } }), Bl = { provide: Fe, useValue: () => { let e = v(vt, { optional: !0 }); }, multi: !0 }, cN = new C("", { factory: () => { if (typeof ngServerMode < "u" && ngServerMode)
        return; let e = v($t).defaultView; if (!e)
        return; let t = v(It), n = i => { t(i.reason), i.preventDefault(); }, o = i => { i.error ? t(i.error) : t(new Error(i.message, { cause: i })), i.preventDefault(); }, r = () => { e.addEventListener("unhandledrejection", n), e.addEventListener("error", o); }; typeof Zone < "u" ? Zone.root.run(r) : r(), v(Be).onDestroy(() => { e.removeEventListener("error", o), e.removeEventListener("unhandledrejection", n); }); } });
function lN() { return Ye([Mh(() => { v(cN); })]); }
function uN(e) { return null; }
function Ut(e, t) { let [n, o, r] = ah(e, t?.equal), i = n, s = i[ae]; return i.set = o, i.update = r, i.asReadonly = Wn.bind(i), i; }
function Wn() { let e = this[ae]; if (e.readonlyFn === void 0) {
    let t = () => this();
    t[ae] = e, e.readonlyFn = t;
} return e.readonlyFn; }
function dN(e, t) { if (Si() !== null)
    throw new D(-602, !1); }
var zn = (() => { class e {
    view;
    node;
    constructor(n, o) { this.view = n, this.node = o; }
    static __NG_ELEMENT_ID__ = fN;
} return e; })();
function fN() { return new zn(g(), _()); }
var xe = class {
}, Qn = new C("", { factory: () => !0 }), pN = new C("", { factory: () => !1 }), cs = new C(""), yr = (() => { class e {
    internalPendingTasks = v(Et);
    scheduler = v(xe);
    errorHandler = v(It);
    add() { let n = this.internalPendingTasks.add(); return () => { this.internalPendingTasks.has(n) && (this.scheduler.notify(11), this.internalPendingTasks.remove(n)); }; }
    run(n) { let o = this.add(); n().catch(this.errorHandler).finally(o); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), ls = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new Gc });
} return e; })(), Gc = class {
    dirtyEffectCount = 0;
    queues = new Map;
    add(t) { this.enqueue(t), this.schedule(t); }
    schedule(t) { t.dirty && this.dirtyEffectCount++; }
    remove(t) { let n = t.zone, o = this.queues.get(n); o.has(t) && (o.delete(t), t.dirty && this.dirtyEffectCount--); }
    enqueue(t) { let n = t.zone; this.queues.has(n) || this.queues.set(n, new Set); let o = this.queues.get(n); o.has(t) || o.add(t); }
    flush() { for (; this.dirtyEffectCount > 0;) {
        let t = !1;
        for (let [n, o] of this.queues)
            n === null ? t ||= this.flushQueue(o) : t ||= n.run(() => this.flushQueue(o));
        t || (this.dirtyEffectCount = 0);
    } }
    flushQueue(t) { let n = !1; for (let o of t)
        o.dirty && (this.dirtyEffectCount--, n = !0, o.run()); return n; }
}, ji = class {
    [ae];
    constructor(t) { this[ae] = t; }
    destroy() { this[ae].destroy(); }
};
function $l(e, t) { let n = t?.injector ?? v(ce), o = t?.manualCleanup !== !0 ? n.get(Be) : null, r, i = n.get(zn, null, { optional: !0 }), s = n.get(xe); return i !== null ? (r = mN(i.view, s, e), o instanceof Li && o._lView === i.view && (o = null)) : r = yN(e, n.get(ls), s), r.injector = n, o !== null && (r.onDestroyFns = [o.onDestroy(() => r.destroy())]), new ji(r); }
var zh = we(z({}, ch), { cleanupFns: void 0, zone: null, onDestroyFns: null, run() { let e = Qo(!1); try {
        lh(this);
    }
    finally {
        Qo(e);
    } }, cleanup() { if (!this.cleanupFns?.length)
        return; let e = R(null); try {
        for (; this.cleanupFns.length;)
            this.cleanupFns.pop()();
    }
    finally {
        this.cleanupFns = [], R(e);
    } } }), hN = we(z({}, zh), { consumerMarkedDirty() { this.scheduler.schedule(this), this.notifier.notify(12); }, destroy() { if (Ot(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.scheduler.remove(this); } }), gN = we(z({}, zh), { consumerMarkedDirty() { this.view[N] |= 8192, pn(this.view), this.notifier.notify(13); }, destroy() { if (Ot(this), this.onDestroyFns !== null)
        for (let e of this.onDestroyFns)
            e(); this.cleanup(), this.view[Pt]?.delete(this); } });
function mN(e, t, n) { let o = Object.create(gN); return o.view = e, o.zone = typeof Zone < "u" ? Zone.current : null, o.notifier = t, o.fn = Qh(o, n), e[Pt] ??= new Set, e[Pt].add(o), o.consumerMarkedDirty(o), o; }
function yN(e, t, n) { let o = Object.create(hN); return o.fn = Qh(o, e), o.scheduler = t, o.notifier = n, o.zone = typeof Zone < "u" ? Zone.current : null, o.scheduler.add(o), o.notifier.notify(12), o; }
function Qh(e, t) { return () => { t(n => (e.cleanupFns ??= []).push(n)); }; }
import { setActiveConsumer as Kn } from "@angular/core/primitives/signals";
import { Subject as um, Subscription as vN } from "rxjs";
import { map as EN } from "rxjs/operators";
var Zn = { JSACTION: "jsaction" };
function ft(e) { return { toString: e }.toString(); }
var Jn = "__annotations__", Xn = "__parameters__", eo = "__prop__metadata__";
function Xr(e, t, n, o, r) { return ft(() => { let i = gd(t); function s(...a) { if (this instanceof s)
    return i.call(this, ...a), this; let c = new s(...a); return function (u) { return r && r(u, ...a), (u.hasOwnProperty(Jn) ? u[Jn] : Object.defineProperty(u, Jn, { value: [] })[Jn]).push(c), u; }; } return n && (s.prototype = Object.create(n.prototype)), s.prototype.ngMetadataName = e, s.annotationCls = s, s; }); }
function gd(e) { return function (...n) { if (e) {
    let o = e(...n);
    for (let r in o)
        this[r] = o[r];
} }; }
function To(e, t, n) { return ft(() => { let o = gd(t); function r(...i) { if (this instanceof r)
    return o.apply(this, i), this; let s = new r(...i); return a.annotation = s, a; function a(c, l, u) { let d = c.hasOwnProperty(Xn) ? c[Xn] : Object.defineProperty(c, Xn, { value: [] })[Xn]; for (; d.length <= u;)
    d.push(null); return (d[u] = d[u] || []).push(s), c; } } return r.prototype.ngMetadataName = e, r.annotationCls = r, r; }); }
function wt(e, t, n, o) { return ft(() => { let r = gd(t); function i(...s) { if (this instanceof i)
    return r.apply(this, s), this; let a = new i(...s); function c(l, u) { if (l === void 0)
    throw new Error("Standard Angular field decorators are not supported in JIT mode."); let d = l.constructor, f = d.hasOwnProperty(eo) ? d[eo] : Object.defineProperty(d, eo, { value: {} })[eo]; f[u] = f.hasOwnProperty(u) && f[u] || [], f[u].unshift(a); } return c; } return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = e, i.annotationCls = i, i; }); }
var dm = Hn(To("Inject", e => ({ token: e })), -1), fm = Hn(To("Optional"), 8), pm = Hn(To("Self"), 2), hm = Hn(To("SkipSelf"), 4), gm = Hn(To("Host"), 1);
function re(e) { let t = Se.ng; if (t && t.\u0275compilerFacade)
    return t.\u0275compilerFacade; throw new Error("JIT compiler unavailable"); }
var Zh = { \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: tr, \u0275\u0275inject: pe, \u0275\u0275invalidFactoryDep: Gi, resolveForwardRef: P }, mm = Function;
function Ir(e) { return typeof e == "function"; }
var IN = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/, DN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/, TN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/, CN = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function MN(e) { return IN.test(e) || CN.test(e) || DN.test(e) && !TN.test(e); }
var Rs = class {
    _reflect;
    constructor(t) { this._reflect = t || Se.Reflect; }
    factory(t) { return (...n) => new t(...n); }
    _zipTypesAndAnnotations(t, n) { let o; typeof t > "u" ? o = ar(n.length) : o = ar(t.length); for (let r = 0; r < o.length; r++)
        typeof t > "u" ? o[r] = [] : t[r] && t[r] != Object ? o[r] = [t[r]] : o[r] = [], n && n[r] != null && (o[r] = o[r].concat(n[r])); return o; }
    _ownParameters(t, n) { let o = t.toString(); if (MN(o))
        return null; if (t.parameters && t.parameters !== n.parameters)
        return t.parameters; let r = t.ctorParameters; if (r && r !== n.ctorParameters) {
        let a = typeof r == "function" ? r() : r, c = a.map(u => u && u.type), l = a.map(u => u && Ul(u.decorators));
        return this._zipTypesAndAnnotations(c, l);
    } let i = t.hasOwnProperty(Xn) && t[Xn], s = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", t); return s || i ? this._zipTypesAndAnnotations(s, i) : ar(t.length); }
    parameters(t) { if (!Ir(t))
        return []; let n = us(t), o = this._ownParameters(t, n); return !o && n !== Object && (o = this.parameters(n)), o || []; }
    _ownAnnotations(t, n) { if (t.annotations && t.annotations !== n.annotations) {
        let o = t.annotations;
        return typeof o == "function" && o.annotations && (o = o.annotations), o;
    } return t.decorators && t.decorators !== n.decorators ? Ul(t.decorators) : t.hasOwnProperty(Jn) ? t[Jn] : null; }
    annotations(t) { if (!Ir(t))
        return []; let n = us(t), o = this._ownAnnotations(t, n) || []; return (n !== Object ? this.annotations(n) : []).concat(o); }
    _ownPropMetadata(t, n) { if (t.propMetadata && t.propMetadata !== n.propMetadata) {
        let o = t.propMetadata;
        return typeof o == "function" && o.propMetadata && (o = o.propMetadata), o;
    } if (t.propDecorators && t.propDecorators !== n.propDecorators) {
        let o = t.propDecorators, r = {};
        return Object.keys(o).forEach(i => { r[i] = Ul(o[i]); }), r;
    } return t.hasOwnProperty(eo) ? t[eo] : null; }
    propMetadata(t) { if (!Ir(t))
        return {}; let n = us(t), o = {}; if (n !== Object) {
        let i = this.propMetadata(n);
        Object.keys(i).forEach(s => { o[s] = i[s]; });
    } let r = this._ownPropMetadata(t, n); return r && Object.keys(r).forEach(i => { let s = []; o.hasOwnProperty(i) && s.push(...o[i]), s.push(...r[i]), o[i] = s; }), o; }
    ownPropMetadata(t) { return Ir(t) ? this._ownPropMetadata(t, us(t)) || {} : {}; }
    hasLifecycleHook(t, n) { return t instanceof mm && n in t.prototype; }
};
function Ul(e) { return e ? e.map(t => { let o = t.type.annotationCls, r = t.args ? t.args : []; return new o(...r); }) : []; }
function us(e) { let t = e.prototype ? Object.getPrototypeOf(e.prototype) : null; return (t ? t.constructor : null) || Object; }
function ym(e, t, n, o) { t !== null ? t.applyValueToInputSignal(t, o) : e[n] = o; }
var ks = class {
    previousValue;
    currentValue;
    firstChange;
    constructor(t, n, o) { this.previousValue = t, this.currentValue = n, this.firstChange = o; }
    isFirstChange() { return this.firstChange; }
}, vm = (() => { let e = () => Em; return e.ngInherit = !0, e; })();
function Em(e) { return e.type.prototype.ngOnChanges && (e.setInput = wN), NN; }
function NN() { let e = Dm(this), t = e?.current; if (t) {
    let n = e.previous;
    if (n === Le)
        e.previous = t;
    else
        for (let o in t)
            n[o] = t[o];
    e.current = null, this.ngOnChanges(t);
} }
function wN(e, t, n, o, r) { let i = this.declaredInputs[o], s = Dm(e) || _N(e, { previous: Le, current: null }), a = s.current || (s.current = {}), c = s.previous, l = c[i]; a[i] = new ks(l && l.currentValue, n, c === Le), ym(e, t, r, n); }
var Im = "__ngSimpleChanges__";
function Dm(e) { return e[Im] || null; }
function _N(e, t) { return e[Im] = t; }
var Yh = [];
var V = function (e, t = null, n) { for (let o = 0; o < Yh.length; o++) {
    let r = Yh[o];
    r(e, t, n);
} }, x = (function (e) { return e[e.TemplateCreateStart = 0] = "TemplateCreateStart", e[e.TemplateCreateEnd = 1] = "TemplateCreateEnd", e[e.TemplateUpdateStart = 2] = "TemplateUpdateStart", e[e.TemplateUpdateEnd = 3] = "TemplateUpdateEnd", e[e.LifecycleHookStart = 4] = "LifecycleHookStart", e[e.LifecycleHookEnd = 5] = "LifecycleHookEnd", e[e.OutputStart = 6] = "OutputStart", e[e.OutputEnd = 7] = "OutputEnd", e[e.BootstrapApplicationStart = 8] = "BootstrapApplicationStart", e[e.BootstrapApplicationEnd = 9] = "BootstrapApplicationEnd", e[e.BootstrapComponentStart = 10] = "BootstrapComponentStart", e[e.BootstrapComponentEnd = 11] = "BootstrapComponentEnd", e[e.ChangeDetectionStart = 12] = "ChangeDetectionStart", e[e.ChangeDetectionEnd = 13] = "ChangeDetectionEnd", e[e.ChangeDetectionSyncStart = 14] = "ChangeDetectionSyncStart", e[e.ChangeDetectionSyncEnd = 15] = "ChangeDetectionSyncEnd", e[e.AfterRenderHooksStart = 16] = "AfterRenderHooksStart", e[e.AfterRenderHooksEnd = 17] = "AfterRenderHooksEnd", e[e.ComponentStart = 18] = "ComponentStart", e[e.ComponentEnd = 19] = "ComponentEnd", e[e.DeferBlockStateStart = 20] = "DeferBlockStateStart", e[e.DeferBlockStateEnd = 21] = "DeferBlockStateEnd", e[e.DynamicComponentStart = 22] = "DynamicComponentStart", e[e.DynamicComponentEnd = 23] = "DynamicComponentEnd", e[e.HostBindingsUpdateStart = 24] = "HostBindingsUpdateStart", e[e.HostBindingsUpdateEnd = 25] = "HostBindingsUpdateEnd", e; })(x || {});
function SN(e, t, n) { let { ngOnChanges: o, ngOnInit: r, ngDoCheck: i } = t.type.prototype; if (o) {
    let s = Em(t);
    (n.preOrderHooks ??= []).push(e, s), (n.preOrderCheckHooks ??= []).push(e, s);
} r && (n.preOrderHooks ??= []).push(0 - e, r), i && ((n.preOrderHooks ??= []).push(e, i), (n.preOrderCheckHooks ??= []).push(e, i)); }
function Tm(e, t) { for (let n = t.directiveStart, o = t.directiveEnd; n < o; n++) {
    let i = e.data[n].type.prototype, { ngAfterContentInit: s, ngAfterContentChecked: a, ngAfterViewInit: c, ngAfterViewChecked: l, ngOnDestroy: u } = i;
    s && (e.contentHooks ??= []).push(-n, s), a && ((e.contentHooks ??= []).push(n, a), (e.contentCheckHooks ??= []).push(n, a)), c && (e.viewHooks ??= []).push(-n, c), l && ((e.viewHooks ??= []).push(n, l), (e.viewCheckHooks ??= []).push(n, l)), u != null && (e.destroyHooks ??= []).push(n, u);
} }
function Ds(e, t, n) { Cm(e, t, 3, n); }
function Ts(e, t, n, o) { (e[N] & 3) === n && Cm(e, t, n, o); }
function ql(e, t) { let n = e[N]; (n & 3) === t && (n &= 16383, n += 1, e[N] = n); }
function Cm(e, t, n, o) { let r = o !== void 0 ? e[ln] & 65535 : 0, i = o ?? -1, s = t.length - 1, a = 0; for (let c = r; c < s; c++)
    if (typeof t[c + 1] == "number") {
        if (a = t[c], o != null && a >= o)
            break;
    }
    else
        t[c] < 0 && (e[ln] += 65536), (a < i || i == -1) && (bN(e, n, t, c), e[ln] = (e[ln] & 4294901760) + c + 2), c++; }
function Kh(e, t) { V(x.LifecycleHookStart, e, t); let n = R(null); try {
    t.call(e);
}
finally {
    R(n), V(x.LifecycleHookEnd, e, t);
} }
function bN(e, t, n, o) { let r = n[o] < 0, i = n[o + 1], s = r ? -n[o] : n[o], a = e[s]; r ? e[N] >> 14 < e[ln] >> 16 && (e[N] & 3) === t && (e[N] += 16384, Kh(a, i)) : Kh(a, i); }
var ro = -1, In = class {
    factory;
    name;
    injectImpl;
    resolving = !1;
    canSeeViewProviders;
    multi;
    componentProviders;
    index;
    providerFactory;
    constructor(t, n, o, r) { this.factory = t, this.name = r, this.canSeeViewProviders = n, this.injectImpl = o; }
};
function sa(e) { return e != null && typeof e == "object" && (e.insertBeforeIndex === null || typeof e.insertBeforeIndex == "number" || Array.isArray(e.insertBeforeIndex)); }
function Mm(e) { return !!(e.type & 128); }
function AN(e) { return (e.flags & 8) !== 0; }
function RN(e) { return (e.flags & 16) !== 0; }
function kN(e, t, n) { let o = 0; for (; o < n.length;) {
    let r = n[o];
    if (typeof r == "number") {
        if (r !== 0)
            break;
        o++;
        let i = n[o++], s = n[o++], a = n[o++];
        e.setAttribute(t, s, a, i);
    }
    else {
        let i = r, s = n[++o];
        ON(i) ? e.setProperty(t, i, s) : e.setAttribute(t, i, s), o++;
    }
} return o; }
function Nm(e) { return e === 3 || e === 4 || e === 6; }
function ON(e) { return e.charCodeAt(0) === 64; }
function uo(e, t) { if (!(t === null || t.length === 0))
    if (e === null || e.length === 0)
        e = t.slice();
    else {
        let n = -1;
        for (let o = 0; o < t.length; o++) {
            let r = t[o];
            typeof r == "number" ? n = r : n === 0 || (n === -1 || n === 2 ? Jh(e, n, r, null, t[++o]) : Jh(e, n, r, null, null));
        }
    } return e; }
function Jh(e, t, n, o, r) { let i = 0, s = e.length; if (t === -1)
    s = -1;
else
    for (; i < e.length;) {
        let a = e[i++];
        if (typeof a == "number") {
            if (a === t) {
                s = -1;
                break;
            }
            else if (a > t) {
                s = i - 1;
                break;
            }
        }
    } for (; i < e.length;) {
    let a = e[i];
    if (typeof a == "number")
        break;
    if (a === n) {
        r !== null && (e[i + 1] = r);
        return;
    }
    i++, r !== null && i++;
} s !== -1 && (e.splice(s, 0, t), i = s + 1), e.splice(i++, 0, n), r !== null && e.splice(i++, 0, r); }
function wm(e) { return e !== ro; }
function Os(e) { return e & 32767; }
function xN(e) { return e >> 16; }
function xs(e, t) { let n = xN(e), o = t; for (; n > 0;)
    o = o[cn], n--; return o; }
var pu = !0;
function Ps(e) { let t = pu; return pu = e, t; }
var PN = 256, _m = PN - 1, Sm = 5, LN = 0, dt = {};
function FN(e, t, n) { let o; typeof n == "string" ? o = n.charCodeAt(0) || 0 : n.hasOwnProperty(sn) && (o = n[sn]), o == null && (o = n[sn] = LN++); let r = o & _m, i = 1 << r; t.data[e + (r >> Sm)] |= i; }
function Ls(e, t) { let n = bm(e, t); if (n !== -1)
    return n; let o = t[m]; o.firstCreatePass && (e.injectorIndex = t.length, Gl(o.data, e), Gl(t, null), Gl(o.blueprint, null)); let r = md(e, t), i = e.injectorIndex; if (wm(r)) {
    let s = Os(r), a = xs(r, t), c = a[m].data;
    for (let l = 0; l < 8; l++)
        t[i + l] = a[s + l] | c[s + l];
} return t[i + 8] = r, i; }
function Gl(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); }
function bm(e, t) { return e.injectorIndex === -1 || e.parent && e.parent.injectorIndex === e.injectorIndex || t[e.injectorIndex + 8] === null ? -1 : e.injectorIndex; }
function md(e, t) { if (e.parent && e.parent.injectorIndex !== -1)
    return e.parent.injectorIndex; let n = 0, o = null, r = t; for (; r !== null;) {
    if (o = Pm(r), o === null)
        return ro;
    if (n++, r = r[cn], o.injectorIndex !== -1)
        return o.injectorIndex | n << 16;
} return ro; }
function hu(e, t, n) { FN(e, t, n); }
function jN(e, t) { if (t === "class")
    return e.classes; if (t === "style")
    return e.styles; let n = e.attrs; if (n) {
    let o = n.length, r = 0;
    for (; r < o;) {
        let i = n[r];
        if (Nm(i))
            break;
        if (i === 0)
            r = r + 2;
        else if (typeof i == "number")
            for (r++; r < o && typeof n[r] == "string";)
                r++;
        else {
            if (i === t)
                return n[r + 1];
            r = r + 2;
        }
    }
} return null; }
function Am(e, t, n) { if (n & 8 || e !== void 0)
    return e; qi(t, "NodeInjector"); }
function Rm(e, t, n, o) { if (n & 8 && o === void 0 && (o = null), (n & 3) === 0) {
    let r = e[L], i = Ie(void 0);
    try {
        return r ? r.get(t, o, n & 8) : Yc(t, o, n & 8);
    }
    finally {
        Ie(i);
    }
} return Am(o, t, n); }
function km(e, t, n, o = 0, r) { if (e !== null) {
    if (t[N] & 2048 && !(o & 2)) {
        let s = $N(e, t, n, o, dt);
        if (s !== dt)
            return s;
    }
    let i = Om(e, t, n, o, dt);
    if (i !== dt)
        return i;
} return Rm(t, n, o, r); }
function Om(e, t, n, o, r) { let i = HN(n); if (typeof i == "function") {
    if (!bl(t, e, o))
        return o & 1 ? Am(r, n, o) : Rm(t, n, o, r);
    try {
        let s;
        if (s = i(o), s == null && !(o & 8))
            qi(n);
        else
            return s;
    }
    finally {
        Al();
    }
}
else if (typeof i == "number") {
    let s = null, a = bm(e, t), c = ro, l = o & 1 ? t[ee][le] : null;
    for ((a === -1 || o & 4) && (c = a === -1 ? md(e, t) : t[a + 8], c === ro || !eg(o, !1) ? a = -1 : (s = t[m], a = Os(c), t = xs(c, t))); a !== -1;) {
        let u = t[m];
        if (Xh(i, a, u.data)) {
            let d = VN(a, t, n, s, o, l);
            if (d !== dt)
                return d;
        }
        c = t[a + 8], c !== ro && eg(o, t[m].data[a + 8] === l) && Xh(i, a, t) ? (s = u, a = Os(c), t = xs(c, t)) : a = -1;
    }
} return r; }
function VN(e, t, n, o, r, i) { let s = t[m], a = s.data[e + 8], c = o == null ? De(a) && pu : o != s && (a.type & 3) !== 0, l = r & 1 && i === a, u = Cs(a, s, n, c, l); return u !== null ? Or(t, s, u, a, r) : dt; }
function Cs(e, t, n, o, r) { let i = e.providerIndexes, s = t.data, a = i & 1048575, c = e.directiveStart, l = e.directiveEnd, u = i >> 20, d = o ? a : a + u, f = r ? a + u : l; for (let p = d; p < f; p++) {
    let h = s[p];
    if (p < c && n === h || p >= c && h.type === n)
        return p;
} if (r) {
    let p = s[c];
    if (p && He(p) && p.type === n)
        return c;
} return null; }
function Or(e, t, n, o, r) { let i = e[n], s = t.data; if (i instanceof In) {
    let a = i;
    if (a.resolving)
        throw Zc("");
    let c = Ps(a.canSeeViewProviders);
    a.resolving = !0;
    let l = s[n].type || s[n], u, d = a.injectImpl ? Ie(a.injectImpl) : null, f = bl(e, o, 0);
    try {
        i = e[n] = a.factory(void 0, r, s, e, o), t.firstCreatePass && n >= o.directiveStart && SN(n, s[n], t);
    }
    finally {
        d !== null && Ie(d), Ps(c), a.resolving = !1, Al();
    }
} return i; }
function HN(e) { if (typeof e == "string")
    return e.charCodeAt(0) || 0; let t = e.hasOwnProperty(sn) ? e[sn] : void 0; return typeof t == "number" ? t >= 0 ? t & _m : BN : t; }
function Xh(e, t, n) { let o = 1 << e; return !!(n[t + (e >> Sm)] & o); }
function eg(e, t) { return !(e & 2) && !(e & 1 && t); }
var Wt = class {
    _tNode;
    _lView;
    constructor(t, n) { this._tNode = t, this._lView = n; }
    get(t, n, o) { return km(this._tNode, this._lView, t, tn(o), n); }
};
function BN() { return new Wt(_(), g()); }
function xm(e) { return ft(() => { let t = e.prototype.constructor, n = t[ot] || gu(t), o = Object.prototype, r = Object.getPrototypeOf(e.prototype).constructor; for (; r && r !== o;) {
    let i = r[ot] || gu(r);
    if (i && i !== n)
        return i;
    r = Object.getPrototypeOf(r);
} return i => new i; }); }
function gu(e) { return er(e) ? () => { let t = gu(P(e)); return t && t(); } : xt(e); }
function $N(e, t, n, o, r) { let i = e, s = t; for (; i !== null && s !== null && s[N] & 2048 && !st(s);) {
    let a = Om(i, s, n, o | 2, dt);
    if (a !== dt)
        return a;
    let c = i.parent;
    if (!c) {
        let l = s[il];
        if (l) {
            let u = l.get(n, dt, o & -5);
            if (u !== dt)
                return u;
        }
        c = Pm(s), s = s[cn];
    }
    i = c;
} return r; }
function Pm(e) { let t = e[m], n = t.type; return n === 2 ? t.declTNode : n === 1 ? e[le] : null; }
function aa(e) { return jN(_(), e); }
var Lm = To("Attribute", e => ({ attributeName: e, __NG_ELEMENT_ID__: () => aa(e) })), tg = null;
function yd() { return tg = tg || new Rs; }
function ca(e) { return Fm(yd().parameters(e)); }
function Fm(e) { return e.map(t => UN(t)); }
function UN(e) { let t = { token: null, attribute: null, host: !1, optional: !1, self: !1, skipSelf: !1 }; if (Array.isArray(e) && e.length > 0)
    for (let n = 0; n < e.length; n++) {
        let o = e[n];
        if (o === void 0)
            continue;
        let r = Object.getPrototypeOf(o);
        if (o instanceof fm || r.ngMetadataName === "Optional")
            t.optional = !0;
        else if (o instanceof hm || r.ngMetadataName === "SkipSelf")
            t.skipSelf = !0;
        else if (o instanceof pm || r.ngMetadataName === "Self")
            t.self = !0;
        else if (o instanceof gm || r.ngMetadataName === "Host")
            t.host = !0;
        else if (o instanceof dm)
            t.token = o.token;
        else if (o instanceof Lm) {
            if (o.attributeName === void 0)
                throw new D(-204, !1);
            t.attribute = o.attributeName;
        }
        else
            t.token = o;
    }
else
    e === void 0 || Array.isArray(e) && e.length === 0 ? t.token = null : t.token = e; return t; }
function qN(e, t) { let n = null, o = null; e.hasOwnProperty(Vn) || Object.defineProperty(e, Vn, { get: () => (n === null && (n = re({ usage: 0, kind: "injectable", type: e }).compileInjectable(Zh, `ng:///${e.name}/\u0275prov.js`, QN(e, t))), n) }), e.hasOwnProperty(ot) || Object.defineProperty(e, ot, { get: () => { if (o === null) {
        let r = re({ usage: 0, kind: "injectable", type: e });
        o = r.compileFactory(Zh, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, typeArgumentCount: 0, deps: ca(e), target: r.FactoryTarget.Injectable });
    } return o; }, configurable: !0 }); }
var GN = j({ provide: String, useValue: j });
function ng(e) { return e.useClass !== void 0; }
function WN(e) { return GN in e; }
function og(e) { return e.useFactory !== void 0; }
function zN(e) { return e.useExisting !== void 0; }
function QN(e, t) { let n = t || { providedIn: null }, o = { name: e.name, type: e, typeArgumentCount: 0, providedIn: n.providedIn }; return (ng(n) || og(n)) && n.deps !== void 0 && (o.deps = Fm(n.deps)), ng(n) ? o.useClass = n.useClass : WN(n) ? o.useValue = n.useValue : og(n) ? o.useFactory = n.useFactory : zN(n) && (o.useExisting = n.useExisting), o; }
var ZN = Xr("Injectable", void 0, void 0, void 0, (e, t) => qN(e, t));
function YN() { return Co(_(), g()); }
function Co(e, t) { return new ei(ie(e, t)); }
var ei = (() => { class e {
    nativeElement;
    constructor(n) { this.nativeElement = n; }
    static __NG_ELEMENT_ID__ = YN;
} return e; })();
function jm(e) { return e instanceof ei ? e.nativeElement : e; }
function KN() { return this._results[Symbol.iterator](); }
var Fs = class {
    _emitDistinctChangesOnly;
    dirty = !0;
    _onDirty = void 0;
    _results = [];
    _changesDetected = !1;
    _changes = void 0;
    length = 0;
    first = void 0;
    last = void 0;
    get changes() { return this._changes ??= new um; }
    constructor(t = !1) { this._emitDistinctChangesOnly = t; }
    get(t) { return this._results[t]; }
    map(t) { return this._results.map(t); }
    filter(t) { return this._results.filter(t); }
    find(t) { return this._results.find(t); }
    reduce(t, n) { return this._results.reduce(t, n); }
    forEach(t) { this._results.forEach(t); }
    some(t) { return this._results.some(t); }
    toArray() { return this._results.slice(); }
    toString() { return this._results.toString(); }
    reset(t, n) { this.dirty = !1; let o = Ze(t); (this._changesDetected = !Ch(this._results, o, n)) && (this._results = o, this.length = o.length, this.last = o[this.length - 1], this.first = o[0]); }
    notifyOnChanges() { this._changes !== void 0 && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.next(this); }
    onDirty(t) { this._onDirty = t; }
    setDirty() { this.dirty = !0, this._onDirty?.(); }
    destroy() { this._changes !== void 0 && (this._changes.complete(), this._changes.unsubscribe()); }
    [Symbol.iterator] = KN;
}, An = "ngSkipHydration", JN = "ngskiphydration";
function vd(e) { let t = e.mergedAttrs; if (t === null)
    return !1; for (let n = 0; n < t.length; n += 2) {
    let o = t[n];
    if (typeof o == "number")
        return !1;
    if (typeof o == "string" && o.toLowerCase() === JN)
        return !0;
} return !1; }
function Vm(e) { return e.hasAttribute(An); }
function xr(e) { return (e.flags & 128) === 128; }
function Mo(e) { if (xr(e))
    return !0; let t = e.parent; for (; t;) {
    if (xr(e) || vd(t))
        return !0;
    t = t.parent;
} return !1; }
function Hm(e) { return xr(e) || vd(e) || Mo(e); }
var la = (function (e) { return e[e.OnPush = 0] = "OnPush", e[e.Eager = 1] = "Eager", e[e.Default = 1] = "Default", e; })(la || {}), ua = new Map, XN = 0;
function ew() { return XN++; }
function tw(e) { ua.set(e[Ve], e); }
function Bm(e) { return ua.get(e) || null; }
function mu(e) { ua.delete(e[Ve]); }
function nw() { return ua; }
var js = class {
    lViewId;
    nodeIndex;
    native;
    component;
    directives;
    localRefs;
    get lView() { return Bm(this.lViewId); }
    constructor(t, n, o) { this.lViewId = t, this.nodeIndex = n, this.native = o; }
};
function Me(e) { let t = Ms(e); if (t) {
    if (ne(t)) {
        let n = t, o, r, i;
        if ($m(e)) {
            if (o = sw(n, e), o == -1)
                throw new Error("The provided component was not found in the application");
            r = e;
        }
        else if (rw(e)) {
            if (o = aw(n, e), o == -1)
                throw new Error("The provided directive was not found in the application");
            i = Um(o, n);
        }
        else if (o = ig(n, e), o == -1)
            return null;
        let s = O(n[o]), a = Ms(s), c = a && !Array.isArray(a) ? a : rg(n, o, s);
        if (r && c.component === void 0 && (c.component = r, $e(c.component, c)), i && c.directives === void 0) {
            c.directives = i;
            for (let l = 0; l < i.length; l++)
                $e(i[l], c);
        }
        $e(c.native, c), t = c;
    }
}
else {
    let n = e, o = n;
    for (; o = o.parentNode;) {
        let r = Ms(o);
        if (r) {
            let i = Array.isArray(r) ? r : r.lView;
            if (!i)
                return null;
            let s = ig(i, n);
            if (s >= 0) {
                let a = O(i[s]), c = rg(i, s, a);
                $e(a, c), t = c;
                break;
            }
        }
    }
} return t || null; }
function rg(e, t, n) { return new js(e[Ve], t, n); }
var yu = "__ngContext__";
function $e(e, t) { ne(t) ? (e[yu] = t[Ve], tw(t)) : e[yu] = t; }
function Ms(e) { let t = e[yu]; return typeof t == "number" ? Bm(t) : t || null; }
function ow(e) { let t = Ms(e); return t ? ne(t) ? t : t.lView : null; }
function $m(e) { return e && e.constructor && e.constructor.\u0275cmp; }
function rw(e) { return e && e.constructor && e.constructor.\u0275dir; }
function ig(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (O(e[o]) === t)
        return o; return -1; }
function iw(e) { if (e.child)
    return e.child; if (e.next)
    return e.next; for (; e.parent && !e.parent.next;)
    e = e.parent; return e.parent && e.parent.next; }
function sw(e, t) { let n = e[m].components; if (n)
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        if (ye(r, e)[U] === t)
            return r;
    }
else if (ye(I, e)[U] === t)
    return I; return -1; }
function aw(e, t) { let n = e[m].firstChild; for (; n;) {
    let o = n.directiveStart, r = n.directiveEnd;
    for (let i = o; i < r; i++)
        if (e[i] === t)
            return n.index;
    n = iw(n);
} return -1; }
function Um(e, t) { let n = t[m].data[e]; if (n.directiveStart === 0)
    return F; let o = []; for (let r = n.directiveStart; r < n.directiveEnd; r++) {
    let i = t[r];
    $m(i) || o.push(i);
} return o; }
function cw(e, t) { let n = t[m].data[e]; return De(n) ? t[n.directiveStart + n.componentOffset] : null; }
function lw(e, t) { let n = e[m].data[t]; if (n && n.localNames) {
    let o = {}, r = n.index + 1;
    for (let i = 0; i < n.localNames.length; i += 2)
        o[n.localNames[i]] = e[r], r++;
    return o;
} return null; }
function qm(e) { return Wm(e[Ft]); }
function Gm(e) { return Wm(e[he]); }
function Wm(e) { for (; e !== null && !K(e);)
    e = e[he]; return e; }
function sg(e) { let t = Me(e); if (t === null)
    return null; if (t.component === void 0) {
    let n = t.lView;
    if (n === null)
        return null;
    t.component = cw(t.nodeIndex, n);
} return t.component; }
function uw(e) { Iw(e); let t = Me(e), n = t ? t.lView : null; return n === null ? null : n[U]; }
function dw(e) { let t = Me(e), n = t ? t.lView : null; if (n === null)
    return null; let o; for (; n[m].type === 2 && (o = yt(n));)
    n = o; return st(n) ? null : n[U]; }
function fw(e) { let t = Me(e), n = t ? t.lView : null; if (n === null)
    return ce.NULL; let o = n[m].data[t.nodeIndex]; return new Wt(o, n); }
function pw(e) { let t = Me(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = o.data[t.nodeIndex], i = [], s = r.providerIndexes & 1048575, a = r.directiveEnd; for (let c = s; c < a; c++) {
    let l = o.data[c];
    Ew(l) && (l = l.type), i.push(l);
} return i; }
function hw(e) { if (e instanceof Text)
    return []; let t = Me(e), n = t ? t.lView : null; if (n === null)
    return []; let o = n[m], r = t.nodeIndex; return o?.data[r] ? (t.directives === void 0 && (t.directives = Um(r, n)), t.directives === null ? [] : [...t.directives]) : []; }
var zm = (function (e) { return e[e.Default = 0] = "Default", e[e.OnPush = 1] = "OnPush", e; })(zm || {}), Qm = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 1] = "None", e; })(Qm || {});
function gw(e) { let t = Me(e); if (t === null)
    return {}; if (t.localRefs === void 0) {
    let n = t.lView;
    if (n === null)
        return {};
    t.localRefs = lw(n, t.nodeIndex);
} return t.localRefs || {}; }
function mw(e) { return Me(e).native; }
function yw(e) { let t = Me(e), n = t === null ? null : t.lView; if (n === null)
    return []; let o = n[m], r = n[Lt], i = o.cleanup, s = []; if (i && r)
    for (let a = 0; a < i.length;) {
        let c = i[a++], l = i[a++];
        if (typeof c == "string") {
            let u = c, d = O(n[l]), f = r[i[a++]], p = i[a++], h = typeof p == "boolean" || p >= 0 ? "dom" : "output", y = typeof p == "boolean" ? p : !1;
            e == d && s.push({ element: e, name: u, callback: f, useCapture: y, type: h });
        }
    } return s.sort(vw), s; }
function vw(e, t) { return e.name == t.name ? 0 : e.name < t.name ? -1 : 1; }
function Ew(e) { return e.type !== void 0 && e.declaredInputs !== void 0 && e.resolveHostDirectives !== void 0; }
function Iw(e) { if (typeof Element < "u" && !(e instanceof Element))
    throw new Error("Expecting instance of DOM Element"); }
var vu;
function Dw(e) { vu = e; }
function da() { if (vu !== void 0)
    return vu; if (typeof document < "u")
    return document; throw new D(210, !1); }
var _t = new C("", { factory: () => Tw }), Tw = "ng";
var Ed = new C(""), Cw = new C("", { providedIn: "platform", factory: () => "unknown" }), Mw = new C(""), Nw = new C("", { factory: () => v($t).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null }), Zm = { breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840], placeholderResolution: 30, disableImageSizeWarning: !1, disableImageLazyLoadWarning: !1 }, ww = new C("", { factory: () => Zm });
function _w(e) { return e; }
var No = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => { let n = new e; return (typeof ngServerMode > "u" || !ngServerMode) && (n.store = Ym(v($t), v(_t))), n; } });
    store = {};
    onSerializeCallbacks = {};
    get(n, o) { return this.store[n] !== void 0 ? this.store[n] : o; }
    set(n, o) { this.store[n] = o; }
    remove(n) { delete this.store[n]; }
    hasKey(n) { return this.store.hasOwnProperty(n); }
    get isEmpty() { return Object.keys(this.store).length === 0; }
    onSerialize(n, o) { this.onSerializeCallbacks[n] = o; }
    toJson() { for (let n in this.onSerializeCallbacks)
        if (this.onSerializeCallbacks.hasOwnProperty(n))
            try {
                this.store[n] = this.onSerializeCallbacks[n]();
            }
            catch (o) {
                console.warn("Exception in onSerialize callback: ", o);
            } return JSON.stringify(this.store).replace(/</g, "\\u003C").replace(/\//g, "\\u002F"); }
} return e; })();
function Ym(e, t) { let n = e.getElementById(t + "-state"); if (n?.textContent)
    try {
        return JSON.parse(n.textContent);
    }
    catch (o) {
        console.warn("Exception while restoring TransferState for app " + t, o);
    } return {}; }
var Id = "h", Dd = "b", Km = "f", Jm = "n", ti = "e", fa = "t", wo = "c", ni = "x", Mt = "r", pa = "i", oi = "n", _o = "d", ha = "l", ga = "di", ri = "s", Td = "p", ii = "t", Rn = new C(""), Xm = !1, Cd = new C("", { factory: () => Xm }), Md = new C(""), ma = new C(""), Nd = !1, ey = new C("", { factory: () => [] }), wd = new C(""), si = new C("", { factory: () => new Map }), Sw = new C(""), Vs = { passive: !0, capture: !0 }, Wl = new WeakMap, zl = new WeakMap, Gt = new WeakMap, Hs = ["click", "keydown"], Bs = ["mouseenter", "mouseover", "focusin"], ds = new Map, Pr = class {
    callbacks = new Set;
    listener = () => { for (let t of this.callbacks)
        t(); };
};
function ty(e, t) { let n = zl.get(e); if (!n) {
    n = new Pr, zl.set(e, n);
    for (let o of Hs)
        e.addEventListener(o, n.listener, Vs);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    zl.delete(e);
    for (let i of Hs)
        e.removeEventListener(i, r, Vs);
} }; }
function ny(e, t) { let n = Wl.get(e); if (!n) {
    n = new Pr, Wl.set(e, n);
    for (let o of Bs)
        e.addEventListener(o, n.listener, Vs);
} return n.callbacks.add(t), () => { let { callbacks: o, listener: r } = n; if (o.delete(t), o.size === 0) {
    for (let i of Bs)
        e.removeEventListener(i, r, Vs);
    Wl.delete(e);
} }; }
function bw(e) { let t = oy(e); return new IntersectionObserver(n => { for (let o of n)
    o.isIntersecting && Gt.has(o.target) && Gt.get(o.target)?.get(t)?.listener(); }, e); }
function Aw(e, t, n, o) { let r = oy(o), i = Gt.get(e)?.get(r); ds.has(r) || ds.set(r, { observer: n(o), count: 0 }); let s = ds.get(r); if (!i) {
    i = new Pr, s.observer.observe(e);
    let a = Gt.get(e);
    a ? a.set(r, i) : (a = new Map, Gt.set(e, a)), a.set(r, i), s.count++;
} return i.callbacks.add(t), () => { if (Gt.get(e)?.has(r)) {
    if (i.callbacks.delete(t), i.callbacks.size === 0) {
        s.observer.unobserve(e), s.count--;
        let a = Gt.get(e);
        a && (a.delete(r), a.size === 0 && Gt.delete(e));
    }
    s.count === 0 && (s.observer.disconnect(), ds.delete(r));
} }; }
function oy(e) {
    return e ? `${e.rootMargin}/${typeof e.threshold == "number" ? e.threshold : e.threshold?.join(`
`)}` : "";
}
var So = "ngb";
function _d(e, t, n = null) { if (t.length === 0 || e.nodeType !== Node.ELEMENT_NODE)
    return; let o = e.getAttribute(Zn.JSACTION), r = t.reduce((s, a) => (o?.indexOf(a) ?? -1) === -1 ? s + a + ":;" : s, ""); e.setAttribute(Zn.JSACTION, `${o ?? ""}${r}`); let i = n ?? ""; i !== "" && r.length > 0 && e.setAttribute(So, i); }
var ry = (e, t, n) => { let o = e, r = o.__jsaction_fns ?? new Map, i = r.get(t) ?? []; i.push(n), r.set(t, i), o.__jsaction_fns = r; }, Sd = (e, t) => { let n = e, o = n.getAttribute(So) ?? "", r = t.get(o) ?? new Set; r.has(n) || r.add(n), t.set(o, r); };
function Rw(e, t) { if (e.length > 0) {
    let n = [];
    for (let r of e)
        t.has(r) && (n = [...n, ...t.get(r)]);
    new Set(n).forEach(bd);
} }
var bd = e => { e.removeAttribute(Zn.JSACTION), e.removeAttribute(So), e.__jsaction_fns = void 0; }, Ad = new C("", { factory: () => ({}) }), Eu = new WeakMap;
function kw(e, t) { if (e == null || typeof e != "object")
    return; let n = Eu.get(e); n || (n = new WeakSet, Eu.set(e, n)), n.add(t); }
function Rd(e, t) { let n = t?.__jsaction_fns?.get(e.type); if (!(!n || !t?.isConnected) && !(t && Eu.get(e)?.has(t)))
    for (let o of n)
        o(e); }
var Iu = new Map;
function iy(e, t) { return Iu.set(e, t), () => Iu.delete(e); }
var ag = !1, sy = (e, t, n, o) => { };
function Ow(e, t, n, o) { sy(e, t, n, o); }
function ay() { ag || (sy = (e, t, n, o) => { let r = e[L].get(_t); Iu.get(r)?.(t, n, o); }, ag = !0); }
var St = new C(""), cy = (() => { class e {
    registry = new Map;
    cleanupFns = new Map;
    jsActionMap = v(si);
    contract = v(Ad);
    add(n, o) { if (this.registry.set(n, o), this.awaitingCallbacks.has(n)) {
        let r = this.awaitingCallbacks.get(n);
        for (let i of r)
            i();
    } }
    get(n) { return this.registry.get(n) ?? null; }
    has(n) { return this.registry.has(n); }
    cleanup(n) { Rw(n, this.jsActionMap); for (let o of n)
        this.registry.delete(o), this.jsActionMap.delete(o), this.invokeTriggerCleanupFns(o), this.hydrating.delete(o), this.awaitingCallbacks.delete(o); this.size === 0 && this.contract.instance?.cleanUp(); }
    get size() { return this.registry.size; }
    addCleanupFn(n, o) { let r = []; this.cleanupFns.has(n) && (r = this.cleanupFns.get(n)), r.push(o), this.cleanupFns.set(n, r); }
    invokeTriggerCleanupFns(n) { let o = this.cleanupFns.get(n) ?? []; for (let r of o)
        r(); this.cleanupFns.delete(n); }
    hydrating = new Map;
    awaitingCallbacks = new Map;
    awaitParentBlock(n, o) { let r = this.awaitingCallbacks.get(n) ?? []; r.push(o), this.awaitingCallbacks.set(n, r); }
    static \u0275prov = B({ token: e, providedIn: null, factory: () => new e });
} return e; })();
function bo(e) { return (e.flags & 32) === 32; }
var ly = "__nghData__", ya = ly, uy = "__nghDeferData__", va = uy;
function xw(e) { return e === ly || e === uy; }
var io = "ngh", dy = "nghm", fy = () => null;
function Pw(e, t, n = !1) { let o = e.getAttribute(io); if (o == null)
    return null; let [r, i] = o.split("|"); if (o = n ? i : r, !o)
    return null; let s = i ? `|${i}` : "", a = n ? r : s, c = {}; if (o !== "") {
    let u = t.get(No, null, { optional: !0 });
    u !== null && (c = u.get(ya, [])[Number(o)]);
} let l = { data: c, firstChild: e.firstChild ?? null }; return n && (l.firstChild = e, Ea(l, 0, e.nextSibling)), a ? e.setAttribute(io, a) : e.removeAttribute(io), l; }
function py() { fy = Pw; }
function hy(e, t, n = !1) { return fy(e, t, n); }
function kd(e) { let t = e._lView; return t[m].type === 2 ? null : (st(t) && (t = t[I]), t); }
function Lw(e) { return e.textContent?.replace(/\s/gm, ""); }
function Fw(e) { let t = da(), n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, { acceptNode(i) { let s = Lw(i); return s === "ngetn" || s === "ngtns" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; } }), o, r = []; for (; o = n.nextNode();)
    r.push(o); for (let i of r)
    i.textContent === "ngetn" ? i.replaceWith(t.createTextNode("")) : i.remove(); }
var gy = (function (e) { return e.Hydrated = "hydrated", e.Skipped = "skipped", e.Mismatched = "mismatched", e; })(gy || {}), jw = "__ngDebugHydrationInfo__";
function Vw(e) { return e[jw] ?? null; }
function Ea(e, t, n) { e.segmentHeads ??= {}, e.segmentHeads[t] = n; }
function Du(e, t) { return e.segmentHeads?.[t] ?? null; }
function ai(e) { return e.get(wd, !1, { optional: !0 }); }
var Hw = !1;
function Bw() { Hw = !1; }
function my(e, t) { let n = e.data, o = n[ti]?.[t] ?? null; return o === null && n[wo]?.[t] && (o = Od(e, t)), o; }
function $w(e, t) { return e.data[ti]?.[t] !== void 0; }
function yy(e, t) { return e.data[wo]?.[t] ?? null; }
function Od(e, t) { let n = yy(e, t) ?? [], o = 0; for (let r of n)
    o += r[Mt] * (r[ni] ?? 1); return o; }
function vy(e) { if (typeof e.disconnectedNodes > "u") {
    let t = e.data[_o];
    e.disconnectedNodes = t ? new Set(t) : null;
} return e.disconnectedNodes; }
function Ia(e, t) { if (typeof e.disconnectedNodes > "u") {
    let n = e.data[_o];
    e.disconnectedNodes = n ? new Set(n) : null;
} return !!vy(e)?.has(t); }
function Da(e, t) { let n = e[ue]; return n !== null && !hr() && !bo(t) && !Ia(n, t.index - I); }
function xd(e, t) { let n = t, o = e.corruptedTextNodes; n.textContent === "" ? o.set(n, "ngetn") : n.nextSibling?.nodeType === Node.TEXT_NODE && o.set(n, "ngtns"); }
function Ey(e) { let t = []; return e !== null && (e.has(4) && t.push(...Bs), e.has(3) && t.push(...Hs)), t; }
function Uw(e, t) { let n = t.get(St), r = t.get(No).get(va, {}), i = !1, s = e, a = null, c = []; for (; !i && s;) {
    i = n.has(s);
    let l = n.hydrating.get(s);
    if (a === null && l != null) {
        a = l.promise;
        break;
    }
    c.unshift(s), s = r[s][Td];
} return { parentBlockPromise: a, hydrationQueue: c }; }
function qw(e) { let t = e.body.querySelectorAll("[jsaction]"), n = new Set, o = [Bs.join(":;"), Hs.join(":;")].join("|"); for (let r of t) {
    let i = r.getAttribute("jsaction"), s = r.getAttribute("ngb");
    i?.match(o) && s !== null && n.add(r);
} return n; }
function Iy(e, t) { let n = qw(e), o = t.get(si); for (let r of n)
    Sd(r, o); }
var Dy = () => ({});
function Gw(e) { let t = e.get(No, null, { optional: !0 }); return t !== null ? t.get(va, {}) : {}; }
function Ty() { Dy = Gw; }
function Ww(e) { return Dy(e); }
function zw(e) { return typeof e == "object" && e.trigger === 5; }
function Qw(e) { return e[ii]?.find(n => zw(n))?.delay ?? null; }
function Zw(e) { let t = e[ii]; if (t)
    for (let n of t) {
        if (n === 2)
            return !0;
        if (typeof n == "object" && n.trigger === 2)
            return n.intersectionObserverOptions || !0;
    } return null; }
function cg(e, t) { return e[ii]?.includes(t) ?? !1; }
function Yw(e) { return { data: e, hydrate: { idle: cg(e, 0), immediate: cg(e, 1), timer: Qw(e), viewport: Zw(e) } }; }
function Cy(e) { let t = Ww(e), n = new Map; for (let o in t)
    n.set(o, Yw(t[o])); return n; }
function Ql(e) { return !!e && e.nodeType === Node.COMMENT_NODE && e.textContent?.trim() === dy; }
function lg(e) { for (; e && e.nodeType === Node.TEXT_NODE;)
    e = e.previousSibling; return e; }
function My(e) { for (let o of e.body.childNodes)
    if (Ql(o))
        return; let t = lg(e.body.previousSibling); if (Ql(t))
    return; let n = lg(e.head.lastChild); if (!Ql(n))
    throw new D(-507, !1); }
function Ny(e, t) { let n = e.contentQueries; if (n !== null) {
    let o = R(null);
    try {
        for (let r = 0; r < n.length; r += 2) {
            let i = n[r], s = n[r + 1];
            if (s !== -1) {
                let a = e.data[s];
                gr(i), a.contentQueries(2, t[s], s);
            }
        }
    }
    finally {
        R(o);
    }
} }
function Tu(e, t, n) { gr(0); let o = R(null); try {
    t(e, n);
}
finally {
    R(o);
} }
function Pd(e, t, n) { if (al(t)) {
    let o = R(null);
    try {
        let r = t.directiveStart, i = t.directiveEnd;
        for (let s = r; s < i; s++) {
            let a = e.data[s];
            if (a.contentQueries) {
                let c = n[s];
                a.contentQueries(1, c, s);
            }
        }
    }
    finally {
        R(o);
    }
} }
var Ue = (function (e) { return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e[e.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom", e; })(Ue || {}), Kw = { name: "custom-elements" }, Jw = { name: "no-errors-schema" }, wy = !1;
function Xw(e) { wy = e; }
function e_() { return wy; }
var _y = !1;
function t_(e) { _y = e; }
function n_() { return _y; }
var fs;
function Sy() { if (fs === void 0 && (fs = null, Se.trustedTypes))
    try {
        fs = Se.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return fs; }
function Ao(e) { return Sy()?.createHTML(e) || e; }
function o_(e) { return Sy()?.createScriptURL(e) || e; }
var ps;
function Ld() { if (ps === void 0 && (ps = null, Se.trustedTypes))
    try {
        ps = Se.trustedTypes.createPolicy("angular#unsafe-bypass", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
    }
    catch { } return ps; }
function ug(e) { return Ld()?.createHTML(e) || e; }
function dg(e) { return Ld()?.createScript(e) || e; }
function fg(e) { return Ld()?.createScriptURL(e) || e; }
var Nt = class {
    changingThisBreaksApplicationSecurity;
    constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
    toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${Vi})`; }
}, Cu = class extends Nt {
    getTypeName() { return "HTML"; }
}, Mu = class extends Nt {
    getTypeName() { return "Style"; }
}, Nu = class extends Nt {
    getTypeName() { return "Script"; }
}, wu = class extends Nt {
    getTypeName() { return "URL"; }
}, _u = class extends Nt {
    getTypeName() { return "ResourceURL"; }
};
function bt(e) { return e instanceof Nt ? e.changingThisBreaksApplicationSecurity : e; }
function Ro(e, t) { let n = by(e); if (n != null && n !== t) {
    if (n === "ResourceURL" && t === "URL")
        return !0;
    throw new Error(`Required a safe ${t}, got a ${n} (see ${Vi})`);
} return n === t; }
function by(e) { return e instanceof Nt && e.getTypeName() || null; }
function r_(e) { return new Cu(e); }
function i_(e) { return new Mu(e); }
function s_(e) { return new Nu(e); }
function a_(e) { return new wu(e); }
function c_(e) { return new _u(e); }
function Ay(e) { let t = new bu(e); return l_() ? new Su(t) : t; }
var Su = class {
    inertDocumentHelper;
    constructor(t) { this.inertDocumentHelper = t; }
    getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
        let n = new window.DOMParser().parseFromString(Ao(t), "text/html").body;
        return n === null ? this.inertDocumentHelper.getInertBodyElement(t) : (n.firstChild?.remove(), n);
    }
    catch {
        return null;
    } }
}, bu = class {
    defaultDoc;
    inertDocument;
    constructor(t) { this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"); }
    getInertBodyElement(t) { let n = this.inertDocument.createElement("template"); return n.innerHTML = Ao(t), n; }
};
function l_() { try {
    return !!new window.DOMParser().parseFromString(Ao(""), "text/html");
}
catch {
    return !1;
} }
var u_ = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function Ta(e) { return e = String(e), e.match(u_) ? e : "unsafe:" + e; }
function pt(e) { let t = {}; for (let n of e.split(","))
    t[n] = !0; return t; }
function ko(...e) { let t = {}; for (let n of e)
    for (let o in n)
        n.hasOwnProperty(o) && (t[o] = !0); return t; }
var Ry = pt("area,br,col,hr,img,wbr"), ky = pt("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), Oy = pt("rp,rt"), d_ = ko(Oy, ky), f_ = ko(ky, pt("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), p_ = ko(Oy, pt("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Au = ko(Ry, f_, p_, d_), Fd = pt("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), h_ = pt("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), g_ = pt("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"), Ru = ko(Fd, h_, g_), m_ = pt("script,style,template"), xy = ko(Fd, pt("action,formaction,data,codebase")), ku = class {
    sanitizedSomething = !1;
    buf = [];
    sanitizeChildren(t) { let n = t.firstChild, o = !0, r = []; for (; n;) {
        if (n.nodeType === Node.ELEMENT_NODE ? o = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, o && n.firstChild) {
            r.push(n), n = E_(n);
            continue;
        }
        for (; n;) {
            n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
            let i = v_(n);
            if (i) {
                n = i;
                break;
            }
            n = r.pop();
        }
    } return this.buf.join(""); }
    startElement(t) { let n = pg(t).toLowerCase(); if (!Au.hasOwnProperty(n))
        return this.sanitizedSomething = !0, !m_.hasOwnProperty(n); this.buf.push("<"), this.buf.push(n); let o = t.attributes; for (let r = 0; r < o.length; r++) {
        let i = o.item(r), s = i.name, a = s.toLowerCase();
        if (!Ru.hasOwnProperty(a)) {
            this.sanitizedSomething = !0;
            continue;
        }
        let c = i.value;
        Fd[a] && (c = Ta(c)), this.buf.push(" ", s, '="', hg(c), '"');
    } return this.buf.push(">"), !0; }
    endElement(t) { let n = pg(t).toLowerCase(); Au.hasOwnProperty(n) && !Ry.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">")); }
    chars(t) { this.buf.push(hg(t)); }
};
function y_(e, t) { return (e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) !== Node.DOCUMENT_POSITION_CONTAINED_BY; }
function v_(e) { let t = e.nextSibling; if (t && e !== t.previousSibling)
    throw Py(t); return t; }
function E_(e) { let t = e.firstChild; if (t && y_(e, t))
    throw Py(t); return t; }
function pg(e) { let t = e.nodeName; return typeof t == "string" ? t : "FORM"; }
function Py(e) { return new Error(`Failed to sanitize html because the element is clobbered: ${e.outerHTML}`); }
var I_ = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, D_ = /([^\#-~ |!])/g;
function hg(e) { return e.replace(/&/g, "&amp;").replace(I_, function (t) { let n = t.charCodeAt(0), o = t.charCodeAt(1); return "&#" + ((n - 55296) * 1024 + (o - 56320) + 65536) + ";"; }).replace(D_, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
var hs;
function Ly(e, t) { let n = null; try {
    hs = hs || Ay(e);
    let o = t ? String(t) : "";
    n = hs.getInertBodyElement(o);
    let r = 5, i = o;
    do {
        if (r === 0)
            throw new Error("Failed to sanitize html because the input is unstable");
        r--, o = i, i = n.innerHTML, n = hs.getInertBodyElement(o);
    } while (o !== i);
    let a = new ku().sanitizeChildren(Ou(n) || n);
    return Ao(a);
}
finally {
    if (n) {
        let o = Ou(n) || n;
        for (; o.firstChild;)
            o.firstChild.remove();
    }
} }
function Ou(e) { return "content" in e && T_(e) ? e.content : null; }
function T_(e) { return e.nodeType === Node.ELEMENT_NODE && e.nodeName === "TEMPLATE"; }
var C_ = /^>|^->|<!--|-->|--!>|<!-$/g, M_ = /(<|>)/g, N_ = "\u200B$1\u200B";
function w_(e) { return e.replace(C_, t => t.replace(M_, N_)); }
function jd(e, t) { return e.createText(t); }
function Fy(e, t, n) { e.setValue(t, n); }
function Vd(e, t) { return e.createComment(w_(t)); }
function Ca(e, t, n) { return e.createElement(t, n); }
function Dn(e, t, n, o, r) { e.insertBefore(t, n, o, r); }
function jy(e, t, n) { e.appendChild(t, n); }
function gg(e, t, n, o, r) { o !== null ? Dn(e, t, n, o, r) : jy(e, t, n); }
function ci(e, t, n, o) { e.removeChild(null, t, n, o); }
function Vy(e) { e.textContent = ""; }
function __(e, t, n) { e.setAttribute(t, "style", n); }
function S_(e, t, n) { n === "" ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n); }
function Hy(e, t, n) { let { mergedAttrs: o, classes: r, styles: i } = n; o !== null && kN(e, t, o), r !== null && S_(e, t, r), i !== null && __(e, t, i); }
function b_(e) { let t = g(); e.src = "", e.srcdoc = Ao(""), ci(t[w], e); }
var kn = (function (e) { return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e; })(kn || {});
function By(e) { let t = li(); return t ? ug(t.sanitize(kn.HTML, e) || "") : Ro(e, "HTML") ? ug(bt(e)) : Ly(da(), b(e)); }
function $y(e) { let t = li(); return t ? t.sanitize(kn.STYLE, e) || "" : Ro(e, "Style") ? bt(e) : b(e); }
function Hd(e) { let t = li(); return t ? t.sanitize(kn.URL, e) || "" : Ro(e, "URL") ? bt(e) : Ta(b(e)); }
function Bd(e) { let t = li(); if (t)
    return fg(t.sanitize(kn.RESOURCE_URL, e) || ""); if (Ro(e, "ResourceURL"))
    return fg(bt(e)); throw new D(904, !1); }
function Uy(e) { let t = li(); if (t)
    return dg(t.sanitize(kn.SCRIPT, e) || ""); if (Ro(e, "Script"))
    return dg(bt(e)); throw new D(905, !1); }
function qy(e) { return Ao(e[0]); }
function Gy(e) { return o_(e[0]); }
var A_ = { embed: { src: !0 }, frame: { src: !0 }, iframe: { src: !0 }, media: { src: !0 }, script: { src: !0, href: !0, "xlink:href": !0 }, base: { href: !0 }, link: { href: !0 }, object: { data: !0, codebase: !0 } };
function R_(e, t) { return A_[e]?.[t] === !0 ? Bd : Hd; }
function Wy(e, t, n) { return R_(t, n)(e); }
function li() { let e = g(); return e && e[je].sanitizer; }
var gs = new Set(["href", "xlink:href"]), zy = { iframe: { sandbox: !0, allow: !0, allowfullscreen: !0, referrerpolicy: !0, csp: !0, fetchpriority: !0 }, animate: { attributename: !0, to: gs, values: gs, from: gs }, set: { attributename: !0, to: gs }, animatemotion: { attributename: !0 }, animatetransform: { attributename: !0 } };
function $d(e, t, n) { let o = t.toLowerCase(), r = n.toLowerCase(), i = zy[o]?.[r]; if (!i)
    return e; let s = ke(); if (s.type !== 2)
    return e; let a = g(); if (o === "iframe") {
    let l = ie(s, a);
    b_(l);
} if (typeof i != "boolean") {
    let u = ie(s, a).getAttribute("attributeName");
    if (u && i.has(u.toLowerCase()))
        throw new D(-910, !1);
    return e;
} let c = !1; throw new D(-910, c); }
function k_() { return Ye([]); }
function Qy(e) { return e.ownerDocument.defaultView; }
function Zy(e) { return e.ownerDocument; }
function Ud(e) { return e.ownerDocument.body; }
var O_ = "\uFFFD";
function to(e) { return e instanceof Function ? e() : e; }
function x_(e, t, n) { let o = e.length; for (;;) {
    let r = e.indexOf(t, n);
    if (r === -1)
        return r;
    if (r === 0 || e.charCodeAt(r - 1) <= 32) {
        let i = t.length;
        if (r + i === o || e.charCodeAt(r + i) <= 32)
            return r;
    }
    n = r + 1;
} }
var Yy = "ng-template";
function P_(e, t, n, o) { let r = 0; if (o) {
    for (; r < t.length && typeof t[r] == "string"; r += 2)
        if (t[r] === "class" && x_(t[r + 1].toLowerCase(), n, 0) !== -1)
            return !0;
}
else if (qd(e))
    return !1; if (r = t.indexOf(1, r), r > -1) {
    let i;
    for (; ++r < t.length && typeof (i = t[r]) == "string";)
        if (i.toLowerCase() === n)
            return !0;
} return !1; }
function qd(e) { return e.type === 4 && e.value !== Yy; }
function L_(e, t, n) { let o = e.type === 4 && !n ? Yy : e.value; return t === o; }
function F_(e, t, n) { let o = 4, r = e.attrs, i = r !== null ? H_(r) : 0, s = !1; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "number") {
        if (!s && !Xe(o) && !Xe(c))
            return !1;
        if (s && Xe(c))
            continue;
        s = !1, o = c | o & 1;
        continue;
    }
    if (!s)
        if (o & 4) {
            if (o = 2 | o & 1, c !== "" && !L_(e, c, n) || c === "" && t.length === 1) {
                if (Xe(o))
                    return !1;
                s = !0;
            }
        }
        else if (o & 8) {
            if (r === null || !P_(e, r, c, n)) {
                if (Xe(o))
                    return !1;
                s = !0;
            }
        }
        else {
            let l = t[++a], u = j_(c, r, qd(e), n);
            if (u === -1) {
                if (Xe(o))
                    return !1;
                s = !0;
                continue;
            }
            if (l !== "") {
                let d;
                if (u > i ? d = "" : d = r[u + 1].toLowerCase(), o & 2 && l !== d) {
                    if (Xe(o))
                        return !1;
                    s = !0;
                }
            }
        }
} return Xe(o) || s; }
function Xe(e) { return (e & 1) === 0; }
function j_(e, t, n, o) { if (t === null)
    return -1; let r = 0; if (o || !n) {
    let i = !1;
    for (; r < t.length;) {
        let s = t[r];
        if (s === e)
            return r;
        if (s === 3 || s === 6)
            i = !0;
        else if (s === 1 || s === 2) {
            let a = t[++r];
            for (; typeof a == "string";)
                a = t[++r];
            continue;
        }
        else {
            if (s === 4)
                break;
            if (s === 0) {
                r += 4;
                continue;
            }
        }
        r += i ? 1 : 2;
    }
    return -1;
}
else
    return B_(t, e); }
function Ky(e, t, n = !1) { for (let o = 0; o < t.length; o++)
    if (F_(e, t[o], n))
        return !0; return !1; }
function V_(e) { let t = e.attrs; if (t != null) {
    let n = t.indexOf(5);
    if ((n & 1) === 0)
        return t[n + 1];
} return null; }
function H_(e) { for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (Nm(n))
        return t;
} return e.length; }
function B_(e, t) { let n = e.indexOf(4); if (n > -1)
    for (n++; n < e.length;) {
        let o = e[n];
        if (typeof o == "number")
            return -1;
        if (o === t)
            return n;
        n++;
    } return -1; }
function $_(e, t) { e: for (let n = 0; n < t.length; n++) {
    let o = t[n];
    if (e.length === o.length) {
        for (let r = 0; r < e.length; r++)
            if (e[r] !== o[r])
                continue e;
        return !0;
    }
} return !1; }
function mg(e, t) { return e ? ":not(" + t.trim() + ")" : t; }
function U_(e) { let t = e[0], n = 1, o = 2, r = "", i = !1; for (; n < e.length;) {
    let s = e[n];
    if (typeof s == "string")
        if (o & 2) {
            let a = e[++n];
            r += "[" + s + (a.length > 0 ? '="' + a + '"' : "") + "]";
        }
        else
            o & 8 ? r += "." + s : o & 4 && (r += " " + s);
    else
        r !== "" && !Xe(s) && (t += mg(i, r), r = ""), o = s, i = i || !Xe(o);
    n++;
} return r !== "" && (t += mg(i, r)), t; }
function q_(e) { return e.map(U_).join(","); }
function G_(e) { let t = [], n = [], o = 1, r = 2; for (; o < e.length;) {
    let i = e[o];
    if (typeof i == "string")
        r === 2 ? i !== "" && t.push(i, e[++o]) : r === 8 && n.push(i);
    else {
        if (!Xe(r))
            break;
        r = i;
    }
    o++;
} return n.length && t.push(1, ...n), t; }
var H = {};
function Gd(e, t, n, o, r, i, s, a, c, l, u) { let d = I + o, f = d + r, p = W_(d, f), h = typeof l == "function" ? l() : l; return p[m] = { type: e, blueprint: p, template: n, queries: null, viewQuery: a, declTNode: t, data: p.slice().fill(null, d), bindingStartIndex: d, expandoStartIndex: f, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: typeof i == "function" ? i() : i, pipeRegistry: typeof s == "function" ? s() : s, firstChild: null, schemas: c, consts: h, incompleteFirstPass: !1, ssrId: u }; }
function W_(e, t) { let n = []; for (let o = 0; o < t; o++)
    n.push(o < e ? null : H); return n; }
function Jy(e) { let t = e.tView; return t === null || t.incompleteFirstPass ? e.tView = Gd(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t; }
function Ma(e, t, n, o, r, i, s, a, c, l, u) { let d = t.blueprint.slice(); return d[$] = r, d[N] = o | 4 | 128 | 8 | 64 | 1024, (l !== null || e && e[N] & 2048) && (d[N] |= 2048), dl(d), d[Q] = d[cn] = e, d[U] = n, d[je] = s || e && e[je], d[w] = a || e && e[w], d[L] = c || e && e[L] || null, d[le] = i, d[Ve] = ew(), d[ue] = u, d[il] = l, d[ee] = t.type == 2 ? e[ee] : d, d; }
function z_(e, t, n) { let o = ie(t, e), r = Jy(n), i = e[je].rendererFactory, s = zd(e, Ma(e, r, null, Wd(n), o, t, null, i.createRenderer(o, n), null, null, null)); return e[t.index] = s; }
function Wd(e) { let t = 16; return e.signals ? t = 4096 : e.onPush && (t = 64), t; }
function ui(e, t, n, o) { if (n === 0)
    return -1; let r = t.length; for (let i = 0; i < n; i++)
    t.push(o), e.blueprint.push(o), e.data.push(null); return r; }
function zd(e, t) { return e[Ft] ? e[lr][he] = t : e[Ft] = t, e[lr] = t, t; }
function Xy(e = 1) { ev(A(), g(), de() + e, !1); }
function ev(e, t, n, o) { if (!o)
    if ((t[N] & 3) === 3) {
        let i = e.preOrderCheckHooks;
        i !== null && Ds(t, i, n);
    }
    else {
        let i = e.preOrderHooks;
        i !== null && Ts(t, i, 0, n);
    } Bt(n); }
var Na = (function (e) { return e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform", e; })(Na || {});
function zt(e, t, n, o) { let r = R(null); try {
    let [i, s, a] = e.inputs[n], c = null;
    (s & Na.SignalBased) !== 0 && (c = t[i][ae]), c !== null && c.transformFn !== void 0 ? o = c.transformFn(o) : a !== null && (o = a.call(t, o)), e.setInput !== null ? e.setInput(t, c, o, n, i) : ym(t, c, i, o);
}
finally {
    R(r);
} }
var $s = (function (e) { return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e; })($s || {}), xu;
function Qd(e, t) { return xu(e, t); }
function Q_(e) { xu === void 0 && (xu = e()); }
var tv = new C("", { factory: () => !1 }), nv = new C("", { factory: () => Z_ }), Z_ = 4e3, Y_ = !1, On = (typeof ngServerMode > "u" || !ngServerMode) && typeof document < "u" && typeof document?.documentElement?.getAnimations == "function";
function wa(e) { return e[L].get(tv, Y_); }
function K_(e, t, n) { let o = fo.get(e); if (o) {
    for (let r of t)
        o.classList.push(r);
    for (let r of n)
        o.cleanupFns.push(r);
}
else
    fo.set(e, { classList: t, cleanupFns: n }); }
function Zd(e) { let t = fo.get(e); if (t) {
    for (let n of t.cleanupFns)
        n();
    fo.delete(e);
} En.delete(e); }
var J_ = () => { }, fo = new WeakMap, En = new WeakMap, Lr = new WeakMap, Dr = new WeakSet;
function Pu(e, t) { let n = Lr.get(e); if (n && n.length > 0) {
    let o = n.findIndex(r => r === t);
    o > -1 && n.splice(o, 1);
} n?.length === 0 && Lr.delete(e); }
function X_(e, t) { let n = Lr.get(e); if (!n || n.length === 0)
    return; let o = t.parentNode, r = t.previousSibling; for (let i = n.length - 1; i >= 0; i--) {
    let s = n[i], a = s.parentNode;
    s === t ? (n.splice(i, 1), Dr.add(s), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } }))) : (r && s === r || a && o && a !== o) && (n.splice(i, 1), s.dispatchEvent(new CustomEvent("animationend", { detail: { cancel: !0 } })), s.parentNode?.removeChild(s));
} }
function Yd(e, t) { let n = Lr.get(e); n ? n.includes(t) || n.push(t) : Lr.set(e, [t]); }
function Us(e) { let t = e[it] ??= {}; return t.enter ??= new Map; }
function Tn(e) { let t = e[it] ??= {}; return t.leave ??= new Map; }
function ov(e) { let t = typeof e == "function" ? e() : e, n = Array.isArray(t) ? t : null; return typeof t == "string" && (n = t.trim().split(/\s+/).filter(o => o)), n; }
function eS(e, t) { if (!On)
    return; let n = fo.get(e); if (n && n.classList.length > 0 && tS(e, n.classList))
    for (let o of n.classList)
        t.removeClass(e, o); Zd(e); }
function tS(e, t) { for (let n of t)
    if (e.classList.contains(n))
        return !0; return !1; }
function Fr(e) { return e.composedPath ? e.composedPath()[0] : e.target; }
function Kd(e, t) { let n = En.get(t); return n === void 0 ? !0 : t === Fr(e) && (n.animationName !== void 0 && e.animationName === n.animationName || n.propertyName !== void 0 && (n.propertyName === "all" || e.propertyName === n.propertyName)); }
function _a(e, t, n) { let o = e.get(t.index) ?? { animateFns: [] }; o.animateFns.push(n), e.set(t.index, o); }
function Lu(e, t) { if (e)
    for (let n of e)
        n(); for (let n of t)
    n(); }
function Fu(e, t) { let n = Tn(e).get(t.index); n && (n.resolvers = void 0); }
function ms(e, t, n, o, r) { Pu(t, n), Lu(o, r), Fu(e, t); }
function qs(e) { if (!e)
    return 0; let t = e.toLowerCase().indexOf("ms") > -1 ? 1 : 1e3; return parseFloat(e) * t; }
function yn(e, t) { return e.getPropertyValue(t).split(",").map(o => o.trim()); }
function nS(e) { let t = yn(e, "transition-property"), n = yn(e, "transition-duration"), o = yn(e, "transition-delay"), r = { propertyName: "", duration: 0, animationName: void 0 }; for (let i = 0; i < t.length; i++) {
    let s = qs(o[i]) + qs(n[i]);
    s > r.duration && (r.propertyName = t[i], r.duration = s);
} return r; }
function oS(e) { let t = yn(e, "animation-name"), n = yn(e, "animation-delay"), o = yn(e, "animation-duration"), r = yn(e, "animation-iteration-count"), i = { animationName: "", propertyName: void 0, duration: 0 }; for (let s = 0; s < t.length; s++) {
    let a = qs(n[s]) + qs(o[s]), c = r[s];
    a > i.duration && c !== "infinite" && (i.animationName = t[s], i.duration = a);
} return i; }
function rv(e, t) { return e !== void 0 && e.duration > t.duration; }
function iv(e) { return (e.animationName != null || e.propertyName != null) && e.duration > 0; }
function rS(e, t) { let n = getComputedStyle(e), o = oS(n), r = nS(n), i = o.duration > r.duration ? o : r; rv(t.get(e), i) || iv(i) && t.set(e, i); }
function sv(e, t, n) { if (!n)
    return; let o = e.getAnimations(); return o.length === 0 ? rS(e, t) : iS(e, t, o); }
function iS(e, t, n) { let o = { animationName: void 0, propertyName: void 0, duration: 0 }; for (let r of n) {
    let i = r.effect?.getTiming();
    if (i?.iterations === 1 / 0)
        continue;
    let s = typeof i?.duration == "number" ? i.duration : 0, a = (i?.delay ?? 0) + s, c = r.playbackRate;
    c !== void 0 && c !== 0 && c !== 1 && (a /= Math.abs(c));
    let l, u;
    r.animationName ? u = r.animationName : l = r.transitionProperty, a >= o.duration && (o = { animationName: u, propertyName: l, duration: a });
} rv(t.get(e), o) || iv(o) && t.set(e, o); }
var Cn = new Set, Sa = (function (e) { return e[e.CHANGE_DETECTION = 0] = "CHANGE_DETECTION", e[e.AFTER_NEXT_RENDER = 1] = "AFTER_NEXT_RENDER", e; })(Sa || {}), xn = new C(""), yg = new Set;
function J(e) { yg.has(e) || (yg.add(e), performance?.mark?.("mark_feature_usage", { detail: { feature: e } })); }
var ba = (() => { class e {
    impl = null;
    execute() { this.impl?.execute(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), Jd = [0, 1, 2, 3], Xd = (() => { class e {
    ngZone = v(q);
    scheduler = v(xe);
    errorHandler = v(vt, { optional: !0 });
    sequences = new Set;
    deferredRegistrations = new Set;
    executing = !1;
    constructor() { v(xn, { optional: !0 }); }
    execute() { let n = this.sequences.size > 0; n && V(x.AfterRenderHooksStart), this.executing = !0; for (let o of Jd)
        for (let r of this.sequences)
            if (!(r.erroredOrDestroyed || !r.hooks[o]))
                try {
                    r.pipelinedValue = this.ngZone.runOutsideAngular(() => this.maybeTrace(() => { let i = r.hooks[o]; return i(r.pipelinedValue); }, r.snapshot));
                }
                catch (i) {
                    r.erroredOrDestroyed = !0, this.errorHandler?.handleError(i);
                } this.executing = !1; for (let o of this.sequences)
        o.afterRun(), o.once && (this.sequences.delete(o), o.destroy()); for (let o of this.deferredRegistrations)
        this.sequences.add(o); this.deferredRegistrations.size > 0 && this.scheduler.notify(7), this.deferredRegistrations.clear(), n && V(x.AfterRenderHooksEnd); }
    register(n) { let { view: o } = n; o !== void 0 ? ((o[un] ??= []).push(n), pn(o), o[N] |= 8192) : this.executing ? this.deferredRegistrations.add(n) : this.addSequence(n); }
    addSequence(n) { this.sequences.add(n), this.scheduler.notify(7); }
    unregister(n) { this.executing && this.sequences.has(n) ? (n.erroredOrDestroyed = !0, n.pipelinedValue = void 0, n.once = !0) : (this.sequences.delete(n), this.deferredRegistrations.delete(n)); }
    maybeTrace(n, o) { return o ? o.run(Sa.AFTER_NEXT_RENDER, n) : n(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), jr = class {
    impl;
    hooks;
    view;
    once;
    snapshot;
    erroredOrDestroyed = !1;
    pipelinedValue = void 0;
    unregisterOnDestroy;
    constructor(t, n, o, r, i, s = null) { this.impl = t, this.hooks = n, this.view = o, this.once = r, this.snapshot = s, this.unregisterOnDestroy = i?.onDestroy(() => this.destroy()); }
    afterRun() { this.erroredOrDestroyed = !1, this.pipelinedValue = void 0, this.snapshot?.dispose(), this.snapshot = null; }
    destroy() { this.impl.unregister(this), this.unregisterOnDestroy?.(); let t = this.view?.[un]; t && (this.view[un] = t.filter(n => n !== this)); }
};
function av(e, t) { let n = t?.injector ?? v(ce); return typeof ngServerMode < "u" && ngServerMode ? Aa : (J("NgAfterRender"), cv(e, n, t, !1)); }
function ef(e, t) { let n = t?.injector ?? v(ce); return typeof ngServerMode < "u" && ngServerMode ? Aa : (J("NgAfterNextRender"), cv(e, n, t, !0)); }
function sS(e) { return e instanceof Function ? [void 0, void 0, e, void 0] : [e.earlyRead, e.write, e.mixedReadWrite, e.read]; }
function cv(e, t, n, o) { let r = t.get(ba); r.impl ??= t.get(Xd); let i = t.get(xn, null, { optional: !0 }), s = n?.manualCleanup !== !0 ? t.get(Be) : null, a = t.get(zn, null, { optional: !0 }), c = new jr(r.impl, sS(e), a?.view, o, s, i?.snapshot(null)); return r.impl.register(c), c; }
var Aa = { destroy() { } }, Ra = new C("", { factory: () => ({ queue: new Set, isScheduled: !1, scheduler: null, injector: v(_e) }) });
function lv(e, t, n) { let o = e.get(Ra); if (Array.isArray(t))
    for (let r of t)
        o.queue.add(r), n?.detachedLeaveAnimationFns?.push(r);
else
    o.queue.add(t), n?.detachedLeaveAnimationFns?.push(t); o.scheduler && o.scheduler(e); }
function aS(e, t) { let n = e.get(Ra); if (t.detachedLeaveAnimationFns) {
    for (let o of t.detachedLeaveAnimationFns)
        n.queue.delete(o);
    t.detachedLeaveAnimationFns = void 0;
} }
function cS(e) { let t = e.get(Ra); t.isScheduled || (ef(() => { t.isScheduled = !1; for (let n of t.queue)
    n(); t.queue.clear(); }, { injector: t.injector }), t.isScheduled = !0); }
function ka(e) { let t = e.get(Ra); t.scheduler = cS, t.scheduler(e); }
function tf(e, t) { for (let [n, o] of t)
    lv(e, o.animateFns); }
function vg(e, t, n, o) { let r = e?.[it]?.enter; t !== null && r && r.has(n.index) && tf(o, r); }
function no(e, t, n, o, r, i, s, a) { if (r != null) {
    let c, l = !1;
    K(r) ? c = r : ne(r) && (l = !0, r = r[$]);
    let u = O(r);
    e === 0 && o !== null ? (vg(a, o, i, n), s == null ? jy(t, o, u) : Dn(t, o, u, s || null, !0)) : e === 1 && o !== null ? (vg(a, o, i, n), Dn(t, o, u, s || null, !0), X_(i, u)) : e === 2 ? (a?.[it]?.leave?.has(i.index) && Yd(i, u), Dr.delete(u), Eg(a, i, n, d => { if (Dr.has(u)) {
        Dr.delete(u);
        return;
    } ci(t, u, l, d); })) : e === 3 && (Dr.delete(u), Eg(a, i, n, () => { t.destroyNode(u); })), c != null && gS(t, e, n, c, i, o, s);
} }
function uv(e, t) { dv(e, t), t[$] = null, t[le] = null; }
function lS(e, t, n, o, r, i) { o[$] = r, o[le] = t, Oa(e, o, n, 1, r, i); }
function dv(e, t) { t[je].changeDetectionScheduler?.notify(9), Oa(e, t, t[w], 2, null, null); }
function uS(e) { let t = e[Ft]; if (!t)
    return Zl(e[m], e); for (; t;) {
    let n = null;
    if (ne(t))
        n = t[Ft];
    else {
        let o = t[G];
        o && (n = o);
    }
    if (!n) {
        for (; t && !t[he] && t !== e;)
            ne(t) && Zl(t[m], t), t = t[Q];
        t === null && (t = e), ne(t) && Zl(t[m], t), n = t && t[he];
    }
    t = n;
} }
function nf(e, t) { let n = e[dn], o = n.indexOf(t); n.splice(o, 1); }
function di(e, t) { if (at(t))
    return; let n = t[w]; n.destroyNode && Oa(e, t, n, 3, null, null), uS(t); }
function Zl(e, t) { if (at(t))
    return; let n = R(null); try {
    t[N] &= -129, t[N] |= 256, t[Ae] && Ot(t[Ae]), pS(e, t), fS(e, t), t[m].type === 1 && t[w].destroy();
    let o = t[jt];
    if (o !== null && K(t[Q])) {
        o !== t[Q] && nf(o, t);
        let r = t[rt];
        r !== null && r.detachView(e);
    }
    mu(t);
}
finally {
    R(n);
} }
function Eg(e, t, n, o) { let r = e?.[it]; if (r == null || r.leave == null || !r.leave.has(t.index))
    return o(!1); e && Cn.add(e[Ve]), lv(n, () => { if (r.leave && r.leave.has(t.index)) {
    let s = r.leave.get(t.index), a = [];
    if (s) {
        for (let c = 0; c < s.animateFns.length; c++) {
            let l = s.animateFns[c], { promise: u } = l();
            a.push(u);
        }
        r.detachedLeaveAnimationFns = void 0;
    }
    r.running = Promise.allSettled(a), dS(e, o);
}
else
    e && Cn.delete(e[Ve]), o(!1); }, r); }
function dS(e, t) { let n = e[it]?.running; if (n) {
    n.then(() => { e[it].running = void 0, Cn.delete(e[Ve]), t(!0); });
    return;
} t(!1); }
function fS(e, t) { let n = e.cleanup, o = t[Lt]; if (n !== null)
    for (let s = 0; s < n.length - 1; s += 2)
        if (typeof n[s] == "string") {
            let a = n[s + 3];
            a >= 0 ? o[a]() : o[-a].unsubscribe(), s += 2;
        }
        else {
            let a = o[n[s + 1]];
            n[s].call(a);
        } o !== null && (t[Lt] = null); let r = t[mt]; if (r !== null) {
    t[mt] = null;
    for (let s = 0; s < r.length; s++) {
        let a = r[s];
        a();
    }
} let i = t[Pt]; if (i !== null) {
    t[Pt] = null;
    for (let s of i)
        s.destroy();
} }
function pS(e, t) { let n; if (e != null && (n = e.destroyHooks) != null)
    for (let o = 0; o < n.length; o += 2) {
        let r = t[n[o]];
        if (!(r instanceof In)) {
            let i = n[o + 1];
            if (Array.isArray(i))
                for (let s = 0; s < i.length; s += 2) {
                    let a = r[i[s]], c = i[s + 1];
                    V(x.LifecycleHookStart, a, c);
                    try {
                        c.call(a);
                    }
                    finally {
                        V(x.LifecycleHookEnd, a, c);
                    }
                }
            else {
                V(x.LifecycleHookStart, r, i);
                try {
                    i.call(r);
                }
                finally {
                    V(x.LifecycleHookEnd, r, i);
                }
            }
        }
    } }
function of(e, t, n) { return fv(e, t.parent, n); }
function fv(e, t, n) { let o = t; for (; o !== null && o.type & 168;)
    t = o, o = t.parent; if (o === null)
    return n[$]; if (De(o)) {
    let { encapsulation: r } = e.data[o.directiveStart + o.componentOffset];
    if (r === Ue.None || r === Ue.Emulated)
        return null;
} return ie(o, n); }
function pv(e, t, n) { return gv(e, t, n); }
function hv(e, t, n) { return e.type & 40 ? ie(e, n) : null; }
var gv = hv, ju;
function mv(e, t) { gv = e, ju = t; }
function rf(e, t, n, o) { let r = of(e, o, t), i = t[w], s = o.parent || t[le], a = pv(s, o, t); if (r != null)
    if (Array.isArray(n))
        for (let c = 0; c < n.length; c++)
            gg(i, r, n[c], a, !1);
    else
        gg(i, r, n, a, !1); ju !== void 0 && ju(i, o, t, n, r); }
function vn(e, t) { if (t !== null) {
    let n = t.type;
    if (n & 3)
        return ie(t, e);
    if (n & 4)
        return Vu(-1, e[t.index]);
    if (n & 8) {
        let o = t.child;
        if (o !== null)
            return vn(e, o);
        {
            let r = e[t.index];
            return K(r) ? Vu(-1, r) : O(r);
        }
    }
    else {
        if (n & 128)
            return vn(e, t.next);
        if (n & 32)
            return Qd(t, e)() || O(e[t.index]);
        {
            let o = yv(e, t);
            if (o !== null) {
                if (Array.isArray(o))
                    return o[0];
                let r = yt(e[ee]);
                return vn(r, o);
            }
            else
                return vn(e, t.next);
        }
    }
} return null; }
function yv(e, t) { if (t !== null) {
    let o = e[ee][le], r = t.projection;
    return o.projection[r];
} return null; }
function Vu(e, t) { let n = G + e + 1; if (n < t.length) {
    let o = t[n], r = o[m].firstChild;
    if (r !== null)
        return vn(o, r);
} return t[Ke]; }
function sf(e, t, n, o, r, i, s) { for (; n != null;) {
    let a = o[L];
    if (n.type === 128) {
        n = n.next;
        continue;
    }
    let c = o[n.index], l = n.type;
    if (s && t === 0 && (c && $e(O(c), o), n.flags |= 2), !bo(n))
        if (l & 8)
            sf(e, t, n.child, o, r, i, !1), no(t, e, a, r, c, n, i, o);
        else if (l & 32) {
            let u = Qd(n, o), d;
            for (; d = u();)
                no(t, e, a, r, d, n, i, o);
            no(t, e, a, r, c, n, i, o);
        }
        else
            l & 16 ? vv(e, t, o, n, r, i) : no(t, e, a, r, c, n, i, o);
    n = s ? n.projectionNext : n.next;
} }
function Oa(e, t, n, o, r, i) { sf(n, o, e.firstChild, t, r, i, !1); }
function hS(e, t, n) { let o = t[w], r = of(e, n, t), i = n.parent || t[le], s = pv(i, n, t); vv(o, 0, t, n, r, s); }
function vv(e, t, n, o, r, i) { let s = n[ee], c = s[le].projection[o.projection]; if (Array.isArray(c))
    for (let l = 0; l < c.length; l++) {
        let u = c[l];
        no(t, e, n[L], r, u, o, i, n);
    }
else {
    let l = c, u = s[Q];
    xr(o) && (l.flags |= 128), sf(e, t, l, u, r, i, !0);
} }
function gS(e, t, n, o, r, i, s) { let a = o[Ke], c = O(o); a !== c && no(t, e, n, i, a, r, s); for (let l = G; l < o.length; l++) {
    let u = o[l];
    Oa(u[m], u, e, t, i, a);
} }
function mS(e, t, n, o, r) { if (t)
    r ? e.addClass(n, o) : e.removeClass(n, o);
else {
    let i = o.indexOf("-") === -1 ? void 0 : $s.DashCase;
    r == null ? e.removeStyle(n, o, i) : (typeof r == "string" && r.endsWith("!important") && (r = r.slice(0, -10), i |= $s.Important), e.setStyle(n, o, r, i));
} }
function Ev(e, t, n, o, r) { let i = de(), s = o & 2; try {
    Bt(-1), s && t.length > I && ev(e, t, I, !1);
    let a = s ? x.TemplateUpdateStart : x.TemplateCreateStart;
    V(a, r, n), n(o, r);
}
finally {
    Bt(i);
    let a = s ? x.TemplateUpdateEnd : x.TemplateCreateEnd;
    V(a, r, n);
} }
function xa(e, t, n) { DS(e, t, n), (n.flags & 64) === 64 && TS(e, t, n); }
function Oo(e, t, n = ie) { let o = t.localNames; if (o !== null) {
    let r = t.index + 1;
    for (let i = 0; i < o.length; i += 2) {
        let s = o[i + 1], a = s === -1 ? n(t, e) : e[s];
        e[r++] = a;
    }
} }
function yS(e, t, n, o) { let i = o.get(Cd, Xm) || n === Ue.ShadowDom || n === Ue.ExperimentalIsolatedShadowDom, s = e.selectRootElement(t, i); return vS(s), s; }
function vS(e) { Iv(e); }
var Iv = () => null;
function ES(e) { Vm(e) ? Vy(e) : Fw(e); }
function Dv() { Iv = ES; }
function IS(e) { return e === "class" ? "className" : e === "for" ? "htmlFor" : e === "formaction" ? "formAction" : e === "innerHtml" ? "innerHTML" : e === "readonly" ? "readOnly" : e === "tabindex" ? "tabIndex" : e; }
function af(e, t, n, o, r, i) { let s = t[m]; if (ja(e, s, t, n, o)) {
    De(e) && Tv(t, e.index);
    return;
} e.type & 3 && (n = IS(n)), cf(e, t, n, o, r, i); }
function cf(e, t, n, o, r, i) { if (e.type & 3) {
    let s = ie(e, t);
    o = i != null ? i(o, e.value || "", n) : o, r.setProperty(s, n, o);
}
else
    e.type & 12; }
function Tv(e, t) { let n = ye(t, e); n[N] & 16 || (n[N] |= 64); }
function DS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd; De(n) && z_(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || Ls(n, t); let i = n.initialInputs; for (let s = o; s < r; s++) {
    let a = e.data[s], c = Or(t, e, s, n);
    if ($e(c, t), i !== null && NS(t, s - o, c, a, n, i), He(a)) {
        let l = ye(n.index, t);
        l[U] = Or(t, e, s, n);
    }
} }
function TS(e, t, n) { let o = n.directiveStart, r = n.directiveEnd, i = n.index, s = Vh(); try {
    Bt(i);
    for (let a = o; a < r; a++) {
        let c = e.data[a], l = t[a];
        os(a), (c.hostBindings !== null || c.hostVars !== 0 || c.hostAttrs !== null) && CS(c, l);
    }
}
finally {
    Bt(-1), os(s);
} }
function CS(e, t) { e.hostBindings !== null && e.hostBindings(1, t); }
function lf(e, t) { let n = e.directiveRegistry, o = null; if (n)
    for (let r = 0; r < n.length; r++) {
        let i = n[r];
        Ky(t, i.selectors, !1) && (o ??= [], He(i) ? o.unshift(i) : o.push(i));
    } return o; }
function MS(e, t, n, o, r, i) { let s = ie(e, t); Pa(t[w], s, i, e.value, n, o, r); }
function Pa(e, t, n, o, r, i, s) { if (i == null)
    e.removeAttribute(t, r, n);
else {
    let a = s == null ? b(i) : s(i, o || "", r);
    e.setAttribute(t, r, a, n);
} }
function NS(e, t, n, o, r, i) { let s = i[t]; if (s !== null)
    for (let a = 0; a < s.length; a += 2) {
        let c = s[a], l = s[a + 1];
        zt(o, n, c, l);
    } }
function La(e, t, n, o, r) { let i = I + n, s = t[m], a = r(s, t, e, o, n); t[i] = a, ct(e, !0); let c = e.type === 2; return c ? (Hy(t[w], a, e), (xh() === 0 || Un(e)) && $e(a, t), Ph()) : $e(a, t), mr() && (!c || !bo(e)) && rf(s, t, a, e), e; }
function Fa(e) { let t = e; return Cl() ? Ml() : (t = t.parent, ct(t, !1)), t; }
function Cv(e, t, n) { return (e === null || He(e)) && (n = dr(n[t.index])), n[w]; }
function uf(e, t) { let n = e[L]; if (!n)
    return; let o; try {
    o = n.get(It, null);
}
catch {
    o = null;
} o?.(t); }
function ja(e, t, n, o, r) { let i = e.inputs?.[o], s = e.hostDirectiveInputs?.[o], a = !1; if (s)
    for (let c = 0; c < s.length; c += 2) {
        let l = s[c], u = s[c + 1], d = t.data[l];
        zt(d, n[l], u, r), a = !0;
    } if (i)
    for (let c of i) {
        let l = n[c], u = t.data[c];
        zt(u, l, o, r), a = !0;
    } return a; }
function wS(e, t, n, o, r, i) { let s = null, a = null, c = null, l = !1, u = e.directiveToIndex.get(o.type); if (typeof u == "number" ? s = u : [s, a, c] = u, a !== null && c !== null && e.hostDirectiveInputs?.hasOwnProperty(r)) {
    let d = e.hostDirectiveInputs[r];
    for (let f = 0; f < d.length; f += 2) {
        let p = d[f];
        if (p >= a && p <= c) {
            let h = t.data[p], y = d[f + 1];
            zt(h, n[p], y, i), l = !0;
        }
        else if (p > c)
            break;
    }
} return s !== null && o.inputs.hasOwnProperty(r) && (zt(o, n[s], r, i), l = !0), l; }
function _S(e, t) { let n = ye(t, e), o = n[m]; SS(o, n); let r = n[$]; r !== null && n[ue] === null && (n[ue] = hy(r, n[L])), V(x.ComponentStart); try {
    Va(o, n, n[U]);
}
finally {
    V(x.ComponentEnd, n[U]);
} }
function SS(e, t) { for (let n = t.length; n < e.blueprint.length; n++)
    t.push(e.blueprint[n]); }
function Va(e, t, n) { ss(t); try {
    let o = e.viewQuery;
    o !== null && Tu(1, o, n);
    let r = e.template;
    r !== null && Ev(e, t, r, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), t[rt]?.finishViewCreation(e), e.staticContentQueries && Ny(e, t), e.staticViewQueries && Tu(2, e.viewQuery, n);
    let i = e.components;
    i !== null && bS(t, i);
}
catch (o) {
    throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), o;
}
finally {
    t[N] &= -5, as();
} }
function bS(e, t) { for (let n = 0; n < t.length; n++)
    _S(e, t[n]); }
function xo(e, t, n, o) { let r = R(null); try {
    let i = t.tView, a = e[N] & 4096 ? 4096 : 16, c = Ma(e, i, n, a, null, t, null, null, o?.injector ?? null, o?.embeddedViewInjector ?? null, o?.dehydratedView ?? null), l = e[t.index];
    c[jt] = l;
    let u = e[rt];
    return u !== null && (c[rt] = u.createEmbeddedView(i)), Va(i, c, n), c;
}
finally {
    R(r);
} }
function Mn(e, t) { return !t || t.firstChild === null || xr(e); }
function po(e, t, n, o, r = !1) { for (; n !== null;) {
    if (n.type === 128) {
        n = r ? n.projectionNext : n.next;
        continue;
    }
    let i = t[n.index];
    i !== null && o.push(O(i)), K(i) && Ha(i, o);
    let s = n.type;
    if (s & 8)
        po(e, t, n.child, o);
    else if (s & 32) {
        let a = Qd(n, t), c;
        for (; c = a();)
            o.push(c);
    }
    else if (s & 16) {
        let a = yv(t, n);
        if (Array.isArray(a))
            o.push(...a);
        else {
            let c = yt(t[ee]);
            po(c[m], c, a, o, !0);
        }
    }
    n = r ? n.projectionNext : n.next;
} return o; }
function Ha(e, t) { for (let n = G; n < e.length; n++) {
    let o = e[n], r = o[m].firstChild;
    r !== null && po(o[m], o, r, t);
} e[Ke] !== e[$] && t.push(e[Ke]); }
function Mv(e) { if (e[un] !== null) {
    for (let t of e[un])
        t.impl.addSequence(t);
    e[un].length = 0;
} }
var Nv = [];
function AS(e) { return e[Ae] ?? RS(e); }
function RS(e) { let t = Nv.pop() ?? Object.create(OS); return t.lView = e, t; }
function kS(e) { e.lView[Ae] !== e && (e.lView = null, Nv.push(e)); }
var OS = we(z({}, wc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { pn(e.lView); }, consumerOnSignalRead() { this.lView[Ae] = this; } });
function xS(e) { let t = e[Ae] ?? Object.create(PS); return t.lView = e, t; }
var PS = we(z({}, wc), { consumerIsAlwaysLive: !0, kind: "template", consumerMarkedDirty: e => { let t = yt(e.lView); for (; t && !wv(t[m]);)
        t = yt(t); t && Xi(t); }, consumerOnSignalRead() { this.lView[Ae] = this; } });
function wv(e) { return e.type !== 2; }
function _v(e) { if (e[Pt] === null)
    return; let t = !0; for (; t;) {
    let n = !1;
    for (let o of e[Pt])
        o.dirty && (n = !0, o.zone === null || Zone.current === o.zone ? o.run() : o.zone.run(() => o.run()));
    t = n && !!(e[N] & 8192);
} }
var LS = 100;
function Sv(e, t = 0) { let o = e[je].rendererFactory, r = !1; r || o.begin?.(); try {
    FS(e, t);
}
finally {
    r || o.end?.();
} }
function FS(e, t) { let n = wl(); try {
    Qo(!0), Hu(e, t);
    let o = 0;
    for (; qn(e);) {
        if (o === LS)
            throw new D(103, !1);
        o++, Hu(e, 1);
    }
}
finally {
    Qo(n);
} }
function bv(e, t, n, o) { if (at(t))
    return; let r = t[N], i = !1, s = !1; ss(t); let a = !0, c = null, l = null; i || (wv(e) ? (l = AS(t), c = qo(l)) : Si() === null ? (a = !1, l = xS(t), c = qo(l)) : t[Ae] && (Ot(t[Ae]), t[Ae] = null)); try {
    dl(t), _l(e.bindingStartIndex), n !== null && Ev(e, t, n, 2, o);
    let u = (r & 3) === 3;
    if (!i)
        if (u) {
            let p = e.preOrderCheckHooks;
            p !== null && Ds(t, p, null);
        }
        else {
            let p = e.preOrderHooks;
            p !== null && Ts(t, p, 0, null), ql(t, 0);
        }
    if (s || jS(t), _v(t), Av(t, 0), e.contentQueries !== null && Ny(e, t), !i)
        if (u) {
            let p = e.contentCheckHooks;
            p !== null && Ds(t, p);
        }
        else {
            let p = e.contentHooks;
            p !== null && Ts(t, p, 1), ql(t, 1);
        }
    HS(e, t);
    let d = e.components;
    d !== null && kv(t, d, 0);
    let f = e.viewQuery;
    if (f !== null && Tu(2, f, o), !i)
        if (u) {
            let p = e.viewCheckHooks;
            p !== null && Ds(t, p);
        }
        else {
            let p = e.viewHooks;
            p !== null && Ts(t, p, 2), ql(t, 2);
        }
    if (e.firstUpdatePass === !0 && (e.firstUpdatePass = !1), t[Ki]) {
        for (let p of t[Ki])
            p();
        t[Ki] = null;
    }
    i || (Mv(t), t[N] &= -73);
}
catch (u) {
    throw i || pn(t), u;
}
finally {
    l !== null && (Ai(l, c), a && kS(l)), as();
} }
function Av(e, t) { for (let n = qm(e); n !== null; n = Gm(n))
    for (let o = G; o < n.length; o++) {
        let r = n[o];
        Rv(r, t);
    } }
function jS(e) { for (let t = qm(e); t !== null; t = Gm(t)) {
    if (!(t[N] & 2))
        continue;
    let n = t[dn];
    for (let o = 0; o < n.length; o++) {
        let r = n[o];
        Xi(r);
    }
} }
function VS(e, t, n) { V(x.ComponentStart); let o = ye(t, e); try {
    Rv(o, n);
}
finally {
    V(x.ComponentEnd, o[U]);
} }
function Rv(e, t) { Ji(e) && Hu(e, t); }
function Hu(e, t) { let o = e[m], r = e[N], i = e[Ae], s = !!(t === 0 && r & 16); if (s ||= !!(r & 64 && t === 0), s ||= !!(r & 1024), s ||= !!(i?.dirty && Ri(i)), s ||= !1, i && (i.dirty = !1), e[N] &= -9217, s)
    bv(o, e, o.template, e[U]);
else if (r & 8192) {
    let a = R(null);
    try {
        _v(e), Av(e, 1);
        let c = o.components;
        c !== null && kv(e, c, 1), Mv(e);
    }
    finally {
        R(a);
    }
} }
function kv(e, t, n) { for (let o = 0; o < t.length; o++)
    VS(e, t[o], n); }
function HS(e, t) { let n = e.hostBindingOpCodes; if (n !== null)
    try {
        for (let o = 0; o < n.length; o++) {
            let r = n[o];
            if (r < 0)
                Bt(~r);
            else {
                let i = r, s = n[++o], a = n[++o];
                jh(s, i);
                let c = t[i];
                V(x.HostBindingsUpdateStart, c);
                try {
                    a(2, c);
                }
                finally {
                    V(x.HostBindingsUpdateEnd, c);
                }
            }
        }
    }
    finally {
        Bt(-1);
    } }
function fi(e, t) { let n = wl() ? 64 : 1088; for (e[je].changeDetectionScheduler?.notify(t); e;) {
    e[N] |= n;
    let o = yt(e);
    if (st(e) && !o)
        return e;
    e = o;
} return null; }
function Ov(e, t, n, o) { return [e, !0, 0, t, null, o, null, n, null, null]; }
function xv(e, t) { let n = G + t; if (n < e.length)
    return e[n]; }
function Po(e, t, n, o = !0) { let r = t[m]; if (BS(r, t, e, n), o) {
    let s = Vu(n, e), a = t[w], c = a.parentNode(e[Ke]);
    c !== null && lS(r, e[le], a, t, c, s);
} let i = t[ue]; i !== null && i.firstChild !== null && (i.firstChild = null); }
function df(e, t) { let n = Vr(e, t); return n !== void 0 && di(n[m], n), n; }
function Vr(e, t) { if (e.length <= G)
    return; let n = G + t, o = e[n]; if (o) {
    let r = o[jt];
    r !== null && r !== e && nf(r, o), t > 0 && (e[n - 1][he] = o[he]);
    let i = sr(e, G + t);
    uv(o[m], o);
    let s = i[rt];
    s !== null && s.detachView(i[m]), o[Q] = null, o[he] = null, o[N] &= -129;
} return o; }
function BS(e, t, n, o) { let r = G + o, i = n.length; o > 0 && (n[r - 1][he] = t), o < i - G ? (t[he] = n[r], Kc(n, G + o, t)) : (n.push(t), t[he] = null), t[Q] = n; let s = t[jt]; s !== null && n !== s && Pv(s, t); let a = t[rt]; a !== null && a.insertView(e), es(t), t[N] |= 128; }
function Pv(e, t) { let n = e[dn], o = t[Q]; if (ne(o))
    e[N] |= 2;
else {
    let r = o[Q][ee];
    t[ee] !== r && (e[N] |= 2);
} n === null ? e[dn] = [t] : n.push(t); }
var Zt = class {
    _lView;
    _cdRefInjectingView;
    _appRef = null;
    _attachedToViewContainer = !1;
    exhaustive;
    get rootNodes() { let t = this._lView, n = t[m]; return po(n, t, n.firstChild, []); }
    constructor(t, n) { this._lView = t, this._cdRefInjectingView = n; }
    get context() { return this._lView[U]; }
    set context(t) { this._lView[U] = t; }
    get destroyed() { return at(this._lView); }
    destroy() { if (this._appRef)
        this._appRef.detachView(this);
    else if (this._attachedToViewContainer) {
        let t = this._lView[Q];
        if (K(t)) {
            let n = t[ur], o = n ? n.indexOf(this) : -1;
            o > -1 && (Vr(t, o), sr(n, o));
        }
        this._attachedToViewContainer = !1;
    } di(this._lView[m], this._lView); }
    onDestroy(t) { pr(this._lView, t); }
    markForCheck() { fi(this._cdRefInjectingView || this._lView, 4); }
    detach() { this._lView[N] &= -129; }
    reattach() { es(this._lView), this._lView[N] |= 128; }
    detectChanges() { this._lView[N] |= 1024, Sv(this._lView); }
    checkNoChanges() { }
    attachToViewContainerRef() { if (this._appRef)
        throw new D(902, !1); this._attachedToViewContainer = !0; }
    detachFromAppRef() { this._appRef = null; let t = st(this._lView), n = this._lView[jt]; n !== null && !t && nf(n, this._lView), dv(this._lView[m], this._lView); }
    attachToAppRef(t) { if (this._attachedToViewContainer)
        throw new D(902, !1); this._appRef = t; let n = st(this._lView), o = this._lView[jt]; o !== null && !n && Pv(o, this._lView), es(this._lView); }
};
function $S(e) { return qn(e._lView) || !!(e._lView[N] & 64); }
function US(e) { Xi(e._lView); }
var Hr = (() => { class e {
    _declarationLView;
    _declarationTContainer;
    elementRef;
    static __NG_ELEMENT_ID__ = qS;
    constructor(n, o, r) { this._declarationLView = n, this._declarationTContainer = o, this.elementRef = r; }
    get ssrId() { return this._declarationTContainer.tView?.ssrId || null; }
    createEmbeddedView(n, o) { return this.createEmbeddedViewImpl(n, o); }
    createEmbeddedViewImpl(n, o, r) { let i = xo(this._declarationLView, this._declarationTContainer, n, { embeddedViewInjector: o, dehydratedView: r }); return new Zt(i); }
} return e; })();
function qS() { return Ba(_(), g()); }
function Ba(e, t) { return e.type & 4 ? new Hr(t, e, Co(e, t)) : null; }
var Bu = "<-- AT THIS LOCATION", GS = "/guide/hydration#third-party-scripts-with-dom-manipulation";
function WS(e) { switch (e) {
    case 4: return "view container";
    case 2: return "element";
    case 8: return "ng-container";
    case 32: return "icu";
    case 64: return "i18n";
    case 16: return "projection";
    case 1: return "text";
    case 128: return "@let";
    default: return "<unknown>";
} }
function zS(e, t) {
    let n = `During serialization, Angular was unable to find an element in the DOM:

`, o = `${KS(e, t, !1)}

`, r = XS();
    throw new D(-502, n + o + r);
}
function Lv(e) {
    let t = "During serialization, Angular detected DOM nodes that were created outside of Angular context and provided as projectable nodes (likely via `ViewContainerRef.createComponent` or `createComponent` APIs). Hydration is not supported for such cases, consider refactoring the code to avoid this pattern or using `ngSkipHydration` on the host element of the component.\n\n", n = `${JS(e)}

`, o = t + n + eb();
    return new D(-503, o);
}
function QS(e) { let t = []; if (e.attrs)
    for (let n = 0; n < e.attrs.length;) {
        let o = e.attrs[n++];
        if (typeof o == "number")
            break;
        let r = e.attrs[n++];
        t.push(`${o}="${Gs(r)}"`);
    } return t.join(" "); }
var ZS = new Set(["ngh", "ng-version", "ng-server-context"]);
function YS(e) { let t = []; for (let n = 0; n < e.attributes.length; n++) {
    let o = e.attributes[n];
    ZS.has(o.name) || t.push(`${o.name}="${Gs(o.value)}"`);
} return t.join(" "); }
function Yl(e, t = "\u2026") { switch (e.type) {
    case 1: return `#text${e.value ? `(${e.value})` : ""}`;
    case 2:
        let o = QS(e), r = e.value.toLowerCase();
        return `<${r}${o ? " " + o : ""}>${t}</${r}>`;
    case 8: return "<!-- ng-container -->";
    case 4: return "<!-- container -->";
    default: return `#node(${WS(e.type)})`;
} }
function Ns(e, t = "\u2026") { let n = e; switch (n.nodeType) {
    case Node.ELEMENT_NODE:
        let o = n.tagName.toLowerCase(), r = YS(n);
        return `<${o}${r ? " " + r : ""}>${t}</${o}>`;
    case Node.TEXT_NODE:
        let i = n.textContent ? Gs(n.textContent) : "";
        return `#text${i ? `(${i})` : ""}`;
    case Node.COMMENT_NODE: return `<!-- ${Gs(n.textContent ?? "")} -->`;
    default: return `#node(${n.nodeType})`;
} }
function KS(e, t, n) {
    let r = "";
    t.prev ? (r += `  \u2026
`, r += "  " + Yl(t.prev) + `
`) : t.type && t.type & 12 && (r += `  \u2026
`), n ? (r += "  " + Yl(t) + `
`, r += `  <!-- container -->  ${Bu}
`) : r += "  " + Yl(t) + `  ${Bu}
`, r += `  \u2026
`;
    let i = t.type ? of(e[m], t, e) : null;
    return i && (r = Ns(i, `
` + r)), r;
}
function JS(e) {
    let n = "", o = e;
    return o.previousSibling && (n += `  \u2026
`, n += "  " + Ns(o.previousSibling) + `
`), n += "  " + Ns(o) + `  ${Bu}
`, e.nextSibling && (n += `  \u2026
`), e.parentNode && (n = Ns(o.parentNode, `
` + n)), n;
}
function XS(e) {
    return `To fix this problem:
  * check ${e ? `the "${e}"` : "corresponding"} component for hydration-related issues
  * check to see if your template has valid HTML structure
  * check if there are any third-party scripts that manipulate the DOM. More info: ${Wc}${GS}
  * or skip hydration by adding the \`ngSkipHydration\` attribute to its host node in a template

`;
}
function eb() {
    return `Note: attributes are only displayed to better represent the DOM but have no effect on hydration mismatches.

`;
}
function tb(e) { return e.replace(/\s+/gm, ""); }
function Gs(e, t = 50) { return e ? (e = tb(e), e.length > t ? `${e.substring(0, t - 1)}\u2026` : e) : ""; }
function Fv(e, t, n) { let o = t.insertBeforeIndex, r = Array.isArray(o) ? o[0] : o; return r === null ? hv(e, t, n) : O(n[r]); }
function jv(e, t, n, o, r) { let i = t.insertBeforeIndex; if (Array.isArray(i)) {
    let s = o, a = null;
    if (t.type & 3 || (a = s, s = r), s !== null && t.componentOffset === -1)
        for (let c = 1; c < i.length; c++) {
            let l = n[i[c]];
            Dn(e, s, l, a, !1);
        }
} }
function Pn(e, t, n, o, r) { let i = e.data[t]; if (i === null)
    i = ff(e, t, n, o, r), Fh() && (i.flags |= 32);
else if (i.type & 64) {
    i.type = n, i.value = o, i.attrs = r;
    let s = Gn();
    i.injectorIndex = s === null ? -1 : s.injectorIndex;
} return ct(i, !0), i; }
function ff(e, t, n, o, r) { let i = Tl(), s = Cl(), a = s ? i : i && i.parent, c = e.data[t] = ob(e, a, n, t, o, r); return nb(e, c, i, s), c; }
function nb(e, t, n, o) { e.firstChild === null && (e.firstChild = t), n !== null && (o ? n.child == null && t.parent !== null && (n.child = t) : n.next === null && (n.next = t, t.prev = n)); }
function ob(e, t, n, o, r, i) { let s = t ? t.injectorIndex : -1, a = 0; return hr() && (a |= 128), { type: n, index: o, insertBeforeIndex: null, injectorIndex: s, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, componentOffset: -1, controlDirectiveIndex: -1, customControlIndex: -1, propertyBindings: null, flags: a, providerIndexes: 0, value: r, attrs: i, mergedAttrs: null, localNames: null, initialInputs: null, inputs: null, hostDirectiveInputs: null, outputs: null, hostDirectiveOutputs: null, directiveToIndex: null, tView: null, next: null, prev: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }
function Vv(e, t) { if (e.push(t), e.length > 1)
    for (let n = e.length - 2; n >= 0; n--) {
        let o = e[n];
        Hv(o) || rb(o, t) && ib(o) === null && sb(o, t.index);
    } }
function Hv(e) { return !(e.type & 64); }
function rb(e, t) { return Hv(t) || e.index > t.index; }
function ib(e) { let t = e.insertBeforeIndex; return Array.isArray(t) ? t[0] : t; }
function sb(e, t) { let n = e.insertBeforeIndex; Array.isArray(n) ? n[0] = t : (mv(Fv, jv), e.insertBeforeIndex = t); }
function Cr(e, t) { let n = e.data[t]; return n === null || typeof n == "string" ? null : n.hasOwnProperty("currentCaseLViewIndex") ? n : n.value; }
function ab(e, t, n) { let o = e.data[t]; o === null ? e.data[t] = n : o.value = n; }
function cb(e, t) { let n = e.insertBeforeIndex; n === null ? (mv(Fv, jv), n = e.insertBeforeIndex = [null, t]) : (Eh(Array.isArray(n), !0, "Expecting array here"), n.push(t)); }
function lb(e, t, n) { let o = ff(e, n, 64, null, null); return Vv(t, o), o; }
function $a(e, t) { let n = t[e.currentCaseLViewIndex]; return n === null ? n : n < 0 ? ~n : n; }
function ub(e) { return e >>> 17; }
function db(e) { return (e & 131070) >>> 1; }
function fb(e, t, n) { return e | t << 17 | n << 1; }
function Bv(e) { return e === -1; }
function pf(e, t, n) { e.index = 0; let o = $a(t, n); o !== null ? e.removes = t.remove[o] : e.removes = F; }
function Ws(e) { if (e.index < e.removes.length) {
    let t = e.removes[e.index++];
    if (t > 0)
        return e.lView[t];
    {
        e.stack.push(e.index, e.removes);
        let n = ~t, o = e.lView[m].data[n];
        return pf(e, o, e.lView), Ws(e);
    }
}
else
    return e.stack.length === 0 ? (e.lView = void 0, null) : (e.removes = e.stack.pop(), e.index = e.stack.pop(), Ws(e)); }
function pb() { let e = { stack: [], index: -1 }; function t(n, o) { for (e.lView = o; e.stack.length;)
    e.stack.pop(); return pf(e, n.value, o), Ws.bind(null, e); } return t; }
function hb(e, t) { let n = { stack: [], index: -1, lView: t }; return pf(n, e, t), Ws.bind(null, n); }
var gb = new RegExp(`^(\\d+)*(${Dd}|${Id})*(.*)`);
function mb(e, t) { let n = [e]; for (let o of t) {
    let r = n.length - 1;
    if (r > 0 && n[r - 1] === o) {
        let i = n[r] || 1;
        n[r] = i + 1;
    }
    else
        n.push(o, "");
} return n.join(""); }
function yb(e) { let t = e.match(gb), [n, o, r, i] = t, s = o ? parseInt(o, 10) : r, a = []; for (let [c, l, u] of i.matchAll(/(f|n)(\d*)/g)) {
    let d = parseInt(u, 10) || 1;
    a.push(l, d);
} return [s, ...a]; }
function vb(e) { return !e.prev && e.parent?.type === 8; }
function Kl(e) { return e.index - I; }
function Lo(e, t) { return !(e.type & 144) && !!t[e.index] && $v(O(t[e.index])); }
function $v(e) { return !!e && !e.isConnected; }
function Uv(e, t) { let n = e.i18nNodes; if (n)
    return n.get(t); }
function Eb(e, t, n) { let r = e.data[oi]?.[n]; return r ? qv(r, t) : null; }
function pi(e, t, n, o) { let r = Kl(o), i = Uv(e, r); if (i === void 0) {
    let s = e.data[oi];
    if (s?.[r])
        i = qv(s[r], n);
    else if (t.firstChild === o)
        i = e.firstChild;
    else {
        let a = o.prev === null, c = o.prev ?? o.parent;
        if (vb(o)) {
            let l = Kl(o.parent);
            i = Du(e, l);
        }
        else {
            let l = ie(c, n);
            if (a)
                i = l.firstChild;
            else {
                let u = Kl(c), d = Du(e, u);
                if (c.type === 2 && d) {
                    let p = Od(e, u) + 1;
                    i = Ua(p, d);
                }
                else
                    i = l.nextSibling;
            }
        }
    }
} return i; }
function Ua(e, t) { let n = t; for (let o = 0; o < e; o++)
    n = n.nextSibling; return n; }
function Ib(e, t) { let n = e; for (let o = 0; o < t.length; o += 2) {
    let r = t[o], i = t[o + 1];
    for (let s = 0; s < i; s++)
        switch (r) {
            case Km:
                n = n.firstChild;
                break;
            case Jm:
                n = n.nextSibling;
                break;
        }
} return n; }
function qv(e, t) { let [n, ...o] = yb(e), r; if (n === Id)
    r = t[ee][$];
else if (n === Dd)
    r = Ud(t[ee][$]);
else {
    let i = Number(n);
    r = O(t[i + I]);
} return Ib(r, o); }
function $u(e, t) { if (e === t)
    return []; if (e.parentElement == null || t.parentElement == null)
    return null; if (e.parentElement === t.parentElement)
    return Db(e, t); {
    let n = t.parentElement, o = $u(e, n), r = $u(n.firstChild, t);
    return !o || !r ? null : [...o, Km, ...r];
} }
function Db(e, t) { let n = [], o = null; for (o = e; o != null && o !== t; o = o.nextSibling)
    n.push(Jm); return o == null ? null : n; }
function Ig(e, t, n) { let o = $u(e, t); return o === null ? null : mb(n, o); }
function Gv(e, t, n) { let o = e.parent, r, i, s; for (; o !== null && (Lo(o, t) || n?.has(o.index));)
    o = o.parent; o === null || !(o.type & 3) ? (r = s = Id, i = t[ee][$]) : (r = o.index, i = O(t[r]), s = b(r - I)); let a = O(t[e.index]); if (e.type & 44) {
    let l = vn(t, e);
    l && (a = l);
} let c = Ig(i, a, s); if (c === null && i !== a) {
    let l = i.ownerDocument.body;
    if (c = Ig(l, a, Dd), c === null)
        throw zS(t, e);
} return c; }
function Wv(e, t) { let n = e.createNodeIterator(t, NodeFilter.SHOW_COMMENT, { acceptNode: Tb }), o, r = new Map; for (; o = n.nextNode();) {
    let i = "ngh=", s = o?.textContent, a = s?.indexOf(i) ?? -1;
    if (a > -1) {
        let c = s.substring(a + i.length).trim();
        r.set(c, o);
    }
} return r; }
function Tb(e) { return e.textContent?.trimStart().startsWith("ngh=") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
var zv = !1, Qv = () => { };
function hf(e) { zv = e; }
function qa() { return zv; }
function Cb(e, t, n, o) { Qv(e, t, n, o); }
function Zv() { Qv = Sb; }
function Yv(e) { return e = e ?? v(ce), e.get(Md, !1); }
function Kv(e, t) { let n = t.i18nChildren.get(e); return n === void 0 && (n = Mb(e), t.i18nChildren.set(e, n)), n; }
function Mb(e) { let t = new Set; function n(o) { switch (t.add(o.index), o.kind) {
    case 1:
    case 2: {
        for (let r of o.children)
            n(r);
        break;
    }
    case 3: {
        for (let r of o.cases)
            for (let i of r)
                n(i);
        break;
    }
} } for (let o = I; o < e.bindingStartIndex; o++) {
    let r = e.data[o];
    if (!(!r || !r.ast))
        for (let i of r.ast)
            n(i);
} return t.size === 0 ? null : t; }
function Jv(e, t, n) { if (!n.isI18nHydrationEnabled)
    return null; let o = e[m], r = o.data[t]; if (!r || !r.ast)
    return null; let i = o.data[r.parentTNodeIndex]; if (i && Hm(i))
    return null; let s = { caseQueue: [], disconnectedNodes: new Set, disjointNodes: new Set }; return Uu(e, s, n, r.ast), s.caseQueue.length === 0 && s.disconnectedNodes.size === 0 && s.disjointNodes.size === 0 ? null : s; }
function Uu(e, t, n, o) { let r = null; for (let i of o) {
    let s = wb(e, t, n, i);
    s && (Nb(r, s) && t.disjointNodes.add(i.index - I), r = s);
} return r; }
function Nb(e, t) { return e && e.nextSibling !== t; }
function wb(e, t, n, o) { let r = O(e[o.index]); if (!r || $v(r))
    return t.disconnectedNodes.add(o.index - I), null; let i = r; switch (o.kind) {
    case 0: {
        xd(n, i);
        break;
    }
    case 1:
    case 2: {
        Uu(e, t, n, o.children);
        break;
    }
    case 3: {
        let s = e[o.currentCaseLViewIndex];
        if (s != null) {
            let a = s < 0 ? ~s : s;
            t.caseQueue.push(a), Uu(e, t, n, o.cases[a]);
        }
        break;
    }
} return _b(e, o); }
function _b(e, t) { let o = e[m].data[t.index]; return sa(o) ? vn(e, o) : t.kind === 3 ? hb(o, e)() ?? O(e[t.index]) : O(e[t.index]) ?? null; }
function hn(e, t) { e.currentNode = t; }
function vr(e, t, n) { let o = n.index - I, { disconnectedNodes: r } = e, i = t.currentNode; return t.isConnected ? (e.i18nNodes.set(o, i), r.delete(o)) : r.add(o), i; }
function Jl(e, t) { let n = e.currentNode; for (let o = 0; o < t && n; o++)
    n = n?.nextSibling ?? null; return n; }
function Xl(e, t) { return { currentNode: t, isConnected: e.isConnected }; }
function Sb(e, t, n, o) { let r = e[ue]; if (!r || !qa() || n && (Hm(n) || Ia(r, n.index - I)))
    return; let i = e[m], s = i.data[t]; function a() { if (Bv(o)) {
    let p = pi(r, i, e, n);
    return n.type & 8 ? p : p.firstChild;
} return r?.firstChild; } let c = a(), l = vy(r) ?? new Set, u = r.i18nNodes ??= new Map, d = r.data[ha]?.[t - I] ?? [], f = r.dehydratedIcuData ??= new Map; Yn({ hydrationInfo: r, lView: e, i18nNodes: u, disconnectedNodes: l, caseQueue: d, dehydratedIcuData: f }, { currentNode: c, isConnected: !0 }, s.ast), r.disconnectedNodes = l.size === 0 ? null : l; }
function Yn(e, t, n) { if (Array.isArray(n)) {
    let o = t;
    for (let r of n) {
        let i = Eb(e.hydrationInfo, e.lView, r.index - I);
        i && (o = Xl(t, i)), Yn(e, o, r);
    }
}
else {
    if (e.disconnectedNodes.has(n.index - I))
        return;
    switch (n.kind) {
        case 0: {
            let o = vr(e, t, n);
            hn(t, o?.nextSibling ?? null);
            break;
        }
        case 1: {
            Yn(e, Xl(t, t.currentNode?.firstChild ?? null), n.children);
            let o = vr(e, t, n);
            hn(t, o?.nextSibling ?? null);
            break;
        }
        case 2: {
            let o = n.index - I, { hydrationInfo: r } = e, i = my(r, o);
            switch (n.type) {
                case 0: {
                    let s = vr(e, t, n);
                    if ($w(r, o)) {
                        Yn(e, t, n.children);
                        let a = Jl(t, 1);
                        hn(t, a);
                    }
                    else if (Yn(e, Xl(t, t.currentNode?.firstChild ?? null), n.children), hn(t, s?.nextSibling ?? null), i !== null) {
                        let a = Jl(t, i + 1);
                        hn(t, a);
                    }
                    break;
                }
                case 1: {
                    vr(e, t, n);
                    let s = Jl(t, i + 1);
                    hn(t, s);
                    break;
                }
            }
            break;
        }
        case 3: {
            let o = t.isConnected ? e.caseQueue.shift() : null, r = { currentNode: null, isConnected: !1 };
            for (let s = 0; s < n.cases.length; s++)
                Yn(e, s === o ? t : r, n.cases[s]);
            o !== null && e.dehydratedIcuData.set(n.index, { case: o, node: n });
            let i = vr(e, t, n);
            hn(t, i?.nextSibling ?? null);
            break;
        }
    }
} }
var Xv = () => { };
function bb(e, t, n) { Xv(e, t, n); }
function eE() { Xv = Ab; }
function Ab(e, t, n) { let o = e[ue]?.dehydratedIcuData; o && o.get(t)?.case === n && o.delete(t); }
function Rb(e) { let t = e[ue]; if (t) {
    let { i18nNodes: n, dehydratedIcuData: o } = t;
    if (n && o) {
        let r = e[w];
        for (let i of o.values())
            kb(r, n, i);
    }
    t.i18nNodes = void 0, t.dehydratedIcuData = void 0;
} }
function kb(e, t, n) { for (let o of n.node.cases[n.case]) {
    let r = t.get(o.index - I);
    r && ci(e, r, !1);
} }
function Ga(e) { let t = e[Re] ?? [], o = e[Q][w], r = []; for (let i of t)
    i.data[ga] !== void 0 ? r.push(i) : tE(i, o); e[Re] = r; }
function Ob(e) { let { lContainer: t } = e, n = t[Re]; if (n === null)
    return; let r = t[Q][w]; for (let i of n)
    tE(i, r); }
function tE(e, t) { let n = 0, o = e.firstChild; if (o) {
    let r = e.data[Mt];
    for (; n < r;) {
        let i = o.nextSibling;
        ci(t, o, !1), o = i, n++;
    }
} }
function Wa(e) { Ga(e); let t = e[$]; ne(t) && Br(t); for (let n = G; n < e.length; n++)
    Br(e[n]); }
function Br(e) { Rb(e); let t = e[m]; for (let n = I; n < t.bindingStartIndex; n++)
    if (K(e[n])) {
        let o = e[n];
        Wa(o);
    }
    else
        ne(e[n]) && Br(e[n]); }
function gf(e) { let t = e._views; for (let n of t) {
    let o = kd(n);
    o !== null && o[$] !== null && (ne(o) ? Br(o) : Wa(o));
} }
function xb(e, t, n, o) { e !== null && (n.cleanup(t), Wa(e.lContainer), gf(o)); }
function Pb(e, t) { let n = []; for (let o of t)
    for (let r = 0; r < (o[ni] ?? 1); r++) {
        let i = { data: o, firstChild: null };
        o[Mt] > 0 && (i.firstChild = e, e = Ua(o[Mt], e)), n.push(i);
    } return [e, n]; }
var nE = () => null, oE = () => null;
function rE() { nE = Lb, oE = Fb; }
function Lb(e, t) { return sE(e, t) ? e[Re].shift() : (Ga(e), null); }
function $r(e, t) { return nE(e, t); }
function Fb(e, t, n) { if (t.tView.ssrId === null)
    return null; let o = $r(e, t.tView.ssrId); return n[m].firstUpdatePass && o === null && jb(n, t), o; }
function iE(e, t, n) { return oE(e, t, n); }
function jb(e, t) { let n = t; for (; n;) {
    if (Dg(e, n))
        return;
    if ((n.flags & 256) === 256)
        break;
    n = n.prev;
} for (n = t.next; n && (n.flags & 512) === 512;) {
    if (Dg(e, n))
        return;
    n = n.next;
} }
function sE(e, t) { let n = e[Re]; return !t || n === null || n.length === 0 ? !1 : n[0].data[pa] === t; }
function Dg(e, t) { let n = t.tView?.ssrId; if (n == null)
    return !1; let o = e[t.index]; return K(o) && sE(o, n) ? (Ga(o), !0) : !1; }
var aE = class {
}, za = class {
}, qu = class {
    resolveComponentFactory(t) { throw new D(917, !1); }
}, hi = class {
    static NULL = new qu;
}, Ur = class {
}, Vb = (() => { class e {
    destroyNode = null;
    static __NG_ELEMENT_ID__ = () => Hb();
} return e; })();
function Hb() { let e = g(), t = _(), n = ye(t.index, e); return (ne(n) ? n : e)[w]; }
var cE = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => null });
} return e; })();
function mf(e) { return e.ngModule !== void 0; }
function gn(e) { return !!an(e); }
function ys(e) { return !!Qe(e); }
function Tg(e) { return !!be(e); }
function Mr(e) { return !!W(e); }
function Bb(e) { return W(e) ? "component" : be(e) ? "directive" : Qe(e) ? "pipe" : "type"; }
function $b(e, t) { if (er(e) && (e = P(e), !e))
    throw new Error(`Expected forwardRef function, imported from "${Pe(t)}", to return a standalone entity or NgModule but got "${Pe(e) || e}".`); if (an(e) == null) {
    let n = W(e) || be(e) || Qe(e);
    if (n != null) {
        if (!n.standalone) {
            let o = Bb(e);
            throw new Error(`The "${Pe(e)}" ${o}, imported from "${Pe(t)}", is not standalone. Does the ${o} have the standalone: false flag?`);
        }
    }
    else
        throw mf(e) ? new Error(`A module with providers was imported from "${Pe(t)}". Modules with providers are not supported in standalone components imports.`) : new Error(`The "${Pe(e)}" type, imported from "${Pe(t)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
} }
var Gu = class {
    ownerNgModule = new WeakMap;
    ngModulesWithSomeUnresolvedDecls = new Set;
    ngModulesScopeCache = new WeakMap;
    standaloneComponentsScopeCache = new WeakMap;
    resolveNgModulesDecls() { if (this.ngModulesWithSomeUnresolvedDecls.size !== 0) {
        for (let t of this.ngModulesWithSomeUnresolvedDecls) {
            let n = an(t);
            if (n?.declarations)
                for (let o of to(n.declarations))
                    Mr(o) && this.ownerNgModule.set(o, t);
        }
        this.ngModulesWithSomeUnresolvedDecls.clear();
    } }
    getComponentDependencies(t, n) { this.resolveNgModulesDecls(); let o = W(t); if (o === null)
        throw new Error(`Attempting to get component dependencies for a type that is not a component: ${t}`); if (o.standalone) {
        let r = this.getStandaloneComponentScope(t, n);
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes, ...r.compilation.ngModules] };
    }
    else {
        if (!this.ownerNgModule.has(t))
            return { dependencies: [] };
        let r = this.getNgModuleScope(this.ownerNgModule.get(t));
        return r.compilation.isPoisoned ? { dependencies: [] } : { dependencies: [...r.compilation.directives, ...r.compilation.pipes] };
    } }
    registerNgModule(t, n) { if (!gn(t))
        throw new Error(`Attempting to register a Type which is not NgModule as NgModule: ${t}`); this.ngModulesWithSomeUnresolvedDecls.add(t); }
    clearScopeCacheFor(t) { this.ngModulesScopeCache.delete(t), this.standaloneComponentsScopeCache.delete(t); }
    getNgModuleScope(t) { if (this.ngModulesScopeCache.has(t))
        return this.ngModulesScopeCache.get(t); let n = this.computeNgModuleScope(t); return this.ngModulesScopeCache.set(t, n), n; }
    computeNgModuleScope(t) { let n = $i(t), o = { exported: { directives: new Set, pipes: new Set }, compilation: { directives: new Set, pipes: new Set } }; for (let r of to(n.imports))
        if (gn(r)) {
            let i = this.getNgModuleScope(r);
            qt(i.exported.directives, o.compilation.directives), qt(i.exported.pipes, o.compilation.pipes);
        }
        else if (ir(r))
            if (Tg(r) || Mr(r))
                o.compilation.directives.add(r);
            else if (ys(r))
                o.compilation.pipes.add(r);
            else
                throw new D(980, "The standalone imported type is neither a component nor a directive nor a pipe");
        else {
            o.compilation.isPoisoned = !0;
            break;
        } if (!o.compilation.isPoisoned)
        for (let r of to(n.declarations)) {
            if (gn(r) || ir(r)) {
                o.compilation.isPoisoned = !0;
                break;
            }
            ys(r) ? o.compilation.pipes.add(r) : o.compilation.directives.add(r);
        } for (let r of to(n.exports))
        if (gn(r)) {
            let i = this.getNgModuleScope(r);
            qt(i.exported.directives, o.exported.directives), qt(i.exported.pipes, o.exported.pipes), qt(i.exported.directives, o.compilation.directives), qt(i.exported.pipes, o.compilation.pipes);
        }
        else
            ys(r) ? o.exported.pipes.add(r) : o.exported.directives.add(r); return o; }
    getStandaloneComponentScope(t, n) { if (this.standaloneComponentsScopeCache.has(t))
        return this.standaloneComponentsScopeCache.get(t); let o = this.computeStandaloneComponentScope(t, n); return this.standaloneComponentsScopeCache.set(t, o), o; }
    computeStandaloneComponentScope(t, n) { let o = { compilation: { directives: new Set([t]), pipes: new Set, ngModules: new Set } }; for (let r of Ze(n ?? [])) {
        let i = P(r);
        try {
            $b(i, t);
        }
        catch {
            return o.compilation.isPoisoned = !0, o;
        }
        if (gn(i)) {
            o.compilation.ngModules.add(i);
            let s = this.getNgModuleScope(i);
            if (s.exported.isPoisoned)
                return o.compilation.isPoisoned = !0, o;
            qt(s.exported.directives, o.compilation.directives), qt(s.exported.pipes, o.compilation.pipes);
        }
        else if (ys(i))
            o.compilation.pipes.add(i);
        else if (Tg(i) || Mr(i))
            o.compilation.directives.add(i);
        else
            return o.compilation.isPoisoned = !0, o;
    } return o; }
    isOrphanComponent(t) { let n = W(t); return !n || n.standalone ? !1 : (this.resolveNgModulesDecls(), !this.ownerNgModule.has(t)); }
};
function qt(e, t) { for (let n of e)
    t.add(n); }
var ho = new Gu, ws = {}, so = class {
    injector;
    parentInjector;
    constructor(t, n) { this.injector = t, this.parentInjector = n; }
    get(t, n, o) { let r = this.injector.get(t, ws, o); return r !== ws || n === ws ? r : this.parentInjector.get(t, n, o); }
};
function zs(e, t, n) { let o = n ? e.styles : null, r = n ? e.classes : null, i = 0; if (t !== null)
    for (let s = 0; s < t.length; s++) {
        let a = t[s];
        if (typeof a == "number")
            i = a;
        else if (i == 1)
            r = Hi(r, a);
        else if (i == 2) {
            let c = a, l = t[++s];
            o = Hi(o, c + ": " + l + ";");
        }
    } n ? e.styles = o : e.stylesWithoutHost = o, n ? e.classes = r : e.classesWithoutHost = r; }
function Fo(e, t = 0) { let n = g(); if (n === null)
    return pe(e, t); let o = _(); return km(o, n, P(e), t); }
function lE() { let e = "invalid"; throw new Error(e); }
function uE(e, t, n, o, r) { let i = o === null ? null : { "": -1 }, s = r(e, n); if (s !== null) {
    let a = s, c = null, l = null;
    for (let u of s)
        if (u.resolveHostDirectives !== null) {
            [a, c, l] = u.resolveHostDirectives(s);
            break;
        }
    Gb(e, t, n, a, i, c, l);
} i !== null && o !== null && Ub(n, o, i); }
function Ub(e, t, n) { let o = e.localNames = []; for (let r = 0; r < t.length; r += 2) {
    let i = n[t[r + 1]];
    if (i == null)
        throw new D(-301, !1);
    o.push(t[r], i);
} }
function qb(e, t, n) { t.componentOffset = n, (e.components ??= []).push(t.index); }
function Gb(e, t, n, o, r, i, s) { let a = o.length, c = null; for (let f = 0; f < a; f++) {
    let p = o[f];
    c === null && He(p) && (c = p, qb(e, n, f)), hu(Ls(n, t), e, p.type);
} Kb(n, e.data.length, a), c?.viewProvidersResolver && c.viewProvidersResolver(c); for (let f = 0; f < a; f++) {
    let p = o[f];
    p.providersResolver && p.providersResolver(p);
} let l = !1, u = !1, d = ui(e, t, a, null); a > 0 && (n.directiveToIndex = new Map); for (let f = 0; f < a; f++) {
    let p = o[f];
    if (n.mergedAttrs = uo(n.mergedAttrs, p.hostAttrs), zb(e, n, t, d, p), Yb(d, p, r), s !== null && s.has(p)) {
        let [y, E] = s.get(p);
        n.directiveToIndex.set(p.type, [d, y + n.directiveStart, E + n.directiveStart]);
    }
    else
        (i === null || !i.has(p)) && n.directiveToIndex.set(p.type, d);
    p.contentQueries !== null && (n.flags |= 4), (p.hostBindings !== null || p.hostAttrs !== null || p.hostVars !== 0) && (n.flags |= 64);
    let h = p.type.prototype;
    !l && (h.ngOnChanges || h.ngOnInit || h.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), l = !0), !u && (h.ngOnChanges || h.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), d++;
} Wb(e, n, i); }
function Wb(e, t, n) { for (let o = t.directiveStart; o < t.directiveEnd; o++) {
    let r = e.data[o];
    if (n === null || !n.has(r))
        Cg(0, t, r, o), Cg(1, t, r, o), Ng(t, o, !1);
    else {
        let i = n.get(r);
        Mg(0, t, i, o), Mg(1, t, i, o), Ng(t, o, !0);
    }
} }
function Cg(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s;
        e === 0 ? s = t.inputs ??= {} : s = t.outputs ??= {}, s[i] ??= [], s[i].push(o), dE(t, i);
    } }
function Mg(e, t, n, o) { let r = e === 0 ? n.inputs : n.outputs; for (let i in r)
    if (r.hasOwnProperty(i)) {
        let s = r[i], a;
        e === 0 ? a = t.hostDirectiveInputs ??= {} : a = t.hostDirectiveOutputs ??= {}, a[s] ??= [], a[s].push(o, i), dE(t, s);
    } }
function dE(e, t) { t === "class" ? e.flags |= 8 : t === "style" && (e.flags |= 16); }
function Ng(e, t, n) { let { attrs: o, inputs: r, hostDirectiveInputs: i } = e; if (o === null || !n && r === null || n && i === null || qd(e)) {
    e.initialInputs ??= [], e.initialInputs.push(null);
    return;
} let s = null, a = 0; for (; a < o.length;) {
    let c = o[a];
    if (c === 0) {
        a += 4;
        continue;
    }
    else if (c === 5) {
        a += 2;
        continue;
    }
    else if (typeof c == "number")
        break;
    if (!n && r.hasOwnProperty(c)) {
        let l = r[c];
        for (let u of l)
            if (u === t) {
                s ??= [], s.push(c, o[a + 1]);
                break;
            }
    }
    else if (n && i.hasOwnProperty(c)) {
        let l = i[c];
        for (let u = 0; u < l.length; u += 2)
            if (l[u] === t) {
                s ??= [], s.push(l[u + 1], o[a + 1]);
                break;
            }
    }
    a += 2;
} e.initialInputs ??= [], e.initialInputs.push(s); }
function zb(e, t, n, o, r) { e.data[o] = r; let i = r.factory || (r.factory = xt(r.type, !0)), s = new In(i, He(r), Fo, null); e.blueprint[o] = s, n[o] = s, Qb(e, t, o, ui(e, n, r.hostVars, H), r); }
function Qb(e, t, n, o, r) { let i = r.hostBindings; if (i) {
    let s = e.hostBindingOpCodes;
    s === null && (s = e.hostBindingOpCodes = []);
    let a = ~t.index;
    Zb(s) != a && s.push(a), s.push(n, o, i);
} }
function Zb(e) { let t = e.length; for (; t > 0;) {
    let n = e[--t];
    if (typeof n == "number" && n < 0)
        return n;
} return 0; }
function Yb(e, t, n) { if (n) {
    if (t.exportAs)
        for (let o = 0; o < t.exportAs.length; o++)
            n[t.exportAs[o]] = e;
    He(t) && (n[""] = e);
} }
function Kb(e, t, n) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t; }
function yf(e, t, n, o, r, i, s, a) { let c = t[m], l = c.consts, u = ge(l, s), d = Pn(c, e, n, o, u); return i && uE(c, t, d, ge(l, a), r), d.mergedAttrs = uo(d.mergedAttrs, d.attrs), d.attrs !== null && zs(d, d.attrs, !1), d.mergedAttrs !== null && zs(d, d.mergedAttrs, !0), c.queries !== null && c.queries.elementStart(c, d), d; }
function vf(e, t) { Tm(e, t), al(t) && e.queries.elementEnd(t); }
function fE(e, t, n, o, r, i) { let s = t.consts, a = ge(s, r), c = Pn(t, e, n, o, a); if (c.mergedAttrs = uo(c.mergedAttrs, c.attrs), i != null) {
    let l = ge(s, i);
    c.localNames = [];
    for (let u = 0; u < l.length; u += 2)
        c.localNames.push(l[u], -1);
} return c.attrs !== null && zs(c, c.attrs, !1), c.mergedAttrs !== null && zs(c, c.mergedAttrs, !0), t.queries !== null && t.queries.elementStart(t, c), c; }
function qr(e) { return Qa(e) ? Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e : !1; }
function Jb(e, t, n) { let o = e[Symbol.iterator](), r = t[Symbol.iterator](); for (;;) {
    let i = o.next(), s = r.next();
    if (i.done && s.done)
        return !0;
    if (i.done || s.done || !n(i.value, s.value))
        return !1;
} }
function pE(e, t) { if (Array.isArray(e))
    for (let n = 0; n < e.length; n++)
        t(e[n]);
else {
    let n = e[Symbol.iterator](), o;
    for (; !(o = n.next()).done;)
        t(o.value);
} }
function Qa(e) { return e !== null && (typeof e == "function" || typeof e == "object"); }
function hE(e, t) { let n = qr(e), o = qr(t); return n && o ? Jb(e, t, hE) : !n && (e && (typeof e == "object" || typeof e == "function")) && !o && (t && (typeof t == "object" || typeof t == "function")) ? !0 : Object.is(e, t); }
function et(e, t, n) { return e[t] = n; }
function jo(e, t) { return e[t]; }
function Y(e, t, n) { if (n === H)
    return !1; let o = e[t]; return Object.is(o, n) ? !1 : (e[t] = n, !0); }
function Nn(e, t, n, o) { let r = Y(e, t, n); return Y(e, t + 1, o) || r; }
function Za(e, t, n, o, r) { let i = Nn(e, t, n, o); return Y(e, t + 2, r) || i; }
function qe(e, t, n, o, r, i) { let s = Nn(e, t, n, o); return Nn(e, t + 2, r, i) || s; }
function Qt(e, t, n) { return function o(r) { let i = o.__ngNativeEl__; i !== void 0 && kw(r, i); let s = De(e) ? ye(e.index, t) : t; fi(s, 5); let a = t[U], c = wg(t, a, n, r), l = o.__ngNextListenerFn__; for (; l;)
    c = wg(t, a, l, r) && c, l = l.__ngNextListenerFn__; return c; }; }
function wg(e, t, n, o) { let r = Kn(null); try {
    return V(x.OutputStart, t, n), n(o) !== !1;
}
catch (i) {
    return uf(e, i), !1;
}
finally {
    V(x.OutputEnd, t, n), Kn(r);
} }
function Ef(e, t, n, o, r, i, s, a) { let c = Un(e), l = !1, u = null; if (!o && c && (u = eA(t, n, i, e.index)), u !== null) {
    let d = u.__ngLastListenerFn__ || u;
    d.__ngNextListenerFn__ = s, u.__ngLastListenerFn__ = s, l = !0;
}
else {
    let d = ie(e, n), f = o ? o(d) : d;
    Ow(n, f, i, a), o || (a.__ngNativeEl__ = d);
    let p = r.listen(f, i, a);
    if (!Xb(i)) {
        let h = o ? y => o(O(y[e.index])) : e.index;
        gE(h, t, n, i, a, p, !1);
    }
} return l; }
function Xb(e) { return e.startsWith("animation") || e.startsWith("transition"); }
function eA(e, t, n, o) { let r = e.cleanup; if (r != null)
    for (let i = 0; i < r.length - 1; i += 2) {
        let s = r[i];
        if (s === n && r[i + 1] === o) {
            let a = t[Lt], c = r[i + 2];
            return a && a.length > c ? a[c] : null;
        }
        typeof s == "string" && (i += 2);
    } return null; }
function gE(e, t, n, o, r, i, s) { let a = t.firstCreatePass ? hl(t) : null, c = pl(n), l = c.length; c.push(r, i), a && a.push(o, e, l, (l + 1) * (s ? -1 : 1)); }
function tA(e, t, n, o, r) { let i = Qt(e, t, n), s = nA(e, t, o, r, i); }
function nA(e, t, n, o, r) { let i = null, s = null, a = null, c = !1, l = e.directiveToIndex.get(n.type); if (typeof l == "number" ? i = l : [i, s, a] = l, s !== null && a !== null && e.hostDirectiveOutputs?.hasOwnProperty(o)) {
    let u = e.hostDirectiveOutputs[o];
    for (let d = 0; d < u.length; d += 2) {
        let f = u[d];
        if (f >= s && f <= a)
            c = !0, go(e, t, f, u[d + 1], o, r);
        else if (f > a)
            break;
    }
} return n.outputs.hasOwnProperty(o) && (c = !0, go(e, t, i, o, o, r)), c; }
function go(e, t, n, o, r, i) { let s = t[n], a = t[m], l = a.data[n].outputs[o], d = s[l].subscribe(i); gE(e.index, a, t, r, i, d, !0); }
function mE() { yE(); }
function yE() { let e = g(), t = A(), n = _(); if (t.firstCreatePass && oA(t, n), n.controlDirectiveIndex === -1)
    return; J("NgSignalForms"); let o = e[n.controlDirectiveIndex]; t.data[n.controlDirectiveIndex].controlDef.create(o, new Qs(e, t, n)); }
function vE() { EE(); }
function EE() { let e = g(), t = A(), n = ke(); if (n.controlDirectiveIndex === -1)
    return; let o = t.data[n.controlDirectiveIndex].controlDef, r = e[n.controlDirectiveIndex]; o.update(r, new Qs(e, t, n)); }
var Qs = class {
    lView;
    tView;
    tNode;
    hasPassThrough;
    constructor(t, n, o) { this.lView = t, this.tView = n, this.tNode = o, this.hasPassThrough = !!(o.flags & 4096); }
    get customControl() { return this.tNode.customControlIndex !== -1 ? this.lView[this.tNode.customControlIndex] : void 0; }
    get descriptor() { return `<${this.tNode.value}>`; }
    listenToCustomControlOutput(t, n) { IE(this.tView.data[this.tNode.customControlIndex], t) && go(this.tNode, this.lView, this.tNode.customControlIndex, t, t, Qt(this.tNode, this.lView, n)); }
    listenToCustomControlModel(t) { let n = this.tNode.flags & 1024 ? "valueChange" : "checkedChange"; go(this.tNode, this.lView, this.tNode.customControlIndex, n, n, Qt(this.tNode, this.lView, t)); }
    listenToDom(t, n) { Ef(this.tNode, this.tView, this.lView, void 0, this.lView[w], t, n, Qt(this.tNode, this.lView, n)); }
    setInputOnDirectives(t, n) { let o = this.tNode.inputs?.[t], r = this.tNode.hostDirectiveInputs?.[t]; if (!o && !r)
        return !1; if (o)
        for (let i of o) {
            let s = this.tView.data[i], a = this.lView[i];
            zt(s, a, t, n);
        } if (r)
        for (let i = 0; i < r.length; i += 2) {
            let s = r[i], a = r[i + 1], c = this.tView.data[s], l = this.lView[s];
            zt(c, l, a, n);
        } return !0; }
    setCustomControlModelInput(t) { let n = this.lView[this.tNode.customControlIndex], o = this.tView.data[this.tNode.customControlIndex], r = this.tNode.flags & 1024 ? "value" : "checked"; zt(o, n, r, t); }
    customControlHasInput(t) { return this.tNode.customControlIndex === -1 ? !1 : this.tView.data[this.tNode.customControlIndex].inputs[t] != null; }
};
function oA(e, t, n) { for (let r = t.directiveStart; r < t.directiveEnd; r++)
    if (e.data[r].controlDef) {
        t.controlDirectiveIndex = r;
        break;
    } if (t.controlDirectiveIndex === -1)
    return; let o = e.data[t.controlDirectiveIndex].controlDef; if (o.passThroughInput && (t.inputs?.[o.passThroughInput]?.length ?? 0) > 1) {
    t.flags |= 4096;
    return;
} rA(e, t); }
function rA(e, t) { for (let n = t.directiveStart; n < t.directiveEnd; n++) {
    let o = e.data[n];
    if (_g(o, "value")) {
        t.flags |= 1024, t.customControlIndex = n;
        return;
    }
    if (_g(o, "checked")) {
        t.flags |= 2048, t.customControlIndex = n;
        return;
    }
} }
function _g(e, t) { return iA(e, t) && IE(e, t + "Change"); }
function iA(e, t) { return t in e.inputs; }
function IE(e, t) { return t in e.outputs; }
var Ct = Symbol("BINDING"), Sg = { kind: "input", requiredVars: 1 }, sA = { kind: "output", requiredVars: 0 };
function bg(e, t, n) { let o = g(), r = ve(); if (Y(o, r, n)) {
    let i = o[m], s = ke(), a = ye(s.index, o);
    fi(a, 1);
    let c = i.directiveRegistry[e], l = wS(s, i, o, c, t, n);
} }
function DE(e, t) { if (e === "formField") {
    let o = { [Ct]: Sg, create: () => { yE(); }, update: () => { bg(o.targetIdx, e, t()), EE(); } };
    return o;
} let n = { [Ct]: Sg, update: () => bg(n.targetIdx, e, t()) }; return n; }
function TE(e, t) { let n = { [Ct]: sA, create: () => { let o = g(), r = _(), s = o[m].directiveRegistry[n.targetIdx]; tA(r, o, t, s, e); } }; return n; }
function aA(e, t) { let n = DE(e, t), o = TE(e + "Change", i => t.set(i)); return { [Ct]: { kind: "twoWay", requiredVars: n[Ct].requiredVars + o[Ct].requiredVars }, set targetIdx(i) { n.targetIdx = i, o.targetIdx = i; }, create: o.create, update: n.update }; }
function cA(e) { let t = e; for (; t;) {
    let n = ow(t);
    if (n !== null)
        for (let o = I; o < n.length; o++) {
            let r = n[o];
            if (!ne(r) && !K(r) || r[$] !== t)
                continue;
            let i = n[m], s = Vt(i, o);
            if (De(s)) {
                let a = i.data[s.directiveStart + s.componentOffset], c = If(a);
                if (c !== null)
                    return c;
                break;
            }
        }
    t = t.parentNode;
} return null; }
function If(e) { return e.debugInfo?.className || e.type.name || null; }
var Zs = class extends hi {
    ngModule;
    constructor(t) { super(), this.ngModule = t; }
    resolveComponentFactory(t) { let n = W(t); return new Yt(n, this.ngModule); }
};
function lA(e) { return Object.keys(e).map(t => { let [n, o, r] = e[t], i = { propName: n, templateName: t, isSignal: (o & Na.SignalBased) !== 0 }; return r && (i.transform = r), i; }); }
function uA(e) { return Object.keys(e).map(t => ({ propName: e[t], templateName: t })); }
function dA(e, t, n) { let o = t instanceof _e ? t : t?.injector; return o && e.getStandaloneInjector !== null && (o = e.getStandaloneInjector(o) || o), o ? new so(n, o) : n; }
function fA(e) { let t = e.get(Ur, null); if (t === null)
    throw new D(407, !1); let n = e.get(cE, null), o = e.get(xe, null), r = e.get(xn, null, { optional: !0 }); return { rendererFactory: t, sanitizer: n, changeDetectionScheduler: o, ngReflect: !1, tracingService: r }; }
function pA(e, t) { let n = CE(e); return Ca(t, n, n === "svg" ? ll : n === "math" ? ul : null); }
function CE(e) { return (e.selectors[0][0] || "div").toLowerCase(); }
var Yt = class extends za {
    componentDef;
    ngModule;
    selector;
    componentType;
    ngContentSelectors;
    isBoundToModule;
    cachedInputs = null;
    cachedOutputs = null;
    get inputs() { return this.cachedInputs ??= lA(this.componentDef.inputs), this.cachedInputs; }
    get outputs() { return this.cachedOutputs ??= uA(this.componentDef.outputs), this.cachedOutputs; }
    constructor(t, n) { super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = q_(t.selectors), this.ngContentSelectors = t.ngContentSelectors ?? [], this.isBoundToModule = !!n; }
    create(t, n, o, r, i, s) { V(x.DynamicComponentStart); let a = R(null); try {
        let c = this.componentDef, l = dA(c, r || this.ngModule, t), u = fA(l), d = u.tracingService;
        return d && d.componentCreate ? d.componentCreate(If(c), () => this.createComponentRef(u, l, n, o, i, s)) : this.createComponentRef(u, l, n, o, i, s);
    }
    finally {
        R(a);
    } }
    createComponentRef(t, n, o, r, i, s) { let a = this.componentDef, c = hA(r, a, s, i), l = t.rendererFactory.createRenderer(null, a), u = r ? yS(l, r, a.encapsulation, n) : pA(a, l), d = s?.some(Ag) || i?.some(h => typeof h != "function" && h.bindings.some(Ag)), f = Ma(null, c, null, 512 | Wd(a), null, null, t, l, n, null, hy(u, n, !0)); f[I] = u, ss(f); let p = null; try {
        let h = yf(I, f, 2, "#host", () => c.directiveRegistry, !0, 0);
        Hy(l, u, h), $e(u, f), xa(c, f, h), Pd(c, h, f), vf(c, h), o !== void 0 && mA(h, this.ngContentSelectors, o), p = ye(h.index, f), f[U] = p[U], Va(c, f, null);
    }
    catch (h) {
        throw p !== null && mu(p), mu(f), h;
    }
    finally {
        V(x.DynamicComponentEnd), as();
    } return new Ys(this.componentType, f, !!d); }
};
function hA(e, t, n, o) { let r = e ? ["ng-version", "21.2.12"] : G_(t.selectors[0]), i = null, s = null, a = 0; if (n)
    for (let u of n)
        a += u[Ct].requiredVars, u.create && (u.targetIdx = 0, (i ??= []).push(u)), u.update && (u.targetIdx = 0, (s ??= []).push(u)); if (o)
    for (let u = 0; u < o.length; u++) {
        let d = o[u];
        if (typeof d != "function")
            for (let f of d.bindings) {
                a += f[Ct].requiredVars;
                let p = u + 1;
                f.create && (f.targetIdx = p, (i ??= []).push(f)), f.update && (f.targetIdx = p, (s ??= []).push(f));
            }
    } let c = [t]; if (o)
    for (let u of o) {
        let d = typeof u == "function" ? u : u.type, f = be(d);
        c.push(f);
    } return Gd(0, null, gA(i, s), 1, a, c, null, null, null, [r], null); }
function gA(e, t) { return !e && !t ? null : n => { if (n & 1 && e)
    for (let o of e)
        o.create(); if (n & 2 && t)
    for (let o of t)
        o.update(); }; }
function Ag(e) { let t = e[Ct].kind; return t === "input" || t === "twoWay"; }
var Ys = class extends aE {
    _rootLView;
    _hasInputBindings;
    instance;
    hostView;
    changeDetectorRef;
    componentType;
    location;
    previousInputValues = null;
    _tNode;
    constructor(t, n, o) { super(), this._rootLView = n, this._hasInputBindings = o, this._tNode = Vt(n[m], I), this.location = Co(this._tNode, n), this.instance = ye(this._tNode.index, n)[U], this.hostView = this.changeDetectorRef = new Zt(n, void 0), this.componentType = t; }
    setInput(t, n) { this._hasInputBindings; let o = this._tNode; if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n))
        return; let r = this._rootLView, i = ja(o, r[m], r, t, n); this.previousInputValues.set(t, n); let s = ye(o.index, r); fi(s, 1); }
    get injector() { return new Wt(this._tNode, this._rootLView); }
    destroy() { this.hostView.destroy(); }
    onDestroy(t) { this.hostView.onDestroy(t); }
};
function mA(e, t, n) { let o = e.projection = []; for (let r = 0; r < t.length; r++) {
    let i = n[r];
    o.push(i != null && i.length ? Array.from(i) : null);
} }
var Ya = (() => { class e {
    static __NG_ELEMENT_ID__ = yA;
} return e; })();
function yA() { let e = _(); return ME(e, g()); }
var Wu = class e extends Ya {
    _lContainer;
    _hostTNode;
    _hostLView;
    constructor(t, n, o) { super(), this._lContainer = t, this._hostTNode = n, this._hostLView = o; }
    get element() { return Co(this._hostTNode, this._hostLView); }
    get injector() { return new Wt(this._hostTNode, this._hostLView); }
    get parentInjector() { let t = md(this._hostTNode, this._hostLView); if (wm(t)) {
        let n = xs(t, this._hostLView), o = Os(t), r = n[m].data[o + 8];
        return new Wt(r, n);
    }
    else
        return new Wt(null, this._hostLView); }
    clear() { for (; this.length > 0;)
        this.remove(this.length - 1); }
    get(t) { let n = Rg(this._lContainer); return n !== null && n[t] || null; }
    get length() { return this._lContainer.length - G; }
    createEmbeddedView(t, n, o) { let r, i; typeof o == "number" ? r = o : o != null && (r = o.index, i = o.injector); let s = $r(this._lContainer, t.ssrId), a = t.createEmbeddedViewImpl(n || {}, i, s); return this.insertImpl(a, r, Mn(this._hostTNode, s)), a; }
    createComponent(t, n, o, r, i, s, a) { let c = t && !Ir(t), l; if (c)
        l = n;
    else {
        let E = n || {};
        l = E.index, o = E.injector, r = E.projectableNodes, i = E.environmentInjector || E.ngModuleRef, s = E.directives, a = E.bindings;
    } let u = c ? t : new Yt(W(t)), d = o || this.parentInjector; if (!i && u.ngModule == null) {
        let T = (c ? d : this.parentInjector).get(_e, null);
        T && (i = T);
    } let f = W(u.componentType ?? {}), p = $r(this._lContainer, f?.id ?? null), h = p?.firstChild ?? null, y = u.create(d, r, h, i, s, a); return this.insertImpl(y.hostView, l, Mn(this._hostTNode, p)), y; }
    insert(t, n) { return this.insertImpl(t, n, !0); }
    insertImpl(t, n, o) { let r = t._lView; if (kh(r)) {
        let a = this.indexOf(t);
        if (a !== -1)
            this.detach(a);
        else {
            let c = r[Q], l = new e(c, c[le], c[Q]);
            l.detach(l.indexOf(t));
        }
    } let i = this._adjustIndex(n), s = this._lContainer; return Po(s, r, i, o), t.attachToViewContainerRef(), Kc(eu(s), i, t), t; }
    move(t, n) { return this.insert(t, n); }
    indexOf(t) { let n = Rg(this._lContainer); return n !== null ? n.indexOf(t) : -1; }
    remove(t) { let n = this._adjustIndex(t, -1), o = Vr(this._lContainer, n); o && (sr(eu(this._lContainer), n), di(o[m], o)); }
    detach(t) { let n = this._adjustIndex(t, -1), o = Vr(this._lContainer, n); return o && sr(eu(this._lContainer), n) != null ? new Zt(o) : null; }
    _adjustIndex(t, n = 0) { return t ?? this.length + n; }
};
function Rg(e) { return e[ur]; }
function eu(e) { return e[ur] || (e[ur] = []); }
function ME(e, t) { let n, o = t[e.index]; return K(o) ? n = o : (n = Ov(o, t, null, e), t[e.index] = n, zd(t, n)), NE(n, t, e, o), new Wu(n, e, t); }
function vA(e, t) { let n = e[w], o = n.createComment(""), r = ie(t, e), i = n.parentNode(r); return Dn(n, i, o, n.nextSibling(r), !1), o; }
var NE = _E, Df = () => !1;
function wE(e, t, n) { return Df(e, t, n); }
function _E(e, t, n, o) { if (e[Ke])
    return; let r; n.type & 8 ? r = O(o) : r = vA(t, n), e[Ke] = r; }
function EA(e, t, n) { if (e[Ke] && e[Re])
    return !0; let o = n[ue], r = t.index - I; if (!o || Mo(t) || Ia(o, r))
    return !1; let s = Du(o, r), a = o.data[wo]?.[r]; if (a === void 0)
    return !1; let [c, l] = Pb(s, a); return e[Ke] = c, e[Re] = l, !0; }
function IA(e, t, n, o) { Df(e, n, t) || _E(e, t, n, o); }
function SE() { NE = IA, Df = EA; }
var zu = class e {
    queryList;
    matches = null;
    constructor(t) { this.queryList = t; }
    clone() { return new e(this.queryList); }
    setDirty() { this.queryList.setDirty(); }
}, Qu = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    createEmbeddedView(t) { let n = t.queries; if (n !== null) {
        let o = t.contentQueries !== null ? t.contentQueries[0] : n.length, r = [];
        for (let i = 0; i < o; i++) {
            let s = n.getByIndex(i), a = this.queries[s.indexInDeclarationView];
            r.push(a.clone());
        }
        return new e(r);
    } return null; }
    insertView(t) { this.dirtyQueriesWithMatches(t); }
    detachView(t) { this.dirtyQueriesWithMatches(t); }
    finishViewCreation(t) { this.dirtyQueriesWithMatches(t); }
    dirtyQueriesWithMatches(t) { for (let n = 0; n < this.queries.length; n++)
        Cf(t, n).matches !== null && this.queries[n].setDirty(); }
}, Ks = class {
    flags;
    read;
    predicate;
    constructor(t, n, o = null) { this.flags = n, this.read = o, typeof t == "string" ? this.predicate = NA(t) : this.predicate = t; }
}, Zu = class e {
    queries;
    constructor(t = []) { this.queries = t; }
    elementStart(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].elementStart(t, n); }
    elementEnd(t) { for (let n = 0; n < this.queries.length; n++)
        this.queries[n].elementEnd(t); }
    embeddedTView(t) { let n = null; for (let o = 0; o < this.length; o++) {
        let r = n !== null ? n.length : 0, i = this.getByIndex(o).embeddedTView(t, r);
        i && (i.indexInDeclarationView = o, n !== null ? n.push(i) : n = [i]);
    } return n !== null ? new e(n) : null; }
    template(t, n) { for (let o = 0; o < this.queries.length; o++)
        this.queries[o].template(t, n); }
    getByIndex(t) { return this.queries[t]; }
    get length() { return this.queries.length; }
    track(t) { this.queries.push(t); }
}, Yu = class e {
    metadata;
    matches = null;
    indexInDeclarationView = -1;
    crossesNgTemplate = !1;
    _declarationNodeIndex;
    _appliesToNextNode = !0;
    constructor(t, n = -1) { this.metadata = t, this._declarationNodeIndex = n; }
    elementStart(t, n) { this.isApplyingToNode(n) && this.matchTNode(t, n); }
    elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
    template(t, n) { this.elementStart(t, n); }
    embeddedTView(t, n) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new e(this.metadata)) : null; }
    isApplyingToNode(t) { if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
        let n = this._declarationNodeIndex, o = t.parent;
        for (; o !== null && o.type & 8 && o.index !== n;)
            o = o.parent;
        return n === (o !== null ? o.index : -1);
    } return this._appliesToNextNode; }
    matchTNode(t, n) { let o = this.metadata.predicate; if (Array.isArray(o))
        for (let r = 0; r < o.length; r++) {
            let i = o[r];
            this.matchTNodeWithReadOption(t, n, DA(n, i)), this.matchTNodeWithReadOption(t, n, Cs(n, t, i, !1, !1));
        }
    else
        o === Hr ? n.type & 4 && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Cs(n, t, o, !1, !1)); }
    matchTNodeWithReadOption(t, n, o) { if (o !== null) {
        let r = this.metadata.read;
        if (r !== null)
            if (r === ei || r === Ya || r === Hr && n.type & 4)
                this.addMatch(n.index, -2);
            else {
                let i = Cs(n, t, r, !1, !1);
                i !== null && this.addMatch(n.index, i);
            }
        else
            this.addMatch(n.index, o);
    } }
    addMatch(t, n) { this.matches === null ? this.matches = [t, n] : this.matches.push(t, n); }
};
function DA(e, t) { let n = e.localNames; if (n !== null) {
    for (let o = 0; o < n.length; o += 2)
        if (n[o] === t)
            return n[o + 1];
} return null; }
function TA(e, t) { return e.type & 11 ? Co(e, t) : e.type & 4 ? Ba(e, t) : null; }
function CA(e, t, n, o) { return n === -1 ? TA(t, e) : n === -2 ? MA(e, t, o) : Or(e, e[m], n, t); }
function MA(e, t, n) { if (n === ei)
    return Co(t, e); if (n === Hr)
    return Ba(t, e); if (n === Ya)
    return ME(t, e); }
function bE(e, t, n, o) { let r = t[rt].queries[o]; if (r.matches === null) {
    let i = e.data, s = n.matches, a = [];
    for (let c = 0; s !== null && c < s.length; c += 2) {
        let l = s[c];
        if (l < 0)
            a.push(null);
        else {
            let u = i[l];
            a.push(CA(t, u, s[c + 1], n.metadata.read));
        }
    }
    r.matches = a;
} return r.matches; }
function Ku(e, t, n, o) { let r = e.queries.getByIndex(n), i = r.matches; if (i !== null) {
    let s = bE(e, t, r, n);
    for (let a = 0; a < i.length; a += 2) {
        let c = i[a];
        if (c > 0)
            o.push(s[a / 2]);
        else {
            let l = i[a + 1], u = t[-c];
            for (let d = G; d < u.length; d++) {
                let f = u[d];
                f[jt] === f[Q] && Ku(f[m], f, l, o);
            }
            if (u[dn] !== null) {
                let d = u[dn];
                for (let f = 0; f < d.length; f++) {
                    let p = d[f];
                    Ku(p[m], p, l, o);
                }
            }
        }
    }
} return o; }
function Tf(e, t) { return e[rt].queries[t].queryList; }
function AE(e, t, n) { let o = new Fs((n & 4) === 4); return Oh(e, t, o, o.destroy), (t[rt] ??= new Qu).queries.push(new zu(o)) - 1; }
function RE(e, t, n) { let o = A(); return o.firstCreatePass && (OE(o, new Ks(e, t, n), -1), (t & 2) === 2 && (o.staticViewQueries = !0)), AE(o, g(), t); }
function kE(e, t, n, o) { let r = A(); if (r.firstCreatePass) {
    let i = _();
    OE(r, new Ks(t, n, o), i.index), wA(r, e), (n & 2) === 2 && (r.staticContentQueries = !0);
} return AE(r, g(), n); }
function NA(e) { return e.split(",").map(t => t.trim()); }
function OE(e, t, n) { e.queries === null && (e.queries = new Zu), e.queries.track(new Yu(t, n)); }
function wA(e, t) { let n = e.contentQueries || (e.contentQueries = []), o = n.length ? n[n.length - 1] : -1; t !== o && n.push(e.queries.length - 1, t); }
function Cf(e, t) { return e.queries.getByIndex(t); }
function xE(e, t) { let n = e[m], o = Cf(n, t); return o.crossesNgTemplate ? Ku(n, e, t, []) : bE(n, e, o, t); }
function Mf(e, t, n) { let o, r = ki(() => { o._dirtyCounter(); let i = _A(o, e); if (t && i === void 0)
    throw new D(-951, !1); return i; }); return o = r[ae], o._dirtyCounter = Ut(0), o._flatValue = void 0, r; }
function Nf(e) { return Mf(!0, !1, e); }
function wf(e) { return Mf(!0, !0, e); }
function _f(e) { return Mf(!1, !1, e); }
function PE(e, t) { let n = e[ae]; n._lView = g(), n._queryIndex = t, n._queryList = Tf(n._lView, t), n._queryList.onDirty(() => n._dirtyCounter.update(o => o + 1)); }
function _A(e, t) { let n = e._lView, o = e._queryIndex; if (n === void 0 || o === void 0 || n[N] & 4)
    return t ? void 0 : F; let r = Tf(n, o), i = xE(n, o); return r.reset(i, jm), t ? r.first : r._changesDetected || e._flatValue === void 0 ? e._flatValue = r.toArray() : e._flatValue; }
var wn = new Map, Gr = new Set;
function LE(e) { return ze(this, null, function* () { let t = wn; wn = new Map; let n = new Map; function o(i) { let s = n.get(i); if (s)
    return s; let a = e(i).then(c => kA(i, c)); return n.set(i, a), a; } let r = Array.from(t).map(a => ze(null, [a], function* ([i, s]) { if (s.styleUrl && s.styleUrls?.length)
    throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple"); let c = []; s.templateUrl && c.push(o(s.templateUrl).then(f => { s.template = f; })); let l = typeof s.styles == "string" ? [s.styles] : s.styles ?? []; s.styles = l; let { styleUrl: u, styleUrls: d } = s; if (u && (d = [u], s.styleUrl = void 0), d?.length) {
    let f = Promise.all(d.map(p => o(p))).then(p => { l.push(...p), s.styleUrls = void 0; });
    c.push(f);
} yield Promise.all(c), Gr.delete(i); })); yield Promise.all(r); }); }
function SA(e, t) { FE(t) && (wn.set(e, t), Gr.add(e)); }
function bA(e) { return Gr.has(e); }
function FE(e) { return !!(e.templateUrl && !e.hasOwnProperty("template") || e.styleUrls?.length || e.styleUrl); }
function AA() { let e = wn; return wn = new Map, e; }
function RA(e) { Gr.clear(); for (let t of e.keys())
    Gr.add(t); wn = e; }
function jE() { return wn.size === 0; }
function kA(e, t) { return ze(this, null, function* () { if (typeof t == "string")
    return t; if (t.status !== void 0 && t.status !== 200)
    throw new D(918, !1); return t.text(); }); }
var Ju = new Map, VE = !0;
function OA(e, t, n) { if (t && t !== n && VE)
    throw new D(921, !1); }
function Sf(e, t) { let n = Ju.get(t) || null; OA(t, n, e), Ju.set(t, e); }
function bf(e) { return Ju.get(e); }
function xA(e) { VE = !e; }
var mo = class {
}, HE = class {
};
function BE(e, t) { return new yo(e, t ?? null, []); }
var PA = BE, yo = class extends mo {
    ngModuleType;
    _parent;
    _bootstrapComponents = [];
    _r3Injector;
    instance;
    destroyCbs = [];
    componentFactoryResolver = new Zs(this);
    constructor(t, n, o, r = !0) { super(), this.ngModuleType = t, this._parent = n; let i = an(t); this._bootstrapComponents = to(i.bootstrap), this._r3Injector = Pl(t, n, [{ provide: mo, useValue: this }, { provide: hi, useValue: this.componentFactoryResolver }, ...o], Jo(t), new Set(["environment"])), r && this.resolveInjectorInitializers(); }
    resolveInjectorInitializers() { this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(this.ngModuleType); }
    get injector() { return this._r3Injector; }
    destroy() { let t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null; }
    onDestroy(t) { this.destroyCbs.push(t); }
}, vo = class extends HE {
    moduleType;
    constructor(t) { super(), this.moduleType = t; }
    create(t) { return new yo(this.moduleType, t, []); }
};
function $E(e, t, n) { return new yo(e, t, n, !1); }
var Wr = class extends mo {
    injector;
    componentFactoryResolver = new Zs(this);
    instance = null;
    constructor(t) { super(); let n = new on([...t.providers, { provide: mo, useValue: this }, { provide: hi, useValue: this.componentFactoryResolver }], t.parent || $n(), t.debugName, new Set(["environment"])); this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers(); }
    destroy() { this.injector.destroy(); }
    onDestroy(t) { this.injector.onDestroy(t); }
};
function Af(e, t, n = null) { return new Wr({ providers: e, parent: t, debugName: n, runEnvironmentInitializers: !0 }).injector; }
var LA = (() => { class e {
    _injector;
    cachedInjectors = new Map;
    constructor(n) { this._injector = n; }
    getOrCreateStandaloneInjector(n) { if (!n.standalone)
        return null; if (!this.cachedInjectors.has(n)) {
        let o = Qi(!1, n.type), r = o.length > 0 ? Af([o], this._injector, "") : null;
        this.cachedInjectors.set(n, r);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e(pe(_e)) });
} return e; })();
function UE(e) { return ft(() => { let t = zE(e), n = we(z({}, t), { decls: e.decls, vars: e.vars, template: e.template, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, onPush: e.changeDetection === la.OnPush, directiveDefs: null, pipeDefs: null, dependencies: t.standalone && e.dependencies || null, getStandaloneInjector: t.standalone ? r => r.get(LA).getOrCreateStandaloneInjector(n) : null, getExternalStyles: null, signals: e.signals ?? !1, data: e.data || {}, encapsulation: e.encapsulation || Ue.Emulated, styles: e.styles || F, _: null, schemas: e.schemas || null, tView: null, id: "" }); t.standalone && J("NgStandalone"), QE(n); let o = e.dependencies; return n.directiveDefs = Js(o, qE), n.pipeDefs = Js(o, Qe), n.id = HA(n), n; }); }
function qE(e) { return W(e) || be(e); }
function Rf(e) { return ft(() => ({ type: e.type, bootstrap: e.bootstrap || F, declarations: e.declarations || F, imports: e.imports || F, exports: e.exports || F, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null })); }
function FA(e, t) { if (e == null)
    return Le; let n = {}; for (let o in e)
    if (e.hasOwnProperty(o)) {
        let r = e[o], i, s, a, c;
        Array.isArray(r) ? (a = r[0], i = r[1], s = r[2] ?? i, c = r[3] || null) : (i = r, s = r, a = Na.None, c = null), n[i] = [o, a, c], t[i] = s;
    } return n; }
function jA(e) { if (e == null)
    return Le; let t = {}; for (let n in e)
    e.hasOwnProperty(n) && (t[e[n]] = n); return t; }
function GE(e) { return ft(() => { let t = zE(e); return QE(t), t; }); }
function WE(e) { return { type: e.type, name: e.name, factory: null, pure: e.pure !== !1, standalone: e.standalone ?? !0, onDestroy: e.type.prototype.ngOnDestroy || null }; }
function zE(e) { let t = {}; return { type: e.type, providersResolver: null, viewProvidersResolver: null, factory: null, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: t, inputConfig: e.inputs || Le, exportAs: e.exportAs || null, standalone: e.standalone ?? !0, signals: e.signals === !0, selectors: e.selectors || F, viewQuery: e.viewQuery || null, features: e.features || null, setInput: null, resolveHostDirectives: null, hostDirectives: null, controlDef: null, inputs: FA(e.inputs, t), outputs: jA(e.outputs), debugInfo: null }; }
function QE(e) { e.features?.forEach(t => t(e)); }
function Js(e, t) { return e ? () => { let n = typeof e == "function" ? e() : e, o = []; for (let r of n) {
    let i = t(r);
    i !== null && o.push(i);
} return o; } : null; }
var VA = new Map;
function HA(e) { let t = 0, n = typeof e.consts == "function" ? "" : e.consts, o = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, n, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery]; for (let i of o.join("|"))
    t = Math.imul(31, t) + i.charCodeAt(0) << 0; return t += 2147483648, "c" + t; }
function ZE(e) { return t => { t.controlDef = { create: (n, o) => { n?.\u0275ngControlCreate(o); }, update: (n, o) => { n?.\u0275ngControlUpdate?.(o); }, passThroughInput: e }; }; }
function YE(e) { let t = n => { let o = Array.isArray(e); n.hostDirectives === null ? (n.resolveHostDirectives = BA, n.hostDirectives = o ? e.map(Xu) : [e]) : o ? n.hostDirectives.unshift(...e.map(Xu)) : n.hostDirectives.unshift(e); }; return t.ngInherit = !0, t; }
function BA(e) { let t = [], n = !1, o = null, r = null; for (let i = 0; i < e.length; i++) {
    let s = e[i];
    if (s.hostDirectives !== null) {
        let a = t.length;
        o ??= new Map, r ??= new Map, KE(s, t, o), r.set(s, [a, t.length - 1]);
    }
    i === 0 && He(s) && (n = !0, t.push(s));
} for (let i = n ? 1 : 0; i < e.length; i++)
    t.push(e[i]); return [t, o, r]; }
function KE(e, t, n) { if (e.hostDirectives !== null)
    for (let o of e.hostDirectives)
        if (typeof o == "function") {
            let r = o();
            for (let i of r)
                kg(Xu(i), t, n);
        }
        else
            kg(o, t, n); }
function kg(e, t, n) { let o = be(e.directive); $A(o.declaredInputs, e.inputs), KE(o, t, n), n.set(o, e), t.push(o); }
function Xu(e) { return typeof e == "function" ? { directive: P(e), inputs: Le, outputs: Le } : { directive: P(e.directive), inputs: Og(e.inputs), outputs: Og(e.outputs) }; }
function Og(e) { if (e === void 0 || e.length === 0)
    return Le; let t = {}; for (let n = 0; n < e.length; n += 2)
    t[e[n]] = e[n + 1]; return t; }
function $A(e, t) { for (let n in t)
    if (t.hasOwnProperty(n)) {
        let o = t[n], r = e[n];
        e[o] = r;
    } }
function UA(e) { return Object.getPrototypeOf(e.prototype).constructor; }
function kf(e) { let t = UA(e.type), n = !0, o = [e]; for (; t;) {
    let r;
    if (He(e))
        r = t.\u0275cmp || t.\u0275dir;
    else {
        if (t.\u0275cmp)
            throw new D(903, !1);
        r = t.\u0275dir;
    }
    if (r) {
        if (n) {
            o.push(r);
            let s = e;
            s.inputs = tu(e.inputs), s.declaredInputs = tu(e.declaredInputs), s.outputs = tu(e.outputs);
            let a = r.hostBindings;
            a && QA(e, a);
            let c = r.viewQuery, l = r.contentQueries;
            if (c && WA(e, c), l && zA(e, l), qA(e, r), vh(e.outputs, r.outputs), He(r) && r.data.animation) {
                let u = e.data;
                u.animation = (u.animation || []).concat(r.data.animation);
            }
        }
        let i = r.features;
        if (i)
            for (let s = 0; s < i.length; s++) {
                let a = i[s];
                a && a.ngInherit && a(e), a === kf && (n = !1);
            }
    }
    t = Object.getPrototypeOf(t);
} GA(o); }
function qA(e, t) { for (let n in t.inputs) {
    if (!t.inputs.hasOwnProperty(n) || e.inputs.hasOwnProperty(n))
        continue;
    let o = t.inputs[n];
    o !== void 0 && (e.inputs[n] = o, e.declaredInputs[n] = t.declaredInputs[n]);
} }
function GA(e) { let t = 0, n = null; for (let o = e.length - 1; o >= 0; o--) {
    let r = e[o];
    r.hostVars = t += r.hostVars, r.hostAttrs = uo(r.hostAttrs, n = uo(n, r.hostAttrs));
} }
function tu(e) { return e === Le ? {} : e === F ? [] : e; }
function WA(e, t) { let n = e.viewQuery; n ? e.viewQuery = (o, r) => { t(o, r), n(o, r); } : e.viewQuery = t; }
function zA(e, t) { let n = e.contentQueries; n ? e.contentQueries = (o, r, i) => { t(o, r, i), n(o, r, i); } : e.contentQueries = t; }
function QA(e, t) { let n = e.hostBindings; n ? e.hostBindings = (o, r) => { t(o, r), n(o, r); } : e.hostBindings = t; }
function JE(e, t, n, o, r, i, s, a) { if (n.firstCreatePass) {
    e.mergedAttrs = uo(e.mergedAttrs, e.attrs);
    let u = e.tView = Gd(2, e, r, i, s, n.directiveRegistry, n.pipeRegistry, null, n.schemas, n.consts, null);
    n.queries !== null && (n.queries.template(n, e), u.queries = n.queries.embeddedTView(e));
} a && (e.flags |= a), ct(e, !1); let c = XE(n, t, e, o); mr() && rf(n, t, c, e), $e(c, t); let l = Ov(c, t, c, e); t[o + I] = l, zd(t, l), wE(l, e, t); }
function ZA(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; return t.firstCreatePass ? (f = Pn(t, d, 4, s || null, a || null), ns() && uE(t, e, f, ge(t.consts, l), lf), Tm(t, f)) : f = t.data[d], JE(f, e, t, n, o, r, i, c), Un(f) && xa(t, e, f), l != null && Oo(e, f, u), f; }
function _n(e, t, n, o, r, i, s, a, c, l, u) { let d = n + I, f; if (t.firstCreatePass) {
    if (f = Pn(t, d, 4, s || null, a || null), l != null) {
        let p = ge(t.consts, l);
        f.localNames = [];
        for (let h = 0; h < p.length; h += 2)
            f.localNames.push(p[h], -1);
    }
}
else
    f = t.data[d]; return JE(f, e, t, n, o, r, i, c), l != null && Oo(e, f, u), f; }
function Of(e, t, n, o, r, i, s, a) { let c = g(), l = A(), u = ge(l.consts, i); return ZA(c, l, e, t, n, o, r, u, void 0, s, a), Of; }
function xf(e, t, n, o, r, i, s, a) { let c = g(), l = A(), u = ge(l.consts, i); return _n(c, l, e, t, n, o, r, u, void 0, s, a), xf; }
var XE = eI;
function eI(e, t, n, o) { return Je(!0), t[w].createComment(""); }
function YA(e, t, n, o) { let r = !Da(t, n); Je(r); let i = t[ue]?.data[fa]?.[o] ?? null; if (i !== null && n.tView !== null && n.tView.ssrId === null && (n.tView.ssrId = i), r)
    return eI(e, t); let s = t[ue], a = pi(s, e, t, n); Ea(s, o, a); let c = Od(s, o); return Ua(c, a); }
function tI() { XE = YA; }
var oe = (function (e) { return e[e.NOT_STARTED = 0] = "NOT_STARTED", e[e.IN_PROGRESS = 1] = "IN_PROGRESS", e[e.COMPLETE = 2] = "COMPLETE", e[e.FAILED = 3] = "FAILED", e; })(oe || {}), xg = 0, KA = 1, Z = (function (e) { return e[e.Placeholder = 0] = "Placeholder", e[e.Loading = 1] = "Loading", e[e.Complete = 2] = "Complete", e[e.Error = 3] = "Error", e; })(Z || {}), zr = (function (e) { return e[e.Initial = -1] = "Initial", e; })(zr || {}), ao = 0, At = 1, Tr = 2, vs = 3, JA = 4, XA = 5, Ka = 6, eR = 7, co = 8, tR = 9, Pf = (function (e) { return e[e.Manual = 0] = "Manual", e[e.Playthrough = 1] = "Playthrough", e; })(Pf || {});
function gi(e, t, n) { let o = oI(e); t[o] === null && (t[o] = []), t[o].push(n); }
function _s(e, t) { let n = oI(e), o = t[n]; if (o !== null) {
    for (let r of o)
        r();
    t[n] = null;
} }
function nI(e) { _s(1, e), _s(0, e), _s(2, e); }
function oI(e) { let t = JA; return e === 1 ? t = XA : e === 2 && (t = tR), t; }
function mi(e) { return e + 1; }
function Te(e, t) { let n = e[m], o = mi(t.index); return e[o]; }
function nR(e, t, n) { let o = e[m], r = mi(t); e[r] = n; }
function fe(e, t) { let n = mi(t.index); return e.data[n]; }
function oR(e, t, n) { let o = mi(t); e.data[o] = n; }
function rR(e, t, n) { let o = t[m], r = fe(o, n); switch (e) {
    case Z.Complete: return r.primaryTmplIndex;
    case Z.Loading: return r.loadingTmplIndex;
    case Z.Error: return r.errorTmplIndex;
    case Z.Placeholder: return r.placeholderTmplIndex;
    default: return null;
} }
function ed(e, t) { return t === Z.Placeholder ? e.placeholderBlockConfig?.[xg] ?? null : t === Z.Loading ? e.loadingBlockConfig?.[xg] ?? null : null; }
function rI(e) { return e.loadingBlockConfig?.[KA] ?? null; }
function Pg(e, t) { if (!e || e.length === 0)
    return t; let n = new Set(e); for (let o of t)
    n.add(o); return e.length === n.size ? e : Array.from(n); }
function iR(e, t) { let n = t.primaryTmplIndex + I; return Vt(e, n); }
function iI(e) { return e !== null && typeof e == "object" && typeof e.primaryTmplIndex == "number"; }
function sI(e, t) { let n = null, o = mi(t.index); return I < o && o < e.bindingStartIndex && (n = fe(e, t)), !!n && iI(n); }
function Lf(e, t, n, o) { let r = n.get(q); return Aw(e, () => r.run(t), i => r.runOutsideAngular(() => bw(i)), o); }
function sR(e, t, n) { return n == null ? e : n >= 0 ? fl(n, e) : e[t.index][G] ?? null; }
function aR(e, t) { return fn(I + t, e); }
function Vo(e, t, n, o, r, i, s, a) { let c = e[L], l = c.get(q), u; function d() { if (at(e)) {
    u.destroy();
    return;
} let f = Te(e, t), p = f[At]; if (p !== zr.Initial && p !== Z.Placeholder) {
    u.destroy();
    return;
} let h = sR(e, t, o); if (!h || (u.destroy(), at(h)))
    return; let y = aR(h, n), E = r(y, () => { l.run(() => { e !== h && ts(h, E), i(); }); }, c, a); e !== h && pr(h, E), gi(s, f, E); } u = av({ read: d }, { injector: c }); }
function Ja(e, t) { let n = t.get(uR), o = () => n.remove(e); return n.add(e), o; }
var cR = () => typeof requestIdleCallback < "u" ? requestIdleCallback : setTimeout, lR = () => typeof requestIdleCallback < "u" ? cancelIdleCallback : clearTimeout, uR = (() => { class e {
    executingCallbacks = !1;
    idleId = null;
    current = new Set;
    deferred = new Set;
    ngZone = v(q);
    requestIdleCallbackFn = cR().bind(globalThis);
    cancelIdleCallbackFn = lR().bind(globalThis);
    add(n) { (this.executingCallbacks ? this.deferred : this.current).add(n), this.idleId === null && this.scheduleIdleCallback(); }
    remove(n) { let { current: o, deferred: r } = this; o.delete(n), r.delete(n), o.size === 0 && r.size === 0 && this.cancelIdleCallback(); }
    scheduleIdleCallback() { let n = () => { this.cancelIdleCallback(), this.executingCallbacks = !0; for (let o of this.current)
        o(); if (this.current.clear(), this.executingCallbacks = !1, this.deferred.size > 0) {
        for (let o of this.deferred)
            this.current.add(o);
        this.deferred.clear(), this.scheduleIdleCallback();
    } }; this.idleId = this.requestIdleCallbackFn(() => this.ngZone.run(n)); }
    cancelIdleCallback() { this.idleId !== null && (this.cancelIdleCallbackFn(this.idleId), this.idleId = null); }
    ngOnDestroy() { this.cancelIdleCallback(), this.current.clear(), this.deferred.clear(); }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })();
function Xa(e) { return (t, n) => aI(e, t, n); }
function aI(e, t, n) { let o = n.get(cI), r = n.get(q), i = () => o.remove(t); return o.add(e, t, r), i; }
var cI = (() => { class e {
    executingCallbacks = !1;
    timeoutId = null;
    invokeTimerAt = null;
    current = [];
    deferred = [];
    add(n, o, r) { let i = this.executingCallbacks ? this.deferred : this.current; this.addToQueue(i, Date.now() + n, o), this.scheduleTimer(r); }
    remove(n) { let { current: o, deferred: r } = this; this.removeFromQueue(o, n) === -1 && this.removeFromQueue(r, n), o.length === 0 && r.length === 0 && this.clearTimeout(); }
    addToQueue(n, o, r) { let i = n.length; for (let s = 0; s < n.length; s += 2)
        if (n[s] > o) {
            i = s;
            break;
        } Xc(n, i, o, r); }
    removeFromQueue(n, o) { let r = -1; for (let i = 0; i < n.length; i += 2)
        if (n[i + 1] === o) {
            r = i;
            break;
        } return r > -1 && Jc(n, r, 2), r; }
    scheduleTimer(n) { let o = () => { this.clearTimeout(), this.executingCallbacks = !0; let i = [...this.current], s = Date.now(); for (let c = 0; c < i.length; c += 2) {
        let l = i[c], u = i[c + 1];
        if (l <= s)
            u();
        else
            break;
    } let a = -1; for (let c = 0; c < this.current.length && this.current[c] <= s; c += 2)
        a = c + 1; if (a >= 0 && Jc(this.current, 0, a + 1), this.executingCallbacks = !1, this.deferred.length > 0) {
        for (let c = 0; c < this.deferred.length; c += 2) {
            let l = this.deferred[c], u = this.deferred[c + 1];
            this.addToQueue(this.current, l, u);
        }
        this.deferred.length = 0;
    } this.scheduleTimer(n); }; if (this.current.length > 0) {
        let i = Date.now(), s = this.current[0];
        if (this.timeoutId === null || this.invokeTimerAt && this.invokeTimerAt - s > 16) {
            this.clearTimeout();
            let a = Math.max(s - i, 16);
            this.invokeTimerAt = s, this.timeoutId = n.runOutsideAngular(() => setTimeout(() => n.run(o), a));
        }
    } }
    clearTimeout() { this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null); }
    ngOnDestroy() { this.clearTimeout(), this.current.length = 0, this.deferred.length = 0; }
    static \u0275prov = B({ token: e, providedIn: "root", factory: () => new e });
} return e; })(), dR = (() => { class e {
    cachedInjectors = new Map;
    getOrCreateInjector(n, o, r, i) { if (!this.cachedInjectors.has(n)) {
        let s = r.length > 0 ? Af(r, o, i) : null;
        this.cachedInjectors.set(n, s);
    } return this.cachedInjectors.get(n); }
    ngOnDestroy() { try {
        for (let n of this.cachedInjectors.values())
            n !== null && n.destroy();
    }
    finally {
        this.cachedInjectors.clear();
    } }
    static \u0275prov = B({ token: e, providedIn: "environment", factory: () => new e });
} return e; })(), fR = new C("DEFER_BLOCK_DEPENDENCY_INTERCEPTOR"), lI = new C("");
function nu(e, t, n) { return e.get(dR).getOrCreateInjector(t, e, n, ""); }
function pR(e, t, n) { if (e instanceof so) {
    let r = e.injector, i = e.parentInjector, s = nu(i, t, n);
    return new so(r, s);
} let o = e.get(_e); if (o !== e) {
    let r = nu(o, t, n);
    return new so(e, r);
} return nu(e, t, n); }
function Tt(e, t, n, o = !1) { let r = n[Q], i = r[m]; if (at(r))
    return; let s = Te(r, t), a = s[At], c = s[eR]; if (!(c !== null && e < c) && Fg(a, e) && Fg(s[ao] ?? -1, e)) {
    let l = fe(i, t), d = !o && (typeof ngServerMode > "u" || !ngServerMode) && (rI(l) !== null || ed(l, Z.Loading) !== null || ed(l, Z.Placeholder)) ? td : uI;
    try {
        d(e, s, n, t, r);
    }
    catch (f) {
        uf(r, f);
    }
} }
function hR(e, t) { let n = e[Re]?.findIndex(r => r.data[ri] === t[At]) ?? -1; return { dehydratedView: n > -1 ? e[Re][n] : null, dehydratedViewIx: n }; }
function uI(e, t, n, o, r) { V(x.DeferBlockStateStart); let i = rR(e, r, o); if (i !== null) {
    t[At] = e;
    let s = r[m], a = i + I, c = Vt(s, a), l = 0;
    df(n, l);
    let u;
    if (e === Z.Complete) {
        let h = fe(s, o), y = h.providers;
        y && y.length > 0 && (u = pR(r[L], h, y));
    }
    let { dehydratedView: d, dehydratedViewIx: f } = hR(n, t), p = xo(r, c, null, { injector: u, dehydratedView: d });
    if (Po(n, p, l, Mn(c, d)), fi(p, 2), f > -1 && n[Re]?.splice(f, 1), (e === Z.Complete || e === Z.Error) && Array.isArray(t[co])) {
        for (let h of t[co])
            h();
        t[co] = null;
    }
} V(x.DeferBlockStateEnd); }
function gR(e, t, n, o, r) { let i = Date.now(), s = r[m], a = fe(s, o); if (t[Tr] === null || t[Tr] <= i) {
    t[Tr] = null;
    let c = rI(a), l = t[vs] !== null;
    if (e === Z.Loading && c !== null && !l) {
        t[ao] = e;
        let u = Lg(c, t, o, n, r);
        t[vs] = u;
    }
    else {
        e > Z.Loading && l && (t[vs](), t[vs] = null, t[ao] = null), uI(e, t, n, o, r);
        let u = ed(a, e);
        u !== null && (t[Tr] = i + u, Lg(u, t, o, n, r));
    }
}
else
    t[ao] = e; }
function Lg(e, t, n, o, r) { return aI(e, () => { let s = t[ao]; t[Tr] = null, t[ao] = null, s !== null && Tt(s, n, o); }, r[L]); }
function Fg(e, t) { return e < t; }
function Ho(e, t) { let n = e[t.index]; Tt(Z.Placeholder, t, n); }
function jg(e, t, n) { e.loadingPromise.then(() => { e.loadingState === oe.COMPLETE ? Tt(Z.Complete, t, n) : e.loadingState === oe.FAILED && Tt(Z.Error, t, n); }); }
var td = null;
function dI(e, t, n, o) { let r = e.consts; n != null && (t.placeholderBlockConfig = ge(r, n)), o != null && (t.loadingBlockConfig = ge(r, o)), td === null && (td = gR); }
var Ss = "__ngAsyncComponentMetadataFn__";
function mR(e) { return e[Ss] ?? null; }
function fI(e, t, n) { let o = e; return o[Ss] = () => Promise.all(t()).then(r => (n(...r), o[Ss] = null, r)), o[Ss]; }
function Ff(e, t, n, o) { return ft(() => { let r = e; t !== null && (r.hasOwnProperty("decorators") && r.decorators !== void 0 ? r.decorators.push(...t) : r.decorators = t), n !== null && (r.ctorParameters = n), o !== null && (r.hasOwnProperty("propDecorators") && r.propDecorators !== void 0 ? r.propDecorators = z(z({}, r.propDecorators), o) : r.propDecorators = o); }); }
var yR = (() => { class e {
    log(n) { console.log(n); }
    warn(n) { console.warn(n); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function jf(e) { return typeof e == "function" && e[ae] !== void 0; }
function Vf(e) { return jf(e) && typeof e.set == "function"; }
function bs(e, t) { let n = e[m]; for (let o = I; o < n.bindingStartIndex; o++)
    if (K(e[o])) {
        let r = e[o];
        if (!(o === n.bindingStartIndex - 1)) {
            let s = n.data[o], a = fe(n, s);
            if (iI(a)) {
                t.push({ lContainer: r, lView: e, tNode: s, tDetails: a });
                continue;
            }
        }
        ne(r[$]) && bs(r[$], t);
        for (let s = G; s < r.length; s++)
            bs(r[s], t);
    }
    else
        ne(e[o]) && bs(e[o], t); }
function vR() { return J("Chrome DevTools profiling"), () => { }; }
function ER(e) { let t = e.get($t), n = e.get(_t), o = Ym(t, n), r = {}; for (let [i, s] of Object.entries(o))
    xw(i) || (r[i] = s); return r; }
var Vg = "ng";
function IR(e, t) { DR(e, t); }
function DR(e, t) { if (typeof COMPILED > "u" || !COMPILED) {
    let n = Se;
    n[Vg] ??= {}, n[Vg][e] = t;
} }
var pI = new C(""), hI = new C(""), TR = (() => { class e {
    _ngZone;
    registry;
    _isZoneStable = !0;
    _callbacks = [];
    _taskTrackingZone = null;
    _destroyRef;
    constructor(n, o, r) { this._ngZone = n, this.registry = o, Yi() && (this._destroyRef = v(Be, { optional: !0 }) ?? void 0), Hf || (mI(r), r.addToWindow(o)), this._watchAngularEvents(), n.run(() => { this._taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone"); }); }
    _watchAngularEvents() { let n = this._ngZone.onUnstable.subscribe({ next: () => { this._isZoneStable = !1; } }), o = this._ngZone.runOutsideAngular(() => this._ngZone.onStable.subscribe({ next: () => { q.assertNotInAngularZone(), queueMicrotask(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } })); this._destroyRef?.onDestroy(() => { n.unsubscribe(), o.unsubscribe(); }); }
    isStable() { return this._isZoneStable && !this._ngZone.hasPendingMacrotasks; }
    _runCallbacksIfReady() { if (this.isStable())
        queueMicrotask(() => { for (; this._callbacks.length !== 0;) {
            let n = this._callbacks.pop();
            clearTimeout(n.timeoutId), n.doneCb();
        } });
    else {
        let n = this.getPendingTasks();
        this._callbacks = this._callbacks.filter(o => o.updateCb && o.updateCb(n) ? (clearTimeout(o.timeoutId), !1) : !0);
    } }
    getPendingTasks() { return this._taskTrackingZone ? this._taskTrackingZone.macroTasks.map(n => ({ source: n.source, creationLocation: n.creationLocation, data: n.data })) : []; }
    addCallback(n, o, r) { let i = -1; o && o > 0 && (i = setTimeout(() => { this._callbacks = this._callbacks.filter(s => s.timeoutId !== i), n(); }, o)), this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: r }); }
    whenStable(n, o, r) { if (r && !this._taskTrackingZone)
        throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(n, o, r), this._runCallbacksIfReady(); }
    registerApplication(n) { this.registry.registerApplication(n, this); }
    unregisterApplication(n) { this.registry.unregisterApplication(n); }
    findProviders(n, o, r) { return []; }
    static \u0275fac = function (o) { return new (o || e)(pe(q), pe(gI), pe(hI)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac });
} return e; })(), gI = (() => { class e {
    _applications = new Map;
    registerApplication(n, o) { this._applications.set(n, o); }
    unregisterApplication(n) { this._applications.delete(n); }
    unregisterAllApplications() { this._applications.clear(); }
    getTestability(n) { return this._applications.get(n) || null; }
    getAllTestabilities() { return Array.from(this._applications.values()); }
    getAllRootElements() { return Array.from(this._applications.keys()); }
    findTestabilityInTree(n, o = !0) { return Hf?.findTestabilityInTree(this, n, o) ?? null; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })();
function mI(e) { Hf = e; }
var Hf;
function Bf(e) { return !!e && typeof e.then == "function"; }
function yI(e) { return !!e && typeof e.subscribe == "function"; }
var $f = new C("");
function vI(e) { return Ye([{ provide: $f, multi: !0, useValue: e }]); }
var Uf = (() => { class e {
    resolve;
    reject;
    initialized = !1;
    done = !1;
    donePromise = new Promise((n, o) => { this.resolve = n, this.reject = o; });
    appInits = v($f, { optional: !0 }) ?? [];
    injector = v(ce);
    constructor() { }
    runInitializers() { if (this.initialized)
        return; let n = []; for (let r of this.appInits) {
        let i = Zi(this.injector, r);
        if (Bf(i))
            n.push(i);
        else if (yI(i)) {
            let s = new Promise((a, c) => { i.subscribe({ complete: a, error: c }); });
            n.push(s);
        }
    } let o = () => { this.done = !0, this.resolve(); }; Promise.all(n).then(() => { o(); }).catch(r => { this.reject(r); }), n.length === 0 && o(), this.initialized = !0; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), yi = new C("");
function qf() { sh(() => { let e = ""; throw new D(600, e); }); }
function EI(e) { return e.isBoundToModule; }
var CR = 10;
function Gf(e, t) { return Array.isArray(t) ? t.reduce(Gf, e) : z(z({}, e), t); }
var Ge = (() => { class e {
    _runningTick = !1;
    _destroyed = !1;
    _destroyListeners = [];
    _views = [];
    internalErrorHandler = v(It);
    afterRenderManager = v(ba);
    zonelessEnabled = v(Qn);
    rootEffectScheduler = v(ls);
    dirtyFlags = 0;
    tracingSnapshot = null;
    allTestViews = new Set;
    autoDetectTestViews = new Set;
    includeAllTestViews = !1;
    afterTick = new um;
    get allViews() { return [...(this.includeAllTestViews ? this.allTestViews : this.autoDetectTestViews).keys(), ...this._views]; }
    get destroyed() { return this._destroyed; }
    componentTypes = [];
    components = [];
    internalPendingTask = v(Et);
    get isStable() { return this.internalPendingTask.hasPendingTasksObservable.pipe(EN(n => !n)); }
    constructor() { v(xn, { optional: !0 }); }
    whenStable() { let n; return new Promise(o => { n = this.isStable.subscribe({ next: r => { r && o(); } }); }).finally(() => { n.unsubscribe(); }); }
    _injector = v(_e);
    _rendererFactory = null;
    get injector() { return this._injector; }
    bootstrap(n, o) { return this.bootstrapImpl(n, o); }
    bootstrapImpl(n, o, r = ce.NULL) { return this._injector.get(q).run(() => { V(x.BootstrapComponentStart); let s = n instanceof za; if (!this._injector.get(Uf).done) {
        let h = "";
        throw new D(405, h);
    } let c; s ? c = n : c = this._injector.get(hi).resolveComponentFactory(n), this.componentTypes.push(c.componentType); let l = EI(c) ? void 0 : this._injector.get(mo), u = o || c.selector, d = c.create(r, [], u, l), f = d.location.nativeElement, p = d.injector.get(pI, null); return p?.registerApplication(f), d.onDestroy(() => { this.detachView(d.hostView), Nr(this.components, d), p?.unregisterApplication(f); }), this._loadComponent(d), V(x.BootstrapComponentEnd, d), d; }); }
    tick() { this.zonelessEnabled || (this.dirtyFlags |= 1), this._tick(); }
    _tick() { V(x.ChangeDetectionStart), this.tracingSnapshot !== null ? this.tracingSnapshot.run(Sa.CHANGE_DETECTION, this.tickImpl) : this.tickImpl(); }
    tickImpl = () => { if (this._runningTick)
        throw V(x.ChangeDetectionEnd), new D(101, !1); let n = R(null); try {
        this._runningTick = !0, this.synchronize();
    }
    finally {
        this._runningTick = !1, this.tracingSnapshot?.dispose(), this.tracingSnapshot = null, R(n), this.afterTick.next(), V(x.ChangeDetectionEnd);
    } };
    synchronize() { this._rendererFactory === null && !this._injector.destroyed && (this._rendererFactory = this._injector.get(Ur, null, { optional: !0 })); let n = 0; for (; this.dirtyFlags !== 0 && n++ < CR;) {
        V(x.ChangeDetectionSyncStart);
        try {
            this.synchronizeOnce();
        }
        finally {
            V(x.ChangeDetectionSyncEnd);
        }
    } }
    synchronizeOnce() { this.dirtyFlags & 16 && (this.dirtyFlags &= -17, this.rootEffectScheduler.flush()); let n = !1; if (this.dirtyFlags & 7) {
        let o = !!(this.dirtyFlags & 1);
        this.dirtyFlags &= -8, this.dirtyFlags |= 8;
        for (let { _lView: r } of this.allViews) {
            if (!o && !qn(r))
                continue;
            let i = o && !this.zonelessEnabled ? 0 : 1;
            Sv(r, i), n = !0;
        }
        if (this.dirtyFlags &= -5, this.syncDirtyFlagsWithViews(), this.dirtyFlags & 23)
            return;
    } n || (this._rendererFactory?.begin?.(), this._rendererFactory?.end?.()), this.dirtyFlags & 8 && (this.dirtyFlags &= -9, this.afterRenderManager.execute()), this.syncDirtyFlagsWithViews(); }
    syncDirtyFlagsWithViews() { if (this.allViews.some(({ _lView: n }) => qn(n))) {
        this.dirtyFlags |= 2;
        return;
    }
    else
        this.dirtyFlags &= -8; }
    attachView(n) { let o = n; this._views.push(o), o.attachToAppRef(this); }
    detachView(n) { let o = n; Nr(this._views, o), o.detachFromAppRef(); }
    _loadComponent(n) { this.attachView(n.hostView); try {
        this.tick();
    }
    catch (r) {
        this.internalErrorHandler(r);
    } this.components.push(n), this._injector.get(yi, []).forEach(r => r(n)); }
    ngOnDestroy() { if (!this._destroyed)
        try {
            this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy());
        }
        finally {
            this._destroyed = !0, this._views = [], this._destroyListeners = [];
        } }
    onDestroy(n) { return this._destroyListeners.push(n), () => Nr(this._destroyListeners, n); }
    destroy() { if (this._destroyed)
        throw new D(406, !1); let n = this._injector; n.destroy && !n.destroyed && n.destroy(); }
    get viewCount() { return this._views.length; }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function Nr(e, t) { let n = e.indexOf(t); n > -1 && e.splice(n, 1); }
function ec() { let e, t; return { promise: new Promise((o, r) => { e = o, t = r; }), resolve: e, reject: t }; }
function II(e) { let t = g(), n = _(); if (Ho(t, n), !CI(0, t))
    return; let o = t[L], r = Te(t, n), i = e(() => Ce(0, t, n), o); gi(0, r, i); }
function DI(e) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let t = g(), n = t[L], o = _(), r = t[m], i = fe(r, o); if (i.loadingState === oe.NOT_STARTED) {
    let s = Te(t, o), c = e(() => vi(i, t, o), n);
    gi(1, s, c);
} }
function TI(e, t, n) { if (typeof ngServerMode < "u" && ngServerMode)
    return; let o = t[L], r = Te(t, n), i = r[Ka], s = e(() => Rt(o, i), o); gi(2, r, s); }
function vi(e, t, n) { tc(e, t, n); }
function tc(e, t, n) { let o = t[L], r = t[m]; if (e.loadingState !== oe.NOT_STARTED)
    return e.loadingPromise ?? Promise.resolve(); let i = Te(t, n), s = iR(r, e); e.loadingState = oe.IN_PROGRESS, _s(1, i); let a = e.dependencyResolverFn, c = o.get(yr).add(); return a ? (e.loadingPromise = Promise.allSettled(a()).then(l => { let u = !1, d = null, f = [], p = []; for (let h = 0; h < l.length; h++) {
    let y = l[h];
    if (y.status === "fulfilled") {
        let E = y.value, T = W(E) || be(E);
        if (T)
            f.push(T);
        else {
            let k = Qe(E);
            k && p.push(k);
        }
    }
    else {
        u = !0, d = y.reason instanceof Error ? y.reason : new Error(String(y.reason));
        break;
    }
} if (u) {
    if (e.loadingState = oe.FAILED, e.errorTmplIndex === null) {
        let y = "", E = new D(-750, y);
        uf(t, E);
    }
}
else {
    e.loadingState = oe.COMPLETE;
    let h = s.tView;
    if (f.length > 0) {
        h.directiveRegistry = Pg(h.directiveRegistry, f);
        let y = f.map(T => T.type), E = Qi(!1, ...y);
        e.providers = E;
    }
    p.length > 0 && (h.pipeRegistry = Pg(h.pipeRegistry, p));
} }), e.loadingPromise.finally(() => { e.loadingPromise = null, c(); })) : (e.loadingPromise = Promise.resolve().then(() => { e.loadingPromise = null, e.loadingState = oe.COMPLETE, c(); }), e.loadingPromise); }
function CI(e, t) { return !(e === 0 && typeof ngServerMode < "u" && ngServerMode || t[L].get(lI, null, { optional: !0 })?.behavior === Pf.Manual); }
function Ce(e, t, n) { let o = t[m], r = t[n.index]; if (!CI(e, t))
    return; let i = Te(t, n), s = fe(o, n); switch (nI(i), s.loadingState) {
    case oe.NOT_STARTED:
        Tt(Z.Loading, n, r), tc(s, t, n), s.loadingState === oe.IN_PROGRESS && jg(s, n, r);
        break;
    case oe.IN_PROGRESS:
        Tt(Z.Loading, n, r), jg(s, n, r);
        break;
    case oe.COMPLETE:
        Tt(Z.Complete, n, r);
        break;
    case oe.FAILED:
        Tt(Z.Error, n, r);
        break;
    default:
} }
function Rt(e, t, n) { return ze(this, null, function* () { let o = e.get(St); if (o.hydrating.has(t))
    return; let { parentBlockPromise: i, hydrationQueue: s } = Uw(t, e); if (s.length === 0)
    return; i !== null && s.shift(), wR(o, s), i !== null && (yield i); let a = s[0]; o.has(a) ? yield Hg(e, s, n) : o.awaitParentBlock(a, () => ze(null, null, function* () { return yield Hg(e, s, n); })); }); }
function Hg(e, t, n) { return ze(this, null, function* () { let o = e.get(St), r = o.hydrating, i = e.get(Et), s = i.add(); for (let c = 0; c < t.length; c++) {
    let l = t[c], u = o.get(l);
    if (u != null) {
        if (yield SR(u), yield _R(e), MR(u)) {
            Ob(u), Bg(t.slice(c), o);
            break;
        }
        r.get(l).resolve();
    }
    else {
        NR(c, t, o), Bg(t.slice(c), o);
        break;
    }
} let a = t[t.length - 1]; yield r.get(a)?.promise, i.remove(s), n && n(t), xb(o.get(a), t, o, e.get(Ge)); }); }
function MR(e) { return Te(e.lView, e.tNode)[At] === Z.Error; }
function NR(e, t, n) { let o = e - 1, r = o > -1 ? n.get(t[o]) : null; r && Wa(r.lContainer); }
function Bg(e, t) { let n = t.hydrating; for (let o in e)
    n.get(o)?.reject(); t.cleanup(e); }
function wR(e, t) { for (let n of t)
    e.hydrating.set(n, ec()); }
function _R(e) { return new Promise(t => ef(t, { injector: e })); }
function SR(e) { return ze(this, null, function* () { let { tNode: t, lView: n } = e, o = Te(n, t); return new Promise(r => { bR(o, r), Ce(2, n, t); }); }); }
function bR(e, t) { Array.isArray(e[co]) || (e[co] = []), e[co].push(t); }
function X(e, t, n) { return e === 0 ? $g(t, n) : e === 2 ? !$g(t, n) : !(typeof ngServerMode < "u" && ngServerMode); }
function AR(e) { return e != null && (e & 1) === 1; }
function $g(e, t) { let n = e[L], o = fe(e[m], t), r = ai(n), i = AR(o.flags); if (typeof ngServerMode < "u" && ngServerMode)
    return !r || !i; let a = Te(e, t)[Ka] !== null; return !(i && a && r); }
function Kt(e, t) { let n = fe(e, t); return n.hydrateTriggers ??= new Map; }
function MI(e, t, n) { let o = [], r = [], i = [], s = []; for (let [a, c] of t) {
    let l = n.get(a);
    if (l !== void 0) {
        let u = c.data[Mt], d = l;
        for (let f = 0; f < u; f++) {
            if (d = d.previousSibling, d.nodeType !== Node.ELEMENT_NODE)
                continue;
            let p = { el: d, blockName: a };
            c.hydrate.idle && o.push(p), c.hydrate.immediate && s.push(p), c.hydrate.timer !== null && (p.delay = c.hydrate.timer, r.push(p)), c.hydrate.viewport && (typeof c.hydrate.viewport != "boolean" && (p.intersectionObserverOptions = c.hydrate.viewport), i.push(p));
        }
    }
} RR(e, o), xR(e, s), kR(e, i), OR(e, r); }
function RR(e, t) { for (let n of t) {
    let o = e.get(St), i = Ja(() => Rt(e, n.blockName), e);
    o.addCleanupFn(n.blockName, i);
} }
function kR(e, t) { if (t.length > 0) {
    let n = e.get(St);
    for (let o of t) {
        let r = Lf(o.el, () => Rt(e, o.blockName), e, o.intersectionObserverOptions);
        n.addCleanupFn(o.blockName, r);
    }
} }
function OR(e, t) { for (let n of t) {
    let o = e.get(St), r = () => Rt(e, n.blockName), s = Xa(n.delay)(r, e);
    o.addCleanupFn(n.blockName, s);
} }
function xR(e, t) { for (let n of t)
    Rt(e, n.blockName); }
function NI(e, t, n, o, r, i, s, a, c, l) { let u = g(), d = A(), f = e + I, p = _n(u, d, e, null, 0, 0), h = u[L], y = ai(h); if (d.firstCreatePass) {
    J("NgDefer");
    let ht = { primaryTmplIndex: t, loadingTmplIndex: o ?? null, placeholderTmplIndex: r ?? null, errorTmplIndex: i ?? null, placeholderBlockConfig: null, loadingBlockConfig: null, dependencyResolverFn: n ?? null, loadingState: oe.NOT_STARTED, loadingPromise: null, providers: null, hydrateTriggers: null, debug: null, flags: l ?? 0 };
    c?.(d, ht, a, s), oR(d, f, ht);
} let E = u[f]; wE(E, p, u); let T = null, k = null; if (E[Re]?.length > 0) {
    let ht = E[Re][0].data;
    k = ht[ga] ?? null, T = ht[ri];
} let te = [null, zr.Initial, null, null, null, null, k, T, null, null]; nR(u, f, te); let We = null; k !== null && y && (We = h.get(St), We.add(k, { lView: u, tNode: p, lContainer: E })); let Oe = () => { nI(te), k !== null && We?.cleanup([k]); }; gi(0, te, () => ts(u, Oe)), pr(u, Oe); }
function wI(e) { let t = g(), n = ke(); if (!X(0, t, n))
    return; let o = ve(); if (Y(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, a = Te(t, n)[At];
        i === !1 && a === zr.Initial ? Ho(t, n) : i === !0 && (a === zr.Initial || a === Z.Placeholder) && Ce(0, t, n);
    }
    finally {
        R(r);
    }
} }
function _I(e) { let t = g(), n = ke(); if (!X(1, t, n))
    return; let o = ve(); if (Y(t, o, e)) {
    let r = R(null);
    try {
        let i = !!e, s = t[m], a = fe(s, n);
        i === !0 && a.loadingState === oe.NOT_STARTED && vi(a, t, n);
    }
    finally {
        R(r);
    }
} }
function SI(e) { let t = g(), n = ke(); if (!X(2, t, n))
    return; let o = ve(), r = A(); if (Kt(r, n).set(6, null), Y(t, o, e))
    if (typeof ngServerMode < "u" && ngServerMode)
        Ce(2, t, n);
    else {
        let s = t[L], a = R(null);
        try {
            if (!!e === !0) {
                let u = Te(t, n)[Ka];
                Rt(s, u);
            }
        }
        finally {
            R(a);
        }
    } }
function bI() { let e = g(), t = _(); if (!X(2, e, t))
    return; Kt(A(), t).set(7, null), typeof ngServerMode < "u" && ngServerMode && Ce(2, e, t); }
function AI() { let e = g(), t = _(); X(0, e, t) && II(Ja); }
function RI() { let e = g(), t = _(); X(1, e, t) && DI(Ja); }
function kI() { let e = g(), t = _(); if (!X(2, e, t))
    return; Kt(A(), t).set(0, null), typeof ngServerMode < "u" && ngServerMode ? Ce(2, e, t) : TI(Ja, e, t); }
function OI() { let e = g(), t = _(); if (!X(0, e, t))
    return; fe(e[m], t).loadingTmplIndex === null && Ho(e, t), Ce(0, e, t); }
function xI() { let e = g(), t = _(); if (!X(1, e, t))
    return; let n = e[m], o = fe(n, t); o.loadingState === oe.NOT_STARTED && tc(o, e, t); }
function PI() { let e = g(), t = _(); if (!X(2, e, t))
    return; if (Kt(A(), t).set(1, null), typeof ngServerMode < "u" && ngServerMode)
    Ce(2, e, t);
else {
    let o = e[L], i = Te(e, t)[Ka];
    Rt(o, i);
} }
function LI(e) { let t = g(), n = _(); X(0, t, n) && II(Xa(e)); }
function FI(e) { let t = g(), n = _(); X(1, t, n) && DI(Xa(e)); }
function jI(e) { let t = g(), n = _(); if (!X(2, t, n))
    return; Kt(A(), n).set(5, { type: 5, delay: e }), typeof ngServerMode < "u" && ngServerMode ? Ce(2, t, n) : TI(Xa(e), t, n); }
function VI(e, t) { let n = g(), o = _(); X(0, n, o) && (Ho(n, o), typeof ngServerMode < "u" && ngServerMode || Vo(n, o, e, t, ny, () => Ce(0, n, o), 0)); }
function HI(e, t) { let n = g(), o = _(); if (!X(1, n, o))
    return; let r = n[m], i = fe(r, o); i.loadingState === oe.NOT_STARTED && Vo(n, o, e, t, ny, () => vi(i, n, o), 1); }
function BI() { let e = g(), t = _(); if (!X(2, e, t))
    return; Kt(A(), t).set(4, null), typeof ngServerMode < "u" && ngServerMode && Ce(2, e, t); }
function $I(e, t) { let n = g(), o = _(); X(0, n, o) && (Ho(n, o), typeof ngServerMode < "u" && ngServerMode || Vo(n, o, e, t, ty, () => Ce(0, n, o), 0)); }
function UI(e, t) { let n = g(), o = _(); if (!X(1, n, o))
    return; let r = n[m], i = fe(r, o); i.loadingState === oe.NOT_STARTED && Vo(n, o, e, t, ty, () => vi(i, n, o), 1); }
function qI() { let e = g(), t = _(); if (!X(2, e, t))
    return; Kt(A(), t).set(3, null), typeof ngServerMode < "u" && ngServerMode && Ce(2, e, t); }
function GI(e, t, n) { let o = g(), r = _(); X(0, o, r) && (Ho(o, r), typeof ngServerMode < "u" && ngServerMode || Vo(o, r, e, t, Lf, () => Ce(0, o, r), 0, n)); }
function WI(e, t, n) { let o = g(), r = _(); if (!X(1, o, r))
    return; let i = o[m], s = fe(i, r); s.loadingState === oe.NOT_STARTED && Vo(o, r, e, t, Lf, () => vi(s, o, r), 1, n); }
function zI(e) { let t = g(), n = _(); if (!X(2, t, n))
    return; Kt(A(), n).set(2, e ? { type: 2, intersectionObserverOptions: e } : null), typeof ngServerMode < "u" && ngServerMode && Ce(2, t, n); }
function Wf(e, t) { let n = g(), o = ve(); if (Y(n, o, t)) {
    let r = A(), i = ke();
    if (ja(i, r, n, e, t))
        De(i) && Tv(n, i.index);
    else {
        let a = ie(i, n);
        Pa(n[w], a, null, i.value, e, t, null);
    }
} return Wf; }
function zf(e, t, n, o) { let r = g(), i = ve(); if (Y(r, i, t)) {
    let s = A(), a = ke();
    MS(a, r, e, t, n, o);
} return zf; }
function wr(e) { if (J("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !On)
    return wr; let t = g(); if (wa(t))
    return wr; let n = _(), o = t[L].get(q); return _a(Us(t), n, () => PR(t, n, e, o)), ka(t[L]), tf(t[L], Us(t)), wr; }
function PR(e, t, n, o) { let r = ie(t, e), i = e[w], s = ov(n), a = [], c = !1, l = d => { if (Fr(d) !== r)
    return; let f = d instanceof AnimationEvent ? "animationend" : "transitionend"; o.runOutsideAngular(() => { i.listen(r, f, u); }); }, u = d => { Fr(d) === r && (Kd(d, r) && (c = !0), LR(d, r, i)); }; if (s && s.length > 0) {
    o.runOutsideAngular(() => { a.push(i.listen(r, "animationstart", l)), a.push(i.listen(r, "transitionstart", l)); }), K_(r, s, a);
    for (let d of s)
        i.addClass(r, d);
    o.runOutsideAngular(() => { requestAnimationFrame(() => { if (!c && (sv(r, En, On), !En.has(r))) {
        for (let d of s)
            i.removeClass(r, d);
        Zd(r);
    } }); });
} }
function LR(e, t, n) { let o = fo.get(t); if (!(Fr(e) !== t || !o) && Kd(e, t)) {
    e.stopPropagation();
    for (let r of o.classList)
        n.removeClass(t, r);
    Zd(t);
} }
function _r(e) { if (J("NgAnimateEnter"), typeof ngServerMode < "u" && ngServerMode || !On)
    return _r; let t = g(); if (wa(t))
    return _r; let n = _(); return _a(Us(t), n, () => FR(t, n, e)), ka(t[L]), tf(t[L], Us(t)), _r; }
function FR(e, t, n) { let o = ie(t, e); n.call(e[U], { target: o, animationComplete: J_ }); }
function Sr(e) { if (J("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !On)
    return Sr; let t = g(); if (wa(t))
    return Sr; let o = _(), r = t[L].get(q); return _a(Tn(t), o, () => jR(t, o, e, r)), ka(t[L]), Sr; }
function jR(e, t, n, o) { let { promise: r, resolve: i } = ec(), s = ie(t, e), a = e[w]; Cn.add(e[Ve]), (Tn(e).get(t.index).resolvers ??= []).push(i); let c = ov(n); return c && c.length > 0 ? VR(s, t, e, c, a, o) : i(), { promise: r, resolve: i }; }
function VR(e, t, n, o, r, i) { eS(e, r); let s = [], a = Tn(n).get(t.index)?.resolvers, c, l = !1, u = d => { if (!(Fr(d) !== e && d.type !== "animation-fallback") && (d.type === "animation-fallback" || Kd(d, e))) {
    if (l = !0, c && clearTimeout(c), d.type !== "animation-fallback" && d.stopPropagation(), En.delete(e), Pu(t, e), Array.isArray(t.projection))
        for (let p of o)
            r.removeClass(e, p);
    Lu(a, s), Fu(n, t);
} }; i.runOutsideAngular(() => { s.push(r.listen(e, "animationend", u)), s.push(r.listen(e, "transitionend", u)); }), Yd(t, e); for (let d of o)
    r.addClass(e, d); i.runOutsideAngular(() => { requestAnimationFrame(() => { if (l)
    return; sv(e, En, On); let d = En.get(e); d ? (c = setTimeout(() => { u(new CustomEvent("animation-fallback")); }, d.duration + 50), s.push(() => clearTimeout(c))) : (Pu(t, e), Lu(a, s), Fu(n, t)); }); }); }
function Xs(e) { if (J("NgAnimateLeave"), typeof ngServerMode < "u" && ngServerMode || !On)
    return Xs; let t = g(), n = _(); Cn.add(t[Ve]); let o = t[L].get(q), r = t[L].get(nv); return _a(Tn(t), n, () => HR(t, n, e, o, r)), ka(t[L]), Xs; }
function HR(e, t, n, o, r) { let { promise: i, resolve: s } = ec(), a = ie(t, e), c = [], l = e[w], u = wa(e); (Tn(e).get(t.index).resolvers ??= []).push(s); let d = Tn(e).get(t.index)?.resolvers; if (u)
    ms(e, t, a, d, c);
else {
    let f = setTimeout(() => ms(e, t, a, d, c), r), p = { target: a, animationComplete: () => { ms(e, t, a, d, c), clearTimeout(f); } };
    Yd(t, a), o.runOutsideAngular(() => { c.push(l.listen(a, "animationend", () => { ms(e, t, a, d, c), clearTimeout(f); }, { once: !0 })); }), n.call(e[U], p);
} return { promise: i, resolve: s }; }
function QI() { return g()[ee][U]; }
var nd = class {
    destroy(t) { }
    updateValue(t, n) { }
    swap(t, n) { let o = Math.min(t, n), r = Math.max(t, n), i = this.detach(r); if (r - o > 1) {
        let s = this.detach(o);
        this.attach(o, i), this.attach(r, s);
    }
    else
        this.attach(o, i); }
    move(t, n) { this.attach(n, this.detach(t)); }
};
function ou(e, t, n, o, r) { return e === n && Object.is(t, o) ? 1 : Object.is(r(e, t), r(n, o)) ? -1 : 0; }
function BR(e, t, n, o) { let r, i, s = 0, a = e.length - 1, c = void 0; if (Array.isArray(t)) {
    Kn(o);
    let l = t.length - 1;
    for (Kn(null); s <= a && s <= l;) {
        let u = e.at(s), d = t[s], f = ou(s, u, s, d, n);
        if (f !== 0) {
            f < 0 && e.updateValue(s, d), s++;
            continue;
        }
        let p = e.at(a), h = t[l], y = ou(a, p, l, h, n);
        if (y !== 0) {
            y < 0 && e.updateValue(a, h), a--, l--;
            continue;
        }
        let E = n(s, u), T = n(a, p), k = n(s, d);
        if (Object.is(k, T)) {
            let te = n(l, h);
            Object.is(te, E) ? (e.swap(s, a), e.updateValue(a, h), l--, a--) : e.move(a, s), e.updateValue(s, d), s++;
            continue;
        }
        if (r ??= new ea, i ??= qg(e, s, a, n), od(e, r, s, k))
            e.updateValue(s, d), s++, a++;
        else if (i.has(k))
            r.set(E, e.detach(s)), a--;
        else {
            let te = e.create(s, t[s]);
            e.attach(s, te), s++, a++;
        }
    }
    for (; s <= l;)
        Ug(e, r, n, s, t[s]), s++;
}
else if (t != null) {
    Kn(o);
    let l = t[Symbol.iterator]();
    Kn(null);
    let u = l.next();
    for (; !u.done && s <= a;) {
        let d = e.at(s), f = u.value, p = ou(s, d, s, f, n);
        if (p !== 0)
            p < 0 && e.updateValue(s, f), s++, u = l.next();
        else {
            r ??= new ea, i ??= qg(e, s, a, n);
            let h = n(s, f);
            if (od(e, r, s, h))
                e.updateValue(s, f), s++, a++, u = l.next();
            else if (!i.has(h))
                e.attach(s, e.create(s, f)), s++, a++, u = l.next();
            else {
                let y = n(s, d);
                r.set(y, e.detach(s)), a--;
            }
        }
    }
    for (; !u.done;)
        Ug(e, r, n, e.length, u.value), u = l.next();
} for (; s <= a;)
    e.destroy(e.detach(a--)); r?.forEach(l => { e.destroy(l); }); }
function od(e, t, n, o) { return t !== void 0 && t.has(o) ? (e.attach(n, t.get(o)), t.delete(o), !0) : !1; }
function Ug(e, t, n, o, r) { if (od(e, t, o, n(o, r)))
    e.updateValue(o, r);
else {
    let i = e.create(o, r);
    e.attach(o, i);
} }
function qg(e, t, n, o) { let r = new Set; for (let i = t; i <= n; i++)
    r.add(o(i, e.at(i))); return r; }
var ea = class {
    kvMap = new Map;
    _vMap = void 0;
    has(t) { return this.kvMap.has(t); }
    delete(t) { if (!this.has(t))
        return !1; let n = this.kvMap.get(t); return this._vMap !== void 0 && this._vMap.has(n) ? (this.kvMap.set(t, this._vMap.get(n)), this._vMap.delete(n)) : this.kvMap.delete(t), !0; }
    get(t) { return this.kvMap.get(t); }
    set(t, n) { if (this.kvMap.has(t)) {
        let o = this.kvMap.get(t);
        this._vMap === void 0 && (this._vMap = new Map);
        let r = this._vMap;
        for (; r.has(o);)
            o = r.get(o);
        r.set(o, n);
    }
    else
        this.kvMap.set(t, n); }
    forEach(t) { for (let [n, o] of this.kvMap)
        if (t(o, n), this._vMap !== void 0) {
            let r = this._vMap;
            for (; r.has(o);)
                o = r.get(o), t(o, n);
        } }
};
function ZI(e, t, n, o, r, i, s, a) { J("NgControlFlow"); let c = g(), l = A(), u = ge(l.consts, i); return _n(c, l, e, t, n, o, r, u, 256, s, a), nc; }
function nc(e, t, n, o, r, i, s, a) { J("NgControlFlow"); let c = g(), l = A(), u = ge(l.consts, i); return _n(c, l, e, t, n, o, r, u, 512, s, a), nc; }
function YI(e, t) { J("NgControlFlow"); let n = g(), o = ve(), r = n[o] !== H ? n[o] : -1, i = r !== -1 ? ta(n, I + r) : void 0, s = 0; if (Y(n, o, e)) {
    let a = R(null);
    try {
        if (i !== void 0 && df(i, s), e !== -1) {
            let c = I + e, l = ta(n, c), u = ad(n[m], c), d = iE(l, u, n), f = xo(n, u, t, { dehydratedView: d });
            Po(l, f, s, Mn(u, d));
        }
    }
    finally {
        R(a);
    }
}
else if (i !== void 0) {
    let a = xv(i, s);
    a !== void 0 && (a[U] = t);
} }
var rd = class {
    lContainer;
    $implicit;
    $index;
    constructor(t, n, o) { this.lContainer = t, this.$implicit = n, this.$index = o; }
    get $count() { return this.lContainer.length - G; }
};
function KI(e) { return e; }
function JI(e, t) { return t; }
var id = class {
    hasEmptyBlock;
    trackByFn;
    liveCollection;
    constructor(t, n, o) { this.hasEmptyBlock = t, this.trackByFn = n, this.liveCollection = o; }
};
function XI(e, t, n, o, r, i, s, a, c, l, u, d, f) { J("NgControlFlow"); let p = g(), h = A(), y = c !== void 0, E = g(), T = a ? s.bind(E[ee][U]) : s, k = new id(y, T); E[I + e] = k, _n(p, h, e + 1, t, n, o, r, ge(h.consts, i), 256), y && _n(p, h, e + 2, c, l, u, d, ge(h.consts, f), 512); }
var sd = class extends nd {
    lContainer;
    hostLView;
    templateTNode;
    operationsCounter = void 0;
    needsIndexUpdate = !1;
    constructor(t, n, o) { super(), this.lContainer = t, this.hostLView = n, this.templateTNode = o; }
    get length() { return this.lContainer.length - G; }
    at(t) { return this.getLView(t)[U].$implicit; }
    attach(t, n) { let o = n[ue]; this.needsIndexUpdate ||= t !== this.length, Po(this.lContainer, n, t, Mn(this.templateTNode, o)), $R(this.lContainer, t); }
    detach(t) { return this.needsIndexUpdate ||= t !== this.length - 1, UR(this.lContainer, t), qR(this.lContainer, t); }
    create(t, n) { let o = $r(this.lContainer, this.templateTNode.tView.ssrId); return xo(this.hostLView, this.templateTNode, new rd(this.lContainer, n, t), { dehydratedView: o }); }
    destroy(t) { di(t[m], t); }
    updateValue(t, n) { this.getLView(t)[U].$implicit = n; }
    reset() { this.needsIndexUpdate = !1; }
    updateIndexes() { if (this.needsIndexUpdate)
        for (let t = 0; t < this.length; t++)
            this.getLView(t)[U].$index = t; }
    getLView(t) { return GR(this.lContainer, t); }
};
function eD(e) { let t = R(null), n = de(); try {
    let o = g(), r = o[m], i = o[n], s = n + 1, a = ta(o, s);
    if (i.liveCollection === void 0) {
        let l = ad(r, s);
        i.liveCollection = new sd(a, o, l);
    }
    else
        i.liveCollection.reset();
    let c = i.liveCollection;
    if (BR(c, e, i.trackByFn, t), c.updateIndexes(), i.hasEmptyBlock) {
        let l = ve(), u = c.length === 0;
        if (Y(o, l, u)) {
            let d = n + 2, f = ta(o, d);
            if (u) {
                let p = ad(r, d), h = iE(f, p, o), y = xo(o, p, void 0, { dehydratedView: h });
                Po(f, y, 0, Mn(p, h));
            }
            else
                r.firstUpdatePass && Ga(f), df(f, 0);
        }
    }
}
finally {
    R(t);
} }
function ta(e, t) { return e[t]; }
function $R(e, t) { if (e.length <= G)
    return; let n = G + t, o = e[n], r = o ? o[it] : void 0; if (o && r && r.detachedLeaveAnimationFns && r.detachedLeaveAnimationFns.length > 0) {
    let i = o[L];
    aS(i, r), Cn.delete(o[Ve]), r.detachedLeaveAnimationFns = void 0;
} }
function UR(e, t) { if (e.length <= G)
    return; let n = G + t, o = e[n], r = o ? o[it] : void 0; r && r.leave && r.leave.size > 0 && (r.detachedLeaveAnimationFns = []); }
function qR(e, t) { return Vr(e, t); }
function GR(e, t) { return xv(e, t); }
function ad(e, t) { return Vt(e, t); }
function Qf(e, t, n) { let o = g(), r = ve(); if (Y(o, r, t)) {
    let i = A(), s = ke();
    af(s, o, e, t, o[w], n);
} return Qf; }
function cd(e, t, n, o, r) { ja(t, e, n, r ? "class" : "style", o); }
function Qr(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? yf(s, r, 2, t, lf, ns(), n, o) : i.data[s]; if (De(a)) {
    let c = r[je].tracingService;
    if (c && c.componentCreate) {
        let l = i.data[a.directiveStart + a.componentOffset];
        return c.componentCreate(If(l), () => (Gg(e, t, r, a, o), Qr));
    }
} return Gg(e, t, r, a, o), Qr; }
function Gg(e, t, n, o, r) { if (La(o, n, e, t, Kf), Un(o)) {
    let i = n[m];
    xa(i, n, o), Pd(i, o, n);
} r != null && Oo(n, o); }
function oc() { let e = A(), t = _(), n = Fa(t); return e.firstCreatePass && vf(e, n), ml(n) && El(), gl(), n.classesWithoutHost != null && AN(n) && cd(e, n, g(), n.classesWithoutHost, !0), n.stylesWithoutHost != null && RN(n) && cd(e, n, g(), n.stylesWithoutHost, !1), oc; }
function Zf(e, t, n, o) { return Qr(e, t, n, o), oc(), Zf; }
function rc(e, t, n, o) { let r = g(), i = r[m], s = e + I, a = i.firstCreatePass ? fE(s, i, 2, t, n, o) : i.data[s]; return La(a, r, e, t, Kf), o != null && Oo(r, a), rc; }
function ic() { let e = _(), t = Fa(e); return ml(t) && El(), gl(), ic; }
function Yf(e, t, n, o) { return rc(e, t, n, o), ic(), Yf; }
var Kf = (e, t, n, o, r) => (Je(!0), Ca(t[w], o, xl()));
function WR(e, t, n, o, r) { let i = !Da(t, n); if (Je(i), i)
    return Ca(t[w], o, xl()); let s = t[ue], a = pi(s, e, t, n); return yy(s, r) && Ea(s, r, a.nextSibling), s && (vd(n) || Vm(a)) && De(n) && (Lh(n), Vy(a)), a; }
function tD() { Kf = WR; }
function sc(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? yf(i, o, 8, "ng-container", lf, ns(), t, n) : r.data[i]; if (La(s, o, e, "ng-container", tp), Un(s)) {
    let a = o[m];
    xa(a, o, s), Pd(a, s, o);
} return n != null && Oo(o, s), sc; }
function Ei() { let e = A(), t = _(), n = Fa(t); return e.firstCreatePass && vf(e, n), Ei; }
function Jf(e, t, n) { return sc(e, t, n), Ei(), Jf; }
function ac(e, t, n) { let o = g(), r = o[m], i = e + I, s = r.firstCreatePass ? fE(i, r, 8, "ng-container", t, n) : r.data[i]; return La(s, o, e, "ng-container", tp), n != null && Oo(o, s), ac; }
function Xf() { let e = _(), t = Fa(e); return Ei; }
function ep(e, t, n) { return ac(e, t, n), Xf(), ep; }
var tp = (e, t, n, o, r) => (Je(!0), Vd(t[w], ""));
function zR(e, t, n, o, r) { let i, s = !Da(t, n); if (Je(s), s)
    return Vd(t[w], ""); let a = t[ue], c = pi(a, e, t, n), l = my(a, r); return Ea(a, r, c), i = Ua(l, c), i; }
function nD() { tp = zR; }
function oD() { return g(); }
function np(e, t, n) { let o = g(), r = ve(); if (Y(o, r, t)) {
    let i = A(), s = ke();
    cf(s, o, e, t, o[w], n);
} return np; }
function op(e, t, n) { let o = g(), r = ve(); if (Y(o, r, t)) {
    let i = A(), s = ke(), a = rs(i.data), c = Cv(a, s, o);
    cf(s, o, e, t, c, n);
} return op; }
var Er = void 0;
function QR(e) { let t = Math.floor(Math.abs(e)), n = e.toString().replace(/^[^.]*\.?/, "").length; return t === 1 && n === 0 ? 1 : 5; }
var ZR = ["en", [["a", "p"], ["AM", "PM"]], [["AM", "PM"]], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], Er, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], Er, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm\u202Fa", "h:mm:ss\u202Fa", "h:mm:ss\u202Fa z", "h:mm:ss\u202Fa zzzz"], ["{1}, {0}", Er, Er, Er], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", QR], lo = {};
function YR(e, t, n) { typeof t != "string" && (n = t, t = e[Eo.LocaleId]), t = t.toLowerCase().replace(/_/g, "-"), lo[t] = e, n && (lo[t][Eo.ExtraData] = n); }
function rp(e) { let t = XR(e), n = Wg(t); if (n)
    return n; let o = t.split("-")[0]; if (n = Wg(o), n)
    return n; if (o === "en")
    return ZR; throw new D(701, !1); }
function KR(e) { return rp(e)[Eo.CurrencyCode] || null; }
function rD(e) { return rp(e)[Eo.PluralCase]; }
function Wg(e) { return e in lo || (lo[e] = Se.ng && Se.ng.common && Se.ng.common.locales && Se.ng.common.locales[e]), lo[e]; }
function JR() { lo = {}; }
var Eo = (function (e) { return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e; })(Eo || {});
function XR(e) { return e.toLowerCase().replace(/_/g, "-"); }
var ek = ["zero", "one", "two", "few", "many"];
function tk(e, t) { let n = rD(t)(parseInt(e, 10)), o = ek[n]; return o !== void 0 ? o : "other"; }
var Ii = "en-US", nk = "USD", iD = { marker: "element" }, sD = { marker: "ICU" }, Dt = (function (e) { return e[e.SHIFT = 2] = "SHIFT", e[e.APPEND_EAGERLY = 1] = "APPEND_EAGERLY", e[e.COMMENT = 2] = "COMMENT", e; })(Dt || {}), aD = Ii;
function cD(e) { typeof e == "string" && (aD = e.toLowerCase().replace(/_/g, "-")); }
function ok() { return aD; }
var Zr = 0, br = 0;
function rk(e) { e && (Zr = Zr | 1 << Math.min(br, 31)), br++; }
function ik(e, t, n) { try {
    if (br > 0) {
        let o = e.data[n], r = Array.isArray(o) ? o : o.update, i = lt() - br - 1;
        fD(e, t, r, i, Zr);
    }
}
finally {
    Zr = 0, br = 0;
} }
function lD(e, t, n) { let o = e[w]; switch (n) {
    case Node.COMMENT_NODE: return Vd(o, t);
    case Node.TEXT_NODE: return jd(o, t);
    case Node.ELEMENT_NODE: return Ca(o, t, null);
} }
var Ar = (e, t, n, o) => (Je(!0), lD(e, n, o));
function sk(e, t, n, o) { let r = e[ue], i = t - I, s = !qa() || !r || hr() || Ia(r, i); return Je(s), s ? lD(e, n, o) : Uv(r, i); }
function uD() { Ar = sk; }
function ak(e, t, n, o) { let r = e[w]; for (let i = 0; i < t.length; i++) {
    let s = t[i++], a = t[i], c = (s & Dt.COMMENT) === Dt.COMMENT, l = (s & Dt.APPEND_EAGERLY) === Dt.APPEND_EAGERLY, u = s >>> Dt.SHIFT, d = e[u], f = !1;
    d === null && (d = e[u] = Ar(e, u, a, c ? Node.COMMENT_NODE : Node.TEXT_NODE), f = mr()), l && n !== null && f && Dn(r, n, d, o, !1);
} }
function dD(e, t, n, o) { let r = n[w], i = null, s; for (let a = 0; a < t.length; a++) {
    let c = t[a];
    if (typeof c == "string") {
        let l = t[++a];
        n[l] === null && (n[l] = Ar(n, l, c, Node.TEXT_NODE));
    }
    else if (typeof c == "number")
        switch (c & 1) {
            case 0:
                let l = ub(c);
                i === null && (i = l, s = r.parentNode(o));
                let u, d;
                if (l === i ? (u = o, d = s) : (u = null, d = O(n[l])), d !== null) {
                    let y = db(c), E = n[y];
                    Dn(r, d, E, u, !1);
                    let T = Cr(e, y);
                    if (T !== null && typeof T == "object") {
                        let k = $a(T, n);
                        k !== null && dD(e, T.create[k], n, n[T.anchorIdx]);
                    }
                }
                break;
            case 1:
                let f = c >>> 1, p = t[++a], h = t[++a];
                Pa(r, fn(f, n), null, null, p, h, null);
                break;
            default:
        }
    else
        switch (c) {
            case sD:
                let l = t[++a], u = t[++a];
                if (n[u] === null) {
                    let p = n[u] = Ar(n, u, l, Node.COMMENT_NODE);
                    $e(p, n);
                }
                break;
            case iD:
                let d = t[++a], f = t[++a];
                if (n[f] === null) {
                    let p = n[f] = Ar(n, f, d, Node.ELEMENT_NODE);
                    $e(p, n);
                }
                break;
            default:
        }
} }
function fD(e, t, n, o, r) { for (let i = 0; i < n.length; i++) {
    let s = n[i], a = n[++i];
    if (s & r) {
        let c = "";
        for (let l = i + 1; l <= i + a; l++) {
            let u = n[l];
            if (typeof u == "string")
                c += u;
            else if (typeof u == "number")
                if (u < 0)
                    c += b(t[o - u]);
                else {
                    let d = u >>> 2;
                    switch (u & 3) {
                        case 1:
                            let f = n[++l], p = n[++l], h = e.data[d];
                            typeof h == "string" ? Pa(t[w], t[d], null, h, f, c, p) : af(h, t, f, c, t[w], p);
                            break;
                        case 0:
                            let y = t[d];
                            y !== null && Fy(t[w], y, c);
                            break;
                        case 2:
                            ck(e, Cr(e, d), t, c);
                            break;
                        case 3:
                            zg(e, Cr(e, d), o, t);
                            break;
                    }
                }
        }
    }
    else {
        let c = n[i + 1];
        if (c > 0 && (c & 3) === 3) {
            let l = c >>> 2, u = Cr(e, l);
            t[u.currentCaseLViewIndex] < 0 && zg(e, u, o, t);
        }
    }
    i += a;
} }
function zg(e, t, n, o) { let r = o[t.currentCaseLViewIndex]; if (r !== null) {
    let i = Zr;
    r < 0 && (r = o[t.currentCaseLViewIndex] = ~r, i = -1), fD(e, o, t.update[r], n, i);
} }
function ck(e, t, n, o) { let r = lk(t, o); if ($a(t, n) !== r && (pD(e, t, n), n[t.currentCaseLViewIndex] = r === null ? null : ~r, r !== null)) {
    let s = n[t.anchorIdx];
    s && dD(e, t.create[r], n, s), bb(n, t.anchorIdx, r);
} }
function pD(e, t, n) { let o = $a(t, n); if (o !== null) {
    let r = t.remove[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i];
        if (s > 0) {
            let a = fn(s, n);
            a !== null && ci(n[w], a);
        }
        else
            pD(e, Cr(e, ~s), n);
    }
} }
function lk(e, t) { let n = e.cases.indexOf(t); if (n === -1)
    switch (e.type) {
        case 1: {
            let o = tk(t, ok());
            n = e.cases.indexOf(o), n === -1 && o !== "other" && (n = e.cases.indexOf("other"));
            break;
        }
        case 0: {
            n = e.cases.indexOf("other");
            break;
        }
    } return n === -1 ? null : n; }
var na = /�(\d+):?\d*�/gi, uk = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi, dk = /�(\d+)�/, hD = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/, Rr = "\uFFFD", fk = /�\/?\*(\d+:\d+)�/gi, pk = /�(\/?[#*]\d+):?\d*�/gi, hk = /\uE500/g;
function gk(e) { return e.replace(hk, " "); }
function mk(e, t, n, o, r, i) { let s = Gn(), a = [], c = [], l = [[]], u = [[]]; r = Ik(r, i); let d = gk(r).split(pk); for (let f = 0; f < d.length; f++) {
    let p = d[f];
    if ((f & 1) === 0) {
        let h = ld(p);
        for (let y = 0; y < h.length; y++) {
            let E = h[y];
            if ((y & 1) === 0) {
                let T = E;
                T !== "" && yk(u[0], e, s, l[0], a, c, n, T);
            }
            else {
                let T = E;
                if (typeof T != "object")
                    throw new Error(`Unable to parse ICU expression in "${r}" message.`);
                let te = gD(e, s, l[0], n, a, "", !0).index;
                yD(u[0], e, n, c, t, T, te);
            }
        }
    }
    else {
        let h = p.charCodeAt(0) === 47, y = p.charCodeAt(h ? 1 : 0), E = I + Number.parseInt(p.substring(h ? 2 : 1));
        if (h)
            l.shift(), u.shift(), ct(Gn(), !1);
        else {
            let T = lb(e, l[0], E);
            l.unshift([]), ct(T, !0);
            let k = { kind: 2, index: E, children: [], type: y === 35 ? 0 : 1 };
            u[0].push(k), u.unshift(k.children);
        }
    }
} e.data[o] = { create: a, update: c, ast: u[0], parentTNodeIndex: t }; }
function gD(e, t, n, o, r, i, s) { let a = ui(e, o, 1, null), c = a << Dt.SHIFT, l = Gn(); t === l && (l = null), l === null && (c |= Dt.APPEND_EAGERLY), s && (c |= Dt.COMMENT, Q_(pb)), r.push(c, i === null ? "" : i); let u = ff(e, a, s ? 32 : 1, i === null ? "" : i, null); Vv(n, u); let d = u.index; return ct(u, !1), l !== null && t !== l && cb(l, d), u; }
function yk(e, t, n, o, r, i, s, a) { let c = a.match(na), u = gD(t, n, o, s, r, c ? null : a, !1).index; c && oa(i, a, u, null, 0, null), e.push({ kind: 0, index: u }); }
function vk(e, t, n) { let r = _().index, i = []; if (e.firstCreatePass && e.data[t] === null) {
    for (let s = 0; s < n.length; s += 2) {
        let a = n[s], c = n[s + 1];
        if (c !== "") {
            if (uk.test(c))
                throw new Error(`ICU expressions are not supported in attributes. Message: "${c}".`);
            oa(i, c, r, a, Ek(i), ED(a));
        }
    }
    e.data[t] = i;
} }
function oa(e, t, n, o, r, i) { let s = e.length, a = s + 1; e.push(null, null); let c = s + 2, l = t.split(na), u = 0; for (let d = 0; d < l.length; d++) {
    let f = l[d];
    if (d & 1) {
        let p = r + parseInt(f, 10);
        e.push(-1 - p), u = u | mD(p);
    }
    else
        f !== "" && e.push(f);
} return e.push(n << 2 | (o ? 1 : 0)), o && e.push(o, i), e[s] = u, e[a] = e.length - c, u; }
function Ek(e) { let t = 0; for (let n = 0; n < e.length; n++) {
    let o = e[n];
    typeof o == "number" && o < 0 && t++;
} return t; }
function mD(e) { return 1 << Math.min(e, 31); }
function Qg(e) { let t, n = "", o = 0, r = !1, i; for (; (t = fk.exec(e)) !== null;)
    r ? t[0] === `${Rr}/*${i}${Rr}` && (o = t.index, r = !1) : (n += e.substring(o, t.index + t[0].length), i = t[1], r = !0); return n += e.slice(o), n; }
function Ik(e, t) { if (Bv(t))
    return Qg(e); {
    let n = e.indexOf(`:${t}${Rr}`) + 2 + t.toString().length, o = e.search(new RegExp(`${Rr}\\/\\*\\d+:${t}${Rr}`));
    return Qg(e.substring(n, o));
} }
function yD(e, t, n, o, r, i, s) { let a = 0, c = { type: i.type, currentCaseLViewIndex: ui(t, n, 1, null), anchorIdx: s, cases: [], create: [], remove: [], update: [] }; Mk(o, i, s), ab(t, s, c); let l = i.values, u = []; for (let d = 0; d < l.length; d++) {
    let f = l[d], p = [];
    for (let y = 0; y < f.length; y++) {
        let E = f[y];
        if (typeof E != "string") {
            let T = p.push(E) - 1;
            f[y] = `<!--\uFFFD${T}\uFFFD-->`;
        }
    }
    let h = [];
    u.push(h), a = Tk(h, t, c, n, o, r, i.cases[d], f.join(""), p) | a;
} a && Nk(o, a, s), e.push({ kind: 3, index: s, cases: u, currentCaseLViewIndex: c.currentCaseLViewIndex }); }
function Dk(e) { let t = [], n = [], o = 1, r = 0; e = e.replace(hD, function (s, a, c) { return c === "select" ? o = 0 : o = 1, r = parseInt(a.slice(1), 10), ""; }); let i = ld(e); for (let s = 0; s < i.length;) {
    let a = i[s++].trim();
    o === 1 && (a = a.replace(/\s*(?:=)?(\w+)\s*/, "$1")), a.length && t.push(a);
    let c = ld(i[s++]);
    t.length > n.length && n.push(c);
} return { type: o, mainBinding: r, cases: t, values: n }; }
function ld(e) { if (!e)
    return []; let t = 0, n = [], o = [], r = /[{}]/g; r.lastIndex = 0; let i; for (; i = r.exec(e);) {
    let a = i.index;
    if (i[0] == "}") {
        if (n.pop(), n.length == 0) {
            let c = e.substring(t, a);
            hD.test(c) ? o.push(Dk(c)) : o.push(c), t = a + 1;
        }
    }
    else {
        if (n.length == 0) {
            let c = e.substring(t, a);
            o.push(c), t = a + 1;
        }
        n.push("{");
    }
} let s = e.substring(t); return o.push(s), o; }
function Tk(e, t, n, o, r, i, s, a, c) { let l = [], u = [], d = []; n.cases.push(s), n.create.push(l), n.remove.push(u), n.update.push(d); let p = Ay(da()).getInertBodyElement(a), h = Ou(p) || p; return h ? vD(e, t, n, o, r, l, u, d, h, i, c, 0) : 0; }
function vD(e, t, n, o, r, i, s, a, c, l, u, d) { let f = 0, p = c.firstChild; for (; p;) {
    let h = ui(t, o, 1, null);
    switch (p.nodeType) {
        case Node.ELEMENT_NODE:
            let y = p, E = y.tagName.toLowerCase();
            if (Au.hasOwnProperty(E)) {
                ru(i, iD, E, l, h), t.data[h] = E;
                let We = y.attributes;
                for (let ht = 0; ht < We.length; ht++) {
                    let Xt = We.item(ht), _i = Xt.name.toLowerCase();
                    !!Xt.value.match(na) ? Ru.hasOwnProperty(_i) && oa(a, Xt.value, h, Xt.name, 0, ED(_i)) : Ru[_i] && (xy[_i] ? Yg(i, h, Xt.name, "unsafe:blocked") : Yg(i, h, Xt.name, Xt.value));
                }
                let Oe = { kind: 1, index: h, children: [] };
                e.push(Oe), f = vD(Oe.children, t, n, o, r, i, s, a, p, h, u, d + 1) | f, Zg(s, h, d);
            }
            break;
        case Node.TEXT_NODE:
            let T = p.textContent || "", k = T.match(na);
            ru(i, null, k ? "" : T, l, h), Zg(s, h, d), k && (f = oa(a, T, h, null, 0, null) | f), e.push({ kind: 0, index: h });
            break;
        case Node.COMMENT_NODE:
            let te = dk.exec(p.textContent || "");
            if (te) {
                let We = parseInt(te[1], 10), Oe = u[We];
                ru(i, sD, "", l, h), yD(e, t, o, r, l, Oe, h), Ck(s, h, d);
            }
            break;
    }
    p = p.nextSibling;
} return f; }
function Zg(e, t, n) { n === 0 && e.push(t); }
function Ck(e, t, n) { n === 0 && (e.push(~t), e.push(t)); }
function Mk(e, t, n) { e.push(mD(t.mainBinding), 2, -1 - t.mainBinding, n << 2 | 2); }
function Nk(e, t, n) { e.push(t, 1, n << 2 | 3); }
function ru(e, t, n, o, r) { t !== null && e.push(t), e.push(n, r, fb(0, o, r)); }
function Yg(e, t, n, o) { e.push(t << 1 | 1, n, o); }
var wk = new Set(Object.values(zy).flatMap(e => e ? Object.keys(e) : []));
function ED(e) { let t = e.toLowerCase(); return xy[t] ? Ta : wk.has(t) ? $d : null; }
var Kg = 0, _k = /\[(�.+?�?)\]/, Sk = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g, bk = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g, Ak = /{([A-Z0-9_]+)}/g, Rk = /�I18N_EXP_(ICU(_\d+)?)�/g, kk = /\/\*/, Ok = /\d+\:(\d+)/;
function xk(e, t = {}) { let n = e; if (_k.test(e)) {
    let o = {}, r = [Kg];
    n = n.replace(Sk, (i, s, a) => { let c = s || a, l = o[c] || []; if (l.length || (c.split("|").forEach(y => { let E = y.match(Ok), T = E ? parseInt(E[1], 10) : Kg, k = kk.test(y); l.push([T, k, y]); }), o[c] = l), !l.length)
        throw new Error(`i18n postprocess: unmatched placeholder - ${c}`); let u = r[r.length - 1], d = 0; for (let y = 0; y < l.length; y++)
        if (l[y][0] === u) {
            d = y;
            break;
        } let [f, p, h] = l[d]; return p ? r.pop() : u !== f && r.push(f), l.splice(d, 1), h; });
} return Object.keys(t).length && (n = n.replace(bk, (o, r, i, s, a, c) => t.hasOwnProperty(i) ? `${r}${t[i]}${c}` : o), n = n.replace(Ak, (o, r) => t.hasOwnProperty(r) ? t[r] : o), n = n.replace(Rk, (o, r) => { if (t.hasOwnProperty(r)) {
    let i = t[r];
    if (!i.length)
        throw new Error(`i18n postprocess: unmatched ICU - ${o} with key: ${r}`);
    return i.shift();
} return o; })), n; }
function ip(e, t, n = -1) { let o = A(), r = g(), i = I + e, s = ge(o.consts, t), a = Gn(); if (o.firstCreatePass && mk(o, a === null ? 0 : a.index, r, i, s, n), o.type === 2) {
    let f = r[ee];
    f[N] |= 32;
}
else
    r[N] |= 32; let c = o.data[i], l = a === r[le] ? null : a, u = fv(o, l, r), d = a && a.type & 8 ? r[a.index] : null; Cb(r, i, a, n), ak(r, c.create, u, d), Sl(!0); }
function sp() { Sl(!1); }
function ID(e, t, n) { ip(e, t, n), sp(); }
function DD(e, t) { let n = A(), o = ge(n.consts, t); vk(n, e + I, o); }
function ap(e) { let t = g(); return rk(Y(t, ve(), e)), ap; }
function TD(e) { ik(A(), g(), e + I); }
function CD(e, t = {}) { return xk(e, t); }
function cp(e, t, n) { let o = g(), r = A(), i = _(); return dp(r, o, o[w], i, e, t, n), cp; }
function lp(e, t) { let n = _(), o = g(), r = A(), i = rs(r.data), s = Cv(i, n, o); return dp(r, o, s, n, e, t), lp; }
function up(e, t, n) { let o = g(), r = A(), i = _(); return (i.type & 3 || n) && Ef(i, r, o, n, o[w], e, t, Qt(i, o, t)), up; }
function dp(e, t, n, o, r, i, s) { let a = !0, c = null; if ((o.type & 3 || s) && (c ??= Qt(o, t, i), Ef(o, e, t, s, n, r, i, c) && (a = !1)), a) {
    let l = o.outputs?.[r], u = o.hostDirectiveOutputs?.[r];
    if (u && u.length)
        for (let d = 0; d < u.length; d += 2) {
            let f = u[d], p = u[d + 1];
            c ??= Qt(o, t, i), go(o, t, f, p, r, c);
        }
    if (l && l.length)
        for (let d of l)
            c ??= Qt(o, t, i), go(o, t, d, r, r, c);
} }
function MD(e = 1) { return Uh(e); }
function Pk(e, t) { let n = null, o = V_(e); for (let r = 0; r < t.length; r++) {
    let i = t[r];
    if (i === "*") {
        n = r;
        continue;
    }
    if (o === null ? Ky(e, i, !0) : $_(o, i))
        return r;
} return n; }
function ND(e) { let t = g()[ee][le]; if (!t.projection) {
    let n = e ? e.length : 1, o = t.projection = ar(n, null), r = o.slice(), i = t.child;
    for (; i !== null;) {
        if (i.type !== 128) {
            let s = e ? Pk(i, e) : 0;
            s !== null && (r[s] ? r[s].projectionNext = i : o[s] = i, r[s] = i);
        }
        i = i.next;
    }
} }
function wD(e, t = 0, n, o, r, i) { let s = g(), a = A(), c = o ? e + 1 : null; c !== null && _n(s, a, c, o, r, i, null, n); let l = Pn(a, I + e, 16, null, n || null); l.projection === null && (l.projection = t), Ml(); let d = !s[ue] || hr(); s[ee][le].projection[l.projection] === null && c !== null ? Lk(s, a, c) : d && !bo(l) && hS(a, s, l); }
function Lk(e, t, n) { let o = I + n, r = t.data[o], i = e[o], s = $r(i, r.tView.ssrId), a = xo(e, r, void 0, { dehydratedView: s }); Po(i, a, 0, Mn(r, s)); }
function fp(e, t, n, o) { return kE(e, t, n, o), fp; }
function pp(e, t, n) { return RE(e, t, n), pp; }
function _D(e) { let t = g(), n = A(), o = is(); gr(o + 1); let r = Cf(n, o); if (e.dirty && Rh(t) === ((r.metadata.flags & 2) === 2)) {
    if (r.matches === null)
        e.reset([]);
    else {
        let i = xE(t, o);
        e.reset(i, jm), e.notifyOnChanges();
    }
    return !0;
} return !1; }
function SD() { return Tf(g(), is()); }
function hp(e, t, n, o, r) { return PE(t, kE(e, n, o, r)), hp; }
function gp(e, t, n, o) { return PE(e, RE(t, n, o)), gp; }
function bD(e = 1) { gr(is() + e); }
function AD(e) { let t = Nl(); return Ht(t, I + e); }
function Es(e, t) { return e << 17 | t << 2; }
function Sn(e) { return e >> 17 & 32767; }
function Fk(e) { return (e & 2) == 2; }
function jk(e, t) { return e & 131071 | t << 17; }
function ud(e) { return e | 2; }
function Io(e) { return (e & 131068) >> 2; }
function iu(e, t) { return e & -131069 | t << 2; }
function Vk(e) { return (e & 1) === 1; }
function dd(e) { return e | 1; }
function Hk(e, t, n, o, r, i) { let s = i ? t.classBindings : t.styleBindings, a = Sn(s), c = Io(s); e[o] = n; let l = !1, u; if (Array.isArray(n)) {
    let d = n;
    u = d[1], (u === null || Bn(d, u) > 0) && (l = !0);
}
else
    u = n; if (r)
    if (c !== 0) {
        let f = Sn(e[a + 1]);
        e[o + 1] = Es(f, a), f !== 0 && (e[f + 1] = iu(e[f + 1], o)), e[a + 1] = jk(e[a + 1], o);
    }
    else
        e[o + 1] = Es(a, 0), a !== 0 && (e[a + 1] = iu(e[a + 1], o)), a = o;
else
    e[o + 1] = Es(c, 0), a === 0 ? a = o : e[c + 1] = iu(e[c + 1], o), c = o; l && (e[o + 1] = ud(e[o + 1])), Jg(e, u, o, !0), Jg(e, u, o, !1), Bk(t, u, e, o, i), s = Es(a, c), i ? t.classBindings = s : t.styleBindings = s; }
function Bk(e, t, n, o, r) { let i = r ? e.residualClasses : e.residualStyles; i != null && typeof t == "string" && Bn(i, t) >= 0 && (n[o + 1] = dd(n[o + 1])); }
function Jg(e, t, n, o) { let r = e[n + 1], i = t === null, s = o ? Sn(r) : Io(r), a = !1; for (; s !== 0 && (a === !1 || i);) {
    let c = e[s], l = e[s + 1];
    $k(c, t) && (a = !0, e[s + 1] = o ? dd(l) : ud(l)), s = o ? Sn(l) : Io(l);
} a && (e[n + 1] = o ? ud(r) : dd(r)); }
function $k(e, t) { return e === null || t == null || (Array.isArray(e) ? e[1] : e) === t ? !0 : Array.isArray(e) && typeof t == "string" ? Bn(e, t) >= 0 : !1; }
var se = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
function RD(e) { return e.substring(se.key, se.keyEnd); }
function Uk(e) { return e.substring(se.value, se.valueEnd); }
function qk(e) { return xD(e), kD(e, Do(e, 0, se.textEnd)); }
function kD(e, t) { let n = se.textEnd; return n === t ? -1 : (t = se.keyEnd = Wk(e, se.key = t, n), Do(e, t, n)); }
function Gk(e) { return xD(e), OD(e, Do(e, 0, se.textEnd)); }
function OD(e, t) { let n = se.textEnd, o = se.key = Do(e, t, n); return n === o ? -1 : (o = se.keyEnd = zk(e, o, n), o = Xg(e, o, n, 58), o = se.value = Do(e, o, n), o = se.valueEnd = Qk(e, o, n), Xg(e, o, n, 59)); }
function xD(e) { se.key = 0, se.keyEnd = 0, se.value = 0, se.valueEnd = 0, se.textEnd = e.length; }
function Do(e, t, n) { for (; t < n && e.charCodeAt(t) <= 32;)
    t++; return t; }
function Wk(e, t, n) { for (; t < n && e.charCodeAt(t) > 32;)
    t++; return t; }
function zk(e, t, n) { let o; for (; t < n && ((o = e.charCodeAt(t)) === 45 || o === 95 || (o & -33) >= 65 && (o & -33) <= 90 || o >= 48 && o <= 57);)
    t++; return t; }
function Xg(e, t, n, o) { return t = Do(e, t, n), t < n && t++, t; }
function Qk(e, t, n) { let o = -1, r = -1, i = -1, s = t, a = s; for (; s < n;) {
    let c = e.charCodeAt(s++);
    if (c === 59)
        return a;
    c === 34 || c === 39 ? a = s = em(e, c, s, n) : t === s - 4 && i === 85 && r === 82 && o === 76 && c === 40 ? a = s = em(e, 41, s, n) : c > 32 && (a = s), i = r, r = o, o = c & -33;
} return a; }
function em(e, t, n, o) { let r = -1, i = n; for (; i < o;) {
    let s = e.charCodeAt(i++);
    if (s == t && r !== 92)
        return i;
    s == 92 && r === 92 ? r = 0 : r = s;
} throw new Error; }
function mp(e, t, n) { return FD(e, t, n, !1), mp; }
function yp(e, t) { return FD(e, t, null, !0), yp; }
function PD(e) { jD(BD, Zk, e, !1); }
function Zk(e, t) { for (let n = Gk(t); n >= 0; n = OD(t, n))
    BD(e, RD(t), Uk(t)); }
function LD(e) { jD(nO, Yk, e, !0); }
function Yk(e, t) { for (let n = qk(t); n >= 0; n = kD(t, n))
    cr(e, RD(t), !0); }
function FD(e, t, n, o) { let r = g(), i = A(), s = ut(2); if (i.firstUpdatePass && HD(i, e, s, o), t !== H && Y(r, s, t)) {
    let a = i.data[de()];
    $D(i, a, r, r[w], e, r[s + 1] = rO(t, n), o, s);
} }
function jD(e, t, n, o) { let r = A(), i = ut(2); r.firstUpdatePass && HD(r, null, i, o); let s = g(); if (n !== H && Y(s, i, n)) {
    let a = r.data[de()];
    if (UD(a, o) && !VD(r, i)) {
        let c = o ? a.classesWithoutHost : a.stylesWithoutHost;
        c !== null && (n = Hi(c, n || "")), cd(r, a, s, n, o);
    }
    else
        oO(r, a, s, s[w], s[i + 1], s[i + 1] = tO(e, t, n), o, i);
} }
function VD(e, t) { return t >= e.expandoStartIndex; }
function HD(e, t, n, o) { let r = e.data; if (r[n + 1] === null) {
    let i = r[de()], s = VD(e, n);
    UD(i, o) && t === null && !s && (t = !1), t = Kk(r, i, t, o), Hk(r, i, t, n, s, o);
} }
function Kk(e, t, n, o) { let r = rs(e), i = o ? t.residualClasses : t.residualStyles; if (r === null)
    (o ? t.classBindings : t.styleBindings) === 0 && (n = su(null, e, t, n, o), n = Yr(n, t.attrs, o), i = null);
else {
    let s = t.directiveStylingLast;
    if (s === -1 || e[s] !== r)
        if (n = su(r, e, t, n, o), i === null) {
            let c = Jk(e, t, o);
            c !== void 0 && Array.isArray(c) && (c = su(null, e, t, c[1], o), c = Yr(c, t.attrs, o), Xk(e, t, o, c));
        }
        else
            i = eO(e, t, o);
} return i !== void 0 && (o ? t.residualClasses = i : t.residualStyles = i), n; }
function Jk(e, t, n) { let o = n ? t.classBindings : t.styleBindings; if (Io(o) !== 0)
    return e[Sn(o)]; }
function Xk(e, t, n, o) { let r = n ? t.classBindings : t.styleBindings; e[Sn(r)] = o; }
function eO(e, t, n) { let o, r = t.directiveEnd; for (let i = 1 + t.directiveStylingLast; i < r; i++) {
    let s = e[i].hostAttrs;
    o = Yr(o, s, n);
} return Yr(o, t.attrs, n); }
function su(e, t, n, o, r) { let i = null, s = n.directiveEnd, a = n.directiveStylingLast; for (a === -1 ? a = n.directiveStart : a++; a < s && (i = t[a], o = Yr(o, i.hostAttrs, r), i !== e);)
    a++; return e !== null && (n.directiveStylingLast = a), o; }
function Yr(e, t, n) { let o = n ? 1 : 2, r = -1; if (t !== null)
    for (let i = 0; i < t.length; i++) {
        let s = t[i];
        typeof s == "number" ? r = s : r === o && (Array.isArray(e) || (e = e === void 0 ? [] : ["", e]), cr(e, s, n ? !0 : t[++i]));
    } return e === void 0 ? null : e; }
function tO(e, t, n) { if (n == null || n === "")
    return F; let o = [], r = bt(n); if (Array.isArray(r))
    for (let i = 0; i < r.length; i++)
        e(o, r[i], !0);
else if (r instanceof Set)
    for (let i of r)
        e(o, i, !0);
else if (typeof r == "object")
    for (let i in r)
        r.hasOwnProperty(i) && e(o, i, r[i]);
else
    typeof r == "string" && t(o, r); return o; }
function BD(e, t, n) { cr(e, t, bt(n)); }
function nO(e, t, n) { let o = String(t); o !== "" && !o.includes(" ") && cr(e, o, n); }
function oO(e, t, n, o, r, i, s, a) { r === H && (r = F); let c = 0, l = 0, u = 0 < r.length ? r[0] : null, d = 0 < i.length ? i[0] : null; for (; u !== null || d !== null;) {
    let f = c < r.length ? r[c + 1] : void 0, p = l < i.length ? i[l + 1] : void 0, h = null, y;
    u === d ? (c += 2, l += 2, f !== p && (h = d, y = p)) : d === null || u !== null && u < d ? (c += 2, h = u) : (l += 2, h = d, y = p), h !== null && $D(e, t, n, o, h, y, s, a), u = c < r.length ? r[c] : null, d = l < i.length ? i[l] : null;
} }
function $D(e, t, n, o, r, i, s, a) { if (!(t.type & 3))
    return; let c = e.data, l = c[a + 1], u = Vk(l) ? tm(c, t, n, r, Io(l), s) : void 0; if (!ra(u)) {
    ra(i) || Fk(l) && (i = tm(c, null, n, r, a, s));
    let d = fn(de(), n);
    mS(o, s, d, r, i);
} }
function tm(e, t, n, o, r, i) { let s = t === null, a; for (; r > 0;) {
    let c = e[r], l = Array.isArray(c), u = l ? c[1] : c, d = u === null, f = n[r + 1];
    f === H && (f = d ? F : void 0);
    let p = d ? zi(f, o) : u === o ? f : void 0;
    if (l && !ra(p) && (p = zi(c, o)), ra(p) && (a = p, s))
        return a;
    let h = e[r + 1];
    r = s ? Sn(h) : Io(h);
} if (t !== null) {
    let c = i ? t.residualClasses : t.residualStyles;
    c != null && (a = zi(c, o));
} return a; }
function ra(e) { return e !== void 0; }
function rO(e, t) { return e == null || e === "" || (typeof t == "string" ? e = e + t : typeof e == "object" && (e = Jo(bt(e)))), e; }
function UD(e, t) { return (e.flags & (t ? 8 : 16)) !== 0; }
function qD(e, t = "") { let n = g(), o = A(), r = e + I, i = o.firstCreatePass ? Pn(o, r, 1, t, null) : o.data[r], s = GD(o, n, i, t); n[r] = s, mr() && rf(o, n, s, i), ct(i, !1); }
var GD = (e, t, n, o) => (Je(!0), jd(t[w], o));
function iO(e, t, n, o) { let r = !Da(t, n); if (Je(r), r)
    return jd(t[w], o); let i = t[ue]; return pi(i, e, t, n); }
function WD() { GD = iO; }
function zD(e, t) { let n = !1, o = lt(); for (let i = 1; i < t.length; i += 2)
    n = Y(e, o++, t[i]) || n; if (_l(o), !n)
    return H; let r = t[0]; for (let i = 1; i < t.length; i += 2)
    r += b(t[i]) + (i + 1 !== t.length ? t[i + 1] : ""); return r; }
function QD(e, t, n, o = "") { return Y(e, ve(), n) ? t + b(n) + o : H; }
function ZD(e, t, n, o, r, i = "") { let s = lt(), a = Nn(e, s, n, r); return ut(2), a ? t + b(n) + o + b(r) + i : H; }
function YD(e, t, n, o, r, i, s, a = "") { let c = lt(), l = Za(e, c, n, r, s); return ut(3), l ? t + b(n) + o + b(r) + i + b(s) + a : H; }
function KD(e, t, n, o, r, i, s, a, c, l = "") { let u = lt(), d = qe(e, u, n, r, s, c); return ut(4), d ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l : H; }
function JD(e, t, n, o, r, i, s, a, c, l, u, d = "") { let f = lt(), p = qe(e, f, n, r, s, c); return p = Y(e, f + 4, u) || p, ut(5), p ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d : H; }
function XD(e, t, n, o, r, i, s, a, c, l, u, d, f, p = "") { let h = lt(), y = qe(e, h, n, r, s, c); return y = Nn(e, h + 4, u, f) || y, ut(6), y ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p : H; }
function eT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y = "") { let E = lt(), T = qe(e, E, n, r, s, c); return T = Za(e, E + 4, u, f, h) || T, ut(7), T ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + y : H; }
function tT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E, T = "") { let k = lt(), te = qe(e, k, n, r, s, c); return te = qe(e, k + 4, u, f, h, E) || te, ut(8), te ? t + b(n) + o + b(r) + i + b(s) + a + b(c) + l + b(u) + d + b(f) + p + b(h) + y + b(E) + T : H; }
function vp(e) { return cc("", e), vp; }
function cc(e, t, n) { let o = g(), r = QD(o, e, t, n); return r !== H && kt(o, de(), r), cc; }
function Ep(e, t, n, o, r) { let i = g(), s = ZD(i, e, t, n, o, r); return s !== H && kt(i, de(), s), Ep; }
function Ip(e, t, n, o, r, i, s) { let a = g(), c = YD(a, e, t, n, o, r, i, s); return c !== H && kt(a, de(), c), Ip; }
function Dp(e, t, n, o, r, i, s, a, c) { let l = g(), u = KD(l, e, t, n, o, r, i, s, a, c); return u !== H && kt(l, de(), u), Dp; }
function Tp(e, t, n, o, r, i, s, a, c, l, u) { let d = g(), f = JD(d, e, t, n, o, r, i, s, a, c, l, u); return f !== H && kt(d, de(), f), Tp; }
function Cp(e, t, n, o, r, i, s, a, c, l, u, d, f) { let p = g(), h = XD(p, e, t, n, o, r, i, s, a, c, l, u, d, f); return h !== H && kt(p, de(), h), Cp; }
function Mp(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h) { let y = g(), E = eT(y, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); return E !== H && kt(y, de(), E), Mp; }
function Np(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E) { let T = g(), k = tT(T, e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E); return k !== H && kt(T, de(), k), Np; }
function wp(e) { let t = g(), n = zD(t, e); return n !== H && kt(t, de(), n), wp; }
function kt(e, t, n) { let o = fn(t, e); Fy(e[w], o, n); }
function _p(e, t, n) { Vf(t) && (t = t()); let o = g(), r = ve(); if (Y(o, r, t)) {
    let i = A(), s = ke();
    af(s, o, e, t, o[w], n);
} return _p; }
function nT(e, t) { let n = Vf(e); return n && e.set(t), n; }
function Sp(e, t) { let n = g(), o = A(), r = _(); return dp(o, n, n[w], r, e, t), Sp; }
var oT = {};
function bp(e) { J("NgLet"); let t = A(), n = g(), o = e + I, r = Pn(t, o, 128, null, null); return ct(r, !1), fr(t, n, o, oT), bp; }
function rT(e) { let t = A(), n = g(), o = de(); return fr(t, n, o, e), e; }
function iT(e) { let t = Nl(), n = Ht(t, I + e); if (n === oT)
    throw new D(314, !1); return n; }
function sT(e, t) { let n = A(), o = g(), r = o[w], i = "data-ng-source-location"; for (let [s, a, c, l] of t) {
    let u = Vt(n, s + I), d = fn(s + I, o);
    if (!d.hasAttribute(i)) {
        let f = `${e}@o:${a},l:${c},c:${l}`;
        r.setAttribute(d, i, f);
    }
} }
function aT(e) { return Y(g(), ve(), e) ? b(e) : H; }
function cT(e, t, n = "") { return QD(g(), e, t, n); }
function lT(e, t, n, o, r = "") { return ZD(g(), e, t, n, o, r); }
function uT(e, t, n, o, r, i, s = "") { return YD(g(), e, t, n, o, r, i, s); }
function dT(e, t, n, o, r, i, s, a, c = "") { return KD(g(), e, t, n, o, r, i, s, a, c); }
function fT(e, t, n, o, r, i, s, a, c, l, u = "") { return JD(g(), e, t, n, o, r, i, s, a, c, l, u); }
function pT(e, t, n, o, r, i, s, a, c, l, u, d, f = "") { return XD(g(), e, t, n, o, r, i, s, a, c, l, u, d, f); }
function hT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h = "") { return eT(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h); }
function gT(e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E = "") { return tT(g(), e, t, n, o, r, i, s, a, c, l, u, d, f, p, h, y, E); }
function mT(e) { return zD(g(), e); }
function yT(e, t, n) { let o = me() + e, r = g(); return r[o] === H ? et(r, o, t(n, r)) : jo(r, o); }
function nm(e, t, n) { let o = A(); o.firstCreatePass && vT(t, o.data, o.blueprint, He(e), n); }
function vT(e, t, n, o, r) { if (e = P(e), Array.isArray(e))
    for (let i = 0; i < e.length; i++)
        vT(e[i], t, n, o, r);
else {
    let i = A(), s = g(), a = _(), c = nn(e) ? e : P(e.provide), l = rl(e), u = a.providerIndexes & 1048575, d = a.directiveStart, f = a.providerIndexes >> 20;
    if (nn(e) || !e.multi) {
        let p = new In(l, r, Fo, null), h = cu(c, t, r ? u : u + f, d);
        h === -1 ? (hu(Ls(a, s), i, c), au(i, e, t.length), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(p), s.push(p)) : (n[h] = p, s[h] = p);
    }
    else {
        let p = cu(c, t, u + f, d), h = cu(c, t, u, u + f), y = p >= 0 && n[p], E = h >= 0 && n[h];
        if (r && !E || !r && !y) {
            hu(Ls(a, s), i, c);
            let T = cO(r ? aO : sO, n.length, r, o, l, e);
            !r && E && (n[h].providerFactory = T), au(i, e, t.length, 0), t.push(c), a.directiveStart++, a.directiveEnd++, r && (a.providerIndexes += 1048576), n.push(T), s.push(T);
        }
        else {
            let T = ET(n[r ? h : p], l, !r && o);
            au(i, e, p > -1 ? p : h, T);
        }
        !r && o && E && n[h].componentProviders++;
    }
} }
function au(e, t, n, o) { let r = nn(t), i = Sh(t); if (r || i) {
    let c = (i ? P(t.useClass) : t).prototype.ngOnDestroy;
    if (c) {
        let l = e.destroyHooks || (e.destroyHooks = []);
        if (!r && t.multi) {
            let u = l.indexOf(n);
            u === -1 ? l.push(n, [o, c]) : l[u + 1].push(o, c);
        }
        else
            l.push(n, c);
    }
} }
function ET(e, t, n) { return n && e.componentProviders++, e.multi.push(t) - 1; }
function cu(e, t, n, o) { for (let r = n; r < o; r++)
    if (t[r] === e)
        return r; return -1; }
function sO(e, t, n, o, r) { return fd(this.multi, []); }
function aO(e, t, n, o, r) { let i = this.multi, s; if (this.providerFactory) {
    let a = this.providerFactory.componentProviders, c = Or(o, o[m], this.providerFactory.index, r);
    s = c.slice(0, a), fd(i, s);
    for (let l = a; l < c.length; l++)
        s.push(c[l]);
}
else
    s = [], fd(i, s); return s; }
function fd(e, t) { for (let n = 0; n < e.length; n++) {
    let o = e[n];
    t.push(o());
} return t; }
function cO(e, t, n, o, r, i) { let s = new In(e, n, Fo, null); return s.multi = [], s.index = t, s.componentProviders = 0, ET(s, r, o && !n), s; }
function IT(e, t) { return n => { n.providersResolver = (o, r) => nm(o, r ? r(e) : e, !1), t && (n.viewProvidersResolver = (o, r) => nm(o, r ? r(t) : t, !0)); }; }
function DT(e) { return t => { e.length < 1 || (t.getExternalStyles = n => e.map(r => r + "?ngcomp" + (n ? "=" + encodeURIComponent(n) : "") + "&e=" + t.encapsulation)); }; }
function TT(e, t, n) { let o = e.\u0275cmp; o.directiveDefs = Js(t, qE), o.pipeDefs = Js(n, Qe); }
function CT(e, t) { return ft(() => { let n = $i(e); n.declarations = Is(t.declarations || F), n.imports = Is(t.imports || F), n.exports = Is(t.exports || F), t.bootstrap && (n.bootstrap = Is(t.bootstrap)), ho.registerNgModule(e, t); }); }
function Is(e) { if (typeof e == "function")
    return e; let t = Ze(e); return t.some(er) ? () => t.map(P).map(om) : t.map(om); }
function om(e) { return mf(e) ? e.ngModule : e; }
function MT(e, t) { let n = me() + e, o = g(); return o[n] === H ? et(o, n, t()) : jo(o, n); }
function NT(e, t, n) { return xT(g(), me(), e, t, n); }
function wT(e, t, n, o) { return PT(g(), me(), e, t, n, o); }
function _T(e, t, n, o, r) { return LT(g(), me(), e, t, n, o, r); }
function ST(e, t, n, o, r, i, s) { return FT(g(), me(), e, t, n, o, r, i); }
function bT(e, t, n, o, r, i, s) { let a = me() + e, c = g(), l = qe(c, a, n, o, r, i); return Y(c, a + 4, s) || l ? et(c, a + 5, t(n, o, r, i, s)) : jo(c, a + 5); }
function AT(e, t, n, o, r, i, s, a) { let c = me() + e, l = g(), u = qe(l, c, n, o, r, i); return Nn(l, c + 4, s, a) || u ? et(l, c + 6, t(n, o, r, i, s, a)) : jo(l, c + 6); }
function RT(e, t, n, o, r, i, s, a, c) { let l = me() + e, u = g(), d = qe(u, l, n, o, r, i); return Za(u, l + 4, s, a, c) || d ? et(u, l + 7, t(n, o, r, i, s, a, c)) : jo(u, l + 7); }
function kT(e, t, n, o, r, i, s, a, c, l) { let u = me() + e, d = g(), f = qe(d, u, n, o, r, i); return qe(d, u + 4, s, a, c, l) || f ? et(d, u + 8, t(n, o, r, i, s, a, c, l)) : jo(d, u + 8); }
function OT(e, t, n) { return jT(g(), me(), e, t, n); }
function Di(e, t) { let n = e[t]; return n === H ? void 0 : n; }
function xT(e, t, n, o, r, i) { let s = t + n; return Y(e, s, r) ? et(e, s + 1, i ? o.call(i, r) : o(r)) : Di(e, s + 1); }
function PT(e, t, n, o, r, i, s) { let a = t + n; return Nn(e, a, r, i) ? et(e, a + 2, s ? o.call(s, r, i) : o(r, i)) : Di(e, a + 2); }
function LT(e, t, n, o, r, i, s, a) { let c = t + n; return Za(e, c, r, i, s) ? et(e, c + 3, a ? o.call(a, r, i, s) : o(r, i, s)) : Di(e, c + 3); }
function FT(e, t, n, o, r, i, s, a, c) { let l = t + n; return qe(e, l, r, i, s, a) ? et(e, l + 4, c ? o.call(c, r, i, s, a) : o(r, i, s, a)) : Di(e, l + 4); }
function jT(e, t, n, o, r, i) { let s = t + n, a = !1; for (let c = 0; c < r.length; c++)
    Y(e, s++, r[c]) && (a = !0); return a ? et(e, s, o.apply(i, r)) : Di(e, s); }
function VT(e, t) { let n = A(), o, r = e + I; n.firstCreatePass ? (o = lO(t, n.pipeRegistry), n.data[r] = o, o.onDestroy && (n.destroyHooks ??= []).push(r, o.onDestroy)) : o = n.data[r]; let i = o.factory || (o.factory = xt(o.type, !0)), s, a = Ie(Fo); try {
    let c = Ps(!1), l = i();
    return Ps(c), fr(n, g(), r, l), l;
}
finally {
    Ie(a);
} }
function lO(e, t) { if (t)
    for (let n = t.length - 1; n >= 0; n--) {
        let o = t[n];
        if (e === o.name)
            return o;
    } }
function HT(e, t, n) { let o = e + I, r = g(), i = Ht(r, o); return Ti(r, o) ? xT(r, me(), t, i.transform, n, i) : i.transform(n); }
function BT(e, t, n, o) { let r = e + I, i = g(), s = Ht(i, r); return Ti(i, r) ? PT(i, me(), t, s.transform, n, o, s) : s.transform(n, o); }
function $T(e, t, n, o, r) { let i = e + I, s = g(), a = Ht(s, i); return Ti(s, i) ? LT(s, me(), t, a.transform, n, o, r, a) : a.transform(n, o, r); }
function UT(e, t, n, o, r, i) { let s = e + I, a = g(), c = Ht(a, s); return Ti(a, s) ? FT(a, me(), t, c.transform, n, o, r, i, c) : c.transform(n, o, r, i); }
function qT(e, t, n) { let o = e + I, r = g(), i = Ht(r, o); return Ti(r, o) ? jT(r, me(), t, i.transform, n, i) : i.transform.apply(i, n); }
function Ti(e, t) { return e[m].data[t].pure; }
function GT(e, t) { return Ba(e, t); }
function WT(e, t) { return () => { try {
    return ho.getComponentDependencies(e, t).dependencies;
}
catch (n) {
    throw console.error(`Computing dependencies in local compilation mode for the component "${e.name}" failed with the exception:`, n), n;
} }; }
function zT(e, t) { let n = W(e); n !== null && (n.debugInfo = t); }
function QT(e, t, n) { let o = `./@ng/component?c=${e}&t=${encodeURIComponent(t)}`; return new URL(o, n).href; }
function ZT(e, t, n, o, r = null, i = null) { let s = W(e); t.apply(null, [e, n, ...o]); let { newDef: a, oldDef: c } = uO(s, W(e)); if (e[rn] = a, c.tView) {
    let l = nw().values();
    for (let u of l)
        st(u) && u[Q] === null && As(r, i, a, c, u);
} }
function uO(e, t) { let n = z({}, e); return { newDef: Object.assign(e, t, { directiveDefs: n.directiveDefs, pipeDefs: n.pipeDefs, setInput: n.setInput, type: n.type }), oldDef: n }; }
function As(e, t, n, o, r) { let i = r[m]; if (i === o.tView) {
    fO(e, t, n, o, r);
    return;
} for (let s = I; s < i.bindingStartIndex; s++) {
    let a = r[s];
    if (K(a)) {
        ne(a[$]) && As(e, t, n, o, a[$]);
        for (let c = G; c < a.length; c++)
            As(e, t, n, o, a[c]);
    }
    else
        ne(a) && As(e, t, n, o, a);
} }
function dO(e, t) { e.componentReplaced?.(t.id); }
function fO(e, t, n, o, r) { let i = r[U], s = r[$], a = r[Q], c = r[le], l = r[L].get(q, null), u = () => { if (o.encapsulation === Ue.ShadowDom || o.encapsulation === Ue.ExperimentalIsolatedShadowDom) {
    let h = s.cloneNode(!1);
    s.replaceWith(h), s = h;
} let d = Jy(n), f = Ma(a, d, i, Wd(n), s, c, null, null, null, null, null); pO(a, r, f, c.index), di(r[m], r), Br(r); let p = r[je].rendererFactory; dO(p, o), f[w] = p.createRenderer(s, n), uv(r[m], r), hO(c), Va(d, f, i), bv(d, f, d.template, i); }; l === null ? rm(e, t, u) : l.run(() => rm(e, t, u)); }
function rm(e, t, n) {
    try {
        n();
    }
    catch (o) {
        let r = o;
        if (t !== null && r.message) {
            let i = r.message + (r.stack ? `
` + r.stack : "");
            e?.hot?.send?.("angular:invalidate", { id: t, message: i, error: !0 });
        }
        throw o;
    }
}
function pO(e, t, n, o) { for (let r = I; r < e[m].bindingStartIndex; r++) {
    let i = e[r];
    if ((ne(i) || K(i)) && i[he] === t) {
        i[he] = n;
        break;
    }
} e[Ft] === t && (e[Ft] = n), e[lr] === t && (e[lr] = n), n[he] = t[he], t[he] = null, e[o] = n; }
function hO(e) { if (e.projection !== null) {
    for (let t of e.projection)
        sa(t) && (t.projectionNext = null, t.flags &= -3);
    e.projection = null;
} }
var Ee = { \u0275\u0275animateEnter: wr, \u0275\u0275animateEnterListener: _r, \u0275\u0275animateLeave: Sr, \u0275\u0275animateLeaveListener: Xs, \u0275\u0275attribute: zf, \u0275\u0275defineComponent: UE, \u0275\u0275defineDirective: GE, \u0275\u0275defineInjectable: B, \u0275\u0275defineInjector: tr, \u0275\u0275defineNgModule: Rf, \u0275\u0275definePipe: WE, \u0275\u0275directiveInject: Fo, \u0275\u0275getInheritedFactory: xm, \u0275\u0275inject: pe, \u0275\u0275injectAttribute: aa, \u0275\u0275invalidFactory: lE, \u0275\u0275invalidFactoryDep: Gi, \u0275\u0275templateRefExtractor: GT, \u0275\u0275resetView: Dl, \u0275\u0275HostDirectivesFeature: YE, \u0275\u0275NgOnChangesFeature: vm, \u0275\u0275ControlFeature: ZE, \u0275\u0275ProvidersFeature: IT, \u0275\u0275InheritDefinitionFeature: kf, \u0275\u0275ExternalStylesFeature: DT, \u0275\u0275nextContext: MD, \u0275\u0275namespaceHTML: Ol, \u0275\u0275namespaceMathML: kl, \u0275\u0275namespaceSVG: Rl, \u0275\u0275enableBindings: yl, \u0275\u0275disableBindings: vl, \u0275\u0275elementStart: Qr, \u0275\u0275elementEnd: oc, \u0275\u0275element: Zf, \u0275\u0275elementContainerStart: sc, \u0275\u0275elementContainerEnd: Ei, \u0275\u0275domElement: Yf, \u0275\u0275domElementStart: rc, \u0275\u0275domElementEnd: ic, \u0275\u0275domElementContainer: ep, \u0275\u0275domElementContainerStart: ac, \u0275\u0275domElementContainerEnd: Xf, \u0275\u0275domTemplate: xf, \u0275\u0275domListener: up, \u0275\u0275elementContainer: Jf, \u0275\u0275pureFunction0: MT, \u0275\u0275pureFunction1: NT, \u0275\u0275pureFunction2: wT, \u0275\u0275pureFunction3: _T, \u0275\u0275pureFunction4: ST, \u0275\u0275pureFunction5: bT, \u0275\u0275pureFunction6: AT, \u0275\u0275pureFunction7: RT, \u0275\u0275pureFunction8: kT, \u0275\u0275pureFunctionV: OT, \u0275\u0275getCurrentView: oD, \u0275\u0275restoreView: Il, \u0275\u0275listener: cp, \u0275\u0275projection: wD, \u0275\u0275syntheticHostProperty: op, \u0275\u0275syntheticHostListener: lp, \u0275\u0275pipeBind1: HT, \u0275\u0275pipeBind2: BT, \u0275\u0275pipeBind3: $T, \u0275\u0275pipeBind4: UT, \u0275\u0275pipeBindV: qT, \u0275\u0275projectionDef: ND, \u0275\u0275domProperty: np, \u0275\u0275ariaProperty: Wf, \u0275\u0275property: Qf, \u0275\u0275control: vE, \u0275\u0275controlCreate: mE, \u0275\u0275pipe: VT, \u0275\u0275queryRefresh: _D, \u0275\u0275queryAdvance: bD, \u0275\u0275viewQuery: pp, \u0275\u0275viewQuerySignal: gp, \u0275\u0275loadQuery: SD, \u0275\u0275contentQuery: fp, \u0275\u0275contentQuerySignal: hp, \u0275\u0275reference: AD, \u0275\u0275classMap: LD, \u0275\u0275styleMap: PD, \u0275\u0275styleProp: mp, \u0275\u0275classProp: yp, \u0275\u0275advance: Xy, \u0275\u0275template: Of, \u0275\u0275conditional: YI, \u0275\u0275conditionalCreate: ZI, \u0275\u0275conditionalBranchCreate: nc, \u0275\u0275defer: NI, \u0275\u0275deferWhen: wI, \u0275\u0275deferOnIdle: AI, \u0275\u0275deferOnImmediate: OI, \u0275\u0275deferOnTimer: LI, \u0275\u0275deferOnHover: VI, \u0275\u0275deferOnInteraction: $I, \u0275\u0275deferOnViewport: GI, \u0275\u0275deferPrefetchWhen: _I, \u0275\u0275deferPrefetchOnIdle: RI, \u0275\u0275deferPrefetchOnImmediate: xI, \u0275\u0275deferPrefetchOnTimer: FI, \u0275\u0275deferPrefetchOnHover: HI, \u0275\u0275deferPrefetchOnInteraction: UI, \u0275\u0275deferPrefetchOnViewport: WI, \u0275\u0275deferHydrateWhen: SI, \u0275\u0275deferHydrateNever: bI, \u0275\u0275deferHydrateOnIdle: kI, \u0275\u0275deferHydrateOnImmediate: PI, \u0275\u0275deferHydrateOnTimer: jI, \u0275\u0275deferHydrateOnHover: BI, \u0275\u0275deferHydrateOnInteraction: qI, \u0275\u0275deferHydrateOnViewport: zI, \u0275\u0275deferEnableTimerScheduling: dI, \u0275\u0275repeater: eD, \u0275\u0275repeaterCreate: XI, \u0275\u0275repeaterTrackByIndex: KI, \u0275\u0275repeaterTrackByIdentity: JI, \u0275\u0275componentInstance: QI, \u0275\u0275text: qD, \u0275\u0275textInterpolate: vp, \u0275\u0275textInterpolate1: cc, \u0275\u0275textInterpolate2: Ep, \u0275\u0275textInterpolate3: Ip, \u0275\u0275textInterpolate4: Dp, \u0275\u0275textInterpolate5: Tp, \u0275\u0275textInterpolate6: Cp, \u0275\u0275textInterpolate7: Mp, \u0275\u0275textInterpolate8: Np, \u0275\u0275textInterpolateV: wp, \u0275\u0275i18n: ID, \u0275\u0275i18nAttributes: DD, \u0275\u0275i18nExp: ap, \u0275\u0275i18nStart: ip, \u0275\u0275i18nEnd: sp, \u0275\u0275i18nApply: TD, \u0275\u0275i18nPostprocess: CD, \u0275\u0275resolveWindow: Qy, \u0275\u0275resolveDocument: Zy, \u0275\u0275resolveBody: Ud, \u0275\u0275setComponentScope: TT, \u0275\u0275setNgModuleScope: CT, \u0275\u0275registerNgModuleType: Sf, \u0275\u0275getComponentDepsFactory: WT, \u0275setClassDebugInfo: zT, \u0275\u0275declareLet: bp, \u0275\u0275storeLet: rT, \u0275\u0275arrowFunction: yT, \u0275\u0275readContextLet: iT, \u0275\u0275attachSourceLocations: sT, \u0275\u0275interpolate: aT, \u0275\u0275interpolate1: cT, \u0275\u0275interpolate2: lT, \u0275\u0275interpolate3: uT, \u0275\u0275interpolate4: dT, \u0275\u0275interpolate5: fT, \u0275\u0275interpolate6: pT, \u0275\u0275interpolate7: hT, \u0275\u0275interpolate8: gT, \u0275\u0275interpolateV: mT, \u0275\u0275sanitizeHtml: By, \u0275\u0275sanitizeStyle: $y, \u0275\u0275sanitizeResourceUrl: Bd, \u0275\u0275sanitizeScript: Uy, \u0275\u0275validateAttribute: $d, \u0275\u0275sanitizeUrl: Hd, \u0275\u0275sanitizeUrlOrResourceUrl: Wy, \u0275\u0275trustConstantHtml: qy, \u0275\u0275trustConstantResourceUrl: Gy, forwardRef: Xo, resolveForwardRef: P, \u0275\u0275twoWayProperty: _p, \u0275\u0275twoWayBindingSet: nT, \u0275\u0275twoWayListener: Sp, \u0275\u0275replaceMetadata: ZT, \u0275\u0275getReplaceMetadataURL: QT }, oo = null;
function YT(e) { oo !== null && (e.defaultEncapsulation !== oo.defaultEncapsulation || e.preserveWhitespaces !== oo.preserveWhitespaces) || (oo = e); }
function gO() { return oo; }
function mO() { oo = null; }
var kr = [];
function yO(e, t) { kr.push({ moduleType: e, ngModule: t }); }
var lu = !1;
function KT() { if (!lu) {
    lu = !0;
    try {
        for (let e = kr.length - 1; e >= 0; e--) {
            let { moduleType: t, ngModule: n } = kr[e];
            n.declarations && n.declarations.every(JT) && (kr.splice(e, 1), TO(t, n));
        }
    }
    finally {
        lu = !1;
    }
} }
function JT(e) { return Array.isArray(e) ? e.every(JT) : !!P(e); }
function XT(e, t = {}) { eC(e, t), t.id !== void 0 && Sf(e, t.id), yO(e, t); }
function eC(e, t, n = !1) { let o = Ze(t.declarations || F), r = null; Object.defineProperty(e, Bi, { configurable: !0, get: () => (r === null && (r = re({ usage: 0, kind: "NgModule", type: e }).compileNgModule(Ee, `ng:///${e.name}/\u0275mod.js`, { type: e, bootstrap: Ze(t.bootstrap || F).map(P), declarations: o.map(P), imports: Ze(t.imports || F).map(P).map(im), exports: Ze(t.exports || F).map(P).map(im), schemas: t.schemas ? Ze(t.schemas) : null, id: t.id || null }), r.schemas || (r.schemas = [])), r) }); let i = null; Object.defineProperty(e, ot, { get: () => { if (i === null) {
        let a = re({ usage: 0, kind: "NgModule", type: e });
        i = a.compileFactory(Ee, `ng:///${e.name}/\u0275fac.js`, { name: e.name, type: e, deps: ca(e), target: a.FactoryTarget.NgModule, typeArgumentCount: 0 });
    } return i; }, configurable: !1 }); let s = null; Object.defineProperty(e, Wo, { get: () => { if (s === null) {
        let a = { name: e.name, type: e, providers: t.providers || F, imports: [(t.imports || F).map(P), (t.exports || F).map(P)] };
        s = re({ usage: 0, kind: "NgModule", type: e }).compileInjector(Ee, `ng:///${e.name}/\u0275inj.js`, a);
    } return s; }, configurable: !1 }); }
function vO(e, t) { let n = `Unexpected "${Pe(e)}" found in the "declarations" array of the`, o = `"${Pe(e)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`; return `${n} ${t}, ${o}`; }
var EO = new WeakMap, IO = new WeakMap;
function DO() { EO = new WeakMap, IO = new WeakMap, kr.length = 0, VA.clear(); }
function TO(e, t) { let n = Ze(t.declarations || F), o = Rp(e); n.forEach(r => { if (r = P(r), r.hasOwnProperty(rn)) {
    let s = W(r);
    Ap(s, o);
}
else
    !r.hasOwnProperty(or) && !r.hasOwnProperty(rr) && (r.ngSelectorScope = e); }); }
function Ap(e, t) { e.directiveDefs = () => Array.from(t.compilation.directives).map(n => n.hasOwnProperty(rn) ? W(n) : be(n)).filter(n => !!n), e.pipeDefs = () => Array.from(t.compilation.pipes).map(n => Qe(n)), e.schemas = t.schemas, e.tView = null; }
function Rp(e) { if (gn(e)) {
    let t = ho.getNgModuleScope(e), n = $i(e);
    return z({ schemas: n.schemas || null }, t);
}
else if (ir(e)) {
    if ((W(e) || be(e)) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set([e]), pipes: new Set } };
    if (Qe(e) !== null)
        return { schemas: null, compilation: { directives: new Set, pipes: new Set }, exported: { directives: new Set, pipes: new Set([e]) } };
} throw new Error(`${e.name} does not have a module def (\u0275mod property)`); }
function im(e) { return mf(e) ? e.ngModule : e; }
var uu = 0;
function tC(e, t) {
    let n = null;
    SA(e, t), oC(e, t), Object.defineProperty(e, rn, { get: () => {
            if (n === null) {
                let o = re({ usage: 0, kind: "component", type: e });
                if (FE(t)) {
                    let u = [`Component '${e.name}' is not resolved:`];
                    throw t.templateUrl && u.push(` - templateUrl: ${t.templateUrl}`), t.styleUrls && t.styleUrls.length && u.push(` - styleUrls: ${JSON.stringify(t.styleUrls)}`), t.styleUrl && u.push(` - styleUrl: ${t.styleUrl}`), u.push("Did you run and wait for 'resolveComponentResources()'?"), new Error(u.join(`
`));
                }
                let r = gO(), i = t.preserveWhitespaces;
                i === void 0 && (r !== null && r.preserveWhitespaces !== void 0 ? i = r.preserveWhitespaces : i = !1);
                let s = t.encapsulation;
                s === void 0 && (r !== null && r.defaultEncapsulation !== void 0 ? s = r.defaultEncapsulation : s = Ue.Emulated);
                let a = t.templateUrl || `ng:///${e.name}/template.html`, c = rC(e, t), l = we(z({}, c), { typeSourceSpan: o.createParseSourceSpan("Component", e.name, a), template: t.template || "", preserveWhitespaces: i, styles: typeof t.styles == "string" ? [t.styles] : t.styles || F, animations: t.animations, declarations: [], changeDetection: t.changeDetection, encapsulation: s, viewProviders: t.viewProviders || null, hasDirectiveDependencies: !c.isStandalone || t.imports != null && t.imports.length > 0 });
                uu++;
                try {
                    if (l.usesInheritance && iC(e), n = o.compileComponent(Ee, a, l), l.isStandalone) {
                        let u = Ze(t.imports || F), { directiveDefs: d, pipeDefs: f } = CO(e, u);
                        n.directiveDefs = d, n.pipeDefs = f, n.dependencies = () => u.map(P);
                    }
                }
                finally {
                    uu--;
                }
                if (uu === 0 && KT(), MO(e)) {
                    let u = Rp(e.ngSelectorScope);
                    Ap(n, u);
                }
                if (t.schemas)
                    if (l.isStandalone)
                        n.schemas = t.schemas;
                    else
                        throw new Error(`The 'schemas' was specified for the ${Pe(e)} but is only valid on a component that is standalone.`);
                else
                    l.isStandalone && (n.schemas = []);
            }
            return n;
        }, set: o => { n = o; }, configurable: !1 });
}
function CO(e, t) { return { directiveDefs: () => Mr(e) ? [...ho.getStandaloneComponentScope(e, t).compilation.directives].map(i => W(i) || be(i)).filter(i => i !== null) : [], pipeDefs: () => Mr(e) ? [...ho.getStandaloneComponentScope(e, t).compilation.pipes].map(i => Qe(i)).filter(i => i !== null) : [] }; }
function MO(e) { return e.ngSelectorScope !== void 0; }
function kp(e, t) { let n = null; oC(e, t || {}), Object.defineProperty(e, or, { get: () => { if (n === null) {
        let o = nC(e, t || {});
        n = re({ usage: 0, kind: "directive", type: e }).compileDirective(Ee, o.sourceMapUrl, o.metadata);
    } return n; }, configurable: !1 }); }
function nC(e, t) { let n = e && e.name, o = `ng:///${n}/\u0275dir.js`, r = re({ usage: 0, kind: "directive", type: e }), i = rC(e, t); return i.typeSourceSpan = r.createParseSourceSpan("Directive", n, o), i.usesInheritance && iC(e), { metadata: i, sourceMapUrl: o }; }
function oC(e, t) { let n = null; Object.defineProperty(e, ot, { get: () => { if (n === null) {
        let o = nC(e, t), r = re({ usage: 0, kind: "directive", type: e });
        n = r.compileFactory(Ee, `ng:///${e.name}/\u0275fac.js`, { name: o.metadata.name, type: o.metadata.type, typeArgumentCount: 0, deps: ca(e), target: r.FactoryTarget.Directive });
    } return n; }, configurable: !1 }); }
function NO(e) { return Object.getPrototypeOf(e.prototype) === Object.prototype; }
function rC(e, t) { let n = yd(), o = n.ownPropMetadata(e); return { name: e.name, type: e, selector: t.selector !== void 0 ? t.selector : null, host: t.host || Le, propMetadata: o, inputs: t.inputs || F, outputs: t.outputs || F, queries: sm(e, o, sC), lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") }, controlCreate: null, typeSourceSpan: null, usesInheritance: !NO(e), exportAs: SO(t.exportAs), providers: t.providers || null, viewQueries: sm(e, o, aC), isStandalone: t.standalone === void 0 ? !0 : !!t.standalone, isSignal: !!t.signals, hostDirectives: t.hostDirectives?.map(r => typeof r == "function" ? { directive: r } : r) || null }; }
function iC(e) { let t = Object.prototype, n = Object.getPrototypeOf(e.prototype).constructor; for (; n && n !== t;)
    !be(n) && !W(n) && AO(n) && kp(n, null), n = Object.getPrototypeOf(n); }
function wO(e) { return typeof e == "string" ? lC(e) : P(e); }
function _O(e, t) { return { propertyName: e, predicate: wO(t.selector), descendants: t.descendants, first: t.first, read: t.read ? t.read : null, static: !!t.static, emitDistinctChangesOnly: !!t.emitDistinctChangesOnly, isSignal: !!t.isSignal }; }
function sm(e, t, n) { let o = [], r = []; for (let i in t)
    if (t.hasOwnProperty(i)) {
        let s = t[i];
        s.forEach(a => { if (n(a)) {
            if (!a.selector)
                throw new Error(`Can't construct a query for the property "${i}" of "${Pe(e)}" since the query selector wasn't defined.`);
            if (s.some(cC))
                throw new Error("Cannot combine @Input decorators with query decorators");
            let c = _O(i, a);
            c.isSignal ? o.push(c) : r.push(c);
        } });
    } return [...o, ...r]; }
function SO(e) { return e === void 0 ? null : lC(e); }
function sC(e) { let t = e.ngMetadataName; return t === "ContentChild" || t === "ContentChildren"; }
function aC(e) { let t = e.ngMetadataName; return t === "ViewChild" || t === "ViewChildren"; }
function cC(e) { return e.ngMetadataName === "Input"; }
function lC(e) { return e.split(",").map(t => t.trim()); }
var bO = ["ngOnChanges", "ngOnInit", "ngOnDestroy", "ngDoCheck", "ngAfterViewInit", "ngAfterViewChecked", "ngAfterContentInit", "ngAfterContentChecked"];
function AO(e) { let t = yd(); if (bO.some(o => t.hasLifecycleHook(e, o)))
    return !0; let n = t.propMetadata(e); for (let o in n) {
    let r = n[o];
    for (let i = 0; i < r.length; i++) {
        let s = r[i], a = s.ngMetadataName;
        if (cC(s) || sC(s) || aC(s) || a === "Output" || a === "HostBinding" || a === "HostListener")
            return !0;
    }
} return !1; }
function uC(e, t) { let n = null, o = null; Object.defineProperty(e, ot, { get: () => { if (o === null) {
        let r = am(e, t), i = re({ usage: 0, kind: "pipe", type: r.type });
        o = i.compileFactory(Ee, `ng:///${r.name}/\u0275fac.js`, { name: r.name, type: r.type, typeArgumentCount: 0, deps: ca(e), target: i.FactoryTarget.Pipe });
    } return o; }, configurable: !1 }), Object.defineProperty(e, rr, { get: () => { if (n === null) {
        let r = am(e, t);
        n = re({ usage: 0, kind: "pipe", type: r.type }).compilePipe(Ee, `ng:///${r.name}/\u0275pipe.js`, r);
    } return n; }, configurable: !1 }); }
function am(e, t) { return { type: e, name: e.name, pipeName: t.name, pure: t.pure !== void 0 ? t.pure : !0, isStandalone: t.standalone === void 0 ? !0 : !!t.standalone }; }
var dC = Xr("Directive", (e = {}) => e, void 0, void 0, (e, t) => kp(e, t)), RO = Xr("Component", (e = {}) => z({ changeDetection: la.Eager }, e), dC, void 0, (e, t) => tC(e, t)), kO = Xr("Pipe", e => z({ pure: !0 }, e), void 0, void 0, (e, t) => uC(e, t)), OO = wt("Input", e => e ? typeof e == "string" ? { alias: e } : e : {}), xO = wt("Output", e => ({ alias: e })), PO = wt("HostBinding", e => ({ hostPropertyName: e })), LO = wt("HostListener", (e, t) => ({ eventName: e, args: t })), FO = Xr("NgModule", e => e, void 0, void 0, (e, t) => XT(e, t)), ia = class {
    ngModuleFactory;
    componentFactories;
    constructor(t, n) { this.ngModuleFactory = t, this.componentFactories = n; }
}, jO = (() => { class e {
    compileModuleSync(n) { return new vo(n); }
    compileModuleAsync(n) { return Promise.resolve(this.compileModuleSync(n)); }
    compileModuleAndAllComponentsSync(n) { let o = this.compileModuleSync(n), r = an(n), i = to(r.declarations).reduce((s, a) => { let c = W(a); return c && s.push(new Yt(c)), s; }, []); return new ia(o, i); }
    compileModuleAndAllComponentsAsync(n) { return Promise.resolve(this.compileModuleAndAllComponentsSync(n)); }
    clearCache() { }
    clearCacheFor(n) { }
    getModuleId(n) { }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), fC = new C(""), pd = class {
};
var pC = (() => { class e {
    applicationErrorHandler = v(It);
    appRef = v(Ge);
    taskService = v(Et);
    ngZone = v(q);
    zonelessEnabled = v(Qn);
    tracing = v(xn, { optional: !0 });
    zoneIsDefined = typeof Zone < "u" && !!Zone.root.run;
    schedulerTickApplyArgs = [{ data: { __scheduler_tick__: !0 } }];
    subscriptions = new vN;
    angularZoneId = this.zoneIsDefined ? this.ngZone._inner?.get(Zo) : null;
    scheduleInRootZone = !this.zonelessEnabled && this.zoneIsDefined && (v(cs, { optional: !0 }) ?? !1);
    cancelScheduledCallback = null;
    useMicrotaskScheduler = !1;
    runningTick = !1;
    pendingRenderTaskId = null;
    constructor() { this.subscriptions.add(this.appRef.afterTick.subscribe(() => { let n = this.taskService.add(); if (!this.runningTick && (this.cleanup(), !this.zonelessEnabled || this.appRef.includeAllTestViews)) {
        this.taskService.remove(n);
        return;
    } this.switchToMicrotaskScheduler(), this.taskService.remove(n); })), this.subscriptions.add(this.ngZone.onUnstable.subscribe(() => { this.runningTick || this.cleanup(); })); }
    switchToMicrotaskScheduler() { this.ngZone.runOutsideAngular(() => { let n = this.taskService.add(); this.useMicrotaskScheduler = !0, queueMicrotask(() => { this.useMicrotaskScheduler = !1, this.taskService.remove(n); }); }); }
    notify(n) { if (!this.zonelessEnabled && n === 5)
        return; switch (n) {
        case 0: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 3:
        case 2:
        case 4:
        case 5:
        case 1: {
            this.appRef.dirtyFlags |= 4;
            break;
        }
        case 6: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 12: {
            this.appRef.dirtyFlags |= 16;
            break;
        }
        case 13: {
            this.appRef.dirtyFlags |= 2;
            break;
        }
        case 11: break;
        default: this.appRef.dirtyFlags |= 8;
    } if (this.appRef.tracingSnapshot = this.tracing?.snapshot(this.appRef.tracingSnapshot) ?? null, !this.shouldScheduleTick())
        return; let o = this.useMicrotaskScheduler ? Gh : jl; this.pendingRenderTaskId = this.taskService.add(), this.scheduleInRootZone ? this.cancelScheduledCallback = Zone.root.run(() => o(() => this.tick())) : this.cancelScheduledCallback = this.ngZone.runOutsideAngular(() => o(() => this.tick())); }
    shouldScheduleTick() { return !(this.appRef.destroyed || this.pendingRenderTaskId !== null || this.runningTick || this.appRef._runningTick || !this.zonelessEnabled && this.zoneIsDefined && Zone.current.get(Zo + this.angularZoneId)); }
    tick() { if (this.runningTick || this.appRef.destroyed)
        return; if (this.appRef.dirtyFlags === 0) {
        this.cleanup();
        return;
    } !this.zonelessEnabled && this.appRef.dirtyFlags & 7 && (this.appRef.dirtyFlags |= 1); let n = this.taskService.add(); try {
        this.ngZone.run(() => { this.runningTick = !0, this.appRef._tick(); }, void 0, this.schedulerTickApplyArgs);
    }
    catch (o) {
        this.applicationErrorHandler(o);
    }
    finally {
        this.taskService.remove(n), this.cleanup();
    } }
    ngOnDestroy() { this.subscriptions.unsubscribe(), this.cleanup(); }
    cleanup() { if (this.runningTick = !1, this.cancelScheduledCallback?.(), this.cancelScheduledCallback = null, this.pendingRenderTaskId !== null) {
        let n = this.pendingRenderTaskId;
        this.pendingRenderTaskId = null, this.taskService.remove(n);
    } }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
function VO() { return J("NgZoneless"), Ye([...lc(), []]); }
function lc() { return [{ provide: xe, useExisting: pC }, { provide: q, useClass: Yo }, { provide: Qn, useValue: !0 }]; }
function HO() { return typeof $localize < "u" && $localize.locale || Ii; }
var Op = new C("", { factory: () => v(Op, { optional: !0, skipSelf: !0 }) || HO() }), BO = new C("", { factory: () => nk }), $O = new C(""), UO = new C(""), hC = (function (e) { return e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore", e; })(hC || {}), hd = class {
    name;
    callback;
    constructor(t, n) { this.name = t, this.callback = n; }
};
function qO(e) { return e.map(t => t.nativeElement); }
var Kr = class {
    nativeNode;
    constructor(t) { this.nativeNode = t; }
    get parent() { let t = this.nativeNode.parentNode; return t ? new bn(t) : null; }
    get injector() { return fw(this.nativeNode); }
    get componentInstance() { let t = this.nativeNode; return t && (sg(t) || dw(t)); }
    get context() { return sg(this.nativeNode) || uw(this.nativeNode); }
    get listeners() { return yw(this.nativeNode).filter(t => t.type === "dom"); }
    get references() { return gw(this.nativeNode); }
    get providerTokens() { return pw(this.nativeNode); }
}, bn = class extends Kr {
    constructor(t) { super(t); }
    get nativeElement() { return this.nativeNode.nodeType == Node.ELEMENT_NODE ? this.nativeNode : null; }
    get name() { let t = Me(this.nativeNode), n = t ? t.lView : null; return n !== null ? n[m].data[t.nodeIndex].value : this.nativeNode.nodeName; }
    get properties() { let t = Me(this.nativeNode), n = t ? t.lView : null; if (n === null)
        return {}; let o = n[m].data, r = o[t.nodeIndex], i = {}; return GO(this.nativeElement, i), zO(i, r, n, o), i; }
    get attributes() { let t = {}, n = this.nativeElement; if (!n)
        return t; let o = Me(n), r = o ? o.lView : null; if (r === null)
        return {}; let i = r[m].data[o.nodeIndex].attrs, s = []; if (i) {
        let a = 0;
        for (; a < i.length;) {
            let c = i[a];
            if (typeof c != "string")
                break;
            let l = i[a + 1];
            t[c] = l, s.push(c.toLowerCase()), a += 2;
        }
    } for (let a of n.attributes)
        s.includes(a.name) || (t[a.name] = a.value); return t; }
    get styles() { return this.nativeElement?.style ?? {}; }
    get classes() { let t = {}, o = this.nativeElement.className; return (typeof o != "string" ? o.baseVal.split(" ") : o.split(" ")).forEach(i => t[i] = !0), t; }
    get childNodes() { let t = this.nativeNode.childNodes, n = []; for (let o = 0; o < t.length; o++) {
        let r = t[o];
        n.push(Jr(r));
    } return n; }
    get children() { let t = this.nativeElement; if (!t)
        return []; let n = t.children, o = []; for (let r = 0; r < n.length; r++) {
        let i = n[r];
        o.push(Jr(i));
    } return o; }
    query(t) { return this.queryAll(t)[0] || null; }
    queryAll(t) { let n = []; return cm(this, t, n, !0), n; }
    queryAllNodes(t) { let n = []; return cm(this, t, n, !1), n; }
    triggerEventHandler(t, n) { let o = this.nativeNode, r = []; this.listeners.forEach(i => { if (i.name === t) {
        let s = i.callback;
        s.call(o, n), r.push(s);
    } }), typeof o.eventListeners == "function" && o.eventListeners(t).forEach(i => { if (i.toString().indexOf("__ngUnwrap__") !== -1) {
        let s = i("__ngUnwrap__");
        return r.indexOf(s) === -1 && s.call(o, n);
    } }); }
};
function GO(e, t) { if (e) {
    let n = Object.getPrototypeOf(e), o = Node.prototype;
    for (; n !== null && n !== o;) {
        let r = Object.getOwnPropertyDescriptors(n);
        for (let i in r)
            if (!i.startsWith("__") && !i.startsWith("on")) {
                let s = e[i];
                WO(s) && (t[i] = s);
            }
        n = Object.getPrototypeOf(n);
    }
} }
function WO(e) { return typeof e == "string" || typeof e == "boolean" || typeof e == "number" || e === null; }
function cm(e, t, n, o) { let r = Me(e.nativeNode), i = r ? r.lView : null; if (i !== null) {
    let s = i[m].data[r.nodeIndex];
    mn(s, i, t, n, o, e.nativeNode);
}
else
    xp(e.nativeNode, t, n, o); }
function mn(e, t, n, o, r, i) { let s = Ah(e, t); if (e.type & 11) {
    if (du(s, n, o, r, i), De(e)) {
        let c = ye(e.index, t);
        c && c[m].firstChild && mn(c[m].firstChild, c, n, o, r, i);
    }
    else
        e.child && mn(e.child, t, n, o, r, i), s && xp(s, n, o, r);
    let a = t[e.index];
    K(a) && lm(a, n, o, r, i);
}
else if (e.type & 4) {
    let a = t[e.index];
    du(a[Ke], n, o, r, i), lm(a, n, o, r, i);
}
else if (e.type & 16) {
    let a = t[ee], l = a[le].projection[e.projection];
    if (Array.isArray(l))
        for (let u of l)
            du(u, n, o, r, i);
    else if (l) {
        let u = a[Q], d = u[m].data[l.index];
        mn(d, u, n, o, r, i);
    }
}
else
    e.child && mn(e.child, t, n, o, r, i); if (i !== s) {
    let a = e.flags & 2 ? e.projectionNext : e.next;
    a && mn(a, t, n, o, r, i);
} }
function lm(e, t, n, o, r) { for (let i = G; i < e.length; i++) {
    let s = e[i], a = s[m].firstChild;
    a && mn(a, s, t, n, o, r);
} }
function du(e, t, n, o, r) { if (r !== e) {
    let i = Jr(e);
    if (!i)
        return;
    (o && i instanceof bn && t(i) && n.indexOf(i) === -1 || !o && t(i) && n.indexOf(i) === -1) && n.push(i);
} }
function xp(e, t, n, o) { let r = e.childNodes, i = r.length; for (let s = 0; s < i; s++) {
    let a = r[s], c = Jr(a);
    c && ((o && c instanceof bn && t(c) && n.indexOf(c) === -1 || !o && t(c) && n.indexOf(c) === -1) && n.push(c), xp(a, t, n, o));
} }
function zO(e, t, n, o) { let r = t.propertyBindings; if (r !== null)
    for (let i = 0; i < r.length; i++) {
        let s = r[i], c = o[s].split(O_), l = c[0];
        if (c.length > 1) {
            let u = c[1];
            for (let d = 1; d < c.length - 1; d++)
                u += b(n[s + d - 1]) + c[d + 1];
            e[l] = u;
        }
        else
            e[l] = n[s];
    } }
var fu = "__ng_debug__";
function Jr(e) { return e instanceof Node ? (e.hasOwnProperty(fu) || (e[fu] = e.nodeType == Node.ELEMENT_NODE ? new bn(e) : new Kr(e)), e[fu]) : null; }
var Ci = class {
    destroyed = !1;
    listeners = null;
    errorHandler = v(vt, { optional: !0 });
    destroyRef = v(Be);
    constructor() { this.destroyRef.onDestroy(() => { this.destroyed = !0, this.listeners = null; }); }
    subscribe(t) { if (this.destroyed)
        throw new D(953, !1); return (this.listeners ??= []).push(t), { unsubscribe: () => { let n = this.listeners?.indexOf(t); n !== void 0 && n !== -1 && this.listeners?.splice(n, 1); } }; }
    emit(t) { if (this.destroyed) {
        console.warn(Ko(953, !1));
        return;
    } if (this.listeners === null)
        return; let n = R(null); try {
        for (let o of this.listeners)
            try {
                o(t);
            }
            catch (r) {
                this.errorHandler?.handleError(r);
            }
    }
    finally {
        R(n);
    } }
};
function QO(e) { return e.destroyRef; }
function tt(e) { return fh(e); }
function Ne(e, t) { return ki(e, t?.equal); }
var ZO = e => e;
function Pp(e, t) { if (typeof e == "function") {
    let n = Rc(e, ZO, t?.equal);
    return gC(n, t?.debugName);
}
else {
    let n = Rc(e.source, e.computation, e.equal);
    return gC(n, e.debugName);
} }
function gC(e, t) { let n = e[ae], o = e; return o.set = r => uh(n, r), o.update = r => dh(n, r), o.asReadonly = Wn.bind(e), o; }
function YO(e) { let t = e.request, n = e.params ?? t ?? (() => null); return new uc(n, JO(e), e.defaultValue, e.equal ? KO(e.equal) : void 0, e.debugName, e.injector ?? v(ce)); }
var Lp = class {
    value;
    isLoading;
    constructor(t, n) { this.value = t, this.value.set = this.set.bind(this), this.value.update = this.update.bind(this), this.value.asReadonly = Wn, this.isLoading = Ne(() => this.status() === "loading" || this.status() === "reloading", void 0); }
    isError = Ne(() => this.status() === "error");
    update(t) { this.set(t(tt(this.value))); }
    isValueDefined = Ne(() => this.isError() ? !1 : this.value() !== void 0);
    _snapshot;
    get snapshot() { return this._snapshot ??= Ne(() => { let t = this.status(); return t === "error" ? { status: "error", error: this.error() } : { status: t, value: this.value() }; }); }
    hasValue() { return this.isValueDefined(); }
    asReadonly() { return this; }
}, uc = class extends Lp {
    loaderFn;
    equal;
    debugName;
    pendingTasks;
    state;
    extRequest;
    effectRef;
    pendingController;
    resolvePendingTask = void 0;
    destroyed = !1;
    unregisterOnDestroy;
    status;
    error;
    constructor(t, n, o, r, i, s, a) { super(Ne(() => { let c = this.state().stream?.(); if (!c || this.state().status === "loading" && this.error())
        return o; if (!Fp(c))
        throw new Mi(this.error()); return c.value; }, { equal: r }), i), this.loaderFn = n, this.equal = r, this.debugName = i, this.extRequest = Pp({ source: t, computation: c => ({ request: c, reload: 0 }) }), this.state = Pp({ source: this.extRequest, computation: (c, l) => { if (l) {
            let u = c.request === void 0 ? "idle" : "loading";
            return { extRequest: c, status: u, previousStatus: mC(l.value), stream: l.value.extRequest.request === c.request ? l.value.stream : void 0 };
        }
        else {
            let u = a?.(c.request);
            a = void 0;
            let d = c.request === void 0 ? "idle" : u ? "resolved" : "loading";
            return { extRequest: c, status: d, previousStatus: "idle", stream: u };
        } } }), this.effectRef = $l(this.loadEffect.bind(this), { injector: s, manualCleanup: !0 }), this.pendingTasks = s.get(yr), this.unregisterOnDestroy = s.get(Be).onDestroy(() => this.destroy()), this.status = Ne(() => mC(this.state()), void 0), this.error = Ne(() => { let c = this.state().stream?.(); return c && !Fp(c) ? c.error : void 0; }, void 0); }
    set(t) { if (this.destroyed)
        return; let n = tt(this.error), o = tt(this.state); if (!n) {
        let r = tt(this.value);
        if (o.status === "local" && (this.equal ? this.equal(r, t) : r === t))
            return;
    } this.state.set({ extRequest: o.extRequest, status: "local", previousStatus: "local", stream: Ut({ value: t }, void 0) }), this.abortInProgressLoad(); }
    reload() { let { status: t } = tt(this.state); return t === "idle" || t === "loading" ? !1 : (this.extRequest.update(({ request: n, reload: o }) => ({ request: n, reload: o + 1 })), !0); }
    destroy() { this.destroyed = !0, this.unregisterOnDestroy(), this.effectRef.destroy(), this.abortInProgressLoad(), this.state.set({ extRequest: { request: void 0, reload: 0 }, status: "idle", previousStatus: "idle", stream: void 0 }); }
    loadEffect() { return ze(this, null, function* () { let t = this.extRequest(), { status: n, previousStatus: o } = tt(this.state); if (t.request === void 0)
        return; if (n !== "loading")
        return; this.abortInProgressLoad(); let r = this.resolvePendingTask = this.pendingTasks.add(), { signal: i } = this.pendingController = new AbortController; try {
        let s = yield tt(() => this.loaderFn({ params: t.request, abortSignal: i, previous: { status: o } }));
        if (i.aborted || tt(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "resolved", stream: s });
    }
    catch (s) {
        if (i.aborted || tt(this.extRequest) !== t)
            return;
        this.state.set({ extRequest: t, status: "resolved", previousStatus: "error", stream: Ut({ error: Vp(s) }, void 0) });
    }
    finally {
        r?.(), r = void 0;
    } }); }
    abortInProgressLoad() { tt(() => this.pendingController?.abort()), this.pendingController = void 0, this.resolvePendingTask?.(), this.resolvePendingTask = void 0; }
};
function KO(e) { return (t, n) => t === void 0 || n === void 0 ? t === n : e(t, n); }
function JO(e) { return XO(e) ? e.stream : t => ze(null, null, function* () { try {
    return Ut({ value: yield e.loader(t) }, void 0);
}
catch (n) {
    return Ut({ error: Vp(n) }, void 0);
} }); }
function XO(e) { return !!e.stream; }
function mC(e) { switch (e.status) {
    case "loading": return e.extRequest.reload === 0 ? "loading" : "reloading";
    case "resolved": return Fp(e.stream()) ? "resolved" : "error";
    default: return e.status;
} }
function Fp(e) { return e.error === void 0; }
function Vp(e) { return ex(e) ? e : new jp(e); }
function ex(e) { return e instanceof Error || typeof e == "object" && typeof e.name == "string" && typeof e.message == "string"; }
var Mi = class extends Error {
    constructor(t) { super(t.message, { cause: t }); }
}, jp = class extends Error {
    constructor(t) { super(String(t), { cause: t }); }
};
import { Subscription as xx } from "rxjs";
var qp = { JSACTION: "__jsaction", OWNER: "__owner" }, IC = {};
function tx(e) { return e[qp.JSACTION]; }
function yC(e, t) { e[qp.JSACTION] = t; }
function nx(e) { return IC[e]; }
function ox(e, t) { IC[e] = t; }
var M = { CLICK: "click", CLICKMOD: "clickmod", DBLCLICK: "dblclick", FOCUS: "focus", FOCUSIN: "focusin", BLUR: "blur", FOCUSOUT: "focusout", SUBMIT: "submit", KEYDOWN: "keydown", KEYPRESS: "keypress", KEYUP: "keyup", MOUSEOVER: "mouseover", MOUSEOUT: "mouseout", MOUSEENTER: "mouseenter", MOUSELEAVE: "mouseleave", POINTEROVER: "pointerover", POINTEROUT: "pointerout", POINTERENTER: "pointerenter", POINTERLEAVE: "pointerleave", ERROR: "error", LOAD: "load", TOUCHSTART: "touchstart", TOUCHEND: "touchend", TOUCHMOVE: "touchmove", TOGGLE: "toggle" }, rx = [M.MOUSEENTER, M.MOUSELEAVE, "pointerenter", "pointerleave"], ix = [M.CLICK, M.DBLCLICK, M.FOCUSIN, M.FOCUSOUT, M.KEYDOWN, M.KEYUP, M.KEYPRESS, M.MOUSEOVER, M.MOUSEOUT, M.SUBMIT, M.TOUCHSTART, M.TOUCHEND, M.TOUCHMOVE, "touchcancel", "auxclick", "change", "compositionstart", "compositionupdate", "compositionend", "beforeinput", "input", "select", "copy", "cut", "paste", "mousedown", "mouseup", "wheel", "contextmenu", "dragover", "dragenter", "dragleave", "drop", "dragstart", "dragend", "pointerdown", "pointermove", "pointerup", "pointercancel", "pointerover", "pointerout", "gotpointercapture", "lostpointercapture", "ended", "loadedmetadata", "pagehide", "pageshow", "visibilitychange", "beforematch"], DC = [M.FOCUS, M.BLUR, M.ERROR, M.LOAD, M.TOGGLE], mc = e => DC.indexOf(e) >= 0, sx = ix.concat(DC), TC = e => sx.indexOf(e) >= 0;
function ax(e) { return e === M.MOUSEENTER ? M.MOUSEOVER : e === M.MOUSELEAVE ? M.MOUSEOUT : e === M.POINTERENTER ? M.POINTEROVER : e === M.POINTERLEAVE ? M.POINTEROUT : e; }
function cx(e, t, n, o) { let r = !1; mc(t) && (r = !0); let i = typeof o == "boolean" ? { capture: r, passive: o } : r; return e.addEventListener(t, n, i), { eventType: t, handler: n, capture: r, passive: o }; }
function lx(e, t) { if (e.removeEventListener) {
    let n = typeof t.passive == "boolean" ? { capture: t.capture } : t.capture;
    e.removeEventListener(t.eventType, t.handler, n);
}
else
    e.detachEvent && e.detachEvent(`on${t.eventType}`, t.handler); }
function ux(e) { e.preventDefault ? e.preventDefault() : e.returnValue = !1; }
var vC = typeof navigator < "u" && /Macintosh/.test(navigator.userAgent);
function dx(e) { return e.which === 2 || e.which == null && e.button === 4; }
function fx(e) { return vC && e.metaKey || !vC && e.ctrlKey || dx(e) || e.shiftKey; }
function px(e, t, n) { let o = e.relatedTarget; return (e.type === M.MOUSEOVER && t === M.MOUSEENTER || e.type === M.MOUSEOUT && t === M.MOUSELEAVE || e.type === M.POINTEROVER && t === M.POINTERENTER || e.type === M.POINTEROUT && t === M.POINTERLEAVE) && (!o || o !== n && !n.contains(o)); }
function hx(e, t) { let n = {}; for (let o in e) {
    if (o === "srcElement" || o === "target")
        continue;
    let r = o, i = e[r];
    typeof i != "function" && (n[r] = i);
} return e.type === M.MOUSEOVER ? n.type = M.MOUSEENTER : e.type === M.MOUSEOUT ? n.type = M.MOUSELEAVE : e.type === M.POINTEROVER ? n.type = M.POINTERENTER : n.type = M.POINTERLEAVE, n.target = n.srcElement = t, n.bubbles = !1, n._originalEvent = e, n; }
var hc = class {
    element;
    handlerInfos = [];
    constructor(t) { this.element = t; }
    addEventListener(t, n, o) { this.handlerInfos.push(cx(this.element, t, n(this.element), o)); }
    cleanUp() { for (let t = 0; t < this.handlerInfos.length; t++)
        lx(this.element, this.handlerInfos[t]); this.handlerInfos = []; }
}, gx = { EVENT_ACTION_SEPARATOR: ":" };
function Jt(e) { return e.eventType; }
function Gp(e, t) { e.eventType = t; }
function fc(e) { return e.event; }
function CC(e, t) { e.event = t; }
function MC(e) { return e.targetElement; }
function NC(e, t) { e.targetElement = t; }
function wC(e) { return e.eic; }
function mx(e, t) { e.eic = t; }
function yx(e) { return e.timeStamp; }
function vx(e, t) { e.timeStamp = t; }
function pc(e) { return e.eia; }
function _C(e, t, n) { e.eia = [t, n]; }
function Hp(e) { e.eia = void 0; }
function dc(e) { return e[1]; }
function Ex(e) { return e.eirp; }
function SC(e, t) { e.eirp = t; }
function bC(e) { return e.eir; }
function AC(e, t) { e.eir = t; }
function RC(e) { return { eventType: e.eventType, event: e.event, targetElement: e.targetElement, eic: e.eic, eia: e.eia, timeStamp: e.timeStamp, eirp: e.eirp, eiack: e.eiack, eir: e.eir }; }
function Ix(e, t, n, o, r, i, s, a) { return { eventType: e, event: t, targetElement: n, eic: o, timeStamp: r, eia: i, eirp: s, eiack: a }; }
var Bp = class e {
    eventInfo;
    constructor(t) { this.eventInfo = t; }
    getEventType() { return Jt(this.eventInfo); }
    setEventType(t) { Gp(this.eventInfo, t); }
    getEvent() { return fc(this.eventInfo); }
    setEvent(t) { CC(this.eventInfo, t); }
    getTargetElement() { return MC(this.eventInfo); }
    setTargetElement(t) { NC(this.eventInfo, t); }
    getContainer() { return wC(this.eventInfo); }
    setContainer(t) { mx(this.eventInfo, t); }
    getTimestamp() { return yx(this.eventInfo); }
    setTimestamp(t) { vx(this.eventInfo, t); }
    getAction() { let t = pc(this.eventInfo); if (t)
        return { name: t[0], element: t[1] }; }
    setAction(t) { if (!t) {
        Hp(this.eventInfo);
        return;
    } _C(this.eventInfo, t.name, t.element); }
    getIsReplay() { return Ex(this.eventInfo); }
    setIsReplay(t) { SC(this.eventInfo, t); }
    getResolved() { return bC(this.eventInfo); }
    setResolved(t) { AC(this.eventInfo, t); }
    clone() { return new e(RC(this.eventInfo)); }
}, Dx = {}, Tx = /\s*;\s*/, Cx = M.CLICK, $p = class {
    a11yClickSupport = !1;
    clickModSupport = !0;
    syntheticMouseEventSupport;
    updateEventInfoForA11yClick = void 0;
    preventDefaultForA11yClick = void 0;
    populateClickOnlyAction = void 0;
    constructor({ syntheticMouseEventSupport: t = !1, clickModSupport: n = !0 } = {}) { this.syntheticMouseEventSupport = t, this.clickModSupport = n; }
    resolveEventType(t) { this.clickModSupport && Jt(t) === M.CLICK && fx(fc(t)) ? Gp(t, M.CLICKMOD) : this.a11yClickSupport && this.updateEventInfoForA11yClick(t); }
    resolveAction(t) { bC(t) || (this.populateAction(t, MC(t)), AC(t, !0)); }
    resolveParentAction(t) { let n = pc(t), o = n && dc(n); Hp(t); let r = o && this.getParentNode(o); r && this.populateAction(t, r); }
    populateAction(t, n) { let o = n; for (; o && o !== wC(t) && (o.nodeType === Node.ELEMENT_NODE && this.populateActionOnElement(o, t), !pc(t));)
        o = this.getParentNode(o); let r = pc(t); if (r && (this.a11yClickSupport && this.preventDefaultForA11yClick(t), this.syntheticMouseEventSupport && (Jt(t) === M.MOUSEENTER || Jt(t) === M.MOUSELEAVE || Jt(t) === M.POINTERENTER || Jt(t) === M.POINTERLEAVE)))
        if (px(fc(t), Jt(t), dc(r))) {
            let i = hx(fc(t), dc(r));
            CC(t, i), NC(t, dc(r));
        }
        else
            Hp(t); }
    getParentNode(t) { let n = t[qp.OWNER]; if (n)
        return n; let o = t.parentNode; return o?.nodeName === "#document-fragment" ? o?.host ?? null : o; }
    populateActionOnElement(t, n) { let o = this.parseActions(t), r = o[Jt(n)]; r !== void 0 && _C(n, r, t), this.a11yClickSupport && this.populateClickOnlyAction(t, n, o); }
    parseActions(t) { let n = tx(t); if (!n) {
        let o = t.getAttribute(Zn.JSACTION);
        if (!o)
            n = Dx, yC(t, n);
        else {
            if (n = nx(o), !n) {
                n = {};
                let r = o.split(Tx);
                for (let i = 0; i < r.length; i++) {
                    let s = r[i];
                    if (!s)
                        continue;
                    let a = s.indexOf(gx.EVENT_ACTION_SEPARATOR), c = a !== -1, l = c ? s.substr(0, a).trim() : Cx, u = c ? s.substr(a + 1).trim() : s;
                    n[l] = u;
                }
                ox(o, n);
            }
            yC(t, n);
        }
    } return n; }
    addA11yClickSupport(t, n, o) { this.a11yClickSupport = !0, this.updateEventInfoForA11yClick = t, this.preventDefaultForA11yClick = n, this.populateClickOnlyAction = o; }
}, kC = (function (e) { return e[e.I_AM_THE_JSACTION_FRAMEWORK = 0] = "I_AM_THE_JSACTION_FRAMEWORK", e; })(kC || {}), Up = class {
    dispatchDelegate;
    actionResolver;
    eventReplayer;
    eventReplayScheduled = !1;
    replayEventInfoWrappers = [];
    constructor(t, { actionResolver: n, eventReplayer: o } = {}) { this.dispatchDelegate = t, this.actionResolver = n, this.eventReplayer = o; }
    dispatch(t) { let n = new Bp(t); this.actionResolver?.resolveEventType(t), this.actionResolver?.resolveAction(t); let o = n.getAction(); if (o && Mx(o.element, n) && ux(n.getEvent()), this.eventReplayer && n.getIsReplay()) {
        this.scheduleEventInfoWrapperReplay(n);
        return;
    } this.dispatchDelegate(n); }
    scheduleEventInfoWrapperReplay(t) { this.replayEventInfoWrappers.push(t), !this.eventReplayScheduled && (this.eventReplayScheduled = !0, Promise.resolve().then(() => { this.eventReplayScheduled = !1, this.eventReplayer(this.replayEventInfoWrappers); })); }
};
function Mx(e, t) { return e.tagName === "A" && (t.getEventType() === M.CLICK || t.getEventType() === M.CLICKMOD); }
var OC = Symbol.for("propagationStopped"), Wp = { REPLAY: 101 };
var Nx = "`preventDefault` called during event replay.";
var wx = "`composedPath` called during event replay.", gc = class {
    dispatchDelegate;
    clickModSupport;
    actionResolver;
    dispatcher;
    constructor(t, n = !0) { this.dispatchDelegate = t, this.clickModSupport = n, this.actionResolver = new $p({ clickModSupport: n }), this.dispatcher = new Up(o => { this.dispatchToDelegate(o); }, { actionResolver: this.actionResolver }); }
    dispatch(t) { this.dispatcher.dispatch(t); }
    dispatchToDelegate(t) { for (t.getIsReplay() && bx(t), _x(t); t.getAction();) {
        if (Ax(t), mc(t.getEventType()) && t.getAction().element !== t.getTargetElement() || (this.dispatchDelegate(t.getEvent(), t.getAction().name), Sx(t)))
            return;
        this.actionResolver.resolveParentAction(t.eventInfo);
    } }
};
function _x(e) { let t = e.getEvent(), n = e.getEvent().stopPropagation.bind(t), o = () => { t[OC] = !0, n(); }; Ln(t, "stopPropagation", o), Ln(t, "stopImmediatePropagation", o); }
function Sx(e) { return !!e.getEvent()[OC]; }
function bx(e) { let t = e.getEvent(), n = e.getTargetElement(), o = t.preventDefault.bind(t); Ln(t, "target", n), Ln(t, "eventPhase", Wp.REPLAY), Ln(t, "preventDefault", () => { throw o(), new Error(Nx + ""); }), Ln(t, "composedPath", () => { throw new Error(wx + ""); }); }
function Ax(e) { let t = e.getEvent(), n = e.getAction()?.element; n && Ln(t, "currentTarget", n, { configurable: !0 }); }
function Ln(e, t, n, { configurable: o = !1 } = {}) { Object.defineProperty(e, t, { value: n, configurable: o }); }
function xC(e, t) { e.ecrd(n => { t.dispatch(n); }, kC.I_AM_THE_JSACTION_FRAMEWORK); }
function Rx(e) { return e?.q ?? []; }
function kx(e) { e && (EC(e.c, e.et, e.h), EC(e.c, e.etc, e.h, !0)); }
function EC(e, t, n, o) { for (let r = 0; r < t.length; r++)
    e.removeEventListener(t[r], n, o); }
var Ox = !1, PC = (() => { class e {
    static MOUSE_SPECIAL_SUPPORT = Ox;
    containerManager;
    eventHandlers = {};
    browserEventTypeToExtraEventTypes = {};
    dispatcher = null;
    queuedEventInfos = [];
    constructor(n) { this.containerManager = n; }
    handleEvent(n, o, r) { let i = Ix(n, o, o.target, r, Date.now()); this.handleEventInfo(i); }
    handleEventInfo(n) { if (!this.dispatcher) {
        SC(n, !0), this.queuedEventInfos?.push(n);
        return;
    } this.dispatcher(n); }
    addEvent(n, o, r) { if (n in this.eventHandlers || !this.containerManager || !e.MOUSE_SPECIAL_SUPPORT && rx.indexOf(n) >= 0)
        return; let i = (a, c, l) => { this.handleEvent(a, c, l); }; this.eventHandlers[n] = i; let s = ax(o || n); if (s !== n) {
        let a = this.browserEventTypeToExtraEventTypes[s] || [];
        a.push(n), this.browserEventTypeToExtraEventTypes[s] = a;
    } this.containerManager.addEventListener(s, a => c => { i(n, c, a); }, r); }
    replayEarlyEvents(n = window._ejsa) { n && (this.replayEarlyEventInfos(n.q), kx(n), delete window._ejsa); }
    replayEarlyEventInfos(n) { for (let o = 0; o < n.length; o++) {
        let r = n[o], i = this.getEventTypesForBrowserEventType(r.eventType);
        for (let s = 0; s < i.length; s++) {
            let a = RC(r);
            Gp(a, i[s]), this.handleEventInfo(a);
        }
    } }
    getEventTypesForBrowserEventType(n) { let o = []; return this.eventHandlers[n] && o.push(n), this.browserEventTypeToExtraEventTypes[n] && o.push(...this.browserEventTypeToExtraEventTypes[n]), o; }
    handler(n) { return this.eventHandlers[n]; }
    cleanUp() { this.containerManager?.cleanUp(), this.containerManager = null, this.eventHandlers = {}, this.browserEventTypeToExtraEventTypes = {}, this.dispatcher = null, this.queuedEventInfos = []; }
    registerDispatcher(n, o) { this.ecrd(n, o); }
    ecrd(n, o) { if (this.dispatcher = n, this.queuedEventInfos?.length) {
        for (let r = 0; r < this.queuedEventInfos.length; r++)
            this.handleEventInfo(this.queuedEventInfos[r]);
        this.queuedEventInfos = null;
    } }
} return e; })();
function LC(e, t = window) { return Rx(t._ejsas?.[e]); }
function zp(e, t = window) { t._ejsas && (t._ejsas[e] = void 0); }
import "@angular/core/primitives/signals";
import "rxjs/operators";
import "@angular/core/primitives/di";
typeof globalThis.ngServerMode > "u" && (globalThis.ngServerMode = typeof window > "u");
var Cc = Symbol("InputSignalNode#UNSET"), oM = we(z({}, Sc), { transformFn: void 0, applyValueToInputSignal(e, t) { _c(e, t); } }), NF = Symbol();
function rM(e, t) { let n = Object.create(oM); n.value = e, n.transformFn = t?.transform; function o() { if (bi(n), n.value === Cc) {
    let r = null;
    throw new D(-950, r);
} return n.value; } return o[ae] = n, o; }
var Bo = (function (e) { return e[e.Directive = 0] = "Directive", e[e.Component = 1] = "Component", e[e.Injectable = 2] = "Injectable", e[e.Pipe = 3] = "Pipe", e[e.NgModule = 4] = "NgModule", e; })(Bo || {});
var Px = (function (e) { return e.Angular = "angular", e.ACX = "acx", e.Wiz = "wiz", e; })(Px || {}), FC = class {
    attributeName;
    constructor(t) { this.attributeName = t; }
    __NG_ELEMENT_ID__ = () => aa(this.attributeName);
    toString() { return `HostAttributeToken ${this.attributeName}`; }
}, wF = (() => { let e = new C(""); return e.__NG_ELEMENT_ID__ = t => { let n = _(); if (n === null)
    throw new D(-204, !1); if (n.type & 2)
    return n.value; if (t & 8)
    return null; throw new D(-204, !1); }, e; })();
function _F(e) { return new Ci; }
function jC(e, t) { return rM(e, t); }
function Lx(e) { return rM(Cc, e); }
var SF = (jC.required = Lx, jC);
function VC(e, t) { return Nf(t); }
function Fx(e, t) { return wf(t); }
var bF = (VC.required = Fx, VC);
function AF(e, t) { return _f(t); }
function HC(e, t) { return Nf(t); }
function jx(e, t) { return wf(t); }
var RF = (HC.required = jx, HC);
function kF(e, t) { return _f(t); }
function iM(e, t) { let n = Object.create(oM), o = new Ci; n.value = e; function r() { return bi(n), BC(n.value), n.value; } return r[ae] = n, r.asReadonly = Wn.bind(r), r.set = i => { n.equal(n.value, i) || (_c(n, i), o.emit(i)); }, r.update = i => { BC(n.value), r.set(i(n.value)); }, r.subscribe = o.subscribe.bind(o), r.destroyRef = o.destroyRef, r; }
function BC(e) { if (e === Cc)
    throw new D(952, !1); }
function $C(e, t) { return iM(e, t); }
function Vx(e) { return iM(Cc, e); }
var OF = ($C.required = Vx, $C), sM = !0, Uo = class {
}, xF = wt("ContentChildren", (e, t = {}) => z({ selector: e, first: !1, isViewQuery: !1, descendants: !1, emitDistinctChangesOnly: sM }, t), Uo), PF = wt("ContentChild", (e, t = {}) => z({ selector: e, first: !0, isViewQuery: !1, descendants: !0 }, t), Uo), LF = wt("ViewChildren", (e, t = {}) => z({ selector: e, first: !1, isViewQuery: !0, descendants: !0, emitDistinctChangesOnly: sM }, t), Uo), FF = wt("ViewChild", (e, t) => z({ selector: e, first: !0, isViewQuery: !0, descendants: !0 }, t), Uo);
function Hx(e, t, n) { let o = new vo(n); return Promise.resolve(o); }
function UC(e) { for (let t = e.length - 1; t >= 0; t--)
    if (e[t] !== void 0)
        return e[t]; }
var Bx = (() => { class e {
    zone = v(q);
    changeDetectionScheduler = v(xe);
    applicationRef = v(Ge);
    applicationErrorHandler = v(It);
    _onMicrotaskEmptySubscription;
    initialize() { this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({ next: () => { this.changeDetectionScheduler.runningTick || this.zone.run(() => { try {
            this.applicationRef.dirtyFlags |= 1, this.applicationRef._tick();
        }
        catch (n) {
            this.applicationErrorHandler(n);
        } }); } })); }
    ngOnDestroy() { this._onMicrotaskEmptySubscription?.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })(), $x = new C("", { factory: () => !1 });
function Ux({ ngZoneFactory: e, scheduleInRootZone: t }) { return e ??= () => new q(we(z({}, aM()), { scheduleInRootZone: t })), [{ provide: Qn, useValue: !1 }, { provide: q, useFactory: e }, { provide: Fe, multi: !0, useFactory: () => { let n = v(Bx, { optional: !0 }); return () => n.initialize(); } }, { provide: Fe, multi: !0, useFactory: () => { let n = v(qx); return () => { n.initialize(); }; } }, { provide: cs, useValue: t ?? Ll }]; }
function jF(e) { let t = e?.scheduleInRootZone, n = Ux({ ngZoneFactory: () => { let o = aM(e); return o.scheduleInRootZone = t, o.shouldCoalesceEventChangeDetection && J("NgZone_CoalesceEvent"), new q(o); }, scheduleInRootZone: t }); return Ye([{ provide: $x, useValue: !0 }, n]); }
function aM(e) { return { enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1, shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1 }; }
var qx = (() => { class e {
    subscription = new xx;
    initialized = !1;
    zone = v(q);
    pendingTasks = v(Et);
    initialize() { if (this.initialized)
        return; this.initialized = !0; let n = null; !this.zone.isStable && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (n = this.pendingTasks.add()), this.zone.runOutsideAngular(() => { this.subscription.add(this.zone.onStable.subscribe(() => { q.assertNotInAngularZone(), queueMicrotask(() => { n !== null && !this.zone.hasPendingMacrotasks && !this.zone.hasPendingMicrotasks && (this.pendingTasks.remove(n), n = null); }); })); }), this.subscription.add(this.zone.onUnstable.subscribe(() => { q.assertInAngularZone(), n ??= this.pendingTasks.add(); })); }
    ngOnDestroy() { this.subscription.unsubscribe(); }
    static \u0275fac = function (o) { return new (o || e); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "root" });
} return e; })();
var vc = new C(""), Gx = new C("");
function Ni(e) { return !e.moduleRef; }
function cM(e) { let t = Ni(e) ? e.r3Injector : e.moduleRef.injector, n = t.get(q); return n.run(() => { Ni(e) ? e.r3Injector.resolveInjectorInitializers() : e.moduleRef.resolveInjectorInitializers(); let o = t.get(It), r; if (n.runOutsideAngular(() => { r = n.onError.subscribe({ next: o }); }), Ni(e)) {
    let i = () => t.destroy(), s = e.platformInjector.get(vc);
    s.add(i), t.onDestroy(() => { r.unsubscribe(), s.delete(i); });
}
else {
    let i = () => e.moduleRef.destroy(), s = e.platformInjector.get(vc);
    s.add(i), e.moduleRef.onDestroy(() => { Nr(e.allPlatformModules, e.moduleRef), r.unsubscribe(), s.delete(i); });
} return zx(o, n, () => { let i = t.get(Et), s = i.add(), a = t.get(Uf); return a.runInitializers(), a.donePromise.then(() => { let c = t.get(Op, Ii); if (cD(c || Ii), !t.get(Gx, !0))
    return Ni(e) ? t.get(Ge) : (e.allPlatformModules.push(e.moduleRef), e.moduleRef); if (Ni(e)) {
    let u = t.get(Ge);
    return e.rootComponent !== void 0 && u.bootstrap(e.rootComponent), u;
}
else
    return lM?.(e.moduleRef, e.allPlatformModules), e.moduleRef; }).finally(() => { i.remove(s); }); }); }); }
var lM;
function qC() { lM = Wx; }
function Wx(e, t) { let n = e.injector.get(Ge); if (e._bootstrapComponents.length > 0)
    e._bootstrapComponents.forEach(o => n.bootstrap(o));
else if (e.instance.ngDoBootstrap)
    e.instance.ngDoBootstrap(n);
else
    throw new D(-403, !1); t.push(e); }
function zx(e, t, n) { try {
    let o = n();
    return Bf(o) ? o.catch(r => { throw t.runOutsideAngular(() => e(r)), r; }) : o;
}
catch (o) {
    throw t.runOutsideAngular(() => e(o)), o;
} }
var uM = (() => { class e {
    _injector;
    _modules = [];
    _destroyListeners = [];
    _destroyed = !1;
    constructor(n) { this._injector = n; }
    bootstrapModuleFactory(n, o) { let r = [lc(), ...o?.applicationProviders ?? [], Bl], i = $E(n.moduleType, this.injector, r); return qC(), cM({ moduleRef: i, allPlatformModules: this._modules, platformInjector: this.injector }); }
    bootstrapModule(n, o = []) { let r = Gf({}, o); return qC(), Hx(this.injector, r, n).then(i => this.bootstrapModuleFactory(i, r)); }
    onDestroy(n) { this._destroyListeners.push(n); }
    get injector() { return this._injector; }
    destroy() { if (this._destroyed)
        throw new D(404, !1); this._modules.slice().forEach(o => o.destroy()), this._destroyListeners.forEach(o => o()); let n = this._injector.get(vc, null); n && (n.forEach(o => o()), n.clear()), this._destroyed = !0; }
    get destroyed() { return this._destroyed; }
    static \u0275fac = function (o) { return new (o || e)(pe(ce)); };
    static \u0275prov = B({ token: e, factory: e.\u0275fac, providedIn: "platform" });
} return e; })(), $o = null;
function Qx(e) { if (Mc())
    throw new D(400, !1); qf(), $o = typeof ngServerMode > "u" || !ngServerMode ? e : null; let t = e.get(uM); return fM(e), t; }
function Zx(e, t, n = []) { let o = `Platform: ${t}`, r = new C(o); return (i = []) => { let s = Mc(); if (!s) {
    let a = [...n, ...i, { provide: r, useValue: !0 }];
    s = e?.(a) ?? Qx(dM(a, o));
} return typeof ngServerMode < "u" && ngServerMode ? s : Yx(r); }; }
function dM(e = [], t) { return ce.create({ name: t, providers: [{ provide: ol, useValue: "platform" }, { provide: vc, useValue: new Set([() => $o = null]) }, ...e] }); }
function Yx(e) { let t = Mc(); if (!t)
    throw new D(-401, !1); return t; }
function Mc() { return typeof ngServerMode < "u" && ngServerMode ? null : $o?.get(uM) ?? null; }
function VF() { Mc()?.destroy(); }
function Kx(e = []) { if ($o)
    return $o; let t = dM(e); return (typeof ngServerMode > "u" || !ngServerMode) && ($o = t), qf(), fM(t), t; }
function HF(e) { return { provide: Ed, useValue: e, multi: !0 }; }
function fM(e) { let t = e.get(Ed, null); Zi(e, () => { t?.forEach(n => n()); }); }
function BF(e) { return Ye([]); }
function $F() { return !1; }
function UF() { }
var yc = new WeakSet, GC = "";
function WC(e) { return e.get(ma, Nd); }
function Jx() { let e = [{ provide: ma, useFactory: () => { let t = !0; if (typeof ngServerMode > "u" || !ngServerMode) {
            let n = v(_t);
            t = !!window._ejsas?.[n];
        } return t && J("NgEventReplay"), t; } }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Fe, useValue: () => { let t = v(Ge), { injector: n } = t; if (!yc.has(t)) {
        let o = v(si);
        if (WC(n)) {
            ay();
            let r = n.get(_t), i = iy(r, (s, a, c) => { s.nodeType === Node.ELEMENT_NODE && (ry(s, a, c), Sd(s, o)); });
            t.onDestroy(i);
        }
    } }, multi: !0 }, { provide: yi, useFactory: () => { let t = v(Ge), { injector: n } = t; return () => { if (!WC(n) || yc.has(t))
        return; yc.add(t); let o = n.get(_t); t.onDestroy(() => { yc.delete(t), typeof ngServerMode < "u" && !ngServerMode && zp(o); }), t.whenStable().then(() => { if (t.destroyed)
        return; let r = n.get(Ad); Xx(r, n); let i = n.get(si); i.get(GC)?.forEach(bd), i.delete(GC); let s = r.instance; ai(n) ? t.onDestroy(() => s.cleanUp()) : s.cleanUp(); }); }; }, multi: !0 }), e; }
var Xx = (e, t) => { let n = t.get(_t), o = window._ejsas[n], r = e.instance = new PC(new hc(o.c)); for (let a of o.et)
    r.addEvent(a); for (let a of o.etc)
    r.addEvent(a); let i = LC(n); r.replayEarlyEventInfos(i), zp(n); let s = new gc(a => { tP(t, a, a.currentTarget); }); xC(r, s); };
function eP(e, t, n) { let o = new Map, r = t[Lt], i = e.cleanup; if (!i || !r)
    return o; for (let s = 0; s < i.length;) {
    let a = i[s++], c = i[s++];
    if (typeof a != "string")
        continue;
    let l = a;
    if (!TC(l))
        continue;
    mc(l) ? n.capture.add(l) : n.regular.add(l);
    let u = O(t[c]);
    s++;
    let d = i[s++];
    (typeof d == "boolean" || d >= 0) && (o.has(u) ? o.get(u).push(l) : o.set(u, [l]));
} return o; }
function tP(e, t, n) { let o = (n && n.getAttribute(So)) ?? ""; /d\d+/.test(o) ? nP(o, e, t, n) : t.eventPhase === Wp.REPLAY && Rd(t, n); }
function nP(e, t, n, o) { let r = t.get(ey); r.push({ event: n, currentTarget: o }), Rt(t, e, oP(r)); }
function oP(e) { return t => { let n = new Set(t), o = []; for (let { event: r, currentTarget: i } of e) {
    let s = i.getAttribute(So);
    n.has(s) ? Rd(r, i) : o.push({ event: r, currentTarget: i });
} e.length = 0, e.push(...o); }; }
var zC = !1, QC = !1, ZC = !1, rP = 1e4;
function iP() { zC || (zC = !0, py(), tD(), WD(), nD(), tI(), SE(), rE(), Dv()); }
function sP() { QC || (QC = !0, uD(), Zv(), eE()); }
function aP() { ZC || (ZC = !0, Ty()); }
function cP(e) { return e.whenStable(); }
var qF = "ngcm";
function GF() { let e = [{ provide: Rn, useFactory: () => { let t = !0; return (typeof ngServerMode > "u" || !ngServerMode) && (t = !!v(No, { optional: !0 })?.get(ya, null)), t && J("NgHydration"), t; } }, { provide: Fe, useValue: () => { if (hf(!1), typeof ngServerMode < "u" && ngServerMode)
            return; let t = v($t); v(Rn) && (My(t), iP()); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: Cd, useFactory: () => v(Rn) }, { provide: yi, useFactory: () => { let t = v(xe); if (v(Rn)) {
        let n = v(Ge);
        return () => { cP(n).then(() => { n.destroyed || (gf(n), t.notify(7)); }); };
    } return () => { }; }, multi: !0 }), Ye(e); }
function WF() { return [{ provide: Md, useFactory: () => v(Rn) }, { provide: Fe, useValue: () => { v(Rn) && (sP(), hf(!0), J("NgI18nHydration")); }, multi: !0 }]; }
function zF() { let e = [Jx(), { provide: wd, useValue: !0 }, { provide: St, useClass: cy }, { provide: Fe, useValue: () => { aP(), J("NgIncrementalHydration"); }, multi: !0 }]; return (typeof ngServerMode > "u" || !ngServerMode) && e.push({ provide: yi, useFactory: () => { let t = v(ce), n = v($t); return () => { let o = Cy(t), r = Wv(n, n.body); MI(t, o, r), Iy(n, t); }; }, multi: !0 }), e; }
var YC = rP - 1e3, Yp = class {
    openTasks = new Map;
    add(t) { this.openTasks.set(t, new Error("Task stack tracking error")); }
    remove(t) { this.openTasks.delete(t); }
};
function QF() { let e = new Yp, { openTasks: t } = e; return Ye([{ provide: Fl, useValue: e }, vI(() => { console.warn("Stability debugging utility was provided in production mode. This will cause debug code to be included in production bundles. If this is intentional because you are debugging stability issues in a production environment, you can ignore this warning."); let n = v(q), o = v(Ge), r = null; typeof Zone < "u" && n.run(() => { r = Zone.current.get("TaskTrackingZone"); }), n.runOutsideAngular(() => { let i = setTimeout(() => { if (console.debug(`---- Application did not stabilize within ${YC / 1e3} seconds ----`), typeof Zone < "u" && !r && console.info('Zone.js is present but no TaskTrackingZone found. To enable better debugging of tasks in the Angular Zone, import "zone.js/plugins/task-tracking" in your application.'), r?.macroTasks?.length) {
        console.group("Macrotasks keeping Angular Zone unstable:");
        for (let s of r?.macroTasks ?? [])
            console.debug(s.creationLocation.stack);
        console.groupEnd();
    } console.group("PendingTasks keeping application unstable:"); for (let s of t.values())
        console.debug(s.stack); console.groupEnd(); }, YC); o.whenStable().then(() => { clearTimeout(i); }); }); })]); }
function ZF(e) { let t = bf(e); if (!t)
    throw pM(e); return new vo(t); }
function YF(e) { let t = bf(e); if (!t)
    throw pM(e); return t; }
function pM(e) { return new D(920, !1); }
var lP = (() => { class e {
    static __NG_ELEMENT_ID__ = uP;
} return e; })();
function uP(e) { return dP(_(), g(), (e & 16) === 16); }
function dP(e, t, n) { if (De(e) && !n) {
    let o = ye(e.index, t);
    return new Zt(o, o);
}
else if (e.type & 175) {
    let o = t[ee];
    return new Zt(o, t);
} return null; }
var Kp = class extends lP {
}, KC = class extends Kp {
}, Ec = class {
    supports(t) { return qr(t); }
    create(t) { return new Jp(t); }
}, fP = (e, t) => t, Jp = class {
    length = 0;
    collection;
    _linkedRecords = null;
    _unlinkedRecords = null;
    _previousItHead = null;
    _itHead = null;
    _itTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _movesHead = null;
    _movesTail = null;
    _removalsHead = null;
    _removalsTail = null;
    _identityChangesHead = null;
    _identityChangesTail = null;
    _trackByFn;
    constructor(t) { this._trackByFn = t || fP; }
    forEachItem(t) { let n; for (n = this._itHead; n !== null; n = n._next)
        t(n); }
    forEachOperation(t) { let n = this._itHead, o = this._removalsHead, r = 0, i = null; for (; n || o;) {
        let s = !o || n && n.currentIndex < JC(o, r, i) ? n : o, a = JC(s, r, i), c = s.currentIndex;
        if (s === o)
            r--, o = o._nextRemoved;
        else if (n = n._next, s.previousIndex == null)
            r++;
        else {
            i || (i = []);
            let l = a - r, u = c - r;
            if (l != u) {
                for (let f = 0; f < l; f++) {
                    let p = f < i.length ? i[f] : i[f] = 0, h = p + f;
                    u <= h && h < l && (i[f] = p + 1);
                }
                let d = s.previousIndex;
                i[d] = u - l;
            }
        }
        a !== c && t(s, a, c);
    } }
    forEachPreviousItem(t) { let n; for (n = this._previousItHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachMovedItem(t) { let n; for (n = this._movesHead; n !== null; n = n._nextMoved)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    forEachIdentityChange(t) { let n; for (n = this._identityChangesHead; n !== null; n = n._nextIdentityChange)
        t(n); }
    diff(t) { if (t == null && (t = []), !qr(t))
        throw new D(900, !1); return this.check(t) ? this : null; }
    onDestroy() { }
    check(t) { this._reset(); let n = this._itHead, o = !1, r, i, s; if (Array.isArray(t)) {
        this.length = t.length;
        for (let a = 0; a < this.length; a++)
            i = t[a], s = this._trackByFn(a, i), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, i, s, a), o = !0) : (o && (n = this._verifyReinsertion(n, i, s, a)), Object.is(n.item, i) || this._addIdentityChange(n, i)), n = n._next;
    }
    else
        r = 0, pE(t, a => { s = this._trackByFn(r, a), n === null || !Object.is(n.trackById, s) ? (n = this._mismatch(n, a, s, r), o = !0) : (o && (n = this._verifyReinsertion(n, a, s, r)), Object.is(n.item, a) || this._addIdentityChange(n, a)), n = n._next, r++; }), this.length = r; return this._truncate(n), this.collection = t, this.isDirty; }
    get isDirty() { return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null; }
    _reset() { if (this.isDirty) {
        let t;
        for (t = this._previousItHead = this._itHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._additionsHead; t !== null; t = t._nextAdded)
            t.previousIndex = t.currentIndex;
        for (this._additionsHead = this._additionsTail = null, t = this._movesHead; t !== null; t = t._nextMoved)
            t.previousIndex = t.currentIndex;
        this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
    } }
    _mismatch(t, n, o, r) { let i; return t === null ? i = this._itTail : (i = t._prev, this._remove(t)), t = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, i, r)) : (t = this._linkedRecords === null ? null : this._linkedRecords.get(o, r), t !== null ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, i, r)) : t = this._addAfter(new Xp(n, o), i, r)), t; }
    _verifyReinsertion(t, n, o, r) { let i = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(o, null); return i !== null ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t; }
    _truncate(t) { for (; t !== null;) {
        let n = t._next;
        this._addToRemovals(this._unlink(t)), t = n;
    } this._unlinkedRecords !== null && this._unlinkedRecords.clear(), this._additionsTail !== null && (this._additionsTail._nextAdded = null), this._movesTail !== null && (this._movesTail._nextMoved = null), this._itTail !== null && (this._itTail._next = null), this._removalsTail !== null && (this._removalsTail._nextRemoved = null), this._identityChangesTail !== null && (this._identityChangesTail._nextIdentityChange = null); }
    _reinsertAfter(t, n, o) { this._unlinkedRecords !== null && this._unlinkedRecords.remove(t); let r = t._prevRemoved, i = t._nextRemoved; return r === null ? this._removalsHead = i : r._nextRemoved = i, i === null ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _moveAfter(t, n, o) { return this._unlink(t), this._insertAfter(t, n, o), this._addToMoves(t, o), t; }
    _addAfter(t, n, o) { return this._insertAfter(t, n, o), this._additionsTail === null ? this._additionsTail = this._additionsHead = t : this._additionsTail = this._additionsTail._nextAdded = t, t; }
    _insertAfter(t, n, o) { let r = n === null ? this._itHead : n._next; return t._next = r, t._prev = n, r === null ? this._itTail = t : r._prev = t, n === null ? this._itHead = t : n._next = t, this._linkedRecords === null && (this._linkedRecords = new Ic), this._linkedRecords.put(t), t.currentIndex = o, t; }
    _remove(t) { return this._addToRemovals(this._unlink(t)); }
    _unlink(t) { this._linkedRecords !== null && this._linkedRecords.remove(t); let n = t._prev, o = t._next; return n === null ? this._itHead = o : n._next = o, o === null ? this._itTail = n : o._prev = n, t; }
    _addToMoves(t, n) { return t.previousIndex === n || (this._movesTail === null ? this._movesTail = this._movesHead = t : this._movesTail = this._movesTail._nextMoved = t), t; }
    _addToRemovals(t) { return this._unlinkedRecords === null && (this._unlinkedRecords = new Ic), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, this._removalsTail === null ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
    _addIdentityChange(t, n) { return t.item = n, this._identityChangesTail === null ? this._identityChangesTail = this._identityChangesHead = t : this._identityChangesTail = this._identityChangesTail._nextIdentityChange = t, t; }
}, Xp = class {
    item;
    trackById;
    currentIndex = null;
    previousIndex = null;
    _nextPrevious = null;
    _prev = null;
    _next = null;
    _prevDup = null;
    _nextDup = null;
    _prevRemoved = null;
    _nextRemoved = null;
    _nextAdded = null;
    _nextMoved = null;
    _nextIdentityChange = null;
    constructor(t, n) { this.item = t, this.trackById = n; }
}, eh = class {
    _head = null;
    _tail = null;
    add(t) { this._head === null ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
    get(t, n) { let o; for (o = this._head; o !== null; o = o._nextDup)
        if ((n === null || n <= o.currentIndex) && Object.is(o.trackById, t))
            return o; return null; }
    remove(t) { let n = t._prevDup, o = t._nextDup; return n === null ? this._head = o : n._nextDup = o, o === null ? this._tail = n : o._prevDup = n, this._head === null; }
}, Ic = class {
    map = new Map;
    put(t) { let n = t.trackById, o = this.map.get(n); o || (o = new eh, this.map.set(n, o)), o.add(t); }
    get(t, n) { let o = t, r = this.map.get(o); return r ? r.get(t, n) : null; }
    remove(t) { let n = t.trackById; return this.map.get(n).remove(t) && this.map.delete(n), t; }
    get isEmpty() { return this.map.size === 0; }
    clear() { this.map.clear(); }
};
function JC(e, t, n) { let o = e.previousIndex; if (o === null)
    return o; let r = 0; return n && o < n.length && (r = n[o]), o + t + r; }
var Dc = class {
    supports(t) { return t instanceof Map || Qa(t); }
    create() { return new th; }
}, th = class {
    _records = new Map;
    _mapHead = null;
    _appendAfter = null;
    _previousMapHead = null;
    _changesHead = null;
    _changesTail = null;
    _additionsHead = null;
    _additionsTail = null;
    _removalsHead = null;
    get isDirty() { return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null; }
    forEachItem(t) { let n; for (n = this._mapHead; n !== null; n = n._next)
        t(n); }
    forEachPreviousItem(t) { let n; for (n = this._previousMapHead; n !== null; n = n._nextPrevious)
        t(n); }
    forEachChangedItem(t) { let n; for (n = this._changesHead; n !== null; n = n._nextChanged)
        t(n); }
    forEachAddedItem(t) { let n; for (n = this._additionsHead; n !== null; n = n._nextAdded)
        t(n); }
    forEachRemovedItem(t) { let n; for (n = this._removalsHead; n !== null; n = n._nextRemoved)
        t(n); }
    diff(t) { if (!t)
        t = new Map;
    else if (!(t instanceof Map || Qa(t)))
        throw new D(900, !1); return this.check(t) ? this : null; }
    check(t) { this._reset(); let n = this._mapHead; if (this._appendAfter = null, this._forEach(t, (o, r) => { if (n && n.key === r)
        this._maybeAddToChanges(n, o), this._appendAfter = n, n = n._next;
    else {
        let i = this._getOrCreateRecordForKey(r, o);
        n = this._insertBeforeOrAppend(n, i);
    } }), n) {
        n._prev && (n._prev._next = null), this._removalsHead = n;
        for (let o = n; o !== null; o = o._nextRemoved)
            o === this._mapHead && (this._mapHead = null), this._records.delete(o.key), o._nextRemoved = o._next, o.previousValue = o.currentValue, o.currentValue = null, o._prev = null, o._next = null;
    } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
    _insertBeforeOrAppend(t, n) { if (t) {
        let o = t._prev;
        return n._next = t, n._prev = o, t._prev = n, o && (o._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t;
    } return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null; }
    _getOrCreateRecordForKey(t, n) { if (this._records.has(t)) {
        let r = this._records.get(t);
        this._maybeAddToChanges(r, n);
        let i = r._prev, s = r._next;
        return i && (i._next = s), s && (s._prev = i), r._next = null, r._prev = null, r;
    } let o = new nh(t); return this._records.set(t, o), o.currentValue = n, this._addToAdditions(o), o; }
    _reset() { if (this.isDirty) {
        let t;
        for (this._previousMapHead = this._mapHead, t = this._previousMapHead; t !== null; t = t._next)
            t._nextPrevious = t._next;
        for (t = this._changesHead; t !== null; t = t._nextChanged)
            t.previousValue = t.currentValue;
        for (t = this._additionsHead; t != null; t = t._nextAdded)
            t.previousValue = t.currentValue;
        this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
    } }
    _maybeAddToChanges(t, n) { Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t)); }
    _addToAdditions(t) { this._additionsHead === null ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
    _addToChanges(t) { this._changesHead === null ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
    _forEach(t, n) { t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(o => n(t[o], o)); }
}, nh = class {
    key;
    previousValue = null;
    currentValue = null;
    _nextPrevious = null;
    _next = null;
    _prev = null;
    _nextAdded = null;
    _nextRemoved = null;
    _nextChanged = null;
    constructor(t) { this.key = t; }
};
function XC() { return new hM([new Ec]); }
var hM = (() => { class e {
    factories;
    static \u0275prov = B({ token: e, providedIn: "root", factory: XC });
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o != null) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = v(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || XC()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o != null)
        return o; throw new D(901, !1); }
} return e; })();
function eM() { return new gM([new Dc]); }
var gM = (() => { class e {
    static \u0275prov = B({ token: e, providedIn: "root", factory: eM });
    factories;
    constructor(n) { this.factories = n; }
    static create(n, o) { if (o) {
        let r = o.factories.slice();
        n = n.concat(r);
    } return new e(n); }
    static extend(n) { return { provide: e, useFactory: () => { let o = v(e, { optional: !0, skipSelf: !0 }); return e.create(n, o || eM()); } }; }
    find(n) { let o = this.factories.find(r => r.supports(n)); if (o)
        return o; throw new D(901, !1); }
} return e; })(), pP = [new Dc], hP = [new Ec], KF = new hM(hP), JF = new gM(pP), XF = Zx(null, "core", []), e1 = (() => { class e {
    constructor(n) { }
    static \u0275fac = function (o) { return new (o || e)(pe(Ge)); };
    static \u0275mod = Rf({ type: e });
    static \u0275inj = tr({});
} return e; })();
function t1(e) { let { rootComponent: t, appProviders: n, platformProviders: o, platformRef: r } = e; if (V(x.BootstrapApplicationStart), typeof ngServerMode < "u" && ngServerMode && !r)
    throw new D(-401, !1); try {
    let i = r?.injector ?? Kx(o), s = [lc(), Bl, ...n || []], a = new Wr({ providers: s, parent: i, debugName: "", runEnvironmentInitializers: !1 });
    return cM({ r3Injector: a.injector, platformInjector: i, rootComponent: t });
}
catch (i) {
    return Promise.reject(i);
}
finally {
    V(x.BootstrapApplicationEnd);
} }
var oh = class {
    views = [];
    indexByContent = new Map;
    add(t) { let n = JSON.stringify(t); if (!this.indexByContent.has(n)) {
        let o = this.views.length;
        return this.views.push(t), this.indexByContent.set(n, o), o;
    } return this.indexByContent.get(n); }
    getAll() { return this.views; }
}, gP = 0;
function mM(e) { return e.ssrId || (e.ssrId = `t${gP++}`), e.ssrId; }
function yM(e, t, n) { let o = []; return po(e, t, n, o), o.length; }
function mP(e) { let t = []; return Ha(e, t), t.length; }
function vM(e, t) { let n = e[$]; return n && !n.hasAttribute(An) ? Tc(n, e, null, t) : null; }
function EM(e, t) { let n = dr(e[$]), o = vM(n, t); if (o === null)
    return; let r = O(n[$]), i = e[Q], s = Tc(r, i, null, t), a = n[w], c = `${o}|${s}`; a.setAttribute(r, io, c); }
function n1(e, t) { let n = e.injector, o = Yv(n), r = ai(n), i = new oh, s = new Map, a = e._views, c = n.get(ma, Nd), l = { regular: new Set, capture: new Set }, u = new Map; e.injector.get(_t); for (let p of a) {
    let h = kd(p);
    if (h !== null) {
        let y = { serializedViewCollection: i, corruptedTextNodes: s, isI18nHydrationEnabled: o, isIncrementalHydrationEnabled: r, i18nChildren: new Map, eventTypesToReplay: l, shouldReplayEvents: c, deferBlocks: u };
        K(h) ? EM(h, y) : vM(h, y), DP(s, t);
    }
} let d = i.getAll(), f = n.get(No); if (f.set(ya, d), u.size > 0) {
    let p = {};
    for (let [h, y] of u.entries())
        p[h] = y;
    f.set(va, p);
} return l; }
function yP(e, t, n, o, r) { let i = [], s = ""; for (let a = G; a < e.length; a++) {
    let c = e[a], l, u, d;
    if (st(c) && (c = c[I], K(c))) {
        u = mP(c) + 1, EM(c, r);
        let p = dr(c[$]);
        d = { [pa]: p[m].ssrId, [Mt]: u };
    }
    if (!d) {
        let p = c[m];
        p.type === 1 ? (l = p.ssrId, u = 1) : (l = mM(p), u = yM(p, c, p.firstChild)), d = { [pa]: l, [Mt]: u };
        let h = !1;
        if (sI(n[m], t)) {
            let y = Te(n, t), E = fe(n[m], t);
            if (r.isIncrementalHydrationEnabled && E.hydrateTriggers !== null) {
                let T = `d${r.deferBlocks.size}`;
                E.hydrateTriggers.has(7) && (h = !0);
                let k = [];
                Ha(e, k);
                let te = { [Mt]: k.length, [ri]: y[At] }, We = vP(E.hydrateTriggers);
                We.length > 0 && (te[ii] = We), o !== null && (te[Td] = o), r.deferBlocks.set(T, te);
                let Oe = O(e);
                Oe !== void 0 ? Oe.nodeType === Node.COMMENT_NODE && tM(Oe, T) : tM(Oe, T), h || CP(E, k, T, r), o = T, d[ga] = T;
            }
            d[ri] = y[At];
        }
        if (!h) {
            let y = O(c[$]);
            (c[m].type !== 1 || y === null || !y.hasAttribute(An)) && Object.assign(d, IM(e[a], o, r));
        }
    }
    let f = JSON.stringify(d);
    if (i.length > 0 && f === s) {
        let p = i[i.length - 1];
        p[ni] ??= 1, p[ni]++;
    }
    else
        s = f, i.push(d);
} return i; }
function vP(e) { let t = new Set([0, 1, 2, 5]), n = []; for (let [o, r] of e)
    t.has(o) && (r === null ? n.push(o) : r.type === 5 ? n.push({ trigger: o, delay: r.delay }) : n.push({ trigger: o, intersectionObserverOptions: r.intersectionObserverOptions })); return n; }
function wi(e, t, n, o) { let r = t.index - I; e[oi] ??= {}, e[oi][r] ??= Gv(t, n, o); }
function Qp(e, t) { let n = typeof t == "number" ? t : t.index - I; e[_o] ??= [], e[_o].includes(n) || e[_o].push(n); }
function IM(e, t = null, n) { let o = {}, r = e[m], i = Kv(r, n), s = n.shouldReplayEvents ? eP(r, e, n.eventTypesToReplay) : null; for (let a = I; a < r.bindingStartIndex; a++) {
    let c = r.data[a], l = a - I, u = Jv(e, a, n);
    if (u) {
        o[ha] ??= {}, o[ha][l] = u.caseQueue;
        for (let d of u.disconnectedNodes)
            Qp(o, d);
        for (let d of u.disjointNodes) {
            let f = r.data[d + I];
            wi(o, f, e, i);
        }
        continue;
    }
    if (sa(c) && !bo(c)) {
        if (K(e[a]) && c.tView && (o[fa] ??= {}, o[fa][l] = mM(c.tView)), Lo(c, e) && TP(c)) {
            Qp(o, c);
            continue;
        }
        if (Array.isArray(c.projection)) {
            for (let d of c.projection)
                if (d)
                    if (!Array.isArray(d))
                        !cl(d) && !Mo(d) && (Lo(d, e) ? Qp(o, d) : wi(o, d, e, i));
                    else
                        throw Lv(O(e[a]));
        }
        if (EP(o, c, e, i), K(e[a])) {
            let d = e[a][$];
            if (Array.isArray(d)) {
                let f = O(d);
                f.hasAttribute(An) || Tc(f, d, t, n);
            }
            o[wo] ??= {}, o[wo][l] = yP(e[a], c, e, t, n);
        }
        else if (Array.isArray(e[a]) && !Mm(c)) {
            let d = O(e[a][$]);
            d.hasAttribute(An) || Tc(d, e[a], t, n);
        }
        else if (c.type & 8)
            o[ti] ??= {}, o[ti][l] = yM(r, e, c.child);
        else if (c.type & 144) {
            let d = c.next;
            for (; d !== null && d.type & 144;)
                d = d.next;
            d && !Mo(d) && wi(o, d, e, i);
        }
        else if (c.type & 1) {
            let d = O(e[a]);
            xd(n, d);
        }
        if (s && c.type & 2) {
            let d = O(e[a]);
            s.has(d) && _d(d, s.get(d), t);
        }
    }
} return o; }
function EP(e, t, n, o) { cl(t) || (t.projectionNext && t.projectionNext !== t.next && !Mo(t.projectionNext) && wi(e, t.projectionNext, n, o), t.prev === null && t.parent !== null && Lo(t.parent, n) && !Lo(t, n) && wi(e, t, n, o)); }
function IP(e) { let t = e[U]; if (!t?.constructor)
    return !1; let n = W(t.constructor); return n?.encapsulation === Ue.ShadowDom || n?.encapsulation === Ue.ExperimentalIsolatedShadowDom; }
function Tc(e, t, n, o) { let r = t[w]; if (bh(t) && !qa() || IP(t))
    return r.setAttribute(e, An, ""), null; {
    let i = IM(t, n, o), s = o.serializedViewCollection.add(i);
    return r.setAttribute(e, io, s.toString()), s;
} }
function tM(e, t) { e.textContent = `ngh=${t}`; }
function DP(e, t) { for (let [n, o] of e)
    n.after(t.createComment(o)); }
function TP(e) { let t = e; for (; t != null;) {
    if (De(t))
        return !0;
    t = t.parent;
} return !1; }
function CP(e, t, n, o) { let r = Ey(e.hydrateTriggers); for (let i of r)
    o.eventTypesToReplay.regular.add(i); if (r.length > 0) {
    let i = t.filter(s => s.nodeType === Node.ELEMENT_NODE);
    for (let s of i)
        _d(s, r, n);
} }
function o1(e) { return typeof e == "boolean" ? e : e != null && e !== "false"; }
function r1(e, t = NaN) { return !isNaN(parseFloat(e)) && !isNaN(Number(e)) ? Number(e) : t; }
var MP = "\u{1F170}\uFE0F", Nc = !1;
function i1(e) { if (!Nc)
    return; let { startLabel: t } = DM(e); performance.mark(t); }
function s1(e) { if (!Nc)
    return; let { startLabel: t, labelName: n, endLabel: o } = DM(e); performance.mark(o), performance.measure(n, t, o), performance.clearMarks(t), performance.clearMarks(o); }
function DM(e) { let t = `${MP}:${e}`; return { labelName: t, startLabel: `start:${t}`, endLabel: `end:${t}` }; }
var nM = !1;
function a1() { if (!nM && (typeof performance > "u" || !performance.mark || !performance.measure)) {
    nM = !0, console.warn("Performance API is not supported on this platform");
    return;
} Nc = !0; }
function c1() { Nc = !1; }
function l1(e) { }
function u1(e) { return re({ usage: 1, kind: "directive", type: e.type }).compileDirectiveDeclaration(Ee, `ng:///${e.type.name}/\u0275fac.js`, e); }
function d1(e) { Ff(e.type, e.decorators, e.ctorParameters ?? null, e.propDecorators ?? null); }
function f1(e) { fI(e.type, e.resolveDeferredDeps, (...t) => { let n = e.resolveMetadata(...t); Ff(e.type, n.decorators, n.ctorParameters, n.propDecorators); }); }
function p1(e) { return re({ usage: 1, kind: "component", type: e.type }).compileComponentDeclaration(Ee, `ng:///${e.type.name}/\u0275cmp.js`, e); }
function h1(e) { return re({ usage: 1, kind: NP(e.target), type: e.type }).compileFactoryDeclaration(Ee, `ng:///${e.type.name}/\u0275fac.js`, e); }
function NP(e) { switch (e) {
    case Bo.Directive: return "directive";
    case Bo.Component: return "component";
    case Bo.Injectable: return "injectable";
    case Bo.Pipe: return "pipe";
    case Bo.NgModule: return "NgModule";
} }
function g1(e) { return re({ usage: 1, kind: "injectable", type: e.type }).compileInjectableDeclaration(Ee, `ng:///${e.type.name}/\u0275prov.js`, e); }
function m1(e) { return re({ usage: 1, kind: "NgModule", type: e.type }).compileInjectorDeclaration(Ee, `ng:///${e.type.name}/\u0275inj.js`, e); }
function y1(e) { return re({ usage: 1, kind: "NgModule", type: e.type }).compileNgModuleDeclaration(Ee, `ng:///${e.type.name}/\u0275mod.js`, e); }
function v1(e) { return re({ usage: 1, kind: "pipe", type: e.type }).compilePipeDeclaration(Ee, `ng:///${e.type.name}/\u0275pipe.js`, e); }
var Zp = Symbol("NOT_SET"), TM = new Set, wP = we(z({}, Sc), { kind: "afterRenderEffectPhase", consumerIsAlwaysLive: !0, consumerAllowSignalWrites: !0, value: Zp, cleanup: null, consumerMarkedDirty() { if (this.sequence.impl.executing) {
        if (this.sequence.lastPhase === null || this.sequence.lastPhase < this.phase)
            return;
        this.sequence.erroredOrDestroyed = !0;
    } this.sequence.scheduler.notify(7); }, phaseFn(e) { if (this.sequence.lastPhase = this.phase, !this.dirty)
        return this.signal; if (this.dirty = !1, this.value !== Zp && !Ri(this))
        return this.signal; try {
        for (let r of this.cleanup ?? TM)
            r();
    }
    finally {
        this.cleanup?.clear();
    } let t = []; e !== void 0 && t.push(e), t.push(this.registerCleanupFn); let n = qo(this), o; try {
        o = this.userFn.apply(null, t);
    }
    finally {
        Ai(this, n);
    } return (this.value === Zp || !this.equal(this.value, o)) && (this.value = o, this.version++), this.signal; } }), rh = class extends jr {
    scheduler;
    lastPhase = null;
    nodes = [void 0, void 0, void 0, void 0];
    onDestroyFns = null;
    constructor(t, n, o, r, i, s = null) { super(t, [void 0, void 0, void 0, void 0], o, !1, i.get(Be), s), this.scheduler = r; for (let a of Jd) {
        let c = n[a];
        if (c === void 0)
            continue;
        let l = Object.create(wP);
        l.sequence = this, l.phase = a, l.userFn = c, l.dirty = !0, l.signal = () => (bi(l), l.value), l.signal[ae] = l, l.registerCleanupFn = u => (l.cleanup ??= new Set).add(u), this.nodes[a] = l, this.hooks[a] = u => l.phaseFn(u);
    } }
    afterRun() { super.afterRun(), this.lastPhase = null; }
    destroy() { if (this.onDestroyFns !== null)
        for (let t of this.onDestroyFns)
            t(); super.destroy(); for (let t of this.nodes)
        if (t)
            try {
                for (let n of t.cleanup ?? TM)
                    n();
            }
            finally {
                Ot(t);
            } }
};
function E1(e, t) { if (typeof ngServerMode < "u" && ngServerMode)
    return Aa; let n = t?.injector ?? v(ce), o = n.get(xe), r = n.get(ba), i = n.get(xn, null, { optional: !0 }); r.impl ??= n.get(Xd); let s = e; typeof s == "function" && (s = { mixedReadWrite: e }); let a = n.get(zn, null, { optional: !0 }), c = new rh(r.impl, [s.earlyRead, s.write, s.mixedReadWrite, s.read], a?.view, o, n, i?.snapshot(null)); return r.impl.register(c), c; }
function I1(e) { return new ih(jf(e) ? e : Ne(e)); }
var ih = class {
    snapshot;
    constructor(t) { this.snapshot = t; }
    get state() { return this.snapshot(); }
    value = Ne(() => { if (this.state.status === "error")
        throw new Mi(this.state.error); return this.state.value; });
    status = Ne(() => this.state.status);
    error = Ne(() => this.state.status === "error" ? this.state.error : void 0);
    isLoading = Ne(() => this.state.status === "loading" || this.state.status === "reloading");
    isValueDefined = Ne(() => this.state.status !== "error" && this.state.value !== void 0);
    hasValue() { return this.isValueDefined(); }
};
function D1(e, t) { let n = W(e), o = t.elementInjector || $n(); return new Yt(n).create(o, t.projectableNodes, t.hostElement, t.environmentInjector, t.directives, t.bindings); }
function T1(e) { let t = W(e); if (!t)
    return null; let n = new Yt(t); return { get selector() { return n.selector; }, get type() { return n.componentType; }, get inputs() { return n.inputs; }, get outputs() { return n.outputs; }, get ngContentSelectors() { return n.ngContentSelectors; }, get isStandalone() { return t.standalone; }, get isSignal() { return t.signals; } }; }
function C1(...e) { return e.reduce((t, n) => Object.assign(t, n, { providers: [...t.providers, ...n.providers] }), { providers: [] }); }
var M1 = new C("", { providedIn: "platform", factory: () => null }), N1 = new C("", { providedIn: "platform", factory: () => null }), w1 = new C("", { providedIn: "platform", factory: () => null });
export { Mw as ANIMATION_MODULE_TYPE, yi as APP_BOOTSTRAP_LISTENER, _t as APP_ID, $f as APP_INITIALIZER, Uf as ApplicationInitStatus, e1 as ApplicationModule, Ge as ApplicationRef, Lm as Attribute, fC as COMPILER_OPTIONS, Nw as CSP_NONCE, Kw as CUSTOM_ELEMENTS_SCHEMA, la as ChangeDetectionStrategy, lP as ChangeDetectorRef, jO as Compiler, pd as CompilerFactory, RO as Component, za as ComponentFactory, hi as ComponentFactoryResolver, aE as ComponentRef, PF as ContentChild, xF as ContentChildren, BO as DEFAULT_CURRENCY_CODE, $t as DOCUMENT, bn as DebugElement, hd as DebugEventListener, Kr as DebugNode, Jp as DefaultIterableDiffer, Be as DestroyRef, dC as Directive, Fe as ENVIRONMENT_INITIALIZER, ei as ElementRef, KC as EmbeddedViewRef, _e as EnvironmentInjector, vt as ErrorHandler, gt as EventEmitter, wF as HOST_TAG_NAME, gm as Host, FC as HostAttributeToken, PO as HostBinding, LO as HostListener, el as INJECTOR, dm as Inject, ZN as Injectable, C as InjectionToken, ce as Injector, OO as Input, hM as IterableDiffers, gM as KeyValueDiffers, Op as LOCALE_ID, nv as MAX_ANIMATION_TIMEOUT, hC as MissingTranslationStrategy, ia as ModuleWithComponentFactories, Jw as NO_ERRORS_SCHEMA, FO as NgModule, HE as NgModuleFactory, mo as NgModuleRef, q as NgZone, fm as Optional, xO as Output, Ci as OutputEmitterRef, Cw as PLATFORM_ID, Ed as PLATFORM_INITIALIZER, yr as PendingTasks, kO as Pipe, uM as PlatformRef, Uo as Query, Fs as QueryList, M1 as REQUEST, w1 as REQUEST_CONTEXT, N1 as RESPONSE_INIT, Vb as Renderer2, Ur as RendererFactory2, $s as RendererStyleFlags2, cE as Sanitizer, kn as SecurityContext, pm as Self, ks as SimpleChange, hm as SkipSelf, $O as TRANSLATIONS, UO as TRANSLATIONS_FORMAT, Hr as TemplateRef, TR as Testability, gI as TestabilityRegistry, No as TransferState, mm as Type, Oc as VERSION, xi as Version, FF as ViewChild, LF as ViewChildren, Ya as ViewContainerRef, Ue as ViewEncapsulation, Kp as ViewRef, av as afterEveryRender, ef as afterNextRender, E1 as afterRenderEffect, qO as asNativeElements, JM as assertInInjectionContext, dN as assertNotInReactiveContext, Yx as assertPlatform, o1 as booleanAttribute, Ne as computed, RF as contentChild, kF as contentChildren, D1 as createComponent, Af as createEnvironmentInjector, BE as createNgModule, PA as createNgModuleRef, Qx as createPlatform, Zx as createPlatformFactory, VF as destroyPlatform, $l as effect, UF as enableProdMode, vR as enableProfiling, Xo as forwardRef, Jr as getDebugNode, ZF as getModuleFactory, YF as getNgModuleById, Mc as getPlatform, Nh as importProvidersFrom, v as inject, SF as input, DE as inputBinding, $F as isDevMode, jf as isSignal, ir as isStandalone, Vf as isWritableSignal, Pp as linkedSignal, Ye as makeEnvironmentProviders, _w as makeStateKey, C1 as mergeApplicationConfig, OF as model, r1 as numberAttribute, _F as output, TE as outputBinding, XF as platformCore, vI as provideAppInitializer, lN as provideBrowserGlobalErrorListeners, BF as provideCheckNoChangesConfig, Mh as provideEnvironmentInitializer, k_ as provideNgReflectAttributes, HF as providePlatformInitializer, QF as provideStabilityDebugging, jF as provideZoneChangeDetection, VO as provideZonelessChangeDetection, T1 as reflectComponentType, P as resolveForwardRef, YO as resource, I1 as resourceFromSnapshots, Zi as runInInjectionContext, mI as setTestabilityGetter, Ut as signal, aA as twoWayBinding, tt as untracked, bF as viewChild, AF as viewChildren, tv as \u0275ANIMATIONS_DISABLED, zm as \u0275AcxChangeDetectionStrategy, Qm as \u0275AcxViewEncapsulation, ba as \u0275AfterRenderManager, qF as \u0275CLIENT_RENDER_MODE_FLAG, G as \u0275CONTAINER_HEADER_OFFSET, xe as \u0275ChangeDetectionScheduler, za as \u0275ComponentFactory, yR as \u0275Console, Ii as \u0275DEFAULT_LOCALE_ID, lI as \u0275DEFER_BLOCK_CONFIG, fR as \u0275DEFER_BLOCK_DEPENDENCY_INTERCEPTOR, St as \u0275DEHYDRATED_BLOCK_REGISTRY, Pf as \u0275DeferBlockBehavior, Z as \u0275DeferBlockState, Gx as \u0275ENABLE_ROOT_COMPONENT_BOOTSTRAP, ey as \u0275EVENT_REPLAY_QUEUE, ls as \u0275EffectScheduler, Px as \u0275Framework, gy as \u0275HydrationStatus, ww as \u0275IMAGE_CONFIG, Zm as \u0275IMAGE_CONFIG_DEFAULTS, ol as \u0275INJECTOR_SCOPE, NF as \u0275INPUT_SIGNAL_BRAND_WRITE_TYPE, It as \u0275INTERNAL_APPLICATION_ERROR_HANDLER, Sw as \u0275IS_ENABLED_BLOCKING_INITIAL_NAVIGATION, Rn as \u0275IS_HYDRATION_DOM_REUSE_ENABLED, wd as \u0275IS_INCREMENTAL_HYDRATION_ENABLED, si as \u0275JSACTION_BLOCK_ELEMENT_MAP, Ad as \u0275JSACTION_EVENT_CONTRACT, js as \u0275LContext, Eo as \u0275LocaleDataIndex, rn as \u0275NG_COMP_DEF, or as \u0275NG_DIR_DEF, sn as \u0275NG_ELEMENT_ID, Wo as \u0275NG_INJ_DEF, Bi as \u0275NG_MOD_DEF, rr as \u0275NG_PIPE_DEF, Vn as \u0275NG_PROV_DEF, ws as \u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, H as \u0275NO_CHANGE, vo as \u0275NgModuleFactory, Yo as \u0275NoopNgZone, MP as \u0275PERFORMANCE_MARK_PREFIX, $x as \u0275PROVIDED_NG_ZONE, pN as \u0275PROVIDED_ZONELESS, Et as \u0275PendingTasksInternal, x as \u0275ProfilerEvent, on as \u0275R3Injector, Rs as \u0275ReflectionCapabilities, Yt as \u0275Render3ComponentFactory, Ys as \u0275Render3ComponentRef, yo as \u0275Render3NgModuleRef, uc as \u0275ResourceImpl, D as \u0275RuntimeError, ae as \u0275SIGNAL, dy as \u0275SSR_CONTENT_INTEGRITY_MARKER, pI as \u0275TESTABILITY, hI as \u0275TESTABILITY_GETTER, cI as \u0275TimerScheduler, Sa as \u0275TracingAction, xn as \u0275TracingService, Zt as \u0275ViewRef, Vi as \u0275XSS_SECURITY_URL, Qn as \u0275ZONELESS_ENABLED, Ly as \u0275_sanitizeHtml, Ta as \u0275_sanitizeUrl, Cn as \u0275allLeavingAnimations, Ro as \u0275allowSanitizationBypassAndThrow, n1 as \u0275annotateForHydration, l1 as \u0275assertType, r_ as \u0275bypassSanitizationTrustHtml, c_ as \u0275bypassSanitizationTrustResourceUrl, s_ as \u0275bypassSanitizationTrustScript, i_ as \u0275bypassSanitizationTrustStyle, a_ as \u0275bypassSanitizationTrustUrl, AA as \u0275clearResolutionOfComponentResourcesQueue, tC as \u0275compileComponent, kp as \u0275compileDirective, XT as \u0275compileNgModule, eC as \u0275compileNgModuleDefs, Hx as \u0275compileNgModuleFactory, uC as \u0275compilePipe, tn as \u0275convertToBitFlags, $c as \u0275createInjector, Kx as \u0275createOrReusePlatformInjector, KF as \u0275defaultIterableDiffers, JF as \u0275defaultKeyValueDiffers, ho as \u0275depsTracker, hE as \u0275devModeEqual, c1 as \u0275disableProfiling, a1 as \u0275enableProfiling, Vp as \u0275encapsulateResourceError, rp as \u0275findLocaleData, KT as \u0275flushModuleScopingQueueAsMuchAsPossible, Ko as \u0275formatRuntimeError, vO as \u0275generateStandaloneInDeclarationsError, mR as \u0275getAsyncClassMetadataFn, cA as \u0275getClosestComponentName, W as \u0275getComponentDef, bs as \u0275getDeferBlocks, hw as \u0275getDirectives, da as \u0275getDocument, mw as \u0275getHostElement, nr as \u0275getInjectableDef, Me as \u0275getLContext, KR as \u0275getLocaleCurrencyCode, rD as \u0275getLocalePluralCase, QO as \u0275getOutputDestroyRef, by as \u0275getSanitizationBypassType, ER as \u0275getTransferState, e_ as \u0275getUnknownElementStrictMode, n_ as \u0275getUnknownPropertyStrictMode, Se as \u0275global, CE as \u0275inferTagNameFromDefinition, uP as \u0275injectChangeDetectorRef, t1 as \u0275internalCreateApplication, Ux as \u0275internalProvideZoneChangeDetection, EI as \u0275isBoundToModule, bA as \u0275isComponentDefPendingResolution, Qc as \u0275isEnvironmentProviders, kM as \u0275isInjectable, gn as \u0275isNgModule, Bf as \u0275isPromise, yI as \u0275isSubscribable, $S as \u0275isViewDirty, US as \u0275markForRefresh, ft as \u0275noSideEffects, Ap as \u0275patchComponentDefWithScope, J as \u0275performanceMarkFeature, ec as \u0275promiseWithResolvers, lc as \u0275provideZonelessChangeDetectionInternal, IR as \u0275publishExternalGlobalUtil, Vw as \u0275readHydrationInfo, YR as \u0275registerLocaleData, Tt as \u0275renderDeferBlockState, DO as \u0275resetCompiledComponents, Bw as \u0275resetIncrementalHydrationEnabledWarnedForTests, mO as \u0275resetJitOptions, LE as \u0275resolveComponentResources, RA as \u0275restoreComponentResolutionQueue, xA as \u0275setAllowDuplicateNgModuleIdsForTest, CM as \u0275setAlternateWeakRefImpl, zT as \u0275setClassDebugInfo, Ff as \u0275setClassMetadata, fI as \u0275setClassMetadataAsync, nt as \u0275setCurrentInjector, Dw as \u0275setDocument, PM as \u0275setInjectorProfilerContext, cD as \u0275setLocaleId, Xw as \u0275setUnknownElementStrictMode, t_ as \u0275setUnknownPropertyStrictMode, i1 as \u0275startMeasuring, s1 as \u0275stopMeasuring, fr as \u0275store, Jo as \u0275stringify, Rp as \u0275transitiveScopesFor, tc as \u0275triggerResourceLoading, AM as \u0275truncateMiddle, JR as \u0275unregisterLocaleData, bt as \u0275unwrapSafeValue, uN as \u0275unwrapWritableSignal, GF as \u0275withDomHydration, Jx as \u0275withEventReplay, WF as \u0275withI18nSupport, zF as \u0275withIncrementalHydration, ZE as \u0275\u0275ControlFeature, DT as \u0275\u0275ExternalStylesFeature, Bo as \u0275\u0275FactoryTarget, YE as \u0275\u0275HostDirectivesFeature, kf as \u0275\u0275InheritDefinitionFeature, vm as \u0275\u0275NgOnChangesFeature, IT as \u0275\u0275ProvidersFeature, Xy as \u0275\u0275advance, wr as \u0275\u0275animateEnter, _r as \u0275\u0275animateEnterListener, Sr as \u0275\u0275animateLeave, Xs as \u0275\u0275animateLeaveListener, Wf as \u0275\u0275ariaProperty, yT as \u0275\u0275arrowFunction, sT as \u0275\u0275attachSourceLocations, zf as \u0275\u0275attribute, LD as \u0275\u0275classMap, yp as \u0275\u0275classProp, QI as \u0275\u0275componentInstance, YI as \u0275\u0275conditional, nc as \u0275\u0275conditionalBranchCreate, ZI as \u0275\u0275conditionalCreate, fp as \u0275\u0275contentQuery, hp as \u0275\u0275contentQuerySignal, vE as \u0275\u0275control, mE as \u0275\u0275controlCreate, bp as \u0275\u0275declareLet, NI as \u0275\u0275defer, dI as \u0275\u0275deferEnableTimerScheduling, bI as \u0275\u0275deferHydrateNever, BI as \u0275\u0275deferHydrateOnHover, kI as \u0275\u0275deferHydrateOnIdle, PI as \u0275\u0275deferHydrateOnImmediate, qI as \u0275\u0275deferHydrateOnInteraction, jI as \u0275\u0275deferHydrateOnTimer, zI as \u0275\u0275deferHydrateOnViewport, SI as \u0275\u0275deferHydrateWhen, VI as \u0275\u0275deferOnHover, AI as \u0275\u0275deferOnIdle, OI as \u0275\u0275deferOnImmediate, $I as \u0275\u0275deferOnInteraction, LI as \u0275\u0275deferOnTimer, GI as \u0275\u0275deferOnViewport, HI as \u0275\u0275deferPrefetchOnHover, RI as \u0275\u0275deferPrefetchOnIdle, xI as \u0275\u0275deferPrefetchOnImmediate, UI as \u0275\u0275deferPrefetchOnInteraction, FI as \u0275\u0275deferPrefetchOnTimer, WI as \u0275\u0275deferPrefetchOnViewport, _I as \u0275\u0275deferPrefetchWhen, wI as \u0275\u0275deferWhen, UE as \u0275\u0275defineComponent, GE as \u0275\u0275defineDirective, B as \u0275\u0275defineInjectable, tr as \u0275\u0275defineInjector, Rf as \u0275\u0275defineNgModule, WE as \u0275\u0275definePipe, Fo as \u0275\u0275directiveInject, vl as \u0275\u0275disableBindings, Yf as \u0275\u0275domElement, ep as \u0275\u0275domElementContainer, Xf as \u0275\u0275domElementContainerEnd, ac as \u0275\u0275domElementContainerStart, ic as \u0275\u0275domElementEnd, rc as \u0275\u0275domElementStart, up as \u0275\u0275domListener, np as \u0275\u0275domProperty, xf as \u0275\u0275domTemplate, Zf as \u0275\u0275element, Jf as \u0275\u0275elementContainer, Ei as \u0275\u0275elementContainerEnd, sc as \u0275\u0275elementContainerStart, oc as \u0275\u0275elementEnd, Qr as \u0275\u0275elementStart, yl as \u0275\u0275enableBindings, WT as \u0275\u0275getComponentDepsFactory, oD as \u0275\u0275getCurrentView, xm as \u0275\u0275getInheritedFactory, QT as \u0275\u0275getReplaceMetadataURL, ID as \u0275\u0275i18n, TD as \u0275\u0275i18nApply, DD as \u0275\u0275i18nAttributes, sp as \u0275\u0275i18nEnd, ap as \u0275\u0275i18nExp, CD as \u0275\u0275i18nPostprocess, ip as \u0275\u0275i18nStart, pe as \u0275\u0275inject, aa as \u0275\u0275injectAttribute, aT as \u0275\u0275interpolate, cT as \u0275\u0275interpolate1, lT as \u0275\u0275interpolate2, uT as \u0275\u0275interpolate3, dT as \u0275\u0275interpolate4, fT as \u0275\u0275interpolate5, pT as \u0275\u0275interpolate6, hT as \u0275\u0275interpolate7, gT as \u0275\u0275interpolate8, mT as \u0275\u0275interpolateV, lE as \u0275\u0275invalidFactory, Gi as \u0275\u0275invalidFactoryDep, cp as \u0275\u0275listener, SD as \u0275\u0275loadQuery, Ol as \u0275\u0275namespaceHTML, kl as \u0275\u0275namespaceMathML, Rl as \u0275\u0275namespaceSVG, MD as \u0275\u0275nextContext, d1 as \u0275\u0275ngDeclareClassMetadata, f1 as \u0275\u0275ngDeclareClassMetadataAsync, p1 as \u0275\u0275ngDeclareComponent, u1 as \u0275\u0275ngDeclareDirective, h1 as \u0275\u0275ngDeclareFactory, g1 as \u0275\u0275ngDeclareInjectable, m1 as \u0275\u0275ngDeclareInjector, y1 as \u0275\u0275ngDeclareNgModule, v1 as \u0275\u0275ngDeclarePipe, VT as \u0275\u0275pipe, HT as \u0275\u0275pipeBind1, BT as \u0275\u0275pipeBind2, $T as \u0275\u0275pipeBind3, UT as \u0275\u0275pipeBind4, qT as \u0275\u0275pipeBindV, wD as \u0275\u0275projection, ND as \u0275\u0275projectionDef, Qf as \u0275\u0275property, MT as \u0275\u0275pureFunction0, NT as \u0275\u0275pureFunction1, wT as \u0275\u0275pureFunction2, _T as \u0275\u0275pureFunction3, ST as \u0275\u0275pureFunction4, bT as \u0275\u0275pureFunction5, AT as \u0275\u0275pureFunction6, RT as \u0275\u0275pureFunction7, kT as \u0275\u0275pureFunction8, OT as \u0275\u0275pureFunctionV, bD as \u0275\u0275queryAdvance, _D as \u0275\u0275queryRefresh, iT as \u0275\u0275readContextLet, AD as \u0275\u0275reference, Sf as \u0275\u0275registerNgModuleType, eD as \u0275\u0275repeater, XI as \u0275\u0275repeaterCreate, JI as \u0275\u0275repeaterTrackByIdentity, KI as \u0275\u0275repeaterTrackByIndex, ZT as \u0275\u0275replaceMetadata, Dl as \u0275\u0275resetView, Ud as \u0275\u0275resolveBody, Zy as \u0275\u0275resolveDocument, Qy as \u0275\u0275resolveWindow, Il as \u0275\u0275restoreView, By as \u0275\u0275sanitizeHtml, Bd as \u0275\u0275sanitizeResourceUrl, Uy as \u0275\u0275sanitizeScript, $y as \u0275\u0275sanitizeStyle, Hd as \u0275\u0275sanitizeUrl, Wy as \u0275\u0275sanitizeUrlOrResourceUrl, TT as \u0275\u0275setComponentScope, CT as \u0275\u0275setNgModuleScope, rT as \u0275\u0275storeLet, PD as \u0275\u0275styleMap, mp as \u0275\u0275styleProp, lp as \u0275\u0275syntheticHostListener, op as \u0275\u0275syntheticHostProperty, Of as \u0275\u0275template, GT as \u0275\u0275templateRefExtractor, qD as \u0275\u0275text, vp as \u0275\u0275textInterpolate, cc as \u0275\u0275textInterpolate1, Ep as \u0275\u0275textInterpolate2, Ip as \u0275\u0275textInterpolate3, Dp as \u0275\u0275textInterpolate4, Tp as \u0275\u0275textInterpolate5, Cp as \u0275\u0275textInterpolate6, Mp as \u0275\u0275textInterpolate7, Np as \u0275\u0275textInterpolate8, wp as \u0275\u0275textInterpolateV, qy as \u0275\u0275trustConstantHtml, Gy as \u0275\u0275trustConstantResourceUrl, nT as \u0275\u0275twoWayBindingSet, Sp as \u0275\u0275twoWayListener, _p as \u0275\u0275twoWayProperty, $d as \u0275\u0275validateAttribute, pp as \u0275\u0275viewQuery, gp as \u0275\u0275viewQuerySignal };
/*! Bundled license information:

@angular/core/fesm2022/_effect-chunk2.mjs:
@angular/core/fesm2022/_attribute-chunk.mjs:
@angular/core/fesm2022/_debug_node-chunk.mjs:
@angular/core/fesm2022/_resource-chunk.mjs:
@angular/core/fesm2022/primitives-event-dispatch.mjs:
@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v21.2.12
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
