import {
    r as M,
    o as ie,
    a as se,
    c as le,
    b as ve,
    u as he,
    h as ye,
    v as ge,
    g as w,
    n as we,
    i as Ae,
    e as V,
    s as be,
    t as xe,
    k as Te,
    d as ke,
    m as Se,
    p as Ie,
    q as Me
} from "./entry.70905c58.js";
import {M as Oe} from "./Marquee.79503d5b.js";
import {_ as ue} from "./_plugin-vue_export-helper.9c4d1f6f.js";
import {s as D} from "./state.f08776a3.js";
import {f as Le, W as He} from "./stickerPhysics.ca2c1524.js";
import {c as Z} from "./_commonjsHelpers.042e6b4d.js";

const H = "" + new URL("star-gray.7b43bd16.svg", import.meta.url).href;
const Ee = ve('<div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div><div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div><div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div><div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div><div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div><div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div><div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div><div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div><div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div><div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div><div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div><div class="marquee--item" data-v-6157e01a><span class="text__span" data-v-6157e01a>Click Anywhere</span><span class="star__span" data-v-6157e01a><img src="' + H + '" data-v-6157e01a></span></div>', 12),
    Pe = [Ee], Be = {
        __name: "Marquee", setup(P) {
            const S = M(null);
            let a, l;
            ie(() => {
                l = new Oe(S.value), p()
            });
            const s = () => {
                if (l.onResize(), window.innerWidth > 768) {
                    if (a === !1) return;
                    document.querySelectorAll(".text__span").forEach(f => {
                        f.innerHTML = "Click Anywhere"
                    }), a = !1
                } else {
                    if (a === !0) return;
                    document.querySelectorAll(".text__span").forEach(f => {
                        f.innerHTML = "Tap Anywhere"
                    }), a = !0
                }
            }, p = () => {
                window.addEventListener("resize", s)
            };
            return (f, T) => (se(), le("div", {ref_key: "marquee", ref: S, class: "marquee"}, Pe, 512))
        }
    }, Ce = ue(Be, [["__scopeId", "data-v-6157e01a"]]), qe = "" + globalThis.__publicAssetsURL("tracker.svg");
