(this["webpackJsonpsaihemanthbr.github.io"]=this["webpackJsonpsaihemanthbr.github.io"]||[]).push([[0],{34:function(e,n,t){},45:function(e){e.exports=JSON.parse('[{"id":"0","name":"Rocky Beach","filename":"rocky_beach.jpg","copyright":"","color":"#FFFFFF"},{"id":"1","name":"Starship SN10 Landing","filename":"starship_sn10_landing.jpg","copyright":"\xa9 SpaceX Inc.","color":"#000000"},{"id":"2","name":"Starship SN8 Launch","filename":"starship_sn8_launch.jpg","copyright":"\xa9 SpaceX Inc.","color":"#FFFFFF"},{"id":"3","name":"Starship SN8 on Test Stand","filename":"starship_sn8_stand.jpg","copyright":"\xa9 SpaceX Inc.","color":"#FFFFFF"},{"id":"4","name":"Planet Mars","filename":"mars.jpg","copyright":"\xa9 Martians? God?","color":"#FFFFFF"},{"id":"5","name":"macOS Monterey Wallpaper","filename":"monterey.jpg","copyright":"\xa9 Apple Inc. All rights reserved.","color":"#FFFFFF"},{"id":"6","name":"Palace of Westminster, London, UK","filename":"london.jpg","copyright":"\xa9 The Monarch? \ud83e\udd37","color":"#FFFFFF"},{"id":"7","name":"Night Sky","filename":"night_sky.jpg","copyright":"","color":"#FFFFFF"},{"id":"8","name":"Northern Lights, Astotin Lake, Canada","filename":"northern-lights.jpg","copyright":"\xa9 Serey Kim","color":"#FFFFFF"}]')},46:function(e){e.exports=JSON.parse('[{"id":"hero","name":"Hero"},{"id":"about","name":"About"},{"id":"projects","name":"Projects"},{"id":"skills","name":"Skills"},{"id":"contact","name":"Contact"}]')},59:function(e,n,t){},79:function(e,n,t){},80:function(e,n,t){},81:function(e,n,t){},82:function(e,n){},83:function(e,n,t){},84:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),c=t.n(o),i=t(47),s=t(118),l=t(119),h=t(120),j=t(114),d=t(117),m=t(57),b=t.n(m),u=(t(34),t(2));var p=function(e){e.menuId;var n=e.mobileMenuId,t=e.onMobileMenuOpen,a=e.sections;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"navbar-section-desktop",children:a.map((function(e){return Object(u.jsx)(j.a,{variant:"text",className:"navbar-button",children:e.name},e.id)}))}),Object(u.jsx)("div",{className:"navbar-section-mobile",children:Object(u.jsx)(d.a,{"aria-label":"show more","aria-controls":n,"aria-haspopup":"true",onClick:t,color:"inherit",children:Object(u.jsx)(b.a,{})})})]})},F=t(126),g=t(127);var O=function(e){var n=e.id,t=e.anchorEl,a=e.open,r=e.onClose,o=e.sections;return Object(u.jsx)(F.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},id:n,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:r,children:o.map((function(e){return Object(u.jsx)(g.a,{children:e.name},e.id)}))})};var x=function(e){var n=e.id,t=e.anchorEl,a=e.open,r=e.onClose,o=e.sections;return Object(u.jsx)(F.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},id:n,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:r,children:o.map((function(e){return Object(u.jsx)(g.a,{children:e.name},e.id)}))})};var v=function(e){var n=e.sections,t=Object(a.useState)(null),r=Object(i.a)(t,2),o=r[0],c=r[1],j=Object(a.useState)(null),d=Object(i.a)(j,2),m=d[0],b=d[1],F=Boolean(o),g=Boolean(m),v=function(){b(null)},f="dashboard-search-account-menu",y="dashboard-search-account-menu-mobile";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.a,{position:"fixed",elevation:8,className:"navbar",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(h.a,{className:"navbar-title",variant:"h6",noWrap:!0,children:"Sai Hemanth Bheemreddy"}),Object(u.jsx)("div",{className:"navbar-grow"}),Object(u.jsx)(p,{menuId:f,mobileMenuId:y,onMobileMenuOpen:function(e){b(e.currentTarget)},sections:n})]})}),Object(u.jsx)(x,{anchorEl:m,id:y,open:g,onClose:v,sections:n}),Object(u.jsx)(O,{anchorEl:o,id:f,open:F,onClose:function(){c(null),v()},sections:n})]})},f=t(123),y=t(58),S=t.n(y),N=t(121),k=t(122);t(79);var C=function(e){var n=e.window,t=Object(N.a)({target:n?n():void 0,disableHysteresis:!0,threshold:300});return Object(u.jsx)(k.a,{in:t,children:Object(u.jsx)("div",{onClick:function(e){var n=(e.target.ownerDocument||document).querySelector("#hero");n&&n.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:"back-to-top-root",children:Object(u.jsx)(f.a,{color:"secondary",size:"medium","aria-label":"scroll back to top",children:Object(u.jsx)(S.a,{})})})})},M=t(45);t(80);var I=function(){var e,n=M[(e=M.length,Math.floor(Math.random()*e))],t="".concat("","/images/heros/").concat(n.filename);return Object(u.jsxs)("div",{className:"hero-image",id:"hero-image",style:{backgroundImage:"url(".concat(t,")")},children:[Object(u.jsxs)("div",{className:"hero-text",style:{color:n.color},children:[Object(u.jsx)(h.a,{variant:"h4",component:"div",className:"hero-title-before",children:"Hello, My name is"}),Object(u.jsx)(h.a,{variant:"h1",component:"div",className:"hero-title",children:"Sai Hemanth Bheemreddy"}),Object(u.jsx)(h.a,{variant:"h4",component:"div",className:"hero-title-after",children:"I love engineering things for fun!"})]}),Object(u.jsxs)("div",{className:"hero-footer",style:{color:n.color},children:[Object(u.jsx)(h.a,{variant:"body1",gutterBottom:!0,className:"name",children:n.name}),Object(u.jsx)("div",{className:"flex-grow"}),Object(u.jsx)(h.a,{variant:"caption",gutterBottom:!0,className:"copyright",children:n.copyright})]})]})};var B=function(){return Object(u.jsx)(u.Fragment,{children:"Projects"})};var w=function(){return Object(u.jsx)(u.Fragment,{children:"Skills"})};var A=function(){return Object(u.jsx)(u.Fragment,{children:"About"})};var E=function(){return Object(u.jsx)(u.Fragment,{children:"Contact"})},_={Hero:Object(u.jsx)(I,{}),Projects:Object(u.jsx)(B,{}),Skills:Object(u.jsx)(w,{}),About:Object(u.jsx)(A,{}),Contact:Object(u.jsx)(E,{})},H=t(46);t(81);var L=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(v,{sections:H.slice(1)}),Object(u.jsx)("div",{className:"container",children:H.map((function(e){return Object(u.jsx)("section",{id:e.id,className:"child",children:_[e.name]},e.id)}))}),Object(u.jsx)(C,{})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,128)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,o=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),o(e),c(e)}))},T=t(124),z=t(125),J=t(60),U=(t(82),t(59)),W=t.n(U);console.log(W.a.primary);var X=Object(J.a)({palette:{primary:{light:"#434345",main:"#1C1C1E",dark:"#000000",contrastText:"#FFFFFF"},secondary:{light:"#69A8FF",main:"#007AFF",dark:"#004FCB",contrastText:"#FFFFFF"},error:{main:"#FF3B30"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont","'Helvetica Neue'","Roboto","'Segoe UI'","Oxygen","Ubuntu","Cantarell","'Open Sans'","sans-serif"].join(",")}});t(83);c.a.render(Object(u.jsx)(T.a,{theme:X,children:Object(u.jsx)(z.b,{injectFirst:!0,children:Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(L,{})})})}),document.getElementById("root")),P()}},[[84,1,2]]]);
//# sourceMappingURL=main.f546a821.chunk.js.map