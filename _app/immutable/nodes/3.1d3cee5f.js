import{S as L,i as N,s as S,k as x,q as b,a as q,l as w,m as P,r as j,h as _,c as A,n as h,b as g,H as d,g as y,f as V,d as E,N as z,y as D,z as G,A as I,D as J,B as K,v as M}from"../chunks/index.c74dd74d.js";import{p as B,P as O}from"../chunks/projectData.eb1d3e6a.js";function C(m,s,r){const l=m.slice();return l[0]=s[r],l}function F(m){let s,r;return s=new O({props:{item:m[0]}}),{c(){D(s.$$.fragment)},l(l){G(s.$$.fragment,l)},m(l,n){I(s,l,n),r=!0},p:J,i(l){r||(y(s.$$.fragment,l),r=!0)},o(l){E(s.$$.fragment,l),r=!1},d(l){K(s,l)}}}function Q(m){let s,r,l,n,c,k,i,v,u,f=B,t=[];for(let e=0;e<f.length;e+=1)t[e]=F(C(m,f,e));const H=e=>E(t[e],1,1,()=>{t[e]=null});return{c(){s=x("h1"),r=b("Projects"),l=q();for(let e=0;e<t.length;e+=1)t[e].c();n=q(),c=x("p"),k=b("For more about my work:"),i=x("a"),v=b("Visit my Linkedin"),this.h()},l(e){s=w(e,"H1",{class:!0});var o=P(s);r=j(o,"Projects"),o.forEach(_),l=A(e);for(let $=0;$<t.length;$+=1)t[$].l(e);n=A(e),c=w(e,"P",{class:!0});var a=P(c);k=j(a,"For more about my work:"),i=w(a,"A",{class:!0,href:!0});var p=P(i);v=j(p,"Visit my Linkedin"),p.forEach(_),a.forEach(_),this.h()},h(){h(s,"class","page_heading svelte-tvhs3a"),h(i,"class","page_link"),h(i,"href","https://www.linkedin.com/in/manasugiyoshi/"),h(c,"class","page_body")},m(e,o){g(e,s,o),d(s,r),g(e,l,o);for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(e,o);g(e,n,o),g(e,c,o),d(c,k),d(c,i),d(i,v),u=!0},p(e,[o]){if(o&0){f=B;let a;for(a=0;a<f.length;a+=1){const p=C(e,f,a);t[a]?(t[a].p(p,o),y(t[a],1)):(t[a]=F(p),t[a].c(),y(t[a],1),t[a].m(n.parentNode,n))}for(M(),a=f.length;a<t.length;a+=1)H(a);V()}},i(e){if(!u){for(let o=0;o<f.length;o+=1)y(t[o]);u=!0}},o(e){t=t.filter(Boolean);for(let o=0;o<t.length;o+=1)E(t[o]);u=!1},d(e){e&&_(s),e&&_(l),z(t,e),e&&_(n),e&&_(c)}}}class U extends L{constructor(s){super(),N(this,s,null,Q,S,{})}}export{U as component};