(this.webpackJsonpmoviesearch=this.webpackJsonpmoviesearch||[]).push([[0],{37:function(e,t,a){e.exports=a(67)},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(32),o=a.n(c),i=a(2),l=a(3),s=a(5),m=a(4),u=a(6),p=a(14),d=a(15),f=a(7),v=a.n(f),h=a(12),b=a(36),y=a(17),E=a(13),O=a.n(E);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach((function(t){Object(y.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var N=n.a.createContext(),k=function(e,t){switch(t.type){case"DELETE_MOVIES":return j({},e,{movie:e.movie.filter((function(e){return e.id!==t.payload}))});case"ADD_MOVIES":return j({},e,{movie:[t.payload].concat(Object(b.a)(e.movie))});case"UPDATE_MOVIES":return j({},e,{movie:e.movie.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={movie:[],dispatch:function(e){return a.setState((function(t){return k(t,e)}))}},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42cedafc2686fc5395ac07cecad44063");case 2:t=e.sent,this.setState({movie:t.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(N.Provider,{value:this.state},this.props.cartermovies)}}]),t}(r.Component),S=N.Consumer,w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={showMoviesInfo:!1},a.onDeleteClick=function(){var e=Object(h.a)(v.a.mark((function e(t,a){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.delete("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42cedafc2686fc5395ac07cecad44063/".concat(t));case 3:a({type:"DELETE_CONTACT",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),a({type:"DELETE_CONTACT",payload:t});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.movies,a=t.id,r=t.name,c=t.film,o=t.year,i=this.state.showMoviesInfo;return n.a.createElement(S,null,(function(t){var l=t.dispatch;return n.a.createElement("div",{className:"card card-body mb-3"},n.a.createElement("h4",null,r," ",n.a.createElement("i",{onClick:function(){return e.setState({showMoviesInfo:!e.state.showMoviesInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),n.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"orange"},onClick:e.onDeleteClick.bind(e,a,l)}),n.a.createElement(p.b,{to:"movies/edit/".concat(a)},n.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"yellow",marginRight:"1rem"}}))),i?n.a.createElement("ul",{className:"list-group"},n.a.createElement("li",{className:"list-group-item"},"Name: ",r),n.a.createElement("li",{className:"list-group-item"},"Film: ",c),n.a.createElement("li",{className:"list-group-item"},"year: ",o)):null)}))}}]),t}(r.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(S,null,(function(e){var t=e.movie;return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"display-4 mb-2"},n.a.createElement("span",{className:"text-danger"},"Movie"),"List"),t.map((function(e){return n.a.createElement(w,{key:t.id,movies:e})})))}))}}]),t}(r.Component),M=a(35),D=a.n(M),A=function(e){var t=e.label,a=e.name,r=e.value,c=e.placeholder,o=e.type,i=e.onChange,l=e.error;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:a},t),n.a.createElement("input",{type:o,name:a,className:D()("form-control form-control-lg",{"is-invalid":l}),placeholder:c,value:r,onChange:i}),l&&n.a.createElement("div",{className:"invalid-feedback"},l))};A.defaultProps={type:"text"};var _=A,P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={name:"",film:"",year:"",errors:{}},a.onSubmit=function(){var e=Object(h.a)(v.a.mark((function e(t,r){var n,c,o,i,l,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=a.state,c=n.name,o=n.film,i=n.year,""!==c){e.next=5;break}return a.setState({errors:{name:"name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{film:"film is required (optional)"}}),e.abrupt("return");case 8:if(""!==i){e.next=11;break}return a.setState({errors:{year:"year is required (optional)"}}),e.abrupt("return");case 11:return l={name:c,film:o,year:i},e.next=14,O.a.post("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42cedafc2686fc5395ac07cecad44063",l);case 14:s=e.sent,dispatchEvent({type:"ADD_MOVIES",payload:s.data}),a.setState({name:"",film:"",year:"",error:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(y.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.film,c=t.year,o=t.errors;return n.a.createElement(S,null,(function(t){var i=t.dispatch;return n.a.createElement("div",{className:"card mb-3"},n.a.createElement("div",{className:"card-header"},"Add Movies"),n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:e.onSubmit.bind(e,i)},n.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Motion Picture",value:a,onChange:e.onChange,error:o.name}),n.a.createElement(_,{label:"Film",name:"film",type:"film",placeholder:"Enter Film (optional)",value:r,onChange:e.onChange,error:o.film}),n.a.createElement(_,{label:"Year",name:"year",placeholder:"Enter year (optional)",value:c,onChange:e.onChange,error:o.year}),n.a.createElement("input",{type:"submit",value:"Add Movie",className:"btn btn-light btn-block"}))))}))}}]),t}(r.Component),I=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={name:"",film:"",year:"",errors:{}},a.onSubmit=function(){var e=Object(h.a)(v.a.mark((function e(t,r){var n,c,o,i,l,s,m;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),n=a.state,c=n.name,o=n.film,i=n.year,""!==c){e.next=5;break}return a.setState({errors:{name:"Name is required"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{film:"Film is required (optional)"}}),e.abrupt("return");case 8:if(""!==i){e.next=11;break}return a.setState({errors:{year:"Year is required (optional)"}}),e.abrupt("return");case 11:return l={name:c,film:o,year:i},s=a.props.match.params.id,e.next=15,O.a.put("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42cedafc2686fc5395ac07cecad44063/".concat(s),l);case 15:m=e.sent,t({type:"UPDATE_MOVIES",payload:m.data}),a.setState({name:"",film:"",year:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(y.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(v.a.mark((function e(){var t,a,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,O.a.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42cedafc2686fc5395ac07cecad44063/".concat(t));case 3:a=e.sent,r=a.data,this.setState({name:r.name,film:r.film,year:r.year});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,r=t.film,c=t.year,o=t.errors;return n.a.createElement(S,null,(function(t){var i=t.dispatch;return n.a.createElement("div",{className:"card mb-3"},n.a.createElement("div",{className:"card-header"},"Edit Movies"),n.a.createElement("div",{className:"card-body"},n.a.createElement("form",{onSubmit:e.onSubmit.bind(e,i)},n.a.createElement(_,{label:"Name",name:"name",placeholder:"Enter Name",value:a,onChange:e.onChange,error:o.name}),n.a.createElement(_,{label:"Film",name:"film",type:"film",placeholder:"Enter Film",value:r,onChange:e.onChange,error:o.film}),n.a.createElement(_,{label:"Year",name:"year",placeholder:"Enter Year",value:c,onChange:e.onChange,error:o.year}),n.a.createElement("input",{type:"submit",value:"Update Movies",className:"btn btn-light btn-block"}))))}))}}]),t}(r.Component),F=function(e){var t=e.branding;return n.a.createElement("nav",{className:"navbar navbar-expand-sm\r navbar-dark bg-danger mb-3 py-0"},n.a.createElement("div",{className:"container"},n.a.createElement("a",{href:"/",className:"navbar-brand"},t),n.a.createElement("div",null,n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{href:"/",className:"nav-link"},n.a.createElement("i",{className:"fas fa-home"})," Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{href:"/movie/add",className:"nav-link"},n.a.createElement("i",{className:"fas fa-plus"}),"Add")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(p.b,{href:"/about",className:"nav-link"},n.a.createElement("i",{className:"fas fa-question"}),"About"))))))};F.defaultProps={branding:"CarterMovie App"};var T=F,q=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"display-4"},"About Movie Search"),n.a.createElement("p",{className:"lead"},"App to manage movies"),n.a.createElement("p",{className:"text-secondary"},"Version 1.1.0"))};function V(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"display-4"},n.a.createElement("span",{className:"text-danger"},"404")," Page Not Found!!!"),n.a.createElement("p",{className:"lead"},"Sorry, the page does not exist"))}var L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={test:"",body:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=42cedafc2686fc5395ac07cecad44063").then((function(e){return e.motionpicture()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return n.a.createElement("div",null,n.a.createElement("h1",null,t),n.a.createElement("p",null,a))}}]),t}(r.Component),Y=(a(65),a(66),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(C,null,n.a.createElement(p.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(T,{branding:"Movie Search"}),n.a.createElement("div",{className:"container"},n.a.createElement(d.c,null,n.a.createElement(d.a,{exact:!0,path:"/",component:x}),n.a.createElement(d.a,{exact:!0,path:"/movies/add",component:P}),n.a.createElement(d.a,{exact:!0,path:"/movies/edit/:id",component:I}),n.a.createElement(d.a,{exact:!0,path:"/about",component:q}),n.a.createElement(d.a,{exact:!0,path:"/test",component:L}),n.a.createElement(d.a,{component:V}))))))}}]),t}(r.Component));o.a.render(n.a.createElement(Y,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ad452606.chunk.js.map