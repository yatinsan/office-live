(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ic="170",Gu=0,Oc=1,Vu=2,Uf=1,Nf=2,Si=3,$i=0,xn=1,Nt=2,Xi=0,qs=1,rl=2,Fc=3,kc=4,Wu=5,ls=100,Xu=101,qu=102,Yu=103,$u=104,Zu=200,Ku=201,ju=202,Ju=203,ol=204,al=205,Qu=206,ed=207,td=208,nd=209,id=210,sd=211,rd=212,od=213,ad=214,ll=0,cl=1,hl=2,Ks=3,fl=4,ul=5,dl=6,pl=7,Of=0,ld=1,cd=2,qi=0,hd=1,fd=2,ud=3,Ff=4,dd=5,pd=6,md=7,kf=300,js=301,Js=302,ml=303,gl=304,Go=306,Zi=1e3,hs=1001,xl=1002,ti=1003,gd=1004,Xr=1005,ci=1006,ea=1007,fs=1008,Pi=1009,Bf=1010,zf=1011,Dr=1012,sc=1013,ps=1014,Ei=1015,zr=1016,rc=1017,oc=1018,Qs=1020,Hf=35902,Gf=1021,Vf=1022,ei=1023,Wf=1024,Xf=1025,Ys=1026,er=1027,qf=1028,ac=1029,Yf=1030,lc=1031,cc=1033,To=33776,Ao=33777,Ro=33778,Co=33779,_l=35840,vl=35841,Ml=35842,yl=35843,Sl=36196,bl=37492,wl=37496,El=37808,Tl=37809,Al=37810,Rl=37811,Cl=37812,Pl=37813,Ll=37814,Il=37815,Dl=37816,Ul=37817,Nl=37818,Ol=37819,Fl=37820,kl=37821,Po=36492,Bl=36494,zl=36495,$f=36283,Hl=36284,Gl=36285,Vl=36286,xd=3200,_d=3201,Zf=0,vd=1,Vi="",Ut="srgb",sr="srgb-linear",Vo="linear",St="srgb",Ms=7680,Bc=519,Md=512,yd=513,Sd=514,Kf=515,bd=516,wd=517,Ed=518,Td=519,Wl=35044,zc="300 es",Ti=2e3,Do=2001;class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,Xl=180/Math.PI;function Ri(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function pn(n,e,t){return Math.max(e,Math.min(t,n))}function Ad(n,e){return(n%e+e)%e}function na(n,e,t){return(1-t)*n+t*e}function li(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,s,r,o,a,l,c){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],v=s[1],b=s[4],x=s[7],R=s[2],T=s[5],C=s[8];return r[0]=o*_+a*v+l*R,r[3]=o*m+a*b+l*T,r[6]=o*d+a*x+l*C,r[1]=c*_+h*v+f*R,r[4]=c*m+h*b+f*T,r[7]=c*d+h*x+f*C,r[2]=u*_+p*v+g*R,r[5]=u*m+p*b+g*T,r[8]=u*d+p*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=t*f+i*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ia.makeScale(e,t)),this}rotate(e){return this.premultiply(ia.makeRotation(-e)),this}translate(e,t){return this.premultiply(ia.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ia=new at;function jf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ur(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Rd(){const n=Ur("canvas");return n.style.display="block",n}const Hc={};function Ar(n){n in Hc||(Hc[n]=!0,console.warn(n))}function Cd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Pd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ld(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const dt={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(n.r=Ci(n.r),n.g=Ci(n.g),n.b=Ci(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(n.r=$s(n.r),n.g=$s(n.g),n.b=$s(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Vi?Vo:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $s(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Gc=[.64,.33,.3,.6,.15,.06],Vc=[.2126,.7152,.0722],Wc=[.3127,.329],Xc=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qc=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[sr]:{primaries:Gc,whitePoint:Wc,transfer:Vo,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:Vc,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:Gc,whitePoint:Wc,transfer:St,toXYZ:Xc,fromXYZ:qc,luminanceCoefficients:Vc,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}});let ys;class Id{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=Ur("canvas")),ys.width=e.width,ys.height=e.height;const i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ci(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ci(t[i]/255)*255):t[i]=Ci(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dd=0;class Jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sa(s[o].image)):r.push(sa(s[o]))}else r=sa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function sa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Id.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ud=0;class _n extends xs{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=hs,s=hs,r=ci,o=fs,a=ei,l=Pi,c=_n.DEFAULT_ANISOTROPY,h=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Ri(),this.name="",this.source=new Jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zi:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zi:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=kf;_n.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,i=0,s=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,x=(p+1)/2,R=(d+1)/2,T=(h+u)/4,C=(f+_)/4,P=(g+m)/4;return b>x&&b>R?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=C/i):x>R?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=P/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=P/r),this.set(i,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nd extends xs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends Nd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qf extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Od extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3];const u=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=u,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==u||c!==p||h!==g){let m=1-a;const d=l*u+c*p+h*g+f*_,v=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const R=Math.sqrt(b),T=Math.atan2(R,d*v);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const x=a*v;if(l=l*m+u*x,c=c*m+p*x,h=h*m+g*x,f=f*m+_*x,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=R,c*=R,h*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*f+l*p-c*u,e[t+1]=l*g+h*u+c*f-a*p,e[t+2]=c*g+h*p+a*u-l*f,e[t+3]=h*g-a*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),f=a(r/2),u=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=o*f+this._w*u,this._x=i*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*h,this.y=i+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new O,Yc=new rr;class or{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Yn):Yn.fromBufferAttribute(r,o),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(e.matrixWorld),this.union(qr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Yr.subVectors(this.max,fr),Ss.subVectors(e.a,fr),bs.subVectors(e.b,fr),ws.subVectors(e.c,fr),Di.subVectors(bs,Ss),Ui.subVectors(ws,bs),Qi.subVectors(Ss,ws);let t=[0,-Di.z,Di.y,0,-Ui.z,Ui.y,0,-Qi.z,Qi.y,Di.z,0,-Di.x,Ui.z,0,-Ui.x,Qi.z,0,-Qi.x,-Di.y,Di.x,0,-Ui.y,Ui.x,0,-Qi.y,Qi.x,0];return!oa(t,Ss,bs,ws,Yr)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,Ss,bs,ws,Yr))?!1:($r.crossVectors(Di,Ui),t=[$r.x,$r.y,$r.z],oa(t,Ss,bs,ws,Yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gi=[new O,new O,new O,new O,new O,new O,new O,new O],Yn=new O,qr=new or,Ss=new O,bs=new O,ws=new O,Di=new O,Ui=new O,Qi=new O,fr=new O,Yr=new O,$r=new O,es=new O;function oa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){es.fromArray(n,r);const a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=e.dot(es),c=t.dot(es),h=i.dot(es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Fd=new or,ur=new O,aa=new O;class Wo{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ur,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(aa)),this.expandByPoint(ur.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new O,la=new O,Zr=new O,Ni=new O,ca=new O,Kr=new O,ha=new O;class hc{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){la.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(la);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Zr),a=Ni.dot(this.direction),l=-Ni.dot(Zr),c=Ni.lengthSq(),h=Math.abs(1-o*o);let f,u,p,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const _=1/h;f*=_,u*=_,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(la).addScaledVector(Zr,u),p}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,i,s,r){ca.subVectors(t,e),Kr.subVectors(i,e),ha.crossVectors(ca,Kr);let o=this.direction.dot(ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(Kr.crossVectors(Ni,Kr));if(l<0)return null;const c=a*this.direction.dot(ca.cross(Ni));if(c<0||l+c>o)return null;const h=-a*Ni.dot(ha);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,i,s,r,o,a,l,c,h,f,u,p,g,_,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,f,u,p,g,_,m)}set(e,t,i,s,r,o,a,l,c,h,f,u,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),o=1/Es.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const u=o*h,p=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-_*c,t[9]=-a*l,t[2]=_-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*h,p=l*f,g=c*h,_=c*f;t[0]=u+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*h,p=l*f,g=c*h,_=c*f;t[0]=u-_*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*h,p=o*f,g=a*h,_=a*f;t[0]=l*h,t[4]=g*c-p,t[8]=u*c+_,t[1]=l*f,t[5]=_*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-u*f,t[8]=g*f+p,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*f+g,t[10]=u-_*f}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+_,t[5]=o*h,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*h,t[10]=_*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kd,e,Bd)}lookAt(e,t,i){const s=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Oi.crossVectors(i,Ln),Oi.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Oi.crossVectors(i,Ln)),Oi.normalize(),jr.crossVectors(Ln,Oi),s[0]=Oi.x,s[4]=jr.x,s[8]=Ln.x,s[1]=Oi.y,s[5]=jr.y,s[9]=Ln.y,s[2]=Oi.z,s[6]=jr.z,s[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],b=i[7],x=i[11],R=i[15],T=s[0],C=s[4],P=s[8],S=s[12],M=s[1],I=s[5],B=s[9],V=s[13],q=s[2],$=s[6],W=s[10],ne=s[14],F=s[3],ce=s[7],fe=s[11],we=s[15];return r[0]=o*T+a*M+l*q+c*F,r[4]=o*C+a*I+l*$+c*ce,r[8]=o*P+a*B+l*W+c*fe,r[12]=o*S+a*V+l*ne+c*we,r[1]=h*T+f*M+u*q+p*F,r[5]=h*C+f*I+u*$+p*ce,r[9]=h*P+f*B+u*W+p*fe,r[13]=h*S+f*V+u*ne+p*we,r[2]=g*T+_*M+m*q+d*F,r[6]=g*C+_*I+m*$+d*ce,r[10]=g*P+_*B+m*W+d*fe,r[14]=g*S+_*V+m*ne+d*we,r[3]=v*T+b*M+x*q+R*F,r[7]=v*C+b*I+x*$+R*ce,r[11]=v*P+b*B+x*W+R*fe,r[15]=v*S+b*V+x*ne+R*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+r*l*f-s*c*f-r*a*u+i*c*u+s*a*p-i*l*p)+_*(+t*l*p-t*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+t*c*f-t*a*p-r*o*f+i*o*p+r*a*h-i*c*h)+d*(-s*a*h-t*l*f+t*a*u+s*o*f-i*o*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=f*m*c-_*u*c+_*l*p-a*m*p-f*l*d+a*u*d,b=g*u*c-h*m*c-g*l*p+o*m*p+h*l*d-o*u*d,x=h*_*c-g*f*c+g*a*p-o*_*p-h*a*d+o*f*d,R=g*f*l-h*_*l-g*a*u+o*_*u+h*a*m-o*f*m,T=t*v+i*b+s*x+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(_*u*r-f*m*r-_*s*p+i*m*p+f*s*d-i*u*d)*C,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*d+i*l*d)*C,e[3]=(f*l*r-a*u*r-f*s*c+i*u*c+a*s*p-i*l*p)*C,e[4]=b*C,e[5]=(h*m*r-g*u*r+g*s*p-t*m*p-h*s*d+t*u*d)*C,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*d-t*l*d)*C,e[7]=(o*u*r-h*l*r+h*s*c-t*u*c-o*s*p+t*l*p)*C,e[8]=x*C,e[9]=(g*f*r-h*_*r-g*i*p+t*_*p+h*i*d-t*f*d)*C,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*d+t*a*d)*C,e[11]=(h*a*r-o*f*r-h*i*c+t*f*c+o*i*p-t*a*p)*C,e[12]=R*C,e[13]=(h*_*s-g*f*s+g*i*u-t*_*u-h*i*m+t*f*m)*C,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*C,e[15]=(o*f*s-h*a*s+h*i*l-t*f*l-o*i*u+t*a*u)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,f=a+a,u=r*c,p=r*h,g=r*f,_=o*h,m=o*f,d=a*f,v=l*c,b=l*h,x=l*f,R=i.x,T=i.y,C=i.z;return s[0]=(1-(_+d))*R,s[1]=(p+x)*R,s[2]=(g-b)*R,s[3]=0,s[4]=(p-x)*T,s[5]=(1-(u+d))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+b)*C,s[9]=(m-v)*C,s[10]=(1-(u+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Es.set(s[0],s[1],s[2]).length();const o=Es.set(s[4],s[5],s[6]).length(),a=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$n.copy(this);const c=1/r,h=1/o,f=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Ti){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),f=(t+e)/(t-e),u=(i+s)/(i-s);let p,g;if(a===Ti)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Do)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Ti){const l=this.elements,c=1/(t-e),h=1/(i-s),f=1/(o-r),u=(t+e)*c,p=(i+s)*h;let g,_;if(a===Ti)g=(o+r)*f,_=-2*f;else if(a===Do)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Es=new O,$n=new Tt,kd=new O(0,0,0),Bd=new O(1,1,1),Oi=new O,jr=new O,Ln=new O,$c=new Tt,Zc=new rr;class vn{constructor(e=0,t=0,i=0,s=vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(pn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-pn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $c.makeRotationFromQuaternion(e),this.setFromRotationMatrix($c,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vn.DEFAULT_ORDER="XYZ";class fc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zd=0;const Kc=new O,Ts=new rr,_i=new Tt,Jr=new O,dr=new O,Hd=new O,Gd=new rr,jc=new O(1,0,0),Jc=new O(0,1,0),Qc=new O(0,0,1),eh={type:"added"},Vd={type:"removed"},As={type:"childadded",child:null},fa={type:"childremoved",child:null};class Yt extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new O,t=new vn,i=new rr,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new at}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis(Jc,e)}rotateZ(e){return this.rotateOnAxis(Qc,e)}translateOnAxis(e,t){return Kc.copy(e).applyQuaternion(this.quaternion),this.position.add(Kc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis(Jc,e)}translateZ(e){return this.translateOnAxis(Qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Jr.copy(e):Jr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(dr,Jr,this.up):_i.lookAt(Jr,dr,this.up),this.quaternion.setFromRotationMatrix(_i),s&&(_i.extractRotation(s.matrixWorld),Ts.setFromRotationMatrix(_i),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(eh),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vd),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(eh),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new O(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new O,vi=new O,ua=new O,Mi=new O,Rs=new O,Cs=new O,th=new O,da=new O,pa=new O,ma=new O,ga=new Et,xa=new Et,_a=new Et;class Vn{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Zn.subVectors(e,t),s.cross(Zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Zn.subVectors(s,t),vi.subVectors(i,t),ua.subVectors(e,t);const o=Zn.dot(Zn),a=Zn.dot(vi),l=Zn.dot(ua),c=vi.dot(vi),h=vi.dot(ua),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ga.setScalar(0),xa.setScalar(0),_a.setScalar(0),ga.fromBufferAttribute(e,t),xa.fromBufferAttribute(e,i),_a.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ga,r.x),o.addScaledVector(xa,r.y),o.addScaledVector(_a,r.z),o}static isFrontFacing(e,t,i,s){return Zn.subVectors(i,t),vi.subVectors(e,t),Zn.cross(vi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Zn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Vn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Rs.subVectors(s,i),Cs.subVectors(r,i),da.subVectors(e,i);const l=Rs.dot(da),c=Cs.dot(da);if(l<=0&&c<=0)return t.copy(i);pa.subVectors(e,s);const h=Rs.dot(pa),f=Cs.dot(pa);if(h>=0&&f<=h)return t.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Rs,o);ma.subVectors(e,r);const p=Rs.dot(ma),g=Cs.dot(ma);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Cs,a);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return th.subVectors(r,s),a=(f-h)/(f-h+(p-g)),t.copy(s).addScaledVector(th,a);const d=1/(m+_+u);return o=_*d,a=u*d,t.copy(i).addScaledVector(Rs,o).addScaledVector(Cs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ht{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=i,dt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=dt.workingColorSpace){if(e=Ad(e,1),t=pn(t,0,1),i=pn(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=va(o,r,e+1/3),this.g=va(o,r,e),this.b=va(o,r,e-1/3)}return dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=eu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return dt.fromWorkingColorSpace(cn.copy(this),e),Math.round(pn(cn.r*255,0,255))*65536+Math.round(pn(cn.g*255,0,255))*256+Math.round(pn(cn.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(cn.copy(this),t);const i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Ut){dt.fromWorkingColorSpace(cn.copy(this),e);const t=cn.r,i=cn.g,s=cn.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(Qr);const i=na(Fi.h,Qr.h,t),s=na(Fi.s,Qr.s,t),r=na(Fi.l,Qr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new ht;ht.NAMES=eu;let Wd=0;class _s extends xs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Ri(),this.name="",this.blending=qs,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ol,this.blendDst=al,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ol&&(i.blendSrc=this.blendSrc),this.blendDst!==al&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hi extends _s{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=Of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new O,eo=new be;class Wn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wl,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)eo.fromBufferAttribute(this,t),eo.applyMatrix3(e),this.setXY(t,eo.x,eo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wl&&(e.usage=this.usage),e}}class tu extends Wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class nu extends Wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xt extends Wn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Xd=0;const zn=new Tt,Ma=new Yt,Ps=new O,In=new or,pr=new or,Jt=new O;class Kt extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jf(e)?nu:tu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new at().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,i){return zn.makeTranslation(e,t,i),this.applyMatrix4(zn),this}scale(e,t,i){return zn.makeScale(e,t,i),this.applyMatrix4(zn),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{for(let i=0,s=t.count;i<s;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];pr.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(In.min,pr.min),In.expandByPoint(Jt),Jt.addVectors(In.max,pr.max),In.expandByPoint(Jt)):(In.expandByPoint(pr.min),In.expandByPoint(pr.max))}In.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(Ps.fromBufferAttribute(e,c),Jt.add(Ps)),s=Math.max(s,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new O,l[P]=new O;const c=new O,h=new O,f=new O,u=new be,p=new be,g=new be,_=new O,m=new O;function d(P,S,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(c),f.sub(c),p.sub(u),g.sub(u);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(I),a[P].add(_),a[S].add(_),a[M].add(_),l[P].add(m),l[S].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,S=v.length;P<S;++P){const M=v[P],I=M.start,B=M.count;for(let V=I,q=I+B;V<q;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new O,x=new O,R=new O,T=new O;function C(P){R.fromBufferAttribute(s,P),T.copy(R);const S=a[P];b.copy(S),b.sub(R.multiplyScalar(R.dot(S))).normalize(),x.crossVectors(T,S);const I=x.dot(l[P])<0?-1:1;o.setXYZW(P,b.x,b.y,b.z,I)}for(let P=0,S=v.length;P<S;++P){const M=v[P],I=M.start,B=M.count;for(let V=I,q=I+B;V<q;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,f=new O;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),_=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)u[g++]=c[p++]}return new Wn(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nh=new Tt,ts=new hc,to=new Wo,ih=new O,no=new O,io=new O,so=new O,ya=new O,ro=new O,sh=new O,oo=new O;class xe extends Yt{constructor(e=new Kt,t=new hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(ya.fromBufferAttribute(f,e),o?ro.addScaledVector(ya,h):ro.addScaledVector(ya.sub(t),h))}t.add(ro)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(r),ts.copy(e.ray).recast(e.near),!(to.containsPoint(ts.origin)===!1&&(ts.intersectSphere(to,ih)===null||ts.origin.distanceToSquared(ih)>(e.far-e.near)**2))&&(nh.copy(r).invert(),ts.copy(e.ray).applyMatrix4(nh),!(i.boundingBox!==null&&ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=b;x<R;x+=3){const T=a.getX(x),C=a.getX(x+1),P=a.getX(x+2);s=ao(this,d,e,i,c,h,f,T,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),b=a.getX(m+1),x=a.getX(m+2);s=ao(this,o,e,i,c,h,f,v,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=u.length;g<_;g++){const m=u[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,R=b;x<R;x+=3){const T=x,C=x+1,P=x+2;s=ao(this,d,e,i,c,h,f,T,C,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,b=m+1,x=m+2;s=ao(this,o,e,i,c,h,f,v,b,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function qd(n,e,t,i,s,r,o,a){let l;if(e.side===xn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===$i,a),l===null)return null;oo.copy(a),oo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(oo);return c<t.near||c>t.far?null:{distance:c,point:oo.clone(),object:n}}function ao(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,no),n.getVertexPosition(l,io),n.getVertexPosition(c,so);const h=qd(n,e,t,i,no,io,so,sh);if(h){const f=new O;Vn.getBarycoord(sh,no,io,so,f),s&&(h.uv=Vn.getInterpolatedAttribute(s,a,l,c,f,new be)),r&&(h.uv1=Vn.getInterpolatedAttribute(r,a,l,c,f,new be)),o&&(h.normal=Vn.getInterpolatedAttribute(o,a,l,c,f,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new O,materialIndex:0};Vn.getNormal(no,io,so,u.normal),h.face=u,h.barycoord=f}return h}class on extends Kt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(f,2));function g(_,m,d,v,b,x,R,T,C,P,S){const M=x/C,I=R/P,B=x/2,V=R/2,q=T/2,$=C+1,W=P+1;let ne=0,F=0;const ce=new O;for(let fe=0;fe<W;fe++){const we=fe*I-V;for(let ze=0;ze<$;ze++){const je=ze*M-B;ce[_]=je*v,ce[m]=we*b,ce[d]=q,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[d]=T>0?1:-1,h.push(ce.x,ce.y,ce.z),f.push(ze/C),f.push(1-fe/P),ne+=1}}for(let fe=0;fe<P;fe++)for(let we=0;we<C;we++){const ze=u+we+$*fe,je=u+we+$*(fe+1),ee=u+(we+1)+$*(fe+1),de=u+(we+1)+$*fe;l.push(ze,je,de),l.push(je,ee,de),F+=6}a.addGroup(p,F,S),p+=F,u+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Sn(n){const e={};for(let t=0;t<n.length;t++){const i=tr(n[t]);for(const s in i)e[s]=i[s]}return e}function Yd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function iu(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}const $d={clone:tr,merge:Sn};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends _s{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=Yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class su extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Ti}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new O,rh=new be,oh=new be;class On extends su{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xl*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,t){return this.getViewBounds(e,rh,oh),t.subVectors(oh,rh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ta*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Is=1;class jd extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new On(Ls,Is,e,t);s.layers=this.layers,this.add(s);const r=new On(Ls,Is,e,t);r.layers=this.layers,this.add(r);const o=new On(Ls,Is,e,t);o.layers=this.layers,this.add(o);const a=new On(Ls,Is,e,t);a.layers=this.layers,this.add(a);const l=new On(Ls,Is,e,t);l.layers=this.layers,this.add(l);const c=new On(Ls,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ru extends _n{constructor(e,t,i,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jd extends ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ru(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new on(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Xi});r.uniforms.tEquirect.value=t;const o=new xe(s,r),a=t.minFilter;return t.minFilter===fs&&(t.minFilter=ci),new jd(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const Sa=new O,Qd=new O,e0=new at;class rs{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Sa.subVectors(i,t).cross(Qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sa),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||e0.getNormalMatrix(e),s=this.coplanarPoint(Sa).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Wo,lo=new O;class uc{constructor(e=new rs,t=new rs,i=new rs,s=new rs,r=new rs,o=new rs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ti){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],v=s[13],b=s[14],x=s[15];if(i[0].setComponents(l-r,u-c,m-p,x-d).normalize(),i[1].setComponents(l+r,u+c,m+p,x+d).normalize(),i[2].setComponents(l+o,u+h,m+g,x+v).normalize(),i[3].setComponents(l-o,u-h,m-g,x-v).normalize(),i[4].setComponents(l-a,u-f,m-_,x-b).normalize(),t===Ti)i[5].setComponents(l+a,u+f,m+_,x+b).normalize();else if(t===Do)i[5].setComponents(a,f,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(lo.x=s.normal.x>0?e.max.x:e.min.x,lo.y=s.normal.y>0?e.max.y:e.min.y,lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ou(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function t0(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const h=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],_=f[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,f[u]=_)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const _=f[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ct extends Kt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,f=e/a,u=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const v=d*u-o;for(let b=0;b<c;b++){const x=b*f-r;g.push(x,-v,0),_.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const b=v+c*d,x=v+c*(d+1),R=v+1+c*(d+1),T=v+1+c*d;p.push(b,x,T),p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ct(e.width,e.height,e.widthSegments,e.heightSegments)}}var n0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,r0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,f0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,m0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,g0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,w0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,E0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",D0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,O0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,z0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ep=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ap=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ip=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$p=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,em=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,om=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_m=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Am=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:n0,alphahash_pars_fragment:i0,alphamap_fragment:s0,alphamap_pars_fragment:r0,alphatest_fragment:o0,alphatest_pars_fragment:a0,aomap_fragment:l0,aomap_pars_fragment:c0,batching_pars_vertex:h0,batching_vertex:f0,begin_vertex:u0,beginnormal_vertex:d0,bsdfs:p0,iridescence_fragment:m0,bumpmap_pars_fragment:g0,clipping_planes_fragment:x0,clipping_planes_pars_fragment:_0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:M0,color_fragment:y0,color_pars_fragment:S0,color_pars_vertex:b0,color_vertex:w0,common:E0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:R0,displacementmap_vertex:C0,emissivemap_fragment:P0,emissivemap_pars_fragment:L0,colorspace_fragment:I0,colorspace_pars_fragment:D0,envmap_fragment:U0,envmap_common_pars_fragment:N0,envmap_pars_fragment:O0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:$0,envmap_vertex:k0,fog_vertex:B0,fog_pars_vertex:z0,fog_fragment:H0,fog_pars_fragment:G0,gradientmap_pars_fragment:V0,lightmap_pars_fragment:W0,lights_lambert_fragment:X0,lights_lambert_pars_fragment:q0,lights_pars_begin:Y0,lights_toon_fragment:Z0,lights_toon_pars_fragment:K0,lights_phong_fragment:j0,lights_phong_pars_fragment:J0,lights_physical_fragment:Q0,lights_physical_pars_fragment:ep,lights_fragment_begin:tp,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:op,logdepthbuf_vertex:ap,map_fragment:lp,map_pars_fragment:cp,map_particle_fragment:hp,map_particle_pars_fragment:fp,metalnessmap_fragment:up,metalnessmap_pars_fragment:dp,morphinstance_vertex:pp,morphcolor_vertex:mp,morphnormal_vertex:gp,morphtarget_pars_vertex:xp,morphtarget_vertex:_p,normal_fragment_begin:vp,normal_fragment_maps:Mp,normal_pars_fragment:yp,normal_pars_vertex:Sp,normal_vertex:bp,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:Tp,clearcoat_pars_fragment:Ap,iridescence_pars_fragment:Rp,opaque_fragment:Cp,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Ip,dithering_fragment:Dp,dithering_pars_fragment:Up,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:kp,shadowmap_vertex:Bp,shadowmask_pars_fragment:zp,skinbase_vertex:Hp,skinning_pars_vertex:Gp,skinning_vertex:Vp,skinnormal_vertex:Wp,specularmap_fragment:Xp,specularmap_pars_fragment:qp,tonemapping_fragment:Yp,tonemapping_pars_fragment:$p,transmission_fragment:Zp,transmission_pars_fragment:Kp,uv_pars_fragment:jp,uv_pars_vertex:Jp,uv_vertex:Qp,worldpos_vertex:em,background_vert:tm,background_frag:nm,backgroundCube_vert:im,backgroundCube_frag:sm,cube_vert:rm,cube_frag:om,depth_vert:am,depth_frag:lm,distanceRGBA_vert:cm,distanceRGBA_frag:hm,equirect_vert:fm,equirect_frag:um,linedashed_vert:dm,linedashed_frag:pm,meshbasic_vert:mm,meshbasic_frag:gm,meshlambert_vert:xm,meshlambert_frag:_m,meshmatcap_vert:vm,meshmatcap_frag:Mm,meshnormal_vert:ym,meshnormal_frag:Sm,meshphong_vert:bm,meshphong_frag:wm,meshphysical_vert:Em,meshphysical_frag:Tm,meshtoon_vert:Am,meshtoon_frag:Rm,points_vert:Cm,points_frag:Pm,shadow_vert:Lm,shadow_frag:Im,sprite_vert:Dm,sprite_frag:Um},Pe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},ai={basic:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:Sn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:Sn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:Sn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:Sn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:Sn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:Sn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:Sn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:Sn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:Sn([Pe.common,Pe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:Sn([Pe.lights,Pe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};ai.physical={uniforms:Sn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const co={r:0,b:0,g:0},is=new vn,Nm=new Tt;function Om(n,e,t,i,s,r,o){const a=new ht(0);let l=r===!0?0:1,c,h,f=null,u=0,p=null;function g(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function _(v){let b=!1;const x=g(v);x===null?d(a,l):x&&x.isColor&&(d(x,1),b=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,b){const x=g(b);x&&(x.isCubeTexture||x.mapping===Go)?(h===void 0&&(h=new xe(new on(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:tr(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),is.copy(b.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nm.makeRotationFromEuler(is)),h.material.toneMapped=dt.getTransfer(x.colorSpace)!==St,(f!==x||u!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,f=x,u=x.version,p=n.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new xe(new ct(2,2),new Ki({name:"BackgroundMaterial",uniforms:tr(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=dt.getTransfer(x.colorSpace)!==St,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||u!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,u=x.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,b){v.getRGB(co,iu(n)),i.buffers.color.setClear(co.r,co.g,co.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(v,b=1){a.set(v),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m}}function Fm(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(M,I,B,V,q){let $=!1;const W=f(V,B,I);r!==W&&(r=W,c(r.object)),$=p(M,V,B,q),$&&g(M,V,B,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(M,I,B,V),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function f(M,I,B){const V=B.wireframe===!0;let q=i[M.id];q===void 0&&(q={},i[M.id]=q);let $=q[I.id];$===void 0&&($={},q[I.id]=$);let W=$[V];return W===void 0&&(W=u(l()),$[V]=W),W}function u(M){const I=[],B=[],V=[];for(let q=0;q<t;q++)I[q]=0,B[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,I,B,V){const q=r.attributes,$=I.attributes;let W=0;const ne=B.getAttributes();for(const F in ne)if(ne[F].location>=0){const fe=q[F];let we=$[F];if(we===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),fe===void 0||fe.attribute!==we||we&&fe.data!==we.data)return!0;W++}return r.attributesNum!==W||r.index!==V}function g(M,I,B,V){const q={},$=I.attributes;let W=0;const ne=B.getAttributes();for(const F in ne)if(ne[F].location>=0){let fe=$[F];fe===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));const we={};we.attribute=fe,fe&&fe.data&&(we.data=fe.data),q[F]=we,W++}r.attributes=q,r.attributesNum=W,r.index=V}function _(){const M=r.newAttributes;for(let I=0,B=M.length;I<B;I++)M[I]=0}function m(M){d(M,0)}function d(M,I){const B=r.newAttributes,V=r.enabledAttributes,q=r.attributeDivisors;B[M]=1,V[M]===0&&(n.enableVertexAttribArray(M),V[M]=1),q[M]!==I&&(n.vertexAttribDivisor(M,I),q[M]=I)}function v(){const M=r.newAttributes,I=r.enabledAttributes;for(let B=0,V=I.length;B<V;B++)I[B]!==M[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function b(M,I,B,V,q,$,W){W===!0?n.vertexAttribIPointer(M,I,B,q,$):n.vertexAttribPointer(M,I,B,V,q,$)}function x(M,I,B,V){_();const q=V.attributes,$=B.getAttributes(),W=I.defaultAttributeValues;for(const ne in $){const F=$[ne];if(F.location>=0){let ce=q[ne];if(ce===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const fe=ce.normalized,we=ce.itemSize,ze=e.get(ce);if(ze===void 0)continue;const je=ze.buffer,ee=ze.type,de=ze.bytesPerElement,pe=ee===n.INT||ee===n.UNSIGNED_INT||ce.gpuType===sc;if(ce.isInterleavedBufferAttribute){const he=ce.data,Oe=he.stride,He=ce.offset;if(he.isInstancedInterleavedBuffer){for(let Ie=0;Ie<F.locationSize;Ie++)d(F.location+Ie,he.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ie=0;Ie<F.locationSize;Ie++)m(F.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,je);for(let Ie=0;Ie<F.locationSize;Ie++)b(F.location+Ie,we/F.locationSize,ee,fe,Oe*de,(He+we/F.locationSize*Ie)*de,pe)}else{if(ce.isInstancedBufferAttribute){for(let he=0;he<F.locationSize;he++)d(F.location+he,ce.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let he=0;he<F.locationSize;he++)m(F.location+he);n.bindBuffer(n.ARRAY_BUFFER,je);for(let he=0;he<F.locationSize;he++)b(F.location+he,we/F.locationSize,ee,fe,we*de,we/F.locationSize*he*de,pe)}}else if(W!==void 0){const fe=W[ne];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(F.location,fe);break;case 3:n.vertexAttrib3fv(F.location,fe);break;case 4:n.vertexAttrib4fv(F.location,fe);break;default:n.vertexAttrib1fv(F.location,fe)}}}}v()}function R(){P();for(const M in i){const I=i[M];for(const B in I){const V=I[B];for(const q in V)h(V[q].object),delete V[q];delete I[B]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const B in I){const V=I[B];for(const q in V)h(V[q].object),delete V[q];delete I[B]}delete i[M.id]}function C(M){for(const I in i){const B=i[I];if(B[M.id]===void 0)continue;const V=B[M.id];for(const q in V)h(V[q].object),delete V[q];delete B[M.id]}}function P(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function km(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function a(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];t.update(p,i,1)}function l(c,h,f,u){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*u[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==ei&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Pi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Ei&&!P)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:R,maxSamples:T}}function zm(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new rs,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||s;return s=u,i=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:i,b=v*4;let x=d.clippingState||null;l.value=x,x=h(g,u,b,p);for(let R=0;R!==b;++R)x[R]=t[R];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,x=p;b!==_;++b,x+=4)o.copy(f[b]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Hm(n){let e=new WeakMap;function t(o,a){return a===ml?o.mapping=js:a===gl&&(o.mapping=Js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ml||a===gl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jd(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class au extends su{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ws=4,ah=[.125,.215,.35,.446,.526,.582],cs=20,ba=new au,lh=new ht;let wa=null,Ea=0,Ta=0,Aa=!1;const os=(1+Math.sqrt(5))/2,Ds=1/os,ch=[new O(-os,Ds,0),new O(os,Ds,0),new O(-Ds,0,os),new O(Ds,0,os),new O(0,os,-Ds),new O(0,os,Ds),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){wa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wa,Ea,Ta),this._renderer.xr.enabled=Aa,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wa=this._renderer.getRenderTarget(),Ea=this._renderer.getActiveCubeFace(),Ta=this._renderer.getActiveMipmapLevel(),Aa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:zr,format:ei,colorSpace:sr,depthBuffer:!1},s=hh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gm(r)),this._blurMaterial=Vm(r,e,t)}return s}_compileMaterial(e){const t=new xe(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,i,s){const a=new On(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(lh),h.toneMapping=qi,h.autoClear=!1;const p=new hi({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new xe(new on,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(lh),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const b=this._cubeSize;ho(s,v*b,d>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===js||e.mapping===Js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ho(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=ch[(s-r-1)%ch.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new xe(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*cs-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):cs;m>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);const d=[];let v=0;for(let C=0;C<cs;++C){const P=C/_,S=Math.exp(-P*P/2);d.push(S),C===0?v+=S:C<m&&(v+=2*S)}for(let C=0;C<d.length;C++)d[C]=d[C]/v;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-i;const x=this._sizeLods[s],R=3*x*(s>b-Ws?s-b+Ws:0),T=4*(this._cubeSize-x);ho(t,R,T,3*x,2*x),l.setRenderTarget(t),l.render(f,ba)}}function Gm(n){const e=[],t=[],i=[];let s=n;const r=n-Ws+1+ah.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ws?l=ah[o-n+Ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),b=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,P=T>2?0:-1,S=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];v.set(S,_*g*T),b.set(u,m*g*T);const M=[T,T,T,T,T,T];x.set(M,d*g*T)}const R=new Kt;R.setAttribute("position",new Wn(v,_)),R.setAttribute("uv",new Wn(b,m)),R.setAttribute("faceIndex",new Wn(x,d)),e.push(R),s>Ws&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hh(n,e,t){const i=new ms(n,e,t);return i.texture.mapping=Go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ho(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Vm(n,e,t){const i=new Float32Array(cs),s=new O(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function fh(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function uh(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wm(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ml||l===gl,h=l===js||l===Js;if(c||h){let f=e.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return t===null&&(t=new ql(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ql(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Xm(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ar("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function qm(n,e,t,i){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)e.update(u[g],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function c(f){const u=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let b=0,x=v.length;b<x;b+=3){const R=v[b+0],T=v[b+1],C=v[b+2];u.push(R,T,T,C,C,R)}}else if(g!==void 0){const v=g.array;_=g.version;for(let b=0,x=v.length/3-1;b<x;b+=3){const R=b+0,T=b+1,C=b+2;u.push(R,T,T,C,C,R)}}else return;const m=new(jf(u)?nu:tu)(u,1);m.version=_;const d=r.get(f);d&&e.remove(d),r.set(f,m)}function h(f){const u=r.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Ym(n,e,t){let i;function s(u){i=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,r,u*o),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,u*o,g),t.update(p,i,g))}function h(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,u,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function f(u,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,u,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*_[v];t.update(d,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function $m(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Zm(n,e,t){const i=new WeakMap,s=new Et;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let R=a.attributes.position.count*x,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*T*4*f),P=new Qf(C,R,T,f);P.type=Ei,P.needsUpdate=!0;const S=x*4;for(let I=0;I<f;I++){const B=d[I],V=v[I],q=b[I],$=R*T*4*I;for(let W=0;W<B.count;W++){const ne=W*S;g===!0&&(s.fromBufferAttribute(B,W),C[$+ne+0]=s.x,C[$+ne+1]=s.y,C[$+ne+2]=s.z,C[$+ne+3]=0),_===!0&&(s.fromBufferAttribute(V,W),C[$+ne+4]=s.x,C[$+ne+5]=s.y,C[$+ne+6]=s.z,C[$+ne+7]=0),m===!0&&(s.fromBufferAttribute(q,W),C[$+ne+8]=s.x,C[$+ne+9]=s.y,C[$+ne+10]=s.z,C[$+ne+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new be(R,T)},i.set(a,u),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Km(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class lu extends _n{constructor(e,t,i,s,r,o,a,l,c,h=Ys){if(h!==Ys&&h!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ys&&(i=ps),i===void 0&&h===er&&(i=Qs),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ti,this.minFilter=l!==void 0?l:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const cu=new _n,dh=new lu(1,1),hu=new Qf,fu=new Od,uu=new ru,ph=[],mh=[],gh=new Float32Array(16),xh=new Float32Array(9),_h=new Float32Array(4);function ar(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ph[s];if(r===void 0&&(r=new Float32Array(s),ph[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function $t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xo(n,e){let t=mh[e];t===void 0&&(t=new Int32Array(e),mh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Jm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2fv(this.addr,e),Zt(t,e)}}function Qm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;n.uniform3fv(this.addr,e),Zt(t,e)}}function eg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4fv(this.addr,e),Zt(t,e)}}function tg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;_h.set(i),n.uniformMatrix2fv(this.addr,!1,_h),Zt(t,i)}}function ng(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;xh.set(i),n.uniformMatrix3fv(this.addr,!1,xh),Zt(t,i)}}function ig(n,e){const t=this.cache,i=e.elements;if(i===void 0){if($t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,i))return;gh.set(i),n.uniformMatrix4fv(this.addr,!1,gh),Zt(t,i)}}function sg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2iv(this.addr,e),Zt(t,e)}}function og(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3iv(this.addr,e),Zt(t,e)}}function ag(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4iv(this.addr,e),Zt(t,e)}}function lg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function cg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;n.uniform2uiv(this.addr,e),Zt(t,e)}}function hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;n.uniform3uiv(this.addr,e),Zt(t,e)}}function fg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;n.uniform4uiv(this.addr,e),Zt(t,e)}}function ug(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(dh.compareFunction=Kf,r=dh):r=cu,t.setTexture2D(e||r,s)}function dg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fu,s)}function pg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||uu,s)}function mg(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||hu,s)}function gg(n){switch(n){case 5126:return jm;case 35664:return Jm;case 35665:return Qm;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return og;case 35669:case 35673:return ag;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return ug;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function xg(n,e){n.uniform1fv(this.addr,e)}function _g(n,e){const t=ar(e,this.size,2);n.uniform2fv(this.addr,t)}function vg(n,e){const t=ar(e,this.size,3);n.uniform3fv(this.addr,t)}function Mg(n,e){const t=ar(e,this.size,4);n.uniform4fv(this.addr,t)}function yg(n,e){const t=ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sg(n,e){const t=ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bg(n,e){const t=ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wg(n,e){n.uniform1iv(this.addr,e)}function Eg(n,e){n.uniform2iv(this.addr,e)}function Tg(n,e){n.uniform3iv(this.addr,e)}function Ag(n,e){n.uniform4iv(this.addr,e)}function Rg(n,e){n.uniform1uiv(this.addr,e)}function Cg(n,e){n.uniform2uiv(this.addr,e)}function Pg(n,e){n.uniform3uiv(this.addr,e)}function Lg(n,e){n.uniform4uiv(this.addr,e)}function Ig(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||cu,r[o])}function Dg(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fu,r[o])}function Ug(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||uu,r[o])}function Ng(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);$t(i,r)||(n.uniform1iv(this.addr,r),Zt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||hu,r[o])}function Og(n){switch(n){case 5126:return xg;case 35664:return _g;case 35665:return vg;case 35666:return Mg;case 35674:return yg;case 35675:return Sg;case 35676:return bg;case 5124:case 35670:return wg;case 35667:case 35671:return Eg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Dg;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Ng}}class Fg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gg(t.type)}}class kg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Og(t.type)}}class Bg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function vh(n,e){n.seq.push(e),n.map[e.id]=e}function zg(n,e,t){const i=n.name,s=i.length;for(Ra.lastIndex=0;;){const r=Ra.exec(i),o=Ra.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vh(t,c===void 0?new Fg(a,n,e):new kg(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Bg(a),vh(t,f)),t=f}}}class Lo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);zg(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Mh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Hg=37297;let Gg=0;function Vg(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const yh=new at;function Wg(n){dt._getMatrix(yh,dt.workingColorSpace,n);const e=`mat3( ${yh.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(n)){case Vo:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sh(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Vg(n.getShaderSource(e),o)}else return s}function Xg(n,e){const t=Wg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qg(n,e){let t;switch(e){case hd:t="Linear";break;case fd:t="Reinhard";break;case ud:t="Cineon";break;case Ff:t="ACESFilmic";break;case pd:t="AgX";break;case md:t="Neutral";break;case dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new O;function Yg(){dt.getLuminanceCoefficients(fo);const n=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function Zg(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Rr(n){return n!==""}function bh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(n){return n.replace(jg,Qg)}const Jg=new Map;function Qg(n,e){let t=lt[e];if(t===void 0){const i=Jg.get(e);if(i!==void 0)t=lt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yl(t)}const ex=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(n){return n.replace(ex,tx)}function tx(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Th(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function nx(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Uf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function ix(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case Js:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sx(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function rx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Of:e="ENVMAP_BLENDING_MULTIPLY";break;case ld:e="ENVMAP_BLENDING_MIX";break;case cd:e="ENVMAP_BLENDING_ADD";break}return e}function ox(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ax(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=nx(t),c=ix(t),h=sx(t),f=rx(t),u=ox(t),p=$g(t),g=Zg(r),_=s.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rr).join(`
`),d.length>0&&(d+=`
`)):(m=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),d=[Th(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?lt.tonemapping_pars_fragment:"",t.toneMapping!==qi?qg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,Xg("linearToOutputTexel",t.outputColorSpace),Yg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rr).join(`
`)),o=Yl(o),o=bh(o,t),o=wh(o,t),a=Yl(a),a=bh(a,t),a=wh(a,t),o=Eh(o),a=Eh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=v+m+o,x=v+d+a,R=Mh(s,s.VERTEX_SHADER,b),T=Mh(s,s.FRAGMENT_SHADER,x);s.attachShader(_,R),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(I){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),V=s.getShaderInfoLog(R).trim(),q=s.getShaderInfoLog(T).trim();let $=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,R,T);else{const ne=Sh(s,R,"vertex"),F=Sh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+ne+`
`+F)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(V===""||q==="")&&(W=!1);W&&(I.diagnostics={runnable:$,programLog:B,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:d}})}s.deleteShader(R),s.deleteShader(T),P=new Lo(s,_),S=Kg(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Hg)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let lx=0;class cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new hx(e),t.set(e,i)),i}}class hx{constructor(e){this.id=lx++,this.code=e,this.usedTimes=0}}function fx(n,e,t,i,s,r,o){const a=new fc,l=new cx,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,I,B,V){const q=B.fog,$=V.geometry,W=S.isMeshStandardMaterial?B.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),F=ne&&ne.mapping===Go?ne.image.height:null,ce=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,we=fe!==void 0?fe.length:0;let ze=0;$.morphAttributes.position!==void 0&&(ze=1),$.morphAttributes.normal!==void 0&&(ze=2),$.morphAttributes.color!==void 0&&(ze=3);let je,ee,de,pe;if(ce){const mt=ai[ce];je=mt.vertexShader,ee=mt.fragmentShader}else je=S.vertexShader,ee=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const he=n.getRenderTarget(),Oe=n.state.buffers.depth.getReversed(),He=V.isInstancedMesh===!0,Ie=V.isBatchedMesh===!0,et=!!S.map,ae=!!S.matcap,me=!!ne,D=!!S.aoMap,re=!!S.lightMap,K=!!S.bumpMap,le=!!S.normalMap,ie=!!S.displacementMap,Ae=!!S.emissiveMap,Me=!!S.metalnessMap,L=!!S.roughnessMap,E=S.anisotropy>0,G=S.clearcoat>0,se=S.dispersion>0,ue=S.iridescence>0,oe=S.sheen>0,Le=S.transmission>0,Ee=E&&!!S.anisotropyMap,Re=G&&!!S.clearcoatMap,st=G&&!!S.clearcoatNormalMap,k=G&&!!S.clearcoatRoughnessMap,Se=ue&&!!S.iridescenceMap,Ue=ue&&!!S.iridescenceThicknessMap,$e=oe&&!!S.sheenColorMap,Ce=oe&&!!S.sheenRoughnessMap,U=!!S.specularMap,j=!!S.specularColorMap,ye=!!S.specularIntensityMap,N=Le&&!!S.transmissionMap,ge=Le&&!!S.thicknessMap,X=!!S.gradientMap,te=!!S.alphaMap,ve=S.alphaTest>0,_e=!!S.alphaHash,Je=!!S.extensions;let Ot=qi;S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ot=n.toneMapping);const jt={shaderID:ce,shaderType:S.type,shaderName:S.name,vertexShader:je,fragmentShader:ee,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&V._colorsTexture!==null,instancing:He,instancingColor:He&&V.instanceColor!==null,instancingMorph:He&&V.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:sr,alphaToCoverage:!!S.alphaToCoverage,map:et,matcap:ae,envMap:me,envMapMode:me&&ne.mapping,envMapCubeUVHeight:F,aoMap:D,lightMap:re,bumpMap:K,normalMap:le,displacementMap:u&&ie,emissiveMap:Ae,normalMapObjectSpace:le&&S.normalMapType===vd,normalMapTangentSpace:le&&S.normalMapType===Zf,metalnessMap:Me,roughnessMap:L,anisotropy:E,anisotropyMap:Ee,clearcoat:G,clearcoatMap:Re,clearcoatNormalMap:st,clearcoatRoughnessMap:k,dispersion:se,iridescence:ue,iridescenceMap:Se,iridescenceThicknessMap:Ue,sheen:oe,sheenColorMap:$e,sheenRoughnessMap:Ce,specularMap:U,specularColorMap:j,specularIntensityMap:ye,transmission:Le,transmissionMap:N,thicknessMap:ge,gradientMap:X,opaque:S.transparent===!1&&S.blending===qs&&S.alphaToCoverage===!1,alphaMap:te,alphaTest:ve,alphaHash:_e,combine:S.combine,mapUv:et&&_(S.map.channel),aoMapUv:D&&_(S.aoMap.channel),lightMapUv:re&&_(S.lightMap.channel),bumpMapUv:K&&_(S.bumpMap.channel),normalMapUv:le&&_(S.normalMap.channel),displacementMapUv:ie&&_(S.displacementMap.channel),emissiveMapUv:Ae&&_(S.emissiveMap.channel),metalnessMapUv:Me&&_(S.metalnessMap.channel),roughnessMapUv:L&&_(S.roughnessMap.channel),anisotropyMapUv:Ee&&_(S.anisotropyMap.channel),clearcoatMapUv:Re&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(S.sheenRoughnessMap.channel),specularMapUv:U&&_(S.specularMap.channel),specularColorMapUv:j&&_(S.specularColorMap.channel),specularIntensityMapUv:ye&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:ge&&_(S.thicknessMap.channel),alphaMapUv:te&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(le||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(et||te),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Oe,skinning:V.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:et&&S.map.isVideoTexture===!0&&dt.getTransfer(S.map.colorSpace)===St,decodeVideoTextureEmissive:Ae&&S.emissiveMap.isVideoTexture===!0&&dt.getTransfer(S.emissiveMap.colorSpace)===St,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nt,flipSided:S.side===xn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Je&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&S.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function d(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(M,S),b(M,S),M.push(n.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function v(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function b(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function x(S){const M=g[S.type];let I;if(M){const B=ai[M];I=$d.clone(B.uniforms)}else I=S.uniforms;return I}function R(S,M){let I;for(let B=0,V=h.length;B<V;B++){const q=h[B];if(q.cacheKey===M){I=q,++I.usedTimes;break}}return I===void 0&&(I=new ax(n,M,S,r),h.push(I)),I}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function C(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:R,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:P}}function ux(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function dx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ah(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,u,p,g,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,u,p,g,_,m){const d=o(f,u,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(f,u,p,g,_,m){const d=o(f,u,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(f,u){t.length>1&&t.sort(f||dx),i.length>1&&i.sort(u||Ah),s.length>1&&s.sort(u||Ah)}function h(){for(let f=e,u=n.length;f<u;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function px(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Rh,n.set(i,[o])):s>=r.length?(o=new Rh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function mx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new ht};break;case"SpotLight":t={position:new O,direction:new O,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function gx(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let xx=0;function _x(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vx(n){const e=new mx,t=gx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new Tt,o=new Tt;function a(c){let h=0,f=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,b=0,x=0,R=0,T=0,C=0;c.sort(_x);for(let S=0,M=c.length;S<M;S++){const I=c[S],B=I.color,V=I.intensity,q=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=B.r*V,f+=B.g*V,u+=B.b*V;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],V);C++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,F=t.get(I);F.shadowIntensity=ne.intensity,F.shadowBias=ne.bias,F.shadowNormalBias=ne.normalBias,F.shadowRadius=ne.radius,F.shadowMapSize=ne.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=I.shadow.matrix,v++}i.directional[p]=W,p++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(V),W.distance=q,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[_]=W;const ne=I.shadow;if(I.map&&(i.spotLightMap[R]=I.map,R++,ne.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[_]=ne.matrix,I.castShadow){const F=t.get(I);F.shadowIntensity=ne.intensity,F.shadowBias=ne.bias,F.shadowNormalBias=ne.normalBias,F.shadowRadius=ne.radius,F.shadowMapSize=ne.mapSize,i.spotShadow[_]=F,i.spotShadowMap[_]=$,x++}_++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(B).multiplyScalar(V),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=W,m++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const ne=I.shadow,F=t.get(I);F.shadowIntensity=ne.intensity,F.shadowBias=ne.bias,F.shadowNormalBias=ne.normalBias,F.shadowRadius=ne.radius,F.shadowMapSize=ne.mapSize,F.shadowCameraNear=ne.camera.near,F.shadowCameraFar=ne.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=I.shadow.matrix,b++}i.point[g]=W,g++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(V),W.groundColor.copy(I.groundColor).multiplyScalar(V),i.hemi[d]=W,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==v||P.numPointShadows!==b||P.numSpotShadows!==x||P.numSpotMaps!==R||P.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=v,P.numPointShadows=b,P.numSpotShadows=x,P.numSpotMaps=R,P.numLightProbes=C,i.version=xx++)}function l(c,h){let f=0,u=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const b=c[d];if(b.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(b.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const x=i.point[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ch(n){const e=new vx(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Mx(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ch(n),e.set(s,[a])):r>=o.length?(a=new Ch(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class yx extends _s{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=xd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sx extends _s{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ex(n,e,t){let i=new uc;const s=new be,r=new be,o=new Et,a=new yx({depthPacking:_d}),l=new Sx,c={},h=t.maxTextureSize,f={[$i]:xn,[xn]:$i,[Nt]:Nt},u=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:bx,fragmentShader:wx}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uf;let d=this.type;this.render=function(T,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),M=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(Xi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=d!==Si&&this.type===Si,q=d===Si&&this.type!==Si;for(let $=0,W=T.length;$<W;$++){const ne=T[$],F=ne.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const ce=F.getFrameExtents();if(s.multiply(ce),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,F.mapSize.y=r.y)),F.map===null||V===!0||q===!0){const we=this.type!==Si?{minFilter:ti,magFilter:ti}:{};F.map!==null&&F.map.dispose(),F.map=new ms(s.x,s.y,we),F.map.texture.name=ne.name+".shadowMap",F.camera.updateProjectionMatrix()}n.setRenderTarget(F.map),n.clear();const fe=F.getViewportCount();for(let we=0;we<fe;we++){const ze=F.getViewport(we);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),B.viewport(o),F.updateMatrices(ne,we),i=F.getFrustum(),x(C,P,F.camera,ne,this.type)}F.isPointLightShadow!==!0&&this.type===Si&&v(F,P),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(S,M,I)};function v(T,C){const P=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ms(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,P,u,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,P,p,_,null)}function b(T,C,P,S){let M=null;const I=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)M=I;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const B=M.uuid,V=C.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let $=q[V];$===void 0&&($=M.clone(),q[V]=$,C.addEventListener("dispose",R)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,S===Si?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=n.properties.get(M);B.light=P}return M}function x(T,C,P,S,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Si)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const V=e.update(T),q=T.material;if(Array.isArray(q)){const $=V.groups;for(let W=0,ne=$.length;W<ne;W++){const F=$[W],ce=q[F.materialIndex];if(ce&&ce.visible){const fe=b(T,ce,S,M);T.onBeforeShadow(n,T,C,P,V,fe,F),n.renderBufferDirect(P,null,V,fe,T,F),T.onAfterShadow(n,T,C,P,V,fe,F)}}}else if(q.visible){const $=b(T,q,S,M);T.onBeforeShadow(n,T,C,P,V,$,null),n.renderBufferDirect(P,null,V,$,T,null),T.onAfterShadow(n,T,C,P,V,$,null)}}const B=T.children;for(let V=0,q=B.length;V<q;V++)x(B[V],C,P,S,M)}function R(T){T.target.removeEventListener("dispose",R);for(const P in c){const S=c[P],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Tx={[ll]:cl,[hl]:dl,[fl]:pl,[Ks]:ul,[cl]:ll,[dl]:hl,[pl]:fl,[ul]:Ks};function Ax(n,e){function t(){let N=!1;const ge=new Et;let X=null;const te=new Et(0,0,0,0);return{setMask:function(ve){X!==ve&&!N&&(n.colorMask(ve,ve,ve,ve),X=ve)},setLocked:function(ve){N=ve},setClear:function(ve,_e,Je,Ot,jt){jt===!0&&(ve*=Ot,_e*=Ot,Je*=Ot),ge.set(ve,_e,Je,Ot),te.equals(ge)===!1&&(n.clearColor(ve,_e,Je,Ot),te.copy(ge))},reset:function(){N=!1,X=null,te.set(-1,0,0,0)}}}function i(){let N=!1,ge=!1,X=null,te=null,ve=null;return{setReversed:function(_e){if(ge!==_e){const Je=e.get("EXT_clip_control");ge?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);const Ot=ve;ve=null,this.setClear(Ot)}ge=_e},getReversed:function(){return ge},setTest:function(_e){_e?he(n.DEPTH_TEST):Oe(n.DEPTH_TEST)},setMask:function(_e){X!==_e&&!N&&(n.depthMask(_e),X=_e)},setFunc:function(_e){if(ge&&(_e=Tx[_e]),te!==_e){switch(_e){case ll:n.depthFunc(n.NEVER);break;case cl:n.depthFunc(n.ALWAYS);break;case hl:n.depthFunc(n.LESS);break;case Ks:n.depthFunc(n.LEQUAL);break;case fl:n.depthFunc(n.EQUAL);break;case ul:n.depthFunc(n.GEQUAL);break;case dl:n.depthFunc(n.GREATER);break;case pl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=_e}},setLocked:function(_e){N=_e},setClear:function(_e){ve!==_e&&(ge&&(_e=1-_e),n.clearDepth(_e),ve=_e)},reset:function(){N=!1,X=null,te=null,ve=null,ge=!1}}}function s(){let N=!1,ge=null,X=null,te=null,ve=null,_e=null,Je=null,Ot=null,jt=null;return{setTest:function(mt){N||(mt?he(n.STENCIL_TEST):Oe(n.STENCIL_TEST))},setMask:function(mt){ge!==mt&&!N&&(n.stencilMask(mt),ge=mt)},setFunc:function(mt,Xn,pi){(X!==mt||te!==Xn||ve!==pi)&&(n.stencilFunc(mt,Xn,pi),X=mt,te=Xn,ve=pi)},setOp:function(mt,Xn,pi){(_e!==mt||Je!==Xn||Ot!==pi)&&(n.stencilOp(mt,Xn,pi),_e=mt,Je=Xn,Ot=pi)},setLocked:function(mt){N=mt},setClear:function(mt){jt!==mt&&(n.clearStencil(mt),jt=mt)},reset:function(){N=!1,ge=null,X=null,te=null,ve=null,_e=null,Je=null,Ot=null,jt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,b=null,x=null,R=null,T=null,C=new ht(0,0,0),P=0,S=!1,M=null,I=null,B=null,V=null,q=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ne=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(F)[1]),W=ne>=1):F.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),W=ne>=2);let ce=null,fe={};const we=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),je=new Et().fromArray(we),ee=new Et().fromArray(ze);function de(N,ge,X,te){const ve=new Uint8Array(4),_e=n.createTexture();n.bindTexture(N,_e),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Je=0;Je<X;Je++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ve):n.texImage2D(ge+Je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ve);return _e}const pe={};pe[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),pe[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),pe[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),he(n.DEPTH_TEST),o.setFunc(Ks),K(!1),le(Oc),he(n.CULL_FACE),D(Xi);function he(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Oe(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function He(N,ge){return f[N]!==ge?(n.bindFramebuffer(N,ge),f[N]=ge,N===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ge),N===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ie(N,ge){let X=p,te=!1;if(N){X=u.get(ge),X===void 0&&(X=[],u.set(ge,X));const ve=N.textures;if(X.length!==ve.length||X[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,Je=ve.length;_e<Je;_e++)X[_e]=n.COLOR_ATTACHMENT0+_e;X.length=ve.length,te=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,te=!0);te&&n.drawBuffers(X)}function et(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const ae={[ls]:n.FUNC_ADD,[Xu]:n.FUNC_SUBTRACT,[qu]:n.FUNC_REVERSE_SUBTRACT};ae[Yu]=n.MIN,ae[$u]=n.MAX;const me={[Zu]:n.ZERO,[Ku]:n.ONE,[ju]:n.SRC_COLOR,[ol]:n.SRC_ALPHA,[id]:n.SRC_ALPHA_SATURATE,[td]:n.DST_COLOR,[Qu]:n.DST_ALPHA,[Ju]:n.ONE_MINUS_SRC_COLOR,[al]:n.ONE_MINUS_SRC_ALPHA,[nd]:n.ONE_MINUS_DST_COLOR,[ed]:n.ONE_MINUS_DST_ALPHA,[sd]:n.CONSTANT_COLOR,[rd]:n.ONE_MINUS_CONSTANT_COLOR,[od]:n.CONSTANT_ALPHA,[ad]:n.ONE_MINUS_CONSTANT_ALPHA};function D(N,ge,X,te,ve,_e,Je,Ot,jt,mt){if(N===Xi){_===!0&&(Oe(n.BLEND),_=!1);return}if(_===!1&&(he(n.BLEND),_=!0),N!==Wu){if(N!==m||mt!==S){if((d!==ls||x!==ls)&&(n.blendEquation(n.FUNC_ADD),d=ls,x=ls),mt)switch(N){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFunc(n.ONE,n.ONE);break;case Fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Fc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case kc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,b=null,R=null,T=null,C.set(0,0,0),P=0,m=N,S=mt}return}ve=ve||ge,_e=_e||X,Je=Je||te,(ge!==d||ve!==x)&&(n.blendEquationSeparate(ae[ge],ae[ve]),d=ge,x=ve),(X!==v||te!==b||_e!==R||Je!==T)&&(n.blendFuncSeparate(me[X],me[te],me[_e],me[Je]),v=X,b=te,R=_e,T=Je),(Ot.equals(C)===!1||jt!==P)&&(n.blendColor(Ot.r,Ot.g,Ot.b,jt),C.copy(Ot),P=jt),m=N,S=!1}function re(N,ge){N.side===Nt?Oe(n.CULL_FACE):he(n.CULL_FACE);let X=N.side===xn;ge&&(X=!X),K(X),N.blending===qs&&N.transparent===!1?D(Xi):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const te=N.stencilWrite;a.setTest(te),te&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ae(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function le(N){N!==Gu?(he(n.CULL_FACE),N!==I&&(N===Oc?n.cullFace(n.BACK):N===Vu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Oe(n.CULL_FACE),I=N}function ie(N){N!==B&&(W&&n.lineWidth(N),B=N)}function Ae(N,ge,X){N?(he(n.POLYGON_OFFSET_FILL),(V!==ge||q!==X)&&(n.polygonOffset(ge,X),V=ge,q=X)):Oe(n.POLYGON_OFFSET_FILL)}function Me(N){N?he(n.SCISSOR_TEST):Oe(n.SCISSOR_TEST)}function L(N){N===void 0&&(N=n.TEXTURE0+$-1),ce!==N&&(n.activeTexture(N),ce=N)}function E(N,ge,X){X===void 0&&(ce===null?X=n.TEXTURE0+$-1:X=ce);let te=fe[X];te===void 0&&(te={type:void 0,texture:void 0},fe[X]=te),(te.type!==N||te.texture!==ge)&&(ce!==X&&(n.activeTexture(X),ce=X),n.bindTexture(N,ge||pe[N]),te.type=N,te.texture=ge)}function G(){const N=fe[ce];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(N){je.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),je.copy(N))}function Ce(N){ee.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ee.copy(N))}function U(N,ge){let X=c.get(ge);X===void 0&&(X=new WeakMap,c.set(ge,X));let te=X.get(N);te===void 0&&(te=n.getUniformBlockIndex(ge,N.name),X.set(N,te))}function j(N,ge){const te=c.get(ge).get(N);l.get(ge)!==te&&(n.uniformBlockBinding(ge,te,N.__bindingPointIndex),l.set(ge,te))}function ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ce=null,fe={},f={},u=new WeakMap,p=[],g=null,_=!1,m=null,d=null,v=null,b=null,x=null,R=null,T=null,C=new ht(0,0,0),P=0,S=!1,M=null,I=null,B=null,V=null,q=null,je.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:he,disable:Oe,bindFramebuffer:He,drawBuffers:Ie,useProgram:et,setBlending:D,setMaterial:re,setFlipSided:K,setCullFace:le,setLineWidth:ie,setPolygonOffset:Ae,setScissorTest:Me,activeTexture:L,bindTexture:E,unbindTexture:G,compressedTexImage2D:se,compressedTexImage3D:ue,texImage2D:Se,texImage3D:Ue,updateUBOMapping:U,uniformBlockBinding:j,texStorage2D:st,texStorage3D:k,texSubImage2D:oe,texSubImage3D:Le,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Re,scissor:$e,viewport:Ce,reset:ye}}function Ph(n,e,t,i){const s=Rx(i);switch(t){case Gf:return n*e;case Wf:return n*e;case Xf:return n*e*2;case qf:return n*e/s.components*s.byteLength;case ac:return n*e/s.components*s.byteLength;case Yf:return n*e*2/s.components*s.byteLength;case lc:return n*e*2/s.components*s.byteLength;case Vf:return n*e*3/s.components*s.byteLength;case ei:return n*e*4/s.components*s.byteLength;case cc:return n*e*4/s.components*s.byteLength;case To:case Ao:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vl:case yl:return Math.max(n,16)*Math.max(e,8)/4;case _l:case Ml:return Math.max(n,8)*Math.max(e,8)/2;case Sl:case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case El:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Al:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Il:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ol:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Po:case Bl:case zl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case $f:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Gl:case Vl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rx(n){switch(n){case Pi:case Bf:return{byteLength:1,components:1};case Dr:case zf:case zr:return{byteLength:2,components:1};case rc:case oc:return{byteLength:2,components:4};case ps:case sc:case Ei:return{byteLength:4,components:1};case Hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Cx(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,h=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,E){return p?new OffscreenCanvas(L,E):Ur("canvas")}function _(L,E,G){let se=1;const ue=Me(L);if((ue.width>G||ue.height>G)&&(se=G/Math.max(ue.width,ue.height)),se<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const oe=Math.floor(se*ue.width),Le=Math.floor(se*ue.height);f===void 0&&(f=g(oe,Le));const Ee=E?g(oe,Le):f;return Ee.width=oe,Ee.height=Le,Ee.getContext("2d").drawImage(L,0,0,oe,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+oe+"x"+Le+")."),Ee}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),L;return L}function m(L){return L.generateMipmaps}function d(L){n.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,E,G,se,ue=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=E;if(E===n.RED&&(G===n.FLOAT&&(oe=n.R32F),G===n.HALF_FLOAT&&(oe=n.R16F),G===n.UNSIGNED_BYTE&&(oe=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(oe=n.R8UI),G===n.UNSIGNED_SHORT&&(oe=n.R16UI),G===n.UNSIGNED_INT&&(oe=n.R32UI),G===n.BYTE&&(oe=n.R8I),G===n.SHORT&&(oe=n.R16I),G===n.INT&&(oe=n.R32I)),E===n.RG&&(G===n.FLOAT&&(oe=n.RG32F),G===n.HALF_FLOAT&&(oe=n.RG16F),G===n.UNSIGNED_BYTE&&(oe=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(oe=n.RG8UI),G===n.UNSIGNED_SHORT&&(oe=n.RG16UI),G===n.UNSIGNED_INT&&(oe=n.RG32UI),G===n.BYTE&&(oe=n.RG8I),G===n.SHORT&&(oe=n.RG16I),G===n.INT&&(oe=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),G===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),G===n.UNSIGNED_INT&&(oe=n.RGB32UI),G===n.BYTE&&(oe=n.RGB8I),G===n.SHORT&&(oe=n.RGB16I),G===n.INT&&(oe=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),G===n.UNSIGNED_INT&&(oe=n.RGBA32UI),G===n.BYTE&&(oe=n.RGBA8I),G===n.SHORT&&(oe=n.RGBA16I),G===n.INT&&(oe=n.RGBA32I)),E===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),E===n.RGBA){const Le=ue?Vo:dt.getTransfer(se);G===n.FLOAT&&(oe=n.RGBA32F),G===n.HALF_FLOAT&&(oe=n.RGBA16F),G===n.UNSIGNED_BYTE&&(oe=Le===St?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function x(L,E){let G;return L?E===null||E===ps||E===Qs?G=n.DEPTH24_STENCIL8:E===Ei?G=n.DEPTH32F_STENCIL8:E===Dr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ps||E===Qs?G=n.DEPTH_COMPONENT24:E===Ei?G=n.DEPTH_COMPONENT32F:E===Dr&&(G=n.DEPTH_COMPONENT16),G}function R(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==ti&&L.minFilter!==ci?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function T(L){const E=L.target;E.removeEventListener("dispose",T),P(E),E.isVideoTexture&&h.delete(E)}function C(L){const E=L.target;E.removeEventListener("dispose",C),M(E)}function P(L){const E=i.get(L);if(E.__webglInit===void 0)return;const G=L.source,se=u.get(G);if(se){const ue=se[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&S(L),Object.keys(se).length===0&&u.delete(G)}i.remove(L)}function S(L){const E=i.get(L);n.deleteTexture(E.__webglTexture);const G=L.source,se=u.get(G);delete se[E.__cacheKey],o.memory.textures--}function M(L){const E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let ue=0;ue<E.__webglFramebuffer[se].length;ue++)n.deleteFramebuffer(E.__webglFramebuffer[se][ue]);else n.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)n.deleteFramebuffer(E.__webglFramebuffer[se]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=L.textures;for(let se=0,ue=G.length;se<ue;se++){const oe=i.get(G[se]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),o.memory.textures--),i.remove(G[se])}i.remove(L)}let I=0;function B(){I=0}function V(){const L=I;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function q(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function $(L,E){const G=i.get(L);if(L.isVideoTexture&&ie(L),L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){const se=L.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(G,L,E);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function W(L,E){const G=i.get(L);if(L.version>0&&G.__version!==L.version){ee(G,L,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function ne(L,E){const G=i.get(L);if(L.version>0&&G.__version!==L.version){ee(G,L,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function F(L,E){const G=i.get(L);if(L.version>0&&G.__version!==L.version){de(G,L,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const ce={[Zi]:n.REPEAT,[hs]:n.CLAMP_TO_EDGE,[xl]:n.MIRRORED_REPEAT},fe={[ti]:n.NEAREST,[gd]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[ci]:n.LINEAR,[ea]:n.LINEAR_MIPMAP_NEAREST,[fs]:n.LINEAR_MIPMAP_LINEAR},we={[Md]:n.NEVER,[Td]:n.ALWAYS,[yd]:n.LESS,[Kf]:n.LEQUAL,[Sd]:n.EQUAL,[Ed]:n.GEQUAL,[bd]:n.GREATER,[wd]:n.NOTEQUAL};function ze(L,E){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ci||E.magFilter===ea||E.magFilter===Xr||E.magFilter===fs||E.minFilter===ci||E.minFilter===ea||E.minFilter===Xr||E.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ce[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ce[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ce[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,fe[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,fe[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,we[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ti||E.minFilter!==Xr&&E.minFilter!==fs||E.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function je(L,E){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",T));const se=E.source;let ue=u.get(se);ue===void 0&&(ue={},u.set(se,ue));const oe=q(E);if(oe!==L.__cacheKey){ue[oe]===void 0&&(ue[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ue[oe].usedTimes++;const Le=ue[L.__cacheKey];Le!==void 0&&(ue[L.__cacheKey].usedTimes--,Le.usedTimes===0&&S(E)),L.__cacheKey=oe,L.__webglTexture=ue[oe].texture}return G}function ee(L,E,G){let se=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=n.TEXTURE_3D);const ue=je(L,E),oe=E.source;t.bindTexture(se,L.__webglTexture,n.TEXTURE0+G);const Le=i.get(oe);if(oe.version!==Le.__version||ue===!0){t.activeTexture(n.TEXTURE0+G);const Ee=dt.getPrimaries(dt.workingColorSpace),Re=E.colorSpace===Vi?null:dt.getPrimaries(E.colorSpace),st=E.colorSpace===Vi||Ee===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let k=_(E.image,!1,s.maxTextureSize);k=Ae(E,k);const Se=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type);let $e=b(E.internalFormat,Se,Ue,E.colorSpace,E.isVideoTexture);ze(se,E);let Ce;const U=E.mipmaps,j=E.isVideoTexture!==!0,ye=Le.__version===void 0||ue===!0,N=oe.dataReady,ge=R(E,k);if(E.isDepthTexture)$e=x(E.format===er,E.type),ye&&(j?t.texStorage2D(n.TEXTURE_2D,1,$e,k.width,k.height):t.texImage2D(n.TEXTURE_2D,0,$e,k.width,k.height,0,Se,Ue,null));else if(E.isDataTexture)if(U.length>0){j&&ye&&t.texStorage2D(n.TEXTURE_2D,ge,$e,U[0].width,U[0].height);for(let X=0,te=U.length;X<te;X++)Ce=U[X],j?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Ce.width,Ce.height,Se,Ue,Ce.data):t.texImage2D(n.TEXTURE_2D,X,$e,Ce.width,Ce.height,0,Se,Ue,Ce.data);E.generateMipmaps=!1}else j?(ye&&t.texStorage2D(n.TEXTURE_2D,ge,$e,k.width,k.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,k.width,k.height,Se,Ue,k.data)):t.texImage2D(n.TEXTURE_2D,0,$e,k.width,k.height,0,Se,Ue,k.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,$e,U[0].width,U[0].height,k.depth);for(let X=0,te=U.length;X<te;X++)if(Ce=U[X],E.format!==ei)if(Se!==null)if(j){if(N)if(E.layerUpdates.size>0){const ve=Ph(Ce.width,Ce.height,E.format,E.type);for(const _e of E.layerUpdates){const Je=Ce.data.subarray(_e*ve/Ce.data.BYTES_PER_ELEMENT,(_e+1)*ve/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,_e,Ce.width,Ce.height,1,Se,Je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Ce.width,Ce.height,k.depth,Se,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,$e,Ce.width,Ce.height,k.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,Ce.width,Ce.height,k.depth,Se,Ue,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,$e,Ce.width,Ce.height,k.depth,0,Se,Ue,Ce.data)}else{j&&ye&&t.texStorage2D(n.TEXTURE_2D,ge,$e,U[0].width,U[0].height);for(let X=0,te=U.length;X<te;X++)Ce=U[X],E.format!==ei?Se!==null?j?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,Ce.width,Ce.height,Se,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,X,$e,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Ce.width,Ce.height,Se,Ue,Ce.data):t.texImage2D(n.TEXTURE_2D,X,$e,Ce.width,Ce.height,0,Se,Ue,Ce.data)}else if(E.isDataArrayTexture)if(j){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,$e,k.width,k.height,k.depth),N)if(E.layerUpdates.size>0){const X=Ph(k.width,k.height,E.format,E.type);for(const te of E.layerUpdates){const ve=k.data.subarray(te*X/k.data.BYTES_PER_ELEMENT,(te+1)*X/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,k.width,k.height,1,Se,Ue,ve)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,Se,Ue,k.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,$e,k.width,k.height,k.depth,0,Se,Ue,k.data);else if(E.isData3DTexture)j?(ye&&t.texStorage3D(n.TEXTURE_3D,ge,$e,k.width,k.height,k.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,Se,Ue,k.data)):t.texImage3D(n.TEXTURE_3D,0,$e,k.width,k.height,k.depth,0,Se,Ue,k.data);else if(E.isFramebufferTexture){if(ye)if(j)t.texStorage2D(n.TEXTURE_2D,ge,$e,k.width,k.height);else{let X=k.width,te=k.height;for(let ve=0;ve<ge;ve++)t.texImage2D(n.TEXTURE_2D,ve,$e,X,te,0,Se,Ue,null),X>>=1,te>>=1}}else if(U.length>0){if(j&&ye){const X=Me(U[0]);t.texStorage2D(n.TEXTURE_2D,ge,$e,X.width,X.height)}for(let X=0,te=U.length;X<te;X++)Ce=U[X],j?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Se,Ue,Ce):t.texImage2D(n.TEXTURE_2D,X,$e,Se,Ue,Ce);E.generateMipmaps=!1}else if(j){if(ye){const X=Me(k);t.texStorage2D(n.TEXTURE_2D,ge,$e,X.width,X.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ue,k)}else t.texImage2D(n.TEXTURE_2D,0,$e,Se,Ue,k);m(E)&&d(se),Le.__version=oe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function de(L,E,G){if(E.image.length!==6)return;const se=je(L,E),ue=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+G);const oe=i.get(ue);if(ue.version!==oe.__version||se===!0){t.activeTexture(n.TEXTURE0+G);const Le=dt.getPrimaries(dt.workingColorSpace),Ee=E.colorSpace===Vi?null:dt.getPrimaries(E.colorSpace),Re=E.colorSpace===Vi||Le===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const st=E.isCompressedTexture||E.image[0].isCompressedTexture,k=E.image[0]&&E.image[0].isDataTexture,Se=[];for(let te=0;te<6;te++)!st&&!k?Se[te]=_(E.image[te],!0,s.maxCubemapSize):Se[te]=k?E.image[te].image:E.image[te],Se[te]=Ae(E,Se[te]);const Ue=Se[0],$e=r.convert(E.format,E.colorSpace),Ce=r.convert(E.type),U=b(E.internalFormat,$e,Ce,E.colorSpace),j=E.isVideoTexture!==!0,ye=oe.__version===void 0||se===!0,N=ue.dataReady;let ge=R(E,Ue);ze(n.TEXTURE_CUBE_MAP,E);let X;if(st){j&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,U,Ue.width,Ue.height);for(let te=0;te<6;te++){X=Se[te].mipmaps;for(let ve=0;ve<X.length;ve++){const _e=X[ve];E.format!==ei?$e!==null?j?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,_e.width,_e.height,$e,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,U,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,_e.width,_e.height,$e,Ce,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,U,_e.width,_e.height,0,$e,Ce,_e.data)}}}else{if(X=E.mipmaps,j&&ye){X.length>0&&ge++;const te=Me(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,U,te.width,te.height)}for(let te=0;te<6;te++)if(k){j?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Se[te].width,Se[te].height,$e,Ce,Se[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,U,Se[te].width,Se[te].height,0,$e,Ce,Se[te].data);for(let ve=0;ve<X.length;ve++){const Je=X[ve].image[te].image;j?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Je.width,Je.height,$e,Ce,Je.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,U,Je.width,Je.height,0,$e,Ce,Je.data)}}else{j?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,$e,Ce,Se[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,U,$e,Ce,Se[te]);for(let ve=0;ve<X.length;ve++){const _e=X[ve];j?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,$e,Ce,_e.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,U,$e,Ce,_e.image[te])}}}m(E)&&d(n.TEXTURE_CUBE_MAP),oe.__version=ue.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function pe(L,E,G,se,ue,oe){const Le=r.convert(G.format,G.colorSpace),Ee=r.convert(G.type),Re=b(G.internalFormat,Le,Ee,G.colorSpace),st=i.get(E),k=i.get(G);if(k.__renderTarget=E,!st.__hasExternalTextures){const Se=Math.max(1,E.width>>oe),Ue=Math.max(1,E.height>>oe);ue===n.TEXTURE_3D||ue===n.TEXTURE_2D_ARRAY?t.texImage3D(ue,oe,Re,Se,Ue,E.depth,0,Le,Ee,null):t.texImage2D(ue,oe,Re,Se,Ue,0,Le,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),le(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ue,k.__webglTexture,0,K(E)):(ue===n.TEXTURE_2D||ue>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ue,k.__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(L,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){const se=E.depthTexture,ue=se&&se.isDepthTexture?se.type:null,oe=x(E.stencilBuffer,ue),Le=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=K(E);le(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,oe,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,oe,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,oe,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Le,n.RENDERBUFFER,L)}else{const se=E.textures;for(let ue=0;ue<se.length;ue++){const oe=se[ue],Le=r.convert(oe.format,oe.colorSpace),Ee=r.convert(oe.type),Re=b(oe.internalFormat,Le,Ee,oe.colorSpace),st=K(E);G&&le(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,Re,E.width,E.height):le(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,Re,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Re,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(E.depthTexture);se.__renderTarget=E,(!se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const ue=se.__webglTexture,oe=K(E);if(E.depthTexture.format===Ys)le(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ue,0);else if(E.depthTexture.format===er)le(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ue,0);else throw new Error("Unknown depthTexture format")}function He(L){const E=i.get(L),G=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const se=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const ue=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",ue)};se.addEventListener("dispose",ue),E.__depthDisposeCallback=ue}E.__boundDepthTexture=se}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Oe(E.__webglFramebuffer,L)}else if(G){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=n.createRenderbuffer(),he(E.__webglDepthbuffer[se],L,!1);else{const ue=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),he(E.__webglDepthbuffer,L,!1);else{const se=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ue)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ie(L,E,G){const se=i.get(L);E!==void 0&&pe(se.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&He(L)}function et(L){const E=L.texture,G=i.get(L),se=i.get(E);L.addEventListener("dispose",C);const ue=L.textures,oe=L.isWebGLCubeRenderTarget===!0,Le=ue.length>1;if(Le||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=E.version,o.memory.textures++),oe){G.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Ee]=[];for(let Re=0;Re<E.mipmaps.length;Re++)G.__webglFramebuffer[Ee][Re]=n.createFramebuffer()}else G.__webglFramebuffer[Ee]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ee=0;Ee<E.mipmaps.length;Ee++)G.__webglFramebuffer[Ee]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Le)for(let Ee=0,Re=ue.length;Ee<Re;Ee++){const st=i.get(ue[Ee]);st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture(),o.memory.textures++)}if(L.samples>0&&le(L)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ue.length;Ee++){const Re=ue[Ee];G.__webglColorRenderbuffer[Ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Ee]);const st=r.convert(Re.format,Re.colorSpace),k=r.convert(Re.type),Se=b(Re.internalFormat,st,k,Re.colorSpace,L.isXRRenderTarget===!0),Ue=K(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ue,Se,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,G.__webglColorRenderbuffer[Ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),he(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),ze(n.TEXTURE_CUBE_MAP,E);for(let Ee=0;Ee<6;Ee++)if(E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)pe(G.__webglFramebuffer[Ee][Re],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Re);else pe(G.__webglFramebuffer[Ee],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);m(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let Ee=0,Re=ue.length;Ee<Re;Ee++){const st=ue[Ee],k=i.get(st);t.bindTexture(n.TEXTURE_2D,k.__webglTexture),ze(n.TEXTURE_2D,st),pe(G.__webglFramebuffer,L,st,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,0),m(st)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let Ee=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ee=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ee,se.__webglTexture),ze(Ee,E),E.mipmaps&&E.mipmaps.length>0)for(let Re=0;Re<E.mipmaps.length;Re++)pe(G.__webglFramebuffer[Re],L,E,n.COLOR_ATTACHMENT0,Ee,Re);else pe(G.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,Ee,0);m(E)&&d(Ee),t.unbindTexture()}L.depthBuffer&&He(L)}function ae(L){const E=L.textures;for(let G=0,se=E.length;G<se;G++){const ue=E[G];if(m(ue)){const oe=v(L),Le=i.get(ue).__webglTexture;t.bindTexture(oe,Le),d(oe),t.unbindTexture()}}}const me=[],D=[];function re(L){if(L.samples>0){if(le(L)===!1){const E=L.textures,G=L.width,se=L.height;let ue=n.COLOR_BUFFER_BIT;const oe=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Le=i.get(L),Ee=E.length>1;if(Ee)for(let Re=0;Re<E.length;Re++)t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ue|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ue|=n.STENCIL_BUFFER_BIT)),Ee){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);const st=i.get(E[Re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,G,se,0,0,G,se,ue,n.NEAREST),l===!0&&(me.length=0,D.length=0,me.push(n.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.resolveDepthBuffer===!1&&(me.push(oe),D.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ee)for(let Re=0;Re<E.length;Re++){t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);const st=i.get(E[Re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Le.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.TEXTURE_2D,st,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function K(L){return Math.min(s.maxSamples,L.samples)}function le(L){const E=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ie(L){const E=o.render.frame;h.get(L)!==E&&(h.set(L,E),L.update())}function Ae(L,E){const G=L.colorSpace,se=L.format,ue=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==sr&&G!==Vi&&(dt.getTransfer(G)===St?(se!==ei||ue!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=F,this.rebindTextures=Ie,this.setupRenderTarget=et,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=le}function Px(n,e){function t(i,s=Vi){let r;const o=dt.getTransfer(s);if(i===Pi)return n.UNSIGNED_BYTE;if(i===rc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===oc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Hf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Bf)return n.BYTE;if(i===zf)return n.SHORT;if(i===Dr)return n.UNSIGNED_SHORT;if(i===sc)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===Ei)return n.FLOAT;if(i===zr)return n.HALF_FLOAT;if(i===Gf)return n.ALPHA;if(i===Vf)return n.RGB;if(i===ei)return n.RGBA;if(i===Wf)return n.LUMINANCE;if(i===Xf)return n.LUMINANCE_ALPHA;if(i===Ys)return n.DEPTH_COMPONENT;if(i===er)return n.DEPTH_STENCIL;if(i===qf)return n.RED;if(i===ac)return n.RED_INTEGER;if(i===Yf)return n.RG;if(i===lc)return n.RG_INTEGER;if(i===cc)return n.RGBA_INTEGER;if(i===To||i===Ao||i===Ro||i===Co)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===To)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===To)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_l||i===vl||i===Ml||i===yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sl||i===bl||i===wl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Sl||i===bl)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===El||i===Tl||i===Al||i===Rl||i===Cl||i===Pl||i===Ll||i===Il||i===Dl||i===Ul||i===Nl||i===Ol||i===Fl||i===kl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===El)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Al)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ll)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Il)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ul)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ol)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kl)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Po||i===Bl||i===zl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Po)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===zl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$f||i===Hl||i===Gl||i===Vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Po)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class Lx extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nt extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ix={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new nt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ux=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new _n,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ki({vertexShader:Dx,fragmentShader:Ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xe(new ct(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ox extends xs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,g=null;const _=new Nx,m=t.getContextAttributes();let d=null,v=null;const b=[],x=[],R=new be;let T=null;const C=new On;C.viewport=new Et;const P=new On;P.viewport=new Et;const S=[C,P],M=new Lx;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=b[ee];return de===void 0&&(de=new Ca,b[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=b[ee];return de===void 0&&(de=new Ca,b[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=b[ee];return de===void 0&&(de=new Ca,b[ee]=de),de.getHandSpace()};function V(ee){const de=x.indexOf(ee.inputSource);if(de===-1)return;const pe=b[de];pe!==void 0&&(pe.update(ee.inputSource,ee.frame,c||o),pe.dispatchEvent({type:ee.type,data:ee.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",$);for(let ee=0;ee<b.length;ee++){const de=x[ee];de!==null&&(x[ee]=null,b[ee].disconnect(de))}I=null,B=null,_.reset(),e.setRenderTarget(d),p=null,u=null,f=null,s=null,v=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new ms(p.framebufferWidth,p.framebufferHeight,{format:ei,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,pe=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?er:Ys,pe=m.stencil?Qs:ps);const Oe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};f=new XRWebGLBinding(s,t),u=f.createProjectionLayer(Oe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new ms(u.textureWidth,u.textureHeight,{format:ei,type:Pi,depthTexture:new lu(u.textureWidth,u.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(ee){for(let de=0;de<ee.removed.length;de++){const pe=ee.removed[de],he=x.indexOf(pe);he>=0&&(x[he]=null,b[he].disconnect(pe))}for(let de=0;de<ee.added.length;de++){const pe=ee.added[de];let he=x.indexOf(pe);if(he===-1){for(let He=0;He<b.length;He++)if(He>=x.length){x.push(pe),he=He;break}else if(x[He]===null){x[He]=pe,he=He;break}if(he===-1)break}const Oe=b[he];Oe&&Oe.connect(pe)}}const W=new O,ne=new O;function F(ee,de,pe){W.setFromMatrixPosition(de.matrixWorld),ne.setFromMatrixPosition(pe.matrixWorld);const he=W.distanceTo(ne),Oe=de.projectionMatrix.elements,He=pe.projectionMatrix.elements,Ie=Oe[14]/(Oe[10]-1),et=Oe[14]/(Oe[10]+1),ae=(Oe[9]+1)/Oe[5],me=(Oe[9]-1)/Oe[5],D=(Oe[8]-1)/Oe[0],re=(He[8]+1)/He[0],K=Ie*D,le=Ie*re,ie=he/(-D+re),Ae=ie*-D;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Ae),ee.translateZ(ie),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Oe[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Me=Ie+ie,L=et+ie,E=K-Ae,G=le+(he-Ae),se=ae*et/L*Me,ue=me*et/L*Me;ee.projectionMatrix.makePerspective(E,G,se,ue,Me,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ce(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let de=ee.near,pe=ee.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),M.near=P.near=C.near=de,M.far=P.far=C.far=pe,(I!==M.near||B!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,B=M.far),C.layers.mask=ee.layers.mask|2,P.layers.mask=ee.layers.mask|4,M.layers.mask=C.layers.mask|P.layers.mask;const he=ee.parent,Oe=M.cameras;ce(M,he);for(let He=0;He<Oe.length;He++)ce(Oe[He],he);Oe.length===2?F(M,C,P):M.projectionMatrix.copy(C.projectionMatrix),fe(ee,M,he)};function fe(ee,de,pe){pe===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(pe.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Xl*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(ee){l=ee,u!==null&&(u.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let we=null;function ze(ee,de){if(h=de.getViewerPose(c||o),g=de,h!==null){const pe=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let he=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,he=!0);for(let He=0;He<pe.length;He++){const Ie=pe[He];let et=null;if(p!==null)et=p.getViewport(Ie);else{const me=f.getViewSubImage(u,Ie);et=me.viewport,He===0&&(e.setRenderTargetTextures(v,me.colorTexture,u.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(v))}let ae=S[He];ae===void 0&&(ae=new On,ae.layers.enable(He),ae.viewport=new Et,S[He]=ae),ae.matrix.fromArray(Ie.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ie.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(et.x,et.y,et.width,et.height),He===0&&(M.matrix.copy(ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),he===!0&&M.cameras.push(ae)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const He=f.getDepthInformation(pe[0]);He&&He.isValid&&He.texture&&_.init(e,He,s.renderState)}}for(let pe=0;pe<b.length;pe++){const he=x[pe],Oe=b[pe];he!==null&&Oe!==void 0&&Oe.update(he,de,c||o)}we&&we(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const je=new ou;je.setAnimationLoop(ze),this.setAnimationLoop=function(ee){we=ee},this.dispose=function(){}}}const ss=new vn,Fx=new Tt;function kx(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,iu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,v,b,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===xn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===xn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),b=v.envMap,x=v.envMapRotation;b&&(m.envMap.value=b,ss.copy(x),ss.x*=-1,ss.y*=-1,ss.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(ss)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=b*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===xn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Bx(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const x=b.program;i.uniformBlockBinding(v,x)}function c(v,b){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const R=b.program;i.updateUBOMapping(v,R);const T=e.render.frame;r[v.id]!==T&&(u(v),r[v.id]=T)}function h(v){const b=f();v.__bindingPointIndex=b;const x=n.createBuffer(),R=v.__size,T=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=s[v.id],x=v.uniforms,R=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,C=x.length;T<C;T++){const P=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,M=P.length;S<M;S++){const I=P[S];if(p(I,T,S,R)===!0){const B=I.__offset,V=Array.isArray(I.value)?I.value:[I.value];let q=0;for(let $=0;$<V.length;$++){const W=V[$],ne=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,B+q,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,q),q+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,b,x,R){const T=v.value,C=b+"_"+x;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{const P=R[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){const b=v.uniforms;let x=0;const R=16;for(let C=0,P=b.length;C<P;C++){const S=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,I=S.length;M<I;M++){const B=S[M],V=Array.isArray(B.value)?B.value:[B.value];for(let q=0,$=V.length;q<$;q++){const W=V[q],ne=_(W),F=x%R,ce=F%ne.boundary,fe=F+ce;x+=ce,fe!==0&&R-fe<ne.storage&&(x+=R-fe),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=ne.storage}}}const T=x%R;return T>0&&(x+=R-T),v.__size=x,v.__cache={},this}function _(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),b}function m(v){const b=v.target;b.removeEventListener("dispose",m);const x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const v in s)n.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class zx{constructor(e={}){const{canvas:t=Rd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=qi,this.toneMappingExposure=1;const x=this;let R=!1,T=0,C=0,P=null,S=-1,M=null;const I=new Et,B=new Et;let V=null;const q=new ht(0);let $=0,W=t.width,ne=t.height,F=1,ce=null,fe=null;const we=new Et(0,0,W,ne),ze=new Et(0,0,W,ne);let je=!1;const ee=new uc;let de=!1,pe=!1;const he=new Tt,Oe=new Tt,He=new O,Ie=new Et,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function me(){return P===null?F:1}let D=i;function re(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ic}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",_e,!1),D===null){const z="webgl2";if(D=re(z,A),D===null)throw re(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,le,ie,Ae,Me,L,E,G,se,ue,oe,Le,Ee,Re,st,k,Se,Ue,$e,Ce,U,j,ye,N;function ge(){K=new Xm(D),K.init(),j=new Px(D,K),le=new Bm(D,K,e,j),ie=new Ax(D,K),le.reverseDepthBuffer&&u&&ie.buffers.depth.setReversed(!0),Ae=new $m(D),Me=new ux,L=new Cx(D,K,ie,Me,le,j,Ae),E=new Hm(x),G=new Wm(x),se=new t0(D),ye=new Fm(D,se),ue=new qm(D,se,Ae,ye),oe=new Km(D,ue,se,Ae),$e=new Zm(D,le,L),k=new zm(Me),Le=new fx(x,E,G,K,le,ye,k),Ee=new kx(x,Me),Re=new px,st=new Mx(K),Ue=new Om(x,E,G,ie,oe,p,l),Se=new Ex(x,oe,le),N=new Bx(D,Ae,le,ie),Ce=new km(D,K,Ae),U=new Ym(D,K,Ae),Ae.programs=Le.programs,x.capabilities=le,x.extensions=K,x.properties=Me,x.renderLists=Re,x.shadowMap=Se,x.state=ie,x.info=Ae}ge();const X=new Ox(x,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(A){A!==void 0&&(F=A,this.setSize(W,ne,!1))},this.getSize=function(A){return A.set(W,ne)},this.setSize=function(A,z,Z=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,ne=z,t.width=Math.floor(A*F),t.height=Math.floor(z*F),Z===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(W*F,ne*F).floor()},this.setDrawingBufferSize=function(A,z,Z){W=A,ne=z,F=Z,t.width=Math.floor(A*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(we)},this.setViewport=function(A,z,Z,J){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,z,Z,J),ie.viewport(I.copy(we).multiplyScalar(F).round())},this.getScissor=function(A){return A.copy(ze)},this.setScissor=function(A,z,Z,J){A.isVector4?ze.set(A.x,A.y,A.z,A.w):ze.set(A,z,Z,J),ie.scissor(B.copy(ze).multiplyScalar(F).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){ie.setScissorTest(je=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){fe=A},this.getClearColor=function(A){return A.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(A=!0,z=!0,Z=!0){let J=0;if(A){let H=!1;if(P!==null){const Te=P.texture.format;H=Te===cc||Te===lc||Te===ac}if(H){const Te=P.texture.type,Ne=Te===Pi||Te===ps||Te===Dr||Te===Qs||Te===rc||Te===oc,Ve=Ue.getClearColor(),We=Ue.getClearAlpha(),rt=Ve.r,ot=Ve.g,Xe=Ve.b;Ne?(g[0]=rt,g[1]=ot,g[2]=Xe,g[3]=We,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=rt,_[1]=ot,_[2]=Xe,_[3]=We,D.clearBufferiv(D.COLOR,0,_))}else J|=D.COLOR_BUFFER_BIT}z&&(J|=D.DEPTH_BUFFER_BIT),Z&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),Re.dispose(),st.dispose(),Me.dispose(),E.dispose(),G.dispose(),oe.dispose(),ye.dispose(),N.dispose(),Le.dispose(),X.dispose(),X.removeEventListener("sessionstart",Rc),X.removeEventListener("sessionend",Cc),Ji.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const A=Ae.autoReset,z=Se.enabled,Z=Se.autoUpdate,J=Se.needsUpdate,H=Se.type;ge(),Ae.autoReset=A,Se.enabled=z,Se.autoUpdate=Z,Se.needsUpdate=J,Se.type=H}function _e(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Je(A){const z=A.target;z.removeEventListener("dispose",Je),Ot(z)}function Ot(A){jt(A),Me.remove(A)}function jt(A){const z=Me.get(A).programs;z!==void 0&&(z.forEach(function(Z){Le.releaseProgram(Z)}),A.isShaderMaterial&&Le.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Z,J,H,Te){z===null&&(z=et);const Ne=H.isMesh&&H.matrixWorld.determinant()<0,Ve=Bu(A,z,Z,J,H);ie.setMaterial(J,Ne);let We=Z.index,rt=1;if(J.wireframe===!0){if(We=ue.getWireframeAttribute(Z),We===void 0)return;rt=2}const ot=Z.drawRange,Xe=Z.attributes.position;let pt=ot.start*rt,Ct=(ot.start+ot.count)*rt;Te!==null&&(pt=Math.max(pt,Te.start*rt),Ct=Math.min(Ct,(Te.start+Te.count)*rt)),We!==null?(pt=Math.max(pt,0),Ct=Math.min(Ct,We.count)):Xe!=null&&(pt=Math.max(pt,0),Ct=Math.min(Ct,Xe.count));const Lt=Ct-pt;if(Lt<0||Lt===1/0)return;ye.setup(H,J,Ve,Z,We);let En,_t=Ce;if(We!==null&&(En=se.get(We),_t=U,_t.setIndex(En)),H.isMesh)J.wireframe===!0?(ie.setLineWidth(J.wireframeLinewidth*me()),_t.setMode(D.LINES)):_t.setMode(D.TRIANGLES);else if(H.isLine){let Ye=J.linewidth;Ye===void 0&&(Ye=1),ie.setLineWidth(Ye*me()),H.isLineSegments?_t.setMode(D.LINES):H.isLineLoop?_t.setMode(D.LINE_LOOP):_t.setMode(D.LINE_STRIP)}else H.isPoints?_t.setMode(D.POINTS):H.isSprite&&_t.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)_t.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))_t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ye=H._multiDrawStarts,mi=H._multiDrawCounts,vt=H._multiDrawCount,qn=We?se.get(We).bytesPerElement:1,vs=Me.get(J).currentProgram.getUniforms();for(let Pn=0;Pn<vt;Pn++)vs.setValue(D,"_gl_DrawID",Pn),_t.render(Ye[Pn]/qn,mi[Pn])}else if(H.isInstancedMesh)_t.renderInstances(pt,Lt,H.count);else if(Z.isInstancedBufferGeometry){const Ye=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,mi=Math.min(Z.instanceCount,Ye);_t.renderInstances(pt,Lt,mi)}else _t.render(pt,Lt)};function mt(A,z,Z){A.transparent===!0&&A.side===Nt&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,Wr(A,z,Z),A.side=$i,A.needsUpdate=!0,Wr(A,z,Z),A.side=Nt):Wr(A,z,Z)}this.compile=function(A,z,Z=null){Z===null&&(Z=A),d=st.get(Z),d.init(z),b.push(d),Z.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),A!==Z&&A.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const J=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const Te=H.material;if(Te)if(Array.isArray(Te))for(let Ne=0;Ne<Te.length;Ne++){const Ve=Te[Ne];mt(Ve,Z,H),J.add(Ve)}else mt(Te,Z,H),J.add(Te)}),b.pop(),d=null,J},this.compileAsync=function(A,z,Z=null){const J=this.compile(A,z,Z);return new Promise(H=>{function Te(){if(J.forEach(function(Ne){Me.get(Ne).currentProgram.isReady()&&J.delete(Ne)}),J.size===0){H(A);return}setTimeout(Te,10)}K.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Xn=null;function pi(A){Xn&&Xn(A)}function Rc(){Ji.stop()}function Cc(){Ji.start()}const Ji=new ou;Ji.setAnimationLoop(pi),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(A){Xn=A,X.setAnimationLoop(A),A===null?Ji.stop():Ji.start()},X.addEventListener("sessionstart",Rc),X.addEventListener("sessionend",Cc),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(z),z=X.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,z,P),d=st.get(A,b.length),d.init(z),b.push(d),Oe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),ee.setFromProjectionMatrix(Oe),pe=this.localClippingEnabled,de=k.init(this.clippingPlanes,pe),m=Re.get(A,v.length),m.init(),v.push(m),X.enabled===!0&&X.isPresenting===!0){const Te=x.xr.getDepthSensingMesh();Te!==null&&Qo(Te,z,-1/0,x.sortObjects)}Qo(A,z,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ce,fe),ae=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ae&&Ue.addToRenderList(m,A),this.info.render.frame++,de===!0&&k.beginShadows();const Z=d.state.shadowsArray;Se.render(Z,A,z),de===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,H=m.transmissive;if(d.setupLights(),z.isArrayCamera){const Te=z.cameras;if(H.length>0)for(let Ne=0,Ve=Te.length;Ne<Ve;Ne++){const We=Te[Ne];Lc(J,H,A,We)}ae&&Ue.render(A);for(let Ne=0,Ve=Te.length;Ne<Ve;Ne++){const We=Te[Ne];Pc(m,A,We,We.viewport)}}else H.length>0&&Lc(J,H,A,z),ae&&Ue.render(A),Pc(m,A,z);P!==null&&(L.updateMultisampleRenderTarget(P),L.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(x,A,z),ye.resetDefaultState(),S=-1,M=null,b.pop(),b.length>0?(d=b[b.length-1],de===!0&&k.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Qo(A,z,Z,J){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ee.intersectsSprite(A)){J&&Ie.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Oe);const Ne=oe.update(A),Ve=A.material;Ve.visible&&m.push(A,Ne,Ve,Z,Ie.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ee.intersectsObject(A))){const Ne=oe.update(A),Ve=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ie.copy(A.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Ie.copy(Ne.boundingSphere.center)),Ie.applyMatrix4(A.matrixWorld).applyMatrix4(Oe)),Array.isArray(Ve)){const We=Ne.groups;for(let rt=0,ot=We.length;rt<ot;rt++){const Xe=We[rt],pt=Ve[Xe.materialIndex];pt&&pt.visible&&m.push(A,Ne,pt,Z,Ie.z,Xe)}}else Ve.visible&&m.push(A,Ne,Ve,Z,Ie.z,null)}}const Te=A.children;for(let Ne=0,Ve=Te.length;Ne<Ve;Ne++)Qo(Te[Ne],z,Z,J)}function Pc(A,z,Z,J){const H=A.opaque,Te=A.transmissive,Ne=A.transparent;d.setupLightsView(Z),de===!0&&k.setGlobalState(x.clippingPlanes,Z),J&&ie.viewport(I.copy(J)),H.length>0&&Vr(H,z,Z),Te.length>0&&Vr(Te,z,Z),Ne.length>0&&Vr(Ne,z,Z),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Lc(A,z,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new ms(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?zr:Pi,minFilter:fs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));const Te=d.state.transmissionRenderTarget[J.id],Ne=J.viewport||I;Te.setSize(Ne.z,Ne.w);const Ve=x.getRenderTarget();x.setRenderTarget(Te),x.getClearColor(q),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),ae&&Ue.render(Z);const We=x.toneMapping;x.toneMapping=qi;const rt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),de===!0&&k.setGlobalState(x.clippingPlanes,J),Vr(A,Z,J),L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te),K.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Xe=0,pt=z.length;Xe<pt;Xe++){const Ct=z[Xe],Lt=Ct.object,En=Ct.geometry,_t=Ct.material,Ye=Ct.group;if(_t.side===Nt&&Lt.layers.test(J.layers)){const mi=_t.side;_t.side=xn,_t.needsUpdate=!0,Ic(Lt,Z,J,En,_t,Ye),_t.side=mi,_t.needsUpdate=!0,ot=!0}}ot===!0&&(L.updateMultisampleRenderTarget(Te),L.updateRenderTargetMipmap(Te))}x.setRenderTarget(Ve),x.setClearColor(q,$),rt!==void 0&&(J.viewport=rt),x.toneMapping=We}function Vr(A,z,Z){const J=z.isScene===!0?z.overrideMaterial:null;for(let H=0,Te=A.length;H<Te;H++){const Ne=A[H],Ve=Ne.object,We=Ne.geometry,rt=J===null?Ne.material:J,ot=Ne.group;Ve.layers.test(Z.layers)&&Ic(Ve,z,Z,We,rt,ot)}}function Ic(A,z,Z,J,H,Te){A.onBeforeRender(x,z,Z,J,H,Te),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,z,Z,J,A,Te),H.transparent===!0&&H.side===Nt&&H.forceSinglePass===!1?(H.side=xn,H.needsUpdate=!0,x.renderBufferDirect(Z,z,J,H,A,Te),H.side=$i,H.needsUpdate=!0,x.renderBufferDirect(Z,z,J,H,A,Te),H.side=Nt):x.renderBufferDirect(Z,z,J,H,A,Te),A.onAfterRender(x,z,Z,J,H,Te)}function Wr(A,z,Z){z.isScene!==!0&&(z=et);const J=Me.get(A),H=d.state.lights,Te=d.state.shadowsArray,Ne=H.state.version,Ve=Le.getParameters(A,H.state,Te,z,Z),We=Le.getProgramCacheKey(Ve);let rt=J.programs;J.environment=A.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(A.isMeshStandardMaterial?G:E).get(A.envMap||J.environment),J.envMapRotation=J.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,rt===void 0&&(A.addEventListener("dispose",Je),rt=new Map,J.programs=rt);let ot=rt.get(We);if(ot!==void 0){if(J.currentProgram===ot&&J.lightsStateVersion===Ne)return Uc(A,Ve),ot}else Ve.uniforms=Le.getUniforms(A),A.onBeforeCompile(Ve,x),ot=Le.acquireProgram(Ve,We),rt.set(We,ot),J.uniforms=Ve.uniforms;const Xe=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xe.clippingPlanes=k.uniform),Uc(A,Ve),J.needsLights=Hu(A),J.lightsStateVersion=Ne,J.needsLights&&(Xe.ambientLightColor.value=H.state.ambient,Xe.lightProbe.value=H.state.probe,Xe.directionalLights.value=H.state.directional,Xe.directionalLightShadows.value=H.state.directionalShadow,Xe.spotLights.value=H.state.spot,Xe.spotLightShadows.value=H.state.spotShadow,Xe.rectAreaLights.value=H.state.rectArea,Xe.ltc_1.value=H.state.rectAreaLTC1,Xe.ltc_2.value=H.state.rectAreaLTC2,Xe.pointLights.value=H.state.point,Xe.pointLightShadows.value=H.state.pointShadow,Xe.hemisphereLights.value=H.state.hemi,Xe.directionalShadowMap.value=H.state.directionalShadowMap,Xe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Xe.spotShadowMap.value=H.state.spotShadowMap,Xe.spotLightMatrix.value=H.state.spotLightMatrix,Xe.spotLightMap.value=H.state.spotLightMap,Xe.pointShadowMap.value=H.state.pointShadowMap,Xe.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=ot,J.uniformsList=null,ot}function Dc(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Lo.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Uc(A,z){const Z=Me.get(A);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Bu(A,z,Z,J,H){z.isScene!==!0&&(z=et),L.resetTextureUnits();const Te=z.fog,Ne=J.isMeshStandardMaterial?z.environment:null,Ve=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:sr,We=(J.isMeshStandardMaterial?G:E).get(J.envMap||Ne),rt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ot=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Xe=!!Z.morphAttributes.position,pt=!!Z.morphAttributes.normal,Ct=!!Z.morphAttributes.color;let Lt=qi;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Lt=x.toneMapping);const En=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_t=En!==void 0?En.length:0,Ye=Me.get(J),mi=d.state.lights;if(de===!0&&(pe===!0||A!==M)){const Bn=A===M&&J.id===S;k.setState(J,A,Bn)}let vt=!1;J.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==mi.state.version||Ye.outputColorSpace!==Ve||H.isBatchedMesh&&Ye.batching===!1||!H.isBatchedMesh&&Ye.batching===!0||H.isBatchedMesh&&Ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ye.instancing===!1||!H.isInstancedMesh&&Ye.instancing===!0||H.isSkinnedMesh&&Ye.skinning===!1||!H.isSkinnedMesh&&Ye.skinning===!0||H.isInstancedMesh&&Ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ye.instancingMorph===!1&&H.morphTexture!==null||Ye.envMap!==We||J.fog===!0&&Ye.fog!==Te||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==k.numPlanes||Ye.numIntersection!==k.numIntersection)||Ye.vertexAlphas!==rt||Ye.vertexTangents!==ot||Ye.morphTargets!==Xe||Ye.morphNormals!==pt||Ye.morphColors!==Ct||Ye.toneMapping!==Lt||Ye.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,Ye.__version=J.version);let qn=Ye.currentProgram;vt===!0&&(qn=Wr(J,z,H));let vs=!1,Pn=!1,cr=!1;const It=qn.getUniforms(),si=Ye.uniforms;if(ie.useProgram(qn.program)&&(vs=!0,Pn=!0,cr=!0),J.id!==S&&(S=J.id,Pn=!0),vs||M!==A){ie.buffers.depth.getReversed()?(he.copy(A.projectionMatrix),Pd(he),Ld(he),It.setValue(D,"projectionMatrix",he)):It.setValue(D,"projectionMatrix",A.projectionMatrix),It.setValue(D,"viewMatrix",A.matrixWorldInverse);const Li=It.map.cameraPosition;Li!==void 0&&Li.setValue(D,He.setFromMatrixPosition(A.matrixWorld)),le.logarithmicDepthBuffer&&It.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&It.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,Pn=!0,cr=!0)}if(H.isSkinnedMesh){It.setOptional(D,H,"bindMatrix"),It.setOptional(D,H,"bindMatrixInverse");const Bn=H.skeleton;Bn&&(Bn.boneTexture===null&&Bn.computeBoneTexture(),It.setValue(D,"boneTexture",Bn.boneTexture,L))}H.isBatchedMesh&&(It.setOptional(D,H,"batchingTexture"),It.setValue(D,"batchingTexture",H._matricesTexture,L),It.setOptional(D,H,"batchingIdTexture"),It.setValue(D,"batchingIdTexture",H._indirectTexture,L),It.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&It.setValue(D,"batchingColorTexture",H._colorsTexture,L));const hr=Z.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0)&&$e.update(H,Z,qn),(Pn||Ye.receiveShadow!==H.receiveShadow)&&(Ye.receiveShadow=H.receiveShadow,It.setValue(D,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(si.envMap.value=We,si.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(si.envMapIntensity.value=z.environmentIntensity),Pn&&(It.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ye.needsLights&&zu(si,cr),Te&&J.fog===!0&&Ee.refreshFogUniforms(si,Te),Ee.refreshMaterialUniforms(si,J,F,ne,d.state.transmissionRenderTarget[A.id]),Lo.upload(D,Dc(Ye),si,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Lo.upload(D,Dc(Ye),si,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&It.setValue(D,"center",H.center),It.setValue(D,"modelViewMatrix",H.modelViewMatrix),It.setValue(D,"normalMatrix",H.normalMatrix),It.setValue(D,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Bn=J.uniformsGroups;for(let Li=0,Ii=Bn.length;Li<Ii;Li++){const Nc=Bn[Li];N.update(Nc,qn),N.bind(Nc,qn)}}return qn}function zu(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Hu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,z,Z){Me.get(A.texture).__webglTexture=z,Me.get(A.depthTexture).__webglTexture=Z;const J=Me.get(A);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const Z=Me.get(A);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Z=0){P=A,T=z,C=Z;let J=!0,H=null,Te=!1,Ne=!1;if(A){const We=Me.get(A);if(We.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(D.FRAMEBUFFER,null),J=!1;else if(We.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(We.__hasExternalTextures)L.rebindTextures(A,Me.get(A.texture).__webglTexture,Me.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Xe=A.depthTexture;if(We.__boundDepthTexture!==Xe){if(Xe!==null&&Me.has(Xe)&&(A.width!==Xe.image.width||A.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const rt=A.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ne=!0);const ot=Me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ot[z])?H=ot[z][Z]:H=ot[z],Te=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?H=Me.get(A).__webglMultisampledFramebuffer:Array.isArray(ot)?H=ot[Z]:H=ot,I.copy(A.viewport),B.copy(A.scissor),V=A.scissorTest}else I.copy(we).multiplyScalar(F).floor(),B.copy(ze).multiplyScalar(F).floor(),V=je;if(ie.bindFramebuffer(D.FRAMEBUFFER,H)&&J&&ie.drawBuffers(A,H),ie.viewport(I),ie.scissor(B),ie.setScissorTest(V),Te){const We=Me.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,We.__webglTexture,Z)}else if(Ne){const We=Me.get(A.texture),rt=z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,We.__webglTexture,Z||0,rt)}S=-1},this.readRenderTargetPixels=function(A,z,Z,J,H,Te,Ne){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve){ie.bindFramebuffer(D.FRAMEBUFFER,Ve);try{const We=A.texture,rt=We.format,ot=We.type;if(!le.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-J&&Z>=0&&Z<=A.height-H&&D.readPixels(z,Z,J,H,j.convert(rt),j.convert(ot),Te)}finally{const We=P!==null?Me.get(P).__webglFramebuffer:null;ie.bindFramebuffer(D.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,z,Z,J,H,Te,Ne){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ve=Ve[Ne]),Ve){const We=A.texture,rt=We.format,ot=We.type;if(!le.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-J&&Z>=0&&Z<=A.height-H){ie.bindFramebuffer(D.FRAMEBUFFER,Ve);const Xe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.bufferData(D.PIXEL_PACK_BUFFER,Te.byteLength,D.STREAM_READ),D.readPixels(z,Z,J,H,j.convert(rt),j.convert(ot),0);const pt=P!==null?Me.get(P).__webglFramebuffer:null;ie.bindFramebuffer(D.FRAMEBUFFER,pt);const Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Cd(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Xe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Te),D.deleteBuffer(Xe),D.deleteSync(Ct),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,Z=0){A.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const J=Math.pow(2,-Z),H=Math.floor(A.image.width*J),Te=Math.floor(A.image.height*J),Ne=z!==null?z.x:0,Ve=z!==null?z.y:0;L.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Ne,Ve,H,Te),ie.unbindTexture()},this.copyTextureToTexture=function(A,z,Z=null,J=null,H=0){A.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,A=arguments[1],z=arguments[2],H=arguments[3]||0,Z=null);let Te,Ne,Ve,We,rt,ot,Xe,pt,Ct;const Lt=A.isCompressedTexture?A.mipmaps[H]:A.image;Z!==null?(Te=Z.max.x-Z.min.x,Ne=Z.max.y-Z.min.y,Ve=Z.isBox3?Z.max.z-Z.min.z:1,We=Z.min.x,rt=Z.min.y,ot=Z.isBox3?Z.min.z:0):(Te=Lt.width,Ne=Lt.height,Ve=Lt.depth||1,We=0,rt=0,ot=0),J!==null?(Xe=J.x,pt=J.y,Ct=J.z):(Xe=0,pt=0,Ct=0);const En=j.convert(z.format),_t=j.convert(z.type);let Ye;z.isData3DTexture?(L.setTexture3D(z,0),Ye=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(L.setTexture2DArray(z,0),Ye=D.TEXTURE_2D_ARRAY):(L.setTexture2D(z,0),Ye=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const mi=D.getParameter(D.UNPACK_ROW_LENGTH),vt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qn=D.getParameter(D.UNPACK_SKIP_PIXELS),vs=D.getParameter(D.UNPACK_SKIP_ROWS),Pn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Lt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Lt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,rt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ot);const cr=A.isDataArrayTexture||A.isData3DTexture,It=z.isDataArrayTexture||z.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const si=Me.get(A),hr=Me.get(z),Bn=Me.get(si.__renderTarget),Li=Me.get(hr.__renderTarget);ie.bindFramebuffer(D.READ_FRAMEBUFFER,Bn.__webglFramebuffer),ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ii=0;Ii<Ve;Ii++)cr&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(A).__webglTexture,H,ot+Ii),A.isDepthTexture?(It&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.get(z).__webglTexture,H,Ct+Ii),D.blitFramebuffer(We,rt,Te,Ne,Xe,pt,Te,Ne,D.DEPTH_BUFFER_BIT,D.NEAREST)):It?D.copyTexSubImage3D(Ye,H,Xe,pt,Ct+Ii,We,rt,Te,Ne):D.copyTexSubImage2D(Ye,H,Xe,pt,Ct+Ii,We,rt,Te,Ne);ie.bindFramebuffer(D.READ_FRAMEBUFFER,null),ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Ye,H,Xe,pt,Ct,Te,Ne,Ve,En,_t,Lt.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(Ye,H,Xe,pt,Ct,Te,Ne,Ve,En,Lt.data):D.texSubImage3D(Ye,H,Xe,pt,Ct,Te,Ne,Ve,En,_t,Lt):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,H,Xe,pt,Te,Ne,En,_t,Lt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,H,Xe,pt,Lt.width,Lt.height,En,Lt.data):D.texSubImage2D(D.TEXTURE_2D,H,Xe,pt,Te,Ne,En,_t,Lt);D.pixelStorei(D.UNPACK_ROW_LENGTH,mi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qn),D.pixelStorei(D.UNPACK_SKIP_ROWS,vs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pn),H===0&&z.generateMipmaps&&D.generateMipmap(Ye),ie.unbindTexture()},this.copyTextureToTexture3D=function(A,z,Z=null,J=null,H=0){return A.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,A=arguments[2],z=arguments[3],H=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,Z,J,H)},this.initRenderTarget=function(A){Me.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),ie.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,ie.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}}class pc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new ht(e),this.near=t,this.far=i}clone(){return new pc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class du extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wl,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yn=new O;class Uo{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=wt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),i=wt(i,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Uo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nr extends _s{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Us;const mr=new O,Ns=new O,Os=new O,Fs=new be,gr=new be,pu=new Tt,uo=new O,xr=new O,po=new O,Lh=new be,Pa=new be,Ih=new be;class Nr extends Yt{constructor(e=new nr){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new Kt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hx(t,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Uo(i,3,0,!1)),Us.setAttribute("uv",new Uo(i,2,3,!1))}this.geometry=Us,this.material=e,this.center=new be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),pu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Os.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-Os.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;mo(uo.set(-.5,-.5,0),Os,o,Ns,s,r),mo(xr.set(.5,-.5,0),Os,o,Ns,s,r),mo(po.set(.5,.5,0),Os,o,Ns,s,r),Lh.set(0,0),Pa.set(1,0),Ih.set(1,1);let a=e.ray.intersectTriangle(uo,xr,po,!1,mr);if(a===null&&(mo(xr.set(-.5,.5,0),Os,o,Ns,s,r),Pa.set(0,1),a=e.ray.intersectTriangle(uo,po,xr,!1,mr),a===null))return;const l=e.ray.origin.distanceTo(mr);l<e.near||l>e.far||t.push({distance:l,point:mr.clone(),uv:Vn.getInterpolation(mr,uo,xr,po,Lh,Pa,Ih,new be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function mo(n,e,t,i,s,r){Fs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(gr.x=r*Fs.x-s*Fs.y,gr.y=s*Fs.x+r*Fs.y):gr.copy(Fs),n.copy(e),n.x+=gr.x,n.y+=gr.y,n.applyMatrix4(pu)}class mu extends _s{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const No=new O,Oo=new O,Dh=new Tt,_r=new hc,go=new Wo,La=new O,Uh=new O;class Gx extends Yt{constructor(e=new Kt,t=new mu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)No.fromBufferAttribute(t,s-1),Oo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=No.distanceTo(Oo);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),go.radius+=r,e.ray.intersectsSphere(go)===!1)return;Dh.copy(s).invert(),_r.copy(e.ray).applyMatrix4(Dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=h.getX(_),v=h.getX(_+1),b=xo(this,e,_r,l,d,v);b&&t.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=xo(this,e,_r,l,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=xo(this,e,_r,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=xo(this,e,_r,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xo(n,e,t,i,s,r){const o=n.geometry.attributes.position;if(No.fromBufferAttribute(o,s),Oo.fromBufferAttribute(o,r),t.distanceSqToSegment(No,Oo,La,Uh)>i)return;La.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(La);if(!(l<e.near||l>e.far))return{distance:l,point:Uh.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}class Vx extends Gx{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Cn extends _n{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let s=0;const r=i.length;let o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);const h=i[s],u=i[s+1]-h,p=(o-h)/u;return(s+p)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new be:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,s=[],r=[],o=[],a=new O,l=new Tt;for(let p=0;p<=e;p++){const g=p/e;s[p]=this.getTangentAt(g,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=e;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(pn(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(t===!0){let p=Math.acos(pn(r[0].dot(r[e]),-1,1));p/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(p=-p);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mc extends di{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new be){const i=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*f+this.aX,c=u*f+p*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Wx extends mc{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function gc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,f){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+f)+(l-a)/f;u*=h,p*=h,s(o,a,u,p)},calc:function(r){const o=r*r,a=o*r;return n+e*r+t*o+i*a}}}const _o=new O,Ia=new gc,Da=new gc,Ua=new gc;class Xx extends di{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new O){const i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(_o.subVectors(s[0],s[1]).add(s[0]),c=_o);const f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(_o.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=_o),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),_=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ia.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,_,m),Da.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,_,m),Ua.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Da.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ua.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(Ia.calc(l),Da.calc(l),Ua.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nh(n,e,t,i,s){const r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function qx(n,e){const t=1-n;return t*t*e}function Yx(n,e){return 2*(1-n)*n*e}function $x(n,e){return n*n*e}function Pr(n,e,t,i){return qx(n,e)+Yx(n,t)+$x(n,i)}function Zx(n,e){const t=1-n;return t*t*t*e}function Kx(n,e){const t=1-n;return 3*t*t*n*e}function jx(n,e){return 3*(1-n)*n*n*e}function Jx(n,e){return n*n*n*e}function Lr(n,e,t,i,s){return Zx(n,e)+Kx(n,t)+jx(n,i)+Jx(n,s)}class gu extends di{constructor(e=new be,t=new be,i=new be,s=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new be){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(e,s.x,r.x,o.x,a.x),Lr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Qx extends di{constructor(e=new O,t=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Lr(e,s.x,r.x,o.x,a.x),Lr(e,s.y,r.y,o.y,a.y),Lr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xu extends di{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class e_ extends di{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _u extends di{constructor(e=new be,t=new be,i=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new be){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Pr(e,s.x,r.x,o.x),Pr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class t_ extends di{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(Pr(e,s.x,r.x,o.x),Pr(e,s.y,r.y,o.y),Pr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vu extends di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return i.set(Nh(a,l.x,c.x,h.x,f.x),Nh(a,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const s=e.points[t];this.points.push(new be().fromArray(s))}return this}}var $l=Object.freeze({__proto__:null,ArcCurve:Wx,CatmullRomCurve3:Xx,CubicBezierCurve:gu,CubicBezierCurve3:Qx,EllipseCurve:mc,LineCurve:xu,LineCurve3:e_,QuadraticBezierCurve:_u,QuadraticBezierCurve3:t_,SplineCurve:vu});class n_ extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $l[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const s=e.curves[t];this.curves.push(new $l[s.type]().fromJSON(s))}return this}}class Oh extends n_{constructor(e){super(),this.type="Path",this.currentPoint=new be,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new xu(this.currentPoint.clone(),new be(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){const r=new _u(this.currentPoint.clone(),new be(e,t),new be(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,o){const a=new gu(this.currentPoint.clone(),new be(e,t),new be(i,s),new be(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new vu(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,s,r,o),this}absarc(e,t,i,s,r,o){return this.absellipse(e,t,i,i,s,r,o),this}ellipse(e,t,i,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,o,a,l),this}absellipse(e,t,i,s,r,o,a,l){const c=new mc(e,t,i,s,r,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ni extends Kt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new O,h=new be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){const p=i+f/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fn extends Kt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],f=[],u=[],p=[];let g=0;const _=[],m=i/2;let d=0;v(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new xt(f,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(p,2));function v(){const x=new O,R=new O;let T=0;const C=(t-e)/i;for(let P=0;P<=r;P++){const S=[],M=P/r,I=M*(t-e)+e;for(let B=0;B<=s;B++){const V=B/s,q=V*l+a,$=Math.sin(q),W=Math.cos(q);R.x=I*$,R.y=-M*i+m,R.z=I*W,f.push(R.x,R.y,R.z),x.set($,C,W).normalize(),u.push(x.x,x.y,x.z),p.push(V,1-M),S.push(g++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const M=_[S][P],I=_[S+1][P],B=_[S+1][P+1],V=_[S][P+1];(e>0||S!==0)&&(h.push(M,I,V),T+=3),(t>0||S!==r-1)&&(h.push(I,B,V),T+=3)}c.addGroup(d,T,0),d+=T}function b(x){const R=g,T=new be,C=new O;let P=0;const S=x===!0?e:t,M=x===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*M,0),u.push(0,M,0),p.push(.5,.5),g++;const I=g;for(let B=0;B<=s;B++){const q=B/s*l+a,$=Math.cos(q),W=Math.sin(q);C.x=S*W,C.y=m*M,C.z=S*$,f.push(C.x,C.y,C.z),u.push(0,M,0),T.x=$*.5+.5,T.y=W*.5*M+.5,p.push(T.x,T.y),g++}for(let B=0;B<s;B++){const V=R+B,q=I+B;x===!0?h.push(q,q+1,V):h.push(q+1,q,V),P+=3}c.addGroup(d,P,x===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qo extends Fn{constructor(e=1,t=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new qo(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xc extends Kt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const b=new O,x=new O,R=new O;for(let T=0;T<t.length;T+=3)p(t[T+0],b),p(t[T+1],x),p(t[T+2],R),l(b,x,R,v)}function l(v,b,x,R){const T=R+1,C=[];for(let P=0;P<=T;P++){C[P]=[];const S=v.clone().lerp(x,P/T),M=b.clone().lerp(x,P/T),I=T-P;for(let B=0;B<=I;B++)B===0&&P===T?C[P][B]=S:C[P][B]=S.clone().lerp(M,B/I)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const M=Math.floor(S/2);S%2===0?(u(C[P][M+1]),u(C[P+1][M]),u(C[P][M])):(u(C[P][M+1]),u(C[P+1][M+1]),u(C[P+1][M]))}}function c(v){const b=new O;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(v),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){const v=new O;for(let b=0;b<r.length;b+=3){v.x=r[b+0],v.y=r[b+1],v.z=r[b+2];const x=m(v)/2/Math.PI+.5,R=d(v)/Math.PI+.5;o.push(x,1-R)}g(),f()}function f(){for(let v=0;v<o.length;v+=6){const b=o[v+0],x=o[v+2],R=o[v+4],T=Math.max(b,x,R),C=Math.min(b,x,R);T>.9&&C<.1&&(b<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),R<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function p(v,b){const x=v*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function g(){const v=new O,b=new O,x=new O,R=new O,T=new be,C=new be,P=new be;for(let S=0,M=0;S<r.length;S+=9,M+=6){v.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),x.set(r[S+6],r[S+7],r[S+8]),T.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),R.copy(v).add(b).add(x).divideScalar(3);const I=m(R);_(T,M+0,v,I),_(C,M+2,b,I),_(P,M+4,x,I)}}function _(v,b,x,R){R<0&&v.x===1&&(o[b]=v.x-1),x.x===0&&x.z===0&&(o[b]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.vertices,e.indices,e.radius,e.details)}}class Yo extends Oh{constructor(e){super(e),this.uuid=Ri(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const s=e.holes[t];this.holes.push(new Oh().fromJSON(s))}return this}}const i_={triangulate:function(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Mu(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,f,u,p;if(i&&(r=l_(n,e,r,t)),n.length>80*t){a=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)f=n[g],u=n[g+1],f<a&&(a=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return Or(r,o,t,a,l,p,0),o}};function Mu(n,e,t,i,s){let r,o;if(s===v_(n,e,t,i)>0)for(r=e;r<t;r+=i)o=Fh(r,n[r],n[r+1],o);else for(r=t-i;r>=e;r-=i)o=Fh(r,n[r],n[r+1],o);return o&&$o(o,o.next)&&(kr(o),o=o.next),o}function gs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&($o(t,t.next)||kt(t.prev,t,t.next)===0)){if(kr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Or(n,e,t,i,s,r,o){if(!n)return;!o&&r&&d_(n,i,s,r);let a=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?r_(n,i,s,r):s_(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),kr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=o_(gs(n),e,t),Or(n,e,t,i,s,r,2)):o===2&&a_(n,e,t,i,s,r):Or(gs(n),e,t,i,s,r,1);break}}}function s_(n){const e=n.prev,t=n,i=n.next;if(kt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=s<r?s<o?s:o:r<o?r:o,f=a<l?a<c?a:c:l<c?l:c,u=s>r?s>o?s:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=p&&Xs(s,a,r,l,o,c,g.x,g.y)&&kt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function r_(n,e,t,i){const s=n.prev,r=n,o=n.next;if(kt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,f=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,_=a>l?a>c?a:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,d=Zl(p,g,e,t,i),v=Zl(_,m,e,t,i);let b=n.prevZ,x=n.nextZ;for(;b&&b.z>=d&&x&&x.z<=v;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Xs(a,h,l,f,c,u,b.x,b.y)&&kt(b.prev,b,b.next)>=0||(b=b.prevZ,x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Xs(a,h,l,f,c,u,x.x,x.y)&&kt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;b&&b.z>=d;){if(b.x>=p&&b.x<=_&&b.y>=g&&b.y<=m&&b!==s&&b!==o&&Xs(a,h,l,f,c,u,b.x,b.y)&&kt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&Xs(a,h,l,f,c,u,x.x,x.y)&&kt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function o_(n,e,t){let i=n;do{const s=i.prev,r=i.next.next;!$o(s,r)&&yu(s,i,i.next,r)&&Fr(s,r)&&Fr(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),kr(i),kr(i.next),i=n=r),i=i.next}while(i!==n);return gs(i)}function a_(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&g_(o,a)){let l=Su(o,a);o=gs(o,o.next),l=gs(l,l.next),Or(o,e,t,i,s,r,0),Or(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function l_(n,e,t,i){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Mu(n,a,l,i,!1),c===c.next&&(c.steiner=!0),s.push(m_(c));for(s.sort(c_),r=0;r<s.length;r++)t=h_(s[r],t);return t}function c_(n,e){return n.x-e.x}function h_(n,e){const t=f_(n,e);if(!t)return e;const i=Su(t,n);return gs(i,i.next),gs(t,t.next)}function f_(n,e){let t=e,i=-1/0,s;const r=n.x,o=n.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const u=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,f;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Xs(o<c?r:i,o,l,c,o<c?i:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),Fr(t,n)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&u_(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function u_(n,e){return kt(n.prev,n,e.prev)<0&&kt(e.next,n,n.next)<0}function d_(n,e,t,i){let s=n;do s.z===0&&(s.z=Zl(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,p_(s)}function p_(n){let e,t,i,s,r,o,a,l,c=1;do{for(t=n,n=null,r=null,o=0;t;){for(o++,i=t,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,a--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(o>1);return n}function Zl(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function m_(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Xs(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function g_(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!x_(n,e)&&(Fr(n,e)&&Fr(e,n)&&__(n,e)&&(kt(n.prev,n,e.prev)||kt(n,e.prev,e))||$o(n,e)&&kt(n.prev,n,n.next)>0&&kt(e.prev,e,e.next)>0)}function kt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function $o(n,e){return n.x===e.x&&n.y===e.y}function yu(n,e,t,i){const s=Mo(kt(n,e,t)),r=Mo(kt(n,e,i)),o=Mo(kt(t,i,n)),a=Mo(kt(t,i,e));return!!(s!==r&&o!==a||s===0&&vo(n,t,e)||r===0&&vo(n,i,e)||o===0&&vo(t,n,i)||a===0&&vo(t,e,i))}function vo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Mo(n){return n>0?1:n<0?-1:0}function x_(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&yu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Fr(n,e){return kt(n.prev,n,n.next)<0?kt(n,e,n.next)>=0&&kt(n,n.prev,e)>=0:kt(n,e,n.prev)<0||kt(n,n.next,e)<0}function __(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Su(n,e){const t=new Kl(n.i,n.x,n.y),i=new Kl(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Fh(n,e,t,i){const s=new Kl(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function kr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Kl(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function v_(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Yi{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return Yi.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];kh(e),Bh(i,e);let o=e.length;t.forEach(kh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Bh(i,t[l]);const a=i_.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function kh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Bh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class _c extends Kt{constructor(e=new Yo([new be(.5,.5),new be(-.5,.5),new be(-.5,-.5),new be(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:M_;let b,x=!1,R,T,C,P;d&&(b=d.getSpacedPoints(h),x=!0,u=!1,R=d.computeFrenetFrames(h,!1),T=new O,C=new O,P=new O),u||(m=0,p=0,g=0,_=0);const S=a.extractPoints(c);let M=S.shape;const I=S.holes;if(!Yi.isClockWise(M)){M=M.reverse();for(let ae=0,me=I.length;ae<me;ae++){const D=I[ae];Yi.isClockWise(D)&&(I[ae]=D.reverse())}}const V=Yi.triangulateShape(M,I),q=M;for(let ae=0,me=I.length;ae<me;ae++){const D=I[ae];M=M.concat(D)}function $(ae,me,D){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(me,D)}const W=M.length,ne=V.length;function F(ae,me,D){let re,K,le;const ie=ae.x-me.x,Ae=ae.y-me.y,Me=D.x-ae.x,L=D.y-ae.y,E=ie*ie+Ae*Ae,G=ie*L-Ae*Me;if(Math.abs(G)>Number.EPSILON){const se=Math.sqrt(E),ue=Math.sqrt(Me*Me+L*L),oe=me.x-Ae/se,Le=me.y+ie/se,Ee=D.x-L/ue,Re=D.y+Me/ue,st=((Ee-oe)*L-(Re-Le)*Me)/(ie*L-Ae*Me);re=oe+ie*st-ae.x,K=Le+Ae*st-ae.y;const k=re*re+K*K;if(k<=2)return new be(re,K);le=Math.sqrt(k/2)}else{let se=!1;ie>Number.EPSILON?Me>Number.EPSILON&&(se=!0):ie<-Number.EPSILON?Me<-Number.EPSILON&&(se=!0):Math.sign(Ae)===Math.sign(L)&&(se=!0),se?(re=-Ae,K=ie,le=Math.sqrt(E)):(re=ie,K=Ae,le=Math.sqrt(E/2))}return new be(re/le,K/le)}const ce=[];for(let ae=0,me=q.length,D=me-1,re=ae+1;ae<me;ae++,D++,re++)D===me&&(D=0),re===me&&(re=0),ce[ae]=F(q[ae],q[D],q[re]);const fe=[];let we,ze=ce.concat();for(let ae=0,me=I.length;ae<me;ae++){const D=I[ae];we=[];for(let re=0,K=D.length,le=K-1,ie=re+1;re<K;re++,le++,ie++)le===K&&(le=0),ie===K&&(ie=0),we[re]=F(D[re],D[le],D[ie]);fe.push(we),ze=ze.concat(we)}for(let ae=0;ae<m;ae++){const me=ae/m,D=p*Math.cos(me*Math.PI/2),re=g*Math.sin(me*Math.PI/2)+_;for(let K=0,le=q.length;K<le;K++){const ie=$(q[K],ce[K],re);he(ie.x,ie.y,-D)}for(let K=0,le=I.length;K<le;K++){const ie=I[K];we=fe[K];for(let Ae=0,Me=ie.length;Ae<Me;Ae++){const L=$(ie[Ae],we[Ae],re);he(L.x,L.y,-D)}}}const je=g+_;for(let ae=0;ae<W;ae++){const me=u?$(M[ae],ze[ae],je):M[ae];x?(C.copy(R.normals[0]).multiplyScalar(me.x),T.copy(R.binormals[0]).multiplyScalar(me.y),P.copy(b[0]).add(C).add(T),he(P.x,P.y,P.z)):he(me.x,me.y,0)}for(let ae=1;ae<=h;ae++)for(let me=0;me<W;me++){const D=u?$(M[me],ze[me],je):M[me];x?(C.copy(R.normals[ae]).multiplyScalar(D.x),T.copy(R.binormals[ae]).multiplyScalar(D.y),P.copy(b[ae]).add(C).add(T),he(P.x,P.y,P.z)):he(D.x,D.y,f/h*ae)}for(let ae=m-1;ae>=0;ae--){const me=ae/m,D=p*Math.cos(me*Math.PI/2),re=g*Math.sin(me*Math.PI/2)+_;for(let K=0,le=q.length;K<le;K++){const ie=$(q[K],ce[K],re);he(ie.x,ie.y,f+D)}for(let K=0,le=I.length;K<le;K++){const ie=I[K];we=fe[K];for(let Ae=0,Me=ie.length;Ae<Me;Ae++){const L=$(ie[Ae],we[Ae],re);x?he(L.x,L.y+b[h-1].y,b[h-1].x+D):he(L.x,L.y,f+D)}}}ee(),de();function ee(){const ae=s.length/3;if(u){let me=0,D=W*me;for(let re=0;re<ne;re++){const K=V[re];Oe(K[2]+D,K[1]+D,K[0]+D)}me=h+m*2,D=W*me;for(let re=0;re<ne;re++){const K=V[re];Oe(K[0]+D,K[1]+D,K[2]+D)}}else{for(let me=0;me<ne;me++){const D=V[me];Oe(D[2],D[1],D[0])}for(let me=0;me<ne;me++){const D=V[me];Oe(D[0]+W*h,D[1]+W*h,D[2]+W*h)}}i.addGroup(ae,s.length/3-ae,0)}function de(){const ae=s.length/3;let me=0;pe(q,me),me+=q.length;for(let D=0,re=I.length;D<re;D++){const K=I[D];pe(K,me),me+=K.length}i.addGroup(ae,s.length/3-ae,1)}function pe(ae,me){let D=ae.length;for(;--D>=0;){const re=D;let K=D-1;K<0&&(K=ae.length-1);for(let le=0,ie=h+m*2;le<ie;le++){const Ae=W*le,Me=W*(le+1),L=me+re+Ae,E=me+K+Ae,G=me+K+Me,se=me+re+Me;He(L,E,G,se)}}}function he(ae,me,D){l.push(ae),l.push(me),l.push(D)}function Oe(ae,me,D){Ie(ae),Ie(me),Ie(D);const re=s.length/3,K=v.generateTopUV(i,s,re-3,re-2,re-1);et(K[0]),et(K[1]),et(K[2])}function He(ae,me,D,re){Ie(ae),Ie(me),Ie(re),Ie(me),Ie(D),Ie(re);const K=s.length/3,le=v.generateSideWallUV(i,s,K-6,K-3,K-2,K-1);et(le[0]),et(le[1]),et(le[3]),et(le[1]),et(le[2]),et(le[3])}function Ie(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function et(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return y_(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];i.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $l[s.type]().fromJSON(s)),new _c(i,e.options)}}const M_={generateTopUV:function(n,e,t,i,s){const r=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new be(r,o),new be(a,l),new be(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[s*3],p=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new be(o,1-l),new be(c,1-f),new be(u,1-g),new be(_,1-d)]:[new be(a,1-l),new be(h,1-f),new be(p,1-g),new be(m,1-d)]}};function y_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Zo extends xc{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zo(e.radius,e.detail)}}class vc extends Kt{constructor(e=new Yo([new be(0,.5),new be(-.5,-.5),new be(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(r,3)),this.setAttribute("uv",new xt(o,2));function c(h){const f=s.length/3,u=h.extractPoints(t);let p=u.shape;const g=u.holes;Yi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,d=g.length;m<d;m++){const v=g[m];Yi.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=Yi.triangulateShape(p,g);for(let m=0,d=g.length;m<d;m++){const v=g[m];p=p.concat(v)}for(let m=0,d=p.length;m<d;m++){const v=p[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,d=_.length;m<d;m++){const v=_[m],b=v[0]+f,x=v[1]+f,R=v[2]+f;i.push(b,x,R),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return S_(t,e)}static fromJSON(e,t){const i=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];i.push(o)}return new vc(i,e.curveSegments)}}function S_(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){const s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}class gn extends Kt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new O,u=new O,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const v=[],b=d/i;let x=0;d===0&&o===0?x=.5/t:d===i&&l===Math.PI&&(x=-.5/t);for(let R=0;R<=t;R++){const T=R/t;f.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),f.y=e*Math.cos(o+b*a),f.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),_.push(u.x,u.y,u.z),m.push(T+x,1-b),v.push(c++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){const b=h[d][v+1],x=h[d][v],R=h[d+1][v],T=h[d+1][v+1];(d!==0||o>0)&&p.push(b,x,T),(d!==i-1||l<Math.PI)&&p.push(x,R,T)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lr extends Kt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new O,f=new O,u=new O;for(let p=0;p<=i;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,v=(s+1)*p+g;o.push(_,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ft extends _s{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zf,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const zh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class b_{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const w_=new b_;class Mc{constructor(e){this.manager=e!==void 0?e:w_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Mc.DEFAULT_MATERIAL_NAME="__DEFAULT";class E_ extends Mc{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=zh.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ur("img");function l(){h(),zh.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class bu extends Mc{constructor(e){super(e)}load(e,t,i,s){const r=new _n,o=new E_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class yc extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class T_ extends yc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Na=new Tt,Hh=new O,Gh=new O;class wu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uc,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Hh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hh),Gh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gh),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vh=new Tt,vr=new O,Oa=new O;class A_ extends wu{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),vr.setFromMatrixPosition(e.matrixWorld),i.position.copy(vr),Oa.copy(i.position),Oa.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Oa),i.updateMatrixWorld(),s.makeTranslation(-vr.x,-vr.y,-vr.z),Vh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh)}}class Sc extends yc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new A_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class R_ extends wu{constructor(){super(new au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class C_ extends yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new R_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class P_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wh(){return performance.now()}const Xh=new Tt;class L_{constructor(e,t,i=0,s=1/0){this.ray=new hc(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new fc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xh),this}intersectObject(e,t=!0,i=[]){return jl(e,this,i,t),i.sort(qh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)jl(e[s],this,i,t);return i.sort(qh),i}}function qh(n,e){return n.distance-e.distance}function jl(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)jl(r[o],e,t,!0)}}class I_ extends xs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ic}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ic);class D_ extends du{constructor(){super();const e=new on;e.deleteAttribute("uv");const t=new Ft({side:xn}),i=new Ft,s=new Sc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new xe(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new xe(e,i);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new xe(e,i);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new xe(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new xe(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new xe(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const f=new xe(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);const u=new xe(e,ks(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);const p=new xe(e,ks(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new xe(e,ks(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new xe(e,ks(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new xe(e,ks(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const d=new xe(e,ks(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ks(n){const e=new hi;return e.color.setScalar(n),e}const U_=new bu;let Eu=8;function ii(n,e,t,{repeat:i=!0,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=n,r.height=e,t(r.getContext("2d"),n,e);const o=new Cn(r);return s&&(o.colorSpace=Ut),i&&(o.wrapS=o.wrapT=Zi),o.anisotropy=Eu,o}function Fa(n,e=!1){const t=U_.load(n);return t.colorSpace=Ut,e&&(t.wrapS=t.wrapT=Zi),t.anisotropy=Eu,t}let ka=1337;function Ke(){return ka=ka*16807%2147483647,(ka-1)/2147483646}function yo(n,e,t){return ii(512,512,(i,s)=>{const o=s/4;for(let a=0;a<4;a++)for(let l=0;l<4;l++){const c=(Ke()-.5)*e;i.fillStyle=`rgb(${n[0]+c},${n[1]+c},${n[2]+c})`,i.fillRect(a*o,l*o,o,o);for(let h=0;h<140;h++){const f=(Ke()-.5)*e*1.4;i.fillStyle=`rgba(${n[0]+f},${n[1]+f},${n[2]+f},0.5)`,i.fillRect(a*o+Ke()*o,l*o+Ke()*o,2+Ke()*5,2+Ke()*5)}}i.strokeStyle=t,i.lineWidth=3;for(let a=0;a<=4;a++)i.beginPath(),i.moveTo(a*o,0),i.lineTo(a*o,s),i.stroke(),i.beginPath(),i.moveTo(0,a*o),i.lineTo(s,a*o),i.stroke()})}const N_=ii(256,1024,(n,e,t)=>{n.fillStyle="#d9c7a4",n.fillRect(0,0,e,t);for(let i=0;i<90;i++){const s=Ke()*e,r=.05+Ke()*.12;n.strokeStyle=Ke()>.5?`rgba(150,120,80,${r})`:`rgba(245,235,215,${r})`,n.lineWidth=1+Ke()*3,n.beginPath(),n.moveTo(s,0);for(let o=0;o<=t;o+=64)n.lineTo(s+Math.sin(o*.01+i)*4,o);n.stroke()}}),O_=ii(256,1024,(n,e,t)=>{n.fillStyle="#a8978a",n.fillRect(0,0,e,t);for(let i=0;i<120;i++){const s=Ke()*e,r=.05+Ke()*.1;n.strokeStyle=Ke()>.5?`rgba(90,75,65,${r})`:`rgba(210,200,190,${r})`,n.lineWidth=1+Ke()*2.5,n.beginPath(),n.moveTo(s,0);for(let o=0;o<=t;o+=64)n.lineTo(s+Math.sin(o*.012+i)*3,o);n.stroke()}}),F_=ii(256,96,(n,e,t)=>{n.fillStyle="#e4e4e2",n.fillRect(0,0,e,t);for(let i=0;i<4;i++)for(let s=0;s<14;s++)i===3&&s>3&&s<9||(n.fillStyle="#fafafa",n.strokeStyle="#b9b9b6",n.lineWidth=1.5,n.beginPath(),n.arc(14+s*17.5,14+i*22,7.5,0,7),n.fill(),n.stroke());n.beginPath(),n.roundRect(80,70,90,15,7),n.fill(),n.stroke()}),k_=ii(128,128,(n,e)=>{n.fillStyle="#c4c5c8",n.fillRect(0,0,e,e);for(let t=0;t<40;t++)n.fillStyle=`rgba(255,255,255,${.03+Ke()*.05})`,n.fillRect(0,Ke()*e,e,1);n.fillStyle="#8d8e92",n.beginPath(),n.arc(60,70,15,0,7),n.arc(76,70,15,0,7),n.fill(),n.beginPath(),n.ellipse(68,80,18,20,0,0,7),n.fill(),n.fillStyle="#c4c5c8",n.beginPath(),n.arc(90,62,10,0,7),n.fill(),n.fillStyle="#8d8e92",n.beginPath(),n.ellipse(70,46,9,5,-.7,0,7),n.fill()},{repeat:!1}),B_=ii(512,512,(n,e)=>{const i=e/2;n.fillStyle="#111111",n.fillRect(0,0,e,e),n.fillStyle="#d6ccb2",n.beginPath(),n.moveTo(0,0),n.lineTo(i,0),n.lineTo(i,i),n.closePath(),n.fill(),n.strokeStyle="#ecc828",n.lineWidth=7;for(let s=0;s<=2;s++)n.beginPath(),n.moveTo(s*i,0),n.lineTo(s*i,e),n.stroke(),n.beginPath(),n.moveTo(0,s*i),n.lineTo(e,s*i),n.stroke();n.beginPath(),n.moveTo(0,0),n.lineTo(e,e),n.moveTo(i,0),n.lineTo(e,i),n.moveTo(0,i),n.lineTo(i,e),n.stroke()}),Yh=ii(256,160,(n,e,t)=>{n.fillStyle="#1b1d24",n.fillRect(0,0,e,t),n.fillStyle="#2a2d36",n.fillRect(0,0,40,t);const i=["#c792ea","#82aaff","#c3e88d","#f78c6c","#89ddff","#d0d0d0"];for(let s=8;s<t-4;s+=7){let r=48+Math.floor(Ke()*4)*8;const o=1+Math.floor(Ke()*4);for(let a=0;a<o&&r<e-10;a++){const l=10+Ke()*45;n.fillStyle=i[Math.floor(Ke()*i.length)],n.fillRect(r,s,l,3),r+=l+5}}},{repeat:!1}),$h=ii(256,160,(n,e,t)=>{n.fillStyle="#f4f6fa",n.fillRect(0,0,e,t),n.fillStyle="#26324a",n.fillRect(0,0,36,t),n.fillStyle="#ffffff";for(let i=0;i<3;i++)n.fillRect(44+i*70,10,62,34);n.fillStyle="#4c7cf0";for(let i=0;i<12;i++){const s=10+Ke()*50;n.fillRect(48+i*16,140-s,9,s)}n.fillStyle="#26c281",n.fillRect(50,20,40,6),n.fillStyle="#f0a04c",n.fillRect(120,20,40,6)},{repeat:!1}),Zh=ii(256,160,(n,e,t)=>{const i=n.createLinearGradient(0,0,e,t);i.addColorStop(0,"#20263a"),i.addColorStop(1,"#3b2a4f"),n.fillStyle=i,n.fillRect(0,0,e,t),n.fillStyle="rgba(255,255,255,.85)";for(let s=0;s<4;s++)n.fillRect(30,30+s*22,120+Ke()*60,8);n.fillStyle="#ecc828",n.fillRect(30,120,60,14)},{repeat:!1}),z_=ii(1024,360,(n,e,t)=>{n.clearRect(0,0,e,t),n.fillStyle="#3a3a38",n.textAlign="center",n.font='700 210px "Avenir Next", "Helvetica Neue", Arial, sans-serif',n.fillText("pixbit",e/2,200),n.font='500 78px "Avenir Next", "Helvetica Neue", Arial, sans-serif',n.fillText("· s o l u t i o n s ·",e/2,320)},{repeat:!1}),H_=ii(256,256,(n,e)=>{const t=e/2;n.fillStyle="#f7f7f5",n.beginPath(),n.arc(t,t,t-4,0,Math.PI*2),n.fill(),n.lineWidth=10,n.strokeStyle="#222",n.stroke(),n.fillStyle="#222";for(let i=0;i<12;i++){const s=i/12*Math.PI*2;n.fillRect(t+Math.sin(s)*96-3,t-Math.cos(s)*96-9,6,18)}n.lineCap="round",n.lineWidth=8,n.beginPath(),n.moveTo(t,t),n.lineTo(t+50,t-30),n.stroke(),n.lineWidth=5,n.beginPath(),n.moveTo(t,t),n.lineTo(t-20,t-85),n.stroke()},{repeat:!1}),it=n=>new Ft(n),y={floorBeige:it({map:yo([196,180,160],14,"#a8998a"),roughness:.3,metalness:0}),floorDark:it({map:yo([78,78,80],12,"#5a5a5c"),roughness:.6}),floorTerrace:it({map:yo([184,160,136],16,"#9c7e66"),roughness:.75}),floorCorridor:it({map:yo([226,214,196],8,"#cbbfae"),roughness:.12}),wall:it({color:"#dededb",roughness:.92}),wallWarm:it({color:"#e6e1d6",roughness:.92}),concrete:it({map:Fa("textures/concrete.jpg",!0),roughness:.95}),ceilingBlack:it({color:"#151516",roughness:.95}),diamond:it({map:B_,roughness:.7}),yellow:it({color:"#ecc21c",roughness:.5}),black:it({color:"#161616",roughness:.45,metalness:.3}),blackMatte:it({color:"#1e1e1e",roughness:.85}),metalDark:it({color:"#2a2a2c",roughness:.35,metalness:.7}),chrome:it({color:"#b9bcc0",roughness:.2,metalness:1}),mesh:it({color:"#262628",roughness:.9}),fabric:it({color:"#2d2d30",roughness:1}),leather:it({color:"#1a1a1a",roughness:.38,metalness:.05}),wood:it({map:N_,roughness:.6}),greyOak:it({map:O_,roughness:.75}),oakEdge:it({color:"#d9cfb4",roughness:.7}),macTop:it({map:k_,roughness:.35,metalness:.6}),silver:it({color:"#c9cacc",roughness:.3,metalness:.8}),keyboardTop:it({map:F_,roughness:.5}),woodDark:it({color:"#7a5233",roughness:.6}),white:it({color:"#f3f3f1",roughness:.5}),whiteGloss:it({color:"#f5f5f3",roughness:.2}),cream:it({color:"#e8e2c8",roughness:.6}),glass:new Ft({color:"#cfdde0",transparent:!0,opacity:.16,roughness:.05,metalness:.1,depthWrite:!1,side:Nt}),glassFrost:new Ft({color:"#f2f2f0",transparent:!0,opacity:.82,roughness:.5,depthWrite:!1,side:Nt}),glassYellow:it({color:"#f1d27a",emissive:"#a8820f",emissiveIntensity:.35,roughness:.4}),lightStrip:it({color:"#ffffff",emissive:"#fff4e0",emissiveIntensity:2.2}),spotGlow:it({color:"#ffffff",emissive:"#ffe9c4",emissiveIntensity:3}),screenCode:it({map:Yh,emissive:"#ffffff",emissiveMap:Yh,emissiveIntensity:.9,roughness:.3}),screenDash:it({map:$h,emissive:"#ffffff",emissiveMap:$h,emissiveIntensity:.7,roughness:.3}),screenDark:it({map:Zh,emissive:"#ffffff",emissiveMap:Zh,emissiveIntensity:.8,roughness:.3}),screenOff:it({color:"#0b0b0c",roughness:.15,metalness:.3}),plant:it({color:"#3d6b2f",roughness:.7}),plantLight:it({color:"#7f9b3a",roughness:.7}),soil:it({color:"#3a2c20",roughness:1}),beanbag:it({color:"#3b3d40",roughness:.95}),bottleYellow:it({color:"#f2b705",roughness:.3,metalness:.4}),bottleBlue:it({color:"#1f4fa8",roughness:.3,metalness:.4}),bottleTeal:it({color:"#3ab7a6",roughness:.3}),red:it({color:"#b23a2e",roughness:.6}),pergola:it({color:"#8a4b3a",roughness:.8}),rail:it({color:"#4a4a4a",roughness:.4,metalness:.6}),logo:it({map:Fa("textures/logo.png"),transparent:!0,alphaTest:.4,roughness:.4}),logoText:it({map:z_,transparent:!0,alphaTest:.3,roughness:.6}),gallery:it({map:Fa("textures/gallery.jpg"),roughness:.6}),clock:it({map:H_,roughness:.5})};y.screens=[y.screenCode,y.screenCode,y.screenDash,y.screenDark];const Mr=new O;function Hn(n,e,t,i,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Mr.copy(e),Mr[i]=0,Mr.normalize();const c=.5*o/(o+a),h=1-Mr.angleTo(n)/l;return Math.sign(Mr[t])===1?h*c:a/(o+a)+c+c*(1-h)}class G_ extends on{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new O,l=new O,c=new O(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,p=h.length/6,g=new O,_=.5/s;for(let m=0,d=0;m<h.length;m+=3,d+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),u[d+0]=Hn(g,l,"z","y",r,i),u[d+1]=1-Hn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),u[d+0]=1-Hn(g,l,"z","y",r,i),u[d+1]=1-Hn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),u[d+0]=1-Hn(g,l,"x","z",r,e),u[d+1]=Hn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),u[d+0]=1-Hn(g,l,"x","z",r,e),u[d+1]=1-Hn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),u[d+0]=1-Hn(g,l,"x","y",r,e),u[d+1]=1-Hn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),u[d+0]=Hn(g,l,"x","y",r,e),u[d+1]=1-Hn(g,l,"y","x",r,t);break}}}const V_=new on(1,1,1);function w(n,e,t,i,s,r,o,a,{shadow:l=!0,ry:c=0,rx:h=0,rz:f=0}={}){const u=new xe(V_,e);return u.scale.set(t,i,s),u.position.set(r,o,a),u.rotation.set(h,c,f),u.castShadow=l,u.receiveShadow=!0,n.add(u),u}function Ze(n,e,t,i,s,r,o,a,{seg:l=12,shadow:c=!0,rx:h=0,rz:f=0,open:u=!1}={}){const p=new xe(new Fn(t,i,s,l,1,u),e);return p.position.set(r,o,a),p.rotation.set(h,0,f),p.castShadow=c,p.receiveShadow=!0,n.add(p),p}function Qn(n,e,t,i,s,r,o,a,l){const c=new xe(new G_(t,i,s,2,r),e);return c.position.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,n.add(c),c}function ut(n,e,t,i,s,r,o,a=0,l=0){const c=new xe(new ct(t,i),e);return c.position.set(s,r,o),c.rotation.set(l,a,0,"YXZ"),c.receiveShadow=!0,n.add(c),c}function kn(n,e=0,t=0,i=0,s=0){const r=new nt;return r.position.set(e,t,i),r.rotation.y=s,n.add(r),r}function Zs(n,e,t,i=0,{exec:s=!1}={}){const r=kn(n,e,0,t,i);r.userData.label="Chair";for(let l=0;l<5;l++){const c=l/5*Math.PI*2,h=w(r,y.black,.04,.035,.32,Math.sin(c)*.15,.07,Math.cos(c)*.15,{ry:c});h.castShadow=!1,Ze(r,y.black,.025,.025,.04,Math.sin(c)*.3,.03,Math.cos(c)*.3,{seg:6,shadow:!1})}Ze(r,y.chrome,.025,.025,.32,0,.26,0,{seg:8}),Qn(r,y.fabric,.5,.08,.48,.03,0,.47,0);const o=s?.75:.55;w(r,y.black,.04,.5,.04,0,.62,-.25);const a=w(r,y.mesh,.46,o,.05,0,.62+o/2,-.27,{rx:-.1});a.material=y.mesh,s&&w(r,y.mesh,.3,.14,.06,0,1.45,-.33,{rx:-.1});for(const l of[-1,1])w(r,y.black,.035,.22,.035,l*.26,.6,-.02),w(r,y.black,.06,.025,.24,l*.26,.72,.02);return r}function Tu(n,e,t,i=0){const s=kn(n,e,0,t,i);s.userData.label="Visitor chair";for(const r of[-1,1])w(s,y.chrome,.025,.025,.5,r*.22,.012,.05),w(s,y.chrome,.025,.45,.025,r*.22,.23,.29,{rx:.05});return w(s,y.fabric,.48,.06,.46,0,.47,.05),w(s,y.mesh,.46,.5,.04,0,.78,-.2,{rx:-.12}),s}function W_(n,e,t,i,s=0){const r=kn(n,e,.77,t,i);r.userData.label="Monitor",w(r,y.black,.26,.012,.18,0,.006,-.06),w(r,y.black,.05,.22,.025,0,.12,-.08),w(r,y.black,.54,.32,.022,0,.35,-.07),ut(r,s%3===2?y.screenDash:y.screenCode,.52,.3,0,.35,-.058);const o=-.26,a=.06;Qn(r,y.black,.114,.006,.114,.002,o,.003,a),Qn(r,y.silver,.12,.03,.12,.012,o,.021,a),ut(r,y.macTop,.09,.09,o,.0365,a,0,-Math.PI/2),w(r,y.black,.012,.004,.002,o-.03,.021,a+.0605,{shadow:!1}),w(r,y.black,.012,.004,.002,o-.012,.021,a+.0605,{shadow:!1}),w(r,y.white,.004,.004,.002,o+.04,.021,a+.0605,{shadow:!1}),w(r,y.keyboardTop,.26,.012,.1,-.01,.006,.25,{shadow:!1});const l=.24,c=.24,h=Qn(r,y.blackMatte,.058,.03,.1,.014,l,.015,c);return h.scale.y=.85,Qn(r,y.black,.056,.006,.05,.003,l,.027,c-.025),w(r,y.blackMatte,.002,.004,.045,l,.0295,c-.025,{shadow:!1}),w(r,y.chrome,.008,.006,.016,l,.0305,c-.022,{shadow:!1}),s%3===0&&Ze(r,y.bottleYellow,.032,.032,.22,.28,.11,-.04,{seg:10}),r}function Kh(n,e,t,i,{width:s=1.5,seats:r=!0,solidFn:o,seatW:a=1.1,chairOff:l=.12,sides:c=[-1,1]}={}){const h=kn(n,e,0,0);h.userData.label="Desk";const f=i-t,u=(t+i)/2;w(h,y.greyOak,s,.04,f,0,.75,u),w(h,y.oakEdge,s+.004,.012,f+.004,0,.734,u,{shadow:!1});const p=Math.max(2,Math.round(f/2)+1);for(let m=0;m<p;m++){const d=t+.12+m/(p-1)*(f-.24);for(const v of[-1,1])w(h,y.black,.05,.78,.05,v*(s/2-.22),.37,d,{rz:v*.2}),w(h,y.black,.05,.78,.05,v*(s/2-.22),.37,d,{rz:-v*.2});w(h,y.black,s-.2,.05,.05,0,.72,d)}if(o&&o(e-s/2,t,e+s/2,i),!r)return h;const g=Math.max(1,Math.floor(f/a+1e-6));let _=0;for(const m of c)for(let d=0;d<g;d++){const v=t+(d+.5)*(f/g),b=c.length===2?m*.22:-m*(s/2-.2);W_(h,b,v,m*Math.PI/2,_++);const x=e+m*(s/2+l);Zs(n,x,v,m>0?-Math.PI/2:Math.PI/2),o&&o(x-.2,v-.2,x+.2,v+.2)}return h}function bc(n,e,t,i=0,s=2){const r=kn(n,e,0,t,i);r.userData.label="Sofa";const o=s*.75+.3;Qn(r,y.leather,o,.38,.9,.06,0,.24,0),Qn(r,y.leather,o,.5,.22,.08,0,.62,-.34);for(const a of[-1,1])Qn(r,y.leather,.18,.62,.9,.06,a*(o/2-.09),.33,0);for(let a=0;a<s;a++){const l=-o/2+.15+.75*(a+.5);Qn(r,y.leather,.72,.14,.62,.06,l,.49,.08);const c=Qn(r,y.leather,.5,.4,.14,.07,l,.78,-.18);c.rotation.x=-.18}return r}function Ko(n,e,t,i,s=9,r=.8){const o=kn(n,e,t,i);o.userData.label="Plant";for(let a=0;a<s;a++){const l=r*(.6+Ke()*.6),c=new xe(new qo(.045,l,4),Ke()>.3?y.plant:y.plantLight);c.scale.z=.25,c.position.set((Ke()-.5)*.3,l/2,(Ke()-.5)*.2),c.rotation.set((Ke()-.5)*.35,Ke()*Math.PI,(Ke()-.5)*.35),c.castShadow=!0,o.add(c)}return o}function wc(n,e,t,{size:i=.45,h:s=.45,mat:r=y.white}={}){const o=kn(n,e,0,t);return o.userData.label="Plant",w(o,r,i,s,i,0,s/2,0),w(o,y.soil,i-.06,.02,i-.06,0,s,0,{shadow:!1}),Ko(o,0,s,0,11,.9),o}function Au(n,e,t,i=y.beanbag){const s=new xe(new gn(.5,20,14),i);return s.scale.set(1,.65,1.05),s.position.set(e,.3,t),s.userData.label="Bean bag",s.castShadow=!0,s.receiveShadow=!0,n.add(s),s}function X_(n,e,t,i,{yellowCubbies:s=[]}={}){const r=kn(n,e,0,0);r.userData.label="Shelving";const o=i-t,a=(t+i)/2,l=.4,c=2.4,h=.55;w(r,y.white,l,h,o,0,h/2,a);const f=Math.max(1,Math.round(o/1.1));for(let p=0;p<f;p++){const g=t+(p+.5)*(o/f);w(r,y.blackMatte,.3,.32,.3,0,h+.16,g),Ko(r,0,h+.32,g,7,.6)}for(const p of[t+.02,i-.02])for(const g of[-1,1])w(r,y.black,.025,c-h,.025,g*l/2,h+(c-h)/2,p);for(const p of[1.55,c]){for(const g of[-1,1])w(r,y.black,.025,.025,o,g*l/2,p,a,{shadow:!1});w(r,y.black,l,.012,o,0,p-.01,a,{shadow:!1})}const u=Math.max(1,Math.round(o/.65));for(let p=1;p<u;p++)for(const g of[-1,1])w(r,y.black,.02,c-h,.02,g*l/2,h+(c-h)/2,t+p/u*o,{shadow:!1});for(const p of s){if(p.i>=u)continue;const g=t+(p.i+.5)*(o/u),_=p.row===0?1.2:1.9;w(r,y.yellow,l-.05,.45,o/u-.08,0,_,g)}for(let p=0;p<u;p++)Ke()<.3&&w(r,y.blackMatte,.12,.15+Ke()*.1,.12,0,1.55+.09,t+(p+.5)*(o/u));return r}function Ru(n,e,t,i=2.4,s=0,r=2.6,o=3.6){const a=kn(n,e,r,t,s);a.userData.label="Light",w(a,y.black,i,.06,.08,0,0,0,{shadow:!1}),ut(a,y.lightStrip,i-.04,.05,0,-.031,0,0,Math.PI/2);for(const l of[-.4,.4])Ze(a,y.black,.003,.003,o-r,l*i,(o-r)/2,0,{seg:3,shadow:!1});return a}function Fo(n,e,t,i=2.2,s=3.6,r=1){const o=kn(n,e,i,t);o.userData.label="Pendant light",Ze(o,y.black,.004,.004,s-i,0,(s-i)/2,0,{seg:3,shadow:!1});const a=new xe(new qo(.18*r,.26*r,20,1,!0),y.black);a.position.y=-.1*r,a.material.side=Nt,o.add(a),Ze(o,y.black,.02,.02,.06,0,.05,0,{seg:8,shadow:!1});const l=new xe(new ni(.15*r,16),y.spotGlow);return l.rotation.x=Math.PI/2,l.position.y=-.22*r,o.add(l),o}function q_(n,e,t,i){Ze(n,y.black,.05,.05,.12,e,i-.06,t,{seg:10,shadow:!1});const s=new xe(new ni(.035,10),y.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,i-.121,t),n.add(s)}function Ec(n,e,t,i,s=0){const r=kn(n,e,t,i,s);return r.userData.label="AC unit",Qn(r,y.white,.9,.28,.2,.05,0,0,.1),w(r,y.metalDark,.8,.02,.02,0,-.1,.2,{shadow:!1}),r}function Y_(n,e,t,i=3){w(n,y.white,.85,.12,.85,e,i,t,{shadow:!1}),w(n,y.metalDark,.55,.02,.55,e,i-.065,t,{shadow:!1})}function $_(n,e,t,i,s=0,r=2.4){const o=i-t,a=kn(n,e,0,(t+i)/2,s);a.userData.label="Lockers";const l=Math.round(o/.5),c=5,h=o/l,f=(r-.1)/c;w(a,y.white,.02,r,o,-.265,r/2,0),w(a,y.white,.55,.1,o,0,.05,0);for(let u=0;u<=c;u++)w(a,y.white,.55,.02,o,0,u===c?r-.01:.1+u*f,0);for(let u=0;u<=l;u++)w(a,y.white,.55,r,.02,0,r/2,-o/2+u*h+(u===l?-.01:u===0?.01:0));a.updateMatrixWorld(!0);for(let u=0;u<l;u++)for(let p=0;p<c;p++){const g=-o/2+(u+.5)*h,_=.1+(p+.5)*f;Ke()<.35&&w(a,Ke()<.5?y.bottleYellow:y.black,.22,.05+Ke()*.12,h-.16,0,.1+p*f+.02+.03,g,{shadow:!1});const m=new nt;m.position.copy(a.localToWorld(new O(.285,_,g-h/2+.01))),m.rotation.y=a.rotation.y,w(m,y.whiteGloss,.01,f-.02,h-.02,0,0,h/2-.01,{shadow:!1}),w(m,y.metalDark,.02,.07,.07,.01,.08,h-.09,{shadow:!1,rx:Math.PI/4}),ko.push({leaf:m,closed:a.rotation.y,open:a.rotation.y+1.9,center:a.localToWorld(new O(.285,_,g))})}return a}function Z_(n,e,t,i,s=0){const r=kn(n,e,t,i,s);r.userData.label="Wall clock";const o=new xe(new ni(.2,32),y.clock);o.position.z=.03,r.add(o);const a=new xe(new lr(.2,.02,8,32),y.black);return a.position.z=.03,r.add(a),r}const Hi=[];function Be(n,e,t,i){Hi.push({minX:Math.min(n,t),maxX:Math.max(n,t),minZ:Math.min(e,i),maxZ:Math.max(e,i)})}const yr=new or;function wn(n,e=0){return n.updateMatrixWorld(!0),yr.setFromObject(n),Be(yr.min.x-e,yr.min.z-e,yr.max.x+e,yr.max.z+e),n}function jh(n,e,t){for(const i of Hi)if(n+t>i.minX&&n-t<i.maxX&&e+t>i.minZ&&e-t<i.maxZ)return i;return null}function K_(n,e,t,i){const s=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(t))/(i*.5))),r=e/s,o=t/s;for(let a=0;a<s;a++){if(r){const l=n.x+r,c=jh(l,n.z,i);c?n.x=r>0?c.minX-i-1e-4:c.maxX+i+1e-4:n.x=l}if(o){const l=n.z+o,c=jh(n.x,l,i);c?n.z=o>0?c.minZ-i-1e-4:c.maxZ+i+1e-4:n.z=l}}}const ke=3.6,qe=3,qt=10.05,bt=10.3,ft=18.7,Wi=3.5,rn=3,Bt=5.75,Pt=3,Bs=6.15,Ai=8.9,Rt=7.95,Gt=7.3,Gi=.15,Ir=[12.45,15.45],mn=.5,Br=2.9,yt=9.25,Jh=ft,Tn=3.7,At=22.6,Jl=[20,21.6],j_=25.2,Kn=6.6,dn=27.2,J_=[2.3,3.2];function us(n,e,t,i){const s=n.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*e/i,s.getY(r)*t/i);return s.needsUpdate=!0,n}function Mt(n,e,t,i,s,r,o,{down:a=!1,tile:l=2.4}={}){const c=s-t,h=r-i,f=us(new ct(c,h),c,h,l),u=new xe(f,e);return u.rotation.x=a?Math.PI/2:-Math.PI/2,u.position.set((t+s)/2,o,(i+r)/2),u.receiveShadow=!0,n.add(u),u}function Vt(n,e,t,i,s,{h:r=ke,mat:o=y.wall,t:a=.2,y0:l=0,collide:c=!0}={}){const h=Math.abs(i-e)>=Math.abs(s-t),f=h?Math.abs(i-e):a,u=h?a:Math.abs(s-t),p=w(n,o,f,r,u,(e+i)/2,l+r/2,(t+s)/2);return p.userData.label="Wall",c&&l<1.5&&Be((e+i)/2-f/2,(t+s)/2-u/2,(e+i)/2+f/2,(t+s)/2+u/2),p}const jo=[],ko=[],hn={x:10.3+.03,y:1.25,z:9.8};function Vs(n,{x0:e,z0:t,x1:i,z1:s,h:r=3,door:o=null,transom:a=2.3,frost:l=!1,panel:c=1.1,swing:h=1,name:f="door"}){const u=t===s,p=new nt;p.userData.label="Glass wall",n.add(p),n=p;const g=u?e:t,_=u?i:s,m=u?t:e,d=(x,R,T,C,P)=>u?w(n,y.black,C,P,T,x,R,m,{shadow:!0}):w(n,y.black,T,P,C,m,R,x,{shadow:!0}),v=(x,R,T,C)=>{const P=new xe(new ct(R-x,C-T),l?y.glassFrost:y.glass);P.position.set(u?(x+R)/2:m,(T+C)/2,u?m:(x+R)/2),u||(P.rotation.y=Math.PI/2),P.renderOrder=2,n.add(P)},b=o?[[g,Math.min(...o)],[Math.max(...o),_]]:[[g,_]];for(const[x,R]of b){if(R-x<.01)continue;v(x,R,.05,r);const T=Math.max(1,Math.round((R-x)/c));for(let C=0;C<=T;C++)d(x+C/T*(R-x),r/2,.05,.05,r);d((x+R)/2,.04,.06,R-x,.08),a&&a<r&&d((x+R)/2,a,.05,R-x,.05),u?Be(x,m-.06,R,m+.06):Be(m-.06,x,m+.06,R)}if(d((g+_)/2,r-.03,.06,_-g,.06),o){const[x,R]=o,T=Math.abs(R-x);v(Math.min(x,R),Math.max(x,R),a,r),d((x+R)/2,a,.06,T,.06);const C=new nt;C.position.set(u?x:m,0,u?m:x);const P=Math.sign(R-x),S=T-.04,M=new xe(new ct(S,a-.1),y.glass);M.position.set(P*S/2,a/2,0),C.add(M);for(const $ of[0,1])w(C,y.black,.04,a-.08,.04,P*$*S,a/2,0);w(C,y.black,S,.05,.04,P*S/2,.06,0),w(C,y.black,S,.04,.04,P*S/2,a-.08,0),w(C,y.chrome,.02,.35,.03,P*(S-.1),1.05,.04);const I=u?0:-Math.PI/2,B=I+(u?-1:1)*h*P*1.4;C.rotation.y=I;const V=Math.min(x,R),q=Math.max(x,R);jo.push({leaf:C,closed:I,open:B,name:f,handle:[P*(S-.1),1.2,.04],x:u?(x+R)/2:m,z:u?m:(x+R)/2,block:u?{minX:V,maxX:q,minZ:m-.06,maxZ:m+.06}:{minX:m-.06,maxX:m+.06,minZ:V,maxZ:q}})}}function Sr(n,e,t,i,s,r){const o=t===s,a=o?i-e:s-t,l=new xe(new ct(a,r),y.glass);l.position.set((e+i)/2,r/2,(t+s)/2),o||(l.rotation.y=Math.PI/2),l.renderOrder=2,n.add(l);const c=Math.max(1,Math.round(a/1.2));for(let h=0;h<=c;h++)o?w(n,y.black,.07,r,.1,e+h/c*a,r/2,t):w(n,y.black,.1,r,.07,e,r/2,t+h/c*a);for(const h of[.08,.55,Math.min(2.45,r-.3),r-.04]){const f=h<.1?.16:.07;o?w(n,y.black,a,f,.1,(e+i)/2,h,t,{shadow:h>2}):w(n,y.black,.1,f,a,e,h,(t+s)/2,{shadow:h>2})}o?Be(e,t-.08,i,t+.08):Be(e-.08,t,e+.08,s)}function Q_(n){Mt(n,y.diamond,0,Wi,Pt,Rt,qe,{down:!0}),Mt(n,y.diamond,Pt,Bt,Gt,Rt,qe,{down:!0}),Mt(n,y.diamond,Gt,Bt,bt,yt,qe,{down:!0});for(const[e,t]of[[1,4.4],[1,6.8],[2.4,6.8],[4,7],[5.6,7],[7.9,6.9],[9.4,8.6],[8.2,8.9]])q_(n,e,t,qe);w(n,y.yellow,Gt,ke-qe,.08,Gt/2,qe+(ke-qe)/2,Rt+.04,{shadow:!1}),w(n,y.yellow,Gt,.07,.14,Gt/2,qe-.035,Rt,{shadow:!1}),Mt(n,y.white,0,0,Pt,Wi,qe,{down:!0}),Mt(n,y.white,Pt,rn,Ai,Bt,qe,{down:!0});for(const[e,t]of[[1.5,1.6],[5,4.5],[8.2,4.5]])w(n,y.whiteGloss,.35,.02,.35,e,qe-.01,t,{shadow:!1});Mt(n,y.ceilingBlack,0,Rt,qt,ft,ke,{down:!0});for(const e of[12.3,15.3])w(n,y.ceilingBlack,qt,.5,.4,qt/2,ke-.25,e,{shadow:!1});Ze(n,y.ceilingBlack,.2,.2,qt,qt/2,ke-.45,9.2,{rz:Math.PI/2,shadow:!1,seg:14}),Ze(n,y.red,.04,.04,ft-Rt,4.6,ke-.3,(Rt+ft)/2,{rx:Math.PI/2,shadow:!1,seg:8}),Ze(n,y.red,.04,.04,qt,qt/2,ke-.3,17.9,{rz:Math.PI/2,shadow:!1,seg:8});for(const[e,t]of[[2,12.2],[5.5,12.2],[2,15.3],[5.5,15.3],[8.6,12.2]])Y_(n,e,t,ke-.62)}function Qh(n,e,t,i,s){const r=Math.hypot(i-e,s-t);w(n,y.blackMatte,.01,.012,r,Gt+.008,(t+s)/2,(e+i)/2,{shadow:!1,rx:Math.atan2(-(s-t),i-e)})}function ev(n){w(n,y.concrete,Gi,qe,yt-7.4,Gt-Gi/2,qe/2,(7.4+yt)/2),w(n,y.wall,Gi,ke-qe,yt-7.4,Gt-Gi/2,qe+(ke-qe)/2,(7.4+yt)/2,{shadow:!1}),Be(Gt-Gi,7.4,Gt,yt+.35);const t=yt-7.4,i=new xe(us(new ct(t,qe),t,qe,1.6),y.concrete);i.position.set(Gt+.003,qe/2,(7.4+yt)/2),i.rotation.y=Math.PI/2,i.receiveShadow=!0,i.userData.label="Logo wall",n.add(i),Qh(n,yt,3,7.4+.1,1),Qh(n,7.4+.1,1,7.4+.9,0),ut(n,y.logo,.5,.72,Gt+.03,2.35,8.25,Math.PI/2),ut(n,y.logoText,1,.35,Gt+.02,1.78,8.3,Math.PI/2),wn(bc(n,Gt+.47,8.4,Math.PI/2,2)),w(n,y.concrete,.5,qe-.004,.32,Gt-.15,(qe-.004)/2,7.4+.14),Vt(n,Gt-Gi,yt+.175,8.3,yt+.175,{h:ke,t:.35});const s=ut(n,y.glassFrost,bt-8.3,qe-.1,(8.3+bt)/2,qe/2,yt);s.renderOrder=2;for(const[a,l,c]of[[8.7,1.5,.5],[9.25,.9,-.4],[9.25,2.2,.6],[9.85,1.4,-.5]])w(n,y.concrete,.45,1,.01,a,l,yt-.02,{rz:c,shadow:!1});for(const a of[8.3,9.35,bt])w(n,y.black,.05,qe,.06,a,qe/2,yt);w(n,y.black,bt-8.3,.06,.06,(8.3+bt)/2,.03,yt),w(n,y.wall,bt-8.3,ke-qe,.15,(8.3+bt)/2,qe+(ke-qe)/2,yt,{shadow:!1}),Be(8.3,yt-.08,bt,yt+.08),Vs(n,{x0:bt,z0:Bt,x1:bt,z1:yt,h:qe,panel:.9,door:[7.6,8.65],transom:2.4,swing:-1,name:"entrance door"}),w(n,y.metalDark,.06,.05,.4,bt-.06,2.3,8.4,{shadow:!1}),w(n,y.wall,.15,ke-qe,yt-Bt,bt,qe+(ke-qe)/2,(Bt+yt)/2,{shadow:!1}),w(n,y.blackMatte,.6,.01,1,bt-.45,.005,8.12,{shadow:!1}),w(n,y.concrete,bt-Ai,ke,Bt-rn,(Ai+bt)/2,ke/2,(rn+Bt)/2),Be(Ai,rn,bt+.05,Bt);const r=new nt;r.position.set(9.85,0,Bt),n.add(r),w(r,y.cream,.56,2.3,.3,0,1.25,.15);for(const a of[.75,1.3,1.85,2.35])w(r,y.white,.58,.035,.32,0,a,.16);for(const[a,l,c]of[[-.14,1.87,.3],[.14,1.87,.26],[0,2.37,.34]])Ze(r,y.bottleYellow,.035,.05,c,a,l+c/2,.16,{seg:10});for(const[a,l,c]of[[-.12,1.32,y.gallery],[.13,1.32,y.red],[0,.77,y.gallery]])w(r,y.black,.2,.26,.03,a,l+.14,.16,{rx:-.12}),w(r,c,.16,.2,.01,a,l+.14,.178,{shadow:!1,rx:-.12});Be(9.55,Bt,10.15,Bt+.32),w(n,y.white,.13,.16,.04,9.2,1.35,Bt+.02),w(n,y.bottleBlue,.07,.05,.01,9.2,1.38,Bt+.045,{shadow:!1});const o=new nt;o.userData.label="Reception desk",o.position.set(9.3,0,6.6),n.add(o),w(o,y.cream,.7,.05,1.25,0,.8,0),w(o,y.cream,.05,.78,1.25,-.33,.39,0,{rz:.12});for(const a of[-1,1])w(o,y.cream,.65,.78,.05,0,.39,a*.6);w(o,y.black,.05,.05,1.15,-.4,.03,0),Ze(o,y.black,.035,.035,.01,.1,.83,.3,{seg:12}),wn(o),Fo(n,9.1,6.5,2.15,qe,1.3),w(n,y.white,.08,.08,.06,Gt+.05,2.85,9.1),wn(wc(n,9.95,8.95,{size:.4,h:.45}))}function Cu(n,e,t,i=1.6,{monitor:s=!1}={}){const r=new nt;r.userData.label="Cabin desk",r.position.set(e,0,t),n.add(r),w(r,y.whiteGloss,i,.05,.8,0,.77,0),w(r,y.woodDark,i-.1,.72,.05,0,.38,.36);for(let o=0;o<6;o++)w(r,y.black,i-.15,.02,.01,0,.15+o*.1,.39,{shadow:!1});w(r,y.woodDark,.05,.72,.75,-i/2+.05,.38,0),w(r,y.woodDark,.45,.72,.6,i/2-.25,.38,0),s&&(w(r,y.black,.5,.31,.03,-.25,1.12,-.2),w(r,y.black,.04,.3,.03,-.25,.94,-.23)),wn(r)}function tv(n,e,t,i,s){const r=new nt;r.userData.label="Built-in shelves",r.position.set(e+s*.2,0,(t+i)/2),n.add(r);const o=i-t;w(r,y.white,.4,2.7,o,0,1.35,0);const a=Math.max(1,Math.round(o/.8));for(let l=0;l<a;l++){const c=-o/2+(l+.5)*(o/a);for(const h of[1.2,1.65,2.1])w(r,y.whiteGloss,.02,.03,o/a-.06,s*.2,h,c,{shadow:!1});for(const h of[.25,.6,.95])w(r,y.whiteGloss,.02,.32,o/a-.06,s*.205,h,c,{shadow:!1});Ke()<.6&&w(r,y.black,.04,.18,.2,s*.12,1.32,c),Ke()<.6&&w(r,y.gallery,.12,.2,.15,s*.12,1.75,c+.2)}Be(Math.min(e,e+s*.4),t,Math.max(e,e+s*.4),i)}function ef(n,e,t,i){const s=t-e,r=new xe(us(new ct(s,qe),s,qe,1.6),y.concrete);r.position.set((e+t)/2,qe/2,i+.105),r.receiveShadow=!0,n.add(r)}function tf(n,e,t,{chairsZ:i,back:s,len:r=1.6,visitors:o=[-.4,.4],monitor:a=!1}){Cu(n,e,t,r,{monitor:a}),wn(Zs(n,e-.1,t-.75,0,{exec:!0}),-.1);for(const l of o)wn(Tu(n,e+l,i,Math.PI),-.05);Ec(n,e,2.55,s+.11,0)}function nv(n){Vt(n,Pt,rn,Ai,rn,{h:ke}),Vt(n,Pt,0,Pt,Wi,{h:ke}),Vs(n,{x0:Pt,z0:Wi,x1:Pt,z1:Bt,h:qe}),Vt(n,Pt,Wi,Pt,Bt,{h:ke-qe,y0:qe,collide:!1}),Vs(n,{x0:Bs,z0:rn,x1:Bs,z1:Bt,h:qe}),ef(n,Pt+.1,Bs-.08,rn),ef(n,Bs+.08,Ai,rn),Vs(n,{x0:Pt,z0:Bt,x1:Bs,z1:Bt,h:qe,door:[6.05,5.15],swing:-1,name:"Cabin 2 door"}),Vs(n,{x0:Bs,z0:Bt,x1:Ai,z1:Bt,h:qe,door:[6.25,7.15],swing:-1,name:"Cabin 1 door"}),Vs(n,{x0:0,z0:Wi,x1:Pt,z1:Wi,h:qe,door:[.15,1.05],swing:-1,name:"Corner cabin door"}),tf(n,7.35,4.35,{chairsZ:5.15,back:rn,len:1.6,visitors:[.35,.85]}),tv(n,Ai,rn+.1,5.65,-1),tf(n,4,4.35,{chairsZ:5.15,back:rn,len:1.5,monitor:!1}),wn(wc(n,5.35,3.45,{size:.35,h:.4})),Cu(n,1.6,1.85),wn(Zs(n,1.5,1.05,0,{exec:!0}),-.1);for(const t of[1.35,2.05])wn(Tu(n,t,2.95,Math.PI),-.05);w(n,y.concrete,.55,qe,.55,Pt-.38,qe/2,.38),Be(Pt-.65,0,Pt,.65),Ec(n,Pt-.11,2.55,1.8,-Math.PI/2),w(n,y.blackMatte,.25,.3,.25,2.7,.15,2.9),Vt(n,0,Rt,1.3,Rt,{h:ke,t:.3});const e=[[1.3,2.6],[4.3,5.6],[5.6,6.9]];for(const[t,i]of e){const s=new nt;s.position.set(0,0,Rt),s.rotation.y=Math.PI/2,n.add(s);const r=[];for(let o=0;o<3;o++)Ke()<.55&&r.push({i:o,row:Ke()<.5?0:1});X_(s,0,t,i,{yellowCubbies:r}),Be(t,Rt-.2,i,Rt+.2)}wn(Au(n,.6,7.25),-.15),wn(bc(n,Pt-.47,5,-Math.PI/2,2)),w(n,y.red,.55,.01,.9,.5,.005,5.7,{shadow:!1}),Fo(n,1.9,4.6,2.2,qe),Fo(n,5,7,2.25,qe)}const Bo=[{id:"W1",x:1.3,z:10.7,rot:0},{id:"L1",x:4.9,z:10.75,rot:0},{id:"W2",x:1.15,z:13.6,rot:0},{id:"L2",x:4.95,z:13.7,rot:0},{id:"W3",x:1.55,z:17.25,rot:0},{id:"L3",x:5.25,z:16.95,rot:0},{id:"E1",x:9.25,z:10.95,rot:0},{id:"E2",x:9.3,z:14,rot:0},{id:"E3",x:9.3,z:16.9,rot:0},{id:"LOCK",x:6.875,z:8.875,rot:0},{id:"LOCK2",x:.675,z:8.375,rot:270}],nf="rgba(238,222,180,0.96)",iv="rgba(232,186,80,0.16)";function sf(n){const e=document.createElement("canvas");e.width=256,e.height=640;const t=e.getContext("2d"),i=(r,o)=>{t.fillStyle=o,t.beginPath(),r.forEach(([a,l],c)=>(c?t.lineTo:t.moveTo).call(t,a*256,l*640)),t.closePath(),t.fill()};t.fillStyle=nf,t.fillRect(0,0,256,640);for(const[r,o]of n)o?i(r,nf):(t.save(),t.beginPath(),r.forEach(([a,l],c)=>(c?t.lineTo:t.moveTo).call(t,a*256,l*640)),t.closePath(),t.clip(),t.clearRect(0,0,256,640),t.fillStyle=iv,t.fillRect(0,0,256,640),t.restore());const s=new Cn(e);return s.colorSpace=Ut,new Ft({map:s,transparent:!0,roughness:.15,metalness:.05,depthWrite:!1,side:Nt})}const Pu=[sf([[[[0,.37],[1,.37],[1,1],[0,1]],!1],[[[.6,.15],[.77,.15],[.77,.22],[.6,.22]],!1],[[[1,.37],[.62,.6],[1,.85]],!0],[[[.42,.37],[.62,.37],[.35,.55],[.25,.5]],!0],[[[0,.55],[1,.9],[1,1],[0,1]],!0]]),sf([[[[0,.3],[.75,.6],[.06,1],[0,1]],!1],[[[0,.42],[.43,.62],[0,.82]],!0],[[[.75,.6],[1,.6],[1,1],[.06,1],[.3,.85]],!0]])];function sv(n,e,t){const i=new nt;i.userData.label="Door",n.add(i);const s=9.95,r=bt,o=10.12,a=mn*2,l=Br,c=2.3;for(const u of[-1,1])w(i,y.concrete,r-s,l,.03,(s+r)/2,l/2,e+u*(mn+.015),{shadow:!1});w(i,y.concrete,r-s,.03,a,(s+r)/2,l+.015,e,{shadow:!1});for(const u of[-1,1])w(i,y.black,.07,l,.05,o,l/2,e+u*(mn-.025));for(const u of[.04,c,l-.03])w(i,y.black,.07,u===c?.06:.08,a,o,u,e);const h=new xe(new ct(a-.1,c-.1),t);h.position.set(o,(c+.08)/2,e),h.rotation.y=Math.PI/2,h.renderOrder=2,i.add(h);const f=new xe(new ct(a-.1,l-c-.1),Pu[0].clone());f.material.map=null,f.material.color.set("#f4e7c4"),f.material.opacity=.75,f.position.set(o,(c+l)/2,e),f.rotation.y=Math.PI/2,f.renderOrder=2,i.add(f),w(i,y.chrome,.12,.35,.025,o,1.05,e+mn-.12,{shadow:!1}),Be(s,e-mn,r,e+mn)}function rv(n,e,t,i,s,r=3,o=4){const a=new nt;a.position.set(e,t,i),a.rotation.y=s,a.userData.label="Photo gallery",n.add(a);const l=.3,c=.22,h=.08;for(let f=0;f<o;f++)for(let u=0;u<r;u++){if(f===o-1&&u===r-1)continue;const p=(u-(r-1)/2)*(l+h),g=((o-1)/2-f)*(c+h);w(a,y.black,l,c,.02,p,g,.01,{shadow:!1}),ut(a,y.gallery,l-.04,c-.04,p,g,.021)}}function ov(n,e,t,i,s){sv(n,t,Pu[s]);const r=new nt;r.position.set(e,0,t),r.rotation.y=i,r.userData.label="Wall",n.add(r);const o=2*mn+.16,a=Br;for(const l of[-1,1])w(r,y.white,.14,ke,.08,l*(mn+.15),ke/2,.12);w(r,y.blackMatte,o,ke-a-.12,.03,0,(a+.12+ke)/2,.11,{shadow:!1}),w(r,y.white,o,.12,.08,0,a+.06,.12)}const av={W:{len:1.4,width:1.2,seatW:.7,name:"Window table"},L:{len:2.8,width:1.2,seatW:.7,name:"Long table"},E:{len:1.3,width:.8,seatW:1.2,name:"East-wall desk"}};function lv(n,e,t,{len:i,width:s,seatW:r},o=0,a="Table"){const l={width:s,seatW:r,chairOff:.12};if(o%180){const h=new nt;h.userData.label=a,n.add(h),Kh(h,e,t-i/2,t+i/2,{...l,solidFn:(f,u,p,g)=>Be(f,u,p,g)});return}const c=new nt;c.position.set(0,0,t),c.rotation.y=Math.PI/2,c.userData.label=a,n.add(c),Kh(c,0,e-i/2,e+i/2,{...l,solidFn:(h,f,u,p)=>Be(f,t-u,p,t-h)})}function cv(n){const[e,t,i,s]=[.45,2.95,.5,2.75];Vt(n,0,ft,e,ft,{h:ke}),Vt(n,e,ft,t,ft,{h:i}),Vt(n,e,ft,t,ft,{h:ke-s,y0:s,collide:!1}),Vt(n,t,ft,qt,ft,{h:ke});{const l=new nt;l.userData.label="Meeting room window",n.add(l);const c=new xe(new ct(t-e,s-i),y.glass);c.position.set((e+t)/2,(i+s)/2,ft),c.renderOrder=2,l.add(c);const h=[e,e+.85,e+1.7,t],f=[i,i+.65,i+1.6,s];for(const u of h)w(l,y.black,.06,s-i+.06,.22,u,(i+s)/2,ft,{shadow:!1});for(const u of f)w(l,y.black,t-e,.06,.22,(e+t)/2,u,ft,{shadow:!1})}{const l=Ir.flatMap(h=>[h-mn,h+mn]),c=[yt,...l,ft];for(let h=0;h<c.length;h+=2)Vt(n,qt,c[h],qt,c[h+1],{h:ke});for(const h of Ir)Vt(n,qt,h-mn,qt,h+mn,{h:ke-Br,y0:Br,collide:!1})}w(n,y.ceilingBlack,qt,.45,.05,qt/2,ke-.225,ft-.13,{shadow:!1}),w(n,y.ceilingBlack,.05,.45,ft-yt,qt-.13,ke-.225,(yt+ft)/2,{shadow:!1}),w(n,y.white,.6,ke,.6,7.35,ke/2,15.7).userData.label="Pillar",Be(7.05,15.4,7.65,16),Z_(n,7.35,2.35,15.39,Math.PI),w(n,y.white,1.25,ke,.4,.62,ke/2,15.7).userData.label="Window column",Be(0,15.5,1.25,15.9);for(const l of Bo){const c=av[l.id[0]];!c||l.id.startsWith("LOCK")||(lv(n,l.x,l.z,c,l.rot||0,`${c.name} ${l.id}`),l.id[0]==="E"?Fo(n,l.x,l.z,2.2):Ru(n,l.x,l.z,Math.min(2.4,c.len-.1),l.rot%180?Math.PI/2:0))}const r=new xe(new ct(qt-3.3,ft-17.6),y.floorBeige);r.rotation.x=-Math.PI/2,r.position.set((3.3+qt)/2,.004,(17.6+ft)/2),r.receiveShadow=!0,n.add(r);const o=Ze(n,y.blackMatte,.16,.16,.6,4.2,.3,ft-.3,{seg:16});wn(o),w(n,y.glassYellow,.18,.38,.02,4.2,.34,ft-.47,{shadow:!1}),Ir.forEach((l,c)=>ov(n,qt-.1,l,-Math.PI/2,c)),rv(n,qt-.115,1.95,14,-Math.PI/2);const a={0:Math.PI,90:Math.PI/2,180:0,270:-Math.PI/2};for(const l of Bo.filter(c=>c.id.startsWith("LOCK"))){const c=((l.rot||0)%360+360)%360;$_(n,l.x,l.z-.625,l.z+.625,a[c]);const[h,f]=c%180?[.625,.275]:[.275,.625];Be(l.x-h,l.z-f,l.x+h,l.z+f)}for(const[l,c]of[[1.6,8.6]])wn(wc(n,l,c,{size:.4,h:.5,mat:y.blackMatte}))}function Lu(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Kt;let c=0;for(let h=0;h<n.length;++h){const f=n[h];let u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(f.attributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(t){let h=0;const f=[];for(let u=0;u<n.length;++u){const p=n[u].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(f)}for(const h in r){const f=rf(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(const h in o){const f=o[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){const p=[];for(let _=0;_<o[h].length;++_)p.push(o[h][_][u]);const g=rf(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function rf(n){let e,t,i,s=-1,r=0;for(let c=0;c<n.length;++c){const h=n[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Wn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const h=n[c];if(h.isInterleavedBufferAttribute){const f=l/t;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<t;g++){const _=h.getComponent(u,g);a.setComponent(u+f,g,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}const jn=-40,Ba=9,za=12;let Ha=5660;const un=()=>(Ha=Ha*16807%2147483647,(Ha-1)/2147483646),Xt=(n,e)=>n+un()*(e-n),ri=(n,e={})=>new Ft({color:n,roughness:1,...e});function hv(n){const e={cool:["#a4a8ac","#a3a7aa","#a2a9af","#9ba9b8","#8ea2bd","#7d95b5","#7890b0"],centre:["#ccc8bd","#cec8bb","#cbc6bb","#c4c8c7","#b3c0ca","#a2b4c4","#9bb0c2"],warm:["#e6d5b9","#ead9bd","#efe1c4","#f4efde","#eaebe3","#d0dbe0","#bccbd6"]},t=[0,3,10,18,26,60,90],i=re=>new ht(re),s=(re,K)=>{const le=e[re];if(K<=0)return i(le[0]);let ie=0;for(;ie<t.length-2&&K>t[ie+1];)ie++;const Ae=Math.min(1,(K-t[ie])/(t[ie+1]-t[ie]));return i(le[ie]).lerp(i(le[ie+1]),Ae)},r=document.createElement("canvas");r.width=256,r.height=128;const o=r.getContext("2d");for(let re=0;re<r.width;re++){let K=re/r.width*360;K>180&&(K-=360);const le=-K,ie=Math.max(-1,Math.min(1,le/38))*Math.max(0,1-Math.max(0,Math.abs(K)-90)/60);for(let Ae=0;Ae<r.height;Ae++){const Me=90-Ae/(r.height-1)*180,L=s("centre",Me).lerp(s(ie<0?"cool":"warm",Me),Math.abs(ie));o.fillStyle="#"+L.getHexString(),o.fillRect(re,Ae,1,1)}}const a=new Cn(r);a.colorSpace=Ut;const l=new xe(new gn(1300,32,24),new hi({map:a,side:xn,fog:!1,depthWrite:!1,toneMapped:!1}));l.renderOrder=-1,n.add(l);const c=new xe(new ct(2600,2600),ri("#34462a"));c.rotation.x=-Math.PI/2,c.position.y=jn,n.add(c);const h=new Map,f=(re,K,le)=>{h.has(re)||h.set(re,[]);const ie=K.clone();ie.applyMatrix4(le),h.get(re).push(ie)},u=new Tt,p=new rr,g=new vn,_=new O,m=new O,d=(re,K,le,ie,Ae,Me,L,E,G=0)=>{p.setFromEuler(g.set(0,G,0)),u.compose(m.set(le,ie,Ae),p,_.set(Me,L,E)),f(re,K,u)},v=2016,b=1512,R=3029/2,[T,C,P,S]=[1480,3550,1270,1760],M={x:-2.8,y:1.6,z:12},I=230,B=re=>M.z-(re-v)/R*I,V=re=>M.y+(b-re)/R*I,q=(re,K)=>{const le=M.x-re;if(le<60)return 1/0;const ie=v-(K-M.z)/le*R;return ie<T-60||ie>C+60?1/0:le>I?-1/0:M.y+(b-(S-25))/R*le},$=new Zo(1,1).toNonIndexed(),W=new Fn(.16,.24,1,5,1,!0).toNonIndexed();W.translate(0,.5,0);const ne=fv(),F=["#34452a","#3d4f30","#475a37","#516440","#38492d"].map(re=>ri(re,{flatShading:!0})),ce=["#43552f","#4d6136","#3b4c2a","#566b3c"].map(re=>ri(re,{side:Nt,roughness:.85})),fe=ri("#4f4a40"),we=re=>re[Math.floor(un()*re.length)],ze=(re,K,le=Xt(9,17),ie=jn)=>{const Ae=q(re,K)-ie-2;if(Ae<3){Ae>1&&je(re,K,Ae/2.2,ie);return}le=Math.min(le,Ae);const Me=Xt(-.08,.08);d(fe,W,re,ie,K,1,le,1,0);const L=Xt(.8,1.15);p.setFromEuler(g.set(Me,un()*Math.PI*2,Me)),u.compose(m.set(re,ie+le,K),p,_.set(L,L,L)),f(we(ce),ne,u)};function je(re,K,le,ie=jn){le=Math.min(le,(q(re,K)-ie-4)/1.8),!(le<.8)&&d(we(F),$,re,ie+le*.9+Xt(1,4),K,le*Xt(.9,1.2),le*Xt(.6,.85),le*Xt(.9,1.2),un()*6)}const ee=(re,K)=>re<-7||K<-8&&re<40||K>30&&re<20;for(let re=0;re<2600;re++){const K=Xt(-190,40),le=Xt(-170,210);ee(K,le)&&(un()<.58?ze(K,le):je(K,le,Xt(3.5,7)))}for(let re=0;re<5200;re++){const K=Math.PI*.4+un()*Math.PI*1.25,le=Xt(170,560),ie=Ba+Math.cos(K)*le,Ae=za+Math.sin(K)*le;un()<.55?ze(ie,Ae,Xt(10,18)):je(ie,Ae,Xt(6,11))}for(let re=0;re<1800;re++){const K=Math.PI*.4+un()*Math.PI*1.25,le=Xt(540,1150);je(Ba+Math.cos(K)*le,za+Math.sin(K)*le,Xt(14,26))}de(-700,300,260,62,190),de(-980,-520,380,75,300),de(-1050,700,300,60,260),de(-1100,60,500,35,240);function de(re,K,le,ie,Ae){const Me=new xe(new gn(1,28,14,0,Math.PI*2,0,Math.PI/2),ri("#3f5230",{flatShading:!0}));Me.scale.set(le,ie,Ae),Me.position.set(re,jn-2,K),n.add(Me);const L=Math.round(le*Ae/90);for(let E=0;E<L;E++){const G=un()*Math.PI*2,se=Math.sqrt(un())*.97,ue=Math.cos(G)*se,oe=Math.sin(G)*se,Le=jn-2+ie*Math.sqrt(Math.max(0,1-ue*ue-oe*oe)),Ee=re+ue*le,Re=K+oe*Ae;un()<.35?ze(Ee,Re,Xt(10,16),Le-2):je(Ee,Re,Xt(7,13),Le-3)}}const pe=ri("#c9c6be",{roughness:.9}),he=ri("#b5b0a6",{roughness:.9}),Oe=ri("#6e4234",{roughness:.9}),He=ri("#8f9496",{roughness:.6,metalness:.3}),Ie=ri("#56606a",{roughness:.4}),et=new on(1,1,1).toNonIndexed(),ae=new Fn(.5,.5,1,3,1).toNonIndexed();ae.rotateZ(Math.PI/2),ae.rotateX(-Math.PI/2);for(let re=0;re<70;re++){const K=Math.PI*.55+un()*Math.PI*.95,le=30+Math.pow(un(),1.4)*420,ie=Ba+Math.cos(K)*le,Ae=za+Math.sin(K)*le;if(!ee(ie,Ae))continue;const Me=Xt(8,14),L=Xt(8,13),E=Xt(6,11),G=un()*Math.PI;if(jn+E+3.5>q(ie,Ae))continue;d(un()<.7?pe:he,et,ie,jn+E/2,Ae,Me,E,L,G),d(Ie,et,ie,jn+E*.62,Ae,Me+.1,1,L*.6,G);const se=un();se<.45?d(pe,et,ie,jn+E+.4,Ae,Me+.3,.8,L+.3,G):se<.8?d(Oe,ae,ie,jn+E+1.6,Ae,Me+1,3.2,L+1,G):d(He,et,ie,jn+E+.6,Ae,Me+1,.25,L+1,G)}const me=new bu().load("textures/skyline.png");me.colorSpace=Ut,me.anisotropy=4;const D=new xe(new ct(B(T)-B(C),V(P)-V(S)),new hi({map:me,transparent:!0,alphaTest:.03,depthWrite:!1,fog:!1,toneMapped:!1}));D.rotation.y=Math.PI/2,D.position.set(M.x-I,(V(P)+V(S))/2,(B(T)+B(C))/2),D.renderOrder=1,n.add(D);for(const[re,K]of h){const le=new xe(Lu(K,!1),re);le.castShadow=!1,le.receiveShadow=!1,n.add(le)}}function fv(){const n=[];for(let s=0;s<9;s++){const r=s/9*Math.PI*2+s%2*.2,o=s%3===0?.55:.25,a=[];for(let f=0;f<=3;f++){const u=f/3,p=u*4.6,g=o*p*.6-u*u*2.4,_=.55*Math.sin(Math.PI*Math.min(1,u*1.1+.08));a.push({r:p,y:g,w:_})}const l=[Math.cos(r),Math.sin(r)],c=[-Math.sin(r),Math.cos(r)],h=(f,u)=>[l[0]*f.r+c[0]*f.w*u,f.y,l[1]*f.r+c[1]*f.w*u];for(let f=0;f<3;f++){const u=h(a[f],-1),p=h(a[f],1),g=h(a[f+1],-1),_=h(a[f+1],1);n.push(...u,...g,...p,...p,...g,..._)}}const i=new Kt;return i.setAttribute("position",new xt(n,3)),i.computeVertexNormals(),i.setAttribute("uv",new xt(new Float32Array(n.length/3*2),2)),i}const en=j_,gt=-3.6,oi=.25,as=3.85,Iu=.12,So=-3.95,Bi=n=>as+n*Iu,Dt=n=>new Ft(n),Fe={curb:Dt({color:"#6f6c66",roughness:.95}),steel:Dt({color:"#8e8d88",roughness:.55,metalness:.55}),rust:Dt({color:"#9b8a78",roughness:.7,metalness:.35}),galv:Dt({color:"#a9aca9",roughness:.45,metalness:.6}),steelRail:Dt({color:"#c4c7c9",roughness:.22,metalness:.95}),poly:new Ft({color:"#d2a8c8",transparent:!0,opacity:.42,roughness:.35,depthWrite:!1,side:Nt}),glass:new Ft({color:"#d6e6e2",transparent:!0,opacity:.2,roughness:.05,metalness:.1,depthWrite:!1,side:Nt}),clad:Dt({color:"#cfc6b2",roughness:.6,metalness:.25}),plaster:Dt({color:"#e9e6df",roughness:.95}),coir:Dt({color:"#6e4b30",roughness:1}),potWhite:Dt({color:"#efede8",roughness:.55}),leafDark:Dt({color:"#355e2a",roughness:.75}),leafMid:Dt({color:"#5e8a3a",roughness:.75}),leafPale:Dt({color:"#a9bf83",roughness:.75}),leafRed:Dt({color:"#a6473a",roughness:.75}),palm:Dt({color:"#4f7a2f",roughness:.8,side:Nt}),macrame:Dt({color:"#6d5a4b",roughness:1,side:Nt}),cushion:Dt({color:"#d9cdb8",roughness:1}),tableTop:Dt({color:"#8a6142",roughness:.55}),rattan:Dt({color:"#7b6c60",roughness:.9}),water:new Ft({color:"#a9cde8",transparent:!0,opacity:.55,roughness:.1,depthWrite:!1}),capBlue:Dt({color:"#2464b0",roughness:.5}),counterTop:Dt({color:"#222222",roughness:.35,metalness:.2}),acGrey:Dt({color:"#d9d9d4",roughness:.6})},uv=(()=>{const n=document.createElement("canvas");n.width=128,n.height=256;const e=n.getContext("2d"),t=["#a4553f","#d9b26a","#5b6f8a","#c98a5a","#7a8a5a","#e6d6b8","#8a4a5a"];for(let s=0;s<256;s+=3)e.fillStyle=t[Math.floor(Ke()*t.length)],e.fillRect(0,s,128,3);const i=new Cn(n);return i.colorSpace=Ut,i})();Fe.rug=Dt({map:uv,roughness:1});const dv=(n=16)=>{const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.strokeStyle="#fff",t.lineWidth=3;for(let s=-128;s<=256;s+=n)t.beginPath(),t.moveTo(s,0),t.lineTo(s+128,128),t.stroke(),t.beginPath(),t.moveTo(s,128),t.lineTo(s+128,0),t.stroke();const i=new Cn(e);return i.wrapS=i.wrapT=Zi,i},Du=dv(22);Du.repeat.set(5,3);Fe.macrameNet=Dt({color:"#6d5a4b",alphaMap:Du,alphaTest:.5,roughness:1,side:Nt});const pv=(()=>{const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,3),e.fillRect(0,0,3,64);const t=new Cn(n);return t.wrapS=t.wrapT=Zi,t})();function ds(n,e,t,i,s){const r=new nt;return r.position.set(e,t,i),s&&(r.userData.label=s),n.add(r),r}function bo(n,e,t,i,s,r,o,a=8){return Ze(n,e,t,t,o-r,i,s,(r+o)/2,{rx:Math.PI/2,seg:a,shadow:!1})}function wo(n,e,t,i,s,r,o=7){for(let a=0;a<o;a++){const l=new xe(new Zo(1,0),r[a%r.length]),c=s*(.45+Ke()*.4);l.scale.set(c,c*(.7+Ke()*.5),c);const h=Ke()*Math.PI*2,f=Ke()*s*.6;l.position.set(e+Math.cos(h)*f,t+c*.8+Ke()*s*.6,i+Math.sin(h)*f),l.rotation.set(Ke()*3,Ke()*3,Ke()*3),l.castShadow=!0,l.receiveShadow=!0,n.add(l)}}function Uu(n,e,t,i,{n:s=12,len:r=.6,mat:o=Fe.leafMid,droop:a=.5,w:l=.12}={}){for(let c=0;c<s;c++){const h=new nt;h.position.set(e,t,i),h.rotation.y=c/s*Math.PI*2+Ke()*.4,n.add(h);const f=a*(.5+Ke()),u=new xe(new ct(r,l),o);u.position.set(Math.cos(f)*r/2,Math.sin(-f+.9)*r/2-.05,0),u.rotation.set(Math.PI/2-.3,0,-f+.9-Math.PI/4),u.castShadow=!0,h.add(u)}}function zs(n,e,t,i="snake",{r:s=.18,h:r=.32}={}){const o=ds(n,e,0,t,"Plant");return Ze(o,Fe.potWhite,s,s*.78,r,0,r/2,0,{seg:16}),Ze(o,y.soil,s-.02,s-.02,.01,0,r-.01,0,{seg:12,shadow:!1}),i==="snake"?Ko(o,0,r,0,10,.75):i==="bush"?wo(o,0,r,0,s*1.6,[Fe.leafDark,Fe.leafMid]):i==="variegated"?wo(o,0,r,0,s*1.7,[Fe.leafPale,Fe.leafMid,Fe.leafPale],9):i==="croton"?wo(o,0,r,0,s*1.4,[Fe.leafRed,Fe.leafMid,Fe.leafRed]):i==="fern"?Uu(o,0,r+.08,0,{n:16,len:.55,mat:Fe.leafPale,droop:.9,w:.16}):i==="tree"&&(Ze(o,y.woodDark,.015,.02,.9,0,r+.45,0,{seg:5}),wo(o,0,r+.55,0,.35,[Fe.leafMid,Fe.leafPale,Fe.leafDark],8)),Be(e-s,t-s,e+s,t+s),o}function of(n,e,t,i,s,r=Fe.coir){Ze(n,y.blackMatte,.004,.004,i-s,e,(i+s)/2,t,{seg:3,shadow:!1}),Ze(n,r,.07,.11,.3,e,s-.15,t,{seg:10})}function mv(n,e,t,i=0){const s=ds(n,e,0,t,"Bar stool");s.rotation.y=i;for(const[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])w(s,y.black,.025,.78,.025,r*.15,.39,o*.15,{rx:o*.05,rz:-r*.05});w(s,y.black,.34,.04,.34,0,.78,0);for(const r of[-1,1])w(s,y.black,.025,.36,.025,.15,.96,r*.13);w(s,y.black,.025,.06,.3,.15,1.12,0),w(s,y.black,.3,.02,.02,0,.3,.15,{shadow:!1}),w(s,y.black,.3,.02,.02,0,.3,-.15,{shadow:!1})}function gv(n,e,t,i=.62){const s=ds(n,e,0,t,"Stool");Ze(s,Fe.tableTop,.17,.17,.04,0,i,0,{seg:16});for(let o=0;o<3;o++){const a=o/3*Math.PI*2;w(s,y.black,.02,i,.02,Math.cos(a)*.14,i/2,Math.sin(a)*.14,{rz:Math.cos(a)*.1,rx:-Math.sin(a)*.1})}const r=new xe(new lr(.16,.008,4,20),y.black);r.rotation.x=Math.PI/2,r.position.y=.22,s.add(r),Be(e-.18,t-.18,e+.18,t+.18)}function xv(n){const e=ds(n,0,0,0,"Terrace"),t=en;Mt(e,y.floorTerrace,gt,0,0,en,0),w(e,Fe.curb,.3,oi,t,gt+.15,oi/2,t/2),w(e,Fe.curb,.32,.03,t,gt+.15,oi+.015,t/2,{shadow:!1}),Be(gt-.1,0,gt+.32,en),Be(gt,-.15,0,0),Be(gt,en,0,en+.15);const i=gt+.1,s=oi+1;for(let m=0;m<t-.01;m+=1.2){const d=Math.min(1.2,t-m)-.02,v=new xe(new ct(d,s-oi-.06),Fe.glass);v.position.set(i,(oi+s)/2,m+.01+d/2),v.rotation.y=Math.PI/2,v.renderOrder=2,e.add(v),w(e,y.chrome,.03,.06,.05,i,s-.04,m+.06,{shadow:!1}),w(e,y.chrome,.03,.06,.05,i,oi+.06,m+.06,{shadow:!1})}bo(e,Fe.steelRail,.028,i,s+.03,0,t,12),bo(e,Fe.galv,.035,gt+.42,.55,.4,t-.4,10);for(let m=1.5;m<t;m+=3.1)w(e,Fe.galv,.03,.3,.03,gt+.42,.4,m,{shadow:!1});for(const m of[.12,t-.12])Ze(e,Fe.steelRail,.025,.025,s,gt+.35,s/2,m,{seg:10}),w(e,Fe.steelRail,.25,.04,.04,gt+.23,s+.03,m,{shadow:!1});const r=m=>m<Rt?qe:2.8;for(const[m,d]of[[0,Rt],[Rt,en]]){const v=r(m),b=as+.2-v;w(e,Fe.clad,.03,b,d-m,-.09,v+b/2,(m+d)/2,{shadow:!1});for(let x=m+.08;x<d;x+=.16)w(e,Fe.clad,.025,b,.035,-.115,v+b/2,x,{shadow:!1});w(e,Fe.steel,.12,.08,d-m,-.12,v+.04,(m+d)/2,{shadow:!1})}const o=-So,a=Math.atan2(o*Iu,o),l=o/Math.cos(a),c=So/2,h=w(e,Fe.poly,l,.012,t+.4,c,Bi(c)+.06,t/2,{shadow:!1,rz:a});h.renderOrder=3;for(let m=0;m<=t+.01;m+=t/16)w(e,Math.round(m/(t/16))%3===1?Fe.rust:Fe.steel,l,.1,.06,c,Bi(c),m,{rz:a});for(const m of[-.35,-1.25,-2.15,-3.05,-3.85])bo(e,Fe.steel,.025,m,Bi(m)+.03,-.2,t+.2);w(e,Fe.steel,.16,.14,t+.4,So,Bi(So)-.02,t/2),w(e,Fe.steel,.12,.12,t,-.18,as-.06,t/2);const f=-1.8,u=Bi(f)-.28;bo(e,Fe.galv,.02,f,u,0,t);for(let m=.5;m<t;m+=1.55){Ze(e,Fe.galv,.006,.006,.26,f,u+.13,m,{seg:4,shadow:!1}),Ze(e,y.white,.055,.045,.1,f,u-.07,m,{seg:12,shadow:!1});const d=new xe(new ni(.035,12),y.spotGlow);d.rotation.x=Math.PI/2,d.position.set(f,u-.121,m),e.add(d)}const p=gt+.36;for(let m=0;m<=8;m++){const d=.25+m*(t-.5)/8,v=Bi(p);if(Ze(e,Fe.galv,.045,.045,v-oi,p,(v+oi)/2,d,{seg:10}),m>=3&&m<=5){Ze(e,Fe.coir,.085,.085,2.5,p,oi+1.3,d,{seg:12});for(const b of[.9,1.6,2.3])Ze(e,Fe.plaster,.088,.088,.06,p,b,d,{seg:12,shadow:!1});of(e,p+.16,d+.05,v-.1,2.75)}Be(p-.09,d-.09,p+.09,d+.09)}const g=-.32,_=[[1.4,"tree"],[1.95,"fern"],[2.6,"croton"],[3.2,"variegated"],[4.35,"snake"],[7,"snake"],[7.5,"variegated"],[8,"bush"],[8.5,"snake"],[10.6,"bush"],[11.1,"snake"],[11.6,"variegated"],[12.1,"snake"],[13.6,"tree"],[14.6,"bush"],[16.3,"snake"],[17.2,"variegated"],[18.2,"snake"],[19.3,"croton"],[22,"fern"]];for(const[m,d]of _)zs(e,g-(d==="fern"?.1:0),m,d,d==="tree"?{r:.2,h:.34}:{});zs(e,gt+.75,12,"variegated",{r:.22,h:.4}),zs(e,gt+.75,8.3,"tree",{r:.18,h:.34});for(const m of[6.2,9.9,13])of(e,-.55,m,as-.1,2.55,Fe.potWhite);w(e,Fe.rug,.55,.012,.85,-.45,.007,5.7,{shadow:!1}),w(e,Fe.rug,.5,.012,.8,-.4,.007,20.8,{shadow:!1,ry:.08});{const b=ds(e,-.95,0,9.3,"Hanging chair");Ze(b,Fe.coir,.012,.012,Bi(-.95)-1.75,0,(Bi(-.95)+1.75)/2,0,{seg:4});const x=new O(0,1.75,0);for(const P of[-.6,.6,Math.PI-.5,Math.PI+.5]){const M=new O(Math.cos(P)*.46,1.05,Math.sin(P)*.46).clone().sub(x),I=new xe(new Fn(.01,.01,M.length(),4),Fe.coir);I.position.copy(x).addScaledVector(M,.5),I.quaternion.setFromUnitVectors(new O(0,1,0),M.normalize()),b.add(I)}const R=new xe(new lr(.5,.025,6,32),Fe.macrame);R.position.set(0,.55+.5,0),R.rotation.x=Math.PI/2,b.add(R);const T=new xe(new gn(.5,20,12,0,Math.PI*2,Math.PI*.5,Math.PI*.42),Fe.macrameNet);T.position.y=.55+.42,T.castShadow=!0,b.add(T);const C=new xe(new gn(.5,20,10,-Math.PI/2,Math.PI,.15*Math.PI,.38*Math.PI),Fe.macrameNet);C.position.y=.55+.42,C.castShadow=!0,b.add(C),Ze(b,Fe.cushion,.36,.36,.1,0,.55+.07,0,{seg:20});for(let P=0;P<14;P++){const S=P/14*Math.PI*2;Ze(b,Fe.macrame,.012,.004,.1,Math.cos(S)*.3,.55-.02,Math.sin(S)*.3,{seg:4,shadow:!1})}Be(-.95-.45,9.3-.45,-.95+.45,9.3+.45)}{const v=gt+.58;w(e,Fe.tableTop,.38,.05,13.4-10.3,v,1.05,(10.3+13.4)/2);for(const b of[10.3+.15,(10.3+13.4)/2,13.4-.15])w(e,y.black,.04,1.03,.04,v-.05,.52,b),w(e,y.black,.3,.03,.03,v,.98,b,{shadow:!1});Be(v-.2,10.3,v+.2,13.4);for(const b of[10.8,11.6,12.4,13.1])mv(e,v+.5,b,0);for(const b of[10.8,11.6,12.4,13.1])Be(v+.33,b-.18,v+.67,b+.18)}{const v=as+.1,b=gt+.45,x=.9,R=Math.hypot(-.3-b,v-x),T=Math.atan2(v-x,-.3-b);w(e,Fe.curb,R,.42,.3,(-.3+b)/2,(v+x)/2,.06+.1,{rz:T});const C=new Yo([new be(b,0),new be(-.3,0),new be(-.3,v),new be(b,x)]),P=new xe(new vc(C),Dt({color:"#cfccc4",roughness:.95,side:Nt}));P.position.z=.06-.04,P.receiveShadow=!0,e.add(P),w(e,Fe.curb,-.3-b,.3,.3,(-.3+b)/2,.15,.06+.1),w(e,Fe.plaster,.35,as,.2,-.17,as/2,.06+.05);const S=-2.75,M=-.4,I=2.55,B=pv.clone();B.needsUpdate=!0,B.repeat.set((M-S)/.1,I/.1);const V=Dt({color:"#2a2a2a",alphaMap:B,alphaTest:.5,side:Nt,roughness:.8}),q=new xe(new ct(M-S,I),V);q.position.set((S+M)/2,I/2,.06+.02),e.add(q);for(const W of[S,(S+M)/2,M])w(e,y.black,.03,I,.03,W,I/2,.06+.03,{shadow:!1});w(e,y.black,M-S,.03,.03,(S+M)/2,I,.06+.03,{shadow:!1});const $=W=>x+(W-b)*(v-x)/(-.3-b);for(let W=0;W<5;W++){const ne=.45+W*.42;for(let F=S+.2;F<M-.1;F+=.36)ne>$(F)-.35||(w(e,y.blackMatte,.2,.13,.1,F,ne,.06+.08,{shadow:!1}),Ko(e,F,ne+.06,.06+.1,6,.32).rotation.x=.25)}zs(e,-.75,.45,"tree",{r:.17,h:.3}),zs(e,-1.15,.4,"bush")}{const m=en-.12;w(e,Fe.plaster,-gt,1.15,.24,gt/2,.575,m),w(e,Fe.plaster,-gt,.5,.6,gt/2,1.4,en+.3);for(let T=gt+.4;T<-.2;T+=.7)Ze(e,y.woodDark,.03,.04,.9,T,2.05,en+.3,{seg:6}),Uu(e,T,2.45+Ke()*.3,en+.3,{n:9,len:.9,mat:Fe.palm,droop:.45,w:.22});w(e,y.whiteGloss,.4,.14,.45,-.42,.86,23.3),Ze(e,y.chrome,.012,.012,.14,-.27,1,23.3,{seg:6,shadow:!1}),Be(-.64,23.05,-.2,23.55);{const T=ds(e,-.42,2.25,24.2,"AC outdoor unit");w(T,Fe.acGrey,.32,.55,.78,0,0,0);const C=new xe(new ni(.2,18),y.metalDark);C.rotation.y=-Math.PI/2,C.position.set(-.161,0,-.1),T.add(C),w(T,y.metalDark,.3,.03,.3,.05,-.29,0,{shadow:!1})}const d=-2.45,v=-.6,b=m-.42;w(e,y.white,v-d,.86,.58,(d+v)/2,.43,b),w(e,Fe.counterTop,v-d+.04,.04,.62,(d+v)/2,.88,b);for(let T=d+.45;T<v;T+=.45)w(e,y.metalDark,.008,.78,.005,T,.43,b-.292,{shadow:!1});w(e,y.blackMatte,.4,.5,.02,-1.75,.45,b-.29,{shadow:!1});for(let T=0;T<6;T++)w(e,[y.bottleTeal,y.red,y.cream][T%3],.04,.2+Ke()*.06,.15,-1.9+T*.055,.35,b-.2,{shadow:!1});for(const[T,C]of[[-2.25,y.chrome],[-1.98,y.black],[-1.2,y.chrome]])Ze(e,C,.07,.085,.2,T,1,b,{seg:14}),w(e,y.black,.03,.12,.03,T+.09,1,b,{shadow:!1});w(e,y.blackMatte,.18,.08,.18,-1.55,.94,b,{shadow:!1}),Be(d,b-.3,v,en);const x=-1.75,R=22.95;w(e,Fe.tableTop,.72,.05,1.4,x,.95,R);for(const T of[-1,1])w(e,y.black,.04,.95,.04,x+T*.25,.48,R-.5,{rz:T*.18}),w(e,y.black,.04,.95,.04,x+T*.25,.48,R+.5,{rz:T*.18});w(e,y.black,.04,.04,1,x,.3,R,{shadow:!1}),Be(x-.36,R-.7,x+.36,R+.7);for(const[T,C]of[[x-.6,R-.35],[x-.6,R+.35],[x+.6,R-.3],[x+.6,R+.4],[x+.1,R+.95]])gv(e,T,C);{const T=ds(e,x-.05,0,R-.95,"Rattan stool");w(T,Fe.rattan,.34,.5,.34,0,.25,0),w(T,Fe.rattan,.4,.05,.4,0,.52,0),Be(x-.25,R-1.15,x+.15,R-.75)}for(const[T,C]of[[gt+.75,en-1.15],[gt+.75,en-.8],[gt+1.05,en-.95]])Ze(e,Fe.water,.14,.14,.46,T,.23,C,{seg:16,shadow:!1}).renderOrder=2,Ze(e,Fe.capBlue,.04,.04,.06,T,.49,C,{seg:10,shadow:!1});Be(gt+.55,en-1.35,gt+1.25,en-.6),zs(e,-.4,22.75,"bush")}for(let m=0;m<40;m++){const d=w(e,Ke()>.5?Fe.leafPale:y.woodDark,.04,.003,.025,gt+.5+Ke()*2.8,.004,1+Ke()*(en-2),{shadow:!1,ry:Ke()*3});d.receiveShadow=!1}}const af=40;function _v(n){Sr(n,0,0,0,4.9,qe),Sr(n,0,6.5,0,Rt,qe),w(n,y.black,.12,.08,1.6,0,2.44,5.7),w(n,y.chrome,.1,.015,1.6,0,.008,5.7,{shadow:!1});const e=new xe(new ct(1.6,qe-2.48),y.glass);e.position.set(0,(2.48+qe)/2,5.7),e.rotation.y=Math.PI/2,e.renderOrder=2,n.add(e),Vt(n,0,0,0,Rt,{h:ke-qe,y0:qe,collide:!1});const[t,i]=Jl;Sr(n,0,Rt,0,t,2.8),Sr(n,0,i,0,At,2.8),w(n,y.black,.12,.08,i-t,0,2.44,(t+i)/2),w(n,y.chrome,.1,.015,i-t,0,.008,(t+i)/2,{shadow:!1});const s=new xe(new ct(i-t,2.8-2.48),y.glass);s.position.set(0,(2.48+2.8)/2,(t+i)/2),s.rotation.y=Math.PI/2,s.renderOrder=2,n.add(s),w(n,y.wall,.12,ke-2.8,At-Rt,.02,2.8+(ke-2.8)/2,(Rt+At)/2,{shadow:!1});for(let o=2.95;o<ke-.05;o+=.14)w(n,y.wallWarm,.02,.03,Jh-Rt,.09,o,(Rt+Jh)/2,{shadow:!1});Vt(n,-.1,At,-.1,dn+.2,{h:ke+.3,mat:y.wallWarm,t:.2}),Sr(n,0,0,Pt,0,qe),Vt(n,0,0,Pt,0,{h:ke-qe,y0:qe,collide:!1}),xv(n);const r=20-gt;w(n,y.wallWarm,r,af,dn+1.2,gt+r/2,-af/2-.01,(dn-1)/2+.1,{shadow:!1});for(let o=1;o<12;o++)w(n,y.blackMatte,.05,.25,dn+1.3,gt-.01,-o*3.4,(dn-1)/2+.1,{shadow:!1});hv(n)}const vv=new Ft({color:"#a39b91",roughness:.55}),Ga=new Ft({color:"#ece7dc",roughness:.6}),Mv=new Ft({color:"#e9e4d6",roughness:.7}),yv=new Ft({color:"#6c6a66",roughness:.5,metalness:.3});function Sv(n,e,t,i=2.45){Ze(n,y.black,.004,.004,ke-i,e,(ke+i)/2,t,{seg:3,shadow:!1}),Ze(n,y.black,.045,.045,.2,e,i-.1,t,{seg:14});const s=new xe(new ni(.035,12),y.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,i-.201,t),n.add(s)}function bv(n){const e=new nt;e.userData.label="Meeting room",n.add(e),Mt(e,y.floorDark,0,ft,Tn,At,0),Mt(e,y.ceilingBlack,0,ft,Tn,At,ke,{down:!0}),Vt(e,Tn+.1,ft,Tn+.1,At+.1,{h:ke,mat:y.white});const[t,i]=J_;Vt(e,0,At+.1,t,At+.1,{h:ke,mat:y.white}),Vt(e,i,At+.1,Tn+.2,At+.1,{h:ke,mat:y.white}),Vt(e,t,At+.1,i,At+.1,{h:ke-2.12,y0:2.12,mat:y.white,collide:!1}),Ze(e,y.ceilingBlack,.16,.16,At-ft,Tn-.35,ke-.3,(ft+At)/2,{rx:Math.PI/2,seg:12,shadow:!1}),w(e,y.ceilingBlack,Tn,.35,.3,Tn/2,ke-.18,ft+.25,{shadow:!1});for(const[c,h,f,u]of[[0,At-.01,Tn,At-.01],[Tn-.01,ft,Tn-.01,At]])w(e,y.concrete,Math.max(.02,f-c),.08,Math.max(.02,u-h),(c+f)/2,.04,(h+u)/2,{shadow:!1});const s=1.9,r=19.85,o=22,a=1,l=(r+o)/2;{const c=new nt;c.userData.label="Meeting table",e.add(c),w(c,vv,a,.04,o-r,s,.75,l),w(c,Ga,a+.01,.025,o-r+.01,s,.72,l,{shadow:!1});for(const h of[r+.15,o-.15])for(const f of[-1,1])w(c,y.black,.05,.72,.05,s+f*(a/2-.08),.36,h);for(const h of[r+.5,l-.1,o-.6]){const f=new xe(new ni(.04,14),y.black);f.rotation.x=-Math.PI/2,f.position.set(s+.1,.772,h),c.add(f)}w(c,y.black,.05,.02,.2,s-.15,.78,l-.4,{shadow:!1,ry:.4}),Be(s-a/2,r,s+a/2,o)}for(const c of[r+.4,l,o-.4])Zs(e,s-a/2-.32,c,Math.PI/2),Zs(e,s+a/2+.32,c,-Math.PI/2);Zs(e,s,o+.35,Math.PI);{const c=new nt;c.userData.label="TV",c.position.set(1.75,0,19.25),e.add(c);for(let h=0;h<4;h++)w(c,y.black,.04,.03,.34,Math.sin(h*Math.PI/2)*.15,.04,Math.cos(h*Math.PI/2)*.15,{ry:h*Math.PI/2});Ze(c,y.black,.025,.025,1.5,0,.78,0,{seg:8}),w(c,y.black,1.1,.64,.06,0,1.55,.03),w(c,y.screenOff,1.06,.6,.005,0,1.55,.062,{shadow:!1}),Be(1.55,19.05,1.95,19.45)}{const c=Ru(e,s,l,1.8,Math.PI/2,2.35,ke);c.children[0].material=yv,c.children[0].scale.set(1.8,.09,.09)}for(const[c,h]of[[.8,19.6],[.8,21.6],[3,19.6],[3,21.6]])Sv(e,c,h);Ec(e,Tn-.02,2.7,20.6,-Math.PI/2);{const c=new nt;c.userData.label="Door frame",e.add(c);const h=At+.1,f=i-t;for(const g of[t-.02,i+.02])w(c,Ga,.04,2.14,.22,g,1.07,h);w(c,Ga,f+.08,.04,.22,(t+i)/2,2.14,h);const u=new nt;u.position.set(i,0,h);const p=f-.02;w(u,Mv,p,2.08,.04,-p/2,1.05,0);for(const g of[-1,1]){w(u,y.chrome,.025,.32,.03,-p+.1,1.05,g*.06);for(const _ of[.92,1.18])w(u,y.chrome,.02,.02,.05,-p+.1,_,g*.035,{shadow:!1})}jo.push({leaf:u,closed:0,open:1.45,name:"game room door",handle:[-p+.1,1.3,.1],x:(t+i)/2,z:h,block:{minX:t,maxX:i,minZ:h-.1,maxZ:h+.1}})}{const c=new nt;c.userData.label="Shelf",e.add(c);const h=.38,f=At-.3,u=.5,p=.38,g=2.3;for(const _ of[-1,1])w(c,y.white,.02,g,p,h+_*u/2,g/2,f);w(c,y.white,u,g,.02,h,g/2,f+p/2);for(const _ of[.02,.55,.95,1.45,1.9,g])w(c,y.white,u,.02,p,h,_,f);w(c,y.white,u-.02,.52,.02,h,.28,f-p/2,{shadow:!1}),w(c,y.woodDark,.3,.16,.22,h,1.04,f),w(c,y.black,.26,.02,.16,h,1.47,f,{shadow:!1}),Be(h-u/2,f-p/2,h+u/2,f+p/2)}{const c=new nt;c.userData.label="Cabinet",e.add(c),w(c,y.woodDark,.9,.45,.4,.95,.225,ft+.32),w(c,y.white,.42,.2,.01,.75,.32,ft+.52,{shadow:!1}),Be(.5,ft+.1,1.4,ft+.52)}}const zi={x:.088,y:1.4,z:25.35,w:1.68,h:.94},Gn=n=>new Ft(n),zt={navy:Gn({color:"#1e2740",roughness:.9}),ledPurple:Gn({color:"#b46cff",emissive:"#9b4dff",emissiveIntensity:2.2}),ledCyan:Gn({color:"#5fe3ff",emissive:"#29c8ff",emissiveIntensity:1.8}),felt:Gn({color:"#1f6b46",roughness:.95}),railWood:Gn({color:"#5a3522",roughness:.5}),ps5White:Gn({color:"#f4f4f2",roughness:.35}),rug:Gn({color:"#3a3f4b",roughness:1}),cue:Gn({color:"#c79a62",roughness:.5}),beanRed:Gn({color:"#a8322d",roughness:.95}),beanBlue:Gn({color:"#2d4f8a",roughness:.95})},wv=["#f2c21b","#1f4fb4","#c8281f","#5b2a86","#ef7a1a","#1d7a3c","#7a1f1f","#111111"],lf=wv.map(n=>Gn({color:n,roughness:.2,metalness:.05})),cf=(()=>{const n=document.createElement("canvas");n.width=512,n.height=160;const e=n.getContext("2d");e.font='700 110px "Avenir Next", "Helvetica Neue", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ff4fd8",e.shadowBlur=24,e.fillStyle="#ffd6f6",e.fillText("GAME ON",256,84);const t=new Cn(n);return t.colorSpace=Ut,t})();zt.neon=Gn({map:cf,emissive:"#ffffff",emissiveMap:cf,emissiveIntensity:1.6,transparent:!0,alphaTest:.05});function bi(n,e,t=0,i=0,s=0){const r=new nt;return r.userData.label=e,r.position.set(t,0,i),r.rotation.y=s,n.add(r),r}function hf(n,e,t,i,s,r){const o=bi(n,"Controller",e,i,s);w(o,r,.16,.035,.07,0,t,0,{shadow:!1});for(const a of[-1,1])w(o,r,.05,.035,.06,a*.065,t,.04,{shadow:!1,ry:a*.4});w(o,y.black,.11,.004,.03,0,t+.019,-.005,{shadow:!1})}function Ev(n){const e=bi(n,"Game room"),t=At+.2;Mt(e,y.floorDark,0,At,Kn,dn,0),Mt(e,y.ceilingBlack,0,At,Kn,dn,ke,{down:!0}),Vt(e,Tn+.2,At+.1,Kn+.2,At+.1,{h:ke,mat:y.white}),Vt(e,Kn+.1,At,Kn+.1,dn+.2,{h:ke,mat:y.white}),Vt(e,0,dn+.1,Kn+.2,dn+.1,{h:ke,mat:y.white}),w(e,y.ceilingBlack,Kn,.4,.3,Kn/2,ke-.2,(t+dn)/2,{shadow:!1});const i=zi.z;w(e,zt.navy,.02,ke,dn-t-.4,.01,ke/2,(t+dn)/2),w(e,zt.ledPurple,.02,.025,dn-t-.6,.03,ke-.25,(t+dn)/2,{shadow:!1});{const l=bi(e,"TV");w(l,y.black,.05,.98,1.72,.06,1.4,i),w(l,y.screenDark,.005,.94,1.68,.087,1.4,i,{shadow:!1}),w(l,zt.ledCyan,.01,1.06,1.8,.03,1.4,i,{shadow:!1})}{const l=bi(e,"TV console");w(l,y.white,.42,.42,1.9,.24,.21,i);for(const c of[i-.48,i+.48])w(l,y.metalDark,.005,.32,.9,.452,.21,c,{shadow:!1});Be(0,i-.95,.45,i+.95)}{const l=bi(e,"PS5",.25,i+.65);w(l,y.black,.06,.38,.22,0,.62,0);for(const c of[-1,1])w(l,zt.ps5White,.02,.4,.26,c*.04,.63,0,{rz:c*.04});w(l,y.black,.1,.02,.12,0,.43,0,{shadow:!1})}w(e,y.blackMatte,.18,.26,.18,.25,.55,i-.75),w(e,zt.rug,2.2,.01,2.4,1.75,.006,i,{shadow:!1}),wn(bc(e,2.95,i,-Math.PI/2,3),-.05);{const l=bi(e,"Coffee table");w(l,y.woodDark,.55,.04,1,1.75,.4,i);for(const[c,h]of[[-1,-1],[1,-1],[1,1],[-1,1]])w(l,y.black,.03,.38,.03,1.75+c*.23,.19,i+h*.45);Be(1.45,i-.52,2.05,i+.52)}hf(e,1.72,.44,i-.22,.3,zt.ps5White),hf(e,1.8,.44,i+.2,-.2,zt.ps5White),w(e,y.black,.12,.02,.05,1.68,.43,i+.38,{shadow:!1,ry:.5});for(const[l,c]of[[23.8,zt.beanRed],[26.65,zt.beanBlue]])wn(Au(e,1.35,l,c),-.15);const s=5,r=25,o=2.3,a=1.25;{const l=bi(e,"Pool table");w(l,zt.railWood,a+.2,.2,o+.2,s,.7,r),w(l,zt.felt,a,.02,o,s,.81,r,{shadow:!1});for(const p of[-1,1])w(l,zt.felt,.06,.05,o,s+p*(a/2-.03),.835,r,{shadow:!1}),w(l,zt.felt,a,.05,.06,s,.835,r+p*(o/2-.03),{shadow:!1}),w(l,zt.railWood,.1,.06,o+.2,s+p*(a/2+.05),.83,r),w(l,zt.railWood,a+.2,.06,.1,s,.83,r+p*(o/2+.05));for(const[p,g]of[[-1,-1],[1,-1],[1,1],[-1,1]])w(l,zt.railWood,.14,.62,.14,s+p*(a/2-.05),.31,r+g*(o/2-.1));for(const p of[-1,1])for(const g of[-1,0,1]){const _=new xe(new ni(.055,14),y.black);_.rotation.x=-Math.PI/2,_.position.set(s+p*(a/2-.04),.865,r+g*(o/2-.04)),l.add(_)}const c=.028,h=new gn(c,14,10);let f=0;for(let p=0;p<5;p++)for(let g=0;g<=p;g++){const _=new xe(h,lf[f++%lf.length]);_.position.set(s+(g-p/2)*c*2.05,.82+c,r+.45+p*c*1.8),_.castShadow=!0,l.add(_)}const u=new xe(h,zt.ps5White);u.position.set(s+.05,.82+c,r-.6),u.castShadow=!0,l.add(u),Ze(l,zt.cue,.006,.012,1.45,s-.35,.9,r-.2,{rx:Math.PI/2-.03,seg:8}),Be(s-a/2-.1,r-o/2-.1,s+a/2+.1,r+o/2+.1)}{const l=bi(e,"Pool light");w(l,y.black,.32,.12,1.7,s,1.85,r);for(const c of[-.55,0,.55]){const h=new xe(new ct(.24,.4),y.lightStrip);h.rotation.x=Math.PI/2,h.position.set(s,1.789,r+c),l.add(h)}for(const c of[-.7,.7])Ze(l,y.black,.004,.004,ke-1.91,s,(ke+1.91)/2,r+c,{seg:3,shadow:!1})}{const l=bi(e,"Cue rack");w(l,y.woodDark,.05,.08,.7,Kn-.03,1.55,23.6),w(l,y.woodDark,.05,.06,.7,Kn-.03,.1,23.6);for(let c=0;c<4;c++)Ze(l,zt.cue,.007,.013,1.5,Kn-.07,.8,23.35+c*.16,{seg:8})}{const l=new xe(new ct(1.5,.47),zt.neon);l.position.set(4.7,2.45,dn-.01),l.rotation.y=Math.PI,l.userData.label="Neon sign",e.add(l)}for(const[l,c]of[[1.8,23.6],[1.8,26.4]]){Ze(e,y.black,.05,.05,.12,l,ke-.06,c,{seg:10,shadow:!1});const h=new xe(new ni(.035,10),y.spotGlow);h.rotation.x=Math.PI/2,h.position.set(l,ke-.121,c),e.add(h)}}const De=bt,Y=bt+5.8,fn=-2,tn=47,Ge=3.2,Qe=3,nn=.6,ff=2.4;let uf=4242;const sn=()=>((uf=uf*16807%2147483647)-1)/2147483646;function Rn(n,e,t,i=!0){const s=document.createElement("canvas");s.width=n,s.height=e,t(s.getContext("2d"),n,e);const r=new Cn(s);return r.colorSpace=Ut,i&&(r.wrapS=r.wrapT=Zi),r.anisotropy=8,r}function df(n,e,t){return Rn(1024,1024,(i,s)=>{const o=s/2;for(let a=0;a<2;a++)for(let l=0;l<2;l++){const c=(sn()-.5)*14;i.fillStyle=`rgb(${n[0]+c},${n[1]+c},${n[2]+c})`,i.fillRect(a*o,l*o,o,o),i.save(),i.beginPath(),i.rect(a*o,l*o,o,o),i.clip();for(let h=0;h<7;h++){i.strokeStyle=e.replace("A",(.06+sn()*.14).toFixed(2)),i.lineWidth=.8+sn()*2,i.beginPath();let f=a*o+sn()*o,u=l*o;i.moveTo(f,u);for(let p=0;p<6;p++)f+=(sn()-.4)*o*.5,u+=o/5,i.quadraticCurveTo(f+(sn()-.5)*60,u-o/10,f,u);i.stroke()}for(let h=0;h<400;h++){const f=(sn()-.5)*18;i.fillStyle=`rgba(${n[0]+f},${n[1]+f},${n[2]+f},0.25)`,i.beginPath(),i.arc(a*o+sn()*o,l*o+sn()*o,4+sn()*18,0,Math.PI*2),i.fill()}i.restore()}i.strokeStyle=t,i.lineWidth=2;for(let a=0;a<=2;a++)i.beginPath(),i.moveTo(a*o,0),i.lineTo(a*o,s),i.stroke(),i.beginPath(),i.moveTo(0,a*o),i.lineTo(s,a*o),i.stroke()})}const Tv=Rn(256,256,(n,e)=>{n.fillStyle="#f1f0ec",n.fillRect(0,0,e,e);for(let t=0;t<1500;t++)n.fillStyle=`rgba(0,0,0,${.03+sn()*.05})`,n.fillRect(sn()*e,sn()*e,1.5,1.5);n.strokeStyle="#c9c7c0",n.lineWidth=3;for(const t of[0,e/2,e])n.beginPath(),n.moveTo(t,0),n.lineTo(t,e),n.stroke(),n.beginPath(),n.moveTo(0,t),n.lineTo(e,t),n.stroke()}),Av=Rn(128,128,(n,e)=>{n.fillStyle="#e9e8e4",n.fillRect(0,0,e,e);for(let t=0;t<6;t++){const i=8+t*9;n.strokeStyle=t%2?"#bdbbb5":"#8e8c86",n.lineWidth=4,n.strokeRect(i,i,e-2*i,e-2*i)}n.fillStyle="#55534f",n.fillRect(56,56,16,16)},!1),Rv=Rn(256,256,(n,e)=>{n.fillStyle="#ecebe6",n.fillRect(0,0,e,e),n.strokeStyle="#c6c4bd",n.lineWidth=2;for(const[t,i,s,r]of[[0,e/2,e/2,0],[e/2,0,e,e/2],[e,e/2,e/2,e],[e/2,e,0,e/2]])n.beginPath(),n.moveTo(t,i),n.lineTo(s,r),n.stroke()}),Cv=Rn(256,512,(n,e,t)=>{n.fillStyle="#d9d2c3",n.fillRect(0,0,e,t);for(let i=0;i<600;i++)n.fillStyle=`rgba(120,105,85,${.05+sn()*.08})`,n.fillRect(sn()*e,sn()*t,10+sn()*50,1);n.fillStyle="rgba(110,100,85,.55)";for(let i=22;i<t;i+=26)n.fillRect(0,i,e,2)},!1);function yi(n,{bg:e="#0f8a3c",fg:t="#ffffff",w:i=512,h:s=128,font:r="bold 64px system-ui, sans-serif",icon:o=""}={}){return Rn(i,s,a=>{a.fillStyle=e,a.fillRect(0,0,i,s),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=r,a.fillText(o?`${o}  ${n}`:n,i/2,s/2+2)},!1)}const tt=n=>new Ft(n),br=n=>tt({map:n,emissive:"#ffffff",emissiveMap:n,emissiveIntensity:.55,roughness:.4}),Q={floor:tt({map:df([214,196,170],"rgba(150,120,90,A)","#b9a487"),roughness:.08,metalness:.05,envMapIntensity:1.6}),floorBrown:tt({map:df([104,82,66],"rgba(205,190,170,A)","#4e3c30"),roughness:.08,metalness:.05,envMapIntensity:1.6}),skirting:tt({color:"#4a3326",roughness:.25}),wall:tt({color:"#ecebe6",roughness:.92}),grid:tt({map:Tv,roughness:.95}),diffuser:tt({map:Av,roughness:.8}),steel:tt({color:"#a7aba9",roughness:.45,metalness:.55}),doorWhite:tt({color:"#efeee8",roughness:.6}),frame:tt({color:"#d8d2c2",roughness:.6}),laminate:tt({map:Cv,roughness:.55}),diamond:tt({map:Rv,roughness:.85}),woodStrip:tt({color:"#6a4126",roughness:.5}),darkGlass:new Ft({color:"#2c3a2c",transparent:!0,opacity:.55,roughness:.05,metalness:.3,depthWrite:!1,side:Nt}),orange:tt({color:"#ff6a12",roughness:.35}),caution:tt({map:yi("CAUTION",{bg:"#f2b90f",fg:"#2a2a2a",w:256,h:512,font:"bold 44px system-ui, sans-serif"}),roughness:.5}),red:tt({color:"#c42a22",roughness:.5}),fireExit:br(yi("FIRE EXIT  ←",{w:512,h:112,font:"bold 60px system-ui, sans-serif"})),fireExt:br(yi("FIRE EXTINGUISHER",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),pushBar:br(yi("PUSH BAR TO OPEN",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),exitSmall:br(yi("EXIT",{w:256,h:96,font:"bold 60px system-ui, sans-serif"})),gents:tt({map:yi("GENTS TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚹"}),roughness:.4}),techno:tt({map:Rn(512,280,(n,e,t)=>{n.fillStyle="#f7f7f5",n.fillRect(0,0,e,t),n.fillStyle="#2b5fae",n.fillRect(e*.58,t*.3,e*.42,t*.32),n.font="bold 66px system-ui, sans-serif",n.textBaseline="middle",n.fillStyle="#2b5fae",n.fillText("Techn",22,t*.46),n.fillStyle="#ffffff",n.fillText("aureus",e*.6,t*.46),n.fillStyle="#555",n.font="22px system-ui, sans-serif",n.fillText("IT STRATEGY & TECHNOLOGY PARTNER",24,t*.78)},!1),roughness:.5}),pixPanel:tt({color:"#3c3e40",roughness:.5,metalness:.2}),pixText:tt({map:Rn(256,96,(n,e,t)=>{n.fillStyle="#3c3e40",n.fillRect(0,0,e,t),n.fillStyle="#4aa3df",n.font="bold 50px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("pixbit",e/2,t*.42),n.fillStyle="#cfd2d4",n.font="16px system-ui, sans-serif",n.fillText("solutions",e/2,t*.8)},!1),roughness:.5}),mat:tt({color:"#3b2620",roughness:1}),pink:tt({color:"#e9b8c4",roughness:.3}),mirror:tt({color:"#c9d4d8",roughness:.08,metalness:.25}),slot:tt({color:"#5d6a6e",roughness:.1,metalness:.4}),room:tt({color:"#cfccc4",roughness:.9}),roomCeil:tt({color:"#e9e7e1",roughness:.95}),desk:tt({color:"#c8b79c",roughness:.7}),officeGlass:new Ft({color:"#33403a",transparent:!0,opacity:.4,roughness:.05,metalness:.3,depthWrite:!1,side:Nt}),pixLetters:tt({map:Rn(512,216,(n,e,t)=>{n.clearRect(0,0,e,t),n.fillStyle="#141414",n.textAlign="center",n.textBaseline="middle",n.font="bold 128px system-ui, sans-serif",n.fillText("pixbit",e/2,t*.38),n.font="44px system-ui, sans-serif",n.fillText("· s o l u t i o n s ·",e/2,t*.82)},!1),transparent:!0,alphaTest:.3,roughness:.6}),cam:tt({color:"#f2f2f0",roughness:.4}),leather:tt({color:"#1e1a19",roughness:.3,metalness:.05,envMapIntensity:1.2}),tableWood:tt({color:"#6b5646",roughness:.55}),daylight:new hi({color:"#f4f8ff"}),lamp:new hi({color:"#fff3c9"}),tint:new Ft({color:"#c9d6b0",transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1,side:Nt}),olive:tt({color:"#8f9a2e",roughness:.85}),silver:tt({color:"#b8bcc0",roughness:.3,metalness:.8}),tableTop:tt({color:"#e6e1d8",roughness:.35}),ladies:tt({map:yi("LADIES TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚺"}),roughness:.4}),slate:tt({color:"#6b6e71",roughness:.85}),navy:tt({color:"#1f2a3b",roughness:.6}),navySlats:tt({map:Rn(256,256,(n,e,t)=>{n.fillStyle="#212d40",n.fillRect(0,0,e,t);for(let i=0;i<e;i+=16)n.fillStyle="#141c29",n.fillRect(i,0,3,t),n.fillStyle="#2b3950",n.fillRect(i+3,0,2,t)}),roughness:.55}),tenCod:tt({map:Rn(512,160,(n,e,t)=>{n.fillStyle="#e9ecef",n.beginPath(),n.moveTo(20,30),n.lineTo(95,30),n.lineTo(60,80),n.lineTo(95,80),n.lineTo(55,135),n.lineTo(20,135),n.lineTo(55,85),n.lineTo(20,85),n.closePath(),n.fill(),n.font="bold 96px system-ui, sans-serif",n.textBaseline="middle",n.fillText("10COD",120,t/2+4)},!1),transparent:!0,alphaTest:.3,roughness:.4}),eSyn:tt({map:Rn(512,256,(n,e,t)=>{n.fillStyle="#e8506a",n.beginPath(),n.arc(120,118,100,0,Math.PI*2),n.fill(),n.font="italic bold 150px Georgia, serif",n.textBaseline="middle",n.fillStyle="#26334a",n.fillText("e",40,120),n.fillStyle="#f4e9e4",n.fillText("S",120,130),n.font="bold 76px system-ui, sans-serif",n.fillStyle="#26334a",n.fillText("YNERGY",210,150)},!1),transparent:!0,alphaTest:.3,roughness:.5}),ringLogo:tt({map:Rn(256,256,(n,e)=>{n.strokeStyle="#8f6cff",n.lineWidth=16,n.beginPath(),n.arc(e/2,e/2,90,0,Math.PI*2),n.stroke(),n.fillStyle="#e5e1ff",n.font="bold 54px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle",n.fillText("dev",e/2,e/2)},!1),transparent:!0,alphaTest:.3,roughness:.4}),greyTile:tt({color:"#9a9c9a",roughness:.3}),stairBlue:tt({color:"#5a6fc4",roughness:.8}),fireRed:tt({color:"#c8231c",roughness:.5}),granite:tt({color:"#141416",roughness:.12,metalness:.35,envMapIntensity:1.4}),liftSteel:tt({color:"#b9bdbd",roughness:.42,metalness:.75}),fireDoor:tt({color:"#9aa5a1",roughness:.55,metalness:.15}),greenSign:br(yi("FIRE STATION",{w:512,h:112,font:"bold 50px system-ui, sans-serif"})),fourth:tt({map:yi("FOURTH FLOOR",{bg:"#c9ccce",fg:"#2c2c2c",w:512,h:128,font:"bold 54px system-ui, sans-serif"}),roughness:.4,metalness:.3}),ledRed:tt({color:"#ff2a1a",emissive:"#ff2a1a",emissiveIntensity:1.4}),numDisc:n=>tt({map:Rn(128,128,(e,t)=>{e.fillStyle="#fff",e.fillRect(0,0,t,t),e.fillStyle="#111",e.font="bold 84px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(String(n),t/2,t/2+4)},!1),roughness:.4})};function Nn(n,e,t,i,s,r=Q.wall,o=Qe){w(n,r,.1,o,i-t,e+s*-.05,o/2,(t+i)/2),w(n,Q.skirting,.015,.1,i-t,e+s*.008,.05,(t+i)/2,{shadow:!1}),Be(Math.min(e,e-s*.1),t,Math.max(e,e-s*.1),i)}function pf(n,e,t,i=De,s=Y,r=De+.25,o=Y-.25){const c=o-r;w(n,Q.wall,s-i,.85,.25,(i+s)/2,.85/2,e),w(n,Q.skirting,s-i,.1,.015,(i+s)/2,.05,e+t*.13,{shadow:!1}),w(n,Q.wall,s-i,Ge-2.7,.25,(i+s)/2,(2.7+Ge)/2,e);for(const[f,u]of[[i,r],[o,s]])w(n,Q.wall,u-f,2.7-.85,.25,(f+u)/2,(.85+2.7)/2,e);const h=new xe(new ct(c,2.7-.85),y.glass);h.position.set((r+o)/2,(.85+2.7)/2,e),h.renderOrder=2,n.add(h);for(let f=0;f<=5;f++)w(n,y.black,.06,2.7-.85,.08,r+f/5*c,(.85+2.7)/2,e);for(const f of[.85+.02,2.7-.02])w(n,y.black,c,.05,.08,(r+o)/2,f,e);Be(i,e-.15,s,e+.15)}function Va(n,e,t,i,s,r,o){const a=e-o*.03;return w(n,Q.frame,.06,s+.06,i+.12,e-o*.015,(s+.06)/2,t),w(n,r,.04,s,i,a,s/2,t),a-o*.03}function Pv(n,e,t,i){const o=i-.475,a=i+.95/2;Nn(n,Y,e,o-.06,-1),Nn(n,Y,a+.06,t,-1),w(n,Q.wall,.1,Qe-2.25-.06,.95+.12,Y+.05,(Qe+2.25+.06)/2,i);for(const v of[o-.03,a+.03])w(n,Q.frame,.14,2.25+.06,.06,Y+.03,(2.25+.06)/2,v);w(n,Q.frame,.14,.06,.95+.12,Y+.03,2.25+.03,i);const l=new nt;l.position.set(Y-.01,0,o),w(l,Q.laminate,.04,2.25-.01,.95-.01,0,2.25/2,.95/2);for(const v of[-1,1]){w(l,Q.slot,.012,.9,.12,v*.022,1.45,.95/2-.05,{shadow:!1}),w(l,y.chrome,.03,.42,.03,v*.075,1.05,.95-.12,{shadow:!1});for(const b of[.86,1.24])w(l,y.chrome,.06,.02,.02,v*.05,b,.95-.12,{shadow:!1})}jo.push({leaf:l,closed:0,open:Math.PI/2*.92,name:"ladies toilet",handle:[-.12,1.25,.95-.12],x:Y,z:i,block:{minX:Y-.05,maxX:Y+.1,minZ:o,maxZ:a}});const c=Y+.1,h=Y+2.3,f=e+.05,u=t-.05,p=Qe,g=(c+h)/2,_=(f+u)/2;w(n,y.floorCorridor,h-c,.02,u-f,g,.01,_,{shadow:!1}),w(n,y.white,h-c,.04,u-f,g,p,_,{shadow:!1}),w(n,y.whiteGloss,.1,p,u-f+.2,h+.05,p/2,_);for(const v of[f-.05,u+.05])w(n,y.whiteGloss,h-c,p,.1,g,p/2,v);w(n,Q.pink,.02,1.2,u-f,h-.005,.6,_,{shadow:!1});for(const v of[f+.005,u-.005])w(n,Q.pink,h-c,1.2,.02,g,.6,v,{shadow:!1});Be(h,f-.1,h+.1,u+.1),Be(c-.1,f-.1,h,f),Be(c-.1,u,h,u+.1),w(n,y.lightStrip,.6,.02,.6,g,p-.03,_,{shadow:!1});const m=_+.7;w(n,y.whiteGloss,.2,.55,.42,h-.1,.8,m),Ze(n,y.whiteGloss,.19,.15,.4,h-.42,.2,m,{seg:20}),Ze(n,y.white,.2,.2,.03,h-.42,.42,m,{seg:20}),Be(h-.65,m-.25,h,m+.25);const d=_-.6;w(n,y.whiteGloss,.45,.14,.55,h-.23,.85,d),w(n,y.chrome,.12,.03,.03,h-.08,.98,d,{shadow:!1}),w(n,Q.mirror,.02,.7,.55,h-.012,1.55,d,{shadow:!1}),Be(h-.46,d-.3,h,d+.3)}function Wa(n,e,t,i,s,{alarm:r=!0}={}){const a=-s,l=s*Math.PI/2,c=f=>e+s*f;w(n,y.blackMatte,.04,2.3,1.1+.2,c(.005),1.15,t,{shadow:!1});for(const f of[-1,1])w(n,Q.liftSteel,.03,2.22,1.1/2-.01,c(.03),1.11,t+f*1.1/4,{shadow:!1});for(const f of[-1,1])w(n,Q.liftSteel,.04,2.26,.03,c(.03),1.13,t+f*(1.1/2+.02),{shadow:!1});w(n,Q.liftSteel,.04,.03,1.1+.07,c(.03),2.26,t,{shadow:!1}),ut(n,Q.numDisc(i),.22,.22,c(.012),2.55,t,l),w(n,Q.liftSteel,.03,.14,.62,c(.015),2.92,t,{shadow:!1}),w(n,y.blackMatte,.035,.08,.2,c(.02),2.92,t,{shadow:!1}),w(n,Q.ledRed,.036,.04,.06,c(.022),2.92,t,{shadow:!1});const h=t+a*(1.1/2+.33);if(w(n,Q.liftSteel,.02,.26,.11,c(.01),1.15,h,{shadow:!1}),w(n,y.blackMatte,.01,.06,.05,c(.022),1.12,h,{shadow:!1}),r){const f=t-a*.97;w(n,Q.fireRed,.05,.14,.12,c(.025),2.05,f,{shadow:!1}),w(n,Q.fireRed,.04,.13,.1,c(.02),1.3,f,{shadow:!1})}}const Lv=["techno","tenCod","eSyn","ringLogo"];function Nu(n){for(const e of Lv)Q[e].visible=n}Nu(!1);function Xa(n,e,t,i,s,r=4.2,{frost:o=!1}={}){const a=e-t*.03,l=e+t*3;Mt(n,Q.room,Math.min(e,l),i,Math.max(e,l),s,0),w(n,Q.room,.1,Ge,s-i,l,Ge/2,(i+s)/2,{shadow:!1}),Mt(n,Q.roomCeil,Math.min(e,l),i,Math.max(e,l),s,Ge,{down:!0});for(let c=i;c<s-.5;c+=r){const h=c+.2,f=Math.min(c+r,s)-.2;w(n,Q.wall,.4,Ge,.4,e,Ge/2,c);const u=new xe(new ct(f-h,Qe-.05),Q.officeGlass);if(u.position.set(a,(Qe-.05)/2,(h+f)/2),u.rotation.y=t>0?-Math.PI/2:Math.PI/2,u.renderOrder=2,n.add(u),o){const d=new xe(new ct(f-h,.75),y.glassFrost);d.position.set(a-t*.006,1.25,(h+f)/2),d.rotation.y=u.rotation.y,d.renderOrder=3,n.add(d)}const p=Math.max(2,Math.round((f-h)/1));for(let d=0;d<=p;d++)w(n,y.black,.06,Qe,.05,a,Qe/2,h+d/p*(f-h));for(const d of[.04,2.35,Qe-.03])w(n,y.black,.06,.06,f-h,a,d,(h+f)/2);const g=h+(f-h)/p;for(const d of[-1,1])w(n,y.chrome,.03,.6,.025,a-t*d*.05,1.05,g-.12,{shadow:!1});const _=e+t*1.6,m=(h+f)/2+.6;w(n,Q.desk,.7,.04,1.4,_,.75,m);for(const d of[-1,1])w(n,y.black,.05,.73,.05,_,.37,m+d*.6,{shadow:!1});w(n,y.screenDark,.03,.32,.55,_+t*.2,1,m),w(n,y.black,.45,.5,.45,_-t*.55,.5,m)}w(n,Q.wall,.4,Ge,.4,e,Ge/2,s),Be(Math.min(e,a)-.05,i,Math.max(e,a)+.05,s)}const Ql=14.5,An=Ql+11.85,Ht=An+6.4,Jn=Y+11;function mf(n,e,t,i=0,s=1.6){const r=new nt;r.position.set(e,0,t),r.rotation.y=i,n.add(r),w(r,Q.leather,s,.3,.82,0,.24,0),w(r,Q.leather,s-.36,.14,.62,0,.45,.08);for(const o of[-1,1])w(r,Q.leather,.18,.62,.82,o*(s/2-.09),.37,0);w(r,Q.leather,s-.1,.36,.18,0,.6,-.32);for(const o of[-1,1])w(r,Q.leather,(s-.4)/2,.36,.16,o*(s-.4)/4,.74,-.22,{rx:-.12});for(const o of[-1,1])for(const a of[-1,1])w(r,y.blackMatte,.06,.09,.06,o*(s/2-.08),.045,a*.34,{shadow:!1});return r}function gf(n,e,t,i=0,s=1.9){const r=new nt;r.position.set(e,0,t),r.rotation.y=i,n.add(r),w(r,Q.leather,s,.22,.72,0,.27,.04),w(r,Q.leather,s,.1,.7,0,.42,.05),w(r,Q.leather,s,.62,.16,0,.73,-.3,{rx:-.08});for(const o of[-1,1])w(r,y.chrome,.03,.03,.72,o*(s/2-.12),.015,.02,{shadow:!1}),w(r,y.chrome,.03,.16,.03,o*(s/2-.12),.08,.34,{shadow:!1}),w(r,y.chrome,.03,.16,.03,o*(s/2-.12),.08,-.3,{shadow:!1});return r}function qa(n,e,t,i=.85){Be(n-t/2,e-i/2,n+t/2,e+i/2)}function Iv(n){const e=(An+Ht)/2,t=Ht-An;Mt(n,Q.floor,Y,An,Jn,Ht,.001,{tile:1.6}),Mt(n,Q.grid,Y,An,Jn,Ht,Ge,{down:!0,tile:1.2});for(const p of[An,Ht]){const g=p===An?-1:1;w(n,Q.wall,Jn-Y,Ge,.1,(Y+Jn)/2,Ge/2,p+g*.05),w(n,Q.skirting,Jn-Y,.1,.015,(Y+Jn)/2,.05,p-g*.008,{shadow:!1}),Be(Y,p-.1,Jn,p+.1)}w(n,Q.granite,.65,Ge,.55,Y+.08,Ge/2,Ht+.275),Be(Y-.25,Ht,Y+.4,Ht+.55),w(n,Q.wall,.1,Ge,t,Jn+.05,Ge/2,e);const i=Jn-.02,s=e-1.6,r=e+1.6,o=2.55,a=new xe(new ct(r-s,o),Q.daylight);a.position.set(i+.005,o/2,e),a.rotation.y=-Math.PI/2,n.add(a);const l=new xe(new ct(r-s,o),y.glass);l.position.set(i,o/2,e),l.rotation.y=-Math.PI/2,l.renderOrder=2,n.add(l);for(const p of[s,e-.75,e+.75,r])w(n,y.black,.07,o,.07,i,o/2,p);for(const p of[.04,o])w(n,y.black,.07,.07,r-s,i,p,e);for(const[p,g]of[[s,e-.75],[e+.75,r]])for(const _ of[.3,1.25,2.15])w(n,y.black,.07,.05,g-p,i,_,(p+g)/2);w(n,y.black,.07,.05,1.5,i,2.15,e);for(const p of[e-.07,e+.07])w(n,y.blackMatte,.04,.45,.03,i-.07,1.1,p,{shadow:!1});Be(Jn-.1,An,Jn+.1,Ht),mf(n,Y+5,An+.48,0,1.6),qa(Y+5,An+.48,1.6),gf(n,Y+7.1,An+.45,0,1.9),qa(Y+7.1,An+.45,1.9),gf(n,Y+5.6,Ht-.45,Math.PI,2.2),qa(Y+5.6,Ht-.45,2.2),mf(n,Y+9.4,Ht-.75,Math.PI+.35,1.6),Be(Y+8.5,Ht-1.3,Y+10.3,Ht-.2);const c=Y+6.2,h=An+1.6;w(n,Q.tableTop,1.2,.04,.6,c,.42,h),w(n,Q.tableWood,1.1,.02,.5,c,.12,h,{shadow:!1});for(const p of[-1,1])for(const g of[-1,1])w(n,Q.tableWood,.04,.44,.04,c+p*.52,.2,h+g*.24,{rz:p*.12});Be(c-.62,h-.32,c+.62,h+.32);const f=Y+8.4;w(n,Q.frame,1.05,2.15,.05,f,1.075,Ht-.02),w(n,Q.fireDoor,.95,2.1,.04,f,1.05,Ht-.04),w(n,y.chrome,.14,.03,.04,f-.35,1.05,Ht-.08,{shadow:!1}),ut(n,Q.greenSign,.5,.11,f+.2,2.35,Ht-.012,Math.PI),w(n,y.white,.09,.09,.012,f-.75,1.25,Ht-.006,{shadow:!1});for(const p of[Y+2,Y+5,Y+8])for(const g of[e-1.7,e+1.7])w(n,Q.lamp,.24,.01,.24,p,Ge-.006,g,{shadow:!1});for(const p of[Y+3.5,Y+6.5,Y+9.5])for(const g of[e-2.2,e+2.2])ut(n,Q.diffuser,.6,.6,p,Ge-.004,g,0,Math.PI/2);for(const p of[Y+3,Y+7.5])Ze(n,Q.cam,.06,.07,.03,p,Ge-.015,e-.6,{seg:14,shadow:!1});const u=new xe(new gn(.07,16,10,0,Math.PI*2,0,Math.PI/2),Q.cam);u.rotation.x=Math.PI,u.position.set(Y+9.2,Ge,Ht-.5),n.add(u)}function Dv(n){Mt(n,Q.floor,De+.02,fn,Y-ff,tn,.001,{tile:1.6}),Mt(n,Q.floorBrown,Y-ff,fn,Y,tn,.001,{tile:1.6}),Mt(n,Q.grid,De+nn,fn,Y-nn,tn,Ge,{down:!0,tile:1.2});for(const[k,Se,Ue,$e,Ce,U]of[[De,De+nn,De+nn,1,fn,tn],[Y-nn,Y,Y-nn,-1,fn,tn]])Mt(n,Q.wall,k,Ce,Se,U,Qe,{down:!0}),w(n,Q.wall,.03,Ge-Qe,U-Ce,Ue,(Qe+Ge)/2,(Ce+U)/2,{shadow:!1}),w(n,y.lightStrip,.02,.025,U-Ce-.4,Ue+$e*.03,Qe+.04,(Ce+U)/2,{shadow:!1});for(let k=fn+2.2;k<tn-1;k+=3)for(const Se of[De+nn+.9,Y-nn-.9])Ze(n,y.spotGlow,.07,.07,.01,Se,Ge-.006,k,{seg:16,shadow:!1});for(let k=fn+3.7;k<tn-2;k+=6)ut(n,Q.diffuser,.6,.6,(De+Y)/2+(Math.round(k)%2?.6:-.6),Ge-.004,k,0,Math.PI/2),Ze(n,Q.cam,.05,.06,.03,(De+Y)/2,Ge-.015,k+1.5,{seg:14,shadow:!1});for(const k of[fn+1.7,12.5,22.5])w(n,y.spotGlow,.22,.012,.6,De+nn/2,Qe-.008,k,{shadow:!1});Nn(n,De,fn,rn,1),w(n,Q.wall,.1,Ge-Qe,rn-fn,De-.05,(Qe+Ge)/2,(fn+rn)/2,{shadow:!1}),w(n,Q.steel,.03,1.75,.82,De+.015,1.12,1.75),w(n,y.metalDark,.035,.012,.8,De+.016,.25,1.75,{shadow:!1}),w(n,y.chrome,.04,.03,.12,De+.04,1.15,1.42,{shadow:!1}),ut(n,Q.fireExt,.36,.07,De+.004,1.35,2.4,Math.PI/2),ut(n,Q.fireExt,.36,.07,De+.004,2.35,1.75,Math.PI/2);const e=Va(n,De,-.25,.95,2.15,Q.doorWhite,-1);w(n,y.chrome,.05,.05,.8,e+.03,1,-.25,{shadow:!1});for(const k of[-.62,.12])w(n,y.chrome,.06,.08,.05,e+.02,1,k,{shadow:!1});ut(n,Q.pushBar,.3,.06,e+.002,1.2,-.25,Math.PI/2),ut(n,Q.exitSmall,.28,.1,De+.004,2.45,-.25,Math.PI/2),w(n,Q.red,.04,.12,.12,De+.02,1.4,.55,{shadow:!1}),w(n,y.white,.01,.12,.08,De+.04,1.6,-.25+.75,{shadow:!1});const t=yt,i=18.75,s=(k,Se,Ue,$e)=>{w(n,y.concrete,.08,$e-Ue,Se-k,De-.04,(Ue+$e)/2,(k+Se)/2,{shadow:!1});const Ce=new xe(us(new ct(Se-k,$e-Ue),Se-k,$e-Ue,1.6),y.concrete);Ce.position.set(De+.002,(Ue+$e)/2,(k+Se)/2),Ce.rotation.y=Math.PI/2,Ce.receiveShadow=!0,n.add(Ce),Ue===0&&(w(n,Q.skirting,.015,.1,Se-k,De+.008,.05,(k+Se)/2,{shadow:!1}),Be(De-.1,k,De+.02,Se))},r=[t,...Ir.flatMap(k=>[k-mn-.03,k+mn+.03]),i];for(let k=0;k<r.length;k+=2)s(r[k],r[k+1],0,Qe);for(const k of Ir)s(k-mn-.03,k+mn+.03,Br+.03,Qe);w(n,Q.wall,.1,Ge-Qe,tn-t,De-.05,(Qe+Ge)/2,(t+tn)/2,{shadow:!1}),w(n,y.white,.012,.09,.09,De+.006,1.25,9.55,{shadow:!1}),w(n,y.blackMatte,.015,.03,.035,De+.012,1.25,9.55,{shadow:!1}),w(n,y.blackMatte,.03,.14,.07,De+.015,1.25,9.8,{shadow:!1}),w(n,y.bottleBlue,.01,.04,.04,De+.031,1.27,9.8,{shadow:!1}),w(n,y.white,.012,.09,.09,De+.006,.4,9.7,{shadow:!1});const o=17.4;w(n,y.black,.03,.78,.78,De+.015,2.05,o),ut(n,y.logo,.42,.6,De+.032,2.05,o,Math.PI/2),ut(n,Q.pixLetters,.8,.34,De+.004,1.42,o,Math.PI/2),w(n,y.white,.012,.09,.14,De+.006,.42,o+.35,{shadow:!1}),w(n,y.white,.03,.03,.9,De+nn/2,Qe-.015,o,{shadow:!1});for(const k of[o-.3,o+.3])Ze(n,y.white,.045,.045,.16,De+nn/2-.05,Qe-.12,k,{seg:12,shadow:!1,rz:.6});Nn(n,De,i,20,1);const a=Va(n,De,19.35,.95,2.25,Q.laminate,-1);w(n,Q.slot,.012,.9,.12,a,1.45,19.3,{shadow:!1}),w(n,y.chrome,.03,.42,.03,a+.05,1.05,19,{shadow:!1});const l=new xe(new ct(.95,1.9),Q.fireDoor);l.position.set(De+.012,1.15,20.9),l.rotation.y=Math.PI/2,n.add(l),w(n,y.chrome,.03,.1,.04,De+.03,1,21.2,{shadow:!1}),ut(n,Q.greenSign,.5,.11,De+.012,2.25,20.9,Math.PI/2),ut(n,Q.fireExt,.62,.12,De+.012,1.45,22.05,Math.PI/2);const c=22.8,h=36;Nn(n,De,20,c,1),Nn(n,De,c,h,1,Q.granite);const f=[{n:4,z:24.6},{n:3,z:28},{n:2,z:31.4},{n:1,z:34.6}];for(const k of f)Wa(n,De,k.z,k.n,1);w(n,y.white,.012,.09,.09,De+.006,.38,29.7,{shadow:!1});for(const k of[32.6,33])Ze(n,y.chrome,.22,.22,.7,De+.32,.35,k,{seg:20,shadow:!1});const u=new nt;u.position.set(De+.9,2.95,24.2),n.add(u),w(u,y.black,.03,.2,.62,0,0,0,{shadow:!1}),ut(u,Q.fourth,.6,.18,.017,0,0,Math.PI/2),ut(u,Q.fourth,.6,.18,-.017,0,0,-Math.PI/2);const p=h,g=h+3.6;Nn(n,De,p,g,1,Q.slate);for(const k of[g-1.25,g-.25])w(n,y.blackMatte,.006,2.2,.01,De+.003,1.1,k,{shadow:!1});w(n,y.blackMatte,.006,.01,1,De+.003,2.2,g-.75,{shadow:!1}),ut(n,Q.eSyn,1.3,.65,De+.012,1.75,p+1.35,Math.PI/2),w(n,y.white,.04,.03,1.2,De+nn+.3,Ge-.03,p+1.35,{shadow:!1});for(const k of[p+.9,p+1.35,p+1.8])Ze(n,y.white,.045,.045,.16,De+nn+.3,Ge-.12,k,{seg:12,shadow:!1,rz:.7});w(n,Q.navy,.4,Ge,.3,De,Ge/2,g+.1);const _=g+4.2;Xa(n,De,-1,g+.25,_,4.2,{frost:!0});const m=_+.2,d=m+1.3;Nn(n,De,m,d,1,Q.navy);const v=new xe(us(new ct(d-m,Qe),d-m,Qe,.8),Q.navySlats);v.position.set(De+.004,Qe/2,(m+d)/2),v.rotation.y=Math.PI/2,n.add(v),ut(n,Q.ringLogo,.5,.5,De+.01,1.75,(m+d)/2,Math.PI/2),Xa(n,De,-1,d+.2,tn-.15),w(n,Q.wall,.1,Ge-Qe,tn-20,De-.05,(Qe+Ge)/2,(20+tn)/2,{shadow:!1}),w(n,Q.mat,.6,.012,1.05,De+.42,.006,8.12,{shadow:!1});for(const k of[5,18.3])w(n,Q.cam,.04,.04,.12,De+nn-.05,Qe-.03,k,{shadow:!1}),Ze(n,Q.cam,.035,.035,.14,De+nn-.1,Qe-.08,k,{seg:10,shadow:!1,rz:Math.PI/2-.3});Nn(n,Y,fn,Math.min(15,Ql),-1),w(n,Q.wall,.1,Ge-Qe,tn-fn,Y+.05,(Qe+Ge)/2,(fn+tn)/2,{shadow:!1});const b=new xe(new ct(.85,2.3),y.glassFrost);b.position.set(Y-.03,1.15,-1.2),b.rotation.y=-Math.PI/2,b.renderOrder=2,n.add(b);for(const k of[-1.65,-.75])w(n,y.black,.06,2.35,.05,Y-.03,1.17,k);for(const k of[.05,1.2,2.33])w(n,y.black,.06,.05,.9,Y-.03,k,-1.2);w(n,y.chrome,.03,.4,.025,Y-.09,1.05,-.88,{shadow:!1});const x=2.6,R=Va(n,Y,x,1,2.25,Q.laminate,1);w(n,Q.slot,.012,.9,.12,R,1.45,x-.05,{shadow:!1}),w(n,y.chrome,.03,.42,.03,R-.05,1.05,x+.37,{shadow:!1});for(const k of[.86,1.24])w(n,y.chrome,.06,.02,.02,R-.025,k,x+.37,{shadow:!1});Ze(n,y.chrome,.02,.02,.02,R-.01,.95,x+.42,{seg:10,shadow:!1,rz:Math.PI/2});const T=new nt;T.position.set(Y-.33,2.62,x-.75),n.add(T),w(T,y.black,.6,.15,.03,0,0,0),ut(T,Q.gents,.56,.12,0,0,.017,0),ut(T,Q.gents,.56,.12,0,0,-.017,Math.PI),w(T,y.metalDark,.04,.05,.04,.3,.1,0);const C=new xe(new gn(.1,20,14),Q.orange);C.position.set(Y-.13,1.78,x+1.4),C.castShadow=!0,n.add(C),Ze(n,y.metalDark,.11,.09,.08,Y-.13,1.72,x+1.4,{seg:16,open:!0,shadow:!1}),w(n,y.metalDark,.08,.02,.02,Y-.05,1.72,x+1.4,{shadow:!1});const P=Ql,S=P+1.7,M=2.45,I=Y-.04,B=P+1.05,V=new xe(new ct(S-P,Qe-.05),Q.tint);V.position.set(I,(Qe-.05)/2,(P+S)/2),V.rotation.y=-Math.PI/2,V.renderOrder=2,n.add(V);const q=(k,Se=0,Ue=Qe)=>w(n,y.black,.07,Ue-Se,.06,I,(Se+Ue)/2,k),$=(k,Se=P,Ue=S)=>w(n,y.black,.07,.06,Ue-Se,I,k,(Se+Ue)/2);for(const k of[P,S])q(k,0,Qe);$(.03),$(M),$(Qe-.03);for(const k of[P+.04,B-.03,B+.03,S-.04])q(k,0,M);q((P+B)/2,0,M);for(const k of[.62,1.22,1.84])$(k,P,B);$(1.22,B,S);for(const k of[B-.09,B+.09]){w(n,y.chrome,.03,.6,.025,Y-.12,1.15,k,{shadow:!1});for(const Se of[.88,1.42])w(n,y.chrome,.08,.02,.02,Y-.09,Se,k,{shadow:!1})}Be(Y-.08,P,Y+.02,S);const W=P-.6,ne=S+.6,F=Y+2.6;Mt(n,Q.tableWood,Y+.02,W,F,ne,.002),Mt(n,Q.roomCeil,Y,W,F,ne,Ge,{down:!0}),w(n,Q.olive,.1,Ge,ne-W,F,Ge/2,(W+ne)/2,{shadow:!1});for(const k of[W,ne])w(n,Q.olive,F-Y-.12,Ge,.1,(Y+.12+F)/2,Ge/2,k,{shadow:!1});for(const[k,Se]of[[B-.1,.9],[B+.15,1.15]]){w(n,y.black,.01,Se,.01,Y+.9,Ge-Se/2,k,{shadow:!1});const Ue=new xe(new gn(.05,12,10),Q.lamp);Ue.position.set(Y+.9,Ge-Se-.04,k),n.add(Ue)}w(n,Q.silver,.035,.2,.15,Y-.018,1.35,P-.4,{shadow:!1}),w(n,y.blackMatte,.01,.08,.09,Y-.037,1.39,P-.4,{shadow:!1}),w(n,y.bottleBlue,.006,.05,.05,Y-.043,1.4,P-.42,{shadow:!1});const ce=new xe(new gn(.07,16,10,0,Math.PI*2,0,Math.PI/2),Q.cam);ce.rotation.x=Math.PI,ce.position.set(Y-.35,Qe,P+.3),n.add(ce);const fe=P+2.85,we=fe+3.4;Nn(n,Y,S,we+.2,-1),w(n,y.white,.012,.09,.09,Y-.006,.38,fe-.3,{shadow:!1});for(const k of[fe-.1,we+.1]){w(n,Q.woodStrip,.06,Qe,.2,Y-.03,Qe/2,k);for(const Se of[-.06,0,.06])w(n,y.blackMatte,.005,Qe,.008,Y-.061,Qe/2,k+Se,{shadow:!1})}const ze=new xe(us(new ct(we-fe,Qe),we-fe,Qe,.7),Q.diamond);ze.position.set(Y-.004,Qe/2,(fe+we)/2),ze.rotation.y=-Math.PI/2,ze.receiveShadow=!0,n.add(ze);const je=(fe+we)/2+.2;w(n,y.white,.03,.58,1.05,Y-.02,1.85,je),ut(n,Q.techno,1,.55,Y-.036,1.85,je,-Math.PI/2),w(n,y.black,.04,.03,.8,Y-nn-.3,Ge-.03,je,{shadow:!1});for(const k of[je-.3,je+.05,je+.35])Ze(n,y.black,.04,.035,.14,Y-nn-.3,Ge-.12,k,{seg:10,shadow:!1,rz:-.7});const ee=we+.2,de=we+1.35,pe=de+.6,he=pe+1.1,Oe=he,He=An;w(n,y.blackMatte,.02,.17,.09,Y-.07,1.45,we+.1,{shadow:!1}),w(n,y.bottleBlue,.005,.11,.06,Y-.081,1.47,we+.1,{shadow:!1});const Ie=new xe(new ct(de-ee-.04,2.38),y.glass);Ie.position.set(Y-.03,1.2,(ee+de)/2),Ie.rotation.y=-Math.PI/2,Ie.renderOrder=2,n.add(Ie);for(const k of[ee+.05,de-.05])w(n,y.chrome,.03,.05,.12,Y-.03,2.36,k,{shadow:!1});w(n,y.chrome,.03,1.1,.03,Y-.11,1.15,ee+.16,{shadow:!1});for(const k of[.62,1.68])w(n,y.chrome,.08,.02,.02,Y-.07,k,ee+.16,{shadow:!1});Be(Y-.06,ee,Y+.02,de),Mt(n,Q.greyTile,Y+.02,ee,Y+3,de+.3,.002,{tile:1.2}),Mt(n,Q.roomCeil,Y,ee,Y+3,de+.3,Ge,{down:!0}),w(n,Q.room,.1,Ge,de+.3-ee,Y+3,Ge/2,(ee+de+.3)/2,{shadow:!1}),w(n,y.black,.05,2.6,.05,Y+1.6,1.3,ee+.5,{shadow:!1}),w(n,Q.room,2.88,Ge,.1,Y+1.56,Ge/2,de+.35,{shadow:!1}),Nn(n,Y,de,pe,-1),w(n,y.white,.012,.09,.09,Y-.006,1.25,(de+pe)/2,{shadow:!1}),w(n,y.blackMatte,.015,.03,.035,Y-.012,1.25,(de+pe)/2,{shadow:!1}),w(n,Q.wall,.1,Qe-2.4,de-ee,Y+.05,(2.4+Qe)/2,(ee+de)/2),w(n,Q.wall,.1,Qe-2.3,he-pe,Y+.05,(2.3+Qe)/2,(pe+he)/2),w(n,Q.frame,.12,.06,he-pe,Y+.02,2.3,(pe+he)/2);for(const k of[pe+.02,he-.02])w(n,Q.frame,.12,2.3,.04,Y+.02,1.15,k);const et=new nt;et.position.set(Y+.06,0,pe+.04),et.rotation.y=1.25,n.add(et);const ae=he-pe-.08;w(et,Q.laminate,.04,2.25,ae,0,1.125,ae/2);for(const k of[-1,1])w(et,Q.slot,.012,.9,.1,k*.021,1.45,ae*.6,{shadow:!1}),w(et,y.chrome,.03,.42,.025,k*.06,1.05,ae-.12,{shadow:!1});Be(Y+.04,pe,Y+1.05,pe+.4);const me=Y+4.2,D=pe-.1,re=he+.15;Mt(n,Q.granite,Y+.02,D,me,re,.003,{tile:1.2}),Mt(n,Q.roomCeil,Y,D,me,re,4.5,{down:!0}),w(n,Q.stairBlue,me-Y-.12,4.5,.1,(Y+.12+me)/2,2.25,D-.05,{shadow:!1}),w(n,Q.stairBlue,me-Y-.12,4.5,.1,(Y+.12+me)/2,2.25,re+.05,{shadow:!1}),w(n,Q.stairBlue,.1,4.5,re-D,me+.05,2.25,(D+re)/2,{shadow:!1}),w(n,Q.wall,.1,4.5-Qe,he-pe,Y+.05,(4.5+Qe)/2,(pe+he)/2,{shadow:!1});for(let k=0;k<9;k++)w(n,Q.granite,.3,.17*(k+1),.95,Y+1.3+k*.3,.085*(k+1),he-.4);Be(Y+1.15,he-.9,me,re),Be(me-.05,D,me+.1,re);const K=he+1.5,le=Y-.1;w(n,Q.granite,.2,Ge,He-Oe,Y,Ge/2,(Oe+He)/2),w(n,Q.granite,.1,Ge,.1,Y+.05,Ge/2,He+.05),Be(le,Oe,Y+.1,He),Wa(n,le,K,5,-1);const ie=new nt;ie.position.set(Y-.9,2.95,Oe-.1),n.add(ie),w(ie,y.black,.03,.2,.62,0,0,0,{shadow:!1}),ut(ie,Q.fourth,.6,.18,.017,0,0,Math.PI/2),ut(ie,Q.fourth,.6,.18,-.017,0,0,-Math.PI/2);const Ae=Ht+.55,Me=Ae+.35,L=Me+2.6;Nn(n,Y,Ae,Me,-1),w(n,Q.granite,.2,Ge,L-Me,Y,Ge/2,(Me+L)/2),Be(Y-.1,Me,Y+.1,L),Wa(n,Y-.1,Me+1.45,6,-1);const E=L,G=E+2.8,se=E+.9;Pv(n,E,G,se);const ue=new nt;ue.position.set(Y-.33,2.62,se+.75),n.add(ue),w(ue,y.black,.6,.15,.03,0,0,0),ut(ue,Q.ladies,.56,.12,0,0,.017,0),ut(ue,Q.ladies,.56,.12,0,0,-.017,Math.PI);const oe=new xe(new gn(.1,20,14),Q.orange);oe.position.set(Y-.13,1.78,E+2.2),oe.castShadow=!0,n.add(oe),Ze(n,y.metalDark,.11,.09,.08,Y-.13,1.72,E+2.2,{seg:16,open:!0,shadow:!1}),w(n,y.white,.012,.09,.09,Y-.006,.38,G-.25,{shadow:!1});const Le=G,Ee=Le+2.6;Nn(n,Y,Le,Ee,-1,Q.navy);const Re=new xe(us(new ct(Ee-Le,Qe),Ee-Le,Qe,.8),Q.navySlats);Re.position.set(Y-.004,Qe/2,(Le+Ee)/2),Re.rotation.y=-Math.PI/2,n.add(Re),ut(n,Q.tenCod,1.5,.47,Y-.012,1.75,(Le+Ee)/2,-Math.PI/2),Xa(n,Y,1,Ee+.2,tn-.15),Iv(n),pf(n,fn-.12,1,De,Y,De+.9,Y-.25),pf(n,tn+.12,-1),ut(n,Q.fireExit,.5,.11,(De+Y)/2,2.95,tn-.01,Math.PI);const st=new nt;st.position.set((De+Y)/2,2.72,fn+1.6),n.add(st),w(st,y.white,.58,.14,.03,0,0,0,{shadow:!1}),ut(st,Q.fireExit,.56,.12,0,0,.016,0),ut(st,Q.fireExit,.56,.12,0,0,-.016,Math.PI);for(const k of[-1,1])w(st,y.chrome,.006,Ge-2.79,.006,k*.22,(Ge-2.79)/2+.07,0,{shadow:!1})}const xf={x:12.75,z:17.72,yaw:1.05};function Uv(n){Mt(n,y.floorBeige,0,0,Pt,Rt,0),Mt(n,y.floorBeige,Pt,rn,bt,Rt,0),Mt(n,y.floorBeige,Gt-Gi,Rt,bt,yt,0),Mt(n,y.floorDark,0,Rt,Gt-Gi,yt,0),Mt(n,y.floorDark,0,yt,qt,ft,0),Q_(n),ev(n),Dv(n),nv(n),cv(n),_v(n),bv(n),Ev(n)}function Tc(n,e){return n>bt?"Building Hall":n<0?"Terrace":e>At?"Game Room":e>ft?n<Tn?"Meeting Room":"Workspace":e<Wi&&n<Pt?"Corner Cabin":e<Bt&&e>rn&&n>Pt&&n<Ai?n<7?"Cabin 2":"Cabin 1":n>=Gt&&e<yt?"Reception":e<Rt?n<Pt?"Window Lounge":"Cabin Corridor":"Workspace"}const Hs=new vn(0,0,0,"YXZ"),Gs=new O,Nv={type:"change"},Ov={type:"lock"},Fv={type:"unlock"},_f=Math.PI/2;class kv extends I_{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Bv.bind(this),this._onPointerlockChange=zv.bind(this),this._onPointerlockError=Hv.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;Gs.setFromMatrixColumn(t.matrix,0),Gs.crossVectors(t.up,Gs),t.position.addScaledVector(Gs,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;Gs.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Gs,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Bv(n){if(this.enabled===!1||this.isLocked===!1)return;const e=n.movementX||n.mozMovementX||n.webkitMovementX||0,t=n.movementY||n.mozMovementY||n.webkitMovementY||0,i=this.object;Hs.setFromQuaternion(i.quaternion),Hs.y-=e*.002*this.pointerSpeed,Hs.x-=t*.002*this.pointerSpeed,Hs.x=Math.max(_f-this.maxPolarAngle,Math.min(_f-this.minPolarAngle,Hs.x)),i.quaternion.setFromEuler(Hs),this.dispatchEvent(Nv)}function zv(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(Ov),this.isLocked=!0):(this.dispatchEvent(Fv),this.isLocked=!1)}function Hv(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const vf=1.65,Gv=.25,Mf=3,Vv=6,Wv=18,Xv=5.2;function qv(n,e,{spawn:t,yaw:i=0}){const s=new kv(n,e),r={},o={x:0,y:0,run:!1},a=new O(t.x,0,t.z),l=new O;let c=0,h=0,f=0,u=0;n.position.set(a.x,vf,a.z),n.rotation.set(0,i,0,"YXZ");const p={dragMode:!1,paused:!1};let g=!1,_=0,m=0;const d=new vn(0,0,0,"YXZ");e.addEventListener("mousedown",P=>{p.dragMode&&(g=!0,_=P.clientX,m=P.clientY)}),addEventListener("mouseup",()=>{g=!1}),addEventListener("mousemove",P=>{!p.dragMode||!g||p.paused||(d.setFromQuaternion(n.quaternion),d.y-=(P.clientX-_)*.004,d.x=Math.max(-1.45,Math.min(1.45,d.x-(P.clientY-m)*.004)),n.quaternion.setFromEuler(d),_=P.clientX,m=P.clientY)});const v=()=>!p.paused&&(s.isLocked||p.dragMode);addEventListener("keydown",P=>{r[P.code]=!0,P.code==="Space"&&b()});function b(){v()&&h<=.001&&(c=Xv)}addEventListener("keyup",P=>{r[P.code]=!1}),addEventListener("blur",()=>{for(const P in r)r[P]=!1});const x=new O,R=new O,T=new O;function C(P){P=Math.min(P,.05),T.set(0,0,0),v()&&(n.getWorldDirection(x),x.y=0,x.normalize(),R.crossVectors(x,n.up).normalize(),(r.KeyW||r.ArrowUp)&&T.add(x),(r.KeyS||r.ArrowDown)&&T.sub(x),(r.KeyD||r.ArrowRight)&&T.add(R),(r.KeyA||r.ArrowLeft)&&T.sub(R),(o.x||o.y)&&T.addScaledVector(x,o.y).addScaledVector(R,o.x));const S=r.ShiftLeft||r.ShiftRight||o.run;if(T.lengthSq()>0){const B=Math.min(1,T.length());T.normalize().multiplyScalar((S?Vv:Mf)*(o.x||o.y?Math.max(.5,B):1))}const M=1-Math.exp(-(h>0?3:12)*P);l.x+=(T.x-l.x)*M,l.z+=(T.z-l.z)*M,K_(a,l.x*P,l.z*P,Gv),c-=Wv*P,h=Math.max(0,h+c*P),h===0&&(c=Math.max(c,0));const I=Math.hypot(l.x,l.z);h===0&&I>.3?(f+=P*I*2.6,u=Math.sin(f)*.035*Math.min(1,I/Mf)):u*=.85,n.position.set(a.x,vf+h+u,a.z)}return{controls:s,update:C,pos:a,state:p,touch:o,jump:b}}function Yv(n){var s;n.updateMatrixWorld(!0);const e=new Map,t=[];n.traverse(r=>{r.isMesh&&t.push(r)});const i=r=>{const o=[];for(let a=r;a&&a!==n;a=a.parent)a.userData.label&&o.at(-1)!==a.userData.label&&o.push(a.userData.label);return o.join(" · ")};for(const r of t){const o=`${r.material.uuid}|${r.castShadow}|${r.renderOrder}`;let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(const h of Object.keys(a.attributes))["position","normal","uv"].includes(h)||a.deleteAttribute(h);a.attributes.uv||a.setAttribute("uv",new xt(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(r.matrixWorld),e.has(o)||e.set(o,{material:r.material,cast:r.castShadow,order:r.renderOrder,geos:[],tris:0,labels:[]});const l=e.get(o),c=i(r);c&&((s=l.labels.at(-1))==null?void 0:s[1])!==c?l.labels.push([l.tris,c]):!c&&l.labels.length&&l.labels.at(-1)[1]!==""&&l.labels.push([l.tris,""]),l.geos.push(a),l.tris+=a.attributes.position.count/3}for(;n.children.length;)n.remove(n.children[0]);for(const r of e.values()){const o=Lu(r.geos,!1);o.computeBoundingSphere();const a=new xe(o,r.material);a.castShadow=r.cast,a.receiveShadow=!0,a.renderOrder=r.order,a.userData.labels=r.labels,n.add(a)}return e.size}function $v(n){const e=n.object.userData.labels;if(e){let t=0,i=e.length-1,s="";for(;t<=i;){const r=t+i>>1;e[r][0]<=n.faceIndex?(s=e[r][1],t=r+1):i=r-1}return s}for(let t=n.object;t;t=t.parent)if(t.userData.label)return t.userData.label;return""}const Ya="/api/suggestions",$a="pixbit-suggestions-v2",Ou={W:"Window table",L:"Long table",E:"East-wall desk",LOCK:"Lockers"},Zv={W:[1.4,1.2],L:[2.8,1.2],E:[1.3,.8],LOCK:[.55,1.25]},Kv=["Corner cabin","Cabin 1","Cabin 2","Lounge","Corridor","Reception","Open workspace","Back wall","East wall","Windows",...Bo.map(n=>n.id==="LOCK"?"Lockers":`${Ou[n.id[0]]} ${n.id}`)],Dn="#ecc828",yf="#3fbf6f",jv=35e6;function Jv({scene:n,camera:e,player:t,world:i,zoneAt:s,renderer:r}){let o=[],a=!1,l=null,c=[],h=[],f=!1,u=!1,p=null;async function g(){try{const U=await fetch(Ya);if(!U.ok)throw new Error(U.status);o=await U.json()}catch{a=!0;try{o=JSON.parse(localStorage.getItem($a))||[]}catch{o=[]}}le()}async function _(U,j,ye){if(a){U.n=U.n??o.reduce((ve,_e)=>Math.max(ve,_e.n||0),0)+1,U.created=U.created??Date.now(),U.files=[...(U.files||[]).filter(ve=>!ye.includes(ve.name)),...j.map(ve=>({name:ve.name,type:ve.type,path:ve.data}))];const te=o.findIndex(ve=>ve.id===U.id);te>=0?o[te]=U:o.push(U);try{localStorage.setItem($a,JSON.stringify(o))}catch{throw new Error("browser storage is full (start the dev server to save files to the project)")}return U}const N=await fetch(Ya,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...U,newFiles:j,removeFiles:ye})}),ge=await N.json().catch(()=>({}));if(!N.ok)throw new Error(ge.error||`server said ${N.status}`);const X=o.findIndex(te=>te.id===ge.id);return X>=0?o[X]=ge:o.push(ge),ge}async function m(U){if(a||await fetch(`${Ya}/${encodeURIComponent(U)}`,{method:"DELETE"}),o=o.filter(j=>j.id!==U),a)try{localStorage.setItem($a,JSON.stringify(o))}catch{}}function d(U,j){let ye=null,N=.9;const ge=s(U,j);for(const X of Bo){if(s(X.x,X.z)!==ge)continue;const te=X.id==="LOCK"?"LOCK":X.id[0];let[ve,_e]=Zv[te]||[1,1];(X.rot||0)%180&&([ve,_e]=[_e,ve]);const Je=Math.hypot(Math.max(0,Math.abs(U-X.x)-ve/2),Math.max(0,Math.abs(j-X.z)-_e/2));Je<N&&(N=Je,ye=X.id==="LOCK"?"Lockers":`${Ou[te]} ${X.id}`)}return ye}const v=U=>Math.round(U*100)/100,b=U=>/^image\/(jpeg|png|gif|webp|avif|svg\+xml|bmp)$/.test(U.type),x=U=>U.src||U.path,R=new nt;R.name="suggestion-marks",n.add(R);const T=new gn(.07,16,12),C=new Fn(.008,.008,1,6),P=new hi({color:"#222"}),S=new O(0,1,0),M={},I=(U,j=1)=>M[U+j]||(M[U+j]=new hi({color:U,transparent:j<1,opacity:j,depthWrite:j===1,side:Nt}));function B(U,j){const ye=document.createElement("canvas");ye.width=ye.height=64;const N=ye.getContext("2d");N.fillStyle="#111",N.beginPath(),N.arc(32,32,28,0,Math.PI*2),N.fill(),N.strokeStyle=j,N.lineWidth=5,N.stroke(),N.fillStyle="#fff",N.font="bold 28px system-ui, sans-serif",N.textAlign="center",N.textBaseline="middle",N.fillText(String(U),32,34);const ge=new Cn(ye);ge.colorSpace=Ut;const X=new Nr(new nr({map:ge,depthTest:!1,transparent:!0}));return X.scale.set(.22,.22,1),X.renderOrder=10,X}function V({x0:U,z0:j,x1:ye,z1:N},ge,X){const te=Math.abs(ye-U),ve=Math.abs(N-j),_e=new xe(new ct(te,ve),I(ge,.18));_e.rotation.x=-Math.PI/2,_e.position.set((U+ye)/2,.02,(j+N)/2),_e.renderOrder=3;const Je=[[U,j],[ye,j],[ye,N],[U,N]].map(([jt,mt])=>new O(jt,.025,mt)),Ot=new Vx(new Kt().setFromPoints(Je),new mu({color:ge}));X.add(_e,Ot)}function q(U,j,ye,N,ge,X){const te=new xe(C,P);te.scale.y=N,te.quaternion.setFromUnitVectors(S,ye),te.position.copy(j).addScaledVector(ye,N/2);const ve=new xe(T,I(ge));ve.position.copy(j).addScaledVector(ye,N);const _e=B(X,ge);_e.position.copy(ve.position).add(new O(0,.18,0)),U.add(te,ve,_e)}function $(){for(const U of[...R.children])R.remove(U),U.traverse(j=>{var ye,N,ge;(N=(ye=j.material)==null?void 0:ye.map)==null||N.dispose(),(j.isLine||((ge=j.geometry)==null?void 0:ge.type)==="PlaneGeometry")&&j.geometry.dispose()});for(const U of o){if(U.status==="done")continue;const j=new nt;j.userData.sid=U.id;const ye=Dn;U.area?(V(U.area,ye,j),q(j,new O((U.area.x0+U.area.x1)/2,0,(U.area.z0+U.area.z1)/2),S,1.1,ye,U.n)):q(j,new O(...U.point),new O(...U.normal||[0,1,0]).normalize(),.28,ye,U.n),R.add(j)}}const W=new nt;n.add(W);function ne(){for(const U of[...W.children])W.remove(U)}const F=document.createElement("style");F.textContent=`
  .sg-modal { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,.5); z-index:20; padding:16px; }
  .sg-hidden { display:none !important; }
  .sg-card { width:min(520px,100%); max-height:100%; overflow:auto; background:#1b1b1b; color:#eee; border:1px solid ${Dn}; border-radius:12px; padding:18px 20px; font-size:14px; box-sizing:border-box; }
  .sg-card h2 { margin:0 0 6px; font-size:18px; color:#fff; }
  .sg-card label.f { display:block; font-size:12px; color:#aaa; margin:10px 0 4px; }
  .sg-card input[type=text], .sg-card textarea { width:100%; box-sizing:border-box; background:#111; color:#fff; border:1px solid #444; border-radius:8px; padding:8px 10px; font:inherit; }
  .sg-card textarea { min-height:110px; resize:vertical; }
  .sg-card input:focus, .sg-card textarea:focus { outline:none; border-color:${Dn}; }
  .sg-meta { color:#999; font-size:12px; margin-top:4px; }
  .sg-drop { margin-top:4px; border:1.5px dashed #555; border-radius:8px; padding:12px; text-align:center; color:#aaa; cursor:pointer; }
  .sg-drop.over, .sg-drop:focus { border-color:${Dn}; color:${Dn}; outline:none; }
  .sg-files { display:grid; grid-template-columns:repeat(auto-fill,minmax(110px,1fr)); gap:8px; margin-top:8px; }
  .sg-file { position:relative; background:#111; border:1px solid #333; border-radius:8px; overflow:hidden; font-size:12px; }
  .sg-file img { width:100%; height:80px; object-fit:cover; display:block; }
  .sg-file .doc { height:80px; display:flex; align-items:center; justify-content:center; color:${Dn}; font-weight:700; font-size:16px; }
  .sg-file span { display:block; padding:4px 6px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .sg-file button { position:absolute; top:4px; right:4px; padding:1px 7px !important; }
  .sg-check { display:flex; align-items:center; gap:8px; margin-top:12px; }
  .sg-reply { margin-top:10px; background:#11261a; border:1px solid #2c5a3c; border-radius:8px; padding:8px 10px; white-space:pre-wrap; font-size:13px; }
  .sg-row { display:flex; gap:8px; margin-top:14px; align-items:center; flex-wrap:wrap; }
  .sg-row .sp { flex:1; }
  .sg-card button, .sg-list button { font:inherit; font-size:13px; padding:7px 12px; border-radius:7px; border:1px solid #555; background:#2a2a2a; color:#eee; cursor:pointer; }
  .sg-card button:hover, .sg-list button:hover { border-color:#999; }
  .sg-card button.pri { background:${Dn}; color:#111; border-color:${Dn}; font-weight:700; }
  .sg-card button.del { color:#ff8a7a; }
  .sg-err { color:#ff8a7a; font-size:13px; margin-top:8px; min-height:1em; }
  .sg-list { position:fixed; top:0; right:0; bottom:0; width:min(380px,100%); background:#161616; color:#eee; border-left:1px solid #333; z-index:15; display:flex; flex-direction:column; font-size:14px; }
  .sg-list header { display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid #333; gap:8px; }
  .sg-list header b { flex:1; font-size:16px; }
  .sg-items { overflow:auto; padding:8px 12px 16px; }
  .sg-item { display:flex; gap:10px; padding:12px 4px; border-bottom:1px solid #2a2a2a; }
  .sg-num { flex:none; width:26px; height:26px; border-radius:50%; background:#111; border:2px solid ${Dn}; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; }
  .sg-num.done { border-color:${yf}; }
  .sg-body { flex:1; min-width:0; }
  .sg-body p { margin:0 0 6px; white-space:pre-wrap; word-break:break-word; }
  .sg-body small { color:#999; display:block; margin-bottom:6px; }
  .sg-badge { display:inline-block; font-size:11px; padding:1px 7px; border-radius:10px; background:#3a3315; color:${Dn}; margin-right:6px; }
  .sg-badge.done { background:#16301f; color:${yf}; }
  .sg-thumbs { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:6px; }
  .sg-thumbs img { width:72px; height:54px; object-fit:cover; border-radius:5px; }
  .sg-thumbs a { font-size:12px; color:${Dn}; }
  .sg-reply-l { font-size:12px; color:#9fd8b0; background:#11261a; border-radius:6px; padding:6px 8px; margin-bottom:6px; white-space:pre-wrap; }
  .sg-empty { color:#999; padding:16px 4px; line-height:1.6; }
  .sg-toast { position:fixed; left:50%; bottom:40px; transform:translateX(-50%); background:rgba(0,0,0,.85); color:#fff; padding:8px 16px; border-radius:6px; z-index:30; font-size:14px; pointer-events:none; opacity:0; transition:opacity .3s; max-width:90vw; text-align:center; }
  .sg-toast.show { opacity:1; }`,document.head.appendChild(F);const ce=document.createElement("div");ce.className="sg-modal sg-hidden",ce.innerHTML=`<div class="sg-card" role="dialog" aria-modal="true" aria-labelledby="sg-title">
    <h2 id="sg-title">New suggestion</h2>
    <label class="f" for="sg-section">Section</label>
    <input type="text" id="sg-section" list="sg-sections" placeholder="e.g. Long table L2, Reception, Cabin 1">
    <datalist id="sg-sections">${Kv.map(U=>`<option value="${U}">`).join("")}</datalist>
    <div class="sg-meta"></div>
    <label class="f" for="sg-text">What needs to change</label>
    <textarea id="sg-text" placeholder="Describe what Claude should change here, e.g. make this table 3 m long and add a plant at the end"></textarea>
    <label class="f">Images and files</label>
    <div class="sg-drop" tabindex="0">Click to add, drop files here, or paste (⌘V). Any file type.</div>
    <input type="file" multiple hidden>
    <div class="sg-files"></div>
    <label class="sg-check"><input type="checkbox" id="sg-done"> Done</label>
    <div class="sg-reply sg-hidden"></div>
    <div class="sg-err" role="alert"></div>
    <div class="sg-row"><button type="button" class="del">Delete</button><span class="sp"></span><button type="button" class="cancel">Cancel</button><button type="button" class="pri">Save</button></div>
  </div>`,document.body.appendChild(ce);const fe=U=>ce.querySelector(U),we=fe("#sg-text"),ze=fe("#sg-section"),je=fe(".sg-drop"),ee=fe("input[type=file]"),de=fe(".sg-files"),pe=fe(".sg-err"),he=fe(".sg-meta"),Oe=fe("#sg-done"),He=fe(".sg-reply"),Ie=document.createElement("div");Ie.className="sg-list sg-hidden",Ie.innerHTML='<header><b>Suggestions</b><button type="button" class="close">Close (L)</button></header><div class="sg-items"></div>',document.body.appendChild(Ie);const et=Ie.querySelector(".sg-items"),ae=document.createElement("div");ae.className="sg-toast",document.body.appendChild(ae);let me;function D(U,j=2600){ae.textContent=U,ae.classList.add("show"),clearTimeout(me),me=setTimeout(()=>ae.classList.remove("show"),j)}const re=U=>U.area?`Area x ${v(U.area.x0)}–${v(U.area.x1)} m, z ${v(U.area.z0)}–${v(U.area.z1)} m`:`Point x ${U.point[0]}, z ${U.point[2]}`;function K(){if(et.innerHTML="",!o.length){et.innerHTML='<div class="sg-empty">No suggestions yet.<br>Aim the dot at something and press <b>C</b>, or press <b>X</b> on two floor corners to mark an area.</div>';return}for(const U of[...o].sort((j,ye)=>j.n-ye.n)){const j=document.createElement("div");j.className="sg-item",j.innerHTML=`<div class="sg-num ${U.status==="done"?"done":""}">${U.n}</div><div class="sg-body"><small></small><p></p><div class="sg-thumbs"></div></div>`;const ye=j.querySelector("small");ye.innerHTML=`<span class="sg-badge ${U.status==="done"?"done":""}">${U.status==="done"?"done":"open"}</span>`,ye.append(U.section||U.zone||""),j.querySelector("p").textContent=U.text,U.reply&&j.querySelector("p").after(Object.assign(document.createElement("div"),{className:"sg-reply-l",textContent:`Claude: ${U.reply}`}));const N=j.querySelector(".sg-thumbs");for(const Je of U.files||[])b(Je)?N.append(Object.assign(document.createElement("img"),{src:x(Je),alt:Je.name,title:Je.name})):N.append(Object.assign(document.createElement("a"),{href:x(Je),textContent:Je.name,target:"_blank",download:Je.name}));const ge=j.querySelector(".sg-body"),X=document.createElement("div");X.className="sg-row",X.style.marginTop="2px";const te=Object.assign(document.createElement("button"),{type:"button",textContent:"Go there"});te.onclick=()=>Ee(U);const ve=Object.assign(document.createElement("button"),{type:"button",textContent:"Open"});ve.onclick=()=>{Ie.classList.add("sg-hidden"),G(U)};const _e=Object.assign(document.createElement("button"),{type:"button",textContent:"Delete"});_e.style.color="#ff8a7a",ue(_e,()=>oe(U)),X.append(te,ve,_e),ge.appendChild(X),et.appendChild(j)}}function le(){$(),K()}function ie(){de.innerHTML="",c.forEach((U,j)=>{const ye=document.createElement("div");ye.className="sg-file",b(U)?ye.append(Object.assign(document.createElement("img"),{src:x(U),alt:U.name})):ye.append(Object.assign(document.createElement("div"),{className:"doc",textContent:(U.name.split(".").pop()||"file").slice(0,5).toUpperCase()})),ye.append(Object.assign(document.createElement("span"),{textContent:U.name,title:U.name}));const N=Object.assign(document.createElement("button"),{type:"button",textContent:"×"});N.setAttribute("aria-label",`Remove ${U.name}`),N.onclick=()=>{U.data||h.push(U.name),c.splice(j,1),ie()},ye.append(N),de.append(ye)})}const Ae=U=>new Promise((j,ye)=>{const N=new FileReader;N.onload=()=>j(N.result),N.onerror=ye,N.readAsDataURL(U)});async function Me(U){pe.textContent="";for(const j of U){let ye=j.name||`pasted-${Date.now()}.png`,N=j.type||"application/octet-stream",ge;if(/^image\/(jpeg|png|webp)$/.test(N)&&j.size>15e5)try{const te=await createImageBitmap(j),ve=Math.min(1,2e3/Math.max(te.width,te.height)),_e=document.createElement("canvas");_e.width=Math.round(te.width*ve),_e.height=Math.round(te.height*ve),_e.getContext("2d").drawImage(te,0,0,_e.width,_e.height),ge=_e.toDataURL("image/jpeg",.85),N="image/jpeg",ye=ye.replace(/\.\w+$/,"")+".jpg"}catch{}if(ge=ge||await Ae(j),c.reduce((te,ve)=>{var _e;return te+(((_e=ve.data)==null?void 0:_e.length)||0)},0)+ge.length>jv){pe.textContent=`${ye} is too big to add (keep new files under ~25 MB per save).`;continue}c.push({name:ye,type:N,data:ge,src:ge})}ie()}je.onclick=()=>ee.click(),je.onkeydown=U=>{(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),ee.click())},ee.onchange=()=>{Me([...ee.files]),ee.value=""},je.ondragover=U=>{U.preventDefault(),je.classList.add("over")},je.ondragleave=()=>je.classList.remove("over"),je.ondrop=U=>{U.preventDefault(),je.classList.remove("over"),Me([...U.dataTransfer.files])},ce.addEventListener("paste",U=>{const j=[...U.clipboardData.files];j.length&&(U.preventDefault(),Me(j))}),we.oninput=()=>{pe.textContent=""};const L=()=>!ce.classList.contains("sg-hidden");let E=()=>{};function G(U){l=U,c=(U.files||[]).map(j=>({...j})),h=[],fe("#sg-title").textContent=U.id?`Suggestion ${U.n}`:U.area?"New suggestion for this area":"New suggestion",ze.value=U.section||[U.near,U.zone].filter(Boolean).join(" · "),he.textContent=re(U)+(U.folder?` · saved in suggestions/${U.folder}/`:""),we.value=U.text||"",Oe.checked=U.status==="done",fe(".sg-check").classList.toggle("sg-hidden",!U.id),He.textContent=U.reply?`Claude: ${U.reply}`:"",He.classList.toggle("sg-hidden",!U.reply),fe(".del").classList.toggle("sg-hidden",!U.id),pe.textContent="",ie(),f=!!document.pointerLockElement,ce.classList.remove("sg-hidden"),t.state.paused=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>we.focus(),30)}function se(){if(ce.classList.add("sg-hidden"),l=null,c=[],h=[],ne(),t.state.paused=!1,f)try{const U=r.domElement.requestPointerLock();U!=null&&U.catch&&U.catch(()=>E())}catch{E()}}fe(".cancel").onclick=se,fe(".pri").onclick=async()=>{const U=we.value.trim();if(!U){pe.textContent="Write what needs to change first.",we.focus();return}const j={...l,text:U,section:ze.value.trim(),status:Oe.checked?"done":"open",updated:Date.now()};delete j.near,j.id||(j.id=`s${Date.now().toString(36)}`);const ye=c.filter(N=>N.data).map(({name:N,type:ge,data:X})=>({name:N,type:ge,data:X}));fe(".pri").disabled=!0,fe(".pri").textContent="Saving…";try{const N=await _(j,ye,h);le(),D(a?`Suggestion ${N.n} saved in this browser`:`Suggestion ${N.n} saved to suggestions/${N.folder}/`),se()}catch(N){pe.textContent=`Could not save: ${N.message}`}finally{fe(".pri").disabled=!1,fe(".pri").textContent="Save"}};function ue(U,j){let ye=0;U.onclick=async()=>{if(!ye){U.textContent="Click again to delete",U.style.borderColor="#ff8a7a",ye=setTimeout(()=>{ye=0,U.textContent="Delete",U.style.borderColor=""},4e3);return}clearTimeout(ye),ye=0,U.disabled=!0;try{await j()}finally{U.disabled=!1,U.textContent="Delete",U.style.borderColor=""}}}async function oe(U){await m(U.id),le(),D(`Suggestion ${U.n} deleted`)}ue(fe(".del"),async()=>{if(l!=null&&l.id){const U=l;se(),await oe(U)}}),Ie.querySelector(".close").onclick=()=>Le(!1);function Le(U=Ie.classList.contains("sg-hidden")){Ie.classList.toggle("sg-hidden",!U),U&&(K(),document.pointerLockElement&&document.exitPointerLock())}function Ee(U){U.view&&(t.pos.set(U.view.x,0,U.view.z),e.position.set(U.view.x,e.position.y,U.view.z),e.quaternion.setFromEuler(new vn(U.view.pitch,U.view.yaw,0,"YXZ"))),Le(!1),D(`${U.n}: ${U.text.slice(0,70)}${U.text.length>70?"…":""}`)}const Re=new L_;Re.far=40;const st=new be(0,0);function k(){Re.setFromCamera(st,e);const U=Re.intersectObjects([R,i],!0).find(N=>N.object.visible&&!N.object.isLine);if(!U)return null;let j=U.object;for(;j&&!j.userData.sid&&j!==n;)j=j.parent;if(j!=null&&j.userData.sid)return{mark:o.find(N=>N.id===j.userData.sid),point:U.point};const ye=U.face?U.face.normal.clone().transformDirection(U.object.matrixWorld):S.clone();return ye.dot(Re.ray.direction)>0&&ye.negate(),{point:U.point,normal:ye,target:Se($v(U),U.point,ye)}}function Se(U,j,ye){return U==="Wall"||U==="Glass wall"?j.x<.35?`Window ${U.toLowerCase()}`:j.x>9.8&&j.z>9.5?"East wall":j.z>18.4?"Back wall":`${U} (${s(j.x,j.z)})`:U||(ye.y>.7&&j.y<.1?"Floor":ye.y<-.7?"Ceiling":"")}function Ue(){const U=new vn().setFromQuaternion(e.quaternion,"YXZ");return{x:v(t.pos.x),z:v(t.pos.z),yaw:v(U.y),pitch:v(U.x)}}function $e(){const U=k();if(!U){D("Aim the dot at something first");return}if(U.mark){G(U.mark);return}const j=U.point;G({point:[v(j.x),v(j.y),v(j.z)],normal:[v(U.normal.x),v(U.normal.y),v(U.normal.z)],zone:s(j.x,j.z),near:U.target||d(j.x,j.z),target:U.target,view:Ue()})}function Ce(){const U=k();if(!U){D("Aim the dot at the floor first");return}const{x:j,z:ye}=U.point;if(!p){p={x:j,z:ye},ne(),q(W,new O(j,0,ye),S,.5,Dn,"1"),D("Corner 1 set. Aim at the opposite corner and press X (Esc cancels).",4e3);return}const N={x0:v(Math.min(p.x,j)),z0:v(Math.min(p.z,ye)),x1:v(Math.max(p.x,j)),z1:v(Math.max(p.z,ye))};if(p=null,ne(),N.x1-N.x0<.2||N.z1-N.z0<.2){D("That area is too small: pick two corners further apart");return}V(N,Dn,W);const ge=(N.x0+N.x1)/2,X=(N.z0+N.z1)/2;G({area:N,point:[v(ge),0,v(X)],normal:[0,1,0],zone:s(ge,X),near:d(ge,X),view:Ue()})}return addEventListener("keydown",U=>{if(L()){if(!u)return;U.code==="Escape"&&(U.preventDefault(),se()),U.code==="Enter"&&(U.metaKey||U.ctrlKey)&&fe(".pri").click();return}u&&(/^(INPUT|TEXTAREA|SELECT)$/.test(U.target.tagName)||(U.code==="Escape"&&p&&(p=null,ne(),D("Area cancelled")),U.code==="KeyC"&&$e(),U.code==="KeyX"&&Ce(),U.code==="KeyL"&&Le()))}),g(),{isOpen:()=>L()||!Ie.classList.contains("sg-hidden"),setEnabled(U){u=U,R.visible=U,U||(L()&&se(),Le(!1),p=null,ne())},onResumeFailed(U){E=U}}}const Sf=1.8,bf=2.2;function wf(n,e,t,i=2.4){const s=new nt;n.add(s);const r=new xe(new on(.012,i-.04,e-.02),y.glass);r.position.set(0,i/2,t*e/2),r.renderOrder=2,s.add(r),w(s,y.chrome,.02,.1,e-.04,0,.05,t*e/2),w(s,y.chrome,.02,.06,.12,0,i-.06,t*.08),w(s,y.chrome,.02,.06,.12,0,.12,t*.08);const o=t*(e-.12);for(const a of[-1,1]){w(s,y.chrome,.028,1,.028,a*.07,1.05,o);for(const l of[.62,1.48])w(s,y.chrome,.12,.02,.02,a*.035,l,o)}return t>0&&w(s,y.blackMatte,.03,.14,.2,0,1.05,t*(e-.02)),s}let Za=null;function Qv(){if(Za)return Za;const n=document.createElement("canvas");n.width=n.height=128;const e=n.getContext("2d");return e.fillStyle="rgba(15,18,24,.8)",e.strokeStyle="#fff",e.lineWidth=8,e.beginPath(),e.arc(64,64,56,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.font="bold 72px system-ui, sans-serif",e.fillText("F",64,68),Za=new Cn(n)}function Ef(n,e,t,i){const s=new Nr(new nr({map:Qv(),depthTest:!1,transparent:!0}));return s.scale.set(.11,.11,1),s.position.set(e,t,i),s.renderOrder=20,s.visible=!1,n.add(s),s}function e1({scene:n,player:e,camera:t}){const i=[],s=(d,v,b)=>{const x=(v-d)/2,R=new nt;n.add(R);const T=new nt;T.position.set(0,0,d),R.add(T);const C=new nt;C.position.set(0,0,v),R.add(C);const P=Ef(T,.1,1.25,x-.12);wf(T,x,1),wf(C,x,-1);const S={minX:-.08,maxX:.08,minZ:d,maxZ:v};Hi.push(S),i.push({name:b,x:0,z:(d+v)/2,t:0,target:0,block:S,marker:P,apply(M){const I=M*Math.PI/2*.95;T.rotation.y=I,C.rotation.y=-I}})};s(4.9,6.5,"balcony door"),s(Jl[0],Jl[1],"meeting room door");for(const d of jo){n.add(d.leaf),Hi.push(d.block);const v=Ef(d.leaf,d.handle[0],d.handle[1],d.handle[2]);i.push({name:d.name,x:d.x,z:d.z,t:0,target:0,block:d.block,marker:v,apply(b){d.leaf.rotation.y=d.closed+(d.open-d.closed)*b}})}const r={visible:!1,material:{opacity:1}},o=ko.map(d=>(n.add(d.leaf),{name:"locker door",x:d.center.x,z:d.center.z,center:d.center,t:0,target:0,block:null,marker:r,apply(v){d.leaf.rotation.y=d.closed+(d.open-d.closed)*v}}));i.push(...o);const a=new O,l=new O,c=()=>{t.getWorldDirection(l);let d=null,v=.96;for(const b of o){if(a.copy(b.center).sub(t.position),a.length()>1.8)continue;const R=a.normalize().dot(l);R>v&&(v=R,d=b)}return d},h=()=>{var x;const d=c();if(d)return d;let v=null,b=Sf;for(const R of i){if(R.center||(x=R.locked)!=null&&x.call(R))continue;const T=Math.hypot(e.pos.x-R.x,e.pos.z-R.z);T<b&&(b=T,v=R)}return v},f=d=>{if(d.target=d.target?0:1,d.target&&d.block){const v=Hi.indexOf(d.block);v>=0&&Hi.splice(v,1)}};addEventListener("keydown",d=>{if(d.code!=="KeyF"||e.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(d.target.tagName))return;const v=h();v&&f(v)});let u=0,p=0;addEventListener("mousedown",d=>{u=d.clientX,p=d.clientY}),addEventListener("click",d=>{if(d.button!==0||e.state.paused||!e.controls.isLocked&&!e.state.dragMode||Math.hypot(d.clientX-u,d.clientY-p)>5&&!e.controls.isLocked)return;const v=c();v&&f(v)});function g(d){var b,x;const v=h();for(const R of i){const T=Math.hypot(e.pos.x-R.x,e.pos.z-R.z);R.marker.visible=T<4.5&&(!((b=R.locked)!=null&&b.call(R))||R.askToOpen),R.marker.material.opacity=R===v||R.askToOpen&&((x=R.locked)!=null&&x.call(R))&&T<Sf?1:.55}for(const R of i)R.t!==R.target&&(R.t=R.target>R.t?Math.min(1,R.t+d*bf):Math.max(0,R.t-d*bf),R.apply(R.t*R.t*(3-2*R.t)),R.block&&R.t===0&&!Hi.includes(R.block)&&Hi.push(R.block))}function _(){const d=h();return d?`${d.center?"F / click":"F"} ${d.target?"close":"open"} ${d.name.toLowerCase()}`:""}return{update:g,prompt:_,byName:d=>i.find(v=>v.name===d),toggle:f}}const t1=1,Ka=8,ja=(7.6+8.65)/2;function Tf(n){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),i=n?"#3ddc84":"#ff5a4f";t.fillStyle="rgba(12,14,18,.85)",t.strokeStyle=i,t.lineWidth=7,t.beginPath(),t.arc(64,64,58,0,Math.PI*2),t.fill(),t.stroke(),t.lineWidth=9,t.lineCap="round",t.beginPath(),n?(t.arc(78,50,17,Math.PI,0),t.lineTo(95,58)):(t.moveTo(47,62),t.lineTo(47,50),t.arc(64,50,17,Math.PI,0),t.lineTo(81,62)),t.stroke(),t.fillStyle=i,t.beginPath(),t.roundRect(36,60,56,40,7),t.fill(),t.fillStyle="rgba(12,14,18,.9)",t.beginPath(),t.arc(64,76,6,0,Math.PI*2),t.fill(),t.fillRect(61,78,6,12);const s=new Cn(e);return s.colorSpace=Ut,s}function n1(){const n=new Ft({color:"#d7a07c",roughness:.75}),e=new Ft({color:"#27324a",roughness:.9}),t=new nt,i=(o,a,l,c,h,f,u,p=0,g=0)=>{const _=new xe(new on(a,l,c),o);_.position.set(h,f,u),_.rotation.set(p,g,0),t.add(_)};i(n,.018,.018,.075,0,0,-.037),i(n,.084,.026,.09,.03,-.004,-.118);for(const[o,a]of[.023,.044,.064].entries())i(n,.019,.026,.034-o*.003,a,-.012,-.072);i(n,.02,.02,.055,-.016,-.012,-.11,0,.6);const s=new xe(new Fn(.046,.05,.34,14),e);s.rotation.x=Math.PI/2,s.position.set(.03,-.006,-.33),t.add(s);const r=new xe(new Fn(.041,.041,.03,14),n);return r.rotation.x=Math.PI/2,r.position.set(.03,-.006,-.165),t.add(r),t.traverse(o=>{o.isMesh&&(o.castShadow=!1)}),t.visible=!1,t}const i1=`
#unlockbox { position: fixed; top: 16px; right: 16px; z-index: 7; display: flex; align-items: center; gap: 12px;
  background: rgba(0,0,0,.86); color: #fff; padding: 10px 16px 10px 10px; border-radius: 6px; pointer-events: none;
  font: 600 14px/1.25 system-ui, sans-serif; letter-spacing: .2px; box-shadow: 0 4px 18px rgba(0,0,0,.35);
  opacity: 0; transform: translateY(-6px); transition: opacity .18s, transform .18s; }
#unlockbox.show { opacity: 1; transform: none; }
#unlockbox svg { width: 44px; height: 44px; flex: none; }
#unlockbox .ring { transform: rotate(-90deg); transform-origin: 22px 22px; }
#unlockbox small { display: block; font-weight: 400; font-size: 12px; color: rgba(255,255,255,.65); margin-top: 2px; }
#unlockbox kbd { display: inline-block; min-width: 18px; padding: 0 5px; border: 1px solid rgba(255,255,255,.7); border-radius: 3px;
  font: 700 12px/18px system-ui, sans-serif; text-align: center; }
`;function s1({scene:n,player:e,camera:t,doors:i}){const s=i.byName("entrance door"),r=()=>e.pos.x>bt,o=Tf(!1),a=Tf(!0),l=new Nr(new nr({map:o,transparent:!0}));l.scale.set(.13,.13,1),l.position.set(hn.x+.06,hn.y+.24,hn.z),l.renderOrder=20,n.add(l);const c=new Ft({color:"#ff3b30",emissive:"#ff3b30",emissiveIntensity:1.6}),h=new xe(new on(.006,.012,.03),c);h.position.set(hn.x+.018,hn.y+.055,hn.z),n.add(h);const f=document.createElement("canvas");f.width=512,f.height=150;const u=f.getContext("2d"),p=new Cn(f);p.colorSpace=Ut;const g=new Nr(new nr({map:p,transparent:!0}));g.scale.set(.4,.4*150/512,1),g.center.set(0,.5),g.position.set(hn.x+.06,hn.y+.24,hn.z-.09),g.renderOrder=20,n.add(g);let _="";const m=(pe,he,Oe,He)=>{const Ie=`${pe}|${he}|${Math.round(Oe*40)}|${He}`;Ie!==_&&(_=Ie,u.clearRect(0,0,512,150),u.fillStyle="rgba(0,0,0,.86)",u.beginPath(),u.roundRect(4,4,504,142,16),u.fill(),u.fillStyle="#fff",u.font="600 46px system-ui, sans-serif",u.textBaseline="alphabetic",u.fillText(pe,30,66),u.fillStyle="rgba(255,255,255,.65)",u.font="400 30px system-ui, sans-serif",u.fillText(he,30,108),u.fillStyle="rgba(255,255,255,.18)",u.fillRect(30,124,452,8),u.fillStyle=He,u.fillRect(30,124,452*Math.max(0,Math.min(1,Oe)),8),p.needsUpdate=!0)},d=n1();n.add(d);const v=new O(hn.x+.004,hn.y+.02,hn.z),b=new O,x=new O,R=new O;let T=0;const C=document.createElement("style");C.textContent=i1,document.head.appendChild(C);const P=document.createElement("div");P.id="unlockbox";const S=2*Math.PI*18;P.innerHTML=`<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="4"/>
    <circle class="ring" cx="22" cy="22" r="18" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-dasharray="${S}" stroke-dashoffset="${S}"/>
    <text x="22" y="27.5" text-anchor="middle" fill="#fff" font-family="system-ui, sans-serif" font-weight="700" font-size="15">F</text></svg>
    <div class="txt"></div>`,document.body.appendChild(P);const M=P.querySelector(".ring"),I=P.querySelector("text"),B=P.querySelector(".txt");let V="";const q=(pe,he,Oe,He,Ie)=>{P.classList.toggle("show",pe),pe&&(he!==V&&(B.innerHTML=he,V=he),M.setAttribute("stroke-dashoffset",String(S*(1-Oe))),M.setAttribute("stroke",He),I.textContent=Ie)};let $="locked",W=0,ne=!1,F=0;const ce=()=>r()&&Math.hypot(e.pos.x-hn.x,e.pos.z-hn.z)<.9,fe=()=>r()&&Math.hypot(e.pos.x-bt,e.pos.z-ja)<1.4,we=()=>e.pos.x>bt-.6&&e.pos.x<bt+.6&&Math.abs(e.pos.z-ja)<.75;s.locked=()=>$!=="open"&&r();const ze=()=>{$="open",F=Ka,ne=!1,W=0,s.target||i.toggle(s),l.material.map=a,l.material.needsUpdate=!0},je=pe=>{var he;return/^(INPUT|TEXTAREA|SELECT)$/.test((he=pe.target)==null?void 0:he.tagName)};addEventListener("keydown",pe=>{pe.code!=="KeyF"||pe.repeat||e.state.paused||je(pe)||$==="locked"&&ce()&&(ne=!0)}),addEventListener("keyup",pe=>{pe.code==="KeyF"&&(ne=!1)}),addEventListener("blur",()=>{ne=!1});function ee(pe){const he=ce();if((!he||$!=="locked")&&(ne=!1),ne?(W+=pe/t1,W>=1&&ze()):W=Math.max(0,W-pe*2.5),$==="open"&&(F-=pe,F<=0&&!we()&&($="closing")),$==="closing"&&(s.target&&i.toggle(s),s.t===0&&($="locked",l.material.map=o,l.material.needsUpdate=!0)),T=(ne?1:0)?Math.min(1,T+pe/.3):Math.max(0,T-pe/.35),d.visible=T>0,d.visible){b.set(.2,-.34,-.32),t.localToWorld(b),t.position.distanceTo(v)<2.4&&r()?x.copy(v):(t.getWorldDirection(R),x.copy(t.position).addScaledVector(R,.6)),d.position.copy(b),d.lookAt(x);const D=T*T*(3-2*T),re=ne&&T===1?.012*(.5+.5*Math.sin(performance.now()/120)):0;d.position.lerpVectors(b,x,D),d.translateZ(re)}const Ie=$==="open"?"#34d058":ne&&T===1?Math.floor(performance.now()/150)%2?"#3aa0ff":"#0b2a55":"#ff3b30";c.color.set(Ie),c.emissive.set(Ie);const et=Math.hypot(e.pos.x-hn.x,e.pos.z-hn.z),ae=r()&&(et<1.8||fe());if(l.visible=g.visible=ae,ae)if($==="open"){const D=Math.max(0,Math.ceil(F));m("Door unlocked",F>0?`Locks again in ${D}s`:"Clear the doorway to lock",Math.max(0,F)/Ka,"#34d058")}else $==="closing"?m("Locking…","Door closing",0,"#ff5a4f"):he?m(W>0?"Unlocking…":"Hold F to unlock",W>0?"Keep holding F":"Place your finger",W,"#fff"):m("Locked","Use fingerprint to unlock",1,"#ff5a4f");const me=he||$!=="locked"&&Math.hypot(e.pos.x-bt,e.pos.z-ja)<5;if($==="locked")!he&&fe()?q(!0,"Use fingerprint to unlock<small>Reader on the wall beside the door</small>",1,"#ff5a4f","🔒"):q(he,W>0?"Unlocking…<small>Keep holding <kbd>F</kbd></small>":"Press and hold <kbd>F</kbd> to unlock<small>Pixbit entrance</small>",W,"#fff","F");else if($==="open"){const D=Math.max(0,Math.ceil(F));q(me,F>0?`Door unlocked<small>Locks again in ${D}s</small>`:"Door unlocked<small>Clear the doorway to lock</small>",Math.max(0,F)/Ka,"#34d058",String(D))}else q(me,"Locking…<small>Door closing</small>",0,"#ff5a4f","🔒")}function de(){return $==="locked"&&ce()?"F hold to unlock door":""}return{update:ee,prompt:de}}const r1=`
#ladiesq { position: fixed; inset: 0; z-index: 9; display: flex; flex-direction: column; align-items: center; justify-content: center;
  pointer-events: none; opacity: 0; transition: opacity .25s; }
#ladiesq.show { opacity: 1; }
#ladiesq .band { position: absolute; left: 0; right: 0; top: 50%; height: 220px; transform: translateY(-58%);
  background: linear-gradient(transparent, rgba(0,0,0,.72) 22%, rgba(0,0,0,.72) 78%, transparent); }
#ladiesq .big { position: relative; font: italic 900 clamp(48px, 9vw, 112px)/1 Impact, 'Arial Black', system-ui, sans-serif;
  letter-spacing: 2px; text-transform: uppercase; color: #f2c21b; -webkit-text-stroke: 3px #000;
  text-shadow: 4px 4px 0 #000, 0 0 24px rgba(0,0,0,.6); transform: scale(1.6); transition: transform .35s cubic-bezier(.2,1.6,.4,1); }
#ladiesq.show .big { transform: scale(1); }
#ladiesq .big.red { color: #d8261c; }
#ladiesq .sub { position: relative; margin-top: 14px; display: flex; gap: 28px; font: 800 22px/1 system-ui, sans-serif; color: #fff;
  text-transform: uppercase; letter-spacing: 1px; text-shadow: 2px 2px 0 #000; }
#ladiesq button { pointer-events: auto; cursor: pointer; background: none; border: 0; color: inherit; font: inherit; text-shadow: inherit;
  display: flex; align-items: center; gap: 10px; padding: 6px 10px; }
#ladiesq kbd { display: inline-block; min-width: 30px; padding: 3px 6px; border: 2px solid #fff; border-radius: 5px; font: 800 18px/1.2 system-ui, sans-serif;
  background: rgba(0,0,0,.5); text-shadow: none; }
`;let wr=null;function o1(n){try{wr||(wr=new(window.AudioContext||window.webkitAudioContext));const e=wr.currentTime,t=n?[[392,0],[523,.12],[659,.24],[784,.36],[1047,.5]]:[[160,0],[120,.22]];for(const[i,s]of t){const r=wr.createOscillator(),o=wr.createGain();r.type=n?"triangle":"sawtooth",r.frequency.value=i;const a=n?s===.5?.7:.16:.3;o.gain.setValueAtTime(1e-4,e+s),o.gain.exponentialRampToValueAtTime(n?.18:.12,e+s+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+s+a),r.connect(o).connect(wr.destination),r.start(e+s),r.stop(e+s+a+.05)}}catch{}}function a1({scene:n,player:e,doors:t}){const i=t.byName("ladies toilet");if(!i)return{update(){},prompt:()=>""};const s=new Sc("#fff4ea",6,4.5,1.6);s.position.set(i.x+1.2,2.7,i.z+.5),n.add(s);const r=document.createElement("style");r.textContent=r1,document.head.appendChild(r);const o=document.createElement("div");o.id="ladiesq",o.innerHTML='<div class="band"></div><div class="big"></div><div class="sub"></div>',document.body.appendChild(o);const a=o.querySelector(".big"),l=o.querySelector(".sub");let c=!1,h=!1,f=0,u=!1;i.locked=()=>!c,i.askToOpen=!0;const p=()=>Math.hypot(e.pos.x-i.x,e.pos.z-i.z)<1.8&&e.pos.x<i.x,g=(R,T,C,P)=>{a.textContent=R,a.classList.toggle("red",T),l.innerHTML=C,o.classList.remove("show"),o.offsetWidth,o.classList.add("show"),f=P?performance.now()+P:0},_=()=>{o.classList.remove("show"),h=!1,f=0},m=()=>{h=!0,g("Are u gay?",!1,'<button data-a="y"><kbd>Y</kbd> Yes</button><button data-a="n"><kbd>N</kbd> No</button>',0)},d=R=>{h&&(h=!1,R?(c=!0,i.target||t.toggle(i),g("Respect +",!1,"<span>Welcome in</span>",2200)):g("Access denied",!0,"<span>Ladies only</span>",2e3),o1(R))};l.addEventListener("click",R=>{const T=R.target.closest("button");T&&d(T.dataset.a==="y")});const v=R=>{var T;return/^(INPUT|TEXTAREA|SELECT)$/.test((T=R.target)==null?void 0:T.tagName)};addEventListener("keydown",R=>{if(!(R.repeat||e.state.paused||v(R))){if(h){R.code==="KeyY"?d(!0):(R.code==="KeyN"||R.code==="Escape")&&d(!1);return}R.code==="KeyF"&&!c&&p()&&m()}});function b(){h&&!p()&&_(),f&&performance.now()>f&&_(),i.t>0&&(u=!0),c&&u&&i.t===0&&!i.target&&(c=!1,u=!1)}function x(){return!c&&!h&&p()?"F open ladies toilet":""}return{update:b,prompt:x}}const l1=3.4,Un=640,wi=360,bn=20,Ja=Un/bn,Qa=(wi-40)/bn,Er=[{name:"Snake",ready:!0},{name:"Pong",ready:!1},{name:"Tetris",ready:!1},{name:"Car Race",ready:!1}];function c1({scene:n,player:e}){const t=document.createElement("canvas");t.width=Un,t.height=wi;const i=t.getContext("2d"),s=new Cn(t);s.colorSpace=Ut;const r=new xe(new ct(zi.w,zi.h),new hi({map:s,toneMapped:!1}));r.position.set(zi.x+.003,zi.y,zi.z),r.rotation.y=Math.PI/2,r.visible=!1,n.add(r);const o=document.createElement("div");Object.assign(o.style,{position:"fixed",inset:"0",background:"#000",display:"none",zIndex:"20",alignItems:"center",justifyContent:"center"}),document.body.appendChild(o);let a="off",l=0,c=!1,h,f,u,p,g,_=0,m,d=0,v=.11;const b=()=>Math.hypot(e.pos.x-zi.x,e.pos.z-zi.z)<l1&&e.pos.x>0&&e.pos.z>22.8;function x(F){c=F,F?(o.appendChild(t),Object.assign(t.style,{width:"min(100vw, 177.78vh)",height:"auto",imageRendering:"pixelated"}),o.style.display="flex"):(o.style.display="none",t.parentNode&&t.parentNode.removeChild(t))}function R(){a="menu",l=0,r.visible=!0,e.state.paused=!0,q()}function T(){a="off",r.visible=!1,e.state.paused=!1,x(!1)}function C(){h=[{x:8,y:8},{x:7,y:8},{x:6,y:8}],f={x:1,y:0},u=f,g=0,m=!1,d=0,v=.11,P(),a="snake"}function P(){do p={x:Math.floor(Math.random()*Ja),y:Math.floor(Math.random()*Qa)};while(h.some(F=>F.x===p.x&&F.y===p.y))}function S(){f=u;const F={x:h[0].x+f.x,y:h[0].y+f.y};if(F.x<0||F.y<0||F.x>=Ja||F.y>=Qa||h.some(ce=>ce.x===F.x&&ce.y===F.y)){m=!0,_=Math.max(_,g);return}h.unshift(F),F.x===p.x&&F.y===p.y?(g++,v=Math.max(.06,v-.003),P()):h.pop()}const M=(F,ce=600)=>`${ce} ${F}px "Avenir Next", "Helvetica Neue", Arial, sans-serif`;function I(F){i.fillStyle="rgba(255,255,255,.55)",i.font=M(14,500),i.textAlign="center",i.fillText(F,Un/2,wi-14)}function B(){const F=i.createLinearGradient(0,0,Un,wi);F.addColorStop(0,"#1a1f3a"),F.addColorStop(1,"#3a1d4f"),i.fillStyle=F,i.fillRect(0,0,Un,wi),i.fillStyle="#fff",i.font=M(30,700),i.textAlign="left",i.fillText("Pixbit Arcade",40,56),i.fillStyle="#b46cff",i.fillRect(40,68,120,3),Er.forEach((ce,fe)=>{const we=104+fe*50,ze=fe===l;i.fillStyle=ze?"rgba(255,255,255,.14)":"rgba(255,255,255,.04)",i.fillRect(40,we,Un-80,40),ze&&(i.fillStyle="#5fe3ff",i.fillRect(40,we,5,40)),i.fillStyle=ce.ready?"#fff":"rgba(255,255,255,.35)",i.font=M(20,ze?700:500),i.textAlign="left",i.fillText(ce.name,62,we+27),i.font=M(14,500),i.textAlign="right",i.fillStyle=ce.ready?"#7dff9a":"rgba(255,255,255,.35)",i.fillText(ce.ready?"PLAY":"coming soon",Un-58,we+26)}),I("↑ ↓ choose · Enter play · F full screen · E turn TV off")}function V(){i.fillStyle="#0d1410",i.fillRect(0,0,Un,wi),i.fillStyle="#15241a",i.fillRect(0,0,Un,40),i.fillStyle="#7dff9a",i.font=M(18,700),i.textAlign="left",i.fillText(`SNAKE   score ${g}`,16,27),i.textAlign="right",i.fillStyle="rgba(255,255,255,.5)",i.font=M(13,500),i.fillText(`best ${_} · arrows/WASD · F full screen · Backspace menu`,Un-14,26);const F=40;i.fillStyle="rgba(255,255,255,.03)";for(let ce=0;ce<Ja;ce++)for(let fe=0;fe<Qa;fe++)(ce+fe)%2&&i.fillRect(ce*bn,F+fe*bn,bn,bn);i.fillStyle="#ff4f6d",i.beginPath(),i.arc(p.x*bn+bn/2,F+p.y*bn+bn/2,bn/2-3,0,Math.PI*2),i.fill(),h.forEach((ce,fe)=>{i.fillStyle=fe===0?"#c8ffd4":`hsl(${135-Math.min(fe,30)}, 80%, ${55-Math.min(fe,20)}%)`,i.fillRect(ce.x*bn+1,F+ce.y*bn+1,bn-2,bn-2)}),m&&(i.fillStyle="rgba(0,0,0,.6)",i.fillRect(0,0,Un,wi),i.fillStyle="#fff",i.textAlign="center",i.font=M(40,800),i.fillText("GAME OVER",Un/2,wi/2-14),i.font=M(18,500),i.fillText(`score ${g} · best ${_}`,Un/2,wi/2+20),I("Enter play again · Backspace menu"))}function q(){a==="menu"?B():a==="snake"&&V(),s.needsUpdate=!0}const $={ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1],ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0]};addEventListener("keydown",F=>{if(!/^(INPUT|TEXTAREA|SELECT)$/.test(F.target.tagName)){if(a==="off"){F.code==="KeyE"&&b()&&!e.state.paused&&(R(),F.stopImmediatePropagation());return}if(F.stopImmediatePropagation(),F.code!=="Escape"&&F.preventDefault(),F.code==="KeyF"){x(!c);return}if(a==="menu"){if((F.code==="ArrowUp"||F.code==="KeyW")&&(l=(l+Er.length-1)%Er.length),(F.code==="ArrowDown"||F.code==="KeyS")&&(l=(l+1)%Er.length),(F.code==="Enter"||F.code==="Space")&&Er[l].ready&&C(),F.code==="KeyE"||F.code==="Backspace"){T();return}}else if(a==="snake"){const ce=$[F.code];ce&&!m&&!(ce[0]===-f.x&&ce[1]===-f.y)&&(u={x:ce[0],y:ce[1]}),m&&(F.code==="Enter"||F.code==="Space")&&C(),F.code==="Backspace"&&(a="menu")}q()}},!0);function W(F){a!=="snake"||m||(d+=Math.min(F,v),d>=v&&(d-=v,S(),q()))}function ne(){return a!=="off"?a==="menu"?"TV on":"playing snake":b()?"E play TV games":""}return{update:W,prompt:ne,isOn:()=>a!=="off"}}const h1=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0,Tr=n=>`<svg viewBox="0 0 24 24">${n}</svg>`,el={jump:Tr('<path d="M12 19V6"/><path d="M6 11l6-6 6 6"/><path d="M5 21h14"/>'),doorOpen:Tr('<path d="M4 21h16"/><path d="M6 21V3h9v2"/><path d="M15 21V5l-5 1.5V21"/><path d="M11.8 13h.01"/><path d="M18 9l2 2-2 2"/>'),doorClose:Tr('<path d="M4 21h16"/><path d="M6 21V3h12v18"/><path d="M15 12h.01"/>'),rotate:Tr('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),tv:Tr('<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/><path d="M10 9l4 2-4 2z"/>')};async function f1(){var n,e,t,i;try{const s=document.documentElement;document.fullscreenElement||await(((n=s.requestFullscreen)==null?void 0:n.call(s,{navigationUI:"hide"}))??((e=s.webkitRequestFullscreen)==null?void 0:e.call(s)))}catch{}try{await((i=(t=screen.orientation)==null?void 0:t.lock)==null?void 0:i.call(t,"landscape"))}catch{}}function u1({player:n,camera:e}){const{touch:t}=n,i=document.createElement("div");i.id="touch",i.innerHTML=`
    <div class="tj-base"><div class="tj-knob"></div></div>
    <button class="tb tb-jump" type="button" aria-label="Jump">${el.jump}</button>
    <button class="tb tb-act off" type="button" aria-label="Use"></button>
    <div class="t-rotate">${el.rotate}<div>Rotate your phone to landscape</div></div>`;const s=document.createElement("style");s.textContent=`
    #touch { position: fixed; inset: 0; z-index: 6; touch-action: none; user-select: none; -webkit-user-select: none; -webkit-touch-callout: none; }
    #touch.off { display: none; }
    .tj-base { position: absolute; width: 130px; height: 130px; margin: -65px 0 0 -65px; border-radius: 50%;
      background: rgba(255,255,255,.10); border: 2px solid rgba(255,255,255,.35); opacity: .45; pointer-events: none; }
    .tj-knob { position: absolute; left: 50%; top: 50%; width: 56px; height: 56px; margin: -28px 0 0 -28px; border-radius: 50%;
      background: rgba(236,200,40,.75); border: 2px solid rgba(255,255,255,.7); }
    .tb { position: absolute; border-radius: 50%; border: 2px solid rgba(255,255,255,.55); background: rgba(20,20,20,.5);
      color: #fff; padding: 0; display: flex; align-items: center; justify-content: center; touch-action: none; }
    .tb svg { width: 55%; height: 55%; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; pointer-events: none; }
    .tb:active, .tb.on { background: rgba(236,200,40,.7); color: #111; }
    .tb.off { display: none; }
    .tb-jump { right: max(18px, env(safe-area-inset-right)); bottom: max(26px, env(safe-area-inset-bottom)); width: 54px; height: 54px; }
    .tb-act { right: max(18px, env(safe-area-inset-right)); bottom: max(92px, calc(env(safe-area-inset-bottom) + 66px)); width: 48px; height: 48px;
      background: rgba(236,200,40,.55); border-color: rgba(255,255,255,.8); }
    .t-rotate { display: none; position: fixed; inset: 0; z-index: 20; background: #111; color: #fff; font: 600 16px system-ui, sans-serif;
      flex-direction: column; align-items: center; justify-content: center; gap: 18px; text-align: center; }
    .t-rotate svg { width: 72px; height: 72px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round;
      animation: t-rot 1.8s ease-in-out infinite; }
    @keyframes t-rot { 0%, 25% { transform: rotate(0deg); } 60%, 100% { transform: rotate(-90deg); } }
    @media (orientation: portrait) { #touch:not(.off) .t-rotate { display: flex; } }
    #byline { display: none; }
    #hud { left: 50%; transform: translateX(-50%); bottom: 14px; font-size: 13px; }
  `,document.head.appendChild(s),document.body.appendChild(i);const r=i.querySelector(".tj-base"),o=i.querySelector(".tj-knob"),a=55;let l=null,c=0,h=0,f=null,u=0,p=0;const g=new vn(0,0,0,"YXZ");r.style.display="none";const _=T=>!!(T.closest&&T.closest(".tb"));i.addEventListener("touchstart",T=>{for(const C of T.changedTouches)_(C.target)||(C.clientX<innerWidth/2&&l===null?(l=C.identifier,c=C.clientX,h=C.clientY,r.style.left=c+"px",r.style.top=h+"px",r.style.display="block",o.style.transform="translate(0,0)"):C.clientX>=innerWidth/2&&f===null&&(f=C.identifier,u=C.clientX,p=C.clientY));_(T.target)||T.preventDefault()},{passive:!1}),i.addEventListener("touchmove",T=>{for(const C of T.changedTouches)if(C.identifier===l){let P=C.clientX-c,S=C.clientY-h;const M=Math.hypot(P,S);M>a&&(P*=a/M,S*=a/M),o.style.transform=`translate(${P}px, ${S}px)`,t.x=P/a,t.y=-S/a,t.run=M>a*1.15}else C.identifier===f&&!n.state.paused&&(g.setFromQuaternion(e.quaternion),g.y-=(C.clientX-u)*.006,g.x=Math.max(-1.45,Math.min(1.45,g.x-(C.clientY-p)*.006)),e.quaternion.setFromEuler(g),u=C.clientX,p=C.clientY);T.preventDefault()},{passive:!1});const m=T=>{for(const C of T.changedTouches)C.identifier===l&&(l=null,t.x=t.y=0,t.run=!1,r.style.display="none"),C.identifier===f&&(f=null)};i.addEventListener("touchend",m),i.addEventListener("touchcancel",m);const d=(T,C)=>{const P=i.querySelector(T);P.addEventListener("touchstart",S=>{S.preventDefault(),S.stopPropagation(),C()},{passive:!1}),P.addEventListener("click",S=>S.preventDefault())};d(".tb-jump",()=>n.jump());const v=i.querySelector(".tb-act");let b=null,x="",R=null;d(".tb-act",()=>{b&&(R=b,dispatchEvent(new KeyboardEvent("keydown",{code:b,bubbles:!0})))});for(const T of["touchend","touchcancel"])v.addEventListener(T,()=>{R&&(dispatchEvent(new KeyboardEvent("keyup",{code:R,bubbles:!0})),R=null)});return{show(T){i.classList.toggle("off",!T),T&&f1()},setAction(T){let C="",P=null;/^F (open|close|collect|hold)/.test(T)?(P="KeyF",C=T.startsWith("F close")?"doorClose":"doorOpen"):T&&(P="KeyE",C="tv"),b=P,v.classList.toggle("off",!P),C!==x&&(v.innerHTML=C?el[C]:"",v.setAttribute("aria-label",T),x=C)}}}const Af="pixbit-gamemode",tl={free:'<path d="M8 21l3-6 3 3v3"/><path d="M11 15l1-5-3 2-1 3"/><path d="M12 10l3 2h3"/><circle cx="13.5" cy="5" r="2"/>',hunt:'<circle cx="6.5" cy="15.5" r="3.5"/><circle cx="17.5" cy="15.5" r="3.5"/><path d="M10 15h4M5 12l2-7h3v10M19 12l-2-7h-3v10"/>',play:'<path d="M7 4l13 8-13 8z"/>'};function d1({list:n}){const e=[{id:"free",name:"Free Walk",desc:"Just explore the office",start(){},stop(){},update(){}}];let t=e[0];function i(){n.innerHTML="";for(const o of e){const a=o===t,l=document.createElement("button");l.type="button",l.className="mode-btn"+(a?" on":""),l.innerHTML=`<svg viewBox="0 0 24 24">${a?tl.play:tl[o.id]||tl.play}</svg>
        <span class="name">${a?"Play · ":""}${o.name}<span class="desc">${o.desc||""}</span></span><span class="arrow">&rsaquo;</span>`,l.addEventListener("click",()=>s(o.id)),n.appendChild(l)}}function s(o){const a=e.find(l=>l.id===o)||e[0];a!==t&&(t.stop(),t=a,a.start());try{localStorage.setItem(Af,a.id)}catch{}i()}function r(o){e.push(o);let a=null;try{a=localStorage.getItem(Af)}catch{}i(),a===o.id&&s(o.id)}return i(),{register:r,select:s,update:(o,a)=>t.update(o,a),get current(){return t}}}const Rf="pixbit-hunt-best",p1=2.5,m1=[{name:"Keycard",kind:"card",locker:!0},{name:"Golden mug",kind:"mug",spots:[[-1.6,1.15,12.5],[-1.2,1.15,17]]},{name:"Stapler",kind:"stapler",spots:[[7.5,1.1,4.4],[8.3,1.1,3.6]]},{name:"Game controller",kind:"pad",spots:[[4.6,.9,24.3],[5.4,1.1,26.4]]},{name:"Sticky note",kind:"note",spots:[[4.5,1.25,12],[2.2,1.25,13.6]]},{name:"Trophy star",kind:"star",spots:[[9.85,1.5,6.1],[9.4,1.3,7.2]]},{name:"Marker pen",kind:"pen",spots:[[2,1.1,20.4],[1.4,1.1,21.6]]},{name:"Plant badge",kind:"badge",spots:[[1.2,1.2,7],[2.4,1.2,4.2]]}],g1=new Ft({color:"#ffcf3a",emissive:"#c88a00",emissiveIntensity:.9,roughness:.35,metalness:.6}),Cf=new nr({map:null,color:"#ffe27a",transparent:!0,opacity:.55,depthWrite:!1,blending:rl});function x1(){const n=document.createElement("canvas");n.width=n.height=64;const e=n.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Cn(n)}function _1(n){const e=new nt,t=(i,s=0,r=0,o=0)=>{const a=new xe(i,g1);return a.position.set(s,r,o),e.add(a),a};switch(n){case"card":t(new on(.085,.054,.004));break;case"mug":t(new Fn(.04,.035,.09,16)),t(new lr(.028,.008,8,14),.05,0,0);break;case"stapler":t(new on(.15,.03,.04)),t(new on(.12,.02,.035),-.01,.02,0);break;case"pad":t(new on(.13,.035,.07)),t(new gn(.03,10,8),-.05,-.01,.04),t(new gn(.03,10,8),.05,-.01,.04);break;case"note":t(new on(.1,.1,.004));break;case"star":{const i=new Yo;for(let s=0;s<10;s++){const r=s%2?.025:.06,o=Math.PI/5*s+Math.PI/2;s?i.lineTo(Math.cos(o)*r,Math.sin(o)*r):i.moveTo(Math.cos(o)*r,Math.sin(o)*r)}i.closePath(),t(new _c(i,{depth:.015,bevelEnabled:!1}));break}case"pen":{const i=t(new Fn(.01,.01,.14,10));i.rotation.z=Math.PI/2;break}default:t(new Fn(.045,.045,.01,20)).rotation.x=Math.PI/2}return e}function v1({scene:n,camera:e,player:t}){const i=new nt;i.visible=!1,n.add(i),Cf.map=x1();const s=ko.find(S=>S.center.y>.9&&S.center.y<1.4)||ko[0];let r=[],o=!1,a=0,l=0,c=!1,h=!1,f=null;try{f=parseFloat(localStorage.getItem(Rf))||null}catch{}const u=document.createElement("div");Object.assign(u.style,{position:"fixed",top:"14px",right:"14px",zIndex:"5",color:"#fff",font:"600 14px system-ui, sans-serif",background:"rgba(0,0,0,.5)",borderLeft:"4px solid #ecc828",borderRadius:"6px",padding:"8px 12px",display:"none",pointerEvents:"none",minWidth:"170px"}),document.body.appendChild(u);const p=document.createElement("div");Object.assign(p.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:"8",color:"#fff",textAlign:"center",font:"600 15px system-ui, sans-serif",background:"rgba(20,20,20,.92)",border:"1px solid #ecc828",borderRadius:"14px",padding:"24px 32px",display:"none"}),document.body.appendChild(p);let g="",_=0;const m=S=>`${Math.floor(S/60)}:${String(Math.floor(S%60)).padStart(2,"0")}`;function d(){const S=r.filter(M=>!M.got);u.innerHTML=`<div style="color:#ecc828;letter-spacing:.5px">SCAVENGER HUNT</div>
      <div>Found ${a} / ${r.length} &nbsp;·&nbsp; ${m(l)}</div>
      ${f?`<div style="font-weight:400;color:#bbb">Best ${m(f)}</div>`:""}
      <div style="font-weight:400;color:#ddd;margin-top:4px">${g||(S.length?"H = hint":"")}</div>`}function v(S){if(S.locker){const I=s.closed;return new O(s.center.x-.12*Math.cos(I),s.center.y-.04,s.center.z+.12*Math.sin(I))}const M=S.spots[Math.floor(Math.random()*S.spots.length)];return new O(M[0],M[1],M[2])}function b(){i.clear(),r=m1.map(S=>{const M=_1(S.kind),I=v(S);if(M.position.copy(I),S.locker)M.scale.setScalar(.9);else{const B=new Nr(Cf);B.scale.setScalar(.5),M.add(B)}return i.add(M),{...S,mesh:M,base:I,got:!1,zone:Tc(I.x,I.z)}}),a=0,l=0,h=!1,c=!0,g="",p.style.display="none",d()}const x=new O,R=new O;function T(){e.getWorldDirection(R);let S=null,M=.93;for(const I of r){if(I.got||I.locker&&Math.abs(s.leaf.rotation.y-s.closed)<.5||(x.copy(I.mesh.position).sub(e.position),x.length()>p1))continue;const V=x.normalize().dot(R);V>M&&(M=V,S=I)}return S}function C(S){S.got=!0,a++,i.remove(S.mesh),g=`Got the ${S.name.toLowerCase()}!`,_=2.5,a===r.length?P():d()}function P(){c=!1,h=!0;const S=!f||l<f;if(S){f=l;try{localStorage.setItem(Rf,String(l))}catch{}}d(),p.innerHTML=`<div style="font-size:24px;color:#ecc828;margin-bottom:6px">All 8 found!</div>
      <div>Time ${m(l)}${S?" &nbsp;🏆 new best":` &nbsp;·&nbsp; best ${m(f)}`}</div>
      <div style="font-weight:400;color:#bbb;margin-top:10px">Press Enter to play again, or Esc to change the game mode</div>`,p.style.display="block"}return addEventListener("keydown",S=>{if(!(!o||t.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(S.target.tagName)))if(S.code==="KeyF"){const M=T();M&&C(M)}else if(S.code==="KeyH"&&c){const M=r.find(I=>!I.got);M&&(g=`Hint: ${M.name} – ${M.locker?"inside a locker in the ":"in the "}${M.zone}`,_=6,d())}else S.code==="Enter"&&h&&b()}),{id:"hunt",name:"Scavenger Hunt",desc:"Find 8 hidden gold items. F to collect, H for a hint. One is in a locker.",start(){o=!0,i.visible=!0,u.style.display="block",b()},stop(){o=!1,c=!1,i.visible=!1,u.style.display="none",p.style.display="none"},update(S,M){if(!o)return;const I=performance.now()/1e3;for(const B of r)B.got||B.locker||(B.mesh.rotation.y=I*1.6,B.mesh.position.y=B.base.y+Math.sin(I*2+B.base.x)*.03);c&&M&&(l+=S,_>0&&(_-=S)<=0&&(g=""),d())},prompt(){if(!o||!c)return"";const S=T();return S?`F collect ${S.name.toLowerCase()}`:""}}}const an=new zx({antialias:!0,powerPreference:"high-performance"});an.setPixelRatio(Math.min(devicePixelRatio,2));an.setSize(innerWidth,innerHeight);an.outputColorSpace=Ut;an.toneMapping=Ff;an.toneMappingExposure=.9;an.shadowMap.enabled=!0;an.shadowMap.type=Nf;document.body.appendChild(an.domElement);const Mn=new du,Fu=new ht("#a8aaa4");Mn.background=Fu;Mn.fog=new pc(Fu,40,1100);const M1=new ql(an);Mn.environment=M1.fromScene(new D_,.04).texture;Mn.environmentIntensity=.45;const fi=new On(78,innerWidth/innerHeight,.05,1500);Mn.add(new T_("#f6f7ff","#7a7066",.8));const ui=new C_("#fff3e2",1.5);ui.position.set(-22,20,4);ui.target.position.set(5,0,10);ui.castShadow=!0;ui.shadow.mapSize.set(2048,2048);Object.assign(ui.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:80});ui.shadow.bias=-4e-4;ui.shadow.normalBias=.03;Mn.add(ui,ui.target);const ku=new Sc("#ffe8c8",6,12,1.5);ku.position.set(8.7,2.6,7.8);Mn.add(ku);const Jo=new nt;Uv(Jo);Yv(Jo);Mn.add(Jo);const Qt=qv(fi,an.domElement,{spawn:xf,yaw:xf.yaw}),ji=document.getElementById("overlay"),ir=h1()?u1({player:Qt,camera:fi}):null;ir&&ir.show(!1);ji.addEventListener("click",()=>{if(ir){Io(),ir.show(!0);return}try{const n=Qt.controls.domElement.requestPointerLock();n&&n.catch&&n.catch(()=>Io())}catch{Io()}});function Io(){Qt.state.dragMode=!0,ji.classList.add("hidden"),nc.dataset.mode="drag"}document.addEventListener("pointerlockerror",Io);addEventListener("keydown",n=>{n.code==="Escape"&&Qt.state.dragMode&&!Hr.isOpen()&&(Qt.state.dragMode=!1,ji.classList.remove("hidden"))});Qt.controls.addEventListener("lock",()=>ji.classList.add("hidden"));Qt.controls.addEventListener("unlock",()=>{Hr.isOpen()||ji.classList.remove("hidden")});const zo=e1({scene:Mn,player:Qt,camera:fi}),Pf=s1({scene:Mn,player:Qt,camera:fi,doors:zo}),Lf=a1({scene:Mn,player:Qt,doors:zo}),If=c1({scene:Mn,player:Qt}),Hr=Jv({scene:Mn,camera:fi,player:Qt,world:Jo,zoneAt:Tc,renderer:an});Hr.onResumeFailed(()=>ji.classList.remove("hidden"));const ec=d1({list:ji.querySelector(".modes")}),tc=v1({scene:Mn,camera:fi,player:Qt});ec.register(tc);let Gr=!1;try{Gr=localStorage.getItem("pixbit-devmode")==="1"}catch{}const Ho=document.getElementById("devbox");function Ac(n){Gr=n,document.body.classList.toggle("dev",n),Ho.checked=n,Hr.setEnabled(n),Nu(n);try{localStorage.setItem("pixbit-devmode",n?"1":"0")}catch{}}Ho.addEventListener("click",n=>n.stopPropagation());document.getElementById("devsw").addEventListener("click",n=>n.stopPropagation());Ho.addEventListener("change",()=>Ac(Ho.checked));addEventListener("keydown",n=>{n.code==="KeyP"&&!/^(INPUT|TEXTAREA|SELECT)$/.test(n.target.tagName)&&!Hr.isOpen()&&Ac(!Gr)});Ac(Gr);let Cr=!0;addEventListener("keydown",n=>{n.code==="KeyQ"&&(Cr=!Cr,ui.castShadow=Cr,an.setPixelRatio(Cr?Math.min(devicePixelRatio,2):1),an.setSize(innerWidth,innerHeight))});const nl=document.getElementById("zone"),nc=document.getElementById("hud");let Df="",il=0,Eo=0,sl=0;function y1(n){const e=Tc(Qt.pos.x,Qt.pos.z);e!==Df&&(Df=e,nl.textContent=e,nl.classList.add("show"),il=2.2),il>0&&(il-=n)<=0&&nl.classList.remove("show")}addEventListener("resize",()=>{fi.aspect=innerWidth/innerHeight,fi.updateProjectionMatrix(),an.setSize(innerWidth,innerHeight)});const S1=new P_;an.setAnimationLoop(()=>{const n=S1.getDelta();if(Qt.update(n),zo.update(n),Pf.update(n),Lf.update(n),If.update(n),ec.update(n,ji.classList.contains("hidden")),y1(n),sl++,Eo+=n,Eo>.5){const e=If.prompt()||ec.current===tc&&tc.prompt()||zo.prompt()||Pf.prompt()||Lf.prompt();ir?(ir.setAction(e),nc.textContent=""):nc.textContent=`${e?e.toUpperCase()+" · ":""}${Math.round(sl/Eo)} fps · ${Cr?"high":"low"} quality (Q) · ${Gr?"DEV · C suggest · X area · L list":"dev mode off (P)"}${Qt.state.dragMode?" · drag mouse to look":""}`,sl=0,Eo=0}an.render(Mn,fi)});Object.assign(window,{__office:{scene:Mn,camera:fi,player:Qt,renderer:an}});
