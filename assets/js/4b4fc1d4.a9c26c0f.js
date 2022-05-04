"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[7842],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6766:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),i=["components"],s={title:"Moodle App FAQ",sidebar_label:"FAQ",tags:["Moodle App"]},l=void 0,p={unversionedId:"moodleapp/faq",id:"moodleapp/faq",title:"Moodle App FAQ",description:"How can I contribute to the Moodle App?",source:"@site/docs/moodleapp/faq.md",sourceDirName:"moodleapp",slug:"/moodleapp/faq",permalink:"/devdocs/docs/moodleapp/faq",editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/faq.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1651647713,formattedLastUpdatedAt:"04/05/2022",frontMatter:{title:"Moodle App FAQ",sidebar_label:"FAQ",tags:["Moodle App"]},sidebar:"docs",previous:{title:"Release process",permalink:"/devdocs/docs/moodleapp/development/release-process"},next:{title:"Upgrading your code",permalink:"/devdocs/docs/category/upgrading-your-code"}},c={},u=[{value:"How can I contribute to the Moodle App?",id:"how-can-i-contribute-to-the-moodle-app",level:2},{value:"I see this error: &quot;Cannot connect: Verify that your have typed correctly the URL and that your site uses Moodle 2.4 or later&quot;",id:"i-see-this-error-cannot-connect-verify-that-your-have-typed-correctly-the-url-and-that-your-site-uses-moodle-24-or-later",level:2},{value:"The app starts but it says it cannot connect to any site I try",id:"the-app-starts-but-it-says-it-cannot-connect-to-any-site-i-try",level:2},{value:"Some features like IMSCP, resource mini sites, local notifications are not working in the browser",id:"some-features-like-imscp-resource-mini-sites-local-notifications-are-not-working-in-the-browser",level:2},{value:"What is the difference between a native app and a Mobile specific theme or responsive theme?",id:"what-is-the-difference-between-a-native-app-and-a-mobile-specific-theme-or-responsive-theme",level:2},{value:"I am having problems running the app from the source code",id:"i-am-having-problems-running-the-app-from-the-source-code",level:2}],d={toc:u};function h(e){var t=e.components,o=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-can-i-contribute-to-the-moodle-app"},"How can I contribute to the Moodle App?"),(0,a.kt)("p",null,"You can help with ",(0,a.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MOBILE-3231?jql=project%20%3D%20MOBILE%20AND%20status%20%3D%20Open%20AND%20labels%20%3D%20contribfriendly"},"any issue marked with the ",(0,a.kt)("inlineCode",{parentName:"a"},"contribfriendly")," label"),"."),(0,a.kt)("p",null,"If you want to help with another issue, please let us know first via the tracker, you can a comment in the issue itself."),(0,a.kt)("p",null,"You have a detailed description of our development process here: ",(0,a.kt)("a",{parentName:"p",href:"/general/development/process-moodleapp"},"Moodle App Development Process"),"."),(0,a.kt)("h2",{id:"i-see-this-error-cannot-connect-verify-that-your-have-typed-correctly-the-url-and-that-your-site-uses-moodle-24-or-later"},'I see this error: "Cannot connect: Verify that your have typed correctly the URL and that your site uses Moodle 2.4 or later"'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ensure that debugging is disabled in your site: Site administration > Development > Debugging."),(0,a.kt)("li",{parentName:"ul"},'Check that the ADOdb option is disabled if you are using the external database auth or enrolment plugin. You can do that in "Plugins > Authentication > External database" and in "Plugins > Enrolment > External database".'),(0,a.kt)("li",{parentName:"ul"},"If your site uses an SSL certificate, it must be a trusted certificate, not self-signed. You can use this tool or a similar one to check that your certificate is fine: ",(0,a.kt)("a",{parentName:"li",href:"https://www.geocerts.com/ssl-checker"},"SSL Checker"),'. All the checks must be ok, including the "Certificate Chain Complete". Otherwise the app might work on iOS but not on Android.')),(0,a.kt)("h2",{id:"the-app-starts-but-it-says-it-cannot-connect-to-any-site-i-try"},"The app starts but it says it cannot connect to any site I try"),(0,a.kt)("p",null,"This may happen because you need to use a different browser with special flags enabled so cross domains XHR requests are allowed."),(0,a.kt)("p",null,"In short, you need to download Chromium from ",(0,a.kt)("a",{parentName:"p",href:"https://www.chromium.org/getting-involved/download-chromium/"},"the official download page")," and open it with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chromium-browser --allow-file-access-from-files --disable-web-security\n")),(0,a.kt)("p",null,"For additional information please, read the ",(0,a.kt)("a",{parentName:"p",href:"./development/setup/app-in-browser"},"Using the Moodle App in a browser")," page."),(0,a.kt)("h2",{id:"some-features-like-imscp-resource-mini-sites-local-notifications-are-not-working-in-the-browser"},"Some features like IMSCP, resource mini sites, local notifications are not working in the browser"),(0,a.kt)("p",null,"Some features must be tested directly in a mobile device. You can do that using the application in the app stores, or you can learn how to compile it yourself in the ",(0,a.kt)("a",{parentName:"p",href:"./development/setup#running-the-app-in-android-and-ios"},"Setting up your development environment for the Moodle App")," page."),(0,a.kt)("h2",{id:"what-is-the-difference-between-a-native-app-and-a-mobile-specific-theme-or-responsive-theme"},"What is the difference between a native app and a Mobile specific theme or responsive theme?"),(0,a.kt)("p",null,"You can read about that in the following forum posts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=206736#p901475"},"Juan Leyva forum post")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=206736#p901751"},"Martin Dougiamas forum post"))),(0,a.kt)("h2",{id:"i-am-having-problems-running-the-app-from-the-source-code"},"I am having problems running the app from the source code"),(0,a.kt)("p",null,"If you are having issues getting the app to compile, make sure to check out the troubleshooting section of the ",(0,a.kt)("a",{parentName:"p",href:"./development/setup#troubleshooting"},"Setting up your development environment for the Moodle App")," page."))}h.isMDXComponent=!0}}]);