define(function(require) {

    // pull in ckeditor
    require("ckeditor");

    // pull in the ckeditor plugins
    require("vendor/ckeditor/plugins/lineutils/plugin");
    require("vendor/ckeditor/plugins/widget/plugin");
    require("vendor/ckeditor/plugins/mathjax/plugin");

    var OneTeam = require("oneteam");

    if (CKEDITOR.config)
    {
        OneTeam.appendToListOnce(CKEDITOR.config, "extraPlugins", ["lineutils", "widget", "mathjax"]);

        CKEDITOR.config.mathJaxLib = '//cdn.mathjax.org/mathjax/2.2-latest/MathJax.js?config=TeX-AMS_HTML';
    }
});