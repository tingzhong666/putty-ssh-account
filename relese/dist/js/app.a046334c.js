(function(t){function e(e){for(var r,s,o=e[0],u=e[1],c=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0592":function(t,e,n){"use strict";var r=n("5458"),a=n.n(r);a.a},"1b93":function(t,e,n){"use strict";var r=n("26dd"),a=n.n(r);a.a},"26dd":function(t,e,n){},5458:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"title"},[t._v("PUTTY账号管理")]),n("div",{directives:[{name:"show",rawName:"v-show",value:!!t.msg,expression:"!!msg"}],staticClass:"msg",domProps:{textContent:t._s(t.msg)}}),n("div",{staticClass:"exe-path"},[n("label",{attrs:{for:"exe"}},[t._v("putty.exe路径*：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.exePath,expression:"exePath"}],attrs:{name:"exe",type:"text"},domProps:{value:t.exePath},on:{input:function(e){e.target.composing||(t.exePath=e.target.value)}}})]),n("List",{ref:"list",attrs:{list:t.list},on:{change:t.change}}),n("Editor",t._b({on:{change:t.ed}},"Editor",t.infor,!1)),n("button",{staticClass:"submit",on:{click:t.submit}},[t._v("save and connect")])],1)])},i=[],s=n("5530"),o=(n("96cf"),n("1da1")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("button",{class:{active:-1===t.index},on:{click:function(e){return t.change(-1)}}},[t._v("+新增")]),t._l(t.list,(function(e,r){return n("button",{key:r,class:{active:r===t.index},domProps:{textContent:t._s(e.remark||e.ip)},on:{click:function(e){return t.change(r)}}})}))],2)},c=[],l={data:function(){return{index:-1,isInit:!0}},props:{list:{type:Array,default:function(){return[]}}},watch:{list:function(t,e){t.length&&this.isInit&&(this.index=0,this.isInit=!1)},index:{handler:function(t,e){this.$emit("change",t)},immediate:!0}},methods:{change:function(t){this.index=t}}},p=l,d=(n("0592"),n("2877")),f=Object(d["a"])(p,u,c,!1,null,"3d62a4ae",null),h=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component"},[n("div",{staticClass:"label"},[t._v("ip*：")]),n("input",{attrs:{name:"ip",type:"text"},domProps:{value:t.ip},on:{input:function(e){return t.change(e,"ip")}}}),n("div",{staticClass:"label"},[t._v("username：")]),n("input",{attrs:{name:"username",type:"text"},domProps:{value:t.username},on:{input:function(e){return t.change(e,"username")}}}),n("div",{staticClass:"label"},[t._v("password*：")]),n("input",{attrs:{name:"password",type:"text"},domProps:{value:t.password},on:{input:function(e){return t.change(e,"password")}}}),n("div",{staticClass:"label"},[t._v("port：")]),n("input",{attrs:{name:"port",type:"Number"},domProps:{value:t.port},on:{input:function(e){return t.change(e,"port")}}}),n("div",{staticClass:"label"},[t._v("备注：")]),n("input",{attrs:{name:"remark",type:"text"},domProps:{value:t.remark},on:{input:function(e){return t.change(e,"remark")}}})])},v=[],g=(n("a9e3"),{props:{ip:{type:String,default:""},username:{type:String,default:""},password:{type:String,default:""},port:{type:Number,default:22},remark:{type:String,default:""}},methods:{change:function(t,e){var n=t.target.value;"port"===e&&(n*=1),this.$emit("change",e,n)}}}),b=g,x=(n("1b93"),Object(d["a"])(b,m,v,!1,null,"23524342",null)),w=x.exports,y=n("bc3a"),_=n.n(y);_.a.defaults.baseURL="/";var P={data:function(){return{list:[],exePath:"",infor:{ip:"",password:"",username:"",port:22,remark:"",id:null},msg:"",index:-1}},components:{List:h,Editor:w},methods:{setInfor:function(t){for(var e in this.infor)this.infor[e]=t[e]},clearInfor:function(){this.infor={ip:"",password:"",username:"",port:22,remark:"",id:null}},ed:function(t,e){this.infor[t]=e},init:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("/list");case 2:n=e.sent,t.exePath=n.data.data.path,t.list=n.data.data.list,t.list.length&&t.setInfor(t.list[0]);case 6:case"end":return e.stop()}}),e)})))()},change:function(t){this.index=t,-1===t?this.clearInfor():this.infor=this.list[t]},submit:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_.a.post("/connect",Object(s["a"])(Object(s["a"])({},t.infor),{},{path:t.exePath}));case 2:n=e.sent,t.msg=n.data.msg,1===n.data.code&&(t.exePath=n.data.data.path,t.list=n.data.data.list),1===n.data.code&&-1===t.index&&t.$refs.list.change(t.list.length-1);case 6:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.init();case 1:case"end":return e.stop()}}),e)})))()}},O=P,j=(n("7faf"),Object(d["a"])(O,a,i,!1,null,null,null)),k=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(k)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";var r=n("a47e"),a=n.n(r);a.a},a47e:function(t,e,n){}});
//# sourceMappingURL=app.a046334c.js.map