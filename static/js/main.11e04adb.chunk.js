(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(5),l=c.n(s),r=(c(10),c(2)),o=(c(11),c(4)),i=c.n(o),b=c(0);function d(e){return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(b.jsxs)("div",{className:"container-fluid ",children:[Object(b.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(b.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link active","aria-current":"page",href:"",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"/about",children:e.aboutText})})]}),Object(b.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable darkMode"})]}),Object(b.jsxs)("div",{className:"form-check mx-3 form-switch text-".concat("light"===e.mode?"green":"light"),children:[Object(b.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode2,id:"flexSwitchCheckDefault"}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable greenMode"})]})]})]})})}function h(e){var t=Object(a.useState)("black"),c=Object(r.a)(t,2),n=c[0],s=c[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:" container mb-3 my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(b.jsx)("h1",{children:e.heading}),Object(b.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){console.log("handle on change "),s(e.target.value)},id:"area",rows:"8",style:{backgroundColor:"dark"===e.mode?"black":"white",color:"dark"===e.mode?"white":"black"}}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log("uppercase was clicked");var e=n.toUpperCase();s(e)},children:"convert to uppercase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-3 my-3",onClick:function(){console.log("lowercase was clicked");var t=n.toLowerCase();s(t),e.showAlert("Text has been converted to lowercase","success")},children:"convert to lowercase"}),Object(b.jsx)("button",{className:"btn btn-primary mx-3 my-3",onClick:function(){console.log("clear");var t=n.charAt(0).toUpperCase()+n.slice(1);s(t),e.showAlert("capitalize first letter","success")},children:"Capital"}),Object(b.jsx)("button",{className:"btn btn-primary mx-3 my-3",onClick:function(){console.log("clear");s(""),e.showAlert("Text has been cleared","success")},children:"Clear"})]}),Object(b.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(b.jsx)("h1",{children:"your text summary"}),Object(b.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(b.jsxs)("p",{children:[.008*n.split(" ").length," Minutes to read"]}),Object(b.jsx)("h2",{children:"Preview"}),Object(b.jsx)("p",{children:n})]})]})}d.ProTypes={title:i.a.string,aboutText:i.a.string},d.defaultProps={title:"set title here",aboutText:"About text here"};var u=function(e){return e.alert&&Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(b.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),":",e.alert.msg]})})};var j=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),l=Object(r.a)(s,2),o=l[0],i=l[1],j=function(e,t){i({msg:e,type:t}),setTimeout((function(){i(null)}),3e3)};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{title:"Textutils",mode:c,toggleMode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="black",j("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",j("Light mode has been enabled","success"))},toggleMode2:function(){"light"===c?(n("success"),document.body.style.backgroundColor="green",j("Green mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",j("Light mode has been enabled","success"))},aboutText:"About Textutils"}),Object(b.jsx)(u,{alert:o}),Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(h,{heading:"Enter the Text here",showAlert:j,mode:c})})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.11e04adb.chunk.js.map