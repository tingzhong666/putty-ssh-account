(function(e){function t(t){for(var r,s,o=t[0],u=t[1],c=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0592":function(e,t,n){"use strict";var r=n("5458"),a=n.n(r);a.a},"1b93":function(e,t,n){"use strict";var r=n("26dd"),a=n.n(r);a.a},"26dd":function(e,t,n){},5458:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"card"},[n("div",{staticClass:"title"},[e._v("PUTTY账号管理")]),n("div",{directives:[{name:"show",rawName:"v-show",value:!!e.msg,expression:"!!msg"}],staticClass:"msg",domProps:{textContent:e._s(e.msg)}}),n("div",{staticClass:"exe-path"},[n("label",{attrs:{for:"exe"}},[e._v("putty.exe路径*：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.exePath,expression:"exePath"}],attrs:{name:"exe",type:"text"},domProps:{value:e.exePath},on:{input:function(t){t.target.composing||(e.exePath=t.target.value)}}})]),n("List",{ref:"list",attrs:{list:e.list},on:{change:e.change}}),n("Editor",e._b({on:{change:e.ed}},"Editor",e.infor,!1)),n("button",{staticClass:"submit",on:{click:e.submit}},[e._v("save and connect")])],1)])},i=[],s=(n("d3b7"),n("3ca3"),n("ddb0"),n("5530")),o=n("3835"),u=(n("96cf"),n("1da1")),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component"},[n("button",{class:{active:-1===e.index},on:{click:function(t){return e.change(-1)}}},[e._v("+新增")]),e._l(e.list,(function(t,r){return n("button",{key:r,class:{active:r===e.index},domProps:{textContent:e._s(t.remark||t.ip)},on:{click:function(t){return e.change(r)}}})}))],2)},l=[],p={data:function(){return{index:-1,isInit:!0}},props:{list:{type:Array,default:function(){return[]}}},watch:{list:function(e,t){e.length&&this.isInit&&(this.index=0,this.isInit=!1)},index:{handler:function(e,t){this.$emit("change",e)},immediate:!0}},methods:{change:function(e){this.index=e}}},f=p,d=(n("0592"),n("2877")),h=Object(d["a"])(f,c,l,!1,null,"3d62a4ae",null),m=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component"},[n("div",{staticClass:"label"},[e._v("ip*：")]),n("input",{attrs:{name:"ip",type:"text"},domProps:{value:e.ip},on:{input:function(t){return e.change(t,"ip")}}}),n("div",{staticClass:"label"},[e._v("username：")]),n("input",{attrs:{name:"username",type:"text"},domProps:{value:e.username},on:{input:function(t){return e.change(t,"username")}}}),n("div",{staticClass:"label"},[e._v("password*：")]),n("input",{attrs:{name:"password",type:"text"},domProps:{value:e.password},on:{input:function(t){return e.change(t,"password")}}}),n("div",{staticClass:"label"},[e._v("port：")]),n("input",{attrs:{name:"port",type:"Number"},domProps:{value:e.port},on:{input:function(t){return e.change(t,"port")}}}),n("div",{staticClass:"label"},[e._v("备注：")]),n("input",{attrs:{name:"remark",type:"text"},domProps:{value:e.remark},on:{input:function(t){return e.change(t,"remark")}}})])},g=[],x=(n("a9e3"),{props:{ip:{type:String,default:""},username:{type:String,default:""},password:{type:String,default:""},port:{type:Number,default:22},remark:{type:String,default:""}},methods:{change:function(e,t){var n=e.target.value;"port"===t&&(n*=1),this.$emit("change",t,n)}}}),b=x,w=(n("1b93"),Object(d["a"])(b,v,g,!1,null,"23524342",null)),y=w.exports,P=n("bc3a"),O=n.n(P);O.a.defaults.baseURL="/";var _={data:function(){return{list:[],exePath:"",infor:{ip:"",password:"",username:"",port:22,remark:""},msg:"",index:-1}},components:{List:m,Editor:y},methods:{setInfor:function(e){for(var t in this.infor)this.infor[t]=e[t]},clearInfor:function(){this.infor={ip:"",password:"",username:"",port:22,remark:""}},ed:function(e,t){this.infor[e]=t},init:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,localStorage.getItem("list");case 2:return t.t0=t.sent,t.next=5,localStorage.getItem("exePath");case 5:return t.t1=t.sent,n=[t.t0,t.t1],t.next=9,Promise.all(n);case 9:if(r=t.sent,a=Object(o["a"])(r,2),i=a[0],s=a[1],i){t.next=20;break}return t.next=16,e.storage([]);case 16:return e.list=[],e.clearInfor(),e.exePath="",t.abrupt("return");case 20:e.list=JSON.parse(i),e.exePath=s||"",e.list.length?(e.setInfor(e.list[0]),e.index=0):e.clearInfor();case 23:case"end":return t.stop()}}),t)})))()},change:function(e){this.index=e,-1===e?this.clearInfor():this.infor=this.list[e]},submit:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(localStorage.setItem("exePath",e.exePath),-1!==e.index){t.next=6;break}return t.next=4,e.addSave();case 4:t.next=8;break;case 6:return t.next=8,e.save();case 8:e.connect();case 9:case"end":return t.stop()}}),t)})))()},addSave:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.list.push(e.infor),t.next=3,e.storage(e.list);case 3:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.list[e.index]=e.infor,t.next=3,e.storage(e.list);case 3:case"end":return t.stop()}}),t)})))()},connect:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O.a.post("/connect",Object(s["a"])(Object(s["a"])({},e.infor),{},{path:e.exePath}));case 2:n=t.sent,e.msg=n.data.msg,1===n.data.code&&-1===e.index&&e.$refs.list.change(e.list.length-1);case 5:case"end":return t.stop()}}),t)})))()},storage:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,localStorage.setItem("list",JSON.stringify(e));case 2:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.init();case 1:case"end":return t.stop()}}),t)})))()}},k=_,j=(n("7faf"),Object(d["a"])(k,a,i,!1,null,null,null)),S=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(S)}}).$mount("#app")},"7faf":function(e,t,n){"use strict";var r=n("a47e"),a=n.n(r);a.a},a47e:function(e,t,n){}});
//# sourceMappingURL=app.1081aeee.js.map