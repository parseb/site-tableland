(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{916:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},917:function(e,t,n){var content=n(925);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(111).default)("16bf8076",content,!0,{sourceMap:!1})},919:function(e,t,n){n(920)},920:function(e,t,n){"use strict";var r=n(9),o=n(20),l=n(11),c=n(45),f=n(17),d=n(184),h=n(29),m=n(64),v=n(248),w=n(480),x=n(18),y=n(39),k=x("replace"),_=TypeError,O=l("".indexOf),C=l("".replace),E=l("".slice),R=Math.max,T=function(e,t,n){return n>e.length?-1:""===t?n:O(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,l,x,S,j,$,A,L,M=c(this),P=0,D=0,I="";if(null!=e){if((n=d(e))&&(r=h(c(v(e))),!~O(r,"g")))throw _("`.replaceAll` does not allow non-global regexes");if(l=m(e,k))return o(l,e,M,t);if(y&&n)return C(h(M),e,t)}for(x=h(M),S=h(e),(j=f(t))||(t=h(t)),$=S.length,A=R(1,$),P=T(x,S,0);-1!==P;)L=j?h(t(S,P,x)):w(S,x,P,[],void 0,t),I+=E(x,D,P)+L,D=P+$,P=T(x,S,P+A);return D<x.length&&(I+=E(x,D)),I}})},921:function(e,t,n){"use strict";var r=n(9),o=n(922).trim;r({target:"String",proto:!0,forced:n(923)("trim")},{trim:function(){return o(this)}})},922:function(e,t,n){var r=n(11),o=n(45),l=n(29),c=n(916),f=r("".replace),d="["+c+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),v=function(e){return function(t){var n=l(o(t));return 1&e&&(n=f(n,h,"")),2&e&&(n=f(n,m,"")),n}};e.exports={start:v(1),end:v(2),trim:v(3)}},923:function(e,t,n){var r=n(143).PROPER,o=n(12),l=n(916);e.exports=function(e){return o((function(){return!!l[e]()||"​᠎"!=="​᠎"[e]()||r&&l[e].name!==e}))}},924:function(e,t,n){"use strict";n(917)},925:function(e,t,n){var r=n(110)((function(i){return i[1]}));r.push([e.i,'/*purgecss start ignore*/\n*[data-v-03a12221]{\n  box-sizing:border-box\n}\n.overlay-disable[data-v-03a12221]{\n  background-color:rgba(30,30,30,.8)\n}\n.web-terminal[data-v-03a12221]{\n  font-family:monospace;\n  height:calc(16rem + 10vw);\n  -ms-overflow-style:none;\n  scrollbar-width:none\n}\n.web-terminal[data-v-03a12221]::-webkit-scrollbar{\n  display:none\n}\n.font-mono[data-v-03a12221]{\n  font-family:monospace\n}\n.web-terminal-form[data-v-03a12221]:before{\n  content:"> ";\n  position:absolute;\n  left:1rem\n}\n\n/*purgecss end ignore*/',""]),r.locals={},e.exports=r},931:function(e,t,n){"use strict";n.r(t);n(66),n(56),n(113),n(57),n(114);var r,o=n(10),l=n(51),c=(n(86),n(52),n(247),n(144),n(919),n(112),n(921),n(65),n(38),n(141),n(142),n(136)),f="Connected!\nThis is your basic Tableland Terminal, you can type SQL commands to interact with a Tableland Validator.\nRun `help` to learn more and see some example commands.",d="Creating Your Table, the steps are:\n  Mint the table on Ethereum\n  Register it with the Validator\n  It may take a little while\n",h="Read the full docs here: https://docs.tableland.xyz",m="Getting receipt for transaction",v="Available commands:\n    connect   Connect to tableland with Metamask. You must\n              do this before any other commands can be run.\n    list      List your tables\n    clear     Clear this terminal\n    whoami    See your Eth Address\n    docs      Show url to the documentation\n    help      Show this message again\n\nExample Read Queries:\n    SELECT * FROM rigs_5_28 LIMIT 10;\n    SELECT * FROM rigs_5_28 WHERE id = 1;\nExample Create and Write Queries:\n    CREATE TABLE trees (climate TEXT, name TEXT);\n    INSERT INTO <name returned from create statement> (climate, name) VALUES ('cold', 'aspen');",w="Running SQL on the Validator",x={address:"Get whitelisted on the Tableland Discord.\nhttps://discord.gg/dc8EBEhGbg",connect:"Before running commands you need to connect with a Tableland Validator. We currently only support connecting via Metamask or the Brave browser. Make sure you are using one of those, then type `connect` and hit return.",statement:"WARN: that is not a SQL statement that Tableland can use"};function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var k=0,_=[],O={data:function(){return{loading:!1,lines:[]}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(c.b)({ethAddress:function(e){return e.ethAddress},ethereum:function(e){return window.ethereum}})),mounted:function(){this.printf(v)},methods:{printf:function(e){for(var t=e.replaceAll("  ","  ").split("\n").reverse(),i=0;i<t.length;i++){var line={value:t[i],type:"text"};this.lines.unshift(line)}this.$refs["web-terminal"].scrollTop=0},printTable:function(data){this.lines.unshift({type:"table",columns:data.columns,rows:data.rows})},replaceLine:function(e){this.$set(this.lines,0,{value:e,type:"text"})},cls:function(){for(var e=this.$refs["web-terminal"].clientHeight,i=0;i<=e/15;i++)this.printf("")},keyCheck:function(e){switch(window.event.keyCode){case 38:k<_.length-1&&(k++,this.$refs["web-terminal-input"].value=_[k]);break;case 40:k>0&&(k--,this.$refs["web-terminal-input"].value=_[k])}},showSpinner:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!0!==this.loading){this.cls(),this.loading=!0;var n=["\\","|","/","—"],r=0,o=setInterval((function(){!1!==e.loading?e.replaceLine(t+" "+n[r++%4]):clearInterval(o)}),313.37)}},onSubmit:function(){r=this.$refs["web-terminal-input"].value,_.shift(),_.unshift(r),_.unshift(""),k=0,this.loading||("connect"===r?this.connect():"docs"===r||"man"===r||"man tableland"===r?(this.cls(),this.printf(h)):"help"===r?(this.cls(),this.printf(v)):"clear"===r?this.cls():this.ethAddress?"whoami"===r?(this.cls(),this.printf(this.ethAddress)):"mytables"===r||"list"===r||"ls"===r?(this.cls(),this.list()):(this.cls(),this.parseCommand(r)):(this.cls(),this.printf(x.connect)),this.$refs["web-terminal-input"].value="")},init:function(){this.$refs["web-terminal-input"].focus()},parseCommand:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,l,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,r=e.trim().toLowerCase()){n.next=4;break}return n.abrupt("return",t.printf(x.statement));case 4:if(0!==r.indexOf("create")){n.next=8;break}return n.next=7,t.runCreate(e);case 7:return n.abrupt("return");case 8:if(0!==r.indexOf("receipt")){n.next=14;break}return o=r.split(" ").filter((function(e){return e})),l=o[1],n.next=13,t.getReceipt(l);case 13:return n.abrupt("return");case 14:return c=!1,0!==r.indexOf("insert")&&0!==r.indexOf("update")&&0!==r.indexOf("delete")||(c=!0),n.next=18,t.runCommand(e,c);case 18:n.next=24;break;case 20:n.prev=20,n.t0=n.catch(0),t.loading=!1,t.processError(n.t0);case 24:case"end":return n.stop()}}),n,null,[[0,20]])})))()},runCommand:function(e,t){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n.showSpinner(w),o=t?"runWrite":"runRead",r.next=5,n.$store.dispatch(o,e);case 5:if(l=r.sent,n.loading=!1,n.cls(),!(l.data&&l.data.columns&&l.data.rows)){r.next=11;break}return n.printTable(l.data),r.abrupt("return");case 11:n.printf("Result:\n"+JSON.stringify(l,null,4)),r.next=18;break;case 14:r.prev=14,r.t0=r.catch(0),n.loading=!1,n.processError(r.t0);case 18:case"end":return r.stop()}}),r,null,[[0,14]])})))()},runCreate:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.showSpinner(d),n.next=4,t.$store.dispatch("createTable",e);case 4:r=n.sent,t.loading=!1,t.cls(),t.printf("Table Created:\n"+JSON.stringify(r,null,4)),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),t.loading=!1,t.processError(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()},getReceipt:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.showSpinner(m),n.next=4,t.$store.dispatch("getReceipt",e);case 4:r=n.sent,t.loading=!1,t.cls(),t.printf("Transaction Receipt:\n"+JSON.stringify(r,null,4)),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),t.loading=!1,t.processError(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})))()},list:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.showSpinner(),t.next=4,e.$store.dispatch("myTables");case 4:n=t.sent,e.loading=!1,e.cls(),e.printf("Result:\n"+JSON.stringify(n,null,4)),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(0),e.loading=!1,e.processError(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},connect:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.showSpinner("connecting"),t.next=4,e.$store.dispatch("connect");case 4:e.loading=!1,e.cls(),e.printf(f),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),e.loading=!1,e.processError(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()},processError:function(e){if(this.cls(),e.message.includes("address not authorized"))return this.printf(x.address);this.printf("Error:\n"+e.message)}}},C=O,E=(n(924),n(85)),component=Object(E.a)(C,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.ethereum?n("div",{staticClass:"playground-component",on:{"~click":function(t){return e.init.apply(null,arguments)}}},[n("div",{staticClass:"w-full pt-6 flex items-center flex-col rounded-3xl border-2px-black bg-black overflow-hidden"},[n("div",{staticClass:"w-full block"},[n("form",{staticClass:"web-terminal-form relative block w-full text-white font-mono",on:{submit:function(t){return t.preventDefault(),e.onSubmit.apply(null,arguments)}}},[n("input",{ref:"web-terminal-input",staticClass:"pl-8 pr-5 bg-black web-terminal-input block w-full text-white font-mono outline-none",attrs:{type:"text",autocomplete:"off"},on:{keydown:e.keyCheck}}),e._v(" "),n("input",{staticClass:"w-0 hidden",attrs:{type:"submit"}})]),e._v(" "),n("div",{ref:"web-terminal",staticClass:"web-terminal p-5 overflow-y-scroll text-white"},e._l(e.lines,(function(line,i){return n("span",{key:i},[e._v("\n            "+e._s("text"===line.type?line.value:"")+"\n            "),"text"===line.type?n("br"):e._e(),e._v(" "),"table"===line.type?n("table",{staticClass:"table-auto mx-4 border border-solid border-white border-collapse"},[n("thead",[n("tr",e._l(line.columns,(function(col){return n("th",{key:col.name,staticClass:"px-2 border border-white pull-left font-bold"},[e._v("\n                    "+e._s(col.name)+"\n                  ")])})),0)]),e._v(" "),n("tbody",e._l(line.rows,(function(t,r){return n("tr",{key:r},e._l(t,(function(t,r){return n("td",{key:r,staticClass:"px-2 border border-white"},[e._v("\n                    "+e._s(t)+"\n                  ")])})),0)})),0)]):e._e()])})),0)])])]):e._e(),e._v(" "),e.ethereum?e._e():n("div",{staticClass:"playground-component relative"},[n("div",{staticClass:"absolute overlay-disable top-0 bottom-0 left-0 right-0 z-50 rounded-3xl cursor-not-allowed"}),e._v(" "),n("div",{staticClass:"w-full pt-6 flex items-center flex-col rounded-3xl border-2px-black bg-black overflow-hidden"},[n("div",{staticClass:"w-full block"},[n("form",{staticClass:"web-terminal-form relative block w-full text-white font-mono",on:{submit:function(e){return e.preventDefault(),function(){return!1}.apply(null,arguments)}}},[n("input",{ref:"web-terminal-input",staticClass:"pl-8 pr-5 bg-black web-terminal-input block w-full text-white font-mono outline-none",attrs:{type:"text",autocomplete:"off",disabled:"disabled"}})]),e._v(" "),n("div",{ref:"web-terminal",staticClass:"web-terminal p-5 overflow-y-scroll text-white"},e._l(e.lines,(function(line,i){return n("span",{key:i},[e._v("\n            "+e._s("text"===line.type?line.value:"")+"\n            "),"text"===line.type?n("br"):e._e(),e._v(" "),"table"===line.type?n("table",{staticClass:"table-auto mx-4 border border-solid border-white border-collapse"},[n("thead",[n("tr",e._l(line.columns,(function(col){return n("th",{key:col.name,staticClass:"px-2 border border-white pull-left font-bold"},[e._v("\n                    "+e._s(col.name)+"\n                  ")])})),0)]),e._v(" "),n("tbody",e._l(line.rows,(function(t,r){return n("tr",{key:r},e._l(t,(function(t,r){return n("td",{key:r,staticClass:"px-2 border border-white"},[e._v("\n                    "+e._s(t)+"\n                  ")])})),0)})),0)]):e._e()])})),0)])])])])}),[],!1,null,"03a12221",null);t.default=component.exports}}]);