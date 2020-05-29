(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{223:function(s,a,t){"use strict";t.r(a);var e=t(13),r=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("article",[t("blockquote",[t("p",[s._v("This Guide assumes you are familiar with "),t("a",{attrs:{href:"https://vuejs.org/v2/guide/index.html"}},[s._v("Vue.js")]),s._v("\ncomponents and plugin system."),t("br"),s._v("\nVue.js version "),t("code",{pre:!0},[s._v("^2.6")]),s._v(" is required as a peer dependency."),t("br"),s._v("\nMaterial Components Web are not bundled and need to be installed."),t("br"),s._v("\nMaterial Icons and Fonts are not bundled and need to be fetched.")])]),s._v(" "),t("h2",[s._v("Quick Start")]),s._v(" "),t("h4",[s._v("Examples")]),s._v(" "),t("p",[s._v("There are now examples of using "),t("code",{pre:!0},[s._v("vue-material-adapter")]),s._v(" both as a "),t("code",{pre:!0},[s._v("basic-global")]),s._v(" and a "),t("code",{pre:!0},[s._v("basic-webpack")]),s._v(" project "),t("a",{attrs:{href:"https://github.com/pgbross/vue-material-adapter/tree/master/examples"}},[s._v("examples")]),s._v(".")]),s._v(" "),t("h4",[s._v("Playground")]),s._v(" "),t("p",[s._v("See demo in the source distribution for examples of how vue-material-adapter can be used.")]),s._v(" "),t("h2",[s._v("Getting Serious")]),s._v(" "),t("h3",[s._v("UMD Distribution")]),s._v(" "),t("p",[s._v("Install via npm:")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("npm install vue-material-adapter\n")])]),s._v(" "),t("p",[s._v("The UMD distribution is also available through CDN at\n"),t("a",{attrs:{href:"https://unpkg.com/vue-material-adapter/dist/"}},[s._v("unpkg.com/vue-material-adapter/dist")]),s._v("\nor "),t("a",{attrs:{href:"https://cdn.jsdelivr.net/npm/vue-material-adapter@latest/dist/"}},[s._v("cdn.jsdelivr.net/npm/vue-material-adapter/dist")])]),s._v(" "),t("p",[s._v("The distribution comes in two flavors:")]),s._v(" "),t("h4",[s._v("standalone plugin")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("distribution")]),s._v(" "),t("th",[s._v("env")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("dist/vue-material-adapter.min.js")]),s._v(" "),t("td",[s._v("production")]),s._v(" "),t("td",[s._v("minified plugin (ES5)")])]),s._v(" "),t("tr",[t("td",[s._v("dist/vue-material-adapter.min.css")]),s._v(" "),t("td",[s._v("production")]),s._v(" "),t("td",[s._v("minified stylesheet (CSS)")])])])]),s._v(" "),t("h4",[t("em",[s._v("a la carte")]),s._v(" plugins")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("distribution")]),s._v(" "),t("th",[s._v("env")]),s._v(" "),t("th",[s._v("description")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("dist/[plugin]/[plugin].min.js")]),s._v(" "),t("td",[s._v("production")]),s._v(" "),t("td",[s._v("minified plugin (ES5)")])]),s._v(" "),t("tr",[t("td",[s._v("dist/[plugin]/[plugin].min.css")]),s._v(" "),t("td",[s._v("production")]),s._v(" "),t("td",[s._v("minified stylesheet (CCS)")])])])]),s._v(" "),t("h4",[s._v("Using the CDN")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- import reset and material stylesheets --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"')]),s._v("\n  />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://fonts.googleapis.com/icon?family=Material+Icons"')]),s._v("\n  />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://fonts.googleapis.com/css?family=Roboto:300,400,500"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text/css"')]),s._v("\n  />")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- import vue and then vue-material-adapter --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"undefined"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue-material-adapter"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"undefined"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("blockquote",[t("p",[s._v("You may want to use the split distribution and freeze the version used:")])]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- import reset and material stylesheets --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"')]),s._v("\n  />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://fonts.googleapis.com/icon?family=Material+Icons"')]),s._v("\n  />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://fonts.googleapis.com/css?family=Roboto:300,400,500"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text/css"')]),s._v("\n  />")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- import vue-material-adapter stylesheet --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue-material-adapter@^0.6.0/dist/vue-material-adapter.min.css"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"text/css"')]),s._v("\n  />")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- import vue and then vue-material-adapter --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue@^2.5.9/dist/vue.min.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"undefined"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("src")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://unpkg.com/vue-material-adapter@^0.6.0/dist/vue-material-adapter.min.js"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"undefined"}}),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h2",[s._v("Webpack/Rollup")]),s._v(" "),t("h3",[s._v("ESM Distribution")]),s._v(" "),t("blockquote",[t("p",[s._v("The following guide assumes you have a valid Vue.js/Webpack config.\nrefer to "),t("a",{attrs:{href:"https://github.com/vuejs-templates/webpack"}},[s._v("vuejs-templates/webpack")]),s._v(" for more.")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("module")]),s._v(" "),t("th",[s._v("type")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("vue-material-adapter")]),s._v(" "),t("td",[s._v("ESM")])]),s._v(" "),t("tr",[t("td",[s._v("vue-material-adapter/styles")]),s._v(" "),t("td",[s._v("SASS")])])])]),s._v(" "),t("h4",[s._v("install vue, vue-material-adapter and eventually vue-router")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("npm install vue\nnpm install vue-router "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("# optional")]),s._v("\nnpm install vue-material-adapter\n")])]),s._v(" "),t("h4",[s._v("Add Reset and Material Dependencies to HTML template")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- index.html template --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- import reset material icons, fonts and vue-material-adapter stylesheets --\x3e")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css"')]),s._v("\n  />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://fonts.googleapis.com/icon?family=Material+Icons"')]),s._v("\n  />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://fonts.googleapis.com/css?family=Roboto:300,400,500"')]),s._v("\n  />")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("link")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("rel")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"stylesheet"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("href")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500"')]),s._v("\n  />")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("head")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("id")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"app"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- built files will be auto injected --\x3e")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("body")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("h4",[s._v("import "),t("em",[s._v("standalone")]),s._v(" plugin")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" VueMaterialAdapter "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-material-adapter'")]),s._v(";\nVue.use(VueMaterialAdapter);\n")])]),s._v(" "),t("h4",[s._v("import "),t("em",[s._v("a la carte")]),s._v(" plugins")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" mcwButton "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@mcwv/button/index.js'")]),s._v(";\nVue.use(mcwButton);\n")])]),s._v(" "),t("h3",[s._v("Create your own SASS Theme")]),s._v(" "),t("blockquote",[t("p",[s._v("Material Components styles come as highly themable SASS framework. In order to be able to theme properly\nand avoid any duplicate/ordering style issues in the bundle, we recommend managing styles globally.\nrefer to the "),t("a",{attrs:{href:"https://material.io/components/web/docs/theming/"}},[s._v("MDC Theming Guide")]),s._v("\nfor more.")])]),s._v(" "),t("p",[s._v("Install Material Components SASS as a dependency.")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("npm install material-components-web --save\n")])]),s._v(" "),t("p",[s._v("Configure Webpack with sass-loader and make sure sass modules can be resolved.")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// sass loader config")]),s._v("\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loader")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sass-loader'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("sourceMap")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(",\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("includePaths")]),s._v(": [path.resolve(__dirname,"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'node_modules'")]),s._v(")],\n    },\n  },\n")])]),s._v(" "),t("h3",[s._v("Building from Sources")]),s._v(" "),t("blockquote",[t("p",[s._v("You may want to optimize your build and leverage the source distribution.")])]),s._v(" "),t("h4",[s._v("Make sure @material imports are transpiled")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// babel loader config")]),s._v("\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("test")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-regexp"}},[s._v("/\\.js$/")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loader")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'babel-loader'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("include")]),s._v(": [\n      path.resolve(__dirname, "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'node_modules/@material'")]),s._v(")\n    ]\n  }\n")])]),s._v(" "),t("h4",[s._v("Make sure sass modules can be imported")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// sass loader config")]),s._v("\n  {\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("loader")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'sass-loader'")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("options")]),s._v(": {\n      "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("includePaths")]),s._v(": [path.resolve(__dirname,"),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'node_modules'")]),s._v(")],\n    },\n  },\n")])]),s._v(" "),t("h4",[s._v("Full build")]),s._v(" "),t("p",[s._v("See "),t("code",{pre:!0},[s._v("basic-webpack")]),s._v(" project "),t("a",{attrs:{href:"https://github.com/pgbross/vue-material-adapter/tree/master/examples"}},[s._v("examples")]),s._v(".")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-scss"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* theme.scss */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$mdc-theme-primary")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#212121")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$mdc-theme-accent")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#41b883")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$mdc-theme-background")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#fff")]),s._v(";\n\n@import 'vue-material-adapter/index"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".scss")]),s._v("';\n")])]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`./theme.scss`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" VueMaterialAdapter "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue-material-adapter'")]),s._v("\nVue.use(VueMaterialAdapter)\n")])]),s._v(" "),t("h4",[s._v("or cherry pick "),t("em",[s._v("a la carte")]),s._v(" plugins")]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-scss"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("/* theme.scss */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$mdc-theme-primary")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#212121")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$mdc-theme-accent")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#41b883")]),s._v(";\n"),t("span",{pre:!0,attrs:{class:"hljs-variable"}},[s._v("$mdc-theme-background")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("#fff")]),s._v(";\n\n@import '@mcwv/"),t("span",{pre:!0,attrs:{class:"hljs-selector-tag"}},[s._v("button")]),s._v("/index"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".scss")]),s._v("';\n@import '@mcwv/fab/index"),t("span",{pre:!0,attrs:{class:"hljs-selector-class"}},[s._v(".scss")]),s._v("';\n")])]),s._v(" "),t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-javascript"}},[t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// main.js")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("`./theme.scss`")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" Vue "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'vue'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" mcwButton "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@mcwv/button/index.js'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" mcwFAB "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'@mcwv/fab/index.js'")]),s._v("\nVue.use(mcwButton)\nVue.use(mcwFAB)\n")])])])}],!1,null,null,null);a.default=r.exports}}]);
//# sourceMappingURL=53.1c1f15f7f5ed9b18a0d1.js.map