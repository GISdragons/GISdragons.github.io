// OpenLayers 3. See http://openlayers.org/
// License: https://raw.githubusercontent.com/openlayers/ol3/master/LICENSE.md
// Version: v3.1.1

// Create a popup overlay which will be used to display feature info
var popup = new ol.Overlay.Popup();
map.addOverlay(popup);

// Add an event handler for the map "singleclick" event
map.on('singleclick', function(evt) {

    // Hide existing popup and reset it's offset
    popup.hide();
    popup.setOffset([0, 0]);

    // Attempt to find a feature in one of the visible vector layers
    var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        return feature;
    });

    if (feature) {

        var coord = feature.getGeometry().getCoordinates();
        var props = feature.getProperties();
        var info = "<h2><a href='" + props.caseurl + "'>" + props.casereference + "</a></h2>";
            info += "<p>" + props.locationtext + "</p>";
            info += "<p>Status: " + props.status + " " + props.statusdesc + "</p>";
        // Offset the popup so it points at the middle of the marker not the tip
        popup.setOffset([0, -22]);
        popup.show(coord, info);

    }

});

(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root.ol = factory();
    }
}(this, function () {
    var OPENLAYERS = {};
    var l, aa = aa || {}, ba = this;

    function m(b) {
        return void 0 !== b
    }
    function t(b, c, d) {
        b = b.split(".");
        d = d || ba;
        b[0] in d || !d.execScript || d.execScript("var " + b[0]);
        for (var e; b.length && (e = b.shift());)!b.length && m(c) ? d[e] = c : d[e] ? d = d[e] : d = d[e] = {}
    }
    function ca() {}
    function da(b) {
        b.Ja = function () {
            return b.lf ? b.lf : b.lf = new b
        }
    }

    function ea(b) {
        var c = typeof b;
        if ("object" == c) if (b) {
            if (b instanceof Array) return "array";
            if (b instanceof Object) return c;
            var d = Object.prototype.toString.call(b);
            if ("[object Window]" == d) return "object";
            if ("[object Array]" == d || "number" == typeof b.length && "undefined" != typeof b.splice && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == d || "undefined" != typeof b.call && "undefined" != typeof b.propertyIsEnumerable && !b.propertyIsEnumerable("call")) return "function"
        } else return "null";
        else if ("function" == c && "undefined" == typeof b.call) return "object";
        return c
    }
    function fa(b) {
        return null === b
    }
    function ga(b) {
        return "array" == ea(b)
    }
    function ha(b) {
        var c = ea(b);
        return "array" == c || "object" == c && "number" == typeof b.length
    }
    function ia(b) {
        return "string" == typeof b
    }
    function ja(b) {
        return "number" == typeof b
    }
    function ka(b) {
        return "function" == ea(b)
    }
    function la(b) {
        var c = typeof b;
        return "object" == c && null != b || "function" == c
    }
    function ma(b) {
        return b[na] || (b[na] = ++oa)
    }
    var na = "closure_uid_" + (1E9 * Math.random() >>> 0),
        oa = 0;

    function pa(b, c, d) {
        return b.call.apply(b.bind, arguments)
    }
    function ra(b, c, d) {
        if (!b) throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function () {
                var d = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(d, e);
                return b.apply(c, d)
            }
        }
        return function () {
            return b.apply(c, arguments)
        }
    }

    function sa(b, c, d) {
        sa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? pa : ra;
        return sa.apply(null, arguments)
    }
    function ta(b, c) {
        var d = Array.prototype.slice.call(arguments, 1);
        return function () {
            var c = d.slice();
            c.push.apply(c, arguments);
            return b.apply(this, c)
        }
    }
    var ua = Date.now || function () {
            return +new Date
        };

    function u(b, c) {
        function d() {}
        d.prototype = c.prototype;
        b.S = c.prototype;
        b.prototype = new d;
        b.prototype.constructor = b;
        b.Vl = function (b, d, g) {
            for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
            return c.prototype[d].apply(b, h)
        }
    };
    var va, wa;

    function xa(b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, xa);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        b && (this.message = String(b))
    }
    u(xa, Error);
    xa.prototype.name = "CustomError";
    var ya;

    function za(b, c) {
        for (var d = b.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < d.length;) e += d.shift() + f.shift();
        return e + d.join("%s")
    }
    var Aa = String.prototype.trim ? function (b) {
            return b.trim()
        } : function (b) {
            return b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
        };

    function Ba(b) {
        if (!Ca.test(b)) return b; - 1 != b.indexOf("&") && (b = b.replace(Da, "&amp;")); - 1 != b.indexOf("<") && (b = b.replace(Ea, "&lt;")); - 1 != b.indexOf(">") && (b = b.replace(Fa, "&gt;")); - 1 != b.indexOf('"') && (b = b.replace(Ga, "&quot;")); - 1 != b.indexOf("'") && (b = b.replace(Ha, "&#39;")); - 1 != b.indexOf("\x00") && (b = b.replace(Ia, "&#0;"));
        return b
    }
    var Da = /&/g,
        Ea = /</g,
        Fa = />/g,
        Ga = /"/g,
        Ha = /'/g,
        Ia = /\x00/g,
        Ca = /[\x00&<>"']/;

    function Ja(b) {
        return String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
    }
    function Ma(b) {
        b = m(void 0) ? b.toFixed(void 0) : String(b);
        var c = b.indexOf("."); - 1 == c && (c = b.length);
        c = Math.max(0, 2 - c);
        return Array(c + 1).join("0") + b
    }

    function Na(b, c) {
        for (var d = 0, e = Aa(String(b)).split("."), f = Aa(String(c)).split("."), g = Math.max(e.length, f.length), h = 0; 0 == d && h < g; h++) {
            var k = e[h] || "",
                n = f[h] || "",
                p = RegExp("(\\d*)(\\D*)", "g"),
                q = RegExp("(\\d*)(\\D*)", "g");
            do {
                var r = p.exec(k) || ["", "", ""],
                    s = q.exec(n) || ["", "", ""];
                if (0 == r[0].length && 0 == s[0].length) break;
                d = Oa(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || Oa(0 == r[2].length, 0 == s[2].length) || Oa(r[2], s[2])
            } while (0 == d)
        }
        return d
    }
    function Oa(b, c) {
        return b < c ? -1 : b > c ? 1 : 0
    }

    function Qa() {
        return "transform".replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase()
        })
    }
    function Ra(b) {
        var c = ia(void 0) ? Ja(void 0) : "\\s";
        return b.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function (b, c, f) {
            return c + f.toUpperCase()
        })
    };
    var Sa = Array.prototype;

    function Ta(b, c, d) {
        Sa.forEach.call(b, c, d)
    }
    function Ua(b, c) {
        return Sa.filter.call(b, c, void 0)
    }
    function Va(b, c, d) {
        return Sa.map.call(b, c, d)
    }
    function Wa(b, c) {
        return Sa.some.call(b, c, void 0)
    }
    function Xa(b) {
        var c;
        a: {
            c = Ya;
            for (var d = b.length, e = ia(b) ? b.split("") : b, f = 0; f < d; f++) if (f in e && c.call(void 0, e[f], f, b)) {
                c = f;
                break a
            }
            c = -1
        }
        return 0 > c ? null : ia(b) ? b.charAt(c) : b[c]
    }
    function Za(b, c) {
        return 0 <= Sa.indexOf.call(b, c, void 0)
    }

    function $a(b) {
        if (!ga(b)) for (var c = b.length - 1; 0 <= c; c--) delete b[c];
        b.length = 0
    }
    function ab(b, c) {
        var d = Sa.indexOf.call(b, c, void 0),
            e;
        (e = 0 <= d) && Sa.splice.call(b, d, 1);
        return e
    }
    function bb(b) {
        return Sa.concat.apply(Sa, arguments)
    }
    function cb(b) {
        var c = b.length;
        if (0 < c) {
            for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
            return d
        }
        return []
    }
    function db(b, c) {
        for (var d = 1; d < arguments.length; d++) {
            var e = arguments[d];
            if (ha(e)) {
                var f = b.length || 0,
                    g = e.length || 0;
                b.length = f + g;
                for (var h = 0; h < g; h++) b[f + h] = e[h]
            } else b.push(e)
        }
    }

    function eb(b, c, d, e) {
        Sa.splice.apply(b, fb(arguments, 1))
    }
    function fb(b, c, d) {
        return 2 >= arguments.length ? Sa.slice.call(b, c) : Sa.slice.call(b, c, d)
    }
    function gb(b, c) {
        b.sort(c || hb)
    }
    function ib(b, c) {
        if (!ha(b) || !ha(c) || b.length != c.length) return !1;
        for (var d = b.length, e = jb, f = 0; f < d; f++) if (!e(b[f], c[f])) return !1;
        return !0
    }
    function hb(b, c) {
        return b > c ? 1 : b < c ? -1 : 0
    }
    function jb(b, c) {
        return b === c
    };
    var kb;
    a: {
        var lb = ba.navigator;
        if (lb) {
            var mb = lb.userAgent;
            if (mb) {
                kb = mb;
                break a
            }
        }
        kb = ""
    }
    function nb(b) {
        return -1 != kb.indexOf(b)
    };

    function ob(b, c, d) {
        for (var e in b) c.call(d, b[e], e, b)
    }
    function pb(b, c) {
        for (var d in b) if (c.call(void 0, b[d], d, b)) return !0;
        return !1
    }
    function qb(b) {
        var c = 0,
            d;
        for (d in b) c++;
        return c
    }
    function rb(b) {
        var c = [],
            d = 0,
            e;
        for (e in b) c[d++] = b[e];
        return c
    }
    function sb(b) {
        var c = [],
            d = 0,
            e;
        for (e in b) c[d++] = e;
        return c
    }
    function tb(b, c) {
        return c in b
    }
    function ub(b) {
        var c = wb,
            d;
        for (d in c) if (b.call(void 0, c[d], d, c)) return d
    }
    function xb(b) {
        for (var c in b) return !1;
        return !0
    }
    function yb(b) {
        for (var c in b) delete b[c]
    }

    function zb(b, c) {
        c in b && delete b[c]
    }
    function Ab(b, c, d) {
        if (c in b) throw Error('The object already contains the key "' + c + '"');
        b[c] = d
    }
    function x(b, c, d) {
        return c in b ? b[c] : d
    }
    function Bb(b, c) {
        var d = [];
        return c in b ? b[c] : b[c] = d
    }
    function Cb(b) {
        var c = {}, d;
        for (d in b) c[d] = b[d];
        return c
    }
    var Db = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Eb(b, c) {
        for (var d, e, f = 1; f < arguments.length; f++) {
            e = arguments[f];
            for (d in e) b[d] = e[d];
            for (var g = 0; g < Db.length; g++) d = Db[g], Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d])
        }
    }
    function Fb(b) {
        var c = arguments.length;
        if (1 == c && ga(arguments[0])) return Fb.apply(null, arguments[0]);
        for (var d = {}, e = 0; e < c; e++) d[arguments[e]] = !0;
        return d
    };
    var Gb = nb("Opera") || nb("OPR"),
        Hb = nb("Trident") || nb("MSIE"),
        Ib = nb("Gecko") && -1 == kb.toLowerCase().indexOf("webkit") && !(nb("Trident") || nb("MSIE")),
        Jb = -1 != kb.toLowerCase().indexOf("webkit"),
        Kb = nb("Macintosh"),
        Lb = nb("Windows"),
        Mb = nb("Linux") || nb("CrOS"),
        Nb, Ob = ba.navigator || null;
    Nb = !! Ob && -1 != (Ob.appVersion || "").indexOf("X11");

    function Pb() {
        var b = ba.document;
        return b ? b.documentMode : void 0
    }
    var Qb = function () {
        var b = "",
            c;
        if (Gb && ba.opera) return b = ba.opera.version, ka(b) ? b() : b;
        Ib ? c = /rv\:([^\);]+)(\)|;)/ : Hb ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Jb && (c = /WebKit\/(\S+)/);
        c && (b = (b = c.exec(kb)) ? b[1] : "");
        return Hb && (c = Pb(), c > parseFloat(b)) ? String(c) : b
    }(),
        Rb = {};

    function Tb(b) {
        return Rb[b] || (Rb[b] = 0 <= Na(Qb, b))
    }
    var Ub = ba.document,
        Vb = Ub && Hb ? Pb() || ("CSS1Compat" == Ub.compatMode ? parseInt(Qb, 10) : 5) : void 0;
    var Wb = "https:" === ba.location.protocol,
        Xb = Hb && !Tb("9.0") && "" !== Qb;

    function Yb(b, c, d) {
        return Math.min(Math.max(b, c), d)
    }
    function Zb(b, c) {
        var d = b % c;
        return 0 > d * c ? d + c : d
    }
    function $b(b, c, d) {
        return b + d * (c - b)
    }
    function bc(b) {
        return b * Math.PI / 180
    };

    function cc(b) {
        return function (c) {
            if (m(c)) return [Yb(c[0], b[0], b[2]), Yb(c[1], b[1], b[3])]
        }
    }
    function dc(b) {
        return b
    };

    function ec(b, c, d) {
        var e = b.length;
        if (b[0] <= c) return 0;
        if (!(c <= b[e - 1])) if (0 < d) for (d = 1; d < e; ++d) {
            if (b[d] < c) return d - 1
        } else if (0 > d) for (d = 1; d < e; ++d) {
            if (b[d] <= c) return d
        } else for (d = 1; d < e; ++d) {
            if (b[d] == c) return d;
            if (b[d] < c) return b[d - 1] - c < c - b[d] ? d - 1 : d
        }
        return e - 1
    };

    function fc(b) {
        return function (c, d, e) {
            if (m(c)) return c = ec(b, c, e), c = Yb(c + d, 0, b.length - 1), b[c]
        }
    }
    function gc(b, c, d) {
        return function (e, f, g) {
            if (m(e)) return g = 0 < g ? 0 : 0 > g ? 1 : .5, e = Math.floor(Math.log(c / e) / Math.log(b) + g), f = Math.max(e + f, 0), m(d) && (f = Math.min(f, d)), c / Math.pow(b, f)
        }
    };

    function hc(b) {
        if (m(b)) return 0
    }
    function ic(b, c) {
        if (m(b)) return b + c
    }
    function jc(b) {
        var c = 2 * Math.PI / b;
        return function (b, e) {
            if (m(b)) return b = Math.floor((b + e) / c + .5) * c
        }
    }
    function kc() {
        var b = bc(5);
        return function (c, d) {
            if (m(c)) return Math.abs(c + d) <= b ? 0 : c + d
        }
    };

    function lc(b, c, d) {
        this.center = b;
        this.resolution = c;
        this.rotation = d
    };
    var mc = !Hb || Hb && 9 <= Vb,
        nc = !Hb || Hb && 9 <= Vb,
        oc = Hb && !Tb("9");
    !Jb || Tb("528");
    Ib && Tb("1.9b") || Hb && Tb("8") || Gb && Tb("9.5") || Jb && Tb("528");
    Ib && !Tb("8") || Hb && Tb("9");

    function pc() {
        0 != qc && (rc[ma(this)] = this);
        this.Sa = this.Sa;
        this.la = this.la
    }
    var qc = 0,
        rc = {};
    pc.prototype.Sa = !1;
    pc.prototype.hc = function () {
        if (!this.Sa && (this.Sa = !0, this.M(), 0 != qc)) {
            var b = ma(this);
            delete rc[b]
        }
    };

    function sc(b, c) {
        var d = ta(tc, c);
        b.la || (b.la = []);
        b.la.push(m(void 0) ? sa(d, void 0) : d)
    }
    pc.prototype.M = function () {
        if (this.la) for (; this.la.length;) this.la.shift()()
    };

    function tc(b) {
        b && "function" == typeof b.hc && b.hc()
    };

    function uc(b, c) {
        this.type = b;
        this.b = this.target = c;
        this.f = !1;
        this.Zf = !0
    }
    uc.prototype.hc = function () {};
    uc.prototype.lb = function () {
        this.f = !0
    };
    uc.prototype.preventDefault = function () {
        this.Zf = !1
    };

    function vc(b) {
        b.lb()
    }
    function wc(b) {
        b.preventDefault()
    };
    var xc = Hb ? "focusout" : "DOMFocusOut";

    function yc(b) {
        yc[" "](b);
        return b
    }
    yc[" "] = ca;

    function zc(b, c) {
        uc.call(this, b ? b.type : "");
        this.relatedTarget = this.b = this.target = null;
        this.i = this.e = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.n = this.d = this.c = this.o = !1;
        this.state = null;
        this.g = !1;
        this.a = null;
        b && Ac(this, b, c)
    }
    u(zc, uc);
    var Bc = [1, 4, 2];

    function Ac(b, c, d) {
        b.a = c;
        var e = b.type = c.type;
        b.target = c.target || c.srcElement;
        b.b = d;
        if (d = c.relatedTarget) {
            if (Ib) {
                var f;
                a: {
                    try {
                        yc(d.nodeName);
                        f = !0;
                        break a
                    } catch (g) {}
                    f = !1
                }
                f || (d = null)
            }
        } else "mouseover" == e ? d = c.fromElement : "mouseout" == e && (d = c.toElement);
        b.relatedTarget = d;
        Object.defineProperties ? Object.defineProperties(b, {
            offsetX: {
                configurable: !0,
                enumerable: !0,
                get: b.bf,
                set: b.hl
            },
            offsetY: {
                configurable: !0,
                enumerable: !0,
                get: b.cf,
                set: b.il
            }
        }) : (b.offsetX = b.bf(), b.offsetY = b.cf());
        b.clientX = void 0 !== c.clientX ? c.clientX : c.pageX;
        b.clientY = void 0 !== c.clientY ? c.clientY : c.pageY;
        b.screenX = c.screenX || 0;
        b.screenY = c.screenY || 0;
        b.button = c.button;
        b.e = c.keyCode || 0;
        b.i = c.charCode || ("keypress" == e ? c.keyCode : 0);
        b.o = c.ctrlKey;
        b.c = c.altKey;
        b.d = c.shiftKey;
        b.n = c.metaKey;
        b.g = Kb ? c.metaKey : c.ctrlKey;
        b.state = c.state;
        c.defaultPrevented && b.preventDefault()
    }
    function Cc(b) {
        return (mc ? 0 == b.a.button : "click" == b.type ? !0 : !! (b.a.button & Bc[0])) && !(Jb && Kb && b.o)
    }
    l = zc.prototype;
    l.lb = function () {
        zc.S.lb.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    };
    l.preventDefault = function () {
        zc.S.preventDefault.call(this);
        var b = this.a;
        if (b.preventDefault) b.preventDefault();
        else if (b.returnValue = !1, oc) try {
            if (b.ctrlKey || 112 <= b.keyCode && 123 >= b.keyCode) b.keyCode = -1
        } catch (c) {}
    };
    l.fh = function () {
        return this.a
    };
    l.bf = function () {
        return Jb || void 0 !== this.a.offsetX ? this.a.offsetX : this.a.layerX
    };
    l.hl = function (b) {
        Object.defineProperties(this, {
            offsetX: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: b
            }
        })
    };
    l.cf = function () {
        return Jb || void 0 !== this.a.offsetY ? this.a.offsetY : this.a.layerY
    };
    l.il = function (b) {
        Object.defineProperties(this, {
            offsetY: {
                writable: !0,
                enumerable: !0,
                configurable: !0,
                value: b
            }
        })
    };
    var Dc = "closure_listenable_" + (1E6 * Math.random() | 0);

    function Ec(b) {
        return !(!b || !b[Dc])
    }
    var Fc = 0;

    function Gc(b, c, d, e, f) {
        this.Xb = b;
        this.a = null;
        this.src = c;
        this.type = d;
        this.vc = !! e;
        this.qd = f;
        this.key = ++Fc;
        this.uc = this.Xc = !1
    }
    function Hc(b) {
        b.uc = !0;
        b.Xb = null;
        b.a = null;
        b.src = null;
        b.qd = null
    };

    function Ic(b) {
        this.src = b;
        this.a = {};
        this.c = 0
    }
    Ic.prototype.add = function (b, c, d, e, f) {
        var g = b.toString();
        b = this.a[g];
        b || (b = this.a[g] = [], this.c++);
        var h = Jc(b, c, e, f); - 1 < h ? (c = b[h], d || (c.Xc = !1)) : (c = new Gc(c, this.src, g, !! e, f), c.Xc = d, b.push(c));
        return c
    };
    Ic.prototype.remove = function (b, c, d, e) {
        b = b.toString();
        if (!(b in this.a)) return !1;
        var f = this.a[b];
        c = Jc(f, c, d, e);
        return -1 < c ? (Hc(f[c]), Sa.splice.call(f, c, 1), 0 == f.length && (delete this.a[b], this.c--), !0) : !1
    };

    function Kc(b, c) {
        var d = c.type;
        if (!(d in b.a)) return !1;
        var e = ab(b.a[d], c);
        e && (Hc(c), 0 == b.a[d].length && (delete b.a[d], b.c--));
        return e
    }
    function Lc(b, c, d, e, f) {
        b = b.a[c.toString()];
        c = -1;
        b && (c = Jc(b, d, e, f));
        return -1 < c ? b[c] : null
    }
    function Mc(b, c, d) {
        var e = m(c),
            f = e ? c.toString() : "",
            g = m(d);
        return pb(b.a, function (b) {
            for (var c = 0; c < b.length; ++c) if (!(e && b[c].type != f || g && b[c].vc != d)) return !0;
            return !1
        })
    }

    function Jc(b, c, d, e) {
        for (var f = 0; f < b.length; ++f) {
            var g = b[f];
            if (!g.uc && g.Xb == c && g.vc == !! d && g.qd == e) return f
        }
        return -1
    };
    var Nc = "closure_lm_" + (1E6 * Math.random() | 0),
        Oc = {}, Pc = 0;

    function z(b, c, d, e, f) {
        if (ga(c)) {
            for (var g = 0; g < c.length; g++) z(b, c[g], d, e, f);
            return null
        }
        d = Qc(d);
        return Ec(b) ? b.La(c, d, e, f) : Rc(b, c, d, !1, e, f)
    }
    function Rc(b, c, d, e, f, g) {
        if (!c) throw Error("Invalid event type");
        var h = !! f,
            k = Sc(b);
        k || (b[Nc] = k = new Ic(b));
        d = k.add(c, d, e, f, g);
        if (d.a) return d;
        e = Tc();
        d.a = e;
        e.src = b;
        e.Xb = d;
        b.addEventListener ? b.addEventListener(c.toString(), e, h) : b.attachEvent(Uc(c.toString()), e);
        Pc++;
        return d
    }

    function Tc() {
        var b = Vc,
            c = nc ? function (d) {
                return b.call(c.src, c.Xb, d)
            } : function (d) {
                d = b.call(c.src, c.Xb, d);
                if (!d) return d
            };
        return c
    }
    function Wc(b, c, d, e, f) {
        if (ga(c)) {
            for (var g = 0; g < c.length; g++) Wc(b, c[g], d, e, f);
            return null
        }
        d = Qc(d);
        return Ec(b) ? b.gb.add(String(c), d, !0, e, f) : Rc(b, c, d, !0, e, f)
    }
    function Xc(b, c, d, e, f) {
        if (ga(c)) for (var g = 0; g < c.length; g++) Xc(b, c[g], d, e, f);
        else d = Qc(d), Ec(b) ? b.Fe(c, d, e, f) : b && (b = Sc(b)) && (c = Lc(b, c, d, !! e, f)) && Yc(c)
    }

    function Yc(b) {
        if (ja(b) || !b || b.uc) return !1;
        var c = b.src;
        if (Ec(c)) return Kc(c.gb, b);
        var d = b.type,
            e = b.a;
        c.removeEventListener ? c.removeEventListener(d, e, b.vc) : c.detachEvent && c.detachEvent(Uc(d), e);
        Pc--;
        (d = Sc(c)) ? (Kc(d, b), 0 == d.c && (d.src = null, c[Nc] = null)) : Hc(b);
        return !0
    }
    function Uc(b) {
        return b in Oc ? Oc[b] : Oc[b] = "on" + b
    }
    function Zc(b, c, d, e) {
        var f = !0;
        if (b = Sc(b)) if (c = b.a[c.toString()]) for (c = c.concat(), b = 0; b < c.length; b++) {
            var g = c[b];
            g && g.vc == d && !g.uc && (g = $c(g, e), f = f && !1 !== g)
        }
        return f
    }

    function $c(b, c) {
        var d = b.Xb,
            e = b.qd || b.src;
        b.Xc && Yc(b);
        return d.call(e, c)
    }

    function Vc(b, c) {
        if (b.uc) return !0;
        if (!nc) {
            var d;
            if (!(d = c)) a: {
                d = ["window", "event"];
                for (var e = ba, f; f = d.shift();) if (null != e[f]) e = e[f];
                else {
                    d = null;
                    break a
                }
                d = e
            }
            f = d;
            d = new zc(f, this);
            e = !0;
            if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                a: {
                    var g = !1;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch (h) {
                        g = !0
                    }
                    if (g || void 0 == f.returnValue) f.returnValue = !0
                }
                f = [];
                for (g = d.b; g; g = g.parentNode) f.push(g);
                for (var g = b.type, k = f.length - 1; !d.f && 0 <= k; k--) {
                    d.b = f[k];
                    var n = Zc(f[k], g, !0, d),
                        e = e && n
                }
                for (k = 0; !d.f && k < f.length; k++) d.b = f[k], n = Zc(f[k], g, !1, d), e = e && n
            }
            return e
        }
        return $c(b, new zc(c, this))
    }
    function Sc(b) {
        b = b[Nc];
        return b instanceof Ic ? b : null
    }
    var ad = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

    function Qc(b) {
        if (ka(b)) return b;
        b[ad] || (b[ad] = function (c) {
            return b.handleEvent(c)
        });
        return b[ad]
    };

    function bd(b) {
        return function () {
            return b
        }
    }
    var cd = bd(!1),
        dd = bd(!0);

    function ed(b) {
        return b
    }
    function gd(b) {
        var c;
        c = c || 0;
        return function () {
            return b.apply(this, Array.prototype.slice.call(arguments, 0, c))
        }
    }
    function hd(b) {
        var c = arguments,
            d = c.length;
        return function () {
            for (var b, f = 0; f < d; f++) b = c[f].apply(this, arguments);
            return b
        }
    }
    function id(b) {
        var c = arguments,
            d = c.length;
        return function () {
            for (var b = 0; b < d; b++) if (!c[b].apply(this, arguments)) return !1;
            return !0
        }
    };

    function jd() {
        pc.call(this);
        this.gb = new Ic(this);
        this.Ig = this;
        this.Vd = null
    }
    u(jd, pc);
    jd.prototype[Dc] = !0;
    l = jd.prototype;
    l.addEventListener = function (b, c, d, e) {
        z(this, b, c, d, e)
    };
    l.removeEventListener = function (b, c, d, e) {
        Xc(this, b, c, d, e)
    };
    l.dispatchEvent = function (b) {
        var c, d = this.Vd;
        if (d) for (c = []; d; d = d.Vd) c.push(d);
        var d = this.Ig,
            e = b.type || b;
        if (ia(b)) b = new uc(b, d);
        else if (b instanceof uc) b.target = b.target || d;
        else {
            var f = b;
            b = new uc(e, d);
            Eb(b, f)
        }
        var f = !0,
            g;
        if (c) for (var h = c.length - 1; !b.f && 0 <= h; h--) g = b.b = c[h], f = kd(g, e, !0, b) && f;
        b.f || (g = b.b = d, f = kd(g, e, !0, b) && f, b.f || (f = kd(g, e, !1, b) && f));
        if (c) for (h = 0; !b.f && h < c.length; h++) g = b.b = c[h], f = kd(g, e, !1, b) && f;
        return f
    };
    l.M = function () {
        jd.S.M.call(this);
        if (this.gb) {
            var b = this.gb,
                c = 0,
                d;
            for (d in b.a) {
                for (var e = b.a[d], f = 0; f < e.length; f++)++c, Hc(e[f]);
                delete b.a[d];
                b.c--
            }
        }
        this.Vd = null
    };
    l.La = function (b, c, d, e) {
        return this.gb.add(String(b), c, !1, d, e)
    };
    l.Fe = function (b, c, d, e) {
        return this.gb.remove(String(b), c, d, e)
    };

    function kd(b, c, d, e) {
        c = b.gb.a[String(c)];
        if (!c) return !0;
        c = c.concat();
        for (var f = !0, g = 0; g < c.length; ++g) {
            var h = c[g];
            if (h && !h.uc && h.vc == d) {
                var k = h.Xb,
                    n = h.qd || h.src;
                h.Xc && Kc(b.gb, h);
                f = !1 !== k.call(n, e) && f
            }
        }
        return f && 0 != e.Zf
    }
    function ld(b, c, d) {
        return Mc(b.gb, m(c) ? String(c) : void 0, d)
    };

    function md() {
        jd.call(this);
        this.c = 0
    }
    u(md, jd);

    function nd(b) {
        Yc(b)
    }
    l = md.prototype;
    l.l = function () {
        ++this.c;
        this.dispatchEvent("change")
    };
    l.A = function () {
        return this.c
    };
    l.u = function (b, c, d) {
        return z(this, b, c, !1, d)
    };
    l.B = function (b, c, d) {
        return Wc(this, b, c, !1, d)
    };
    l.v = function (b, c, d) {
        Xc(this, b, c, !1, d)
    };
    l.C = nd;

    function od(b, c, d) {
        uc.call(this, b);
        this.key = c;
        this.oldValue = d
    }
    u(od, uc);

    function pd(b, c, d, e) {
        this.source = b;
        this.target = c;
        this.b = d;
        this.c = e;
        this.d = this.a = ed
    }
    pd.prototype.e = function (b, c) {
        var d = rd(this.source, this.b);
        this.a = b;
        this.d = c;
        sd(this.source, this.b, d)
    };

    function td(b) {
        md.call(this);
        ma(this);
        this.o = {};
        this.Ra = {};
        this.ec = {};
        m(b) && this.G(b)
    }
    u(td, md);
    var ud = {}, vd = {}, wd = {};

    function xd(b) {
        return ud.hasOwnProperty(b) ? ud[b] : ud[b] = "change:" + b
    }

    function rd(b, c) {
        var d = vd.hasOwnProperty(c) ? vd[c] : vd[c] = "get" + (String(c.charAt(0)).toUpperCase() + String(c.substr(1)).toLowerCase()),
            d = x(b, d);
        return m(d) ? d.call(b) : b.get(c)
    }
    l = td.prototype;
    l.O = function (b, c, d) {
        d = d || b;
        this.P(b);
        var e = xd(d);
        this.ec[b] = z(c, e, function (c) {
            sd(this, b, c.oldValue)
        }, void 0, this);
        c = new pd(this, c, b, d);
        this.Ra[b] = c;
        sd(this, b, this.o[b]);
        return c
    };
    l.get = function (b) {
        var c, d = this.Ra;
        d.hasOwnProperty(b) ? (b = d[b], c = rd(b.target, b.c), c = b.d(c)) : this.o.hasOwnProperty(b) && (c = this.o[b]);
        return c
    };
    l.I = function () {
        var b = this.Ra,
            c;
        if (xb(this.o)) {
            if (xb(b)) return [];
            c = b
        } else if (xb(b)) c = this.o;
        else {
            c = {};
            for (var d in this.o) c[d] = !0;
            for (d in b) c[d] = !0
        }
        return sb(c)
    };
    l.L = function () {
        var b = {}, c;
        for (c in this.o) b[c] = this.o[c];
        for (c in this.Ra) b[c] = this.get(c);
        return b
    };

    function sd(b, c, d) {
        var e;
        e = xd(c);
        b.dispatchEvent(new od(e, c, d));
        b.dispatchEvent(new od("propertychange", c, d))
    }
    l.set = function (b, c) {
        var d = this.Ra;
        if (d.hasOwnProperty(b)) {
            var e = d[b];
            c = e.a(c);
            var d = e.target,
                e = e.c,
                f = c,
                g = wd.hasOwnProperty(e) ? wd[e] : wd[e] = "set" + (String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()),
                g = x(d, g);
            m(g) ? g.call(d, f) : d.set(e, f)
        } else d = this.o[b], this.o[b] = c, sd(this, b, d)
    };
    l.G = function (b) {
        for (var c in b) this.set(c, b[c])
    };
    l.P = function (b) {
        var c = this.ec,
            d = c[b];
        d && (delete c[b], Yc(d), c = this.get(b), delete this.Ra[b], this.o[b] = c)
    };
    l.R = function () {
        for (var b in this.ec) this.P(b)
    };

    function yd(b, c) {
        b[0] += c[0];
        b[1] += c[1];
        return b
    }
    function zd(b, c) {
        var d = b[0],
            e = b[1],
            f = c[0],
            g = c[1],
            h = f[0],
            f = f[1],
            k = g[0],
            g = g[1],
            n = k - h,
            p = g - f,
            d = 0 === n && 0 === p ? 0 : (n * (d - h) + p * (e - f)) / (n * n + p * p || 0);
        0 >= d || (1 <= d ? (h = k, f = g) : (h += d * n, f += d * p));
        return [h, f]
    }
    function Ad(b, c) {
        var d = Zb(b + 180, 360) - 180,
            e = Math.abs(Math.round(3600 * d));
        return Math.floor(e / 3600) + "\u00b0 " + Math.floor(e / 60 % 60) + "\u2032 " + Math.floor(e % 60) + "\u2033 " + c.charAt(0 > d ? 1 : 0)
    }

    function Bd(b, c, d) {
        return m(b) ? c.replace("{x}", b[0].toFixed(d)).replace("{y}", b[1].toFixed(d)) : ""
    }
    function Cd(b, c) {
        for (var d = !0, e = b.length - 1; 0 <= e; --e) if (b[e] != c[e]) {
            d = !1;
            break
        }
        return d
    }
    function Dd(b, c) {
        var d = Math.cos(c),
            e = Math.sin(c),
            f = b[1] * d + b[0] * e;
        b[0] = b[0] * d - b[1] * e;
        b[1] = f;
        return b
    }
    function Ed(b, c) {
        var d = b[0] - c[0],
            e = b[1] - c[1];
        return d * d + e * e
    }
    function Fd(b, c) {
        return Bd(b, "{x}, {y}", c)
    };

    function Gd(b) {
        this.length = b.length || b;
        for (var c = 0; c < this.length; c++) this[c] = b[c] || 0
    }
    Gd.prototype.a = 4;
    Gd.prototype.set = function (b, c) {
        c = c || 0;
        for (var d = 0; d < b.length && c + d < this.length; d++) this[c + d] = b[d]
    };
    Gd.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && (Gd.BYTES_PER_ELEMENT = 4, Gd.prototype.BYTES_PER_ELEMENT = Gd.prototype.a, Gd.prototype.set = Gd.prototype.set, Gd.prototype.toString = Gd.prototype.toString, t("Float32Array", Gd, void 0));

    function Hd(b) {
        this.length = b.length || b;
        for (var c = 0; c < this.length; c++) this[c] = b[c] || 0
    }
    Hd.prototype.a = 8;
    Hd.prototype.set = function (b, c) {
        c = c || 0;
        for (var d = 0; d < b.length && c + d < this.length; d++) this[c + d] = b[d]
    };
    Hd.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            Hd.BYTES_PER_ELEMENT = 8
        } catch (Id) {}
        Hd.prototype.BYTES_PER_ELEMENT = Hd.prototype.a;
        Hd.prototype.set = Hd.prototype.set;
        Hd.prototype.toString = Hd.prototype.toString;
        t("Float64Array", Hd, void 0)
    };

    function Jd(b, c, d, e, f) {
        b[0] = c;
        b[1] = d;
        b[2] = e;
        b[3] = f
    };

    function Kd() {
        var b = Array(16);
        Ld(b, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return b
    }
    function Md() {
        var b = Array(16);
        Ld(b, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return b
    }
    function Ld(b, c, d, e, f, g, h, k, n, p, q, r, s, v, y, C, F) {
        b[0] = c;
        b[1] = d;
        b[2] = e;
        b[3] = f;
        b[4] = g;
        b[5] = h;
        b[6] = k;
        b[7] = n;
        b[8] = p;
        b[9] = q;
        b[10] = r;
        b[11] = s;
        b[12] = v;
        b[13] = y;
        b[14] = C;
        b[15] = F
    }

    function Nd(b, c) {
        b[0] = c[0];
        b[1] = c[1];
        b[2] = c[2];
        b[3] = c[3];
        b[4] = c[4];
        b[5] = c[5];
        b[6] = c[6];
        b[7] = c[7];
        b[8] = c[8];
        b[9] = c[9];
        b[10] = c[10];
        b[11] = c[11];
        b[12] = c[12];
        b[13] = c[13];
        b[14] = c[14];
        b[15] = c[15]
    }
    function Od(b) {
        b[0] = 1;
        b[1] = 0;
        b[2] = 0;
        b[3] = 0;
        b[4] = 0;
        b[5] = 1;
        b[6] = 0;
        b[7] = 0;
        b[8] = 0;
        b[9] = 0;
        b[10] = 1;
        b[11] = 0;
        b[12] = 0;
        b[13] = 0;
        b[14] = 0;
        b[15] = 1
    }

    function Pd(b, c, d) {
        var e = b[0],
            f = b[1],
            g = b[2],
            h = b[3],
            k = b[4],
            n = b[5],
            p = b[6],
            q = b[7],
            r = b[8],
            s = b[9],
            v = b[10],
            y = b[11],
            C = b[12],
            F = b[13],
            G = b[14];
        b = b[15];
        var w = c[0],
            U = c[1],
            N = c[2],
            Y = c[3],
            T = c[4],
            qa = c[5],
            vb = c[6],
            Ka = c[7],
            ac = c[8],
            Sb = c[9],
            La = c[10],
            Pa = c[11],
            Ud = c[12],
            qd = c[13],
            fd = c[14];
        c = c[15];
        d[0] = e * w + k * U + r * N + C * Y;
        d[1] = f * w + n * U + s * N + F * Y;
        d[2] = g * w + p * U + v * N + G * Y;
        d[3] = h * w + q * U + y * N + b * Y;
        d[4] = e * T + k * qa + r * vb + C * Ka;
        d[5] = f * T + n * qa + s * vb + F * Ka;
        d[6] = g * T + p * qa + v * vb + G * Ka;
        d[7] = h * T + q * qa + y * vb + b * Ka;
        d[8] = e * ac + k * Sb + r * La + C * Pa;
        d[9] = f * ac + n * Sb + s * La + F * Pa;
        d[10] = g * ac + p * Sb + v * La + G * Pa;
        d[11] = h * ac + q * Sb + y * La + b * Pa;
        d[12] = e * Ud + k * qd + r * fd + C * c;
        d[13] = f * Ud + n * qd + s * fd + F * c;
        d[14] = g * Ud + p * qd + v * fd + G * c;
        d[15] = h * Ud + q * qd + y * fd + b * c
    }
    function Qd(b, c, d) {
        var e = b[1] * c + b[5] * d + 0 * b[9] + b[13],
            f = b[2] * c + b[6] * d + 0 * b[10] + b[14],
            g = b[3] * c + b[7] * d + 0 * b[11] + b[15];
        b[12] = b[0] * c + b[4] * d + 0 * b[8] + b[12];
        b[13] = e;
        b[14] = f;
        b[15] = g
    }
    function Rd(b, c, d) {
        Ld(b, b[0] * c, b[1] * c, b[2] * c, b[3] * c, b[4] * d, b[5] * d, b[6] * d, b[7] * d, 1 * b[8], 1 * b[9], 1 * b[10], 1 * b[11], b[12], b[13], b[14], b[15])
    }

    function Sd(b, c) {
        var d = b[0],
            e = b[1],
            f = b[2],
            g = b[3],
            h = b[4],
            k = b[5],
            n = b[6],
            p = b[7],
            q = Math.cos(c),
            r = Math.sin(c);
        b[0] = d * q + h * r;
        b[1] = e * q + k * r;
        b[2] = f * q + n * r;
        b[3] = g * q + p * r;
        b[4] = d * -r + h * q;
        b[5] = e * -r + k * q;
        b[6] = f * -r + n * q;
        b[7] = g * -r + p * q
    }
    new Float64Array(3);
    new Float64Array(3);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(4);
    new Float64Array(16);

    function Td(b) {
        for (var c = Vd(), d = 0, e = b.length; d < e; ++d) {
            var f = c,
                g = b[d];
            g[0] < f[0] && (f[0] = g[0]);
            g[0] > f[2] && (f[2] = g[0]);
            g[1] < f[1] && (f[1] = g[1]);
            g[1] > f[3] && (f[3] = g[1])
        }
        return c
    }
    function Wd(b, c, d) {
        var e = Math.min.apply(null, b),
            f = Math.min.apply(null, c);
        b = Math.max.apply(null, b);
        c = Math.max.apply(null, c);
        return Xd(e, f, b, c, d)
    }
    function Yd(b, c, d) {
        return m(d) ? (d[0] = b[0] - c, d[1] = b[1] - c, d[2] = b[2] + c, d[3] = b[3] + c, d) : [b[0] - c, b[1] - c, b[2] + c, b[3] + c]
    }

    function Zd(b, c, d) {
        c = c < b[0] ? b[0] - c : b[2] < c ? c - b[2] : 0;
        b = d < b[1] ? b[1] - d : b[3] < d ? d - b[3] : 0;
        return c * c + b * b
    }
    function $d(b, c) {
        return b[0] <= c[0] && c[2] <= b[2] && b[1] <= c[1] && c[3] <= b[3]
    }
    function ae(b, c, d) {
        return b[0] <= c && c <= b[2] && b[1] <= d && d <= b[3]
    }
    function be(b, c) {
        var d = b[1],
            e = b[2],
            f = b[3],
            g = c[0],
            h = c[1],
            k = 0;
        g < b[0] ? k = k | 16 : g > e && (k = k | 4);
        h < d ? k |= 8 : h > f && (k |= 2);
        0 === k && (k = 1);
        return k
    }
    function Vd() {
        return [Infinity, Infinity, -Infinity, -Infinity]
    }
    function Xd(b, c, d, e, f) {
        return m(f) ? (f[0] = b, f[1] = c, f[2] = d, f[3] = e, f) : [b, c, d, e]
    }

    function ce(b, c) {
        var d = b[0],
            e = b[1];
        return Xd(d, e, d, e, c)
    }
    function de(b, c) {
        return b[0] == c[0] && b[2] == c[2] && b[1] == c[1] && b[3] == c[3]
    }
    function ee(b, c) {
        c[0] < b[0] && (b[0] = c[0]);
        c[2] > b[2] && (b[2] = c[2]);
        c[1] < b[1] && (b[1] = c[1]);
        c[3] > b[3] && (b[3] = c[3]);
        return b
    }
    function fe(b, c, d, e, f) {
        for (; d < e; d += f) {
            var g = b,
                h = c[d],
                k = c[d + 1];
            g[0] = Math.min(g[0], h);
            g[1] = Math.min(g[1], k);
            g[2] = Math.max(g[2], h);
            g[3] = Math.max(g[3], k)
        }
        return b
    }

    function ge(b, c) {
        var d;
        return (d = c.call(void 0, he(b))) || (d = c.call(void 0, ie(b))) || (d = c.call(void 0, je(b))) ? d : (d = c.call(void 0, ie(b))) ? d : !1
    }
    function he(b) {
        return [b[0], b[1]]
    }
    function ie(b) {
        return [b[2], b[1]]
    }
    function ke(b) {
        return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]
    }
    function le(b, c) {
        var d;
        "bottom-left" === c ? d = he(b) : "bottom-right" === c ? d = ie(b) : "top-left" === c ? d = me(b) : "top-right" === c && (d = je(b));
        return d
    }

    function ne(b, c, d, e) {
        var f = c * e[0] / 2;
        e = c * e[1] / 2;
        c = Math.cos(d);
        d = Math.sin(d);
        f = [-f, -f, f, f];
        e = [-e, e, -e, e];
        var g, h, k;
        for (g = 0; 4 > g; ++g) h = f[g], k = e[g], f[g] = b[0] + h * c - k * d, e[g] = b[1] + h * d + k * c;
        return Wd(f, e, void 0)
    }
    function oe(b) {
        return b[3] - b[1]
    }
    function pe(b, c, d) {
        d = m(d) ? d : Vd();
        qe(b, c) && (d[0] = b[0] > c[0] ? b[0] : c[0], d[1] = b[1] > c[1] ? b[1] : c[1], d[2] = b[2] < c[2] ? b[2] : c[2], d[3] = b[3] < c[3] ? b[3] : c[3]);
        return d
    }
    function me(b) {
        return [b[0], b[3]]
    }
    function je(b) {
        return [b[2], b[3]]
    }
    function re(b) {
        return b[2] - b[0]
    }

    function qe(b, c) {
        return b[0] <= c[2] && b[2] >= c[0] && b[1] <= c[3] && b[3] >= c[1]
    }
    function se(b) {
        return b[2] < b[0] || b[3] < b[1]
    }
    function te(b, c) {
        return m(c) ? (c[0] = b[0], c[1] = b[1], c[2] = b[2], c[3] = b[3], c) : b
    }
    function ue(b, c) {
        var d = (b[2] - b[0]) / 2 * (c - 1),
            e = (b[3] - b[1]) / 2 * (c - 1);
        b[0] -= d;
        b[2] += d;
        b[1] -= e;
        b[3] += e
    }
    function we(b, c, d) {
        b = [b[0], b[1], b[0], b[3], b[2], b[1], b[2], b[3]];
        c(b, b, 2);
        return Wd([b[0], b[2], b[4], b[6]], [b[1], b[3], b[5], b[7]], d)
    };
    /*

 Latitude/longitude spherical geodesy formulae taken from
 http://www.movable-type.co.uk/scripts/latlong.html
 Licenced under CC-BY-3.0.
*/
    function xe(b) {
        this.radius = b
    }
    function ye(b, c) {
        var d = bc(b[1]),
            e = bc(c[1]),
            f = (e - d) / 2,
            g = bc(c[0] - b[0]) / 2,
            d = Math.sin(f) * Math.sin(f) + Math.sin(g) * Math.sin(g) * Math.cos(d) * Math.cos(e);
        return 2 * ze.radius * Math.atan2(Math.sqrt(d), Math.sqrt(1 - d))
    }
    xe.prototype.offset = function (b, c, d) {
        var e = bc(b[1]);
        c /= this.radius;
        var f = Math.asin(Math.sin(e) * Math.cos(c) + Math.cos(e) * Math.sin(c) * Math.cos(d));
        return [180 * (bc(b[0]) + Math.atan2(Math.sin(d) * Math.sin(c) * Math.cos(e), Math.cos(c) - Math.sin(e) * Math.sin(f))) / Math.PI, 180 * f / Math.PI]
    };
    var ze = new xe(6370997);
    var Ae = {};
    Ae.degrees = 2 * Math.PI * ze.radius / 360;
    Ae.ft = .3048;
    Ae.m = 1;

    function Be(b) {
        this.a = b.code;
        this.c = b.units;
        this.g = m(b.extent) ? b.extent : null;
        this.d = m(b.worldExtent) ? b.worldExtent : null;
        this.b = m(b.axisOrientation) ? b.axisOrientation : "enu";
        this.f = m(b.global) ? b.global : !1;
        this.e = null
    }
    l = Be.prototype;
    l.gh = function () {
        return this.a
    };
    l.D = function () {
        return this.g
    };
    l.rj = function () {
        return this.c
    };
    l.ie = function () {
        return Ae[this.c]
    };
    l.Mh = function () {
        return this.d
    };

    function Ce(b) {
        return b.b
    }
    l.wi = function () {
        return this.f
    };
    l.sj = function (b) {
        this.g = b
    };
    l.pl = function (b) {
        this.d = b
    };
    l.je = function (b, c) {
        if ("degrees" == this.c) return b;
        var d = De(this, Ee("EPSG:4326")),
            e = [c[0] - b / 2, c[1], c[0] + b / 2, c[1], c[0], c[1] - b / 2, c[0], c[1] + b / 2],
            e = d(e, e, 2),
            d = (ye(e.slice(0, 2), e.slice(2, 4)) + ye(e.slice(4, 6), e.slice(6, 8))) / 2,
            e = this.ie();
        m(e) && (d /= e);
        return d
    };
    var Fe = {}, Ge = {};

    function He(b) {
        Ie(b);
        Ta(b, function (c) {
            Ta(b, function (b) {
                c !== b && Je(c, b, Ke)
            })
        })
    }
    function Le() {
        var b = Me,
            c = Ne,
            d = Oe;
        Ta(Pe, function (e) {
            Ta(b, function (b) {
                Je(e, b, c);
                Je(b, e, d)
            })
        })
    }

    function Qe(b) {
        Fe[b.a] = b;
        Je(b, b, Ke)
    }
    function Ie(b) {
        var c = [];
        Ta(b, function (b) {
            c.push(Qe(b))
        })
    }
    function Re(b) {
        return null != b ? ia(b) ? Ee(b) : b : Ee("EPSG:3857")
    }
    function Je(b, c, d) {
        b = b.a;
        c = c.a;
        b in Ge || (Ge[b] = {});
        Ge[b][c] = d
    }
    function Se(b, c, d, e) {
        b = Ee(b);
        c = Ee(c);
        Je(b, c, Te(d));
        Je(c, b, Te(e))
    }
    function Te(b) {
        return function (c, d, e) {
            var f = c.length;
            e = m(e) ? e : 2;
            d = m(d) ? d : Array(f);
            var g, h;
            for (h = 0; h < f; h += e) for (g = b([c[h], c[h + 1]]), d[h] = g[0], d[h + 1] = g[1], g = e - 1; 2 <= g; --g) d[h + g] = c[h + g];
            return d
        }
    }

    function Ee(b) {
        var c;
        if (b instanceof Be) c = b;
        else if (ia(b)) {
            if (c = Fe[b], !m(c) && "function" == typeof proj4) {
                var d = proj4.defs(b);
                if (m(d)) {
                    c = d.units;
                    !m(c) && m(d.to_meter) && (c = d.to_meter.toString(), Ae[c] = d.to_meter);
                    c = new Be({
                        code: b,
                        units: c,
                        axisOrientation: d.axis
                    });
                    Qe(c);
                    var e, f, g;
                    for (e in Fe) f = proj4.defs(e), m(f) && (g = Ee(e), f === d ? He([g, c]) : (f = proj4(e, b), Se(g, c, f.forward, f.inverse)))
                } else c = null
            }
        } else c = null;
        return c
    }
    function Ue(b, c) {
        return b === c ? !0 : b.c != c.c ? !1 : De(b, c) === Ke
    }

    function Ve(b, c) {
        var d = Ee(b),
            e = Ee(c);
        return De(d, e)
    }
    function De(b, c) {
        var d = b.a,
            e = c.a,
            f;
        d in Ge && e in Ge[d] && (f = Ge[d][e]);
        m(f) || (f = We);
        return f
    }
    function We(b, c) {
        if (m(c) && b !== c) {
            for (var d = 0, e = b.length; d < e; ++d) c[d] = b[d];
            b = c
        }
        return b
    }
    function Ke(b, c) {
        var d;
        if (m(c)) {
            d = 0;
            for (var e = b.length; d < e; ++d) c[d] = b[d];
            d = c
        } else d = b.slice();
        return d
    }
    function Xe(b, c, d) {
        c = Ve(c, d);
        return we(b, c)
    };

    function A(b) {
        td.call(this);
        b = m(b) ? b : {};
        this.j = [0, 0];
        var c = {};
        c.center = m(b.center) ? b.center : null;
        this.q = Re(b.projection);
        var d, e, f, g = m(b.minZoom) ? b.minZoom : 0;
        d = m(b.maxZoom) ? b.maxZoom : 28;
        var h = m(b.zoomFactor) ? b.zoomFactor : 2;
        if (m(b.resolutions)) d = b.resolutions, e = d[0], f = d[d.length - 1], d = fc(d);
        else {
            e = Re(b.projection);
            f = e.D();
            var k = (null === f ? 360 * Ae.degrees / Ae[e.c] : Math.max(re(f), oe(f))) / 256 / Math.pow(2, 0),
                n = k / Math.pow(2, 28);
            e = b.maxResolution;
            m(e) ? g = 0 : e = k / Math.pow(h, g);
            f = b.minResolution;
            m(f) || (f = m(b.maxZoom) ? m(b.maxResolution) ? e / Math.pow(h, d) : k / Math.pow(h, d) : n);
            d = g + Math.floor(Math.log(e / f) / Math.log(h));
            f = e / Math.pow(h, d - g);
            d = gc(h, e, d - g)
        }
        this.f = e;
        this.F = f;
        this.p = g;
        g = m(b.extent) ? cc(b.extent) : dc;
        (m(b.enableRotation) ? b.enableRotation : 1) ? (e = b.constrainRotation, e = m(e) && !0 !== e ? !1 === e ? ic : ja(e) ? jc(e) : ic : kc()) : e = hc;
        this.t = new lc(g, d, e);
        m(b.resolution) ? c.resolution = b.resolution : m(b.zoom) && (c.resolution = this.constrainResolution(this.f, b.zoom - this.p));
        c.rotation = m(b.rotation) ? b.rotation : 0;
        this.G(c)
    }
    u(A, td);
    A.prototype.i = function (b) {
        return this.t.center(b)
    };
    A.prototype.constrainResolution = function (b, c, d) {
        return this.t.resolution(b, c || 0, d || 0)
    };
    A.prototype.constrainRotation = function (b, c) {
        return this.t.rotation(b, c || 0)
    };
    A.prototype.a = function () {
        return this.get("center")
    };
    A.prototype.getCenter = A.prototype.a;
    A.prototype.g = function (b) {
        var c = this.a(),
            d = this.b();
        return [c[0] - d * b[0] / 2, c[1] - d * b[1] / 2, c[0] + d * b[0] / 2, c[1] + d * b[1] / 2]
    };
    A.prototype.J = function () {
        return this.q
    };
    A.prototype.b = function () {
        return this.get("resolution")
    };
    A.prototype.getResolution = A.prototype.b;
    A.prototype.n = function (b, c) {
        return Math.max(re(b) / c[0], oe(b) / c[1])
    };

    function Ye(b) {
        var c = b.f,
            d = Math.log(c / b.F) / Math.log(2);
        return function (b) {
            return c / Math.pow(2, b * d)
        }
    }
    A.prototype.e = function () {
        return this.get("rotation")
    };
    A.prototype.getRotation = A.prototype.e;

    function Ze(b) {
        var c = b.f,
            d = Math.log(c / b.F) / Math.log(2);
        return function (b) {
            return Math.log(c / b) / Math.log(2) / d
        }
    }

    function $e(b) {
        var c = b.a(),
            d = b.q,
            e = b.b();
        b = b.e();
        return {
            center: c.slice(),
            projection: m(d) ? d : null,
            resolution: e,
            rotation: m(b) ? b : 0
        }
    }
    l = A.prototype;
    l.Oh = function () {
        var b, c = this.b();
        if (m(c)) {
            var d, e = 0;
            do {
                d = this.constrainResolution(this.f, e);
                if (d == c) {
                    b = e;
                    break
                }++e
            } while (d > this.F)
        }
        return m(b) ? this.p + b : b
    };
    l.ge = function (b, c) {
        if (!se(b)) {
            this.Oa(ke(b));
            var d = this.n(b, c),
                e = this.constrainResolution(d, 0, 0);
            e < d && (e = this.constrainResolution(e, -1, 0));
            this.d(e)
        }
    };
    l.dh = function (b, c, d) {
        var e = m(d) ? d : {};
        d = m(e.padding) ? e.padding : [0, 0, 0, 0];
        var f = m(e.constrainResolution) ? e.constrainResolution : !0,
            g = m(e.nearest) ? e.nearest : !1,
            h;
        m(e.minResolution) ? h = e.minResolution : m(e.maxZoom) ? h = this.constrainResolution(this.f, e.maxZoom - this.p, 0) : h = 0;
        var k = b.k,
            n = this.e(),
            e = Math.cos(-n),
            n = Math.sin(-n),
            p = Infinity,
            q = Infinity,
            r = -Infinity,
            s = -Infinity;
        b = b.s;
        for (var v = 0, y = k.length; v < y; v += b) var C = k[v] * e - k[v + 1] * n,
            F = k[v] * n + k[v + 1] * e,
            p = Math.min(p, C),
            q = Math.min(q, F),
            r = Math.max(r, C),
            s = Math.max(s,
            F);
        c = this.n([p, q, r, s], [c[0] - d[1] - d[3], c[1] - d[0] - d[2]]);
        c = isNaN(c) ? h : Math.max(c, h);
        f && (h = this.constrainResolution(c, 0, 0), !g && h < c && (h = this.constrainResolution(h, -1, 0)), c = h);
        this.d(c);
        n = -n;
        g = (p + r) / 2 + (d[1] - d[3]) / 2 * c;
        d = (q + s) / 2 + (d[0] - d[2]) / 2 * c;
        this.Oa([g * e - d * n, d * e + g * n])
    };
    l.Yg = function (b, c, d) {
        var e = this.e(),
            f = Math.cos(-e),
            e = Math.sin(-e),
            g = b[0] * f - b[1] * e;
        b = b[1] * f + b[0] * e;
        var h = this.b(),
            g = g + (c[0] / 2 - d[0]) * h;
        b += (d[1] - c[1] / 2) * h;
        e = -e;
        this.Oa([g * f - b * e, b * f + g * e])
    };

    function af(b) {
        return null != b.a() && m(b.b())
    }
    l.rotate = function (b, c) {
        if (m(c)) {
            var d, e = this.a();
            m(e) && (d = [e[0] - c[0], e[1] - c[1]], Dd(d, b - this.e()), yd(d, c));
            this.Oa(d)
        }
        this.r(b)
    };
    l.Oa = function (b) {
        this.set("center", b)
    };
    A.prototype.setCenter = A.prototype.Oa;

    function bf(b, c) {
        b.j[1] += c
    }
    A.prototype.d = function (b) {
        this.set("resolution", b)
    };
    A.prototype.setResolution = A.prototype.d;
    A.prototype.r = function (b) {
        this.set("rotation", b)
    };
    A.prototype.setRotation = A.prototype.r;
    A.prototype.Q = function (b) {
        b = this.constrainResolution(this.f, b - this.p, 0);
        this.d(b)
    };

    function cf(b) {
        return 1 - Math.pow(1 - b, 3)
    };

    function df(b) {
        return 3 * b * b - 2 * b * b * b
    }
    function ef(b) {
        return b
    }
    function ff(b) {
        return .5 > b ? df(2 * b) : 1 - df(2 * (b - .5))
    };

    function gf(b) {
        var c = b.source,
            d = m(b.start) ? b.start : ua(),
            e = c[0],
            f = c[1],
            g = m(b.duration) ? b.duration : 1E3,
            h = m(b.easing) ? b.easing : df;
        return function (b, c) {
            if (c.time < d) return c.animate = !0, c.viewHints[0] += 1, !0;
            if (c.time < d + g) {
                var p = 1 - h((c.time - d) / g),
                    q = e - c.viewState.center[0],
                    r = f - c.viewState.center[1];
                c.animate = !0;
                c.viewState.center[0] += p * q;
                c.viewState.center[1] += p * r;
                c.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function hf(b) {
        var c = m(b.rotation) ? b.rotation : 0,
            d = m(b.start) ? b.start : ua(),
            e = m(b.duration) ? b.duration : 1E3,
            f = m(b.easing) ? b.easing : df,
            g = m(b.anchor) ? b.anchor : null;
        return function (b, k) {
            if (k.time < d) return k.animate = !0, k.viewHints[0] += 1, !0;
            if (k.time < d + e) {
                var n = 1 - f((k.time - d) / e),
                    n = (c - k.viewState.rotation) * n;
                k.animate = !0;
                k.viewState.rotation += n;
                if (null !== g) {
                    var p = k.viewState.center;
                    p[0] -= g[0];
                    p[1] -= g[1];
                    Dd(p, n);
                    yd(p, g)
                }
                k.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }

    function jf(b) {
        var c = b.resolution,
            d = m(b.start) ? b.start : ua(),
            e = m(b.duration) ? b.duration : 1E3,
            f = m(b.easing) ? b.easing : df;
        return function (b, h) {
            if (h.time < d) return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < d + e) {
                var k = 1 - f((h.time - d) / e),
                    n = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += k * n;
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    };

    function kf(b, c, d, e) {
        return m(e) ? (e[0] = b, e[1] = c, e[2] = d, e) : [b, c, d]
    }
    function lf(b, c, d) {
        return b + "/" + c + "/" + d
    }
    function mf(b) {
        var c = b[0],
            d = Array(c),
            e = 1 << c - 1,
            f, g;
        for (f = 0; f < c; ++f) g = 48, b[1] & e && (g += 1), b[2] & e && (g += 2), d[f] = String.fromCharCode(g), e >>= 1;
        return d.join("")
    }
    function nf(b) {
        return lf(b[0], b[1], b[2])
    };

    function of(b, c, d, e) {
        this.a = b;
        this.d = c;
        this.b = d;
        this.c = e
    }
    function pf(b, c, d, e, f) {
        return m(f) ? (f.a = b, f.d = c, f.b = d, f.c = e, f) : new of(b, c, d, e)
    }
    of.prototype.contains = function (b) {
        return qf(this, b[1], b[2])
    };

    function rf(b, c) {
        return b.a <= c.a && c.d <= b.d && b.b <= c.b && c.c <= b.c
    }
    function qf(b, c, d) {
        return b.a <= c && c <= b.d && b.b <= d && d <= b.c
    }
    function sf(b, c) {
        return b.a == c.a && b.b == c.b && b.d == c.d && b.c == c.c
    };

    function tf(b) {
        this.c = b.html;
        this.a = m(b.tileRanges) ? b.tileRanges : null
    }
    tf.prototype.b = function () {
        return this.c
    };
    var uf = !Hb || Hb && 9 <= Vb;
    !Ib && !Hb || Hb && Hb && 9 <= Vb || Ib && Tb("1.9.1");
    Hb && Tb("9");
    Fb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    Fb("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
    Fb("embed", "iframe", "link", "object", "script", "style", "template");

    function vf(b, c) {
        this.x = m(b) ? b : 0;
        this.y = m(c) ? c : 0
    }
    l = vf.prototype;
    l.clone = function () {
        return new vf(this.x, this.y)
    };
    l.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    l.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    l.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    l.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.x *= b;
        this.y *= d;
        return this
    };

    function wf(b, c) {
        this.width = b;
        this.height = c
    }
    l = wf.prototype;
    l.clone = function () {
        return new wf(this.width, this.height)
    };
    l.ia = function () {
        return !(this.width * this.height)
    };
    l.ceil = function () {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function () {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function () {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.width *= b;
        this.height *= d;
        return this
    };

    function xf(b) {
        return b ? new yf(zf(b)) : ya || (ya = new yf)
    }
    function Af(b) {
        var c = document;
        return ia(b) ? c.getElementById(b) : b
    }
    function Cf(b, c) {
        ob(c, function (c, e) {
            "style" == e ? b.style.cssText = c : "class" == e ? b.className = c : "for" == e ? b.htmlFor = c : e in Df ? b.setAttribute(Df[e], c) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? b.setAttribute(e, c) : b[e] = c
        })
    }
    var Df = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Ef(b) {
        b = b.document.documentElement;
        return new wf(b.clientWidth, b.clientHeight)
    }

    function Ff(b, c, d) {
        var e = arguments,
            f = document,
            g = e[0],
            h = e[1];
        if (!uf && h && (h.name || h.type)) {
            g = ["<", g];
            h.name && g.push(' name="', Ba(h.name), '"');
            if (h.type) {
                g.push(' type="', Ba(h.type), '"');
                var k = {};
                Eb(k, h);
                delete k.type;
                h = k
            }
            g.push(">");
            g = g.join("")
        }
        g = f.createElement(g);
        h && (ia(h) ? g.className = h : ga(h) ? g.className = h.join(" ") : Cf(g, h));
        2 < e.length && Gf(f, g, e, 2);
        return g
    }

    function Gf(b, c, d, e) {
        function f(d) {
            d && c.appendChild(ia(d) ? b.createTextNode(d) : d)
        }
        for (; e < d.length; e++) {
            var g = d[e];
            !ha(g) || la(g) && 0 < g.nodeType ? f(g) : Ta(Hf(g) ? cb(g) : g, f)
        }
    }
    function If(b) {
        return document.createElement(b)
    }
    function Jf(b, c) {
        Gf(zf(b), b, arguments, 1)
    }
    function Kf(b) {
        for (var c; c = b.firstChild;) b.removeChild(c)
    }
    function Lf(b, c) {
        c.parentNode && c.parentNode.insertBefore(b, c.nextSibling)
    }
    function Mf(b, c, d) {
        b.insertBefore(c, b.childNodes[d] || null)
    }

    function Nf(b) {
        b && b.parentNode && b.parentNode.removeChild(b)
    }
    function Of(b) {
        if (void 0 != b.firstElementChild) b = b.firstElementChild;
        else for (b = b.firstChild; b && 1 != b.nodeType;) b = b.nextSibling;
        return b
    }
    function Pf(b, c) {
        if (b.contains && 1 == c.nodeType) return b == c || b.contains(c);
        if ("undefined" != typeof b.compareDocumentPosition) return b == c || Boolean(b.compareDocumentPosition(c) & 16);
        for (; c && b != c;) c = c.parentNode;
        return c == b
    }
    function zf(b) {
        return 9 == b.nodeType ? b : b.ownerDocument || b.document
    }

    function Qf(b, c) {
        if ("textContent" in b) b.textContent = c;
        else if (3 == b.nodeType) b.data = c;
        else if (b.firstChild && 3 == b.firstChild.nodeType) {
            for (; b.lastChild != b.firstChild;) b.removeChild(b.lastChild);
            b.firstChild.data = c
        } else Kf(b), b.appendChild(zf(b).createTextNode(String(c)))
    }
    function Hf(b) {
        if (b && "number" == typeof b.length) {
            if (la(b)) return "function" == typeof b.item || "string" == typeof b.item;
            if (ka(b)) return "function" == typeof b.item
        }
        return !1
    }
    function yf(b) {
        this.a = b || ba.document || document
    }

    function Rf() {
        return !0
    }
    function Sf(b) {
        var c = b.a;
        b = Jb ? c.body || c.documentElement : c.documentElement;
        c = c.parentWindow || c.defaultView;
        return Hb && Tb("10") && c.pageYOffset != b.scrollTop ? new vf(b.scrollLeft, b.scrollTop) : new vf(c.pageXOffset || b.scrollLeft, c.pageYOffset || b.scrollTop)
    }
    yf.prototype.appendChild = function (b, c) {
        b.appendChild(c)
    };
    yf.prototype.contains = Pf;

    function Tf(b, c) {
        var d = If("CANVAS");
        m(b) && (d.width = b);
        m(c) && (d.height = c);
        return d.getContext("2d")
    }
    var Uf = function () {
        var b;
        return function () {
            if (!m(b)) if (ba.getComputedStyle) {
                var c = If("P"),
                    d, e = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                document.body.appendChild(c);
                for (var f in e) f in c.style && (c.style[f] = "translate(1px,1px)", d = ba.getComputedStyle(c).getPropertyValue(e[f]));
                Nf(c);
                b = d && "none" !== d
            } else b = !1;
            return b
        }
    }(),
        Vf = function () {
            var b;
            return function () {
                if (!m(b)) if (ba.getComputedStyle) {
                    var c = If("P"),
                        d, e = {
                            webkitTransform: "-webkit-transform",
                            OTransform: "-o-transform",
                            msTransform: "-ms-transform",
                            MozTransform: "-moz-transform",
                            transform: "transform"
                        };
                    document.body.appendChild(c);
                    for (var f in e) f in c.style && (c.style[f] = "translate3d(1px,1px,1px)", d = ba.getComputedStyle(c).getPropertyValue(e[f]));
                    Nf(c);
                    b = d && "none" !== d
                } else b = !1;
                return b
            }
        }();

    function Wf(b, c) {
        var d = b.style;
        d.WebkitTransform = c;
        d.MozTransform = c;
        d.a = c;
        d.msTransform = c;
        d.transform = c;
        Hb && !Xb && (b.style.transformOrigin = "0 0")
    }

    function Xf(b, c) {
        var d;
        if (Vf()) {
            if (m(6)) {
                var e = Array(16);
                for (d = 0; 16 > d; ++d) e[d] = c[d].toFixed(6);
                d = e.join(",")
            } else d = c.join(",");
            Wf(b, "matrix3d(" + d + ")")
        } else if (Uf()) {
            e = [c[0], c[1], c[4], c[5], c[12], c[13]];
            if (m(6)) {
                var f = Array(6);
                for (d = 0; 6 > d; ++d) f[d] = e[d].toFixed(6);
                d = f.join(",")
            } else d = e.join(",");
            Wf(b, "matrix(" + d + ")")
        } else b.style.left = Math.round(c[12]) + "px", b.style.top = Math.round(c[13]) + "px"
    };
    var Yf = ["experimental-webgl", "webgl", "webkit-3d", "moz-webgl"];

    function Zf(b, c) {
        var d, e, f = Yf.length;
        for (e = 0; e < f; ++e) try {
            if (d = b.getContext(Yf[e], c), null !== d) return d
        } catch (g) {}
        return null
    };
    var $f, ag = ba.devicePixelRatio || 1,
        bg = "ArrayBuffer" in ba,
        cg = !1,
        dg = function () {
            if (!("HTMLCanvasElement" in ba)) return !1;
            try {
                var b = Tf();
                if (null === b) return !1;
                m(b.setLineDash) && (cg = !0);
                return !0
            } catch (c) {
                return !1
            }
        }(),
        eg = "DeviceOrientationEvent" in ba,
        fg = "geolocation" in ba.navigator,
        gg = "ontouchstart" in ba,
        hg = "PointerEvent" in ba,
        ig = !! ba.navigator.msPointerEnabled,
        jg = !1,
        kg, lg = [];
    if ("WebGLRenderingContext" in ba) try {
        var mg = If("CANVAS"),
            ng = Zf(mg, {
                bh: !0
            });
        null !== ng && (jg = !0, kg = ng.getParameter(ng.MAX_TEXTURE_SIZE), lg = ng.getSupportedExtensions())
    } catch (og) {}
    $f = jg;
    wa = lg;
    va = kg;

    function pg(b, c, d) {
        uc.call(this, b, d);
        this.element = c
    }
    u(pg, uc);

    function B(b) {
        td.call(this);
        this.a = b || [];
        qg(this)
    }
    u(B, td);
    l = B.prototype;
    l.clear = function () {
        for (; 0 < this.Ib();) this.pop()
    };
    l.qf = function (b) {
        var c, d;
        c = 0;
        for (d = b.length; c < d; ++c) this.push(b[c]);
        return this
    };
    l.forEach = function (b, c) {
        Ta(this.a, b, c)
    };
    l.Mi = function () {
        return this.a
    };
    l.item = function (b) {
        return this.a[b]
    };
    l.Ib = function () {
        return this.get("length")
    };
    l.rd = function (b, c) {
        eb(this.a, b, 0, c);
        qg(this);
        this.dispatchEvent(new pg("add", c, this))
    };
    l.pop = function () {
        return this.De(this.Ib() - 1)
    };
    l.push = function (b) {
        var c = this.a.length;
        this.rd(c, b);
        return c
    };
    l.remove = function (b) {
        var c = this.a,
            d, e;
        d = 0;
        for (e = c.length; d < e; ++d) if (c[d] === b) return this.De(d)
    };
    l.De = function (b) {
        var c = this.a[b];
        Sa.splice.call(this.a, b, 1);
        qg(this);
        this.dispatchEvent(new pg("remove", c, this));
        return c
    };
    l.bl = function (b, c) {
        var d = this.Ib();
        if (b < d) d = this.a[b], this.a[b] = c, this.dispatchEvent(new pg("remove", d, this)), this.dispatchEvent(new pg("add", c, this));
        else {
            for (; d < b; ++d) this.rd(d, void 0);
            this.rd(b, c)
        }
    };

    function qg(b) {
        b.set("length", b.a.length)
    };
    var rg = /^#(?:[0-9a-f]{3}){1,2}$/i,
        sg = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i,
        tg = /^(?:rgba)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|1|0\.\d{0,10})\)$/i;

    function ug(b) {
        return ga(b) ? b : vg(b)
    }
    function wg(b) {
        if (!ia(b)) {
            var c = b[0];
            c != (c | 0) && (c = c + .5 | 0);
            var d = b[1];
            d != (d | 0) && (d = d + .5 | 0);
            var e = b[2];
            e != (e | 0) && (e = e + .5 | 0);
            b = "rgba(" + c + "," + d + "," + e + "," + b[3] + ")"
        }
        return b
    }
    var vg = function () {
        var b = {}, c = 0;
        return function (d) {
            var e;
            if (b.hasOwnProperty(d)) e = b[d];
            else {
                if (1024 <= c) {
                    e = 0;
                    for (var f in b) 0 === (e++ & 3) && (delete b[f], --c)
                }
                var g, h;
                rg.exec(d) ? (h = 3 == d.length - 1 ? 1 : 2, e = parseInt(d.substr(1 + 0 * h, h), 16), f = parseInt(d.substr(1 + 1 * h, h), 16), g = parseInt(d.substr(1 + 2 * h, h), 16), 1 == h && (e = (e << 4) + e, f = (f << 4) + f, g = (g << 4) + g), e = [e, f, g, 1]) : (h = tg.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]), h = Number(h[4]), e = [e, f, g, h], e = xg(e, e)) : (h = sg.exec(d)) ? (e = Number(h[1]), f = Number(h[2]), g = Number(h[3]),
                e = [e, f, g, 1], e = xg(e, e)) : e = void 0;
                b[d] = e;
                ++c
            }
            return e
        }
    }();

    function xg(b, c) {
        var d = m(c) ? c : [];
        d[0] = Yb(b[0] + .5 | 0, 0, 255);
        d[1] = Yb(b[1] + .5 | 0, 0, 255);
        d[2] = Yb(b[2] + .5 | 0, 0, 255);
        d[3] = Yb(b[3], 0, 1);
        return d
    };

    function yg() {
        this.g = Kd();
        this.c = void 0;
        this.a = Kd();
        this.d = void 0;
        this.b = Kd();
        this.f = void 0;
        this.e = Kd();
        this.i = void 0;
        this.o = Kd()
    }

    function zg(b, c, d, e, f) {
        var g = !1;
        m(c) && c !== b.c && (g = b.a, Od(g), g[12] = c, g[13] = c, g[14] = c, g[15] = 1, b.c = c, g = !0);
        if (m(d) && d !== b.d) {
            g = b.b;
            Od(g);
            g[0] = d;
            g[5] = d;
            g[10] = d;
            g[15] = 1;
            var h = -.5 * d + .5;
            g[12] = h;
            g[13] = h;
            g[14] = h;
            g[15] = 1;
            b.d = d;
            g = !0
        }
        m(e) && e !== b.f && (g = Math.cos(e), h = Math.sin(e), Ld(b.e, .213 + .787 * g - .213 * h, .213 - .213 * g + .143 * h, .213 - .213 * g - .787 * h, 0, .715 - .715 * g - .715 * h, .715 + .285 * g + .14 * h, .715 - .715 * g + .715 * h, 0, .072 - .072 * g + .928 * h, .072 - .072 * g - .283 * h, .072 + .928 * g + .072 * h, 0, 0, 0, 0, 1), b.f = e, g = !0);
        m(f) && f !== b.i && (Ld(b.o, .213 + .787 * f, .213 - .213 * f, .213 - .213 * f, 0, .715 - .715 * f, .715 + .285 * f, .715 - .715 * f, 0, .072 - .072 * f, .072 - .072 * f, .072 + .928 * f, 0, 0, 0, 0, 1), b.i = f, g = !0);
        g && (g = b.g, Od(g), m(d) && Pd(g, b.b, g), m(c) && Pd(g, b.a, g), m(f) && Pd(g, b.o, g), m(e) && Pd(g, b.e, g));
        return b.g
    };

    function Ag(b) {
        if (b.classList) return b.classList;
        b = b.className;
        return ia(b) && b.match(/\S+/g) || []
    }
    function Bg(b, c) {
        return b.classList ? b.classList.contains(c) : Za(Ag(b), c)
    }
    function Cg(b, c) {
        b.classList ? b.classList.add(c) : Bg(b, c) || (b.className += 0 < b.className.length ? " " + c : c)
    }
    function Dg(b, c) {
        b.classList ? b.classList.remove(c) : Bg(b, c) && (b.className = Ua(Ag(b), function (b) {
            return b != c
        }).join(" "))
    }
    function Eg(b, c) {
        Bg(b, c) ? Dg(b, c) : Cg(b, c)
    };

    function Fg(b, c, d, e) {
        this.top = b;
        this.right = c;
        this.bottom = d;
        this.left = e
    }
    l = Fg.prototype;
    l.clone = function () {
        return new Fg(this.top, this.right, this.bottom, this.left)
    };
    l.contains = function (b) {
        return this && b ? b instanceof Fg ? b.left >= this.left && b.right <= this.right && b.top >= this.top && b.bottom <= this.bottom : b.x >= this.left && b.x <= this.right && b.y >= this.top && b.y <= this.bottom : !1
    };
    l.ceil = function () {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    l.floor = function () {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    l.round = function () {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    l.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.left *= b;
        this.right *= b;
        this.top *= d;
        this.bottom *= d;
        return this
    };

    function Gg(b, c, d, e) {
        this.left = b;
        this.top = c;
        this.width = d;
        this.height = e
    }
    l = Gg.prototype;
    l.clone = function () {
        return new Gg(this.left, this.top, this.width, this.height)
    };
    l.contains = function (b) {
        return b instanceof Gg ? this.left <= b.left && this.left + this.width >= b.left + b.width && this.top <= b.top && this.top + this.height >= b.top + b.height : b.x >= this.left && b.x <= this.left + this.width && b.y >= this.top && b.y <= this.top + this.height
    };

    function Hg(b, c) {
        var d = c.x < b.left ? b.left - c.x : Math.max(c.x - (b.left + b.width), 0),
            e = c.y < b.top ? b.top - c.y : Math.max(c.y - (b.top + b.height), 0);
        return d * d + e * e
    }
    l.distance = function (b) {
        return Math.sqrt(Hg(this, b))
    };
    l.ceil = function () {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    l.floor = function () {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    l.round = function () {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    l.scale = function (b, c) {
        var d = ja(c) ? c : b;
        this.left *= b;
        this.width *= b;
        this.top *= d;
        this.height *= d;
        return this
    };

    function Ig(b, c) {
        var d = zf(b);
        return d.defaultView && d.defaultView.getComputedStyle && (d = d.defaultView.getComputedStyle(b, null)) ? d[c] || d.getPropertyValue(c) || "" : ""
    }
    function Jg(b, c) {
        return Ig(b, c) || (b.currentStyle ? b.currentStyle[c] : null) || b.style && b.style[c]
    }
    function Kg(b, c, d) {
        var e, f = Ib && (Kb || Nb) && Tb("1.9");
        c instanceof vf ? (e = c.x, c = c.y) : (e = c, c = d);
        b.style.left = Lg(e, f);
        b.style.top = Lg(c, f)
    }

    function Mg(b) {
        var c;
        try {
            c = b.getBoundingClientRect()
        } catch (d) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        Hb && b.ownerDocument.body && (b = b.ownerDocument, c.left -= b.documentElement.clientLeft + b.body.clientLeft, c.top -= b.documentElement.clientTop + b.body.clientTop);
        return c
    }

    function Ng(b) {
        if (Hb && !(Hb && 8 <= Vb)) return b.offsetParent;
        var c = zf(b),
            d = Jg(b, "position"),
            e = "fixed" == d || "absolute" == d;
        for (b = b.parentNode; b && b != c; b = b.parentNode) if (d = Jg(b, "position"), e = e && "static" == d && b != c.documentElement && b != c.body, !e && (b.scrollWidth > b.clientWidth || b.scrollHeight > b.clientHeight || "fixed" == d || "absolute" == d || "relative" == d)) return b;
        return null
    }

    function Og(b) {
        if (1 == b.nodeType) {
            var c;
            if (b.getBoundingClientRect) c = Mg(b), c = new vf(c.left, c.top);
            else {
                c = Sf(xf(b));
                var d, e = zf(b),
                    f = Jg(b, "position"),
                    g = Ib && e.getBoxObjectFor && !b.getBoundingClientRect && "absolute" == f && (d = e.getBoxObjectFor(b)) && (0 > d.screenX || 0 > d.screenY),
                    h = new vf(0, 0),
                    k;
                d = e ? zf(e) : document;
                k = !Hb || Hb && 9 <= Vb || Rf(xf(d)) ? d.documentElement : d.body;
                if (b != k) if (b.getBoundingClientRect) d = Mg(b), e = Sf(xf(e)), h.x = d.left + e.x, h.y = d.top + e.y;
                else if (e.getBoxObjectFor && !g) d = e.getBoxObjectFor(b), e = e.getBoxObjectFor(k),
                h.x = d.screenX - e.screenX, h.y = d.screenY - e.screenY;
                else {
                    d = b;
                    do {
                        h.x += d.offsetLeft;
                        h.y += d.offsetTop;
                        d != b && (h.x += d.clientLeft || 0, h.y += d.clientTop || 0);
                        if (Jb && "fixed" == Jg(d, "position")) {
                            h.x += e.body.scrollLeft;
                            h.y += e.body.scrollTop;
                            break
                        }
                        d = d.offsetParent
                    } while (d && d != b);
                    if (Gb || Jb && "absolute" == f) h.y -= e.body.offsetTop;
                    for (d = b;
                    (d = Ng(d)) && d != e.body && d != k;) h.x -= d.scrollLeft, Gb && "TR" == d.tagName || (h.y -= d.scrollTop)
                }
                c = new vf(h.x - c.x, h.y - c.y)
            }
            if (Ib && !Tb(12)) {
                b: {
                    h = Qa();
                    if (void 0 === b.style[h] && (h = (Jb ? "Webkit" : Ib ? "Moz" : Hb ? "ms" : Gb ? "O" : null) + Ra(h), void 0 !== b.style[h])) {
                        h = (Jb ? "-webkit" : Ib ? "-moz" : Hb ? "-ms" : Gb ? "-o" : null) + "-transform";
                        break b
                    }
                    h = "transform"
                }
                b = (b = Jg(b, h) || Jg(b, "transform")) ? (b = b.match(Pg)) ? new vf(parseFloat(b[1]), parseFloat(b[2])) : new vf(0, 0) : new vf(0, 0);
                b = new vf(c.x + b.x, c.y + b.y)
            } else b = c;
            return b
        }
        c = ka(b.fh);
        h = b;
        b.targetTouches && b.targetTouches.length ? h = b.targetTouches[0] : c && b.a.targetTouches && b.a.targetTouches.length && (h = b.a.targetTouches[0]);
        return new vf(h.clientX, h.clientY)
    }

    function Lg(b, c) {
        "number" == typeof b && (b = (c ? Math.round(b) : b) + "px");
        return b
    }
    function Qg(b) {
        var c = Rg;
        if ("none" != Jg(b, "display")) return c(b);
        var d = b.style,
            e = d.display,
            f = d.visibility,
            g = d.position;
        d.visibility = "hidden";
        d.position = "absolute";
        d.display = "inline";
        b = c(b);
        d.display = e;
        d.position = g;
        d.visibility = f;
        return b
    }
    function Rg(b) {
        var c = b.offsetWidth,
            d = b.offsetHeight,
            e = Jb && !c && !d;
        return m(c) && !e || !b.getBoundingClientRect ? new wf(c, d) : (b = Mg(b), new wf(b.right - b.left, b.bottom - b.top))
    }

    function Sg(b, c) {
        b.style.display = c ? "" : "none"
    }
    function Tg(b, c, d, e) {
        if (/^\d+px?$/.test(c)) return parseInt(c, 10);
        var f = b.style[d],
            g = b.runtimeStyle[d];
        b.runtimeStyle[d] = b.currentStyle[d];
        b.style[d] = c;
        c = b.style[e];
        b.style[d] = f;
        b.runtimeStyle[d] = g;
        return c
    }
    function Ug(b, c) {
        var d = b.currentStyle ? b.currentStyle[c] : null;
        return d ? Tg(b, d, "left", "pixelLeft") : 0
    }

    function Vg(b, c) {
        if (Hb) {
            var d = Ug(b, c + "Left"),
                e = Ug(b, c + "Right"),
                f = Ug(b, c + "Top"),
                g = Ug(b, c + "Bottom");
            return new Fg(f, e, g, d)
        }
        d = Ig(b, c + "Left");
        e = Ig(b, c + "Right");
        f = Ig(b, c + "Top");
        g = Ig(b, c + "Bottom");
        return new Fg(parseFloat(f), parseFloat(e), parseFloat(g), parseFloat(d))
    }
    var Wg = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Xg(b, c) {
        if ("none" == (b.currentStyle ? b.currentStyle[c + "Style"] : null)) return 0;
        var d = b.currentStyle ? b.currentStyle[c + "Width"] : null;
        return d in Wg ? Wg[d] : Tg(b, d, "left", "pixelLeft")
    }

    function Yg(b) {
        if (Hb && !(Hb && 9 <= Vb)) {
            var c = Xg(b, "borderLeft"),
                d = Xg(b, "borderRight"),
                e = Xg(b, "borderTop");
            b = Xg(b, "borderBottom");
            return new Fg(e, d, b, c)
        }
        c = Ig(b, "borderLeftWidth");
        d = Ig(b, "borderRightWidth");
        e = Ig(b, "borderTopWidth");
        b = Ig(b, "borderBottomWidth");
        return new Fg(parseFloat(e), parseFloat(d), parseFloat(b), parseFloat(c))
    }
    var Pg = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

    function Zg(b, c, d) {
        uc.call(this, b);
        this.map = c;
        this.frameState = m(d) ? d : null
    }
    u(Zg, uc);

    function $g(b) {
        td.call(this);
        this.element = m(b.element) ? b.element : null;
        this.i = m(b.target) ? Af(b.target) : null;
        this.a = null;
        this.n = [];
        this.render = m(b.render) ? b.render : ca
    }
    u($g, td);
    $g.prototype.M = function () {
        Nf(this.element);
        $g.S.M.call(this)
    };
    $g.prototype.d = function () {
        return this.a
    };
    $g.prototype.setMap = function (b) {
        null === this.a || Nf(this.element);
        0 != this.n.length && (Ta(this.n, Yc), this.n.length = 0);
        this.a = b;
        null !== this.a && ((null === this.i ? b.t : this.i).appendChild(this.element), this.render !== ca && this.n.push(z(b, "postrender", this.render, !1, this)), b.render())
    };

    function ah(b) {
        b = m(b) ? b : {};
        this.q = If("UL");
        this.j = If("LI");
        this.q.appendChild(this.j);
        Sg(this.j, !1);
        this.b = m(b.collapsed) ? b.collapsed : !0;
        this.f = m(b.collapsible) ? b.collapsible : !0;
        this.f || (this.b = !1);
        var c = m(b.className) ? b.className : "ol-attribution",
            d = m(b.tipLabel) ? b.tipLabel : "Attributions";
        this.r = m(b.collapseLabel) ? b.collapseLabel : "\u00bb";
        this.F = m(b.label) ? b.label : "i";
        this.t = Ff("SPAN", {}, this.f && !this.b ? this.r : this.F);
        d = Ff("BUTTON", {
            type: "button",
            title: d
        }, this.t);
        z(d, "click", this.cj, !1, this);
        z(d, ["mouseout", xc], function () {
            this.blur()
        }, !1);
        c = Ff("DIV", c + " ol-unselectable ol-control" + (this.b && this.f ? " ol-collapsed" : "") + (this.f ? "" : " ol-uncollapsible"), this.q, d);
        $g.call(this, {
            element: c,
            render: m(b.render) ? b.render : bh,
            target: b.target
        });
        this.p = !0;
        this.g = {};
        this.e = {};
        this.J = {}
    }
    u(ah, $g);

    function bh(b) {
        b = b.frameState;
        if (null === b) this.p && (Sg(this.element, !1), this.p = !1);
        else {
            var c, d, e, f, g, h, k, n, p, q = b.layerStatesArray,
                r = Cb(b.attributions),
                s = {};
            d = 0;
            for (c = q.length; d < c; d++) if (e = q[d].layer.a(), null !== e && (p = ma(e).toString(), n = e.e, null !== n)) for (e = 0, f = n.length; e < f; e++) if (h = n[e], k = ma(h).toString(), !(k in r)) {
                g = b.usedTiles[p];
                var v;
                if (v = m(g)) a: if (null === h.a) v = !0;
                else {
                    var y = v = void 0,
                        C = void 0,
                        F = void 0;
                    for (F in g) if (F in h.a) for (C = g[F], v = 0, y = h.a[F].length; v < y; ++v) {
                        var G = h.a[F][v];
                        if (G.a <= C.d && G.d >= C.a && G.b <= C.c && G.c >= C.b) {
                            v = !0;
                            break a
                        }
                    }
                    v = !1
                }
                v ? (k in s && delete s[k], r[k] = h) : s[k] = h
            }
            c = [r, s];
            d = c[0];
            c = c[1];
            for (var w in this.g) w in d ? (this.e[w] || (Sg(this.g[w], !0), this.e[w] = !0), delete d[w]) : w in c ? (this.e[w] && (Sg(this.g[w], !1), delete this.e[w]), delete c[w]) : (Nf(this.g[w]), delete this.g[w], delete this.e[w]);
            for (w in d) p = If("LI"), p.innerHTML = d[w].c, this.q.appendChild(p), this.g[w] = p, this.e[w] = !0;
            for (w in c) p = If("LI"), p.innerHTML = c[w].c, Sg(p, !1), this.q.appendChild(p), this.g[w] = p;
            w = !xb(this.e) || !xb(b.logos);
            this.p != w && (Sg(this.element, w), this.p = w);
            w && xb(this.e) ? Cg(this.element, "ol-logo-only") : Dg(this.element, "ol-logo-only");
            var U;
            b = b.logos;
            w = this.J;
            for (U in w) U in b || (Nf(w[U]), delete w[U]);
            for (var N in b) N in w || (U = new Image, U.src = N, d = b[N], "" === d ? d = U : (d = Ff("A", {
                href: d
            }), d.appendChild(U)), this.j.appendChild(d), w[N] = d);
            Sg(this.j, !xb(b))
        }
    }
    l = ah.prototype;
    l.cj = function (b) {
        b.preventDefault();
        ch(this)
    };

    function ch(b) {
        Eg(b.element, "ol-collapsed");
        Qf(b.t, b.b ? b.r : b.F);
        b.b = !b.b
    }
    l.bj = function () {
        return this.f
    };
    l.ej = function (b) {
        this.f !== b && (this.f = b, Eg(this.element, "ol-uncollapsible"), !b && this.b && ch(this))
    };
    l.dj = function (b) {
        this.f && this.b !== b && ch(this)
    };
    l.aj = function () {
        return this.b
    };

    function dh(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-rotate";
        this.b = Ff("SPAN", "ol-compass", m(b.label) ? b.label : "\u21e7");
        var d = Ff("BUTTON", {
            "class": c + "-reset",
            type: "button",
            title: m(b.tipLabel) ? b.tipLabel : "Reset rotation"
        }, this.b);
        z(d, "click", dh.prototype.j, !1, this);
        z(d, ["mouseout", xc], function () {
            this.blur()
        }, !1);
        c = Ff("DIV", c + " ol-unselectable ol-control", d);
        $g.call(this, {
            element: c,
            render: m(b.render) ? b.render : eh,
            target: b.target
        });
        this.f = m(b.duration) ? b.duration : 250;
        this.e = m(b.autoHide) ? b.autoHide : !0;
        this.g = void 0;
        this.e && Cg(this.element, "ol-hidden")
    }
    u(dh, $g);
    dh.prototype.j = function (b) {
        b.preventDefault();
        b = this.a;
        var c = b.a();
        if (null !== c) {
            for (var d = c.e(); d < -Math.PI;) d += 2 * Math.PI;
            for (; d > Math.PI;) d -= 2 * Math.PI;
            m(d) && (0 < this.f && b.Ua(hf({
                rotation: d,
                duration: this.f,
                easing: cf
            })), c.r(0))
        }
    };

    function eh(b) {
        b = b.frameState;
        if (null !== b) {
            b = b.viewState.rotation;
            if (b != this.g) {
                var c = "rotate(" + 180 * b / Math.PI + "deg)";
                if (this.e) {
                    var d = this.element;
                    0 === b ? Cg(d, "ol-hidden") : Dg(d, "ol-hidden")
                }
                this.b.style.msTransform = c;
                this.b.style.webkitTransform = c;
                this.b.style.transform = c
            }
            this.g = b
        }
    };

    function fh(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-zoom",
            d = m(b.delta) ? b.delta : 1,
            e = m(b.zoomOutLabel) ? b.zoomOutLabel : "\u2212",
            f = m(b.zoomOutTipLabel) ? b.zoomOutTipLabel : "Zoom out",
            g = Ff("BUTTON", {
                "class": c + "-in",
                type: "button",
                title: m(b.zoomInTipLabel) ? b.zoomInTipLabel : "Zoom in"
            }, m(b.zoomInLabel) ? b.zoomInLabel : "+");
        z(g, "click", ta(fh.prototype.e, d), !1, this);
        z(g, ["mouseout", xc], function () {
            this.blur()
        }, !1);
        e = Ff("BUTTON", {
            "class": c + "-out",
            type: "button",
            title: f
        }, e);
        z(e, "click", ta(fh.prototype.e, -d), !1, this);
        z(e, ["mouseout", xc], function () {
            this.blur()
        }, !1);
        c = Ff("DIV", c + " ol-unselectable ol-control", g, e);
        $g.call(this, {
            element: c,
            target: b.target
        });
        this.b = m(b.duration) ? b.duration : 250
    }
    u(fh, $g);
    fh.prototype.e = function (b, c) {
        c.preventDefault();
        var d = this.a,
            e = d.a();
        if (null !== e) {
            var f = e.b();
            m(f) && (0 < this.b && d.Ua(jf({
                resolution: f,
                duration: this.b,
                easing: cf
            })), d = e.constrainResolution(f, b), e.d(d))
        }
    };

    function gh(b) {
        b = m(b) ? b : {};
        var c = new B;
        (m(b.zoom) ? b.zoom : 1) && c.push(new fh(b.zoomOptions));
        (m(b.rotate) ? b.rotate : 1) && c.push(new dh(b.rotateOptions));
        (m(b.attribution) ? b.attribution : 1) && c.push(new ah(b.attributionOptions));
        return c
    };
    var hh = Jb ? "webkitfullscreenchange" : Ib ? "mozfullscreenchange" : Hb ? "MSFullscreenChange" : "fullscreenchange";

    function ih() {
        var b = xf().a,
            c = b.body;
        return !!(c.webkitRequestFullscreen || c.mozRequestFullScreen && b.mozFullScreenEnabled || c.msRequestFullscreen && b.msFullscreenEnabled || c.requestFullscreen && b.fullscreenEnabled)
    }

    function jh(b) {
        b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : b.mozRequestFullScreen ? b.mozRequestFullScreen() : b.msRequestFullscreen ? b.msRequestFullscreen() : b.requestFullscreen && b.requestFullscreen()
    }
    function kh() {
        var b = xf().a;
        return !!(b.webkitIsFullScreen || b.mozFullScreen || b.msFullscreenElement || b.fullscreenElement)
    };

    function lh(b) {
        b = m(b) ? b : {};
        this.b = m(b.className) ? b.className : "ol-full-screen";
        var c = m(b.tipLabel) ? b.tipLabel : "Toggle full-screen",
            c = Ff("BUTTON", {
                "class": this.b + "-" + kh(),
                type: "button",
                title: c
            });
        z(c, "click", this.g, !1, this);
        z(c, ["mouseout", xc], function () {
            this.blur()
        }, !1);
        z(ba.document, hh, this.e, !1, this);
        var d = this.b + " ol-unselectable ol-control " + (ih() ? "" : "ol-unsupported"),
            c = Ff("DIV", d, c);
        $g.call(this, {
            element: c,
            target: b.target
        });
        this.f = m(b.keys) ? b.keys : !1
    }
    u(lh, $g);
    lh.prototype.g = function (b) {
        b.preventDefault();
        ih() && (b = this.a, null !== b && (kh() ? (b = xf().a, b.webkitCancelFullScreen ? b.webkitCancelFullScreen() : b.mozCancelFullScreen ? b.mozCancelFullScreen() : b.msExitFullscreen ? b.msExitFullscreen() : b.exitFullscreen && b.exitFullscreen()) : (b = b.qc(), b = Af(b), this.f ? b.mozRequestFullScreenWithKeys ? b.mozRequestFullScreenWithKeys() : b.webkitRequestFullscreen ? b.webkitRequestFullscreen() : jh(b) : jh(b))))
    };
    lh.prototype.e = function () {
        var b = this.b + "-true",
            c = this.b + "-false",
            d = Of(this.element),
            e = this.a;
        kh() ? Bg(d, c) && (Dg(d, c), Cg(d, b)) : Bg(d, b) && (Dg(d, b), Cg(d, c));
        null === e || e.j()
    };

    function mh(b) {
        b = m(b) ? b : {};
        var c = Ff("DIV", m(b.className) ? b.className : "ol-mouse-position");
        $g.call(this, {
            element: c,
            render: m(b.render) ? b.render : nh,
            target: b.target
        });
        z(this, xd("projection"), this.J, !1, this);
        m(b.coordinateFormat) && this.r(b.coordinateFormat);
        m(b.projection) && this.q(Ee(b.projection));
        this.Q = m(b.undefinedHTML) ? b.undefinedHTML : "";
        this.j = c.innerHTML;
        this.f = this.e = this.b = null
    }
    u(mh, $g);

    function nh(b) {
        b = b.frameState;
        null === b ? this.b = null : this.b != b.viewState.projection && (this.b = b.viewState.projection, this.e = null);
        oh(this, this.f)
    }
    mh.prototype.J = function () {
        this.e = null
    };
    mh.prototype.g = function () {
        return this.get("coordinateFormat")
    };
    mh.prototype.getCoordinateFormat = mh.prototype.g;
    mh.prototype.p = function () {
        return this.get("projection")
    };
    mh.prototype.getProjection = mh.prototype.p;
    mh.prototype.t = function (b) {
        this.f = this.a.ad(b.a);
        oh(this, this.f)
    };
    mh.prototype.F = function () {
        oh(this, null);
        this.f = null
    };
    mh.prototype.setMap = function (b) {
        mh.S.setMap.call(this, b);
        null !== b && (b = b.b, this.n.push(z(b, "mousemove", this.t, !1, this), z(b, "mouseout", this.F, !1, this)))
    };
    mh.prototype.r = function (b) {
        this.set("coordinateFormat", b)
    };
    mh.prototype.setCoordinateFormat = mh.prototype.r;
    mh.prototype.q = function (b) {
        this.set("projection", b)
    };
    mh.prototype.setProjection = mh.prototype.q;

    function oh(b, c) {
        var d = b.Q;
        if (null !== c && null !== b.b) {
            if (null === b.e) {
                var e = b.p();
                b.e = m(e) ? De(b.b, e) : We
            }
            e = b.a.Ga(c);
            null !== e && (b.e(e, e), d = b.g(), d = m(d) ? d(e) : e.toString())
        }
        m(b.j) && d == b.j || (b.element.innerHTML = d, b.j = d)
    };

    function ph(b) {
        if ("function" == typeof b.kb) return b.kb();
        if (ia(b)) return b.split("");
        if (ha(b)) {
            for (var c = [], d = b.length, e = 0; e < d; e++) c.push(b[e]);
            return c
        }
        return rb(b)
    }

    function qh(b, c) {
        if ("function" == typeof b.forEach) b.forEach(c, void 0);
        else if (ha(b) || ia(b)) Ta(b, c, void 0);
        else {
            var d;
            if ("function" == typeof b.I) d = b.I();
            else if ("function" != typeof b.kb) if (ha(b) || ia(b)) {
                d = [];
                for (var e = b.length, f = 0; f < e; f++) d.push(f)
            } else d = sb(b);
            else d = void 0;
            for (var e = ph(b), f = e.length, g = 0; g < f; g++) c.call(void 0, e[g], d && d[g], b)
        }
    };

    function rh(b, c) {
        this.c = {};
        this.a = [];
        this.b = 0;
        var d = arguments.length;
        if (1 < d) {
            if (d % 2) throw Error("Uneven number of arguments");
            for (var e = 0; e < d; e += 2) this.set(arguments[e], arguments[e + 1])
        } else if (b) {
            b instanceof rh ? (d = b.I(), e = b.kb()) : (d = sb(b), e = rb(b));
            for (var f = 0; f < d.length; f++) this.set(d[f], e[f])
        }
    }
    l = rh.prototype;
    l.Ub = function () {
        return this.b
    };
    l.kb = function () {
        sh(this);
        for (var b = [], c = 0; c < this.a.length; c++) b.push(this.c[this.a[c]]);
        return b
    };
    l.I = function () {
        sh(this);
        return this.a.concat()
    };
    l.ia = function () {
        return 0 == this.b
    };
    l.clear = function () {
        this.c = {};
        this.b = this.a.length = 0
    };
    l.remove = function (b) {
        return th(this.c, b) ? (delete this.c[b], this.b--, this.a.length > 2 * this.b && sh(this), !0) : !1
    };

    function sh(b) {
        if (b.b != b.a.length) {
            for (var c = 0, d = 0; c < b.a.length;) {
                var e = b.a[c];
                th(b.c, e) && (b.a[d++] = e);
                c++
            }
            b.a.length = d
        }
        if (b.b != b.a.length) {
            for (var f = {}, d = c = 0; c < b.a.length;) e = b.a[c], th(f, e) || (b.a[d++] = e, f[e] = 1), c++;
            b.a.length = d
        }
    }
    l.get = function (b, c) {
        return th(this.c, b) ? this.c[b] : c
    };
    l.set = function (b, c) {
        th(this.c, b) || (this.b++, this.a.push(b));
        this.c[b] = c
    };
    l.forEach = function (b, c) {
        for (var d = this.I(), e = 0; e < d.length; e++) {
            var f = d[e],
                g = this.get(f);
            b.call(c, g, f, this)
        }
    };
    l.clone = function () {
        return new rh(this)
    };

    function th(b, c) {
        return Object.prototype.hasOwnProperty.call(b, c)
    };
    var uh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;

    function vh(b) {
        if (wh) {
            wh = !1;
            var c = ba.location;
            if (c) {
                var d = c.href;
                if (d && (d = (d = vh(d)[3] || null) ? decodeURI(d) : d) && d != c.hostname) throw wh = !0, Error();
            }
        }
        return b.match(uh)
    }
    var wh = Jb;

    function xh(b) {
        if (b[1]) {
            var c = b[0],
                d = c.indexOf("#");
            0 <= d && (b.push(c.substr(d)), b[0] = c = c.substr(0, d));
            d = c.indexOf("?");
            0 > d ? b[1] = "?" : d == c.length - 1 && (b[1] = void 0)
        }
        return b.join("")
    }

    function yh(b, c, d) {
        if (ga(c)) for (var e = 0; e < c.length; e++) yh(b, String(c[e]), d);
        else null != c && d.push("&", b, "" === c ? "" : "=", encodeURIComponent(String(c)))
    }
    function zh(b, c) {
        for (var d in c) yh(d, c[d], b);
        return b
    };

    function Ah(b, c) {
        var d;
        b instanceof Ah ? (this.Wb = m(c) ? c : b.Wb, Bh(this, b.Pb), this.cc = b.cc, this.pb = b.pb, Ch(this, b.sc), this.nb = b.nb, Dh(this, b.a.clone()), this.Tb = b.Tb) : b && (d = vh(String(b))) ? (this.Wb = !! c, Bh(this, d[1] || "", !0), this.cc = Fh(d[2] || ""), this.pb = Fh(d[3] || "", !0), Ch(this, d[4]), this.nb = Fh(d[5] || "", !0), Dh(this, d[6] || "", !0), this.Tb = Fh(d[7] || "")) : (this.Wb = !! c, this.a = new Gh(null, 0, this.Wb))
    }
    l = Ah.prototype;
    l.Pb = "";
    l.cc = "";
    l.pb = "";
    l.sc = null;
    l.nb = "";
    l.Tb = "";
    l.Wb = !1;
    l.toString = function () {
        var b = [],
            c = this.Pb;
        c && b.push(Hh(c, Ih, !0), ":");
        if (c = this.pb) {
            b.push("//");
            var d = this.cc;
            d && b.push(Hh(d, Ih, !0), "@");
            b.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"));
            c = this.sc;
            null != c && b.push(":", String(c))
        }
        if (c = this.nb) this.pb && "/" != c.charAt(0) && b.push("/"), b.push(Hh(c, "/" == c.charAt(0) ? Jh : Kh, !0));
        (c = this.a.toString()) && b.push("?", c);
        (c = this.Tb) && b.push("#", Hh(c, Lh));
        return b.join("")
    };
    l.clone = function () {
        return new Ah(this)
    };

    function Bh(b, c, d) {
        b.Pb = d ? Fh(c, !0) : c;
        b.Pb && (b.Pb = b.Pb.replace(/:$/, ""))
    }
    function Ch(b, c) {
        if (c) {
            c = Number(c);
            if (isNaN(c) || 0 > c) throw Error("Bad port number " + c);
            b.sc = c
        } else b.sc = null
    }
    function Dh(b, c, d) {
        c instanceof Gh ? (b.a = c, Mh(b.a, b.Wb)) : (d || (c = Hh(c, Nh)), b.a = new Gh(c, 0, b.Wb))
    }
    function Oh(b) {
        return b instanceof Ah ? b.clone() : new Ah(b, void 0)
    }

    function Ph(b, c) {
        b instanceof Ah || (b = Oh(b));
        c instanceof Ah || (c = Oh(c));
        var d = b,
            e = c,
            f = d.clone(),
            g = !! e.Pb;
        g ? Bh(f, e.Pb) : g = !! e.cc;
        g ? f.cc = e.cc : g = !! e.pb;
        g ? f.pb = e.pb : g = null != e.sc;
        var h = e.nb;
        if (g) Ch(f, e.sc);
        else if (g = !! e.nb) if ("/" != h.charAt(0) && (d.pb && !d.nb ? h = "/" + h : (d = f.nb.lastIndexOf("/"), -1 != d && (h = f.nb.substr(0, d + 1) + h))), d = h, ".." == d || "." == d) h = "";
        else if (-1 != d.indexOf("./") || -1 != d.indexOf("/.")) {
            for (var h = 0 == d.lastIndexOf("/", 0), d = d.split("/"), k = [], n = 0; n < d.length;) {
                var p = d[n++];
                "." == p ? h && n == d.length && k.push("") :
                    ".." == p ? ((1 < k.length || 1 == k.length && "" != k[0]) && k.pop(), h && n == d.length && k.push("")) : (k.push(p), h = !0)
            }
            h = k.join("/")
        } else h = d;
        g ? f.nb = h : g = "" !== e.a.toString();
        g ? Dh(f, Fh(e.a.toString())) : g = !! e.Tb;
        g && (f.Tb = e.Tb);
        return f
    }
    function Fh(b, c) {
        return b ? c ? decodeURI(b) : decodeURIComponent(b) : ""
    }
    function Hh(b, c, d) {
        return ia(b) ? (b = encodeURI(b).replace(c, Qh), d && (b = b.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), b) : null
    }
    function Qh(b) {
        b = b.charCodeAt(0);
        return "%" + (b >> 4 & 15).toString(16) + (b & 15).toString(16)
    }
    var Ih = /[#\/\?@]/g,
        Kh = /[\#\?:]/g,
        Jh = /[\#\?]/g,
        Nh = /[\#\?@]/g,
        Lh = /#/g;

    function Gh(b, c, d) {
        this.a = b || null;
        this.c = !! d
    }
    function Rh(b) {
        if (!b.da && (b.da = new rh, b.ta = 0, b.a)) for (var c = b.a.split("&"), d = 0; d < c.length; d++) {
            var e = c[d].indexOf("="),
                f = null,
                g = null;
            0 <= e ? (f = c[d].substring(0, e), g = c[d].substring(e + 1)) : f = c[d];
            f = decodeURIComponent(f.replace(/\+/g, " "));
            f = Sh(b, f);
            b.add(f, g ? decodeURIComponent(g.replace(/\+/g, " ")) : "")
        }
    }
    l = Gh.prototype;
    l.da = null;
    l.ta = null;
    l.Ub = function () {
        Rh(this);
        return this.ta
    };
    l.add = function (b, c) {
        Rh(this);
        this.a = null;
        b = Sh(this, b);
        var d = this.da.get(b);
        d || this.da.set(b, d = []);
        d.push(c);
        this.ta++;
        return this
    };
    l.remove = function (b) {
        Rh(this);
        b = Sh(this, b);
        return th(this.da.c, b) ? (this.a = null, this.ta -= this.da.get(b).length, this.da.remove(b)) : !1
    };
    l.clear = function () {
        this.da = this.a = null;
        this.ta = 0
    };
    l.ia = function () {
        Rh(this);
        return 0 == this.ta
    };

    function Th(b, c) {
        Rh(b);
        c = Sh(b, c);
        return th(b.da.c, c)
    }
    l.I = function () {
        Rh(this);
        for (var b = this.da.kb(), c = this.da.I(), d = [], e = 0; e < c.length; e++) for (var f = b[e], g = 0; g < f.length; g++) d.push(c[e]);
        return d
    };
    l.kb = function (b) {
        Rh(this);
        var c = [];
        if (ia(b)) Th(this, b) && (c = bb(c, this.da.get(Sh(this, b))));
        else {
            b = this.da.kb();
            for (var d = 0; d < b.length; d++) c = bb(c, b[d])
        }
        return c
    };
    l.set = function (b, c) {
        Rh(this);
        this.a = null;
        b = Sh(this, b);
        Th(this, b) && (this.ta -= this.da.get(b).length);
        this.da.set(b, [c]);
        this.ta++;
        return this
    };
    l.get = function (b, c) {
        var d = b ? this.kb(b) : [];
        return 0 < d.length ? String(d[0]) : c
    };

    function Uh(b, c, d) {
        b.remove(c);
        0 < d.length && (b.a = null, b.da.set(Sh(b, c), cb(d)), b.ta += d.length)
    }
    l.toString = function () {
        if (this.a) return this.a;
        if (!this.da) return "";
        for (var b = [], c = this.da.I(), d = 0; d < c.length; d++) for (var e = c[d], f = encodeURIComponent(String(e)), e = this.kb(e), g = 0; g < e.length; g++) {
            var h = f;
            "" !== e[g] && (h += "=" + encodeURIComponent(String(e[g])));
            b.push(h)
        }
        return this.a = b.join("&")
    };
    l.clone = function () {
        var b = new Gh;
        b.a = this.a;
        this.da && (b.da = this.da.clone(), b.ta = this.ta);
        return b
    };

    function Sh(b, c) {
        var d = String(c);
        b.c && (d = d.toLowerCase());
        return d
    }
    function Mh(b, c) {
        c && !b.c && (Rh(b), b.a = null, b.da.forEach(function (b, c) {
            var f = c.toLowerCase();
            c != f && (this.remove(c), Uh(this, f, b))
        }, b));
        b.c = c
    };

    function Vh(b, c, d) {
        pc.call(this);
        this.d = b;
        this.b = d;
        this.a = c || window;
        this.c = sa(this.Ye, this)
    }
    u(Vh, pc);
    l = Vh.prototype;
    l.X = null;
    l.Ie = !1;
    l.start = function () {
        Wh(this);
        this.Ie = !1;
        var b = Xh(this),
            c = Yh(this);
        b && !c && this.a.mozRequestAnimationFrame ? (this.X = z(this.a, "MozBeforePaint", this.c), this.a.mozRequestAnimationFrame(null), this.Ie = !0) : this.X = b && c ? b.call(this.a, this.c) : this.a.setTimeout(gd(this.c), 20)
    };

    function Wh(b) {
        if (null != b.X) {
            var c = Xh(b),
                d = Yh(b);
            c && !d && b.a.mozRequestAnimationFrame ? Yc(b.X) : c && d ? d.call(b.a, b.X) : b.a.clearTimeout(b.X)
        }
        b.X = null
    }
    l.Ye = function () {
        this.Ie && this.X && Yc(this.X);
        this.X = null;
        this.d.call(this.b, ua())
    };
    l.M = function () {
        Wh(this);
        Vh.S.M.call(this)
    };

    function Xh(b) {
        b = b.a;
        return b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || null
    }

    function Yh(b) {
        b = b.a;
        return b.cancelRequestAnimationFrame || b.webkitCancelRequestAnimationFrame || b.mozCancelRequestAnimationFrame || b.oCancelRequestAnimationFrame || b.msCancelRequestAnimationFrame || null
    };

    function Zh(b) {
        ba.setTimeout(function () {
            throw b;
        }, 0)
    }
    function $h(b, c) {
        var d = b;
        c && (d = sa(b, c));
        d = ai(d);
        !ka(ba.setImmediate) || ba.Window && ba.Window.prototype.setImmediate == ba.setImmediate ? (bi || (bi = ci()), bi(d)) : ba.setImmediate(d)
    }
    var bi;

    function ci() {
        var b = ba.MessageChannel;
        "undefined" === typeof b && "undefined" !== typeof window && window.postMessage && window.addEventListener && (b = function () {
            var b = document.createElement("iframe");
            b.style.display = "none";
            b.src = "";
            document.documentElement.appendChild(b);
            var c = b.contentWindow,
                b = c.document;
            b.open();
            b.write("");
            b.close();
            var d = "callImmediate" + Math.random(),
                e = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host,
                b = sa(function (b) {
                    if (("*" == e || b.origin == e) && b.data == d) this.port1.onmessage()
                },
                this);
            c.addEventListener("message", b, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function () {
                    c.postMessage(d, e)
                }
            }
        });
        if ("undefined" !== typeof b && !nb("Trident") && !nb("MSIE")) {
            var c = new b,
                d = {}, e = d;
            c.port1.onmessage = function () {
                if (m(d.next)) {
                    d = d.next;
                    var b = d.Ue;
                    d.Ue = null;
                    b()
                }
            };
            return function (b) {
                e.next = {
                    Ue: b
                };
                e = e.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function (b) {
            var c = document.createElement("script");
            c.onreadystatechange = function () {
                c.onreadystatechange = null;
                c.parentNode.removeChild(c);
                c = null;
                b();
                b = null
            };
            document.documentElement.appendChild(c)
        } : function (b) {
            ba.setTimeout(b, 0)
        }
    }
    var ai = ed;

    function di() {
        this.a = ua()
    }
    new di;
    di.prototype.set = function (b) {
        this.a = b
    };
    di.prototype.get = function () {
        return this.a
    };

    function ei(b) {
        jd.call(this);
        this.Pc = b || window;
        this.ld = z(this.Pc, "resize", this.oi, !1, this);
        this.md = Ef(this.Pc || window)
    }
    u(ei, jd);
    l = ei.prototype;
    l.ld = null;
    l.Pc = null;
    l.md = null;
    l.M = function () {
        ei.S.M.call(this);
        this.ld && (Yc(this.ld), this.ld = null);
        this.md = this.Pc = null
    };
    l.oi = function () {
        var b = Ef(this.Pc || window),
            c = this.md;
        b == c || b && c && b.width == c.width && b.height == c.height || (this.md = b, this.dispatchEvent("resize"))
    };

    function fi(b, c, d, e, f) {
        if (!(Hb || Jb && Tb("525"))) return !0;
        if (Kb && f) return gi(b);
        if (f && !e) return !1;
        ja(c) && (c = hi(c));
        if (!d && (17 == c || 18 == c || Kb && 91 == c)) return !1;
        if (Jb && e && d) switch (b) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (Hb && e && c == b) return !1;
        switch (b) {
            case 13:
                return !0;
            case 27:
                return !Jb
        }
        return gi(b)
    }

    function gi(b) {
        if (48 <= b && 57 >= b || 96 <= b && 106 >= b || 65 <= b && 90 >= b || Jb && 0 == b) return !0;
        switch (b) {
            case 32:
            case 63:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    }
    function hi(b) {
        if (Ib) b = ii(b);
        else if (Kb && Jb) a: switch (b) {
            case 93:
                b = 91;
                break a
        }
        return b
    }

    function ii(b) {
        switch (b) {
            case 61:
                return 187;
            case 59:
                return 186;
            case 173:
                return 189;
            case 224:
                return 91;
            case 0:
                return 224;
            default:
                return b
        }
    };

    function ji(b, c) {
        jd.call(this);
        b && ki(this, b, c)
    }
    u(ji, jd);
    l = ji.prototype;
    l.aa = null;
    l.sd = null;
    l.le = null;
    l.td = null;
    l.Ka = -1;
    l.Gb = -1;
    l.ae = !1;
    var li = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, mi = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }, ni = Hb || Jb && Tb("525"),
        oi = Kb && Ib;
    ji.prototype.a = function (b) {
        Jb && (17 == this.Ka && !b.o || 18 == this.Ka && !b.c || Kb && 91 == this.Ka && !b.n) && (this.Gb = this.Ka = -1); - 1 == this.Ka && (b.o && 17 != b.e ? this.Ka = 17 : b.c && 18 != b.e ? this.Ka = 18 : b.n && 91 != b.e && (this.Ka = 91));
        ni && !fi(b.e, this.Ka, b.d, b.o, b.c) ? this.handleEvent(b) : (this.Gb = hi(b.e), oi && (this.ae = b.c))
    };
    ji.prototype.c = function (b) {
        this.Gb = this.Ka = -1;
        this.ae = b.c
    };
    ji.prototype.handleEvent = function (b) {
        var c = b.a,
            d, e, f = c.altKey;
        Hb && "keypress" == b.type ? (d = this.Gb, e = 13 != d && 27 != d ? c.keyCode : 0) : Jb && "keypress" == b.type ? (d = this.Gb, e = 0 <= c.charCode && 63232 > c.charCode && gi(d) ? c.charCode : 0) : Gb ? (d = this.Gb, e = gi(d) ? c.keyCode : 0) : (d = c.keyCode || this.Gb, e = c.charCode || 0, oi && (f = this.ae), Kb && 63 == e && 224 == d && (d = 191));
        var g = d = hi(d),
            h = c.keyIdentifier;
        d ? 63232 <= d && d in li ? g = li[d] : 25 == d && b.d && (g = 9) : h && h in mi && (g = mi[h]);
        this.Ka = g;
        b = new pi(g, e, 0, c);
        b.c = f;
        this.dispatchEvent(b)
    };

    function ki(b, c, d) {
        b.td && qi(b);
        b.aa = c;
        b.sd = z(b.aa, "keypress", b, d);
        b.le = z(b.aa, "keydown", b.a, d, b);
        b.td = z(b.aa, "keyup", b.c, d, b)
    }
    function qi(b) {
        b.sd && (Yc(b.sd), Yc(b.le), Yc(b.td), b.sd = null, b.le = null, b.td = null);
        b.aa = null;
        b.Ka = -1;
        b.Gb = -1
    }
    ji.prototype.M = function () {
        ji.S.M.call(this);
        qi(this)
    };

    function pi(b, c, d, e) {
        zc.call(this, e);
        this.type = "key";
        this.e = b;
        this.i = c
    }
    u(pi, zc);

    function ri(b, c) {
        jd.call(this);
        var d = this.aa = b;
        (d = la(d) && 1 == d.nodeType ? this.aa : this.aa ? this.aa.body : null) && Jg(d, "direction");
        this.a = z(this.aa, Ib ? "DOMMouseScroll" : "mousewheel", this, c)
    }
    u(ri, jd);
    ri.prototype.handleEvent = function (b) {
        var c = 0,
            d = 0,
            e = 0;
        b = b.a;
        if ("mousewheel" == b.type) {
            d = 1;
            if (Hb || Jb && (Lb || Tb("532.0"))) d = 40;
            e = si(-b.wheelDelta, d);
            m(b.wheelDeltaX) ? (c = si(-b.wheelDeltaX, d), d = si(-b.wheelDeltaY, d)) : d = e
        } else e = b.detail, 100 < e ? e = 3 : -100 > e && (e = -3), m(b.axis) && b.axis === b.HORIZONTAL_AXIS ? c = e : d = e;
        ja(this.c) && Yb(c, -this.c, this.c);
        ja(this.b) && (d = Yb(d, -this.b, this.b));
        c = new ti(e, b, 0, d);
        this.dispatchEvent(c)
    };

    function si(b, c) {
        return Jb && (Kb || Mb) && 0 != b % c ? b : b / c
    }
    ri.prototype.M = function () {
        ri.S.M.call(this);
        Yc(this.a);
        this.a = null
    };

    function ti(b, c, d, e) {
        zc.call(this, c);
        this.type = "mousewheel";
        this.detail = b;
        this.j = e
    }
    u(ti, zc);

    function ui(b, c, d) {
        uc.call(this, b);
        this.a = c;
        b = m(d) ? d : {};
        this.buttons = vi(b);
        this.pressure = wi(b, this.buttons);
        this.bubbles = x(b, "bubbles", !1);
        this.cancelable = x(b, "cancelable", !1);
        this.view = x(b, "view", null);
        this.detail = x(b, "detail", null);
        this.screenX = x(b, "screenX", 0);
        this.screenY = x(b, "screenY", 0);
        this.clientX = x(b, "clientX", 0);
        this.clientY = x(b, "clientY", 0);
        this.button = x(b, "button", 0);
        this.relatedTarget = x(b, "relatedTarget", null);
        this.pointerId = x(b, "pointerId", 0);
        this.width = x(b, "width", 0);
        this.height = x(b,
            "height", 0);
        this.pointerType = x(b, "pointerType", "");
        this.isPrimary = x(b, "isPrimary", !1);
        c.preventDefault && (this.preventDefault = function () {
            c.preventDefault()
        })
    }
    u(ui, uc);

    function vi(b) {
        if (b.buttons || xi) b = b.buttons;
        else switch (b.which) {
            case 1:
                b = 1;
                break;
            case 2:
                b = 4;
                break;
            case 3:
                b = 2;
                break;
            default:
                b = 0
        }
        return b
    }
    function wi(b, c) {
        var d = 0;
        b.pressure ? d = b.pressure : d = c ? .5 : 0;
        return d
    }
    var xi = !1;
    try {
        xi = 1 === (new MouseEvent("click", {
            buttons: 1
        })).buttons
    } catch (yi) {};

    function zi(b, c) {
        this.a = b;
        this.e = c
    };

    function Ai(b) {
        zi.call(this, b, {
            mousedown: this.yi,
            mousemove: this.zi,
            mouseup: this.Ci,
            mouseover: this.Bi,
            mouseout: this.Ai
        });
        this.c = b.c;
        this.b = []
    }
    u(Ai, zi);

    function Bi(b, c) {
        for (var d = b.b, e = c.clientX, f = c.clientY, g = 0, h = d.length, k; g < h && (k = d[g]); g++) {
            var n = Math.abs(f - k[1]);
            if (25 >= Math.abs(e - k[0]) && 25 >= n) return !0
        }
        return !1
    }
    function Ci(b) {
        var c = Di(b, b.a),
            d = c.preventDefault;
        c.preventDefault = function () {
            b.preventDefault();
            d()
        };
        c.pointerId = 1;
        c.isPrimary = !0;
        c.pointerType = "mouse";
        return c
    }
    l = Ai.prototype;
    l.yi = function (b) {
        if (!Bi(this, b)) {
            (1).toString() in this.c && this.cancel(b);
            var c = Ci(b);
            this.c[(1).toString()] = b;
            Ei(this.a, Fi, c, b)
        }
    };
    l.zi = function (b) {
        if (!Bi(this, b)) {
            var c = Ci(b);
            Ei(this.a, Gi, c, b)
        }
    };
    l.Ci = function (b) {
        if (!Bi(this, b)) {
            var c = x(this.c, (1).toString());
            c && c.button === b.button && (c = Ci(b), Ei(this.a, Hi, c, b), zb(this.c, (1).toString()))
        }
    };
    l.Bi = function (b) {
        if (!Bi(this, b)) {
            var c = Ci(b);
            Ii(this.a, c, b)
        }
    };
    l.Ai = function (b) {
        if (!Bi(this, b)) {
            var c = Ci(b);
            Ji(this.a, c, b)
        }
    };
    l.cancel = function (b) {
        var c = Ci(b);
        this.a.cancel(c, b);
        zb(this.c, (1).toString())
    };

    function Ki(b) {
        zi.call(this, b, {
            MSPointerDown: this.Hi,
            MSPointerMove: this.Ii,
            MSPointerUp: this.Li,
            MSPointerOut: this.Ji,
            MSPointerOver: this.Ki,
            MSPointerCancel: this.Gi,
            MSGotPointerCapture: this.Ei,
            MSLostPointerCapture: this.Fi
        });
        this.c = b.c;
        this.b = ["", "unavailable", "touch", "pen", "mouse"]
    }
    u(Ki, zi);

    function Li(b, c) {
        var d = c;
        ja(c.a.pointerType) && (d = Di(c, c.a), d.pointerType = b.b[c.a.pointerType]);
        return d
    }
    l = Ki.prototype;
    l.Hi = function (b) {
        this.c[b.a.pointerId] = b;
        var c = Li(this, b);
        Ei(this.a, Fi, c, b)
    };
    l.Ii = function (b) {
        var c = Li(this, b);
        Ei(this.a, Gi, c, b)
    };
    l.Li = function (b) {
        var c = Li(this, b);
        Ei(this.a, Hi, c, b);
        zb(this.c, b.a.pointerId)
    };
    l.Ji = function (b) {
        var c = Li(this, b);
        Ji(this.a, c, b)
    };
    l.Ki = function (b) {
        var c = Li(this, b);
        Ii(this.a, c, b)
    };
    l.Gi = function (b) {
        var c = Li(this, b);
        this.a.cancel(c, b);
        zb(this.c, b.a.pointerId)
    };
    l.Fi = function (b) {
        this.a.dispatchEvent(new ui("lostpointercapture", b, b.a))
    };
    l.Ei = function (b) {
        this.a.dispatchEvent(new ui("gotpointercapture", b, b.a))
    };

    function Mi(b) {
        zi.call(this, b, {
            pointerdown: this.zk,
            pointermove: this.Ak,
            pointerup: this.Dk,
            pointerout: this.Bk,
            pointerover: this.Ck,
            pointercancel: this.yk,
            gotpointercapture: this.Ph,
            lostpointercapture: this.xi
        })
    }
    u(Mi, zi);
    l = Mi.prototype;
    l.zk = function (b) {
        Ni(this.a, b)
    };
    l.Ak = function (b) {
        Ni(this.a, b)
    };
    l.Dk = function (b) {
        Ni(this.a, b)
    };
    l.Bk = function (b) {
        Ni(this.a, b)
    };
    l.Ck = function (b) {
        Ni(this.a, b)
    };
    l.yk = function (b) {
        Ni(this.a, b)
    };
    l.xi = function (b) {
        Ni(this.a, b)
    };
    l.Ph = function (b) {
        Ni(this.a, b)
    };

    function Oi(b, c) {
        zi.call(this, b, {
            touchstart: this.vl,
            touchmove: this.ul,
            touchend: this.tl,
            touchcancel: this.sl
        });
        this.c = b.c;
        this.g = c;
        this.b = void 0;
        this.f = 0;
        this.d = void 0
    }
    u(Oi, zi);
    l = Oi.prototype;
    l.Yf = function () {
        this.f = 0;
        this.d = void 0
    };

    function Pi(b, c, d) {
        c = Di(c, d);
        c.pointerId = d.identifier + 2;
        c.bubbles = !0;
        c.cancelable = !0;
        c.detail = b.f;
        c.button = 0;
        c.buttons = 1;
        c.width = d.webkitRadiusX || d.radiusX || 0;
        c.height = d.webkitRadiusY || d.radiusY || 0;
        c.pressure = d.webkitForce || d.force || .5;
        c.isPrimary = b.b === d.identifier;
        c.pointerType = "touch";
        c.clientX = d.clientX;
        c.clientY = d.clientY;
        c.screenX = d.screenX;
        c.screenY = d.screenY;
        return c
    }

    function Qi(b, c, d) {
        function e() {
            c.preventDefault()
        }
        var f = Array.prototype.slice.call(c.a.changedTouches),
            g = f.length,
            h, k;
        for (h = 0; h < g; ++h) k = Pi(b, c, f[h]), k.preventDefault = e, d.call(b, c, k)
    }
    l.vl = function (b) {
        var c = b.a.touches,
            d = sb(this.c),
            e = d.length;
        if (e >= c.length) {
            var f = [],
                g, h, k;
            for (g = 0; g < e; ++g) {
                h = d[g];
                k = this.c[h];
                var n;
                if (!(n = 1 == h)) a: {
                    n = c.length;
                    for (var p = void 0, q = 0; q < n; q++) if (p = c[q], p.identifier === h - 2) {
                        n = !0;
                        break a
                    }
                    n = !1
                }
                n || f.push(k.$b)
            }
            for (g = 0; g < f.length; ++g) this.be(b, f[g])
        }
        c = qb(this.c);
        if (0 === c || 1 === c && (1).toString() in this.c) this.b = b.a.changedTouches[0].identifier, m(this.d) && ba.clearTimeout(this.d);
        Ri(this, b);
        this.f++;
        Qi(this, b, this.uk)
    };
    l.uk = function (b, c) {
        this.c[c.pointerId] = {
            target: c.target,
            $b: c,
            Jf: c.target
        };
        var d = this.a;
        c.bubbles = !0;
        Ei(d, Si, c, b);
        d = this.a;
        c.bubbles = !1;
        Ei(d, Ti, c, b);
        Ei(this.a, Fi, c, b)
    };
    l.ul = function (b) {
        b.preventDefault();
        Qi(this, b, this.Di)
    };
    l.Di = function (b, c) {
        var d = x(this.c, c.pointerId);
        if (d) {
            var e = d.$b,
                f = d.Jf;
            Ei(this.a, Gi, c, b);
            e && f !== c.target && (e.relatedTarget = c.target, c.relatedTarget = f, e.target = f, c.target ? (Ji(this.a, e, b), Ii(this.a, c, b)) : (c.target = f, c.relatedTarget = null, this.be(b, c)));
            d.$b = c;
            d.Jf = c.target
        }
    };
    l.tl = function (b) {
        Ri(this, b);
        Qi(this, b, this.wl)
    };
    l.wl = function (b, c) {
        Ei(this.a, Hi, c, b);
        this.a.$b(c, b);
        var d = this.a;
        c.bubbles = !1;
        Ei(d, Ui, c, b);
        zb(this.c, c.pointerId);
        c.isPrimary && (this.b = void 0, this.d = ba.setTimeout(sa(this.Yf, this), 200))
    };
    l.sl = function (b) {
        Qi(this, b, this.be)
    };
    l.be = function (b, c) {
        this.a.cancel(c, b);
        this.a.$b(c, b);
        var d = this.a;
        c.bubbles = !1;
        Ei(d, Ui, c, b);
        zb(this.c, c.pointerId);
        c.isPrimary && (this.b = void 0, this.d = ba.setTimeout(sa(this.Yf, this), 200))
    };

    function Ri(b, c) {
        var d = b.g.b,
            e = c.a.changedTouches[0];
        if (b.b === e.identifier) {
            var f = [e.clientX, e.clientY];
            d.push(f);
            ba.setTimeout(function () {
                ab(d, f)
            }, 2500)
        }
    };

    function Vi(b) {
        jd.call(this);
        this.aa = b;
        this.c = {};
        this.b = {};
        this.a = [];
        hg ? Xi(this, new Mi(this)) : ig ? Xi(this, new Ki(this)) : (b = new Ai(this), Xi(this, b), gg && Xi(this, new Oi(this, b)));
        b = this.a.length;
        for (var c, d = 0; d < b; d++) c = this.a[d], Yi(this, sb(c.e))
    }
    u(Vi, jd);

    function Xi(b, c) {
        var d = sb(c.e);
        d && (Ta(d, function (b) {
            var d = c.e[b];
            d && (this.b[b] = sa(d, c))
        }, b), b.a.push(c))
    }
    Vi.prototype.d = function (b) {
        var c = this.b[b.type];
        c && c(b)
    };

    function Yi(b, c) {
        Ta(c, function (b) {
            z(this.aa, b, this.d, !1, this)
        }, b)
    }

    function Zi(b, c) {
        Ta(c, function (b) {
            Xc(this.aa, b, this.d, !1, this)
        }, b)
    }
    function Di(b, c) {
        for (var d = {}, e, f = 0, g = $i.length; f < g; f++) e = $i[f][0], d[e] = b[e] || c[e] || $i[f][1];
        return d
    }
    Vi.prototype.$b = function (b, c) {
        b.bubbles = !0;
        Ei(this, aj, b, c)
    };
    Vi.prototype.cancel = function (b, c) {
        Ei(this, bj, b, c)
    };

    function Ji(b, c, d) {
        b.$b(c, d);
        c.target.contains(c.relatedTarget) || (c.bubbles = !1, Ei(b, Ui, c, d))
    }
    function Ii(b, c, d) {
        c.bubbles = !0;
        Ei(b, Si, c, d);
        c.target.contains(c.relatedTarget) || (c.bubbles = !1, Ei(b, Ti, c, d))
    }

    function Ei(b, c, d, e) {
        b.dispatchEvent(new ui(c, e, d))
    }
    function Ni(b, c) {
        b.dispatchEvent(new ui(c.type, c, c.a))
    }
    Vi.prototype.M = function () {
        for (var b = this.a.length, c, d = 0; d < b; d++) c = this.a[d], Zi(this, sb(c.e));
        Vi.S.M.call(this)
    };
    var Gi = "pointermove",
        Fi = "pointerdown",
        Hi = "pointerup",
        Si = "pointerover",
        aj = "pointerout",
        Ti = "pointerenter",
        Ui = "pointerleave",
        bj = "pointercancel",
        $i = [
            ["bubbles", !1],
            ["cancelable", !1],
            ["view", null],
            ["detail", null],
            ["screenX", 0],
            ["screenY", 0],
            ["clientX", 0],
            ["clientY", 0],
            ["ctrlKey", !1],
            ["altKey", !1],
            ["shiftKey", !1],
            ["metaKey", !1],
            ["button", 0],
            ["relatedTarget", null],
            ["buttons", 0],
            ["pointerId", 0],
            ["width", 0],
            ["height", 0],
            ["pressure", 0],
            ["tiltX", 0],
            ["tiltY", 0],
            ["pointerType", ""],
            ["hwTimestamp", 0],
            ["isPrimary", !1],
            ["type", ""],
            ["target", null],
            ["currentTarget", null],
            ["which", 0]
        ];

    function cj(b, c, d, e) {
        Zg.call(this, b, c, e);
        this.a = d;
        this.originalEvent = d.a;
        this.pixel = c.ad(this.originalEvent);
        this.coordinate = c.Ga(this.pixel)
    }
    u(cj, Zg);
    cj.prototype.preventDefault = function () {
        cj.S.preventDefault.call(this);
        this.a.preventDefault()
    };
    cj.prototype.lb = function () {
        cj.S.lb.call(this);
        this.a.lb()
    };

    function dj(b, c, d, e) {
        cj.call(this, b, c, d.a, e);
        this.c = d
    }
    u(dj, cj);

    function ej(b) {
        jd.call(this);
        this.c = b;
        this.e = 0;
        this.o = !1;
        this.f = this.g = this.b = null;
        b = this.c.b;
        this.j = 0;
        this.n = {};
        this.d = new Vi(b);
        this.a = null;
        this.g = z(this.d, Fi, this.ki, !1, this);
        this.i = z(this.d, Gi, this.Tk, !1, this)
    }
    u(ej, jd);

    function fj(b, c) {
        var d;
        d = new dj(gj, b.c, c);
        b.dispatchEvent(d);
        0 !== b.e ? (ba.clearTimeout(b.e), b.e = 0, d = new dj(hj, b.c, c), b.dispatchEvent(d)) : b.e = ba.setTimeout(sa(function () {
            this.e = 0;
            var b = new dj(ij, this.c, c);
            this.dispatchEvent(b)
        }, b), 250)
    }

    function jj(b, c) {
        c.type == kj || c.type == lj ? delete b.n[c.pointerId] : c.type == mj && (b.n[c.pointerId] = !0);
        b.j = qb(b.n)
    }
    l = ej.prototype;
    l.hf = function (b) {
        jj(this, b);
        var c = new dj(kj, this.c, b);
        this.dispatchEvent(c);
        0 === this.j && (Ta(this.b, Yc), this.b = null, tc(this.a), this.a = null);
        !this.o && 0 === b.button && fj(this, this.f)
    };
    l.ki = function (b) {
        jj(this, b);
        var c = new dj(mj, this.c, b);
        this.dispatchEvent(c);
        this.f = b;
        this.o = !1;
        null === this.b && (this.a = new Vi(document), this.b = [z(this.a, nj, this.Zi, !1, this), z(this.a, kj, this.hf, !1, this), z(this.d, lj, this.hf, !1, this)])
    };
    l.Zi = function (b) {
        if (b.clientX != this.f.clientX || b.clientY != this.f.clientY) {
            this.o = !0;
            var c = new dj(oj, this.c, b);
            this.dispatchEvent(c)
        }
        b.preventDefault()
    };
    l.Tk = function (b) {
        this.dispatchEvent(new dj(b.type, this.c, b))
    };
    l.M = function () {
        null !== this.i && (Yc(this.i), this.i = null);
        null !== this.g && (Yc(this.g), this.g = null);
        null !== this.b && (Ta(this.b, Yc), this.b = null);
        null !== this.a && (tc(this.a), this.a = null);
        null !== this.d && (tc(this.d), this.d = null);
        ej.S.M.call(this)
    };
    var ij = "singleclick",
        gj = "click",
        hj = "dblclick",
        oj = "pointerdrag",
        nj = "pointermove",
        mj = "pointerdown",
        kj = "pointerup",
        lj = "pointercancel",
        pj = {
            Tl: ij,
            Il: gj,
            Jl: hj,
            Ml: oj,
            Pl: nj,
            Ll: mj,
            Sl: kj,
            Rl: "pointerover",
            Ql: "pointerout",
            Nl: "pointerenter",
            Ol: "pointerleave",
            Kl: lj
        };

    function qj(b) {
        md.call(this);
        this.g = Ee(b.projection);
        this.e = m(b.attributions) ? b.attributions : null;
        this.r = b.logo;
        this.n = m(b.state) ? b.state : "ready"
    }
    u(qj, md);
    l = qj.prototype;
    l.yd = ca;
    l.Y = function () {
        return this.e
    };
    l.W = function () {
        return this.r
    };
    l.Z = function () {
        return this.g
    };
    l.$ = function () {
        return this.n
    };

    function rj(b, c) {
        b.n = c;
        b.l()
    };

    function D(b) {
        td.call(this);
        var c = Cb(b);
        c.brightness = m(b.brightness) ? b.brightness : 0;
        c.contrast = m(b.contrast) ? b.contrast : 1;
        c.hue = m(b.hue) ? b.hue : 0;
        c.opacity = m(b.opacity) ? b.opacity : 1;
        c.saturation = m(b.saturation) ? b.saturation : 1;
        c.visible = m(b.visible) ? b.visible : !0;
        c.maxResolution = m(b.maxResolution) ? b.maxResolution : Infinity;
        c.minResolution = m(b.minResolution) ? b.minResolution : 0;
        this.G(c)
    }
    u(D, td);
    D.prototype.d = function () {
        return this.get("brightness")
    };
    D.prototype.getBrightness = D.prototype.d;
    D.prototype.e = function () {
        return this.get("contrast")
    };
    D.prototype.getContrast = D.prototype.e;
    D.prototype.f = function () {
        return this.get("hue")
    };
    D.prototype.getHue = D.prototype.f;

    function sj(b) {
        var c = b.d(),
            d = b.e(),
            e = b.f(),
            f = b.j(),
            g = b.n(),
            h = b.Ta(),
            k = b.b(),
            n = b.D(),
            p = b.g(),
            q = b.i();
        return {
            layer: b,
            brightness: m(c) ? Yb(c, -1, 1) : 0,
            contrast: m(d) ? Math.max(d, 0) : 1,
            hue: m(e) ? e : 0,
            opacity: m(f) ? Yb(f, 0, 1) : 1,
            saturation: m(g) ? Math.max(g, 0) : 1,
            gc: h,
            visible: m(k) ? !! k : !0,
            extent: n,
            maxResolution: m(p) ? p : Infinity,
            minResolution: m(q) ? Math.max(q, 0) : 0
        }
    }
    D.prototype.D = function () {
        return this.get("extent")
    };
    D.prototype.getExtent = D.prototype.D;
    D.prototype.g = function () {
        return this.get("maxResolution")
    };
    D.prototype.getMaxResolution = D.prototype.g;
    D.prototype.i = function () {
        return this.get("minResolution")
    };
    D.prototype.getMinResolution = D.prototype.i;
    D.prototype.j = function () {
        return this.get("opacity")
    };
    D.prototype.getOpacity = D.prototype.j;
    D.prototype.n = function () {
        return this.get("saturation")
    };
    D.prototype.getSaturation = D.prototype.n;
    D.prototype.b = function () {
        return this.get("visible")
    };
    D.prototype.getVisible = D.prototype.b;
    D.prototype.t = function (b) {
        this.set("brightness", b)
    };
    D.prototype.setBrightness = D.prototype.t;
    D.prototype.F = function (b) {
        this.set("contrast", b)
    };
    D.prototype.setContrast = D.prototype.F;
    D.prototype.J = function (b) {
        this.set("hue", b)
    };
    D.prototype.setHue = D.prototype.J;
    D.prototype.p = function (b) {
        this.set("extent", b)
    };
    D.prototype.setExtent = D.prototype.p;
    D.prototype.Q = function (b) {
        this.set("maxResolution", b)
    };
    D.prototype.setMaxResolution = D.prototype.Q;
    D.prototype.V = function (b) {
        this.set("minResolution", b)
    };
    D.prototype.setMinResolution = D.prototype.V;
    D.prototype.q = function (b) {
        this.set("opacity", b)
    };
    D.prototype.setOpacity = D.prototype.q;
    D.prototype.ba = function (b) {
        this.set("saturation", b)
    };
    D.prototype.setSaturation = D.prototype.ba;
    D.prototype.ca = function (b) {
        this.set("visible", b)
    };
    D.prototype.setVisible = D.prototype.ca;

    function E(b) {
        var c = Cb(b);
        delete c.source;
        D.call(this, c);
        this.Ea = null;
        z(this, xd("source"), this.Yd, !1, this);
        this.ga(m(b.source) ? b.source : null)
    }
    u(E, D);
    E.prototype.Da = function (b) {
        b = m(b) ? b : [];
        b.push(sj(this));
        return b
    };
    E.prototype.a = function () {
        var b = this.get("source");
        return m(b) ? b : null
    };
    E.prototype.getSource = E.prototype.a;
    E.prototype.Ta = function () {
        var b = this.a();
        return null === b ? "undefined" : b.n
    };
    E.prototype.Zd = function () {
        this.l()
    };
    E.prototype.Yd = function () {
        null !== this.Ea && (Yc(this.Ea), this.Ea = null);
        var b = this.a();
        null !== b && (this.Ea = z(b, "change", this.Zd, !1, this));
        this.l()
    };
    E.prototype.ga = function (b) {
        this.set("source", b)
    };
    E.prototype.setSource = E.prototype.ga;

    function tj(b, c, d, e, f) {
        jd.call(this);
        this.f = f;
        this.extent = b;
        this.e = d;
        this.resolution = c;
        this.state = e
    }
    u(tj, jd);
    tj.prototype.D = function () {
        return this.extent
    };

    function uj(b, c) {
        jd.call(this);
        this.a = b;
        this.state = c
    }
    u(uj, jd);

    function vj(b) {
        b.dispatchEvent("change")
    }
    uj.prototype.mb = function () {
        return ma(this).toString()
    };
    uj.prototype.f = function () {
        return this.a
    };

    function wj(b) {
        this.minZoom = m(b.minZoom) ? b.minZoom : 0;
        this.a = b.resolutions;
        this.maxZoom = this.a.length - 1;
        this.d = m(b.origin) ? b.origin : null;
        this.f = null;
        m(b.origins) && (this.f = b.origins);
        this.c = null;
        m(b.tileSizes) && (this.c = b.tileSizes);
        this.e = m(b.tileSize) ? b.tileSize : null === this.c ? 256 : void 0
    }
    var xj = [0, 0, 0];
    l = wj.prototype;
    l.Bb = function () {
        return ed
    };
    l.$c = function (b, c, d, e, f) {
        f = yj(this, b, f);
        for (b = b[0] - 1; b >= this.minZoom;) {
            if (c.call(d, b, zj(this, f, b, e))) return !0;
            --b
        }
        return !1
    };
    l.ed = function () {
        return this.maxZoom
    };
    l.fd = function () {
        return this.minZoom
    };
    l.Lb = function (b) {
        return null === this.d ? this.f[b] : this.d
    };
    l.ka = function (b) {
        return this.a[b]
    };
    l.Fd = function () {
        return this.a
    };
    l.kd = function (b, c, d) {
        return b[0] < this.maxZoom ? (d = yj(this, b, d), zj(this, d, b[0] + 1, c)) : null
    };

    function Aj(b, c, d, e) {
        Bj(b, c[0], c[1], d, !1, xj);
        var f = xj[1],
            g = xj[2];
        Bj(b, c[2], c[3], d, !0, xj);
        return pf(f, xj[1], g, xj[2], e)
    }
    function zj(b, c, d, e) {
        return Aj(b, c, b.ka(d), e)
    }

    function Cj(b, c) {
        var d = b.Lb(c[0]),
            e = b.ka(c[0]),
            f = b.sa(c[0]);
        return [d[0] + (c[1] + .5) * f * e, d[1] + (c[2] + .5) * f * e]
    }
    function yj(b, c, d) {
        var e = b.Lb(c[0]),
            f = b.ka(c[0]);
        b = b.sa(c[0]);
        var g = e[0] + c[1] * b * f;
        c = e[1] + c[2] * b * f;
        return Xd(g, c, g + b * f, c + b * f, d)
    }
    l.Vb = function (b, c, d) {
        return Bj(this, b[0], b[1], c, !1, d)
    };

    function Bj(b, c, d, e, f, g) {
        var h = ec(b.a, e, 0),
            k = e / b.ka(h),
            n = b.Lb(h);
        b = b.sa(h);
        c = k * (c - n[0]) / (e * b);
        d = k * (d - n[1]) / (e * b);
        f ? (c = Math.ceil(c) - 1, d = Math.ceil(d) - 1) : (c = Math.floor(c), d = Math.floor(d));
        return kf(h, c, d, g)
    }
    l.Fc = function (b, c, d) {
        return Bj(this, b[0], b[1], this.ka(c), !1, d)
    };
    l.sa = function (b) {
        return m(this.e) ? this.e : this.c[b]
    };

    function Dj(b, c, d) {
        c = m(c) ? c : 42;
        d = m(d) ? d : 256;
        b = Math.max(re(b) / d, oe(b) / d);
        c += 1;
        d = Array(c);
        for (var e = 0; e < c; ++e) d[e] = b / Math.pow(2, e);
        return d
    }
    function Ej(b) {
        b = Ee(b);
        var c = b.D();
        null === c && (b = 180 * Ae.degrees / b.ie(), c = Xd(-b, -b, b, b));
        return c
    };

    function Fj(b) {
        qj.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            projection: b.projection,
            state: b.state
        });
        this.t = m(b.opaque) ? b.opaque : !1;
        this.F = m(b.tilePixelRatio) ? b.tilePixelRatio : 1;
        this.tileGrid = m(b.tileGrid) ? b.tileGrid : null
    }
    u(Fj, qj);
    l = Fj.prototype;
    l.zd = cd;
    l.fe = function (b, c, d, e) {
        var f = !0,
            g, h, k, n;
        for (k = e.a; k <= e.d; ++k) for (n = e.b; n <= e.c; ++n) h = this.hb(d, k, n), b[d] && b[d][h] || (g = c(d, k, n), null === g ? f = !1 : (b[d] || (b[d] = {}), b[d][h] = g));
        return f
    };
    l.bd = function () {
        return 0
    };
    l.hb = lf;
    l.za = function () {
        return this.tileGrid
    };

    function Gj(b, c) {
        var d;
        if (null === b.tileGrid) {
            if (d = c.e, null === d) {
                d = Ej(c);
                var e = m(void 0) ? void 0 : 256,
                    f = m(void 0) ? void 0 : "bottom-left",
                    g = Dj(d, void 0, e);
                d = new wj({
                    origin: le(d, f),
                    resolutions: g,
                    tileSize: e
                });
                c.e = d
            }
        } else d = b.tileGrid;
        return d
    }
    l.Gc = function (b, c, d) {
        return Gj(this, d).sa(b) * this.F
    };
    l.He = ca;

    function Hj(b, c) {
        pc.call(this);
        this.b = b;
        this.a = c
    }
    u(Hj, pc);
    Hj.prototype.Zb = ca;
    Hj.prototype.o = function (b) {
        2 === b.target.state && Ij(this)
    };

    function Ij(b) {
        var c = b.a;
        c.b() && "ready" == c.Ta() && b.b.e.render()
    }
    function Jj(b, c) {
        c.zd() && b.postRenderFunctions.push(ta(function (b, c, f) {
            c = ma(b).toString();
            b.se(f.usedTiles[c])
        }, c))
    }
    function Kj(b, c) {
        if (null != c) {
            var d, e, f;
            e = 0;
            for (f = c.length; e < f; ++e) d = c[e], b[ma(d).toString()] = d
        }
    }
    function Lj(b, c) {
        var d = c.r;
        m(d) && (ia(d) ? b.logos[d] = "" : la(d) && (b.logos[d.src] = d.href))
    }

    function Mj(b, c, d, e) {
        c = ma(c).toString();
        d = d.toString();
        c in b ? d in b[c] ? (b = b[c][d], e.a < b.a && (b.a = e.a), e.d > b.d && (b.d = e.d), e.b < b.b && (b.b = e.b), e.c > b.c && (b.c = e.c)) : b[c][d] = e : (b[c] = {}, b[c][d] = e)
    }
    function Nj(b, c, d, e) {
        return function (f, g, h) {
            f = c.Fb(f, g, h, d, e);
            return b(f) ? f : null
        }
    }
    function Oj(b, c, d) {
        return [c * (Math.round(b[0] / c) + d[0] % 2 / 2), c * (Math.round(b[1] / c) + d[1] % 2 / 2)]
    }

    function Pj(b, c, d, e, f, g, h, k, n, p) {
        var q = ma(c).toString();
        q in b.wantedTiles || (b.wantedTiles[q] = {});
        var r = b.wantedTiles[q];
        b = b.tileQueue;
        var s = d.minZoom,
            v, y, C, F, G, w;
        m(k) || (k = 0);
        for (w = h; w >= s; --w) for (y = zj(d, g, w, y), C = d.ka(w), F = y.a; F <= y.d; ++F) for (G = y.b; G <= y.c; ++G) h - w <= k ? (v = c.Fb(w, F, G, e, f), 0 == v.state && (r[nf(v.a)] = !0, v.mb() in b.b || Qj(b, [v, q, Cj(d, v.a), C])), m(n) && n.call(p, v)) : c.He(w, F, G)
    };

    function Rj(b) {
        this.p = b.opacity;
        this.q = b.rotateWithView;
        this.i = b.rotation;
        this.n = b.scale;
        this.r = b.snapToPixel
    }
    l = Rj.prototype;
    l.Ad = function () {
        return this.p
    };
    l.hd = function () {
        return this.q
    };
    l.Bd = function () {
        return this.i
    };
    l.Cd = function () {
        return this.n
    };
    l.jd = function () {
        return this.r
    };
    l.Dd = function (b) {
        this.i = b
    };
    l.Ed = function (b) {
        this.n = b
    };

    function Sj(b) {
        b = m(b) ? b : {};
        this.e = m(b.anchor) ? b.anchor : [.5, .5];
        this.d = null;
        this.c = m(b.anchorOrigin) ? b.anchorOrigin : "top-left";
        this.g = m(b.anchorXUnits) ? b.anchorXUnits : "fraction";
        this.o = m(b.anchorYUnits) ? b.anchorYUnits : "fraction";
        var c = m(b.crossOrigin) ? b.crossOrigin : null,
            d = m(b.img) ? b.img : null,
            e = b.src;
        m(e) && 0 !== e.length || null === d || (e = d.src);
        var f = m(b.src) ? 0 : 2,
            g = Tj.Ja(),
            h = g.get(e, c);
        null === h && (h = new Uj(d, e, c, f), g.set(e, c, h));
        this.a = h;
        this.t = m(b.offset) ? b.offset : [0, 0];
        this.b = m(b.offsetOrigin) ? b.offsetOrigin :
            "top-left";
        this.f = null;
        this.j = m(b.size) ? b.size : null;
        Rj.call(this, {
            opacity: m(b.opacity) ? b.opacity : 1,
            rotation: m(b.rotation) ? b.rotation : 0,
            scale: m(b.scale) ? b.scale : 1,
            snapToPixel: m(b.snapToPixel) ? b.snapToPixel : !0,
            rotateWithView: m(b.rotateWithView) ? b.rotateWithView : !1
        })
    }
    u(Sj, Rj);
    l = Sj.prototype;
    l.tb = function () {
        if (null !== this.d) return this.d;
        var b = this.e,
            c = this.ab();
        if ("fraction" == this.g || "fraction" == this.o) {
            if (null === c) return null;
            b = this.e.slice();
            "fraction" == this.g && (b[0] *= c[0]);
            "fraction" == this.o && (b[1] *= c[1])
        }
        if ("top-left" != this.c) {
            if (null === c) return null;
            b === this.e && (b = this.e.slice());
            if ("top-right" == this.c || "bottom-right" == this.c) b[0] = -b[0] + c[0];
            if ("bottom-left" == this.c || "bottom-right" == this.c) b[1] = -b[1] + c[1]
        }
        return this.d = b
    };
    l.yb = function () {
        return this.a.a
    };
    l.cd = function () {
        return this.a.c
    };
    l.ue = function () {
        return this.a.b
    };
    l.te = function () {
        var b = this.a;
        if (null === b.e) if (b.o) {
            var c = b.c[0],
                d = b.c[1],
                e = Tf(c, d);
            e.fillRect(0, 0, c, d);
            b.e = e.canvas
        } else b.e = b.a;
        return b.e
    };
    l.zb = function () {
        if (null !== this.f) return this.f;
        var b = this.t;
        if ("top-left" != this.b) {
            var c = this.ab(),
                d = this.a.c;
            if (null === c || null === d) return null;
            b = b.slice();
            if ("top-right" == this.b || "bottom-right" == this.b) b[0] = d[0] - c[0] - b[0];
            if ("bottom-left" == this.b || "bottom-right" == this.b) b[1] = d[1] - c[1] - b[1]
        }
        return this.f = b
    };
    l.Pj = function () {
        return this.a.f
    };
    l.ab = function () {
        return null === this.j ? this.a.c : this.j
    };
    l.ne = function (b, c) {
        return z(this.a, "change", b, !1, c)
    };
    l.load = function () {
        this.a.load()
    };
    l.Ge = function (b, c) {
        Xc(this.a, "change", b, !1, c)
    };

    function Uj(b, c, d, e) {
        jd.call(this);
        this.e = null;
        this.a = null === b ? new Image : b;
        null !== d && (this.a.crossOrigin = d);
        this.d = null;
        this.b = e;
        this.c = null;
        this.f = c;
        this.o = !1
    }
    u(Uj, jd);
    Uj.prototype.g = function () {
        this.b = 3;
        Ta(this.d, Yc);
        this.d = null;
        this.dispatchEvent("change")
    };
    Uj.prototype.i = function () {
        this.b = 2;
        this.c = [this.a.width, this.a.height];
        Ta(this.d, Yc);
        this.d = null;
        var b = Tf(1, 1);
        b.drawImage(this.a, 0, 0);
        try {
            b.getImageData(0, 0, 1, 1)
        } catch (c) {
            this.o = !0
        }
        this.dispatchEvent("change")
    };
    Uj.prototype.load = function () {
        if (0 == this.b) {
            this.b = 1;
            this.d = [Wc(this.a, "error", this.g, !1, this), Wc(this.a, "load", this.i, !1, this)];
            try {
                this.a.src = this.f
            } catch (b) {
                this.g()
            }
        }
    };

    function Tj() {
        this.a = {};
        this.c = 0
    }
    da(Tj);
    Tj.prototype.clear = function () {
        this.a = {};
        this.c = 0
    };
    Tj.prototype.get = function (b, c) {
        var d = c + ":" + b;
        return d in this.a ? this.a[d] : null
    };
    Tj.prototype.set = function (b, c, d) {
        this.a[c + ":" + b] = d;
        ++this.c
    };

    function Vj(b, c, d, e, f, g, h, k) {
        Od(b);
        0 === c && 0 === d || Qd(b, c, d);
        1 == e && 1 == f || Rd(b, e, f);
        0 !== g && Sd(b, g);
        0 === h && 0 === k || Qd(b, h, k);
        return b
    }
    function Wj(b, c) {
        return b[0] == c[0] && b[1] == c[1] && b[4] == c[4] && b[5] == c[5] && b[12] == c[12] && b[13] == c[13]
    }
    function Xj(b, c, d) {
        var e = b[1],
            f = b[5],
            g = b[13],
            h = c[0];
        c = c[1];
        d[0] = b[0] * h + b[4] * c + b[12];
        d[1] = e * h + f * c + g;
        return d
    };

    function Yj(b, c) {
        pc.call(this);
        this.e = c;
        this.g = null;
        this.b = {}
    }
    u(Yj, pc);

    function Zj(b) {
        var c = b.viewState,
            d = b.coordinateToPixelMatrix;
        Vj(d, b.size[0] / 2, b.size[1] / 2, 1 / c.resolution, -1 / c.resolution, -c.rotation, -c.center[0], -c.center[1]);
        b = b.pixelToCoordinateMatrix;
        var c = d[0],
            e = d[1],
            f = d[2],
            g = d[3],
            h = d[4],
            k = d[5],
            n = d[6],
            p = d[7],
            q = d[8],
            r = d[9],
            s = d[10],
            v = d[11],
            y = d[12],
            C = d[13],
            F = d[14],
            d = d[15],
            G = c * k - e * h,
            w = c * n - f * h,
            U = c * p - g * h,
            N = e * n - f * k,
            Y = e * p - g * k,
            T = f * p - g * n,
            qa = q * C - r * y,
            vb = q * F - s * y,
            Ka = q * d - v * y,
            ac = r * F - s * C,
            Sb = r * d - v * C,
            La = s * d - v * F,
            Pa = G * La - w * Sb + U * ac + N * Ka - Y * vb + T * qa;
        0 != Pa && (Pa = 1 / Pa, b[0] = (k * La - n * Sb + p * ac) * Pa, b[1] = (-e * La + f * Sb - g * ac) * Pa, b[2] = (C * T - F * Y + d * N) * Pa, b[3] = (-r * T + s * Y - v * N) * Pa, b[4] = (-h * La + n * Ka - p * vb) * Pa, b[5] = (c * La - f * Ka + g * vb) * Pa, b[6] = (-y * T + F * U - d * w) * Pa, b[7] = (q * T - s * U + v * w) * Pa, b[8] = (h * Sb - k * Ka + p * qa) * Pa, b[9] = (-c * Sb + e * Ka - g * qa) * Pa, b[10] = (y * Y - C * U + d * G) * Pa, b[11] = (-q * Y + r * U - v * G) * Pa, b[12] = (-h * ac + k * vb - n * qa) * Pa, b[13] = (c * ac - e * vb + f * qa) * Pa, b[14] = (-y * N + C * w - F * G) * Pa, b[15] = (q * N - r * w + s * G) * Pa)
    }
    Yj.prototype.Yc = function (b) {
        return new Hj(this, b)
    };
    Yj.prototype.M = function () {
        ob(this.b, tc);
        Yj.S.M.call(this)
    };

    function ak() {
        var b = Tj.Ja();
        if (32 < b.c) {
            var c = 0,
                d, e;
            for (d in b.a) {
                e = b.a[d];
                var f;
                if (f = 0 === (c++ & 3)) Ec(e) ? e = ld(e, void 0, void 0) : (e = Sc(e), e = !! e && Mc(e, void 0, void 0)), f = !e;
                f && (delete b.a[d], --b.c)
            }
        }
    }

    function bk(b, c, d, e, f, g, h) {
        var k, n = d.viewState,
            p = n.resolution,
            n = n.rotation;
        if (null !== b.g) {
            var q = {};
            if (k = ck(b.g, p, n, c, {}, function (b) {
                var c = ma(b).toString();
                if (!(c in q)) return q[c] = !0, e.call(f, b, null)
            })) return k
        }
        var n = b.e.Eb().Da(),
            r;
        for (r = n.length - 1; 0 <= r; --r) {
            k = n[r];
            var s = k.layer;
            if (k.visible && p >= k.minResolution && p < k.maxResolution && g.call(h, s) && (k = dk(b, s).Zb(c, d, e, f))) return k
        }
    }
    function dk(b, c) {
        var d = ma(c).toString();
        if (d in b.b) return b.b[d];
        var e = b.Yc(c);
        return b.b[d] = e
    }
    Yj.prototype.Ld = ca;
    Yj.prototype.t = function (b, c) {
        for (var d in this.b) if (!(null !== c && d in c.layerStates)) {
            var e = this.b[d];
            delete this.b[d];
            tc(e)
        }
    };

    function ek(b, c) {
        for (var d in b.b) if (!(d in c.layerStates)) {
            c.postRenderFunctions.push(sa(b.t, b));
            break
        }
    };

    function fk(b, c) {
        this.f = b;
        this.e = c;
        this.a = [];
        this.c = [];
        this.b = {}
    }
    fk.prototype.clear = function () {
        this.a.length = 0;
        this.c.length = 0;
        yb(this.b)
    };

    function gk(b) {
        var c = b.a,
            d = b.c,
            e = c[0];
        1 == c.length ? (c.length = 0, d.length = 0) : (c[0] = c.pop(), d[0] = d.pop(), hk(b, 0));
        c = b.e(e);
        delete b.b[c];
        return e
    }
    function Qj(b, c) {
        var d = b.f(c);
        Infinity != d && (b.a.push(c), b.c.push(d), b.b[b.e(c)] = !0, ik(b, 0, b.a.length - 1))
    }
    fk.prototype.Ub = function () {
        return this.a.length
    };
    fk.prototype.ia = function () {
        return 0 === this.a.length
    };

    function hk(b, c) {
        for (var d = b.a, e = b.c, f = d.length, g = d[c], h = e[c], k = c; c < f >> 1;) {
            var n = 2 * c + 1,
                p = 2 * c + 2,
                n = p < f && e[p] < e[n] ? p : n;
            d[c] = d[n];
            e[c] = e[n];
            c = n
        }
        d[c] = g;
        e[c] = h;
        ik(b, k, c)
    }
    function ik(b, c, d) {
        var e = b.a;
        b = b.c;
        for (var f = e[d], g = b[d]; d > c;) {
            var h = d - 1 >> 1;
            if (b[h] > g) e[d] = e[h], b[d] = b[h], d = h;
            else break
        }
        e[d] = f;
        b[d] = g
    }
    function jk(b) {
        var c = b.f,
            d = b.a,
            e = b.c,
            f = 0,
            g = d.length,
            h, k, n;
        for (k = 0; k < g; ++k) h = d[k], n = c(h), Infinity == n ? delete b.b[b.e(h)] : (e[f] = n, d[f++] = h);
        d.length = f;
        e.length = f;
        for (c = (b.a.length >> 1) - 1; 0 <= c; c--) hk(b, c)
    };

    function kk(b, c) {
        fk.call(this, function (c) {
            return b.apply(null, c)
        }, function (b) {
            return b[0].mb()
        });
        this.o = c;
        this.d = 0
    }
    u(kk, fk);
    kk.prototype.g = function () {
        --this.d;
        this.o()
    };

    function lk(b, c, d) {
        this.d = b;
        this.b = c;
        this.f = d;
        this.a = [];
        this.c = this.e = 0
    }
    lk.prototype.update = function (b, c) {
        this.a.push(b, c, ua())
    };

    function mk(b, c) {
        var d = b.d,
            e = b.c,
            f = b.b - e,
            g = nk(b);
        return gf({
            source: c,
            duration: g,
            easing: function (b) {
                return e * (Math.exp(d * b * g) - 1) / f
            }
        })
    }
    function nk(b) {
        return Math.log(b.b / b.c) / b.d
    };

    function ok(b) {
        td.call(this);
        this.n = null;
        this.b(!0);
        this.handleEvent = b.handleEvent
    }
    u(ok, td);
    ok.prototype.a = function () {
        return this.get("active")
    };
    ok.prototype.getActive = ok.prototype.a;
    ok.prototype.b = function (b) {
        this.set("active", b)
    };
    ok.prototype.setActive = ok.prototype.b;
    ok.prototype.setMap = function (b) {
        this.n = b
    };

    function pk(b, c, d, e, f) {
        if (null != d) {
            var g = c.e(),
                h = c.a();
            m(g) && m(h) && m(f) && 0 < f && (b.Ua(hf({
                rotation: g,
                duration: f,
                easing: cf
            })), m(e) && b.Ua(gf({
                source: h,
                duration: f,
                easing: cf
            })));
            c.rotate(d, e)
        }
    }

    function qk(b, c, d, e, f) {
        var g = c.b();
        d = c.constrainResolution(g, d, 0);
        rk(b, c, d, e, f)
    }
    function rk(b, c, d, e, f) {
        if (null != d) {
            var g = c.b(),
                h = c.a();
            m(g) && m(h) && m(f) && 0 < f && (b.Ua(jf({
                resolution: g,
                duration: f,
                easing: cf
            })), m(e) && b.Ua(gf({
                source: h,
                duration: f,
                easing: cf
            })));
            if (null != e) {
                var k;
                b = c.a();
                f = c.b();
                m(b) && m(f) && (k = [e[0] - d * (e[0] - b[0]) / f, e[1] - d * (e[1] - b[1]) / f]);
                c.Oa(k)
            }
            c.d(d)
        }
    };

    function sk(b) {
        b = m(b) ? b : {};
        this.d = m(b.delta) ? b.delta : 1;
        ok.call(this, {
            handleEvent: tk
        });
        this.e = m(b.duration) ? b.duration : 250
    }
    u(sk, ok);

    function tk(b) {
        var c = !1,
            d = b.a;
        if (b.type == hj) {
            var c = b.map,
                e = b.coordinate,
                d = d.d ? -this.d : this.d,
                f = c.a();
            qk(c, f, d, e, this.e);
            b.preventDefault();
            c = !0
        }
        return !c
    };

    function uk(b) {
        b = b.a;
        return b.c && !b.g && b.d
    }
    function vk(b) {
        return "mousemove" == b.originalEvent.type
    }
    function wk(b) {
        return b.type == ij
    }
    function xk(b) {
        b = b.a;
        return !b.c && !b.g && !b.d
    }
    function yk(b) {
        b = b.a;
        return !b.c && !b.g && b.d
    }
    function zk(b) {
        b = b.a.target.tagName;
        return "INPUT" !== b && "SELECT" !== b && "TEXTAREA" !== b
    }
    function Ak(b) {
        return 1 == b.c.pointerId
    };

    function Bk(b) {
        b = m(b) ? b : {};
        ok.call(this, {
            handleEvent: m(b.handleEvent) ? b.handleEvent : Ck
        });
        this.Da = m(b.handleDownEvent) ? b.handleDownEvent : cd;
        this.oa = m(b.handleDragEvent) ? b.handleDragEvent : ca;
        this.Ea = m(b.handleMoveEvent) ? b.handleMoveEvent : ca;
        this.qa = m(b.handleUpEvent) ? b.handleUpEvent : cd;
        this.p = !1;
        this.t = {};
        this.e = []
    }
    u(Bk, ok);

    function Dk(b) {
        for (var c = b.length, d = 0, e = 0, f = 0; f < c; f++) d += b[f].clientX, e += b[f].clientY;
        return [d / c, e / c]
    }

    function Ck(b) {
        if (!(b instanceof dj)) return !0;
        var c = !1,
            d = b.type;
        if (d === mj || d === oj || d === kj) d = b.c, b.type == kj ? delete this.t[d.pointerId] : b.type == mj ? this.t[d.pointerId] = d : d.pointerId in this.t && (this.t[d.pointerId] = d), this.e = rb(this.t);
        this.p && (b.type == oj ? this.oa(b) : b.type == kj && (this.p = this.qa(b)));
        b.type == mj ? (this.p = b = this.Da(b), c = this.q(b)) : b.type == nj && this.Ea(b);
        return !c
    }
    Bk.prototype.q = ed;

    function Ek(b) {
        Bk.call(this, {
            handleDownEvent: Fk,
            handleDragEvent: Gk,
            handleUpEvent: Hk
        });
        b = m(b) ? b : {};
        this.d = b.kinetic;
        this.f = this.g = null;
        this.j = m(b.condition) ? b.condition : xk;
        this.i = !1
    }
    u(Ek, Bk);

    function Gk(b) {
        var c = Dk(this.e);
        this.d && this.d.update(c[0], c[1]);
        if (null !== this.f) {
            var d = this.f[0] - c[0],
                e = c[1] - this.f[1];
            b = b.map;
            var f = b.a(),
                g = $e(f),
                e = d = [d, e],
                h = g.resolution;
            e[0] *= h;
            e[1] *= h;
            Dd(d, g.rotation);
            yd(d, g.center);
            d = f.i(d);
            b.render();
            f.Oa(d)
        }
        this.f = c
    }

    function Hk(b) {
        b = b.map;
        var c = b.a();
        if (0 === this.e.length) {
            var d;
            if (d = !this.i && this.d) if (d = this.d, 6 > d.a.length) d = !1;
            else {
                var e = ua() - d.f,
                    f = d.a.length - 3;
                if (d.a[f + 2] < e) d = !1;
                else {
                    for (var g = f - 3; 0 < g && d.a[g + 2] > e;) g -= 3;
                    var e = d.a[f + 2] - d.a[g + 2],
                        h = d.a[f] - d.a[g],
                        f = d.a[f + 1] - d.a[g + 1];
                    d.e = Math.atan2(f, h);
                    d.c = Math.sqrt(h * h + f * f) / e;
                    d = d.c > d.b
                }
            }
            d && (d = this.d, d = (d.b - d.c) / d.d, f = this.d.e, g = c.a(), this.g = mk(this.d, g), b.Ua(this.g), g = b.f(g), d = b.Ga([g[0] - d * Math.cos(f), g[1] - d * Math.sin(f)]), d = c.i(d), c.Oa(d));
            bf(c, -1);
            b.render();
            return !1
        }
        this.f = null;
        return !0
    }
    function Fk(b) {
        if (0 < this.e.length && this.j(b)) {
            var c = b.map,
                d = c.a();
            this.f = null;
            this.p || bf(d, 1);
            c.render();
            null !== this.g && ab(c.F, this.g) && (d.Oa(b.frameState.viewState.center), this.g = null);
            this.d && (b = this.d, b.a.length = 0, b.e = 0, b.c = 0);
            this.i = 1 < this.e.length;
            return !0
        }
        return !1
    }
    Ek.prototype.q = cd;

    function Ik(b) {
        b = m(b) ? b : {};
        Bk.call(this, {
            handleDownEvent: Jk,
            handleDragEvent: Kk,
            handleUpEvent: Lk
        });
        this.f = m(b.condition) ? b.condition : uk;
        this.d = void 0
    }
    u(Ik, Bk);

    function Kk(b) {
        if (Ak(b)) {
            var c = b.map,
                d = c.e();
            b = b.pixel;
            d = Math.atan2(d[1] / 2 - b[1], b[0] - d[0] / 2);
            if (m(this.d)) {
                b = d - this.d;
                var e = c.a(),
                    f = $e(e);
                c.render();
                pk(c, e, f.rotation - b)
            }
            this.d = d
        }
    }
    function Lk(b) {
        if (!Ak(b)) return !0;
        b = b.map;
        var c = b.a();
        bf(c, -1);
        var d = $e(c).rotation,
            d = c.constrainRotation(d, 0);
        pk(b, c, d, void 0, 250);
        return !1
    }

    function Jk(b) {
        return Ak(b) && Cc(b.a) && this.f(b) ? (b = b.map, bf(b.a(), 1), b.render(), this.d = void 0, !0) : !1
    }
    Ik.prototype.q = cd;

    function Mk() {
        md.call(this);
        this.extent = void 0;
        this.g = -1;
        this.o = {};
        this.j = this.i = 0
    }
    u(Mk, md);
    Mk.prototype.f = function (b, c) {
        var d = m(c) ? c : [NaN, NaN];
        this.Va(b[0], b[1], d, Infinity);
        return d
    };
    Mk.prototype.Jb = cd;
    Mk.prototype.e = function (b, c) {
        this.ma(Ve(b, c));
        return this
    };

    function Nk(b, c, d, e, f, g) {
        var h = f[0],
            k = f[1],
            n = f[4],
            p = f[5],
            q = f[12];
        f = f[13];
        for (var r = m(g) ? g : [], s = 0; c < d; c += e) {
            var v = b[c],
                y = b[c + 1];
            r[s++] = h * v + n * y + q;
            r[s++] = k * v + p * y + f
        }
        m(g) && r.length != s && (r.length = s);
        return r
    };

    function Ok() {
        Mk.call(this);
        this.a = "XY";
        this.s = 2;
        this.k = null
    }
    u(Ok, Mk);

    function Pk(b) {
        if ("XY" == b) return 2;
        if ("XYZ" == b || "XYM" == b) return 3;
        if ("XYZM" == b) return 4
    }
    l = Ok.prototype;
    l.Jb = cd;
    l.D = function (b) {
        if (this.g != this.c) {
            var c = this.k,
                d = this.k.length,
                e = this.s,
                f = Xd(Infinity, Infinity, -Infinity, -Infinity, this.extent);
            this.extent = fe(f, c, 0, d, e);
            this.g = this.c
        }
        return te(this.extent, b)
    };
    l.vb = function () {
        return this.k.slice(0, this.s)
    };
    l.wb = function () {
        return this.k.slice(this.k.length - this.s)
    };
    l.xb = function () {
        return this.a
    };
    l.ke = function (b) {
        this.j != this.c && (yb(this.o), this.i = 0, this.j = this.c);
        if (0 > b || 0 !== this.i && b <= this.i) return this;
        var c = b.toString();
        if (this.o.hasOwnProperty(c)) return this.o[c];
        var d = this.mc(b);
        if (d.k.length < this.k.length) return this.o[c] = d;
        this.i = b;
        return this
    };
    l.mc = function () {
        return this
    };

    function Qk(b, c, d) {
        b.s = Pk(c);
        b.a = c;
        b.k = d
    }

    function Rk(b, c, d, e) {
        if (m(c)) d = Pk(c);
        else {
            for (c = 0; c < e; ++c) {
                if (0 === d.length) {
                    b.a = "XY";
                    b.s = 2;
                    return
                }
                d = d[0]
            }
            d = d.length;
            c = 2 == d ? "XY" : 3 == d ? "XYZ" : 4 == d ? "XYZM" : void 0
        }
        b.a = c;
        b.s = d
    }
    l.ma = function (b) {
        null !== this.k && (b(this.k, this.k, this.s), this.l())
    };
    l.Aa = function (b, c) {
        var d = this.k;
        if (null !== d) {
            var e = d.length,
                f = this.s,
                g = m(d) ? d : [],
                h = 0,
                k, n;
            for (k = 0; k < e; k += f) for (g[h++] = d[k] + b, g[h++] = d[k + 1] + c, n = k + 2; n < k + f; ++n) g[h++] = d[n];
            m(d) && g.length != h && (g.length = h);
            this.l()
        }
    };

    function Sk(b, c, d, e) {
        for (var f = 0, g = b[d - e], h = b[d - e + 1]; c < d; c += e) var k = b[c],
            n = b[c + 1],
            f = f + (h * k - g * n),
            g = k,
            h = n;
        return f / 2
    }
    function Tk(b, c, d, e) {
        var f = 0,
            g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g],
                f = f + Sk(b, c, k, e);
            c = k
        }
        return f
    };

    function Uk(b, c, d, e, f, g) {
        var h = f - d,
            k = g - e;
        if (0 !== h || 0 !== k) {
            var n = ((b - d) * h + (c - e) * k) / (h * h + k * k);
            1 < n ? (d = f, e = g) : 0 < n && (d += h * n, e += k * n)
        }
        return Vk(b, c, d, e)
    }
    function Vk(b, c, d, e) {
        b = d - b;
        c = e - c;
        return b * b + c * c
    };

    function Wk(b, c, d, e, f, g, h) {
        var k = b[c],
            n = b[c + 1],
            p = b[d] - k,
            q = b[d + 1] - n;
        if (0 !== p || 0 !== q) if (g = ((f - k) * p + (g - n) * q) / (p * p + q * q), 1 < g) c = d;
        else if (0 < g) {
            for (f = 0; f < e; ++f) h[f] = $b(b[c + f], b[d + f], g);
            h.length = e;
            return
        }
        for (f = 0; f < e; ++f) h[f] = b[c + f];
        h.length = e
    }
    function Xk(b, c, d, e, f) {
        var g = b[c],
            h = b[c + 1];
        for (c += e; c < d; c += e) {
            var k = b[c],
                n = b[c + 1],
                g = Vk(g, h, k, n);
            g > f && (f = g);
            g = k;
            h = n
        }
        return f
    }
    function Yk(b, c, d, e, f) {
        var g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g];
            f = Xk(b, c, k, e, f);
            c = k
        }
        return f
    }

    function Zk(b, c, d, e, f, g, h, k, n, p, q) {
        if (c == d) return p;
        var r;
        if (0 === f) {
            r = Vk(h, k, b[c], b[c + 1]);
            if (r < p) {
                for (q = 0; q < e; ++q) n[q] = b[c + q];
                n.length = e;
                return r
            }
            return p
        }
        for (var s = m(q) ? q : [NaN, NaN], v = c + e; v < d;) if (Wk(b, v - e, v, e, h, k, s), r = Vk(h, k, s[0], s[1]), r < p) {
            p = r;
            for (q = 0; q < e; ++q) n[q] = s[q];
            n.length = e;
            v += e
        } else v += e * Math.max((Math.sqrt(r) - Math.sqrt(p)) / f | 0, 1);
        if (g && (Wk(b, d - e, c, e, h, k, s), r = Vk(h, k, s[0], s[1]), r < p)) {
            p = r;
            for (q = 0; q < e; ++q) n[q] = s[q];
            n.length = e
        }
        return p
    }

    function $k(b, c, d, e, f, g, h, k, n, p, q) {
        q = m(q) ? q : [NaN, NaN];
        var r, s;
        r = 0;
        for (s = d.length; r < s; ++r) {
            var v = d[r];
            p = Zk(b, c, v, e, f, g, h, k, n, p, q);
            c = v
        }
        return p
    };

    function al(b, c) {
        var d = 0,
            e, f;
        e = 0;
        for (f = c.length; e < f; ++e) b[d++] = c[e];
        return d
    }
    function bl(b, c, d, e) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
            var h = d[f],
                k;
            for (k = 0; k < e; ++k) b[c++] = h[k]
        }
        return c
    }
    function cl(b, c, d, e, f) {
        f = m(f) ? f : [];
        var g = 0,
            h, k;
        h = 0;
        for (k = d.length; h < k; ++h) c = bl(b, c, d[h], e), f[g++] = c;
        f.length = g;
        return f
    };

    function dl(b, c, d, e, f) {
        f = m(f) ? f : [];
        for (var g = 0; c < d; c += e) f[g++] = b.slice(c, c + e);
        f.length = g;
        return f
    }
    function el(b, c, d, e, f) {
        f = m(f) ? f : [];
        var g = 0,
            h, k;
        h = 0;
        for (k = d.length; h < k; ++h) {
            var n = d[h];
            f[g++] = dl(b, c, n, e, f[g]);
            c = n
        }
        f.length = g;
        return f
    };

    function fl(b, c, d, e, f, g, h) {
        var k = (d - c) / e;
        if (3 > k) {
            for (; c < d; c += e) g[h++] = b[c], g[h++] = b[c + 1];
            return h
        }
        var n = Array(k);
        n[0] = 1;
        n[k - 1] = 1;
        d = [c, d - e];
        for (var p = 0, q; 0 < d.length;) {
            var r = d.pop(),
                s = d.pop(),
                v = 0,
                y = b[s],
                C = b[s + 1],
                F = b[r],
                G = b[r + 1];
            for (q = s + e; q < r; q += e) {
                var w = Uk(b[q], b[q + 1], y, C, F, G);
                w > v && (p = q, v = w)
            }
            v > f && (n[(p - c) / e] = 1, s + e < p && d.push(s, p), p + e < r && d.push(p, r))
        }
        for (q = 0; q < k; ++q) n[q] && (g[h++] = b[c + q * e], g[h++] = b[c + q * e + 1]);
        return h
    }

    function gl(b, c, d, e, f, g, h, k) {
        var n, p;
        n = 0;
        for (p = d.length; n < p; ++n) {
            var q = d[n];
            a: {
                var r = b,
                    s = q,
                    v = e,
                    y = f,
                    C = g;
                if (c != s) {
                    var F = y * Math.round(r[c] / y),
                        G = y * Math.round(r[c + 1] / y);
                    c += v;
                    C[h++] = F;
                    C[h++] = G;
                    var w = void 0,
                        U = void 0;
                    do if (w = y * Math.round(r[c] / y), U = y * Math.round(r[c + 1] / y), c += v, c == s) {
                        C[h++] = w;
                        C[h++] = U;
                        break a
                    }
                    while (w == F && U == G);
                    for (; c < s;) {
                        var N, Y;
                        N = y * Math.round(r[c] / y);
                        Y = y * Math.round(r[c + 1] / y);
                        c += v;
                        if (N != w || Y != U) {
                            var T = w - F,
                                qa = U - G,
                                vb = N - F,
                                Ka = Y - G;
                            T * Ka == qa * vb && (0 > T && vb < T || T == vb || 0 < T && vb > T) && (0 > qa && Ka < qa || qa == Ka || 0 < qa && Ka > qa) || (C[h++] = w, C[h++] = U, F = w, G = U);
                            w = N;
                            U = Y
                        }
                    }
                    C[h++] = w;
                    C[h++] = U
                }
            }
            k.push(h);
            c = q
        }
        return h
    };

    function hl(b, c) {
        Ok.call(this);
        this.b = this.n = -1;
        this.U(b, c)
    }
    u(hl, Ok);
    l = hl.prototype;
    l.clone = function () {
        var b = new hl(null);
        il(b, this.a, this.k.slice());
        return b
    };
    l.Va = function (b, c, d, e) {
        if (e < Zd(this.D(), b, c)) return e;
        this.b != this.c && (this.n = Math.sqrt(Xk(this.k, 0, this.k.length, this.s, 0)), this.b = this.c);
        return Zk(this.k, 0, this.k.length, this.s, this.n, !0, b, c, d, e)
    };
    l.nj = function () {
        return Sk(this.k, 0, this.k.length, this.s)
    };
    l.K = function () {
        return dl(this.k, 0, this.k.length, this.s)
    };
    l.mc = function (b) {
        var c = [];
        c.length = fl(this.k, 0, this.k.length, this.s, b, c, 0);
        b = new hl(null);
        il(b, "XY", c);
        return b
    };
    l.H = function () {
        return "LinearRing"
    };
    l.U = function (b, c) {
        null === b ? il(this, "XY", null) : (Rk(this, c, b, 1), null === this.k && (this.k = []), this.k.length = bl(this.k, 0, b, this.s), this.l())
    };

    function il(b, c, d) {
        Qk(b, c, d);
        b.l()
    };

    function jl(b, c) {
        Ok.call(this);
        this.U(b, c)
    }
    u(jl, Ok);
    l = jl.prototype;
    l.clone = function () {
        var b = new jl(null);
        kl(b, this.a, this.k.slice());
        return b
    };
    l.Va = function (b, c, d, e) {
        var f = this.k;
        b = Vk(b, c, f[0], f[1]);
        if (b < e) {
            e = this.s;
            for (c = 0; c < e; ++c) d[c] = f[c];
            d.length = e;
            return b
        }
        return e
    };
    l.K = function () {
        return null === this.k ? [] : this.k.slice()
    };
    l.D = function (b) {
        this.g != this.c && (this.extent = ce(this.k, this.extent), this.g = this.c);
        return te(this.extent, b)
    };
    l.H = function () {
        return "Point"
    };
    l.ha = function (b) {
        return ae(b, this.k[0], this.k[1])
    };
    l.U = function (b, c) {
        null === b ? kl(this, "XY", null) : (Rk(this, c, b, 0), null === this.k && (this.k = []), this.k.length = al(this.k, b), this.l())
    };

    function kl(b, c, d) {
        Qk(b, c, d);
        b.l()
    };

    function ll(b, c, d, e, f) {
        return !ge(f, function (f) {
            return !ml(b, c, d, e, f[0], f[1])
        })
    }
    function ml(b, c, d, e, f, g) {
        for (var h = !1, k = b[d - e], n = b[d - e + 1]; c < d; c += e) {
            var p = b[c],
                q = b[c + 1];
            n > g != q > g && f < (p - k) * (g - n) / (q - n) + k && (h = !h);
            k = p;
            n = q
        }
        return h
    }
    function nl(b, c, d, e, f, g) {
        if (0 === d.length || !ml(b, c, d[0], e, f, g)) return !1;
        var h;
        c = 1;
        for (h = d.length; c < h; ++c) if (ml(b, d[c - 1], d[c], e, f, g)) return !1;
        return !0
    };

    function pl(b, c, d, e, f, g, h) {
        var k, n, p, q, r, s = f[g + 1],
            v = [],
            y = d[0];
        p = b[y - e];
        r = b[y - e + 1];
        for (k = c; k < y; k += e) {
            q = b[k];
            n = b[k + 1];
            if (s <= r && n <= s || r <= s && s <= n) p = (s - r) / (n - r) * (q - p) + p, v.push(p);
            p = q;
            r = n
        }
        y = NaN;
        r = -Infinity;
        v.sort();
        p = v[0];
        k = 1;
        for (n = v.length; k < n; ++k) {
            q = v[k];
            var C = Math.abs(q - p);
            C > r && (p = (p + q) / 2, nl(b, c, d, e, p, s) && (y = p, r = C));
            p = q
        }
        isNaN(y) && (y = f[g]);
        return m(h) ? (h.push(y, s), h) : [y, s]
    };

    function ql(b, c, d, e, f) {
        for (var g = [b[c], b[c + 1]], h = [], k; c + e < d; c += e) {
            h[0] = b[c + e];
            h[1] = b[c + e + 1];
            if (k = f(g, h)) return k;
            g[0] = h[0];
            g[1] = h[1]
        }
        return !1
    };

    function rl(b, c, d, e, f) {
        var g = fe(Vd(), b, c, d, e);
        return qe(f, g) ? $d(f, g) || g[0] >= f[0] && g[2] <= f[2] || g[1] >= f[1] && g[3] <= f[3] ? !0 : ql(b, c, d, e, function (b, c) {
            var d = !1,
                e = be(f, b),
                g = be(f, c);
            if (1 === e || 1 === g) d = !0;
            else {
                var r = f[0],
                    s = f[1],
                    v = f[2],
                    y = f[3],
                    C = c[0],
                    F = c[1],
                    G = (F - b[1]) / (C - b[0]);
                g & 2 && !(e & 2) ? (s = C - (F - y) / G, d = s >= r && s <= v) : g & 4 && !(e & 4) ? (r = F - (C - v) * G, d = r >= s && r <= y) : g & 8 && !(e & 8) ? (s = C - (F - s) / G, d = s >= r && s <= v) : g & 16 && !(e & 16) && (r = F - (C - r) * G, d = r >= s && r <= y)
            }
            return d
        }) : !1
    }

    function sl(b, c, d, e, f) {
        var g = d[0];
        if (!(rl(b, c, g, e, f) || ml(b, c, g, e, f[0], f[1]) || ml(b, c, g, e, f[0], f[3]) || ml(b, c, g, e, f[2], f[1]) || ml(b, c, g, e, f[2], f[3]))) return !1;
        if (1 === d.length) return !0;
        c = 1;
        for (g = d.length; c < g; ++c) if (ll(b, d[c - 1], d[c], e, f)) return !1;
        return !0
    };

    function tl(b, c, d, e) {
        for (var f = 0, g = b[d - e], h = b[d - e + 1]; c < d; c += e) var k = b[c],
            n = b[c + 1],
            f = f + (k - g) * (n + h),
            g = k,
            h = n;
        return 0 < f
    }
    function ul(b, c, d) {
        var e = 0,
            f, g;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var h = c[f],
                e = tl(b, e, h, d);
            if (0 === f ? !e : e) return !1;
            e = h
        }
        return !0
    }
    function vl(b, c, d, e) {
        var f, g;
        f = 0;
        for (g = d.length; f < g; ++f) {
            var h = d[f],
                k = tl(b, c, h, e);
            if (0 === f ? !k : k) for (var k = b, n = h, p = e; c < n - p;) {
                var q;
                for (q = 0; q < p; ++q) {
                    var r = k[c + q];
                    k[c + q] = k[n - p + q];
                    k[n - p + q] = r
                }
                c += p;
                n -= p
            }
            c = h
        }
        return c
    };

    function H(b, c) {
        Ok.call(this);
        this.b = [];
        this.p = -1;
        this.q = null;
        this.F = this.r = this.t = -1;
        this.n = null;
        this.U(b, c)
    }
    u(H, Ok);
    l = H.prototype;
    l.Ug = function (b) {
        null === this.k ? this.k = b.k.slice() : db(this.k, b.k);
        this.b.push(this.k.length);
        this.l()
    };
    l.clone = function () {
        var b = new H(null);
        wl(b, this.a, this.k.slice(), this.b.slice());
        return b
    };
    l.Va = function (b, c, d, e) {
        if (e < Zd(this.D(), b, c)) return e;
        this.r != this.c && (this.t = Math.sqrt(Yk(this.k, 0, this.b, this.s, 0)), this.r = this.c);
        return $k(this.k, 0, this.b, this.s, this.t, !0, b, c, d, e)
    };
    l.Jb = function (b, c) {
        return nl(xl(this), 0, this.b, this.s, b, c)
    };
    l.qj = function () {
        return Tk(xl(this), 0, this.b, this.s)
    };
    l.K = function () {
        return el(this.k, 0, this.b, this.s)
    };

    function yl(b) {
        if (b.p != b.c) {
            var c = ke(b.D());
            b.q = pl(xl(b), 0, b.b, b.s, c, 0);
            b.p = b.c
        }
        return b.q
    }
    l.ph = function () {
        return new jl(yl(this))
    };
    l.vh = function () {
        return this.b.length
    };
    l.uh = function (b) {
        if (0 > b || this.b.length <= b) return null;
        var c = new hl(null);
        il(c, this.a, this.k.slice(0 === b ? 0 : this.b[b - 1], this.b[b]));
        return c
    };
    l.dd = function () {
        var b = this.a,
            c = this.k,
            d = this.b,
            e = [],
            f = 0,
            g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = d[g],
                n = new hl(null);
            il(n, b, c.slice(f, k));
            e.push(n);
            f = k
        }
        return e
    };

    function xl(b) {
        if (b.F != b.c) {
            var c = b.k;
            ul(c, b.b, b.s) ? b.n = c : (b.n = c.slice(), b.n.length = vl(b.n, 0, b.b, b.s));
            b.F = b.c
        }
        return b.n
    }
    l.mc = function (b) {
        var c = [],
            d = [];
        c.length = gl(this.k, 0, this.b, this.s, Math.sqrt(b), c, 0, d);
        b = new H(null);
        wl(b, "XY", c, d);
        return b
    };
    l.H = function () {
        return "Polygon"
    };
    l.ha = function (b) {
        return sl(xl(this), 0, this.b, this.s, b)
    };
    l.U = function (b, c) {
        if (null === b) wl(this, "XY", null, this.b);
        else {
            Rk(this, c, b, 2);
            null === this.k && (this.k = []);
            var d = cl(this.k, 0, b, this.s, this.b);
            this.k.length = 0 === d.length ? 0 : d[d.length - 1];
            this.l()
        }
    };

    function wl(b, c, d, e) {
        Qk(b, c, d);
        b.b = e;
        b.l()
    }

    function zl(b, c, d, e) {
        var f = m(e) ? e : 32;
        e = [];
        var g;
        for (g = 0; g < f; ++g) db(e, b.offset(c, d, 2 * Math.PI * g / f));
        e.push(e[0], e[1]);
        b = new H(null);
        wl(b, "XY", e, [e.length]);
        return b
    };

    function Al(b, c, d, e, f, g, h) {
        uc.call(this, b, c);
        this.vectorContext = d;
        this.a = e;
        this.frameState = f;
        this.context = g;
        this.glContext = h
    }
    u(Al, uc);

    function Bl(b) {
        this.b = this.c = this.e = this.d = this.a = null;
        this.f = b
    }
    u(Bl, pc);

    function Cl(b) {
        var c = b.e,
            d = b.c;
        b = Va([c, [c[0], d[1]], d, [d[0], c[1]]], b.a.Ga, b.a);
        b[4] = b[0].slice();
        return new H([b])
    }
    Bl.prototype.M = function () {
        this.setMap(null)
    };
    Bl.prototype.g = function (b) {
        var c = this.b,
            d = this.f;
        b.vectorContext.ic(Infinity, function (b) {
            b.wa(d.e, d.b);
            b.xa(d.c);
            b.Sb(c, null)
        })
    };
    Bl.prototype.N = function () {
        return this.b
    };

    function Dl(b) {
        null === b.a || null === b.e || null === b.c || b.a.render()
    }
    Bl.prototype.setMap = function (b) {
        null !== this.d && (Yc(this.d), this.d = null, this.a.render(), this.a = null);
        this.a = b;
        null !== this.a && (this.d = z(b, "postcompose", this.g, !1, this), Dl(this))
    };

    function El(b, c) {
        uc.call(this, b);
        this.coordinate = c
    }
    u(El, uc);

    function Fl(b) {
        Bk.call(this, {
            handleDownEvent: Hl,
            handleDragEvent: Il,
            handleUpEvent: Jl
        });
        b = m(b) ? b : {};
        this.f = new Bl(m(b.style) ? b.style : null);
        this.d = null;
        this.i = m(b.condition) ? b.condition : dd
    }
    u(Fl, Bk);

    function Il(b) {
        if (Ak(b)) {
            var c = this.f;
            b = b.pixel;
            c.e = this.d;
            c.c = b;
            c.b = Cl(c);
            Dl(c)
        }
    }
    Fl.prototype.N = function () {
        return this.f.N()
    };
    Fl.prototype.g = ca;

    function Jl(b) {
        if (!Ak(b)) return !0;
        this.f.setMap(null);
        var c = b.pixel[0] - this.d[0],
            d = b.pixel[1] - this.d[1];
        64 <= c * c + d * d && (this.g(b), this.dispatchEvent(new El("boxend", b.coordinate)));
        return !1
    }
    function Hl(b) {
        if (Ak(b) && Cc(b.a) && this.i(b)) {
            this.d = b.pixel;
            this.f.setMap(b.map);
            var c = this.f,
                d = this.d;
            c.e = this.d;
            c.c = d;
            c.b = Cl(c);
            Dl(c);
            this.dispatchEvent(new El("boxstart", b.coordinate));
            return !0
        }
        return !1
    };

    function Kl() {
        this.c = -1
    };

    function Ll() {
        this.c = -1;
        this.c = 64;
        this.a = Array(4);
        this.e = Array(this.c);
        this.d = this.b = 0;
        this.a[0] = 1732584193;
        this.a[1] = 4023233417;
        this.a[2] = 2562383102;
        this.a[3] = 271733878;
        this.d = this.b = 0
    }
    u(Ll, Kl);

    function Ml(b, c, d) {
        d || (d = 0);
        var e = Array(16);
        if (ia(c)) for (var f = 0; 16 > f; ++f) e[f] = c.charCodeAt(d++) | c.charCodeAt(d++) << 8 | c.charCodeAt(d++) << 16 | c.charCodeAt(d++) << 24;
        else for (f = 0; 16 > f; ++f) e[f] = c[d++] | c[d++] << 8 | c[d++] << 16 | c[d++] << 24;
        c = b.a[0];
        d = b.a[1];
        var f = b.a[2],
            g = b.a[3],
            h = 0,
            h = c + (g ^ d & (f ^ g)) + e[0] + 3614090360 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[1] + 3905402710 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[2] + 606105819 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[3] + 3250441966 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[4] + 4118548399 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[5] + 1200080426 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[6] + 2821735955 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[7] + 4249261313 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[8] + 1770035416 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[9] + 2336552879 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[10] + 4294925233 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[11] + 2304563134 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (g ^ d & (f ^ g)) + e[12] + 1804603682 & 4294967295;
        c = d + (h << 7 & 4294967295 | h >>> 25);
        h = g + (f ^ c & (d ^ f)) + e[13] + 4254626195 & 4294967295;
        g = c + (h << 12 & 4294967295 | h >>> 20);
        h = f + (d ^ g & (c ^ d)) + e[14] + 2792965006 & 4294967295;
        f = g + (h << 17 & 4294967295 | h >>> 15);
        h = d + (c ^ f & (g ^ c)) + e[15] + 1236535329 & 4294967295;
        d = f + (h << 22 & 4294967295 | h >>> 10);
        h = c + (f ^ g & (d ^ f)) + e[1] + 4129170786 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[6] + 3225465664 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[11] + 643717713 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[0] + 3921069994 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[5] + 3593408605 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[10] + 38016083 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[15] + 3634488961 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[4] + 3889429448 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[9] + 568446438 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[14] + 3275163606 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[3] + 4107603335 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[8] + 1163531501 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (f ^ g & (d ^ f)) + e[13] + 2850285829 & 4294967295;
        c = d + (h << 5 & 4294967295 | h >>> 27);
        h = g + (d ^ f & (c ^ d)) + e[2] + 4243563512 & 4294967295;
        g = c + (h << 9 & 4294967295 | h >>> 23);
        h = f + (c ^ d & (g ^ c)) + e[7] + 1735328473 & 4294967295;
        f = g + (h << 14 & 4294967295 | h >>> 18);
        h = d + (g ^ c & (f ^ g)) + e[12] + 2368359562 & 4294967295;
        d = f + (h << 20 & 4294967295 | h >>> 12);
        h = c + (d ^ f ^ g) + e[5] + 4294588738 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[8] + 2272392833 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[11] + 1839030562 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[14] + 4259657740 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[1] + 2763975236 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[4] + 1272893353 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[7] + 4139469664 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[10] + 3200236656 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[13] + 681279174 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[0] + 3936430074 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[3] + 3572445317 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[6] + 76029189 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (d ^ f ^ g) + e[9] + 3654602809 & 4294967295;
        c = d + (h << 4 & 4294967295 | h >>> 28);
        h = g + (c ^ d ^ f) + e[12] + 3873151461 & 4294967295;
        g = c + (h << 11 & 4294967295 | h >>> 21);
        h = f + (g ^ c ^ d) + e[15] + 530742520 & 4294967295;
        f = g + (h << 16 & 4294967295 | h >>> 16);
        h = d + (f ^ g ^ c) + e[2] + 3299628645 & 4294967295;
        d = f + (h << 23 & 4294967295 | h >>> 9);
        h = c + (f ^ (d | ~g)) + e[0] + 4096336452 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[7] + 1126891415 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[14] + 2878612391 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[5] + 4237533241 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[12] + 1700485571 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[3] + 2399980690 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[10] + 4293915773 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[1] + 2240044497 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[8] + 1873313359 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[15] + 4264355552 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[6] + 2734768916 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[13] + 1309151649 & 4294967295;
        d = f + (h << 21 & 4294967295 | h >>> 11);
        h = c + (f ^ (d | ~g)) + e[4] + 4149444226 & 4294967295;
        c = d + (h << 6 & 4294967295 | h >>> 26);
        h = g + (d ^ (c | ~f)) + e[11] + 3174756917 & 4294967295;
        g = c + (h << 10 & 4294967295 | h >>> 22);
        h = f + (c ^ (g | ~d)) + e[2] + 718787259 & 4294967295;
        f = g + (h << 15 & 4294967295 | h >>> 17);
        h = d + (g ^ (f | ~c)) + e[9] + 3951481745 & 4294967295;
        b.a[0] = b.a[0] + c & 4294967295;
        b.a[1] = b.a[1] + (f + (h << 21 & 4294967295 | h >>> 11)) & 4294967295;
        b.a[2] = b.a[2] + f & 4294967295;
        b.a[3] = b.a[3] + g & 4294967295
    }
    Ll.prototype.update = function (b, c) {
        m(c) || (c = b.length);
        for (var d = c - this.c, e = this.e, f = this.b, g = 0; g < c;) {
            if (0 == f) for (; g <= d;) Ml(this, b, g), g += this.c;
            if (ia(b)) for (; g < c;) {
                if (e[f++] = b.charCodeAt(g++), f == this.c) {
                    Ml(this, e);
                    f = 0;
                    break
                }
            } else for (; g < c;) if (e[f++] = b[g++], f == this.c) {
                Ml(this, e);
                f = 0;
                break
            }
        }
        this.b = f;
        this.d += c
    };

    function Nl(b) {
        b = m(b) ? b : {};
        this.a = m(b.color) ? b.color : null;
        this.d = b.lineCap;
        this.b = m(b.lineDash) ? b.lineDash : null;
        this.e = b.lineJoin;
        this.f = b.miterLimit;
        this.c = b.width;
        this.g = void 0
    }
    l = Nl.prototype;
    l.Vj = function () {
        return this.a
    };
    l.rh = function () {
        return this.d
    };
    l.Wj = function () {
        return this.b
    };
    l.sh = function () {
        return this.e
    };
    l.xh = function () {
        return this.f
    };
    l.Xj = function () {
        return this.c
    };
    l.Yj = function (b) {
        this.a = b;
        this.g = void 0
    };
    l.el = function (b) {
        this.d = b;
        this.g = void 0
    };
    l.Zj = function (b) {
        this.b = b;
        this.g = void 0
    };
    l.fl = function (b) {
        this.e = b;
        this.g = void 0
    };
    l.gl = function (b) {
        this.f = b;
        this.g = void 0
    };
    l.ol = function (b) {
        this.c = b;
        this.g = void 0
    };
    l.ub = function () {
        if (!m(this.g)) {
            var b = "s" + (null === this.a ? "-" : wg(this.a)) + "," + (m(this.d) ? this.d.toString() : "-") + "," + (null === this.b ? "-" : this.b.toString()) + "," + (m(this.e) ? this.e : "-") + "," + (m(this.f) ? this.f.toString() : "-") + "," + (m(this.c) ? this.c.toString() : "-"),
                c = new Ll;
            c.update(b);
            var d = Array((56 > c.b ? c.c : 2 * c.c) - c.b);
            d[0] = 128;
            for (b = 1; b < d.length - 8; ++b) d[b] = 0;
            for (var e = 8 * c.d, b = d.length - 8; b < d.length; ++b) d[b] = e & 255, e /= 256;
            c.update(d);
            d = Array(16);
            for (b = e = 0; 4 > b; ++b) for (var f = 0; 32 > f; f += 8) d[e++] = c.a[b] >>> f & 255;
            if (8192 > d.length) c = String.fromCharCode.apply(null, d);
            else for (c = "", b = 0; b < d.length; b += 8192) c += String.fromCharCode.apply(null, fb(d, b, b + 8192));
            this.g = c
        }
        return this.g
    };
    var Ol = [0, 0, 0, 1],
        Pl = [],
        Ql = [0, 0, 0, 1];

    function Rl(b) {
        b = m(b) ? b : {};
        this.a = m(b.color) ? b.color : null;
        this.c = void 0
    }
    Rl.prototype.b = function () {
        return this.a
    };
    Rl.prototype.d = function (b) {
        this.a = b;
        this.c = void 0
    };
    Rl.prototype.ub = function () {
        m(this.c) || (this.c = "f" + (null === this.a ? "-" : wg(this.a)));
        return this.c
    };

    function Sl(b) {
        b = m(b) ? b : {};
        this.f = this.a = this.e = null;
        this.d = m(b.fill) ? b.fill : null;
        this.c = m(b.stroke) ? b.stroke : null;
        this.b = b.radius;
        this.j = [0, 0];
        this.o = this.t = this.g = null;
        var c = b.atlasManager,
            d, e = null,
            f, g = 0;
        null !== this.c && (f = wg(this.c.a), g = this.c.c, m(g) || (g = 1), e = this.c.b, cg || (e = null));
        var h = 2 * (this.b + g) + 1;
        f = {
            strokeStyle: f,
            Nc: g,
            size: h,
            lineDash: e
        };
        m(c) ? (h = Math.round(h), (e = null === this.d) && (d = sa(this.Bf, this, f)), g = this.ub(), f = c.add(g, h, h, sa(this.Cf, this, f), d), this.a = f.image, this.j = [f.offsetX, f.offsetY],
        d = f.image.width, this.f = e ? f.kf : this.a) : (this.a = If("CANVAS"), this.a.height = h, this.a.width = h, d = h = this.a.width, c = this.a.getContext("2d"), this.Cf(f, c, 0, 0), null === this.d ? (c = this.f = If("CANVAS"), c.height = f.size, c.width = f.size, c = c.getContext("2d"), this.Bf(f, c, 0, 0)) : this.f = this.a);
        this.g = [h / 2, h / 2];
        this.t = [h, h];
        this.o = [d, d];
        Rj.call(this, {
            opacity: 1,
            rotateWithView: !1,
            rotation: 0,
            scale: 1,
            snapToPixel: m(b.snapToPixel) ? b.snapToPixel : !0
        })
    }
    u(Sl, Rj);
    l = Sl.prototype;
    l.tb = function () {
        return this.g
    };
    l.Mj = function () {
        return this.d
    };
    l.te = function () {
        return this.f
    };
    l.yb = function () {
        return this.a
    };
    l.ue = function () {
        return 2
    };
    l.cd = function () {
        return this.o
    };
    l.zb = function () {
        return this.j
    };
    l.Nj = function () {
        return this.b
    };
    l.ab = function () {
        return this.t
    };
    l.Oj = function () {
        return this.c
    };
    l.ne = ca;
    l.load = ca;
    l.Ge = ca;
    l.Cf = function (b, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(b.size / 2, b.size / 2, this.b, 0, 2 * Math.PI, !0);
        null !== this.d && (c.fillStyle = wg(this.d.a), c.fill());
        null !== this.c && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.Nc, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    l.Bf = function (b, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        c.arc(b.size / 2, b.size / 2, this.b, 0, 2 * Math.PI, !0);
        c.fillStyle = Ol;
        c.fill();
        null !== this.c && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.Nc, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    l.ub = function () {
        var b = null === this.c ? "-" : this.c.ub(),
            c = null === this.d ? "-" : this.d.ub();
        if (null === this.e || b != this.e[1] || c != this.e[2] || this.b != this.e[3]) this.e = ["c" + b + c + (m(this.b) ? this.b.toString() : "-"), b, c, this.b];
        return this.e[0]
    };

    function Tl(b) {
        b = m(b) ? b : {};
        this.g = null;
        this.d = Ul;
        m(b.geometry) && this.Ff(b.geometry);
        this.e = m(b.fill) ? b.fill : null;
        this.f = m(b.image) ? b.image : null;
        this.b = m(b.stroke) ? b.stroke : null;
        this.c = m(b.text) ? b.text : null;
        this.a = b.zIndex
    }
    l = Tl.prototype;
    l.N = function () {
        return this.g
    };
    l.lh = function () {
        return this.d
    };
    l.$j = function () {
        return this.e
    };
    l.ak = function () {
        return this.f
    };
    l.bk = function () {
        return this.b
    };
    l.ck = function () {
        return this.c
    };
    l.Nh = function () {
        return this.a
    };
    l.Ff = function (b) {
        ka(b) ? this.d = b : ia(b) ? this.d = function (c) {
            return c.get(b)
        } : null === b ? this.d = Ul : m(b) && (this.d = function () {
            return b
        });
        this.g = b
    };
    l.ql = function (b) {
        this.a = b
    };

    function Vl(b) {
        ka(b) || (b = ga(b) ? b : [b], b = bd(b));
        return b
    }
    function Wl() {
        var b = new Rl({
            color: "rgba(255,255,255,0.4)"
        }),
            c = new Nl({
                color: "#3399CC",
                width: 1.25
            }),
            d = [new Tl({
                image: new Sl({
                    fill: b,
                    stroke: c,
                    radius: 5
                }),
                fill: b,
                stroke: c
            })];
        Wl = function () {
            return d
        };
        return d
    }

    function Xl() {
        var b = {}, c = [255, 255, 255, 1],
            d = [0, 153, 255, 1];
        b.Polygon = [new Tl({
            fill: new Rl({
                color: [255, 255, 255, .5]
            })
        })];
        b.MultiPolygon = b.Polygon;
        b.LineString = [new Tl({
            stroke: new Nl({
                color: c,
                width: 5
            })
        }), new Tl({
            stroke: new Nl({
                color: d,
                width: 3
            })
        })];
        b.MultiLineString = b.LineString;
        b.Point = [new Tl({
            image: new Sl({
                radius: 6,
                fill: new Rl({
                    color: d
                }),
                stroke: new Nl({
                    color: c,
                    width: 1.5
                })
            }),
            zIndex: Infinity
        })];
        b.MultiPoint = b.Point;
        b.GeometryCollection = b.Polygon.concat(b.Point);
        return b
    }
    function Ul(b) {
        return b.N()
    };

    function Yl(b) {
        var c = m(b) ? b : {};
        b = m(c.condition) ? c.condition : yk;
        c = m(c.style) ? c.style : new Tl({
            stroke: new Nl({
                color: [0, 0, 255, 1]
            })
        });
        Fl.call(this, {
            condition: b,
            style: c
        })
    }
    u(Yl, Fl);
    Yl.prototype.g = function () {
        var b = this.n,
            c = b.a(),
            d = this.N().D(),
            e = ke(d),
            f = b.e(),
            d = c.n(d, f),
            d = c.constrainResolution(d, 0, void 0);
        rk(b, c, d, e, 200)
    };

    function Zl(b) {
        ok.call(this, {
            handleEvent: $l
        });
        b = m(b) ? b : {};
        this.d = m(b.condition) ? b.condition : id(xk, zk);
        this.e = m(b.pixelDelta) ? b.pixelDelta : 128
    }
    u(Zl, ok);

    function $l(b) {
        var c = !1;
        if ("key" == b.type) {
            var d = b.a.e;
            if (this.d(b) && (40 == d || 37 == d || 39 == d || 38 == d)) {
                var e = b.map,
                    c = e.a(),
                    f = $e(c),
                    g = f.resolution * this.e,
                    h = 0,
                    k = 0;
                40 == d ? k = -g : 37 == d ? h = -g : 39 == d ? h = g : k = g;
                d = [h, k];
                Dd(d, f.rotation);
                f = c.a();
                m(f) && (m(100) && e.Ua(gf({
                    source: f,
                    duration: 100,
                    easing: ef
                })), e = c.i([f[0] + d[0], f[1] + d[1]]), c.Oa(e));
                b.preventDefault();
                c = !0
            }
        }
        return !c
    };

    function am(b) {
        ok.call(this, {
            handleEvent: bm
        });
        b = m(b) ? b : {};
        this.e = m(b.condition) ? b.condition : zk;
        this.d = m(b.delta) ? b.delta : 1;
        this.f = m(b.duration) ? b.duration : 100
    }
    u(am, ok);

    function bm(b) {
        var c = !1;
        if ("key" == b.type) {
            var d = b.a.i;
            if (this.e(b) && (43 == d || 45 == d)) {
                c = b.map;
                d = 43 == d ? this.d : -this.d;
                c.render();
                var e = c.a();
                qk(c, e, d, void 0, this.f);
                b.preventDefault();
                c = !0
            }
        }
        return !c
    };

    function cm(b) {
        ok.call(this, {
            handleEvent: dm
        });
        b = m(b) ? b : {};
        this.d = 0;
        this.j = m(b.duration) ? b.duration : 250;
        this.f = null;
        this.g = this.e = void 0
    }
    u(cm, ok);

    function dm(b) {
        var c = !1;
        if ("mousewheel" == b.type) {
            var c = b.map,
                d = b.a;
            this.f = b.coordinate;
            this.d += d.j;
            m(this.e) || (this.e = ua());
            d = Math.max(80 - (ua() - this.e), 0);
            ba.clearTimeout(this.g);
            this.g = ba.setTimeout(sa(this.i, this, c), d);
            b.preventDefault();
            c = !0
        }
        return !c
    }
    cm.prototype.i = function (b) {
        var c = Yb(this.d, -1, 1),
            d = b.a();
        b.render();
        qk(b, d, -c, this.f, this.j);
        this.d = 0;
        this.f = null;
        this.g = this.e = void 0
    };

    function em(b) {
        Bk.call(this, {
            handleDownEvent: fm,
            handleDragEvent: gm,
            handleUpEvent: hm
        });
        b = m(b) ? b : {};
        this.f = null;
        this.g = void 0;
        this.d = !1;
        this.i = 0;
        this.j = m(b.threshold) ? b.threshold : .3
    }
    u(em, Bk);

    function gm(b) {
        var c = 0,
            d = this.e[0],
            e = this.e[1],
            d = Math.atan2(e.clientY - d.clientY, e.clientX - d.clientX);
        m(this.g) && (c = d - this.g, this.i += c, !this.d && Math.abs(this.i) > this.j && (this.d = !0));
        this.g = d;
        b = b.map;
        d = Og(b.b);
        e = Dk(this.e);
        e[0] -= d.x;
        e[1] -= d.y;
        this.f = b.Ga(e);
        this.d && (d = b.a(), e = $e(d), b.render(), pk(b, d, e.rotation + c, this.f))
    }
    function hm(b) {
        if (2 > this.e.length) {
            b = b.map;
            var c = b.a();
            bf(c, -1);
            if (this.d) {
                var d = $e(c).rotation,
                    e = this.f,
                    d = c.constrainRotation(d, 0);
                pk(b, c, d, e, 250)
            }
            return !1
        }
        return !0
    }

    function fm(b) {
        return 2 <= this.e.length ? (b = b.map, this.f = null, this.g = void 0, this.d = !1, this.i = 0, this.p || bf(b.a(), 1), b.render(), !0) : !1
    }
    em.prototype.q = cd;

    function im(b) {
        Bk.call(this, {
            handleDownEvent: jm,
            handleDragEvent: km,
            handleUpEvent: lm
        });
        b = m(b) ? b : {};
        this.f = null;
        this.i = m(b.duration) ? b.duration : 400;
        this.d = void 0;
        this.g = 1
    }
    u(im, Bk);

    function km(b) {
        var c = 1,
            d = this.e[0],
            e = this.e[1],
            f = d.clientX - e.clientX,
            d = d.clientY - e.clientY,
            f = Math.sqrt(f * f + d * d);
        m(this.d) && (c = this.d / f);
        this.d = f;
        1 != c && (this.g = c);
        b = b.map;
        var f = b.a(),
            d = $e(f),
            e = Og(b.b),
            g = Dk(this.e);
        g[0] -= e.x;
        g[1] -= e.y;
        this.f = b.Ga(g);
        b.render();
        rk(b, f, d.resolution * c, this.f)
    }

    function lm(b) {
        if (2 > this.e.length) {
            b = b.map;
            var c = b.a();
            bf(c, -1);
            var d = $e(c).resolution,
                e = this.f,
                f = this.i,
                d = c.constrainResolution(d, 0, this.g - 1);
            rk(b, c, d, e, f);
            return !1
        }
        return !0
    }
    function jm(b) {
        return 2 <= this.e.length ? (b = b.map, this.f = null, this.d = void 0, this.g = 1, this.p || bf(b.a(), 1), b.render(), !0) : !1
    }
    im.prototype.q = cd;

    function mm(b) {
        b = m(b) ? b : {};
        var c = new B,
            d = new lk(-.005, .05, 100);
        (m(b.altShiftDragRotate) ? b.altShiftDragRotate : 1) && c.push(new Ik);
        (m(b.doubleClickZoom) ? b.doubleClickZoom : 1) && c.push(new sk({
            delta: b.zoomDelta,
            duration: b.zoomDuration
        }));
        (m(b.dragPan) ? b.dragPan : 1) && c.push(new Ek({
            kinetic: d
        }));
        (m(b.pinchRotate) ? b.pinchRotate : 1) && c.push(new em);
        (m(b.pinchZoom) ? b.pinchZoom : 1) && c.push(new im({
            duration: b.zoomDuration
        }));
        if (m(b.keyboard) ? b.keyboard : 1) c.push(new Zl), c.push(new am({
            delta: b.zoomDelta,
            duration: b.zoomDuration
        }));
        (m(b.mouseWheelZoom) ? b.mouseWheelZoom : 1) && c.push(new cm({
            duration: b.zoomDuration
        }));
        (m(b.shiftDragZoom) ? b.shiftDragZoom : 1) && c.push(new Yl);
        return c
    };

    function I(b) {
        var c = m(b) ? b : {};
        b = Cb(c);
        delete b.layers;
        c = c.layers;
        D.call(this, b);
        this.a = null;
        z(this, xd("layers"), this.ei, !1, this);
        null != c ? ga(c) && (c = new B(cb(c))) : c = new B;
        this.r(c)
    }
    u(I, D);
    l = I.prototype;
    l.ff = function () {
        this.b() && this.l()
    };
    l.ei = function () {
        null !== this.a && (Ta(rb(this.a), Yc), this.a = null);
        var b = this.Yb();
        if (null != b) {
            this.a = {
                add: z(b, "add", this.di, !1, this),
                remove: z(b, "remove", this.fi, !1, this)
            };
            var b = b.a,
                c, d, e;
            c = 0;
            for (d = b.length; c < d; c++) e = b[c], this.a[ma(e).toString()] = z(e, ["propertychange", "change"], this.ff, !1, this)
        }
        this.l()
    };
    l.di = function (b) {
        b = b.element;
        this.a[ma(b).toString()] = z(b, ["propertychange", "change"], this.ff, !1, this);
        this.l()
    };
    l.fi = function (b) {
        b = ma(b.element).toString();
        Yc(this.a[b]);
        delete this.a[b];
        this.l()
    };
    l.Yb = function () {
        return this.get("layers")
    };
    I.prototype.getLayers = I.prototype.Yb;
    I.prototype.r = function (b) {
        this.set("layers", b)
    };
    I.prototype.setLayers = I.prototype.r;
    I.prototype.Da = function (b) {
        var c = m(b) ? b : [],
            d = c.length;
        this.Yb().forEach(function (b) {
            b.Da(c)
        });
        b = sj(this);
        var e, f;
        for (e = c.length; d < e; d++) f = c[d], f.brightness = Yb(f.brightness + b.brightness, -1, 1), f.contrast *= b.contrast, f.hue += b.hue, f.opacity *= b.opacity, f.saturation *= b.saturation, f.visible = f.visible && b.visible, f.maxResolution = Math.min(f.maxResolution, b.maxResolution), f.minResolution = Math.max(f.minResolution, b.minResolution), m(b.extent) && (f.extent = m(f.extent) ? pe(f.extent, b.extent) : b.extent);
        return c
    };
    I.prototype.Ta = function () {
        return "ready"
    };

    function nm(b) {
        Be.call(this, {
            code: b,
            units: "m",
            extent: om,
            global: !0,
            worldExtent: pm
        })
    }
    u(nm, Be);
    nm.prototype.je = function (b, c) {
        var d = c[1] / 6378137;
        return b / ((Math.exp(d) + Math.exp(-d)) / 2)
    };
    var qm = 6378137 * Math.PI,
        om = [-qm, -qm, qm, qm],
        pm = [-180, -85, 180, 85],
        Me = Va("EPSG:3857 EPSG:102100 EPSG:102113 EPSG:900913 urn:ogc:def:crs:EPSG:6.18:3:3857 urn:ogc:def:crs:EPSG::3857 http://www.opengis.net/gml/srs/epsg.xml#3857".split(" "), function (b) {
            return new nm(b)
        });

    function Ne(b, c, d) {
        var e = b.length;
        d = 1 < d ? d : 2;
        m(c) || (2 < d ? c = b.slice() : c = Array(e));
        for (var f = 0; f < e; f += d) c[f] = 6378137 * Math.PI * b[f] / 180, c[f + 1] = 6378137 * Math.log(Math.tan(Math.PI * (b[f + 1] + 90) / 360));
        return c
    }
    function Oe(b, c, d) {
        var e = b.length;
        d = 1 < d ? d : 2;
        m(c) || (2 < d ? c = b.slice() : c = Array(e));
        for (var f = 0; f < e; f += d) c[f] = 180 * b[f] / (6378137 * Math.PI), c[f + 1] = 360 * Math.atan(Math.exp(b[f + 1] / 6378137)) / Math.PI - 90;
        return c
    };

    function rm(b, c) {
        Be.call(this, {
            code: b,
            units: "degrees",
            extent: sm,
            axisOrientation: c,
            global: !0,
            worldExtent: sm
        })
    }
    u(rm, Be);
    rm.prototype.je = function (b) {
        return b
    };
    var sm = [-180, -90, 180, 90],
        Pe = [new rm("CRS:84"), new rm("EPSG:4326", "neu"), new rm("urn:ogc:def:crs:EPSG::4326", "neu"), new rm("urn:ogc:def:crs:EPSG:6.6:4326", "neu"), new rm("urn:ogc:def:crs:OGC:1.3:CRS84"), new rm("urn:ogc:def:crs:OGC:2:84"), new rm("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"), new rm("urn:x-ogc:def:crs:EPSG:4326", "neu")];

    function tm() {
        He(Me);
        He(Pe);
        Le()
    };

    function J(b) {
        E.call(this, m(b) ? b : {})
    }
    u(J, E);

    function K(b) {
        E.call(this, m(b) ? b : {})
    }
    u(K, E);
    K.prototype.r = function () {
        return this.get("preload")
    };
    K.prototype.getPreload = K.prototype.r;
    K.prototype.oa = function (b) {
        this.set("preload", b)
    };
    K.prototype.setPreload = K.prototype.oa;
    K.prototype.ea = function () {
        return this.get("useInterimTilesOnError")
    };
    K.prototype.getUseInterimTilesOnError = K.prototype.ea;
    K.prototype.qa = function (b) {
        this.set("useInterimTilesOnError", b)
    };
    K.prototype.setUseInterimTilesOnError = K.prototype.qa;

    function L(b) {
        b = m(b) ? b : {};
        var c = Cb(b);
        delete c.style;
        E.call(this, c);
        this.Ab = m(b.renderBuffer) ? b.renderBuffer : 100;
        this.eb = null;
        this.r = void 0;
        this.oa(b.style)
    }
    u(L, E);
    L.prototype.Uc = function () {
        return this.eb
    };
    L.prototype.Vc = function () {
        return this.r
    };
    L.prototype.oa = function (b) {
        this.eb = m(b) ? b : Wl;
        this.r = null === b ? void 0 : Vl(this.eb);
        this.l()
    };

    function um(b, c, d, e, f) {
        this.p = {};
        this.b = b;
        this.r = c;
        this.e = d;
        this.F = e;
        this.eb = f;
        this.f = this.a = this.c = this.Ra = this.ga = this.la = null;
        this.ea = this.Sa = this.j = this.V = this.Q = this.J = 0;
        this.Da = !1;
        this.g = this.oa = 0;
        this.Ea = !1;
        this.ba = 0;
        this.d = "";
        this.i = this.t = this.Ta = this.qa = 0;
        this.ca = this.n = this.o = null;
        this.q = [];
        this.ec = Kd()
    }

    function vm(b, c, d) {
        if (null !== b.f) {
            c = Nk(c, 0, d, 2, b.F, b.q);
            d = b.b;
            var e = b.ec,
                f = d.globalAlpha;
            1 != b.j && (d.globalAlpha = f * b.j);
            var g = b.oa;
            b.Da && (g += b.eb);
            var h, k;
            h = 0;
            for (k = c.length; h < k; h += 2) {
                var n = c[h] - b.J,
                    p = c[h + 1] - b.Q;
                b.Ea && (n = n + .5 | 0, p = p + .5 | 0);
                if (0 !== g || 1 != b.g) {
                    var q = n + b.J,
                        r = p + b.Q;
                    Vj(e, q, r, b.g, b.g, g, -q, -r);
                    d.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
                }
                d.drawImage(b.f, b.Sa, b.ea, b.ba, b.V, n, p, b.ba, b.V)
            }
            0 === g && 1 == b.g || d.setTransform(1, 0, 0, 1, 0, 0);
            1 != b.j && (d.globalAlpha = f)
        }
    }

    function wm(b, c, d, e) {
        var f = 0;
        if (null !== b.ca && "" !== b.d) {
            null === b.o || xm(b, b.o);
            null === b.n || ym(b, b.n);
            var g = b.ca,
                h = b.b,
                k = b.Ra;
            null === k ? (h.font = g.font, h.textAlign = g.textAlign, h.textBaseline = g.textBaseline, b.Ra = {
                font: g.font,
                textAlign: g.textAlign,
                textBaseline: g.textBaseline
            }) : (k.font != g.font && (k.font = h.font = g.font), k.textAlign != g.textAlign && (k.textAlign = h.textAlign = g.textAlign), k.textBaseline != g.textBaseline && (k.textBaseline = h.textBaseline = g.textBaseline));
            c = Nk(c, f, d, e, b.F, b.q);
            for (g = b.b; f < d; f += e) {
                h = c[f] + b.qa;
                k = c[f + 1] + b.Ta;
                if (0 !== b.t || 1 != b.i) {
                    var n = Vj(b.ec, h, k, b.i, b.i, b.t, -h, -k);
                    g.setTransform(n[0], n[1], n[4], n[5], n[12], n[13])
                }
                null === b.n || g.strokeText(b.d, h, k);
                null === b.o || g.fillText(b.d, h, k)
            }
            0 === b.t && 1 == b.i || g.setTransform(1, 0, 0, 1, 0, 0)
        }
    }
    function zm(b, c, d, e, f, g) {
        var h = b.b;
        b = Nk(c, d, e, f, b.F, b.q);
        h.moveTo(b[0], b[1]);
        for (c = 2; c < b.length; c += 2) h.lineTo(b[c], b[c + 1]);
        g && h.lineTo(b[0], b[1]);
        return e
    }
    function Am(b, c, d, e, f) {
        var g = b.b,
            h, k;
        h = 0;
        for (k = e.length; h < k; ++h) d = zm(b, c, d, e[h], f, !0), g.closePath();
        return d
    }
    l = um.prototype;
    l.ic = function (b, c) {
        var d = b.toString(),
            e = this.p[d];
        m(e) ? e.push(c) : this.p[d] = [c]
    };
    l.jc = function (b) {
        if (qe(this.e, b.D())) {
            if (null !== this.c || null !== this.a) {
                null === this.c || xm(this, this.c);
                null === this.a || ym(this, this.a);
                var c;
                c = b.k;
                c = null === c ? null : Nk(c, 0, c.length, b.s, this.F, this.q);
                var d = c[2] - c[0],
                    e = c[3] - c[1],
                    d = Math.sqrt(d * d + e * e),
                    e = this.b;
                e.beginPath();
                e.arc(c[0], c[1], d, 0, 2 * Math.PI);
                null === this.c || e.fill();
                null === this.a || e.stroke()
            }
            "" !== this.d && wm(this, b.qe(), 2, 2)
        }
    };
    l.ee = function (b, c) {
        var d = (0, c.d)(b);
        if (null != d && qe(this.e, d.D())) {
            var e = c.a;
            m(e) || (e = 0);
            this.ic(e, function (b) {
                b.wa(c.e, c.b);
                b.cb(c.f);
                b.xa(c.c);
                Bm[d.H()].call(b, d, null)
            })
        }
    };
    l.Zc = function (b, c) {
        var d = b.d,
            e, f;
        e = 0;
        for (f = d.length; e < f; ++e) {
            var g = d[e];
            Bm[g.H()].call(this, g, c)
        }
    };
    l.rb = function (b) {
        var c = b.k;
        b = b.s;
        null === this.f || vm(this, c, c.length);
        "" !== this.d && wm(this, c, c.length, b)
    };
    l.qb = function (b) {
        var c = b.k;
        b = b.s;
        null === this.f || vm(this, c, c.length);
        "" !== this.d && wm(this, c, c.length, b)
    };
    l.Cb = function (b) {
        if (qe(this.e, b.D())) {
            if (null !== this.a) {
                ym(this, this.a);
                var c = this.b,
                    d = b.k;
                c.beginPath();
                zm(this, d, 0, d.length, b.s, !1);
                c.stroke()
            }
            "" !== this.d && (b = Cm(b), wm(this, b, 2, 2))
        }
    };
    l.kc = function (b) {
        var c = b.D();
        if (qe(this.e, c)) {
            if (null !== this.a) {
                ym(this, this.a);
                var c = this.b,
                    d = b.k,
                    e = 0,
                    f = b.b,
                    g = b.s;
                c.beginPath();
                var h, k;
                h = 0;
                for (k = f.length; h < k; ++h) e = zm(this, d, e, f[h], g, !1);
                c.stroke()
            }
            "" !== this.d && (b = Dm(b), wm(this, b, b.length, 2))
        }
    };
    l.Sb = function (b) {
        if (qe(this.e, b.D())) {
            if (null !== this.a || null !== this.c) {
                null === this.c || xm(this, this.c);
                null === this.a || ym(this, this.a);
                var c = this.b;
                c.beginPath();
                Am(this, xl(b), 0, b.b, b.s);
                null === this.c || c.fill();
                null === this.a || c.stroke()
            }
            "" !== this.d && (b = yl(b), wm(this, b, 2, 2))
        }
    };
    l.lc = function (b) {
        if (qe(this.e, b.D())) {
            if (null !== this.a || null !== this.c) {
                null === this.c || xm(this, this.c);
                null === this.a || ym(this, this.a);
                var c = this.b,
                    d = Em(b),
                    e = 0,
                    f = b.b,
                    g = b.s,
                    h, k;
                h = 0;
                for (k = f.length; h < k; ++h) {
                    var n = f[h];
                    c.beginPath();
                    e = Am(this, d, e, n, g);
                    null === this.c || c.fill();
                    null === this.a || c.stroke()
                }
            }
            "" !== this.d && (b = Fm(b), wm(this, b, b.length, 2))
        }
    };

    function Gm(b) {
        var c = Va(sb(b.p), Number);
        gb(c);
        var d, e, f, g, h;
        d = 0;
        for (e = c.length; d < e; ++d) for (f = b.p[c[d].toString()], g = 0, h = f.length; g < h; ++g) f[g](b)
    }

    function xm(b, c) {
        var d = b.b,
            e = b.la;
        null === e ? (d.fillStyle = c.fillStyle, b.la = {
            fillStyle: c.fillStyle
        }) : e.fillStyle != c.fillStyle && (e.fillStyle = d.fillStyle = c.fillStyle)
    }

    function ym(b, c) {
        var d = b.b,
            e = b.ga;
        null === e ? (d.lineCap = c.lineCap, cg && d.setLineDash(c.lineDash), d.lineJoin = c.lineJoin, d.lineWidth = c.lineWidth, d.miterLimit = c.miterLimit, d.strokeStyle = c.strokeStyle, b.ga = {
            lineCap: c.lineCap,
            lineDash: c.lineDash,
            lineJoin: c.lineJoin,
            lineWidth: c.lineWidth,
            miterLimit: c.miterLimit,
            strokeStyle: c.strokeStyle
        }) : (e.lineCap != c.lineCap && (e.lineCap = d.lineCap = c.lineCap), cg && !ib(e.lineDash, c.lineDash) && d.setLineDash(e.lineDash = c.lineDash), e.lineJoin != c.lineJoin && (e.lineJoin = d.lineJoin = c.lineJoin), e.lineWidth != c.lineWidth && (e.lineWidth = d.lineWidth = c.lineWidth), e.miterLimit != c.miterLimit && (e.miterLimit = d.miterLimit = c.miterLimit), e.strokeStyle != c.strokeStyle && (e.strokeStyle = d.strokeStyle = c.strokeStyle))
    }
    l.wa = function (b, c) {
        if (null === b) this.c = null;
        else {
            var d = b.a;
            this.c = {
                fillStyle: wg(null === d ? Ol : d)
            }
        }
        if (null === c) this.a = null;
        else {
            var d = c.a,
                e = c.d,
                f = c.b,
                g = c.e,
                h = c.c,
                k = c.f;
            this.a = {
                lineCap: m(e) ? e : "round",
                lineDash: null != f ? f : Pl,
                lineJoin: m(g) ? g : "round",
                lineWidth: this.r * (m(h) ? h : 1),
                miterLimit: m(k) ? k : 10,
                strokeStyle: wg(null === d ? Ql : d)
            }
        }
    };
    l.cb = function (b) {
        if (null === b) this.f = null;
        else {
            var c = b.tb(),
                d = b.yb(1),
                e = b.zb(),
                f = b.ab();
            this.J = c[0];
            this.Q = c[1];
            this.V = f[1];
            this.f = d;
            this.j = b.p;
            this.Sa = e[0];
            this.ea = e[1];
            this.Da = b.q;
            this.oa = b.i;
            this.g = b.n;
            this.Ea = b.r;
            this.ba = f[0]
        }
    };
    l.xa = function (b) {
        if (null === b) this.d = "";
        else {
            var c = b.a;
            null === c ? this.o = null : (c = c.a, this.o = {
                fillStyle: wg(null === c ? Ol : c)
            });
            var d = b.f;
            if (null === d) this.n = null;
            else {
                var c = d.a,
                    e = d.d,
                    f = d.b,
                    g = d.e,
                    h = d.c,
                    d = d.f;
                this.n = {
                    lineCap: m(e) ? e : "round",
                    lineDash: null != f ? f : Pl,
                    lineJoin: m(g) ? g : "round",
                    lineWidth: m(h) ? h : 1,
                    miterLimit: m(d) ? d : 10,
                    strokeStyle: wg(null === c ? Ql : c)
                }
            }
            var c = b.d,
                e = b.i,
                f = b.n,
                g = b.e,
                h = b.c,
                d = b.b,
                k = b.g;
            b = b.o;
            this.ca = {
                font: m(c) ? c : "10px sans-serif",
                textAlign: m(k) ? k : "center",
                textBaseline: m(b) ? b : "middle"
            };
            this.d = m(d) ? d : "";
            this.qa = m(e) ? this.r * e : 0;
            this.Ta = m(f) ? this.r * f : 0;
            this.t = m(g) ? g : 0;
            this.i = this.r * (m(h) ? h : 1)
        }
    };
    var Bm = {
        Point: um.prototype.rb,
        LineString: um.prototype.Cb,
        Polygon: um.prototype.Sb,
        MultiPoint: um.prototype.qb,
        MultiLineString: um.prototype.kc,
        MultiPolygon: um.prototype.lc,
        GeometryCollection: um.prototype.Zc,
        Circle: um.prototype.jc
    };
    var Hm = ["Polygon", "LineString", "Image", "Text"];

    function Im(b, c, d) {
        this.ga = b;
        this.V = c;
        this.d = 0;
        this.resolution = d;
        this.J = this.F = null;
        this.c = [];
        this.coordinates = [];
        this.ca = Kd();
        this.a = [];
        this.ba = [];
        this.la = Kd()
    }

    function Jm(b, c, d, e, f, g) {
        var h = b.coordinates.length,
            k = b.he(),
            n = [c[d], c[d + 1]],
            p = [NaN, NaN],
            q = !0,
            r, s, v;
        for (r = d + f; r < e; r += f) p[0] = c[r], p[1] = c[r + 1], v = be(k, p), v !== s ? (q && (b.coordinates[h++] = n[0], b.coordinates[h++] = n[1]), b.coordinates[h++] = p[0], b.coordinates[h++] = p[1], q = !1) : 1 === v ? (b.coordinates[h++] = p[0], b.coordinates[h++] = p[1], q = !1) : q = !0, n[0] = p[0], n[1] = p[1], s = v;
        r === d + f && (b.coordinates[h++] = n[0], b.coordinates[h++] = n[1]);
        g && (b.coordinates[h++] = c[d], b.coordinates[h++] = c[d + 1]);
        return h
    }

    function Km(b, c) {
        b.F = [0, c, 0];
        b.c.push(b.F);
        b.J = [0, c, 0];
        b.a.push(b.J)
    }

    function Lm(b, c, d, e, f, g, h, k) {
        var n;
        Wj(e, b.ca) ? n = b.ba : (n = Nk(b.coordinates, 0, b.coordinates.length, 2, e, b.ba), Nd(b.ca, e));
        e = 0;
        var p = h.length,
            q = 0,
            r;
        for (b = b.la; e < p;) {
            var s = h[e],
                v, y, C, F;
            switch (s[0]) {
                case 0:
                    q = s[1];
                    q = ma(q).toString();
                    m(x(g, q)) ? e = s[2] : ++e;
                    break;
                case 1:
                    c.beginPath();
                    ++e;
                    break;
                case 2:
                    q = s[1];
                    r = n[q];
                    var G = n[q + 1],
                        w = n[q + 2] - r,
                        q = n[q + 3] - G;
                    c.arc(r, G, Math.sqrt(w * w + q * q), 0, 2 * Math.PI, !0);
                    ++e;
                    break;
                case 3:
                    c.closePath();
                    ++e;
                    break;
                case 4:
                    q = s[1];
                    r = s[2];
                    v = s[3];
                    C = s[4] * d;
                    var U = s[5] * d,
                        N = s[6];
                    y = s[7];
                    var Y = s[8],
                        T = s[9],
                        G = s[11],
                        w = s[12],
                        qa = s[13],
                        vb = s[14];
                    for (s[10] && (G += f); q < r; q += 2) {
                        s = n[q] - C;
                        F = n[q + 1] - U;
                        qa && (s = s + .5 | 0, F = F + .5 | 0);
                        if (1 != w || 0 !== G) {
                            var Ka = s + C,
                                ac = F + U;
                            Vj(b, Ka, ac, w, w, G, -Ka, -ac);
                            c.setTransform(b[0], b[1], b[4], b[5], b[12], b[13])
                        }
                        Ka = c.globalAlpha;
                        1 != y && (c.globalAlpha = Ka * y);
                        c.drawImage(v, Y, T, vb, N, s, F, vb * d, N * d);
                        1 != y && (c.globalAlpha = Ka);
                        1 == w && 0 === G || c.setTransform(1, 0, 0, 1, 0, 0)
                    }++e;
                    break;
                case 5:
                    q = s[1];
                    r = s[2];
                    C = s[3];
                    U = s[4] * d;
                    N = s[5] * d;
                    G = s[6];
                    w = s[7] * d;
                    v = s[8];
                    for (y = s[9]; q < r; q += 2) {
                        s = n[q] + U;
                        F = n[q + 1] + N;
                        if (1 != w || 0 !== G) Vj(b,
                        s, F, w, w, G, -s, -F), c.setTransform(b[0], b[1], b[4], b[5], b[12], b[13]);
                        y && c.strokeText(C, s, F);
                        v && c.fillText(C, s, F);
                        1 == w && 0 === G || c.setTransform(1, 0, 0, 1, 0, 0)
                    }++e;
                    break;
                case 6:
                    if (m(k) && (q = s[1], q = k(q))) return q;
                    ++e;
                    break;
                case 7:
                    c.fill();
                    ++e;
                    break;
                case 8:
                    q = s[1];
                    r = s[2];
                    c.moveTo(n[q], n[q + 1]);
                    for (q += 2; q < r; q += 2) c.lineTo(n[q], n[q + 1]);
                    ++e;
                    break;
                case 9:
                    c.fillStyle = s[1];
                    ++e;
                    break;
                case 10:
                    q = m(s[7]) ? s[7] : !0;
                    r = s[2];
                    c.strokeStyle = s[1];
                    c.lineWidth = q ? r * d : r;
                    c.lineCap = s[3];
                    c.lineJoin = s[4];
                    c.miterLimit = s[5];
                    cg && c.setLineDash(s[6]);
                    ++e;
                    break;
                case 11:
                    c.font = s[1];
                    c.textAlign = s[2];
                    c.textBaseline = s[3];
                    ++e;
                    break;
                case 12:
                    c.stroke();
                    ++e;
                    break;
                default:
                    ++e
            }
        }
    }
    Im.prototype.Hc = function (b, c, d, e, f) {
        Lm(this, b, c, d, e, f, this.c, void 0)
    };

    function Mm(b) {
        var c = b.a;
        c.reverse();
        var d, e = c.length,
            f, g, h = -1;
        for (d = 0; d < e; ++d) if (f = c[d], g = f[0], 6 == g) h = d;
        else if (0 == g) {
            f[2] = d;
            f = b.a;
            for (g = d; h < g;) {
                var k = f[h];
                f[h] = f[g];
                f[g] = k;
                ++h;
                --g
            }
            h = -1
        }
    }
    function Nm(b, c) {
        b.F[2] = b.c.length;
        b.F = null;
        b.J[2] = b.a.length;
        b.J = null;
        var d = [6, c];
        b.c.push(d);
        b.a.push(d)
    }
    Im.prototype.Kb = ca;
    Im.prototype.he = function () {
        return this.V
    };

    function Om(b, c, d) {
        Im.call(this, b, c, d);
        this.g = this.Q = null;
        this.t = this.r = this.q = this.p = this.j = this.n = this.i = this.o = this.f = this.e = this.b = void 0
    }
    u(Om, Im);
    Om.prototype.rb = function (b, c) {
        if (null !== this.g) {
            Km(this, c);
            var d = b.k,
                e = this.coordinates.length,
                d = Jm(this, d, 0, d.length, b.s, !1);
            this.c.push([4, e, d, this.g, this.b, this.e, this.f, this.o, this.i, this.n, this.j, this.p, this.q, this.r, this.t]);
            this.a.push([4, e, d, this.Q, this.b, this.e, this.f, this.o, this.i, this.n, this.j, this.p, this.q, this.r, this.t]);
            Nm(this, c)
        }
    };
    Om.prototype.qb = function (b, c) {
        if (null !== this.g) {
            Km(this, c);
            var d = b.k,
                e = this.coordinates.length,
                d = Jm(this, d, 0, d.length, b.s, !1);
            this.c.push([4, e, d, this.g, this.b, this.e, this.f, this.o, this.i, this.n, this.j, this.p, this.q, this.r, this.t]);
            this.a.push([4, e, d, this.Q, this.b, this.e, this.f, this.o, this.i, this.n, this.j, this.p, this.q, this.r, this.t]);
            Nm(this, c)
        }
    };
    Om.prototype.Kb = function () {
        Mm(this);
        this.e = this.b = void 0;
        this.g = this.Q = null;
        this.t = this.r = this.p = this.j = this.n = this.i = this.o = this.q = this.f = void 0
    };
    Om.prototype.cb = function (b) {
        var c = b.tb(),
            d = b.ab(),
            e = b.te(1),
            f = b.yb(1),
            g = b.zb();
        this.b = c[0];
        this.e = c[1];
        this.Q = e;
        this.g = f;
        this.f = d[1];
        this.o = b.p;
        this.i = g[0];
        this.n = g[1];
        this.j = b.q;
        this.p = b.i;
        this.q = b.n;
        this.r = b.r;
        this.t = d[0]
    };

    function Pm(b, c, d) {
        Im.call(this, b, c, d);
        this.b = {
            Cc: void 0,
            xc: void 0,
            yc: null,
            zc: void 0,
            Ac: void 0,
            Bc: void 0,
            me: 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }
    u(Pm, Im);

    function Qm(b, c, d, e, f) {
        var g = b.coordinates.length;
        c = Jm(b, c, d, e, f, !1);
        g = [8, g, c];
        b.c.push(g);
        b.a.push(g);
        return e
    }
    l = Pm.prototype;
    l.he = function () {
        var b = this.V;
        this.d && (b = Yd(b, this.resolution * (this.d + 1) / 2));
        return b
    };

    function Rm(b) {
        var c = b.b,
            d = c.strokeStyle,
            e = c.lineCap,
            f = c.lineDash,
            g = c.lineJoin,
            h = c.lineWidth,
            k = c.miterLimit;
        c.Cc == d && c.xc == e && ib(c.yc, f) && c.zc == g && c.Ac == h && c.Bc == k || (c.me != b.coordinates.length && (b.c.push([12]), c.me = b.coordinates.length), b.c.push([10, d, h, e, g, k, f], [1]), c.Cc = d, c.xc = e, c.yc = f, c.zc = g, c.Ac = h, c.Bc = k)
    }
    l.Cb = function (b, c) {
        var d = this.b,
            e = d.lineWidth;
        m(d.strokeStyle) && m(e) && (Rm(this), Km(this, c), this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]), d = b.k, Qm(this, d, 0, d.length, b.s), this.a.push([12]), Nm(this, c))
    };
    l.kc = function (b, c) {
        var d = this.b,
            e = d.lineWidth;
        if (m(d.strokeStyle) && m(e)) {
            Rm(this);
            Km(this, c);
            this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash], [1]);
            var d = b.b,
                e = b.k,
                f = b.s,
                g = 0,
                h, k;
            h = 0;
            for (k = d.length; h < k; ++h) g = Qm(this, e, g, d[h], f);
            this.a.push([12]);
            Nm(this, c)
        }
    };
    l.Kb = function () {
        this.b.me != this.coordinates.length && this.c.push([12]);
        Mm(this);
        this.b = null
    };
    l.wa = function (b, c) {
        var d = c.a;
        this.b.strokeStyle = wg(null === d ? Ql : d);
        d = c.d;
        this.b.lineCap = m(d) ? d : "round";
        d = c.b;
        this.b.lineDash = null === d ? Pl : d;
        d = c.e;
        this.b.lineJoin = m(d) ? d : "round";
        d = c.c;
        this.b.lineWidth = m(d) ? d : 1;
        d = c.f;
        this.b.miterLimit = m(d) ? d : 10;
        this.d = Math.max(this.d, this.b.lineWidth)
    };

    function Sm(b, c, d) {
        Im.call(this, b, c, d);
        this.b = {
            Ve: void 0,
            Cc: void 0,
            xc: void 0,
            yc: null,
            zc: void 0,
            Ac: void 0,
            Bc: void 0,
            fillStyle: void 0,
            strokeStyle: void 0,
            lineCap: void 0,
            lineDash: null,
            lineJoin: void 0,
            lineWidth: void 0,
            miterLimit: void 0
        }
    }
    u(Sm, Im);

    function Tm(b, c, d, e, f) {
        var g = b.b,
            h = [1];
        b.c.push(h);
        b.a.push(h);
        var k, h = 0;
        for (k = e.length; h < k; ++h) {
            var n = e[h],
                p = b.coordinates.length;
            d = Jm(b, c, d, n, f, !0);
            d = [8, p, d];
            p = [3];
            b.c.push(d, p);
            b.a.push(d, p);
            d = n
        }
        c = [7];
        b.a.push(c);
        m(g.fillStyle) && b.c.push(c);
        m(g.strokeStyle) && (g = [12], b.c.push(g), b.a.push(g));
        return d
    }
    l = Sm.prototype;
    l.jc = function (b, c) {
        var d = this.b,
            e = d.strokeStyle;
        if (m(d.fillStyle) || m(e)) {
            Um(this);
            Km(this, c);
            this.a.push([9, wg(Ol)]);
            m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var f = b.k,
                e = this.coordinates.length;
            Jm(this, f, 0, f.length, b.s, !1);
            f = [1];
            e = [2, e];
            this.c.push(f, e);
            this.a.push(f, e);
            e = [7];
            this.a.push(e);
            m(d.fillStyle) && this.c.push(e);
            m(d.strokeStyle) && (d = [12], this.c.push(d), this.a.push(d));
            Nm(this, c)
        }
    };
    l.Sb = function (b, c) {
        var d = this.b,
            e = d.strokeStyle;
        if (m(d.fillStyle) || m(e)) Um(this), Km(this, c), this.a.push([9, wg(Ol)]), m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]), d = b.b, e = xl(b), Tm(this, e, 0, d, b.s), Nm(this, c)
    };
    l.lc = function (b, c) {
        var d = this.b,
            e = d.strokeStyle;
        if (m(d.fillStyle) || m(e)) {
            Um(this);
            Km(this, c);
            this.a.push([9, wg(Ol)]);
            m(d.strokeStyle) && this.a.push([10, d.strokeStyle, d.lineWidth, d.lineCap, d.lineJoin, d.miterLimit, d.lineDash]);
            var d = b.b,
                e = Em(b),
                f = b.s,
                g = 0,
                h, k;
            h = 0;
            for (k = d.length; h < k; ++h) g = Tm(this, e, g, d[h], f);
            Nm(this, c)
        }
    };
    l.Kb = function () {
        Mm(this);
        this.b = null;
        var b = this.ga;
        if (0 !== b) {
            var c = this.coordinates,
                d, e;
            d = 0;
            for (e = c.length; d < e; ++d) c[d] = b * Math.round(c[d] / b)
        }
    };
    l.he = function () {
        var b = this.V;
        this.d && (b = Yd(b, this.resolution * (this.d + 1) / 2));
        return b
    };
    l.wa = function (b, c) {
        var d = this.b;
        if (null === b) d.fillStyle = void 0;
        else {
            var e = b.a;
            d.fillStyle = wg(null === e ? Ol : e)
        }
        null === c ? (d.strokeStyle = void 0, d.lineCap = void 0, d.lineDash = null, d.lineJoin = void 0, d.lineWidth = void 0, d.miterLimit = void 0) : (e = c.a, d.strokeStyle = wg(null === e ? Ql : e), e = c.d, d.lineCap = m(e) ? e : "round", e = c.b, d.lineDash = null === e ? Pl : e.slice(), e = c.e, d.lineJoin = m(e) ? e : "round", e = c.c, d.lineWidth = m(e) ? e : 1, e = c.f, d.miterLimit = m(e) ? e : 10, this.d = Math.max(this.d, d.lineWidth))
    };

    function Um(b) {
        var c = b.b,
            d = c.fillStyle,
            e = c.strokeStyle,
            f = c.lineCap,
            g = c.lineDash,
            h = c.lineJoin,
            k = c.lineWidth,
            n = c.miterLimit;
        m(d) && c.Ve != d && (b.c.push([9, d]), c.Ve = c.fillStyle);
        !m(e) || c.Cc == e && c.xc == f && c.yc == g && c.zc == h && c.Ac == k && c.Bc == n || (b.c.push([10, e, k, f, h, n, g]), c.Cc = e, c.xc = f, c.yc = g, c.zc = h, c.Ac = k, c.Bc = n)
    }
    function Vm(b, c, d) {
        Im.call(this, b, c, d);
        this.r = this.q = this.p = null;
        this.g = "";
        this.j = this.n = this.i = this.o = 0;
        this.f = this.e = this.b = null
    }
    u(Vm, Im);
    Vm.prototype.sb = function (b, c, d, e, f, g) {
        if ("" !== this.g && null !== this.f && (null !== this.b || null !== this.e)) {
            if (null !== this.b) {
                f = this.b;
                var h = this.p;
                if (null === h || h.fillStyle != f.fillStyle) {
                    var k = [9, f.fillStyle];
                    this.c.push(k);
                    this.a.push(k);
                    null === h ? this.p = {
                        fillStyle: f.fillStyle
                    } : h.fillStyle = f.fillStyle
                }
            }
            null !== this.e && (f = this.e, h = this.q, null === h || h.lineCap != f.lineCap || h.lineDash != f.lineDash || h.lineJoin != f.lineJoin || h.lineWidth != f.lineWidth || h.miterLimit != f.miterLimit || h.strokeStyle != f.strokeStyle) && (k = [10,
            f.strokeStyle, f.lineWidth, f.lineCap, f.lineJoin, f.miterLimit, f.lineDash, !1], this.c.push(k), this.a.push(k), null === h ? this.q = {
                lineCap: f.lineCap,
                lineDash: f.lineDash,
                lineJoin: f.lineJoin,
                lineWidth: f.lineWidth,
                miterLimit: f.miterLimit,
                strokeStyle: f.strokeStyle
            } : (h.lineCap = f.lineCap, h.lineDash = f.lineDash, h.lineJoin = f.lineJoin, h.lineWidth = f.lineWidth, h.miterLimit = f.miterLimit, h.strokeStyle = f.strokeStyle));
            f = this.f;
            h = this.r;
            if (null === h || h.font != f.font || h.textAlign != f.textAlign || h.textBaseline != f.textBaseline) k = [11, f.font, f.textAlign, f.textBaseline], this.c.push(k), this.a.push(k), null === h ? this.r = {
                font: f.font,
                textAlign: f.textAlign,
                textBaseline: f.textBaseline
            } : (h.font = f.font, h.textAlign = f.textAlign, h.textBaseline = f.textBaseline);
            Km(this, g);
            f = this.coordinates.length;
            b = Jm(this, b, c, d, e, !1);
            b = [5, f, b, this.g, this.o, this.i, this.n, this.j, null !== this.b, null !== this.e];
            this.c.push(b);
            this.a.push(b);
            Nm(this, g)
        }
    };
    Vm.prototype.xa = function (b) {
        if (null === b) this.g = "";
        else {
            var c = b.a;
            null === c ? this.b = null : (c = c.a, c = wg(null === c ? Ol : c), null === this.b ? this.b = {
                fillStyle: c
            } : this.b.fillStyle = c);
            var d = b.f;
            if (null === d) this.e = null;
            else {
                var c = d.a,
                    e = d.d,
                    f = d.b,
                    g = d.e,
                    h = d.c,
                    d = d.f,
                    e = m(e) ? e : "round",
                    f = null != f ? f.slice() : Pl,
                    g = m(g) ? g : "round",
                    h = m(h) ? h : 1,
                    d = m(d) ? d : 10,
                    c = wg(null === c ? Ql : c);
                if (null === this.e) this.e = {
                    lineCap: e,
                    lineDash: f,
                    lineJoin: g,
                    lineWidth: h,
                    miterLimit: d,
                    strokeStyle: c
                };
                else {
                    var k = this.e;
                    k.lineCap = e;
                    k.lineDash = f;
                    k.lineJoin = g;
                    k.lineWidth = h;
                    k.miterLimit = d;
                    k.strokeStyle = c
                }
            }
            var n = b.d,
                c = b.i,
                e = b.n,
                f = b.e,
                h = b.c,
                d = b.b,
                g = b.g,
                k = b.o;
            b = m(n) ? n : "10px sans-serif";
            g = m(g) ? g : "center";
            k = m(k) ? k : "middle";
            null === this.f ? this.f = {
                font: b,
                textAlign: g,
                textBaseline: k
            } : (n = this.f, n.font = b, n.textAlign = g, n.textBaseline = k);
            this.g = m(d) ? d : "";
            this.o = m(c) ? c : 0;
            this.i = m(e) ? e : 0;
            this.n = m(f) ? f : 0;
            this.j = m(h) ? h : 1
        }
    };

    function Wm(b, c, d) {
        this.g = b;
        this.b = c;
        this.f = d;
        this.c = {};
        this.d = Tf(1, 1);
        this.e = Kd()
    }
    function Xm(b) {
        for (var c in b.c) {
            var d = b.c[c],
                e;
            for (e in d) d[e].Kb()
        }
    }

    function ck(b, c, d, e, f, g) {
        var h = b.e;
        Vj(h, .5, .5, 1 / c, -1 / c, -d, -e[0], -e[1]);
        var k = b.d;
        k.clearRect(0, 0, 1, 1);
        return Ym(b, k, h, d, f, function (b) {
            if (0 < k.getImageData(0, 0, 1, 1).data[3]) {
                if (b = g(b)) return b;
                k.clearRect(0, 0, 1, 1)
            }
        })
    }
    Wm.prototype.a = function (b, c) {
        var d = m(b) ? b.toString() : "0",
            e = this.c[d];
        m(e) || (e = {}, this.c[d] = e);
        d = e[c];
        m(d) || (d = new Zm[c](this.g, this.b, this.f), e[c] = d);
        return d
    };
    Wm.prototype.ia = function () {
        return xb(this.c)
    };

    function $m(b, c, d, e, f, g) {
        var h = Va(sb(b.c), Number);
        gb(h);
        var k = b.b,
            n = k[0],
            p = k[1],
            q = k[2],
            k = k[3],
            n = [n, p, n, k, q, k, q, p];
        Nk(n, 0, 8, 2, e, n);
        c.save();
        c.beginPath();
        c.moveTo(n[0], n[1]);
        c.lineTo(n[2], n[3]);
        c.lineTo(n[4], n[5]);
        c.lineTo(n[6], n[7]);
        c.closePath();
        c.clip();
        for (var r, s, n = 0, p = h.length; n < p; ++n) for (r = b.c[h[n].toString()], q = 0, k = Hm.length; q < k; ++q) s = r[Hm[q]], m(s) && s.Hc(c, d, e, f, g);
        c.restore()
    }

    function Ym(b, c, d, e, f, g) {
        var h = Va(sb(b.c), Number);
        gb(h, function (b, c) {
            return c - b
        });
        var k, n, p, q, r;
        k = 0;
        for (n = h.length; k < n; ++k) for (q = b.c[h[k].toString()], p = Hm.length - 1; 0 <= p; --p) if (r = q[Hm[p]], m(r) && (r = Lm(r, c, 1, d, e, f, r.a, g))) return r
    }
    var Zm = {
        Image: Om,
        LineString: Pm,
        Polygon: Sm,
        Text: Vm
    };

    function an(b, c) {
        Hj.call(this, b, c);
        this.F = Kd()
    }
    u(an, Hj);
    an.prototype.j = function (b, c, d) {
        bn(this, "precompose", d, b, void 0);
        var e = this.p();
        if (null !== e) {
            var f = c.extent,
                g = m(f);
            if (g) {
                var h = me(f),
                    k = je(f),
                    n = ie(f),
                    f = he(f);
                Xj(b.coordinateToPixelMatrix, h, h);
                Xj(b.coordinateToPixelMatrix, k, k);
                Xj(b.coordinateToPixelMatrix, n, n);
                Xj(b.coordinateToPixelMatrix, f, f);
                d.save();
                d.beginPath();
                d.moveTo(h[0], h[1]);
                d.lineTo(k[0], k[1]);
                d.lineTo(n[0], n[1]);
                d.lineTo(f[0], f[1]);
                d.clip()
            }
            h = this.n();
            k = d.globalAlpha;
            d.globalAlpha = c.opacity;
            0 === b.viewState.rotation ? (c = h[13], n = e.width * h[0],
            f = e.height * h[5], d.drawImage(e, 0, 0, +e.width, +e.height, Math.round(h[12]), Math.round(c), Math.round(n), Math.round(f))) : (d.setTransform(h[0], h[1], h[4], h[5], h[12], h[13]), d.drawImage(e, 0, 0), d.setTransform(1, 0, 0, 1, 0, 0));
            d.globalAlpha = k;
            g && d.restore()
        }
        bn(this, "postcompose", d, b, void 0)
    };

    function bn(b, c, d, e, f) {
        var g = b.a;
        ld(g, c) && (b = m(f) ? f : cn(b, e), b = new um(d, e.pixelRatio, e.extent, b, e.viewState.rotation), g.dispatchEvent(new Al(c, g, b, null, e, d, null)), Gm(b))
    }

    function cn(b, c) {
        var d = c.viewState,
            e = c.pixelRatio;
        return Vj(b.F, e * c.size[0] / 2, e * c.size[1] / 2, e / d.resolution, -e / d.resolution, -d.rotation, -d.center[0], -d.center[1])
    }
    var dn = function () {
        var b = null,
            c = null;
        return function (d) {
            if (null === b) {
                b = Tf(1, 1);
                c = b.createImageData(1, 1);
                var e = c.data;
                e[0] = 42;
                e[1] = 84;
                e[2] = 126;
                e[3] = 255
            }
            var e = b.canvas,
                f = d[0] <= e.width && d[1] <= e.height;
            f || (e.width = d[0], e.height = d[1], e = d[0] - 1, d = d[1] - 1, b.putImageData(c, e, d), d = b.getImageData(e, d, 1, 1), f = ib(c.data, d.data));
            return f
        }
    }();

    function en(b, c) {
        an.call(this, b, c);
        this.c = null;
        this.d = Kd()
    }
    u(en, an);
    en.prototype.Zb = function (b, c, d, e) {
        var f = this.a;
        return f.a().yd(c.viewState.resolution, c.viewState.rotation, b, c.skippedFeatureUids, function (b) {
            return d.call(e, b, f)
        })
    };
    en.prototype.p = function () {
        return null === this.c ? null : this.c.c()
    };
    en.prototype.n = function () {
        return this.d
    };
    en.prototype.i = function (b, c) {
        var d = b.pixelRatio,
            e = b.viewState,
            f = e.center,
            g = e.resolution,
            h = e.rotation,
            k, n = this.a.a(),
            p = b.viewHints;
        k = b.extent;
        m(c.extent) && (k = pe(k, c.extent));
        p[0] || p[1] || se(k) || (e = e.projection, p = n.g, null === p || (e = p), k = n.rc(k, g, d, e), null !== k && (e = k.state, 0 == e ? (Wc(k, "change", this.o, !1, this), k.load()) : 2 == e && (this.c = k)));
        if (null !== this.c) {
            k = this.c;
            var e = k.D(),
                p = k.resolution,
                q = k.e,
                g = d * p / (g * q);
            Vj(this.d, d * b.size[0] / 2, d * b.size[1] / 2, g, g, h, q * (e[0] - f[0]) / p, q * (f[1] - e[3]) / p);
            Kj(b.attributions, k.f);
            Lj(b, n)
        }
        return !0
    };

    function fn(b, c) {
        an.call(this, b, c);
        this.c = this.e = null;
        this.g = !1;
        this.q = null;
        this.r = Kd();
        this.t = NaN;
        this.f = this.d = null
    }
    u(fn, an);
    fn.prototype.p = function () {
        return this.e
    };
    fn.prototype.n = function () {
        return this.r
    };
    fn.prototype.i = function (b, c) {
        var d = b.pixelRatio,
            e = b.viewState,
            f = e.projection,
            g = this.a,
            h = g.a(),
            k = Gj(h, f),
            n = h.bd(),
            p = ec(k.a, e.resolution, 0),
            q = h.Gc(p, b.pixelRatio, f),
            r = k.ka(p),
            s = r / (q / k.sa(p)),
            v = e.center,
            y;
        r == e.resolution ? (v = Oj(v, r, b.size), y = ne(v, r, e.rotation, b.size)) : y = b.extent;
        m(c.extent) && (y = pe(y, c.extent));
        if (se(y)) return !1;
        var C = Aj(k, y, r),
            F = q * (C.d - C.a + 1),
            G = q * (C.c - C.b + 1),
            w, U;
        null === this.e ? (U = Tf(F, G), this.e = U.canvas, this.c = [F, G], this.q = U, this.g = !dn(this.c)) : (w = this.e, U = this.q, this.c[0] < F || this.c[1] < G || this.g && (this.c[0] > F || this.c[1] > G) ? (w.width = F, w.height = G, this.c = [F, G], this.g = !dn(this.c), this.d = null) : (F = this.c[0], G = this.c[1], p == this.t && rf(this.d, C) || (this.d = null)));
        var N, Y;
        null === this.d ? (F /= q, G /= q, N = C.a - Math.floor((F - (C.d - C.a + 1)) / 2), Y = C.b - Math.floor((G - (C.c - C.b + 1)) / 2), this.t = p, this.d = new of(N, N + F - 1, Y, Y + G - 1), this.f = Array(F * G), G = this.d) : (G = this.d, F = G.d - G.a + 1);
        w = {};
        w[p] = {};
        var T = [],
            qa = sa(h.fe, h, w, Nj(function (b) {
                return null !== b && 2 == b.state
            }, h, d, f)),
            vb = g.ea();
        m(vb) || (vb = !0);
        var Ka = Vd(),
            ac = new of(0,
            0, 0, 0),
            Sb, La, Pa;
        for (Y = C.a; Y <= C.d; ++Y) for (Pa = C.b; Pa <= C.c; ++Pa) La = h.Fb(p, Y, Pa, d, f), N = La.state, 2 == N || 4 == N || 3 == N && !vb ? w[p][nf(La.a)] = La : (Sb = k.$c(La.a, qa, null, ac, Ka), Sb || (T.push(La), Sb = k.kd(La.a, ac, Ka), null === Sb || qa(p + 1, Sb)));
        qa = 0;
        for (Sb = T.length; qa < Sb; ++qa) La = T[qa], Y = q * (La.a[1] - G.a), Pa = q * (G.c - La.a[2]), U.clearRect(Y, Pa, q, q);
        T = Va(sb(w), Number);
        gb(T);
        var Ud = h.t,
            qd = me(yj(k, [p, G.a, G.c], Ka)),
            fd, ve, Wi, Eh, Bf, Gl, qa = 0;
        for (Sb = T.length; qa < Sb; ++qa) if (fd = T[qa], q = h.Gc(fd, d, f), Eh = w[fd], fd == p) for (Wi in Eh) La = Eh[Wi], ve = (La.a[2] - G.b) * F + (La.a[1] - G.a), this.f[ve] != La && (Y = q * (La.a[1] - G.a), Pa = q * (G.c - La.a[2]), N = La.state, 4 != N && (3 != N || vb) && Ud || U.clearRect(Y, Pa, q, q), 2 == N && U.drawImage(La.Na(), n, n, q, q, Y, Pa, q, q), this.f[ve] = La);
        else for (Wi in fd = k.ka(fd) / r, Eh) for (La = Eh[Wi], ve = yj(k, La.a, Ka), Y = (ve[0] - qd[0]) / s, Pa = (qd[1] - ve[3]) / s, Gl = fd * q, Bf = fd * q, N = La.state, 4 != N && Ud || U.clearRect(Y, Pa, Gl, Bf), 2 == N && U.drawImage(La.Na(), n, n, q, q, Y, Pa, Gl, Bf), La = zj(k, ve, p, ac), N = Math.max(La.a, G.a), Pa = Math.min(La.d, G.d), Y = Math.max(La.b, G.b), La = Math.min(La.c,
        G.c); N <= Pa; ++N) for (Bf = Y; Bf <= La; ++Bf) ve = (Bf - G.b) * F + (N - G.a), this.f[ve] = void 0;
        Mj(b.usedTiles, h, p, C);
        Pj(b, h, k, d, f, y, p, g.r());
        Jj(b, h);
        Lj(b, h);
        Vj(this.r, d * b.size[0] / 2, d * b.size[1] / 2, d * s / e.resolution, d * s / e.resolution, e.rotation, (qd[0] - v[0]) / s, (v[1] - qd[1]) / s);
        return !0
    };

    function gn(b, c, d) {
        Ok.call(this);
        this.ag(b, m(c) ? c : 0, d)
    }
    u(gn, Ok);
    l = gn.prototype;
    l.clone = function () {
        var b = new gn(null);
        Qk(b, this.a, this.k.slice());
        b.l();
        return b
    };
    l.Va = function (b, c, d, e) {
        var f = this.k;
        b -= f[0];
        var g = c - f[1];
        c = b * b + g * g;
        if (c < e) {
            if (0 === c) for (e = 0; e < this.s; ++e) d[e] = f[e];
            else for (e = this.vf() / Math.sqrt(c), d[0] = f[0] + e * b, d[1] = f[1] + e * g, e = 2; e < this.s; ++e) d[e] = f[e];
            d.length = this.s;
            return c
        }
        return e
    };
    l.Jb = function (b, c) {
        var d = this.k,
            e = b - d[0],
            d = c - d[1];
        return e * e + d * d <= hn(this)
    };
    l.qe = function () {
        return this.k.slice(0, this.s)
    };
    l.D = function (b) {
        if (this.g != this.c) {
            var c = this.k,
                d = c[this.s] - c[0];
            this.extent = Xd(c[0] - d, c[1] - d, c[0] + d, c[1] + d, this.extent);
            this.g = this.c
        }
        return te(this.extent, b)
    };
    l.vf = function () {
        return Math.sqrt(hn(this))
    };

    function hn(b) {
        var c = b.k[b.s] - b.k[0];
        b = b.k[b.s + 1] - b.k[1];
        return c * c + b * b
    }
    l.H = function () {
        return "Circle"
    };
    l.kj = function (b) {
        var c = this.s,
            d = b.slice();
        d[c] = d[0] + (this.k[c] - this.k[0]);
        var e;
        for (e = 1; e < c; ++e) d[c + e] = b[e];
        Qk(this, this.a, d);
        this.l()
    };
    l.ag = function (b, c, d) {
        if (null === b) Qk(this, "XY", null);
        else {
            Rk(this, d, b, 0);
            null === this.k && (this.k = []);
            d = this.k;
            b = al(d, b);
            d[b++] = d[0] + c;
            var e;
            c = 1;
            for (e = this.s; c < e; ++c) d[b++] = d[c];
            d.length = b
        }
        this.l()
    };
    l.jl = function (b) {
        this.k[this.s] = this.k[0] + b;
        this.l()
    };

    function jn(b) {
        Mk.call(this);
        this.d = m(b) ? b : null;
        kn(this)
    }
    u(jn, Mk);

    function ln(b) {
        var c = [],
            d, e;
        d = 0;
        for (e = b.length; d < e; ++d) c.push(b[d].clone());
        return c
    }
    function mn(b) {
        var c, d;
        if (null !== b.d) for (c = 0, d = b.d.length; c < d; ++c) Xc(b.d[c], "change", b.l, !1, b)
    }
    function kn(b) {
        var c, d;
        if (null !== b.d) for (c = 0, d = b.d.length; c < d; ++c) z(b.d[c], "change", b.l, !1, b)
    }
    l = jn.prototype;
    l.clone = function () {
        var b = new jn(null);
        b.bg(this.d);
        return b
    };
    l.Va = function (b, c, d, e) {
        if (e < Zd(this.D(), b, c)) return e;
        var f = this.d,
            g, h;
        g = 0;
        for (h = f.length; g < h; ++g) e = f[g].Va(b, c, d, e);
        return e
    };
    l.Jb = function (b, c) {
        var d = this.d,
            e, f;
        e = 0;
        for (f = d.length; e < f; ++e) if (d[e].Jb(b, c)) return !0;
        return !1
    };
    l.D = function (b) {
        if (this.g != this.c) {
            var c = Xd(Infinity, Infinity, -Infinity, -Infinity, this.extent),
                d = this.d,
                e, f;
            e = 0;
            for (f = d.length; e < f; ++e) ee(c, d[e].D());
            this.extent = c;
            this.g = this.c
        }
        return te(this.extent, b)
    };
    l.af = function () {
        return ln(this.d)
    };
    l.ke = function (b) {
        this.j != this.c && (yb(this.o), this.i = 0, this.j = this.c);
        if (0 > b || 0 !== this.i && b < this.i) return this;
        var c = b.toString();
        if (this.o.hasOwnProperty(c)) return this.o[c];
        var d = [],
            e = this.d,
            f = !1,
            g, h;
        g = 0;
        for (h = e.length; g < h; ++g) {
            var k = e[g],
                n = k.ke(b);
            d.push(n);
            n !== k && (f = !0)
        }
        if (f) return b = new jn(null), mn(b), b.d = d, kn(b), b.l(), this.o[c] = b;
        this.i = b;
        return this
    };
    l.H = function () {
        return "GeometryCollection"
    };
    l.ha = function (b) {
        var c = this.d,
            d, e;
        d = 0;
        for (e = c.length; d < e; ++d) if (c[d].ha(b)) return !0;
        return !1
    };
    l.ia = function () {
        return 0 == this.d.length
    };
    l.bg = function (b) {
        b = ln(b);
        mn(this);
        this.d = b;
        kn(this);
        this.l()
    };
    l.ma = function (b) {
        var c = this.d,
            d, e;
        d = 0;
        for (e = c.length; d < e; ++d) c[d].ma(b);
        this.l()
    };
    l.Aa = function (b, c) {
        var d = this.d,
            e, f;
        e = 0;
        for (f = d.length; e < f; ++e) d[e].Aa(b, c);
        this.l()
    };
    l.M = function () {
        mn(this);
        jn.S.M.call(this)
    };

    function nn(b, c, d, e, f) {
        var g = NaN,
            h = NaN,
            k = (d - c) / e;
        if (0 !== k) if (1 == k) g = b[c], h = b[c + 1];
        else if (2 == k) g = .5 * b[c] + .5 * b[c + e], h = .5 * b[c + 1] + .5 * b[c + e + 1];
        else {
            var h = b[c],
                k = b[c + 1],
                n = 0,
                g = [0],
                p;
            for (p = c + e; p < d; p += e) {
                var q = b[p],
                    r = b[p + 1],
                    n = n + Math.sqrt((q - h) * (q - h) + (r - k) * (r - k));
                g.push(n);
                h = q;
                k = r
            }
            d = .5 * n;
            for (var s, h = hb, k = 0, n = g.length; k < n;) p = k + n >> 1, q = h(d, g[p]), 0 < q ? k = p + 1 : (n = p, s = !q);
            s = s ? k : ~k;
            0 > s ? (d = (d - g[-s - 2]) / (g[-s - 1] - g[-s - 2]), c += (-s - 2) * e, g = $b(b[c], b[c + e], d), h = $b(b[c + 1], b[c + e + 1], d)) : (g = b[c + s * e], h = b[c + s * e + 1])
        }
        return null != f ? (f[0] = g, f[1] = h, f) : [g, h]
    }
    function on(b, c, d, e, f, g) {
        if (d == c) return null;
        if (f < b[c + e - 1]) return g ? (d = b.slice(c, c + e), d[e - 1] = f, d) : null;
        if (b[d - 1] < f) return g ? (d = b.slice(d - e, d), d[e - 1] = f, d) : null;
        if (f == b[c + e - 1]) return b.slice(c, c + e);
        c /= e;
        for (d /= e; c < d;) g = c + d >> 1, f < b[(g + 1) * e - 1] ? d = g : c = g + 1;
        d = b[c * e - 1];
        if (f == d) return b.slice((c - 1) * e, (c - 1) * e + e);
        g = (f - d) / (b[(c + 1) * e - 1] - d);
        d = [];
        var h;
        for (h = 0; h < e - 1; ++h) d.push($b(b[(c - 1) * e + h], b[c * e + h], g));
        d.push(f);
        return d
    }

    function pn(b, c, d, e, f, g) {
        var h = 0;
        if (g) return on(b, h, c[c.length - 1], d, e, f);
        if (e < b[d - 1]) return f ? (b = b.slice(0, d), b[d - 1] = e, b) : null;
        if (b[b.length - 1] < e) return f ? (b = b.slice(b.length - d), b[d - 1] = e, b) : null;
        f = 0;
        for (g = c.length; f < g; ++f) {
            var k = c[f];
            if (h != k) {
                if (e < b[h + d - 1]) break;
                if (e <= b[k - 1]) return on(b, h, k, d, e, !1);
                h = k
            }
        }
        return null
    };

    function M(b, c) {
        Ok.call(this);
        this.b = null;
        this.p = this.q = this.n = -1;
        this.U(b, c)
    }
    u(M, Ok);
    l = M.prototype;
    l.Sg = function (b) {
        null === this.k ? this.k = b.slice() : db(this.k, b);
        this.l()
    };
    l.clone = function () {
        var b = new M(null);
        qn(b, this.a, this.k.slice());
        return b
    };
    l.Va = function (b, c, d, e) {
        if (e < Zd(this.D(), b, c)) return e;
        this.p != this.c && (this.q = Math.sqrt(Xk(this.k, 0, this.k.length, this.s, 0)), this.p = this.c);
        return Zk(this.k, 0, this.k.length, this.s, this.q, !1, b, c, d, e)
    };
    l.lj = function (b, c) {
        return "XYM" != this.a && "XYZM" != this.a ? null : on(this.k, 0, this.k.length, this.s, b, m(c) ? c : !1)
    };
    l.K = function () {
        return dl(this.k, 0, this.k.length, this.s)
    };
    l.mj = function () {
        var b = this.k,
            c = this.s,
            d = b[0],
            e = b[1],
            f = 0,
            g;
        for (g = 0 + c; g < this.k.length; g += c) var h = b[g],
            k = b[g + 1],
            f = f + Math.sqrt((h - d) * (h - d) + (k - e) * (k - e)),
            d = h,
            e = k;
        return f
    };

    function Cm(b) {
        b.n != b.c && (b.b = nn(b.k, 0, b.k.length, b.s, b.b), b.n = b.c);
        return b.b
    }
    l.mc = function (b) {
        var c = [];
        c.length = fl(this.k, 0, this.k.length, this.s, b, c, 0);
        b = new M(null);
        qn(b, "XY", c);
        return b
    };
    l.H = function () {
        return "LineString"
    };
    l.ha = function (b) {
        return rl(this.k, 0, this.k.length, this.s, b)
    };
    l.U = function (b, c) {
        null === b ? qn(this, "XY", null) : (Rk(this, c, b, 1), null === this.k && (this.k = []), this.k.length = bl(this.k, 0, b, this.s), this.l())
    };

    function qn(b, c, d) {
        Qk(b, c, d);
        b.l()
    };

    function rn(b, c) {
        Ok.call(this);
        this.b = [];
        this.n = this.p = -1;
        this.U(b, c)
    }
    u(rn, Ok);
    l = rn.prototype;
    l.Tg = function (b) {
        null === this.k ? this.k = b.k.slice() : db(this.k, b.k.slice());
        this.b.push(this.k.length);
        this.l()
    };
    l.clone = function () {
        var b = new rn(null);
        sn(b, this.a, this.k.slice(), this.b.slice());
        return b
    };
    l.Va = function (b, c, d, e) {
        if (e < Zd(this.D(), b, c)) return e;
        this.n != this.c && (this.p = Math.sqrt(Yk(this.k, 0, this.b, this.s, 0)), this.n = this.c);
        return $k(this.k, 0, this.b, this.s, this.p, !1, b, c, d, e)
    };
    l.oj = function (b, c, d) {
        return "XYM" != this.a && "XYZM" != this.a || 0 === this.k.length ? null : pn(this.k, this.b, this.s, b, m(c) ? c : !1, m(d) ? d : !1)
    };
    l.K = function () {
        return el(this.k, 0, this.b, this.s)
    };
    l.th = function (b) {
        if (0 > b || this.b.length <= b) return null;
        var c = new M(null);
        qn(c, this.a, this.k.slice(0 === b ? 0 : this.b[b - 1], this.b[b]));
        return c
    };
    l.Ec = function () {
        var b = this.k,
            c = this.b,
            d = this.a,
            e = [],
            f = 0,
            g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g],
                n = new M(null);
            qn(n, d, b.slice(f, k));
            e.push(n);
            f = k
        }
        return e
    };

    function Dm(b) {
        var c = [],
            d = b.k,
            e = 0,
            f = b.b;
        b = b.s;
        var g, h;
        g = 0;
        for (h = f.length; g < h; ++g) {
            var k = f[g],
                e = nn(d, e, k, b);
            db(c, e);
            e = k
        }
        return c
    }
    l.mc = function (b) {
        var c = [],
            d = [],
            e = this.k,
            f = this.b,
            g = this.s,
            h = 0,
            k = 0,
            n, p;
        n = 0;
        for (p = f.length; n < p; ++n) {
            var q = f[n],
                k = fl(e, h, q, g, b, c, k);
            d.push(k);
            h = q
        }
        c.length = k;
        b = new rn(null);
        sn(b, "XY", c, d);
        return b
    };
    l.H = function () {
        return "MultiLineString"
    };
    l.ha = function (b) {
        a: {
            var c = this.k,
                d = this.b,
                e = this.s,
                f = 0,
                g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                if (rl(c, f, d[g], e, b)) {
                    b = !0;
                    break a
                }
                f = d[g]
            }
            b = !1
        }
        return b
    };
    l.U = function (b, c) {
        if (null === b) sn(this, "XY", null, this.b);
        else {
            Rk(this, c, b, 2);
            null === this.k && (this.k = []);
            var d = cl(this.k, 0, b, this.s, this.b);
            this.k.length = 0 === d.length ? 0 : d[d.length - 1];
            this.l()
        }
    };

    function sn(b, c, d, e) {
        Qk(b, c, d);
        b.b = e;
        b.l()
    }
    function tn(b, c) {
        var d = "XY",
            e = [],
            f = [],
            g, h;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var k = c[g];
            0 === g && (d = k.a);
            db(e, k.k);
            f.push(e.length)
        }
        sn(b, d, e, f)
    };

    function un(b, c) {
        Ok.call(this);
        this.U(b, c)
    }
    u(un, Ok);
    l = un.prototype;
    l.Vg = function (b) {
        null === this.k ? this.k = b.k.slice() : db(this.k, b.k);
        this.l()
    };
    l.clone = function () {
        var b = new un(null);
        Qk(b, this.a, this.k.slice());
        b.l();
        return b
    };
    l.Va = function (b, c, d, e) {
        if (e < Zd(this.D(), b, c)) return e;
        var f = this.k,
            g = this.s,
            h, k, n;
        h = 0;
        for (k = f.length; h < k; h += g) if (n = Vk(b, c, f[h], f[h + 1]), n < e) {
            e = n;
            for (n = 0; n < g; ++n) d[n] = f[h + n];
            d.length = g
        }
        return e
    };
    l.K = function () {
        return dl(this.k, 0, this.k.length, this.s)
    };
    l.Ch = function (b) {
        var c = null === this.k ? 0 : this.k.length / this.s;
        if (0 > b || c <= b) return null;
        c = new jl(null);
        kl(c, this.a, this.k.slice(b * this.s, (b + 1) * this.s));
        return c
    };
    l.xd = function () {
        var b = this.k,
            c = this.a,
            d = this.s,
            e = [],
            f, g;
        f = 0;
        for (g = b.length; f < g; f += d) {
            var h = new jl(null);
            kl(h, c, b.slice(f, f + d));
            e.push(h)
        }
        return e
    };
    l.H = function () {
        return "MultiPoint"
    };
    l.ha = function (b) {
        var c = this.k,
            d = this.s,
            e, f, g, h;
        e = 0;
        for (f = c.length; e < f; e += d) if (g = c[e], h = c[e + 1], ae(b, g, h)) return !0;
        return !1
    };
    l.U = function (b, c) {
        null === b ? Qk(this, "XY", null) : (Rk(this, c, b, 1), null === this.k && (this.k = []), this.k.length = bl(this.k, 0, b, this.s));
        this.l()
    };

    function vn(b, c) {
        Ok.call(this);
        this.b = [];
        this.p = -1;
        this.q = null;
        this.F = this.r = this.t = -1;
        this.n = null;
        this.U(b, c)
    }
    u(vn, Ok);
    l = vn.prototype;
    l.Wg = function (b) {
        if (null === this.k) this.k = b.k.slice(), b = b.b.slice(), this.b.push();
        else {
            var c = this.k.length;
            db(this.k, b.k);
            b = b.b.slice();
            var d, e;
            d = 0;
            for (e = b.length; d < e; ++d) b[d] += c
        }
        this.b.push(b);
        this.l()
    };
    l.clone = function () {
        var b = new vn(null);
        wn(b, this.a, this.k.slice(), this.b.slice());
        return b
    };
    l.Va = function (b, c, d, e) {
        if (e < Zd(this.D(), b, c)) return e;
        if (this.r != this.c) {
            var f = this.b,
                g = 0,
                h = 0,
                k, n;
            k = 0;
            for (n = f.length; k < n; ++k) var p = f[k],
                h = Yk(this.k, g, p, this.s, h),
                g = p[p.length - 1];
            this.t = Math.sqrt(h);
            this.r = this.c
        }
        f = Em(this);
        g = this.b;
        h = this.s;
        k = this.t;
        n = 0;
        var p = m(void 0) ? void 0 : [NaN, NaN],
            q, r;
        q = 0;
        for (r = g.length; q < r; ++q) {
            var s = g[q];
            e = $k(f, n, s, h, k, !0, b, c, d, e, p);
            n = s[s.length - 1]
        }
        return e
    };
    l.Jb = function (b, c) {
        var d;
        a: {
            d = Em(this);
            var e = this.b,
                f = 0;
            if (0 !== e.length) {
                var g, h;
                g = 0;
                for (h = e.length; g < h; ++g) {
                    var k = e[g];
                    if (nl(d, f, k, this.s, b, c)) {
                        d = !0;
                        break a
                    }
                    f = k[k.length - 1]
                }
            }
            d = !1
        }
        return d
    };
    l.pj = function () {
        var b = Em(this),
            c = this.b,
            d = 0,
            e = 0,
            f, g;
        f = 0;
        for (g = c.length; f < g; ++f) var h = c[f],
            e = e + Tk(b, d, h, this.s),
            d = h[h.length - 1];
        return e
    };
    l.K = function () {
        var b = this.k,
            c = this.b,
            d = this.s,
            e = 0,
            f = m(void 0) ? void 0 : [],
            g = 0,
            h, k;
        h = 0;
        for (k = c.length; h < k; ++h) {
            var n = c[h];
            f[g++] = el(b, e, n, d, f[g]);
            e = n[n.length - 1]
        }
        f.length = g;
        return f
    };

    function Fm(b) {
        if (b.p != b.c) {
            var c = b.k,
                d = b.b,
                e = b.s,
                f = 0,
                g = [],
                h, k, n = Vd();
            h = 0;
            for (k = d.length; h < k; ++h) {
                var p = d[h],
                    n = fe(Xd(Infinity, Infinity, -Infinity, -Infinity, void 0), c, f, p[0], e);
                g.push((n[0] + n[2]) / 2, (n[1] + n[3]) / 2);
                f = p[p.length - 1]
            }
            c = Em(b);
            d = b.b;
            e = b.s;
            f = 0;
            h = [];
            k = 0;
            for (n = d.length; k < n; ++k) p = d[k], h = pl(c, f, p, e, g, 2 * k, h), f = p[p.length - 1];
            b.q = h;
            b.p = b.c
        }
        return b.q
    }
    l.qh = function () {
        var b = new un(null),
            c = Fm(this).slice();
        Qk(b, "XY", c);
        b.l();
        return b
    };

    function Em(b) {
        if (b.F != b.c) {
            var c = b.k,
                d;
            a: {
                d = b.b;
                var e, f;
                e = 0;
                for (f = d.length; e < f; ++e) if (!ul(c, d[e], b.s)) {
                    d = !1;
                    break a
                }
                d = !0
            }
            if (d) b.n = c;
            else {
                b.n = c.slice();
                d = c = b.n;
                e = b.b;
                f = b.s;
                var g = 0,
                    h, k;
                h = 0;
                for (k = e.length; h < k; ++h) g = vl(d, g, e[h], f);
                c.length = g
            }
            b.F = b.c
        }
        return b.n
    }
    l.mc = function (b) {
        var c = [],
            d = [],
            e = this.k,
            f = this.b,
            g = this.s;
        b = Math.sqrt(b);
        var h = 0,
            k = 0,
            n, p;
        n = 0;
        for (p = f.length; n < p; ++n) {
            var q = f[n],
                r = [],
                k = gl(e, h, q, g, b, c, k, r);
            d.push(r);
            h = q[q.length - 1]
        }
        c.length = k;
        e = new vn(null);
        wn(e, "XY", c, d);
        return e
    };
    l.Dh = function (b) {
        if (0 > b || this.b.length <= b) return null;
        var c;
        0 === b ? c = 0 : (c = this.b[b - 1], c = c[c.length - 1]);
        b = this.b[b].slice();
        var d = b[b.length - 1];
        if (0 !== c) {
            var e, f;
            e = 0;
            for (f = b.length; e < f; ++e) b[e] -= c
        }
        e = new H(null);
        wl(e, this.a, this.k.slice(c, d), b);
        return e
    };
    l.gd = function () {
        var b = this.a,
            c = this.k,
            d = this.b,
            e = [],
            f = 0,
            g, h, k, n;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var p = d[g].slice(),
                q = p[p.length - 1];
            if (0 !== f) for (k = 0, n = p.length; k < n; ++k) p[k] -= f;
            k = new H(null);
            wl(k, b, c.slice(f, q), p);
            e.push(k);
            f = q
        }
        return e
    };
    l.H = function () {
        return "MultiPolygon"
    };
    l.ha = function (b) {
        a: {
            var c = Em(this),
                d = this.b,
                e = this.s,
                f = 0,
                g, h;
            g = 0;
            for (h = d.length; g < h; ++g) {
                var k = d[g];
                if (sl(c, f, k, e, b)) {
                    b = !0;
                    break a
                }
                f = k[k.length - 1]
            }
            b = !1
        }
        return b
    };
    l.U = function (b, c) {
        if (null === b) wn(this, "XY", null, this.b);
        else {
            Rk(this, c, b, 3);
            null === this.k && (this.k = []);
            var d = this.k,
                e = this.s,
                f = this.b,
                g = 0,
                f = m(f) ? f : [],
                h = 0,
                k, n;
            k = 0;
            for (n = b.length; k < n; ++k) g = cl(d, g, b[k], e, f[h]), f[h++] = g, g = g[g.length - 1];
            f.length = h;
            0 === f.length ? this.k.length = 0 : (d = f[f.length - 1], this.k.length = 0 === d.length ? 0 : d[d.length - 1]);
            this.l()
        }
    };

    function wn(b, c, d, e) {
        Qk(b, c, d);
        b.b = e;
        b.l()
    }
    function xn(b, c) {
        var d = "XY",
            e = [],
            f = [],
            g, h, k;
        g = 0;
        for (h = c.length; g < h; ++g) {
            var n = c[g];
            0 === g && (d = n.a);
            var p = e.length;
            k = n.b;
            var q, r;
            q = 0;
            for (r = k.length; q < r; ++q) k[q] += p;
            db(e, n.k);
            f.push(k)
        }
        wn(b, d, e, f)
    };

    function yn(b, c) {
        return ma(b) - ma(c)
    }
    function zn(b, c) {
        var d = .5 * b / c;
        return d * d
    }
    function An(b, c, d, e, f, g) {
        var h = !1,
            k, n;
        k = d.f;
        null === k ? Bn(b, c, d, e) : (n = k.ue(), 2 == n || 3 == n ? (k.Ge(f, g), 2 == n && Bn(b, c, d, e)) : (0 == n && k.load(), k.ne(f, g), h = !0));
        return h
    }
    function Bn(b, c, d, e) {
        var f = (0, d.d)(c);
        null != f && (e = f.ke(e), (0, Cn[e.H()])(b, e, d, c))
    }
    var Cn = {
        Point: function (b, c, d, e) {
            var f = d.f;
            if (null !== f) {
                var g = b.a(d.a, "Image");
                g.cb(f);
                g.rb(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.xa(f), b.sb(c.K(), 0, 2, 2, c, e))
        },
        LineString: function (b, c, d, e) {
            var f = d.b;
            if (null !== f) {
                var g = b.a(d.a, "LineString");
                g.wa(null, f);
                g.Cb(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.xa(f), b.sb(Cm(c), 0, 2, 2, c, e))
        },
        Polygon: function (b, c, d, e) {
            var f = d.e,
                g = d.b;
            if (null !== f || null !== g) {
                var h = b.a(d.a, "Polygon");
                h.wa(f, g);
                h.Sb(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.xa(f), b.sb(yl(c), 0, 2,
            2, c, e))
        },
        MultiPoint: function (b, c, d, e) {
            var f = d.f;
            if (null !== f) {
                var g = b.a(d.a, "Image");
                g.cb(f);
                g.qb(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.xa(f), d = c.k, b.sb(d, 0, d.length, c.s, c, e))
        },
        MultiLineString: function (b, c, d, e) {
            var f = d.b;
            if (null !== f) {
                var g = b.a(d.a, "LineString");
                g.wa(null, f);
                g.kc(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.xa(f), d = Dm(c), b.sb(d, 0, d.length, 2, c, e))
        },
        MultiPolygon: function (b, c, d, e) {
            var f = d.e,
                g = d.b;
            if (null !== g || null !== f) {
                var h = b.a(d.a, "Polygon");
                h.wa(f, g);
                h.lc(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a,
                "Text"), b.xa(f), d = Fm(c), b.sb(d, 0, d.length, 2, c, e))
        },
        GeometryCollection: function (b, c, d, e) {
            c = c.d;
            var f, g;
            f = 0;
            for (g = c.length; f < g; ++f)(0, Cn[c[f].H()])(b, c[f], d, e)
        },
        Circle: function (b, c, d, e) {
            var f = d.e,
                g = d.b;
            if (null !== f || null !== g) {
                var h = b.a(d.a, "Polygon");
                h.wa(f, g);
                h.jc(c, e)
            }
            f = d.c;
            null !== f && (b = b.a(d.a, "Text"), b.xa(f), b.sb(c.qe(), 0, 2, 2, c, e))
        }
    };

    function Dn(b, c) {
        an.call(this, b, c);
        this.d = !1;
        this.r = -1;
        this.q = NaN;
        this.f = Vd();
        this.c = this.g = null;
        this.e = Tf()
    }
    u(Dn, an);
    Dn.prototype.j = function (b, c, d) {
        var e = cn(this, b);
        bn(this, "precompose", d, b, e);
        var f = this.c;
        if (null !== f && !f.ia()) {
            var g;
            ld(this.a, "render") ? (this.e.canvas.width = d.canvas.width, this.e.canvas.height = d.canvas.height, g = this.e) : g = d;
            var h = g.globalAlpha;
            g.globalAlpha = c.opacity;
            $m(f, g, b.pixelRatio, e, b.viewState.rotation, b.skippedFeatureUids);
            g != d && (bn(this, "render", g, b, e), d.drawImage(g.canvas, 0, 0));
            g.globalAlpha = h
        }
        bn(this, "postcompose", d, b, e)
    };
    Dn.prototype.Zb = function (b, c, d, e) {
        if (null !== this.c) {
            var f = this.a,
                g = {};
            return ck(this.c, c.viewState.resolution, c.viewState.rotation, b, c.skippedFeatureUids, function (b) {
                var c = ma(b).toString();
                if (!(c in g)) return g[c] = !0, d.call(e, b, f)
            })
        }
    };
    Dn.prototype.t = function () {
        Ij(this)
    };
    Dn.prototype.i = function (b) {
        function c(b) {
            var c;
            m(b.a) ? c = b.a.call(b, k) : m(d.r) && (c = (0, d.r)(b, k));
            if (null != c) {
                if (null != c) {
                    var e, f, g = !1;
                    e = 0;
                    for (f = c.length; e < f; ++e) g = An(q, b, c[e], zn(k, n), this.t, this) || g;
                    b = g
                } else b = !1;
                this.d = this.d || b
            }
        }
        var d = this.a,
            e = d.a();
        Kj(b.attributions, e.e);
        Lj(b, e);
        if (!this.d && (b.viewHints[0] || b.viewHints[1])) return !0;
        var f = b.extent,
            g = b.viewState,
            h = g.projection,
            k = g.resolution,
            n = b.pixelRatio;
        b = d.c;
        var p = d.Ab,
            g = d.get("renderOrder");
        m(g) || (g = yn);
        f = Yd(f, p * k);
        if (!this.d && this.q == k && this.r == b && this.g == g && $d(this.f, f)) return !0;
        tc(this.c);
        this.c = null;
        this.d = !1;
        var q = new Wm(.5 * k / n, f, k);
        e.Hb(f, k, h);
        if (null === g) e.Db(f, k, c, this);
        else {
            var r = [];
            e.Db(f, k, function (b) {
                r.push(b)
            }, this);
            gb(r, g);
            Ta(r, c, this)
        }
        Xm(q);
        this.q = k;
        this.r = b;
        this.g = g;
        this.f = f;
        this.c = q;
        return !0
    };

    function En(b, c) {
        Yj.call(this, 0, c);
        this.o = Tf();
        this.a = this.o.canvas;
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.className = "ol-unselectable";
        Mf(b, this.a, 0);
        this.c = !0;
        this.i = Kd()
    }
    u(En, Yj);
    En.prototype.Yc = function (b) {
        return b instanceof J ? new en(this, b) : b instanceof K ? new fn(this, b) : b instanceof L ? new Dn(this, b) : null
    };

    function Fn(b, c, d) {
        var e = b.e,
            f = b.o;
        if (ld(e, c)) {
            var g = d.extent,
                h = d.pixelRatio,
                k = d.viewState,
                n = k.resolution,
                p = k.rotation;
            Vj(b.i, b.a.width / 2, b.a.height / 2, h / n, -h / n, -p, -k.center[0], -k.center[1]);
            k = new Wm(.5 * n / h, g, n);
            g = new um(f, h, g, b.i, p);
            e.dispatchEvent(new Al(c, e, g, k, d, f, null));
            Xm(k);
            k.ia() || $m(k, f, h, b.i, p, {});
            Gm(g);
            b.g = k
        }
    }
    En.prototype.H = function () {
        return "canvas"
    };
    En.prototype.Ld = function (b) {
        if (null === b) this.c && (Sg(this.a, !1), this.c = !1);
        else {
            var c = this.o,
                d = b.size[0] * b.pixelRatio,
                e = b.size[1] * b.pixelRatio;
            this.a.width != d || this.a.height != e ? (this.a.width = d, this.a.height = e) : c.clearRect(0, 0, this.a.width, this.a.height);
            Zj(b);
            Fn(this, "precompose", b);
            var d = b.layerStatesArray,
                e = b.viewState.resolution,
                f, g, h, k;
            f = 0;
            for (g = d.length; f < g; ++f) k = d[f], h = k.layer, h = dk(this, h), k.visible && e >= k.minResolution && e < k.maxResolution && "ready" == k.gc && h.i(b, k) && h.j(b, k, c);
            Fn(this, "postcompose",
            b);
            this.c || (Sg(this.a, !0), this.c = !0);
            ek(this, b);
            b.postRenderFunctions.push(ak)
        }
    };

    function Gn(b, c, d) {
        Hj.call(this, b, c);
        this.target = d
    }
    u(Gn, Hj);
    Gn.prototype.e = ca;
    Gn.prototype.i = ca;

    function Hn(b, c) {
        var d = If("DIV");
        d.style.position = "absolute";
        Gn.call(this, b, c, d);
        this.c = null;
        this.d = Md()
    }
    u(Hn, Gn);
    Hn.prototype.Zb = function (b, c, d, e) {
        var f = this.a;
        return f.a().yd(c.viewState.resolution, c.viewState.rotation, b, c.skippedFeatureUids, function (b) {
            return d.call(e, b, f)
        })
    };
    Hn.prototype.e = function () {
        Kf(this.target);
        this.c = null
    };
    Hn.prototype.f = function (b, c) {
        var d = b.viewState,
            e = d.center,
            f = d.resolution,
            g = d.rotation,
            h = this.c,
            k = this.a.a(),
            n = b.viewHints,
            p = b.extent;
        m(c.extent) && (p = pe(p, c.extent));
        n[0] || n[1] || se(p) || (d = d.projection, n = k.g, null === n || (d = n), p = k.rc(p, f, b.pixelRatio, d), null !== p && (d = p.state, 0 == d ? (Wc(p, "change", this.o, !1, this), p.load()) : 2 == d && (h = p)));
        null !== h && (d = h.D(), n = h.resolution, p = Kd(), Vj(p, b.size[0] / 2, b.size[1] / 2, n / f, n / f, g, (d[0] - e[0]) / n, (e[1] - d[3]) / n), h != this.c && (e = h.c(this), e.style.maxWidth = "none", e.style.position =
            "absolute", Kf(this.target), this.target.appendChild(e), this.c = h), Wj(p, this.d) || (Xf(this.target, p), Nd(this.d, p)), Kj(b.attributions, h.f), Lj(b, k));
        return !0
    };

    function In(b, c) {
        var d = If("DIV");
        d.style.position = "absolute";
        Gn.call(this, b, c, d);
        this.d = !0;
        this.n = 1;
        this.g = 0;
        this.c = {}
    }
    u(In, Gn);
    In.prototype.e = function () {
        Kf(this.target);
        this.g = 0
    };
    In.prototype.f = function (b, c) {
        if (!c.visible) return this.d && (Sg(this.target, !1), this.d = !1), !0;
        var d = b.pixelRatio,
            e = b.viewState,
            f = e.projection,
            g = this.a,
            h = g.a(),
            k = Gj(h, f),
            n = h.bd(),
            p = ec(k.a, e.resolution, 0),
            q = k.ka(p),
            r = e.center,
            s;
        q == e.resolution ? (r = Oj(r, q, b.size), s = ne(r, q, e.rotation, b.size)) : s = b.extent;
        m(c.extent) && (s = pe(s, c.extent));
        var q = Aj(k, s, q),
            v = {};
        v[p] = {};
        var y = sa(h.fe, h, v, Nj(function (b) {
            return null !== b && 2 == b.state
        }, h, d, f)),
            C = g.ea();
        m(C) || (C = !0);
        var F = Vd(),
            G = new of(0, 0, 0, 0),
            w, U, N, Y;
        for (N = q.a; N <= q.d; ++N) for (Y = q.b; Y <= q.c; ++Y) w = h.Fb(p, N, Y, d, f), U = w.state, 2 == U ? v[p][nf(w.a)] = w : 4 == U || 3 == U && !C || (U = k.$c(w.a, y, null, G, F), U || (w = k.kd(w.a, G, F), null === w || y(p + 1, w)));
        var T;
        if (this.g != h.c) {
            for (T in this.c) C = this.c[+T], Nf(C.target);
            this.c = {};
            this.g = h.c
        }
        F = Va(sb(v), Number);
        gb(F);
        var y = {}, qa;
        N = 0;
        for (Y = F.length; N < Y; ++N) {
            T = F[N];
            T in this.c ? C = this.c[T] : (C = k.Fc(r, T), C = new Jn(k, C), y[T] = !0, this.c[T] = C);
            T = v[T];
            for (qa in T) Kn(C, T[qa], n);
            Ln(C)
        }
        n = Va(sb(this.c), Number);
        gb(n);
        N = Kd();
        qa = 0;
        for (F = n.length; qa < F; ++qa) if (T = n[qa],
        C = this.c[T], T in v) if (w = C.g, Y = C.f, Vj(N, b.size[0] / 2, b.size[1] / 2, w / e.resolution, w / e.resolution, e.rotation, (Y[0] - r[0]) / w, (r[1] - Y[1]) / w), Mn(C, N), T in y) {
            for (--T; 0 <= T; --T) if (T in this.c) {
                Lf(C.target, this.c[T].target);
                break
            }
            0 > T && Mf(this.target, C.target, 0)
        } else b.viewHints[0] || b.viewHints[1] || Nn(C, s, G);
        else Nf(C.target), delete this.c[T];
        c.opacity != this.n && (this.n = this.target.style.opacity = c.opacity);
        c.visible && !this.d && (Sg(this.target, !0), this.d = !0);
        Mj(b.usedTiles, h, p, q);
        Pj(b, h, k, d, f, s, p, g.r());
        Jj(b, h);
        Lj(b, h);
        return !0
    };

    function Jn(b, c) {
        this.target = If("DIV");
        this.target.style.position = "absolute";
        this.target.style.width = "100%";
        this.target.style.height = "100%";
        this.d = b;
        this.b = c;
        this.f = me(yj(b, c));
        this.g = b.ka(c[0]);
        this.c = {};
        this.a = null;
        this.e = Md()
    }

    function Kn(b, c, d) {
        var e = c.a,
            f = e[0],
            g = e[1],
            h = e[2],
            e = nf(e);
        if (!(e in b.c)) {
            var f = b.d.sa(f),
                k = c.Na(b),
                n = k.style;
            n.maxWidth = "none";
            var p, q;
            0 < d ? (p = If("DIV"), q = p.style, q.overflow = "hidden", q.width = f + "px", q.height = f + "px", n.position = "absolute", n.left = -d + "px", n.top = -d + "px", n.width = f + 2 * d + "px", n.height = f + 2 * d + "px", p.appendChild(k)) : (n.width = f + "px", n.height = f + "px", p = k, q = n);
            q.position = "absolute";
            q.left = (g - b.b[1]) * f + "px";
            q.top = (b.b[2] - h) * f + "px";
            null === b.a && (b.a = document.createDocumentFragment());
            b.a.appendChild(p);
            b.c[e] = c
        }
    }
    function Ln(b) {
        null !== b.a && (b.target.appendChild(b.a), b.a = null)
    }
    function Nn(b, c, d) {
        var e = zj(b.d, c, b.b[0], d);
        c = [];
        for (var f in b.c) d = b.c[f], e.contains(d.a) || c.push(d);
        var g, e = 0;
        for (g = c.length; e < g; ++e) d = c[e], f = nf(d.a), Nf(d.Na(b)), delete b.c[f]
    }
    function Mn(b, c) {
        Wj(c, b.e) || (Xf(b.target, c), Nd(b.e, c))
    };

    function On(b, c) {
        this.g = Tf();
        var d = this.g.canvas;
        d.style.maxWidth = "none";
        d.style.position = "absolute";
        Gn.call(this, b, c, d);
        this.d = !1;
        this.q = -1;
        this.p = NaN;
        this.n = Vd();
        this.c = this.j = null;
        this.r = Kd()
    }
    u(On, Gn);
    On.prototype.i = function (b, c) {
        var d = b.viewState,
            e = d.rotation,
            f = b.pixelRatio,
            d = Vj(this.r, f * b.size[0] / 2, f * b.size[1] / 2, f / d.resolution, -f / d.resolution, -d.rotation, -d.center[0], -d.center[1]),
            g = this.g;
        g.canvas.width = b.size[0];
        g.canvas.height = b.size[1];
        Pn(this, "precompose", b, d);
        var h = this.c;
        null === h || h.ia() || (g.globalAlpha = c.opacity, $m(h, g, f, d, e, b.skippedFeatureUids), Pn(this, "render", b, d));
        Pn(this, "postcompose", b, d)
    };

    function Pn(b, c, d, e) {
        var f = b.g;
        b = b.a;
        ld(b, c) && (e = new um(f, d.pixelRatio, d.extent, e, d.viewState.rotation), b.dispatchEvent(new Al(c, b, e, null, d, f, null)), Gm(e))
    }
    On.prototype.Zb = function (b, c, d, e) {
        if (null !== this.c) {
            var f = this.a,
                g = {};
            return ck(this.c, c.viewState.resolution, c.viewState.rotation, b, c.skippedFeatureUids, function (b) {
                var c = ma(b).toString();
                if (!(c in g)) return g[c] = !0, d.call(e, b, f)
            })
        }
    };
    On.prototype.t = function () {
        Ij(this)
    };
    On.prototype.f = function (b) {
        function c(b) {
            var c;
            m(b.a) ? c = b.a.call(b, k) : m(d.r) && (c = (0, d.r)(b, k));
            if (null != c) {
                if (null != c) {
                    var e, f, g = !1;
                    e = 0;
                    for (f = c.length; e < f; ++e) g = An(q, b, c[e], zn(k, n), this.t, this) || g;
                    b = g
                } else b = !1;
                this.d = this.d || b
            }
        }
        var d = this.a,
            e = d.a();
        Kj(b.attributions, e.e);
        Lj(b, e);
        if (!this.d && (b.viewHints[0] || b.viewHints[1])) return !0;
        var f = b.extent,
            g = b.viewState,
            h = g.projection,
            k = g.resolution,
            n = b.pixelRatio;
        b = d.c;
        var p = d.Ab,
            g = d.get("renderOrder");
        m(g) || (g = yn);
        f = Yd(f, p * k);
        if (!this.d && this.p == k && this.q == b && this.j == g && $d(this.n, f)) return !0;
        tc(this.c);
        this.c = null;
        this.d = !1;
        var q = new Wm(.5 * k / n, f, k);
        e.Hb(f, k, h);
        if (null === g) e.Db(f, k, c, this);
        else {
            var r = [];
            e.Db(f, k, function (b) {
                r.push(b)
            }, this);
            gb(r, g);
            Ta(r, c, this)
        }
        Xm(q);
        this.p = k;
        this.q = b;
        this.j = g;
        this.n = f;
        this.c = q;
        return !0
    };

    function Qn(b, c) {
        Yj.call(this, 0, c);
        this.c = null;
        this.c = Tf();
        var d = this.c.canvas;
        d.style.position = "absolute";
        d.style.width = "100%";
        d.style.height = "100%";
        d.className = "ol-unselectable";
        Mf(b, d, 0);
        this.i = Kd();
        this.a = If("DIV");
        this.a.className = "ol-unselectable";
        d = this.a.style;
        d.position = "absolute";
        d.width = "100%";
        d.height = "100%";
        z(this.a, "touchstart", wc);
        Mf(b, this.a, 0);
        this.o = !0
    }
    u(Qn, Yj);
    Qn.prototype.M = function () {
        Nf(this.a);
        Qn.S.M.call(this)
    };
    Qn.prototype.Yc = function (b) {
        if (b instanceof J) b = new Hn(this, b);
        else if (b instanceof K) b = new In(this, b);
        else if (b instanceof L) b = new On(this, b);
        else return null;
        return b
    };

    function Rn(b, c, d) {
        var e = b.e;
        if (ld(e, c)) {
            var f = d.extent,
                g = d.pixelRatio,
                h = d.viewState,
                k = h.resolution,
                n = h.rotation,
                p = b.c,
                q = p.canvas;
            Vj(b.i, q.width / 2, q.height / 2, g / h.resolution, -g / h.resolution, -h.rotation, -h.center[0], -h.center[1]);
            h = new um(p, g, f, b.i, n);
            f = new Wm(.5 * k / g, f, k);
            e.dispatchEvent(new Al(c, e, h, f, d, p, null));
            Xm(f);
            f.ia() || $m(f, p, g, b.i, n, {});
            Gm(h);
            b.g = f
        }
    }
    Qn.prototype.H = function () {
        return "dom"
    };
    Qn.prototype.Ld = function (b) {
        if (null === b) this.o && (Sg(this.a, !1), this.o = !1);
        else {
            var c;
            c = function (b, c) {
                Mf(this.a, b, c)
            };
            var d = this.e;
            if (ld(d, "precompose") || ld(d, "postcompose")) d = this.c.canvas, d.width = b.size[0], d.height = b.size[1];
            Rn(this, "precompose", b);
            var d = b.layerStatesArray,
                e, f, g, h;
            e = 0;
            for (f = d.length; e < f; ++e) h = d[e], g = h.layer, g = dk(this, g), c.call(this, g.target, e), "ready" == h.gc ? g.f(b, h) && g.i(b, h) : g.e();
            c = b.layerStates;
            for (var k in this.b) k in c || (g = this.b[k], Nf(g.target));
            this.o || (Sg(this.a, !0), this.o = !0);
            Zj(b);
            ek(this, b);
            b.postRenderFunctions.push(ak);
            Rn(this, "postcompose", b)
        }
    };

    function Sn(b) {
        this.a = b
    }
    function Tn(b) {
        this.a = b
    }
    u(Tn, Sn);
    Tn.prototype.H = function () {
        return 35632
    };

    function Un(b) {
        this.a = b
    }
    u(Un, Sn);
    Un.prototype.H = function () {
        return 35633
    };

    function Vn() {
        this.a = "precision mediump float;varying vec2 a;varying float b;uniform mat4 k;uniform float l;uniform sampler2D m;void main(void){vec4 texColor=texture2D(m,a);float alpha=texColor.a*b*l;if(alpha==0.0){discard;}gl_FragColor.a=alpha;gl_FragColor.rgb=(k*vec4(texColor.rgb,1.)).rgb;}"
    }
    u(Vn, Tn);
    da(Vn);

    function Wn() {
        this.a = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }
    u(Wn, Un);
    da(Wn);

    function Xn(b, c) {
        this.n = b.getUniformLocation(c, "k");
        this.o = b.getUniformLocation(c, "j");
        this.i = b.getUniformLocation(c, "i");
        this.f = b.getUniformLocation(c, "l");
        this.g = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "e");
        this.c = b.getAttribLocation(c, "f");
        this.d = b.getAttribLocation(c, "c");
        this.b = b.getAttribLocation(c, "g");
        this.e = b.getAttribLocation(c, "d")
    };

    function Yn() {
        this.a = "precision mediump float;varying vec2 a;varying float b;uniform float k;uniform sampler2D l;void main(void){vec4 texColor=texture2D(l,a);gl_FragColor.rgb=texColor.rgb;float alpha=texColor.a*b*k;if(alpha==0.0){discard;}gl_FragColor.a=alpha;}"
    }
    u(Yn, Tn);
    da(Yn);

    function Zn() {
        this.a = "varying vec2 a;varying float b;attribute vec2 c;attribute vec2 d;attribute vec2 e;attribute float f;attribute float g;uniform mat4 h;uniform mat4 i;uniform mat4 j;void main(void){mat4 offsetMatrix=i;if(g==1.0){offsetMatrix=i*j;}vec4 offsets=offsetMatrix*vec4(e,0.,0.);gl_Position=h*vec4(c,0.,1.)+offsets;a=d;b=f;}"
    }
    u(Zn, Un);
    da(Zn);

    function $n(b, c) {
        this.o = b.getUniformLocation(c, "j");
        this.i = b.getUniformLocation(c, "i");
        this.f = b.getUniformLocation(c, "k");
        this.g = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "e");
        this.c = b.getAttribLocation(c, "f");
        this.d = b.getAttribLocation(c, "c");
        this.b = b.getAttribLocation(c, "g");
        this.e = b.getAttribLocation(c, "d")
    };

    function ao(b) {
        this.a = m(b) ? b : [];
        this.c = m(void 0) ? void 0 : 35044
    };

    function bo(b, c) {
        this.n = this.i = void 0;
        this.Sa = new yg;
        this.e = ke(c);
        this.o = [];
        this.q = void 0;
        this.b = [];
        this.t = this.r = void 0;
        this.c = [];
        this.p = this.j = this.d = null;
        this.F = void 0;
        this.ga = Md();
        this.Ra = Md();
        this.Q = this.J = void 0;
        this.ea = Md();
        this.ca = this.ba = this.V = void 0;
        this.f = [];
        this.a = [];
        this.g = null;
        this.la = void 0
    }
    function co(b, c) {
        var d = b.g,
            e = b.d,
            f = b.f,
            g = c.a;
        return function () {
            if (!g.isContextLost()) {
                var b, k;
                b = 0;
                for (k = f.length; b < k; ++b) g.deleteTexture(f[b])
            }
            eo(c, d);
            eo(c, e)
        }
    }

    function fo(b, c, d, e) {
        var f = b.i,
            g = b.n,
            h = b.q,
            k = b.r,
            n = b.t,
            p = b.F,
            q = b.J,
            r = b.Q,
            s = b.V ? 1 : 0,
            v = b.ba,
            y = b.ca,
            C = b.la,
            F = Math.cos(v),
            v = Math.sin(v),
            G = b.c.length,
            w = b.a.length,
            U, N, Y, T, qa, vb;
        for (U = 0; U < d; U += e) qa = c[U] - b.e[0], vb = c[U + 1] - b.e[1], N = w / 8, Y = -y * f, T = -y * (h - g), b.a[w++] = qa, b.a[w++] = vb, b.a[w++] = Y * F - T * v, b.a[w++] = Y * v + T * F, b.a[w++] = q / n, b.a[w++] = (r + h) / k, b.a[w++] = p, b.a[w++] = s, Y = y * (C - f), T = -y * (h - g), b.a[w++] = qa, b.a[w++] = vb, b.a[w++] = Y * F - T * v, b.a[w++] = Y * v + T * F, b.a[w++] = (q + C) / n, b.a[w++] = (r + h) / k, b.a[w++] = p, b.a[w++] = s, Y = y * (C - f), T = y * g, b.a[w++] = qa, b.a[w++] = vb, b.a[w++] = Y * F - T * v, b.a[w++] = Y * v + T * F, b.a[w++] = (q + C) / n, b.a[w++] = r / k, b.a[w++] = p, b.a[w++] = s, Y = -y * f, T = y * g, b.a[w++] = qa, b.a[w++] = vb, b.a[w++] = Y * F - T * v, b.a[w++] = Y * v + T * F, b.a[w++] = q / n, b.a[w++] = r / k, b.a[w++] = p, b.a[w++] = s, b.c[G++] = N, b.c[G++] = N + 1, b.c[G++] = N + 2, b.c[G++] = N, b.c[G++] = N + 2, b.c[G++] = N + 3
    }
    l = bo.prototype;
    l.qb = function (b) {
        var c = b.k;
        fo(this, c, c.length, b.s)
    };
    l.rb = function (b) {
        var c = b.k;
        fo(this, c, c.length, b.s)
    };
    l.Kb = function (b) {
        var c = b.a;
        this.o.push(this.c.length);
        this.g = new ao(this.a);
        go(b, 34962, this.g);
        this.d = new ao(this.c);
        go(b, 34963, this.d);
        var d, e, f = {}, g, h = this.b.length;
        for (g = 0; g < h; ++g) d = this.b[g], e = ma(d).toString(), e in f ? b = x(f, e) : (b = c.createTexture(), c.bindTexture(3553, b), c.texParameteri(3553, 10242, 33071), c.texParameteri(3553, 10243, 33071), c.texParameteri(3553, 10241, 9729), c.texParameteri(3553, 10240, 9729), c.texImage2D(3553, 0, 6408, 6408, 5121, d), f[e] = b), this.f[g] = b;
        this.q = this.n = this.i = void 0;
        this.b = null;
        this.t = this.r = void 0;
        this.c = null;
        this.ca = this.ba = this.V = this.Q = this.J = this.F = void 0;
        this.a = null;
        this.la = void 0
    };
    l.Hc = function (b, c, d, e, f, g, h, k, n, p, q) {
        g = b.a;
        go(b, 34962, this.g);
        go(b, 34963, this.d);
        var r = k || 1 != n || p || 1 != q,
            s, v;
        r ? (s = Vn.Ja(), v = Wn.Ja()) : (s = Yn.Ja(), v = Zn.Ja());
        v = ho(b, s, v);
        r ? null === this.j ? this.j = s = new Xn(g, v) : s = this.j : null === this.p ? this.p = s = new $n(g, v) : s = this.p;
        b.Gd(v);
        g.enableVertexAttribArray(s.d);
        g.vertexAttribPointer(s.d, 2, 5126, !1, 32, 0);
        g.enableVertexAttribArray(s.a);
        g.vertexAttribPointer(s.a, 2, 5126, !1, 32, 8);
        g.enableVertexAttribArray(s.e);
        g.vertexAttribPointer(s.e, 2, 5126, !1, 32, 16);
        g.enableVertexAttribArray(s.c);
        g.vertexAttribPointer(s.c, 1, 5126, !1, 32, 24);
        g.enableVertexAttribArray(s.b);
        g.vertexAttribPointer(s.b, 1, 5126, !1, 32, 28);
        v = this.ea;
        Vj(v, 0, 0, 2 / (d * f[0]), 2 / (d * f[1]), -e, -(c[0] - this.e[0]), -(c[1] - this.e[1]));
        c = this.Ra;
        d = 2 / f[0];
        f = 2 / f[1];
        Od(c);
        c[0] = d;
        c[5] = f;
        c[10] = 1;
        c[15] = 1;
        f = this.ga;
        Od(f);
        0 !== e && Sd(f, -e);
        g.uniformMatrix4fv(s.g, !1, v);
        g.uniformMatrix4fv(s.i, !1, c);
        g.uniformMatrix4fv(s.o, !1, f);
        g.uniform1f(s.f, h);
        r && g.uniformMatrix4fv(s.n, !1, zg(this.Sa, k, n, p, q));
        e = 0;
        h = this.f.length;
        for (k = 0; e < h; ++e) g.bindTexture(3553,
        this.f[e]), n = this.o[e], g.drawElements(4, n - k, b.e ? 5125 : 5123, k * (b.e ? 4 : 2)), k = n;
        g.disableVertexAttribArray(s.d);
        g.disableVertexAttribArray(s.a);
        g.disableVertexAttribArray(s.e);
        g.disableVertexAttribArray(s.c);
        g.disableVertexAttribArray(s.b)
    };
    l.cb = function (b) {
        var c = b.tb(),
            d = b.yb(1),
            e = b.cd(),
            f = b.p,
            g = b.zb(),
            h = b.q,
            k = b.i,
            n = b.ab();
        b = b.n;
        0 === this.b.length ? this.b.push(d) : ma(this.b[this.b.length - 1]) != ma(d) && (this.o.push(this.c.length), this.b.push(d));
        this.i = c[0];
        this.n = c[1];
        this.q = n[1];
        this.r = e[1];
        this.t = e[0];
        this.F = f;
        this.J = g[0];
        this.Q = g[1];
        this.ba = k;
        this.V = h;
        this.ca = b;
        this.la = n[0]
    };

    function io(b, c) {
        this.b = c;
        this.d = b;
        this.c = {}
    }
    function jo(b, c) {
        var d = [],
            e;
        for (e in b.c) d.push(co(b.c[e], c));
        return hd.apply(null, d)
    }

    function ko(b, c) {
        for (var d in b.c) b.c[d].Kb(c)
    }
    io.prototype.a = function (b, c) {
        var d = this.c[c];
        m(d) || (d = new lo[c](this.d, this.b), this.c[c] = d);
        return d
    };
    io.prototype.ia = function () {
        return xb(this.c)
    };

    function mo(b, c, d, e, f, g, h, k, n, p, q, r, s) {
        var v, y, C;
        v = 0;
        for (y = Hm.length; v < y && (C = b.c[Hm[v]], !m(C) || !(C = C.Hc(c, d, e, f, g, h, k, n, p, q, r, s))); ++v);
    }
    var lo = {
        Image: bo
    };

    function no(b, c, d, e, f, g, h) {
        this.b = b;
        this.e = c;
        this.a = g;
        this.f = h;
        this.i = f;
        this.o = e;
        this.g = d;
        this.d = null;
        this.c = {}
    }
    l = no.prototype;
    l.ic = function (b, c) {
        var d = b.toString(),
            e = this.c[d];
        m(e) ? e.push(c) : this.c[d] = [c]
    };
    l.jc = function () {};
    l.ee = function (b, c) {
        var d = (0, c.d)(b);
        if (null != d && qe(this.a, d.D())) {
            var e = c.a;
            m(e) || (e = 0);
            this.ic(e, function (b) {
                b.wa(c.e, c.b);
                b.cb(c.f);
                b.xa(c.c);
                var e = oo[d.H()];
                e && e.call(b, d, null)
            })
        }
    };
    l.Zc = function (b, c) {
        var d = b.d,
            e, f;
        e = 0;
        for (f = d.length; e < f; ++e) {
            var g = d[e],
                h = oo[g.H()];
            h && h.call(this, g, c)
        }
    };
    l.rb = function (b, c) {
        var d = this.b,
            e = (new io(1, this.a)).a(0, "Image");
        e.cb(this.d);
        e.rb(b, c);
        e.Kb(d);
        e.Hc(this.b, this.e, this.g, this.o, this.i, this.a, this.f, 1, 0, 1, 0, 1, {});
        co(e, d)()
    };
    l.Cb = function () {};
    l.kc = function () {};
    l.qb = function (b, c) {
        var d = this.b,
            e = (new io(1, this.a)).a(0, "Image");
        e.cb(this.d);
        e.qb(b, c);
        e.Kb(d);
        e.Hc(this.b, this.e, this.g, this.o, this.i, this.a, this.f, 1, 0, 1, 0, 1, {});
        co(e, d)()
    };
    l.lc = function () {};
    l.Sb = function () {};
    l.sb = function () {};
    l.wa = function () {};
    l.cb = function (b) {
        this.d = b
    };
    l.xa = function () {};
    var oo = {
        Point: no.prototype.rb,
        MultiPoint: no.prototype.qb,
        GeometryCollection: no.prototype.Zc
    };

    function po() {
        this.a = "precision mediump float;varying vec2 a;uniform mat4 f;uniform float g;uniform sampler2D h;void main(void){vec4 texColor=texture2D(h,a);gl_FragColor.rgb=(f*vec4(texColor.rgb,1.)).rgb;gl_FragColor.a=texColor.a*g;}"
    }
    u(po, Tn);
    da(po);

    function qo() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }
    u(qo, Un);
    da(qo);

    function ro(b, c) {
        this.g = b.getUniformLocation(c, "f");
        this.b = b.getUniformLocation(c, "g");
        this.d = b.getUniformLocation(c, "e");
        this.f = b.getUniformLocation(c, "d");
        this.e = b.getUniformLocation(c, "h");
        this.a = b.getAttribLocation(c, "b");
        this.c = b.getAttribLocation(c, "c")
    };

    function so() {
        this.a = "precision mediump float;varying vec2 a;uniform float f;uniform sampler2D g;void main(void){vec4 texColor=texture2D(g,a);gl_FragColor.rgb=texColor.rgb;gl_FragColor.a=texColor.a*f;}"
    }
    u(so, Tn);
    da(so);

    function to() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform mat4 d;uniform mat4 e;void main(void){gl_Position=e*vec4(b,0.,1.);a=(d*vec4(c,0.,1.)).st;}"
    }
    u(to, Un);
    da(to);

    function uo(b, c) {
        this.b = b.getUniformLocation(c, "f");
        this.d = b.getUniformLocation(c, "e");
        this.f = b.getUniformLocation(c, "d");
        this.e = b.getUniformLocation(c, "g");
        this.a = b.getAttribLocation(c, "b");
        this.c = b.getAttribLocation(c, "c")
    };

    function vo(b, c) {
        Hj.call(this, b, c);
        this.J = new ao([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, 1, 1, 1, 1]);
        this.e = this.Qa = null;
        this.f = void 0;
        this.q = Kd();
        this.F = Md();
        this.Q = new yg;
        this.i = this.g = null
    }
    u(vo, Hj);

    function wo(b, c, d) {
        var e = b.b.d;
        if (m(b.f) && b.f == d) e.bindFramebuffer(36160, b.e);
        else {
            c.postRenderFunctions.push(ta(function (b, c, d) {
                b.isContextLost() || (b.deleteFramebuffer(c), b.deleteTexture(d))
            }, e, b.e, b.Qa));
            c = e.createTexture();
            e.bindTexture(3553, c);
            e.texImage2D(3553, 0, 6408, d, d, 0, 6408, 5121, null);
            e.texParameteri(3553, 10240, 9729);
            e.texParameteri(3553, 10241, 9729);
            var f = e.createFramebuffer();
            e.bindFramebuffer(36160, f);
            e.framebufferTexture2D(36160, 36064, 3553, c, 0);
            b.Qa = c;
            b.e = f;
            b.f = d
        }
    }
    vo.prototype.xf = function (b, c, d) {
        xo(this, "precompose", d, b);
        go(d, 34962, this.J);
        var e = d.a,
            f = c.brightness || 1 != c.contrast || c.hue || 1 != c.saturation,
            g, h;
        f ? (g = po.Ja(), h = qo.Ja()) : (g = so.Ja(), h = to.Ja());
        g = ho(d, g, h);
        f ? null === this.g ? this.g = h = new ro(e, g) : h = this.g : null === this.i ? this.i = h = new uo(e, g) : h = this.i;
        d.Gd(g) && (e.enableVertexAttribArray(h.a), e.vertexAttribPointer(h.a, 2, 5126, !1, 16, 0), e.enableVertexAttribArray(h.c), e.vertexAttribPointer(h.c, 2, 5126, !1, 16, 8), e.uniform1i(h.e, 0));
        e.uniformMatrix4fv(h.f, !1, this.q);
        e.uniformMatrix4fv(h.d, !1, this.F);
        f && e.uniformMatrix4fv(h.g, !1, zg(this.Q, c.brightness, c.contrast, c.hue, c.saturation));
        e.uniform1f(h.b, c.opacity);
        e.bindTexture(3553, this.Qa);
        e.drawArrays(5, 0, 4);
        xo(this, "postcompose", d, b)
    };

    function xo(b, c, d, e) {
        b = b.a;
        if (ld(b, c)) {
            var f = e.viewState;
            b.dispatchEvent(new Al(c, b, new no(d, f.center, f.resolution, f.rotation, e.size, e.extent, e.pixelRatio), null, e, null, d))
        }
    }
    vo.prototype.n = function () {
        this.e = this.Qa = null;
        this.f = void 0
    };

    function yo(b, c) {
        vo.call(this, b, c);
        this.c = null
    }
    u(yo, vo);

    function zo(b, c) {
        var d = c.c(),
            e = b.b.d,
            f = e.createTexture();
        e.bindTexture(3553, f);
        e.texImage2D(3553, 0, 6408, 6408, 5121, d);
        e.texParameteri(3553, 10242, 33071);
        e.texParameteri(3553, 10243, 33071);
        e.texParameteri(3553, 10241, 9729);
        e.texParameteri(3553, 10240, 9729);
        return f
    }
    yo.prototype.Zb = function (b, c, d, e) {
        var f = this.a;
        return f.a().yd(c.viewState.resolution, c.viewState.rotation, b, c.skippedFeatureUids, function (b) {
            return d.call(e, b, f)
        })
    };
    yo.prototype.re = function (b, c) {
        var d = this.b.d,
            e = b.viewState,
            f = e.center,
            g = e.resolution,
            h = e.rotation,
            k = this.c,
            n = this.Qa,
            p = this.a.a(),
            q = b.viewHints,
            r = b.extent;
        m(c.extent) && (r = pe(r, c.extent));
        q[0] || q[1] || se(r) || (e = e.projection, q = p.g, null === q || (e = q), r = p.rc(r, g, b.pixelRatio, e), null !== r && (e = r.state, 0 == e ? (Wc(r, "change", this.o, !1, this), r.load()) : 2 == e && (k = r, n = zo(this, r), null === this.Qa || b.postRenderFunctions.push(ta(function (b, c) {
            b.isContextLost() || b.deleteTexture(c)
        }, d, this.Qa)))));
        null !== k && (d = this.b.f.g, Ao(this,
        d.width, d.height, f, g, h, k.D()), f = this.q, Od(f), Rd(f, 1, -1), Qd(f, 0, -1), this.c = k, this.Qa = n, Kj(b.attributions, k.f), Lj(b, p));
        return !0
    };

    function Ao(b, c, d, e, f, g, h) {
        c *= f;
        d *= f;
        b = b.F;
        Od(b);
        Rd(b, 2 / c, 2 / d);
        Sd(b, -g);
        Qd(b, h[0] - e[0], h[1] - e[1]);
        Rd(b, (h[2] - h[0]) / 2, (h[3] - h[1]) / 2);
        Qd(b, 1, 1)
    };

    function Bo() {
        this.a = "precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}"
    }
    u(Bo, Tn);
    da(Bo);

    function Co() {
        this.a = "varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}"
    }
    u(Co, Un);
    da(Co);

    function Do(b, c) {
        this.b = b.getUniformLocation(c, "e");
        this.d = b.getUniformLocation(c, "d");
        this.a = b.getAttribLocation(c, "b");
        this.c = b.getAttribLocation(c, "c")
    };

    function Eo(b, c) {
        vo.call(this, b, c);
        this.t = Bo.Ja();
        this.V = Co.Ja();
        this.c = null;
        this.r = new ao([0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0]);
        this.p = this.d = null;
        this.j = -1
    }
    u(Eo, vo);
    Eo.prototype.M = function () {
        eo(this.b.f, this.r);
        Eo.S.M.call(this)
    };
    Eo.prototype.n = function () {
        Eo.S.n.call(this);
        this.c = null
    };
    Eo.prototype.re = function (b, c, d) {
        var e = this.b,
            f = d.a,
            g = b.viewState,
            h = g.projection,
            k = this.a,
            n = k.a(),
            p = Gj(n, h),
            q = ec(p.a, g.resolution, 0),
            r = p.ka(q),
            s = n.Gc(q, b.pixelRatio, h),
            v = s / p.sa(q),
            y = r / v,
            C = n.bd(),
            F = g.center,
            G;
        r == g.resolution ? (F = Oj(F, r, b.size), G = ne(F, r, g.rotation, b.size)) : G = b.extent;
        r = Aj(p, G, r);
        if (null !== this.d && sf(this.d, r) && this.j == n.c) y = this.p;
        else {
            var w = [r.d - r.a + 1, r.c - r.b + 1],
                w = Math.max(w[0] * s, w[1] * s),
                U = Math.pow(2, Math.ceil(Math.log(w) / Math.LN2)),
                w = y * U,
                N = p.Lb(q),
                Y = N[0] + r.a * s * y,
                y = N[1] + r.b * s * y,
                y = [Y,
                y, Y + w, y + w];
            wo(this, b, U);
            f.viewport(0, 0, U, U);
            f.clearColor(0, 0, 0, 0);
            f.clear(16384);
            f.disable(3042);
            U = ho(d, this.t, this.V);
            d.Gd(U);
            null === this.c && (this.c = new Do(f, U));
            go(d, 34962, this.r);
            f.enableVertexAttribArray(this.c.a);
            f.vertexAttribPointer(this.c.a, 2, 5126, !1, 16, 0);
            f.enableVertexAttribArray(this.c.c);
            f.vertexAttribPointer(this.c.c, 2, 5126, !1, 16, 8);
            f.uniform1i(this.c.b, 0);
            d = {};
            d[q] = {};
            var T = sa(n.fe, n, d, Nj(function (b) {
                return null !== b && 2 == b.state && Fo(e.c, b.mb())
            }, n, v, h)),
                qa = k.ea();
            m(qa) || (qa = !0);
            var U = !0,
                Y = Vd(),
                vb = new of(0, 0, 0, 0),
                Ka, ac, Sb;
            for (ac = r.a; ac <= r.d; ++ac) for (Sb = r.b; Sb <= r.c; ++Sb) {
                N = n.Fb(q, ac, Sb, v, h);
                if (m(c.extent) && (Ka = yj(p, N.a, Y), !qe(Ka, c.extent))) continue;
                Ka = N.state;
                if (2 == Ka) {
                    if (Fo(e.c, N.mb())) {
                        d[q][nf(N.a)] = N;
                        continue
                    }
                } else if (4 == Ka || 3 == Ka && !qa) continue;
                U = !1;
                Ka = p.$c(N.a, T, null, vb, Y);
                Ka || (N = p.kd(N.a, vb, Y), null === N || T(q + 1, N))
            }
            c = Va(sb(d), Number);
            gb(c);
            for (var T = new Float32Array(4), La, Pa, Ud, qa = 0, vb = c.length; qa < vb; ++qa) for (La in Pa = d[c[qa]], Pa) N = Pa[La], Ka = yj(p, N.a, Y), ac = 2 * (Ka[2] - Ka[0]) / w,
            Sb = 2 * (Ka[3] - Ka[1]) / w, Ud = 2 * (Ka[0] - y[0]) / w - 1, Ka = 2 * (Ka[1] - y[1]) / w - 1, Jd(T, ac, Sb, Ud, Ka), f.uniform4fv(this.c.d, T), Go(e, N, s, C * v), f.drawArrays(5, 0, 4);
            U ? (this.d = r, this.p = y, this.j = n.c) : (this.p = this.d = null, this.j = -1, b.animate = !0)
        }
        Mj(b.usedTiles, n, q, r);
        var qd = e.i;
        Pj(b, n, p, v, h, G, q, k.r(), function (b) {
            var c;
            (c = 2 != b.state || Fo(e.c, b.mb())) || (c = b.mb() in qd.b);
            c || Qj(qd, [b, Cj(p, b.a), p.ka(b.a[0]), s, C * v])
        }, this);
        Jj(b, n);
        Lj(b, n);
        f = this.q;
        Od(f);
        Qd(f, (F[0] - y[0]) / (y[2] - y[0]), (F[1] - y[1]) / (y[3] - y[1]));
        0 !== g.rotation && Sd(f, g.rotation);
        Rd(f, b.size[0] * g.resolution / (y[2] - y[0]), b.size[1] * g.resolution / (y[3] - y[1]));
        Qd(f, -.5, -.5);
        return !0
    };

    function Ho(b, c) {
        vo.call(this, b, c);
        this.d = !1;
        this.t = -1;
        this.r = NaN;
        this.j = Vd();
        this.c = this.p = null
    }
    u(Ho, vo);
    l = Ho.prototype;
    l.xf = function (b, c, d) {
        var e = b.viewState,
            f = this.c;
        null === f || f.ia() || mo(f, d, e.center, e.resolution, e.rotation, b.size, b.pixelRatio, c.opacity, c.brightness, c.contrast, c.hue, c.saturation, b.skippedFeatureUids)
    };
    l.M = function () {
        var b = this.c;
        null !== b && (jo(b, this.b.f)(), this.c = null);
        Ho.S.M.call(this)
    };
    l.Zb = function () {};
    l.vj = function () {
        Ij(this)
    };
    l.re = function (b, c, d) {
        function e(b) {
            var c;
            m(b.a) ? c = b.a.call(b, n) : m(f.r) && (c = (0, f.r)(b, n));
            if (null != c) {
                if (null != c) {
                    var d, e, g = !1;
                    d = 0;
                    for (e = c.length; d < e; ++d) g = An(s, b, c[d], zn(n, p), this.vj, this) || g;
                    b = g
                } else b = !1;
                this.d = this.d || b
            }
        }
        var f = this.a;
        c = f.a();
        Kj(b.attributions, c.e);
        Lj(b, c);
        if (!this.d && (b.viewHints[0] || b.viewHints[1])) return !0;
        var g = b.extent,
            h = b.viewState,
            k = h.projection,
            n = h.resolution,
            p = b.pixelRatio,
            h = f.c,
            q = f.Ab,
            r = f.get("renderOrder");
        m(r) || (r = yn);
        g = Yd(g, q * n);
        if (!this.d && this.r == n && this.t == h && this.p == r && $d(this.j, g)) return !0;
        null === this.c || b.postRenderFunctions.push(jo(this.c, d));
        this.d = !1;
        var s = new io(.5 * n / p, g);
        c.Hb(g, n, k);
        if (null === r) c.Db(g, n, e, this);
        else {
            var v = [];
            c.Db(g, n, function (b) {
                v.push(b)
            }, this);
            gb(v, r);
            Ta(v, e, this)
        }
        ko(s, d);
        this.r = n;
        this.t = h;
        this.p = r;
        this.j = g;
        this.c = s;
        return !0
    };

    function Io() {
        this.b = 0;
        this.d = {};
        this.c = this.a = null
    }
    l = Io.prototype;
    l.clear = function () {
        this.b = 0;
        this.d = {};
        this.c = this.a = null
    };

    function Fo(b, c) {
        return b.d.hasOwnProperty(c)
    }
    l.forEach = function (b, c) {
        for (var d = this.a; null !== d;) b.call(c, d.dc, d.ud, this), d = d.Za
    };
    l.get = function (b) {
        b = this.d[b];
        if (b === this.c) return b.dc;
        b === this.a ? (this.a = this.a.Za, this.a.Mb = null) : (b.Za.Mb = b.Mb, b.Mb.Za = b.Za);
        b.Za = null;
        b.Mb = this.c;
        this.c = this.c.Za = b;
        return b.dc
    };
    l.Ub = function () {
        return this.b
    };
    l.I = function () {
        var b = Array(this.b),
            c = 0,
            d;
        for (d = this.c; null !== d; d = d.Mb) b[c++] = d.ud;
        return b
    };
    l.kb = function () {
        var b = Array(this.b),
            c = 0,
            d;
        for (d = this.c; null !== d; d = d.Mb) b[c++] = d.dc;
        return b
    };
    l.pop = function () {
        var b = this.a;
        delete this.d[b.ud];
        null !== b.Za && (b.Za.Mb = null);
        this.a = b.Za;
        null === this.a && (this.c = null);
        --this.b;
        return b.dc
    };
    l.set = function (b, c) {
        var d = {
            ud: b,
            Za: null,
            Mb: this.c,
            dc: c
        };
        null === this.c ? this.a = d : this.c.Za = d;
        this.c = d;
        this.d[b] = d;
        ++this.b
    };

    function Jo(b, c) {
        this.g = b;
        this.a = c;
        this.c = {};
        this.d = {};
        this.b = {};
        this.f = null;
        (this.e = Za(wa, "OES_element_index_uint")) && c.getExtension("OES_element_index_uint");
        z(this.g, "webglcontextlost", this.lk, !1, this);
        z(this.g, "webglcontextrestored", this.mk, !1, this)
    }

    function go(b, c, d) {
        var e = b.a,
            f = d.a,
            g = ma(d);
        if (g in b.c) e.bindBuffer(c, b.c[g].buffer);
        else {
            var h = e.createBuffer();
            e.bindBuffer(c, h);
            var k;
            34962 == c ? k = new Float32Array(f) : 34963 == c && (k = b.e ? new Uint32Array(f) : new Uint16Array(f));
            e.bufferData(c, k, d.c);
            b.c[g] = {
                b: d,
                buffer: h
            }
        }
    }
    function eo(b, c) {
        var d = b.a,
            e = ma(c),
            f = b.c[e];
        d.isContextLost() || d.deleteBuffer(f.buffer);
        delete b.c[e]
    }
    l = Jo.prototype;
    l.M = function () {
        var b = this.a;
        b.isContextLost() || (ob(this.c, function (c) {
            b.deleteBuffer(c.buffer)
        }), ob(this.b, function (c) {
            b.deleteProgram(c)
        }), ob(this.d, function (c) {
            b.deleteShader(c)
        }))
    };
    l.kk = function () {
        return this.a
    };

    function Ko(b, c) {
        var d = ma(c);
        if (d in b.d) return b.d[d];
        var e = b.a,
            f = e.createShader(c.H());
        e.shaderSource(f, c.a);
        e.compileShader(f);
        return b.d[d] = f
    }

    function ho(b, c, d) {
        var e = ma(c) + "/" + ma(d);
        if (e in b.b) return b.b[e];
        var f = b.a,
            g = f.createProgram();
        f.attachShader(g, Ko(b, c));
        f.attachShader(g, Ko(b, d));
        f.linkProgram(g);
        return b.b[e] = g
    }
    l.lk = function () {
        yb(this.c);
        yb(this.d);
        yb(this.b);
        this.f = null
    };
    l.mk = function () {};
    l.Gd = function (b) {
        if (b == this.f) return !1;
        this.a.useProgram(b);
        this.f = b;
        return !0
    };

    function Lo(b, c) {
        Yj.call(this, 0, c);
        this.a = If("CANVAS");
        this.a.style.width = "100%";
        this.a.style.height = "100%";
        this.a.className = "ol-unselectable";
        Mf(b, this.a, 0);
        this.p = 0;
        this.q = Tf();
        this.n = !0;
        this.d = Zf(this.a, {
            antialias: !0,
            depth: !1,
            bh: !0,
            preserveDrawingBuffer: !1,
            stencil: !0
        });
        this.f = new Jo(this.a, this.d);
        z(this.a, "webglcontextlost", this.tj, !1, this);
        z(this.a, "webglcontextrestored", this.uj, !1, this);
        this.c = new Io;
        this.j = null;
        this.i = new fk(sa(function (b) {
            var c = b[1];
            b = b[2];
            var f = c[0] - this.j[0],
                c = c[1] - this.j[1];
            return 65536 * Math.log(b) + Math.sqrt(f * f + c * c) / b
        }, this), function (b) {
            return b[0].mb()
        });
        this.r = sa(function () {
            if (!this.i.ia()) {
                jk(this.i);
                var b = gk(this.i);
                Go(this, b[0], b[3], b[4])
            }
        }, this);
        this.o = 0;
        Mo(this)
    }
    u(Lo, Yj);

    function Go(b, c, d, e) {
        var f = b.d,
            g = c.mb();
        if (Fo(b.c, g)) b = b.c.get(g), f.bindTexture(3553, b.Qa), 9729 != b.nf && (f.texParameteri(3553, 10240, 9729), b.nf = 9729), 9729 != b.of && (f.texParameteri(3553, 10240, 9729), b.of = 9729);
        else {
            var h = f.createTexture();
            f.bindTexture(3553, h);
            if (0 < e) {
                var k = b.q.canvas,
                    n = b.q;
                b.p != d ? (k.width = d, k.height = d, b.p = d) : n.clearRect(0, 0, d, d);
                n.drawImage(c.Na(), e, e, d, d, 0, 0, d, d);
                f.texImage2D(3553, 0, 6408, 6408, 5121, k)
            } else f.texImage2D(3553, 0, 6408, 6408, 5121, c.Na());
            f.texParameteri(3553, 10240, 9729);
            f.texParameteri(3553,
            10241, 9729);
            f.texParameteri(3553, 10242, 33071);
            f.texParameteri(3553, 10243, 33071);
            b.c.set(g, {
                Qa: h,
                nf: 9729,
                of: 9729
            })
        }
    }
    l = Lo.prototype;
    l.Yc = function (b) {
        return b instanceof J ? new yo(this, b) : b instanceof K ? new Eo(this, b) : b instanceof L ? new Ho(this, b) : null
    };

    function No(b, c, d) {
        var e = b.e;
        if (ld(e, c)) {
            var f = b.f,
                g = d.extent,
                h = d.size,
                k = d.viewState,
                n = d.pixelRatio,
                p = k.resolution,
                q = k.center,
                r = k.rotation,
                k = new no(f, q, p, r, h, g, n),
                g = new io(.5 * p / n, g);
            e.dispatchEvent(new Al(c, e, k, g, d, null, f));
            ko(g, f);
            g.ia() || mo(g, f, q, p, r, h, n, 1, 0, 1, 0, 1, {});
            jo(g, f)();
            c = Va(sb(k.c), Number);
            gb(c);
            d = 0;
            for (e = c.length; d < e; ++d) for (f = k.c[c[d].toString()], h = 0, n = f.length; h < n; ++h) f[h](k);
            b.g = g
        }
    }
    l.M = function () {
        var b = this.d;
        b.isContextLost() || this.c.forEach(function (c) {
            null === c || b.deleteTexture(c.Qa)
        });
        tc(this.f);
        Lo.S.M.call(this)
    };
    l.$g = function (b, c) {
        for (var d = this.d, e; 1024 < this.c.Ub() - this.o;) {
            e = this.c.a.dc;
            if (null === e) if (+this.c.a.ud == c.index) break;
            else --this.o;
            else d.deleteTexture(e.Qa);
            this.c.pop()
        }
    };
    l.H = function () {
        return "webgl"
    };
    l.tj = function (b) {
        b.preventDefault();
        this.c.clear();
        this.o = 0;
        ob(this.b, function (b) {
            b.n()
        })
    };
    l.uj = function () {
        Mo(this);
        this.e.render()
    };

    function Mo(b) {
        b = b.d;
        b.activeTexture(33984);
        b.blendFuncSeparate(770, 771, 1, 771);
        b.disable(2884);
        b.disable(2929);
        b.disable(3089);
        b.disable(2960)
    }
    l.Ld = function (b) {
        var c = this.f,
            d = this.d;
        if (d.isContextLost()) return !1;
        if (null === b) return this.n && (Sg(this.a, !1), this.n = !1), !1;
        this.j = b.focus;
        this.c.set((-b.index).toString(), null);
        ++this.o;
        var e = [],
            f = b.layerStatesArray,
            g = b.viewState.resolution,
            h, k, n, p;
        h = 0;
        for (k = f.length; h < k; ++h) p = f[h], p.visible && g >= p.minResolution && g < p.maxResolution && "ready" == p.gc && (n = dk(this, p.layer), n.re(b, p, c) && e.push(p));
        f = b.size[0] * b.pixelRatio;
        g = b.size[1] * b.pixelRatio;
        if (this.a.width != f || this.a.height != g) this.a.width = f, this.a.height = g;
        d.bindFramebuffer(36160, null);
        d.clearColor(0, 0, 0, 0);
        d.clear(16384);
        d.enable(3042);
        d.viewport(0, 0, this.a.width, this.a.height);
        No(this, "precompose", b);
        h = 0;
        for (k = e.length; h < k; ++h) p = e[h], n = dk(this, p.layer), n.xf(b, p, c);
        this.n || (Sg(this.a, !0), this.n = !0);
        Zj(b);
        1024 < this.c.Ub() - this.o && b.postRenderFunctions.push(sa(this.$g, this));
        this.i.ia() || (b.postRenderFunctions.push(this.r), b.animate = !0);
        No(this, "postcompose", b);
        ek(this, b);
        b.postRenderFunctions.push(ak)
    };
    var Oo = ["canvas", "webgl", "dom"];

    function O(b) {
        td.call(this);
        var c = Po(b);
        this.Yd = m(b.pixelRatio) ? b.pixelRatio : ag;
        this.Xd = c.logos;
        this.q = new Vh(this.Yk, void 0, this);
        sc(this, this.q);
        this.Uc = Kd();
        this.Zd = Kd();
        this.Wd = 0;
        this.d = null;
        this.Ea = Vd();
        this.p = this.Q = null;
        this.b = Ff("DIV", "ol-viewport");
        this.b.style.position = "relative";
        this.b.style.overflow = "hidden";
        this.b.style.width = "100%";
        this.b.style.height = "100%";
        this.b.style.msTouchAction = "none";
        gg && (this.b.className = "ol-touch");
        this.Da = Ff("DIV", "ol-overlaycontainer");
        this.b.appendChild(this.Da);
        this.t = Ff("DIV", "ol-overlaycontainer-stopevent");
        z(this.t, ["click", "dblclick", "mousedown", "touchstart", "MSPointerDown", mj, Ib ? "DOMMouseScroll" : "mousewheel"], vc);
        this.b.appendChild(this.t);
        b = new ej(this);
        z(b, rb(pj), this.gf, !1, this);
        sc(this, b);
        this.ga = c.keyboardEventTarget;
        this.r = new ji;
        z(this.r, "key", this.ef, !1, this);
        sc(this, this.r);
        b = new ri(this.b);
        z(b, "mousewheel", this.ef, !1, this);
        sc(this, b);
        this.i = c.controls;
        this.Vc = c.deviceOptions;
        this.g = c.interactions;
        this.n = c.overlays;
        this.ba = new c.$k(this.b,
        this);
        sc(this, this.ba);
        this.gc = new ei;
        sc(this, this.gc);
        z(this.gc, "resize", this.j, !1, this);
        this.V = null;
        this.F = [];
        this.oa = [];
        this.Ab = new kk(sa(this.Jh, this), sa(this.ri, this));
        this.ca = {};
        z(this, xd("layergroup"), this.ai, !1, this);
        z(this, xd("view"), this.$i, !1, this);
        z(this, xd("size"), this.pi, !1, this);
        z(this, xd("target"), this.qi, !1, this);
        this.G(c.xl);
        this.i.forEach(function (b) {
            b.setMap(this)
        }, this);
        z(this.i, "add", function (b) {
            b.element.setMap(this)
        }, !1, this);
        z(this.i, "remove", function (b) {
            b.element.setMap(null)
        }, !1, this);
        this.g.forEach(function (b) {
            b.setMap(this)
        }, this);
        z(this.g, "add", function (b) {
            b.element.setMap(this)
        }, !1, this);
        z(this.g, "remove", function (b) {
            b.element.setMap(null)
        }, !1, this);
        this.n.forEach(function (b) {
            b.setMap(this)
        }, this);
        z(this.n, "add", function (b) {
            b.element.setMap(this)
        }, !1, this);
        z(this.n, "remove", function (b) {
            b.element.setMap(null)
        }, !1, this)
    }
    u(O, td);
    l = O.prototype;
    l.Qg = function (b) {
        this.i.push(b)
    };
    l.Rg = function (b) {
        this.g.push(b)
    };
    l.Se = function (b) {
        this.Eb().Yb().push(b)
    };
    l.Te = function (b) {
        this.n.push(b)
    };
    l.Ua = function (b) {
        this.render();
        Array.prototype.push.apply(this.F, arguments)
    };
    l.M = function () {
        Nf(this.b);
        O.S.M.call(this)
    };
    l.oe = function (b, c, d, e, f) {
        if (null !== this.d) return b = this.Ga(b), bk(this.ba, b, this.d, c, m(d) ? d : null, m(e) ? e : dd, m(f) ? f : null)
    };
    l.ih = function (b) {
        return this.Ga(this.ad(b))
    };
    l.ad = function (b) {
        if (m(b.offsetX) && m(b.offsetY)) return [b.offsetX, b.offsetY];
        if (m(b.changedTouches)) {
            var c = b.changedTouches[0];
            b = Og(this.b);
            return [c.clientX - b.x, c.clientY - b.y]
        }
        c = this.b;
        b = Og(b);
        c = Og(c);
        c = new vf(b.x - c.x, b.y - c.y);
        return [c.x, c.y]
    };
    l.qc = function () {
        return this.get("target")
    };
    O.prototype.getTarget = O.prototype.qc;
    l = O.prototype;
    l.Fh = function () {
        var b = this.qc();
        return m(b) ? Af(b) : null
    };
    l.Ga = function (b) {
        var c = this.d;
        if (null === c) return null;
        b = b.slice();
        return Xj(c.pixelToCoordinateMatrix, b, b)
    };
    l.hh = function () {
        return this.i
    };
    l.Ah = function () {
        return this.n
    };
    l.oh = function () {
        return this.g
    };
    l.Eb = function () {
        return this.get("layergroup")
    };
    O.prototype.getLayerGroup = O.prototype.Eb;
    O.prototype.ea = function () {
        return this.Eb().Yb()
    };
    O.prototype.f = function (b) {
        var c = this.d;
        if (null === c) return null;
        b = b.slice(0, 2);
        return Xj(c.coordinateToPixelMatrix, b, b)
    };
    O.prototype.e = function () {
        return this.get("size")
    };
    O.prototype.getSize = O.prototype.e;
    O.prototype.a = function () {
        return this.get("view")
    };
    O.prototype.getView = O.prototype.a;
    l = O.prototype;
    l.Lh = function () {
        return this.b
    };
    l.Jh = function (b, c, d, e) {
        var f = this.d;
        if (!(null !== f && c in f.wantedTiles && f.wantedTiles[c][nf(b.a)])) return Infinity;
        b = d[0] - f.focus[0];
        d = d[1] - f.focus[1];
        return 65536 * Math.log(e) + Math.sqrt(b * b + d * d) / e
    };
    l.ef = function (b, c) {
        var d = new cj(c || b.type, this, b);
        this.gf(d)
    };
    l.gf = function (b) {
        if (null !== this.d) {
            this.V = b.coordinate;
            b.frameState = this.d;
            var c = this.g.a,
                d;
            if (!1 !== this.dispatchEvent(b)) for (d = c.length - 1; 0 <= d; d--) {
                var e = c[d];
                if (e.a() && !e.handleEvent(b)) break
            }
        }
    };
    l.ni = function () {
        var b = this.d,
            c = this.Ab;
        if (!c.ia()) {
            var d = 16,
                e = d,
                f = 0;
            if (null !== b) {
                var f = b.viewHints,
                    g = this.Vc;
                f[0] && (d = !1 === g.loadTilesWhileAnimating ? 0 : 8, e = 2);
                f[1] && (d = !1 === g.loadTilesWhileInteracting ? 0 : 8, e = 2);
                f = qb(b.wantedTiles)
            }
            d *= f;
            e *= f;
            if (c.d < d) {
                jk(c);
                d = Math.min(d - c.d, e, c.Ub());
                for (e = 0; e < d; ++e) f = gk(c)[0], Wc(f, "change", c.g, !1, c), f.load();
                c.d += d
            }
        }
        c = this.oa;
        d = 0;
        for (e = c.length; d < e; ++d) c[d](this, b);
        c.length = 0
    };
    l.pi = function () {
        this.render()
    };
    l.qi = function () {
        var b = this.qc(),
            b = m(b) ? Af(b) : null;
        qi(this.r);
        null === b ? Nf(this.b) : (b.appendChild(this.b), ki(this.r, null === this.ga ? b : this.ga));
        this.j()
    };
    l.ri = function () {
        this.render()
    };
    l.si = function () {
        this.render()
    };
    l.$i = function () {
        null !== this.Q && (Yc(this.Q), this.Q = null);
        var b = this.a();
        null !== b && (this.Q = z(b, "propertychange", this.si, !1, this));
        this.render()
    };
    l.bi = function () {
        this.render()
    };
    l.ci = function () {
        this.render()
    };
    l.ai = function () {
        if (null !== this.p) {
            for (var b = this.p.length, c = 0; c < b; ++c) Yc(this.p[c]);
            this.p = null
        }
        b = this.Eb();
        null != b && (this.p = [z(b, "propertychange", this.ci, !1, this), z(b, "change", this.bi, !1, this)]);
        this.render()
    };
    l.Zk = function () {
        var b = this.q;
        Wh(b);
        b.Ye()
    };
    l.render = function () {
        null != this.q.X || this.q.start()
    };
    l.Uk = function (b) {
        if (m(this.i.remove(b))) return b
    };
    l.Vk = function (b) {
        var c;
        m(this.g.remove(b)) && (c = b);
        return c
    };
    l.Wk = function (b) {
        return this.Eb().Yb().remove(b)
    };
    l.Xk = function (b) {
        if (m(this.n.remove(b))) return b
    };
    l.Yk = function (b) {
        var c, d, e, f = this.e(),
            g = this.a(),
            h = null;
        if (m(f) && 0 < f[0] && 0 < f[1] && null !== g && af(g)) {
            var h = cb(g.j),
                k = this.Eb().Da(),
                n = {};
            c = 0;
            for (d = k.length; c < d; ++c) n[ma(k[c].layer)] = k[c];
            e = $e(g);
            h = {
                animate: !1,
                attributions: {},
                coordinateToPixelMatrix: this.Uc,
                extent: null,
                focus: null === this.V ? e.center : this.V,
                index: this.Wd++,
                layerStates: n,
                layerStatesArray: k,
                logos: Cb(this.Xd),
                pixelRatio: this.Yd,
                pixelToCoordinateMatrix: this.Zd,
                postRenderFunctions: [],
                size: f,
                skippedFeatureUids: this.ca,
                tileQueue: this.Ab,
                time: b,
                usedTiles: {},
                viewState: e,
                viewHints: h,
                wantedTiles: {}
            }
        }
        if (null !== h) {
            b = this.F;
            c = f = 0;
            for (d = b.length; c < d; ++c) g = b[c], g(this, h) && (b[f++] = g);
            b.length = f;
            h.extent = ne(e.center, e.resolution, e.rotation, h.size)
        }
        this.d = h;
        this.ba.Ld(h);
        null !== h && (h.animate && this.render(), Array.prototype.push.apply(this.oa, h.postRenderFunctions), 0 !== this.F.length || h.viewHints[0] || h.viewHints[1] || de(h.extent, this.Ea) || (this.dispatchEvent(new Zg("moveend", this, h)), c = h.extent, d = this.Ea, m(d) && (d[0] = c[0], d[1] = c[1], d[2] = c[2], d[3] = c[3])));
        this.dispatchEvent(new Zg("postrender", this, h));
        $h(this.ni, this)
    };
    l.cg = function (b) {
        this.set("layergroup", b)
    };
    O.prototype.setLayerGroup = O.prototype.cg;
    O.prototype.J = function (b) {
        this.set("size", b)
    };
    O.prototype.setSize = O.prototype.J;
    O.prototype.qa = function (b) {
        this.set("target", b)
    };
    O.prototype.setTarget = O.prototype.qa;
    O.prototype.Ta = function (b) {
        this.set("view", b)
    };
    O.prototype.setView = O.prototype.Ta;
    O.prototype.eb = function (b) {
        b = ma(b).toString();
        this.ca[b] = !0;
        this.render()
    };
    O.prototype.j = function () {
        var b = this.qc(),
            b = m(b) ? Af(b) : null;
        if (null === b) this.J(void 0);
        else {
            var c = zf(b),
                d = Hb && b.currentStyle;
            d && Rf(xf(c)) && "auto" != d.width && "auto" != d.height && !d.boxSizing ? (c = Tg(b, d.width, "width", "pixelWidth"), b = Tg(b, d.height, "height", "pixelHeight"), b = new wf(c, b)) : (d = new wf(b.offsetWidth, b.offsetHeight), c = Vg(b, "padding"), b = Yg(b), b = new wf(d.width - b.left - c.left - c.right - b.right, d.height - b.top - c.top - c.bottom - b.bottom));
            this.J([b.width, b.height])
        }
    };
    O.prototype.fc = function (b) {
        b = ma(b).toString();
        delete this.ca[b];
        this.render()
    };

    function Po(b) {
        var c = null;
        m(b.keyboardEventTarget) && (c = ia(b.keyboardEventTarget) ? document.getElementById(b.keyboardEventTarget) : b.keyboardEventTarget);
        var d = {}, e = {};
        if (!m(b.logo) || "boolean" == typeof b.logo && b.logo) e["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAHGAAABxgEXwfpGAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhNQTFRF////AP//AICAgP//AFVVQECA////K1VVSbbbYL/fJ05idsTYJFtbbcjbJllmZszWWMTOIFhoHlNiZszTa9DdUcHNHlNlV8XRIVdiasrUHlZjIVZjaMnVH1RlIFRkH1RkH1ZlasvYasvXVsPQH1VkacnVa8vWIVZjIFRjVMPQa8rXIVVkXsXRsNveIFVkIFZlIVVj3eDeh6GmbMvXH1ZkIFRka8rWbMvXIFVkIFVjIFVkbMvWH1VjbMvWIFVlbcvWIFVla8vVIFVkbMvWbMvVH1VkbMvWIFVlbcvWIFVkbcvVbMvWjNPbIFVkU8LPwMzNIFVkbczWIFVkbsvWbMvXIFVkRnB8bcvW2+TkW8XRIFVkIlZlJVloJlpoKlxrLl9tMmJwOWd0Omh1RXF8TneCT3iDUHiDU8LPVMLPVcLPVcPQVsPPVsPQV8PQWMTQWsTQW8TQXMXSXsXRX4SNX8bSYMfTYcfTYsfTY8jUZcfSZsnUaIqTacrVasrVa8jTa8rWbI2VbMvWbcvWdJObdcvUdszUd8vVeJaee87Yfc3WgJyjhqGnitDYjaarldPZnrK2oNbborW5o9bbo9fbpLa6q9ndrL3ArtndscDDutzfu8fJwN7gwt7gxc/QyuHhy+HizeHi0NfX0+Pj19zb1+Tj2uXk29/e3uLg3+Lh3+bl4uXj4ufl4+fl5Ofl5ufl5ujm5+jmySDnBAAAAFp0Uk5TAAECAgMEBAYHCA0NDg4UGRogIiMmKSssLzU7PkJJT1JTVFliY2hrdHZ3foSFhYeJjY2QkpugqbG1tre5w8zQ09XY3uXn6+zx8vT09vf4+Pj5+fr6/P39/f3+gz7SsAAAAVVJREFUOMtjYKA7EBDnwCPLrObS1BRiLoJLnte6CQy8FLHLCzs2QUG4FjZ5GbcmBDDjxJBXDWxCBrb8aM4zbkIDzpLYnAcE9VXlJSWlZRU13koIeW57mGx5XjoMZEUqwxWYQaQbSzLSkYGfKFSe0QMsX5WbjgY0YS4MBplemI4BdGBW+DQ11eZiymfqQuXZIjqwyadPNoSZ4L+0FVM6e+oGI6g8a9iKNT3o8kVzNkzRg5lgl7p4wyRUL9Yt2jAxVh6mQCogae6GmflI8p0r13VFWTHBQ0rWPW7ahgWVcPm+9cuLoyy4kCJDzCm6d8PSFoh0zvQNC5OjDJhQopPPJqph1doJBUD5tnkbZiUEqaCnB3bTqLTFG1bPn71kw4b+GFdpLElKIzRxxgYgWNYc5SCENVHKeUaltHdXx0dZ8uBI1hJ2UUDgq82CM2MwKeibqAvSO7MCABq0wXEPiqWEAAAAAElFTkSuQmCC"] = "http://openlayers.org/";
        else {
            var f = b.logo;
            ia(f) ? e[f] = "" : la(f) && (e[f.src] = f.href)
        }
        f = b.layers instanceof I ? b.layers : new I({
            layers: b.layers
        });
        d.layergroup = f;
        d.target = b.target;
        d.view = m(b.view) ? b.view : new A;
        var f = Yj,
            g;
        m(b.renderer) ? ga(b.renderer) ? g = b.renderer : ia(b.renderer) && (g = [b.renderer]) : g = Oo;
        var h, k;
        h = 0;
        for (k = g.length; h < k; ++h) {
            var n = g[h];
            if ("canvas" == n) {
                if (dg) {
                    f = En;
                    break
                }
            } else if ("dom" == n) {
                f = Qn;
                break
            } else if ("webgl" == n && $f) {
                f = Lo;
                break
            }
        }
        var p;
        m(b.controls) ? p = ga(b.controls) ? new B(cb(b.controls)) : b.controls : p = gh();
        g = m(b.deviceOptions) ? b.deviceOptions : {};
        var q;
        m(b.interactions) ? q = ga(b.interactions) ? new B(cb(b.interactions)) : b.interactions : q = mm();
        b = m(b.overlays) ? ga(b.overlays) ? new B(cb(b.overlays)) : b.overlays : new B;
        return {
            controls: p,
            deviceOptions: g,
            interactions: q,
            keyboardEventTarget: c,
            logos: e,
            overlays: b,
            $k: f,
            xl: d
        }
    }
    tm();

    function P(b) {
        td.call(this);
        this.q = m(b.insertFirst) ? b.insertFirst : !0;
        this.r = m(b.stopEvent) ? b.stopEvent : !0;
        this.aa = If("DIV");
        this.aa.style.position = "absolute";
        this.a = {
            Wc: "",
            vd: "",
            Md: "",
            Nd: "",
            visible: !0
        };
        this.b = null;
        z(this, xd("element"), this.Uh, !1, this);
        z(this, xd("map"), this.hi, !1, this);
        z(this, xd("offset"), this.ji, !1, this);
        z(this, xd("position"), this.li, !1, this);
        z(this, xd("positioning"), this.mi, !1, this);
        m(b.element) && this.Ee(b.element);
        this.j(m(b.offset) ? b.offset : [0, 0]);
        this.p(m(b.positioning) ? b.positioning :
            "top-left");
        m(b.position) && this.f(b.position)
    }
    u(P, td);
    P.prototype.d = function () {
        return this.get("element")
    };
    P.prototype.getElement = P.prototype.d;
    P.prototype.e = function () {
        return this.get("map")
    };
    P.prototype.getMap = P.prototype.e;
    P.prototype.g = function () {
        return this.get("offset")
    };
    P.prototype.getOffset = P.prototype.g;
    P.prototype.n = function () {
        return this.get("position")
    };
    P.prototype.getPosition = P.prototype.n;
    P.prototype.i = function () {
        return this.get("positioning")
    };
    P.prototype.getPositioning = P.prototype.i;
    l = P.prototype;
    l.Uh = function () {
        Kf(this.aa);
        var b = this.d();
        null != b && Jf(this.aa, b)
    };
    l.hi = function () {
        null !== this.b && (Nf(this.aa), Yc(this.b), this.b = null);
        var b = this.e();
        null != b && (this.b = z(b, "postrender", this.render, !1, this), Qo(this), b = this.r ? b.t : b.Da, this.q ? Mf(b, this.aa, 0) : Jf(b, this.aa))
    };
    l.render = function () {
        Qo(this)
    };
    l.ji = function () {
        Qo(this)
    };
    l.li = function () {
        Qo(this)
    };
    l.mi = function () {
        Qo(this)
    };
    l.Ee = function (b) {
        this.set("element", b)
    };
    P.prototype.setElement = P.prototype.Ee;
    P.prototype.setMap = function (b) {
        this.set("map", b)
    };
    P.prototype.setMap = P.prototype.setMap;
    P.prototype.j = function (b) {
        this.set("offset", b)
    };
    P.prototype.setOffset = P.prototype.j;
    P.prototype.f = function (b) {
        this.set("position", b)
    };
    P.prototype.setPosition = P.prototype.f;
    P.prototype.p = function (b) {
        this.set("positioning", b)
    };
    P.prototype.setPositioning = P.prototype.p;

    function Qo(b) {
        var c = b.e(),
            d = b.n();
        if (m(c) && null !== c.d && m(d)) {
            var d = c.f(d),
                e = c.e(),
                c = b.aa.style,
                f = b.g(),
                g = b.i(),
                h = f[0],
                f = f[1];
            if ("bottom-right" == g || "center-right" == g || "top-right" == g) "" !== b.a.vd && (b.a.vd = c.left = ""), h = Math.round(e[0] - d[0] - h) + "px", b.a.Md != h && (b.a.Md = c.right = h);
            else {
                "" !== b.a.Md && (b.a.Md = c.right = "");
                if ("bottom-center" == g || "center-center" == g || "top-center" == g) h -= Qg(b.aa).width / 2;
                h = Math.round(d[0] + h) + "px";
                b.a.vd != h && (b.a.vd = c.left = h)
            }
            if ("bottom-left" == g || "bottom-center" == g || "bottom-right" == g) "" !== b.a.Nd && (b.a.Nd = c.top = ""), d = Math.round(e[1] - d[1] - f) + "px", b.a.Wc != d && (b.a.Wc = c.bottom = d);
            else {
                "" !== b.a.Wc && (b.a.Wc = c.bottom = "");
                if ("center-left" == g || "center-center" == g || "center-right" == g) f -= Qg(b.aa).height / 2;
                d = Math.round(d[1] + f) + "px";
                b.a.Nd != d && (b.a.Nd = c.top = d)
            }
            b.a.visible || (Sg(b.aa, !0), b.a.visible = !0)
        } else b.a.visible && (Sg(b.aa, !1), b.a.visible = !1)
    };

    function Ro(b) {
        b = m(b) ? b : {};
        this.e = m(b.collapsed) ? b.collapsed : !0;
        this.f = m(b.collapsible) ? b.collapsible : !0;
        this.f || (this.e = !1);
        var c = m(b.className) ? b.className : "ol-overviewmap",
            d = m(b.tipLabel) ? b.tipLabel : "Overview map";
        this.j = m(b.collapseLabel) ? b.collapseLabel : "\u00ab";
        this.q = m(b.label) ? b.label : "\u00bb";
        this.p = Ff("SPAN", {}, this.f && !this.e ? this.j : this.q);
        d = Ff("BUTTON", {
            type: "button",
            title: d
        }, this.p);
        z(d, "click", this.hj, !1, this);
        z(d, ["mouseout", xc], function () {
            this.blur()
        }, !1);
        var e = Ff("DIV", "ol-overviewmap-map"),
            f = this.b = new O({
                controls: new B,
                interactions: new B,
                target: e
            });
        m(b.layers) && b.layers.forEach(function (b) {
            f.Se(b)
        }, this);
        var g = Ff("DIV", "ol-overviewmap-box");
        this.g = new P({
            position: [0, 0],
            positioning: "bottom-left",
            element: g
        });
        this.b.Te(this.g);
        c = Ff("DIV", c + " ol-unselectable ol-control" + (this.e && this.f ? " ol-collapsed" : "") + (this.f ? "" : " ol-uncollapsible"), e, d);
        $g.call(this, {
            element: c,
            render: m(b.render) ? b.render : So,
            target: b.target
        })
    }
    u(Ro, $g);
    l = Ro.prototype;
    l.setMap = function (b) {
        var c = this.a;
        null === b && null !== c && Xc(c, xd("view"), this.uf, !1, this);
        Ro.S.setMap.call(this, b);
        null !== b && (0 === this.b.ea().Ib() && this.b.O("layergroup", b), To(this), z(b, xd("view"), this.uf, !1, this), this.b.j(), Uo(this))
    };

    function To(b) {
        var c = b.a.a();
        null === c || b.b.a().O("rotation", c)
    }

    function So() {
        var b = this.a,
            c = this.b;
        if (null !== b.d && null !== c.d) {
            var d = b.e(),
                b = b.a().g(d),
                e = c.e(),
                d = c.a().g(e),
                f = c.f(me(b)),
                c = c.f(ie(b)),
                c = new wf(Math.abs(f[0] - c[0]), Math.abs(f[1] - c[1])),
                f = e[0],
                e = e[1];
            c.width < .1 * f || c.height < .1 * e || c.width > .75 * f || c.height > .75 * e ? Uo(this) : $d(d, b) || (b = this.b, d = this.a.a(), b.a().Oa(d.a()))
        }
        Vo(this)
    }
    l.uf = function () {
        To(this)
    };

    function Uo(b) {
        var c = b.a;
        b = b.b;
        var d = c.e(),
            c = c.a().g(d),
            d = b.e();
        b = b.a();
        var e = Math.log(7.5) / Math.LN2;
        ue(c, 1 / (.1 * Math.pow(2, e / 2)));
        b.ge(c, d)
    }

    function Vo(b) {
        var c = b.a,
            d = b.b;
        if (null !== c.d && null !== d.d) {
            var e = c.e(),
                f = c.a(),
                g = d.a();
            d.e();
            var c = f.e(),
                h = b.g,
                d = b.g.d(),
                f = f.g(e),
                e = g.b(),
                g = he(f),
                f = je(f),
                k;
            b = b.a.a().a();
            m(b) && (k = [g[0] - b[0], g[1] - b[1]], Dd(k, c), yd(k, b));
            h.f(k);
            null != d && (k = new wf(Math.abs((g[0] - f[0]) / e), Math.abs((f[1] - g[1]) / e)), c = Rf(xf(zf(d))), !Hb || Tb("10") || c && Tb("8") ? (d = d.style, Ib ? d.MozBoxSizing = "border-box" : Jb ? d.WebkitBoxSizing = "border-box" : d.boxSizing = "border-box", d.width = Math.max(k.width, 0) + "px", d.height = Math.max(k.height, 0) + "px") : (b = d.style, c ? (c = Vg(d, "padding"), d = Yg(d), b.pixelWidth = k.width - d.left - c.left - c.right - d.right, b.pixelHeight = k.height - d.top - c.top - c.bottom - d.bottom) : (b.pixelWidth = k.width, b.pixelHeight = k.height)))
        }
    }
    l.hj = function (b) {
        b.preventDefault();
        Wo(this)
    };

    function Wo(b) {
        Eg(b.element, "ol-collapsed");
        Qf(b.p, b.e ? b.j : b.q);
        b.e = !b.e;
        var c = b.b;
        b.e || null !== c.d || (c.j(), Uo(b), Wc(c, "postrender", function () {
            Vo(this)
        }, !1, b))
    }
    l.gj = function () {
        return this.f
    };
    l.jj = function (b) {
        this.f !== b && (this.f = b, Eg(this.element, "ol-uncollapsible"), !b && this.e && Wo(this))
    };
    l.ij = function (b) {
        this.f && this.e !== b && Wo(this)
    };
    l.fj = function () {
        return this.e
    };

    function Xo(b) {
        b = m(b) ? b : {};
        var c = m(b.className) ? b.className : "ol-scale-line";
        this.f = Ff("DIV", c + "-inner");
        this.aa = Ff("DIV", c + " ol-unselectable", this.f);
        this.q = null;
        this.g = m(b.minWidth) ? b.minWidth : 64;
        this.b = !1;
        this.t = void 0;
        this.r = "";
        this.e = null;
        $g.call(this, {
            element: this.aa,
            render: m(b.render) ? b.render : Yo,
            target: b.target
        });
        z(this, xd("units"), this.F, !1, this);
        this.p(b.units || "metric")
    }
    u(Xo, $g);
    var Zo = [1, 2, 5];
    Xo.prototype.j = function () {
        return this.get("units")
    };
    Xo.prototype.getUnits = Xo.prototype.j;

    function Yo(b) {
        b = b.frameState;
        null === b ? this.q = null : this.q = b.viewState;
        $o(this)
    }
    Xo.prototype.F = function () {
        $o(this)
    };
    Xo.prototype.p = function (b) {
        this.set("units", b)
    };
    Xo.prototype.setUnits = Xo.prototype.p;

    function $o(b) {
        var c = b.q;
        if (null === c) b.b && (Sg(b.aa, !1), b.b = !1);
        else {
            var d = c.center,
                e = c.projection,
                c = e.je(c.resolution, d),
                f = e.c,
                g = b.j();
            "degrees" != f || "metric" != g && "imperial" != g && "us" != g && "nautical" != g ? "ft" != f && "m" != f || "degrees" != g ? b.e = null : (null === b.e && (b.e = De(e, Ee("EPSG:4326"))), d = Math.cos(bc(b.e(d)[1])), e = ze.radius, "ft" == f && (e /= .3048), c *= 180 / (Math.PI * d * e)) : (b.e = null, d = Math.cos(bc(d[1])), c *= Math.PI * d * ze.radius / 180);
            d = b.g * c;
            f = "";
            "degrees" == g ? d < 1 / 60 ? (f = "\u2033", c *= 3600) : 1 > d ? (f = "\u2032", c *= 60) : f = "\u00b0" :
                "imperial" == g ? .9144 > d ? (f = "in", c /= .0254) : 1609.344 > d ? (f = "ft", c /= .3048) : (f = "mi", c /= 1609.344) : "nautical" == g ? (c /= 1852, f = "nm") : "metric" == g ? 1 > d ? (f = "mm", c *= 1E3) : 1E3 > d ? f = "m" : (f = "km", c /= 1E3) : "us" == g && (.9144 > d ? (f = "in", c *= 39.37) : 1609.344 > d ? (f = "ft", c /= .30480061) : (f = "mi", c /= 1609.3472));
            for (d = 3 * Math.floor(Math.log(b.g * c) / Math.log(10));;) {
                e = Zo[d % 3] * Math.pow(10, Math.floor(d / 3));
                g = Math.round(e / c);
                if (isNaN(g)) {
                    Sg(b.aa, !1);
                    b.b = !1;
                    return
                }
                if (g >= b.g) break;
                ++d
            }
            c = e + f;
            b.r != c && (b.f.innerHTML = c, b.r = c);
            b.t != g && (b.f.style.width = g + "px", b.t = g);
            b.b || (Sg(b.aa, !0), b.b = !0)
        }
    };

    function ap(b) {
        pc.call(this);
        this.c = b;
        this.a = {}
    }
    u(ap, pc);
    var bp = [];
    ap.prototype.La = function (b, c, d, e) {
        ga(c) || (c && (bp[0] = c.toString()), c = bp);
        for (var f = 0; f < c.length; f++) {
            var g = z(b, c[f], d || this.handleEvent, e || !1, this.c || this);
            if (!g) break;
            this.a[g.key] = g
        }
        return this
    };
    ap.prototype.Fe = function (b, c, d, e, f) {
        if (ga(c)) for (var g = 0; g < c.length; g++) this.Fe(b, c[g], d, e, f);
        else d = d || this.handleEvent, f = f || this.c || this, d = Qc(d), e = !! e, c = Ec(b) ? Lc(b.gb, String(c), d, e, f) : b ? (b = Sc(b)) ? Lc(b, c, d, e, f) : null : null, c && (Yc(c), delete this.a[c.key]);
        return this
    };

    function cp(b) {
        ob(b.a, Yc);
        b.a = {}
    }
    ap.prototype.M = function () {
        ap.S.M.call(this);
        cp(this)
    };
    ap.prototype.handleEvent = function () {
        throw Error("EventHandler.handleEvent not implemented");
    };

    function dp(b, c, d) {
        jd.call(this);
        this.target = b;
        this.handle = c || b;
        this.a = d || new Gg(NaN, NaN, NaN, NaN);
        this.b = zf(b);
        this.c = new ap(this);
        sc(this, this.c);
        z(this.handle, ["touchstart", "mousedown"], this.df, !1, this)
    }
    u(dp, jd);
    var ep = Hb || Ib && Tb("1.9.3");
    l = dp.prototype;
    l.clientX = 0;
    l.clientY = 0;
    l.screenX = 0;
    l.screenY = 0;
    l.dg = 0;
    l.eg = 0;
    l.nc = 0;
    l.oc = 0;
    l.Rb = !1;
    l.M = function () {
        dp.S.M.call(this);
        Xc(this.handle, ["touchstart", "mousedown"], this.df, !1, this);
        cp(this.c);
        ep && this.b.releaseCapture();
        this.handle = this.target = null
    };
    l.df = function (b) {
        var c = "mousedown" == b.type;
        if (this.Rb || c && !Cc(b)) this.dispatchEvent("earlycancel");
        else if (fp(b), this.dispatchEvent(new gp("start", this, b.clientX, b.clientY))) {
            this.Rb = !0;
            b.preventDefault();
            var c = this.b,
                d = c.documentElement,
                e = !ep;
            this.c.La(c, ["touchmove", "mousemove"], this.ii, e);
            this.c.La(c, ["touchend", "mouseup"], this.od, e);
            ep ? (d.setCapture(!1), this.c.La(d, "losecapture", this.od)) : this.c.La(c ? c.parentWindow || c.defaultView : window, "blur", this.od);
            this.e && this.c.La(this.e, "scroll", this.sk,
            e);
            this.clientX = this.dg = b.clientX;
            this.clientY = this.eg = b.clientY;
            this.screenX = b.screenX;
            this.screenY = b.screenY;
            this.nc = this.target.offsetLeft;
            this.oc = this.target.offsetTop;
            this.d = Sf(xf(this.b));
            ua()
        }
    };
    l.od = function (b) {
        cp(this.c);
        ep && this.b.releaseCapture();
        if (this.Rb) {
            fp(b);
            this.Rb = !1;
            var c = hp(this, this.nc),
                d = ip(this, this.oc);
            this.dispatchEvent(new gp("end", this, b.clientX, b.clientY, 0, c, d))
        } else this.dispatchEvent("earlycancel")
    };

    function fp(b) {
        var c = b.type;
        "touchstart" == c || "touchmove" == c ? Ac(b, b.a.targetTouches[0], b.b) : "touchend" != c && "touchcancel" != c || Ac(b, b.a.changedTouches[0], b.b)
    }
    l.ii = function (b) {
        fp(b);
        var c = 1 * (b.clientX - this.clientX),
            d = b.clientY - this.clientY;
        this.clientX = b.clientX;
        this.clientY = b.clientY;
        this.screenX = b.screenX;
        this.screenY = b.screenY;
        if (!this.Rb) {
            var e = this.dg - this.clientX,
                f = this.eg - this.clientY;
            if (0 < e * e + f * f) if (this.dispatchEvent(new gp("start", this, b.clientX, b.clientY))) this.Rb = !0;
            else {
                this.Sa || this.od(b);
                return
            }
        }
        d = jp(this, c, d);
        c = d.x;
        d = d.y;
        this.Rb && this.dispatchEvent(new gp("beforedrag", this, b.clientX, b.clientY, 0, c, d)) && (kp(this, b, c, d), b.preventDefault())
    };

    function jp(b, c, d) {
        var e = Sf(xf(b.b));
        c += e.x - b.d.x;
        d += e.y - b.d.y;
        b.d = e;
        b.nc += c;
        b.oc += d;
        c = hp(b, b.nc);
        b = ip(b, b.oc);
        return new vf(c, b)
    }
    l.sk = function (b) {
        var c = jp(this, 0, 0);
        b.clientX = this.clientX;
        b.clientY = this.clientY;
        kp(this, b, c.x, c.y)
    };

    function kp(b, c, d, e) {
        b.target.style.left = d + "px";
        b.target.style.top = e + "px";
        b.dispatchEvent(new gp("drag", b, c.clientX, c.clientY, 0, d, e))
    }

    function hp(b, c) {
        var d = b.a,
            e = isNaN(d.left) ? null : d.left,
            d = isNaN(d.width) ? 0 : d.width;
        return Math.min(null != e ? e + d : Infinity, Math.max(null != e ? e : -Infinity, c))
    }
    function ip(b, c) {
        var d = b.a,
            e = isNaN(d.top) ? null : d.top,
            d = isNaN(d.height) ? 0 : d.height;
        return Math.min(null != e ? e + d : Infinity, Math.max(null != e ? e : -Infinity, c))
    }
    function gp(b, c, d, e, f, g, h) {
        uc.call(this, b);
        this.clientX = d;
        this.clientY = e;
        this.left = m(g) ? g : c.nc;
        this.top = m(h) ? h : c.oc
    }
    u(gp, uc);

    function lp(b) {
        b = m(b) ? b : {};
        this.e = void 0;
        this.f = mp;
        this.g = null;
        this.j = !1;
        var c = m(b.className) ? b.className : "ol-zoomslider",
            d = Ff("DIV", [c + "-thumb", "ol-unselectable"]),
            c = Ff("DIV", [c, "ol-unselectable", "ol-control"], d);
        this.b = new dp(d);
        sc(this, this.b);
        z(this.b, "start", this.Th, !1, this);
        z(this.b, "drag", this.Rh, !1, this);
        z(this.b, "end", this.Sh, !1, this);
        z(c, "click", this.Qh, !1, this);
        z(d, "click", vc);
        $g.call(this, {
            element: c,
            render: m(b.render) ? b.render : np
        })
    }
    u(lp, $g);
    var mp = 0;
    l = lp.prototype;
    l.setMap = function (b) {
        lp.S.setMap.call(this, b);
        null === b || b.render()
    };

    function np(b) {
        if (null !== b.frameState) {
            if (!this.j) {
                var c = this.element,
                    d = Qg(c),
                    e = Of(c),
                    c = Vg(e, "margin"),
                    f = new wf(e.offsetWidth, e.offsetHeight),
                    e = f.width + c.right + c.left,
                    c = f.height + c.top + c.bottom;
                this.g = [e, c];
                e = d.width - e;
                c = d.height - c;
                d.width > d.height ? (this.f = 1, d = new Gg(0, 0, e, 0)) : (this.f = mp, d = new Gg(0, 0, 0, c));
                this.b.a = d || new Gg(NaN, NaN, NaN, NaN);
                this.j = !0
            }
            b = b.frameState.viewState.resolution;
            b !== this.e && (this.e = b, b = 1 - Ze(this.a.a())(b), d = this.b, c = Of(this.element), 1 == this.f ? Kg(c, d.a.left + d.a.width * b) : Kg(c,
            d.a.left, d.a.top + d.a.height * b))
        }
    }
    l.Qh = function (b) {
        var c = this.a,
            d = c.a(),
            e = d.b();
        c.Ua(jf({
            resolution: e,
            duration: 200,
            easing: cf
        }));
        b = op(this, b.offsetX - this.g[0] / 2, b.offsetY - this.g[1] / 2);
        b = pp(this, b);
        d.d(d.constrainResolution(b))
    };
    l.Th = function () {
        bf(this.a.a(), 1)
    };
    l.Rh = function (b) {
        b = op(this, b.left, b.top);
        this.e = pp(this, b);
        this.a.a().d(this.e)
    };
    l.Sh = function () {
        var b = this.a,
            c = b.a();
        bf(c, -1);
        b.Ua(jf({
            resolution: this.e,
            duration: 200,
            easing: cf
        }));
        b = c.constrainResolution(this.e);
        c.d(b)
    };

    function op(b, c, d) {
        var e = b.b.a;
        return Yb(1 === b.f ? (c - e.left) / e.width : (d - e.top) / e.height, 0, 1)
    }
    function pp(b, c) {
        return Ye(b.a.a())(1 - c)
    };

    function qp(b) {
        b = m(b) ? b : {};
        this.b = m(b.extent) ? b.extent : null;
        var c = m(b.className) ? b.className : "ol-zoom-extent",
            d = Ff("BUTTON", {
                type: "button",
                title: m(b.tipLabel) ? b.tipLabel : "Fit to extent"
            });
        z(d, "click", this.e, !1, this);
        z(d, ["mouseout", xc], function () {
            this.blur()
        }, !1);
        c = Ff("DIV", c + " ol-unselectable ol-control", d);
        $g.call(this, {
            element: c,
            target: b.target
        })
    }
    u(qp, $g);
    qp.prototype.e = function (b) {
        b.preventDefault();
        var c = this.a;
        b = c.a();
        var d = null === this.b ? b.q.D() : this.b,
            c = c.e();
        b.ge(d, c)
    };

    function Q(b) {
        td.call(this);
        b = m(b) ? b : {};
        this.a = null;
        z(this, xd("tracking"), this.n, !1, this);
        this.b(m(b.tracking) ? b.tracking : !1)
    }
    u(Q, td);
    Q.prototype.M = function () {
        this.b(!1);
        Q.S.M.call(this)
    };
    Q.prototype.j = function (b) {
        b = b.a;
        if (null != b.alpha) {
            var c = bc(b.alpha);
            this.set("alpha", c);
            "boolean" == typeof b.absolute && b.absolute ? this.set("heading", c) : null != b.webkitCompassHeading && null != b.webkitCompassAccuracy && -1 != b.webkitCompassAccuracy && this.set("heading", bc(b.webkitCompassHeading))
        }
        null != b.beta && this.set("beta", bc(b.beta));
        null != b.gamma && this.set("gamma", bc(b.gamma));
        this.l()
    };
    Q.prototype.e = function () {
        return this.get("alpha")
    };
    Q.prototype.getAlpha = Q.prototype.e;
    Q.prototype.f = function () {
        return this.get("beta")
    };
    Q.prototype.getBeta = Q.prototype.f;
    Q.prototype.g = function () {
        return this.get("gamma")
    };
    Q.prototype.getGamma = Q.prototype.g;
    Q.prototype.i = function () {
        return this.get("heading")
    };
    Q.prototype.getHeading = Q.prototype.i;
    Q.prototype.d = function () {
        return this.get("tracking")
    };
    Q.prototype.getTracking = Q.prototype.d;
    Q.prototype.n = function () {
        if (eg) {
            var b = this.d();
            b && null === this.a ? this.a = z(ba, "deviceorientation", this.j, !1, this) : b || null === this.a || (Yc(this.a), this.a = null)
        }
    };
    Q.prototype.b = function (b) {
        this.set("tracking", b)
    };
    Q.prototype.setTracking = Q.prototype.b;

    function rp(b) {
        td.call(this);
        this.i = b;
        z(this.i, ["change", "input"], this.g, !1, this);
        z(this, xd("value"), this.n, !1, this);
        z(this, xd("checked"), this.f, !1, this)
    }
    u(rp, td);
    rp.prototype.a = function () {
        return this.get("checked")
    };
    rp.prototype.getChecked = rp.prototype.a;
    rp.prototype.b = function () {
        return this.get("value")
    };
    rp.prototype.getValue = rp.prototype.b;
    rp.prototype.e = function (b) {
        this.set("value", b)
    };
    rp.prototype.setValue = rp.prototype.e;
    rp.prototype.d = function (b) {
        this.set("checked", b)
    };
    rp.prototype.setChecked = rp.prototype.d;
    rp.prototype.g = function () {
        var b = this.i;
        "checkbox" === b.type || "radio" === b.type ? this.d(b.checked) : this.e(b.value)
    };
    rp.prototype.f = function () {
        this.i.checked = this.a()
    };
    rp.prototype.n = function () {
        this.i.value = this.b()
    };

    function R(b) {
        td.call(this);
        this.X = void 0;
        this.b = "geometry";
        this.g = null;
        this.a = void 0;
        this.f = null;
        z(this, xd(this.b), this.pd, !1, this);
        m(b) && (b instanceof Mk || null === b ? this.Ma(b) : this.G(b))
    }
    u(R, td);
    R.prototype.clone = function () {
        var b = new R(this.L());
        b.e(this.b);
        var c = this.N();
        null != c && b.Ma(c.clone());
        c = this.g;
        null === c || b.i(c);
        return b
    };
    R.prototype.N = function () {
        return this.get(this.b)
    };
    R.prototype.getGeometry = R.prototype.N;
    l = R.prototype;
    l.nh = function () {
        return this.X
    };
    l.mh = function () {
        return this.b
    };
    l.Si = function () {
        return this.g
    };
    l.Ti = function () {
        return this.a
    };
    l.$h = function () {
        this.l()
    };
    l.pd = function () {
        null !== this.f && (Yc(this.f), this.f = null);
        var b = this.N();
        null != b && (this.f = z(b, "change", this.$h, !1, this), this.l())
    };
    l.Ma = function (b) {
        this.set(this.b, b)
    };
    R.prototype.setGeometry = R.prototype.Ma;
    R.prototype.i = function (b) {
        this.g = b;
        null === b ? b = void 0 : ka(b) || (b = ga(b) ? b : [b], b = bd(b));
        this.a = b;
        this.l()
    };
    R.prototype.d = function (b) {
        this.X = b;
        this.l()
    };
    R.prototype.e = function (b) {
        Xc(this, xd(this.b), this.pd, !1, this);
        this.b = b;
        z(this, xd(this.b), this.pd, !1, this);
        this.pd()
    };

    function sp(b) {
        b = m(b) ? b : {};
        this.g = this.d = this.e = this.c = this.b = this.a = null;
        this.f = void 0;
        this.tf(m(b.style) ? b.style : Wl);
        m(b.features) ? ga(b.features) ? this.Mc(new B(cb(b.features))) : this.Mc(b.features) : this.Mc(new B);
        m(b.map) && this.setMap(b.map)
    }
    l = sp.prototype;
    l.rf = function (b) {
        this.a.push(b)
    };
    l.Ni = function () {
        return this.a
    };
    l.sf = function () {
        tp(this)
    };
    l.Yh = function (b) {
        b = b.element;
        this.c[ma(b).toString()] = z(b, "change", this.sf, !1, this);
        tp(this)
    };
    l.Zh = function (b) {
        b = ma(b.element).toString();
        Yc(this.c[b]);
        delete this.c[b];
        tp(this)
    };
    l.Qi = function () {
        tp(this)
    };
    l.Ri = function (b) {
        if (null !== this.a) {
            var c = this.f;
            m(c) || (c = Wl);
            var d = b.a;
            b = b.frameState;
            var e = b.viewState.resolution,
                f = zn(e, b.pixelRatio),
                g, h, k, n;
            this.a.forEach(function (b) {
                n = b.a;
                k = m(n) ? n.call(b, e) : c(b, e);
                if (null != k) for (h = k.length, g = 0; g < h; ++g) An(d, b, k[g], f, this.Qi, this)
            }, this)
        }
    };
    l.wd = function (b) {
        this.a.remove(b)
    };

    function tp(b) {
        null === b.e || b.e.render()
    }
    l.Mc = function (b) {
        null !== this.b && (Ta(this.b, Yc), this.b = null);
        null !== this.c && (Ta(rb(this.c), Yc), this.c = null);
        this.a = b;
        null !== b && (this.b = [z(b, "add", this.Yh, !1, this), z(b, "remove", this.Zh, !1, this)], this.c = {}, b.forEach(function (b) {
            this.c[ma(b).toString()] = z(b, "change", this.sf, !1, this)
        }, this));
        tp(this)
    };
    l.setMap = function (b) {
        null !== this.d && (Yc(this.d), this.d = null);
        tp(this);
        this.e = b;
        null !== b && (this.d = z(b, "postcompose", this.Ri, !1, this), b.render())
    };
    l.tf = function (b) {
        this.g = b;
        this.f = Vl(b);
        tp(this)
    };
    l.Oi = function () {
        return this.g
    };
    l.Pi = function () {
        return this.f
    };

    function up() {
        this.defaultDataProjection = null
    }
    function vp(b, c, d) {
        var e;
        m(d) && (e = {
            dataProjection: m(d.dataProjection) ? d.dataProjection : b.Ba(c),
            featureProjection: d.featureProjection
        });
        return wp(b, e)
    }
    function wp(b, c) {
        var d;
        m(c) && (d = {
            featureProjection: c.featureProjection,
            dataProjection: null != c.dataProjection ? c.dataProjection : b.defaultDataProjection
        });
        return d
    }

    function xp(b, c, d) {
        var e = m(d) ? Ee(d.featureProjection) : null;
        d = m(d) ? Ee(d.dataProjection) : null;
        return null === e || null === d || Ue(e, d) ? b : b instanceof Mk ? (c ? b.clone() : b).e(c ? e : d, c ? d : e) : Xe(c ? cb(b) : b, c ? e : d, c ? d : e)
    };
    var yp = ba.JSON.parse,
        zp = ba.JSON.stringify;

    function Ap() {
        this.defaultDataProjection = null
    }
    u(Ap, up);

    function Bp(b) {
        return la(b) ? b : ia(b) ? (b = yp(b), m(b) ? b : null) : null
    }
    l = Ap.prototype;
    l.H = function () {
        return "json"
    };
    l.Nb = function (b, c) {
        return Cp(this, Bp(b), vp(this, b, c))
    };
    l.ja = function (b, c) {
        return this.b(Bp(b), vp(this, b, c))
    };
    l.Jc = function (b, c) {
        var d = Bp(b),
            e = vp(this, b, c);
        return Dp(d, e)
    };
    l.Ba = function (b) {
        b = Bp(b).crs;
        return null != b ? "name" == b.type ? Ee(b.properties.name) : "EPSG" == b.type ? Ee("EPSG:" + b.properties.code) : null : this.defaultDataProjection
    };
    l.Pd = function (b, c) {
        return zp(this.a(b, c))
    };
    l.Qb = function (b, c) {
        return zp(this.d(b, c))
    };
    l.Qc = function (b, c) {
        return zp(this.e(b, c))
    };

    function Ep(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ee(null != b.defaultDataProjection ? b.defaultDataProjection : "EPSG:4326");
        this.c = b.geometryName
    }
    u(Ep, Ap);

    function Dp(b, c) {
        return null === b ? null : xp((0, Fp[b.type])(b), !1, c)
    }
    var Fp = {
        Point: function (b) {
            return new jl(b.coordinates)
        },
        LineString: function (b) {
            return new M(b.coordinates)
        },
        Polygon: function (b) {
            return new H(b.coordinates)
        },
        MultiPoint: function (b) {
            return new un(b.coordinates)
        },
        MultiLineString: function (b) {
            return new rn(b.coordinates)
        },
        MultiPolygon: function (b) {
            return new vn(b.coordinates)
        },
        GeometryCollection: function (b, c) {
            var d = Va(b.geometries, function (b) {
                return Dp(b, c)
            });
            return new jn(d)
        }
    }, Gp = {
        Point: function (b) {
            return {
                type: "Point",
                coordinates: b.K()
            }
        },
        LineString: function (b) {
            return {
                type: "LineString",
                coordinates: b.K()
            }
        },
        Polygon: function (b) {
            return {
                type: "Polygon",
                coordinates: b.K()
            }
        },
        MultiPoint: function (b) {
            return {
                type: "MultiPoint",
                coordinates: b.K()
            }
        },
        MultiLineString: function (b) {
            return {
                type: "MultiLineString",
                coordinates: b.K()
            }
        },
        MultiPolygon: function (b) {
            return {
                type: "MultiPolygon",
                coordinates: b.K()
            }
        },
        GeometryCollection: function (b, c) {
            return {
                type: "GeometryCollection",
                geometries: Va(b.d, function (b) {
                    return (0, Gp[b.H()])(xp(b, !0, c))
                })
            }
        },
        Circle: function () {
            return {
                type: "GeometryCollection",
                geometries: []
            }
        }
    };

    function Cp(b, c, d) {
        d = Dp(c.geometry, d);
        var e = new R;
        m(b.c) && e.e(b.c);
        e.Ma(d);
        m(c.id) && e.d(c.id);
        m(c.properties) && e.G(c.properties);
        return e
    }
    Ep.prototype.b = function (b, c) {
        if ("Feature" == b.type) return [Cp(this, b, c)];
        if ("FeatureCollection" == b.type) {
            var d = [],
                e = b.features,
                f, g;
            f = 0;
            for (g = e.length; f < g; ++f) d.push(Cp(this, e[f], c));
            return d
        }
        return []
    };
    Ep.prototype.a = function (b, c) {
        c = wp(this, c);
        var d = {
            type: "Feature"
        }, e = b.X;
        null != e && (d.id = e);
        e = b.N();
        null != e && (e = (0, Gp[e.H()])(xp(e, !0, c)), d.geometry = e);
        e = b.L();
        zb(e, b.b);
        xb(e) || (d.properties = e);
        return d
    };
    Ep.prototype.d = function (b, c) {
        c = wp(this, c);
        var d = [],
            e, f;
        e = 0;
        for (f = b.length; e < f; ++e) d.push(this.a(b[e], c));
        return {
            type: "FeatureCollection",
            features: d
        }
    };
    Ep.prototype.e = function (b, c) {
        return (0, Gp[b.H()])(xp(b, !0, wp(this, c)))
    };

    function Hp(b) {
        if ("undefined" != typeof XMLSerializer) return (new XMLSerializer).serializeToString(b);
        if (b = b.xml) return b;
        throw Error("Your browser does not support serializing XML documents");
    };
    var Ip;
    a: if (document.implementation && document.implementation.createDocument) Ip = document.implementation.createDocument("", "", null);
    else {
        if ("undefined" != typeof ActiveXObject) {
            var Jp = new ActiveXObject("MSXML2.DOMDocument");
            if (Jp) {
                Jp.resolveExternals = !1;
                Jp.validateOnParse = !1;
                try {
                    Jp.setProperty("ProhibitDTD", !0), Jp.setProperty("MaxXMLSize", 2048), Jp.setProperty("MaxElementDepth", 256)
                } catch (Kp) {}
            }
            if (Jp) {
                Ip = Jp;
                break a
            }
        }
        throw Error("Your browser does not support creating new documents");
    }
    var Lp = Ip;

    function Mp(b, c) {
        return Lp.createElementNS(b, c)
    }
    function Np(b, c) {
        null === b && (b = "");
        return Lp.createNode(1, c, b)
    }
    var Op = document.implementation && document.implementation.createDocument ? Mp : Np;

    function Pp(b, c) {
        return Qp(b, c, []).join("")
    }
    function Qp(b, c, d) {
        if (4 == b.nodeType || 3 == b.nodeType) c ? d.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : d.push(b.nodeValue);
        else for (b = b.firstChild; null !== b; b = b.nextSibling) Qp(b, c, d);
        return d
    }
    function Rp(b) {
        return b.localName
    }

    function Sp(b) {
        var c = b.localName;
        return m(c) ? c : b.baseName
    }
    var Tp = Hb ? Sp : Rp;

    function Up(b) {
        return b instanceof Document
    }
    function Vp(b) {
        return la(b) && 9 == b.nodeType
    }
    var Wp = Hb ? Vp : Up;

    function Xp(b) {
        return b instanceof Node
    }
    function Yp(b) {
        return la(b) && m(b.nodeType)
    }
    var Zp = Hb ? Yp : Xp;

    function $p(b, c, d) {
        return b.getAttributeNS(c, d) || ""
    }
    function aq(b, c, d) {
        var e = "";
        b = bq(b, c, d);
        m(b) && (e = b.nodeValue);
        return e
    }
    var cq = document.implementation && document.implementation.createDocument ? $p : aq;

    function dq(b, c, d) {
        return b.getAttributeNodeNS(c, d)
    }
    function eq(b, c, d) {
        var e = null;
        b = b.attributes;
        for (var f, g, h = 0, k = b.length; h < k; ++h) if (f = b[h], f.namespaceURI == c && (g = f.prefix ? f.prefix + ":" + d : d, g == f.nodeName)) {
            e = f;
            break
        }
        return e
    }
    var bq = document.implementation && document.implementation.createDocument ? dq : eq;

    function fq(b, c, d, e) {
        b.setAttributeNS(c, d, e)
    }
    function gq(b, c, d, e) {
        null === c ? b.setAttribute(d, e) : (c = b.ownerDocument.createNode(2, d, c), c.nodeValue = e, b.setAttributeNode(c))
    }
    var hq = document.implementation && document.implementation.createDocument ? fq : gq;

    function iq(b) {
        return (new DOMParser).parseFromString(b, "application/xml")
    }
    function jq(b, c) {
        return function (d, e) {
            var f = b.call(c, d, e);
            m(f) && db(e[e.length - 1], f)
        }
    }
    function kq(b, c) {
        return function (d, e) {
            var f = b.call(m(c) ? c : this, d, e);
            m(f) && e[e.length - 1].push(f)
        }
    }
    function lq(b, c) {
        return function (d, e) {
            var f = b.call(m(c) ? c : this, d, e);
            m(f) && (e[e.length - 1] = f)
        }
    }

    function mq(b) {
        return function (c, d) {
            var e = b.call(m(void 0) ? void 0 : this, c, d);
            m(e) && Bb(d[d.length - 1], m(void 0) ? void 0 : c.localName).push(e)
        }
    }
    function S(b, c) {
        return function (d, e) {
            var f = b.call(m(void 0) ? void 0 : this, d, e);
            m(f) && (e[e.length - 1][m(c) ? c : d.localName] = f)
        }
    }
    function nq(b, c, d) {
        return oq(b, c, d)
    }
    function V(b, c) {
        return function (d, e, f) {
            b.call(m(c) ? c : this, d, e, f);
            f[f.length - 1].node.appendChild(d)
        }
    }

    function pq(b) {
        var c, d;
        return function (e, f, g) {
            if (!m(c)) {
                c = {};
                var h = {};
                h[e.localName] = b;
                c[e.namespaceURI] = h;
                d = qq(e.localName)
            }
            rq(c, d, f, g)
        }
    }
    function qq(b, c) {
        return function (d, e, f) {
            d = e[e.length - 1].node;
            e = b;
            m(e) || (e = f);
            f = c;
            m(c) || (f = d.namespaceURI);
            return Op(f, e)
        }
    }
    var sq = qq();

    function tq(b, c) {
        for (var d = c.length, e = Array(d), f = 0; f < d; ++f) e[f] = b[c[f]];
        return e
    }
    function oq(b, c, d) {
        d = m(d) ? d : {};
        var e, f;
        e = 0;
        for (f = b.length; e < f; ++e) d[b[e]] = c;
        return d
    }

    function uq(b, c, d, e) {
        for (c = c.firstElementChild; null !== c; c = c.nextElementSibling) {
            var f = b[c.namespaceURI];
            m(f) && (f = f[c.localName], m(f) && f.call(e, c, d))
        }
    }
    function W(b, c, d, e, f) {
        e.push(b);
        uq(c, d, e, f);
        return e.pop()
    }
    function rq(b, c, d, e, f, g) {
        for (var h = (m(f) ? f : d).length, k, n, p = 0; p < h; ++p) k = d[p], m(k) && (n = c.call(g, k, e, m(f) ? f[p] : void 0), m(n) && b[n.namespaceURI][n.localName].call(g, n, k, e))
    }
    function vq(b, c, d, e, f, g, h) {
        f.push(b);
        rq(c, d, e, f, g, h);
        f.pop()
    };

    function wq() {
        this.defaultDataProjection = null
    }
    u(wq, up);
    l = wq.prototype;
    l.H = function () {
        return "xml"
    };
    l.Nb = function (b, c) {
        if (Wp(b)) return xq(this, b, c);
        if (Zp(b)) return this.Pf(b, c);
        if (ia(b)) {
            var d = iq(b);
            return xq(this, d, c)
        }
        return null
    };

    function xq(b, c, d) {
        b = yq(b, c, d);
        return 0 < b.length ? b[0] : null
    }
    l.ja = function (b, c) {
        if (Wp(b)) return yq(this, b, c);
        if (Zp(b)) return this.Ob(b, c);
        if (ia(b)) {
            var d = iq(b);
            return yq(this, d, c)
        }
        return []
    };

    function yq(b, c, d) {
        var e = [];
        for (c = c.firstChild; null !== c; c = c.nextSibling) 1 == c.nodeType && db(e, b.Ob(c, d));
        return e
    }
    l.Jc = function (b, c) {
        if (Wp(b)) return this.i(b, c);
        if (Zp(b)) {
            var d = this.Id(b, [vp(this, b, m(c) ? c : {})]);
            return m(d) ? d : null
        }
        return ia(b) ? (d = iq(b), this.i(d, c)) : null
    };
    l.Ba = function (b) {
        return Wp(b) ? this.Lc(b) : Zp(b) ? this.tc(b) : ia(b) ? (b = iq(b), this.Lc(b)) : null
    };
    l.Pd = function (b, c) {
        var d = this.p(b, c);
        return Hp(d)
    };
    l.Qb = function (b, c) {
        var d = this.a(b, c);
        return Hp(d)
    };
    l.Qc = function (b, c) {
        var d = this.o(b, c);
        return Hp(d)
    };

    function zq(b) {
        b = m(b) ? b : {};
        this.featureType = b.featureType;
        this.featureNS = b.featureNS;
        this.srsName = b.srsName;
        this.schemaLocation = "";
        this.defaultDataProjection = null
    }
    u(zq, wq);
    l = zq.prototype;
    l.pe = function (b, c) {
        var d = Tp(b),
            e;
        if ("FeatureCollection" == d) e = W(null, this.Td, b, c, this);
        else if ("featureMembers" == d || "featureMember" == d) {
            e = c[0];
            var f = x(e, "featureType");
            if (!m(f) && null !== b.firstElementChild) {
                var g = b.firstElementChild,
                    f = g.nodeName.split(":").pop();
                e.featureType = f;
                e.featureNS = g.namespaceURI
            }
            var g = {}, h = {};
            g[f] = "featureMembers" == d ? kq(this.ye, this) : lq(this.ye, this);
            h[x(e, "featureNS")] = g;
            e = W([], h, b, c)
        }
        m(e) || (e = []);
        return e
    };
    l.Td = Object({
        "http://www.opengis.net/gml": {
            featureMember: kq(zq.prototype.pe),
            featureMembers: lq(zq.prototype.pe)
        }
    });
    l.Id = function (b, c) {
        var d = c[0],
            e = b.firstElementChild.getAttribute("srsName");
        d.srsName = e;
        e = W(null, this.Le, b, c, this);
        if (null != e) return xp(e, !1, d)
    };
    l.ye = function (b, c) {
        var d, e = b.getAttribute("fid") || cq(b, "http://www.opengis.net/gml", "id"),
            f = {}, g;
        for (d = b.firstElementChild; null !== d; d = d.nextElementSibling) {
            var h = Tp(d);
            if (0 === d.childNodes.length || 1 === d.childNodes.length && 3 === d.firstChild.nodeType) {
                var k = Pp(d, !1);
                /^[\s\xa0]*$/.test(k) && (k = void 0);
                f[h] = k
            } else "boundedBy" !== h && (g = h), f[h] = this.Id(d, c)
        }
        d = new R(f);
        m(g) && d.e(g);
        e && d.d(e);
        return d
    };
    l.Vf = function (b, c) {
        var d = this.Hd(b, c);
        if (null != d) {
            var e = new jl(null);
            kl(e, "XYZ", d);
            return e
        }
    };
    l.Tf = function (b, c) {
        var d = W([], this.yg, b, c, this);
        if (m(d)) return new un(d)
    };
    l.Sf = function (b, c) {
        var d = W([], this.xg, b, c, this);
        if (m(d)) {
            var e = new rn(null);
            tn(e, d);
            return e
        }
    };
    l.Uf = function (b, c) {
        var d = W([], this.zg, b, c, this);
        if (m(d)) {
            var e = new vn(null);
            xn(e, d);
            return e
        }
    };
    l.Kf = function (b, c) {
        uq(this.Cg, b, c, this)
    };
    l.mf = function (b, c) {
        uq(this.vg, b, c, this)
    };
    l.Lf = function (b, c) {
        uq(this.Dg, b, c, this)
    };
    l.Jd = function (b, c) {
        var d = this.Hd(b, c);
        if (null != d) {
            var e = new M(null);
            qn(e, "XYZ", d);
            return e
        }
    };
    l.Ik = function (b, c) {
        var d = W(null, this.Sc, b, c, this);
        if (null != d) return d
    };
    l.Rf = function (b, c) {
        var d = this.Hd(b, c);
        if (m(d)) {
            var e = new hl(null);
            il(e, "XYZ", d);
            return e
        }
    };
    l.Kd = function (b, c) {
        var d = W([null], this.Ud, b, c, this);
        if (m(d) && null !== d[0]) {
            var e = new H(null),
                f = d[0],
                g = [f.length],
                h, k;
            h = 1;
            for (k = d.length; h < k; ++h) db(f, d[h]), g.push(f.length);
            wl(e, "XYZ", f, g);
            return e
        }
    };
    l.Hd = function (b, c) {
        return W(null, this.Sc, b, c, this)
    };
    l.yg = Object({
        "http://www.opengis.net/gml": {
            pointMember: kq(zq.prototype.Kf),
            pointMembers: kq(zq.prototype.Kf)
        }
    });
    l.xg = Object({
        "http://www.opengis.net/gml": {
            lineStringMember: kq(zq.prototype.mf),
            lineStringMembers: kq(zq.prototype.mf)
        }
    });
    l.zg = Object({
        "http://www.opengis.net/gml": {
            polygonMember: kq(zq.prototype.Lf),
            polygonMembers: kq(zq.prototype.Lf)
        }
    });
    l.Cg = Object({
        "http://www.opengis.net/gml": {
            Point: kq(zq.prototype.Hd)
        }
    });
    l.vg = Object({
        "http://www.opengis.net/gml": {
            LineString: kq(zq.prototype.Jd)
        }
    });
    l.Dg = Object({
        "http://www.opengis.net/gml": {
            Polygon: kq(zq.prototype.Kd)
        }
    });
    l.Tc = Object({
        "http://www.opengis.net/gml": {
            LinearRing: lq(zq.prototype.Ik)
        }
    });
    l.Ob = function (b, c) {
        var d = {
            featureType: this.featureType,
            featureNS: this.featureNS
        };
        m(c) && Eb(d, vp(this, b, c));
        return this.pe(b, [d])
    };
    l.tc = function (b) {
        return Ee(m(this.n) ? this.n : b.firstElementChild.getAttribute("srsName"))
    };

    function Aq(b) {
        b = Pp(b, !1);
        return Bq(b)
    }
    function Bq(b) {
        if (b = /^\s*(true|1)|(false|0)\s*$/.exec(b)) return m(b[1]) || !1
    }
    function Cq(b) {
        b = Pp(b, !1);
        if (b = /^\s*(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?))\s*$/.exec(b)) {
            var c = Date.UTC(parseInt(b[1], 10), parseInt(b[2], 10) - 1, parseInt(b[3], 10), parseInt(b[4], 10), parseInt(b[5], 10), parseInt(b[6], 10)) / 1E3;
            if ("Z" != b[7]) {
                var d = "-" == b[8] ? -1 : 1,
                    c = c + 60 * d * parseInt(b[9], 10);
                m(b[10]) && (c += 3600 * d * parseInt(b[10], 10))
            }
            return c
        }
    }

    function Dq(b) {
        b = Pp(b, !1);
        return Eq(b)
    }
    function Eq(b) {
        if (b = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(b)) return parseFloat(b[1])
    }
    function Fq(b) {
        b = Pp(b, !1);
        return Gq(b)
    }
    function Gq(b) {
        if (b = /^\s*(\d+)\s*$/.exec(b)) return parseInt(b[1], 10)
    }
    function Hq(b) {
        b = Pp(b, !1);
        return Aa(b)
    }
    function Iq(b, c) {
        Jq(b, c ? "1" : "0")
    }
    function Kq(b, c) {
        b.appendChild(Lp.createTextNode(c.toPrecision()))
    }
    function Lq(b, c) {
        b.appendChild(Lp.createTextNode(c.toString()))
    }
    function Jq(b, c) {
        b.appendChild(Lp.createTextNode(c))
    };

    function X(b) {
        b = m(b) ? b : {};
        zq.call(this, b);
        this.g = m(b.surface) ? b.surface : !1;
        this.d = m(b.curve) ? b.curve : !1;
        this.e = m(b.multiCurve) ? b.multiCurve : !0;
        this.f = m(b.multiSurface) ? b.multiSurface : !0;
        this.schemaLocation = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/3.1.1/profiles/gmlsfProfile/1.0.0/gmlsf.xsd"
    }
    u(X, zq);
    l = X.prototype;
    l.Lk = function (b, c) {
        var d = W([], this.wg, b, c, this);
        if (m(d)) {
            var e = new rn(null);
            tn(e, d);
            return e
        }
    };
    l.Mk = function (b, c) {
        var d = W([], this.Ag, b, c, this);
        if (m(d)) {
            var e = new vn(null);
            xn(e, d);
            return e
        }
    };
    l.We = function (b, c) {
        uq(this.sg, b, c, this)
    };
    l.fg = function (b, c) {
        uq(this.Gg, b, c, this)
    };
    l.Ok = function (b, c) {
        return W([null], this.Bg, b, c, this)
    };
    l.Qk = function (b, c) {
        return W([null], this.Fg, b, c, this)
    };
    l.Pk = function (b, c) {
        return W([null], this.Ud, b, c, this)
    };
    l.Kk = function (b, c) {
        return W([null], this.Sc, b, c, this)
    };
    l.vi = function (b, c) {
        var d = W(void 0, this.Tc, b, c, this);
        m(d) && c[c.length - 1].push(d)
    };
    l.ah = function (b, c) {
        var d = W(void 0, this.Tc, b, c, this);
        m(d) && (c[c.length - 1][0] = d)
    };
    l.Wf = function (b, c) {
        var d = W([null], this.Hg, b, c, this);
        if (m(d) && null !== d[0]) {
            var e = new H(null),
                f = d[0],
                g = [f.length],
                h, k;
            h = 1;
            for (k = d.length; h < k; ++h) db(f, d[h]), g.push(f.length);
            wl(e, "XYZ", f, g);
            return e
        }
    };
    l.Nf = function (b, c) {
        var d = W([null], this.tg, b, c, this);
        if (m(d)) {
            var e = new M(null);
            qn(e, "XYZ", d);
            return e
        }
    };
    l.Hk = function (b, c) {
        var d = W([null], this.ug, b, c, this);
        return Xd(d[1][0], d[1][1], d[2][0], d[2][1])
    };
    l.Jk = function (b, c) {
        for (var d = Pp(b, !1), e = /^\s*([+\-]?\d*\.?\d+(?:[eE][+\-]?\d+)?)\s*/, f = [], g; g = e.exec(d);) f.push(parseFloat(g[1])), d = d.substr(g[0].length);
        if ("" === d) {
            d = x(c[0], "srsName");
            e = "enu";
            null === d || (e = Ce(Ee(d)));
            if ("neu" === e) for (d = 0, e = f.length; d < e; d += 3) g = f[d], f[d] = f[d + 1], f[d + 1] = g;
            d = f.length;
            2 == d && f.push(0);
            return 0 === d ? void 0 : f
        }
    };
    l.Ae = function (b, c) {
        var d = Pp(b, !1).replace(/^\s*|\s*$/g, ""),
            e = x(c[0], "srsName"),
            f = b.parentNode.getAttribute("srsDimension"),
            g = "enu";
        null === e || (g = Ce(Ee(e)));
        d = d.split(/\s+/);
        e = 2;
        fa(b.getAttribute("srsDimension")) ? fa(b.getAttribute("dimension")) ? null === f || (e = Gq(f)) : e = Gq(b.getAttribute("dimension")) : e = Gq(b.getAttribute("srsDimension"));
        for (var h, k, n = [], p = 0, q = d.length; p < q; p += e) f = parseFloat(d[p]), h = parseFloat(d[p + 1]), k = 3 === e ? parseFloat(d[p + 2]) : 0, "en" === g.substr(0, 2) ? n.push(f, h, k) : n.push(h, f, k);
        return n
    };
    l.Sc = Object({
        "http://www.opengis.net/gml": {
            pos: lq(X.prototype.Jk),
            posList: lq(X.prototype.Ae)
        }
    });
    l.Ud = Object({
        "http://www.opengis.net/gml": {
            interior: X.prototype.vi,
            exterior: X.prototype.ah
        }
    });
    l.Le = Object({
        "http://www.opengis.net/gml": {
            Point: lq(zq.prototype.Vf),
            MultiPoint: lq(zq.prototype.Tf),
            LineString: lq(zq.prototype.Jd),
            MultiLineString: lq(zq.prototype.Sf),
            LinearRing: lq(zq.prototype.Rf),
            Polygon: lq(zq.prototype.Kd),
            MultiPolygon: lq(zq.prototype.Uf),
            Surface: lq(X.prototype.Wf),
            MultiSurface: lq(X.prototype.Mk),
            Curve: lq(X.prototype.Nf),
            MultiCurve: lq(X.prototype.Lk),
            Envelope: lq(X.prototype.Hk)
        }
    });
    l.wg = Object({
        "http://www.opengis.net/gml": {
            curveMember: kq(X.prototype.We),
            curveMembers: kq(X.prototype.We)
        }
    });
    l.Ag = Object({
        "http://www.opengis.net/gml": {
            surfaceMember: kq(X.prototype.fg),
            surfaceMembers: kq(X.prototype.fg)
        }
    });
    l.sg = Object({
        "http://www.opengis.net/gml": {
            LineString: kq(zq.prototype.Jd),
            Curve: kq(X.prototype.Nf)
        }
    });
    l.Gg = Object({
        "http://www.opengis.net/gml": {
            Polygon: kq(zq.prototype.Kd),
            Surface: kq(X.prototype.Wf)
        }
    });
    l.Hg = Object({
        "http://www.opengis.net/gml": {
            patches: lq(X.prototype.Ok)
        }
    });
    l.tg = Object({
        "http://www.opengis.net/gml": {
            segments: lq(X.prototype.Qk)
        }
    });
    l.ug = Object({
        "http://www.opengis.net/gml": {
            lowerCorner: kq(X.prototype.Ae),
            upperCorner: kq(X.prototype.Ae)
        }
    });
    l.Bg = Object({
        "http://www.opengis.net/gml": {
            PolygonPatch: lq(X.prototype.Pk)
        }
    });
    l.Fg = Object({
        "http://www.opengis.net/gml": {
            LineStringSegment: lq(X.prototype.Kk)
        }
    });

    function Mq(b, c, d) {
        d = x(d[d.length - 1], "srsName");
        c = c.K();
        for (var e = c.length, f = Array(e), g, h = 0; h < e; ++h) {
            g = c[h];
            var k = h,
                n = "enu";
            null != d && (n = Ce(Ee(d)));
            f[k] = "en" === n.substr(0, 2) ? g[0] + " " + g[1] : g[1] + " " + g[0]
        }
        Jq(b, f.join(" "))
    }
    l.og = function (b, c, d) {
        var e = x(d[d.length - 1], "srsName");
        null != e && b.setAttribute("srsName", e);
        e = Op(b.namespaceURI, "pos");
        b.appendChild(e);
        d = x(d[d.length - 1], "srsName");
        b = "enu";
        null != d && (b = Ce(Ee(d)));
        c = c.K();
        Jq(e, "en" === b.substr(0, 2) ? c[0] + " " + c[1] : c[1] + " " + c[0])
    };
    var Nq = {
        "http://www.opengis.net/gml": {
            lowerCorner: V(Jq),
            upperCorner: V(Jq)
        }
    };
    l = X.prototype;
    l.zl = function (b, c, d) {
        var e = x(d[d.length - 1], "srsName");
        m(e) && b.setAttribute("srsName", e);
        vq({
            node: b
        }, Nq, sq, [c[0] + " " + c[1], c[2] + " " + c[3]], d, ["lowerCorner", "upperCorner"], this)
    };
    l.lg = function (b, c, d) {
        var e = x(d[d.length - 1], "srsName");
        null != e && b.setAttribute("srsName", e);
        e = Op(b.namespaceURI, "posList");
        b.appendChild(e);
        Mq(e, c, d)
    };
    l.Eg = function (b, c) {
        var d = c[c.length - 1],
            e = d.node,
            f = x(d, "exteriorWritten");
        m(f) || (d.exteriorWritten = !0);
        return Op(e.namespaceURI, m(f) ? "interior" : "exterior")
    };
    l.Sd = function (b, c, d) {
        var e = x(d[d.length - 1], "srsName");
        "PolygonPatch" !== b.nodeName && null != e && b.setAttribute("srsName", e);
        "Polygon" === b.nodeName || "PolygonPatch" === b.nodeName ? (c = c.dd(), vq({
            node: b,
            srsName: e
        }, Oq, this.Eg, c, d, void 0, this)) : "Surface" === b.nodeName && (e = Op(b.namespaceURI, "patches"), b.appendChild(e), b = Op(e.namespaceURI, "PolygonPatch"), e.appendChild(b), this.Sd(b, c, d))
    };
    l.Od = function (b, c, d) {
        var e = x(d[d.length - 1], "srsName");
        "LineStringSegment" !== b.nodeName && null != e && b.setAttribute("srsName", e);
        "LineString" === b.nodeName || "LineStringSegment" === b.nodeName ? (e = Op(b.namespaceURI, "posList"), b.appendChild(e), Mq(e, c, d)) : "Curve" === b.nodeName && (e = Op(b.namespaceURI, "segments"), b.appendChild(e), b = Op(e.namespaceURI, "LineStringSegment"), e.appendChild(b), this.Od(b, c, d))
    };
    l.ng = function (b, c, d) {
        var e = d[d.length - 1],
            f = x(e, "srsName"),
            e = x(e, "surface");
        null != f && b.setAttribute("srsName", f);
        c = c.gd();
        vq({
            node: b,
            srsName: f,
            surface: e
        }, Pq, this.b, c, d, void 0, this)
    };
    l.Dl = function (b, c, d) {
        var e = x(d[d.length - 1], "srsName");
        null != e && b.setAttribute("srsName", e);
        c = c.xd();
        vq({
            node: b,
            srsName: e
        }, Qq, qq("pointMember"), c, d, void 0, this)
    };
    l.mg = function (b, c, d) {
        var e = d[d.length - 1],
            f = x(e, "srsName"),
            e = x(e, "curve");
        null != f && b.setAttribute("srsName", f);
        c = c.Ec();
        vq({
            node: b,
            srsName: f,
            curve: e
        }, Rq, this.b, c, d, void 0, this)
    };
    l.pg = function (b, c, d) {
        var e = Op(b.namespaceURI, "LinearRing");
        b.appendChild(e);
        this.lg(e, c, d)
    };
    l.qg = function (b, c, d) {
        var e = this.c(c, d);
        m(e) && (b.appendChild(e), this.Sd(e, c, d))
    };
    l.Gl = function (b, c, d) {
        var e = Op(b.namespaceURI, "Point");
        b.appendChild(e);
        this.og(e, c, d)
    };
    l.kg = function (b, c, d) {
        var e = this.c(c, d);
        m(e) && (b.appendChild(e), this.Od(e, c, d))
    };
    l.Rd = function (b, c, d) {
        var e = d[d.length - 1],
            f = Cb(e);
        f.node = b;
        var g;
        ga(c) ? m(e.dataProjection) ? g = Xe(c, e.featureProjection, e.dataProjection) : g = c : g = xp(c, !0, e);
        vq(f, Sq, this.c, [g], d, void 0, this)
    };
    l.hg = function (b, c, d) {
        var e = c.X;
        m(e) && b.setAttribute("fid", e);
        var e = d[d.length - 1],
            f = x(e, "featureNS"),
            g = c.b;
        m(e.ac) || (e.ac = {}, e.ac[f] = {});
        var h = c.L();
        c = [];
        var k = [],
            n;
        for (n in h) {
            var p = h[n];
            null !== p && (c.push(n), k.push(p), n == g ? n in e.ac[f] || (e.ac[f][n] = V(this.Rd, this)) : n in e.ac[f] || (e.ac[f][n] = V(Jq)))
        }
        n = Cb(e);
        n.node = b;
        vq(n, e.ac, qq(void 0, f), k, d, c)
    };
    var Pq = {
        "http://www.opengis.net/gml": {
            surfaceMember: V(X.prototype.qg),
            polygonMember: V(X.prototype.qg)
        }
    }, Qq = {
        "http://www.opengis.net/gml": {
            pointMember: V(X.prototype.Gl)
        }
    }, Rq = {
        "http://www.opengis.net/gml": {
            lineStringMember: V(X.prototype.kg),
            curveMember: V(X.prototype.kg)
        }
    }, Oq = {
        "http://www.opengis.net/gml": {
            exterior: V(X.prototype.pg),
            interior: V(X.prototype.pg)
        }
    }, Sq = {
        "http://www.opengis.net/gml": {
            Curve: V(X.prototype.Od),
            MultiCurve: V(X.prototype.mg),
            Point: V(X.prototype.og),
            MultiPoint: V(X.prototype.Dl),
            LineString: V(X.prototype.Od),
            MultiLineString: V(X.prototype.mg),
            LinearRing: V(X.prototype.lg),
            Polygon: V(X.prototype.Sd),
            MultiPolygon: V(X.prototype.ng),
            Surface: V(X.prototype.Sd),
            MultiSurface: V(X.prototype.ng),
            Envelope: V(X.prototype.zl)
        }
    }, Tq = {
        MultiLineString: "lineStringMember",
        MultiCurve: "curveMember",
        MultiPolygon: "polygonMember",
        MultiSurface: "surfaceMember"
    };
    X.prototype.b = function (b, c) {
        return Op("http://www.opengis.net/gml", Tq[c[c.length - 1].node.nodeName])
    };
    X.prototype.c = function (b, c) {
        var d = c[c.length - 1],
            e = x(d, "multiSurface"),
            f = x(d, "surface"),
            g = x(d, "curve"),
            d = x(d, "multiCurve"),
            h;
        ga(b) ? h = "Envelope" : (h = b.H(), "MultiPolygon" === h && !0 === e ? h = "MultiSurface" : "Polygon" === h && !0 === f ? h = "Surface" : "LineString" === h && !0 === g ? h = "Curve" : "MultiLineString" === h && !0 === d && (h = "MultiCurve"));
        return Op("http://www.opengis.net/gml", h)
    };
    X.prototype.o = function (b, c) {
        c = wp(this, c);
        var d = Op("http://www.opengis.net/gml", "geom"),
            e = {
                node: d,
                srsName: this.srsName,
                curve: this.d,
                surface: this.g,
                multiSurface: this.f,
                multiCurve: this.e
            };
        m(c) && Eb(e, c);
        this.Rd(d, b, [e]);
        return d
    };
    X.prototype.a = function (b, c) {
        c = wp(this, c);
        var d = Op("http://www.opengis.net/gml", "featureMembers");
        hq(d, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.schemaLocation);
        var e = {
            srsName: this.srsName,
            curve: this.d,
            surface: this.g,
            multiSurface: this.f,
            multiCurve: this.e,
            featureNS: this.featureNS,
            featureType: this.featureType
        };
        m(c) && Eb(e, c);
        var e = [e],
            f = e[e.length - 1],
            g = x(f, "featureType"),
            h = x(f, "featureNS"),
            k = {};
        k[h] = {};
        k[h][g] = V(this.hg, this);
        f = Cb(f);
        f.node = d;
        vq(f, k, qq(g, h), b, e);
        return d
    };

    function Uq(b) {
        b = m(b) ? b : {};
        zq.call(this, b);
        this.schemaLocation = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/gml http://schemas.opengis.net/gml/2.1.2/feature.xsd"
    }
    u(Uq, zq);
    l = Uq.prototype;
    l.Qf = function (b, c) {
        var d = Pp(b, !1).replace(/^\s*|\s*$/g, ""),
            e = x(c[0], "srsName"),
            f = b.parentNode.getAttribute("srsDimension"),
            g = "enu";
        null === e || (g = Ce(Ee(e)));
        d = d.split(/[\s,]+/);
        e = 2;
        fa(b.getAttribute("srsDimension")) ? fa(b.getAttribute("dimension")) ? null === f || (e = Gq(f)) : e = Gq(b.getAttribute("dimension")) : e = Gq(b.getAttribute("srsDimension"));
        for (var h, k, n = [], p = 0, q = d.length; p < q; p += e) f = parseFloat(d[p]), h = parseFloat(d[p + 1]), k = 3 === e ? parseFloat(d[p + 2]) : 0, "en" === g.substr(0, 2) ? n.push(f, h, k) : n.push(h, f, k);
        return n
    };
    l.Gk = function (b, c) {
        var d = W([null], this.rg, b, c, this);
        return Xd(d[1][0], d[1][1], d[1][3], d[1][4])
    };
    l.ti = function (b, c) {
        var d = W(void 0, this.Tc, b, c, this);
        m(d) && c[c.length - 1].push(d)
    };
    l.tk = function (b, c) {
        var d = W(void 0, this.Tc, b, c, this);
        m(d) && (c[c.length - 1][0] = d)
    };
    l.Sc = Object({
        "http://www.opengis.net/gml": {
            coordinates: lq(Uq.prototype.Qf)
        }
    });
    l.Ud = Object({
        "http://www.opengis.net/gml": {
            innerBoundaryIs: Uq.prototype.ti,
            outerBoundaryIs: Uq.prototype.tk
        }
    });
    l.rg = Object({
        "http://www.opengis.net/gml": {
            coordinates: kq(Uq.prototype.Qf)
        }
    });
    l.Le = Object({
        "http://www.opengis.net/gml": {
            Point: lq(zq.prototype.Vf),
            MultiPoint: lq(zq.prototype.Tf),
            LineString: lq(zq.prototype.Jd),
            MultiLineString: lq(zq.prototype.Sf),
            LinearRing: lq(zq.prototype.Rf),
            Polygon: lq(zq.prototype.Kd),
            MultiPolygon: lq(zq.prototype.Uf),
            Box: lq(Uq.prototype.Gk)
        }
    });

    function Vq(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ee("EPSG:4326");
        this.c = b.readExtensions
    }
    u(Vq, wq);
    var Wq = [null, "http://www.topografix.com/GPX/1/0", "http://www.topografix.com/GPX/1/1"];

    function Xq(b, c, d) {
        b.push(parseFloat(c.getAttribute("lon")), parseFloat(c.getAttribute("lat")));
        "ele" in d ? (b.push(x(d, "ele")), zb(d, "ele")) : b.push(0);
        "time" in d ? (b.push(x(d, "time")), zb(d, "time")) : b.push(0);
        return b
    }

    function Yq(b, c) {
        var d = c[c.length - 1],
            e = b.getAttribute("href");
        null !== e && (d.link = e);
        uq(Zq, b, c)
    }
    function $q(b, c) {
        c[c.length - 1].extensionsNode_ = b
    }
    function ar(b, c) {
        var d = c[0],
            e = W({
                flatCoordinates: []
            }, br, b, c);
        if (m(e)) {
            var f = x(e, "flatCoordinates");
            zb(e, "flatCoordinates");
            var g = new M(null);
            qn(g, "XYZM", f);
            xp(g, !1, d);
            d = new R(g);
            d.G(e);
            return d
        }
    }

    function cr(b, c) {
        var d = c[0],
            e = W({
                flatCoordinates: [],
                ends: []
            }, dr, b, c);
        if (m(e)) {
            var f = x(e, "flatCoordinates");
            zb(e, "flatCoordinates");
            var g = x(e, "ends");
            zb(e, "ends");
            var h = new rn(null);
            sn(h, "XYZM", f, g);
            xp(h, !1, d);
            d = new R(h);
            d.G(e);
            return d
        }
    }
    function er(b, c) {
        var d = c[0],
            e = W({}, fr, b, c);
        if (m(e)) {
            var f = Xq([], b, e),
                f = new jl(f, "XYZM");
            xp(f, !1, d);
            d = new R(f);
            d.G(e);
            return d
        }
    }
    var gr = {
        rte: ar,
        trk: cr,
        wpt: er
    }, hr = nq(Wq, {
        rte: kq(ar),
        trk: kq(cr),
        wpt: kq(er)
    }),
        Zq = nq(Wq, {
            text: S(Hq, "linkText"),
            type: S(Hq, "linkType")
        }),
        br = nq(Wq, {
            name: S(Hq),
            cmt: S(Hq),
            desc: S(Hq),
            src: S(Hq),
            link: Yq,
            number: S(Fq),
            extensions: $q,
            type: S(Hq),
            rtept: function (b, c) {
                var d = W({}, ir, b, c);
                m(d) && Xq(x(c[c.length - 1], "flatCoordinates"), b, d)
            }
        }),
        ir = nq(Wq, {
            ele: S(Dq),
            time: S(Cq)
        }),
        dr = nq(Wq, {
            name: S(Hq),
            cmt: S(Hq),
            desc: S(Hq),
            src: S(Hq),
            link: Yq,
            number: S(Fq),
            type: S(Hq),
            extensions: $q,
            trkseg: function (b, c) {
                var d = c[c.length - 1];
                uq(jr, b, c);
                x(d, "ends").push(x(d, "flatCoordinates").length)
            }
        }),
        jr = nq(Wq, {
            trkpt: function (b, c) {
                var d = W({}, kr, b, c);
                m(d) && Xq(x(c[c.length - 1], "flatCoordinates"), b, d)
            }
        }),
        kr = nq(Wq, {
            ele: S(Dq),
            time: S(Cq)
        }),
        fr = nq(Wq, {
            ele: S(Dq),
            time: S(Cq),
            magvar: S(Dq),
            geoidheight: S(Dq),
            name: S(Hq),
            cmt: S(Hq),
            desc: S(Hq),
            src: S(Hq),
            link: Yq,
            sym: S(Hq),
            type: S(Hq),
            fix: S(Hq),
            sat: S(Fq),
            hdop: S(Dq),
            vdop: S(Dq),
            pdop: S(Dq),
            ageofdgpsdata: S(Dq),
            dgpsid: S(Fq),
            extensions: $q
        });

    function lr(b, c) {
        null === c && (c = []);
        for (var d = 0, e = c.length; d < e; ++d) {
            var f = c[d];
            if (m(b.c)) {
                var g = f.get("extensionsNode_") || null;
                b.c(f, g)
            }
            f.set("extensionsNode_", void 0)
        }
    }
    Vq.prototype.Pf = function (b, c) {
        if (!Za(Wq, b.namespaceURI)) return null;
        var d = gr[b.localName];
        if (!m(d)) return null;
        d = d(b, [vp(this, b, c)]);
        if (!m(d)) return null;
        lr(this, [d]);
        return d
    };
    Vq.prototype.Ob = function (b, c) {
        if (!Za(Wq, b.namespaceURI)) return [];
        if ("gpx" == b.localName) {
            var d = W([], hr, b, [vp(this, b, c)]);
            if (m(d)) return lr(this, d), d
        }
        return []
    };
    Vq.prototype.Lc = function () {
        return this.defaultDataProjection
    };
    Vq.prototype.tc = function () {
        return this.defaultDataProjection
    };

    function mr(b, c, d) {
        b.setAttribute("href", c);
        c = x(d[d.length - 1], "properties");
        vq({
            node: b
        }, nr, sq, [x(c, "linkText"), x(c, "linkType")], d, or)
    }

    function pr(b, c, d) {
        var e = d[d.length - 1],
            f = e.node.namespaceURI,
            g = x(e, "properties");
        hq(b, null, "lat", c[1]);
        hq(b, null, "lon", c[0]);
        switch (x(e, "geometryLayout")) {
            case "XYZM":
                0 !== c[3] && (g.time = c[3]);
            case "XYZ":
                0 !== c[2] && (g.ele = c[2]);
                break;
            case "XYM":
                0 !== c[2] && (g.time = c[2])
        }
        c = qr[f];
        e = tq(g, c);
        vq({
            node: b,
            properties: g
        }, rr, sq, e, d, c)
    }
    var or = ["text", "type"],
        nr = oq(Wq, {
            text: V(Jq),
            type: V(Jq)
        }),
        sr = oq(Wq, "name cmt desc src link number type rtept".split(" ")),
        tr = oq(Wq, {
            name: V(Jq),
            cmt: V(Jq),
            desc: V(Jq),
            src: V(Jq),
            link: V(mr),
            number: V(Lq),
            type: V(Jq),
            rtept: pq(V(pr))
        }),
        ur = oq(Wq, "name cmt desc src link number type trkseg".split(" ")),
        xr = oq(Wq, {
            name: V(Jq),
            cmt: V(Jq),
            desc: V(Jq),
            src: V(Jq),
            link: V(mr),
            number: V(Lq),
            type: V(Jq),
            trkseg: pq(V(function (b, c, d) {
                vq({
                    node: b,
                    geometryLayout: c.a,
                    properties: {}
                }, vr, wr, c.K(), d)
            }))
        }),
        wr = qq("trkpt"),
        vr = oq(Wq, {
            trkpt: V(pr)
        }),
        qr = oq(Wq, "ele time magvar geoidheight name cmt desc src link sym type fix sat hdop vdop pdop ageofdgpsdata dgpsid".split(" ")),
        rr = oq(Wq, {
            ele: V(Kq),
            time: V(function (b, c) {
                var d = new Date(1E3 * c),
                    d = d.getUTCFullYear() + "-" + Ma(d.getUTCMonth() + 1) + "-" + Ma(d.getUTCDate()) + "T" + Ma(d.getUTCHours()) + ":" + Ma(d.getUTCMinutes()) + ":" + Ma(d.getUTCSeconds()) + "Z";
                b.appendChild(Lp.createTextNode(d))
            }),
            magvar: V(Kq),
            geoidheight: V(Kq),
            name: V(Jq),
            cmt: V(Jq),
            desc: V(Jq),
            src: V(Jq),
            link: V(mr),
            sym: V(Jq),
            type: V(Jq),
            fix: V(Jq),
            sat: V(Lq),
            hdop: V(Kq),
            vdop: V(Kq),
            pdop: V(Kq),
            ageofdgpsdata: V(Kq),
            dgpsid: V(Lq)
        }),
        yr = {
            Point: "wpt",
            LineString: "rte",
            MultiLineString: "trk"
        };

    function zr(b, c) {
        var d = b.N();
        if (m(d)) return Op(c[c.length - 1].node.namespaceURI, yr[d.H()])
    }
    var Ar = oq(Wq, {
        rte: V(function (b, c, d) {
            var e = d[0],
                f = c.L();
            b = {
                node: b,
                properties: f
            };
            c = c.N();
            m(c) && (c = xp(c, !0, e), b.geometryLayout = c.a, e = c.K(), f.rtept = e);
            e = sr[d[d.length - 1].node.namespaceURI];
            f = tq(f, e);
            vq(b, tr, sq, f, d, e)
        }),
        trk: V(function (b, c, d) {
            var e = d[0],
                f = c.L();
            b = {
                node: b,
                properties: f
            };
            c = c.N();
            m(c) && (c = xp(c, !0, e), e = c.Ec(), f.trkseg = e);
            e = ur[d[d.length - 1].node.namespaceURI];
            f = tq(f, e);
            vq(b, xr, sq, f, d, e)
        }),
        wpt: V(function (b, c, d) {
            var e = d[0],
                f = d[d.length - 1],
                g = c.L();
            f.properties = g;
            c = c.N();
            m(c) && (c = xp(c, !0, e), f.geometryLayout = c.a, pr(b, c.K(), d))
        })
    });
    Vq.prototype.a = function (b, c) {
        c = wp(this, c);
        var d = Op("http://www.topografix.com/GPX/1/1", "gpx");
        vq({
            node: d
        }, Ar, zr, b, [c]);
        return d
    };

    function Br(b) {
        b = Cr(b);
        return Va(b, function (b) {
            return b.b.substring(b.c, b.a)
        })
    }
    function Dr(b, c, d) {
        this.b = b;
        this.c = c;
        this.a = d
    }
    function Cr(b) {
        for (var c = RegExp("\r\n|\r|\n", "g"), d = 0, e, f = []; e = c.exec(b);) d = new Dr(b, d, e.index), f.push(d), d = c.lastIndex;
        d < b.length && (d = new Dr(b, d, b.length), f.push(d));
        return f
    };

    function Er() {
        this.defaultDataProjection = null
    }
    u(Er, up);
    l = Er.prototype;
    l.H = function () {
        return "text"
    };
    l.Nb = function (b, c) {
        return this.Ic(ia(b) ? b : "", wp(this, c))
    };
    l.ja = function (b, c) {
        return this.ze(ia(b) ? b : "", wp(this, c))
    };
    l.Jc = function (b, c) {
        return this.Kc(ia(b) ? b : "", wp(this, c))
    };
    l.Ba = function (b) {
        return this.Ce(ia(b) ? b : "")
    };
    l.Pd = function (b, c) {
        return this.Qd(b, wp(this, c))
    };
    l.Qb = function (b, c) {
        return this.ig(b, wp(this, c))
    };
    l.Qc = function (b, c) {
        return this.Rc(b, wp(this, c))
    };

    function Fr(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ee("EPSG:4326");
        this.a = m(b.altitudeMode) ? b.altitudeMode : "none"
    }
    u(Fr, Er);
    var Gr = /^B(\d{2})(\d{2})(\d{2})(\d{2})(\d{5})([NS])(\d{3})(\d{5})([EW])([AV])(\d{5})(\d{5})/,
        Hr = /^H.([A-Z]{3}).*?:(.*)/,
        Ir = /^HFDTE(\d{2})(\d{2})(\d{2})/;
    Fr.prototype.Ic = function (b, c) {
        var d = this.a,
            e = Br(b),
            f = {}, g = [],
            h = 2E3,
            k = 0,
            n = 1,
            p, q;
        p = 0;
        for (q = e.length; p < q; ++p) {
            var r = e[p],
                s;
            if ("B" == r.charAt(0)) {
                if (s = Gr.exec(r)) {
                    var r = parseInt(s[1], 10),
                        v = parseInt(s[2], 10),
                        y = parseInt(s[3], 10),
                        C = parseInt(s[4], 10) + parseInt(s[5], 10) / 6E4;
                    "S" == s[6] && (C = -C);
                    var F = parseInt(s[7], 10) + parseInt(s[8], 10) / 6E4;
                    "W" == s[9] && (F = -F);
                    g.push(F, C);
                    "none" != d && g.push("gps" == d ? parseInt(s[11], 10) : "barometric" == d ? parseInt(s[12], 10) : 0);
                    g.push(Date.UTC(h, k, n, r, v, y) / 1E3)
                }
            } else if ("H" == r.charAt(0)) if (s = Ir.exec(r)) n = parseInt(s[1], 10), k = parseInt(s[2], 10) - 1, h = 2E3 + parseInt(s[3], 10);
            else if (s = Hr.exec(r)) f[s[1]] = Aa(s[2]), Ir.exec(r)
        }
        if (0 === g.length) return null;
        e = new M(null);
        qn(e, "none" == d ? "XYM" : "XYZM", g);
        d = new R(xp(e, !1, c));
        d.G(f);
        return d
    };
    Fr.prototype.ze = function (b, c) {
        var d = this.Ic(b, c);
        return null === d ? [] : [d]
    };
    Fr.prototype.Ce = function () {
        return this.defaultDataProjection
    };

    function Jr(b) {
        b = m(b) ? b : {};
        this.d = b.font;
        this.e = b.rotation;
        this.c = b.scale;
        this.b = b.text;
        this.g = b.textAlign;
        this.o = b.textBaseline;
        this.a = m(b.fill) ? b.fill : null;
        this.f = m(b.stroke) ? b.stroke : null;
        this.i = m(b.offsetX) ? b.offsetX : 0;
        this.n = m(b.offsetY) ? b.offsetY : 0
    }
    l = Jr.prototype;
    l.kh = function () {
        return this.d
    };
    l.yh = function () {
        return this.i
    };
    l.zh = function () {
        return this.n
    };
    l.dk = function () {
        return this.a
    };
    l.ek = function () {
        return this.e
    };
    l.fk = function () {
        return this.c
    };
    l.gk = function () {
        return this.f
    };
    l.hk = function () {
        return this.b
    };
    l.Hh = function () {
        return this.g
    };
    l.Ih = function () {
        return this.o
    };
    l.dl = function (b) {
        this.d = b
    };
    l.cl = function (b) {
        this.a = b
    };
    l.ik = function (b) {
        this.e = b
    };
    l.jk = function (b) {
        this.c = b
    };
    l.kl = function (b) {
        this.f = b
    };
    l.ll = function (b) {
        this.b = b
    };
    l.ml = function (b) {
        this.g = b
    };
    l.nl = function (b) {
        this.o = b
    };

    function Kr(b) {
        function c(b) {
            return ga(b) ? b : ia(b) ? (!(b in e) && "#" + b in e && (b = "#" + b), c(e[b])) : d
        }
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ee("EPSG:4326");
        var d = m(b.defaultStyle) ? b.defaultStyle : Lr,
            e = {};
        this.b = m(b.extractStyles) ? b.extractStyles : !0;
        this.c = e;
        this.d = function () {
            var b = this.get("Style");
            if (m(b)) return b;
            b = this.get("styleUrl");
            return m(b) ? c(b) : d
        }
    }
    u(Kr, wq);
    var Mr = ["http://www.google.com/kml/ext/2.2"],
        Nr = [null, "http://earth.google.com/kml/2.0", "http://earth.google.com/kml/2.1", "http://earth.google.com/kml/2.2", "http://www.opengis.net/kml/2.2"],
        Or = [255, 255, 255, 1],
        Pr = new Rl({
            color: Or
        }),
        Qr = [2, 20],
        Rr = [32, 32],
        Sr = new Sj({
            anchor: Qr,
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            crossOrigin: "anonymous",
            rotation: 0,
            scale: 1,
            size: Rr,
            src: "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png"
        }),
        Tr = new Nl({
            color: Or,
            width: 1
        }),
        Ur = new Jr({
            font: "normal 16px Helvetica",
            fill: Pr,
            stroke: Tr,
            scale: 1
        }),
        Lr = [new Tl({
            fill: Pr,
            image: Sr,
            text: Ur,
            stroke: Tr,
            zIndex: 0
        })],
        Vr = {
            fraction: "fraction",
            pixels: "pixels"
        };

    function Wr(b) {
        b = Pp(b, !1);
        if (b = /^\s*#?\s*([0-9A-Fa-f]{8})\s*$/.exec(b)) return b = b[1], [parseInt(b.substr(6, 2), 16), parseInt(b.substr(4, 2), 16), parseInt(b.substr(2, 2), 16), parseInt(b.substr(0, 2), 16) / 255]
    }

    function Xr(b) {
        b = Pp(b, !1);
        for (var c = [], d = /^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)(?:\s*,\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?))?\s*/i, e; e = d.exec(b);) c.push(parseFloat(e[1]), parseFloat(e[2]), e[3] ? parseFloat(e[3]) : 0), b = b.substr(e[0].length);
        return "" !== b ? void 0 : c
    }
    function Yr(b) {
        var c = Pp(b, !1);
        return null != b.baseURI ? Ph(b.baseURI, Aa(c)).toString() : Aa(c)
    }
    function Zr(b) {
        b = Dq(b);
        if (m(b)) return Math.sqrt(b)
    }
    function $r(b, c) {
        return W(null, as, b, c)
    }

    function bs(b, c) {
        var d = W({
            k: [],
            gg: []
        }, cs, b, c);
        if (m(d)) {
            var e = d.k,
                d = d.gg,
                f, g;
            f = 0;
            for (g = Math.min(e.length, d.length); f < g; ++f) e[4 * f + 3] = d[f];
            d = new M(null);
            qn(d, "XYZM", e);
            return d
        }
    }
    function ds(b, c) {
        var d = W(null, es, b, c);
        if (m(d)) {
            var e = new M(null);
            qn(e, "XYZ", d);
            return e
        }
    }
    function fs(b, c) {
        var d = W(null, es, b, c);
        if (m(d)) {
            var e = new H(null);
            wl(e, "XYZ", d, [d.length]);
            return e
        }
    }

    function gs(b, c) {
        var d = W([], hs, b, c);
        if (!m(d)) return null;
        if (0 === d.length) return new jn(d);
        var e = !0,
            f = d[0].H(),
            g, h, k;
        h = 1;
        for (k = d.length; h < k; ++h) if (g = d[h], g.H() != f) {
            e = !1;
            break
        }
        if (e) {
            if ("Point" == f) {
                g = d[0];
                e = g.a;
                f = g.k;
                h = 1;
                for (k = d.length; h < k; ++h) g = d[h], db(f, g.k);
                d = new un(null);
                Qk(d, e, f);
                d.l();
                return d
            }
            return "LineString" == f ? (g = new rn(null), tn(g, d), g) : "Polygon" == f ? (g = new vn(null), xn(g, d), g) : "GeometryCollection" == f ? new jn(d) : null
        }
        return new jn(d)
    }

    function is(b, c) {
        var d = W(null, es, b, c);
        if (null != d) {
            var e = new jl(null);
            kl(e, "XYZ", d);
            return e
        }
    }
    function js(b, c) {
        var d = W([null], ks, b, c);
        if (null != d && null !== d[0]) {
            var e = new H(null),
                f = d[0],
                g = [f.length],
                h, k;
            h = 1;
            for (k = d.length; h < k; ++h) db(f, d[h]), g.push(f.length);
            wl(e, "XYZ", f, g);
            return e
        }
    }

    function ls(b, c) {
        var d = W({}, ms, b, c);
        if (!m(d)) return null;
        var e = x(d, "fillStyle", Pr),
            f = x(d, "fill");
        m(f) && !f && (e = null);
        var f = x(d, "imageStyle", Sr),
            g = x(d, "textStyle", Ur),
            h = x(d, "strokeStyle", Tr),
            d = x(d, "outline");
        m(d) && !d && (h = null);
        return [new Tl({
            fill: e,
            image: f,
            stroke: h,
            text: g,
            zIndex: void 0
        })]
    }
    var ns = nq(Nr, {
        value: lq(Hq)
    }),
        ps = nq(Nr, {
            Data: function (b, c) {
                var d = b.getAttribute("name");
                if (null !== d) {
                    var e = W(void 0, ns, b, c);
                    m(e) && (c[c.length - 1][d] = e)
                }
            },
            SchemaData: function (b, c) {
                uq(os, b, c)
            }
        }),
        as = nq(Nr, {
            coordinates: lq(Xr)
        }),
        ks = nq(Nr, {
            innerBoundaryIs: function (b, c) {
                var d = W(void 0, qs, b, c);
                m(d) && c[c.length - 1].push(d)
            },
            outerBoundaryIs: function (b, c) {
                var d = W(void 0, rs, b, c);
                m(d) && (c[c.length - 1][0] = d)
            }
        }),
        cs = nq(Nr, {
            when: function (b, c) {
                var d = c[c.length - 1].gg,
                    e = Pp(b, !1);
                if (e = /^\s*(\d{4})($|-(\d{2})($|-(\d{2})($|T(\d{2}):(\d{2}):(\d{2})(Z|(?:([+\-])(\d{2})(?::(\d{2}))?)))))\s*$/.exec(e)) {
                    var f = Date.UTC(parseInt(e[1], 10), m(e[3]) ? parseInt(e[3], 10) - 1 : 0, m(e[5]) ? parseInt(e[5], 10) : 1, m(e[7]) ? parseInt(e[7], 10) : 0, m(e[8]) ? parseInt(e[8], 10) : 0, m(e[9]) ? parseInt(e[9], 10) : 0);
                    if (m(e[10]) && "Z" != e[10]) {
                        var g = "-" == e[11] ? -1 : 1,
                            f = f + 60 * g * parseInt(e[12], 10);
                        m(e[13]) && (f += 3600 * g * parseInt(e[13], 10))
                    }
                    d.push(f)
                } else d.push(0)
            }
        }, nq(Mr, {
            coord: function (b, c) {
                var d = c[c.length - 1].k,
                    e = Pp(b, !1);
                (e = /^\s*([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s+([+\-]?\d+(?:\.\d*)?(?:e[+\-]?\d*)?)\s*$/i.exec(e)) ? d.push(parseFloat(e[1]), parseFloat(e[2]), parseFloat(e[3]), 0) : d.push(0, 0, 0, 0)
            }
        })),
        es = nq(Nr, {
            coordinates: lq(Xr)
        }),
        ss = nq(Nr, {
            href: S(Yr)
        }, nq(Mr, {
            x: S(Dq),
            y: S(Dq),
            w: S(Dq),
            h: S(Dq)
        })),
        ts = nq(Nr, {
            Icon: S(function (b, c) {
                var d = W({}, ss, b, c);
                return m(d) ? d : null
            }),
            heading: S(Dq),
            hotSpot: S(function (b) {
                var c = b.getAttribute("xunits"),
                    d = b.getAttribute("yunits");
                return {
                    x: parseFloat(b.getAttribute("x")),
                    Je: Vr[c],
                    y: parseFloat(b.getAttribute("y")),
                    Ke: Vr[d]
                }
            }),
            scale: S(Zr)
        }),
        qs = nq(Nr, {
            LinearRing: lq($r)
        }),
        us = nq(Nr, {
            color: S(Wr),
            scale: S(Zr)
        }),
        vs = nq(Nr, {
            color: S(Wr),
            width: S(Dq)
        }),
        hs = nq(Nr, {
            LineString: kq(ds),
            LinearRing: kq(fs),
            MultiGeometry: kq(gs),
            Point: kq(is),
            Polygon: kq(js)
        }),
        ws = nq(Mr, {
            Track: kq(bs)
        }),
        rs = nq(Nr, {
            LinearRing: lq($r)
        }),
        xs = nq(Nr, {
            Style: S(ls),
            key: S(Hq),
            styleUrl: S(function (b) {
                var c = Aa(Pp(b, !1));
                return null != b.baseURI ? Ph(b.baseURI, c).toString() : c
            })
        }),
        zs = nq(Nr, {
            ExtendedData: function (b, c) {
                uq(ps, b, c)
            },
            MultiGeometry: S(gs, "geometry"),
            LineString: S(ds, "geometry"),
            LinearRing: S(fs, "geometry"),
            Point: S(is, "geometry"),
            Polygon: S(js,
                "geometry"),
            Style: S(ls),
            StyleMap: function (b, c) {
                var d = W(void 0, ys, b, c);
                if (m(d)) {
                    var e = c[c.length - 1];
                    ga(d) ? e.Style = d : ia(d) && (e.styleUrl = d)
                }
            },
            address: S(Hq),
            description: S(Hq),
            name: S(Hq),
            open: S(Aq),
            phoneNumber: S(Hq),
            styleUrl: S(Yr),
            visibility: S(Aq)
        }, nq(Mr, {
            MultiTrack: S(function (b, c) {
                var d = W([], ws, b, c);
                if (m(d)) {
                    var e = new rn(null);
                    tn(e, d);
                    return e
                }
            }, "geometry"),
            Track: S(bs, "geometry")
        })),
        As = nq(Nr, {
            color: S(Wr),
            fill: S(Aq),
            outline: S(Aq)
        }),
        os = nq(Nr, {
            SimpleData: function (b, c) {
                var d = b.getAttribute("name");
                if (null !== d) {
                    var e = Hq(b);
                    c[c.length - 1][d] = e
                }
            }
        }),
        ms = nq(Nr, {
            IconStyle: function (b, c) {
                var d = W({}, ts, b, c);
                if (m(d)) {
                    var e = c[c.length - 1],
                        f = x(d, "Icon", {}),
                        g;
                    g = x(f, "href");
                    g = m(g) ? g : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png";
                    var h, k, n, p = x(d, "hotSpot");
                    m(p) ? (h = [p.x, p.y], k = p.Je, n = p.Ke) : "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" === g ? (h = Qr, n = k = "pixels") : /^http:\/\/maps\.(?:google|gstatic)\.com\//.test(g) && (h = [.5, 0], n = k = "fraction");
                    var q, p = x(f, "x"),
                        r = x(f, "y");
                    m(p) && m(r) && (q = [p, r]);
                    var s, p = x(f, "w"),
                        f = x(f, "h");
                    m(p) && m(f) && (s = [p, f]);
                    var v, f = x(d, "heading");
                    m(f) && (v = bc(f));
                    d = x(d, "scale");
                    "https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" == g && (s = Rr);
                    h = new Sj({
                        anchor: h,
                        anchorOrigin: "bottom-left",
                        anchorXUnits: k,
                        anchorYUnits: n,
                        crossOrigin: "anonymous",
                        offset: q,
                        offsetOrigin: "bottom-left",
                        rotation: v,
                        scale: d,
                        size: s,
                        src: g
                    });
                    e.imageStyle = h
                }
            },
            LabelStyle: function (b, c) {
                var d = W({}, us, b, c);
                m(d) && (c[c.length - 1].textStyle = new Jr({
                    fill: new Rl({
                        color: x(d, "color", Or)
                    }),
                    scale: x(d, "scale")
                }))
            },
            LineStyle: function (b, c) {
                var d = W({}, vs, b, c);
                m(d) && (c[c.length - 1].strokeStyle = new Nl({
                    color: x(d, "color", Or),
                    width: x(d, "width", 1)
                }))
            },
            PolyStyle: function (b, c) {
                var d = W({}, As, b, c);
                if (m(d)) {
                    var e = c[c.length - 1];
                    e.fillStyle = new Rl({
                        color: x(d, "color", Or)
                    });
                    var f = x(d, "fill");
                    m(f) && (e.fill = f);
                    d = x(d, "outline");
                    m(d) && (e.outline = d)
                }
            }
        }),
        ys = nq(Nr, {
            Pair: function (b, c) {
                var d = W({}, xs, b, c);
                if (m(d)) {
                    var e = x(d, "key");
                    m(e) && "normal" == e && (e = x(d, "styleUrl"), m(e) && (c[c.length - 1] = e), d = x(d, "Style"), m(d) && (c[c.length - 1] = d))
                }
            }
        });
    l = Kr.prototype;
    l.Of = function (b, c) {
        Tp(b);
        var d = nq(Nr, {
            Folder: jq(this.Of, this),
            Placemark: kq(this.Be, this),
            Style: sa(this.Sk, this),
            StyleMap: sa(this.Rk, this)
        }),
            d = W([], d, b, c, this);
        if (m(d)) return d
    };
    l.Be = function (b, c) {
        var d = W({
            geometry: null
        }, zs, b, c);
        if (m(d)) {
            var e = new R,
                f = b.getAttribute("id");
            null === f || e.d(f);
            f = c[0];
            null != d.geometry && xp(d.geometry, !1, f);
            e.G(d);
            this.b && e.i(this.d);
            return e
        }
    };
    l.Sk = function (b, c) {
        var d = b.getAttribute("id");
        if (null !== d) {
            var e = ls(b, c);
            m(e) && (d = null != b.baseURI ? Ph(b.baseURI, "#" + d).toString() : "#" + d, this.c[d] = e)
        }
    };
    l.Rk = function (b, c) {
        var d = b.getAttribute("id");
        if (null !== d) {
            var e = W(void 0, ys, b, c);
            m(e) && (d = null != b.baseURI ? Ph(b.baseURI, "#" + d).toString() : "#" + d, this.c[d] = e)
        }
    };
    l.Pf = function (b, c) {
        if (!Za(Nr, b.namespaceURI)) return null;
        var d = this.Be(b, [vp(this, b, c)]);
        return m(d) ? d : null
    };
    l.Ob = function (b, c) {
        if (!Za(Nr, b.namespaceURI)) return [];
        var d;
        d = Tp(b);
        if ("Document" == d || "Folder" == d) return d = this.Of(b, [vp(this, b, c)]), m(d) ? d : [];
        if ("Placemark" == d) return d = this.Be(b, [vp(this, b, c)]), m(d) ? [d] : [];
        if ("kml" == d) {
            d = [];
            var e;
            for (e = b.firstElementChild; null !== e; e = e.nextElementSibling) {
                var f = this.Ob(e, c);
                m(f) && db(d, f)
            }
            return d
        }
        return []
    };
    l.Nk = function (b) {
        if (Wp(b)) return Bs(this, b);
        if (Zp(b)) return Cs(this, b);
        if (ia(b)) return b = iq(b), Bs(this, b)
    };

    function Bs(b, c) {
        var d;
        for (d = c.firstChild; null !== d; d = d.nextSibling) if (1 == d.nodeType) {
            var e = Cs(b, d);
            if (m(e)) return e
        }
    }
    function Cs(b, c) {
        var d;
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling) if (Za(Nr, d.namespaceURI) && "name" == d.localName) return Hq(d);
        for (d = c.firstElementChild; null !== d; d = d.nextElementSibling) {
            var e = Tp(d);
            if (Za(Nr, d.namespaceURI) && ("Document" == e || "Folder" == e || "Placemark" == e || "kml" == e) && (e = Cs(b, d), m(e))) return e
        }
    }
    l.Lc = function () {
        return this.defaultDataProjection
    };
    l.tc = function () {
        return this.defaultDataProjection
    };

    function Ds(b, c) {
        var d = ug(c),
            d = [255 * (4 == d.length ? d[3] : 1), d[2], d[1], d[0]],
            e;
        for (e = 0; 4 > e; ++e) {
            var f = parseInt(d[e], 10).toString(16);
            d[e] = 1 == f.length ? "0" + f : f
        }
        Jq(b, d.join(""))
    }
    function Es(b, c, d) {
        vq({
            node: b
        }, Fs, Gs, [c], d)
    }

    function Hs(b, c, d) {
        var e = {
            node: b
        };
        null != c.X && b.setAttribute("id", c.X);
        b = c.L();
        var f = c.a;
        m(f) && (f = f.call(c, 0), null !== f && 0 < f.length && (b.Style = f[0], f = f[0].c, null !== f && (b.name = f.b)));
        f = Is[d[d.length - 1].node.namespaceURI];
        b = tq(b, f);
        vq(e, Js, sq, b, d, f);
        b = d[0];
        c = c.N();
        null != c && (c = xp(c, !0, b));
        vq(e, Js, Ks, [c], d)
    }
    function Ls(b, c, d) {
        var e = c.k;
        b = {
            node: b
        };
        b.layout = c.a;
        b.stride = c.s;
        vq(b, Ms, Ns, [e], d)
    }
    function Os(b, c, d) {
        c = c.dd();
        var e = c.shift();
        b = {
            node: b
        };
        vq(b, Ps, Qs, c, d);
        vq(b, Ps, Rs, [e], d)
    }

    function Ss(b, c) {
        Kq(b, c * c)
    }
    var Ts = oq(Nr, ["Document", "Placemark"]),
        Ws = oq(Nr, {
            Document: V(function (b, c, d) {
                vq({
                    node: b
                }, Us, Vs, c, d)
            }),
            Placemark: V(Hs)
        }),
        Us = oq(Nr, {
            Placemark: V(Hs)
        }),
        Xs = {
            Point: "Point",
            LineString: "LineString",
            LinearRing: "LinearRing",
            Polygon: "Polygon",
            MultiPoint: "MultiGeometry",
            MultiLineString: "MultiGeometry",
            MultiPolygon: "MultiGeometry"
        }, Ys = oq(Nr, ["href"], oq(Mr, ["x", "y", "w", "h"])),
        Zs = oq(Nr, {
            href: V(Jq)
        }, oq(Mr, {
            x: V(Kq),
            y: V(Kq),
            w: V(Kq),
            h: V(Kq)
        })),
        $s = oq(Nr, ["scale", "heading", "Icon", "hotSpot"]),
        bt = oq(Nr, {
            Icon: V(function (b,
            c, d) {
                b = {
                    node: b
                };
                var e = Ys[d[d.length - 1].node.namespaceURI],
                    f = tq(c, e);
                vq(b, Zs, sq, f, d, e);
                e = Ys[Mr[0]];
                f = tq(c, e);
                vq(b, Zs, at, f, d, e)
            }),
            heading: V(Kq),
            hotSpot: V(function (b, c) {
                b.setAttribute("x", c.x);
                b.setAttribute("y", c.y);
                b.setAttribute("xunits", c.Je);
                b.setAttribute("yunits", c.Ke)
            }),
            scale: V(Ss)
        }),
        ct = oq(Nr, ["color", "scale"]),
        dt = oq(Nr, {
            color: V(Ds),
            scale: V(Ss)
        }),
        et = oq(Nr, ["color", "width"]),
        ft = oq(Nr, {
            color: V(Ds),
            width: V(Kq)
        }),
        Fs = oq(Nr, {
            LinearRing: V(Ls)
        }),
        gt = oq(Nr, {
            LineString: V(Ls),
            Point: V(Ls),
            Polygon: V(Os)
        }),
        Is = oq(Nr, "name open visibility address phoneNumber description styleUrl Style".split(" ")),
        Js = oq(Nr, {
            MultiGeometry: V(function (b, c, d) {
                b = {
                    node: b
                };
                var e = c.H(),
                    f, g;
                "MultiPoint" == e ? (f = c.xd(), g = ht) : "MultiLineString" == e ? (f = c.Ec(), g = it) : "MultiPolygon" == e && (f = c.gd(), g = jt);
                vq(b, gt, g, f, d)
            }),
            LineString: V(Ls),
            LinearRing: V(Ls),
            Point: V(Ls),
            Polygon: V(Os),
            Style: V(function (b, c, d) {
                b = {
                    node: b
                };
                var e = {}, f = c.e,
                    g = c.b,
                    h = c.f;
                c = c.c;
                null !== h && (e.IconStyle = h);
                null !== c && (e.LabelStyle = c);
                null !== g && (e.LineStyle = g);
                null !== f && (e.PolyStyle = f);
                c = kt[d[d.length - 1].node.namespaceURI];
                e = tq(e, c);
                vq(b, lt, sq, e, d, c)
            }),
            address: V(Jq),
            description: V(Jq),
            name: V(Jq),
            open: V(Iq),
            phoneNumber: V(Jq),
            styleUrl: V(Jq),
            visibility: V(Iq)
        }),
        Ms = oq(Nr, {
            coordinates: V(function (b, c, d) {
                d = d[d.length - 1];
                var e = x(d, "layout");
                d = x(d, "stride");
                var f;
                "XY" == e || "XYM" == e ? f = 2 : ("XYZ" == e || "XYZM" == e) && (f = 3);
                var g, h = c.length,
                    k = "";
                if (0 < h) {
                    k += c[0];
                    for (e = 1; e < f; ++e) k += "," + c[e];
                    for (g = d; g < h; g += d) for (k += " " + c[g], e = 1; e < f; ++e) k += "," + c[g + e]
                }
                Jq(b, k)
            })
        }),
        Ps = oq(Nr, {
            outerBoundaryIs: V(Es),
            innerBoundaryIs: V(Es)
        }),
        mt = oq(Nr, {
            color: V(Ds)
        }),
        kt = oq(Nr, ["IconStyle", "LabelStyle", "LineStyle", "PolyStyle"]),
        lt = oq(Nr, {
            IconStyle: V(function (b, c, d) {
                b = {
                    node: b
                };
                var e = {}, f = c.ab(),
                    g = c.cd(),
                    h = {
                        href: c.a.f
                    };
                if (null !== f) {
                    h.w = f[0];
                    h.h = f[1];
                    var k = c.tb(),
                        n = c.zb();
                    null !== n && null !== g && 0 !== n[0] && n[1] !== f[1] && (h.x = n[0], h.y = g[1] - (n[1] + f[1]));
                    null !== k && 0 !== k[0] && k[1] !== f[1] && (e.hotSpot = {
                        x: k[0],
                        Je: "pixels",
                        y: f[1] - k[1],
                        Ke: "pixels"
                    })
                }
                e.Icon = h;
                f = c.n;
                1 !== f && (e.scale = f);
                c = c.i;
                0 !== c && (e.heading = c);
                c = $s[d[d.length - 1].node.namespaceURI];
                e = tq(e, c);
                vq(b, bt, sq, e, d, c)
            }),
            LabelStyle: V(function (b, c, d) {
                b = {
                    node: b
                };
                var e = {}, f = c.a;
                null !== f && (e.color = f.a);
                c = c.c;
                m(c) && 1 !== c && (e.scale = c);
                c = ct[d[d.length - 1].node.namespaceURI];
                e = tq(e, c);
                vq(b, dt, sq, e, d, c)
            }),
            LineStyle: V(function (b, c, d) {
                b = {
                    node: b
                };
                var e = et[d[d.length - 1].node.namespaceURI];
                c = tq({
                    color: c.a,
                    width: c.c
                }, e);
                vq(b, ft, sq, c, d, e)
            }),
            PolyStyle: V(function (b, c, d) {
                vq({
                    node: b
                }, mt, nt, [c.a], d)
            })
        });

    function at(b, c, d) {
        return Op(Mr[0], "gx:" + d)
    }

    function Vs(b, c) {
        return Op(c[c.length - 1].node.namespaceURI, "Placemark")
    }
    function Ks(b, c) {
        if (null != b) return Op(c[c.length - 1].node.namespaceURI, Xs[b.H()])
    }
    var nt = qq("color"),
        Ns = qq("coordinates"),
        Qs = qq("innerBoundaryIs"),
        ht = qq("Point"),
        it = qq("LineString"),
        Gs = qq("LinearRing"),
        jt = qq("Polygon"),
        Rs = qq("outerBoundaryIs");
    Kr.prototype.a = function (b, c) {
        c = wp(this, c);
        var d = Op(Nr[4], "kml");
        hq(d, "http://www.w3.org/2000/xmlns/", "xmlns:gx", Mr[0]);
        hq(d, "http://www.w3.org/2000/xmlns/", "xmlns:xsi", "http://www.w3.org/2001/XMLSchema-instance");
        hq(d, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", "http://www.opengis.net/kml/2.2 https://developers.google.com/kml/schema/kml22gx.xsd");
        var e = {
            node: d
        }, f = {};
        1 < b.length ? f.Document = b : 1 == b.length && (f.Placemark = b[0]);
        var g = Ts[d.namespaceURI],
            f = tq(f, g);
        vq(e, Ws, sq, f, [c], g);
        return d
    };

    function ot() {
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ee("EPSG:4326")
    }
    u(ot, wq);

    function pt(b, c) {
        var d = b.getAttribute("k"),
            e = b.getAttribute("v");
        c[c.length - 1].Oc[d] = e
    }
    var qt = [null],
        rt = nq(qt, {
            nd: function (b, c) {
                c[c.length - 1].pc.push(b.getAttribute("ref"))
            },
            tag: pt
        }),
        tt = nq(qt, {
            node: function (b, c) {
                var d = c[0],
                    e = c[c.length - 1],
                    f = b.getAttribute("id"),
                    g = [parseFloat(b.getAttribute("lon")), parseFloat(b.getAttribute("lat"))];
                e.pf[f] = g;
                var h = W({
                    Oc: {}
                }, st, b, c);
                xb(h.Oc) || (g = new jl(g), xp(g, !1, d), d = new R(g), d.d(f), d.G(h.Oc), e.features.push(d))
            },
            way: function (b, c) {
                for (var d = c[0], e = b.getAttribute("id"), f = W({
                    pc: [],
                    Oc: {}
                }, rt, b, c), g = c[c.length - 1], h = [], k = 0, n = f.pc.length; k < n; k++) db(h, x(g.pf,
                f.pc[k]));
                f.pc[0] == f.pc[f.pc.length - 1] ? (k = new H(null), wl(k, "XY", h, [h.length])) : (k = new M(null), qn(k, "XY", h));
                xp(k, !1, d);
                d = new R(k);
                d.d(e);
                d.G(f.Oc);
                g.features.push(d)
            }
        }),
        st = nq(qt, {
            tag: pt
        });
    ot.prototype.Ob = function (b, c) {
        var d = vp(this, b, c);
        return "osm" == b.localName && (d = W({
            pf: {},
            features: []
        }, tt, b, [d]), m(d.features)) ? d.features : []
    };
    ot.prototype.Lc = function () {
        return this.defaultDataProjection
    };
    ot.prototype.tc = function () {
        return this.defaultDataProjection
    };

    function ut(b) {
        return b.getAttributeNS("http://www.w3.org/1999/xlink", "href")
    };

    function vt() {}
    vt.prototype.a = function (b) {
        return Wp(b) ? wt(this, b) : Zp(b) ? xt(this, b) : ia(b) ? (b = iq(b), wt(this, b)) : null
    };

    function yt(b, c, d, e) {
        var f;
        m(e) ? f = m(void 0) ? void 0 : 0 : (e = [], f = 0);
        var g, h;
        for (g = 0; g < c;) for (h = b[g++], e[f++] = b[g++], e[f++] = h, h = 2; h < d; ++h) e[f++] = b[g++];
        e.length = f
    };

    function zt(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ee("EPSG:4326");
        this.a = m(b.factor) ? b.factor : 1E5
    }
    u(zt, Er);

    function At(b, c, d) {
        d = m(d) ? d : 1E5;
        var e, f = Array(c);
        for (e = 0; e < c; ++e) f[e] = 0;
        var g, h;
        g = 0;
        for (h = b.length; g < h;) for (e = 0; e < c; ++e, ++g) {
            var k = b[g],
                n = k - f[e];
            f[e] = k;
            b[g] = n
        }
        return Bt(b, d)
    }
    function Ct(b, c, d) {
        var e = m(d) ? d : 1E5,
            f = Array(c);
        for (d = 0; d < c; ++d) f[d] = 0;
        b = Dt(b, e);
        var g, e = 0;
        for (g = b.length; e < g;) for (d = 0; d < c; ++d, ++e) f[d] += b[e], b[e] = f[d];
        return b
    }

    function Bt(b, c) {
        var d = m(c) ? c : 1E5,
            e, f;
        e = 0;
        for (f = b.length; e < f; ++e) b[e] = Math.round(b[e] * d);
        d = 0;
        for (e = b.length; d < e; ++d) f = b[d], b[d] = 0 > f ? ~ (f << 1) : f << 1;
        d = "";
        e = 0;
        for (f = b.length; e < f; ++e) {
            for (var g = b[e], h = void 0, k = ""; 32 <= g;) h = (32 | g & 31) + 63, k += String.fromCharCode(h), g >>= 5;
            h = g + 63;
            k += String.fromCharCode(h);
            d += k
        }
        return d
    }

    function Dt(b, c) {
        var d = m(c) ? c : 1E5,
            e = [],
            f = 0,
            g = 0,
            h, k;
        h = 0;
        for (k = b.length; h < k; ++h) {
            var n = b.charCodeAt(h) - 63,
                f = f | (n & 31) << g;
            32 > n ? (e.push(f), g = f = 0) : g += 5
        }
        f = 0;
        for (g = e.length; f < g; ++f) h = e[f], e[f] = h & 1 ? ~ (h >> 1) : h >> 1;
        f = 0;
        for (g = e.length; f < g; ++f) e[f] /= d;
        return e
    }
    l = zt.prototype;
    l.Ic = function (b, c) {
        var d = this.Kc(b, c);
        return new R(d)
    };
    l.ze = function (b, c) {
        return [this.Ic(b, c)]
    };
    l.Kc = function (b, c) {
        var d = Ct(b, 2, this.a);
        yt(d, d.length, 2, d);
        d = dl(d, 0, d.length, 2);
        return xp(new M(d), !1, wp(this, c))
    };
    l.Ce = function () {
        return this.defaultDataProjection
    };
    l.Qd = function (b, c) {
        var d = b.N();
        return null != d ? this.Rc(d, c) : ""
    };
    l.ig = function (b, c) {
        return this.Qd(b[0], c)
    };
    l.Rc = function (b, c) {
        b = xp(b, !0, wp(this, c));
        var d = b.k,
            e = b.s;
        yt(d, d.length, e, d);
        return At(d, e, this.a)
    };

    function Et(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.defaultDataProjection = Ee(null != b.defaultDataProjection ? b.defaultDataProjection : "EPSG:4326")
    }
    u(Et, Ap);

    function Ft(b, c) {
        var d = [],
            e, f, g, h;
        g = 0;
        for (h = b.length; g < h; ++g) e = b[g], 0 < g && d.pop(), 0 <= e ? f = c[e] : f = c[~e].slice().reverse(), d.push.apply(d, f);
        e = 0;
        for (f = d.length; e < f; ++e) d[e] = d[e].slice();
        return d
    }
    function Gt(b, c, d, e, f) {
        b = b.geometries;
        var g = [],
            h, k;
        h = 0;
        for (k = b.length; h < k; ++h) g[h] = Ht(b[h], c, d, e, f);
        return g
    }

    function Ht(b, c, d, e, f) {
        var g = b.type,
            h = It[g];
        c = "Point" === g || "MultiPoint" === g ? h(b, d, e) : h(b, c);
        d = new R;
        d.Ma(xp(c, !1, f));
        m(b.id) && d.d(b.id);
        m(b.properties) && d.G(b.properties);
        return d
    }
    Et.prototype.b = function (b, c) {
        if ("Topology" == b.type) {
            var d, e = null,
                f = null;
            m(b.transform) && (d = b.transform, e = d.scale, f = d.translate);
            var g = b.arcs;
            if (m(d)) {
                d = e;
                var h = f,
                    k, n;
                k = 0;
                for (n = g.length; k < n; ++k) for (var p = g[k], q = d, r = h, s = 0, v = 0, y = void 0, C = void 0, F = void 0, C = 0, F = p.length; C < F; ++C) y = p[C], s += y[0], v += y[1], y[0] = s, y[1] = v, Jt(y, q, r)
            }
            d = [];
            h = rb(b.objects);
            k = 0;
            for (n = h.length; k < n; ++k) "GeometryCollection" === h[k].type ? (p = h[k], d.push.apply(d, Gt(p, g, e, f, c))) : (p = h[k], d.push(Ht(p, g, e, f, c)));
            return d
        }
        return []
    };

    function Jt(b, c, d) {
        b[0] = b[0] * c[0] + d[0];
        b[1] = b[1] * c[1] + d[1]
    }
    Et.prototype.Ba = function () {
        return this.defaultDataProjection
    };
    var It = {
        Point: function (b, c, d) {
            b = b.coordinates;
            null === c || null === d || Jt(b, c, d);
            return new jl(b)
        },
        LineString: function (b, c) {
            var d = Ft(b.arcs, c);
            return new M(d)
        },
        Polygon: function (b, c) {
            var d = [],
                e, f;
            e = 0;
            for (f = b.arcs.length; e < f; ++e) d[e] = Ft(b.arcs[e], c);
            return new H(d)
        },
        MultiPoint: function (b, c, d) {
            b = b.coordinates;
            var e, f;
            if (null !== c && null !== d) for (e = 0, f = b.length; e < f; ++e) Jt(b[e], c, d);
            return new un(b)
        },
        MultiLineString: function (b, c) {
            var d = [],
                e, f;
            e = 0;
            for (f = b.arcs.length; e < f; ++e) d[e] = Ft(b.arcs[e], c);
            return new rn(d)
        },
        MultiPolygon: function (b, c) {
            var d = [],
                e, f, g, h, k, n;
            k = 0;
            for (n = b.arcs.length; k < n; ++k) {
                e = b.arcs[k];
                f = [];
                g = 0;
                for (h = e.length; g < h; ++g) f[g] = Ft(e[g], c);
                d[k] = f
            }
            return new vn(d)
        }
    };

    function Kt(b) {
        b = m(b) ? b : {};
        this.e = b.featureType;
        this.b = b.featureNS;
        this.c = m(b.gmlFormat) ? b.gmlFormat : new X;
        this.d = m(b.schemaLocation) ? b.schemaLocation : "http://www.opengis.net/wfs http://schemas.opengis.net/wfs/1.1.0/wfs.xsd";
        this.defaultDataProjection = null
    }
    u(Kt, wq);
    Kt.prototype.Ob = function (b, c) {
        var d = {
            featureType: this.e,
            featureNS: this.b
        };
        Eb(d, vp(this, b, m(c) ? c : {}));
        d = W([], this.c.Td, b, [d], this.c);
        m(d) || (d = []);
        return d
    };
    Kt.prototype.g = function (b) {
        if (Wp(b)) return Lt(b);
        if (Zp(b)) return W({}, Mt, b, []);
        if (ia(b)) return b = iq(b), Lt(b)
    };
    Kt.prototype.f = function (b) {
        if (Wp(b)) return Nt(this, b);
        if (Zp(b)) return Ot(this, b);
        if (ia(b)) return b = iq(b), Nt(this, b)
    };

    function Nt(b, c) {
        for (var d = c.firstChild; null !== d; d = d.nextSibling) if (1 == d.nodeType) return Ot(b, d)
    }
    var Pt = {
        "http://www.opengis.net/gml": {
            boundedBy: S(zq.prototype.Id, "bounds")
        }
    };

    function Ot(b, c) {
        var d = {}, e = Gq(c.getAttribute("numberOfFeatures"));
        d.numberOfFeatures = e;
        return W(d, Pt, c, [], b.c)
    }
    var Qt = {
        "http://www.opengis.net/wfs": {
            totalInserted: S(Fq),
            totalUpdated: S(Fq),
            totalDeleted: S(Fq)
        }
    }, Rt = {
        "http://www.opengis.net/ogc": {
            FeatureId: kq(function (b) {
                return b.getAttribute("fid")
            })
        }
    }, St = {
        "http://www.opengis.net/wfs": {
            Feature: function (b, c) {
                uq(Rt, b, c)
            }
        }
    }, Mt = {
        "http://www.opengis.net/wfs": {
            TransactionSummary: S(function (b, c) {
                return W({}, Qt, b, c)
            }, "transactionSummary"),
            InsertResults: S(function (b, c) {
                return W([], St, b, c)
            }, "insertIds")
        }
    };

    function Lt(b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling) if (1 == b.nodeType) return W({}, Mt, b, [])
    }
    var Tt = {
        "http://www.opengis.net/wfs": {
            PropertyName: V(Jq)
        }
    };

    function Ut(b, c) {
        var d = Op("http://www.opengis.net/ogc", "Filter"),
            e = Op("http://www.opengis.net/ogc", "FeatureId");
        d.appendChild(e);
        e.setAttribute("fid", c);
        b.appendChild(d)
    }
    var Vt = {
        "http://www.opengis.net/wfs": {
            Insert: V(function (b, c, d) {
                var e = d[d.length - 1],
                    e = Op(x(e, "featureNS"), x(e, "featureType"));
                b.appendChild(e);
                X.prototype.hg(e, c, d)
            }),
            Update: V(function (b, c, d) {
                var e = d[d.length - 1],
                    f = x(e, "featureType"),
                    g = x(e, "featurePrefix"),
                    g = m(g) ? g : "feature",
                    h = x(e, "featureNS");
                b.setAttribute("typeName", g + ":" + f);
                hq(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + g, h);
                f = c.X;
                if (m(f)) {
                    for (var g = c.I(), h = [], k = 0, n = g.length; k < n; k++) {
                        var p = c.get(g[k]);
                        m(p) && h.push({
                            name: g[k],
                            value: p
                        })
                    }
                    vq({
                        node: b,
                        srsName: x(e, "srsName")
                    }, Vt, qq("Property"), h, d);
                    Ut(b, f)
                }
            }),
            Delete: V(function (b, c, d) {
                var e = d[d.length - 1];
                d = x(e, "featureType");
                var f = x(e, "featurePrefix"),
                    f = m(f) ? f : "feature",
                    e = x(e, "featureNS");
                b.setAttribute("typeName", f + ":" + d);
                hq(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + f, e);
                c = c.X;
                m(c) && Ut(b, c)
            }),
            Property: V(function (b, c, d) {
                var e = Op("http://www.opengis.net/wfs", "Name");
                b.appendChild(e);
                Jq(e, c.name);
                null != c.value && (e = Op("http://www.opengis.net/wfs", "Value"), b.appendChild(e), c.value instanceof Mk ? X.prototype.Rd(e,
                c.value, d) : Jq(e, c.value))
            }),
            Native: V(function (b, c) {
                m(c.yl) && b.setAttribute("vendorId", c.yl);
                m(c.al) && b.setAttribute("safeToIgnore", c.al);
                m(c.value) && Jq(b, c.value)
            })
        }
    }, Wt = {
        "http://www.opengis.net/wfs": {
            Query: V(function (b, c, d) {
                var e = d[d.length - 1],
                    f = x(e, "featurePrefix"),
                    g = x(e, "featureNS"),
                    h = x(e, "propertyNames"),
                    k = x(e, "srsName");
                b.setAttribute("typeName", (m(f) ? f + ":" : "") + c);
                m(k) && b.setAttribute("srsName", k);
                m(g) && hq(b, "http://www.w3.org/2000/xmlns/", "xmlns:" + f, g);
                c = Cb(e);
                c.node = b;
                vq(c, Tt, qq("PropertyName"),
                h, d);
                e = x(e, "bbox");
                m(e) && (h = Op("http://www.opengis.net/ogc", "Filter"), c = x(d[d.length - 1], "geometryName"), f = Op("http://www.opengis.net/ogc", "BBOX"), h.appendChild(f), g = Op("http://www.opengis.net/ogc", "PropertyName"), Jq(g, c), f.appendChild(g), X.prototype.Rd(f, e, d), b.appendChild(h))
            })
        }
    };
    Kt.prototype.n = function (b) {
        var c = Op("http://www.opengis.net/wfs", "GetFeature");
        c.setAttribute("service", "WFS");
        c.setAttribute("version", "1.1.0");
        m(b) && (m(b.handle) && c.setAttribute("handle", b.handle), m(b.outputFormat) && c.setAttribute("outputFormat", b.outputFormat), m(b.maxFeatures) && c.setAttribute("maxFeatures", b.maxFeatures), m(b.resultType) && c.setAttribute("resultType", b.resultType), m(b.rl) && c.setAttribute("startIndex", b.rl), m(b.count) && c.setAttribute("count", b.count));
        hq(c, "http://www.w3.org/2001/XMLSchema-instance",
            "xsi:schemaLocation", this.d);
        var d = b.featureTypes;
        b = [{
            node: c,
            srsName: b.srsName,
            featureNS: m(b.featureNS) ? b.featureNS : this.b,
            featurePrefix: b.featurePrefix,
            geometryName: b.geometryName,
            bbox: b.bbox,
            Mf: m(b.Mf) ? b.Mf : []
        }];
        var e = Cb(b[b.length - 1]);
        e.node = c;
        vq(e, Wt, qq("Query"), d, b);
        return c
    };
    Kt.prototype.j = function (b, c, d, e) {
        var f = [],
            g = Op("http://www.opengis.net/wfs", "Transaction");
        g.setAttribute("service", "WFS");
        g.setAttribute("version", "1.1.0");
        var h, k;
        m(e) && (h = m(e.gmlOptions) ? e.gmlOptions : {}, m(e.handle) && g.setAttribute("handle", e.handle));
        hq(g, "http://www.w3.org/2001/XMLSchema-instance", "xsi:schemaLocation", this.d);
        null != b && (k = {
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, Eb(k, h), vq(k, Vt, qq("Insert"), b, f));
        null != c && (k = {
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, Eb(k, h), vq(k, Vt, qq("Update"), c, f));
        null != d && vq({
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, Vt, qq("Delete"), d, f);
        m(e.nativeElements) && vq({
            node: g,
            featureNS: e.featureNS,
            featureType: e.featureType,
            featurePrefix: e.featurePrefix
        }, Vt, qq("Native"), e.nativeElements, f);
        return g
    };
    Kt.prototype.Lc = function (b) {
        for (b = b.firstChild; null !== b; b = b.nextSibling) if (1 == b.nodeType) return this.tc(b);
        return null
    };
    Kt.prototype.tc = function (b) {
        b = b.firstElementChild.firstElementChild;
        if (null != b) for (b = b.firstElementChild; null !== b; b = b.nextElementSibling) if (0 !== b.childNodes.length && (1 !== b.childNodes.length || 3 !== b.firstChild.nodeType)) {
            var c = [{}];
            this.c.Id(b, c);
            return Ee(c.pop().srsName)
        }
        return null
    };

    function Xt(b) {
        b = m(b) ? b : {};
        this.defaultDataProjection = null;
        this.a = m(b.splitCollection) ? b.splitCollection : !1
    }
    u(Xt, Er);

    function Yt(b) {
        b = b.K();
        return 0 == b.length ? "" : b[0] + " " + b[1]
    }
    function Zt(b) {
        b = b.K();
        for (var c = [], d = 0, e = b.length; d < e; ++d) c.push(b[d][0] + " " + b[d][1]);
        return c.join(",")
    }
    function $t(b) {
        var c = [];
        b = b.dd();
        for (var d = 0, e = b.length; d < e; ++d) c.push("(" + Zt(b[d]) + ")");
        return c.join(",")
    }
    function au(b) {
        var c = b.H();
        b = (0, bu[c])(b);
        c = c.toUpperCase();
        return 0 === b.length ? c + " EMPTY" : c + "(" + b + ")"
    }
    var bu = {
        Point: Yt,
        LineString: Zt,
        Polygon: $t,
        MultiPoint: function (b) {
            var c = [];
            b = b.xd();
            for (var d = 0, e = b.length; d < e; ++d) c.push("(" + Yt(b[d]) + ")");
            return c.join(",")
        },
        MultiLineString: function (b) {
            var c = [];
            b = b.Ec();
            for (var d = 0, e = b.length; d < e; ++d) c.push("(" + Zt(b[d]) + ")");
            return c.join(",")
        },
        MultiPolygon: function (b) {
            var c = [];
            b = b.gd();
            for (var d = 0, e = b.length; d < e; ++d) c.push("(" + $t(b[d]) + ")");
            return c.join(",")
        },
        GeometryCollection: function (b) {
            var c = [];
            b = b.af();
            for (var d = 0, e = b.length; d < e; ++d) c.push(au(b[d]));
            return c.join(",")
        }
    };
    l = Xt.prototype;
    l.Ic = function (b, c) {
        var d = this.Kc(b, c);
        if (m(d)) {
            var e = new R;
            e.Ma(d);
            return e
        }
        return null
    };
    l.ze = function (b, c) {
        var d = [],
            e = this.Kc(b, c);
        this.a && "GeometryCollection" == e.H() ? d = e.d : d = [e];
        for (var f = [], g = 0, h = d.length; g < h; ++g) e = new R, e.Ma(d[g]), f.push(e);
        return f
    };
    l.Kc = function (b, c) {
        var d;
        d = new cu(new du(b));
        d.a = eu(d.c);
        d = fu(d);
        return m(d) ? xp(d, !1, c) : null
    };
    l.Ce = function () {
        return null
    };
    l.Qd = function (b, c) {
        var d = b.N();
        return m(d) ? this.Rc(d, c) : ""
    };
    l.ig = function (b, c) {
        if (1 == b.length) return this.Qd(b[0], c);
        for (var d = [], e = 0, f = b.length; e < f; ++e) d.push(b[e].N());
        d = new jn(d);
        return this.Rc(d, c)
    };
    l.Rc = function (b, c) {
        return au(xp(b, !0, c))
    };

    function du(b) {
        this.c = b;
        this.a = -1
    }
    function gu(b, c) {
        var d = m(c) ? c : !1;
        return "0" <= b && "9" >= b || "." == b && !d
    }

    function eu(b) {
        var c = b.c.charAt(++b.a),
            d = {
                position: b.a,
                value: c
            };
        if ("(" == c) d.type = 2;
        else if ("," == c) d.type = 5;
        else if (")" == c) d.type = 3;
        else if (gu(c) || "-" == c) {
            d.type = 4;
            var e, c = b.a,
                f = !1;
            do "." == e && (f = !0), e = b.c.charAt(++b.a);
            while (gu(e, f));
            b = parseFloat(b.c.substring(c, b.a--));
            d.value = b
        } else if ("a" <= c && "z" >= c || "A" <= c && "Z" >= c) {
            d.type = 1;
            c = b.a;
            do e = b.c.charAt(++b.a);
            while ("a" <= e && "z" >= e || "A" <= e && "Z" >= e);
            b = b.c.substring(c, b.a--).toUpperCase();
            d.value = b
        } else {
            if (" " == c || "\t" == c || "\r" == c || "\n" == c) return eu(b);
            if ("" === c) d.type = 6;
            else throw Error("Unexpected character: " + c);
        }
        return d
    }
    function cu(b) {
        this.c = b
    }
    l = cu.prototype;
    l.match = function (b) {
        if (b = this.a.type == b) this.a = eu(this.c);
        return b
    };

    function fu(b) {
        var c = b.a;
        if (b.match(1)) {
            var d = c.value;
            if ("GEOMETRYCOLLECTION" == d) {
                a: {
                    if (b.match(2)) {
                        c = [];
                        do c.push(fu(b));
                        while (b.match(5));
                        if (b.match(3)) {
                            b = c;
                            break a
                        }
                    } else if (hu(b)) {
                        b = [];
                        break a
                    }
                    throw Error(iu(b));
                }
                return new jn(b)
            }
            var e = ju[d],
                c = ku[d];
            if (!m(e) || !m(c)) throw Error("Invalid geometry type: " + d);
            b = e.call(b);
            return new c(b)
        }
        throw Error(iu(b));
    }
    l.we = function () {
        if (this.match(2)) {
            var b = lu(this);
            if (this.match(3)) return b
        } else if (hu(this)) return null;
        throw Error(iu(this));
    };
    l.ve = function () {
        if (this.match(2)) {
            var b = mu(this);
            if (this.match(3)) return b
        } else if (hu(this)) return [];
        throw Error(iu(this));
    };
    l.xe = function () {
        if (this.match(2)) {
            var b = nu(this);
            if (this.match(3)) return b
        } else if (hu(this)) return [];
        throw Error(iu(this));
    };
    l.wk = function () {
        if (this.match(2)) {
            var b;
            if (2 == this.a.type) for (b = [this.we()]; this.match(5);) b.push(this.we());
            else b = mu(this);
            if (this.match(3)) return b
        } else if (hu(this)) return [];
        throw Error(iu(this));
    };
    l.vk = function () {
        if (this.match(2)) {
            var b = nu(this);
            if (this.match(3)) return b
        } else if (hu(this)) return [];
        throw Error(iu(this));
    };
    l.xk = function () {
        if (this.match(2)) {
            for (var b = [this.xe()]; this.match(5);) b.push(this.xe());
            if (this.match(3)) return b
        } else if (hu(this)) return [];
        throw Error(iu(this));
    };

    function lu(b) {
        for (var c = [], d = 0; 2 > d; ++d) {
            var e = b.a;
            if (b.match(4)) c.push(e.value);
            else break
        }
        if (2 == c.length) return c;
        throw Error(iu(b));
    }
    function mu(b) {
        for (var c = [lu(b)]; b.match(5);) c.push(lu(b));
        return c
    }

    function nu(b) {
        for (var c = [b.ve()]; b.match(5);) c.push(b.ve());
        return c
    }
    function hu(b) {
        var c = 1 == b.a.type && "EMPTY" == b.a.value;
        c && (b.a = eu(b.c));
        return c
    }
    function iu(b) {
        return "Unexpected `" + b.a.value + "` at position " + b.a.position + " in `" + b.c.c + "`"
    }
    var ku = {
        POINT: jl,
        LINESTRING: M,
        POLYGON: H,
        MULTIPOINT: un,
        MULTILINESTRING: rn,
        MULTIPOLYGON: vn
    }, ju = {
        POINT: cu.prototype.we,
        LINESTRING: cu.prototype.ve,
        POLYGON: cu.prototype.xe,
        MULTIPOINT: cu.prototype.wk,
        MULTILINESTRING: cu.prototype.vk,
        MULTIPOLYGON: cu.prototype.xk
    };

    function ou() {
        this.version = void 0
    }
    u(ou, vt);

    function wt(b, c) {
        for (var d = c.firstChild; null !== d; d = d.nextSibling) if (1 == d.nodeType) return xt(b, d);
        return null
    }
    function xt(b, c) {
        b.version = Aa(c.getAttribute("version"));
        var d = W({
            version: b.version
        }, pu, c, []);
        return m(d) ? d : null
    }
    function qu(b, c) {
        return W({}, ru, b, c)
    }
    function su(b, c) {
        return W({}, tu, b, c)
    }
    function uu(b, c) {
        var d = qu(b, c);
        if (m(d)) {
            var e = [Gq(b.getAttribute("width")), Gq(b.getAttribute("height"))];
            d.size = e;
            return d
        }
    }
    function vu(b, c) {
        return W([], wu, b, c)
    }
    var xu = [null, "http://www.opengis.net/wms"],
        pu = nq(xu, {
            Service: S(function (b, c) {
                return W({}, yu, b, c)
            }),
            Capability: S(function (b, c) {
                return W({}, zu, b, c)
            })
        }),
        zu = nq(xu, {
            Request: S(function (b, c) {
                return W({}, Au, b, c)
            }),
            Exception: S(function (b, c) {
                return W([], Bu, b, c)
            }),
            Layer: S(function (b, c) {
                return W({}, Cu, b, c)
            })
        }),
        yu = nq(xu, {
            Name: S(Hq),
            Title: S(Hq),
            Abstract: S(Hq),
            KeywordList: S(vu),
            OnlineResource: S(ut),
            ContactInformation: S(function (b, c) {
                return W({}, Du, b, c)
            }),
            Fees: S(Hq),
            AccessConstraints: S(Hq),
            LayerLimit: S(Fq),
            MaxWidth: S(Fq),
            MaxHeight: S(Fq)
        }),
        Du = nq(xu, {
            ContactPersonPrimary: S(function (b, c) {
                return W({}, Eu, b, c)
            }),
            ContactPosition: S(Hq),
            ContactAddress: S(function (b, c) {
                return W({}, Fu, b, c)
            }),
            ContactVoiceTelephone: S(Hq),
            ContactFacsimileTelephone: S(Hq),
            ContactElectronicMailAddress: S(Hq)
        }),
        Eu = nq(xu, {
            ContactPerson: S(Hq),
            ContactOrganization: S(Hq)
        }),
        Fu = nq(xu, {
            AddressType: S(Hq),
            Address: S(Hq),
            City: S(Hq),
            StateOrProvince: S(Hq),
            PostCode: S(Hq),
            Country: S(Hq)
        }),
        Bu = nq(xu, {
            Format: kq(Hq)
        }),
        Cu = nq(xu, {
            Name: S(Hq),
            Title: S(Hq),
            Abstract: S(Hq),
            KeywordList: S(vu),
            CRS: mq(Hq),
            EX_GeographicBoundingBox: S(function (b, c) {
                var d = W({}, Gu, b, c);
                if (m(d)) {
                    var e = x(d, "westBoundLongitude"),
                        f = x(d, "southBoundLatitude"),
                        g = x(d, "eastBoundLongitude"),
                        d = x(d, "northBoundLatitude");
                    return m(e) && m(f) && m(g) && m(d) ? [e, f, g, d] : void 0
                }
            }),
            BoundingBox: mq(function (b) {
                var c = [Eq(b.getAttribute("minx")), Eq(b.getAttribute("miny")), Eq(b.getAttribute("maxx")), Eq(b.getAttribute("maxy"))],
                    d = [Eq(b.getAttribute("resx")), Eq(b.getAttribute("resy"))];
                return {
                    crs: b.getAttribute("CRS"),
                    extent: c,
                    res: d
                }
            }),
            Dimension: mq(function (b) {
                return {
                    name: b.getAttribute("name"),
                    units: b.getAttribute("units"),
                    unitSymbol: b.getAttribute("unitSymbol"),
                    "default": b.getAttribute("default"),
                    multipleValues: Bq(b.getAttribute("multipleValues")),
                    nearestValue: Bq(b.getAttribute("nearestValue")),
                    current: Bq(b.getAttribute("current")),
                    values: Hq(b)
                }
            }),
            Attribution: S(function (b, c) {
                return W({}, Hu, b, c)
            }),
            AuthorityURL: mq(function (b, c) {
                var d = qu(b, c);
                if (m(d)) {
                    var e = b.getAttribute("name");
                    d.name = e;
                    return d
                }
            }),
            Identifier: mq(Hq),
            MetadataURL: mq(function (b, c) {
                var d = qu(b, c);
                if (m(d)) {
                    var e = b.getAttribute("type");
                    d.type = e;
                    return d
                }
            }),
            DataURL: mq(qu),
            FeatureListURL: mq(qu),
            Style: mq(function (b, c) {
                return W({}, Iu, b, c)
            }),
            MinScaleDenominator: S(Dq),
            MaxScaleDenominator: S(Dq),
            Layer: mq(function (b, c) {
                var d = c[c.length - 1],
                    e = W({}, Cu, b, c);
                if (m(e)) {
                    var f = Bq(b.getAttribute("queryable"));
                    m(f) || (f = x(d, "queryable"));
                    e.queryable = m(f) ? f : !1;
                    f = Gq(b.getAttribute("cascaded"));
                    m(f) || (f = x(d, "cascaded"));
                    e.cascaded = f;
                    f = Bq(b.getAttribute("opaque"));
                    m(f) || (f = x(d, "opaque"));
                    e.opaque = m(f) ? f : !1;
                    f = Bq(b.getAttribute("noSubsets"));
                    m(f) || (f = x(d,
                        "noSubsets"));
                    e.noSubsets = m(f) ? f : !1;
                    f = Eq(b.getAttribute("fixedWidth"));
                    m(f) || (f = x(d, "fixedWidth"));
                    e.fixedWidth = f;
                    f = Eq(b.getAttribute("fixedHeight"));
                    m(f) || (f = x(d, "fixedHeight"));
                    e.fixedHeight = f;
                    Ta(["Style", "CRS", "AuthorityURL"], function (b) {
                        var c = x(d, b);
                        if (m(c)) {
                            var f = Bb(e, b),
                                f = f.concat(c);
                            e[b] = f
                        }
                    });
                    Ta("EX_GeographicBoundingBox BoundingBox Dimension Attribution MinScaleDenominator MaxScaleDenominator".split(" "), function (b) {
                        m(x(e, b)) || (e[b] = x(d, b))
                    });
                    return e
                }
            })
        }),
        Hu = nq(xu, {
            Title: S(Hq),
            OnlineResource: S(ut),
            LogoURL: S(uu)
        }),
        Gu = nq(xu, {
            westBoundLongitude: S(Dq),
            eastBoundLongitude: S(Dq),
            southBoundLatitude: S(Dq),
            northBoundLatitude: S(Dq)
        }),
        Au = nq(xu, {
            GetCapabilities: S(su),
            GetMap: S(su),
            GetFeatureInfo: S(su)
        }),
        tu = nq(xu, {
            Format: mq(Hq),
            DCPType: mq(function (b, c) {
                return W({}, Ju, b, c)
            })
        }),
        Ju = nq(xu, {
            HTTP: S(function (b, c) {
                return W({}, Ku, b, c)
            })
        }),
        Ku = nq(xu, {
            Get: S(qu),
            Post: S(qu)
        }),
        Iu = nq(xu, {
            Name: S(Hq),
            Title: S(Hq),
            Abstract: S(Hq),
            LegendURL: mq(uu),
            StyleSheetURL: S(qu),
            StyleURL: S(qu)
        }),
        ru = nq(xu, {
            Format: S(Hq),
            OnlineResource: S(ut)
        }),
        wu = nq(xu, {
            Keyword: kq(Hq)
        });

    function Lu() {
        this.b = "http://mapserver.gis.umn.edu/mapserver";
        this.c = new Uq;
        this.defaultDataProjection = null
    }
    u(Lu, wq);

    function Mu(b, c, d) {
        c.namespaceURI = b.b;
        var e = Tp(c),
            f = [];
        if (0 === c.childNodes.length) return f;
        "msGMLOutput" == e && Ta(c.childNodes, function (b) {
            if (1 === b.nodeType) {
                var c = d[0],
                    e = b.localName,
                    n = new RegExp(Ja("_layer"), ""),
                    e = e.replace(n, "") + "_feature";
                c.featureType = e;
                c.featureNS = this.b;
                n = {};
                n[e] = kq(this.c.ye, this.c);
                c = nq([x(c, "featureNS"), null], n);
                b.namespaceURI = this.b;
                b = W([], c, b, d, this.c);
                m(b) && db(f, b)
            }
        }, b);
        "FeatureCollection" == e && (b = W([], b.c.Td, c, [{}], b.c), m(b) && (f = b));
        return f
    }
    Lu.prototype.Ob = function (b, c) {
        var d = {
            featureType: this.featureType,
            featureNS: this.featureNS
        };
        m(c) && Eb(d, vp(this, b, c));
        return Mu(this, b, [d])
    };
    var Nu = new xe(6378137);

    function Z(b) {
        td.call(this);
        b = m(b) ? b : {};
        this.a = null;
        this.e = We;
        this.d = void 0;
        z(this, xd("projection"), this.Ui, !1, this);
        z(this, xd("tracking"), this.Vi, !1, this);
        m(b.projection) && this.n(Ee(b.projection));
        m(b.trackingOptions) && this.j(b.trackingOptions);
        this.b(m(b.tracking) ? b.tracking : !1)
    }
    u(Z, td);
    l = Z.prototype;
    l.M = function () {
        this.b(!1);
        Z.S.M.call(this)
    };
    l.Ui = function () {
        var b = this.g();
        null != b && (this.e = De(Ee("EPSG:4326"), b), null === this.a || this.set("position", this.e(this.a)))
    };
    l.Vi = function () {
        if (fg) {
            var b = this.i();
            b && !m(this.d) ? this.d = ba.navigator.geolocation.watchPosition(sa(this.Ek, this), sa(this.Fk, this), this.f()) : !b && m(this.d) && (ba.navigator.geolocation.clearWatch(this.d), this.d = void 0)
        }
    };
    l.Ek = function (b) {
        b = b.coords;
        this.set("accuracy", b.accuracy);
        this.set("altitude", null === b.altitude ? void 0 : b.altitude);
        this.set("altitudeAccuracy", null === b.altitudeAccuracy ? void 0 : b.altitudeAccuracy);
        this.set("heading", null === b.heading ? void 0 : bc(b.heading));
        null === this.a ? this.a = [b.longitude, b.latitude] : (this.a[0] = b.longitude, this.a[1] = b.latitude);
        var c = this.e(this.a);
        this.set("position", c);
        this.set("speed", null === b.speed ? void 0 : b.speed);
        b = zl(Nu, this.a, b.accuracy);
        b.ma(this.e);
        this.set("accuracyGeometry",
        b);
        this.l()
    };
    l.Fk = function (b) {
        b.type = "error";
        this.b(!1);
        this.dispatchEvent(b)
    };
    l.$e = function () {
        return this.get("accuracy")
    };
    Z.prototype.getAccuracy = Z.prototype.$e;
    Z.prototype.p = function () {
        return this.get("accuracyGeometry") || null
    };
    Z.prototype.getAccuracyGeometry = Z.prototype.p;
    Z.prototype.q = function () {
        return this.get("altitude")
    };
    Z.prototype.getAltitude = Z.prototype.q;
    Z.prototype.r = function () {
        return this.get("altitudeAccuracy")
    };
    Z.prototype.getAltitudeAccuracy = Z.prototype.r;
    Z.prototype.F = function () {
        return this.get("heading")
    };
    Z.prototype.getHeading = Z.prototype.F;
    Z.prototype.J = function () {
        return this.get("position")
    };
    Z.prototype.getPosition = Z.prototype.J;
    Z.prototype.g = function () {
        return this.get("projection")
    };
    Z.prototype.getProjection = Z.prototype.g;
    Z.prototype.t = function () {
        return this.get("speed")
    };
    Z.prototype.getSpeed = Z.prototype.t;
    Z.prototype.i = function () {
        return this.get("tracking")
    };
    Z.prototype.getTracking = Z.prototype.i;
    Z.prototype.f = function () {
        return this.get("trackingOptions")
    };
    Z.prototype.getTrackingOptions = Z.prototype.f;
    Z.prototype.n = function (b) {
        this.set("projection", b)
    };
    Z.prototype.setProjection = Z.prototype.n;
    Z.prototype.b = function (b) {
        this.set("tracking", b)
    };
    Z.prototype.setTracking = Z.prototype.b;
    Z.prototype.j = function (b) {
        this.set("trackingOptions", b)
    };
    Z.prototype.setTrackingOptions = Z.prototype.j;

    function Ou(b, c, d) {
        for (var e = [], f = b(0), g = b(1), h = c(f), k = c(g), n = [g, f], p = [k, h], q = [1, 0], r = {}, s = 1E5, v, y, C, F, G; 0 < --s && 0 < q.length;) C = q.pop(), f = n.pop(), h = p.pop(), g = C.toString(), g in r || (e.push(h[0], h[1]), r[g] = !0), F = q.pop(), g = n.pop(), k = p.pop(), G = (C + F) / 2, v = b(G), y = c(v), Uk(y[0], y[1], h[0], h[1], k[0], k[1]) < d ? (e.push(k[0], k[1]), g = F.toString(), r[g] = !0) : (q.push(F, G, G, C), p.push(k, y, y, h), n.push(g, v, v, f));
        return e
    }
    function Pu(b, c, d, e, f) {
        var g = Ee("EPSG:4326");
        return Ou(function (e) {
            return [b, c + (d - c) * e]
        }, Ve(g, e), f)
    }

    function Qu(b, c, d, e, f) {
        var g = Ee("EPSG:4326");
        return Ou(function (e) {
            return [c + (d - c) * e, b]
        }, Ve(g, e), f)
    };

    function Ru(b) {
        b = m(b) ? b : {};
        this.o = this.g = null;
        this.d = this.b = Infinity;
        this.f = this.e = -Infinity;
        this.r = m(b.targetSize) ? b.targetSize : 100;
        this.p = m(b.maxLines) ? b.maxLines : 100;
        this.a = [];
        this.c = [];
        this.q = m(b.strokeStyle) ? b.strokeStyle : Su;
        this.j = this.i = void 0;
        this.n = null;
        this.setMap(m(b.map) ? b.map : null)
    }
    var Su = new Nl({
        color: "rgba(0,0,0,0.2)"
    }),
        Tu = [90, 45, 30, 20, 10, 5, 2, 1, .5, .2, .1, .05, .01, .005, .002, .001];

    function Uu(b, c, d, e, f) {
        var g = f;
        c = Pu(c, b.e, b.b, b.o, d);
        g = m(b.a[g]) ? b.a[g] : new M(null);
        qn(g, "XY", c);
        qe(g.D(), e) && (b.a[f++] = g);
        return f
    }
    function Vu(b, c, d, e, f) {
        var g = f;
        c = Qu(c, b.f, b.d, b.o, d);
        g = m(b.c[g]) ? b.c[g] : new M(null);
        qn(g, "XY", c);
        qe(g.D(), e) && (b.c[f++] = g);
        return f
    }
    l = Ru.prototype;
    l.Wi = function () {
        return this.g
    };
    l.wh = function () {
        return this.a
    };
    l.Bh = function () {
        return this.c
    };
    l.jf = function (b) {
        var c = b.vectorContext,
            d = b.frameState;
        b = d.extent;
        var e = d.viewState,
            f = e.center,
            g = e.projection,
            e = e.resolution,
            d = d.pixelRatio,
            d = e * e / (4 * d * d);
        if (null === this.o || !Ue(this.o, g)) {
            var h = g.D(),
                k = g.d,
                n = k[2],
                p = k[1],
                q = k[0];
            this.b = k[3];
            this.d = n;
            this.e = p;
            this.f = q;
            k = Ee("EPSG:4326");
            this.i = Ve(k, g);
            this.j = Ve(g, k);
            this.n = this.j(ke(h));
            this.o = g
        }
        for (var g = this.n[0], h = this.n[1], k = -1, r, p = Math.pow(this.r * e, 2), q = [], s = [], e = 0, n = Tu.length; e < n; ++e) {
            r = Tu[e] / 2;
            q[0] = g - r;
            q[1] = h - r;
            s[0] = g + r;
            s[1] = h + r;
            this.i(q, q);
            this.i(s,
            s);
            r = Math.pow(s[0] - q[0], 2) + Math.pow(s[1] - q[1], 2);
            if (r <= p) break;
            k = Tu[e]
        }
        e = k;
        if (-1 == e) this.a.length = this.c.length = 0;
        else {
            g = this.j(f);
            f = g[0];
            g = g[1];
            h = this.p;
            f = Math.floor(f / e) * e;
            p = Yb(f, this.f, this.d);
            n = Uu(this, p, d, b, 0);
            for (k = 0; p != this.f && k++ < h;) p = Math.max(p - e, this.f), n = Uu(this, p, d, b, n);
            p = Yb(f, this.f, this.d);
            for (k = 0; p != this.d && k++ < h;) p = Math.min(p + e, this.d), n = Uu(this, p, d, b, n);
            this.a.length = n;
            g = Math.floor(g / e) * e;
            f = Yb(g, this.e, this.b);
            n = Vu(this, f, d, b, 0);
            for (k = 0; f != this.e && k++ < h;) f = Math.max(f - e, this.e), n = Vu(this, f, d, b, n);
            f = Yb(g, this.e, this.b);
            for (k = 0; f != this.b && k++ < h;) f = Math.min(f + e, this.b), n = Vu(this, f, d, b, n);
            this.c.length = n
        }
        c.wa(null, this.q);
        b = 0;
        for (d = this.a.length; b < d; ++b) f = this.a[b], c.Cb(f, null);
        b = 0;
        for (d = this.c.length; b < d; ++b) f = this.c[b], c.Cb(f, null)
    };
    l.setMap = function (b) {
        null !== this.g && (this.g.v("postcompose", this.jf, this), this.g.render());
        null !== b && (b.u("postcompose", this.jf, this), b.render());
        this.g = b
    };

    function Wu(b, c, d, e, f, g, h) {
        tj.call(this, b, c, d, 0, e);
        this.o = f;
        this.a = new Image;
        null !== g && (this.a.crossOrigin = g);
        this.d = {};
        this.b = null;
        this.state = 0;
        this.g = h
    }
    u(Wu, tj);
    Wu.prototype.c = function (b) {
        if (m(b)) {
            var c = ma(b);
            if (c in this.d) return this.d[c];
            b = xb(this.d) ? this.a : this.a.cloneNode(!1);
            return this.d[c] = b
        }
        return this.a
    };
    Wu.prototype.i = function () {
        this.state = 3;
        Ta(this.b, Yc);
        this.b = null;
        this.dispatchEvent("change")
    };
    Wu.prototype.n = function () {
        m(this.resolution) || (this.resolution = oe(this.extent) / this.a.height);
        this.state = 2;
        Ta(this.b, Yc);
        this.b = null;
        this.dispatchEvent("change")
    };
    Wu.prototype.load = function () {
        0 == this.state && (this.state = 1, this.b = [Wc(this.a, "error", this.i, !1, this), Wc(this.a, "load", this.n, !1, this)], this.g(this, this.o))
    };

    function Xu(b, c, d, e, f) {
        tj.call(this, b, c, d, 2, e);
        this.a = f
    }
    u(Xu, tj);
    Xu.prototype.c = function () {
        return this.a
    };

    function Yu(b, c, d, e, f) {
        uj.call(this, b, c);
        this.g = d;
        this.c = new Image;
        null !== e && (this.c.crossOrigin = e);
        this.d = {};
        this.b = null;
        this.o = f
    }
    u(Yu, uj);
    l = Yu.prototype;
    l.Na = function (b) {
        if (m(b)) {
            var c = ma(b);
            if (c in this.d) return this.d[c];
            b = xb(this.d) ? this.c : this.c.cloneNode(!1);
            return this.d[c] = b
        }
        return this.c
    };
    l.mb = function () {
        return this.g
    };
    l.Xi = function () {
        this.state = 3;
        Ta(this.b, Yc);
        this.b = null;
        vj(this)
    };
    l.Yi = function () {
        this.state = this.c.naturalWidth && this.c.naturalHeight ? 2 : 4;
        Ta(this.b, Yc);
        this.b = null;
        vj(this)
    };
    l.load = function () {
        0 == this.state && (this.state = 1, this.b = [Wc(this.c, "error", this.Xi, !1, this), Wc(this.c, "load", this.Yi, !1, this)], this.o(this, this.g))
    };

    function Zu(b, c, d) {
        return function (e, f, g) {
            return d(b, c, e, f, g)
        }
    }
    function $u() {};

    function av(b, c) {
        jd.call(this);
        this.a = new ap(this);
        var d = b;
        c && (d = zf(b));
        this.a.La(d, "dragenter", this.nk);
        d != b && this.a.La(d, "dragover", this.ok);
        this.a.La(b, "dragover", this.pk);
        this.a.La(b, "drop", this.qk)
    }
    u(av, jd);
    l = av.prototype;
    l.Dc = !1;
    l.M = function () {
        av.S.M.call(this);
        this.a.hc()
    };
    l.nk = function (b) {
        var c = b.a.dataTransfer;
        (this.Dc = !(!c || !(c.types && (Za(c.types, "Files") || Za(c.types, "public.file-url")) || c.files && 0 < c.files.length))) && b.preventDefault()
    };
    l.ok = function (b) {
        this.Dc && (b.preventDefault(), b.a.dataTransfer.dropEffect = "none")
    };
    l.pk = function (b) {
        this.Dc && (b.preventDefault(), b.lb(), b = b.a.dataTransfer, b.effectAllowed = "all", b.dropEffect = "copy")
    };
    l.qk = function (b) {
        this.Dc && (b.preventDefault(), b.lb(), b = new zc(b.a), b.type = "drop", this.dispatchEvent(b))
    };

    function bv(b) {
        b.prototype.then = b.prototype.then;
        b.prototype.$goog_Thenable = !0
    }
    function cv(b) {
        if (!b) return !1;
        try {
            return !!b.$goog_Thenable
        } catch (c) {
            return !1
        }
    };

    function dv(b, c) {
        ev || fv();
        gv || (ev(), gv = !0);
        hv.push(new iv(b, c))
    }
    var ev;

    function fv() {
        if (ba.Promise && ba.Promise.resolve) {
            var b = ba.Promise.resolve();
            ev = function () {
                b.then(jv)
            }
        } else ev = function () {
            $h(jv)
        }
    }
    var gv = !1,
        hv = [];

    function jv() {
        for (; hv.length;) {
            var b = hv;
            hv = [];
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    d.a.call(d.c)
                } catch (e) {
                    Zh(e)
                }
            }
        }
        gv = !1
    }
    function iv(b, c) {
        this.a = b;
        this.c = c
    };

    function kv(b, c) {
        this.c = lv;
        this.f = void 0;
        this.a = this.b = null;
        this.d = this.e = !1;
        try {
            var d = this;
            b.call(c, function (b) {
                mv(d, nv, b)
            }, function (b) {
                mv(d, ov, b)
            })
        } catch (e) {
            mv(this, ov, e)
        }
    }
    var lv = 0,
        nv = 2,
        ov = 3;
    kv.prototype.then = function (b, c, d) {
        return pv(this, ka(b) ? b : null, ka(c) ? c : null, d)
    };
    bv(kv);
    kv.prototype.cancel = function (b) {
        this.c == lv && dv(function () {
            var c = new qv(b);
            rv(this, c)
        }, this)
    };

    function rv(b, c) {
        if (b.c == lv) if (b.b) {
            var d = b.b;
            if (d.a) {
                for (var e = 0, f = -1, g = 0, h; h = d.a[g]; g++) if (h = h.wc) if (e++, h == b && (f = g), 0 <= f && 1 < e) break;
                0 <= f && (d.c == lv && 1 == e ? rv(d, c) : (e = d.a.splice(f, 1)[0], sv(d, e, ov, c)))
            }
        } else mv(b, ov, c)
    }
    function tv(b, c) {
        b.a && b.a.length || b.c != nv && b.c != ov || uv(b);
        b.a || (b.a = []);
        b.a.push(c)
    }

    function pv(b, c, d, e) {
        var f = {
            wc: null,
            Gf: null,
            If: null
        };
        f.wc = new kv(function (b, h) {
            f.Gf = c ? function (d) {
                try {
                    var f = c.call(e, d);
                    b(f)
                } catch (p) {
                    h(p)
                }
            } : b;
            f.If = d ? function (c) {
                try {
                    var f = d.call(e, c);
                    !m(f) && c instanceof qv ? h(c) : b(f)
                } catch (p) {
                    h(p)
                }
            } : h
        });
        f.wc.b = b;
        tv(b, f);
        return f.wc
    }
    kv.prototype.g = function (b) {
        this.c = lv;
        mv(this, nv, b)
    };
    kv.prototype.o = function (b) {
        this.c = lv;
        mv(this, ov, b)
    };

    function mv(b, c, d) {
        if (b.c == lv) {
            if (b == d) c = ov, d = new TypeError("Promise cannot resolve to itself");
            else {
                if (cv(d)) {
                    b.c = 1;
                    d.then(b.g, b.o, b);
                    return
                }
                if (la(d)) try {
                    var e = d.then;
                    if (ka(e)) {
                        vv(b, d, e);
                        return
                    }
                } catch (f) {
                    c = ov, d = f
                }
            }
            b.f = d;
            b.c = c;
            uv(b);
            c != ov || d instanceof qv || wv(b, d)
        }
    }
    function vv(b, c, d) {
        function e(c) {
            g || (g = !0, b.o(c))
        }
        function f(c) {
            g || (g = !0, b.g(c))
        }
        b.c = 1;
        var g = !1;
        try {
            d.call(c, f, e)
        } catch (h) {
            e(h)
        }
    }
    function uv(b) {
        b.e || (b.e = !0, dv(b.i, b))
    }
    kv.prototype.i = function () {
        for (; this.a && this.a.length;) {
            var b = this.a;
            this.a = [];
            for (var c = 0; c < b.length; c++) sv(this, b[c], this.c, this.f)
        }
        this.e = !1
    };

    function sv(b, c, d, e) {
        if (d == nv) c.Gf(e);
        else {
            if (c.wc) for (; b && b.d; b = b.b) b.d = !1;
            c.If(e)
        }
    }
    function wv(b, c) {
        b.d = !0;
        dv(function () {
            b.d && xv.call(null, c)
        })
    }
    var xv = Zh;

    function qv(b) {
        xa.call(this, b)
    }
    u(qv, xa);
    qv.prototype.name = "cancel";
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function yv(b, c) {
        this.e = [];
        this.p = b;
        this.j = c || null;
        this.d = this.a = !1;
        this.b = void 0;
        this.i = this.q = this.g = !1;
        this.f = 0;
        this.c = null;
        this.o = 0
    }
    yv.prototype.cancel = function (b) {
        if (this.a) this.b instanceof yv && this.b.cancel();
        else {
            if (this.c) {
                var c = this.c;
                delete this.c;
                b ? c.cancel(b) : (c.o--, 0 >= c.o && c.cancel())
            }
            this.p ? this.p.call(this.j, this) : this.i = !0;
            this.a || (b = new zv, Av(this), Bv(this, !1, b))
        }
    };
    yv.prototype.n = function (b, c) {
        this.g = !1;
        Bv(this, b, c)
    };

    function Bv(b, c, d) {
        b.a = !0;
        b.b = d;
        b.d = !c;
        Cv(b)
    }

    function Av(b) {
        if (b.a) {
            if (!b.i) throw new Dv;
            b.i = !1
        }
    }
    function Ev(b, c, d, e) {
        b.e.push([c, d, e]);
        b.a && Cv(b)
    }
    yv.prototype.then = function (b, c, d) {
        var e, f, g = new kv(function (b, c) {
            e = b;
            f = c
        });
        Ev(this, e, function (b) {
            b instanceof zv ? g.cancel() : f(b)
        });
        return g.then(b, c, d)
    };
    bv(yv);

    function Fv(b) {
        return Wa(b.e, function (b) {
            return ka(b[1])
        })
    }

    function Cv(b) {
        if (b.f && b.a && Fv(b)) {
            var c = b.f,
                d = Gv[c];
            d && (ba.clearTimeout(d.X), delete Gv[c]);
            b.f = 0
        }
        b.c && (b.c.o--, delete b.c);
        for (var c = b.b, e = d = !1; b.e.length && !b.g;) {
            var f = b.e.shift(),
                g = f[0],
                h = f[1],
                f = f[2];
            if (g = b.d ? h : g) try {
                var k = g.call(f || b.j, c);
                m(k) && (b.d = b.d && (k == c || k instanceof Error), b.b = c = k);
                cv(c) && (e = !0, b.g = !0)
            } catch (n) {
                c = n, b.d = !0, Fv(b) || (d = !0)
            }
        }
        b.b = c;
        e && (k = sa(b.n, b, !0), e = sa(b.n, b, !1), c instanceof yv ? (Ev(c, k, e), c.q = !0) : c.then(k, e));
        d && (c = new Hv(c), Gv[c.X] = c, b.f = c.X)
    }

    function Dv() {
        xa.call(this)
    }
    u(Dv, xa);
    Dv.prototype.message = "Deferred has already fired";
    Dv.prototype.name = "AlreadyCalledError";

    function zv() {
        xa.call(this)
    }
    u(zv, xa);
    zv.prototype.message = "Deferred was canceled";
    zv.prototype.name = "CanceledError";

    function Hv(b) {
        this.X = ba.setTimeout(sa(this.c, this), 0);
        this.a = b
    }
    Hv.prototype.c = function () {
        delete Gv[this.X];
        throw this.a;
    };
    var Gv = {};

    function Iv(b, c) {
        m(b.name) ? (this.name = b.name, this.code = wb[b.name]) : (this.code = b.code, this.name = Jv(b.code));
        xa.call(this, za("%s %s", this.name, c))
    }
    u(Iv, xa);

    function Jv(b) {
        var c = ub(function (c) {
            return b == c
        });
        if (!m(c)) throw Error("Invalid code: " + b);
        return c
    }
    var wb = {
        AbortError: 3,
        EncodingError: 5,
        InvalidModificationError: 9,
        InvalidStateError: 7,
        NotFoundError: 1,
        NotReadableError: 4,
        NoModificationAllowedError: 6,
        PathExistsError: 12,
        QuotaExceededError: 10,
        SecurityError: 2,
        SyntaxError: 8,
        TypeMismatchError: 11
    };

    function Kv(b, c) {
        uc.call(this, b.type, c)
    }
    u(Kv, uc);

    function Lv() {
        jd.call(this);
        this.bb = new FileReader;
        this.bb.onloadstart = sa(this.a, this);
        this.bb.onprogress = sa(this.a, this);
        this.bb.onload = sa(this.a, this);
        this.bb.onabort = sa(this.a, this);
        this.bb.onerror = sa(this.a, this);
        this.bb.onloadend = sa(this.a, this)
    }
    u(Lv, jd);
    Lv.prototype.getError = function () {
        return this.bb.error && new Iv(this.bb.error, "reading file")
    };
    Lv.prototype.a = function (b) {
        this.dispatchEvent(new Kv(b, this))
    };
    Lv.prototype.M = function () {
        Lv.S.M.call(this);
        delete this.bb
    };

    function Mv(b) {
        var c = new yv;
        b.La("loadend", ta(function (b, c) {
            var f = c.bb.result,
                g = c.getError();
            null == f || g ? (Av(b), Bv(b, !1, g)) : (Av(b), Bv(b, !0, f));
            c.hc()
        }, c, b));
        return c
    };

    function Nv(b) {
        b = m(b) ? b : {};
        ok.call(this, {
            handleEvent: dd
        });
        this.f = m(b.formatConstructors) ? b.formatConstructors : [];
        this.j = m(b.projection) ? Ee(b.projection) : null;
        this.e = null;
        this.d = void 0
    }
    u(Nv, ok);
    Nv.prototype.M = function () {
        m(this.d) && Yc(this.d);
        Nv.S.M.call(this)
    };
    Nv.prototype.g = function (b) {
        b = b.a.dataTransfer.files;
        var c, d, e;
        c = 0;
        for (d = b.length; c < d; ++c) {
            var f = e = b[c],
                g = new Lv,
                h = Mv(g);
            g.bb.readAsText(f, "");
            Ev(h, ta(this.i, e), null, this)
        }
    };
    Nv.prototype.i = function (b, c) {
        var d = this.n,
            e = this.j;
        null === e && (e = d.a().q);
        var d = this.f,
            f = [],
            g, h;
        g = 0;
        for (h = d.length; g < h; ++g) {
            var k = new d[g],
                n;
            try {
                n = k.ja(c)
            } catch (p) {
                n = null
            }
            if (null !== n) {
                var k = k.Ba(c),
                    k = Ve(k, e),
                    q, r;
                q = 0;
                for (r = n.length; q < r; ++q) {
                    var s = n[q],
                        v = s.N();
                    null != v && v.ma(k);
                    f.push(s)
                }
            }
        }
        this.dispatchEvent(new Ov(Pv, this, b, f, e))
    };
    Nv.prototype.setMap = function (b) {
        m(this.d) && (Yc(this.d), this.d = void 0);
        null !== this.e && (tc(this.e), this.e = null);
        Nv.S.setMap.call(this, b);
        null !== b && (this.e = new av(b.b), this.d = z(this.e, "drop", this.g, !1, this))
    };
    var Pv = "addfeatures";

    function Ov(b, c, d, e, f) {
        uc.call(this, b, c);
        this.features = e;
        this.file = d;
        this.projection = f
    }
    u(Ov, uc);

    function Qv(b, c) {
        this.x = b;
        this.y = c
    }
    u(Qv, vf);
    Qv.prototype.clone = function () {
        return new Qv(this.x, this.y)
    };
    Qv.prototype.scale = vf.prototype.scale;
    Qv.prototype.add = function (b) {
        this.x += b.x;
        this.y += b.y;
        return this
    };
    Qv.prototype.rotate = function (b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        var d = this.y * c + this.x * b;
        this.x = this.x * c - this.y * b;
        this.y = d;
        return this
    };

    function Rv(b) {
        b = m(b) ? b : {};
        Bk.call(this, {
            handleDownEvent: Sv,
            handleDragEvent: Tv,
            handleUpEvent: Uv
        });
        this.i = m(b.condition) ? b.condition : yk;
        this.d = this.f = void 0;
        this.g = 0
    }
    u(Rv, Bk);

    function Tv(b) {
        if (Ak(b)) {
            var c = b.map,
                d = c.e();
            b = b.pixel;
            b = new Qv(b[0] - d[0] / 2, d[1] / 2 - b[1]);
            d = Math.atan2(b.y, b.x);
            b = Math.sqrt(b.x * b.x + b.y * b.y);
            var e = c.a(),
                f = $e(e);
            c.render();
            m(this.f) && pk(c, e, f.rotation - (d - this.f));
            this.f = d;
            m(this.d) && rk(c, e, f.resolution / b * this.d);
            m(this.d) && (this.g = this.d / b);
            this.d = b
        }
    }

    function Uv(b) {
        if (!Ak(b)) return !0;
        b = b.map;
        var c = b.a();
        bf(c, -1);
        var d = $e(c),
            e = this.g - 1,
            f = d.rotation,
            f = c.constrainRotation(f, 0);
        pk(b, c, f, void 0, void 0);
        d = d.resolution;
        d = c.constrainResolution(d, 0, e);
        rk(b, c, d, void 0, 400);
        this.g = 0;
        return !1
    }
    function Sv(b) {
        return Ak(b) && this.i(b) ? (bf(b.map.a(), 1), this.d = this.f = void 0, !0) : !1
    };
    var Vv;
    (function () {
        var b = {
            Ze: {}
        };
        (function () {
            function c(b, d) {
                if (!(this instanceof c)) return new c(b, d);
                this.$d = Math.max(4, b || 9);
                this.Qe = Math.max(2, Math.ceil(.4 * this.$d));
                d && this.Og(d);
                this.clear()
            }
            function d(b, c) {
                b.bbox = e(b, 0, b.children.length, c)
            }
            function e(b, c, d, e) {
                for (var g = [Infinity, Infinity, -Infinity, -Infinity], h; c < d; c++) h = b.children[c], f(g, b.ua ? e(h) : h.bbox);
                return g
            }
            function f(b, c) {
                b[0] = Math.min(b[0], c[0]);
                b[1] = Math.min(b[1], c[1]);
                b[2] = Math.max(b[2], c[2]);
                b[3] = Math.max(b[3], c[3])
            }
            function g(b, c) {
                return b.bbox[0] - c.bbox[0]
            }
            function h(b, c) {
                return b.bbox[1] - c.bbox[1]
            }
            function k(b) {
                return (b[2] - b[0]) * (b[3] - b[1])
            }
            function n(b) {
                return b[2] - b[0] + (b[3] - b[1])
            }
            function p(b, c) {
                return b[0] <= c[0] && b[1] <= c[1] && c[2] <= b[2] && c[3] <= b[3]
            }
            function q(b, c) {
                return c[0] <= b[2] && c[1] <= b[3] && c[2] >= b[0] && c[3] >= b[1]
            }
            function r(b, c, d, e, f) {
                for (var g = [c, d], h; g.length;) d = g.pop(), c = g.pop(), d - c <= e || (h = c + Math.ceil((d - c) / e / 2) * e, s(b, c, d, h, f), g.push(c, h, h, d))
            }
            function s(b, c, d, e, f) {
                for (var g, h, k, n, p; d > c;) {
                    600 < d - c && (g = d - c + 1, h = e - c + 1, k = Math.log(g),
                    n = .5 * Math.exp(2 * k / 3), p = .5 * Math.sqrt(k * n * (g - n) / g) * (0 > h - g / 2 ? -1 : 1), k = Math.max(c, Math.floor(e - h * n / g + p)), h = Math.min(d, Math.floor(e + (g - h) * n / g + p)), s(b, k, h, e, f));
                    g = b[e];
                    h = c;
                    n = d;
                    v(b, c, e);
                    for (0 < f(b[d], g) && v(b, c, d); h < n;) {
                        v(b, h, n);
                        h++;
                        for (n--; 0 > f(b[h], g);) h++;
                        for (; 0 < f(b[n], g);) n--
                    }
                    0 === f(b[c], g) ? v(b, c, n) : (n++, v(b, n, d));
                    n <= e && (c = n + 1);
                    e <= n && (d = n - 1)
                }
            }
            function v(b, c, d) {
                var e = b[c];
                b[c] = b[d];
                b[d] = e
            }
            c.prototype = {
                all: function () {
                    return this.Me(this.data, [])
                },
                search: function (b) {
                    var c = this.data,
                        d = [],
                        e = this.Ca;
                    if (!q(b, c.bbox)) return d;
                    for (var f = [], g, h, k, n; c;) {
                        g = 0;
                        for (h = c.children.length; g < h; g++) k = c.children[g], n = c.ua ? e(k) : k.bbox, q(b, n) && (c.ua ? d.push(k) : p(b, n) ? this.Me(k, d) : f.push(k));
                        c = f.pop()
                    }
                    return d
                },
                load: function (b) {
                    if (!b || !b.length) return this;
                    if (b.length < this.Qe) {
                        for (var c = 0, d = b.length; c < d; c++) this.na(b[c]);
                        return this
                    }
                    b = this.Oe(b.slice(), 0, b.length - 1, 0);
                    this.data.children.length ? this.data.height === b.height ? this.Re(this.data, b) : (this.data.height < b.height && (c = this.data, this.data = b, b = c), this.Pe(b, this.data.height - b.height - 1, !0)) : this.data = b;
                    return this
                },
                na: function (b) {
                    b && this.Pe(b, this.data.height - 1);
                    return this
                },
                clear: function () {
                    this.data = {
                        children: [],
                        height: 1,
                        bbox: [Infinity, Infinity, -Infinity, -Infinity],
                        ua: !0
                    };
                    return this
                },
                remove: function (b) {
                    if (!b) return this;
                    for (var c = this.data, d = this.Ca(b), e = [], f = [], g, h, k, n; c || e.length;) {
                        c || (c = e.pop(), h = e[e.length - 1], g = f.pop(), n = !0);
                        if (c.ua && (k = c.children.indexOf(b), -1 !== k)) {
                            c.children.splice(k, 1);
                            e.push(c);
                            this.Ng(e);
                            break
                        }
                        n || c.ua || !p(c.bbox, d) ? h ? (g++, c = h.children[g], n = !1) : c = null : (e.push(c), f.push(g), g = 0, h = c, c = c.children[0])
                    }
                    return this
                },
                Ca: function (b) {
                    return b
                },
                ce: function (b, c) {
                    return b[0] - c[0]
                },
                de: function (b, c) {
                    return b[1] - c[1]
                },
                toJSON: function () {
                    return this.data
                },
                Me: function (b, c) {
                    for (var d = []; b;) b.ua ? c.push.apply(c, b.children) : d.push.apply(d, b.children), b = d.pop();
                    return c
                },
                Oe: function (b, c, e, f) {
                    var g = e - c + 1,
                        h = this.$d,
                        k;
                    if (g <= h) return k = {
                        children: b.slice(c, e + 1),
                        height: 1,
                        bbox: null,
                        ua: !0
                    }, d(k, this.Ca), k;
                    f || (f = Math.ceil(Math.log(g) / Math.log(h)), h = Math.ceil(g / Math.pow(h, f - 1)));
                    k = {
                        children: [],
                        height: f,
                        bbox: null
                    };
                    var g = Math.ceil(g / h),
                        h = g * Math.ceil(Math.sqrt(h)),
                        n, p, q;
                    for (r(b, c, e, h, this.ce); c <= e; c += h) for (p = Math.min(c + h - 1, e), r(b, c, p, g, this.de), n = c; n <= p; n += g) q = Math.min(n + g - 1, p), k.children.push(this.Oe(b, n, q, f - 1));
                    d(k, this.Ca);
                    return k
                },
                Mg: function (b, c, d, e) {
                    for (var f, g, h, n, p, q, r, s;;) {
                        e.push(c);
                        if (c.ua || e.length - 1 === d) break;
                        r = s = Infinity;
                        f = 0;
                        for (g = c.children.length; f < g; f++) {
                            h = c.children[f];
                            p = k(h.bbox);
                            q = b;
                            var v = h.bbox;
                            q = (Math.max(v[2], q[2]) - Math.min(v[0], q[0])) * (Math.max(v[3],
                            q[3]) - Math.min(v[1], q[1])) - p;
                            q < s ? (s = q, r = p < r ? p : r, n = h) : q === s && p < r && (r = p, n = h)
                        }
                        c = n
                    }
                    return c
                },
                Pe: function (b, c, d) {
                    var e = this.Ca;
                    d = d ? b.bbox : e(b);
                    var e = [],
                        g = this.Mg(d, this.data, c, e);
                    g.children.push(b);
                    for (f(g.bbox, d); 0 <= c;) if (e[c].children.length > this.$d) this.Pg(e, c), c--;
                    else break;
                    this.Jg(d, e, c)
                },
                Pg: function (b, c) {
                    var e = b[c],
                        f = e.children.length,
                        g = this.Qe;
                    this.Kg(e, g, f);
                    f = {
                        children: e.children.splice(this.Lg(e, g, f)),
                        height: e.height
                    };
                    e.ua && (f.ua = !0);
                    d(e, this.Ca);
                    d(f, this.Ca);
                    c ? b[c - 1].children.push(f) : this.Re(e,
                    f)
                },
                Re: function (b, c) {
                    this.data = {
                        children: [b, c],
                        height: b.height + 1
                    };
                    d(this.data, this.Ca)
                },
                Lg: function (b, c, d) {
                    var f, g, h, n, p, q, r;
                    p = q = Infinity;
                    for (f = c; f <= d - c; f++) {
                        g = e(b, 0, f, this.Ca);
                        h = e(b, f, d, this.Ca);
                        var s = g,
                            v = h;
                        n = Math.max(s[0], v[0]);
                        var ac = Math.max(s[1], v[1]),
                            Sb = Math.min(s[2], v[2]),
                            s = Math.min(s[3], v[3]);
                        n = Math.max(0, Sb - n) * Math.max(0, s - ac);
                        g = k(g) + k(h);
                        n < p ? (p = n, r = f, q = g < q ? g : q) : n === p && g < q && (q = g, r = f)
                    }
                    return r
                },
                Kg: function (b, c, d) {
                    var e = b.ua ? this.ce : g,
                        f = b.ua ? this.de : h,
                        k = this.Ne(b, c, d, e);
                    c = this.Ne(b, c, d, f);
                    k < c && b.children.sort(e)
                },
                Ne: function (b, c, d, g) {
                    b.children.sort(g);
                    g = this.Ca;
                    var h = e(b, 0, c, g),
                        k = e(b, d - c, d, g),
                        p = n(h) + n(k),
                        q, r;
                    for (q = c; q < d - c; q++) r = b.children[q], f(h, b.ua ? g(r) : r.bbox), p += n(h);
                    for (q = d - c - 1; q >= c; q--) r = b.children[q], f(k, b.ua ? g(r) : r.bbox), p += n(k);
                    return p
                },
                Jg: function (b, c, d) {
                    for (; 0 <= d; d--) f(c[d].bbox, b)
                },
                Ng: function (b) {
                    for (var c = b.length - 1, e; 0 <= c; c--) 0 === b[c].children.length ? 0 < c ? (e = b[c - 1].children, e.splice(e.indexOf(b[c]), 1)) : this.clear() : d(b[c], this.Ca)
                },
                Og: function (b) {
                    var c = ["return a", " - b",
                        ";"];
                    this.ce = new Function("a", "b", c.join(b[0]));
                    this.de = new Function("a", "b", c.join(b[1]));
                    this.Ca = new Function("a", "return [a" + b.join(", a") + "];")
                }
            };
            "function" === typeof define && define.Ul ? define(function () {
                return c
            }) : "undefined" !== typeof b ? b.Ze = c : "undefined" !== typeof self ? self.a = c : window.a = c
        })();
        Vv = b.Ze
    })();

    function Wv(b) {
        this.a = Vv(b);
        this.c = {}
    }
    l = Wv.prototype;
    l.na = function (b, c) {
        var d = [b[0], b[1], b[2], b[3], c];
        this.a.na(d);
        Ab(this.c, ma(c).toString(), d)
    };
    l.load = function (b, c) {
        for (var d = Array(c.length), e = 0, f = c.length; e < f; e++) {
            var g = b[e],
                h = c[e],
                g = [g[0], g[1], g[2], g[3], h];
            d[e] = g;
            Ab(this.c, ma(h).toString(), g)
        }
        this.a.load(d)
    };
    l.remove = function (b) {
        b = ma(b).toString();
        var c = x(this.c, b);
        zb(this.c, b);
        return null !== this.a.remove(c)
    };
    l.update = function (b, c) {
        this.remove(c);
        this.na(b, c)
    };

    function Xv(b) {
        b = b.a.all();
        return Va(b, function (b) {
            return b[4]
        })
    }
    function Yv(b, c) {
        var d = b.a.search(c);
        return Va(d, function (b) {
            return b[4]
        })
    }
    l.forEach = function (b, c) {
        return Zv(Xv(this), b, c)
    };

    function $v(b, c, d, e) {
        return Zv(Yv(b, c), d, e)
    }
    function Zv(b, c, d) {
        for (var e, f = 0, g = b.length; f < g && !(e = c.call(d, b[f])); f++);
        return e
    }
    l.ia = function () {
        return xb(this.c)
    };
    l.clear = function () {
        this.a.clear();
        this.c = {}
    };
    l.D = function () {
        return this.a.data.bbox
    };

    function aw(b) {
        b = m(b) ? b : {};
        qj.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection,
            state: m(b.state) ? b.state : void 0
        });
        this.b = new Wv;
        this.d = {};
        this.f = {};
        this.o = {};
        this.i = {};
        m(b.features) && this.fb(b.features)
    }
    u(aw, qj);
    l = aw.prototype;
    l.Pa = function (b) {
        var c = ma(b).toString();
        bw(this, c, b);
        var d = b.N();
        null != d ? (d = d.D(), this.b.na(d, b)) : this.d[c] = b;
        cw(this, c, b);
        this.dispatchEvent(new dw("addfeature", b));
        this.l()
    };

    function bw(b, c, d) {
        b.i[c] = [z(d, "change", b.Af, !1, b), z(d, "propertychange", b.Af, !1, b)]
    }
    function cw(b, c, d) {
        var e = d.X;
        m(e) ? b.f[e.toString()] = d : b.o[c] = d
    }
    l.ya = function (b) {
        this.fb(b);
        this.l()
    };
    l.fb = function (b) {
        var c, d, e, f, g = [],
            h = [];
        d = 0;
        for (e = b.length; d < e; d++) {
            f = b[d];
            c = ma(f).toString();
            bw(this, c, f);
            var k = f.N();
            null != k ? (c = k.D(), g.push(c), h.push(f)) : this.d[c] = f
        }
        this.b.load(g, h);
        d = 0;
        for (e = b.length; d < e; d++) f = b[d], c = ma(f).toString(), cw(this, c, f), this.dispatchEvent(new dw("addfeature", f))
    };
    l.clear = function (b) {
        if (b) {
            for (var c in this.i) Ta(this.i[c], Yc);
            this.i = {};
            this.f = {};
            this.o = {}
        } else b = this.Xf, this.b.forEach(b, this), ob(this.d, b, this);
        this.b.clear();
        this.d = {};
        this.dispatchEvent(new dw("clear"));
        this.l()
    };
    l.Xa = function (b, c) {
        return this.b.forEach(b, c)
    };

    function ew(b, c, d) {
        b.ra([c[0], c[1], c[0], c[1]], function (b) {
            if (b.N().Jb(c[0], c[1])) return d.call(void 0, b)
        })
    }
    l.ra = function (b, c, d) {
        return $v(this.b, b, c, d)
    };
    l.Db = function (b, c, d, e) {
        return this.ra(b, d, e)
    };
    l.Fa = function (b, c, d) {
        return this.ra(b, function (e) {
            if (e.N().ha(b) && (e = c.call(d, e))) return e
        })
    };
    l.va = function () {
        var b = Xv(this.b);
        xb(this.d) || db(b, rb(this.d));
        return b
    };
    l.Ia = function (b) {
        var c = [];
        ew(this, b, function (b) {
            c.push(b)
        });
        return c
    };
    l.Ya = function (b) {
        var c = b[0],
            d = b[1],
            e = null,
            f = [NaN, NaN],
            g = Infinity,
            h = [-Infinity, -Infinity, Infinity, Infinity];
        $v(this.b, h, function (b) {
            var n = b.N(),
                p = g;
            g = n.Va(c, d, f, g);
            g < p && (e = b, b = Math.sqrt(g), h[0] = c - b, h[1] = d - b, h[2] = c + b, h[3] = d + b)
        });
        return e
    };
    l.D = function () {
        return this.b.D()
    };
    l.Ha = function (b) {
        b = this.f[b.toString()];
        return m(b) ? b : null
    };
    l.Af = function (b) {
        b = b.target;
        var c = ma(b).toString(),
            d = b.N();
        null != d ? (d = d.D(), c in this.d ? (delete this.d[c], this.b.na(d, b)) : this.b.update(d, b)) : c in this.d || (this.b.remove(b), this.d[c] = b);
        d = b.X;
        m(d) ? (d = d.toString(), c in this.o ? (delete this.o[c], this.f[d] = b) : this.f[d] !== b && (fw(this, b), this.f[d] = b)) : c in this.o || (fw(this, b), this.o[c] = b);
        this.l();
        this.dispatchEvent(new dw("changefeature", b))
    };
    l.ia = function () {
        return this.b.ia() && xb(this.d)
    };
    l.Hb = ca;
    l.$a = function (b) {
        var c = ma(b).toString();
        c in this.d ? delete this.d[c] : this.b.remove(b);
        this.Xf(b);
        this.l()
    };
    l.Xf = function (b) {
        var c = ma(b).toString();
        Ta(this.i[c], Yc);
        delete this.i[c];
        var d = b.X;
        m(d) ? delete this.f[d.toString()] : delete this.o[c];
        this.dispatchEvent(new dw("removefeature", b))
    };

    function fw(b, c) {
        for (var d in b.f) if (b.f[d] === c) {
            delete b.f[d];
            break
        }
    }
    function dw(b, c) {
        uc.call(this, b);
        this.feature = c
    }
    u(dw, uc);

    function gw(b, c) {
        uc.call(this, b);
        this.feature = c
    }
    u(gw, uc);

    function hw(b) {
        Bk.call(this, {
            handleDownEvent: iw,
            handleEvent: jw,
            handleUpEvent: kw
        });
        this.Q = null;
        this.ga = m(b.source) ? b.source : null;
        this.ba = m(b.features) ? b.features : null;
        this.Ab = m(b.snapTolerance) ? b.snapTolerance : 12;
        this.Ta = m(b.minPointsPerRing) ? b.minPointsPerRing : 3;
        var c = this.F = b.type,
            d;
        if ("Point" === c || "MultiPoint" === c) d = lw;
        else if ("LineString" === c || "MultiLineString" === c) d = mw;
        else if ("Polygon" === c || "MultiPolygon" === c) d = nw;
        this.d = d;
        this.f = this.r = this.j = this.g = this.i = null;
        this.J = new sp({
            style: m(b.style) ? b.style : ow()
        });
        this.ca = b.geometryName;
        this.eb = m(b.condition) ? b.condition : xk;
        z(this, xd("active"), this.ea, !1, this)
    }
    u(hw, Bk);

    function ow() {
        var b = Xl();
        return function (c) {
            return b[c.N().H()]
        }
    }
    hw.prototype.setMap = function (b) {
        hw.S.setMap.call(this, b);
        this.ea()
    };

    function jw(b) {
        var c;
        c = b.map;
        if (Pf(document, c.b) && "none" != c.b.style.display) {
            var d = c.e();
            null == d || 0 >= d[0] || 0 >= d[1] ? c = !1 : (c = c.a(), c = null !== c && af(c) ? !0 : !1)
        } else c = !1;
        if (!c) return !0;
        c = !0;
        b.type === nj ? c = pw(this, b) : b.type === hj && (c = !1);
        return Ck.call(this, b) && c
    }
    function iw(b) {
        return this.eb(b) ? (this.Q = b.pixel, !0) : !1
    }

    function kw(b) {
        var c = this.Q,
            d = b.pixel,
            e = c[0] - d[0],
            c = c[1] - d[1],
            d = !0;
        4 >= e * e + c * c && (pw(this, b), null === this.i ? qw(this, b) : this.d === lw || rw(this, b) ? this.V() : (b = b.coordinate, e = this.g.N(), this.d === mw ? (this.i = b.slice(), c = e.K(), c.push(b.slice()), e.U(c)) : this.d === nw && (this.f[0].push(b.slice()), e.U(this.f)), sw(this)), d = !1);
        return d
    }

    function pw(b, c) {
        if (b.d === lw && null === b.i) qw(b, c);
        else if (null === b.i) {
            var d = c.coordinate.slice();
            null === b.j ? (b.j = new R(new jl(d)), sw(b)) : b.j.N().U(d)
        } else {
            var d = c.coordinate,
                e = b.g.N(),
                f, g;
            b.d === lw ? (g = e.K(), g[0] = d[0], g[1] = d[1], e.U(g)) : (b.d === mw ? f = e.K() : b.d === nw && (f = b.f[0]), rw(b, c) && (d = b.i.slice()), b.j.N().U(d), g = f[f.length - 1], g[0] = d[0], g[1] = d[1], b.d === mw ? e.U(f) : b.d === nw && (b.r.N().U(f), e.U(b.f)));
            sw(b)
        }
        return !0
    }

    function rw(b, c) {
        var d = !1;
        if (null !== b.g) {
            var e = b.g.N(),
                f = !1,
                g = [b.i];
            b.d === mw ? f = 2 < e.K().length : b.d === nw && (f = e.K()[0].length > b.Ta, g = [b.f[0][0], b.f[0][b.f[0].length - 2]]);
            if (f) for (var e = c.map, f = 0, h = g.length; f < h; f++) {
                var k = g[f],
                    n = e.f(k),
                    p = c.pixel,
                    d = p[0] - n[0],
                    n = p[1] - n[1];
                if (d = Math.sqrt(d * d + n * n) <= b.Ab) {
                    b.i = k;
                    break
                }
            }
        }
        return d
    }

    function qw(b, c) {
        var d = c.coordinate;
        b.i = d;
        var e;
        b.d === lw ? e = new jl(d.slice()) : b.d === mw ? e = new M([d.slice(), d.slice()]) : b.d === nw && (b.r = new R(new M([d.slice(), d.slice()])), b.f = [
            [d.slice(), d.slice()]
        ], e = new H(b.f));
        b.g = new R;
        m(b.ca) && b.g.e(b.ca);
        b.g.Ma(e);
        sw(b);
        b.dispatchEvent(new gw("drawstart", b.g))
    }
    hw.prototype.V = function () {
        var b = tw(this),
            c, d = b.N();
        this.d === lw ? c = d.K() : this.d === mw ? (c = d.K(), c.pop(), d.U(c)) : this.d === nw && (this.f[0].pop(), this.f[0].push(this.f[0][0]), d.U(this.f), c = d.K());
        "MultiPoint" === this.F ? b.Ma(new un([c])) : "MultiLineString" === this.F ? b.Ma(new rn([c])) : "MultiPolygon" === this.F && b.Ma(new vn([c]));
        null === this.ba || this.ba.push(b);
        null === this.ga || this.ga.Pa(b);
        this.dispatchEvent(new gw("drawend", b))
    };

    function tw(b) {
        b.i = null;
        var c = b.g;
        null !== c && (b.g = null, b.j = null, b.r = null, b.J.a.clear());
        return c
    }
    hw.prototype.q = cd;

    function sw(b) {
        var c = [];
        null === b.g || c.push(b.g);
        null === b.r || c.push(b.r);
        null === b.j || c.push(b.j);
        b.J.Mc(new B(c))
    }
    hw.prototype.ea = function () {
        var b = this.n,
            c = this.a();
        null !== b && c || tw(this);
        this.J.setMap(c ? b : null)
    };
    var lw = "Point",
        mw = "LineString",
        nw = "Polygon";

    function uw(b) {
        Bk.call(this, {
            handleDownEvent: vw,
            handleDragEvent: ww,
            handleEvent: xw,
            handleUpEvent: yw
        });
        this.ba = m(b.deleteCondition) ? b.deleteCondition : id(xk, wk);
        this.V = this.f = null;
        this.Q = [0, 0];
        this.d = new Wv;
        this.i = m(b.pixelTolerance) ? b.pixelTolerance : 10;
        this.J = !1;
        this.g = null;
        this.j = new sp({
            style: m(b.style) ? b.style : zw()
        });
        this.F = {
            Point: this.Fl,
            LineString: this.jg,
            LinearRing: this.jg,
            Polygon: this.Hl,
            MultiPoint: this.Cl,
            MultiLineString: this.Bl,
            MultiPolygon: this.El,
            GeometryCollection: this.Al
        };
        this.r = b.features;
        this.r.forEach(this.wf, this);
        z(this.r, "add", this.Wh, !1, this);
        z(this.r, "remove", this.Xh, !1, this)
    }
    u(uw, Bk);
    l = uw.prototype;
    l.wf = function (b) {
        var c = b.N();
        m(this.F[c.H()]) && this.F[c.H()].call(this, b, c);
        b = this.n;
        null === b || Aw(this, this.Q, b)
    };
    l.setMap = function (b) {
        this.j.setMap(b);
        uw.S.setMap.call(this, b)
    };
    l.Wh = function (b) {
        this.wf(b.element)
    };
    l.Xh = function (b) {
        var c = b.element;
        b = this.d;
        var d, e = [];
        $v(b, c.N().D(), function (b) {
            c === b.feature && e.push(b)
        });
        for (d = e.length - 1; 0 <= d; --d) b.remove(e[d]);
        null !== this.f && 0 === this.r.Ib() && (this.j.wd(this.f), this.f = null)
    };
    l.Fl = function (b, c) {
        var d = c.K(),
            d = {
                feature: b,
                geometry: c,
                fa: [d, d]
            };
        this.d.na(c.D(), d)
    };
    l.Cl = function (b, c) {
        var d = c.K(),
            e, f, g;
        f = 0;
        for (g = d.length; f < g; ++f) e = d[f], e = {
            feature: b,
            geometry: c,
            depth: [f],
            index: f,
            fa: [e, e]
        }, this.d.na(c.D(), e)
    };
    l.jg = function (b, c) {
        var d = c.K(),
            e, f, g, h;
        e = 0;
        for (f = d.length - 1; e < f; ++e) g = d.slice(e, e + 2), h = {
            feature: b,
            geometry: c,
            index: e,
            fa: g
        }, this.d.na(Td(g), h)
    };
    l.Bl = function (b, c) {
        var d = c.K(),
            e, f, g, h, k, n, p;
        h = 0;
        for (k = d.length; h < k; ++h) for (e = d[h], f = 0, g = e.length - 1; f < g; ++f) n = e.slice(f, f + 2), p = {
            feature: b,
            geometry: c,
            depth: [h],
            index: f,
            fa: n
        }, this.d.na(Td(n), p)
    };
    l.Hl = function (b, c) {
        var d = c.K(),
            e, f, g, h, k, n, p;
        h = 0;
        for (k = d.length; h < k; ++h) for (e = d[h], f = 0, g = e.length - 1; f < g; ++f) n = e.slice(f, f + 2), p = {
            feature: b,
            geometry: c,
            depth: [h],
            index: f,
            fa: n
        }, this.d.na(Td(n), p)
    };
    l.El = function (b, c) {
        var d = c.K(),
            e, f, g, h, k, n, p, q, r, s;
        n = 0;
        for (p = d.length; n < p; ++n) for (q = d[n], h = 0, k = q.length; h < k; ++h) for (e = q[h], f = 0, g = e.length - 1; f < g; ++f) r = e.slice(f, f + 2), s = {
            feature: b,
            geometry: c,
            depth: [h, n],
            index: f,
            fa: r
        }, this.d.na(Td(r), s)
    };
    l.Al = function (b, c) {
        var d, e = c.d;
        for (d = 0; d < e.length; ++d) this.F[e[d].H()].call(this, b, e[d])
    };

    function Bw(b, c) {
        var d = b.f;
        null === d ? (d = new R(new jl(c)), b.f = d, b.j.rf(d)) : d.N().U(c)
    }

    function vw(b) {
        Aw(this, b.pixel, b.map);
        this.g = [];
        var c = this.f;
        if (null !== c) {
            b = [];
            for (var c = c.N().K(), d = Td([c]), d = Yv(this.d, d), e = 0, f = d.length; e < f; ++e) {
                var g = d[e],
                    h = g.fa;
                Cd(h[0], c) ? this.g.push([g, 0]) : Cd(h[1], c) ? this.g.push([g, 1]) : ma(h) in this.V && b.push([g, c])
            }
            for (e = b.length - 1; 0 <= e; --e) this.ui.apply(this, b[e])
        }
        return null !== this.f
    }

    function ww(b) {
        b = b.coordinate;
        for (var c = 0, d = this.g.length; c < d; ++c) {
            for (var e = this.g[c], f = e[0], g = f.depth, h = f.geometry, k = h.K(), n = f.fa, e = e[1]; b.length < h.s;) b.push(0);
            switch (h.H()) {
                case "Point":
                    k = b;
                    n[0] = n[1] = b;
                    break;
                case "MultiPoint":
                    k[f.index] = b;
                    n[0] = n[1] = b;
                    break;
                case "LineString":
                    k[f.index + e] = b;
                    n[e] = b;
                    break;
                case "MultiLineString":
                    k[g[0]][f.index + e] = b;
                    n[e] = b;
                    break;
                case "Polygon":
                    k[g[0]][f.index + e] = b;
                    n[e] = b;
                    break;
                case "MultiPolygon":
                    k[g[1]][g[0]][f.index + e] = b, n[e] = b
            }
            h.U(k);
            Bw(this, b)
        }
    }

    function yw() {
        for (var b, c = this.g.length - 1; 0 <= c; --c) b = this.g[c][0], this.d.update(Td(b.fa), b);
        return !1
    }

    function xw(b) {
        var c, d = b.map.a();
        cb(d.j)[1] || b.type != nj || (this.Q = b.pixel, Aw(this, b.pixel, b.map));
        if (null !== this.f && this.J && this.ba(b)) {
            this.f.N();
            c = this.g;
            var d = {}, e = !1,
                f, g, h, k, n, p, q, r, s;
            for (n = c.length - 1; 0 <= n; --n) if (h = c[n], r = h[0], k = r.geometry, g = k.K(), s = ma(r.feature), f = q = p = void 0, 0 === h[1] ? (q = r, p = r.index) : 1 == h[1] && (f = r, p = r.index + 1), s in d || (d[s] = [f, q, p]), h = d[s], m(f) && (h[0] = f), m(q) && (h[1] = q), m(h[0]) && m(h[1])) {
                f = g;
                e = !1;
                q = p - 1;
                switch (k.H()) {
                    case "MultiLineString":
                        g[r.depth[0]].splice(p, 1);
                        e = !0;
                        break;
                    case "LineString":
                        g.splice(p,
                        1);
                        e = !0;
                        break;
                    case "MultiPolygon":
                        f = f[r.depth[1]];
                    case "Polygon":
                        f = f[r.depth[0]], 4 < f.length && (p == f.length - 1 && (p = 0), f.splice(p, 1), e = !0, 0 === p && (f.pop(), f.push(f[0]), q = f.length - 1))
                }
                e && (this.d.remove(h[0]), this.d.remove(h[1]), k.U(g), g = {
                    depth: r.depth,
                    feature: r.feature,
                    geometry: r.geometry,
                    index: q,
                    fa: [h[0].fa[0], h[1].fa[1]]
                }, this.d.na(Td(g.fa), g), Cw(this, k, p, r.depth, -1), this.j.wd(this.f), this.f = null)
            }
            c = e
        }
        return Ck.call(this, b) && !c
    }

    function Aw(b, c, d) {
        function e(b, c) {
            return Ed(f, zd(f, b.fa)) - Ed(f, zd(f, c.fa))
        }
        var f = d.Ga(c),
            g = d.Ga([c[0] - b.i, c[1] + b.i]),
            h = d.Ga([c[0] + b.i, c[1] - b.i]),
            g = Td([g, h]),
            g = Yv(b.d, g);
        if (0 < g.length) {
            g.sort(e);
            var h = g[0].fa,
                k = zd(f, h),
                n = d.f(k);
            if (Math.sqrt(Ed(c, n)) <= b.i) {
                c = d.f(h[0]);
                d = d.f(h[1]);
                c = Ed(n, c);
                d = Ed(n, d);
                b.J = Math.sqrt(Math.min(c, d)) <= b.i;
                b.J && (k = c > d ? h[1] : h[0]);
                Bw(b, k);
                d = {};
                d[ma(h)] = !0;
                c = 1;
                for (n = g.length; c < n; ++c) if (k = g[c].fa, Cd(h[0], k[0]) && Cd(h[1], k[1]) || Cd(h[0], k[1]) && Cd(h[1], k[0])) d[ma(k)] = !0;
                else break;
                b.V = d;
                return
            }
        }
        null !== b.f && (b.j.wd(b.f), b.f = null)
    }
    l.ui = function (b, c) {
        for (var d = b.fa, e = b.feature, f = b.geometry, g = b.depth, h = b.index, k; c.length < f.s;) c.push(0);
        switch (f.H()) {
            case "MultiLineString":
                k = f.K();
                k[g[0]].splice(h + 1, 0, c);
                break;
            case "Polygon":
                k = f.K();
                k[g[0]].splice(h + 1, 0, c);
                break;
            case "MultiPolygon":
                k = f.K();
                k[g[1]][g[0]].splice(h + 1, 0, c);
                break;
            case "LineString":
                k = f.K();
                k.splice(h + 1, 0, c);
                break;
            default:
                return
        }
        f.U(k);
        k = this.d;
        k.remove(b);
        Cw(this, f, h, g, 1);
        var n = {
            fa: [d[0], c],
            feature: e,
            geometry: f,
            depth: g,
            index: h
        };
        k.na(Td(n.fa), n);
        this.g.push([n, 1]);
        d = {
            fa: [c, d[1]],
            feature: e,
            geometry: f,
            depth: g,
            index: h + 1
        };
        k.na(Td(d.fa), d);
        this.g.push([d, 0])
    };

    function Cw(b, c, d, e, f) {
        $v(b.d, c.D(), function (b) {
            b.geometry === c && (!m(e) || ib(b.depth, e)) && b.index > d && (b.index += f)
        })
    }
    function zw() {
        var b = Xl();
        return function () {
            return b.Point
        }
    };

    function Dw(b) {
        ok.call(this, {
            handleEvent: Ew
        });
        b = m(b) ? b : {};
        this.g = m(b.condition) ? b.condition : wk;
        this.f = m(b.addCondition) ? b.addCondition : cd;
        this.p = m(b.removeCondition) ? b.removeCondition : cd;
        this.r = m(b.toggleCondition) ? b.toggleCondition : yk;
        var c;
        if (m(b.layers)) if (ka(b.layers)) c = b.layers;
        else {
            var d = b.layers;
            c = function (b) {
                return Za(d, b)
            }
        } else c = dd;
        this.e = c;
        this.d = new sp({
            style: m(b.style) ? b.style : Fw()
        });
        b = this.d.a;
        z(b, "add", this.i, !1, this);
        z(b, "remove", this.q, !1, this)
    }
    u(Dw, ok);
    Dw.prototype.j = function () {
        return this.d.a
    };

    function Ew(b) {
        if (!this.g(b)) return !0;
        var c = this.f(b),
            d = this.p(b),
            e = this.r(b),
            f = b.map,
            g = this.d.a;
        if (c || d || e) {
            var h = [],
                k = [];
            f.oe(b.pixel, function (b) {
                -1 == Sa.indexOf.call(g.a, b, void 0) ? (c || e) && k.push(b) : (d || e) && h.push(b)
            }, void 0, this.e);
            for (f = h.length - 1; 0 <= f; --f) g.remove(h[f]);
            g.qf(k)
        } else f = f.oe(b.pixel, function (b) {
            return b
        }, void 0, this.e), m(f) && 1 == g.Ib() && g.item(0) == f || (0 !== g.Ib() && g.clear(), m(f) && g.push(f));
        return vk(b)
    }
    Dw.prototype.setMap = function (b) {
        var c = this.n,
            d = this.d.a;
        null === c || d.forEach(c.fc, c);
        Dw.S.setMap.call(this, b);
        this.d.setMap(b);
        null === b || d.forEach(b.eb, b)
    };

    function Fw() {
        var b = Xl();
        db(b.Polygon, b.LineString);
        db(b.GeometryCollection, b.LineString);
        return function (c) {
            return b[c.N().H()]
        }
    }
    Dw.prototype.i = function (b) {
        b = b.element;
        var c = this.n;
        null === c || c.eb(b)
    };
    Dw.prototype.q = function (b) {
        b = b.element;
        var c = this.n;
        null === c || c.fc(b)
    };

    function $(b) {
        b = m(b) ? b : {};
        L.call(this, b);
        this.ea = null;
        z(this, xd("gradient"), this.Wd, !1, this);
        this.fc(m(b.gradient) ? b.gradient : Gw);
        var c = Hw(m(b.radius) ? b.radius : 8, m(b.blur) ? b.blur : 15, m(b.shadow) ? b.shadow : 250),
            d = Array(256),
            e = m(b.weight) ? b.weight : "weight",
            f;
        ia(e) ? f = function (b) {
            return b.get(e)
        } : f = e;
        this.oa(function (b) {
            b = f(b);
            b = m(b) ? Yb(b, 0, 1) : 1;
            var e = 255 * b | 0,
                k = d[e];
            m(k) || (k = [new Tl({
                image: new Sj({
                    opacity: b,
                    src: c
                })
            })], d[e] = k);
            return k
        });
        this.set("renderOrder", null);
        z(this, "render", this.Xd, !1, this)
    }
    u($, L);
    var Gw = ["#00f", "#0ff", "#0f0", "#ff0", "#f00"];

    function Hw(b, c, d) {
        var e = b + c + 1,
            f = 2 * e,
            f = Tf(f, f);
        f.shadowOffsetX = f.shadowOffsetY = d;
        f.shadowBlur = c;
        f.shadowColor = "#000";
        f.beginPath();
        c = e - d;
        f.arc(c, c, b, 0, 2 * Math.PI, !0);
        f.fill();
        return f.canvas.toDataURL()
    }
    $.prototype.qa = function () {
        return this.get("gradient")
    };
    $.prototype.getGradient = $.prototype.qa;
    $.prototype.Wd = function () {
        for (var b = this.qa(), c = Tf(1, 256), d = c.createLinearGradient(0, 0, 1, 256), e = 1 / (b.length - 1), f = 0, g = b.length; f < g; ++f) d.addColorStop(f * e, b[f]);
        c.fillStyle = d;
        c.fillRect(0, 0, 1, 256);
        this.ea = c.getImageData(0, 0, 1, 256).data
    };
    $.prototype.Xd = function (b) {
        b = b.context;
        var c = b.canvas,
            c = b.getImageData(0, 0, c.width, c.height),
            d = c.data,
            e, f, g;
        e = 0;
        for (f = d.length; e < f; e += 4) if (g = 4 * d[e + 3]) d[e] = this.ea[g], d[e + 1] = this.ea[g + 1], d[e + 2] = this.ea[g + 2];
        b.putImageData(c, 0, 0)
    };
    $.prototype.fc = function (b) {
        this.set("gradient", b)
    };
    $.prototype.setGradient = $.prototype.fc;

    function Iw(b) {
        return [b]
    };

    function Jw(b, c) {
        var d = c || {}, e = d.document || document,
            f = If("SCRIPT"),
            g = {
                $f: f,
                bc: void 0
            }, h = new yv(Kw, g),
            k = null,
            n = null != d.timeout ? d.timeout : 5E3;
        0 < n && (k = window.setTimeout(function () {
            Lw(f, !0);
            var c = new Mw(Nw, "Timeout reached for loading script " + b);
            Av(h);
            Bv(h, !1, c)
        }, n), g.bc = k);
        f.onload = f.onreadystatechange = function () {
            f.readyState && "loaded" != f.readyState && "complete" != f.readyState || (Lw(f, d.Zg || !1, k), Av(h), Bv(h, !0, null))
        };
        f.onerror = function () {
            Lw(f, !0, k);
            var c = new Mw(Ow, "Error while loading script " + b);
            Av(h);
            Bv(h, !1, c)
        };
        Cf(f, {
            type: "text/javascript",
            charset: "UTF-8",
            src: b
        });
        Pw(e).appendChild(f);
        return h
    }
    function Pw(b) {
        var c = b.getElementsByTagName("HEAD");
        return c && 0 != c.length ? c[0] : b.documentElement
    }
    function Kw() {
        if (this && this.$f) {
            var b = this.$f;
            b && "SCRIPT" == b.tagName && Lw(b, !0, this.bc)
        }
    }
    function Lw(b, c, d) {
        null != d && ba.clearTimeout(d);
        b.onload = ca;
        b.onerror = ca;
        b.onreadystatechange = ca;
        c && window.setTimeout(function () {
            Nf(b)
        }, 0)
    }
    var Ow = 0,
        Nw = 1;

    function Mw(b, c) {
        var d = "Jsloader error (code #" + b + ")";
        c && (d += ": " + c);
        xa.call(this, d);
        this.code = b
    }
    u(Mw, xa);

    function Qw(b, c) {
        this.c = new Ah(b);
        this.a = c ? c : "callback";
        this.bc = 5E3
    }
    var Rw = 0;
    Qw.prototype.send = function (b, c, d, e) {
        b = b || null;
        e = e || "_" + (Rw++).toString(36) + ua().toString(36);
        ba._callbacks_ || (ba._callbacks_ = {});
        var f = this.c.clone();
        if (b) for (var g in b) if (!b.hasOwnProperty || b.hasOwnProperty(g)) {
            var h = f,
                k = g,
                n = b[g];
            ga(n) || (n = [String(n)]);
            Uh(h.a, k, n)
        }
        c && (ba._callbacks_[e] = Sw(e, c), c = this.a, g = "_callbacks_." + e, ga(g) || (g = [String(g)]), Uh(f.a, c, g));
        c = Jw(f.toString(), {
            timeout: this.bc,
            Zg: !0
        });
        Ev(c, null, Tw(e, b, d), void 0);
        return {
            X: e,
            Xe: c
        }
    };
    Qw.prototype.cancel = function (b) {
        b && (b.Xe && b.Xe.cancel(), b.X && Uw(b.X, !1))
    };

    function Tw(b, c, d) {
        return function () {
            Uw(b, !1);
            d && d(c)
        }
    }
    function Sw(b, c) {
        return function (d) {
            Uw(b, !0);
            c.apply(void 0, arguments)
        }
    }
    function Uw(b, c) {
        ba._callbacks_[b] && (c ? delete ba._callbacks_[b] : ba._callbacks_[b] = ca)
    };

    function Vw(b) {
        var c = /\{z\}/g,
            d = /\{x\}/g,
            e = /\{y\}/g,
            f = /\{-y\}/g;
        return function (g) {
            return null === g ? void 0 : b.replace(c, g[0].toString()).replace(d, g[1].toString()).replace(e, g[2].toString()).replace(f, function () {
                return ((1 << g[0]) - g[2] - 1).toString()
            })
        }
    }
    function Ww(b) {
        return Xw(Va(b, Vw))
    }
    function Xw(b) {
        return 1 === b.length ? b[0] : function (c, d, e) {
            return null === c ? void 0 : b[Zb((c[1] << c[0]) + c[2], b.length)](c, d, e)
        }
    }
    function Yw() {}

    function Zw(b, c) {
        var d = [0, 0, 0];
        return function (e, f, g) {
            return null === e ? void 0 : c(b(e, g, d), f, g)
        }
    }
    function $w(b) {
        var c = [],
            d = /\{(\d)-(\d)\}/.exec(b) || /\{([a-z])-([a-z])\}/.exec(b);
        if (d) {
            var e = d[2].charCodeAt(0),
                f;
            for (f = d[1].charCodeAt(0); f <= e; ++f) c.push(b.replace(d[0], String.fromCharCode(f)))
        } else c.push(b);
        return c
    };

    function ax(b) {
        Io.call(this);
        this.e = m(b) ? b : 2048
    }
    u(ax, Io);

    function bx(b) {
        return b.Ub() > b.e
    }
    function cx(b, c) {
        for (var d, e; bx(b) && !(d = b.a.dc, e = d.a[0].toString(), e in c && c[e].contains(d.a));) b.pop().hc()
    };

    function dx(b) {
        Fj.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            opaque: b.opaque,
            projection: b.projection,
            state: m(b.state) ? b.state : void 0,
            tileGrid: b.tileGrid,
            tilePixelRatio: b.tilePixelRatio
        });
        this.tileUrlFunction = m(b.tileUrlFunction) ? b.tileUrlFunction : Yw;
        this.crossOrigin = m(b.crossOrigin) ? b.crossOrigin : null;
        this.b = new ax;
        this.tileLoadFunction = m(b.tileLoadFunction) ? b.tileLoadFunction : ex;
        this.tileClass = m(b.tileClass) ? b.tileClass : Yu
    }
    u(dx, Fj);

    function ex(b, c) {
        b.Na().src = c
    }
    l = dx.prototype;
    l.zd = function () {
        return bx(this.b)
    };
    l.se = function (b) {
        cx(this.b, b)
    };
    l.Fb = function (b, c, d, e, f) {
        var g = this.hb(b, c, d);
        if (Fo(this.b, g)) return this.b.get(g);
        b = [b, c, d];
        e = this.tileUrlFunction(b, e, f);
        e = new this.tileClass(b, m(e) ? 0 : 4, m(e) ? e : "", this.crossOrigin, this.tileLoadFunction);
        this.b.set(g, e);
        return e
    };
    l.ib = function () {
        return this.tileLoadFunction
    };
    l.jb = function () {
        return this.tileUrlFunction
    };
    l.ob = function (b) {
        this.b.clear();
        this.tileLoadFunction = b;
        this.l()
    };
    l.pa = function (b) {
        this.b.clear();
        this.tileUrlFunction = b;
        this.l()
    };
    l.He = function (b, c, d) {
        b = this.hb(b, c, d);
        Fo(this.b, b) && this.b.get(b)
    };

    function fx(b) {
        var c = m(b.extent) ? b.extent : om,
            d = Dj(c, b.maxZoom, b.tileSize);
        wj.call(this, {
            minZoom: b.minZoom,
            origin: le(c, "top-left"),
            resolutions: d,
            tileSize: b.tileSize
        })
    }
    u(fx, wj);
    fx.prototype.Bb = function (b) {
        b = m(b) ? b : {};
        var c = this.minZoom,
            d = this.maxZoom,
            e = m(b.wrapX) ? b.wrapX : !0,
            f = null;
        if (m(b.extent)) {
            var f = Array(d + 1),
                g;
            for (g = 0; g <= d; ++g) f[g] = g < c ? null : zj(this, b.extent, g)
        }
        return function (b, g, n) {
            g = b[0];
            if (g < c || d < g) return null;
            var p = Math.pow(2, g),
                q = b[1];
            if (e) q = Zb(q, p);
            else if (0 > q || p <= q) return null;
            b = b[2];
            return b < -p || -1 < b || null !== f && !qf(f[g], q, b) ? null : kf(g, q, -b - 1, n)
        }
    };
    fx.prototype.kd = function (b, c) {
        if (b[0] < this.maxZoom) {
            var d = 2 * b[1],
                e = 2 * b[2];
            return pf(d, d + 1, e, e + 1, c)
        }
        return null
    };
    fx.prototype.$c = function (b, c, d, e) {
        e = pf(0, b[1], 0, b[2], e);
        for (b = b[0] - 1; b >= this.minZoom; --b) if (e.a = e.d >>= 1, e.b = e.c >>= 1, c.call(d, b, e)) return !0;
        return !1
    };

    function gx(b) {
        dx.call(this, {
            crossOrigin: "anonymous",
            opaque: !0,
            projection: Ee("EPSG:3857"),
            state: "loading",
            tileLoadFunction: b.tileLoadFunction
        });
        this.d = m(b.culture) ? b.culture : "en-us";
        this.a = m(b.maxZoom) ? b.maxZoom : -1;
        var c = new Ah((Wb ? "https:" : "http:") + "//dev.virtualearth.net/REST/v1/Imagery/Metadata/" + b.imagerySet);
        (new Qw(c, "jsonp")).send({
            include: "ImageryProviders",
            uriScheme: Wb ? "https" : "http",
            key: b.key
        }, sa(this.f, this))
    }
    u(gx, dx);
    var hx = new tf({
        html: '<a class="ol-attribution-bing-tos" href="http://www.microsoft.com/maps/product/terms.html">Terms of Use</a>'
    });
    gx.prototype.f = function (b) {
        if (200 != b.statusCode || "OK" != b.statusDescription || "ValidCredentials" != b.authenticationResultCode || 1 != b.resourceSets.length || 1 != b.resourceSets[0].resources.length) rj(this, "error");
        else {
            var c = b.brandLogoUri,
                d = b.resourceSets[0].resources[0],
                e = -1 == this.a ? d.zoomMax : this.a,
                f = new fx({
                    extent: Ej(this.g),
                    minZoom: d.zoomMin,
                    maxZoom: e,
                    tileSize: d.imageWidth
                });
            this.tileGrid = f;
            var g = this.d;
            this.tileUrlFunction = Zw(f.Bb(), Xw(Va(d.imageUrlSubdomains, function (b) {
                var c = d.imageUrl.replace("{subdomain}",
                b).replace("{culture}", g);
                return function (b) {
                    return null === b ? void 0 : c.replace("{quadkey}", mf(b))
                }
            })));
            if (d.imageryProviders) {
                var h = De(Ee("EPSG:4326"), this.g);
                b = Va(d.imageryProviders, function (b) {
                    var c = b.attribution,
                        d = {};
                    Ta(b.coverageAreas, function (b) {
                        var c = b.zoomMin,
                            g = Math.min(b.zoomMax, e);
                        b = b.bbox;
                        b = we([b[1], b[0], b[3], b[2]], h);
                        var k, n;
                        for (k = c; k <= g; ++k) n = k.toString(), c = zj(f, b, k), n in d ? d[n].push(c) : d[n] = [c]
                    });
                    return new tf({
                        html: c,
                        tileRanges: d
                    })
                });
                b.push(hx);
                this.e = b
            }
            this.r = c;
            rj(this, "ready")
        }
    };

    function ix(b) {
        aw.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            projection: b.projection
        });
        this.j = void 0;
        this.q = m(b.distance) ? b.distance : 20;
        this.a = [];
        this.p = b.source;
        this.p.u("change", ix.prototype.t, this)
    }
    u(ix, aw);
    ix.prototype.Hb = function (b, c, d) {
        c !== this.j && (this.clear(), this.j = c, this.p.Hb(b, c, d), jx(this), this.ya(this.a))
    };
    ix.prototype.t = function () {
        this.clear();
        jx(this);
        this.ya(this.a);
        this.l()
    };

    function jx(b) {
        if (m(b.j)) {
            $a(b.a);
            for (var c = Vd(), d = b.q * b.j, e = b.p.va(), f = {}, g = 0, h = e.length; g < h; g++) {
                var k = e[g];
                tb(f, ma(k).toString()) || (k = k.N().K(), ce(k, c), Yd(c, d, c), k = Yv(b.p.b, c), k = Ua(k, function (b) {
                    b = ma(b).toString();
                    return b in f ? !1 : f[b] = !0
                }), b.a.push(kx(k)))
            }
        }
    }
    function kx(b) {
        for (var c = b.length, d = [0, 0], e = 0; e < c; e++) {
            var f = b[e].N().K();
            yd(d, f)
        }
        c = 1 / c;
        d[0] *= c;
        d[1] *= c;
        d = new R(new jl(d));
        d.set("features", b);
        return d
    };

    function lx(b, c, d) {
        if (ka(b)) d && (b = sa(b, d));
        else if (b && "function" == typeof b.handleEvent) b = sa(b.handleEvent, b);
        else throw Error("Invalid listener argument");
        return 2147483647 < c ? -1 : ba.setTimeout(b, c || 0)
    };

    function mx() {}
    mx.prototype.a = null;

    function nx(b) {
        var c;
        (c = b.a) || (c = {}, ox(b) && (c[0] = !0, c[1] = !0), c = b.a = c);
        return c
    };
    var px;

    function qx() {}
    u(qx, mx);

    function rx(b) {
        return (b = ox(b)) ? new ActiveXObject(b) : new XMLHttpRequest
    }
    function ox(b) {
        if (!b.c && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var c = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], d = 0; d < c.length; d++) {
                var e = c[d];
                try {
                    return new ActiveXObject(e), b.c = e
                } catch (f) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return b.c
    }
    px = new qx;

    function sx(b) {
        jd.call(this);
        this.r = new rh;
        this.i = b || null;
        this.a = !1;
        this.o = this.T = null;
        this.e = this.p = "";
        this.c = this.j = this.d = this.n = !1;
        this.g = 0;
        this.b = null;
        this.f = tx;
        this.q = this.t = !1
    }
    u(sx, jd);
    var tx = "",
        ux = /^https?$/i,
        vx = ["POST", "PUT"];
    l = sx.prototype;
    l.send = function (b, c, d, e) {
        if (this.T) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.p + "; newUri=" + b);
        c = c ? c.toUpperCase() : "GET";
        this.p = b;
        this.e = "";
        this.n = !1;
        this.a = !0;
        this.T = this.i ? rx(this.i) : rx(px);
        this.o = this.i ? nx(this.i) : nx(px);
        this.T.onreadystatechange = sa(this.Hf, this);
        try {
            this.j = !0, this.T.open(c, String(b), !0), this.j = !1
        } catch (f) {
            wx(this, f);
            return
        }
        b = d || "";
        var g = this.r.clone();
        e && qh(e, function (b, c) {
            g.set(c, b)
        });
        e = Xa(g.I());
        d = ba.FormData && b instanceof ba.FormData;
        !Za(vx,
        c) || e || d || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        g.forEach(function (b, c) {
            this.T.setRequestHeader(c, b)
        }, this);
        this.f && (this.T.responseType = this.f);
        "withCredentials" in this.T && (this.T.withCredentials = this.t);
        try {
            xx(this), 0 < this.g && ((this.q = yx(this.T)) ? (this.T.timeout = this.g, this.T.ontimeout = sa(this.bc, this)) : this.b = lx(this.bc, this.g, this)), this.d = !0, this.T.send(b), this.d = !1
        } catch (h) {
            wx(this, h)
        }
    };

    function yx(b) {
        return Hb && Tb(9) && ja(b.timeout) && m(b.ontimeout)
    }

    function Ya(b) {
        return "content-type" == b.toLowerCase()
    }
    l.bc = function () {
        "undefined" != typeof aa && this.T && (this.e = "Timed out after " + this.g + "ms, aborting", this.dispatchEvent("timeout"), this.T && this.a && (this.a = !1, this.c = !0, this.T.abort(), this.c = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), zx(this)))
    };

    function wx(b, c) {
        b.a = !1;
        b.T && (b.c = !0, b.T.abort(), b.c = !1);
        b.e = c;
        Ax(b);
        zx(b)
    }
    function Ax(b) {
        b.n || (b.n = !0, b.dispatchEvent("complete"), b.dispatchEvent("error"))
    }
    l.M = function () {
        this.T && (this.a && (this.a = !1, this.c = !0, this.T.abort(), this.c = !1), zx(this, !0));
        sx.S.M.call(this)
    };
    l.Hf = function () {
        this.Sa || (this.j || this.d || this.c ? Bx(this) : this.rk())
    };
    l.rk = function () {
        Bx(this)
    };

    function Bx(b) {
        if (b.a && "undefined" != typeof aa && (!b.o[1] || 4 != Cx(b) || 2 != Dx(b))) if (b.d && 4 == Cx(b)) lx(b.Hf, 0, b);
        else if (b.dispatchEvent("readystatechange"), 4 == Cx(b)) {
            b.a = !1;
            try {
                if (Ex(b)) b.dispatchEvent("complete"), b.dispatchEvent("success");
                else {
                    var c;
                    try {
                        c = 2 < Cx(b) ? b.T.statusText : ""
                    } catch (d) {
                        c = ""
                    }
                    b.e = c + " [" + Dx(b) + "]";
                    Ax(b)
                }
            } finally {
                zx(b)
            }
        }
    }
    function zx(b, c) {
        if (b.T) {
            xx(b);
            var d = b.T,
                e = b.o[0] ? ca : null;
            b.T = null;
            b.o = null;
            c || b.dispatchEvent("ready");
            try {
                d.onreadystatechange = e
            } catch (f) {}
        }
    }

    function xx(b) {
        b.T && b.q && (b.T.ontimeout = null);
        ja(b.b) && (ba.clearTimeout(b.b), b.b = null)
    }
    function Ex(b) {
        var c = Dx(b),
            d;
        a: switch (c) {
            case 200:
            case 201:
            case 202:
            case 204:
            case 206:
            case 304:
            case 1223:
                d = !0;
                break a;
            default:
                d = !1
        }
        if (!d) {
            if (c = 0 === c) b = vh(String(b.p))[1] || null, !b && self.location && (b = self.location.protocol, b = b.substr(0, b.length - 1)), c = !ux.test(b ? b.toLowerCase() : "");
            d = c
        }
        return d
    }
    function Cx(b) {
        return b.T ? b.T.readyState : 0
    }
    function Dx(b) {
        try {
            return 2 < Cx(b) ? b.T.status : -1
        } catch (c) {
            return -1
        }
    }

    function Fx(b) {
        try {
            return b.T ? b.T.responseText : ""
        } catch (c) {
            return ""
        }
    }
    function Gx(b) {
        try {
            if (!b.T) return null;
            if ("response" in b.T) return b.T.response;
            switch (b.f) {
                case tx:
                case "text":
                    return b.T.responseText;
                case "arraybuffer":
                    if ("mozResponseArrayBuffer" in b.T) return b.T.mozResponseArrayBuffer
            }
            return null
        } catch (c) {
            return null
        }
    };

    function Hx(b) {
        aw.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection
        });
        this.format = b.format
    }
    u(Hx, aw);

    function Ix(b, c, d, e, f) {
        var g = new sx;
        g.f = "binary" == b.format.H() && bg ? "arraybuffer" : "text";
        z(g, "complete", function (b) {
            b = b.target;
            if (Ex(b)) {
                var c = this.format.H(),
                    g;
                if ("binary" == c && bg) g = Gx(b);
                else if ("json" == c) g = Fx(b);
                else if ("text" == c) g = Fx(b);
                else if ("xml" == c) {
                    if (!Hb) try {
                        g = b.T ? b.T.responseXML : null
                    } catch (p) {
                        g = null
                    }
                    null != g || (g = iq(Fx(b)))
                }
                null != g ? d.call(f, this.a(g)) : rj(this, "error")
            } else e.call(f);
            tc(b)
        }, !1, b);
        g.send(c)
    }
    Hx.prototype.a = function (b) {
        return this.format.ja(b, {
            featureProjection: this.g
        })
    };

    function Jx(b) {
        Hx.call(this, {
            attributions: b.attributions,
            format: b.format,
            logo: b.logo,
            projection: b.projection
        });
        m(b.arrayBuffer) && this.fb(this.a(b.arrayBuffer));
        m(b.doc) && this.fb(this.a(b.doc));
        m(b.node) && this.fb(this.a(b.node));
        m(b.object) && this.fb(this.a(b.object));
        m(b.text) && this.fb(this.a(b.text));
        if (m(b.url) || m(b.urls)) if (rj(this, "loading"), m(b.url) && Ix(this, b.url, this.p, this.j, this), m(b.urls)) {
            b = b.urls;
            var c, d;
            c = 0;
            for (d = b.length; c < d; ++c) Ix(this, b[c], this.p, this.j, this)
        }
    }
    u(Jx, Hx);
    Jx.prototype.j = function () {
        rj(this, "error")
    };
    Jx.prototype.p = function (b) {
        this.fb(b);
        rj(this, "ready")
    };

    function Kx(b) {
        b = m(b) ? b : {};
        Jx.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            format: new Ep({
                defaultDataProjection: b.defaultProjection
            }),
            logo: b.logo,
            object: b.object,
            projection: b.projection,
            text: b.text,
            url: b.url,
            urls: b.urls
        })
    }
    u(Kx, Jx);

    function Lx(b) {
        b = m(b) ? b : {};
        Jx.call(this, {
            attributions: b.attributions,
            doc: b.doc,
            extent: b.extent,
            format: new Vq,
            logo: b.logo,
            node: b.node,
            projection: b.projection,
            text: b.text,
            url: b.url,
            urls: b.urls
        })
    }
    u(Lx, Jx);

    function Mx(b) {
        b = m(b) ? b : {};
        Jx.call(this, {
            format: new Fr({
                altitudeMode: b.altitudeMode
            }),
            projection: b.projection,
            text: b.text,
            url: b.url,
            urls: b.urls
        })
    }
    u(Mx, Jx);

    function Nx(b) {
        qj.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            logo: b.logo,
            projection: b.projection,
            state: b.state
        });
        this.o = m(b.resolutions) ? b.resolutions : null
    }
    u(Nx, qj);

    function Ox(b, c) {
        if (null !== b.o) {
            var d = ec(b.o, c, 0);
            c = b.o[d]
        }
        return c
    }
    function Px(b, c) {
        b.c().src = c
    };

    function Qx(b) {
        Nx.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection,
            resolutions: b.resolutions,
            state: m(b.state) ? b.state : void 0
        });
        this.t = b.canvasFunction;
        this.p = null;
        this.q = 0;
        this.F = m(b.ratio) ? b.ratio : 1.5
    }
    u(Qx, Nx);
    Qx.prototype.rc = function (b, c, d, e) {
        c = Ox(this, c);
        var f = this.p;
        if (null !== f && this.q == this.c && f.resolution == c && f.e == d && $d(f.D(), b)) return f;
        b = b.slice();
        ue(b, this.F);
        e = this.t(b, c, d, [re(b) / c * d, oe(b) / c * d], e);
        null === e || (f = new Xu(b, c, d, this.e, e));
        this.p = f;
        this.q = this.c;
        return f
    };

    function Rx(b) {
        Nx.call(this, {
            projection: b.projection,
            resolutions: b.resolutions
        });
        this.q = m(b.crossOrigin) ? b.crossOrigin : null;
        this.b = m(b.displayDpi) ? b.displayDpi : 96;
        this.a = m(b.params) ? b.params : {};
        var c;
        m(b.url) ? c = Zu(b.url, this.a, sa(this.Q, this)) : c = $u;
        this.j = c;
        this.F = m(b.imageLoadFunction) ? b.imageLoadFunction : Px;
        this.t = m(b.hidpi) ? b.hidpi : !0;
        this.p = m(b.metersPerUnit) ? b.metersPerUnit : 1;
        this.f = m(b.ratio) ? b.ratio : 1;
        this.ba = m(b.useOverlay) ? b.useOverlay : !1;
        this.d = null;
        this.i = 0
    }
    u(Rx, Nx);
    Rx.prototype.J = function () {
        return this.a
    };
    Rx.prototype.rc = function (b, c, d, e) {
        c = Ox(this, c);
        d = this.t ? d : 1;
        var f = this.d;
        if (null !== f && this.i == this.c && f.resolution == c && f.e == d && $d(f.D(), b)) return f;
        1 != this.f && (b = b.slice(), ue(b, this.f));
        e = this.j(b, [re(b) / c * d, oe(b) / c * d], e);
        m(e) ? f = new Wu(b, c, d, this.e, e, this.q, this.F) : f = null;
        this.d = f;
        this.i = this.c;
        return f
    };
    Rx.prototype.V = function (b) {
        Eb(this.a, b);
        this.l()
    };
    Rx.prototype.Q = function (b, c, d, e) {
        var f;
        f = this.p;
        var g = re(d),
            h = oe(d),
            k = e[0],
            n = e[1],
            p = .0254 / this.b;
        f = n * g > k * h ? g * f / (k * p) : h * f / (n * p);
        d = ke(d);
        e = {
            OPERATION: this.ba ? "GETDYNAMICMAPOVERLAYIMAGE" : "GETMAPIMAGE",
            VERSION: "2.0.0",
            LOCALE: "en",
            CLIENTAGENT: "ol.source.ImageMapGuide source",
            CLIP: "1",
            SETDISPLAYDPI: this.b,
            SETDISPLAYWIDTH: Math.round(e[0]),
            SETDISPLAYHEIGHT: Math.round(e[1]),
            SETVIEWSCALE: f,
            SETVIEWCENTERX: d[0],
            SETVIEWCENTERY: d[1]
        };
        Eb(e, c);
        return xh(zh([b], e))
    };

    function Sx(b) {
        var c = m(b.attributions) ? b.attributions : null,
            d = b.imageExtent,
            e, f;
        m(b.imageSize) && (e = oe(d) / b.imageSize[1], f = [e]);
        var g = m(b.crossOrigin) ? b.crossOrigin : null,
            h = m(b.imageLoadFunction) ? b.imageLoadFunction : Px;
        Nx.call(this, {
            attributions: c,
            logo: b.logo,
            projection: Ee(b.projection),
            resolutions: f
        });
        this.a = new Wu(d, e, 1, c, b.url, g, h)
    }
    u(Sx, Nx);
    Sx.prototype.rc = function (b) {
        return qe(b, this.a.D()) ? this.a : null
    };

    function Tx(b) {
        this.a = b.source;
        this.J = Kd();
        this.b = Tf();
        this.d = [0, 0];
        this.i = null;
        Qx.call(this, {
            attributions: b.attributions,
            canvasFunction: sa(this.Xg, this),
            logo: b.logo,
            projection: b.projection,
            ratio: b.ratio,
            resolutions: b.resolutions,
            state: this.a.n
        });
        this.j = null;
        this.f = void 0;
        this.yf(b.style);
        z(this.a, "change", this.Aj, void 0, this)
    }
    u(Tx, Qx);
    l = Tx.prototype;
    l.Xg = function (b, c, d, e, f) {
        var g = new Wm(.5 * c / d, b, c);
        this.a.Hb(b, c, f);
        var h = !1;
        this.a.Db(b, c, function (b) {
            var e;
            if (!(e = h)) {
                var f;
                m(b.a) ? f = b.a.call(b, c) : m(this.f) && (f = this.f(b, c));
                if (null != f) {
                    var q, r = !1;
                    e = 0;
                    for (q = f.length; e < q; ++e) r = An(g, b, f[e], zn(c, d), this.zj, this) || r;
                    e = r
                } else e = !1
            }
            h = e
        }, this);
        Xm(g);
        if (h) return null;
        this.d[0] != e[0] || this.d[1] != e[1] ? (this.b.canvas.width = e[0], this.b.canvas.height = e[1], this.d[0] = e[0], this.d[1] = e[1]) : this.b.clearRect(0, 0, e[0], e[1]);
        b = Ux(this, ke(b), c, d, e);
        $m(g, this.b, d, b, 0, {});
        this.i = g;
        return this.b.canvas
    };
    l.yd = function (b, c, d, e, f) {
        if (null !== this.i) {
            var g = {};
            return ck(this.i, b, 0, d, e, function (b) {
                var c = ma(b).toString();
                if (!(c in g)) return g[c] = !0, f(b)
            })
        }
    };
    l.wj = function () {
        return this.a
    };
    l.xj = function () {
        return this.j
    };
    l.yj = function () {
        return this.f
    };

    function Ux(b, c, d, e, f) {
        return Vj(b.J, f[0] / 2, f[1] / 2, e / d, -e / d, 0, -c[0], -c[1])
    }
    l.zj = function () {
        this.l()
    };
    l.Aj = function () {
        rj(this, this.a.n)
    };
    l.yf = function (b) {
        this.j = m(b) ? b : Wl;
        this.f = null === b ? void 0 : Vl(this.j);
        this.l()
    };

    function Vx(b) {
        b = m(b) ? b : {};
        Nx.call(this, {
            attributions: b.attributions,
            logo: b.logo,
            projection: b.projection,
            resolutions: b.resolutions
        });
        this.t = m(b.crossOrigin) ? b.crossOrigin : null;
        this.b = b.url;
        this.J = m(b.imageLoadFunction) ? b.imageLoadFunction : Px;
        this.a = b.params;
        this.f = !0;
        Wx(this);
        this.q = b.serverType;
        this.F = m(b.hidpi) ? b.hidpi : !0;
        this.d = null;
        this.i = [0, 0];
        this.p = 0;
        this.j = m(b.ratio) ? b.ratio : 1.5
    }
    u(Vx, Nx);
    var Xx = [101, 101];
    l = Vx.prototype;
    l.Bj = function (b, c, d, e) {
        if (m(this.b)) {
            var f = ne(b, c, 0, Xx),
                g = {
                    SERVICE: "WMS",
                    VERSION: "1.3.0",
                    REQUEST: "GetFeatureInfo",
                    FORMAT: "image/png",
                    TRANSPARENT: !0,
                    QUERY_LAYERS: x(this.a, "LAYERS")
                };
            Eb(g, this.a, e);
            e = Math.floor((f[3] - b[1]) / c);
            g[this.f ? "I" : "X"] = Math.floor((b[0] - f[0]) / c);
            g[this.f ? "J" : "Y"] = e;
            return Yx(this, f, Xx, 1, Ee(d), g)
        }
    };
    l.Cj = function () {
        return this.a
    };
    l.rc = function (b, c, d, e) {
        if (!m(this.b)) return null;
        c = Ox(this, c);
        1 == d || this.F && m(this.q) || (d = 1);
        var f = this.d;
        if (null !== f && this.p == this.c && f.resolution == c && f.e == d && $d(f.D(), b)) return f;
        f = {
            SERVICE: "WMS",
            VERSION: "1.3.0",
            REQUEST: "GetMap",
            FORMAT: "image/png",
            TRANSPARENT: !0
        };
        Eb(f, this.a);
        b = b.slice();
        var g = (b[0] + b[2]) / 2,
            h = (b[1] + b[3]) / 2;
        if (1 != this.j) {
            var k = this.j * re(b) / 2,
                n = this.j * oe(b) / 2;
            b[0] = g - k;
            b[1] = h - n;
            b[2] = g + k;
            b[3] = h + n
        }
        var k = c / d,
            n = Math.ceil(re(b) / k),
            p = Math.ceil(oe(b) / k);
        b[0] = g - k * n / 2;
        b[2] = g + k * n / 2;
        b[1] = h - k * p / 2;
        b[3] = h + k * p / 2;
        this.i[0] = n;
        this.i[1] = p;
        e = Yx(this, b, this.i, d, e, f);
        this.d = new Wu(b, c, d, this.e, e, this.t, this.J);
        this.p = this.c;
        return this.d
    };

    function Yx(b, c, d, e, f, g) {
        g[b.f ? "CRS" : "SRS"] = f.a;
        "STYLES" in b.a || (g.STYLES = new String(""));
        if (1 != e) switch (b.q) {
            case "geoserver":
                g.FORMAT_OPTIONS = "dpi:" + (90 * e + .5 | 0);
                break;
            case "mapserver":
                g.MAP_RESOLUTION = 90 * e;
                break;
            case "carmentaserver":
            case "qgis":
                g.DPI = 90 * e
        }
        g.WIDTH = d[0];
        g.HEIGHT = d[1];
        d = f.b;
        var h;
        b.f && "ne" == d.substr(0, 2) ? h = [c[1], c[0], c[3], c[2]] : h = c;
        g.BBOX = h.join(",");
        return xh(zh([b.b], g))
    }
    l.Dj = function () {
        return this.b
    };
    l.Ej = function (b) {
        b != this.b && (this.b = b, this.d = null, this.l())
    };
    l.Fj = function (b) {
        Eb(this.a, b);
        Wx(this);
        this.d = null;
        this.l()
    };

    function Wx(b) {
        b.f = 0 <= Na(x(b.a, "VERSION", "1.3.0"), "1.3")
    };

    function Zx(b) {
        b = m(b) ? b : {};
        Jx.call(this, {
            attributions: b.attributions,
            doc: b.doc,
            format: new Kr({
                extractStyles: b.extractStyles,
                defaultStyle: b.defaultStyle
            }),
            logo: b.logo,
            node: b.node,
            projection: b.projection,
            text: b.text,
            url: b.url,
            urls: b.urls
        })
    }
    u(Zx, Jx);

    function $x(b) {
        var c = m(b.projection) ? b.projection : "EPSG:3857",
            d = new fx({
                extent: Ej(c),
                maxZoom: b.maxZoom,
                tileSize: b.tileSize
            });
        dx.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            projection: c,
            tileGrid: d,
            tileLoadFunction: b.tileLoadFunction,
            tilePixelRatio: b.tilePixelRatio,
            tileUrlFunction: Yw
        });
        this.d = d.Bb({
            wrapX: b.wrapX
        });
        m(b.tileUrlFunction) ? this.pa(b.tileUrlFunction) : m(b.urls) ? this.pa(Ww(b.urls)) : m(b.url) && this.a(b.url)
    }
    u($x, dx);
    $x.prototype.pa = function (b) {
        $x.S.pa.call(this, Zw(this.d, b))
    };
    $x.prototype.a = function (b) {
        this.pa(Ww($w(b)))
    };

    function ay(b) {
        b = m(b) ? b : {};
        var c;
        m(b.attributions) ? c = b.attributions : c = [by];
        var d = Wb ? "https:" : "http:";
        $x.call(this, {
            attributions: c,
            crossOrigin: m(b.crossOrigin) ? b.crossOrigin : "anonymous",
            opaque: !0,
            maxZoom: m(b.maxZoom) ? b.maxZoom : 19,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : d + "//{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        })
    }
    u(ay, $x);
    var by = new tf({
        html: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors.'
    });

    function cy(b) {
        b = m(b) ? b : {};
        var c = dy[b.layer];
        $x.call(this, {
            attributions: c.attributions,
            crossOrigin: "anonymous",
            logo: "//developer.mapquest.com/content/osm/mq_logo.png",
            maxZoom: c.maxZoom,
            opaque: !0,
            tileLoadFunction: b.tileLoadFunction,
            url: (Wb ? "https:" : "http:") + "//otile{1-4}-s.mqcdn.com/tiles/1.0.0/" + b.layer + "/{z}/{x}/{y}.jpg"
        })
    }
    u(cy, $x);
    var ey = new tf({
        html: 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a>'
    }),
        dy = {
            osm: {
                maxZoom: 19,
                attributions: [ey, by]
            },
            sat: {
                maxZoom: 18,
                attributions: [ey, new tf({
                    html: "Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency"
                })]
            },
            hyb: {
                maxZoom: 18,
                attributions: [ey, by]
            }
        };

    function fy(b) {
        b = m(b) ? b : {};
        Jx.call(this, {
            attributions: b.attributions,
            doc: b.doc,
            format: new ot,
            logo: b.logo,
            node: b.node,
            projection: b.projection,
            text: b.text,
            url: b.url,
            urls: b.urls
        })
    }
    u(fy, Jx);

    function gy(b) {
        Hx.call(this, {
            attributions: b.attributions,
            format: b.format,
            logo: b.logo,
            projection: b.projection
        });
        this.p = new Wv;
        this.q = b.loader;
        this.t = m(b.strategy) ? b.strategy : Iw;
        this.j = {}
    }
    u(gy, Hx);
    gy.prototype.fb = function (b) {
        var c = [],
            d, e;
        d = 0;
        for (e = b.length; d < e; ++d) {
            var f = b[d],
                g = f.X;
            m(g) ? g in this.j || (c.push(f), this.j[g] = !0) : c.push(f)
        }
        gy.S.fb.call(this, c)
    };
    gy.prototype.clear = function () {
        yb(this.j);
        this.p.clear();
        gy.S.clear.call(this)
    };
    gy.prototype.Hb = function (b, c, d) {
        var e = this.p;
        b = this.t(b, c);
        var f, g;
        f = 0;
        for (g = b.length; f < g; ++f) {
            var h = b[f];
            $v(e, h, function (b) {
                return $d(b.extent, h)
            }) || (this.q.call(this, h, c, d), e.na(h, {
                extent: h.slice()
            }))
        }
    };
    var hy = {
        terrain: {
            Wa: "jpg",
            opaque: !0
        },
        "terrain-background": {
            Wa: "jpg",
            opaque: !0
        },
        "terrain-labels": {
            Wa: "png",
            opaque: !1
        },
        "terrain-lines": {
            Wa: "png",
            opaque: !1
        },
        "toner-background": {
            Wa: "png",
            opaque: !0
        },
        toner: {
            Wa: "png",
            opaque: !0
        },
        "toner-hybrid": {
            Wa: "png",
            opaque: !1
        },
        "toner-labels": {
            Wa: "png",
            opaque: !1
        },
        "toner-lines": {
            Wa: "png",
            opaque: !1
        },
        "toner-lite": {
            Wa: "png",
            opaque: !0
        },
        watercolor: {
            Wa: "jpg",
            opaque: !0
        }
    }, iy = {
        terrain: {
            minZoom: 4,
            maxZoom: 18
        },
        toner: {
            minZoom: 0,
            maxZoom: 20
        },
        watercolor: {
            minZoom: 3,
            maxZoom: 16
        }
    };

    function jy(b) {
        var c = b.layer.indexOf("-"),
            d = hy[b.layer],
            e = Wb ? "https://stamen-tiles-{a-d}.a.ssl.fastly.net/" : "http://{a-d}.tile.stamen.com/";
        $x.call(this, {
            attributions: ky,
            crossOrigin: "anonymous",
            maxZoom: iy[-1 == c ? b.layer : b.layer.slice(0, c)].maxZoom,
            opaque: d.opaque,
            tileLoadFunction: b.tileLoadFunction,
            url: m(b.url) ? b.url : e + b.layer + "/{z}/{x}/{y}." + d.Wa
        })
    }
    u(jy, $x);
    var ky = [new tf({
        html: 'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.'
    }), by];

    function ly(b, c) {
        uj.call(this, b, 2);
        this.b = c.sa(b[0]);
        this.c = {}
    }
    u(ly, uj);
    ly.prototype.Na = function (b) {
        b = m(b) ? ma(b) : -1;
        if (b in this.c) return this.c[b];
        var c = this.b,
            d = Tf(c, c);
        d.strokeStyle = "black";
        d.strokeRect(.5, .5, c + .5, c + .5);
        d.fillStyle = "black";
        d.textAlign = "center";
        d.textBaseline = "middle";
        d.font = "24px sans-serif";
        d.fillText(nf(this.a), c / 2, c / 2);
        return this.c[b] = d.canvas
    };

    function my(b) {
        Fj.call(this, {
            opaque: !1,
            projection: b.projection,
            tileGrid: b.tileGrid
        });
        this.a = new ax
    }
    u(my, Fj);
    my.prototype.zd = function () {
        return bx(this.a)
    };
    my.prototype.se = function (b) {
        cx(this.a, b)
    };
    my.prototype.Fb = function (b, c, d) {
        var e = this.hb(b, c, d);
        if (Fo(this.a, e)) return this.a.get(e);
        b = new ly([b, c, d], this.tileGrid);
        this.a.set(e, b);
        return b
    };

    function ny(b) {
        dx.call(this, {
            crossOrigin: b.crossOrigin,
            projection: Ee("EPSG:3857"),
            state: "loading",
            tileLoadFunction: b.tileLoadFunction
        });
        this.d = b.wrapX;
        (new Qw(b.url)).send(void 0, sa(this.a, this))
    }
    u(ny, dx);
    ny.prototype.a = function (b) {
        var c = Ee("EPSG:4326"),
            d = this.g,
            e;
        m(b.bounds) && (e = we(b.bounds, De(c, d)));
        var f = b.minzoom || 0,
            g = b.maxzoom || 22;
        this.tileGrid = d = new fx({
            extent: Ej(d),
            maxZoom: g,
            minZoom: f
        });
        this.tileUrlFunction = Zw(d.Bb({
            extent: e,
            wrapX: this.d
        }), Ww(b.tiles));
        if (m(b.attribution)) {
            c = m(e) ? e : c.D();
            e = {};
            for (var h; f <= g; ++f) h = f.toString(), e[h] = [zj(d, c, f)];
            this.e = [new tf({
                html: b.attribution,
                tileRanges: e
            })]
        }
        rj(this, "ready")
    };

    function oy(b) {
        Fj.call(this, {
            projection: Ee("EPSG:3857"),
            state: "loading"
        });
        this.f = m(b.preemptive) ? b.preemptive : !0;
        this.b = Yw;
        this.a = new ax;
        this.d = void 0;
        (new Qw(b.url)).send(void 0, sa(this.Gj, this))
    }
    u(oy, Fj);
    l = oy.prototype;
    l.zd = function () {
        return bx(this.a)
    };
    l.se = function (b) {
        cx(this.a, b)
    };
    l.Gh = function () {
        return this.d
    };
    l.eh = function (b, c, d, e, f) {
        null === this.tileGrid ? !0 === f ? $h(function () {
            d.call(e, null)
        }) : d.call(e, null) : (c = this.tileGrid.Vb(b, c), py(this.Fb(c[0], c[1], c[2], 1, this.g), b, d, e, f))
    };
    l.Gj = function (b) {
        var c = Ee("EPSG:4326"),
            d = this.g,
            e;
        m(b.bounds) && (e = we(b.bounds, De(c, d)));
        var f = b.minzoom || 0,
            g = b.maxzoom || 22;
        this.tileGrid = d = new fx({
            extent: Ej(d),
            maxZoom: g,
            minZoom: f
        });
        this.d = b.template;
        var h = b.grids;
        if (null != h) {
            this.b = Zw(d.Bb({
                extent: e
            }), Ww(h));
            if (m(b.attribution)) {
                c = m(e) ? e : c.D();
                for (e = {}; f <= g; ++f) h = f.toString(), e[h] = [zj(d, c, f)];
                this.e = [new tf({
                    html: b.attribution,
                    tileRanges: e
                })]
            }
            rj(this, "ready")
        } else rj(this, "error")
    };
    l.Fb = function (b, c, d, e, f) {
        var g = this.hb(b, c, d);
        if (Fo(this.a, g)) return this.a.get(g);
        b = [b, c, d];
        e = this.b(b, e, f);
        e = new qy(b, m(e) ? 0 : 4, m(e) ? e : "", yj(this.tileGrid, b), this.f);
        this.a.set(g, e);
        return e
    };
    l.He = function (b, c, d) {
        b = this.hb(b, c, d);
        Fo(this.a, b) && this.a.get(b)
    };

    function qy(b, c, d, e, f) {
        uj.call(this, b, c);
        this.g = d;
        this.c = e;
        this.o = f;
        this.d = this.e = this.b = null
    }
    u(qy, uj);
    l = qy.prototype;
    l.Na = function () {
        return null
    };

    function ry(b, c) {
        if (null === b.b || null === b.e || null === b.d) return null;
        var d = b.b[Math.floor((1 - (c[1] - b.c[1]) / (b.c[3] - b.c[1])) * b.b.length)];
        if (!ia(d)) return null;
        d = d.charCodeAt(Math.floor((c[0] - b.c[0]) / (b.c[2] - b.c[0]) * d.length));
        93 <= d && d--;
        35 <= d && d--;
        d = b.e[d - 32];
        return null != d ? b.d[d] : null
    }
    function py(b, c, d, e, f) {
        0 == b.state && !0 === f ? (Wc(b, "change", function () {
            d.call(e, ry(this, c))
        }, !1, b), sy(b)) : !0 === f ? $h(function () {
            d.call(e, ry(this, c))
        }, b) : d.call(e, ry(b, c))
    }
    l.mb = function () {
        return this.g
    };
    l.Vh = function () {
        this.state = 3;
        vj(this)
    };
    l.gi = function (b) {
        this.b = b.grid;
        this.e = b.keys;
        this.d = b.data;
        this.state = 4;
        vj(this)
    };

    function sy(b) {
        0 == b.state && (b.state = 1, (new Qw(b.g)).send(void 0, sa(b.gi, b), sa(b.Vh, b)))
    }
    l.load = function () {
        this.o && sy(this)
    };

    function ty(b) {
        Hx.call(this, {
            attributions: b.attributions,
            format: b.format,
            logo: b.logo,
            projection: b.projection
        });
        this.p = b.tileGrid;
        this.q = Yw;
        this.t = this.p.Bb();
        this.j = {};
        m(b.tileUrlFunction) ? (this.q = b.tileUrlFunction, this.l()) : m(b.urls) ? (this.q = Ww(b.urls), this.l()) : m(b.url) && (this.q = Ww($w(b.url)), this.l())
    }
    u(ty, Hx);
    l = ty.prototype;
    l.clear = function () {
        yb(this.j)
    };

    function uy(b, c, d, e) {
        var f = b.j;
        b = b.p.Vb(c, d);
        f = f[b[0] + "/" + b[1] + "/" + b[2]];
        if (m(f)) for (b = 0, d = f.length; b < d; ++b) {
            var g = f[b];
            if (g.N().Jb(c[0], c[1]) && e.call(void 0, g)) break
        }
    }
    l.Db = function (b, c, d, e) {
        var f = this.p,
            g = this.j;
        c = ec(f.a, c, 0);
        b = zj(f, b, c);
        for (var h, f = b.a; f <= b.d; ++f) for (h = b.b; h <= b.c; ++h) {
            var k = g[c + "/" + f + "/" + h];
            if (m(k)) {
                var n, p;
                n = 0;
                for (p = k.length; n < p; ++n) {
                    var q = d.call(e, k[n]);
                    if (q) return q
                }
            }
        }
    };
    l.va = function () {
        var b = this.j,
            c = [],
            d;
        for (d in b) db(c, b[d]);
        return c
    };
    l.jh = function (b, c) {
        var d = [];
        uy(this, b, c, function (b) {
            d.push(b)
        });
        return d
    };
    l.Hb = function (b, c, d) {
        function e(b, c) {
            k[b] = c;
            rj(this, "ready")
        }
        var f = this.t,
            g = this.p,
            h = this.q,
            k = this.j;
        c = ec(g.a, c, 0);
        b = zj(g, b, c);
        var g = [c, 0, 0],
            n, p;
        for (n = b.a; n <= b.d; ++n) for (p = b.b; p <= b.c; ++p) {
            var q = c + "/" + n + "/" + p;
            if (!(q in k)) {
                g[0] = c;
                g[1] = n;
                g[2] = p;
                f(g, d, g);
                var r = h(g, 1, d);
                m(r) && (k[q] = [], Ix(this, r, ta(e, q), ca, this))
            }
        }
    };

    function vy(b) {
        b = m(b) ? b : {};
        var c = m(b.params) ? b.params : {};
        dx.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            opaque: !x(c, "TRANSPARENT", !0),
            projection: b.projection,
            tileGrid: b.tileGrid,
            tileLoadFunction: b.tileLoadFunction,
            tileUrlFunction: sa(this.Kj, this)
        });
        var d = b.urls;
        !m(d) && m(b.url) && (d = $w(b.url));
        this.f = null != d ? d : [];
        this.o = m(b.gutter) ? b.gutter : 0;
        this.a = c;
        this.d = !0;
        this.i = b.serverType;
        this.p = m(b.hidpi) ? b.hidpi : !0;
        this.j = "";
        wy(this);
        this.q = Vd();
        xy(this)
    }
    u(vy, dx);
    l = vy.prototype;
    l.Hj = function (b, c, d, e) {
        d = Ee(d);
        var f = this.tileGrid;
        null === f && (f = Gj(this, d));
        c = f.Vb(b, c);
        if (!(f.a.length <= c[0])) {
            var g = f.ka(c[0]),
                h = yj(f, c, this.q),
                f = f.sa(c[0]),
                k = this.o;
            0 !== k && (f += 2 * k, h = Yd(h, g * k, h));
            k = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetFeatureInfo",
                FORMAT: "image/png",
                TRANSPARENT: !0,
                QUERY_LAYERS: x(this.a, "LAYERS")
            };
            Eb(k, this.a, e);
            e = Math.floor((h[3] - b[1]) / g);
            k[this.d ? "I" : "X"] = Math.floor((b[0] - h[0]) / g);
            k[this.d ? "J" : "Y"] = e;
            return yy(this, c, f, h, 1, d, k)
        }
    };
    l.bd = function () {
        return this.o
    };
    l.hb = function (b, c, d) {
        return this.j + vy.S.hb.call(this, b, c, d)
    };
    l.Ij = function () {
        return this.a
    };

    function yy(b, c, d, e, f, g, h) {
        var k = b.f;
        if (0 != k.length) {
            h.WIDTH = d;
            h.HEIGHT = d;
            h[b.d ? "CRS" : "SRS"] = g.a;
            "STYLES" in b.a || (h.STYLES = new String(""));
            if (1 != f) switch (b.i) {
                case "geoserver":
                    h.FORMAT_OPTIONS = "dpi:" + (90 * f + .5 | 0);
                    break;
                case "mapserver":
                    h.MAP_RESOLUTION = 90 * f;
                    break;
                case "carmentaserver":
                case "qgis":
                    h.DPI = 90 * f
            }
            d = g.b;
            b.d && "ne" == d.substr(0, 2) && (b = e[0], e[0] = e[1], e[1] = b, b = e[2], e[2] = e[3], e[3] = b);
            h.BBOX = e.join(",");
            return xh(zh([1 == k.length ? k[0] : k[Zb((c[1] << c[0]) + c[2], k.length)]], h))
        }
    }
    l.Gc = function (b, c, d) {
        b = vy.S.Gc.call(this, b, c, d);
        return 1 != c && this.p && m(this.i) ? b * c + .5 | 0 : b
    };
    l.Kh = function () {
        return this.f
    };

    function wy(b) {
        var c = 0,
            d = [],
            e, f;
        e = 0;
        for (f = b.f.length; e < f; ++e) d[c++] = b.f[e];
        for (var g in b.a) d[c++] = g + "-" + b.a[g];
        b.j = d.join("#")
    }
    l.Jj = function (b) {
        b = m(b) ? $w(b) : null;
        this.zf(b)
    };
    l.zf = function (b) {
        this.f = null != b ? b : [];
        wy(this);
        this.l()
    };
    l.Kj = function (b, c, d) {
        var e = this.tileGrid;
        null === e && (e = Gj(this, d));
        if (!(e.a.length <= b[0])) {
            1 == c || this.p && m(this.i) || (c = 1);
            var f = e.ka(b[0]),
                g = yj(e, b, this.q),
                e = e.sa(b[0]),
                h = this.o;
            0 !== h && (e += 2 * h, g = Yd(g, f * h, g));
            1 != c && (e = e * c + .5 | 0);
            f = {
                SERVICE: "WMS",
                VERSION: "1.3.0",
                REQUEST: "GetMap",
                FORMAT: "image/png",
                TRANSPARENT: !0
            };
            Eb(f, this.a);
            return yy(this, b, e, g, c, d, f)
        }
    };
    l.Lj = function (b) {
        Eb(this.a, b);
        wy(this);
        xy(this);
        this.l()
    };

    function xy(b) {
        b.d = 0 <= Na(x(b.a, "VERSION", "1.3.0"), "1.3")
    };

    function zy(b) {
        b = m(b) ? b : {};
        Jx.call(this, {
            attributions: b.attributions,
            extent: b.extent,
            format: new Et({
                defaultDataProjection: b.defaultProjection
            }),
            logo: b.logo,
            object: b.object,
            projection: b.projection,
            text: b.text,
            url: b.url
        })
    }
    u(zy, Jx);

    function Ay(b) {
        this.b = b.matrixIds;
        wj.call(this, {
            origin: b.origin,
            origins: b.origins,
            resolutions: b.resolutions,
            tileSize: b.tileSize,
            tileSizes: b.tileSizes
        })
    }
    u(Ay, wj);
    Ay.prototype.g = function () {
        return this.b
    };

    function By(b) {
        function c(b) {
            b = "KVP" == f ? xh(zh([b], h)) : b.replace(/\{(\w+?)\}/g, function (b, c) {
                return c in h ? h[c] : b
            });
            return function (c) {
                if (null !== c) {
                    var d = {
                        TileMatrix: g.b[c[0]],
                        TileCol: c[1],
                        TileRow: c[2]
                    };
                    Eb(d, k);
                    c = b;
                    return c = "KVP" == f ? xh(zh([c], d)) : c.replace(/\{(\w+?)\}/g, function (b, c) {
                        return d[c]
                    })
                }
            }
        }
        var d = m(b.version) ? b.version : "1.0.0",
            e = m(b.format) ? b.format : "image/jpeg";
        this.a = m(b.dimensions) ? b.dimensions : {};
        this.d = "";
        Cy(this);
        var f = m(b.requestEncoding) ? b.requestEncoding : "KVP",
            g = b.tileGrid,
            h = {
                Layer: b.layer,
                Style: b.style,
                TileMatrixSet: b.matrixSet
            };
        "KVP" == f && Eb(h, {
            Service: "WMTS",
            Request: "GetTile",
            Version: d,
            Format: e
        });
        var k = this.a,
            d = Yw,
            e = b.urls;
        !m(e) && m(b.url) && (e = $w(b.url));
        m(e) && (d = Xw(Va(e, c)));
        var n = Vd(),
            p = [0, 0, 0],
            d = Zw(function (b, c, d) {
                if (g.a.length <= b[0]) return null;
                var e = b[1],
                    f = -b[2] - 1,
                    h = yj(g, b, n),
                    k = c.D();
                null !== k && c.f && (c = Math.ceil(re(k) / re(h)), e = Zb(e, c), p[0] = b[0], p[1] = e, p[2] = b[2], h = yj(g, p, n));
                return !qe(h, k) || qe(h, k) && (h[0] == k[2] || h[2] == k[0] || h[1] == k[3] || h[3] == k[1]) ? null : kf(b[0], e, f, d)
            }, d);
        dx.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            projection: b.projection,
            tileClass: b.tileClass,
            tileGrid: g,
            tileLoadFunction: b.tileLoadFunction,
            tilePixelRatio: b.tilePixelRatio,
            tileUrlFunction: d
        })
    }
    u(By, dx);
    By.prototype.f = function () {
        return this.a
    };
    By.prototype.hb = function (b, c, d) {
        return this.d + By.S.hb.call(this, b, c, d)
    };

    function Cy(b) {
        var c = 0,
            d = [],
            e;
        for (e in b.a) d[c++] = e + "-" + b.a[e];
        b.d = d.join("/")
    }
    By.prototype.o = function (b) {
        Eb(this.a, b);
        Cy(this);
        this.l()
    };

    function Dy(b) {
        var c = m(b) ? b : c;
        wj.call(this, {
            origin: [0, 0],
            resolutions: c.resolutions
        })
    }
    u(Dy, wj);
    Dy.prototype.Bb = function (b) {
        b = m(b) ? b : {};
        var c = this.minZoom,
            d = this.maxZoom,
            e = null;
        if (m(b.extent)) {
            var e = Array(d + 1),
                f;
            for (f = 0; f <= d; ++f) e[f] = f < c ? null : zj(this, b.extent, f)
        }
        return function (b, f, k) {
            f = b[0];
            if (f < c || d < f) return null;
            var n = Math.pow(2, f),
                p = b[1];
            if (0 > p || n <= p) return null;
            b = b[2];
            return b < -n || -1 < b || null !== e && !qf(e[f], p, -b - 1) ? null : kf(f, p, -b - 1, k)
        }
    };

    function Ey(b) {
        b = m(b) ? b : {};
        var c = b.size,
            d = c[0],
            e = c[1],
            f = [],
            g = 256;
        switch (m(b.tierSizeCalculation) ? b.tierSizeCalculation : "default") {
            case "default":
                for (; d > g || e > g;) f.push([Math.ceil(d / g), Math.ceil(e / g)]), g += g;
                break;
            case "truncated":
                for (; d > g || e > g;) f.push([Math.ceil(d / g), Math.ceil(e / g)]), d >>= 1, e >>= 1
        }
        f.push([1, 1]);
        f.reverse();
        for (var g = [1], h = [0], e = 1, d = f.length; e < d; e++) g.push(1 << e), h.push(f[e - 1][0] * f[e - 1][1] + h[e - 1]);
        g.reverse();
        var g = new Dy({
            resolutions: g
        }),
            k = b.url,
            c = Zw(g.Bb({
                extent: [0, 0, c[0], c[1]]
            }), function (b) {
                if (null !== b) {
                    var c = b[0],
                        d = b[1];
                    b = b[2];
                    return k + "TileGroup" + ((d + b * f[c][0] + h[c]) / 256 | 0) + "/" + c + "-" + d + "-" + b + ".jpg"
                }
            });
        dx.call(this, {
            attributions: b.attributions,
            crossOrigin: b.crossOrigin,
            logo: b.logo,
            tileClass: Fy,
            tileGrid: g,
            tileUrlFunction: c
        })
    }
    u(Ey, dx);

    function Fy(b, c, d, e, f) {
        Yu.call(this, b, c, d, e, f);
        this.e = {}
    }
    u(Fy, Yu);
    Fy.prototype.Na = function (b) {
        var c = m(b) ? ma(b).toString() : "";
        if (c in this.e) return this.e[c];
        b = Fy.S.Na.call(this, b);
        if (2 == this.state) {
            if (256 == b.width && 256 == b.height) return this.e[c] = b;
            var d = Tf(256, 256);
            d.drawImage(b, 0, 0);
            return this.e[c] = d.canvas
        }
        return b
    };

    function Gy(b) {
        b = m(b) ? b : {};
        this.c = m(b.initialSize) ? b.initialSize : 256;
        this.b = m(b.maxSize) ? b.maxSize : m(va) ? va : 2048;
        this.a = m(b.space) ? b.space : 1;
        this.e = [new Hy(this.c, this.a)];
        this.d = this.c;
        this.f = [new Hy(this.d, this.a)]
    }
    Gy.prototype.add = function (b, c, d, e, f, g) {
        if (c + this.a > this.b || d + this.a > this.b) return null;
        e = Iy(this, !1, b, c, d, e, g);
        if (null === e) return null;
        var h = null;
        m(f) && (h = Iy(this, !0, b, c, d, f, g));
        return {
            offsetX: e.offsetX,
            offsetY: e.offsetY,
            image: e.image,
            Wl: null === h ? void 0 : h.offsetX,
            Xl: null === h ? void 0 : h.offsetY,
            kf: null === h ? void 0 : h.image
        }
    };

    function Iy(b, c, d, e, f, g, h) {
        var k = c ? b.f : b.e,
            n, p, q;
        p = 0;
        for (q = k.length; p < q; ++p) {
            n = k[p];
            n = n.add(d, e, f, g, h);
            if (null !== n) return n;
            null === n && p === q - 1 && (c ? (n = Math.min(2 * b.d, b.b), b.d = n) : (n = Math.min(2 * b.c, b.b), b.c = n), n = new Hy(n, b.a), k.push(n), ++q)
        }
    }
    function Hy(b, c) {
        this.a = c;
        this.c = [{
            x: 0,
            y: 0,
            width: b,
            height: b
        }];
        this.d = {};
        this.b = If("CANVAS");
        this.b.width = b;
        this.b.height = b;
        this.e = this.b.getContext("2d")
    }
    Hy.prototype.get = function (b) {
        return x(this.d, b, null)
    };
    Hy.prototype.add = function (b, c, d, e, f) {
        var g, h, k;
        h = 0;
        for (k = this.c.length; h < k; ++h) if (g = this.c[h], g.width >= c + this.a && g.height >= d + this.a) return k = {
            offsetX: g.x + this.a,
            offsetY: g.y + this.a,
            image: this.b
        }, this.d[b] = k, e.call(f, this.e, g.x + this.a, g.y + this.a), b = h, c = c + this.a, d = d + this.a, f = e = void 0, g.width - c > g.height - d ? (e = {
            x: g.x + c,
            y: g.y,
            width: g.width - c,
            height: g.height
        }, f = {
            x: g.x,
            y: g.y + d,
            width: c,
            height: g.height - d
        }, Jy(this, b, e, f)) : (e = {
            x: g.x + c,
            y: g.y,
            width: g.width - c,
            height: d
        }, f = {
            x: g.x,
            y: g.y + d,
            width: g.width,
            height: g.height - d
        }, Jy(this, b, e, f)), k;
        return null
    };

    function Jy(b, c, d, e) {
        c = [c, 1];
        0 < d.width && 0 < d.height && c.push(d);
        0 < e.width && 0 < e.height && c.push(e);
        b.c.splice.apply(b.c, c)
    };

    function Ky(b) {
        this.j = this.b = this.d = null;
        this.o = m(b.fill) ? b.fill : null;
        this.J = [0, 0];
        this.a = b.points;
        this.c = m(b.radius) ? b.radius : b.radius1;
        this.f = m(b.radius2) ? b.radius2 : this.c;
        this.g = m(b.angle) ? b.angle : 0;
        this.e = m(b.stroke) ? b.stroke : null;
        this.F = this.Q = this.t = null;
        var c = b.atlasManager,
            d = null,
            e, f = 0;
        null !== this.e && (e = wg(this.e.a), f = this.e.c, m(f) || (f = 1), d = this.e.b, cg || (d = null));
        var g = 2 * (this.c + f) + 1,
            d = {
                strokeStyle: e,
                Nc: f,
                size: g,
                lineDash: d
            };
        if (m(c)) {
            g = Math.round(g);
            e = null === this.o;
            var h;
            e && (h = sa(this.Df, this,
            d));
            f = this.ub();
            d = c.add(f, g, g, sa(this.Ef, this, d), h);
            this.b = d.image;
            this.J = [d.offsetX, d.offsetY];
            c = d.image.width;
            this.j = e ? d.kf : this.b
        } else this.b = If("CANVAS"), this.b.height = g, this.b.width = g, c = g = this.b.width, h = this.b.getContext("2d"), this.Ef(d, h, 0, 0), null === this.o ? (h = this.j = If("CANVAS"), h.height = d.size, h.width = d.size, h = h.getContext("2d"), this.Df(d, h, 0, 0)) : this.j = this.b;
        this.t = [g / 2, g / 2];
        this.Q = [g, g];
        this.F = [c, c];
        Rj.call(this, {
            opacity: 1,
            rotateWithView: !1,
            rotation: m(b.rotation) ? b.rotation : 0,
            scale: 1,
            snapToPixel: m(b.snapToPixel) ? b.snapToPixel : !0
        })
    }
    u(Ky, Rj);
    l = Ky.prototype;
    l.tb = function () {
        return this.t
    };
    l.Qj = function () {
        return this.g
    };
    l.Rj = function () {
        return this.o
    };
    l.te = function () {
        return this.j
    };
    l.yb = function () {
        return this.b
    };
    l.cd = function () {
        return this.F
    };
    l.ue = function () {
        return 2
    };
    l.zb = function () {
        return this.J
    };
    l.Sj = function () {
        return this.a
    };
    l.Tj = function () {
        return this.c
    };
    l.Eh = function () {
        return this.f
    };
    l.ab = function () {
        return this.Q
    };
    l.Uj = function () {
        return this.e
    };
    l.ne = ca;
    l.load = ca;
    l.Ge = ca;
    l.Ef = function (b, c, d, e) {
        var f;
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        this.f !== this.c && (this.a *= 2);
        for (d = 0; d <= this.a; d++) e = 2 * d * Math.PI / this.a - Math.PI / 2 + this.g, f = 0 === d % 2 ? this.c : this.f, c.lineTo(b.size / 2 + f * Math.cos(e), b.size / 2 + f * Math.sin(e));
        null !== this.o && (c.fillStyle = wg(this.o.a), c.fill());
        null !== this.e && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.Nc, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    l.Df = function (b, c, d, e) {
        c.setTransform(1, 0, 0, 1, 0, 0);
        c.translate(d, e);
        c.beginPath();
        this.f !== this.c && (this.a *= 2);
        var f;
        for (d = 0; d <= this.a; d++) f = 2 * d * Math.PI / this.a - Math.PI / 2 + this.g, e = 0 === d % 2 ? this.c : this.f, c.lineTo(b.size / 2 + e * Math.cos(f), b.size / 2 + e * Math.sin(f));
        c.fillStyle = Ol;
        c.fill();
        null !== this.e && (c.strokeStyle = b.strokeStyle, c.lineWidth = b.Nc, null === b.lineDash || c.setLineDash(b.lineDash), c.stroke());
        c.closePath()
    };
    l.ub = function () {
        var b = null === this.e ? "-" : this.e.ub(),
            c = null === this.o ? "-" : this.o.ub();
        if (null === this.d || b != this.d[1] || c != this.d[2] || this.c != this.d[3] || this.f != this.d[4] || this.g != this.d[5] || this.a != this.d[6]) this.d = ["r" + b + c + (m(this.c) ? this.c.toString() : "-") + (m(this.f) ? this.f.toString() : "-") + (m(this.g) ? this.g.toString() : "-") + (m(this.a) ? this.a.toString() : "-"), b, c, this.c, this.f, this.g, this.a];
        return this.d[0]
    };
    t("ol.animation.bounce", function (b) {
        var c = b.resolution,
            d = m(b.start) ? b.start : ua(),
            e = m(b.duration) ? b.duration : 1E3,
            f = m(b.easing) ? b.easing : ff;
        return function (b, h) {
            if (h.time < d) return h.animate = !0, h.viewHints[0] += 1, !0;
            if (h.time < d + e) {
                var k = f((h.time - d) / e),
                    n = c - h.viewState.resolution;
                h.animate = !0;
                h.viewState.resolution += k * n;
                h.viewHints[0] += 1;
                return !0
            }
            return !1
        }
    }, OPENLAYERS);
    t("ol.animation.pan", gf, OPENLAYERS);
    t("ol.animation.rotate", hf, OPENLAYERS);
    t("ol.animation.zoom", jf, OPENLAYERS);
    t("ol.Attribution", tf, OPENLAYERS);
    tf.prototype.getHTML = tf.prototype.b;
    pg.prototype.element = pg.prototype.element;
    t("ol.Collection", B, OPENLAYERS);
    B.prototype.clear = B.prototype.clear;
    B.prototype.extend = B.prototype.qf;
    B.prototype.forEach = B.prototype.forEach;
    B.prototype.getArray = B.prototype.Mi;
    B.prototype.item = B.prototype.item;
    B.prototype.getLength = B.prototype.Ib;
    B.prototype.insertAt = B.prototype.rd;
    B.prototype.pop = B.prototype.pop;
    B.prototype.push = B.prototype.push;
    B.prototype.remove = B.prototype.remove;
    B.prototype.removeAt = B.prototype.De;
    B.prototype.setAt = B.prototype.bl;
    t("ol.coordinate.add", yd, OPENLAYERS);
    t("ol.coordinate.createStringXY", function (b) {
        return function (c) {
            return Fd(c, b)
        }
    }, OPENLAYERS);
    t("ol.coordinate.format", Bd, OPENLAYERS);
    t("ol.coordinate.rotate", Dd, OPENLAYERS);
    t("ol.coordinate.toStringHDMS", function (b) {
        return m(b) ? Ad(b[1], "NS") + " " + Ad(b[0], "EW") : ""
    }, OPENLAYERS);
    t("ol.coordinate.toStringXY", Fd, OPENLAYERS);
    t("ol.DeviceOrientation", Q, OPENLAYERS);
    Q.prototype.getAlpha = Q.prototype.e;
    Q.prototype.getBeta = Q.prototype.f;
    Q.prototype.getGamma = Q.prototype.g;
    Q.prototype.getHeading = Q.prototype.i;
    Q.prototype.getTracking = Q.prototype.d;
    Q.prototype.setTracking = Q.prototype.b;
    t("ol.easing.easeIn", function (b) {
        return Math.pow(b, 3)
    }, OPENLAYERS);
    t("ol.easing.easeOut", cf, OPENLAYERS);
    t("ol.easing.inAndOut", df, OPENLAYERS);
    t("ol.easing.linear", ef, OPENLAYERS);
    t("ol.easing.upAndDown", ff, OPENLAYERS);
    t("ol.extent.boundingExtent", Td, OPENLAYERS);
    t("ol.extent.buffer", Yd, OPENLAYERS);
    t("ol.extent.containsCoordinate", function (b, c) {
        return ae(b, c[0], c[1])
    }, OPENLAYERS);
    t("ol.extent.containsExtent", $d, OPENLAYERS);
    t("ol.extent.containsXY", ae, OPENLAYERS);
    t("ol.extent.createEmpty", Vd, OPENLAYERS);
    t("ol.extent.equals", de, OPENLAYERS);
    t("ol.extent.extend", ee, OPENLAYERS);
    t("ol.extent.getBottomLeft", he, OPENLAYERS);
    t("ol.extent.getBottomRight", ie, OPENLAYERS);
    t("ol.extent.getCenter", ke, OPENLAYERS);
    t("ol.extent.getHeight", oe, OPENLAYERS);
    t("ol.extent.getIntersection", pe, OPENLAYERS);
    t("ol.extent.getSize", function (b) {
        return [b[2] - b[0], b[3] - b[1]]
    }, OPENLAYERS);
    t("ol.extent.getTopLeft", me, OPENLAYERS);
    t("ol.extent.getTopRight", je, OPENLAYERS);
    t("ol.extent.getWidth", re, OPENLAYERS);
    t("ol.extent.intersects", qe, OPENLAYERS);
    t("ol.extent.isEmpty", se, OPENLAYERS);
    t("ol.extent.applyTransform", we, OPENLAYERS);
    t("ol.Feature", R, OPENLAYERS);
    R.prototype.clone = R.prototype.clone;
    R.prototype.getGeometry = R.prototype.N;
    R.prototype.getId = R.prototype.nh;
    R.prototype.getGeometryName = R.prototype.mh;
    R.prototype.getStyle = R.prototype.Si;
    R.prototype.getStyleFunction = R.prototype.Ti;
    R.prototype.setGeometry = R.prototype.Ma;
    R.prototype.setStyle = R.prototype.i;
    R.prototype.setId = R.prototype.d;
    R.prototype.setGeometryName = R.prototype.e;
    t("ol.FeatureOverlay", sp, OPENLAYERS);
    sp.prototype.addFeature = sp.prototype.rf;
    sp.prototype.getFeatures = sp.prototype.Ni;
    sp.prototype.removeFeature = sp.prototype.wd;
    sp.prototype.setFeatures = sp.prototype.Mc;
    sp.prototype.setMap = sp.prototype.setMap;
    sp.prototype.setStyle = sp.prototype.tf;
    sp.prototype.getStyle = sp.prototype.Oi;
    sp.prototype.getStyleFunction = sp.prototype.Pi;
    t("ol.Geolocation", Z, OPENLAYERS);
    Z.prototype.getAccuracy = Z.prototype.$e;
    Z.prototype.getAccuracyGeometry = Z.prototype.p;
    Z.prototype.getAltitude = Z.prototype.q;
    Z.prototype.getAltitudeAccuracy = Z.prototype.r;
    Z.prototype.getHeading = Z.prototype.F;
    Z.prototype.getPosition = Z.prototype.J;
    Z.prototype.getProjection = Z.prototype.g;
    Z.prototype.getSpeed = Z.prototype.t;
    Z.prototype.getTracking = Z.prototype.i;
    Z.prototype.getTrackingOptions = Z.prototype.f;
    Z.prototype.setProjection = Z.prototype.n;
    Z.prototype.setTracking = Z.prototype.b;
    Z.prototype.setTrackingOptions = Z.prototype.j;
    t("ol.Graticule", Ru, OPENLAYERS);
    Ru.prototype.getMap = Ru.prototype.Wi;
    Ru.prototype.getMeridians = Ru.prototype.wh;
    Ru.prototype.getParallels = Ru.prototype.Bh;
    Ru.prototype.setMap = Ru.prototype.setMap;
    t("ol.has.DEVICE_PIXEL_RATIO", ag, OPENLAYERS);
    t("ol.has.CANVAS", dg, OPENLAYERS);
    t("ol.has.DEVICE_ORIENTATION", eg, OPENLAYERS);
    t("ol.has.GEOLOCATION", fg, OPENLAYERS);
    t("ol.has.TOUCH", gg, OPENLAYERS);
    t("ol.has.WEBGL", $f, OPENLAYERS);
    Wu.prototype.getImage = Wu.prototype.c;
    Yu.prototype.getImage = Yu.prototype.Na;
    t("ol.Kinetic", lk, OPENLAYERS);
    t("ol.loadingstrategy.all", function () {
        return [[-Infinity, -Infinity, Infinity, Infinity]]
    }, OPENLAYERS);
    t("ol.loadingstrategy.bbox", Iw, OPENLAYERS);
    t("ol.loadingstrategy.createTile", function (b) {
        return function (c, d) {
            var e = ec(b.a, d, 0),
                f = zj(b, c, e),
                g = [],
                e = [e, 0, 0];
            for (e[1] = f.a; e[1] <= f.d; ++e[1]) for (e[2] = f.b; e[2] <= f.c; ++e[2]) g.push(yj(b, e));
            return g
        }
    }, OPENLAYERS);
    t("ol.Map", O, OPENLAYERS);
    O.prototype.addControl = O.prototype.Qg;
    O.prototype.addInteraction = O.prototype.Rg;
    O.prototype.addLayer = O.prototype.Se;
    O.prototype.addOverlay = O.prototype.Te;
    O.prototype.beforeRender = O.prototype.Ua;
    O.prototype.forEachFeatureAtPixel = O.prototype.oe;
    O.prototype.getEventCoordinate = O.prototype.ih;
    O.prototype.getEventPixel = O.prototype.ad;
    O.prototype.getTarget = O.prototype.qc;
    O.prototype.getTargetElement = O.prototype.Fh;
    O.prototype.getCoordinateFromPixel = O.prototype.Ga;
    O.prototype.getControls = O.prototype.hh;
    O.prototype.getOverlays = O.prototype.Ah;
    O.prototype.getInteractions = O.prototype.oh;
    O.prototype.getLayerGroup = O.prototype.Eb;
    O.prototype.getLayers = O.prototype.ea;
    O.prototype.getPixelFromCoordinate = O.prototype.f;
    O.prototype.getSize = O.prototype.e;
    O.prototype.getView = O.prototype.a;
    O.prototype.getViewport = O.prototype.Lh;
    O.prototype.renderSync = O.prototype.Zk;
    O.prototype.render = O.prototype.render;
    O.prototype.removeControl = O.prototype.Uk;
    O.prototype.removeInteraction = O.prototype.Vk;
    O.prototype.removeLayer = O.prototype.Wk;
    O.prototype.removeOverlay = O.prototype.Xk;
    O.prototype.setLayerGroup = O.prototype.cg;
    O.prototype.setSize = O.prototype.J;
    O.prototype.setTarget = O.prototype.qa;
    O.prototype.setView = O.prototype.Ta;
    O.prototype.updateSize = O.prototype.j;
    cj.prototype.originalEvent = cj.prototype.originalEvent;
    cj.prototype.pixel = cj.prototype.pixel;
    cj.prototype.coordinate = cj.prototype.coordinate;
    cj.prototype.preventDefault = cj.prototype.preventDefault;
    cj.prototype.stopPropagation = cj.prototype.lb;
    Zg.prototype.map = Zg.prototype.map;
    Zg.prototype.frameState = Zg.prototype.frameState;
    od.prototype.key = od.prototype.key;
    od.prototype.oldValue = od.prototype.oldValue;
    pd.prototype.transform = pd.prototype.e;
    t("ol.Object", td, OPENLAYERS);
    td.prototype.bindTo = td.prototype.O;
    td.prototype.get = td.prototype.get;
    td.prototype.getKeys = td.prototype.I;
    td.prototype.getProperties = td.prototype.L;
    td.prototype.set = td.prototype.set;
    td.prototype.setProperties = td.prototype.G;
    td.prototype.unbind = td.prototype.P;
    td.prototype.unbindAll = td.prototype.R;
    t("ol.Observable", md, OPENLAYERS);
    t("ol.Observable.unByKey", nd, OPENLAYERS);
    md.prototype.changed = md.prototype.l;
    md.prototype.getRevision = md.prototype.A;
    md.prototype.on = md.prototype.u;
    md.prototype.once = md.prototype.B;
    md.prototype.un = md.prototype.v;
    md.prototype.unByKey = md.prototype.C;
    t("ol.WEBGL_MAX_TEXTURE_SIZE", va, OPENLAYERS);
    t("ol.inherits", u, OPENLAYERS);
    t("ol.Overlay", P, OPENLAYERS);
    P.prototype.getElement = P.prototype.d;
    P.prototype.getMap = P.prototype.e;
    P.prototype.getOffset = P.prototype.g;
    P.prototype.getPosition = P.prototype.n;
    P.prototype.getPositioning = P.prototype.i;
    P.prototype.setElement = P.prototype.Ee;
    P.prototype.setMap = P.prototype.setMap;
    P.prototype.setOffset = P.prototype.j;
    P.prototype.setPosition = P.prototype.f;
    P.prototype.setPositioning = P.prototype.p;
    uj.prototype.getTileCoord = uj.prototype.f;
    t("ol.View", A, OPENLAYERS);
    A.prototype.constrainCenter = A.prototype.i;
    A.prototype.constrainResolution = A.prototype.constrainResolution;
    A.prototype.constrainRotation = A.prototype.constrainRotation;
    A.prototype.getCenter = A.prototype.a;
    A.prototype.calculateExtent = A.prototype.g;
    A.prototype.getProjection = A.prototype.J;
    A.prototype.getResolution = A.prototype.b;
    A.prototype.getResolutionForExtent = A.prototype.n;
    A.prototype.getRotation = A.prototype.e;
    A.prototype.getZoom = A.prototype.Oh;
    A.prototype.fitExtent = A.prototype.ge;
    A.prototype.fitGeometry = A.prototype.dh;
    A.prototype.centerOn = A.prototype.Yg;
    A.prototype.rotate = A.prototype.rotate;
    A.prototype.setCenter = A.prototype.Oa;
    A.prototype.setResolution = A.prototype.d;
    A.prototype.setRotation = A.prototype.r;
    A.prototype.setZoom = A.prototype.Q;
    t("ol.xml.getAllTextContent", Pp, OPENLAYERS);
    t("ol.xml.parse", iq, OPENLAYERS);
    t("ol.webgl.Context", Jo, OPENLAYERS);
    Jo.prototype.getGL = Jo.prototype.kk;
    Jo.prototype.useProgram = Jo.prototype.Gd;
    t("ol.tilegrid.TileGrid", wj, OPENLAYERS);
    wj.prototype.getMaxZoom = wj.prototype.ed;
    wj.prototype.getMinZoom = wj.prototype.fd;
    wj.prototype.getOrigin = wj.prototype.Lb;
    wj.prototype.getResolution = wj.prototype.ka;
    wj.prototype.getResolutions = wj.prototype.Fd;
    wj.prototype.getTileCoordForCoordAndResolution = wj.prototype.Vb;
    wj.prototype.getTileCoordForCoordAndZ = wj.prototype.Fc;
    wj.prototype.getTileSize = wj.prototype.sa;
    t("ol.tilegrid.WMTS", Ay, OPENLAYERS);
    Ay.prototype.getMatrixIds = Ay.prototype.g;
    t("ol.tilegrid.XYZ", fx, OPENLAYERS);
    t("ol.tilegrid.Zoomify", Dy, OPENLAYERS);
    t("ol.style.AtlasManager", Gy, OPENLAYERS);
    t("ol.style.Circle", Sl, OPENLAYERS);
    Sl.prototype.getAnchor = Sl.prototype.tb;
    Sl.prototype.getFill = Sl.prototype.Mj;
    Sl.prototype.getImage = Sl.prototype.yb;
    Sl.prototype.getOrigin = Sl.prototype.zb;
    Sl.prototype.getRadius = Sl.prototype.Nj;
    Sl.prototype.getSize = Sl.prototype.ab;
    Sl.prototype.getStroke = Sl.prototype.Oj;
    t("ol.style.Fill", Rl, OPENLAYERS);
    Rl.prototype.getColor = Rl.prototype.b;
    Rl.prototype.setColor = Rl.prototype.d;
    t("ol.style.Icon", Sj, OPENLAYERS);
    Sj.prototype.getAnchor = Sj.prototype.tb;
    Sj.prototype.getImage = Sj.prototype.yb;
    Sj.prototype.getOrigin = Sj.prototype.zb;
    Sj.prototype.getSrc = Sj.prototype.Pj;
    Sj.prototype.getSize = Sj.prototype.ab;
    t("ol.style.Image", Rj, OPENLAYERS);
    Rj.prototype.getOpacity = Rj.prototype.Ad;
    Rj.prototype.getRotateWithView = Rj.prototype.hd;
    Rj.prototype.getRotation = Rj.prototype.Bd;
    Rj.prototype.getScale = Rj.prototype.Cd;
    Rj.prototype.getSnapToPixel = Rj.prototype.jd;
    Rj.prototype.getImage = Rj.prototype.yb;
    Rj.prototype.setRotation = Rj.prototype.Dd;
    Rj.prototype.setScale = Rj.prototype.Ed;
    t("ol.style.RegularShape", Ky, OPENLAYERS);
    Ky.prototype.getAnchor = Ky.prototype.tb;
    Ky.prototype.getAngle = Ky.prototype.Qj;
    Ky.prototype.getFill = Ky.prototype.Rj;
    Ky.prototype.getImage = Ky.prototype.yb;
    Ky.prototype.getOrigin = Ky.prototype.zb;
    Ky.prototype.getPoints = Ky.prototype.Sj;
    Ky.prototype.getRadius = Ky.prototype.Tj;
    Ky.prototype.getRadius2 = Ky.prototype.Eh;
    Ky.prototype.getSize = Ky.prototype.ab;
    Ky.prototype.getStroke = Ky.prototype.Uj;
    t("ol.style.Stroke", Nl, OPENLAYERS);
    Nl.prototype.getColor = Nl.prototype.Vj;
    Nl.prototype.getLineCap = Nl.prototype.rh;
    Nl.prototype.getLineDash = Nl.prototype.Wj;
    Nl.prototype.getLineJoin = Nl.prototype.sh;
    Nl.prototype.getMiterLimit = Nl.prototype.xh;
    Nl.prototype.getWidth = Nl.prototype.Xj;
    Nl.prototype.setColor = Nl.prototype.Yj;
    Nl.prototype.setLineCap = Nl.prototype.el;
    Nl.prototype.setLineDash = Nl.prototype.Zj;
    Nl.prototype.setLineJoin = Nl.prototype.fl;
    Nl.prototype.setMiterLimit = Nl.prototype.gl;
    Nl.prototype.setWidth = Nl.prototype.ol;
    t("ol.style.Style", Tl, OPENLAYERS);
    Tl.prototype.getGeometry = Tl.prototype.N;
    Tl.prototype.getGeometryFunction = Tl.prototype.lh;
    Tl.prototype.getFill = Tl.prototype.$j;
    Tl.prototype.getImage = Tl.prototype.ak;
    Tl.prototype.getStroke = Tl.prototype.bk;
    Tl.prototype.getText = Tl.prototype.ck;
    Tl.prototype.getZIndex = Tl.prototype.Nh;
    Tl.prototype.setGeometry = Tl.prototype.Ff;
    Tl.prototype.setZIndex = Tl.prototype.ql;
    t("ol.style.Text", Jr, OPENLAYERS);
    Jr.prototype.getFont = Jr.prototype.kh;
    Jr.prototype.getOffsetX = Jr.prototype.yh;
    Jr.prototype.getOffsetY = Jr.prototype.zh;
    Jr.prototype.getFill = Jr.prototype.dk;
    Jr.prototype.getRotation = Jr.prototype.ek;
    Jr.prototype.getScale = Jr.prototype.fk;
    Jr.prototype.getStroke = Jr.prototype.gk;
    Jr.prototype.getText = Jr.prototype.hk;
    Jr.prototype.getTextAlign = Jr.prototype.Hh;
    Jr.prototype.getTextBaseline = Jr.prototype.Ih;
    Jr.prototype.setFont = Jr.prototype.dl;
    Jr.prototype.setFill = Jr.prototype.cl;
    Jr.prototype.setRotation = Jr.prototype.ik;
    Jr.prototype.setScale = Jr.prototype.jk;
    Jr.prototype.setStroke = Jr.prototype.kl;
    Jr.prototype.setText = Jr.prototype.ll;
    Jr.prototype.setTextAlign = Jr.prototype.ml;
    Jr.prototype.setTextBaseline = Jr.prototype.nl;
    t("ol.Sphere", xe, OPENLAYERS);
    t("ol.source.BingMaps", gx, OPENLAYERS);
    t("ol.source.BingMaps.TOS_ATTRIBUTION", hx, OPENLAYERS);
    t("ol.source.Cluster", ix, OPENLAYERS);
    Hx.prototype.readFeatures = Hx.prototype.a;
    t("ol.source.GeoJSON", Kx, OPENLAYERS);
    t("ol.source.GPX", Lx, OPENLAYERS);
    t("ol.source.IGC", Mx, OPENLAYERS);
    t("ol.source.ImageCanvas", Qx, OPENLAYERS);
    t("ol.source.ImageMapGuide", Rx, OPENLAYERS);
    Rx.prototype.getParams = Rx.prototype.J;
    Rx.prototype.updateParams = Rx.prototype.V;
    t("ol.source.Image", Nx, OPENLAYERS);
    t("ol.source.ImageStatic", Sx, OPENLAYERS);
    t("ol.source.ImageVector", Tx, OPENLAYERS);
    Tx.prototype.getSource = Tx.prototype.wj;
    Tx.prototype.getStyle = Tx.prototype.xj;
    Tx.prototype.getStyleFunction = Tx.prototype.yj;
    Tx.prototype.setStyle = Tx.prototype.yf;
    t("ol.source.ImageWMS", Vx, OPENLAYERS);
    Vx.prototype.getGetFeatureInfoUrl = Vx.prototype.Bj;
    Vx.prototype.getParams = Vx.prototype.Cj;
    Vx.prototype.getUrl = Vx.prototype.Dj;
    Vx.prototype.setUrl = Vx.prototype.Ej;
    Vx.prototype.updateParams = Vx.prototype.Fj;
    t("ol.source.KML", Zx, OPENLAYERS);
    t("ol.source.MapQuest", cy, OPENLAYERS);
    t("ol.source.OSM", ay, OPENLAYERS);
    t("ol.source.OSM.ATTRIBUTION", by, OPENLAYERS);
    t("ol.source.OSMXML", fy, OPENLAYERS);
    t("ol.source.ServerVector", gy, OPENLAYERS);
    gy.prototype.readFeatures = gy.prototype.a;
    t("ol.source.Source", qj, OPENLAYERS);
    qj.prototype.getAttributions = qj.prototype.Y;
    qj.prototype.getLogo = qj.prototype.W;
    qj.prototype.getProjection = qj.prototype.Z;
    qj.prototype.getState = qj.prototype.$;
    t("ol.source.Stamen", jy, OPENLAYERS);
    t("ol.source.StaticVector", Jx, OPENLAYERS);
    t("ol.source.TileDebug", my, OPENLAYERS);
    t("ol.source.TileImage", dx, OPENLAYERS);
    dx.prototype.getTileLoadFunction = dx.prototype.ib;
    dx.prototype.getTileUrlFunction = dx.prototype.jb;
    dx.prototype.setTileLoadFunction = dx.prototype.ob;
    dx.prototype.setTileUrlFunction = dx.prototype.pa;
    t("ol.source.TileJSON", ny, OPENLAYERS);
    t("ol.source.Tile", Fj, OPENLAYERS);
    Fj.prototype.getTileGrid = Fj.prototype.za;
    t("ol.source.TileUTFGrid", oy, OPENLAYERS);
    oy.prototype.getTemplate = oy.prototype.Gh;
    oy.prototype.forDataAtCoordinateAndResolution = oy.prototype.eh;
    t("ol.source.TileVector", ty, OPENLAYERS);
    ty.prototype.getFeatures = ty.prototype.va;
    ty.prototype.getFeaturesAtCoordinateAndResolution = ty.prototype.jh;
    t("ol.source.TileWMS", vy, OPENLAYERS);
    vy.prototype.getGetFeatureInfoUrl = vy.prototype.Hj;
    vy.prototype.getParams = vy.prototype.Ij;
    vy.prototype.getUrls = vy.prototype.Kh;
    vy.prototype.setUrl = vy.prototype.Jj;
    vy.prototype.setUrls = vy.prototype.zf;
    vy.prototype.updateParams = vy.prototype.Lj;
    t("ol.source.TopoJSON", zy, OPENLAYERS);
    t("ol.source.Vector", aw, OPENLAYERS);
    aw.prototype.addFeature = aw.prototype.Pa;
    aw.prototype.addFeatures = aw.prototype.ya;
    aw.prototype.clear = aw.prototype.clear;
    aw.prototype.forEachFeature = aw.prototype.Xa;
    aw.prototype.forEachFeatureInExtent = aw.prototype.ra;
    aw.prototype.forEachFeatureIntersectingExtent = aw.prototype.Fa;
    aw.prototype.getFeatures = aw.prototype.va;
    aw.prototype.getFeaturesAtCoordinate = aw.prototype.Ia;
    aw.prototype.getClosestFeatureToCoordinate = aw.prototype.Ya;
    aw.prototype.getExtent = aw.prototype.D;
    aw.prototype.getFeatureById = aw.prototype.Ha;
    aw.prototype.removeFeature = aw.prototype.$a;
    dw.prototype.feature = dw.prototype.feature;
    t("ol.source.WMTS", By, OPENLAYERS);
    By.prototype.getDimensions = By.prototype.f;
    By.prototype.updateDimensions = By.prototype.o;
    t("ol.source.XYZ", $x, OPENLAYERS);
    $x.prototype.setTileUrlFunction = $x.prototype.pa;
    $x.prototype.setUrl = $x.prototype.a;
    t("ol.source.Zoomify", Ey, OPENLAYERS);
    Al.prototype.vectorContext = Al.prototype.vectorContext;
    Al.prototype.frameState = Al.prototype.frameState;
    Al.prototype.context = Al.prototype.context;
    Al.prototype.glContext = Al.prototype.glContext;
    no.prototype.drawAsync = no.prototype.ic;
    no.prototype.drawCircleGeometry = no.prototype.jc;
    no.prototype.drawFeature = no.prototype.ee;
    no.prototype.drawGeometryCollectionGeometry = no.prototype.Zc;
    no.prototype.drawPointGeometry = no.prototype.rb;
    no.prototype.drawLineStringGeometry = no.prototype.Cb;
    no.prototype.drawMultiLineStringGeometry = no.prototype.kc;
    no.prototype.drawMultiPointGeometry = no.prototype.qb;
    no.prototype.drawMultiPolygonGeometry = no.prototype.lc;
    no.prototype.drawPolygonGeometry = no.prototype.Sb;
    no.prototype.drawText = no.prototype.sb;
    no.prototype.setFillStrokeStyle = no.prototype.wa;
    no.prototype.setImageStyle = no.prototype.cb;
    no.prototype.setTextStyle = no.prototype.xa;
    um.prototype.drawAsync = um.prototype.ic;
    um.prototype.drawCircleGeometry = um.prototype.jc;
    um.prototype.drawFeature = um.prototype.ee;
    um.prototype.drawPointGeometry = um.prototype.rb;
    um.prototype.drawMultiPointGeometry = um.prototype.qb;
    um.prototype.drawLineStringGeometry = um.prototype.Cb;
    um.prototype.drawMultiLineStringGeometry = um.prototype.kc;
    um.prototype.drawPolygonGeometry = um.prototype.Sb;
    um.prototype.drawMultiPolygonGeometry = um.prototype.lc;
    um.prototype.setFillStrokeStyle = um.prototype.wa;
    um.prototype.setImageStyle = um.prototype.cb;
    um.prototype.setTextStyle = um.prototype.xa;
    t("ol.proj.common.add", tm, OPENLAYERS);
    t("ol.proj.METERS_PER_UNIT", Ae, OPENLAYERS);
    t("ol.proj.Projection", Be, OPENLAYERS);
    Be.prototype.getCode = Be.prototype.gh;
    Be.prototype.getExtent = Be.prototype.D;
    Be.prototype.getUnits = Be.prototype.rj;
    Be.prototype.getMetersPerUnit = Be.prototype.ie;
    Be.prototype.getWorldExtent = Be.prototype.Mh;
    Be.prototype.isGlobal = Be.prototype.wi;
    Be.prototype.setExtent = Be.prototype.sj;
    Be.prototype.setWorldExtent = Be.prototype.pl;
    t("ol.proj.addEquivalentProjections", He, OPENLAYERS);
    t("ol.proj.addProjection", Qe, OPENLAYERS);
    t("ol.proj.addCoordinateTransforms", Se, OPENLAYERS);
    t("ol.proj.get", Ee, OPENLAYERS);
    t("ol.proj.getTransform", Ve, OPENLAYERS);
    t("ol.proj.transform", function (b, c, d) {
        return Ve(c, d)(b, void 0, b.length)
    }, OPENLAYERS);
    t("ol.proj.transformExtent", Xe, OPENLAYERS);
    t("ol.layer.Heatmap", $, OPENLAYERS);
    $.prototype.getGradient = $.prototype.qa;
    $.prototype.setGradient = $.prototype.fc;
    t("ol.layer.Image", J, OPENLAYERS);
    J.prototype.getSource = J.prototype.a;
    t("ol.layer.Layer", E, OPENLAYERS);
    E.prototype.getSource = E.prototype.a;
    E.prototype.setSource = E.prototype.ga;
    t("ol.layer.Base", D, OPENLAYERS);
    D.prototype.getBrightness = D.prototype.d;
    D.prototype.getContrast = D.prototype.e;
    D.prototype.getHue = D.prototype.f;
    D.prototype.getExtent = D.prototype.D;
    D.prototype.getMaxResolution = D.prototype.g;
    D.prototype.getMinResolution = D.prototype.i;
    D.prototype.getOpacity = D.prototype.j;
    D.prototype.getSaturation = D.prototype.n;
    D.prototype.getVisible = D.prototype.b;
    D.prototype.setBrightness = D.prototype.t;
    D.prototype.setContrast = D.prototype.F;
    D.prototype.setHue = D.prototype.J;
    D.prototype.setExtent = D.prototype.p;
    D.prototype.setMaxResolution = D.prototype.Q;
    D.prototype.setMinResolution = D.prototype.V;
    D.prototype.setOpacity = D.prototype.q;
    D.prototype.setSaturation = D.prototype.ba;
    D.prototype.setVisible = D.prototype.ca;
    t("ol.layer.Group", I, OPENLAYERS);
    I.prototype.getLayers = I.prototype.Yb;
    I.prototype.setLayers = I.prototype.r;
    t("ol.layer.Tile", K, OPENLAYERS);
    K.prototype.getPreload = K.prototype.r;
    K.prototype.getSource = K.prototype.a;
    K.prototype.setPreload = K.prototype.oa;
    K.prototype.getUseInterimTilesOnError = K.prototype.ea;
    K.prototype.setUseInterimTilesOnError = K.prototype.qa;
    t("ol.layer.Vector", L, OPENLAYERS);
    L.prototype.getSource = L.prototype.a;
    L.prototype.getStyle = L.prototype.Uc;
    L.prototype.getStyleFunction = L.prototype.Vc;
    L.prototype.setStyle = L.prototype.oa;
    t("ol.interaction.DoubleClickZoom", sk, OPENLAYERS);
    t("ol.interaction.DoubleClickZoom.handleEvent", tk, OPENLAYERS);
    t("ol.interaction.DragAndDrop", Nv, OPENLAYERS);
    t("ol.interaction.DragAndDrop.handleEvent", dd, OPENLAYERS);
    Ov.prototype.features = Ov.prototype.features;
    Ov.prototype.file = Ov.prototype.file;
    Ov.prototype.projection = Ov.prototype.projection;
    El.prototype.coordinate = El.prototype.coordinate;
    t("ol.interaction.DragBox", Fl, OPENLAYERS);
    Fl.prototype.getGeometry = Fl.prototype.N;
    t("ol.interaction.DragPan", Ek, OPENLAYERS);
    t("ol.interaction.DragRotateAndZoom", Rv, OPENLAYERS);
    t("ol.interaction.DragRotate", Ik, OPENLAYERS);
    t("ol.interaction.DragZoom", Yl, OPENLAYERS);
    gw.prototype.feature = gw.prototype.feature;
    t("ol.interaction.Draw", hw, OPENLAYERS);
    t("ol.interaction.Draw.handleEvent", jw, OPENLAYERS);
    hw.prototype.finishDrawing = hw.prototype.V;
    t("ol.interaction.Interaction", ok, OPENLAYERS);
    ok.prototype.getActive = ok.prototype.a;
    ok.prototype.setActive = ok.prototype.b;
    t("ol.interaction.defaults", mm, OPENLAYERS);
    t("ol.interaction.KeyboardPan", Zl, OPENLAYERS);
    t("ol.interaction.KeyboardPan.handleEvent", $l, OPENLAYERS);
    t("ol.interaction.KeyboardZoom", am, OPENLAYERS);
    t("ol.interaction.KeyboardZoom.handleEvent", bm, OPENLAYERS);
    t("ol.interaction.Modify", uw, OPENLAYERS);
    t("ol.interaction.Modify.handleEvent", xw, OPENLAYERS);
    t("ol.interaction.MouseWheelZoom", cm, OPENLAYERS);
    t("ol.interaction.MouseWheelZoom.handleEvent", dm, OPENLAYERS);
    t("ol.interaction.PinchRotate", em, OPENLAYERS);
    t("ol.interaction.PinchZoom", im, OPENLAYERS);
    t("ol.interaction.Pointer", Bk, OPENLAYERS);
    t("ol.interaction.Pointer.handleEvent", Ck, OPENLAYERS);
    t("ol.interaction.Select", Dw, OPENLAYERS);
    Dw.prototype.getFeatures = Dw.prototype.j;
    t("ol.interaction.Select.handleEvent", Ew, OPENLAYERS);
    Dw.prototype.setMap = Dw.prototype.setMap;
    t("ol.geom.Circle", gn, OPENLAYERS);
    gn.prototype.clone = gn.prototype.clone;
    gn.prototype.getCenter = gn.prototype.qe;
    gn.prototype.getExtent = gn.prototype.D;
    gn.prototype.getRadius = gn.prototype.vf;
    gn.prototype.getType = gn.prototype.H;
    gn.prototype.setCenter = gn.prototype.kj;
    gn.prototype.setCenterAndRadius = gn.prototype.ag;
    gn.prototype.setRadius = gn.prototype.jl;
    gn.prototype.transform = gn.prototype.e;
    t("ol.geom.Geometry", Mk, OPENLAYERS);
    Mk.prototype.clone = Mk.prototype.clone;
    Mk.prototype.getClosestPoint = Mk.prototype.f;
    Mk.prototype.getExtent = Mk.prototype.D;
    Mk.prototype.getType = Mk.prototype.H;
    Mk.prototype.applyTransform = Mk.prototype.ma;
    Mk.prototype.intersectsExtent = Mk.prototype.ha;
    Mk.prototype.translate = Mk.prototype.Aa;
    Mk.prototype.transform = Mk.prototype.e;
    t("ol.geom.GeometryCollection", jn, OPENLAYERS);
    jn.prototype.clone = jn.prototype.clone;
    jn.prototype.getExtent = jn.prototype.D;
    jn.prototype.getGeometries = jn.prototype.af;
    jn.prototype.getType = jn.prototype.H;
    jn.prototype.intersectsExtent = jn.prototype.ha;
    jn.prototype.setGeometries = jn.prototype.bg;
    jn.prototype.applyTransform = jn.prototype.ma;
    jn.prototype.translate = jn.prototype.Aa;
    t("ol.geom.LinearRing", hl, OPENLAYERS);
    hl.prototype.clone = hl.prototype.clone;
    hl.prototype.getArea = hl.prototype.nj;
    hl.prototype.getCoordinates = hl.prototype.K;
    hl.prototype.getType = hl.prototype.H;
    hl.prototype.setCoordinates = hl.prototype.U;
    t("ol.geom.LineString", M, OPENLAYERS);
    M.prototype.appendCoordinate = M.prototype.Sg;
    M.prototype.clone = M.prototype.clone;
    M.prototype.getCoordinateAtM = M.prototype.lj;
    M.prototype.getCoordinates = M.prototype.K;
    M.prototype.getLength = M.prototype.mj;
    M.prototype.getType = M.prototype.H;
    M.prototype.intersectsExtent = M.prototype.ha;
    M.prototype.setCoordinates = M.prototype.U;
    t("ol.geom.MultiLineString", rn, OPENLAYERS);
    rn.prototype.appendLineString = rn.prototype.Tg;
    rn.prototype.clone = rn.prototype.clone;
    rn.prototype.getCoordinateAtM = rn.prototype.oj;
    rn.prototype.getCoordinates = rn.prototype.K;
    rn.prototype.getLineString = rn.prototype.th;
    rn.prototype.getLineStrings = rn.prototype.Ec;
    rn.prototype.getType = rn.prototype.H;
    rn.prototype.intersectsExtent = rn.prototype.ha;
    rn.prototype.setCoordinates = rn.prototype.U;
    t("ol.geom.MultiPoint", un, OPENLAYERS);
    un.prototype.appendPoint = un.prototype.Vg;
    un.prototype.clone = un.prototype.clone;
    un.prototype.getCoordinates = un.prototype.K;
    un.prototype.getPoint = un.prototype.Ch;
    un.prototype.getPoints = un.prototype.xd;
    un.prototype.getType = un.prototype.H;
    un.prototype.intersectsExtent = un.prototype.ha;
    un.prototype.setCoordinates = un.prototype.U;
    t("ol.geom.MultiPolygon", vn, OPENLAYERS);
    vn.prototype.appendPolygon = vn.prototype.Wg;
    vn.prototype.clone = vn.prototype.clone;
    vn.prototype.getArea = vn.prototype.pj;
    vn.prototype.getCoordinates = vn.prototype.K;
    vn.prototype.getInteriorPoints = vn.prototype.qh;
    vn.prototype.getPolygon = vn.prototype.Dh;
    vn.prototype.getPolygons = vn.prototype.gd;
    vn.prototype.getType = vn.prototype.H;
    vn.prototype.intersectsExtent = vn.prototype.ha;
    vn.prototype.setCoordinates = vn.prototype.U;
    t("ol.geom.Point", jl, OPENLAYERS);
    jl.prototype.clone = jl.prototype.clone;
    jl.prototype.getCoordinates = jl.prototype.K;
    jl.prototype.getType = jl.prototype.H;
    jl.prototype.intersectsExtent = jl.prototype.ha;
    jl.prototype.setCoordinates = jl.prototype.U;
    t("ol.geom.Polygon", H, OPENLAYERS);
    H.prototype.appendLinearRing = H.prototype.Ug;
    H.prototype.clone = H.prototype.clone;
    H.prototype.getArea = H.prototype.qj;
    H.prototype.getCoordinates = H.prototype.K;
    H.prototype.getInteriorPoint = H.prototype.ph;
    H.prototype.getLinearRingCount = H.prototype.vh;
    H.prototype.getLinearRing = H.prototype.uh;
    H.prototype.getLinearRings = H.prototype.dd;
    H.prototype.getType = H.prototype.H;
    H.prototype.intersectsExtent = H.prototype.ha;
    H.prototype.setCoordinates = H.prototype.U;
    t("ol.geom.Polygon.circular", zl, OPENLAYERS);
    t("ol.geom.Polygon.fromExtent", function (b) {
        var c = b[0],
            d = b[1],
            e = b[2];
        b = b[3];
        c = [c, d, c, b, e, b, e, d, c, d];
        d = new H(null);
        wl(d, "XY", c, [c.length]);
        return d
    }, OPENLAYERS);
    t("ol.geom.SimpleGeometry", Ok, OPENLAYERS);
    Ok.prototype.getExtent = Ok.prototype.D;
    Ok.prototype.getFirstCoordinate = Ok.prototype.vb;
    Ok.prototype.getLastCoordinate = Ok.prototype.wb;
    Ok.prototype.getLayout = Ok.prototype.xb;
    Ok.prototype.applyTransform = Ok.prototype.ma;
    Ok.prototype.translate = Ok.prototype.Aa;
    t("ol.format.Feature", up, OPENLAYERS);
    t("ol.format.GeoJSON", Ep, OPENLAYERS);
    Ep.prototype.readFeature = Ep.prototype.Nb;
    Ep.prototype.readFeatures = Ep.prototype.ja;
    Ep.prototype.readGeometry = Ep.prototype.Jc;
    Ep.prototype.readProjection = Ep.prototype.Ba;
    Ep.prototype.writeFeature = Ep.prototype.Pd;
    Ep.prototype.writeFeatureObject = Ep.prototype.a;
    Ep.prototype.writeFeatures = Ep.prototype.Qb;
    Ep.prototype.writeFeaturesObject = Ep.prototype.d;
    Ep.prototype.writeGeometry = Ep.prototype.Qc;
    Ep.prototype.writeGeometryObject = Ep.prototype.e;
    t("ol.format.GPX", Vq, OPENLAYERS);
    Vq.prototype.readFeature = Vq.prototype.Nb;
    Vq.prototype.readFeatures = Vq.prototype.ja;
    Vq.prototype.readProjection = Vq.prototype.Ba;
    Vq.prototype.writeFeatures = Vq.prototype.Qb;
    Vq.prototype.writeFeaturesNode = Vq.prototype.a;
    t("ol.format.IGC", Fr, OPENLAYERS);
    Fr.prototype.readFeature = Fr.prototype.Nb;
    Fr.prototype.readFeatures = Fr.prototype.ja;
    Fr.prototype.readProjection = Fr.prototype.Ba;
    t("ol.format.KML", Kr, OPENLAYERS);
    Kr.prototype.readFeature = Kr.prototype.Nb;
    Kr.prototype.readFeatures = Kr.prototype.ja;
    Kr.prototype.readName = Kr.prototype.Nk;
    Kr.prototype.readProjection = Kr.prototype.Ba;
    Kr.prototype.writeFeatures = Kr.prototype.Qb;
    Kr.prototype.writeFeaturesNode = Kr.prototype.a;
    t("ol.format.OSMXML", ot, OPENLAYERS);
    ot.prototype.readFeatures = ot.prototype.ja;
    ot.prototype.readProjection = ot.prototype.Ba;
    t("ol.format.Polyline", zt, OPENLAYERS);
    t("ol.format.Polyline.encodeDeltas", At, OPENLAYERS);
    t("ol.format.Polyline.decodeDeltas", Ct, OPENLAYERS);
    t("ol.format.Polyline.encodeFloats", Bt, OPENLAYERS);
    t("ol.format.Polyline.decodeFloats", Dt, OPENLAYERS);
    zt.prototype.readFeature = zt.prototype.Nb;
    zt.prototype.readFeatures = zt.prototype.ja;
    zt.prototype.readGeometry = zt.prototype.Jc;
    zt.prototype.readProjection = zt.prototype.Ba;
    zt.prototype.writeGeometry = zt.prototype.Qc;
    t("ol.format.TopoJSON", Et, OPENLAYERS);
    Et.prototype.readFeatures = Et.prototype.ja;
    Et.prototype.readProjection = Et.prototype.Ba;
    t("ol.format.WFS", Kt, OPENLAYERS);
    Kt.prototype.readFeatures = Kt.prototype.ja;
    Kt.prototype.readTransactionResponse = Kt.prototype.g;
    Kt.prototype.readFeatureCollectionMetadata = Kt.prototype.f;
    Kt.prototype.writeGetFeature = Kt.prototype.n;
    Kt.prototype.writeTransaction = Kt.prototype.j;
    Kt.prototype.readProjection = Kt.prototype.Ba;
    t("ol.format.WKT", Xt, OPENLAYERS);
    Xt.prototype.readFeature = Xt.prototype.Nb;
    Xt.prototype.readFeatures = Xt.prototype.ja;
    Xt.prototype.readGeometry = Xt.prototype.Jc;
    Xt.prototype.writeFeature = Xt.prototype.Pd;
    Xt.prototype.writeFeatures = Xt.prototype.Qb;
    Xt.prototype.writeGeometry = Xt.prototype.Qc;
    t("ol.format.WMSCapabilities", ou, OPENLAYERS);
    ou.prototype.read = ou.prototype.a;
    t("ol.format.WMSGetFeatureInfo", Lu, OPENLAYERS);
    Lu.prototype.readFeatures = Lu.prototype.ja;
    t("ol.format.GML2", Uq, OPENLAYERS);
    t("ol.format.GML3", X, OPENLAYERS);
    X.prototype.writeGeometryNode = X.prototype.o;
    X.prototype.writeFeatures = X.prototype.Qb;
    X.prototype.writeFeaturesNode = X.prototype.a;
    t("ol.format.GML", X, OPENLAYERS);
    X.prototype.writeFeatures = X.prototype.Qb;
    X.prototype.writeFeaturesNode = X.prototype.a;
    t("ol.format.GMLBase", zq, OPENLAYERS);
    zq.prototype.readFeatures = zq.prototype.ja;
    t("ol.events.condition.altKeyOnly", function (b) {
        b = b.a;
        return b.c && !b.g && !b.d
    }, OPENLAYERS);
    t("ol.events.condition.altShiftKeysOnly", uk, OPENLAYERS);
    t("ol.events.condition.always", dd, OPENLAYERS);
    t("ol.events.condition.click", function (b) {
        return b.type == gj
    }, OPENLAYERS);
    t("ol.events.condition.mouseMove", vk, OPENLAYERS);
    t("ol.events.condition.never", cd, OPENLAYERS);
    t("ol.events.condition.singleClick", wk, OPENLAYERS);
    t("ol.events.condition.noModifierKeys", xk, OPENLAYERS);
    t("ol.events.condition.platformModifierKeyOnly", function (b) {
        b = b.a;
        return !b.c && b.g && !b.d
    }, OPENLAYERS);
    t("ol.events.condition.shiftKeyOnly", yk, OPENLAYERS);
    t("ol.events.condition.targetNotEditable", zk, OPENLAYERS);
    t("ol.events.condition.mouseOnly", Ak, OPENLAYERS);
    t("ol.dom.Input", rp, OPENLAYERS);
    rp.prototype.getChecked = rp.prototype.a;
    rp.prototype.getValue = rp.prototype.b;
    rp.prototype.setValue = rp.prototype.e;
    rp.prototype.setChecked = rp.prototype.d;
    t("ol.control.Attribution", ah, OPENLAYERS);
    t("ol.control.Attribution.render", bh, OPENLAYERS);
    ah.prototype.getCollapsible = ah.prototype.bj;
    ah.prototype.setCollapsible = ah.prototype.ej;
    ah.prototype.setCollapsed = ah.prototype.dj;
    ah.prototype.getCollapsed = ah.prototype.aj;
    t("ol.control.Control", $g, OPENLAYERS);
    $g.prototype.getMap = $g.prototype.d;
    $g.prototype.setMap = $g.prototype.setMap;
    t("ol.control.defaults", gh, OPENLAYERS);
    t("ol.control.FullScreen", lh, OPENLAYERS);
    t("ol.control.MousePosition", mh, OPENLAYERS);
    t("ol.control.MousePosition.render", nh, OPENLAYERS);
    mh.prototype.getCoordinateFormat = mh.prototype.g;
    mh.prototype.getProjection = mh.prototype.p;
    mh.prototype.setMap = mh.prototype.setMap;
    mh.prototype.setCoordinateFormat = mh.prototype.r;
    mh.prototype.setProjection = mh.prototype.q;
    t("ol.control.OverviewMap", Ro, OPENLAYERS);
    Ro.prototype.setMap = Ro.prototype.setMap;
    t("ol.control.OverviewMap.render", So, OPENLAYERS);
    Ro.prototype.getCollapsible = Ro.prototype.gj;
    Ro.prototype.setCollapsible = Ro.prototype.jj;
    Ro.prototype.setCollapsed = Ro.prototype.ij;
    Ro.prototype.getCollapsed = Ro.prototype.fj;
    t("ol.control.Rotate", dh, OPENLAYERS);
    t("ol.control.Rotate.render", eh, OPENLAYERS);
    t("ol.control.ScaleLine", Xo, OPENLAYERS);
    Xo.prototype.getUnits = Xo.prototype.j;
    t("ol.control.ScaleLine.render", Yo, OPENLAYERS);
    Xo.prototype.setUnits = Xo.prototype.p;
    t("ol.control.Zoom", fh, OPENLAYERS);
    t("ol.control.ZoomSlider", lp, OPENLAYERS);
    t("ol.control.ZoomSlider.render", np, OPENLAYERS);
    t("ol.control.ZoomToExtent", qp, OPENLAYERS);
    t("ol.color.asArray", ug, OPENLAYERS);
    t("ol.color.asString", wg, OPENLAYERS);
    td.prototype.changed = td.prototype.l;
    td.prototype.getRevision = td.prototype.A;
    td.prototype.on = td.prototype.u;
    td.prototype.once = td.prototype.B;
    td.prototype.un = td.prototype.v;
    td.prototype.unByKey = td.prototype.C;
    B.prototype.bindTo = B.prototype.O;
    B.prototype.get = B.prototype.get;
    B.prototype.getKeys = B.prototype.I;
    B.prototype.getProperties = B.prototype.L;
    B.prototype.set = B.prototype.set;
    B.prototype.setProperties = B.prototype.G;
    B.prototype.unbind = B.prototype.P;
    B.prototype.unbindAll = B.prototype.R;
    B.prototype.changed = B.prototype.l;
    B.prototype.getRevision = B.prototype.A;
    B.prototype.on = B.prototype.u;
    B.prototype.once = B.prototype.B;
    B.prototype.un = B.prototype.v;
    B.prototype.unByKey = B.prototype.C;
    Q.prototype.bindTo = Q.prototype.O;
    Q.prototype.get = Q.prototype.get;
    Q.prototype.getKeys = Q.prototype.I;
    Q.prototype.getProperties = Q.prototype.L;
    Q.prototype.set = Q.prototype.set;
    Q.prototype.setProperties = Q.prototype.G;
    Q.prototype.unbind = Q.prototype.P;
    Q.prototype.unbindAll = Q.prototype.R;
    Q.prototype.changed = Q.prototype.l;
    Q.prototype.getRevision = Q.prototype.A;
    Q.prototype.on = Q.prototype.u;
    Q.prototype.once = Q.prototype.B;
    Q.prototype.un = Q.prototype.v;
    Q.prototype.unByKey = Q.prototype.C;
    R.prototype.bindTo = R.prototype.O;
    R.prototype.get = R.prototype.get;
    R.prototype.getKeys = R.prototype.I;
    R.prototype.getProperties = R.prototype.L;
    R.prototype.set = R.prototype.set;
    R.prototype.setProperties = R.prototype.G;
    R.prototype.unbind = R.prototype.P;
    R.prototype.unbindAll = R.prototype.R;
    R.prototype.changed = R.prototype.l;
    R.prototype.getRevision = R.prototype.A;
    R.prototype.on = R.prototype.u;
    R.prototype.once = R.prototype.B;
    R.prototype.un = R.prototype.v;
    R.prototype.unByKey = R.prototype.C;
    Z.prototype.bindTo = Z.prototype.O;
    Z.prototype.get = Z.prototype.get;
    Z.prototype.getKeys = Z.prototype.I;
    Z.prototype.getProperties = Z.prototype.L;
    Z.prototype.set = Z.prototype.set;
    Z.prototype.setProperties = Z.prototype.G;
    Z.prototype.unbind = Z.prototype.P;
    Z.prototype.unbindAll = Z.prototype.R;
    Z.prototype.changed = Z.prototype.l;
    Z.prototype.getRevision = Z.prototype.A;
    Z.prototype.on = Z.prototype.u;
    Z.prototype.once = Z.prototype.B;
    Z.prototype.un = Z.prototype.v;
    Z.prototype.unByKey = Z.prototype.C;
    Yu.prototype.getTileCoord = Yu.prototype.f;
    O.prototype.bindTo = O.prototype.O;
    O.prototype.get = O.prototype.get;
    O.prototype.getKeys = O.prototype.I;
    O.prototype.getProperties = O.prototype.L;
    O.prototype.set = O.prototype.set;
    O.prototype.setProperties = O.prototype.G;
    O.prototype.unbind = O.prototype.P;
    O.prototype.unbindAll = O.prototype.R;
    O.prototype.changed = O.prototype.l;
    O.prototype.getRevision = O.prototype.A;
    O.prototype.on = O.prototype.u;
    O.prototype.once = O.prototype.B;
    O.prototype.un = O.prototype.v;
    O.prototype.unByKey = O.prototype.C;
    cj.prototype.map = cj.prototype.map;
    cj.prototype.frameState = cj.prototype.frameState;
    dj.prototype.originalEvent = dj.prototype.originalEvent;
    dj.prototype.pixel = dj.prototype.pixel;
    dj.prototype.coordinate = dj.prototype.coordinate;
    dj.prototype.preventDefault = dj.prototype.preventDefault;
    dj.prototype.stopPropagation = dj.prototype.lb;
    dj.prototype.map = dj.prototype.map;
    dj.prototype.frameState = dj.prototype.frameState;
    P.prototype.bindTo = P.prototype.O;
    P.prototype.get = P.prototype.get;
    P.prototype.getKeys = P.prototype.I;
    P.prototype.getProperties = P.prototype.L;
    P.prototype.set = P.prototype.set;
    P.prototype.setProperties = P.prototype.G;
    P.prototype.unbind = P.prototype.P;
    P.prototype.unbindAll = P.prototype.R;
    P.prototype.changed = P.prototype.l;
    P.prototype.getRevision = P.prototype.A;
    P.prototype.on = P.prototype.u;
    P.prototype.once = P.prototype.B;
    P.prototype.un = P.prototype.v;
    P.prototype.unByKey = P.prototype.C;
    A.prototype.bindTo = A.prototype.O;
    A.prototype.get = A.prototype.get;
    A.prototype.getKeys = A.prototype.I;
    A.prototype.getProperties = A.prototype.L;
    A.prototype.set = A.prototype.set;
    A.prototype.setProperties = A.prototype.G;
    A.prototype.unbind = A.prototype.P;
    A.prototype.unbindAll = A.prototype.R;
    A.prototype.changed = A.prototype.l;
    A.prototype.getRevision = A.prototype.A;
    A.prototype.on = A.prototype.u;
    A.prototype.once = A.prototype.B;
    A.prototype.un = A.prototype.v;
    A.prototype.unByKey = A.prototype.C;
    Ay.prototype.getMaxZoom = Ay.prototype.ed;
    Ay.prototype.getMinZoom = Ay.prototype.fd;
    Ay.prototype.getOrigin = Ay.prototype.Lb;
    Ay.prototype.getResolution = Ay.prototype.ka;
    Ay.prototype.getResolutions = Ay.prototype.Fd;
    Ay.prototype.getTileCoordForCoordAndResolution = Ay.prototype.Vb;
    Ay.prototype.getTileCoordForCoordAndZ = Ay.prototype.Fc;
    Ay.prototype.getTileSize = Ay.prototype.sa;
    fx.prototype.getMaxZoom = fx.prototype.ed;
    fx.prototype.getMinZoom = fx.prototype.fd;
    fx.prototype.getOrigin = fx.prototype.Lb;
    fx.prototype.getResolution = fx.prototype.ka;
    fx.prototype.getResolutions = fx.prototype.Fd;
    fx.prototype.getTileCoordForCoordAndResolution = fx.prototype.Vb;
    fx.prototype.getTileCoordForCoordAndZ = fx.prototype.Fc;
    fx.prototype.getTileSize = fx.prototype.sa;
    Dy.prototype.getMaxZoom = Dy.prototype.ed;
    Dy.prototype.getMinZoom = Dy.prototype.fd;
    Dy.prototype.getOrigin = Dy.prototype.Lb;
    Dy.prototype.getResolution = Dy.prototype.ka;
    Dy.prototype.getResolutions = Dy.prototype.Fd;
    Dy.prototype.getTileCoordForCoordAndResolution = Dy.prototype.Vb;
    Dy.prototype.getTileCoordForCoordAndZ = Dy.prototype.Fc;
    Dy.prototype.getTileSize = Dy.prototype.sa;
    Sl.prototype.getOpacity = Sl.prototype.Ad;
    Sl.prototype.getRotateWithView = Sl.prototype.hd;
    Sl.prototype.getRotation = Sl.prototype.Bd;
    Sl.prototype.getScale = Sl.prototype.Cd;
    Sl.prototype.getSnapToPixel = Sl.prototype.jd;
    Sl.prototype.setRotation = Sl.prototype.Dd;
    Sl.prototype.setScale = Sl.prototype.Ed;
    Sj.prototype.getOpacity = Sj.prototype.Ad;
    Sj.prototype.getRotateWithView = Sj.prototype.hd;
    Sj.prototype.getRotation = Sj.prototype.Bd;
    Sj.prototype.getScale = Sj.prototype.Cd;
    Sj.prototype.getSnapToPixel = Sj.prototype.jd;
    Sj.prototype.setRotation = Sj.prototype.Dd;
    Sj.prototype.setScale = Sj.prototype.Ed;
    Ky.prototype.getOpacity = Ky.prototype.Ad;
    Ky.prototype.getRotateWithView = Ky.prototype.hd;
    Ky.prototype.getRotation = Ky.prototype.Bd;
    Ky.prototype.getScale = Ky.prototype.Cd;
    Ky.prototype.getSnapToPixel = Ky.prototype.jd;
    Ky.prototype.setRotation = Ky.prototype.Dd;
    Ky.prototype.setScale = Ky.prototype.Ed;
    qj.prototype.changed = qj.prototype.l;
    qj.prototype.getRevision = qj.prototype.A;
    qj.prototype.on = qj.prototype.u;
    qj.prototype.once = qj.prototype.B;
    qj.prototype.un = qj.prototype.v;
    qj.prototype.unByKey = qj.prototype.C;
    Fj.prototype.getAttributions = Fj.prototype.Y;
    Fj.prototype.getLogo = Fj.prototype.W;
    Fj.prototype.getProjection = Fj.prototype.Z;
    Fj.prototype.getState = Fj.prototype.$;
    Fj.prototype.changed = Fj.prototype.l;
    Fj.prototype.getRevision = Fj.prototype.A;
    Fj.prototype.on = Fj.prototype.u;
    Fj.prototype.once = Fj.prototype.B;
    Fj.prototype.un = Fj.prototype.v;
    Fj.prototype.unByKey = Fj.prototype.C;
    dx.prototype.getTileGrid = dx.prototype.za;
    dx.prototype.getAttributions = dx.prototype.Y;
    dx.prototype.getLogo = dx.prototype.W;
    dx.prototype.getProjection = dx.prototype.Z;
    dx.prototype.getState = dx.prototype.$;
    dx.prototype.changed = dx.prototype.l;
    dx.prototype.getRevision = dx.prototype.A;
    dx.prototype.on = dx.prototype.u;
    dx.prototype.once = dx.prototype.B;
    dx.prototype.un = dx.prototype.v;
    dx.prototype.unByKey = dx.prototype.C;
    gx.prototype.getTileLoadFunction = gx.prototype.ib;
    gx.prototype.getTileUrlFunction = gx.prototype.jb;
    gx.prototype.setTileLoadFunction = gx.prototype.ob;
    gx.prototype.setTileUrlFunction = gx.prototype.pa;
    gx.prototype.getTileGrid = gx.prototype.za;
    gx.prototype.getAttributions = gx.prototype.Y;
    gx.prototype.getLogo = gx.prototype.W;
    gx.prototype.getProjection = gx.prototype.Z;
    gx.prototype.getState = gx.prototype.$;
    gx.prototype.changed = gx.prototype.l;
    gx.prototype.getRevision = gx.prototype.A;
    gx.prototype.on = gx.prototype.u;
    gx.prototype.once = gx.prototype.B;
    gx.prototype.un = gx.prototype.v;
    gx.prototype.unByKey = gx.prototype.C;
    aw.prototype.getAttributions = aw.prototype.Y;
    aw.prototype.getLogo = aw.prototype.W;
    aw.prototype.getProjection = aw.prototype.Z;
    aw.prototype.getState = aw.prototype.$;
    aw.prototype.changed = aw.prototype.l;
    aw.prototype.getRevision = aw.prototype.A;
    aw.prototype.on = aw.prototype.u;
    aw.prototype.once = aw.prototype.B;
    aw.prototype.un = aw.prototype.v;
    aw.prototype.unByKey = aw.prototype.C;
    ix.prototype.addFeature = ix.prototype.Pa;
    ix.prototype.addFeatures = ix.prototype.ya;
    ix.prototype.clear = ix.prototype.clear;
    ix.prototype.forEachFeature = ix.prototype.Xa;
    ix.prototype.forEachFeatureInExtent = ix.prototype.ra;
    ix.prototype.forEachFeatureIntersectingExtent = ix.prototype.Fa;
    ix.prototype.getFeatures = ix.prototype.va;
    ix.prototype.getFeaturesAtCoordinate = ix.prototype.Ia;
    ix.prototype.getClosestFeatureToCoordinate = ix.prototype.Ya;
    ix.prototype.getExtent = ix.prototype.D;
    ix.prototype.getFeatureById = ix.prototype.Ha;
    ix.prototype.removeFeature = ix.prototype.$a;
    ix.prototype.getAttributions = ix.prototype.Y;
    ix.prototype.getLogo = ix.prototype.W;
    ix.prototype.getProjection = ix.prototype.Z;
    ix.prototype.getState = ix.prototype.$;
    ix.prototype.changed = ix.prototype.l;
    ix.prototype.getRevision = ix.prototype.A;
    ix.prototype.on = ix.prototype.u;
    ix.prototype.once = ix.prototype.B;
    ix.prototype.un = ix.prototype.v;
    ix.prototype.unByKey = ix.prototype.C;
    Hx.prototype.addFeature = Hx.prototype.Pa;
    Hx.prototype.addFeatures = Hx.prototype.ya;
    Hx.prototype.clear = Hx.prototype.clear;
    Hx.prototype.forEachFeature = Hx.prototype.Xa;
    Hx.prototype.forEachFeatureInExtent = Hx.prototype.ra;
    Hx.prototype.forEachFeatureIntersectingExtent = Hx.prototype.Fa;
    Hx.prototype.getFeatures = Hx.prototype.va;
    Hx.prototype.getFeaturesAtCoordinate = Hx.prototype.Ia;
    Hx.prototype.getClosestFeatureToCoordinate = Hx.prototype.Ya;
    Hx.prototype.getExtent = Hx.prototype.D;
    Hx.prototype.getFeatureById = Hx.prototype.Ha;
    Hx.prototype.removeFeature = Hx.prototype.$a;
    Hx.prototype.getAttributions = Hx.prototype.Y;
    Hx.prototype.getLogo = Hx.prototype.W;
    Hx.prototype.getProjection = Hx.prototype.Z;
    Hx.prototype.getState = Hx.prototype.$;
    Hx.prototype.changed = Hx.prototype.l;
    Hx.prototype.getRevision = Hx.prototype.A;
    Hx.prototype.on = Hx.prototype.u;
    Hx.prototype.once = Hx.prototype.B;
    Hx.prototype.un = Hx.prototype.v;
    Hx.prototype.unByKey = Hx.prototype.C;
    Jx.prototype.readFeatures = Jx.prototype.a;
    Jx.prototype.addFeature = Jx.prototype.Pa;
    Jx.prototype.addFeatures = Jx.prototype.ya;
    Jx.prototype.clear = Jx.prototype.clear;
    Jx.prototype.forEachFeature = Jx.prototype.Xa;
    Jx.prototype.forEachFeatureInExtent = Jx.prototype.ra;
    Jx.prototype.forEachFeatureIntersectingExtent = Jx.prototype.Fa;
    Jx.prototype.getFeatures = Jx.prototype.va;
    Jx.prototype.getFeaturesAtCoordinate = Jx.prototype.Ia;
    Jx.prototype.getClosestFeatureToCoordinate = Jx.prototype.Ya;
    Jx.prototype.getExtent = Jx.prototype.D;
    Jx.prototype.getFeatureById = Jx.prototype.Ha;
    Jx.prototype.removeFeature = Jx.prototype.$a;
    Jx.prototype.getAttributions = Jx.prototype.Y;
    Jx.prototype.getLogo = Jx.prototype.W;
    Jx.prototype.getProjection = Jx.prototype.Z;
    Jx.prototype.getState = Jx.prototype.$;
    Jx.prototype.changed = Jx.prototype.l;
    Jx.prototype.getRevision = Jx.prototype.A;
    Jx.prototype.on = Jx.prototype.u;
    Jx.prototype.once = Jx.prototype.B;
    Jx.prototype.un = Jx.prototype.v;
    Jx.prototype.unByKey = Jx.prototype.C;
    Kx.prototype.readFeatures = Kx.prototype.a;
    Kx.prototype.addFeature = Kx.prototype.Pa;
    Kx.prototype.addFeatures = Kx.prototype.ya;
    Kx.prototype.clear = Kx.prototype.clear;
    Kx.prototype.forEachFeature = Kx.prototype.Xa;
    Kx.prototype.forEachFeatureInExtent = Kx.prototype.ra;
    Kx.prototype.forEachFeatureIntersectingExtent = Kx.prototype.Fa;
    Kx.prototype.getFeatures = Kx.prototype.va;
    Kx.prototype.getFeaturesAtCoordinate = Kx.prototype.Ia;
    Kx.prototype.getClosestFeatureToCoordinate = Kx.prototype.Ya;
    Kx.prototype.getExtent = Kx.prototype.D;
    Kx.prototype.getFeatureById = Kx.prototype.Ha;
    Kx.prototype.removeFeature = Kx.prototype.$a;
    Kx.prototype.getAttributions = Kx.prototype.Y;
    Kx.prototype.getLogo = Kx.prototype.W;
    Kx.prototype.getProjection = Kx.prototype.Z;
    Kx.prototype.getState = Kx.prototype.$;
    Kx.prototype.changed = Kx.prototype.l;
    Kx.prototype.getRevision = Kx.prototype.A;
    Kx.prototype.on = Kx.prototype.u;
    Kx.prototype.once = Kx.prototype.B;
    Kx.prototype.un = Kx.prototype.v;
    Kx.prototype.unByKey = Kx.prototype.C;
    Lx.prototype.readFeatures = Lx.prototype.a;
    Lx.prototype.addFeature = Lx.prototype.Pa;
    Lx.prototype.addFeatures = Lx.prototype.ya;
    Lx.prototype.clear = Lx.prototype.clear;
    Lx.prototype.forEachFeature = Lx.prototype.Xa;
    Lx.prototype.forEachFeatureInExtent = Lx.prototype.ra;
    Lx.prototype.forEachFeatureIntersectingExtent = Lx.prototype.Fa;
    Lx.prototype.getFeatures = Lx.prototype.va;
    Lx.prototype.getFeaturesAtCoordinate = Lx.prototype.Ia;
    Lx.prototype.getClosestFeatureToCoordinate = Lx.prototype.Ya;
    Lx.prototype.getExtent = Lx.prototype.D;
    Lx.prototype.getFeatureById = Lx.prototype.Ha;
    Lx.prototype.removeFeature = Lx.prototype.$a;
    Lx.prototype.getAttributions = Lx.prototype.Y;
    Lx.prototype.getLogo = Lx.prototype.W;
    Lx.prototype.getProjection = Lx.prototype.Z;
    Lx.prototype.getState = Lx.prototype.$;
    Lx.prototype.changed = Lx.prototype.l;
    Lx.prototype.getRevision = Lx.prototype.A;
    Lx.prototype.on = Lx.prototype.u;
    Lx.prototype.once = Lx.prototype.B;
    Lx.prototype.un = Lx.prototype.v;
    Lx.prototype.unByKey = Lx.prototype.C;
    Mx.prototype.readFeatures = Mx.prototype.a;
    Mx.prototype.addFeature = Mx.prototype.Pa;
    Mx.prototype.addFeatures = Mx.prototype.ya;
    Mx.prototype.clear = Mx.prototype.clear;
    Mx.prototype.forEachFeature = Mx.prototype.Xa;
    Mx.prototype.forEachFeatureInExtent = Mx.prototype.ra;
    Mx.prototype.forEachFeatureIntersectingExtent = Mx.prototype.Fa;
    Mx.prototype.getFeatures = Mx.prototype.va;
    Mx.prototype.getFeaturesAtCoordinate = Mx.prototype.Ia;
    Mx.prototype.getClosestFeatureToCoordinate = Mx.prototype.Ya;
    Mx.prototype.getExtent = Mx.prototype.D;
    Mx.prototype.getFeatureById = Mx.prototype.Ha;
    Mx.prototype.removeFeature = Mx.prototype.$a;
    Mx.prototype.getAttributions = Mx.prototype.Y;
    Mx.prototype.getLogo = Mx.prototype.W;
    Mx.prototype.getProjection = Mx.prototype.Z;
    Mx.prototype.getState = Mx.prototype.$;
    Mx.prototype.changed = Mx.prototype.l;
    Mx.prototype.getRevision = Mx.prototype.A;
    Mx.prototype.on = Mx.prototype.u;
    Mx.prototype.once = Mx.prototype.B;
    Mx.prototype.un = Mx.prototype.v;
    Mx.prototype.unByKey = Mx.prototype.C;
    Nx.prototype.getAttributions = Nx.prototype.Y;
    Nx.prototype.getLogo = Nx.prototype.W;
    Nx.prototype.getProjection = Nx.prototype.Z;
    Nx.prototype.getState = Nx.prototype.$;
    Nx.prototype.changed = Nx.prototype.l;
    Nx.prototype.getRevision = Nx.prototype.A;
    Nx.prototype.on = Nx.prototype.u;
    Nx.prototype.once = Nx.prototype.B;
    Nx.prototype.un = Nx.prototype.v;
    Nx.prototype.unByKey = Nx.prototype.C;
    Qx.prototype.getAttributions = Qx.prototype.Y;
    Qx.prototype.getLogo = Qx.prototype.W;
    Qx.prototype.getProjection = Qx.prototype.Z;
    Qx.prototype.getState = Qx.prototype.$;
    Qx.prototype.changed = Qx.prototype.l;
    Qx.prototype.getRevision = Qx.prototype.A;
    Qx.prototype.on = Qx.prototype.u;
    Qx.prototype.once = Qx.prototype.B;
    Qx.prototype.un = Qx.prototype.v;
    Qx.prototype.unByKey = Qx.prototype.C;
    Rx.prototype.getAttributions = Rx.prototype.Y;
    Rx.prototype.getLogo = Rx.prototype.W;
    Rx.prototype.getProjection = Rx.prototype.Z;
    Rx.prototype.getState = Rx.prototype.$;
    Rx.prototype.changed = Rx.prototype.l;
    Rx.prototype.getRevision = Rx.prototype.A;
    Rx.prototype.on = Rx.prototype.u;
    Rx.prototype.once = Rx.prototype.B;
    Rx.prototype.un = Rx.prototype.v;
    Rx.prototype.unByKey = Rx.prototype.C;
    Sx.prototype.getAttributions = Sx.prototype.Y;
    Sx.prototype.getLogo = Sx.prototype.W;
    Sx.prototype.getProjection = Sx.prototype.Z;
    Sx.prototype.getState = Sx.prototype.$;
    Sx.prototype.changed = Sx.prototype.l;
    Sx.prototype.getRevision = Sx.prototype.A;
    Sx.prototype.on = Sx.prototype.u;
    Sx.prototype.once = Sx.prototype.B;
    Sx.prototype.un = Sx.prototype.v;
    Sx.prototype.unByKey = Sx.prototype.C;
    Tx.prototype.getAttributions = Tx.prototype.Y;
    Tx.prototype.getLogo = Tx.prototype.W;
    Tx.prototype.getProjection = Tx.prototype.Z;
    Tx.prototype.getState = Tx.prototype.$;
    Tx.prototype.changed = Tx.prototype.l;
    Tx.prototype.getRevision = Tx.prototype.A;
    Tx.prototype.on = Tx.prototype.u;
    Tx.prototype.once = Tx.prototype.B;
    Tx.prototype.un = Tx.prototype.v;
    Tx.prototype.unByKey = Tx.prototype.C;
    Vx.prototype.getAttributions = Vx.prototype.Y;
    Vx.prototype.getLogo = Vx.prototype.W;
    Vx.prototype.getProjection = Vx.prototype.Z;
    Vx.prototype.getState = Vx.prototype.$;
    Vx.prototype.changed = Vx.prototype.l;
    Vx.prototype.getRevision = Vx.prototype.A;
    Vx.prototype.on = Vx.prototype.u;
    Vx.prototype.once = Vx.prototype.B;
    Vx.prototype.un = Vx.prototype.v;
    Vx.prototype.unByKey = Vx.prototype.C;
    Zx.prototype.readFeatures = Zx.prototype.a;
    Zx.prototype.addFeature = Zx.prototype.Pa;
    Zx.prototype.addFeatures = Zx.prototype.ya;
    Zx.prototype.clear = Zx.prototype.clear;
    Zx.prototype.forEachFeature = Zx.prototype.Xa;
    Zx.prototype.forEachFeatureInExtent = Zx.prototype.ra;
    Zx.prototype.forEachFeatureIntersectingExtent = Zx.prototype.Fa;
    Zx.prototype.getFeatures = Zx.prototype.va;
    Zx.prototype.getFeaturesAtCoordinate = Zx.prototype.Ia;
    Zx.prototype.getClosestFeatureToCoordinate = Zx.prototype.Ya;
    Zx.prototype.getExtent = Zx.prototype.D;
    Zx.prototype.getFeatureById = Zx.prototype.Ha;
    Zx.prototype.removeFeature = Zx.prototype.$a;
    Zx.prototype.getAttributions = Zx.prototype.Y;
    Zx.prototype.getLogo = Zx.prototype.W;
    Zx.prototype.getProjection = Zx.prototype.Z;
    Zx.prototype.getState = Zx.prototype.$;
    Zx.prototype.changed = Zx.prototype.l;
    Zx.prototype.getRevision = Zx.prototype.A;
    Zx.prototype.on = Zx.prototype.u;
    Zx.prototype.once = Zx.prototype.B;
    Zx.prototype.un = Zx.prototype.v;
    Zx.prototype.unByKey = Zx.prototype.C;
    $x.prototype.getTileLoadFunction = $x.prototype.ib;
    $x.prototype.getTileUrlFunction = $x.prototype.jb;
    $x.prototype.setTileLoadFunction = $x.prototype.ob;
    $x.prototype.getTileGrid = $x.prototype.za;
    $x.prototype.getAttributions = $x.prototype.Y;
    $x.prototype.getLogo = $x.prototype.W;
    $x.prototype.getProjection = $x.prototype.Z;
    $x.prototype.getState = $x.prototype.$;
    $x.prototype.changed = $x.prototype.l;
    $x.prototype.getRevision = $x.prototype.A;
    $x.prototype.on = $x.prototype.u;
    $x.prototype.once = $x.prototype.B;
    $x.prototype.un = $x.prototype.v;
    $x.prototype.unByKey = $x.prototype.C;
    cy.prototype.setTileUrlFunction = cy.prototype.pa;
    cy.prototype.setUrl = cy.prototype.a;
    cy.prototype.getTileLoadFunction = cy.prototype.ib;
    cy.prototype.getTileUrlFunction = cy.prototype.jb;
    cy.prototype.setTileLoadFunction = cy.prototype.ob;
    cy.prototype.getTileGrid = cy.prototype.za;
    cy.prototype.getAttributions = cy.prototype.Y;
    cy.prototype.getLogo = cy.prototype.W;
    cy.prototype.getProjection = cy.prototype.Z;
    cy.prototype.getState = cy.prototype.$;
    cy.prototype.changed = cy.prototype.l;
    cy.prototype.getRevision = cy.prototype.A;
    cy.prototype.on = cy.prototype.u;
    cy.prototype.once = cy.prototype.B;
    cy.prototype.un = cy.prototype.v;
    cy.prototype.unByKey = cy.prototype.C;
    ay.prototype.setTileUrlFunction = ay.prototype.pa;
    ay.prototype.setUrl = ay.prototype.a;
    ay.prototype.getTileLoadFunction = ay.prototype.ib;
    ay.prototype.getTileUrlFunction = ay.prototype.jb;
    ay.prototype.setTileLoadFunction = ay.prototype.ob;
    ay.prototype.getTileGrid = ay.prototype.za;
    ay.prototype.getAttributions = ay.prototype.Y;
    ay.prototype.getLogo = ay.prototype.W;
    ay.prototype.getProjection = ay.prototype.Z;
    ay.prototype.getState = ay.prototype.$;
    ay.prototype.changed = ay.prototype.l;
    ay.prototype.getRevision = ay.prototype.A;
    ay.prototype.on = ay.prototype.u;
    ay.prototype.once = ay.prototype.B;
    ay.prototype.un = ay.prototype.v;
    ay.prototype.unByKey = ay.prototype.C;
    fy.prototype.readFeatures = fy.prototype.a;
    fy.prototype.addFeature = fy.prototype.Pa;
    fy.prototype.addFeatures = fy.prototype.ya;
    fy.prototype.clear = fy.prototype.clear;
    fy.prototype.forEachFeature = fy.prototype.Xa;
    fy.prototype.forEachFeatureInExtent = fy.prototype.ra;
    fy.prototype.forEachFeatureIntersectingExtent = fy.prototype.Fa;
    fy.prototype.getFeatures = fy.prototype.va;
    fy.prototype.getFeaturesAtCoordinate = fy.prototype.Ia;
    fy.prototype.getClosestFeatureToCoordinate = fy.prototype.Ya;
    fy.prototype.getExtent = fy.prototype.D;
    fy.prototype.getFeatureById = fy.prototype.Ha;
    fy.prototype.removeFeature = fy.prototype.$a;
    fy.prototype.getAttributions = fy.prototype.Y;
    fy.prototype.getLogo = fy.prototype.W;
    fy.prototype.getProjection = fy.prototype.Z;
    fy.prototype.getState = fy.prototype.$;
    fy.prototype.changed = fy.prototype.l;
    fy.prototype.getRevision = fy.prototype.A;
    fy.prototype.on = fy.prototype.u;
    fy.prototype.once = fy.prototype.B;
    fy.prototype.un = fy.prototype.v;
    fy.prototype.unByKey = fy.prototype.C;
    gy.prototype.addFeature = gy.prototype.Pa;
    gy.prototype.addFeatures = gy.prototype.ya;
    gy.prototype.forEachFeature = gy.prototype.Xa;
    gy.prototype.forEachFeatureInExtent = gy.prototype.ra;
    gy.prototype.forEachFeatureIntersectingExtent = gy.prototype.Fa;
    gy.prototype.getFeatures = gy.prototype.va;
    gy.prototype.getFeaturesAtCoordinate = gy.prototype.Ia;
    gy.prototype.getClosestFeatureToCoordinate = gy.prototype.Ya;
    gy.prototype.getExtent = gy.prototype.D;
    gy.prototype.getFeatureById = gy.prototype.Ha;
    gy.prototype.removeFeature = gy.prototype.$a;
    gy.prototype.getAttributions = gy.prototype.Y;
    gy.prototype.getLogo = gy.prototype.W;
    gy.prototype.getProjection = gy.prototype.Z;
    gy.prototype.getState = gy.prototype.$;
    gy.prototype.changed = gy.prototype.l;
    gy.prototype.getRevision = gy.prototype.A;
    gy.prototype.on = gy.prototype.u;
    gy.prototype.once = gy.prototype.B;
    gy.prototype.un = gy.prototype.v;
    gy.prototype.unByKey = gy.prototype.C;
    jy.prototype.setTileUrlFunction = jy.prototype.pa;
    jy.prototype.setUrl = jy.prototype.a;
    jy.prototype.getTileLoadFunction = jy.prototype.ib;
    jy.prototype.getTileUrlFunction = jy.prototype.jb;
    jy.prototype.setTileLoadFunction = jy.prototype.ob;
    jy.prototype.getTileGrid = jy.prototype.za;
    jy.prototype.getAttributions = jy.prototype.Y;
    jy.prototype.getLogo = jy.prototype.W;
    jy.prototype.getProjection = jy.prototype.Z;
    jy.prototype.getState = jy.prototype.$;
    jy.prototype.changed = jy.prototype.l;
    jy.prototype.getRevision = jy.prototype.A;
    jy.prototype.on = jy.prototype.u;
    jy.prototype.once = jy.prototype.B;
    jy.prototype.un = jy.prototype.v;
    jy.prototype.unByKey = jy.prototype.C;
    my.prototype.getTileGrid = my.prototype.za;
    my.prototype.getAttributions = my.prototype.Y;
    my.prototype.getLogo = my.prototype.W;
    my.prototype.getProjection = my.prototype.Z;
    my.prototype.getState = my.prototype.$;
    my.prototype.changed = my.prototype.l;
    my.prototype.getRevision = my.prototype.A;
    my.prototype.on = my.prototype.u;
    my.prototype.once = my.prototype.B;
    my.prototype.un = my.prototype.v;
    my.prototype.unByKey = my.prototype.C;
    ny.prototype.getTileLoadFunction = ny.prototype.ib;
    ny.prototype.getTileUrlFunction = ny.prototype.jb;
    ny.prototype.setTileLoadFunction = ny.prototype.ob;
    ny.prototype.setTileUrlFunction = ny.prototype.pa;
    ny.prototype.getTileGrid = ny.prototype.za;
    ny.prototype.getAttributions = ny.prototype.Y;
    ny.prototype.getLogo = ny.prototype.W;
    ny.prototype.getProjection = ny.prototype.Z;
    ny.prototype.getState = ny.prototype.$;
    ny.prototype.changed = ny.prototype.l;
    ny.prototype.getRevision = ny.prototype.A;
    ny.prototype.on = ny.prototype.u;
    ny.prototype.once = ny.prototype.B;
    ny.prototype.un = ny.prototype.v;
    ny.prototype.unByKey = ny.prototype.C;
    oy.prototype.getTileGrid = oy.prototype.za;
    oy.prototype.getAttributions = oy.prototype.Y;
    oy.prototype.getLogo = oy.prototype.W;
    oy.prototype.getProjection = oy.prototype.Z;
    oy.prototype.getState = oy.prototype.$;
    oy.prototype.changed = oy.prototype.l;
    oy.prototype.getRevision = oy.prototype.A;
    oy.prototype.on = oy.prototype.u;
    oy.prototype.once = oy.prototype.B;
    oy.prototype.un = oy.prototype.v;
    oy.prototype.unByKey = oy.prototype.C;
    ty.prototype.readFeatures = ty.prototype.a;
    ty.prototype.forEachFeatureIntersectingExtent = ty.prototype.Fa;
    ty.prototype.getFeaturesAtCoordinate = ty.prototype.Ia;
    ty.prototype.getFeatureById = ty.prototype.Ha;
    ty.prototype.getAttributions = ty.prototype.Y;
    ty.prototype.getLogo = ty.prototype.W;
    ty.prototype.getProjection = ty.prototype.Z;
    ty.prototype.getState = ty.prototype.$;
    ty.prototype.changed = ty.prototype.l;
    ty.prototype.getRevision = ty.prototype.A;
    ty.prototype.on = ty.prototype.u;
    ty.prototype.once = ty.prototype.B;
    ty.prototype.un = ty.prototype.v;
    ty.prototype.unByKey = ty.prototype.C;
    vy.prototype.getTileLoadFunction = vy.prototype.ib;
    vy.prototype.getTileUrlFunction = vy.prototype.jb;
    vy.prototype.setTileLoadFunction = vy.prototype.ob;
    vy.prototype.setTileUrlFunction = vy.prototype.pa;
    vy.prototype.getTileGrid = vy.prototype.za;
    vy.prototype.getAttributions = vy.prototype.Y;
    vy.prototype.getLogo = vy.prototype.W;
    vy.prototype.getProjection = vy.prototype.Z;
    vy.prototype.getState = vy.prototype.$;
    vy.prototype.changed = vy.prototype.l;
    vy.prototype.getRevision = vy.prototype.A;
    vy.prototype.on = vy.prototype.u;
    vy.prototype.once = vy.prototype.B;
    vy.prototype.un = vy.prototype.v;
    vy.prototype.unByKey = vy.prototype.C;
    zy.prototype.readFeatures = zy.prototype.a;
    zy.prototype.addFeature = zy.prototype.Pa;
    zy.prototype.addFeatures = zy.prototype.ya;
    zy.prototype.clear = zy.prototype.clear;
    zy.prototype.forEachFeature = zy.prototype.Xa;
    zy.prototype.forEachFeatureInExtent = zy.prototype.ra;
    zy.prototype.forEachFeatureIntersectingExtent = zy.prototype.Fa;
    zy.prototype.getFeatures = zy.prototype.va;
    zy.prototype.getFeaturesAtCoordinate = zy.prototype.Ia;
    zy.prototype.getClosestFeatureToCoordinate = zy.prototype.Ya;
    zy.prototype.getExtent = zy.prototype.D;
    zy.prototype.getFeatureById = zy.prototype.Ha;
    zy.prototype.removeFeature = zy.prototype.$a;
    zy.prototype.getAttributions = zy.prototype.Y;
    zy.prototype.getLogo = zy.prototype.W;
    zy.prototype.getProjection = zy.prototype.Z;
    zy.prototype.getState = zy.prototype.$;
    zy.prototype.changed = zy.prototype.l;
    zy.prototype.getRevision = zy.prototype.A;
    zy.prototype.on = zy.prototype.u;
    zy.prototype.once = zy.prototype.B;
    zy.prototype.un = zy.prototype.v;
    zy.prototype.unByKey = zy.prototype.C;
    By.prototype.getTileLoadFunction = By.prototype.ib;
    By.prototype.getTileUrlFunction = By.prototype.jb;
    By.prototype.setTileLoadFunction = By.prototype.ob;
    By.prototype.setTileUrlFunction = By.prototype.pa;
    By.prototype.getTileGrid = By.prototype.za;
    By.prototype.getAttributions = By.prototype.Y;
    By.prototype.getLogo = By.prototype.W;
    By.prototype.getProjection = By.prototype.Z;
    By.prototype.getState = By.prototype.$;
    By.prototype.changed = By.prototype.l;
    By.prototype.getRevision = By.prototype.A;
    By.prototype.on = By.prototype.u;
    By.prototype.once = By.prototype.B;
    By.prototype.un = By.prototype.v;
    By.prototype.unByKey = By.prototype.C;
    Ey.prototype.getTileLoadFunction = Ey.prototype.ib;
    Ey.prototype.getTileUrlFunction = Ey.prototype.jb;
    Ey.prototype.setTileLoadFunction = Ey.prototype.ob;
    Ey.prototype.setTileUrlFunction = Ey.prototype.pa;
    Ey.prototype.getTileGrid = Ey.prototype.za;
    Ey.prototype.getAttributions = Ey.prototype.Y;
    Ey.prototype.getLogo = Ey.prototype.W;
    Ey.prototype.getProjection = Ey.prototype.Z;
    Ey.prototype.getState = Ey.prototype.$;
    Ey.prototype.changed = Ey.prototype.l;
    Ey.prototype.getRevision = Ey.prototype.A;
    Ey.prototype.on = Ey.prototype.u;
    Ey.prototype.once = Ey.prototype.B;
    Ey.prototype.un = Ey.prototype.v;
    Ey.prototype.unByKey = Ey.prototype.C;
    D.prototype.bindTo = D.prototype.O;
    D.prototype.get = D.prototype.get;
    D.prototype.getKeys = D.prototype.I;
    D.prototype.getProperties = D.prototype.L;
    D.prototype.set = D.prototype.set;
    D.prototype.setProperties = D.prototype.G;
    D.prototype.unbind = D.prototype.P;
    D.prototype.unbindAll = D.prototype.R;
    D.prototype.changed = D.prototype.l;
    D.prototype.getRevision = D.prototype.A;
    D.prototype.on = D.prototype.u;
    D.prototype.once = D.prototype.B;
    D.prototype.un = D.prototype.v;
    D.prototype.unByKey = D.prototype.C;
    E.prototype.getBrightness = E.prototype.d;
    E.prototype.getContrast = E.prototype.e;
    E.prototype.getHue = E.prototype.f;
    E.prototype.getExtent = E.prototype.D;
    E.prototype.getMaxResolution = E.prototype.g;
    E.prototype.getMinResolution = E.prototype.i;
    E.prototype.getOpacity = E.prototype.j;
    E.prototype.getSaturation = E.prototype.n;
    E.prototype.getVisible = E.prototype.b;
    E.prototype.setBrightness = E.prototype.t;
    E.prototype.setContrast = E.prototype.F;
    E.prototype.setHue = E.prototype.J;
    E.prototype.setExtent = E.prototype.p;
    E.prototype.setMaxResolution = E.prototype.Q;
    E.prototype.setMinResolution = E.prototype.V;
    E.prototype.setOpacity = E.prototype.q;
    E.prototype.setSaturation = E.prototype.ba;
    E.prototype.setVisible = E.prototype.ca;
    E.prototype.bindTo = E.prototype.O;
    E.prototype.get = E.prototype.get;
    E.prototype.getKeys = E.prototype.I;
    E.prototype.getProperties = E.prototype.L;
    E.prototype.set = E.prototype.set;
    E.prototype.setProperties = E.prototype.G;
    E.prototype.unbind = E.prototype.P;
    E.prototype.unbindAll = E.prototype.R;
    E.prototype.changed = E.prototype.l;
    E.prototype.getRevision = E.prototype.A;
    E.prototype.on = E.prototype.u;
    E.prototype.once = E.prototype.B;
    E.prototype.un = E.prototype.v;
    E.prototype.unByKey = E.prototype.C;
    L.prototype.setSource = L.prototype.ga;
    L.prototype.getBrightness = L.prototype.d;
    L.prototype.getContrast = L.prototype.e;
    L.prototype.getHue = L.prototype.f;
    L.prototype.getExtent = L.prototype.D;
    L.prototype.getMaxResolution = L.prototype.g;
    L.prototype.getMinResolution = L.prototype.i;
    L.prototype.getOpacity = L.prototype.j;
    L.prototype.getSaturation = L.prototype.n;
    L.prototype.getVisible = L.prototype.b;
    L.prototype.setBrightness = L.prototype.t;
    L.prototype.setContrast = L.prototype.F;
    L.prototype.setHue = L.prototype.J;
    L.prototype.setExtent = L.prototype.p;
    L.prototype.setMaxResolution = L.prototype.Q;
    L.prototype.setMinResolution = L.prototype.V;
    L.prototype.setOpacity = L.prototype.q;
    L.prototype.setSaturation = L.prototype.ba;
    L.prototype.setVisible = L.prototype.ca;
    L.prototype.bindTo = L.prototype.O;
    L.prototype.get = L.prototype.get;
    L.prototype.getKeys = L.prototype.I;
    L.prototype.getProperties = L.prototype.L;
    L.prototype.set = L.prototype.set;
    L.prototype.setProperties = L.prototype.G;
    L.prototype.unbind = L.prototype.P;
    L.prototype.unbindAll = L.prototype.R;
    L.prototype.changed = L.prototype.l;
    L.prototype.getRevision = L.prototype.A;
    L.prototype.on = L.prototype.u;
    L.prototype.once = L.prototype.B;
    L.prototype.un = L.prototype.v;
    L.prototype.unByKey = L.prototype.C;
    $.prototype.getSource = $.prototype.a;
    $.prototype.getStyle = $.prototype.Uc;
    $.prototype.getStyleFunction = $.prototype.Vc;
    $.prototype.setStyle = $.prototype.oa;
    $.prototype.setSource = $.prototype.ga;
    $.prototype.getBrightness = $.prototype.d;
    $.prototype.getContrast = $.prototype.e;
    $.prototype.getHue = $.prototype.f;
    $.prototype.getExtent = $.prototype.D;
    $.prototype.getMaxResolution = $.prototype.g;
    $.prototype.getMinResolution = $.prototype.i;
    $.prototype.getOpacity = $.prototype.j;
    $.prototype.getSaturation = $.prototype.n;
    $.prototype.getVisible = $.prototype.b;
    $.prototype.setBrightness = $.prototype.t;
    $.prototype.setContrast = $.prototype.F;
    $.prototype.setHue = $.prototype.J;
    $.prototype.setExtent = $.prototype.p;
    $.prototype.setMaxResolution = $.prototype.Q;
    $.prototype.setMinResolution = $.prototype.V;
    $.prototype.setOpacity = $.prototype.q;
    $.prototype.setSaturation = $.prototype.ba;
    $.prototype.setVisible = $.prototype.ca;
    $.prototype.bindTo = $.prototype.O;
    $.prototype.get = $.prototype.get;
    $.prototype.getKeys = $.prototype.I;
    $.prototype.getProperties = $.prototype.L;
    $.prototype.set = $.prototype.set;
    $.prototype.setProperties = $.prototype.G;
    $.prototype.unbind = $.prototype.P;
    $.prototype.unbindAll = $.prototype.R;
    $.prototype.changed = $.prototype.l;
    $.prototype.getRevision = $.prototype.A;
    $.prototype.on = $.prototype.u;
    $.prototype.once = $.prototype.B;
    $.prototype.un = $.prototype.v;
    $.prototype.unByKey = $.prototype.C;
    J.prototype.setSource = J.prototype.ga;
    J.prototype.getBrightness = J.prototype.d;
    J.prototype.getContrast = J.prototype.e;
    J.prototype.getHue = J.prototype.f;
    J.prototype.getExtent = J.prototype.D;
    J.prototype.getMaxResolution = J.prototype.g;
    J.prototype.getMinResolution = J.prototype.i;
    J.prototype.getOpacity = J.prototype.j;
    J.prototype.getSaturation = J.prototype.n;
    J.prototype.getVisible = J.prototype.b;
    J.prototype.setBrightness = J.prototype.t;
    J.prototype.setContrast = J.prototype.F;
    J.prototype.setHue = J.prototype.J;
    J.prototype.setExtent = J.prototype.p;
    J.prototype.setMaxResolution = J.prototype.Q;
    J.prototype.setMinResolution = J.prototype.V;
    J.prototype.setOpacity = J.prototype.q;
    J.prototype.setSaturation = J.prototype.ba;
    J.prototype.setVisible = J.prototype.ca;
    J.prototype.bindTo = J.prototype.O;
    J.prototype.get = J.prototype.get;
    J.prototype.getKeys = J.prototype.I;
    J.prototype.getProperties = J.prototype.L;
    J.prototype.set = J.prototype.set;
    J.prototype.setProperties = J.prototype.G;
    J.prototype.unbind = J.prototype.P;
    J.prototype.unbindAll = J.prototype.R;
    J.prototype.changed = J.prototype.l;
    J.prototype.getRevision = J.prototype.A;
    J.prototype.on = J.prototype.u;
    J.prototype.once = J.prototype.B;
    J.prototype.un = J.prototype.v;
    J.prototype.unByKey = J.prototype.C;
    I.prototype.getBrightness = I.prototype.d;
    I.prototype.getContrast = I.prototype.e;
    I.prototype.getHue = I.prototype.f;
    I.prototype.getExtent = I.prototype.D;
    I.prototype.getMaxResolution = I.prototype.g;
    I.prototype.getMinResolution = I.prototype.i;
    I.prototype.getOpacity = I.prototype.j;
    I.prototype.getSaturation = I.prototype.n;
    I.prototype.getVisible = I.prototype.b;
    I.prototype.setBrightness = I.prototype.t;
    I.prototype.setContrast = I.prototype.F;
    I.prototype.setHue = I.prototype.J;
    I.prototype.setExtent = I.prototype.p;
    I.prototype.setMaxResolution = I.prototype.Q;
    I.prototype.setMinResolution = I.prototype.V;
    I.prototype.setOpacity = I.prototype.q;
    I.prototype.setSaturation = I.prototype.ba;
    I.prototype.setVisible = I.prototype.ca;
    I.prototype.bindTo = I.prototype.O;
    I.prototype.get = I.prototype.get;
    I.prototype.getKeys = I.prototype.I;
    I.prototype.getProperties = I.prototype.L;
    I.prototype.set = I.prototype.set;
    I.prototype.setProperties = I.prototype.G;
    I.prototype.unbind = I.prototype.P;
    I.prototype.unbindAll = I.prototype.R;
    I.prototype.changed = I.prototype.l;
    I.prototype.getRevision = I.prototype.A;
    I.prototype.on = I.prototype.u;
    I.prototype.once = I.prototype.B;
    I.prototype.un = I.prototype.v;
    I.prototype.unByKey = I.prototype.C;
    K.prototype.setSource = K.prototype.ga;
    K.prototype.getBrightness = K.prototype.d;
    K.prototype.getContrast = K.prototype.e;
    K.prototype.getHue = K.prototype.f;
    K.prototype.getExtent = K.prototype.D;
    K.prototype.getMaxResolution = K.prototype.g;
    K.prototype.getMinResolution = K.prototype.i;
    K.prototype.getOpacity = K.prototype.j;
    K.prototype.getSaturation = K.prototype.n;
    K.prototype.getVisible = K.prototype.b;
    K.prototype.setBrightness = K.prototype.t;
    K.prototype.setContrast = K.prototype.F;
    K.prototype.setHue = K.prototype.J;
    K.prototype.setExtent = K.prototype.p;
    K.prototype.setMaxResolution = K.prototype.Q;
    K.prototype.setMinResolution = K.prototype.V;
    K.prototype.setOpacity = K.prototype.q;
    K.prototype.setSaturation = K.prototype.ba;
    K.prototype.setVisible = K.prototype.ca;
    K.prototype.bindTo = K.prototype.O;
    K.prototype.get = K.prototype.get;
    K.prototype.getKeys = K.prototype.I;
    K.prototype.getProperties = K.prototype.L;
    K.prototype.set = K.prototype.set;
    K.prototype.setProperties = K.prototype.G;
    K.prototype.unbind = K.prototype.P;
    K.prototype.unbindAll = K.prototype.R;
    K.prototype.changed = K.prototype.l;
    K.prototype.getRevision = K.prototype.A;
    K.prototype.on = K.prototype.u;
    K.prototype.once = K.prototype.B;
    K.prototype.un = K.prototype.v;
    K.prototype.unByKey = K.prototype.C;
    ok.prototype.bindTo = ok.prototype.O;
    ok.prototype.get = ok.prototype.get;
    ok.prototype.getKeys = ok.prototype.I;
    ok.prototype.getProperties = ok.prototype.L;
    ok.prototype.set = ok.prototype.set;
    ok.prototype.setProperties = ok.prototype.G;
    ok.prototype.unbind = ok.prototype.P;
    ok.prototype.unbindAll = ok.prototype.R;
    ok.prototype.changed = ok.prototype.l;
    ok.prototype.getRevision = ok.prototype.A;
    ok.prototype.on = ok.prototype.u;
    ok.prototype.once = ok.prototype.B;
    ok.prototype.un = ok.prototype.v;
    ok.prototype.unByKey = ok.prototype.C;
    sk.prototype.getActive = sk.prototype.a;
    sk.prototype.setActive = sk.prototype.b;
    sk.prototype.bindTo = sk.prototype.O;
    sk.prototype.get = sk.prototype.get;
    sk.prototype.getKeys = sk.prototype.I;
    sk.prototype.getProperties = sk.prototype.L;
    sk.prototype.set = sk.prototype.set;
    sk.prototype.setProperties = sk.prototype.G;
    sk.prototype.unbind = sk.prototype.P;
    sk.prototype.unbindAll = sk.prototype.R;
    sk.prototype.changed = sk.prototype.l;
    sk.prototype.getRevision = sk.prototype.A;
    sk.prototype.on = sk.prototype.u;
    sk.prototype.once = sk.prototype.B;
    sk.prototype.un = sk.prototype.v;
    sk.prototype.unByKey = sk.prototype.C;
    Nv.prototype.getActive = Nv.prototype.a;
    Nv.prototype.setActive = Nv.prototype.b;
    Nv.prototype.bindTo = Nv.prototype.O;
    Nv.prototype.get = Nv.prototype.get;
    Nv.prototype.getKeys = Nv.prototype.I;
    Nv.prototype.getProperties = Nv.prototype.L;
    Nv.prototype.set = Nv.prototype.set;
    Nv.prototype.setProperties = Nv.prototype.G;
    Nv.prototype.unbind = Nv.prototype.P;
    Nv.prototype.unbindAll = Nv.prototype.R;
    Nv.prototype.changed = Nv.prototype.l;
    Nv.prototype.getRevision = Nv.prototype.A;
    Nv.prototype.on = Nv.prototype.u;
    Nv.prototype.once = Nv.prototype.B;
    Nv.prototype.un = Nv.prototype.v;
    Nv.prototype.unByKey = Nv.prototype.C;
    Bk.prototype.getActive = Bk.prototype.a;
    Bk.prototype.setActive = Bk.prototype.b;
    Bk.prototype.bindTo = Bk.prototype.O;
    Bk.prototype.get = Bk.prototype.get;
    Bk.prototype.getKeys = Bk.prototype.I;
    Bk.prototype.getProperties = Bk.prototype.L;
    Bk.prototype.set = Bk.prototype.set;
    Bk.prototype.setProperties = Bk.prototype.G;
    Bk.prototype.unbind = Bk.prototype.P;
    Bk.prototype.unbindAll = Bk.prototype.R;
    Bk.prototype.changed = Bk.prototype.l;
    Bk.prototype.getRevision = Bk.prototype.A;
    Bk.prototype.on = Bk.prototype.u;
    Bk.prototype.once = Bk.prototype.B;
    Bk.prototype.un = Bk.prototype.v;
    Bk.prototype.unByKey = Bk.prototype.C;
    Fl.prototype.getActive = Fl.prototype.a;
    Fl.prototype.setActive = Fl.prototype.b;
    Fl.prototype.bindTo = Fl.prototype.O;
    Fl.prototype.get = Fl.prototype.get;
    Fl.prototype.getKeys = Fl.prototype.I;
    Fl.prototype.getProperties = Fl.prototype.L;
    Fl.prototype.set = Fl.prototype.set;
    Fl.prototype.setProperties = Fl.prototype.G;
    Fl.prototype.unbind = Fl.prototype.P;
    Fl.prototype.unbindAll = Fl.prototype.R;
    Fl.prototype.changed = Fl.prototype.l;
    Fl.prototype.getRevision = Fl.prototype.A;
    Fl.prototype.on = Fl.prototype.u;
    Fl.prototype.once = Fl.prototype.B;
    Fl.prototype.un = Fl.prototype.v;
    Fl.prototype.unByKey = Fl.prototype.C;
    Ek.prototype.getActive = Ek.prototype.a;
    Ek.prototype.setActive = Ek.prototype.b;
    Ek.prototype.bindTo = Ek.prototype.O;
    Ek.prototype.get = Ek.prototype.get;
    Ek.prototype.getKeys = Ek.prototype.I;
    Ek.prototype.getProperties = Ek.prototype.L;
    Ek.prototype.set = Ek.prototype.set;
    Ek.prototype.setProperties = Ek.prototype.G;
    Ek.prototype.unbind = Ek.prototype.P;
    Ek.prototype.unbindAll = Ek.prototype.R;
    Ek.prototype.changed = Ek.prototype.l;
    Ek.prototype.getRevision = Ek.prototype.A;
    Ek.prototype.on = Ek.prototype.u;
    Ek.prototype.once = Ek.prototype.B;
    Ek.prototype.un = Ek.prototype.v;
    Ek.prototype.unByKey = Ek.prototype.C;
    Rv.prototype.getActive = Rv.prototype.a;
    Rv.prototype.setActive = Rv.prototype.b;
    Rv.prototype.bindTo = Rv.prototype.O;
    Rv.prototype.get = Rv.prototype.get;
    Rv.prototype.getKeys = Rv.prototype.I;
    Rv.prototype.getProperties = Rv.prototype.L;
    Rv.prototype.set = Rv.prototype.set;
    Rv.prototype.setProperties = Rv.prototype.G;
    Rv.prototype.unbind = Rv.prototype.P;
    Rv.prototype.unbindAll = Rv.prototype.R;
    Rv.prototype.changed = Rv.prototype.l;
    Rv.prototype.getRevision = Rv.prototype.A;
    Rv.prototype.on = Rv.prototype.u;
    Rv.prototype.once = Rv.prototype.B;
    Rv.prototype.un = Rv.prototype.v;
    Rv.prototype.unByKey = Rv.prototype.C;
    Ik.prototype.getActive = Ik.prototype.a;
    Ik.prototype.setActive = Ik.prototype.b;
    Ik.prototype.bindTo = Ik.prototype.O;
    Ik.prototype.get = Ik.prototype.get;
    Ik.prototype.getKeys = Ik.prototype.I;
    Ik.prototype.getProperties = Ik.prototype.L;
    Ik.prototype.set = Ik.prototype.set;
    Ik.prototype.setProperties = Ik.prototype.G;
    Ik.prototype.unbind = Ik.prototype.P;
    Ik.prototype.unbindAll = Ik.prototype.R;
    Ik.prototype.changed = Ik.prototype.l;
    Ik.prototype.getRevision = Ik.prototype.A;
    Ik.prototype.on = Ik.prototype.u;
    Ik.prototype.once = Ik.prototype.B;
    Ik.prototype.un = Ik.prototype.v;
    Ik.prototype.unByKey = Ik.prototype.C;
    Yl.prototype.getGeometry = Yl.prototype.N;
    Yl.prototype.getActive = Yl.prototype.a;
    Yl.prototype.setActive = Yl.prototype.b;
    Yl.prototype.bindTo = Yl.prototype.O;
    Yl.prototype.get = Yl.prototype.get;
    Yl.prototype.getKeys = Yl.prototype.I;
    Yl.prototype.getProperties = Yl.prototype.L;
    Yl.prototype.set = Yl.prototype.set;
    Yl.prototype.setProperties = Yl.prototype.G;
    Yl.prototype.unbind = Yl.prototype.P;
    Yl.prototype.unbindAll = Yl.prototype.R;
    Yl.prototype.changed = Yl.prototype.l;
    Yl.prototype.getRevision = Yl.prototype.A;
    Yl.prototype.on = Yl.prototype.u;
    Yl.prototype.once = Yl.prototype.B;
    Yl.prototype.un = Yl.prototype.v;
    Yl.prototype.unByKey = Yl.prototype.C;
    hw.prototype.getActive = hw.prototype.a;
    hw.prototype.setActive = hw.prototype.b;
    hw.prototype.bindTo = hw.prototype.O;
    hw.prototype.get = hw.prototype.get;
    hw.prototype.getKeys = hw.prototype.I;
    hw.prototype.getProperties = hw.prototype.L;
    hw.prototype.set = hw.prototype.set;
    hw.prototype.setProperties = hw.prototype.G;
    hw.prototype.unbind = hw.prototype.P;
    hw.prototype.unbindAll = hw.prototype.R;
    hw.prototype.changed = hw.prototype.l;
    hw.prototype.getRevision = hw.prototype.A;
    hw.prototype.on = hw.prototype.u;
    hw.prototype.once = hw.prototype.B;
    hw.prototype.un = hw.prototype.v;
    hw.prototype.unByKey = hw.prototype.C;
    Zl.prototype.getActive = Zl.prototype.a;
    Zl.prototype.setActive = Zl.prototype.b;
    Zl.prototype.bindTo = Zl.prototype.O;
    Zl.prototype.get = Zl.prototype.get;
    Zl.prototype.getKeys = Zl.prototype.I;
    Zl.prototype.getProperties = Zl.prototype.L;
    Zl.prototype.set = Zl.prototype.set;
    Zl.prototype.setProperties = Zl.prototype.G;
    Zl.prototype.unbind = Zl.prototype.P;
    Zl.prototype.unbindAll = Zl.prototype.R;
    Zl.prototype.changed = Zl.prototype.l;
    Zl.prototype.getRevision = Zl.prototype.A;
    Zl.prototype.on = Zl.prototype.u;
    Zl.prototype.once = Zl.prototype.B;
    Zl.prototype.un = Zl.prototype.v;
    Zl.prototype.unByKey = Zl.prototype.C;
    am.prototype.getActive = am.prototype.a;
    am.prototype.setActive = am.prototype.b;
    am.prototype.bindTo = am.prototype.O;
    am.prototype.get = am.prototype.get;
    am.prototype.getKeys = am.prototype.I;
    am.prototype.getProperties = am.prototype.L;
    am.prototype.set = am.prototype.set;
    am.prototype.setProperties = am.prototype.G;
    am.prototype.unbind = am.prototype.P;
    am.prototype.unbindAll = am.prototype.R;
    am.prototype.changed = am.prototype.l;
    am.prototype.getRevision = am.prototype.A;
    am.prototype.on = am.prototype.u;
    am.prototype.once = am.prototype.B;
    am.prototype.un = am.prototype.v;
    am.prototype.unByKey = am.prototype.C;
    uw.prototype.getActive = uw.prototype.a;
    uw.prototype.setActive = uw.prototype.b;
    uw.prototype.bindTo = uw.prototype.O;
    uw.prototype.get = uw.prototype.get;
    uw.prototype.getKeys = uw.prototype.I;
    uw.prototype.getProperties = uw.prototype.L;
    uw.prototype.set = uw.prototype.set;
    uw.prototype.setProperties = uw.prototype.G;
    uw.prototype.unbind = uw.prototype.P;
    uw.prototype.unbindAll = uw.prototype.R;
    uw.prototype.changed = uw.prototype.l;
    uw.prototype.getRevision = uw.prototype.A;
    uw.prototype.on = uw.prototype.u;
    uw.prototype.once = uw.prototype.B;
    uw.prototype.un = uw.prototype.v;
    uw.prototype.unByKey = uw.prototype.C;
    cm.prototype.getActive = cm.prototype.a;
    cm.prototype.setActive = cm.prototype.b;
    cm.prototype.bindTo = cm.prototype.O;
    cm.prototype.get = cm.prototype.get;
    cm.prototype.getKeys = cm.prototype.I;
    cm.prototype.getProperties = cm.prototype.L;
    cm.prototype.set = cm.prototype.set;
    cm.prototype.setProperties = cm.prototype.G;
    cm.prototype.unbind = cm.prototype.P;
    cm.prototype.unbindAll = cm.prototype.R;
    cm.prototype.changed = cm.prototype.l;
    cm.prototype.getRevision = cm.prototype.A;
    cm.prototype.on = cm.prototype.u;
    cm.prototype.once = cm.prototype.B;
    cm.prototype.un = cm.prototype.v;
    cm.prototype.unByKey = cm.prototype.C;
    em.prototype.getActive = em.prototype.a;
    em.prototype.setActive = em.prototype.b;
    em.prototype.bindTo = em.prototype.O;
    em.prototype.get = em.prototype.get;
    em.prototype.getKeys = em.prototype.I;
    em.prototype.getProperties = em.prototype.L;
    em.prototype.set = em.prototype.set;
    em.prototype.setProperties = em.prototype.G;
    em.prototype.unbind = em.prototype.P;
    em.prototype.unbindAll = em.prototype.R;
    em.prototype.changed = em.prototype.l;
    em.prototype.getRevision = em.prototype.A;
    em.prototype.on = em.prototype.u;
    em.prototype.once = em.prototype.B;
    em.prototype.un = em.prototype.v;
    em.prototype.unByKey = em.prototype.C;
    im.prototype.getActive = im.prototype.a;
    im.prototype.setActive = im.prototype.b;
    im.prototype.bindTo = im.prototype.O;
    im.prototype.get = im.prototype.get;
    im.prototype.getKeys = im.prototype.I;
    im.prototype.getProperties = im.prototype.L;
    im.prototype.set = im.prototype.set;
    im.prototype.setProperties = im.prototype.G;
    im.prototype.unbind = im.prototype.P;
    im.prototype.unbindAll = im.prototype.R;
    im.prototype.changed = im.prototype.l;
    im.prototype.getRevision = im.prototype.A;
    im.prototype.on = im.prototype.u;
    im.prototype.once = im.prototype.B;
    im.prototype.un = im.prototype.v;
    im.prototype.unByKey = im.prototype.C;
    Dw.prototype.getActive = Dw.prototype.a;
    Dw.prototype.setActive = Dw.prototype.b;
    Dw.prototype.bindTo = Dw.prototype.O;
    Dw.prototype.get = Dw.prototype.get;
    Dw.prototype.getKeys = Dw.prototype.I;
    Dw.prototype.getProperties = Dw.prototype.L;
    Dw.prototype.set = Dw.prototype.set;
    Dw.prototype.setProperties = Dw.prototype.G;
    Dw.prototype.unbind = Dw.prototype.P;
    Dw.prototype.unbindAll = Dw.prototype.R;
    Dw.prototype.changed = Dw.prototype.l;
    Dw.prototype.getRevision = Dw.prototype.A;
    Dw.prototype.on = Dw.prototype.u;
    Dw.prototype.once = Dw.prototype.B;
    Dw.prototype.un = Dw.prototype.v;
    Dw.prototype.unByKey = Dw.prototype.C;
    Mk.prototype.changed = Mk.prototype.l;
    Mk.prototype.getRevision = Mk.prototype.A;
    Mk.prototype.on = Mk.prototype.u;
    Mk.prototype.once = Mk.prototype.B;
    Mk.prototype.un = Mk.prototype.v;
    Mk.prototype.unByKey = Mk.prototype.C;
    Ok.prototype.clone = Ok.prototype.clone;
    Ok.prototype.getClosestPoint = Ok.prototype.f;
    Ok.prototype.getType = Ok.prototype.H;
    Ok.prototype.intersectsExtent = Ok.prototype.ha;
    Ok.prototype.transform = Ok.prototype.e;
    Ok.prototype.changed = Ok.prototype.l;
    Ok.prototype.getRevision = Ok.prototype.A;
    Ok.prototype.on = Ok.prototype.u;
    Ok.prototype.once = Ok.prototype.B;
    Ok.prototype.un = Ok.prototype.v;
    Ok.prototype.unByKey = Ok.prototype.C;
    gn.prototype.getFirstCoordinate = gn.prototype.vb;
    gn.prototype.getLastCoordinate = gn.prototype.wb;
    gn.prototype.getLayout = gn.prototype.xb;
    gn.prototype.applyTransform = gn.prototype.ma;
    gn.prototype.translate = gn.prototype.Aa;
    gn.prototype.getClosestPoint = gn.prototype.f;
    gn.prototype.intersectsExtent = gn.prototype.ha;
    gn.prototype.changed = gn.prototype.l;
    gn.prototype.getRevision = gn.prototype.A;
    gn.prototype.on = gn.prototype.u;
    gn.prototype.once = gn.prototype.B;
    gn.prototype.un = gn.prototype.v;
    gn.prototype.unByKey = gn.prototype.C;
    jn.prototype.getClosestPoint = jn.prototype.f;
    jn.prototype.transform = jn.prototype.e;
    jn.prototype.changed = jn.prototype.l;
    jn.prototype.getRevision = jn.prototype.A;
    jn.prototype.on = jn.prototype.u;
    jn.prototype.once = jn.prototype.B;
    jn.prototype.un = jn.prototype.v;
    jn.prototype.unByKey = jn.prototype.C;
    hl.prototype.getExtent = hl.prototype.D;
    hl.prototype.getFirstCoordinate = hl.prototype.vb;
    hl.prototype.getLastCoordinate = hl.prototype.wb;
    hl.prototype.getLayout = hl.prototype.xb;
    hl.prototype.applyTransform = hl.prototype.ma;
    hl.prototype.translate = hl.prototype.Aa;
    hl.prototype.getClosestPoint = hl.prototype.f;
    hl.prototype.intersectsExtent = hl.prototype.ha;
    hl.prototype.transform = hl.prototype.e;
    hl.prototype.changed = hl.prototype.l;
    hl.prototype.getRevision = hl.prototype.A;
    hl.prototype.on = hl.prototype.u;
    hl.prototype.once = hl.prototype.B;
    hl.prototype.un = hl.prototype.v;
    hl.prototype.unByKey = hl.prototype.C;
    M.prototype.getExtent = M.prototype.D;
    M.prototype.getFirstCoordinate = M.prototype.vb;
    M.prototype.getLastCoordinate = M.prototype.wb;
    M.prototype.getLayout = M.prototype.xb;
    M.prototype.applyTransform = M.prototype.ma;
    M.prototype.translate = M.prototype.Aa;
    M.prototype.getClosestPoint = M.prototype.f;
    M.prototype.transform = M.prototype.e;
    M.prototype.changed = M.prototype.l;
    M.prototype.getRevision = M.prototype.A;
    M.prototype.on = M.prototype.u;
    M.prototype.once = M.prototype.B;
    M.prototype.un = M.prototype.v;
    M.prototype.unByKey = M.prototype.C;
    rn.prototype.getExtent = rn.prototype.D;
    rn.prototype.getFirstCoordinate = rn.prototype.vb;
    rn.prototype.getLastCoordinate = rn.prototype.wb;
    rn.prototype.getLayout = rn.prototype.xb;
    rn.prototype.applyTransform = rn.prototype.ma;
    rn.prototype.translate = rn.prototype.Aa;
    rn.prototype.getClosestPoint = rn.prototype.f;
    rn.prototype.transform = rn.prototype.e;
    rn.prototype.changed = rn.prototype.l;
    rn.prototype.getRevision = rn.prototype.A;
    rn.prototype.on = rn.prototype.u;
    rn.prototype.once = rn.prototype.B;
    rn.prototype.un = rn.prototype.v;
    rn.prototype.unByKey = rn.prototype.C;
    un.prototype.getExtent = un.prototype.D;
    un.prototype.getFirstCoordinate = un.prototype.vb;
    un.prototype.getLastCoordinate = un.prototype.wb;
    un.prototype.getLayout = un.prototype.xb;
    un.prototype.applyTransform = un.prototype.ma;
    un.prototype.translate = un.prototype.Aa;
    un.prototype.getClosestPoint = un.prototype.f;
    un.prototype.transform = un.prototype.e;
    un.prototype.changed = un.prototype.l;
    un.prototype.getRevision = un.prototype.A;
    un.prototype.on = un.prototype.u;
    un.prototype.once = un.prototype.B;
    un.prototype.un = un.prototype.v;
    un.prototype.unByKey = un.prototype.C;
    vn.prototype.getExtent = vn.prototype.D;
    vn.prototype.getFirstCoordinate = vn.prototype.vb;
    vn.prototype.getLastCoordinate = vn.prototype.wb;
    vn.prototype.getLayout = vn.prototype.xb;
    vn.prototype.applyTransform = vn.prototype.ma;
    vn.prototype.translate = vn.prototype.Aa;
    vn.prototype.getClosestPoint = vn.prototype.f;
    vn.prototype.transform = vn.prototype.e;
    vn.prototype.changed = vn.prototype.l;
    vn.prototype.getRevision = vn.prototype.A;
    vn.prototype.on = vn.prototype.u;
    vn.prototype.once = vn.prototype.B;
    vn.prototype.un = vn.prototype.v;
    vn.prototype.unByKey = vn.prototype.C;
    jl.prototype.getFirstCoordinate = jl.prototype.vb;
    jl.prototype.getLastCoordinate = jl.prototype.wb;
    jl.prototype.getLayout = jl.prototype.xb;
    jl.prototype.applyTransform = jl.prototype.ma;
    jl.prototype.translate = jl.prototype.Aa;
    jl.prototype.getClosestPoint = jl.prototype.f;
    jl.prototype.transform = jl.prototype.e;
    jl.prototype.changed = jl.prototype.l;
    jl.prototype.getRevision = jl.prototype.A;
    jl.prototype.on = jl.prototype.u;
    jl.prototype.once = jl.prototype.B;
    jl.prototype.un = jl.prototype.v;
    jl.prototype.unByKey = jl.prototype.C;
    H.prototype.getExtent = H.prototype.D;
    H.prototype.getFirstCoordinate = H.prototype.vb;
    H.prototype.getLastCoordinate = H.prototype.wb;
    H.prototype.getLayout = H.prototype.xb;
    H.prototype.applyTransform = H.prototype.ma;
    H.prototype.translate = H.prototype.Aa;
    H.prototype.getClosestPoint = H.prototype.f;
    H.prototype.transform = H.prototype.e;
    H.prototype.changed = H.prototype.l;
    H.prototype.getRevision = H.prototype.A;
    H.prototype.on = H.prototype.u;
    H.prototype.once = H.prototype.B;
    H.prototype.un = H.prototype.v;
    H.prototype.unByKey = H.prototype.C;
    Uq.prototype.readFeatures = Uq.prototype.ja;
    X.prototype.readFeatures = X.prototype.ja;
    X.prototype.readFeatures = X.prototype.ja;
    rp.prototype.bindTo = rp.prototype.O;
    rp.prototype.get = rp.prototype.get;
    rp.prototype.getKeys = rp.prototype.I;
    rp.prototype.getProperties = rp.prototype.L;
    rp.prototype.set = rp.prototype.set;
    rp.prototype.setProperties = rp.prototype.G;
    rp.prototype.unbind = rp.prototype.P;
    rp.prototype.unbindAll = rp.prototype.R;
    rp.prototype.changed = rp.prototype.l;
    rp.prototype.getRevision = rp.prototype.A;
    rp.prototype.on = rp.prototype.u;
    rp.prototype.once = rp.prototype.B;
    rp.prototype.un = rp.prototype.v;
    rp.prototype.unByKey = rp.prototype.C;
    $g.prototype.bindTo = $g.prototype.O;
    $g.prototype.get = $g.prototype.get;
    $g.prototype.getKeys = $g.prototype.I;
    $g.prototype.getProperties = $g.prototype.L;
    $g.prototype.set = $g.prototype.set;
    $g.prototype.setProperties = $g.prototype.G;
    $g.prototype.unbind = $g.prototype.P;
    $g.prototype.unbindAll = $g.prototype.R;
    $g.prototype.changed = $g.prototype.l;
    $g.prototype.getRevision = $g.prototype.A;
    $g.prototype.on = $g.prototype.u;
    $g.prototype.once = $g.prototype.B;
    $g.prototype.un = $g.prototype.v;
    $g.prototype.unByKey = $g.prototype.C;
    ah.prototype.getMap = ah.prototype.d;
    ah.prototype.setMap = ah.prototype.setMap;
    ah.prototype.bindTo = ah.prototype.O;
    ah.prototype.get = ah.prototype.get;
    ah.prototype.getKeys = ah.prototype.I;
    ah.prototype.getProperties = ah.prototype.L;
    ah.prototype.set = ah.prototype.set;
    ah.prototype.setProperties = ah.prototype.G;
    ah.prototype.unbind = ah.prototype.P;
    ah.prototype.unbindAll = ah.prototype.R;
    ah.prototype.changed = ah.prototype.l;
    ah.prototype.getRevision = ah.prototype.A;
    ah.prototype.on = ah.prototype.u;
    ah.prototype.once = ah.prototype.B;
    ah.prototype.un = ah.prototype.v;
    ah.prototype.unByKey = ah.prototype.C;
    lh.prototype.getMap = lh.prototype.d;
    lh.prototype.setMap = lh.prototype.setMap;
    lh.prototype.bindTo = lh.prototype.O;
    lh.prototype.get = lh.prototype.get;
    lh.prototype.getKeys = lh.prototype.I;
    lh.prototype.getProperties = lh.prototype.L;
    lh.prototype.set = lh.prototype.set;
    lh.prototype.setProperties = lh.prototype.G;
    lh.prototype.unbind = lh.prototype.P;
    lh.prototype.unbindAll = lh.prototype.R;
    lh.prototype.changed = lh.prototype.l;
    lh.prototype.getRevision = lh.prototype.A;
    lh.prototype.on = lh.prototype.u;
    lh.prototype.once = lh.prototype.B;
    lh.prototype.un = lh.prototype.v;
    lh.prototype.unByKey = lh.prototype.C;
    mh.prototype.getMap = mh.prototype.d;
    mh.prototype.bindTo = mh.prototype.O;
    mh.prototype.get = mh.prototype.get;
    mh.prototype.getKeys = mh.prototype.I;
    mh.prototype.getProperties = mh.prototype.L;
    mh.prototype.set = mh.prototype.set;
    mh.prototype.setProperties = mh.prototype.G;
    mh.prototype.unbind = mh.prototype.P;
    mh.prototype.unbindAll = mh.prototype.R;
    mh.prototype.changed = mh.prototype.l;
    mh.prototype.getRevision = mh.prototype.A;
    mh.prototype.on = mh.prototype.u;
    mh.prototype.once = mh.prototype.B;
    mh.prototype.un = mh.prototype.v;
    mh.prototype.unByKey = mh.prototype.C;
    Ro.prototype.getMap = Ro.prototype.d;
    Ro.prototype.bindTo = Ro.prototype.O;
    Ro.prototype.get = Ro.prototype.get;
    Ro.prototype.getKeys = Ro.prototype.I;
    Ro.prototype.getProperties = Ro.prototype.L;
    Ro.prototype.set = Ro.prototype.set;
    Ro.prototype.setProperties = Ro.prototype.G;
    Ro.prototype.unbind = Ro.prototype.P;
    Ro.prototype.unbindAll = Ro.prototype.R;
    Ro.prototype.changed = Ro.prototype.l;
    Ro.prototype.getRevision = Ro.prototype.A;
    Ro.prototype.on = Ro.prototype.u;
    Ro.prototype.once = Ro.prototype.B;
    Ro.prototype.un = Ro.prototype.v;
    Ro.prototype.unByKey = Ro.prototype.C;
    dh.prototype.getMap = dh.prototype.d;
    dh.prototype.setMap = dh.prototype.setMap;
    dh.prototype.bindTo = dh.prototype.O;
    dh.prototype.get = dh.prototype.get;
    dh.prototype.getKeys = dh.prototype.I;
    dh.prototype.getProperties = dh.prototype.L;
    dh.prototype.set = dh.prototype.set;
    dh.prototype.setProperties = dh.prototype.G;
    dh.prototype.unbind = dh.prototype.P;
    dh.prototype.unbindAll = dh.prototype.R;
    dh.prototype.changed = dh.prototype.l;
    dh.prototype.getRevision = dh.prototype.A;
    dh.prototype.on = dh.prototype.u;
    dh.prototype.once = dh.prototype.B;
    dh.prototype.un = dh.prototype.v;
    dh.prototype.unByKey = dh.prototype.C;
    Xo.prototype.getMap = Xo.prototype.d;
    Xo.prototype.setMap = Xo.prototype.setMap;
    Xo.prototype.bindTo = Xo.prototype.O;
    Xo.prototype.get = Xo.prototype.get;
    Xo.prototype.getKeys = Xo.prototype.I;
    Xo.prototype.getProperties = Xo.prototype.L;
    Xo.prototype.set = Xo.prototype.set;
    Xo.prototype.setProperties = Xo.prototype.G;
    Xo.prototype.unbind = Xo.prototype.P;
    Xo.prototype.unbindAll = Xo.prototype.R;
    Xo.prototype.changed = Xo.prototype.l;
    Xo.prototype.getRevision = Xo.prototype.A;
    Xo.prototype.on = Xo.prototype.u;
    Xo.prototype.once = Xo.prototype.B;
    Xo.prototype.un = Xo.prototype.v;
    Xo.prototype.unByKey = Xo.prototype.C;
    fh.prototype.getMap = fh.prototype.d;
    fh.prototype.setMap = fh.prototype.setMap;
    fh.prototype.bindTo = fh.prototype.O;
    fh.prototype.get = fh.prototype.get;
    fh.prototype.getKeys = fh.prototype.I;
    fh.prototype.getProperties = fh.prototype.L;
    fh.prototype.set = fh.prototype.set;
    fh.prototype.setProperties = fh.prototype.G;
    fh.prototype.unbind = fh.prototype.P;
    fh.prototype.unbindAll = fh.prototype.R;
    fh.prototype.changed = fh.prototype.l;
    fh.prototype.getRevision = fh.prototype.A;
    fh.prototype.on = fh.prototype.u;
    fh.prototype.once = fh.prototype.B;
    fh.prototype.un = fh.prototype.v;
    fh.prototype.unByKey = fh.prototype.C;
    lp.prototype.getMap = lp.prototype.d;
    lp.prototype.bindTo = lp.prototype.O;
    lp.prototype.get = lp.prototype.get;
    lp.prototype.getKeys = lp.prototype.I;
    lp.prototype.getProperties = lp.prototype.L;
    lp.prototype.set = lp.prototype.set;
    lp.prototype.setProperties = lp.prototype.G;
    lp.prototype.unbind = lp.prototype.P;
    lp.prototype.unbindAll = lp.prototype.R;
    lp.prototype.changed = lp.prototype.l;
    lp.prototype.getRevision = lp.prototype.A;
    lp.prototype.on = lp.prototype.u;
    lp.prototype.once = lp.prototype.B;
    lp.prototype.un = lp.prototype.v;
    lp.prototype.unByKey = lp.prototype.C;
    qp.prototype.getMap = qp.prototype.d;
    qp.prototype.setMap = qp.prototype.setMap;
    qp.prototype.bindTo = qp.prototype.O;
    qp.prototype.get = qp.prototype.get;
    qp.prototype.getKeys = qp.prototype.I;
    qp.prototype.getProperties = qp.prototype.L;
    qp.prototype.set = qp.prototype.set;
    qp.prototype.setProperties = qp.prototype.G;
    qp.prototype.unbind = qp.prototype.P;
    qp.prototype.unbindAll = qp.prototype.R;
    qp.prototype.changed = qp.prototype.l;
    qp.prototype.getRevision = qp.prototype.A;
    qp.prototype.on = qp.prototype.u;
    qp.prototype.once = qp.prototype.B;
    qp.prototype.un = qp.prototype.v;
    qp.prototype.unByKey = qp.prototype.C;
    return OPENLAYERS.ol;
}));
