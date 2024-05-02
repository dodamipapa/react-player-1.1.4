var ReactPlayer = (() => {
  var dr = Object.create;
  var oe = Object.defineProperty;
  var yr = Object.getOwnPropertyDescriptor;
  var fr = Object.getOwnPropertyNames;
  var mr = Object.getPrototypeOf,
    Pr = Object.prototype.hasOwnProperty;
  var gr = (t, n, e) =>
    n in t
      ? oe(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e })
      : (t[n] = e);
  var L = (t, n) => () => (t && (n = t((t = 0))), n);
  var V = (t, n) => () => (n || t((n = { exports: {} }).exports, n), n.exports),
    T = (t, n) => {
      for (var e in n) oe(t, e, { get: n[e], enumerable: !0 });
    },
    rt = (t, n, e, r) => {
      if ((n && typeof n == "object") || typeof n == "function")
        for (let o of fr(n))
          !Pr.call(t, o) &&
            o !== e &&
            oe(t, o, {
              get: () => n[o],
              enumerable: !(r = yr(n, o)) || r.enumerable,
            });
      return t;
    };
  var y = (t, n, e) => (
      (e = t != null ? dr(mr(t)) : {}),
      rt(
        n || !t || !t.__esModule
          ? oe(e, "default", { value: t, enumerable: !0 })
          : e,
        t
      )
    ),
    br = (t) => rt(oe({}, "__esModule", { value: !0 }), t);
  var s = (t, n, e) => (gr(t, typeof n != "symbol" ? n + "" : n, e), e);
  var g = V((Ws, st) => {
    st.exports = globalThis.React;
  });
  var ot = V((Xs, it) => {
    it.exports = function (n, e, r) {
      var o = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("script");
      typeof e == "function" && ((r = e), (e = {})),
        (e = e || {}),
        (r = r || function () {}),
        (i.type = e.type || "text/javascript"),
        (i.charset = e.charset || "utf8"),
        (i.async = "async" in e ? !!e.async : !0),
        (i.src = n),
        e.attrs && Er(i, e.attrs),
        e.text && (i.text = "" + e.text);
      var a = "onload" in i ? nt : vr;
      a(i, r), i.onload || nt(i, r), o.appendChild(i);
    };
    function Er(t, n) {
      for (var e in n) t.setAttribute(e, n[e]);
    }
    function nt(t, n) {
      (t.onload = function () {
        (this.onerror = this.onload = null), n(null, t);
      }),
        (t.onerror = function () {
          (this.onerror = this.onload = null),
            n(new Error("Failed to load " + this.src), t);
        });
    }
    function vr(t, n) {
      t.onreadystatechange = function () {
        (this.readyState != "complete" && this.readyState != "loaded") ||
          ((this.onreadystatechange = null), n(null, t));
      };
    }
  });
  var Me = V((Zs, pt) => {
    "use strict";
    var Lr = function (n) {
      return wr(n) && !Sr(n);
    };
    function wr(t) {
      return !!t && typeof t == "object";
    }
    function Sr(t) {
      var n = Object.prototype.toString.call(t);
      return n === "[object RegExp]" || n === "[object Date]" || Ir(t);
    }
    var Tr = typeof Symbol == "function" && Symbol.for,
      Rr = Tr ? Symbol.for("react.element") : 60103;
    function Ir(t) {
      return t.$$typeof === Rr;
    }
    function _r(t) {
      return Array.isArray(t) ? [] : {};
    }
    function ae(t, n) {
      return n.clone !== !1 && n.isMergeableObject(t) ? q(_r(t), t, n) : t;
    }
    function Dr(t, n, e) {
      return t.concat(n).map(function (r) {
        return ae(r, e);
      });
    }
    function Ar(t, n) {
      if (!n.customMerge) return q;
      var e = n.customMerge(t);
      return typeof e == "function" ? e : q;
    }
    function kr(t) {
      return Object.getOwnPropertySymbols
        ? Object.getOwnPropertySymbols(t).filter(function (n) {
            return Object.propertyIsEnumerable.call(t, n);
          })
        : [];
    }
    function at(t) {
      return Object.keys(t).concat(kr(t));
    }
    function lt(t, n) {
      try {
        return n in t;
      } catch {
        return !1;
      }
    }
    function Or(t, n) {
      return (
        lt(t, n) &&
        !(
          Object.hasOwnProperty.call(t, n) &&
          Object.propertyIsEnumerable.call(t, n)
        )
      );
    }
    function Cr(t, n, e) {
      var r = {};
      return (
        e.isMergeableObject(t) &&
          at(t).forEach(function (o) {
            r[o] = ae(t[o], e);
          }),
        at(n).forEach(function (o) {
          Or(t, o) ||
            (lt(t, o) && e.isMergeableObject(n[o])
              ? (r[o] = Ar(o, e)(t[o], n[o], e))
              : (r[o] = ae(n[o], e)));
        }),
        r
      );
    }
    function q(t, n, e) {
      (e = e || {}),
        (e.arrayMerge = e.arrayMerge || Dr),
        (e.isMergeableObject = e.isMergeableObject || Lr),
        (e.cloneUnlessOtherwiseSpecified = ae);
      var r = Array.isArray(n),
        o = Array.isArray(t),
        i = r === o;
      return i ? (r ? e.arrayMerge(t, n, e) : Cr(t, n, e)) : ae(n, e);
    }
    q.all = function (n, e) {
      if (!Array.isArray(n))
        throw new Error("first argument should be an array");
      return n.reduce(function (r, o) {
        return q(r, o, e);
      }, {});
    };
    var xr = q;
    pt.exports = xr;
  });
  function ct(t, n) {
    if (t instanceof Array) return;
    let e = t.match(n);
    if (e) {
      let r = e[1];
      if (r.match(Ne)) return Br(r);
      if (Vr.test(r)) return parseInt(r);
    }
  }
  function Br(t) {
    let n = 0,
      e = Ne.exec(t);
    for (; e !== null; ) {
      let [, r, o] = e;
      o === "h" && (n += parseInt(r, 10) * 60 * 60),
        o === "m" && (n += parseInt(r, 10) * 60),
        o === "s" && (n += parseInt(r, 10)),
        (e = Ne.exec(t));
    }
    return n;
  }
  function C(t) {
    return ct(t, Ur);
  }
  function Ve(t) {
    return ct(t, Nr);
  }
  function W() {
    return Math.random().toString(36).substr(2, 5);
  }
  function dt(t) {
    return Object.keys(t)
      .map((n) => `${n}=${t[n]}`)
      .join("&");
  }
  function Ue(t) {
    return window[t]
      ? window[t]
      : window.exports && window.exports[t]
      ? window.exports[t]
      : window.module && window.module.exports && window.module.exports[t]
      ? window.module.exports[t]
      : null;
  }
  function yt(t, ...n) {
    let e = [].concat(...n),
      r = {},
      o = Object.keys(t);
    for (let i of o) e.indexOf(i) === -1 && (r[i] = t[i]);
    return r;
  }
  function f(t, ...n) {
    if (!this.player || !this.player[t]) {
      let e = `ReactPlayer: ${this.constructor.displayName} player could not call %c${t}%c \u2013 `;
      return (
        this.player
          ? this.player[t] || (e += "The method was not available")
          : (e += "The player was not available"),
        console.warn(e, "font-weight: bold", ""),
        null
      );
    }
    return this.player[t](...n);
  }
  function x(t) {
    return (
      typeof window != "undefined" &&
      typeof window.MediaStream != "undefined" &&
      t instanceof window.MediaStream
    );
  }
  function ft(t) {
    return /^blob:/.test(t);
  }
  function X(t = document.createElement("video")) {
    let n = /iPhone|iPod/.test(navigator.userAgent) === !1;
    return (
      t.webkitSupportsPresentationMode &&
      typeof t.webkitSetPresentationMode == "function" &&
      n
    );
  }
  var ut,
    ht,
    Mr,
    w,
    Ur,
    Nr,
    Ne,
    Vr,
    G,
    d,
    b = L(() => {
      (ut = y(g())),
        (ht = y(ot())),
        (Mr = y(Me())),
        (w = (t) =>
          ut.default.lazy(async () => {
            let n = await t();
            return typeof n.default == "function" ? n : n.default;
          })),
        (Ur = /[?&#](?:start|t)=([0-9hms]+)/),
        (Nr = /[?&#]end=([0-9hms]+)/),
        (Ne = /(\d+)(h|m|s)/g),
        (Vr = /^\d+$/);
      (G = {}),
        (d = function (n, e, r = null, o = () => !0, i = ht.default) {
          let a = Ue(e);
          return a && o(a)
            ? Promise.resolve(a)
            : new Promise((l, p) => {
                if (G[n]) {
                  G[n].push({ resolve: l, reject: p });
                  return;
                }
                G[n] = [{ resolve: l, reject: p }];
                let h = (u) => {
                  G[n].forEach((m) => m.resolve(u));
                };
                if (r) {
                  let u = window[r];
                  window[r] = function () {
                    u && u(), h(Ue(e));
                  };
                }
                i(n, (u) => {
                  u
                    ? (G[n].forEach((m) => m.reject(u)), (G[n] = null))
                    : r || h(Ue(e));
                });
              });
        });
    });
  var ye,
    Hr,
    jr,
    fe,
    Kr,
    zr,
    He,
    je,
    Ke,
    me,
    ze,
    $e,
    Fe,
    $r,
    Z,
    mt,
    Pe,
    Ye,
    qe,
    Be,
    c,
    R = L(() => {
      b();
      (ye =
        /(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//),
        (Hr = /(?:soundcloud\.com|snd\.sc)\/[^.]+$/),
        (jr = /vimeo\.com\/(?!progressive_redirect).+/),
        (fe = /stream\.mux\.com\/(?!\w+\.m3u8)(\w+)/),
        (Kr =
          /^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/),
        (zr = /^https?:\/\/fb\.watch\/.+$/),
        (He = /streamable\.com\/([a-z0-9]+)$/),
        (je =
          /(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/),
        (Ke = /(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/),
        (me = /(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/),
        (ze =
          /^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/),
        ($e = /mixcloud\.com\/([^/]+\/[^/]+)/),
        (Fe = /vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/),
        ($r =
          /^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/),
        (Z =
          /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i),
        (mt = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i),
        (Pe = /\.(m3u8)($|\?)/i),
        (Ye = /\.(mpd)($|\?)/i),
        (qe = /\.(flv)($|\?)/i),
        (Be = (t) => {
          if (t instanceof Array) {
            for (let n of t)
              if ((typeof n == "string" && Be(n)) || Be(n.src)) return !0;
            return !1;
          }
          return x(t) || ft(t)
            ? !0
            : Z.test(t) || mt.test(t) || Pe.test(t) || Ye.test(t) || qe.test(t);
        }),
        (c = {
          youtube: (t) =>
            t instanceof Array ? t.every((n) => ye.test(n)) : ye.test(t),
          soundcloud: (t) => Hr.test(t) && !Z.test(t),
          vimeo: (t) => jr.test(t) && !mt.test(t) && !Pe.test(t),
          mux: (t) => fe.test(t),
          facebook: (t) => Kr.test(t) || zr.test(t),
          streamable: (t) => He.test(t),
          wistia: (t) => je.test(t),
          twitch: (t) => Ke.test(t) || me.test(t),
          dailymotion: (t) => ze.test(t),
          mixcloud: (t) => $e.test(t),
          vidyard: (t) => Fe.test(t),
          kaltura: (t) => $r.test(t),
          file: Be,
        });
    });
  var gt = {};
  T(gt, { default: () => Q });
  var le,
    Fr,
    Pt,
    Yr,
    ge,
    Ge,
    qr,
    Gr,
    Q,
    bt = L(() => {
      le = y(g());
      b();
      R();
      (Fr = "https://www.youtube.com/iframe_api"),
        (Pt = "YT"),
        (Yr = "onYouTubeIframeAPIReady"),
        (ge = /[?&](?:list|channel)=([a-zA-Z0-9_-]+)/),
        (Ge = /user\/([a-zA-Z0-9_-]+)\/?/),
        (qr = /youtube-nocookie\.com/),
        (Gr = "https://www.youtube-nocookie.com"),
        (Q = class extends le.Component {
          constructor() {
            super(...arguments);
            s(this, "callPlayer", f);
            s(this, "parsePlaylist", (e) => {
              if (e instanceof Array)
                return {
                  listType: "playlist",
                  playlist: e.map(this.getID).join(","),
                };
              if (ge.test(e)) {
                let [, r] = e.match(ge);
                return { listType: "playlist", list: r.replace(/^UC/, "UU") };
              }
              if (Ge.test(e)) {
                let [, r] = e.match(Ge);
                return { listType: "user_uploads", list: r };
              }
              return {};
            });
            s(this, "onStateChange", (e) => {
              let { data: r } = e,
                {
                  onPlay: o,
                  onPause: i,
                  onBuffer: a,
                  onBufferEnd: l,
                  onEnded: p,
                  onReady: h,
                  loop: u,
                  config: { playerVars: m, onUnstarted: D },
                } = this.props,
                {
                  UNSTARTED: O,
                  PLAYING: N,
                  PAUSED: A,
                  BUFFERING: Ce,
                  ENDED: xe,
                  CUED: hr,
                } = window[Pt].PlayerState;
              if (
                (r === O && D(),
                r === N && (o(), l()),
                r === A && i(),
                r === Ce && a(),
                r === xe)
              ) {
                let cr = !!this.callPlayer("getPlaylist");
                u && !cr && (m.start ? this.seekTo(m.start) : this.play()), p();
              }
              r === hr && h();
            });
            s(this, "mute", () => {
              this.callPlayer("mute");
            });
            s(this, "unmute", () => {
              this.callPlayer("unMute");
            });
            s(this, "ref", (e) => {
              this.container = e;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          getID(e) {
            return !e || e instanceof Array || ge.test(e)
              ? null
              : e.match(ye)[1];
          }
          load(e, r) {
            let {
                playing: o,
                muted: i,
                playsinline: a,
                controls: l,
                loop: p,
                config: h,
                onError: u,
              } = this.props,
              { playerVars: m, embedOptions: D } = h,
              O = this.getID(e);
            if (r) {
              if (ge.test(e) || Ge.test(e) || e instanceof Array) {
                this.player.loadPlaylist(this.parsePlaylist(e));
                return;
              }
              this.player.cueVideoById({
                videoId: O,
                startSeconds: C(e) || m.start,
                endSeconds: Ve(e) || m.end,
              });
              return;
            }
            d(Fr, Pt, Yr, (N) => N.loaded).then((N) => {
              this.container &&
                (this.player = new N.Player(this.container, {
                  width: "100%",
                  height: "100%",
                  videoId: O,
                  playerVars: {
                    autoplay: o ? 1 : 0,
                    mute: i ? 1 : 0,
                    controls: l ? 1 : 0,
                    start: C(e),
                    end: Ve(e),
                    origin: window.location.origin,
                    playsinline: a ? 1 : 0,
                    ...this.parsePlaylist(e),
                    ...m,
                  },
                  events: {
                    onReady: () => {
                      p && this.player.setLoop(!0), this.props.onReady();
                    },
                    onPlaybackRateChange: (A) =>
                      this.props.onPlaybackRateChange(A.data),
                    onPlaybackQualityChange: (A) =>
                      this.props.onPlaybackQualityChange(A),
                    onStateChange: this.onStateChange,
                    onError: (A) => u(A.data),
                  },
                  host: qr.test(e) ? Gr : void 0,
                  ...D,
                }));
            }, u),
              D.events &&
                console.warn(
                  "Using `embedOptions.events` will likely break things. Use ReactPlayer\u2019s callback props instead, eg onReady, onPlay, onPause"
                );
          }
          play() {
            this.callPlayer("playVideo");
          }
          pause() {
            this.callPlayer("pauseVideo");
          }
          stop() {
            document.body.contains(this.callPlayer("getIframe")) &&
              this.callPlayer("stopVideo");
          }
          seekTo(e, r = !1) {
            this.callPlayer("seekTo", e),
              !r && !this.props.playing && this.pause();
          }
          setVolume(e) {
            this.callPlayer("setVolume", e * 100);
          }
          setPlaybackRate(e) {
            this.callPlayer("setPlaybackRate", e);
          }
          setLoop(e) {
            this.callPlayer("setLoop", e);
          }
          getDuration() {
            return this.callPlayer("getDuration");
          }
          getCurrentTime() {
            return this.callPlayer("getCurrentTime");
          }
          getSecondsLoaded() {
            return (
              this.callPlayer("getVideoLoadedFraction") * this.getDuration()
            );
          }
          render() {
            let { display: e } = this.props;
            return le.default.createElement(
              "div",
              { style: { width: "100%", height: "100%", display: e } },
              le.default.createElement("div", { ref: this.ref })
            );
          }
        });
      s(Q, "displayName", "YouTube"), s(Q, "canPlay", c.youtube);
    });
  var Et = {};
  T(Et, { default: () => B });
  var be,
    Wr,
    Xr,
    B,
    vt = L(() => {
      be = y(g());
      b();
      R();
      (Wr = "https://w.soundcloud.com/player/api.js"),
        (Xr = "SC"),
        (B = class extends be.Component {
          constructor() {
            super(...arguments);
            s(this, "callPlayer", f);
            s(this, "duration", null);
            s(this, "currentTime", null);
            s(this, "fractionLoaded", null);
            s(this, "mute", () => {
              this.setVolume(0);
            });
            s(this, "unmute", () => {
              this.props.volume !== null && this.setVolume(this.props.volume);
            });
            s(this, "ref", (e) => {
              this.iframe = e;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(e, r) {
            d(Wr, Xr).then((o) => {
              if (!this.iframe) return;
              let {
                PLAY: i,
                PLAY_PROGRESS: a,
                PAUSE: l,
                FINISH: p,
                ERROR: h,
              } = o.Widget.Events;
              r ||
                ((this.player = o.Widget(this.iframe)),
                this.player.bind(i, this.props.onPlay),
                this.player.bind(l, () => {
                  this.duration - this.currentTime < 0.05 ||
                    this.props.onPause();
                }),
                this.player.bind(a, (u) => {
                  (this.currentTime = u.currentPosition / 1e3),
                    (this.fractionLoaded = u.loadedProgress);
                }),
                this.player.bind(p, () => this.props.onEnded()),
                this.player.bind(h, (u) => this.props.onError(u))),
                this.player.load(e, {
                  ...this.props.config.options,
                  callback: () => {
                    this.player.getDuration((u) => {
                      (this.duration = u / 1e3), this.props.onReady();
                    });
                  },
                });
            });
          }
          play() {
            this.callPlayer("play");
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {}
          seekTo(e, r = !0) {
            this.callPlayer("seekTo", e * 1e3), r || this.pause();
          }
          setVolume(e) {
            this.callPlayer("setVolume", e * 100);
          }
          getDuration() {
            return this.duration;
          }
          getCurrentTime() {
            return this.currentTime;
          }
          getSecondsLoaded() {
            return this.fractionLoaded * this.duration;
          }
          render() {
            let { display: e } = this.props,
              r = { width: "100%", height: "100%", display: e };
            return be.default.createElement("iframe", {
              ref: this.ref,
              src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(
                this.props.url
              )}`,
              style: r,
              frameBorder: 0,
              allow: "autoplay",
            });
          }
        });
      s(B, "displayName", "SoundCloud"),
        s(B, "canPlay", c.soundcloud),
        s(B, "loopOnEnded", !0);
    });
  var Lt = {};
  T(Lt, { default: () => H });
  var Ee,
    Zr,
    Qr,
    Jr,
    H,
    wt = L(() => {
      Ee = y(g());
      b();
      R();
      (Zr = "https://player.vimeo.com/api/player.js"),
        (Qr = "Vimeo"),
        (Jr = (t) => t.replace("/manage/videos", "")),
        (H = class extends Ee.Component {
          constructor() {
            super(...arguments);
            s(this, "callPlayer", f);
            s(this, "duration", null);
            s(this, "currentTime", null);
            s(this, "secondsLoaded", null);
            s(this, "mute", () => {
              this.setMuted(!0);
            });
            s(this, "unmute", () => {
              this.setMuted(!1);
            });
            s(this, "ref", (e) => {
              this.container = e;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(e) {
            (this.duration = null),
              d(Zr, Qr).then((r) => {
                if (!this.container) return;
                let { playerOptions: o, title: i } = this.props.config;
                (this.player = new r.Player(this.container, {
                  url: Jr(e),
                  autoplay: this.props.playing,
                  muted: this.props.muted,
                  loop: this.props.loop,
                  playsinline: this.props.playsinline,
                  controls: this.props.controls,
                  ...o,
                })),
                  this.player
                    .ready()
                    .then(() => {
                      let a = this.container.querySelector("iframe");
                      (a.style.width = "100%"),
                        (a.style.height = "100%"),
                        i && (a.title = i);
                    })
                    .catch(this.props.onError),
                  this.player.on("loaded", () => {
                    this.props.onReady(), this.refreshDuration();
                  }),
                  this.player.on("play", () => {
                    this.props.onPlay(), this.refreshDuration();
                  }),
                  this.player.on("pause", this.props.onPause),
                  this.player.on("seeked", (a) => this.props.onSeek(a.seconds)),
                  this.player.on("ended", this.props.onEnded),
                  this.player.on("error", this.props.onError),
                  this.player.on("timeupdate", ({ seconds: a }) => {
                    this.currentTime = a;
                  }),
                  this.player.on("progress", ({ seconds: a }) => {
                    this.secondsLoaded = a;
                  }),
                  this.player.on("bufferstart", this.props.onBuffer),
                  this.player.on("bufferend", this.props.onBufferEnd),
                  this.player.on("playbackratechange", (a) =>
                    this.props.onPlaybackRateChange(a.playbackRate)
                  );
              }, this.props.onError);
          }
          refreshDuration() {
            this.player.getDuration().then((e) => {
              this.duration = e;
            });
          }
          play() {
            let e = this.callPlayer("play");
            e && e.catch(this.props.onError);
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {
            this.callPlayer("unload");
          }
          seekTo(e, r = !0) {
            this.callPlayer("setCurrentTime", e), r || this.pause();
          }
          setVolume(e) {
            this.callPlayer("setVolume", e);
          }
          setMuted(e) {
            this.callPlayer("setMuted", e);
          }
          setLoop(e) {
            this.callPlayer("setLoop", e);
          }
          setPlaybackRate(e) {
            this.callPlayer("setPlaybackRate", e);
          }
          getDuration() {
            return this.duration;
          }
          getCurrentTime() {
            return this.currentTime;
          }
          getSecondsLoaded() {
            return this.secondsLoaded;
          }
          render() {
            let { display: e } = this.props,
              r = {
                width: "100%",
                height: "100%",
                overflow: "hidden",
                display: e,
              };
            return Ee.default.createElement("div", {
              key: this.props.url,
              ref: this.ref,
              style: r,
            });
          }
        });
      s(H, "displayName", "Vimeo"),
        s(H, "canPlay", c.vimeo),
        s(H, "forceLoad", !0);
    });
  var St = {};
  T(St, { default: () => J });
  var ve,
    es,
    J,
    Tt = L(() => {
      ve = y(g());
      R();
      (es =
        "https://cdn.jsdelivr.net/npm/@mux/mux-player@VERSION/dist/mux-player.mjs"),
        (J = class extends ve.Component {
          constructor() {
            super(...arguments);
            s(this, "onReady", (...e) => this.props.onReady(...e));
            s(this, "onPlay", (...e) => this.props.onPlay(...e));
            s(this, "onBuffer", (...e) => this.props.onBuffer(...e));
            s(this, "onBufferEnd", (...e) => this.props.onBufferEnd(...e));
            s(this, "onPause", (...e) => this.props.onPause(...e));
            s(this, "onEnded", (...e) => this.props.onEnded(...e));
            s(this, "onError", (...e) => this.props.onError(...e));
            s(this, "onPlayBackRateChange", (e) =>
              this.props.onPlaybackRateChange(e.target.playbackRate)
            );
            s(this, "onEnablePIP", (...e) => this.props.onEnablePIP(...e));
            s(this, "onSeek", (e) => {
              this.props.onSeek(e.target.currentTime);
            });
            s(this, "onDurationChange", () => {
              let e = this.getDuration();
              this.props.onDuration(e);
            });
            s(this, "mute", () => {
              this.player.muted = !0;
            });
            s(this, "unmute", () => {
              this.player.muted = !1;
            });
            s(this, "ref", (e) => {
              this.player = e;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this),
              this.addListeners(this.player);
            let e = this.getPlaybackId(this.props.url);
            e && (this.player.playbackId = e);
          }
          componentWillUnmount() {
            (this.player.playbackId = null), this.removeListeners(this.player);
          }
          addListeners(e) {
            let { playsinline: r } = this.props;
            e.addEventListener("play", this.onPlay),
              e.addEventListener("waiting", this.onBuffer),
              e.addEventListener("playing", this.onBufferEnd),
              e.addEventListener("pause", this.onPause),
              e.addEventListener("seeked", this.onSeek),
              e.addEventListener("ended", this.onEnded),
              e.addEventListener("error", this.onError),
              e.addEventListener("ratechange", this.onPlayBackRateChange),
              e.addEventListener("enterpictureinpicture", this.onEnablePIP),
              e.addEventListener("leavepictureinpicture", this.onDisablePIP),
              e.addEventListener(
                "webkitpresentationmodechanged",
                this.onPresentationModeChange
              ),
              e.addEventListener("canplay", this.onReady),
              r && e.setAttribute("playsinline", "");
          }
          removeListeners(e) {
            e.removeEventListener("canplay", this.onReady),
              e.removeEventListener("play", this.onPlay),
              e.removeEventListener("waiting", this.onBuffer),
              e.removeEventListener("playing", this.onBufferEnd),
              e.removeEventListener("pause", this.onPause),
              e.removeEventListener("seeked", this.onSeek),
              e.removeEventListener("ended", this.onEnded),
              e.removeEventListener("error", this.onError),
              e.removeEventListener("ratechange", this.onPlayBackRateChange),
              e.removeEventListener("enterpictureinpicture", this.onEnablePIP),
              e.removeEventListener("leavepictureinpicture", this.onDisablePIP),
              e.removeEventListener("canplay", this.onReady);
          }
          async load(e) {
            var a;
            let { onError: r, config: o } = this.props;
            if (
              !((a = globalThis.customElements) != null && a.get("mux-player"))
            )
              try {
                await import(`${es.replace("VERSION", o.version)}`),
                  this.props.onLoaded();
              } catch (l) {
                r(l);
              }
            let [, i] = e.match(fe);
            this.player.playbackId = i;
          }
          play() {
            let e = this.player.play();
            e && e.catch(this.props.onError);
          }
          pause() {
            this.player.pause();
          }
          stop() {
            this.player.playbackId = null;
          }
          seekTo(e, r = !0) {
            (this.player.currentTime = e), r || this.pause();
          }
          setVolume(e) {
            this.player.volume = e;
          }
          enablePIP() {
            this.player.requestPictureInPicture &&
              document.pictureInPictureElement !== this.player &&
              this.player.requestPictureInPicture();
          }
          disablePIP() {
            document.exitPictureInPicture &&
              document.pictureInPictureElement === this.player &&
              document.exitPictureInPicture();
          }
          setPlaybackRate(e) {
            try {
              this.player.playbackRate = e;
            } catch (r) {
              this.props.onError(r);
            }
          }
          getDuration() {
            if (!this.player) return null;
            let { duration: e, seekable: r } = this.player;
            return e === 1 / 0 && r.length > 0 ? r.end(r.length - 1) : e;
          }
          getCurrentTime() {
            return this.player ? this.player.currentTime : null;
          }
          getSecondsLoaded() {
            if (!this.player) return null;
            let { buffered: e } = this.player;
            if (e.length === 0) return 0;
            let r = e.end(e.length - 1),
              o = this.getDuration();
            return r > o ? o : r;
          }
          getPlaybackId(e) {
            let [, r] = e.match(fe);
            return r;
          }
          render() {
            let {
                url: e,
                playing: r,
                loop: o,
                controls: i,
                muted: a,
                config: l,
                width: p,
                height: h,
              } = this.props,
              u = {
                width: p === "auto" ? p : "100%",
                height: h === "auto" ? h : "100%",
              };
            return (
              i === !1 && (u["--controls"] = "none"),
              ve.default.createElement("mux-player", {
                ref: this.ref,
                "playback-id": this.getPlaybackId(e),
                style: u,
                preload: "auto",
                autoPlay: r || void 0,
                muted: a ? "" : void 0,
                loop: o ? "" : void 0,
                ...l.attributes,
              })
            );
          }
        });
      s(J, "displayName", "Mux"), s(J, "canPlay", c.mux);
    });
  var Dt = {};
  T(Dt, { default: () => j });
  var Le,
    Rt,
    It,
    _t,
    ts,
    j,
    At = L(() => {
      Le = y(g());
      b();
      R();
      (Rt = "https://connect.facebook.net/en_US/sdk.js"),
        (It = "FB"),
        (_t = "fbAsyncInit"),
        (ts = "facebook-player-"),
        (j = class extends Le.Component {
          constructor() {
            super(...arguments);
            s(this, "callPlayer", f);
            s(this, "playerID", this.props.config.playerId || `${ts}${W()}`);
            s(this, "mute", () => {
              this.callPlayer("mute");
            });
            s(this, "unmute", () => {
              this.callPlayer("unmute");
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(e, r) {
            if (r) {
              d(Rt, It, _t).then((o) => o.XFBML.parse());
              return;
            }
            d(Rt, It, _t).then((o) => {
              o.init({
                appId: this.props.config.appId,
                xfbml: !0,
                version: this.props.config.version,
              }),
                o.Event.subscribe("xfbml.render", (i) => {
                  this.props.onLoaded();
                }),
                o.Event.subscribe("xfbml.ready", (i) => {
                  i.type === "video" &&
                    i.id === this.playerID &&
                    ((this.player = i.instance),
                    this.player.subscribe("startedPlaying", this.props.onPlay),
                    this.player.subscribe("paused", this.props.onPause),
                    this.player.subscribe(
                      "finishedPlaying",
                      this.props.onEnded
                    ),
                    this.player.subscribe(
                      "startedBuffering",
                      this.props.onBuffer
                    ),
                    this.player.subscribe(
                      "finishedBuffering",
                      this.props.onBufferEnd
                    ),
                    this.player.subscribe("error", this.props.onError),
                    this.props.muted
                      ? this.callPlayer("mute")
                      : this.callPlayer("unmute"),
                    this.props.onReady(),
                    (document
                      .getElementById(this.playerID)
                      .querySelector("iframe").style.visibility = "visible"));
                });
            });
          }
          play() {
            this.callPlayer("play");
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {}
          seekTo(e, r = !0) {
            this.callPlayer("seek", e), r || this.pause();
          }
          setVolume(e) {
            this.callPlayer("setVolume", e);
          }
          getDuration() {
            return this.callPlayer("getDuration");
          }
          getCurrentTime() {
            return this.callPlayer("getCurrentPosition");
          }
          getSecondsLoaded() {
            return null;
          }
          render() {
            let { attributes: e } = this.props.config;
            return Le.default.createElement("div", {
              style: { width: "100%", height: "100%" },
              id: this.playerID,
              className: "fb-video",
              "data-href": this.props.url,
              "data-autoplay": this.props.playing ? "true" : "false",
              "data-allowfullscreen": "true",
              "data-controls": this.props.controls ? "true" : "false",
              ...e,
            });
          }
        });
      s(j, "displayName", "Facebook"),
        s(j, "canPlay", c.facebook),
        s(j, "loopOnEnded", !0);
    });
  var kt = {};
  T(kt, { default: () => ee });
  var we,
    rs,
    ss,
    ee,
    Ot = L(() => {
      we = y(g());
      b();
      R();
      (rs = "https://cdn.embed.ly/player-0.1.0.min.js"),
        (ss = "playerjs"),
        (ee = class extends we.Component {
          constructor() {
            super(...arguments);
            s(this, "callPlayer", f);
            s(this, "duration", null);
            s(this, "currentTime", null);
            s(this, "secondsLoaded", null);
            s(this, "mute", () => {
              this.callPlayer("mute");
            });
            s(this, "unmute", () => {
              this.callPlayer("unmute");
            });
            s(this, "ref", (e) => {
              this.iframe = e;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(e) {
            d(rs, ss).then((r) => {
              this.iframe &&
                ((this.player = new r.Player(this.iframe)),
                this.player.setLoop(this.props.loop),
                this.player.on("ready", this.props.onReady),
                this.player.on("play", this.props.onPlay),
                this.player.on("pause", this.props.onPause),
                this.player.on("seeked", this.props.onSeek),
                this.player.on("ended", this.props.onEnded),
                this.player.on("error", this.props.onError),
                this.player.on("timeupdate", ({ duration: o, seconds: i }) => {
                  (this.duration = o), (this.currentTime = i);
                }),
                this.player.on("buffered", ({ percent: o }) => {
                  this.duration && (this.secondsLoaded = this.duration * o);
                }),
                this.props.muted && this.player.mute());
            }, this.props.onError);
          }
          play() {
            this.callPlayer("play");
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {}
          seekTo(e, r = !0) {
            this.callPlayer("setCurrentTime", e), r || this.pause();
          }
          setVolume(e) {
            this.callPlayer("setVolume", e * 100);
          }
          setLoop(e) {
            this.callPlayer("setLoop", e);
          }
          getDuration() {
            return this.duration;
          }
          getCurrentTime() {
            return this.currentTime;
          }
          getSecondsLoaded() {
            return this.secondsLoaded;
          }
          render() {
            let e = this.props.url.match(He)[1],
              r = { width: "100%", height: "100%" };
            return we.default.createElement("iframe", {
              ref: this.ref,
              src: `https://streamable.com/o/${e}`,
              frameBorder: "0",
              scrolling: "no",
              style: r,
              allow: "encrypted-media; autoplay; fullscreen;",
            });
          }
        });
      s(ee, "displayName", "Streamable"), s(ee, "canPlay", c.streamable);
    });
  var Ct = {};
  T(Ct, { default: () => K });
  var Se,
    ns,
    is,
    os,
    K,
    xt = L(() => {
      Se = y(g());
      b();
      R();
      (ns = "https://fast.wistia.com/assets/external/E-v1.js"),
        (is = "Wistia"),
        (os = "wistia-player-"),
        (K = class extends Se.Component {
          constructor() {
            super(...arguments);
            s(this, "callPlayer", f);
            s(this, "playerID", this.props.config.playerId || `${os}${W()}`);
            s(this, "onPlay", (...e) => this.props.onPlay(...e));
            s(this, "onPause", (...e) => this.props.onPause(...e));
            s(this, "onSeek", (...e) => this.props.onSeek(...e));
            s(this, "onEnded", (...e) => this.props.onEnded(...e));
            s(this, "onPlaybackRateChange", (...e) =>
              this.props.onPlaybackRateChange(...e)
            );
            s(this, "mute", () => {
              this.callPlayer("mute");
            });
            s(this, "unmute", () => {
              this.callPlayer("unmute");
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(e) {
            let {
              playing: r,
              muted: o,
              controls: i,
              onReady: a,
              config: l,
              onError: p,
            } = this.props;
            d(ns, is).then((h) => {
              l.customControls &&
                l.customControls.forEach((u) => h.defineControl(u)),
                (window._wq = window._wq || []),
                window._wq.push({
                  id: this.playerID,
                  options: {
                    autoPlay: r,
                    silentAutoPlay: "allow",
                    muted: o,
                    controlsVisibleOnLoad: i,
                    fullscreenButton: i,
                    playbar: i,
                    playbackRateControl: i,
                    qualityControl: i,
                    volumeControl: i,
                    settingsControl: i,
                    smallPlayButton: i,
                    ...l.options,
                  },
                  onReady: (u) => {
                    (this.player = u),
                      this.unbind(),
                      this.player.bind("play", this.onPlay),
                      this.player.bind("pause", this.onPause),
                      this.player.bind("seek", this.onSeek),
                      this.player.bind("end", this.onEnded),
                      this.player.bind(
                        "playbackratechange",
                        this.onPlaybackRateChange
                      ),
                      a();
                  },
                });
            }, p);
          }
          unbind() {
            this.player.unbind("play", this.onPlay),
              this.player.unbind("pause", this.onPause),
              this.player.unbind("seek", this.onSeek),
              this.player.unbind("end", this.onEnded),
              this.player.unbind(
                "playbackratechange",
                this.onPlaybackRateChange
              );
          }
          play() {
            this.callPlayer("play");
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {
            this.unbind(), this.callPlayer("remove");
          }
          seekTo(e, r = !0) {
            this.callPlayer("time", e), r || this.pause();
          }
          setVolume(e) {
            this.callPlayer("volume", e);
          }
          setPlaybackRate(e) {
            this.callPlayer("playbackRate", e);
          }
          getDuration() {
            return this.callPlayer("duration");
          }
          getCurrentTime() {
            return this.callPlayer("time");
          }
          getSecondsLoaded() {
            return null;
          }
          render() {
            let { url: e } = this.props,
              r = e && e.match(je)[1],
              o = `wistia_embed wistia_async_${r}`,
              i = { width: "100%", height: "100%" };
            return Se.default.createElement("div", {
              id: this.playerID,
              key: r,
              className: o,
              style: i,
            });
          }
        });
      s(K, "displayName", "Wistia"),
        s(K, "canPlay", c.wistia),
        s(K, "loopOnEnded", !0);
    });
  var Mt = {};
  T(Mt, { default: () => z });
  var Te,
    as,
    ls,
    ps,
    z,
    Ut = L(() => {
      Te = y(g());
      b();
      R();
      (as = "https://player.twitch.tv/js/embed/v1.js"),
        (ls = "Twitch"),
        (ps = "twitch-player-"),
        (z = class extends Te.Component {
          constructor() {
            super(...arguments);
            s(this, "callPlayer", f);
            s(this, "playerID", this.props.config.playerId || `${ps}${W()}`);
            s(this, "mute", () => {
              this.callPlayer("setMuted", !0);
            });
            s(this, "unmute", () => {
              this.callPlayer("setMuted", !1);
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(e, r) {
            let {
                playsinline: o,
                onError: i,
                config: a,
                controls: l,
              } = this.props,
              p = me.test(e),
              h = p ? e.match(me)[1] : e.match(Ke)[1];
            if (r) {
              p ? this.player.setChannel(h) : this.player.setVideo("v" + h);
              return;
            }
            d(as, ls).then((u) => {
              this.player = new u.Player(this.playerID, {
                video: p ? "" : h,
                channel: p ? h : "",
                height: "100%",
                width: "100%",
                playsinline: o,
                autoplay: this.props.playing,
                muted: this.props.muted,
                controls: p ? !0 : l,
                time: C(e),
                ...a.options,
              });
              let {
                READY: m,
                PLAYING: D,
                PAUSE: O,
                ENDED: N,
                ONLINE: A,
                OFFLINE: Ce,
                SEEK: xe,
              } = u.Player;
              this.player.addEventListener(m, this.props.onReady),
                this.player.addEventListener(D, this.props.onPlay),
                this.player.addEventListener(O, this.props.onPause),
                this.player.addEventListener(N, this.props.onEnded),
                this.player.addEventListener(xe, this.props.onSeek),
                this.player.addEventListener(A, this.props.onLoaded),
                this.player.addEventListener(Ce, this.props.onLoaded);
            }, i);
          }
          play() {
            this.callPlayer("play");
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {
            this.callPlayer("pause");
          }
          seekTo(e, r = !0) {
            this.callPlayer("seek", e), r || this.pause();
          }
          setVolume(e) {
            this.callPlayer("setVolume", e);
          }
          getDuration() {
            return this.callPlayer("getDuration");
          }
          getCurrentTime() {
            return this.callPlayer("getCurrentTime");
          }
          getSecondsLoaded() {
            return null;
          }
          render() {
            return Te.default.createElement("div", {
              style: { width: "100%", height: "100%" },
              id: this.playerID,
            });
          }
        });
      s(z, "displayName", "Twitch"),
        s(z, "canPlay", c.twitch),
        s(z, "loopOnEnded", !0);
    });
  var Nt = {};
  T(Nt, { default: () => $ });
  var pe,
    us,
    hs,
    cs,
    $,
    Vt = L(() => {
      pe = y(g());
      b();
      R();
      (us = "https://api.dmcdn.net/all.js"),
        (hs = "DM"),
        (cs = "dmAsyncInit"),
        ($ = class extends pe.Component {
          constructor() {
            super(...arguments);
            s(this, "callPlayer", f);
            s(this, "onDurationChange", () => {
              let e = this.getDuration();
              this.props.onDuration(e);
            });
            s(this, "mute", () => {
              this.callPlayer("setMuted", !0);
            });
            s(this, "unmute", () => {
              this.callPlayer("setMuted", !1);
            });
            s(this, "ref", (e) => {
              this.container = e;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(e) {
            let { controls: r, config: o, onError: i, playing: a } = this.props,
              [, l] = e.match(ze);
            if (this.player) {
              this.player.load(l, { start: C(e), autoplay: a });
              return;
            }
            d(us, hs, cs, (p) => p.player).then((p) => {
              if (!this.container) return;
              let h = p.player;
              this.player = new h(this.container, {
                width: "100%",
                height: "100%",
                video: l,
                params: {
                  controls: r,
                  autoplay: this.props.playing,
                  mute: this.props.muted,
                  start: C(e),
                  origin: window.location.origin,
                  ...o.params,
                },
                events: {
                  apiready: this.props.onReady,
                  seeked: () => this.props.onSeek(this.player.currentTime),
                  video_end: this.props.onEnded,
                  durationchange: this.onDurationChange,
                  pause: this.props.onPause,
                  playing: this.props.onPlay,
                  waiting: this.props.onBuffer,
                  error: (u) => i(u),
                },
              });
            }, i);
          }
          play() {
            this.callPlayer("play");
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {}
          seekTo(e, r = !0) {
            this.callPlayer("seek", e), r || this.pause();
          }
          setVolume(e) {
            this.callPlayer("setVolume", e);
          }
          getDuration() {
            return this.player.duration || null;
          }
          getCurrentTime() {
            return this.player.currentTime;
          }
          getSecondsLoaded() {
            return this.player.bufferedTime;
          }
          render() {
            let { display: e } = this.props;
            return pe.default.createElement(
              "div",
              { style: { width: "100%", height: "100%", display: e } },
              pe.default.createElement("div", { ref: this.ref })
            );
          }
        });
      s($, "displayName", "DailyMotion"),
        s($, "canPlay", c.dailymotion),
        s($, "loopOnEnded", !0);
    });
  var Bt = {};
  T(Bt, { default: () => F });
  var Re,
    ds,
    ys,
    F,
    Ht = L(() => {
      Re = y(g());
      b();
      R();
      (ds = "https://widget.mixcloud.com/media/js/widgetApi.js"),
        (ys = "Mixcloud"),
        (F = class extends Re.Component {
          constructor() {
            super(...arguments);
            s(this, "callPlayer", f);
            s(this, "duration", null);
            s(this, "currentTime", null);
            s(this, "secondsLoaded", null);
            s(this, "mute", () => {});
            s(this, "unmute", () => {});
            s(this, "ref", (e) => {
              this.iframe = e;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(e) {
            d(ds, ys).then((r) => {
              (this.player = r.PlayerWidget(this.iframe)),
                this.player.ready.then(() => {
                  this.player.events.play.on(this.props.onPlay),
                    this.player.events.pause.on(this.props.onPause),
                    this.player.events.ended.on(this.props.onEnded),
                    this.player.events.error.on(this.props.error),
                    this.player.events.progress.on((o, i) => {
                      (this.currentTime = o), (this.duration = i);
                    }),
                    this.props.onReady();
                });
            }, this.props.onError);
          }
          play() {
            this.callPlayer("play");
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {}
          seekTo(e, r = !0) {
            this.callPlayer("seek", e), r || this.pause();
          }
          setVolume(e) {}
          getDuration() {
            return this.duration;
          }
          getCurrentTime() {
            return this.currentTime;
          }
          getSecondsLoaded() {
            return null;
          }
          render() {
            let { url: e, config: r } = this.props,
              o = e.match($e)[1],
              i = { width: "100%", height: "100%" },
              a = dt({ ...r.options, feed: `/${o}/` });
            return Re.default.createElement("iframe", {
              key: o,
              ref: this.ref,
              style: i,
              src: `https://www.mixcloud.com/widget/iframe/?${a}`,
              frameBorder: "0",
              allow: "autoplay",
            });
          }
        });
      s(F, "displayName", "Mixcloud"),
        s(F, "canPlay", c.mixcloud),
        s(F, "loopOnEnded", !0);
    });
  var jt = {};
  T(jt, { default: () => te });
  var ue,
    fs,
    ms,
    Ps,
    te,
    Kt = L(() => {
      ue = y(g());
      b();
      R();
      (fs = "https://play.vidyard.com/embed/v4.js"),
        (ms = "VidyardV4"),
        (Ps = "onVidyardAPI"),
        (te = class extends ue.Component {
          constructor() {
            super(...arguments);
            s(this, "callPlayer", f);
            s(this, "mute", () => {
              this.setVolume(0);
            });
            s(this, "unmute", () => {
              this.props.volume !== null && this.setVolume(this.props.volume);
            });
            s(this, "ref", (e) => {
              this.container = e;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(e) {
            let {
                playing: r,
                config: o,
                onError: i,
                onDuration: a,
              } = this.props,
              l = e && e.match(Fe)[1];
            this.player && this.stop(),
              d(fs, ms, Ps).then((p) => {
                this.container &&
                  (p.api.addReadyListener((h, u) => {
                    this.player ||
                      ((this.player = u),
                      this.player.on("ready", this.props.onReady),
                      this.player.on("play", this.props.onPlay),
                      this.player.on("pause", this.props.onPause),
                      this.player.on("seek", this.props.onSeek),
                      this.player.on("playerComplete", this.props.onEnded));
                  }, l),
                  p.api.renderPlayer({
                    uuid: l,
                    container: this.container,
                    autoplay: r ? 1 : 0,
                    ...o.options,
                  }),
                  p.api.getPlayerMetadata(l).then((h) => {
                    (this.duration = h.length_in_seconds),
                      a(h.length_in_seconds);
                  }));
              }, i);
          }
          play() {
            this.callPlayer("play");
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {
            window.VidyardV4.api.destroyPlayer(this.player);
          }
          seekTo(e, r = !0) {
            this.callPlayer("seek", e), r || this.pause();
          }
          setVolume(e) {
            this.callPlayer("setVolume", e);
          }
          setPlaybackRate(e) {
            this.callPlayer("setPlaybackSpeed", e);
          }
          getDuration() {
            return this.duration;
          }
          getCurrentTime() {
            return this.callPlayer("currentTime");
          }
          getSecondsLoaded() {
            return null;
          }
          render() {
            let { display: e } = this.props;
            return ue.default.createElement(
              "div",
              { style: { width: "100%", height: "100%", display: e } },
              ue.default.createElement("div", { ref: this.ref })
            );
          }
        });
      s(te, "displayName", "Vidyard"), s(te, "canPlay", c.vidyard);
    });
  var zt = {};
  T(zt, { default: () => re });
  var Ie,
    gs,
    bs,
    re,
    $t = L(() => {
      Ie = y(g());
      b();
      R();
      (gs = "https://cdn.embed.ly/player-0.1.0.min.js"),
        (bs = "playerjs"),
        (re = class extends Ie.Component {
          constructor() {
            super(...arguments);
            s(this, "callPlayer", f);
            s(this, "duration", null);
            s(this, "currentTime", null);
            s(this, "secondsLoaded", null);
            s(this, "mute", () => {
              this.callPlayer("mute");
            });
            s(this, "unmute", () => {
              this.callPlayer("unmute");
            });
            s(this, "ref", (e) => {
              this.iframe = e;
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this);
          }
          load(e) {
            d(gs, bs).then((r) => {
              this.iframe &&
                ((this.player = new r.Player(this.iframe)),
                this.player.on("ready", () => {
                  setTimeout(() => {
                    (this.player.isReady = !0),
                      this.player.setLoop(this.props.loop),
                      this.props.muted && this.player.mute(),
                      this.addListeners(this.player, this.props),
                      this.props.onReady();
                  }, 500);
                }));
            }, this.props.onError);
          }
          addListeners(e, r) {
            e.on("play", r.onPlay),
              e.on("pause", r.onPause),
              e.on("ended", r.onEnded),
              e.on("error", r.onError),
              e.on("timeupdate", ({ duration: o, seconds: i }) => {
                (this.duration = o), (this.currentTime = i);
              });
          }
          play() {
            this.callPlayer("play");
          }
          pause() {
            this.callPlayer("pause");
          }
          stop() {}
          seekTo(e, r = !0) {
            this.callPlayer("setCurrentTime", e), r || this.pause();
          }
          setVolume(e) {
            this.callPlayer("setVolume", e);
          }
          setLoop(e) {
            this.callPlayer("setLoop", e);
          }
          getDuration() {
            return this.duration;
          }
          getCurrentTime() {
            return this.currentTime;
          }
          getSecondsLoaded() {
            return this.secondsLoaded;
          }
          render() {
            let e = { width: "100%", height: "100%" };
            return Ie.default.createElement("iframe", {
              ref: this.ref,
              src: this.props.url,
              frameBorder: "0",
              scrolling: "no",
              style: e,
              allow: "encrypted-media; autoplay; fullscreen;",
              referrerPolicy: "no-referrer-when-downgrade",
            });
          }
        });
      s(re, "displayName", "Kaltura"), s(re, "canPlay", c.kaltura);
    });
  var Yt = {};
  T(Yt, { default: () => se });
  var Y,
    Xe,
    Es,
    Ft,
    vs,
    Ls,
    ws,
    Ss,
    Ts,
    Rs,
    Is,
    _s,
    We,
    Ds,
    se,
    qt = L(() => {
      Y = y(g());
      b();
      R();
      (Xe = typeof navigator != "undefined"),
        (Es =
          Xe &&
          navigator.platform === "MacIntel" &&
          navigator.maxTouchPoints > 1),
        (Ft =
          Xe &&
          (/iPad|iPhone|iPod/.test(navigator.userAgent) || Es) &&
          !window.MSStream),
        (vs =
          Xe &&
          /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
          !window.MSStream),
        (Ls = "../src/hls_1.1.4.min.js"),
        (ws = "Hls"),
        (Ss =
          "https://cdnjs.cloudflare.com/ajax/libs/dashjs/VERSION/dash.all.min.js"),
        (Ts = "dashjs"),
        (Rs = "https://cdn.jsdelivr.net/npm/flv.js@VERSION/dist/flv.min.js"),
        (Is = "flvjs"),
        (_s = /www\.dropbox\.com\/.+/),
        (We = /https:\/\/watch\.cloudflarestream\.com\/([a-z0-9]+)/),
        (Ds = "https://videodelivery.net/{id}/manifest/video.m3u8"),
        (se = class extends Y.Component {
          constructor() {
            super(...arguments);
            s(this, "onReady", (...e) => this.props.onReady(...e));
            s(this, "onPlay", (...e) => this.props.onPlay(...e));
            s(this, "onBuffer", (...e) => this.props.onBuffer(...e));
            s(this, "onBufferEnd", (...e) => this.props.onBufferEnd(...e));
            s(this, "onPause", (...e) => this.props.onPause(...e));
            s(this, "onEnded", (...e) => this.props.onEnded(...e));
            s(this, "onError", (...e) => this.props.onError(...e));
            s(this, "onPlayBackRateChange", (e) =>
              this.props.onPlaybackRateChange(e.target.playbackRate)
            );
            s(this, "onEnablePIP", (...e) => this.props.onEnablePIP(...e));
            s(this, "onDisablePIP", (e) => {
              let { onDisablePIP: r, playing: o } = this.props;
              r(e), o && this.play();
            });
            s(this, "onPresentationModeChange", (e) => {
              if (this.player && X(this.player)) {
                let { webkitPresentationMode: r } = this.player;
                r === "picture-in-picture"
                  ? this.onEnablePIP(e)
                  : r === "inline" && this.onDisablePIP(e);
              }
            });
            s(this, "onSeek", (e) => {
              this.props.onSeek(e.target.currentTime);
            });
            s(this, "mute", () => {
              this.player.muted = !0;
            });
            s(this, "unmute", () => {
              this.player.muted = !1;
            });
            s(this, "renderSourceElement", (e, r) =>
              typeof e == "string"
                ? Y.default.createElement("source", { key: r, src: e })
                : Y.default.createElement("source", { key: r, ...e })
            );
            s(this, "renderTrack", (e, r) =>
              Y.default.createElement("track", { key: r, ...e })
            );
            s(this, "ref", (e) => {
              this.player && (this.prevPlayer = this.player), (this.player = e);
            });
          }
          componentDidMount() {
            this.props.onMount && this.props.onMount(this),
              this.addListeners(this.player);
            let e = this.getSource(this.props.url);
            e && (this.player.src = e),
              (Ft || this.props.config.forceDisableHls) && this.player.load();
          }
          componentDidUpdate(e) {
            this.shouldUseAudio(this.props) !== this.shouldUseAudio(e) &&
              (this.removeListeners(this.prevPlayer, e.url),
              this.addListeners(this.player)),
              this.props.url !== e.url &&
                !x(this.props.url) &&
                !(this.props.url instanceof Array) &&
                (this.player.srcObject = null);
          }
          componentWillUnmount() {
            this.player.removeAttribute("src"),
              this.removeListeners(this.player),
              this.hls && this.hls.destroy();
          }
          addListeners(e) {
            let { url: r, playsinline: o } = this.props;
            e.addEventListener("play", this.onPlay),
              e.addEventListener("waiting", this.onBuffer),
              e.addEventListener("playing", this.onBufferEnd),
              e.addEventListener("pause", this.onPause),
              e.addEventListener("seeked", this.onSeek),
              e.addEventListener("ended", this.onEnded),
              e.addEventListener("error", this.onError),
              e.addEventListener("ratechange", this.onPlayBackRateChange),
              e.addEventListener("enterpictureinpicture", this.onEnablePIP),
              e.addEventListener("leavepictureinpicture", this.onDisablePIP),
              e.addEventListener(
                "webkitpresentationmodechanged",
                this.onPresentationModeChange
              ),
              this.shouldUseHLS(r) ||
                e.addEventListener("canplay", this.onReady),
              o &&
                (e.setAttribute("playsinline", ""),
                e.setAttribute("webkit-playsinline", ""),
                e.setAttribute("x5-playsinline", ""));
          }
          removeListeners(e, r) {
            e.removeEventListener("canplay", this.onReady),
              e.removeEventListener("play", this.onPlay),
              e.removeEventListener("waiting", this.onBuffer),
              e.removeEventListener("playing", this.onBufferEnd),
              e.removeEventListener("pause", this.onPause),
              e.removeEventListener("seeked", this.onSeek),
              e.removeEventListener("ended", this.onEnded),
              e.removeEventListener("error", this.onError),
              e.removeEventListener("ratechange", this.onPlayBackRateChange),
              e.removeEventListener("enterpictureinpicture", this.onEnablePIP),
              e.removeEventListener("leavepictureinpicture", this.onDisablePIP),
              e.removeEventListener(
                "webkitpresentationmodechanged",
                this.onPresentationModeChange
              ),
              this.shouldUseHLS(r) ||
                e.removeEventListener("canplay", this.onReady);
          }
          shouldUseAudio(e) {
            return e.config.forceVideo || e.config.attributes.poster
              ? !1
              : Z.test(e.url) || e.config.forceAudio;
          }
          shouldUseHLS(e) {
            return (vs && this.props.config.forceSafariHLS) ||
              this.props.config.forceHLS
              ? !0
              : Ft || this.props.config.forceDisableHls
              ? !1
              : Pe.test(e) || We.test(e);
          }
          shouldUseDASH(e) {
            return Ye.test(e) || this.props.config.forceDASH;
          }
          shouldUseFLV(e) {
            return qe.test(e) || this.props.config.forceFLV;
          }
          load(e) {
            let {
              hlsVersion: r,
              hlsOptions: o,
              dashVersion: i,
              flvVersion: a,
            } = this.props.config;
            if (
              (this.hls && this.hls.destroy(),
              this.dash && this.dash.reset(),
              this.shouldUseHLS(e) &&
                d(Ls.replace("VERSION", r), ws).then((l) => {
                  if (
                    ((this.hls = new l(o)),
                    this.hls.on(l.Events.MANIFEST_PARSED, () => {
                      this.props.onReady();
                    }),
                    this.hls.on(l.Events.ERROR, (p, h) => {
                      this.props.onError(p, h, this.hls, l);
                    }),
                    We.test(e))
                  ) {
                    let p = e.match(We)[1];
                    this.hls.loadSource(Ds.replace("{id}", p));
                  } else this.hls.loadSource(e);
                  this.hls.attachMedia(this.player), this.props.onLoaded();
                }),
              this.shouldUseDASH(e) &&
                d(Ss.replace("VERSION", i), Ts).then((l) => {
                  (this.dash = l.MediaPlayer().create()),
                    this.dash.initialize(this.player, e, this.props.playing),
                    this.dash.on("error", this.props.onError),
                    parseInt(i) < 3
                      ? this.dash.getDebug().setLogToBrowserConsole(!1)
                      : this.dash.updateSettings({
                          debug: { logLevel: l.Debug.LOG_LEVEL_NONE },
                        }),
                    this.props.onLoaded();
                }),
              this.shouldUseFLV(e) &&
                d(Rs.replace("VERSION", a), Is).then((l) => {
                  (this.flv = l.createPlayer({ type: "flv", url: e })),
                    this.flv.attachMediaElement(this.player),
                    this.flv.on(l.Events.ERROR, (p, h) => {
                      this.props.onError(p, h, this.flv, l);
                    }),
                    this.flv.load(),
                    this.props.onLoaded();
                }),
              e instanceof Array)
            )
              this.player.load();
            else if (x(e))
              try {
                this.player.srcObject = e;
              } catch {
                this.player.src = window.URL.createObjectURL(e);
              }
          }
          play() {
            let e = this.player.play();
            e && e.catch(this.props.onError);
          }
          pause() {
            this.player.pause();
          }
          stop() {
            this.player.removeAttribute("src"), this.dash && this.dash.reset();
          }
          seekTo(e, r = !0) {
            (this.player.currentTime = e), r || this.pause();
          }
          setVolume(e) {
            this.player.volume = e;
          }
          enablePIP() {
            this.player.requestPictureInPicture &&
            document.pictureInPictureElement !== this.player
              ? this.player.requestPictureInPicture()
              : X(this.player) &&
                this.player.webkitPresentationMode !== "picture-in-picture" &&
                this.player.webkitSetPresentationMode("picture-in-picture");
          }
          disablePIP() {
            document.exitPictureInPicture &&
            document.pictureInPictureElement === this.player
              ? document.exitPictureInPicture()
              : X(this.player) &&
                this.player.webkitPresentationMode !== "inline" &&
                this.player.webkitSetPresentationMode("inline");
          }
          setPlaybackRate(e) {
            try {
              this.player.playbackRate = e;
            } catch (r) {
              this.props.onError(r);
            }
          }
          getDuration() {
            if (!this.player) return null;
            let { duration: e, seekable: r } = this.player;
            return e === 1 / 0 && r.length > 0 ? r.end(r.length - 1) : e;
          }
          getCurrentTime() {
            return this.player ? this.player.currentTime : null;
          }
          getSecondsLoaded() {
            if (!this.player) return null;
            let { buffered: e } = this.player;
            if (e.length === 0) return 0;
            let r = e.end(e.length - 1),
              o = this.getDuration();
            return r > o ? o : r;
          }
          getSource(e) {
            let r = this.shouldUseHLS(e),
              o = this.shouldUseDASH(e),
              i = this.shouldUseFLV(e);
            if (!(e instanceof Array || x(e) || r || o || i))
              return _s.test(e)
                ? e.replace("www.dropbox.com", "dl.dropboxusercontent.com")
                : e;
          }
          render() {
            let {
                url: e,
                playing: r,
                loop: o,
                controls: i,
                muted: a,
                config: l,
                width: p,
                height: h,
              } = this.props,
              m = this.shouldUseAudio(this.props) ? "audio" : "video",
              D = {
                width: p === "auto" ? p : "100%",
                height: h === "auto" ? h : "100%",
              };
            return Y.default.createElement(
              m,
              {
                ref: this.ref,
                src: this.getSource(e),
                style: D,
                preload: "auto",
                autoPlay: r || void 0,
                controls: i,
                muted: a,
                loop: o,
                ...l.attributes,
              },
              e instanceof Array && e.map(this.renderSourceElement),
              l.tracks.map(this.renderTrack)
            );
          }
        });
      s(se, "displayName", "FilePlayer"), s(se, "canPlay", c.file);
    });
  var Ze = V(($n, Wt) => {
    var Cs = typeof Element != "undefined",
      xs = typeof Map == "function",
      Ms = typeof Set == "function",
      Us = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
    function Ae(t, n) {
      if (t === n) return !0;
      if (t && n && typeof t == "object" && typeof n == "object") {
        if (t.constructor !== n.constructor) return !1;
        var e, r, o;
        if (Array.isArray(t)) {
          if (((e = t.length), e != n.length)) return !1;
          for (r = e; r-- !== 0; ) if (!Ae(t[r], n[r])) return !1;
          return !0;
        }
        var i;
        if (xs && t instanceof Map && n instanceof Map) {
          if (t.size !== n.size) return !1;
          for (i = t.entries(); !(r = i.next()).done; )
            if (!n.has(r.value[0])) return !1;
          for (i = t.entries(); !(r = i.next()).done; )
            if (!Ae(r.value[1], n.get(r.value[0]))) return !1;
          return !0;
        }
        if (Ms && t instanceof Set && n instanceof Set) {
          if (t.size !== n.size) return !1;
          for (i = t.entries(); !(r = i.next()).done; )
            if (!n.has(r.value[0])) return !1;
          return !0;
        }
        if (Us && ArrayBuffer.isView(t) && ArrayBuffer.isView(n)) {
          if (((e = t.length), e != n.length)) return !1;
          for (r = e; r-- !== 0; ) if (t[r] !== n[r]) return !1;
          return !0;
        }
        if (t.constructor === RegExp)
          return t.source === n.source && t.flags === n.flags;
        if (
          t.valueOf !== Object.prototype.valueOf &&
          typeof t.valueOf == "function" &&
          typeof n.valueOf == "function"
        )
          return t.valueOf() === n.valueOf();
        if (
          t.toString !== Object.prototype.toString &&
          typeof t.toString == "function" &&
          typeof n.toString == "function"
        )
          return t.toString() === n.toString();
        if (((o = Object.keys(t)), (e = o.length), e !== Object.keys(n).length))
          return !1;
        for (r = e; r-- !== 0; )
          if (!Object.prototype.hasOwnProperty.call(n, o[r])) return !1;
        if (Cs && t instanceof Element) return !1;
        for (r = e; r-- !== 0; )
          if (
            !(
              (o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") &&
              t.$$typeof
            ) &&
            !Ae(t[o[r]], n[o[r]])
          )
            return !1;
        return !0;
      }
      return t !== t && n !== n;
    }
    Wt.exports = function (n, e) {
      try {
        return Ae(n, e);
      } catch (r) {
        if ((r.message || "").match(/stack|recursion/i))
          return (
            console.warn("react-fast-compare cannot handle circular refs"), !1
          );
        throw r;
      }
    };
  });
  var Zt = V((Fn, Xt) => {
    "use strict";
    var Ns = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    Xt.exports = Ns;
  });
  var tr = V((Yn, er) => {
    "use strict";
    var Vs = Zt();
    function Qt() {}
    function Jt() {}
    Jt.resetWarningCache = Qt;
    er.exports = function () {
      function t(r, o, i, a, l, p) {
        if (p !== Vs) {
          var h = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((h.name = "Invariant Violation"), h);
        }
      }
      t.isRequired = t;
      function n() {
        return t;
      }
      var e = {
        array: t,
        bigint: t,
        bool: t,
        func: t,
        number: t,
        object: t,
        string: t,
        symbol: t,
        any: t,
        arrayOf: n,
        element: t,
        elementType: t,
        instanceOf: n,
        node: t,
        objectOf: n,
        oneOf: n,
        oneOfType: n,
        shape: n,
        exact: n,
        checkPropTypes: Jt,
        resetWarningCache: Qt,
      };
      return (e.PropTypes = e), e;
    };
  });
  var sr = V((Wn, rr) => {
    rr.exports = tr()();
    var qn, Gn;
  });
  var ar = {};
  T(ar, { default: () => Oe });
  var U,
    Je,
    et,
    Oe,
    lr = L(() => {
      (U = y(g())),
        (Je = "64px"),
        (et = {}),
        (Oe = class extends U.Component {
          constructor() {
            super(...arguments);
            s(this, "mounted", !1);
            s(this, "state", { image: null });
            s(this, "handleKeyPress", (e) => {
              (e.key === "Enter" || e.key === " ") && this.props.onClick();
            });
          }
          componentDidMount() {
            (this.mounted = !0), this.fetchImage(this.props);
          }
          componentDidUpdate(e) {
            let { url: r, light: o } = this.props;
            (e.url !== r || e.light !== o) && this.fetchImage(this.props);
          }
          componentWillUnmount() {
            this.mounted = !1;
          }
          fetchImage({ url: e, light: r, oEmbedUrl: o }) {
            if (!U.default.isValidElement(r)) {
              if (typeof r == "string") {
                this.setState({ image: r });
                return;
              }
              if (et[e]) {
                this.setState({ image: et[e] });
                return;
              }
              return (
                this.setState({ image: null }),
                window
                  .fetch(o.replace("{url}", e))
                  .then((i) => i.json())
                  .then((i) => {
                    if (i.thumbnail_url && this.mounted) {
                      let a = i.thumbnail_url
                        .replace("height=100", "height=480")
                        .replace("-d_295x166", "-d_640");
                      this.setState({ image: a }), (et[e] = a);
                    }
                  })
              );
            }
          }
          render() {
            let {
                light: e,
                onClick: r,
                playIcon: o,
                previewTabIndex: i,
                previewAriaLabel: a,
              } = this.props,
              { image: l } = this.state,
              p = U.default.isValidElement(e),
              h = {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
              u = {
                preview: {
                  width: "100%",
                  height: "100%",
                  backgroundImage: l && !p ? `url(${l})` : void 0,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  cursor: "pointer",
                  ...h,
                },
                shadow: {
                  background:
                    "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)",
                  borderRadius: Je,
                  width: Je,
                  height: Je,
                  position: p ? "absolute" : void 0,
                  ...h,
                },
                playIcon: {
                  borderStyle: "solid",
                  borderWidth: "16px 0 16px 26px",
                  borderColor: "transparent transparent transparent white",
                  marginLeft: "7px",
                },
              },
              m = U.default.createElement(
                "div",
                { style: u.shadow, className: "react-player__shadow" },
                U.default.createElement("div", {
                  style: u.playIcon,
                  className: "react-player__play-icon",
                })
              );
            return U.default.createElement(
              "div",
              {
                style: u.preview,
                className: "react-player__preview",
                onClick: r,
                tabIndex: i,
                onKeyPress: this.handleKeyPress,
                ...(a ? { "aria-label": a } : {}),
              },
              p ? e : null,
              o || m
            );
          }
        });
    });
  var qs = {};
  T(qs, { default: () => Ys });
  b();
  R();
  var _e = [
    {
      key: "youtube",
      name: "YouTube",
      canPlay: c.youtube,
      lazyPlayer: w(() => Promise.resolve().then(() => (bt(), gt))),
    },
    {
      key: "soundcloud",
      name: "SoundCloud",
      canPlay: c.soundcloud,
      lazyPlayer: w(() => Promise.resolve().then(() => (vt(), Et))),
    },
    {
      key: "vimeo",
      name: "Vimeo",
      canPlay: c.vimeo,
      lazyPlayer: w(() => Promise.resolve().then(() => (wt(), Lt))),
    },
    {
      key: "mux",
      name: "Mux",
      canPlay: c.mux,
      lazyPlayer: w(() => Promise.resolve().then(() => (Tt(), St))),
    },
    {
      key: "facebook",
      name: "Facebook",
      canPlay: c.facebook,
      lazyPlayer: w(() => Promise.resolve().then(() => (At(), Dt))),
    },
    {
      key: "streamable",
      name: "Streamable",
      canPlay: c.streamable,
      lazyPlayer: w(() => Promise.resolve().then(() => (Ot(), kt))),
    },
    {
      key: "wistia",
      name: "Wistia",
      canPlay: c.wistia,
      lazyPlayer: w(() => Promise.resolve().then(() => (xt(), Ct))),
    },
    {
      key: "twitch",
      name: "Twitch",
      canPlay: c.twitch,
      lazyPlayer: w(() => Promise.resolve().then(() => (Ut(), Mt))),
    },
    {
      key: "dailymotion",
      name: "DailyMotion",
      canPlay: c.dailymotion,
      lazyPlayer: w(() => Promise.resolve().then(() => (Vt(), Nt))),
    },
    {
      key: "mixcloud",
      name: "Mixcloud",
      canPlay: c.mixcloud,
      lazyPlayer: w(() => Promise.resolve().then(() => (Ht(), Bt))),
    },
    {
      key: "vidyard",
      name: "Vidyard",
      canPlay: c.vidyard,
      lazyPlayer: w(() => Promise.resolve().then(() => (Kt(), jt))),
    },
    {
      key: "kaltura",
      name: "Kaltura",
      canPlay: c.kaltura,
      lazyPlayer: w(() => Promise.resolve().then(() => ($t(), zt))),
    },
    {
      key: "file",
      name: "FilePlayer",
      canPlay: c.file,
      canEnablePIP: (t) =>
        c.file(t) && (document.pictureInPictureEnabled || X()) && !Z.test(t),
      lazyPlayer: w(() => Promise.resolve().then(() => (qt(), Yt))),
    },
  ];
  var k = y(g()),
    pr = y(Me());
  var Gt =
    Number.isNaN ||
    function (n) {
      return typeof n == "number" && n !== n;
    };
  function As(t, n) {
    return !!(t === n || (Gt(t) && Gt(n)));
  }
  function ks(t, n) {
    if (t.length !== n.length) return !1;
    for (var e = 0; e < t.length; e++) if (!As(t[e], n[e])) return !1;
    return !0;
  }
  function Os(t, n) {
    n === void 0 && (n = ks);
    var e,
      r = [],
      o,
      i = !1;
    function a() {
      for (var l = [], p = 0; p < arguments.length; p++) l[p] = arguments[p];
      return (
        (i && e === this && n(l, r)) ||
          ((o = t.apply(this, l)), (i = !0), (e = this), (r = l)),
        o
      );
    }
    return a;
  }
  var De = Os;
  var tt = y(Ze());
  var ir = y(sr()),
    {
      string: E,
      bool: I,
      number: ne,
      array: Qe,
      oneOfType: he,
      shape: _,
      object: S,
      func: P,
      node: nr,
    } = ir.default,
    ce = {
      url: he([E, Qe, S]),
      playing: I,
      loop: I,
      controls: I,
      volume: ne,
      muted: I,
      playbackRate: ne,
      width: he([E, ne]),
      height: he([E, ne]),
      style: S,
      progressInterval: ne,
      playsinline: I,
      pip: I,
      stopOnUnmount: I,
      light: he([I, E, S]),
      playIcon: nr,
      previewTabIndex: ne,
      previewAriaLabel: E,
      fallback: nr,
      oEmbedUrl: E,
      wrapper: he([E, P, _({ render: P.isRequired })]),
      config: _({
        soundcloud: _({ options: S }),
        youtube: _({ playerVars: S, embedOptions: S, onUnstarted: P }),
        facebook: _({ appId: E, version: E, playerId: E, attributes: S }),
        dailymotion: _({ params: S }),
        vimeo: _({ playerOptions: S, title: E }),
        mux: _({ attributes: S, version: E }),
        file: _({
          attributes: S,
          tracks: Qe,
          forceVideo: I,
          forceAudio: I,
          forceHLS: I,
          forceSafariHLS: I,
          forceDisableHls: I,
          forceDASH: I,
          forceFLV: I,
          hlsOptions: S,
          hlsVersion: E,
          dashVersion: E,
          flvVersion: E,
        }),
        wistia: _({ options: S, playerId: E, customControls: Qe }),
        mixcloud: _({ options: S }),
        twitch: _({ options: S, playerId: E }),
        vidyard: _({ options: S }),
      }),
      onReady: P,
      onStart: P,
      onPlay: P,
      onPause: P,
      onBuffer: P,
      onBufferEnd: P,
      onEnded: P,
      onError: P,
      onDuration: P,
      onSeek: P,
      onPlaybackRateChange: P,
      onPlaybackQualityChange: P,
      onProgress: P,
      onClickPreview: P,
      onEnablePIP: P,
      onDisablePIP: P,
    },
    v = () => {},
    ie = {
      playing: !1,
      loop: !1,
      controls: !1,
      volume: null,
      muted: !1,
      playbackRate: 1,
      width: "640px",
      height: "360px",
      style: {},
      progressInterval: 1e3,
      playsinline: !1,
      pip: !1,
      stopOnUnmount: !0,
      light: !1,
      fallback: null,
      wrapper: "div",
      previewTabIndex: 0,
      previewAriaLabel: "",
      oEmbedUrl: "https://noembed.com/embed?url={url}",
      config: {
        soundcloud: {
          options: {
            visual: !0,
            buying: !1,
            liking: !1,
            download: !1,
            sharing: !1,
            show_comments: !1,
            show_playcount: !1,
          },
        },
        youtube: {
          playerVars: {
            playsinline: 1,
            showinfo: 0,
            rel: 0,
            iv_load_policy: 3,
            modestbranding: 1,
          },
          embedOptions: {},
          onUnstarted: v,
        },
        facebook: {
          appId: "1309697205772819",
          version: "v3.3",
          playerId: null,
          attributes: {},
        },
        dailymotion: { params: { api: 1, "endscreen-enable": !1 } },
        vimeo: {
          playerOptions: { autopause: !1, byline: !1, portrait: !1, title: !1 },
          title: null,
        },
        mux: { attributes: {}, version: "2" },
        file: {
          attributes: {},
          tracks: [],
          forceVideo: !1,
          forceAudio: !1,
          forceHLS: !1,
          forceDASH: !1,
          forceFLV: !1,
          hlsOptions: {},
          hlsVersion: "1.1.4",
          dashVersion: "3.1.3",
          flvVersion: "1.5.0",
          forceDisableHls: !1,
        },
        wistia: { options: {}, playerId: null, customControls: null },
        mixcloud: { options: { hide_cover: 1 } },
        twitch: { options: {}, playerId: null },
        vidyard: { options: {} },
      },
      onReady: v,
      onStart: v,
      onPlay: v,
      onPause: v,
      onBuffer: v,
      onBufferEnd: v,
      onEnded: v,
      onError: v,
      onDuration: v,
      onSeek: v,
      onPlaybackRateChange: v,
      onPlaybackQualityChange: v,
      onProgress: v,
      onClickPreview: v,
      onEnablePIP: v,
      onDisablePIP: v,
    };
  b();
  var ke = y(g()),
    or = y(Ze());
  b();
  var Bs = 5e3,
    M = class extends ke.Component {
      constructor() {
        super(...arguments);
        s(this, "mounted", !1);
        s(this, "isReady", !1);
        s(this, "isPlaying", !1);
        s(this, "isLoading", !0);
        s(this, "loadOnReady", null);
        s(this, "startOnPlay", !0);
        s(this, "seekOnPlay", null);
        s(this, "onDurationCalled", !1);
        s(this, "handlePlayerMount", (e) => {
          if (this.player) {
            this.progress();
            return;
          }
          (this.player = e), this.player.load(this.props.url), this.progress();
        });
        s(this, "getInternalPlayer", (e) =>
          this.player ? this.player[e] : null
        );
        s(this, "progress", () => {
          if (this.props.url && this.player && this.isReady) {
            let e = this.getCurrentTime() || 0,
              r = this.getSecondsLoaded(),
              o = this.getDuration();
            if (o) {
              let i = { playedSeconds: e, played: e / o };
              r !== null && ((i.loadedSeconds = r), (i.loaded = r / o)),
                (i.playedSeconds !== this.prevPlayed ||
                  i.loadedSeconds !== this.prevLoaded) &&
                  this.props.onProgress(i),
                (this.prevPlayed = i.playedSeconds),
                (this.prevLoaded = i.loadedSeconds);
            }
          }
          this.progressTimeout = setTimeout(
            this.progress,
            this.props.progressFrequency || this.props.progressInterval
          );
        });
        s(this, "handleReady", () => {
          if (!this.mounted) return;
          (this.isReady = !0), (this.isLoading = !1);
          let { onReady: e, playing: r, volume: o, muted: i } = this.props;
          e(),
            !i && o !== null && this.player.setVolume(o),
            this.loadOnReady
              ? (this.player.load(this.loadOnReady, !0),
                (this.loadOnReady = null))
              : r && this.player.play(),
            this.handleDurationCheck();
        });
        s(this, "handlePlay", () => {
          (this.isPlaying = !0), (this.isLoading = !1);
          let { onStart: e, onPlay: r, playbackRate: o } = this.props;
          this.startOnPlay &&
            (this.player.setPlaybackRate &&
              o !== 1 &&
              this.player.setPlaybackRate(o),
            e(),
            (this.startOnPlay = !1)),
            r(),
            this.seekOnPlay &&
              (this.seekTo(this.seekOnPlay), (this.seekOnPlay = null)),
            this.handleDurationCheck();
        });
        s(this, "handlePause", (e) => {
          (this.isPlaying = !1), this.isLoading || this.props.onPause(e);
        });
        s(this, "handleEnded", () => {
          let { activePlayer: e, loop: r, onEnded: o } = this.props;
          e.loopOnEnded && r && this.seekTo(0),
            r || ((this.isPlaying = !1), o());
        });
        s(this, "handleError", (...e) => {
          (this.isLoading = !1), this.props.onError(...e);
        });
        s(this, "handleDurationCheck", () => {
          clearTimeout(this.durationCheckTimeout);
          let e = this.getDuration();
          e
            ? this.onDurationCalled ||
              (this.props.onDuration(e), (this.onDurationCalled = !0))
            : (this.durationCheckTimeout = setTimeout(
                this.handleDurationCheck,
                100
              ));
        });
        s(this, "handleLoaded", () => {
          this.isLoading = !1;
        });
      }
      componentDidMount() {
        this.mounted = !0;
      }
      componentWillUnmount() {
        clearTimeout(this.progressTimeout),
          clearTimeout(this.durationCheckTimeout),
          this.isReady &&
            this.props.stopOnUnmount &&
            (this.player.stop(),
            this.player.disablePIP && this.player.disablePIP()),
          (this.mounted = !1);
      }
      componentDidUpdate(e) {
        if (!this.player) return;
        let {
          url: r,
          playing: o,
          volume: i,
          muted: a,
          playbackRate: l,
          pip: p,
          loop: h,
          activePlayer: u,
          disableDeferredLoading: m,
        } = this.props;
        if (!(0, or.default)(e.url, r)) {
          if (this.isLoading && !u.forceLoad && !m && !x(r)) {
            console.warn(
              `ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`
            ),
              (this.loadOnReady = r);
            return;
          }
          (this.isLoading = !0),
            (this.startOnPlay = !0),
            (this.onDurationCalled = !1),
            this.player.load(r, this.isReady);
        }
        !e.playing && o && !this.isPlaying && this.player.play(),
          e.playing && !o && this.isPlaying && this.player.pause(),
          !e.pip && p && this.player.enablePIP && this.player.enablePIP(),
          e.pip && !p && this.player.disablePIP && this.player.disablePIP(),
          e.volume !== i && i !== null && this.player.setVolume(i),
          e.muted !== a &&
            (a
              ? this.player.mute()
              : (this.player.unmute(),
                i !== null && setTimeout(() => this.player.setVolume(i)))),
          e.playbackRate !== l &&
            this.player.setPlaybackRate &&
            this.player.setPlaybackRate(l),
          e.loop !== h && this.player.setLoop && this.player.setLoop(h);
      }
      getDuration() {
        return this.isReady ? this.player.getDuration() : null;
      }
      getCurrentTime() {
        return this.isReady ? this.player.getCurrentTime() : null;
      }
      getSecondsLoaded() {
        return this.isReady ? this.player.getSecondsLoaded() : null;
      }
      seekTo(e, r, o) {
        if (!this.isReady) {
          e !== 0 &&
            ((this.seekOnPlay = e),
            setTimeout(() => {
              this.seekOnPlay = null;
            }, Bs));
          return;
        }
        if (r ? r === "fraction" : e > 0 && e < 1) {
          let a = this.player.getDuration();
          if (!a) {
            console.warn(
              "ReactPlayer: could not seek using fraction \u2013\xA0duration not yet available"
            );
            return;
          }
          this.player.seekTo(a * e, o);
          return;
        }
        this.player.seekTo(e, o);
      }
      render() {
        let e = this.props.activePlayer;
        return e
          ? ke.default.createElement(e, {
              ...this.props,
              onMount: this.handlePlayerMount,
              onReady: this.handleReady,
              onPlay: this.handlePlay,
              onPause: this.handlePause,
              onEnded: this.handleEnded,
              onLoaded: this.handleLoaded,
              onError: this.handleError,
            })
          : null;
      }
    };
  s(M, "displayName", "Player"),
    s(M, "propTypes", ce),
    s(M, "defaultProps", ie);
  var Hs = w(() => Promise.resolve().then(() => (lr(), ar))),
    js =
      typeof window != "undefined" &&
      window.document &&
      typeof document != "undefined",
    Ks =
      typeof global != "undefined" && global.window && global.window.document,
    zs = Object.keys(ce),
    $s = js || Ks ? k.Suspense : () => null,
    de = [],
    ur = (t, n) => {
      var e;
      return (
        (e = class extends k.Component {
          constructor() {
            super(...arguments);
            s(this, "state", { showPreview: !!this.props.light });
            s(this, "references", {
              wrapper: (i) => {
                this.wrapper = i;
              },
              player: (i) => {
                this.player = i;
              },
            });
            s(this, "handleClickPreview", (i) => {
              this.setState({ showPreview: !1 }), this.props.onClickPreview(i);
            });
            s(this, "showPreview", () => {
              this.setState({ showPreview: !0 });
            });
            s(this, "getDuration", () =>
              this.player ? this.player.getDuration() : null
            );
            s(this, "getCurrentTime", () =>
              this.player ? this.player.getCurrentTime() : null
            );
            s(this, "getSecondsLoaded", () =>
              this.player ? this.player.getSecondsLoaded() : null
            );
            s(this, "getInternalPlayer", (i = "player") =>
              this.player ? this.player.getInternalPlayer(i) : null
            );
            s(this, "seekTo", (i, a, l) => {
              if (!this.player) return null;
              this.player.seekTo(i, a, l);
            });
            s(this, "handleReady", () => {
              this.props.onReady(this);
            });
            s(
              this,
              "getActivePlayer",
              De((i) => {
                for (let a of [...de, ...t]) if (a.canPlay(i)) return a;
                return n || null;
              })
            );
            s(
              this,
              "getConfig",
              De((i, a) => {
                let { config: l } = this.props;
                return pr.default.all([
                  ie.config,
                  ie.config[a] || {},
                  l,
                  l[a] || {},
                ]);
              })
            );
            s(
              this,
              "getAttributes",
              De((i) => yt(this.props, zs))
            );
            s(this, "renderActivePlayer", (i) => {
              if (!i) return null;
              let a = this.getActivePlayer(i);
              if (!a) return null;
              let l = this.getConfig(i, a.key);
              return k.default.createElement(M, {
                ...this.props,
                key: a.key,
                ref: this.references.player,
                config: l,
                activePlayer: a.lazyPlayer || a,
                onReady: this.handleReady,
              });
            });
          }
          shouldComponentUpdate(i, a) {
            return (
              !(0, tt.default)(this.props, i) || !(0, tt.default)(this.state, a)
            );
          }
          componentDidUpdate(i) {
            let { light: a } = this.props;
            !i.light && a && this.setState({ showPreview: !0 }),
              i.light && !a && this.setState({ showPreview: !1 });
          }
          renderPreview(i) {
            if (!i) return null;
            let {
              light: a,
              playIcon: l,
              previewTabIndex: p,
              oEmbedUrl: h,
              previewAriaLabel: u,
            } = this.props;
            return k.default.createElement(Hs, {
              url: i,
              light: a,
              playIcon: l,
              previewTabIndex: p,
              previewAriaLabel: u,
              oEmbedUrl: h,
              onClick: this.handleClickPreview,
            });
          }
          render() {
            let {
                url: i,
                style: a,
                width: l,
                height: p,
                fallback: h,
                wrapper: u,
              } = this.props,
              { showPreview: m } = this.state,
              D = this.getAttributes(i),
              O = typeof u == "string" ? this.references.wrapper : void 0;
            return k.default.createElement(
              u,
              { ref: O, style: { ...a, width: l, height: p }, ...D },
              k.default.createElement(
                $s,
                { fallback: h },
                m ? this.renderPreview(i) : this.renderActivePlayer(i)
              )
            );
          }
        }),
        s(e, "displayName", "ReactPlayer"),
        s(e, "propTypes", ce),
        s(e, "defaultProps", ie),
        s(e, "addCustomPlayer", (i) => {
          de.push(i);
        }),
        s(e, "removeCustomPlayers", () => {
          de.length = 0;
        }),
        s(e, "canPlay", (i) => {
          for (let a of [...de, ...t]) if (a.canPlay(i)) return !0;
          return !1;
        }),
        s(e, "canEnablePIP", (i) => {
          for (let a of [...de, ...t])
            if (a.canEnablePIP && a.canEnablePIP(i)) return !0;
          return !1;
        }),
        e
      );
    };
  var Fs = _e[_e.length - 1],
    Ys = ur(_e, Fs);
  return br(qs);
})();
ReactPlayer = ReactPlayer.default;
//# sourceMappingURL=ReactPlayer.js.map
