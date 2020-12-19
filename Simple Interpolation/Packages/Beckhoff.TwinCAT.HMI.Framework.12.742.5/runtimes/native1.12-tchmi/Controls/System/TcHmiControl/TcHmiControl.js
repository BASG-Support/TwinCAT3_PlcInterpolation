var TcHmi;!function(e){let t;!function(t){let r;!function(t){class r extends e.Controls.System.baseTcHmiControl{
/**
                 * Constructor of the control
                 * @constructor
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 * @preserve (Part of the public API)
                 */
constructor(element,t,r){super(element,t,r),this.__resourcesDomEventRegWatchOnMouseRightClick=null,this.__resourcesDomEventRegWatchOnMouseDoubleClick=null,this.__resourcesDomEventRegWatchOnMouseEnter=null,this.__resourcesDomEventRegWatchOnMouseMove=null,this.__resourcesDomEventRegWatchOnMouseOut=null,this.__resourcesDomEventRegWatchOnMouseLeave=null,this.__resourcesDomEventRegWatchOnMouseDown=null,this.__resourcesDomEventRegWatchOnMouseUp=null,this.__resourcesDomEventRegWatchOnMouseOver=null,this.__resourcesDomEventRegWatchOnMouseClick=null,this.__resourcesDomEventRegWatchOnMouseWheel=null,this.__resourcesDomEventRegWatchOnTouchStart=null,this.__resourcesDomEventRegWatchOnTouchMove=null,this.__resourcesDomEventRegWatchOnTouchEnd=null,this.__resourcesDomEventRegWatchOnTouchCancel=null,this.__resourcesEventRegWatchOnPressed=null,this.__resourcesEventRegWatchOnMouseDownLeft=null,this.__resourcesEventRegWatchOnMouseDownRight=null,this.__resourcesEventRegWatchOnMouseUpLeft=null,this.__resourcesEventRegWatchOnMouseUpRight=null,this.__destroyDomEventRegWatchOnMouseRightClick=null,this.__destroyDomEventRegWatchOnMouseDoubleClick=null,this.__destroyDomEventRegWatchOnMouseEnter=null,this.__destroyDomEventRegWatchOnMouseMove=null,this.__destroyDomEventRegWatchOnMouseOut=null,this.__destroyDomEventRegWatchOnMouseLeave=null,this.__destroyDomEventRegWatchOnMouseDown=null,this.__destroyDomEventRegWatchOnMouseUp=null,this.__destroyDomEventRegWatchOnMouseOver=null,this.__destroyDomEventRegWatchOnMouseClick=null,this.__destroyDomEventRegWatchOnMouseWheel=null,this.__destroyDomEventRegWatchOnTouchStart=null,this.__destroyDomEventRegWatchOnTouchMove=null,this.__destroyDomEventRegWatchOnTouchEnd=null,this.__destroyDomEventRegWatchOnTouchCancel=null,this.__destroyEvenRegWatchOnPressed=null,this.__destroyEvenRegWatchOnMouseDownLeft=null,this.__destroyEvenRegWatchOnMouseDownRight=null,this.__destroyEvenRegWatchOnMouseUpLeft=null,this.__destroyEvenRegWatchOnMouseUpRight=null,this.__destroyOnFunctionResultChanged=null,this.__destroyOnPropertyChanged=null,this.__objectResolvers=new Map,this.__intHeight=null,this.__triggerNonAttachList=[],this.__triggerAttachList=[],this.__background={},this.__accessAndEnableState={enabled:void 0,observeDisallowed:!1,operateDisallowed:!1},this.__asyncWorkAnimationFrameId=0,this.__asyncWorkData={"System.TcHmiControl.layoutData":{},"System.TcHmiControl.changedProperties":new Map},this.__renderedSizeCache={left:null,top:null,right:null,bottom:null,width:null,height:null},this.__onResolverForClassNamesWatchCallback=data=>{if(!1===this.__isAttached&&this.__suspendObjectResolver("classNames"),data.error!==e.Errors.NONE)return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=ClassNames] Resolving symbols from object failed with error: "+e.Log.buildMessage(data.details)));if(!data.value)return;for(let e=0;e<data.value.length;e++)if("string"!=typeof data.value[e])return;if(tchmi_equal(data.value,this.__classNames))return;const t=this.__classNames;this.__classNames=data.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ClassNames"}),e.EventProvider.raise("System.onControlClassNamesChanged",{control:this,oldClassNames:t,newClassName:data.value}),this.__processClassNames()},this.__onResolverForAccessConfigWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("accessConfig"),data.error===e.Errors.NONE?data.value&&(tchmi_equal(data.value,this.__accessConfig)||(this.__accessConfig=data.value,e.EventProvider.raise("System.AccessConfigChanged",this),e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"AccessConfig"}),this.__processAccessConfig())):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=AccessConfig] Resolving symbols from object failed with error: "+e.Log.buildMessage(data.details))},this.__onResolverForVirtualControlRightMappingsWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("virtualControlRightMappings"),data.error===e.Errors.NONE?data.value&&(tchmi_equal(data.value,this.__virtualControlRightMappings)||(this.__virtualControlRightMappings=data.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"VirtualControlRightMappings"}),this.__processVirtualControlRightMappings())):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=VirtualControlRightMappings] Resolving symbols from object failed with error: "+e.Log.buildMessage(data.details))},this.__onResolverForTransformWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("transform"),data.error===e.Errors.NONE?tchmi_equal(data.value,this.__transform)||(this.__transform=data.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Transform"}),this.__processTransform()):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=Transform] Resolving symbols from object failed with error: "+e.Log.buildMessage(data.details))},this.__onResolverForBackgroundColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("backgroundColor"),data.error===e.Errors.NONE?tchmi_equal(data.value,this.__background.color)||(this.__background.color=data.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BackgroundColor"}),this.__processBackgroundColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=BackgroundColor] Resolving symbols from object failed with error: "+e.Log.buildMessage(data.details))},this.__onResolverForBackgroundImagePaddingWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("backgroundImagePadding"),data.error===e.Errors.NONE?tchmi_equal(data.value,this.__background.imagePadding)||(this.__background.imagePadding=data.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BackgroundImagePadding"}),this.__processBackgroundImagePadding()):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=BackgroundImagePadding] Resolving symbols from object failed with error: "+e.Log.buildMessage(data.details))},this.__onResolverForBorderColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("borderColor"),data.error===e.Errors.NONE?tchmi_equal(data.value,this.__borderColor)||(this.__borderColor=data.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BorderColor"}),this.__processBorderColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=BorderColor] Resolving symbols from object failed with error: "+e.Log.buildMessage(data.details))},this.__onResolverForBorderWidthWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("borderWidth"),data.error===e.Errors.NONE?tchmi_equal(data.value,this.__borderWidth)||(this.__borderWidth=data.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BorderWidth"}),this.__processBorderWidth(),"Content"===this.getWidthMode()&&this.__processWidth(),"Content"===this.getHeightMode()&&this.__processHeight(),e.EventProvider.raise(this.__id+".onResized",this)):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=BorderWidth] Resolving symbols from object failed with error: "+e.Log.buildMessage(data.details))},this.__onResolverForBorderRadiusWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("borderRadius"),data.error===e.Errors.NONE?tchmi_equal(data.value,this.__borderRadius)||(this.__borderRadius=data.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BorderRadius"}),this.__processBorderRadius()):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=BorderRadius] Resolving symbols from object failed with error: "+e.Log.buildMessage(data.details))},this.__onResolverForBorderStyleWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("borderStyle"),data.error===e.Errors.NONE?tchmi_equal(data.value,this.__borderStyle)||(this.__borderStyle=data.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BorderStyle"}),this.__processBorderStyle(),"Content"===this.getWidthMode()&&this.__processWidth(),"Content"===this.getHeightMode()&&this.__processHeight(),e.EventProvider.raise(this.__id+".onResized",this)):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=BorderStyle] Resolving symbols from object failed with error: "+e.Log.buildMessage(data.details))},this.__onResolverForBoxShadowWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("boxShadow"),data.error===e.Errors.NONE?tchmi_equal(data.value,this.__boxShadow)||(this.__boxShadow=data.value,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BoxShadow"}),this.__processBoxShadow()):TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=BoxShadow] Resolving symbols from object failed with error: "+e.Log.buildMessage(data.details))},this.__element=element,this.__attrs=r,this.__pcElement=t,this.__parent=null,this.__children=[];let s=r["data-tchmi-type"].value,o=e.System.Data.Modules.controls.map.get(s);if(!o)throw new Error("Unknown control type: '"+s+"'.");if(o.error!==e.Errors.NONE)throw new Error("Control type: '"+s+"' module contains errors: "+e.Log.buildMessage(o.errorDetails));let n=o.description;if(!n)throw new Error("Control type: '"+s+"' module contains no description.");this.__type=e.System.resolveQualifiedName(n.name,n.namespace),this.version=n.version,this.__id=r.id.value,this.__isDestroyed=!1,this.__isAttached=!1,this.__attributesInitialized=!1,this.__isContainerControl=!1,this.__keepAlive=!1,this.__accessConfig=[],this.__virtualControlRightMappings=[];const i=e.System.Services.controlManager.getDescriptionTypes(this.__type);this.__element[0].className+=" tchmi-box "+i.join(" ").replace(/\./g,"_"),this.__destroyOnFunctionResultChanged=e.EventProvider.register(this.__id+".onFunctionResultChanged",this.__onFunctionResultChanged()),this.__destroyOnPropertyChanged=e.EventProvider.register(this.__id+".onPropertyChanged",this.__onPropertyChanged())}__setLifeCycleState(e){switch(e){case 15:this.__attributesInitialized=!0;break;case 30:this.__isAttached=!0;break;case 40:this.__isAttached=!1}}
/**
                 * Is raised before control attribute setters are called to allow initialization based on current attribute values.
                 * @preserve (Part of the public API)
                 */__previnit(){}
