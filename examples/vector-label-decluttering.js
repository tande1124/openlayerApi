(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{390:function(e,n,o){"use strict";o.r(n);var t=o(30),a=o(3),r=o(19),w=o(10),s=o(2),c=o(11),i=o(67),l=o(21),f=o(15),u=new a.a({target:"map",view:new s.a({center:[0,0],zoom:1})}),d=new c.c({text:new i.a({font:"12px Calibri,sans-serif",overflow:!0,fill:new l.a({color:"#000"}),stroke:new f.a({color:"#fff",width:3})})}),p=[new c.c({fill:new l.a({color:"rgba(255, 255, 255, 0.6)"}),stroke:new f.a({color:"#319FD3",width:1})}),d],g=new r.a({source:new w.a({url:"data/geojson/countries.geojson",format:new t.a}),style:function(e){return d.getText().setText(e.get("name")),p},declutter:!0});u.addLayer(g)}},[[390,0]]]);
//# sourceMappingURL=vector-label-decluttering.js.map