import{g as $,r as J,i as Z,R as L,P as m}from"./index-ZYBAOPRB.js";function K(n){return n&&typeof n=="object"&&"default"in n?n.default:n}var G=J,ee=K(G);function D(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function te(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}var re=!!(typeof window<"u"&&window.document&&window.document.createElement);function ne(n,e,t){if(typeof n!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof e!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof t<"u"&&typeof t!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var s=[],i;function c(){i=n(s.map(function(l){return l.props})),u.canUseDOM?e(i):t&&(i=t(i))}var u=function(l){te(p,l);function p(){return l.apply(this,arguments)||this}p.peek=function(){return i},p.rewind=function(){if(p.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var g=i;return i=void 0,s=[],g};var d=p.prototype;return d.UNSAFE_componentWillMount=function(){s.push(this),c()},d.componentDidUpdate=function(){c()},d.componentWillUnmount=function(){var g=s.indexOf(this);s.splice(g,1),c()},d.render=function(){return ee.createElement(a,this.props)},p}(G.PureComponent);return D(u,"displayName","SideEffect("+r(a)+")"),D(u,"canUseDOM",re),u}}var oe=ne;const ae=$(oe);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var k=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;function ue(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function se(){try{if(!Object.assign)return!1;var n=new String("abc");if(n[5]="de",Object.getOwnPropertyNames(n)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var r=Object.getOwnPropertyNames(e).map(function(a){return e[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var le=se()?Object.assign:function(n,e){for(var t,r=ue(n),o,a=1;a<arguments.length;a++){t=Object(arguments[a]);for(var s in t)ie.call(t,s)&&(r[s]=t[s]);if(k){o=k(t);for(var i=0;i<o.length;i++)ce.call(t,o[i])&&(r[o[i]]=t[o[i]])}}return r};const fe=$(le);var S={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},f={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(f).map(function(n){return f[n]});var v={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},pe=Object.keys(N).reduce(function(n,e){return n[N[e]]=e,n},{}),de=[f.NOSCRIPT,f.SCRIPT,f.STYLE],E="data-react-helmet",Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},me=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},ve=function(){function n(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),h=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},he=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},U=function(n,e){var t={};for(var r in n)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r]);return t},ge=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},M=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Ee=function(e){var t=P(e,f.TITLE),r=P(e,_.TITLE_TEMPLATE);if(r&&t)return r.replace(/%s/g,function(){return Array.isArray(t)?t.join(""):t});var o=P(e,_.DEFAULT_TITLE);return t||o||void 0},ye=function(e){return P(e,_.ON_CHANGE_CLIENT_STATE)||function(){}},H=function(e,t){return t.filter(function(r){return typeof r[e]<"u"}).map(function(r){return r[e]}).reduce(function(r,o){return h({},r,o)},{})},be=function(e,t){return t.filter(function(r){return typeof r[f.BASE]<"u"}).map(function(r){return r[f.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),s=0;s<a.length;s++){var i=a[s],c=i.toLowerCase();if(e.indexOf(c)!==-1&&o[c])return r.concat(o)}return r},[])},R=function(e,t,r){var o={};return r.filter(function(a){return Array.isArray(a[e])?!0:(typeof a[e]<"u"&&Oe("Helmet: "+e+' should be of type "Array". Instead found type "'+Te(a[e])+'"'),!1)}).map(function(a){return a[e]}).reverse().reduce(function(a,s){var i={};s.filter(function(d){for(var T=void 0,g=Object.keys(d),y=0;y<g.length;y++){var b=g[y],A=b.toLowerCase();t.indexOf(A)!==-1&&!(T===v.REL&&d[T].toLowerCase()==="canonical")&&!(A===v.REL&&d[A].toLowerCase()==="stylesheet")&&(T=A),t.indexOf(b)!==-1&&(b===v.INNER_HTML||b===v.CSS_TEXT||b===v.ITEM_PROP)&&(T=b)}if(!T||!d[T])return!1;var w=d[T].toLowerCase();return o[T]||(o[T]={}),i[T]||(i[T]={}),o[T][w]?!1:(i[T][w]=!0,!0)}).reverse().forEach(function(d){return a.push(d)});for(var c=Object.keys(i),u=0;u<c.length;u++){var l=c[u],p=fe({},o[l],i[l]);o[l]=p}return a},[]).reverse()},P=function(e,t){for(var r=e.length-1;r>=0;r--){var o=e[r];if(o.hasOwnProperty(t))return o[t]}return null},Ae=function(e){return{baseTag:be([v.HREF,v.TARGET],e),bodyAttributes:H(S.BODY,e),defer:P(e,_.DEFER),encode:P(e,_.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:H(S.HTML,e),linkTags:R(f.LINK,[v.REL,v.HREF],e),metaTags:R(f.META,[v.NAME,v.CHARSET,v.HTTPEQUIV,v.PROPERTY,v.ITEM_PROP],e),noscriptTags:R(f.NOSCRIPT,[v.INNER_HTML],e),onChangeClientState:ye(e),scriptTags:R(f.SCRIPT,[v.SRC,v.INNER_HTML],e),styleTags:R(f.STYLE,[v.CSS_TEXT],e),title:Ee(e),titleAttributes:H(S.TITLE,e)}},j=function(){var n=Date.now();return function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout(function(){j(e)},0)}}(),Y=function(e){return clearTimeout(e)},Ce=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||j:global.requestAnimationFrame||j,Se=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Y:global.cancelAnimationFrame||Y,Oe=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},I=null,Pe=function(e){I&&Se(I),e.defer?I=Ce(function(){q(e,function(){I=null})}):(q(e),I=null)},q=function(e,t){var r=e.baseTag,o=e.bodyAttributes,a=e.htmlAttributes,s=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,p=e.styleTags,d=e.title,T=e.titleAttributes;F(f.BODY,o),F(f.HTML,a),we(d,T);var g={baseTag:O(f.BASE,r),linkTags:O(f.LINK,s),metaTags:O(f.META,i),noscriptTags:O(f.NOSCRIPT,c),scriptTags:O(f.SCRIPT,l),styleTags:O(f.STYLE,p)},y={},b={};Object.keys(g).forEach(function(A){var w=g[A],x=w.newTags,V=w.oldTags;x.length&&(y[A]=x),V.length&&(b[A]=g[A].oldTags)}),t&&t(),u(e,y,b)},X=function(e){return Array.isArray(e)?e.join(""):e},we=function(e,t){typeof e<"u"&&document.title!==e&&(document.title=X(e)),F(f.TITLE,t)},F=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var o=r.getAttribute(E),a=o?o.split(","):[],s=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),a.indexOf(u)===-1&&a.push(u);var p=s.indexOf(u);p!==-1&&s.splice(p,1)}for(var d=s.length-1;d>=0;d--)r.removeAttribute(s[d]);a.length===s.length?r.removeAttribute(E):r.getAttribute(E)!==i.join(",")&&r.setAttribute(E,i.join(","))}},O=function(e,t){var r=document.head||document.querySelector(f.HEAD),o=r.querySelectorAll(e+"["+E+"]"),a=Array.prototype.slice.call(o),s=[],i=void 0;return t&&t.length&&t.forEach(function(c){var u=document.createElement(e);for(var l in c)if(c.hasOwnProperty(l))if(l===v.INNER_HTML)u.innerHTML=c.innerHTML;else if(l===v.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=c.cssText:u.appendChild(document.createTextNode(c.cssText));else{var p=typeof c[l]>"u"?"":c[l];u.setAttribute(l,p)}u.setAttribute(E,"true"),a.some(function(d,T){return i=T,u.isEqualNode(d)})?a.splice(i,1):s.push(u)}),a.forEach(function(c){return c.parentNode.removeChild(c)}),s.forEach(function(c){return r.appendChild(c)}),{oldTags:a,newTags:s}},W=function(e){return Object.keys(e).reduce(function(t,r){var o=typeof e[r]<"u"?r+'="'+e[r]+'"':""+r;return t?t+" "+o:o},"")},Re=function(e,t,r,o){var a=W(r),s=X(t);return a?"<"+e+" "+E+'="true" '+a+">"+M(s,o)+"</"+e+">":"<"+e+" "+E+'="true">'+M(s,o)+"</"+e+">"},Ie=function(e,t,r){return t.reduce(function(o,a){var s=Object.keys(a).filter(function(u){return!(u===v.INNER_HTML||u===v.CSS_TEXT)}).reduce(function(u,l){var p=typeof a[l]>"u"?l:l+'="'+M(a[l],r)+'"';return u?u+" "+p:p},""),i=a.innerHTML||a.cssText||"",c=de.indexOf(e)===-1;return o+"<"+e+" "+E+'="true" '+s+(c?"/>":">"+i+"</"+e+">")},"")},z=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[N[o]||o]=e[o],r},t)},Le=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(r,o){return r[pe[o]||o]=e[o],r},t)},_e=function(e,t,r){var o,a=(o={key:t},o[E]=!0,o),s=z(r,a);return[L.createElement(f.TITLE,s,t)]},Ne=function(e,t){return t.map(function(r,o){var a,s=(a={key:o},a[E]=!0,a);return Object.keys(r).forEach(function(i){var c=N[i]||i;if(c===v.INNER_HTML||c===v.CSS_TEXT){var u=r.innerHTML||r.cssText;s.dangerouslySetInnerHTML={__html:u}}else s[c]=r[i]}),L.createElement(e,s)})},C=function(e,t,r){switch(e){case f.TITLE:return{toComponent:function(){return _e(e,t.title,t.titleAttributes)},toString:function(){return Re(e,t.title,t.titleAttributes,r)}};case S.BODY:case S.HTML:return{toComponent:function(){return z(t)},toString:function(){return W(t)}};default:return{toComponent:function(){return Ne(e,t)},toString:function(){return Ie(e,t,r)}}}},Q=function(e){var t=e.baseTag,r=e.bodyAttributes,o=e.encode,a=e.htmlAttributes,s=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,p=e.title,d=p===void 0?"":p,T=e.titleAttributes;return{base:C(f.BASE,t,o),bodyAttributes:C(S.BODY,r,o),htmlAttributes:C(S.HTML,a,o),link:C(f.LINK,s,o),meta:C(f.META,i,o),noscript:C(f.NOSCRIPT,c,o),script:C(f.SCRIPT,u,o),style:C(f.STYLE,l,o),title:C(f.TITLE,{title:d,titleAttributes:T},o)}},He=function(e){var t,r;return r=t=function(o){he(a,o);function a(){return me(this,a),ge(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(i){return!Z(this.props,i)},a.prototype.mapNestedChildrenToProps=function(i,c){if(!c)return null;switch(i.type){case f.SCRIPT:case f.NOSCRIPT:return{innerHTML:c};case f.STYLE:return{cssText:c}}throw new Error("<"+i.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(i){var c,u=i.child,l=i.arrayTypeChildren,p=i.newChildProps,d=i.nestedChildren;return h({},l,(c={},c[u.type]=[].concat(l[u.type]||[],[h({},p,this.mapNestedChildrenToProps(u,d))]),c))},a.prototype.mapObjectTypeChildren=function(i){var c,u,l=i.child,p=i.newProps,d=i.newChildProps,T=i.nestedChildren;switch(l.type){case f.TITLE:return h({},p,(c={},c[l.type]=T,c.titleAttributes=h({},d),c));case f.BODY:return h({},p,{bodyAttributes:h({},d)});case f.HTML:return h({},p,{htmlAttributes:h({},d)})}return h({},p,(u={},u[l.type]=h({},d),u))},a.prototype.mapArrayTypeChildrenToProps=function(i,c){var u=h({},c);return Object.keys(i).forEach(function(l){var p;u=h({},u,(p={},p[l]=i[l],p))}),u},a.prototype.warnOnInvalidChildren=function(i,c){return!0},a.prototype.mapChildrenToProps=function(i,c){var u=this,l={};return L.Children.forEach(i,function(p){if(!(!p||!p.props)){var d=p.props,T=d.children,g=U(d,["children"]),y=Le(g);switch(u.warnOnInvalidChildren(p,T),p.type){case f.LINK:case f.META:case f.NOSCRIPT:case f.SCRIPT:case f.STYLE:l=u.flattenArrayTypeChildren({child:p,arrayTypeChildren:l,newChildProps:y,nestedChildren:T});break;default:c=u.mapObjectTypeChildren({child:p,newProps:c,newChildProps:y,nestedChildren:T});break}}}),c=this.mapArrayTypeChildrenToProps(l,c),c},a.prototype.render=function(){var i=this.props,c=i.children,u=U(i,["children"]),l=h({},u);return c&&(l=this.mapChildrenToProps(c,l)),L.createElement(e,l)},ve(a,null,[{key:"canUseDOM",set:function(i){e.canUseDOM=i}}]),a}(L.Component),t.propTypes={base:m.object,bodyAttributes:m.object,children:m.oneOfType([m.arrayOf(m.node),m.node]),defaultTitle:m.string,defer:m.bool,encodeSpecialCharacters:m.bool,htmlAttributes:m.object,link:m.arrayOf(m.object),meta:m.arrayOf(m.object),noscript:m.arrayOf(m.object),onChangeClientState:m.func,script:m.arrayOf(m.object),style:m.arrayOf(m.object),title:m.string,titleAttributes:m.object,titleTemplate:m.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var o=e.rewind();return o||(o=Q({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},Me=function(){return null},je=ae(Ae,Pe,Q)(Me),B=He(je);B.renderStatic=B.rewind;export{B as H};
