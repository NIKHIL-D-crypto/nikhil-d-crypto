// shortcut: theme toggle only. Page works fully without JS; the device theme is followed by CSS.
var r = document.documentElement, K = "theme";
try { var s = localStorage.getItem(K); if (s) r.dataset.theme = s; } catch (e) {}
addEventListener("DOMContentLoaded", function () {
  document.getElementById("theme").onclick = function () {
    var dark = r.dataset.theme ? r.dataset.theme == "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    r.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem(K, r.dataset.theme); } catch (e) {}
  };
});
