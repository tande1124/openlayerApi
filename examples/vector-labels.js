(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{391:function(e,t,n){"use strict";n.r(t);var o=n(30),l=n(3),s=n(2),i=n(67),a=n(21),m=n(15),d=n(11),u=n(48),g=n(10),r=n(9),c=n(19),y=n(5),f=!1,p={points:{text:document.getElementById("points-text"),align:document.getElementById("points-align"),baseline:document.getElementById("points-baseline"),rotation:document.getElementById("points-rotation"),font:document.getElementById("points-font"),weight:document.getElementById("points-weight"),size:document.getElementById("points-size"),height:document.getElementById("points-height"),offsetX:document.getElementById("points-offset-x"),offsetY:document.getElementById("points-offset-y"),color:document.getElementById("points-color"),outline:document.getElementById("points-outline"),outlineWidth:document.getElementById("points-outline-width"),maxreso:document.getElementById("points-maxreso")},lines:{text:document.getElementById("lines-text"),align:document.getElementById("lines-align"),baseline:document.getElementById("lines-baseline"),rotation:document.getElementById("lines-rotation"),font:document.getElementById("lines-font"),weight:document.getElementById("lines-weight"),placement:document.getElementById("lines-placement"),maxangle:document.getElementById("lines-maxangle"),overflow:document.getElementById("lines-overflow"),size:document.getElementById("lines-size"),height:document.getElementById("lines-height"),offsetX:document.getElementById("lines-offset-x"),offsetY:document.getElementById("lines-offset-y"),color:document.getElementById("lines-color"),outline:document.getElementById("lines-outline"),outlineWidth:document.getElementById("lines-outline-width"),maxreso:document.getElementById("lines-maxreso")},polygons:{text:document.getElementById("polygons-text"),align:document.getElementById("polygons-align"),baseline:document.getElementById("polygons-baseline"),rotation:document.getElementById("polygons-rotation"),font:document.getElementById("polygons-font"),weight:document.getElementById("polygons-weight"),placement:document.getElementById("polygons-placement"),maxangle:document.getElementById("polygons-maxangle"),overflow:document.getElementById("polygons-overflow"),size:document.getElementById("polygons-size"),height:document.getElementById("polygons-height"),offsetX:document.getElementById("polygons-offset-x"),offsetY:document.getElementById("polygons-offset-y"),color:document.getElementById("polygons-color"),outline:document.getElementById("polygons-outline"),outlineWidth:document.getElementById("polygons-outline-width"),maxreso:document.getElementById("polygons-maxreso")}},E=function(e,t,n){var o=n.text.value,l=n.maxreso.value,s=e.get("name");return t>l||"hide"==o?s="":"shorten"==o?s=s.trunc(12):"wrap"!=o||n.placement&&"line"==n.placement.value||(s=k(s,16,"\n")),s},w=function(e,t,n){var o=n.align.value,l=n.baseline.value,s=n.size.value,d=n.height.value,u=parseInt(n.offsetX.value,10),g=parseInt(n.offsetY.value,10),r=n.weight.value,c=n.placement?n.placement.value:void 0,y=n.maxangle?parseFloat(n.maxangle.value):void 0,p=n.overflow?"true"==n.overflow.value:void 0,w=parseFloat(n.rotation.value);if("'Open Sans'"==n.font.value&&!f){var I=document.createElement("link");I.href="https://fonts.googleapis.com/css?family=Open+Sans",I.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(I),f=!0}var B=r+" "+s+"/"+d+" "+n.font.value,h=n.color.value,v=n.outline.value,x=parseInt(n.outlineWidth.value,10);return new i.a({textAlign:""==o?void 0:o,textBaseline:l,font:B,text:E(e,t,n),fill:new a.a({color:h}),stroke:new m.a({color:v,width:x}),offsetX:u,offsetY:g,placement:c,maxAngle:y,overflow:p,rotation:w})};function I(e,t){return new d.c({stroke:new m.a({color:"blue",width:1}),fill:new a.a({color:"rgba(0, 0, 255, 0.1)"}),text:w(e,t,p.polygons)})}var B=new c.a({source:new g.a({url:"data/geojson/polygon-samples.geojson",format:new o.a}),style:I});function h(e,t){return new d.c({stroke:new m.a({color:"green",width:2}),text:w(e,t,p.lines)})}var v=new c.a({source:new g.a({url:"data/geojson/line-samples.geojson",format:new o.a}),style:h});function x(e,t){return new d.c({image:new u.a({radius:10,fill:new a.a({color:"rgba(255, 0, 0, 0.1)"}),stroke:new m.a({color:"red",width:1})}),text:w(e,t,p.points)})}var b=new c.a({source:new g.a({url:"data/geojson/point-samples.geojson",format:new o.a}),style:x});new l.a({layers:[new y.a({source:new r.b}),B,v,b],target:"map",view:new s.a({center:[-8161939,6095025],zoom:8})});function k(e,t,n){if(e.length>t){for(var o=t;o>0&&" "!=e[o]&&"-"!=e[o];)o--;if(o>0)return("-"==e.substring(o,o+1)?e.substring(0,o+1):e.substring(0,o))+n+k(e.substring(o+1),t,n)}return e}document.getElementById("refresh-points").addEventListener("click",(function(){b.setStyle(x)})),document.getElementById("refresh-lines").addEventListener("click",(function(){v.setStyle(h)})),document.getElementById("refresh-polygons").addEventListener("click",(function(){B.setStyle(I)})),String.prototype.trunc=String.prototype.trunc||function(e){return this.length>e?this.substr(0,e-1)+"...":this.substr(0)}}},[[391,0]]]);
//# sourceMappingURL=vector-labels.js.map