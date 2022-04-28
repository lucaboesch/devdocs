"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[3153],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(o),m=r,f=l["".concat(i,".").concat(m)]||l[m]||d[m]||a;return o?n.createElement(f,p(p({ref:t},u),{},{components:o})):n.createElement(f,p({ref:t},u))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,p=new Array(a);p[0]=l;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var c=2;c<a;c++)p[c]=o[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}l.displayName="MDXCreateElement"},7538:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),p=["components"],s={title:"Custom Moodle Apps",sidebar_position:3,tags:["Moodle App"]},i=void 0,c={unversionedId:"guides/moodleapp/customisation/custom-apps",id:"guides/moodleapp/customisation/custom-apps",title:"Custom Moodle Apps",description:"Unfortunately, the core team does not have the resources to help people use the open source code to build custom apps.",source:"@site/docs/guides/moodleapp/customisation/custom-apps.md",sourceDirName:"guides/moodleapp/customisation",slug:"/guides/moodleapp/customisation/custom-apps",permalink:"/devdocs/docs/guides/moodleapp/customisation/custom-apps",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/guides/moodleapp/customisation/custom-apps.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1651129184,formattedLastUpdatedAt:"28/04/2022",sidebarPosition:3,frontMatter:{title:"Custom Moodle Apps",sidebar_position:3,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Remote themes upgrade guide",permalink:"/devdocs/docs/guides/moodleapp/customisation/remote-themes-upgrade-guide"},next:{title:"Development",permalink:"/devdocs/docs/guides/moodleapp/development/"}},u={},d=[],l={toc:d};function m(e){var t=e.components,o=(0,r.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unfortunately, the core team does not have the resources to help people use the open source code to build custom apps."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://moodle.com/"},"MoodleHQ")," provides a service where they can customise the app for anyone who needs it including the Push Notifications service management with Airnotifier. This service also helps fund the overall development of the app: ",(0,a.kt)("a",{parentName:"p",href:"https://moodle.com/branded-app/"},"moodle.com/branded-app/"),"."),(0,a.kt)("p",null,"If you\u2019re still considering making your own custom app, you can read the rest of the\ndocumentation in this wiki to understand how the application works and you\u2019re also welcome to ask for help in ",(0,a.kt)("a",{parentName:"p",href:"https://moodle.org/mod/forum/view.php?id=7798"},"the forum")," or ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Moodle%20Mobile%20custom%20apps"},"read the legacy documentation")," (no longer maintained)."))}m.isMDXComponent=!0}}]);