var z = {};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
(function (P) {
    (function () {
        var S = function () {
            this.init()
        };
        S.prototype = {
            init: function () {
                var e = this || a;
                return e._counter = 1e3, e._html5AudioPool = [], e.html5PoolSize = 10, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = typeof window < "u" && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.autoUnlock = !0, e._setup(), e
            }, volume: function (e) {
                var t = this || a;
                if (e = parseFloat(e), t.ctx || I(), typeof e < "u" && e >= 0 && e <= 1) {
                    if (t._volume = e, t._muted) return t;
                    t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, a.ctx.currentTime);
                    for (var n = 0; n < t._howls.length; n++) if (!t._howls[n]._webAudio) for (var r = t._howls[n]._getSoundIds(), i = 0; i < r.length; i++) {
                        var u = t._howls[n]._soundById(r[i]);
                        u && u._node && (u._node.volume = u._volume * e)
                    }
                    return t
                }
                return t._volume
            }, mute: function (e) {
                var t = this || a;
                t.ctx || I(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, a.ctx.currentTime);
                for (var n = 0; n < t._howls.length; n++) if (!t._howls[n]._webAudio) for (var r = t._howls[n]._getSoundIds(), i = 0; i < r.length; i++) {
                    var u = t._howls[n]._soundById(r[i]);
                    u && u._node && (u._node.muted = e ? !0 : u._muted)
                }
                return t
            }, stop: function () {
                for (var e = this || a, t = 0; t < e._howls.length; t++) e._howls[t].stop();
                return e
            }, unload: function () {
                for (var e = this || a, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
                return e.usingWebAudio && e.ctx && typeof e.ctx.close < "u" && (e.ctx.close(), e.ctx = null, I()), e
            }, codecs: function (e) {
                return (this || a)._codecs[e.replace(/^x-/, "")]
            }, _setup: function () {
                var e = this || a;
                if (e.state = e.ctx && e.ctx.state || "suspended", e._autoSuspend(), !e.usingWebAudio) if (typeof Audio < "u") try {
                    var t = new Audio;
                    typeof t.oncanplaythrough > "u" && (e._canPlayEvent = "canplay")
                } catch {
                    e.noAudio = !0
                } else e.noAudio = !0;
                try {
                    var t = new Audio;
                    t.muted && (e.noAudio = !0)
                } catch {
                }
                return e.noAudio || e._setupCodecs(), e
            }, _setupCodecs: function () {
                var e = this || a, t = null;
                try {
                    t = typeof Audio < "u" ? new Audio : null
                } catch {
                    return e
                }
                if (!t || typeof t.canPlayType != "function") return e;
                var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                    r = e._navigator ? e._navigator.userAgent : "", i = r.match(/OPR\/(\d+)/g),
                    u = i && parseInt(i[0].split("/")[1], 10) < 33,
                    o = r.indexOf("Safari") !== -1 && r.indexOf("Chrome") === -1, _ = r.match(/Version\/(.*?) /),
                    h = o && _ && parseInt(_[1], 10) < 15;
                return e._codecs = {
                    mp3: !!(!u && (n || t.canPlayType("audio/mp3;").replace(/^no$/, ""))),
                    mpeg: !!n,
                    opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                    ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                    wav: !!(t.canPlayType('audio/wav; codecs="1"') || t.canPlayType("audio/wav")).replace(/^no$/, ""),
                    aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                    caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                    m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    m4b: !!(t.canPlayType("audio/x-m4b;") || t.canPlayType("audio/m4b;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                    weba: !!(!h && t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    webm: !!(!h && t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")),
                    dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                    flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
                }, e
            }, _unlockAudio: function () {
                var e = this || a;
                if (!(e._audioUnlocked || !e.ctx)) {
                    e._audioUnlocked = !1, e.autoUnlock = !1, !e._mobileUnloaded && e.ctx.sampleRate !== 44100 && (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                    var t = function (n) {
                        for (; e._html5AudioPool.length < e.html5PoolSize;) try {
                            var r = new Audio;
                            r._unlocked = !0, e._releaseHtml5Audio(r)
                        } catch {
                            e.noAudio = !0;
                            break
                        }
                        for (var i = 0; i < e._howls.length; i++) if (!e._howls[i]._webAudio) for (var u = e._howls[i]._getSoundIds(), o = 0; o < u.length; o++) {
                            var _ = e._howls[i]._soundById(u[o]);
                            _ && _._node && !_._node._unlocked && (_._node._unlocked = !0, _._node.load())
                        }
                        e._autoResume();
                        var h = e.ctx.createBufferSource();
                        h.buffer = e._scratchBuffer, h.connect(e.ctx.destination), typeof h.start > "u" ? h.noteOn(0) : h.start(0), typeof e.ctx.resume == "function" && e.ctx.resume(), h.onended = function () {
                            h.disconnect(0), e._audioUnlocked = !0, document.removeEventListener("touchstart", t, !0), document.removeEventListener("touchend", t, !0), document.removeEventListener("click", t, !0), document.removeEventListener("keydown", t, !0);
                            for (var b = 0; b < e._howls.length; b++) e._howls[b]._emit("unlock")
                        }
                    };
                    return document.addEventListener("touchstart", t, !0), document.addEventListener("touchend", t, !0), document.addEventListener("click", t, !0), document.addEventListener("keydown", t, !0), e
                }
            }, _obtainHtml5Audio: function () {
                var e = this || a;
                if (e._html5AudioPool.length) return e._html5AudioPool.pop();
                var t = new Audio().play();
                return t && typeof Promise < "u" && (t instanceof Promise || typeof t.then == "function") && t.catch(function () {
                    console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")
                }), new Audio
            }, _releaseHtml5Audio: function (e) {
                var t = this || a;
                return e._unlocked && t._html5AudioPool.push(e), t
            }, _autoSuspend: function () {
                var e = this;
                if (!(!e.autoSuspend || !e.ctx || typeof e.ctx.suspend > "u" || !a.usingWebAudio)) {
                    for (var t = 0; t < e._howls.length; t++) if (e._howls[t]._webAudio) {
                        for (var n = 0; n < e._howls[t]._sounds.length; n++) if (!e._howls[t]._sounds[n]._paused) return e
                    }
                    return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function () {
                        if (e.autoSuspend) {
                            e._suspendTimer = null, e.state = "suspending";
                            var r = function () {
                                e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                            };
                            e.ctx.suspend().then(r, r)
                        }
                    }, 3e4), e
                }
            }, _autoResume: function () {
                var e = this;
                if (!(!e.ctx || typeof e.ctx.resume > "u" || !a.usingWebAudio)) return e.state === "running" && e.ctx.state !== "interrupted" && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : e.state === "suspended" || e.state === "running" && e.ctx.state === "interrupted" ? (e.ctx.resume().then(function () {
                    e.state = "running";
                    for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume")
                }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : e.state === "suspending" && (e._resumeAfterSuspend = !0), e
            }
        };
        var a = new S, l = function (e) {
            var t = this;
            if (!e.src || e.src.length === 0) {
                console.error("An array of source files must be passed with any new Howl.");
                return
            }
            t.init(e)
        };
        l.prototype = {
            init: function (e) {
                var t = this;
                return a.ctx || I(), t._autoplay = e.autoplay || !1, t._format = typeof e.format != "string" ? e.format : [e.format], t._html5 = e.html5 || !1, t._muted = e.mute || !1, t._loop = e.loop || !1, t._pool = e.pool || 5, t._preload = typeof e.preload == "boolean" || e.preload === "metadata" ? e.preload : !0, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = typeof e.src != "string" ? e.src : [e.src], t._volume = e.volume !== void 0 ? e.volume : 1, t._xhr = {
                    method: e.xhr && e.xhr.method ? e.xhr.method : "GET",
                    headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                    withCredentials: e.xhr && e.xhr.withCredentials ? e.xhr.withCredentials : !1
                }, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = !1, t._onend = e.onend ? [{fn: e.onend}] : [], t._onfade = e.onfade ? [{fn: e.onfade}] : [], t._onload = e.onload ? [{fn: e.onload}] : [], t._onloaderror = e.onloaderror ? [{fn: e.onloaderror}] : [], t._onplayerror = e.onplayerror ? [{fn: e.onplayerror}] : [], t._onpause = e.onpause ? [{fn: e.onpause}] : [], t._onplay = e.onplay ? [{fn: e.onplay}] : [], t._onstop = e.onstop ? [{fn: e.onstop}] : [], t._onmute = e.onmute ? [{fn: e.onmute}] : [], t._onvolume = e.onvolume ? [{fn: e.onvolume}] : [], t._onrate = e.onrate ? [{fn: e.onrate}] : [], t._onseek = e.onseek ? [{fn: e.onseek}] : [], t._onunlock = e.onunlock ? [{fn: e.onunlock}] : [], t._onresume = [], t._webAudio = a.usingWebAudio && !t._html5, typeof a.ctx < "u" && a.ctx && a.autoUnlock && a._unlockAudio(), a._howls.push(t), t._autoplay && t._queue.push({
                    event: "play",
                    action: function () {
                        t.play()
                    }
                }), t._preload && t._preload !== "none" && t.load(), t
            }, load: function () {
                var e = this, t = null;
                if (a.noAudio) {
                    e._emit("loaderror", null, "No audio support.");
                    return
                }
                typeof e._src == "string" && (e._src = [e._src]);
                for (var n = 0; n < e._src.length; n++) {
                    var r, i;
                    if (e._format && e._format[n]) r = e._format[n]; else {
                        if (i = e._src[n], typeof i != "string") {
                            e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                            continue
                        }
                        r = /^data:audio\/([^;,]+);/i.exec(i), r || (r = /\.([^.]+)$/.exec(i.split("?", 1)[0])), r && (r = r[1].toLowerCase())
                    }
                    if (r || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), r && a.codecs(r)) {
                        t = e._src[n];
                        break
                    }
                }
                if (!t) {
                    e._emit("loaderror", null, "No codec support for selected audio sources.");
                    return
                }
                return e._src = t, e._state = "loading", window.location.protocol === "https:" && t.slice(0, 5) === "http:" && (e._html5 = !0, e._webAudio = !1), new s(e), e._webAudio && f(e), e
            }, play: function (e, t) {
                var n = this, r = null;
                if (typeof e == "number") r = e, e = null; else {
                    if (typeof e == "string" && n._state === "loaded" && !n._sprite[e]) return null;
                    if (typeof e > "u" && (e = "__default", !n._playLock)) {
                        for (var i = 0, u = 0; u < n._sounds.length; u++) n._sounds[u]._paused && !n._sounds[u]._ended && (i++, r = n._sounds[u]._id);
                        i === 1 ? e = null : r = null
                    }
                }
                var o = r ? n._soundById(r) : n._inactiveSound();
                if (!o) return null;
                if (r && !e && (e = o._sprite || "__default"), n._state !== "loaded") {
                    o._sprite = e, o._ended = !1;
                    var _ = o._id;
                    return n._queue.push({
                        event: "play", action: function () {
                            n.play(_)
                        }
                    }), _
                }
                if (r && !o._paused) return t || n._loadQueue("play"), o._id;
                n._webAudio && a._autoResume();
                var h = Math.max(0, o._seek > 0 ? o._seek : n._sprite[e][0] / 1e3),
                    b = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - h), O = b * 1e3 / Math.abs(o._rate),
                    E = n._sprite[e][0] / 1e3, G = (n._sprite[e][0] + n._sprite[e][1]) / 1e3;
                o._sprite = e, o._ended = !1;
                var g = function () {
                    o._paused = !1, o._seek = h, o._start = E, o._stop = G, o._loop = !!(o._loop || n._sprite[e][2])
                };
                if (h >= G) {
                    n._ended(o);
                    return
                }
                var A = o._node;
                if (n._webAudio) {
                    var R = function () {
                        n._playLock = !1, g(), n._refreshBuffer(o);
                        var B = o._muted || n._muted ? 0 : o._volume;
                        A.gain.setValueAtTime(B, a.ctx.currentTime), o._playStart = a.ctx.currentTime, typeof A.bufferSource.start > "u" ? o._loop ? A.bufferSource.noteGrainOn(0, h, 86400) : A.bufferSource.noteGrainOn(0, h, b) : o._loop ? A.bufferSource.start(0, h, 86400) : A.bufferSource.start(0, h, b), O !== 1 / 0 && (n._endTimers[o._id] = setTimeout(n._ended.bind(n, o), O)), t || setTimeout(function () {
                            n._emit("play", o._id), n._loadQueue()
                        }, 0)
                    };
                    a.state === "running" && a.ctx.state !== "interrupted" ? R() : (n._playLock = !0, n.once("resume", R), n._clearTimer(o._id))
                } else {
                    var W = function () {
                        A.currentTime = h, A.muted = o._muted || n._muted || a._muted || A.muted, A.volume = o._volume * a.volume(), A.playbackRate = o._rate;
                        try {
                            var B = A.play();
                            if (B && typeof Promise < "u" && (B instanceof Promise || typeof B.then == "function") ? (n._playLock = !0, g(), B.then(function () {
                                n._playLock = !1, A._unlocked = !0, t ? n._loadQueue() : n._emit("play", o._id)
                            }).catch(function () {
                                n._playLock = !1, n._emit("playerror", o._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), o._ended = !0, o._paused = !0
                            })) : t || (n._playLock = !1, g(), n._emit("play", o._id)), A.playbackRate = o._rate, A.paused) {
                                n._emit("playerror", o._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                                return
                            }
                            e !== "__default" || o._loop ? n._endTimers[o._id] = setTimeout(n._ended.bind(n, o), O) : (n._endTimers[o._id] = function () {
                                n._ended(o), A.removeEventListener("ended", n._endTimers[o._id], !1)
                            }, A.addEventListener("ended", n._endTimers[o._id], !1))
                        } catch (C) {
                            n._emit("playerror", o._id, C)
                        }
                    };
                    A.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (A.src = n._src, A.load());
                    var Y = window && window.ejecta || !A.readyState && a._navigator.isCocoonJS;
                    if (A.readyState >= 3 || Y) W(); else {
                        n._playLock = !0, n._state = "loading";
                        var $ = function () {
                            n._state = "loaded", W(), A.removeEventListener(a._canPlayEvent, $, !1)
                        };
                        A.addEventListener(a._canPlayEvent, $, !1), n._clearTimer(o._id)
                    }
                }
                return o._id
            }, pause: function (e) {
                var t = this;
                if (t._state !== "loaded" || t._playLock) return t._queue.push({
                    event: "pause", action: function () {
                        t.pause(e)
                    }
                }), t;
                for (var n = t._getSoundIds(e), r = 0; r < n.length; r++) {
                    t._clearTimer(n[r]);
                    var i = t._soundById(n[r]);
                    if (i && !i._paused && (i._seek = t.seek(n[r]), i._rateSeek = 0, i._paused = !0, t._stopFade(n[r]), i._node)) if (t._webAudio) {
                        if (!i._node.bufferSource) continue;
                        typeof i._node.bufferSource.stop > "u" ? i._node.bufferSource.noteOff(0) : i._node.bufferSource.stop(0), t._cleanBuffer(i._node)
                    } else (!isNaN(i._node.duration) || i._node.duration === 1 / 0) && i._node.pause();
                    arguments[1] || t._emit("pause", i ? i._id : null)
                }
                return t
            }, stop: function (e, t) {
                var n = this;
                if (n._state !== "loaded" || n._playLock) return n._queue.push({
                    event: "stop", action: function () {
                        n.stop(e)
                    }
                }), n;
                for (var r = n._getSoundIds(e), i = 0; i < r.length; i++) {
                    n._clearTimer(r[i]);
                    var u = n._soundById(r[i]);
                    u && (u._seek = u._start || 0, u._rateSeek = 0, u._paused = !0, u._ended = !0, n._stopFade(r[i]), u._node && (n._webAudio ? u._node.bufferSource && (typeof u._node.bufferSource.stop > "u" ? u._node.bufferSource.noteOff(0) : u._node.bufferSource.stop(0), n._cleanBuffer(u._node)) : (!isNaN(u._node.duration) || u._node.duration === 1 / 0) && (u._node.currentTime = u._start || 0, u._node.pause(), u._node.duration === 1 / 0 && n._clearSound(u._node))), t || n._emit("stop", u._id))
                }
                return n
            }, mute: function (e, t) {
                var n = this;
                if (n._state !== "loaded" || n._playLock) return n._queue.push({
                    event: "mute", action: function () {
                        n.mute(e, t)
                    }
                }), n;
                if (typeof t > "u") if (typeof e == "boolean") n._muted = e; else return n._muted;
                for (var r = n._getSoundIds(t), i = 0; i < r.length; i++) {
                    var u = n._soundById(r[i]);
                    u && (u._muted = e, u._interval && n._stopFade(u._id), n._webAudio && u._node ? u._node.gain.setValueAtTime(e ? 0 : u._volume, a.ctx.currentTime) : u._node && (u._node.muted = a._muted ? !0 : e), n._emit("mute", u._id))
                }
                return n
            }, volume: function () {
                var e = this, t = arguments, n, r;
                if (t.length === 0) return e._volume;
                if (t.length === 1 || t.length === 2 && typeof t[1] > "u") {
                    var i = e._getSoundIds(), u = i.indexOf(t[0]);
                    u >= 0 ? r = parseInt(t[0], 10) : n = parseFloat(t[0])
                } else t.length >= 2 && (n = parseFloat(t[0]), r = parseInt(t[1], 10));
                var o;
                if (typeof n < "u" && n >= 0 && n <= 1) {
                    if (e._state !== "loaded" || e._playLock) return e._queue.push({
                        event: "volume",
                        action: function () {
                            e.volume.apply(e, t)
                        }
                    }), e;
                    typeof r > "u" && (e._volume = n), r = e._getSoundIds(r);
                    for (var _ = 0; _ < r.length; _++) o = e._soundById(r[_]), o && (o._volume = n, t[2] || e._stopFade(r[_]), e._webAudio && o._node && !o._muted ? o._node.gain.setValueAtTime(n, a.ctx.currentTime) : o._node && !o._muted && (o._node.volume = n * a.volume()), e._emit("volume", o._id))
                } else return o = r ? e._soundById(r) : e._sounds[0], o ? o._volume : 0;
                return e
            }, fade: function (e, t, n, r) {
                var i = this;
                if (i._state !== "loaded" || i._playLock) return i._queue.push({
                    event: "fade", action: function () {
                        i.fade(e, t, n, r)
                    }
                }), i;
                e = Math.min(Math.max(0, parseFloat(e)), 1), t = Math.min(Math.max(0, parseFloat(t)), 1), n = parseFloat(n), i.volume(e, r);
                for (var u = i._getSoundIds(r), o = 0; o < u.length; o++) {
                    var _ = i._soundById(u[o]);
                    if (_) {
                        if (r || i._stopFade(u[o]), i._webAudio && !_._muted) {
                            var h = a.ctx.currentTime, b = h + n / 1e3;
                            _._volume = e, _._node.gain.setValueAtTime(e, h), _._node.gain.linearRampToValueAtTime(t, b)
                        }
                        i._startFadeInterval(_, e, t, n, u[o], typeof r > "u")
                    }
                }
                return i
            }, _startFadeInterval: function (e, t, n, r, i, u) {
                var o = this, _ = t, h = n - t, b = Math.abs(h / .01), O = Math.max(4, b > 0 ? r / b : r),
                    E = Date.now();
                e._fadeTo = n, e._interval = setInterval(function () {
                    var G = (Date.now() - E) / r;
                    E = Date.now(), _ += h * G, _ = Math.round(_ * 100) / 100, h < 0 ? _ = Math.max(n, _) : _ = Math.min(n, _), o._webAudio ? e._volume = _ : o.volume(_, e._id, !0), u && (o._volume = _), (n < t && _ <= n || n > t && _ >= n) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, o.volume(n, e._id), o._emit("fade", e._id))
                }, O)
            }, _stopFade: function (e) {
                var t = this, n = t._soundById(e);
                return n && n._interval && (t._webAudio && n._node.gain.cancelScheduledValues(a.ctx.currentTime), clearInterval(n._interval), n._interval = null, t.volume(n._fadeTo, e), n._fadeTo = null, t._emit("fade", e)), t
            }, loop: function () {
                var e = this, t = arguments, n, r, i;
                if (t.length === 0) return e._loop;
                if (t.length === 1) if (typeof t[0] == "boolean") n = t[0], e._loop = n; else return i = e._soundById(parseInt(t[0], 10)), i ? i._loop : !1; else t.length === 2 && (n = t[0], r = parseInt(t[1], 10));
                for (var u = e._getSoundIds(r), o = 0; o < u.length; o++) i = e._soundById(u[o]), i && (i._loop = n, e._webAudio && i._node && i._node.bufferSource && (i._node.bufferSource.loop = n, n && (i._node.bufferSource.loopStart = i._start || 0, i._node.bufferSource.loopEnd = i._stop, e.playing(u[o]) && (e.pause(u[o], !0), e.play(u[o], !0)))));
                return e
            }, rate: function () {
                var e = this, t = arguments, n, r;
                if (t.length === 0) r = e._sounds[0]._id; else if (t.length === 1) {
                    var i = e._getSoundIds(), u = i.indexOf(t[0]);
                    u >= 0 ? r = parseInt(t[0], 10) : n = parseFloat(t[0])
                } else t.length === 2 && (n = parseFloat(t[0]), r = parseInt(t[1], 10));
                var o;
                if (typeof n == "number") {
                    if (e._state !== "loaded" || e._playLock) return e._queue.push({
                        event: "rate", action: function () {
                            e.rate.apply(e, t)
                        }
                    }), e;
                    typeof r > "u" && (e._rate = n), r = e._getSoundIds(r);
                    for (var _ = 0; _ < r.length; _++) if (o = e._soundById(r[_]), o) {
                        e.playing(r[_]) && (o._rateSeek = e.seek(r[_]), o._playStart = e._webAudio ? a.ctx.currentTime : o._playStart), o._rate = n, e._webAudio && o._node && o._node.bufferSource ? o._node.bufferSource.playbackRate.setValueAtTime(n, a.ctx.currentTime) : o._node && (o._node.playbackRate = n);
                        var h = e.seek(r[_]), b = (e._sprite[o._sprite][0] + e._sprite[o._sprite][1]) / 1e3 - h,
                            O = b * 1e3 / Math.abs(o._rate);
                        (e._endTimers[r[_]] || !o._paused) && (e._clearTimer(r[_]), e._endTimers[r[_]] = setTimeout(e._ended.bind(e, o), O)), e._emit("rate", o._id)
                    }
                } else return o = e._soundById(r), o ? o._rate : e._rate;
                return e
            }, seek: function () {
                var e = this, t = arguments, n, r;
                if (t.length === 0) e._sounds.length && (r = e._sounds[0]._id); else if (t.length === 1) {
                    var i = e._getSoundIds(), u = i.indexOf(t[0]);
                    u >= 0 ? r = parseInt(t[0], 10) : e._sounds.length && (r = e._sounds[0]._id, n = parseFloat(t[0]))
                } else t.length === 2 && (n = parseFloat(t[0]), r = parseInt(t[1], 10));
                if (typeof r > "u") return 0;
                if (typeof n == "number" && (e._state !== "loaded" || e._playLock)) return e._queue.push({
                    event: "seek",
                    action: function () {
                        e.seek.apply(e, t)
                    }
                }), e;
                var o = e._soundById(r);
                if (o) if (typeof n == "number" && n >= 0) {
                    var _ = e.playing(r);
                    _ && e.pause(r, !0), o._seek = n, o._ended = !1, e._clearTimer(r), !e._webAudio && o._node && !isNaN(o._node.duration) && (o._node.currentTime = n);
                    var h = function () {
                        _ && e.play(r, !0), e._emit("seek", r)
                    };
                    if (_ && !e._webAudio) {
                        var b = function () {
                            e._playLock ? setTimeout(b, 0) : h()
                        };
                        setTimeout(b, 0)
                    } else h()
                } else if (e._webAudio) {
                    var O = e.playing(r) ? a.ctx.currentTime - o._playStart : 0,
                        E = o._rateSeek ? o._rateSeek - o._seek : 0;
                    return o._seek + (E + O * Math.abs(o._rate))
                } else return o._node.currentTime;
                return e
            }, playing: function (e) {
                var t = this;
                if (typeof e == "number") {
                    var n = t._soundById(e);
                    return n ? !n._paused : !1
                }
                for (var r = 0; r < t._sounds.length; r++) if (!t._sounds[r]._paused) return !0;
                return !1
            }, duration: function (e) {
                var t = this, n = t._duration, r = t._soundById(e);
                return r && (n = t._sprite[r._sprite][1] / 1e3), n
            }, state: function () {
                return this._state
            }, unload: function () {
                for (var e = this, t = e._sounds, n = 0; n < t.length; n++) t[n]._paused || e.stop(t[n]._id), e._webAudio || (e._clearSound(t[n]._node), t[n]._node.removeEventListener("error", t[n]._errorFn, !1), t[n]._node.removeEventListener(a._canPlayEvent, t[n]._loadFn, !1), t[n]._node.removeEventListener("ended", t[n]._endFn, !1), a._releaseHtml5Audio(t[n]._node)), delete t[n]._node, e._clearTimer(t[n]._id);
                var r = a._howls.indexOf(e);
                r >= 0 && a._howls.splice(r, 1);
                var i = !0;
                for (n = 0; n < a._howls.length; n++) if (a._howls[n]._src === e._src || e._src.indexOf(a._howls[n]._src) >= 0) {
                    i = !1;
                    break
                }
                return p && i && delete p[e._src], a.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
            }, on: function (e, t, n, r) {
                var i = this, u = i["_on" + e];
                return typeof t == "function" && u.push(r ? {id: n, fn: t, once: r} : {id: n, fn: t}), i
            }, off: function (e, t, n) {
                var r = this, i = r["_on" + e], u = 0;
                if (typeof t == "number" && (n = t, t = null), t || n) for (u = 0; u < i.length; u++) {
                    var o = n === i[u].id;
                    if (t === i[u].fn && o || !t && o) {
                        i.splice(u, 1);
                        break
                    }
                } else if (e) r["_on" + e] = []; else {
                    var _ = Object.keys(r);
                    for (u = 0; u < _.length; u++) _[u].indexOf("_on") === 0 && Array.isArray(r[_[u]]) && (r[_[u]] = [])
                }
                return r
            }, once: function (e, t, n) {
                var r = this;
                return r.on(e, t, n, 1), r
            }, _emit: function (e, t, n) {
                for (var r = this, i = r["_on" + e], u = i.length - 1; u >= 0; u--) (!i[u].id || i[u].id === t || e === "load") && (setTimeout(function (o) {
                    o.call(this, t, n)
                }.bind(r, i[u].fn), 0), i[u].once && r.off(e, i[u].fn, i[u].id));
                return r._loadQueue(e), r
            }, _loadQueue: function (e) {
                var t = this;
                if (t._queue.length > 0) {
                    var n = t._queue[0];
                    n.event === e && (t._queue.shift(), t._loadQueue()), e || n.action()
                }
                return t
            }, _ended: function (e) {
                var t = this, n = e._sprite;
                if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(t._ended.bind(t, e), 100), t;
                var r = !!(e._loop || t._sprite[n][2]);
                if (t._emit("end", e._id), !t._webAudio && r && t.stop(e._id, !0).play(e._id), t._webAudio && r) {
                    t._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = a.ctx.currentTime;
                    var i = (e._stop - e._start) * 1e3 / Math.abs(e._rate);
                    t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), i)
                }
                return t._webAudio && !r && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, t._clearTimer(e._id), t._cleanBuffer(e._node), a._autoSuspend()), !t._webAudio && !r && t.stop(e._id, !0), t
            }, _clearTimer: function (e) {
                var t = this;
                if (t._endTimers[e]) {
                    if (typeof t._endTimers[e] != "function") clearTimeout(t._endTimers[e]); else {
                        var n = t._soundById(e);
                        n && n._node && n._node.removeEventListener("ended", t._endTimers[e], !1)
                    }
                    delete t._endTimers[e]
                }
                return t
            }, _soundById: function (e) {
                for (var t = this, n = 0; n < t._sounds.length; n++) if (e === t._sounds[n]._id) return t._sounds[n];
                return null
            }, _inactiveSound: function () {
                var e = this;
                e._drain();
                for (var t = 0; t < e._sounds.length; t++) if (e._sounds[t]._ended) return e._sounds[t].reset();
                return new s(e)
            }, _drain: function () {
                var e = this, t = e._pool, n = 0, r = 0;
                if (!(e._sounds.length < t)) {
                    for (r = 0; r < e._sounds.length; r++) e._sounds[r]._ended && n++;
                    for (r = e._sounds.length - 1; r >= 0; r--) {
                        if (n <= t) return;
                        e._sounds[r]._ended && (e._webAudio && e._sounds[r]._node && e._sounds[r]._node.disconnect(0), e._sounds.splice(r, 1), n--)
                    }
                }
            }, _getSoundIds: function (e) {
                var t = this;
                if (typeof e > "u") {
                    for (var n = [], r = 0; r < t._sounds.length; r++) n.push(t._sounds[r]._id);
                    return n
                } else return [e]
            }, _refreshBuffer: function (e) {
                var t = this;
                return e._node.bufferSource = a.ctx.createBufferSource(), e._node.bufferSource.buffer = p[t._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop || 0), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, a.ctx.currentTime), t
            }, _cleanBuffer: function (e) {
                var t = this, n = a._navigator && a._navigator.vendor.indexOf("Apple") >= 0;
                if (!e.bufferSource) return t;
                if (a._scratchBuffer && e.bufferSource && (e.bufferSource.onended = null, e.bufferSource.disconnect(0), n)) try {
                    e.bufferSource.buffer = a._scratchBuffer
                } catch {
                }
                return e.bufferSource = null, t
            }, _clearSound: function (e) {
                var t = /MSIE |Trident\//.test(a._navigator && a._navigator.userAgent);
                t || (e.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")
            }
        };
        var s = function (e) {
            this._parent = e, this.init()
        };
        s.prototype = {
            init: function () {
                var e = this, t = e._parent;
                return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++a._counter, t._sounds.push(e), e.create(), e
            }, create: function () {
                var e = this, t = e._parent, n = a._muted || e._muted || e._parent._muted ? 0 : e._volume;
                return t._webAudio ? (e._node = typeof a.ctx.createGain > "u" ? a.ctx.createGainNode() : a.ctx.createGain(), e._node.gain.setValueAtTime(n, a.ctx.currentTime), e._node.paused = !0, e._node.connect(a.masterGain)) : a.noAudio || (e._node = a._obtainHtml5Audio(), e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(a._canPlayEvent, e._loadFn, !1), e._endFn = e._endListener.bind(e), e._node.addEventListener("ended", e._endFn, !1), e._node.src = t._src, e._node.preload = t._preload === !0 ? "auto" : t._preload, e._node.volume = n * a.volume(), e._node.load()), e
            }, reset: function () {
                var e = this, t = e._parent;
                return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++a._counter, e
            }, _errorListener: function () {
                var e = this;
                e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1)
            }, _loadListener: function () {
                var e = this, t = e._parent;
                t._duration = Math.ceil(e._node.duration * 10) / 10, Object.keys(t._sprite).length === 0 && (t._sprite = {__default: [0, t._duration * 1e3]}), t._state !== "loaded" && (t._state = "loaded", t._emit("load"), t._loadQueue()), e._node.removeEventListener(a._canPlayEvent, e._loadFn, !1)
            }, _endListener: function () {
                var e = this, t = e._parent;
                t._duration === 1 / 0 && (t._duration = Math.ceil(e._node.duration * 10) / 10, t._sprite.__default[1] === 1 / 0 && (t._sprite.__default[1] = t._duration * 1e3), t._ended(e)), e._node.removeEventListener("ended", e._endFn, !1)
            }
        };
        var p = {}, f = function (e) {
            var t = e._src;
            if (p[t]) {
                e._duration = p[t].duration, c(e);
                return
            }
            if (/^data:[^;]+;base64,/.test(t)) {
                for (var n = atob(t.split(",")[1]), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i);
                m(r.buffer, e)
            } else {
                var u = new XMLHttpRequest;
                u.open(e._xhr.method, t, !0), u.withCredentials = e._xhr.withCredentials, u.responseType = "arraybuffer", e._xhr.headers && Object.keys(e._xhr.headers).forEach(function (o) {
                    u.setRequestHeader(o, e._xhr.headers[o])
                }), u.onload = function () {
                    var o = (u.status + "")[0];
                    if (o !== "0" && o !== "2" && o !== "3") {
                        e._emit("loaderror", null, "Failed loading audio file with status: " + u.status + ".");
                        return
                    }
                    m(u.response, e)
                }, u.onerror = function () {
                    e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete p[t], e.load())
                }, T(u)
            }
        }, T = function (e) {
            try {
                e.send()
            } catch {
                e.onerror()
            }
        }, m = function (e, t) {
            var n = function () {
                t._emit("loaderror", null, "Decoding audio data failed.")
            }, r = function (i) {
                i && t._sounds.length > 0 ? (p[t._src] = i, c(t, i)) : n()
            };
            typeof Promise < "u" && a.ctx.decodeAudioData.length === 1 ? a.ctx.decodeAudioData(e).then(r).catch(n) : a.ctx.decodeAudioData(e, r, n)
        }, c = function (e, t) {
            t && !e._duration && (e._duration = t.duration), Object.keys(e._sprite).length === 0 && (e._sprite = {__default: [0, e._duration * 1e3]}), e._state !== "loaded" && (e._state = "loaded", e._emit("load"), e._loadQueue())
        }, I = function () {
            if (a.usingWebAudio) {
                try {
                    typeof AudioContext < "u" ? a.ctx = new AudioContext : typeof webkitAudioContext < "u" ? a.ctx = new webkitAudioContext : a.usingWebAudio = !1
                } catch {
                    a.usingWebAudio = !1
                }
                a.ctx || (a.usingWebAudio = !1);
                var e = /iP(hone|od|ad)/.test(a._navigator && a._navigator.platform),
                    t = a._navigator && a._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                    n = t ? parseInt(t[1], 10) : null;
                if (e && n && n < 9) {
                    var r = /safari/.test(a._navigator && a._navigator.userAgent.toLowerCase());
                    a._navigator && !r && (a.usingWebAudio = !1)
                }
                a.usingWebAudio && (a.masterGain = typeof a.ctx.createGain > "u" ? a.ctx.createGainNode() : a.ctx.createGain(), a.masterGain.gain.setValueAtTime(a._muted ? 0 : a._volume, a.ctx.currentTime), a.masterGain.connect(a.ctx.destination)), a._setup()
            }
        };
        P.Howler = a, P.Howl = l, typeof Z < "u" ? (Z.HowlerGlobal = S, Z.Howler = a, Z.Howl = l, Z.Sound = s) : typeof window < "u" && (window.HowlerGlobal = S, window.Howler = a, window.Howl = l, window.Sound = s)
    })();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
    (function () {
        HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function (a) {
            var l = this;
            if (!l.ctx || !l.ctx.listener) return l;
            for (var s = l._howls.length - 1; s >= 0; s--) l._howls[s].stereo(a);
            return l
        }, HowlerGlobal.prototype.pos = function (a, l, s) {
            var p = this;
            if (!p.ctx || !p.ctx.listener) return p;
            if (l = typeof l != "number" ? p._pos[1] : l, s = typeof s != "number" ? p._pos[2] : s, typeof a == "number") p._pos = [a, l, s], typeof p.ctx.listener.positionX < "u" ? (p.ctx.listener.positionX.setTargetAtTime(p._pos[0], Howler.ctx.currentTime, .1), p.ctx.listener.positionY.setTargetAtTime(p._pos[1], Howler.ctx.currentTime, .1), p.ctx.listener.positionZ.setTargetAtTime(p._pos[2], Howler.ctx.currentTime, .1)) : p.ctx.listener.setPosition(p._pos[0], p._pos[1], p._pos[2]); else return p._pos;
            return p
        }, HowlerGlobal.prototype.orientation = function (a, l, s, p, f, T) {
            var m = this;
            if (!m.ctx || !m.ctx.listener) return m;
            var c = m._orientation;
            if (l = typeof l != "number" ? c[1] : l, s = typeof s != "number" ? c[2] : s, p = typeof p != "number" ? c[3] : p, f = typeof f != "number" ? c[4] : f, T = typeof T != "number" ? c[5] : T, typeof a == "number") m._orientation = [a, l, s, p, f, T], typeof m.ctx.listener.forwardX < "u" ? (m.ctx.listener.forwardX.setTargetAtTime(a, Howler.ctx.currentTime, .1), m.ctx.listener.forwardY.setTargetAtTime(l, Howler.ctx.currentTime, .1), m.ctx.listener.forwardZ.setTargetAtTime(s, Howler.ctx.currentTime, .1), m.ctx.listener.upX.setTargetAtTime(p, Howler.ctx.currentTime, .1), m.ctx.listener.upY.setTargetAtTime(f, Howler.ctx.currentTime, .1), m.ctx.listener.upZ.setTargetAtTime(T, Howler.ctx.currentTime, .1)) : m.ctx.listener.setOrientation(a, l, s, p, f, T); else return c;
            return m
        }, Howl.prototype.init = function (a) {
            return function (l) {
                var s = this;
                return s._orientation = l.orientation || [1, 0, 0], s._stereo = l.stereo || null, s._pos = l.pos || null, s._pannerAttr = {
                    coneInnerAngle: typeof l.coneInnerAngle < "u" ? l.coneInnerAngle : 360,
                    coneOuterAngle: typeof l.coneOuterAngle < "u" ? l.coneOuterAngle : 360,
                    coneOuterGain: typeof l.coneOuterGain < "u" ? l.coneOuterGain : 0,
                    distanceModel: typeof l.distanceModel < "u" ? l.distanceModel : "inverse",
                    maxDistance: typeof l.maxDistance < "u" ? l.maxDistance : 1e4,
                    panningModel: typeof l.panningModel < "u" ? l.panningModel : "HRTF",
                    refDistance: typeof l.refDistance < "u" ? l.refDistance : 1,
                    rolloffFactor: typeof l.rolloffFactor < "u" ? l.rolloffFactor : 1
                }, s._onstereo = l.onstereo ? [{fn: l.onstereo}] : [], s._onpos = l.onpos ? [{fn: l.onpos}] : [], s._onorientation = l.onorientation ? [{fn: l.onorientation}] : [], a.call(this, l)
            }
        }(Howl.prototype.init), Howl.prototype.stereo = function (a, l) {
            var s = this;
            if (!s._webAudio) return s;
            if (s._state !== "loaded") return s._queue.push({
                event: "stereo", action: function () {
                    s.stereo(a, l)
                }
            }), s;
            var p = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
            if (typeof l > "u") if (typeof a == "number") s._stereo = a, s._pos = [a, 0, 0]; else return s._stereo;
            for (var f = s._getSoundIds(l), T = 0; T < f.length; T++) {
                var m = s._soundById(f[T]);
                if (m) if (typeof a == "number") m._stereo = a, m._pos = [a, 0, 0], m._node && (m._pannerAttr.panningModel = "equalpower", (!m._panner || !m._panner.pan) && S(m, p), p === "spatial" ? typeof m._panner.positionX < "u" ? (m._panner.positionX.setValueAtTime(a, Howler.ctx.currentTime), m._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), m._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : m._panner.setPosition(a, 0, 0) : m._panner.pan.setValueAtTime(a, Howler.ctx.currentTime)), s._emit("stereo", m._id); else return m._stereo
            }
            return s
        }, Howl.prototype.pos = function (a, l, s, p) {
            var f = this;
            if (!f._webAudio) return f;
            if (f._state !== "loaded") return f._queue.push({
                event: "pos", action: function () {
                    f.pos(a, l, s, p)
                }
            }), f;
            if (l = typeof l != "number" ? 0 : l, s = typeof s != "number" ? -.5 : s, typeof p > "u") if (typeof a == "number") f._pos = [a, l, s]; else return f._pos;
            for (var T = f._getSoundIds(p), m = 0; m < T.length; m++) {
                var c = f._soundById(T[m]);
                if (c) if (typeof a == "number") c._pos = [a, l, s], c._node && ((!c._panner || c._panner.pan) && S(c, "spatial"), typeof c._panner.positionX < "u" ? (c._panner.positionX.setValueAtTime(a, Howler.ctx.currentTime), c._panner.positionY.setValueAtTime(l, Howler.ctx.currentTime), c._panner.positionZ.setValueAtTime(s, Howler.ctx.currentTime)) : c._panner.setPosition(a, l, s)), f._emit("pos", c._id); else return c._pos
            }
            return f
        }, Howl.prototype.orientation = function (a, l, s, p) {
            var f = this;
            if (!f._webAudio) return f;
            if (f._state !== "loaded") return f._queue.push({
                event: "orientation", action: function () {
                    f.orientation(a, l, s, p)
                }
            }), f;
            if (l = typeof l != "number" ? f._orientation[1] : l, s = typeof s != "number" ? f._orientation[2] : s, typeof p > "u") if (typeof a == "number") f._orientation = [a, l, s]; else return f._orientation;
            for (var T = f._getSoundIds(p), m = 0; m < T.length; m++) {
                var c = f._soundById(T[m]);
                if (c) if (typeof a == "number") c._orientation = [a, l, s], c._node && (c._panner || (c._pos || (c._pos = f._pos || [0, 0, -.5]), S(c, "spatial")), typeof c._panner.orientationX < "u" ? (c._panner.orientationX.setValueAtTime(a, Howler.ctx.currentTime), c._panner.orientationY.setValueAtTime(l, Howler.ctx.currentTime), c._panner.orientationZ.setValueAtTime(s, Howler.ctx.currentTime)) : c._panner.setOrientation(a, l, s)), f._emit("orientation", c._id); else return c._orientation
            }
            return f
        }, Howl.prototype.pannerAttr = function () {
            var a = this, l = arguments, s, p, f;
            if (!a._webAudio) return a;
            if (l.length === 0) return a._pannerAttr;
            if (l.length === 1) if (typeof l[0] == "object") s = l[0], typeof p > "u" && (s.pannerAttr || (s.pannerAttr = {
                coneInnerAngle: s.coneInnerAngle,
                coneOuterAngle: s.coneOuterAngle,
                coneOuterGain: s.coneOuterGain,
                distanceModel: s.distanceModel,
                maxDistance: s.maxDistance,
                refDistance: s.refDistance,
                rolloffFactor: s.rolloffFactor,
                panningModel: s.panningModel
            }), a._pannerAttr = {
                coneInnerAngle: typeof s.pannerAttr.coneInnerAngle < "u" ? s.pannerAttr.coneInnerAngle : a._coneInnerAngle,
                coneOuterAngle: typeof s.pannerAttr.coneOuterAngle < "u" ? s.pannerAttr.coneOuterAngle : a._coneOuterAngle,
                coneOuterGain: typeof s.pannerAttr.coneOuterGain < "u" ? s.pannerAttr.coneOuterGain : a._coneOuterGain,
                distanceModel: typeof s.pannerAttr.distanceModel < "u" ? s.pannerAttr.distanceModel : a._distanceModel,
                maxDistance: typeof s.pannerAttr.maxDistance < "u" ? s.pannerAttr.maxDistance : a._maxDistance,
                refDistance: typeof s.pannerAttr.refDistance < "u" ? s.pannerAttr.refDistance : a._refDistance,
                rolloffFactor: typeof s.pannerAttr.rolloffFactor < "u" ? s.pannerAttr.rolloffFactor : a._rolloffFactor,
                panningModel: typeof s.pannerAttr.panningModel < "u" ? s.pannerAttr.panningModel : a._panningModel
            }); else return f = a._soundById(parseInt(l[0], 10)), f ? f._pannerAttr : a._pannerAttr; else l.length === 2 && (s = l[0], p = parseInt(l[1], 10));
            for (var T = a._getSoundIds(p), m = 0; m < T.length; m++) if (f = a._soundById(T[m]), f) {
                var c = f._pannerAttr;
                c = {
                    coneInnerAngle: typeof s.coneInnerAngle < "u" ? s.coneInnerAngle : c.coneInnerAngle,
                    coneOuterAngle: typeof s.coneOuterAngle < "u" ? s.coneOuterAngle : c.coneOuterAngle,
                    coneOuterGain: typeof s.coneOuterGain < "u" ? s.coneOuterGain : c.coneOuterGain,
                    distanceModel: typeof s.distanceModel < "u" ? s.distanceModel : c.distanceModel,
                    maxDistance: typeof s.maxDistance < "u" ? s.maxDistance : c.maxDistance,
                    refDistance: typeof s.refDistance < "u" ? s.refDistance : c.refDistance,
                    rolloffFactor: typeof s.rolloffFactor < "u" ? s.rolloffFactor : c.rolloffFactor,
                    panningModel: typeof s.panningModel < "u" ? s.panningModel : c.panningModel
                };
                var I = f._panner;
                I || (f._pos || (f._pos = a._pos || [0, 0, -.5]), S(f, "spatial"), I = f._panner), I.coneInnerAngle = c.coneInnerAngle, I.coneOuterAngle = c.coneOuterAngle, I.coneOuterGain = c.coneOuterGain, I.distanceModel = c.distanceModel, I.maxDistance = c.maxDistance, I.refDistance = c.refDistance, I.rolloffFactor = c.rolloffFactor, I.panningModel = c.panningModel
            }
            return a
        }, Sound.prototype.init = function (a) {
            return function () {
                var l = this, s = l._parent;
                l._orientation = s._orientation, l._stereo = s._stereo, l._pos = s._pos, l._pannerAttr = s._pannerAttr, a.call(this), l._stereo ? s.stereo(l._stereo) : l._pos && s.pos(l._pos[0], l._pos[1], l._pos[2], l._id)
            }
        }(Sound.prototype.init), Sound.prototype.reset = function (a) {
            return function () {
                var l = this, s = l._parent;
                return l._orientation = s._orientation, l._stereo = s._stereo, l._pos = s._pos, l._pannerAttr = s._pannerAttr, l._stereo ? s.stereo(l._stereo) : l._pos ? s.pos(l._pos[0], l._pos[1], l._pos[2], l._id) : l._panner && (l._panner.disconnect(0), l._panner = void 0, s._refreshBuffer(l)), a.call(this)
            }
        }(Sound.prototype.reset);
        var S = function (a, l) {
            l = l || "spatial", l === "spatial" ? (a._panner = Howler.ctx.createPanner(), a._panner.coneInnerAngle = a._pannerAttr.coneInnerAngle, a._panner.coneOuterAngle = a._pannerAttr.coneOuterAngle, a._panner.coneOuterGain = a._pannerAttr.coneOuterGain, a._panner.distanceModel = a._pannerAttr.distanceModel, a._panner.maxDistance = a._pannerAttr.maxDistance, a._panner.refDistance = a._pannerAttr.refDistance, a._panner.rolloffFactor = a._pannerAttr.rolloffFactor, a._panner.panningModel = a._pannerAttr.panningModel, typeof a._panner.positionX < "u" ? (a._panner.positionX.setValueAtTime(a._pos[0], Howler.ctx.currentTime), a._panner.positionY.setValueAtTime(a._pos[1], Howler.ctx.currentTime), a._panner.positionZ.setValueAtTime(a._pos[2], Howler.ctx.currentTime)) : a._panner.setPosition(a._pos[0], a._pos[1], a._pos[2]), typeof a._panner.orientationX < "u" ? (a._panner.orientationX.setValueAtTime(a._orientation[0], Howler.ctx.currentTime), a._panner.orientationY.setValueAtTime(a._orientation[1], Howler.ctx.currentTime), a._panner.orientationZ.setValueAtTime(a._orientation[2], Howler.ctx.currentTime)) : a._panner.setOrientation(a._orientation[0], a._orientation[1], a._orientation[2])) : (a._panner = Howler.ctx.createStereoPanner(), a._panner.pan.setValueAtTime(a._stereo, Howler.ctx.currentTime)), a._panner.connect(a._node), a._paused || a._parent.pause(a._id, !0).play(a._id, !0)
        }
    })()
})(z);
const Fe = P => (Ie("data-v-5ae880a5"), P = P(), Me(), P),
    De = Fe(() => V("img", {class: "index_track--shape", src: qe, alt: "Tracker Rounded Shape"}, null, -1)), Ge = {
        __name: "index", async setup(P) {
            let S, a;
            const l = M(null), s = M(null), p = M(null), f = M(null), T = M(0), m = M(null), c = M(0), I = M(null),
                e = M(null);
            let t;
            const n = M(0), r = M(0), i = M(0), u = M(!1);
            let o = 0, _ = 0, h, b, O, E = new Set;
            const {client: G} = he(), {data: g} = ([S, a] = ye(() => Se("homepage", () => G.getSingle("homepage"))), S = await S, a(), S);
            ge(() => D.loaded, y => {
                w.delayedCall(1.3, R)
            });
            const A = w.matchMedia();
            ie(async () => {
                var k, L, q, F, Q, K, X, ne, ae, re, oe;
                (k = window == null ? void 0 : window.lenis) == null || k.stop(), Le(), c.value = m.value.offsetHeight, window.scene || (window.scene = new He(document.querySelector("canvas")), window.scene.initializeTextMetrics(), await window.scene.setup()), w.set(".home__logo", {zIndex: 14}), b = new z.Howl({
                    src: ["/sound/click.mp3"],
                    volume: .5
                }), O = new z.Howl({
                    src: ["/sound/back.mp3"],
                    volume: .5
                }), await we(), D.loaded === !0 && R(), o = (F = (q = (L = g == null ? void 0 : g.value) == null ? void 0 : L.data) == null ? void 0 : q.desktop_images) == null ? void 0 : F.length, _ = (X = (K = (Q = g == null ? void 0 : g.value) == null ? void 0 : Q.data) == null ? void 0 : K.mobile_images) == null ? void 0 : X.length, window.innerWidth > 768 ? i.value = o + 1 : i.value = _;
                const y = (ae = (ne = g == null ? void 0 : g.value) == null ? void 0 : ne.data) == null ? void 0 : ae.desktop_images,
                    v = (oe = (re = g == null ? void 0 : g.value) == null ? void 0 : re.data) == null ? void 0 : oe.mobile_images,
                    d = y.reduce((N, J, U) => (J.starting_point && N.push(U), N), []),
                    x = v.reduce((N, J, U) => (J.starting_point && N.push(U), N), []);
                n.value = d[Math.floor(Math.random() * d.length)], r.value = x[Math.floor(Math.random() * x.length)], window.innerWidth > 767 ? Y(n.value) : Y(r.value), me()
            });
            const R = () => {
                window.dispatchEvent(new Event("resize")), w.set(".container", {position: "relative"}), h = w.timeline({
                    defaults: {
                        ease: "power4.inOut",
                        duration: 1.5
                    }
                }), h.to(p.value, {opacity: 1}, 0), h.fromTo(".marquee--item", {top: "8rem", opacity: 0}, {
                    opacity: 1,
                    top: 0,
                    stagger: .03,
                    duration: 2.5,
                    delay: -.6
                }, 0), h.fromTo(".marquee", {opacity: 0}, {
                    opacity: 1,
                    duration: 2.5,
                    delay: -.6
                }, 0), h.to([".custom__cursor", ".custom__cursor--img"], {opacity: 1, duration: 1.5, ease: "expo.inOut"}, 0)
            }, W = (y, v, d) => {
                const x = [];
                for (let k = 0; k < d; k++) {
                    const L = (v + k) % y.length;
                    x.push(y[L])
                }
                return x
            }, Y = (y, v = 30) => {
                var k, L, q, F;
                let d = [];
                window.innerWidth > 768 ? d = (L = (k = g == null ? void 0 : g.value) == null ? void 0 : k.data) == null ? void 0 : L.desktop_images : d = (F = (q = g == null ? void 0 : g.value) == null ? void 0 : q.data) == null ? void 0 : F.mobile_images;
                const x = W(d, y, v);
                D.setImagesLength(v), x.forEach($)
            }, $ = y => {
                if (y.preloaded !== !0) {
                    if (y.media.url) if (y.media.kind === "image") {
                        const v = new Image;
                        v.src = y.media.url, v.onload = () => {
                            D.incrementImagesLoaded()
                        }, y.preloaded = !0
                    } else B(y), D.incrementImagesLoaded(); else if (y.media_background && y.media_background.url) {
                        const v = new Image;
                        v.src = y.media_background.url, v.onload = () => {
                            D.incrementImagesLoaded()
                        }, y.preloaded = !0
                    }
                }
            }, B = y => {
                if (!y.media.url) return;
                const v = document.createElement("video");
                v.style.display = "none";
                const d = document.createElement("source");
                d.src = y.media.url;
                const x = /\.mp4$/i, k = /\.webm$/i;
                if (x.test(d.src)) d.type = "video/mp4"; else if (k.test(d.src)) d.type = "video/webm"; else return;
                v.appendChild(d), v.preload = "auto", v.onloadeddata = () => {
                    D.incrementImagesLoaded()
                }, document.body.appendChild(v)
            }, C = M(null), ee = y => {
                y.target.classList.contains("next__zone") ? C.value = !0 : C.value = !1, ce(), b.currentTime = 0, b.volume = .5, O.currentTime = 0, O.volume = .5, A.add("(min-width: 768px)", () => {
                    b.play(), w.to(".custom__cursor--img", {
                        scale: .75,
                        duration: .3,
                        ease: "power4.in",
                        delay: -.15,
                        overwrite: !0
                    }), w.to(".custom__cursor--img", {scale: 1, duration: .3, delay: .25, ease: "power4.out"})
                }), A.add("(max-width: 767px)", () => {
                    w.to(p.value, {
                        scale: .75,
                        opacity: .3,
                        duration: .3,
                        ease: "power4.in",
                        delay: -.15,
                        overwrite: !0
                    }), w.to(p.value, {scale: 1, opacity: 1, duration: .3, delay: .25, ease: "power4.out"})
                }), w.to(m.value, {
                    opacity: 1,
                    duration: .75,
                    ease: "power4.out"
                }), t && clearTimeout(t), t = setTimeout(() => {
                    fe(), w.to(m.value, {opacity: 0, duration: .75, ease: "power4.out"})
                }, 5e3), A.add("(max-width: 767px)", () => {
                    if (C.value === !1) {
                        O.play(), k(), j();
                        return
                    } else b.play(), u.value === !1 || x(), j()
                }), A.add("(min-width: 768px)", () => {
                    C.value = !0;
                    const L = {x: y.clientX, y: y.clientY};
                    _e(L), d()
                }), C.value === !0 ? i.value < 2 ? window.innerWidth > 768 ? i.value = o : i.value = _ : (window.innerWidth < 768 && u.value === !0 || window.innerWidth > 768) && i.value-- : (i.value > _ - 1 && (i.value = 0), i.value++);
                let v;
                window.innerWidth > 768 ? v = (o - i.value) / o * c.value : v = (_ - i.value) / _ * c.value, T.value = v, w.to(f.value, {
                    y: v,
                    overwrite: !0,
                    duration: .5
                }), de(n.value);

                function d() {
                    n.value === o - 1 ? n.value = 0 : n.value++
                }

                function x() {
                    r.value === _ - 1 ? r.value = 0 : r.value++
                }

                function k() {
                    r.value === 0 ? r.value = _ - 1 : r.value--
                }

                u.value = !0
            }, de = (y, v = 5) => {
                var k, L, q, F;
                let d = [];
                window.innerWidth > 768 ? d = (L = (k = g == null ? void 0 : g.value) == null ? void 0 : k.data) == null ? void 0 : L.desktop_images : d = (F = (q = g == null ? void 0 : g.value) == null ? void 0 : q.data) == null ? void 0 : F.mobile_images, W(d, y + 1, v).forEach((Q, K) => {
                    const X = (y + 1 + K) % d.length;
                    E.has(X) || ($(Q), E.add(X))
                })
            }, _e = y => {
                const v = g.value.data.desktop_images[n.value].media;
                if (!g.value.data.desktop_images[n.value].media.url) return;
                let d;
                if (v.kind === "image") d = document.createElement("img"), d.src = v.url; else {
                    d = document.createElement("video"), d.setAttribute("autoplay", !0), d.setAttribute("loop", !0), d.setAttribute("playsinline", !0), d.muted = !0, d.setAttribute("muted", "");
                    const x = document.createElement("source");
                    x.src = v.url;
                    const k = /\.mp4$/i, L = /\.webm$/i;
                    if (k.test(x.src)) x.type = "video/mp4"; else if (L.test(x.src)) x.type = "video/webm"; else return;
                    d.appendChild(x)
                }
                d.classList.add("new-element"), l.value.appendChild(d), v.width > v.height && v.width > window.innerWidth ? w.set(d, {
                    width: window.innerWidth > 1600 ? "70%" : "80%",
                    height: "auto",
                    aspectRatio: v.width / v.height
                }) : v.height > v.width && v.height > window.innerHeight ? w.set(d, {
                    height: window.innerWidth > 1600 ? "70%" : "80%",
                    width: "auto",
                    aspectRatio: v.width / v.height
                }) : w.set(d, {
                    width: window.innerWidth > 1600 ? "70%" : "80%",
                    height: "auto",
                    aspectRatio: d.offsetWidth / d.offsetHeight || 1
                }), w.set(d, {x: y.x - d.offsetWidth / 2, y: y.y - d.offsetHeight / 2}), w.set(d, {
                    scale: 0,
                    opacity: 0
                }), w.to(d, {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    delay: -.5,
                    ease: "expo.inOut"
                }), w.to(d, {
                    y: -window.innerHeight, duration: 10, ease: "expo.easeIn", onComplete: () => {
                        d.remove()
                    }
                }), w.to(d, {
                    rotation: n.value % 2 === 0 ? 5 : -5,
                    transformOrigin: "50% 50%",
                    duration: 5
                }), w.to(d, {opacity: 0, duration: 5, delay: 2})
            }, j = () => {
                let y;
                y = document.querySelectorAll(".new-element-container").length > 0;
                const v = document.createElement("div");
                if (v.classList.add("new-element-container"), g.value.data.mobile_images[r.value].media.url) {
                    let d;
                    const x = g.value.data.mobile_images[r.value].media;
                    x.kind === "image" ? d = document.createElement("img") : (d = document.createElement("video"), d.setAttribute("autoplay", !0), d.setAttribute("loop", !0), d.setAttribute("playsinline", !0), d.muted = !0, d.setAttribute("muted", "")), d.src = x.url, d.classList.add("new-element"), v.appendChild(d)
                }
                if (g.value.data.mobile_images[r.value].media_background) {
                    let d;
                    const x = g.value.data.mobile_images[r.value].media_background;
                    x.kind === "image" ? d = document.createElement("img") : (d = document.createElement("video"), d.setAttribute("autoplay", !0), d.setAttribute("loop", !0), d.setAttribute("playsinline", !0), d.muted = !0, d.setAttribute("muted", "")), d.src = x.url, d.classList.add("new-element-background"), v.appendChild(d), l.value.appendChild(v)
                }
                y === !1 ? (w.to(v, {scale: 1.03, opacity: 1, ease: "expo.inOut", duration: 1.1}), w.to(v, {
                    scale: 1,
                    duration: .6,
                    ease: "expo.inOut",
                    delay: .9
                }), w.to(v, {
                    opacity: 0, scale: 0, duration: 3, delay: 6, ease: "power4.inOut", onComplete: () => {
                        v.remove()
                    }
                })) : (w.fromTo(v, {scale: C.value === !0 ? 1.2 : 1, opacity: 0}, {
                    scale: 1,
                    opacity: 1,
                    ease: "expo.inOut",
                    duration: .7
                }), w.to(v, {
                    opacity: 0, scale: 0, duration: 3, delay: 6, ease: "power4.inOut", onComplete: () => {
                        v.remove()
                    }
                }))
            }, ce = () => {
                w.to(".marquee", {opacity: .2, duration: .6, ease: "Expo.inOut"}), w.to(".home__logo--img", {
                    opacity: .2,
                    duration: .6,
                    ease: "Expo.inOut"
                })
            }, fe = () => {
                w.to(".marquee", {opacity: 1, duration: 1.6, ease: "Expo.outIn"}), w.to(".home__logo--img", {
                    opacity: 1,
                    duration: 1.6,
                    ease: "Expo.inOut"
                })
            }, pe = () => {
                document.querySelector(".new-element") && w.to(".new-element", {
                    scale: 0,
                    opacity: 0,
                    duration: 2.2,
                    delay: -.4,
                    ease: "power4.inOut",
                    overwrite: !0
                }), w.to(".custom__cursor--img", {
                    opacity: 0,
                    duration: 2.2,
                    delay: -.4,
                    ease: "power4.inOut",
                    overwrite: !0
                }), w.to(".marquee", {opacity: 0, duration: 2.2, delay: -.4, ease: "power4.inOut"})
            }, te = () => {
                c.value = m.value.offsetHeight
            }, me = () => {
                l.value.addEventListener("click", ee), window.addEventListener("resize", te)
            };
            return Ae(() => {
                pe(), l.value.removeEventListener("click", ee), window.removeEventListener("resize", te), clearTimeout(t)
            }), (y, v) => {
                const d = Ce;
                return se(), le("div", {ref_key: "el", ref: l, class: "l__home"}, [V("div", {
                    ref_key: "backZone",
                    ref: I,
                    class: "back__zone"
                }, null, 512), V("div", {
                    ref_key: "nextZone",
                    ref: e,
                    class: "next__zone"
                }, null, 512), V("div", {
                    ref_key: "trackContainer",
                    ref: m,
                    class: "index_track"
                }, [V("div", {
                    ref_key: "trackNumber",
                    ref: f,
                    class: "index_track--number"
                }, [De, be(" " + xe(Te(i)), 1)], 512)], 512), ke(d, {
                    class: "home__marquee",
                    ref_key: "marquee",
                    ref: s
                }, null, 512), V("iframe", {
                    ref_key: "brandMarkMobile",
                    ref: p,
                    class: "brandmark__mobile",
                    src: "https://lottie.host/?file=210f6f62-401c-460e-8f78-c0d0d1571e46/TbTMvnEqmV.json"
                }, null, 512)], 512)
            }
        }
    }, Ze = ue(Ge, [["__scopeId", "data-v-5ae880a5"]]);
export {Ze as default};
