"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[684],{684:function(e,t,n){n.d(t,{Z:function(){return Ot}});var o=n(3366),r=n(7462),i=n(7294),a=n(6010),s=n(8442);function p(e,t={},n){return(0,s.Z)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}var c=n(7192),u=n(1796),l=n(9348),f=n(6682),d=n(3230);function m(){return(0,f.Z)(d.Z)}var h=n(4502),v=n(8216),g=n(4578),y=n(3935),b=!1,x=n(220),w="unmounted",E="exited",O="entering",T="entered",Z="exiting",R=function(e){function t(t,n){var o;o=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return o.appearStatus=null,t.in?i?(r=E,o.appearStatus=O):r=T:r=t.unmountOnExit||t.mountOnEnter?w:E,o.state={status:r},o.nextCallback=null,o}(0,g.Z)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===w?{status:E}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==O&&n!==T&&(t=O):n!==O&&n!==T||(t=Z)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,o=this.props.timeout;return e=t=n=o,null!=o&&"number"!=typeof o&&(e=o.exit,t=o.enter,n=void 0!==o.appear?o.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===O?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===E&&this.setState({status:w})},n.performEnter=function(e){var t=this,n=this.props.enter,o=this.context?this.context.isMounting:e,r=this.props.nodeRef?[o]:[y.findDOMNode(this),o],i=r[0],a=r[1],s=this.getTimeouts(),p=o?s.appear:s.enter;!e&&!n||b?this.safeSetState({status:T},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:O},(function(){t.props.onEntering(i,a),t.onTransitionEnd(p,(function(){t.safeSetState({status:T},(function(){t.props.onEntered(i,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:y.findDOMNode(this);t&&!b?(this.props.onExit(o),this.safeSetState({status:Z},(function(){e.props.onExiting(o),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:E},(function(){e.props.onExited(o)}))}))}))):this.safeSetState({status:E},(function(){e.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,t.nextCallback=null,e(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:y.findDOMNode(this),o=null==e&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],a=r[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===w)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,o.Z)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return i.createElement(x.Z.Provider,{value:null},"function"==typeof n?n(e,r):i.cloneElement(i.Children.only(n),r))},t}(i.Component);function S(){}R.contextType=x.Z,R.propTypes={},R.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:S,onEntering:S,onEntered:S,onExit:S,onExiting:S,onExited:S},R.UNMOUNTED=w,R.EXITED=E,R.ENTERING=O,R.ENTERED=T,R.EXITING=Z;var P=R;function k(e,t){var n,o;const{timeout:r,easing:i,style:a={}}=e;return{duration:null!=(n=a.transitionDuration)?n:"number"==typeof r?r:r[t.mode]||0,easing:null!=(o=a.transitionTimingFunction)?o:"object"==typeof i?i[t.mode]:i,delay:a.transitionDelay}}var C=n(1705),D=n(5893);const M=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function j(e){return`scale(${e}, ${e**2})`}const L={entering:{opacity:1,transform:j(1)},entered:{opacity:1,transform:"none"}},A="undefined"!=typeof navigator&&/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&/version\/15\.[4-9]/i.test(navigator.userAgent),N=i.forwardRef((function(e,t){const{addEndListener:n,appear:a=!0,children:s,easing:p,in:c,onEnter:u,onEntered:l,onEntering:f,onExit:d,onExited:h,onExiting:v,style:g,timeout:y="auto",TransitionComponent:b=P}=e,x=(0,o.Z)(e,M),w=i.useRef(),E=i.useRef(),O=m(),T=i.useRef(null),Z=(0,C.Z)(s.ref,t),R=(0,C.Z)(T,Z),S=e=>t=>{if(e){const n=T.current;void 0===t?e(n):e(n,t)}},N=S(f),W=S(((e,t)=>{(e=>{e.scrollTop})(e);const{duration:n,delay:o,easing:r}=k({style:g,timeout:y,easing:p},{mode:"enter"});let i;"auto"===y?(i=O.transitions.getAutoHeightDuration(e.clientHeight),E.current=i):i=n,e.style.transition=[O.transitions.create("opacity",{duration:i,delay:o}),O.transitions.create("transform",{duration:A?i:.666*i,delay:o,easing:r})].join(","),u&&u(e,t)})),B=S(l),H=S(v),I=S((e=>{const{duration:t,delay:n,easing:o}=k({style:g,timeout:y,easing:p},{mode:"exit"});let r;"auto"===y?(r=O.transitions.getAutoHeightDuration(e.clientHeight),E.current=r):r=t,e.style.transition=[O.transitions.create("opacity",{duration:r,delay:n}),O.transitions.create("transform",{duration:A?r:.666*r,delay:A?n:n||.333*r,easing:o})].join(","),e.style.opacity=0,e.style.transform=j(.75),d&&d(e)})),F=S(h);return i.useEffect((()=>()=>{clearTimeout(w.current)}),[]),(0,D.jsx)(b,(0,r.Z)({appear:a,in:c,nodeRef:T,onEnter:W,onEntered:B,onEntering:N,onExit:I,onExited:F,onExiting:H,addEndListener:e=>{"auto"===y&&(w.current=setTimeout(e,E.current||0)),n&&n(T.current,e)},timeout:"auto"===y?null:y},x,{children:(e,t)=>i.cloneElement(s,(0,r.Z)({style:(0,r.Z)({opacity:0,transform:j(.75),visibility:"exited"!==e||c?void 0:"hidden"},L[e],g,s.props.style),ref:R},t))}))}));N.muiSupportAuto=!0;var W=N,B=n(67),H=n(6600),I=n(7094);function F(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function U(e){return e instanceof F(e).Element||e instanceof Element}function V(e){return e instanceof F(e).HTMLElement||e instanceof HTMLElement}function $(e){return"undefined"!=typeof ShadowRoot&&(e instanceof F(e).ShadowRoot||e instanceof ShadowRoot)}var q=Math.max,z=Math.min,X=Math.round;function Y(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(V(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(o=X(n.width)/a||1),i>0&&(r=X(n.height)/i||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function _(e){var t=F(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function G(e){return e?(e.nodeName||"").toLowerCase():null}function J(e){return((U(e)?e.ownerDocument:e.document)||window.document).documentElement}function K(e){return Y(J(e)).left+_(e).scrollLeft}function Q(e){return F(e).getComputedStyle(e)}function ee(e){var t=Q(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function te(e,t,n){void 0===n&&(n=!1);var o,r,i=V(t),a=V(t)&&function(e){var t=e.getBoundingClientRect(),n=X(t.width)/e.offsetWidth||1,o=X(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),s=J(t),p=Y(e,a),c={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(i||!i&&!n)&&(("body"!==G(t)||ee(s))&&(c=(o=t)!==F(o)&&V(o)?{scrollLeft:(r=o).scrollLeft,scrollTop:r.scrollTop}:_(o)),V(t)?((u=Y(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):s&&(u.x=K(s))),{x:p.left+c.scrollLeft-u.x,y:p.top+c.scrollTop-u.y,width:p.width,height:p.height}}function ne(e){var t=Y(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function oe(e){return"html"===G(e)?e:e.assignedSlot||e.parentNode||($(e)?e.host:null)||J(e)}function re(e){return["html","body","#document"].indexOf(G(e))>=0?e.ownerDocument.body:V(e)&&ee(e)?e:re(oe(e))}function ie(e,t){var n;void 0===t&&(t=[]);var o=re(e),r=o===(null==(n=e.ownerDocument)?void 0:n.body),i=F(o),a=r?[i].concat(i.visualViewport||[],ee(o)?o:[]):o,s=t.concat(a);return r?s:s.concat(ie(oe(a)))}function ae(e){return["table","td","th"].indexOf(G(e))>=0}function se(e){return V(e)&&"fixed"!==Q(e).position?e.offsetParent:null}function pe(e){for(var t=F(e),n=se(e);n&&ae(n)&&"static"===Q(n).position;)n=se(n);return n&&("html"===G(n)||"body"===G(n)&&"static"===Q(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&V(e)&&"fixed"===Q(e).position)return null;var n=oe(e);for($(n)&&(n=n.host);V(n)&&["html","body"].indexOf(G(n))<0;){var o=Q(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var ce="top",ue="bottom",le="right",fe="left",de="auto",me=[ce,ue,le,fe],he="start",ve="end",ge="viewport",ye="popper",be=me.reduce((function(e,t){return e.concat([t+"-"+he,t+"-"+ve])}),[]),xe=[].concat(me,[de]).reduce((function(e,t){return e.concat([t,t+"-"+he,t+"-"+ve])}),[]),we=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Ee(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}var Oe={placement:"bottom",modifiers:[],strategy:"absolute"};function Te(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Ze(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?Oe:r;return function(e,t,n){void 0===n&&(n=i);var r,a,s={placement:"bottom",orderedModifiers:[],options:Object.assign({},Oe,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},p=[],c=!1,u={state:s,setOptions:function(n){var r="function"==typeof n?n(s.options):n;l(),s.options=Object.assign({},i,s.options,r),s.scrollParents={reference:U(e)?ie(e):e.contextElement?ie(e.contextElement):[],popper:ie(t)};var a=function(e){var t=Ee(e);return we.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,s.options.modifiers)));return s.orderedModifiers=a.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var i=r({state:s,name:t,instance:u,options:o}),a=function(){};p.push(i||a)}})),u.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference,n=e.popper;if(Te(t,n)){s.rects={reference:te(t,pe(n),"fixed"===s.options.strategy),popper:ne(n)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<s.orderedModifiers.length;o++)if(!0!==s.reset){var r=s.orderedModifiers[o],i=r.fn,a=r.options,p=void 0===a?{}:a,l=r.name;"function"==typeof i&&(s=i({state:s,options:p,name:l,instance:u})||s)}else s.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(e){u.forceUpdate(),e(s)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(r())}))}))),a}),destroy:function(){l(),c=!0}};if(!Te(e,t))return u;function l(){p.forEach((function(e){return e()})),p=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var Re={passive:!0};function Se(e){return e.split("-")[0]}function Pe(e){return e.split("-")[1]}function ke(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ce(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?Se(r):null,a=r?Pe(r):null,s=n.x+n.width/2-o.width/2,p=n.y+n.height/2-o.height/2;switch(i){case ce:t={x:s,y:n.y-o.height};break;case ue:t={x:s,y:n.y+n.height};break;case le:t={x:n.x+n.width,y:p};break;case fe:t={x:n.x-o.width,y:p};break;default:t={x:n.x,y:n.y}}var c=i?ke(i):null;if(null!=c){var u="y"===c?"height":"width";switch(a){case he:t[c]=t[c]-(n[u]/2-o[u]/2);break;case ve:t[c]=t[c]+(n[u]/2-o[u]/2)}}return t}var De={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Me(e){var t,n=e.popper,o=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,p=e.gpuAcceleration,c=e.adaptive,u=e.roundOffsets,l=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,h=void 0===m?0:m,v="function"==typeof u?u({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var g=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),b=fe,x=ce,w=window;if(c){var E=pe(n),O="clientHeight",T="clientWidth";if(E===F(n)&&"static"!==Q(E=J(n)).position&&"absolute"===s&&(O="scrollHeight",T="scrollWidth"),E=E,r===ce||(r===fe||r===le)&&i===ve)x=ue,h-=(l&&E===w&&w.visualViewport?w.visualViewport.height:E[O])-o.height,h*=p?1:-1;if(r===fe||(r===ce||r===ue)&&i===ve)b=le,d-=(l&&E===w&&w.visualViewport?w.visualViewport.width:E[T])-o.width,d*=p?1:-1}var Z,R=Object.assign({position:s},c&&De),S=!0===u?function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:X(t*o)/o||0,y:X(n*o)/o||0}}({x:d,y:h}):{x:d,y:h};return d=S.x,h=S.y,p?Object.assign({},R,((Z={})[x]=y?"0":"",Z[b]=g?"0":"",Z.transform=(w.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",Z)):Object.assign({},R,((t={})[x]=y?h+"px":"",t[b]=g?d+"px":"",t.transform="",t))}var je={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=xe.reduce((function(e,n){return e[n]=function(e,t,n){var o=Se(e),r=[fe,ce].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[fe,le].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],p=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=a}},Le={left:"right",right:"left",bottom:"top",top:"bottom"};function Ae(e){return e.replace(/left|right|bottom|top/g,(function(e){return Le[e]}))}var Ne={start:"end",end:"start"};function We(e){return e.replace(/start|end/g,(function(e){return Ne[e]}))}function Be(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&$(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function He(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Ie(e,t){return t===ge?He(function(e){var t=F(e),n=J(e),o=t.visualViewport,r=n.clientWidth,i=n.clientHeight,a=0,s=0;return o&&(r=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=o.offsetLeft,s=o.offsetTop)),{width:r,height:i,x:a+K(e),y:s}}(e)):U(t)?function(e){var t=Y(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):He(function(e){var t,n=J(e),o=_(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=q(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=q(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-o.scrollLeft+K(e),p=-o.scrollTop;return"rtl"===Q(r||n).direction&&(s+=q(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:p}}(J(e)))}function Fe(e,t,n){var o="clippingParents"===t?function(e){var t=ie(oe(e)),n=["absolute","fixed"].indexOf(Q(e).position)>=0&&V(e)?pe(e):e;return U(n)?t.filter((function(e){return U(e)&&Be(e,n)&&"body"!==G(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),i=r[0],a=r.reduce((function(t,n){var o=Ie(e,n);return t.top=q(o.top,t.top),t.right=z(o.right,t.right),t.bottom=z(o.bottom,t.bottom),t.left=q(o.left,t.left),t}),Ie(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ue(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Ve(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function $e(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=void 0===o?e.placement:o,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,p=void 0===s?ge:s,c=n.elementContext,u=void 0===c?ye:c,l=n.altBoundary,f=void 0!==l&&l,d=n.padding,m=void 0===d?0:d,h=Ue("number"!=typeof m?m:Ve(m,me)),v=u===ye?"reference":ye,g=e.rects.popper,y=e.elements[f?v:u],b=Fe(U(y)?y:y.contextElement||J(e.elements.popper),a,p),x=Y(e.elements.reference),w=Ce({reference:x,element:g,strategy:"absolute",placement:r}),E=He(Object.assign({},g,w)),O=u===ye?E:x,T={top:b.top-O.top+h.top,bottom:O.bottom-b.bottom+h.bottom,left:b.left-O.left+h.left,right:O.right-b.right+h.right},Z=e.modifiersData.offset;if(u===ye&&Z){var R=Z[r];Object.keys(T).forEach((function(e){var t=[le,ue].indexOf(e)>=0?1:-1,n=[ce,ue].indexOf(e)>=0?"y":"x";T[e]+=R[n]*t}))}return T}function qe(e,t,n){return q(e,z(t,n))}var ze={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,p=n.boundary,c=n.rootBoundary,u=n.altBoundary,l=n.padding,f=n.tether,d=void 0===f||f,m=n.tetherOffset,h=void 0===m?0:m,v=$e(t,{boundary:p,rootBoundary:c,padding:l,altBoundary:u}),g=Se(t.placement),y=Pe(t.placement),b=!y,x=ke(g),w="x"===x?"y":"x",E=t.modifiersData.popperOffsets,O=t.rects.reference,T=t.rects.popper,Z="function"==typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,R="number"==typeof Z?{mainAxis:Z,altAxis:Z}:Object.assign({mainAxis:0,altAxis:0},Z),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,P={x:0,y:0};if(E){if(i){var k,C="y"===x?ce:fe,D="y"===x?ue:le,M="y"===x?"height":"width",j=E[x],L=j+v[C],A=j-v[D],N=d?-T[M]/2:0,W=y===he?O[M]:T[M],B=y===he?-T[M]:-O[M],H=t.elements.arrow,I=d&&H?ne(H):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},U=F[C],V=F[D],$=qe(0,O[M],I[M]),X=b?O[M]/2-N-$-U-R.mainAxis:W-$-U-R.mainAxis,Y=b?-O[M]/2+N+$+V+R.mainAxis:B+$+V+R.mainAxis,_=t.elements.arrow&&pe(t.elements.arrow),G=_?"y"===x?_.clientTop||0:_.clientLeft||0:0,J=null!=(k=null==S?void 0:S[x])?k:0,K=j+Y-J,Q=qe(d?z(L,j+X-J-G):L,j,d?q(A,K):A);E[x]=Q,P[x]=Q-j}if(s){var ee,te="x"===x?ce:fe,oe="x"===x?ue:le,re=E[w],ie="y"===w?"height":"width",ae=re+v[te],se=re-v[oe],de=-1!==[ce,fe].indexOf(g),me=null!=(ee=null==S?void 0:S[w])?ee:0,ve=de?ae:re-O[ie]-T[ie]-me+R.altAxis,ge=de?re+O[ie]+T[ie]-me-R.altAxis:se,ye=d&&de?function(e,t,n){var o=qe(e,t,n);return o>n?n:o}(ve,re,ge):qe(d?ve:ae,re,d?ge:se);E[w]=ye,P[w]=ye-re}t.modifiersData[o]=P}},requiresIfExists:["offset"]};var Xe={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=Se(n.placement),p=ke(s),c=[fe,le].indexOf(s)>=0?"height":"width";if(i&&a){var u=function(e,t){return Ue("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Ve(e,me))}(r.padding,n),l=ne(i),f="y"===p?ce:fe,d="y"===p?ue:le,m=n.rects.reference[c]+n.rects.reference[p]-a[p]-n.rects.popper[c],h=a[p]-n.rects.reference[p],v=pe(i),g=v?"y"===p?v.clientHeight||0:v.clientWidth||0:0,y=m/2-h/2,b=u[f],x=g-l[c]-u[d],w=g/2-l[c]/2+y,E=qe(b,w,x),O=p;n.modifiersData[o]=((t={})[O]=E,t.centerOffset=E-w,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&Be(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ye(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function _e(e){return[ce,le,ue,fe].some((function(t){return e[t]>=0}))}var Ge=Ze({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,i=void 0===r||r,a=o.resize,s=void 0===a||a,p=F(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",n.update,Re)})),s&&p.addEventListener("resize",n.update,Re),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",n.update,Re)})),s&&p.removeEventListener("resize",n.update,Re)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Ce({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,p=void 0===s||s,c={placement:Se(t.placement),variation:Pe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Me(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:p})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Me(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];V(r)&&G(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});V(o)&&G(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},je,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,p=n.fallbackPlacements,c=n.padding,u=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,m=void 0===d||d,h=n.allowedAutoPlacements,v=t.options.placement,g=Se(v),y=p||(g===v||!m?[Ae(v)]:function(e){if(Se(e)===de)return[];var t=Ae(e);return[We(e),t,We(t)]}(v)),b=[v].concat(y).reduce((function(e,n){return e.concat(Se(n)===de?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,p=n.allowedAutoPlacements,c=void 0===p?xe:p,u=Pe(o),l=u?s?be:be.filter((function(e){return Pe(e)===u})):me,f=l.filter((function(e){return c.indexOf(e)>=0}));0===f.length&&(f=l);var d=f.reduce((function(t,n){return t[n]=$e(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[Se(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:l,padding:c,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,w=t.rects.popper,E=new Map,O=!0,T=b[0],Z=0;Z<b.length;Z++){var R=b[Z],S=Se(R),P=Pe(R)===he,k=[ce,ue].indexOf(S)>=0,C=k?"width":"height",D=$e(t,{placement:R,boundary:u,rootBoundary:l,altBoundary:f,padding:c}),M=k?P?le:fe:P?ue:ce;x[C]>w[C]&&(M=Ae(M));var j=Ae(M),L=[];if(i&&L.push(D[S]<=0),s&&L.push(D[M]<=0,D[j]<=0),L.every((function(e){return e}))){T=R,O=!1;break}E.set(R,L)}if(O)for(var A=function(e){var t=b.find((function(t){var n=E.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},N=m?3:1;N>0;N--){if("break"===A(N))break}t.placement!==T&&(t.modifiersData[o]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ze,Xe,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=$e(t,{elementContext:"reference"}),s=$e(t,{altBoundary:!0}),p=Ye(a,o),c=Ye(s,r,i),u=_e(p),l=_e(c);t.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}),Je=n(7960);var Ke=i.forwardRef((function(e,t){const{children:n,container:o,disablePortal:r=!1}=e,[a,s]=i.useState(null),p=(0,B.Z)(i.isValidElement(n)?n.ref:null,t);return(0,H.Z)((()=>{r||s(function(e){return"function"==typeof e?e():e}(o)||document.body)}),[o,r]),(0,H.Z)((()=>{if(a&&!r)return(0,Je.Z)(t,a),()=>{(0,Je.Z)(t,null)}}),[t,a,r]),r?i.isValidElement(n)?i.cloneElement(n,{ref:p}):n:a?y.createPortal(n,a):a}));const Qe=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],et=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function tt(e){return"function"==typeof e?e():e}const nt={},ot=i.forwardRef((function(e,t){const{anchorEl:n,children:a,direction:s,disablePortal:p,modifiers:c,open:u,placement:l,popperOptions:f,popperRef:d,TransitionProps:m}=e,h=(0,o.Z)(e,Qe),v=i.useRef(null),g=(0,B.Z)(v,t),y=i.useRef(null),b=(0,B.Z)(y,d),x=i.useRef(b);(0,H.Z)((()=>{x.current=b}),[b]),i.useImperativeHandle(d,(()=>y.current),[]);const w=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(l,s),[E,O]=i.useState(w);i.useEffect((()=>{y.current&&y.current.forceUpdate()})),(0,H.Z)((()=>{if(!n||!u)return;tt(n);let e=[{name:"preventOverflow",options:{altBoundary:p}},{name:"flip",options:{altBoundary:p}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:e})=>{O(e.placement)}}];null!=c&&(e=e.concat(c)),f&&null!=f.modifiers&&(e=e.concat(f.modifiers));const t=Ge(tt(n),v.current,(0,r.Z)({placement:w},f,{modifiers:e}));return x.current(t),()=>{t.destroy(),x.current(null)}}),[n,p,c,u,f,w]);const T={placement:E};return null!==m&&(T.TransitionProps=m),(0,D.jsx)("div",(0,r.Z)({ref:g,role:"tooltip"},h,{children:"function"==typeof a?a(T):a}))}));var rt=i.forwardRef((function(e,t){const{anchorEl:n,children:a,container:s,direction:p="ltr",disablePortal:c=!1,keepMounted:u=!1,modifiers:l,open:f,placement:d="bottom",popperOptions:m=nt,popperRef:h,style:v,transition:g=!1}=e,y=(0,o.Z)(e,et),[b,x]=i.useState(!0);if(!u&&!f&&(!g||b))return null;const w=s||(n?(0,I.Z)(tt(n)).body:void 0);return(0,D.jsx)(Ke,{disablePortal:c,container:w,children:(0,D.jsx)(ot,(0,r.Z)({anchorEl:n,direction:p,disablePortal:c,modifiers:l,ref:t,open:g?!b:f,placement:d,popperOptions:m,popperRef:h},y,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:f||!u||g&&!b?null:"none"},v),TransitionProps:g?{in:f,onEnter:()=>{x(!1)},onExited:()=>{x(!0)}}:null,children:a}))})})),it=n(433);const at=(0,l.ZP)(rt,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({});var st=i.forwardRef((function(e,t){const n=(0,it.Z)(),o=(0,h.Z)({props:e,name:"MuiPopper"});return(0,D.jsx)(at,(0,r.Z)({direction:null==n?void 0:n.direction},o,{ref:t}))})),pt=n(9327),ct=n(8785),ut=n(8791),lt=n(2627),ft=n(8979);function dt(e){return(0,ft.Z)("MuiTooltip",e)}var mt=(0,n(6087).Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);const ht=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];const vt=(0,l.ZP)(st,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})((({theme:e,ownerState:t,open:n})=>(0,r.Z)({zIndex:e.zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!n&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${mt.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${mt.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${mt.arrow}`]:(0,r.Z)({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${mt.arrow}`]:(0,r.Z)({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})}))),gt=(0,l.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t[`tooltipPlacement${(0,v.Z)(n.placement.split("-")[0])}`]]}})((({theme:e,ownerState:t})=>{return(0,r.Z)({backgroundColor:(0,u.Fq)(e.palette.grey[700],.92),borderRadius:e.shape.borderRadius,color:e.palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:(n=16/14,Math.round(1e5*n)/1e5)+"em",fontWeight:e.typography.fontWeightRegular},{[`.${mt.popper}[data-popper-placement*="left"] &`]:(0,r.Z)({transformOrigin:"right center"},t.isRtl?(0,r.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):(0,r.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${mt.popper}[data-popper-placement*="right"] &`]:(0,r.Z)({transformOrigin:"left center"},t.isRtl?(0,r.Z)({marginRight:"14px"},t.touch&&{marginRight:"24px"}):(0,r.Z)({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${mt.popper}[data-popper-placement*="top"] &`]:(0,r.Z)({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${mt.popper}[data-popper-placement*="bottom"] &`]:(0,r.Z)({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})});var n})),yt=(0,l.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})((({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:(0,u.Fq)(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}})));let bt=!1,xt=null;function wt(e,t){return n=>{t&&t(n),e(n)}}const Et=i.forwardRef((function(e,t){var n,s,u,l,f,d;const g=(0,h.Z)({props:e,name:"MuiTooltip"}),{arrow:y=!1,children:b,components:x={},componentsProps:w={},describeChild:E=!1,disableFocusListener:O=!1,disableHoverListener:T=!1,disableInteractive:Z=!1,disableTouchListener:R=!1,enterDelay:S=100,enterNextDelay:P=0,enterTouchDelay:k=700,followCursor:M=!1,id:j,leaveDelay:L=0,leaveTouchDelay:A=1500,onClose:N,onOpen:B,open:H,placement:I="bottom",PopperComponent:F,PopperProps:U={},title:V,TransitionComponent:$=W,TransitionProps:q}=g,z=(0,o.Z)(g,ht),X=m(),Y="rtl"===X.direction,[_,G]=i.useState(),[J,K]=i.useState(null),Q=i.useRef(!1),ee=Z||M,te=i.useRef(),ne=i.useRef(),oe=i.useRef(),re=i.useRef(),[ie,ae]=(0,lt.Z)({controlled:H,default:!1,name:"Tooltip",state:"open"});let se=ie;const pe=(0,ct.Z)(j),ce=i.useRef(),ue=i.useCallback((()=>{void 0!==ce.current&&(document.body.style.WebkitUserSelect=ce.current,ce.current=void 0),clearTimeout(re.current)}),[]);i.useEffect((()=>()=>{clearTimeout(te.current),clearTimeout(ne.current),clearTimeout(oe.current),ue()}),[ue]);const le=e=>{clearTimeout(xt),bt=!0,ae(!0),B&&!se&&B(e)},fe=(0,pt.Z)((e=>{clearTimeout(xt),xt=setTimeout((()=>{bt=!1}),800+L),ae(!1),N&&se&&N(e),clearTimeout(te.current),te.current=setTimeout((()=>{Q.current=!1}),X.transitions.duration.shortest)})),de=e=>{Q.current&&"touchstart"!==e.type||(_&&_.removeAttribute("title"),clearTimeout(ne.current),clearTimeout(oe.current),S||bt&&P?ne.current=setTimeout((()=>{le(e)}),bt?P:S):le(e))},me=e=>{clearTimeout(ne.current),clearTimeout(oe.current),oe.current=setTimeout((()=>{fe(e)}),L)},{isFocusVisibleRef:he,onBlur:ve,onFocus:ge,ref:ye}=(0,ut.Z)(),[,be]=i.useState(!1),xe=e=>{ve(e),!1===he.current&&(be(!1),me(e))},we=e=>{_||G(e.currentTarget),ge(e),!0===he.current&&(be(!0),de(e))},Ee=e=>{Q.current=!0;const t=b.props;t.onTouchStart&&t.onTouchStart(e)},Oe=de,Te=me,Ze=e=>{Ee(e),clearTimeout(oe.current),clearTimeout(te.current),ue(),ce.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",re.current=setTimeout((()=>{document.body.style.WebkitUserSelect=ce.current,de(e)}),k)},Re=e=>{b.props.onTouchEnd&&b.props.onTouchEnd(e),ue(),clearTimeout(oe.current),oe.current=setTimeout((()=>{fe(e)}),A)};i.useEffect((()=>{if(se)return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||fe(e)}}),[fe,se]);const Se=(0,C.Z)(G,t),Pe=(0,C.Z)(ye,Se),ke=(0,C.Z)(b.ref,Pe);""===V&&(se=!1);const Ce=i.useRef({x:0,y:0}),De=i.useRef(),Me={},je="string"==typeof V;E?(Me.title=se||!je||T?null:V,Me["aria-describedby"]=se?pe:null):(Me["aria-label"]=je?V:null,Me["aria-labelledby"]=se&&!je?pe:null);const Le=(0,r.Z)({},Me,z,b.props,{className:(0,a.Z)(z.className,b.props.className),onTouchStart:Ee,ref:ke},M?{onMouseMove:e=>{const t=b.props;t.onMouseMove&&t.onMouseMove(e),Ce.current={x:e.clientX,y:e.clientY},De.current&&De.current.update()}}:{});const Ae={};R||(Le.onTouchStart=Ze,Le.onTouchEnd=Re),T||(Le.onMouseOver=wt(Oe,Le.onMouseOver),Le.onMouseLeave=wt(Te,Le.onMouseLeave),ee||(Ae.onMouseOver=Oe,Ae.onMouseLeave=Te)),O||(Le.onFocus=wt(we,Le.onFocus),Le.onBlur=wt(xe,Le.onBlur),ee||(Ae.onFocus=we,Ae.onBlur=xe));const Ne=i.useMemo((()=>{var e;let t=[{name:"arrow",enabled:Boolean(J),options:{element:J,padding:4}}];return null!=(e=U.popperOptions)&&e.modifiers&&(t=t.concat(U.popperOptions.modifiers)),(0,r.Z)({},U.popperOptions,{modifiers:t})}),[J,U]),We=(0,r.Z)({},g,{isRtl:Y,arrow:y,disableInteractive:ee,placement:I,PopperComponentProp:F,touch:Q.current}),Be=(e=>{const{classes:t,disableInteractive:n,arrow:o,touch:r,placement:i}=e,a={popper:["popper",!n&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",r&&"touch",`tooltipPlacement${(0,v.Z)(i.split("-")[0])}`],arrow:["arrow"]};return(0,c.Z)(a,dt,t)})(We),He=null!=(n=x.Popper)?n:vt,Ie=null!=(s=null!=(u=x.Transition)?u:$)?s:W,Fe=null!=(l=x.Tooltip)?l:gt,Ue=null!=(f=x.Arrow)?f:yt,Ve=p(He,(0,r.Z)({},U,w.popper),We),$e=p(Ie,(0,r.Z)({},q,w.transition),We),qe=p(Fe,(0,r.Z)({},w.tooltip),We),ze=p(Ue,(0,r.Z)({},w.arrow),We);return(0,D.jsxs)(i.Fragment,{children:[i.cloneElement(b,Le),(0,D.jsx)(He,(0,r.Z)({as:null!=F?F:st,placement:I,anchorEl:M?{getBoundingClientRect:()=>({top:Ce.current.y,left:Ce.current.x,right:Ce.current.x,bottom:Ce.current.y,width:0,height:0})}:_,popperRef:De,open:!!_&&se,id:pe,transition:!0},Ae,Ve,{className:(0,a.Z)(Be.popper,null==U?void 0:U.className,null==(d=w.popper)?void 0:d.className),popperOptions:Ne,children:({TransitionProps:e})=>{var t,n;return(0,D.jsx)(Ie,(0,r.Z)({timeout:X.transitions.duration.shorter},e,$e,{children:(0,D.jsxs)(Fe,(0,r.Z)({},qe,{className:(0,a.Z)(Be.tooltip,null==(t=w.tooltip)?void 0:t.className),children:[V,y?(0,D.jsx)(Ue,(0,r.Z)({},ze,{className:(0,a.Z)(Be.arrow,null==(n=w.arrow)?void 0:n.className),ref:K})):null]}))}))}}))]})}));var Ot=Et},2627:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(7294);var r=function({controlled:e,default:t,name:n,state:r="value"}){const{current:i}=o.useRef(void 0!==e),[a,s]=o.useState(t);return[i?e:a,o.useCallback((e=>{i||s(e)}),[])]}},8785:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(7294);let r=0;const i=n.t(o,2).useId;var a=function(e){if(void 0!==i){const t=i();return null!=e?e:t}return function(e){const[t,n]=o.useState(e),i=e||t;return o.useEffect((()=>{null==t&&(r+=1,n(`mui-${r}`))}),[t]),i}(e)}},7094:function(e,t,n){function o(e){return e&&e.ownerDocument||document}n.d(t,{Z:function(){return o}})}}]);