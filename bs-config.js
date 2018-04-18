/*
 --------------------------------------------------------------------------
  Browser-sync config file
 --------------------------------------------------------------------------
*/
module.exports = {

  files: [
    {
      match: ["src/**/*.css", "src/**/*.html", "src/**/*.js"],
      fn: function(add, file) {
        this.reload();
      }
    }
  ],

  exclude: false,

  server: {
   baseDir: "src",
   directory: true
  },

  startPath: "/index.html",

  notify: false,

  watchEvents: ["add", "change", "addDir"]

};
