(this["webpackJsonpredux-exercise"]=this["webpackJsonpredux-exercise"]||[]).push([[0],{65:function(e,t,a){e.exports=a(99)},70:function(e,t,a){},72:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),u=(a(70),a(4)),s=a.n(u),l=a(13),i=a(8),m=(a(72),a(10)),p=a(6),f=a(35),d=a.n(f);a(77),a(80);d.a.initializeApp({apiKey:"AIzaSyCIWtOYcNVbkFSc5zeTl1OD5ipu2NPmwiM",authDomain:"chat-app-8976e.firebaseapp.com",databaseURL:"https://chat-app-8976e.firebaseio.com",projectId:"chat-app-8976e",storageBucket:"chat-app-8976e.appspot.com",messagingSenderId:"622522794289",appId:"1:622522794289:web:a089a4b8f033367ac67010",measurementId:"G-Y5ZTFZ215Q"});var h=d.a.auth(),b=d.a.firestore(),E=new d.a.auth.GoogleAuthProvider;E.setCustomParameters({prompt:"select_account"});var v=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=b.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.email,c=new Date,e.prev=9,e.next=12,n.set({email:r,createdAt:c,userName:a});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}(),g=function(e,t,a){return function(){var n=Object(l.a)(s.a.mark((function n(r,c){var o,u;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,h.createUserWithEmailAndPassword(t,a);case 3:return o=n.sent,u=o.user,n.next=7,v(u,e);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}()},O=function(){return function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n,r,c,o,u,l,i,m,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.signInWithPopup(E);case 3:if(n=e.sent,r=n.user,c=r.uid,o=r.displayName,u=r.email,r){e.next=8;break}return e.abrupt("return");case 8:return l=b.doc("users/".concat(c)),e.next=11,l.get();case 11:if((i=e.sent).exists){e.next=17;break}return m=new Date,p=o,e.next=17,l.set({email:u,createdAt:m,userName:p});case 17:return e.abrupt("return",i);case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t,a){return e.apply(this,arguments)}}()},x="USER_LOGIN_SIGNUP",j="USER_LOGOUT",N="USER_INITIALIZE",y="USERNAME_CHANGE",w=function(e){return{type:x,payload:e}},k=a(39),C=Object(k.a)([function(e){return e.user}],(function(e){return e.userInfo})),S=(a(82),function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),s=Object(i.a)(u,2),l=s[0],m=s[1],f=Object(p.c)((function(e){return e})),d=C(f);return Object(n.useEffect)((function(){var e=h.onAuthStateChanged((function(e){e?(o(d.userName),m(!0)):(o("Vistor"),m(!1))}));return function(){e()}})),r.a.createElement("div",{className:"homePageDiv"},r.a.createElement("div",{className:"homePageBody"},l?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"hiName"},"Hi, ",c," !"),r.a.createElement("h2",null,"Choose the Topic"),r.a.createElement("p",null,"You want to talk about")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Choose the Topic"),r.a.createElement("p",null,"You want to talk about")),r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/greeting")},className:"topicGreeting"},r.a.createElement("span",null,"Greeting")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/food")},className:"topicFood"},r.a.createElement("span",null,"Food")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/movie")},className:"topicMovie"},r.a.createElement("span",null,"Movie")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/programming")},className:"topicProgramming"},r.a.createElement("span",null,"Programming")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/outdoor")},className:"topicOutdoor"},r.a.createElement("span",null,"Outdoor Activity")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/traveling")},className:"topicTraveling"},r.a.createElement("span",null,"Traveling")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/school")},className:"topicSchool"},r.a.createElement("span",null,"School")))))}),I=(a(83),a(7)),A="COMMENTLIST_SETUP",P="ADD_NEWCOMMENT",D=function(e){return{type:A,payload:e}},L=function(e){return{type:P,payload:e}},T=Object(k.a)([function(e){return e.comments}],(function(e){return e.commentList})),M=(a(84),function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),c=a[0],o=a[1],u=e.comment;return Object(n.useEffect)((function(){h.onAuthStateChanged((function(e){if(e){var t=e.uid;u.userId===t&&o(r.a.createElement("div",{className:"editDeleteDiv"},r.a.createElement("span",{className:"editButton"},"Edit")," /"," ",r.a.createElement("span",{className:"editButton"},"Delete")))}}))()}),[]),r.a.createElement("li",{className:c?"editableComment userComment":"userComment"},r.a.createElement("p",{className:"commentData"},r.a.createElement("span",{className:"commentNo"},"No.",u.commentNo),r.a.createElement("span",{className:"commentName"},u.userName),r.a.createElement("span",{className:"commentDate"},u.date),r.a.createElement("span",{className:"commentTime"},u.time)),r.a.createElement("div",{className:"commentMessage"},r.a.createElement("p",null,u.message)),c)}),B=(a(85),function(e){var t=Object(p.b)(),a=e.topic,c=Object(n.useState)([]),o=Object(i.a)(c,2),u=o[0],m=o[1],f=a+"BackGround",d=Object(p.c)((function(e){return e})),h=T(d);return Object(n.useEffect)((function(){var e;console.log("page-init"),t((e="chat-"+a,function(){var t=Object(l.a)(s.a.mark((function t(a,n){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=b.collection(e),c=[],t.next=4,r.orderBy("commentNo").get().then((function(e){e.forEach((function(e){var t=e.data();t=Object(I.a)(Object(I.a)({},t),{},{id:e.id}),c.push(t)}))}));case 4:a(D(c));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()));var n=b.collection("chat-"+a).orderBy("commentNo").onSnapshot((function(e){e.docChanges().forEach((function(e){if("added"==e.type){var a=e.doc.data();t(L(a));var n=document.querySelector(".commentListWrapper");n.scrollTop=n.scrollHeight}else e.type}))}));return function(){n(),m([])}}),[]),Object(n.useEffect)((function(){var e=document.querySelector(".commentListWrapper");return e.scrollTop=e.scrollHeight,m(h),function(){return m([])}}),[h]),r.a.createElement("div",{className:"commentListWrapper "+f},r.a.createElement("ul",{className:"commentList"},u.map((function(e){return r.a.createElement(M,{key:e.id,comment:e})}))))}),G=a(120),W=a(118),U=a(121),q=Object(W.a)((function(e){return{button:{margin:e.spacing(1)}}}));function F(e){var t=q();return r.a.createElement(G.a,{variant:"contained",color:"primary",style:{background:"#100c08"},className:t.button,endIcon:null!==e.icon?r.a.createElement(U.a,null,e.icon):null,onClick:e.click},e.text)}a(86);var R=function(e){var t=Object(p.b)(),a=Object(p.c)((function(e){return e.comments})),c=Object(p.c)((function(e){return e.user.userInfo})),o=a.commentList.length+1,u=e.topic;o<10?o="000"+o:o<100?o="00"+o:o<1e3&&(o="0"+o);var m=Object(n.useState)("Visitor"),f=Object(i.a)(m,2),d=f[0],E=f[1],v=Object(n.useState)(""),g=Object(i.a)(v,2),O=g[0],x=g[1],j=Object(n.useState)(o),N=Object(i.a)(j,2),w=N[0],k=N[1],C=Object(n.useState)(!1),S=Object(i.a)(C,2),A=S[0],P=S[1],D=Object(n.useState)(null),L=Object(i.a)(D,2),T=L[0],M=L[1];return Object(n.useEffect)((function(){k(o)}),[a]),Object(n.useEffect)((function(){var e=h.onAuthStateChanged((function(e){e?(E(c.userName),M(c.authId),P(!0)):(E("Vistor"),M(null),P(!1))}));return function(){e()}})),r.a.createElement("div",{className:"inputAreaDiv"},r.a.createElement("form",null,A?r.a.createElement("input",{className:"loginedUserNameInput",readOnly:"readonly",type:"text",value:d}):r.a.createElement("input",{type:"text",placeholder:"Your Name",onChange:function(e){t(function(e){return{type:y,payload:e}}(e.target.value)),E(e.target.value)},value:d}),r.a.createElement("textarea",{placeholder:"Write message",onChange:function(e){x(e.target.value)},value:O,required:!0}),r.a.createElement(F,{text:"send",icon:"send",type:"submit",click:function(e){e.preventDefault();var a=O,n=d;""===a&&(a="No Message"),""===n&&(n="No Name");var r,c,o,i=(new Date).getMonth()+1+"/"+(new Date).getDate()+"/"+(new Date).getFullYear(),m=(new Date).getHours(),p=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes();t((r="chat-"+u,c={commentNo:w,date:i,time:m+":"+p,userName:n,message:a},o=T,function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=b.collection(r),u=c,null!==o&&(u=Object(I.a)(Object(I.a)({},c),{},{userId:o})),e.next=5,n.add(u);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())),console.log("comment TEST"),x("")}})))},Y=function(e){var t=e.match.params.topic;return r.a.createElement("div",{className:"Chat"},r.a.createElement("div",{className:"pageStyle"},r.a.createElement(B,{topic:t}),r.a.createElement(R,{topic:t})))},_=a(28),H=a(57),V=(a(87),function(e){var t=e.handleChange,a=e.label,n=Object(H.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),z=(a(88),function(){var e=Object(n.useState)({email:"",password:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(p.b)(),u=Object(m.f)(),f=a.email,d=a.password,b=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f&&d){e.next=4;break}return alert("Please fill in all fields"),e.abrupt("return");case 4:return e.prev=4,e.next=7,h.signInWithEmailAndPassword(f,d);case 7:return c({email:"",password:""}),e.next=10,h.onAuthStateChanged(function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,v(t);case 3:e.sent.onSnapshot((function(e){o(w({userName:e.data().userName,authId:e.id,isLogin:!0}))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 10:u.push("/redux-exercise/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),E=function(e){var t=e.target,n=t.value,r=t.name;c(Object(I.a)(Object(I.a)({},a),{},Object(_.a)({},r,n)))};return r.a.createElement("div",{className:"loginInputArea"},r.a.createElement("form",null,r.a.createElement(V,{name:"email",type:"email",value:f,handleChange:E,label:"Email",required:!0}),r.a.createElement(V,{name:"password",type:"password",value:d,handleChange:E,label:"Password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(F,{click:b,text:"Login",icon:null}))))}),Z=a(20),J=a(27),K=(a(92),function(){var e=Object(m.f)(),t=Object(p.b)(),a=function(){var a=Object(l.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(O());case 2:if(!a.sent){a.next=7;break}setTimeout((function(){e.push("/redux-exercise/")}),500),a.next=8;break;case 7:return a.abrupt("return");case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"loginPageDiv"},r.a.createElement("div",{className:"loginPageBody"},r.a.createElement("h2",null,"Login"),r.a.createElement("p",null,"Login with your Email Address or",r.a.createElement("br",null),r.a.createElement("span",{className:"googleAccount",onClick:a},"Google Account"),"\xa0",r.a.createElement(Z.a,{icon:J.a})),r.a.createElement("p",null,"If you don't have your account yet,",r.a.createElement("br",null),r.a.createElement("span",{className:"pleaseSignup",onClick:function(){return e.push("/redux-exercise/signup")}},"please Signup"),"\xa0",r.a.createElement(Z.a,{icon:J.a})),r.a.createElement(z,null)))}),Q=(a(93),function(){var e=Object(n.useState)({userName:"",email:"",password:"",confirmPass:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(p.b)(),u=Object(m.f)(),f=a.userName,d=a.email,h=a.password,b=a.confirmPass,E=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f&&d&&h&&b){e.next=4;break}return alert("Please fill in all fields"),e.abrupt("return");case 4:if(!(h.length<6)){e.next=7;break}return alert("Password should be 6 or more characters"),e.abrupt("return");case 7:if(h===b){e.next=10;break}return alert("Passwords don't match"),e.abrupt("return");case 10:return e.prev=10,e.next=13,o(g(f,d,h));case 13:c({userName:"",email:"",password:"",confirmPass:""}),u.push("/redux-exercise/"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(t){return e.apply(this,arguments)}}(),v=function(e){var t=e.target,n=t.value,r=t.name;c(Object(I.a)(Object(I.a)({},a),{},Object(_.a)({},r,n)))};return Object(n.useEffect)((function(){console.log(a)})),r.a.createElement("div",{className:"loginInputArea"},r.a.createElement("form",null,r.a.createElement(V,{name:"userName",type:"text",value:f,handleChange:v,label:"Name",required:!0}),r.a.createElement(V,{name:"email",type:"email",value:d,handleChange:v,label:"Email",required:!0}),r.a.createElement(V,{name:"password",type:"password",value:h,handleChange:v,label:"Password",required:!0}),r.a.createElement(V,{name:"confirmPass",type:"password",value:b,handleChange:v,label:"Confirm Password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(F,{text:"Signup",icon:null,click:E}))))}),$=(a(94),function(){var e=Object(m.f)(),t=Object(p.b)(),a=function(){var a=Object(l.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(O());case 2:if(!a.sent){a.next=7;break}setTimeout((function(){e.push("/redux-exercise/")}),500),a.next=8;break;case 7:return a.abrupt("return");case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"signupPageDiv"},r.a.createElement("div",{className:"signupPageBody"},r.a.createElement("h2",null,"Signup"),r.a.createElement("p",null,"Signup with your Email Address or",r.a.createElement("br",null),r.a.createElement("span",{className:"googleAccount",onClick:a},"Google Account"),"\xa0",r.a.createElement(Z.a,{icon:J.a})),r.a.createElement(Q,null)))}),X=a(125),ee=a(122),te=a(124),ae=a(123),ne=a(48),re=a.n(ne),ce=(a(95),Object(W.a)((function(e){return{root:{flexGrow:1,position:"fixed",width:"100%",zIndex:100},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontFamily:"'Dancing Script', cursive",fontWeight:600,fontSize:"2rem"}}})));function oe(){var e=Object(n.useState)("Chat Place"),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],l=u[1],f=Object(p.b)(),d=ce();h.onAuthStateChanged((function(e){l(!!e)}));var b=Object(m.f)();return Object(n.useEffect)((function(){return b.listen((function(e){var t=e.pathname;t="/redux-exercise"===t||"/redux-exercise/"===t||"/"===t||""===t?"Chat Place":t.slice(t.lastIndexOf("/")+1),c(t)}))})),r.a.createElement("div",{className:d.root},r.a.createElement(X.a,{position:"static",style:{background:"#100c08"}},r.a.createElement(ee.a,null,"Chat Place"!==a?r.a.createElement(ae.a,{edge:"start",className:d.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return b.push("/redux-exercise/")}},r.a.createElement(re.a,null)):r.a.createElement(ae.a,{edge:"start",className:d.menuButton,style:{color:"#100c08",cursor:"inherit"},"aria-label":"menu"},r.a.createElement(re.a,null)),r.a.createElement(te.a,{variant:"h6",className:d.title},a),s?r.a.createElement(G.a,{color:"inherit",onClick:function(){h.signOut(),f({type:x})}},"Logout"):r.a.createElement(G.a,{color:"inherit",onClick:function(){return b.push("/redux-exercise/login")}},"Login"))))}var ue=a(49),se=(a(98),function(){return r.a.createElement("footer",{className:"pageFooter"},r.a.createElement("div",{className:"nameAndCopyDiv"},r.a.createElement("p",{className:"footerCopyright"},"\xa9 2020 Tomohiro Yoshida. All Rights Reserved")),r.a.createElement("ul",{className:"contactList"},r.a.createElement("li",{className:"linkedinItem"},r.a.createElement("a",{href:"https://www.linkedin.com/in/tomohiro-yoshida-a8320816a/"},r.a.createElement(Z.a,{icon:ue.b}))),r.a.createElement("li",{className:"githubItem"},r.a.createElement("a",{href:"https://github.com/TOMO-YOSHI"},r.a.createElement(Z.a,{icon:ue.a}))),r.a.createElement("li",{className:"mailItem"},r.a.createElement("a",{href:"mailto: tyoshida01@mylangara.ca"},r.a.createElement(Z.a,{icon:J.b})))))});var le=function(){var e=Object(p.b)(),t=(Object(p.c)((function(e){return e})),Object(n.useState)({userInfo:{userName:"Visitor",authId:null,isLogin:!1}})),a=Object(i.a)(t,2);return a[0],a[1],Object(n.useEffect)((function(){var t=h.onAuthStateChanged(function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,v(a);case 3:n=t.sent,setTimeout((function(){n.get().then(function(){var t=Object(l.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a.data()),t.next=3,a.data().userName;case 3:r=t.sent,e(w({userName:r,authId:n.id,isLogin:!0}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),500),t.next=8;break;case 7:e({type:N});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return function(){t()}}),[w]),r.a.createElement("div",{className:"App"},r.a.createElement(oe,null),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/redux-exercise",component:S}),r.a.createElement(m.a,{path:"/redux-exercise/chat/:topic",component:Y}),r.a.createElement(m.a,{path:"/redux-exercise/login",component:K}),r.a.createElement(m.a,{path:"/redux-exercise/signup",component:$})),r.a.createElement(se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=a(22),me=a(25),pe=a(34),fe={commentList:[]},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(I.a)(Object(I.a)({},e),{},{commentList:t.payload});case P:return Object(I.a)(Object(I.a)({},e),{},{commentList:[].concat(Object(pe.a)(e.commentList),[t.payload])});default:return e}},he={userInfo:{userName:"Visitor",authId:null,isLogin:!1}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(I.a)(Object(I.a)({},e),{},{userInfo:t.payload});case y:return Object(I.a)(Object(I.a)({},e),{},{userInfo:Object(I.a)(Object(I.a)({},e.userInfo),{},{userName:t.payload})});case j:return he;default:return e}},Ee=Object(me.c)({comments:de,user:be}),ve=[a(56).a],ge=Object(me.d)(Ee,me.a.apply(void 0,ve));o.a.render(r.a.createElement(p.a,{store:ge},r.a.createElement(ie.a,null,r.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.febe6e08.chunk.js.map