(self.webpackChunkforum=self.webpackChunkforum||[]).push([[4144,1281,137],{1281:(D,v,r)=>{r.d(v,{Eq:()=>A,HM:()=>f,Ig:()=>c,fI:()=>g,su:()=>n,t6:()=>h});var d=r(1209);function c(o){return null!=o&&"false"!=`${o}`}function n(o,y=0){return h(o)?Number(o):y}function h(o){return!isNaN(parseFloat(o))&&!isNaN(Number(o))}function A(o){return Array.isArray(o)?o:[o]}function f(o){return null==o?"":"string"==typeof o?o:`${o}px`}function g(o){return o instanceof d.ElementRef?o.nativeElement:o}},3353:(D,v,r)=>{r.d(v,{Mq:()=>m,Oy:()=>P,_i:()=>b,ht:()=>S,i$:()=>E,kV:()=>R,qK:()=>w,sA:()=>F,t4:()=>h});var d=r(1209),c=r(8236);let n;try{n=typeof Intl<"u"&&Intl.v8BreakIterator}catch{n=!1}let f,h=(()=>{class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?(0,c.isPlatformBrowser)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!n)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(d.\u0275\u0275inject(d.PLATFORM_ID))},t.\u0275prov=d.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const g=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function w(){if(f)return f;if("object"!=typeof document||!document)return f=new Set(g),f;let t=document.createElement("input");return f=new Set(g.filter(s=>(t.setAttribute("type",s),t.type===s))),f}let o,u,l,x;function E(t){return function y(){if(null==o&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>o=!0}))}finally{o=o||!1}return o}()?t:!!t.capture}function m(){if(null==l){if("object"!=typeof document||!document||"function"!=typeof Element||!Element)return l=!1,l;if("scrollBehavior"in document.documentElement.style)l=!0;else{const t=Element.prototype.scrollTo;l=!!t&&!/\{\s*\[native code\]\s*\}/.test(t.toString())}}return l}function b(){if("object"!=typeof document||!document)return 0;if(null==u){const t=document.createElement("div"),s=t.style;t.dir="rtl",s.width="1px",s.overflow="auto",s.visibility="hidden",s.pointerEvents="none",s.position="absolute";const e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),u=0,0===t.scrollLeft&&(t.scrollLeft=1,u=0===t.scrollLeft?1:2),t.remove()}return u}function R(t){if(function T(){if(null==x){const t=typeof document<"u"?document.head:null;x=!(!t||!t.createShadowRoot&&!t.attachShadow)}return x}()){const s=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&s instanceof ShadowRoot)return s}return null}function S(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){const s=t.shadowRoot.activeElement;if(s===t)break;t=s}return t}function F(t){return t.composedPath?t.composedPath()[0]:t.target}function P(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}},4144:(D,v,r)=>{r.r(v),r.d(v,{MAT_INPUT_VALUE_ACCESSOR:()=>x,MatInput:()=>F,MatInputModule:()=>P,getMatInputUnsupportedTypeError:()=>b});var d=r(1281),c=r(3353),n=r(1209),h=r(3635);r(5893),r(8236);const g=(0,c.i$)({passive:!0});let w=(()=>{class t{constructor(e,i){this._platform=e,this._ngZone=i,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return h.EMPTY;const i=(0,d.fI)(e),a=this._monitoredElements.get(i);if(a)return a.subject;const _=new h.Subject,p="cdk-text-field-autofilled",I=M=>{"cdk-text-field-autofill-start"!==M.animationName||i.classList.contains(p)?"cdk-text-field-autofill-end"===M.animationName&&i.classList.contains(p)&&(i.classList.remove(p),this._ngZone.run(()=>_.next({target:M.target,isAutofilled:!1}))):(i.classList.add(p),this._ngZone.run(()=>_.next({target:M.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{i.addEventListener("animationstart",I,g),i.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(i,{subject:_,unlisten:()=>{i.removeEventListener("animationstart",I,g)}}),_}stopMonitoring(e){const i=(0,d.fI)(e),a=this._monitoredElements.get(i);a&&(a.unlisten(),a.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275inject(c.t4),n.\u0275\u0275inject(n.NgZone))},t.\u0275prov=n.\u0275\u0275defineInjectable({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),E=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=n.\u0275\u0275defineInjector({}),t})();var u=r(4093),l=r(2054),m=r(4283);function b(t){return Error(`Input type "${t}" isn't supported by matInput.`)}const x=new n.InjectionToken("MAT_INPUT_VALUE_ACCESSOR"),T=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let R=0;const S=(0,l.mixinErrorState)(class{constructor(t,s,e,i){this._defaultErrorStateMatcher=t,this._parentForm=s,this._parentFormGroup=e,this.ngControl=i,this.stateChanges=new h.Subject}});let F=(()=>{class t extends S{get disabled(){return this._disabled}set disabled(e){this._disabled=(0,d.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(u.Validators.required)??!1}set required(e){this._required=(0,d.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,c.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,d.Ig)(e)}constructor(e,i,a,_,p,I,M,L,B,N){super(I,_,p,a),this._elementRef=e,this._platform=i,this._autofillMonitor=L,this._formField=N,this._uid="mat-input-"+R++,this.focused=!1,this.stateChanges=new h.Subject,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(k=>(0,c.qK)().has(k)),this._iOSKeyupListener=k=>{const C=k.target;!C.value&&0===C.selectionStart&&0===C.selectionEnd&&(C.setSelectionRange(1,1),C.setSelectionRange(0,0))};const H=this._elementRef.nativeElement,j=H.nodeName.toLowerCase();this._inputValueAccessor=M||H,this._previousNativeValue=this.value,this.id=this.id,i.IOS&&B.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===j,this._isTextarea="textarea"===j,this._isInFormField=!!N,this._isNativeSelect&&(this.controlType=H.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),null!==this.ngControl.disabled&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){const e=this._getPlaceholder();if(e!==this._previousPlaceholder){const i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){T.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}}return t.\u0275fac=function(e){return new(e||t)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(c.t4),n.\u0275\u0275directiveInject(u.NgControl,10),n.\u0275\u0275directiveInject(u.NgForm,8),n.\u0275\u0275directiveInject(u.FormGroupDirective,8),n.\u0275\u0275directiveInject(l.ErrorStateMatcher),n.\u0275\u0275directiveInject(x,10),n.\u0275\u0275directiveInject(w),n.\u0275\u0275directiveInject(n.NgZone),n.\u0275\u0275directiveInject(m.MAT_FORM_FIELD,8))},t.\u0275dir=n.\u0275\u0275defineDirective({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(e,i){1&e&&n.\u0275\u0275listener("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),2&e&&(n.\u0275\u0275hostProperty("id",i.id)("disabled",i.disabled)("required",i.required),n.\u0275\u0275attribute("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),n.\u0275\u0275classProp("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],features:[n.\u0275\u0275ProvidersFeature([{provide:m.MatFormFieldControl,useExisting:t}]),n.\u0275\u0275InheritDefinitionFeature,n.\u0275\u0275NgOnChangesFeature]}),t})(),P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=n.\u0275\u0275defineInjector({imports:[l.MatCommonModule,m.MatFormFieldModule,m.MatFormFieldModule,E,l.MatCommonModule]}),t})()}}]);