webpackJsonp([1],{0:function(e,t){},FIgK:function(e,t){},KF9L:function(e,t){},LicG:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("+VlJ"),r={data:function(){return{activeIndex2:"0",user:""}},computed:{currentUser:function(){return this.$store.getters.currentUser},isLogin:function(){return this.$store.getters.isLogin}},methods:{logout:function(){console.log(1),this.$router.push("/"),this.$store.dispatch("setUser",null)}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-header",{staticStyle:{height:"65px"}},[a("el-row",[a("el-col",{attrs:{xs:10,sm:10,md:8,lg:6,xl:4}},[a("div",{staticClass:"navbar-header pull-left hidden-xs hidden-sm"},[a("a",{staticClass:"navbar-brand no-padding"},[a("span",{staticClass:"navbar-title pull-left logo"},[e._v("LOGO")])])])]),e._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:e.isLogin,expression:"isLogin"}],staticClass:"fontSize",attrs:{xs:2,sm:2,md:2,lg:2,xl:2,id:"logout"}},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link"},[e._v("\n          "+e._s(e.currentUser)+"\n          "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{nativeOn:{click:function(t){return e.logout(t)}}},[a("i",{staticClass:"el-icon-menu",staticStyle:{"margin-right":"5px"}}),e._v("退出\n          ")]),e._v(" "),a("el-dropdown-item",[a("i",{staticClass:"el-icon-star-on",staticStyle:{"margin-right":"5px"}}),e._v(" "),a("a",{staticClass:"a-new",staticStyle:{color:"'#111'","text-decoration":"none"},attrs:{target:"_blank",href:"https://github.com/chengheai/mongodb-vue"}},[e._v("github")])])],1)],1)],1)],1)],1)},staticRenderFns:[]};var i={name:"App",components:{appHeader:a("C7Lr")(r,n,!1,function(e){a("rKXw")},null,null).exports},data:function(){return{title:"LOL英雄"}}},s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("app-header"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var l=a("C7Lr")(i,s,!1,function(e){a("KF9L")},null,null).exports,c=a("KGCO"),d=a("aA9S"),u=a.n(d),m=a("lC5x"),f=a.n(m),p=a("J0Oq"),g=a.n(p),h=a("rVsN"),v=a.n(h),b=a("aozt"),F=a.n(b),y=F.a.create({baseURL:"http://localhost:12000",timeout:5e3});y.interceptors.request.use(function(e){return e.headers={"Content-Type":"application/json"},e},function(e){return console.log(e),v.a.reject(e)}),y.interceptors.response.use(function(e){return e},function(e){return console.log("err"+e),v.a.reject(e)});var _=y;var w,x,k,C,$,L,S,A,V=(w=g()(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.post("/api/user/register",t));case 1:case"end":return e.stop()}},e,this)})),function(e){return w.apply(this,arguments)}),z=(x=g()(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.post("/api/user/login",t));case 1:case"end":return e.stop()}},e,this)})),function(e){return x.apply(this,arguments)}),W=(k=g()(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.get("/api/hero",{params:t}));case 1:case"end":return e.stop()}},e,this)})),function(e){return k.apply(this,arguments)}),N=(C=g()(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.put("/api/hero/"+t._id,t));case 1:case"end":return e.stop()}},e,this)})),function(e){return C.apply(this,arguments)}),U=($=g()(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.post("/api/hero",t));case 1:case"end":return e.stop()}},e,this)})),function(e){return $.apply(this,arguments)}),D=(L=g()(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.delete("/api/hero/"+t,t));case 1:case"end":return e.stop()}},e,this)})),function(e){return L.apply(this,arguments)}),I=(S=g()(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.put("/api/addpic/"+t.id,t));case 1:case"end":return e.stop()}},e,this)})),function(e){return S.apply(this,arguments)}),P=(A=g()(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",_.get("/api/hero/"+t,t));case 1:case"end":return e.stop()}},e,this)})),function(e){return A.apply(this,arguments)}),E={name:"list",data:function(){return{tableData:[],addFormVisible:!1,modifyFormVisible:!1,addpicVisible:!1,modifyId:"",addpicId:"",addpicform:{url:""},addForm:{name:"",nickname:"",sex:"",address:"",dowhat:"",favourite:"",explain:""},modifyForm:{name:"",nickname:"",sex:"",address:"",dowhat:"",favourite:"",explain:"",update_at:Date.now},formLabelWidth:"120px",loading:!1,currentPage:1,dataTotal:0,pageSize:10,pageSizes:[10,20,30,40]}},methods:{handleSizeChange:function(e){this.pageSize=e,this.getAll(),console.log("每页 "+e+" 条")},handleCurrentChange:function(e){this.currentPage=e,this.getAll(),console.log("当前页: "+e)},jungleSex:function(e){return"man"==e?"汉子":"woman"==e?"妹子":""},add:function(){this.addFormVisible=!0},addSure:function(){var e=this,t=this;this.addFormVisible=!1;var a=this.addForm;console.log(a),U(a).then(function(a){console.log(a),e.$message({message:"添加成功",type:"success",onClose:function(){t.getAll()}})}).catch(function(e){console.log(e)})},closeAdd:function(){this.addForm.name="",this.addForm.nickname="",this.addForm.sex="",this.addForm.address="",this.addForm.dowhat="",this.addForm.name="",this.addForm.explain=""},modify:function(e){this.modifyFormVisible=!0,this.modifyForm=u()({},e),console.log(this.modifyForm),this.modifyId=e._id},modifySure:function(){var e=this,t=this;N(this.modifyForm).then(function(a){console.log(a),e.modifyFormVisible=!1,e.$message({message:"修改成功",type:"修改成功",onClose:function(){t.getAll()}})}).catch(function(e){console.log(e)})},deleteDate:function(e){var t=this,a=this,o=e;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){D(o).then(function(e){console.log("res:",e),t.$message({type:"success",message:"删除成功!"}),a.getAll()}).catch(function(e){t.$message({type:"error",message:"删除失败!"}),console.log(e)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},getAll:function(){var e=this;this.loading=!0;var t={pageSize:this.pageSize,currentPage:this.currentPage};W(t).then(function(t){console.log(t),e.loading=!1,e.tableData=t.data,e.dataTotal=parseInt(t.headers["x-header"])}).catch(function(t){e.loading=!1,console.log(t)})},toDetail:function(e){this.$router.push("/league/"+e)},addPic:function(e){this.addpicId=e,this.addpicVisible=!0},closePicAdd:function(){this.addpicform.url=""},addpicSure:function(){var e=this;if(this.addpicform.url.trim()){var t={url:this.addpicform.url,id:this.addpicId};I(t).then(function(t){e.addpicVisible=!1,e.$notify({title:"成功",message:"添加图片成功",type:"success"})}).catch(function(t){e.$notify.error({title:"错误",message:"添加图片失败"}),console.log(t)})}else this.$notify.error({title:"错误",message:"请输入正确的图片地址"})}},mounted:function(){this.getAll()}},O={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"list",staticStyle:{"margin-top":"10px"}},[a("el-row",{staticClass:"table-handle"},[a("el-button",{staticClass:"addBtn",attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.add}},[e._v("添加")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"","element-loading-text":"拼命加载中","header-row-class-name":"tableHeader","empty-text":"亲，暂时没有数据哦"}},[a("el-table-column",{attrs:{fixed:"",prop:"nickname",label:"英雄",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名字",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"性别",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.jungleSex(t.row.sex))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"籍贯",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"dowhat",label:"位置",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"favourite",label:"台词",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"400"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-row",[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){e.toDetail(t.row._id)}}},[e._v("详情")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"success"},on:{click:function(a){e.modify(t.row)}}},[e._v("修改")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){e.deleteDate(t.row._id)}}},[e._v("删除")]),e._v(" "),a("el-button",{attrs:{type:"warning",size:"small"},on:{click:function(a){e.addPic(t.row._id)}}},[e._v("添加图片")])],1)]}}])})],1),e._v(" "),e.tableData.length>0?a("el-pagination",{staticClass:"my-pagination",attrs:{"current-page":e.currentPage,"page-sizes":e.pageSizes,"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.dataTotal},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e(),e._v(" "),a("el-dialog",{staticClass:"addArea",attrs:{title:"新增数据",visible:e.addFormVisible,modal:"","custom-class":"addFormArea"},on:{"update:visible":function(t){e.addFormVisible=t},close:e.closeAdd}},[a("el-form",{staticClass:"addForm",attrs:{model:e.addForm}},[a("el-form-item",{attrs:{label:"名字","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"英雄","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.nickname,callback:function(t){e.$set(e.addForm,"nickname",t)},expression:"addForm.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth}},[a("el-select",{staticClass:"sexArea",attrs:{placeholder:"请选择性别"},model:{value:e.addForm.sex,callback:function(t){e.$set(e.addForm,"sex",t)},expression:"addForm.sex"}},[a("el-option",{attrs:{label:"汉子",value:"man"}}),e._v(" "),a("el-option",{attrs:{label:"妹子",value:"woman"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"籍贯","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.address,callback:function(t){e.$set(e.addForm,"address",t)},expression:"addForm.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"位置","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.dowhat,callback:function(t){e.$set(e.addForm,"dowhat",t)},expression:"addForm.dowhat"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"台词","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.favourite,callback:function(t){e.$set(e.addForm,"favourite",t)},expression:"addForm.favourite"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"背景","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.explain,callback:function(t){e.$set(e.addForm,"explain",t)},expression:"addForm.explain"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addSure}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"addArea",attrs:{title:"修改数据",visible:e.modifyFormVisible,modal:"","custom-class":"addFormArea"},on:{"update:visible":function(t){e.modifyFormVisible=t}}},[a("el-form",{staticClass:"addForm",attrs:{model:e.modifyForm}},[a("el-form-item",{attrs:{label:"名字","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.modifyForm.name,callback:function(t){e.$set(e.modifyForm,"name",t)},expression:"modifyForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"英雄","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.modifyForm.nickname,callback:function(t){e.$set(e.modifyForm,"nickname",t)},expression:"modifyForm.nickname"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"性别","label-width":e.formLabelWidth}},[a("el-select",{staticClass:"sexArea",attrs:{placeholder:"请选择性别"},model:{value:e.modifyForm.sex,callback:function(t){e.$set(e.modifyForm,"sex",t)},expression:"modifyForm.sex"}},[a("el-option",{attrs:{label:"男",value:"man"}}),e._v(" "),a("el-option",{attrs:{label:"女",value:"woman"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"籍贯","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.modifyForm.address,callback:function(t){e.$set(e.modifyForm,"address",t)},expression:"modifyForm.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"位置","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.modifyForm.dowhat,callback:function(t){e.$set(e.modifyForm,"dowhat",t)},expression:"modifyForm.dowhat"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"台词","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.modifyForm.favourite,callback:function(t){e.$set(e.modifyForm,"favourite",t)},expression:"modifyForm.favourite"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"背景","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.modifyForm.explain,callback:function(t){e.$set(e.modifyForm,"explain",t)},expression:"modifyForm.explain"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.modifyFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.modifySure}},[e._v("确 定")])],1)],1),e._v(" "),a("el-dialog",{staticClass:"addPicArea",attrs:{title:"添加图片",visible:e.addpicVisible},on:{"update:visible":function(t){e.addpicVisible=t},close:e.closePicAdd}},[a("el-form",{attrs:{model:e.addpicform}},[a("el-form-item",{attrs:{label:"图片地址","label-width":e.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addpicform.url,callback:function(t){e.$set(e.addpicform,"url",t)},expression:"addpicform.url"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addpicVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.addpicSure}},[e._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var j=a("C7Lr")(E,O,!1,function(e){a("FIgK")},null,null).exports,K={name:"detail",data:function(){return{imgArr:[],name:"",flag:"",explain:""}},methods:{getMessage:function(e){var t=this;P(e).then(function(e){t.imgArr=e.data.imgArr,t.name=e.data.name,t.flag=e.data.favourite,t.explain=e.data.explain}).catch(function(e){console.log(e)})},goback:function(){this.$router.go(-1)}},mounted:function(){this.getMessage(this.$route.params.name)}},T={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detail"},[a("el-button",{staticClass:"goback",attrs:{type:"success",icon:"el-icon-arrow-left"},on:{click:e.goback}},[e._v("返回上一页")]),e._v(" "),a("el-carousel",{attrs:{interval:2e3,type:"card",height:"300px","indicator-position":"outside"}},e._l(e.imgArr,function(e,t){return a("el-carousel-item",{key:t},[a("img",{staticClass:"imgClass",attrs:{src:e,alt:""}})])}),1),e._v(" "),a("p",{staticClass:"heroName"},[e._v(e._s(e.name)+" ● "+e._s(e.flag))]),e._v(" "),a("div",[e._v(e._s(e.explain))])],1)},staticRenderFns:[]};var R=a("C7Lr")(K,T,!1,function(e){a("Zd87")},"data-v-a4089eb2",null).exports,M={data:function(){var e=this;return{loginForm:{userName:"guest",password:"guest"},rules:{userName:[{validator:function(t,a,o){""===a?o(new Error("请输入账号")):(e.loginForm.userName,o())},trigger:"blur"}],password:[{validator:function(t,a,o){""===a?o(new Error("请输入密码")):(e.loginForm.password,o())},trigger:"blur"}]}}},methods:{submitForm:function(e,t){var a=this,o=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(a.loginForm.userName),console.log(a.loginForm.password),1===t?V(o.loginForm).then(function(e){1e3===e.data.status?a.$message({message:e.data.message,type:"success"}):a.$message({message:e.data.message,type:"warning"})}):z(o.loginForm).then(function(e){1e3===e.data.status?(a.$message({message:e.data.message,type:"success"}),a.$store.dispatch("setUser",a.loginForm.userName),a.$router.push("/list")):(a.$message({message:e.data.message,type:"warning"}),a.$store.dispatch("setUser",null))})})}}},G={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-box"},[a("el-form",{ref:"loginForm",staticClass:"demo-ruleForm",attrs:{model:e.loginForm,"status-icon":"",rules:e.rules}},[a("el-form-item",{attrs:{prop:"userName"}},[a("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"登录账号"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"password",inline:"true"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.submitForm("loginForm")}}},[a("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"登录密码"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),e._v(" "),a("el-form-item",[a("el-button",{staticClass:"login-btn",attrs:{type:"danger"},on:{click:function(t){e.submitForm("loginForm",1)}}},[e._v("注册")]),e._v(" "),a("el-button",{staticClass:"login-btn",staticStyle:{"margin-top":"10px","margin-left":"0"},attrs:{type:"primary"},on:{click:function(t){e.submitForm("loginForm",2)}}},[e._v("立即登录")])],1)],1)],1)},staticRenderFns:[]};var H=a("C7Lr")(M,G,!1,function(e){a("lyIe")},"data-v-fdab453e",null).exports;o.default.use(c.a);var B=new c.a({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"Login",component:H},{path:"/list",name:"List",component:j},{path:"/league/:name",name:"Detail",component:R}]}),J=a("OolZ"),Z=a("9rMa");o.default.use(Z.a);var q=new Z.a.Store({state:{currentUser:null,isLogin:!1},getters:{currentUser:function(e){return e.currentUser},isLogin:function(e){return e.isLogin}},mutations:{userStatus:function(e,t){t?(e.currentUser=t,e.isLogin=!0):(e.currentUser=null,e.isLogin=!1)}},actions:{setUser:function(e,t){(0,e.commit)("userStatus",t)}}}),X=a("DVuL"),Q=a.n(X);a("LicG");o.default.config.productionTip=!1,o.default.prototype.http=F.a,o.default.use(Q.a),o.default.use(J.a),B.beforeEach(function(e,t,a){console.log(!1===q.getters.isLogin),"/login"==e.path?a():!0===q.getters.isLogin?a():(Q.a.Message({message:"大哥，你还没有登录哦，请先登录！",type:"warning"}),a("/login"))}),new o.default({el:"#app",router:B,store:q,components:{App:l},template:"<App/>"})},Zd87:function(e,t){},lyIe:function(e,t){},rKXw:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7cedf1f0856bd2c2b19a.js.map