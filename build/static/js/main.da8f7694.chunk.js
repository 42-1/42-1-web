(this.webpackJsonpshopping_421=this.webpackJsonpshopping_421||[]).push([[0],{225:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n(0),c=n.n(a),s=n(25),i=n.n(s),o=(n(136),n(32)),l=n.n(o),u=n(47),d=n(66),p=n(229),j=n(227),h=n(236),b=n(232),x=n(228),g=n(62),O=n(35),m=n(230),f=n(231),y=n(233),v=n(234),w=n(137).default,k="https://core.stupidarnob.com/xxyyzz",T={ax_get:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.path,r=k+""+n,e.next=4,w.get(r);case 4:return e.next=6,e.sent.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ax_post:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.path,r=t.params,a=k+""+n,e.next=4,w.post(a,r);case 4:return e.next=6,e.sent.data;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},S=n(61),C=n(235),F=n(237);var P=function(e){var t=e.pageView,n=Object(a.useState)(!1),c=Object(d.a)(n,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){console.log(t)})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S.a,{type:"primary",icon:Object(r.jsx)(F.a,{}),onClick:function(){i(!0)}}),Object(r.jsx)(C.a,{placement:"right",closable:!0,onClose:function(){i(!1)},visible:s,width:"95%",children:Object(r.jsx)("iframe",{src:t,width:"100%",height:"90%",frameBorder:"0",style:{marginTop:40}})})]})},_=p.a.Meta;var z=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!0),i=Object(d.a)(s,2),o=i[0],w=i[1];function k(){return(k=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),c([]),e.next=4,T.ax_get({path:"/list"});case 4:(t=e.sent).status&&c(t.return),w(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){k.apply(this,arguments)}()}),[]),Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(j.a,{title:"42-1",style:{borderBottom:"1px solid black"}}),Object(r.jsx)(h.b,{}),Object(r.jsx)("div",{style:{margin:20},children:Object(r.jsx)(b.a,{active:!0,loading:o})}),!o&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("center",{children:Object(r.jsx)(x.a,{layout:"vertical",style:{padding:10},children:Object(r.jsxs)(g.a,{gutter:16,style:{maxWidth:1600},children:[Object(r.jsx)(O.a,{xs:24,sm:24,md:12,lg:12,xl:12,children:Object(r.jsx)(x.a.Item,{label:"Search",children:Object(r.jsx)(m.a,{placeholder:"Search Product Name",style:{width:"100%"},onChange:function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.ax_post({path:"/search",params:{type:"search",name:t.target.value}});case 2:n=e.sent,c(n.return);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),size:"large"})})}),Object(r.jsx)(O.a,{xs:24,sm:24,md:12,lg:12,xl:12,children:Object(r.jsx)(x.a.Item,{label:"Product Type",children:Object(r.jsxs)(f.a,{size:"large",placeholder:"Select Product Type",style:{width:"100%"},onChange:function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y.b.destroy(),y.b.loading("Please wait...",0),c([]),w(!0),e.next=6,T.ax_post({path:"/search",params:{type:"product",name:t}});case 6:n=e.sent,y.b.destroy(),y.b.destroy(),c(n.return),w(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(r.jsx)(f.a.Option,{value:"headphone",children:"Headphone"},"1"),Object(r.jsx)(f.a.Option,{value:"keyboards",children:"Keyboards"},"2"),Object(r.jsx)(f.a.Option,{value:"micro-sd-card",children:"Micro/SD card"},"3"),Object(r.jsx)(f.a.Option,{value:"microphone",children:"Microphone"},"4")]})})})]})})}),0===n.length&&Object(r.jsx)(v.a,{status:"warning",title:"No Product Found"}),Object(r.jsx)("center",{children:Object(r.jsx)(g.a,{gutter:24,style:{marginLeft:0,marginRight:0,paddingTop:10,maxWidth:1600},hidden:0===n.length,children:n.map((function(e){return Object(r.jsx)(O.a,{xs:24,sm:12,md:12,lg:8,xl:4,style:{paddingTop:10},children:Object(r.jsxs)(p.a,{title:Object(r.jsx)("img",{src:"https://www.startech.com.bd/image/catalog/logo.png",style:{height:40,width:70,float:"left"}}),style:{minHeight:550,marginTop:20},cover:Object(r.jsx)("img",{style:{padding:8,width:180,height:180},alt:e.name,src:e.img,onClick:function(){return window.open(e.url,"_blank")}}),extra:[Object(r.jsx)(P,{pageView:e.url})],children:[Object(r.jsx)("b",{children:e.name}),Object(r.jsx)(_,{style:{marginTop:5},description:e.details}),Object(r.jsx)("div",{style:{position:"absolute",right:0,bottom:0,width:"100%",padding:"10px 16px",background:"#cdcdcd",textAlign:"right",borderTop:"1px solid black"},children:Object(r.jsx)("h3",{children:Object(r.jsxs)("b",{children:["Price: ",e.price]})})})]})})}))})})]})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,238)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(z,{})}),document.getElementById("root")),B()}},[[225,1,2]]]);
//# sourceMappingURL=main.da8f7694.chunk.js.map