import{a as T}from"./chunk-BCC2ZC2V.js";import{a as W}from"./chunk-TYIIQQFD.js";import{Aa as h,Ba as s,I as d,K as u,Na as l,Oa as _,P as x,Q as f,Ra as y,ba as m,hb as L,ja as v,jb as S,kb as A,la as p,ob as E,pb as I,qa as k,qb as M,ra as b,sa as g,ta as w,ua as i,va as r,wa as a,xa as C}from"./chunk-GRWJBT5S.js";function R(e,t){if(e&1&&(i(0,"a",9),a(1,"app-workspace-icon",10),i(2,"span",6),l(3),r()()),e&2){let o=t.$implicit;p("routerLink","/workspace/"+o.id),m(),p("workspace",o),m(2),_(o.title)}}function z(e,t){if(e&1&&g(0,R,4,3,"a",11,b),e&2){let o=s();w(o.data.workspaces)}}function B(e,t){if(e&1){let o=C();i(0,"button",12),h("click",function(){x(o);let c=s();return f(c.showCreateWorkspaceModal())}),a(1,"app-plus-icon",13),l(2," Create a Workspace "),r()}}var J=(()=>{let t=class t{constructor(){this.appService=d(I)}ngOnInit(){this.appService.getData().subscribe({next:n=>this.data=n})}showCreateWorkspaceModal(){let n=document.getElementById("create-workspace-modal");n&&n.showModal()}};t.\u0275fac=function(c){return new(c||t)},t.\u0275cmp=u({type:t,selectors:[["app-home"]],hostAttrs:[1,"flex","flex-grow","flex-col","overflow-auto"],standalone:!0,features:[y],decls:14,vars:1,consts:[[1,"bg-cc-base","flex","flex-grow","py-10"],[1,"max-w-[1145px]","flex","items-start","w-full","mx-auto"],[1,"hidden","sm:flex","flex-col","min-w-[288px]","max-w-[288px]","w-full","text-sm","text-cc-text","px-4","sticky","top-10"],["routerLink","/boards","routerLinkActive","bg-cc-accent-muted text-cc-accent-muted hover:bg-current",1,"py-2","px-3","hover:bg-cc-overlay","font-semibold","rounded-md","flex","items-center","gap-3","duration-200"],["routerLinkActive","text-cc-accent",1,"flex","gap-2","items-center"],["dimensions","w-3 h-3"],["routerLinkActive","text-cc-accent"],[1,"mt-1","flex","flex-col","gap-1","border-t","border-cc-border/15","pt-5"],[1,"text-xs","text-cc-subtle","font-semibold","pb-2"],["routerLinkActive","bg-cc-accent-muted text-cc-accent-muted hover:bg-current",1,"flex","hover:bg-cc-overlay","rounded-md","gap-2","items-center","p-2","font-semibold","duration-200",3,"routerLink"],["sizeClasses","size-6 text-sm rounded",3,"workspace"],["class","flex hover:bg-cc-overlay rounded-md gap-2 items-center p-2 font-semibold duration-200","routerLinkActive","bg-cc-accent-muted text-cc-accent-muted hover:bg-current",3,"routerLink"],[1,"flex","items-center","duration-200","rounded-md","gap-2","py-2","px-3","hover:bg-cc-overlay",3,"click"],["dimensions","size-3"]],template:function(c,H){c&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3)(4,"div",4),a(5,"app-trello-icon",5),i(6,"span",6),l(7,"Boards"),r()()(),i(8,"div",7)(9,"p",8),l(10,"Workspaces"),r(),v(11,z,2,0)(12,B,3,0),r()(),a(13,"router-outlet"),r()()),c&2&&(m(11),k(11,H.data.workspaces.length>0?11:12))},dependencies:[E,L,S,A,T,M,W]});let e=t;return e})();export{J as default};
