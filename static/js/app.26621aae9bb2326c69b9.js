webpackJsonp([1],{"+uOe":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"movie-detail"},[t.movie.title?e("div",{staticClass:"detail-card"},[e("div",{staticClass:"title"},[t._v(t._s(t.movie.title)+" "+t._s(t.getOrginalTitle))]),e("div",{staticClass:"div"},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.movie.images.large}})]),e("section",{staticClass:"subject-info"},[t._v(t._s(t.getMeta))]),e("section",{staticClass:"subject-mark"},[e("div",{staticClass:"mark-item"},[e("a",[e("span",[t._v("想看("+t._s(t.movie.wish_count)+")")])]),t._m(0)])]),e("section",{staticClass:"subject-intro"},[e("h2",[t._v(t._s(t.movie.title的剧情介绍))]),e("div",{staticClass:"bd"},[e("p",[t._v(t._s(t.movie.summary))])])])]):t._e(),e("spinner",{attrs:{show:t.loading}})],1)},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("a",[e("span",[t._v("看过")])])}],a={render:s,staticRenderFns:n};i.a=a},"3bC4":function(t,i,e){"use strict";i.a={props:["show"],data:function(){return{}}}},"4Zoe":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"TalionNav"}},[t._m(0),s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.query,expression:"query",modifiers:{trim:!0}}],staticClass:"search-input",attrs:{type:"text",name:"search",placeholder:"请输入搜索内容"},domProps:{value:t.query},on:{keyup:function(i){if(!("button"in i)&&t._k(i.keyCode,"enter",13,i.key))return null;t.search(i)},input:function(i){i.target.composing||(t.query=i.target.value.trim())},blur:function(i){t.$forceUpdate()}}}),s("img",{staticClass:"search-btn",attrs:{src:e("mryP")},on:{click:function(i){i.stopPropagation(),t.search(i)}}})])])},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("header",{staticClass:"TalionNav"},[e("div",{staticClass:"TalionNav-primary"},[e("nav",[e("ul",[e("li",[e("a",{staticStyle:{color:"#2384E8"},attrs:{href:"#/movies"}},[t._v("电影")])])]),e("span",{staticClass:"searchs"})])])])}],a={render:s,staticRenderFns:n};i.a=a},"5reh":function(t,i,e){"use strict";e.d(i,"d",function(){return s}),e.d(i,"f",function(){return n}),e.d(i,"e",function(){return a}),e.d(i,"g",function(){return o}),e.d(i,"b",function(){return r}),e.d(i,"c",function(){return c}),e.d(i,"a",function(){return u});var s="movie/FETCH_MOVIES",n="movie/FETCH_MOVIE_LIST",a="movie/FETCH_MOVIE_BY_ID",o="movie/SET_INFINITE_BUSY",r="movie/CLEAN_MOVIES",c="movie/CLEAN_MOVIE_LIST",u="movie/CLEAN_MOVIE"},"6N4W":function(t,i){},CTT5:function(t,i){},CZuS:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"pages"},[e("v-header"),e("router-view")],1)},n=[],a={render:s,staticRenderFns:n};i.a=a},Cz8s:function(t,i,e){"use strict";function s(t){e("JqmJ")}var n=e("wqBJ"),a=e("4Zoe"),o=e("VU/8"),r=s,c=o(n.a,a.a,!1,r,"data-v-31a137f0",null);i.a=c.exports},G7aI:function(t,i,e){"use strict";function s(t){e("oHhL")}var n=e("niRm"),a=e("+uOe"),o=e("VU/8"),r=s,c=o(n.a,a.a,!1,r,"data-v-7b7a6a1c",null);i.a=c.exports},GLKD:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"movies"},[e("section",{staticClass:"grid has-search-bar"},[t.inTheater.title?e("div",{staticClass:"div"},[e("h2",[t._v(t._s(t.inTheater.title)),e("router-link",{staticClass:"more",attrs:{tag:"span",to:{name:"movie-list",query:{type:t.inTheater.type}}}},[t._v("更多")])],1),e("div",{staticClass:"card"},t._l(t.inTheater.subjects,function(i,s){return e("router-link",{key:s,staticClass:"item",attrs:{to:{name:"movie-detail",params:{id:i.id}}}},[e("div",{staticClass:"cover"},[e("div",{staticClass:"wp"},[e("img",{staticClass:"img-show",attrs:{src:i.images.medium}})])]),e("div",{staticClass:"info"},[e("h3",[t._v(t._s(i.title))])])])}))]):t._e(),t.comingSoon.title?e("div",{staticClass:"div"},[e("h2",[t._v(t._s(t.comingSoon.title)),e("router-link",{staticClass:"more",attrs:{tag:"span",to:{name:"movie-list",query:{type:t.comingSoon.type}}}},[t._v("更多")])],1),e("div",{staticClass:"cart"},t._l(t.comingSoon.subjects,function(i,s){return e("router-link",{key:s,staticClass:"item",attrs:{tag:"span",to:{name:"movie-list",params:{id:i.id}}}},[e("div",{staticClass:"cover"},[e("div",{staticClass:"wp"},[e("img",{staticClass:"img-show",attrs:{src:i.images.medium}})])]),e("div",{staticClass:"info"},[e("h3",[t._v(t._s(i.title))])])])}))]):t._e()]),e("spinner",{attrs:{show:t.loading}})],1)},n=[],a={render:s,staticRenderFns:n};i.a=a},I4d3:function(t,i,e){"use strict";var s=e("spwi"),n=e("vZNG");e("NYxO"),e("5reh");i.a={data:function(){return{loading:!0,comingSoon:{type:""},inTheater:{type:""}}},components:{Spinner:s.a},mounted:function(){var t=this;Object(n.c)(n.a.movie.in_theaters,0,9).then(function(i){t.inTheater=i,t.inTheater.type=n.a.movie.in_theaters,t.loading=!1}),Object(n.c)(n.a.movie.coming_soon,0,9).then(function(i){t.comingSoon=i,t.comingSoon.type=n.a.movie.coming_soon,t.loading=!1})}}},IcnI:function(t,i,e){"use strict";var s=e("NYxO"),n=e("7+uW"),a=e("W/Zy");n.a.use(s.a),i.a=new s.a.Store({modules:{movie:a.a}})},JqmJ:function(t,i){},M93x:function(t,i,e){"use strict";function s(t){e("6N4W")}var n=e("xJD8"),a=e("CZuS"),o=e("VU/8"),r=s,c=o(n.a,a.a,!1,r,null,null);i.a=c.exports},Mnck:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("transition",[e("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"spinner",class:{show:t.show},attrs:{width:"68px",viewBox:"0 0 44 44"}},[e("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round",cx:"22",cy:"22",r:"20"}})])])},n=[],a={render:s,staticRenderFns:n};i.a=a},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7+uW"),n=(e("NYxO"),e("/ocq")),a=e("M93x"),o=e("YaEn"),r=e("mtWM"),c=e.n(r),u=e("IcnI");s.a.use(n.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:o.a,store:u.a,axios:c.a,template:"<App/>",components:{App:a.a}})},NWWl:function(t,i,e){"use strict";var s=e("spwi"),n=e("bqTm"),a=e.n(n),o=e("vZNG");i.a={directives:{InfiniteScroll:a.a},data:function(){return{busy:!1,isScroll:!1,loading:!0,movieList:{subjects:[]},type:""}},components:{Spinner:s.a},mounted:function(){this.type=this.$route.query.type},methods:{loadMore:function(){var t=this,i=this.movieList.subjects.length;this.busy=!0,this.isScroll=!0,Object(o.c)(this.type,i).then(function(i){t.movieList.title=i.title,t.movieList.total=i.total,t.movieList.subjects=t.movieList.subjects.concat(i.subjects),t.movieList.subjects.length<t.movieList.total&&(t.busy=!1),t.loading=!1,t.isScroll=!1})}}}},NaHz:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"grid has-search-bar",attrs:{"infinite-scroll-disable":"busy","infinite-scroll-distance":"10"}},[e("h2",[t._v(t._s(t.movieList.title))]),t.movieList.subjects.length>0?e("div",{staticClass:"card"},t._l(t.movieList.subjects,function(i,s){return e("router-link",{key:s,staticClass:"item",attrs:{to:{name:"movie-detail",params:{id:i.id}}}},[e("div",{staticClass:"cover"},[e("div",{staticClass:"wp"},[e("img",{staticClass:"img-show",attrs:{src:i.images.medium}})])]),e("div",{staticClass:"info"},[e("h3",[t._v(t._s(i.title))])])])})):t._e(),e("spinner",{attrs:{show:t.loading}})],1)},n=[],a={render:s,staticRenderFns:n};i.a=a},UD1q:function(t,i,e){"use strict";function s(t){e("aTK4")}var n=e("m9mJ"),a=e("NaHz"),o=e("VU/8"),r=s,c=o(n.a,a.a,!1,r,"data-v-d841af06",null);i.a=c.exports},"W/Zy":function(t,i,e){"use strict";var s,n,a=e("bOdI"),o=e.n(a),r=e("5reh"),c=e("vZNG"),u={movies:[],movieList:{title:"",total:0,subjects:[]},busy:!1,movie:{}},l=(s={},o()(s,r.d,function(t,i){Object(c.c)(i.type,i.start,i.count).then(function(e){return e.type=i.type,t.commit([r.d],e)})}),o()(s,r.f,function(t,i){Object(c.c)(i.type,i.start).then(function(i){return t.commit([r.f],i)})}),o()(s,r.e,function(t,i){Object(c.c)(i).then(function(i){return t.commit([r.e],i)})}),o()(s,r.g,function(t,i){t.commit([r.g],i)}),o()(s,r.a,function(t){t.commit(r.a)}),o()(s,r.b,function(t){t.commit(r.b)}),o()(s,r.c,function(t){t.commit(r.c)}),s),m=(n={},o()(n,r.d,function(t,i){t.movie.push(i)}),o()(n,r.f,function(t,i){t.movieList.title=i.title,t.movieList.total=i.total,t.movieList.subjects=t.movieList.subjects.concat(i.subjects),t.movieList.subjects.length<t.movieList.total&&(t.busy=!1)}),o()(n,r.e,function(t,i){t.movie=i}),o()(n,r.g,function(t,i){t.busy=i}),o()(n,r.a,function(t){t.movie={}}),o()(n,r.c,function(t){t.movieList={}}),o()(n,r.b,function(t){t.movies=[]}),n);i.a={state:u,actions:l,mutations:m}},YaEn:function(t,i,e){"use strict";var s=e("7+uW"),n=e("/ocq"),a=(e("M93x"),e("uyiV")),o=e("zNyn"),r=e("G7aI"),c=e("UD1q");s.a.use(n.a),i.a=new n.a({routes:[{path:"/",name:"index",component:a.a},{path:"/movies",name:"movies",component:a.a},{path:"/movie/list",name:"movie-list",component:o.a},{path:"/movie/subject/:id",name:"movie-detail",component:r.a},{path:"/movie/search",name:"movie-search",component:c.a}]})},aTK4:function(t,i){},hMM4:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],staticClass:"grid has-search-bar",attrs:{"finite-scroll-disable":"busy","infinite-scroll-distance":"10"}},[e("h2",[t._v(t._s(t.movieList.title))]),t.movieList.subjects.length>0?e("div",{staticClass:"card"},t._l(t.movieList.subjects,function(i,s){return e("router-link",{key:s,staticClass:"item",attrs:{to:{name:"movie-detail",params:{id:i.id}}}},[e("div",{staticClass:"cover"},[e("div",{staticClass:"wp"},[e("img",{staticClass:"img-show",attrs:{src:i.images.medium}})])]),e("div",{staticClass:"info"},[e("h3",[t._v(t._s(i.title))])])])})):t._e(),e("spinner",{attrs:{show:t.loading}})],1)},n=[],a={render:s,staticRenderFns:n};i.a=a},m9mJ:function(t,i,e){"use strict";var s=e("spwi"),n=e("bqTm"),a=e.n(n),o=(e("5reh"),e("vZNG"));i.a={data:function(){return{loading:!0,query:"",movieList:{subjects:[]},busy:!1}},components:{Spinner:s.a},directives:{InfiniteScroll:a.a},mounted:function(){this.query=this.$route.query.query},watch:{$route:"loadAgain"},methods:{loadAgain:function(){this.movieList.subjects=[],this.busy=!1,this.query=this.$route.query.query,this.loadMore()},loadMore:function(){var t=this,i=this.movieList.subjects.length;this.busy=!0,Object(o.d)(this.query,i).then(function(i){t.movieList.title=i.title,t.movieList.total=i.total,t.movieList.subjects=t.movieList.subjects.concat(i.subjects),t.movieList.subjects.length<t.movieList.total&&(t.busy=!1),t.loading=!1})}}}},mKjY:function(t,i){},mryP:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAALVBMVEX6+vr19fX9/f37+/v+/v75+fni4+L39/fx8/Hm5+br7Ovb29v////V1dX///98IJfXAAAAD3RSTlP//////////////////wDU3JihAAAAXUlEQVR42j3K0Q7AIAhDUedEoVj+/3MHLtt9aU7SFqHmbhpVC/CEIyVN1UgtGe3uPWeWnNfYY1z0Erl2tsjSJBID7xN0iMCJUhjf/CgwyQlPlkJEWlvJ1FdSUz8RD5YjB2QIqEc+AAAAAElFTkSuQmCC"},niRm:function(t,i,e){"use strict";var s=e("spwi"),n=(e("5reh"),e("vZNG"));i.a={data:function(){return{id:"",movie:{},loading:!0}},components:{Spinner:s.a},computed:{getOrginalTitle:function(){return new RegExp(/([A-Za-z])/g).test(this.movie.orginal_title)?this.movie.original_title:""},getMeta:function(){var t=this.movie.casts.reduce(function(t,i){return t?t+" / "+i.name:i.name},"");return this.movie.countries.join(" / ")+" / "+this.movie.genres.join(" / ")+" / "+this.movie.directors[0].name+"（导演）/ "+t}},mounted:function(){var t=this;this.id=this.$route.params.id,Object(n.b)(this.id).then(function(i){t.movie=i,t.loading=!1})}}},oHhL:function(t,i){},spwi:function(t,i,e){"use strict";function s(t){e("t9cA")}var n=e("3bC4"),a=e("Mnck"),o=e("VU/8"),r=s,c=o(n.a,a.a,!1,r,null,null);i.a=c.exports},t9cA:function(t,i){},uyiV:function(t,i,e){"use strict";function s(t){e("CTT5")}var n=e("I4d3"),a=e("GLKD"),o=e("VU/8"),r=s,c=o(n.a,a.a,!1,r,"data-v-b79b5754",null);i.a=c.exports},vZNG:function(t,i,e){"use strict";function s(t){return console.log(v+t),new u.a(function(i,e){m.a.get(v+t).then(function(t){i(t.data)})})}function n(t){return s(""+t)}function a(t){return n("/movie/"+t+"?start="+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+"&count="+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:20))}function o(t){return s("/movie/subject/"+t)}function r(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return s(encodeURI("/movie/search?q="+t+"&start="+i))}e.d(i,"a",function(){return d}),i.c=a,i.b=o,i.d=r;var c=e("//Fk"),u=e.n(c),l=e("mtWM"),m=e.n(l),v="https://node-douban-api.herokuapp.com",d={movie:{in_theaters:"in_theaters",coming_soon:"coming_soon"}}},wqBJ:function(t,i,e){"use strict";i.a={data:function(){return{query:"",path:"search-movie"}},mounted:function(){"index"===this.$route.path||this.$route.path.indexOf("movie")?this.path="/movie/search":this.$route.path.indexOf("book")&&(this.path="/book/search")},methods:{search:function(){this.$router.push({path:this.path,query:{query:this.query}}),this.query=""}}}},xJD8:function(t,i,e){"use strict";var s=e("Cz8s");i.a={components:{vHeader:s.a}}},zNyn:function(t,i,e){"use strict";function s(t){e("mKjY")}var n=e("NWWl"),a=e("hMM4"),o=e("VU/8"),r=s,c=o(n.a,a.a,!1,r,"data-v-a5da0498",null);i.a=c.exports}},["NHnr"]);
//# sourceMappingURL=app.26621aae9bb2326c69b9.js.map