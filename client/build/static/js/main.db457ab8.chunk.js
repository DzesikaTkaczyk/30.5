(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[2],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="http://localhost:8000/api",a="http://localhost:3000"},19:function(e,t,n){"use strict";n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"g",(function(){return b})),n.d(t,"h",(function(){return h})),n.d(t,"c",(function(){return O})),n.d(t,"f",(function(){return E})),n.d(t,"l",(function(){return D})),n.d(t,"b",(function(){return z})),n.d(t,"j",(function(){return A})),n.d(t,"k",(function(){return q})),n.d(t,"a",(function(){return L})),n.d(t,"i",(function(){return U}));var r=n(5),a=n.n(r),c=n(12),u=n(28),o=n(30),s=n(13),l=n.n(s),i=n(10);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){return e.posts.data},m=function(e){return e.posts.data.length},b=function(e){return e.posts.request},h=function(e){return e.posts.singlePost},O=function(e){var t=e.posts;return Math.ceil(t.amount/t.postsPerPage)},E=function(e){return e.posts.presentPage},y=function(e){return"app/".concat("posts","/").concat(e)},v=y("LOAD_POSTS"),g=y("LOAD_SINGLE_POST"),j=y("START_REQUEST"),P=y("END_REQUEST"),w=y("ERROR_REQUEST"),k=y("RESET_REQUEST"),_=y("LOAD_POSTS_PAGE"),S=function(){return{type:j}},x=function(){return{type:P}},T=function(e){return{error:e,type:w}},D=function(){return{type:k}},N=function(e){return{payload:e,type:_}},R={data:[],request:{pending:!1,error:null,success:null},singlePost:{},amount:0,postsPerPage:10,presentPage:1};function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case v:return f({},e,{data:t.payload});case g:return f({},e,{singlePost:t.payload});case j:return f({},e,{request:{pending:!0,error:null,success:null}});case w:return f({},e,{request:{pending:!1,error:t.error,success:!1}});case k:return f({},e,{request:{pending:!1,error:null,success:null}});case P:return f({},e,{request:{pending:!1,error:null,success:!0}});case _:return f({},e,{postsPerPage:t.payload.postsPerPage,presentPage:t.payload.presentPage,amount:t.payload.amount,data:Object(u.a)(t.payload.posts)});default:return e}}var A=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(S()),e.prev=1,e.next=4,l.a.get("".concat(i.a,"/posts"));case 4:n=e.sent,t({payload:n.data,type:v}),t(x()),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(T(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},q=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(S()),t.prev=1,t.next=4,l.a.get("".concat(i.a,"/posts/").concat(e));case 4:r=t.sent,n({payload:r.data,type:g}),n(x()),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),n(T(t.t0.message));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},L=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(S()),t.prev=1,t.next=4,l.a.post("".concat(i.a,"/posts"),e);case 4:t.sent,n(x()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(T(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},U=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,u,o,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(S()),n.prev=1,c=(e-1)*t,u=t,n.next=6,l.a.get("".concat(i.a,"/posts/range/").concat(c,"/").concat(u));case 6:o=n.sent,s={posts:o.data.posts,amount:o.data.amount,postsPerPage:t,presentPage:e},r(N(s)),r(x()),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),r(T(n.t0.message));case 15:case"end":return n.stop()}}),n,null,[[1,12]])})));return function(e){return n.apply(this,arguments)}}()}},44:function(e,t,n){e.exports=n(79)},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(20),u=n.n(c),o=n(14),s=n(15),l=n(17),i=n(16),p=n(18),f=n(6),d=(n(49),function(e){var t=e.children;return a.a.createElement("div",{className:"container-fluid"},t)}),m=(n(50),function(e){e.links,e.location;return a.a.createElement("h1",{className:"logo"},"Blog.app")}),b=n(8),h=(n(51),function(e){var t=e.links,n=e.location;return a.a.createElement("ul",{className:"main-menu"},t.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(b.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))})))}),O=Object(f.e)((function(e){return a.a.createElement(h,e)})),E=(n(57),function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).state={links:[{path:"/",title:"Home"},{path:"/posts/new",title:"Add post"},{path:"/posts",title:"Posts"},{path:"/contact",title:"Contact"}]},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.links;return a.a.createElement("nav",{className:"navbar"},a.a.createElement(m,null),a.a.createElement(O,{links:e}))}}]),t}(a.a.Component)),y=function(e){var t=e.children;return a.a.createElement("div",null,a.a.createElement(d,null,a.a.createElement(E,null),t))},v=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,318))})),g=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,323))})),j=Object(r.lazy)((function(){return n.e(11).then(n.bind(null,319))})),P=Object(r.lazy)((function(){return n.e(12).then(n.bind(null,320))})),w=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5),n.e(10)]).then(n.bind(null,322))})),k=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(9)]).then(n.bind(null,321))})),_=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(y,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Wczytywanie...")},a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/",exact:!0,component:v}),a.a.createElement(f.a,{path:"/posts",exact:!0,component:g}),a.a.createElement(f.a,{path:"/posts/new",exact:!0,component:k}),a.a.createElement(f.a,{path:"/posts/:id",exact:!0,component:w}),a.a.createElement(f.a,{path:"/contact",exact:!0,component:j}),a.a.createElement(f.a,{component:P}))))}}]),t}(a.a.Component),S=(n(58),n(59),n(26)),x=n(7),T=n(38),D=n(19),N=Object(x.c)({posts:D.b,postCounter:D.b}),R=Object(x.e)(N,Object(x.d)(Object(x.a)(T.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));u.a.render(a.a.createElement((function(){return a.a.createElement(S.a,{store:R},a.a.createElement(b.a,null,a.a.createElement(_,null)))}),null),document.getElementById("root"))}},[[44,3,4]]]);
//# sourceMappingURL=main.db457ab8.chunk.js.map