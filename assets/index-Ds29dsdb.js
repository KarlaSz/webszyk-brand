import{r as e,R as E}from"./index-Op9x7ZwS.js";import{c as F,l as p,b as T}from"./index-Bi-S8ac4.js";import{A as g,a as v,R as b,D as d,d as y,L as I,N as V,e as L,f as O,g as P,g as j,i as W,m as q,h as z,p as B,j as D,u as G,k as J,n as K}from"./index-Bi-S8ac4.js";/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const U="6";try{window.__reactRouterVersion=U}catch{}const N="startTransition",l=E[N];function w(t){let{basename:m,children:S,future:a,window:f}=t,o=e.useRef();o.current==null&&(o.current=F({window:f,v5Compat:!0}));let s=o.current,[n,r]=e.useState({action:s.action,location:s.location}),{v7_startTransition:i}=a||{},c=e.useCallback(u=>{i&&l?l(()=>r(u)):r(u)},[r,i]);return e.useLayoutEffect(()=>s.listen(c),[s,c]),e.useEffect(()=>p(a),[a]),e.createElement(T,{basename:m,children:S,location:n.location,navigationType:n.action,navigator:s,future:a})}var R;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(R||(R={}));var h;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(h||(h={}));export{w as HashRouter,g as NavigationType,v as Route,T as Router,b as Routes,d as UNSAFE_DataRouterContext,y as UNSAFE_DataRouterStateContext,I as UNSAFE_LocationContext,V as UNSAFE_NavigationContext,L as UNSAFE_RouteContext,O as createPath,P as createRoutesFromChildren,j as createRoutesFromElements,W as isRouteErrorResponse,q as matchPath,z as matchRoutes,B as parsePath,D as useInRouterContext,G as useLocation,J as useRouteError,K as useRoutes};