/**
                * Is raised after control attribute setters have been called to allow initialization based on current attribute values.
                * @preserve (Part of the public API)
                */__init(){0===this.__accessConfig.length&&this.__processAccessConfig(),this.__processAllBackground();let t=this;const r={passive:!1,capture:!1};t.__destroyDomEventRegWatchOnMouseRightClick=e.EventProvider.watchEventRegistration(this.getId()+".onMouseRightClick",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"contextmenu",listener:t.__onElementMouseRightClick.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!(!data.event.options||!data.event.options.capture)&&data.event.options.capture}};t.__resourcesDomEventRegWatchOnMouseRightClick||(t.__resourcesDomEventRegWatchOnMouseRightClick=new Map),t.__resourcesDomEventRegWatchOnMouseRightClick.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnMouseRightClick)break;let e=t.__resourcesDomEventRegWatchOnMouseRightClick.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnMouseRightClick.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnMouseDoubleClick=e.EventProvider.watchEventRegistration(this.getId()+".onMouseDoubleClick",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"dblclick",listener:t.__onElementMouseDoubleClick.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!(!data.event.options||!data.event.options.capture)&&data.event.options.capture}};t.__resourcesDomEventRegWatchOnMouseDoubleClick||(t.__resourcesDomEventRegWatchOnMouseDoubleClick=new Map),t.__resourcesDomEventRegWatchOnMouseDoubleClick.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnMouseDoubleClick)break;let e=t.__resourcesDomEventRegWatchOnMouseDoubleClick.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnMouseDoubleClick.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnMouseEnter=e.EventProvider.watchEventRegistration(this.getId()+".onMouseEnter",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"mouseenter",listener:t.__onElementMouseEnter.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!(!data.event.options||!data.event.options.capture)&&data.event.options.capture}};t.__resourcesDomEventRegWatchOnMouseEnter||(t.__resourcesDomEventRegWatchOnMouseEnter=new Map),t.__resourcesDomEventRegWatchOnMouseEnter.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnMouseEnter)break;let e=t.__resourcesDomEventRegWatchOnMouseEnter.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnMouseEnter.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnMouseMove=e.EventProvider.watchEventRegistration(this.getId()+".onMouseMove",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"mousemove",listener:t.__onElementMouseMove.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!(!data.event.options||!data.event.options.capture)&&data.event.options.capture}};t.__resourcesDomEventRegWatchOnMouseMove||(t.__resourcesDomEventRegWatchOnMouseMove=new Map),t.__resourcesDomEventRegWatchOnMouseMove.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnMouseMove)break;let e=t.__resourcesDomEventRegWatchOnMouseMove.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnMouseMove.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnMouseOut=e.EventProvider.watchEventRegistration(this.getId()+".onMouseOut",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"mouseout",listener:t.__onElementMouseOut.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!(!data.event.options||!data.event.options.capture)&&data.event.options.capture}};t.__resourcesDomEventRegWatchOnMouseOut||(t.__resourcesDomEventRegWatchOnMouseOut=new Map),t.__resourcesDomEventRegWatchOnMouseOut.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnMouseOut)break;let e=t.__resourcesDomEventRegWatchOnMouseOut.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnMouseOut.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnMouseLeave=e.EventProvider.watchEventRegistration(this.getId()+".onMouseLeave",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"mouseleave",listener:t.__onElementMouseLeave.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!(!data.event.options||!data.event.options.capture)&&data.event.options.capture}};t.__resourcesDomEventRegWatchOnMouseLeave||(t.__resourcesDomEventRegWatchOnMouseLeave=new Map),t.__resourcesDomEventRegWatchOnMouseLeave.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnMouseLeave)break;let e=t.__resourcesDomEventRegWatchOnMouseLeave.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnMouseLeave.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnMouseDown=e.EventProvider.watchEventRegistration(this.getId()+".onMouseDown",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"mousedown",listener:t.__onElementMouseDown.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!(!data.event.options||!data.event.options.capture)&&data.event.options.capture}};t.__resourcesDomEventRegWatchOnMouseDown||(t.__resourcesDomEventRegWatchOnMouseDown=new Map),t.__resourcesDomEventRegWatchOnMouseDown.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnMouseDown)break;let e=t.__resourcesDomEventRegWatchOnMouseDown.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnMouseDown.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnMouseUp=e.EventProvider.watchEventRegistration(this.getId()+".onMouseUp",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"mouseup",listener:t.__onElementMouseUp.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!(!data.event.options||!data.event.options.capture)&&data.event.options.capture}};t.__resourcesDomEventRegWatchOnMouseUp||(t.__resourcesDomEventRegWatchOnMouseUp=new Map),t.__resourcesDomEventRegWatchOnMouseUp.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnMouseUp)break;let e=t.__resourcesDomEventRegWatchOnMouseUp.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnMouseUp.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnMouseOver=e.EventProvider.watchEventRegistration(this.getId()+".onMouseOver",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"mouseover",listener:t.__onElementMouseOver.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!(!data.event.options||!data.event.options.capture)&&data.event.options.capture}};t.__resourcesDomEventRegWatchOnMouseOver||(t.__resourcesDomEventRegWatchOnMouseOver=new Map),t.__resourcesDomEventRegWatchOnMouseOver.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnMouseOver)break;let e=t.__resourcesDomEventRegWatchOnMouseOver.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnMouseOver.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnMouseClick=e.EventProvider.watchEventRegistration(this.getId()+".onMouseClick",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"click",listener:t.__onElementMouseClick.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!(!data.event.options||!data.event.options.capture)&&data.event.options.capture}};t.__resourcesDomEventRegWatchOnMouseClick||(t.__resourcesDomEventRegWatchOnMouseClick=new Map),t.__resourcesDomEventRegWatchOnMouseClick.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnMouseClick)break;let e=t.__resourcesDomEventRegWatchOnMouseClick.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnMouseClick.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnMouseWheel=e.EventProvider.watchEventRegistration(this.getId()+".onMouseWheel",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"wheel",listener:t.__onElementMouseWheel.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!data.event.options||!data.event.options.capture||data.event.options.capture}};t.__resourcesDomEventRegWatchOnMouseWheel||(t.__resourcesDomEventRegWatchOnMouseWheel=new Map),t.__resourcesDomEventRegWatchOnMouseWheel.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnMouseWheel)break;let e=t.__resourcesDomEventRegWatchOnMouseWheel.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnMouseWheel.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnTouchStart=e.EventProvider.watchEventRegistration(this.getId()+".onTouchStart",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"touchstart",listener:t.__onElementTouchStart.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!data.event.options||!data.event.options.capture||data.event.options.capture}};t.__resourcesDomEventRegWatchOnTouchStart||(t.__resourcesDomEventRegWatchOnTouchStart=new Map),t.__resourcesDomEventRegWatchOnTouchStart.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnTouchStart)break;let e=t.__resourcesDomEventRegWatchOnTouchStart.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnTouchStart.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnTouchMove=e.EventProvider.watchEventRegistration(this.getId()+".onTouchMove",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"touchmove",listener:t.__onElementTouchMove.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!data.event.options||!data.event.options.capture||data.event.options.capture}};t.__resourcesDomEventRegWatchOnTouchMove||(t.__resourcesDomEventRegWatchOnTouchMove=new Map),t.__resourcesDomEventRegWatchOnTouchMove.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnTouchMove)break;let e=t.__resourcesDomEventRegWatchOnTouchMove.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnTouchMove.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnTouchEnd=e.EventProvider.watchEventRegistration(this.getId()+".onTouchEnd",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"touchend",listener:t.__onElementTouchEnd.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!data.event.options||!data.event.options.capture||data.event.options.capture}};t.__resourcesDomEventRegWatchOnTouchEnd||(t.__resourcesDomEventRegWatchOnTouchEnd=new Map),t.__resourcesDomEventRegWatchOnTouchEnd.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnTouchEnd)break;let e=t.__resourcesDomEventRegWatchOnTouchEnd.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnTouchEnd.delete(data.event.id)}}}})),t.__destroyDomEventRegWatchOnTouchCancel=e.EventProvider.watchEventRegistration(this.getId()+".onTouchCancel",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let e={event:data.event,domEventListener:{eventName:"touchcancel",listener:t.__onElementTouchCancel.call(t,data.event),options:TCHMI_EVENT_OPTION_OBJECT_SUPPORTED?data.event.options?data.event.options:r:!data.event.options||!data.event.options.capture||data.event.options.capture}};t.__resourcesDomEventRegWatchOnTouchCancel||(t.__resourcesDomEventRegWatchOnTouchCancel=new Map),t.__resourcesDomEventRegWatchOnTouchCancel.set(data.event.id,e);let s=e.domEventListener;t.getElement()[0].addEventListener(s.eventName,s.listener,s.options)}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesDomEventRegWatchOnTouchCancel)break;let e=t.__resourcesDomEventRegWatchOnTouchCancel.get(data.event.id);if(e){let r=e.domEventListener;r&&t.getElement()[0].removeEventListener(r.eventName,r.listener,r.options),t.__resourcesDomEventRegWatchOnTouchCancel.delete(data.event.id)}}}})),t.__destroyEvenRegWatchOnPressed=e.EventProvider.watchEventRegistration(this.getId()+".onPressed",(function(data){if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:{let r=null;r=e.EventProvider.register(t.getId()+".onMouseClick",(function(t,r){e.EventProvider.raiseEx(data.event)}),data.event.options);let s=()=>{r&&(r(),r=null)};t.__resourcesEventRegWatchOnPressed||(t.__resourcesEventRegWatchOnPressed=new Map),t.__resourcesEventRegWatchOnPressed.set(data.event.id,{event:data.event,destroy:s})}break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesEventRegWatchOnPressed)return;let e=t.__resourcesEventRegWatchOnPressed.get(data.event.id);e&&e.destroy&&(e.destroy(),t.__resourcesEventRegWatchOnPressed.delete(data.event.id))}}})),t.__destroyEvenRegWatchOnMouseDownLeft=e.EventProvider.watchEventRegistration(t.getId()+".onMouseDownLeft",(function(data){let r=null;if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:r=e.EventProvider.register(t.getId()+".onMouseDown",(function(t,r){1===r.which&&e.EventProvider.raiseEx(data.event,r)}),data.event.options),t.__resourcesEventRegWatchOnMouseDownLeft||(t.__resourcesEventRegWatchOnMouseDownLeft=new Map),t.__resourcesEventRegWatchOnMouseDownLeft.set(data.event.id,{event:data.event,destroy:r});break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesEventRegWatchOnMouseDownLeft)return;let e=t.__resourcesEventRegWatchOnMouseDownLeft.get(data.event.id);e&&e.destroy&&(e.destroy(),t.__resourcesEventRegWatchOnMouseDownLeft.delete(data.event.id))}}})),t.__destroyEvenRegWatchOnMouseDownRight=e.EventProvider.watchEventRegistration(t.getId()+".onMouseDownRight",(function(data){let r=null;if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:r=e.EventProvider.register(t.getId()+".onMouseDown",(function(t,r){3===r.which&&e.EventProvider.raiseEx(data.event,r)}),data.event.options),t.__resourcesEventRegWatchOnMouseDownRight||(t.__resourcesEventRegWatchOnMouseDownRight=new Map),t.__resourcesEventRegWatchOnMouseDownRight.set(data.event.id,{event:data.event,destroy:r});break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesEventRegWatchOnMouseDownRight)return;let e=t.__resourcesEventRegWatchOnMouseDownRight.get(data.event.id);e&&e.destroy&&(e.destroy(),t.__resourcesEventRegWatchOnMouseDownRight.delete(data.event.id))}}})),t.__destroyEvenRegWatchOnMouseUpLeft=e.EventProvider.watchEventRegistration(t.getId()+".onMouseUpLeft",(function(data){let r=null;if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:r=e.EventProvider.register(t.getId()+".onMouseUp",(function(t,r){1===r.which&&e.EventProvider.raiseEx(data.event,r)}),data.event.options),t.__resourcesEventRegWatchOnMouseUpLeft||(t.__resourcesEventRegWatchOnMouseUpLeft=new Map),t.__resourcesEventRegWatchOnMouseUpLeft.set(data.event.id,{event:data.event,destroy:r});break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesEventRegWatchOnMouseUpLeft)return;let e=t.__resourcesEventRegWatchOnMouseUpLeft.get(data.event.id);e&&e.destroy&&(e.destroy(),t.__resourcesEventRegWatchOnMouseUpLeft.delete(data.event.id))}}})),t.__destroyEvenRegWatchOnMouseUpRight=e.EventProvider.watchEventRegistration(t.getId()+".onMouseUpRight",(function(data){let r=null;if(data.error===e.Errors.NONE)switch(data.type){case e.EventProvider.EventRegWatchType.REGISTER:r=e.EventProvider.register(t.getId()+".onMouseUp",(function(t,r){3===r.which&&e.EventProvider.raiseEx(data.event,r)}),data.event.options),t.__resourcesEventRegWatchOnMouseUpRight||(t.__resourcesEventRegWatchOnMouseUpRight=new Map),t.__resourcesEventRegWatchOnMouseUpRight.set(data.event.id,{event:data.event,destroy:r});break;case e.EventProvider.EventRegWatchType.DESTROY:{if(!t.__resourcesEventRegWatchOnMouseUpRight)return;let e=t.__resourcesEventRegWatchOnMouseUpRight.get(data.event.id);e&&e.destroy&&(e.destroy(),t.__resourcesEventRegWatchOnMouseUpRight.delete(data.event.id))}}})),e.EventProvider.raise("onControlInitialized",this),e.EventProvider.raise(this.__id+".onInitialized",this)}
