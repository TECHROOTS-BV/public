(self.webpackChunkforum=self.webpackChunkforum||[]).push([[1572,1281],{1281:(S,l,o)=>{o.d(l,{Eq:()=>u,HM:()=>h,Ig:()=>p,fI:()=>y,su:()=>f,t6:()=>s});var r=o(1209);function p(e){return null!=e&&"false"!=`${e}`}function f(e,m=0){return s(e)?Number(e):m}function s(e){return!isNaN(parseFloat(e))&&!isNaN(Number(e))}function u(e){return Array.isArray(e)?e:[e]}function h(e){return null==e?"":"string"==typeof e?e:`${e}px`}function y(e){return e instanceof r.ElementRef?e.nativeElement:e}},1572:(S,l,o)=>{o.r(l),o.d(l,{MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS:()=>e,MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY:()=>m,MatProgressSpinner:()=>_,MatProgressSpinnerModule:()=>k,MatSpinner:()=>g});var r=o(1209),p=o(2054),f=o(2413),s=o(1281),u=o(8236);const h=["determinateSpinner"];function y(t,n){if(1&t&&(r.\u0275\u0275namespaceSVG(),r.\u0275\u0275elementStart(0,"svg",11),r.\u0275\u0275element(1,"circle",12),r.\u0275\u0275elementEnd()),2&t){const i=r.\u0275\u0275nextContext();r.\u0275\u0275attribute("viewBox",i._viewBox()),r.\u0275\u0275advance(1),r.\u0275\u0275styleProp("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeCircumference()/2,"px")("stroke-width",i._circleStrokeWidth(),"%"),r.\u0275\u0275attribute("r",i._circleRadius())}}const b=(0,p.mixinColor)(class{constructor(t){this._elementRef=t}},"primary"),e=new r.InjectionToken("mat-progress-spinner-default-options",{providedIn:"root",factory:m});function m(){return{diameter:d}}const d=100;let _=(()=>{class t extends b{constructor(i,c,a){super(i),this.mode="mat-spinner"===this._elementRef.nativeElement.nodeName.toLowerCase()?"indeterminate":"determinate",this._value=0,this._diameter=d,this._noopAnimations="NoopAnimations"===c&&!!a&&!a._forceAnimations,a&&(a.color&&(this.color=this.defaultColor=a.color),a.diameter&&(this.diameter=a.diameter),a.strokeWidth&&(this.strokeWidth=a.strokeWidth))}get value(){return"determinate"===this.mode?this._value:0}set value(i){this._value=Math.max(0,Math.min(100,(0,s.su)(i)))}get diameter(){return this._diameter}set diameter(i){this._diameter=(0,s.su)(i)}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(i){this._strokeWidth=(0,s.su)(i)}_circleRadius(){return(this.diameter-10)/2}_viewBox(){const i=2*this._circleRadius()+this.strokeWidth;return`0 0 ${i} ${i}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return"determinate"===this.mode?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}}return t.\u0275fac=function(i){return new(i||t)(r.\u0275\u0275directiveInject(r.ElementRef),r.\u0275\u0275directiveInject(f.ANIMATION_MODULE_TYPE,8),r.\u0275\u0275directiveInject(e))},t.\u0275cmp=r.\u0275\u0275defineComponent({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,c){if(1&i&&r.\u0275\u0275viewQuery(h,5),2&i){let a;r.\u0275\u0275queryRefresh(a=r.\u0275\u0275loadQuery())&&(c._determinateCircle=a.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:12,hostBindings:function(i,c){2&i&&(r.\u0275\u0275attribute("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow","determinate"===c.mode?c.value:null)("mode",c.mode),r.\u0275\u0275styleProp("width",c.diameter,"px")("height",c.diameter,"px"),r.\u0275\u0275classProp("_mat-animation-noopable",c._noopAnimations)("mdc-circular-progress--indeterminate","indeterminate"===c.mode))},inputs:{color:"color",mode:"mode",value:"value",diameter:"diameter",strokeWidth:"strokeWidth"},exportAs:["matProgressSpinner"],features:[r.\u0275\u0275InheritDefinitionFeature],decls:14,vars:11,consts:[["circle",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["determinateSpinner",""],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,c){if(1&i&&(r.\u0275\u0275template(0,y,2,8,"ng-template",null,0,r.\u0275\u0275templateRefExtractor),r.\u0275\u0275elementStart(2,"div",1,2),r.\u0275\u0275namespaceSVG(),r.\u0275\u0275elementStart(4,"svg",3),r.\u0275\u0275element(5,"circle",4),r.\u0275\u0275elementEnd()(),r.\u0275\u0275namespaceHTML(),r.\u0275\u0275elementStart(6,"div",5)(7,"div",6)(8,"div",7),r.\u0275\u0275elementContainer(9,8),r.\u0275\u0275elementEnd(),r.\u0275\u0275elementStart(10,"div",9),r.\u0275\u0275elementContainer(11,8),r.\u0275\u0275elementEnd(),r.\u0275\u0275elementStart(12,"div",10),r.\u0275\u0275elementContainer(13,8),r.\u0275\u0275elementEnd()()()),2&i){const a=r.\u0275\u0275reference(1);r.\u0275\u0275advance(4),r.\u0275\u0275attribute("viewBox",c._viewBox()),r.\u0275\u0275advance(1),r.\u0275\u0275styleProp("stroke-dasharray",c._strokeCircumference(),"px")("stroke-dashoffset",c._strokeDashOffset(),"px")("stroke-width",c._circleStrokeWidth(),"%"),r.\u0275\u0275attribute("r",c._circleRadius()),r.\u0275\u0275advance(4),r.\u0275\u0275property("ngTemplateOutlet",a),r.\u0275\u0275advance(2),r.\u0275\u0275property("ngTemplateOutlet",a),r.\u0275\u0275advance(2),r.\u0275\u0275property("ngTemplateOutlet",a)}},dependencies:[u.NgTemplateOutlet],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color, transparent)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0}),t})();const g=_;let k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=r.\u0275\u0275defineInjector({imports:[u.CommonModule,p.MatCommonModule]}),t})()}}]);