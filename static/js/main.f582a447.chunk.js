(this["webpackJsonpomdb-search"]=this["webpackJsonpomdb-search"]||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=a(12),i=(a(27),a(3)),s=a(4),u=a(6),m=a(5),h=a(7),p=a(10),d=function(e){var t=e.children;return r.a.createElement("h1",null,t)},v="4287ad07",E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={inputMovie:""},a._handleChange=function(e){a.setState({inputMovie:e.target.value})},a._handleSubmit=function(e){e.preventDefault();var t=a.state.inputMovie;fetch("https://www.omdbapi.com/?apikey=".concat(v,"&s=").concat(t)).then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.Search,n=void 0===t?[]:t;a.props.onResults(n)}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"searchform",onSubmit:this._handleSubmit},r.a.createElement("input",{onChange:this._handleChange,name:"movie",className:"searchform-input",type:"text",placeholder:"Busca peliculas, series, videojuegos..."}),r.a.createElement("button",{className:"searchform-button"},"Buscar"))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=e.imdbID,a=e.Poster,n=e.Title,c=e.Year;return r.a.createElement(o.b,{to:"/detalle/".concat(t),className:"movie-card"},r.a.createElement("img",{src:a,alt:n,className:"movie-img"}),r.a.createElement("div",{className:"movie-info"},r.a.createElement("h2",{className:"movie-title",title:n},n),r.a.createElement("div",{className:"movie-year"},"Release year: ",c)))}}]),t}(n.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.movies;return r.a.createElement("div",{className:"movies-list"},e.map((function(e,t){return r.a.createElement(f,{key:t,movie:e})})))}}]),t}(n.Component),j=function(){return r.a.createElement("div",{className:"credits"},r.a.createElement("strong",null,"Creado por Luis Moreno"),r.a.createElement("div",null,r.a.createElement("span",null,"Resultados obtenidos de "),r.a.createElement("a",{href:"http://www.omdbapi.com/"},r.a.createElement("strong",null,"OMDB API"))))},O=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={usedSearch:!1,results:[]},a._handleResults=function(e){a.setState({results:e,usedSearch:!0})},a._renderResults=function(){var e=a.state.results;return 0===e.length?"Sin Resultados":r.a.createElement(b,{movies:e})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null,"Buscador OMDB"),r.a.createElement("div",{className:"searchform-wrapper"},r.a.createElement(E,{onResults:this._handleResults})),!1===this.state.usedSearch?r.a.createElement(j,null):this._renderResults())}}]),t}(n.Component),g="4287ad07",y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movie:{}},a._fetchMovie=function(e){fetch("http://www.omdbapi.com/?apikey=".concat(g,"&i=").concat(e)).then((function(e){return e.json()})).then((function(e){console.log({movie:e}),a.setState({movie:e})}))},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this._fetchMovie(e)}},{key:"render",value:function(){var e=this.state.movie,t=e.Actors,a=e.Metascore,n=e.Plot,c=e.Poster,l=e.Title,o=e.Director,i=e.Genre,s=e.Runtime,u=e.imdbRating;return r.a.createElement("div",{className:"movie-detail"},r.a.createElement("div",{className:"movie-detail-poster"},r.a.createElement("h1",null,l),r.a.createElement("img",{src:c,alt:l})),r.a.createElement("div",{className:"movie-detail-info"},r.a.createElement("h4",null,"Genero:"),r.a.createElement("p",null,i),r.a.createElement("h4",null,"Duracion:"),r.a.createElement("p",null,s),r.a.createElement("h4",null,"Director:"),r.a.createElement("p",null,o),r.a.createElement("h4",null,"Actores:"),r.a.createElement("p",null,t),r.a.createElement("div",{className:"ratings-inline"},r.a.createElement("div",null,r.a.createElement("h4",null,"Metascore:"),r.a.createElement("p",null,a)),r.a.createElement("div",{className:"imdb-rating"},r.a.createElement("h4",null,"IMDb Rating:"),r.a.createElement("p",null,u))),r.a.createElement("h4",null,"Sinopsis:"),r.a.createElement("p",null,n)))}}]),t}(n.Component),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"not-found"},"Not Found  |  404"))},N=(a(33),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:O}),r.a.createElement(p.a,{path:"/detalle/:id",component:y}),r.a.createElement(p.a,{component:w})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,{basename:"/omdb-search"},r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.f582a447.chunk.js.map