(function(t){function e(e){for(var a,r,c=e[0],l=e[1],s=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),i=n.n(a);i.a},"46f9":function(t,e,n){"use strict";var a=n("76cc"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.tools?n("div",{staticClass:"card-tools"},[n("center",[n("button",{staticClass:"button add-marker",style:{"background-color":t.addMode?"#66f13d":"#3d66f1"},on:{click:function(e){t.addMode=!0}}},[t._v(t._s(t.addMode?"Click on the map":"🞧 Add marker"))]),n("br"),n("br"),n("button",{staticClass:"button weather add-marker",style:{"background-color":t.addWeather?"#6f163d":"#6d63f1"},on:{click:function(e){t.addWeather=!t.addWeather}}},[t._v(t._s(t.addWeather?"Weather marker":"★ Icon Marker"))])]),n("hr"),n("div",{staticClass:"batch-cluster"},[n("label",[t._v("Add")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.batchCount,expression:"batchCount"}],attrs:{type:"number",min:"0",max:"100"},domProps:{value:t.batchCount},on:{input:function(e){e.target.composing||(t.batchCount=e.target.value)}}}),n("label",[t._v("random markers")]),n("button",{on:{click:t.addbatch}},[t._v("🞧")])]),n("hr"),n("table",{staticClass:"alignment"},[n("tr",[n("td",{attrs:{colspan:"3"}},[n("center",[t._v("Marker alignment : "+t._s(t.alignment))])],1)]),n("tr",[n("td",[n("button",{on:{click:function(e){t.alignment="topleft"}}},[t._v("topleft")])]),n("td",[n("button",{on:{click:function(e){t.alignment="top"}}},[t._v("top")])]),n("td",[n("button",{on:{click:function(e){t.alignment="topright"}}},[t._v("topright")])])]),n("tr",[n("td",[n("button",{on:{click:function(e){t.alignment="left"}}},[t._v("left")])]),n("td",[n("button",{on:{click:function(e){t.alignment="center"}}},[t._v("center")])]),n("td",[n("button",{on:{click:function(e){t.alignment="right"}}},[t._v("right")])])]),n("tr",[n("td",[n("button",{on:{click:function(e){t.alignment="bottomleft"}}},[t._v("bottomleft")])]),n("td",[n("button",{on:{click:function(e){t.alignment="bottom"}}},[t._v("bottom")])]),n("td",[n("button",{on:{click:function(e){t.alignment="bottomright"}}},[t._v("bottomright")])])])]),n("hr"),n("div",{staticClass:"animate-panel"},[n("center",[n("label",[n("a",{attrs:{href:"https://daneden.github.io/animate.css/"}},[t._v("Animate.css")]),t._v(" type\n              ")]),n("br"),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedAnimation,expression:"selectedAnimation"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedAnimation=e.target.multiple?n:n[0]}}},t._l(t.animations,(function(e){return n("option",{key:e},[t._v(t._s(e))])})),0),n("br"),n("br"),n("label",[t._v("infinite animation")]),n("button",{on:{click:function(e){t.infinite=!t.infinite}}},[t.infinite?n("span",[t._v("ON")]):n("span",[t._v("OFF")])])])],1),n("hr"),n("div",{staticClass:"live-editor"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.html,expression:"html"}],domProps:{value:t.html},on:{input:function(e){e.target.composing||(t.html=e.target.value)}}})]),n("hr"),n("center",[n("button",{staticClass:"hide-tool",on:{click:function(e){return t.displayTools(!1)}}},[t._v("hide tools")])])],1):n("button",{staticClass:"show-tool",on:{click:function(e){return t.displayTools(!0)}}},[t._v("show tools")]),n("vue-gmap",{staticStyle:{width:"100%"},attrs:{center:t.markerCenter,zoom:10},on:{click:t.onMapClick}},[n("cluster",t._l(t.markers,(function(e,a){return n("gmap-custom-marker",{key:e._id,attrs:{delayRepaint:e.weather?250:0,marker:e,alignment:e.alignment},nativeOn:{click:function(e){return t.deleteMarker(a)}}},[e.weather?n("weather",{attrs:{coords:e}}):n("img",{staticClass:"icon-sm",class:t.animation,attrs:{title:JSON.stringify(e),src:t.src,height:"45"}})],1)})),1),n("cluster",t._l(t.batchMarkers,(function(t,e){return n("gmap-custom-marker",{key:e,attrs:{marker:t}},[n("svg",{staticStyle:{"enable-background":"new 0 0 376.277 376.277"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 376.277 376.277","xml:space":"preserve",width:"50",height:"50"}},[n("g",[n("path",{staticStyle:{fill:"#B27214"},attrs:{d:"M339.114,274.035c26.58-2.67,40.36,30.68,19.52,47.38c-4.7,3.77-9.56,7.34-14.57,10.71   L339.114,274.035z"}}),n("path",{staticStyle:{fill:"#B27214"},attrs:{d:"M54.864,17.645c16.7-20.84,50.05-7.06,47.38,19.51c-0.73,7.19-1.1,14.48-1.1,21.86l-61.21-20.26   C44.494,31.415,49.484,24.365,54.864,17.645z"}}),n("path",{staticStyle:{fill:"#F7B239"},attrs:{d:"M339.114,274.035l4.95,58.09c-34.42,23.15-75.86,36.65-120.45,36.65   c-119.69,0-216.11-96.42-216.11-216.11c0-41.81,11.87-80.84,32.43-113.91l61.21,20.26c0,119.27,96.84,216.12,216.12,216.11   C324.644,275.125,331.934,274.755,339.114,274.035z"}}),n("path",{staticStyle:{fill:"#E09B2D"},attrs:{d:"M54.002,152.666c0-36.481,9.039-70.844,25-100.979L39.934,38.756   c-20.56,33.07-32.43,72.1-32.43,113.91c0,119.69,96.42,216.11,216.11,216.11c7.843,0,15.586-0.426,23.214-1.241   C138.162,355.984,54.002,264.486,54.002,152.666z"}}),n("path",{staticStyle:{fill:"#FFFFFF"},attrs:{d:"M250.505,296.224c-0.69,0-1.393-0.096-2.089-0.297c-39.542-11.444-76.026-33.077-105.509-62.56   c-33.14-33.14-56.039-74.548-66.222-119.749c-0.91-4.041,1.628-8.055,5.668-8.965c4.042-0.909,8.055,1.627,8.965,5.668   c9.559,42.428,31.065,81.309,62.195,112.439c27.697,27.697,61.956,48.015,99.072,58.757c3.979,1.151,6.271,5.31,5.119,9.289   C256.756,294.089,253.758,296.224,250.505,296.224z"}}),n("circle",{staticStyle:{fill:"#FFFFFF"},attrs:{cx:"78.567",cy:"79.428",r:"7.5"}}),n("g",[n("path",{staticStyle:{fill:"#333333"},attrs:{d:"M373.635,287.714c-5.884-14.403-19.741-22.705-35.267-21.138c-6.962,0.7-14.063,1.054-21.107,1.054    c-55.683,0-108.06-21.71-147.482-61.133c-39.423-39.423-61.133-91.8-61.132-147.483c0-7.04,0.355-14.14,1.055-21.105    c1.562-15.54-6.736-29.383-21.139-35.266C74.239-3.208,58.714,0.842,49.007,12.958C17.405,52.404,0,102.019,0,152.664    c0,59.889,23.215,116.087,65.37,158.242c42.154,42.155,98.352,65.371,158.241,65.371c50.646,0,100.262-17.404,139.708-49.007    C375.436,317.563,379.485,302.036,373.635,287.714z M60.713,22.337c4.288-5.352,9.65-7.301,14.631-7.301    c2.706,0,5.299,0.576,7.546,1.493c6.447,2.634,12.955,9.239,11.886,19.88c-0.409,4.069-0.697,8.182-0.885,12.303L51.535,34.694    C54.432,30.49,57.486,26.366,60.713,22.337z M75.977,300.299C36.655,260.978,15,208.547,15,152.664    c0-37.508,9.681-73.26,28.22-104.922l50.493,16.711c1.368,57.654,24.49,111.68,65.459,152.65    c42.256,42.256,98.399,65.527,158.089,65.526c5,0,10.024-0.183,15.018-0.514l3.932,46.219    c-33.51,21.614-72.027,32.942-112.599,32.942C167.729,361.277,115.298,339.621,75.977,300.299z M353.94,315.564    c-1.168,0.936-2.344,1.858-3.527,2.766l-3.085-36.257c6.339,1.738,10.469,6.537,12.42,11.313    C362.355,299.769,362.199,308.947,353.94,315.564z"}}),n("path",{staticStyle:{fill:"#333333"},attrs:{d:"M283.778,317.604c-5.679,0.463-11.464,0.698-17.192,0.698c-55.882,0-108.313-21.656-147.635-60.978    c-39.321-39.322-60.976-91.753-60.976-147.636c0-8.267,0.488-16.59,1.451-24.74c0.486-4.113-2.455-7.842-6.568-8.328    c-4.111-0.483-7.842,2.455-8.328,6.568c-1.032,8.731-1.555,17.647-1.555,26.5c0,59.889,23.215,116.087,65.37,158.242    s98.353,65.371,158.241,65.371c6.135,0,12.329-0.251,18.413-0.748c4.128-0.337,7.201-3.957,6.865-8.085    C291.526,320.341,287.903,317.267,283.778,317.604z"}})])])])])})),1),n("gmap-custom-marker",{key:"supermarker",attrs:{alignment:"bottomright",marker:t.markerCenter}},[n("div",{staticClass:"card",on:{click:function(t){return t.stopPropagation()}}},[n("center",[n("h3",[t._v("This is a marker")]),n("p",[t._v("Lat : "+t._s(t.markerCenter.lat)+", Lng : "+t._s(t.markerCenter.lng))])]),n("img",{staticClass:"icon",class:t.animation,attrs:{src:t.src,height:"75"}}),n("div",{staticClass:"input-group"},[n("center",[n("label",[t._v("Set marker image urls")])]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.testText,expression:"testText"}],attrs:{type:"input"},domProps:{value:t.testText},on:{input:function(e){e.target.composing||(t.testText=e.target.value)}}})],1)],1)]),n("gmap-custom-marker",{attrs:{"z-index":t.zA,marker:{lat:50.4272265,lng:2.95}}},[n("div",{staticClass:"zindex zindex-a"},[n("center",[n("p",[t._v("z-index live edit A")]),n("p",[n("b",[t._v(t._s(t.zA))])]),n("button",{on:{click:function(e){t.zA++}}},[t._v("+")]),n("button",{on:{click:function(e){t.zA--}}},[t._v("-")])])],1)]),n("gmap-custom-marker",{attrs:{"z-index":t.zB,marker:{lat:50.4272265,lng:2.8}}},[n("div",{staticClass:"zindex zindex-b"},[n("center",[n("p",[t._v("z-index live edit B")]),n("p",[n("b",[t._v(t._s(t.zB))])]),n("button",{on:{click:function(e){t.zB++}}},[t._v("+")]),n("button",{on:{click:function(e){t.zB--}}},[t._v("-")])])],1)]),n("gmap-custom-marker",{attrs:{alignment:"center",marker:{lat:50.7,lng:3.8}}},[n("div",{staticClass:"live-html",domProps:{innerHTML:t._s(t.html)}})])],1)],1)},o=[],r=n("755e"),c=n("6cee"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data?n("div",{staticClass:"weather-card"},[n("label",[n("b",[t._v(t._s(t.data.name))])]),n("br"),n("img",{attrs:{src:t.icon}}),n("p",[t._v(t._s(t.data.weather[0].description))]),n("p",[n("i",[t._v(t._s(t.data.main.temp.toFixed(0))+"°C")])])]):t._e()},s=[],u=n("bc3a"),d={props:{coords:{type:Object,default:void 0}},data:function(){return{data:void 0}},created:function(){var t=this;Object(u["get"])("https://api.openweathermap.org/data/2.5/weather?lat="+this.coords.latitude+"&lon="+this.coords.longitude+"&APPID=59b0d37a8bb62db251652e421b20342a&units=metric").then((function(e){t.data=e.data}))},computed:{icon:function(){return"http://openweathermap.org/img/w/"+this.data.weather[0].icon+".png"}}},p=d,m=(n("46f9"),n("2877")),f=Object(m["a"])(p,l,s,!1,null,null,null),h=f.exports,g={name:"app",components:{GmapCustomMarker:c["a"],"vue-gmap":r["Map"],Weather:h},data:function(){return{batchCount:10,html:'<center><h2>This is <u>live</u> html marker 🔥</h2></center> <iframe width="330" height="170" src="https://www.youtube.com/embed/RySHDUU2juM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',infinite:!0,selectedAnimation:"",zA:50,zB:51,testText:"",markerCenter:{lat:50.6272265,lng:3.0571581},addWeather:!1,addMode:!1,markers:[],ids:0,alignment:"top",animations:n("d6c6"),batchMarkers:[],tools:!0}},computed:{animation:function(){var t=this.infinite?"infinite":"";return"animated ".concat(t," ").concat(this.selectedAnimation)},src:function(){return this.testText?this.testText:"https://vuejs.org/images/logo.png"}},methods:{displayTools:function(t){this.tools=t},deleteMarker:function(t){this.markers.splice(t,1)},onMapClick:function(t){this.addMode&&(this.markers.push({_id:this.ids++,latitude:t.latLng.lat(),longitude:t.latLng.lng(),weather:this.addWeather,alignment:this.alignment}),this.addMode=!1)},addbatch:function(){this.batchMarkers=[];for(var t=0;t<this.batchCount;t++)this.batchMarkers.push({lat:"48.1".concat(String(parseInt(1e5*Math.random()))),lng:"-1.7".concat(String(parseInt(1e5*Math.random())))});this.markerCenter={lat:48.1030572,lng:-1.7065389}}}},b=g,v=(n("034f"),Object(m["a"])(b,i,o,!1,null,null,null)),k=v.exports,_=n("ae66"),w=n.n(_);a["a"].component("cluster",w.a),a["a"].use(r,{load:{key:"AIzaSyDRkzXmElwxca2nebkU3B62tfcxPqhwp_4",v:"3.26"},installComponents:!1}),console.log("key -> ,","AIzaSyDRkzXmElwxca2nebkU3B62tfcxPqhwp_4"),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(k)}}).$mount("#app")},"64a9":function(t,e,n){},"76cc":function(t,e,n){},d6c6:function(t){t.exports=JSON.parse('["bounce","flash","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceOut","bounceOutDown","bounceOutLeft","bounceOutRight","bounceOutUp","fadeIn","fadeInDown","fadeInDownBig","fadeInLeft","fadeInLeftBig","fadeInRight","fadeInRightBig","fadeInUp","fadeInUpBig","fadeOut","fadeOutDown","fadeOutDownBig","fadeOutLeft","fadeOutLeftBig","fadeOutRight","fadeOutRightBig","fadeOutUp","fadeOutUpBig","flipInX","flipInY","flipOutX","flipOutY","lightSpeedIn","lightSpeedOut","rotateIn","rotateInDownLeft","rotateInDownRight","rotateInUpLeft","rotateInUpRight","rotateOut","rotateOutDownLeft","rotateOutDownRight","rotateOutUpLeft","rotateOutUpRight","hinge","jackInTheBox","rollIn","rollOut","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp","zoomOut","zoomOutDown","zoomOutLeft","zoomOutRight","zoomOutUp","slideInDown","slideInLeft","slideInRight","slideInUp","slideOutDown","slideOutLeft","slideOutRight","slideOutUp"]')}});
//# sourceMappingURL=app.c4bcc396.js.map