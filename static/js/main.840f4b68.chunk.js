(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{14:function(e,t,n){e.exports=n(64)},58:function(e,t,n){},62:function(e,t,n){var a={"./page1.js":[65,3],"./page2.js":[66,4],"./page3.js":[67,0,5],"./page4.js":[68,0,6],"./page5.js":[69,0,7],"./page6.js":[63,1],"./page7.js":[70,8],"./page8.js":[71,9]};function r(e){var t=a[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id=62,e.exports=r},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=n(4),s=n(8),i=n.n(s),u=n(9),p=n(10),m=n(12),f=n(11),h=n(13),E=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={error:null,errorInfo:null},n}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"refresh",value:function(){localStorage.clear(),window.location.reload()}},{key:"render",value:function(){return this.state.errorInfo?this.props.render?this.props.render:r.a.createElement("div",{className:"error-boundary"},r.a.createElement("h2",null,"Error in the app."),r.a.createElement("button",{onClick:this.refresh},"Refresh"),r.a.createElement("h3",null,"If you know what you are looking for, you can check out what went wrong."),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(a.Component),g=(n(58),n(60),Array(8).fill(0).map(function(e,t){return Object(a.lazy)(function(){return n(62)("./page".concat(t+1,".js"))})})),d=function(e){return r.a.createElement(l.a,Object.assign({},e,{getProps:function(e){return{className:e.isCurrent?"active":""}}}))};var b=document.getElementById("root");c.a.render(r.a.createElement(function(){var e=g[0];return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"nav"},r.a.createElement(d,{to:"/"},"About Me"),r.a.createElement(d,{to:"/page2"},"import()"),r.a.createElement(d,{to:"/page3"},"React.lazy"),r.a.createElement(d,{to:"/page4"},"<Suspense>"),r.a.createElement(d,{to:"/page5",onMouseEnter:function(){return n.e(1).then(n.bind(null,63))}},"All Together"),r.a.createElement(d,{to:"/page6"},"Comparison"),r.a.createElement(d,{to:"/page7"},"Considerations"),r.a.createElement(d,{to:"/page8"},"Thanks")),r.a.createElement("div",{className:"page"},r.a.createElement(E,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(i.a,{name:"folding-cube",color:"purple",fadeIn:"none",className:"big-spinner"})},r.a.createElement(l.b,null,r.a.createElement(e,{path:"/"}),g.map(function(e,t){return r.a.createElement(e,{key:"page-".concat(t),path:"/page".concat(t+1)})}))))))},null),b)}},[[14,11,10]]]);
//# sourceMappingURL=main.840f4b68.chunk.js.map