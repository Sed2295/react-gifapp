(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(7),c=n.n(r),i=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setCategorias,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],o=r[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c.trim().length>2&&(e((function(t){return[c].concat(Object(s.a)(t))})),o(""),console.log("Submit Hecho"))},children:[Object(u.jsx)("h2",{children:"A\xf1adir categoria"}),Object(u.jsx)("input",{type:"text",value:c,onChange:function(t){o(t.target.value)}})]})},j=n(10),d=n(6),l=n.n(d),b=n(8),f=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,a,r,c,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://api.giphy.com/v1/gifs/search?api_key=8FZIHm9CO4uo4ARK5lflU4CY9kUTr2Pv&limit=10&q=".concat(e),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return r=t.sent,c=r.data,i=c.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},O=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){f(t).then((function(t){c({data:t,loading:!1})}))}),[t]),r}(e),r=n.data,c=n.loading;return console.log(r,c),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"animate__animated animate__fadeIn",children:e}),c?"Cragando...":"",Object(u.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(u.jsx)(p,Object(j.a)({},t),t.id)}))})]})},h=function(){var t=Object(a.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"GifExpertApp"}),Object(u.jsx)(o,{setCategorias:r}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})},m=document.getElementById("root");c.a.render(Object(u.jsx)(h,{}),m)}},[[18,1,2]]]);
//# sourceMappingURL=main.b666d25e.chunk.js.map