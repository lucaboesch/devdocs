"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9280],{3905:function(e,t,o){o.d(t,{Zo:function(){return d},kt:function(){return c}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=u(o),c=r,m=g["".concat(p,".").concat(c)]||g[c]||s[c]||a;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2649:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],l={title:"Debugging network requests in the Moodle App",sidebar_label:"Debugging network requests",sidebar_position:5,tags:["Moodle App"]},p=void 0,u={unversionedId:"moodleapp/development/network-debug",id:"moodleapp/development/network-debug",title:"Debugging network requests in the Moodle App",description:"Introduction",source:"@site/docs/moodleapp/development/network-debug.md",sourceDirName:"moodleapp/development",slug:"/moodleapp/development/network-debug",permalink:"/devdocs/docs/moodleapp/development/network-debug",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/network-debug.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1651647713,formattedLastUpdatedAt:"04/05/2022",sidebarPosition:5,frontMatter:{title:"Debugging network requests in the Moodle App",sidebar_label:"Debugging network requests",sidebar_position:5,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Deep Linking",permalink:"/devdocs/docs/moodleapp/development/deep-linking"},next:{title:"Testing",permalink:"/devdocs/docs/category/testing"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Enabling debugging on your Moodle site",id:"enabling-debugging-on-your-moodle-site",level:2},{value:"Enabling debugging on the Moodle App",id:"enabling-debugging-on-the-moodle-app",level:2},{value:"First attempts",id:"first-attempts",level:2},{value:"Setting up the debugging tool",id:"setting-up-the-debugging-tool",level:2},{value:"Using a Browser",id:"using-a-browser",level:3},{value:"Using a mobile device or emulator",id:"using-a-mobile-device-or-emulator",level:3},{value:"General strategy",id:"general-strategy",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"How to log into a site configured to use browser or embedded authentication",id:"how-to-log-into-a-site-configured-to-use-browser-or-embedded-authentication",level:3}],g={toc:s};function c(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This guide will help you find and report problems with the Moodle App on your site."),(0,a.kt)("p",null,"It is especially useful for the following problems:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unable to log in on your site."),(0,a.kt)("li",{parentName:"ul"},"When you receive one of the following error messages in the app:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'"Can not find data record in database table external_functions".'),(0,a.kt)("li",{parentName:"ul"},'"Invalid response value detected".'),(0,a.kt)("li",{parentName:"ul"},'"Cannot get course contents".')))),(0,a.kt)("h2",{id:"enabling-debugging-on-your-moodle-site"},"Enabling debugging on your Moodle site"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to Debugging in the Site administration."),(0,a.kt)("li",{parentName:"ol"},"For \"Debug messages\" select 'DEVELOPER'."),(0,a.kt)("li",{parentName:"ol"},'Tick "Display debug messages".'),(0,a.kt)("li",{parentName:"ol"},"Click the 'Save changes' button.")),(0,a.kt)("p",null,"Remember to disable debugging again once you have finished debugging your problem."),(0,a.kt)("h2",{id:"enabling-debugging-on-the-moodle-app"},"Enabling debugging on the Moodle App"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the More tab."),(0,a.kt)("li",{parentName:"ol"},"Go to Settings > General."),(0,a.kt)("li",{parentName:"ol"},'Enable "Display debug messages".')),(0,a.kt)("p",null,"Remember to disable debugging again once you have finished debugging your problem."),(0,a.kt)("h2",{id:"first-attempts"},"First attempts"),(0,a.kt)("p",null,"At this point, you may not need to go further on this guide."),(0,a.kt)("p",null,"Log out and log in again into your site and try to reproduce the error. Hopefully, with Moodle and app debugging enabled you will see an explanatory message of what is happening."),(0,a.kt)("p",null,"If you are unable to find a solution, contact a ",(0,a.kt)("a",{parentName:"p",href:"https://moodle.com/partners/"},"Moodle Partner")," or post in the ",(0,a.kt)("a",{parentName:"p",href:"https://moodle.org/mod/forum/view.php?id=7798"},"Moodle for mobile forum")," on moodle.org for non-guaranteed community support."),(0,a.kt)("h2",{id:"setting-up-the-debugging-tool"},"Setting up the debugging tool"),(0,a.kt)("h3",{id:"using-a-browser"},"Using a Browser"),(0,a.kt)("p",null,"In your ",(0,a.kt)("a",{parentName:"p",href:"./setup/app-in-browser"},"Chromium-based browser"),", you can access your site using the hosted versions of the app in ",(0,a.kt)("a",{parentName:"p",href:"https://master.apps.moodledemo.net"},"master.apps.moodledemo.net")," (the latest stable version) and ",(0,a.kt)("a",{parentName:"p",href:"https://integration.apps.moodledemo.net"},"integration.apps.moodledemo.net"),"."),(0,a.kt)("p",null,"Once you're using your site, you can open the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/network/"},"Network panel")," of the developer tools and inspect requests. If you're only interested in web service requests, ",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/network/#filter"},"you can filter")," writing ",(0,a.kt)("inlineCode",{parentName:"p"},".php")," in the filter input."),(0,a.kt)("h3",{id:"using-a-mobile-device-or-emulator"},"Using a mobile device or emulator"),(0,a.kt)("p",null,"If you are using a native device, keep in mind that some requests are not executed through the webview and you won't be able to see them in the network inspector of your developer tools. Instead, you'll have to use native tools the debug the requests."),(0,a.kt)("p",null,"For example, in Android you can use ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/profile/network-profiler"},"the Network Profiler"),"."),(0,a.kt)("h3",{id:"general-strategy"},"General strategy"),(0,a.kt)("p",null,"Here's how to debug web service errors:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Ignore requests that don't start with ",(0,a.kt)("inlineCode",{parentName:"li"},"token.php")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"server.php"),"."),(0,a.kt)("li",{parentName:"ol"},'Once you have selected a request you want to inspect, open the "Response" tab and check if you see an error.'),(0,a.kt)("li",{parentName:"ol"},"If you don't understand how to fix the error, you can search in ",(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Moodle_Mobile_FAQ"},"Moodle Mobile FAQ")," to check if there is a known solution."),(0,a.kt)("li",{parentName:"ol"},"If you are unable to find a solution, contact a ",(0,a.kt)("a",{parentName:"li",href:"https://moodle.com/partners/"},"Moodle Partner")," or post in the ",(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/view.php?id=7798"},"Moodle for mobile forum")," on moodle.org for non-guaranteed community support.")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"how-to-log-into-a-site-configured-to-use-browser-or-embedded-authentication"},"How to log into a site configured to use browser or embedded authentication"),(0,a.kt)("p",null,"You can execute the following in the JavaScript console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'window.handleOpenURL("moodlemobile://URL?token=WSTOKEN");\n')),(0,a.kt)("p",null,"You can also launch a normal authentication process (allowing the authentication popup) and capture the redirect to ",(0,a.kt)("inlineCode",{parentName:"p"},"moodlemobile://...")," created by the ",(0,a.kt)("inlineCode",{parentName:"p"},"admin/tool/mobile/launch.php")," script and then execute the following in the console:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'window.handleOpenURL("moodlemobile://token=ABCxNGUxMD........=");\n')))}c.isMDXComponent=!0}}]);