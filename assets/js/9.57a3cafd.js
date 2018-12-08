(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{151:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"git-commit-id-plugin"}},[t._v("Git-Commit-Id-Plugin")]),t._v(" "),t._m(0),t._v(" "),a("h2",{attrs:{id:"项目"}},[t._v("项目")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://github.com/git-commit-id/maven-git-commit-id-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("git-commit-id-plugin"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"配置"}},[t._v("配置")]),t._v(" "),t._m(1),t._v(" "),t._m(2),a("h2",{attrs:{id:"使用"}},[t._v("使用")]),t._v(" "),t._m(3)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("在 Maven 和 Git 项目中使用 git-commit-id-plugin\n插件打包归档让其携带有 Git commit id 的包.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("添加插件到 "),s("code",[this._v("pom.xml")]),this._v(" 文件中.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- git-commit-id --\x3e")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pl.project13.maven"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("git-commit-id-plugin"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.2.5"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("executions")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("execution")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("id")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("git-info"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("id")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("goals")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("goal")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("revision"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("goal")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("goals")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("execution")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("executions")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("injectAllReactorProjects")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("injectAllReactorProjects")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dateFormat")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("yyyy-MM-dd HH:mm:ss"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dateFormat")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 日期格式 --\x3e")]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("verbose")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("verbose")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 生成的 git.properties 包含更详情的内容 --\x3e")]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("generateGitPropertiesFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("true"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("generateGitPropertiesFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 是否生成 git.properties 文件 --\x3e")]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("gitDescribe")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("skip")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("false"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("skip")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("always")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("false"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("always")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("abbrev")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("7"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("abbrev")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 只需要 7 位 SHA1 Commit Id --\x3e")]),t._v("\n                "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("forceLongFormat")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("false"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("forceLongFormat")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- 是否强制长格式 --\x3e")]),t._v("\n            "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("gitDescribe")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugins")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("code",[this._v("${git.commit.id.abbrev}")]),this._v(" // SHA1 Hash")])])}],!1,null,null,null);e.options.__file="git-commit-id-plugin.md";s.default=e.exports}}]);