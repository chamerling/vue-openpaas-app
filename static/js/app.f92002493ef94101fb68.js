webpackJsonp([1],{"/4fN":function(t,e){},"2KCu":function(t,e){},C5c8:function(t,e){},Fq6u:function(t,e){},NHnr:function(t,e,M){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};M.d(i,"sample",function(){return Z});var s=M("7+uW"),n=M("3EgV"),N=M.n(n),u=M("Rf8U"),a=M.n(u),o=M("mtWM"),L=M.n(o),c=M("Dd8w"),j=M.n(c),r=M("NYxO"),T={render:function(){var t=this,e=t.$createElement,M=t._self._c||e;return M("v-menu",{attrs:{"close-on-content-click":!0,"nudge-width":200,bottom:"","offset-y":""}},[M("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[M("v-icon",[t._v("apps")])],1),t._v(" "),M("v-card",[M("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[M("v-layout",{attrs:{row:"",wrap:""}},[M("v-flex",{attrs:{xs4:"","d-flex":""}},[M("v-icon",{attrs:{large:"",color:"blue"},on:{click:function(e){t.goTo("Home")}}},[t._v("home")])],1),t._v(" "),M("v-flex",{attrs:{xs4:"","d-flex":""}},[M("v-icon",{attrs:{large:"",color:"blue"},on:{click:function(e){t.goTo("VideoConference")}}},[t._v("video_call")])],1),t._v(" "),M("v-flex",{attrs:{xs4:"","d-flex":""}},[M("v-icon",{attrs:{large:"",color:"blue"}},[t._v("settings")])],1)],1)],1)],1)],1)},staticRenderFns:[]},l=M("VU/8")({data:function(){return{}},methods:{goTo:function(t){this.$router.push({name:t})}}},T,!1,null,null,null).exports,D={name:"user-menu",methods:{logout:function(){var t=this;this.$store.dispatch("session/logout").then(function(){t.$router.push({name:"Login"})})},nightMode:function(){this.$store.dispatch("ui/nightModeSwitch")}},computed:j()({},Object(r.b)({getUserAvatarUrl:"session/getUserAvatarUrl",getUserName:"session/getUserName",getUserEmail:"session/getUserEmail",isNightMode:"ui/isNightMode"}))},w={render:function(){var t=this,e=t.$createElement,M=t._self._c||e;return M("v-menu",{attrs:{bottom:"",left:"","offset-y":""}},[M("v-avatar",{attrs:{slot:"activator",size:"32px"},slot:"activator"},[t.getUserAvatarUrl?M("img",{attrs:{src:t.getUserAvatarUrl}}):M("v-icon",[t._v("account_circle")])],1),t._v(" "),M("v-list",[M("v-list-tile",[M("v-list-tile-content",[M("v-list-tile-title",{staticClass:"title"},[t._v(t._s(t.getUserName))]),t._v(" "),M("v-list-tile-sub-title",[t._v(t._s(t.getUserEmail))])],1)],1),t._v(" "),M("v-divider"),t._v(" "),M("v-list-tile",{on:{click:function(t){t.preventDefault()}}},[M("v-list-tile-title",[t._v("Profile")])],1),t._v(" "),M("v-divider"),t._v(" "),M("v-list-tile",{on:{click:function(t){t.preventDefault()}}},[M("v-list-tile-title",[t._v("Settings")])],1),t._v(" "),M("v-list-tile",{on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[M("v-list-tile-title",[t._v("Log out")])],1),t._v(" "),M("v-divider"),t._v(" "),M("v-list-tile",{attrs:{avatar:""},on:{click:function(e){return e.preventDefault(),t.nightMode(e)}}},[M("v-list-tile-content",[M("v-list-tile-title",[t._v("Night mode")])],1),t._v(" "),M("v-list-tile-action",[M("v-icon",{attrs:{id:"moon",color:"grey lighten-1"}},[t._v("brightness_2")])],1)],1)],1)],1)},staticRenderFns:[]};var C=M("VU/8")(D,w,!1,function(t){M("Fq6u")},"data-v-b9e753a8",null).exports,z={data:function(){return{interval:null}},computed:Object(r.c)({notificationsCount:function(t){return t.usernotifications.unread}}),methods:{updateNotifications:function(){this.$store.dispatch("usernotifications/fetchUnreadNotificationsCount")}},created:function(){var t=this;this.updateNotifications(),this.interval=setInterval(function(){t.updateNotifications()},3e4)},beforeDestroy:function(){clearInterval(this.interval)}},g={render:function(){var t=this,e=t.$createElement,M=t._self._c||e;return M("v-btn",{attrs:{icon:""},on:{click:t.updateNotifications}},[M("v-badge",{attrs:{color:"red",overlap:""}},[t.notificationsCount?M("span",{attrs:{slot:"badge"},slot:"badge"},[t._v(t._s(t.notificationsCount))]):t._e(),t._v(" "),M("v-icon",[t._v("notifications")])],1)],1)},staticRenderFns:[]},d=M("VU/8")(z,g,!1,null,null,null).exports,y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-list",[e("v-list-tile",{on:{click:function(t){}}},[e("v-list-tile-action",[e("v-icon",[this._v("settings")])],1),this._v(" "),e("v-list-tile-content",[e("v-list-tile-title",[this._v("Settings")])],1)],1)],1)},staticRenderFns:[]},O=M("VU/8")({name:"Sidebar"},y,!1,null,null,null).exports,x={name:"Home",computed:j()({},Object(r.c)("ui",["snackbar"]))},k={render:function(){var t=this,e=t.$createElement,M=t._self._c||e;return M("v-snackbar",{attrs:{color:t.snackbar.color,timeout:t.snackbar.timeout},model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[t._v("\n  "+t._s(t.snackbar.message)+"\n  "),M("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.snackbar.show=!1}}},[t._v("Close")])],1)},staticRenderFns:[]};var v=M("VU/8")(x,k,!1,function(t){M("C5c8")},null,null).exports,E={name:"App",data:function(){return{drawer:!0}},created:function(){var t=this;this.$auth.ready(function(){t.$store.dispatch("session/fetchUser")})},methods:{},computed:j()({},Object(r.b)("ui",["isNightMode","getMainColor"])),components:{ApplicationsMenu:l,UserMenu:C,NotificationIcon:d,Sidebar:O,Snackbar:v}},S={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"openpaas",dark:t.isNightMode}},[t.$auth.ready()?i("div",[t.$auth.check()?i("v-navigation-drawer",{attrs:{clipped:"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("sidebar")],1):t._e(),t._v(" "),t.$auth.check()?i("v-toolbar",{attrs:{color:t.getMainColor,dark:"","clipped-left":"",app:"",fixed:""}},[i("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),i("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[i("img",{staticClass:"hidden-sm-and-down",attrs:{id:"header-logo",src:M("w+8n")}})]),t._v(" "),i("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","prepend-icon":"search",label:"Search"}}),t._v(" "),i("v-spacer"),t._v(" "),i("notification-icon"),t._v(" "),i("applications-menu"),t._v(" "),i("user-menu")],1):t._e(),t._v(" "),i("v-content",[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-layout",{attrs:{"justify-center":"","align-center":""}},[i("router-view")],1)],1)],1)],1):t._e(),t._v(" "),t.$auth.ready()?t._e():i("div",[i("v-progress-circular",{attrs:{indeterminate:"",size:50,color:"primary"}})],1),t._v(" "),i("snackbar")],1)},staticRenderFns:[]};var Q=M("VU/8")(E,S,!1,function(t){M("2KCu")},"data-v-30188cee",null).exports,f=M("/ocq"),I={name:"Home",computed:j()({},Object(r.b)("session",["getUserName"]))},m={render:function(){var t=this.$createElement;return(this._self._c||t)("span",[this._v("Hello "+this._s(this.getUserName))])},staticRenderFns:[]},Y=M("VU/8")(I,m,!1,null,null,null).exports,U={name:"VideoConference",data:function(){return{videoConference:null,loaded:!1}},computed:j()({},Object(r.b)("session",["getUserName","getUserAvatarUrl","getUserEmail"])),methods:{openConference:function(t){var e=this;this.videoConference=new JitsiMeetExternalAPI("janus.hubl.in",{roomName:t,parentNode:this.$refs.jitsivideo,configOverwrite:{enableClosePage:!1},interfaceConfigOverwrite:{SHOW_JITSI_WATERMARK:!1,SHOW_BRAND_WATERMARK:!1,SHOW_WATERMARK_FOR_GUESTS:!1,TOOLBAR_BUTTONS:["microphone","camera","closedcaptions","desktop","fullscreen","fodeviceselection","hangup","profile","chat","recording","livestreaming","etherpad","sharedvideo","settings","raisehand","videoquality","filmstrip","invite","feedback","stats","shortcuts","tileview"]},onload:function(t){e.loaded=!0}}),this.videoConference.on("videoConferenceJoined",function(){e.videoConference.executeCommand("avatarUrl",e.getUserAvatarUrl),e.videoConference.executeCommand("displayName",e.getUserName),e.videoConference.executeCommand("email",e.getUserEmail)}),this.videoConference.on("readyToClose",function(){e.videoConference.dispose(),e.videoConference=null})}},mounted:function(){this.openConference("OpenPaaSJitsi")}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"video"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.loaded,expression:"loaded"}],ref:"jitsivideo",attrs:{id:"jitsi"}}),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.loaded,expression:"!loaded"}],staticClass:"text-xs-center"},[e("v-progress-circular",{attrs:{indeterminate:"indeterminate",color:"amber",size:50}}),e("div",{staticClass:"title pa-3"},[this._v("Loading conference...")])],1)])},staticRenderFns:[]};var p=M("VU/8")(U,h,!1,function(t){M("/4fN")},"data-v-a90be588",null).exports,A={data:function(){return{logMeIn:!1,email:null,password:null}},computed:j()({},Object(r.b)("ui",["isNightMode","getMainColor"])),methods:{login:function(){var t=this;this.logMeIn=!0,this.$auth.login({url:"api/jwt/generate",auth:{username:this.email,password:this.password},rememberMe:!1,redirect:{name:"Home"}}).then(function(e){return t.$store.dispatch("session/setJWTToken",e.data),t.$store.dispatch("session/fetchUser"),e.data}).catch(function(e){t.$store.dispatch("ui/displaySnackbar",{message:"Login error, please retry"})}).finally(function(){setTimeout(function(){return t.logMeIn=!1},300)})}}},_={render:function(){var t=this,e=t.$createElement,M=t._self._c||e;return M("v-content",[M("v-container",{attrs:{fluid:"","fill-height":""}},[M("v-layout",{attrs:{"align-center":"","justify-center":""}},[M("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[M("v-card",{staticClass:"elevation-12"},[M("v-toolbar",{attrs:{dark:t.isNightMode,color:t.getMainColor}},[M("v-toolbar-title",[t._v("OpenPaaS Login")])],1),t._v(" "),M("v-card-text",[M("v-form",[M("v-text-field",{attrs:{"prepend-icon":"person",name:"login",label:"Login",type:"text"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),M("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),M("v-card-actions",[M("v-spacer"),t._v(" "),M("v-btn",{attrs:{disabled:t.logMeIn,loading:t.logMeIn},on:{click:t.login}},[t._v("Login")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]},J=M("VU/8")(A,_,!1,null,null,null).exports;s.default.use(f.a);var b,R,W=new f.a({routes:[{path:"/",name:"Home",component:Y,meta:{auth:!0}},{path:"/conference",name:"VideoConference",component:p,meta:{auth:!0}},{path:"/login",name:"Login",component:J,meta:{auth:!1}}]}),Z=function(t,e){(0,t.commit)("MUTATION_SAMPLE",e)},G=M("UjVw"),B=(M("sax8"),[]),P=M("bOdI"),F=M.n(P),V=F()({},"MUTATION_SAMPLE",function(t,e){t.sample=e}),H=M("//Fk"),K=M.n(H),$="AUTHENTICATED",X="AUTHENTICATING",q="FETCH_USER",tt="SET_JWT_TOKEN",et={namespaced:!0,state:{jwtToken:localStorage.getItem("default_auth_token"),user:null},getters:{getUserAvatarUrl:function(t,e,M){return t.user&&t.user._id&&M.baseUrl+"/api/users/"+t.user._id+"/profile/avatar"},getUserName:function(t){return t.user&&t.user.firstname+" "+t.user.lastname},getUserEmail:function(t){return t.user&&t.user.preferredEmail}},actions:{login:function(t){var e=t.commit;e(X,!0),e($,!0)},logout:function(t){var e=t.dispatch;return new K.a(function(t){s.default.auth.logout(),e("resetSession"),t()})},resetSession:function(t){var e=t.commit,M=t.dispatch;e(q,{}),M("setJWTToken",null)},fetchUser:function(t){var e=t.commit;s.default.axios.get("api/user").then(function(t){e(q,t.data)})},fetchJWToken:function(){s.default.axios.post("api/jwt/generate").then(function(t){return t.data})},setJWTToken:function(t,e){(0,t.commit)(tt,e)}},mutations:(b={},F()(b,$,function(t,e){t.authenticated=e}),F()(b,X,function(t,e){t.authenticating=e}),F()(b,q,function(t,e){t.user=e}),F()(b,tt,function(t,e){t.jwtToken=e}),b)},Mt="SWITCH_NIGHT_MODE",it="SHOW_SNACKBAR",st={namespaced:!0,state:{nightMode:JSON.parse(localStorage.getItem("night_mode")),snackbar:{color:"red",message:null,timeout:5e3}},getters:{isNightMode:function(t){return!!t.nightMode},getMainColor:function(t,e){return e.isNightMode?"black":"blue"}},actions:{nightModeSwitch:function(t){(0,t.commit)(Mt)},displaySnackbar:function(t,e){(0,t.commit)(it,e)}},mutations:(R={},F()(R,Mt,function(t){t.nightMode=!t.nightMode,localStorage.setItem("night_mode",t.nightMode)}),F()(R,it,function(t,e){e.show=!0,s.default.set(t,"snackbar",e)}),R)},nt="FETCH_UNREAD_NOTIFICATIONS_COUNT",Nt={namespaced:!0,state:{unread:0},getters:{},actions:{fetchUnreadNotificationsCount:function(t){var e=t.commit;s.default.axios.get("api/user/notifications/unread").then(function(t){e(nt,t.data.unread_count)})}},mutations:F()({},nt,function(t,e){t.unread=e})};s.default.use(r.a);var ut=new r.a.Store({modules:{session:et,ui:st,usernotifications:Nt},state:{baseUrl:Object({NODE_ENV:"production"}).OPENPAAS||"https://openpaas.linagora.com",sample:0},actions:i,getters:G,mutations:V,plugins:B,strict:!1});M("tLzU");s.default.use(N.a),s.default.use(a.a,L.a),s.default.router=W,L.a.defaults.baseURL=ut.state.baseUrl,s.default.config.productionTip=!1,s.default.use(M("MLZB"),{auth:M("jGO9"),http:M("E/+Z"),router:M("LFDJ"),refreshData:{enabled:!1},fetchData:{url:"api/user",method:"GET",enabled:!0}}),new s.default({el:"#app",router:W,store:ut,components:{App:Q},template:"<App/>"})},UjVw:function(t,e){},jGO9:function(t,e){t.exports={request:function(t,e){this.options.http._setHeaders.call(this,t,{Authorization:"Bearer  "+e})},response:function(t){if(t.request.responseURL.endsWith("jwt/generate"))return t.data}}},tLzU:function(t,e){},"w+8n":function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iNjUxLjA0NnB4IiBoZWlnaHQ9IjE2MnB4IiB2aWV3Qm94PSIwIDAgNjUxLjA0NiAxNjIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDY1MS4wNDYgMTYyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJUeXBlIj4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNjQyLjgzNCw2Mi42ODZsLTExLjY5OSwxMC4zM2MtNC4xMTEtNS43MTYtOC4yOTctOC41OC0xMi41NTktOC41OGMtMi4wNzYsMC0zLjc2OCwwLjU1Ny01LjA5LDEuNjY1DQoJCQkJYy0xLjMxNiwxLjExMy0xLjk4LDIuMzY2LTEuOTgsMy43NTdjMCwxLjM5MiwwLjQ3MywyLjcwOSwxLjQxNCwzLjk1YzEuMjgzLDEuNjU0LDUuMTQ4LDUuMjEzLDExLjU5NCwxMC42NjcNCgkJCQljNi4wMzEsNS4wNDMsOS42ODgsOC4yMywxMC45NzMsOS41NDNjMy4xOTksMy4yMzQsNS40NzMsNi4zMzIsNi44MTQsOS4yODFjMS4zMzgsMi45NjEsMi4wMDgsNi4xODQsMi4wMDgsOS42ODQNCgkJCQljMCw2LjgxNC0yLjM1NCwxMi40MzktNy4wNjYsMTYuODgzYy00LjcwOSw0LjQzOC0xMC44NDgsNi42NTYtMTguNDIyLDYuNjU2Yy01LjkxNCwwLTExLjA2My0xLjQ0Ny0xNS40NTMtNC4zNDYNCgkJCQljLTQuMzg5LTIuODk1LTguMTQ4LTcuNDUxLTExLjI3My0xMy42NmwxMy4yODktOC4wMThjMy45OTIsNy4zMzgsOC41OTIsMTEuMDEsMTMuNzkzLDExLjAxYzIuNzE1LDAsNC45OTQtMC43OTEsNi44NDItMi4zNzENCgkJCQljMS44NDYtMS41ODQsMi43NzEtMy40MDQsMi43NzEtNS40NzdjMC0xLjg4NS0wLjcwMS0zLjc2NC0yLjA5Ni01LjY0NmMtMS4zOTUtMS44NzktNC40NjktNC43Ni05LjIxNy04LjYzOQ0KCQkJCWMtOS4wNTEtNy4zNzEtMTQuODk1LTEzLjA2Ni0xNy41MzUtMTcuMDc0Yy0yLjYzOS00LjAxLTMuOTU1LTguMDA2LTMuOTU1LTExLjk5NmMwLTUuNzU5LDIuMTk1LTEwLjY5OSw2LjU4NC0xNC44MTQNCgkJCQljNC4zOTMtNC4xMjEsOS44MDctNi4xODMsMTYuMjUtNi4xODNjNC4xNDYsMCw4LjA5NCwwLjk1OCwxMS44NDIsMi44OEM2MzQuNDA1LDU0LjEwNiw2MzguNDY3LDU3LjYwOCw2NDIuODM0LDYyLjY4NnoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01NjkuNDYzLDczLjAxNmgxNS40MXY2MS40MTdoLTE1LjQxdi02LjQ5MmMtMy4wMDgsMi44NTktNi4wMjEsNC45Mi05LjA1MSw2LjE4Ng0KCQkJCWMtMy4wMjMsMS4yNTgtNi4zMDUsMS44ODktOS44MzgsMS44ODljLTcuOTMyLDAtMTQuNzg5LTMuMDc2LTIwLjU4LTkuMjI5Yy01Ljc4NS02LjE1NC04LjY4Mi0xMy44MDUtOC42ODItMjIuOTQzDQoJCQkJYzAtOS40ODQsMi43OTktMTcuMjU4LDguNDAyLTIzLjMxNmM1LjYtNi4wNTksMTIuMzk4LTkuMDg4LDIwLjQwNC05LjA4OGMzLjY4OCwwLDcuMTQ1LDAuNjk2LDEwLjM3MywyLjA4OA0KCQkJCWMzLjIzMiwxLjM5Myw2LjIyNSwzLjQ4NCw4Ljk3MSw2LjI2OVY3My4wMTZMNTY5LjQ2Myw3My4wMTZ6IE01NTMuMjYyLDg1LjY2NGMtNC43NjQsMC04LjcxOSwxLjY4Mi0xMS44NjUsNS4wNTMNCgkJCQljLTMuMTU0LDMuMzY3LTQuNzI3LDcuNjg4LTQuNzI3LDEyLjk1M2MwLDUuMzA1LDEuNiw5LjY3Miw0LjgwNywxMy4wOThjMy4yMDUsMy40MjYsNy4xNTYsNS4xNDEsMTEuODQ0LDUuMTQxDQoJCQkJYzQuODQ0LDAsOC44NTUtMS42ODksMTIuMDM3LTUuMDU1YzMuMTkxLTMuMzczLDQuNzg1LTcuNzgxLDQuNzg1LTEzLjI0YzAtNS4zNDQtMS41OTQtOS42NjYtNC43ODUtMTIuOTgNCgkJCQlDNTYyLjE3NCw4Ny4zMTgsNTU4LjEzOSw4NS42NjQsNTUzLjI2Miw4NS42NjR6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDk2LjAzNCw3My4wMTZoMTUuNDE2djYxLjQxN2gtMTUuNDE2di02LjQ5MmMtMy4wMDgsMi44NTktNi4wMiw0LjkyLTkuMDQ1LDYuMTg2DQoJCQkJYy0zLjAyOSwxLjI1OC02LjMwNSwxLjg4OS05Ljg0NCwxLjg4OWMtNy45MjYsMC0xNC43ODctMy4wNzYtMjAuNTgtOS4yMjljLTUuNzg1LTYuMTU0LTguNjgyLTEzLjgwNS04LjY4Mi0yMi45NDMNCgkJCQljMC05LjQ4NCwyLjgwMS0xNy4yNTgsOC4zOTgtMjMuMzE2YzUuNjA0LTYuMDU5LDEyLjQwMi05LjA4OCwyMC40MS05LjA4OGMzLjY4OCwwLDcuMTQ1LDAuNjk2LDEwLjM3MywyLjA4OA0KCQkJCWMzLjIzMiwxLjM5Myw2LjIyOSwzLjQ4NCw4Ljk2NSw2LjI2OXYtNi43NzhoMC4wMDRWNzMuMDE2eiBNNDc5LjgzOCw4NS42NjRjLTQuNzY2LDAtOC43MjcsMS42ODItMTEuODcxLDUuMDUzDQoJCQkJYy0zLjE1NCwzLjM2Ny00LjcyOSw3LjY4OC00LjcyOSwxMi45NTNjMCw1LjMwNSwxLjYwMiw5LjY3Miw0LjgwOSwxMy4wOThjMy4yMTEsMy40MjYsNy4xNTQsNS4xNDEsMTEuODQ0LDUuMTQxDQoJCQkJYzQuODQsMCw4Ljg1NS0xLjY4OSwxMi4wMzctNS4wNTVjMy4xODktMy4zNzMsNC43ODUtNy43ODEsNC43ODUtMTMuMjRjMC01LjM0NC0xLjU5Ni05LjY2Ni00Ljc4NS0xMi45OA0KCQkJCUM0ODguNzQ1LDg3LjMxOCw0ODQuNzEzLDg1LjY2NCw0NzkuODM4LDg1LjY2NHoiLz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0zOTAuNDg1LDUxLjM5OWgxNi43N2M5LjA2NiwwLDE1LjYwNywwLjg0LDE5LjYxNywyLjUxYzQuMDAyLDEuNjc1LDcuMTY2LDQuMzgzLDkuNDc5LDguMTMNCgkJCQljMi4zMTgsMy43NDcsMy40NzUsOC4yMzEsMy40NzUsMTMuNDZjMCw1Ljc5Ny0xLjUxNiwxMC42MTUtNC41NDUsMTQuNDUzYy0zLjAyMywzLjgzOC03LjEzOSw2LjUxNC0xMi4zMzIsOC4wMTgNCgkJCQljLTMuMDUxLDAuODY3LTguNjAyLDEuMjk3LTE2LjY1LDEuMjk3djM1LjE3aC0xNS44MTFWNTEuMzk5SDM5MC40ODV6IE00MDYuMjkyLDgzLjg1NWg1LjAyNWMzLjk0OSwwLDYuNjk1LTAuMjgzLDguMjQyLTAuODQ2DQoJCQkJYzEuNTQxLTAuNTY4LDIuNzU2LTEuNTA0LDMuNjQxLTIuODA2YzAuODgzLTEuMzA3LDEuMzI2LTIuODc5LDEuMzI2LTQuNzNjMC0zLjIwNy0xLjI0Mi01LjU1MS0zLjcyNS03LjAyMQ0KCQkJCWMtMS44MTQtMS4wOTgtNS4xNTQtMS42NDUtMTAuMDQ3LTEuNjQ1aC00LjQ2M1Y4My44NTVMNDA2LjI5Miw4My44NTV6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzIyLjM2Niw3My4wMTZoMTUuNDA4djYuMjk0YzMuNDk2LTIuOTQzLDYuNjY0LTQuOTkzLDkuNTAyLTYuMTQ1YzIuODM2LTEuMTUxLDUuNzM2LTEuNzI5LDguNzA3LTEuNzI5DQoJCQkJYzYuMDg2LDAsMTEuMjU2LDIuMTI1LDE1LjUwMiw2LjM4MWMzLjU2OCwzLjYxMSw1LjM1NSw4Ljk1Myw1LjM1NSwxNi4wMjl2NDAuNTg4aC0xNS4yMzh2LTI2Ljg5NQ0KCQkJCWMwLTcuMzI4LTAuMzMtMTIuMTk3LTAuOTg0LTE0LjYwNGMtMC42NTgtMi40MDgtMS44MDMtNC4yMzgtMy40MzYtNS40OThjLTEuNjMzLTEuMjYyLTMuNjUtMS44ODktNi4wNTUtMS44ODkNCgkJCQljLTMuMTE1LDAtNS43OTEsMS4wNDMtOC4wMjEsMy4xMjdjLTIuMjM4LDIuMDg2LTMuNzg1LDQuOTcxLTQuNjUyLDguNjUyYy0wLjQ0OSwxLjkyMi0wLjY3NCw2LjA3NC0wLjY3NCwxMi40NjF2MjQuNjQzaC0xNS40MDkNCgkJCQlMMzIyLjM2Niw3My4wMTZMMzIyLjM2Niw3My4wMTZ6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMzEyLjc4LDEwOC4xODhoLTQ5LjUwNGMwLjcxMSw0LjM2MSwyLjYyMyw3LjgzNiw1LjcyOSwxMC40MTZjMy4xMDQsMi41NzQsNy4wNjQsMy44NjMsMTEuODgzLDMuODYzDQoJCQkJYzUuNzU4LDAsMTAuNzA3LTIuMDE0LDE0Ljg0Ni02LjAzN2wxMi45ODUsNi4wOThjLTMuMjM3LDQuNTg4LTcuMTE0LDcuOTg0LTExLjYzMSwxMC4xODhjLTQuNTE3LDIuMjA1LTkuODc5LDMuMzAzLTE2LjA4OCwzLjMwMw0KCQkJCWMtOS42MzQsMC0xNy40NzktMy4wNDEtMjMuNTQtOS4xMTVjLTYuMDU5LTYuMDcyLTkuMDg4LTEzLjY4OS05LjA4OC0yMi44MzJjMC05LjM3MywzLjAyMS0xNy4xNDgsOS4wNjEtMjMuMzQ0DQoJCQkJYzYuMDQzLTYuMTkxLDEzLjYxMi05LjI4NiwyMi43MjEtOS4yODZjOS42NzIsMCwxNy41MzcsMy4wOTQsMjMuNTk5LDkuMjg2YzYuMDU4LDYuMTkyLDkuMDg5LDE0LjM2OCw5LjA4OSwyNC41MjQNCgkJCQlMMzEyLjc4LDEwOC4xODh6IE0yOTcuMzcxLDk2LjA0OWMtMS4wMTctMy40MjItMy4wMjItNi4yMDktNi4wMjEtOC4zNTVjLTIuOTk4LTIuMTQxLTYuNDc5LTMuMjE3LTEwLjQzNy0zLjIxNw0KCQkJCWMtNC4yOTUsMC04LjA2NSwxLjIwMy0xMS4zMDgsMy42MTNjLTIuMDM3LDEuNTA0LTMuOTIyLDQuMTU4LTUuNjU0LDcuOTU5SDI5Ny4zNzF6Ii8+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTkzLjEyLDczLjAxNnY2Ljc3NmMyLjc4Ni0yLjc4Myw1Ljc5NC00Ljg3Niw5LjAzMi02LjI2OWMzLjIzNS0xLjM5Myw2LjY5OC0yLjA4OCwxMC4zODYtMi4wODgNCgkJCQljOC4wMTYsMCwxNC44MjksMy4wMywyMC40MzQsOS4wODhjNS42MDgsNi4wNjIsOC40MTQsMTMuODMsOC40MTQsMjMuMzE0YzAsOS4xNDMtMi45LDE2Ljc5MS04LjY5MSwyMi45NDUNCgkJCQljLTUuNzk2LDYuMTQ4LTEyLjY2Nyw5LjIyOS0yMC42MDUsOS4yMjljLTMuNTM4LDAtNi44My0wLjYzMS05Ljg3OC0xLjg5MWMtMy4wNDgtMS4yNjYtNi4wNzktMy4zMjItOS4wODgtNi4xODR2MjguOTU3aC0xNS4yOTcNCgkJCQlWNzMuMDExTDE5My4xMiw3My4wMTZMMTkzLjEyLDczLjAxNnogTTIwOS4zMTcsODUuNjY0Yy00Ljg1NCwwLTguODc5LDEuNjUyLTEyLjA3OCw0Ljk2N2MtMy4xOTgsMy4zMTMtNC43OTgsNy42MzktNC43OTgsMTIuOTc5DQoJCQkJYzAsNS40NjEsMS42MDEsOS44NzEsNC43OTgsMTMuMjQyYzMuMTk4LDMuMzY3LDcuMjI0LDUuMDU1LDEyLjA3OCw1LjA1NWM0LjcwNSwwLDguNjY2LTEuNzE1LDExLjg4NS01LjE0MQ0KCQkJCWMzLjIxOC0zLjQyNiw0LjgyNS03Ljc5Myw0LjgyNS0xMy4wOThjMC01LjI3LTEuNTc5LTkuNTg2LTQuNzQyLTEyLjk1MUMyMTguMTI3LDg3LjM0NiwyMTQuMTM2LDg1LjY2NCwyMDkuMzE3LDg1LjY2NHoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjxnIGlkPSJMb2dvIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNC41MTUsNDkuMzExYzExLjc0OSwwLDIxLjg1NCw0LjI1LDMwLjMwNSwxMi43NTRjOC40NTcsOC41MDYsMTIuNjgzLDE4Ljg3MywxMi42ODMsMzEuMTA1DQoJCQljMCwxMi4xMTctNC4xNzIsMjIuMzczLTEyLjUxMSwzMC43NjZjLTguMzQyLDguMzk1LTE4LjQ2LDEyLjU5LTMwLjM2MiwxMi41OWMtMTIuNDYzLDAtMjIuODItNC4zMDktMzEuMDY4LTEyLjkyNg0KCQkJcy0xMi4zNy0xOC44NTUtMTIuMzctMzAuNzA3YzAtNy45NDMsMS45MjItMTUuMjQ2LDUuNzU5LTIxLjkwMmMzLjg0My02LjY2NCw5LjEyNi0xMS45NDEsMTUuODQ2LTE1LjgzOA0KCQkJQzEwOS41MTgsNTEuMjU5LDExNi43NTgsNDkuMzExLDEyNC41MTUsNDkuMzExeiBNMTI0LjM0OSw2NC43NzRjLTcuNjg2LDAtMTQuMTQ2LDIuNjc2LTE5LjM4NCw4LjAxOQ0KCQkJYy01LjIzNyw1LjM0Ny03Ljg1NCwxMi4xMzktNy44NTQsMjAuMzc1YzAsOS4xODYsMy4yOTcsMTYuNDQ3LDkuODkxLDIxLjc5MWM1LjEyMiw0LjE4LDEwLjk5OSw2LjI2OCwxNy42MjgsNi4yNjgNCgkJCWM3LjQ5NiwwLDEzLjg4Mi0yLjcwOSwxOS4xNTQtOC4xMzFjNS4yNzctNS40MTYsNy45MTQtMTIuMDk2LDcuOTE0LTIwLjAzOWMwLTcuODk4LTIuNjU4LTE0LjU5LTcuOTY3LTIwLjA2Ng0KCQkJQzEzOC40MTcsNjcuNTE0LDEzMS45NTUsNjQuNzc0LDEyNC4zNDksNjQuNzc0eiIvPg0KCQk8Zz4NCgkJCTxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik01Mi42NDYsOTkuNTI1YzYuMjY5LDAsMTEuMzcsNS4xMDIsMTEuMzcsMTEuMzcxYzAsNi4yNzEtNS4xMDEsMTEuMzczLTExLjM3LDExLjM3Mw0KCQkJCWMtNi4yNzEsMC0xMS4zNzMtNS4xMDQtMTEuMzczLTExLjM3M1M0Ni4zNzUsOTkuNTI1LDUyLjY0Niw5OS41MjUgTTUyLjY0Niw5MS4zMDNjLTEwLjgyMSwwLTE5LjU5NCw4Ljc3MS0xOS41OTQsMTkuNTk0DQoJCQkJczguNzcyLDE5LjU5NiwxOS41OTQsMTkuNTk2YzEwLjgyLDAsMTkuNTkxLTguNzcxLDE5LjU5MS0xOS41OTZTNjMuNDY2LDkxLjMwMyw1Mi42NDYsOTEuMzAzTDUyLjY0Niw5MS4zMDN6Ii8+DQoJCTwvZz4NCgkJPGc+DQoJCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNNDYuMjAxLDE4LjgwN2MxNC4yMDQsMCwyNS43NiwxMS41NTcsMjUuNzYsMjUuNzYyUzYwLjQwNCw3MC4zMyw0Ni4yMDEsNzAuMzMNCgkJCQljLTE0LjIwNSwwLTI1Ljc2MS0xMS41NTgtMjUuNzYxLTI1Ljc2MUMyMC40MzksMzAuMzY0LDMxLjk5NywxOC44MDcsNDYuMjAxLDE4LjgwNyBNNDYuMjAxLDUuMTA2DQoJCQkJYy0yMS43OTYsMC0zOS40NjMsMTcuNjY4LTM5LjQ2MywzOS40NjNzMTcuNjY3LDM5LjQ2MiwzOS40NjMsMzkuNDYyYzIxLjc5NSwwLDM5LjQ2Mi0xNy42NjcsMzkuNDYyLTM5LjQ2Mg0KCQkJCVM2Ny45OTYsNS4xMDYsNDYuMjAxLDUuMTA2TDQ2LjIwMSw1LjEwNnoiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"}},["NHnr"]);
//# sourceMappingURL=app.f92002493ef94101fb68.js.map