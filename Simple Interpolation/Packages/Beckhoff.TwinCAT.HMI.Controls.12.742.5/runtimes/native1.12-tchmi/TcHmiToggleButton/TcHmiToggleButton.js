var TcHmi;!function(t){let e;!function(e){let o;!function(e){class o extends e.TcHmiButton{constructor(t,e,o){super(t,e,o),this.__toggleLock=!1,this.__onToggleGroupToggledEventDestroyEvent=null}__previnit(){super.__previnit()}__init(){super.__init()}__attach(){super.__attach()}__detach(){super.__detach()}destroy(){this.__keepAlive||(null!==this.__onToggleGroupToggledEventDestroyEvent&&(this.__onToggleGroupToggledEventDestroyEvent(),this.__onToggleGroupToggledEventDestroyEvent=null),super.destroy())}__processState(e,o,s){this.__state!==e&&(this.__setToggleState(e?"Active":"Normal",o,!1),e&&null!==this.__toggleGroup&&t.EventProvider.raise(this.__toggleGroup+".toggled",{ActiveElementId:this.__id,source:s}),super.__processState(e,o,s))}__onPropertyIsEnabledChanged(){return(t,e)=>{e&&(this.getIsEnabled()?!this.__destroyStateSymbolWatch&&this.__stateSymbol&&(this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch())):(this.__mousedown=!1,this.__stateLock=!1,this.__touches=[],this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null)))}}__onMouseDown(){return e=>{this.__touchLock||0===e.button&&this.getIsEnabled()&&t.Access.checkAccess(this,"operate")&&(this.__mousedown=!0,!1===this.__stateLock&&(!1===this.__state?(this.__toggleLock=!0,this.__stateLock=!0,this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null),this.__processState(!0,!0,"userInteraction")):this.__toggleLock=!1))}}__onMouseUp(){return e=>{this.__touchLock||0===e.button&&this.__mousedown&&this.getIsEnabled()&&t.Access.checkAccess(this,"operate")&&(this.__mousedown=!1,!1===this.__toggleLock&&!0===this.__state&&this.__processState(!1,!0,"userInteraction"),this.__stateLock=!1,!this.__destroyStateSymbolWatch&&this.__stateSymbol&&(this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch())))}}__onMouseEnter(){return t=>{}}__onMouseLeave(){return e=>{this.__mousedown&&this.getIsEnabled()&&t.Access.checkAccess(this,"operate")&&(this.__mousedown=!1,!1===this.__toggleLock&&!0===this.__state&&this.__processState(!1,!0,"userInteraction"),this.__stateLock=!1,!this.__destroyStateSymbolWatch&&this.__stateSymbol&&(this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch())))}}__onTouchStart(){return e=>{if(!this.getIsEnabled())return;if(!t.Access.checkAccess(this,"operate"))return;let o=Array.prototype.slice.apply(e.changedTouches).filter(t=>t.target===e.target);if(0===o.length)return;this.__touches=this.__touches.concat(o.map(t=>t)),!1===this.__stateLock&&(!1===this.__state?(this.__toggleLock=!0,this.__stateLock=!0,this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null),this.__processState(!0,!0,"userInteraction")):this.__toggleLock=!1),this.__touchLock=!0;let s=this;setTimeout((function(){s.__touchLock=!1}),300)}}__onTouchEndOrCancel(){return e=>{if(0===this.__touches.length)return;if(!this.getIsEnabled())return;if(!t.Access.checkAccess(this,"operate"))return;let o=Array.prototype.slice.apply(e.changedTouches).map(t=>t.identifier);this.__touches=this.__touches.filter(t=>-1===o.indexOf(t.identifier)),0===this.__touches.length&&(!1===this.__toggleLock&&!0===this.__state&&this.__processState(!1,!0,"userInteraction"),this.__stateLock=!1,!this.__destroyStateSymbolWatch&&this.__stateSymbol&&(this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch())))}}__onToggleGroupToggled(){return(t,e)=>{e&&e.ActiveElementId&&e.ActiveElementId!==this.__id&&(this.__stateSymbol&&this.__stateSymbol.getExpression().toString()===e.source||this.__processState(!1,!0,"toggleGroup"))}}setToggleGroup(valueNew){let e=t.ValueConverter.toString(valueNew);null===e&&(e=this.getAttributeDefaultValueInternal("ToggleGroup")),e!==this.__toggleGroup&&(this.__toggleGroup=e,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ToggleGroup"}),this.__processToggleGroup())}getToggleGroup(){return this.__toggleGroup}__processToggleGroup(){null!==this.__onToggleGroupToggledEventDestroyEvent&&(this.__onToggleGroupToggledEventDestroyEvent(),this.__onToggleGroupToggledEventDestroyEvent=null),null!==this.__toggleGroup&&(this.__onToggleGroupToggledEventDestroyEvent=t.EventProvider.register(this.__toggleGroup+".toggled",this.__onToggleGroupToggled()))}__setToggleState(valueNew,e=!0,o=!1){let s=t.ValueConverter.toToggleState(valueNew);null===s&&(s=this.getAttributeDefaultValueInternal("ToggleState")),s!==this.__toggleState&&(this.__toggleState=s,t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ToggleState"}),t.EventProvider.raise(this.__id+".onToggleStateChanged"),o&&this.__processToggleState(e))}setToggleState(valueNew){this.__setToggleState(valueNew,!0,!0)}getToggleState(){return this.__toggleState}__processToggleState(t=!0){this.__processState("Active"===this.__toggleState,t,"attribute")}}e.TcHmiToggleButton=o}(o=e.Beckhoff||(e.Beckhoff={})),e.registerEx("TcHmiToggleButton","TcHmi.Controls.Beckhoff",t.Controls.Beckhoff.TcHmiToggleButton)}(e=t.Controls||(t.Controls={}))}(TcHmi||(TcHmi={}));