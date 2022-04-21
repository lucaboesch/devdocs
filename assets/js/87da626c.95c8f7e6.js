"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9044],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4982:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={title:"Integration review",description:"All the information related to the integration review process during the Moodle development.",tags:["Processes","Core development","Integration"]},l=void 0,p={unversionedId:"development/process/integration-review",id:"development/process/integration-review",title:"Integration review",description:"All the information related to the integration review process during the Moodle development.",source:"@site/general/development/process/integration-review.md",sourceDirName:"development/process",slug:"/development/process/integration-review",permalink:"/devdocs/general/development/process/integration-review",editUrl:"https://github.com/andrewnicols/devdocs/edit/main/general/development/process/integration-review.md",tags:[{label:"Processes",permalink:"/devdocs/general/tags/processes"},{label:"Core development",permalink:"/devdocs/general/tags/core-development"},{label:"Integration",permalink:"/devdocs/general/tags/integration"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1650518308,formattedLastUpdatedAt:"21/04/2022",frontMatter:{title:"Integration review",description:"All the information related to the integration review process during the Moodle development.",tags:["Processes","Core development","Integration"]},sidebar:"process",previous:{title:"Peer review",permalink:"/devdocs/general/development/process/peer-review"},next:{title:"Testing",permalink:"/devdocs/general/development/process/testing"}},d={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Integration Principles",id:"integration-principles",level:2},{value:"Component lead review process",id:"component-lead-review-process",level:2},{value:"Integration Review Process",id:"integration-review-process",level:2},{value:"Schedule",id:"schedule",level:2},{value:"In normal periods",id:"in-normal-periods",level:3},{value:"During continuous integration/Freeze/QA period",id:"during-continuous-integrationfreezeqa-period",level:3},{value:"On-sync period",id:"on-sync-period",level:3},{value:"Backporting",id:"backporting",level:2},{value:"General policy",id:"general-policy",level:3},{value:"Process for requesting a non bug-fix backport",id:"process-for-requesting-a-non-bug-fix-backport",level:3},{value:"Polite note about bug classification",id:"polite-note-about-bug-classification",level:3},{value:"Backport fixes to unsupported branches",id:"backport-fixes-to-unsupported-branches",level:3},{value:"Fixing issues identified during integration review/ testing",id:"fixing-issues-identified-during-integration-review-testing",level:2},{value:"Commit squashing",id:"commit-squashing",level:2}],u={toc:c};function m(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"The purpose of the integration review is to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ensure consistent quality across the codebase"),(0,r.kt)("li",{parentName:"ul"},"Ensure that pedagogical aims of Moodle are at the forefront of any change"),(0,r.kt)("li",{parentName:"ul"},"Take into consideration the holistic view of moodle, looking at the impact beyond where the - original developer was focused"),(0,r.kt)("li",{parentName:"ul"},"Provide guidance and feedback to developers, helping them learn and improve"),(0,r.kt)("li",{parentName:"ul"},"Consider ",(0,r.kt)("strong",{parentName:"li"},"other perspectives")," of other users perhaps not considered by original developers e.g.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Teachers"),(0,r.kt)("li",{parentName:"ul"},"Students"),(0,r.kt)("li",{parentName:"ul"},"Administrators"),(0,r.kt)("li",{parentName:"ul"},"The Moodle mobile app"),(0,r.kt)("li",{parentName:"ul"},"Third-party developers")))),(0,r.kt)("h2",{id:"integration-principles"},"Integration Principles"),(0,r.kt)("p",null,"Integration (non-technical but philosophical) principles (4-5 words determining if something has to be integrated/backported or no):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"safety"),": if something does not look safe, stable, it won't land. Be conservative."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"security"),": all security issues, if not breaking principle (1) will be integrated/backported to all security-supported versions."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"community"),": Anything not useful for the community (or against it) won't be integrated/backported. We can measure the community as 10%HQ, 10%Partners, 10%Core developers, 20%Admins, 20%Teachers, 30%Students - not exact science, just one approximation, you know). Question yourself how the change will affect those groups and ensure positives are bigger always (only affected groups count). All community issues, if not breaking principles (1) and (2) will be integrated."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"typology"),": bug fixes will be always integrated/backported to all the supported branches if none of the principles (1), (2) and (3) are violated. Also, partially-unsupported branches can receive some if they are important enough. Improvements and new features go, exclusively, to master only, that's the main reason for short release periods. We ",(0,r.kt)("em",{parentName:"li"},"MUST")," not make exceptions to this."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"priority"),': issues will be "ordered down" by priority down (where priority is a ',(0,r.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/issues/?filter=14000"},"mix of various factors"),", dynamic). And will be integrated in that order. If something has to be delayed, better if it is low priority. Once again, nothing here can break any of the previous principles."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"tests"),": unit tests and acceptance tests will backported as much as possible without breaking (1) and (2). New features required to implement tests will be backported if the API is 100% backwards compatible.")),(0,r.kt)("p",null,'If all the principles are fulfilled, the answer for "should I integrate this?" is, "yes, please!" (apart from technical findings, of course, that can lead to the issue being not integrated/reopened at last, these principles are 100% philosophical)'),(0,r.kt)("h2",{id:"component-lead-review-process"},"Component lead review process"),(0,r.kt)("p",null,"Please see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Component_Lead_Review"},"Component Lead Review")," documentation for further information on the CLR process."),(0,r.kt)("h2",{id:"integration-review-process"},"Integration Review Process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Run automated pre-checks against the continuous integration server. (In future this can be automated and also moved into a publicly\naccessible domain.)"),(0,r.kt)("li",{parentName:"ol"},"Final code review, much like the peer review, except that this is the final check. To include",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Takes place in-situ (integrated) to examine the impact to other integrated issues"),(0,r.kt)("li",{parentName:"ol"},"Checking against the coding guidelines - syntax/whitespace"),(0,r.kt)("li",{parentName:"ol"},"Moodleisms - using the built-in API functions where appropriate"),(0,r.kt)("li",{parentName:"ol"},"Cross-DB compatibility"),(0,r.kt)("li",{parentName:"ol"},"Security"))),(0,r.kt)("li",{parentName:"ol"},"Check purpose - the patch needs to fix the issue reported."),(0,r.kt)("li",{parentName:"ol"},"Verify target branches are appropriated. They must match 100% the rules defined for ",(0,r.kt)("a",{parentName:"li",href:"#backporting"},"backporting issues"),"."),(0,r.kt)("li",{parentName:"ol"},"Ensure backwards compatibility is maintained. As a starting point backwards compatibility must always be maintained. Where backwards\ncompatibility is affected it should be:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Well discussed with evidence of justification"),(0,r.kt)("li",{parentName:"ol"},"Documented and communicated to the community"))),(0,r.kt)("li",{parentName:"ol"},"Ensure backwards compatibility with the Moodle mobile app. Especially in areas where the Moodle app uses pre-rendered content from\nthe site (like Quiz or Lesson)"),(0,r.kt)("li",{parentName:"ol"},"Verify that components are correct and check the right people have been involved (e.g. component maintainers)"),(0,r.kt)("li",{parentName:"ol"},"For fundamental changes, check that a thread has been started in an appropriate forum, and other Moodlers, given enough time to\ncomment."),(0,r.kt)("li",{parentName:"ol"},"Tests - must be written to guide tester to verify the fix is working.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Unit test - very much preferred if applicable"),(0,r.kt)("li",{parentName:"ol"},"at end of Wednesday, ensure testing is going to complete as expected. else take other actions (speak to test manager)"))),(0,r.kt)("li",{parentName:"ol"},"Performance - we have to look at maintaining optimum code here, as far as simple patches that can affect performance. (simple\noptimisations)"),(0,r.kt)("li",{parentName:"ol"},"Scalability - if master only - we're looking far future, stable branches may not be lucky to get such improvements."),(0,r.kt)("li",{parentName:"ol"},"git authorship is correct vs committer + credits due are mentioned + email addresses"),(0,r.kt)("li",{parentName:"ol"},"Documentation / PHP Doc / readability"),(0,r.kt)("li",{parentName:"ol"},"",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Tracker_issue_labels"},"Tracker issue labels")," which might need adding. Particularly:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"docs_required / dev_docs_required / release_notes: About which type of documentation is required for the issue."),(0,r.kt)("li",{parentName:"ol"},"ui_change / api_change: About the implications of the change."),(0,r.kt)("li",{parentName:"ol"},"unit_test_required / acceptance_test_required / qa_test_required: About the need to cover the issue with some test."),(0,r.kt)("li",{parentName:"ol"},"affects_mobileapp / affects_workplace / affects_moodlecloud: About issues that may affect other Moodle products and services"))),(0,r.kt)("li",{parentName:"ol"},"",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Tracker_issue_versions"},"Tracker issue versions")," review. Particularly:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Fixed Version after integration - is the versions that the issue is patched for. (A rule here: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Tracker_issue_versions#Some_general_and_simple_rules"},'"or stables or master"'),")."),(0,r.kt)("li",{parentName:"ol"},'Remove any "Must fix for X.Y" version once the issue is integrated.'))),(0,r.kt)("li",{parentName:"ol"},"Whenever any of the points above or any other detail require extra information or action to be done by the assignee, and the integrator\nconsiders that they can be fixed without needing to discard/reopen, the issue will be sent to ",(0,r.kt)("inlineCode",{parentName:"li"},"Waiting for feedback")," with all the details to\ncomplete. Once everything has been fulfilled, always within a reasonable amount of time (still to decide), the issue will be sent back to\nintegration by the assignee."),(0,r.kt)("li",{parentName:"ol"},"Assign the tester.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Don't forget to update the weight in the testers sheet")))),(0,r.kt)("h2",{id:"schedule"},"Schedule"),(0,r.kt)("h3",{id:"in-normal-periods"},"In normal periods"),(0,r.kt)("p",null,"The integrators adhere to the following schedule: (links here should convert the times into your local timezone)"),(0,r.kt)("p",null,"All the flow of issues to current integration is automatically controlled by the ",(0,r.kt)("a",{parentName:"p",href:"https://ci.moodle.org/view/Tracker/job/TR%20-%20Manage%20queues%20on%20normal/"},"Manage queues on normal job")," that keeps the current queue fed with issues, moves important ones and prioritises long awaiting issues. Issues are picked in strict integration order."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Monday to Thursday until ",(0,r.kt)("a",{parentName:"li",href:"http://time.unitarium.com/utc/4"},"12:00 (UTC+8)"),": Integration and ",(0,r.kt)("a",{parentName:"li",href:"/general/development/process/testing/integrated-issues#the-testing-process"},"Testing")," happen. Note that 24h before the cutoff it's possible to pick issues out of order towards queues reduction."),(0,r.kt)("li",{parentName:"ul"},"Thursday after 12:00 (UTC+8): Integrators duties during this time are to monitor, facilitate and 'problem solve' the testing process."),(0,r.kt)("li",{parentName:"ul"},"Friday: Testing should be completed before (the sooner the better) 12:00 (UTC+8) at which time remaining testing failures will be reverted/rewritten and reopened. The release process follows."),(0,r.kt)("li",{parentName:"ul"},"Friday after ",(0,r.kt)("a",{parentName:"li",href:"http://time.unitarium.com/utc/4"},"12:00 (UTC+8)"),": Should be kept free from integration. Integration systems are maintained during this time.")),(0,r.kt)("p",null,"Note that under the strict schedule above, it is specially important ",(0,r.kt)("strong",{parentName:"p"},"to be as responsive as possible"),", both when the issue is being integrated and when ",(0,r.kt)("a",{parentName:"p",href:"/general/development/process/testing/integrated-issues#expectation-from-tester"},"testing"),". Any significant delay by any of the actors involved will result in the issue being moved out from current integration."),(0,r.kt)("h3",{id:"during-continuous-integrationfreezeqa-period"},"During continuous integration/Freeze/QA period"),(0,r.kt)("p",null,"During the continuous integration period (last 6 weeks before release) the integration team are continuously focused on producing regular builds of master to facilitate QA and fast fixes to issues identified."),(0,r.kt)("p",null,"Throughout:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Issues are picked on a one by one basis, prioritising ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/QA_testing#Resetting_tests"},"QA blockers")," and master regressions (MUST FIX) issues."),(0,r.kt)("li",{parentName:"ul"},"After freeze (usually 5 weeks before release) any non bug fix issues are given the ",(0,r.kt)("inlineCode",{parentName:"li"},"integration_held")," label and are explicitly not picked for integration. Still, anybody is able to add a reasoned ",(0,r.kt)("inlineCode",{parentName:"li"},"unhold_requested")," label to those issues in order to get them unblocked by the development managers. Note this does not guarantee the issue to land before release, but just gives it a chance to be integrated like any other issue."),(0,r.kt)("li",{parentName:"ul"},"Also, coming together with freeze, all the flow of issues to current integration is automatically controlled by the ",(0,r.kt)("a",{parentName:"li",href:"https://ci.moodle.org/view/Tracker/job/TR%20-%20Manage%20queues%20on%20continuous/"},"Manage queues on continuous")," job that keeps the current queue fed with issues, moves important ones, holds new features and other niceties. Issues are picked in strict integration order."),(0,r.kt)("li",{parentName:"ul"},"Our goal is to achieve 'release-ability' throughout, so we stop integrating to ensure a release happens")),(0,r.kt)("p",null,"So, basically, once under continuous integration, we do organize work as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Continuous officially begins. Everybody is on integration. Until end of on-sync period."),(0,r.kt)("li",{parentName:"ul"},"Monday: Integration and ",(0,r.kt)("a",{parentName:"li",href:"/general/development/process/testing/integrated-issues#differences-in-test-process-during-continuous-integration-periods"},"testing")," happens."),(0,r.kt)("li",{parentName:"ul"},"Tuesday: Integration happens until ",(0,r.kt)("a",{parentName:"li",href:"http://time.unitarium.com/utc/4"},"12:00 (UTC+8)"),", afterwards we try to ",(0,r.kt)("a",{parentName:"li",href:"/general/development/process/testing/integrated-issues#differences-in-test-process-during-continuous-integration-periods"},"achieve 100% 'Test Passed'")," and stop integrating any untested changes until a master release is produced."),(0,r.kt)("li",{parentName:"ul"},"Wednesday: ","[Assuming a master release has been rolled]"," Integration and testing continues"),(0,r.kt)("li",{parentName:"ul"},"Thursday: Integration and testing continues"),(0,r.kt)("li",{parentName:"ul"},"Friday: Integration happens until ",(0,r.kt)("a",{parentName:"li",href:"http://time.unitarium.com/utc/4"},"12:00 (UTC+8)"),", afterwards we try to achieve 100% 'Test Passed' and stop integrating any untested changes until a master release is produced. Note that 24h before the cutoff it's possible to pick issues out of order towards queues reduction.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Along this period we always release as many stable weeklies, both supported (always) and security only (when there are changes), as master rolls (on-demand, beta, rc) happen (see ",(0,r.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDLSITE-3470"},"MDLSITE-3470"),"). Note that those tags are not simply tags but they come with some important implications, aiming to stability, safety and clarity. Integrators will try to remain loyal to them, be warned:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Once beta is released"),', new features or improvements "unrelated" with the release will be really harder to be accepted. A +4 from developer managers (normally +3 is enough) will be needed to proceed with the issue. Integrators vote will be, always, -1.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Once rc are released"),', new features or improvements "unrelated" with the release are forbidden. No unhold voting, no managers. Simply forbidden.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last week before release"),', only "related" issues will be picked for integration. Everything else (bug fixes included) are kept out (given the "integration_held" label) if unrelated, at very least until after release. No distractions.')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Definition: ",(0,r.kt)("inlineCode",{parentName:"p"},"related")," said to be a followup of required/planned to release OR a direct (and recent) regression caused by a bug fix OR a security issue."))),(0,r.kt)("h3",{id:"on-sync-period"},"On-sync period"),(0,r.kt)("p",null,"Immediately after a major release and for a short period (right now, 2 weeks, matching 1st HQ sprint duration), the integration team is under the named on-sync period."),(0,r.kt)("p",null,"At all effects, it's a normal period (see above), and weeklies are produced for supported stable branches and also for master. But with one important rule/goal:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We must keep the latest stable branch and master 100% on-sync, specifically about versions and upgrade steps. Some well-known exceptions to this are: ",(0,r.kt)("em",{parentName:"li"},".travis.yml"),", ",(0,r.kt)("em",{parentName:"li"},"backup.class.php"),", ",(0,r.kt)("em",{parentName:"li"},"config.php")," (",(0,r.kt)("em",{parentName:"li"},"$release"),", ",(0,r.kt)("em",{parentName:"li"},"$branch"),", ",(0,r.kt)("em",{parentName:"li"},"$maturity")," and comments only, never ",(0,r.kt)("em",{parentName:"li"},"$version"),"!), ",(0,r.kt)("em",{parentName:"li"},"install/lang/xx files")," (the new stable branch for install lang files is created 2w after the release).")),(0,r.kt)("p",null,"This simple, but important constraint, is there to facilitate the integration of impeding bugs, needing urgent resolution, and by keeping them the same, we guarantee that any stable or master fix will apply without problems to both branches. Of course, in order to achieve the rule, these must be also observed along the period:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We continuously perform diffs between the latest stable and master, controlling that we are on-sync. Any non-authorised difference is cleaned (rewritten). Whenever a latest stable branch is missing in the issue (it's optional over the period), we automatically cherry pick the changes straight from master."),(0,r.kt)("li",{parentName:"ul"},"Both improvements and new features (and, in general, everything leading to divergence) are held until the on-sync period ends.")),(0,r.kt)("p",null,"Last, but not less important, a second goal for this on-sync period is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"environmental requirements for next major version")," ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Release_process#2_weeks_after"},"must be agreed and resolved so they can land to master")," early in the process, remaining defined and stable over the next, 6 months of, development cycle.\nAs part of the standard ",(0,r.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Release_process"},"Moodle release process"),', at the beginning of the on-sync period, we "unhold" all bugs that were held during the last week before the release because they were unrelated to the release. At the end of the onsync period we "unhold" all new features that were submitted after the code freeze for the the release.')),(0,r.kt)("h2",{id:"backporting"},"Backporting"),(0,r.kt)("p",null,"Whilst we'd all like all Moodle users to be using our latest and greatest code, there is a balance to strike between improving our software and maintaining stability (both in terms of regressions, but also training and documentation materials). Large amounts of change on the stable branches make the lives difficult for institutions to manage upgrades between point releases."),(0,r.kt)("h3",{id:"general-policy"},"General policy"),(0,r.kt)("p",null,"Our general policy is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bug fixes will be backported to all (and only to) supported stable branches.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When fixing a bug, please provide a fix for all supported stable branches."),(0,r.kt)("li",{parentName:"ul"},"If a fix doesn't make sense to be backported to every branch, please make it clear in the issue."))),(0,r.kt)("li",{parentName:"ul"},"Improvements or new features will only land in master.")),(0,r.kt)("h3",{id:"process-for-requesting-a-non-bug-fix-backport"},"Process for requesting a non bug-fix backport"),(0,r.kt)("p",null,"Improvements or new features can be requested to be backported to the stable branches. We urge developers to consider this request carefully. In recent years, Moodle has moved to a short and predictable time based release schedule and we use a very effective distributed source control system. Both of these process changes should ensure that a change not being backported to the stable branches is not as problematic as it may have used to be."),(0,r.kt)("p",null,"Should you feel that a new feature or improvement needs backporting, please follow this process:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"File a new issue."),(0,r.kt)("li",{parentName:"ol"},'Set the issue title using our backport template guide. (i.e. "Fix forum alignment (backport of MDL-99999)").'),(0,r.kt)("li",{parentName:"ol"},'Link the original issue using link type "Will help resolve".'),(0,r.kt)("li",{parentName:"ol"},"You should include clear rationale for the request to backport")),(0,r.kt)("p",null,"The integration team will process backport requests, with the following guidelines:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The integration team will together consider each request individually considering the needs of the community (influenced by forum posts, moodle partners, nagging developers etc)."),(0,r.kt)("li",{parentName:"ol"},"Backports will happen not earlier than 3 weeks and not later than 2 months after the request was performed."),(0,r.kt)("li",{parentName:"ol"},"Rationale will be given for rejection")),(0,r.kt)("p",null,"If the backport request is approved, please follow the usual development process to submit the feature or improvement on earlier branches. Just to be clear, this means using the new bug number. So, even if the fix you are back-porting cherry-picks cleanly, you will need to amend the commit comment to use the new MDL-XXXXX number."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'It would be good practice to also add a line like "This is a backport of MDL-YYYYY." in the amended commit comment.'))),(0,r.kt)("p",null,'You can probably copy the testing instructions from the original issue. If so, make it clear you done this by saying something like "Copied from MDL-66327". Of course, if you can improve the instructions, feel free to edit. ',(0,r.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-66614"},"MDL-66614")," and ",(0,r.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-66327"},"MDL-66327")," are probably a reasonably good example fo what should be done."),(0,r.kt)("h3",{id:"polite-note-about-bug-classification"},"Polite note about bug classification"),(0,r.kt)("p",null,"Many issues can be appropriately classified as borderline bug-fix/improvements. We politely request that developers do not try and 'game the system' by classifying their improvements as bugs intentionally. If your fix is in a grey area, please state your case for it being a bug fix clearly. The integration team will use their discretion where necessary."),(0,r.kt)("h3",{id:"backport-fixes-to-unsupported-branches"},"Backport fixes to unsupported branches"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Given the ",(0,r.kt)("a",{parentName:"li",href:"#general-policy"},"general policy")," above, only supported stable branches are candidates normally."),(0,r.kt)("li",{parentName:"ul"},"Also security, privacy, data-loss and regressions caused by any of the previous issue types are accepted to be fixed into security-only supported branches.",(0,r.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This doesn't include ",(0,r.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Tracker_issue_labels"},(0,r.kt)("inlineCode",{parentName:"a"},"security_benefit")," labelled issues"),".")))),(0,r.kt)("li",{parentName:"ul"},"Apart from the previous, issues required to keep the testing infrastructure working and passing (travis, behat, phpunit, random failures, new steps availability...) will also be accepted when possible into security-only branches."),(0,r.kt)("li",{parentName:"ul"},"Finally, backport to unsupported branches only will happen when the issue is a ",(0,r.kt)("strong",{parentName:"li"},"direct regression caused by a bug fix")," introduced by the very latest releases. This applies to both security-only and out-of-support branches.")),(0,r.kt)("p",null,"A new weekly release will be performed including all the cases above, but ",(0,r.kt)("a",{parentName:"p",href:"/general/development/process#security-issues"},"security issues that follow its own special process")," and are released bi-monthly."),(0,r.kt)("h2",{id:"fixing-issues-identified-during-integration-review-testing"},"Fixing issues identified during integration review/ testing"),(0,r.kt)("p",null,"When a branch has been merged by an integrator, it is important that you do not modify the existing history of your branch (e.g. by amending or squashing your commits) and instead add new commits on top. If you modify the history of your branch, it makes it extremely difficult for the integrator to merge your changes (and see the differences)."),(0,r.kt)("p",null,"As a general rule, this means that if your issue has entered the 'in integration review' stage of the development process, please only add new commits on top of your existing commits. There are circumstances when your issue will be 'in integration review' but not merged (and thus possible to squash changes) but if in any doubt, please add new commits and ask the integrator to squash your changes for you."),(0,r.kt)("h2",{id:"commit-squashing"},"Commit squashing"),(0,r.kt)("p",null,'The Integration team will sometimes recommend squashing commits when things do not look natural (and may offer to do this for you), especially when there are "fix-commits" in the history happening before integration. You will not be forced to squash your changes because our policy is: ',(0,r.kt)("em",{parentName:"p"},'"If you want your history of commits to look like bad, it\'s your history."'),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You should pay close attention to ",(0,r.kt)("a",{parentName:"p",href:"/general/development/policies/codingstyle#git-commits"},"Git_commits")," and intend to ",(0,r.kt)("em",{parentName:"p"},'"Tell a perfect, cleaned up version of the history. As if the code was written perfectly first time."'),"."))))}m.isMDXComponent=!0}}]);