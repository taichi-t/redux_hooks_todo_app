(this.webpackJsonpdeploy_redux_hooks_app=this.webpackJsonpdeploy_redux_hooks_app||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(9),o=n.n(c),l=n(14),i=(n(92),n(16)),u=n(37),m=n(4),f=n(28),s=n.n(f),b=function(e,t){for(var n=0;n<e.length;n++)t.includes(e[n].id)&&e.splice(n--,1);return e},d=function(e,t,n){for(var a=0;a<e.length;a++)t.includes(e[a].id)&&(e[a].check=n);return e},O={todos:[],history:[]};var E=function(){var e,t,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,r=arguments.length>1?arguments[1]:void 0,c=r.type,o=r.payload;switch(c){case"ADD_TODO":return Object(m.a)(Object(m.a)({},a),{},{todos:[o].concat(Object(u.a)(a.todos))});case"TOGGLE_TODO":return Object(m.a)(Object(m.a)({},a),{},{todos:a.todos.map((function(e){return e.id===o?Object(m.a)(Object(m.a)({},e),{},{complete:!e.complete}):e}))});case"DONE_TODO":return(t=a.todos.filter((function(e){return e.id===o}))).map((function(e){return e.finishedAt=s()().format("YYYY-MM-DD"),e.check=!1,e})),Object(m.a)(Object(m.a)({},a),{},{todos:a.todos.filter((function(e){return e.id!==o})),history:(e=t).concat.apply(e,Object(u.a)(a.history))});case"DELETE_TODO":return Object(m.a)(Object(m.a)({},a),{},{todos:a.todos.filter((function(e){return e.id!==o}))});case"SELECT_ALL":return Object(m.a)(Object(m.a)({},a),{},{todos:a.todos.map((function(e){return e.complete?e:Object(m.a)(Object(m.a)({},e),{},{complete:!0})}))});case"EXECUTE_TODO":return(t=a.todos.filter((function(e){return!0===e.complete}))).map((function(e){return e.finishedAt=s()().format("YYYY-MM-DD"),e.check=!1,e})),Object(m.a)(Object(m.a)({},a),{},{todos:a.todos.filter((function(e){return!0!==e.complete})),history:t.concat(a.history)});case"UNCHECK_TODO":return Object(m.a)(Object(m.a)({},a),{},{todos:a.todos.map((function(e){return e.complete?Object(m.a)(Object(m.a)({},e),{},{complete:!1}):e}))});case"SELECT_HISTORY":return Object(m.a)(Object(m.a)({},a),{},{history:a.history.map((function(e){return e.id===o?Object(m.a)(Object(m.a)({},e),{},{check:!e.check}):e}))});case"SELECT_HISTORIES":return t=Object(u.a)(a.history),n=d(t,o,!0),Object(m.a)(Object(m.a)({},a),{},{history:n});case"DELETE_HISTORY":return t=Object(u.a)(a.history),n=b(t,o),Object(m.a)(Object(m.a)({},a),{},{history:n});case"SELECT_ALL_HISTORY":return Object(m.a)(Object(m.a)({},a),{},{history:a.history.map((function(e){return e.check?e:Object(m.a)(Object(m.a)({},e),{},{check:!0})}))});case"UNCHECK_HISTORY":return Object(m.a)(Object(m.a)({},a),{},{history:a.history.map((function(e){return e.check?Object(m.a)(Object(m.a)({},e),{},{check:!1}):e}))});case"UNCHECK_HISTORIES":return t=Object(u.a)(a.history),n=d(t,o,!1),Object(m.a)(Object(m.a)({},a),{},{history:n});default:return a}},p=n(46),j=n(7),h=n(149),v=function(e,t,n,a){var r=e.find((function(e){return!1===e[a]}));0===e.length&&void 0===r&&(n(!0),t(!1)),0!==e.length&&void 0!==r&&(t(!1),n(!1)),0!==e.length&&void 0===r&&(n(!0),t(!0))},y=n(148),g=n(133),k=n(8),S=n(64),T=n.n(S),D=n(103),C=n(52),x=n.n(C),_=n(65),w=n.n(_),I=n(6),L=n(33),Y=n.n(L);function H(){var e=Object(j.a)([""]);return H=function(){return e},e}function z(){var e=Object(j.a)(["\n  font-size: ","rem;\n"]);return z=function(){return e},e}function N(){var e=Object(j.a)(["\n  text-align: center;\n  font-size: 1.6rem;\n  padding: 1rem;\n"]);return N=function(){return e},e}var R=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(i.c)((function(e){return e.todos})),u=Object(a.useState)(!0),m=Object(l.a)(u,2),f=m[0],s=m[1],b=Object(a.useState)(!0),d=Object(l.a)(b,2),O=d[0],E=d[1],p=Object(a.useState)(!1),j=Object(l.a)(p,2),k=j[0],S=j[1],C=Object(i.b)();Object(a.useEffect)((function(){var e=o.find((function(e){return!0===e.complete}));v(o,S,E,"complete"),void 0===e||0===o.length?s(!0):s(!1)}),[o]);var _=k?r.a.createElement(g.a,{color:"secondary",startIcon:r.a.createElement(Y.a,null),onClick:function(e){e.preventDefault(),C({type:"UNCHECK_TODO"})}},r.a.createElement(M,{fontSize:.5},"Uncheck All")):r.a.createElement(g.a,{color:"primary",startIcon:r.a.createElement(x.a,null),disabled:O,onClick:function(e){e.preventDefault(),C({type:"SELECT_ALL"})}},r.a.createElement(M,{fontSize:.5},"Select All"));return r.a.createElement(A,null,r.a.createElement(D.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==n.trim()&&(!function(e){C(function(e){return{type:"ADD_TODO",payload:e}}(e))}({id:Object(h.a)(),name:n,complete:!1}),c(""))},action:"submit",noValidate:!0,autoComplete:"off",style:{padding:"1rem"}},r.a.createElement(U,null,r.a.createElement(y.a,{type:"text",name:"todo",placeholder:"create a todo",value:n,onChange:function(e){c(e.target.value)}}),r.a.createElement(g.a,{type:"submit",color:"primary",startIcon:r.a.createElement(T.a,null)},"ADD")),_,r.a.createElement(B,{onClick:function(e){e.preventDefault(),C({type:"EXECUTE_TODO"})},startIcon:r.a.createElement(w.a,null),disabled:f},r.a.createElement(M,{fontSize:.5},"Execute")))))},A=k.b.div(N()),M=k.b.p(z(),(function(e){return e.fontSize})),U=k.b.div(H()),B=Object(I.a)((function(e){return{root:{color:e.palette.success.main}}}))(g.a),K=n(147),G=n(55),J=n.n(G),W=n(69),F=n.n(W),P=n(54);function X(){var e=Object(j.a)(["\n  text-align: center;\n  font-size: 1.4rem;\n  color: ",";\n"]);return X=function(){return e},e}function V(){var e=Object(j.a)(["\n  text-decoration: ",";\n"]);return V=function(){return e},e}function $(){var e=Object(j.a)(["\n  text-align: left;\n"]);return $=function(){return e},e}function q(){var e=Object(j.a)(["\n  text-align: right;\n"]);return q=function(){return e},e}function Q(){var e=Object(j.a)(["\n  padding: 1rem;\n  margin-bottom: 1rem;\n"]);return Q=function(){return e},e}function Z(){var e=Object(j.a)(["\n  padding: 1rem;\n  font-size: 1.6rem;\n"]);return Z=function(){return e},e}var ee=function(){var e=Object(P.a)(),t=Object(i.c)((function(e){return e.todos})),n=Object(i.b)(),a=function(e){return n(function(e){return{type:"TOGGLE_TODO",payload:e}}(e))},c=function(e){return n(function(e){return{type:"DELETE_TODO",payload:e}}(e))},o=function(e){return n(function(e){return{type:"DONE_TODO",payload:e}}(e))},l=0===t.length?r.a.createElement(oe,{color:e.palette.text.hint},"There is no task..."):null;return r.a.createElement(te,null,t&&t.map((function(e){return r.a.createElement(D.a,{key:e.id},r.a.createElement(ne,{onClick:a.bind(null,e.id)},r.a.createElement(re,null,r.a.createElement(K.a,{type:"checkbox",checked:e.complete,color:"primary"}),r.a.createElement(ce,{complete:e.complete},e.name)),r.a.createElement(ae,null,e.complete?r.a.createElement(g.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(F.a,null),onClick:o.bind(null,e.id)},"Done"):r.a.createElement(g.a,{variant:"contained",color:"secondary",startIcon:r.a.createElement(J.a,null),onClick:c.bind(null,e.id)},"Delete"))))})),l)},te=k.b.div(Z()),ne=k.b.div(Q()),ae=k.b.div(q()),re=k.b.div($()),ce=k.b.span(V(),(function(e){return e.complete?"line-through":null})),oe=k.b.p(X(),(function(e){return e.color})),le=n(146),ie=n(138),ue=n(70),me=n.n(ue),fe=n(135),se=n(145),be=n(136);function de(){var e=Object(j.a)(["\n  background-color: ",";\n  width: 1rem;\n  height: 1rem;\n"]);return de=function(){return e},e}var Oe=Object(be.a)((function(e){return{menuButton:{marginRight:e.spacing(3)}}})),Ee=["default","#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722"],pe=function(e){var t=e.toggleTheme,n=Object(a.useState)(null),c=Object(l.a)(n,2),o=c[0],i=c[1],u=Boolean(o),m=Oe(),f=function(e){"object"===typeof e?i(null):(i(null),t(e))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){i(e.currentTarget)},className:m.menuButton},r.a.createElement(me.a,null)),r.a.createElement(se.a,{id:"long-menu",anchorEl:o,open:u,onClose:f,PaperProps:{style:{width:"17ch",height:"10rem"}}},Ee.map((function(e,t){return r.a.createElement(ie.a,{value:e,key:t,onClick:f.bind(null,e)},"default"===e?e:null,"default"===e?null:r.a.createElement(je,{color:e}))}))))},je=Object(k.b)(le.a)(de(),(function(e){return e.color})),he=n(139),ve=n(140),ye=n(71),ge=n.n(ye),ke=n(72),Se=n.n(ke);function Te(){var e=Object(j.a)(["\n  font-size: 1rem;\n"]);return Te=function(){return e},e}function De(){var e=Object(j.a)(["\n  color: ",";\n  font-size: 2.4rem;\n"]);return De=function(){return e},e}var Ce=Object(be.a)((function(e){return{menuButton:{marginRight:e.spacing(3)},title:{alignSelf:"flex-end",flexGrow:1}}})),xe=function(e){var t=Object(P.a)(),n=Object(a.useState)((function(){return!1})),c=Object(l.a)(n,2),o=c[0],i=c[1],u=e.toggleTheme,m=Object(a.useState)(""),f=Object(l.a)(m,2),b=f[0],d=f[1],O=Ce();Object(a.useEffect)((function(){var e=function(){var e=s()().format("MMMM"),t=s()().format("Do");d({month:e,date:t})};e(),setInterval(e,6e4)}),[]);var E=function(e){e.preventDefault(),i(!o),u()},p=o?r.a.createElement(fe.a,{"aria-label":"darkmode",color:"inherit",edge:"end",className:O.menuButton,onClick:E},r.a.createElement(ge.a,null)):r.a.createElement(fe.a,{"aria-label":"lightmode",color:"inherit",edge:"end",className:O.menuButton,onClick:E},r.a.createElement(Se.a,null));return r.a.createElement("div",{className:O.root},r.a.createElement(he.a,{position:"static"},r.a.createElement(ve.a,{className:O.toolbar},r.a.createElement(_e,{className:O.title,color:t.palette.text.primary},r.a.createElement("span",null,b.date," "),r.a.createElement(we,null,b.month)),r.a.createElement(pe,{toggleTheme:u}),p)))},_e=k.b.h1(De(),(function(e){return e.color})),we=k.b.span(Te());function Ie(){var e=Object(j.a)(["\n  display: inline-block;\n  text-align: right;\n  width: 50%;\n"]);return Ie=function(){return e},e}function Le(){var e=Object(j.a)(["\n  display: inline-block;\n  text-align: left;\n  width: 50%;\n"]);return Le=function(){return e},e}var Ye=function(){var e=Object(i.c)((function(e){return e.history})),t=Object(a.useState)(!0),n=Object(l.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)(!1),m=Object(l.a)(u,2),f=m[0],s=m[1],b=Object(a.useState)(!0),d=Object(l.a)(b,2),O=d[0],E=d[1],p=Object(i.b)();Object(a.useEffect)((function(){v(e,s,E,"check"),e.some((function(e){return!0===e.check}))?o(!1):o(!0)}),[e]);var j=f?r.a.createElement(fe.a,{color:"secondary",onClick:function(e){e.preventDefault(),p({type:"UNCHECK_HISTORY"})}},r.a.createElement(Y.a,null)):r.a.createElement(fe.a,{color:"primary","aria-label":"select all",disabled:O,onClick:function(e){e.preventDefault(),p({type:"SELECT_ALL_HISTORY"})}},r.a.createElement(x.a,null));return r.a.createElement(r.a.Fragment,null,r.a.createElement(He,null,j),r.a.createElement(ze,null,r.a.createElement(fe.a,{"aria-label":"delete",disabled:c,color:"secondary",onClick:function(t){t.preventDefault();var n=[];e.map((function(e){return e.check&&n.push(e.id),e})),function(e){p(function(e){return{type:"DELETE_HISTORY",payload:e}}(e))}(n),o(!1)}},r.a.createElement(J.a,null))))},He=k.b.div(Le()),ze=k.b.div(Ie()),Ne=n(105),Re=n(150),Ae=n(141),Me=n(142),Ue=n(73),Be=n.n(Ue);function Ke(){var e=Object(j.a)([""]);return Ke=function(){return e},e}function Ge(){var e=Object(j.a)(['\n  font-size: 1.5rem;\n  font-family: "Oswald", sans-serif;\n']);return Ge=function(){return e},e}function Je(){var e=Object(j.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Je=function(){return e},e}var We=k.b.div(Je()),Fe=k.b.div(Ge()),Pe=k.b.div(Ke()),Xe=n(137),Ve=n(74),$e=n.n(Ve);function qe(){var e=Object(j.a)(["\n  text-align: center;\n  font-size: 1.4rem;\n  color: ",";\n"]);return qe=function(){return e},e}function Qe(){var e=Object(j.a)(["\n  text-align: center;\n  padding: 1rem 0;\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(j.a)(["\n  margin: 1rem;\n  max-height: 500px;\n  overflow: scroll;\n"]);return Ze=function(){return e},e}var et=function(){var e=Object(P.a)(),t=Object(i.c)((function(e){return e.history})),n=Object(a.useState)(),c=Object(l.a)(n,2),o=c[0],u=c[1],m=Object(i.b)();Object(a.useEffect)((function(){u(function(e,t){for(var n={},a=[],r=0;r<e.length;r++)e[r].finishedAt in n!==!0&&(a=[]),a.push(e[r]),n[e[r].finishedAt]=a;return n}(t))}),[t]);var f=t&&0===t.length?r.a.createElement(at,{color:e.palette.text.hint},"There is no history..."):o&&function(e,t,n,a){var c=[];for(var o in e){var l=e[o].map((function(e){return e.id})),i=0===e[o].filter((function(e){return!1===e.check})).length?r.a.createElement(fe.a,{color:"secondary","aria-label":"lightmode",onClick:a.bind(null,l)},r.a.createElement(Y.a,null)):r.a.createElement(fe.a,{color:"primary","aria-label":"lightmode",onClick:n.bind(null,l)},r.a.createElement(Be.a,null));c.push(r.a.createElement("li",{key:"section-".concat(o)},r.a.createElement("ul",{style:{padding:"0"}},r.a.createElement(Ae.a,{component:"li"},r.a.createElement(We,null,r.a.createElement(Fe,null,s()(o).calendar(null,{sameDay:"[Today]",nextDay:"[Tomorrow]",nextWeek:"dddd",lastDay:"[Yesterday]",lastWeek:"[Last] dddd",sameElse:"DD/MM/YYYY"})),r.a.createElement(Pe,null,i))),e&&e[o].map((function(e,n){return r.a.createElement(Ne.a,{key:n,onClick:t.bind(null,e.id),button:!0},r.a.createElement(K.a,{type:"checkbox",checked:e.check,color:"primary"}),r.a.createElement(Re.a,{primary:"".concat(e.name)}))}))),r.a.createElement(Me.a,{variant:"middle"})))}return c}(o,(function(e){return m(function(e){return{type:"SELECT_HISTORY",payload:e}}(e))}),(function(e){return m(function(e){return{type:"SELECT_HISTORIES",payload:e}}(e))}),(function(e){return m(function(e){return{type:"UNCHECK_HISTORIES",payload:e}}(e))}));return r.a.createElement(tt,null,r.a.createElement(nt,null,r.a.createElement($e.a,{fontSize:"large"})),r.a.createElement(Xe.a,{subheader:r.a.createElement("li",null),style:{maxHeight:"300px",overflow:"scroll"}},f),r.a.createElement(Ye,null))},tt=Object(k.b)(D.a)(Ze()),nt=k.b.h2(Qe()),at=k.b.p(qe(),(function(e){return e.color})),rt=n(75),ct=n.n(rt);function ot(){var e=Object(j.a)(["\n  font-weight: normal;\n  padding: 1rem 0;\n  font-size: 1.5rem;\n  text-align: center;\n"]);return ot=function(){return e},e}function lt(){var e=Object(j.a)(["\n  max-height: 600px;\n  overflow: scroll;\n"]);return lt=function(){return e},e}function it(){var e=Object(j.a)(["\n  padding: 1rem;\n"]);return it=function(){return e},e}var ut=function(){return r.a.createElement(mt,null,r.a.createElement(ft,null,r.a.createElement(st,null,r.a.createElement(ct.a,{fontSize:"large"}))))},mt=k.b.div(it()),ft=Object(k.b)(D.a)(lt()),st=k.b.h2(ot());function bt(){var e=Object(j.a)(["\n  body {\n  font-size:62.5%;\n  background: ",";\n  color:",";\n  margin:0 auto;\n  font-family: 'Oswald', sans-serif;\n  user-select:text;\n  }\n#root{\n  overflow:hidden\n}\n"]);return bt=function(){return e},e}var dt=Object(k.a)(bt(),(function(e){return e.theme.palette.background.default}),(function(e){return e.theme.palette.text.primary})),Ot=function(){return{palette:{type:"light",primary:{main:"#2196f3"},secondary:{main:"#f50057"}}}},Et=n(143),pt=n(76),jt=n(144);var ht=function(){var e=function(){var e=Object(a.useState)(Ot),t=Object(l.a)(e,2),n=t[0],r=t[1],c=n.palette.type;return[n,function(e){var t;if(e){var a="default"===e?"#2196f3":e;t=Object(m.a)(Object(m.a)({},n),{},{palette:Object(m.a)(Object(m.a)({},n.palette),{},{primary:Object(m.a)(Object(m.a)({},n.palette.primary),{},{main:"".concat(a)})})})}else t=Object(m.a)(Object(m.a)({},n),{},{palette:Object(m.a)(Object(m.a)({},n.palette),{},{type:"light"===c?"dark":"light"})});r(t)}]}(),t=Object(l.a)(e,2),n=t[0],c=t[1],o=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):{todos:[],history:[]},u=Object(p.b)(E,o,window.devToolsExtension&&window.devToolsExtension());u.subscribe((function(){localStorage.setItem("data",JSON.stringify(u.getState()))}));var f=Object(pt.a)(n);return r.a.createElement(i.a,{store:u},r.a.createElement(Et.a,{theme:f},r.a.createElement(dt,{theme:f}),r.a.createElement(xe,{toggleTheme:c}),r.a.createElement(jt.a,{container:!0,spacing:3},r.a.createElement(jt.a,{item:!0,xs:12,md:4},r.a.createElement(ut,null)),r.a.createElement(jt.a,{item:!0,xs:12,md:4},r.a.createElement(R,null),r.a.createElement(ee,null)),r.a.createElement(jt.a,{item:!0,xs:12,md:4},r.a.createElement(et,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(ht,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,t,n){e.exports=n(101)}},[[87,1,2]]]);
//# sourceMappingURL=main.f68b7fae.chunk.js.map