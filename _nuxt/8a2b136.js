(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,4],{345:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE+SURBVHgB5ZTNEYIwEIUDwxmhg5RgCdqBHYgdYAXagSWoHdiBlmAH0gECV358q+BAJpDA5KRvJmaJZL/kZQNjf6U4jnmSJHGWZQfdOTYbIcdxODqvLMswTdOjzpxRgLaqqgp0IFMBEdpTB9IBwN+QfJbFaHtYE9CzZVkR4qUu5C0c3AJJKrRLT/xtSHilOVjAnA69HpNCHHEAq5vJYvax5UxBURQX6n3fvwOytG37Wu+Eua67GQT0iWzB5L04roJMriIR0ncmRgAyCBWFUYAowDyjAKooOgf2ueln7Cg0BpAkD5r/tKsIvvLGVyQ5IUmkSt4B5Hn+xItDMUfbUYDnObqVKjnJErZKL9zr2u7ESMRryBp34obLtlUlH63WZ+PRfCIAPw3N0T4DQZx+dFY+uYqM2dIW7PDIHpUtv6UXteMr9lOjQBUAAAAASUVORK5CYII="},346:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},347:function(t,e,n){var content=n(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(113).default)("d0f53f18",content,!0,{sourceMap:!1})},348:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG2SURBVHgB7ZjbTcMwFIadlOdcNmADGIFu0BG6ASOUbgAbsAEwQRkBNmCDkAyQcP5KqRzLKU58fHnwJ1l2Ti/6PyXNqSNEIpFwRtM0Vdd1p7ZtB5rfcCyYyYVDNpvNbhiGB6xp3uV5fuKWcCpAoW+V0j23hFOBGVglQggANolQAoBFIqQAsJbwLfBC40upWUn4Fvjt+34rGCW0AnMNyKQuD3rpoH53XdesEloBTQPam9ZN4JTQCmgaULWwroVC/4xrLglvv4Esyz5pepdrHBKuBI5lWWbyKIpii8DqG20lQveBMzYSUQiAtRLRCIA1ElEJgKUS0QmAJRJRCoB/JPbjQbQCI9QkM7VGYpfbcbQCuEzQ/GjcyXUS+hZSQ4xS4Fp4/OeSG2J0AkvCg6gEloYH0QisCQ+iEFgbHrgSOKi7s7lHizbhgbczIO/gRmzDgzmByQelnZRR/QqXM8ARHmgFKNgrTR9Yyzspk7oJXOHPOYRD6Np/EtMnE0eSfeYKD3zfhSrO8OBG+OWRwk8KNuFB0D5gGx4EE+AID4IIcIUH3gU4wwPXApOQ3OGBUwG18XGHTyQSQvwBYHsAUnLa8MgAAAAASUVORK5CYII="},349:function(t,e,n){n(350)},350:function(t,e,n){"use strict";var l=n(15),r=n(3),o=n(23),c=n(10),d=n(43),x=n(16),m=n(148),h=n(26),f=n(64),v=n(149),C=n(241),w=n(14),_=n(45),A=w("replace"),y=RegExp.prototype,k=r.TypeError,O=c(v),E=c("".indexOf),S=c("".replace),R=c("".slice),B=Math.max,T=function(t,e,n){return n>t.length?-1:""===e?n:E(t,e,n)};l({target:"String",proto:!0},{replaceAll:function(t,e){var n,l,r,c,v,w,Q,L,j,U=d(this),I=0,D=0,N="";if(null!=t){if((n=m(t))&&(l=h(d("flags"in y?t.flags:O(t))),!~E(l,"g")))throw k("`.replaceAll` does not allow non-global regexes");if(r=f(t,A))return o(r,t,U,e);if(_&&n)return S(h(U),t,e)}for(c=h(U),v=h(t),(w=x(e))||(e=h(e)),Q=v.length,L=B(1,Q),I=T(c,v,0);-1!==I;)j=w?h(e(v,I,c)):C(v,c,I,[],void 0,e),N+=R(c,D,I)+j,D=I+Q,I=T(c,v,I+L);return D<c.length&&(N+=R(c,D)),N}})},351:function(t,e,n){"use strict";var l=n(15),r=n(352).trim;l({target:"String",proto:!0,forced:n(353)("trim")},{trim:function(){return r(this)}})},352:function(t,e,n){var l=n(10),r=n(43),o=n(26),c=n(346),d=l("".replace),x="["+c+"]",m=RegExp("^"+x+x+"*"),h=RegExp(x+x+"*$"),f=function(t){return function(e){var n=o(r(e));return 1&t&&(n=d(n,m,"")),2&t&&(n=d(n,h,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},353:function(t,e,n){var l=n(108).PROPER,r=n(13),o=n(346);t.exports=function(t){return r((function(){return!!o[t]()||"​᠎"!=="​᠎"[t]()||l&&o[t].name!==t}))}},354:function(t,e,n){"use strict";n(347)},355:function(t,e,n){var l=n(112)((function(i){return i[1]}));l.push([t.i,'/*purgecss start ignore*/\n*[data-v-4b2c9b81]{\n  box-sizing:border-box\n}\n.web-terminal[data-v-4b2c9b81]{\n  font-family:monospace;\n  height:calc(16rem + 10vw);\n  -ms-overflow-style:none;\n  scrollbar-width:none\n}\n.web-terminal[data-v-4b2c9b81]::-webkit-scrollbar{\n  display:none\n}\n.font-mono[data-v-4b2c9b81]{\n  font-family:monospace\n}\n.web-terminal-form[data-v-4b2c9b81]:before{\n  content:"> ";\n  position:absolute;\n  left:1rem\n}\n\n/*purgecss end ignore*/',""]),l.locals={},t.exports=l},357:function(t,e,n){"use strict";n.r(e);n(78),n(65),n(75),n(33),n(109),n(63),n(110);var l,r=n(18),o=n(59),c=(n(77),n(53),n(242),n(111),n(349),n(88),n(351),n(106)),d="Connected!\nThis is your basic Tableland Terminal, you can type SQL commands interact to with a Tableland Validator.\nRun `help` to learn more and see some example commands.",x="Creating Your Table, the steps are:\n  Mint the table on Ethereum\n  Register it with the Validator\n  It may take a little while\n",m="Read the full docs here: https://docs.tableland.xyz",h="Available commands:\n    connect   Connect to tableland with Metamask. You must\n              do this before any other commands can be run.\n    list      List your tables\n    clear     Clear this terminal\n    whoami    See your Eth Address\n    docs      Show url to the documentation\n    help      Show this message again\n\nExample Read Queries:\n    SELECT * FROM LootAttributes_3;\n    SELECT * FROM todo_todos_example_34 ORDER BY id ASC;",f="Running SQL on the Validator",v={connect:"Before running commands you need to connect with a Tableland Validator. We currently only support connecting via Metamask. Make sure it's installed, then type `connect` and hit return.",statement:"WARN: that is not a SQL statement that Tableland can use"};function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var w,_,A,y,k,O=0,E=[],S={data:function(){return{loading:!1,lines:[]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)({ethAddress:function(t){return t.ethAddress}})),mounted:function(){this.printf(h)},methods:{printf:function(t){for(var e=t.replaceAll("  ","  ").split("\n").reverse(),i=0;i<e.length;i++){var line=e[i];this.lines.unshift(line)}this.$refs["web-terminal"].scrollTop=0},replaceLine:function(t){this.$set(this.lines,0,t)},cls:function(){for(var i=0;i<=this.$refs["web-terminal"].clientHeight/15;i++)this.printf("")},keyCheck:function(t){switch(window.event.keyCode){case 38:O<E.length-1&&(O++,this.$refs["web-terminal-input"].value=E[O]);break;case 40:O>0&&(O--,this.$refs["web-terminal-input"].value=E[O])}},showSpinner:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!0!==this.loading){this.cls(),this.loading=!0;var n=["\\","|","/","—"],l=0,r=setInterval((function(){!1!==t.loading?t.replaceLine(e+" "+n[l++%4]):clearInterval(r)}),313.37)}},onSubmit:function(){l=this.$refs["web-terminal-input"].value,E.shift(),E.unshift(l),E.unshift(""),O=0,this.loading||("connect"===l?this.connect():"docs"===l||"man"===l||"man tableland"===l?(this.cls(),this.printf(m)):"help"===l?(this.cls(),this.printf(h)):this.ethAddress?"clear"===l?this.cls():"whoami"===l?(this.cls(),this.printf(this.ethAddress)):"mytables"===l||"list"===l||"ls"===l?(this.cls(),this.list()):(this.cls(),this.parseCommand(l)):(this.cls(),this.printf(v.connect)),this.$refs["web-terminal-input"].value="")},init:function(){this.$refs["web-terminal-input"].focus()},parseCommand:(k=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n=e.trim().toLowerCase()){t.next=4;break}return t.abrupt("return",this.printf(v.statement));case 4:if(0!==n.indexOf("create")){t.next=8;break}return t.next=7,this.runCreate(e);case 7:return t.abrupt("return");case 8:return t.next=10,this.runCommand(e);case 10:t.next=17;break;case 12:t.prev=12,t.t0=t.catch(0),this.loading=!1,this.cls(),this.printf("Command Failed:\n"+t.t0.message);case 17:case"end":return t.stop()}}),t,this,[[0,12]])}))),function(t){return k.apply(this,arguments)}),runCommand:(y=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.showSpinner(f),t.next=4,this.$store.dispatch("runSql",e);case 4:n=t.sent,this.loading=!1,this.cls(),this.printf(JSON.stringify(n,null,4)),this.printf("Result: "),t.next=17;break;case 11:t.prev=11,t.t0=t.catch(0),this.loading=!1,this.cls(),this.printf(t.t0.message),this.printf("Error: ");case 17:case"end":return t.stop()}}),t,this,[[0,11]])}))),function(t){return y.apply(this,arguments)}),runCreate:(A=Object(r.a)(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.showSpinner(x),t.next=4,this.$store.dispatch("createTable",e);case 4:n=t.sent,this.loading=!1,this.cls(),this.printf("Table Created:\n"+JSON.stringify(n,null,4)),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),this.loading=!1,this.cls(),this.printf("Error:\n"+t.t0.message);case 15:case"end":return t.stop()}}),t,this,[[0,10]])}))),function(t){return A.apply(this,arguments)}),list:(_=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.showSpinner(),t.next=4,this.$store.dispatch("myTables");case 4:e=t.sent,this.loading=!1,this.cls(),this.printf("Result:\n"+JSON.stringify(e,null,4)),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),this.loading=!1,this.cls(),this.printf("Error:\n"+t.t0.message);case 15:case"end":return t.stop()}}),t,this,[[0,10]])}))),function(){return _.apply(this,arguments)}),connect:(w=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.showSpinner("connecting"),t.next=4,this.$store.dispatch("connect");case 4:this.loading=!1,this.cls(),this.printf(d),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(0),this.loading=!1,this.cls(),this.printf("Error:\n"+t.t0.message);case 14:case"end":return t.stop()}}),t,this,[[0,9]])}))),function(){return w.apply(this,arguments)})}},R=S,B=(n(354),n(76)),component=Object(B.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{"~click":function(e){return t.init.apply(null,arguments)}}},[n("div",{staticClass:"w-full pt-6 flex items-center flex-col rounded-3xl border-2px-black bg-black overflow-hidden"},[n("div",{staticClass:"w-full block"},[n("form",{staticClass:"web-terminal-form relative block w-full text-white font-mono",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("input",{ref:"web-terminal-input",staticClass:"pl-8 pr-5 bg-black web-terminal-input block w-full text-white font-mono outline-none",attrs:{type:"text",autocomplete:"off"},on:{keydown:t.keyCheck}}),t._v(" "),n("input",{staticClass:"w-0 hidden",attrs:{type:"submit"}})]),t._v(" "),n("div",{ref:"web-terminal",staticClass:"web-terminal p-5 overflow-y-scroll text-white"},t._l(t.lines,(function(line,i){return n("span",{key:i},[t._v("\n          "+t._s(line)+"\n          "),n("br")])})),0)])])])}),[],!1,null,"4b2c9b81",null);e.default=component.exports},358:function(t,e,n){"use strict";n.r(e);var l={inheritAttrs:!1,props:["href"]},r=n(76),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("a",{staticClass:"btn bg-black text-white",attrs:{href:t.href}},[l("span",{staticClass:"flex"},[t._t("default"),t._v(" "),l("img",{staticClass:"hidden sm:inline-block ml-4",attrs:{src:n(345),srcset:n(345)+" 1x, "+n(348)+" 2x",alt:""}})],2)])}),[],!1,null,null,null);e.default=component.exports},359:function(t,e,n){t.exports=n.p+"img/logo-black.4b9c4b1.svg"},360:function(t,e,n){t.exports=n.p+"img/logo-white.10753a5.svg"},362:function(t,e,n){"use strict";n.r(e);var l=[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("header",{staticClass:"bg-navbar"},[l("nav",{staticClass:"container px-6 md:px-9 lg:px-16 flex items-center py-2"},[l("div",{staticClass:"py-4"},[l("img",{staticClass:"h-5",attrs:{src:n(359),alt:"Tableland"}})]),t._v(" "),l("ul",{staticClass:"flex flex-1 justify-end items-center gap-x-3 sm:gap-x-6 md:gap-x-10 lg:gap-x-24 uppercase text-sm ml-3"},[l("li",[l("a",{attrs:{href:"https://mirror.xyz/tableland.eth"}},[t._v("Blog")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://discord.gg/7WDqyanQ",target:"_blank"}},[t._v("Discord")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://docs.tableland.xyz"}},[t._v("Docs")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10"},[t._v("\n          Build web3 with "),n("span",{staticClass:"font-black"},[t._v("SQL")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"playbooks container px-6 md:px-9 lg:px-24 lg:flex justify-between"},[n("div",{staticClass:"lg:w-1/3 xl:w-1/3"},[n("div",{staticClass:"text-white playbook"},[n("p",{staticClass:"playbook-left bg-purple text-2xl lg:text-3xl px-6 py-4 font-medium rounded"},[t._v("Store NFT metadata")])]),t._v(" "),n("div",{staticClass:"text-white"},[n("p",{staticClass:"playbook-left bg-purple text-2xl lg:text-3xl px-6 py-4 font-medium rounded"},[t._v("Extend existing NFTs")])])]),t._v(" "),n("div",{staticClass:"lg:w-1/3 xl:w-1/3"},[n("div",{staticClass:"text-white playbook"},[n("p",{staticClass:"playbook-right bg-purple text-2xl lg:text-3xl px-6 py-4 font-medium rounded"},[t._v("Control table access")])]),t._v(" "),n("div",{staticClass:"text-white"},[n("p",{staticClass:"playbook-right bg-purple text-2xl lg:text-3xl px-6 py-4 font-medium rounded"},[t._v("Compose with tables")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sql"},[n("div",{staticClass:"garage-break"}),t._v(" "),n("div",{staticClass:"container px-6 md:px-9 lg:px-16 flex pt-20 2xl:pb-68"},[n("div",{staticClass:"lg:w-2/3 xl:w-1/2"},[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10"},[t._v("\n          In Tableland, we speak SQL\n        ")]),t._v(" "),n("p",{staticClass:"text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-1"},[t._v("\n          1–The bulk of digital information is stored in relational tables.\n        ")]),t._v(" "),n("p",{staticClass:"text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-1"},[t._v("\n          2–Your familiar SQL tables are stored on a decentralized network of validators\n          and anchored to Ethereum as transferable NFTs, providing ownership and access control.\n        ")]),t._v(" "),n("p",{staticClass:"text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-4"},[t._v("\n          3–Easy as pie, right?\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"community-bottom md:flex justify-center md:justify-end text-white"},[n("div",{staticClass:"md:w-2/3 xl:w-1/2"},[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl lg:leading-tighter mb-10"},[t._v("\n            User-owned token networks are the future of the internet\n          ")]),t._v(" "),n("p",{staticClass:"text-2xl md:text-3xl leading-normal md:leading-normal font-light"},[t._v("\n            Tableland is the meta-layer of web3. It encompasses everything from NFT metadata, social, financial, machine-learning, research data, or anything else. Tableland tables are also NFTs themselves, making them own-able, tradable, and composable assets.\n          ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-62"},[n("div",{staticClass:"xl:w-1/2"},[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10"}),t._v(" "),n("p",{staticClass:"font-Orbitron text-2xl md:text-3xl lg:text-4.5xl mb-5"}),t._v(" "),n("div",{staticClass:"bg-black text-white py-8 md:py-10 lg:py-14 px-10 md:px-12 lg:px-16 rounded-3xl"},[n("p",{staticClass:"text-2xl md:text-3xl md:leading-normal font-light mb-4"}),t._v(" "),n("p",[n("a",{staticClass:"text-xl md:text-2xl uppercase underline",attrs:{href:"#"}},[t._v("Learn More")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-62 xl:mb-14 xl:flex xl:justify-end"},[n("div",{staticClass:"xl:w-1/2"},[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10"}),t._v(" "),n("p",{staticClass:"font-Orbitron text-2xl md:text-3xl lg:text-4.5xl mb-5"}),t._v(" "),n("div",{staticClass:"bg-black text-white py-8 md:py-10 lg:py-14 px-10 md:px-12 lg:px-16 rounded-3xl"},[n("p",{staticClass:"text-2xl md:text-3xl md:leading-normal font-light mb-4"}),t._v(" "),n("p",[n("a",{staticClass:"text-xl md:text-2xl uppercase underline",attrs:{href:"#"}},[t._v("Learn More")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-48"},[n("div",{staticClass:"xl:w-1/2"},[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10"}),t._v(" "),n("p",{staticClass:"font-Orbitron text-2xl md:text-3xl lg:text-4.5xl mb-5"}),t._v(" "),n("div",{staticClass:"bg-black text-white py-8 md:py-10 lg:py-14 px-10 md:px-12 lg:px-16 rounded-3xl"},[n("p",{staticClass:"text-2xl md:text-3xl md:leading-normal font-light mb-4"}),t._v(" "),n("p",[n("a",{staticClass:"text-xl md:text-2xl uppercase underline",attrs:{href:"#"}},[t._v("Learn More")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:w-1/2 xl:w-1/3"},[n("h4",{staticClass:"text-3xl md:text-4xl xl:text-5xl xl:leading-tighter"}),t._v(" "),n("a",{staticClass:"text-2xl uppercase underline",attrs:{href:"#"}},[t._v("Link")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:w-1/2 xl:w-1/3"},[n("h4",{staticClass:"text-3xl md:text-4xl xl:text-5xl xl:leading-tighter"}),t._v(" "),n("a",{staticClass:"text-2xl uppercase underline",attrs:{href:"#"}},[t._v("Link")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:w-1/2 xl:w-1/3"},[n("h4",{staticClass:"text-3xl md:text-4xl xl:text-5xl xl:leading-tighter"}),t._v(" "),n("a",{staticClass:"text-2xl uppercase underline",attrs:{href:"#"}},[t._v("Link")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("footer",{staticClass:"text-white py-10"},[l("nav",{staticClass:"container px-6 md:px-9 lg:px-16 py-2"},[l("div",{staticClass:"hidden py-4"},[l("img",{staticClass:"h-5",attrs:{src:n(360),alt:"Tableland"}})]),t._v(" "),l("ul",{staticClass:"flex justify-center items-center gap-x-3 sm:gap-x-6 md:gap-x-12 xl:gap-x-24 uppercase text-xs"},[l("li",{staticClass:"hidden md:inline-block"},[l("a",{attrs:{href:"https://twitter.com/tableland__"}},[t._v("Twitter")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://textile.notion.site/Tableland-Grants-Funding-ebc1f398d53a481d94f090ab12d93be0"}},[t._v("Grants")])]),t._v(" "),l("li",{staticClass:"hidden md:inline-block"},[l("a",{attrs:{href:"https://boards.greenhouse.io/textileio"}},[t._v("Jobs")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://hhueol4i6vp.typeform.com/to/sgtDW2Xt"}},[t._v("Token Info")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://docs.tableland.xyz/general/community/partners"}},[t._v("Partners")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://textile.notion.site/Tableland-Privacy-Policy-6fd160e7f485491d9dc4cbab188043d5"}},[t._v("Privacy")])]),t._v(" "),l("li",[l("a",{attrs:{href:"https://textile.notion.site/Tableland-Terms-of-Use-cf80f1b550b843ad9d4b8c3140b78e35"}},[t._v("Terms")])])])])])}],r=(n(75),n(33),n(89),n(66),n(63),{data:function(){return{}},methods:{activateSlide:function(t){t.classList.add("active"),t.classList.remove("inactive")},deactivateSlide:function(t){t.classList.add("inactive"),t.classList.remove("active")},handleSliderClick:function(t){var e=t.target;if(!e.classList.contains("active")){var n=Array.from(e.parentElement.children).filter((function(t){return t!==e}));this.activateSlide(e),n.forEach(this.deactivateSlide)}}}}),o=n(76),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("section",{staticClass:"hero"},[n("div",{staticClass:"container px-6 md:px-9 lg:px-16 flex items-center pt-36"},[n("div",{staticClass:"lg:w-2/3 xl:w-1/2"},[t._m(1),t._v(" "),n("p",{staticClass:"text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-18"},[t._v("\n          Tableland is a network and relational metadata protocol for EVM chains like Ethereum. Built for developers, NFT creators, and web3 visionaries.\n        ")]),t._v(" "),n("div",{staticClass:"hidden md:inline-block text-center lg:text-left mb-50"},[n("ButtonLink",{attrs:{href:"https://docs.tableland.xyz"}},[t._v("Get started")])],1),t._v(" "),n("div",{staticClass:"md:hidden text-center lg:text-left mb-50"},[n("ButtonLink",{attrs:{href:"https://discord.gg/7WDqyanQ"}},[t._v("Join us on Discord")])],1),t._v(" "),n("p",{staticClass:"text-3xl md:text-4xl lg:text-4.25xl leading-normal md:leading-normal lg:leading-snug font-medium"},[t._v("\n          Use familiar SQL tables to read and write dynamic NFT metadata or application data–all orchestrated by token networks like Ethereum.\n        ")])])])]),t._v(" "),n("section",{staticClass:"garage"},[n("div",{staticClass:"container px-6 md:px-9 lg:px-16 flex items-center"},[n("div",{staticClass:"lg:w-2/3 xl:w-1/2"},[n("p",{staticClass:"text-white text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-18"},[t._v("\n          Tableland isn't a new database—it’s just web3-native relational tables.\n        ")]),t._v(" "),n("div",{staticClass:"text-center lg:text-left"},[n("ButtonLink",{attrs:{href:"https://docs.tableland.xyz/building/examples/playbooks"}},[t._v("See playbooks")])],1)])]),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"bg-gradient bg-gradient-to-b from-violet to-pink"},[n("section",{staticClass:"tables relative text-white hidden"},[n("div",{staticClass:"container px-6 md:px-9 lg:px-16 flex justify-end"},[n("div",{staticClass:"lg:w-2/3 xl:w-1/2"},[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10"}),t._v(" "),n("p",{staticClass:"text-2xl md:text-3xl md:leading-normal font-light mb-18"}),t._v(" "),n("div",{staticClass:"text-center lg:text-left"},[n("ButtonLink",{attrs:{href:"#"}})],1)])])]),t._v(" "),n("section",{staticClass:"playground text-white pt-32"},[n("div",{staticClass:"container px-6 md:px-9 lg:px-16 flex justify-center"},[n("div",{staticClass:"md:w-1/2"},[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10"},[t._v("\n            Try it out\n          ")]),t._v(" "),n("p",{staticClass:"text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-10"},[t._v("\n            Go ahead! Don't take our word for it.\n          ")]),t._v(" "),n("playground")],1)])])]),t._v(" "),n("section",{staticClass:"community relative"},[n("div",{staticClass:"container px-6 md:px-9 lg:px-16"},[n("div",{staticClass:"community-top pt-70"},[n("div",{staticClass:"md:w-2/3 xl:w-1/2"},[n("h3",{staticClass:"font-Orbitron text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tighter mb-10"},[t._v("\n            Join the community\n          ")]),t._v(" "),n("p",{staticClass:"text-2xl md:text-3xl leading-normal md:leading-normal font-light mb-18"},[t._v("\n            Whether you're a developer, NFT creator, token holder, or just curious about web3, there's a place for you in Tableland. Join a fast-growing community of innovators from all over the world.\n          ")]),t._v(" "),n("div",{staticClass:"text-center lg:text-left"},[n("ButtonLink",{attrs:{href:"https://discord.gg/7WDqyanQ"}},[t._v("Join us on Discord")])],1)])]),t._v(" "),t._m(4)]),t._v(" "),n("div",{staticClass:"community-break"})]),t._v(" "),n("section",{staticClass:"phases mb-48 hidden"},[n("div",{staticClass:"container px-6 md:px-9 lg:px-16"},[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("div",{staticClass:"text-center"},[n("p",{staticClass:"text-2xl md:text-3xl md:leading-normal font-light mb-4"},[t._v("Any suggestions?")]),t._v(" "),n("ButtonLink",{attrs:{href:"#"}})],1)])]),t._v(" "),n("section",{staticClass:"md:block showcase pt-24 pb-32 relative"},[n("div",{staticClass:"showcase-break hidden"}),t._v(" "),n("div",{staticClass:"container px-6 md:px-9 lg:px-16"},[n("div",{staticClass:"slider flex gap-x-3.5 mb-32 hidden"},[n("div",{staticClass:"bg-white pt-8 lg:pt-14 pb-120 px-10 lg:px-16 rounded-7xl lg:rounded-8xl slide active",on:{click:t.handleSliderClick}},[t._m(8)]),t._v(" "),n("div",{staticClass:"bg-white pt-8 lg:pt-14 pb-120 px-10 lg:px-16 rounded-7xl lg:rounded-8xl slide inactive",on:{click:t.handleSliderClick}},[t._m(9)]),t._v(" "),n("div",{staticClass:"bg-white pt-8 lg:pt-14 pb-120 px-10 lg:px-16 rounded-7xl lg:rounded-8xl slide inactive",on:{click:t.handleSliderClick}},[t._m(10)])]),t._v(" "),n("div",{staticClass:"text-center text-white"},[n("p",{staticClass:"text-3xl md:text-4xl lg:text-5xl md:leading-normal lg:leading-normal font-light mb-10"},[t._v("What will you build?")]),t._v(" "),n("ButtonLink",{attrs:{href:"https://docs.tableland.xyz"}},[t._v("Get started")])],1)])]),t._v(" "),t._m(11)])}),l,!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonLink:n(358).default,Playground:n(357).default})}}]);