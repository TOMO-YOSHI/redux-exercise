(this["webpackJsonpredux-exercise"]=this["webpackJsonpredux-exercise"]||[]).push([[0],{65:function(e,t,a){e.exports=a(98)},70:function(e,t,a){},72:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),o=a.n(c),u=(a(70),a(4)),s=a.n(u),l=a(11),i=(a(72),a(7)),m=a(8),p=a(34),f=a.n(p);a(77),a(80);f.a.initializeApp({apiKey:"AIzaSyCIWtOYcNVbkFSc5zeTl1OD5ipu2NPmwiM",authDomain:"chat-app-8976e.firebaseapp.com",databaseURL:"https://chat-app-8976e.firebaseio.com",projectId:"chat-app-8976e",storageBucket:"chat-app-8976e.appspot.com",messagingSenderId:"622522794289",appId:"1:622522794289:web:a089a4b8f033367ac67010",measurementId:"G-Y5ZTFZ215Q"});var d=f.a.auth(),h=f.a.firestore(),b=new f.a.auth.GoogleAuthProvider;b.setCustomParameters({prompt:"select_account"});var g="USER_LOGIN_SIGNUP",E="USER_LOGOUT",v="USER_INITIALIZE",x=function(e){return{type:g,payload:e}},N=function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=h.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.email,c=new Date,e.prev=9,e.next=12,n.set({email:r,createdAt:c,userName:a});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}(),O=function(e,t,a){return function(){var n=Object(l.a)(s.a.mark((function n(r,c){var o,u;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d.createUserWithEmailAndPassword(t,a);case 3:return o=n.sent,u=o.user,n.next=7,N(u,e);case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}()},w=function(){return function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n,r,c,o,u,l,i,m,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.signInWithPopup(b);case 3:if(n=e.sent,r=n.user,c=r.uid,o=r.displayName,u=r.email,console.log(c,o,u),r){e.next=9;break}return e.abrupt("return");case 9:return l=h.doc("users/".concat(c)),e.next=12,l.get();case 12:if((i=e.sent).exists){e.next=18;break}return m=new Date,p=o,e.next=18,l.set({email:u,createdAt:m,userName:p});case 18:return e.abrupt("return",i);case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t,a){return e.apply(this,arguments)}}()},j=(a(82),function(e){return r.a.createElement("div",{className:"homePageDiv"},r.a.createElement("div",{className:"homePageBody"},r.a.createElement("h2",null,"Choose the Topic"),r.a.createElement("p",null,"You want to talk about"),r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/greeting")},className:"topicGreeting"},r.a.createElement("span",null,"Greeting")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/food")},className:"topicFood"},r.a.createElement("span",null,"Food")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/movie")},className:"topicMovie"},r.a.createElement("span",null,"Movie")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/programming")},className:"topicProgramming"},r.a.createElement("span",null,"Programming")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/outdoor")},className:"topicOutdoor"},r.a.createElement("span",null,"Outdoor Activity")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/traveling")},className:"topicTraveling"},r.a.createElement("span",null,"Traveling")),r.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/school")},className:"topicSchool"},r.a.createElement("span",null,"School")))))}),y=(a(83),"COMMENTLIST_SETUP"),k="ADD_NEWCOMMENT",C=function(e){return{type:y,payload:e}},I=function(e){return{type:k,payload:e}},S=a(54),P=Object(S.a)([function(e){return e.comments}],(function(e){return e.commentList})),A=function(e){var t=e.comment;return r.a.createElement("li",null,r.a.createElement("p",{className:"commentData"},r.a.createElement("span",{className:"commentNo"},"No.",t.commentNo),r.a.createElement("span",{className:"commentName"},t.userName),r.a.createElement("span",{className:"commentDate"},t.date),r.a.createElement("span",{className:"commentTime"},t.time)),r.a.createElement("div",{className:"commentMessage"},r.a.createElement("p",null,t.message)))},D=(a(84),function(e){var t=e.topic,a=t+"BackGround",c=Object(m.b)(),o=Object(m.c)((function(e){return e})),u=P(o);return Object(n.useEffect)((function(){var e;c((e="chat-"+t,function(){var t=Object(l.a)(s.a.mark((function t(a,n){var r,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=h.collection(e),c=[],t.next=4,r.orderBy("commentNo").get().then((function(e){e.forEach((function(e){var t=e.data();c.push(t)}))}));case 4:a(C(c));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()))}),[]),Object(n.useEffect)((function(){var e=document.querySelector(".commentListWrapper");e.scrollTop=e.scrollHeight,console.log(u)}),[u]),r.a.createElement("div",{className:"commentListWrapper "+a},r.a.createElement("ul",{className:"commentList"},u.map((function(e){return r.a.createElement(A,{key:e.commentNo,comment:e})}))))}),L=a(18),T=a(119),M=a(117),G=a(120),B=Object(M.a)((function(e){return{button:{margin:e.spacing(1)}}}));function W(e){var t=B();return r.a.createElement(T.a,{variant:"contained",color:"primary",style:{background:"#100c08"},className:t.button,endIcon:null!==e.icon?r.a.createElement(G.a,null,e.icon):null,onClick:e.click},e.text)}a(85);var q=function(e){var t=Object(m.b)(),a=Object(m.c)((function(e){return e.comments})),c=a.commentList.length+1,o=e.topic;c<10?c="000"+c:c<100?c="00"+c:c<1e3&&(c="0"+c);var u=Object(n.useState)("No Name"),i=Object(L.a)(u,2),p=i[0],f=i[1],d=Object(n.useState)(""),b=Object(L.a)(d,2),g=b[0],E=b[1],v=Object(n.useState)(c),x=Object(L.a)(v,2),N=x[0],O=x[1];return Object(n.useEffect)((function(){O(c)}),[a]),r.a.createElement("div",{className:"inputAreaDiv"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Your Name",onChange:function(e){f(e.target.value)}}),r.a.createElement("textarea",{placeholder:"Write message",onChange:function(e){E(e.target.value)},value:g,required:!0}),r.a.createElement(W,{text:"send",icon:"send",type:"submit",click:function(e){e.preventDefault();var a=g,n=p;""===a&&(a="No Message"),""===n&&(n="No Name");var r,c,u=(new Date).getMonth()+1+"/"+(new Date).getDate()+"/"+(new Date).getFullYear(),i=(new Date).getHours(),m=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes();t((r="chat-"+o,c={commentNo:N,date:u,time:i+":"+m,userName:n,message:a},function(){var e=Object(l.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.collection(r),e.next=3,n.add(c);case 3:t(I(c));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())),E("")}})))},U=function(e){var t=e.match.params.topic;return r.a.createElement("div",{className:"Chat"},r.a.createElement("div",{className:"pageStyle"},r.a.createElement(D,{topic:t}),r.a.createElement(q,{topic:t})))},F=a(28),R=a(14),Y=a(57),_=(a(86),function(e){var t=e.handleChange,a=e.label,n=Object(Y.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),z=(a(87),function(){var e=Object(n.useState)({email:"",password:""}),t=Object(L.a)(e,2),a=t[0],c=t[1],o=Object(m.b)(),u=Object(i.f)(),p=a.email,f=a.password,h=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p&&f){e.next=4;break}return alert("Please fill in all fields"),e.abrupt("return");case 4:return e.prev=4,e.next=7,d.signInWithEmailAndPassword(p,f);case 7:return c({email:"",password:""}),e.next=10,d.onAuthStateChanged(function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,N(t);case 3:e.sent.onSnapshot((function(e){o(x({userName:e.data().userName,authId:e.id,isLogin:!0}))}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 10:u.push("/redux-exercise/"),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.value,r=t.name;c(Object(R.a)(Object(R.a)({},a),{},Object(F.a)({},r,n)))};return r.a.createElement("div",{className:"loginInputArea"},r.a.createElement("form",null,r.a.createElement(_,{name:"email",type:"email",value:p,handleChange:b,label:"Email",required:!0}),r.a.createElement(_,{name:"password",type:"password",value:f,handleChange:b,label:"Password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(W,{click:h,text:"Login",icon:null}))))}),H=a(21),Z=a(27),J=(a(91),function(){var e=Object(i.f)(),t=Object(m.b)(),a=function(){var a=Object(l.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(w());case 2:if(!a.sent){a.next=7;break}e.push("/redux-exercise/"),a.next=8;break;case 7:return a.abrupt("return");case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"loginPageDiv"},r.a.createElement("div",{className:"loginPageBody"},r.a.createElement("h2",null,"Login"),r.a.createElement("p",null,"Login with your Email Address or",r.a.createElement("br",null),r.a.createElement("span",{className:"googleAccount",onClick:a},"Google Account"),"\xa0",r.a.createElement(H.a,{icon:Z.a})),r.a.createElement("p",null,"If you don't have your account yet,",r.a.createElement("br",null),r.a.createElement("span",{className:"pleaseSignup",onClick:function(){return e.push("/redux-exercise/signup")}},"please Signup"),"\xa0",r.a.createElement(H.a,{icon:Z.a})),r.a.createElement(z,null)))}),K=(a(92),function(){var e=Object(n.useState)({userName:"",email:"",password:"",confirmPass:""}),t=Object(L.a)(e,2),a=t[0],c=t[1],o=Object(m.b)(),u=Object(i.f)(),p=a.userName,f=a.email,d=a.password,h=a.confirmPass,b=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),p&&f&&d&&h){e.next=4;break}return alert("Please fill in all fields"),e.abrupt("return");case 4:if(!(d.length<6)){e.next=7;break}return alert("Password should be 6 or more characters"),e.abrupt("return");case 7:if(d===h){e.next=10;break}return alert("Passwords don't match"),e.abrupt("return");case 10:return e.prev=10,e.next=13,o(O(p,f,d));case 13:c({userName:"",email:"",password:"",confirmPass:""}),u.push("/redux-exercise/"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(10),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[10,17]])})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.target,n=t.value,r=t.name;c(Object(R.a)(Object(R.a)({},a),{},Object(F.a)({},r,n)))};return Object(n.useEffect)((function(){console.log(a)})),r.a.createElement("div",{className:"loginInputArea"},r.a.createElement("form",null,r.a.createElement(_,{name:"userName",type:"text",value:p,handleChange:g,label:"Name",required:!0}),r.a.createElement(_,{name:"email",type:"email",value:f,handleChange:g,label:"Email",required:!0}),r.a.createElement(_,{name:"password",type:"password",value:d,handleChange:g,label:"Password",required:!0}),r.a.createElement(_,{name:"confirmPass",type:"password",value:h,handleChange:g,label:"Confirm Password",required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(W,{text:"Signup",icon:null,click:b}))))}),Q=(a(93),function(){var e=Object(i.f)(),t=Object(m.b)(),a=function(){var a=Object(l.a)(s.a.mark((function a(){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t(w());case 2:if(!a.sent){a.next=7;break}e.push("/redux-exercise/"),a.next=8;break;case 7:return a.abrupt("return");case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{className:"signupPageDiv"},r.a.createElement("div",{className:"signupPageBody"},r.a.createElement("h2",null,"Signup"),r.a.createElement("p",null,"Signup with your Email Address or",r.a.createElement("br",null),r.a.createElement("span",{className:"googleAccount",onClick:a},"Google Account"),"\xa0",r.a.createElement(H.a,{icon:Z.a})),r.a.createElement(K,null)))}),V=a(124),$=a(121),X=a(123),ee=a(122),te=a(46),ae=a.n(te),ne=(a(94),Object(M.a)((function(e){return{root:{flexGrow:1,position:"fixed",width:"100%",zIndex:100},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontFamily:"'Dancing Script', cursive",fontWeight:600,fontSize:"2rem"}}})));function re(){var e=Object(n.useState)("Chat Place"),t=Object(L.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),u=Object(L.a)(o,2),s=u[0],l=u[1],p=(Object(m.c)((function(e){return e})).user.userInfo,ne());d.onAuthStateChanged((function(e){l(!!e)}));var f=Object(i.f)();return Object(n.useEffect)((function(){return f.listen((function(e){var t=e.pathname;t="/redux-exercise"===t||"/redux-exercise/"===t||"/"===t||""===t?"Chat Place":t.slice(t.lastIndexOf("/")+1),c(t)}))})),r.a.createElement("div",{className:p.root},r.a.createElement(V.a,{position:"static",style:{background:"#100c08"}},r.a.createElement($.a,null,"Chat Place"!==a?r.a.createElement(ee.a,{edge:"start",className:p.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return f.push("/redux-exercise/")}},r.a.createElement(ae.a,null)):r.a.createElement(ee.a,{edge:"start",className:p.menuButton,style:{color:"#100c08",cursor:"inherit"},"aria-label":"menu"},r.a.createElement(ae.a,null)),r.a.createElement(X.a,{variant:"h6",className:p.title},a),s?r.a.createElement(T.a,{color:"inherit",onClick:function(){return d.signOut()}},"Logout"):r.a.createElement(T.a,{color:"inherit",onClick:function(){return f.push("/redux-exercise/login")}},"Login"))))}var ce=a(47),oe=(a(97),function(){return r.a.createElement("footer",{className:"pageFooter"},r.a.createElement("div",{className:"nameAndCopyDiv"},r.a.createElement("p",{className:"footerCopyright"},"\xa9 2020 Tomohiro Yoshida. All Rights Reserved")),r.a.createElement("ul",{className:"contactList"},r.a.createElement("li",{className:"linkedinItem"},r.a.createElement("a",{href:"https://www.linkedin.com/in/tomohiro-yoshida-a8320816a/"},r.a.createElement(H.a,{icon:ce.b}))),r.a.createElement("li",{className:"githubItem"},r.a.createElement("a",{href:"https://github.com/TOMO-YOSHI"},r.a.createElement(H.a,{icon:ce.a}))),r.a.createElement("li",{className:"mailItem"},r.a.createElement("a",{href:"mailto: tyoshida01@mylangara.ca"},r.a.createElement(H.a,{icon:Z.b})))))});var ue=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e}));return Object(n.useEffect)((function(){var t=d.onAuthStateChanged(function(){var t=Object(l.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,N(a);case 3:n=t.sent,setTimeout((function(){n.get().then(function(){var t=Object(l.a)(s.a.mark((function t(a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a.data()),t.next=3,a.data().userName;case 3:r=t.sent,e(x({userName:r,authId:n.id,isLogin:!0}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),500),t.next=8;break;case 7:e({type:v});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());return function(){t()}}),[x]),Object(n.useEffect)((function(){console.log(t.user.userInfo)})),r.a.createElement("div",{className:"App"},r.a.createElement(re,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/redux-exercise",component:j}),r.a.createElement(i.a,{path:"/redux-exercise/chat/:topic",component:U}),r.a.createElement(i.a,{path:"/redux-exercise/login",component:J}),r.a.createElement(i.a,{path:"/redux-exercise/signup",component:Q})),r.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(19),le=a(25),ie=a(56),me={commentList:[{commentNo:"0000",userName:"TOMO",date:"09/22/2020",time:"00:00",message:[]}]},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(R.a)(Object(R.a)({},e),{},{commentList:t.payload});case k:return Object(R.a)(Object(R.a)({},e),{},{commentList:[].concat(Object(ie.a)(e.commentList),[t.payload])});default:return e}},fe={userInfo:{userName:"No Name",authId:null,isLogin:!1}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(R.a)(Object(R.a)({},e),{},{userInfo:t.payload});case E:return fe;default:return e}},he=Object(le.c)({comments:pe,user:de}),be=[a(55).a],ge=Object(le.d)(he,le.a.apply(void 0,be));o.a.render(r.a.createElement(m.a,{store:ge},r.a.createElement(se.a,null,r.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.9b5fa9fa.chunk.js.map