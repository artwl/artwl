(window.webpackJsonp=window.webpackJsonp||[]).push([["XrShape"],{WV33:function(e,t,r){"use strict";r.r(t),r.d(t,"XrShape",(function(){return f}));r("4SWW"),r("LnO1"),r("DB+v"),r("T7D0"),r("rmZQ");var i=r("znL5"),o=(r("zpx+"),r("0rpg"),r("3yYM"),r("yP/C")),a=r("h7sq"),s=r("tS02"),n=r("/XES"),c=r("ztBH"),h=r("Fayl"),p=r("D57K"),d=r("/DY2"),l=r("fqDt"),u=r.n(l),b=r("RWos");function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(i.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){return"".concat(e,"_svg")},f=function(e){function t(){return Object(a.a)(this,t),Object(n.a)(this,Object(c.a)(t).apply(this,arguments))}var r;return Object(h.a)(t,e),Object(s.a)(t,[{key:"jump",value:(r=Object(o.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("url"!==(t=this.data.props.link).linkType){e.next=7;break}return e.next=4,Object(b.replaceMacroParam)(t.url);case 4:t.url=e.sent,e.next=13;break;case 7:return e.next=9,Object(b.replaceMacroParam)(t.scheme);case 9:return t.scheme=e.sent,e.next=12,Object(b.replaceMacroParam)(t.url);case 12:t.url=e.sent;case 13:this.jumpLink(t);case 14:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"renderImageShape",value:function(){var e=this.$createElement,t=this.data.props,r=t.viewBox,i=t.borderColor,o=t.borderWidth,a=this.data.style||{},s=a.width,n=void 0===s?100:s,c=a.height,h=void 0===c?100:c;return e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:r,preserveAspectRatio:"none"},style:{width:this.$r(Number(n)),height:this.$r(Number(h)),stroke:this.normalizeColor(i.color),strokeWidth:this.$r(o)},on:{click:this.jump}},[e("defs",[e("pattern",{attrs:{id:v(this.data.id),x:"0",y:"0",patternUnits:"userSpaceOnUse",height:"100%",width:"100%"}},[!this.$isServer&&e("image",{attrs:m({},this.processedImageAttributes)})])]),e("g",{domProps:{innerHTML:this.processedImageShape}})])}},{key:"renderCustomShape",value:function(){var e=this.$createElement,t=this.data.props,r=t.viewBox,i=t.borderColor,o=t.borderWidth,a=t.bgColor,s=this.data.style||{},n=s.width,c=void 0===n?100:n,h=s.height,p=void 0===h?100:h;return e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:r,preserveAspectRatio:"none"},style:{width:this.$r(Number(c)),height:this.$r(Number(p)),fill:this.normalizeColor(a.color),stroke:this.normalizeColor(i.color),strokeWidth:this.$r(o)},domProps:{innerHTML:this.processedCustomShape}})}},{key:"renderSpecialShape",value:function(){var e=this.$createElement,t=this.data.props,r=t.bgColor,i=t.borderColor,o=t.borderWidth,a=this.data.style||{},s=a.width,n=void 0===s?100:s,c=a.height,h=void 0===c?100:c;return e("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(n," ").concat(h)},style:{width:this.$r(Number(n)),height:this.$r(Number(h)),fill:this.normalizeColor(r.color),stroke:this.normalizeColor(i.color),strokeWidth:this.$r(o)}},[this.specialShape])}},{key:"render",value:function(){var e=arguments[0];return e("div",{class:u.a["brick-shape"],style:{lineHeight:0}},["custom"===this.data.props.type?this.renderCustomShape():"image"===this.data.props.type?this.renderImageShape():this.renderSpecialShape()])}},{key:"specialShape",get:function(){var e=this.$createElement,t=this.data.props,r=t.type,i=t.borderRadius,o=this.data.style||{},a=o.width,s=void 0===a?100:a,n=o.height,c=void 0===n?100:n;switch(s=Number(s),c=Number(c),r){case"rect":return[e("rect",{attrs:{x:"0",y:"0",width:s,height:c,rx:i}})];case"arrow":return[e("path",{attrs:{d:"M0,".concat(.3*c," H").concat(s-c," V0 L").concat(s,",").concat(c/2," L").concat(s-c,",").concat(c," V").concat(.7*c," H0 z")}})];default:throw new Error("wrong_type_of_xrshape")}}},{key:"processedCustomShape",get:function(){return this.data.props.customSvg.replace(/<(rect|circle|ellipse|polygon|path)/g,'<$1 vector-effect="non-scaling-stroke"')}},{key:"processedImageShape",get:function(){var e=this.data.id;return this.processedCustomShape.replace('fill="url(#image)"','fill="url(#'.concat(v(e),')"'))}},{key:"processedImageAttributes",get:function(){var e,t=this.data.props,r=t.viewBox,o=t.bgImage,a=t.bgPosition,s=a.x,n=a.y,c=a.width,h=a.height,p=o.width,d=o.height,l=r.split(" "),u=parseInt(l[2],10)/parseInt(l[3],10),b=1,g=1,m=0,v=0;if(p&&d){var f=p/d;f<u?v=100*-((g=u/f)-1)/2:m=100*-((b=f/u)-1)/2}return e={x:(s+m).toFixed(2)+"%",y:(n+v).toFixed(2)+"%",height:(100*g).toFixed(2)+"%",width:(100*b).toFixed(2)+"%",transform:"scale(".concat(c/100,", ").concat(h/100,")")},Object(i.a)(e,"xlink:href",this.normalizeSrc(o||"//p1-ad.byteimg.com/img/ad-tetris-site/rect_inside~noop.png")),Object(i.a)(e,"preserveAspectRatio","xMidYMid slice"),e}}]),t}(b.FEBaseBrick);p.__decorate([Object(d.Prop)()],f.prototype,"data",void 0),f=p.__decorate([Object(d.Component)({name:"XrShape"})],f)},Y4tZ:function(e,t,r){(t=e.exports=r("JPst")(!1)).push([e.i,".brick-shape_f1a0d div,div.brick-shape_f1a0d{box-sizing:border-box;margin:0;padding:0;border:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-text-size-adjust:none;font-size:.37333333rem;font-family:Arial,sans-serif;line-height:1.5;outline:none}div.brick-shape_f1a0d{height:100%;line-height:0}div.brick-shape_f1a0d svg{overflow:visible}",""]),t.locals={"brick-shape":"brick-shape_f1a0d"}},fqDt:function(e,t,r){var i=r("Y4tZ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,r("DtNa").default)("15d7c02b",i,!0,{})}}]);