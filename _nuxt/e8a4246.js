(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,4],{342:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE+SURBVHgB5ZTNEYIwEIUDwxmhg5RgCdqBHYgdYAXagSWoHdiBlmAH0gECV358q+BAJpDA5KRvJmaJZL/kZQNjf6U4jnmSJHGWZQfdOTYbIcdxODqvLMswTdOjzpxRgLaqqgp0IFMBEdpTB9IBwN+QfJbFaHtYE9CzZVkR4qUu5C0c3AJJKrRLT/xtSHilOVjAnA69HpNCHHEAq5vJYvax5UxBURQX6n3fvwOytG37Wu+Eua67GQT0iWzB5L04roJMriIR0ncmRgAyCBWFUYAowDyjAKooOgf2ueln7Cg0BpAkD5r/tKsIvvLGVyQ5IUmkSt4B5Hn+xItDMUfbUYDnObqVKjnJErZKL9zr2u7ESMRryBp34obLtlUlH63WZ+PRfCIAPw3N0T4DQZx+dFY+uYqM2dIW7PDIHpUtv6UXteMr9lOjQBUAAAAASUVORK5CYII="},343:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},344:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(115).default)("188d64b4",content,!0,{sourceMap:!1})},345:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG2SURBVHgB7ZjbTcMwFIadlOdcNmADGIFu0BG6ASOUbgAbsAEwQRkBNmCDkAyQcP5KqRzLKU58fHnwJ1l2Ti/6PyXNqSNEIpFwRtM0Vdd1p7ZtB5rfcCyYyYVDNpvNbhiGB6xp3uV5fuKWcCpAoW+V0j23hFOBGVglQggANolQAoBFIqQAsJbwLfBC40upWUn4Fvjt+34rGCW0AnMNyKQuD3rpoH53XdesEloBTQPam9ZN4JTQCmgaULWwroVC/4xrLglvv4Esyz5pepdrHBKuBI5lWWbyKIpii8DqG20lQveBMzYSUQiAtRLRCIA1ElEJgKUS0QmAJRJRCoB/JPbjQbQCI9QkM7VGYpfbcbQCuEzQ/GjcyXUS+hZSQ4xS4Fp4/OeSG2J0AkvCg6gEloYH0QisCQ+iEFgbHrgSOKi7s7lHizbhgbczIO/gRmzDgzmByQelnZRR/QqXM8ARHmgFKNgrTR9Yyzspk7oJXOHPOYRD6Np/EtMnE0eSfeYKD3zfhSrO8OBG+OWRwk8KNuFB0D5gGx4EE+AID4IIcIUH3gU4wwPXApOQ3OGBUwG18XGHTyQSQvwBYHsAUnLa8MgAAAAASUVORK5CYII="},346:function(t,e,n){n(347)},347:function(t,e,n){"use strict";var r=n(15),l=n(3),o=n(23),c=n(10),d=n(43),m=n(16),h=n(148),f=n(26),x=n(63),v=n(149),w=n(241),A=n(14),y=n(45),C=A("replace"),_=RegExp.prototype,k=l.TypeError,O=c(v),E=c("".indexOf),R=c("".replace),T=c("".slice),B=Math.max,S=function(t,e,n){return n>t.length?-1:""===e?n:E(t,e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,l,c,v,A,Q,U,j,I=d(this),D=0,L=0,N="";if(null!=t){if((n=h(t))&&(r=f(d("flags"in _?t.flags:O(t))),!~E(r,"g")))throw k("`.replaceAll` does not allow non-global regexes");if(l=x(t,C))return o(l,t,I,e);if(y&&n)return R(f(I),t,e)}for(c=f(I),v=f(t),(A=m(e))||(e=f(e)),Q=v.length,U=B(1,Q),D=S(c,v,0);-1!==D;)j=A?f(e(v,D,c)):w(v,c,D,[],void 0,e),N+=T(c,L,D)+j,L=D+Q,D=S(c,v,D+U);return L<c.length&&(N+=T(c,L)),N}})},348:function(t,e,n){"use strict";var r=n(15),l=n(349).trim;r({target:"String",proto:!0,forced:n(350)("trim")},{trim:function(){return l(this)}})},349:function(t,e,n){var r=n(10),l=n(43),o=n(26),c=n(343),d=r("".replace),m="["+c+"]",h=RegExp("^"+m+m+"*"),f=RegExp(m+m+"*$"),x=function(t){return function(e){var n=o(l(e));return 1&t&&(n=d(n,h,"")),2&t&&(n=d(n,f,"")),n}};t.exports={start:x(1),end:x(2),trim:x(3)}},350:function(t,e,n){var r=n(108).PROPER,l=n(13),o=n(343);t.exports=function(t){return l((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||r&&o[t].name!==t}))}},351:function(t,e,n){"use strict";n(344)},352:function(t,e,n){var r=n(114)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n*[data-v-921fa488]{\n  box-sizing:border-box\n}\n.web-terminal[data-v-921fa488]{\n  font-family:monospace;\n  height:calc(16rem + 10vw);\n  -ms-overflow-style:none;\n  scrollbar-width:none\n}\n.web-terminal[data-v-921fa488]::-webkit-scrollbar{\n  display:none\n}\n.font-mono[data-v-921fa488]{\n  font-family:monospace\n}\n.web-terminal-form[data-v-921fa488]:before{\n  content:"> ";\n  position:absolute;\n  left:1rem\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r},354:function(t,e,n){"use strict";n.r(e);n(78),n(64),n(77),n(33),n(111),n(65),n(112);var r,l=n(18),o=n(59),c=(n(76),n(53),n(242),n(113),n(346),n(88),n(348),n(109),n(110),n(106)),d="Connected!\nThis is your basic Tableland Terminal, you can type SQL commands to interact with a Tableland Validator.\nRun `help` to learn more and see some example commands.",m="Creating Your Table, the steps are:\n  Mint the table on Ethereum\n  Register it with the Validator\n  It may take a little while\n",h="Read the full docs here: https://docs.tableland.xyz",f="Available commands:\n    connect   Connect to tableland with Metamask. You must\n              do this before any other commands can be run.\n    list      List your tables\n    clear     Clear this terminal\n    whoami    See your Eth Address\n    docs      Show url to the documentation\n    help      Show this message again\n\nExample Read Queries:\n    SELECT * FROM LootAttributes_3;\n    SELECT * FROM todo_todos_example_34 ORDER BY id ASC;",x="Running SQL on the Validator",v={address:"Get whitelisted on the Tableland Discord.\nhttps://discord.gg/b33QwuNm",connect:"Before running commands you need to connect with a Tableland Validator. We currently only support connecting via Metamask. Make sure it's installed, then type `connect` and hit return.",statement:"WARN: that is not a SQL statement that Tableland can use"};function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var A,y,C,_,k,O=0,E=[],R={data:function(){return{loading:!1,lines:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({ethAddress:function(t){return t.ethAddress}})),mounted:function(){this.printf(f)},methods:{printf:function(t){for(var e=t.replaceAll("  ","  ").split("\n").reverse(),i=0;i<e.length;i++){var line={value:e[i],type:"text"};this.lines.unshift(line)}this.$refs["web-terminal"].scrollTop=0},printTable:function(data){this.lines.unshift({type:"table",columns:data.columns,rows:data.rows})},replaceLine:function(t){this.$set(this.lines,0,{value:t,type:"text"})},cls:function(){for(var i=0;i<=this.$refs["web-terminal"].clientHeight/15;i++)this.printf("")},keyCheck:function(t){switch(window.event.keyCode){case 38:O<E.length-1&&(O++,this.$refs["web-terminal-input"].value=E[O]);break;case 40:O>0&&(O--,this.$refs["web-terminal-input"].value=E[O])}},showSpinner:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!0!==this.loading){this.cls(),this.loading=!0;var n=["\\","|","/","—"],r=0,l=setInterval((function(){!1!==t.loading?t.replaceLine(e+" "+n[r++%4]):clearInterval(l)}),313.37)}},onSubmit:function(){r=this.$refs["web-terminal-input"].value,E.shift(),E.unshift(r),E.unshift(""),O=0,this.loading||("connect"===r?this.connect():"docs"===r||"man"===r||"man tableland"===r?(this.cls(),this.printf(h)):"help"===r?(this.cls(),this.printf(f)):"clear"===r?this.cls():this.ethAddress?"whoami"===r?(this.cls(),this.printf(this.ethAddress)):"mytables"===r||"list"===r||"ls"===r?(this.cls(),this.list()):(this.cls(),this.parseCommand(r)):(this.cls(),this.printf(v.connect)),this.$refs["web-terminal-input"].value="")},init:function(){this.$refs["web-terminal-input"].focus()},parseCommand:(k=Object(l.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=e.trim().toLowerCase()){t.next=4;break}return t.abrupt("return",this.printf(v.statement));case 4:if(0!==n.indexOf("create")){t.next=8;break}return t.next=7,this.runCreate(e);case 7:return t.abrupt("return");case 8:return t.next=10,this.runCommand(e);case 10:t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),this.loading=!1,this.processError(t.t0);case 16:case"end":return t.stop()}}),t,this,[[0,12]])}))),function(t){return k.apply(this,arguments)}),runCommand:(_=Object(l.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.showSpinner(x),t.next=4,this.$store.dispatch("runSql",e);case 4:if(n=t.sent,this.loading=!1,this.cls(),!(n.data&&n.data.columns&&n.data.rows)){t.next=10;break}return this.printTable(n.data),t.abrupt("return");case 10:this.printf("Result:\n"+JSON.stringify(n,null,4)),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(0),this.loading=!1,this.processError(t.t0);case 17:case"end":return t.stop()}}),t,this,[[0,13]])}))),function(t){return _.apply(this,arguments)}),runCreate:(C=Object(l.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.showSpinner(m),t.next=4,this.$store.dispatch("createTable",e);case 4:n=t.sent,this.loading=!1,this.cls(),this.printf("Table Created:\n"+JSON.stringify(n,null,4)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),this.loading=!1,this.processError(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,10]])}))),function(t){return C.apply(this,arguments)}),list:(y=Object(l.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.showSpinner(),t.next=4,this.$store.dispatch("myTables");case 4:e=t.sent,this.loading=!1,this.cls(),this.printf("Result:\n"+JSON.stringify(e,null,4)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),this.loading=!1,this.processError(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,10]])}))),function(){return y.apply(this,arguments)}),connect:(A=Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.showSpinner("connecting"),t.next=4,this.$store.dispatch("connect");case 4:this.loading=!1,this.cls(),this.printf(d),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),this.loading=!1,this.processError(t.t0);case 13:case"end":return t.stop()}}),t,this,[[0,9]])}))),function(){return A.apply(this,arguments)}),processError:function(t){if(this.cls(),t.message.includes("address not authorized"))return this.printf(v.address);this.printf("Error:\n"+t.message)}}},T=R,B=(n(351),n(75)),component=Object(B.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playground-component",on:{"~click":function(e){return t.init.apply(null,arguments)}}},[n("div",{staticClass:"w-full pt-6 flex items-center flex-col rounded-3xl border-2px-black bg-black overflow-hidden"},[n("div",{staticClass:"w-full block"},[n("form",{staticClass:"web-terminal-form relative block w-full text-white font-mono",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("input",{ref:"web-terminal-input",staticClass:"pl-8 pr-5 bg-black web-terminal-input block w-full text-white font-mono outline-none",attrs:{type:"text",autocomplete:"off"},on:{keydown:t.keyCheck}}),t._v(" "),n("input",{staticClass:"w-0 hidden",attrs:{type:"submit"}})]),t._v(" "),n("div",{ref:"web-terminal",staticClass:"web-terminal p-5 overflow-y-scroll text-white"},t._l(t.lines,(function(line,i){return n("span",{key:i},[t._v("\n          "+t._s("text"===line.type?line.value:"")+"\n          "),"text"===line.type?n("br"):t._e(),t._v(" "),"table"===line.type?n("table",{staticClass:"table-auto mx-4 border border-solid border-white border-collapse"},[n("thead",[n("tr",t._l(line.columns,(function(col){return n("th",{key:col.name,staticClass:"px-2 border border-white pull-left font-bold"},[t._v(t._s(col.name))])})),0)]),t._v(" "),n("tbody",t._l(line.rows,(function(e,r){return n("tr",{key:r},t._l(e,(function(e,r){return n("td",{key:r,staticClass:"px-2 border border-white"},[t._v(t._s(e))])})),0)})),0)]):t._e()])})),0)])])])}),[],!1,null,"921fa488",null);e.default=component.exports},355:function(t,e,n){"use strict";n.r(e);var r={inheritAttrs:!1,props:["href"]},l=n(75),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"btn bg-black text-white",attrs:{href:t.href}},[r("span",{staticClass:"flex"},[t._t("default"),t._v(" "),r("img",{staticClass:"hidden sm:inline-block ml-4",attrs:{src:n(342),srcset:n(342)+" 1x, "+n(345)+" 2x",alt:""}})],2)])}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,n){t.exports=n.p+"img/logo-black.4b9c4b1.svg"},357:function(t,e,n){t.exports=n.p+"img/logo-white.10753a5.svg"},360:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"bg-navbar"},[r("nav",{staticClass:"container px-6 md:px-9 lg:px-16 flex items-center py-2"},[r("div",{staticClass:"py-4"},[r("img",{staticClass:"h-5",attrs:{src:n(356),alt:"Tableland"}})]),t._v(" "),r("ul",{staticClass:"flex flex-1 justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-24 uppercase text-sm ml-3"},[r("li",[r("a",{attrs:{href:"https://mirror.xyz/tableland.eth"}},[t._v("Blog")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://discord.gg/7WDqyanQ",target:"_blank"}},[t._v("Discord")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.tableland.xyz"}},[t._v("Docs")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-4 lg:mb-10"},[t._v("\n          Build web3 with "),n("span",{staticClass:"font-black"},[t._v("SQL")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sql"},[n("div",{staticClass:"garage-break"}),t._v(" "),n("div",{staticClass:"container px-6 md:px-9 lg:px-16 flex pt-10 xl:pt-14"},[n("div",{staticClass:"lg:w-2/3 xl:w-1/2"},[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter mb-4 lg:mb-10"},[t._v("\n          In Tableland, we speak SQL\n        ")]),t._v(" "),n("p",{staticClass:"text-xl md:text-3xl leading-normal md:leading-normal font-light mb-2"},[t._v("\n          1–The bulk of digital information is stored in relational tables.\n        ")]),t._v(" "),n("p",{staticClass:"text-xl md:text-3xl leading-normal md:leading-normal font-light mb-2"},[t._v("\n          2–Your familiar SQL tables are stored on a decentralized network of validators\n          and anchored to Ethereum as transferable NFTs, providing ownership and access control.\n        ")]),t._v(" "),n("p",{staticClass:"text-xl md:text-3xl leading-normal md:leading-normal font-light"},[t._v("\n          3–Easy as pie, right?\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"community-bottom md:flex justify-center lg:justify-end text-white"},[n("div",[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter md:leading-tighter lg:leading-tighter mb-4 lg:mb-10"},[t._v("\n            User-owned token networks are the future of the internet\n          ")]),t._v(" "),n("p",{staticClass:"text-xl md:text-3xl leading-normal md:leading-normal font-light"},[t._v("\n            Web3 needs a relational and queryable metadata layer. Tableland is a decentralized user-owned network for structured metadata—data from apps, games, social, analytics, AI/ML, or whatever else you can imagine. Tableland tables are also NFTs, making them own-able, tradable, and composable assets themselves.\n          ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"text-white py-10"},[r("nav",{staticClass:"container px-6 md:px-9 lg:px-16 py-2"},[r("div",{staticClass:"hidden py-4"},[r("img",{staticClass:"h-5",attrs:{src:n(357),alt:"Tableland"}})]),t._v(" "),r("ul",{staticClass:"flex justify-center items-center gap-x-3 sm:gap-x-6 md:gap-x-12 xl:gap-x-24 uppercase text-xs"},[r("li",{staticClass:"hidden md:inline-block"},[r("a",{attrs:{href:"https://twitter.com/tableland__"}},[t._v("Twitter")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://textile.notion.site/Tableland-Grants-Funding-ebc1f398d53a481d94f090ab12d93be0"}},[t._v("Grants")])]),t._v(" "),r("li",{staticClass:"hidden md:inline-block"},[r("a",{attrs:{href:"https://boards.greenhouse.io/textileio"}},[t._v("Jobs")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://hhueol4i6vp.typeform.com/to/sgtDW2Xt"}},[t._v("Token Info")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.tableland.xyz/general/community/partners"}},[t._v("Partners")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5"}},[t._v("Privacy")])]),t._v(" "),r("li",[r("a",{attrs:{href:"https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35"}},[t._v("Terms")])])])])])}],l=n(75),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("section",{staticClass:"hero"},[n("div",{staticClass:"container px-6 md:px-9 lg:px-16 flex items-center pt-18 lg:pt-36"},[n("div",{staticClass:"lg:w-2/3"},[t._m(1),t._v(" "),n("p",{staticClass:"text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"},[t._v("\n          Tableland is a network and relational metadata protocol for EVM chains like Ethereum.\n          Built for developers, NFT creators, and web3 visionaries.\n        ")]),t._v(" "),n("div",{staticClass:"hero-btn hidden md:inline-block text-center md:text-left mb-18 lg:mb-48 2xl:mb-100"},[n("ButtonLink",{attrs:{href:"https://docs.tableland.xyz"}},[t._v("Get started")])],1),t._v(" "),n("div",{staticClass:"md:hidden text-center md:text-left"},[n("ButtonLink",{attrs:{href:"https://discord.gg/7WDqyanQ"}},[t._v("Discord")])],1),t._v(" "),n("p",{staticClass:"hidden md:inline-block text-2xl md:text-3xl lg:text-4.25xl 3xl:text-5xl leading-normal lg:leading-snug font-medium"},[t._v("\n          Use familiar SQL tables to read and write dynamic NFT metadata or application\n          data–all orchestrated by token networks like Ethereum.\n        ")])])])]),t._v(" "),n("section",{staticClass:"garage"},[n("div",{staticClass:"container px-6 md:px-9 lg:px-16 flex items-center"},[n("div",{staticClass:"lg:w-2/3"},[n("h3",{staticClass:"font-Orbitron text-white text-4xl md:text-5xl lg:text-6xl leading-tighter mb-10 md:mb-4 lg:mb-10"},[t._v("\n          Welcome to Tableland\n        ")]),t._v(" "),n("p",{staticClass:"text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-2"},[t._v("\n          1—Use tables to store mutable, partially mutable, or immutable NFT metadata.\n        ")]),t._v(" "),n("p",{staticClass:"text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-2"},[t._v("\n          2—Use tables to attach in-app or in-game metadata to existing NFTs.\n        ")]),t._v(" "),n("p",{staticClass:"text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-2"},[t._v("\n          3—Control table write access with token or address-based rules.\n        ")]),t._v(" "),n("p",{staticClass:"text-white text-xl md:text-2xl lg:text-3xl leading-normal md:leading-normal lg:leading-normal font-light mb-10 lg:mb-18"},[t._v("\n          4—Use tables to build fully decentralized apps and games that require complex relational data models.\n        ")]),t._v(" "),n("div",{staticClass:"text-center md:text-left"},[n("ButtonLink",{attrs:{href:"https://docs.tableland.xyz/building/examples/playbooks"}},[t._v("See playbooks")])],1)])])]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"bg-gradient bg-gradient-to-b from-violet to-pink"},[n("section",{staticClass:"playground text-white pt-6 md:pt-32 pb-32"},[n("div",{staticClass:"container px-6 md:px-9 lg:px-16 flex justify-center"},[n("div",{staticClass:"md:w-2/3"},[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter mb-4 lg:mb-10"},[t._v("\n            Try it out\n          ")]),t._v(" "),n("p",{staticClass:"text-xl md:text-3xl leading-normal md:leading-normal font-light mb-4 lg:mb-6"},[t._v("\n            Go ahead! Don't take our word for it.\n          ")]),t._v(" "),n("playground")],1)])])]),t._v(" "),n("section",{staticClass:"community relative"},[n("div",{staticClass:"container px-6 md:px-9 lg:px-16"},[n("div",{staticClass:"community-top pt-32"},[n("div",{staticClass:"md:w-2/3 xl:w-1/2"},[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl leading-tighter mb-4 lg:mb-10"},[t._v("\n            Join the community\n          ")]),t._v(" "),n("p",{staticClass:"text-xl md:text-3xl leading-normal md:leading-normal font-light mb-10 lg:mb-18"},[t._v("\n            Whether you're a developer, NFT creator, token holder, or just curious about web3, there's a place for you in Tableland. Join a fast-growing community of innovators from all over the world.\n          ")]),t._v(" "),n("div",{staticClass:"text-center md:text-left"},[n("ButtonLink",{attrs:{href:"https://discord.gg/7WDqyanQ"}},[t._v("Join us on Discord")])],1)])]),t._v(" "),t._m(3)]),t._v(" "),n("div",{staticClass:"community-break"})]),t._v(" "),n("section",{staticClass:"md:block showcase py-32 relative"},[n("div",{staticClass:"container px-6 md:px-9 lg:px-16"},[n("div",{staticClass:"text-center text-white"},[n("p",{staticClass:"text-3xl md:text-4xl lg:text-5xl md:leading-normal lg:leading-normal font-light mb-10"},[t._v("What will you build?")]),t._v(" "),n("ButtonLink",{attrs:{href:"https://docs.tableland.xyz"}},[t._v("Get started")])],1)])]),t._v(" "),t._m(4)])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonLink:n(355).default,Playground:n(354).default})}}]);