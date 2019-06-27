export function iDate(e=new Date,t=0,o="yyyy-mm-dd"){var r=new Date(new Date(e).setHours(0,0,0,0)+864e5*t),n=new Date(new Date(e).getTime()+864e5*t),a={y:r.getFullYear(),yyyy:`${r.getFullYear()}`,m:r.getMonth()+1,mm:(r.getMonth()+1<10?"0":"")+(r.getMonth()+1),d:r.getDate(),dd:(r.getDate()<10?"0":"")+r.getDate(),_h:n.getHours(),_hh:(n.getHours()<10?"0":"")+n.getHours(),_m:n.getMinutes(),_mm:(n.getMinutes()<10?"0":"")+n.getMinutes(),_s:n.getSeconds(),_ss:(n.getSeconds()<10?"0":"")+n.getSeconds(),time:n.getTime(),w:["周日","周一","周二","周三","周四","周五","周六"][r.getDay()],widx:r.getDay(),timeInit:r.getTime(),dayDes:"",string:"",month_day:"",oDate:r};switch(a.month_day=`${a.mm}月${a.dd}日`,(r-a.timeInit)/864e5){case 0:a.todayDes="今天";break;case 1:a.todayDes="明天";break;case 2:a.todayDes="后天";break;default:a.todayDes=a.w}if(a.lastDay=new Date(a.y,a.m,0).getDate(),o.match(/[\u4E00-\u9FA5\uF900-\uFA2D]/gi)){let e={"年":a.y,"月":a.mm,"日":a.dd};a.string=[],o.split("").map((t,o)=>{e[t]&&a.string.push(e[t]+t)}),a.string=a.string.join("")}else{a.string=[];var i=o.match(/[^a-z]/gi)[0];o.split(i).map(e=>{a.string.push(a[e])}),a.string=a.string.join(i)}return a}export function isLeapYear(e){var t=iDate(e).y;return 0==t%4&&(t%100!=0||t%400==0)}export function getDateDiff(e,t){console.log("getDateDiff startDate:",e),console.log("getDateDiff endDate:",t);var o=iDate(e).time,r=iDate(t).time;return Math.abs(o-r)/864e5}export function computeYear(e,t){var o=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),a=t.getFullYear(),i=t.getMonth()+1,s=t.getDate();let g="";if(o==a)g=0;else{var c=o-a;if(c>0)if(r==i)g=n-s<0?c-1:c;else g=r-i<0?c-1:c;else g=-1}return g}export function deepCopy(e,t){t=t||{};for(var o in e)"object"==typeof e[o]?(e[o].constructor===Array?t[o]=[]:t[o]={},deepCopy(e[o],t[o])):t[o]=e[o];return t}export function easyCopy(e){try{return JSON.parse(JSON.stringify(e))}catch(t){return console.log(t),deepCopy(e)}}export function verifyType(e){var t=Object.prototype.toString.call(e);return{isObj:"[object Object]"==t,isArray:"[object Array]"==t,isNULL:"[object Null]"==t,isDocument:"[object Document]"==t||"[object HTMLDocument]"}}export function getUrlQuery(e){for(var t=window.location.href,o=/([^\#\?\=\&]+)\=([^\#\?\=\&]*)/g,r={};null!=o.exec(t);)r[RegExp.$1]=RegExp.$2;return e?r[e]:r}export function local(e,t,o,r="localStorage"){return{get:()=>window[r].getItem(t)?JSON.parse(window[r].getItem(t)):"",set:()=>window[r].setItem(t,JSON.stringify(o)),remove:()=>window[r].getItem(t)?window[r].removeItem(t):"",clear:()=>window[r].clear()}[e]()}export function session(e,t,o,r="sessionStorage"){return this.local(e,t,o,r)}export function setcookie(e,t,o,r=30,n="/"){return{get(){var e,o=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(o))?unescape(e[2]):null},set(){var e=r,a=new Date,i="";a.setTime(a.getTime()+24*e*60*60*1e3),i=t+"="+escape(o)+";expires="+a.toGMTString(),n&&(i+=";path="+n),document.cookie=i},delete(){var e=new Date;e.setTime(e.getTime()-1);var o=this.getCookie(t);null!=o&&(document.cookie=t+"="+o+";expires="+e.toGMTString())}}[e]()}export function Storage(e,t,o="ls"){var r=window["ls"==o?"localStorage":"sessionStorage"];return{get:()=>window.localStorage.getItem(e)?JSON.parse(window.localStorage.getItem(e)):window.sessionStorage.getItem(e)?JSON.parse(window.sessionStorage.getItem(e)):null,set:()=>r.setItem(e,JSON.stringify(t)),remove:()=>window.localStorage.getItem(e)?window.localStorage.removeItem(e):window.sessionStorage.getItem(e)?window.sessionStorage.removeItem(e):"",clear:()=>r.clear()}}