window._wpemojiSettings = {
    baseUrl: "https://s.w.org/images/core/emoji/15.0.3/72x72/",
    ext: ".png",
    svgUrl: "https://s.w.org/images/core/emoji/15.0.3/svg/",
    svgExt: ".svg",
    source: { concatemoji: "https://responseoneghana.com/wp-includes/js/wp-emoji-release.min.js?ver=6.6.2" }
  };
  
  /*! This file is auto-generated */
  (function(i, n, o, s) {
    var supports = function(e) {
      try {
        var t = { supportTests: e, timestamp: Date.now() };
        sessionStorage.setItem(o, JSON.stringify(t));
      } catch {}
    };
  
    var testEmoji = function(e, t, n) {
      var c = function() { return e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data); };
      var u = function() { return e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(n, 0, 0), new Uint32Array(e.getImageData(0, 0, e.canvas.width, e.canvas.height).data); };
      var r = c(), a = u();
      return r.every((e, t) => e === a[t]);
    };
  
    var detectEmoji = function(e, t, n) {
      switch (t) {
        case "flag":
          return !(n(e, "🏳️‍⚧️", "🏳️‍⚧️") && !n(e, "🇺🇸", "🇺🇸"));
        case "emoji":
          return !n(e, "🐦‍⬛", "🐦‍⬛");
        default:
          return false;
      }
    };
  
    var setup = function(e) {
      var c = document.createElement("canvas"), a = c.getContext("2d", { willReadFrequently: true });
      a.textBaseline = "top";
      a.font = "600 32px Arial";
      return e.reduce((o, k) => (o[k] = testEmoji(a, k, detectEmoji), o), {});
    };
  
    var loadScripts = function(src) {
      var script = document.createElement("script");
      script.src = src;
      script.defer = true;
      document.head.appendChild(script);
    };
  
    if (Promise) {
      o = "wpEmojiSettingsSupports";
      s = ["flag", "emoji"];
      n.supports = { everything: true, everythingExceptFlag: true };
  
      new Promise(res => window.addEventListener("DOMContentLoaded", res, { once: true }))
        .then(() => {
          var stored = sessionStorage.getItem(o);
          if (stored) try { return JSON.parse(stored).supportTests; } catch {}
          if (typeof Worker !== "undefined" && typeof OffscreenCanvas !== "undefined" && typeof URL !== "undefined" && URL.createObjectURL && typeof Blob !== "undefined") {
            var blob = new Blob([`postMessage(${setup.toString()}(${JSON.stringify(s)}))`], { type: "text/javascript" });
            var worker = new Worker(URL.createObjectURL(blob), { name: "wpTestEmojiSupports" });
            worker.onmessage = e => (supports(e.data), worker.terminate());
          } else supports(setup(s));
        })
        .then(e => {
          for (var t in e) n.supports[t] = e[t];
          n.supports.everything = Object.values(n.supports).every(Boolean);
          n.supports.everythingExceptFlag = n.supports.everythingExceptFlag && !n.supports.flag;
          n.DOMReady = false;
          n.readyCallback = () => (n.DOMReady = true);
        })
        .then(() => {
          if (!n.supports.everything) {
            var src = n.source || {};
            if (src.concatemoji) loadScripts(src.concatemoji);
            else if (src.wpemoji && src.twemoji) { loadScripts(src.wpemoji); loadScripts(src.twemoji); }
          }
        });
    }
  })(window, document, window._wpemojiSettings);

  // Create a script element to load Google Analytics
const scriptElement = document.createElement('script');
scriptElement.src = "https://www.googletagmanager.com/gtag/js?id=GT-T5P842M6";
scriptElement.id = "google_gtagjs-js";
scriptElement.async = true;
document.head.appendChild(scriptElement);

// Function to initialize Google Analytics after script load
scriptElement.onload = function() {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }

    gtag("set", "linker", { "domains": ["responseoneghana.com"] });
    gtag("js", new Date());
    gtag("set", "developer_id.dZTNiMT", true);
    gtag("config", "GT-T5P842M6");
};

// Appending the script to the head of the document
document.head.appendChild(scriptElement);

  