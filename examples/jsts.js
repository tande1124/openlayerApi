(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{304:function(e,a,n){"use strict";n.r(a);var t=n(30),r=n(136),o=n(3),s=n(9),w=n(10),c=n(2),u=n(25),i=n(36),d=n(32),f=n(73),g=n(72),j=n(87),b=n(19),m=n(5),p=n(4),v=new w.a;fetch("data/geojson/roads-seoul.geojson").then((function(e){return e.json()})).then((function(e){var a=(new t.a).readFeatures(e,{featureProjection:"EPSG:3857"}),n=new jsts.io.OL3Parser;n.inject(u.a,i.a,r.a,d.b,f.a,g.a,j.a);for(var o=0;o<a.length;o++){var s=a[o],w=n.read(s.getGeometry()).buffer(40);s.setGeometry(n.write(w))}v.addFeatures(a)}));var h=new b.a({source:v}),l=new m.a({source:new s.b});new o.a({layers:[l,h],target:document.getElementById("map"),view:new c.a({center:Object(p.g)([126.979293,37.528787]),zoom:15})})}},[[304,0]]]);
//# sourceMappingURL=jsts.js.map