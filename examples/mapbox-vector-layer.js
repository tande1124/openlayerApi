(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{431:function(e,r,t){"use strict";t.r(r);var o=t(3),n=t(49),s=t(14),i=t(103),a=t(46),c=t(94),l=t(88),u=t(175),h="https://api.mapbox.com";function p(e){var r="mapbox://";return 0!==e.indexOf(r)?"":e.slice(r.length)}var f=function(e){function r(r){e.call(this,s.a.ERROR),this.error=r}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r}(n.a),d="vector",y=function(e){function r(r){var t=!("declutter"in r)||r.declutter,o=new l.a({state:a.a.LOADING,format:new i.a});e.call(this,{source:o,declutter:t,className:r.className,opacity:r.opacity,visible:r.visible,zIndex:r.zIndex,minResolution:r.minResolution,maxResolution:r.maxResolution,minZoom:r.minZoom,maxZoom:r.maxZoom,renderOrder:r.renderOrder,renderBuffer:r.renderBuffer,renderMode:r.renderMode,map:r.map,updateWhileAnimating:r.updateWhileAnimating,updateWhileInteracting:r.updateWhileInteracting,preload:r.preload,useInterimTilesOnError:r.useInterimTilesOnError}),this.sourceId=r.source,this.layers=r.layers,this.accessToken=r.accessToken,this.fetchStyle(r.styleUrl)}return e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r,r.prototype.fetchStyle=function(e){var r=this,t=function(e,r){var t=p(e);if(!t)return e;var o="styles/";if(0!==t.indexOf(o))throw new Error("unexpected style url: "+e);var n=t.slice(o.length);return h+"/styles/v1/"+n+"?&access_token="+r}(e,this.accessToken);fetch(t).then((function(e){if(!e.ok)throw new Error("unexpected response when fetching style: "+e.status);return e.json()})).then((function(e){r.onStyleLoad(e)})).catch((function(e){r.handleError(e)}))},r.prototype.onStyleLoad=function(e){var r,t,o=this;if(this.layers){for(var n,s={},i=0;i<e.layers.length;++i){var c=e.layers[i];c.source&&(s[c.id]=c.source)}for(var l=0;l<this.layers.length;++l){var f=s[this.layers[l]];if(!f)return void this.handleError(new Error("could not find source for "+this.layers[l]));if(n){if(n!==f)return void this.handleError(new Error("layers can only use a single source, found "+n+" and "+f))}else n=f}r=n,t=this.layers}else t=r=this.sourceId;t||(t=r=Object.keys(e.sources)[0]),e.sprite&&(e.sprite=function(e,r){var t=p(e);if(!t)return e;var o="sprites/";if(0!==t.indexOf(o))throw new Error("unexpected sprites url: "+e);var n=t.slice(o.length);return h+"/styles/v1/"+n+"/sprite?access_token="+r}(e.sprite,this.accessToken)),e.glyphs&&(e.glyphs=function(e,r){var t=p(e);if(!t)return e;var o="fonts/";if(0!==t.indexOf(o))throw new Error("unexpected fonts url: "+e);var n=t.slice(o.length);return h+"/fonts/v1/"+n+"/0-255.pbf?access_token="+r}(e.glyphs,this.accessToken));var y=e.sources[r];if(y.type===d){var v,m,w,g=this.getSource();g.setUrl((v=y.url,m=this.accessToken,(w=p(v))?"https://{a-d}.tiles.mapbox.com/v4/"+w+"/{z}/{x}/{y}.vector.pbf?access_token="+m:v)),Object(u.a)(this,e,t).then((function(){g.setState(a.a.READY)})).catch((function(e){o.handleError(e)}))}else this.handleError(new Error("only works for vector sources, found "+y.type))},r.prototype.handleError=function(e){this.dispatchEvent(new f(e)),this.getSource().setState(a.a.ERROR)},r}(c.a),v=t(2);new o.a({target:"map",layers:[new y({styleUrl:"mapbox://styles/mapbox/bright-v9",accessToken:"pk.eyJ1IjoiYWhvY2V2YXIiLCJhIjoiY2pzbmg0Nmk5MGF5NzQzbzRnbDNoeHJrbiJ9.7_-_gL8ur7ZtEiNwRfCy7Q"})],view:new v.a({center:[0,0],zoom:2})})}},[[431,0]]]);
//# sourceMappingURL=mapbox-vector-layer.js.map