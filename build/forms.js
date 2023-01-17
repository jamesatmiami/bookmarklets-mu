/*! For license information please see forms.js.LICENSE.txt */
(() => {
    var e = {
            755: function (e, t) {
                var n;
                ! function (t, n) {
                    "use strict";
                    "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function (e) {
                        if (!e.document) throw new Error("jQuery requires a window with a document");
                        return n(e)
                    } : n(t)
                }("undefined" != typeof window ? window : this, (function (i, r) {
                    "use strict";
                    var o = [],
                        s = Object.getPrototypeOf,
                        a = o.slice,
                        l = o.flat ? function (e) {
                            return o.flat.call(e)
                        } : function (e) {
                            return o.concat.apply([], e)
                        },
                        c = o.push,
                        u = o.indexOf,
                        f = {},
                        d = f.toString,
                        h = f.hasOwnProperty,
                        p = h.toString,
                        g = p.call(Object),
                        m = {},
                        v = function (e) {
                            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                        },
                        y = function (e) {
                            return null != e && e === e.window
                        },
                        b = i.document,
                        _ = {
                            type: !0,
                            src: !0,
                            nonce: !0,
                            noModule: !0
                        };

                    function w(e, t, n) {
                        var i, r, o = (n = n || b).createElement("script");
                        if (o.text = e, t)
                            for (i in _)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
                        n.head.appendChild(o).parentNode.removeChild(o)
                    }

                    function x(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[d.call(e)] || "object" : typeof e
                    }
                    var T = "3.6.3",
                        C = function (e, t) {
                            return new C.fn.init(e, t)
                        };

                    function E(e) {
                        var t = !!e && "length" in e && e.length,
                            n = x(e);
                        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                    }
                    C.fn = C.prototype = {
                        jquery: T,
                        constructor: C,
                        length: 0,
                        toArray: function () {
                            return a.call(this)
                        },
                        get: function (e) {
                            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                        },
                        pushStack: function (e) {
                            var t = C.merge(this.constructor(), e);
                            return t.prevObject = this, t
                        },
                        each: function (e) {
                            return C.each(this, e)
                        },
                        map: function (e) {
                            return this.pushStack(C.map(this, (function (t, n) {
                                return e.call(t, n, t)
                            })))
                        },
                        slice: function () {
                            return this.pushStack(a.apply(this, arguments))
                        },
                        first: function () {
                            return this.eq(0)
                        },
                        last: function () {
                            return this.eq(-1)
                        },
                        even: function () {
                            return this.pushStack(C.grep(this, (function (e, t) {
                                return (t + 1) % 2
                            })))
                        },
                        odd: function () {
                            return this.pushStack(C.grep(this, (function (e, t) {
                                return t % 2
                            })))
                        },
                        eq: function (e) {
                            var t = this.length,
                                n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                        },
                        end: function () {
                            return this.prevObject || this.constructor()
                        },
                        push: c,
                        sort: o.sort,
                        splice: o.splice
                    }, C.extend = C.fn.extend = function () {
                        var e, t, n, i, r, o, s = arguments[0] || {},
                            a = 1,
                            l = arguments.length,
                            c = !1;
                        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                            if (null != (e = arguments[a]))
                                for (t in e) i = e[t], "__proto__" !== t && s !== i && (c && i && (C.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || C.isPlainObject(n) ? n : {}, r = !1, s[t] = C.extend(c, o, i)) : void 0 !== i && (s[t] = i));
                        return s
                    }, C.extend({
                        expando: "jQuery" + (T + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function (e) {
                            throw new Error(e)
                        },
                        noop: function () {},
                        isPlainObject: function (e) {
                            var t, n;
                            return !(!e || "[object Object]" !== d.call(e) || (t = s(e)) && ("function" != typeof (n = h.call(t, "constructor") && t.constructor) || p.call(n) !== g))
                        },
                        isEmptyObject: function (e) {
                            var t;
                            for (t in e) return !1;
                            return !0
                        },
                        globalEval: function (e, t, n) {
                            w(e, {
                                nonce: t && t.nonce
                            }, n)
                        },
                        each: function (e, t) {
                            var n, i = 0;
                            if (E(e))
                                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                            else
                                for (i in e)
                                    if (!1 === t.call(e[i], i, e[i])) break;
                            return e
                        },
                        makeArray: function (e, t) {
                            var n = t || [];
                            return null != e && (E(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : c.call(n, e)), n
                        },
                        inArray: function (e, t, n) {
                            return null == t ? -1 : u.call(t, e, n)
                        },
                        merge: function (e, t) {
                            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                            return e.length = r, e
                        },
                        grep: function (e, t, n) {
                            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
                            return i
                        },
                        map: function (e, t, n) {
                            var i, r, o = 0,
                                s = [];
                            if (E(e))
                                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
                            else
                                for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                            return l(s)
                        },
                        guid: 1,
                        support: m
                    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = o[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function (e, t) {
                        f["[object " + t + "]"] = t.toLowerCase()
                    }));
                    var A = function (e) {
                        var t, n, i, r, o, s, a, l, c, u, f, d, h, p, g, m, v, y, b, _ = "sizzle" + 1 * new Date,
                            w = e.document,
                            x = 0,
                            T = 0,
                            C = le(),
                            E = le(),
                            A = le(),
                            k = le(),
                            S = function (e, t) {
                                return e === t && (f = !0), 0
                            },
                            N = {}.hasOwnProperty,
                            L = [],
                            O = L.pop,
                            D = L.push,
                            j = L.push,
                            P = L.slice,
                            I = function (e, t) {
                                for (var n = 0, i = e.length; n < i; n++)
                                    if (e[n] === t) return n;
                                return -1
                            },
                            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            $ = "[\\x20\\t\\r\\n\\f]",
                            q = "(?:\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            H = "\\[" + $ + "*(" + q + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + q + "))|)" + $ + "*\\]",
                            R = ":(" + q + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                            F = new RegExp($ + "+", "g"),
                            B = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
                            W = new RegExp("^" + $ + "*," + $ + "*"),
                            z = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
                            V = new RegExp($ + "|>"),
                            X = new RegExp(R),
                            U = new RegExp("^" + q + "$"),
                            Y = {
                                ID: new RegExp("^#(" + q + ")"),
                                CLASS: new RegExp("^\\.(" + q + ")"),
                                TAG: new RegExp("^(" + q + "|[*])"),
                                ATTR: new RegExp("^" + H),
                                PSEUDO: new RegExp("^" + R),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + M + ")$", "i"),
                                needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
                            },
                            Q = /HTML$/i,
                            K = /^(?:input|select|textarea|button)$/i,
                            G = /^h\d$/i,
                            J = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\([^\\r\\n\\f])", "g"),
                            ne = function (e, t) {
                                var n = "0x" + e.slice(1) - 65536;
                                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                            },
                            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            re = function (e, t) {
                                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                            },
                            oe = function () {
                                d()
                            },
                            se = _e((function (e) {
                                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                            }), {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            j.apply(L = P.call(w.childNodes), w.childNodes), L[w.childNodes.length].nodeType
                        } catch (e) {
                            j = {
                                apply: L.length ? function (e, t) {
                                    D.apply(e, P.call(t))
                                } : function (e, t) {
                                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                                    e.length = n - 1
                                }
                            }
                        }

                        function ae(e, t, i, r) {
                            var o, a, c, u, f, p, v, y = t && t.ownerDocument,
                                w = t ? t.nodeType : 9;
                            if (i = i || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return i;
                            if (!r && (d(t), t = t || h, g)) {
                                if (11 !== w && (f = Z.exec(e)))
                                    if (o = f[1]) {
                                        if (9 === w) {
                                            if (!(c = t.getElementById(o))) return i;
                                            if (c.id === o) return i.push(c), i
                                        } else if (y && (c = y.getElementById(o)) && b(t, c) && c.id === o) return i.push(c), i
                                    } else {
                                        if (f[2]) return j.apply(i, t.getElementsByTagName(e)), i;
                                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return j.apply(i, t.getElementsByClassName(o)), i
                                    } if (n.qsa && !k[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                    if (v = e, y = t, 1 === w && (V.test(e) || z.test(e))) {
                                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((u = t.getAttribute("id")) ? u = u.replace(ie, re) : t.setAttribute("id", u = _)), a = (p = s(e)).length; a--;) p[a] = (u ? "#" + u : ":scope") + " " + be(p[a]);
                                        v = p.join(",")
                                    }
                                    try {
                                        if (n.cssSupportsSelector && !CSS.supports("selector(:is(" + v + "))")) throw new Error;
                                        return j.apply(i, y.querySelectorAll(v)), i
                                    } catch (t) {
                                        k(e, !0)
                                    } finally {
                                        u === _ && t.removeAttribute("id")
                                    }
                                }
                            }
                            return l(e.replace(B, "$1"), t, i, r)
                        }

                        function le() {
                            var e = [];
                            return function t(n, r) {
                                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                            }
                        }

                        function ce(e) {
                            return e[_] = !0, e
                        }

                        function ue(e) {
                            var t = h.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (e) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), t = null
                            }
                        }

                        function fe(e, t) {
                            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
                        }

                        function de(e, t) {
                            var n = t && e,
                                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (i) return i;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === t) return -1;
                            return e ? 1 : -1
                        }

                        function he(e) {
                            return function (t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e
                            }
                        }

                        function pe(e) {
                            return function (t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e
                            }
                        }

                        function ge(e) {
                            return function (t) {
                                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                            }
                        }

                        function me(e) {
                            return ce((function (t) {
                                return t = +t, ce((function (n, i) {
                                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                                }))
                            }))
                        }

                        function ve(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }
                        for (t in n = ae.support = {}, o = ae.isXML = function (e) {
                                var t = e && e.namespaceURI,
                                    n = e && (e.ownerDocument || e).documentElement;
                                return !Q.test(t || n && n.nodeName || "HTML")
                            }, d = ae.setDocument = function (e) {
                                var t, r, s = e ? e.ownerDocument || e : w;
                                return s != h && 9 === s.nodeType && s.documentElement ? (p = (h = s).documentElement, g = !o(h), w != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ue((function (e) {
                                    return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                                })), n.cssSupportsSelector = ue((function () {
                                    return CSS.supports("selector(*)") && h.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
                                })), n.attributes = ue((function (e) {
                                    return e.className = "i", !e.getAttribute("className")
                                })), n.getElementsByTagName = ue((function (e) {
                                    return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length
                                })), n.getElementsByClassName = J.test(h.getElementsByClassName), n.getById = ue((function (e) {
                                    return p.appendChild(e).id = _, !h.getElementsByName || !h.getElementsByName(_).length
                                })), n.getById ? (i.filter.ID = function (e) {
                                    var t = e.replace(te, ne);
                                    return function (e) {
                                        return e.getAttribute("id") === t
                                    }
                                }, i.find.ID = function (e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }) : (i.filter.ID = function (e) {
                                    var t = e.replace(te, ne);
                                    return function (e) {
                                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t
                                    }
                                }, i.find.ID = function (e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n, i, r, o = t.getElementById(e);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                        }
                                        return []
                                    }
                                }), i.find.TAG = n.getElementsByTagName ? function (e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                                } : function (e, t) {
                                    var n, i = [],
                                        r = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                        return i
                                    }
                                    return o
                                }, i.find.CLASS = n.getElementsByClassName && function (e, t) {
                                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                                }, v = [], m = [], (n.qsa = J.test(h.querySelectorAll)) && (ue((function (e) {
                                    var t;
                                    p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + $ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + $ + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + _ + "-]").length || m.push("~="), (t = h.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[" + $ + "*name" + $ + "*=" + $ + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + _ + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                                })), ue((function (e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = h.createElement("input");
                                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + $ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                                }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ue((function (e) {
                                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", R)
                                })), n.cssSupportsSelector || m.push(":has"), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), b = t || J.test(p.contains) ? function (e, t) {
                                    var n = 9 === e.nodeType && e.documentElement || e,
                                        i = t && t.parentNode;
                                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                                } : function (e, t) {
                                    if (t)
                                        for (; t = t.parentNode;)
                                            if (t === e) return !0;
                                    return !1
                                }, S = t ? function (e, t) {
                                    if (e === t) return f = !0, 0;
                                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == h || e.ownerDocument == w && b(w, e) ? -1 : t == h || t.ownerDocument == w && b(w, t) ? 1 : u ? I(u, e) - I(u, t) : 0 : 4 & i ? -1 : 1)
                                } : function (e, t) {
                                    if (e === t) return f = !0, 0;
                                    var n, i = 0,
                                        r = e.parentNode,
                                        o = t.parentNode,
                                        s = [e],
                                        a = [t];
                                    if (!r || !o) return e == h ? -1 : t == h ? 1 : r ? -1 : o ? 1 : u ? I(u, e) - I(u, t) : 0;
                                    if (r === o) return de(e, t);
                                    for (n = e; n = n.parentNode;) s.unshift(n);
                                    for (n = t; n = n.parentNode;) a.unshift(n);
                                    for (; s[i] === a[i];) i++;
                                    return i ? de(s[i], a[i]) : s[i] == w ? -1 : a[i] == w ? 1 : 0
                                }, h) : h
                            }, ae.matches = function (e, t) {
                                return ae(e, null, null, t)
                            }, ae.matchesSelector = function (e, t) {
                                if (d(e), n.matchesSelector && g && !k[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                                    var i = y.call(e, t);
                                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                                } catch (e) {
                                    k(t, !0)
                                }
                                return ae(t, h, null, [e]).length > 0
                            }, ae.contains = function (e, t) {
                                return (e.ownerDocument || e) != h && d(e), b(e, t)
                            }, ae.attr = function (e, t) {
                                (e.ownerDocument || e) != h && d(e);
                                var r = i.attrHandle[t.toLowerCase()],
                                    o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                            }, ae.escape = function (e) {
                                return (e + "").replace(ie, re)
                            }, ae.error = function (e) {
                                throw new Error("Syntax error, unrecognized expression: " + e)
                            }, ae.uniqueSort = function (e) {
                                var t, i = [],
                                    r = 0,
                                    o = 0;
                                if (f = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(S), f) {
                                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                                    for (; r--;) e.splice(i[r], 1)
                                }
                                return u = null, e
                            }, r = ae.getText = function (e) {
                                var t, n = "",
                                    i = 0,
                                    o = e.nodeType;
                                if (o) {
                                    if (1 === o || 9 === o || 11 === o) {
                                        if ("string" == typeof e.textContent) return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                                    } else if (3 === o || 4 === o) return e.nodeValue
                                } else
                                    for (; t = e[i++];) n += r(t);
                                return n
                            }, i = ae.selectors = {
                                cacheLength: 50,
                                createPseudo: ce,
                                match: Y,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function (e) {
                                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                    },
                                    CHILD: function (e) {
                                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                                    },
                                    PSEUDO: function (e) {
                                        var t, n = !e[6] && e[2];
                                        return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function (e) {
                                        var t = e.replace(te, ne).toLowerCase();
                                        return "*" === e ? function () {
                                            return !0
                                        } : function (e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                    },
                                    CLASS: function (e) {
                                        var t = C[e + " "];
                                        return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && C(e, (function (e) {
                                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                        }))
                                    },
                                    ATTR: function (e, t, n) {
                                        return function (i) {
                                            var r = ae.attr(i, e);
                                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                        }
                                    },
                                    CHILD: function (e, t, n, i, r) {
                                        var o = "nth" !== e.slice(0, 3),
                                            s = "last" !== e.slice(-4),
                                            a = "of-type" === t;
                                        return 1 === i && 0 === r ? function (e) {
                                            return !!e.parentNode
                                        } : function (t, n, l) {
                                            var c, u, f, d, h, p, g = o !== s ? "nextSibling" : "previousSibling",
                                                m = t.parentNode,
                                                v = a && t.nodeName.toLowerCase(),
                                                y = !l && !a,
                                                b = !1;
                                            if (m) {
                                                if (o) {
                                                    for (; g;) {
                                                        for (d = t; d = d[g];)
                                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                                        p = g = "only" === e && !p && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                                    for (b = (h = (c = (u = (f = (d = m)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]) && c[2], d = h && m.childNodes[h]; d = ++h && d && d[g] || (b = h = 0) || p.pop();)
                                                        if (1 === d.nodeType && ++b && d === t) {
                                                            u[e] = [x, h, b];
                                                            break
                                                        }
                                                } else if (y && (b = h = (c = (u = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === x && c[1]), !1 === b)
                                                    for (;
                                                        (d = ++h && d && d[g] || (b = h = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((u = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [x, b]), d !== t)););
                                                return (b -= r) === i || b % i == 0 && b / i >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function (e, t) {
                                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                        return r[_] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ce((function (e, n) {
                                            for (var i, o = r(e, t), s = o.length; s--;) e[i = I(e, o[s])] = !(n[i] = o[s])
                                        })) : function (e) {
                                            return r(e, 0, n)
                                        }) : r
                                    }
                                },
                                pseudos: {
                                    not: ce((function (e) {
                                        var t = [],
                                            n = [],
                                            i = a(e.replace(B, "$1"));
                                        return i[_] ? ce((function (e, t, n, r) {
                                            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                                        })) : function (e, r, o) {
                                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                                        }
                                    })),
                                    has: ce((function (e) {
                                        return function (t) {
                                            return ae(e, t).length > 0
                                        }
                                    })),
                                    contains: ce((function (e) {
                                        return e = e.replace(te, ne),
                                            function (t) {
                                                return (t.textContent || r(t)).indexOf(e) > -1
                                            }
                                    })),
                                    lang: ce((function (e) {
                                        return U.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                            function (t) {
                                                var n;
                                                do {
                                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1
                                            }
                                    })),
                                    target: function (t) {
                                        var n = e.location && e.location.hash;
                                        return n && n.slice(1) === t.id
                                    },
                                    root: function (e) {
                                        return e === p
                                    },
                                    focus: function (e) {
                                        return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                    },
                                    enabled: ge(!1),
                                    disabled: ge(!0),
                                    checked: function (e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                                    },
                                    selected: function (e) {
                                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                    },
                                    empty: function (e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function (e) {
                                        return !i.pseudos.empty(e)
                                    },
                                    header: function (e) {
                                        return G.test(e.nodeName)
                                    },
                                    input: function (e) {
                                        return K.test(e.nodeName)
                                    },
                                    button: function (e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && "button" === e.type || "button" === t
                                    },
                                    text: function (e) {
                                        var t;
                                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                    },
                                    first: me((function () {
                                        return [0]
                                    })),
                                    last: me((function (e, t) {
                                        return [t - 1]
                                    })),
                                    eq: me((function (e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    })),
                                    even: me((function (e, t) {
                                        for (var n = 0; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    odd: me((function (e, t) {
                                        for (var n = 1; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    lt: me((function (e, t, n) {
                                        for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                                        return e
                                    })),
                                    gt: me((function (e, t, n) {
                                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                        return e
                                    }))
                                }
                            }, i.pseudos.nth = i.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) i.pseudos[t] = he(t);
                        for (t in {
                                submit: !0,
                                reset: !0
                            }) i.pseudos[t] = pe(t);

                        function ye() {}

                        function be(e) {
                            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                            return i
                        }

                        function _e(e, t, n) {
                            var i = t.dir,
                                r = t.next,
                                o = r || i,
                                s = n && "parentNode" === o,
                                a = T++;
                            return t.first ? function (t, n, r) {
                                for (; t = t[i];)
                                    if (1 === t.nodeType || s) return e(t, n, r);
                                return !1
                            } : function (t, n, l) {
                                var c, u, f, d = [x, a];
                                if (l) {
                                    for (; t = t[i];)
                                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                                } else
                                    for (; t = t[i];)
                                        if (1 === t.nodeType || s)
                                            if (u = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                            else {
                                                if ((c = u[o]) && c[0] === x && c[1] === a) return d[2] = c[2];
                                                if (u[o] = d, d[2] = e(t, n, l)) return !0
                                            } return !1
                            }
                        }

                        function we(e) {
                            return e.length > 1 ? function (t, n, i) {
                                for (var r = e.length; r--;)
                                    if (!e[r](t, n, i)) return !1;
                                return !0
                            } : e[0]
                        }

                        function xe(e, t, n, i, r) {
                            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), c && t.push(a)));
                            return s
                        }

                        function Te(e, t, n, i, r, o) {
                            return i && !i[_] && (i = Te(i)), r && !r[_] && (r = Te(r, o)), ce((function (o, s, a, l) {
                                var c, u, f, d = [],
                                    h = [],
                                    p = s.length,
                                    g = o || function (e, t, n) {
                                        for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                                        return n
                                    }(t || "*", a.nodeType ? [a] : a, []),
                                    m = !e || !o && t ? g : xe(g, d, e, a, l),
                                    v = n ? r || (o ? e : p || i) ? [] : s : m;
                                if (n && n(m, v, a, l), i)
                                    for (c = xe(v, h), i(c, [], a, l), u = c.length; u--;)(f = c[u]) && (v[h[u]] = !(m[h[u]] = f));
                                if (o) {
                                    if (r || e) {
                                        if (r) {
                                            for (c = [], u = v.length; u--;)(f = v[u]) && c.push(m[u] = f);
                                            r(null, v = [], c, l)
                                        }
                                        for (u = v.length; u--;)(f = v[u]) && (c = r ? I(o, f) : d[u]) > -1 && (o[c] = !(s[c] = f))
                                    }
                                } else v = xe(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : j.apply(s, v)
                            }))
                        }

                        function Ce(e) {
                            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, u = _e((function (e) {
                                    return e === t
                                }), a, !0), f = _e((function (e) {
                                    return I(t, e) > -1
                                }), a, !0), d = [function (e, n, i) {
                                    var r = !s && (i || n !== c) || ((t = n).nodeType ? u(e, n, i) : f(e, n, i));
                                    return t = null, r
                                }]; l < o; l++)
                                if (n = i.relative[e[l].type]) d = [_e(we(d), n)];
                                else {
                                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                                        return Te(l > 1 && we(d), l > 1 && be(e.slice(0, l - 1).concat({
                                            value: " " === e[l - 2].type ? "*" : ""
                                        })).replace(B, "$1"), n, l < r && Ce(e.slice(l, r)), r < o && Ce(e = e.slice(r)), r < o && be(e))
                                    }
                                    d.push(n)
                                } return we(d)
                        }
                        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function (e, t) {
                            var n, r, o, s, a, l, c, u = E[e + " "];
                            if (u) return t ? 0 : u.slice(0);
                            for (a = e, l = [], c = i.preFilter; a;) {
                                for (s in n && !(r = W.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), o.push({
                                        value: n,
                                        type: r[0].replace(B, " ")
                                    }), a = a.slice(n.length)), i.filter) !(r = Y[s].exec(a)) || c[s] && !(r = c[s](r)) || (n = r.shift(), o.push({
                                    value: n,
                                    type: s,
                                    matches: r
                                }), a = a.slice(n.length));
                                if (!n) break
                            }
                            return t ? a.length : a ? ae.error(e) : E(e, l).slice(0)
                        }, a = ae.compile = function (e, t) {
                            var n, r = [],
                                o = [],
                                a = A[e + " "];
                            if (!a) {
                                for (t || (t = s(e)), n = t.length; n--;)(a = Ce(t[n]))[_] ? r.push(a) : o.push(a);
                                a = A(e, function (e, t) {
                                    var n = t.length > 0,
                                        r = e.length > 0,
                                        o = function (o, s, a, l, u) {
                                            var f, p, m, v = 0,
                                                y = "0",
                                                b = o && [],
                                                _ = [],
                                                w = c,
                                                T = o || r && i.find.TAG("*", u),
                                                C = x += null == w ? 1 : Math.random() || .1,
                                                E = T.length;
                                            for (u && (c = s == h || s || u); y !== E && null != (f = T[y]); y++) {
                                                if (r && f) {
                                                    for (p = 0, s || f.ownerDocument == h || (d(f), a = !g); m = e[p++];)
                                                        if (m(f, s || h, a)) {
                                                            l.push(f);
                                                            break
                                                        } u && (x = C)
                                                }
                                                n && ((f = !m && f) && v--, o && b.push(f))
                                            }
                                            if (v += y, n && y !== v) {
                                                for (p = 0; m = t[p++];) m(b, _, s, a);
                                                if (o) {
                                                    if (v > 0)
                                                        for (; y--;) b[y] || _[y] || (_[y] = O.call(l));
                                                    _ = xe(_)
                                                }
                                                j.apply(l, _), u && !o && _.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                            }
                                            return u && (x = C, c = w), b
                                        };
                                    return n ? ce(o) : o
                                }(o, r)), a.selector = e
                            }
                            return a
                        }, l = ae.select = function (e, t, n, r) {
                            var o, l, c, u, f, d = "function" == typeof e && e,
                                h = !r && s(e = d.selector || e);
                            if (n = n || [], 1 === h.length) {
                                if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                                    if (!(t = (i.find.ID(c.matches[0].replace(te, ne), t) || [])[0])) return n;
                                    d && (t = t.parentNode), e = e.slice(l.shift().value.length)
                                }
                                for (o = Y.needsContext.test(e) ? 0 : l.length; o-- && (c = l[o], !i.relative[u = c.type]);)
                                    if ((f = i.find[u]) && (r = f(c.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                        if (l.splice(o, 1), !(e = r.length && be(l))) return j.apply(n, r), n;
                                        break
                                    }
                            }
                            return (d || a(e, h))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                        }, n.sortStable = _.split("").sort(S).join("") === _, n.detectDuplicates = !!f, d(), n.sortDetached = ue((function (e) {
                            return 1 & e.compareDocumentPosition(h.createElement("fieldset"))
                        })), ue((function (e) {
                            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                        })) || fe("type|href|height|width", (function (e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        })), n.attributes && ue((function (e) {
                            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                        })) || fe("value", (function (e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                        })), ue((function (e) {
                            return null == e.getAttribute("disabled")
                        })) || fe(M, (function (e, t, n) {
                            var i;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                        })), ae
                    }(i);
                    C.find = A, C.expr = A.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = A.uniqueSort, C.text = A.getText, C.isXMLDoc = A.isXML, C.contains = A.contains, C.escapeSelector = A.escape;
                    var k = function (e, t, n) {
                            for (var i = [], r = void 0 !== n;
                                (e = e[t]) && 9 !== e.nodeType;)
                                if (1 === e.nodeType) {
                                    if (r && C(e).is(n)) break;
                                    i.push(e)
                                } return i
                        },
                        S = function (e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n
                        },
                        N = C.expr.match.needsContext;

                    function L(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    }
                    var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                    function D(e, t, n) {
                        return v(t) ? C.grep(e, (function (e, i) {
                            return !!t.call(e, i, e) !== n
                        })) : t.nodeType ? C.grep(e, (function (e) {
                            return e === t !== n
                        })) : "string" != typeof t ? C.grep(e, (function (e) {
                            return u.call(t, e) > -1 !== n
                        })) : C.filter(t, e, n)
                    }
                    C.filter = function (e, t, n) {
                        var i = t[0];
                        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, (function (e) {
                            return 1 === e.nodeType
                        })))
                    }, C.fn.extend({
                        find: function (e) {
                            var t, n, i = this.length,
                                r = this;
                            if ("string" != typeof e) return this.pushStack(C(e).filter((function () {
                                for (t = 0; t < i; t++)
                                    if (C.contains(r[t], this)) return !0
                            })));
                            for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
                            return i > 1 ? C.uniqueSort(n) : n
                        },
                        filter: function (e) {
                            return this.pushStack(D(this, e || [], !1))
                        },
                        not: function (e) {
                            return this.pushStack(D(this, e || [], !0))
                        },
                        is: function (e) {
                            return !!D(this, "string" == typeof e && N.test(e) ? C(e) : e || [], !1).length
                        }
                    });
                    var j, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (C.fn.init = function (e, t, n) {
                        var i, r;
                        if (!e) return this;
                        if (n = n || j, "string" == typeof e) {
                            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : P.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (i[1]) {
                                if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), O.test(i[1]) && C.isPlainObject(t))
                                    for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                                return this
                            }
                            return (r = b.getElementById(i[2])) && (this[0] = r, this.length = 1), this
                        }
                        return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this)
                    }).prototype = C.fn, j = C(b);
                    var I = /^(?:parents|prev(?:Until|All))/,
                        M = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function $(e, t) {
                        for (;
                            (e = e[t]) && 1 !== e.nodeType;);
                        return e
                    }
                    C.fn.extend({
                        has: function (e) {
                            var t = C(e, this),
                                n = t.length;
                            return this.filter((function () {
                                for (var e = 0; e < n; e++)
                                    if (C.contains(this, t[e])) return !0
                            }))
                        },
                        closest: function (e, t) {
                            var n, i = 0,
                                r = this.length,
                                o = [],
                                s = "string" != typeof e && C(e);
                            if (!N.test(e))
                                for (; i < r; i++)
                                    for (n = this[i]; n && n !== t; n = n.parentNode)
                                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                                            o.push(n);
                                            break
                                        } return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o)
                        },
                        index: function (e) {
                            return e ? "string" == typeof e ? u.call(C(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function (e, t) {
                            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                        },
                        addBack: function (e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }
                    }), C.each({
                        parent: function (e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null
                        },
                        parents: function (e) {
                            return k(e, "parentNode")
                        },
                        parentsUntil: function (e, t, n) {
                            return k(e, "parentNode", n)
                        },
                        next: function (e) {
                            return $(e, "nextSibling")
                        },
                        prev: function (e) {
                            return $(e, "previousSibling")
                        },
                        nextAll: function (e) {
                            return k(e, "nextSibling")
                        },
                        prevAll: function (e) {
                            return k(e, "previousSibling")
                        },
                        nextUntil: function (e, t, n) {
                            return k(e, "nextSibling", n)
                        },
                        prevUntil: function (e, t, n) {
                            return k(e, "previousSibling", n)
                        },
                        siblings: function (e) {
                            return S((e.parentNode || {}).firstChild, e)
                        },
                        children: function (e) {
                            return S(e.firstChild)
                        },
                        contents: function (e) {
                            return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (L(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
                        }
                    }, (function (e, t) {
                        C.fn[e] = function (n, i) {
                            var r = C.map(this, t, n);
                            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = C.filter(i, r)), this.length > 1 && (M[e] || C.uniqueSort(r), I.test(e) && r.reverse()), this.pushStack(r)
                        }
                    }));
                    var q = /[^\x20\t\r\n\f]+/g;

                    function H(e) {
                        return e
                    }

                    function R(e) {
                        throw e
                    }

                    function F(e, t, n, i) {
                        var r;
                        try {
                            e && v(r = e.promise) ? r.call(e).done(t).fail(n) : e && v(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
                        } catch (e) {
                            n.apply(void 0, [e])
                        }
                    }
                    C.Callbacks = function (e) {
                        e = "string" == typeof e ? function (e) {
                            var t = {};
                            return C.each(e.match(q) || [], (function (e, n) {
                                t[n] = !0
                            })), t
                        }(e) : C.extend({}, e);
                        var t, n, i, r, o = [],
                            s = [],
                            a = -1,
                            l = function () {
                                for (r = r || e.once, i = t = !0; s.length; a = -1)
                                    for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                            },
                            c = {
                                add: function () {
                                    return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                                        C.each(n, (function (n, i) {
                                            v(i) ? e.unique && c.has(i) || o.push(i) : i && i.length && "string" !== x(i) && t(i)
                                        }))
                                    }(arguments), n && !t && l()), this
                                },
                                remove: function () {
                                    return C.each(arguments, (function (e, t) {
                                        for (var n;
                                            (n = C.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                                    })), this
                                },
                                has: function (e) {
                                    return e ? C.inArray(e, o) > -1 : o.length > 0
                                },
                                empty: function () {
                                    return o && (o = []), this
                                },
                                disable: function () {
                                    return r = s = [], o = n = "", this
                                },
                                disabled: function () {
                                    return !o
                                },
                                lock: function () {
                                    return r = s = [], n || t || (o = n = ""), this
                                },
                                locked: function () {
                                    return !!r
                                },
                                fireWith: function (e, n) {
                                    return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                                },
                                fire: function () {
                                    return c.fireWith(this, arguments), this
                                },
                                fired: function () {
                                    return !!i
                                }
                            };
                        return c
                    }, C.extend({
                        Deferred: function (e) {
                            var t = [
                                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                                ],
                                n = "pending",
                                r = {
                                    state: function () {
                                        return n
                                    },
                                    always: function () {
                                        return o.done(arguments).fail(arguments), this
                                    },
                                    catch: function (e) {
                                        return r.then(null, e)
                                    },
                                    pipe: function () {
                                        var e = arguments;
                                        return C.Deferred((function (n) {
                                            C.each(t, (function (t, i) {
                                                var r = v(e[i[4]]) && e[i[4]];
                                                o[i[1]]((function () {
                                                    var e = r && r.apply(this, arguments);
                                                    e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
                                                }))
                                            })), e = null
                                        })).promise()
                                    },
                                    then: function (e, n, r) {
                                        var o = 0;

                                        function s(e, t, n, r) {
                                            return function () {
                                                var a = this,
                                                    l = arguments,
                                                    c = function () {
                                                        var i, c;
                                                        if (!(e < o)) {
                                                            if ((i = n.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                            c = i && ("object" == typeof i || "function" == typeof i) && i.then, v(c) ? r ? c.call(i, s(o, t, H, r), s(o, t, R, r)) : (o++, c.call(i, s(o, t, H, r), s(o, t, R, r), s(o, t, H, t.notifyWith))) : (n !== H && (a = void 0, l = [i]), (r || t.resolveWith)(a, l))
                                                        }
                                                    },
                                                    u = r ? c : function () {
                                                        try {
                                                            c()
                                                        } catch (i) {
                                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(i, u.stackTrace), e + 1 >= o && (n !== R && (a = void 0, l = [i]), t.rejectWith(a, l))
                                                        }
                                                    };
                                                e ? u() : (C.Deferred.getStackHook && (u.stackTrace = C.Deferred.getStackHook()), i.setTimeout(u))
                                            }
                                        }
                                        return C.Deferred((function (i) {
                                            t[0][3].add(s(0, i, v(r) ? r : H, i.notifyWith)), t[1][3].add(s(0, i, v(e) ? e : H)), t[2][3].add(s(0, i, v(n) ? n : R))
                                        })).promise()
                                    },
                                    promise: function (e) {
                                        return null != e ? C.extend(e, r) : r
                                    }
                                },
                                o = {};
                            return C.each(t, (function (e, i) {
                                var s = i[2],
                                    a = i[5];
                                r[i[1]] = s.add, a && s.add((function () {
                                    n = a
                                }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(i[3].fire), o[i[0]] = function () {
                                    return o[i[0] + "With"](this === o ? void 0 : this, arguments), this
                                }, o[i[0] + "With"] = s.fireWith
                            })), r.promise(o), e && e.call(o, o), o
                        },
                        when: function (e) {
                            var t = arguments.length,
                                n = t,
                                i = Array(n),
                                r = a.call(arguments),
                                o = C.Deferred(),
                                s = function (e) {
                                    return function (n) {
                                        i[e] = this, r[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(i, r)
                                    }
                                };
                            if (t <= 1 && (F(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();
                            for (; n--;) F(r[n], s(n), o.reject);
                            return o.promise()
                        }
                    });
                    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    C.Deferred.exceptionHook = function (e, t) {
                        i.console && i.console.warn && e && B.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                    }, C.readyException = function (e) {
                        i.setTimeout((function () {
                            throw e
                        }))
                    };
                    var W = C.Deferred();

                    function z() {
                        b.removeEventListener("DOMContentLoaded", z), i.removeEventListener("load", z), C.ready()
                    }
                    C.fn.ready = function (e) {
                        return W.then(e).catch((function (e) {
                            C.readyException(e)
                        })), this
                    }, C.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function (e) {
                            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || W.resolveWith(b, [C]))
                        }
                    }), C.ready.then = W.then, "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? i.setTimeout(C.ready) : (b.addEventListener("DOMContentLoaded", z), i.addEventListener("load", z));
                    var V = function (e, t, n, i, r, o, s) {
                            var a = 0,
                                l = e.length,
                                c = null == n;
                            if ("object" === x(n))
                                for (a in r = !0, n) V(e, t, a, n[a], !0, o, s);
                            else if (void 0 !== i && (r = !0, v(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function (e, t, n) {
                                    return c.call(C(e), n)
                                })), t))
                                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
                        },
                        X = /^-ms-/,
                        U = /-([a-z])/g;

                    function Y(e, t) {
                        return t.toUpperCase()
                    }

                    function Q(e) {
                        return e.replace(X, "ms-").replace(U, Y)
                    }
                    var K = function (e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                    };

                    function G() {
                        this.expando = C.expando + G.uid++
                    }
                    G.uid = 1, G.prototype = {
                        cache: function (e) {
                            var t = e[this.expando];
                            return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))), t
                        },
                        set: function (e, t, n) {
                            var i, r = this.cache(e);
                            if ("string" == typeof t) r[Q(t)] = n;
                            else
                                for (i in t) r[Q(i)] = t[i];
                            return r
                        },
                        get: function (e, t) {
                            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Q(t)]
                        },
                        access: function (e, t, n) {
                            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                        },
                        remove: function (e, t) {
                            var n, i = e[this.expando];
                            if (void 0 !== i) {
                                if (void 0 !== t) {
                                    n = (t = Array.isArray(t) ? t.map(Q) : (t = Q(t)) in i ? [t] : t.match(q) || []).length;
                                    for (; n--;) delete i[t[n]]
                                }(void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                            }
                        },
                        hasData: function (e) {
                            var t = e[this.expando];
                            return void 0 !== t && !C.isEmptyObject(t)
                        }
                    };
                    var J = new G,
                        Z = new G,
                        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        te = /[A-Z]/g;

                    function ne(e, t, n) {
                        var i;
                        if (void 0 === n && 1 === e.nodeType)
                            if (i = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
                                try {
                                    n = function (e) {
                                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                                    }(n)
                                } catch (e) {}
                                Z.set(e, t, n)
                            } else n = void 0;
                        return n
                    }
                    C.extend({
                        hasData: function (e) {
                            return Z.hasData(e) || J.hasData(e)
                        },
                        data: function (e, t, n) {
                            return Z.access(e, t, n)
                        },
                        removeData: function (e, t) {
                            Z.remove(e, t)
                        },
                        _data: function (e, t, n) {
                            return J.access(e, t, n)
                        },
                        _removeData: function (e, t) {
                            J.remove(e, t)
                        }
                    }), C.fn.extend({
                        data: function (e, t) {
                            var n, i, r, o = this[0],
                                s = o && o.attributes;
                            if (void 0 === e) {
                                if (this.length && (r = Z.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Q(i.slice(5)), ne(o, i, r[i]));
                                    J.set(o, "hasDataAttrs", !0)
                                }
                                return r
                            }
                            return "object" == typeof e ? this.each((function () {
                                Z.set(this, e)
                            })) : V(this, (function (t) {
                                var n;
                                if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                                this.each((function () {
                                    Z.set(this, e, t)
                                }))
                            }), null, t, arguments.length > 1, null, !0)
                        },
                        removeData: function (e) {
                            return this.each((function () {
                                Z.remove(this, e)
                            }))
                        }
                    }), C.extend({
                        queue: function (e, t, n) {
                            var i;
                            if (e) return t = (t || "fx") + "queue", i = J.get(e, t), n && (!i || Array.isArray(n) ? i = J.access(e, t, C.makeArray(n)) : i.push(n)), i || []
                        },
                        dequeue: function (e, t) {
                            t = t || "fx";
                            var n = C.queue(e, t),
                                i = n.length,
                                r = n.shift(),
                                o = C._queueHooks(e, t);
                            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function () {
                                C.dequeue(e, t)
                            }), o)), !i && o && o.empty.fire()
                        },
                        _queueHooks: function (e, t) {
                            var n = t + "queueHooks";
                            return J.get(e, n) || J.access(e, n, {
                                empty: C.Callbacks("once memory").add((function () {
                                    J.remove(e, [t + "queue", n])
                                }))
                            })
                        }
                    }), C.fn.extend({
                        queue: function (e, t) {
                            var n = 2;
                            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? C.queue(this[0], e) : void 0 === t ? this : this.each((function () {
                                var n = C.queue(this, e, t);
                                C._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e)
                            }))
                        },
                        dequeue: function (e) {
                            return this.each((function () {
                                C.dequeue(this, e)
                            }))
                        },
                        clearQueue: function (e) {
                            return this.queue(e || "fx", [])
                        },
                        promise: function (e, t) {
                            var n, i = 1,
                                r = C.Deferred(),
                                o = this,
                                s = this.length,
                                a = function () {
                                    --i || r.resolveWith(o, [o])
                                };
                            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = J.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                            return a(), r.promise(t)
                        }
                    });
                    var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
                        oe = ["Top", "Right", "Bottom", "Left"],
                        se = b.documentElement,
                        ae = function (e) {
                            return C.contains(e.ownerDocument, e)
                        },
                        le = {
                            composed: !0
                        };
                    se.getRootNode && (ae = function (e) {
                        return C.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
                    });
                    var ce = function (e, t) {
                        return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === C.css(e, "display")
                    };

                    function ue(e, t, n, i) {
                        var r, o, s = 20,
                            a = i ? function () {
                                return i.cur()
                            } : function () {
                                return C.css(e, t, "")
                            },
                            l = a(),
                            c = n && n[3] || (C.cssNumber[t] ? "" : "px"),
                            u = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && re.exec(C.css(e, t));
                        if (u && u[3] !== c) {
                            for (l /= 2, c = c || u[3], u = +l || 1; s--;) C.style(e, t, u + c), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), u /= o;
                            u *= 2, C.style(e, t, u + c), n = n || []
                        }
                        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
                    }
                    var fe = {};

                    function de(e) {
                        var t, n = e.ownerDocument,
                            i = e.nodeName,
                            r = fe[i];
                        return r || (t = n.body.appendChild(n.createElement(i)), r = C.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), fe[i] = r, r)
                    }

                    function he(e, t) {
                        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = J.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ce(i) && (r[o] = de(i))) : "none" !== n && (r[o] = "none", J.set(i, "display", n)));
                        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
                        return e
                    }
                    C.fn.extend({
                        show: function () {
                            return he(this, !0)
                        },
                        hide: function () {
                            return he(this)
                        },
                        toggle: function (e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function () {
                                ce(this) ? C(this).show() : C(this).hide()
                            }))
                        }
                    });
                    var pe, ge, me = /^(?:checkbox|radio)$/i,
                        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        ye = /^$|^module$|\/(?:java|ecma)script/i;
                    pe = b.createDocumentFragment().appendChild(b.createElement("div")), (ge = b.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), pe.appendChild(ge), m.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>", m.option = !!pe.lastChild;
                    var be = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };

                    function _e(e, t) {
                        var n;
                        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && L(e, t) ? C.merge([e], n) : n
                    }

                    function we(e, t) {
                        for (var n = 0, i = e.length; n < i; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
                    }
                    be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, m.option || (be.optgroup = be.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var xe = /<|&#?\w+;/;

                    function Te(e, t, n, i, r) {
                        for (var o, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
                            if ((o = e[h]) || 0 === o)
                                if ("object" === x(o)) C.merge(d, o.nodeType ? [o] : o);
                                else if (xe.test(o)) {
                            for (s = s || f.appendChild(t.createElement("div")), a = (ve.exec(o) || ["", ""])[1].toLowerCase(), l = be[a] || be._default, s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2], u = l[0]; u--;) s = s.lastChild;
                            C.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
                        } else d.push(t.createTextNode(o));
                        for (f.textContent = "", h = 0; o = d[h++];)
                            if (i && C.inArray(o, i) > -1) r && r.push(o);
                            else if (c = ae(o), s = _e(f.appendChild(o), "script"), c && we(s), n)
                            for (u = 0; o = s[u++];) ye.test(o.type || "") && n.push(o);
                        return f
                    }
                    var Ce = /^([^.]*)(?:\.(.+)|)/;

                    function Ee() {
                        return !0
                    }

                    function Ae() {
                        return !1
                    }

                    function ke(e, t) {
                        return e === function () {
                            try {
                                return b.activeElement
                            } catch (e) {}
                        }() == ("focus" === t)
                    }

                    function Se(e, t, n, i, r, o) {
                        var s, a;
                        if ("object" == typeof t) {
                            for (a in "string" != typeof n && (i = i || n, n = void 0), t) Se(e, a, n, i, t[a], o);
                            return e
                        }
                        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Ae;
                        else if (!r) return e;
                        return 1 === o && (s = r, r = function (e) {
                            return C().off(e), s.apply(this, arguments)
                        }, r.guid = s.guid || (s.guid = C.guid++)), e.each((function () {
                            C.event.add(this, t, r, i, n)
                        }))
                    }

                    function Ne(e, t, n) {
                        n ? (J.set(e, t, !1), C.event.add(e, t, {
                            namespace: !1,
                            handler: function (e) {
                                var i, r, o = J.get(this, t);
                                if (1 & e.isTrigger && this[t]) {
                                    if (o.length)(C.event.special[t] || {}).delegateType && e.stopPropagation();
                                    else if (o = a.call(arguments), J.set(this, t, o), i = n(this, t), this[t](), o !== (r = J.get(this, t)) || i ? J.set(this, t, !1) : r = {}, o !== r) return e.stopImmediatePropagation(), e.preventDefault(), r && r.value
                                } else o.length && (J.set(this, t, {
                                    value: C.event.trigger(C.extend(o[0], C.Event.prototype), o.slice(1), this)
                                }), e.stopImmediatePropagation())
                            }
                        })) : void 0 === J.get(e, t) && C.event.add(e, t, Ee)
                    }
                    C.event = {
                        global: {},
                        add: function (e, t, n, i, r) {
                            var o, s, a, l, c, u, f, d, h, p, g, m = J.get(e);
                            if (K(e))
                                for (n.handler && (n = (o = n).handler, r = o.selector), r && C.find.matchesSelector(se, r), n.guid || (n.guid = C.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function (t) {
                                        return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
                                    }), c = (t = (t || "").match(q) || [""]).length; c--;) h = g = (a = Ce.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = C.event.special[h] || {}, h = (r ? f.delegateType : f.bindType) || h, f = C.event.special[h] || {}, u = C.extend({
                                    type: h,
                                    origType: g,
                                    data: i,
                                    handler: n,
                                    guid: n.guid,
                                    selector: r,
                                    needsContext: r && C.expr.match.needsContext.test(r),
                                    namespace: p.join(".")
                                }, o), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), C.event.global[h] = !0)
                        },
                        remove: function (e, t, n, i, r) {
                            var o, s, a, l, c, u, f, d, h, p, g, m = J.hasData(e) && J.get(e);
                            if (m && (l = m.events)) {
                                for (c = (t = (t || "").match(q) || [""]).length; c--;)
                                    if (h = g = (a = Ce.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                                        for (f = C.event.special[h] || {}, d = l[h = (i ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = d.length; o--;) u = d[o], !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || C.removeEvent(e, h, m.handle), delete l[h])
                                    } else
                                        for (h in l) C.event.remove(e, h + t[c], n, i, !0);
                                C.isEmptyObject(l) && J.remove(e, "handle events")
                            }
                        },
                        dispatch: function (e) {
                            var t, n, i, r, o, s, a = new Array(arguments.length),
                                l = C.event.fix(e),
                                c = (J.get(this, "events") || Object.create(null))[l.type] || [],
                                u = C.event.special[l.type] || {};
                            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                            if (l.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                                for (s = C.event.handlers.call(this, l, c), t = 0;
                                    (r = s[t++]) && !l.isPropagationStopped();)
                                    for (l.currentTarget = r.elem, n = 0;
                                        (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                                return u.postDispatch && u.postDispatch.call(this, l), l.result
                            }
                        },
                        handlers: function (e, t) {
                            var n, i, r, o, s, a = [],
                                l = t.delegateCount,
                                c = e.target;
                            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                                for (; c !== this; c = c.parentNode || this)
                                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? C(r, this).index(c) > -1 : C.find(r, this, null, [c]).length), s[r] && o.push(i);
                                        o.length && a.push({
                                            elem: c,
                                            handlers: o
                                        })
                                    } return c = this, l < t.length && a.push({
                                elem: c,
                                handlers: t.slice(l)
                            }), a
                        },
                        addProp: function (e, t) {
                            Object.defineProperty(C.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: v(t) ? function () {
                                    if (this.originalEvent) return t(this.originalEvent)
                                } : function () {
                                    if (this.originalEvent) return this.originalEvent[e]
                                },
                                set: function (t) {
                                    Object.defineProperty(this, e, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: t
                                    })
                                }
                            })
                        },
                        fix: function (e) {
                            return e[C.expando] ? e : new C.Event(e)
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function (e) {
                                    var t = this || e;
                                    return me.test(t.type) && t.click && L(t, "input") && Ne(t, "click", Ee), !1
                                },
                                trigger: function (e) {
                                    var t = this || e;
                                    return me.test(t.type) && t.click && L(t, "input") && Ne(t, "click"), !0
                                },
                                _default: function (e) {
                                    var t = e.target;
                                    return me.test(t.type) && t.click && L(t, "input") && J.get(t, "click") || L(t, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function (e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                }
                            }
                        }
                    }, C.removeEvent = function (e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n)
                    }, C.Event = function (e, t) {
                        if (!(this instanceof C.Event)) return new C.Event(e, t);
                        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Ae, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
                    }, C.Event.prototype = {
                        constructor: C.Event,
                        isDefaultPrevented: Ae,
                        isPropagationStopped: Ae,
                        isImmediatePropagationStopped: Ae,
                        isSimulated: !1,
                        preventDefault: function () {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
                        },
                        stopPropagation: function () {
                            var e = this.originalEvent;
                            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
                        },
                        stopImmediatePropagation: function () {
                            var e = this.originalEvent;
                            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, C.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: !0
                    }, C.event.addProp), C.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function (e, t) {
                        C.event.special[e] = {
                            setup: function () {
                                return Ne(this, e, ke), !1
                            },
                            trigger: function () {
                                return Ne(this, e), !0
                            },
                            _default: function (t) {
                                return J.get(t.target, e)
                            },
                            delegateType: t
                        }
                    })), C.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function (e, t) {
                        C.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function (e) {
                                var n, i = this,
                                    r = e.relatedTarget,
                                    o = e.handleObj;
                                return r && (r === i || C.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                            }
                        }
                    })), C.fn.extend({
                        on: function (e, t, n, i) {
                            return Se(this, e, t, n, i)
                        },
                        one: function (e, t, n, i) {
                            return Se(this, e, t, n, i, 1)
                        },
                        off: function (e, t, n) {
                            var i, r;
                            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                            if ("object" == typeof e) {
                                for (r in e) this.off(r, t, e[r]);
                                return this
                            }
                            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ae), this.each((function () {
                                C.event.remove(this, e, n, t)
                            }))
                        }
                    });
                    var Le = /<script|<style|<link/i,
                        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        De = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

                    function je(e, t) {
                        return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
                    }

                    function Pe(e) {
                        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                    }

                    function Ie(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                    }

                    function Me(e, t) {
                        var n, i, r, o, s, a;
                        if (1 === t.nodeType) {
                            if (J.hasData(e) && (a = J.get(e).events))
                                for (r in J.remove(t, "handle events"), a)
                                    for (n = 0, i = a[r].length; n < i; n++) C.event.add(t, r, a[r][n]);
                            Z.hasData(e) && (o = Z.access(e), s = C.extend({}, o), Z.set(t, s))
                        }
                    }

                    function $e(e, t) {
                        var n = t.nodeName.toLowerCase();
                        "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                    }

                    function qe(e, t, n, i) {
                        t = l(t);
                        var r, o, s, a, c, u, f = 0,
                            d = e.length,
                            h = d - 1,
                            p = t[0],
                            g = v(p);
                        if (g || d > 1 && "string" == typeof p && !m.checkClone && Oe.test(p)) return e.each((function (r) {
                            var o = e.eq(r);
                            g && (t[0] = p.call(this, r, o.html())), qe(o, t, n, i)
                        }));
                        if (d && (o = (r = Te(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                            for (a = (s = C.map(_e(r, "script"), Pe)).length; f < d; f++) c = r, f !== h && (c = C.clone(c, !0, !0), a && C.merge(s, _e(c, "script"))), n.call(e[f], c, f);
                            if (a)
                                for (u = s[s.length - 1].ownerDocument, C.map(s, Ie), f = 0; f < a; f++) c = s[f], ye.test(c.type || "") && !J.access(c, "globalEval") && C.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? C._evalUrl && !c.noModule && C._evalUrl(c.src, {
                                    nonce: c.nonce || c.getAttribute("nonce")
                                }, u) : w(c.textContent.replace(De, ""), c, u))
                        }
                        return e
                    }

                    function He(e, t, n) {
                        for (var i, r = t ? C.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || C.cleanData(_e(i)), i.parentNode && (n && ae(i) && we(_e(i, "script")), i.parentNode.removeChild(i));
                        return e
                    }
                    C.extend({
                        htmlPrefilter: function (e) {
                            return e
                        },
                        clone: function (e, t, n) {
                            var i, r, o, s, a = e.cloneNode(!0),
                                l = ae(e);
                            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                                for (s = _e(a), i = 0, r = (o = _e(e)).length; i < r; i++) $e(o[i], s[i]);
                            if (t)
                                if (n)
                                    for (o = o || _e(e), s = s || _e(a), i = 0, r = o.length; i < r; i++) Me(o[i], s[i]);
                                else Me(e, a);
                            return (s = _e(a, "script")).length > 0 && we(s, !l && _e(e, "script")), a
                        },
                        cleanData: function (e) {
                            for (var t, n, i, r = C.event.special, o = 0; void 0 !== (n = e[o]); o++)
                                if (K(n)) {
                                    if (t = n[J.expando]) {
                                        if (t.events)
                                            for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                                        n[J.expando] = void 0
                                    }
                                    n[Z.expando] && (n[Z.expando] = void 0)
                                }
                        }
                    }), C.fn.extend({
                        detach: function (e) {
                            return He(this, e, !0)
                        },
                        remove: function (e) {
                            return He(this, e)
                        },
                        text: function (e) {
                            return V(this, (function (e) {
                                return void 0 === e ? C.text(this) : this.empty().each((function () {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                }))
                            }), null, e, arguments.length)
                        },
                        append: function () {
                            return qe(this, arguments, (function (e) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
                            }))
                        },
                        prepend: function () {
                            return qe(this, arguments, (function (e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = je(this, e);
                                    t.insertBefore(e, t.firstChild)
                                }
                            }))
                        },
                        before: function () {
                            return qe(this, arguments, (function (e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            }))
                        },
                        after: function () {
                            return qe(this, arguments, (function (e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            }))
                        },
                        empty: function () {
                            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(_e(e, !1)), e.textContent = "");
                            return this
                        },
                        clone: function (e, t) {
                            return e = null != e && e, t = null == t ? e : t, this.map((function () {
                                return C.clone(this, e, t)
                            }))
                        },
                        html: function (e) {
                            return V(this, (function (e) {
                                var t = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !Le.test(e) && !be[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = C.htmlPrefilter(e);
                                    try {
                                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(_e(t, !1)), t.innerHTML = e);
                                        t = 0
                                    } catch (e) {}
                                }
                                t && this.empty().append(e)
                            }), null, e, arguments.length)
                        },
                        replaceWith: function () {
                            var e = [];
                            return qe(this, arguments, (function (t) {
                                var n = this.parentNode;
                                C.inArray(this, e) < 0 && (C.cleanData(_e(this)), n && n.replaceChild(t, this))
                            }), e)
                        }
                    }), C.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function (e, t) {
                        C.fn[e] = function (e) {
                            for (var n, i = [], r = C(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), C(r[s])[t](n), c.apply(i, n.get());
                            return this.pushStack(i)
                        }
                    }));
                    var Re = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
                        Fe = /^--/,
                        Be = function (e) {
                            var t = e.ownerDocument.defaultView;
                            return t && t.opener || (t = i), t.getComputedStyle(e)
                        },
                        We = function (e, t, n) {
                            var i, r, o = {};
                            for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                            for (r in i = n.call(e), t) e.style[r] = o[r];
                            return i
                        },
                        ze = new RegExp(oe.join("|"), "i"),
                        Ve = "[\\x20\\t\\r\\n\\f]",
                        Xe = new RegExp("^" + Ve + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Ve + "+$", "g");

                    function Ue(e, t, n) {
                        var i, r, o, s, a = Fe.test(t),
                            l = e.style;
                        return (n = n || Be(e)) && (s = n.getPropertyValue(t) || n[t], a && s && (s = s.replace(Xe, "$1") || void 0), "" !== s || ae(e) || (s = C.style(e, t)), !m.pixelBoxStyles() && Re.test(s) && ze.test(t) && (i = l.width, r = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = s, s = n.width, l.width = i, l.minWidth = r, l.maxWidth = o)), void 0 !== s ? s + "" : s
                    }

                    function Ye(e, t) {
                        return {
                            get: function () {
                                if (!e()) return (this.get = t).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }! function () {
                        function e() {
                            if (u) {
                                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(c).appendChild(u);
                                var e = i.getComputedStyle(u);
                                n = "1%" !== e.top, l = 12 === t(e.marginLeft), u.style.right = "60%", s = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", o = 12 === t(u.offsetWidth / 3), se.removeChild(c), u = null
                            }
                        }

                        function t(e) {
                            return Math.round(parseFloat(e))
                        }
                        var n, r, o, s, a, l, c = b.createElement("div"),
                            u = b.createElement("div");
                        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === u.style.backgroundClip, C.extend(m, {
                            boxSizingReliable: function () {
                                return e(), r
                            },
                            pixelBoxStyles: function () {
                                return e(), s
                            },
                            pixelPosition: function () {
                                return e(), n
                            },
                            reliableMarginLeft: function () {
                                return e(), l
                            },
                            scrollboxSize: function () {
                                return e(), o
                            },
                            reliableTrDimensions: function () {
                                var e, t, n, r;
                                return null == a && (e = b.createElement("table"), t = b.createElement("tr"), n = b.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", se.appendChild(e).appendChild(t).appendChild(n), r = i.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, se.removeChild(e)), a
                            }
                        }))
                    }();
                    var Qe = ["Webkit", "Moz", "ms"],
                        Ke = b.createElement("div").style,
                        Ge = {};

                    function Je(e) {
                        return C.cssProps[e] || Ge[e] || (e in Ke ? e : Ge[e] = function (e) {
                            for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;)
                                if ((e = Qe[n] + t) in Ke) return e
                        }(e) || e)
                    }
                    var Ze = /^(none|table(?!-c[ea]).+)/,
                        et = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        tt = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        };

                    function nt(e, t, n) {
                        var i = re.exec(t);
                        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
                    }

                    function it(e, t, n, i, r, o) {
                        var s = "width" === t ? 1 : 0,
                            a = 0,
                            l = 0;
                        if (n === (i ? "border" : "content")) return 0;
                        for (; s < 4; s += 2) "margin" === n && (l += C.css(e, n + oe[s], !0, r)), i ? ("content" === n && (l -= C.css(e, "padding" + oe[s], !0, r)), "margin" !== n && (l -= C.css(e, "border" + oe[s] + "Width", !0, r))) : (l += C.css(e, "padding" + oe[s], !0, r), "padding" !== n ? l += C.css(e, "border" + oe[s] + "Width", !0, r) : a += C.css(e, "border" + oe[s] + "Width", !0, r));
                        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
                    }

                    function rt(e, t, n) {
                        var i = Be(e),
                            r = (!m.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
                            o = r,
                            s = Ue(e, t, i),
                            a = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (Re.test(s)) {
                            if (!n) return s;
                            s = "auto"
                        }
                        return (!m.boxSizingReliable() && r || !m.reliableTrDimensions() && L(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === C.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === C.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + it(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
                    }

                    function ot(e, t, n, i, r) {
                        return new ot.prototype.init(e, t, n, i, r)
                    }
                    C.extend({
                        cssHooks: {
                            opacity: {
                                get: function (e, t) {
                                    if (t) {
                                        var n = Ue(e, "opacity");
                                        return "" === n ? "1" : n
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {},
                        style: function (e, t, n, i) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var r, o, s, a = Q(t),
                                    l = Fe.test(t),
                                    c = e.style;
                                if (l || (t = Je(a)), s = C.cssHooks[t] || C.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : c[t];
                                "string" == (o = typeof n) && (r = re.exec(n)) && r[1] && (n = ue(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (C.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
                            }
                        },
                        css: function (e, t, n, i) {
                            var r, o, s, a = Q(t);
                            return Fe.test(t) || (t = Je(a)), (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Ue(e, t, i)), "normal" === r && t in tt && (r = tt[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
                        }
                    }), C.each(["height", "width"], (function (e, t) {
                        C.cssHooks[t] = {
                            get: function (e, n, i) {
                                if (n) return !Ze.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, i) : We(e, et, (function () {
                                    return rt(e, t, i)
                                }))
                            },
                            set: function (e, n, i) {
                                var r, o = Be(e),
                                    s = !m.scrollboxSize() && "absolute" === o.position,
                                    a = (s || i) && "border-box" === C.css(e, "boxSizing", !1, o),
                                    l = i ? it(e, t, i, a, o) : 0;
                                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - it(e, t, "border", !1, o) - .5)), l && (r = re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = C.css(e, t)), nt(0, n, l)
                            }
                        }
                    })), C.cssHooks.marginLeft = Ye(m.reliableMarginLeft, (function (e, t) {
                        if (t) return (parseFloat(Ue(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                            marginLeft: 0
                        }, (function () {
                            return e.getBoundingClientRect().left
                        }))) + "px"
                    })), C.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function (e, t) {
                        C.cssHooks[e + t] = {
                            expand: function (n) {
                                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                                return r
                            }
                        }, "margin" !== e && (C.cssHooks[e + t].set = nt)
                    })), C.fn.extend({
                        css: function (e, t) {
                            return V(this, (function (e, t, n) {
                                var i, r, o = {},
                                    s = 0;
                                if (Array.isArray(t)) {
                                    for (i = Be(e), r = t.length; s < r; s++) o[t[s]] = C.css(e, t[s], !1, i);
                                    return o
                                }
                                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
                            }), e, t, arguments.length > 1)
                        }
                    }), C.Tween = ot, ot.prototype = {
                        constructor: ot,
                        init: function (e, t, n, i, r, o) {
                            this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (C.cssNumber[n] ? "" : "px")
                        },
                        cur: function () {
                            var e = ot.propHooks[this.prop];
                            return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
                        },
                        run: function (e) {
                            var t, n = ot.propHooks[this.prop];
                            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ot.propHooks._default.set(this), this
                        }
                    }, ot.prototype.init.prototype = ot.prototype, ot.propHooks = {
                        _default: {
                            get: function (e) {
                                var t;
                                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                            },
                            set: function (e) {
                                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Je(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
                            }
                        }
                    }, ot.propHooks.scrollTop = ot.propHooks.scrollLeft = {
                        set: function (e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                        }
                    }, C.easing = {
                        linear: function (e) {
                            return e
                        },
                        swing: function (e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        },
                        _default: "swing"
                    }, C.fx = ot.prototype.init, C.fx.step = {};
                    var st, at, lt = /^(?:toggle|show|hide)$/,
                        ct = /queueHooks$/;

                    function ut() {
                        at && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(ut) : i.setTimeout(ut, C.fx.interval), C.fx.tick())
                    }

                    function ft() {
                        return i.setTimeout((function () {
                            st = void 0
                        })), st = Date.now()
                    }

                    function dt(e, t) {
                        var n, i = 0,
                            r = {
                                height: e
                            };
                        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = oe[i])] = r["padding" + n] = e;
                        return t && (r.opacity = r.width = e), r
                    }

                    function ht(e, t, n) {
                        for (var i, r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                            if (i = r[o].call(n, t, e)) return i
                    }

                    function pt(e, t, n) {
                        var i, r, o = 0,
                            s = pt.prefilters.length,
                            a = C.Deferred().always((function () {
                                delete l.elem
                            })),
                            l = function () {
                                if (r) return !1;
                                for (var t = st || ft(), n = Math.max(0, c.startTime + c.duration - t), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(i);
                                return a.notifyWith(e, [c, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
                            },
                            c = a.promise({
                                elem: e,
                                props: C.extend({}, t),
                                opts: C.extend(!0, {
                                    specialEasing: {},
                                    easing: C.easing._default
                                }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: st || ft(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function (t, n) {
                                    var i = C.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                                    return c.tweens.push(i), i
                                },
                                stop: function (t) {
                                    var n = 0,
                                        i = t ? c.tweens.length : 0;
                                    if (r) return this;
                                    for (r = !0; n < i; n++) c.tweens[n].run(1);
                                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                                }
                            }),
                            u = c.props;
                        for (function (e, t) {
                                var n, i, r, o, s;
                                for (n in e)
                                    if (r = t[i = Q(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = C.cssHooks[i]) && "expand" in s)
                                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                                    else t[i] = r
                            }(u, c.opts.specialEasing); o < s; o++)
                            if (i = pt.prefilters[o].call(c, e, u, c.opts)) return v(i.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)), i;
                        return C.map(u, ht, c), v(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
                            elem: e,
                            anim: c,
                            queue: c.opts.queue
                        })), c
                    }
                    C.Animation = C.extend(pt, {
                            tweeners: {
                                "*": [function (e, t) {
                                    var n = this.createTween(e, t);
                                    return ue(n.elem, e, re.exec(t), n), n
                                }]
                            },
                            tweener: function (e, t) {
                                v(e) ? (t = e, e = ["*"]) : e = e.match(q);
                                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
                            },
                            prefilters: [function (e, t, n) {
                                var i, r, o, s, a, l, c, u, f = "width" in t || "height" in t,
                                    d = this,
                                    h = {},
                                    p = e.style,
                                    g = e.nodeType && ce(e),
                                    m = J.get(e, "fxshow");
                                for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
                                        s.unqueued || a()
                                    }), s.unqueued++, d.always((function () {
                                        d.always((function () {
                                            s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
                                        }))
                                    }))), t)
                                    if (r = t[i], lt.test(r)) {
                                        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                                            if ("show" !== r || !m || void 0 === m[i]) continue;
                                            g = !0
                                        }
                                        h[i] = m && m[i] || C.style(e, i)
                                    } if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h))
                                    for (i in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = J.get(e, "display")), "none" === (u = C.css(e, "display")) && (c ? u = c : (he([e], !0), c = e.style.display || c, u = C.css(e, "display"), he([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === C.css(e, "float") && (l || (d.done((function () {
                                            p.display = c
                                        })), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always((function () {
                                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                                        }))), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {
                                        display: c
                                    }), o && (m.hidden = !g), g && he([e], !0), d.done((function () {
                                        for (i in g || he([e]), J.remove(e, "fxshow"), h) C.style(e, i, h[i])
                                    }))), l = ht(g ? m[i] : 0, i, d), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                            }],
                            prefilter: function (e, t) {
                                t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
                            }
                        }), C.speed = function (e, t, n) {
                            var i = e && "object" == typeof e ? C.extend({}, e) : {
                                complete: n || !n && t || v(e) && e,
                                duration: e,
                                easing: n && t || t && !v(t) && t
                            };
                            return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                                v(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
                            }, i
                        }, C.fn.extend({
                            fadeTo: function (e, t, n, i) {
                                return this.filter(ce).css("opacity", 0).show().end().animate({
                                    opacity: t
                                }, e, n, i)
                            },
                            animate: function (e, t, n, i) {
                                var r = C.isEmptyObject(e),
                                    o = C.speed(t, n, i),
                                    s = function () {
                                        var t = pt(this, C.extend({}, e), o);
                                        (r || J.get(this, "finish")) && t.stop(!0)
                                    };
                                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                            },
                            stop: function (e, t, n) {
                                var i = function (e) {
                                    var t = e.stop;
                                    delete e.stop, t(n)
                                };
                                return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function () {
                                    var t = !0,
                                        r = null != e && e + "queueHooks",
                                        o = C.timers,
                                        s = J.get(this);
                                    if (r) s[r] && s[r].stop && i(s[r]);
                                    else
                                        for (r in s) s[r] && s[r].stop && ct.test(r) && i(s[r]);
                                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                                    !t && n || C.dequeue(this, e)
                                }))
                            },
                            finish: function (e) {
                                return !1 !== e && (e = e || "fx"), this.each((function () {
                                    var t, n = J.get(this),
                                        i = n[e + "queue"],
                                        r = n[e + "queueHooks"],
                                        o = C.timers,
                                        s = i ? i.length : 0;
                                    for (n.finish = !0, C.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                    delete n.finish
                                }))
                            }
                        }), C.each(["toggle", "show", "hide"], (function (e, t) {
                            var n = C.fn[t];
                            C.fn[t] = function (e, i, r) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(dt(t, !0), e, i, r)
                            }
                        })), C.each({
                            slideDown: dt("show"),
                            slideUp: dt("hide"),
                            slideToggle: dt("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function (e, t) {
                            C.fn[e] = function (e, n, i) {
                                return this.animate(t, e, n, i)
                            }
                        })), C.timers = [], C.fx.tick = function () {
                            var e, t = 0,
                                n = C.timers;
                            for (st = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || C.fx.stop(), st = void 0
                        }, C.fx.timer = function (e) {
                            C.timers.push(e), C.fx.start()
                        }, C.fx.interval = 13, C.fx.start = function () {
                            at || (at = !0, ut())
                        }, C.fx.stop = function () {
                            at = null
                        }, C.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, C.fn.delay = function (e, t) {
                            return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function (t, n) {
                                var r = i.setTimeout(t, e);
                                n.stop = function () {
                                    i.clearTimeout(r)
                                }
                            }))
                        },
                        function () {
                            var e = b.createElement("input"),
                                t = b.createElement("select").appendChild(b.createElement("option"));
                            e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = b.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
                        }();
                    var gt, mt = C.expr.attrHandle;
                    C.fn.extend({
                        attr: function (e, t) {
                            return V(this, C.attr, e, t, arguments.length > 1)
                        },
                        removeAttr: function (e) {
                            return this.each((function () {
                                C.removeAttr(this, e)
                            }))
                        }
                    }), C.extend({
                        attr: function (e, t, n) {
                            var i, r, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === o && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? gt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = C.find.attr(e, t)) ? void 0 : i)
                        },
                        attrHooks: {
                            type: {
                                set: function (e, t) {
                                    if (!m.radioValue && "radio" === t && L(e, "input")) {
                                        var n = e.value;
                                        return e.setAttribute("type", t), n && (e.value = n), t
                                    }
                                }
                            }
                        },
                        removeAttr: function (e, t) {
                            var n, i = 0,
                                r = t && t.match(q);
                            if (r && 1 === e.nodeType)
                                for (; n = r[i++];) e.removeAttribute(n)
                        }
                    }), gt = {
                        set: function (e, t, n) {
                            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
                        }
                    }, C.each(C.expr.match.bool.source.match(/\w+/g), (function (e, t) {
                        var n = mt[t] || C.find.attr;
                        mt[t] = function (e, t, i) {
                            var r, o, s = t.toLowerCase();
                            return i || (o = mt[s], mt[s] = r, r = null != n(e, t, i) ? s : null, mt[s] = o), r
                        }
                    }));
                    var vt = /^(?:input|select|textarea|button)$/i,
                        yt = /^(?:a|area)$/i;

                    function bt(e) {
                        return (e.match(q) || []).join(" ")
                    }

                    function _t(e) {
                        return e.getAttribute && e.getAttribute("class") || ""
                    }

                    function wt(e) {
                        return Array.isArray(e) ? e : "string" == typeof e && e.match(q) || []
                    }
                    C.fn.extend({
                        prop: function (e, t) {
                            return V(this, C.prop, e, t, arguments.length > 1)
                        },
                        removeProp: function (e) {
                            return this.each((function () {
                                delete this[C.propFix[e] || e]
                            }))
                        }
                    }), C.extend({
                        prop: function (e, t, n) {
                            var i, r, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function (e) {
                                    var t = C.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), m.optSelected || (C.propHooks.selected = {
                        get: function (e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null
                        },
                        set: function (e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                        }
                    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function () {
                        C.propFix[this.toLowerCase()] = this
                    })), C.fn.extend({
                        addClass: function (e) {
                            var t, n, i, r, o, s;
                            return v(e) ? this.each((function (t) {
                                C(this).addClass(e.call(this, t, _t(this)))
                            })) : (t = wt(e)).length ? this.each((function () {
                                if (i = _t(this), n = 1 === this.nodeType && " " + bt(i) + " ") {
                                    for (o = 0; o < t.length; o++) r = t[o], n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                                    s = bt(n), i !== s && this.setAttribute("class", s)
                                }
                            })) : this
                        },
                        removeClass: function (e) {
                            var t, n, i, r, o, s;
                            return v(e) ? this.each((function (t) {
                                C(this).removeClass(e.call(this, t, _t(this)))
                            })) : arguments.length ? (t = wt(e)).length ? this.each((function () {
                                if (i = _t(this), n = 1 === this.nodeType && " " + bt(i) + " ") {
                                    for (o = 0; o < t.length; o++)
                                        for (r = t[o]; n.indexOf(" " + r + " ") > -1;) n = n.replace(" " + r + " ", " ");
                                    s = bt(n), i !== s && this.setAttribute("class", s)
                                }
                            })) : this : this.attr("class", "")
                        },
                        toggleClass: function (e, t) {
                            var n, i, r, o, s = typeof e,
                                a = "string" === s || Array.isArray(e);
                            return v(e) ? this.each((function (n) {
                                C(this).toggleClass(e.call(this, n, _t(this), t), t)
                            })) : "boolean" == typeof t && a ? t ? this.addClass(e) : this.removeClass(e) : (n = wt(e), this.each((function () {
                                if (a)
                                    for (o = C(this), r = 0; r < n.length; r++) i = n[r], o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                                else void 0 !== e && "boolean" !== s || ((i = _t(this)) && J.set(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : J.get(this, "__className__") || ""))
                            })))
                        },
                        hasClass: function (e) {
                            var t, n, i = 0;
                            for (t = " " + e + " "; n = this[i++];)
                                if (1 === n.nodeType && (" " + bt(_t(n)) + " ").indexOf(t) > -1) return !0;
                            return !1
                        }
                    });
                    var xt = /\r/g;
                    C.fn.extend({
                        val: function (e) {
                            var t, n, i, r = this[0];
                            return arguments.length ? (i = v(e), this.each((function (n) {
                                var r;
                                1 === this.nodeType && (null == (r = i ? e.call(this, n, C(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = C.map(r, (function (e) {
                                    return null == e ? "" : e + ""
                                }))), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                            }))) : r ? (t = C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(xt, "") : null == n ? "" : n : void 0
                        }
                    }), C.extend({
                        valHooks: {
                            option: {
                                get: function (e) {
                                    var t = C.find.attr(e, "value");
                                    return null != t ? t : bt(C.text(e))
                                }
                            },
                            select: {
                                get: function (e) {
                                    var t, n, i, r = e.options,
                                        o = e.selectedIndex,
                                        s = "select-one" === e.type,
                                        a = s ? null : [],
                                        l = s ? o + 1 : r.length;
                                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                                            if (t = C(n).val(), s) return t;
                                            a.push(t)
                                        } return a
                                },
                                set: function (e, t) {
                                    for (var n, i, r = e.options, o = C.makeArray(t), s = r.length; s--;)((i = r[s]).selected = C.inArray(C.valHooks.option.get(i), o) > -1) && (n = !0);
                                    return n || (e.selectedIndex = -1), o
                                }
                            }
                        }
                    }), C.each(["radio", "checkbox"], (function () {
                        C.valHooks[this] = {
                            set: function (e, t) {
                                if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1
                            }
                        }, m.checkOn || (C.valHooks[this].get = function (e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        })
                    })), m.focusin = "onfocusin" in i;
                    var Tt = /^(?:focusinfocus|focusoutblur)$/,
                        Ct = function (e) {
                            e.stopPropagation()
                        };
                    C.extend(C.event, {
                        trigger: function (e, t, n, r) {
                            var o, s, a, l, c, u, f, d, p = [n || b],
                                g = h.call(e, "type") ? e.type : e,
                                m = h.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (s = d = a = n = n || b, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(g + C.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), c = g.indexOf(":") < 0 && "on" + g, (e = e[C.expando] ? e : new C.Event(g, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), f = C.event.special[g] || {}, r || !f.trigger || !1 !== f.trigger.apply(n, t))) {
                                if (!r && !f.noBubble && !y(n)) {
                                    for (l = f.delegateType || g, Tt.test(l + g) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                                    a === (n.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || i)
                                }
                                for (o = 0;
                                    (s = p[o++]) && !e.isPropagationStopped();) d = s, e.type = o > 1 ? l : f.bindType || g, (u = (J.get(s, "events") || Object.create(null))[e.type] && J.get(s, "handle")) && u.apply(s, t), (u = c && s[c]) && u.apply && K(s) && (e.result = u.apply(s, t), !1 === e.result && e.preventDefault());
                                return e.type = g, r || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), t) || !K(n) || c && v(n[g]) && !y(n) && ((a = n[c]) && (n[c] = null), C.event.triggered = g, e.isPropagationStopped() && d.addEventListener(g, Ct), n[g](), e.isPropagationStopped() && d.removeEventListener(g, Ct), C.event.triggered = void 0, a && (n[c] = a)), e.result
                            }
                        },
                        simulate: function (e, t, n) {
                            var i = C.extend(new C.Event, n, {
                                type: e,
                                isSimulated: !0
                            });
                            C.event.trigger(i, null, t)
                        }
                    }), C.fn.extend({
                        trigger: function (e, t) {
                            return this.each((function () {
                                C.event.trigger(e, t, this)
                            }))
                        },
                        triggerHandler: function (e, t) {
                            var n = this[0];
                            if (n) return C.event.trigger(e, t, n, !0)
                        }
                    }), m.focusin || C.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function (e, t) {
                        var n = function (e) {
                            C.event.simulate(t, e.target, C.event.fix(e))
                        };
                        C.event.special[t] = {
                            setup: function () {
                                var i = this.ownerDocument || this.document || this,
                                    r = J.access(i, t);
                                r || i.addEventListener(e, n, !0), J.access(i, t, (r || 0) + 1)
                            },
                            teardown: function () {
                                var i = this.ownerDocument || this.document || this,
                                    r = J.access(i, t) - 1;
                                r ? J.access(i, t, r) : (i.removeEventListener(e, n, !0), J.remove(i, t))
                            }
                        }
                    }));
                    var Et = i.location,
                        At = {
                            guid: Date.now()
                        },
                        kt = /\?/;
                    C.parseXML = function (e) {
                        var t, n;
                        if (!e || "string" != typeof e) return null;
                        try {
                            t = (new i.DOMParser).parseFromString(e, "text/xml")
                        } catch (e) {}
                        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, (function (e) {
                            return e.textContent
                        })).join("\n") : e)), t
                    };
                    var St = /\[\]$/,
                        Nt = /\r?\n/g,
                        Lt = /^(?:submit|button|image|reset|file)$/i,
                        Ot = /^(?:input|select|textarea|keygen)/i;

                    function Dt(e, t, n, i) {
                        var r;
                        if (Array.isArray(t)) C.each(t, (function (t, r) {
                            n || St.test(e) ? i(e, r) : Dt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                        }));
                        else if (n || "object" !== x(t)) i(e, t);
                        else
                            for (r in t) Dt(e + "[" + r + "]", t[r], n, i)
                    }
                    C.param = function (e, t) {
                        var n, i = [],
                            r = function (e, t) {
                                var n = v(t) ? t() : t;
                                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                            };
                        if (null == e) return "";
                        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, (function () {
                            r(this.name, this.value)
                        }));
                        else
                            for (n in e) Dt(n, e[n], t, r);
                        return i.join("&")
                    }, C.fn.extend({
                        serialize: function () {
                            return C.param(this.serializeArray())
                        },
                        serializeArray: function () {
                            return this.map((function () {
                                var e = C.prop(this, "elements");
                                return e ? C.makeArray(e) : this
                            })).filter((function () {
                                var e = this.type;
                                return this.name && !C(this).is(":disabled") && Ot.test(this.nodeName) && !Lt.test(e) && (this.checked || !me.test(e))
                            })).map((function (e, t) {
                                var n = C(this).val();
                                return null == n ? null : Array.isArray(n) ? C.map(n, (function (e) {
                                    return {
                                        name: t.name,
                                        value: e.replace(Nt, "\r\n")
                                    }
                                })) : {
                                    name: t.name,
                                    value: n.replace(Nt, "\r\n")
                                }
                            })).get()
                        }
                    });
                    var jt = /%20/g,
                        Pt = /#.*$/,
                        It = /([?&])_=[^&]*/,
                        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        $t = /^(?:GET|HEAD)$/,
                        qt = /^\/\//,
                        Ht = {},
                        Rt = {},
                        Ft = "*/".concat("*"),
                        Bt = b.createElement("a");

                    function Wt(e) {
                        return function (t, n) {
                            "string" != typeof t && (n = t, t = "*");
                            var i, r = 0,
                                o = t.toLowerCase().match(q) || [];
                            if (v(n))
                                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                        }
                    }

                    function zt(e, t, n, i) {
                        var r = {},
                            o = e === Rt;

                        function s(a) {
                            var l;
                            return r[a] = !0, C.each(e[a] || [], (function (e, a) {
                                var c = a(t, n, i);
                                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), s(c), !1)
                            })), l
                        }
                        return s(t.dataTypes[0]) || !r["*"] && s("*")
                    }

                    function Vt(e, t) {
                        var n, i, r = C.ajaxSettings.flatOptions || {};
                        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                        return i && C.extend(!0, e, i), e
                    }
                    Bt.href = Et.href, C.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Et.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Ft,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": JSON.parse,
                                "text xml": C.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function (e, t) {
                            return t ? Vt(Vt(e, C.ajaxSettings), t) : Vt(C.ajaxSettings, e)
                        },
                        ajaxPrefilter: Wt(Ht),
                        ajaxTransport: Wt(Rt),
                        ajax: function (e, t) {
                            "object" == typeof e && (t = e, e = void 0), t = t || {};
                            var n, r, o, s, a, l, c, u, f, d, h = C.ajaxSetup({}, t),
                                p = h.context || h,
                                g = h.context && (p.nodeType || p.jquery) ? C(p) : C.event,
                                m = C.Deferred(),
                                v = C.Callbacks("once memory"),
                                y = h.statusCode || {},
                                _ = {},
                                w = {},
                                x = "canceled",
                                T = {
                                    readyState: 0,
                                    getResponseHeader: function (e) {
                                        var t;
                                        if (c) {
                                            if (!s)
                                                for (s = {}; t = Mt.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                            t = s[e.toLowerCase() + " "]
                                        }
                                        return null == t ? null : t.join(", ")
                                    },
                                    getAllResponseHeaders: function () {
                                        return c ? o : null
                                    },
                                    setRequestHeader: function (e, t) {
                                        return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, _[e] = t), this
                                    },
                                    overrideMimeType: function (e) {
                                        return null == c && (h.mimeType = e), this
                                    },
                                    statusCode: function (e) {
                                        var t;
                                        if (e)
                                            if (c) T.always(e[T.status]);
                                            else
                                                for (t in e) y[t] = [y[t], e[t]];
                                        return this
                                    },
                                    abort: function (e) {
                                        var t = e || x;
                                        return n && n.abort(t), E(0, t), this
                                    }
                                };
                            if (m.promise(T), h.url = ((e || h.url || Et.href) + "").replace(qt, Et.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""], null == h.crossDomain) {
                                l = b.createElement("a");
                                try {
                                    l.href = h.url, l.href = l.href, h.crossDomain = Bt.protocol + "//" + Bt.host != l.protocol + "//" + l.host
                                } catch (e) {
                                    h.crossDomain = !0
                                }
                            }
                            if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), zt(Ht, h, t, T), c) return T;
                            for (f in (u = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !$t.test(h.type), r = h.url.replace(Pt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(jt, "+")) : (d = h.url.slice(r.length), h.data && (h.processData || "string" == typeof h.data) && (r += (kt.test(r) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (r = r.replace(It, "$1"), d = (kt.test(r) ? "&" : "?") + "_=" + At.guid++ + d), h.url = r + d), h.ifModified && (C.lastModified[r] && T.setRequestHeader("If-Modified-Since", C.lastModified[r]), C.etag[r] && T.setRequestHeader("If-None-Match", C.etag[r])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && T.setRequestHeader("Content-Type", h.contentType), T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]), h.headers) T.setRequestHeader(f, h.headers[f]);
                            if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || c)) return T.abort();
                            if (x = "abort", v.add(h.complete), T.done(h.success), T.fail(h.error), n = zt(Rt, h, t, T)) {
                                if (T.readyState = 1, u && g.trigger("ajaxSend", [T, h]), c) return T;
                                h.async && h.timeout > 0 && (a = i.setTimeout((function () {
                                    T.abort("timeout")
                                }), h.timeout));
                                try {
                                    c = !1, n.send(_, E)
                                } catch (e) {
                                    if (c) throw e;
                                    E(-1, e)
                                }
                            } else E(-1, "No Transport");

                            function E(e, t, s, l) {
                                var f, d, b, _, w, x = t;
                                c || (c = !0, a && i.clearTimeout(a), n = void 0, o = l || "", T.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, s && (_ = function (e, t, n) {
                                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                    if (i)
                                        for (r in a)
                                            if (a[r] && a[r].test(i)) {
                                                l.unshift(r);
                                                break
                                            } if (l[0] in n) o = l[0];
                                    else {
                                        for (r in n) {
                                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                                o = r;
                                                break
                                            }
                                            s || (s = r)
                                        }
                                        o = o || s
                                    }
                                    if (o) return o !== l[0] && l.unshift(o), n[o]
                                }(h, T, s)), !f && C.inArray("script", h.dataTypes) > -1 && C.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function () {}), _ = function (e, t, n, i) {
                                    var r, o, s, a, l, c = {},
                                        u = e.dataTypes.slice();
                                    if (u[1])
                                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                                    for (o = u.shift(); o;)
                                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
                                            if ("*" === o) o = l;
                                            else if ("*" !== l && l !== o) {
                                        if (!(s = c[l + " " + o] || c["* " + o]))
                                            for (r in c)
                                                if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0], u.unshift(a[1]));
                                                    break
                                                } if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else try {
                                                t = s(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? e : "No conversion from " + l + " to " + o
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: t
                                    }
                                }(h, _, T, f), f ? (h.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (C.lastModified[r] = w), (w = T.getResponseHeader("etag")) && (C.etag[r] = w)), 204 === e || "HEAD" === h.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = _.state, d = _.data, f = !(b = _.error))) : (b = x, !e && x || (x = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || x) + "", f ? m.resolveWith(p, [d, x, T]) : m.rejectWith(p, [T, x, b]), T.statusCode(y), y = void 0, u && g.trigger(f ? "ajaxSuccess" : "ajaxError", [T, h, f ? d : b]), v.fireWith(p, [T, x]), u && (g.trigger("ajaxComplete", [T, h]), --C.active || C.event.trigger("ajaxStop")))
                            }
                            return T
                        },
                        getJSON: function (e, t, n) {
                            return C.get(e, t, n, "json")
                        },
                        getScript: function (e, t) {
                            return C.get(e, void 0, t, "script")
                        }
                    }), C.each(["get", "post"], (function (e, t) {
                        C[t] = function (e, n, i, r) {
                            return v(n) && (r = r || i, i = n, n = void 0), C.ajax(C.extend({
                                url: e,
                                type: t,
                                dataType: r,
                                data: n,
                                success: i
                            }, C.isPlainObject(e) && e))
                        }
                    })), C.ajaxPrefilter((function (e) {
                        var t;
                        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                    })), C._evalUrl = function (e, t, n) {
                        return C.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function () {}
                            },
                            dataFilter: function (e) {
                                C.globalEval(e, t, n)
                            }
                        })
                    }, C.fn.extend({
                        wrapAll: function (e) {
                            var t;
                            return this[0] && (v(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function () {
                                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                                return e
                            })).append(this)), this
                        },
                        wrapInner: function (e) {
                            return v(e) ? this.each((function (t) {
                                C(this).wrapInner(e.call(this, t))
                            })) : this.each((function () {
                                var t = C(this),
                                    n = t.contents();
                                n.length ? n.wrapAll(e) : t.append(e)
                            }))
                        },
                        wrap: function (e) {
                            var t = v(e);
                            return this.each((function (n) {
                                C(this).wrapAll(t ? e.call(this, n) : e)
                            }))
                        },
                        unwrap: function (e) {
                            return this.parent(e).not("body").each((function () {
                                C(this).replaceWith(this.childNodes)
                            })), this
                        }
                    }), C.expr.pseudos.hidden = function (e) {
                        return !C.expr.pseudos.visible(e)
                    }, C.expr.pseudos.visible = function (e) {
                        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                    }, C.ajaxSettings.xhr = function () {
                        try {
                            return new i.XMLHttpRequest
                        } catch (e) {}
                    };
                    var Xt = {
                            0: 200,
                            1223: 204
                        },
                        Ut = C.ajaxSettings.xhr();
                    m.cors = !!Ut && "withCredentials" in Ut, m.ajax = Ut = !!Ut, C.ajaxTransport((function (e) {
                        var t, n;
                        if (m.cors || Ut && !e.crossDomain) return {
                            send: function (r, o) {
                                var s, a = e.xhr();
                                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                                for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                                t = function (e) {
                                    return function () {
                                        t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Xt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                                    }
                                }, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function () {
                                    4 === a.readyState && i.setTimeout((function () {
                                        t && n()
                                    }))
                                }, t = t("abort");
                                try {
                                    a.send(e.hasContent && e.data || null)
                                } catch (e) {
                                    if (t) throw e
                                }
                            },
                            abort: function () {
                                t && t()
                            }
                        }
                    })), C.ajaxPrefilter((function (e) {
                        e.crossDomain && (e.contents.script = !1)
                    })), C.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function (e) {
                                return C.globalEval(e), e
                            }
                        }
                    }), C.ajaxPrefilter("script", (function (e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                    })), C.ajaxTransport("script", (function (e) {
                        var t, n;
                        if (e.crossDomain || e.scriptAttrs) return {
                            send: function (i, r) {
                                t = C("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function (e) {
                                    t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                                }), b.head.appendChild(t[0])
                            },
                            abort: function () {
                                n && n()
                            }
                        }
                    }));
                    var Yt, Qt = [],
                        Kt = /(=)\?(?=&|$)|\?\?/;
                    C.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function () {
                            var e = Qt.pop() || C.expando + "_" + At.guid++;
                            return this[e] = !0, e
                        }
                    }), C.ajaxPrefilter("json jsonp", (function (e, t, n) {
                        var r, o, s, a = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
                        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Kt, "$1" + r) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
                            return s || C.error(r + " was not called"), s[0]
                        }, e.dataTypes[0] = "json", o = i[r], i[r] = function () {
                            s = arguments
                        }, n.always((function () {
                            void 0 === o ? C(i).removeProp(r) : i[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Qt.push(r)), s && v(o) && o(s[0]), s = o = void 0
                        })), "script"
                    })), m.createHTMLDocument = ((Yt = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Yt.childNodes.length), C.parseHTML = function (e, t, n) {
                        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href, t.head.appendChild(i)) : t = b), o = !n && [], (r = O.exec(e)) ? [t.createElement(r[1])] : (r = Te([e], t, o), o && o.length && C(o).remove(), C.merge([], r.childNodes)));
                        var i, r, o
                    }, C.fn.load = function (e, t, n) {
                        var i, r, o, s = this,
                            a = e.indexOf(" ");
                        return a > -1 && (i = bt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && C.ajax({
                            url: e,
                            type: r || "GET",
                            dataType: "html",
                            data: t
                        }).done((function (e) {
                            o = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
                        })).always(n && function (e, t) {
                            s.each((function () {
                                n.apply(this, o || [e.responseText, t, e])
                            }))
                        }), this
                    }, C.expr.pseudos.animated = function (e) {
                        return C.grep(C.timers, (function (t) {
                            return e === t.elem
                        })).length
                    }, C.offset = {
                        setOffset: function (e, t, n) {
                            var i, r, o, s, a, l, c = C.css(e, "position"),
                                u = C(e),
                                f = {};
                            "static" === c && (e.style.position = "relative"), a = u.offset(), o = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), v(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : u.css(f)
                        }
                    }, C.fn.extend({
                        offset: function (e) {
                            if (arguments.length) return void 0 === e ? this : this.each((function (t) {
                                C.offset.setOffset(this, e, t)
                            }));
                            var t, n, i = this[0];
                            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                                top: t.top + n.pageYOffset,
                                left: t.left + n.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            } : void 0
                        },
                        position: function () {
                            if (this[0]) {
                                var e, t, n, i = this[0],
                                    r = {
                                        top: 0,
                                        left: 0
                                    };
                                if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                                else {
                                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                                    e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0), r.left += C.css(e, "borderLeftWidth", !0))
                                }
                                return {
                                    top: t.top - r.top - C.css(i, "marginTop", !0),
                                    left: t.left - r.left - C.css(i, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function () {
                            return this.map((function () {
                                for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                                return e || se
                            }))
                        }
                    }), C.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function (e, t) {
                        var n = "pageYOffset" === t;
                        C.fn[e] = function (i) {
                            return V(this, (function (e, i, r) {
                                var o;
                                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
                            }), e, i, arguments.length)
                        }
                    })), C.each(["top", "left"], (function (e, t) {
                        C.cssHooks[t] = Ye(m.pixelPosition, (function (e, n) {
                            if (n) return n = Ue(e, t), Re.test(n) ? C(e).position()[t] + "px" : n
                        }))
                    })), C.each({
                        Height: "height",
                        Width: "width"
                    }, (function (e, t) {
                        C.each({
                            padding: "inner" + e,
                            content: t,
                            "": "outer" + e
                        }, (function (n, i) {
                            C.fn[i] = function (r, o) {
                                var s = arguments.length && (n || "boolean" != typeof r),
                                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                                return V(this, (function (t, n, r) {
                                    var o;
                                    return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? C.css(t, n, a) : C.style(t, n, r, a)
                                }), t, s ? r : void 0, s)
                            }
                        }))
                    })), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function (e, t) {
                        C.fn[t] = function (e) {
                            return this.on(t, e)
                        }
                    })), C.fn.extend({
                        bind: function (e, t, n) {
                            return this.on(e, null, t, n)
                        },
                        unbind: function (e, t) {
                            return this.off(e, null, t)
                        },
                        delegate: function (e, t, n, i) {
                            return this.on(t, e, n, i)
                        },
                        undelegate: function (e, t, n) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                        },
                        hover: function (e, t) {
                            return this.mouseenter(e).mouseleave(t || e)
                        }
                    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function (e, t) {
                        C.fn[t] = function (e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                        }
                    }));
                    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                    C.proxy = function (e, t) {
                        var n, i, r;
                        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = a.call(arguments, 2), r = function () {
                            return e.apply(t || this, i.concat(a.call(arguments)))
                        }, r.guid = e.guid = e.guid || C.guid++, r
                    }, C.holdReady = function (e) {
                        e ? C.readyWait++ : C.ready(!0)
                    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = L, C.isFunction = v, C.isWindow = y, C.camelCase = Q, C.type = x, C.now = Date.now, C.isNumeric = function (e) {
                        var t = C.type(e);
                        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                    }, C.trim = function (e) {
                        return null == e ? "" : (e + "").replace(Gt, "$1")
                    }, void 0 === (n = function () {
                        return C
                    }.apply(t, [])) || (e.exports = n);
                    var Jt = i.jQuery,
                        Zt = i.$;
                    return C.noConflict = function (e) {
                        return i.$ === C && (i.$ = Zt), e && i.jQuery === C && (i.jQuery = Jt), C
                    }, void 0 === r && (i.jQuery = i.$ = C), C
                }))
            }
        },
        t = {};

    function n(i) {
        var r = t[i];
        if (void 0 !== r) return r.exports;
        var o = t[i] = {
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        "use strict";
        var e = {};
        n.r(e), n.d(e, {
            afterMain: () => K,
            afterRead: () => U,
            afterWrite: () => Z,
            applyStyles: () => se,
            arrow: () => Ae,
            auto: () => I,
            basePlacements: () => M,
            beforeMain: () => Y,
            beforeRead: () => V,
            beforeWrite: () => G,
            bottom: () => D,
            clippingParents: () => H,
            computeStyles: () => Le,
            createPopper: () => ot,
            createPopperBase: () => rt,
            createPopperLite: () => st,
            detectOverflow: () => Ve,
            end: () => q,
            eventListeners: () => De,
            flip: () => Xe,
            hide: () => Qe,
            left: () => P,
            main: () => Q,
            modifierPhases: () => ee,
            offset: () => Ke,
            placements: () => z,
            popper: () => F,
            popperGenerator: () => it,
            popperOffsets: () => Ge,
            preventOverflow: () => Je,
            read: () => X,
            reference: () => B,
            right: () => j,
            start: () => $,
            top: () => O,
            variationPlacements: () => W,
            viewport: () => R,
            write: () => J
        });
        var t = {};
        n.r(t), n.d(t, {
            Alert: () => en,
            Button: () => nn,
            Carousel: () => Mn,
            Collapse: () => Kn,
            Dropdown: () => wi,
            Modal: () => nr,
            Offcanvas: () => _r,
            Popover: () => Wr,
            ScrollSpy: () => eo,
            Tab: () => wo,
            Toast: () => Mo,
            Tooltip: () => Rr
        });
        var i = {};

        function r(e) {
            var t = i.classPrefix;
            return "Forms" === e ? t + "0" : "Headings" === e ? t + "1" : "Images" === e ? t + "2" : "Landmarks" === e ? t + "3" : "Lists" === e ? t + "4" : "Interactive" === e ? t + "5" : "unrecognizedName"
        }

        function o() {
            var e;
            return {
                x: void 0 === window.pageXOffset ? (((e = document.documentElement) || (e = document.body.parentNode)) && "number" == typeof e.ScrollLeft ? e : document.body).ScrollLeft : window.pageXOffset,
                y: void 0 === window.pageYOffset ? (((e = document.documentElement) || (e = document.body.parentNode)) && "number" == typeof e.ScrollTop ? e : document.body).ScrollTop : window.pageYOffset
            }
        }
        Object.defineProperty(i, "classPrefix", {
            value: "a11yGfdXALm"
        }), Object.defineProperty(i, "globalPrefix", {
            value: "a11y"
        }), Object.defineProperty(i, "title", {
            value: "oaa-tools/bookmarklets"
        }), Object.defineProperty(i, "version", {
            value: "0.2.2"
        });
        var s = 1e5;

        function a(e) {
            return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, a(e)
        }
        var l = ["application", "banner", "complementary", "contentinfo", "form", "main", "navigation", "search", "alert", "alertdialog", "button", "checkbox", "dialog", "gridcell", "link", "log", "marquee", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "searchbox", "slider", "spinbutton", "status", "switch", "tab", "tabpanel", "textbox", "timer", "tooltip", "treeitem", "combobox", "grid", "listbox", "menu", "menubar", "radiogroup", "tablist", "tree", "treegrid", "article", "cell", "columnheader", "definition", "directory", "document", "group", "heading", "img", "list", "listitem", "math", "none", "note", "presentation", "region", "row", "rowgroup", "rowheader", "separator", "table", "text", "toolbar"];

        function c(e) {
            var t = e.tagName.toLowerCase(),
                n = e.type;
            if (e.hasAttribute("role")) return function (e) {
                for (var t, n = e.split(" "), i = function () {
                        var e = n[r].toLowerCase(),
                            t = l.find((function (t) {
                                return t === e
                            }));
                        if (t) return {
                            v: t
                        }
                    }, r = 0; r < n.length; r++)
                    if ("object" === a(t = i())) return t.v;
                return null
            }(h(e, "role"));
            switch (t) {
                case "a":
                case "area":
                case "link":
                    if (e.hasAttribute("href")) return "link";
                    break;
                case "article":
                    return "article";
                case "aside":
                    return "complementary";
                case "body":
                    return "document";
                case "button":
                case "summary":
                    return "button";
                case "datalist":
                case "select":
                    return "listbox";
                case "details":
                case "fieldset":
                    return "group";
                case "dialog":
                    return "dialog";
                case "dl":
                case "ol":
                case "ul":
                    return "list";
                case "footer":
                    if (!C(e, ["article", "section"])) return "contentinfo";
                    break;
                case "form":
                    return "form";
                case "h1":
                case "h2":
                case "h3":
                case "h4":
                case "h5":
                case "h6":
                    return "heading";
                case "header":
                    if (!C(e, ["article", "section"])) return "banner";
                    break;
                case "hr":
                    return "separator";
                case "img":
                    if (! function (e) {
                            var t = e.getAttribute("alt");
                            return null !== t && 0 === d(t).length
                        }(e)) return "img";
                    break;
                case "input":
                    if ("button" === n) return "button";
                    if ("checkbox" === n) return "checkbox";
                    if ("email" === n) return e.hasAttribute("list") ? "combobox" : "textbox";
                    if ("image" === n) return "button";
                    if ("number" === n) return "spinbutton";
                    if ("password" === n) return "textbox";
                    if ("radio" === n) return "radio";
                    if ("range" === n) return "slider";
                    if ("reset" === n) return "button";
                    if ("search" === n) return e.hasAttribute("list") ? "combobox" : "textbox";
                    if ("submit" === n) return "button";
                    if ("tel" === n) return e.hasAttribute("list") ? "combobox" : "textbox";
                    if ("text" === n) return e.hasAttribute("list") ? "combobox" : "textbox";
                    if ("url" === n) return e.hasAttribute("list") ? "combobox" : "textbox";
                    break;
                case "li":
                    if (function (e, t) {
                            var n = e.parentElement.tagName.toLowerCase();
                            return !!n && ["ol", "ul"].some((function (e) {
                                return n === e
                            }))
                        }(e)) return "listitem";
                    break;
                case "main":
                    return "main";
                case "menu":
                    if ("toolbar" === n) return "toolbar";
                    break;
                case "menuitem":
                    if ("command" === n) return "menuitem";
                    if ("checkbox" === n) return "menuitemcheckbox";
                    if ("radio" === n) return "menuitemradio";
                    break;
                case "meter":
                case "progress":
                    return "progressbar";
                case "nav":
                    return "navigation";
                case "option":
                    if (function (e) {
                            var t = e.parentElement,
                                n = t.tagName.toLowerCase(),
                                i = t.parentElement.tagName.toLowerCase();
                            return !("select" !== n && ("optgroup" !== n || "select" !== i) && "datalist" !== n)
                        }(e)) return "option";
                    break;
                case "output":
                    return "status";
                case "section":
                    return "region";
                case "tbody":
                case "tfoot":
                case "thead":
                    return "rowgroup";
                case "textarea":
                    return "textbox";
                case "th":
                    return "columnheader"
            }
            return null
        }

        function u(e) {
            return d(e.value)
        }

        function f(e) {
            var t;
            return (t = h(e, "aria-valuetext")).length || (t = h(e, "aria-valuenow")).length ? t : u(e)
        }

        function d(e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "").replace(/\s+/g, " ")
        }

        function h(e, t) {
            var n = e.getAttribute(t);
            return null === n ? "" : d(n)
        }

        function p(e) {
            var t = e.tagName.toLowerCase(),
                n = e.type;
            return "input" === t ? "hidden" !== n : !("button" !== t && "keygen" !== t && "meter" !== t && "output" !== t && "progress" !== t && "select" !== t && "textarea" !== t)
        }

        function g(e, t) {
            var n = t,
                i = getComputedStyle(e, ":before").content,
                r = getComputedStyle(e, ":after").content;
            return "none" !== i && (n = i + n), "none" !== r && (n += r), n
        }

        function m(e, t) {
            var n = "";
            if (e === t) return "";
            switch (e.nodeType) {
                case Node.ELEMENT_NODE:
                    if (function (e) {
                            var t = e.tagName.toLowerCase();
                            return !("img" !== t && "area" !== t) || !("input" !== t) && e.type && "image" === e.type
                        }(e)) n = h(e, "alt");
                    else if (function (e) {
                            var t = c(e);
                            return -1 !== ["textbox", "combobox", "listbox", "slider", "spinbutton"].indexOf(t)
                        }(e)) n = function (e) {
                        var t = c(e);
                        return "textbox" === t ? function (e) {
                            var t = e.tagName.toLowerCase(),
                                n = e.type;
                            return "input" === t && -1 !== ["email", "password", "search", "tel", "text", "url"].indexOf(n) || "textarea" === t ? u(e) : ""
                        }(e) : "combobox" === t ? function (e) {
                            var t = e.tagName.toLowerCase(),
                                n = e.type;
                            return "input" === t && -1 !== ["email", "search", "tel", "text", "url"].indexOf(n) ? u(e) : ""
                        }(e) : "listbox" === t ? function (e) {
                            if ("select" === e.tagName.toLowerCase()) {
                                for (var t = [], n = e.selectedOptions, i = 0; i < n.length; i++) {
                                    var r = d(n[i].value);
                                    r.length && t.push(r)
                                }
                                if (t.length) return t.join(" ")
                            }
                            return ""
                        }(e) : "slider" === t ? function (e) {
                            var t = e.tagName.toLowerCase(),
                                n = e.type;
                            return "input" === t && "range" === n ? f(e) : ""
                        }(e) : "spinbutton" === t ? function (e) {
                            var t = e.tagName.toLowerCase(),
                                n = e.type;
                            return "input" === t && "number" === n ? f(e) : ""
                        }(e) : ""
                    }(e);
                    else if (e.hasChildNodes()) {
                        for (var i, r = e.childNodes, o = [], s = 0; s < r.length; s++)(i = m(r[s], t)).length && o.push(i);
                        n = o.length ? o.join(" ") : ""
                    }
                    n = g(e, n);
                    break;
                case Node.TEXT_NODE:
                    n = d(e.textContent)
            }
            return n
        }

        function v(e, t) {
            var n = "";
            if (e.hasChildNodes()) {
                for (var i, r = e.childNodes, o = [], s = 0; s < r.length; s++)(i = m(r[s], t)).length && o.push(i);
                n = o.length ? o.join(" ") : ""
            }
            return g(e, n)
        }

        function y(e, t) {
            var n;
            return (n = h(e, t)).length ? {
                name: n,
                source: t
            } : null
        }

        function b(e) {
            var t = e.getAttribute("alt");
            return null === t ? null : (t = d(t)).length ? {
                name: t,
                source: "alt"
            } : {
                name: "<empty>",
                source: "alt"
            }
        }

        function _(e) {
            var t;
            return (t = v(e)).length ? {
                name: t,
                source: "contents"
            } : null
        }

        function w(e) {
            return e.length ? {
                name: e,
                source: "default"
            } : null
        }

        function x(e, t) {
            var n = e.querySelector(t);
            if (n) {
                var i = v(n);
                if (i.length) return {
                    name: i,
                    source: t + " element"
                }
            }
            return null
        }

        function T(e) {
            var t, n;
            return e.id && (n = document.querySelector('[for="' + e.id + '"]')) && (t = v(n, e)).length ? {
                name: t,
                source: "label reference"
            } : "function" == typeof e.closest && (n = e.closest("label")) && (t = v(n, e)).length ? {
                name: t,
                source: "label encapsulation"
            } : null
        }

        function C(e, t) {
            return !("function" != typeof e.closest) && t.some((function (t) {
                return null !== e.closest(t)
            }))
        }

        function E(e) {
            var t = e.targetList,
                n = e.cssClass,
                i = e.getInfo,
                r = e.evalInfo,
                a = e.dndFlag,
                l = 0;
            return t.forEach((function (e) {
                var t = document.querySelectorAll(e.selector);
                "function" == typeof e.filter && (t = Array.prototype.filter.call(t, e.filter)), Array.prototype.forEach.call(t, (function (t) {
                    if (function (e) {
                            return function e(t) {
                                if (t.nodeType === Node.DOCUMENT_NODE) return !0;
                                var n = window.getComputedStyle(t, null),
                                    i = n.getPropertyValue("display"),
                                    r = n.getPropertyValue("visibility"),
                                    o = t.getAttribute("hidden"),
                                    s = t.getAttribute("aria-hidden");
                                return "none" !== i && "hidden" !== r && null === o && "true" !== s && e(t.parentNode)
                            }(e)
                        }(t)) {
                        var c = i(t, e);
                        r && r(c, e);
                        var u = t.getBoundingClientRect(),
                            f = function (e, t, n) {
                                var i = Math.max,
                                    r = o(),
                                    a = document.createElement("div");
                                a.setAttribute("class", [n, "bootstrap-bm", "oaa-element-overlay"].join(" ")), a.startLeft = t.left + r.x + "px", a.startTop = t.top + r.y + "px", a.style.left = a.startLeft, a.style.top = a.startTop, a.style.width = i(t.width, 68) + "px", a.style.height = i(t.height, 27) + "px", a.style.borderColor = e.color, a.style.zIndex = s;
                                var l = document.createElement("div");
                                return l.setAttribute("class", "oaa-overlay-label"), l.style.backgroundColor = e.color, l.innerHTML = e.label, a.appendChild(l), a
                            }(e, u, n);
                        a && function (e) {
                            function t(e) {
                                e.style.zIndex = s += 100
                            }
                            var n = e.firstChild;
                            n.onmousedown = function (e) {
                                ! function (e, t, n) {
                                    function i(t) {
                                        t || (t = window.event);
                                        var n = o();
                                        e.style.left = t.clientX + n.x - f + "px", e.style.top = t.clientY + n.y - d + "px", e.style.cursor = "move", t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
                                    }

                                    function r(t) {
                                        t || (t = window.event), e.style.cursor = "grab", e.style.cursor = "-moz-grab", e.style.cursor = "-webkit-grab", document.removeEventListener ? (document.removeEventListener("mouseup", r, !0), document.removeEventListener("mousemove", i, !0)) : document.detachEvent && (e.detachEvent("onlosecapture", r), e.detachEvent("onmouseup", r), e.detachEvent("onmousemove", i), e.releaseCapture()), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
                                    }
                                    var s = o(),
                                        a = n.clientX + s.x,
                                        l = n.clientY + s.y,
                                        c = e.offsetLeft,
                                        u = e.offsetTop,
                                        f = a - c,
                                        d = l - u;
                                    t && t(e), document.addEventListener ? (document.addEventListener("mousemove", i, !0), document.addEventListener("mouseup", r, !0)) : document.attachEvent && (e.setCapture(), e.attachEvent("onmousemove", i), e.attachEvent("onmouseup", r), e.attachEvent("onlosecapture", r)), n.stopPropagation ? n.stopPropagation() : n.cancelBubble = !0, n.preventDefault ? n.preventDefault() : n.returnValue = !1
                                }(this.parentNode, t, e)
                            }, n.ondblclick = function () {
                                ! function (e) {
                                    e.style.left = e.startLeft, e.style.top = e.startTop
                                }(this.parentNode)
                            }
                        }(f);
                        var d = f.firstChild;
                        d.setAttribute("data-bs-toggle", "tooltip"), d.setAttribute("data-bs-title", function (e) {
                            var t = "",
                                n = e.title,
                                i = e.element,
                                r = e.grpLabels,
                                o = e.accName,
                                s = e.accDesc,
                                a = e.role,
                                l = e.props;
                            if (t += "=== " + n + " ===", i && (t += "\nELEMENT: " + i), r && r.length)
                                for (var c = r.length - 1; 0 <= c; c--) t += "\nGRP. LABEL: " + r[c].name + "\nFROM: " + r[c].source;
                            return o && (t += "\nACC. NAME: " + o.name + "\nFROM: " + o.source), s && (t += "\nACC. DESC: " + s.name + "\nFROM: " + s.source), a && (t += "\nROLE: " + a), l && (t += "\nPROPERTIES: " + l), t
                        }(c)), document.body.appendChild(f), l += 1
                    }
                }))
            })), l
        }

        function A(e) {
            var t = document.querySelectorAll("div." + e);
            Array.prototype.forEach.call(t, (function (e) {
                document.body.removeChild(e)
            }))
        }

        function k(e) {
            var t = window.innerWidth / 3.2,
                n = window.innerWidth / 2 - t / 2,
                i = o();
            e.style.width = t + "px", e.style.left = i.x + n + "px", e.style.top = i.y + 30 + "px"
        }

        function S() {
            this.GLOBAL_NAME = "a11yMessageDialog", this.CSS_CLASS = "oaa-message-dialog"
        }
        S.prototype.show = function (e, t) {
            var n, i, r = this,
                o = this.GLOBAL_NAME;
            window[o] || (window[o] = function (e, t) {
                var n = document.createElement("div"),
                    i = document.createElement("button");
                return n.className = e, k(n), i.onclick = function () {
                    return r.hide()
                }, n.appendChild(i), document.body.appendChild(n), n
            }(this.CSS_CLASS)), (n = document.createElement("h2")).innerHTML = e, window[o].appendChild(n), (i = document.createElement("div")).innerHTML = t, window[o].appendChild(i)
        }, S.prototype.hide = function () {
            var e = this.GLOBAL_NAME;
            window[e] && (function (e) {
                e && document.body.removeChild(e)
            }(window[e]), delete window[e])
        }, S.prototype.resize = function () {
            var e = this.GLOBAL_NAME;
            window[e] && k(window[e])
        };
        var N = n(755),
            L = n.n(N),
            O = "top",
            D = "bottom",
            j = "right",
            P = "left",
            I = "auto",
            M = [O, D, j, P],
            $ = "start",
            q = "end",
            H = "clippingParents",
            R = "viewport",
            F = "popper",
            B = "reference",
            W = M.reduce((function (e, t) {
                return e.concat([t + "-" + $, t + "-" + q])
            }), []),
            z = [].concat(M, [I]).reduce((function (e, t) {
                return e.concat([t, t + "-" + $, t + "-" + q])
            }), []),
            V = "beforeRead",
            X = "read",
            U = "afterRead",
            Y = "beforeMain",
            Q = "main",
            K = "afterMain",
            G = "beforeWrite",
            J = "write",
            Z = "afterWrite",
            ee = [V, X, U, Y, Q, K, G, J, Z];

        function te(e) {
            return e ? (e.nodeName || "").toLowerCase() : null
        }

        function ne(e) {
            if (null == e) return window;
            if ("[object Window]" !== e.toString()) {
                var t = e.ownerDocument;
                return t && t.defaultView || window
            }
            return e
        }

        function ie(e) {
            return e instanceof ne(e).Element || e instanceof Element
        }

        function re(e) {
            return e instanceof ne(e).HTMLElement || e instanceof HTMLElement
        }

        function oe(e) {
            return "undefined" != typeof ShadowRoot && (e instanceof ne(e).ShadowRoot || e instanceof ShadowRoot)
        }
        const se = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
                var t = e.state;
                Object.keys(t.elements).forEach((function (e) {
                    var n = t.styles[e] || {},
                        i = t.attributes[e] || {},
                        r = t.elements[e];
                    re(r) && te(r) && (Object.assign(r.style, n), Object.keys(i).forEach((function (e) {
                        var t = i[e];
                        !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t)
                    })))
                }))
            },
            effect: function (e) {
                var t = e.state,
                    n = {
                        popper: {
                            position: t.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0"
                        },
                        arrow: {
                            position: "absolute"
                        },
                        reference: {}
                    };
                return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                    function () {
                        Object.keys(t.elements).forEach((function (e) {
                            var i = t.elements[e],
                                r = t.attributes[e] || {},
                                o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function (e, t) {
                                    return e[t] = "", e
                                }), {});
                            re(i) && te(i) && (Object.assign(i.style, o), Object.keys(r).forEach((function (e) {
                                i.removeAttribute(e)
                            })))
                        }))
                    }
            },
            requires: ["computeStyles"]
        };

        function ae(e) {
            return e.split("-")[0]
        }
        var le = Math.max,
            ce = Math.min,
            ue = Math.round;

        function fe() {
            var e = navigator.userAgentData;
            return null != e && e.brands ? e.brands.map((function (e) {
                return e.brand + "/" + e.version
            })).join(" ") : navigator.userAgent
        }

        function de() {
            return !/^((?!chrome|android).)*safari/i.test(fe())
        }

        function he(e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = !1);
            var i = e.getBoundingClientRect(),
                r = 1,
                o = 1;
            t && re(e) && (r = e.offsetWidth > 0 && ue(i.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && ue(i.height) / e.offsetHeight || 1);
            var s = (ie(e) ? ne(e) : window).visualViewport,
                a = !de() && n,
                l = (i.left + (a && s ? s.offsetLeft : 0)) / r,
                c = (i.top + (a && s ? s.offsetTop : 0)) / o,
                u = i.width / r,
                f = i.height / o;
            return {
                width: u,
                height: f,
                top: c,
                right: l + u,
                bottom: c + f,
                left: l,
                x: l,
                y: c
            }
        }

        function pe(e) {
            var t = he(e),
                n = e.offsetWidth,
                i = e.offsetHeight;
            return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - i) <= 1 && (i = t.height), {
                x: e.offsetLeft,
                y: e.offsetTop,
                width: n,
                height: i
            }
        }

        function ge(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t)) return !0;
            if (n && oe(n)) {
                var i = t;
                do {
                    if (i && e.isSameNode(i)) return !0;
                    i = i.parentNode || i.host
                } while (i)
            }
            return !1
        }

        function me(e) {
            return ne(e).getComputedStyle(e)
        }

        function ve(e) {
            return ["table", "td", "th"].indexOf(te(e)) >= 0
        }

        function ye(e) {
            return ((ie(e) ? e.ownerDocument : e.document) || window.document).documentElement
        }

        function be(e) {
            return "html" === te(e) ? e : e.assignedSlot || e.parentNode || (oe(e) ? e.host : null) || ye(e)
        }

        function _e(e) {
            return re(e) && "fixed" !== me(e).position ? e.offsetParent : null
        }

        function we(e) {
            for (var t = ne(e), n = _e(e); n && ve(n) && "static" === me(n).position;) n = _e(n);
            return n && ("html" === te(n) || "body" === te(n) && "static" === me(n).position) ? t : n || function (e) {
                var t = /firefox/i.test(fe());
                if (/Trident/i.test(fe()) && re(e) && "fixed" === me(e).position) return null;
                var n = be(e);
                for (oe(n) && (n = n.host); re(n) && ["html", "body"].indexOf(te(n)) < 0;) {
                    var i = me(n);
                    if ("none" !== i.transform || "none" !== i.perspective || "paint" === i.contain || -1 !== ["transform", "perspective"].indexOf(i.willChange) || t && "filter" === i.willChange || t && i.filter && "none" !== i.filter) return n;
                    n = n.parentNode
                }
                return null
            }(e) || t
        }

        function xe(e) {
            return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
        }

        function Te(e, t, n) {
            return le(e, ce(t, n))
        }

        function Ce(e) {
            return Object.assign({}, {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, e)
        }

        function Ee(e, t) {
            return t.reduce((function (t, n) {
                return t[n] = e, t
            }), {})
        }
        const Ae = {
            name: "arrow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t, n = e.state,
                    i = e.name,
                    r = e.options,
                    o = n.elements.arrow,
                    s = n.modifiersData.popperOffsets,
                    a = ae(n.placement),
                    l = xe(a),
                    c = [P, j].indexOf(a) >= 0 ? "height" : "width";
                if (o && s) {
                    var u = function (e, t) {
                            return Ce("number" != typeof (e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : e) ? e : Ee(e, M))
                        }(r.padding, n),
                        f = pe(o),
                        d = "y" === l ? O : P,
                        h = "y" === l ? D : j,
                        p = n.rects.reference[c] + n.rects.reference[l] - s[l] - n.rects.popper[c],
                        g = s[l] - n.rects.reference[l],
                        m = we(o),
                        v = m ? "y" === l ? m.clientHeight || 0 : m.clientWidth || 0 : 0,
                        y = p / 2 - g / 2,
                        b = u[d],
                        _ = v - f[c] - u[h],
                        w = v / 2 - f[c] / 2 + y,
                        x = Te(b, w, _),
                        T = l;
                    n.modifiersData[i] = ((t = {})[T] = x, t.centerOffset = x - w, t)
                }
            },
            effect: function (e) {
                var t = e.state,
                    n = e.options.element,
                    i = void 0 === n ? "[data-popper-arrow]" : n;
                null != i && ("string" != typeof i || (i = t.elements.popper.querySelector(i))) && ge(t.elements.popper, i) && (t.elements.arrow = i)
            },
            requires: ["popperOffsets"],
            requiresIfExists: ["preventOverflow"]
        };

        function ke(e) {
            return e.split("-")[1]
        }
        var Se = {
            top: "auto",
            right: "auto",
            bottom: "auto",
            left: "auto"
        };

        function Ne(e) {
            var t, n = e.popper,
                i = e.popperRect,
                r = e.placement,
                o = e.variation,
                s = e.offsets,
                a = e.position,
                l = e.gpuAcceleration,
                c = e.adaptive,
                u = e.roundOffsets,
                f = e.isFixed,
                d = s.x,
                h = void 0 === d ? 0 : d,
                p = s.y,
                g = void 0 === p ? 0 : p,
                m = "function" == typeof u ? u({
                    x: h,
                    y: g
                }) : {
                    x: h,
                    y: g
                };
            h = m.x, g = m.y;
            var v = s.hasOwnProperty("x"),
                y = s.hasOwnProperty("y"),
                b = P,
                _ = O,
                w = window;
            if (c) {
                var x = we(n),
                    T = "clientHeight",
                    C = "clientWidth";
                x === ne(n) && "static" !== me(x = ye(n)).position && "absolute" === a && (T = "scrollHeight", C = "scrollWidth"), (r === O || (r === P || r === j) && o === q) && (_ = D, g -= (f && x === w && w.visualViewport ? w.visualViewport.height : x[T]) - i.height, g *= l ? 1 : -1), r !== P && (r !== O && r !== D || o !== q) || (b = j, h -= (f && x === w && w.visualViewport ? w.visualViewport.width : x[C]) - i.width, h *= l ? 1 : -1)
            }
            var E, A = Object.assign({
                    position: a
                }, c && Se),
                k = !0 === u ? function (e) {
                    var t = e.x,
                        n = e.y,
                        i = window.devicePixelRatio || 1;
                    return {
                        x: ue(t * i) / i || 0,
                        y: ue(n * i) / i || 0
                    }
                }({
                    x: h,
                    y: g
                }) : {
                    x: h,
                    y: g
                };
            return h = k.x, g = k.y, l ? Object.assign({}, A, ((E = {})[_] = y ? "0" : "", E[b] = v ? "0" : "", E.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", E)) : Object.assign({}, A, ((t = {})[_] = y ? g + "px" : "", t[b] = v ? h + "px" : "", t.transform = "", t))
        }
        const Le = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
                var t = e.state,
                    n = e.options,
                    i = n.gpuAcceleration,
                    r = void 0 === i || i,
                    o = n.adaptive,
                    s = void 0 === o || o,
                    a = n.roundOffsets,
                    l = void 0 === a || a,
                    c = {
                        placement: ae(t.placement),
                        variation: ke(t.placement),
                        popper: t.elements.popper,
                        popperRect: t.rects.popper,
                        gpuAcceleration: r,
                        isFixed: "fixed" === t.options.strategy
                    };
                null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Ne(Object.assign({}, c, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: s,
                    roundOffsets: l
                })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ne(Object.assign({}, c, {
                    offsets: t.modifiersData.arrow,
                    position: "absolute",
                    adaptive: !1,
                    roundOffsets: l
                })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-placement": t.placement
                })
            },
            data: {}
        };
        var Oe = {
            passive: !0
        };
        const De = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (e) {
                var t = e.state,
                    n = e.instance,
                    i = e.options,
                    r = i.scroll,
                    o = void 0 === r || r,
                    s = i.resize,
                    a = void 0 === s || s,
                    l = ne(t.elements.popper),
                    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                return o && c.forEach((function (e) {
                        e.addEventListener("scroll", n.update, Oe)
                    })), a && l.addEventListener("resize", n.update, Oe),
                    function () {
                        o && c.forEach((function (e) {
                            e.removeEventListener("scroll", n.update, Oe)
                        })), a && l.removeEventListener("resize", n.update, Oe)
                    }
            },
            data: {}
        };
        var je = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };

        function Pe(e) {
            return e.replace(/left|right|bottom|top/g, (function (e) {
                return je[e]
            }))
        }
        var Ie = {
            start: "end",
            end: "start"
        };

        function Me(e) {
            return e.replace(/start|end/g, (function (e) {
                return Ie[e]
            }))
        }

        function $e(e) {
            var t = ne(e);
            return {
                scrollLeft: t.pageXOffset,
                scrollTop: t.pageYOffset
            }
        }

        function qe(e) {
            return he(ye(e)).left + $e(e).scrollLeft
        }

        function He(e) {
            var t = me(e),
                n = t.overflow,
                i = t.overflowX,
                r = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + r + i)
        }

        function Re(e) {
            return ["html", "body", "#document"].indexOf(te(e)) >= 0 ? e.ownerDocument.body : re(e) && He(e) ? e : Re(be(e))
        }

        function Fe(e, t) {
            var n;
            void 0 === t && (t = []);
            var i = Re(e),
                r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
                o = ne(i),
                s = r ? [o].concat(o.visualViewport || [], He(i) ? i : []) : i,
                a = t.concat(s);
            return r ? a : a.concat(Fe(be(s)))
        }

        function Be(e) {
            return Object.assign({}, e, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height
            })
        }

        function We(e, t, n) {
            return t === R ? Be(function (e, t) {
                var n = ne(e),
                    i = ye(e),
                    r = n.visualViewport,
                    o = i.clientWidth,
                    s = i.clientHeight,
                    a = 0,
                    l = 0;
                if (r) {
                    o = r.width, s = r.height;
                    var c = de();
                    (c || !c && "fixed" === t) && (a = r.offsetLeft, l = r.offsetTop)
                }
                return {
                    width: o,
                    height: s,
                    x: a + qe(e),
                    y: l
                }
            }(e, n)) : ie(t) ? function (e, t) {
                var n = he(e, !1, "fixed" === t);
                return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
            }(t, n) : Be(function (e) {
                var t, n = ye(e),
                    i = $e(e),
                    r = null == (t = e.ownerDocument) ? void 0 : t.body,
                    o = le(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
                    s = le(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
                    a = -i.scrollLeft + qe(e),
                    l = -i.scrollTop;
                return "rtl" === me(r || n).direction && (a += le(n.clientWidth, r ? r.clientWidth : 0) - o), {
                    width: o,
                    height: s,
                    x: a,
                    y: l
                }
            }(ye(e)))
        }

        function ze(e) {
            var t, n = e.reference,
                i = e.element,
                r = e.placement,
                o = r ? ae(r) : null,
                s = r ? ke(r) : null,
                a = n.x + n.width / 2 - i.width / 2,
                l = n.y + n.height / 2 - i.height / 2;
            switch (o) {
                case O:
                    t = {
                        x: a,
                        y: n.y - i.height
                    };
                    break;
                case D:
                    t = {
                        x: a,
                        y: n.y + n.height
                    };
                    break;
                case j:
                    t = {
                        x: n.x + n.width,
                        y: l
                    };
                    break;
                case P:
                    t = {
                        x: n.x - i.width,
                        y: l
                    };
                    break;
                default:
                    t = {
                        x: n.x,
                        y: n.y
                    }
            }
            var c = o ? xe(o) : null;
            if (null != c) {
                var u = "y" === c ? "height" : "width";
                switch (s) {
                    case $:
                        t[c] = t[c] - (n[u] / 2 - i[u] / 2);
                        break;
                    case q:
                        t[c] = t[c] + (n[u] / 2 - i[u] / 2)
                }
            }
            return t
        }

        function Ve(e, t) {
            void 0 === t && (t = {});
            var n = t,
                i = n.placement,
                r = void 0 === i ? e.placement : i,
                o = n.strategy,
                s = void 0 === o ? e.strategy : o,
                a = n.boundary,
                l = void 0 === a ? H : a,
                c = n.rootBoundary,
                u = void 0 === c ? R : c,
                f = n.elementContext,
                d = void 0 === f ? F : f,
                h = n.altBoundary,
                p = void 0 !== h && h,
                g = n.padding,
                m = void 0 === g ? 0 : g,
                v = Ce("number" != typeof m ? m : Ee(m, M)),
                y = d === F ? B : F,
                b = e.rects.popper,
                _ = e.elements[p ? y : d],
                w = function (e, t, n, i) {
                    var r = "clippingParents" === t ? function (e) {
                            var t = Fe(be(e)),
                                n = ["absolute", "fixed"].indexOf(me(e).position) >= 0 && re(e) ? we(e) : e;
                            return ie(n) ? t.filter((function (e) {
                                return ie(e) && ge(e, n) && "body" !== te(e)
                            })) : []
                        }(e) : [].concat(t),
                        o = [].concat(r, [n]),
                        s = o[0],
                        a = o.reduce((function (t, n) {
                            var r = We(e, n, i);
                            return t.top = le(r.top, t.top), t.right = ce(r.right, t.right), t.bottom = ce(r.bottom, t.bottom), t.left = le(r.left, t.left), t
                        }), We(e, s, i));
                    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
                }(ie(_) ? _ : _.contextElement || ye(e.elements.popper), l, u, s),
                x = he(e.elements.reference),
                T = ze({
                    reference: x,
                    element: b,
                    strategy: "absolute",
                    placement: r
                }),
                C = Be(Object.assign({}, b, T)),
                E = d === F ? C : x,
                A = {
                    top: w.top - E.top + v.top,
                    bottom: E.bottom - w.bottom + v.bottom,
                    left: w.left - E.left + v.left,
                    right: E.right - w.right + v.right
                },
                k = e.modifiersData.offset;
            if (d === F && k) {
                var S = k[r];
                Object.keys(A).forEach((function (e) {
                    var t = [j, D].indexOf(e) >= 0 ? 1 : -1,
                        n = [O, D].indexOf(e) >= 0 ? "y" : "x";
                    A[e] += S[n] * t
                }))
            }
            return A
        }
        const Xe = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state,
                    n = e.options,
                    i = e.name;
                if (!t.modifiersData[i]._skip) {
                    for (var r = n.mainAxis, o = void 0 === r || r, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, h = n.flipVariations, p = void 0 === h || h, g = n.allowedAutoPlacements, m = t.options.placement, v = ae(m), y = l || (v !== m && p ? function (e) {
                            if (ae(e) === I) return [];
                            var t = Pe(e);
                            return [Me(e), t, Me(t)]
                        }(m) : [Pe(m)]), b = [m].concat(y).reduce((function (e, n) {
                            return e.concat(ae(n) === I ? function (e, t) {
                                void 0 === t && (t = {});
                                var n = t,
                                    i = n.placement,
                                    r = n.boundary,
                                    o = n.rootBoundary,
                                    s = n.padding,
                                    a = n.flipVariations,
                                    l = n.allowedAutoPlacements,
                                    c = void 0 === l ? z : l,
                                    u = ke(i),
                                    f = u ? a ? W : W.filter((function (e) {
                                        return ke(e) === u
                                    })) : M,
                                    d = f.filter((function (e) {
                                        return c.indexOf(e) >= 0
                                    }));
                                0 === d.length && (d = f);
                                var h = d.reduce((function (t, n) {
                                    return t[n] = Ve(e, {
                                        placement: n,
                                        boundary: r,
                                        rootBoundary: o,
                                        padding: s
                                    })[ae(n)], t
                                }), {});
                                return Object.keys(h).sort((function (e, t) {
                                    return h[e] - h[t]
                                }))
                            }(t, {
                                placement: n,
                                boundary: u,
                                rootBoundary: f,
                                padding: c,
                                flipVariations: p,
                                allowedAutoPlacements: g
                            }) : n)
                        }), []), _ = t.rects.reference, w = t.rects.popper, x = new Map, T = !0, C = b[0], E = 0; E < b.length; E++) {
                        var A = b[E],
                            k = ae(A),
                            S = ke(A) === $,
                            N = [O, D].indexOf(k) >= 0,
                            L = N ? "width" : "height",
                            q = Ve(t, {
                                placement: A,
                                boundary: u,
                                rootBoundary: f,
                                altBoundary: d,
                                padding: c
                            }),
                            H = N ? S ? j : P : S ? D : O;
                        _[L] > w[L] && (H = Pe(H));
                        var R = Pe(H),
                            F = [];
                        if (o && F.push(q[k] <= 0), a && F.push(q[H] <= 0, q[R] <= 0), F.every((function (e) {
                                return e
                            }))) {
                            C = A, T = !1;
                            break
                        }
                        x.set(A, F)
                    }
                    if (T)
                        for (var B = function (e) {
                                var t = b.find((function (t) {
                                    var n = x.get(t);
                                    if (n) return n.slice(0, e).every((function (e) {
                                        return e
                                    }))
                                }));
                                if (t) return C = t, "break"
                            }, V = p ? 3 : 1; V > 0 && "break" !== B(V); V--);
                    t.placement !== C && (t.modifiersData[i]._skip = !0, t.placement = C, t.reset = !0)
                }
            },
            requiresIfExists: ["offset"],
            data: {
                _skip: !1
            }
        };

        function Ue(e, t, n) {
            return void 0 === n && (n = {
                x: 0,
                y: 0
            }), {
                top: e.top - t.height - n.y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x
            }
        }

        function Ye(e) {
            return [O, j, D, P].some((function (t) {
                return e[t] >= 0
            }))
        }
        const Qe = {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function (e) {
                    var t = e.state,
                        n = e.name,
                        i = t.rects.reference,
                        r = t.rects.popper,
                        o = t.modifiersData.preventOverflow,
                        s = Ve(t, {
                            elementContext: "reference"
                        }),
                        a = Ve(t, {
                            altBoundary: !0
                        }),
                        l = Ue(s, i),
                        c = Ue(a, r, o),
                        u = Ye(l),
                        f = Ye(c);
                    t.modifiersData[n] = {
                        referenceClippingOffsets: l,
                        popperEscapeOffsets: c,
                        isReferenceHidden: u,
                        hasPopperEscaped: f
                    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                        "data-popper-reference-hidden": u,
                        "data-popper-escaped": f
                    })
                }
            },
            Ke = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function (e) {
                    var t = e.state,
                        n = e.options,
                        i = e.name,
                        r = n.offset,
                        o = void 0 === r ? [0, 0] : r,
                        s = z.reduce((function (e, n) {
                            return e[n] = function (e, t, n) {
                                var i = ae(e),
                                    r = [P, O].indexOf(i) >= 0 ? -1 : 1,
                                    o = "function" == typeof n ? n(Object.assign({}, t, {
                                        placement: e
                                    })) : n,
                                    s = o[0],
                                    a = o[1];
                                return s = s || 0, a = (a || 0) * r, [P, j].indexOf(i) >= 0 ? {
                                    x: a,
                                    y: s
                                } : {
                                    x: s,
                                    y: a
                                }
                            }(n, t.rects, o), e
                        }), {}),
                        a = s[t.placement],
                        l = a.x,
                        c = a.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[i] = s
                }
            },
            Ge = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function (e) {
                    var t = e.state,
                        n = e.name;
                    t.modifiersData[n] = ze({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                },
                data: {}
            },
            Je = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function (e) {
                    var t = e.state,
                        n = e.options,
                        i = e.name,
                        r = n.mainAxis,
                        o = void 0 === r || r,
                        s = n.altAxis,
                        a = void 0 !== s && s,
                        l = n.boundary,
                        c = n.rootBoundary,
                        u = n.altBoundary,
                        f = n.padding,
                        d = n.tether,
                        h = void 0 === d || d,
                        p = n.tetherOffset,
                        g = void 0 === p ? 0 : p,
                        m = Ve(t, {
                            boundary: l,
                            rootBoundary: c,
                            padding: f,
                            altBoundary: u
                        }),
                        v = ae(t.placement),
                        y = ke(t.placement),
                        b = !y,
                        _ = xe(v),
                        w = "x" === _ ? "y" : "x",
                        x = t.modifiersData.popperOffsets,
                        T = t.rects.reference,
                        C = t.rects.popper,
                        E = "function" == typeof g ? g(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : g,
                        A = "number" == typeof E ? {
                            mainAxis: E,
                            altAxis: E
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, E),
                        k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                        S = {
                            x: 0,
                            y: 0
                        };
                    if (x) {
                        if (o) {
                            var N, L = "y" === _ ? O : P,
                                I = "y" === _ ? D : j,
                                M = "y" === _ ? "height" : "width",
                                q = x[_],
                                H = q + m[L],
                                R = q - m[I],
                                F = h ? -C[M] / 2 : 0,
                                B = y === $ ? T[M] : C[M],
                                W = y === $ ? -C[M] : -T[M],
                                z = t.elements.arrow,
                                V = h && z ? pe(z) : {
                                    width: 0,
                                    height: 0
                                },
                                X = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                U = X[L],
                                Y = X[I],
                                Q = Te(0, T[M], V[M]),
                                K = b ? T[M] / 2 - F - Q - U - A.mainAxis : B - Q - U - A.mainAxis,
                                G = b ? -T[M] / 2 + F + Q + Y + A.mainAxis : W + Q + Y + A.mainAxis,
                                J = t.elements.arrow && we(t.elements.arrow),
                                Z = J ? "y" === _ ? J.clientTop || 0 : J.clientLeft || 0 : 0,
                                ee = null != (N = null == k ? void 0 : k[_]) ? N : 0,
                                te = q + G - ee,
                                ne = Te(h ? ce(H, q + K - ee - Z) : H, q, h ? le(R, te) : R);
                            x[_] = ne, S[_] = ne - q
                        }
                        if (a) {
                            var ie, re = "x" === _ ? O : P,
                                oe = "x" === _ ? D : j,
                                se = x[w],
                                ue = "y" === w ? "height" : "width",
                                fe = se + m[re],
                                de = se - m[oe],
                                he = -1 !== [O, P].indexOf(v),
                                ge = null != (ie = null == k ? void 0 : k[w]) ? ie : 0,
                                me = he ? fe : se - T[ue] - C[ue] - ge + A.altAxis,
                                ve = he ? se + T[ue] + C[ue] - ge - A.altAxis : de,
                                ye = h && he ? function (e, t, n) {
                                    var i = Te(e, t, n);
                                    return i > n ? n : i
                                }(me, se, ve) : Te(h ? me : fe, se, h ? ve : de);
                            x[w] = ye, S[w] = ye - se
                        }
                        t.modifiersData[i] = S
                    }
                },
                requiresIfExists: ["offset"]
            };

        function Ze(e, t, n) {
            void 0 === n && (n = !1);
            var i, r, o = re(t),
                s = re(t) && function (e) {
                    var t = e.getBoundingClientRect(),
                        n = ue(t.width) / e.offsetWidth || 1,
                        i = ue(t.height) / e.offsetHeight || 1;
                    return 1 !== n || 1 !== i
                }(t),
                a = ye(t),
                l = he(e, s, n),
                c = {
                    scrollLeft: 0,
                    scrollTop: 0
                },
                u = {
                    x: 0,
                    y: 0
                };
            return (o || !o && !n) && (("body" !== te(t) || He(a)) && (c = (i = t) !== ne(i) && re(i) ? {
                scrollLeft: (r = i).scrollLeft,
                scrollTop: r.scrollTop
            } : $e(i)), re(t) ? ((u = he(t, !0)).x += t.clientLeft, u.y += t.clientTop) : a && (u.x = qe(a))), {
                x: l.left + c.scrollLeft - u.x,
                y: l.top + c.scrollTop - u.y,
                width: l.width,
                height: l.height
            }
        }

        function et(e) {
            var t = new Map,
                n = new Set,
                i = [];

            function r(e) {
                n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function (e) {
                    if (!n.has(e)) {
                        var i = t.get(e);
                        i && r(i)
                    }
                })), i.push(e)
            }
            return e.forEach((function (e) {
                t.set(e.name, e)
            })), e.forEach((function (e) {
                n.has(e.name) || r(e)
            })), i
        }
        var tt = {
            placement: "bottom",
            modifiers: [],
            strategy: "absolute"
        };

        function nt() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return !t.some((function (e) {
                return !(e && "function" == typeof e.getBoundingClientRect)
            }))
        }

        function it(e) {
            void 0 === e && (e = {});
            var t = e,
                n = t.defaultModifiers,
                i = void 0 === n ? [] : n,
                r = t.defaultOptions,
                o = void 0 === r ? tt : r;
            return function (e, t, n) {
                void 0 === n && (n = o);
                var r, s, a = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, tt, o),
                        modifiersData: {},
                        elements: {
                            reference: e,
                            popper: t
                        },
                        attributes: {},
                        styles: {}
                    },
                    l = [],
                    c = !1,
                    u = {
                        state: a,
                        setOptions: function (n) {
                            var r = "function" == typeof n ? n(a.options) : n;
                            f(), a.options = Object.assign({}, o, a.options, r), a.scrollParents = {
                                reference: ie(e) ? Fe(e) : e.contextElement ? Fe(e.contextElement) : [],
                                popper: Fe(t)
                            };
                            var s, c, d = function (e) {
                                var t = et(e);
                                return ee.reduce((function (e, n) {
                                    return e.concat(t.filter((function (e) {
                                        return e.phase === n
                                    })))
                                }), [])
                            }((s = [].concat(i, a.options.modifiers), c = s.reduce((function (e, t) {
                                var n = e[t.name];
                                return e[t.name] = n ? Object.assign({}, n, t, {
                                    options: Object.assign({}, n.options, t.options),
                                    data: Object.assign({}, n.data, t.data)
                                }) : t, e
                            }), {}), Object.keys(c).map((function (e) {
                                return c[e]
                            }))));
                            return a.orderedModifiers = d.filter((function (e) {
                                return e.enabled
                            })), a.orderedModifiers.forEach((function (e) {
                                var t = e.name,
                                    n = e.options,
                                    i = void 0 === n ? {} : n,
                                    r = e.effect;
                                if ("function" == typeof r) {
                                    var o = r({
                                        state: a,
                                        name: t,
                                        instance: u,
                                        options: i
                                    });
                                    l.push(o || function () {})
                                }
                            })), u.update()
                        },
                        forceUpdate: function () {
                            if (!c) {
                                var e = a.elements,
                                    t = e.reference,
                                    n = e.popper;
                                if (nt(t, n)) {
                                    a.rects = {
                                        reference: Ze(t, we(n), "fixed" === a.options.strategy),
                                        popper: pe(n)
                                    }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function (e) {
                                        return a.modifiersData[e.name] = Object.assign({}, e.data)
                                    }));
                                    for (var i = 0; i < a.orderedModifiers.length; i++)
                                        if (!0 !== a.reset) {
                                            var r = a.orderedModifiers[i],
                                                o = r.fn,
                                                s = r.options,
                                                l = void 0 === s ? {} : s,
                                                f = r.name;
                                            "function" == typeof o && (a = o({
                                                state: a,
                                                options: l,
                                                name: f,
                                                instance: u
                                            }) || a)
                                        } else a.reset = !1, i = -1
                                }
                            }
                        },
                        update: (r = function () {
                            return new Promise((function (e) {
                                u.forceUpdate(), e(a)
                            }))
                        }, function () {
                            return s || (s = new Promise((function (e) {
                                Promise.resolve().then((function () {
                                    s = void 0, e(r())
                                }))
                            }))), s
                        }),
                        destroy: function () {
                            f(), c = !0
                        }
                    };
                if (!nt(e, t)) return u;

                function f() {
                    l.forEach((function (e) {
                        return e()
                    })), l = []
                }
                return u.setOptions(n).then((function (e) {
                    !c && n.onFirstUpdate && n.onFirstUpdate(e)
                })), u
            }
        }
        var rt = it(),
            ot = it({
                defaultModifiers: [De, Ge, Le, se, Ke, Xe, Je, Ae, Qe]
            }),
            st = it({
                defaultModifiers: [De, Ge, Le, se]
            });
        const at = "transitionend",
            lt = e => {
                let t = e.getAttribute("data-bs-target");
                if (!t || "#" === t) {
                    let n = e.getAttribute("href");
                    if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                    n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && "#" !== n ? n.trim() : null
                }
                return t
            },
            ct = e => {
                const t = lt(e);
                return t && document.querySelector(t) ? t : null
            },
            ut = e => {
                const t = lt(e);
                return t ? document.querySelector(t) : null
            },
            ft = e => {
                e.dispatchEvent(new Event(at))
            },
            dt = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
            ht = e => dt(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null,
            pt = e => {
                if (!dt(e) || 0 === e.getClientRects().length) return !1;
                const t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                    n = e.closest("details:not([open])");
                if (!n) return t;
                if (n !== e) {
                    const t = e.closest("summary");
                    if (t && t.parentNode !== n) return !1;
                    if (null === t) return !1
                }
                return t
            },
            gt = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
            mt = e => {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    const t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? mt(e.parentNode) : null
            },
            vt = () => {},
            yt = e => {
                e.offsetHeight
            },
            bt = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
            _t = [],
            wt = () => "rtl" === document.documentElement.dir,
            xt = e => {
                var t;
                t = () => {
                    const t = bt();
                    if (t) {
                        const n = e.NAME,
                            i = t.fn[n];
                        t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = i, e.jQueryInterface)
                    }
                }, "loading" === document.readyState ? (_t.length || document.addEventListener("DOMContentLoaded", (() => {
                    for (const e of _t) e()
                })), _t.push(t)) : t()
            },
            Tt = e => {
                "function" == typeof e && e()
            },
            Ct = (e, t, n = !0) => {
                if (!n) return void Tt(e);
                const i = (e => {
                    if (!e) return 0;
                    let {
                        transitionDuration: t,
                        transitionDelay: n
                    } = window.getComputedStyle(e);
                    const i = Number.parseFloat(t),
                        r = Number.parseFloat(n);
                    return i || r ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0
                })(t) + 5;
                let r = !1;
                const o = ({
                    target: n
                }) => {
                    n === t && (r = !0, t.removeEventListener(at, o), Tt(e))
                };
                t.addEventListener(at, o), setTimeout((() => {
                    r || ft(t)
                }), i)
            },
            Et = (e, t, n, i) => {
                const r = e.length;
                let o = e.indexOf(t);
                return -1 === o ? !n && i ? e[r - 1] : e[0] : (o += n ? 1 : -1, i && (o = (o + r) % r), e[Math.max(0, Math.min(o, r - 1))])
            },
            At = /[^.]*(?=\..*)\.|.*/,
            kt = /\..*/,
            St = /::\d+$/,
            Nt = {};
        let Lt = 1;
        const Ot = {
                mouseenter: "mouseover",
                mouseleave: "mouseout"
            },
            Dt = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

        function jt(e, t) {
            return t && `${t}::${Lt++}` || e.uidEvent || Lt++
        }

        function Pt(e) {
            const t = jt(e);
            return e.uidEvent = t, Nt[t] = Nt[t] || {}, Nt[t]
        }

        function It(e, t, n = null) {
            return Object.values(e).find((e => e.callable === t && e.delegationSelector === n))
        }

        function Mt(e, t, n) {
            const i = "string" == typeof t,
                r = i ? n : t || n;
            let o = Rt(e);
            return Dt.has(o) || (o = e), [i, r, o]
        }

        function $t(e, t, n, i, r) {
            if ("string" != typeof t || !e) return;
            let [o, s, a] = Mt(t, n, i);
            if (t in Ot) {
                const e = e => function (t) {
                    if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
                };
                s = e(s)
            }
            const l = Pt(e),
                c = l[a] || (l[a] = {}),
                u = It(c, s, o ? n : null);
            if (u) return void(u.oneOff = u.oneOff && r);
            const f = jt(s, t.replace(At, "")),
                d = o ? function (e, t, n) {
                    return function i(r) {
                        const o = e.querySelectorAll(t);
                        for (let {
                                target: s
                            } = r; s && s !== this; s = s.parentNode)
                            for (const a of o)
                                if (a === s) return Bt(r, {
                                    delegateTarget: s
                                }), i.oneOff && Ft.off(e, r.type, t, n), n.apply(s, [r])
                    }
                }(e, n, s) : function (e, t) {
                    return function n(i) {
                        return Bt(i, {
                            delegateTarget: e
                        }), n.oneOff && Ft.off(e, i.type, t), t.apply(e, [i])
                    }
                }(e, s);
            d.delegationSelector = o ? n : null, d.callable = s, d.oneOff = r, d.uidEvent = f, c[f] = d, e.addEventListener(a, d, o)
        }

        function qt(e, t, n, i, r) {
            const o = It(t[n], i, r);
            o && (e.removeEventListener(n, o, Boolean(r)), delete t[n][o.uidEvent])
        }

        function Ht(e, t, n, i) {
            const r = t[n] || {};
            for (const o of Object.keys(r))
                if (o.includes(i)) {
                    const i = r[o];
                    qt(e, t, n, i.callable, i.delegationSelector)
                }
        }

        function Rt(e) {
            return e = e.replace(kt, ""), Ot[e] || e
        }
        const Ft = {
            on(e, t, n, i) {
                $t(e, t, n, i, !1)
            },
            one(e, t, n, i) {
                $t(e, t, n, i, !0)
            },
            off(e, t, n, i) {
                if ("string" != typeof t || !e) return;
                const [r, o, s] = Mt(t, n, i), a = s !== t, l = Pt(e), c = l[s] || {}, u = t.startsWith(".");
                if (void 0 === o) {
                    if (u)
                        for (const n of Object.keys(l)) Ht(e, l, n, t.slice(1));
                    for (const n of Object.keys(c)) {
                        const i = n.replace(St, "");
                        if (!a || t.includes(i)) {
                            const t = c[n];
                            qt(e, l, s, t.callable, t.delegationSelector)
                        }
                    }
                } else {
                    if (!Object.keys(c).length) return;
                    qt(e, l, s, o, r ? n : null)
                }
            },
            trigger(e, t, n) {
                if ("string" != typeof t || !e) return null;
                const i = bt();
                let r = null,
                    o = !0,
                    s = !0,
                    a = !1;
                t !== Rt(t) && i && (r = i.Event(t, n), i(e).trigger(r), o = !r.isPropagationStopped(), s = !r.isImmediatePropagationStopped(), a = r.isDefaultPrevented());
                let l = new Event(t, {
                    bubbles: o,
                    cancelable: !0
                });
                return l = Bt(l, n), a && l.preventDefault(), s && e.dispatchEvent(l), l.defaultPrevented && r && r.preventDefault(), l
            }
        };

        function Bt(e, t) {
            for (const [n, i] of Object.entries(t || {})) try {
                e[n] = i
            } catch (t) {
                Object.defineProperty(e, n, {
                    configurable: !0,
                    get: () => i
                })
            }
            return e
        }
        const Wt = new Map,
            zt = {
                set(e, t, n) {
                    Wt.has(e) || Wt.set(e, new Map);
                    const i = Wt.get(e);
                    i.has(t) || 0 === i.size ? i.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
                },
                get: (e, t) => Wt.has(e) && Wt.get(e).get(t) || null,
                remove(e, t) {
                    if (!Wt.has(e)) return;
                    const n = Wt.get(e);
                    n.delete(t), 0 === n.size && Wt.delete(e)
                }
            };

        function Vt(e) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e === Number(e).toString()) return Number(e);
            if ("" === e || "null" === e) return null;
            if ("string" != typeof e) return e;
            try {
                return JSON.parse(decodeURIComponent(e))
            } catch (t) {
                return e
            }
        }

        function Xt(e) {
            return e.replace(/[A-Z]/g, (e => `-${e.toLowerCase()}`))
        }
        const Ut = {
            setDataAttribute(e, t, n) {
                e.setAttribute(`data-bs-${Xt(t)}`, n)
            },
            removeDataAttribute(e, t) {
                e.removeAttribute(`data-bs-${Xt(t)}`)
            },
            getDataAttributes(e) {
                if (!e) return {};
                const t = {},
                    n = Object.keys(e.dataset).filter((e => e.startsWith("bs") && !e.startsWith("bsConfig")));
                for (const i of n) {
                    let n = i.replace(/^bs/, "");
                    n = n.charAt(0).toLowerCase() + n.slice(1, n.length), t[n] = Vt(e.dataset[i])
                }
                return t
            },
            getDataAttribute: (e, t) => Vt(e.getAttribute(`data-bs-${Xt(t)}`))
        };
        class Yt {
            static get Default() {
                return {}
            }
            static get DefaultType() {
                return {}
            }
            static get NAME() {
                throw new Error('You have to implement the static method "NAME", for each component!')
            }
            _getConfig(e) {
                return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
            }
            _configAfterMerge(e) {
                return e
            }
            _mergeConfigObj(e, t) {
                const n = dt(t) ? Ut.getDataAttribute(t, "config") : {};
                return {
                    ...this.constructor.Default,
                    ..."object" == typeof n ? n : {},
                    ...dt(t) ? Ut.getDataAttributes(t) : {},
                    ..."object" == typeof e ? e : {}
                }
            }
            _typeCheckConfig(e, t = this.constructor.DefaultType) {
                for (const i of Object.keys(t)) {
                    const r = t[i],
                        o = e[i],
                        s = dt(o) ? "element" : null == (n = o) ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(r).test(s)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${s}" but expected type "${r}".`)
                }
                var n
            }
        }
        class Qt extends Yt {
            constructor(e, t) {
                super(), (e = ht(e)) && (this._element = e, this._config = this._getConfig(t), zt.set(this._element, this.constructor.DATA_KEY, this))
            }
            dispose() {
                zt.remove(this._element, this.constructor.DATA_KEY), Ft.off(this._element, this.constructor.EVENT_KEY);
                for (const e of Object.getOwnPropertyNames(this)) this[e] = null
            }
            _queueCallback(e, t, n = !0) {
                Ct(e, t, n)
            }
            _getConfig(e) {
                return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
            }
            static getInstance(e) {
                return zt.get(ht(e), this.DATA_KEY)
            }
            static getOrCreateInstance(e, t = {}) {
                return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
            }
            static get VERSION() {
                return "5.2.3"
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`
            }
            static eventName(e) {
                return `${e}${this.EVENT_KEY}`
            }
        }
        const Kt = (e, t = "hide") => {
                const n = `click.dismiss${e.EVENT_KEY}`,
                    i = e.NAME;
                Ft.on(document, n, `[data-bs-dismiss="${i}"]`, (function (n) {
                    if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), gt(this)) return;
                    const r = ut(this) || this.closest(`.${i}`);
                    e.getOrCreateInstance(r)[t]()
                }))
            },
            Gt = ".bs.alert",
            Jt = `close${Gt}`,
            Zt = `closed${Gt}`;
        class en extends Qt {
            static get NAME() {
                return "alert"
            }
            close() {
                if (Ft.trigger(this._element, Jt).defaultPrevented) return;
                this._element.classList.remove("show");
                const e = this._element.classList.contains("fade");
                this._queueCallback((() => this._destroyElement()), this._element, e)
            }
            _destroyElement() {
                this._element.remove(), Ft.trigger(this._element, Zt), this.dispose()
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = en.getOrCreateInstance(this);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e](this)
                    }
                }))
            }
        }
        Kt(en, "close"), xt(en);
        const tn = '[data-bs-toggle="button"]';
        class nn extends Qt {
            static get NAME() {
                return "button"
            }
            toggle() {
                this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = nn.getOrCreateInstance(this);
                    "toggle" === e && t[e]()
                }))
            }
        }
        Ft.on(document, "click.bs.button.data-api", tn, (e => {
            e.preventDefault();
            const t = e.target.closest(tn);
            nn.getOrCreateInstance(t).toggle()
        })), xt(nn);
        const rn = {
                find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
                findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
                children: (e, t) => [].concat(...e.children).filter((e => e.matches(t))),
                parents(e, t) {
                    const n = [];
                    let i = e.parentNode.closest(t);
                    for (; i;) n.push(i), i = i.parentNode.closest(t);
                    return n
                },
                prev(e, t) {
                    let n = e.previousElementSibling;
                    for (; n;) {
                        if (n.matches(t)) return [n];
                        n = n.previousElementSibling
                    }
                    return []
                },
                next(e, t) {
                    let n = e.nextElementSibling;
                    for (; n;) {
                        if (n.matches(t)) return [n];
                        n = n.nextElementSibling
                    }
                    return []
                },
                focusableChildren(e) {
                    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e => `${e}:not([tabindex^="-"])`)).join(",");
                    return this.find(t, e).filter((e => !gt(e) && pt(e)))
                }
            },
            on = ".bs.swipe",
            sn = `touchstart${on}`,
            an = `touchmove${on}`,
            ln = `touchend${on}`,
            cn = `pointerdown${on}`,
            un = `pointerup${on}`,
            fn = {
                endCallback: null,
                leftCallback: null,
                rightCallback: null
            },
            dn = {
                endCallback: "(function|null)",
                leftCallback: "(function|null)",
                rightCallback: "(function|null)"
            };
        class hn extends Yt {
            constructor(e, t) {
                super(), this._element = e, e && hn.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
            }
            static get Default() {
                return fn
            }
            static get DefaultType() {
                return dn
            }
            static get NAME() {
                return "swipe"
            }
            dispose() {
                Ft.off(this._element, on)
            }
            _start(e) {
                this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
            }
            _end(e) {
                this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), Tt(this._config.endCallback)
            }
            _move(e) {
                this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
            }
            _handleSwipe() {
                const e = Math.abs(this._deltaX);
                if (e <= 40) return;
                const t = e / this._deltaX;
                this._deltaX = 0, t && Tt(t > 0 ? this._config.rightCallback : this._config.leftCallback)
            }
            _initEvents() {
                this._supportPointerEvents ? (Ft.on(this._element, cn, (e => this._start(e))), Ft.on(this._element, un, (e => this._end(e))), this._element.classList.add("pointer-event")) : (Ft.on(this._element, sn, (e => this._start(e))), Ft.on(this._element, an, (e => this._move(e))), Ft.on(this._element, ln, (e => this._end(e))))
            }
            _eventIsPointerPenTouch(e) {
                return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
            }
            static isSupported() {
                return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
            }
        }
        const pn = ".bs.carousel",
            gn = ".data-api",
            mn = "next",
            vn = "prev",
            yn = "left",
            bn = "right",
            _n = `slide${pn}`,
            wn = `slid${pn}`,
            xn = `keydown${pn}`,
            Tn = `mouseenter${pn}`,
            Cn = `mouseleave${pn}`,
            En = `dragstart${pn}`,
            An = `load${pn}${gn}`,
            kn = `click${pn}${gn}`,
            Sn = "carousel",
            Nn = "active",
            Ln = ".active",
            On = ".carousel-item",
            Dn = Ln + On,
            jn = {
                ArrowLeft: bn,
                ArrowRight: yn
            },
            Pn = {
                interval: 5e3,
                keyboard: !0,
                pause: "hover",
                ride: !1,
                touch: !0,
                wrap: !0
            },
            In = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                pause: "(string|boolean)",
                ride: "(boolean|string)",
                touch: "boolean",
                wrap: "boolean"
            };
        class Mn extends Qt {
            constructor(e, t) {
                super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = rn.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Sn && this.cycle()
            }
            static get Default() {
                return Pn
            }
            static get DefaultType() {
                return In
            }
            static get NAME() {
                return "carousel"
            }
            next() {
                this._slide(mn)
            }
            nextWhenVisible() {
                !document.hidden && pt(this._element) && this.next()
            }
            prev() {
                this._slide(vn)
            }
            pause() {
                this._isSliding && ft(this._element), this._clearInterval()
            }
            cycle() {
                this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval)
            }
            _maybeEnableCycle() {
                this._config.ride && (this._isSliding ? Ft.one(this._element, wn, (() => this.cycle())) : this.cycle())
            }
            to(e) {
                const t = this._getItems();
                if (e > t.length - 1 || e < 0) return;
                if (this._isSliding) return void Ft.one(this._element, wn, (() => this.to(e)));
                const n = this._getItemIndex(this._getActive());
                if (n === e) return;
                const i = e > n ? mn : vn;
                this._slide(i, t[e])
            }
            dispose() {
                this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
            }
            _configAfterMerge(e) {
                return e.defaultInterval = e.interval, e
            }
            _addEventListeners() {
                this._config.keyboard && Ft.on(this._element, xn, (e => this._keydown(e))), "hover" === this._config.pause && (Ft.on(this._element, Tn, (() => this.pause())), Ft.on(this._element, Cn, (() => this._maybeEnableCycle()))), this._config.touch && hn.isSupported() && this._addTouchEventListeners()
            }
            _addTouchEventListeners() {
                for (const e of rn.find(".carousel-item img", this._element)) Ft.on(e, En, (e => e.preventDefault()));
                const e = {
                    leftCallback: () => this._slide(this._directionToOrder(yn)),
                    rightCallback: () => this._slide(this._directionToOrder(bn)),
                    endCallback: () => {
                        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval))
                    }
                };
                this._swipeHelper = new hn(this._element, e)
            }
            _keydown(e) {
                if (/input|textarea/i.test(e.target.tagName)) return;
                const t = jn[e.key];
                t && (e.preventDefault(), this._slide(this._directionToOrder(t)))
            }
            _getItemIndex(e) {
                return this._getItems().indexOf(e)
            }
            _setActiveIndicatorElement(e) {
                if (!this._indicatorsElement) return;
                const t = rn.findOne(Ln, this._indicatorsElement);
                t.classList.remove(Nn), t.removeAttribute("aria-current");
                const n = rn.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
                n && (n.classList.add(Nn), n.setAttribute("aria-current", "true"))
            }
            _updateInterval() {
                const e = this._activeElement || this._getActive();
                if (!e) return;
                const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                this._config.interval = t || this._config.defaultInterval
            }
            _slide(e, t = null) {
                if (this._isSliding) return;
                const n = this._getActive(),
                    i = e === mn,
                    r = t || Et(this._getItems(), n, i, this._config.wrap);
                if (r === n) return;
                const o = this._getItemIndex(r),
                    s = t => Ft.trigger(this._element, t, {
                        relatedTarget: r,
                        direction: this._orderToDirection(e),
                        from: this._getItemIndex(n),
                        to: o
                    });
                if (s(_n).defaultPrevented) return;
                if (!n || !r) return;
                const a = Boolean(this._interval);
                this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = r;
                const l = i ? "carousel-item-start" : "carousel-item-end",
                    c = i ? "carousel-item-next" : "carousel-item-prev";
                r.classList.add(c), yt(r), n.classList.add(l), r.classList.add(l), this._queueCallback((() => {
                    r.classList.remove(l, c), r.classList.add(Nn), n.classList.remove(Nn, c, l), this._isSliding = !1, s(wn)
                }), n, this._isAnimated()), a && this.cycle()
            }
            _isAnimated() {
                return this._element.classList.contains("slide")
            }
            _getActive() {
                return rn.findOne(Dn, this._element)
            }
            _getItems() {
                return rn.find(On, this._element)
            }
            _clearInterval() {
                this._interval && (clearInterval(this._interval), this._interval = null)
            }
            _directionToOrder(e) {
                return wt() ? e === yn ? vn : mn : e === yn ? mn : vn
            }
            _orderToDirection(e) {
                return wt() ? e === vn ? yn : bn : e === vn ? bn : yn
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = Mn.getOrCreateInstance(this, e);
                    if ("number" != typeof e) {
                        if ("string" == typeof e) {
                            if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                            t[e]()
                        }
                    } else t.to(e)
                }))
            }
        }
        Ft.on(document, kn, "[data-bs-slide], [data-bs-slide-to]", (function (e) {
            const t = ut(this);
            if (!t || !t.classList.contains(Sn)) return;
            e.preventDefault();
            const n = Mn.getOrCreateInstance(t),
                i = this.getAttribute("data-bs-slide-to");
            return i ? (n.to(i), void n._maybeEnableCycle()) : "next" === Ut.getDataAttribute(this, "slide") ? (n.next(), void n._maybeEnableCycle()) : (n.prev(), void n._maybeEnableCycle())
        })), Ft.on(window, An, (() => {
            const e = rn.find('[data-bs-ride="carousel"]');
            for (const t of e) Mn.getOrCreateInstance(t)
        })), xt(Mn);
        const $n = ".bs.collapse",
            qn = `show${$n}`,
            Hn = `shown${$n}`,
            Rn = `hide${$n}`,
            Fn = `hidden${$n}`,
            Bn = `click${$n}.data-api`,
            Wn = "show",
            zn = "collapse",
            Vn = "collapsing",
            Xn = `:scope .${zn} .${zn}`,
            Un = '[data-bs-toggle="collapse"]',
            Yn = {
                parent: null,
                toggle: !0
            },
            Qn = {
                parent: "(null|element)",
                toggle: "boolean"
            };
        class Kn extends Qt {
            constructor(e, t) {
                super(e, t), this._isTransitioning = !1, this._triggerArray = [];
                const n = rn.find(Un);
                for (const e of n) {
                    const t = ct(e),
                        n = rn.find(t).filter((e => e === this._element));
                    null !== t && n.length && this._triggerArray.push(e)
                }
                this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
            }
            static get Default() {
                return Yn
            }
            static get DefaultType() {
                return Qn
            }
            static get NAME() {
                return "collapse"
            }
            toggle() {
                this._isShown() ? this.hide() : this.show()
            }
            show() {
                if (this._isTransitioning || this._isShown()) return;
                let e = [];
                if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((e => e !== this._element)).map((e => Kn.getOrCreateInstance(e, {
                        toggle: !1
                    })))), e.length && e[0]._isTransitioning) return;
                if (Ft.trigger(this._element, qn).defaultPrevented) return;
                for (const t of e) t.hide();
                const t = this._getDimension();
                this._element.classList.remove(zn), this._element.classList.add(Vn), this._element.style[t] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                const n = `scroll${t[0].toUpperCase()+t.slice(1)}`;
                this._queueCallback((() => {
                    this._isTransitioning = !1, this._element.classList.remove(Vn), this._element.classList.add(zn, Wn), this._element.style[t] = "", Ft.trigger(this._element, Hn)
                }), this._element, !0), this._element.style[t] = `${this._element[n]}px`
            }
            hide() {
                if (this._isTransitioning || !this._isShown()) return;
                if (Ft.trigger(this._element, Rn).defaultPrevented) return;
                const e = this._getDimension();
                this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, yt(this._element), this._element.classList.add(Vn), this._element.classList.remove(zn, Wn);
                for (const e of this._triggerArray) {
                    const t = ut(e);
                    t && !this._isShown(t) && this._addAriaAndCollapsedClass([e], !1)
                }
                this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback((() => {
                    this._isTransitioning = !1, this._element.classList.remove(Vn), this._element.classList.add(zn), Ft.trigger(this._element, Fn)
                }), this._element, !0)
            }
            _isShown(e = this._element) {
                return e.classList.contains(Wn)
            }
            _configAfterMerge(e) {
                return e.toggle = Boolean(e.toggle), e.parent = ht(e.parent), e
            }
            _getDimension() {
                return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
            }
            _initializeChildren() {
                if (!this._config.parent) return;
                const e = this._getFirstLevelChildren(Un);
                for (const t of e) {
                    const e = ut(t);
                    e && this._addAriaAndCollapsedClass([t], this._isShown(e))
                }
            }
            _getFirstLevelChildren(e) {
                const t = rn.find(Xn, this._config.parent);
                return rn.find(e, this._config.parent).filter((e => !t.includes(e)))
            }
            _addAriaAndCollapsedClass(e, t) {
                if (e.length)
                    for (const n of e) n.classList.toggle("collapsed", !t), n.setAttribute("aria-expanded", t)
            }
            static jQueryInterface(e) {
                const t = {};
                return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1), this.each((function () {
                    const n = Kn.getOrCreateInstance(this, t);
                    if ("string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                        n[e]()
                    }
                }))
            }
        }
        Ft.on(document, Bn, Un, (function (e) {
            ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
            const t = ct(this),
                n = rn.find(t);
            for (const e of n) Kn.getOrCreateInstance(e, {
                toggle: !1
            }).toggle()
        })), xt(Kn);
        const Gn = "dropdown",
            Jn = ".bs.dropdown",
            Zn = ".data-api",
            ei = "ArrowUp",
            ti = "ArrowDown",
            ni = `hide${Jn}`,
            ii = `hidden${Jn}`,
            ri = `show${Jn}`,
            oi = `shown${Jn}`,
            si = `click${Jn}${Zn}`,
            ai = `keydown${Jn}${Zn}`,
            li = `keyup${Jn}${Zn}`,
            ci = "show",
            ui = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            fi = `${ui}.${ci}`,
            di = ".dropdown-menu",
            hi = wt() ? "top-end" : "top-start",
            pi = wt() ? "top-start" : "top-end",
            gi = wt() ? "bottom-end" : "bottom-start",
            mi = wt() ? "bottom-start" : "bottom-end",
            vi = wt() ? "left-start" : "right-start",
            yi = wt() ? "right-start" : "left-start",
            bi = {
                autoClose: !0,
                boundary: "clippingParents",
                display: "dynamic",
                offset: [0, 2],
                popperConfig: null,
                reference: "toggle"
            },
            _i = {
                autoClose: "(boolean|string)",
                boundary: "(string|element)",
                display: "string",
                offset: "(array|string|function)",
                popperConfig: "(null|object|function)",
                reference: "(string|element|object)"
            };
        class wi extends Qt {
            constructor(e, t) {
                super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = rn.next(this._element, di)[0] || rn.prev(this._element, di)[0] || rn.findOne(di, this._parent), this._inNavbar = this._detectNavbar()
            }
            static get Default() {
                return bi
            }
            static get DefaultType() {
                return _i
            }
            static get NAME() {
                return Gn
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show()
            }
            show() {
                if (gt(this._element) || this._isShown()) return;
                const e = {
                    relatedTarget: this._element
                };
                if (!Ft.trigger(this._element, ri, e).defaultPrevented) {
                    if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                        for (const e of [].concat(...document.body.children)) Ft.on(e, "mouseover", vt);
                    this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(ci), this._element.classList.add(ci), Ft.trigger(this._element, oi, e)
                }
            }
            hide() {
                if (gt(this._element) || !this._isShown()) return;
                const e = {
                    relatedTarget: this._element
                };
                this._completeHide(e)
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose()
            }
            update() {
                this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
            }
            _completeHide(e) {
                if (!Ft.trigger(this._element, ni, e).defaultPrevented) {
                    if ("ontouchstart" in document.documentElement)
                        for (const e of [].concat(...document.body.children)) Ft.off(e, "mouseover", vt);
                    this._popper && this._popper.destroy(), this._menu.classList.remove(ci), this._element.classList.remove(ci), this._element.setAttribute("aria-expanded", "false"), Ut.removeDataAttribute(this._menu, "popper"), Ft.trigger(this._element, ii, e)
                }
            }
            _getConfig(e) {
                if ("object" == typeof (e = super._getConfig(e)).reference && !dt(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(`${Gn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                return e
            }
            _createPopper() {
                if (void 0 === e) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                let t = this._element;
                "parent" === this._config.reference ? t = this._parent : dt(this._config.reference) ? t = ht(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
                const n = this._getPopperConfig();
                this._popper = ot(t, this._menu, n)
            }
            _isShown() {
                return this._menu.classList.contains(ci)
            }
            _getPlacement() {
                const e = this._parent;
                if (e.classList.contains("dropend")) return vi;
                if (e.classList.contains("dropstart")) return yi;
                if (e.classList.contains("dropup-center")) return "top";
                if (e.classList.contains("dropdown-center")) return "bottom";
                const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                return e.classList.contains("dropup") ? t ? pi : hi : t ? mi : gi
            }
            _detectNavbar() {
                return null !== this._element.closest(".navbar")
            }
            _getOffset() {
                const {
                    offset: e
                } = this._config;
                return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
            }
            _getPopperConfig() {
                const e = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }]
                };
                return (this._inNavbar || "static" === this._config.display) && (Ut.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
                    name: "applyStyles",
                    enabled: !1
                }]), {
                    ...e,
                    ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
                }
            }
            _selectMenuItem({
                key: e,
                target: t
            }) {
                const n = rn.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((e => pt(e)));
                n.length && Et(n, t, e === ti, !n.includes(t)).focus()
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = wi.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
            static clearMenus(e) {
                if (2 === e.button || "keyup" === e.type && "Tab" !== e.key) return;
                const t = rn.find(fi);
                for (const n of t) {
                    const t = wi.getInstance(n);
                    if (!t || !1 === t._config.autoClose) continue;
                    const i = e.composedPath(),
                        r = i.includes(t._menu);
                    if (i.includes(t._element) || "inside" === t._config.autoClose && !r || "outside" === t._config.autoClose && r) continue;
                    if (t._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                    const o = {
                        relatedTarget: t._element
                    };
                    "click" === e.type && (o.clickEvent = e), t._completeHide(o)
                }
            }
            static dataApiKeydownHandler(e) {
                const t = /input|textarea/i.test(e.target.tagName),
                    n = "Escape" === e.key,
                    i = [ei, ti].includes(e.key);
                if (!i && !n) return;
                if (t && !n) return;
                e.preventDefault();
                const r = this.matches(ui) ? this : rn.prev(this, ui)[0] || rn.next(this, ui)[0] || rn.findOne(ui, e.delegateTarget.parentNode),
                    o = wi.getOrCreateInstance(r);
                if (i) return e.stopPropagation(), o.show(), void o._selectMenuItem(e);
                o._isShown() && (e.stopPropagation(), o.hide(), r.focus())
            }
        }
        Ft.on(document, ai, ui, wi.dataApiKeydownHandler), Ft.on(document, ai, di, wi.dataApiKeydownHandler), Ft.on(document, si, wi.clearMenus), Ft.on(document, li, wi.clearMenus), Ft.on(document, si, ui, (function (e) {
            e.preventDefault(), wi.getOrCreateInstance(this).toggle()
        })), xt(wi);
        const xi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            Ti = ".sticky-top",
            Ci = "padding-right",
            Ei = "margin-right";
        class Ai {
            constructor() {
                this._element = document.body
            }
            getWidth() {
                const e = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - e)
            }
            hide() {
                const e = this.getWidth();
                this._disableOverFlow(), this._setElementAttributes(this._element, Ci, (t => t + e)), this._setElementAttributes(xi, Ci, (t => t + e)), this._setElementAttributes(Ti, Ei, (t => t - e))
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ci), this._resetElementAttributes(xi, Ci), this._resetElementAttributes(Ti, Ei)
            }
            isOverflowing() {
                return this.getWidth() > 0
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
            }
            _setElementAttributes(e, t, n) {
                const i = this.getWidth();
                this._applyManipulationCallback(e, (e => {
                    if (e !== this._element && window.innerWidth > e.clientWidth + i) return;
                    this._saveInitialAttribute(e, t);
                    const r = window.getComputedStyle(e).getPropertyValue(t);
                    e.style.setProperty(t, `${n(Number.parseFloat(r))}px`)
                }))
            }
            _saveInitialAttribute(e, t) {
                const n = e.style.getPropertyValue(t);
                n && Ut.setDataAttribute(e, t, n)
            }
            _resetElementAttributes(e, t) {
                this._applyManipulationCallback(e, (e => {
                    const n = Ut.getDataAttribute(e, t);
                    null !== n ? (Ut.removeDataAttribute(e, t), e.style.setProperty(t, n)) : e.style.removeProperty(t)
                }))
            }
            _applyManipulationCallback(e, t) {
                if (dt(e)) t(e);
                else
                    for (const n of rn.find(e, this._element)) t(n)
            }
        }
        const ki = "backdrop",
            Si = "show",
            Ni = `mousedown.bs.${ki}`,
            Li = {
                className: "modal-backdrop",
                clickCallback: null,
                isAnimated: !1,
                isVisible: !0,
                rootElement: "body"
            },
            Oi = {
                className: "string",
                clickCallback: "(function|null)",
                isAnimated: "boolean",
                isVisible: "boolean",
                rootElement: "(element|string)"
            };
        class Di extends Yt {
            constructor(e) {
                super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null
            }
            static get Default() {
                return Li
            }
            static get DefaultType() {
                return Oi
            }
            static get NAME() {
                return ki
            }
            show(e) {
                if (!this._config.isVisible) return void Tt(e);
                this._append();
                const t = this._getElement();
                this._config.isAnimated && yt(t), t.classList.add(Si), this._emulateAnimation((() => {
                    Tt(e)
                }))
            }
            hide(e) {
                this._config.isVisible ? (this._getElement().classList.remove(Si), this._emulateAnimation((() => {
                    this.dispose(), Tt(e)
                }))) : Tt(e)
            }
            dispose() {
                this._isAppended && (Ft.off(this._element, Ni), this._element.remove(), this._isAppended = !1)
            }
            _getElement() {
                if (!this._element) {
                    const e = document.createElement("div");
                    e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
                }
                return this._element
            }
            _configAfterMerge(e) {
                return e.rootElement = ht(e.rootElement), e
            }
            _append() {
                if (this._isAppended) return;
                const e = this._getElement();
                this._config.rootElement.append(e), Ft.on(e, Ni, (() => {
                    Tt(this._config.clickCallback)
                })), this._isAppended = !0
            }
            _emulateAnimation(e) {
                Ct(e, this._getElement(), this._config.isAnimated)
            }
        }
        const ji = ".bs.focustrap",
            Pi = `focusin${ji}`,
            Ii = `keydown.tab${ji}`,
            Mi = "backward",
            $i = {
                autofocus: !0,
                trapElement: null
            },
            qi = {
                autofocus: "boolean",
                trapElement: "element"
            };
        class Hi extends Yt {
            constructor(e) {
                super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
            }
            static get Default() {
                return $i
            }
            static get DefaultType() {
                return qi
            }
            static get NAME() {
                return "focustrap"
            }
            activate() {
                this._isActive || (this._config.autofocus && this._config.trapElement.focus(), Ft.off(document, ji), Ft.on(document, Pi, (e => this._handleFocusin(e))), Ft.on(document, Ii, (e => this._handleKeydown(e))), this._isActive = !0)
            }
            deactivate() {
                this._isActive && (this._isActive = !1, Ft.off(document, ji))
            }
            _handleFocusin(e) {
                const {
                    trapElement: t
                } = this._config;
                if (e.target === document || e.target === t || t.contains(e.target)) return;
                const n = rn.focusableChildren(t);
                0 === n.length ? t.focus() : this._lastTabNavDirection === Mi ? n[n.length - 1].focus() : n[0].focus()
            }
            _handleKeydown(e) {
                "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? Mi : "forward")
            }
        }
        const Ri = ".bs.modal",
            Fi = `hide${Ri}`,
            Bi = `hidePrevented${Ri}`,
            Wi = `hidden${Ri}`,
            zi = `show${Ri}`,
            Vi = `shown${Ri}`,
            Xi = `resize${Ri}`,
            Ui = `click.dismiss${Ri}`,
            Yi = `mousedown.dismiss${Ri}`,
            Qi = `keydown.dismiss${Ri}`,
            Ki = `click${Ri}.data-api`,
            Gi = "modal-open",
            Ji = "show",
            Zi = "modal-static",
            er = {
                backdrop: !0,
                focus: !0,
                keyboard: !0
            },
            tr = {
                backdrop: "(boolean|string)",
                focus: "boolean",
                keyboard: "boolean"
            };
        class nr extends Qt {
            constructor(e, t) {
                super(e, t), this._dialog = rn.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ai, this._addEventListeners()
            }
            static get Default() {
                return er
            }
            static get DefaultType() {
                return tr
            }
            static get NAME() {
                return "modal"
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e)
            }
            show(e) {
                this._isShown || this._isTransitioning || Ft.trigger(this._element, zi, {
                    relatedTarget: e
                }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Gi), this._adjustDialog(), this._backdrop.show((() => this._showElement(e))))
            }
            hide() {
                this._isShown && !this._isTransitioning && (Ft.trigger(this._element, Fi).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Ji), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
            }
            dispose() {
                for (const e of [window, this._dialog]) Ft.off(e, Ri);
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
            }
            handleUpdate() {
                this._adjustDialog()
            }
            _initializeBackDrop() {
                return new Di({
                    isVisible: Boolean(this._config.backdrop),
                    isAnimated: this._isAnimated()
                })
            }
            _initializeFocusTrap() {
                return new Hi({
                    trapElement: this._element
                })
            }
            _showElement(e) {
                document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
                const t = rn.findOne(".modal-body", this._dialog);
                t && (t.scrollTop = 0), yt(this._element), this._element.classList.add(Ji), this._queueCallback((() => {
                    this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, Ft.trigger(this._element, Vi, {
                        relatedTarget: e
                    })
                }), this._dialog, this._isAnimated())
            }
            _addEventListeners() {
                Ft.on(this._element, Qi, (e => {
                    if ("Escape" === e.key) return this._config.keyboard ? (e.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
                })), Ft.on(window, Xi, (() => {
                    this._isShown && !this._isTransitioning && this._adjustDialog()
                })), Ft.on(this._element, Yi, (e => {
                    Ft.one(this._element, Ui, (t => {
                        this._element === e.target && this._element === t.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
                    }))
                }))
            }
            _hideModal() {
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                    document.body.classList.remove(Gi), this._resetAdjustments(), this._scrollBar.reset(), Ft.trigger(this._element, Wi)
                }))
            }
            _isAnimated() {
                return this._element.classList.contains("fade")
            }
            _triggerBackdropTransition() {
                if (Ft.trigger(this._element, Bi).defaultPrevented) return;
                const e = this._element.scrollHeight > document.documentElement.clientHeight,
                    t = this._element.style.overflowY;
                "hidden" === t || this._element.classList.contains(Zi) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Zi), this._queueCallback((() => {
                    this._element.classList.remove(Zi), this._queueCallback((() => {
                        this._element.style.overflowY = t
                    }), this._dialog)
                }), this._dialog), this._element.focus())
            }
            _adjustDialog() {
                const e = this._element.scrollHeight > document.documentElement.clientHeight,
                    t = this._scrollBar.getWidth(),
                    n = t > 0;
                if (n && !e) {
                    const e = wt() ? "paddingLeft" : "paddingRight";
                    this._element.style[e] = `${t}px`
                }
                if (!n && e) {
                    const e = wt() ? "paddingRight" : "paddingLeft";
                    this._element.style[e] = `${t}px`
                }
            }
            _resetAdjustments() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }
            static jQueryInterface(e, t) {
                return this.each((function () {
                    const n = nr.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                        n[e](t)
                    }
                }))
            }
        }
        Ft.on(document, Ki, '[data-bs-toggle="modal"]', (function (e) {
            const t = ut(this);
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(), Ft.one(t, zi, (e => {
                e.defaultPrevented || Ft.one(t, Wi, (() => {
                    pt(this) && this.focus()
                }))
            }));
            const n = rn.findOne(".modal.show");
            n && nr.getInstance(n).hide(), nr.getOrCreateInstance(t).toggle(this)
        })), Kt(nr), xt(nr);
        const ir = ".bs.offcanvas",
            rr = ".data-api",
            or = `load${ir}${rr}`,
            sr = "show",
            ar = "showing",
            lr = "hiding",
            cr = ".offcanvas.show",
            ur = `show${ir}`,
            fr = `shown${ir}`,
            dr = `hide${ir}`,
            hr = `hidePrevented${ir}`,
            pr = `hidden${ir}`,
            gr = `resize${ir}`,
            mr = `click${ir}${rr}`,
            vr = `keydown.dismiss${ir}`,
            yr = {
                backdrop: !0,
                keyboard: !0,
                scroll: !1
            },
            br = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                scroll: "boolean"
            };
        class _r extends Qt {
            constructor(e, t) {
                super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
            }
            static get Default() {
                return yr
            }
            static get DefaultType() {
                return br
            }
            static get NAME() {
                return "offcanvas"
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e)
            }
            show(e) {
                this._isShown || Ft.trigger(this._element, ur, {
                    relatedTarget: e
                }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new Ai).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ar), this._queueCallback((() => {
                    this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(sr), this._element.classList.remove(ar), Ft.trigger(this._element, fr, {
                        relatedTarget: e
                    })
                }), this._element, !0))
            }
            hide() {
                this._isShown && (Ft.trigger(this._element, dr).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(lr), this._backdrop.hide(), this._queueCallback((() => {
                    this._element.classList.remove(sr, lr), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new Ai).reset(), Ft.trigger(this._element, pr)
                }), this._element, !0)))
            }
            dispose() {
                this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
            }
            _initializeBackDrop() {
                const e = Boolean(this._config.backdrop);
                return new Di({
                    className: "offcanvas-backdrop",
                    isVisible: e,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: e ? () => {
                        "static" !== this._config.backdrop ? this.hide() : Ft.trigger(this._element, hr)
                    } : null
                })
            }
            _initializeFocusTrap() {
                return new Hi({
                    trapElement: this._element
                })
            }
            _addEventListeners() {
                Ft.on(this._element, vr, (e => {
                    "Escape" === e.key && (this._config.keyboard ? this.hide() : Ft.trigger(this._element, hr))
                }))
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = _r.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e](this)
                    }
                }))
            }
        }
        Ft.on(document, mr, '[data-bs-toggle="offcanvas"]', (function (e) {
            const t = ut(this);
            if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), gt(this)) return;
            Ft.one(t, pr, (() => {
                pt(this) && this.focus()
            }));
            const n = rn.findOne(cr);
            n && n !== t && _r.getInstance(n).hide(), _r.getOrCreateInstance(t).toggle(this)
        })), Ft.on(window, or, (() => {
            for (const e of rn.find(cr)) _r.getOrCreateInstance(e).show()
        })), Ft.on(window, gr, (() => {
            for (const e of rn.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(e).position && _r.getOrCreateInstance(e).hide()
        })), Kt(_r), xt(_r);
        const wr = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
            xr = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
            Tr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
            Cr = (e, t) => {
                const n = e.nodeName.toLowerCase();
                return t.includes(n) ? !wr.has(n) || Boolean(xr.test(e.nodeValue) || Tr.test(e.nodeValue)) : t.filter((e => e instanceof RegExp)).some((e => e.test(n)))
            },
            Er = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            Ar = {
                allowList: Er,
                content: {},
                extraClass: "",
                html: !1,
                sanitize: !0,
                sanitizeFn: null,
                template: "<div></div>"
            },
            kr = {
                allowList: "object",
                content: "object",
                extraClass: "(string|function)",
                html: "boolean",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                template: "string"
            },
            Sr = {
                entry: "(string|element|function|null)",
                selector: "(string|element)"
            };
        class Nr extends Yt {
            constructor(e) {
                super(), this._config = this._getConfig(e)
            }
            static get Default() {
                return Ar
            }
            static get DefaultType() {
                return kr
            }
            static get NAME() {
                return "TemplateFactory"
            }
            getContent() {
                return Object.values(this._config.content).map((e => this._resolvePossibleFunction(e))).filter(Boolean)
            }
            hasContent() {
                return this.getContent().length > 0
            }
            changeContent(e) {
                return this._checkContent(e), this._config.content = {
                    ...this._config.content,
                    ...e
                }, this
            }
            toHtml() {
                const e = document.createElement("div");
                e.innerHTML = this._maybeSanitize(this._config.template);
                for (const [t, n] of Object.entries(this._config.content)) this._setContent(e, n, t);
                const t = e.children[0],
                    n = this._resolvePossibleFunction(this._config.extraClass);
                return n && t.classList.add(...n.split(" ")), t
            }
            _typeCheckConfig(e) {
                super._typeCheckConfig(e), this._checkContent(e.content)
            }
            _checkContent(e) {
                for (const [t, n] of Object.entries(e)) super._typeCheckConfig({
                    selector: t,
                    entry: n
                }, Sr)
            }
            _setContent(e, t, n) {
                const i = rn.findOne(n, e);
                i && ((t = this._resolvePossibleFunction(t)) ? dt(t) ? this._putElementInTemplate(ht(t), i) : this._config.html ? i.innerHTML = this._maybeSanitize(t) : i.textContent = t : i.remove())
            }
            _maybeSanitize(e) {
                return this._config.sanitize ? function (e, t, n) {
                    if (!e.length) return e;
                    if (n && "function" == typeof n) return n(e);
                    const i = (new window.DOMParser).parseFromString(e, "text/html"),
                        r = [].concat(...i.body.querySelectorAll("*"));
                    for (const e of r) {
                        const n = e.nodeName.toLowerCase();
                        if (!Object.keys(t).includes(n)) {
                            e.remove();
                            continue
                        }
                        const i = [].concat(...e.attributes),
                            r = [].concat(t["*"] || [], t[n] || []);
                        for (const t of i) Cr(t, r) || e.removeAttribute(t.nodeName)
                    }
                    return i.body.innerHTML
                }(e, this._config.allowList, this._config.sanitizeFn) : e
            }
            _resolvePossibleFunction(e) {
                return "function" == typeof e ? e(this) : e
            }
            _putElementInTemplate(e, t) {
                if (this._config.html) return t.innerHTML = "", void t.append(e);
                t.textContent = e.textContent
            }
        }
        const Lr = new Set(["sanitize", "allowList", "sanitizeFn"]),
            Or = "fade",
            Dr = "show",
            jr = ".modal",
            Pr = "hide.bs.modal",
            Ir = "hover",
            Mr = "focus",
            $r = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: wt() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: wt() ? "right" : "left"
            },
            qr = {
                allowList: Er,
                animation: !0,
                boundary: "clippingParents",
                container: !1,
                customClass: "",
                delay: 0,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                html: !1,
                offset: [0, 0],
                placement: "top",
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                title: "",
                trigger: "hover focus"
            },
            Hr = {
                allowList: "object",
                animation: "boolean",
                boundary: "(string|element)",
                container: "(string|element|boolean)",
                customClass: "(string|function)",
                delay: "(number|object)",
                fallbackPlacements: "array",
                html: "boolean",
                offset: "(array|string|function)",
                placement: "(string|function)",
                popperConfig: "(null|object|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                selector: "(string|boolean)",
                template: "string",
                title: "(string|element|function)",
                trigger: "string"
            };
        class Rr extends Qt {
            constructor(t, n) {
                if (void 0 === e) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                super(t, n), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle()
            }
            static get Default() {
                return qr
            }
            static get DefaultType() {
                return Hr
            }
            static get NAME() {
                return "tooltip"
            }
            enable() {
                this._isEnabled = !0
            }
            disable() {
                this._isEnabled = !1
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled
            }
            toggle() {
                this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter())
            }
            dispose() {
                clearTimeout(this._timeout), Ft.off(this._element.closest(jr), Pr, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose()
            }
            show() {
                if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                if (!this._isWithContent() || !this._isEnabled) return;
                const e = Ft.trigger(this._element, this.constructor.eventName("show")),
                    t = (mt(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
                if (e.defaultPrevented || !t) return;
                this._disposePopper();
                const n = this._getTipElement();
                this._element.setAttribute("aria-describedby", n.getAttribute("id"));
                const {
                    container: i
                } = this._config;
                if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(n), Ft.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(n), n.classList.add(Dr), "ontouchstart" in document.documentElement)
                    for (const e of [].concat(...document.body.children)) Ft.on(e, "mouseover", vt);
                this._queueCallback((() => {
                    Ft.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1
                }), this.tip, this._isAnimated())
            }
            hide() {
                if (this._isShown() && !Ft.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
                    if (this._getTipElement().classList.remove(Dr), "ontouchstart" in document.documentElement)
                        for (const e of [].concat(...document.body.children)) Ft.off(e, "mouseover", vt);
                    this._activeTrigger.click = !1, this._activeTrigger[Mr] = !1, this._activeTrigger[Ir] = !1, this._isHovered = null, this._queueCallback((() => {
                        this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), Ft.trigger(this._element, this.constructor.eventName("hidden")))
                    }), this.tip, this._isAnimated())
                }
            }
            update() {
                this._popper && this._popper.update()
            }
            _isWithContent() {
                return Boolean(this._getTitle())
            }
            _getTipElement() {
                return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
            }
            _createTipElement(e) {
                const t = this._getTemplateFactory(e).toHtml();
                if (!t) return null;
                t.classList.remove(Or, Dr), t.classList.add(`bs-${this.constructor.NAME}-auto`);
                const n = (e => {
                    do {
                        e += Math.floor(1e6 * Math.random())
                    } while (document.getElementById(e));
                    return e
                })(this.constructor.NAME).toString();
                return t.setAttribute("id", n), this._isAnimated() && t.classList.add(Or), t
            }
            setContent(e) {
                this._newContent = e, this._isShown() && (this._disposePopper(), this.show())
            }
            _getTemplateFactory(e) {
                return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new Nr({
                    ...this._config,
                    content: e,
                    extraClass: this._resolvePossibleFunction(this._config.customClass)
                }), this._templateFactory
            }
            _getContentForTemplate() {
                return {
                    ".tooltip-inner": this._getTitle()
                }
            }
            _getTitle() {
                return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title")
            }
            _initializeOnDelegatedTarget(e) {
                return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
            }
            _isAnimated() {
                return this._config.animation || this.tip && this.tip.classList.contains(Or)
            }
            _isShown() {
                return this.tip && this.tip.classList.contains(Dr)
            }
            _createPopper(e) {
                const t = "function" == typeof this._config.placement ? this._config.placement.call(this, e, this._element) : this._config.placement,
                    n = $r[t.toUpperCase()];
                return ot(this._element, e, this._getPopperConfig(n))
            }
            _getOffset() {
                const {
                    offset: e
                } = this._config;
                return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
            }
            _resolvePossibleFunction(e) {
                return "function" == typeof e ? e.call(this._element) : e
            }
            _getPopperConfig(e) {
                const t = {
                    placement: e,
                    modifiers: [{
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements
                        }
                    }, {
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: `.${this.constructor.NAME}-arrow`
                        }
                    }, {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: e => {
                            this._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                        }
                    }]
                };
                return {
                    ...t,
                    ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
                }
            }
            _setListeners() {
                const e = this._config.trigger.split(" ");
                for (const t of e)
                    if ("click" === t) Ft.on(this._element, this.constructor.eventName("click"), this._config.selector, (e => {
                        this._initializeOnDelegatedTarget(e).toggle()
                    }));
                    else if ("manual" !== t) {
                    const e = t === Ir ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                        n = t === Ir ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                    Ft.on(this._element, e, this._config.selector, (e => {
                        const t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusin" === e.type ? Mr : Ir] = !0, t._enter()
                    })), Ft.on(this._element, n, this._config.selector, (e => {
                        const t = this._initializeOnDelegatedTarget(e);
                        t._activeTrigger["focusout" === e.type ? Mr : Ir] = t._element.contains(e.relatedTarget), t._leave()
                    }))
                }
                this._hideModalHandler = () => {
                    this._element && this.hide()
                }, Ft.on(this._element.closest(jr), Pr, this._hideModalHandler)
            }
            _fixTitle() {
                const e = this._element.getAttribute("title");
                e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.setAttribute("data-bs-original-title", e), this._element.removeAttribute("title"))
            }
            _enter() {
                this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                    this._isHovered && this.show()
                }), this._config.delay.show))
            }
            _leave() {
                this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                    this._isHovered || this.hide()
                }), this._config.delay.hide))
            }
            _setTimeout(e, t) {
                clearTimeout(this._timeout), this._timeout = setTimeout(e, t)
            }
            _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(!0)
            }
            _getConfig(e) {
                const t = Ut.getDataAttributes(this._element);
                for (const e of Object.keys(t)) Lr.has(e) && delete t[e];
                return e = {
                    ...t,
                    ..."object" == typeof e && e ? e : {}
                }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
            }
            _configAfterMerge(e) {
                return e.container = !1 === e.container ? document.body : ht(e.container), "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), e
            }
            _getDelegateConfig() {
                const e = {};
                for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
                return e.selector = !1, e.trigger = "manual", e
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null)
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = Rr.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        xt(Rr);
        const Fr = {
                ...Rr.Default,
                content: "",
                offset: [0, 8],
                placement: "right",
                template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: "click"
            },
            Br = {
                ...Rr.DefaultType,
                content: "(null|string|element|function)"
            };
        class Wr extends Rr {
            static get Default() {
                return Fr
            }
            static get DefaultType() {
                return Br
            }
            static get NAME() {
                return "popover"
            }
            _isWithContent() {
                return this._getTitle() || this._getContent()
            }
            _getContentForTemplate() {
                return {
                    ".popover-header": this._getTitle(),
                    ".popover-body": this._getContent()
                }
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content)
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = Wr.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        xt(Wr);
        const zr = ".bs.scrollspy",
            Vr = `activate${zr}`,
            Xr = `click${zr}`,
            Ur = `load${zr}.data-api`,
            Yr = "active",
            Qr = "[href]",
            Kr = ".nav-link",
            Gr = `${Kr}, .nav-item > ${Kr}, .list-group-item`,
            Jr = {
                offset: null,
                rootMargin: "0px 0px -25%",
                smoothScroll: !1,
                target: null,
                threshold: [.1, .5, 1]
            },
            Zr = {
                offset: "(number|null)",
                rootMargin: "string",
                smoothScroll: "boolean",
                target: "element",
                threshold: "array"
            };
        class eo extends Qt {
            constructor(e, t) {
                super(e, t), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0
                }, this.refresh()
            }
            static get Default() {
                return Jr
            }
            static get DefaultType() {
                return Zr
            }
            static get NAME() {
                return "scrollspy"
            }
            refresh() {
                this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
                for (const e of this._observableSections.values()) this._observer.observe(e)
            }
            dispose() {
                this._observer.disconnect(), super.dispose()
            }
            _configAfterMerge(e) {
                return e.target = ht(e.target) || document.body, e.rootMargin = e.offset ? `${e.offset}px 0px -30%` : e.rootMargin, "string" == typeof e.threshold && (e.threshold = e.threshold.split(",").map((e => Number.parseFloat(e)))), e
            }
            _maybeEnableSmoothScroll() {
                this._config.smoothScroll && (Ft.off(this._config.target, Xr), Ft.on(this._config.target, Xr, Qr, (e => {
                    const t = this._observableSections.get(e.target.hash);
                    if (t) {
                        e.preventDefault();
                        const n = this._rootElement || window,
                            i = t.offsetTop - this._element.offsetTop;
                        if (n.scrollTo) return void n.scrollTo({
                            top: i,
                            behavior: "smooth"
                        });
                        n.scrollTop = i
                    }
                })))
            }
            _getNewObserver() {
                const e = {
                    root: this._rootElement,
                    threshold: this._config.threshold,
                    rootMargin: this._config.rootMargin
                };
                return new IntersectionObserver((e => this._observerCallback(e)), e)
            }
            _observerCallback(e) {
                const t = e => this._targetLinks.get(`#${e.target.id}`),
                    n = e => {
                        this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e))
                    },
                    i = (this._rootElement || document.documentElement).scrollTop,
                    r = i >= this._previousScrollData.parentScrollTop;
                this._previousScrollData.parentScrollTop = i;
                for (const o of e) {
                    if (!o.isIntersecting) {
                        this._activeTarget = null, this._clearActiveClass(t(o));
                        continue
                    }
                    const e = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                    if (r && e) {
                        if (n(o), !i) return
                    } else r || e || n(o)
                }
            }
            _initializeTargetsAndObservables() {
                this._targetLinks = new Map, this._observableSections = new Map;
                const e = rn.find(Qr, this._config.target);
                for (const t of e) {
                    if (!t.hash || gt(t)) continue;
                    const e = rn.findOne(t.hash, this._element);
                    pt(e) && (this._targetLinks.set(t.hash, t), this._observableSections.set(t.hash, e))
                }
            }
            _process(e) {
                this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(Yr), this._activateParents(e), Ft.trigger(this._element, Vr, {
                    relatedTarget: e
                }))
            }
            _activateParents(e) {
                if (e.classList.contains("dropdown-item")) rn.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(Yr);
                else
                    for (const t of rn.parents(e, ".nav, .list-group"))
                        for (const e of rn.prev(t, Gr)) e.classList.add(Yr)
            }
            _clearActiveClass(e) {
                e.classList.remove(Yr);
                const t = rn.find(`${Qr}.${Yr}`, e);
                for (const e of t) e.classList.remove(Yr)
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = eo.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        Ft.on(window, Ur, (() => {
            for (const e of rn.find('[data-bs-spy="scroll"]')) eo.getOrCreateInstance(e)
        })), xt(eo);
        const to = ".bs.tab",
            no = `hide${to}`,
            io = `hidden${to}`,
            ro = `show${to}`,
            oo = `shown${to}`,
            so = `click${to}`,
            ao = `keydown${to}`,
            lo = `load${to}`,
            co = "ArrowLeft",
            uo = "ArrowRight",
            fo = "ArrowUp",
            ho = "ArrowDown",
            po = "active",
            go = "fade",
            mo = "show",
            vo = ":not(.dropdown-toggle)",
            yo = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            bo = `.nav-link${vo}, .list-group-item${vo}, [role="tab"]${vo}, ${yo}`,
            _o = `.${po}[data-bs-toggle="tab"], .${po}[data-bs-toggle="pill"], .${po}[data-bs-toggle="list"]`;
        class wo extends Qt {
            constructor(e) {
                super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), Ft.on(this._element, ao, (e => this._keydown(e))))
            }
            static get NAME() {
                return "tab"
            }
            show() {
                const e = this._element;
                if (this._elemIsActive(e)) return;
                const t = this._getActiveElem(),
                    n = t ? Ft.trigger(t, no, {
                        relatedTarget: e
                    }) : null;
                Ft.trigger(e, ro, {
                    relatedTarget: t
                }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(t, e), this._activate(e, t))
            }
            _activate(e, t) {
                e && (e.classList.add(po), this._activate(ut(e)), this._queueCallback((() => {
                    "tab" === e.getAttribute("role") ? (e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), Ft.trigger(e, oo, {
                        relatedTarget: t
                    })) : e.classList.add(mo)
                }), e, e.classList.contains(go)))
            }
            _deactivate(e, t) {
                e && (e.classList.remove(po), e.blur(), this._deactivate(ut(e)), this._queueCallback((() => {
                    "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), Ft.trigger(e, io, {
                        relatedTarget: t
                    })) : e.classList.remove(mo)
                }), e, e.classList.contains(go)))
            }
            _keydown(e) {
                if (![co, uo, fo, ho].includes(e.key)) return;
                e.stopPropagation(), e.preventDefault();
                const t = [uo, ho].includes(e.key),
                    n = Et(this._getChildren().filter((e => !gt(e))), e.target, t, !0);
                n && (n.focus({
                    preventScroll: !0
                }), wo.getOrCreateInstance(n).show())
            }
            _getChildren() {
                return rn.find(bo, this._parent)
            }
            _getActiveElem() {
                return this._getChildren().find((e => this._elemIsActive(e))) || null
            }
            _setInitialAttributes(e, t) {
                this._setAttributeIfNotExists(e, "role", "tablist");
                for (const e of t) this._setInitialAttributesOnChild(e)
            }
            _setInitialAttributesOnChild(e) {
                e = this._getInnerElement(e);
                const t = this._elemIsActive(e),
                    n = this._getOuterElement(e);
                e.setAttribute("aria-selected", t), n !== e && this._setAttributeIfNotExists(n, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e)
            }
            _setInitialAttributesOnTargetPanel(e) {
                const t = ut(e);
                t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`))
            }
            _toggleDropDown(e, t) {
                const n = this._getOuterElement(e);
                if (!n.classList.contains("dropdown")) return;
                const i = (e, i) => {
                    const r = rn.findOne(e, n);
                    r && r.classList.toggle(i, t)
                };
                i(".dropdown-toggle", po), i(".dropdown-menu", mo), n.setAttribute("aria-expanded", t)
            }
            _setAttributeIfNotExists(e, t, n) {
                e.hasAttribute(t) || e.setAttribute(t, n)
            }
            _elemIsActive(e) {
                return e.classList.contains(po)
            }
            _getInnerElement(e) {
                return e.matches(bo) ? e : rn.findOne(bo, e)
            }
            _getOuterElement(e) {
                return e.closest(".nav-item, .list-group-item") || e
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = wo.getOrCreateInstance(this);
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                }))
            }
        }
        Ft.on(document, so, yo, (function (e) {
            ["A", "AREA"].includes(this.tagName) && e.preventDefault(), gt(this) || wo.getOrCreateInstance(this).show()
        })), Ft.on(window, lo, (() => {
            for (const e of rn.find(_o)) wo.getOrCreateInstance(e)
        })), xt(wo);
        const xo = ".bs.toast",
            To = `mouseover${xo}`,
            Co = `mouseout${xo}`,
            Eo = `focusin${xo}`,
            Ao = `focusout${xo}`,
            ko = `hide${xo}`,
            So = `hidden${xo}`,
            No = `show${xo}`,
            Lo = `shown${xo}`,
            Oo = "hide",
            Do = "show",
            jo = "showing",
            Po = {
                animation: "boolean",
                autohide: "boolean",
                delay: "number"
            },
            Io = {
                animation: !0,
                autohide: !0,
                delay: 5e3
            };
        class Mo extends Qt {
            constructor(e, t) {
                super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
            }
            static get Default() {
                return Io
            }
            static get DefaultType() {
                return Po
            }
            static get NAME() {
                return "toast"
            }
            show() {
                Ft.trigger(this._element, No).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Oo), yt(this._element), this._element.classList.add(Do, jo), this._queueCallback((() => {
                    this._element.classList.remove(jo), Ft.trigger(this._element, Lo), this._maybeScheduleHide()
                }), this._element, this._config.animation))
            }
            hide() {
                this.isShown() && (Ft.trigger(this._element, ko).defaultPrevented || (this._element.classList.add(jo), this._queueCallback((() => {
                    this._element.classList.add(Oo), this._element.classList.remove(jo, Do), Ft.trigger(this._element, So)
                }), this._element, this._config.animation)))
            }
            dispose() {
                this._clearTimeout(), this.isShown() && this._element.classList.remove(Do), super.dispose()
            }
            isShown() {
                return this._element.classList.contains(Do)
            }
            _maybeScheduleHide() {
                this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                    this.hide()
                }), this._config.delay)))
            }
            _onInteraction(e, t) {
                switch (e.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = t;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = t
                }
                if (t) return void this._clearTimeout();
                const n = e.relatedTarget;
                this._element === n || this._element.contains(n) || this._maybeScheduleHide()
            }
            _setListeners() {
                Ft.on(this._element, To, (e => this._onInteraction(e, !0))), Ft.on(this._element, Co, (e => this._onInteraction(e, !1))), Ft.on(this._element, Eo, (e => this._onInteraction(e, !0))), Ft.on(this._element, Ao, (e => this._onInteraction(e, !1)))
            }
            _clearTimeout() {
                clearTimeout(this._timeout), this._timeout = null
            }
            static jQueryInterface(e) {
                return this.each((function () {
                    const t = Mo.getOrCreateInstance(this, e);
                    if ("string" == typeof e) {
                        if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                        t[e](this)
                    }
                }))
            }
        }

        function $o(e) {
            return $o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, $o(e)
        }

        function qo(e) {
            var t = this,
                n = function (e) {
                    return i.globalPrefix + e
                }(e.appName);
            if ("object" === $o(window[n])) return window[n];
            this.appName = e.appName, this.cssClass = e.cssClass, this.msgText = e.msgText, this.params = e, this.show = !1;
            var r = new S;
            window.addEventListener("resize", (function () {
                    A(t.cssClass), r.resize(), t.show = !1
                })), window[n] = this,
                function (e) {
                    console.log(i.title + " : v" + i.version + " : " + e)
                }(this.appName)
        }

        function Ho(e, t) {
            var n = e.tagName.toLowerCase(),
                i = c(e),
                r = null;
            if (i && ("presentation" === i || "none" === i)) return null;
            switch (n) {
                case "input":
                    switch (e.type) {
                        case "hidden":
                            t && (r = T(e));
                            break;
                        case "email":
                        case "password":
                        case "search":
                        case "tel":
                        case "text":
                        case "url":
                            null === (r = T(e)) && (r = y(e, "placeholder"));
                            break;
                        case "button":
                            r = y(e, "value");
                            break;
                        case "reset":
                            null === (r = y(e, "value")) && (r = w("Reset"));
                            break;
                        case "submit":
                            null === (r = y(e, "value")) && (r = w("Submit"));
                            break;
                        case "image":
                            null === (r = b(e)) && (r = y(e, "value"));
                            break;
                        default:
                            r = T(e)
                    }
                    break;
                case "button":
                case "label":
                case "a":
                    r = _(e);
                    break;
                case "keygen":
                case "meter":
                case "output":
                case "progress":
                case "select":
                    r = T(e);
                    break;
                case "textarea":
                    null === (r = T(e)) && (r = y(e, "placeholder"));
                    break;
                case "audio":
                case "embed":
                case "object":
                case "video":
                    r = {
                        name: "NOT YET IMPLEMENTED",
                        source: ""
                    };
                    break;
                case "iframe":
                    r = y(e, "title");
                    break;
                case "img":
                case "area":
                    r = b(e);
                    break;
                case "svg":
                    r = x(e, "title");
                    break;
                case "details":
                    r = function (e) {
                        var t, n;
                        if ((n = e.querySelector("summary")) && (t = v(n)), function (e) {
                                return e.hasAttribute("open")
                            }(e)) {
                            if (t += function (e, t) {
                                    var n, i = [];
                                    return Array.prototype.forEach.call(e.childNodes, (function (e) {
                                        switch (e.nodeType) {
                                            case Node.ELEMENT_NODE:
                                                (function (e) {
                                                    return "summary" !== e.tagName.toLowerCase()
                                                })(e) && (n = v(e)).length && i.push(n);
                                                break;
                                            case Node.TEXT_NODE:
                                                (n = d(e.textContent)).length && i.push(n)
                                        }
                                    })), i.length ? i.join(" ") : ""
                                }(e), t.length) return {
                                name: t,
                                source: "contents"
                            }
                        } else if (t.length) return {
                            name: t,
                            source: "summary element"
                        };
                        return null
                    }(e);
                    break;
                case "figure":
                    r = x(e, "figcaption");
                    break;
                case "table":
                    r = x(e, "caption");
                    break;
                default:
                    (function (e) {
                        var t = c(e);
                        if (null === t) return !1;
                        var n = ["button", "cell", "checkbox", "columnheader", "directory", "gridcell", "heading", "link", "listitem", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowgroup", "rowheader", "switch", "tab", "text", "tooltip", "treeitem"].find((function (e) {
                            return e === t
                        }));
                        return void 0 !== n
                    }(e) || t) && (r = _(e))
            }
            return null === r && (r = y(e, "title")), r
        }

        function Ro(e, t) {
            var n, i, r, o, s = h(e, t),
                a = [];
            if (s.length)
                for (n = s.split(" "), i = 0; i < n.length; i++)(r = document.getElementById(n[i])) && (o = Fo(r, !0)) && o.name.length && a.push(o.name);
            return a.length ? {
                name: a.join(" "),
                source: t
            } : null
        }

        function Fo(e, t) {
            var n = null;
            return t || (n = Ro(e, "aria-labelledby")), null === n && (n = y(e, "aria-label")), null === n && (n = Ho(e, t)), n
        }

        function Bo(e, t) {
            this.title = t, this.element = function (e) {
                    var t = e.tagName.toLowerCase(),
                        n = t;
                    if ("input" === t) {
                        var i = e.type;
                        i && i.length && (n += ' [type="' + i + '"]')
                    }
                    if ("label" === t) {
                        var r = h(e, "for");
                        r.length && (n += ' [for="' + r + '"]')
                    }
                    if (p(e)) {
                        var o = e.id;
                        o && o.length && (n += ' [id="' + o + '"]')
                    }
                    if (e.hasAttribute("role")) {
                        var s = h(e, "role");
                        s.length && (n += ' [role="' + s + '"]')
                    }
                    return n
                }(e), this.grpLabels = function (e) {
                    return p(e) ? function (e) {
                        var t = [];
                        return "function" == typeof e.closest ? (function e(t, n) {
                            var i = t.closest("fieldset");
                            if (i) {
                                var r = i.querySelector("legend");
                                if (r) {
                                    var o = v(r);
                                    o.length && n.push({
                                        name: o,
                                        source: "fieldset/legend"
                                    })
                                }
                                e(i.parentNode, n)
                            }
                        }(e, t), t) : t
                    }(e) : []
                }(e), this.accName = Fo(e), this.accDesc = function (e, t) {
                    var n = null;
                    return null === (n = Ro(e, "aria-describedby")) && (n = y(e, "title")), n
                }(e), this.role = c(e),
                function (e, t) {
                    if (null === e || null === t) return !1;
                    var n = e.name,
                        i = t.name;
                    return !("string" != typeof n || "string" != typeof i) && n.toLowerCase().includes(i.toLowerCase())
                }(this.accName, this.accDesc) && (this.accDesc = null)
        }
        Kt(Mo), xt(Mo), window.jQuery = L(), window.$ = L(), window.bootstrap = t, qo.prototype.run = function () {
                var e = new S;
                e.hide(), this.show = !this.show, this.show ? 0 === E(this.params) && (e.show(this.appName, this.msgText), this.show = !1) : A(this.cssClass)
            }, L()((function () {
                L()(".oaa-overlay-label").wrapInner("<a href='#'></a>"), [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map((function (e) {
                    return console.log(e), new Rr(e, {
                        selector: '[data-bs-toggle="tooltip"]'
                    })
                }))
            })), Bo.prototype.addProps = function (e) {
                this.props = e
            }, window.jQuery = L(), window.$ = L(), window.bootstrap = t,
            function () {
                ! function () {
                    var e = String.prototype;
                    Array.prototype.find || (Array.prototype.find = function (e) {
                        if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
                        if ("function" != typeof e) throw new TypeError("predicate must be a function");
                        for (var t, n = Object(this), i = n.length >>> 0, r = arguments[1], o = 0; o < i; o++)
                            if (t = n[o], e.call(r, t, o, n)) return t
                    }), e.includes || (e.includes = function (e, t) {
                        return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
                    })
                }();
                var e = [{
                        selector: "button",
                        color: "purple",
                        label: "button"
                    }, {
                        selector: "input",
                        color: "navy",
                        label: "input"
                    }, {
                        selector: "keygen",
                        color: "gray",
                        label: "keygen"
                    }, {
                        selector: "meter",
                        color: "maroon",
                        label: "meter"
                    }, {
                        selector: "output",
                        color: "teal",
                        label: "output"
                    }, {
                        selector: "progress",
                        color: "olive",
                        label: "progress"
                    }, {
                        selector: "select",
                        color: "green",
                        label: "select"
                    }, {
                        selector: "textarea",
                        color: "brown",
                        label: "textarea"
                    }, {
                        selector: "[role=combobox]",
                        color: "navy",
                        label: "combobox"
                    }, {
                        selector: "[role=button]",
                        color: "purple",
                        label: "button"
                    }, {
                        selector: "[role=textbox]",
                        color: "navy",
                        label: "input"
                    }, {
                        selector: "[role=checkbox]",
                        color: "navy",
                        label: "input"
                    }],
                    t = e.map((function (e) {
                        return "<li>" + e.selector + "</li>"
                    })).join("");
                return new qo({
                    appName: "Forms",
                    cssClass: r("Forms"),
                    msgText: "No form-related elements found: <ul>" + t + "</ul>",
                    targetList: e,
                    getInfo: function (e) {
                        return new Bo(e, "FORM INFO")
                    },
                    dndFlag: !0
                })
            }().run()
    })()
})();