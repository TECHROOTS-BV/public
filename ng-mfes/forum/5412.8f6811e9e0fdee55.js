(self.webpackChunkforum=self.webpackChunkforum||[]).push([[5412],{5412:(ve,j,m)=>{m.r(j),m.d(j,{MAT_DIALOG_DATA:()=>U,MAT_DIALOG_DEFAULT_OPTIONS:()=>W,MAT_DIALOG_SCROLL_STRATEGY:()=>E,MAT_DIALOG_SCROLL_STRATEGY_FACTORY:()=>re,MAT_DIALOG_SCROLL_STRATEGY_PROVIDER:()=>Z,MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY:()=>$,MatDialog:()=>A,MatDialogActions:()=>ue,MatDialogClose:()=>ge,MatDialogConfig:()=>v,MatDialogContainer:()=>H,MatDialogContent:()=>_e,MatDialogModule:()=>pe,MatDialogRef:()=>x,MatDialogTitle:()=>he,_MatDialogBase:()=>Q,_MatDialogContainerBase:()=>G,_closeDialogVia:()=>w,_defaultParams:()=>L,matDialogAnimations:()=>fe});var g=m(8184),D=m(8236),a=m(1209),_=m(2693),K=m(2413),T=m(3353),u=m(4080),y=m(9521),h=m(3635),R=m(445),f=m(5893);function q(i,o){}class C{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}}let k=(()=>{class i extends u.en{constructor(e,t,n,s,d,l,c,p){super(),this._elementRef=e,this._focusTrapFactory=t,this._config=s,this._interactivityChecker=d,this._ngZone=l,this._overlayRef=c,this._focusMonitor=p,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this.attachDomPortal=b=>{this._portalOutlet.hasAttached();const J=this._portalOutlet.attachDomPortal(b);return this._contentAttached(),J},this._ariaLabelledBy=this._config.ariaLabelledBy||null,this._document=n}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();const t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const n=()=>{e.removeEventListener("blur",n),e.removeEventListener("mousedown",n),e.removeAttribute("tabindex")};e.addEventListener("blur",n),e.addEventListener("mousedown",n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(){const e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(t=>{t||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus)}}_restoreFocus(){const e=this._config.restoreFocus;let t=null;if("string"==typeof e?t=this._document.querySelector(e):"boolean"==typeof e?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&"function"==typeof t.focus){const n=(0,T.ht)(),s=this._elementRef.nativeElement;(!n||n===this._document.body||n===s||s.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,t=(0,T.ht)();return e===t||e.contains(t)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,T.ht)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}}return i.\u0275fac=function(e){return new(e||i)(a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(_.qV),a.\u0275\u0275directiveInject(D.DOCUMENT,8),a.\u0275\u0275directiveInject(C),a.\u0275\u0275directiveInject(_.ic),a.\u0275\u0275directiveInject(a.NgZone),a.\u0275\u0275directiveInject(g.Iu),a.\u0275\u0275directiveInject(_.tE))},i.\u0275cmp=a.\u0275\u0275defineComponent({type:i,selectors:[["cdk-dialog-container"]],viewQuery:function(e,t){if(1&e&&a.\u0275\u0275viewQuery(u.Pl,7),2&e){let n;a.\u0275\u0275queryRefresh(n=a.\u0275\u0275loadQuery())&&(t._portalOutlet=n.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(e,t){2&e&&a.\u0275\u0275attribute("id",t._config.id||null)("role",t._config.role)("aria-modal",t._config.ariaModal)("aria-labelledby",t._config.ariaLabel?null:t._ariaLabelledBy)("aria-label",t._config.ariaLabel)("aria-describedby",t._config.ariaDescribedBy||null)},features:[a.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(e,t){1&e&&a.\u0275\u0275template(0,q,0,0,"ng-template",0)},dependencies:[u.Pl],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2}),i})();class O{constructor(o,e){this.overlayRef=o,this.config=e,this.closed=new h.Subject,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===y.hY&&!this.disableClose&&!(0,y.Vb)(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=o.detachments().subscribe(()=>{!1!==e.closeOnOverlayDetachments&&this.close()})}close(o,e){if(this.containerInstance){const t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}}const S=new a.InjectionToken("DialogScrollStrategy"),ee=new a.InjectionToken("DialogData"),te=new a.InjectionToken("DefaultDialogConfig"),ae={provide:S,deps:[g.aV],useFactory:function ie(i){return()=>i.scrollStrategies.block()}};let oe=0,F=(()=>{class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(e,t,n,s,d,l){this._overlay=e,this._injector=t,this._defaultOptions=n,this._parentDialog=s,this._overlayContainer=d,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new h.Subject,this._afterOpenedAtThisLevel=new h.Subject,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,h.defer)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,f.startWith)(void 0))),this._scrollStrategy=l}open(e,t){(t={...this._defaultOptions||new C,...t}).id=t.id||"cdk-dialog-"+oe++,t.id&&this.getDialogById(t.id);const s=this._getOverlayConfig(t),d=this._overlay.create(s),l=new O(d,t),c=this._attachContainer(d,l,t);return l.containerInstance=c,this._attachDialogContent(e,l,c,t),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(l),l.closed.subscribe(()=>this._removeOpenDialog(l,!0)),this.afterOpened.next(l),l}closeAll(){I(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){I(this._openDialogsAtThisLevel,e=>{!1===e.config.closeOnDestroy&&this._removeOpenDialog(e,!1)}),I(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){const t=new g.X_({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){const s=n.injector||n.viewContainerRef?.injector,d=[{provide:C,useValue:n},{provide:O,useValue:t},{provide:g.Iu,useValue:e}];let l;n.container?"function"==typeof n.container?l=n.container:(l=n.container.type,d.push(...n.container.providers(n))):l=k;const c=new u.C5(l,n.viewContainerRef,a.Injector.create({parent:s||this._injector,providers:d}),n.componentFactoryResolver);return e.attach(c).instance}_attachDialogContent(e,t,n,s){if(e instanceof a.TemplateRef){const d=this._createInjector(s,t,n,void 0);let l={$implicit:s.data,dialogRef:t};s.templateContext&&(l={...l,..."function"==typeof s.templateContext?s.templateContext():s.templateContext}),n.attachTemplatePortal(new u.UE(e,null,l,d))}else{const d=this._createInjector(s,t,n,this._injector),l=n.attachComponentPortal(new u.C5(e,s.viewContainerRef,d,s.componentFactoryResolver));t.componentInstance=l.instance}}_createInjector(e,t,n,s){const d=e.injector||e.viewContainerRef?.injector,l=[{provide:ee,useValue:e.data},{provide:O,useValue:t}];return e.providers&&("function"==typeof e.providers?l.push(...e.providers(t,e,n)):l.push(...e.providers)),e.direction&&(!d||!d.get(R.Is,null,{optional:!0}))&&l.push({provide:R.Is,useValue:{value:e.direction,change:(0,h.of)()}}),a.Injector.create({parent:d||s,providers:l})}_removeOpenDialog(e,t){const n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((s,d)=>{s?d.setAttribute("aria-hidden",s):d.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const e=this._overlayContainer.getContainerElement();if(e.parentElement){const t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){const s=t[n];s!==e&&"SCRIPT"!==s.nodeName&&"STYLE"!==s.nodeName&&!s.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(s,s.getAttribute("aria-hidden")),s.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}}return i.\u0275fac=function(e){return new(e||i)(a.\u0275\u0275inject(g.aV),a.\u0275\u0275inject(a.Injector),a.\u0275\u0275inject(te,8),a.\u0275\u0275inject(i,12),a.\u0275\u0275inject(g.Xj),a.\u0275\u0275inject(S))},i.\u0275prov=a.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})();function I(i,o){let e=i.length;for(;e--;)o(i[e])}let ne=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=a.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=a.\u0275\u0275defineInjector({providers:[F,ae],imports:[g.U8,u.eL,_.rt,u.eL]}),i})();var P=m(1281),B=m(2054),r=m(372);function se(i,o){}class v{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.maxWidth="80vw",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.delayFocusTrap=!0,this.closeOnNavigation=!0}}const M="mdc-dialog--open",N="mdc-dialog--opening",V="mdc-dialog--closing";let G=(()=>{class i extends k{constructor(e,t,n,s,d,l,c,p){super(e,t,n,s,d,l,c,p),this._animationStateChanged=new a.EventEmitter}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}}return i.\u0275fac=function(e){return new(e||i)(a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(_.qV),a.\u0275\u0275directiveInject(D.DOCUMENT,8),a.\u0275\u0275directiveInject(v),a.\u0275\u0275directiveInject(_.ic),a.\u0275\u0275directiveInject(a.NgZone),a.\u0275\u0275directiveInject(g.Iu),a.\u0275\u0275directiveInject(_.tE))},i.\u0275cmp=a.\u0275\u0275defineComponent({type:i,selectors:[["ng-component"]],features:[a.\u0275\u0275InheritDefinitionFeature],decls:0,vars:0,template:function(e,t){},encapsulation:2}),i})();const z="--mat-dialog-transition-duration";function Y(i){return null==i?null:"number"==typeof i?i:i.endsWith("ms")?(0,P.su)(i.substring(0,i.length-2)):i.endsWith("s")?1e3*(0,P.su)(i.substring(0,i.length-1)):"0"===i?0:null}let H=(()=>{class i extends G{constructor(e,t,n,s,d,l,c,p,b){super(e,t,n,s,d,l,c,b),this._animationMode=p,this._animationsEnabled="NoopAnimations"!==this._animationMode,this._hostElement=this._elementRef.nativeElement,this._openAnimationDuration=this._animationsEnabled?Y(this._config.enterAnimationDuration)??150:0,this._closeAnimationDuration=this._animationsEnabled?Y(this._config.exitAnimationDuration)??75:0,this._animationTimer=null,this._finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._openAnimationDuration)},this._finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._closeAnimationDuration})}}_contentAttached(){super._contentAttached(),this._startOpenAnimation()}ngOnDestroy(){super.ngOnDestroy(),null!==this._animationTimer&&clearTimeout(this._animationTimer)}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._openAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(z,`${this._openAnimationDuration}ms`),this._hostElement.classList.add(N),this._hostElement.classList.add(M),this._waitForAnimationToComplete(this._openAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(M),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._closeAnimationDuration}),this._hostElement.classList.remove(M),this._animationsEnabled?(this._hostElement.style.setProperty(z,`${this._openAnimationDuration}ms`),this._hostElement.classList.add(V),this._waitForAnimationToComplete(this._closeAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_clearAnimationClasses(){this._hostElement.classList.remove(N),this._hostElement.classList.remove(V)}_waitForAnimationToComplete(e,t){null!==this._animationTimer&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}}return i.\u0275fac=function(e){return new(e||i)(a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(_.qV),a.\u0275\u0275directiveInject(D.DOCUMENT,8),a.\u0275\u0275directiveInject(v),a.\u0275\u0275directiveInject(_.ic),a.\u0275\u0275directiveInject(a.NgZone),a.\u0275\u0275directiveInject(g.Iu),a.\u0275\u0275directiveInject(K.ANIMATION_MODULE_TYPE,8),a.\u0275\u0275directiveInject(_.tE))},i.\u0275cmp=a.\u0275\u0275defineComponent({type:i,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:8,hostBindings:function(e,t){2&e&&(a.\u0275\u0275hostProperty("id",t._config.id),a.\u0275\u0275attribute("aria-modal",t._config.ariaModal)("role",t._config.role)("aria-labelledby",t._config.ariaLabel?null:t._ariaLabelledBy)("aria-label",t._config.ariaLabel)("aria-describedby",t._config.ariaDescribedBy||null),a.\u0275\u0275classProp("_mat-animation-noopable",!t._animationsEnabled))},features:[a.\u0275\u0275InheritDefinitionFeature],decls:3,vars:0,consts:[[1,"mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(e,t){1&e&&(a.\u0275\u0275elementStart(0,"div",0)(1,"div",1),a.\u0275\u0275template(2,se,0,0,"ng-template",2),a.\u0275\u0275elementEnd()())},dependencies:[u.Pl],styles:['.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-dialog,.mdc-dialog__scrim{position:fixed;top:0;left:0;align-items:center;justify-content:center;box-sizing:border-box;width:100%;height:100%}.mdc-dialog{display:none;z-index:var(--mdc-dialog-z-index, 7)}.mdc-dialog .mdc-dialog__content{padding:20px 24px 20px 24px}.mdc-dialog .mdc-dialog__surface{min-width:280px}@media(max-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:calc(100vw - 32px)}}@media(min-width: 592px){.mdc-dialog .mdc-dialog__surface{max-width:560px}}.mdc-dialog .mdc-dialog__surface{max-height:calc(100% - 32px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-width:none}@media(max-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px;width:560px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 112px)}}@media(max-width: 720px)and (min-width: 672px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:560px}}@media(max-width: 720px)and (max-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:calc(100vh - 160px)}}@media(max-width: 720px)and (min-height: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{max-height:560px}}@media(max-width: 720px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}@media(max-width: 720px)and (max-height: 400px),(max-width: 600px),(min-width: 720px)and (max-height: 400px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{height:100%;max-height:100vh;max-width:100vw;width:100vw;border-radius:0}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{order:-1;left:-12px}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__header{padding:0 16px 9px;justify-content:flex-start}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__title{margin-left:calc(16px - 2 * 12px)}}@media(min-width: 960px){.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface{width:calc(100vw - 400px)}.mdc-dialog.mdc-dialog--fullscreen .mdc-dialog__surface .mdc-dialog__close{right:-12px}}.mdc-dialog.mdc-dialog__scrim--hidden .mdc-dialog__scrim{opacity:0}.mdc-dialog__scrim{opacity:0;z-index:-1}.mdc-dialog__container{display:flex;flex-direction:row;align-items:center;justify-content:space-around;box-sizing:border-box;height:100%;transform:scale(0.8);opacity:0;pointer-events:none}.mdc-dialog__surface{position:relative;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;box-sizing:border-box;max-width:100%;max-height:100%;pointer-events:auto;overflow-y:auto}.mdc-dialog__surface .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}[dir=rtl] .mdc-dialog__surface,.mdc-dialog__surface[dir=rtl]{text-align:right}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-dialog__surface{outline:2px solid windowText}}.mdc-dialog__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:2px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-dialog__surface::before{border-color:CanvasText}}@media screen and (-ms-high-contrast: active),screen and (-ms-high-contrast: none){.mdc-dialog__surface::before{content:none}}.mdc-dialog__title{display:block;margin-top:0;position:relative;flex-shrink:0;box-sizing:border-box;margin:0 0 1px;padding:0 24px 9px}.mdc-dialog__title::before{display:inline-block;width:0;height:40px;content:"";vertical-align:0}[dir=rtl] .mdc-dialog__title,.mdc-dialog__title[dir=rtl]{text-align:right}.mdc-dialog--scrollable .mdc-dialog__title{margin-bottom:1px;padding-bottom:15px}.mdc-dialog--fullscreen .mdc-dialog__header{align-items:baseline;border-bottom:1px solid rgba(0,0,0,0);display:inline-flex;justify-content:space-between;padding:0 24px 9px;z-index:1}@media screen and (forced-colors: active){.mdc-dialog--fullscreen .mdc-dialog__header{border-bottom-color:CanvasText}}.mdc-dialog--fullscreen .mdc-dialog__header .mdc-dialog__close{right:-12px}.mdc-dialog--fullscreen .mdc-dialog__title{margin-bottom:0;padding:0;border-bottom:0}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__title{border-bottom:0;margin-bottom:0}.mdc-dialog--fullscreen .mdc-dialog__close{top:5px}.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog--fullscreen.mdc-dialog--scrollable .mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--fullscreen--titleless .mdc-dialog__close{margin-top:4px}.mdc-dialog--fullscreen--titleless.mdc-dialog--scrollable .mdc-dialog__close{margin-top:0}.mdc-dialog__content{flex-grow:1;box-sizing:border-box;margin:0;overflow:auto}.mdc-dialog__content>:first-child{margin-top:0}.mdc-dialog__content>:last-child{margin-bottom:0}.mdc-dialog__title+.mdc-dialog__content,.mdc-dialog__header+.mdc-dialog__content{padding-top:0}.mdc-dialog--scrollable .mdc-dialog__title+.mdc-dialog__content{padding-top:8px;padding-bottom:8px}.mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:6px 0 0}.mdc-dialog--scrollable .mdc-dialog__content .mdc-deprecated-list:first-child:last-child{padding:0}.mdc-dialog__actions{display:flex;position:relative;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;box-sizing:border-box;min-height:52px;margin:0;padding:8px;border-top:1px solid rgba(0,0,0,0)}@media screen and (forced-colors: active){.mdc-dialog__actions{border-top-color:CanvasText}}.mdc-dialog--stacked .mdc-dialog__actions{flex-direction:column;align-items:flex-end}.mdc-dialog__button{margin-left:8px;margin-right:0;max-width:100%;text-align:right}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{margin-left:0;margin-right:8px}.mdc-dialog__button:first-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button:first-child,.mdc-dialog__button:first-child[dir=rtl]{margin-left:0;margin-right:0}[dir=rtl] .mdc-dialog__button,.mdc-dialog__button[dir=rtl]{text-align:left}.mdc-dialog--stacked .mdc-dialog__button:not(:first-child){margin-top:12px}.mdc-dialog--open,.mdc-dialog--opening,.mdc-dialog--closing{display:flex}.mdc-dialog--opening .mdc-dialog__scrim{transition:opacity 150ms linear}.mdc-dialog--opening .mdc-dialog__container{transition:opacity 75ms linear,transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-dialog--closing .mdc-dialog__scrim,.mdc-dialog--closing .mdc-dialog__container{transition:opacity 75ms linear}.mdc-dialog--closing .mdc-dialog__container{transform:none}.mdc-dialog--open .mdc-dialog__scrim{opacity:1}.mdc-dialog--open .mdc-dialog__container{transform:none;opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim{opacity:1}.mdc-dialog--open.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{transition:opacity 75ms linear}.mdc-dialog--open.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim{transition:opacity 150ms linear}.mdc-dialog__surface-scrim{display:none;opacity:0;position:absolute;width:100%;height:100%;z-index:1}.mdc-dialog__surface-scrim--shown .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--showing .mdc-dialog__surface-scrim,.mdc-dialog__surface-scrim--hiding .mdc-dialog__surface-scrim{display:block}.mdc-dialog-scroll-lock{overflow:hidden}.mdc-dialog--no-content-padding .mdc-dialog__content{padding:0}.mdc-dialog--sheet .mdc-dialog__close{right:12px;top:9px;position:absolute;z-index:1}.mdc-dialog__scrim--removed{pointer-events:none}.mdc-dialog__scrim--removed .mdc-dialog__scrim,.mdc-dialog__scrim--removed .mdc-dialog__surface-scrim{display:none}.mat-mdc-dialog-content{max-height:65vh}.mat-mdc-dialog-container{position:static;display:block}.mat-mdc-dialog-container,.mat-mdc-dialog-container .mdc-dialog__container,.mat-mdc-dialog-container .mdc-dialog__surface{max-height:inherit;min-height:inherit;min-width:inherit;max-width:inherit}.mat-mdc-dialog-container .mdc-dialog__surface{display:block;width:100%;height:100%}.mat-mdc-dialog-container{outline:0}.mat-mdc-dialog-container .mdc-dialog__surface{background-color:var(--mdc-dialog-container-color, white)}.mat-mdc-dialog-container .mdc-dialog__surface{box-shadow:var(--mdc-dialog-container-elevation, 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12))}.mat-mdc-dialog-container .mdc-dialog__surface{border-radius:var(--mdc-dialog-container-shape, var(--mdc-shape-medium, 4px))}.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__title,.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__actions,.mat-mdc-dialog-container.mdc-dialog--scrollable.mdc-dialog-scroll-divider-footer .mdc-dialog__actions{border-color:var(--mdc-dialog-with-divider-divider-color, black)}.mat-mdc-dialog-container.mdc-dialog--scrollable .mdc-dialog__title{border-bottom-color:var(--mdc-dialog-with-divider-divider-color, black)}.mat-mdc-dialog-container .mdc-dialog__title{font-family:var(--mdc-dialog-subhead-font, "Arial");line-height:var(--mdc-dialog-subhead-line-height, 14px);font-size:var(--mdc-dialog-subhead-size, 14px);font-weight:var(--mdc-dialog-subhead-weight, 500);letter-spacing:var(--mdc-dialog-subhead-tracking, 1px)}.mat-mdc-dialog-container .mdc-dialog__title{color:var(--mdc-dialog-subhead-color, black)}.mat-mdc-dialog-container .mdc-dialog__content{font-family:var(--mdc-dialog-supporting-text-font, "Arial");line-height:var(--mdc-dialog-supporting-text-line-height, 14px);font-size:var(--mdc-dialog-supporting-text-size, 14px);font-weight:var(--mdc-dialog-supporting-text-weight, 500);letter-spacing:var(--mdc-dialog-supporting-text-tracking, 1px)}.mat-mdc-dialog-container .mdc-dialog__content{color:var(--mdc-dialog-supporting-text-color, black)}.mat-mdc-dialog-container .mdc-dialog__container{transition-duration:var(--mat-dialog-transition-duration, 0ms)}.mat-mdc-dialog-container._mat-animation-noopable .mdc-dialog__container{transition:none}.mat-mdc-dialog-content{display:block}.mat-mdc-dialog-actions{justify-content:start}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center,.mat-mdc-dialog-actions[align=center]{justify-content:center}.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end,.mat-mdc-dialog-actions[align=end]{justify-content:flex-end}.mat-mdc-dialog-actions .mat-button-base+.mat-button-base,.mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-mdc-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2}),i})();class x{constructor(o,e,t){this._ref=o,this._containerInstance=t,this._afterOpened=new h.Subject,this._beforeClosed=new h.Subject,this._state=0,this.disableClose=e.disableClose,this.id=o.id,t._animationStateChanged.pipe((0,f.filter)(n=>"opened"===n.state),(0,f.take)(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe((0,f.filter)(n=>"closed"===n.state),(0,f.take)(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),(0,h.merge)(this.backdropClick(),this.keydownEvents().pipe((0,f.filter)(n=>n.keyCode===y.hY&&!this.disableClose&&!(0,y.Vb)(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),w(this,"keydown"===n.type?"keyboard":"mouse"))})}close(o){this._result=o,this._containerInstance._animationStateChanged.pipe((0,f.filter)(e=>"closing"===e.state),(0,f.take)(1)).subscribe(e=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),e.totalTime+100)}),this._state=1,this._containerInstance._startExitAnimation()}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",e=""){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=2,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}}function w(i,o,e){return i._closeInteractionType=o,i.close(e)}const U=new a.InjectionToken("MatMdcDialogData"),W=new a.InjectionToken("mat-mdc-dialog-default-options"),E=new a.InjectionToken("mat-mdc-dialog-scroll-strategy");function $(i){return()=>i.scrollStrategies.block()}const Z={provide:E,deps:[g.aV],useFactory:$};function re(i){return()=>i.scrollStrategies.block()}let ce=0,Q=(()=>{class i{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}constructor(e,t,n,s,d,l,c,p,b,J){this._overlay=e,this._defaultOptions=n,this._parentDialog=s,this._dialogRefConstructor=c,this._dialogContainerType=p,this._dialogDataToken=b,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new h.Subject,this._afterOpenedAtThisLevel=new h.Subject,this._idPrefix="mat-dialog-",this.dialogConfigClass=v,this.afterAllClosed=(0,h.defer)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,f.startWith)(void 0))),this._scrollStrategy=l,this._dialog=t.get(F)}open(e,t){let n;(t={...this._defaultOptions||new v,...t}).id=t.id||`${this._idPrefix}${ce++}`,t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();const s=this._dialog.open(e,{...t,positionStrategy:this._overlay.position().global().centerHorizontally().centerVertically(),disableClose:!0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:C,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(d,l,c)=>(n=new this._dialogRefConstructor(d,t,c),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:c},{provide:this._dialogDataToken,useValue:l.data},{provide:this._dialogRefConstructor,useValue:n}])});return n.componentInstance=s.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{const d=this.openDialogs.indexOf(n);d>-1&&(this.openDialogs.splice(d,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}}return i.\u0275fac=function(e){a.\u0275\u0275invalidFactory()},i.\u0275prov=a.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})(),A=(()=>{class i extends Q{constructor(e,t,n,s,d,l,c,p){super(e,t,s,l,c,d,x,H,U,p),this._idPrefix="mat-mdc-dialog-"}}return i.\u0275fac=function(e){return new(e||i)(a.\u0275\u0275inject(g.aV),a.\u0275\u0275inject(a.Injector),a.\u0275\u0275inject(D.Location,8),a.\u0275\u0275inject(W,8),a.\u0275\u0275inject(E),a.\u0275\u0275inject(i,12),a.\u0275\u0275inject(g.Xj),a.\u0275\u0275inject(a.ANIMATION_MODULE_TYPE,8))},i.\u0275prov=a.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})(),me=0,ge=(()=>{class i{constructor(e,t,n){this.dialogRef=e,this._elementRef=t,this._dialog=n,this.type="button"}ngOnInit(){this.dialogRef||(this.dialogRef=X(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){const t=e._matDialogClose||e._matDialogCloseResult;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){w(this.dialogRef,0===e.screenX&&0===e.screenY?"keyboard":"mouse",this.dialogResult)}}return i.\u0275fac=function(e){return new(e||i)(a.\u0275\u0275directiveInject(x,8),a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(A))},i.\u0275dir=a.\u0275\u0275defineDirective({type:i,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(e,t){1&e&&a.\u0275\u0275listener("click",function(s){return t._onButtonClick(s)}),2&e&&a.\u0275\u0275attribute("aria-label",t.ariaLabel||null)("type",t.type)},inputs:{ariaLabel:["aria-label","ariaLabel"],type:"type",dialogResult:["mat-dialog-close","dialogResult"],_matDialogClose:["matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[a.\u0275\u0275NgOnChangesFeature]}),i})(),he=(()=>{class i{constructor(e,t,n){this._dialogRef=e,this._elementRef=t,this._dialog=n,this.id="mat-mdc-dialog-title-"+me++}ngOnInit(){this._dialogRef||(this._dialogRef=X(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{const e=this._dialogRef._containerInstance;e&&!e._ariaLabelledBy&&(e._ariaLabelledBy=this.id)})}}return i.\u0275fac=function(e){return new(e||i)(a.\u0275\u0275directiveInject(x,8),a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(A))},i.\u0275dir=a.\u0275\u0275defineDirective({type:i,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(e,t){2&e&&a.\u0275\u0275hostProperty("id",t.id)},inputs:{id:"id"},exportAs:["matDialogTitle"]}),i})(),_e=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=a.\u0275\u0275defineDirective({type:i,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"]}),i})(),ue=(()=>{class i{constructor(){this.align="start"}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=a.\u0275\u0275defineDirective({type:i,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:4,hostBindings:function(e,t){2&e&&a.\u0275\u0275classProp("mat-mdc-dialog-actions-align-center","center"===t.align)("mat-mdc-dialog-actions-align-end","end"===t.align)},inputs:{align:"align"}}),i})();function X(i,o){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}let pe=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=a.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=a.\u0275\u0275defineInjector({providers:[A,Z],imports:[ne,g.U8,u.eL,B.MatCommonModule,B.MatCommonModule]}),i})();const L={params:{enterAnimationDuration:"150ms",exitAnimationDuration:"75ms"}},fe={dialogContainer:(0,r.trigger)("dialogContainer",[(0,r.state)("void, exit",(0,r.style)({opacity:0,transform:"scale(0.7)"})),(0,r.state)("enter",(0,r.style)({transform:"none"})),(0,r.transition)("* => enter",(0,r.group)([(0,r.animate)("{{enterAnimationDuration}} cubic-bezier(0, 0, 0.2, 1)",(0,r.style)({transform:"none",opacity:1})),(0,r.query)("@*",(0,r.animateChild)(),{optional:!0})]),L),(0,r.transition)("* => void, * => exit",(0,r.group)([(0,r.animate)("{{exitAnimationDuration}} cubic-bezier(0.4, 0.0, 0.2, 1)",(0,r.style)({opacity:0})),(0,r.query)("@*",(0,r.animateChild)(),{optional:!0})]),L)])}}}]);