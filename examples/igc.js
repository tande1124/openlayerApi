(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{299:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n(184),o=n(3),i=n(9),s=n(10),l=n(2),c=n(11),u=n(15),d=n(48),g=n(21),w=n(25),m=n(36),p=n(19),v=n(5),f=n(50),h={"Clement Latour":"rgba(0, 0, 255, 0.7)","Damien de Baesnt":"rgba(0, 215, 255, 0.7)","Sylvain Dhonneur":"rgba(0, 165, 255, 0.7)","Tom Payne":"rgba(0, 255, 255, 0.7)","Ulrich Prinz":"rgba(0, 215, 255, 0.7)"},y={},b=new s.a,C=["data/igc/Clement-Latour.igc","data/igc/Damien-de-Baenst.igc","data/igc/Sylvain-Dhonneur.igc","data/igc/Tom-Payne.igc","data/igc/Ulrich-Prinz.igc"];function T(e,t){var n=new XMLHttpRequest;n.open("GET",e),n.onload=function(){t(n.responseText)},n.send()}for(var L=new r.a,P=0;P<C.length;++P)T(C[P],(function(e){var t=L.readFeatures(e,{featureProjection:"EPSG:3857"});b.addFeatures(t)}));var E={start:1/0,stop:-1/0,duration:0};b.on("addfeature",(function(e){var t=e.feature.getGeometry();E.start=Math.min(E.start,t.getFirstCoordinate()[2]),E.stop=Math.max(E.stop,t.getLastCoordinate()[2]),E.duration=E.stop-E.start}));var G=new p.a({source:b,style:function(e){var t=h[e.get("PLT")],n=y[t];return n||(n=new c.c({stroke:new u.a({color:t,width:3})}),y[t]=n),n}}),k=new o.a({layers:[new v.a({source:new i.b({attributions:['All maps © <a href="https://www.opencyclemap.org/">OpenCycleMap</a>',i.a],url:"https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71"})}),G],target:"map",view:new l.a({center:[703365.7089403362,5714629.865071137],zoom:9})}),M=null,F=null,S=function(e){var t=b.getClosestFeatureToCoordinate(e),n=document.getElementById("info");if(null===t)M=null,F=null,n.innerHTML="&nbsp;";else{var a=t.getGeometry().getClosestPoint(e);null===M?M=new w.a(a):M.setCoordinates(a);var r=new Date(1e3*a[2]);n.innerHTML=t.get("PLT")+" ("+r.toUTCString()+")";var o=[e,[a[0],a[1]]];null===F?F=new m.a(o):F.setCoordinates(o)}k.render()};k.on("pointermove",(function(e){if(!e.dragging){var t=k.getEventCoordinate(e.originalEvent);S(t)}})),k.on("click",(function(e){S(e.coordinate)}));var D=new u.a({color:"rgba(255,0,0,0.9)",width:1}),z=new c.c({stroke:D,image:new d.a({radius:5,fill:null,stroke:D})});G.on("postrender",(function(e){var t=Object(f.b)(e);t.setStyle(z),null!==M&&t.drawGeometry(M),null!==F&&t.drawGeometry(F)}));var B=new p.a({source:new s.a,map:k,style:new c.c({image:new d.a({radius:5,fill:new g.a({color:"rgba(255,0,0,0.9)"})})})});document.getElementById("time").addEventListener("input",(function(){var e=parseInt(this.value,10)/100,t=E.start+E.duration*e;b.forEachFeature((function(e){var n=e.getGeometry().getCoordinateAtM(t,!0),r=e.get("highlight");void 0===r?(r=new a.a(new w.a(n)),e.set("highlight",r),B.getSource().addFeature(r)):r.getGeometry().setCoordinates(n)})),k.render()}))}},[[299,0]]]);
//# sourceMappingURL=igc.js.map