/**
                * Is called of control is attached to the dom.
                * @preserve (Part of the public API)
                */__attach(){TCHMI_DESIGNER||this.__parent||"TcHmi.Controls.System.TcHmiView"===this.__type||this.__element[0].classList.contains("tchmi-in-topmostlayer")||TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+"] Missing logical parent.\nIf the control was dynamically generated by help of the TcHmi.ControlFactory on application level make sure to use the API addChild()/removeChild() from the parent control.\nIf the control was dynamically generated by help of the TcHmi.ControlFactory on control level make sure to forward a reference of the parent control while creating the control."),this.__objectResolvers.forEach(e=>{e.watchDestroyer||e.resolver.watch(e.watchCallback)}),e.System.Services.triggerManager.register(this.__triggerAttachList),e.EventProvider.raise("System.onControlAttached",this),e.EventProvider.raise(this.__id+".System.onAttached",this),e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IsAttached"}),e.EventProvider.raise("onControlAttached",this),e.EventProvider.raise(this.__id+".onAttached",this)}
/**
                * Is called if control is detached from the dom.
                * @preserve (Part of the public API)
                */__detach(){this.__objectResolvers.forEach(e=>{e.watchDestroyer&&(e.watchDestroyer(),e.watchDestroyer=null)}),e.EventProvider.raise("System.onControlDetached",this),e.EventProvider.raise(this.__id+".System.onDetached",this),e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IsAttached"}),e.EventProvider.raise("onControlDetached",this),e.EventProvider.raise(this.__id+".onDetached",this),e.System.Services.triggerManager.unregister(this.__triggerAttachList)}
/**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                * @preserve (Part of the public API)
                */destroy(){if(this.__keepAlive)return;if(this.__destroyOnFunctionResultChanged&&(this.__destroyOnFunctionResultChanged(),this.__destroyOnFunctionResultChanged=null),this.__destroyOnPropertyChanged&&(this.__destroyOnPropertyChanged(),this.__destroyOnPropertyChanged=null),this.__isAttached){this.__element.detach(),this.__parent&&(this.__parent.__removeChild(this),this.__parent=null),e.EventProvider.raise("System.onPrevControlDetached",this),e.EventProvider.raise(this.__id+".System.onPrevDetached",this);try{this.__detach()}catch(t){TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+"] Unexpected exception="+t+" while detaching the control.")}e.EventProvider.raise("System.onPrevControlsDetached",[this])}else this.__parent&&(this.__parent.__removeChild(this),this.__parent=null);this.__objectResolvers.forEach(e=>{e.watchDestroyer&&e.watchDestroyer(),e.resolver.destroy()}),this.__asyncWorkAnimationFrameId&&(window.cancelAnimationFrame(this.__asyncWorkAnimationFrameId),this.__asyncWorkAnimationFrameId=0),this.__objectResolvers.clear(),this.__resourcesDomEventRegWatchOnMouseRightClick&&this.__resourcesDomEventRegWatchOnMouseRightClick.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnMouseDoubleClick&&this.__resourcesDomEventRegWatchOnMouseDoubleClick.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnMouseEnter&&this.__resourcesDomEventRegWatchOnMouseEnter.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnMouseMove&&this.__resourcesDomEventRegWatchOnMouseMove.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnMouseOut&&this.__resourcesDomEventRegWatchOnMouseOut.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnMouseLeave&&this.__resourcesDomEventRegWatchOnMouseLeave.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnMouseDown&&this.__resourcesDomEventRegWatchOnMouseDown.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnMouseUp&&this.__resourcesDomEventRegWatchOnMouseUp.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnMouseOver&&this.__resourcesDomEventRegWatchOnMouseOver.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnMouseClick&&this.__resourcesDomEventRegWatchOnMouseClick.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnMouseWheel&&this.__resourcesDomEventRegWatchOnMouseWheel.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnTouchStart&&this.__resourcesDomEventRegWatchOnTouchStart.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnTouchMove&&this.__resourcesDomEventRegWatchOnTouchMove.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnTouchEnd&&this.__resourcesDomEventRegWatchOnTouchEnd.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesDomEventRegWatchOnTouchCancel&&this.__resourcesDomEventRegWatchOnTouchCancel.forEach((e,t)=>{let r=e.domEventListener;this.__element[0].removeEventListener(r.eventName,r.listener,r.options)}),this.__resourcesEventRegWatchOnPressed&&this.__resourcesEventRegWatchOnPressed.forEach((e,t)=>{e.destroy()}),this.__resourcesEventRegWatchOnMouseDownLeft&&this.__resourcesEventRegWatchOnMouseDownLeft.forEach((e,t)=>{e.destroy()}),this.__resourcesEventRegWatchOnMouseDownRight&&this.__resourcesEventRegWatchOnMouseDownRight.forEach((e,t)=>{e.destroy()}),this.__resourcesEventRegWatchOnMouseUpLeft&&this.__resourcesEventRegWatchOnMouseUpLeft.forEach((e,t)=>{e.destroy()}),this.__resourcesEventRegWatchOnMouseUpRight&&this.__resourcesEventRegWatchOnMouseUpRight.forEach((e,t)=>{e.destroy()}),this.__destroyDomEventRegWatchOnMouseRightClick&&(this.__destroyDomEventRegWatchOnMouseRightClick(),this.__destroyDomEventRegWatchOnMouseRightClick=null),this.__destroyDomEventRegWatchOnMouseDoubleClick&&(this.__destroyDomEventRegWatchOnMouseDoubleClick(),this.__destroyDomEventRegWatchOnMouseDoubleClick=null),this.__destroyDomEventRegWatchOnMouseEnter&&(this.__destroyDomEventRegWatchOnMouseEnter(),this.__destroyDomEventRegWatchOnMouseEnter=null),this.__destroyDomEventRegWatchOnMouseMove&&(this.__destroyDomEventRegWatchOnMouseMove(),this.__destroyDomEventRegWatchOnMouseMove=null),this.__destroyDomEventRegWatchOnMouseOut&&(this.__destroyDomEventRegWatchOnMouseOut(),this.__destroyDomEventRegWatchOnMouseOut=null),this.__destroyDomEventRegWatchOnMouseLeave&&(this.__destroyDomEventRegWatchOnMouseLeave(),this.__destroyDomEventRegWatchOnMouseLeave=null),this.__destroyDomEventRegWatchOnMouseDown&&(this.__destroyDomEventRegWatchOnMouseDown(),this.__destroyDomEventRegWatchOnMouseDown=null),this.__destroyDomEventRegWatchOnMouseUp&&(this.__destroyDomEventRegWatchOnMouseUp(),this.__destroyDomEventRegWatchOnMouseUp=null),this.__destroyDomEventRegWatchOnMouseOver&&(this.__destroyDomEventRegWatchOnMouseOver(),this.__destroyDomEventRegWatchOnMouseOver=null),this.__destroyDomEventRegWatchOnMouseClick&&(this.__destroyDomEventRegWatchOnMouseClick(),this.__destroyDomEventRegWatchOnMouseClick=null),this.__destroyDomEventRegWatchOnMouseWheel&&(this.__destroyDomEventRegWatchOnMouseWheel(),this.__destroyDomEventRegWatchOnMouseWheel=null),this.__destroyDomEventRegWatchOnTouchStart&&(this.__destroyDomEventRegWatchOnTouchStart(),this.__destroyDomEventRegWatchOnTouchStart=null),this.__destroyDomEventRegWatchOnTouchMove&&(this.__destroyDomEventRegWatchOnTouchMove(),this.__destroyDomEventRegWatchOnTouchMove=null),this.__destroyDomEventRegWatchOnTouchEnd&&(this.__destroyDomEventRegWatchOnTouchEnd(),this.__destroyDomEventRegWatchOnTouchEnd=null),this.__destroyDomEventRegWatchOnTouchCancel&&(this.__destroyDomEventRegWatchOnTouchCancel(),this.__destroyDomEventRegWatchOnTouchCancel=null),this.__destroyEvenRegWatchOnPressed&&(this.__destroyEvenRegWatchOnPressed(),this.__destroyEvenRegWatchOnPressed=null),this.__destroyEvenRegWatchOnMouseDownLeft&&(this.__destroyEvenRegWatchOnMouseDownLeft(),this.__destroyEvenRegWatchOnMouseDownLeft=null),this.__destroyEvenRegWatchOnMouseDownRight&&(this.__destroyEvenRegWatchOnMouseDownRight(),this.__destroyEvenRegWatchOnMouseDownRight=null),this.__destroyEvenRegWatchOnMouseUpLeft&&(this.__destroyEvenRegWatchOnMouseUpLeft(),this.__destroyEvenRegWatchOnMouseUpLeft=null),this.__destroyEvenRegWatchOnMouseUpRight&&(this.__destroyEvenRegWatchOnMouseUpRight(),this.__destroyEvenRegWatchOnMouseUpRight=null);let t=0;for(;this.__children.length>0;){if(t++,t>=32768){TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+"] Maximum loop iteration reached! Breaking loop!");break}try{this.__children[0].destroy()}catch(t){TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+"] Unexpected exception="+t+" while destroying.")}}e.EventProvider.raise(this.__id+"onPrevDestroyed",this),e.EventProvider.raise("System.onPrevControlDestroyed",this),e.EventProvider.raise("onPrevControlDestroyed",this);let r=e.System.Services.bindingManager.getBindingsByControl(this);if(void 0!==r){let t=this;r.forEach((function(r,propertyName){e.System.Services.bindingManager.removeBinding(propertyName,t,!1)}))}e.System.Services.controlManager.destruct(this),this.__element=$(),this.__isDestroyed=!0,e.EventProvider.raise("System.onControlDestroyed",this),e.EventProvider.raise("onControlDestroyed",this),e.EventProvider.raise(this.__id+".onDestroyed",this),e.System.Services.triggerManager.unregister(this.__triggerNonAttachList),e.System.Services.triggerManager.unregister(this.__triggerAttachList)}__suspendObjectResolver(e){let t=this.__objectResolvers.get(e);t&&t.watchDestroyer&&(t.watchDestroyer(),t.watchDestroyer=null)}
