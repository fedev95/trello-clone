import{a as V}from"./chunk-77R5H7AK.js";import{a as j,b as z}from"./chunk-ILJQQRYZ.js";import{Ba as b,Ca as f,J as k,L as m,Oa as p,Pa as B,Q as _,R as h,S,Sa as x,Ua as I,Va as E,ab as T,ca as s,cb as M,ka as u,ma as c,qb as D,ra as C,rb as F,sa as v,ta as g,ua as w,va as i,wa as a,xa as l,ya as y}from"./chunk-ADMRNR7F.js";var W=(()=>{let t=class t{constructor(){this.dimensions="size-2"}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-clock-icon"]],inputs:{dimensions:"dimensions"},standalone:!0,features:[x],decls:3,vars:1,consts:[[3,"ngClass"],["data-slot","icon","fill","none","stroke-width","2","stroke","currentColor","viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg","aria-hidden","true"],["stroke-linecap","round","stroke-linejoin","round","d","M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"]],template:function(n,d){n&1&&(i(0,"div",0),S(),i(1,"svg",1),l(2,"path",2),a()()),n&2&&c("ngClass",d.dimensions+" flex items-center justify-center")},dependencies:[M,T]});let e=t;return e})();function O(e,t){if(e&1&&(l(0,"app-board-preview-card",10),I(1,"boardData")),e&2){let o=t.$implicit;c("board",E(1,2,o))("workspaceId",o.workspaceId)}}function P(e,t){if(e&1&&(i(0,"div",5)(1,"div",6),l(2,"app-clock-icon",7),i(3,"h3",8),p(4,"Recently viewed"),a()(),i(5,"div",9),g(6,O,2,4,"app-board-preview-card",10,v),a()()),e&2){let o=f();s(6),w(o.data.recent)}}function R(e,t){if(e&1&&(i(0,"div",11)(1,"div",12)(2,"div",13),l(3,"app-workspace-icon",14),i(4,"h3",8),p(5),a()()(),l(6,"app-boards-cards-grid",15),a()),e&2){let o=t.$implicit;s(3),c("workspace",o),s(2),B(o.title),s(),c("workspace",o)}}function G(e,t){if(e&1&&g(0,R,7,3,"div",16,v),e&2){let o=f();w(o.data.workspaces)}}function $(e,t){if(e&1){let o=y();i(0,"button",17),b("click",function(){_(o);let n=f();return h(n.showCreateWorkspaceModal())}),p(1," Create a workspace "),a()}}var ee=(()=>{let t=class t{constructor(){this.appService=k(D)}ngOnInit(){this.appService.getData().subscribe({next:r=>this.data=r})}showCreateWorkspaceModal(){let r=document.getElementById("create-workspace-modal");r&&r.showModal()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m({type:t,selectors:[["app-boards"]],hostAttrs:[1,"flex","flex-grow"],standalone:!0,features:[x],decls:8,vars:2,consts:[[1,"px-4","flex","flex-col","gap-20","text-cc-text","w-full"],["class","flex flex-col gap-3"],[1,"flex","flex-col","gap-5"],[1,"font-bold","text-cc-subtle"],[1,"flex","flex-col","gap-14"],[1,"flex","flex-col","gap-3"],[1,"flex","gap-3","items-center"],["dimensions","size-6"],[1,"font-bold"],[1,"grid","grid-cols-2","md:grid-cols-3","lg:grid-cols-4","gap-x-4","gap-y-8"],[3,"board","workspaceId"],[1,"flex","flex-col","gap-4"],[1,"flex","justify-between"],[1,"flex","gap-2","items-center"],["sizeClasses","size-8 text-xl rounded-[3px]",3,"workspace"],[3,"workspace"],["class","flex flex-col gap-4"],[1,"text-cc-accent","hover:underline","me-auto","text-sm","font-medium",3,"click"]],template:function(n,d){n&1&&(i(0,"div",0),u(1,P,8,0,"div",1),i(2,"div",2)(3,"h1",3),p(4,"YOUR WORKSPACES"),a(),i(5,"div",4),u(6,G,2,0)(7,$,2,0),a()()()),n&2&&(s(),C(1,d.data.recent.length>0?1:-1),s(5),C(6,d.data.workspaces.length>0?6:7))},dependencies:[z,W,j,F,V]});let e=t;return e})();export{ee as default};
