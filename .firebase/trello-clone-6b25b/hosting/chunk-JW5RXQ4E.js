import{a as X,b as Y,c as we,d as _e}from"./chunk-DQRDE34S.js";import{a as P}from"./chunk-O4TSAHZM.js";import{a as G,b as O,c as R,d as q,e as H,f as z,g as U,h as $,i as Q,j as K,k as W}from"./chunk-TMTOA65B.js";import{$ as l,$a as fe,Aa as se,Ba as le,C as oe,Ea as ce,Fa as de,G as S,Ga as pe,Ha as ie,I as u,Ia as p,Ja as w,Ka as me,Ma as b,N as v,Na as ue,O as g,Oa as A,P as B,Pa as D,Wa as E,X as re,Xa as j,Ya as C,aa as ae,bb as be,db as xe,eb as ve,f as ne,fb as ge,ha as T,ia as te,ja as f,jb as he,kb as V,lb as Ce,na as h,oa as F,pa as y,qa as I,ra as M,sa as o,ta as s,ua as c,va as _,ya as m,za as d}from"./chunk-XHTDBZ6Q.js";var ke=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-task-card"]],inputs:{card:"card"},standalone:!0,features:[b],decls:2,vars:1,consts:[[1,"text-sm","py-2","px-3","rounded-lg","bg-cc-task-card"]],template:function(t,a){t&1&&(o(0,"p",0),p(1),s()),t&2&&(l(),w(a.card.title))}});let i=e;return i})();function Le(i,e){if(i&1&&c(0,"app-task-card",7),i&2){let r=e.$implicit;f("card",r)}}var Se=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-task-card-list"]],hostAttrs:[1,"flex","flex-grow"],inputs:{list:"list"},standalone:!0,features:[b],decls:12,vars:1,consts:[[1,"h-full","w-[272px]","flex","flex-col"],[1,"bg-cc-task-list","h-max","rounded-xl","text-cc-text","overflow-hidden","flex","flex-col",3,"mousedown"],[1,"flex","p-2","text-sm","font-medium"],[1,"text-sm","font-semibold","py-2","px-3"],["id","card-list",1,"flex","flex-col","mx-1","px-1","gap-2","overflow-auto"],[1,"w-full","py-2","px-3","text-start","text-cc-subtle","hover:bg-cc-task-list-btn","rounded-lg","flex","gap-2","items-center"],["dimensions","size-3"],[3,"card"]],template:function(t,a){t&1&&(o(0,"div",0)(1,"div",1),m("mousedown",function(L){return L.stopImmediatePropagation()}),o(2,"div",2)(3,"p",3),p(4),s()(),o(5,"div",4),I(6,Le,1,1,"app-task-card",7,y),s(),o(8,"div",2)(9,"button",5),c(10,"app-plus-icon",6),p(11," Add a card "),s()()()()),t&2&&(l(4),w(a.list.title),l(2),M(a.list.cards))},dependencies:[ke,P],styles:["#card-list[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px}#card-list[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:rgba(var(--task-list-scrollbar-track));border-radius:9999px}#card-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:rgba(var(--task-list-scrollbar-thumb));border-radius:9999px}"]});let i=e;return i})();var ye=(()=>{let e=class e{constructor(){this.dimensions="size-2"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-menu-dots-icon"]],inputs:{dimensions:"dimensions"},standalone:!0,features:[b],decls:3,vars:1,consts:[[3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512"],["fill","currentColor","d","M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]],template:function(t,a){t&1&&(o(0,"div",0),B(),o(1,"svg",1),c(2,"path",2),s()()),t&2&&f("ngClass",a.dimensions+" flex justify-center items-center")},dependencies:[C,E]});let i=e;return i})();var J=(()=>{let e=class e{constructor(){this.dimensions="size-2"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-minus-icon"]],inputs:{dimensions:"dimensions"},standalone:!0,features:[b],decls:3,vars:1,consts:[[3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512"],["fill","currentColor","d","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]],template:function(t,a){t&1&&(o(0,"div",0),B(),o(1,"svg",1),c(2,"path",2),s()()),t&2&&f("ngClass",a.dimensions+" flex items-center justify-center")},dependencies:[C,E]});let i=e;return i})();function Ae(i,e){if(i&1){let r=_();o(0,"div",13),c(1,"div"),o(2,"a",14),p(3),s(),o(4,"button",15),m("click",function(){v(r);let t=d();return g(t.closeBoard())}),c(5,"app-minus-icon",16),s()()}if(i&2){let r=e.$implicit,n=d();l(),h("min-w-6 min-h-5 rounded-sm ",r.background,""),l(),le("routerLink","/board/",n.workspace.id,"/",r.id,""),l(),w(r.title)}}var Ie=(()=>{let e=class e{constructor(){this.appService=S(V),this.router=S(xe),this.sidebar=!0}closeBoard(){this.appService.closeBoard(this.workspace.id,this.board.id),this.router.navigate(["/"])}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-board-sidebar"]],inputs:{workspace:"workspace",board:"board"},standalone:!0,features:[b],decls:23,vars:15,consts:[[1,"flex","flex-col","h-full","absolute","right-0","w-full","min-w-[260px]"],[1,"flex","items-center","py-2","px-3","min-h-14","border-b","border-[hsla(211,18%,68%,0.16)]","justify-between"],[1,"flex","items-center","gap-2",3,"routerLink"],["sizeClasses","size-8 text-xl rounded",3,"workspace"],[1,"text-sm","font-semibold"],["title","Collapse sidebar",1,"size-7","aspect-square","rounded-sm","hover:bg-white/10","rotate-90","flex","items-center","justify-center","text-white",3,"click"],[1,"sr-only"],["dimensions","size-[10px]"],[1,"flex","flex-col","flex-grow","overflow-auto","sidebar-scrollbar","pb-10"],[1,"flex","justify-between","py-4","px-3"],[1,"flex","flex-col"],["title","Expand sidebar","aria-label","Workspace navigation",3,"click"],[1,"size-6","bg-cc-board-sidebar-collapse","border","border-cc-border/15","aspect-square","flex","justify-center","items-center","-rotate-90","text-white","rounded-full","mt-4","ms-1"],["routerLinkActive","bg-white/20",1,"flex","items-center","py-1","px-3","gap-2","text-sm","hover:bg-white/10","[&>button]:hover:min-w-7","relative"],[1,"truncate","expanded-link",3,"routerLink"],["title","Close board",1,"flex","ms-auto","w-0","h-7","overflow-hidden","focus:min-w-7","justify-center","items-center","aspect-square","rounded-sm","hover:bg-white/15","relative",3,"click"],["dimensions","size-3"],["class","flex items-center py-1 px-3 gap-2 text-sm hover:bg-white/10 [&>button]:hover:min-w-7 relative","routerLinkActive","bg-white/20"]],template:function(t,a){t&1&&(o(0,"div")(1,"div")(2,"div")(3,"div",0)(4,"div",1)(5,"a",2),c(6,"app-workspace-icon",3),o(7,"span",4),p(8),s()(),o(9,"button",5),m("click",function(){return a.sidebar=!a.sidebar}),o(10,"span",6),p(11,"Close menu"),s(),c(12,"app-chevron-icon",7),s()(),o(13,"div",8)(14,"div",9)(15,"p",4),p(16,"Your boards"),s()(),o(17,"div",10),I(18,Ae,6,6,"div",17,y),s()()()(),o(20,"button",11),m("click",function(){return a.sidebar=!a.sidebar}),o(21,"span",12),c(22,"app-chevron-icon",7),s()()()()),t&2&&(h("",a.board.base," h-full"),l(),h("",a.sidebar?"min-w-[260px]":"min-w-[16px]"," h-full relative duration-200 bg-cc-board-sidebar text-cc-board-sidebar-text border-r border-[hsla(211,18%,68%,0.16)]"),l(),h("h-full w-full ",a.sidebar?"block":"invisible delay-200",""),l(3),se("routerLink","/workspace/",a.workspace.id,""),l(),f("workspace",a.workspace),l(2),w(a.workspace.title),l(10),M(a.workspace.boards),l(2),h("[&>span]:hover:bg-white/40 w-full h-full absolute top-0 left-0 flex ",a.sidebar?"invisible":"delay-200 block",""))},dependencies:[C,he,ve,ge,X,Ce,J],styles:[".sidebar-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar{width:9px}.sidebar-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track{background-color:#3239407f;border-radius:9999px}.sidebar-scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#45505b7f;border-radius:9999px}"]});let i=e;return i})();var Z=(()=>{let e=class e{constructor(){this.settingsSidebar=new ne(!1)}getSettingsSidebar(){return this.settingsSidebar.asObservable()}setSettingsSidebar(n){this.settingsSidebar.next(n)}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=oe({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ee=function(i){return i.BACKGROUND="Change background",i.LABELS="Labels",i.ARCHIVED="Archive",i.DEFAULT="Menu",i}(ee||{});var Me=(()=>{let e=class e{constructor(){this.dimensions="size-2"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-archive-icon"]],inputs:{dimensions:"dimensions"},standalone:!0,features:[b],decls:3,vars:1,consts:[[3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-archive"],["d","M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"]],template:function(t,a){t&1&&(o(0,"div",0),B(),o(1,"svg",1),c(2,"path",2),s()()),t&2&&f("ngClass",a.dimensions+" flex items-center justify-center")},dependencies:[C,E]});let i=e;return i})();var Te=(()=>{let e=class e{constructor(){this.dimensions="size-2"}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-label-icon"]],inputs:{dimensions:"dimensions"},standalone:!0,features:[b],decls:4,vars:1,consts:[[3,"ngClass"],["xmlns","http://www.w3.org/2000/svg","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-tag"],["d","M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"],["d","M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"]],template:function(t,a){t&1&&(o(0,"div",0),B(),o(1,"svg",1),c(2,"path",2)(3,"path",3),s()()),t&2&&f("ngClass",a.dimensions+" flex items-center justify-center")},dependencies:[C,E]});let i=e;return i})();function De(i,e){i&1&&c(0,"app-check-icon",6)}function ze(i,e){if(i&1){let r=_();o(0,"button",3),m("click",function(){let a=v(r).$implicit,x=d();return x.board.background=a.class,g(x.board.base=a.base)}),o(1,"span",4),p(2),s(),o(3,"span",5),T(4,De,1,0,"app-check-icon",6),s()()}if(i&2){let r=e.$implicit,n=d();h("h-24 rounded-lg flex py-3 px-2 items-end relative ",r.class,""),l(2),w(r.emoji),l(2),F(4,r.class===n.board.background?4:-1)}}function Ne(i,e){i&1&&c(0,"app-check-icon",6)}function je(i,e){if(i&1){let r=_();o(0,"button",3),m("click",function(){let a=v(r).$implicit,x=d();return x.board.background=a.class,g(x.board.base=a.base)}),o(1,"span",5),T(2,Ne,1,0,"app-check-icon",6),s()()}if(i&2){let r=e.$implicit,n=d();h("aspect-square rounded-md relative ",r.class,""),l(2),F(2,r.class===n.board.background?2:-1)}}var Fe=(()=>{let e=class e{constructor(){this.boardBackgrounds=_e}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-change-background"]],hostAttrs:[1,"overflow-hidden"],inputs:{board:"board"},standalone:!0,features:[b],decls:7,vars:0,consts:[[1,"submenu-animation","p-4","flex","flex-col","h-full","overflow-y-auto","scrollbar"],[1,"grid","grid-cols-2","pb-6","gap-2","border-b","border-cc-border/15"],[1,"grid","grid-cols-5","gap-2","mt-5"],[3,"click"],[1,"select-none"],[1,"absolute","h-full","w-full","flex","items-center","justify-center","top-0","left-0","hover:bg-cc-base/20","text-white"],["dimensions","size-4"],[3,"class"]],template:function(t,a){t&1&&(o(0,"div",0)(1,"div",1),I(2,ze,5,5,"button",7,y),s(),o(4,"div",2),I(5,je,3,4,"button",7,y),s()()),t&2&&(l(2),M(a.boardBackgrounds.gradients),l(3),M(a.boardBackgrounds.solids))},dependencies:[we]});let i=e;return i})();function Pe(i,e){i&1&&(o(0,"p",1),p(1,"labels"),s())}var Ge=()=>[],Be=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-labels"]],hostAttrs:[1,"overflow-hidden"],standalone:!0,features:[b],decls:3,vars:1,consts:[[1,"p-4","flex","flex-col","h-full","submenu-animation","overflow-y-auto","scrollbar"],[1,"py-2"],["class","py-2"]],template:function(t,a){t&1&&(o(0,"div",0),I(1,Pe,2,0,"p",2,y),s()),t&2&&(l(),M(ue(0,Ge).constructor(20)))}});let i=e;return i})();function Oe(i,e){if(i&1){let r=_();o(0,"div",7)(1,"button",8),m("click",function(){v(r);let t=d();return g(t.setActiveMenu(t.settingsMenu.ARCHIVED))}),c(2,"app-archive-icon",9),p(3," Archived items "),s(),o(4,"button",8),m("click",function(){v(r);let t=d();return g(t.setActiveMenu(t.settingsMenu.BACKGROUND))}),c(5,"div"),p(6," Change background "),s(),o(7,"button",8),m("click",function(){v(r);let t=d();return g(t.setActiveMenu(t.settingsMenu.LABELS))}),c(8,"app-label-icon",10),p(9," Labels "),s(),o(10,"button",11),c(11,"app-minus-icon",9),p(12," Close board "),s()()}if(i&2){let r=d();l(5),h("size-5 rounded-sm ",r.board.background,"")}}function Re(i,e){i&1&&(o(0,"div",12)(1,"p"),p(2,"archive"),s()())}function qe(i,e){if(i&1&&c(0,"app-change-background",13),i&2){let r=d();f("board",r.board)}}function He(i,e){i&1&&c(0,"app-labels")}var Ee=(()=>{let e=class e{constructor(){this.boardService=S(Z),this.settingsMenu=ee,this.activeMenu=ee.DEFAULT}ngOnInit(){this.settings=this.boardService.getSettingsSidebar()}setSettings(n){this.boardService.setSettingsSidebar(n)}setActiveMenu(n){this.activeMenu=n}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-board-settings"]],inputs:{board:"board"},standalone:!0,features:[b],decls:16,vars:15,consts:[[1,"px-4"],[1,"border-b","border-cc-border/15","flex","items-center","justify-center","relative"],[1,"my-4","mx-8","font-medium"],["title","Go back.",3,"click"],["dimensions","size-4 rotate-90"],["title","Close the board menu.",1,"p-[6px]","rounded-md","aspect-square","hover:bg-cc-menu-item-hover","absolute","right-0",3,"click"],["dimensions","size-4"],[1,"p-4","text-sm","font-base","flex","flex-col","gap-1","menu-animation","h-full","overflow-y-auto","scrollbar"],[1,"flex","items-center","gap-3","py-[6px]","px-3","hover:bg-cc-menu-item-hover","w-full","rounded-md",3,"click"],["dimensions","size-5"],["dimensions","size-5 -rotate-90"],[1,"flex","items-center","gap-3","py-[6px]","px-3","hover:bg-cc-menu-item-hover","w-full","rounded-md"],[1,"p-4","submenu-animation"],[3,"board"]],template:function(t,a){if(t&1&&(o(0,"div"),A(1,"async"),o(2,"div"),A(3,"async"),o(4,"div",0)(5,"div",1)(6,"h3",2),p(7),s(),o(8,"button",3),m("click",function(){return a.activeMenu=a.settingsMenu.DEFAULT}),c(9,"app-chevron-icon",4),s(),o(10,"button",5),m("click",function(){return a.setSettings(!1)}),c(11,"app-xmark-icon",6),s()()(),T(12,Oe,13,3)(13,Re,3,0)(14,qe,1,1)(15,He,1,0),s()()),t&2){let x;h("",D(1,11,a.settings)?"min-w-[340px]":"min-w-0"," h-full duration-200 relative"),l(2),h("",D(3,13,a.settings)?"visible":"invisible delay-200"," absolute left-0 h-full w-full bg-cc-menu min-w-[340px] text-cc-text overflow-hidden flex flex-col"),l(5),w(a.activeMenu),l(),h("",a.activeMenu!=a.settingsMenu.DEFAULT?"":"invisible translate-x-[-200%]"," duration-200 p-[6px] rounded-md aspect-square hover:bg-cc-menu-item-hover absolute left-0"),l(4),F(12,(x=a.activeMenu)===a.settingsMenu.DEFAULT?12:x===a.settingsMenu.ARCHIVED?13:x===a.settingsMenu.BACKGROUND?14:x===a.settingsMenu.LABELS?15:-1)}},dependencies:[C,j,X,Y,Me,Te,J,Fe,Be],styles:["@keyframes _ngcontent-%COMP%_menu-animation{0%{translate:-316px 0}to{translate:0}}.menu-animation[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_menu-animation ease .2s}"]});let i=e;return i})();var $e=["form"];function Qe(i,e){if(i&1){let r=_();o(0,"form",1,2),m("ngSubmit",function(){v(r);let t=d();return g(t.formFunc())})("mousedown",function(t){return t.stopPropagation()}),c(2,"input",3),o(3,"div",4)(4,"button",5),p(5,"Add list"),s(),o(6,"button",6),m("click",function(){v(r);let t=d();return g(t.cancel())}),c(7,"app-xmark-icon",7),s()()()}if(i&2){let r=d();f("formGroup",r.newListForm),l(4),f("disabled",!r.newListForm.valid)}}function Ke(i,e){if(i&1){let r=_();o(0,"button",8),m("click",function(t){v(r);let a=d();return a.builder=!0,g(t.stopPropagation())})("mousedown",function(t){return t.stopPropagation()}),c(1,"app-plus-icon",7),p(2),s()}if(i&2){let r=d();l(2),me(" ",r.board.lists.length>0?"Add another list":"Add a list"," ")}}var Ve=(()=>{let e=class e{constructor(){this.appService=S(V),this.builder=!1,this.newListForm=new H({title:new z("",O.required),cards:new z([])})}onClick(n){this.builder&&!this.menux.nativeElement.contains(n.target)&&this.cancel()}formFunc(){this.appService.createList(this.workspaceId,this.boardId,this.newListForm.getRawValue()),this.newListForm.patchValue({title:"",cards:[]})}cancel(){this.builder=!1,this.newListForm.patchValue({title:"",cards:[]})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u({type:e,selectors:[["app-new-list-form"]],viewQuery:function(t,a){if(t&1&&ce($e,5),t&2){let x;de(x=pe())&&(a.menux=x.first)}},hostBindings:function(t,a){t&1&&m("click",function(L){return a.onClick(L)},!1,re)},inputs:{board:"board",workspaceId:"workspaceId",boardId:"boardId"},standalone:!0,features:[b],decls:2,vars:1,consts:[["class","min-w-[272px] text-sm gap-2 p-2 bg-cc-task-list flex flex-col rounded-xl text-cc-text",3,"formGroup"],[1,"min-w-[272px]","text-sm","gap-2","p-2","bg-cc-task-list","flex","flex-col","rounded-xl","text-cc-text",3,"formGroup","ngSubmit","mousedown"],["form",""],["id","miInput","autofocus","","formControlName","title","type","text","aria-label","Enter list title","placeholder","Enter list title...",1,"p-1","outline-none","py-[6px]","px-3","rounded-md","border-2","border-cc-border/15","focus:border-cc-accent","bg-cc-task-card","font-semibold","w-full"],[1,"flex","gap-1"],["type","submit",1,"py-[6px]","px-3","font-semibold","bg-cc-accent","hover:bg-cc-accent-highlight","text-cc-base","rounded",3,"disabled"],["type","button","aria-label","Cancel list editing",1,"hover:bg-cc-task-list-btn","w-8","flex","justify-center","items-center","rounded",3,"click"],["dimensions","size-3"],[1,"min-w-[272px]","p-3","bg-white/20","hover:bg-white/10","rounded-xl","text-white","flex","gap-2","text-sm","font-medium","items-center",3,"click","mousedown"]],template:function(t,a){t&1&&T(0,Qe,8,2,"form",0)(1,Ke,3,1),t&2&&F(0,a.builder?0:1)},dependencies:[Y,P,W,U,G,R,q,$,Q,K]});let i=e;return i})();function We(i,e){if(i&1&&c(0,"app-task-card-list",17),i&2){let r=e.$implicit;f("list",r)}}function Xe(i,e){if(i&1&&(o(0,"div",16),I(1,We,1,1,"app-task-card-list",17,y),s()),i&2){let r=d(2);l(),M(r.board.lists)}}function Ye(i,e){if(i&1){let r=_();o(0,"div",1),c(1,"app-board-sidebar",2),o(2,"div",3)(3,"div",4)(4,"div",5)(5,"button",6),m("click",function(){v(r);let t=ie(9),a=d();return a.editTitle=!0,t.focus(),g(t.select())}),p(6),s(),o(7,"form",7),m("ngSubmit",function(){v(r);let t=ie(9);return g(t.blur())}),o(8,"input",8,9),m("blur",function(){v(r);let t=d();return g(t.submitTitle())}),s()()(),o(10,"button",10),m("click",function(){v(r);let t=d();return g(t.setSettingsSidebar(!0))}),A(11,"async"),c(12,"app-menu-dots-icon",11),s()(),o(13,"div",12),m("mousedown",function(){v(r);let t=d();return g(t.pointerScroll())}),T(14,Xe,3,0,"div",13),c(15,"app-new-list-form",14),s()(),c(16,"app-board-settings",15),s()}if(i&2){let r=d();h("flex h-full overflow-hidden ",r.board.background,""),l(),f("workspace",r.workspace)("board",r.board),l(4),h("",r.editTitle?"whitespace-pre -z-10":"z-0"," focus:bg-white/15 w-fit h-full px-2 text-white text-lg font-bold hover:bg-white/15 overflow-hidden truncate border-2 border-transparent rounded"),te("aria-hidden",r.editTitle),l(),w(r.boardTitleForm.getRawValue().title),l(),h("",r.editTitle?"z-0":"-z-10 opacity-0"," absolute w-full"),f("formGroup",r.boardTitleForm),l(),f("tabIndex",r.editTitle?1:-1),te("aria-hidden",!r.editTitle),l(2),h("p-2 hover:bg-white/15 focus:bg-white/15 rounded-sm ",D(11,24,r.settings)?"invisible":"visible",""),l(4),F(14,r.board.lists.length>0?14:-1),l(),f("workspaceId",r.workspaceId)("boardId",r.boardId)("board",r.board),l(),f("board",r.board)}}function Je(i,e){i&1&&(o(0,"p",18),p(1,"Page not found."),s())}var xi=(()=>{let e=class e{constructor(n){this.titleService=n,this.appService=S(V),this.boardService=S(Z),this.route=S(be),this.editTitle=!1,this.boardTitleForm=new H({title:new z("",O.required)})}ngOnInit(){this.settings=this.boardService.getSettingsSidebar(),this.route.paramMap.subscribe(n=>{this.workspaceId=n.get("workspace-id"),this.boardId=n.get("board-id"),this.getBoard()})}submitTitle(){this.editTitle=!1;let n=this.boardTitleForm.getRawValue().title;n?this.appService.editBoardTitle(this.workspaceId,this.board.id,n):this.boardTitleForm.patchValue({title:this.board.title})}setSettingsSidebar(n){this.boardService.setSettingsSidebar(n)}getBoard(){this.appService.getWorkspace(this.workspaceId).subscribe({next:n=>this.workspace=n}),this.appService.setBoard(this.workspaceId,this.boardId),this.appService.getBoard().subscribe({next:n=>{n&&(this.board=n,this.titleService.setTitle(`${this.board.title} | Trello`),this.boardTitleForm.patchValue({title:this.board.title}))}}),this.appService.checkRecentBoards(parseInt(this.workspaceId),parseInt(this.boardId))}pointerScroll(){let n=!0,t=document.getElementById("board-content");t?.setAttribute("style","user-select: none;");let a=()=>{n=!1,t?.setAttribute("style","user-select: auto;")},x=L=>n&&(t.scrollLeft-=L.movementX);addEventListener("pointermove",x),addEventListener("pointerup",a)}};e.\u0275fac=function(t){return new(t||e)(ae(fe))},e.\u0275cmp=u({type:e,selectors:[["app-board"]],hostAttrs:[1,"flex","flex-grow","flex-col","overflow-auto"],standalone:!0,features:[b],decls:2,vars:1,consts:[["style","view-transition-name: board-transition",3,"class"],[2,"view-transition-name","board-transition"],[3,"workspace","board"],[1,"bg-cc-board-filter","duration-200","h-full","w-full","flex","flex-col","overflow-hidden","pb-2"],[1,"py-3","px-4","gap-4","min-h-[56px]","bg-black/25","flex","justify-between","text-white"],[1,"w-fit","relative","flex","flex-col","overflow-hidden"],[3,"click"],[3,"formGroup","ngSubmit"],["formControlName","title","type","text","id","board-title",1,"w-full","bg-cc-base","border-2","border-cc-accent-highlight","px-2","text-lg","font-bold","rounded","outline-none","text-cc-subtle",3,"tabIndex","blur"],["titleInput",""],["aria-label","Show menu",3,"click"],["dimensions","size-4"],["id","board-content",1,"flex","gap-3","p-3","pb-2","flex-grow","items-start","overflow-x-auto","min-w-full","overflow-y-hidden",3,"mousedown"],["class","flex gap-3 h-full"],[3,"workspaceId","boardId","board"],[3,"board"],[1,"flex","gap-3","h-full"],[3,"list"],[1,"text-3xl","text-cc-subtle/60","font-semibold","mt-20","mx-auto"]],template:function(t,a){t&1&&T(0,Ye,17,26,"div",0)(1,Je,2,0),t&2&&F(0,a.board?0:1)},dependencies:[C,j,Se,ye,Ie,Ee,Ve,W,U,G,R,q,$,Q,K],styles:["#board-content[_ngcontent-%COMP%]::-webkit-scrollbar{height:12px}#board-content[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#0003;border-radius:4px;margin:12px}#board-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#fff6;border-radius:4px}"]});let i=e;return i})();export{xi as default};