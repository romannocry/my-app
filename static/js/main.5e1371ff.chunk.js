(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),a=n.n(c),r=n(7),o=n.n(r),i=(n(15),n.p+"static/media/logo.6ce24c58.svg"),u=(n(16),n(2)),l=n(5);var m=function(e){var t=Object(c.useRef)(!0);return Object(c.useEffect)((function(){return console.log("instructions mounted"),function(){console.log("unmount instructions"),t.current=!1}}),[]),Object(s.jsxs)("section",{className:"instructions",children:[Object(s.jsx)("h1",{children:e.title}),e.steps.map((function(e,t){return Object(s.jsx)("p",{children:e},t)}))]})};var j=function(e){var t=e.amount,n=e.measurement,c=e.name;return Object(s.jsxs)("li",{children:[t," ",n," ",c]})};var d=function(e){var t=e.list;return Object(s.jsx)("ul",{className:"ingredients",children:t.map((function(e,t){return Object(s.jsx)(j,Object(u.a)({},e),t)}))})},h=n(9),b=n(8);function p(e){var t,n=e.style,a=void 0===n?{}:n,r=e.totalStars,o=void 0===r?5:r,i=Object(c.useState)(2),m=Object(l.a)(i,2),j=m[0],d=m[1],p=function(e){var t=e.selected,n=void 0!==t&&t,c=e.onSelect,a=void 0===c?function(e){return e}:c;return Object(s.jsx)(b.a,{color:n?"red":"grey",onClick:a})};return Object(c.useEffect)((function(){return console.log("star mounted"),function(){console.log("star unmount")}}),[]),Object(s.jsxs)("div",{style:Object(u.a)({padding:"5px"},a),children:[(t=o,Object(h.a)(Array(t))).map((function(e,t){return Object(s.jsx)(p,{selected:j>t,onSelect:function(){return d(t+1)}},t)})),Object(s.jsxs)("p",{children:[j," of ",o," stars"]})]})}var f=function(e){return Object(c.useEffect)((function(){}),[]),Object(s.jsxs)("div",{className:"Recipe",children:["This is the Recipe of ",e.name,e.index,Object(s.jsx)(d,{list:e.ingredients}),Object(s.jsx)(m,Object(u.a)({title:"Cookin Instructions"},e)),Object(s.jsx)(p,{},e.index)]})},O=[{name:"Baked Salmon",ingredients:[{name:"Salmon",amount:1,measurement:"l lb"},{name:"Pine Nuts",amount:1,measurement:"cup"},{name:"Butter Lettuce",amount:2,measurement:"cups"},{name:"Yellow Squash",amount:1,measurement:"med"},{name:"Olive Oil",amount:.5,measurement:"cup"},{name:"Garlic",amount:3,measurement:"cloves"}],steps:["Preheat the oven to 350 degrees.","Spread the olive oil around a glass baking dish.","Add the yellow squash and place in the oven for 30 mins.","Add the salmon, garlic, and pine nuts to the dish.","Bake for 15 minutes.","Remove from oven. Add the lettuce and serve."]},{name:"Fish Tacos",ingredients:[{name:"Whitefish",amount:1,measurement:"l lb"},{name:"Cheese",amount:1,measurement:"cup"},{name:"Iceberg Lettuce",amount:2,measurement:"cups"},{name:"Tomatoes",amount:2,measurement:"large"},{name:"Tortillas",amount:3,measurement:"med"}],steps:["Cook the fish on the grill until hot.","Place the fish on the 3 tortillas.","Top them with lettuce, tomatoes, and cheese."]}];var v=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=(t[0],t[1]),a=Object(c.useRef)(!0);return Object(c.useEffect)((function(){return console.log("Recipes list mounted"),n(O),function(){a.current=!1}}),[]),Object(s.jsxs)("div",{className:"Recipe",children:[Object(s.jsx)("ul",{children:O.map((function(e,t){return Object(s.jsx)(f,Object(u.a)({},e),t)}))}),"This is the Recipes List component !!"]})};var g=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("img",{src:i,className:"App-logo",alt:"logo"}),Object(s.jsxs)("p",{children:["Edit ",Object(s.jsx)("code",{children:"src/App.jsss"})," and save to reload."]}),Object(s.jsxs)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:["Learn React",Object(s.jsx)(v,{})]})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))};o.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),x()}},[[17,1,2]]]);
//# sourceMappingURL=main.5e1371ff.chunk.js.map