/**
                 * Returns the configured defaultInternalValue of the control property
                 * @param propertyName
                 * @template T Type of the default value
                 * @preserve (Part of the public API)
                 */getAttributeDefaultValueInternal(propertyName){if(!propertyName)return null;const t=e.System.Services.controlManager.getDescriptionAttributeByPropertyName(this.__type,propertyName);if(!t)return null;if(void 0===t.defaultValueInternal){let schema=e.Type.getSchema(t.type);return schema?e.Type.Schema.resolveDefault(schema):null}return tchmi_clone_object(t.defaultValueInternal)}__onFunctionResultChanged(){return(t,data,r)=>{if(r)for(let t=0,s=r.length;t<s;t++){let s=r[t];s&&!0!==s.noLegacyForwarding&&(e.EventProvider.count(this.__id+".onPropertyChanged")>1&&e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:s.propertyName,noLegacyForwarding:!0}),e.EventProvider.has(this.__id+".onPropertyChanged<"+s.propertyName+">")&&e.EventProvider.raise(this.__id+".onPropertyChanged<"+s.propertyName+">",{propertyName:s.propertyName,dirtyPaths:s.dirtyPaths,noLegacyForwarding:!0}))}else if(data)for(let t=0,r=data.length;t<r;t++){let r=data[t];if(!r)continue;let s=e.System.Services.controlManager.getAttributeByPropertyGetterName(this,r);s&&(e.EventProvider.count(this.__id+".onPropertyChanged")>1&&e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:s.propertyName,noLegacyForwarding:!0}),e.EventProvider.has(this.__id+".onPropertyChanged<"+s.propertyName+">")&&e.EventProvider.raise(this.__id+".onPropertyChanged<"+s.propertyName+">",{propertyName:s.propertyName,noLegacyForwarding:!0}))}}}__onPropertyChanged(){return(t,data)=>{if(data&&!0!==data.noLegacyForwarding&&(e.EventProvider.raise(this.__id+".onPropertyChanged<"+data.propertyName+">",data),e.EventProvider.count(this.__id+".onFunctionResultChanged")>1)){let t=e.System.Services.controlManager.getAttributeByPropertyName(this,data.propertyName);t&&e.EventProvider.raise(this.__id+".onFunctionResultChanged",[t.propertyGetterName],[{propertyName:t.propertyName,noLegacyForwarding:!0,dirtyPaths:data.dirtyPaths}])}}}__onElementMouseOver(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementMouseEnter(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementMouseDown(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementMouseMove(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementMouseUp(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementMouseClick(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementMouseRightClick(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementMouseDoubleClick(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementMouseOut(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementMouseLeave(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementMouseWheel(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementTouchStart(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementTouchMove(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementTouchEnd(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}__onElementTouchCancel(event){return t=>{!0===e.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&e.EventProvider.raiseEx(event,t)}}
/**
                 * Control Id
                 * @preserve (Part of the public API)
                 */
getId(){return this.__id}
/**
                 * Type of the control
                 * @preserve (Part of the public API)
                 */getType(){return this.__type}
/**
                * Main HTML Element of the Control as jQuery object.
                * @preserve (Part of the public API)
                */getElement(){return this.__element}
/**
               * Precompiled copy of main JQuery element defining this control.
               * @preserve (Part of the public API)
               */getPcElement(){return this.__pcElement}__setPcElement(value){this.__pcElement=value}
/**
                 * List of attributes defined in html.
                 * @preserve (Part of the public API)
                 */getAttrs(){return this.__attrs}
/**
                 * Returns a boolean determining if the control was already destroyed.
                 * @preserve (Part of the public API)
                 */getIsDestroyed(){return this.__isDestroyed}
/**
                * List of classes of the control.
                * @preserve (Part of the public API)
                */getClassNames(){return this.__classNames}setClassNames(valueNew){let t=e.ValueConverter.toObject(valueNew);if(null===t&&(t=this.getAttributeDefaultValueInternal("ClassNames")),!Array.isArray(t))return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=ClassNames] Non array value is not supported."));let r=this.__objectResolvers.get("classNames");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("classNames",{resolver:s,watchCallback:this.__onResolverForClassNamesWatchCallback,watchDestroyer:s.watch(this.__onResolverForClassNamesWatchCallback)})}__processClassNames(){let e=Array.from(this.__element[0].classList);for(const t of e)t.startsWith("tchmi-class-")&&this.__element[0].classList.remove(t);if(this.__classNames)for(const e of this.__classNames)this.__element[0].classList.add("tchmi-class-"+e)}
/**
                * AccessConfig
                * @preserve (Part of the public API)
                */getAccessConfig(){return this.__accessConfig}
/**
                 * Sets the new AccessConfig
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setAccessConfig(valueNew){let t=e.ValueConverter.toObject(valueNew);if(null===t&&(t=this.getAttributeDefaultValueInternal("AccessConfig")),!Array.isArray(t))return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=AccessConfig] Non array values are not supported."));let r=this.__objectResolvers.get("accessConfig");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("accessConfig",{resolver:s,watchCallback:this.__onResolverForAccessConfigWatchCallback,watchDestroyer:s.watch(this.__onResolverForAccessConfigWatchCallback)})}__processAccessConfig(){if(!this.__parent){if(!this.__element||0===this.__element.length)return;if(this.__element[0].classList.contains("tchmi-in-topmostlayer"));else if(TCHMI_DESIGNER&&"TcHmi.Controls.System.TcHmiContent"===this.__type);else if(TCHMI_DESIGNER&&"TcHmi.Controls.System.TcHmiUserControl"===this.__type);else if("TcHmi.Controls.System.TcHmiView"!==this.__type)return}!0===e.Access.checkAccess(this,"observe")?(!1!==this.__accessAndEnableState.observeDisallowed&&(this.__element[0].classList.remove("TcHmi_Controls_System_TcHmiControl-observe-disallowed","tchmi-control-observe-disallowed"),this.__accessAndEnableState.observeDisallowed=!1,this.__processWidth(this),this.__processHeight(this)),!0===e.Access.checkAccess(this,"operate")?!1!==this.__accessAndEnableState.operateDisallowed&&(this.__element[0].classList.remove("TcHmi_Controls_System_TcHmiControl-operate-disallowed","tchmi-control-operate-disallowed"),this.__accessAndEnableState.operateDisallowed=!1):!0!==this.__accessAndEnableState.operateDisallowed&&(this.__element[0].classList.add("TcHmi_Controls_System_TcHmiControl-operate-disallowed","tchmi-control-operate-disallowed"),this.__accessAndEnableState.operateDisallowed=!0)):!0!==this.__accessAndEnableState.observeDisallowed&&(this.__element[0].classList.add("TcHmi_Controls_System_TcHmiControl-observe-disallowed","tchmi-control-observe-disallowed"),this.__accessAndEnableState.observeDisallowed=!0);for(let t=0,r=this.__children.length;t<r;t++)try{this.__children[t].__processAccessConfig()}catch(r){TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=AccessConfig] Unexpected exception="+r+" while processing attribute=AccessConfig of child control with id="+this.__children[t].getId()+".")}}setTrigger(valueNew){let t=e.ValueConverter.toObject(valueNew);if(null===t&&(t=this.getAttributeDefaultValueInternal("Trigger")),!tchmi_equal(t,this.__trigger)){if(e.System.Services.triggerManager.unregister(this.__triggerNonAttachList),e.System.Services.triggerManager.unregister(this.__triggerAttachList),this.__trigger=t,this.__triggerNonAttachList=[],this.__triggerAttachList=[],this.__trigger){const e=[this.__id+".onInitialized",this.__id+".onDestroyed"];for(let t of this.__trigger)-1!==e.indexOf(t.event)?this.__triggerNonAttachList.push(t):this.__triggerAttachList.push(t)}e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Trigger"}),this.__processTrigger()}}getTrigger(){return this.__trigger}__processTrigger(){e.System.Services.triggerManager.register(this.__triggerNonAttachList),this.__isAttached&&e.System.Services.triggerManager.register(this.__triggerAttachList)}
/**
                  * Returns the mapping of virtual rights to real rights
                  * @preserve (Part of the public API)
                  */getVirtualControlRightMappings(){return this.__virtualControlRightMappings}
/**
                 * Sets the new VirtualControlRightMapping
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setVirtualControlRightMappings(valueNew){let t=e.ValueConverter.toObject(valueNew);if(null===t&&(t=this.getAttributeDefaultValueInternal("VirtualControlRightMappings")),!Array.isArray(t))return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=VirtualControlRightMappings] Non array values are not supported."));let r=this.__objectResolvers.get("virtualControlRightMappings");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("virtualControlRightMappings",{resolver:s,watchCallback:this.__onResolverForVirtualControlRightMappingsWatchCallback,watchDestroyer:s.watch(this.__onResolverForVirtualControlRightMappingsWatchCallback)})}__processVirtualControlRightMappings(){this.__processAccessConfig()}getIsEnabled(){const e=this.__accessAndEnableState.enabled;return void 0!==e&&e}
/**
                * Sets the isEnabled attribute and calls the associated process function (processIsEnabled).
                * @preserve (Part of the public API)
                */setIsEnabled(valueNew){let t=e.ValueConverter.toBoolean(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("IsEnabled")),t!==this.__isEnabled&&(this.__isEnabled=t,this.__processIsEnabled())}__processIsEnabled(){if(!this.__parent){if(!this.__element||0===this.__element.length)return;if(this.__element[0].classList.contains("tchmi-in-topmostlayer"));else if(TCHMI_DESIGNER&&"TcHmi.Controls.System.TcHmiContent"===this.__type);else if(TCHMI_DESIGNER&&"TcHmi.Controls.System.TcHmiUserControl"===this.__type);else if("TcHmi.Controls.System.TcHmiView"!==this.__type)return}const t=this.__accessAndEnableState.enabled;this.__accessAndEnableState.enabled=this.__isEnabled;let r=this;do{if(this.__accessAndEnableState.enabled=r.getIsEnabled(),!this.__accessAndEnableState.enabled)break;r=r.getParent()}while(r);t!==this.__accessAndEnableState.enabled&&e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IsEnabled"}),this.__accessAndEnableState.enabled?(this.__element[0].classList.contains("TcHmi_Controls_System_TcHmiControl-disabled")&&this.__element[0].classList.remove("TcHmi_Controls_System_TcHmiControl-disabled"),this.__element[0].classList.contains("tchmi-control-disabled")&&this.__element[0].classList.remove("tchmi-control-disabled")):(this.__element[0].classList.contains("TcHmi_Controls_System_TcHmiControl-disabled")||this.__element[0].classList.add("TcHmi_Controls_System_TcHmiControl-disabled"),this.__element[0].classList.contains("tchmi-control-disabled")||this.__element[0].classList.add("tchmi-control-disabled"));for(let t=0,r=this.__children.length;t<r;t++)try{this.__children[t].__processIsEnabled()}catch(r){TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=IsEnabled] Unexpected exception="+r+" while processing attribute=IsEnabled of child control with id="+this.__children[t].getId()+".")}}
/**
                * Returns the Row index of the Control inside a TcHmiGrid Container.
                * @preserve (Part of the public API)
                */getGridRowIndex(){return this.__gridRowIndex}
/**
                 * Sets a new GridRow index
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setGridRowIndex(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("GridRowIndex")),t!==this.__gridRowIndex&&(this.__gridRowIndex=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"GridRowIndex"}),e.EventProvider.raise("System.onControlGridRowIndexChanged",this),this.__processGridRowIndex())}__processGridRowIndex(){}
/**
                 * Returns the Column index of the Control inside a TcHmiGrid Container.
                 * @preserve (Part of the public API)
                 */getGridColumnIndex(){return this.__gridColumnIndex}
/**
                 * Sets a new GridColumn index
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setGridColumnIndex(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("GridColumnIndex")),t!==this.__gridColumnIndex&&(this.__gridColumnIndex=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"GridColumnIndex"}),e.EventProvider.raise("System.onControlGridColumnIndexChanged",this),this.__processGridColumnIndex())}__processGridColumnIndex(){}
/**
                 * Returns a boolean determining if the control is attached to the dom.
                 * @preserve (Part of the public API)
                 */getIsAttached(){return this.__isAttached}
/**
                * Returns a boolean determining if the control should not be destroyed.
                * @preserve (Part of the public API)
                */getKeepAlive(){return this.__keepAlive}__setKeepAlive(value){this.__keepAlive=value}__getKeepAlive(){return this.__keepAlive}
/**
                * Returns a boolean determining if the control is a container control.
                * @preserve (Part of the public API)
                */getIsContainerControl(){return this.__isContainerControl}
/**
                * Parent control or null if there is (till now?) no parent control.
                * @preserve (Part of the public API)
                */getParent(){return this.__parent}__setParent(value){this.__parent=value,e.EventProvider.raise("System.ParentChanged",this),this.__attributesInitialized&&(this.__processIsEnabled(),this.__processAccessConfig())}__addChild(t,r){-1===this.__children.indexOf(t)&&(t.__setParent(this),null==r||r<0?this.__children.push(t):this.__children.splice(r,0,t),e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Children"}))}__removeChild(t){for(var r=null,s=0,o=this.__children.length;s<o;s++)if(this.__children[s].getId()===t.getId()){r=s;break}null!==r&&(t.getElement().detach(),this.__children[r].__setParent(null),this.__children.splice(r,1),e.EventProvider.raise(this.getId()+".onFunctionResultChanged",["getChildren"]))}
/**
                * Returns the current width of the Control.
                * @preserve (Part of the public API)
                */
getWidth(){return this.__width}
/**
                * Returns the current width unit of the Control.
                * @preserve (Part of the public API)
                */getWidthUnit(){return this.__widthUnit}
/**
                * Returns the current width mode of the control.
                * @preserve (Part of the public API)
                */getWidthMode(){return this.__widthMode}
/**
                * Returns if inner widths depends on child controls.
                * @preserve (Part of the public API)
                */innerWidthDependsOnChilds(){return!1}
/**
                * Updates the inner dimension depending on child controls.
                * @preserve (Part of the public API)
                */updateInnerWidthDependingOnChilds(){}
/**
                * Returns the current height of the Control.
                * @preserve (Part of the public API)
                */getHeight(){return this.__height}
/**
                * Returns the current height mode of the control.
                * @preserve (Part of the public API)
                */getHeightMode(){return this.__heightMode}
/**
                * Returns if inner heights depends on child controls.
                * @preserve (Part of the public API)
                */innerHeightDependsOnChilds(){return!1}
/**
                * Updates the inner dimension depending on child controls.
                * @preserve (Part of the public API)
                */updateInnerHeightDependingOnChilds(){}getHeightUnit(){return this.__heightUnit}
/**
                * Returns the current top coordinate of the Control.
                * @preserve (Part of the public API)
                */getTop(){return this.__top}
/**
                * Returns the current top coordinate unit of the Control.
                * @preserve (Part of the public API)
                */getTopUnit(){return this.__topUnit}
/**
                * Returns the current left coordinate of the Control.
                * @preserve (Part of the public API)
                */getLeft(){return this.__left}
/**
                * Returns the current left coordinate unit of the Control.
                * @preserve (Part of the public API)
                */getLeftUnit(){return this.__leftUnit}
/**
                * Returns the current bottom coordinate of the Control.
                * @preserve (Part of the public API)
                */getBottom(){return this.__bottom}
/**
                * Returns the current bottom coordinate unit of the Control.
                * @preserve (Part of the public API)
                */getBottomUnit(){return this.__bottomUnit}
/**
                * Returns the current right coordinate of the Control.
                * @preserve (Part of the public API)
                */getRight(){return this.__right}
/**
                * Returns the current right coordinate unit of the Control.
                * @preserve (Part of the public API)
                */getRightUnit(){return this.__rightUnit}
/**
                * Returns the current minwidth value.
                * @preserve (Part of the public API)
                */getMinWidth(){return this.__minWidth}
/**
               * Returns the current minwidth unit.
               * @preserve (Part of the public API)
               */getMinWidthUnit(){return this.__minWidthUnit}
/**
                * Returns the current minheight value.
                * @preserve (Part of the public API)
                */getMinHeight(){return this.__minHeight}
/**
                * Returns the current minheight unit.
                * @preserve (Part of the public API)
                */getMinHeightUnit(){return this.__minHeightUnit}
/**
                * Returns the current maxwidth value.
                * @preserve (Part of the public API)
                */getMaxWidth(){return this.__maxWidth}
/**
                * Returns the current maxwidth unit.
                * @preserve (Part of the public API)
                */getMaxWidthUnit(){return this.__maxWidthUnit}
/**
                * Returns the current maxheight value.
                * @preserve (Part of the public API)
                */getMaxHeight(){return this.__maxHeight}
/**
                * Returns the current maxheight unit.
                * @preserve (Part of the public API)
                */getMaxHeightUnit(){return this.__maxHeightUnit}
/**
                * Returns the current rendered left value in pixel.
                * @preserve (Part of the public API)
                */getRenderedLeft(){return e.System.Services.controlManager.checkControlGeometryByControl(this),this.__renderedSizeCache.left}
/**
                * Returns the current rendered top value in pixel.
                * @preserve (Part of the public API)
                */getRenderedTop(){return e.System.Services.controlManager.checkControlGeometryByControl(this),this.__renderedSizeCache.top}
/**
                * Returns the current rendered right value in pixel.
                * @preserve (Part of the public API)
                */getRenderedRight(){return e.System.Services.controlManager.checkControlGeometryByControl(this),this.__renderedSizeCache.right}
/**
                * Returns the current rendered bottom value in pixel.
                * @preserve (Part of the public API)
                */getRenderedBottom(){return e.System.Services.controlManager.checkControlGeometryByControl(this),this.__renderedSizeCache.bottom}
/**
                * Returns the current rendered width value in pixel.
                * @preserve (Part of the public API)
                */getRenderedWidth(){return e.System.Services.controlManager.checkControlGeometryByControl(this),this.__renderedSizeCache.width}
/**
                * Returns the current rendered height value in pixel.
                * @preserve (Part of the public API)
                */getRenderedHeight(){return e.System.Services.controlManager.checkControlGeometryByControl(this),this.__renderedSizeCache.height}__injectRenderedDimensions(e){let t=this.__asyncWorkData["System.TcHmiControl.changedProperties"];this.__asyncWorkData["System.TcHmiControl.layoutData"]=e;for(let r in e.computedStyles){const s=e.computedStyles[r];let o=null;s&&-1!==s.indexOf("px")&&(o=parseFloat(s),isNaN(o)&&(o=null)),o!==this.__renderedSizeCache[r]&&(this.__renderedSizeCache[r]=o,t.set(r,!0))}t.size&&this.__requestAsyncWork()}__doAsyncWork(){if(this.__isDestroyed)return;if(!this.__isAttached)return void this.__asyncWorkData["System.TcHmiControl.changedProperties"].clear();let t=this.__asyncWorkData["System.TcHmiControl.changedProperties"];t.forEach((value,t)=>{let propertyName="Rendered"+t.charAt(0).toUpperCase()+t.slice(1);e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:propertyName}),e.EventProvider.raise(this.__id+".onPropertyChanged<"+propertyName+">",{propertyName:propertyName})}),t.clear()}__requestAsyncWork(){0===this.__asyncWorkAnimationFrameId&&(this.__asyncWorkAnimationFrameId=window.requestAnimationFrame(()=>{this.__doAsyncWork();let e=this.__asyncWorkData["System.TcHmiControl.layoutData"];e.resized=!1,e.moved=!1,this.__asyncWorkAnimationFrameId=0}))}
/**
                * Sets the value of the width attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */setWidth(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("Width")),t!==this.__width&&(this.__width=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Width"}),this.__processWidth())}__processWidth(callerControl){const e=this.getWidthMode();null!==this.__width&&void 0!==this.__width&&void 0!==this.__widthUnit&&"Value"===e?this.__element[0].style.width=this.__width+this.__widthUnit:"Value"!==e&&"Parent"!==e||(this.__element[0].style.width=""),null===this.__parent||callerControl&&this.__parent===callerControl||(this.__parent.innerWidthDependsOnChilds()&&this.__parent.updateInnerWidthDependingOnChilds(),"Content"===this.__parent.getWidthMode()&&this.__parent.__processWidth(this))}
/**
                 * Sets the unit of the width attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setWidthUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("WidthUnit")),t!==this.__widthUnit&&(this.__widthUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"WidthUnit"}),this.__processWidthUnit())}__processWidthUnit(){return this.__processWidth()}
/**
                 * Sets the value of the width mode attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setWidthMode(valueNew){let t=e.ValueConverter.toSizeMode(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("WidthMode")),t!==this.__widthMode&&(this.__widthMode=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"WidthMode"}),this.__processWidthMode())}__processWidthMode(){this.__processWidth()}
/**
               * Sets the value of the height attribute.
               * @param valueNew
               * @preserve (Part of the public API)
               */setHeight(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("Height")),t!==this.__height&&(this.__height=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Height"}),this.__processHeight())}__processHeight(callerControl){const e=this.getHeightMode();null!==this.__height&&void 0!==this.__height&&void 0!==this.__heightUnit&&"Value"===e?this.__intHeight=this.__height+this.__heightUnit:"Value"!==e&&"Parent"!==e||(this.__intHeight=null),null!==this.__intHeight?(this.__element[0].style.height=this.__intHeight,this.__element[0].removeAttribute("data-tchmi-control-height-forced")):"Content"!==e&&"Parent"!==e||null!==this.__top&&null!==this.__bottom?(this.__element[0].style.height="",this.__element[0].removeAttribute("data-tchmi-control-height-forced")):(this.__element[0].style.height="0",this.__element[0].setAttribute("data-tchmi-control-height-forced","true")),null===this.__parent||callerControl&&this.__parent===callerControl||(this.__parent.innerHeightDependsOnChilds()&&this.__parent.updateInnerHeightDependingOnChilds(),"Content"===this.__parent.getHeightMode()&&this.__parent.__processHeight(this))}
/**
                 * Sets the value of the height mode attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setHeightMode(valueNew){let t=e.ValueConverter.toSizeMode(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("HeightMode")),t!==this.__heightMode&&(this.__heightMode=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"HeightMode"}),this.__processHeightMode())}__processHeightMode(){this.__processHeight()}
/**
                * Sets the unit of the height attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */setHeightUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("HeightUnit")),t!==this.__heightUnit&&(this.__heightUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"HeightUnit"}),this.__processHeightUnit())}__processHeightUnit(){return this.__processHeight()}__getContentWidth(){if("Collapsed"===this.__visibility)return null;if(!0===this.__accessAndEnableState.observeDisallowed)return null;let e=null,t=null,r=null;return null!==this.__minWidth&&void 0!==this.__minWidth&&"px"===this.__minWidthUnit&&(r=this.__minWidth),null!==this.__maxWidth&&void 0!==this.__maxWidth&&"px"===this.__maxWidthUnit&&(t=this.__maxWidth),null!==this.__width&&void 0!==this.__width&&"px"===this.__widthUnit&&"Value"===this.getWidthMode()&&(e=this.__width),null!==e?r&&e<r?r:t&&e>t?t:e:r}__getContentHeight(){if("Collapsed"===this.__visibility)return null;if(!0===this.__accessAndEnableState.observeDisallowed)return null;let e=null,t=null,r=null;return null!==this.__minHeight&&void 0!==this.__minHeight&&"px"===this.__minHeightUnit&&(r=this.__minHeight),null!==this.__maxHeight&&void 0!==this.__maxHeight&&"px"===this.__maxHeightUnit&&(t=this.__maxHeight),null!==this.__height&&void 0!==this.__height&&"px"===this.__heightUnit&&"Value"===this.getHeightMode()&&(e=this.__height),null!==e?r&&e<r?r:t&&e>t?t:e:r}
/**
               * Sets the value of the top attribute.
               * @param valueNew
               * @preserve (Part of the public API)
               */setTop(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("Top")),t!==this.__top&&(this.__top=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Top"}),this.__processTop())}__processTop(){null!==this.__top&&void 0!==this.__top&&void 0!==this.__topUnit?this.__element[0].style.top=this.__top+this.__topUnit:this.__element[0].style.top="",this.__processHeight(),null!==this.__parent&&(this.__parent.innerHeightDependsOnChilds()&&this.__parent.updateInnerHeightDependingOnChilds(),"Content"===this.__parent.getHeightMode()&&this.__parent.__processHeight())}
/**
                 * Sets the unit of the top attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setTopUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("TopUnit")),t!==this.__topUnit&&(this.__topUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TopUnit"}),this.__processTopUnit())}__processTopUnit(){return this.__processTop()}
/**
                * Sets the value of the left attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */setLeft(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("Left")),t!==this.__left&&(this.__left=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Left"}),this.__processLeft())}__processLeft(){null!==this.__left&&void 0!==this.__left&&void 0!==this.__leftUnit?this.__element[0].style.left=this.__left+this.__leftUnit:this.__element[0].style.left="",null!==this.__parent&&(this.__parent.innerWidthDependsOnChilds()&&this.__parent.updateInnerWidthDependingOnChilds(),"Content"===this.__parent.getWidthMode()&&this.__parent.__processWidth())}
/**
                 * Sets the unit of the left attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setLeftUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("LeftUnit")),t!==this.__leftUnit&&(this.__leftUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"LeftUnit"}),this.__processLeftUnit())}__processLeftUnit(){return this.__processLeft()}
/**
                 * Sets the value of the bottom attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBottom(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("Bottom")),t!==this.__bottom&&(this.__bottom=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Bottom"}),this.__processBottom())}__processBottom(){null!==this.__bottom&&void 0!==this.__bottom&&void 0!==this.__bottomUnit?this.__element[0].style.bottom=this.__bottom+this.__bottomUnit:this.__element[0].style.bottom="",this.__processHeight(),null!==this.__parent&&(this.__parent.innerHeightDependsOnChilds()&&this.__parent.updateInnerHeightDependingOnChilds(),"Content"===this.__parent.getHeightMode()&&this.__parent.__processHeight())}
/**
                 * Sets the unit of the bottom attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBottomUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BottomUnit")),t!==this.__bottomUnit&&(this.__bottomUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BottomUnit"}),this.__processBottomUnit())}__processBottomUnit(){return this.__processBottom()}
/**
                * Sets the value of the right attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */setRight(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("Right")),t!==this.__right&&(this.__right=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Right"}),this.__processRight())}__processRight(){null!==this.__right&&void 0!==this.__right&&void 0!==this.__rightUnit?this.__element[0].style.right=this.__right+this.__rightUnit:this.__element[0].style.right="",null!==this.__parent&&(this.__parent.innerWidthDependsOnChilds()&&this.__parent.updateInnerWidthDependingOnChilds(),"Content"===this.__parent.getWidthMode()&&this.__parent.__processWidth())}
/**
                 * Sets the unit of the right attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setRightUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("RightUnit")),t!==this.__rightUnit&&(this.__rightUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"RightUnit"}),this.__processRightUnit())}__processRightUnit(){return this.__processRight()}
/**
                 * Sets the value of the minwidth attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setMinWidth(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("MinWidth")),t!==this.__minWidth&&(this.__minWidth=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MinWidth"}),this.__processMinWidth())}__processMinWidth(){null!==this.__minWidth&&void 0!==this.__minWidth&&void 0!==this.__minWidthUnit?this.__element[0].style.minWidth=this.__minWidth+this.__minWidthUnit:this.__element[0].style.minWidth=""}
/**
                * Sets the unit of the minwidth attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */setMinWidthUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("MinWidthUnit")),t!==this.__minWidthUnit&&(this.__minWidthUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MinWidthUnit"}),this.__processMinWidthUnit())}__processMinWidthUnit(){return this.__processMinWidth()}
/**
                * Sets the value of the minheight attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */setMinHeight(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("MinHeight")),t!==this.__minHeight&&(this.__minHeight=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MinHeight"}),this.__processMinHeight())}__processMinHeight(){null!==this.__minHeight&&void 0!==this.__minHeight&&void 0!==this.__minHeightUnit?this.__element[0].style.minHeight=this.__minHeight+this.__minHeightUnit:this.__element[0].style.minHeight="",this.__processHeight()}
/**
                 * Sets the unit of the minheight attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setMinHeightUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("MinHeightUnit")),t!==this.__minHeightUnit&&(this.__minHeightUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MinHeightUnit"}),this.__processMinHeightUnit())}__processMinHeightUnit(){return this.__processMinHeight()}
/**
                * Sets the value of the maxwidth attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */setMaxWidth(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("MaxWidth")),t!==this.__maxWidth&&(this.__maxWidth=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MaxWidth"}),this.__processMaxWidth())}__processMaxWidth(){null!==this.__maxWidth&&void 0!==this.__maxWidth&&void 0!==this.__maxWidthUnit?this.__element[0].style.maxWidth=this.__maxWidth+this.__maxWidthUnit:this.__element[0].style.maxWidth=""}
/**
                 * Sets the unit of the maxwidth attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setMaxWidthUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("MaxWidthUnit")),t!==this.__maxWidthUnit&&(this.__maxWidthUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MaxWidthUnit"}),this.__processMaxWidthUnit())}__processMaxWidthUnit(){return this.__processMaxWidth()}
/**
                 * Sets the value of the maxheight attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setMaxHeight(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("MaxHeight")),t!==this.__maxHeight&&(this.__maxHeight=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MaxHeight"}),this.__processMaxHeight())}__processMaxHeight(){null!==this.__maxHeight&&void 0!==this.__maxHeight&&void 0!==this.__maxHeightUnit?this.__element[0].style.maxHeight=this.__maxHeight+this.__maxHeightUnit:this.__element[0].style.maxHeight=""}
/**
               * Sets the unit of the maxheight attribute.
               * @param valueNew
               * @preserve (Part of the public API)
               */setMaxHeightUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("MaxHeightUnit")),t!==this.__maxHeightUnit&&(this.__maxHeightUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MaxHeightUnit"}),this.__processMaxHeightUnit())}__processMaxHeightUnit(){return this.__processMaxHeight()}getZindex(){return this.__zindex}
/**
                * Sets the value of the zindex attribute.
                * @param valueNew
                * @preserve (Part of the public API)
                */setZindex(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("Zindex")),t!==this.__zindex&&(this.__zindex=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Zindex"}),this.__processZindex())}__processZindex(){null===this.__zindex||void 0===this.__zindex||this.__zindex<0?this.__element[0].style.zIndex="0":this.__element[0].style.zIndex=this.__zindex.toString()}
/**
                * Returns the current opacity value.
                * Sets the value of the zindex attribute.
                * @preserve (Part of the public API)
                */getOpacity(){return this.__opacity}
/**
                * Sets the value of the opacity attribute. The value must be between 0 (0%) and 1 (100%).
                * @param valueNew
                * @preserve (Part of the public API)
                */setOpacity(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("Opacity")),t!==this.__opacity&&(this.__opacity=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Opacity"}),this.__processOpacity())}__processOpacity(){"Hidden"!==this.__visibility&&(null===this.__opacity||void 0===this.__opacity||this.__opacity>=1?this.__element[0].style.opacity="":this.__element[0].style.opacity=this.__opacity.toString())}setVisibility(valueNew){let t=e.ValueConverter.toVisibility(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("Visibility")),t!==this.__visibility&&(this.__visibility=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Visibility"}),e.EventProvider.raise("System.onControlVisibilityChanged",this),this.__processVisibility(),null!==this.__parent&&(this.__parent.innerHeightDependsOnChilds()&&this.__parent.updateInnerHeightDependingOnChilds(),"Content"===this.__parent.getHeightMode()&&this.__parent.__processHeight(),this.__parent.innerWidthDependsOnChilds()&&this.__parent.updateInnerWidthDependingOnChilds(),"Content"===this.__parent.getWidthMode()&&this.__parent.__processWidth()))}getVisibility(){return this.__visibility}__processVisibility(){switch(this.__visibility){case"Collapsed":this.__element[0].style.display="none",this.__element[0].style.opacity="";break;case"Hidden":this.__element[0].style.display="",this.__element[0].style.opacity="0";break;case"Visible":default:this.__element[0].style.display="",null===this.__opacity||void 0===this.__opacity||this.__opacity>=1?this.__element[0].style.opacity="":this.__element[0].style.opacity=this.__opacity.toString()}}
/**
                * Returns the current transform value.
                * @preserve (Part of the public API)
                */getTransform(){return this.__transform}
/**
                 * Sets the value of the transform attribute.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setTransform(valueNew){let t=e.ValueConverter.toObject(valueNew);if(null===t&&(t=this.getAttributeDefaultValueInternal("Transform")),t&&!Array.isArray(t))return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=Transform] Non array values are not supported."));let r=this.__objectResolvers.get("transform");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("transform",{resolver:s,watchCallback:this.__onResolverForTransformWatchCallback,watchDestroyer:s.watch(this.__onResolverForTransformWatchCallback)})}__processTransform(){e.StyleProvider.processTransform(this.__element,this.__transform)}__processAllBackground(){this.__attributesInitialized&&e.StyleProvider.processBackground(this.__element,this.__background)}
/**
                * Returns the current background value.
                * @preserve (Part of the public API)
                */getBackgroundColor(){return this.__background.color}
/**
                 * Sets the background value and calls the associated process function (processBackground).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBackgroundColor(valueNew){let t=e.ValueConverter.toObject(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BackgroundColor"));let r=this.__objectResolvers.get("backgroundColor");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("backgroundColor",{resolver:s,watchCallback:this.__onResolverForBackgroundColorWatchCallback,watchDestroyer:s.watch(this.__onResolverForBackgroundColorWatchCallback)})}__processBackgroundColor(){this.__processAllBackground()}
/**
                * Returns the current value of the member variable backgroundImage.
                * @preserve (Part of the public API)
                */getBackgroundImage(){return this.__background.image}
/**
                 * Sets the value of the member variable "backgroundImage" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImage) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBackgroundImage(valueNew){let t=e.ValueConverter.toString(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BackgroundImage")),t!==this.__background.image&&(this.__background.image=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BackgroundImage"}),this.__processBackgroundImage())}__processBackgroundImage(){this.__processAllBackground()}
/**
                * Returns the current value of the member variable backgroundImagePadding.
                * @preserve (Part of the public API)
                */getBackgroundImagePadding(){return this.__background.imagePadding}
/**
                * Sets the value of the member variable "backgroundImagePadding" if the new value is not equal to the current value
                * and calls the associated process function (processBackgroundImagePadding) after that.
                * @param valueNew
                * @preserve (Part of the public API)
                */setBackgroundImagePadding(valueNew){let t=e.ValueConverter.toObject(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BackgroundImagePadding"));let r=this.__objectResolvers.get("backgroundImagePadding");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("backgroundImagePadding",{resolver:s,watchCallback:this.__onResolverForBackgroundImagePaddingWatchCallback,watchDestroyer:s.watch(this.__onResolverForBackgroundImagePaddingWatchCallback)})}__processBackgroundImagePadding(){this.__processAllBackground()}
/**
                * Returns the current value of the member variable backgroundImageWidth.
                * @preserve (Part of the public API)
                */getBackgroundImageWidth(){return this.__background.imageWidth}
/**
                 * Sets the value of the member variable "backgroundImageWidth" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageWidth) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBackgroundImageWidth(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BackgroundImageWidth")),t!==this.__background.imageWidth&&(this.__background.imageWidth=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BackgroundImageWidth"}),this.__processBackgroundImageWidth())}__processBackgroundImageWidth(){this.__processAllBackground()}
/**
                * Returns the current value of the member variable backgroundImageWidthUnit.
                * @preserve (Part of the public API)
                */getBackgroundImageWidthUnit(){return this.__background.imageWidthUnit}
/**
                 * Sets the value of the member variable "backgroundImageWidthUnit" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageWidthUnit) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBackgroundImageWidthUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BackgroundImageWidthUnit")),t!==this.__background.imageWidthUnit&&(this.__background.imageWidthUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BackgroundImageWidthUnit"}),this.__processBackgroundImageWidthUnit())}__processBackgroundImageWidthUnit(){this.__processBackgroundImageWidth()}
/**
                * Returns the current value of the member variable backgroundImageHeight.
                * @preserve (Part of the public API)
                */getBackgroundImageHeight(){return this.__background.imageHeight}
/**
                 * Sets the value of the member variable "backgroundImageHeight" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageHeight) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBackgroundImageHeight(valueNew){let t=e.ValueConverter.toNumber(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BackgroundImageHeight")),t!==this.__background.imageHeight&&(this.__background.imageHeight=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BackgroundImageHeight"}),this.__processBackgroundImageHeight())}__processBackgroundImageHeight(){this.__processAllBackground()}
/**
                * Returns the current value of the member variable backgroundImageHeightUnit.
                * @preserve (Part of the public API)
                */getBackgroundImageHeightUnit(){return this.__background.imageHeightUnit}
/**
                 * Sets the value of the member variable "backgroundImageHeightUnit" if the new value is not equal to the current value.
                 * and calls the associated process function (processBackgroundImageHeightUnit) after that.
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBackgroundImageHeightUnit(valueNew){let t=e.ValueConverter.toDimensionUnit(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BackgroundImageHeightUnit")),t!==this.__background.imageHeightUnit&&(this.__background.imageHeightUnit=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BackgroundImageHeightUnit"}),this.__processBackgroundImageHeightUnit())}__processBackgroundImageHeightUnit(){this.__processBackgroundImageHeight()}
/**
                * Returns the current value of horizontalBackgroundImageAligment.
                * @preserve (Part of the public API)
                */getBackgroundImageHorizontalAlignment(){return this.__background.imageHorizontalAlignment}
/**
                 * Sets the backgroundImageHorizontalAlignment value and calls the associated process function (processBackgroundImageHorizontalAlignment).
                 * @preserve (Part of the public API)
                 */setBackgroundImageHorizontalAlignment(valueNew){let t=e.ValueConverter.toHorizontalAlignment(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BackgroundImageHorizontalAlignment")),t!==this.__background.imageHorizontalAlignment&&(this.__background.imageHorizontalAlignment=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BackgroundImageHorizontalAlignment"}),this.__processBackgroundImageHorizontalAlignment())}__processBackgroundImageHorizontalAlignment(){this.__processAllBackground()}
/**
                 * Returns the current value of backgroundImageVerticalAlignment.
                 * @preserve (Part of the public API)
                 */getBackgroundImageVerticalAlignment(){return this.__background.imageVerticalAlignment}
/**
                 * Sets the backgroundImageVerticalAlignment value and calls the associated process function (processBackgroundImageVerticalAlignment).
                 * Possible Values: "Left", "Top", "Center"
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBackgroundImageVerticalAlignment(valueNew){let t=e.ValueConverter.toVerticalAlignment(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BackgroundImageVerticalAlignment")),t!==this.__background.imageVerticalAlignment&&(this.__background.imageVerticalAlignment=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BackgroundImageVerticalAlignment"}),this.__processBackgroundImageVerticalAlignment())}__processBackgroundImageVerticalAlignment(){this.__processAllBackground()}
/**
                * Returns the current border-color value.
                * @preserve (Part of the public API)
                */
getBorderColor(){return this.__borderColor}
/**
                * Sets the border-color attribute value and calls the associated process function (processBorderColor).
                * @param valueNew
                * @preserve (Part of the public API)
                */setBorderColor(valueNew){let t=e.ValueConverter.toObject(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BorderColor"));let r=this.__objectResolvers.get("borderColor");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("borderColor",{resolver:s,watchCallback:this.__onResolverForBorderColorWatchCallback,watchDestroyer:s.watch(this.__onResolverForBorderColorWatchCallback)})}__processBorderColor(){e.StyleProvider.processBorderColor(this.__element,this.__borderColor)}
/**
                * Returns the current border-width value.
                * @preserve (Part of the public API)
                */getBorderWidth(){return this.__borderWidth}
/**
                * Sets the border-width attribute value and calls the associated process function (processBorderWidth).
                * @param valueNew
                * @preserve (Part of the public API)
                */setBorderWidth(valueNew){let t=e.ValueConverter.toObject(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BorderWidth"));let r=this.__objectResolvers.get("borderWidth");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("borderWidth",{resolver:s,watchCallback:this.__onResolverForBorderWidthWatchCallback,watchDestroyer:s.watch(this.__onResolverForBorderWidthWatchCallback)})}__processBorderWidth(){e.StyleProvider.processBorderWidth(this.__element,this.__borderWidth)}
/**
                * Returns the current border-radius value.
                * @preserve (Part of the public API)
                */getBorderRadius(){return this.__borderRadius}
/**
                 * Sets the border-radius attribute value and calls the associated process function (processBorderRadius).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBorderRadius(valueNew){let t=e.ValueConverter.toObject(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BorderRadius"));let r=this.__objectResolvers.get("borderRadius");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("borderRadius",{resolver:s,watchCallback:this.__onResolverForBorderRadiusWatchCallback,watchDestroyer:s.watch(this.__onResolverForBorderRadiusWatchCallback)})}__processBorderRadius(){e.StyleProvider.processBorderRadius(this.__element,this.__borderRadius)}
/**
                * Returns the current border-style value.
                * @preserve (Part of the public API)
                */getBorderStyle(){return this.__borderStyle}
/**
                 * Internal reference to the attribute "data-tchmi-border-type".
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setBorderStyle(valueNew){let t=e.ValueConverter.toObject(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("BorderStyle"));let r=this.__objectResolvers.get("borderStyle");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("borderStyle",{resolver:s,watchCallback:this.__onResolverForBorderStyleWatchCallback,watchDestroyer:s.watch(this.__onResolverForBorderStyleWatchCallback)})}__processBorderStyle(){e.StyleProvider.processBorderStyle(this.__element,this.__borderStyle)}
/**
                * Sets the internal reference to the attribute "data-tchmi-box-shadow".
                * @preserve (Part of the public API)
                */
setBoxShadow(valueNew){let t=e.ValueConverter.toObject(valueNew);if(null===t&&(t=this.getAttributeDefaultValueInternal("BoxShadow")),t&&!Array.isArray(t))return void(TCHMI_CONSOLE_LOG_LEVEL>=1&&e.Log.error("[Source=Control, Module=TcHmi.Controls.System.TcHmiControl, Id="+this.getId()+", Attribute=BoxShadow] Non array values are not supported."));let r=this.__objectResolvers.get("boxShadow");r&&(r.watchDestroyer&&r.watchDestroyer(),r.resolver.destroy());let s=new e.Symbol.ObjectResolver(t);this.__objectResolvers.set("boxShadow",{resolver:s,watchCallback:this.__onResolverForBoxShadowWatchCallback,watchDestroyer:s.watch(this.__onResolverForBoxShadowWatchCallback)})}
/**
                * Returns the current box-shadow value.
                * @preserve (Part of the public API)
                */getBoxShadow(){return this.__boxShadow}__processBoxShadow(){e.StyleProvider.processBoxShadow(this.__element,this.__boxShadow)}
/**
                * Returns the current value of tooltip.
                * @preserve (Part of the public API)
                */getTooltip(){return this.__tooltip}
/**
                * Sets the tooltip attribute and calls the associated process function (processTooltip).
                * @param valueNew
                * @preserve (Part of the public API)
                */setTooltip(valueNew){let t=e.ValueConverter.toString(valueNew);null===t&&(t=this.getAttributeDefaultValueInternal("Tooltip")),t!==this.__tooltip&&(this.__tooltip=t,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Tooltip"}),this.__processTooltip())}__processTooltip(){this.__tooltip?this.__element[0].setAttribute("title",tchmi_decode_control_characters(this.__tooltip)):this.__element[0].removeAttribute("title")}}t.TcHmiControl=r}(r=t.System||(t.System={})),t.registerEx("TcHmiControl","TcHmi.Controls.System",e.Controls.System.TcHmiControl)}(t=e.Controls||(e.Controls={}))}(TcHmi||(TcHmi={}));