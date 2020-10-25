var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t){return null==t?"":t}function u(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let h;function $(t){h=t}const g=[],m=[],b=[],y=[],_=Promise.resolve();let x=!1;function k(t){b.push(t)}let v=!1;const w=new Set;function q(){if(!v){v=!0;do{for(let t=0;t<g.length;t+=1){const n=g[t];$(n),A(n.$$)}for($(null),g.length=0;m.length;)m.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];w.has(n)||(w.add(n),n())}b.length=0}while(g.length);for(;y.length;)y.pop()();x=!1,v=!1,w.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const E=new Set;let N;function j(){N={r:0,c:[],p:N}}function C(){N.r||o(N.c),N=N.p}function O(t,n){t&&t.i&&(E.delete(t),t.i(n))}function B(t,n,e,o){if(t&&t.o){if(E.has(t))return;E.add(t),N.c.push((()=>{E.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function M(t){t&&t.c()}function S(t,e,c){const{fragment:l,on_mount:u,on_destroy:s,after_update:f}=t.$$;l&&l.m(e,c),k((()=>{const e=u.map(n).filter(r);s?s.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(k)}function T(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function D(t,n){-1===t.$$.dirty[0]&&(g.push(t),x||(x=!0,_.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function H(n,r,c,l,u,s,i=[-1]){const a=h;$(n);const d=r.props||{},p=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:i,skip_bound:!1};let g=!1;if(p.ctx=c?c(n,d,((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),g&&D(n,t)),e})):[],p.update(),g=!0,o(p.before_update),p.fragment=!!l&&l(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();r.intro&&O(n.$$.fragment),S(n,r.target,r.anchor),q()}$(a)}class P{$destroy(){T(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(n){let e,o,r;return{c(){e=i("div"),o=a(n[0]),p(e,"class",r=l(n[1])+" svelte-13kk8cn")},m(t,n){s(t,e,n),u(e,o)},p(t,[n]){1&n&&function(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}(o,t[0]),2&n&&r!==(r=l(t[1])+" svelte-13kk8cn")&&p(e,"class",r)},i:t,o:t,d(t){t&&f(e)}}}function F(t,n,e){let{state:o}=n,{color:r}=n;return t.$$set=t=>{"state"in t&&e(0,o=t.state),"color"in t&&e(1,r=t.color)},[o,r]}class G extends P{constructor(t){super(),H(this,t,F,z,c,{state:0,color:1})}}function I(t,n,e){const o=t.slice();return o[3]=n[e],o[5]=e,o}function J(t){let n,e;return n=new G({props:{state:t[5],color:"white"}}),{c(){M(n.$$.fragment)},m(t,o){S(n,t,o),e=!0},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){B(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function K(t){let n,e,o;return n=new G({props:{state:t[5],color:"black"}}),{c(){M(n.$$.fragment),e=d()},m(t,r){S(n,t,r),s(t,e,r),o=!0},i(t){o||(O(n.$$.fragment,t),o=!0)},o(t){B(n.$$.fragment,t),o=!1},d(t){T(n,t),t&&f(e)}}}function L(t){let n,e,o,r;const c=[K,J],l=[];function u(t,n){return t[3]>t[0]?0:1}return n=u(t),e=l[n]=c[n](t),{c(){e.c(),o=a("")},m(t,e){l[n].m(t,e),s(t,o,e),r=!0},p(t,r){let s=n;n=u(t),n!==s&&(j(),B(l[s],1,1,(()=>{l[s]=null})),C(),e=l[n],e||(e=l[n]=c[n](t),e.c()),O(e,1),e.m(o.parentNode,o))},i(t){r||(O(e),r=!0)},o(t){B(e),r=!1},d(t){l[n].d(t),t&&f(o)}}}function Q(t){let n,e,o,r,c,l,a=t[1],h=[];for(let n=0;n<a.length;n+=1)h[n]=L(I(t,a,n));const $=t=>B(h[t],1,1,(()=>{h[t]=null}));return{c(){n=i("body"),e=i("main"),o=i("h1"),o.textContent="A new way to look at time",r=d(),c=i("div");for(let t=0;t<h.length;t+=1)h[t].c();p(o,"class","title svelte-fqht1p"),p(c,"class","house-div svelte-fqht1p"),p(e,"class","svelte-fqht1p"),p(n,"class","svelte-fqht1p")},m(t,f){s(t,n,f),u(n,e),u(e,o),u(e,r),u(e,c);for(let t=0;t<h.length;t+=1)h[t].m(c,null);l=!0},p(t,[n]){if(3&n){let e;for(a=t[1],e=0;e<a.length;e+=1){const o=I(t,a,e);h[e]?(h[e].p(o,n),O(h[e],1)):(h[e]=L(o),h[e].c(),O(h[e],1),h[e].m(c,null))}for(j(),e=a.length;e<h.length;e+=1)$(e);C()}},i(t){if(!l){for(let t=0;t<a.length;t+=1)O(h[t]);l=!0}},o(t){h=h.filter(Boolean);for(let t=0;t<h.length;t+=1)B(h[t]);l=!1},d(t){t&&f(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(h,t)}}}function R(t,n,e){let o,r=[];return function(){let t=new Date;console.log(t);let n=(1440-(t.getMinutes()+60*t.getHours()))/15;e(0,o=n),console.log(n);for(let t=96;t>0;t--)r.push(t)}(),[o,r]}return new class extends P{constructor(t){super(),H(this,t,R,Q,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
