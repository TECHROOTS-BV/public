(self.webpackChunkphotogallery=self.webpackChunkphotogallery||[]).push([[592],{9226:(B,O,u)=>{u.r(O),u.d(O,{PhotoGallerySliderComponent:()=>c});var r=u(729),_=u(8236),C=u(7584),a=u(1209);function y(d,g){if(1&d&&(a.\u0275\u0275elementStart(0,"div",5),a.\u0275\u0275element(1,"img",6),a.\u0275\u0275elementEnd()),2&d){const f=g.$implicit;a.\u0275\u0275advance(1),a.\u0275\u0275propertyInterpolate("src",f.url,a.\u0275\u0275sanitizeUrl)}}function s(d,g){if(1&d&&(a.\u0275\u0275elementStart(0,"div",5),a.\u0275\u0275element(1,"img",6),a.\u0275\u0275elementEnd()),2&d){const f=g.$implicit;a.\u0275\u0275advance(1),a.\u0275\u0275propertyInterpolate("src",f.url,a.\u0275\u0275sanitizeUrl)}}let c=/^(179|664)$/.test(u.j)?(()=>{class d{constructor(f){this.httpClient=f,this.slideConfig={slidesToShow:1,slidesToScroll:1,dots:!1,autoplay:!1,autoplaySpeed:2e3,arrows:!1,pauseOnFocus:!1},this.thumbnailConfig={slidesToShow:4,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,focusOnSelect:!0,variableWidth:!0,asNavFor:".carousel",pauseOnFocus:!1},this.remoteHost="https://photogallery-xiosrv3ggq-ew.a.run.app",this.localHost="http://localhost:8080",this.photos=[]}ngOnInit(){this.httpClient.get(this.remoteHost+"/clients/64259add18c9f66c78ffe8e6/photos").subscribe(f=>{this.photos.push(...f)})}}return d.\u0275fac=function(f){return new(f||d)(a.\u0275\u0275directiveInject(r.HttpClient))},d.\u0275cmp=a.\u0275\u0275defineComponent({type:d,selectors:[["ng-mf-photo-gallery-slider"]],standalone:!0,features:[a.\u0275\u0275StandaloneFeature],decls:7,vars:4,consts:[[1,"container","mt-5","pt-5","photogallery"],[1,"carousel",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","","class","slide",4,"ngFor","ngForOf"],[1,"slider-nav-thumbnails",3,"config"],["ngxSlickItem","",1,"slide"],["alt","",3,"src"]],template:function(f,E){1&f&&(a.\u0275\u0275elementStart(0,"div",0)(1,"ngx-slick-carousel",1,2),a.\u0275\u0275template(3,y,2,1,"div",3),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementStart(4,"ngx-slick-carousel",4,2),a.\u0275\u0275template(6,s,2,1,"div",3),a.\u0275\u0275elementEnd()()),2&f&&(a.\u0275\u0275advance(1),a.\u0275\u0275property("config",E.slideConfig),a.\u0275\u0275advance(2),a.\u0275\u0275property("ngForOf",E.photos),a.\u0275\u0275advance(1),a.\u0275\u0275property("config",E.thumbnailConfig),a.\u0275\u0275advance(2),a.\u0275\u0275property("ngForOf",E.photos))},dependencies:[C.SlickCarouselModule,C.SlickCarouselComponent,C.SlickItemDirective,_.NgFor],styles:["@media (max-width: 768px){.photogallery[_ngcontent-%COMP%]{max-height:300px}.carousel[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{height:250px;display:flex;justify-content:center;align-items:center}.carousel[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:250px}}@media (min-width: 768px){.photogallery[_ngcontent-%COMP%]{max-height:700px}.carousel[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{height:700px;display:flex;justify-content:center;align-items:center}.carousel[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:700px;width:auto}}.slider-nav-thumbnails[_ngcontent-%COMP%]{margin-top:10px}.slider-nav-thumbnails[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]{cursor:pointer;outline:none}.slider-nav-thumbnails[_ngcontent-%COMP%]   .slick-slide.slick-current.slick-active[_ngcontent-%COMP%]{opacity:1}.slider-nav-thumbnails[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{padding:5px;background:transparent}.slider-nav-thumbnails[_ngcontent-%COMP%]   .slick-slide.slick-current.slick-active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{background:#000}.slider-nav-thumbnails[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:50px;margin:0 5px}.slider-nav-thumbnails[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]{margin-left:0}.slider-nav-thumbnails[_ngcontent-%COMP%]   .slick-slide[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%]{margin-right:0}"]}),d})():null},4934:(B,O,u)=>{u.r(O),u.d(O,{ANIMATION_MODULE_TYPE:()=>r.ANIMATION_MODULE_TYPE,BrowserAnimationsModule:()=>w,NoopAnimationsModule:()=>j,provideAnimations:()=>S,provideNoopAnimations:()=>F,\u0275AnimationRenderer:()=>f,\u0275AnimationRendererFactory:()=>d,\u0275BrowserAnimationBuilder:()=>M,\u0275BrowserAnimationFactory:()=>a,\u0275InjectableAnimationEngine:()=>b});var r=u(1209),l=u(9451),_=u(372),p=u(1498),C=u(8236);let M=(()=>{class i extends _.AnimationBuilder{constructor(t,n){super(),this._nextAnimationId=0,this._renderer=t.createRenderer(n.body,{id:"0",encapsulation:r.ViewEncapsulation.None,styles:[],data:{animation:[]}})}build(t){const n=this._nextAnimationId.toString();this._nextAnimationId++;const o=Array.isArray(t)?(0,_.sequence)(t):t;return y(this._renderer,null,n,"register",[o]),new a(n,this._renderer)}}return i.\u0275fac=function(t){return new(t||i)(r.\u0275\u0275inject(r.RendererFactory2),r.\u0275\u0275inject(C.DOCUMENT))},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})();class a extends _.AnimationFactory{constructor(e,t){super(),this._id=e,this._renderer=t}create(e,t){return new h(this._id,e,t||{},this._renderer)}}class h{constructor(e,t,n,o){this.id=e,this.element=t,this._renderer=o,this.parentPlayer=null,this._started=!1,this.totalTime=0,this._command("create",n)}_listen(e,t){return this._renderer.listen(this.element,`@@${this.id}:${e}`,t)}_command(e,...t){return y(this._renderer,this.element,this.id,e,t)}onDone(e){this._listen("done",e)}onStart(e){this._listen("start",e)}onDestroy(e){this._listen("destroy",e)}init(){this._command("init")}hasStarted(){return this._started}play(){this._command("play"),this._started=!0}pause(){this._command("pause")}restart(){this._command("restart")}finish(){this._command("finish")}destroy(){this._command("destroy")}reset(){this._command("reset"),this._started=!1}setPosition(e){this._command("setPosition",e)}getPosition(){return this._renderer.engine.players[+this.id]?.getPosition()??0}}function y(i,e,t,n,o){return i.setProperty(e,`@@${t}:${n}`,o)}const s="@",c="@.disabled";let d=(()=>{class i{constructor(t,n,o){this.delegate=t,this.engine=n,this._zone=o,this._currentId=0,this._microtaskId=1,this._animationCallbacksBuffer=[],this._rendererCache=new Map,this._cdRecurDepth=0,this.promise=Promise.resolve(0),n.onRemovalComplete=(m,v)=>{const D=v?.parentNode(m);D&&v.removeChild(D,m)}}createRenderer(t,n){const m=this.delegate.createRenderer(t,n);if(!(t&&n&&n.data&&n.data.animation)){let A=this._rendererCache.get(m);return A||(A=new g("",m,this.engine,()=>this._rendererCache.delete(m)),this._rendererCache.set(m,A)),A}const v=n.id,D=n.id+"-"+this._currentId;this._currentId++,this.engine.register(D,t);const x=A=>{Array.isArray(A)?A.forEach(x):this.engine.registerTrigger(v,D,t,A.name,A)};return n.data.animation.forEach(x),new f(this,D,m,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){this.promise.then(()=>{this._microtaskId++})}scheduleListenerCallback(t,n,o){t>=0&&t<this._microtaskId?this._zone.run(()=>n(o)):(0==this._animationCallbacksBuffer.length&&Promise.resolve(null).then(()=>{this._zone.run(()=>{this._animationCallbacksBuffer.forEach(m=>{const[v,D]=m;v(D)}),this._animationCallbacksBuffer=[]})}),this._animationCallbacksBuffer.push([n,o]))}end(){this._cdRecurDepth--,0==this._cdRecurDepth&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}}return i.\u0275fac=function(t){return new(t||i)(r.\u0275\u0275inject(r.RendererFactory2),r.\u0275\u0275inject(p.\u0275AnimationEngine),r.\u0275\u0275inject(r.NgZone))},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})();class g{constructor(e,t,n,o){this.namespaceId=e,this.delegate=t,this.engine=n,this._onDestroy=o,this.destroyNode=this.delegate.destroyNode?m=>t.destroyNode(m):null}get data(){return this.delegate.data}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.delegate.destroy(),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,n,o=!0){this.delegate.insertBefore(e,t,n),this.engine.onInsert(this.namespaceId,t,e,o)}removeChild(e,t,n){this.engine.onRemove(this.namespaceId,t,this.delegate,n)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,o){this.delegate.setAttribute(e,t,n,o)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,o){this.delegate.setStyle(e,t,n,o)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){t.charAt(0)==s&&t==c?this.disableAnimations(e,!!n):this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n){return this.delegate.listen(e,t,n)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}}class f extends g{constructor(e,t,n,o,m){super(t,n,o,m),this.factory=e,this.namespaceId=t}setProperty(e,t,n){t.charAt(0)==s?"."==t.charAt(1)&&t==c?this.disableAnimations(e,n=void 0===n||!!n):this.engine.process(this.namespaceId,e,t.slice(1),n):this.delegate.setProperty(e,t,n)}listen(e,t,n){if(t.charAt(0)==s){const o=function E(i){switch(i){case"body":return document.body;case"document":return document;case"window":return window;default:return i}}(e);let m=t.slice(1),v="";return m.charAt(0)!=s&&([m,v]=function N(i){const e=i.indexOf(".");return[i.substring(0,e),i.slice(e+1)]}(m)),this.engine.listen(this.namespaceId,o,m,v,D=>{this.factory.scheduleListenerCallback(D._data||-1,n,D)})}return this.delegate.listen(e,t,n)}}let b=(()=>{class i extends p.\u0275AnimationEngine{constructor(t,n,o,m){super(t.body,n,o)}ngOnDestroy(){this.flush()}}return i.\u0275fac=function(t){return new(t||i)(r.\u0275\u0275inject(C.DOCUMENT),r.\u0275\u0275inject(p.AnimationDriver),r.\u0275\u0275inject(p.\u0275AnimationStyleNormalizer),r.\u0275\u0275inject(r.ApplicationRef))},i.\u0275prov=r.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac}),i})();const T=[{provide:_.AnimationBuilder,useClass:M},{provide:p.\u0275AnimationStyleNormalizer,useFactory:function k(){return new p.\u0275WebAnimationsStyleNormalizer}},{provide:p.\u0275AnimationEngine,useClass:b},{provide:r.RendererFactory2,useFactory:function R(i,e,t){return new d(i,e,t)},deps:[l.\u0275DomRendererFactory2,p.\u0275AnimationEngine,r.NgZone]}],I=[{provide:p.AnimationDriver,useFactory:()=>new p.\u0275WebAnimationsDriver},{provide:r.ANIMATION_MODULE_TYPE,useValue:"BrowserAnimations"},...T],P=[{provide:p.AnimationDriver,useClass:p.\u0275NoopAnimationDriver},{provide:r.ANIMATION_MODULE_TYPE,useValue:"NoopAnimations"},...T];let w=(()=>{class i{static withConfig(t){return{ngModule:i,providers:t.disableAnimations?P:I}}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=r.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=r.\u0275\u0275defineInjector({providers:I,imports:[l.BrowserModule]}),i})();function S(){return[...I]}let j=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=r.\u0275\u0275defineNgModule({type:i}),i.\u0275inj=r.\u0275\u0275defineInjector({providers:P,imports:[l.BrowserModule]}),i})();function F(){return[...P]}},9933:(B,O,u)=>{u.r(O),u.d(O,{UntilDestroy:()=>b,untilDestroyed:()=>F});var r=u(3635),l=u(1209),_=u(5893);const p=l.\u0275NG_PIPE_DEF,M=Symbol("__destroy"),a=Symbol("__decoratorApplied");function h(e){return"string"==typeof e?Symbol(`__destroy__${e}`):M}function s(e,t){e[t]||(e[t]=new r.Subject)}function c(e,t){e[t]&&(e[t].next(),e[t].complete(),e[t]=null)}function d(e){e instanceof r.Subscription&&e.unsubscribe()}function f(e,t){return function(){if(e&&e.call(this),c(this,h()),t.arrayName&&function g(e){Array.isArray(e)&&e.forEach(d)}(this[t.arrayName]),t.checkProperties)for(const n in this)t.blackList?.includes(n)||d(this[n])}}function b(e={}){return t=>{!function C(e){return!!e[p]}(t)?function E(e,t){e.prototype.ngOnDestroy=f(e.prototype.ngOnDestroy,t)}(t,e):function N(e,t){const n=e.\u0275pipe;n.onDestroy=f(n.onDestroy,t)}(t,e),function y(e){e.prototype[a]=!0}(t)}}const k=7,R=Symbol("CheckerHasBeenSet");function P(e){const t=l.\u0275global.Zone;return t&&"function"==typeof t.root?.run?t.root.run(e):e()}const S=!1;function F(e,t){return n=>{const o=h(t);"string"==typeof t?function j(e,t,n){const o=e[t];if(S&&"function"!=typeof o)throw new Error(`${e.constructor.name} is using untilDestroyed but doesn't implement ${t}`);s(e,n),e[t]=function(){o.apply(this,arguments),c(this,n),e[t]=o}}(e,t,o):(S&&function i(e){const t=Object.getPrototypeOf(e);if(!(a in t))throw new Error("untilDestroyed operator cannot be used inside directives or components or providers that are not decorated with UntilDestroy decorator")}(e),s(e,o));const m=e[o];return S&&function T(e,t){e[R]||function I(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha||typeof process<"u"&&"[object process]"===Object.prototype.toString.call(process)}()||(P(()=>(0,r.from)(Promise.resolve()).pipe((0,_.mergeMap)(()=>{let n;try{n=(0,l.\u0275getLContext)(e)}catch{n=null}const o=n?.lView;if(null==o)return r.EMPTY;const m=o[k]||(o[k]=[]),v=new r.Subject;return m.push(function(){P(()=>{v.next(),v.complete()})}),v}),(0,_.mergeMap)(()=>Promise.resolve())).subscribe(()=>{(t.observed??t.observers.length>0)&&console.warn(function w(e){return`\n  The ${e.constructor.name} still has subscriptions that haven't been unsubscribed.\n  This may happen if the class extends another class decorated with @UntilDestroy().\n  The child class implements its own ngOnDestroy() method but doesn't call super.ngOnDestroy().\n  Let's look at the following example:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {}\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n    }\n  }\n  The BaseDirective.ngOnDestroy() will not be called since Angular will call ngOnDestroy()\n  on the ConcreteComponent, but not on the BaseDirective.\n  One of the solutions is to declare an empty ngOnDestroy method on the BaseDirective:\n  @UntilDestroy()\n  @Directive()\n  export abstract class BaseDirective {\n    ngOnDestroy(): void {}\n  }\n  @Component({ template: '' })\n  export class ConcreteComponent extends BaseDirective implements OnDestroy {\n    constructor() {\n      super();\n      someObservable$.pipe(untilDestroyed(this)).subscribe();\n    }\n    ngOnDestroy(): void {\n      // Some logic here...\n      super.ngOnDestroy();\n    }\n  }\n  `}(e))})),e[R]=!0)}(e,m),n.pipe((0,_.takeUntil)(m))}}},6594:(B,O,u)=>{u.r(O),u.d(O,{SlickCarouselComponent:()=>C,SlickCarouselModule:()=>a,SlickItemDirective:()=>M});var r=u(8236),l=u(1209),_=u(4093);const p=["*"];let C=(()=>{class h{constructor(s,c,d){this.el=s,this.zone=c,this.platformId=d,this.afterChange=new l.EventEmitter,this.beforeChange=new l.EventEmitter,this.breakpoint=new l.EventEmitter,this.destroy=new l.EventEmitter,this.init=new l.EventEmitter,this.currentIndex=0,this.slides=[],this.initialized=!1,this._removedSlides=[],this._addedSlides=[]}ngOnDestroy(){this.unslick()}ngAfterViewInit(){this.ngAfterViewChecked()}ngAfterViewChecked(){if(!(0,r.isPlatformServer)(this.platformId)&&(this._addedSlides.length>0||this._removedSlides.length>0)){const s=this.slides.length-this._removedSlides.length+this._addedSlides.length;this.initialized?0===s?this.unslick():(this._addedSlides.forEach(c=>{this.slides.push(c),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickAdd",c.el.nativeElement)})}),this._addedSlides=[],this._removedSlides.forEach(c=>{const d=this.slides.indexOf(c);this.slides=this.slides.filter(g=>g!==c),this.zone.runOutsideAngular(()=>{this.$instance.slick("slickRemove",d)})}),this._removedSlides=[]):s>0&&this.initSlick()}}initSlick(){this.slides=this._addedSlides,this._addedSlides=[],this._removedSlides=[],this.zone.runOutsideAngular(()=>{this.$instance=jQuery(this.el.nativeElement),this.$instance.on("init",(s,c)=>{this.zone.run(()=>{this.init.emit({event:s,slick:c})})}),this.$instance.slick(this.config),this.zone.run(()=>{this.initialized=!0,this.currentIndex=this.config?.initialSlide||0}),this.$instance.on("afterChange",(s,c,d)=>{this.zone.run(()=>{this.afterChange.emit({event:s,slick:c,currentSlide:d,first:0===d,last:c.$slides.length===d+c.options.slidesToScroll}),this.currentIndex=d})}),this.$instance.on("beforeChange",(s,c,d,g)=>{this.zone.run(()=>{this.beforeChange.emit({event:s,slick:c,currentSlide:d,nextSlide:g}),this.currentIndex=g})}),this.$instance.on("breakpoint",(s,c,d)=>{this.zone.run(()=>{this.breakpoint.emit({event:s,slick:c,breakpoint:d})})}),this.$instance.on("destroy",(s,c)=>{this.zone.run(()=>{this.destroy.emit({event:s,slick:c}),this.initialized=!1})})})}addSlide(s){this._addedSlides.push(s)}removeSlide(s){this._removedSlides.push(s)}slickGoTo(s){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickGoTo",s)})}slickNext(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickNext")})}slickPrev(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPrev")})}slickPause(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPause")})}slickPlay(){this.zone.runOutsideAngular(()=>{this.$instance.slick("slickPlay")})}unslick(){this.$instance&&(this.zone.runOutsideAngular(()=>{this.$instance.slick("unslick")}),this.$instance=void 0),this.initialized=!1}ngOnChanges(s){if(this.initialized){const c=s.config;if(c.previousValue!==c.currentValue&&void 0!==c.currentValue){const d=c.currentValue.refresh,g=Object.assign({},c.currentValue);delete g.refresh,this.zone.runOutsideAngular(()=>{this.$instance.slick("slickSetOption",g,d)})}}}}return h.\u0275fac=function(s){return new(s||h)(l.\u0275\u0275directiveInject(l.ElementRef),l.\u0275\u0275directiveInject(l.NgZone),l.\u0275\u0275directiveInject(l.PLATFORM_ID))},h.\u0275cmp=l.\u0275\u0275defineComponent({type:h,selectors:[["ngx-slick-carousel"]],inputs:{config:"config"},outputs:{afterChange:"afterChange",beforeChange:"beforeChange",breakpoint:"breakpoint",destroy:"destroy",init:"init"},exportAs:["slick-carousel"],features:[l.\u0275\u0275ProvidersFeature([{provide:_.NG_VALUE_ACCESSOR,useExisting:(0,l.forwardRef)(()=>h),multi:!0}]),l.\u0275\u0275NgOnChangesFeature],ngContentSelectors:p,decls:1,vars:0,template:function(s,c){1&s&&(l.\u0275\u0275projectionDef(),l.\u0275\u0275projection(0))},encapsulation:2}),h})(),M=(()=>{class h{constructor(s,c,d,g){this.el=s,this.renderer=c,this.platformId=d,this.carousel=g}ngOnInit(){this.carousel.addSlide(this),(0,r.isPlatformServer)(this.platformId)&&this.carousel.slides.length>0&&this.renderer.setStyle(this.el,"display","none")}ngOnDestroy(){this.carousel.removeSlide(this)}}return h.\u0275fac=function(s){return new(s||h)(l.\u0275\u0275directiveInject(l.ElementRef),l.\u0275\u0275directiveInject(l.Renderer2),l.\u0275\u0275directiveInject(l.PLATFORM_ID),l.\u0275\u0275directiveInject(C,1))},h.\u0275dir=l.\u0275\u0275defineDirective({type:h,selectors:[["","ngxSlickItem",""]]}),h})(),a=(()=>{class h{}return h.\u0275fac=function(s){return new(s||h)},h.\u0275mod=l.\u0275\u0275defineNgModule({type:h}),h.\u0275inj=l.\u0275\u0275defineInjector({imports:[r.CommonModule]}),h})()}}]);