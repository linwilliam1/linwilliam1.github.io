(function(t){function a(a){for(var s,n,i=a[0],l=a[1],c=a[2],u=0,f=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&f.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(a);while(f.length)f.shift()();return o.push.apply(o,c||[]),e()}function e(){for(var t,a=0;a<o.length;a++){for(var e=o[a],s=!0,i=1;i<e.length;i++){var l=e[i];0!==r[l]&&(s=!1)}s&&(o.splice(a--,1),t=n(n.s=e[0]))}return t}var s={},r={app:0},o=[];function n(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=t,n.c=s,n.d=function(t,a,e){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)n.d(e,s,function(a){return t[a]}.bind(null,s));return e},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/mychart/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=a,i=i.slice();for(var c=0;c<i.length;c++)a(i[c]);var d=l;o.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"095a":function(t){t.exports=JSON.parse("{}")},"21bb":function(t,a,e){"use strict";var s=e("2dad"),r=e.n(s);r.a},"2dad":function(t,a,e){},"394e":function(t){t.exports=JSON.parse('[{"id":1,"classroom":30801,"date":"2020-04-01","use_total_time":129.496},{"id":2,"classroom":30802,"date":"2020-04-01","use_total_time":215.426},{"id":3,"classroom":30803,"date":"2020-04-01","use_total_time":164.274},{"id":4,"classroom":30801,"date":"2020-04-06","use_total_time":52.267},{"id":5,"classroom":30802,"date":"2020-04-06","use_total_time":247.359},{"id":6,"classroom":30803,"date":"2020-04-06","use_total_time":207.068},{"id":7,"classroom":30801,"date":"2020-04-07","use_total_time":177.273},{"id":8,"classroom":30802,"date":"2020-04-07","use_total_time":251.906},{"id":9,"classroom":30803,"date":"2020-04-07","use_total_time":195.168},{"id":10,"classroom":30801,"date":"2020-04-08","use_total_time":13.843},{"id":11,"classroom":30802,"date":"2020-04-08","use_total_time":208.027},{"id":12,"classroom":30803,"date":"2020-04-08","use_total_time":168.347},{"id":13,"classroom":30801,"date":"2020-04-09","use_total_time":177.978},{"id":14,"classroom":30802,"date":"2020-04-09","use_total_time":297.447},{"id":15,"classroom":30803,"date":"2020-04-09","use_total_time":80.073},{"id":16,"classroom":30801,"date":"2020-04-10","use_total_time":88.254},{"id":17,"classroom":30802,"date":"2020-04-10","use_total_time":327.83},{"id":18,"classroom":30803,"date":"2020-04-10","use_total_time":271.38},{"id":21,"classroom":30801,"date":"2020-04-13","use_total_time":78.654},{"id":22,"classroom":30802,"date":"2020-04-13","use_total_time":228.05},{"id":23,"classroom":30803,"date":"2020-04-13","use_total_time":297.668}]')},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var a=o(t);return e(a)}function o(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=o,t.exports=r,r.id="4678"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),r=e("bc3a"),o=e.n(r),n=e("a7fe"),i=e.n(n),l=e("5f5b"),c=e("b1e0"),d=e("c1df"),u=e.n(d),f=e("1321"),m=e.n(f),b=(e("4989"),e("1157"),e("f9e3"),e("2dd8"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)}),p=[],h=(e("5c0b"),e("2877")),v={},g=Object(h["a"])(v,b,p,!1,null,null,null),j=g.exports,_=e("9483");Object(_["a"])("".concat("/mychart/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});e("96cf");var x,y,w,C,k,D,S,z,M=e("1da1"),P=e("8c4f"),O=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container-fluid"},[e("loading",{attrs:{active:t.isLoading,"can-cancel":!0,"is-full-page":!0},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"Chart__list row no-gutters mx-5"},[t._m(0),e("div",{staticClass:"col-xl-12 col-12 d-flex"},[e("b-card",{staticClass:"text-center w-100 m-5 bg-light"},[e("div",{staticClass:"d-flex flex-column flex-fill"},[e("div",{staticClass:"d-flex justify-content-start"},[e("div",{staticClass:"form-group justify-content-start align-items-center"},[e("div",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.reset()}}},[t._v(" 重製縮放範圍 ")])]),e("label",{staticClass:"text-nowrap",attrs:{for:"selectClass"}},[t._v("選擇教室：")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.switchClass_line,expression:"switchClass_line"}],staticClass:"form-control",attrs:{name:"selectClass"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.switchClass_line=a.target.multiple?e:e[0]}}},[e("option",{domProps:{value:[!1,!1,!1]}},[t._v("全部")]),e("option",{domProps:{value:[!1,!0,!0]}},[t._v("30801")]),e("option",{domProps:{value:[!0,!1,!0]}},[t._v("30802")]),e("option",{domProps:{value:[!0,!0,!1]}},[t._v("30803")])])])]),e("line2",{attrs:{switchClass:t.switchClass_line}})],1)])],1),e("div",{staticClass:"col-xl-6 col-md-6 col-12"},[e("b-card",{staticClass:"m-5 bg-light"},[e("bar3")],1)],1),e("div",{staticClass:"col-xl-6 col-md-6 col-12"},[e("b-card",{staticClass:"m-5 bg-light"},[e("div",{staticClass:"d-flex flex-column flex-fill"},[e("div",{staticClass:"form-group flex-fill justify-content-start"},[e("label",{attrs:{for:"selectClass"}},[t._v("選擇教室")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.filterData_bar,expression:"filterData_bar"}],staticClass:"form-control",attrs:{name:"selectClass"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.filterData_bar=a.target.multiple?e:e[0]}}},[e("option",{attrs:{selected:""},domProps:{value:{title:"30801",data:t.average}}},[t._v("30801")]),e("option",{domProps:{value:{title:"30802",data:t.average2}}},[t._v("30802")]),e("option",{domProps:{value:{title:"30803",data:t.average3}}},[t._v("30803")])])]),e("bar2",{attrs:{PropsAverage:t.filterData_bar,date_bar:t.date_bar}})],1)])],1),e("div",{staticClass:"col-12 d-flex justify-content-center align-items-center"},[e("b-card",{staticClass:"flex-fill m-5"},[e("tree")],1)],1),e("div",{staticClass:"col-12"},[e("error")],1),e("div",{staticClass:"col-12"})])],1)])},Y=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-12 d-flex justify-content-center align-items-center"},[e("h1",[t._v("圖表DEMO")])])}],A=(e("4de4"),e("d81d"),e("b680"),e("9062")),F=e.n(A),E=(e("e40d"),e("2ef0"),e("99af"),e("1fca")),L=(E["c"].reactiveProp,{extends:E["a"],props:{PropsAverage:Object,date_bar:Array},data:function(){return{date:[]}},mounted:function(){console.log(this.PropsAverage),this.renderChart({labels:this.date_bar,datasets:[{label:this.PropsAverage.title,data:this.PropsAverage.data,backgroundColor:"red"}]},{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"三間教室平均使用時間長條圖",fontFamily:"微軟正黑體",fontSize:30},tooltips:{bodyFontSize:16,titleFontSize:18,callbacks:{label:function(t,a){var e=a.datasets[t.datasetIndex].label||"";e&&(e+=": ");var s=Math.round(100*t.yLabel)/100;return console.log(a.datasets[t.datasetIndex].label),"".concat(e,"平均").concat(s,"小時")}}},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"日期"}}],yAxes:[{scaleLabel:{display:!0,labelString:"平均時數（小時）"}}]}})},watch:{PropsAverage:function(){console.log("以變動"),this.renderChart({labels:this.date_bar,datasets:[{label:this.PropsAverage.title,data:this.PropsAverage.data,backgroundColor:"red"}]},{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"三間教室平均使用時間長條圖",fontFamily:"微軟正黑體",fontSize:30},tooltips:{bodyFontSize:16,titleFontSize:18,callbacks:{label:function(t,a){var e=a.datasets[t.datasetIndex].label||"";e&&(e+=": ");var s=Math.round(100*t.yLabel)/100;return console.log(e),"".concat(e,"平均").concat(s,"小時")}}},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"日期"}}],yAxes:[{scaleLabel:{display:!0,labelString:"平均時數（小時）"}}]}})}}}),$=L,N=Object(h["a"])($,x,y,!1,null,null,null),I=N.exports,R={extends:E["a"],data:function(){return{date:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],average:[],average2:[],average3:[]}},computed:{midatabarchart:{get:function(){return this.$store.state.midatabarchart}}},mounted:function(){var t=this.midatabarchart.filter((function(t){return 30801===t.classroom})),a=this.midatabarchart.filter((function(t){return 30802===t.classroom})),e=this.midatabarchart.filter((function(t){return 30803===t.classroom}));this.average=t.map((function(t){return t.use_average_time})),this.average2=a.map((function(t){return t.use_average_time})),this.average3=e.map((function(t){return t.use_average_time})),console.log(t),this.renderChart({labels:this.date,datasets:[{label:"30801",data:this.average,backgroundColor:"red"},{label:"30802",data:this.average2,backgroundColor:"blue"},{label:"30803",data:this.average3,backgroundColor:"green"}]},{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"所有教室平均使用時間堆疊長條圖",fontFamily:"微軟正黑體",fontSize:30},tooltips:{bodyFontSize:16,titleFontSize:18,callbacks:{label:function(t,a){var e=a.datasets[t.datasetIndex].label||"";e&&(e+=": ");var s=Math.round(100*t.yLabel)/100;return console.log(e),"".concat(e,"平均").concat(s,"小時")}}},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"日期"}}],yAxes:[{scaleLabel:{display:!0,labelString:"平均時數（小時）"}}]}})}},B=R,T=Object(h["a"])(B,w,C,!1,null,null,null),J=T.exports,q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"d-flex justify-content-start align-items-center"},[e("div",[e("select",{directives:[{name:"model",rawName:"v-model",value:t.switchData,expression:"switchData"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.switchData=a.target.multiple?e:e[0]}}},[e("option",{domProps:{value:{options:t.chartOptions2,series:t.data30801}}},[t._v("30801")]),e("option",{domProps:{value:{options:t.chartOptions2,series:t.series2}}},[t._v("30802")]),e("option",{domProps:{value:{options:t.chartOptions2,series:t.data30803}}},[t._v("30803")])])])]),e("apexchart",{attrs:{type:"heatmap",height:"350",options:void 0===t.switchData.options?t.chartOptions2:t.switchData.options,series:void 0===t.switchData.series?t.series2:t.switchData.series}})],1)},H=[],G=(e("4160"),e("159b"),e("095a"),{data:function(){return{switchData:{},series2:[{id:1,name:"一月",data:[]},{id:2,name:"二月",data:[]},{id:3,name:"三月",data:[]},{id:4,name:"四月",data:[]},{id:5,name:"五月",data:[]},{id:6,name:"六月",data:[]},{id:7,name:"七月",data:[]},{id:8,name:"八月",data:[]},{id:9,name:"九月",data:[]},{id:10,name:"十月",data:[]},{id:11,name:"十一月",data:[]},{id:12,name:"十二月",data:[]}],data30801:[{id:1,name:"一月",data:[]},{id:2,name:"二月",data:[]},{id:3,name:"三月",data:[]},{id:4,name:"四月",data:[]},{id:5,name:"五月",data:[]},{id:6,name:"六月",data:[]},{id:7,name:"七月",data:[]},{id:8,name:"八月",data:[]},{id:9,name:"九月",data:[]},{id:10,name:"十月",data:[]},{id:11,name:"十一月",data:[]},{id:12,name:"十二月",data:[]}],data30803:[{id:1,name:"一月",data:[]},{id:2,name:"二月",data:[]},{id:3,name:"三月",data:[]},{id:4,name:"四月",data:[]},{id:5,name:"五月",data:[]},{id:6,name:"六月",data:[]},{id:7,name:"七月",data:[]},{id:8,name:"八月",data:[]},{id:9,name:"九月",data:[]},{id:10,name:"十月",data:[]},{id:11,name:"十一月",data:[]},{id:12,name:"十二月",data:[]}],chartOptions2:{chart:{height:350,type:"heatmap",zoom:{enabled:!1}},dataLabels:{enabled:!1},colors:["#f54242","#f59342","#f5e642","#90f542","#42f599","#42e6f5","#4284f5","#7e42f5","#ce42f5","#f542a4","#f5426c","#42f5e9"],title:{text:"使用總時數 HeatMap"},tooltip:{custom:function(t){var a=t.series,e=t.seriesIndex,s=t.dataPointIndex,r=t.w;return console.log(r.globals.seriesNames[e]),'<div class="arrow_box"><span>'.concat(r.globals.seriesNames[e]).concat(r.globals.seriesX[0][s],"日:總共").concat(a[e][s],"小時</span></div>")}},plotOptions:{heatmap:{reverseNegativeShade:!1,radius:0,enableShades:!0,distributed:!0}},xaxis:{show:!0,position:"bottom",title:{text:"日",style:{fontSize:"15px",fontFamily:"微軟正黑體",fontWeight:600,cssClass:"apexcharts-xaxis-title"}}},yaxis:{show:!0,title:{text:"月",style:{fontSize:"15px",fontFamily:"Helvetica, Arial, sans-serif",fontWeight:600,cssClass:"apexcharts-xaxis-title"}}}}}},created:function(){var t=this;this.data30801.forEach((function(t){for(var a=1;a<13;a+=1)t.data.push({x:a,y:Math.floor(1e3*Math.random())+0})})),this.data30803.forEach((function(t){for(var a=1;a<13;a+=1)t.data.push({x:a,y:Math.floor(1e3*Math.random())+0})})),this.series2.forEach((function(t){for(var a=1;a<=31;a+=1)t.data.push({x:a,y:0})})),this.midatatreemap.forEach((function(t){})),this.series2.forEach((function(a,e){t.midatatreemap.forEach((function(a){if(a.month===e+1){console.log(e);for(var s=1;s<=31;s+=1)a.day===s&&(t.series2[e].data[s]={x:a.day,y:a.use_total_time})}}))}))},mounted:function(){this.switchData={options:this.chartOptions2,series:this.data30801}},computed:{midatatreemap:{get:function(){return this.$store.state.midatatreemap}}}}),U=G,W=Object(h["a"])(U,q,H,!1,null,null,null),X=W.exports,Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex row overflow-auto"},[e("div",{staticClass:"col-xl-6 col-12 flex-column"},[e("b-card",{staticClass:"flex-fill m-5 bg-light"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.dataSwitch,expression:"dataSwitch"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.dataSwitch=a.target.multiple?e:e[0]}}},[e("option",{domProps:{value:t.items2}},[t._v("30801")]),e("option",{domProps:{value:t.items3}},[t._v("30802")]),e("option",{domProps:{value:t.items4}},[t._v("30803")])]),e("b-table",{attrs:{striped:"",hover:"",fields:t.fields,items:t.dataSwitch}})],1)],1),e("div",{staticClass:"col-xl-6 col-12"},[e("b-card",{staticClass:"flex-fill m-5 bg-light"},[e("div",{staticClass:"d-flex flex-fill justify-content-center"},[e("div",[e("b-form-datepicker",{staticClass:"mb-2",attrs:{min:t.minDate,max:t.maxDate},model:{value:t.date1,callback:function(a){t.date1=a},expression:"date1"}})],1),e("div",[e("b-form-datepicker",{staticClass:"mb-2",attrs:{min:t.minDate,max:t.maxDate},model:{value:t.date2,callback:function(a){t.date2=a},expression:"date2"}})],1)]),e("div",{staticClass:"d-flex flex-fill justify-content-center align-items-center"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.dataSwitch2,expression:"dataSwitch2"}],staticClass:"form-control",on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.dataSwitch2=a.target.multiple?e:e[0]}}},[e("option",{domProps:{value:0}},[t._v("全部")]),e("option",{domProps:{value:30801}},[t._v("30801")]),e("option",{domProps:{value:30802}},[t._v("30802")]),e("option",{domProps:{value:30803}},[t._v("30803")])])]),e("b-table",{attrs:{striped:"",hover:"",items:t.totalData_table2,fields:t.fields_total,"per-page":t.perPage,"current-page":t.currentPage}}),e("div",{staticClass:"d-flex flex-fill justify-content-center"},[e("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}})],1)],1)],1)])},K=[],Q={data:function(){return{dataSwitch:[],allError:[],perPage:20,currentPage:1,dataSwitch2:0,fields:[{key:"classroom",label:"教室名稱",sortable:!0},{key:"host",label:"電腦名稱",sortable:!1},{key:"count",label:"錯誤次數",sortable:!0}],fields_total:[{key:"date",label:"日期",sortable:!0},{key:"classroom",label:"教室名稱",sortable:!1},{key:"host",label:"電腦名稱",sortable:!0},{key:"use_total_time",label:"使用時間",sortable:!0},{key:"count",label:"使用次數",sortable:!0},{key:"per_average_time",label:"平均使用時間",sortable:!0}],items2:[],items3:[],items4:[],date1:"",date2:""}},created:function(){var t=this;return Object(M["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.items2=t.midataerrortable.filter((function(t){return 30801===t.classroom})),t.items3=t.midataerrortable.filter((function(t){return 30802===t.classroom})),t.items4=t.midataerrortable.filter((function(t){return 30803===t.classroom}));case 3:case"end":return a.stop()}}),a)})))()},mounted:function(){this.dataSwitch=this.items2,this.date1=this.minDate,this.date2=this.maxDate},computed:{midataerrortable:{get:function(){return this.$store.state.midataerrortable}},totalData_table:{get:function(){return this.$store.state.totalData_table}},rows:function(){return this.totalData_table2.length},totalData_table2:function(){var t=this;return this.totalData_table.filter((function(a){return 0===t.dataSwitch2||a.classroom===t.dataSwitch2?u()(a.date).isBetween(t.date1,t.date2,null,[]):void 0}))},minDate:function(){return u.a.min(this.totalData_table.map((function(t){return u()(t.date)}))).format("YYYY-MM-DD")},maxDate:function(){return u.a.max(this.totalData_table.map((function(t){return u()(t.date)}))).format("YYYY-MM-DD")}}},V=Q,tt=Object(h["a"])(V,Z,K,!1,null,null,null),at=tt.exports,et=(e("f634"),{extends:E["b"],props:{switchClass:Array},data:function(){return{date:[],total:[],total2:[],total3:[]}},mounted:function(){var t=this;this.midatalinechart.forEach((function(a){30801===a.classroom?(t.date.push(u()(new Date(a.date))),t.total.push({y:a.use_total_time.toFixed(2),x:u()(new Date(a.date)).format("YYYY-MM-DD")})):30802===a.classroom?t.total2.push({y:a.use_total_time.toFixed(2),x:u()(new Date(a.date)).format("YYYY-MM-DD")}):30803===a.classroom&&t.total3.push({y:a.use_total_time.toFixed(2),x:u()(new Date(a.date)).format("YYYY-MM-DD")})})),console.log(u.a.min(this.date).format("YYYY-MM-DD")),this.renderChart({datasets:[{label:"30801",data:this.total,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)",hidden:this.switchClass[0]},{label:"30802",data:this.total2,backgroundColor:"transparent",borderColor:"rgba(1, 255, 255, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)",hidden:this.switchClass[1]},{label:"30803",data:this.total3,backgroundColor:"transparent",borderColor:"rgba(1, 116, 0, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)",hidden:this.switchClass[2]}]},{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"三間教室使用總時間折線圖",fontFamily:"微軟正黑體",fontSize:30},tooltips:{bodyFontSize:16,titleFontSize:18,callbacks:{label:function(t,a){var e=a.datasets[t.datasetIndex].label||"";return e&&(e+=": "),e+=Math.round(100*t.yLabel)/100,console.log(e),"".concat(e,"小時")}}},scales:{xAxes:[{type:"time",scaleLabel:{display:!0,labelString:"日期"},time:{unit:"day",displayFormats:{day:"YYYY-M-DD"}}}],yAxes:[{scaleLabel:{display:!0,labelString:"使用總時數（小時）"}}]},elements:{line:{fill:!1,tension:0}},plugins:{zoom:{pan:{enabled:!0,mode:"x",rangeMin:{},rangeMax:{},speed:20,threshold:10},zoom:{enabled:!0,mode:"x",rangeMin:{},rangeMax:{},speed:.1,sensitivity:13}}}})},watch:{switchClass:function(){this.renderChart({labels:this.date,datasets:[{label:"30801",data:this.total,backgroundColor:"transparent",borderColor:"rgba(1, 116, 188, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)",hidden:this.switchClass[0]},{label:"30802",data:this.total2,backgroundColor:"transparent",borderColor:"rgba(1, 255, 255, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)",hidden:this.switchClass[1]},{label:"30803",data:this.total3,backgroundColor:"transparent",borderColor:"rgba(1, 116, 0, 0.50)",pointBackgroundColor:"rgba(171, 71, 188, 1)",hidden:this.switchClass[2]}]},{responsive:!0,maintainAspectRatio:!1,title:{display:!0,text:"三間教室使用總時間折線圖",fontFamily:"微軟正黑體",fontSize:30},tooltips:{bodyFontSize:16,titleFontSize:18,callbacks:{label:function(t,a){var e=a.datasets[t.datasetIndex].label||"";return e&&(e+=": "),e+=Math.round(100*t.yLabel)/100,console.log(e),"".concat(e,"小時")}}},scales:{xAxes:[{type:"time",scaleLabel:{display:!0,labelString:"日期"},time:{unit:"day",displayFormats:{day:"YYYY-M-DD"}}}],yAxes:[{scaleLabel:{display:!0,labelString:"使用時數（小時）"}}]},elements:{line:{fill:!1,tension:0}},plugins:{zoom:{pan:{enabled:!0,mode:"x",rangeMin:{},rangeMax:{},speed:20,threshold:10},zoom:{enabled:!0,mode:"x",rangeMin:{},rangeMax:{},speed:.1,sensitivity:13}}}})},resetEnv:function(){console.log("watch"),this.$data._chart.resetZoom()}},computed:{midatalinechart:{get:function(){return this.$store.state.midatalinechart}},resetEnv:{get:function(){return this.$store.state.resetEnv}}}}),st=et,rt=Object(h["a"])(st,k,D,!1,null,null,null),ot=rt.exports,nt=(e("a58f"),{extends:E["b"],data:function(){return{}},mounted:function(){}}),it=nt,lt=Object(h["a"])(it,S,z,!1,null,null,null),ct=lt.exports,dt=e("394e"),ut={name:"app",data:function(){return{data:dt,datacollection:null,switchClass_line:[!1,!1,!1],filterData_bar:{},date:[],date_bar:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"],total:[],total2:[],total3:[],average:[],average2:[],average3:[]}},components:{bar2:I,bar3:J,tree:X,error:at,line2:ot,Loading:F.a,heatmap:ct},created:function(){var t=this.midatabarchart.filter((function(t){return 30801===t.classroom})),a=this.midatabarchart.filter((function(t){return 30802===t.classroom})),e=this.midatabarchart.filter((function(t){return 30803===t.classroom}));this.average=t.map((function(t){return t.use_average_time.toFixed(2)})),this.average2=a.map((function(t){return t.use_average_time.toFixed(2)})),this.average3=e.map((function(t){return t.use_average_time.toFixed(2)})),this.filterData_bar={title:"30801",data:this.average}},methods:{reset:function(){this.$store.dispatch("resetEnv_ch")}},computed:{midatabarchart:{get:function(){return this.$store.state.midatabarchart}},isLoading:{get:function(){return this.$store.state.isLoading}}}},ft=ut,mt=(e("21bb"),Object(h["a"])(ft,O,Y,!1,null,null,null)),bt=mt.exports,pt=e("2f62");s["default"].use(pt["a"]);var ht=new pt["a"].Store({state:{totalData_table:[],midataerrortable:[],midatalinechart:[],midatabarchart:[],midatatreemap:[],isLoading:!0,resetEnv:!0},mutations:{setLoading:function(t,a){t.isLoading=a}},actions:{resetEnv_ch:function(t){var a=t.state;!0===a.resetEnv?(console.log("aaaaaa"),a.resetEnv=!1):a.resetEnv=!0},getData:function(t){var a=t.state,e=(t.commit,o.a.get("".concat("http://localhost/chartData/getChartData/public/api/getData")));return e.then((function(t){console.log(t.data.MITotalData),t.data.MITotalData.forEach((function(t){a.totalData_table.push({date:u()(new Date(t.date)).format("YYYY-MM-DD"),classroom:t.classroom,host:t.host,use_total_time:t.use_total_time.toFixed(2),count:t.count,per_average_time:t.per_average_time.toFixed(2)})})),a.midataerrortable=t.data.midataerrortable,a.midatalinechart=t.data.midatalinechart,a.midatabarchart=t.data.midatabarchart,a.midatatreemap=t.data.midatatreemap})),e},reset:function(){var t=function(){console.log(ot)};return t()}},modules:{}});s["default"].use(P["a"]);var vt=[{path:"/",name:"Home",component:bt}],gt=new P["a"]({routes:vt});gt.beforeEach(function(){var t=Object(M["a"])(regeneratorRuntime.mark((function t(a,e,s){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return ht.commit("setLoading",!0),console.log(a,e),t.next=4,ht.dispatch("getData");case 4:r=t.sent,console.log(r),ht.commit("setLoading",!1),s();case 8:case"end":return t.stop()}}),t)})));return function(a,e,s){return t.apply(this,arguments)}}());var jt=gt;s["default"].use(m.a),s["default"].component("apexchart",m.a),s["default"].config.productionTip=!1,s["default"].use(l["a"]),s["default"].use(c["a"],u.a),s["default"].use(i.a,o.a),new s["default"]({router:jt,store:ht,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),r=e.n(s);r.a},"9c0c":function(t,a,e){}});
//# sourceMappingURL=app.66e42285.js.map