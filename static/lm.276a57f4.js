!function(){"use strict";var e=function(){return(e=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function t(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function a(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(s,a)}c((i=i.apply(e,t||[])).next())}))}function n(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e,t){if(null==this)throw TypeError('"this" is null or not defined');var n=Object(this),i=n.length>>>0;if("function"!=typeof e)throw TypeError("predicate must be a function");for(var r=0;r<i;){var o=n[r];if(e.call(t,o,r,n))return o;r++}},configurable:!0,writable:!0});var i=3e3,r=-1e3;function o(){if(!Object.prototype.hasOwnProperty.call(window,"PerformanceResourceTiming"))throw new Error("Cache Count Unsupported");var e=window.performance.getEntriesByType("resource"),t=0,n=0,i=0,r=0,o=0,s=0;return e.filter((function(e){return"script"===e.initiatorType})).forEach((function(e){var a=e.encodedBodySize||0,c=e.decodedBodySize||0;t+=1,i+=a,o+=c,(0===e.transferSize||e.duration<50)&&(n+=1,r+=a,s+=c)})),{js_count:t,js_cache_count:n,js_cache_percent:t?+(n/t).toFixed(4):0,js_encoded_body_size:i,js_cache_encoded_body_size:r,js_cache_encoded_body_percent:i?+(r/i).toFixed(4):0,js_decoded_body_size:o,js_cache_decoded_body_size:s,js_cache_decoded_body_percent:o?+(s/o).toFixed(4):0}}var s=!0===window.ad_landing_preload,a={info:function(){},warn:function(){},error:function(){}};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=function(){return(u=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},d=function(){var e,t,n=function(e){var t=document.createElement("a");return t.href=e,t},i=screen.width,r=screen.height,o=window.navigator.appVersion,s=window.navigator.userAgent,a=window.navigator.language,c=document.referrer,u=c?n(c).hostname:"",d=function(e){var t=n(e).search;t=t.slice(1);var i={};return t.split("&").forEach((function(e){var t,n,r=e.split("=");r.length&&(t=r[0],n=r[1]),i[t]=decodeURIComponent(void 0===n?"":n)})),i}(location.href),f="",h="",p="",l=""+parseFloat(o);-1!==(e=s.indexOf("Opera"))&&(p="Opera",l=s.substring(e+6),-1!==(e=s.indexOf("Version"))&&(l=s.substring(e+8))),-1!==(e=s.indexOf("Edge"))?(p="Microsoft Edge",l=s.substring(e+5)):-1!==(e=s.indexOf("MSIE"))?(p="Microsoft Internet Explorer",l=s.substring(e+5)):-1!==(e=s.indexOf("Chrome"))?(p="Chrome",l=s.substring(e+7)):-1!==(e=s.indexOf("Safari"))?(p="Safari",l=s.substring(e+7),-1!==(e=s.indexOf("Version"))&&(l=s.substring(e+8))):-1!==(e=s.indexOf("Firefox"))&&(p="Firefox",l=s.substring(e+8)),-1!==(t=l.indexOf(";"))&&(l=l.substring(0,t)),-1!==(t=l.indexOf(" "))&&(l=l.substring(0,t)),-1!==(t=l.indexOf(")"))&&(l=l.substring(0,t));for(var _,g,m=/Mobile|htc|mini|Android|iP(ad|od|hone)/.test(o)?"wap":"web",v=[{s:"Windows 10",r:/(Windows 10.0|Windows NT 10.0)/},{s:"Windows 8.1",r:/(Windows 8.1|Windows NT 6.3)/},{s:"Windows 8",r:/(Windows 8|Windows NT 6.2)/},{s:"Windows 7",r:/(Windows 7|Windows NT 6.1)/},{s:"Android",r:/Android/},{s:"Sun OS",r:/SunOS/},{s:"Linux",r:/(Linux|X11)/},{s:"iOS",r:/(iPhone|iPad|iPod)/},{s:"Mac OS X",r:/Mac OS X/},{s:"Mac OS",r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/}],w=0;w<v.length;w++){var y=v[w];if(y.r.test(s)){f=y.s;break}}function b(e,t){var n=e.exec(t);return n&&n[1]?n[1]:""}switch(/Windows/.test(f)&&(h=b(/Windows (.*)/,f),f="windows"),f){case"Mac OS X":h=b(/Mac OS X (10[\.\_\d]+)/,s),f="mac";break;case"Android":(g=b(/Android ([\.\_\d]+)/,_=s))||(g=b(/Android\/([\.\_\d]+)/,_)),h=g,f="android";break;case"iOS":h=(h=/OS (\d+)_(\d+)_?(\d+)?/.exec(o))?h[1]+"."+h[2]+"."+(0|h[3]):"",f="ios"}return{browser:p,browser_version:l,platform:m,os_name:f,os_version:h,userAgent:s,screen_width:i,screen_height:r,device_model:function(e){var t="";try{if("android"===e)navigator.userAgent.split(";").forEach((function(e){e.indexOf("Build/")>-1&&(t=e.slice(0,e.indexOf("Build/")))}));else if("ios"===e||"mac"===e){var n=navigator.userAgent.replace("Mozilla/5.0 (",""),i=n.indexOf(";");t=n.slice(0,i)}}catch(e){}return t.trim()}(f),language:a,referrer:c,referrer_host:u,utm_source:d.utm_source,utm_medium:d.utm_medium,utm_campaign:d.utm_campaign,utm_term:d.utm_term,utm_content:d.utm_content,isSupportBeacon:("ios"!==f||"safari"!==p)&&(!(!window.navigator||!window.navigator.sendBeacon)||void 0)}},f=function(){function e(){this.cache={}}return e.prototype.setItem=function(e,t){this.cache[e]=t},e.prototype.getItem=function(e){return this.cache[e]},e.prototype.removeItem=function(e){this.cache[e]=void 0},e}(),h={getItem:function(e){try{var t=localStorage.getItem(e),n=t;try{t&&"string"==typeof t&&(n=JSON.parse(t))}catch(e){}return n||void 0}catch(e){}},setItem:function(e,t){try{var n="string"==typeof t?t:JSON.stringify(t);localStorage.setItem(e,n)}catch(e){}},removeItem:function(e){try{localStorage.removeItem(e)}catch(e){}},getCookie:function(e){try{var t=document.cookie.match(new RegExp("(?:^|;)\\s*"+e+"=([^;]+)"));return decodeURIComponent(t?t[1]:"")}catch(e){return""}},isSupportLS:function(){try{return localStorage.setItem("_ranger-test-key","hi"),localStorage.getItem("_ranger-test-key"),localStorage.removeItem("_ranger-test-key"),!0}catch(e){return!1}}()},p=function(){function e(e){this._storage=!e&&h.isSupportLS?h:new f}return e.prototype.getItem=function(e){return this._storage.getItem(e)},e.prototype.setItem=function(e,t){this._storage.setItem(e,t)},e.prototype.getCookie=function(e){this._storage.getCookie(e)},e.prototype.removeItem=function(e){this._storage.removeItem(e)},e}(),l={cn:"https://mcs.snssdk.com",sg:"https://sgali-mcs.byteoversea.com",va:"https://maliva-mcs.byteoversea.com"},_="/v1/list",g=4001,m=4e3,v=4002,w=4003,y=500,b=function(e,t){return t?"__tea_cache_tokens_"+e:"__tea_cache_events_"+e},S=function(e,t,n,i){try{var r,o=e.match(/\/v\d\//);r=o?o[0]:-1!==e.indexOf("/v1/")?"/v1/":"/v2/";var s=e.split(r)[0];if(!s)return void i(e,t,g);t.forEach((function(r){var o=function(e){var t="";for(var n in e)e.hasOwnProperty(n)&&void 0!==e[n]&&(t+="&"+n+"="+encodeURIComponent(JSON.stringify(e[n])));return"&"===t[0]?t.slice(1):t}(r),a=new Image(1,1);a.onload=function(){a=null,n&&n()},a.onerror=function(){a=null,i&&i(e,t,m)},a.src=s+"/v1/gif?"+o}))}catch(n){i&&i(e,t,v,n.message)}},k=function(e,t,n,i,r,o,s,a){var c=window.navigator.userAgent,u=-1!==window.navigator.appName.indexOf("Microsoft Internet Explorer")&&(-1!==c.indexOf("MSIE 8.0")||-1!==c.indexOf("MSIE 9.0"));if(n&&u)S(e,t,i,r);else if(s)return d().isSupportBeacon?(a&&a(),void(window.navigator.sendBeacon(e,JSON.stringify(t))?i():r(e,t,w))):void S(e,t,i,r);o&&delete t.app_key,function(e,t,n,i,r,o,s){var a=new XMLHttpRequest;a.open("POST",""+e,!0),a.setRequestHeader("Content-Type","application/json; charset=utf-8"),r&&a.setRequestHeader("X-MCS-AppKey",""+r),a.onload=function(){if(n){var e=null;if(a.responseText){try{e=JSON.parse(a.responseText)}catch(t){e={}}n(e)}}},a.onerror=function(){a.abort(),i&&i(t,y)},a.send(JSON.stringify(t))}(e,t,i,r,n)};function I(e){return e?(e^16*Math.random()>>e/4).toString(10):([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,I)}var E,T=function(){return I().replace(/-/g,"").slice(0,19)},O=function(){function e(e,t){this.browser=d(),this.config=e,this.cfg=t,this.storage=new p(!1),this.appInfo=e.app_key||e.app_id,this.isNoWebid=e.disable_webid,this.isNoSsid=e.disable_ssid,this.domain=e.channel_domain||l[e.channel],this.tokenReady=!1,this.checkExp=e.checkExp||!1}return e.prototype._getToken=function(){this.tokensKey=b(this.appInfo,!0);var e=this.storage.getItem(this.tokensKey);if(e){if(!e.web_id){var t=this.storage.getCookie("tt_webid"),n=this.storage.getCookie("__tea_sdk__ssid"),i=this.storage.getCookie("__tea_sdk__user_unique_id");if(t&&n&&i){var r={web_id:t,ssid:n,user_unique_id:i,timestamp:Date.now()};this.storage.setItem(this.tokensKey,r)}}var o=this.storage.getItem(this.tokensKey),s=(i=o.user_unique_id,t=o.web_id,o.timestamp);if(n=o.ssid,t&&i){if(this.uuid=i,this.web_id=t,this.ssid=n,this.checkExp){var a=Date.now()-parseFloat(s);if(a>7344e6)return void this._requestWebId();if(a>432e7)return void this._updateWebId(t)}this.cfg.envInfo.user.ssid=n,this.cfg.envInfo.user.web_id=t,this.cfg.envInfo.user.user_unique_id=i,this.tokenReady=!0}else this._requestWebId()}else this._requestWebId()},e.prototype._requestWebId=function(){if(this.isNoWebid)this._setwebId({web_id:T(),ssid:""});else{var e=this.domain+"/v1/user/webid";this._fetchWebId(e,!1)}},e.prototype._updateWebId=function(e){var t=this.domain+"/v1/user/webid/"+e+"/update";this._fetchWebId(t,!0)},e.prototype._fetchWebId=function(e,t){var n=this;this.isGetWebId=!0,k(e,{app_key:this.config.app_key,app_id:this.config.app_id,url:location.href,user_agent:this.browser.userAgent,referer:this.browser.referrer,user_unique_id:""},this.config.app_key,(function(e){e?t?n.storage.setItem(n.tokensKey,{web_id:n.web_id,ssid:n.ssid,user_unique_id:n.uuid,timestamp:Date.now()}):(n.isGetWebId=!1,0===e.e&&n._setwebId(e),n.isGetSsid?n._requestSsId():n.callback&&n.callback()):n.isGetWebId=!1}),(function(){n.isGetWebId=!1}),!0)},e.prototype._setwebId=function(e){var t=this.cfg.envInfo.user.web_id||e.web_id;this.storage.setItem(this.tokensKey,{web_id:t,ssid:e.ssid,user_unique_id:this._uuid?this._uuid:t,timestamp:Date.now()}),this.cfg.envInfo.user.ssid=e.ssid,this.cfg.envInfo.user.web_id=t,this.cfg.envInfo.user.user_unique_id=this._uuid?this._uuid:t,this.uuid=this._uuid?this._uuid:t,this.web_id=t,this.ssid=e.ssid,this.tokenReady=!0},e.prototype._getSsid=function(e){e&&-1===["0","Null","None","","undefined"].indexOf(e)&&(this.uuid===e&&this.web_id&&this.ssid?this.tokenReady=!0:(this._uuid=e,this.uuid=e,this.cfg.envInfo.user.user_unique_id=e,this.isGetSsid=!0,this.isNoSsid||this.isGetWebId?this.callback&&this.callback():(this.tokenReady=!1,this.isGetSsid=!1,this._requestSsId())))},e.prototype._requestSsId=function(){var e=this,t=this.domain+"/v1/user/ssid";k(t,{app_key:this.config.app_key,app_id:this.config.app_id,web_id:this.web_id,user_unique_id:this.uuid},this.config.app_key,(function(t){t&&0===t.e?(e.cfg.envInfo.user.ssid=t.ssid,e.storage.setItem(e.tokensKey,{web_id:e.web_id,ssid:t.ssid,user_unique_id:e.uuid,timestamp:Date.now()}),e.tokenReady=!0,e.callback&&e.callback()):e.tokenReady=!0}),(function(){e.tokenReady=!0}),!0)},e.prototype.isTokenReady=function(){return this.tokenReady},e}(),x=function(){function e(e,t,n,i){this.cfg=t,this.config=e,this._token=n,this.appInfo=e.app_key||e.app_id,this.debugMode=!!e.log,this.evtDataKey=b(this.appInfo,!1);var r=e.channel_domain||l[e.channel];this.reportUrl=e.report_url?e.report_url:""+r+_,this.storage=new p(!0),this.plugin=i,this.addListener()}return e.prototype.addListener=function(){var e=this;window.addEventListener("unload",(function(){e.report(!0)}),!1),window.addEventListener("beforeunload",(function(){e.report(!0)}),!1),document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&e.report(!0)}),!1)},e.prototype.setReady=function(){this.isReady=!0,this.report()},e.prototype.event=function(e,t){var n=this;void 0===e&&(e=[]),void 0===t&&(t=!1);var i=this.storage.getItem(this.evtDataKey)||[],r=t?e.concat(i):i.concat(e);this.storage.setItem(this.evtDataKey,r),this.reportTimer&&clearTimeout(this.reportTimer),r.length>=5?this.report():this.reportTimer=setTimeout((function(){n.report(),n.reportTimer=null}),30)},e.prototype.report=function(e){if(void 0===e&&(e=!1),this._token.isTokenReady()&&this.isReady){var t=this.storage.getItem(this.evtDataKey)||[],n=this._mergeEvents(t);this.storage.removeItem(this.evtDataKey),this._dealData(n,e)}},e.prototype._mergeEvents=function(e){var t=this;if(!e.length)return e;var n=this.cfg.get();n.header.headers=JSON.stringify(n.header.headers);var i=[];return i.push(e),i.map((function(e){return{events:e.map((function(e){var n=u({},t.cfg.get("evtParams"),e.params);return delete n.__disable_storage__,u({},e,{params:JSON.stringify(n)})})),user:n.user,header:n.header,verbose:t.debugMode?1:void 0}}))},e.prototype._dealData=function(e,t){var n=this;if(!e.length)return e;e.map((function(e){var t=[];return t.push(e),t})).forEach((function(e){var i=T();n._send(i,e,t)}))},e.prototype._send=function(e,t,n){var i=this;this.isSending=!0;var r=function(){i.isSending=!1};k(this.reportUrl,t,this.config.app_key,(function(){r()}),(function(e,t){r(),i.cfg.get("reportErrorCallback")(e,t)}),!1,n,r)},e}(),P=void 0,C=(new Date).getTimezoneOffset(),L=parseInt(""+-C/60,10),N=60*C,j="4.0.21",A=function(){function e(){var e=d();this.envInfo={user:{user_unique_id:P,user_type:P,user_id:P,user_is_auth:P,user_is_login:P,device_id:P,web_id:P,ip_addr_id:P,ssid:P},header:{app_id:P,app_name:P,app_install_id:P,app_package:P,app_channel:P,app_version:P,os_name:e.os_name,os_version:e.os_version,device_model:e.device_model,ab_client:P,ab_version:P,traffic_type:P,utm_source:e.utm_source,utm_medium:e.utm_medium,utm_campaign:e.utm_campaign,client_ip:P,device_brand:P,os_api:P,access:P,language:e.language,region:P,app_language:P,app_region:P,creative_id:P,ad_id:P,campaign_id:P,log_type:P,rnd:P,platform:e.platform,sdk_version:j,province:P,city:P,timezone:L,tz_offset:N,tz_name:P,sim_region:P,carrier:P,resolution:e.screen_width+"x"+e.screen_height,browser:e.browser,browser_version:e.browser_version,referrer:e.referrer,referrer_host:e.referrer_host,headers:{utm_term:e.utm_term,utm_content:e.utm_content,custom:{screen_width:e.screen_width,screen_height:e.screen_height}}}},this.evtParams={},this.reportErrorCallback=function(){}}return e.prototype.set=function(e,t){var n=this;if("evtParams"===e||"_staging_flag"===e){var i;i="evtParams"===e?t:{_staging_flag:Number(t)};var r=u({},i);Object.keys(r).forEach((function(e){n.evtParams[e]=r[e]}))}else if("reportErrorCallback"===e&&"function"==typeof t)this.reportErrorCallback=t;else{var o="";if(e.indexOf(".")>-1){var s=e.split(".");o=s[0],e=s[1]}if("user_unique_id"===e){if(!t)return;if(-1!==["0","Null","None","","undefined"].indexOf(t))return}"os_version"===e&&(e=""+t),"web_id"===e&&(!this.envInfo.user.user_unique_id||this.envInfo.user.user_unique_id&&this.envInfo.user.user_unique_id===this.envInfo.user.web_id)&&(this.envInfo.user.user_unique_id=t),o?"user"===o||"header"===o?this.envInfo[o][e]=t:"headers"===o?this.envInfo.header.headers[e]=t:this.envInfo.header.headers.custom[e]=t:this.envInfo.user.hasOwnProperty(e)?this.envInfo.user[e]=t:this.envInfo.header.hasOwnProperty(e)?this.envInfo.header[e]=t:this.envInfo.header.headers.hasOwnProperty(e)?this.envInfo.header.headers[e]=t:this.envInfo.header.headers.custom[e]=t}},e.prototype.get=function(e){return e?"evtParams"===e?this.evtParams:"reportErrorCallback"===e?this.reportErrorCallback:JSON.parse(JSON.stringify(this.envInfo[e])):JSON.parse(JSON.stringify(this.envInfo))},e}(),W=function(){function e(e,t){this.isLog=t,this.name=e||""}var t=e.prototype;return t.info=function(e){this.isLog&&console.log(this.name+" "+e)},t.warn=function(e){this.isLog&&console.warn(this.name+" "+e)},t.error=function(e){this.isLog&&console.error(this.name+" "+e)},t.throw=function(e){throw this.error(this.name),new Error(e)},e}(),M=["init","config","send","start"].concat([]),q=(E=+Date.now()+Number((""+Math.random()).slice(2,8)),function(){return E+=1}),R=function(){function e(e){var t=this;this.predefinePageView=function(e){void 0===e&&(e={});var n=u({title:document.title||location.pathname,url:location.href,url_path:location.pathname,time:Date.now(),referrer:window.document.referrer},t._event.closeStorage?{}:{__disable_storage__:1}),i=u({},n,e);t.event("predefine_pageview",i,!0)},this.name=e,this._isSend=!1,this.autoPV=!0,this._config=new A}return e.prototype.init=function(e){var t=this;if(!this._inited){if(this._inited=!0,!e||"object"!=typeof e)throw new Error("init参数有误，请检查");var n=e.app_id,i=e.app_key,r=e.log;this.logger=new W(this.name,r),n&&"number"==typeof n||this.logger.throw("app_id参数有误，请检查"),i&&"string"!=typeof i&&this.logger.warn("app_id参数有误，请检查"),e.channel&&-1!==["cn","sg","va"].indexOf(e.channel)||this.logger.throw("channel 变量只能是 cn, sg, va"),this._config.set("app_id",n),e.channel=e.channel?e.channel:"cn",this._initConfig=e,this._token=new O(e,this._config),this._token.callback=function(){t.callbackSend&&t.start()},this._event=new x(e,this._config,this._token,this.plugin),this._token._getToken()}},e.prototype.config=function(e){if(this._inited)if(e&&"object"==typeof e){if(e.user_unique_id){if("string"!=typeof e.user_unique_id)throw new Error("user_unique_id 只能是string");this._token._getSsid(e.user_unique_id)}for(var t in e.disable_auto_pv&&(this.autoPV=!1),e)this._config.set(t,e[t])}else this.logger.warn("config参数有误，请检查");else this.logger.warn("config应在init之后调用")},e.prototype.send=function(){this.start()},e.prototype.start=function(){if(this._token.isTokenReady()){if(this._isSend)return;this._isSend=!0,this.logger.info("用户信息："+JSON.stringify(this._config.get("user"))),this.autoPV&&this.predefinePageView(),this._event.setReady()}else this.callbackSend=!0},e.prototype.event=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n="boolean"==typeof e[e.length-1]&&e[e.length-1],i="boolean"==typeof e[e.length-1]?e.slice(0,e.length-1):e,r=i[0],o=[];"Array"!==Object.prototype.toString.call(r).slice(8,-1)?o[0]=i:o=i,o=o.map((function(e){return function(e,t){var n=e;/^event\./.test(e)&&(n=e.slice(6));var i=t;return"object"!=typeof i&&(i={}),i.event_index=q(),{event:n,params:i,local_time_ms:+new Date,is_bav:0}}(e[0],e[1])})),this._event.event(o,n)},e}();function z(e){var t=this;return c(this,"_exportCollect",(function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];t._isProcess?t._executeCmd.apply(t,n):(t.cmdQueue.push(n),t._processCmd())})),c(this,"_processCmd",(function(){if(0!==t.cmdQueue.length){var e,n,i=(e=t.cmdQueue,"init","0",n=-1,e.forEach((function(e,t){"init"===e[0]&&(n=t)})),n);-1!==i&&(t._isProcess=!0,t._executeCmd.apply(t,t.cmdQueue[i]),t.cmdQueue.forEach((function(e,n){n!==i&&t._executeCmd.apply(t,e)})),t.cmdQueue=[])}})),c(this,"_executeCmd",(function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var r,o,s=n[0];M.indexOf(s)>-1?(r=t.colloctor)[s].apply(r,n.slice(1)):(o=t.colloctor).event.apply(o,n)})),this.cmdQueue=[],this.name=e,this.colloctor=new R(e),this._isProcess=!1,this._alias={},this._processCmd(),M.forEach((function(e){t._exportCollect[e]=t._exportCollect.bind(t,e)})),this._exportCollect}var D=location.hostname,B=location.pathname,J=location.origin+B;var V,U,K,G,F,H=[{name:"douyin",regexp:/aweme_([\d.]+)/i},{name:"toutiao",regexp:/NewsArticle\/([\d.]+)/i},{name:"xigua",regexp:/VideoArticle\/([\d.]+)/i},{name:"huoshan",regexp:/live_stream_([\d.]+)/i},{name:"dongchedi",regexp:/automobile/i},{name:"ttad",regexp:/TTAD/i},{name:"umeng",regexp:/open_news/i},{name:"microapp",regexp:/toutiaomicroapp/i},{name:"faceu",regexp:/FaceU/i},{name:"ulike",regexp:/Ulike/i},{name:"ttwebview",regexp:/TTWebView/i},{name:"wechat",regexp:/MicroMessenger\/([\d.]+)/i}],Q={ua:window.navigator.userAgent,getOS:function(){return/(Android)/i.test(this.ua)?"android":/(iPhone|iPad|iPod|iOS)/i.test(this.ua)?"ios":"unknown"},getAppType:function(){var e=this,t=H.find((function(t){return t.regexp.test(e.ua)}));return t?t.name:"unknown"},getBid:function(){return"www.chengzijianzhan.com"===D?/^\/tetris\/page\/\d+/.test(B)?"SSR"===window.__renderType?"czjz_ssr":"czjz_csr":/^\/tetris\/store\/\d+/.test(B)?"czjz_store":"czjz_other":"third_landing"},getPid:function(){var e=B.match(/\d+/);return e?e[0]:B},isTTWebView:function(){return!!/TTWebView/i.test(this.ua)},getTTWebViewVersion:function(){var e=(this.ua.match(/TTWebView\/(\d+)/i)||[])[1]||"0";return parseInt(e,10)}},X=function(){function t(){this.eventList=[],this.siteInfo={title:document.title||location.pathname,url:location.href,url_path:location.pathname,time:Date.now(),referrer:window.document.referrer}}return t.prototype.init=function(t){void 0===t&&(t={}),a.info("isPreload",s);var n=new z("tracker");n.init(e({app_id:173100,channel:"cn",log:!1},t.init)),this.tea=n,this.tea.config(e({disable_auto_pv:!0,_staging_flag:0,base_url:J,bid:Q.getBid(),pid:Q.getPid(),app_type:Q.getAppType(),is_ttw:Q.isTTWebView()?1:0,ttw_version:Q.getTTWebViewVersion(),is_preload:s?1:0,lm_version:"1.2.1"},t.config)),this.tea.start(),this.tea("real_pageview",this.siteInfo)},t.prototype.enable=function(){this.tea("predefine_pageview",this.siteInfo),this.clearEventList()},t.prototype.report=function(e,t){a.info("[TEA]",e,t),this.tea?this.tea(e,t):this.eventList.push({event:e,param:t})},t.prototype.clearEventList=function(){var e=this;this.eventList.length||this.eventList.forEach((function(t){e.tea(t.event,t.param)}))},t}(),Y="-1";function Z(e){try{return JSON.parse(e)}catch(e){return}}function $(e){var t=e.method,n=e.arg,i=e.timeout;return new Promise((function(e){window.ToutiaoJSBridge||e({});var r=setTimeout((function(){e({})}),i||300);window.ToutiaoJSBridge.call(t,n||{},(function(t){if(t){var n=t.code;!function(e){for(var t in e)if(t)return!1;return!0}(t)?null==n&&(n=1):n=1,1==n?("string"==typeof t&&(t=Z(t)),clearTimeout(r),e(function e(t){return Object.keys(t||{}).reduce((function(n,i){var r,o=t[i];if(n[i]=o,"number"==typeof o)n[i]=""+o;else if("string"==typeof(r=o)&&/^(\{|\[)/.test(r)){var s=Z(o)||{};n[i]=e(s)}return n}),{})}(t))):(clearTimeout(r),e({}))}else e({})}))}))}function ee(){return t(this,void 0,Promise,(function(){var e,t,i,r,o,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),e=function(){for(var e=window.location.search.substr(1).split("&"),t={},n=0;n<e.length;n++){var i=e[n].split("="),r=i[0],o=i[1];r&&(t[r]=o)}return t}(),t=e.adid||e._tt_ad_id||e.aid||e.ad_id||Y,i=e.cid||e.creativeid,r=e.req_id,i&&r?[3,2]:[4,$({method:"adInfo",timeout:300})];case 1:o=n.sent(),i=i||o&&o.cid||Y,r=r||o&&o.log_extra&&o.log_extra.req_id||Y,n.label=2;case 2:return[2,{aid:t,cid:i,req_id:r}];case 3:return s=n.sent(),a.error(s),[2,{aid:Y,cid:Y,req_id:Y}];case 4:return[2]}}))}))}!function(e){e.LOAD="load",e.START="start"}(V||(V={})),function(e){e.NAVIGATION="navigation",e.PAINT="paint",e.RESOURCE="resource",e.CDN="cdn",e.JSB="jsb",e.CACHE="cache",e.PRERENDER="prerender"}(U||(U={})),function(e){e.hide="0",e.appear="2"}(K||(K={})),function(e){e.disable="0",e.enable="1"}(G||(G={})),function(e){e.feed="1",e.splash="2"}(F||(F={}));var te=new(function(){function e(){}return e.prototype.start=function(e){return t(this,void 0,Promise,(function(){var t,i,r,o,s;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),this.isSupportPrerender()?[4,this.getPrerenderWebviewInfo()]:[3,3];case 1:return t=n.sent(),i=t.isEnablePrerender,r=t.isAppear,i?r?[3,3]:[4,this.getPrerenderTiming()]:[3,3];case 2:o=n.sent(),e.report("prerender_timing",o),n.label=3;case 3:return[3,5];case 4:return s=n.sent(),a.error(s),[3,5];case 5:return[2]}}))}))},e.prototype.getPrerenderTiming=function(){return t(this,void 0,Promise,(function(){var e,t,i;return n(this,(function(n){switch(n.label){case 0:return[4,Promise.all([this.getLoadTime(),this.getShowTime()])];case 1:return e=n.sent(),t=e[0],[2,{first_show_time:i=e[1],load_time:t,is_load_before_show:t<=i?1:0}]}}))}))},e.prototype.isSupportPrerender=function(){return!!(window&&window.ToutiaoJSBridge&&window.navigator&&window.navigator.userAgent&&/aweme/gi.test(window.navigator.userAgent))},e.prototype.getPrerenderWebviewInfo=function(){return t(this,void 0,Promise,(function(){var e,t,i;return n(this,(function(n){switch(n.label){case 0:return[4,$({method:"getWebViewInfo",timeout:300})];case 1:return e=n.sent(),t=e&&e.preloadType===G.enable,i=e&&e.appearanceState===K.appear,[2,{isEnablePrerender:t,isAppear:i}]}}))}))},e.prototype.getLoadTime=function(){return t(this,void 0,Promise,(function(){return n(this,(function(e){return[2,new Promise((function(e,t){var n=window.performance.timing;Boolean(0!==n.loadEventStart)?e(n.loadEventStart-n.navigationStart):window.addEventListener("load",(function(){n&&n.loadEventStart||t("PerformanceNavigationTiming Unsupported"),e(n.loadEventStart-n.navigationStart)}))}))]}))}))},e.prototype.getShowTime=function(){return new Promise((function(e){window.ToutiaoJSBridge.on("webViewDidShow",(function(){e(Math.round(window.performance.now()))}))}))},e}()),ne={blackList:[],tea:{}},ie=new(function(){function s(s){var c,u=this;void 0===s&&(s={}),this.onLoadCbList=[],this.builtInMetrics=[{key:U.NAVIGATION,func:function(e){var t=function(){var e=window.performance.timing;if(!e||!e.loadEventStart)throw new Error("PerformanceNavigationTiming Unsupported");var t={redirect:e.redirectEnd-e.redirectStart,appcache:e.domainLookupStart-e.fetchStart,dns:e.domainLookupEnd-e.domainLookupStart,tcp:e.connectEnd-e.connectStart,request:e.responseStart-e.requestStart,response:e.responseEnd-e.responseStart,processing:e.domComplete-e.domLoading,ttfb:e.responseStart-e.navigationStart,blank:e.domLoading-e.navigationStart,domready:e.domContentLoadedEventStart-e.navigationStart,load:e.loadEventStart-e.navigationStart};return Object.values(t).forEach((function(e){if(e<0||e>6e4)throw new Error("Invalid Navigation Timing")})),t}();e.report("navigation_timing",t)}},{key:U.PAINT,func:function(e){var t=function(){if(!Object.prototype.hasOwnProperty.call(window,"PerformancePaintTiming"))throw new Error("PerformancePaintTiming Unsupported");var e={fp:-1,fcp:-1};return window.performance.getEntriesByType("paint").forEach((function(t){"first-paint"===t.name?e.fp=Math.round(t.startTime+t.duration):"first-contentful-paint"===t.name&&(e.fcp=Math.round(t.startTime+t.duration))})),e}();e.report("paint_timing",t)}},{key:U.RESOURCE,func:function(e){var t=function(){if(!Object.prototype.hasOwnProperty.call(window,"PerformanceResourceTiming"))throw new Error("PerformanceResourceTiming Unsupported");var e=["js","css","img"],t=["load","ttfb","size"],n=["dns","ssl","tcp"],i={script:"js",link:"css",css:"img",img:"img"},r={},o={};function s(e,t,n){var i=o[e].find((function(e){return e.domain===t}));i?i.time=Math.max(i.time,n):o[e].push({domain:t,time:n})}e.forEach((function(e){t.forEach((function(t){r[e+"_"+t]=[]})),n.forEach((function(t){o[e+"_"+t]=[]}))})),window.performance.getEntriesByType("resource").forEach((function(e){var t;if(Object.prototype.hasOwnProperty.call(i,e.initiatorType)){var n=i[e.initiatorType];if(r[n+"_load"].push(e.responseEnd-e.fetchStart),0!==e.responseStart){r[n+"_ttfb"].push(e.responseStart-e.fetchStart),r[n+"_size"].push(e.transferSize);var o=null===(t=e.name.match(/^https?:\/\/([^/?#:]+)/))||void 0===t?void 0:t[1];o&&(s(n+"_dns",o,e.domainLookupEnd-e.domainLookupStart),s(n+"_tcp",o,e.connectEnd-e.connectStart),e.secureConnectionStart>0&&s(n+"_ssl",o,e.connectEnd-e.secureConnectionStart))}}}));var a={};return e.forEach((function(e){a[e+"_num"]=r[e+"_size"].length,t.forEach((function(t){var n=e+"_"+t,i=r[n].length,o=r[n].reduce((function(e,t){return e+t}),0);a[n]=i>0?Math.round(o/i):0})),n.forEach((function(t){var n=e+"_"+t,i=o[n].length,r=o[n].reduce((function(e,t){return e+t.time}),0);a[n]=i>0?Math.round(r/i):0}));var i=r[e+"_size"].reduce((function(e,t){return e+t}),0);a[e+"_size_sum"]=i,a.all_size_sum=(a.all_size_sum||0)+i})),a}();e.report("resource_timing",t)}},{key:U.CDN,func:function(e,t){if(t.cdnDomainNames){var n=function(e){if(!Object.prototype.hasOwnProperty.call(window,"PerformanceResourceTiming"))throw new Error("CDN Timing Unsupported");var t=window.performance.getEntriesByType("resource"),n=["load","ttfb"],i=["dns","ssl","tcp"],r={},o={},s=[];t.forEach((function(t){var a=e.find((function(e){return t.name.indexOf(e)>-1}));a&&(-1===s.indexOf(a)&&(n.forEach((function(e){r[a+"_"+e]=[]})),i.forEach((function(e){o[a+"_"+e]=0})),s.push(a)),r[a+"_load"].push(t.responseEnd-t.fetchStart),0!==t.responseStart&&(r[a+"_ttfb"].push(t.responseStart-t.fetchStart),o[a+"_dns"]=Math.max(o[a+"_dns"],t.domainLookupEnd-t.domainLookupStart),o[a+"_tcp"]=Math.max(o[a+"_tcp"],t.connectEnd-t.connectStart),t.secureConnectionStart>0&&(o[a+"_ssl"]=Math.max(o[a+"_ssl"],t.connectEnd-t.secureConnectionStart))))}));var a={};return s.forEach((function(e){n.forEach((function(t){var n=e+"_"+t,i=n.replace(/-|\./g,"_"),o=r[n].length,s=r[n].reduce((function(e,t){return e+t}),0);a[i]=o>0?Math.round(s/o):0})),i.forEach((function(t){var n=e+"_"+t,i=n.replace(/-|\./g,"_");a[i]=Math.round(o[n])}))})),a}(t.cdnDomainNames);e.report("cdn_timing",n)}}},{key:U.JSB,func:function(e){return t(u,void 0,Promise,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return Math.random()>.05?[2]:[4,new Promise((function(e,t){if(window.ToutiaoJSBridge){var n=setTimeout((function(){e({jsb:r})}),i),o=(new Date).getTime();window.ToutiaoJSBridge.call("adInfo",{},(function(){clearTimeout(n);var t=(new Date).getTime()-o;e({jsb:t})}))}else t("ToutiaoJSBridge Unsupported")}))];case 1:return t=n.sent(),e.report("jsb_delay_timing",t),[2]}}))}))}},{key:U.CACHE,func:function(e){return t(u,void 0,Promise,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return[4,o()];case 1:return t=n.sent(),e.report("cache_info",t),[2]}}))}))}}],this.builtInEvents=[function(e){var t=window.TeaEventQueue;t&&t.length&&t.forEach((function(t){e.report.apply(e,t)}))}],this.onloadHandler=function(){setTimeout((function(){u.onLoadCbList.forEach((function(e){return t(u,void 0,void 0,(function(){var t;return n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,e.call(this,this.tracker,this.config)];case 1:return n.sent(),[3,3];case 2:return t=n.sent(),a.error(t),[3,3];case 3:return[2]}}))}))}))}),0)},this.config=e(e({},ne),s),this.tracker=new X,this.builtInEvents.forEach((function(e){u.onLoadCbList.push(e)})),this.builtInMetrics.forEach((function(e){var t=e.key,n=e.func;u.config.blackList.indexOf(t)>-1||u.onLoadCbList.push(n)})),this.config.onLoad&&(c=this.onLoadCbList).push.apply(c,this.config.onLoad)}return s.prototype.start=function(){return t(this,void 0,Promise,(function(){var t,i;return n(this,(function(n){switch(n.label){case 0:return t=this.config.tea||{},[4,ee()];case 1:return i=n.sent(),t.config=e(e({},i),t.config||{}),this.tracker.init(this.config.tea),[4,te.start(this.tracker)];case 2:return n.sent(),this.tracker.enable(),window.performance.timing&&window.performance.timing.loadEventStart>0?this.onloadHandler():window.addEventListener("load",this.onloadHandler),[2]}}))}))},s}())(window.__lm);window.tracker=ie.tracker,ie.start()}();