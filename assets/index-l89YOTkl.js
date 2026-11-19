(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ml="170",Wu=0,$l=1,Xu=2,Uh=1,Nh=2,Kn=3,Ei=0,je=1,Ie=2,yi=0,ws=1,Zl=2,Kl=3,jl=4,Yu=5,Bi=100,qu=101,$u=102,Zu=103,Ku=104,ju=200,Ju=201,Qu=202,tf=203,Sa=204,Ea=205,ef=206,nf=207,sf=208,rf=209,of=210,af=211,lf=212,cf=213,hf=214,ba=0,wa=1,Ta=2,Rs=3,Aa=4,Ca=5,Ra=6,Pa=7,Fh=0,uf=1,ff=2,Si=0,df=1,pf=2,mf=3,Oh=4,gf=5,_f=6,xf=7,Bh=300,Ps=301,Ls=302,La=303,Da=304,mo=306,Yi=1e3,Gi=1001,Ia=1002,Dn=1003,vf=1004,vr=1005,zn=1006,wo=1007,Vi=1008,si=1009,zh=1010,kh=1011,lr=1012,gl=1013,qi=1014,Qn=1015,dr=1016,_l=1017,xl=1018,Ds=1020,Hh=35902,Gh=1021,Vh=1022,Ln=1023,Wh=1024,Xh=1025,Ts=1026,Is=1027,Yh=1028,vl=1029,qh=1030,Ml=1031,yl=1033,to=33776,eo=33777,no=33778,io=33779,Ua=35840,Na=35841,Fa=35842,Oa=35843,Ba=36196,za=37492,ka=37496,Ha=37808,Ga=37809,Va=37810,Wa=37811,Xa=37812,Ya=37813,qa=37814,$a=37815,Za=37816,Ka=37817,ja=37818,Ja=37819,Qa=37820,tl=37821,so=36492,el=36494,nl=36495,$h=36283,il=36284,sl=36285,rl=36286,Mf=3200,yf=3201,Zh=0,Sf=1,vi="",De="srgb",Fs="srgb-linear",go="linear",pe="srgb",ts=7680,Jl=519,Ef=512,bf=513,wf=514,Kh=515,Tf=516,Af=517,Cf=518,Rf=519,ol=35044,Ql="300 es",ti=2e3,ao=2001;class ji{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],To=Math.PI/180,al=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function Ke(i,t,e){return Math.max(t,Math.min(e,i))}function Pf(i,t){return(i%t+t)%t}function Ao(i,t,e){return(1-e)*i+e*t}function Bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],y=s[4],_=s[7],L=s[2],w=s[5],C=s[8];return r[0]=o*x+a*v+l*L,r[3]=o*m+a*y+l*w,r[6]=o*p+a*_+l*C,r[1]=c*x+h*v+u*L,r[4]=c*m+h*y+u*w,r[7]=c*p+h*_+u*C,r[2]=f*x+d*v+g*L,r[5]=f*m+d*y+g*w,r[8]=f*p+d*_+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Co.makeScale(t,e)),this}rotate(t){return this.premultiply(Co.makeRotation(-t)),this}translate(t,e){return this.premultiply(Co.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Kt;function jh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lf(){const i=cr("canvas");return i.style.display="block",i}const tc={};function nr(i){i in tc||(tc[i]=!0,console.warn(i))}function Df(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function If(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Uf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const se={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(i.r=As(i.r),i.g=As(i.g),i.b=As(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vi?go:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ec=[.64,.33,.3,.6,.15,.06],nc=[.2126,.7152,.0722],ic=[.3127,.329],sc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);se.define({[Fs]:{primaries:ec,whitePoint:ic,transfer:go,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:ec,whitePoint:ic,transfer:pe,toXYZ:sc,fromXYZ:rc,luminanceCoefficients:nc,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});let es;class Nf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{es===void 0&&(es=cr("canvas")),es.width=t.width,es.height=t.height;const n=es.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=es}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ii(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ff=0;class Jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ro(s[o].image)):r.push(Ro(s[o]))}else r=Ro(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ro(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Of=0;class Je extends ji{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,n=Gi,s=Gi,r=zn,o=Vi,a=Ln,l=si,c=Je.DEFAULT_ANISOTROPY,h=vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=ni(),this.name="",this.source=new Jh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yi:t.x=t.x-Math.floor(t.x);break;case Gi:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yi:t.y=t.y-Math.floor(t.y);break;case Gi:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Bh;Je.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,_=(d+1)/2,L=(p+1)/2,w=(h+f)/4,C=(u+x)/4,R=(g+m)/4;return y>_&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=C/n):_>L?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=R/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=C/r,s=R/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bf extends ji{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Je(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends Bf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qh extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zf extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Os{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let m=1-a;const p=l*f+c*d+h*g+u*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const L=Math.sqrt(y),w=Math.atan2(L,p*v);m=Math.sin(m*w)/L,a=Math.sin(a*w)/L}const _=a*v;if(l=l*m+f*_,c=c*m+d*_,h=h*m+g*_,u=u*m+x*_,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new N,oc=new Os;class Bs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Mr.copy(n.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),yr.subVectors(this.max,Vs),ns.subVectors(t.a,Vs),is.subVectors(t.b,Vs),ss.subVectors(t.c,Vs),ci.subVectors(is,ns),hi.subVectors(ss,is),Ri.subVectors(ns,ss);let e=[0,-ci.z,ci.y,0,-hi.z,hi.y,0,-Ri.z,Ri.y,ci.z,0,-ci.x,hi.z,0,-hi.x,Ri.z,0,-Ri.x,-ci.y,ci.x,0,-hi.y,hi.x,0,-Ri.y,Ri.x,0];return!Lo(e,ns,is,ss,yr)||(e=[1,0,0,0,1,0,0,0,1],!Lo(e,ns,is,ss,yr))?!1:(Sr.crossVectors(ci,hi),e=[Sr.x,Sr.y,Sr.z],Lo(e,ns,is,ss,yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xn=[new N,new N,new N,new N,new N,new N,new N,new N],Tn=new N,Mr=new Bs,ns=new N,is=new N,ss=new N,ci=new N,hi=new N,Ri=new N,Vs=new N,yr=new N,Sr=new N,Pi=new N;function Lo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);const a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),l=t.dot(Pi),c=e.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const kf=new Bs,Ws=new N,Do=new N;class _o{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);const e=Ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Do.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(Do)),this.expandByPoint(Ws.copy(t.center).sub(Do))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new N,Io=new N,Er=new N,ui=new N,Uo=new N,br=new N,No=new N;class Sl{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Io.copy(t).add(e).multiplyScalar(.5),Er.copy(e).sub(t).normalize(),ui.copy(this.origin).sub(Io);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Er),a=ui.dot(this.direction),l=-ui.dot(Er),c=ui.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Io).addScaledVector(Er,f),d}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),s=Yn.dot(Yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,s,r){Uo.subVectors(e,t),br.subVectors(n,t),No.crossVectors(Uo,br);let o=this.direction.dot(No),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ui.subVectors(this.origin,t);const l=a*this.direction.dot(br.crossVectors(ui,br));if(l<0)return null;const c=a*this.direction.dot(Uo.cross(ui));if(c<0||l+c>o)return null;const h=-a*ui.dot(No);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,d,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),o=1/rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hf,t,Gf)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),fi.crossVectors(n,un),fi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),fi.crossVectors(n,un)),fi.normalize(),wr.crossVectors(un,fi),s[0]=fi.x,s[4]=wr.x,s[8]=un.x,s[1]=fi.y,s[5]=wr.y,s[9]=un.y,s[2]=fi.z,s[6]=wr.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],L=n[15],w=s[0],C=s[4],R=s[8],E=s[12],M=s[1],I=s[5],V=s[9],G=s[13],Z=s[2],Q=s[6],q=s[10],tt=s[14],O=s[3],nt=s[7],st=s[11],Et=s[15];return r[0]=o*w+a*M+l*Z+c*O,r[4]=o*C+a*I+l*Q+c*nt,r[8]=o*R+a*V+l*q+c*st,r[12]=o*E+a*G+l*tt+c*Et,r[1]=h*w+u*M+f*Z+d*O,r[5]=h*C+u*I+f*Q+d*nt,r[9]=h*R+u*V+f*q+d*st,r[13]=h*E+u*G+f*tt+d*Et,r[2]=g*w+x*M+m*Z+p*O,r[6]=g*C+x*I+m*Q+p*nt,r[10]=g*R+x*V+m*q+p*st,r[14]=g*E+x*G+m*tt+p*Et,r[3]=v*w+y*M+_*Z+L*O,r[7]=v*C+y*I+_*Q+L*nt,r[11]=v*R+y*V+_*q+L*st,r[15]=v*E+y*G+_*tt+L*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=u*m*c-x*f*c+x*l*d-a*m*d-u*l*p+a*f*p,y=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,_=h*x*c-g*u*c+g*a*d-o*x*d-h*a*p+o*u*p,L=g*u*l-h*x*l-g*a*f+o*x*f+h*a*m-o*u*m,w=e*v+n*y+s*_+r*L;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return t[0]=v*C,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*C,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*p+n*l*p)*C,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*C,t[4]=y*C,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*C,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*d+e*l*d)*C,t[8]=_*C,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*C,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*C,t[12]=L*C,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*C,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*C,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,v=l*c,y=l*h,_=l*u,L=n.x,w=n.y,C=n.z;return s[0]=(1-(x+p))*L,s[1]=(d+_)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(f+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+y)*C,s[9]=(m-v)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=rs.set(s[0],s[1],s[2]).length();const o=rs.set(s[4],s[5],s[6]).length(),a=rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);const c=1/r,h=1/o,u=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=ti){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(a===ti)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ao)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=ti){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,d=(n+s)*h;let g,x;if(a===ti)g=(o+r)*u,x=-2*u;else if(a===ao)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const rs=new N,An=new _e,Hf=new N(0,0,0),Gf=new N(1,1,1),fi=new N,wr=new N,un=new N,ac=new _e,lc=new Os;class Qe{constructor(t=0,e=0,n=0,s=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ac.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ac,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class El{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vf=0;const cc=new N,os=new Os,qn=new _e,Tr=new N,Xs=new N,Wf=new N,Xf=new Os,hc=new N(1,0,0),uc=new N(0,1,0),fc=new N(0,0,1),dc={type:"added"},Yf={type:"removed"},as={type:"childadded",child:null},Fo={type:"childremoved",child:null};class Fe extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new N,e=new Qe,n=new Os,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Kt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,e){return os.setFromAxisAngle(t,e),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(fc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Tr.copy(t):Tr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Xs,Tr,this.up):qn.lookAt(Tr,Xs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),os.setFromRotationMatrix(qn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dc),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yf),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dc),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,t,Wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,Xf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new N(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new N,$n=new N,Oo=new N,Zn=new N,ls=new N,cs=new N,pc=new N,Bo=new N,zo=new N,ko=new N,Ho=new ge,Go=new ge,Vo=new ge;class Sn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),$n.subVectors(n,e),Oo.subVectors(t,e);const o=Cn.dot(Cn),a=Cn.dot($n),l=Cn.dot(Oo),c=$n.dot($n),h=$n.dot(Oo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ho.setScalar(0),Go.setScalar(0),Vo.setScalar(0),Ho.fromBufferAttribute(t,e),Go.fromBufferAttribute(t,n),Vo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ho,r.x),o.addScaledVector(Go,r.y),o.addScaledVector(Vo,r.z),o}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),$n.subVectors(t,e),Cn.cross($n).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Cn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Sn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ls.subVectors(s,n),cs.subVectors(r,n),Bo.subVectors(t,n);const l=ls.dot(Bo),c=cs.dot(Bo);if(l<=0&&c<=0)return e.copy(n);zo.subVectors(t,s);const h=ls.dot(zo),u=cs.dot(zo);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ls,o);ko.subVectors(t,r);const d=ls.dot(ko),g=cs.dot(ko);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(cs,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return pc.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(pc,a);const p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(ls,o).addScaledVector(cs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Ar={h:0,s:0,l:0};function Wo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Pf(t,1),e=Ke(e,0,1),n=Ke(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wo(o,r,t+1/3),this.g=Wo(o,r,t),this.b=Wo(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=tu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return se.fromWorkingColorSpace(qe.copy(this),t),Math.round(Ke(qe.r*255,0,255))*65536+Math.round(Ke(qe.g*255,0,255))*256+Math.round(Ke(qe.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=De){se.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(Ar);const n=Ao(di.h,Ar.h,e),s=Ao(di.s,Ar.s,e),r=Ao(di.l,Ar.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Qt;Qt.NAMES=tu;let qf=0;class Ji extends ji{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=ni(),this.name="",this.blending=ws,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=Ea,this.blendEquation=Bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==Ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ea&&(n.blendDst=this.blendDst),this.blendEquation!==Bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bi extends Ji{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ue=new N,Cr=new _t;class En{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ol,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Cr.fromBufferAttribute(this,e),Cr.applyMatrix3(t),this.setXY(e,Cr.x,Cr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix3(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyMatrix4(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.applyNormalMatrix(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ue.fromBufferAttribute(this,e),Ue.transformDirection(t),this.setXYZ(e,Ue.x,Ue.y,Ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Bn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Bn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Bn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Bn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ol&&(t.usage=this.usage),t}}class eu extends En{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class nu extends En{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fe extends En{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $f=0;const vn=new _e,Xo=new Fe,hs=new N,fn=new Bs,Ys=new Bs,ke=new N;class Ve extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jh(t)?nu:eu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(ke.addVectors(fn.min,Ys.min),fn.expandByPoint(ke),ke.addVectors(fn.max,Ys.max),fn.expandByPoint(ke)):(fn.expandByPoint(Ys.min),fn.expandByPoint(Ys.max))}fn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ke.fromBufferAttribute(a,c),l&&(hs.fromBufferAttribute(t,c),ke.add(hs)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new N,l[R]=new N;const c=new N,h=new N,u=new N,f=new _t,d=new _t,g=new _t,x=new N,m=new N;function p(R,E,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[R].add(x),a[E].add(x),a[M].add(x),l[R].add(m),l[E].add(m),l[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,E=v.length;R<E;++R){const M=v[R],I=M.start,V=M.count;for(let G=I,Z=I+V;G<Z;G+=3)p(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const y=new N,_=new N,L=new N,w=new N;function C(R){L.fromBufferAttribute(s,R),w.copy(L);const E=a[R];y.copy(E),y.sub(L.multiplyScalar(L.dot(E))).normalize(),_.crossVectors(w,E);const I=_.dot(l[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,I)}for(let R=0,E=v.length;R<E;++R){const M=v[R],I=M.start,V=M.count;for(let G=I,Z=I+V;G<Z;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new En(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new En(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mc=new _e,Li=new Sl,Rr=new _o,gc=new N,Pr=new N,Lr=new N,Dr=new N,Yo=new N,Ir=new N,_c=new N,Ur=new N;class xt extends Fe{constructor(t=new Ve,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Yo.fromBufferAttribute(u,t),o?Ir.addScaledVector(Yo,h):Ir.addScaledVector(Yo.sub(e),h))}e.add(Ir)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),Li.copy(t.ray).recast(t.near),!(Rr.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Rr,gc)===null||Li.origin.distanceToSquared(gc)>(t.far-t.near)**2))&&(mc.copy(r).invert(),Li.copy(t.ray).applyMatrix4(mc),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,L=y;_<L;_+=3){const w=a.getX(_),C=a.getX(_+1),R=a.getX(_+2);s=Nr(this,p,t,n,c,h,u,w,C,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=Nr(this,o,t,n,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,L=y;_<L;_+=3){const w=_,C=_+1,R=_+2;s=Nr(this,p,t,n,c,h,u,w,C,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=m,y=m+1,_=m+2;s=Nr(this,o,t,n,c,h,u,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zf(i,t,e,n,s,r,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ei,a),l===null)return null;Ur.copy(a),Ur.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ur);return c<e.near||c>e.far?null:{distance:c,point:Ur.clone(),object:i}}function Nr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Pr),i.getVertexPosition(l,Lr),i.getVertexPosition(c,Dr);const h=Zf(i,t,e,n,Pr,Lr,Dr,_c);if(h){const u=new N;Sn.getBarycoord(_c,Pr,Lr,Dr,u),s&&(h.uv=Sn.getInterpolatedAttribute(s,a,l,c,u,new _t)),r&&(h.uv1=Sn.getInterpolatedAttribute(r,a,l,c,u,new _t)),o&&(h.normal=Sn.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};Sn.getNormal(Pr,Lr,Dr,f.normal),h.face=f,h.barycoord=u}return h}class Hn extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function g(x,m,p,v,y,_,L,w,C,R,E){const M=_/C,I=L/R,V=_/2,G=L/2,Z=w/2,Q=C+1,q=R+1;let tt=0,O=0;const nt=new N;for(let st=0;st<q;st++){const Et=st*I-G;for(let kt=0;kt<Q;kt++){const qt=kt*M-V;nt[x]=qt*v,nt[m]=Et*y,nt[p]=Z,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[p]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),u.push(kt/C),u.push(1-st/R),tt+=1}}for(let st=0;st<R;st++)for(let Et=0;Et<C;Et++){const kt=f+Et+Q*st,qt=f+Et+Q*(st+1),K=f+(Et+1)+Q*(st+1),ct=f+(Et+1)+Q*st;l.push(kt,qt,ct),l.push(qt,K,ct),O+=6}a.addGroup(d,O,E),d+=O,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Us(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=Us(i[e]);for(const s in n)t[s]=n[s]}return t}function Kf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function iu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const jf={clone:Us,merge:en};var Jf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Ji{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jf,this.fragmentShader=Qf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Us(t.uniforms),this.uniformsGroups=Kf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class su extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=ti}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new N,xc=new _t,vc=new _t;class mn extends su{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=al*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return al*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,xc,vc),e.subVectors(vc,xc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(To*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const us=-90,fs=1;class td extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mn(us,fs,t,e);s.layers=this.layers,this.add(s);const r=new mn(us,fs,t,e);r.layers=this.layers,this.add(r);const o=new mn(us,fs,t,e);o.layers=this.layers,this.add(o);const a=new mn(us,fs,t,e);a.layers=this.layers,this.add(a);const l=new mn(us,fs,t,e);l.layers=this.layers,this.add(l);const c=new mn(us,fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===ti)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ru extends Je{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ps,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ed extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ru(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:zn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hn(5,5,5),r=new wi({name:"CubemapFromEquirect",uniforms:Us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:yi});r.uniforms.tEquirect.value=e;const o=new xt(s,r),a=e.minFilter;return e.minFilter===Vi&&(e.minFilter=zn),new td(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const qo=new N,nd=new N,id=new Kt;class Ni{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=qo.subVectors(n,e).cross(nd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||id.getNormalMatrix(t),s=this.coplanarPoint(qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new _o,Fr=new N;class bl{constructor(t=new Ni,e=new Ni,n=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ti){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-d,_-p).normalize(),n[1].setComponents(l+r,f+c,m+d,_+p).normalize(),n[2].setComponents(l+o,f+h,m+g,_+v).normalize(),n[3].setComponents(l-o,f-h,m-g,_-v).normalize(),n[4].setComponents(l-a,f-u,m-x,_-y).normalize(),e===ti)n[5].setComponents(l+a,f+u,m+x,_+y).normalize();else if(e===ao)n[5].setComponents(a,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(t){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(t.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Fr.x=s.normal.x>0?t.max.x:t.min.x,Fr.y=s.normal.y>0?t.max.y:t.min.y,Fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ou(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function sd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ae extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const v=p*f-o;for(let y=0;y<c;y++){const _=y*u-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,_=v+c*(p+1),L=v+1+c*(p+1),w=v+1+c*p;d.push(y,_,w),d.push(_,L,w)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ae(t.width,t.height,t.widthSegments,t.heightSegments)}}var rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
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
#endif`,ad=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ud=`#ifdef USE_AOMAP
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
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dd=`#ifdef USE_BATCHING
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
#endif`,pd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xd=`#ifdef USE_IRIDESCENCE
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
#endif`,vd=`#ifdef USE_BUMPMAP
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cd=`#define PI 3.141592653589793
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
} // validated`,Rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Pd=`vec3 transformedNormal = objectNormal;
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
#endif`,Ld=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Od=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yd=`#ifdef USE_GRADIENTMAP
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
}`,qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
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
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,np=`PhysicalMaterial material;
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
#endif`,ip=`struct PhysicalMaterial {
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
}`,sp=`
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
#endif`,rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ap=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,up=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pp=`#if defined( USE_POINTS_UV )
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
#endif`,mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_p=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ap=`#ifdef USE_NORMALMAP
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
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ip=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Np=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vp=`float getShadowMask() {
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
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qp=`#ifdef USE_SKINNING
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
#endif`,$p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jp=`#ifdef USE_TRANSMISSION
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
#endif`,Qp=`#ifdef USE_TRANSMISSION
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const s0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r0=`uniform sampler2D t2D;
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
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,l0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h0=`#include <common>
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
}`,u0=`#if DEPTH_PACKING == 3200
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
}`,f0=`#define DISTANCE
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
}`,d0=`#define DISTANCE
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`uniform float scale;
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
}`,_0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,v0=`uniform vec3 diffuse;
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
}`,M0=`#define LAMBERT
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
}`,y0=`#define LAMBERT
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
}`,S0=`#define MATCAP
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
}`,E0=`#define MATCAP
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
}`,b0=`#define NORMAL
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
}`,w0=`#define NORMAL
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
}`,T0=`#define PHONG
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
}`,A0=`#define PHONG
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
}`,C0=`#define STANDARD
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
}`,R0=`#define STANDARD
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
}`,P0=`#define TOON
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
}`,L0=`#define TOON
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
}`,D0=`uniform float size;
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
}`,I0=`uniform vec3 diffuse;
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
}`,U0=`#include <common>
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
}`,N0=`uniform vec3 color;
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
}`,F0=`uniform float rotation;
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
}`,O0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:rd,alphahash_pars_fragment:od,alphamap_fragment:ad,alphamap_pars_fragment:ld,alphatest_fragment:cd,alphatest_pars_fragment:hd,aomap_fragment:ud,aomap_pars_fragment:fd,batching_pars_vertex:dd,batching_vertex:pd,begin_vertex:md,beginnormal_vertex:gd,bsdfs:_d,iridescence_fragment:xd,bumpmap_pars_fragment:vd,clipping_planes_fragment:Md,clipping_planes_pars_fragment:yd,clipping_planes_pars_vertex:Sd,clipping_planes_vertex:Ed,color_fragment:bd,color_pars_fragment:wd,color_pars_vertex:Td,color_vertex:Ad,common:Cd,cube_uv_reflection_fragment:Rd,defaultnormal_vertex:Pd,displacementmap_pars_vertex:Ld,displacementmap_vertex:Dd,emissivemap_fragment:Id,emissivemap_pars_fragment:Ud,colorspace_fragment:Nd,colorspace_pars_fragment:Fd,envmap_fragment:Od,envmap_common_pars_fragment:Bd,envmap_pars_fragment:zd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:jd,envmap_vertex:Hd,fog_vertex:Gd,fog_pars_vertex:Vd,fog_fragment:Wd,fog_pars_fragment:Xd,gradientmap_pars_fragment:Yd,lightmap_pars_fragment:qd,lights_lambert_fragment:$d,lights_lambert_pars_fragment:Zd,lights_pars_begin:Kd,lights_toon_fragment:Jd,lights_toon_pars_fragment:Qd,lights_phong_fragment:tp,lights_phong_pars_fragment:ep,lights_physical_fragment:np,lights_physical_pars_fragment:ip,lights_fragment_begin:sp,lights_fragment_maps:rp,lights_fragment_end:op,logdepthbuf_fragment:ap,logdepthbuf_pars_fragment:lp,logdepthbuf_pars_vertex:cp,logdepthbuf_vertex:hp,map_fragment:up,map_pars_fragment:fp,map_particle_fragment:dp,map_particle_pars_fragment:pp,metalnessmap_fragment:mp,metalnessmap_pars_fragment:gp,morphinstance_vertex:_p,morphcolor_vertex:xp,morphnormal_vertex:vp,morphtarget_pars_vertex:Mp,morphtarget_vertex:yp,normal_fragment_begin:Sp,normal_fragment_maps:Ep,normal_pars_fragment:bp,normal_pars_vertex:wp,normal_vertex:Tp,normalmap_pars_fragment:Ap,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Rp,clearcoat_pars_fragment:Pp,iridescence_pars_fragment:Lp,opaque_fragment:Dp,packing:Ip,premultiplied_alpha_fragment:Up,project_vertex:Np,dithering_fragment:Fp,dithering_pars_fragment:Op,roughnessmap_fragment:Bp,roughnessmap_pars_fragment:zp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Hp,shadowmap_vertex:Gp,shadowmask_pars_fragment:Vp,skinbase_vertex:Wp,skinning_pars_vertex:Xp,skinning_vertex:Yp,skinnormal_vertex:qp,specularmap_fragment:$p,specularmap_pars_fragment:Zp,tonemapping_fragment:Kp,tonemapping_pars_fragment:jp,transmission_fragment:Jp,transmission_pars_fragment:Qp,uv_pars_fragment:t0,uv_pars_vertex:e0,uv_vertex:n0,worldpos_vertex:i0,background_vert:s0,background_frag:r0,backgroundCube_vert:o0,backgroundCube_frag:a0,cube_vert:l0,cube_frag:c0,depth_vert:h0,depth_frag:u0,distanceRGBA_vert:f0,distanceRGBA_frag:d0,equirect_vert:p0,equirect_frag:m0,linedashed_vert:g0,linedashed_frag:_0,meshbasic_vert:x0,meshbasic_frag:v0,meshlambert_vert:M0,meshlambert_frag:y0,meshmatcap_vert:S0,meshmatcap_frag:E0,meshnormal_vert:b0,meshnormal_frag:w0,meshphong_vert:T0,meshphong_frag:A0,meshphysical_vert:C0,meshphysical_frag:R0,meshtoon_vert:P0,meshtoon_frag:L0,points_vert:D0,points_frag:I0,shadow_vert:U0,shadow_frag:N0,sprite_vert:F0,sprite_frag:O0},gt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},On={basic:{uniforms:en([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:en([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:en([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:en([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:en([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:en([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:en([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:en([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:en([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:en([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:en([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:en([gt.common,gt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:en([gt.lights,gt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};On.physical={uniforms:en([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Or={r:0,b:0,g:0},Ii=new Qe,B0=new _e;function z0(i,t,e,n,s,r,o){const a=new Qt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function x(v){let y=!1;const _=g(v);_===null?p(a,l):_&&_.isColor&&(p(_,1),y=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===mo)?(h===void 0&&(h=new xt(new Hn(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:Us(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ii.copy(y.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B0.makeRotationFromEuler(Ii)),h.material.toneMapped=se.getTransfer(_.colorSpace)!==pe,(u!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new xt(new Ae(2,2),new wi({name:"BackgroundMaterial",uniforms:Us(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=se.getTransfer(_.colorSpace)!==pe,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,d=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(Or,iu(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:x,addToRenderList:m}}function k0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,I,V,G,Z){let Q=!1;const q=u(G,V,I);r!==q&&(r=q,c(r.object)),Q=d(M,G,V,Z),Q&&g(M,G,V,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,_(M,I,V,G),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,V){const G=V.wireframe===!0;let Z=n[M.id];Z===void 0&&(Z={},n[M.id]=Z);let Q=Z[I.id];Q===void 0&&(Q={},Z[I.id]=Q);let q=Q[G];return q===void 0&&(q=f(l()),Q[G]=q),q}function f(M){const I=[],V=[],G=[];for(let Z=0;Z<e;Z++)I[Z]=0,V[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:G,object:M,attributes:{},index:null}}function d(M,I,V,G){const Z=r.attributes,Q=I.attributes;let q=0;const tt=V.getAttributes();for(const O in tt)if(tt[O].location>=0){const st=Z[O];let Et=Q[O];if(Et===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(Et=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(Et=M.instanceColor)),st===void 0||st.attribute!==Et||Et&&st.data!==Et.data)return!0;q++}return r.attributesNum!==q||r.index!==G}function g(M,I,V,G){const Z={},Q=I.attributes;let q=0;const tt=V.getAttributes();for(const O in tt)if(tt[O].location>=0){let st=Q[O];st===void 0&&(O==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),O==="instanceColor"&&M.instanceColor&&(st=M.instanceColor));const Et={};Et.attribute=st,st&&st.data&&(Et.data=st.data),Z[O]=Et,q++}r.attributes=Z,r.attributesNum=q,r.index=G}function x(){const M=r.newAttributes;for(let I=0,V=M.length;I<V;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const V=r.newAttributes,G=r.enabledAttributes,Z=r.attributeDivisors;V[M]=1,G[M]===0&&(i.enableVertexAttribArray(M),G[M]=1),Z[M]!==I&&(i.vertexAttribDivisor(M,I),Z[M]=I)}function v(){const M=r.newAttributes,I=r.enabledAttributes;for(let V=0,G=I.length;V<G;V++)I[V]!==M[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function y(M,I,V,G,Z,Q,q){q===!0?i.vertexAttribIPointer(M,I,V,Z,Q):i.vertexAttribPointer(M,I,V,G,Z,Q)}function _(M,I,V,G){x();const Z=G.attributes,Q=V.getAttributes(),q=I.defaultAttributeValues;for(const tt in Q){const O=Q[tt];if(O.location>=0){let nt=Z[tt];if(nt===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor)),nt!==void 0){const st=nt.normalized,Et=nt.itemSize,kt=t.get(nt);if(kt===void 0)continue;const qt=kt.buffer,K=kt.type,ct=kt.bytesPerElement,bt=K===i.INT||K===i.UNSIGNED_INT||nt.gpuType===gl;if(nt.isInterleavedBufferAttribute){const mt=nt.data,Ot=mt.stride,Ht=nt.offset;if(mt.isInstancedInterleavedBuffer){for(let zt=0;zt<O.locationSize;zt++)p(O.location+zt,mt.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let zt=0;zt<O.locationSize;zt++)m(O.location+zt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let zt=0;zt<O.locationSize;zt++)y(O.location+zt,Et/O.locationSize,K,st,Ot*ct,(Ht+Et/O.locationSize*zt)*ct,bt)}else{if(nt.isInstancedBufferAttribute){for(let mt=0;mt<O.locationSize;mt++)p(O.location+mt,nt.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let mt=0;mt<O.locationSize;mt++)m(O.location+mt);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let mt=0;mt<O.locationSize;mt++)y(O.location+mt,Et/O.locationSize,K,st,Et*ct,Et/O.locationSize*mt*ct,bt)}}else if(q!==void 0){const st=q[tt];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(O.location,st);break;case 3:i.vertexAttrib3fv(O.location,st);break;case 4:i.vertexAttrib4fv(O.location,st);break;default:i.vertexAttrib1fv(O.location,st)}}}}v()}function L(){R();for(const M in n){const I=n[M];for(const V in I){const G=I[V];for(const Z in G)h(G[Z].object),delete G[Z];delete I[V]}delete n[M]}}function w(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const V in I){const G=I[V];for(const Z in G)h(G[Z].object),delete G[Z];delete I[V]}delete n[M.id]}function C(M){for(const I in n){const V=n[I];if(V[M.id]===void 0)continue;const G=V[M.id];for(const Z in G)h(G[Z].object),delete G[Z];delete V[M.id]}}function R(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function H0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function G0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Ln&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const R=C===dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==si&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Qn&&!R)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:L,maxSamples:w}}function V0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Ni,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,y=v*4;let _=p.clippingState||null;l.value=_,_=h(g,f,y,d);for(let L=0;L!==y;++L)_[L]=e[L];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function W0(i){let t=new WeakMap;function e(o,a){return a===La?o.mapping=Ps:a===Da&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===La||a===Da)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ed(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class au extends su{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Es=4,Mc=[.125,.215,.35,.446,.526,.582],zi=20,$o=new au,yc=new Qt;let Zo=null,Ko=0,jo=0,Jo=!1;const Fi=(1+Math.sqrt(5))/2,ds=1/Fi,Sc=[new N(-Fi,ds,0),new N(Fi,ds,0),new N(-ds,0,Fi),new N(ds,0,Fi),new N(0,Fi,-ds),new N(0,Fi,ds),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class ll{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Ko,jo),this._renderer.xr.enabled=Jo,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),jo=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:zn,minFilter:zn,generateMipmaps:!1,type:dr,format:Ln,colorSpace:Fs,depthBuffer:!1},s=Ec(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X0(r)),this._blurMaterial=Y0(r,t,e)}return s}_compileMaterial(t){const e=new xt(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,n,s){const a=new mn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(yc),h.toneMapping=Si,h.autoClear=!1;const d=new bi({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new xt(new Hn,d);let x=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(yc),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):v===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Br(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ps||t.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new xt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Br(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,$o)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Sc[(s-r-1)%Sc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new xt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*zi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let v=0;for(let C=0;C<zi;++C){const R=C/x,E=Math.exp(-R*R/2);p.push(E),C===0?v+=E:C<m&&(v+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const _=this._sizeLods[s],L=3*_*(s>y-Es?s-y+Es:0),w=4*(this._cubeSize-_);Br(e,L,w,3*_,2*_),l.setRenderTarget(e),l.render(u,$o)}}function X0(i){const t=[],e=[],n=[];let s=i;const r=i-Es+1+Mc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Es?l=Mc[o-i+Es-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let w=0;w<d;w++){const C=w%3*2/3-1,R=w>2?0:-1,E=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];v.set(E,x*g*w),y.set(f,m*g*w);const M=[w,w,w,w,w,w];_.set(M,p*g*w)}const L=new Ve;L.setAttribute("position",new En(v,x)),L.setAttribute("uv",new En(y,m)),L.setAttribute("faceIndex",new En(_,p)),t.push(L),s>Es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ec(i,t,e){const n=new $i(i,t,e);return n.texture.mapping=mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Br(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Y0(i,t,e){const n=new Float32Array(zi),s=new N(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function bc(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:yi,depthTest:!1,depthWrite:!1})}function wc(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function q0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===La||l===Da,h=l===Ps||l===Ls;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ll(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new ll(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&nr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Z0(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const v=d.array;x=d.version;for(let y=0,_=v.length;y<_;y+=3){const L=v[y+0],w=v[y+1],C=v[y+2];f.push(L,w,w,C,C,L)}}else if(g!==void 0){const v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const L=y+0,w=y+1,C=y+2;f.push(L,w,w,C,C,L)}}else return;const m=new(jh(f)?nu:eu)(f,1);m.version=x;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function K0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*x[v];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function j0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function J0(i,t,e){const n=new WeakMap,s=new ge;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let L=a.attributes.position.count*_,w=1;L>t.maxTextureSize&&(w=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const C=new Float32Array(L*w*4*u),R=new Qh(C,L,w,u);R.type=Qn,R.needsUpdate=!0;const E=_*4;for(let I=0;I<u;I++){const V=p[I],G=v[I],Z=y[I],Q=L*w*4*I;for(let q=0;q<V.count;q++){const tt=q*E;g===!0&&(s.fromBufferAttribute(V,q),C[Q+tt+0]=s.x,C[Q+tt+1]=s.y,C[Q+tt+2]=s.z,C[Q+tt+3]=0),x===!0&&(s.fromBufferAttribute(G,q),C[Q+tt+4]=s.x,C[Q+tt+5]=s.y,C[Q+tt+6]=s.z,C[Q+tt+7]=0),m===!0&&(s.fromBufferAttribute(Z,q),C[Q+tt+8]=s.x,C[Q+tt+9]=s.y,C[Q+tt+10]=s.z,C[Q+tt+11]=Z.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new _t(L,w)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Q0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class lu extends Je{constructor(t,e,n,s,r,o,a,l,c,h=Ts){if(h!==Ts&&h!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ts&&(n=qi),n===void 0&&h===Is&&(n=Ds),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cu=new Je,Tc=new lu(1,1),hu=new Qh,uu=new zf,fu=new ru,Ac=[],Cc=[],Rc=new Float32Array(16),Pc=new Float32Array(9),Lc=new Float32Array(4);function zs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ac[s];if(r===void 0&&(r=new Float32Array(s),Ac[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xo(i,t){let e=Cc[t];e===void 0&&(e=new Int32Array(t),Cc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function sm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Lc.set(n),i.uniformMatrix2fv(this.addr,!1,Lc),Be(e,n)}}function rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Pc.set(n),i.uniformMatrix3fv(this.addr,!1,Pc),Be(e,n)}}function om(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Rc.set(n),i.uniformMatrix4fv(this.addr,!1,Rc),Be(e,n)}}function am(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function um(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function mm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tc.compareFunction=Kh,r=Tc):r=cu,e.setTexture2D(t||r,s)}function gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uu,s)}function _m(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||fu,s)}function xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hu,s)}function vm(i){switch(i){case 5126:return tm;case 35664:return em;case 35665:return nm;case 35666:return im;case 35674:return sm;case 35675:return rm;case 35676:return om;case 5124:case 35670:return am;case 35667:case 35671:return lm;case 35668:case 35672:return cm;case 35669:case 35673:return hm;case 5125:return um;case 36294:return fm;case 36295:return dm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return xm}}function Mm(i,t){i.uniform1fv(this.addr,t)}function ym(i,t){const e=zs(t,this.size,2);i.uniform2fv(this.addr,e)}function Sm(i,t){const e=zs(t,this.size,3);i.uniform3fv(this.addr,e)}function Em(i,t){const e=zs(t,this.size,4);i.uniform4fv(this.addr,e)}function bm(i,t){const e=zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function wm(i,t){const e=zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tm(i,t){const e=zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Am(i,t){i.uniform1iv(this.addr,t)}function Cm(i,t){i.uniform2iv(this.addr,t)}function Rm(i,t){i.uniform3iv(this.addr,t)}function Pm(i,t){i.uniform4iv(this.addr,t)}function Lm(i,t){i.uniform1uiv(this.addr,t)}function Dm(i,t){i.uniform2uiv(this.addr,t)}function Im(i,t){i.uniform3uiv(this.addr,t)}function Um(i,t){i.uniform4uiv(this.addr,t)}function Nm(i,t,e){const n=this.cache,s=t.length,r=xo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||cu,r[o])}function Fm(i,t,e){const n=this.cache,s=t.length,r=xo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uu,r[o])}function Om(i,t,e){const n=this.cache,s=t.length,r=xo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fu,r[o])}function Bm(i,t,e){const n=this.cache,s=t.length,r=xo(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hu,r[o])}function zm(i){switch(i){case 5126:return Mm;case 35664:return ym;case 35665:return Sm;case 35666:return Em;case 35674:return bm;case 35675:return wm;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return Cm;case 35668:case 35672:return Rm;case 35669:case 35673:return Pm;case 5125:return Lm;case 36294:return Dm;case 36295:return Im;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}class km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vm(e.type)}}class Hm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zm(e.type)}}class Gm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function Dc(i,t){i.seq.push(t),i.map[t.id]=t}function Vm(i,t,e){const n=i.name,s=n.length;for(Qo.lastIndex=0;;){const r=Qo.exec(n),o=Qo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Dc(e,c===void 0?new km(a,i,t):new Hm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Gm(a),Dc(e,u)),e=u}}}class ro{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Vm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ic(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Wm=37297;let Xm=0;function Ym(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Uc=new Kt;function qm(i){se._getMatrix(Uc,se.workingColorSpace,i);const t=`mat3( ${Uc.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case go:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Nc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Ym(i.getShaderSource(t),o)}else return s}function $m(i,t){const e=qm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Zm(i,t){let e;switch(t){case df:e="Linear";break;case pf:e="Reinhard";break;case mf:e="Cineon";break;case Oh:e="ACESFilmic";break;case _f:e="AgX";break;case xf:e="Neutral";break;case gf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const zr=new N;function Km(){se.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),t=zr.y.toFixed(4),e=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ir).join(`
`)}function Jm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ir(i){return i!==""}function Fc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(tg,ng)}const eg=new Map;function ng(i,t){let e=jt[t];if(e===void 0){const n=eg.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cl(e)}const ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(i){return i.replace(ig,sg)}function sg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(t="SHADOWMAP_TYPE_VSM"),t}function og(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ps:case Ls:t="ENVMAP_TYPE_CUBE";break;case mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ag(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function lg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fh:t="ENVMAP_BLENDING_MULTIPLY";break;case uf:t="ENVMAP_BLENDING_MIX";break;case ff:t="ENVMAP_BLENDING_ADD";break}return t}function cg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hg(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=rg(e),c=og(e),h=ag(e),u=lg(e),f=cg(e),d=jm(e),g=Jm(r),x=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ir).join(`
`),p.length>0&&(p+=`
`)):(m=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ir).join(`
`),p=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?jt.tonemapping_pars_fragment:"",e.toneMapping!==Si?Zm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,$m("linearToOutputTexel",e.outputColorSpace),Km(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ir).join(`
`)),o=cl(o),o=Fc(o,e),o=Oc(o,e),a=cl(a),a=Fc(a,e),a=Oc(a,e),o=Bc(o),a=Bc(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,_=v+p+a,L=Ic(s,s.VERTEX_SHADER,y),w=Ic(s,s.FRAGMENT_SHADER,_);s.attachShader(x,L),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(I){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(x).trim(),G=s.getShaderInfoLog(L).trim(),Z=s.getShaderInfoLog(w).trim();let Q=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,w);else{const tt=Nc(s,L,"vertex"),O=Nc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+tt+`
`+O)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||Z==="")&&(q=!1);q&&(I.diagnostics={runnable:Q,programLog:V,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(L),s.deleteShader(w),R=new ro(s,x),E=Qm(s,x)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Wm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=w,this}let ug=0;class fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new dg(t),e.set(t,n)),n}}class dg{constructor(t){this.id=ug++,this.code=t,this.usedTimes=0}}function pg(i,t,e,n,s,r,o){const a=new El,l=new fg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,I,V,G){const Z=V.fog,Q=G.geometry,q=E.isMeshStandardMaterial?V.environment:null,tt=(E.isMeshStandardMaterial?e:t).get(E.envMap||q),O=tt&&tt.mapping===mo?tt.image.height:null,nt=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const st=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Et=st!==void 0?st.length:0;let kt=0;Q.morphAttributes.position!==void 0&&(kt=1),Q.morphAttributes.normal!==void 0&&(kt=2),Q.morphAttributes.color!==void 0&&(kt=3);let qt,K,ct,bt;if(nt){const ae=On[nt];qt=ae.vertexShader,K=ae.fragmentShader}else qt=E.vertexShader,K=E.fragmentShader,l.update(E),ct=l.getVertexShaderID(E),bt=l.getFragmentShaderID(E);const mt=i.getRenderTarget(),Ot=i.state.buffers.depth.getReversed(),Ht=G.isInstancedMesh===!0,zt=G.isBatchedMesh===!0,re=!!E.map,Xt=!!E.matcap,de=!!tt,F=!!E.aoMap,yt=!!E.lightMap,dt=!!E.bumpMap,ut=!!E.normalMap,at=!!E.displacementMap,Ut=!!E.emissiveMap,vt=!!E.metalnessMap,A=!!E.roughnessMap,S=E.anisotropy>0,k=E.clearcoat>0,J=E.dispersion>0,it=E.iridescence>0,j=E.sheen>0,Ct=E.transmission>0,pt=S&&!!E.anisotropyMap,Mt=k&&!!E.clearcoatMap,ie=k&&!!E.clearcoatNormalMap,ht=k&&!!E.clearcoatRoughnessMap,wt=it&&!!E.iridescenceMap,Bt=it&&!!E.iridescenceThicknessMap,Gt=j&&!!E.sheenColorMap,Tt=j&&!!E.sheenRoughnessMap,D=!!E.specularMap,X=!!E.specularColorMap,lt=!!E.specularIntensityMap,P=Ct&&!!E.transmissionMap,et=Ct&&!!E.thicknessMap,H=!!E.gradientMap,$=!!E.alphaMap,ot=E.alphaTest>0,rt=!!E.alphaHash,Ft=!!E.extensions;let we=Si;E.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(we=i.toneMapping);const ze={shaderID:nt,shaderType:E.type,shaderName:E.name,vertexShader:qt,fragmentShader:K,defines:E.defines,customVertexShaderID:ct,customFragmentShaderID:bt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:zt,batchingColor:zt&&G._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&G.instanceColor!==null,instancingMorph:Ht&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:mt===null?i.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Fs,alphaToCoverage:!!E.alphaToCoverage,map:re,matcap:Xt,envMap:de,envMapMode:de&&tt.mapping,envMapCubeUVHeight:O,aoMap:F,lightMap:yt,bumpMap:dt,normalMap:ut,displacementMap:f&&at,emissiveMap:Ut,normalMapObjectSpace:ut&&E.normalMapType===Sf,normalMapTangentSpace:ut&&E.normalMapType===Zh,metalnessMap:vt,roughnessMap:A,anisotropy:S,anisotropyMap:pt,clearcoat:k,clearcoatMap:Mt,clearcoatNormalMap:ie,clearcoatRoughnessMap:ht,dispersion:J,iridescence:it,iridescenceMap:wt,iridescenceThicknessMap:Bt,sheen:j,sheenColorMap:Gt,sheenRoughnessMap:Tt,specularMap:D,specularColorMap:X,specularIntensityMap:lt,transmission:Ct,transmissionMap:P,thicknessMap:et,gradientMap:H,opaque:E.transparent===!1&&E.blending===ws&&E.alphaToCoverage===!1,alphaMap:$,alphaTest:ot,alphaHash:rt,combine:E.combine,mapUv:re&&x(E.map.channel),aoMapUv:F&&x(E.aoMap.channel),lightMapUv:yt&&x(E.lightMap.channel),bumpMapUv:dt&&x(E.bumpMap.channel),normalMapUv:ut&&x(E.normalMap.channel),displacementMapUv:at&&x(E.displacementMap.channel),emissiveMapUv:Ut&&x(E.emissiveMap.channel),metalnessMapUv:vt&&x(E.metalnessMap.channel),roughnessMapUv:A&&x(E.roughnessMap.channel),anisotropyMapUv:pt&&x(E.anisotropyMap.channel),clearcoatMapUv:Mt&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&x(E.sheenRoughnessMap.channel),specularMapUv:D&&x(E.specularMap.channel),specularColorMapUv:X&&x(E.specularColorMap.channel),specularIntensityMapUv:lt&&x(E.specularIntensityMap.channel),transmissionMapUv:P&&x(E.transmissionMap.channel),thicknessMapUv:et&&x(E.thicknessMap.channel),alphaMapUv:$&&x(E.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(ut||S),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Q.attributes.uv&&(re||$),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ot,skinning:G.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:kt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:we,decodeVideoTexture:re&&E.map.isVideoTexture===!0&&se.getTransfer(E.map.colorSpace)===pe,decodeVideoTextureEmissive:Ut&&E.emissiveMap.isVideoTexture===!0&&se.getTransfer(E.emissiveMap.colorSpace)===pe,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ie,flipSided:E.side===je,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function p(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)M.push(I),M.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(v(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function v(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),E.push(a.mask)}function _(E){const M=g[E.type];let I;if(M){const V=On[M];I=jf.clone(V.uniforms)}else I=E.uniforms;return I}function L(E,M){let I;for(let V=0,G=h.length;V<G;V++){const Z=h[V];if(Z.cacheKey===M){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new hg(i,M,E,r),h.push(I)),I}function w(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function C(E){l.remove(E)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:L,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:R}}function mg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function gg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function kc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,x,m){const p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||gg),n.length>1&&n.sort(f||kc),s.length>1&&s.sort(f||kc)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function _g(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Hc,i.set(n,[o])):s>=r.length?(o=new Hc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function xg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Qt};break;case"SpotLight":e={position:new N,direction:new N,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Mg=0;function yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Sg(i){const t=new xg,e=vg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const s=new N,r=new _e,o=new _e;function a(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,L=0,w=0,C=0;c.sort(yg);for(let E=0,M=c.length;E<M;E++){const I=c[E],V=I.color,G=I.intensity,Z=I.distance,Q=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=V.r*G,u+=V.g*G,f+=V.b*G;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],G);C++}else if(I.isDirectionalLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const tt=I.shadow,O=e.get(I);O.shadowIntensity=tt.intensity,O.shadowBias=tt.bias,O.shadowNormalBias=tt.normalBias,O.shadowRadius=tt.radius,O.shadowMapSize=tt.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=I.shadow.matrix,v++}n.directional[d]=q,d++}else if(I.isSpotLight){const q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(V).multiplyScalar(G),q.distance=Z,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[x]=q;const tt=I.shadow;if(I.map&&(n.spotLightMap[L]=I.map,L++,tt.updateMatrices(I),I.castShadow&&w++),n.spotLightMatrix[x]=tt.matrix,I.castShadow){const O=e.get(I);O.shadowIntensity=tt.intensity,O.shadowBias=tt.bias,O.shadowNormalBias=tt.normalBias,O.shadowRadius=tt.radius,O.shadowMapSize=tt.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=Q,_++}x++}else if(I.isRectAreaLight){const q=t.get(I);q.color.copy(V).multiplyScalar(G),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=q,m++}else if(I.isPointLight){const q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){const tt=I.shadow,O=e.get(I);O.shadowIntensity=tt.intensity,O.shadowBias=tt.bias,O.shadowNormalBias=tt.normalBias,O.shadowRadius=tt.radius,O.shadowMapSize=tt.mapSize,O.shadowCameraNear=tt.camera.near,O.shadowCameraFar=tt.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=q,g++}else if(I.isHemisphereLight){const q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(G),q.groundColor.copy(I.groundColor).multiplyScalar(G),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==_||R.numSpotMaps!==L||R.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+L-w,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=_,R.numSpotMaps=L,R.numLightProbes=C,n.version=Mg++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const _=n.directional[u];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),u++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Gc(i){const t=new Sg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Eg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Gc(i),t.set(s,[a])):r>=o.length?(a=new Gc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class bg extends Ji{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wg extends Ji{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
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
}`;function Cg(i,t,e){let n=new bl;const s=new _t,r=new _t,o=new ge,a=new bg({depthPacking:yf}),l=new wg,c={},h=e.maxTextureSize,u={[Ei]:je,[je]:Ei,[Ie]:Ie},f=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Tg,fragmentShader:Ag}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new xt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uh;let p=this.type;this.render=function(w,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(yi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const G=p!==Kn&&this.type===Kn,Z=p===Kn&&this.type!==Kn;for(let Q=0,q=w.length;Q<q;Q++){const tt=w[Q],O=tt.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const nt=O.getFrameExtents();if(s.multiply(nt),r.copy(O.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,O.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,O.mapSize.y=r.y)),O.map===null||G===!0||Z===!0){const Et=this.type!==Kn?{minFilter:Dn,magFilter:Dn}:{};O.map!==null&&O.map.dispose(),O.map=new $i(s.x,s.y,Et),O.map.texture.name=tt.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const st=O.getViewportCount();for(let Et=0;Et<st;Et++){const kt=O.getViewport(Et);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),V.viewport(o),O.updateMatrices(tt,Et),n=O.getFrustum(),_(C,R,O.camera,tt,this.type)}O.isPointLightShadow!==!0&&this.type===Kn&&v(O,R),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,M,I)};function v(w,C){const R=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $i(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,R,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,R,d,x,null)}function y(w,C,R,E){let M=null;const I=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)M=I;else if(M=R.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const V=M.uuid,G=C.uuid;let Z=c[V];Z===void 0&&(Z={},c[V]=Z);let Q=Z[G];Q===void 0&&(Q=M.clone(),Z[G]=Q,C.addEventListener("dispose",L)),M=Q}if(M.visible=C.visible,M.wireframe=C.wireframe,E===Kn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=R}return M}function _(w,C,R,E,M){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===Kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const G=t.update(w),Z=w.material;if(Array.isArray(Z)){const Q=G.groups;for(let q=0,tt=Q.length;q<tt;q++){const O=Q[q],nt=Z[O.materialIndex];if(nt&&nt.visible){const st=y(w,nt,E,M);w.onBeforeShadow(i,w,C,R,G,st,O),i.renderBufferDirect(R,null,G,st,w,O),w.onAfterShadow(i,w,C,R,G,st,O)}}}else if(Z.visible){const Q=y(w,Z,E,M);w.onBeforeShadow(i,w,C,R,G,Q,null),i.renderBufferDirect(R,null,G,Q,w,null),w.onAfterShadow(i,w,C,R,G,Q,null)}}const V=w.children;for(let G=0,Z=V.length;G<Z;G++)_(V[G],C,R,E,M)}function L(w){w.target.removeEventListener("dispose",L);for(const R in c){const E=c[R],M=w.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const Rg={[ba]:wa,[Ta]:Ra,[Aa]:Pa,[Rs]:Ca,[wa]:ba,[Ra]:Ta,[Pa]:Aa,[Ca]:Rs};function Pg(i,t){function e(){let P=!1;const et=new ge;let H=null;const $=new ge(0,0,0,0);return{setMask:function(ot){H!==ot&&!P&&(i.colorMask(ot,ot,ot,ot),H=ot)},setLocked:function(ot){P=ot},setClear:function(ot,rt,Ft,we,ze){ze===!0&&(ot*=we,rt*=we,Ft*=we),et.set(ot,rt,Ft,we),$.equals(et)===!1&&(i.clearColor(ot,rt,Ft,we),$.copy(et))},reset:function(){P=!1,H=null,$.set(-1,0,0,0)}}}function n(){let P=!1,et=!1,H=null,$=null,ot=null;return{setReversed:function(rt){if(et!==rt){const Ft=t.get("EXT_clip_control");et?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const we=ot;ot=null,this.setClear(we)}et=rt},getReversed:function(){return et},setTest:function(rt){rt?mt(i.DEPTH_TEST):Ot(i.DEPTH_TEST)},setMask:function(rt){H!==rt&&!P&&(i.depthMask(rt),H=rt)},setFunc:function(rt){if(et&&(rt=Rg[rt]),$!==rt){switch(rt){case ba:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Ta:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case Aa:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case Ra:i.depthFunc(i.GREATER);break;case Pa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=rt}},setLocked:function(rt){P=rt},setClear:function(rt){ot!==rt&&(et&&(rt=1-rt),i.clearDepth(rt),ot=rt)},reset:function(){P=!1,H=null,$=null,ot=null,et=!1}}}function s(){let P=!1,et=null,H=null,$=null,ot=null,rt=null,Ft=null,we=null,ze=null;return{setTest:function(ae){P||(ae?mt(i.STENCIL_TEST):Ot(i.STENCIL_TEST))},setMask:function(ae){et!==ae&&!P&&(i.stencilMask(ae),et=ae)},setFunc:function(ae,bn,Vn){(H!==ae||$!==bn||ot!==Vn)&&(i.stencilFunc(ae,bn,Vn),H=ae,$=bn,ot=Vn)},setOp:function(ae,bn,Vn){(rt!==ae||Ft!==bn||we!==Vn)&&(i.stencilOp(ae,bn,Vn),rt=ae,Ft=bn,we=Vn)},setLocked:function(ae){P=ae},setClear:function(ae){ze!==ae&&(i.clearStencil(ae),ze=ae)},reset:function(){P=!1,et=null,H=null,$=null,ot=null,rt=null,Ft=null,we=null,ze=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,L=null,w=null,C=new Qt(0,0,0),R=0,E=!1,M=null,I=null,V=null,G=null,Z=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,tt=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(O)[1]),q=tt>=1):O.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),q=tt>=2);let nt=null,st={};const Et=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),qt=new ge().fromArray(Et),K=new ge().fromArray(kt);function ct(P,et,H,$){const ot=new Uint8Array(4),rt=i.createTexture();i.bindTexture(P,rt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<H;Ft++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ot):i.texImage2D(et+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ot);return rt}const bt={};bt[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),mt(i.DEPTH_TEST),o.setFunc(Rs),dt(!1),ut($l),mt(i.CULL_FACE),F(yi);function mt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Ot(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Ht(P,et){return u[P]!==et?(i.bindFramebuffer(P,et),u[P]=et,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=et),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=et),!0):!1}function zt(P,et){let H=d,$=!1;if(P){H=f.get(et),H===void 0&&(H=[],f.set(et,H));const ot=P.textures;if(H.length!==ot.length||H[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ft=ot.length;rt<Ft;rt++)H[rt]=i.COLOR_ATTACHMENT0+rt;H.length=ot.length,$=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,$=!0);$&&i.drawBuffers(H)}function re(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const Xt={[Bi]:i.FUNC_ADD,[qu]:i.FUNC_SUBTRACT,[$u]:i.FUNC_REVERSE_SUBTRACT};Xt[Zu]=i.MIN,Xt[Ku]=i.MAX;const de={[ju]:i.ZERO,[Ju]:i.ONE,[Qu]:i.SRC_COLOR,[Sa]:i.SRC_ALPHA,[of]:i.SRC_ALPHA_SATURATE,[sf]:i.DST_COLOR,[ef]:i.DST_ALPHA,[tf]:i.ONE_MINUS_SRC_COLOR,[Ea]:i.ONE_MINUS_SRC_ALPHA,[rf]:i.ONE_MINUS_DST_COLOR,[nf]:i.ONE_MINUS_DST_ALPHA,[af]:i.CONSTANT_COLOR,[lf]:i.ONE_MINUS_CONSTANT_COLOR,[cf]:i.CONSTANT_ALPHA,[hf]:i.ONE_MINUS_CONSTANT_ALPHA};function F(P,et,H,$,ot,rt,Ft,we,ze,ae){if(P===yi){x===!0&&(Ot(i.BLEND),x=!1);return}if(x===!1&&(mt(i.BLEND),x=!0),P!==Yu){if(P!==m||ae!==E){if((p!==Bi||_!==Bi)&&(i.blendEquation(i.FUNC_ADD),p=Bi,_=Bi),ae)switch(P){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFunc(i.ONE,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Kl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,y=null,L=null,w=null,C.set(0,0,0),R=0,m=P,E=ae}return}ot=ot||et,rt=rt||H,Ft=Ft||$,(et!==p||ot!==_)&&(i.blendEquationSeparate(Xt[et],Xt[ot]),p=et,_=ot),(H!==v||$!==y||rt!==L||Ft!==w)&&(i.blendFuncSeparate(de[H],de[$],de[rt],de[Ft]),v=H,y=$,L=rt,w=Ft),(we.equals(C)===!1||ze!==R)&&(i.blendColor(we.r,we.g,we.b,ze),C.copy(we),R=ze),m=P,E=!1}function yt(P,et){P.side===Ie?Ot(i.CULL_FACE):mt(i.CULL_FACE);let H=P.side===je;et&&(H=!H),dt(H),P.blending===ws&&P.transparent===!1?F(yi):F(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const $=P.stencilWrite;a.setTest($),$&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Ut(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?mt(i.SAMPLE_ALPHA_TO_COVERAGE):Ot(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(P){M!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),M=P)}function ut(P){P!==Wu?(mt(i.CULL_FACE),P!==I&&(P===$l?i.cullFace(i.BACK):P===Xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ot(i.CULL_FACE),I=P}function at(P){P!==V&&(q&&i.lineWidth(P),V=P)}function Ut(P,et,H){P?(mt(i.POLYGON_OFFSET_FILL),(G!==et||Z!==H)&&(i.polygonOffset(et,H),G=et,Z=H)):Ot(i.POLYGON_OFFSET_FILL)}function vt(P){P?mt(i.SCISSOR_TEST):Ot(i.SCISSOR_TEST)}function A(P){P===void 0&&(P=i.TEXTURE0+Q-1),nt!==P&&(i.activeTexture(P),nt=P)}function S(P,et,H){H===void 0&&(nt===null?H=i.TEXTURE0+Q-1:H=nt);let $=st[H];$===void 0&&($={type:void 0,texture:void 0},st[H]=$),($.type!==P||$.texture!==et)&&(nt!==H&&(i.activeTexture(H),nt=H),i.bindTexture(P,et||bt[P]),$.type=P,$.texture=et)}function k(){const P=st[nt];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Gt(P){qt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),qt.copy(P))}function Tt(P){K.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),K.copy(P))}function D(P,et){let H=c.get(et);H===void 0&&(H=new WeakMap,c.set(et,H));let $=H.get(P);$===void 0&&($=i.getUniformBlockIndex(et,P.name),H.set(P,$))}function X(P,et){const $=c.get(et).get(P);l.get(et)!==$&&(i.uniformBlockBinding(et,$,P.__bindingPointIndex),l.set(et,$))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},nt=null,st={},u={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,L=null,w=null,C=new Qt(0,0,0),R=0,E=!1,M=null,I=null,V=null,G=null,Z=null,qt.set(0,0,i.canvas.width,i.canvas.height),K.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:mt,disable:Ot,bindFramebuffer:Ht,drawBuffers:zt,useProgram:re,setBlending:F,setMaterial:yt,setFlipSided:dt,setCullFace:ut,setLineWidth:at,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:A,bindTexture:S,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:it,texImage2D:wt,texImage3D:Bt,updateUBOMapping:D,uniformBlockBinding:X,texStorage2D:ie,texStorage3D:ht,texSubImage2D:j,texSubImage3D:Ct,compressedTexSubImage2D:pt,compressedTexSubImage3D:Mt,scissor:Gt,viewport:Tt,reset:lt}}function Vc(i,t,e,n){const s=Lg(n);switch(e){case Gh:return i*t;case Wh:return i*t;case Xh:return i*t*2;case Yh:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case qh:return i*t*2/s.components*s.byteLength;case Ml:return i*t*2/s.components*s.byteLength;case Vh:return i*t*3/s.components*s.byteLength;case Ln:return i*t*4/s.components*s.byteLength;case yl:return i*t*4/s.components*s.byteLength;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Na:case Oa:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Fa:return Math.max(i,8)*Math.max(t,8)/2;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Va:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case so:case el:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $h:case il:return Math.ceil(i/4)*Math.ceil(t/4)*8;case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lg(i){switch(i){case si:case zh:return{byteLength:1,components:1};case lr:case kh:case dr:return{byteLength:2,components:1};case _l:case xl:return{byteLength:2,components:4};case qi:case gl:case Qn:return{byteLength:4,components:1};case Hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Dg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return d?new OffscreenCanvas(A,S):cr("canvas")}function x(A,S,k){let J=1;const it=vt(A);if((it.width>k||it.height>k)&&(J=k/Math.max(it.width,it.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(J*it.width),Ct=Math.floor(J*it.height);u===void 0&&(u=g(j,Ct));const pt=S?g(j,Ct):u;return pt.width=j,pt.height=Ct,pt.getContext("2d").drawImage(A,0,0,j,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+j+"x"+Ct+")."),pt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,S,k,J,it=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=S;if(S===i.RED&&(k===i.FLOAT&&(j=i.R32F),k===i.HALF_FLOAT&&(j=i.R16F),k===i.UNSIGNED_BYTE&&(j=i.R8)),S===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.R8UI),k===i.UNSIGNED_SHORT&&(j=i.R16UI),k===i.UNSIGNED_INT&&(j=i.R32UI),k===i.BYTE&&(j=i.R8I),k===i.SHORT&&(j=i.R16I),k===i.INT&&(j=i.R32I)),S===i.RG&&(k===i.FLOAT&&(j=i.RG32F),k===i.HALF_FLOAT&&(j=i.RG16F),k===i.UNSIGNED_BYTE&&(j=i.RG8)),S===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RG8UI),k===i.UNSIGNED_SHORT&&(j=i.RG16UI),k===i.UNSIGNED_INT&&(j=i.RG32UI),k===i.BYTE&&(j=i.RG8I),k===i.SHORT&&(j=i.RG16I),k===i.INT&&(j=i.RG32I)),S===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGB8UI),k===i.UNSIGNED_SHORT&&(j=i.RGB16UI),k===i.UNSIGNED_INT&&(j=i.RGB32UI),k===i.BYTE&&(j=i.RGB8I),k===i.SHORT&&(j=i.RGB16I),k===i.INT&&(j=i.RGB32I)),S===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),k===i.UNSIGNED_INT&&(j=i.RGBA32UI),k===i.BYTE&&(j=i.RGBA8I),k===i.SHORT&&(j=i.RGBA16I),k===i.INT&&(j=i.RGBA32I)),S===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),S===i.RGBA){const Ct=it?go:se.getTransfer(J);k===i.FLOAT&&(j=i.RGBA32F),k===i.HALF_FLOAT&&(j=i.RGBA16F),k===i.UNSIGNED_BYTE&&(j=Ct===pe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function _(A,S){let k;return A?S===null||S===qi||S===Ds?k=i.DEPTH24_STENCIL8:S===Qn?k=i.DEPTH32F_STENCIL8:S===lr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qi||S===Ds?k=i.DEPTH_COMPONENT24:S===Qn?k=i.DEPTH_COMPONENT32F:S===lr&&(k=i.DEPTH_COMPONENT16),k}function L(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dn&&A.minFilter!==zn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function w(A){const S=A.target;S.removeEventListener("dispose",w),R(S),S.isVideoTexture&&h.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),M(S)}function R(A){const S=n.get(A);if(S.__webglInit===void 0)return;const k=A.source,J=f.get(k);if(J){const it=J[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(A),Object.keys(J).length===0&&f.delete(k)}n.remove(A)}function E(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const k=A.source,J=f.get(k);delete J[S.__cacheKey],o.memory.textures--}function M(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let it=0;it<S.__webglFramebuffer[J].length;it++)i.deleteFramebuffer(S.__webglFramebuffer[J][it]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const k=A.textures;for(let J=0,it=k.length;J<it;J++){const j=n.get(k[J]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(A)}let I=0;function V(){I=0}function G(){const A=I;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function Z(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function Q(A,S){const k=n.get(A);if(A.isVideoTexture&&at(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(k,A,S);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+S)}function q(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){K(k,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+S)}function tt(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){K(k,A,S);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+S)}function O(A,S){const k=n.get(A);if(A.version>0&&k.__version!==A.version){ct(k,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+S)}const nt={[Yi]:i.REPEAT,[Gi]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},st={[Dn]:i.NEAREST,[vf]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[zn]:i.LINEAR,[wo]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},Et={[Ef]:i.NEVER,[Rf]:i.ALWAYS,[bf]:i.LESS,[Kh]:i.LEQUAL,[wf]:i.EQUAL,[Cf]:i.GEQUAL,[Tf]:i.GREATER,[Af]:i.NOTEQUAL};function kt(A,S){if(S.type===Qn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===zn||S.magFilter===wo||S.magFilter===vr||S.magFilter===Vi||S.minFilter===zn||S.minFilter===wo||S.minFilter===vr||S.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,nt[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,nt[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,nt[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,st[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,st[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Et[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Dn||S.minFilter!==vr&&S.minFilter!==Vi||S.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function qt(A,S){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",w));const J=S.source;let it=f.get(J);it===void 0&&(it={},f.set(J,it));const j=Z(S);if(j!==A.__cacheKey){it[j]===void 0&&(it[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),it[j].usedTimes++;const Ct=it[A.__cacheKey];Ct!==void 0&&(it[A.__cacheKey].usedTimes--,Ct.usedTimes===0&&E(S)),A.__cacheKey=j,A.__webglTexture=it[j].texture}return k}function K(A,S,k){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const it=qt(A,S),j=S.source;e.bindTexture(J,A.__webglTexture,i.TEXTURE0+k);const Ct=n.get(j);if(j.version!==Ct.__version||it===!0){e.activeTexture(i.TEXTURE0+k);const pt=se.getPrimaries(se.workingColorSpace),Mt=S.colorSpace===vi?null:se.getPrimaries(S.colorSpace),ie=S.colorSpace===vi||pt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ht=x(S.image,!1,s.maxTextureSize);ht=Ut(S,ht);const wt=r.convert(S.format,S.colorSpace),Bt=r.convert(S.type);let Gt=y(S.internalFormat,wt,Bt,S.colorSpace,S.isVideoTexture);kt(J,S);let Tt;const D=S.mipmaps,X=S.isVideoTexture!==!0,lt=Ct.__version===void 0||it===!0,P=j.dataReady,et=L(S,ht);if(S.isDepthTexture)Gt=_(S.format===Is,S.type),lt&&(X?e.texStorage2D(i.TEXTURE_2D,1,Gt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Gt,ht.width,ht.height,0,wt,Bt,null));else if(S.isDataTexture)if(D.length>0){X&&lt&&e.texStorage2D(i.TEXTURE_2D,et,Gt,D[0].width,D[0].height);for(let H=0,$=D.length;H<$;H++)Tt=D[H],X?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,Tt.width,Tt.height,wt,Bt,Tt.data):e.texImage2D(i.TEXTURE_2D,H,Gt,Tt.width,Tt.height,0,wt,Bt,Tt.data);S.generateMipmaps=!1}else X?(lt&&e.texStorage2D(i.TEXTURE_2D,et,Gt,ht.width,ht.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,wt,Bt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,ht.width,ht.height,0,wt,Bt,ht.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){X&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,Gt,D[0].width,D[0].height,ht.depth);for(let H=0,$=D.length;H<$;H++)if(Tt=D[H],S.format!==Ln)if(wt!==null)if(X){if(P)if(S.layerUpdates.size>0){const ot=Vc(Tt.width,Tt.height,S.format,S.type);for(const rt of S.layerUpdates){const Ft=Tt.data.subarray(rt*ot/Tt.data.BYTES_PER_ELEMENT,(rt+1)*ot/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,rt,Tt.width,Tt.height,1,wt,Ft)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,Tt.width,Tt.height,ht.depth,wt,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Gt,Tt.width,Tt.height,ht.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,Tt.width,Tt.height,ht.depth,wt,Bt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,Gt,Tt.width,Tt.height,ht.depth,0,wt,Bt,Tt.data)}else{X&&lt&&e.texStorage2D(i.TEXTURE_2D,et,Gt,D[0].width,D[0].height);for(let H=0,$=D.length;H<$;H++)Tt=D[H],S.format!==Ln?wt!==null?X?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,H,Gt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,Tt.width,Tt.height,wt,Bt,Tt.data):e.texImage2D(i.TEXTURE_2D,H,Gt,Tt.width,Tt.height,0,wt,Bt,Tt.data)}else if(S.isDataArrayTexture)if(X){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,et,Gt,ht.width,ht.height,ht.depth),P)if(S.layerUpdates.size>0){const H=Vc(ht.width,ht.height,S.format,S.type);for(const $ of S.layerUpdates){const ot=ht.data.subarray($*H/ht.data.BYTES_PER_ELEMENT,($+1)*H/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,ht.width,ht.height,1,wt,Bt,ot)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,wt,Bt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ht.width,ht.height,ht.depth,0,wt,Bt,ht.data);else if(S.isData3DTexture)X?(lt&&e.texStorage3D(i.TEXTURE_3D,et,Gt,ht.width,ht.height,ht.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,wt,Bt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,ht.width,ht.height,ht.depth,0,wt,Bt,ht.data);else if(S.isFramebufferTexture){if(lt)if(X)e.texStorage2D(i.TEXTURE_2D,et,Gt,ht.width,ht.height);else{let H=ht.width,$=ht.height;for(let ot=0;ot<et;ot++)e.texImage2D(i.TEXTURE_2D,ot,Gt,H,$,0,wt,Bt,null),H>>=1,$>>=1}}else if(D.length>0){if(X&&lt){const H=vt(D[0]);e.texStorage2D(i.TEXTURE_2D,et,Gt,H.width,H.height)}for(let H=0,$=D.length;H<$;H++)Tt=D[H],X?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,wt,Bt,Tt):e.texImage2D(i.TEXTURE_2D,H,Gt,wt,Bt,Tt);S.generateMipmaps=!1}else if(X){if(lt){const H=vt(ht);e.texStorage2D(i.TEXTURE_2D,et,Gt,H.width,H.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,wt,Bt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Gt,wt,Bt,ht);m(S)&&p(J),Ct.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ct(A,S,k){if(S.image.length!==6)return;const J=qt(A,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const j=n.get(it);if(it.version!==j.__version||J===!0){e.activeTexture(i.TEXTURE0+k);const Ct=se.getPrimaries(se.workingColorSpace),pt=S.colorSpace===vi?null:se.getPrimaries(S.colorSpace),Mt=S.colorSpace===vi||Ct===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const ie=S.isCompressedTexture||S.image[0].isCompressedTexture,ht=S.image[0]&&S.image[0].isDataTexture,wt=[];for(let $=0;$<6;$++)!ie&&!ht?wt[$]=x(S.image[$],!0,s.maxCubemapSize):wt[$]=ht?S.image[$].image:S.image[$],wt[$]=Ut(S,wt[$]);const Bt=wt[0],Gt=r.convert(S.format,S.colorSpace),Tt=r.convert(S.type),D=y(S.internalFormat,Gt,Tt,S.colorSpace),X=S.isVideoTexture!==!0,lt=j.__version===void 0||J===!0,P=it.dataReady;let et=L(S,Bt);kt(i.TEXTURE_CUBE_MAP,S);let H;if(ie){X&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,et,D,Bt.width,Bt.height);for(let $=0;$<6;$++){H=wt[$].mipmaps;for(let ot=0;ot<H.length;ot++){const rt=H[ot];S.format!==Ln?Gt!==null?X?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,0,0,rt.width,rt.height,Gt,rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,D,rt.width,rt.height,0,rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,0,0,rt.width,rt.height,Gt,Tt,rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot,D,rt.width,rt.height,0,Gt,Tt,rt.data)}}}else{if(H=S.mipmaps,X&&lt){H.length>0&&et++;const $=vt(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,et,D,$.width,$.height)}for(let $=0;$<6;$++)if(ht){X?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,wt[$].width,wt[$].height,Gt,Tt,wt[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,D,wt[$].width,wt[$].height,0,Gt,Tt,wt[$].data);for(let ot=0;ot<H.length;ot++){const Ft=H[ot].image[$].image;X?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,0,0,Ft.width,Ft.height,Gt,Tt,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,D,Ft.width,Ft.height,0,Gt,Tt,Ft.data)}}else{X?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Gt,Tt,wt[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,D,Gt,Tt,wt[$]);for(let ot=0;ot<H.length;ot++){const rt=H[ot];X?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,0,0,Gt,Tt,rt.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ot+1,D,Gt,Tt,rt.image[$])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),j.__version=it.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function bt(A,S,k,J,it,j){const Ct=r.convert(k.format,k.colorSpace),pt=r.convert(k.type),Mt=y(k.internalFormat,Ct,pt,k.colorSpace),ie=n.get(S),ht=n.get(k);if(ht.__renderTarget=S,!ie.__hasExternalTextures){const wt=Math.max(1,S.width>>j),Bt=Math.max(1,S.height>>j);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,j,Mt,wt,Bt,S.depth,0,Ct,pt,null):e.texImage2D(it,j,Mt,wt,Bt,0,Ct,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ut(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,it,ht.__webglTexture,0,dt(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,it,ht.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(A,S,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const J=S.depthTexture,it=J&&J.isDepthTexture?J.type:null,j=_(S.stencilBuffer,it),Ct=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=dt(S);ut(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,j,S.width,S.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,j,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,j,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ct,i.RENDERBUFFER,A)}else{const J=S.textures;for(let it=0;it<J.length;it++){const j=J[it],Ct=r.convert(j.format,j.colorSpace),pt=r.convert(j.type),Mt=y(j.internalFormat,Ct,pt,j.colorSpace),ie=dt(S);k&&ut(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Mt,S.width,S.height):ut(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Mt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ot(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Q(S.depthTexture,0);const it=J.__webglTexture,j=dt(S);if(S.depthTexture.format===Ts)ut(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(S.depthTexture.format===Is)ut(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function Ht(A){const S=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const it=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",it)};J.addEventListener("dispose",it),S.__depthDisposeCallback=it}S.__boundDepthTexture=J}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ot(S.__webglFramebuffer,A)}else if(k){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),mt(S.__webglDepthbuffer[J],A,!1);else{const it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),mt(S.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,it)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(A,S,k){const J=n.get(A);S!==void 0&&bt(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ht(A)}function re(A){const S=A.texture,k=n.get(A),J=n.get(S);A.addEventListener("dispose",C);const it=A.textures,j=A.isWebGLCubeRenderTarget===!0,Ct=it.length>1;if(Ct||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,o.memory.textures++),j){k.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer[pt]=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)k.__webglFramebuffer[pt][Mt]=i.createFramebuffer()}else k.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){k.__webglFramebuffer=[];for(let pt=0;pt<S.mipmaps.length;pt++)k.__webglFramebuffer[pt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Ct)for(let pt=0,Mt=it.length;pt<Mt;pt++){const ie=n.get(it[pt]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ut(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let pt=0;pt<it.length;pt++){const Mt=it[pt];k.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[pt]);const ie=r.convert(Mt.format,Mt.colorSpace),ht=r.convert(Mt.type),wt=y(Mt.internalFormat,ie,ht,Mt.colorSpace,A.isXRRenderTarget===!0),Bt=dt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,wt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,k.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),mt(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),kt(i.TEXTURE_CUBE_MAP,S);for(let pt=0;pt<6;pt++)if(S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)bt(k.__webglFramebuffer[pt][Mt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Mt);else bt(k.__webglFramebuffer[pt],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let pt=0,Mt=it.length;pt<Mt;pt++){const ie=it[pt],ht=n.get(ie);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),kt(i.TEXTURE_2D,ie),bt(k.__webglFramebuffer,A,ie,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),m(ie)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,J.__webglTexture),kt(pt,S),S.mipmaps&&S.mipmaps.length>0)for(let Mt=0;Mt<S.mipmaps.length;Mt++)bt(k.__webglFramebuffer[Mt],A,S,i.COLOR_ATTACHMENT0,pt,Mt);else bt(k.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,pt,0);m(S)&&p(pt),e.unbindTexture()}A.depthBuffer&&Ht(A)}function Xt(A){const S=A.textures;for(let k=0,J=S.length;k<J;k++){const it=S[k];if(m(it)){const j=v(A),Ct=n.get(it).__webglTexture;e.bindTexture(j,Ct),p(j),e.unbindTexture()}}}const de=[],F=[];function yt(A){if(A.samples>0){if(ut(A)===!1){const S=A.textures,k=A.width,J=A.height;let it=i.COLOR_BUFFER_BIT;const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ct=n.get(A),pt=S.length>1;if(pt)for(let Mt=0;Mt<S.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Mt=0;Mt<S.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);const ie=n.get(S[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,k,J,0,0,k,J,it,i.NEAREST),l===!0&&(de.length=0,F.length=0,de.push(i.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(de.push(j),F.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,F)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let Mt=0;Mt<S.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Ct.__webglColorRenderbuffer[Mt]);const ie=n.get(S[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function dt(A){return Math.min(s.maxSamples,A.samples)}function ut(A){const S=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Ut(A,S){const k=A.colorSpace,J=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Fs&&k!==vi&&(se.getTransfer(k)===pe?(J!==Ln||it!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),S}function vt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=V,this.setTexture2D=Q,this.setTexture2DArray=q,this.setTexture3D=tt,this.setTextureCube=O,this.rebindTextures=zt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=ut}function Ig(i,t){function e(n,s=vi){let r;const o=se.getTransfer(s);if(n===si)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.BYTE;if(n===kh)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===gl)return i.INT;if(n===qi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===dr)return i.HALF_FLOAT;if(n===Gh)return i.ALPHA;if(n===Vh)return i.RGB;if(n===Ln)return i.RGBA;if(n===Wh)return i.LUMINANCE;if(n===Xh)return i.LUMINANCE_ALPHA;if(n===Ts)return i.DEPTH_COMPONENT;if(n===Is)return i.DEPTH_STENCIL;if(n===Yh)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===qh)return i.RG;if(n===Ml)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Na||n===Fa||n===Oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ba||n===za||n===ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ba||n===za)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===Ya||n===qa||n===$a||n===Za||n===Ka||n===ja||n===Ja||n===Qa||n===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ga)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Va)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Za)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ja)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===el||n===nl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$h||n===il||n===sl||n===rl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ug extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ne extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ng={type:"move"};class ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`;class Bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new wi({vertexShader:Fg,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xt(new Ae(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zg extends ji{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const x=new Bg,m=e.getContextAttributes();let p=null,v=null;const y=[],_=[],L=new _t;let w=null;const C=new mn;C.viewport=new ge;const R=new mn;R.viewport=new ge;const E=[C,R],M=new Ug;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ct=y[K];return ct===void 0&&(ct=new ta,y[K]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(K){let ct=y[K];return ct===void 0&&(ct=new ta,y[K]=ct),ct.getGripSpace()},this.getHand=function(K){let ct=y[K];return ct===void 0&&(ct=new ta,y[K]=ct),ct.getHandSpace()};function G(K){const ct=_.indexOf(K.inputSource);if(ct===-1)return;const bt=y[ct];bt!==void 0&&(bt.update(K.inputSource,K.frame,c||o),bt.dispatchEvent({type:K.type,data:K.inputSource}))}function Z(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",Q);for(let K=0;K<y.length;K++){const ct=_[K];ct!==null&&(_[K]=null,y[K].disconnect(ct))}I=null,V=null,x.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new $i(d.framebufferWidth,d.framebufferHeight,{format:Ln,type:si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,bt=null,mt=null;m.depth&&(mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?Is:Ts,bt=m.stencil?Ds:qi);const Ot={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Ot),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new $i(f.textureWidth,f.textureHeight,{format:Ln,type:si,depthTexture:new lu(f.textureWidth,f.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(K){for(let ct=0;ct<K.removed.length;ct++){const bt=K.removed[ct],mt=_.indexOf(bt);mt>=0&&(_[mt]=null,y[mt].disconnect(bt))}for(let ct=0;ct<K.added.length;ct++){const bt=K.added[ct];let mt=_.indexOf(bt);if(mt===-1){for(let Ht=0;Ht<y.length;Ht++)if(Ht>=_.length){_.push(bt),mt=Ht;break}else if(_[Ht]===null){_[Ht]=bt,mt=Ht;break}if(mt===-1)break}const Ot=y[mt];Ot&&Ot.connect(bt)}}const q=new N,tt=new N;function O(K,ct,bt){q.setFromMatrixPosition(ct.matrixWorld),tt.setFromMatrixPosition(bt.matrixWorld);const mt=q.distanceTo(tt),Ot=ct.projectionMatrix.elements,Ht=bt.projectionMatrix.elements,zt=Ot[14]/(Ot[10]-1),re=Ot[14]/(Ot[10]+1),Xt=(Ot[9]+1)/Ot[5],de=(Ot[9]-1)/Ot[5],F=(Ot[8]-1)/Ot[0],yt=(Ht[8]+1)/Ht[0],dt=zt*F,ut=zt*yt,at=mt/(-F+yt),Ut=at*-F;if(ct.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ut),K.translateZ(at),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ot[10]===-1)K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const vt=zt+at,A=re+at,S=dt-Ut,k=ut+(mt-Ut),J=Xt*re/A*vt,it=de*re/A*vt;K.projectionMatrix.makePerspective(S,k,J,it,vt,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function nt(K,ct){ct===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ct.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ct=K.near,bt=K.far;x.texture!==null&&(x.depthNear>0&&(ct=x.depthNear),x.depthFar>0&&(bt=x.depthFar)),M.near=R.near=C.near=ct,M.far=R.far=C.far=bt,(I!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,V=M.far),C.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,M.layers.mask=C.layers.mask|R.layers.mask;const mt=K.parent,Ot=M.cameras;nt(M,mt);for(let Ht=0;Ht<Ot.length;Ht++)nt(Ot[Ht],mt);Ot.length===2?O(M,C,R):M.projectionMatrix.copy(C.projectionMatrix),st(K,M,mt)};function st(K,ct,bt){bt===null?K.matrix.copy(ct.matrixWorld):(K.matrix.copy(bt.matrixWorld),K.matrix.invert(),K.matrix.multiply(ct.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ct.projectionMatrix),K.projectionMatrixInverse.copy(ct.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=al*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Et=null;function kt(K,ct){if(h=ct.getViewerPose(c||o),g=ct,h!==null){const bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let mt=!1;bt.length!==M.cameras.length&&(M.cameras.length=0,mt=!0);for(let Ht=0;Ht<bt.length;Ht++){const zt=bt[Ht];let re=null;if(d!==null)re=d.getViewport(zt);else{const de=u.getViewSubImage(f,zt);re=de.viewport,Ht===0&&(t.setRenderTargetTextures(v,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),t.setRenderTarget(v))}let Xt=E[Ht];Xt===void 0&&(Xt=new mn,Xt.layers.enable(Ht),Xt.viewport=new ge,E[Ht]=Xt),Xt.matrix.fromArray(zt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(zt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(re.x,re.y,re.width,re.height),Ht===0&&(M.matrix.copy(Xt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),mt===!0&&M.cameras.push(Xt)}const Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){const Ht=u.getDepthInformation(bt[0]);Ht&&Ht.isValid&&Ht.texture&&x.init(t,Ht,s.renderState)}}for(let bt=0;bt<y.length;bt++){const mt=_[bt],Ot=y[bt];mt!==null&&Ot!==void 0&&Ot.update(mt,ct,c||o)}Et&&Et(K,ct),ct.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ct}),g=null}const qt=new ou;qt.setAnimationLoop(kt),this.setAnimationLoop=function(K){Et=K},this.dispose=function(){}}}const Ui=new Qe,kg=new _e;function Hg(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,iu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,Ui.copy(_),Ui.x*=-1,Ui.y*=-1,Ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ui.y*=-1,Ui.z*=-1),m.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Ui)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const _=y.program;n.uniformBlockBinding(v,_)}function c(v,y){let _=s[v.id];_===void 0&&(g(v),_=h(v),s[v.id]=_,v.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(v,L);const w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function h(v){const y=u();v.__bindingPointIndex=y;const _=i.createBuffer(),L=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],_=v.uniforms,L=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,C=_.length;w<C;w++){const R=Array.isArray(_[w])?_[w]:[_[w]];for(let E=0,M=R.length;E<M;E++){const I=R[E];if(d(I,w,E,L)===!0){const V=I.__offset,G=Array.isArray(I.value)?I.value:[I.value];let Z=0;for(let Q=0;Q<G.length;Q++){const q=G[Q],tt=x(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,V+Z,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,Z),Z+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,_,L){const w=v.value,C=y+"_"+_;if(L[C]===void 0)return typeof w=="number"||typeof w=="boolean"?L[C]=w:L[C]=w.clone(),!0;{const R=L[C];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return L[C]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){const y=v.uniforms;let _=0;const L=16;for(let C=0,R=y.length;C<R;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let M=0,I=E.length;M<I;M++){const V=E[M],G=Array.isArray(V.value)?V.value:[V.value];for(let Z=0,Q=G.length;Z<Q;Z++){const q=G[Z],tt=x(q),O=_%L,nt=O%tt.boundary,st=O+nt;_+=nt,st!==0&&L-st<tt.storage&&(_+=L-st),V.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=tt.storage}}}const w=_%L;return w>0&&(_+=L-w),v.__size=_,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class Vg{constructor(t={}){const{canvas:e=Lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=Si,this.toneMappingExposure=1;const _=this;let L=!1,w=0,C=0,R=null,E=-1,M=null;const I=new ge,V=new ge;let G=null;const Z=new Qt(0);let Q=0,q=e.width,tt=e.height,O=1,nt=null,st=null;const Et=new ge(0,0,q,tt),kt=new ge(0,0,q,tt);let qt=!1;const K=new bl;let ct=!1,bt=!1;const mt=new _e,Ot=new _e,Ht=new N,zt=new ge,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function de(){return R===null?O:1}let F=n;function yt(b,B){return e.getContext(b,B)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ml}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ot,!1),e.addEventListener("webglcontextcreationerror",rt,!1),F===null){const B="webgl2";if(F=yt(B,b),F===null)throw yt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let dt,ut,at,Ut,vt,A,S,k,J,it,j,Ct,pt,Mt,ie,ht,wt,Bt,Gt,Tt,D,X,lt,P;function et(){dt=new $0(F),dt.init(),X=new Ig(F,dt),ut=new G0(F,dt,t,X),at=new Pg(F,dt),ut.reverseDepthBuffer&&f&&at.buffers.depth.setReversed(!0),Ut=new j0(F),vt=new mg,A=new Dg(F,dt,at,vt,ut,X,Ut),S=new W0(_),k=new q0(_),J=new sd(F),lt=new k0(F,J),it=new Z0(F,J,Ut,lt),j=new Q0(F,it,J,Ut),Gt=new J0(F,ut,A),ht=new V0(vt),Ct=new pg(_,S,k,dt,ut,lt,ht),pt=new Hg(_,vt),Mt=new _g,ie=new Eg(dt),Bt=new z0(_,S,k,at,j,d,l),wt=new Cg(_,j,ut),P=new Gg(F,Ut,ut,at),Tt=new H0(F,dt,Ut),D=new K0(F,dt,Ut),Ut.programs=Ct.programs,_.capabilities=ut,_.extensions=dt,_.properties=vt,_.renderLists=Mt,_.shadowMap=wt,_.state=at,_.info=Ut}et();const H=new zg(_,F);this.xr=H,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=dt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=dt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(b){b!==void 0&&(O=b,this.setSize(q,tt,!1))},this.getSize=function(b){return b.set(q,tt)},this.setSize=function(b,B,W=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,tt=B,e.width=Math.floor(b*O),e.height=Math.floor(B*O),W===!0&&(e.style.width=b+"px",e.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(q*O,tt*O).floor()},this.setDrawingBufferSize=function(b,B,W){q=b,tt=B,O=W,e.width=Math.floor(b*W),e.height=Math.floor(B*W),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,B,W,Y){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,B,W,Y),at.viewport(I.copy(Et).multiplyScalar(O).round())},this.getScissor=function(b){return b.copy(kt)},this.setScissor=function(b,B,W,Y){b.isVector4?kt.set(b.x,b.y,b.z,b.w):kt.set(b,B,W,Y),at.scissor(V.copy(kt).multiplyScalar(O).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(b){at.setScissorTest(qt=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(b=!0,B=!0,W=!0){let Y=0;if(b){let z=!1;if(R!==null){const ft=R.texture.format;z=ft===yl||ft===Ml||ft===vl}if(z){const ft=R.texture.type,St=ft===si||ft===qi||ft===lr||ft===Ds||ft===_l||ft===xl,Lt=Bt.getClearColor(),Dt=Bt.getClearAlpha(),Wt=Lt.r,Zt=Lt.g,It=Lt.b;St?(g[0]=Wt,g[1]=Zt,g[2]=It,g[3]=Dt,F.clearBufferuiv(F.COLOR,0,g)):(x[0]=Wt,x[1]=Zt,x[2]=It,x[3]=Dt,F.clearBufferiv(F.COLOR,0,x))}else Y|=F.COLOR_BUFFER_BIT}B&&(Y|=F.DEPTH_BUFFER_BIT),W&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ot,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),Mt.dispose(),ie.dispose(),vt.dispose(),S.dispose(),k.dispose(),j.dispose(),lt.dispose(),P.dispose(),Ct.dispose(),H.dispose(),H.removeEventListener("sessionstart",kl),H.removeEventListener("sessionend",Hl),Ci.stop()};function $(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const b=Ut.autoReset,B=wt.enabled,W=wt.autoUpdate,Y=wt.needsUpdate,z=wt.type;et(),Ut.autoReset=b,wt.enabled=B,wt.autoUpdate=W,wt.needsUpdate=Y,wt.type=z}function rt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ft(b){const B=b.target;B.removeEventListener("dispose",Ft),we(B)}function we(b){ze(b),vt.remove(b)}function ze(b){const B=vt.get(b).programs;B!==void 0&&(B.forEach(function(W){Ct.releaseProgram(W)}),b.isShaderMaterial&&Ct.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,W,Y,z,ft){B===null&&(B=re);const St=z.isMesh&&z.matrixWorld.determinant()<0,Lt=Hu(b,B,W,Y,z);at.setMaterial(Y,St);let Dt=W.index,Wt=1;if(Y.wireframe===!0){if(Dt=it.getWireframeAttribute(W),Dt===void 0)return;Wt=2}const Zt=W.drawRange,It=W.attributes.position;let oe=Zt.start*Wt,Me=(Zt.start+Zt.count)*Wt;ft!==null&&(oe=Math.max(oe,ft.start*Wt),Me=Math.min(Me,(ft.start+ft.count)*Wt)),Dt!==null?(oe=Math.max(oe,0),Me=Math.min(Me,Dt.count)):It!=null&&(oe=Math.max(oe,0),Me=Math.min(Me,It.count));const Se=Me-oe;if(Se<0||Se===1/0)return;lt.setup(z,Y,Lt,W,Dt);let an,ce=Tt;if(Dt!==null&&(an=J.get(Dt),ce=D,ce.setIndex(an)),z.isMesh)Y.wireframe===!0?(at.setLineWidth(Y.wireframeLinewidth*de()),ce.setMode(F.LINES)):ce.setMode(F.TRIANGLES);else if(z.isLine){let Nt=Y.linewidth;Nt===void 0&&(Nt=1),at.setLineWidth(Nt*de()),z.isLineSegments?ce.setMode(F.LINES):z.isLineLoop?ce.setMode(F.LINE_LOOP):ce.setMode(F.LINE_STRIP)}else z.isPoints?ce.setMode(F.POINTS):z.isSprite&&ce.setMode(F.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ce.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))ce.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Nt=z._multiDrawStarts,Wn=z._multiDrawCounts,he=z._multiDrawCount,wn=Dt?J.get(Dt).bytesPerElement:1,Qi=vt.get(Y).currentProgram.getUniforms();for(let hn=0;hn<he;hn++)Qi.setValue(F,"_gl_DrawID",hn),ce.render(Nt[hn]/wn,Wn[hn])}else if(z.isInstancedMesh)ce.renderInstances(oe,Se,z.count);else if(W.isInstancedBufferGeometry){const Nt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Wn=Math.min(W.instanceCount,Nt);ce.renderInstances(oe,Se,Wn)}else ce.render(oe,Se)};function ae(b,B,W){b.transparent===!0&&b.side===Ie&&b.forceSinglePass===!1?(b.side=je,b.needsUpdate=!0,xr(b,B,W),b.side=Ei,b.needsUpdate=!0,xr(b,B,W),b.side=Ie):xr(b,B,W)}this.compile=function(b,B,W=null){W===null&&(W=b),p=ie.get(W),p.init(B),y.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),b!==W&&b.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Y=new Set;return b.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ft=z.material;if(ft)if(Array.isArray(ft))for(let St=0;St<ft.length;St++){const Lt=ft[St];ae(Lt,W,z),Y.add(Lt)}else ae(ft,W,z),Y.add(ft)}),y.pop(),p=null,Y},this.compileAsync=function(b,B,W=null){const Y=this.compile(b,B,W);return new Promise(z=>{function ft(){if(Y.forEach(function(St){vt.get(St).currentProgram.isReady()&&Y.delete(St)}),Y.size===0){z(b);return}setTimeout(ft,10)}dt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let bn=null;function Vn(b){bn&&bn(b)}function kl(){Ci.stop()}function Hl(){Ci.start()}const Ci=new ou;Ci.setAnimationLoop(Vn),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(b){bn=b,H.setAnimationLoop(b),b===null?Ci.stop():Ci.start()},H.addEventListener("sessionstart",kl),H.addEventListener("sessionend",Hl),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(B),B=H.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,B,R),p=ie.get(b,y.length),p.init(B),y.push(p),Ot.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K.setFromProjectionMatrix(Ot),bt=this.localClippingEnabled,ct=ht.init(this.clippingPlanes,bt),m=Mt.get(b,v.length),m.init(),v.push(m),H.enabled===!0&&H.isPresenting===!0){const ft=_.xr.getDepthSensingMesh();ft!==null&&bo(ft,B,-1/0,_.sortObjects)}bo(b,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(nt,st),Xt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Xt&&Bt.addToRenderList(m,b),this.info.render.frame++,ct===!0&&ht.beginShadows();const W=p.state.shadowsArray;wt.render(W,b,B),ct===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const ft=B.cameras;if(z.length>0)for(let St=0,Lt=ft.length;St<Lt;St++){const Dt=ft[St];Vl(Y,z,b,Dt)}Xt&&Bt.render(b);for(let St=0,Lt=ft.length;St<Lt;St++){const Dt=ft[St];Gl(m,b,Dt,Dt.viewport)}}else z.length>0&&Vl(Y,z,b,B),Xt&&Bt.render(b),Gl(m,b,B);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(_,b,B),lt.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ct===!0&&ht.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function bo(b,B,W,Y){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)W=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||K.intersectsSprite(b)){Y&&zt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ot);const St=j.update(b),Lt=b.material;Lt.visible&&m.push(b,St,Lt,W,zt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||K.intersectsObject(b))){const St=j.update(b),Lt=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),zt.copy(b.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),zt.copy(St.boundingSphere.center)),zt.applyMatrix4(b.matrixWorld).applyMatrix4(Ot)),Array.isArray(Lt)){const Dt=St.groups;for(let Wt=0,Zt=Dt.length;Wt<Zt;Wt++){const It=Dt[Wt],oe=Lt[It.materialIndex];oe&&oe.visible&&m.push(b,St,oe,W,zt.z,It)}}else Lt.visible&&m.push(b,St,Lt,W,zt.z,null)}}const ft=b.children;for(let St=0,Lt=ft.length;St<Lt;St++)bo(ft[St],B,W,Y)}function Gl(b,B,W,Y){const z=b.opaque,ft=b.transmissive,St=b.transparent;p.setupLightsView(W),ct===!0&&ht.setGlobalState(_.clippingPlanes,W),Y&&at.viewport(I.copy(Y)),z.length>0&&_r(z,B,W),ft.length>0&&_r(ft,B,W),St.length>0&&_r(St,B,W),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Vl(b,B,W,Y){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new $i(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?dr:si,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const ft=p.state.transmissionRenderTarget[Y.id],St=Y.viewport||I;ft.setSize(St.z,St.w);const Lt=_.getRenderTarget();_.setRenderTarget(ft),_.getClearColor(Z),Q=_.getClearAlpha(),Q<1&&_.setClearColor(16777215,.5),_.clear(),Xt&&Bt.render(W);const Dt=_.toneMapping;_.toneMapping=Si;const Wt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),ct===!0&&ht.setGlobalState(_.clippingPlanes,Y),_r(b,W,Y),A.updateMultisampleRenderTarget(ft),A.updateRenderTargetMipmap(ft),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let It=0,oe=B.length;It<oe;It++){const Me=B[It],Se=Me.object,an=Me.geometry,ce=Me.material,Nt=Me.group;if(ce.side===Ie&&Se.layers.test(Y.layers)){const Wn=ce.side;ce.side=je,ce.needsUpdate=!0,Wl(Se,W,Y,an,ce,Nt),ce.side=Wn,ce.needsUpdate=!0,Zt=!0}}Zt===!0&&(A.updateMultisampleRenderTarget(ft),A.updateRenderTargetMipmap(ft))}_.setRenderTarget(Lt),_.setClearColor(Z,Q),Wt!==void 0&&(Y.viewport=Wt),_.toneMapping=Dt}function _r(b,B,W){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,ft=b.length;z<ft;z++){const St=b[z],Lt=St.object,Dt=St.geometry,Wt=Y===null?St.material:Y,Zt=St.group;Lt.layers.test(W.layers)&&Wl(Lt,B,W,Dt,Wt,Zt)}}function Wl(b,B,W,Y,z,ft){b.onBeforeRender(_,B,W,Y,z,ft),b.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(_,B,W,Y,b,ft),z.transparent===!0&&z.side===Ie&&z.forceSinglePass===!1?(z.side=je,z.needsUpdate=!0,_.renderBufferDirect(W,B,Y,z,b,ft),z.side=Ei,z.needsUpdate=!0,_.renderBufferDirect(W,B,Y,z,b,ft),z.side=Ie):_.renderBufferDirect(W,B,Y,z,b,ft),b.onAfterRender(_,B,W,Y,z,ft)}function xr(b,B,W){B.isScene!==!0&&(B=re);const Y=vt.get(b),z=p.state.lights,ft=p.state.shadowsArray,St=z.state.version,Lt=Ct.getParameters(b,z.state,ft,B,W),Dt=Ct.getProgramCacheKey(Lt);let Wt=Y.programs;Y.environment=b.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(b.isMeshStandardMaterial?k:S).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",Ft),Wt=new Map,Y.programs=Wt);let Zt=Wt.get(Dt);if(Zt!==void 0){if(Y.currentProgram===Zt&&Y.lightsStateVersion===St)return Yl(b,Lt),Zt}else Lt.uniforms=Ct.getUniforms(b),b.onBeforeCompile(Lt,_),Zt=Ct.acquireProgram(Lt,Dt),Wt.set(Dt,Zt),Y.uniforms=Lt.uniforms;const It=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(It.clippingPlanes=ht.uniform),Yl(b,Lt),Y.needsLights=Vu(b),Y.lightsStateVersion=St,Y.needsLights&&(It.ambientLightColor.value=z.state.ambient,It.lightProbe.value=z.state.probe,It.directionalLights.value=z.state.directional,It.directionalLightShadows.value=z.state.directionalShadow,It.spotLights.value=z.state.spot,It.spotLightShadows.value=z.state.spotShadow,It.rectAreaLights.value=z.state.rectArea,It.ltc_1.value=z.state.rectAreaLTC1,It.ltc_2.value=z.state.rectAreaLTC2,It.pointLights.value=z.state.point,It.pointLightShadows.value=z.state.pointShadow,It.hemisphereLights.value=z.state.hemi,It.directionalShadowMap.value=z.state.directionalShadowMap,It.directionalShadowMatrix.value=z.state.directionalShadowMatrix,It.spotShadowMap.value=z.state.spotShadowMap,It.spotLightMatrix.value=z.state.spotLightMatrix,It.spotLightMap.value=z.state.spotLightMap,It.pointShadowMap.value=z.state.pointShadowMap,It.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Zt,Y.uniformsList=null,Zt}function Xl(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=ro.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function Yl(b,B){const W=vt.get(b);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Hu(b,B,W,Y,z){B.isScene!==!0&&(B=re),A.resetTextureUnits();const ft=B.fog,St=Y.isMeshStandardMaterial?B.environment:null,Lt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Fs,Dt=(Y.isMeshStandardMaterial?k:S).get(Y.envMap||St),Wt=Y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Zt=!!W.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!W.morphAttributes.position,oe=!!W.morphAttributes.normal,Me=!!W.morphAttributes.color;let Se=Si;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Se=_.toneMapping);const an=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ce=an!==void 0?an.length:0,Nt=vt.get(Y),Wn=p.state.lights;if(ct===!0&&(bt===!0||b!==M)){const xn=b===M&&Y.id===E;ht.setState(Y,b,xn)}let he=!1;Y.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Wn.state.version||Nt.outputColorSpace!==Lt||z.isBatchedMesh&&Nt.batching===!1||!z.isBatchedMesh&&Nt.batching===!0||z.isBatchedMesh&&Nt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Nt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Nt.instancing===!1||!z.isInstancedMesh&&Nt.instancing===!0||z.isSkinnedMesh&&Nt.skinning===!1||!z.isSkinnedMesh&&Nt.skinning===!0||z.isInstancedMesh&&Nt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Nt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Nt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Nt.instancingMorph===!1&&z.morphTexture!==null||Nt.envMap!==Dt||Y.fog===!0&&Nt.fog!==ft||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==ht.numPlanes||Nt.numIntersection!==ht.numIntersection)||Nt.vertexAlphas!==Wt||Nt.vertexTangents!==Zt||Nt.morphTargets!==It||Nt.morphNormals!==oe||Nt.morphColors!==Me||Nt.toneMapping!==Se||Nt.morphTargetsCount!==ce)&&(he=!0):(he=!0,Nt.__version=Y.version);let wn=Nt.currentProgram;he===!0&&(wn=xr(Y,B,z));let Qi=!1,hn=!1,Hs=!1;const Ee=wn.getUniforms(),Un=Nt.uniforms;if(at.useProgram(wn.program)&&(Qi=!0,hn=!0,Hs=!0),Y.id!==E&&(E=Y.id,hn=!0),Qi||M!==b){at.buffers.depth.getReversed()?(mt.copy(b.projectionMatrix),If(mt),Uf(mt),Ee.setValue(F,"projectionMatrix",mt)):Ee.setValue(F,"projectionMatrix",b.projectionMatrix),Ee.setValue(F,"viewMatrix",b.matrixWorldInverse);const ai=Ee.map.cameraPosition;ai!==void 0&&ai.setValue(F,Ht.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&Ee.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ee.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,hn=!0,Hs=!0)}if(z.isSkinnedMesh){Ee.setOptional(F,z,"bindMatrix"),Ee.setOptional(F,z,"bindMatrixInverse");const xn=z.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Ee.setValue(F,"boneTexture",xn.boneTexture,A))}z.isBatchedMesh&&(Ee.setOptional(F,z,"batchingTexture"),Ee.setValue(F,"batchingTexture",z._matricesTexture,A),Ee.setOptional(F,z,"batchingIdTexture"),Ee.setValue(F,"batchingIdTexture",z._indirectTexture,A),Ee.setOptional(F,z,"batchingColorTexture"),z._colorsTexture!==null&&Ee.setValue(F,"batchingColorTexture",z._colorsTexture,A));const Gs=W.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0)&&Gt.update(z,W,wn),(hn||Nt.receiveShadow!==z.receiveShadow)&&(Nt.receiveShadow=z.receiveShadow,Ee.setValue(F,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Un.envMap.value=Dt,Un.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Un.envMapIntensity.value=B.environmentIntensity),hn&&(Ee.setValue(F,"toneMappingExposure",_.toneMappingExposure),Nt.needsLights&&Gu(Un,Hs),ft&&Y.fog===!0&&pt.refreshFogUniforms(Un,ft),pt.refreshMaterialUniforms(Un,Y,O,tt,p.state.transmissionRenderTarget[b.id]),ro.upload(F,Xl(Nt),Un,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ro.upload(F,Xl(Nt),Un,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ee.setValue(F,"center",z.center),Ee.setValue(F,"modelViewMatrix",z.modelViewMatrix),Ee.setValue(F,"normalMatrix",z.normalMatrix),Ee.setValue(F,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const xn=Y.uniformsGroups;for(let ai=0,li=xn.length;ai<li;ai++){const ql=xn[ai];P.update(ql,wn),P.bind(ql,wn)}}return wn}function Gu(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Vu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,B,W){vt.get(b.texture).__webglTexture=B,vt.get(b.depthTexture).__webglTexture=W;const Y=vt.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=W===void 0,Y.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const W=vt.get(b);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,W=0){R=b,w=B,C=W;let Y=!0,z=null,ft=!1,St=!1;if(b){const Dt=vt.get(b);if(Dt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(Dt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Dt.__hasExternalTextures)A.rebindTextures(b,vt.get(b.texture).__webglTexture,vt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const It=b.depthTexture;if(Dt.__boundDepthTexture!==It){if(It!==null&&vt.has(It)&&(b.width!==It.image.width||b.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const Wt=b.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(St=!0);const Zt=vt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Zt[B])?z=Zt[B][W]:z=Zt[B],ft=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?z=vt.get(b).__webglMultisampledFramebuffer:Array.isArray(Zt)?z=Zt[W]:z=Zt,I.copy(b.viewport),V.copy(b.scissor),G=b.scissorTest}else I.copy(Et).multiplyScalar(O).floor(),V.copy(kt).multiplyScalar(O).floor(),G=qt;if(at.bindFramebuffer(F.FRAMEBUFFER,z)&&Y&&at.drawBuffers(b,z),at.viewport(I),at.scissor(V),at.setScissorTest(G),ft){const Dt=vt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,Dt.__webglTexture,W)}else if(St){const Dt=vt.get(b.texture),Wt=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.__webglTexture,W||0,Wt)}E=-1},this.readRenderTargetPixels=function(b,B,W,Y,z,ft,St){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){at.bindFramebuffer(F.FRAMEBUFFER,Lt);try{const Dt=b.texture,Wt=Dt.format,Zt=Dt.type;if(!ut.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-Y&&W>=0&&W<=b.height-z&&F.readPixels(B,W,Y,z,X.convert(Wt),X.convert(Zt),ft)}finally{const Dt=R!==null?vt.get(R).__webglFramebuffer:null;at.bindFramebuffer(F.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,B,W,Y,z,ft,St){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=vt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){const Dt=b.texture,Wt=Dt.format,Zt=Dt.type;if(!ut.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-Y&&W>=0&&W<=b.height-z){at.bindFramebuffer(F.FRAMEBUFFER,Lt);const It=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,It),F.bufferData(F.PIXEL_PACK_BUFFER,ft.byteLength,F.STREAM_READ),F.readPixels(B,W,Y,z,X.convert(Wt),X.convert(Zt),0);const oe=R!==null?vt.get(R).__webglFramebuffer:null;at.bindFramebuffer(F.FRAMEBUFFER,oe);const Me=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Df(F,Me,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,It),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ft),F.deleteBuffer(It),F.deleteSync(Me),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,W=0){b.isTexture!==!0&&(nr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const Y=Math.pow(2,-W),z=Math.floor(b.image.width*Y),ft=Math.floor(b.image.height*Y),St=B!==null?B.x:0,Lt=B!==null?B.y:0;A.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,St,Lt,z,ft),at.unbindTexture()},this.copyTextureToTexture=function(b,B,W=null,Y=null,z=0){b.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],B=arguments[2],z=arguments[3]||0,W=null);let ft,St,Lt,Dt,Wt,Zt,It,oe,Me;const Se=b.isCompressedTexture?b.mipmaps[z]:b.image;W!==null?(ft=W.max.x-W.min.x,St=W.max.y-W.min.y,Lt=W.isBox3?W.max.z-W.min.z:1,Dt=W.min.x,Wt=W.min.y,Zt=W.isBox3?W.min.z:0):(ft=Se.width,St=Se.height,Lt=Se.depth||1,Dt=0,Wt=0,Zt=0),Y!==null?(It=Y.x,oe=Y.y,Me=Y.z):(It=0,oe=0,Me=0);const an=X.convert(B.format),ce=X.convert(B.type);let Nt;B.isData3DTexture?(A.setTexture3D(B,0),Nt=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),Nt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),Nt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const Wn=F.getParameter(F.UNPACK_ROW_LENGTH),he=F.getParameter(F.UNPACK_IMAGE_HEIGHT),wn=F.getParameter(F.UNPACK_SKIP_PIXELS),Qi=F.getParameter(F.UNPACK_SKIP_ROWS),hn=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Se.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Dt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zt);const Hs=b.isDataArrayTexture||b.isData3DTexture,Ee=B.isDataArrayTexture||B.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Un=vt.get(b),Gs=vt.get(B),xn=vt.get(Un.__renderTarget),ai=vt.get(Gs.__renderTarget);at.bindFramebuffer(F.READ_FRAMEBUFFER,xn.__webglFramebuffer),at.bindFramebuffer(F.DRAW_FRAMEBUFFER,ai.__webglFramebuffer);for(let li=0;li<Lt;li++)Hs&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.get(b).__webglTexture,z,Zt+li),b.isDepthTexture?(Ee&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vt.get(B).__webglTexture,z,Me+li),F.blitFramebuffer(Dt,Wt,ft,St,It,oe,ft,St,F.DEPTH_BUFFER_BIT,F.NEAREST)):Ee?F.copyTexSubImage3D(Nt,z,It,oe,Me+li,Dt,Wt,ft,St):F.copyTexSubImage2D(Nt,z,It,oe,Me+li,Dt,Wt,ft,St);at.bindFramebuffer(F.READ_FRAMEBUFFER,null),at.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ee?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Nt,z,It,oe,Me,ft,St,Lt,an,ce,Se.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Nt,z,It,oe,Me,ft,St,Lt,an,Se.data):F.texSubImage3D(Nt,z,It,oe,Me,ft,St,Lt,an,ce,Se):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,z,It,oe,ft,St,an,ce,Se.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,z,It,oe,Se.width,Se.height,an,Se.data):F.texSubImage2D(F.TEXTURE_2D,z,It,oe,ft,St,an,ce,Se);F.pixelStorei(F.UNPACK_ROW_LENGTH,Wn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wn),F.pixelStorei(F.UNPACK_SKIP_ROWS,Qi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,hn),z===0&&B.generateMipmaps&&F.generateMipmap(Nt),at.unbindTexture()},this.copyTextureToTexture3D=function(b,B,W=null,Y=null,z=0){return b.isTexture!==!0&&(nr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],B=arguments[3],z=arguments[4]||0),nr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,W,Y,z)},this.initRenderTarget=function(b){vt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),at.unbindTexture()},this.resetState=function(){w=0,C=0,R=null,at.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}class Tl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qt(t),this.near=e,this.far=n}clone(){return new Tl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class du extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ol,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new N;class lo{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Bn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Bn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Bn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Bn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Bn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new En(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Al extends Ji{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ps;const qs=new N,ms=new N,gs=new N,_s=new _t,$s=new _t,pu=new _e,kr=new N,Zs=new N,Hr=new N,Wc=new _t,ea=new _t,Xc=new _t;class mu extends Fe{constructor(t=new Al){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wg(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new lo(n,3,0,!1)),ps.setAttribute("uv",new lo(n,2,3,!1))}this.geometry=ps,this.material=t,this.center=new _t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),pu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Gr(kr.set(-.5,-.5,0),gs,o,ms,s,r),Gr(Zs.set(.5,-.5,0),gs,o,ms,s,r),Gr(Hr.set(.5,.5,0),gs,o,ms,s,r),Wc.set(0,0),ea.set(1,0),Xc.set(1,1);let a=t.ray.intersectTriangle(kr,Zs,Hr,!1,qs);if(a===null&&(Gr(Zs.set(-.5,.5,0),gs,o,ms,s,r),ea.set(0,1),a=t.ray.intersectTriangle(kr,Hr,Zs,!1,qs),a===null))return;const l=t.ray.origin.distanceTo(qs);l<t.near||l>t.far||e.push({distance:l,point:qs.clone(),uv:Sn.getInterpolation(qs,kr,Zs,Hr,Wc,ea,Xc,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Gr(i,t,e,n,s,r){_s.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?($s.x=r*_s.x-s*_s.y,$s.y=s*_s.x+r*_s.y):$s.copy(_s),i.copy(t),i.x+=$s.x,i.y+=$s.y,i.applyMatrix4(pu)}class gu extends Ji{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const co=new N,ho=new N,Yc=new _e,Ks=new Sl,Vr=new _o,na=new N,qc=new N;class Xg extends Fe{constructor(t=new Ve,e=new gu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)co.fromBufferAttribute(e,s-1),ho.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=co.distanceTo(ho);t.setAttribute("lineDistance",new fe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;Yc.copy(s).invert(),Ks.copy(t.ray).applyMatrix4(Yc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=h.getX(x),v=h.getX(x+1),y=Wr(this,t,Ks,l,p,v);y&&e.push(y)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(d),p=Wr(this,t,Ks,l,x,m);p&&e.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){const p=Wr(this,t,Ks,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Wr(this,t,Ks,l,g-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Wr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(co.fromBufferAttribute(o,s),ho.fromBufferAttribute(o,r),e.distanceSqToSegment(co,ho,na,qc)>n)return;na.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(na);if(!(l<t.near||l>t.far))return{distance:l,point:qc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class Yg extends Xg{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class oi extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new _t:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,s=[],r=[],o=[],a=new N,l=new _e;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Ke(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Cl extends Gn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new _t){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qg extends Cl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Xr=new N,ia=new Rl,sa=new Rl,ra=new Rl;class $g extends Gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xr.subVectors(s[0],s[1]).add(s[0]),c=Xr);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xr),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ia.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,m),sa.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,m),ra.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(ia.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),sa.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ra.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ia.calc(l),sa.calc(l),ra.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function $c(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Zg(i,t){const e=1-i;return e*e*t}function Kg(i,t){return 2*(1-i)*i*t}function jg(i,t){return i*i*t}function rr(i,t,e,n){return Zg(i,t)+Kg(i,e)+jg(i,n)}function Jg(i,t){const e=1-i;return e*e*e*t}function Qg(i,t){const e=1-i;return 3*e*e*i*t}function t_(i,t){return 3*(1-i)*i*i*t}function e_(i,t){return i*i*i*t}function or(i,t,e,n,s){return Jg(i,t)+Qg(i,e)+t_(i,n)+e_(i,s)}class _u extends Gn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class n_ extends Gn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(or(t,s.x,r.x,o.x,a.x),or(t,s.y,r.y,o.y,a.y),or(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xu extends Gn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class i_ extends Gn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vu extends Gn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class s_ extends Gn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(rr(t,s.x,r.x,o.x),rr(t,s.y,r.y,o.y),rr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mu extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set($c(a,l.x,c.x,h.x,u.x),$c(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var Zc=Object.freeze({__proto__:null,ArcCurve:qg,CatmullRomCurve3:$g,CubicBezierCurve:_u,CubicBezierCurve3:n_,EllipseCurve:Cl,LineCurve:xu,LineCurve3:i_,QuadraticBezierCurve:vu,QuadraticBezierCurve3:s_,SplineCurve:Mu});class r_ extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Zc[s.type]().fromJSON(s))}return this}}class Kc extends r_{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xu(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new vu(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new _u(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new Cl(t,e,n,s,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class In extends Ve{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new N,h=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ti extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;v(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function v(){const _=new N,L=new N;let w=0;const C=(e-t)/n;for(let R=0;R<=r;R++){const E=[],M=R/r,I=M*(e-t)+t;for(let V=0;V<=s;V++){const G=V/s,Z=G*l+a,Q=Math.sin(Z),q=Math.cos(Z);L.x=I*Q,L.y=-M*n+m,L.z=I*q,u.push(L.x,L.y,L.z),_.set(Q,C,q).normalize(),f.push(_.x,_.y,_.z),d.push(G,1-M),E.push(g++)}x.push(E)}for(let R=0;R<s;R++)for(let E=0;E<r;E++){const M=x[E][R],I=x[E+1][R],V=x[E+1][R+1],G=x[E][R+1];(t>0||E!==0)&&(h.push(M,I,G),w+=3),(e>0||E!==r-1)&&(h.push(I,V,G),w+=3)}c.addGroup(p,w,0),p+=w}function y(_){const L=g,w=new _t,C=new N;let R=0;const E=_===!0?t:e,M=_===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const I=g;for(let V=0;V<=s;V++){const Z=V/s*l+a,Q=Math.cos(Z),q=Math.sin(Z);C.x=E*q,C.y=m*M,C.z=E*Q,u.push(C.x,C.y,C.z),f.push(0,M,0),w.x=Q*.5+.5,w.y=q*.5*M+.5,d.push(w.x,w.y),g++}for(let V=0;V<s;V++){const G=L+V,Z=I+V;_===!0?h.push(Z,Z+1,G):h.push(Z+1,Z,G),R+=3}c.addGroup(p,R,_===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ti(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class vo extends Ti{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new vo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pl extends Ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new fe(r,3)),this.setAttribute("normal",new fe(r.slice(),3)),this.setAttribute("uv",new fe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new N,_=new N,L=new N;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],_),d(e[w+2],L),l(y,_,L,v)}function l(v,y,_,L){const w=L+1,C=[];for(let R=0;R<=w;R++){C[R]=[];const E=v.clone().lerp(_,R/w),M=y.clone().lerp(_,R/w),I=w-R;for(let V=0;V<=I;V++)V===0&&R===w?C[R][V]=E:C[R][V]=E.clone().lerp(M,V/I)}for(let R=0;R<w;R++)for(let E=0;E<2*(w-R)-1;E++){const M=Math.floor(E/2);E%2===0?(f(C[R][M+1]),f(C[R+1][M]),f(C[R][M])):(f(C[R][M+1]),f(C[R+1][M+1]),f(C[R+1][M]))}}function c(v){const y=new N;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function h(){const v=new N;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const _=m(v)/2/Math.PI+.5,L=p(v)/Math.PI+.5;o.push(_,1-L)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],_=o[v+2],L=o[v+4],w=Math.max(y,_,L),C=Math.min(y,_,L);w>.9&&C<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),L<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){const _=v*3;y.x=t[_+0],y.y=t[_+1],y.z=t[_+2]}function g(){const v=new N,y=new N,_=new N,L=new N,w=new _t,C=new _t,R=new _t;for(let E=0,M=0;E<r.length;E+=9,M+=6){v.set(r[E+0],r[E+1],r[E+2]),y.set(r[E+3],r[E+4],r[E+5]),_.set(r[E+6],r[E+7],r[E+8]),w.set(o[M+0],o[M+1]),C.set(o[M+2],o[M+3]),R.set(o[M+4],o[M+5]),L.copy(v).add(y).add(_).divideScalar(3);const I=m(L);x(w,M+0,v,I),x(C,M+2,y,I),x(R,M+4,_,I)}}function x(v,y,_,L){L<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=L/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pl(t.vertices,t.indices,t.radius,t.details)}}class yu extends Kc{constructor(t){super(t),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Kc().fromJSON(s))}return this}}const o_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Su(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,f,d;if(n&&(r=u_(i,t,r,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return hr(r,o,e,a,l,d,0),o}};function Su(i,t,e,n,s){let r,o;if(s===S_(i,t,e,n)>0)for(r=t;r<e;r+=n)o=jc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=jc(r,i[r],i[r+1],o);return o&&Mo(o,o.next)&&(fr(o),o=o.next),o}function Zi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Mo(e,e.next)||Ce(e.prev,e,e.next)===0)){if(fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&g_(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?l_(i,n,s,r):a_(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),fr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=c_(Zi(i),t,e),hr(i,t,e,n,s,r,2)):o===2&&h_(i,t,e,n,s,r):hr(Zi(i),t,e,n,s,r,1);break}}}function a_(i){const t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,d=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&bs(s,a,r,l,o,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function l_(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Ce(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,x=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,p=hl(d,g,t,e,n),v=hl(x,m,t,e,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&bs(a,h,l,u,c,f,y.x,y.y)&&Ce(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&bs(a,h,l,u,c,f,_.x,_.y)&&Ce(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&bs(a,h,l,u,c,f,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&bs(a,h,l,u,c,f,_.x,_.y)&&Ce(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function c_(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Mo(s,r)&&Eu(s,n,n.next,r)&&ur(s,r)&&ur(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),fr(n),fr(n.next),n=i=r),n=n.next}while(n!==i);return Zi(n)}function h_(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&v_(o,a)){let l=bu(o,a);o=Zi(o,o.next),l=Zi(l,l.next),hr(o,t,e,n,s,r,0),hr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function u_(i,t,e,n){const s=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Su(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(x_(c));for(s.sort(f_),r=0;r<s.length;r++)e=d_(s[r],e);return e}function f_(i,t){return i.x-t.x}function d_(i,t){const e=p_(i,t);if(!e)return t;const n=bu(e,i);return Zi(n,n.next),Zi(e,e.next)}function p_(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&bs(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ur(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&m_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function m_(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function g_(i,t,e,n){let s=i;do s.z===0&&(s.z=hl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,__(s)}function __(i){let t,e,n,s,r,o,a,l,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function hl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function x_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function v_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!M_(i,t)&&(ur(i,t)&&ur(t,i)&&y_(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||Mo(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Mo(i,t){return i.x===t.x&&i.y===t.y}function Eu(i,t,e,n){const s=qr(Ce(i,t,e)),r=qr(Ce(i,t,n)),o=qr(Ce(e,n,i)),a=qr(Ce(e,n,t));return!!(s!==r&&o!==a||s===0&&Yr(i,e,t)||r===0&&Yr(i,n,t)||o===0&&Yr(e,i,n)||a===0&&Yr(e,t,n))}function Yr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qr(i){return i>0?1:i<0?-1:0}function M_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Eu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ur(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function y_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function bu(i,t){const e=new ul(i.i,i.x,i.y),n=new ul(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function jc(i,t,e,n){const s=new ul(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ul(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function S_(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ar{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ar.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Jc(t),Qc(n,t);let o=t.length;e.forEach(Jc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Qc(n,e[l]);const a=o_.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Jc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class yo extends Pl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new yo(t.radius,t.detail)}}class Ll extends Ve{constructor(t=new yu([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(r,3)),this.setAttribute("uv",new fe(o,2));function c(h){const u=s.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;ar.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];ar.isClockWise(v)===!0&&(g[m]=v.reverse())}const x=ar.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){const v=x[m],y=v[0]+u,_=v[1]+u,L=v[2]+u;n.push(y,_,L),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return E_(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Ll(n,t.curveSegments)}}function E_(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class ri extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new N,f=new N,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let _=0;p===0&&o===0?_=.5/e:p===n&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){const w=L/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+w*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(w+_,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=h[p][v+1],_=h[p][v],L=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&d.push(y,_,w),(p!==n-1||l<Math.PI)&&d.push(_,L,w)}this.setIndex(d),this.setAttribute("position",new fe(g,3)),this.setAttribute("normal",new fe(x,3)),this.setAttribute("uv",new fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pr extends Ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new N,u=new N,f=new N;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class rn extends Ji{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const th={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class b_{constructor(t,e,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const w_=new b_;class Dl{constructor(t){this.manager=t!==void 0?t:w_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";class T_ extends Dl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=th.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=cr("img");function l(){h(),th.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class wu extends Dl{constructor(t){super(t)}load(t,e,n,s){const r=new Je,o=new T_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Il extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class A_ extends Il{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const oa=new _e,eh=new N,nh=new N;class Tu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bl,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(eh),nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nh),e.updateMatrixWorld(),oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ih=new _e,js=new N,aa=new N;class C_ extends Tu{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),js.setFromMatrixPosition(t.matrixWorld),n.position.copy(js),aa.copy(n.position),aa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(aa),n.updateMatrixWorld(),s.makeTranslation(-js.x,-js.y,-js.z),ih.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih)}}class Au extends Il{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new C_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class R_ extends Tu{constructor(){super(new au(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class P_ extends Il{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new R_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class L_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=sh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function sh(){return performance.now()}const rh=new _e;class D_{constructor(t,e,n=0,s=1/0){this.ray=new Sl(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new El,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return rh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rh),this}intersectObject(t,e=!0,n=[]){return fl(t,this,n,e),n.sort(oh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fl(t[s],this,n,e);return n.sort(oh),n}}function oh(i,t){return i.distance-t.distance}function fl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)fl(r[o],t,e,!0)}}class I_ extends ji{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);class U_ extends du{constructor(){super();const t=new Hn;t.deleteAttribute("uv");const e=new rn({side:je}),n=new rn,s=new Au(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new xt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new xt(t,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new xt(t,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new xt(t,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new xt(t,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new xt(t,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new xt(t,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new xt(t,xs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new xt(t,xs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new xt(t,xs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new xt(t,xs(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const m=new xt(t,xs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new xt(t,xs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function xs(i){const t=new bi;return t.color.setScalar(i),t}const N_=new wu;let Cu=8;function Ai(i,t,e,{repeat:n=!0,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=t,e(r.getContext("2d"),i,t);const o=new oi(r);return s&&(o.colorSpace=De),n&&(o.wrapS=o.wrapT=Yi),o.anisotropy=Cu,o}function la(i,t=!1){const e=N_.load(i);return e.colorSpace=De,t&&(e.wrapS=e.wrapT=Yi),e.anisotropy=Cu,e}let ca=1337;function Vt(){return ca=ca*16807%2147483647,(ca-1)/2147483646}function $r(i,t,e){return Ai(512,512,(n,s)=>{const o=s/4;for(let a=0;a<4;a++)for(let l=0;l<4;l++){const c=(Vt()-.5)*t;n.fillStyle=`rgb(${i[0]+c},${i[1]+c},${i[2]+c})`,n.fillRect(a*o,l*o,o,o);for(let h=0;h<140;h++){const u=(Vt()-.5)*t*1.4;n.fillStyle=`rgba(${i[0]+u},${i[1]+u},${i[2]+u},0.5)`,n.fillRect(a*o+Vt()*o,l*o+Vt()*o,2+Vt()*5,2+Vt()*5)}}n.strokeStyle=e,n.lineWidth=3;for(let a=0;a<=4;a++)n.beginPath(),n.moveTo(a*o,0),n.lineTo(a*o,s),n.stroke(),n.beginPath(),n.moveTo(0,a*o),n.lineTo(s,a*o),n.stroke()})}const F_=Ai(256,1024,(i,t,e)=>{i.fillStyle="#d9c7a4",i.fillRect(0,0,t,e);for(let n=0;n<90;n++){const s=Vt()*t,r=.05+Vt()*.12;i.strokeStyle=Vt()>.5?`rgba(150,120,80,${r})`:`rgba(245,235,215,${r})`,i.lineWidth=1+Vt()*3,i.beginPath(),i.moveTo(s,0);for(let o=0;o<=e;o+=64)i.lineTo(s+Math.sin(o*.01+n)*4,o);i.stroke()}}),O_=Ai(512,512,(i,t)=>{const n=t/2;i.fillStyle="#111111",i.fillRect(0,0,t,t),i.fillStyle="#d6ccb2",i.beginPath(),i.moveTo(0,0),i.lineTo(n,0),i.lineTo(n,n),i.closePath(),i.fill(),i.strokeStyle="#ecc828",i.lineWidth=7;for(let s=0;s<=2;s++)i.beginPath(),i.moveTo(s*n,0),i.lineTo(s*n,t),i.stroke(),i.beginPath(),i.moveTo(0,s*n),i.lineTo(t,s*n),i.stroke();i.beginPath(),i.moveTo(0,0),i.lineTo(t,t),i.moveTo(n,0),i.lineTo(t,n),i.moveTo(0,n),i.lineTo(n,t),i.stroke()}),ah=Ai(256,160,(i,t,e)=>{i.fillStyle="#1b1d24",i.fillRect(0,0,t,e),i.fillStyle="#2a2d36",i.fillRect(0,0,40,e);const n=["#c792ea","#82aaff","#c3e88d","#f78c6c","#89ddff","#d0d0d0"];for(let s=8;s<e-4;s+=7){let r=48+Math.floor(Vt()*4)*8;const o=1+Math.floor(Vt()*4);for(let a=0;a<o&&r<t-10;a++){const l=10+Vt()*45;i.fillStyle=n[Math.floor(Vt()*n.length)],i.fillRect(r,s,l,3),r+=l+5}}},{repeat:!1}),lh=Ai(256,160,(i,t,e)=>{i.fillStyle="#f4f6fa",i.fillRect(0,0,t,e),i.fillStyle="#26324a",i.fillRect(0,0,36,e),i.fillStyle="#ffffff";for(let n=0;n<3;n++)i.fillRect(44+n*70,10,62,34);i.fillStyle="#4c7cf0";for(let n=0;n<12;n++){const s=10+Vt()*50;i.fillRect(48+n*16,140-s,9,s)}i.fillStyle="#26c281",i.fillRect(50,20,40,6),i.fillStyle="#f0a04c",i.fillRect(120,20,40,6)},{repeat:!1}),ch=Ai(256,160,(i,t,e)=>{const n=i.createLinearGradient(0,0,t,e);n.addColorStop(0,"#20263a"),n.addColorStop(1,"#3b2a4f"),i.fillStyle=n,i.fillRect(0,0,t,e),i.fillStyle="rgba(255,255,255,.85)";for(let s=0;s<4;s++)i.fillRect(30,30+s*22,120+Vt()*60,8);i.fillStyle="#ecc828",i.fillRect(30,120,60,14)},{repeat:!1}),B_=Ai(1024,360,(i,t,e)=>{i.clearRect(0,0,t,e),i.fillStyle="#3a3a38",i.textAlign="center",i.font='700 210px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("pixbit",t/2,200),i.font='500 78px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("· s o l u t i o n s ·",t/2,320)},{repeat:!1}),z_=Ai(256,256,(i,t)=>{const e=t/2;i.fillStyle="#f7f7f5",i.beginPath(),i.arc(e,e,e-4,0,Math.PI*2),i.fill(),i.lineWidth=10,i.strokeStyle="#222",i.stroke(),i.fillStyle="#222";for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.fillRect(e+Math.sin(s)*96-3,e-Math.cos(s)*96-9,6,18)}i.lineCap="round",i.lineWidth=8,i.beginPath(),i.moveTo(e,e),i.lineTo(e+50,e-30),i.stroke(),i.lineWidth=5,i.beginPath(),i.moveTo(e,e),i.lineTo(e-20,e-85),i.stroke()},{repeat:!1}),Yt=i=>new rn(i),T={floorBeige:Yt({map:$r([196,180,160],14,"#a8998a"),roughness:.3,metalness:0}),floorDark:Yt({map:$r([78,78,80],12,"#5a5a5c"),roughness:.6}),floorTerrace:Yt({map:$r([184,160,136],16,"#9c7e66"),roughness:.75}),floorCorridor:Yt({map:$r([226,214,196],8,"#cbbfae"),roughness:.12}),wall:Yt({color:"#dededb",roughness:.92}),wallWarm:Yt({color:"#e6e1d6",roughness:.92}),concrete:Yt({map:la("textures/concrete.jpg",!0),roughness:.95}),ceilingBlack:Yt({color:"#151516",roughness:.95}),diamond:Yt({map:O_,roughness:.7}),yellow:Yt({color:"#ecc21c",roughness:.5}),black:Yt({color:"#161616",roughness:.45,metalness:.3}),blackMatte:Yt({color:"#1e1e1e",roughness:.85}),metalDark:Yt({color:"#2a2a2c",roughness:.35,metalness:.7}),chrome:Yt({color:"#b9bcc0",roughness:.2,metalness:1}),mesh:Yt({color:"#262628",roughness:.9}),fabric:Yt({color:"#2d2d30",roughness:1}),leather:Yt({color:"#1a1a1a",roughness:.38,metalness:.05}),wood:Yt({map:F_,roughness:.6}),woodDark:Yt({color:"#7a5233",roughness:.6}),white:Yt({color:"#f3f3f1",roughness:.5}),whiteGloss:Yt({color:"#f5f5f3",roughness:.2}),cream:Yt({color:"#e8e2c8",roughness:.6}),glass:new rn({color:"#cfdde0",transparent:!0,opacity:.16,roughness:.05,metalness:.1,depthWrite:!1,side:Ie}),glassFrost:new rn({color:"#f2f2f0",transparent:!0,opacity:.82,roughness:.5,depthWrite:!1,side:Ie}),glassYellow:Yt({color:"#f1d27a",emissive:"#a8820f",emissiveIntensity:.35,roughness:.4}),lightStrip:Yt({color:"#ffffff",emissive:"#fff4e0",emissiveIntensity:2.2}),spotGlow:Yt({color:"#ffffff",emissive:"#ffe9c4",emissiveIntensity:3}),screenCode:Yt({map:ah,emissive:"#ffffff",emissiveMap:ah,emissiveIntensity:.9,roughness:.3}),screenDash:Yt({map:lh,emissive:"#ffffff",emissiveMap:lh,emissiveIntensity:.7,roughness:.3}),screenDark:Yt({map:ch,emissive:"#ffffff",emissiveMap:ch,emissiveIntensity:.8,roughness:.3}),screenOff:Yt({color:"#0b0b0c",roughness:.15,metalness:.3}),plant:Yt({color:"#3d6b2f",roughness:.7}),plantLight:Yt({color:"#7f9b3a",roughness:.7}),soil:Yt({color:"#3a2c20",roughness:1}),beanbag:Yt({color:"#3b3d40",roughness:.95}),bottleYellow:Yt({color:"#f2b705",roughness:.3,metalness:.4}),bottleBlue:Yt({color:"#1f4fa8",roughness:.3,metalness:.4}),bottleTeal:Yt({color:"#3ab7a6",roughness:.3}),red:Yt({color:"#b23a2e",roughness:.6}),pergola:Yt({color:"#8a4b3a",roughness:.8}),rail:Yt({color:"#4a4a4a",roughness:.4,metalness:.6}),logo:Yt({map:la("textures/logo.png"),transparent:!0,alphaTest:.4,roughness:.4}),logoText:Yt({map:B_,transparent:!0,alphaTest:.3,roughness:.6}),gallery:Yt({map:la("textures/gallery.jpg"),roughness:.6}),clock:Yt({map:z_,roughness:.5})};T.screens=[T.screenCode,T.screenCode,T.screenDash,T.screenDark];const Js=new N;function Mn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;Js.copy(t),Js[n]=0,Js.normalize();const c=.5*o/(o+a),h=1-Js.angleTo(i)/l;return Math.sign(Js[e])===1?h*c:a/(o+a)+c+c*(1-h)}class k_ extends Hn{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new N,l=new N,c=new N(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new N,x=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=Mn(g,l,"z","y",r,n),f[p+1]=1-Mn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),f[p+0]=1-Mn(g,l,"z","y",r,n),f[p+1]=1-Mn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),f[p+0]=1-Mn(g,l,"x","z",r,t),f[p+1]=Mn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-Mn(g,l,"x","z",r,t),f[p+1]=1-Mn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-Mn(g,l,"x","y",r,t),f[p+1]=1-Mn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),f[p+0]=Mn(g,l,"x","y",r,t),f[p+1]=1-Mn(g,l,"y","x",r,e);break}}}const H_=new Hn(1,1,1);function U(i,t,e,n,s,r,o,a,{shadow:l=!0,ry:c=0,rx:h=0,rz:u=0}={}){const f=new xt(H_,t);return f.scale.set(e,n,s),f.position.set(r,o,a),f.rotation.set(h,c,u),f.castShadow=l,f.receiveShadow=!0,i.add(f),f}function $t(i,t,e,n,s,r,o,a,{seg:l=12,shadow:c=!0,rx:h=0,rz:u=0,open:f=!1}={}){const d=new xt(new Ti(e,n,s,l,1,f),t);return d.position.set(r,o,a),d.rotation.set(h,0,u),d.castShadow=c,d.receiveShadow=!0,i.add(d),d}function ki(i,t,e,n,s,r,o,a,l){const c=new xt(new k_(e,n,s,2,r),t);return c.position.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function Wi(i,t,e,n,s,r,o,a=0,l=0){const c=new xt(new Ae(e,n),t);return c.position.set(s,r,o),c.rotation.set(l,a,0,"YXZ"),c.receiveShadow=!0,i.add(c),c}function gn(i,t=0,e=0,n=0,s=0){const r=new ne;return r.position.set(t,e,n),r.rotation.y=s,i.add(r),r}function Cs(i,t,e,n=0,{exec:s=!1}={}){const r=gn(i,t,0,e,n);r.userData.label="Chair";for(let l=0;l<5;l++){const c=l/5*Math.PI*2,h=U(r,T.black,.04,.035,.32,Math.sin(c)*.15,.07,Math.cos(c)*.15,{ry:c});h.castShadow=!1,$t(r,T.black,.025,.025,.04,Math.sin(c)*.3,.03,Math.cos(c)*.3,{seg:6,shadow:!1})}$t(r,T.chrome,.025,.025,.32,0,.26,0,{seg:8}),ki(r,T.fabric,.5,.08,.48,.03,0,.47,0);const o=s?.75:.55;U(r,T.black,.04,.5,.04,0,.62,-.25);const a=U(r,T.mesh,.46,o,.05,0,.62+o/2,-.27,{rx:-.1});a.material=T.mesh,s&&U(r,T.mesh,.3,.14,.06,0,1.45,-.33,{rx:-.1});for(const l of[-1,1])U(r,T.black,.035,.22,.035,l*.26,.6,-.02),U(r,T.black,.06,.025,.24,l*.26,.72,.02);return r}function Ru(i,t,e,n=0){const s=gn(i,t,0,e,n);s.userData.label="Visitor chair";for(const r of[-1,1])U(s,T.chrome,.025,.025,.5,r*.22,.012,.05),U(s,T.chrome,.025,.45,.025,r*.22,.23,.29,{rx:.05});return U(s,T.fabric,.48,.06,.46,0,.47,.05),U(s,T.mesh,.46,.5,.04,0,.78,-.2,{rx:-.12}),s}function G_(i,t,e,n,s=0){const r=gn(i,t,.77,e,n);return r.userData.label="Monitor",U(r,T.black,.24,.012,.18,0,.006,-.05),U(r,T.black,.05,.3,.035,0,.16,-.08),U(r,T.black,.6,.36,.025,0,.42,-.06),Wi(r,s%3===2?T.screenDash:T.screenCode,.57,.33,0,.42,-.046),U(r,T.blackMatte,.44,.018,.14,0,.009,.22,{shadow:!1}),U(r,T.blackMatte,.06,.02,.1,.32,.01,.22,{shadow:!1}),s%3===0&&$t(r,T.bottleYellow,.035,.035,.24,-.38,.12,.05,{seg:10}),r}function hh(i,t,e,n,{width:s=1.5,seats:r=!0,solidFn:o,seatW:a=1.1,chairOff:l=.12,sides:c=[-1,1]}={}){const h=gn(i,t,0,0);h.userData.label="Desk";const u=n-e,f=(e+n)/2;U(h,T.wood,s,.04,u,0,.75,f);const d=Math.max(2,Math.round(u/2)+1);for(let m=0;m<d;m++){const p=e+.12+m/(d-1)*(u-.24);for(const v of[-1,1])U(h,T.black,.05,.78,.05,v*(s/2-.22),.37,p,{rz:v*.2});U(h,T.black,s-.2,.05,.05,0,.72,p)}if(o&&o(t-s/2,e,t+s/2,n),!r)return h;const g=Math.max(1,Math.floor(u/a+1e-6));let x=0;for(const m of c)for(let p=0;p<g;p++){const v=e+(p+.5)*(u/g),y=c.length===2?m*.22:-m*(s/2-.2);G_(h,y,v,m*Math.PI/2,x++);const _=t+m*(s/2+l);Cs(i,_,v,m>0?-Math.PI/2:Math.PI/2),o&&o(_-.2,v-.2,_+.2,v+.2)}return h}function Ul(i,t,e,n=0,s=2){const r=gn(i,t,0,e,n);r.userData.label="Sofa";const o=s*.75+.3;ki(r,T.leather,o,.38,.9,.06,0,.24,0),ki(r,T.leather,o,.5,.22,.08,0,.62,-.34);for(const a of[-1,1])ki(r,T.leather,.18,.62,.9,.06,a*(o/2-.09),.33,0);for(let a=0;a<s;a++){const l=-o/2+.15+.75*(a+.5);ki(r,T.leather,.72,.14,.62,.06,l,.49,.08);const c=ki(r,T.leather,.5,.4,.14,.07,l,.78,-.18);c.rotation.x=-.18}return r}function So(i,t,e,n,s=9,r=.8){const o=gn(i,t,e,n);o.userData.label="Plant";for(let a=0;a<s;a++){const l=r*(.6+Vt()*.6),c=new xt(new vo(.045,l,4),Vt()>.3?T.plant:T.plantLight);c.scale.z=.25,c.position.set((Vt()-.5)*.3,l/2,(Vt()-.5)*.2),c.rotation.set((Vt()-.5)*.35,Vt()*Math.PI,(Vt()-.5)*.35),c.castShadow=!0,o.add(c)}return o}function Nl(i,t,e,{size:n=.45,h:s=.45,mat:r=T.white}={}){const o=gn(i,t,0,e);return o.userData.label="Plant",U(o,r,n,s,n,0,s/2,0),U(o,T.soil,n-.06,.02,n-.06,0,s,0,{shadow:!1}),So(o,0,s,0,11,.9),o}function Pu(i,t,e,n=T.beanbag){const s=new xt(new ri(.5,20,14),n);return s.scale.set(1,.65,1.05),s.position.set(t,.3,e),s.userData.label="Bean bag",s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function V_(i,t,e,n,{yellowCubbies:s=[]}={}){const r=gn(i,t,0,0);r.userData.label="Shelving";const o=n-e,a=(e+n)/2,l=.4,c=2.4,h=.55;U(r,T.white,l,h,o,0,h/2,a);const u=Math.max(1,Math.round(o/1.1));for(let d=0;d<u;d++){const g=e+(d+.5)*(o/u);U(r,T.blackMatte,.3,.32,.3,0,h+.16,g),So(r,0,h+.32,g,7,.6)}for(const d of[e+.02,n-.02])for(const g of[-1,1])U(r,T.black,.025,c-h,.025,g*l/2,h+(c-h)/2,d);for(const d of[1.55,c]){for(const g of[-1,1])U(r,T.black,.025,.025,o,g*l/2,d,a,{shadow:!1});U(r,T.black,l,.012,o,0,d-.01,a,{shadow:!1})}const f=Math.max(1,Math.round(o/.65));for(let d=1;d<f;d++)for(const g of[-1,1])U(r,T.black,.02,c-h,.02,g*l/2,h+(c-h)/2,e+d/f*o,{shadow:!1});for(const d of s){if(d.i>=f)continue;const g=e+(d.i+.5)*(o/f),x=d.row===0?1.2:1.9;U(r,T.yellow,l-.05,.45,o/f-.08,0,x,g)}for(let d=0;d<f;d++)Vt()<.3&&U(r,T.blackMatte,.12,.15+Vt()*.1,.12,0,1.55+.09,e+(d+.5)*(o/f));return r}function Lu(i,t,e,n=2.4,s=0,r=2.6,o=3.6){const a=gn(i,t,r,e,s);a.userData.label="Light",U(a,T.black,n,.06,.08,0,0,0,{shadow:!1}),Wi(a,T.lightStrip,n-.04,.05,0,-.031,0,0,Math.PI/2);for(const l of[-.4,.4])$t(a,T.black,.003,.003,o-r,l*n,(o-r)/2,0,{seg:3,shadow:!1});return a}function uo(i,t,e,n=2.2,s=3.6,r=1){const o=gn(i,t,n,e);o.userData.label="Pendant light",$t(o,T.black,.004,.004,s-n,0,(s-n)/2,0,{seg:3,shadow:!1});const a=new xt(new vo(.18*r,.26*r,20,1,!0),T.black);a.position.y=-.1*r,a.material.side=Ie,o.add(a),$t(o,T.black,.02,.02,.06,0,.05,0,{seg:8,shadow:!1});const l=new xt(new In(.15*r,16),T.spotGlow);return l.rotation.x=Math.PI/2,l.position.y=-.22*r,o.add(l),o}function W_(i,t,e,n){$t(i,T.black,.05,.05,.12,t,n-.06,e,{seg:10,shadow:!1});const s=new xt(new In(.035,10),T.spotGlow);s.rotation.x=Math.PI/2,s.position.set(t,n-.121,e),i.add(s)}function Fl(i,t,e,n,s=0){const r=gn(i,t,e,n,s);return r.userData.label="AC unit",ki(r,T.white,.9,.28,.2,.05,0,0,.1),U(r,T.metalDark,.8,.02,.02,0,-.1,.2,{shadow:!1}),r}function X_(i,t,e,n=3){U(i,T.white,.85,.12,.85,t,n,e,{shadow:!1}),U(i,T.metalDark,.55,.02,.55,t,n-.065,e,{shadow:!1})}function Y_(i,t,e,n,s=0,r=2.4){const o=n-e,a=gn(i,t,0,(e+n)/2,s);a.userData.label="Lockers",U(a,T.white,.55,r,o,0,r/2,0);const l=Math.round(o/.5),c=5;for(let h=0;h<l;h++)for(let u=0;u<c;u++){const f=-o/2+(h+.5)*(o/l),d=.1+(u+.5)*((r-.1)/c);U(a,T.whiteGloss,.01,(r-.1)/c-.02,o/l-.02,.28,d,f,{shadow:!1}),U(a,T.metalDark,.02,.07,.07,.29,d+.08,f+o/l/2-.08,{shadow:!1,rx:Math.PI/4})}return a}function q_(i,t,e,n,s=0){const r=gn(i,t,e,n,s);r.userData.label="Wall clock";const o=new xt(new In(.2,32),T.clock);o.position.z=.03,r.add(o);const a=new xt(new pr(.2,.02,8,32),T.black);return a.position.z=.03,r.add(a),r}const _i=[];function Jt(i,t,e,n){_i.push({minX:Math.min(i,e),maxX:Math.max(i,e),minZ:Math.min(t,n),maxZ:Math.max(t,n)})}const Qs=new Bs;function sn(i,t=0){return i.updateMatrixWorld(!0),Qs.setFromObject(i),Jt(Qs.min.x-t,Qs.min.z-t,Qs.max.x+t,Qs.max.z+t),i}function uh(i,t,e){for(const n of _i)if(i+e>n.minX&&i-e<n.maxX&&t+e>n.minZ&&t-e<n.maxZ)return n;return null}function $_(i,t,e,n){const s=Math.max(1,Math.ceil(Math.max(Math.abs(t),Math.abs(e))/(n*.5))),r=t/s,o=e/s;for(let a=0;a<s;a++){if(r){const l=i.x+r,c=uh(l,i.z,n);c?i.x=r>0?c.minX-n-1e-4:c.maxX+n+1e-4:i.x=l}if(o){const l=i.z+o,c=uh(i.x,l,n);c?i.z=o>0?c.minZ-n-1e-4:c.maxZ+n+1e-4:i.z=l}}}const Rt=3.6,Pt=3,He=10.05,te=10.3,ee=18.7,Mi=3.5,cn=3,Re=5.75,ye=3,vs=6.15,ei=8.9,ve=7.95,Le=7.3,xi=.15,ue=9.25,fh=ee,ln=3.7,xe=22.6,dl=[20,21.6],Z_=25.2,Rn=6.6,Ze=27.2,K_=[2.3,3.2];function Ol(i,t,e,n){const s=i.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*t/n,s.getY(r)*e/n);return s.needsUpdate=!0,i}function Ge(i,t,e,n,s,r,o,{down:a=!1,tile:l=2.4}={}){const c=s-e,h=r-n,u=Ol(new Ae(c,h),c,h,l),f=new xt(u,t);return f.rotation.x=a?Math.PI/2:-Math.PI/2,f.position.set((e+s)/2,o,(n+r)/2),f.receiveShadow=!0,i.add(f),f}function Te(i,t,e,n,s,{h:r=Rt,mat:o=T.wall,t:a=.2,y0:l=0,collide:c=!0}={}){const h=Math.abs(n-t)>=Math.abs(s-e),u=h?Math.abs(n-t):a,f=h?a:Math.abs(s-e),d=U(i,o,u,r,f,(t+n)/2,l+r/2,(e+s)/2);return d.userData.label="Wall",c&&l<1.5&&Jt((t+n)/2-u/2,(e+s)/2-f/2,(t+n)/2+u/2,(e+s)/2+f/2),d}const Bl=[];function Hi(i,{x0:t,z0:e,x1:n,z1:s,h:r=3,door:o=null,transom:a=2.3,frost:l=!1,panel:c=1.1,swing:h=1,name:u="door"}){const f=e===s,d=new ne;d.userData.label="Glass wall",i.add(d),i=d;const g=f?t:e,x=f?n:s,m=f?e:t,p=(_,L,w,C,R)=>f?U(i,T.black,C,R,w,_,L,m,{shadow:!0}):U(i,T.black,w,R,C,m,L,_,{shadow:!0}),v=(_,L,w,C)=>{const R=new xt(new Ae(L-_,C-w),l?T.glassFrost:T.glass);R.position.set(f?(_+L)/2:m,(w+C)/2,f?m:(_+L)/2),f||(R.rotation.y=Math.PI/2),R.renderOrder=2,i.add(R)},y=o?[[g,Math.min(...o)],[Math.max(...o),x]]:[[g,x]];for(const[_,L]of y){if(L-_<.01)continue;v(_,L,.05,r);const w=Math.max(1,Math.round((L-_)/c));for(let C=0;C<=w;C++)p(_+C/w*(L-_),r/2,.05,.05,r);p((_+L)/2,.04,.06,L-_,.08),a&&a<r&&p((_+L)/2,a,.05,L-_,.05),f?Jt(_,m-.06,L,m+.06):Jt(m-.06,_,m+.06,L)}if(p((g+x)/2,r-.03,.06,x-g,.06),o){const[_,L]=o,w=Math.abs(L-_);v(Math.min(_,L),Math.max(_,L),a,r),p((_+L)/2,a,.06,w,.06);const C=new ne;C.position.set(f?_:m,0,f?m:_);const R=Math.sign(L-_),E=w-.04,M=new xt(new Ae(E,a-.1),T.glass);M.position.set(R*E/2,a/2,0),C.add(M);for(const Q of[0,1])U(C,T.black,.04,a-.08,.04,R*Q*E,a/2,0);U(C,T.black,E,.05,.04,R*E/2,.06,0),U(C,T.black,E,.04,.04,R*E/2,a-.08,0),U(C,T.chrome,.02,.35,.03,R*(E-.1),1.05,.04);const I=f?0:-Math.PI/2,V=I+(f?-1:1)*h*R*1.4;C.rotation.y=I;const G=Math.min(_,L),Z=Math.max(_,L);Bl.push({leaf:C,closed:I,open:V,name:u,handle:[R*(E-.1),1.2,.04],x:f?(_+L)/2:m,z:f?m:(_+L)/2,block:f?{minX:G,maxX:Z,minZ:m-.06,maxZ:m+.06}:{minX:m-.06,maxX:m+.06,minZ:G,maxZ:Z}})}}function tr(i,t,e,n,s,r){const o=e===s,a=o?n-t:s-e,l=new xt(new Ae(a,r),T.glass);l.position.set((t+n)/2,r/2,(e+s)/2),o||(l.rotation.y=Math.PI/2),l.renderOrder=2,i.add(l);const c=Math.max(1,Math.round(a/1.2));for(let h=0;h<=c;h++)o?U(i,T.black,.07,r,.1,t+h/c*a,r/2,e):U(i,T.black,.1,r,.07,t,r/2,e+h/c*a);for(const h of[.08,.55,Math.min(2.45,r-.3),r-.04]){const u=h<.1?.16:.07;o?U(i,T.black,a,u,.1,(t+n)/2,h,e,{shadow:h>2}):U(i,T.black,.1,u,a,t,h,(e+s)/2,{shadow:h>2})}o?Jt(t,e-.08,n,e+.08):Jt(t-.08,e,t+.08,s)}function j_(i){Ge(i,T.diamond,0,Mi,ye,ve,Pt,{down:!0}),Ge(i,T.diamond,ye,Re,Le,ve,Pt,{down:!0}),Ge(i,T.diamond,Le,Re,te,ue,Pt,{down:!0});for(const[t,e]of[[1,4.4],[1,6.8],[2.4,6.8],[4,7],[5.6,7],[7.9,6.9],[9.4,8.6],[8.2,8.9]])W_(i,t,e,Pt);U(i,T.yellow,Le,Rt-Pt,.08,Le/2,Pt+(Rt-Pt)/2,ve+.04,{shadow:!1}),U(i,T.yellow,Le,.07,.14,Le/2,Pt-.035,ve,{shadow:!1}),Ge(i,T.white,0,0,ye,Mi,Pt,{down:!0}),Ge(i,T.white,ye,cn,ei,Re,Pt,{down:!0});for(const[t,e]of[[1.5,1.6],[5,4.5],[8.2,4.5]])U(i,T.whiteGloss,.35,.02,.35,t,Pt-.01,e,{shadow:!1});Ge(i,T.ceilingBlack,0,ve,He,ee,Rt,{down:!0});for(const t of[12.3,15.3])U(i,T.ceilingBlack,He,.5,.4,He/2,Rt-.25,t,{shadow:!1});$t(i,T.ceilingBlack,.2,.2,He,He/2,Rt-.45,9.2,{rz:Math.PI/2,shadow:!1,seg:14}),$t(i,T.red,.04,.04,ee-ve,4.6,Rt-.3,(ve+ee)/2,{rx:Math.PI/2,shadow:!1,seg:8}),$t(i,T.red,.04,.04,He,He/2,Rt-.3,17.9,{rz:Math.PI/2,shadow:!1,seg:8});for(const[t,e]of[[2,12.2],[5.5,12.2],[2,15.3],[5.5,15.3],[8.6,12.2]])X_(i,t,e,Rt-.62)}function dh(i,t,e,n,s){const r=Math.hypot(n-t,s-e);U(i,T.blackMatte,.01,.012,r,Le+.008,(e+s)/2,(t+n)/2,{shadow:!1,rx:Math.atan2(-(s-e),n-t)})}function J_(i){U(i,T.concrete,xi,Pt,ue-7.4,Le-xi/2,Pt/2,(7.4+ue)/2),U(i,T.wall,xi,Rt-Pt,ue-7.4,Le-xi/2,Pt+(Rt-Pt)/2,(7.4+ue)/2,{shadow:!1}),Jt(Le-xi,7.4,Le,ue+.35);const e=ue-7.4,n=new xt(Ol(new Ae(e,Pt),e,Pt,1.6),T.concrete);n.position.set(Le+.003,Pt/2,(7.4+ue)/2),n.rotation.y=Math.PI/2,n.receiveShadow=!0,n.userData.label="Logo wall",i.add(n),dh(i,ue,3,7.4+.1,1),dh(i,7.4+.1,1,7.4+.9,0),Wi(i,T.logo,.5,.72,Le+.03,2.35,8.25,Math.PI/2),Wi(i,T.logoText,1,.35,Le+.02,1.78,8.3,Math.PI/2),sn(Ul(i,Le+.47,8.4,Math.PI/2,2)),U(i,T.concrete,.5,Pt-.004,.32,Le-.15,(Pt-.004)/2,7.4+.14),Te(i,Le-xi,ue+.175,8.3,ue+.175,{h:Rt,t:.35});const s=Wi(i,T.glassFrost,te-8.3,Pt-.1,(8.3+te)/2,Pt/2,ue);s.renderOrder=2;for(const[l,c,h]of[[8.7,1.5,.5],[9.25,.9,-.4],[9.25,2.2,.6],[9.85,1.4,-.5]])U(i,T.concrete,.45,1,.01,l,c,ue-.02,{rz:h,shadow:!1});for(const l of[8.3,9.35,te])U(i,T.black,.05,Pt,.06,l,Pt/2,ue);U(i,T.black,te-8.3,.06,.06,(8.3+te)/2,.03,ue),U(i,T.wall,te-8.3,Rt-Pt,.15,(8.3+te)/2,Pt+(Rt-Pt)/2,ue,{shadow:!1}),Jt(8.3,ue-.08,te,ue+.08),Hi(i,{x0:te,z0:Re,x1:te,z1:7.6,h:Pt,panel:.8}),Hi(i,{x0:te,z0:8.65,x1:te,z1:ue,h:Pt,panel:.9});const r=Wi(i,T.glass,1,2.35,te,1.2,8.12,Math.PI/2);r.renderOrder=2;for(const l of[7.62,8.63])U(i,T.black,.08,2.4,.05,te,1.2,l);U(i,T.black,.08,.08,1.05,te,2.38,8.12),U(i,T.black,.08,.1,1.05,te,.05,8.12),U(i,T.glass,.02,Pt-2.42,1,te,(Pt+2.42)/2,8.12,{shadow:!1}).renderOrder=2,U(i,T.metalDark,.06,.05,.4,te-.06,2.3,8.4,{shadow:!1});for(const l of[-1,1])U(i,T.chrome,.03,.45,.03,te+l*.06,1.05,7.8);Jt(te-.08,7.6,te+.08,8.65),U(i,T.wall,.15,Rt-Pt,ue-Re,te,Pt+(Rt-Pt)/2,(Re+ue)/2,{shadow:!1}),U(i,T.blackMatte,.6,.01,1,te-.45,.005,8.12,{shadow:!1}),U(i,T.concrete,te-ei,Rt,Re-cn,(ei+te)/2,Rt/2,(cn+Re)/2),Jt(ei,cn,te+.05,Re);const o=new ne;o.position.set(9.85,0,Re),i.add(o),U(o,T.cream,.56,2.3,.3,0,1.25,.15);for(const l of[.75,1.3,1.85,2.35])U(o,T.white,.58,.035,.32,0,l,.16);for(const[l,c,h]of[[-.14,1.87,.3],[.14,1.87,.26],[0,2.37,.34]])$t(o,T.bottleYellow,.035,.05,h,l,c+h/2,.16,{seg:10});for(const[l,c,h]of[[-.12,1.32,T.gallery],[.13,1.32,T.red],[0,.77,T.gallery]])U(o,T.black,.2,.26,.03,l,c+.14,.16,{rx:-.12}),U(o,h,.16,.2,.01,l,c+.14,.178,{shadow:!1,rx:-.12});Jt(9.55,Re,10.15,Re+.32),U(i,T.white,.13,.16,.04,9.2,1.35,Re+.02),U(i,T.bottleBlue,.07,.05,.01,9.2,1.38,Re+.045,{shadow:!1});const a=new ne;a.userData.label="Reception desk",a.position.set(9.3,0,6.6),i.add(a),U(a,T.cream,.7,.05,1.25,0,.8,0),U(a,T.cream,.05,.78,1.25,-.33,.39,0,{rz:.12});for(const l of[-1,1])U(a,T.cream,.65,.78,.05,0,.39,l*.6);U(a,T.black,.05,.05,1.15,-.4,.03,0),$t(a,T.black,.035,.035,.01,.1,.83,.3,{seg:12}),sn(a),uo(i,9.1,6.5,2.15,Pt,1.3),U(i,T.white,.08,.08,.06,Le+.05,2.85,9.1),sn(Nl(i,9.95,8.95,{size:.4,h:.45})),Ge(i,T.floorCorridor,te+.05,0,20,16,0),Ge(i,T.white,te+.05,0,20,16,3.1,{down:!0}),Te(i,20,0,20,16,{h:3.1,mat:T.wallWarm}),Te(i,te,16,20,16,{h:3.1,mat:T.wallWarm}),Te(i,te,0,20,0,{h:3.1,mat:T.wallWarm}),Te(i,te,ue,te,16,{h:3.1,mat:T.wallWarm,collide:!1});for(let l=12;l<20;l+=3)for(let c=1.5;c<16;c+=3)U(i,T.lightStrip,.5,.02,.5,l,3.09,c,{shadow:!1});for(const l of[5,11])U(i,T.chrome,.05,2.2,1.2,19.88,1.1,l),U(i,T.metalDark,.06,2.2,.02,19.86,1.1,l,{shadow:!1});U(i,T.wood,1,2.2,.05,14,1.1,15.88)}function Du(i,t,e,n=1.6){const s=new ne;s.userData.label="Cabin desk",s.position.set(t,0,e),i.add(s),U(s,T.whiteGloss,n,.05,.8,0,.77,0),U(s,T.woodDark,n-.1,.72,.05,0,.38,.36);for(let r=0;r<6;r++)U(s,T.black,n-.15,.02,.01,0,.15+r*.1,.39,{shadow:!1});U(s,T.woodDark,.05,.72,.75,-n/2+.05,.38,0),U(s,T.woodDark,.45,.72,.6,n/2-.25,.38,0),U(s,T.black,.1,.01,.1,-.2,.8,.15,{shadow:!1}),U(s,T.black,.5,.31,.03,-.25,1.12,-.2),U(s,T.black,.04,.3,.03,-.25,.94,-.23),sn(s)}function Q_(i,t,e,n,s){const r=new ne;r.userData.label="Built-in shelves",r.position.set(t+s*.2,0,(e+n)/2),i.add(r);const o=n-e;U(r,T.white,.4,2.7,o,0,1.35,0);const a=Math.max(1,Math.round(o/.8));for(let l=0;l<a;l++){const c=-o/2+(l+.5)*(o/a);for(const h of[1.2,1.65,2.1])U(r,T.whiteGloss,.02,.03,o/a-.06,s*.2,h,c,{shadow:!1});for(const h of[.25,.6,.95])U(r,T.whiteGloss,.02,.32,o/a-.06,s*.205,h,c,{shadow:!1});Vt()<.6&&U(r,T.black,.04,.18,.2,s*.12,1.32,c),Vt()<.6&&U(r,T.gallery,.12,.2,.15,s*.12,1.75,c+.2)}Jt(Math.min(t,t+s*.4),e,Math.max(t,t+s*.4),n)}function ph(i,t,e,n){const s=e-t,r=new xt(Ol(new Ae(s,Pt),s,Pt,1.6),T.concrete);r.position.set((t+e)/2,Pt/2,n+.105),r.receiveShadow=!0,i.add(r)}function mh(i,t,e,{chairsZ:n,back:s,len:r=1.6,visitors:o=[-.4,.4]}){Du(i,t,e,r),sn(Cs(i,t-.1,e-.75,0,{exec:!0}),-.1);for(const a of o)sn(Ru(i,t+a,n,Math.PI),-.05);Fl(i,t,2.55,s+.11,0)}function tx(i){Te(i,ye,cn,ei,cn,{h:Rt}),Te(i,ye,0,ye,Mi,{h:Rt}),Hi(i,{x0:ye,z0:Mi,x1:ye,z1:Re,h:Pt}),Te(i,ye,Mi,ye,Re,{h:Rt-Pt,y0:Pt,collide:!1}),Hi(i,{x0:vs,z0:cn,x1:vs,z1:Re,h:Pt}),ph(i,ye+.1,vs-.08,cn),ph(i,vs+.08,ei,cn),Hi(i,{x0:ye,z0:Re,x1:vs,z1:Re,h:Pt,door:[6.05,5.15],swing:-1,name:"Cabin 2 door"}),Hi(i,{x0:vs,z0:Re,x1:ei,z1:Re,h:Pt,door:[6.25,7.15],swing:-1,name:"Cabin 1 door"}),Hi(i,{x0:0,z0:Mi,x1:ye,z1:Mi,h:Pt,door:[.15,1.05],swing:-1,name:"Corner cabin door"}),mh(i,7.35,4.35,{chairsZ:5.15,back:cn,len:1.6,visitors:[.35,.85]}),Q_(i,ei,cn+.1,5.65,-1),mh(i,4,4.35,{chairsZ:5.15,back:cn,len:1.5}),sn(Nl(i,5.35,3.45,{size:.35,h:.4})),Du(i,1.6,1.85),sn(Cs(i,1.5,1.05,0,{exec:!0}),-.1);for(const e of[1.35,2.05])sn(Ru(i,e,2.95,Math.PI),-.05);U(i,T.concrete,.55,Pt,.55,ye-.38,Pt/2,.38),Jt(ye-.65,0,ye,.65),Fl(i,ye-.11,2.55,1.8,-Math.PI/2),U(i,T.blackMatte,.25,.3,.25,2.7,.15,2.9),Te(i,0,ve,1.3,ve,{h:Rt,t:.3});const t=[[1.3,2.6],[4.3,5.6],[5.6,6.9]];for(const[e,n]of t){const s=new ne;s.position.set(0,0,ve),s.rotation.y=Math.PI/2,i.add(s);const r=[];for(let o=0;o<3;o++)Vt()<.55&&r.push({i:o,row:Vt()<.5?0:1});V_(s,0,e,n,{yellowCubbies:r}),Jt(e,ve-.2,n,ve+.2)}sn(Pu(i,.6,7.25),-.15),sn(Ul(i,ye-.47,5,-Math.PI/2,2)),U(i,T.red,.55,.01,.9,.5,.005,5.7,{shadow:!1}),uo(i,1.9,4.6,2.2,Pt),uo(i,5,7,2.25,Pt)}const fo=[{id:"W1",x:1.3,z:10.7,rot:0},{id:"L1",x:4.9,z:10.75,rot:0},{id:"W2",x:1.15,z:13.6,rot:0},{id:"L2",x:4.95,z:13.7,rot:0},{id:"W3",x:1.55,z:17.25,rot:0},{id:"L3",x:5.25,z:16.95,rot:0},{id:"E1",x:9.25,z:10.95,rot:0},{id:"E2",x:9.3,z:14,rot:0},{id:"E3",x:9.3,z:16.9,rot:0},{id:"LOCK",x:6.875,z:8.875,rot:0},{id:"LOCK2",x:.675,z:8.375,rot:270}];function ex(i,t,e,n){const s=new ne;s.position.set(t,0,e),s.rotation.y=n,s.userData.label="Door",i.add(s),U(s,T.black,1,2.4,.04,0,1.2,.11),U(s,T.glassYellow,.86,2.26,.02,0,1.17,.135,{shadow:!1}),U(s,T.black,.04,2.26,.03,-.2,1.17,.14,{shadow:!1}),U(s,T.chrome,.03,.35,.03,.32,1.05,.17),U(s,T.white,.62,.62,.005,.12,1.05,.15,{rz:Math.PI/4,shadow:!1}),U(s,T.glassYellow,.44,.44,.006,.12,1.05,.152,{rz:Math.PI/4,shadow:!1})}function nx(i,t,e,n,s,r=3,o=4){const a=new ne;a.position.set(t,e,n),a.rotation.y=s,a.userData.label="Photo gallery",i.add(a);const l=.3,c=.22,h=.08;for(let u=0;u<o;u++)for(let f=0;f<r;f++){if(u===o-1&&f===r-1)continue;const d=(f-(r-1)/2)*(l+h),g=((o-1)/2-u)*(c+h);U(a,T.black,l,c,.02,d,g,.01,{shadow:!1}),Wi(a,T.gallery,l-.04,c-.04,d,g,.021)}}function ix(i,t,e,n){ex(i,t,e,n);const s=new ne;s.position.set(t,0,e),s.rotation.y=n,s.userData.label="Wall",i.add(s);for(const r of[-1,1])U(s,T.white,.14,Rt,.08,r*.6,Rt/2,.12);U(s,T.blackMatte,1.06,Rt-2.75,.03,0,(2.75+Rt)/2,.11,{shadow:!1}),U(s,T.white,1.06,.12,.08,0,2.69,.12)}const sx={W:{len:1.4,width:1.2,seatW:.7,name:"Window table"},L:{len:2.8,width:1.2,seatW:.7,name:"Long table"},E:{len:1.3,width:.8,seatW:1.2,name:"East-wall desk"}};function rx(i,t,e,{len:n,width:s,seatW:r},o=0,a="Table"){const l={width:s,seatW:r,chairOff:.12};if(o%180){const h=new ne;h.userData.label=a,i.add(h),hh(h,t,e-n/2,e+n/2,{...l,solidFn:(u,f,d,g)=>Jt(u,f,d,g)});return}const c=new ne;c.position.set(0,0,e),c.rotation.y=Math.PI/2,c.userData.label=a,i.add(c),hh(c,0,t-n/2,t+n/2,{...l,solidFn:(h,u,f,d)=>Jt(u,e-f,d,e-h)})}function ox(i){const[t,e,n,s]=[.45,2.95,.5,2.75];Te(i,0,ee,t,ee,{h:Rt}),Te(i,t,ee,e,ee,{h:n}),Te(i,t,ee,e,ee,{h:Rt-s,y0:s,collide:!1}),Te(i,e,ee,He,ee,{h:Rt});{const l=new ne;l.userData.label="Meeting room window",i.add(l);const c=new xt(new Ae(e-t,s-n),T.glass);c.position.set((t+e)/2,(n+s)/2,ee),c.renderOrder=2,l.add(c);const h=[t,t+.85,t+1.7,e],u=[n,n+.65,n+1.6,s];for(const f of h)U(l,T.black,.06,s-n+.06,.22,f,(n+s)/2,ee,{shadow:!1});for(const f of u)U(l,T.black,e-t,.06,.22,(t+e)/2,f,ee,{shadow:!1})}Te(i,He,ue,He,ee,{h:Rt}),U(i,T.ceilingBlack,He,.45,.05,He/2,Rt-.225,ee-.13,{shadow:!1}),U(i,T.ceilingBlack,.05,.45,ee-ue,He-.13,Rt-.225,(ue+ee)/2,{shadow:!1}),U(i,T.white,.6,Rt,.6,7.35,Rt/2,15.7).userData.label="Pillar",Jt(7.05,15.4,7.65,16),q_(i,7.35,2.35,15.39,Math.PI),U(i,T.white,1.25,Rt,.4,.62,Rt/2,15.7).userData.label="Window column",Jt(0,15.5,1.25,15.9);for(const l of fo){const c=sx[l.id[0]];!c||l.id.startsWith("LOCK")||(rx(i,l.x,l.z,c,l.rot||0,`${c.name} ${l.id}`),l.id[0]==="E"?uo(i,l.x,l.z,2.2):Lu(i,l.x,l.z,Math.min(2.4,c.len-.1),l.rot%180?Math.PI/2:0))}const r=new xt(new Ae(He-3.3,ee-17.6),T.floorBeige);r.rotation.x=-Math.PI/2,r.position.set((3.3+He)/2,.004,(17.6+ee)/2),r.receiveShadow=!0,i.add(r);const o=$t(i,T.blackMatte,.16,.16,.6,4.2,.3,ee-.3,{seg:16});sn(o),U(i,T.glassYellow,.18,.38,.02,4.2,.34,ee-.47,{shadow:!1});for(const l of[12.45,15.45])ix(i,He-.1,l,-Math.PI/2);nx(i,He-.115,1.95,14,-Math.PI/2);const a={0:Math.PI,90:Math.PI/2,180:0,270:-Math.PI/2};for(const l of fo.filter(c=>c.id.startsWith("LOCK"))){const c=((l.rot||0)%360+360)%360;Y_(i,l.x,l.z-.625,l.z+.625,a[c]);const[h,u]=c%180?[.625,.275]:[.275,.625];Jt(l.x-h,l.z-u,l.x+h,l.z+u)}for(const[l,c]of[[1.6,8.6]])sn(Nl(i,l,c,{size:.4,h:.5,mat:T.blackMatte}))}function Iu(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ve;let c=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=gh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const g=gh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function gh(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new En(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const Pn=-40,ha=9,ua=12;let fa=5660;const $e=()=>(fa=fa*16807%2147483647,(fa-1)/2147483646),Ne=(i,t)=>i+$e()*(t-i),Nn=(i,t={})=>new rn({color:i,roughness:1,...t});function ax(i){const t={cool:["#a4a8ac","#a3a7aa","#a2a9af","#9ba9b8","#8ea2bd","#7d95b5","#7890b0"],centre:["#ccc8bd","#cec8bb","#cbc6bb","#c4c8c7","#b3c0ca","#a2b4c4","#9bb0c2"],warm:["#e6d5b9","#ead9bd","#efe1c4","#f4efde","#eaebe3","#d0dbe0","#bccbd6"]},e=[0,3,10,18,26,60,90],n=yt=>new Qt(yt),s=(yt,dt)=>{const ut=t[yt];if(dt<=0)return n(ut[0]);let at=0;for(;at<e.length-2&&dt>e[at+1];)at++;const Ut=Math.min(1,(dt-e[at])/(e[at+1]-e[at]));return n(ut[at]).lerp(n(ut[at+1]),Ut)},r=document.createElement("canvas");r.width=256,r.height=128;const o=r.getContext("2d");for(let yt=0;yt<r.width;yt++){let dt=yt/r.width*360;dt>180&&(dt-=360);const ut=-dt,at=Math.max(-1,Math.min(1,ut/38))*Math.max(0,1-Math.max(0,Math.abs(dt)-90)/60);for(let Ut=0;Ut<r.height;Ut++){const vt=90-Ut/(r.height-1)*180,A=s("centre",vt).lerp(s(at<0?"cool":"warm",vt),Math.abs(at));o.fillStyle="#"+A.getHexString(),o.fillRect(yt,Ut,1,1)}}const a=new oi(r);a.colorSpace=De;const l=new xt(new ri(1300,32,24),new bi({map:a,side:je,fog:!1,depthWrite:!1,toneMapped:!1}));l.renderOrder=-1,i.add(l);const c=new xt(new Ae(2600,2600),Nn("#34462a"));c.rotation.x=-Math.PI/2,c.position.y=Pn,i.add(c);const h=new Map,u=(yt,dt,ut)=>{h.has(yt)||h.set(yt,[]);const at=dt.clone();at.applyMatrix4(ut),h.get(yt).push(at)},f=new _e,d=new Os,g=new Qe,x=new N,m=new N,p=(yt,dt,ut,at,Ut,vt,A,S,k=0)=>{d.setFromEuler(g.set(0,k,0)),f.compose(m.set(ut,at,Ut),d,x.set(vt,A,S)),u(yt,dt,f)},v=2016,y=1512,L=3029/2,[w,C,R,E]=[1480,3550,1270,1760],M={x:-2.8,y:1.6,z:12},I=230,V=yt=>M.z-(yt-v)/L*I,G=yt=>M.y+(y-yt)/L*I,Z=(yt,dt)=>{const ut=M.x-yt;if(ut<60)return 1/0;const at=v-(dt-M.z)/ut*L;return at<w-60||at>C+60?1/0:ut>I?-1/0:M.y+(y-(E-25))/L*ut},Q=new yo(1,1).toNonIndexed(),q=new Ti(.16,.24,1,5,1,!0).toNonIndexed();q.translate(0,.5,0);const tt=lx(),O=["#34452a","#3d4f30","#475a37","#516440","#38492d"].map(yt=>Nn(yt,{flatShading:!0})),nt=["#43552f","#4d6136","#3b4c2a","#566b3c"].map(yt=>Nn(yt,{side:Ie,roughness:.85})),st=Nn("#4f4a40"),Et=yt=>yt[Math.floor($e()*yt.length)],kt=(yt,dt,ut=Ne(9,17),at=Pn)=>{const Ut=Z(yt,dt)-at-2;if(Ut<3){Ut>1&&qt(yt,dt,Ut/2.2,at);return}ut=Math.min(ut,Ut);const vt=Ne(-.08,.08);p(st,q,yt,at,dt,1,ut,1,0);const A=Ne(.8,1.15);d.setFromEuler(g.set(vt,$e()*Math.PI*2,vt)),f.compose(m.set(yt,at+ut,dt),d,x.set(A,A,A)),u(Et(nt),tt,f)};function qt(yt,dt,ut,at=Pn){ut=Math.min(ut,(Z(yt,dt)-at-4)/1.8),!(ut<.8)&&p(Et(O),Q,yt,at+ut*.9+Ne(1,4),dt,ut*Ne(.9,1.2),ut*Ne(.6,.85),ut*Ne(.9,1.2),$e()*6)}const K=(yt,dt)=>yt<-7||dt<-8&&yt<40||dt>30&&yt<20;for(let yt=0;yt<2600;yt++){const dt=Ne(-190,40),ut=Ne(-170,210);K(dt,ut)&&($e()<.58?kt(dt,ut):qt(dt,ut,Ne(3.5,7)))}for(let yt=0;yt<5200;yt++){const dt=Math.PI*.4+$e()*Math.PI*1.25,ut=Ne(170,560),at=ha+Math.cos(dt)*ut,Ut=ua+Math.sin(dt)*ut;$e()<.55?kt(at,Ut,Ne(10,18)):qt(at,Ut,Ne(6,11))}for(let yt=0;yt<1800;yt++){const dt=Math.PI*.4+$e()*Math.PI*1.25,ut=Ne(540,1150);qt(ha+Math.cos(dt)*ut,ua+Math.sin(dt)*ut,Ne(14,26))}ct(-700,300,260,62,190),ct(-980,-520,380,75,300),ct(-1050,700,300,60,260),ct(-1100,60,500,35,240);function ct(yt,dt,ut,at,Ut){const vt=new xt(new ri(1,28,14,0,Math.PI*2,0,Math.PI/2),Nn("#3f5230",{flatShading:!0}));vt.scale.set(ut,at,Ut),vt.position.set(yt,Pn-2,dt),i.add(vt);const A=Math.round(ut*Ut/90);for(let S=0;S<A;S++){const k=$e()*Math.PI*2,J=Math.sqrt($e())*.97,it=Math.cos(k)*J,j=Math.sin(k)*J,Ct=Pn-2+at*Math.sqrt(Math.max(0,1-it*it-j*j)),pt=yt+it*ut,Mt=dt+j*Ut;$e()<.35?kt(pt,Mt,Ne(10,16),Ct-2):qt(pt,Mt,Ne(7,13),Ct-3)}}const bt=Nn("#c9c6be",{roughness:.9}),mt=Nn("#b5b0a6",{roughness:.9}),Ot=Nn("#6e4234",{roughness:.9}),Ht=Nn("#8f9496",{roughness:.6,metalness:.3}),zt=Nn("#56606a",{roughness:.4}),re=new Hn(1,1,1).toNonIndexed(),Xt=new Ti(.5,.5,1,3,1).toNonIndexed();Xt.rotateZ(Math.PI/2),Xt.rotateX(-Math.PI/2);for(let yt=0;yt<70;yt++){const dt=Math.PI*.55+$e()*Math.PI*.95,ut=30+Math.pow($e(),1.4)*420,at=ha+Math.cos(dt)*ut,Ut=ua+Math.sin(dt)*ut;if(!K(at,Ut))continue;const vt=Ne(8,14),A=Ne(8,13),S=Ne(6,11),k=$e()*Math.PI;if(Pn+S+3.5>Z(at,Ut))continue;p($e()<.7?bt:mt,re,at,Pn+S/2,Ut,vt,S,A,k),p(zt,re,at,Pn+S*.62,Ut,vt+.1,1,A*.6,k);const J=$e();J<.45?p(bt,re,at,Pn+S+.4,Ut,vt+.3,.8,A+.3,k):J<.8?p(Ot,Xt,at,Pn+S+1.6,Ut,vt+1,3.2,A+1,k):p(Ht,re,at,Pn+S+.6,Ut,vt+1,.25,A+1,k)}const de=new wu().load("textures/skyline.png");de.colorSpace=De,de.anisotropy=4;const F=new xt(new Ae(V(w)-V(C),G(R)-G(E)),new bi({map:de,transparent:!0,alphaTest:.03,depthWrite:!1,fog:!1,toneMapped:!1}));F.rotation.y=Math.PI/2,F.position.set(M.x-I,(G(R)+G(E))/2,(V(w)+V(C))/2),F.renderOrder=1,i.add(F);for(const[yt,dt]of h){const ut=new xt(Iu(dt,!1),yt);ut.castShadow=!1,ut.receiveShadow=!1,i.add(ut)}}function lx(){const i=[];for(let s=0;s<9;s++){const r=s/9*Math.PI*2+s%2*.2,o=s%3===0?.55:.25,a=[];for(let u=0;u<=3;u++){const f=u/3,d=f*4.6,g=o*d*.6-f*f*2.4,x=.55*Math.sin(Math.PI*Math.min(1,f*1.1+.08));a.push({r:d,y:g,w:x})}const l=[Math.cos(r),Math.sin(r)],c=[-Math.sin(r),Math.cos(r)],h=(u,f)=>[l[0]*u.r+c[0]*u.w*f,u.y,l[1]*u.r+c[1]*u.w*f];for(let u=0;u<3;u++){const f=h(a[u],-1),d=h(a[u],1),g=h(a[u+1],-1),x=h(a[u+1],1);i.push(...f,...g,...d,...d,...g,...x)}}const n=new Ve;return n.setAttribute("position",new fe(i,3)),n.computeVertexNormals(),n.setAttribute("uv",new fe(new Float32Array(i.length/3*2),2)),n}const We=Z_,le=-3.6,Fn=.25,Oi=3.85,Uu=.12,Zr=-3.95,mi=i=>Oi+i*Uu,be=i=>new rn(i),At={curb:be({color:"#6f6c66",roughness:.95}),steel:be({color:"#8e8d88",roughness:.55,metalness:.55}),rust:be({color:"#9b8a78",roughness:.7,metalness:.35}),galv:be({color:"#a9aca9",roughness:.45,metalness:.6}),steelRail:be({color:"#c4c7c9",roughness:.22,metalness:.95}),poly:new rn({color:"#d2a8c8",transparent:!0,opacity:.42,roughness:.35,depthWrite:!1,side:Ie}),glass:new rn({color:"#d6e6e2",transparent:!0,opacity:.2,roughness:.05,metalness:.1,depthWrite:!1,side:Ie}),clad:be({color:"#cfc6b2",roughness:.6,metalness:.25}),plaster:be({color:"#e9e6df",roughness:.95}),coir:be({color:"#6e4b30",roughness:1}),potWhite:be({color:"#efede8",roughness:.55}),leafDark:be({color:"#355e2a",roughness:.75}),leafMid:be({color:"#5e8a3a",roughness:.75}),leafPale:be({color:"#a9bf83",roughness:.75}),leafRed:be({color:"#a6473a",roughness:.75}),palm:be({color:"#4f7a2f",roughness:.8,side:Ie}),macrame:be({color:"#6d5a4b",roughness:1,side:Ie}),cushion:be({color:"#d9cdb8",roughness:1}),tableTop:be({color:"#8a6142",roughness:.55}),rattan:be({color:"#7b6c60",roughness:.9}),water:new rn({color:"#a9cde8",transparent:!0,opacity:.55,roughness:.1,depthWrite:!1}),capBlue:be({color:"#2464b0",roughness:.5}),counterTop:be({color:"#222222",roughness:.35,metalness:.2}),acGrey:be({color:"#d9d9d4",roughness:.6})},cx=(()=>{const i=document.createElement("canvas");i.width=128,i.height=256;const t=i.getContext("2d"),e=["#a4553f","#d9b26a","#5b6f8a","#c98a5a","#7a8a5a","#e6d6b8","#8a4a5a"];for(let s=0;s<256;s+=3)t.fillStyle=e[Math.floor(Vt()*e.length)],t.fillRect(0,s,128,3);const n=new oi(i);return n.colorSpace=De,n})();At.rug=be({map:cx,roughness:1});const hx=(i=16)=>{const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.strokeStyle="#fff",e.lineWidth=3;for(let s=-128;s<=256;s+=i)e.beginPath(),e.moveTo(s,0),e.lineTo(s+128,128),e.stroke(),e.beginPath(),e.moveTo(s,128),e.lineTo(s+128,0),e.stroke();const n=new oi(t);return n.wrapS=n.wrapT=Yi,n},Nu=hx(22);Nu.repeat.set(5,3);At.macrameNet=be({color:"#6d5a4b",alphaMap:Nu,alphaTest:.5,roughness:1,side:Ie});const ux=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const t=i.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,64,3),t.fillRect(0,0,3,64);const e=new oi(i);return e.wrapS=e.wrapT=Yi,e})();function Xi(i,t,e,n,s){const r=new ne;return r.position.set(t,e,n),s&&(r.userData.label=s),i.add(r),r}function Kr(i,t,e,n,s,r,o,a=8){return $t(i,t,e,e,o-r,n,s,(r+o)/2,{rx:Math.PI/2,seg:a,shadow:!1})}function jr(i,t,e,n,s,r,o=7){for(let a=0;a<o;a++){const l=new xt(new yo(1,0),r[a%r.length]),c=s*(.45+Vt()*.4);l.scale.set(c,c*(.7+Vt()*.5),c);const h=Vt()*Math.PI*2,u=Vt()*s*.6;l.position.set(t+Math.cos(h)*u,e+c*.8+Vt()*s*.6,n+Math.sin(h)*u),l.rotation.set(Vt()*3,Vt()*3,Vt()*3),l.castShadow=!0,l.receiveShadow=!0,i.add(l)}}function Fu(i,t,e,n,{n:s=12,len:r=.6,mat:o=At.leafMid,droop:a=.5,w:l=.12}={}){for(let c=0;c<s;c++){const h=new ne;h.position.set(t,e,n),h.rotation.y=c/s*Math.PI*2+Vt()*.4,i.add(h);const u=a*(.5+Vt()),f=new xt(new Ae(r,l),o);f.position.set(Math.cos(u)*r/2,Math.sin(-u+.9)*r/2-.05,0),f.rotation.set(Math.PI/2-.3,0,-u+.9-Math.PI/4),f.castShadow=!0,h.add(f)}}function Ms(i,t,e,n="snake",{r:s=.18,h:r=.32}={}){const o=Xi(i,t,0,e,"Plant");return $t(o,At.potWhite,s,s*.78,r,0,r/2,0,{seg:16}),$t(o,T.soil,s-.02,s-.02,.01,0,r-.01,0,{seg:12,shadow:!1}),n==="snake"?So(o,0,r,0,10,.75):n==="bush"?jr(o,0,r,0,s*1.6,[At.leafDark,At.leafMid]):n==="variegated"?jr(o,0,r,0,s*1.7,[At.leafPale,At.leafMid,At.leafPale],9):n==="croton"?jr(o,0,r,0,s*1.4,[At.leafRed,At.leafMid,At.leafRed]):n==="fern"?Fu(o,0,r+.08,0,{n:16,len:.55,mat:At.leafPale,droop:.9,w:.16}):n==="tree"&&($t(o,T.woodDark,.015,.02,.9,0,r+.45,0,{seg:5}),jr(o,0,r+.55,0,.35,[At.leafMid,At.leafPale,At.leafDark],8)),Jt(t-s,e-s,t+s,e+s),o}function _h(i,t,e,n,s,r=At.coir){$t(i,T.blackMatte,.004,.004,n-s,t,(n+s)/2,e,{seg:3,shadow:!1}),$t(i,r,.07,.11,.3,t,s-.15,e,{seg:10})}function fx(i,t,e,n=0){const s=Xi(i,t,0,e,"Bar stool");s.rotation.y=n;for(const[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])U(s,T.black,.025,.78,.025,r*.15,.39,o*.15,{rx:o*.05,rz:-r*.05});U(s,T.black,.34,.04,.34,0,.78,0);for(const r of[-1,1])U(s,T.black,.025,.36,.025,.15,.96,r*.13);U(s,T.black,.025,.06,.3,.15,1.12,0),U(s,T.black,.3,.02,.02,0,.3,.15,{shadow:!1}),U(s,T.black,.3,.02,.02,0,.3,-.15,{shadow:!1})}function dx(i,t,e,n=.62){const s=Xi(i,t,0,e,"Stool");$t(s,At.tableTop,.17,.17,.04,0,n,0,{seg:16});for(let o=0;o<3;o++){const a=o/3*Math.PI*2;U(s,T.black,.02,n,.02,Math.cos(a)*.14,n/2,Math.sin(a)*.14,{rz:Math.cos(a)*.1,rx:-Math.sin(a)*.1})}const r=new xt(new pr(.16,.008,4,20),T.black);r.rotation.x=Math.PI/2,r.position.y=.22,s.add(r),Jt(t-.18,e-.18,t+.18,e+.18)}function px(i){const t=Xi(i,0,0,0,"Terrace"),e=We;Ge(t,T.floorTerrace,le,0,0,We,0),U(t,At.curb,.3,Fn,e,le+.15,Fn/2,e/2),U(t,At.curb,.32,.03,e,le+.15,Fn+.015,e/2,{shadow:!1}),Jt(le-.1,0,le+.32,We),Jt(le,-.15,0,0),Jt(le,We,0,We+.15);const n=le+.1,s=Fn+1;for(let m=0;m<e-.01;m+=1.2){const p=Math.min(1.2,e-m)-.02,v=new xt(new Ae(p,s-Fn-.06),At.glass);v.position.set(n,(Fn+s)/2,m+.01+p/2),v.rotation.y=Math.PI/2,v.renderOrder=2,t.add(v),U(t,T.chrome,.03,.06,.05,n,s-.04,m+.06,{shadow:!1}),U(t,T.chrome,.03,.06,.05,n,Fn+.06,m+.06,{shadow:!1})}Kr(t,At.steelRail,.028,n,s+.03,0,e,12),Kr(t,At.galv,.035,le+.42,.55,.4,e-.4,10);for(let m=1.5;m<e;m+=3.1)U(t,At.galv,.03,.3,.03,le+.42,.4,m,{shadow:!1});for(const m of[.12,e-.12])$t(t,At.steelRail,.025,.025,s,le+.35,s/2,m,{seg:10}),U(t,At.steelRail,.25,.04,.04,le+.23,s+.03,m,{shadow:!1});const r=m=>m<ve?Pt:2.8;for(const[m,p]of[[0,ve],[ve,We]]){const v=r(m),y=Oi+.2-v;U(t,At.clad,.03,y,p-m,-.09,v+y/2,(m+p)/2,{shadow:!1});for(let _=m+.08;_<p;_+=.16)U(t,At.clad,.025,y,.035,-.115,v+y/2,_,{shadow:!1});U(t,At.steel,.12,.08,p-m,-.12,v+.04,(m+p)/2,{shadow:!1})}const o=-Zr,a=Math.atan2(o*Uu,o),l=o/Math.cos(a),c=Zr/2,h=U(t,At.poly,l,.012,e+.4,c,mi(c)+.06,e/2,{shadow:!1,rz:a});h.renderOrder=3;for(let m=0;m<=e+.01;m+=e/16)U(t,Math.round(m/(e/16))%3===1?At.rust:At.steel,l,.1,.06,c,mi(c),m,{rz:a});for(const m of[-.35,-1.25,-2.15,-3.05,-3.85])Kr(t,At.steel,.025,m,mi(m)+.03,-.2,e+.2);U(t,At.steel,.16,.14,e+.4,Zr,mi(Zr)-.02,e/2),U(t,At.steel,.12,.12,e,-.18,Oi-.06,e/2);const u=-1.8,f=mi(u)-.28;Kr(t,At.galv,.02,u,f,0,e);for(let m=.5;m<e;m+=1.55){$t(t,At.galv,.006,.006,.26,u,f+.13,m,{seg:4,shadow:!1}),$t(t,T.white,.055,.045,.1,u,f-.07,m,{seg:12,shadow:!1});const p=new xt(new In(.035,12),T.spotGlow);p.rotation.x=Math.PI/2,p.position.set(u,f-.121,m),t.add(p)}const d=le+.36;for(let m=0;m<=8;m++){const p=.25+m*(e-.5)/8,v=mi(d);if($t(t,At.galv,.045,.045,v-Fn,d,(v+Fn)/2,p,{seg:10}),m>=3&&m<=5){$t(t,At.coir,.085,.085,2.5,d,Fn+1.3,p,{seg:12});for(const y of[.9,1.6,2.3])$t(t,At.plaster,.088,.088,.06,d,y,p,{seg:12,shadow:!1});_h(t,d+.16,p+.05,v-.1,2.75)}Jt(d-.09,p-.09,d+.09,p+.09)}const g=-.32,x=[[1.4,"tree"],[1.95,"fern"],[2.6,"croton"],[3.2,"variegated"],[4.35,"snake"],[7,"snake"],[7.5,"variegated"],[8,"bush"],[8.5,"snake"],[10.6,"bush"],[11.1,"snake"],[11.6,"variegated"],[12.1,"snake"],[13.6,"tree"],[14.6,"bush"],[16.3,"snake"],[17.2,"variegated"],[18.2,"snake"],[19.3,"croton"],[22,"fern"]];for(const[m,p]of x)Ms(t,g-(p==="fern"?.1:0),m,p,p==="tree"?{r:.2,h:.34}:{});Ms(t,le+.75,12,"variegated",{r:.22,h:.4}),Ms(t,le+.75,8.3,"tree",{r:.18,h:.34});for(const m of[6.2,9.9,13])_h(t,-.55,m,Oi-.1,2.55,At.potWhite);U(t,At.rug,.55,.012,.85,-.45,.007,5.7,{shadow:!1}),U(t,At.rug,.5,.012,.8,-.4,.007,20.8,{shadow:!1,ry:.08});{const y=Xi(t,-.95,0,9.3,"Hanging chair");$t(y,At.coir,.012,.012,mi(-.95)-1.75,0,(mi(-.95)+1.75)/2,0,{seg:4});const _=new N(0,1.75,0);for(const R of[-.6,.6,Math.PI-.5,Math.PI+.5]){const M=new N(Math.cos(R)*.46,1.05,Math.sin(R)*.46).clone().sub(_),I=new xt(new Ti(.01,.01,M.length(),4),At.coir);I.position.copy(_).addScaledVector(M,.5),I.quaternion.setFromUnitVectors(new N(0,1,0),M.normalize()),y.add(I)}const L=new xt(new pr(.5,.025,6,32),At.macrame);L.position.set(0,.55+.5,0),L.rotation.x=Math.PI/2,y.add(L);const w=new xt(new ri(.5,20,12,0,Math.PI*2,Math.PI*.5,Math.PI*.42),At.macrameNet);w.position.y=.55+.42,w.castShadow=!0,y.add(w);const C=new xt(new ri(.5,20,10,-Math.PI/2,Math.PI,.15*Math.PI,.38*Math.PI),At.macrameNet);C.position.y=.55+.42,C.castShadow=!0,y.add(C),$t(y,At.cushion,.36,.36,.1,0,.55+.07,0,{seg:20});for(let R=0;R<14;R++){const E=R/14*Math.PI*2;$t(y,At.macrame,.012,.004,.1,Math.cos(E)*.3,.55-.02,Math.sin(E)*.3,{seg:4,shadow:!1})}Jt(-.95-.45,9.3-.45,-.95+.45,9.3+.45)}{const v=le+.58;U(t,At.tableTop,.38,.05,13.4-10.3,v,1.05,(10.3+13.4)/2);for(const y of[10.3+.15,(10.3+13.4)/2,13.4-.15])U(t,T.black,.04,1.03,.04,v-.05,.52,y),U(t,T.black,.3,.03,.03,v,.98,y,{shadow:!1});Jt(v-.2,10.3,v+.2,13.4);for(const y of[10.8,11.6,12.4,13.1])fx(t,v+.5,y,0);for(const y of[10.8,11.6,12.4,13.1])Jt(v+.33,y-.18,v+.67,y+.18)}{const v=Oi+.1,y=le+.45,_=.9,L=Math.hypot(-.3-y,v-_),w=Math.atan2(v-_,-.3-y);U(t,At.curb,L,.42,.3,(-.3+y)/2,(v+_)/2,.06+.1,{rz:w});const C=new yu([new _t(y,0),new _t(-.3,0),new _t(-.3,v),new _t(y,_)]),R=new xt(new Ll(C),be({color:"#cfccc4",roughness:.95,side:Ie}));R.position.z=.06-.04,R.receiveShadow=!0,t.add(R),U(t,At.curb,-.3-y,.3,.3,(-.3+y)/2,.15,.06+.1),U(t,At.plaster,.35,Oi,.2,-.17,Oi/2,.06+.05);const E=-2.75,M=-.4,I=2.55,V=ux.clone();V.needsUpdate=!0,V.repeat.set((M-E)/.1,I/.1);const G=be({color:"#2a2a2a",alphaMap:V,alphaTest:.5,side:Ie,roughness:.8}),Z=new xt(new Ae(M-E,I),G);Z.position.set((E+M)/2,I/2,.06+.02),t.add(Z);for(const q of[E,(E+M)/2,M])U(t,T.black,.03,I,.03,q,I/2,.06+.03,{shadow:!1});U(t,T.black,M-E,.03,.03,(E+M)/2,I,.06+.03,{shadow:!1});const Q=q=>_+(q-y)*(v-_)/(-.3-y);for(let q=0;q<5;q++){const tt=.45+q*.42;for(let O=E+.2;O<M-.1;O+=.36)tt>Q(O)-.35||(U(t,T.blackMatte,.2,.13,.1,O,tt,.06+.08,{shadow:!1}),So(t,O,tt+.06,.06+.1,6,.32).rotation.x=.25)}Ms(t,-.75,.45,"tree",{r:.17,h:.3}),Ms(t,-1.15,.4,"bush")}{const m=We-.12;U(t,At.plaster,-le,1.15,.24,le/2,.575,m),U(t,At.plaster,-le,.5,.6,le/2,1.4,We+.3);for(let w=le+.4;w<-.2;w+=.7)$t(t,T.woodDark,.03,.04,.9,w,2.05,We+.3,{seg:6}),Fu(t,w,2.45+Vt()*.3,We+.3,{n:9,len:.9,mat:At.palm,droop:.45,w:.22});U(t,T.whiteGloss,.4,.14,.45,-.42,.86,23.3),$t(t,T.chrome,.012,.012,.14,-.27,1,23.3,{seg:6,shadow:!1}),Jt(-.64,23.05,-.2,23.55);{const w=Xi(t,-.42,2.25,24.2,"AC outdoor unit");U(w,At.acGrey,.32,.55,.78,0,0,0);const C=new xt(new In(.2,18),T.metalDark);C.rotation.y=-Math.PI/2,C.position.set(-.161,0,-.1),w.add(C),U(w,T.metalDark,.3,.03,.3,.05,-.29,0,{shadow:!1})}const p=-2.45,v=-.6,y=m-.42;U(t,T.white,v-p,.86,.58,(p+v)/2,.43,y),U(t,At.counterTop,v-p+.04,.04,.62,(p+v)/2,.88,y);for(let w=p+.45;w<v;w+=.45)U(t,T.metalDark,.008,.78,.005,w,.43,y-.292,{shadow:!1});U(t,T.blackMatte,.4,.5,.02,-1.75,.45,y-.29,{shadow:!1});for(let w=0;w<6;w++)U(t,[T.bottleTeal,T.red,T.cream][w%3],.04,.2+Vt()*.06,.15,-1.9+w*.055,.35,y-.2,{shadow:!1});for(const[w,C]of[[-2.25,T.chrome],[-1.98,T.black],[-1.2,T.chrome]])$t(t,C,.07,.085,.2,w,1,y,{seg:14}),U(t,T.black,.03,.12,.03,w+.09,1,y,{shadow:!1});U(t,T.blackMatte,.18,.08,.18,-1.55,.94,y,{shadow:!1}),Jt(p,y-.3,v,We);const _=-1.75,L=22.95;U(t,At.tableTop,.72,.05,1.4,_,.95,L);for(const w of[-1,1])U(t,T.black,.04,.95,.04,_+w*.25,.48,L-.5,{rz:w*.18}),U(t,T.black,.04,.95,.04,_+w*.25,.48,L+.5,{rz:w*.18});U(t,T.black,.04,.04,1,_,.3,L,{shadow:!1}),Jt(_-.36,L-.7,_+.36,L+.7);for(const[w,C]of[[_-.6,L-.35],[_-.6,L+.35],[_+.6,L-.3],[_+.6,L+.4],[_+.1,L+.95]])dx(t,w,C);{const w=Xi(t,_-.05,0,L-.95,"Rattan stool");U(w,At.rattan,.34,.5,.34,0,.25,0),U(w,At.rattan,.4,.05,.4,0,.52,0),Jt(_-.25,L-1.15,_+.15,L-.75)}for(const[w,C]of[[le+.75,We-1.15],[le+.75,We-.8],[le+1.05,We-.95]])$t(t,At.water,.14,.14,.46,w,.23,C,{seg:16,shadow:!1}).renderOrder=2,$t(t,At.capBlue,.04,.04,.06,w,.49,C,{seg:10,shadow:!1});Jt(le+.55,We-1.35,le+1.25,We-.6),Ms(t,-.4,22.75,"bush")}for(let m=0;m<40;m++){const p=U(t,Vt()>.5?At.leafPale:T.woodDark,.04,.003,.025,le+.5+Vt()*2.8,.004,1+Vt()*(We-2),{shadow:!1,ry:Vt()*3});p.receiveShadow=!1}}const xh=40;function mx(i){tr(i,0,0,0,4.9,Pt),tr(i,0,6.5,0,ve,Pt),U(i,T.black,.12,.08,1.6,0,2.44,5.7),U(i,T.chrome,.1,.015,1.6,0,.008,5.7,{shadow:!1});const t=new xt(new Ae(1.6,Pt-2.48),T.glass);t.position.set(0,(2.48+Pt)/2,5.7),t.rotation.y=Math.PI/2,t.renderOrder=2,i.add(t),Te(i,0,0,0,ve,{h:Rt-Pt,y0:Pt,collide:!1});const[e,n]=dl;tr(i,0,ve,0,e,2.8),tr(i,0,n,0,xe,2.8),U(i,T.black,.12,.08,n-e,0,2.44,(e+n)/2),U(i,T.chrome,.1,.015,n-e,0,.008,(e+n)/2,{shadow:!1});const s=new xt(new Ae(n-e,2.8-2.48),T.glass);s.position.set(0,(2.48+2.8)/2,(e+n)/2),s.rotation.y=Math.PI/2,s.renderOrder=2,i.add(s),U(i,T.wall,.12,Rt-2.8,xe-ve,.02,2.8+(Rt-2.8)/2,(ve+xe)/2,{shadow:!1});for(let o=2.95;o<Rt-.05;o+=.14)U(i,T.wallWarm,.02,.03,fh-ve,.09,o,(ve+fh)/2,{shadow:!1});Te(i,-.1,xe,-.1,Ze+.2,{h:Rt+.3,mat:T.wallWarm,t:.2}),tr(i,0,0,ye,0,Pt),Te(i,0,0,ye,0,{h:Rt-Pt,y0:Pt,collide:!1}),px(i);const r=20-le;U(i,T.wallWarm,r,xh,Ze+1.2,le+r/2,-xh/2-.01,(Ze-1)/2+.1,{shadow:!1});for(let o=1;o<12;o++)U(i,T.blackMatte,.05,.25,Ze+1.3,le-.01,-o*3.4,(Ze-1)/2+.1,{shadow:!1});ax(i)}const gx=new rn({color:"#a39b91",roughness:.55}),da=new rn({color:"#ece7dc",roughness:.6}),_x=new rn({color:"#e9e4d6",roughness:.7}),xx=new rn({color:"#6c6a66",roughness:.5,metalness:.3});function vx(i,t,e,n=2.45){$t(i,T.black,.004,.004,Rt-n,t,(Rt+n)/2,e,{seg:3,shadow:!1}),$t(i,T.black,.045,.045,.2,t,n-.1,e,{seg:14});const s=new xt(new In(.035,12),T.spotGlow);s.rotation.x=Math.PI/2,s.position.set(t,n-.201,e),i.add(s)}function Mx(i){const t=new ne;t.userData.label="Meeting room",i.add(t),Ge(t,T.floorDark,0,ee,ln,xe,0),Ge(t,T.ceilingBlack,0,ee,ln,xe,Rt,{down:!0}),Te(t,ln+.1,ee,ln+.1,xe+.1,{h:Rt,mat:T.white});const[e,n]=K_;Te(t,0,xe+.1,e,xe+.1,{h:Rt,mat:T.white}),Te(t,n,xe+.1,ln+.2,xe+.1,{h:Rt,mat:T.white}),Te(t,e,xe+.1,n,xe+.1,{h:Rt-2.12,y0:2.12,mat:T.white,collide:!1}),$t(t,T.ceilingBlack,.16,.16,xe-ee,ln-.35,Rt-.3,(ee+xe)/2,{rx:Math.PI/2,seg:12,shadow:!1}),U(t,T.ceilingBlack,ln,.35,.3,ln/2,Rt-.18,ee+.25,{shadow:!1});for(const[c,h,u,f]of[[0,xe-.01,ln,xe-.01],[ln-.01,ee,ln-.01,xe]])U(t,T.concrete,Math.max(.02,u-c),.08,Math.max(.02,f-h),(c+u)/2,.04,(h+f)/2,{shadow:!1});const s=1.9,r=19.85,o=22,a=1,l=(r+o)/2;{const c=new ne;c.userData.label="Meeting table",t.add(c),U(c,gx,a,.04,o-r,s,.75,l),U(c,da,a+.01,.025,o-r+.01,s,.72,l,{shadow:!1});for(const h of[r+.15,o-.15])for(const u of[-1,1])U(c,T.black,.05,.72,.05,s+u*(a/2-.08),.36,h);for(const h of[r+.5,l-.1,o-.6]){const u=new xt(new In(.04,14),T.black);u.rotation.x=-Math.PI/2,u.position.set(s+.1,.772,h),c.add(u)}U(c,T.black,.05,.02,.2,s-.15,.78,l-.4,{shadow:!1,ry:.4}),Jt(s-a/2,r,s+a/2,o)}for(const c of[r+.4,l,o-.4])Cs(t,s-a/2-.32,c,Math.PI/2),Cs(t,s+a/2+.32,c,-Math.PI/2);Cs(t,s,o+.35,Math.PI);{const c=new ne;c.userData.label="TV",c.position.set(1.75,0,19.25),t.add(c);for(let h=0;h<4;h++)U(c,T.black,.04,.03,.34,Math.sin(h*Math.PI/2)*.15,.04,Math.cos(h*Math.PI/2)*.15,{ry:h*Math.PI/2});$t(c,T.black,.025,.025,1.5,0,.78,0,{seg:8}),U(c,T.black,1.1,.64,.06,0,1.55,.03),U(c,T.screenOff,1.06,.6,.005,0,1.55,.062,{shadow:!1}),Jt(1.55,19.05,1.95,19.45)}{const c=Lu(t,s,l,1.8,Math.PI/2,2.35,Rt);c.children[0].material=xx,c.children[0].scale.set(1.8,.09,.09)}for(const[c,h]of[[.8,19.6],[.8,21.6],[3,19.6],[3,21.6]])vx(t,c,h);Fl(t,ln-.02,2.7,20.6,-Math.PI/2);{const c=new ne;c.userData.label="Door frame",t.add(c);const h=xe+.1,u=n-e;for(const g of[e-.02,n+.02])U(c,da,.04,2.14,.22,g,1.07,h);U(c,da,u+.08,.04,.22,(e+n)/2,2.14,h);const f=new ne;f.position.set(n,0,h);const d=u-.02;U(f,_x,d,2.08,.04,-d/2,1.05,0);for(const g of[-1,1]){U(f,T.chrome,.025,.32,.03,-d+.1,1.05,g*.06);for(const x of[.92,1.18])U(f,T.chrome,.02,.02,.05,-d+.1,x,g*.035,{shadow:!1})}Bl.push({leaf:f,closed:0,open:1.45,name:"game room door",handle:[-d+.1,1.3,.1],x:(e+n)/2,z:h,block:{minX:e,maxX:n,minZ:h-.1,maxZ:h+.1}})}{const c=new ne;c.userData.label="Shelf",t.add(c);const h=.38,u=xe-.3,f=.5,d=.38,g=2.3;for(const x of[-1,1])U(c,T.white,.02,g,d,h+x*f/2,g/2,u);U(c,T.white,f,g,.02,h,g/2,u+d/2);for(const x of[.02,.55,.95,1.45,1.9,g])U(c,T.white,f,.02,d,h,x,u);U(c,T.white,f-.02,.52,.02,h,.28,u-d/2,{shadow:!1}),U(c,T.woodDark,.3,.16,.22,h,1.04,u),U(c,T.black,.26,.02,.16,h,1.47,u,{shadow:!1}),Jt(h-f/2,u-d/2,h+f/2,u+d/2)}{const c=new ne;c.userData.label="Cabinet",t.add(c),U(c,T.woodDark,.9,.45,.4,.95,.225,ee+.32),U(c,T.white,.42,.2,.01,.75,.32,ee+.52,{shadow:!1}),Jt(.5,ee+.1,1.4,ee+.52)}}const gi={x:.088,y:1.4,z:25.35,w:1.68,h:.94},yn=i=>new rn(i),Pe={navy:yn({color:"#1e2740",roughness:.9}),ledPurple:yn({color:"#b46cff",emissive:"#9b4dff",emissiveIntensity:2.2}),ledCyan:yn({color:"#5fe3ff",emissive:"#29c8ff",emissiveIntensity:1.8}),felt:yn({color:"#1f6b46",roughness:.95}),railWood:yn({color:"#5a3522",roughness:.5}),ps5White:yn({color:"#f4f4f2",roughness:.35}),rug:yn({color:"#3a3f4b",roughness:1}),cue:yn({color:"#c79a62",roughness:.5}),beanRed:yn({color:"#a8322d",roughness:.95}),beanBlue:yn({color:"#2d4f8a",roughness:.95})},yx=["#f2c21b","#1f4fb4","#c8281f","#5b2a86","#ef7a1a","#1d7a3c","#7a1f1f","#111111"],vh=yx.map(i=>yn({color:i,roughness:.2,metalness:.05})),Mh=(()=>{const i=document.createElement("canvas");i.width=512,i.height=160;const t=i.getContext("2d");t.font='700 110px "Avenir Next", "Helvetica Neue", Arial, sans-serif',t.textAlign="center",t.textBaseline="middle",t.shadowColor="#ff4fd8",t.shadowBlur=24,t.fillStyle="#ffd6f6",t.fillText("GAME ON",256,84);const e=new oi(i);return e.colorSpace=De,e})();Pe.neon=yn({map:Mh,emissive:"#ffffff",emissiveMap:Mh,emissiveIntensity:1.6,transparent:!0,alphaTest:.05});function jn(i,t,e=0,n=0,s=0){const r=new ne;return r.userData.label=t,r.position.set(e,0,n),r.rotation.y=s,i.add(r),r}function yh(i,t,e,n,s,r){const o=jn(i,"Controller",t,n,s);U(o,r,.16,.035,.07,0,e,0,{shadow:!1});for(const a of[-1,1])U(o,r,.05,.035,.06,a*.065,e,.04,{shadow:!1,ry:a*.4});U(o,T.black,.11,.004,.03,0,e+.019,-.005,{shadow:!1})}function Sx(i){const t=jn(i,"Game room"),e=xe+.2;Ge(t,T.floorDark,0,xe,Rn,Ze,0),Ge(t,T.ceilingBlack,0,xe,Rn,Ze,Rt,{down:!0}),Te(t,ln+.2,xe+.1,Rn+.2,xe+.1,{h:Rt,mat:T.white}),Te(t,Rn+.1,xe,Rn+.1,Ze+.2,{h:Rt,mat:T.white}),Te(t,0,Ze+.1,Rn+.2,Ze+.1,{h:Rt,mat:T.white}),U(t,T.ceilingBlack,Rn,.4,.3,Rn/2,Rt-.2,(e+Ze)/2,{shadow:!1});const n=gi.z;U(t,Pe.navy,.02,Rt,Ze-e-.4,.01,Rt/2,(e+Ze)/2),U(t,Pe.ledPurple,.02,.025,Ze-e-.6,.03,Rt-.25,(e+Ze)/2,{shadow:!1});{const l=jn(t,"TV");U(l,T.black,.05,.98,1.72,.06,1.4,n),U(l,T.screenDark,.005,.94,1.68,.087,1.4,n,{shadow:!1}),U(l,Pe.ledCyan,.01,1.06,1.8,.03,1.4,n,{shadow:!1})}{const l=jn(t,"TV console");U(l,T.white,.42,.42,1.9,.24,.21,n);for(const c of[n-.48,n+.48])U(l,T.metalDark,.005,.32,.9,.452,.21,c,{shadow:!1});Jt(0,n-.95,.45,n+.95)}{const l=jn(t,"PS5",.25,n+.65);U(l,T.black,.06,.38,.22,0,.62,0);for(const c of[-1,1])U(l,Pe.ps5White,.02,.4,.26,c*.04,.63,0,{rz:c*.04});U(l,T.black,.1,.02,.12,0,.43,0,{shadow:!1})}U(t,T.blackMatte,.18,.26,.18,.25,.55,n-.75),U(t,Pe.rug,2.2,.01,2.4,1.75,.006,n,{shadow:!1}),sn(Ul(t,2.95,n,-Math.PI/2,3),-.05);{const l=jn(t,"Coffee table");U(l,T.woodDark,.55,.04,1,1.75,.4,n);for(const[c,h]of[[-1,-1],[1,-1],[1,1],[-1,1]])U(l,T.black,.03,.38,.03,1.75+c*.23,.19,n+h*.45);Jt(1.45,n-.52,2.05,n+.52)}yh(t,1.72,.44,n-.22,.3,Pe.ps5White),yh(t,1.8,.44,n+.2,-.2,Pe.ps5White),U(t,T.black,.12,.02,.05,1.68,.43,n+.38,{shadow:!1,ry:.5});for(const[l,c]of[[23.8,Pe.beanRed],[26.65,Pe.beanBlue]])sn(Pu(t,1.35,l,c),-.15);const s=5,r=25,o=2.3,a=1.25;{const l=jn(t,"Pool table");U(l,Pe.railWood,a+.2,.2,o+.2,s,.7,r),U(l,Pe.felt,a,.02,o,s,.81,r,{shadow:!1});for(const d of[-1,1])U(l,Pe.felt,.06,.05,o,s+d*(a/2-.03),.835,r,{shadow:!1}),U(l,Pe.felt,a,.05,.06,s,.835,r+d*(o/2-.03),{shadow:!1}),U(l,Pe.railWood,.1,.06,o+.2,s+d*(a/2+.05),.83,r),U(l,Pe.railWood,a+.2,.06,.1,s,.83,r+d*(o/2+.05));for(const[d,g]of[[-1,-1],[1,-1],[1,1],[-1,1]])U(l,Pe.railWood,.14,.62,.14,s+d*(a/2-.05),.31,r+g*(o/2-.1));for(const d of[-1,1])for(const g of[-1,0,1]){const x=new xt(new In(.055,14),T.black);x.rotation.x=-Math.PI/2,x.position.set(s+d*(a/2-.04),.865,r+g*(o/2-.04)),l.add(x)}const c=.028,h=new ri(c,14,10);let u=0;for(let d=0;d<5;d++)for(let g=0;g<=d;g++){const x=new xt(h,vh[u++%vh.length]);x.position.set(s+(g-d/2)*c*2.05,.82+c,r+.45+d*c*1.8),x.castShadow=!0,l.add(x)}const f=new xt(h,Pe.ps5White);f.position.set(s+.05,.82+c,r-.6),f.castShadow=!0,l.add(f),$t(l,Pe.cue,.006,.012,1.45,s-.35,.9,r-.2,{rx:Math.PI/2-.03,seg:8}),Jt(s-a/2-.1,r-o/2-.1,s+a/2+.1,r+o/2+.1)}{const l=jn(t,"Pool light");U(l,T.black,.32,.12,1.7,s,1.85,r);for(const c of[-.55,0,.55]){const h=new xt(new Ae(.24,.4),T.lightStrip);h.rotation.x=Math.PI/2,h.position.set(s,1.789,r+c),l.add(h)}for(const c of[-.7,.7])$t(l,T.black,.004,.004,Rt-1.91,s,(Rt+1.91)/2,r+c,{seg:3,shadow:!1})}{const l=jn(t,"Cue rack");U(l,T.woodDark,.05,.08,.7,Rn-.03,1.55,23.6),U(l,T.woodDark,.05,.06,.7,Rn-.03,.1,23.6);for(let c=0;c<4;c++)$t(l,Pe.cue,.007,.013,1.5,Rn-.07,.8,23.35+c*.16,{seg:8})}{const l=new xt(new Ae(1.5,.47),Pe.neon);l.position.set(4.7,2.45,Ze-.01),l.rotation.y=Math.PI,l.userData.label="Neon sign",t.add(l)}for(const[l,c]of[[1.8,23.6],[1.8,26.4]]){$t(t,T.black,.05,.05,.12,l,Rt-.06,c,{seg:10,shadow:!1});const h=new xt(new In(.035,10),T.spotGlow);h.rotation.x=Math.PI/2,h.position.set(l,Rt-.121,c),t.add(h)}}const Sh={x:9.4,z:8,yaw:Math.PI/2};function Ex(i){Ge(i,T.floorBeige,0,0,ye,ve,0),Ge(i,T.floorBeige,ye,cn,te,ve,0),Ge(i,T.floorBeige,Le-xi,ve,te,ue,0),Ge(i,T.floorDark,0,ve,Le-xi,ue,0),Ge(i,T.floorDark,0,ue,He,ee,0),j_(i),J_(i),tx(i),ox(i),mx(i),Mx(i),Sx(i)}function Ou(i,t){return i>te?"Building Hall":i<0?"Terrace":t>xe?"Game Room":t>ee?i<ln?"Meeting Room":"Workspace":t<Mi&&i<ye?"Corner Cabin":t<Re&&t>cn&&i>ye&&i<ei?i<7?"Cabin 2":"Cabin 1":i>=Le&&t<ue?"Reception":t<ve?i<ye?"Window Lounge":"Cabin Corridor":"Workspace"}const ys=new Qe(0,0,0,"YXZ"),Ss=new N,bx={type:"change"},wx={type:"lock"},Tx={type:"unlock"},Eh=Math.PI/2;class Ax extends I_{constructor(t,e=null){super(t,e),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Cx.bind(this),this._onPointerlockChange=Rx.bind(this),this._onPointerlockError=Px.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(t){return t.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(t){if(this.enabled===!1)return;const e=this.object;Ss.setFromMatrixColumn(e.matrix,0),Ss.crossVectors(e.up,Ss),e.position.addScaledVector(Ss,t)}moveRight(t){if(this.enabled===!1)return;const e=this.object;Ss.setFromMatrixColumn(e.matrix,0),e.position.addScaledVector(Ss,t)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Cx(i){if(this.enabled===!1||this.isLocked===!1)return;const t=i.movementX||i.mozMovementX||i.webkitMovementX||0,e=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;ys.setFromQuaternion(n.quaternion),ys.y-=t*.002*this.pointerSpeed,ys.x-=e*.002*this.pointerSpeed,ys.x=Math.max(Eh-this.maxPolarAngle,Math.min(Eh-this.minPolarAngle,ys.x)),n.quaternion.setFromEuler(ys),this.dispatchEvent(bx)}function Rx(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(wx),this.isLocked=!0):(this.dispatchEvent(Tx),this.isLocked=!1)}function Px(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const bh=1.65,Lx=.25,wh=3,Dx=6,Ix=18,Ux=5.2;function Nx(i,t,{spawn:e,yaw:n=0}){const s=new Ax(i,t),r={},o={x:0,y:0,run:!1},a=new N(e.x,0,e.z),l=new N;let c=0,h=0,u=0,f=0;i.position.set(a.x,bh,a.z),i.rotation.set(0,n,0,"YXZ");const d={dragMode:!1,paused:!1};let g=!1,x=0,m=0;const p=new Qe(0,0,0,"YXZ");t.addEventListener("mousedown",R=>{d.dragMode&&(g=!0,x=R.clientX,m=R.clientY)}),addEventListener("mouseup",()=>{g=!1}),addEventListener("mousemove",R=>{!d.dragMode||!g||d.paused||(p.setFromQuaternion(i.quaternion),p.y-=(R.clientX-x)*.004,p.x=Math.max(-1.45,Math.min(1.45,p.x-(R.clientY-m)*.004)),i.quaternion.setFromEuler(p),x=R.clientX,m=R.clientY)});const v=()=>!d.paused&&(s.isLocked||d.dragMode);addEventListener("keydown",R=>{r[R.code]=!0,R.code==="Space"&&y()});function y(){v()&&h<=.001&&(c=Ux)}addEventListener("keyup",R=>{r[R.code]=!1}),addEventListener("blur",()=>{for(const R in r)r[R]=!1});const _=new N,L=new N,w=new N;function C(R){R=Math.min(R,.05),w.set(0,0,0),v()&&(i.getWorldDirection(_),_.y=0,_.normalize(),L.crossVectors(_,i.up).normalize(),(r.KeyW||r.ArrowUp)&&w.add(_),(r.KeyS||r.ArrowDown)&&w.sub(_),(r.KeyD||r.ArrowRight)&&w.add(L),(r.KeyA||r.ArrowLeft)&&w.sub(L),(o.x||o.y)&&w.addScaledVector(_,o.y).addScaledVector(L,o.x));const E=r.ShiftLeft||r.ShiftRight||o.run;if(w.lengthSq()>0){const V=Math.min(1,w.length());w.normalize().multiplyScalar((E?Dx:wh)*(o.x||o.y?Math.max(.5,V):1))}const M=1-Math.exp(-(h>0?3:12)*R);l.x+=(w.x-l.x)*M,l.z+=(w.z-l.z)*M,$_(a,l.x*R,l.z*R,Lx),c-=Ix*R,h=Math.max(0,h+c*R),h===0&&(c=Math.max(c,0));const I=Math.hypot(l.x,l.z);h===0&&I>.3?(u+=R*I*2.6,f=Math.sin(u)*.035*Math.min(1,I/wh)):f*=.85,i.position.set(a.x,bh+h+f,a.z)}return{controls:s,update:C,pos:a,state:d,touch:o,jump:y}}function Fx(i){var s;i.updateMatrixWorld(!0);const t=new Map,e=[];i.traverse(r=>{r.isMesh&&e.push(r)});const n=r=>{const o=[];for(let a=r;a&&a!==i;a=a.parent)a.userData.label&&o.at(-1)!==a.userData.label&&o.push(a.userData.label);return o.join(" · ")};for(const r of e){const o=`${r.material.uuid}|${r.castShadow}|${r.renderOrder}`;let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(const h of Object.keys(a.attributes))["position","normal","uv"].includes(h)||a.deleteAttribute(h);a.attributes.uv||a.setAttribute("uv",new fe(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(r.matrixWorld),t.has(o)||t.set(o,{material:r.material,cast:r.castShadow,order:r.renderOrder,geos:[],tris:0,labels:[]});const l=t.get(o),c=n(r);c&&((s=l.labels.at(-1))==null?void 0:s[1])!==c?l.labels.push([l.tris,c]):!c&&l.labels.length&&l.labels.at(-1)[1]!==""&&l.labels.push([l.tris,""]),l.geos.push(a),l.tris+=a.attributes.position.count/3}for(;i.children.length;)i.remove(i.children[0]);for(const r of t.values()){const o=Iu(r.geos,!1);o.computeBoundingSphere();const a=new xt(o,r.material);a.castShadow=r.cast,a.receiveShadow=!0,a.renderOrder=r.order,a.userData.labels=r.labels,i.add(a)}return t.size}function Ox(i){const t=i.object.userData.labels;if(t){let e=0,n=t.length-1,s="";for(;e<=n;){const r=e+n>>1;t[r][0]<=i.faceIndex?(s=t[r][1],e=r+1):n=r-1}return s}for(let e=i.object;e;e=e.parent)if(e.userData.label)return e.userData.label;return""}const pa="/api/suggestions",ma="pixbit-suggestions-v2",Bu={W:"Window table",L:"Long table",E:"East-wall desk",LOCK:"Lockers"},Bx={W:[1.4,1.2],L:[2.8,1.2],E:[1.3,.8],LOCK:[.55,1.25]},zx=["Corner cabin","Cabin 1","Cabin 2","Lounge","Corridor","Reception","Open workspace","Back wall","East wall","Windows",...fo.map(i=>i.id==="LOCK"?"Lockers":`${Bu[i.id[0]]} ${i.id}`)],dn="#ecc828",Th="#3fbf6f",kx=35e6;function Hx({scene:i,camera:t,player:e,world:n,zoneAt:s,renderer:r}){let o=[],a=!1,l=null,c=[],h=[],u=!1,f=!1,d=null;async function g(){try{const D=await fetch(pa);if(!D.ok)throw new Error(D.status);o=await D.json()}catch{a=!0;try{o=JSON.parse(localStorage.getItem(ma))||[]}catch{o=[]}}ut()}async function x(D,X,lt){if(a){D.n=D.n??o.reduce((ot,rt)=>Math.max(ot,rt.n||0),0)+1,D.created=D.created??Date.now(),D.files=[...(D.files||[]).filter(ot=>!lt.includes(ot.name)),...X.map(ot=>({name:ot.name,type:ot.type,path:ot.data}))];const $=o.findIndex(ot=>ot.id===D.id);$>=0?o[$]=D:o.push(D);try{localStorage.setItem(ma,JSON.stringify(o))}catch{throw new Error("browser storage is full (start the dev server to save files to the project)")}return D}const P=await fetch(pa,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...D,newFiles:X,removeFiles:lt})}),et=await P.json().catch(()=>({}));if(!P.ok)throw new Error(et.error||`server said ${P.status}`);const H=o.findIndex($=>$.id===et.id);return H>=0?o[H]=et:o.push(et),et}async function m(D){if(a||await fetch(`${pa}/${encodeURIComponent(D)}`,{method:"DELETE"}),o=o.filter(X=>X.id!==D),a)try{localStorage.setItem(ma,JSON.stringify(o))}catch{}}function p(D,X){let lt=null,P=.9;const et=s(D,X);for(const H of fo){if(s(H.x,H.z)!==et)continue;const $=H.id==="LOCK"?"LOCK":H.id[0];let[ot,rt]=Bx[$]||[1,1];(H.rot||0)%180&&([ot,rt]=[rt,ot]);const Ft=Math.hypot(Math.max(0,Math.abs(D-H.x)-ot/2),Math.max(0,Math.abs(X-H.z)-rt/2));Ft<P&&(P=Ft,lt=H.id==="LOCK"?"Lockers":`${Bu[$]} ${H.id}`)}return lt}const v=D=>Math.round(D*100)/100,y=D=>/^image\/(jpeg|png|gif|webp|avif|svg\+xml|bmp)$/.test(D.type),_=D=>D.src||D.path,L=new ne;L.name="suggestion-marks",i.add(L);const w=new ri(.07,16,12),C=new Ti(.008,.008,1,6),R=new bi({color:"#222"}),E=new N(0,1,0),M={},I=(D,X=1)=>M[D+X]||(M[D+X]=new bi({color:D,transparent:X<1,opacity:X,depthWrite:X===1,side:Ie}));function V(D,X){const lt=document.createElement("canvas");lt.width=lt.height=64;const P=lt.getContext("2d");P.fillStyle="#111",P.beginPath(),P.arc(32,32,28,0,Math.PI*2),P.fill(),P.strokeStyle=X,P.lineWidth=5,P.stroke(),P.fillStyle="#fff",P.font="bold 28px system-ui, sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillText(String(D),32,34);const et=new oi(lt);et.colorSpace=De;const H=new mu(new Al({map:et,depthTest:!1,transparent:!0}));return H.scale.set(.22,.22,1),H.renderOrder=10,H}function G({x0:D,z0:X,x1:lt,z1:P},et,H){const $=Math.abs(lt-D),ot=Math.abs(P-X),rt=new xt(new Ae($,ot),I(et,.18));rt.rotation.x=-Math.PI/2,rt.position.set((D+lt)/2,.02,(X+P)/2),rt.renderOrder=3;const Ft=[[D,X],[lt,X],[lt,P],[D,P]].map(([ze,ae])=>new N(ze,.025,ae)),we=new Yg(new Ve().setFromPoints(Ft),new gu({color:et}));H.add(rt,we)}function Z(D,X,lt,P,et,H){const $=new xt(C,R);$.scale.y=P,$.quaternion.setFromUnitVectors(E,lt),$.position.copy(X).addScaledVector(lt,P/2);const ot=new xt(w,I(et));ot.position.copy(X).addScaledVector(lt,P);const rt=V(H,et);rt.position.copy(ot.position).add(new N(0,.18,0)),D.add($,ot,rt)}function Q(){for(const D of[...L.children])L.remove(D),D.traverse(X=>{var lt,P,et;(P=(lt=X.material)==null?void 0:lt.map)==null||P.dispose(),(X.isLine||((et=X.geometry)==null?void 0:et.type)==="PlaneGeometry")&&X.geometry.dispose()});for(const D of o){if(D.status==="done")continue;const X=new ne;X.userData.sid=D.id;const lt=dn;D.area?(G(D.area,lt,X),Z(X,new N((D.area.x0+D.area.x1)/2,0,(D.area.z0+D.area.z1)/2),E,1.1,lt,D.n)):Z(X,new N(...D.point),new N(...D.normal||[0,1,0]).normalize(),.28,lt,D.n),L.add(X)}}const q=new ne;i.add(q);function tt(){for(const D of[...q.children])q.remove(D)}const O=document.createElement("style");O.textContent=`
  .sg-modal { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,.5); z-index:20; padding:16px; }
  .sg-hidden { display:none !important; }
  .sg-card { width:min(520px,100%); max-height:100%; overflow:auto; background:#1b1b1b; color:#eee; border:1px solid ${dn}; border-radius:12px; padding:18px 20px; font-size:14px; box-sizing:border-box; }
  .sg-card h2 { margin:0 0 6px; font-size:18px; color:#fff; }
  .sg-card label.f { display:block; font-size:12px; color:#aaa; margin:10px 0 4px; }
  .sg-card input[type=text], .sg-card textarea { width:100%; box-sizing:border-box; background:#111; color:#fff; border:1px solid #444; border-radius:8px; padding:8px 10px; font:inherit; }
  .sg-card textarea { min-height:110px; resize:vertical; }
  .sg-card input:focus, .sg-card textarea:focus { outline:none; border-color:${dn}; }
  .sg-meta { color:#999; font-size:12px; margin-top:4px; }
  .sg-drop { margin-top:4px; border:1.5px dashed #555; border-radius:8px; padding:12px; text-align:center; color:#aaa; cursor:pointer; }
  .sg-drop.over, .sg-drop:focus { border-color:${dn}; color:${dn}; outline:none; }
  .sg-files { display:grid; grid-template-columns:repeat(auto-fill,minmax(110px,1fr)); gap:8px; margin-top:8px; }
  .sg-file { position:relative; background:#111; border:1px solid #333; border-radius:8px; overflow:hidden; font-size:12px; }
  .sg-file img { width:100%; height:80px; object-fit:cover; display:block; }
  .sg-file .doc { height:80px; display:flex; align-items:center; justify-content:center; color:${dn}; font-weight:700; font-size:16px; }
  .sg-file span { display:block; padding:4px 6px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .sg-file button { position:absolute; top:4px; right:4px; padding:1px 7px !important; }
  .sg-check { display:flex; align-items:center; gap:8px; margin-top:12px; }
  .sg-reply { margin-top:10px; background:#11261a; border:1px solid #2c5a3c; border-radius:8px; padding:8px 10px; white-space:pre-wrap; font-size:13px; }
  .sg-row { display:flex; gap:8px; margin-top:14px; align-items:center; flex-wrap:wrap; }
  .sg-row .sp { flex:1; }
  .sg-card button, .sg-list button { font:inherit; font-size:13px; padding:7px 12px; border-radius:7px; border:1px solid #555; background:#2a2a2a; color:#eee; cursor:pointer; }
  .sg-card button:hover, .sg-list button:hover { border-color:#999; }
  .sg-card button.pri { background:${dn}; color:#111; border-color:${dn}; font-weight:700; }
  .sg-card button.del { color:#ff8a7a; }
  .sg-err { color:#ff8a7a; font-size:13px; margin-top:8px; min-height:1em; }
  .sg-list { position:fixed; top:0; right:0; bottom:0; width:min(380px,100%); background:#161616; color:#eee; border-left:1px solid #333; z-index:15; display:flex; flex-direction:column; font-size:14px; }
  .sg-list header { display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid #333; gap:8px; }
  .sg-list header b { flex:1; font-size:16px; }
  .sg-items { overflow:auto; padding:8px 12px 16px; }
  .sg-item { display:flex; gap:10px; padding:12px 4px; border-bottom:1px solid #2a2a2a; }
  .sg-num { flex:none; width:26px; height:26px; border-radius:50%; background:#111; border:2px solid ${dn}; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; }
  .sg-num.done { border-color:${Th}; }
  .sg-body { flex:1; min-width:0; }
  .sg-body p { margin:0 0 6px; white-space:pre-wrap; word-break:break-word; }
  .sg-body small { color:#999; display:block; margin-bottom:6px; }
  .sg-badge { display:inline-block; font-size:11px; padding:1px 7px; border-radius:10px; background:#3a3315; color:${dn}; margin-right:6px; }
  .sg-badge.done { background:#16301f; color:${Th}; }
  .sg-thumbs { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:6px; }
  .sg-thumbs img { width:72px; height:54px; object-fit:cover; border-radius:5px; }
  .sg-thumbs a { font-size:12px; color:${dn}; }
  .sg-reply-l { font-size:12px; color:#9fd8b0; background:#11261a; border-radius:6px; padding:6px 8px; margin-bottom:6px; white-space:pre-wrap; }
  .sg-empty { color:#999; padding:16px 4px; line-height:1.6; }
  .sg-toast { position:fixed; left:50%; bottom:40px; transform:translateX(-50%); background:rgba(0,0,0,.85); color:#fff; padding:8px 16px; border-radius:6px; z-index:30; font-size:14px; pointer-events:none; opacity:0; transition:opacity .3s; max-width:90vw; text-align:center; }
  .sg-toast.show { opacity:1; }`,document.head.appendChild(O);const nt=document.createElement("div");nt.className="sg-modal sg-hidden",nt.innerHTML=`<div class="sg-card" role="dialog" aria-modal="true" aria-labelledby="sg-title">
    <h2 id="sg-title">New suggestion</h2>
    <label class="f" for="sg-section">Section</label>
    <input type="text" id="sg-section" list="sg-sections" placeholder="e.g. Long table L2, Reception, Cabin 1">
    <datalist id="sg-sections">${zx.map(D=>`<option value="${D}">`).join("")}</datalist>
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
  </div>`,document.body.appendChild(nt);const st=D=>nt.querySelector(D),Et=st("#sg-text"),kt=st("#sg-section"),qt=st(".sg-drop"),K=st("input[type=file]"),ct=st(".sg-files"),bt=st(".sg-err"),mt=st(".sg-meta"),Ot=st("#sg-done"),Ht=st(".sg-reply"),zt=document.createElement("div");zt.className="sg-list sg-hidden",zt.innerHTML='<header><b>Suggestions</b><button type="button" class="close">Close (L)</button></header><div class="sg-items"></div>',document.body.appendChild(zt);const re=zt.querySelector(".sg-items"),Xt=document.createElement("div");Xt.className="sg-toast",document.body.appendChild(Xt);let de;function F(D,X=2600){Xt.textContent=D,Xt.classList.add("show"),clearTimeout(de),de=setTimeout(()=>Xt.classList.remove("show"),X)}const yt=D=>D.area?`Area x ${v(D.area.x0)}–${v(D.area.x1)} m, z ${v(D.area.z0)}–${v(D.area.z1)} m`:`Point x ${D.point[0]}, z ${D.point[2]}`;function dt(){if(re.innerHTML="",!o.length){re.innerHTML='<div class="sg-empty">No suggestions yet.<br>Aim the dot at something and press <b>C</b>, or press <b>X</b> on two floor corners to mark an area.</div>';return}for(const D of[...o].sort((X,lt)=>X.n-lt.n)){const X=document.createElement("div");X.className="sg-item",X.innerHTML=`<div class="sg-num ${D.status==="done"?"done":""}">${D.n}</div><div class="sg-body"><small></small><p></p><div class="sg-thumbs"></div></div>`;const lt=X.querySelector("small");lt.innerHTML=`<span class="sg-badge ${D.status==="done"?"done":""}">${D.status==="done"?"done":"open"}</span>`,lt.append(D.section||D.zone||""),X.querySelector("p").textContent=D.text,D.reply&&X.querySelector("p").after(Object.assign(document.createElement("div"),{className:"sg-reply-l",textContent:`Claude: ${D.reply}`}));const P=X.querySelector(".sg-thumbs");for(const Ft of D.files||[])y(Ft)?P.append(Object.assign(document.createElement("img"),{src:_(Ft),alt:Ft.name,title:Ft.name})):P.append(Object.assign(document.createElement("a"),{href:_(Ft),textContent:Ft.name,target:"_blank",download:Ft.name}));const et=X.querySelector(".sg-body"),H=document.createElement("div");H.className="sg-row",H.style.marginTop="2px";const $=Object.assign(document.createElement("button"),{type:"button",textContent:"Go there"});$.onclick=()=>pt(D);const ot=Object.assign(document.createElement("button"),{type:"button",textContent:"Open"});ot.onclick=()=>{zt.classList.add("sg-hidden"),k(D)};const rt=Object.assign(document.createElement("button"),{type:"button",textContent:"Delete"});rt.style.color="#ff8a7a",it(rt,()=>j(D)),H.append($,ot,rt),et.appendChild(H),re.appendChild(X)}}function ut(){Q(),dt()}function at(){ct.innerHTML="",c.forEach((D,X)=>{const lt=document.createElement("div");lt.className="sg-file",y(D)?lt.append(Object.assign(document.createElement("img"),{src:_(D),alt:D.name})):lt.append(Object.assign(document.createElement("div"),{className:"doc",textContent:(D.name.split(".").pop()||"file").slice(0,5).toUpperCase()})),lt.append(Object.assign(document.createElement("span"),{textContent:D.name,title:D.name}));const P=Object.assign(document.createElement("button"),{type:"button",textContent:"×"});P.setAttribute("aria-label",`Remove ${D.name}`),P.onclick=()=>{D.data||h.push(D.name),c.splice(X,1),at()},lt.append(P),ct.append(lt)})}const Ut=D=>new Promise((X,lt)=>{const P=new FileReader;P.onload=()=>X(P.result),P.onerror=lt,P.readAsDataURL(D)});async function vt(D){bt.textContent="";for(const X of D){let lt=X.name||`pasted-${Date.now()}.png`,P=X.type||"application/octet-stream",et;if(/^image\/(jpeg|png|webp)$/.test(P)&&X.size>15e5)try{const $=await createImageBitmap(X),ot=Math.min(1,2e3/Math.max($.width,$.height)),rt=document.createElement("canvas");rt.width=Math.round($.width*ot),rt.height=Math.round($.height*ot),rt.getContext("2d").drawImage($,0,0,rt.width,rt.height),et=rt.toDataURL("image/jpeg",.85),P="image/jpeg",lt=lt.replace(/\.\w+$/,"")+".jpg"}catch{}if(et=et||await Ut(X),c.reduce(($,ot)=>{var rt;return $+(((rt=ot.data)==null?void 0:rt.length)||0)},0)+et.length>kx){bt.textContent=`${lt} is too big to add (keep new files under ~25 MB per save).`;continue}c.push({name:lt,type:P,data:et,src:et})}at()}qt.onclick=()=>K.click(),qt.onkeydown=D=>{(D.key==="Enter"||D.key===" ")&&(D.preventDefault(),K.click())},K.onchange=()=>{vt([...K.files]),K.value=""},qt.ondragover=D=>{D.preventDefault(),qt.classList.add("over")},qt.ondragleave=()=>qt.classList.remove("over"),qt.ondrop=D=>{D.preventDefault(),qt.classList.remove("over"),vt([...D.dataTransfer.files])},nt.addEventListener("paste",D=>{const X=[...D.clipboardData.files];X.length&&(D.preventDefault(),vt(X))}),Et.oninput=()=>{bt.textContent=""};const A=()=>!nt.classList.contains("sg-hidden");let S=()=>{};function k(D){l=D,c=(D.files||[]).map(X=>({...X})),h=[],st("#sg-title").textContent=D.id?`Suggestion ${D.n}`:D.area?"New suggestion for this area":"New suggestion",kt.value=D.section||[D.near,D.zone].filter(Boolean).join(" · "),mt.textContent=yt(D)+(D.folder?` · saved in suggestions/${D.folder}/`:""),Et.value=D.text||"",Ot.checked=D.status==="done",st(".sg-check").classList.toggle("sg-hidden",!D.id),Ht.textContent=D.reply?`Claude: ${D.reply}`:"",Ht.classList.toggle("sg-hidden",!D.reply),st(".del").classList.toggle("sg-hidden",!D.id),bt.textContent="",at(),u=!!document.pointerLockElement,nt.classList.remove("sg-hidden"),e.state.paused=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>Et.focus(),30)}function J(){if(nt.classList.add("sg-hidden"),l=null,c=[],h=[],tt(),e.state.paused=!1,u)try{const D=r.domElement.requestPointerLock();D!=null&&D.catch&&D.catch(()=>S())}catch{S()}}st(".cancel").onclick=J,st(".pri").onclick=async()=>{const D=Et.value.trim();if(!D){bt.textContent="Write what needs to change first.",Et.focus();return}const X={...l,text:D,section:kt.value.trim(),status:Ot.checked?"done":"open",updated:Date.now()};delete X.near,X.id||(X.id=`s${Date.now().toString(36)}`);const lt=c.filter(P=>P.data).map(({name:P,type:et,data:H})=>({name:P,type:et,data:H}));st(".pri").disabled=!0,st(".pri").textContent="Saving…";try{const P=await x(X,lt,h);ut(),F(a?`Suggestion ${P.n} saved in this browser`:`Suggestion ${P.n} saved to suggestions/${P.folder}/`),J()}catch(P){bt.textContent=`Could not save: ${P.message}`}finally{st(".pri").disabled=!1,st(".pri").textContent="Save"}};function it(D,X){let lt=0;D.onclick=async()=>{if(!lt){D.textContent="Click again to delete",D.style.borderColor="#ff8a7a",lt=setTimeout(()=>{lt=0,D.textContent="Delete",D.style.borderColor=""},4e3);return}clearTimeout(lt),lt=0,D.disabled=!0;try{await X()}finally{D.disabled=!1,D.textContent="Delete",D.style.borderColor=""}}}async function j(D){await m(D.id),ut(),F(`Suggestion ${D.n} deleted`)}it(st(".del"),async()=>{if(l!=null&&l.id){const D=l;J(),await j(D)}}),zt.querySelector(".close").onclick=()=>Ct(!1);function Ct(D=zt.classList.contains("sg-hidden")){zt.classList.toggle("sg-hidden",!D),D&&(dt(),document.pointerLockElement&&document.exitPointerLock())}function pt(D){D.view&&(e.pos.set(D.view.x,0,D.view.z),t.position.set(D.view.x,t.position.y,D.view.z),t.quaternion.setFromEuler(new Qe(D.view.pitch,D.view.yaw,0,"YXZ"))),Ct(!1),F(`${D.n}: ${D.text.slice(0,70)}${D.text.length>70?"…":""}`)}const Mt=new D_;Mt.far=40;const ie=new _t(0,0);function ht(){Mt.setFromCamera(ie,t);const D=Mt.intersectObjects([L,n],!0).find(P=>P.object.visible&&!P.object.isLine);if(!D)return null;let X=D.object;for(;X&&!X.userData.sid&&X!==i;)X=X.parent;if(X!=null&&X.userData.sid)return{mark:o.find(P=>P.id===X.userData.sid),point:D.point};const lt=D.face?D.face.normal.clone().transformDirection(D.object.matrixWorld):E.clone();return lt.dot(Mt.ray.direction)>0&&lt.negate(),{point:D.point,normal:lt,target:wt(Ox(D),D.point,lt)}}function wt(D,X,lt){return D==="Wall"||D==="Glass wall"?X.x<.35?`Window ${D.toLowerCase()}`:X.x>9.8&&X.z>9.5?"East wall":X.z>18.4?"Back wall":`${D} (${s(X.x,X.z)})`:D||(lt.y>.7&&X.y<.1?"Floor":lt.y<-.7?"Ceiling":"")}function Bt(){const D=new Qe().setFromQuaternion(t.quaternion,"YXZ");return{x:v(e.pos.x),z:v(e.pos.z),yaw:v(D.y),pitch:v(D.x)}}function Gt(){const D=ht();if(!D){F("Aim the dot at something first");return}if(D.mark){k(D.mark);return}const X=D.point;k({point:[v(X.x),v(X.y),v(X.z)],normal:[v(D.normal.x),v(D.normal.y),v(D.normal.z)],zone:s(X.x,X.z),near:D.target||p(X.x,X.z),target:D.target,view:Bt()})}function Tt(){const D=ht();if(!D){F("Aim the dot at the floor first");return}const{x:X,z:lt}=D.point;if(!d){d={x:X,z:lt},tt(),Z(q,new N(X,0,lt),E,.5,dn,"1"),F("Corner 1 set. Aim at the opposite corner and press X (Esc cancels).",4e3);return}const P={x0:v(Math.min(d.x,X)),z0:v(Math.min(d.z,lt)),x1:v(Math.max(d.x,X)),z1:v(Math.max(d.z,lt))};if(d=null,tt(),P.x1-P.x0<.2||P.z1-P.z0<.2){F("That area is too small: pick two corners further apart");return}G(P,dn,q);const et=(P.x0+P.x1)/2,H=(P.z0+P.z1)/2;k({area:P,point:[v(et),0,v(H)],normal:[0,1,0],zone:s(et,H),near:p(et,H),view:Bt()})}return addEventListener("keydown",D=>{if(A()){if(!f)return;D.code==="Escape"&&(D.preventDefault(),J()),D.code==="Enter"&&(D.metaKey||D.ctrlKey)&&st(".pri").click();return}f&&(/^(INPUT|TEXTAREA|SELECT)$/.test(D.target.tagName)||(D.code==="Escape"&&d&&(d=null,tt(),F("Area cancelled")),D.code==="KeyC"&&Gt(),D.code==="KeyX"&&Tt(),D.code==="KeyL"&&Ct()))}),g(),{isOpen:()=>A()||!zt.classList.contains("sg-hidden"),setEnabled(D){f=D,L.visible=D,D||(A()&&J(),Ct(!1),d=null,tt())},onResumeFailed(D){S=D}}}const Gx=1.8,Ah=2.2;function Ch(i,t,e,n=2.4){const s=new ne;i.add(s);const r=new xt(new Hn(.012,n-.04,t-.02),T.glass);r.position.set(0,n/2,e*t/2),r.renderOrder=2,s.add(r),U(s,T.chrome,.02,.1,t-.04,0,.05,e*t/2),U(s,T.chrome,.02,.06,.12,0,n-.06,e*.08),U(s,T.chrome,.02,.06,.12,0,.12,e*.08);const o=e*(t-.12);for(const a of[-1,1]){U(s,T.chrome,.028,1,.028,a*.07,1.05,o);for(const l of[.62,1.48])U(s,T.chrome,.12,.02,.02,a*.035,l,o)}return e>0&&U(s,T.blackMatte,.03,.14,.2,0,1.05,e*(t-.02)),s}let ga=null;function Vx(){if(ga)return ga;const i=document.createElement("canvas");i.width=i.height=128;const t=i.getContext("2d");return t.fillStyle="rgba(15,18,24,.8)",t.strokeStyle="#fff",t.lineWidth=8,t.beginPath(),t.arc(64,64,56,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle="#fff",t.textAlign="center",t.textBaseline="middle",t.font="bold 72px system-ui, sans-serif",t.fillText("F",64,68),ga=new oi(i)}function Rh(i,t,e,n){const s=new mu(new Al({map:Vx(),depthTest:!1,transparent:!0}));return s.scale.set(.11,.11,1),s.position.set(t,e,n),s.renderOrder=20,s.visible=!1,i.add(s),s}function Wx({scene:i,player:t}){const e=[],n=(a,l,c)=>{const h=(l-a)/2,u=new ne;i.add(u);const f=new ne;f.position.set(0,0,a),u.add(f);const d=new ne;d.position.set(0,0,l),u.add(d);const g=Rh(f,.1,1.25,h-.12);Ch(f,h,1),Ch(d,h,-1);const x={minX:-.08,maxX:.08,minZ:a,maxZ:l};_i.push(x),e.push({name:c,x:0,z:(a+l)/2,t:0,target:0,block:x,marker:g,apply(m){const p=m*Math.PI/2*.95;f.rotation.y=p,d.rotation.y=-p}})};n(4.9,6.5,"balcony door"),n(dl[0],dl[1],"meeting room door");for(const a of Bl){i.add(a.leaf),_i.push(a.block);const l=Rh(a.leaf,a.handle[0],a.handle[1],a.handle[2]);e.push({name:a.name,x:a.x,z:a.z,t:0,target:0,block:a.block,marker:l,apply(c){a.leaf.rotation.y=a.closed+(a.open-a.closed)*c}})}const s=()=>{let a=null,l=Gx;for(const c of e){const h=Math.hypot(t.pos.x-c.x,t.pos.z-c.z);h<l&&(l=h,a=c)}return a};addEventListener("keydown",a=>{if(a.code!=="KeyF"||t.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(a.target.tagName))return;const l=s();if(l&&(l.target=l.target?0:1,l.target)){const c=_i.indexOf(l.block);c>=0&&_i.splice(c,1)}});function r(a){const l=s();for(const c of e){const h=Math.hypot(t.pos.x-c.x,t.pos.z-c.z);c.marker.visible=h<4.5,c.marker.material.opacity=c===l?1:.55}for(const c of e)c.t!==c.target&&(c.t=c.target>c.t?Math.min(1,c.t+a*Ah):Math.max(0,c.t-a*Ah),c.apply(c.t*c.t*(3-2*c.t)),c.t===0&&!_i.includes(c.block)&&_i.push(c.block))}function o(){const a=s();return a?`F ${a.target?"close":"open"} ${a.name.toLowerCase()}`:""}return{update:r,prompt:o}}const Xx=3.4,pn=640,Jn=360,nn=20,_a=pn/nn,xa=(Jn-40)/nn,er=[{name:"Snake",ready:!0},{name:"Pong",ready:!1},{name:"Tetris",ready:!1},{name:"Car Race",ready:!1}];function Yx({scene:i,player:t}){const e=document.createElement("canvas");e.width=pn,e.height=Jn;const n=e.getContext("2d"),s=new oi(e);s.colorSpace=De;const r=new xt(new Ae(gi.w,gi.h),new bi({map:s,toneMapped:!1}));r.position.set(gi.x+.003,gi.y,gi.z),r.rotation.y=Math.PI/2,r.visible=!1,i.add(r);const o=document.createElement("div");Object.assign(o.style,{position:"fixed",inset:"0",background:"#000",display:"none",zIndex:"20",alignItems:"center",justifyContent:"center"}),document.body.appendChild(o);let a="off",l=0,c=!1,h,u,f,d,g,x=0,m,p=0,v=.11;const y=()=>Math.hypot(t.pos.x-gi.x,t.pos.z-gi.z)<Xx&&t.pos.x>0&&t.pos.z>22.8;function _(O){c=O,O?(o.appendChild(e),Object.assign(e.style,{width:"min(100vw, 177.78vh)",height:"auto",imageRendering:"pixelated"}),o.style.display="flex"):(o.style.display="none",e.parentNode&&e.parentNode.removeChild(e))}function L(){a="menu",l=0,r.visible=!0,t.state.paused=!0,Z()}function w(){a="off",r.visible=!1,t.state.paused=!1,_(!1)}function C(){h=[{x:8,y:8},{x:7,y:8},{x:6,y:8}],u={x:1,y:0},f=u,g=0,m=!1,p=0,v=.11,R(),a="snake"}function R(){do d={x:Math.floor(Math.random()*_a),y:Math.floor(Math.random()*xa)};while(h.some(O=>O.x===d.x&&O.y===d.y))}function E(){u=f;const O={x:h[0].x+u.x,y:h[0].y+u.y};if(O.x<0||O.y<0||O.x>=_a||O.y>=xa||h.some(nt=>nt.x===O.x&&nt.y===O.y)){m=!0,x=Math.max(x,g);return}h.unshift(O),O.x===d.x&&O.y===d.y?(g++,v=Math.max(.06,v-.003),R()):h.pop()}const M=(O,nt=600)=>`${nt} ${O}px "Avenir Next", "Helvetica Neue", Arial, sans-serif`;function I(O){n.fillStyle="rgba(255,255,255,.55)",n.font=M(14,500),n.textAlign="center",n.fillText(O,pn/2,Jn-14)}function V(){const O=n.createLinearGradient(0,0,pn,Jn);O.addColorStop(0,"#1a1f3a"),O.addColorStop(1,"#3a1d4f"),n.fillStyle=O,n.fillRect(0,0,pn,Jn),n.fillStyle="#fff",n.font=M(30,700),n.textAlign="left",n.fillText("Pixbit Arcade",40,56),n.fillStyle="#b46cff",n.fillRect(40,68,120,3),er.forEach((nt,st)=>{const Et=104+st*50,kt=st===l;n.fillStyle=kt?"rgba(255,255,255,.14)":"rgba(255,255,255,.04)",n.fillRect(40,Et,pn-80,40),kt&&(n.fillStyle="#5fe3ff",n.fillRect(40,Et,5,40)),n.fillStyle=nt.ready?"#fff":"rgba(255,255,255,.35)",n.font=M(20,kt?700:500),n.textAlign="left",n.fillText(nt.name,62,Et+27),n.font=M(14,500),n.textAlign="right",n.fillStyle=nt.ready?"#7dff9a":"rgba(255,255,255,.35)",n.fillText(nt.ready?"PLAY":"coming soon",pn-58,Et+26)}),I("↑ ↓ choose · Enter play · F full screen · E turn TV off")}function G(){n.fillStyle="#0d1410",n.fillRect(0,0,pn,Jn),n.fillStyle="#15241a",n.fillRect(0,0,pn,40),n.fillStyle="#7dff9a",n.font=M(18,700),n.textAlign="left",n.fillText(`SNAKE   score ${g}`,16,27),n.textAlign="right",n.fillStyle="rgba(255,255,255,.5)",n.font=M(13,500),n.fillText(`best ${x} · arrows/WASD · F full screen · Backspace menu`,pn-14,26);const O=40;n.fillStyle="rgba(255,255,255,.03)";for(let nt=0;nt<_a;nt++)for(let st=0;st<xa;st++)(nt+st)%2&&n.fillRect(nt*nn,O+st*nn,nn,nn);n.fillStyle="#ff4f6d",n.beginPath(),n.arc(d.x*nn+nn/2,O+d.y*nn+nn/2,nn/2-3,0,Math.PI*2),n.fill(),h.forEach((nt,st)=>{n.fillStyle=st===0?"#c8ffd4":`hsl(${135-Math.min(st,30)}, 80%, ${55-Math.min(st,20)}%)`,n.fillRect(nt.x*nn+1,O+nt.y*nn+1,nn-2,nn-2)}),m&&(n.fillStyle="rgba(0,0,0,.6)",n.fillRect(0,0,pn,Jn),n.fillStyle="#fff",n.textAlign="center",n.font=M(40,800),n.fillText("GAME OVER",pn/2,Jn/2-14),n.font=M(18,500),n.fillText(`score ${g} · best ${x}`,pn/2,Jn/2+20),I("Enter play again · Backspace menu"))}function Z(){a==="menu"?V():a==="snake"&&G(),s.needsUpdate=!0}const Q={ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1],ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0]};addEventListener("keydown",O=>{if(!/^(INPUT|TEXTAREA|SELECT)$/.test(O.target.tagName)){if(a==="off"){O.code==="KeyE"&&y()&&!t.state.paused&&(L(),O.stopImmediatePropagation());return}if(O.stopImmediatePropagation(),O.code!=="Escape"&&O.preventDefault(),O.code==="KeyF"){_(!c);return}if(a==="menu"){if((O.code==="ArrowUp"||O.code==="KeyW")&&(l=(l+er.length-1)%er.length),(O.code==="ArrowDown"||O.code==="KeyS")&&(l=(l+1)%er.length),(O.code==="Enter"||O.code==="Space")&&er[l].ready&&C(),O.code==="KeyE"||O.code==="Backspace"){w();return}}else if(a==="snake"){const nt=Q[O.code];nt&&!m&&!(nt[0]===-u.x&&nt[1]===-u.y)&&(f={x:nt[0],y:nt[1]}),m&&(O.code==="Enter"||O.code==="Space")&&C(),O.code==="Backspace"&&(a="menu")}Z()}},!0);function q(O){a!=="snake"||m||(p+=Math.min(O,v),p>=v&&(p-=v,E(),Z()))}function tt(){return a!=="off"?a==="menu"?"TV on":"playing snake":y()?"E play TV games":""}return{update:q,prompt:tt,isOn:()=>a!=="off"}}const qx=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0,Jr=i=>`<svg viewBox="0 0 24 24">${i}</svg>`,Ph={jump:Jr('<path d="M12 19V6"/><path d="M6 11l6-6 6 6"/><path d="M5 21h14"/>'),doorOpen:Jr('<path d="M4 21h16"/><path d="M6 21V3h9v2"/><path d="M15 21V5l-5 1.5V21"/><path d="M11.8 13h.01"/><path d="M18 9l2 2-2 2"/>'),doorClose:Jr('<path d="M4 21h16"/><path d="M6 21V3h12v18"/><path d="M15 12h.01"/>'),tv:Jr('<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/><path d="M10 9l4 2-4 2z"/>')};function $x({player:i,camera:t}){const{touch:e}=i,n=document.createElement("div");n.id="touch",n.innerHTML=`
    <div class="tj-base"><div class="tj-knob"></div></div>
    <button class="tb tb-jump" type="button" aria-label="Jump">${Ph.jump}</button>
    <button class="tb tb-act off" type="button" aria-label="Use"></button>`;const s=document.createElement("style");s.textContent=`
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
    #byline { display: none; }
    #hud { left: 50%; transform: translateX(-50%); bottom: 14px; font-size: 13px; }
  `,document.head.appendChild(s),document.body.appendChild(n);const r=n.querySelector(".tj-base"),o=n.querySelector(".tj-knob"),a=55;let l=null,c=0,h=0,u=null,f=0,d=0;const g=new Qe(0,0,0,"YXZ");r.style.display="none";const x=L=>!!(L.closest&&L.closest(".tb"));n.addEventListener("touchstart",L=>{for(const w of L.changedTouches)x(w.target)||(w.clientX<innerWidth/2&&l===null?(l=w.identifier,c=w.clientX,h=w.clientY,r.style.left=c+"px",r.style.top=h+"px",r.style.display="block",o.style.transform="translate(0,0)"):w.clientX>=innerWidth/2&&u===null&&(u=w.identifier,f=w.clientX,d=w.clientY));x(L.target)||L.preventDefault()},{passive:!1}),n.addEventListener("touchmove",L=>{for(const w of L.changedTouches)if(w.identifier===l){let C=w.clientX-c,R=w.clientY-h;const E=Math.hypot(C,R);E>a&&(C*=a/E,R*=a/E),o.style.transform=`translate(${C}px, ${R}px)`,e.x=C/a,e.y=-R/a,e.run=E>a*1.15}else w.identifier===u&&!i.state.paused&&(g.setFromQuaternion(t.quaternion),g.y-=(w.clientX-f)*.006,g.x=Math.max(-1.45,Math.min(1.45,g.x-(w.clientY-d)*.006)),t.quaternion.setFromEuler(g),f=w.clientX,d=w.clientY);L.preventDefault()},{passive:!1});const m=L=>{for(const w of L.changedTouches)w.identifier===l&&(l=null,e.x=e.y=0,e.run=!1,r.style.display="none"),w.identifier===u&&(u=null)};n.addEventListener("touchend",m),n.addEventListener("touchcancel",m);const p=(L,w)=>{const C=n.querySelector(L);C.addEventListener("touchstart",R=>{R.preventDefault(),R.stopPropagation(),w()},{passive:!1}),C.addEventListener("click",R=>R.preventDefault())};p(".tb-jump",()=>i.jump());const v=n.querySelector(".tb-act");let y=null,_="";return p(".tb-act",()=>{y&&dispatchEvent(new KeyboardEvent("keydown",{code:y,bubbles:!0}))}),{show(L){n.classList.toggle("off",!L)},setAction(L){let w="",C=null;/^F (open|close)/.test(L)?(C="KeyF",w=L.startsWith("F open")?"doorOpen":"doorClose"):L&&(C="KeyE",w="tv"),y=C,v.classList.toggle("off",!C),w!==_&&(v.innerHTML=w?Ph[w]:"",v.setAttribute("aria-label",L),_=w)}}}const Xe=new Vg({antialias:!0,powerPreference:"high-performance"});Xe.setPixelRatio(Math.min(devicePixelRatio,2));Xe.setSize(innerWidth,innerHeight);Xe.outputColorSpace=De;Xe.toneMapping=Oh;Xe.toneMappingExposure=.9;Xe.shadowMap.enabled=!0;Xe.shadowMap.type=Nh;document.body.appendChild(Xe.domElement);const _n=new du,zu=new Qt("#a8aaa4");_n.background=zu;_n.fog=new Tl(zu,40,1100);const Zx=new ll(Xe);_n.environment=Zx.fromScene(new U_,.04).texture;_n.environmentIntensity=.45;const Ki=new mn(78,innerWidth/innerHeight,.05,1500);_n.add(new A_("#f6f7ff","#7a7066",.8));const kn=new P_("#fff3e2",1.5);kn.position.set(-22,20,4);kn.target.position.set(5,0,10);kn.castShadow=!0;kn.shadow.mapSize.set(2048,2048);Object.assign(kn.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:80});kn.shadow.bias=-4e-4;kn.shadow.normalBias=.03;_n.add(kn,kn.target);const ku=new Au("#ffe8c8",6,12,1.5);ku.position.set(8.7,2.6,7.8);_n.add(ku);const Eo=new ne;Ex(Eo);Fx(Eo);_n.add(Eo);const on=Nx(Ki,Xe.domElement,{spawn:Sh,yaw:Sh.yaw}),ks=document.getElementById("overlay"),Ns=qx()?$x({player:on,camera:Ki}):null;Ns&&Ns.show(!1);ks.addEventListener("click",()=>{if(Ns){oo(),Ns.show(!0);return}try{const i=on.controls.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>oo())}catch{oo()}});function oo(){on.state.dragMode=!0,ks.classList.add("hidden"),pl.dataset.mode="drag"}document.addEventListener("pointerlockerror",oo);addEventListener("keydown",i=>{i.code==="Escape"&&on.state.dragMode&&!mr.isOpen()&&(on.state.dragMode=!1,ks.classList.remove("hidden"))});on.controls.addEventListener("lock",()=>ks.classList.add("hidden"));on.controls.addEventListener("unlock",()=>{mr.isOpen()||ks.classList.remove("hidden")});const Lh=Wx({scene:_n,player:on}),Dh=Yx({scene:_n,player:on}),mr=Hx({scene:_n,camera:Ki,player:on,world:Eo,zoneAt:Ou,renderer:Xe});mr.onResumeFailed(()=>ks.classList.remove("hidden"));let gr=!1;try{gr=localStorage.getItem("pixbit-devmode")==="1"}catch{}const po=document.getElementById("devbox");function zl(i){gr=i,document.body.classList.toggle("dev",i),po.checked=i,mr.setEnabled(i);try{localStorage.setItem("pixbit-devmode",i?"1":"0")}catch{}}po.addEventListener("click",i=>i.stopPropagation());document.getElementById("devsw").addEventListener("click",i=>i.stopPropagation());po.addEventListener("change",()=>zl(po.checked));addEventListener("keydown",i=>{i.code==="KeyP"&&!/^(INPUT|TEXTAREA|SELECT)$/.test(i.target.tagName)&&!mr.isOpen()&&zl(!gr)});zl(gr);let sr=!0;addEventListener("keydown",i=>{i.code==="KeyQ"&&(sr=!sr,kn.castShadow=sr,Xe.setPixelRatio(sr?Math.min(devicePixelRatio,2):1),Xe.setSize(innerWidth,innerHeight))});const va=document.getElementById("zone"),pl=document.getElementById("hud");let Ih="",Ma=0,Qr=0,ya=0;function Kx(i){const t=Ou(on.pos.x,on.pos.z);t!==Ih&&(Ih=t,va.textContent=t,va.classList.add("show"),Ma=2.2),Ma>0&&(Ma-=i)<=0&&va.classList.remove("show")}addEventListener("resize",()=>{Ki.aspect=innerWidth/innerHeight,Ki.updateProjectionMatrix(),Xe.setSize(innerWidth,innerHeight)});const jx=new L_;Xe.setAnimationLoop(()=>{const i=jx.getDelta();if(on.update(i),Lh.update(i),Dh.update(i),Kx(i),ya++,Qr+=i,Qr>.5){const t=Dh.prompt()||Lh.prompt();Ns?(Ns.setAction(t),pl.textContent=""):pl.textContent=`${t?t.toUpperCase()+" · ":""}${Math.round(ya/Qr)} fps · ${sr?"high":"low"} quality (Q) · ${gr?"DEV · C suggest · X area · L list":"dev mode off (P)"}${on.state.dragMode?" · drag mouse to look":""}`,ya=0,Qr=0}Xe.render(_n,Ki)});Object.assign(window,{__office:{scene:_n,camera:Ki,player:on,renderer:Xe}});
