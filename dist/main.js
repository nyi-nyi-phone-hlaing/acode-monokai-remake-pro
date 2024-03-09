(()=>{"use strict";var e={17:(e,a,o)=>{const r=JSON.parse('{"id":"acode.plugin.monokaiRemakePro"}');e=o.hmd(e);const c=acode.require("settings"),{editor:t}=editorManager,n="monokai-remake-pro";ace.define("ace/theme/".concat(n,".css"),["require","exports","module"],(function(e,a,o){o.exports=".ace-monokai-remake-pro{color:#eee;background:#17181a}.ace-monokai-remake-pro .ace_gutter{color:#8f908a;background-color:#222}.ace-monokai-remake-pro .ace_gutter-active-line{color:#f92672}.ace-monokai-remake-pro .ace_print-margin{width:1px;background:#464748}.ace-monokai-remake-pro .ace_cursor{color:#66d9ef}.ace-monokai-remake-pro .ace_marker-layer .ace_selection{background:#333;border-radius:3px;color:#eee}.ace-monokai-remake-pro .ace_multiselect .ace_selection.ace_start{box-shadow:0 0 0px #fff}.ace-monokai-remake-pro .ace_marker-layer .ace_step{background:#c6dbae}.ace-monokai-remake-pro .ace_marker-layer .ace_bracket{margin:-1px 0 0 -1px;border:1px solid #00b2ff}.ace-monokai-remake-pro .ace_marker-layer .ace_active-line{border:1.5px solid #464748;box-sizing:border-box}.ace-monokai-remake-pro .ace_marker-layer .ace_selected-word{background-color:rgba(208,208,208,.1);color:#eee;border-radius:3px}.ace-monokai-remake-pro .ace_invisible{color:#464748}.ace-monokai-remake-pro .ace_keyword{color:#f92672}.ace-monokai-remake-pro .hljs-keyword{color:#f92672}.ace-monokai-remake-pro .ace_keyword.ace_operator{color:#f92672}.ace-monokai-remake-pro .ace_constant.ace_language{color:#66d9ef}.ace-monokai-remake-pro .ace_constant.ace_numeric{color:#ae81ff}.ace-monokai-remake-pro .ace_constant.ace_character{color:#fd971f}.ace-monokai-remake-pro .ace_constant.ace_character.ace_escape{color:#ae81ff}.ace-monokai-remake-pro .ace_constant.ace_language.ace_escape{color:#66d9ef !important}.ace-monokai-remake-pro .ace_string.ace_regexp{color:#ae81ff !important}.ace-monokai-remake-pro .ace_constant.ace_other{color:#ae81ff}.ace-monokai-remake-pro .hljs-title{color:#eee}.ace-monokai-remake-pro .ace_identifier{color:#eee}.ace-monokai-remake-pro .ace_support.ace_function{color:#66d9ef}.ace-monokai-remake-pro .ace_support.ace_function.ace_dom{color:#66d9ef}.ace-monokai-remake-pro .ace_support.ace_constant{color:#66d9ef}.ace-monokai-remake-pro .ace_class{color:#a6e22e}.ace-monokai-remake-pro .ace_variable.ace_language{color:#fd971f}.ace-monokai-remake-pro .ace_support.ace_type{color:#8ceafd}.ace-monokai-remake-pro .ace_meta.ace_tag{color:#f92672}.ace-monokai-remake-pro .ace_storage,.ace-monokai-remake-pro .ace_storage.ace_type{color:#66d9ef}.ace-monokai-remake-pro .ace_invalid{color:#e2e2e2;background-color:#f92672}.ace-monokai-remake-pro .ace_invalid.ace_deprecated{color:#e2e2e2;background-color:#ae81ff}.ace-monokai-remake-pro .ace_string{color:#e7db75}.ace-monokai-remake-pro .ace_comment{color:#76715e}.ace-monokai-remake-pro .ace_variable{color:#a7e22e}.ace-monokai-remake-pro .ace_constant{color:#f92672}.ace-monokai-remake-pro .hljs-params,.ace-monokai-remake-pro .ace_variable.ace_parameter{color:#fe9720;text-decoration:underline !important;text-decoration-color:#fe9720 !important}.ace-monokai-remake-pro .ace_entity.ace_other.ace_attribute-name{color:#a7e22e}.ace-monokai-remake-pro .ace_xml-pe.ace_xml,.ace-monokai-remake-pro .ace_punctuation.ace_tag{color:#eee}.ace-monokai-remake-pro .ace_tag-name.ace_tag,.ace-monokai-remake-pro .ace_entity.ace_name.ace_tag{color:#f92672}.ace-monokai-remake-pro .ace_paren{color:hotpink}.ace-monokai-remake-pro .ace_indent-guide{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ09NrYAgMjP4PAAtGAwchHMyAAAAAAElFTkSuQmCC) right repeat-y}.ace-monokai-remake-pro .ace_indent-guide-active{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y}.ace-monokai-remake-pro .ace_support.ace_constant.ace_js{color:#fe9720 !important;font-style:italic !important}.ace-monokai-remake-pro .ace_entity.ace_name.ace_function{color:#a6e22e;text-decoration:underline !important;text-decoration-color:#a6e22e !important}.ace-monokai-remake-pro .ace_support.ace_constant.ace_css-in-js{color:#fe9720}.ace-monokai-remake-pro .ace_level1{color:aqua !important}.ace-monokai-remake-pro .ace_level2{color:gold !important}.ace-monokai-remake-pro .ace_level3{color:crimson !important}.ace-monokai-remake-pro .ace_level4{color:#ae81ff !important}.ace-monokai-remake-pro .ace_level5{color:#1787f3 !important}.ace-monokai-remake-pro .ace_level6{color:lime !important}"})),ace.define("ace/theme/".concat(n),["require","exports","module","ace/theme/".concat(n,".css"),"ace/lib/dom"],(function(e,a,o){a.isDark=!0,a.cssClass="ace-".concat(n),a.cssText=e("./".concat(n,".css")),e("../lib/dom").importCssString(a.cssText,a.cssClass,!1)})),window.require(["ace/theme/"+n],(function(a){"object"==typeof exports&&e&&(e.exports=a)}));class i{async init(){ace.require("ace/ext/themelist").themes.push({caption:n.split("-").map((e=>e[0].toUpperCase()+e.slice(1))).join(" "),theme:"ace/theme/"+n,isDark:!0}),c.get("editorTheme")===n&&t.setTheme("ace/theme/"+n),c.on("update",this.onThemeChange)}async destroy(){c.off("update",this.onThemeChange)}onThemeChange(e){e==="ace/theme/"+n&&(t.setTheme("ace/theme/"+n),c.update({editorTheme:n}))}}if(window.acode){const e=new i;acode.setPluginInit(r.id,((a,o,r)=>{let{cacheFileUrl:c,cacheFile:t}=r;a.endsWith("/")||(a+="/"),e.baseUrl=a,e.init(o,t,c)})),acode.setPluginUnmount(r.id,(()=>{e.destroy()}))}}},a={};function o(r){var c=a[r];if(void 0!==c)return c.exports;var t=a[r]={id:r,loaded:!1,exports:{}};return e[r](t,t.exports,o),t.loaded=!0,t.exports}o.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),o(17)})();