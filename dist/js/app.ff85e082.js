(function(t){function n(n){for(var i,r,o=n[0],c=n[1],d=n[2],l=0,p=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(n);while(p.length)p.shift()();return s.push.apply(s,d||[]),e()}function e(){for(var t,n=0;n<s.length;n++){for(var e=s[n],i=!0,o=1;o<e.length;o++){var c=e[o];0!==a[c]&&(i=!1)}i&&(s.splice(n--,1),t=r(r.s=e[0]))}return t}var i={},a={app:0},s=[];function r(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)r.d(e,i,function(n){return t[n]}.bind(null,i));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var d=0;d<o.length;d++)n(o[d]);var u=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"395a":function(t,n,e){"use strict";e("a683")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("header",[e("div",{staticClass:"title"},[t._v(t._s(t.title))])]),e("section",{staticClass:"main-content w-50 mx-auto"},[e("main-navigation"),e("windows-list")],1)])},s=[],r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"nav nav-tabs"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t._v("Windows")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link disabled",attrs:{href:"#",tabindex:"-1","aria-disabled":"true"}},[t._v("Rooms")])])])}],c={name:"MainNavigation"},d=c,u=e("2877"),l=Object(u["a"])(d,r,o,!1,null,null,null),p=l.exports,w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"windows-list pt-3"},t._l(t.windows,(function(n){return e("windows-list-item",{key:n.id,attrs:{window:n},on:{"window-updated":t.updateWindow}})})),1)},f=[],v=(e("c740"),e("a434"),e("96cf"),e("1da1")),m=e("bc3a"),b=e.n(m),h="http://localhost:8090",_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"window border border-secondary rounded p-2 mb-2",class:{expanded:t.isExpanded}},[e("div",{staticClass:"top-row d-flex",on:{click:t.toggleExpand}},[e("div",{staticClass:"window-name fw-bold pe-3"},[t._v(t._s(t.window.name))]),e("div",{staticClass:"room-name text-muted"},[t._v(t._s(t.window.roomName))]),e("div",{staticClass:"open-status ms-4",class:{open:t.isWindowOpen,closed:!t.isWindowOpen}},[t.isWindowOpen?[e("span",{staticClass:"icon"},[t._v("⬤")]),t._v(" Open ")]:[e("span",{staticClass:"icon"},[t._v("✖")]),t._v(" Closed ")]],2),e("div",{staticClass:"expand-button ms-auto"},[t._v(" "+t._s(t.isExpanded?"▼":"►")+" ")])]),t.isExpanded?[e("hr"),e("div",{staticClass:"details d-flex"},[e("button",{staticClass:"btn btn-secondary me-2",attrs:{type:"button"},on:{click:t.switchWindow}},[t._v(t._s(t.isWindowOpen?"Close":"Open")+" window")]),e("button",{staticClass:"btn btn-danger disabled",attrs:{type:"button"}},[t._v("Delete window")])])]:t._e()],2)},x=[],g=(e("99af"),{name:"WindowsListItem",props:["window"],data:function(){return{isExpanded:!1}},computed:{isWindowOpen:function(){return"OPEN"===this.window.windowStatus}},methods:{toggleExpand:function(){this.isExpanded=!this.isExpanded},switchWindow:function(){var t=this;return Object(v["a"])(regeneratorRuntime.mark((function n(){var e,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,b.a.put("".concat(h,"/api/windows/").concat(t.window.id,"/switch"));case 2:e=n.sent,i=e.data,t.$emit("window-updated",i);case 5:case"end":return n.stop()}}),n)})))()}}}),O=g,y=(e("d786"),Object(u["a"])(O,_,x,!1,null,"00cc2ab8",null)),C=y.exports,j={components:{WindowsListItem:C},name:"WindowsList",data:function(){return{windows:[]}},created:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("".concat(h,"/api/windows"));case 2:n=t.sent,e=n.data,this.windows=e;case 5:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),methods:{updateWindow:function(t){var n=this.windows.findIndex((function(n){return n.id===t.id}));this.windows.splice(n,1,t)}}},E=j,W=Object(u["a"])(E,w,f,!1,null,null,null),k=W.exports,P={name:"App",components:{MainNavigation:p,WindowsList:k},data:function(){return{title:"My App Title"}}},M=P,$=(e("395a"),Object(u["a"])(M,a,s,!1,null,"3aa95010",null)),S=$.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(S)}}).$mount("#app")},a683:function(t,n,e){},ba56:function(t,n,e){},d786:function(t,n,e){"use strict";e("ba56")}});
//# sourceMappingURL=app.ff85e082.js.map