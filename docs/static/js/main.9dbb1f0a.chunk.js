(this["webpackJsonpsaihemanthbr.github.io"]=this["webpackJsonpsaihemanthbr.github.io"]||[]).push([[0],{35:function(e,n,t){},44:function(e){e.exports=JSON.parse('[{"id":"hero","name":"Hero"},{"id":"about","name":"About"},{"id":"projects","name":"Projects"},{"id":"skills","name":"Skills"},{"id":"contact","name":"Contact"}]')},47:function(e){e.exports=JSON.parse('[{"id":"0","name":"Rocky Beach","filename":"rocky_beach.jpg","copyright":"","color":"#FFFFFF"},{"id":"1","name":"Starship SN10 Landing","filename":"starship_sn10_landing.jpg","copyright":"\xa9 SpaceX Inc.","color":"#000000"},{"id":"2","name":"Starship SN8 Launch","filename":"starship_sn8_launch.jpg","copyright":"\xa9 SpaceX Inc.","color":"#FFFFFF"},{"id":"3","name":"Starship SN8 on Test Stand","filename":"starship_sn8_stand.jpg","copyright":"\xa9 SpaceX Inc.","color":"#FFFFFF"},{"id":"4","name":"Planet Mars","filename":"mars.jpg","copyright":"\xa9 Martians? God?","color":"#FFFFFF"},{"id":"5","name":"macOS Monterey Wallpaper","filename":"monterey.jpg","copyright":"\xa9 Apple Inc. All rights reserved.","color":"#FFFFFF"},{"id":"6","name":"Palace of Westminster, London, UK","filename":"london.jpg","copyright":"\xa9 The Monarch? \ud83e\udd37","color":"#FFFFFF"},{"id":"7","name":"Night Sky","filename":"night_sky.jpg","copyright":"","color":"#FFFFFF"},{"id":"8","name":"Northern Lights, Astotin Lake, Canada","filename":"northern-lights.jpg","copyright":"\xa9 Serey Kim","color":"#FFFFFF"}]')},61:function(e){e.exports=JSON.parse('[{"id":"0","name":"Email","filename":"envelope-mark.svg","link":"mailto:sh.bheemreddy@gmail.com"},{"id":"1","name":"GitHub","filename":"github-mark.svg","link":"https://github.com/SaiHemanthBR"},{"id":"2","name":"LinkedIn","filename":"linkedin-mark.svg","link":"https://www.linkedin.com/in/saihemanthbr/"},{"id":"3","name":"Instagram","filename":"instagram-mark.svg","link":"https://www.instagram.com/saihemanthbr/"},{"id":"4","name":"Twitter","filename":"twitter-mark.svg","link":"https://twitter.com/BSaiHemanth"}]')},62:function(e,n,t){},81:function(e,n,t){},82:function(e,n,t){},83:function(e,n,t){},84:function(e,n,t){},85:function(e,n){},86:function(e,n,t){},87:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),c=t(7),o=t.n(c),r=t(48),s=t(123),l=t(124),h=t(125),m=t(119),d=t(122),j=t(59),b=t.n(j),u=(t(35),t(2));var p=function(e){e.menuId;var n=e.mobileMenuId,t=e.onMobileMenuOpen,a=e.sections;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"navbar-section-desktop",children:a.map((function(e){return Object(u.jsx)(m.a,{variant:"text",className:"navbar-button",children:e.name},e.id)}))}),Object(u.jsx)("div",{className:"navbar-section-mobile",children:Object(u.jsx)(d.a,{"aria-label":"show more","aria-controls":n,"aria-haspopup":"true",onClick:t,color:"inherit",children:Object(u.jsx)(b.a,{})})})]})},g=t(134),F=t(135);var O=function(e){var n=e.id,t=e.anchorEl,a=e.open,i=e.onClose,c=e.sections;return Object(u.jsx)(g.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},id:n,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:i,children:c.map((function(e){return Object(u.jsx)(F.a,{children:e.name},e.id)}))})};var v=function(e){var n=e.id,t=e.anchorEl,a=e.open,i=e.onClose,c=e.sections;return Object(u.jsx)(g.a,{anchorEl:t,anchorOrigin:{vertical:"top",horizontal:"right"},id:n,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:a,onClose:i,children:c.map((function(e){return Object(u.jsx)(F.a,{children:e.name},e.id)}))})};var x=function(e){var n=e.sections,t=Object(a.useState)(null),i=Object(r.a)(t,2),c=i[0],o=i[1],m=Object(a.useState)(null),d=Object(r.a)(m,2),j=d[0],b=d[1],g=Boolean(c),F=Boolean(j),x=function(){b(null)},f="dashboard-search-account-menu",y="dashboard-search-account-menu-mobile";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(s.a,{position:"fixed",elevation:8,className:"navbar",children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(h.a,{className:"navbar-title",variant:"h6",noWrap:!0,children:"Sai Hemanth Bheemreddy"}),Object(u.jsx)("div",{className:"navbar-grow"}),Object(u.jsx)(p,{menuId:f,mobileMenuId:y,onMobileMenuOpen:function(e){b(e.currentTarget)},sections:n})]})}),Object(u.jsx)(v,{anchorEl:j,id:y,open:F,onClose:x,sections:n}),Object(u.jsx)(O,{anchorEl:c,id:f,open:g,onClose:function(){o(null),x()},sections:n})]})},f=t(128),y=t(60),k=t.n(y),N=t(126),S=t(127);t(81);var w=function(e){var n=e.window,t=e.goto,a=Object(N.a)({target:n?n():void 0,disableHysteresis:!0,threshold:300});return Object(u.jsx)(S.a,{in:a,children:Object(u.jsx)("div",{onClick:function(e){var n=(e.target.ownerDocument||document).querySelector("#".concat(t));n&&n.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:"back-to-top-root",children:Object(u.jsx)(f.a,{color:"secondary",size:"medium","aria-label":"scroll back to top",children:Object(u.jsx)(k.a,{})})})})},M=t(47);t(82);var C=function(){var e,n=M[(e=M.length,Math.floor(Math.random()*e))],t="".concat("","/images/heros/").concat(n.filename);return Object(u.jsxs)("div",{className:"hero-image",id:"hero-image",style:{backgroundImage:"url(".concat(t,")")},children:[Object(u.jsxs)("div",{className:"hero-text",style:{color:n.color},children:[Object(u.jsx)(h.a,{variant:"h4",component:"div",className:"hero-title-before",children:"Hello, My name is"}),Object(u.jsx)(h.a,{variant:"h1",component:"div",className:"hero-title",children:"Sai Hemanth Bheemreddy"}),Object(u.jsx)(h.a,{variant:"h4",component:"div",className:"hero-title-after",children:"I love engineering things for fun!"})]}),Object(u.jsxs)("div",{className:"hero-footer",style:{color:n.color},children:[Object(u.jsx)(h.a,{variant:"body1",gutterBottom:!0,className:"name",children:n.name}),Object(u.jsx)("div",{className:"flex-grow"}),Object(u.jsx)(h.a,{variant:"caption",gutterBottom:!0,className:"copyright",children:n.copyright})]})]})};var I=function(){return Object(u.jsx)(u.Fragment,{children:"Projects"})};var B=function(){return Object(u.jsx)(u.Fragment,{children:"Skills"})};var H=function(){return Object(u.jsx)(u.Fragment,{children:"About"})},A=t(129),E=t(130),T=t(131),L=t(61);t(83);var _=function(){var e="".concat("","/images/socials");return Object(u.jsx)("div",{className:"contact-root",children:Object(u.jsxs)(A.a,{maxWidth:"sm",className:"container",children:[Object(u.jsxs)("div",{className:"title-container",children:[Object(u.jsx)(h.a,{variant:"h3",gutterBottom:!0,align:"center",className:"title",children:"Get In Touch"}),Object(u.jsx)(h.a,{variant:"h6",gutterBottom:!0,align:"center",className:"subtitle",children:"My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to DM me about any relevant job updates."})]}),Object(u.jsx)("div",{className:"social-container",children:L.map((function(n){return Object(u.jsx)(E.a,{className:"social-card",elevation:4,children:Object(u.jsxs)(T.a,{className:"social-card-action",href:n.link,children:[Object(u.jsx)("img",{src:"".concat(e,"/").concat(n.filename),alt:"link to ".concat(n.name)}),Object(u.jsx)(h.a,{variant:"subtitle1",align:"center",component:"span",children:n.name})]})},n.id)}))})]})})},P={Hero:Object(u.jsx)(C,{}),Projects:Object(u.jsx)(I,{}),Skills:Object(u.jsx)(B,{}),About:Object(u.jsx)(H,{}),Contact:Object(u.jsx)(_,{})},z=t(44);t(84);var J=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{sections:z.slice(1)}),Object(u.jsx)("div",{className:"container",children:z.map((function(e){return Object(u.jsx)("section",{id:e.id,className:"child",children:P[e.name]},e.id)}))}),Object(u.jsx)(w,{goto:z[0].id})]})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,136)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),c(e),o(e)}))},D=t(132),G=t(133),R=t(63),U=(t(85),t(62)),X=t.n(U);console.log(X.a.primary);var q=Object(R.a)({palette:{primary:{light:"#434345",main:"#1C1C1E",dark:"#000000",contrastText:"#FFFFFF"},secondary:{light:"#69A8FF",main:"#007AFF",dark:"#004FCB",contrastText:"#FFFFFF"},error:{main:"#FF3B30"}},typography:{fontFamily:["-apple-system","BlinkMacSystemFont","'Helvetica Neue'","Roboto","'Segoe UI'","Oxygen","Ubuntu","Cantarell","'Open Sans'","sans-serif"].join(",")}});t(86);o.a.render(Object(u.jsx)(D.a,{theme:q,children:Object(u.jsx)(G.b,{injectFirst:!0,children:Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(J,{})})})}),document.getElementById("root")),W()}},[[87,1,2]]]);
//# sourceMappingURL=main.9dbb1f0a.chunk.js.map