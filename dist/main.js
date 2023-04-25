(() => {
  var r = {
      138: (r, o, t) => {
        var n;
        void 0 ===
          (n = function (r) {
            return function (r) {
              ({} instanceof Object && console.log('dsadas1111'));
            };
          }.call(o, t, o, r)) || (r.exports = n);
      },
    },
    o = {};
  !(function t(n) {
    var e = o[n];
    if (void 0 !== e) return e.exports;
    var s = (o[n] = { exports: {} });
    return r[n](s, s.exports, t), s.exports;
  })(138);
})();
