var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var aa=encodeURIComponent,k=window,ba=Object,p=document,ca=parseInt,q=String,da=decodeURIComponent;function ea(a,b){return a.type=b}
var fa="appendChild",s="push",t="test",ga="shift",ha="exec",ia="width",u="replace",ja="getElementById",ka="concat",la="charAt",ma="JSON",w="indexOf",na="nodeName",x="match",oa="readyState",z="createElement",A="setAttribute",pa="type",qa="bind",ra="getTime",sa="getElementsByTagName",B="substr",C="length",D="prototype",E="split",F="location",G="style",ta="removeChild",I="call",J="getAttribute",ua="protocol",va="charCodeAt",K="href",wa="substring",xa="action",L="apply",ya="attributes",M="parentNode",
za="update",Aa="height",N="join",Ba="toLowerCase",Ca=function(a,b,c){return a[I][L](a[qa],arguments)},Da=function(a,b,c){if(!a)throw Error();if(2<arguments[C]){var d=Array[D].slice[I](arguments,2);return function(){var c=Array[D].slice[I](arguments);Array[D].unshift[L](c,d);return a[L](b,c)}}return function(){return a[L](b,arguments)}},Ea=function(a,b,c){Ea=Function[D][qa]&&-1!=Function[D][qa].toString()[w]("native code")?Ca:Da;return Ea[L](null,arguments)};
Function[D].bind=Function[D][qa]||function(a,b){if(1<arguments[C]){var c=Array[D].slice[I](arguments,1);c.unshift(this,a);return Ea[L](null,c)}return Ea(this,a)};var O=k,P=p,Fa=O[F],Ga=function(){},Ha=/\[native code\]/,Q=function(a,b,c){return a[b]=a[b]||c},Ia=function(a){for(var b=0;b<this[C];b++)if(this[b]===a)return b;return-1},Ja=function(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a[C];d++){var e=a[d];e!=c&&b[s](e);c=e}return b},Ka=/&/g,La=/</g,Ma=/>/g,Na=/"/g,Oa=/'/g,Pa=function(a){return q(a)[u](Ka,"&amp;")[u](La,"&lt;")[u](Ma,"&gt;")[u](Na,"&quot;")[u](Oa,"&#39;")},R=function(){var a;if((a=ba.create)&&Ha[t](a))a=a(null);else{a={};for(var b in a)a[b]=
void 0}return a},S=function(a,b){return ba[D].hasOwnProperty[I](a,b)},Qa=function(a){if(Ha[t](ba.keys))return ba.keys(a);var b=[],c;for(c in a)S(a,c)&&b[s](c);return b},T=function(a,b){a=a||{};for(var c in a)S(a,c)&&(b[c]=a[c])},Ra=function(a){return function(){O.setTimeout(a,0)}},Sa=function(a,b){if(!a)throw Error(b||"");},U=Q(O,"gapi",{});var V=function(a,b,c){var d=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(d[ha](a)||b[ha](a)))try{c=da(a[2])}catch(e){}return c},Ta=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Ua=function(a){a=a[x](Ta);var b=R();b.R=a[1];b.g=a[3]?[a[3]]:[];b.l=a[5]?[a[5]]:[];return b},Va=function(a){return a.R+(0<a.g[C]?"?"+a.g[N]("&"):"")+(0<a.l[C]?"#"+a.l[N]("&"):"")},Wa=function(a,b){var c=[];if(a)for(var d in a)if(S(a,d)&&null!=a[d]){var e=b?b(a[d]):a[d];c[s](aa(d)+"="+aa(e))}return c},
Xa=function(a,b,c,d){a=Ua(a);a.g[s][L](a.g,Wa(b,d));a.l[s][L](a.l,Wa(c,d));return Va(a)},Ya=function(a,b){var c="";2E3<b[C]&&(c=b[wa](2E3),b=b[wa](0,2E3));var d=a[z]("div"),e=a[z]("a");e.href=b;d[fa](e);d.innerHTML=d.innerHTML;b=q(d.firstChild[K]);d[M]&&d[M][ta](d);return b+c},Za=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var $a=function(a,b,c,d){if(O[c+"EventListener"])O[c+"EventListener"](a,b,!1);else if(O[d+"tachEvent"])O[d+"tachEvent"]("on"+a,b)},cb=function(a){var b=ab;if("complete"!==P[oa])try{b()}catch(c){}bb(a)},bb=function(a){if("complete"===P[oa])a();else{var b=!1,c=function(){if(!b)return b=!0,a[L](this,arguments)};O.addEventListener?(O.addEventListener("load",c,!1),O.addEventListener("DOMContentLoaded",c,!1)):O.attachEvent&&(O.attachEvent("onreadystatechange",function(){"complete"===P[oa]&&c[L](this,arguments)}),
O.attachEvent("onload",c))}},db=function(a){for(;a.firstChild;)a[ta](a.firstChild)},eb={button:!0,div:!0,span:!0};var W;W=Q(O,"___jsl",R());Q(W,"I",0);Q(W,"hel",10);var fb=function(a){return W.dpo?W.h:V(a,"jsh",W.h)},hb=function(a){var b=Q(W,"sws",[]);b[s][L](b,a)},ib=function(a){var b=Q(W,"PQ",[]);W.PQ=[];var c=b[C];if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)},jb=function(a){return Q(Q(W,"H",R()),a,R())};var kb=Q(W,"perf",R()),lb=Q(kb,"g",R()),mb=Q(kb,"i",R());Q(kb,"r",[]);R();R();var nb=function(a,b,c){var d=kb.r;"function"===typeof d?d(a,b,c):d[s]([a,b,c])},ob=function(a,b,c){lb[a]=!b&&lb[a]||c||(new Date)[ra]();nb(a)},qb=function(a,b,c){b&&0<b[C]&&(b=pb(b),c&&0<c[C]&&(b+="___"+pb(c)),28<b[C]&&(b=b[B](0,28)+(b[C]-28)),c=b,b=Q(mb,"_p",R()),Q(b,c,R())[a]=(new Date)[ra](),nb(a,"_p",c))},pb=function(a){return a[N]("__")[u](/\./g,"_")[u](/\-/g,"_")[u](/\,/g,"_")};var rb=R(),sb=[],X=function(a){throw Error("Bad hint"+(a?": "+a:""));};sb[s](["jsl",function(a){for(var b in a)if(S(a,b)){var c=a[b];"object"==typeof c?W[b]=Q(W,b,[])[ka](c):Q(W,b,c)}if(b=a.u)a=Q(W,"us",[]),a[s](b),(b=/^https:(.*)$/[ha](b))&&a[s]("http:"+b[1])}]);var tb=/^(\/[a-zA-Z0-9_\-]+)+$/,ub=/^[a-zA-Z0-9\-_\.!]+$/,vb=/^gapi\.loaded_[0-9]+$/,wb=/^[a-zA-Z0-9,._-]+$/,Ab=function(a,b,c,d){var e=a[E](";"),f=rb[e[ga]()],g=null;f&&(g=f(e,b,c,d));if(b=g)b=g,c=b[x](xb),d=b[x](yb),b=!!d&&1===d[C]&&zb[t](b)&&!!c&&1===c[C];b||X(a);return g},Db=function(a,b,c,d){a=Bb(a);vb[t](c)||X("invalid_callback");b=Cb(b);d=d&&d[C]?Cb(d):null;var e=function(a){return aa(a)[u](/%2C/g,",")};return[aa(a.S)[u](/%2C/g,",")[u](/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):
"","/rt=j/sv=1/d=1/ed=1",a.G?"/am="+e(a.G):"",a.H?"/rs="+e(a.H):"","/cb=",e(c)][N]("")},Bb=function(a){"/"!==a[la](0)&&X("relative path");for(var b=a[wa](1)[E]("/"),c=[];b[C];){a=b[ga]();if(!a[C]||0==a[w]("."))X("empty/relative directory");else if(0<a[w]("=")){b.unshift(a);break}c[s](a)}a={};for(var d=0,e=b[C];d<e;++d){var f=b[d][E]("="),g=da(f[0]),h=da(f[1]);2==f[C]&&g&&h&&(a[g]=a[g]||h)}b="/"+c[N]("/");tb[t](b)||X("invalid_prefix");c=Eb(a,"k",!0);d=Eb(a,"am");a=Eb(a,"rs");return{S:b,version:c,G:d,
H:a}},Cb=function(a){for(var b=[],c=0,d=a[C];c<d;++c){var e=a[c][u](/\./g,"_")[u](/-/g,"_");wb[t](e)&&b[s](e)}return b[N](",")},Eb=function(a,b,c){a=a[b];!a&&c&&X("missing: "+b);if(a){if(ub[t](a))return a;X("invalid: "+b)}return null},zb=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,yb=/\/cb=/g,xb=/\/\//g,Fb=function(){var a=fb(Fa[K]);if(!a)throw Error("Bad hint");return a};rb.m=function(a,b,c,d){(a=a[0])||X("missing_hint");return"https://apis.google.com"+Db(a,b,c,d)};var Gb=decodeURI("%73cript"),Hb=function(a,b){for(var c=[],d=0;d<a[C];++d){var e=a[d];e&&0>Ia[I](b,e)&&c[s](e)}return c},Jb=function(a){"loading"!=P[oa]?Ib(a):P.write("<"+Gb+' src="'+encodeURI(a)+'"></'+Gb+">")},Ib=function(a){var b=P[z](Gb);b[A]("src",a);b.async="true";(a=P[sa](Gb)[0])?a[M].insertBefore(b,a):(P.head||P.body||P.documentElement)[fa](b)},Kb=function(a,b){var c=b&&b._c;if(c)for(var d=0;d<sb[C];d++){var e=sb[d][0],f=sb[d][1];f&&S(c,e)&&f(c[e],a,b)}},Mb=function(a,b){Lb(function(){var c;
c=b===fb(Fa[K])?Q(U,"_",R()):R();c=Q(jb(b),"_",c);a(c)})},Ob=function(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Kb(a,c);var d=a?a[E](":"):[],e=c.h||Fb(),f=Q(W,"ah",R());if(f["::"]&&d[C]){for(var g=[],h=null;h=d[ga]();){var l=h[E]("."),l=f[h]||f[l[1]&&"ns:"+l[0]||""]||e,m=g[C]&&g[g[C]-1]||null,n=m;m&&m.hint==l||(n={hint:l,K:[]},g[s](n));n.K[s](h)}var y=g[C];if(1<y){var r=c.callback;r&&(c.callback=function(){0==--y&&r()})}for(;d=g[ga]();)Nb(d.K,c,d.hint)}else Nb(d||[],c,e)},Nb=function(a,
b,c){a=Ja(a)||[];var d=b.callback,e=b.config,f=b.timeout,g=b.ontimeout,h=null,l=!1;if(f&&!g||!f&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=Q(jb(c),"r",[]).sort(),n=Q(jb(c),"L",[]).sort(),y=[][ka](m),r=function(a,b){if(l)return 0;O.clearTimeout(h);n[s][L](n,v);var d=((U||{}).config||{})[za];d?d(e):e&&Q(W,"cu",[])[s](e);if(b){qb("me0",a,y);try{Mb(b,c)}finally{qb("me1",a,y)}}return 1};0<f&&(h=O.setTimeout(function(){l=!0;g()},f));var v=Hb(a,n);if(v[C]){var v=
Hb(a,m),H=Q(W,"CP",[]),Z=H[C];H[Z]=function(a){if(!a)return 0;qb("ml1",v,y);var b=function(b){H[Z]=null;r(v,a)&&ib(function(){d&&d();b()})},c=function(){var a=H[Z+1];a&&a()};0<Z&&H[Z-1]?H[Z]=function(){b(c)}:b(c)};if(v[C]){var gb="loaded_"+W.I++;U[gb]=function(a){H[Z](a);U[gb]=null};a=Ab(c,v,"gapi."+gb,m);m[s][L](m,v);qb("ml0",v,y);b.sync||O.___gapisync?Jb(a):Ib(a)}else H[Z](Ga)}else r(v)&&d&&d()};var Lb=function(a){if(W.hee&&0<W.hel)try{return a()}catch(b){W.hel--,Ob("debug_error",function(){try{k.___jsl.hefn(b)}catch(a){throw b;}})}else return a()};U.load=function(a,b){return Lb(function(){return Ob(a,b)})};var Pb=function(a){var b=k.___jsl=k.___jsl||{};b[a]=b[a]||[];return b[a]},Qb=function(a){var b=k.___jsl=k.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Rb=function(a){return"object"===typeof a&&/\[native code\]/[t](a[s])},Sb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Rb(a[c])&&!Rb(b[c])?Sb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Rb(b[c])?[]:{},Sb(a[c],b[c])):a[c]=b[c])},Tb=function(a){if(a&&!/^\s+$/[t](a)){for(;0==a[va](a[C]-
1);)a=a[wa](0,a[C]-1);var b;try{b=k[ma].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(d){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(e){}return"object"===typeof b?b:{}}},Ub=function(a){Qb(!0);var b=k.___gcfg,c=Pb("cu");if(b&&b!==k.___gu){var d={};Sb(d,b);c[s](d);k.___gu=b}var b=Pb("cu"),e=p.scripts||p[sa]("script")||[],d=[],f=[];f[s][L](f,Pb("us"));for(var g=0;g<e[C];++g)for(var h=e[g],l=0;l<f[C];++l)h.src&&
0==h.src[w](f[l])&&d[s](h);0==d[C]&&0<e[C]&&e[e[C]-1].src&&d[s](e[e[C]-1]);for(e=0;e<d[C];++e)d[e][J]("gapi_processed")||(d[e][A]("gapi_processed",!0),(f=d[e])?(g=f.nodeType,f=3==g||4==g?f.nodeValue:f.textContent||f.innerText||f.innerHTML||""):f=void 0,(f=Tb(f))&&b[s](f));a&&(d={},Sb(d,a),c[s](d));d=Pb("cd");a=0;for(b=d[C];a<b;++a)Sb(Qb(),d[a]);d=Pb("ci");a=0;for(b=d[C];a<b;++a)Sb(Qb(),d[a]);a=0;for(b=c[C];a<b;++a)Sb(Qb(),c[a])},Y=function(a){if(!a)return Qb();a=a[E]("/");for(var b=Qb(),c=0,d=a[C];b&&
"object"===typeof b&&c<d;++c)b=b[a[c]];return c===a[C]&&void 0!==b?b:void 0},Vb=function(a,b){var c=a;if("string"===typeof a){for(var d=c={},e=a[E]("/"),f=0,g=e[C];f<g-1;++f)var h={},d=d[e[f]]=h;d[e[f]]=b}Ub(c)};var Wb=function(){var a=k.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),Q(W,"ci",[])[s](a),k.__GOOGLEAPIS=void 0)};var Xb=k.console,Yb=function(a){Xb&&Xb.log&&Xb.log(a)};var Zb=function(){return!!W.oa},$b=function(){};var $=Q(W,"rw",R()),ac=function(a){for(var b in $)a($[b])},bc=function(a,b){var c=$[a];c&&c.state<b&&(c.state=b)};var cc;var dc=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/u\/(\d)\//,ec=/^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?\#]*)?\/b\/(\d{10,})\//,fc=function(a){var b=Y("googleapis.config/sessionIndex");null==b&&(b=k.__X_GOOG_AUTHUSER);if(null==b){var c=k.google;c&&(b=c.authuser)}null==b&&(a=a||k[F][K],b=V(a,"authuser")||null,null==b&&(b=(b=a[x](dc))?b[1]:null));return null==b?null:q(b)},gc=function(a){var b=Y("googleapis.config/sessionDelegate");null==b&&(b=(a=(a||k[F][K])[x](ec))?
a[1]:null);return null==b?null:q(b)};var hc=function(){};var ic=function(){this.b=[];this.n=[];this.N=[];this.k=[];this.k[0]=128;for(var a=1;64>a;++a)this.k[a]=0;this.reset()};(function(){function a(){}a.prototype=hc[D];ic.Z=hc[D];ic.prototype=new a})();ic[D].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.o=this.i=0};
var jc=function(a,b,c){c||(c=0);var d=a.N;if("string"==typeof b)for(var e=0;16>e;e++)d[e]=b[va](c)<<24|b[va](c+1)<<16|b[va](c+2)<<8|b[va](c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var g=a.b[2],h=a.b[3],l=a.b[4],m,e=0;80>e;e++)40>e?20>e?(f=h^c&(g^h),m=1518500249):(f=c^g^h,m=1859775393):60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=3395469782),f=(b<<5|b>>>27)+
f+l+m+d[e]&4294967295,l=h,h=g,g=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295};ic[D].update=function(a,b){void 0===b&&(b=a[C]);for(var c=b-64,d=0,e=this.n,f=this.i;d<b;){if(0==f)for(;d<=c;)jc(this,a,d),d+=64;if("string"==typeof a)for(;d<b;){if(e[f]=a[va](d),++f,++d,64==f){jc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,64==f){jc(this,e);f=0;break}}this.i=f;this.o+=b};var kc=function(){this.p=new ic};kc[D].reset=function(){this.p.reset()};var rc=function(){var a;lc?(a=new O.Uint32Array(1),mc.getRandomValues(a),a=Number("0."+a[0])):(a=nc,a+=ca(oc[B](0,20),16),oc=pc(oc),a/=qc+Math.pow(16,20));return a},mc=O.crypto,lc=!1,sc=0,tc=0,nc=1,qc=0,oc="",uc=function(a){a=a||O.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=b*((new Date)[ra]()%1E6);nc=nc*b%qc;0<sc&&++tc==sc&&$a("mousemove",uc,"remove","de")},pc=function(a){var b=new kc;a=unescape(aa(a));for(var c=[],d=0,e=a[C];d<e;++d)c[s](a[va](d));b.p[za](c);a=b.p;b=[];d=8*a.o;
56>a.i?a[za](a.k,56-a.i):a[za](a.k,64-(a.i-56));for(c=63;56<=c;c--)a.n[c]=d&255,d/=256;jc(a,a.n);for(c=d=0;5>c;c++)for(e=24;0<=e;e-=8)b[d]=a.b[c]>>e&255,++d;a="";for(c=0;c<b[C];c++)a+="0123456789ABCDEF"[la](Math.floor(b[c]/16))+"0123456789ABCDEF"[la](b[c]%16);return a},lc=!!mc&&"function"==typeof mc.getRandomValues;lc||(qc=1E6*(screen[ia]*screen[ia]+screen[Aa]),oc=pc(P.cookie+"|"+P[F]+"|"+(new Date)[ra]()+"|"+Math.random()),sc=Y("random/maxObserveMousemove")||0,0!=sc&&$a("mousemove",uc,"add","at"));var vc=function(){var a=W.onl;if(!a){a=R();W.onl=a;var b=R();a.e=function(a){var d=b[a];d&&(delete b[a],d())};a.a=function(a,d){b[a]=d};a.r=function(a){delete b[a]}}return a},wc=function(a,b){var c=b.onload;return"function"===typeof c?(vc().a(a,c),c):null},xc=function(a){Sa(/^\w+$/[t](a),"Unsupported id - "+a);vc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},yc=function(a){vc().r(a)};var zc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Ac={allowtransparency:!0,onload:!0},Bc=0,Cc=function(a){Sa(!a||Za[t](a),"Illegal url for new iframe - "+a)},Dc=function(a,b,c,d,e){Cc(c.src);var f,g=wc(d,c),h=g?xc(d):"";try{f=a[z]('<iframe frameborder="'+Pa(q(c.frameborder))+'" scrolling="'+Pa(q(c.scrolling))+'" '+h+' name="'+Pa(q(c.name))+'"/>')}catch(l){f=a[z]("iframe"),g&&(f.onload=function(){f.onload=
null;g[I](this)},yc(d))}for(var m in c)a=c[m],"style"===m&&"object"===typeof a?T(a,f[G]):Ac[m]||f[A](m,q(a));(m=e&&e.beforeNode||null)||e&&e.dontclear||db(b);b.insertBefore(f,m);f=m?m.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=!0);return f};var Ec=/^:[\w]+$/,Fc=/:([a-zA-Z_]+):/g,Gc=function(a,b){if(!cc||Y("oauth-flow/authAware")){var c=fc()||"0",d=gc(),e;e=fc(void 0)||c;var f=gc(void 0),g="";e&&(g+="u/"+e+"/");f&&(g+="b/"+f+"/");e=g||null;f=Y("oauth-flow/authAware")?"isLoggedIn":"googleapis.config/signedIn";(f=!1===Y(f)?"_/im/":"")&&(e="");cc={socialhost:Y("iframes/:socialhost:"),session_index:c,session_delegate:d,session_prefix:e,im_prefix:f}}return cc[b]||""};var Hc=function(a){var b;a[x](/^https?%3A/i)&&(b=da(a));return Ya(p,b?b:a)},Ic=function(a){a=a||"canonical";for(var b=p[sa]("link"),c=0,d=b[C];c<d;c++){var e=b[c],f=e[J]("rel");if(f&&f[Ba]()==a&&(e=e[J]("href"))&&(e=Hc(e))&&null!=e[x](/^https?:\/\/[\w\-\_\.]+/i))return e}return k[F][K]};var Jc={post:!0},Kc={style:"position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"},Lc="onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(" "),Mc=Q(W,"WI",R()),Nc=function(a,b,c){var d,e;d=e=a;"plus"==a&&b[xa]&&(e=a+"_"+b[xa],d=a+"/"+b[xa]);(e=Y("iframes/"+e+"/url"))||(e=":socialhost:/_/widget/render/"+d);d=Ya(P,e[u](Fc,Gc));e={};T(b,e);e.hl=Y("lang")||Y("gwidget/lang")||"en-US";Jc[a]||(e.origin=k[F].origin||k[F][ua]+"//"+k[F].host);e.exp=Y("iframes/"+
a+"/params/exp");var f=Y("iframes/"+a+"/params/location");if(f)for(var g=0;g<f[C];g++){var h=f[g];e[h]=O[F][h]}switch(a){case "plus":case "follow":f=e[K];g=b[xa]?void 0:"publisher";f=(f="string"==typeof f?f:void 0)?Hc(f):Ic(g);e.url=f;delete e[K];break;case "plusone":e.url=b[K]?Hc(b[K]):Ic();f=b.db;g=Y();null==f&&g&&(f=g.db,null==f&&(f=g.gwidget&&g.gwidget.db));e.db=f||void 0;f=b.ecp;g=Y();null==f&&g&&(f=g.ecp,null==f&&(f=g.gwidget&&g.gwidget.ecp));e.ecp=f||void 0;delete e[K];break;case "signin":e.url=
Ic()}W.ILI&&(e.iloader="1");delete e["data-onload"];delete e.rd;e.gsrc=Y("iframes/:source:");f=Y("inline/css");"undefined"!==typeof f&&0<c&&f>=c&&(e.ic="1");f=/^#|^fr-/;c={};for(var l in e)S(e,l)&&f[t](l)&&(c[l[u](f,"")]=e[l],delete e[l]);l=[][ka](Lc);(f=Y("iframes/"+a+"/methods"))&&"object"===typeof f&&Ha[t](f[s])&&(l=l[ka](f));for(var m in b)S(b,m)&&/^on/[t](m)&&("plus"!=a||"onconnect"!=m)&&(l[s](m),delete e[m]);delete e.callback;c._methods=l[N](",");return Xa(d,e,c)},Oc=["style","data-gapiscan"],
Qc=function(a){for(var b=R(),c=0!=a[na][Ba]()[w]("g:"),d=0,e=a[ya][C];d<e;d++){var f=a[ya][d],g=f.name,h=f.value;0<=Ia[I](Oc,g)||c&&0!=g[w]("data-")||"null"===h||"specified"in f&&!f.specified||(c&&(g=g[B](5)),b[g[Ba]()]=h)}a=a[G];(c=Pc(a&&a[Aa]))&&(b.height=q(c));(a=Pc(a&&a[ia]))&&(b.width=q(a));return b},Pc=function(a){var b=void 0;"number"===typeof a?b=a:"string"===typeof a&&(b=ca(a,10));return b},Sc=function(){var a=W.drw;ac(function(b){if(a!==b.id&&4!=b.state){var c=b.id,d=b[pa],e=b.url;b=b.userParams;
var f=P[ja](c);if(f){var g=Nc(d,b,0);g?(f=f[M],e[u](/\#.*/,"")[u](/(\?|&)ic=1/,"")!==g[u](/\#.*/,"")[u](/(\?|&)ic=1/,"")&&(b.dontclear=!0,b.rd=!0,b.ri=!0,ea(b,d),Rc(f,b),(d=$[f.lastChild.id])&&(d.oid=c),bc(c,4))):delete $[c]}else delete $[c]}})},Tc=function(){};var Uc,Vc,Wc,Xc,Yc,Zc=/(?:^|\s)g-((\S)*)(?:$|\s)/,$c={plusone:!0,autocomplete:!0,profile:!0};Uc=Q(W,"SW",R());Vc=Q(W,"SA",R());Wc=Q(W,"SM",R());Xc=Q(W,"FW",[]);Yc=null;
var bd=function(a,b){ad(void 0,!1,a,b)},ad=function(a,b,c,d){ob("ps0",!0);c=("string"===typeof c?p[ja](c):c)||P;var e;e=P.documentMode;if(c.querySelectorAll&&(!e||8<e)){e=d?[d]:Qa(Uc)[ka](Qa(Vc))[ka](Qa(Wc));for(var f=[],g=0;g<e[C];g++){var h=e[g];f[s](".g-"+h,"g\\:"+h)}e=c.querySelectorAll(f[N](","))}else e=c[sa]("*");c=R();for(f=0;f<e[C];f++){g=e[f];var l=g,h=d,m=l[na][Ba](),n=void 0;l[J]("data-gapiscan")?h=null:(0==m[w]("g:")?n=m[B](2):(l=(l=q(l.className||l[J]("class")))&&Zc[ha](l))&&(n=l[1]),
h=!n||!(Uc[n]||Vc[n]||Wc[n])||h&&n!==h?null:n);h&&($c[h]||0==g[na][Ba]()[w]("g:")||0!=Qa(Qc(g))[C])&&(g[A]("data-gapiscan",!0),Q(c,h,[])[s](g))}if(b)for(var y in c)for(b=c[y],d=0;d<b[C];d++)b[d][A]("data-onload",!0);for(var r in c)Xc[s](r);ob("ps1",!0);if((y=Xc[N](":"))||a)try{U.load(y,a)}catch(v){Yb(v);return}if(cd(Yc||{}))for(var H in c){a=c[H];r=0;for(b=a[C];r<b;r++)a[r].removeAttribute("data-gapiscan");dd(H)}else{d=[];for(H in c)for(a=c[H],r=0,b=a[C];r<b;r++)e=a[r],ed(H,e,Qc(e),d,b);fd(y,d)}},
gd=function(a){var b=Q(U,a,{});b.go||(b.go=function(b){return bd(b,a)},b.render=function(b,d){var e=d||{};ea(e,a);return Rc(b,e)})},hd=function(a){Uc[a]=!0},id=function(a){Vc[a]=!0},jd=function(a){Wc[a]=!0};var dd=function(a,b){var c=Q(W,"watt",R())[a];b&&c?(c(b),(c=b.iframeNode)&&c[A]("data-gapiattached",!0)):U.load(a,function(){var c=Q(W,"watt",R())[a],e=b&&b.iframeNode;e&&c?(c(b),e[A]("data-gapiattached",!0)):(0,U[a].go)(e&&e[M])})},cd=function(){return!1},fd=function(){},ed=function(a,b,c,d,e,f){switch(kd(b,a,f)){case 0:a=Wc[a]?a+"_annotation":a;d={};d.iframeNode=b;d.userParams=c;dd(a,d);break;case 1:if(b[M]){f=!0;c.dontclear&&(f=!1);delete c.dontclear;var g=Nc(a,c,e);e={allowPost:1,attributes:Kc};
e.dontclear=!f;f={};f.userParams=c;f.url=g;ea(f,a);var h;c.rd?h=b:(h=p[z]("div"),b[A]("data-gapistub",!0),h[G].cssText="position:absolute;width:450px;left:-10000px;",b[M].insertBefore(h,b));f.siteElement=h;if(!h.id){b=h;var l;Q(Mc,a,0);l="___"+a+"_"+Mc[a]++;b.id=l}b=R();b[">type"]=a;T(c,b);$b();var m;l=g;c=h;g=e||{};e=g[ya]||{};Sa(!g.allowPost||!e.onload,"onload is not supported by post iframe");b=e=l;Ec[t](e)&&(b=Y("iframes/"+b[wa](1)+"/url"),Sa(!!b,"Unknown iframe url config for - "+e));l=Ya(P,
b[u](Fc,Gc));e=c.ownerDocument||P;h=0;do b=g.id||["I",Bc++,"_",(new Date)[ra]()][N]("");while(e[ja](b)&&5>++h);Sa(5>h,"Error creating iframe id");h={};var n={};T(g.queryParams||{},h);T(g.fragmentParams||{},n);var y=g.pfname,r=R();r.id=b;r.parent=e[F][ua]+"//"+e[F].host;var v=V(e[F][K],"parent"),y=y||"";!y&&v&&(v=V(e[F][K],"id",""),y=V(e[F][K],"pfname",""),y=v?y+"/"+v:"");r.pfname=y;T(r,n);(r=V(l,"rpctoken")||h.rpctoken||n.rpctoken)||(r=n.rpctoken=g.rpctoken||q(Math.round(1E8*rc())));g.rpctoken=r;
v=e[F][K];r=R();(y=V(v,"_bsh",W.bsh))&&(r._bsh=y);(v=fb(v))&&(r.jsh=v);g.hintInFragment?T(r,n):T(r,h);l=Xa(l,h,n,g.paramsSerializer);n=R();T(zc,n);T(g[ya],n);n.name=n.id=b;n.src=l;g.eurl=l;if((g||{}).allowPost&&2E3<l[C]){h=Ua(l);n.src="";n["data-postorigin"]=l;l=Dc(e,c,n,b);-1!=navigator.userAgent[w]("WebKit")&&(m=l.contentWindow.document,m.open(),n=m[z]("div"),r={},v=b+"_inner",r.name=v,r.src="",r.style="display:none",Dc(e,n,r,v,g));n=(g=h.g[0])?g[E]("&"):[];g=[];for(r=0;r<n[C];r++)v=n[r][E]("=",
2),g[s]([da(v[0]),da(v[1])]);h.g=[];n=Va(h);h=e[z]("form");h.action=n;h.method="POST";h.target=b;h[G].display="none";for(b=0;b<g[C];b++)n=e[z]("input"),ea(n,"hidden"),n.name=g[b][0],n.value=g[b][1],h[fa](n);c[fa](h);h.submit();h[M][ta](h);m&&m.close();m=l}else m=Dc(e,c,n,b,g);f.iframeNode=m;f.id=m[J]("id");m=f.id;c=R();c.id=m;c.userParams=f.userParams;c.url=f.url;ea(c,f[pa]);c.state=1;$[m]=c}else f=null;f&&((m=f.id)&&d[s](m),dd(a,f))}},kd=function(a,b,c){if(a&&1===a.nodeType&&b){if(c)return 1;if(Wc[b]){if(eb[a[na][Ba]()])return(a=
a.innerHTML)&&a[u](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}else{if(Vc[b])return 0;if(Uc[b])return 1}}return null},Rc=function(a,b){var c=b[pa];delete b[pa];var d=("string"===typeof a?p[ja](a):a)||void 0;if(d){var e={},f;for(f in b)S(b,f)&&(e[f[Ba]()]=b[f]);e.rd=1;(f=!!e.ri)&&delete e.ri;var g=[];ed(c,d,e,g,0,f);fd(c,g)}else Yb("string"==="gapi."+c+".render: missing element "+typeof a?a:"")};Q(U,"platform",{}).go=bd;var cd=function(a){for(var b=["_c","jsl","h"],c=0;c<b[C]&&a;c++)a=a[b[c]];b=fb(Fa[K]);return!a||0!=a[w]("n;")&&0!=b[w]("n;")&&a!==b},fd=function(a,b){ld(a,b)},ab=function(a){ad(a,!0)},md=function(a,b){for(var c=b||[],d=0;d<c[C];++d)a(c[d]);for(d=0;d<c[C];d++)gd(c[d])};sb[s](["platform",function(a,b,c){Yc=c;b&&Xc[s](b);md(hd,a);md(id,c._c.annotation);md(jd,c._c.bimodal);Wb();Ub();if("explicit"!=Y("parsetags")){hb(a);var d;c&&(a=c.callback)&&(d=Ra(a),delete c.callback);cb(function(){ab(d)})}}]);var nd=function(a){a=(a=$[a])?a.oid:void 0;if(a){var b=P[ja](a);b&&b[M][ta](b);delete $[a];nd(a)}},Tc=function(a,b,c){if(c[ia]&&c[Aa]){n:{c=c||{};if(Zb()){var d=b.id;if(d){var e;e=(e=$[d])?e.state:void 0;if(1===e||4===e)break n;nd(d)}}(e=a.nextSibling)&&e[J]&&e[J]("data-gapistub")&&(a[M][ta](e),a[G].cssText="");e=c[ia];var f=c[Aa],g=a[G];g.textIndent="0";g.margin="0";g.padding="0";g.background="transparent";g.borderStyle="none";g.cssFloat="none";g.styleFloat="none";g.lineHeight="normal";g.fontSize=
"1px";g.verticalAlign="baseline";a=a[G];a.display="inline-block";g=b[G];g.position="static";g.left=0;g.top=0;g.visibility="visible";e&&(a.width=g.width=e+"px");f&&(a.height=g.height=f+"px");c.verticalAlign&&(a.verticalAlign=c.verticalAlign);d&&bc(d,3)}b["data-csi-wdt"]=(new Date)[ra]()}};var od=/^\{h\:'/,pd=/^!_/,qd="",ld=function(a,b){function c(){$a("message",d,"remove","de")}function d(d){var g=d.data,h=d.origin;if(rd(g,b)){var l=e;e=!1;l&&ob("rqe");sd(a,function(){l&&ob("rqd");c();for(var a=Q(W,"RPMQ",[]),b=0;b<a[C];b++)a[b]({data:g,origin:h})})}}if(0!==b[C]&&k[ma]&&k[ma].parse){qd=V(Fa[K],"pfname","");var e=!0;$a("message",d,"add","at");Ob(a,c)}},rd=function(a,b){a=q(a);if(od[t](a))return!0;var c=!1;pd[t](a)&&(c=!0,a=a[B](2));if(!/^\{/[t](a))return!1;try{var d=k[ma].parse(a)}catch(e){return!1}if(!d)return!1;
var f=d.f;if(d.s&&f&&-1!=Ia[I](b,f)){if("_renderstart"===d.s||d.s===qd+"/"+f+"::_renderstart")c=d.a&&d.a[c?0:1],d=P[ja](f),bc(f,2),c&&d&&Tc(d[M],d,c);return!0}return!1},sd=function(a,b){Ob(a,b)};var td=function(a,b){this.A=a;var c=b||{};this.P=c.V;this.w=c.domain;this.B=c.path;this.Q=c.W},ud=/^[-+/_=.:|%&a-zA-Z0-9@]*$/,vd=/^[A-Z_][A-Z0-9_]{0,63}$/;td[D].write=function(a,b){if(!vd[t](this.A))throw"Invalid cookie name";if(!ud[t](a))throw"Invalid cookie value";var c=this.A+"="+a;this.w&&(c+=";domain="+this.w);this.B&&(c+=";path="+this.B);var d="number"===typeof b?b:this.P;if(0<=d){var e=new Date;e.setSeconds(e.getSeconds()+d);c+=";expires="+e.toUTCString()}this.Q&&(c+=";secure");p.cookie=c};
td.iterate=function(a){for(var b=p.cookie[E](/;\s*/),c=0;c<b[C];++c){var d=b[c][E]("="),e=d[ga]();a(e,d[N]("="))}};var wd=function(a){this.T=a},xd={};wd[D].write=function(a){xd[this.T]=a};wd.iterate=function(a){for(var b in xd)xd.hasOwnProperty(b)&&a(b,xd[b])};var yd="https:"===k[F][ua],zd=yd||"http:"===k[F][ua]?td:wd,Ad=function(a){var b=a[B](1),c="",d=k[F].hostname;if(""!==b){c=ca(b,10);if(isNaN(c))return null;b=d[E](".");if(b[C]<c-1)return null;b[C]==c-1&&(d="."+d)}else d="";return{c:"S"==a[la](0),domain:d,d:c}},Bd=function(a){if(0!==a[w]("GCSC"))return null;var b={v:!1};a=a[B](4);if(!a)return b;var c=a[la](0);a=a[B](1);var d=a.lastIndexOf("_");if(-1==d)return b;var e=Ad(a[B](d+1));if(null==e)return b;a=a[wa](0,d);if("_"!==a[la](0))return b;d="E"===
c&&e.c;return!d&&("U"!==c||e.c)||d&&!yd?b:{v:!0,c:d,U:a[B](1),domain:e.domain,d:e.d}},Cd=function(a){if(!a)return[];a=a[E]("=");return a[1]?a[1][E]("|"):[]},Dd=function(a){a=a[E](":");return{q:a[0][E]("=")[1],L:Cd(a[1]),Y:Cd(a[2]),X:Cd(a[3])}},Ed=function(){var a,b=null;zd.iterate(function(c,d){if(0===c[w]("G_AUTHUSER_")){var e=Ad(c[wa](11));if(!a||e.c&&!a.c||e.c==a.c&&e.d>a.d)a=e,b=d}});if(null!==b){var c;zd.iterate(function(b,d){var e=Bd(b);e&&e.v&&e.c==a.c&&e.d==a.d&&(c=d)});if(c){var d=Dd(c),
e=d&&d.L[Number(b)],d=d&&d.q;if(e)return{M:b,O:e,q:d}}}return null};var Fd=function(a){this.F=a};Fd[D].j=0;Fd[D].D=2;Fd[D].F=null;Fd[D].t=!1;Fd[D].J=function(){this.t||(this.j=0,this.t=!0,this.C())};Fd[D].C=function(){this.t&&(this.F()?this.j=this.D:this.j=Math.min(2*(this.j||this.D),120),k.setTimeout(Ea(this.C,this),1E3*this.j))};for(var Gd=0;64>Gd;++Gd);var Hd=null,Zb=function(){return W.oa=!0},$b=function(){W.oa=!0;var a=Ed();(a=a&&a.M)&&Vb("googleapis.config/sessionIndex",a);Hd||(Hd=Q(W,"ss",new Fd(Id)));a=Hd;a.J&&a.J()},Id=function(){var a=Ed(),b=a&&a.O||null,c=a&&a.q;Ob("auth",{callback:function(){var a={client_id:c,session_state:b};O.gapi.auth.checkSessionState(a,function(b){var c=a.session_state,g=Y("isLoggedIn");b=c&&b||!c&&!b;g!=b&&(Vb("isLoggedIn",b),$b(),Sc())})}});return!0};ob("bs0",!0,k.gapi._bs);ob("bs1",!0);delete k.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"":{"enableMultilogin":false},"client":{"cors":false},"plus_layer":{"isEnabled":false},"isLoggedIn":true,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv\u003do"},"plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv\u003do"},"signin":{"methods":["onauth"],"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/signin?bsv\u003do"},"commentcount":{"url":":socialhost:/:session_prefix:_/widget/render/commentcount?bsv\u003do"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv\u003do"},"hangout":{"url":"https://talkgadget.google.com/:session_prefix:talkgadget/_/widget?bsv\u003do"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv\u003do"},"zoomableimage":{"url":"https://ssl.gstatic.com/microscope/embed/?bsv\u003do"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv\u003do"},"shortlists":{"url":"?bsv\u003do"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv\u003do"},":socialhost:":"https://apis.google.com","rbr_s":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarsimplescroller?bsv\u003do"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv\u003do"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv\u003do"},":source:":"3p","rbr_i":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobarinvitation?bsv\u003do"},"panoembed":{"url":"https://ssl.gstatic.com/pano/embed/?bsv\u003do"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv\u003do"},"appcirclepicker":{"url":":socialhost:/:session_prefix:_/widget/render/appcirclepicker?bsv\u003do"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?usegapi\u003d1\u0026bsv\u003do"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv\u003do\u0026usegapi\u003d1"},"comments":{"methods":["scroll","openwindow"],"params":{"location":["search","hash"]},"url":":socialhost:/:session_prefix:_/widget/render/comments?bsv\u003do"},"ytsubscribe":{"url":"https://www.youtube.com/subscribe_embed?bsv\u003do\u0026usegapi\u003d1"}},"isPlusUser":true,"debug":{"host":"https://apis.google.com","reportExceptionRate":0.05,"rethrowException":false},"deviceType":"desktop","inline":{"css":1},"lexps":[102,98,99,111,79,109,45,17,117,86,115,81,95,122,61,30],"oauth-flow":{"authAware":true,"eso":false,"disableOpt":true,"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay","toastCfg":"1000:3000:1000"},"report":{"host":"https://apis.google.com","rate":0.001,"apis":["iframes\\..*","gadgets\\..*","gapi\\.appcirclepicker\\.*","gapi\\.client\\..*"]},"csi":{"rate":0.01},"googleapis.config":{}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.P-D4yoawNkQ.O/m\u003d__features__/am\u003dIQ/rt\u003dj/d\u003d1/rs\u003dAItRSTPwaT-jc62SvBufT4ZdUEyZ76SCxw","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"28709be133e9a0602f62bd49802a8a781987fc23","dpo":false},"platform":["additnow","comments","commentcount","community","follow","page","panoembed","person","plus","plusone","savetodrive","shortlists","ytsubscribe","zoomableimage","post","savetowallet","hangout"],"fp":"28709be133e9a0602f62bd49802a8a781987fc23","annotation":["interactivepost","recobar","autocomplete","profile"],"bimodal":["signin"]}});