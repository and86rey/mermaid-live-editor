import{S as s,i as e,s as a,D as t,e as r,k as o,t as c,c as l,a as n,d as i,n as h,g as d,b as m,f as u,E as p,h as f,l as g,F as v,G as k,H as $,x as b,u as x,I as j,A as E}from"../chunks/vendor-58c10135.js";import{b as y}from"../chunks/paths-28a87002.js";import{l as D,t as I}from"../chunks/state-192747cd.js";import{t as w,s as V}from"../chunks/theme-32ab91e2.js";import"../chunks/preload-helper-1db36302.js";function A(s){let e,a,t,g,v,k,$=s[0].message+"";return{c(){e=r("div"),a=r("div"),t=r("div"),g=o(),v=r("div"),k=c($),this.h()},l(s){e=l(s,"DIV",{class:!0});var r=n(e);a=l(r,"DIV",{class:!0});var o=n(a);t=l(o,"DIV",{class:!0}),n(t).forEach(i),g=h(o),v=l(o,"DIV",{});var c=n(v);k=d(c,$),c.forEach(i),o.forEach(i),r.forEach(i),this.h()},h(){m(t,"class","loader mx-auto svelte-1ub1m40"),m(a,"class","text-indigo-100 text-4xl font-bold my-auto"),m(e,"class","w-screen h-screen z-50 absolute left-0 top-0 bg-gray-600 opacity-50 flex align-middle justify-center")},m(s,r){u(s,e,r),p(e,a),p(a,t),p(a,g),p(a,v),p(v,k)},p(s,e){1&e&&$!==($=s[0].message+"")&&f(k,$)},d(s){s&&i(e)}}}function N(s){let e,a,c,d;const p=s[2].default,f=t(p,s,s[1],null);let j=s[0].loading&&A(s);return{c(){e=r("main"),f&&f.c(),a=o(),j&&j.c(),c=g(),this.h()},l(s){e=l(s,"MAIN",{class:!0});var t=n(e);f&&f.l(t),t.forEach(i),a=h(s),j&&j.l(s),c=g(),this.h()},h(){m(e,"class","h-screen text-primary-content")},m(s,t){u(s,e,t),f&&f.m(e,null),u(s,a,t),j&&j.m(s,t),u(s,c,t),d=!0},p(s,[e]){f&&f.p&&(!d||2&e)&&v(f,p,s,s[1],d?$(p,s[1],e,null):k(s[1]),null),s[0].loading?j?j.p(s,e):(j=A(s),j.c(),j.m(c.parentNode,c)):j&&(j.d(1),j=null)},i(s){d||(b(f,s),d=!0)},o(s){x(f,s),d=!1},d(s){s&&i(e),f&&f.d(s),s&&i(a),j&&j.d(s),s&&i(c)}}}function M(s,e,a){let t,r;j(s,w,(s=>a(3,t=s))),j(s,D,(s=>a(0,r=s)));let{$$slots:o={},$$scope:c}=e;return E((()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(`${y}/service-worker.js`,{scope:`${y}/`}).then((function(s){console.log("Registration successful, scope is:",s.scope)})).catch((function(s){console.log("Service worker registration failed, error:",s)}));const s=window.matchMedia("(prefers-color-scheme: dark)").matches;void 0===t.theme&&V(s?"dark":"light"),w.subscribe((({theme:s,isDark:e})=>{s&&(document.getElementsByTagName("html")[0].setAttribute("data-theme",s),I(e))}))})),s.$$set=s=>{"$$scope"in s&&a(1,c=s.$$scope)},[r,c,o]}class S extends s{constructor(s){super(),e(this,s,M,N,a,{})}}export{S as default};
