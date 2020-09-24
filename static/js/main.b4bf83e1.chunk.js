(this["webpackJsonpredux-exercise"]=this["webpackJsonpredux-exercise"]||[]).push([[0],{63:function(e,t,a){e.exports=a(91)},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),l=(a(68),a(69),a(6)),i=(a(70),function(e){return c.a.createElement("div",{className:"homePageDiv"},c.a.createElement("div",{className:"homePageBody"},c.a.createElement("h2",null,"Choose the Topic"),c.a.createElement("p",null,"You want to talk about"),c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/greeting")},className:"topicGreeting"},c.a.createElement("span",null,"Greeting")),c.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/food")},className:"topicFood"},c.a.createElement("span",null,"Food")),c.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/movie")},className:"topicMovie"},c.a.createElement("span",null,"Movie")),c.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/programming")},className:"topicProgramming"},c.a.createElement("span",null,"Programming")),c.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/outdoor")},className:"topicOutdoor"},c.a.createElement("span",null,"Outdoor Activity")),c.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/traveling")},className:"topicTraveling"},c.a.createElement("span",null,"Traveling")),c.a.createElement("li",{onClick:function(){return e.history.push("/redux-exercise/chat/school")},className:"topicSchool"},c.a.createElement("span",null,"School")))))}),m=(a(71),a(14)),s=a(28),u=a.n(s),p=a(40),h="COMMENTLIST_SETUP",d="ADD_NEWCOMMENT",f=function(e){return{type:h,payload:e}},E=function(e){return{type:d,payload:e}},g=a(29),v=a.n(g);a(77),a(80);v.a.initializeApp({apiKey:"AIzaSyCIWtOYcNVbkFSc5zeTl1OD5ipu2NPmwiM",authDomain:"chat-app-8976e.firebaseapp.com",databaseURL:"https://chat-app-8976e.firebaseio.com",projectId:"chat-app-8976e",storageBucket:"chat-app-8976e.appspot.com",messagingSenderId:"622522794289",appId:"1:622522794289:web:a089a4b8f033367ac67010",measurementId:"G-Y5ZTFZ215Q"});v.a.auth();var N=v.a.firestore(),b=new v.a.auth.GoogleAuthProvider;b.setCustomParameters({prompt:"select_account"});var x=a(52),O=Object(x.a)([function(e){return e.comments}],(function(e){return e.commentList})),y=function(e){var t=e.comment;return c.a.createElement("li",null,c.a.createElement("p",{className:"commentData"},c.a.createElement("span",{className:"commentNo"},"No.",t.commentNo),c.a.createElement("span",{className:"commentName"},t.userName),c.a.createElement("span",{className:"commentDate"},t.date),c.a.createElement("span",{className:"commentTime"},t.time)),c.a.createElement("div",{className:"commentMessage"},c.a.createElement("p",null,t.message)))},j=(a(82),function(e){var t=e.topic,a=t+"BackGround",r=Object(m.b)(),o=Object(m.c)((function(e){return e})),l=O(o);return Object(n.useEffect)((function(){var e;r((e="chat-"+t,function(){var t=Object(p.a)(u.a.mark((function t(a,n){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=N.collection(e),r=[],t.next=4,c.orderBy("commentNo").get().then((function(e){e.forEach((function(e){var t=e.data();r.push(t)}))}));case 4:a(f(r));case 5:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()))}),[]),Object(n.useEffect)((function(){var e=document.querySelector(".commentListWrapper");e.scrollTop=e.scrollHeight,console.log(l)}),[l]),c.a.createElement("div",{className:"commentListWrapper "+a},c.a.createElement("ul",{className:"commentList"},l.map((function(e){return c.a.createElement(y,{key:e.commentNo,comment:e})}))))}),w=a(22),k=a(112),C=a(110),D=a(113),S=Object(C.a)((function(e){return{button:{margin:e.spacing(1)}}}));function I(e){var t=S();return c.a.createElement(k.a,{variant:"contained",color:"primary",style:{background:"#100c08"},className:t.button,endIcon:c.a.createElement(D.a,null,"send"),onClick:e.click},"Send")}a(83);var L=function(e){var t=Object(m.b)(),a=Object(m.c)((function(e){return e.comments})),r=a.commentList.length+1,o=e.topic;r<10?r="000"+r:r<100?r="00"+r:r<1e3&&(r="0"+r);var l=Object(n.useState)("No Name"),i=Object(w.a)(l,2),s=i[0],h=i[1],d=Object(n.useState)(""),f=Object(w.a)(d,2),g=f[0],v=f[1],b=Object(n.useState)(r),x=Object(w.a)(b,2),O=x[0],y=x[1];return Object(n.useEffect)((function(){y(r)}),[a]),c.a.createElement("div",{className:"inputAreaDiv"},c.a.createElement("form",null,c.a.createElement("input",{type:"text",placeholder:"Your Name",onChange:function(e){h(e.target.value)}}),c.a.createElement("textarea",{placeholder:"Write message",onChange:function(e){v(e.target.value)},value:g,required:!0}),c.a.createElement(I,{type:"submit",click:function(e){e.preventDefault();var a=g,n=s;""===a&&(a="No Message"),""===n&&(n="No Name");var c,r,l=(new Date).getMonth()+1+"/"+(new Date).getDate()+"/"+(new Date).getFullYear(),i=(new Date).getHours(),m=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes();t((c="chat-"+o,r={commentNo:O,date:l,time:i+":"+m,userName:n,message:a},function(){var e=Object(p.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=N.collection(c),e.next=3,n.add(r);case 3:t(E(r));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())),v("")}})))},M=function(e){var t=e.match.params.topic;return c.a.createElement("div",{className:"Chat"},c.a.createElement("div",{className:"pageStyle"},c.a.createElement(j,{topic:t}),c.a.createElement(L,{topic:t})))},P=(a(84),function(){return c.a.createElement("div",{className:"loginPageDiv"},c.a.createElement("div",{className:"loginPageBody"},c.a.createElement("h2",null,"Login"),c.a.createElement("p",null,"Login with your Email Address or Google Account")))}),T=a(117),A=a(114),B=a(116),G=a(115),W=a(43),F=a.n(W),Y=Object(C.a)((function(e){return{root:{flexGrow:1,position:"fixed",width:"100%",zIndex:100},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,fontFamily:"'Dancing Script', cursive",fontWeight:600,fontSize:"2rem"}}}));function z(){var e=Object(n.useState)("Chat Place"),t=Object(w.a)(e,2),a=t[0],r=t[1],o=Y(),i=Object(m.c)((function(e){return e})),s=(O(i),Object(l.f)());return Object(n.useEffect)((function(){return s.listen((function(e){var t=e.pathname;t="/redux-exercise"===t||"/redux-exercise/"===t||"/"===t||""===t?"Chat Place":t.slice(t.lastIndexOf("/")+1),console.log(t),r(t)}))})),c.a.createElement("div",{className:o.root},c.a.createElement(T.a,{position:"static",style:{background:"#100c08"}},c.a.createElement(A.a,null,"Chat Place"!==a?c.a.createElement(G.a,{edge:"start",className:o.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return s.push("/redux-exercise/")}},c.a.createElement(F.a,null)):c.a.createElement(G.a,{edge:"start",className:o.menuButton,style:{color:"#100c08",cursor:"inherit"},"aria-label":"menu"},c.a.createElement(F.a,null)),c.a.createElement(B.a,{variant:"h6",className:o.title},a),c.a.createElement(k.a,{color:"inherit",onClick:function(){return s.push("/redux-exercise/login")}},"Login"))))}var R=a(36),H=a(45),_=a(53),q=(a(90),function(){return c.a.createElement("footer",{className:"pageFooter"},c.a.createElement("div",{className:"nameAndCopyDiv"},c.a.createElement("p",{className:"authorName"},"Author: Tomohiro Yoshida"),c.a.createElement("p",{className:"footerCopyright"},"\xa9 2020 Chat Place. All Rights Reserved")),c.a.createElement("ul",{className:"contactList"},c.a.createElement("li",{className:"linkedinItem"},c.a.createElement("a",{href:"https://www.linkedin.com/in/tomohiro-yoshida-a8320816a/"},c.a.createElement(R.a,{icon:H.b}))),c.a.createElement("li",{className:"githubItem"},c.a.createElement("a",{href:"https://github.com/TOMO-YOSHI"},c.a.createElement(R.a,{icon:H.a}))),c.a.createElement("li",{className:"mailItem"},c.a.createElement("a",{href:"mailto: tyoshida01@mylangara.ca"},c.a.createElement(R.a,{icon:_.a})))))});var J=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(z,null),c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/redux-exercise",component:i}),c.a.createElement(l.a,{path:"/redux-exercise/chat/:topic",component:M}),c.a.createElement(l.a,{path:"/redux-exercise/login",component:P})),c.a.createElement(q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(23),Z=a(19),K=a(55),Q=a(30),V={commentList:[{commentNo:"0000",userName:"TOMO",date:"09/22/2020",time:"00:00",message:[]}]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(Q.a)(Object(Q.a)({},e),{},{commentList:t.payload});case d:return Object(Q.a)(Object(Q.a)({},e),{},{commentList:[].concat(Object(K.a)(e.commentList),[t.payload])});default:return e}},X=Object(Z.c)({comments:$}),ee=[a(54).a],te=Object(Z.d)(X,Z.a.apply(void 0,ee));o.a.render(c.a.createElement(m.a,{store:te},c.a.createElement(U.a,null,c.a.createElement(J,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.b4bf83e1.chunk.js.map