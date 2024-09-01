import{r as l,R as A,b as Z,j as h}from"./index-ZYBAOPRB.js";/*!
 * react-paypal-js v8.5.0 (2024-06-12T17:52:54.583Z)
 * Copyright 2020-present, PayPal, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d;(function(e){e.INITIAL="initial",e.PENDING="pending",e.REJECTED="rejected",e.RESOLVED="resolved"})(d||(d={}));var v;(function(e){e.LOADING_STATUS="setLoadingStatus",e.RESET_OPTIONS="resetOptions",e.SET_BRAINTREE_INSTANCE="braintreeInstance"})(v||(v={}));var j;(function(e){e.NUMBER="number",e.CVV="cvv",e.EXPIRATION_DATE="expirationDate",e.EXPIRATION_MONTH="expirationMonth",e.EXPIRATION_YEAR="expirationYear",e.POSTAL_CODE="postalCode"})(j||(j={}));var c=function(){return c=Object.assign||function(t){for(var r,n=1,a=arguments.length;n<a;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o])}return t},c.apply(this,arguments)};function B(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r}function x(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,o;n<a;n++)(o||!(n in t))&&(o||(o=Array.prototype.slice.call(t,0,n)),o[n]=t[n]);return e.concat(o||Array.prototype.slice.call(t))}var g="data-react-paypal-script-id",m={DATA_CLIENT_TOKEN:"dataClientToken",DATA_JS_SDK_LIBRARY:"dataJsSdkLibrary",DATA_LIBRARY_VALUE:"react-paypal-js",DATA_NAMESPACE:"dataNamespace",DATA_SDK_INTEGRATION_SOURCE:"dataSdkIntegrationSource",DATA_USER_ID_TOKEN:"dataUserIdToken"},$="Failed to load the PayPal JS SDK script.",k="paypal",Q="usePayPalScriptReducer must be used within a PayPalScriptProvider";function Y(e){return e===void 0&&(e=k),window[e]}function H(e){for(var t="",r=0;r<e.length;r++){var n=e[r].charCodeAt(0)*r;e[r+1]&&(n+=e[r+1].charCodeAt(0)*(r-1)),t+=String.fromCharCode(97+Math.abs(n)%26)}return t}function ee(e){var t=e.reactComponentName,r=e.sdkComponentKey,n=e.sdkRequestedComponents,a=n===void 0?"":n,o=e.sdkDataNamespace,s=o===void 0?k:o,u=r.charAt(0).toUpperCase().concat(r.substring(1)),i="Unable to render <".concat(t," /> because window.").concat(s,".").concat(u," is undefined."),f=typeof a=="string"?a:a.join(",");if(!f.includes(r)){var E=[f,r].filter(Boolean).join();i+=`
To fix the issue, add '`.concat(r,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(E,"'}}>`.")}return i}function K(e){var t=e,r=g;t[r];var n=B(t,[r+""]);return"react-paypal-js-".concat(H(JSON.stringify(n)))}function te(e){var t=self.document.querySelector("script[".concat(g,'="').concat(e,'"]'));t!=null&&t.parentNode&&t.parentNode.removeChild(t)}function re(e,t){var r,n;switch(t.type){case v.LOADING_STATUS:return typeof t.value=="object"?c(c({},e),{loadingStatus:t.value.state,loadingStatusErrorMessage:t.value.message}):c(c({},e),{loadingStatus:t.value});case v.RESET_OPTIONS:return te(e.options[g]),c(c({},e),{loadingStatus:d.PENDING,options:c(c((r={},r[m.DATA_SDK_INTEGRATION_SOURCE]=m.DATA_LIBRARY_VALUE,r),t.value),(n={},n[g]="".concat(K(t.value)),n))});case v.SET_BRAINTREE_INSTANCE:return c(c({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var G=l.createContext(null);function ne(e){if(typeof(e==null?void 0:e.dispatch)=="function"&&e.dispatch.length!==0)return e;throw new Error(Q)}function ae(){var e=ne(l.useContext(G)),t=c(c({},e),{isInitial:e.loadingStatus===d.INITIAL,isPending:e.loadingStatus===d.PENDING,isResolved:e.loadingStatus===d.RESOLVED,isRejected:e.loadingStatus===d.REJECTED});return[t,e.dispatch]}l.createContext({});var w=function(e){var t=e.className,r=t===void 0?"":t,n=e.disabled,a=n===void 0?!1:n,o=e.children,s=e.forceReRender,u=s===void 0?[]:s,i=B(e,["className","disabled","children","forceReRender"]),f=a?{opacity:.38}:{},E="".concat(r," ").concat(a?"paypal-buttons-disabled":"").trim(),p=l.useRef(null),S=l.useRef(null),_=ae()[0],O=_.isResolved,R=_.options,C=l.useState(null),N=C[0],V=C[1],D=l.useState(!0),J=D[0],F=D[1],W=l.useState(null),I=W[1];function b(){S.current!==null&&S.current.close().catch(function(){})}var z=JSON.stringify(i.message);return l.useEffect(function(){if(O===!1)return b;var T=Y(R.dataNamespace);if(T===void 0||T.Buttons===void 0)return I(function(){throw new Error(ee({reactComponentName:w.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:R.components,sdkDataNamespace:R[m.DATA_NAMESPACE]}))}),b;var X=function(y,P){V(P),typeof i.onInit=="function"&&i.onInit(y,P)};try{S.current=T.Buttons(c(c({},i),{onInit:X}))}catch(y){return I(function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(y))})}return S.current.isEligible()===!1?(F(!1),b):(p.current&&S.current.render(p.current).catch(function(y){p.current===null||p.current.children.length===0||I(function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(y))})}),b)},x(x([O],u,!0),[i.fundingSource,z],!1)),l.useEffect(function(){N!==null&&(a===!0?N.disable().catch(function(){}):N.enable().catch(function(){}))},[a,N]),A.createElement(A.Fragment,null,J?A.createElement("div",{ref:p,style:f,className:E}):o)};w.displayName="PayPalButtons";function oe(e,t){var r=document.querySelector('script[src="'.concat(e,'"]'));if(r===null)return null;var n=q(e,t),a=r.cloneNode();if(delete a.dataset.uidAuto,Object.keys(a.dataset).length!==Object.keys(n.dataset).length)return null;var o=!0;return Object.keys(a.dataset).forEach(function(s){a.dataset[s]!==n.dataset[s]&&(o=!1)}),o?r:null}function ie(e){var t=e.url,r=e.attributes,n=e.onSuccess,a=e.onError,o=q(t,r);o.onerror=a,o.onload=n,document.head.insertBefore(o,document.head.firstElementChild)}function ce(e){var t=e.environment,r=t==="sandbox"?"https://www.sandbox.paypal.com/sdk/js":"https://www.paypal.com/sdk/js";delete e.environment,e.sdkBaseUrl&&(r=e.sdkBaseUrl,delete e.sdkBaseUrl);var n=e,a=Object.keys(n).filter(function(u){return typeof n[u]<"u"&&n[u]!==null&&n[u]!==""}).reduce(function(u,i){var f=n[i].toString();return i=se(i),i.substring(0,4)==="data"||i==="crossorigin"?u.attributes[i]=f:u.queryParams[i]=f,u},{queryParams:{},attributes:{}}),o=a.queryParams,s=a.attributes;return o["merchant-id"]&&o["merchant-id"].indexOf(",")!==-1&&(s["data-merchant-id"]=o["merchant-id"],o["merchant-id"]="*"),{url:"".concat(r,"?").concat(ue(o)),attributes:s}}function se(e){var t=function(r,n){return(n?"-":"")+r.toLowerCase()};return e.replace(/[A-Z]+(?![a-z])|[A-Z]/g,t)}function ue(e){var t="";return Object.keys(e).forEach(function(r){t.length!==0&&(t+="&"),t+=r+"="+e[r]}),t}function q(e,t){t===void 0&&(t={});var r=document.createElement("script");return r.src=e,Object.keys(t).forEach(function(n){r.setAttribute(n,t[n]),n==="data-csp-nonce"&&r.setAttribute("nonce",t["data-csp-nonce"])}),r}function de(e,t){if(t===void 0&&(t=Promise),M(e,t),typeof document>"u")return t.resolve(null);var r=ce(e),n=r.url,a=r.attributes,o=a["data-namespace"]||"paypal",s=L(o);return a["data-js-sdk-library"]||(a["data-js-sdk-library"]="paypal-js"),oe(n,a)&&s?t.resolve(s):le({url:n,attributes:a},t).then(function(){var u=L(o);if(u)return u;throw new Error("The window.".concat(o," global variable is not available."))})}function le(e,t){t===void 0&&(t=Promise),M(e,t);var r=e.url,n=e.attributes;if(typeof r!="string"||r.length===0)throw new Error("Invalid url.");if(typeof n<"u"&&typeof n!="object")throw new Error("Expected attributes to be an object.");return new t(function(a,o){if(typeof document>"u")return a();ie({url:r,attributes:n,onSuccess:function(){return a()},onError:function(){var s=new Error('The script "'.concat(r,'" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));return o(s)}})})}function L(e){return window[e]}function M(e,t){if(typeof e!="object"||e===null)throw new Error("Expected an options object.");var r=e.environment;if(r&&r!=="production"&&r!=="sandbox")throw new Error('The `environment` option must be either "production" or "sandbox".');if(typeof t<"u"&&typeof t!="function")throw new Error("Expected PromisePonyfill to be a function.")}var fe=function(e){var t,r=e.options,n=r===void 0?{clientId:"test"}:r,a=e.children,o=e.deferLoading,s=o===void 0?!1:o,u=l.useReducer(re,{options:c(c({},n),(t={},t[m.DATA_JS_SDK_LIBRARY]=m.DATA_LIBRARY_VALUE,t[m.DATA_SDK_INTEGRATION_SOURCE]=m.DATA_LIBRARY_VALUE,t[g]="".concat(K(n)),t)),loadingStatus:s?d.INITIAL:d.PENDING}),i=u[0],f=u[1];return l.useEffect(function(){if(s===!1&&i.loadingStatus===d.INITIAL)return f({type:v.LOADING_STATUS,value:d.PENDING});if(i.loadingStatus===d.PENDING){var E=!0;return de(i.options).then(function(){E&&f({type:v.LOADING_STATUS,value:d.RESOLVED})}).catch(function(p){console.error("".concat($," ").concat(p)),E&&f({type:v.LOADING_STATUS,value:{state:d.REJECTED,message:String(p)}})}),function(){E=!1}}},[i.options,s,i.loadingStatus]),A.createElement(G.Provider,{value:c(c({},i),{dispatch:f})},a)};function U(){}l.createContext({cardFieldsForm:null,fields:{},registerField:U,unregisterField:U});const ve=()=>{const e=Z(),{amount:t,description:r}=e.state;return h.jsxs("div",{className:"container p-8 mx-auto",children:[h.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"Pay Now"}),h.jsxs("p",{className:"mb-4",children:["Amount: $",t]}),h.jsxs("p",{className:"mb-8",children:["Description: ",r]}),h.jsx(fe,{options:{"client-id":"your-client-id-here"},children:h.jsx(w,{style:{layout:"vertical"},createOrder:(n,a)=>a.order.create({purchase_units:[{amount:{value:t},description:r}]}),onApprove:(n,a)=>a.order.capture().then(o=>{alert("Transaction completed by "+o.payer.name.given_name)})})})]})};export{ve as default};