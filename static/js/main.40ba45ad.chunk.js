(this.webpackJsonpdeploy_redux_hooks_app=this.webpackJsonpdeploy_redux_hooks_app||[]).push([[0],{109:function(e,t,n){e.exports=n(176)},176:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),l=n(12),i=n(17),u=n(105),m=n(9),f=n(24),s=n.n(f),d={todos:[],history:[]};var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_TODO":return Object(m.a)(Object(m.a)({},e),{},{todos:[a].concat(Object(u.a)(e.todos))});case"TOGGLE_TODO":return Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.id===a?Object(m.a)(Object(m.a)({},e),{},{complete:!e.complete}):e}))});case"DELETE_TODO":var r=e.todos.filter((function(e){return e.id===a}));return r.map((function(e){return e.finishedAt=s()().format("YYYY-MM-DD")})),Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==a})),history:e.history.concat(r)});case"SELECT_ALL":return Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.complete?e:Object(m.a)(Object(m.a)({},e),{},{complete:!0})}))});case"EXECUTE_TODO":var c=e.todos.filter((function(e){return!0===e.complete}));return c.map((function(e){return e.finishedAt=s()().format("YYYY-MM-DD")})),Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.filter((function(e){return!0!==e.complete})),history:e.history.concat(c)});case"UNCHECK_TODO":return Object(m.a)(Object(m.a)({},e),{},{todos:e.todos.map((function(e){return e.complete?Object(m.a)(Object(m.a)({},e),{},{complete:!1}):e}))});default:return e}},O=n(53),p=n(7),E=n(215),v=n(214),j=n(204),h=n(8),g=n(94),y=n.n(g),D=n(177),x=n(93),k=n.n(x),S=n(95),T=n.n(S),w=n(4),_=n(92),z=n.n(_);function C(){var e=Object(p.a)([""]);return C=function(){return e},e}function M(){var e=Object(p.a)(["\n  font-size: ","rem;\n"]);return M=function(){return e},e}function Y(){var e=Object(p.a)(["\n  text-align: center;\n  font-size: 1.6rem;\n  padding: 1rem;\n"]);return Y=function(){return e},e}var A=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(i.c)((function(e){return e.todos})),u=Object(a.useState)(!0),m=Object(l.a)(u,2),f=m[0],s=m[1],d=Object(a.useState)(!0),b=Object(l.a)(d,2),O=b[0],p=b[1],h=Object(a.useState)(!1),g=Object(l.a)(h,2),x=g[0],S=g[1],w=Object(i.b)();Object(a.useEffect)((function(){var e=o.find((function(e){return!0===e.complete})),t=o.find((function(e){return!1===e.complete}));0===o.length&&void 0===t&&(p(!0),S(!1)),0!==o.length&&void 0!==t&&(S(!1),p(!1)),0!==o.length&&void 0===t&&(p(!0),S(!0)),void 0===e||0===o.length?s(!0):s(!1)}),[o]);var _=x?r.a.createElement(j.a,{color:"secondary",startIcon:r.a.createElement(z.a,null),onClick:function(e){e.preventDefault(),w({type:"UNCHECK_TODO"})}},r.a.createElement(L,{fontSize:.5},"Uncheck All")):r.a.createElement(j.a,{color:"primary",startIcon:r.a.createElement(k.a,null),disabled:O,onClick:function(e){e.preventDefault(),w({type:"SELECT_ALL"})}},r.a.createElement(L,{fontSize:.5},"Select All"));return r.a.createElement(I,null,r.a.createElement(D.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==n.trim()&&(!function(e){w(function(e){return{type:"ADD_TODO",payload:e}}(e))}({id:Object(E.a)(),name:n,complete:!1}),c(""))},action:"submit",noValidate:!0,autoComplete:"off",style:{padding:"1rem"}},r.a.createElement(U,null,r.a.createElement(v.a,{type:"text",name:"todo",placeholder:"create a todo",value:n,onChange:function(e){c(e.target.value)}}),r.a.createElement(j.a,{type:"submit",color:"primary",startIcon:r.a.createElement(y.a,null)},"ADD")),_,r.a.createElement(G,{onClick:function(e){e.preventDefault(),w({type:"EXECUTE_TODO"})},startIcon:r.a.createElement(T.a,null),disabled:f},r.a.createElement(L,{fontSize:.5},"Execute")))))},I=h.b.div(Y()),L=h.b.p(M(),(function(e){return e.fontSize})),U=h.b.div(C()),G=Object(w.a)((function(e){return{root:{color:e.palette.success.main}}}))(j.a),J=n(213),N=n(100),W=n.n(N),B=n(99),H=n.n(B),K=n(206);function X(){var e=Object(p.a)(["\n  text-align: center;\n  font-size: 1.4rem;\n  color: ",";\n"]);return X=function(){return e},e}function V(){var e=Object(p.a)(["\n  text-decoration: ",";\n"]);return V=function(){return e},e}function $(){var e=Object(p.a)(["\n  text-align: left;\n"]);return $=function(){return e},e}function q(){var e=Object(p.a)(["\n  text-align: right;\n"]);return q=function(){return e},e}function F(){var e=Object(p.a)(["\n  padding: 1rem;\n  margin-bottom: 1rem;\n"]);return F=function(){return e},e}function P(){var e=Object(p.a)(["\n  padding: 1rem;\n  font-size: 1.6rem;\n"]);return P=function(){return e},e}var Q=function(){var e=Object(K.a)(),t=Object(i.c)((function(e){return e.todos})),n=Object(i.b)(),a=function(e){return n(function(e){return{type:"TOGGLE_TODO",payload:e}}(e))},c=function(e){return n(function(e){return{type:"DELETE_TODO",payload:e}}(e))},o=0===t.length?r.a.createElement(ae,{color:e.palette.text.hint},"There is no task..."):null;return r.a.createElement(R,null,t&&t.map((function(e){return r.a.createElement(D.a,{key:e.id},r.a.createElement(Z,{onClick:a.bind(null,e.id)},r.a.createElement(te,null,r.a.createElement(J.a,{type:"checkbox",checked:e.complete,color:"primary"}),r.a.createElement(ne,{complete:e.complete},e.name)),r.a.createElement(ee,null,e.complete?r.a.createElement(j.a,{variant:"contained",color:"primary",startIcon:r.a.createElement(H.a,null),onClick:c.bind(null,e.id)},"Done"):r.a.createElement(j.a,{variant:"contained",color:"secondary",startIcon:r.a.createElement(W.a,null),onClick:c.bind(null,e.id)},"Delete"))))})),o)},R=h.b.div(P()),Z=h.b.div(F()),ee=h.b.div(q()),te=h.b.div($()),ne=h.b.span(V(),(function(e){return e.complete?"line-through":null})),ae=h.b.p(X(),(function(e){return e.color})),re=n(101),ce=n.n(re),oe=n(207),le=n(208);function ie(){var e=Object(p.a)(["\n  font-size: 1rem;\n"]);return ie=function(){return e},e}function ue(){var e=Object(p.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return ue=function(){return e},e}function me(){var e=Object(p.a)(["\n  color: ",";\n  font-size: 2.4rem;\n  text-align: center;\n"]);return me=function(){return e},e}var fe=function(e){var t=Object(K.a)(),n=Object(a.useState)((function(){return!1})),c=Object(l.a)(n,2),o=c[0],i=c[1],u=e.toggleDarkMode,m=Object(a.useState)(""),f=Object(l.a)(m,2),d=f[0],b=f[1];Object(a.useEffect)((function(){var e=function(){var e=s()().format("MMMM"),t=s()().format("Do");b({month:e,date:t})};e(),setInterval(e,6e4)}),[]);return r.a.createElement(oe.a,{position:"static"},r.a.createElement(le.a,{variant:"dense"},r.a.createElement(de,null,r.a.createElement(se,{color:t.palette.text.primary},r.a.createElement("span",null,d.date," "),r.a.createElement(be,null,d.month)),r.a.createElement("div",{onClick:function(e){e.preventDefault(),i(!o),u()}},r.a.createElement(ce.a,{checked:o,size:50,speed:6})))))},se=h.b.h1(me(),(function(e){return e.color})),de=h.b.div(ue()),be=h.b.span(ie()),Oe=n(216),pe=n(217),Ee=n(209),ve=n(210),je=n(102),he=n.n(je);function ge(){var e=Object(p.a)(["\n  font-weight: normal;\n  padding: 1rem 0;\n  font-size: 1.5rem;\n  text-align: center;\n"]);return ge=function(){return e},e}function ye(){var e=Object(p.a)(["\n  max-height: 600px;\n  overflow: scroll;\n"]);return ye=function(){return e},e}function De(){var e=Object(p.a)(["\n  padding: 1rem;\n"]);return De=function(){return e},e}var xe=function(){var e=Object(i.c)((function(e){return e.history})),t=Object(a.useState)(),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){o(function(e,t){for(var n={},a=[],r=0;r<e.length;r++)e[r].finishedAt in n!==!0&&(a=[]),a.push(e[r]),n[e[r].finishedAt]=a;return n}(e))}),[e]),r.a.createElement(ke,null,r.a.createElement(Se,null,r.a.createElement(Te,null,r.a.createElement(he.a,{fontSize:"large"})),r.a.createElement(ve.a,{subheader:r.a.createElement("li",null)},c&&function(e){for(var t in e)return r.a.createElement("li",{key:"section-".concat(t)},r.a.createElement("ul",null,r.a.createElement(Ee.a,{style:{fontSize:"1.5rem"}},s()(t).calendar(null,{sameDay:"[Today]",nextDay:"[Tomorrow]",nextWeek:"dddd",lastDay:"[Yesterday]",lastWeek:"[Last] dddd",sameElse:"DD/MM/YYYY"})),e&&e[t].map((function(e,t){return r.a.createElement(Oe.a,{key:t},r.a.createElement(pe.a,{primary:"".concat(e.name)}))}))))}(c))))},ke=h.b.div(De()),Se=Object(h.b)(D.a)(ye()),Te=h.b.h2(ge()),we=n(103),_e=n.n(we);function ze(){var e=Object(p.a)(["\n  font-weight: normal;\n  padding: 1rem 0;\n  font-size: 1.5rem;\n  text-align: center;\n"]);return ze=function(){return e},e}function Ce(){var e=Object(p.a)(["\n  max-height: 600px;\n  overflow: scroll;\n"]);return Ce=function(){return e},e}function Me(){var e=Object(p.a)(["\n  padding: 1rem;\n"]);return Me=function(){return e},e}var Ye=function(){return r.a.createElement(Ae,null,r.a.createElement(Ie,null,r.a.createElement(Le,null,r.a.createElement(_e.a,{fontSize:"large"}))))},Ae=h.b.div(Me()),Ie=Object(h.b)(D.a)(Ce()),Le=h.b.h2(ze());function Ue(){var e=Object(p.a)(["\n\n  body {\n  font-size:62.5%;\n  background: ",";\n  color:",";\n  \n  margin:0 auto;\n  font-family: 'Oswald', sans-serif;\n  user-select:text;\n  }\n  h2{\n    margin:0\n  }\n"]);return Ue=function(){return e},e}var Ge=Object(h.a)(Ue(),(function(e){return e.theme.palette.background.default}),(function(e){return e.theme.palette.text.primary})),Je={palette:{type:"light",primary:{main:"#2196f3"},secondary:{main:"#f50057"}}},Ne=n(211),We=n(104),Be=n(212);var He=function(){var e=function(){var e=Object(a.useState)(Je),t=Object(l.a)(e,2),n=t[0],r=t[1],c=n.palette.type;return[n,function(){var e=Object(m.a)(Object(m.a)({},n),{},{palette:Object(m.a)(Object(m.a)({},n.palette),{},{type:"light"===c?"dark":"light"})});r(e)}]}(),t=Object(l.a)(e,2),n=t[0],c=t[1],o=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):{todos:[],history:[]},u=Object(O.b)(b,o,window.devToolsExtension&&window.devToolsExtension());u.subscribe((function(){localStorage.setItem("data",JSON.stringify(u.getState()))}));var f=Object(We.a)(n);return r.a.createElement(i.a,{store:u},r.a.createElement(Ne.a,{theme:f},r.a.createElement(Ge,{theme:f}),r.a.createElement(fe,{toggleDarkMode:c}),r.a.createElement(Be.a,{container:!0,spacing:3},r.a.createElement(Be.a,{item:!0,xs:12,sm:4},r.a.createElement(Ye,null)),r.a.createElement(Be.a,{item:!0,xs:12,sm:4},r.a.createElement(A,null),r.a.createElement(Q,null)),r.a.createElement(Be.a,{item:!0,xs:12,sm:4},r.a.createElement(xe,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(He,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.40ba45ad.chunk.js.map