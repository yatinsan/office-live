(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="170",Wp=0,Zh=1,Xp=2,wd=1,Ed=2,ki=3,qi=0,Sn=1,Ot=2,fs=0,gr=1,hl=2,Jh=3,Qh=4,qp=5,Ls=100,Yp=101,$p=102,Kp=103,jp=104,Zp=200,Jp=201,Qp=202,e0=203,ul=204,fl=205,t0=206,n0=207,i0=208,s0=209,r0=210,o0=211,a0=212,c0=213,l0=214,dl=0,pl=1,ml=2,Mr=3,gl=4,xl=5,_l=6,vl=7,Td=0,h0=1,u0=2,ds=0,f0=1,d0=2,p0=3,Ad=4,m0=5,g0=6,x0=7,eu="attached",_0="detached",Rd=300,br=301,Sr=302,yl=303,Ml=304,za=306,pi=1e3,hs=1001,Ca=1002,In=1003,Cd=1004,ro=1005,Yn=1006,Ma=1007,Vi=1008,Yi=1009,Pd=1010,Ld=1011,xo=1012,uh=1013,Us=1014,fi=1015,To=1016,fh=1017,dh=1018,wr=1020,Id=35902,Dd=1021,Nd=1022,ti=1023,Ud=1024,Od=1025,xr=1026,Er=1027,ph=1028,mh=1029,kd=1030,gh=1031,xh=1033,ba=33776,Sa=33777,wa=33778,Ea=33779,bl=35840,Sl=35841,wl=35842,El=35843,Tl=36196,Al=37492,Rl=37496,Cl=37808,Pl=37809,Ll=37810,Il=37811,Dl=37812,Nl=37813,Ul=37814,Ol=37815,kl=37816,Fl=37817,Bl=37818,zl=37819,Hl=37820,Vl=37821,Ta=36492,Gl=36494,Wl=36495,Fd=36283,Xl=36284,ql=36285,Yl=36286,_o=2300,vo=2301,ec=2302,tu=2400,nu=2401,iu=2402,v0=2500,y0=0,Bd=1,$l=2,M0=3200,b0=3201,zd=0,S0=1,cs="",yt="srgb",Nn="srgb-linear",Ha="linear",Ct="srgb",Vs=7680,su=519,w0=512,E0=513,T0=514,Hd=515,A0=516,R0=517,C0=518,P0=519,Kl=35044,ru="300 es",Gi=2e3,Pa=2001;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ou=1234567;const ho=Math.PI/180,Tr=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Qt(i,e,t){return Math.max(e,Math.min(t,i))}function _h(i,e){return(i%e+e)%e}function L0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function I0(i,e,t){return i!==e?(t-i)/(e-i):0}function uo(i,e,t){return(1-t)*i+t*e}function D0(i,e,t,n){return uo(i,e,1-Math.exp(-t*n))}function N0(i,e=1){return e-Math.abs(_h(i,e*2)-e)}function U0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function O0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function k0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function F0(i,e){return i+Math.random()*(e-i)}function B0(i){return i*(.5-Math.random())}function z0(i){i!==void 0&&(ou=i);let e=ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function H0(i){return i*ho}function V0(i){return i*Tr}function G0(i){return(i&i-1)===0&&i!==0}function W0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function X0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function q0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Y0={DEG2RAD:ho,RAD2DEG:Tr,generateUUID:ni,clamp:Qt,euclideanModulo:_h,mapLinear:L0,inverseLerp:I0,lerp:uo,damp:D0,pingpong:N0,smoothstep:U0,smootherstep:O0,randInt:k0,randFloat:F0,randFloatSpread:B0,seededRandom:z0,degToRad:H0,radToDeg:V0,isPowerOfTwo:G0,ceilPowerOfTwo:W0,floorPowerOfTwo:X0,setQuaternionFromProperEuler:q0,normalize:At,denormalize:ui};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,s,r,o,a,c,l){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],x=s[7],E=s[2],S=s[5],R=s[8];return r[0]=o*_+a*v+c*E,r[3]=o*m+a*y+c*S,r[6]=o*p+a*x+c*R,r[1]=l*_+h*v+u*E,r[4]=l*m+h*y+u*S,r[7]=l*p+h*x+u*R,r[2]=f*_+d*v+g*E,r[5]=f*m+d*y+g*S,r[8]=f*p+d*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tc.makeScale(e,t)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new lt;function Vd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $0(){const i=yo("canvas");return i.style.display="block",i}const au={};function oo(i){i in au||(au[i]=!0,console.warn(i))}function K0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function j0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Z0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mt={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cs?Ha:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const cu=[.64,.33,.3,.6,.15,.06],lu=[.2126,.7152,.0722],hu=[.3127,.329],uu=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fu=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[Nn]:{primaries:cu,whitePoint:hu,transfer:Ha,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:lu,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:cu,whitePoint:hu,transfer:Ct,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:lu,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}});let Gs;class J0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=yo("canvas")),Gs.width=e.width,Gs.height=e.height;const n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q0=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?J0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let em=0;class tn extends zs{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=hs,s=hs,r=Yn,o=Vi,a=ti,c=Yi,l=tn.DEFAULT_ANISOTROPY,h=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=ni(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case Ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case Ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Rd;tn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(d+1)/2,E=(p+1)/2,S=(h+f)/4,R=(u+_)/4,C=(g+m)/4;return y>x&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=R/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=C/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=C/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tm extends zs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends tm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wd extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nm extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),S=Math.atan2(E,p*v);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E}const x=a*v;if(c=c*m+f*x,l=l*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new I,du=new gi;class Si{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),No.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),No.copy(n.boundingBox)),No.applyMatrix4(e.matrixWorld),this.union(No)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Uo.subVectors(this.max,zr),Ws.subVectors(e.a,zr),Xs.subVectors(e.b,zr),qs.subVectors(e.c,zr),Zi.subVectors(Xs,Ws),Ji.subVectors(qs,Xs),xs.subVectors(Ws,qs);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-xs.z,xs.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,xs.z,0,-xs.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-xs.y,xs.x,0];return!sc(t,Ws,Xs,qs,Uo)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,Ws,Xs,qs,Uo))?!1:(Oo.crossVectors(Zi,Ji),t=[Oo.x,Oo.y,Oo.z],sc(t,Ws,Xs,qs,Uo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new I,new I,new I,new I,new I,new I,new I,new I],ri=new I,No=new Si,Ws=new I,Xs=new I,qs=new I,Zi=new I,Ji=new I,xs=new I,zr=new I,Uo=new I,Oo=new I,_s=new I;function sc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_s.fromArray(i,r);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=e.dot(_s),l=t.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const im=new Si,Hr=new I,rc=new I;class wi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):im.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hr.subVectors(e,this.center);const t=Hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Hr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hr.copy(e.center).add(rc)),this.expandByPoint(Hr.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new I,oc=new I,ko=new I,Qi=new I,ac=new I,Fo=new I,cc=new I;class Ao{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oc.copy(e).add(t).multiplyScalar(.5),ko.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(oc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(ko),a=Qi.dot(this.direction),c=-Qi.dot(ko),l=Qi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oc).addScaledVector(ko,f),d}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,s,r){ac.subVectors(t,e),Fo.subVectors(n,e),cc.crossVectors(ac,Fo);let o=this.direction.dot(cc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const c=a*this.direction.dot(Fo.crossVectors(Qi,Fo));if(c<0)return null;const l=a*this.direction.dot(ac.cross(Qi));if(l<0||c+l>o)return null;const h=-a*Qi.dot(cc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,rm)}lookAt(e,t,n){const s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),es.crossVectors(n,Vn),es.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),es.crossVectors(n,Vn)),es.normalize(),Bo.crossVectors(Vn,es),s[0]=es.x,s[4]=Bo.x,s[8]=Vn.x,s[1]=es.y,s[5]=Bo.y,s[9]=Vn.y,s[2]=es.z,s[6]=Bo.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],E=n[15],S=s[0],R=s[4],C=s[8],b=s[12],M=s[1],D=s[5],V=s[9],W=s[13],K=s[2],j=s[6],Y=s[10],ie=s[14],F=s[3],le=s[7],he=s[11],Se=s[15];return r[0]=o*S+a*M+c*K+l*F,r[4]=o*R+a*D+c*j+l*le,r[8]=o*C+a*V+c*Y+l*he,r[12]=o*b+a*W+c*ie+l*Se,r[1]=h*S+u*M+f*K+d*F,r[5]=h*R+u*D+f*j+d*le,r[9]=h*C+u*V+f*Y+d*he,r[13]=h*b+u*W+f*ie+d*Se,r[2]=g*S+_*M+m*K+p*F,r[6]=g*R+_*D+m*j+p*le,r[10]=g*C+_*V+m*Y+p*he,r[14]=g*b+_*W+m*ie+p*Se,r[3]=v*S+y*M+x*K+E*F,r[7]=v*R+y*D+x*j+E*le,r[11]=v*C+y*V+x*Y+E*he,r[15]=v*b+y*W+x*ie+E*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,x=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,E=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,S=t*v+n*y+s*x+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/S;return e[0]=v*R,e[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*R,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*R,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*R,e[4]=y*R,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*R,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*R,e[8]=x*R,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*R,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*R,e[12]=E*R,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=c*l,y=c*h,x=c*u,E=n.x,S=n.y,R=n.z;return s[0]=(1-(_+p))*E,s[1]=(d+x)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(d-x)*S,s[5]=(1-(f+p))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ys.set(s[0],s[1],s[2]).length();const o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],oi.copy(this);const l=1/r,h=1/o,u=1/a;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Gi){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let d,g;if(a===Gi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Pa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gi){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,d=(n+s)*h;let g,_;if(a===Gi)g=(o+r)*u,_=-2*u;else if(a===Pa)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ys=new I,oi=new ot,sm=new I(0,0,0),rm=new I(1,1,1),es=new I,Bo=new I,Vn=new I,pu=new ot,mu=new gi;class En{constructor(e=0,t=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let om=0;const gu=new I,$s=new gi,Ii=new ot,zo=new I,Vr=new I,am=new I,cm=new gi,xu=new I(1,0,0),_u=new I(0,1,0),vu=new I(0,0,1),yu={type:"added"},lm={type:"removed"},Ks={type:"childadded",child:null},lc={type:"childremoved",child:null};class Dt extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new I,t=new En,n=new gi,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new lt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return gu.copy(e).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?zo.copy(e):zo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Vr,zo,this.up):Ii.lookAt(zo,Vr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ii),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yu),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lm),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yu),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,cm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new I(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new I,Di=new I,hc=new I,Ni=new I,js=new I,Zs=new I,Mu=new I,uc=new I,fc=new I,dc=new I,pc=new Mt,mc=new Mt,gc=new Mt;class ei{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ai.subVectors(e,t),s.cross(ai);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ai.subVectors(s,t),Di.subVectors(n,t),hc.subVectors(e,t);const o=ai.dot(ai),a=ai.dot(Di),c=ai.dot(hc),l=Di.dot(Di),h=Di.dot(hc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pc,r.x),o.addScaledVector(mc,r.y),o.addScaledVector(gc,r.z),o}static isFrontFacing(e,t,n,s){return ai.subVectors(n,t),Di.subVectors(e,t),ai.cross(Di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ai.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ei.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,n),Zs.subVectors(r,n),uc.subVectors(e,n);const c=js.dot(uc),l=Zs.dot(uc);if(c<=0&&l<=0)return t.copy(n);fc.subVectors(e,s);const h=js.dot(fc),u=Zs.dot(fc);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(js,o);dc.subVectors(e,r);const d=js.dot(dc),g=Zs.dot(dc);if(g>=0&&d<=g)return t.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Zs,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Mu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Mu,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(js,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=_h(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xc(o,r,e+1/3),this.g=xc(o,r,e),this.b=xc(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=Xd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return mt.fromWorkingColorSpace(xn.copy(this),e),Math.round(Qt(xn.r*255,0,255))*65536+Math.round(Qt(xn.g*255,0,255))*256+Math.round(Qt(xn.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=yt){mt.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,s=xn.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(Ho);const n=uo(ts.h,Ho.h,t),s=uo(ts.s,Ho.s,t),r=uo(ts.l,Ho.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new st;st.NAMES=Xd;let hm=0;class di extends zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ni(),this.name="",this.blending=gr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=fl,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ul&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ln extends di{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new I,Vo=new ye;class wn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kl,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vo.fromBufferAttribute(this,t),Vo.applyMatrix3(e),this.setXY(t,Vo.x,Vo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),e}}class qd extends wn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Yd extends wn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends wn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let um=0;const jn=new ot,_c=new Dt,Js=new I,Gn=new Si,Gr=new Si,an=new I;class Ht extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vd(e)?Yd:qd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Gn.min,Gr.min),Gn.expandByPoint(an),an.addVectors(Gn.max,Gr.max),Gn.expandByPoint(an)):(Gn.expandByPoint(Gr.min),Gn.expandByPoint(Gr.max))}Gn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)an.fromBufferAttribute(a,l),c&&(Js.fromBufferAttribute(e,l),an.add(Js)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new I,c[C]=new I;const l=new I,h=new I,u=new I,f=new ye,d=new ye,g=new ye,_=new I,m=new I;function p(C,b,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),a[C].add(_),a[b].add(_),a[M].add(_),c[C].add(m),c[b].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,b=v.length;C<b;++C){const M=v[C],D=M.start,V=M.count;for(let W=D,K=D+V;W<K;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const y=new I,x=new I,E=new I,S=new I;function R(C){E.fromBufferAttribute(s,C),S.copy(E);const b=a[C];y.copy(b),y.sub(E.multiplyScalar(E.dot(b))).normalize(),x.crossVectors(S,b);const D=x.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,b=v.length;C<b;++C){const M=v[C],D=M.start,V=M.count;for(let W=D,K=D+V;W<K;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new wn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new ot,vs=new Ao,Go=new wi,Su=new I,Wo=new I,Xo=new I,qo=new I,vc=new I,Yo=new I,wu=new I,$o=new I;class ve extends Dt{constructor(e=new Ht,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Yo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(vc.fromBufferAttribute(u,e),o?Yo.addScaledVector(vc,h):Yo.addScaledVector(vc.sub(t),h))}t.add(Yo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(Go.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Go,Su)===null||vs.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(bu.copy(r).invert(),vs.copy(e.ray).applyMatrix4(bu),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,E=y;x<E;x+=3){const S=a.getX(x),R=a.getX(x+1),C=a.getX(x+2);s=Ko(this,p,e,n,l,h,u,S,R,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=Ko(this,o,e,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,E=y;x<E;x+=3){const S=x,R=x+1,C=x+2;s=Ko(this,p,e,n,l,h,u,S,R,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;s=Ko(this,o,e,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function fm(i,e,t,n,s,r,o,a){let c;if(e.side===Sn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===qi,a),c===null)return null;$o.copy(a),$o.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo($o);return l<t.near||l>t.far?null:{distance:l,point:$o.clone(),object:i}}function Ko(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Wo),i.getVertexPosition(c,Xo),i.getVertexPosition(l,qo);const h=fm(i,e,t,n,Wo,Xo,qo,wu);if(h){const u=new I;ei.getBarycoord(wu,Wo,Xo,qo,u),s&&(h.uv=ei.getInterpolatedAttribute(s,a,c,l,u,new ye)),r&&(h.uv1=ei.getInterpolatedAttribute(r,a,c,l,u,new ye)),o&&(h.normal=ei.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};ei.getNormal(Wo,Xo,qo,f.normal),h.face=f,h.barycoord=u}return h}class en extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(_,m,p,v,y,x,E,S,R,C,b){const M=x/R,D=E/C,V=x/2,W=E/2,K=S/2,j=R+1,Y=C+1;let ie=0,F=0;const le=new I;for(let he=0;he<Y;he++){const Se=he*D-W;for(let Be=0;Be<j;Be++){const Ye=Be*M-V;le[_]=Ye*v,le[m]=Se*y,le[p]=K,l.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=S>0?1:-1,h.push(le.x,le.y,le.z),u.push(Be/R),u.push(1-he/C),ie+=1}}for(let he=0;he<C;he++)for(let Se=0;Se<R;Se++){const Be=f+Se+j*he,Ye=f+Se+j*(he+1),ne=f+(Se+1)+j*(he+1),fe=f+(Se+1)+j*he;c.push(Be,Ye,fe),c.push(Ye,ne,fe),F+=6}a.addGroup(d,F,b),d+=F,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function An(i){const e={};for(let t=0;t<i.length;t++){const n=Ar(i[t]);for(const s in n)e[s]=n[s]}return e}function dm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $d(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const pm={clone:Ar,merge:An};var mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ms extends di{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mm,this.fragmentShader=gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=dm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kd extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new I,Eu=new ye,Tu=new ye;class Cn extends Kd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Eu,Tu),t.subVectors(Tu,Eu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ho*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,er=1;class xm extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(Qs,er,e,t);s.layers=this.layers,this.add(s);const r=new Cn(Qs,er,e,t);r.layers=this.layers,this.add(r);const o=new Cn(Qs,er,e,t);o.layers=this.layers,this.add(o);const a=new Cn(Qs,er,e,t);a.layers=this.layers,this.add(a);const c=new Cn(Qs,er,e,t);c.layers=this.layers,this.add(c);const l=new Cn(Qs,er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jd extends tn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _m extends Os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new ms({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:fs});r.uniforms.tEquirect.value=t;const o=new ve(s,r),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Yn),new xm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const yc=new I,vm=new I,ym=new lt;class Rs{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=yc.subVectors(n,t).cross(vm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ym.getNormalMatrix(e),s=this.coplanarPoint(yc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new wi,jo=new I;class yh{constructor(e=new Rs,t=new Rs,n=new Rs,s=new Rs,r=new Rs,o=new Rs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,m-d,x-p).normalize(),n[1].setComponents(c+r,f+l,m+d,x+p).normalize(),n[2].setComponents(c+o,f+h,m+g,x+v).normalize(),n[3].setComponents(c-o,f-h,m-g,x-v).normalize(),n[4].setComponents(c-a,f-u,m-_,x-y).normalize(),t===Gi)n[5].setComponents(c+a,f+u,m+_,x+y).normalize();else if(t===Pa)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(jo.x=s.normal.x>0?e.max.x:e.min.x,jo.y=s.normal.y>0?e.max.y:e.min.y,jo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Zd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Mm(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ut extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*f-o;for(let y=0;y<l;y++){const x=y*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),E=v+1+l*(p+1),S=v+1+l*p;d.push(y,x,S),d.push(x,E,S)}this.setIndex(d),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.widthSegments,e.heightSegments)}}var bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sm=`#ifdef USE_ALPHAHASH
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
#endif`,wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Em=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rm=`#ifdef USE_AOMAP
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
#endif`,Cm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
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
#endif`,Lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Um=`#ifdef USE_IRIDESCENCE
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
#endif`,Om=`#ifdef USE_BUMPMAP
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
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xm=`#define PI 3.141592653589793
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
} // validated`,qm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ym=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
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
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
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
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
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
#endif`,yg=`struct PhysicalMaterial {
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
}`,Mg=`
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
#endif`,bg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Lg=`#if defined( USE_POINTS_UV )
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
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ng=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ug=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`#ifdef USE_MORPHTARGETS
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
#endif`,Fg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
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
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ox=`float getShadowMask() {
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
}`,ax=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cx=`#ifdef USE_SKINNING
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
#endif`,lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hx=`#ifdef USE_SKINNING
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
#endif`,ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,px=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mx=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#ifdef USE_TRANSMISSION
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bx=`uniform sampler2D t2D;
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
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`#include <common>
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
}`,Rx=`#if DEPTH_PACKING == 3200
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
}`,Cx=`#define DISTANCE
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
}`,Px=`#define DISTANCE
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`uniform float scale;
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Ux=`#include <common>
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
}`,Ox=`uniform vec3 diffuse;
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
}`,kx=`#define LAMBERT
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
}`,Fx=`#define LAMBERT
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
}`,Bx=`#define MATCAP
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
}`,zx=`#define MATCAP
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
}`,Hx=`#define NORMAL
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
}`,Vx=`#define NORMAL
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
}`,Gx=`#define PHONG
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
}`,Wx=`#define PHONG
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
}`,Xx=`#define STANDARD
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
}`,qx=`#define STANDARD
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
}`,Yx=`#define TOON
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
}`,$x=`#define TOON
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
}`,Kx=`uniform float size;
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
}`,jx=`uniform vec3 diffuse;
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
}`,Zx=`#include <common>
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
}`,Jx=`uniform vec3 color;
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
}`,Qx=`uniform float rotation;
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
}`,e_=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:bm,alphahash_pars_fragment:Sm,alphamap_fragment:wm,alphamap_pars_fragment:Em,alphatest_fragment:Tm,alphatest_pars_fragment:Am,aomap_fragment:Rm,aomap_pars_fragment:Cm,batching_pars_vertex:Pm,batching_vertex:Lm,begin_vertex:Im,beginnormal_vertex:Dm,bsdfs:Nm,iridescence_fragment:Um,bumpmap_pars_fragment:Om,clipping_planes_fragment:km,clipping_planes_pars_fragment:Fm,clipping_planes_pars_vertex:Bm,clipping_planes_vertex:zm,color_fragment:Hm,color_pars_fragment:Vm,color_pars_vertex:Gm,color_vertex:Wm,common:Xm,cube_uv_reflection_fragment:qm,defaultnormal_vertex:Ym,displacementmap_pars_vertex:$m,displacementmap_vertex:Km,emissivemap_fragment:jm,emissivemap_pars_fragment:Zm,colorspace_fragment:Jm,colorspace_pars_fragment:Qm,envmap_fragment:eg,envmap_common_pars_fragment:tg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:pg,envmap_vertex:sg,fog_vertex:rg,fog_pars_vertex:og,fog_fragment:ag,fog_pars_fragment:cg,gradientmap_pars_fragment:lg,lightmap_pars_fragment:hg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:fg,lights_pars_begin:dg,lights_toon_fragment:mg,lights_toon_pars_fragment:gg,lights_phong_fragment:xg,lights_phong_pars_fragment:_g,lights_physical_fragment:vg,lights_physical_pars_fragment:yg,lights_fragment_begin:Mg,lights_fragment_maps:bg,lights_fragment_end:Sg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Eg,logdepthbuf_pars_vertex:Tg,logdepthbuf_vertex:Ag,map_fragment:Rg,map_pars_fragment:Cg,map_particle_fragment:Pg,map_particle_pars_fragment:Lg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Dg,morphinstance_vertex:Ng,morphcolor_vertex:Ug,morphnormal_vertex:Og,morphtarget_pars_vertex:kg,morphtarget_vertex:Fg,normal_fragment_begin:Bg,normal_fragment_maps:zg,normal_pars_fragment:Hg,normal_pars_vertex:Vg,normal_vertex:Gg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:$g,opaque_fragment:Kg,packing:jg,premultiplied_alpha_fragment:Zg,project_vertex:Jg,dithering_fragment:Qg,dithering_pars_fragment:ex,roughnessmap_fragment:tx,roughnessmap_pars_fragment:nx,shadowmap_pars_fragment:ix,shadowmap_pars_vertex:sx,shadowmap_vertex:rx,shadowmask_pars_fragment:ox,skinbase_vertex:ax,skinning_pars_vertex:cx,skinning_vertex:lx,skinnormal_vertex:hx,specularmap_fragment:ux,specularmap_pars_fragment:fx,tonemapping_fragment:dx,tonemapping_pars_fragment:px,transmission_fragment:mx,transmission_pars_fragment:gx,uv_pars_fragment:xx,uv_pars_vertex:_x,uv_vertex:vx,worldpos_vertex:yx,background_vert:Mx,background_frag:bx,backgroundCube_vert:Sx,backgroundCube_frag:wx,cube_vert:Ex,cube_frag:Tx,depth_vert:Ax,depth_frag:Rx,distanceRGBA_vert:Cx,distanceRGBA_frag:Px,equirect_vert:Lx,equirect_frag:Ix,linedashed_vert:Dx,linedashed_frag:Nx,meshbasic_vert:Ux,meshbasic_frag:Ox,meshlambert_vert:kx,meshlambert_frag:Fx,meshmatcap_vert:Bx,meshmatcap_frag:zx,meshnormal_vert:Hx,meshnormal_frag:Vx,meshphong_vert:Gx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:qx,meshtoon_vert:Yx,meshtoon_frag:$x,points_vert:Kx,points_frag:jx,shadow_vert:Zx,shadow_frag:Jx,sprite_vert:Qx,sprite_frag:e_},Le={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Mi={basic:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new st(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:An([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:An([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:An([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new st(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:An([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:An([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:An([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:An([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:An([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:An([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:An([Le.common,Le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:An([Le.lights,Le.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Mi.physical={uniforms:An([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Zo={r:0,b:0,g:0},Ms=new En,t_=new ot;function n_(i,e,t,n,s,r,o){const a=new st(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===za)?(h===void 0&&(h=new ve(new en(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:Ar(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ms.copy(y.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(t_.makeRotationFromEuler(Ms)),h.material.toneMapped=mt.getTransfer(x.colorSpace)!==Ct,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ve(new ut(2,2),new ms({name:"BackgroundMaterial",uniforms:Ar(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=mt.getTransfer(x.colorSpace)!==Ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(Zo,$d(i)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function i_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,D,V,W,K){let j=!1;const Y=u(W,V,D);r!==Y&&(r=Y,l(r.object)),j=d(M,W,V,K),j&&g(M,W,V,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(M,D,V,W),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,D,V){const W=V.wireframe===!0;let K=n[M.id];K===void 0&&(K={},n[M.id]=K);let j=K[D.id];j===void 0&&(j={},K[D.id]=j);let Y=j[W];return Y===void 0&&(Y=f(c()),j[W]=Y),Y}function f(M){const D=[],V=[],W=[];for(let K=0;K<t;K++)D[K]=0,V[K]=0,W[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:W,object:M,attributes:{},index:null}}function d(M,D,V,W){const K=r.attributes,j=D.attributes;let Y=0;const ie=V.getAttributes();for(const F in ie)if(ie[F].location>=0){const he=K[F];let Se=j[F];if(Se===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(Se=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(Se=M.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;Y++}return r.attributesNum!==Y||r.index!==W}function g(M,D,V,W){const K={},j=D.attributes;let Y=0;const ie=V.getAttributes();for(const F in ie)if(ie[F].location>=0){let he=j[F];he===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),K[F]=Se,Y++}r.attributes=K,r.attributesNum=Y,r.index=W}function _(){const M=r.newAttributes;for(let D=0,V=M.length;D<V;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const V=r.newAttributes,W=r.enabledAttributes,K=r.attributeDivisors;V[M]=1,W[M]===0&&(i.enableVertexAttribArray(M),W[M]=1),K[M]!==D&&(i.vertexAttribDivisor(M,D),K[M]=D)}function v(){const M=r.newAttributes,D=r.enabledAttributes;for(let V=0,W=D.length;V<W;V++)D[V]!==M[V]&&(i.disableVertexAttribArray(V),D[V]=0)}function y(M,D,V,W,K,j,Y){Y===!0?i.vertexAttribIPointer(M,D,V,K,j):i.vertexAttribPointer(M,D,V,W,K,j)}function x(M,D,V,W){_();const K=W.attributes,j=V.getAttributes(),Y=D.defaultAttributeValues;for(const ie in j){const F=j[ie];if(F.location>=0){let le=K[ie];if(le===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const he=le.normalized,Se=le.itemSize,Be=e.get(le);if(Be===void 0)continue;const Ye=Be.buffer,ne=Be.type,fe=Be.bytesPerElement,pe=ne===i.INT||ne===i.UNSIGNED_INT||le.gpuType===uh;if(le.isInterleavedBufferAttribute){const ue=le.data,De=ue.stride,ze=le.offset;if(ue.isInstancedInterleavedBuffer){for(let Pe=0;Pe<F.locationSize;Pe++)p(F.location+Pe,ue.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Pe=0;Pe<F.locationSize;Pe++)m(F.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Pe=0;Pe<F.locationSize;Pe++)y(F.location+Pe,Se/F.locationSize,ne,he,De*fe,(ze+Se/F.locationSize*Pe)*fe,pe)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<F.locationSize;ue++)p(F.location+ue,le.meshPerAttribute);M.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<F.locationSize;ue++)m(F.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let ue=0;ue<F.locationSize;ue++)y(F.location+ue,Se/F.locationSize,ne,he,Se*fe,Se/F.locationSize*ue*fe,pe)}}else if(Y!==void 0){const he=Y[ie];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(F.location,he);break;case 3:i.vertexAttrib3fv(F.location,he);break;case 4:i.vertexAttrib4fv(F.location,he);break;default:i.vertexAttrib1fv(F.location,he)}}}}v()}function E(){C();for(const M in n){const D=n[M];for(const V in D){const W=D[V];for(const K in W)h(W[K].object),delete W[K];delete D[V]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const V in D){const W=D[V];for(const K in W)h(W[K].object),delete W[K];delete D[V]}delete n[M.id]}function R(M){for(const D in n){const V=n[D];if(V[M.id]===void 0)continue;const W=V[M.id];for(const K in W)h(W[K].object),delete W[K];delete V[M.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function s_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function r_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ti&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===To&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fi&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:E,maxSamples:S}}function o_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Rs,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=h(g,f,y,d);for(let E=0;E!==y;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function a_(i){let e=new WeakMap;function t(o,a){return a===yl?o.mapping=br:a===Ml&&(o.mapping=Sr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yl||a===Ml)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new _m(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Mh extends Kd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pr=4,Au=[.125,.215,.35,.446,.526,.582],Is=20,Mc=new Mh,Ru=new st;let bc=null,Sc=0,wc=0,Ec=!1;const Cs=(1+Math.sqrt(5))/2,tr=1/Cs,Cu=[new I(-Cs,tr,0),new I(Cs,tr,0),new I(-tr,0,Cs),new I(tr,0,Cs),new I(0,Cs,-tr),new I(0,Cs,tr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,Sc,wc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:To,format:ti,colorSpace:Nn,depthBuffer:!1},s=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=c_(r)),this._blurMaterial=l_(r,e,t)}return s}_compileMaterial(e){const t=new ve(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,s){const a=new Cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ru),h.toneMapping=ds,h.autoClear=!1;const d=new Ln({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new ve(new en,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Ru),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Jo(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===br||e.mapping===Sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Mc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cu[(s-r-1)%Cu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ve(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Is-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Is;m>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Is}`);const p=[];let v=0;for(let R=0;R<Is;++R){const C=R/_,b=Math.exp(-C*C/2);p.push(b),R===0?v+=b:R<m&&(v+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const x=this._sizeLods[s],E=3*x*(s>y-pr?s-y+pr:0),S=4*(this._cubeSize-x);Jo(t,E,S,3*x,2*x),c.setRenderTarget(t),c.render(u,Mc)}}function c_(i){const e=[],t=[],n=[];let s=i;const r=i-pr+1+Au.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-pr?c=Au[o-i+pr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let S=0;S<d;S++){const R=S%3*2/3-1,C=S>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];v.set(b,_*g*S),y.set(f,m*g*S);const M=[S,S,S,S,S,S];x.set(M,p*g*S)}const E=new Ht;E.setAttribute("position",new wn(v,_)),E.setAttribute("uv",new wn(y,m)),E.setAttribute("faceIndex",new wn(x,p)),e.push(E),s>pr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pu(i,e,t){const n=new Os(i,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Jo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function l_(i,e,t){const n=new Float32Array(Is),s=new I(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bh(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Lu(){return new ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Iu(){return new ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function bh(){return`

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
	`}function h_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===yl||c===Ml,h=c===br||c===Sr;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new jl(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new jl(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function u_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&oo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function f_(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let y=0,x=v.length;y<x;y+=3){const E=v[y+0],S=v[y+1],R=v[y+2];f.push(E,S,S,R,R,E)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const E=y+0,S=y+1,R=y+2;f.push(E,S,S,R,R,E)}}else return;const m=new(Vd(f)?Yd:qd)(f,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function d_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function p_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m_(i,e,t){const n=new WeakMap,s=new Mt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let E=a.attributes.position.count*x,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*S*4*u),C=new Wd(R,E,S,u);C.type=fi,C.needsUpdate=!0;const b=x*4;for(let D=0;D<u;D++){const V=p[D],W=v[D],K=y[D],j=E*S*4*D;for(let Y=0;Y<V.count;Y++){const ie=Y*b;g===!0&&(s.fromBufferAttribute(V,Y),R[j+ie+0]=s.x,R[j+ie+1]=s.y,R[j+ie+2]=s.z,R[j+ie+3]=0),_===!0&&(s.fromBufferAttribute(W,Y),R[j+ie+4]=s.x,R[j+ie+5]=s.y,R[j+ie+6]=s.z,R[j+ie+7]=0),m===!0&&(s.fromBufferAttribute(K,Y),R[j+ie+8]=s.x,R[j+ie+9]=s.y,R[j+ie+10]=s.z,R[j+ie+11]=K.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new ye(E,S)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function g_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Jd extends tn{constructor(e,t,n,s,r,o,a,c,l,h=xr){if(h!==xr&&h!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xr&&(n=Us),n===void 0&&h===Er&&(n=wr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:In,this.minFilter=c!==void 0?c:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qd=new tn,Du=new Jd(1,1),ep=new Wd,tp=new nm,np=new jd,Nu=[],Uu=[],Ou=new Float32Array(16),ku=new Float32Array(9),Fu=new Float32Array(4);function Ir(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Va(i,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function x_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function __(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function v_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function M_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Fu.set(n),i.uniformMatrix2fv(this.addr,!1,Fu),sn(t,n)}}function b_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;ku.set(n),i.uniformMatrix3fv(this.addr,!1,ku),sn(t,n)}}function S_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Ou.set(n),i.uniformMatrix4fv(this.addr,!1,Ou),sn(t,n)}}function w_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function E_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function T_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function A_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function R_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function C_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function P_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function L_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function I_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Du.compareFunction=Hd,r=Du):r=Qd,t.setTexture2D(e||r,s)}function D_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||tp,s)}function N_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||np,s)}function U_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ep,s)}function O_(i){switch(i){case 5126:return x_;case 35664:return __;case 35665:return v_;case 35666:return y_;case 35674:return M_;case 35675:return b_;case 35676:return S_;case 5124:case 35670:return w_;case 35667:case 35671:return E_;case 35668:case 35672:return T_;case 35669:case 35673:return A_;case 5125:return R_;case 36294:return C_;case 36295:return P_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return U_}}function k_(i,e){i.uniform1fv(this.addr,e)}function F_(i,e){const t=Ir(e,this.size,2);i.uniform2fv(this.addr,t)}function B_(i,e){const t=Ir(e,this.size,3);i.uniform3fv(this.addr,t)}function z_(i,e){const t=Ir(e,this.size,4);i.uniform4fv(this.addr,t)}function H_(i,e){const t=Ir(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V_(i,e){const t=Ir(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function G_(i,e){const t=Ir(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function W_(i,e){i.uniform1iv(this.addr,e)}function X_(i,e){i.uniform2iv(this.addr,e)}function q_(i,e){i.uniform3iv(this.addr,e)}function Y_(i,e){i.uniform4iv(this.addr,e)}function $_(i,e){i.uniform1uiv(this.addr,e)}function K_(i,e){i.uniform2uiv(this.addr,e)}function j_(i,e){i.uniform3uiv(this.addr,e)}function Z_(i,e){i.uniform4uiv(this.addr,e)}function J_(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Qd,r[o])}function Q_(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||tp,r[o])}function ev(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||np,r[o])}function tv(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ep,r[o])}function nv(i){switch(i){case 5126:return k_;case 35664:return F_;case 35665:return B_;case 35666:return z_;case 35674:return H_;case 35675:return V_;case 35676:return G_;case 5124:case 35670:return W_;case 35667:case 35671:return X_;case 35668:case 35672:return q_;case 35669:case 35673:return Y_;case 5125:return $_;case 36294:return K_;case 36295:return j_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}class iv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=O_(t.type)}}class sv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nv(t.type)}}class rv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function Bu(i,e){i.seq.push(e),i.map[e.id]=e}function ov(i,e,t){const n=i.name,s=n.length;for(Tc.lastIndex=0;;){const r=Tc.exec(n),o=Tc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bu(t,l===void 0?new iv(a,i,e):new sv(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new rv(a),Bu(t,u)),t=u}}}class Aa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ov(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function zu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const av=37297;let cv=0;function lv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Hu=new lt;function hv(i){mt._getMatrix(Hu,mt.workingColorSpace,i);const e=`mat3( ${Hu.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Ha:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+lv(i.getShaderSource(e),o)}else return s}function uv(i,e){const t=hv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fv(i,e){let t;switch(e){case f0:t="Linear";break;case d0:t="Reinhard";break;case p0:t="Cineon";break;case Ad:t="ACESFilmic";break;case g0:t="AgX";break;case x0:t="Neutral";break;case m0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qo=new I;function dv(){mt.getLuminanceCoefficients(Qo);const i=Qo.x.toFixed(4),e=Qo.y.toFixed(4),t=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function mv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ao(i){return i!==""}function Gu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(i){return i.replace(xv,vv)}const _v=new Map;function vv(i,e){let t=ht[e];if(t===void 0){const n=_v.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(i){return i.replace(yv,Mv)}function Mv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Sv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case br:case Sr:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ev(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Td:e="ENVMAP_BLENDING_MULTIPLY";break;case h0:e="ENVMAP_BLENDING_MIX";break;case u0:e="ENVMAP_BLENDING_ADD";break}return e}function Tv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Av(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=bv(t),l=Sv(t),h=wv(t),u=Ev(t),f=Tv(t),d=pv(t),g=mv(r),_=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ao).join(`
`),p.length>0&&(p+=`
`)):(m=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),p=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?ht.tonemapping_pars_fragment:"",t.toneMapping!==ds?fv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,uv("linearToOutputTexel",t.outputColorSpace),dv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),o=Zl(o),o=Gu(o,t),o=Wu(o,t),a=Zl(a),a=Gu(a,t),a=Wu(a,t),o=Xu(o),a=Xu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,E=zu(s,s.VERTEX_SHADER,y),S=zu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,E),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(D){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),W=s.getShaderInfoLog(E).trim(),K=s.getShaderInfoLog(S).trim();let j=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,S);else{const ie=Vu(s,E,"vertex"),F=Vu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+ie+`
`+F)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||K==="")&&(Y=!1);Y&&(D.diagnostics={runnable:j,programLog:V,vertexShader:{log:W,prefix:m},fragmentShader:{log:K,prefix:p}})}s.deleteShader(E),s.deleteShader(S),C=new Aa(s,_),b=gv(s,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,av)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=S,this}let Rv=0;class Cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pv(e),t.set(e,n)),n}}class Pv{constructor(e){this.id=Rv++,this.code=e,this.usedTimes=0}}function Lv(i,e,t,n,s,r,o){const a=new vh,c=new Cv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,D,V,W){const K=V.fog,j=W.geometry,Y=b.isMeshStandardMaterial?V.environment:null,ie=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),F=ie&&ie.mapping===za?ie.image.height:null,le=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const he=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=he!==void 0?he.length:0;let Be=0;j.morphAttributes.position!==void 0&&(Be=1),j.morphAttributes.normal!==void 0&&(Be=2),j.morphAttributes.color!==void 0&&(Be=3);let Ye,ne,fe,pe;if(le){const _t=Mi[le];Ye=_t.vertexShader,ne=_t.fragmentShader}else Ye=b.vertexShader,ne=b.fragmentShader,c.update(b),fe=c.getVertexShaderID(b),pe=c.getFragmentShaderID(b);const ue=i.getRenderTarget(),De=i.state.buffers.depth.getReversed(),ze=W.isInstancedMesh===!0,Pe=W.isBatchedMesh===!0,je=!!b.map,ae=!!b.matcap,xe=!!ie,N=!!b.aoMap,re=!!b.lightMap,k=!!b.bumpMap,B=!!b.normalMap,z=!!b.displacementMap,de=!!b.emissiveMap,me=!!b.metalnessMap,L=!!b.roughnessMap,A=b.anisotropy>0,X=b.clearcoat>0,oe=b.dispersion>0,ge=b.iridescence>0,ce=b.sheen>0,Ie=b.transmission>0,Te=A&&!!b.anisotropyMap,Re=X&&!!b.clearcoatMap,rt=X&&!!b.clearcoatNormalMap,H=X&&!!b.clearcoatRoughnessMap,Ee=ge&&!!b.iridescenceMap,Ue=ge&&!!b.iridescenceThicknessMap,Ze=ce&&!!b.sheenColorMap,Ce=ce&&!!b.sheenRoughnessMap,U=!!b.specularMap,Q=!!b.specularColorMap,we=!!b.specularIntensityMap,O=Ie&&!!b.transmissionMap,_e=Ie&&!!b.thicknessMap,$=!!b.gradientMap,se=!!b.alphaMap,be=b.alphaTest>0,Me=!!b.alphaHash,Qe=!!b.extensions;let zt=ds;b.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(zt=i.toneMapping);const on={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Ye,fragmentShader:ne,defines:b.defines,customVertexShaderID:fe,customFragmentShaderID:pe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&W._colorsTexture!==null,instancing:ze,instancingColor:ze&&W.instanceColor!==null,instancingMorph:ze&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Nn,alphaToCoverage:!!b.alphaToCoverage,map:je,matcap:ae,envMap:xe,envMapMode:xe&&ie.mapping,envMapCubeUVHeight:F,aoMap:N,lightMap:re,bumpMap:k,normalMap:B,displacementMap:f&&z,emissiveMap:de,normalMapObjectSpace:B&&b.normalMapType===S0,normalMapTangentSpace:B&&b.normalMapType===zd,metalnessMap:me,roughnessMap:L,anisotropy:A,anisotropyMap:Te,clearcoat:X,clearcoatMap:Re,clearcoatNormalMap:rt,clearcoatRoughnessMap:H,dispersion:oe,iridescence:ge,iridescenceMap:Ee,iridescenceThicknessMap:Ue,sheen:ce,sheenColorMap:Ze,sheenRoughnessMap:Ce,specularMap:U,specularColorMap:Q,specularIntensityMap:we,transmission:Ie,transmissionMap:O,thicknessMap:_e,gradientMap:$,opaque:b.transparent===!1&&b.blending===gr&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:be,alphaHash:Me,combine:b.combine,mapUv:je&&_(b.map.channel),aoMapUv:N&&_(b.aoMap.channel),lightMapUv:re&&_(b.lightMap.channel),bumpMapUv:k&&_(b.bumpMap.channel),normalMapUv:B&&_(b.normalMap.channel),displacementMapUv:z&&_(b.displacementMap.channel),emissiveMapUv:de&&_(b.emissiveMap.channel),metalnessMapUv:me&&_(b.metalnessMap.channel),roughnessMapUv:L&&_(b.roughnessMap.channel),anisotropyMapUv:Te&&_(b.anisotropyMap.channel),clearcoatMapUv:Re&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(b.sheenRoughnessMap.channel),specularMapUv:U&&_(b.specularMap.channel),specularColorMapUv:Q&&_(b.specularColorMap.channel),specularIntensityMapUv:we&&_(b.specularIntensityMap.channel),transmissionMapUv:O&&_(b.transmissionMap.channel),thicknessMapUv:_e&&_(b.thicknessMap.channel),alphaMapUv:se&&_(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(B||A),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!j.attributes.uv&&(je||se),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:De,skinning:W.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:je&&b.map.isVideoTexture===!0&&mt.getTransfer(b.map.colorSpace)===Ct,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&mt.getTransfer(b.emissiveMap.colorSpace)===Ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ot,flipSided:b.side===Sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Qe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&b.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return on.vertexUv1s=l.has(1),on.vertexUv2s=l.has(2),on.vertexUv3s=l.has(3),l.clear(),on}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const M=g[b.type];let D;if(M){const V=Mi[M];D=pm.clone(V.uniforms)}else D=b.uniforms;return D}function E(b,M){let D;for(let V=0,W=h.length;V<W;V++){const K=h[V];if(K.cacheKey===M){D=K,++D.usedTimes;break}}return D===void 0&&(D=new Av(i,M,b,r),h.push(D)),D}function S(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:S,releaseShaderCache:R,programs:h,dispose:C}}function Iv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Dv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $u(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Dv),n.length>1&&n.sort(f||Yu),s.length>1&&s.sort(f||Yu)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Nv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new $u,i.set(n,[o])):s>=r.length?(o=new $u,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Uv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new st};break;case"SpotLight":t={position:new I,direction:new I,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Ov(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kv=0;function Fv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bv(i){const e=new Uv,t=Ov(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new ot,o=new ot;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,E=0,S=0,R=0;l.sort(Fv);for(let b=0,M=l.length;b<M;b++){const D=l[b],V=D.color,W=D.intensity,K=D.distance,j=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=V.r*W,u+=V.g*W,f+=V.b*W;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],W);R++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ie=D.shadow,F=t.get(D);F.shadowIntensity=ie.intensity,F.shadowBias=ie.bias,F.shadowNormalBias=ie.normalBias,F.shadowRadius=ie.radius,F.shadowMapSize=ie.mapSize,n.directionalShadow[d]=F,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=D.shadow.matrix,v++}n.directional[d]=Y,d++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(V).multiplyScalar(W),Y.distance=K,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[_]=Y;const ie=D.shadow;if(D.map&&(n.spotLightMap[E]=D.map,E++,ie.updateMatrices(D),D.castShadow&&S++),n.spotLightMatrix[_]=ie.matrix,D.castShadow){const F=t.get(D);F.shadowIntensity=ie.intensity,F.shadowBias=ie.bias,F.shadowNormalBias=ie.normalBias,F.shadowRadius=ie.radius,F.shadowMapSize=ie.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=j,x++}_++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(V).multiplyScalar(W),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const ie=D.shadow,F=t.get(D);F.shadowIntensity=ie.intensity,F.shadowBias=ie.bias,F.shadowNormalBias=ie.normalBias,F.shadowRadius=ie.radius,F.shadowMapSize=ie.mapSize,F.shadowCameraNear=ie.camera.near,F.shadowCameraFar=ie.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=Y,g++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(W),Y.groundColor.copy(D.groundColor).multiplyScalar(W),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==E||C.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+E-S,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=E,C.numLightProbes=R,n.version=kv++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Ku(i){const e=new Bv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function zv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ku(i),e.set(s,[a])):r>=o.length?(a=new Ku(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Hv extends di{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=M0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vv extends di{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wv=`uniform sampler2D shadow_pass;
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
}`;function Xv(i,e,t){let n=new yh;const s=new ye,r=new ye,o=new Mt,a=new Hv({depthPacking:b0}),c=new Vv,l={},h=t.maxTextureSize,u={[qi]:Sn,[Sn]:qi,[Ot]:Ot},f=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Gv,fragmentShader:Wv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ve(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wd;let p=this.type;this.render=function(S,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),V=i.state;V.setBlending(fs),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=p!==ki&&this.type===ki,K=p===ki&&this.type!==ki;for(let j=0,Y=S.length;j<Y;j++){const ie=S[j],F=ie.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const le=F.getFrameExtents();if(s.multiply(le),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,F.mapSize.y=r.y)),F.map===null||W===!0||K===!0){const Se=this.type!==ki?{minFilter:In,magFilter:In}:{};F.map!==null&&F.map.dispose(),F.map=new Os(s.x,s.y,Se),F.map.texture.name=ie.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const he=F.getViewportCount();for(let Se=0;Se<he;Se++){const Be=F.getViewport(Se);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),V.viewport(o),F.updateMatrices(ie,Se),n=F.getFrustum(),x(R,C,F.camera,ie,this.type)}F.isPointLightShadow!==!0&&this.type===ki&&v(F,C),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,D)};function v(S,R){const C=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Os(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,C,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,C,d,_,null)}function y(S,R,C,b){let M=null;const D=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)M=D;else if(M=C.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=M.uuid,W=R.uuid;let K=l[V];K===void 0&&(K={},l[V]=K);let j=K[W];j===void 0&&(j=M.clone(),K[W]=j,R.addEventListener("dispose",E)),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,b===ki?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=C}return M}function x(S,R,C,b,M){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===ki)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const W=e.update(S),K=S.material;if(Array.isArray(K)){const j=W.groups;for(let Y=0,ie=j.length;Y<ie;Y++){const F=j[Y],le=K[F.materialIndex];if(le&&le.visible){const he=y(S,le,b,M);S.onBeforeShadow(i,S,R,C,W,he,F),i.renderBufferDirect(C,null,W,he,S,F),S.onAfterShadow(i,S,R,C,W,he,F)}}}else if(K.visible){const j=y(S,K,b,M);S.onBeforeShadow(i,S,R,C,W,j,null),i.renderBufferDirect(C,null,W,j,S,null),S.onAfterShadow(i,S,R,C,W,j,null)}}const V=S.children;for(let W=0,K=V.length;W<K;W++)x(V[W],R,C,b,M)}function E(S){S.target.removeEventListener("dispose",E);for(const C in l){const b=l[C],M=S.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const qv={[dl]:pl,[ml]:_l,[gl]:vl,[Mr]:xl,[pl]:dl,[_l]:ml,[vl]:gl,[xl]:Mr};function Yv(i,e){function t(){let O=!1;const _e=new Mt;let $=null;const se=new Mt(0,0,0,0);return{setMask:function(be){$!==be&&!O&&(i.colorMask(be,be,be,be),$=be)},setLocked:function(be){O=be},setClear:function(be,Me,Qe,zt,on){on===!0&&(be*=zt,Me*=zt,Qe*=zt),_e.set(be,Me,Qe,zt),se.equals(_e)===!1&&(i.clearColor(be,Me,Qe,zt),se.copy(_e))},reset:function(){O=!1,$=null,se.set(-1,0,0,0)}}}function n(){let O=!1,_e=!1,$=null,se=null,be=null;return{setReversed:function(Me){if(_e!==Me){const Qe=e.get("EXT_clip_control");_e?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const zt=be;be=null,this.setClear(zt)}_e=Me},getReversed:function(){return _e},setTest:function(Me){Me?ue(i.DEPTH_TEST):De(i.DEPTH_TEST)},setMask:function(Me){$!==Me&&!O&&(i.depthMask(Me),$=Me)},setFunc:function(Me){if(_e&&(Me=qv[Me]),se!==Me){switch(Me){case dl:i.depthFunc(i.NEVER);break;case pl:i.depthFunc(i.ALWAYS);break;case ml:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case gl:i.depthFunc(i.EQUAL);break;case xl:i.depthFunc(i.GEQUAL);break;case _l:i.depthFunc(i.GREATER);break;case vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=Me}},setLocked:function(Me){O=Me},setClear:function(Me){be!==Me&&(_e&&(Me=1-Me),i.clearDepth(Me),be=Me)},reset:function(){O=!1,$=null,se=null,be=null,_e=!1}}}function s(){let O=!1,_e=null,$=null,se=null,be=null,Me=null,Qe=null,zt=null,on=null;return{setTest:function(_t){O||(_t?ue(i.STENCIL_TEST):De(i.STENCIL_TEST))},setMask:function(_t){_e!==_t&&!O&&(i.stencilMask(_t),_e=_t)},setFunc:function(_t,ii,Ri){($!==_t||se!==ii||be!==Ri)&&(i.stencilFunc(_t,ii,Ri),$=_t,se=ii,be=Ri)},setOp:function(_t,ii,Ri){(Me!==_t||Qe!==ii||zt!==Ri)&&(i.stencilOp(_t,ii,Ri),Me=_t,Qe=ii,zt=Ri)},setLocked:function(_t){O=_t},setClear:function(_t){on!==_t&&(i.clearStencil(_t),on=_t)},reset:function(){O=!1,_e=null,$=null,se=null,be=null,Me=null,Qe=null,zt=null,on=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,E=null,S=null,R=new st(0,0,0),C=0,b=!1,M=null,D=null,V=null,W=null,K=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ie=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(F)[1]),Y=ie>=1):F.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),Y=ie>=2);let le=null,he={};const Se=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ye=new Mt().fromArray(Se),ne=new Mt().fromArray(Be);function fe(O,_e,$,se){const be=new Uint8Array(4),Me=i.createTexture();i.bindTexture(O,Me),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<$;Qe++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(_e+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return Me}const pe={};pe[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(i.DEPTH_TEST),o.setFunc(Mr),k(!1),B(Zh),ue(i.CULL_FACE),N(fs);function ue(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function De(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function ze(O,_e){return u[O]!==_e?(i.bindFramebuffer(O,_e),u[O]=_e,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Pe(O,_e){let $=d,se=!1;if(O){$=f.get(_e),$===void 0&&($=[],f.set(_e,$));const be=O.textures;if($.length!==be.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Qe=be.length;Me<Qe;Me++)$[Me]=i.COLOR_ATTACHMENT0+Me;$.length=be.length,se=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,se=!0);se&&i.drawBuffers($)}function je(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const ae={[Ls]:i.FUNC_ADD,[Yp]:i.FUNC_SUBTRACT,[$p]:i.FUNC_REVERSE_SUBTRACT};ae[Kp]=i.MIN,ae[jp]=i.MAX;const xe={[Zp]:i.ZERO,[Jp]:i.ONE,[Qp]:i.SRC_COLOR,[ul]:i.SRC_ALPHA,[r0]:i.SRC_ALPHA_SATURATE,[i0]:i.DST_COLOR,[t0]:i.DST_ALPHA,[e0]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[s0]:i.ONE_MINUS_DST_COLOR,[n0]:i.ONE_MINUS_DST_ALPHA,[o0]:i.CONSTANT_COLOR,[a0]:i.ONE_MINUS_CONSTANT_COLOR,[c0]:i.CONSTANT_ALPHA,[l0]:i.ONE_MINUS_CONSTANT_ALPHA};function N(O,_e,$,se,be,Me,Qe,zt,on,_t){if(O===fs){_===!0&&(De(i.BLEND),_=!1);return}if(_===!1&&(ue(i.BLEND),_=!0),O!==qp){if(O!==m||_t!==b){if((p!==Ls||x!==Ls)&&(i.blendEquation(i.FUNC_ADD),p=Ls,x=Ls),_t)switch(O){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.ONE,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,y=null,E=null,S=null,R.set(0,0,0),C=0,m=O,b=_t}return}be=be||_e,Me=Me||$,Qe=Qe||se,(_e!==p||be!==x)&&(i.blendEquationSeparate(ae[_e],ae[be]),p=_e,x=be),($!==v||se!==y||Me!==E||Qe!==S)&&(i.blendFuncSeparate(xe[$],xe[se],xe[Me],xe[Qe]),v=$,y=se,E=Me,S=Qe),(zt.equals(R)===!1||on!==C)&&(i.blendColor(zt.r,zt.g,zt.b,on),R.copy(zt),C=on),m=O,b=!1}function re(O,_e){O.side===Ot?De(i.CULL_FACE):ue(i.CULL_FACE);let $=O.side===Sn;_e&&($=!$),k($),O.blending===gr&&O.transparent===!1?N(fs):N(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const se=O.stencilWrite;a.setTest(se),se&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),de(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):De(i.SAMPLE_ALPHA_TO_COVERAGE)}function k(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function B(O){O!==Wp?(ue(i.CULL_FACE),O!==D&&(O===Zh?i.cullFace(i.BACK):O===Xp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):De(i.CULL_FACE),D=O}function z(O){O!==V&&(Y&&i.lineWidth(O),V=O)}function de(O,_e,$){O?(ue(i.POLYGON_OFFSET_FILL),(W!==_e||K!==$)&&(i.polygonOffset(_e,$),W=_e,K=$)):De(i.POLYGON_OFFSET_FILL)}function me(O){O?ue(i.SCISSOR_TEST):De(i.SCISSOR_TEST)}function L(O){O===void 0&&(O=i.TEXTURE0+j-1),le!==O&&(i.activeTexture(O),le=O)}function A(O,_e,$){$===void 0&&(le===null?$=i.TEXTURE0+j-1:$=le);let se=he[$];se===void 0&&(se={type:void 0,texture:void 0},he[$]=se),(se.type!==O||se.texture!==_e)&&(le!==$&&(i.activeTexture($),le=$),i.bindTexture(O,_e||pe[O]),se.type=O,se.texture=_e)}function X(){const O=he[le];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(O){Ye.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ye.copy(O))}function Ce(O){ne.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function U(O,_e){let $=l.get(_e);$===void 0&&($=new WeakMap,l.set(_e,$));let se=$.get(O);se===void 0&&(se=i.getUniformBlockIndex(_e,O.name),$.set(O,se))}function Q(O,_e){const se=l.get(_e).get(O);c.get(_e)!==se&&(i.uniformBlockBinding(_e,se,O.__bindingPointIndex),c.set(_e,se))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,he={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,E=null,S=null,R=new st(0,0,0),C=0,b=!1,M=null,D=null,V=null,W=null,K=null,Ye.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ue,disable:De,bindFramebuffer:ze,drawBuffers:Pe,useProgram:je,setBlending:N,setMaterial:re,setFlipSided:k,setCullFace:B,setLineWidth:z,setPolygonOffset:de,setScissorTest:me,activeTexture:L,bindTexture:A,unbindTexture:X,compressedTexImage2D:oe,compressedTexImage3D:ge,texImage2D:Ee,texImage3D:Ue,updateUBOMapping:U,uniformBlockBinding:Q,texStorage2D:rt,texStorage3D:H,texSubImage2D:ce,texSubImage3D:Ie,compressedTexSubImage2D:Te,compressedTexSubImage3D:Re,scissor:Ze,viewport:Ce,reset:we}}function ju(i,e,t,n){const s=$v(n);switch(t){case Dd:return i*e;case Ud:return i*e;case Od:return i*e*2;case ph:return i*e/s.components*s.byteLength;case mh:return i*e/s.components*s.byteLength;case kd:return i*e*2/s.components*s.byteLength;case gh:return i*e*2/s.components*s.byteLength;case Nd:return i*e*3/s.components*s.byteLength;case ti:return i*e*4/s.components*s.byteLength;case xh:return i*e*4/s.components*s.byteLength;case ba:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wa:case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sl:case El:return Math.max(i,16)*Math.max(e,8)/4;case bl:case wl:return Math.max(i,8)*Math.max(e,8)/2;case Tl:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ta:case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fd:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ql:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $v(i){switch(i){case Yi:case Pd:return{byteLength:1,components:1};case xo:case Ld:case To:return{byteLength:2,components:1};case fh:case dh:return{byteLength:2,components:4};case Us:case uh:case fi:return{byteLength:4,components:1};case Id:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Kv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return d?new OffscreenCanvas(L,A):yo("canvas")}function _(L,A,X){let oe=1;const ge=me(L);if((ge.width>X||ge.height>X)&&(oe=X/Math.max(ge.width,ge.height)),oe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ce=Math.floor(oe*ge.width),Ie=Math.floor(oe*ge.height);u===void 0&&(u=g(ce,Ie));const Te=A?g(ce,Ie):u;return Te.width=ce,Te.height=Ie,Te.getContext("2d").drawImage(L,0,0,ce,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+Ie+")."),Te}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,A,X,oe,ge=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ce=A;if(A===i.RED&&(X===i.FLOAT&&(ce=i.R32F),X===i.HALF_FLOAT&&(ce=i.R16F),X===i.UNSIGNED_BYTE&&(ce=i.R8)),A===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.R8UI),X===i.UNSIGNED_SHORT&&(ce=i.R16UI),X===i.UNSIGNED_INT&&(ce=i.R32UI),X===i.BYTE&&(ce=i.R8I),X===i.SHORT&&(ce=i.R16I),X===i.INT&&(ce=i.R32I)),A===i.RG&&(X===i.FLOAT&&(ce=i.RG32F),X===i.HALF_FLOAT&&(ce=i.RG16F),X===i.UNSIGNED_BYTE&&(ce=i.RG8)),A===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RG8UI),X===i.UNSIGNED_SHORT&&(ce=i.RG16UI),X===i.UNSIGNED_INT&&(ce=i.RG32UI),X===i.BYTE&&(ce=i.RG8I),X===i.SHORT&&(ce=i.RG16I),X===i.INT&&(ce=i.RG32I)),A===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),X===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),X===i.UNSIGNED_INT&&(ce=i.RGB32UI),X===i.BYTE&&(ce=i.RGB8I),X===i.SHORT&&(ce=i.RGB16I),X===i.INT&&(ce=i.RGB32I)),A===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),X===i.UNSIGNED_INT&&(ce=i.RGBA32UI),X===i.BYTE&&(ce=i.RGBA8I),X===i.SHORT&&(ce=i.RGBA16I),X===i.INT&&(ce=i.RGBA32I)),A===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),A===i.RGBA){const Ie=ge?Ha:mt.getTransfer(oe);X===i.FLOAT&&(ce=i.RGBA32F),X===i.HALF_FLOAT&&(ce=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ce=Ie===Ct?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(L,A){let X;return L?A===null||A===Us||A===wr?X=i.DEPTH24_STENCIL8:A===fi?X=i.DEPTH32F_STENCIL8:A===xo&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Us||A===wr?X=i.DEPTH_COMPONENT24:A===fi?X=i.DEPTH_COMPONENT32F:A===xo&&(X=i.DEPTH_COMPONENT16),X}function E(L,A){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==In&&L.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function S(L){const A=L.target;A.removeEventListener("dispose",S),C(A),A.isVideoTexture&&h.delete(A)}function R(L){const A=L.target;A.removeEventListener("dispose",R),M(A)}function C(L){const A=n.get(L);if(A.__webglInit===void 0)return;const X=L.source,oe=f.get(X);if(oe){const ge=oe[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(L),Object.keys(oe).length===0&&f.delete(X)}n.remove(L)}function b(L){const A=n.get(L);i.deleteTexture(A.__webglTexture);const X=L.source,oe=f.get(X);delete oe[A.__cacheKey],o.memory.textures--}function M(L){const A=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(A.__webglFramebuffer[oe]))for(let ge=0;ge<A.__webglFramebuffer[oe].length;ge++)i.deleteFramebuffer(A.__webglFramebuffer[oe][ge]);else i.deleteFramebuffer(A.__webglFramebuffer[oe]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[oe])}else{if(Array.isArray(A.__webglFramebuffer))for(let oe=0;oe<A.__webglFramebuffer.length;oe++)i.deleteFramebuffer(A.__webglFramebuffer[oe]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let oe=0;oe<A.__webglColorRenderbuffer.length;oe++)A.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[oe]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const X=L.textures;for(let oe=0,ge=X.length;oe<ge;oe++){const ce=n.get(X[oe]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(X[oe])}n.remove(L)}let D=0;function V(){D=0}function W(){const L=D;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),D+=1,L}function K(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function j(L,A){const X=n.get(L);if(L.isVideoTexture&&z(L),L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){const oe=L.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(X,L,A);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+A)}function Y(L,A){const X=n.get(L);if(L.version>0&&X.__version!==L.version){ne(X,L,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+A)}function ie(L,A){const X=n.get(L);if(L.version>0&&X.__version!==L.version){ne(X,L,A);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+A)}function F(L,A){const X=n.get(L);if(L.version>0&&X.__version!==L.version){fe(X,L,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+A)}const le={[pi]:i.REPEAT,[hs]:i.CLAMP_TO_EDGE,[Ca]:i.MIRRORED_REPEAT},he={[In]:i.NEAREST,[Cd]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[Ma]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},Se={[w0]:i.NEVER,[P0]:i.ALWAYS,[E0]:i.LESS,[Hd]:i.LEQUAL,[T0]:i.EQUAL,[C0]:i.GEQUAL,[A0]:i.GREATER,[R0]:i.NOTEQUAL};function Be(L,A){if(A.type===fi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Yn||A.magFilter===Ma||A.magFilter===ro||A.magFilter===Vi||A.minFilter===Yn||A.minFilter===Ma||A.minFilter===ro||A.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,le[A.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,le[A.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,le[A.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,he[A.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,he[A.minFilter]),A.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Se[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===In||A.minFilter!==ro&&A.minFilter!==Vi||A.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Ye(L,A){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",S));const oe=A.source;let ge=f.get(oe);ge===void 0&&(ge={},f.set(oe,ge));const ce=K(A);if(ce!==L.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ge[ce].usedTimes++;const Ie=ge[L.__cacheKey];Ie!==void 0&&(ge[L.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(A)),L.__cacheKey=ce,L.__webglTexture=ge[ce].texture}return X}function ne(L,A,X){let oe=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(oe=i.TEXTURE_3D);const ge=Ye(L,A),ce=A.source;t.bindTexture(oe,L.__webglTexture,i.TEXTURE0+X);const Ie=n.get(ce);if(ce.version!==Ie.__version||ge===!0){t.activeTexture(i.TEXTURE0+X);const Te=mt.getPrimaries(mt.workingColorSpace),Re=A.colorSpace===cs?null:mt.getPrimaries(A.colorSpace),rt=A.colorSpace===cs||Te===Re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let H=_(A.image,!1,s.maxTextureSize);H=de(A,H);const Ee=r.convert(A.format,A.colorSpace),Ue=r.convert(A.type);let Ze=y(A.internalFormat,Ee,Ue,A.colorSpace,A.isVideoTexture);Be(oe,A);let Ce;const U=A.mipmaps,Q=A.isVideoTexture!==!0,we=Ie.__version===void 0||ge===!0,O=ce.dataReady,_e=E(A,H);if(A.isDepthTexture)Ze=x(A.format===Er,A.type),we&&(Q?t.texStorage2D(i.TEXTURE_2D,1,Ze,H.width,H.height):t.texImage2D(i.TEXTURE_2D,0,Ze,H.width,H.height,0,Ee,Ue,null));else if(A.isDataTexture)if(U.length>0){Q&&we&&t.texStorage2D(i.TEXTURE_2D,_e,Ze,U[0].width,U[0].height);for(let $=0,se=U.length;$<se;$++)Ce=U[$],Q?O&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Ee,Ue,Ce.data):t.texImage2D(i.TEXTURE_2D,$,Ze,Ce.width,Ce.height,0,Ee,Ue,Ce.data);A.generateMipmaps=!1}else Q?(we&&t.texStorage2D(i.TEXTURE_2D,_e,Ze,H.width,H.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,H.width,H.height,Ee,Ue,H.data)):t.texImage2D(i.TEXTURE_2D,0,Ze,H.width,H.height,0,Ee,Ue,H.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Q&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ze,U[0].width,U[0].height,H.depth);for(let $=0,se=U.length;$<se;$++)if(Ce=U[$],A.format!==ti)if(Ee!==null)if(Q){if(O)if(A.layerUpdates.size>0){const be=ju(Ce.width,Ce.height,A.format,A.type);for(const Me of A.layerUpdates){const Qe=Ce.data.subarray(Me*be/Ce.data.BYTES_PER_ELEMENT,(Me+1)*be/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Me,Ce.width,Ce.height,1,Ee,Qe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ce.width,Ce.height,H.depth,Ee,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ze,Ce.width,Ce.height,H.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Q?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ce.width,Ce.height,H.depth,Ee,Ue,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Ze,Ce.width,Ce.height,H.depth,0,Ee,Ue,Ce.data)}else{Q&&we&&t.texStorage2D(i.TEXTURE_2D,_e,Ze,U[0].width,U[0].height);for(let $=0,se=U.length;$<se;$++)Ce=U[$],A.format!==ti?Ee!==null?Q?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Ee,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Ze,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Q?O&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ce.width,Ce.height,Ee,Ue,Ce.data):t.texImage2D(i.TEXTURE_2D,$,Ze,Ce.width,Ce.height,0,Ee,Ue,Ce.data)}else if(A.isDataArrayTexture)if(Q){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ze,H.width,H.height,H.depth),O)if(A.layerUpdates.size>0){const $=ju(H.width,H.height,A.format,A.type);for(const se of A.layerUpdates){const be=H.data.subarray(se*$/H.data.BYTES_PER_ELEMENT,(se+1)*$/H.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,H.width,H.height,1,Ee,Ue,be)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,Ee,Ue,H.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ze,H.width,H.height,H.depth,0,Ee,Ue,H.data);else if(A.isData3DTexture)Q?(we&&t.texStorage3D(i.TEXTURE_3D,_e,Ze,H.width,H.height,H.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,Ee,Ue,H.data)):t.texImage3D(i.TEXTURE_3D,0,Ze,H.width,H.height,H.depth,0,Ee,Ue,H.data);else if(A.isFramebufferTexture){if(we)if(Q)t.texStorage2D(i.TEXTURE_2D,_e,Ze,H.width,H.height);else{let $=H.width,se=H.height;for(let be=0;be<_e;be++)t.texImage2D(i.TEXTURE_2D,be,Ze,$,se,0,Ee,Ue,null),$>>=1,se>>=1}}else if(U.length>0){if(Q&&we){const $=me(U[0]);t.texStorage2D(i.TEXTURE_2D,_e,Ze,$.width,$.height)}for(let $=0,se=U.length;$<se;$++)Ce=U[$],Q?O&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,Ee,Ue,Ce):t.texImage2D(i.TEXTURE_2D,$,Ze,Ee,Ue,Ce);A.generateMipmaps=!1}else if(Q){if(we){const $=me(H);t.texStorage2D(i.TEXTURE_2D,_e,Ze,$.width,$.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ue,H)}else t.texImage2D(i.TEXTURE_2D,0,Ze,Ee,Ue,H);m(A)&&p(oe),Ie.__version=ce.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function fe(L,A,X){if(A.image.length!==6)return;const oe=Ye(L,A),ge=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+X);const ce=n.get(ge);if(ge.version!==ce.__version||oe===!0){t.activeTexture(i.TEXTURE0+X);const Ie=mt.getPrimaries(mt.workingColorSpace),Te=A.colorSpace===cs?null:mt.getPrimaries(A.colorSpace),Re=A.colorSpace===cs||Ie===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const rt=A.isCompressedTexture||A.image[0].isCompressedTexture,H=A.image[0]&&A.image[0].isDataTexture,Ee=[];for(let se=0;se<6;se++)!rt&&!H?Ee[se]=_(A.image[se],!0,s.maxCubemapSize):Ee[se]=H?A.image[se].image:A.image[se],Ee[se]=de(A,Ee[se]);const Ue=Ee[0],Ze=r.convert(A.format,A.colorSpace),Ce=r.convert(A.type),U=y(A.internalFormat,Ze,Ce,A.colorSpace),Q=A.isVideoTexture!==!0,we=ce.__version===void 0||oe===!0,O=ge.dataReady;let _e=E(A,Ue);Be(i.TEXTURE_CUBE_MAP,A);let $;if(rt){Q&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,U,Ue.width,Ue.height);for(let se=0;se<6;se++){$=Ee[se].mipmaps;for(let be=0;be<$.length;be++){const Me=$[be];A.format!==ti?Ze!==null?Q?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,0,0,Me.width,Me.height,Ze,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,U,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,0,0,Me.width,Me.height,Ze,Ce,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,be,U,Me.width,Me.height,0,Ze,Ce,Me.data)}}}else{if($=A.mipmaps,Q&&we){$.length>0&&_e++;const se=me(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,U,se.width,se.height)}for(let se=0;se<6;se++)if(H){Q?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ee[se].width,Ee[se].height,Ze,Ce,Ee[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,U,Ee[se].width,Ee[se].height,0,Ze,Ce,Ee[se].data);for(let be=0;be<$.length;be++){const Qe=$[be].image[se].image;Q?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,0,0,Qe.width,Qe.height,Ze,Ce,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,U,Qe.width,Qe.height,0,Ze,Ce,Qe.data)}}else{Q?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ze,Ce,Ee[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,U,Ze,Ce,Ee[se]);for(let be=0;be<$.length;be++){const Me=$[be];Q?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,0,0,Ze,Ce,Me.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,be+1,U,Ze,Ce,Me.image[se])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),ce.__version=ge.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function pe(L,A,X,oe,ge,ce){const Ie=r.convert(X.format,X.colorSpace),Te=r.convert(X.type),Re=y(X.internalFormat,Ie,Te,X.colorSpace),rt=n.get(A),H=n.get(X);if(H.__renderTarget=A,!rt.__hasExternalTextures){const Ee=Math.max(1,A.width>>ce),Ue=Math.max(1,A.height>>ce);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,ce,Re,Ee,Ue,A.depth,0,Ie,Te,null):t.texImage2D(ge,ce,Re,Ee,Ue,0,Ie,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),B(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,ge,H.__webglTexture,0,k(A)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,ge,H.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(L,A,X){if(i.bindRenderbuffer(i.RENDERBUFFER,L),A.depthBuffer){const oe=A.depthTexture,ge=oe&&oe.isDepthTexture?oe.type:null,ce=x(A.stencilBuffer,ge),Ie=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=k(A);B(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,ce,A.width,A.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ce,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,ce,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,L)}else{const oe=A.textures;for(let ge=0;ge<oe.length;ge++){const ce=oe[ge],Ie=r.convert(ce.format,ce.colorSpace),Te=r.convert(ce.type),Re=y(ce.internalFormat,Ie,Te,ce.colorSpace),rt=k(A);X&&B(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Re,A.width,A.height):B(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Re,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Re,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function De(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(A.depthTexture);oe.__renderTarget=A,(!oe.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),j(A.depthTexture,0);const ge=oe.__webglTexture,ce=k(A);if(A.depthTexture.format===xr)B(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(A.depthTexture.format===Er)B(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function ze(L){const A=n.get(L),X=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const oe=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),oe){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,oe.removeEventListener("dispose",ge)};oe.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=oe}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");De(A.__webglFramebuffer,L)}else if(X){A.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[oe]),A.__webglDepthbuffer[oe]===void 0)A.__webglDepthbuffer[oe]=i.createRenderbuffer(),ue(A.__webglDepthbuffer[oe],L,!1);else{const ge=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=A.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),ue(A.__webglDepthbuffer,L,!1);else{const oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(L,A,X){const oe=n.get(L);A!==void 0&&pe(oe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ze(L)}function je(L){const A=L.texture,X=n.get(L),oe=n.get(A);L.addEventListener("dispose",R);const ge=L.textures,ce=L.isWebGLCubeRenderTarget===!0,Ie=ge.length>1;if(Ie||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=A.version,o.memory.textures++),ce){X.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer[Te]=[];for(let Re=0;Re<A.mipmaps.length;Re++)X.__webglFramebuffer[Te][Re]=i.createFramebuffer()}else X.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){X.__webglFramebuffer=[];for(let Te=0;Te<A.mipmaps.length;Te++)X.__webglFramebuffer[Te]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let Te=0,Re=ge.length;Te<Re;Te++){const rt=n.get(ge[Te]);rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&B(L)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Te=0;Te<ge.length;Te++){const Re=ge[Te];X.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[Te]);const rt=r.convert(Re.format,Re.colorSpace),H=r.convert(Re.type),Ee=y(Re.internalFormat,rt,H,Re.colorSpace,L.isXRRenderTarget===!0),Ue=k(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ee,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,X.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ue(X.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Be(i.TEXTURE_CUBE_MAP,A);for(let Te=0;Te<6;Te++)if(A.mipmaps&&A.mipmaps.length>0)for(let Re=0;Re<A.mipmaps.length;Re++)pe(X.__webglFramebuffer[Te][Re],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Re);else pe(X.__webglFramebuffer[Te],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);m(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Te=0,Re=ge.length;Te<Re;Te++){const rt=ge[Te],H=n.get(rt);t.bindTexture(i.TEXTURE_2D,H.__webglTexture),Be(i.TEXTURE_2D,rt),pe(X.__webglFramebuffer,L,rt,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,0),m(rt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,oe.__webglTexture),Be(Te,A),A.mipmaps&&A.mipmaps.length>0)for(let Re=0;Re<A.mipmaps.length;Re++)pe(X.__webglFramebuffer[Re],L,A,i.COLOR_ATTACHMENT0,Te,Re);else pe(X.__webglFramebuffer,L,A,i.COLOR_ATTACHMENT0,Te,0);m(A)&&p(Te),t.unbindTexture()}L.depthBuffer&&ze(L)}function ae(L){const A=L.textures;for(let X=0,oe=A.length;X<oe;X++){const ge=A[X];if(m(ge)){const ce=v(L),Ie=n.get(ge).__webglTexture;t.bindTexture(ce,Ie),p(ce),t.unbindTexture()}}}const xe=[],N=[];function re(L){if(L.samples>0){if(B(L)===!1){const A=L.textures,X=L.width,oe=L.height;let ge=i.COLOR_BUFFER_BIT;const ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(L),Te=A.length>1;if(Te)for(let Re=0;Re<A.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Re=0;Re<A.length;Re++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const rt=n.get(A[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,rt,0)}i.blitFramebuffer(0,0,X,oe,0,0,X,oe,ge,i.NEAREST),c===!0&&(xe.length=0,N.length=0,xe.push(i.COLOR_ATTACHMENT0+Re),L.depthBuffer&&L.resolveDepthBuffer===!1&&(xe.push(ce),N.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let Re=0;Re<A.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Re]);const rt=n.get(A[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,rt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const A=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function k(L){return Math.min(s.maxSamples,L.samples)}function B(L){const A=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function z(L){const A=o.render.frame;h.get(L)!==A&&(h.set(L,A),L.update())}function de(L,A){const X=L.colorSpace,oe=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==Nn&&X!==cs&&(mt.getTransfer(X)===Ct?(oe!==ti||ge!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),A}function me(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=ie,this.setTextureCube=F,this.rebindTextures=Pe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=B}function jv(i,e){function t(n,s=cs){let r;const o=mt.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===fh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Id)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pd)return i.BYTE;if(n===Ld)return i.SHORT;if(n===xo)return i.UNSIGNED_SHORT;if(n===uh)return i.INT;if(n===Us)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===To)return i.HALF_FLOAT;if(n===Dd)return i.ALPHA;if(n===Nd)return i.RGB;if(n===ti)return i.RGBA;if(n===Ud)return i.LUMINANCE;if(n===Od)return i.LUMINANCE_ALPHA;if(n===xr)return i.DEPTH_COMPONENT;if(n===Er)return i.DEPTH_STENCIL;if(n===ph)return i.RED;if(n===mh)return i.RED_INTEGER;if(n===kd)return i.RG;if(n===gh)return i.RG_INTEGER;if(n===xh)return i.RGBA_INTEGER;if(n===ba||n===Sa||n===wa||n===Ea)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===Sl||n===wl||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tl||n===Al||n===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tl||n===Al)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cl||n===Pl||n===Ll||n===Il||n===Dl||n===Nl||n===Ul||n===Ol||n===kl||n===Fl||n===Bl||n===zl||n===Hl||n===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ul)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ta||n===Gl||n===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ta)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fd||n===Xl||n===ql||n===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ta)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Zv extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jv={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e1=`
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

}`;class t1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new tn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ms({vertexShader:Qv,fragmentShader:e1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new ut(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n1 extends zs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new t1,m=t.getContextAttributes();let p=null,v=null;const y=[],x=[],E=new ye;let S=null;const R=new Cn;R.viewport=new Mt;const C=new Cn;C.viewport=new Mt;const b=[R,C],M=new Zv;let D=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=y[ne];return fe===void 0&&(fe=new Ac,y[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=y[ne];return fe===void 0&&(fe=new Ac,y[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=y[ne];return fe===void 0&&(fe=new Ac,y[ne]=fe),fe.getHandSpace()};function W(ne){const fe=x.indexOf(ne.inputSource);if(fe===-1)return;const pe=y[fe];pe!==void 0&&(pe.update(ne.inputSource,ne.frame,l||o),pe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function K(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",j);for(let ne=0;ne<y.length;ne++){const fe=x[ne];fe!==null&&(x[ne]=null,y[ne].disconnect(fe))}D=null,V=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",K),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Os(d.framebufferWidth,d.framebufferHeight,{format:ti,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,pe=null,ue=null;m.depth&&(ue=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Er:xr,pe=m.stencil?wr:Us);const De={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(De),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Os(f.textureWidth,f.textureHeight,{format:ti,type:Yi,depthTexture:new Jd(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(ne){for(let fe=0;fe<ne.removed.length;fe++){const pe=ne.removed[fe],ue=x.indexOf(pe);ue>=0&&(x[ue]=null,y[ue].disconnect(pe))}for(let fe=0;fe<ne.added.length;fe++){const pe=ne.added[fe];let ue=x.indexOf(pe);if(ue===-1){for(let ze=0;ze<y.length;ze++)if(ze>=x.length){x.push(pe),ue=ze;break}else if(x[ze]===null){x[ze]=pe,ue=ze;break}if(ue===-1)break}const De=y[ue];De&&De.connect(pe)}}const Y=new I,ie=new I;function F(ne,fe,pe){Y.setFromMatrixPosition(fe.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);const ue=Y.distanceTo(ie),De=fe.projectionMatrix.elements,ze=pe.projectionMatrix.elements,Pe=De[14]/(De[10]-1),je=De[14]/(De[10]+1),ae=(De[9]+1)/De[5],xe=(De[9]-1)/De[5],N=(De[8]-1)/De[0],re=(ze[8]+1)/ze[0],k=Pe*N,B=Pe*re,z=ue/(-N+re),de=z*-N;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(de),ne.translateZ(z),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),De[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const me=Pe+z,L=je+z,A=k-de,X=B+(ue-de),oe=ae*je/L*me,ge=xe*je/L*me;ne.projectionMatrix.makePerspective(A,X,oe,ge,me,L),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function le(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let fe=ne.near,pe=ne.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),M.near=C.near=R.near=fe,M.far=C.far=R.far=pe,(D!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,V=M.far),R.layers.mask=ne.layers.mask|2,C.layers.mask=ne.layers.mask|4,M.layers.mask=R.layers.mask|C.layers.mask;const ue=ne.parent,De=M.cameras;le(M,ue);for(let ze=0;ze<De.length;ze++)le(De[ze],ue);De.length===2?F(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),he(ne,M,ue)};function he(ne,fe,pe){pe===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(pe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Tr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ne){c=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Se=null;function Be(ne,fe){if(h=fe.getViewerPose(l||o),g=fe,h!==null){const pe=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ue=!1;pe.length!==M.cameras.length&&(M.cameras.length=0,ue=!0);for(let ze=0;ze<pe.length;ze++){const Pe=pe[ze];let je=null;if(d!==null)je=d.getViewport(Pe);else{const xe=u.getViewSubImage(f,Pe);je=xe.viewport,ze===0&&(e.setRenderTargetTextures(v,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(v))}let ae=b[ze];ae===void 0&&(ae=new Cn,ae.layers.enable(ze),ae.viewport=new Mt,b[ze]=ae),ae.matrix.fromArray(Pe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Pe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(je.x,je.y,je.width,je.height),ze===0&&(M.matrix.copy(ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ue===!0&&M.cameras.push(ae)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")){const ze=u.getDepthInformation(pe[0]);ze&&ze.isValid&&ze.texture&&_.init(e,ze,s.renderState)}}for(let pe=0;pe<y.length;pe++){const ue=x[pe],De=y[pe];ue!==null&&De!==void 0&&De.update(ue,fe,l||o)}Se&&Se(ne,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),g=null}const Ye=new Zd;Ye.setAnimationLoop(Be),this.setAnimationLoop=function(ne){Se=ne},this.dispose=function(){}}}const bs=new En,i1=new ot;function s1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$d(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,bs.copy(x),bs.x*=-1,bs.y*=-1,bs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),m.envMapRotation.value.setFromMatrix4(i1.makeRotationFromEuler(bs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(v,E);const S=e.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function h(v){const y=u();v.__bindingPointIndex=y;const x=i.createBuffer(),E=v.__size,S=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],x=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,R=x.length;S<R;S++){const C=Array.isArray(x[S])?x[S]:[x[S]];for(let b=0,M=C.length;b<M;b++){const D=C[b];if(d(D,S,b,E)===!0){const V=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let K=0;for(let j=0;j<W.length;j++){const Y=W[j],ie=_(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,V+K,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,K),K+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,x,E){const S=v.value,R=y+"_"+x;if(E[R]===void 0)return typeof S=="number"||typeof S=="boolean"?E[R]=S:E[R]=S.clone(),!0;{const C=E[R];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return E[R]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(v){const y=v.uniforms;let x=0;const E=16;for(let R=0,C=y.length;R<C;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,D=b.length;M<D;M++){const V=b[M],W=Array.isArray(V.value)?V.value:[V.value];for(let K=0,j=W.length;K<j;K++){const Y=W[K],ie=_(Y),F=x%E,le=F%ie.boundary,he=F+le;x+=le,he!==0&&E-he<ie.storage&&(x+=E-he),V.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=ie.storage}}}const S=x%E;return S>0&&(x+=E-S),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class o1{constructor(e={}){const{canvas:t=$0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=ds,this.toneMappingExposure=1;const x=this;let E=!1,S=0,R=0,C=null,b=-1,M=null;const D=new Mt,V=new Mt;let W=null;const K=new st(0);let j=0,Y=t.width,ie=t.height,F=1,le=null,he=null;const Se=new Mt(0,0,Y,ie),Be=new Mt(0,0,Y,ie);let Ye=!1;const ne=new yh;let fe=!1,pe=!1;const ue=new ot,De=new ot,ze=new I,Pe=new Mt,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function xe(){return C===null?F:1}let N=n;function re(P,G){return t.getContext(P,G)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hh}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Me,!1),N===null){const G="webgl2";if(N=re(G,P),N===null)throw re(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let k,B,z,de,me,L,A,X,oe,ge,ce,Ie,Te,Re,rt,H,Ee,Ue,Ze,Ce,U,Q,we,O;function _e(){k=new u_(N),k.init(),Q=new jv(N,k),B=new r_(N,k,e,Q),z=new Yv(N,k),B.reverseDepthBuffer&&f&&z.buffers.depth.setReversed(!0),de=new p_(N),me=new Iv,L=new Kv(N,k,z,me,B,Q,de),A=new a_(x),X=new h_(x),oe=new Mm(N),we=new i_(N,oe),ge=new f_(N,oe,de,we),ce=new g_(N,ge,oe,de),Ze=new m_(N,B,L),H=new o_(me),Ie=new Lv(x,A,X,k,B,we,H),Te=new s1(x,me),Re=new Nv,rt=new zv(k),Ue=new n_(x,A,X,z,ce,d,c),Ee=new Xv(x,ce,B),O=new r1(N,de,B,z),Ce=new s_(N,k,de),U=new d_(N,k,de),de.programs=Ie.programs,x.capabilities=B,x.extensions=k,x.properties=me,x.renderLists=Re,x.shadowMap=Ee,x.state=z,x.info=de}_e();const $=new n1(x,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const P=k.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=k.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(P){P!==void 0&&(F=P,this.setSize(Y,ie,!1))},this.getSize=function(P){return P.set(Y,ie)},this.setSize=function(P,G,J=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=P,ie=G,t.width=Math.floor(P*F),t.height=Math.floor(G*F),J===!0&&(t.style.width=P+"px",t.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(Y*F,ie*F).floor()},this.setDrawingBufferSize=function(P,G,J){Y=P,ie=G,F=J,t.width=Math.floor(P*J),t.height=Math.floor(G*J),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(Se)},this.setViewport=function(P,G,J,ee){P.isVector4?Se.set(P.x,P.y,P.z,P.w):Se.set(P,G,J,ee),z.viewport(D.copy(Se).multiplyScalar(F).round())},this.getScissor=function(P){return P.copy(Be)},this.setScissor=function(P,G,J,ee){P.isVector4?Be.set(P.x,P.y,P.z,P.w):Be.set(P,G,J,ee),z.scissor(V.copy(Be).multiplyScalar(F).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(P){z.setScissorTest(Ye=P)},this.setOpaqueSort=function(P){le=P},this.setTransparentSort=function(P){he=P},this.getClearColor=function(P){return P.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(P=!0,G=!0,J=!0){let ee=0;if(P){let q=!1;if(C!==null){const Ae=C.texture.format;q=Ae===xh||Ae===gh||Ae===mh}if(q){const Ae=C.texture.type,Oe=Ae===Yi||Ae===Us||Ae===xo||Ae===wr||Ae===fh||Ae===dh,Ge=Ue.getClearColor(),We=Ue.getClearAlpha(),at=Ge.r,ct=Ge.g,Xe=Ge.b;Oe?(g[0]=at,g[1]=ct,g[2]=Xe,g[3]=We,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=at,_[1]=ct,_[2]=Xe,_[3]=We,N.clearBufferiv(N.COLOR,0,_))}else ee|=N.COLOR_BUFFER_BIT}G&&(ee|=N.DEPTH_BUFFER_BIT),J&&(ee|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Me,!1),Re.dispose(),rt.dispose(),me.dispose(),A.dispose(),X.dispose(),ce.dispose(),we.dispose(),O.dispose(),Ie.dispose(),$.dispose(),$.removeEventListener("sessionstart",Gh),$.removeEventListener("sessionend",Wh),gs.stop()};function se(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const P=de.autoReset,G=Ee.enabled,J=Ee.autoUpdate,ee=Ee.needsUpdate,q=Ee.type;_e(),de.autoReset=P,Ee.enabled=G,Ee.autoUpdate=J,Ee.needsUpdate=ee,Ee.type=q}function Me(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Qe(P){const G=P.target;G.removeEventListener("dispose",Qe),zt(G)}function zt(P){on(P),me.remove(P)}function on(P){const G=me.get(P).programs;G!==void 0&&(G.forEach(function(J){Ie.releaseProgram(J)}),P.isShaderMaterial&&Ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,J,ee,q,Ae){G===null&&(G=je);const Oe=q.isMesh&&q.matrixWorld.determinant()<0,Ge=Hp(P,G,J,ee,q);z.setMaterial(ee,Oe);let We=J.index,at=1;if(ee.wireframe===!0){if(We=ge.getWireframeAttribute(J),We===void 0)return;at=2}const ct=J.drawRange,Xe=J.attributes.position;let xt=ct.start*at,Nt=(ct.start+ct.count)*at;Ae!==null&&(xt=Math.max(xt,Ae.start*at),Nt=Math.min(Nt,(Ae.start+Ae.count)*at)),We!==null?(xt=Math.max(xt,0),Nt=Math.min(Nt,We.count)):Xe!=null&&(xt=Math.max(xt,0),Nt=Math.min(Nt,Xe.count));const kt=Nt-xt;if(kt<0||kt===1/0)return;we.setup(q,ee,Ge,J,We);let kn,bt=Ce;if(We!==null&&(kn=oe.get(We),bt=U,bt.setIndex(kn)),q.isMesh)ee.wireframe===!0?(z.setLineWidth(ee.wireframeLinewidth*xe()),bt.setMode(N.LINES)):bt.setMode(N.TRIANGLES);else if(q.isLine){let $e=ee.linewidth;$e===void 0&&($e=1),z.setLineWidth($e*xe()),q.isLineSegments?bt.setMode(N.LINES):q.isLineLoop?bt.setMode(N.LINE_LOOP):bt.setMode(N.LINE_STRIP)}else q.isPoints?bt.setMode(N.POINTS):q.isSprite&&bt.setMode(N.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)bt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const $e=q._multiDrawStarts,Ci=q._multiDrawCounts,St=q._multiDrawCount,si=We?oe.get(We).bytesPerElement:1,Hs=me.get(ee).currentProgram.getUniforms();for(let Hn=0;Hn<St;Hn++)Hs.setValue(N,"_gl_DrawID",Hn),bt.render($e[Hn]/si,Ci[Hn])}else if(q.isInstancedMesh)bt.renderInstances(xt,kt,q.count);else if(J.isInstancedBufferGeometry){const $e=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ci=Math.min(J.instanceCount,$e);bt.renderInstances(xt,kt,Ci)}else bt.render(xt,kt)};function _t(P,G,J){P.transparent===!0&&P.side===Ot&&P.forceSinglePass===!1?(P.side=Sn,P.needsUpdate=!0,Do(P,G,J),P.side=qi,P.needsUpdate=!0,Do(P,G,J),P.side=Ot):Do(P,G,J)}this.compile=function(P,G,J=null){J===null&&(J=P),p=rt.get(J),p.init(G),y.push(p),J.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),P!==J&&P.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ee=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ae=q.material;if(Ae)if(Array.isArray(Ae))for(let Oe=0;Oe<Ae.length;Oe++){const Ge=Ae[Oe];_t(Ge,J,q),ee.add(Ge)}else _t(Ae,J,q),ee.add(Ae)}),y.pop(),p=null,ee},this.compileAsync=function(P,G,J=null){const ee=this.compile(P,G,J);return new Promise(q=>{function Ae(){if(ee.forEach(function(Oe){me.get(Oe).currentProgram.isReady()&&ee.delete(Oe)}),ee.size===0){q(P);return}setTimeout(Ae,10)}k.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let ii=null;function Ri(P){ii&&ii(P)}function Gh(){gs.stop()}function Wh(){gs.start()}const gs=new Zd;gs.setAnimationLoop(Ri),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(P){ii=P,$.setAnimationLoop(P),P===null?gs.stop():gs.start()},$.addEventListener("sessionstart",Gh),$.addEventListener("sessionend",Wh),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(G),G=$.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,G,C),p=rt.get(P,y.length),p.init(G),y.push(p),De.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ne.setFromProjectionMatrix(De),pe=this.localClippingEnabled,fe=H.init(this.clippingPlanes,pe),m=Re.get(P,v.length),m.init(),v.push(m),$.enabled===!0&&$.isPresenting===!0){const Ae=x.xr.getDepthSensingMesh();Ae!==null&&Qa(Ae,G,-1/0,x.sortObjects)}Qa(P,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(le,he),ae=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,ae&&Ue.addToRenderList(m,P),this.info.render.frame++,fe===!0&&H.beginShadows();const J=p.state.shadowsArray;Ee.render(J,P,G),fe===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,q=m.transmissive;if(p.setupLights(),G.isArrayCamera){const Ae=G.cameras;if(q.length>0)for(let Oe=0,Ge=Ae.length;Oe<Ge;Oe++){const We=Ae[Oe];qh(ee,q,P,We)}ae&&Ue.render(P);for(let Oe=0,Ge=Ae.length;Oe<Ge;Oe++){const We=Ae[Oe];Xh(m,P,We,We.viewport)}}else q.length>0&&qh(ee,q,P,G),ae&&Ue.render(P),Xh(m,P,G);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(x,P,G),we.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],fe===!0&&H.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Qa(P,G,J,ee){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)J=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ne.intersectsSprite(P)){ee&&Pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(De);const Oe=ce.update(P),Ge=P.material;Ge.visible&&m.push(P,Oe,Ge,J,Pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ne.intersectsObject(P))){const Oe=ce.update(P),Ge=P.material;if(ee&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Pe.copy(P.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Pe.copy(Oe.boundingSphere.center)),Pe.applyMatrix4(P.matrixWorld).applyMatrix4(De)),Array.isArray(Ge)){const We=Oe.groups;for(let at=0,ct=We.length;at<ct;at++){const Xe=We[at],xt=Ge[Xe.materialIndex];xt&&xt.visible&&m.push(P,Oe,xt,J,Pe.z,Xe)}}else Ge.visible&&m.push(P,Oe,Ge,J,Pe.z,null)}}const Ae=P.children;for(let Oe=0,Ge=Ae.length;Oe<Ge;Oe++)Qa(Ae[Oe],G,J,ee)}function Xh(P,G,J,ee){const q=P.opaque,Ae=P.transmissive,Oe=P.transparent;p.setupLightsView(J),fe===!0&&H.setGlobalState(x.clippingPlanes,J),ee&&z.viewport(D.copy(ee)),q.length>0&&Io(q,G,J),Ae.length>0&&Io(Ae,G,J),Oe.length>0&&Io(Oe,G,J),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function qh(P,G,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new Os(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?To:Yi,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const Ae=p.state.transmissionRenderTarget[ee.id],Oe=ee.viewport||D;Ae.setSize(Oe.z,Oe.w);const Ge=x.getRenderTarget();x.setRenderTarget(Ae),x.getClearColor(K),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),ae&&Ue.render(J);const We=x.toneMapping;x.toneMapping=ds;const at=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),fe===!0&&H.setGlobalState(x.clippingPlanes,ee),Io(P,J,ee),L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae),k.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Xe=0,xt=G.length;Xe<xt;Xe++){const Nt=G[Xe],kt=Nt.object,kn=Nt.geometry,bt=Nt.material,$e=Nt.group;if(bt.side===Ot&&kt.layers.test(ee.layers)){const Ci=bt.side;bt.side=Sn,bt.needsUpdate=!0,Yh(kt,J,ee,kn,bt,$e),bt.side=Ci,bt.needsUpdate=!0,ct=!0}}ct===!0&&(L.updateMultisampleRenderTarget(Ae),L.updateRenderTargetMipmap(Ae))}x.setRenderTarget(Ge),x.setClearColor(K,j),at!==void 0&&(ee.viewport=at),x.toneMapping=We}function Io(P,G,J){const ee=G.isScene===!0?G.overrideMaterial:null;for(let q=0,Ae=P.length;q<Ae;q++){const Oe=P[q],Ge=Oe.object,We=Oe.geometry,at=ee===null?Oe.material:ee,ct=Oe.group;Ge.layers.test(J.layers)&&Yh(Ge,G,J,We,at,ct)}}function Yh(P,G,J,ee,q,Ae){P.onBeforeRender(x,G,J,ee,q,Ae),P.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(x,G,J,ee,P,Ae),q.transparent===!0&&q.side===Ot&&q.forceSinglePass===!1?(q.side=Sn,q.needsUpdate=!0,x.renderBufferDirect(J,G,ee,q,P,Ae),q.side=qi,q.needsUpdate=!0,x.renderBufferDirect(J,G,ee,q,P,Ae),q.side=Ot):x.renderBufferDirect(J,G,ee,q,P,Ae),P.onAfterRender(x,G,J,ee,q,Ae)}function Do(P,G,J){G.isScene!==!0&&(G=je);const ee=me.get(P),q=p.state.lights,Ae=p.state.shadowsArray,Oe=q.state.version,Ge=Ie.getParameters(P,q.state,Ae,G,J),We=Ie.getProgramCacheKey(Ge);let at=ee.programs;ee.environment=P.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(P.isMeshStandardMaterial?X:A).get(P.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,at===void 0&&(P.addEventListener("dispose",Qe),at=new Map,ee.programs=at);let ct=at.get(We);if(ct!==void 0){if(ee.currentProgram===ct&&ee.lightsStateVersion===Oe)return Kh(P,Ge),ct}else Ge.uniforms=Ie.getUniforms(P),P.onBeforeCompile(Ge,x),ct=Ie.acquireProgram(Ge,We),at.set(We,ct),ee.uniforms=Ge.uniforms;const Xe=ee.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=H.uniform),Kh(P,Ge),ee.needsLights=Gp(P),ee.lightsStateVersion=Oe,ee.needsLights&&(Xe.ambientLightColor.value=q.state.ambient,Xe.lightProbe.value=q.state.probe,Xe.directionalLights.value=q.state.directional,Xe.directionalLightShadows.value=q.state.directionalShadow,Xe.spotLights.value=q.state.spot,Xe.spotLightShadows.value=q.state.spotShadow,Xe.rectAreaLights.value=q.state.rectArea,Xe.ltc_1.value=q.state.rectAreaLTC1,Xe.ltc_2.value=q.state.rectAreaLTC2,Xe.pointLights.value=q.state.point,Xe.pointLightShadows.value=q.state.pointShadow,Xe.hemisphereLights.value=q.state.hemi,Xe.directionalShadowMap.value=q.state.directionalShadowMap,Xe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Xe.spotShadowMap.value=q.state.spotShadowMap,Xe.spotLightMatrix.value=q.state.spotLightMatrix,Xe.spotLightMap.value=q.state.spotLightMap,Xe.pointShadowMap.value=q.state.pointShadowMap,Xe.pointShadowMatrix.value=q.state.pointShadowMatrix),ee.currentProgram=ct,ee.uniformsList=null,ct}function $h(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=Aa.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function Kh(P,G){const J=me.get(P);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function Hp(P,G,J,ee,q){G.isScene!==!0&&(G=je),L.resetTextureUnits();const Ae=G.fog,Oe=ee.isMeshStandardMaterial?G.environment:null,Ge=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Nn,We=(ee.isMeshStandardMaterial?X:A).get(ee.envMap||Oe),at=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ct=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Xe=!!J.morphAttributes.position,xt=!!J.morphAttributes.normal,Nt=!!J.morphAttributes.color;let kt=ds;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(kt=x.toneMapping);const kn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,bt=kn!==void 0?kn.length:0,$e=me.get(ee),Ci=p.state.lights;if(fe===!0&&(pe===!0||P!==M)){const Kn=P===M&&ee.id===b;H.setState(ee,P,Kn)}let St=!1;ee.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Ci.state.version||$e.outputColorSpace!==Ge||q.isBatchedMesh&&$e.batching===!1||!q.isBatchedMesh&&$e.batching===!0||q.isBatchedMesh&&$e.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&$e.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&$e.instancing===!1||!q.isInstancedMesh&&$e.instancing===!0||q.isSkinnedMesh&&$e.skinning===!1||!q.isSkinnedMesh&&$e.skinning===!0||q.isInstancedMesh&&$e.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&$e.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&$e.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&$e.instancingMorph===!1&&q.morphTexture!==null||$e.envMap!==We||ee.fog===!0&&$e.fog!==Ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==H.numPlanes||$e.numIntersection!==H.numIntersection)||$e.vertexAlphas!==at||$e.vertexTangents!==ct||$e.morphTargets!==Xe||$e.morphNormals!==xt||$e.morphColors!==Nt||$e.toneMapping!==kt||$e.morphTargetsCount!==bt)&&(St=!0):(St=!0,$e.__version=ee.version);let si=$e.currentProgram;St===!0&&(si=Do(ee,G,q));let Hs=!1,Hn=!1,Fr=!1;const Ft=si.getUniforms(),_i=$e.uniforms;if(z.useProgram(si.program)&&(Hs=!0,Hn=!0,Fr=!0),ee.id!==b&&(b=ee.id,Hn=!0),Hs||M!==P){z.buffers.depth.getReversed()?(ue.copy(P.projectionMatrix),j0(ue),Z0(ue),Ft.setValue(N,"projectionMatrix",ue)):Ft.setValue(N,"projectionMatrix",P.projectionMatrix),Ft.setValue(N,"viewMatrix",P.matrixWorldInverse);const Ki=Ft.map.cameraPosition;Ki!==void 0&&Ki.setValue(N,ze.setFromMatrixPosition(P.matrixWorld)),B.logarithmicDepthBuffer&&Ft.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ft.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,Hn=!0,Fr=!0)}if(q.isSkinnedMesh){Ft.setOptional(N,q,"bindMatrix"),Ft.setOptional(N,q,"bindMatrixInverse");const Kn=q.skeleton;Kn&&(Kn.boneTexture===null&&Kn.computeBoneTexture(),Ft.setValue(N,"boneTexture",Kn.boneTexture,L))}q.isBatchedMesh&&(Ft.setOptional(N,q,"batchingTexture"),Ft.setValue(N,"batchingTexture",q._matricesTexture,L),Ft.setOptional(N,q,"batchingIdTexture"),Ft.setValue(N,"batchingIdTexture",q._indirectTexture,L),Ft.setOptional(N,q,"batchingColorTexture"),q._colorsTexture!==null&&Ft.setValue(N,"batchingColorTexture",q._colorsTexture,L));const Br=J.morphAttributes;if((Br.position!==void 0||Br.normal!==void 0||Br.color!==void 0)&&Ze.update(q,J,si),(Hn||$e.receiveShadow!==q.receiveShadow)&&($e.receiveShadow=q.receiveShadow,Ft.setValue(N,"receiveShadow",q.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(_i.envMap.value=We,_i.flipEnvMap.value=We.isCubeTexture&&We.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(_i.envMapIntensity.value=G.environmentIntensity),Hn&&(Ft.setValue(N,"toneMappingExposure",x.toneMappingExposure),$e.needsLights&&Vp(_i,Fr),Ae&&ee.fog===!0&&Te.refreshFogUniforms(_i,Ae),Te.refreshMaterialUniforms(_i,ee,F,ie,p.state.transmissionRenderTarget[P.id]),Aa.upload(N,$h($e),_i,L)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Aa.upload(N,$h($e),_i,L),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ft.setValue(N,"center",q.center),Ft.setValue(N,"modelViewMatrix",q.modelViewMatrix),Ft.setValue(N,"normalMatrix",q.normalMatrix),Ft.setValue(N,"modelMatrix",q.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Kn=ee.uniformsGroups;for(let Ki=0,ji=Kn.length;Ki<ji;Ki++){const jh=Kn[Ki];O.update(jh,si),O.bind(jh,si)}}return si}function Vp(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function Gp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,G,J){me.get(P.texture).__webglTexture=G,me.get(P.depthTexture).__webglTexture=J;const ee=me.get(P);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,G){const J=me.get(P);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,J=0){C=P,S=G,R=J;let ee=!0,q=null,Ae=!1,Oe=!1;if(P){const We=me.get(P);if(We.__useDefaultFramebuffer!==void 0)z.bindFramebuffer(N.FRAMEBUFFER,null),ee=!1;else if(We.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(We.__hasExternalTextures)L.rebindTextures(P,me.get(P.texture).__webglTexture,me.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Xe=P.depthTexture;if(We.__boundDepthTexture!==Xe){if(Xe!==null&&me.has(Xe)&&(P.width!==Xe.image.width||P.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}const at=P.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Oe=!0);const ct=me.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ct[G])?q=ct[G][J]:q=ct[G],Ae=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?q=me.get(P).__webglMultisampledFramebuffer:Array.isArray(ct)?q=ct[J]:q=ct,D.copy(P.viewport),V.copy(P.scissor),W=P.scissorTest}else D.copy(Se).multiplyScalar(F).floor(),V.copy(Be).multiplyScalar(F).floor(),W=Ye;if(z.bindFramebuffer(N.FRAMEBUFFER,q)&&ee&&z.drawBuffers(P,q),z.viewport(D),z.scissor(V),z.setScissorTest(W),Ae){const We=me.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,We.__webglTexture,J)}else if(Oe){const We=me.get(P.texture),at=G||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,We.__webglTexture,J||0,at)}b=-1},this.readRenderTargetPixels=function(P,G,J,ee,q,Ae,Oe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=me.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){z.bindFramebuffer(N.FRAMEBUFFER,Ge);try{const We=P.texture,at=We.format,ct=We.type;if(!B.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!B.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-ee&&J>=0&&J<=P.height-q&&N.readPixels(G,J,ee,q,Q.convert(at),Q.convert(ct),Ae)}finally{const We=C!==null?me.get(C).__webglFramebuffer:null;z.bindFramebuffer(N.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(P,G,J,ee,q,Ae,Oe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=me.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){const We=P.texture,at=We.format,ct=We.type;if(!B.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!B.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=P.width-ee&&J>=0&&J<=P.height-q){z.bindFramebuffer(N.FRAMEBUFFER,Ge);const Xe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.bufferData(N.PIXEL_PACK_BUFFER,Ae.byteLength,N.STREAM_READ),N.readPixels(G,J,ee,q,Q.convert(at),Q.convert(ct),0);const xt=C!==null?me.get(C).__webglFramebuffer:null;z.bindFramebuffer(N.FRAMEBUFFER,xt);const Nt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await K0(N,Nt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Xe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ae),N.deleteBuffer(Xe),N.deleteSync(Nt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,G=null,J=0){P.isTexture!==!0&&(oo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,P=arguments[1]);const ee=Math.pow(2,-J),q=Math.floor(P.image.width*ee),Ae=Math.floor(P.image.height*ee),Oe=G!==null?G.x:0,Ge=G!==null?G.y:0;L.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,J,0,0,Oe,Ge,q,Ae),z.unbindTexture()},this.copyTextureToTexture=function(P,G,J=null,ee=null,q=0){P.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,P=arguments[1],G=arguments[2],q=arguments[3]||0,J=null);let Ae,Oe,Ge,We,at,ct,Xe,xt,Nt;const kt=P.isCompressedTexture?P.mipmaps[q]:P.image;J!==null?(Ae=J.max.x-J.min.x,Oe=J.max.y-J.min.y,Ge=J.isBox3?J.max.z-J.min.z:1,We=J.min.x,at=J.min.y,ct=J.isBox3?J.min.z:0):(Ae=kt.width,Oe=kt.height,Ge=kt.depth||1,We=0,at=0,ct=0),ee!==null?(Xe=ee.x,xt=ee.y,Nt=ee.z):(Xe=0,xt=0,Nt=0);const kn=Q.convert(G.format),bt=Q.convert(G.type);let $e;G.isData3DTexture?(L.setTexture3D(G,0),$e=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(L.setTexture2DArray(G,0),$e=N.TEXTURE_2D_ARRAY):(L.setTexture2D(G,0),$e=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const Ci=N.getParameter(N.UNPACK_ROW_LENGTH),St=N.getParameter(N.UNPACK_IMAGE_HEIGHT),si=N.getParameter(N.UNPACK_SKIP_PIXELS),Hs=N.getParameter(N.UNPACK_SKIP_ROWS),Hn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,kt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,kt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,We),N.pixelStorei(N.UNPACK_SKIP_ROWS,at),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ct);const Fr=P.isDataArrayTexture||P.isData3DTexture,Ft=G.isDataArrayTexture||G.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const _i=me.get(P),Br=me.get(G),Kn=me.get(_i.__renderTarget),Ki=me.get(Br.__renderTarget);z.bindFramebuffer(N.READ_FRAMEBUFFER,Kn.__webglFramebuffer),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let ji=0;ji<Ge;ji++)Fr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,me.get(P).__webglTexture,q,ct+ji),P.isDepthTexture?(Ft&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,me.get(G).__webglTexture,q,Nt+ji),N.blitFramebuffer(We,at,Ae,Oe,Xe,xt,Ae,Oe,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ft?N.copyTexSubImage3D($e,q,Xe,xt,Nt+ji,We,at,Ae,Oe):N.copyTexSubImage2D($e,q,Xe,xt,Nt+ji,We,at,Ae,Oe);z.bindFramebuffer(N.READ_FRAMEBUFFER,null),z.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ft?P.isDataTexture||P.isData3DTexture?N.texSubImage3D($e,q,Xe,xt,Nt,Ae,Oe,Ge,kn,bt,kt.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D($e,q,Xe,xt,Nt,Ae,Oe,Ge,kn,kt.data):N.texSubImage3D($e,q,Xe,xt,Nt,Ae,Oe,Ge,kn,bt,kt):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,q,Xe,xt,Ae,Oe,kn,bt,kt.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,q,Xe,xt,kt.width,kt.height,kn,kt.data):N.texSubImage2D(N.TEXTURE_2D,q,Xe,xt,Ae,Oe,kn,bt,kt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ci),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St),N.pixelStorei(N.UNPACK_SKIP_PIXELS,si),N.pixelStorei(N.UNPACK_SKIP_ROWS,Hs),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Hn),q===0&&G.generateMipmaps&&N.generateMipmap($e),z.unbindTexture()},this.copyTextureToTexture3D=function(P,G,J=null,ee=null,q=0){return P.isTexture!==!0&&(oo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,P=arguments[2],G=arguments[3],q=arguments[4]||0),oo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,G,J,ee,q)},this.initRenderTarget=function(P){me.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),z.unbindTexture()},this.resetState=function(){S=0,R=0,C=null,z.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}class Sh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new st(e),this.near=t,this.far=n}clone(){return new Sh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ip extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class sp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kl,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new I;class Mo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ks extends di{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new st(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let nr;const Wr=new I,ir=new I,sr=new I,rr=new ye,Xr=new ye,rp=new ot,ea=new I,qr=new I,ta=new I,Zu=new ye,Rc=new ye,Ju=new ye;class Rr extends Dt{constructor(e=new ks){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sp(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new Mo(n,3,0,!1)),nr.setAttribute("uv",new Mo(n,2,3,!1))}this.geometry=nr,this.material=e,this.center=new ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),rp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;na(ea.set(-.5,-.5,0),sr,o,ir,s,r),na(qr.set(.5,-.5,0),sr,o,ir,s,r),na(ta.set(.5,.5,0),sr,o,ir,s,r),Zu.set(0,0),Rc.set(1,0),Ju.set(1,1);let a=e.ray.intersectTriangle(ea,qr,ta,!1,Wr);if(a===null&&(na(qr.set(-.5,.5,0),sr,o,ir,s,r),Rc.set(0,1),a=e.ray.intersectTriangle(ea,ta,qr,!1,Wr),a===null))return;const c=e.ray.origin.distanceTo(Wr);c<e.near||c>e.far||t.push({distance:c,point:Wr.clone(),uv:ei.getInterpolation(Wr,ea,qr,ta,Zu,Rc,Ju,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function na(i,e,t,n,s,r){rr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Xr.x=r*rr.x-s*rr.y,Xr.y=s*rr.x+r*rr.y):Xr.copy(rr),i.copy(e),i.x+=Xr.x,i.y+=Xr.y,i.applyMatrix4(rp)}const Qu=new I,ef=new Mt,tf=new Mt,a1=new I,nf=new ot,ia=new I,Cc=new wi,sf=new ot,Pc=new Ao;class c1 extends ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=eu,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Si),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ia),this.boundingBox.expandByPoint(ia)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new wi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ia),this.boundingSphere.expandByPoint(ia)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cc.copy(this.boundingSphere),Cc.applyMatrix4(s),e.ray.intersectsSphere(Cc)!==!1&&(sf.copy(s).invert(),Pc.copy(e.ray).applyMatrix4(sf),!(this.boundingBox!==null&&Pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===eu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===_0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ef.fromBufferAttribute(s.attributes.skinIndex,e),tf.fromBufferAttribute(s.attributes.skinWeight,e),Qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=tf.getComponent(r);if(o!==0){const a=ef.getComponent(r);nf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(a1.copy(Qu).applyMatrix4(nf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class op extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ap extends tn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=In,h=In,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rf=new ot,l1=new ot;class wh{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:l1;rf.multiplyMatrices(a,t[r]),rf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new wh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ap(t,e,e,ti,fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new op),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Jl extends wn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new ot,of=new ot,sa=[],af=new Si,h1=new ot,Yr=new ve,$r=new wi;class u1 extends ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,h1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),af.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(af)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),$r.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union($r)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$r.copy(this.boundingSphere),$r.applyMatrix4(n),e.ray.intersectsSphere($r)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),of.multiplyMatrices(n,or),Yr.matrixWorld=of,Yr.raycast(e,sa);for(let o=0,a=sa.length;o<a;o++){const c=sa[o];c.instanceId=r,c.object=this,t.push(c)}sa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ap(new Float32Array(s*this.count),s,this.count,ph,fi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Eh extends di{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const La=new I,Ia=new I,cf=new ot,Kr=new Ao,ra=new wi,Lc=new I,lf=new I;class Th extends Dt{constructor(e=new Ht,t=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)La.fromBufferAttribute(t,s-1),Ia.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=La.distanceTo(Ia);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(s),ra.radius+=r,e.ray.intersectsSphere(ra)===!1)return;cf.copy(s).invert(),Kr.copy(e.ray).applyMatrix4(cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),y=oa(this,e,Kr,c,p,v);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=oa(this,e,Kr,c,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=oa(this,e,Kr,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=oa(this,e,Kr,c,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function oa(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(La.fromBufferAttribute(o,s),Ia.fromBufferAttribute(o,r),t.distanceSqToSegment(La,Ia,Lc,lf)>n)return;Lc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Lc);if(!(c<e.near||c>e.far))return{distance:c,point:lf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const hf=new I,uf=new I;class f1 extends Th{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)hf.fromBufferAttribute(t,s),uf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hf.distanceTo(uf);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cp extends Th{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lp extends di{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ff=new ot,Ql=new Ao,aa=new wi,ca=new I;class d1 extends Dt{constructor(e=new Ht,t=new lp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;ff.copy(s).invert(),Ql.copy(e.ray).applyMatrix4(ff);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);ca.fromBufferAttribute(u,m),df(ca,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)ca.fromBufferAttribute(u,g),df(ca,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function df(i,e,t,n,s,r,o){const a=Ql.distanceSqToPoint(i);if(a<t){const c=new I;Ql.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class On extends tn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ye:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,s=[],r=[],o=[],a=new I,c=new ot;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ah extends Ei{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ye){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class p1 extends Ah{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const la=new I,Ic=new Rh,Dc=new Rh,Nc=new Rh;class hp extends Ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(la.subVectors(s[0],s[1]).add(s[0]),l=la);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(la.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=la),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ic.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Dc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Nc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Dc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Nc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ic.calc(c),Dc.calc(c),Nc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pf(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function m1(i,e){const t=1-i;return t*t*e}function g1(i,e){return 2*(1-i)*i*e}function x1(i,e){return i*i*e}function fo(i,e,t,n){return m1(i,e)+g1(i,t)+x1(i,n)}function _1(i,e){const t=1-i;return t*t*t*e}function v1(i,e){const t=1-i;return 3*t*t*i*e}function y1(i,e){return 3*(1-i)*i*i*e}function M1(i,e){return i*i*i*e}function po(i,e,t,n,s){return _1(i,e)+v1(i,t)+y1(i,n)+M1(i,s)}class up extends Ei{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b1 extends Ei{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(po(e,s.x,r.x,o.x,a.x),po(e,s.y,r.y,o.y,a.y),po(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class fp extends Ei{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S1 extends Ei{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dp extends Ei{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(e,s.x,r.x,o.x),fo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ch extends Ei{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(fo(e,s.x,r.x,o.x),fo(e,s.y,r.y,o.y),fo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pp extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(pf(a,c.x,l.x,h.x,u.x),pf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ye().fromArray(s))}return this}}var Da=Object.freeze({__proto__:null,ArcCurve:p1,CatmullRomCurve3:hp,CubicBezierCurve:up,CubicBezierCurve3:b1,EllipseCurve:Ah,LineCurve:fp,LineCurve3:S1,QuadraticBezierCurve:dp,QuadraticBezierCurve3:Ch,SplineCurve:pp});class w1 extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Da[s.type]().fromJSON(s))}return this}}class eh extends w1{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new fp(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new dp(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new up(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new pp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Ah(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Dr extends Ht{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new I,f=new ye,d=new I,g=new I,_=new I;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let v=0;v<=t;v++){const y=n+v*h*s,x=Math.sin(y),E=Math.cos(y);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*x,u.y=e[S].y,u.z=e[S].x*E,o.push(u.x,u.y,u.z),f.x=v/t,f.y=S/(e.length-1),a.push(f.x,f.y);const R=c[3*S+0]*x,C=c[3*S+1],b=c[3*S+0]*E;l.push(R,C,b)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const x=y+v*e.length,E=x,S=x+e.length,R=x+e.length+1,C=x+1;r.push(E,S,C),r.push(R,C,S)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("uv",new ft(a,2)),this.setAttribute("normal",new ft(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.points,e.segments,e.phiStart,e.phiLength)}}class Ph extends Dr{constructor(e=1,t=1,n=4,s=8){const r=new eh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Ph(e.radius,e.length,e.capSegments,e.radialSegments)}}class $n extends Ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new I,h=new ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Dn extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(d,2));function v(){const x=new I,E=new I;let S=0;const R=(t-e)/n;for(let C=0;C<=r;C++){const b=[],M=C/r,D=M*(t-e)+e;for(let V=0;V<=s;V++){const W=V/s,K=W*c+a,j=Math.sin(K),Y=Math.cos(K);E.x=D*j,E.y=-M*n+m,E.z=D*Y,u.push(E.x,E.y,E.z),x.set(j,R,Y).normalize(),f.push(x.x,x.y,x.z),d.push(W,1-M),b.push(g++)}_.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const M=_[b][C],D=_[b+1][C],V=_[b+1][C+1],W=_[b][C+1];(e>0||b!==0)&&(h.push(M,D,W),S+=3),(t>0||b!==r-1)&&(h.push(D,V,W),S+=3)}l.addGroup(p,S,0),p+=S}function y(x){const E=g,S=new ye,R=new I;let C=0;const b=x===!0?e:t,M=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const D=g;for(let V=0;V<=s;V++){const K=V/s*c+a,j=Math.cos(K),Y=Math.sin(K);R.x=b*Y,R.y=m*M,R.z=b*j,u.push(R.x,R.y,R.z),f.push(0,M,0),S.x=j*.5+.5,S.y=Y*.5*M+.5,d.push(S.x,S.y),g++}for(let V=0;V<s;V++){const W=E+V,K=D+V;x===!0?h.push(K,K+1,W):h.push(K+1,K,W),C+=3}l.addGroup(p,C,x===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lh extends Dn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Lh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ih extends Ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new I,x=new I,E=new I;for(let S=0;S<t.length;S+=3)d(t[S+0],y),d(t[S+1],x),d(t[S+2],E),c(y,x,E,v)}function c(v,y,x,E){const S=E+1,R=[];for(let C=0;C<=S;C++){R[C]=[];const b=v.clone().lerp(x,C/S),M=y.clone().lerp(x,C/S),D=S-C;for(let V=0;V<=D;V++)V===0&&C===S?R[C][V]=b:R[C][V]=b.clone().lerp(M,V/D)}for(let C=0;C<S;C++)for(let b=0;b<2*(S-C)-1;b++){const M=Math.floor(b/2);b%2===0?(f(R[C][M+1]),f(R[C+1][M]),f(R[C][M])):(f(R[C][M+1]),f(R[C+1][M+1]),f(R[C+1][M]))}}function l(v){const y=new I;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const v=new I;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;o.push(x,1-E)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],E=o[v+4],S=Math.max(y,x,E),R=Math.min(y,x,E);S>.9&&R<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new I,y=new I,x=new I,E=new I,S=new ye,R=new ye,C=new ye;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),S.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),E.copy(v).add(y).add(x).divideScalar(3);const D=m(E);_(S,M+0,v,D),_(R,M+2,y,D),_(C,M+4,x,D)}}function _(v,y,x,E){E<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ih(e.vertices,e.indices,e.radius,e.details)}}class Ro extends eh{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new eh().fromJSON(s))}return this}}const E1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=mp(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=P1(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return bo(r,o,t,a,c,d,0),o}};function mp(i,e,t,n,s){let r,o;if(s===H1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=mf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=mf(r,i[r],i[r+1],o);return o&&Ga(o,o.next)&&(wo(o),o=o.next),o}function Fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ga(t,t.next)||Vt(t.prev,t,t.next)===0)){if(wo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function bo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&U1(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?A1(i,n,s,r):T1(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),wo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=R1(Fs(i),e,t),bo(i,e,t,n,s,r,2)):o===2&&C1(i,e,t,n,s,r):bo(Fs(i),e,t,n,s,r,1);break}}}function T1(i){const e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&mr(s,a,r,c,o,l,g.x,g.y)&&Vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function A1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Vt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=th(d,g,e,t,n),v=th(_,m,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&mr(a,h,c,u,l,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&mr(a,h,c,u,l,f,x.x,x.y)&&Vt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&mr(a,h,c,u,l,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&mr(a,h,c,u,l,f,x.x,x.y)&&Vt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function R1(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ga(s,r)&&gp(s,n,n.next,r)&&So(s,r)&&So(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),wo(n),wo(n.next),n=i=r),n=n.next}while(n!==i);return Fs(n)}function C1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&F1(o,a)){let c=xp(o,a);o=Fs(o,o.next),c=Fs(c,c.next),bo(o,e,t,n,s,r,0),bo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function P1(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=mp(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(k1(l));for(s.sort(L1),r=0;r<s.length;r++)t=I1(s[r],t);return t}function L1(i,e){return i.x-e.x}function I1(i,e){const t=D1(i,e);if(!t)return e;const n=xp(t,i);return Fs(n,n.next),Fs(t,t.next)}function D1(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&mr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),So(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&N1(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function N1(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function U1(i,e,t,n){let s=i;do s.z===0&&(s.z=th(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,O1(s)}function O1(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function th(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function k1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function mr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function F1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!B1(i,e)&&(So(i,e)&&So(e,i)&&z1(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||Ga(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ga(i,e){return i.x===e.x&&i.y===e.y}function gp(i,e,t,n){const s=ua(Vt(i,e,t)),r=ua(Vt(i,e,n)),o=ua(Vt(t,n,i)),a=ua(Vt(t,n,e));return!!(s!==r&&o!==a||s===0&&ha(i,t,e)||r===0&&ha(i,n,e)||o===0&&ha(t,i,n)||a===0&&ha(t,e,n))}function ha(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ua(i){return i>0?1:i<0?-1:0}function B1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&gp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function So(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function z1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function xp(i,e){const t=new nh(i.i,i.x,i.y),n=new nh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function mf(i,e,t,n){const s=new nh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function wo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function H1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ps{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ps.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];gf(e),xf(n,e);let o=e.length;t.forEach(gf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,xf(n,t[c]);const a=E1.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function gf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Wa extends Ht{constructor(e=new Ro([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:V1;let y,x=!1,E,S,R,C;p&&(y=p.getSpacedPoints(h),x=!0,f=!1,E=p.computeFrenetFrames(h,!1),S=new I,R=new I,C=new I),f||(m=0,d=0,g=0,_=0);const b=a.extractPoints(l);let M=b.shape;const D=b.holes;if(!ps.isClockWise(M)){M=M.reverse();for(let ae=0,xe=D.length;ae<xe;ae++){const N=D[ae];ps.isClockWise(N)&&(D[ae]=N.reverse())}}const W=ps.triangulateShape(M,D),K=M;for(let ae=0,xe=D.length;ae<xe;ae++){const N=D[ae];M=M.concat(N)}function j(ae,xe,N){return xe||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(xe,N)}const Y=M.length,ie=W.length;function F(ae,xe,N){let re,k,B;const z=ae.x-xe.x,de=ae.y-xe.y,me=N.x-ae.x,L=N.y-ae.y,A=z*z+de*de,X=z*L-de*me;if(Math.abs(X)>Number.EPSILON){const oe=Math.sqrt(A),ge=Math.sqrt(me*me+L*L),ce=xe.x-de/oe,Ie=xe.y+z/oe,Te=N.x-L/ge,Re=N.y+me/ge,rt=((Te-ce)*L-(Re-Ie)*me)/(z*L-de*me);re=ce+z*rt-ae.x,k=Ie+de*rt-ae.y;const H=re*re+k*k;if(H<=2)return new ye(re,k);B=Math.sqrt(H/2)}else{let oe=!1;z>Number.EPSILON?me>Number.EPSILON&&(oe=!0):z<-Number.EPSILON?me<-Number.EPSILON&&(oe=!0):Math.sign(de)===Math.sign(L)&&(oe=!0),oe?(re=-de,k=z,B=Math.sqrt(A)):(re=z,k=de,B=Math.sqrt(A/2))}return new ye(re/B,k/B)}const le=[];for(let ae=0,xe=K.length,N=xe-1,re=ae+1;ae<xe;ae++,N++,re++)N===xe&&(N=0),re===xe&&(re=0),le[ae]=F(K[ae],K[N],K[re]);const he=[];let Se,Be=le.concat();for(let ae=0,xe=D.length;ae<xe;ae++){const N=D[ae];Se=[];for(let re=0,k=N.length,B=k-1,z=re+1;re<k;re++,B++,z++)B===k&&(B=0),z===k&&(z=0),Se[re]=F(N[re],N[B],N[z]);he.push(Se),Be=Be.concat(Se)}for(let ae=0;ae<m;ae++){const xe=ae/m,N=d*Math.cos(xe*Math.PI/2),re=g*Math.sin(xe*Math.PI/2)+_;for(let k=0,B=K.length;k<B;k++){const z=j(K[k],le[k],re);ue(z.x,z.y,-N)}for(let k=0,B=D.length;k<B;k++){const z=D[k];Se=he[k];for(let de=0,me=z.length;de<me;de++){const L=j(z[de],Se[de],re);ue(L.x,L.y,-N)}}}const Ye=g+_;for(let ae=0;ae<Y;ae++){const xe=f?j(M[ae],Be[ae],Ye):M[ae];x?(R.copy(E.normals[0]).multiplyScalar(xe.x),S.copy(E.binormals[0]).multiplyScalar(xe.y),C.copy(y[0]).add(R).add(S),ue(C.x,C.y,C.z)):ue(xe.x,xe.y,0)}for(let ae=1;ae<=h;ae++)for(let xe=0;xe<Y;xe++){const N=f?j(M[xe],Be[xe],Ye):M[xe];x?(R.copy(E.normals[ae]).multiplyScalar(N.x),S.copy(E.binormals[ae]).multiplyScalar(N.y),C.copy(y[ae]).add(R).add(S),ue(C.x,C.y,C.z)):ue(N.x,N.y,u/h*ae)}for(let ae=m-1;ae>=0;ae--){const xe=ae/m,N=d*Math.cos(xe*Math.PI/2),re=g*Math.sin(xe*Math.PI/2)+_;for(let k=0,B=K.length;k<B;k++){const z=j(K[k],le[k],re);ue(z.x,z.y,u+N)}for(let k=0,B=D.length;k<B;k++){const z=D[k];Se=he[k];for(let de=0,me=z.length;de<me;de++){const L=j(z[de],Se[de],re);x?ue(L.x,L.y+y[h-1].y,y[h-1].x+N):ue(L.x,L.y,u+N)}}}ne(),fe();function ne(){const ae=s.length/3;if(f){let xe=0,N=Y*xe;for(let re=0;re<ie;re++){const k=W[re];De(k[2]+N,k[1]+N,k[0]+N)}xe=h+m*2,N=Y*xe;for(let re=0;re<ie;re++){const k=W[re];De(k[0]+N,k[1]+N,k[2]+N)}}else{for(let xe=0;xe<ie;xe++){const N=W[xe];De(N[2],N[1],N[0])}for(let xe=0;xe<ie;xe++){const N=W[xe];De(N[0]+Y*h,N[1]+Y*h,N[2]+Y*h)}}n.addGroup(ae,s.length/3-ae,0)}function fe(){const ae=s.length/3;let xe=0;pe(K,xe),xe+=K.length;for(let N=0,re=D.length;N<re;N++){const k=D[N];pe(k,xe),xe+=k.length}n.addGroup(ae,s.length/3-ae,1)}function pe(ae,xe){let N=ae.length;for(;--N>=0;){const re=N;let k=N-1;k<0&&(k=ae.length-1);for(let B=0,z=h+m*2;B<z;B++){const de=Y*B,me=Y*(B+1),L=xe+re+de,A=xe+k+de,X=xe+k+me,oe=xe+re+me;ze(L,A,X,oe)}}}function ue(ae,xe,N){c.push(ae),c.push(xe),c.push(N)}function De(ae,xe,N){Pe(ae),Pe(xe),Pe(N);const re=s.length/3,k=v.generateTopUV(n,s,re-3,re-2,re-1);je(k[0]),je(k[1]),je(k[2])}function ze(ae,xe,N,re){Pe(ae),Pe(xe),Pe(re),Pe(xe),Pe(N),Pe(re);const k=s.length/3,B=v.generateSideWallUV(n,s,k-6,k-3,k-2,k-1);je(B[0]),je(B[1]),je(B[3]),je(B[1]),je(B[2]),je(B[3])}function Pe(ae){s.push(c[ae*3+0]),s.push(c[ae*3+1]),s.push(c[ae*3+2])}function je(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return G1(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Da[s.type]().fromJSON(s)),new Wa(n,e.options)}}const V1={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ye(r,o),new ye(a,c),new ye(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ye(o,1-c),new ye(l,1-u),new ye(f,1-g),new ye(_,1-p)]:[new ye(a,1-c),new ye(h,1-u),new ye(d,1-g),new ye(m,1-p)]}};function G1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xa extends Ih{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xa(e.radius,e.detail)}}class Dh extends Ht{constructor(e=new Ro([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(r,3)),this.setAttribute("uv",new ft(o,2));function l(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;ps.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];ps.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=ps.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],y=v[0]+u,x=v[1]+u,E=v[2]+u;n.push(y,x,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return W1(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Dh(n,e.curveSegments)}}function W1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Zt extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,f=new I,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const S=E/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(S+x,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=h[p][v+1],x=h[p][v],E=h[p+1][v],S=h[p+1][v+1];(p!==0||o>0)&&d.push(y,x,S),(p!==n-1||c<Math.PI)&&d.push(x,E,S)}this.setIndex(d),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nr extends Ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qa extends Ht{constructor(e=new Ch(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new ye;let h=new I;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(d,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),p()}function m(y){h=e.getPointAt(y/t,h);const x=o.normals[y],E=o.binormals[y];for(let S=0;S<=s;S++){const R=S/s*Math.PI*2,C=Math.sin(R),b=-Math.cos(R);c.x=b*x.x+C*E.x,c.y=b*x.y+C*E.y,c.z=b*x.z+C*E.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){const E=(s+1)*(y-1)+(x-1),S=(s+1)*y+(x-1),R=(s+1)*y+x,C=(s+1)*(y-1)+x;g.push(E,S,C),g.push(S,R,C)}}function v(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)l.x=y/t,l.y=x/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new qa(new Da[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Et extends di{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zd,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends Et{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new st(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new st(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new st(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function fa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function X1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function q1(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function _f(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function _p(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Co{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Y1 extends Co{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nu:r=e,a=2*t-n;break;case iu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nu:o=e,c=2*n-t;break;case iu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+v*o[l+E]+y*o[c+E]+x*o[u+E];return r}}class $1 extends Co{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class K1 extends Co{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ai{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fa(t,this.TimeBufferType),this.values=fa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fa(e.times,Array),values:fa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new K1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Y1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case _o:t=this.InterpolantFactoryMethodDiscrete;break;case vo:t=this.InterpolantFactoryMethodLinear;break;case ec:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _o;case this.InterpolantFactoryMethodLinear:return vo;case this.InterpolantFactoryMethodSmooth:return ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&X1(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ec,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=vo;class Ur extends Ai{constructor(e,t,n){super(e,t,n)}}Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=_o;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class vp extends Ai{}vp.prototype.ValueTypeName="color";class Cr extends Ai{}Cr.prototype.ValueTypeName="number";class j1 extends Co{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)gi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Pr extends Ai{InterpolantFactoryMethodLinear(e){return new j1(this.times,this.values,this.getValueSize(),e)}}Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class Or extends Ai{constructor(e,t,n){super(e,t,n)}}Or.prototype.ValueTypeName="string";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=_o;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends Ai{}Lr.prototype.ValueTypeName="vector";class Z1{constructor(e="",t=-1,n=[],s=v0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Q1(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ai.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=q1(c);c=_f(c,1,h),l=_f(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Cr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,_){if(d.length!==0){const m=[],p=[];_p(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const y=f[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Cr(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{const d=".bones["+t[u].name+"]";n(Lr,d+".position",f,"pos",s),n(Pr,d+".quaternion",f,"rot",s),n(Lr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function J1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cr;case"vector":case"vector2":case"vector3":case"vector4":return Lr;case"color":return vp;case"quaternion":return Pr;case"bool":case"boolean":return Ur;case"string":return Or}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Q1(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=J1(i.type);if(i.times===void 0){const t=[],n=[];_p(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const us={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ey{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const ty=new ey;class kr{constructor(e){this.manager=e!==void 0?e:ty,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}kr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class ny extends Error{constructor(e,t){super(e),this.response=t}}class yp extends kr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=us.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:s});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ui[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let S=0,R=h.length;S<R;S++){const C=h[S];C.onProgress&&C.onProgress(E)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new ny(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{us.add(e,l);const h=Ui[e];delete Ui[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ui[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class iy extends kr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=yo("img");function c(){h(),us.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Nh extends kr{constructor(e){super(e)}load(e,t,n,s){const r=new tn,o=new iy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ya extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class sy extends Ya{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Uc=new ot,vf=new I,yf=new I;class Uh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(vf),yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yf),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ry extends Uh{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class oy extends Ya{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ry}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Mf=new ot,jr=new I,Oc=new I;class ay extends Uh{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),Oc.copy(n.position),Oc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oc),n.updateMatrixWorld(),s.makeTranslation(-jr.x,-jr.y,-jr.z),Mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf)}}class $a extends Ya{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ay}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cy extends Uh{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mp extends Ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new cy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class mo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ly extends kr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return us.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),us.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});us.add(e,c),r.manager.itemStart(e)}}let da;class hy{static getContext(){return da===void 0&&(da=new(window.AudioContext||window.webkitAudioContext)),da}static setContext(e){da=e}}class bp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bf(){return performance.now()}const Ss=new I,Sf=new gi,uy=new I,ws=new I;class fy extends Dt{constructor(){super(),this.type="AudioListener",this.context=hy.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new bp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ss,Sf,uy),ws.set(0,0,-1).applyQuaternion(Sf),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ss.x,s),t.positionY.linearRampToValueAtTime(Ss.y,s),t.positionZ.linearRampToValueAtTime(Ss.z,s),t.forwardX.linearRampToValueAtTime(ws.x,s),t.forwardY.linearRampToValueAtTime(ws.y,s),t.forwardZ.linearRampToValueAtTime(ws.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(Ss.x,Ss.y,Ss.z),t.setOrientation(ws.x,ws.y,ws.z,n.x,n.y,n.z)}}class dy extends Dt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Es=new I,wf=new gi,py=new I,Ts=new I;class my extends dy{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Es,wf,py),Ts.set(0,0,1).applyQuaternion(wf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Es.x,n),t.positionY.linearRampToValueAtTime(Es.y,n),t.positionZ.linearRampToValueAtTime(Es.z,n),t.orientationX.linearRampToValueAtTime(Ts.x,n),t.orientationY.linearRampToValueAtTime(Ts.y,n),t.orientationZ.linearRampToValueAtTime(Ts.z,n)}else t.setPosition(Es.x,Es.y,Es.z),t.setOrientation(Ts.x,Ts.y,Ts.z)}}const Oh="\\[\\]\\.:\\/",gy=new RegExp("["+Oh+"]","g"),kh="[^"+Oh+"]",xy="[^"+Oh.replace("\\.","")+"]",_y=/((?:WC+[\/:])*)/.source.replace("WC",kh),vy=/(WCOD+)?/.source.replace("WCOD",xy),yy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),My=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),by=new RegExp("^"+_y+vy+yy+My+"$"),Sy=["material","materials","bones","map"];class wy{constructor(e,t,n){const s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gy,"")}static parseTrackName(e){const t=by.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Sy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=wy;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ef=new ot;class Ey{constructor(e,t,n=0,s=1/0){this.ray=new Ao(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new vh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ef),this}intersectObject(e,t=!0,n=[]){return ih(e,this,n,t),n.sort(Tf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ih(e[s],this,n,t);return n.sort(Tf),n}}function Tf(i,e){return i.distance-e.distance}function ih(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ih(r[o],e,t,!0)}}class Ty extends zs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);class Ay extends ip{constructor(){super();const e=new en;e.deleteAttribute("uv");const t=new Et({side:Sn}),n=new Et,s=new $a(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ve(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ve(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ve(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new ve(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new ve(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new ve(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new ve(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new ve(e,ar(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new ve(e,ar(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new ve(e,ar(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new ve(e,ar(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new ve(e,ar(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new ve(e,ar(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ar(i){const e=new Ln;return e.color.setScalar(i),e}const Ry=new Nh;let Sp=8;function xi(i,e,t,{repeat:n=!0,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const o=new On(r);return s&&(o.colorSpace=yt),n&&(o.wrapS=o.wrapT=pi),o.anisotropy=Sp,o}function kc(i,e=!1){const t=Ry.load(i);return t.colorSpace=yt,e&&(t.wrapS=t.wrapT=pi),t.anisotropy=Sp,t}let Fc=1337;function Je(){return Fc=Fc*16807%2147483647,(Fc-1)/2147483646}function pa(i,e,t){return xi(512,512,(n,s)=>{const o=s/4;for(let a=0;a<4;a++)for(let c=0;c<4;c++){const l=(Je()-.5)*e;n.fillStyle=`rgb(${i[0]+l},${i[1]+l},${i[2]+l})`,n.fillRect(a*o,c*o,o,o);for(let h=0;h<140;h++){const u=(Je()-.5)*e*1.4;n.fillStyle=`rgba(${i[0]+u},${i[1]+u},${i[2]+u},0.5)`,n.fillRect(a*o+Je()*o,c*o+Je()*o,2+Je()*5,2+Je()*5)}}n.strokeStyle=t,n.lineWidth=3;for(let a=0;a<=4;a++)n.beginPath(),n.moveTo(a*o,0),n.lineTo(a*o,s),n.stroke(),n.beginPath(),n.moveTo(0,a*o),n.lineTo(s,a*o),n.stroke()})}const Cy=xi(256,1024,(i,e,t)=>{i.fillStyle="#d9c7a4",i.fillRect(0,0,e,t);for(let n=0;n<90;n++){const s=Je()*e,r=.05+Je()*.12;i.strokeStyle=Je()>.5?`rgba(150,120,80,${r})`:`rgba(245,235,215,${r})`,i.lineWidth=1+Je()*3,i.beginPath(),i.moveTo(s,0);for(let o=0;o<=t;o+=64)i.lineTo(s+Math.sin(o*.01+n)*4,o);i.stroke()}}),Py=xi(256,1024,(i,e,t)=>{i.fillStyle="#a8978a",i.fillRect(0,0,e,t);for(let n=0;n<120;n++){const s=Je()*e,r=.05+Je()*.1;i.strokeStyle=Je()>.5?`rgba(90,75,65,${r})`:`rgba(210,200,190,${r})`,i.lineWidth=1+Je()*2.5,i.beginPath(),i.moveTo(s,0);for(let o=0;o<=t;o+=64)i.lineTo(s+Math.sin(o*.012+n)*3,o);i.stroke()}}),Ly=xi(256,96,(i,e,t)=>{i.fillStyle="#e4e4e2",i.fillRect(0,0,e,t);for(let n=0;n<4;n++)for(let s=0;s<14;s++)n===3&&s>3&&s<9||(i.fillStyle="#fafafa",i.strokeStyle="#b9b9b6",i.lineWidth=1.5,i.beginPath(),i.arc(14+s*17.5,14+n*22,7.5,0,7),i.fill(),i.stroke());i.beginPath(),i.roundRect(80,70,90,15,7),i.fill(),i.stroke()}),Iy=xi(128,128,(i,e)=>{i.fillStyle="#c4c5c8",i.fillRect(0,0,e,e);for(let t=0;t<40;t++)i.fillStyle=`rgba(255,255,255,${.03+Je()*.05})`,i.fillRect(0,Je()*e,e,1);i.fillStyle="#8d8e92",i.beginPath(),i.arc(60,70,15,0,7),i.arc(76,70,15,0,7),i.fill(),i.beginPath(),i.ellipse(68,80,18,20,0,0,7),i.fill(),i.fillStyle="#c4c5c8",i.beginPath(),i.arc(90,62,10,0,7),i.fill(),i.fillStyle="#8d8e92",i.beginPath(),i.ellipse(70,46,9,5,-.7,0,7),i.fill()},{repeat:!1}),Dy=xi(512,512,(i,e)=>{const n=e/2;i.fillStyle="#111111",i.fillRect(0,0,e,e),i.fillStyle="#d6ccb2",i.beginPath(),i.moveTo(0,0),i.lineTo(n,0),i.lineTo(n,n),i.closePath(),i.fill(),i.strokeStyle="#ecc828",i.lineWidth=7;for(let s=0;s<=2;s++)i.beginPath(),i.moveTo(s*n,0),i.lineTo(s*n,e),i.stroke(),i.beginPath(),i.moveTo(0,s*n),i.lineTo(e,s*n),i.stroke();i.beginPath(),i.moveTo(0,0),i.lineTo(e,e),i.moveTo(n,0),i.lineTo(e,n),i.moveTo(0,n),i.lineTo(n,e),i.stroke()}),Af=xi(256,160,(i,e,t)=>{i.fillStyle="#1b1d24",i.fillRect(0,0,e,t),i.fillStyle="#2a2d36",i.fillRect(0,0,40,t);const n=["#c792ea","#82aaff","#c3e88d","#f78c6c","#89ddff","#d0d0d0"];for(let s=8;s<t-4;s+=7){let r=48+Math.floor(Je()*4)*8;const o=1+Math.floor(Je()*4);for(let a=0;a<o&&r<e-10;a++){const c=10+Je()*45;i.fillStyle=n[Math.floor(Je()*n.length)],i.fillRect(r,s,c,3),r+=c+5}}},{repeat:!1}),Rf=xi(256,160,(i,e,t)=>{i.fillStyle="#f4f6fa",i.fillRect(0,0,e,t),i.fillStyle="#26324a",i.fillRect(0,0,36,t),i.fillStyle="#ffffff";for(let n=0;n<3;n++)i.fillRect(44+n*70,10,62,34);i.fillStyle="#4c7cf0";for(let n=0;n<12;n++){const s=10+Je()*50;i.fillRect(48+n*16,140-s,9,s)}i.fillStyle="#26c281",i.fillRect(50,20,40,6),i.fillStyle="#f0a04c",i.fillRect(120,20,40,6)},{repeat:!1}),Cf=xi(256,160,(i,e,t)=>{const n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#20263a"),n.addColorStop(1,"#3b2a4f"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,.85)";for(let s=0;s<4;s++)i.fillRect(30,30+s*22,120+Je()*60,8);i.fillStyle="#ecc828",i.fillRect(30,120,60,14)},{repeat:!1}),Ny=xi(1024,360,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#3a3a38",i.textAlign="center",i.font='700 210px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("pixbit",e/2,200),i.font='500 78px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("· s o l u t i o n s ·",e/2,320)},{repeat:!1}),Uy=xi(256,256,(i,e)=>{const t=e/2;i.fillStyle="#f7f7f5",i.beginPath(),i.arc(t,t,t-4,0,Math.PI*2),i.fill(),i.lineWidth=10,i.strokeStyle="#222",i.stroke(),i.fillStyle="#222";for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.fillRect(t+Math.sin(s)*96-3,t-Math.cos(s)*96-9,6,18)}i.lineCap="round",i.lineWidth=8,i.beginPath(),i.moveTo(t,t),i.lineTo(t+50,t-30),i.stroke(),i.lineWidth=5,i.beginPath(),i.moveTo(t,t),i.lineTo(t-20,t-85),i.stroke()},{repeat:!1}),Ke=i=>new Et(i),w={floorBeige:Ke({map:pa([196,180,160],14,"#a8998a"),roughness:.3,metalness:0}),floorDark:Ke({map:pa([78,78,80],12,"#5a5a5c"),roughness:.6}),floorTerrace:Ke({map:pa([184,160,136],16,"#9c7e66"),roughness:.75}),floorCorridor:Ke({map:pa([226,214,196],8,"#cbbfae"),roughness:.12}),wall:Ke({color:"#dededb",roughness:.92}),wallWarm:Ke({color:"#e6e1d6",roughness:.92}),concrete:Ke({map:kc("textures/concrete.jpg",!0),roughness:.95}),ceilingBlack:Ke({color:"#151516",roughness:.95}),diamond:Ke({map:Dy,roughness:.7}),yellow:Ke({color:"#ecc21c",roughness:.5}),black:Ke({color:"#161616",roughness:.45,metalness:.3}),blackMatte:Ke({color:"#1e1e1e",roughness:.85}),metalDark:Ke({color:"#2a2a2c",roughness:.35,metalness:.7}),chrome:Ke({color:"#b9bcc0",roughness:.2,metalness:1}),mesh:Ke({color:"#262628",roughness:.9}),fabric:Ke({color:"#2d2d30",roughness:1}),leather:Ke({color:"#1a1a1a",roughness:.38,metalness:.05}),wood:Ke({map:Cy,roughness:.6}),greyOak:Ke({map:Py,roughness:.75}),oakEdge:Ke({color:"#d9cfb4",roughness:.7}),macTop:Ke({map:Iy,roughness:.35,metalness:.6}),silver:Ke({color:"#c9cacc",roughness:.3,metalness:.8}),keyboardTop:Ke({map:Ly,roughness:.5}),woodDark:Ke({color:"#7a5233",roughness:.6}),white:Ke({color:"#f3f3f1",roughness:.5}),whiteGloss:Ke({color:"#f5f5f3",roughness:.2}),cream:Ke({color:"#e8e2c8",roughness:.6}),glass:new Et({color:"#cfdde0",transparent:!0,opacity:.16,roughness:.05,metalness:.1,depthWrite:!1,side:Ot}),glassFrost:new Et({color:"#f2f2f0",transparent:!0,opacity:.82,roughness:.5,depthWrite:!1,side:Ot}),glassYellow:Ke({color:"#f1d27a",emissive:"#a8820f",emissiveIntensity:.35,roughness:.4}),lightStrip:Ke({color:"#ffffff",emissive:"#fff4e0",emissiveIntensity:2.2}),spotGlow:Ke({color:"#ffffff",emissive:"#ffe9c4",emissiveIntensity:3}),screenCode:Ke({map:Af,emissive:"#ffffff",emissiveMap:Af,emissiveIntensity:.9,roughness:.3}),screenDash:Ke({map:Rf,emissive:"#ffffff",emissiveMap:Rf,emissiveIntensity:.7,roughness:.3}),screenDark:Ke({map:Cf,emissive:"#ffffff",emissiveMap:Cf,emissiveIntensity:.8,roughness:.3}),screenOff:Ke({color:"#0b0b0c",roughness:.15,metalness:.3}),plant:Ke({color:"#3d6b2f",roughness:.7}),plantLight:Ke({color:"#7f9b3a",roughness:.7}),soil:Ke({color:"#3a2c20",roughness:1}),plantDark:Ke({color:"#2c4f24",roughness:.55}),stem:Ke({color:"#4f7a34",roughness:.7}),petalPink:Ke({color:"#e8738f",roughness:.6}),petalWhite:Ke({color:"#f6f2ea",roughness:.6}),petalYellow:Ke({color:"#f2c230",roughness:.6}),flowerCentre:Ke({color:"#d99a1c",roughness:.8}),ceramic:Ke({color:"#efece6",roughness:.25}),led:Ke({color:"#ffffff",emissive:"#dff1ff",emissiveIntensity:2}),beanbag:Ke({color:"#3b3d40",roughness:.95}),bottleYellow:Ke({color:"#f2b705",roughness:.3,metalness:.4}),bottleBlue:Ke({color:"#1f4fa8",roughness:.3,metalness:.4}),bottleTeal:Ke({color:"#3ab7a6",roughness:.3}),red:Ke({color:"#b23a2e",roughness:.6}),pergola:Ke({color:"#8a4b3a",roughness:.8}),rail:Ke({color:"#4a4a4a",roughness:.4,metalness:.6}),logo:Ke({map:kc("textures/logo.png"),transparent:!0,alphaTest:.4,roughness:.4}),logoText:Ke({map:Ny,transparent:!0,alphaTest:.3,roughness:.6}),gallery:Ke({map:kc("textures/gallery.jpg"),roughness:.6}),clock:Ke({map:Uy,roughness:.5})};w.screens=[w.screenCode,w.screenCode,w.screenDash,w.screenDark];const Zr=new I;function Zn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Zr.copy(e),Zr[n]=0,Zr.normalize();const l=.5*o/(o+a),h=1-Zr.angleTo(i)/c;return Math.sign(Zr[t])===1?h*l:a/(o+a)+l+l*(1-h)}class Oy extends en{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new I,c=new I,l=new I(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new I,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=Zn(g,c,"z","y",r,n),f[p+1]=1-Zn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-Zn(g,c,"z","y",r,n),f[p+1]=1-Zn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-Zn(g,c,"x","z",r,e),f[p+1]=Zn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-Zn(g,c,"x","z",r,e),f[p+1]=1-Zn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-Zn(g,c,"x","y",r,e),f[p+1]=1-Zn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=Zn(g,c,"x","y",r,e),f[p+1]=1-Zn(g,c,"y","x",r,t);break}}}function Ka(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ht;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Pf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=Pf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Pf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new wn(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Lf(i,e){if(e===y0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===$l||e===Bd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===$l)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class ky extends kr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vy(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new Hy(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new By(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new nM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=mo.extractUrlBase(e);o=mo.resolveURL(l,this.path)}else o=mo.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new yp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wp){try{o[dt.KHR_BINARY_GLTF]=new iM(e)}catch(u){s&&s(u);return}r=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new gM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:o[u]=new zy;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[u]=new sM(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[u]=new rM;break;case dt.KHR_MESH_QUANTIZATION:o[u]=new oM;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Fy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class By{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new st(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Nn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Mp(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $a(h),l.distance=u;break;case"spot":l=new oy(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,zi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class zy{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,t,n){const s=[];e.color=new st(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}}class Hy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Vy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(a,a)}return Promise.all(r)}}class Gy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Wy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Xy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new st(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class qy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Yy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new st().setRGB(a[0],a[1],a[2],Nn),Promise.all(r)}}class $y{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Ky{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new st().setRGB(a[0],a[1],a[2],Nn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(r)}}class jy{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Zy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Jy{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Qy{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class eM{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tM{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}}class nM{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Qn.TRIANGLES&&l.mode!==Qn.TRIANGLE_STRIP&&l.mode!==Qn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const g of u){const _=new ot,m=new I,p=new gi,v=new I(1,1,1),y=new u1(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(m,p,v));for(const x in c)if(x==="_COLOR_0"){const E=c[x];y.instanceColor=new Jl(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Dt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const wp="glTF",Jr=12,If={JSON:1313821514,BIN:5130562};class iM{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Jr,r=new DataView(e,Jr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===If.JSON){const l=new Uint8Array(e,Jr+o,a);this.content=n.decode(l)}else if(c===If.BIN){const l=Jr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class sM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=sh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=sh[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=vr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(const g in d.attributes){const _=d.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(d)},a,l,Nn,f)})})}}class rM{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class oM{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}}class Ep extends Co{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,_=g-l,m=-2*d+3*f,p=d-f,v=1-m,y=p-f+u;for(let x=0;x!==a;x++){const E=o[_+x+a],S=o[_+x+c]*h,R=o[g+x+a],C=o[g+x]*h;r[x]=v*E+y*S+m*R+p*C}return r}}const aM=new gi;class cM extends Ep{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return aM.fromArray(r).normalize().toArray(r),r}}const Qn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Df={9728:In,9729:Yn,9984:Cd,9985:Ma,9986:ro,9987:Vi},Nf={33071:hs,33648:Ca,10497:pi},Bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lM={CUBICSPLINE:void 0,LINEAR:vo,STEP:_o},zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function hM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Et({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qi})),i.DefaultMaterial}function As(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function uM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function fM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dM(i){let e;const t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hc(t.attributes):e=i.indices+":"+Hc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Hc(i.targets[n]);return e}function Hc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function rh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const mM=new ot;class gM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Fy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Nh(this.options.manager):this.textureLoader=new ly(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return As(r,a,s),zi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(mo.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Bc[s.type],a=vr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new wn(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Bc[s.type],l=vr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==u){const p=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(v);y||(_=new l(a,p*d,s.count*d/h),y=new sp(_,d/h),t.cache.add(v,y)),m=new Mo(y,c,f%d/h,g)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new wn(_,c,g);if(s.sparse!==void 0){const p=Bc.SCALAR,v=vr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,E=new v(o[1],y,s.sparse.count*p),S=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new wn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,C=E.length;R<C;R++){const b=E[R];if(m.setX(b,S[R*c]),c>=2&&m.setY(b,S[R*c+1]),c>=3&&m.setZ(b,S[R*c+2]),c>=4&&m.setW(b,S[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Df[f.magFilter]||Yn,h.minFilter=Df[f.minFilter]||Vi,h.wrapS=Nf[f.wrapS]||pi,h.wrapT=Nf[f.wrapT]||pi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==In&&h.minFilter!==Yn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new tn(_);m.needsUpdate=!0,f(m)}),t.load(mo.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),zi(u,o),u.userData.mimeType=o.mimeType||pM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new lp,di.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Eh,di.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Et}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){const u=s[dt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new st(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Nn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,yt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ot);const h=r.alphaMode||zc.OPAQUE;if(h===zc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===zc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ln&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ln&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ln){const u=r.emissiveFactor;a.emissive=new st().setRGB(u[0],u[1],u[2],Nn)}return r.emissiveTexture!==void 0&&o!==Ln&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&As(s,u,r),u})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Uf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=dM(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Uf(new Ht,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?hM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const _=h[d],m=o[d];let p;const v=l[d];if(m.mode===Qn.TRIANGLES||m.mode===Qn.TRIANGLE_STRIP||m.mode===Qn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new c1(_,v):new ve(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Qn.TRIANGLE_STRIP?p.geometry=Lf(p.geometry,Bd):m.mode===Qn.TRIANGLE_FAN&&(p.geometry=Lf(p.geometry,$l));else if(m.mode===Qn.LINES)p=new f1(_,v);else if(m.mode===Qn.LINE_STRIP)p=new Th(_,v);else if(m.mode===Qn.LINE_LOOP)p=new cp(_,v);else if(m.mode===Qn.POINTS)p=new d1(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&fM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),zi(p,r),m.extensions&&As(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&As(s,u[0],r),u[0];const f=new nt;r.extensions&&As(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Cn(Y0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Mh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new ot;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new wh(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,y=f.length;v<y;v++){const x=f[v],E=d[v],S=g[v],R=_[v],C=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const b=n._createAnimationTracks(x,E,S,R,C);if(b)for(let M=0;M<b.length;M++)p.push(b[M])}return new Z1(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,mM)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new op:l.length>1?h=new nt:l.length===1?h=l[0]:h=new Dt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),zi(h,r),r.extensions&&As(n,h,r),r.matrix!==void 0){const u=new ot;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new nt;n.name&&(r.name=s.createUniqueName(n.name)),zi(r,n),n.extensions&&As(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof di||f instanceof tn)&&u.set(f,d);return h.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];is[r.path]===is.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(is[r.path]){case is.weights:l=Cr;break;case is.rotation:l=Pr;break;case is.position:case is.scale:l=Lr;break;default:switch(n.itemSize){case 1:l=Cr;break;case 2:case 3:default:l=Lr;break}break}const h=s.interpolation!==void 0?lM[s.interpolation]:vo,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+is[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=rh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Pr?cM:Ep;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function xM(i,e,t){const n=e.attributes,s=new Si;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const h=rh(vr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=rh(vr[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new wi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Uf(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=sh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return mt.workingColorSpace!==Nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),zi(i,e),xM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?uM(i,e.targets,t):i})}const Vc=new Map;function dn(i,e){return Vc.has(i)||Vc.set(i,e()),Vc.get(i)}function _M(i,e,t){const n=new Ro,s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),n}function co(i,e,t,n,s){const r=new Wa(_M(i-2*s,e-2*s,Math.max(.001,n-s)),{depth:t-2*s,bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:6});return r.translate(0,0,s),r}const ma={shell:()=>dn("mon.shell",()=>{const i=co(.536,.322,.012,.008,.0025);return i.translate(0,.35-.005,-.0592-.012),i}),back:()=>dn("mon.back",()=>{const i=co(.42,.22,.016,.03,.006);i.translate(0,.335,-.0712-.016);const e=co(.22,.13,.014,.03,.006);return e.translate(0,.325,-.0872-.014),Ka([i,e])}),arm:()=>dn("mon.arm",()=>{const i=new hp([new I(0,.008,-.03),new I(0,.05,-.085),new I(0,.16,-.13),new I(0,.27,-.125),new I(0,.31,-.1)]),e=new qa(i,24,1,10,!1),t=e.attributes.position,n=new I,s=new I;for(let r=0;r<t.count;r++){const o=Math.floor(r/11),a=o/24;i.getPointAt(Math.min(1,a),s),n.set(t.getX(r),t.getY(r),t.getZ(r)).sub(s),t.setXYZ(r,s.x+n.x*.024,s.y+n.y*.008,s.z+n.z*.008)}return e.computeVertexNormals(),e}),foot:()=>dn("mon.foot",()=>{const i=co(.24,.17,.008,.07,.003);return i.rotateX(-Math.PI/2),i.translate(0,0,-.05),i})},Of={base:()=>dn("kb.base",()=>{const i=co(.28,.108,.01,.008,.003);i.rotateX(-Math.PI/2);const e=i.attributes.position;for(let t=0;t<e.count;t++)e.getY(t)>.005&&e.getZ(t)<0&&e.setY(t,e.getY(t)+.004*(-e.getZ(t)/.054));return i.computeVertexNormals(),i.translate(-.01,0,.25),i}),keys:()=>dn("kb.keys",()=>{const i=[],s=(r,o,a)=>{const c=new en(a,.004,.0155);c.translate(r,.0125+.004*(.304-o)/.108,o),i.push(c)};for(let r=0;r<5;r++){const o=.213+r*.0185;if(r===4){let c=-.132;for(const l of[1,1,1.25,6.5,1.25,1,1,1]){const h=l*.0185-.002999999999999999;s(c+h/2,o,h),c+=l*.0185}continue}const a=14;for(let c=0;c<a;c++)s(-.01-.13+.008+.0155/2+c*.0185+r%2*.004,o,.0155)}return Ka(i)})},kf={shell:()=>dn("mouse.shell",()=>{const i=new Zt(1,20,12,0,Math.PI*2,0,Math.PI/2);i.scale(.03,.022,.054);const e=i.attributes.position;for(let t=0;t<e.count;t++)e.setY(t,e.getY(t)*(1+.15*Math.max(0,e.getZ(t)/.054)));return i.computeVertexNormals(),i}),wheel:()=>dn("mouse.wheel",()=>{const i=new Dn(.006,.006,.005,12);return i.rotateZ(Math.PI/2),i})},Ff={body:()=>dn("bottle.body",()=>new Dr([[0,0],[.028,0],[.032,.006],[.032,.16],[.03,.18],[.022,.196],[.019,.2],[0,.2]].map(([i,e])=>new ye(i,e)),18)),cap:()=>dn("bottle.cap",()=>new Dn(.02,.021,.03,16).translate(0,.215,0))};function Tp(i=0,{width:e=.09,thick:t=.016,bend:n=.08,twist:s=.5}={}){return dn(`blade.${i}.${e}.${t}.${n}.${s}`,()=>{const o=[],a=[],c=n*(.6+.4*(i*37%10)/10)*(i%2?-1:1),l=s*(i%3===2?-1:1);for(let f=0;f<=10;f++){const d=f/10,g=e/2*Math.sin(Math.PI*Math.min(1,.12+d*.95))*(1-.35*d),_=t/2*(1-d*.85),m=l*d,p=Math.cos(m),v=Math.sin(m),y=c*d*d;for(const[x,E]of[[-g,0],[0,_],[g,0],[0,-_]])o.push(x*p-E*v,d,y+x*v+E*p)}const h=o.length/3;o.push(0,1.04,c*1.08);for(let f=0;f<10;f++)for(let d=0;d<4;d++){const g=f*4+d,_=f*4+(d+1)%4,m=g+4,p=_+4;a.push(g,_,m,_,p,m)}for(let f=0;f<4;f++)a.push(10*4+f,10*4+(f+1)%4,h);a.push(0,2,1,0,3,2);const u=new Ht;return u.setAttribute("position",new ft(o,3)),u.setIndex(a),u.computeVertexNormals(),u})}function vM(i,e){return dn(`planter.${i}.${e}`,()=>{const t=i/2-.004,n=t*.78,s=new Dr([[0,.002],[n-.01,0],[n,.012],[t-.012,e-.03],[t,e-.02],[t,e-.004],[t-.006,e],[t-.016,e-.004],[t-.018,e-.04]].map(([o,a])=>new ye(o,a)),32),r=new $n(t-.016,28).rotateX(-Math.PI/2).translate(0,e-.035,0);return{pot:s,soil:r,soilY:e-.035}})}const ga={petal:()=>dn("fl.petal",()=>{const i=new Zt(1,10,6);return i.scale(.011,.0025,.022),i.translate(0,0,.02),i}),centre:()=>dn("fl.centre",()=>new Zt(.009,10,8).scale(1,.6,1)),pot:()=>dn("fl.pot",()=>new Dr([[0,.002],[.04,0],[.046,.01],[.058,.1],[.062,.108],[.06,.112],[.054,.105]].map(([i,e])=>new ye(i,e)),28)),soil:()=>dn("fl.soil",()=>new $n(.055,20).rotateX(-Math.PI/2).translate(0,.1,0))};function yM(i){const e=`stem.${i.map(t=>t.toFixed(3)).join(",")}`;return dn(e,()=>{const t=new Ch(new I(0,0,0),new I(i[0]*.2,i[1]*.6,i[2]*.2),new I(...i));return new qa(t,10,.0025,5,!1)})}new ky;const MM=new en(1,1,1);function T(i,e,t,n,s,r,o,a,{shadow:c=!0,ry:l=0,rx:h=0,rz:u=0}={}){const f=new ve(MM,e);return f.scale.set(t,n,s),f.position.set(r,o,a),f.rotation.set(h,l,u),f.castShadow=c,f.receiveShadow=!0,i.add(f),f}function et(i,e,t,n,s,r,o,a,{seg:c=12,shadow:l=!0,rx:h=0,rz:u=0,open:f=!1}={}){const d=new ve(new Dn(t,n,s,c,1,f),e);return d.position.set(r,o,a),d.rotation.set(h,0,u),d.castShadow=l,d.receiveShadow=!0,i.add(d),d}function Hi(i,e,t,n,s,r,o,a,c){const l=new ve(new Oy(t,n,s,2,r),e);return l.position.set(o,a,c),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function gt(i,e,t,n,s,r,o,a=0,c=0){const l=new ve(new ut(t,n),e);return l.position.set(s,r,o),l.rotation.set(c,a,0,"YXZ"),l.receiveShadow=!0,i.add(l),l}function Jt(i,e,t,n=0,s=0,r=0,{shadow:o=!0,rx:a=0,ry:c=0,rz:l=0,s:h=null}={}){const u=new ve(e,t);return u.position.set(n,s,r),u.rotation.set(a,c,l),h&&(Array.isArray(h)?u.scale.set(...h):u.scale.setScalar(h)),u.castShadow=o,u.receiveShadow=!0,i.add(u),u}function Un(i,e=0,t=0,n=0,s=0){const r=new nt;return r.position.set(e,t,n),r.rotation.y=s,i.add(r),r}function yr(i,e,t,n=0,{exec:s=!1}={}){const r=Un(i,e,0,t,n);r.userData.label="Chair";for(let c=0;c<5;c++){const l=c/5*Math.PI*2,h=T(r,w.black,.04,.035,.32,Math.sin(l)*.15,.07,Math.cos(l)*.15,{ry:l});h.castShadow=!1,et(r,w.black,.025,.025,.04,Math.sin(l)*.3,.03,Math.cos(l)*.3,{seg:6,shadow:!1})}et(r,w.chrome,.025,.025,.32,0,.26,0,{seg:8}),Hi(r,w.fabric,.5,.08,.48,.03,0,.47,0);const o=s?.75:.55;T(r,w.black,.04,.5,.04,0,.62,-.25);const a=T(r,w.mesh,.46,o,.05,0,.62+o/2,-.27,{rx:-.1});a.material=w.mesh,s&&T(r,w.mesh,.3,.14,.06,0,1.45,-.33,{rx:-.1});for(const c of[-1,1])T(r,w.black,.035,.22,.035,c*.26,.6,-.02),T(r,w.black,.06,.025,.24,c*.26,.72,.02);return r}function Ap(i,e,t,n=0){const s=Un(i,e,0,t,n);s.userData.label="Visitor chair";for(const r of[-1,1])T(s,w.chrome,.025,.025,.5,r*.22,.012,.05),T(s,w.chrome,.025,.45,.025,r*.22,.23,.29,{rx:.05});return T(s,w.fabric,.48,.06,.46,0,.47,.05),T(s,w.mesh,.46,.5,.04,0,.78,-.2,{rx:-.12}),s}function bM(i,e,t,n,s=0){const r=Un(i,e,.77,t,n);r.userData.label="Monitor",Jt(r,ma.foot(),w.black),Jt(r,ma.arm(),w.silver),Jt(r,ma.back(),w.black),Jt(r,ma.shell(),w.black),gt(r,s%3===2?w.screenDash:w.screenCode,.52,.3,0,.35,-.058),T(r,w.led,.006,.0025,.002,.235,.35-.1665,-.0585,{shadow:!1});const o=-.26,a=.06;Hi(r,w.black,.114,.006,.114,.002,o,.003,a),Hi(r,w.silver,.12,.03,.12,.012,o,.021,a),gt(r,w.macTop,.09,.09,o,.0365,a,0,-Math.PI/2),T(r,w.black,.012,.004,.002,o-.03,.021,a+.0605,{shadow:!1}),T(r,w.black,.012,.004,.002,o-.012,.021,a+.0605,{shadow:!1}),T(r,w.white,.004,.004,.002,o+.04,.021,a+.0605,{shadow:!1}),Jt(r,Of.base(),w.silver,0,0,0,{shadow:!1}),Jt(r,Of.keys(),w.white,0,0,0,{shadow:!1});const c=.24,l=.24;return Jt(r,kf.shell(),w.blackMatte,c,0,l),T(r,w.black,.0015,.003,.024,c,.0195,l-.02,{shadow:!1,rx:.25}),Jt(r,kf.wheel(),w.chrome,c,.0185,l-.024,{shadow:!1}),s%3===0&&(Jt(r,Ff.body(),w.bottleYellow,.28,0,-.04),Jt(r,Ff.cap(),w.black,.28,0,-.04,{shadow:!1})),r}function Bf(i,e,t,n,{width:s=1.5,seats:r=!0,solidFn:o,seatW:a=1.1,chairOff:c=.12,sides:l=[-1,1]}={}){const h=Un(i,e,0,0);h.userData.label="Desk";const u=n-t,f=(t+n)/2;T(h,w.greyOak,s,.04,u,0,.75,f),T(h,w.oakEdge,s+.004,.012,u+.004,0,.734,f,{shadow:!1});const d=Math.max(2,Math.round(u/2)+1);for(let m=0;m<d;m++){const p=t+.12+m/(d-1)*(u-.24);for(const v of[-1,1])T(h,w.black,.05,.78,.05,v*(s/2-.22),.37,p,{rz:v*.2}),T(h,w.black,.05,.78,.05,v*(s/2-.22),.37,p,{rz:-v*.2});T(h,w.black,s-.2,.05,.05,0,.72,p)}if(o&&o(e-s/2,t,e+s/2,n),!r)return h;const g=Math.max(1,Math.floor(u/a+1e-6));let _=0;for(const m of l)for(let p=0;p<g;p++){const v=t+(p+.5)*(u/g),y=l.length===2?m*.22:-m*(s/2-.2);bM(h,y,v,m*Math.PI/2,_++);const x=e+m*(s/2+c);yr(i,x,v,m>0?-Math.PI/2:Math.PI/2),o&&o(x-.2,v-.2,x+.2,v+.2)}return h}function Fh(i,e,t,n=0,s=2){const r=Un(i,e,0,t,n);r.userData.label="Sofa";const o=s*.75+.3;Hi(r,w.leather,o,.38,.9,.06,0,.24,0),Hi(r,w.leather,o,.5,.22,.08,0,.62,-.34);for(const a of[-1,1])Hi(r,w.leather,.18,.62,.9,.06,a*(o/2-.09),.33,0);for(let a=0;a<s;a++){const c=-o/2+.15+.75*(a+.5);Hi(r,w.leather,.72,.14,.62,.06,c,.49,.08);const l=Hi(r,w.leather,.5,.4,.14,.07,c,.78,-.18);l.rotation.x=-.18}return r}function ja(i,e,t,n,s=9,r=.8){const o=Un(i,e,t,n);o.userData.label="Plant";for(let a=0;a<s;a++){const c=r*(.6+Je()*.6),l=Je()>.3;Jt(o,Tp(a%5),l?w.plant:a%2?w.plantDark:w.plantLight,(Je()-.5)*.3,0,(Je()-.5)*.2,{s:[1,c,1]}).rotation.set((Je()-.5)*.35,Je()*Math.PI,(Je()-.5)*.35)}return o}function Bh(i,e,t,{size:n=.45,h:s=.45,mat:r=w.white}={}){const o=Un(i,e,0,t);o.userData.label="Plant";const{pot:a,soil:c,soilY:l}=vM(n,s);return Jt(o,a,r),Jt(o,c,w.soil,0,0,0,{shadow:!1}),ja(o,0,l-.01,0,11,.9),o}function Rp(i,e,t,n,{petal:s=w.petalPink,n:r=5,scale:o=1}={}){const a=Un(i,e,t,n);a.userData.label="Flowers",a.scale.setScalar(o),Jt(a,ga.pot(),w.ceramic),Jt(a,ga.soil(),w.soil,0,0,0,{shadow:!1});const c=l=>{const h=Math.sin(l*127.1+e*311.7+n*74.7)*43758.5453;return h-Math.floor(h)};for(let l=0;l<r;l++){const h=l/r*Math.PI*2+c(l)*.6,u=.025+c(l+9)*.06,f=.16+c(l+3)*.12,d=[Math.cos(h)*u,f,Math.sin(h)*u];Jt(a,yM(d),w.stem,0,.1,0,{shadow:!1});const g=Un(a,d[0],.1+d[1],d[2]);g.rotation.set(Math.sin(h)*.5,0,-Math.cos(h)*.5);const _=6;for(let m=0;m<_;m++)Jt(g,ga.petal(),s,0,0,0,{ry:m/_*Math.PI*2+c(l+m)*.2,rx:-.35,shadow:!1});Jt(g,ga.centre(),w.flowerCentre,0,.003,0,{shadow:!1})}for(let l=0;l<6;l++)Jt(a,Tp(l,{width:.035,thick:.006,bend:.06,twist:.3}),l%2?w.plant:w.plantDark,0,.098,0,{s:[1,.11+c(l+20)*.05,1],shadow:!1}).rotation.set(.7+c(l+30)*.3,l/6*Math.PI*2,0,"YXZ");return a}function Cp(i,e,t,n=w.beanbag){const s=new ve(new Zt(.5,20,14),n);return s.scale.set(1,.65,1.05),s.position.set(e,.3,t),s.userData.label="Bean bag",s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function SM(i,e,t,n,{yellowCubbies:s=[]}={}){const r=Un(i,e,0,0);r.userData.label="Shelving";const o=n-t,a=(t+n)/2,c=.4,l=2.4,h=.55;T(r,w.white,c,h,o,0,h/2,a);const u=Math.max(1,Math.round(o/1.1));for(let d=0;d<u;d++){const g=t+(d+.5)*(o/u);T(r,w.blackMatte,.3,.32,.3,0,h+.16,g),ja(r,0,h+.32,g,7,.6)}for(const d of[t+.02,n-.02])for(const g of[-1,1])T(r,w.black,.025,l-h,.025,g*c/2,h+(l-h)/2,d);for(const d of[1.55,l]){for(const g of[-1,1])T(r,w.black,.025,.025,o,g*c/2,d,a,{shadow:!1});T(r,w.black,c,.012,o,0,d-.01,a,{shadow:!1})}const f=Math.max(1,Math.round(o/.65));for(let d=1;d<f;d++)for(const g of[-1,1])T(r,w.black,.02,l-h,.02,g*c/2,h+(l-h)/2,t+d/f*o,{shadow:!1});for(const d of s){if(d.i>=f)continue;const g=t+(d.i+.5)*(o/f),_=d.row===0?1.2:1.9;T(r,w.yellow,c-.05,.45,o/f-.08,0,_,g)}for(let d=0;d<f;d++)Je()<.3&&T(r,w.blackMatte,.12,.15+Je()*.1,.12,0,1.55+.09,t+(d+.5)*(o/f));return r}function Pp(i,e,t,n=2.4,s=0,r=2.6,o=3.6){const a=Un(i,e,r,t,s);a.userData.label="Light",T(a,w.black,n,.06,.08,0,0,0,{shadow:!1}),gt(a,w.lightStrip,n-.04,.05,0,-.031,0,0,Math.PI/2);for(const c of[-.4,.4])et(a,w.black,.003,.003,o-r,c*n,(o-r)/2,0,{seg:3,shadow:!1});return a}function Na(i,e,t,n=2.2,s=3.6,r=1){const o=Un(i,e,n,t);o.userData.label="Pendant light",et(o,w.black,.004,.004,s-n,0,(s-n)/2,0,{seg:3,shadow:!1});const a=new ve(new Lh(.18*r,.26*r,20,1,!0),w.black);a.position.y=-.1*r,a.material.side=Ot,o.add(a),et(o,w.black,.02,.02,.06,0,.05,0,{seg:8,shadow:!1});const c=new ve(new $n(.15*r,16),w.spotGlow);return c.rotation.x=Math.PI/2,c.position.y=-.22*r,o.add(c),o}function wM(i,e,t,n){et(i,w.black,.05,.05,.12,e,n-.06,t,{seg:10,shadow:!1});const s=new ve(new $n(.035,10),w.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,n-.121,t),i.add(s)}function zh(i,e,t,n,s=0){const r=Un(i,e,t,n,s);return r.userData.label="AC unit",Hi(r,w.white,.9,.28,.2,.05,0,0,.1),T(r,w.metalDark,.8,.02,.02,0,-.1,.2,{shadow:!1}),r}function EM(i,e,t,n=3){T(i,w.white,.85,.12,.85,e,n,t,{shadow:!1}),T(i,w.metalDark,.55,.02,.55,e,n-.065,t,{shadow:!1})}function TM(i,e,t,n,s=0,r=2.4){const o=n-t,a=Un(i,e,0,(t+n)/2,s);a.userData.label="Lockers";const c=Math.round(o/.5),l=5,h=o/c,u=(r-.1)/l;T(a,w.white,.02,r,o,-.265,r/2,0),T(a,w.white,.55,.1,o,0,.05,0);for(let f=0;f<=l;f++)T(a,w.white,.55,.02,o,0,f===l?r-.01:.1+f*u,0);for(let f=0;f<=c;f++)T(a,w.white,.55,r,.02,0,r/2,-o/2+f*h+(f===c?-.01:f===0?.01:0));a.updateMatrixWorld(!0);for(let f=0;f<c;f++)for(let d=0;d<l;d++){const g=-o/2+(f+.5)*h,_=.1+(d+.5)*u;Je()<.35&&T(a,Je()<.5?w.bottleYellow:w.black,.22,.05+Je()*.12,h-.16,0,.1+d*u+.02+.03,g,{shadow:!1});const m=new nt;m.position.copy(a.localToWorld(new I(.285,_,g-h/2+.01))),m.rotation.y=a.rotation.y,T(m,w.whiteGloss,.01,u-.02,h-.02,0,0,h/2-.01,{shadow:!1}),T(m,w.metalDark,.02,.07,.07,.01,.08,h-.09,{shadow:!1,rx:Math.PI/4}),Ua.push({leaf:m,closed:a.rotation.y,open:a.rotation.y+1.9,center:a.localToWorld(new I(.285,_,g))})}return a}function AM(i,e,t,n,s=0){const r=Un(i,e,t,n,s);r.userData.label="Wall clock";const o=new ve(new $n(.2,32),w.clock);o.position.z=.03,r.add(o);const a=new ve(new Nr(.2,.02,8,32),w.black);return a.position.z=.03,r.add(a),r}const os=[];function He(i,e,t,n){os.push({minX:Math.min(i,t),maxX:Math.max(i,t),minZ:Math.min(e,n),maxZ:Math.max(e,n)})}const Qr=new Si;function Pn(i,e=0){return i.updateMatrixWorld(!0),Qr.setFromObject(i),He(Qr.min.x-e,Qr.min.z-e,Qr.max.x+e,Qr.max.z+e),i}function zf(i,e,t){for(const n of os)if(i+t>n.minX&&i-t<n.maxX&&e+t>n.minZ&&e-t<n.maxZ)return n;return null}function RM(i,e,t,n){const s=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(t))/(n*.5))),r=e/s,o=t/s;for(let a=0;a<s;a++){if(r){const c=i.x+r,l=zf(c,i.z,n);l?i.x=r>0?l.minX-n-1e-4:l.maxX+n+1e-4:i.x=c}if(o){const c=i.z+o,l=zf(i.x,c,n);l?i.z=o>0?l.minZ-n-1e-4:l.maxZ+n+1e-4:i.z=c}}}const Fe=3.6,qe=3,jt=10.05,Pt=10.3,pt=18.7,ls=3.5,fn=3,Gt=5.75,Ut=3,cr=6.15,Wi=8.9,It=7.95,qt=7.3,as=.15,go=[12.45,15.45],bn=.5,Eo=2.9,Tt=9.25,Hf=pt,Fn=3.7,Lt=22.6,oh=[20,21.6],CM=25.2,ci=6.6,Mn=27.2,PM=[2.3,3.2];function Ds(i,e,t,n){const s=i.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*e/n,s.getY(r)*t/n);return s.needsUpdate=!0,i}function wt(i,e,t,n,s,r,o,{down:a=!1,tile:c=2.4}={}){const l=s-t,h=r-n,u=Ds(new ut(l,h),l,h,c),f=new ve(u,e);return f.rotation.x=a?Math.PI/2:-Math.PI/2,f.position.set((t+s)/2,o,(n+r)/2),f.receiveShadow=!0,i.add(f),f}function Yt(i,e,t,n,s,{h:r=Fe,mat:o=w.wall,t:a=.2,y0:c=0,collide:l=!0}={}){const h=Math.abs(n-e)>=Math.abs(s-t),u=h?Math.abs(n-e):a,f=h?a:Math.abs(s-t),d=T(i,o,u,r,f,(e+n)/2,c+r/2,(t+s)/2);return d.userData.label="Wall",l&&c<1.5&&He((e+n)/2-u/2,(t+s)/2-f/2,(e+n)/2+u/2,(t+s)/2+f/2),d}const Za=[],Ua=[],_n={x:10.3+.03,y:1.25,z:9.8};function dr(i,{x0:e,z0:t,x1:n,z1:s,h:r=3,door:o=null,transom:a=2.3,frost:c=!1,panel:l=1.1,swing:h=1,name:u="door"}){const f=t===s,d=new nt;d.userData.label="Glass wall",i.add(d),i=d;const g=f?e:t,_=f?n:s,m=f?t:e,p=(x,E,S,R,C)=>f?T(i,w.black,R,C,S,x,E,m,{shadow:!0}):T(i,w.black,S,C,R,m,E,x,{shadow:!0}),v=(x,E,S,R)=>{const C=new ve(new ut(E-x,R-S),c?w.glassFrost:w.glass);C.position.set(f?(x+E)/2:m,(S+R)/2,f?m:(x+E)/2),f||(C.rotation.y=Math.PI/2),C.renderOrder=2,i.add(C)},y=o?[[g,Math.min(...o)],[Math.max(...o),_]]:[[g,_]];for(const[x,E]of y){if(E-x<.01)continue;v(x,E,.05,r);const S=Math.max(1,Math.round((E-x)/l));for(let R=0;R<=S;R++)p(x+R/S*(E-x),r/2,.05,.05,r);p((x+E)/2,.04,.06,E-x,.08),a&&a<r&&p((x+E)/2,a,.05,E-x,.05),f?He(x,m-.06,E,m+.06):He(m-.06,x,m+.06,E)}if(p((g+_)/2,r-.03,.06,_-g,.06),o){const[x,E]=o,S=Math.abs(E-x);v(Math.min(x,E),Math.max(x,E),a,r),p((x+E)/2,a,.06,S,.06);const R=new nt;R.position.set(f?x:m,0,f?m:x);const C=Math.sign(E-x),b=S-.04,M=new ve(new ut(b,a-.1),w.glass);M.position.set(C*b/2,a/2,0),R.add(M);for(const j of[0,1])T(R,w.black,.04,a-.08,.04,C*j*b,a/2,0);T(R,w.black,b,.05,.04,C*b/2,.06,0),T(R,w.black,b,.04,.04,C*b/2,a-.08,0),T(R,w.chrome,.02,.35,.03,C*(b-.1),1.05,.04);const D=f?0:-Math.PI/2,V=D+(f?-1:1)*h*C*1.4;R.rotation.y=D;const W=Math.min(x,E),K=Math.max(x,E);Za.push({leaf:R,closed:D,open:V,name:u,handle:[C*(b-.1),1.2,.04],x:f?(x+E)/2:m,z:f?m:(x+E)/2,block:f?{minX:W,maxX:K,minZ:m-.06,maxZ:m+.06}:{minX:m-.06,maxX:m+.06,minZ:W,maxZ:K}})}}function eo(i,e,t,n,s,r){const o=t===s,a=o?n-e:s-t,c=new ve(new ut(a,r),w.glass);c.position.set((e+n)/2,r/2,(t+s)/2),o||(c.rotation.y=Math.PI/2),c.renderOrder=2,i.add(c);const l=Math.max(1,Math.round(a/1.2));for(let h=0;h<=l;h++)o?T(i,w.black,.07,r,.1,e+h/l*a,r/2,t):T(i,w.black,.1,r,.07,e,r/2,t+h/l*a);for(const h of[.08,.55,Math.min(2.45,r-.3),r-.04]){const u=h<.1?.16:.07;o?T(i,w.black,a,u,.1,(e+n)/2,h,t,{shadow:h>2}):T(i,w.black,.1,u,a,e,h,(t+s)/2,{shadow:h>2})}o?He(e,t-.08,n,t+.08):He(e-.08,t,e+.08,s)}function LM(i){wt(i,w.diamond,0,ls,Ut,It,qe,{down:!0}),wt(i,w.diamond,Ut,Gt,qt,It,qe,{down:!0}),wt(i,w.diamond,qt,Gt,Pt,Tt,qe,{down:!0});for(const[e,t]of[[1,4.4],[1,6.8],[2.4,6.8],[4,7],[5.6,7],[7.9,6.9],[9.4,8.6],[8.2,8.9]])wM(i,e,t,qe);T(i,w.yellow,qt,Fe-qe,.08,qt/2,qe+(Fe-qe)/2,It+.04,{shadow:!1}),T(i,w.yellow,qt,.07,.14,qt/2,qe-.035,It,{shadow:!1}),wt(i,w.white,0,0,Ut,ls,qe,{down:!0}),wt(i,w.white,Ut,fn,Wi,Gt,qe,{down:!0});for(const[e,t]of[[1.5,1.6],[5,4.5],[8.2,4.5]])T(i,w.whiteGloss,.35,.02,.35,e,qe-.01,t,{shadow:!1});wt(i,w.ceilingBlack,0,It,jt,pt,Fe,{down:!0});for(const e of[12.3,15.3])T(i,w.ceilingBlack,jt,.5,.4,jt/2,Fe-.25,e,{shadow:!1});et(i,w.ceilingBlack,.2,.2,jt,jt/2,Fe-.45,9.2,{rz:Math.PI/2,shadow:!1,seg:14}),et(i,w.red,.04,.04,pt-It,4.6,Fe-.3,(It+pt)/2,{rx:Math.PI/2,shadow:!1,seg:8}),et(i,w.red,.04,.04,jt,jt/2,Fe-.3,17.9,{rz:Math.PI/2,shadow:!1,seg:8});for(const[e,t]of[[2,12.2],[5.5,12.2],[2,15.3],[5.5,15.3],[8.6,12.2]])EM(i,e,t,Fe-.62)}function Vf(i,e,t,n,s){const r=Math.hypot(n-e,s-t);T(i,w.blackMatte,.01,.012,r,qt+.008,(t+s)/2,(e+n)/2,{shadow:!1,rx:Math.atan2(-(s-t),n-e)})}function IM(i){T(i,w.concrete,as,qe,Tt-7.4,qt-as/2,qe/2,(7.4+Tt)/2),T(i,w.wall,as,Fe-qe,Tt-7.4,qt-as/2,qe+(Fe-qe)/2,(7.4+Tt)/2,{shadow:!1}),He(qt-as,7.4,qt,Tt+.35);const t=Tt-7.4,n=new ve(Ds(new ut(t,qe),t,qe,1.6),w.concrete);n.position.set(qt+.003,qe/2,(7.4+Tt)/2),n.rotation.y=Math.PI/2,n.receiveShadow=!0,n.userData.label="Logo wall",i.add(n),Vf(i,Tt,3,7.4+.1,1),Vf(i,7.4+.1,1,7.4+.9,0),gt(i,w.logo,.5,.72,qt+.03,2.35,8.25,Math.PI/2),gt(i,w.logoText,1,.35,qt+.02,1.78,8.3,Math.PI/2),Pn(Fh(i,qt+.47,8.4,Math.PI/2,2)),T(i,w.concrete,.5,qe-.004,.32,qt-.15,(qe-.004)/2,7.4+.14),Yt(i,qt-as,Tt+.175,8.3,Tt+.175,{h:Fe,t:.35});const s=gt(i,w.glassFrost,Pt-8.3,qe-.1,(8.3+Pt)/2,qe/2,Tt);s.renderOrder=2;for(const[a,c,l]of[[8.7,1.5,.5],[9.25,.9,-.4],[9.25,2.2,.6],[9.85,1.4,-.5]])T(i,w.concrete,.45,1,.01,a,c,Tt-.02,{rz:l,shadow:!1});for(const a of[8.3,9.35,Pt])T(i,w.black,.05,qe,.06,a,qe/2,Tt);T(i,w.black,Pt-8.3,.06,.06,(8.3+Pt)/2,.03,Tt),T(i,w.wall,Pt-8.3,Fe-qe,.15,(8.3+Pt)/2,qe+(Fe-qe)/2,Tt,{shadow:!1}),He(8.3,Tt-.08,Pt,Tt+.08),dr(i,{x0:Pt,z0:Gt,x1:Pt,z1:Tt,h:qe,panel:.9,door:[7.6,8.65],transom:2.4,swing:-1,name:"entrance door"}),T(i,w.metalDark,.06,.05,.4,Pt-.06,2.3,8.4,{shadow:!1}),T(i,w.wall,.15,Fe-qe,Tt-Gt,Pt,qe+(Fe-qe)/2,(Gt+Tt)/2,{shadow:!1}),T(i,w.blackMatte,.6,.01,1,Pt-.45,.005,8.12,{shadow:!1}),T(i,w.concrete,Pt-Wi,Fe,Gt-fn,(Wi+Pt)/2,Fe/2,(fn+Gt)/2),He(Wi,fn,Pt+.05,Gt);const r=new nt;r.position.set(9.85,0,Gt),i.add(r),T(r,w.cream,.56,2.3,.3,0,1.25,.15);for(const a of[.75,1.3,1.85,2.35])T(r,w.white,.58,.035,.32,0,a,.16);for(const[a,c,l]of[[-.14,1.87,.3],[.14,1.87,.26],[0,2.37,.34]])et(r,w.bottleYellow,.035,.05,l,a,c+l/2,.16,{seg:10});for(const[a,c,l]of[[-.12,1.32,w.gallery],[.13,1.32,w.red],[0,.77,w.gallery]])T(r,w.black,.2,.26,.03,a,c+.14,.16,{rx:-.12}),T(r,l,.16,.2,.01,a,c+.14,.178,{shadow:!1,rx:-.12});He(9.55,Gt,10.15,Gt+.32),T(i,w.white,.13,.16,.04,9.2,1.35,Gt+.02),T(i,w.bottleBlue,.07,.05,.01,9.2,1.38,Gt+.045,{shadow:!1});const o=new nt;o.userData.label="Reception desk",o.position.set(9.3,0,6.6),i.add(o),T(o,w.cream,.7,.05,1.25,0,.8,0),T(o,w.cream,.05,.78,1.25,-.33,.39,0,{rz:.12});for(const a of[-1,1])T(o,w.cream,.65,.78,.05,0,.39,a*.6);T(o,w.black,.05,.05,1.15,-.4,.03,0),et(o,w.black,.035,.035,.01,.1,.83,.3,{seg:12}),Rp(o,.12,.825,-.4,{petal:w.petalPink,n:6}),Pn(o),Na(i,9.1,6.5,2.15,qe,1.3),T(i,w.white,.08,.08,.06,qt+.05,2.85,9.1),Pn(Bh(i,9.95,8.95,{size:.4,h:.45}))}function Lp(i,e,t,n=1.6,{monitor:s=!1}={}){const r=new nt;r.userData.label="Cabin desk",r.position.set(e,0,t),i.add(r),T(r,w.whiteGloss,n,.05,.8,0,.77,0),T(r,w.woodDark,n-.1,.72,.05,0,.38,.36);for(let o=0;o<6;o++)T(r,w.black,n-.15,.02,.01,0,.15+o*.1,.39,{shadow:!1});T(r,w.woodDark,.05,.72,.75,-n/2+.05,.38,0),T(r,w.woodDark,.45,.72,.6,n/2-.25,.38,0),s&&(T(r,w.black,.5,.31,.03,-.25,1.12,-.2),T(r,w.black,.04,.3,.03,-.25,.94,-.23)),Pn(r)}function DM(i,e,t,n,s){const r=new nt;r.userData.label="Built-in shelves",r.position.set(e+s*.2,0,(t+n)/2),i.add(r);const o=n-t;T(r,w.white,.4,2.7,o,0,1.35,0);const a=Math.max(1,Math.round(o/.8));for(let c=0;c<a;c++){const l=-o/2+(c+.5)*(o/a);for(const h of[1.2,1.65,2.1])T(r,w.whiteGloss,.02,.03,o/a-.06,s*.2,h,l,{shadow:!1});for(const h of[.25,.6,.95])T(r,w.whiteGloss,.02,.32,o/a-.06,s*.205,h,l,{shadow:!1});Je()<.6&&T(r,w.black,.04,.18,.2,s*.12,1.32,l),Je()<.6&&T(r,w.gallery,.12,.2,.15,s*.12,1.75,l+.2)}He(Math.min(e,e+s*.4),t,Math.max(e,e+s*.4),n)}function Gf(i,e,t,n){const s=t-e,r=new ve(Ds(new ut(s,qe),s,qe,1.6),w.concrete);r.position.set((e+t)/2,qe/2,n+.105),r.receiveShadow=!0,i.add(r)}function Wf(i,e,t,{chairsZ:n,back:s,len:r=1.6,visitors:o=[-.4,.4],monitor:a=!1}){Lp(i,e,t,r,{monitor:a}),Pn(yr(i,e-.1,t-.75,0,{exec:!0}),-.1);for(const c of o)Pn(Ap(i,e+c,n,Math.PI),-.05);zh(i,e,2.55,s+.11,0)}function NM(i){Yt(i,Ut,fn,Wi,fn,{h:Fe}),Yt(i,Ut,0,Ut,ls,{h:Fe}),dr(i,{x0:Ut,z0:ls,x1:Ut,z1:Gt,h:qe}),Yt(i,Ut,ls,Ut,Gt,{h:Fe-qe,y0:qe,collide:!1}),dr(i,{x0:cr,z0:fn,x1:cr,z1:Gt,h:qe}),Gf(i,Ut+.1,cr-.08,fn),Gf(i,cr+.08,Wi,fn),dr(i,{x0:Ut,z0:Gt,x1:cr,z1:Gt,h:qe,door:[6.05,5.15],swing:-1,name:"Cabin 2 door"}),dr(i,{x0:cr,z0:Gt,x1:Wi,z1:Gt,h:qe,door:[6.25,7.15],swing:-1,name:"Cabin 1 door"}),dr(i,{x0:0,z0:ls,x1:Ut,z1:ls,h:qe,door:[.15,1.05],swing:-1,name:"Corner cabin door"}),Wf(i,7.35,4.35,{chairsZ:5.15,back:fn,len:1.6,visitors:[.35,.85]}),DM(i,Wi,fn+.1,5.65,-1),Wf(i,4,4.35,{chairsZ:5.15,back:fn,len:1.5,monitor:!1}),Pn(Bh(i,5.35,3.45,{size:.35,h:.4})),Lp(i,1.6,1.85),Pn(yr(i,1.5,1.05,0,{exec:!0}),-.1);for(const t of[1.35,2.05])Pn(Ap(i,t,2.95,Math.PI),-.05);T(i,w.concrete,.55,qe,.55,Ut-.38,qe/2,.38),He(Ut-.65,0,Ut,.65),zh(i,Ut-.11,2.55,1.8,-Math.PI/2),T(i,w.blackMatte,.25,.3,.25,2.7,.15,2.9),Yt(i,0,It,1.3,It,{h:Fe,t:.3});const e=[[1.3,2.6],[4.3,5.6],[5.6,6.9]];for(const[t,n]of e){const s=new nt;s.position.set(0,0,It),s.rotation.y=Math.PI/2,i.add(s);const r=[];for(let o=0;o<3;o++)Je()<.55&&r.push({i:o,row:Je()<.5?0:1});SM(s,0,t,n,{yellowCubbies:r}),He(t,It-.2,n,It+.2)}Pn(Cp(i,.6,7.25),-.15),Pn(Fh(i,Ut-.47,5,-Math.PI/2,2)),T(i,w.red,.55,.01,.9,.5,.005,5.7,{shadow:!1}),Na(i,1.9,4.6,2.2,qe),Na(i,5,7,2.25,qe)}const Oa=[{id:"W1",x:1.3,z:10.7,rot:0},{id:"L1",x:4.9,z:10.75,rot:0},{id:"W2",x:1.15,z:13.6,rot:0},{id:"L2",x:4.95,z:13.7,rot:0},{id:"W3",x:1.55,z:17.25,rot:0},{id:"L3",x:5.25,z:16.95,rot:0},{id:"E1",x:9.25,z:10.95,rot:0},{id:"E2",x:9.3,z:14,rot:0},{id:"E3",x:9.3,z:16.9,rot:0},{id:"LOCK",x:6.875,z:8.875,rot:0},{id:"LOCK2",x:.675,z:8.375,rot:270}],Xf="rgba(238,222,180,0.96)",UM="rgba(232,186,80,0.16)";function qf(i){const e=document.createElement("canvas");e.width=256,e.height=640;const t=e.getContext("2d"),n=(r,o)=>{t.fillStyle=o,t.beginPath(),r.forEach(([a,c],l)=>(l?t.lineTo:t.moveTo).call(t,a*256,c*640)),t.closePath(),t.fill()};t.fillStyle=Xf,t.fillRect(0,0,256,640);for(const[r,o]of i)o?n(r,Xf):(t.save(),t.beginPath(),r.forEach(([a,c],l)=>(l?t.lineTo:t.moveTo).call(t,a*256,c*640)),t.closePath(),t.clip(),t.clearRect(0,0,256,640),t.fillStyle=UM,t.fillRect(0,0,256,640),t.restore());const s=new On(e);return s.colorSpace=yt,new Et({map:s,transparent:!0,roughness:.15,metalness:.05,depthWrite:!1,side:Ot})}const Ip=[qf([[[[0,.37],[1,.37],[1,1],[0,1]],!1],[[[.6,.15],[.77,.15],[.77,.22],[.6,.22]],!1],[[[1,.37],[.62,.6],[1,.85]],!0],[[[.42,.37],[.62,.37],[.35,.55],[.25,.5]],!0],[[[0,.55],[1,.9],[1,1],[0,1]],!0]]),qf([[[[0,.3],[.75,.6],[.06,1],[0,1]],!1],[[[0,.42],[.43,.62],[0,.82]],!0],[[[.75,.6],[1,.6],[1,1],[.06,1],[.3,.85]],!0]])];function OM(i,e,t){const n=new nt;n.userData.label="Door",i.add(n);const s=9.95,r=Pt,o=10.12,a=bn*2,c=Eo,l=2.3;for(const f of[-1,1])T(n,w.concrete,r-s,c,.03,(s+r)/2,c/2,e+f*(bn+.015),{shadow:!1});T(n,w.concrete,r-s,.03,a,(s+r)/2,c+.015,e,{shadow:!1});for(const f of[-1,1])T(n,w.black,.07,c,.05,o,c/2,e+f*(bn-.025));for(const f of[.04,l,c-.03])T(n,w.black,.07,f===l?.06:.08,a,o,f,e);const h=new ve(new ut(a-.1,l-.1),t);h.position.set(o,(l+.08)/2,e),h.rotation.y=Math.PI/2,h.renderOrder=2,n.add(h);const u=new ve(new ut(a-.1,c-l-.1),Ip[0].clone());u.material.map=null,u.material.color.set("#f4e7c4"),u.material.opacity=.75,u.position.set(o,(l+c)/2,e),u.rotation.y=Math.PI/2,u.renderOrder=2,n.add(u),T(n,w.chrome,.12,.35,.025,o,1.05,e+bn-.12,{shadow:!1}),He(s,e-bn,r,e+bn)}function kM(i,e,t,n,s,r=3,o=4){const a=new nt;a.position.set(e,t,n),a.rotation.y=s,a.userData.label="Photo gallery",i.add(a);const c=.3,l=.22,h=.08;for(let u=0;u<o;u++)for(let f=0;f<r;f++){if(u===o-1&&f===r-1)continue;const d=(f-(r-1)/2)*(c+h),g=((o-1)/2-u)*(l+h);T(a,w.black,c,l,.02,d,g,.01,{shadow:!1}),gt(a,w.gallery,c-.04,l-.04,d,g,.021)}}function FM(i,e,t,n,s){OM(i,t,Ip[s]);const r=new nt;r.position.set(e,0,t),r.rotation.y=n,r.userData.label="Wall",i.add(r);const o=2*bn+.16,a=Eo;for(const c of[-1,1])T(r,w.white,.14,Fe,.08,c*(bn+.15),Fe/2,.12);T(r,w.blackMatte,o,Fe-a-.12,.03,0,(a+.12+Fe)/2,.11,{shadow:!1}),T(r,w.white,o,.12,.08,0,a+.06,.12)}const BM={W:{len:1.4,width:1.2,seatW:.7,name:"Window table"},L:{len:2.8,width:1.2,seatW:.7,name:"Long table"},E:{len:1.3,width:.8,seatW:1.2,name:"East-wall desk"}};function zM(i,e,t,{len:n,width:s,seatW:r},o=0,a="Table"){const c={width:s,seatW:r,chairOff:.12};if(o%180){const h=new nt;h.userData.label=a,i.add(h),Bf(h,e,t-n/2,t+n/2,{...c,solidFn:(u,f,d,g)=>He(u,f,d,g)});return}const l=new nt;l.position.set(0,0,t),l.rotation.y=Math.PI/2,l.userData.label=a,i.add(l),Bf(l,0,e-n/2,e+n/2,{...c,solidFn:(h,u,f,d)=>He(u,t-f,d,t-h)})}function HM(i){const[e,t,n,s]=[.45,2.95,.5,2.75];Yt(i,0,pt,e,pt,{h:Fe}),Yt(i,e,pt,t,pt,{h:n}),Yt(i,e,pt,t,pt,{h:Fe-s,y0:s,collide:!1}),Yt(i,t,pt,jt,pt,{h:Fe});{const c=new nt;c.userData.label="Meeting room window",i.add(c);const l=new ve(new ut(t-e,s-n),w.glass);l.position.set((e+t)/2,(n+s)/2,pt),l.renderOrder=2,c.add(l);const h=[e,e+.85,e+1.7,t],u=[n,n+.65,n+1.6,s];for(const f of h)T(c,w.black,.06,s-n+.06,.22,f,(n+s)/2,pt,{shadow:!1});for(const f of u)T(c,w.black,t-e,.06,.22,(e+t)/2,f,pt,{shadow:!1})}{const c=go.flatMap(h=>[h-bn,h+bn]),l=[Tt,...c,pt];for(let h=0;h<l.length;h+=2)Yt(i,jt,l[h],jt,l[h+1],{h:Fe});for(const h of go)Yt(i,jt,h-bn,jt,h+bn,{h:Fe-Eo,y0:Eo,collide:!1})}T(i,w.ceilingBlack,jt,.45,.05,jt/2,Fe-.225,pt-.13,{shadow:!1}),T(i,w.ceilingBlack,.05,.45,pt-Tt,jt-.13,Fe-.225,(Tt+pt)/2,{shadow:!1}),T(i,w.white,.6,Fe,.6,7.35,Fe/2,15.7).userData.label="Pillar",He(7.05,15.4,7.65,16),AM(i,7.35,2.35,15.39,Math.PI),T(i,w.white,1.25,Fe,.4,.62,Fe/2,15.7).userData.label="Window column",He(0,15.5,1.25,15.9);for(const c of Oa){const l=BM[c.id[0]];!l||c.id.startsWith("LOCK")||(zM(i,c.x,c.z,l,c.rot||0,`${l.name} ${c.id}`),c.id[0]==="E"?Na(i,c.x,c.z,2.2):Pp(i,c.x,c.z,Math.min(2.4,l.len-.1),c.rot%180?Math.PI/2:0))}const r=new ve(new ut(jt-3.3,pt-17.6),w.floorBeige);r.rotation.x=-Math.PI/2,r.position.set((3.3+jt)/2,.004,(17.6+pt)/2),r.receiveShadow=!0,i.add(r);const o=et(i,w.blackMatte,.16,.16,.6,4.2,.3,pt-.3,{seg:16});Pn(o),T(i,w.glassYellow,.18,.38,.02,4.2,.34,pt-.47,{shadow:!1}),go.forEach((c,l)=>FM(i,jt-.1,c,-Math.PI/2,l)),kM(i,jt-.115,1.95,14,-Math.PI/2);const a={0:Math.PI,90:Math.PI/2,180:0,270:-Math.PI/2};for(const c of Oa.filter(l=>l.id.startsWith("LOCK"))){const l=((c.rot||0)%360+360)%360;TM(i,c.x,c.z-.625,c.z+.625,a[l]);const[h,u]=l%180?[.625,.275]:[.275,.625];He(c.x-h,c.z-u,c.x+h,c.z+u)}for(const[c,l]of[[1.6,8.6]])Pn(Bh(i,c,l,{size:.4,h:.5,mat:w.blackMatte}))}const li=-40,Gc=9,Wc=12;let Xc=5660;const yn=()=>(Xc=Xc*16807%2147483647,(Xc-1)/2147483646),Kt=(i,e)=>i+yn()*(e-i),vi=(i,e={})=>new Et({color:i,roughness:1,...e});function VM(i){const e={cool:["#a4a8ac","#a3a7aa","#a2a9af","#9ba9b8","#8ea2bd","#7d95b5","#7890b0"],centre:["#ccc8bd","#cec8bb","#cbc6bb","#c4c8c7","#b3c0ca","#a2b4c4","#9bb0c2"],warm:["#e6d5b9","#ead9bd","#efe1c4","#f4efde","#eaebe3","#d0dbe0","#bccbd6"]},t=[0,3,10,18,26,60,90],n=re=>new st(re),s=(re,k)=>{const B=e[re];if(k<=0)return n(B[0]);let z=0;for(;z<t.length-2&&k>t[z+1];)z++;const de=Math.min(1,(k-t[z])/(t[z+1]-t[z]));return n(B[z]).lerp(n(B[z+1]),de)},r=document.createElement("canvas");r.width=256,r.height=128;const o=r.getContext("2d");for(let re=0;re<r.width;re++){let k=re/r.width*360;k>180&&(k-=360);const B=-k,z=Math.max(-1,Math.min(1,B/38))*Math.max(0,1-Math.max(0,Math.abs(k)-90)/60);for(let de=0;de<r.height;de++){const me=90-de/(r.height-1)*180,L=s("centre",me).lerp(s(z<0?"cool":"warm",me),Math.abs(z));o.fillStyle="#"+L.getHexString(),o.fillRect(re,de,1,1)}}const a=new On(r);a.colorSpace=yt;const c=new ve(new Zt(1300,32,24),new Ln({map:a,side:Sn,fog:!1,depthWrite:!1,toneMapped:!1}));c.renderOrder=-1,i.add(c);const l=new ve(new ut(2600,2600),vi("#34462a"));l.rotation.x=-Math.PI/2,l.position.y=li,i.add(l);const h=new Map,u=(re,k,B)=>{h.has(re)||h.set(re,[]);const z=k.clone();z.applyMatrix4(B),h.get(re).push(z)},f=new ot,d=new gi,g=new En,_=new I,m=new I,p=(re,k,B,z,de,me,L,A,X=0)=>{d.setFromEuler(g.set(0,X,0)),f.compose(m.set(B,z,de),d,_.set(me,L,A)),u(re,k,f)},v=2016,y=1512,E=3029/2,[S,R,C,b]=[1480,3550,1270,1760],M={x:-2.8,y:1.6,z:12},D=230,V=re=>M.z-(re-v)/E*D,W=re=>M.y+(y-re)/E*D,K=(re,k)=>{const B=M.x-re;if(B<60)return 1/0;const z=v-(k-M.z)/B*E;return z<S-60||z>R+60?1/0:B>D?-1/0:M.y+(y-(b-25))/E*B},j=new Xa(1,1).toNonIndexed(),Y=new Dn(.16,.24,1,5,1,!0).toNonIndexed();Y.translate(0,.5,0);const ie=GM(),F=["#34452a","#3d4f30","#475a37","#516440","#38492d"].map(re=>vi(re,{flatShading:!0})),le=["#43552f","#4d6136","#3b4c2a","#566b3c"].map(re=>vi(re,{side:Ot,roughness:.85})),he=vi("#4f4a40"),Se=re=>re[Math.floor(yn()*re.length)],Be=(re,k,B=Kt(9,17),z=li)=>{const de=K(re,k)-z-2;if(de<3){de>1&&Ye(re,k,de/2.2,z);return}B=Math.min(B,de);const me=Kt(-.08,.08);p(he,Y,re,z,k,1,B,1,0);const L=Kt(.8,1.15);d.setFromEuler(g.set(me,yn()*Math.PI*2,me)),f.compose(m.set(re,z+B,k),d,_.set(L,L,L)),u(Se(le),ie,f)};function Ye(re,k,B,z=li){B=Math.min(B,(K(re,k)-z-4)/1.8),!(B<.8)&&p(Se(F),j,re,z+B*.9+Kt(1,4),k,B*Kt(.9,1.2),B*Kt(.6,.85),B*Kt(.9,1.2),yn()*6)}const ne=(re,k)=>re<-7||k<-8&&re<40||k>30&&re<20;for(let re=0;re<2600;re++){const k=Kt(-190,40),B=Kt(-170,210);ne(k,B)&&(yn()<.58?Be(k,B):Ye(k,B,Kt(3.5,7)))}for(let re=0;re<5200;re++){const k=Math.PI*.4+yn()*Math.PI*1.25,B=Kt(170,560),z=Gc+Math.cos(k)*B,de=Wc+Math.sin(k)*B;yn()<.55?Be(z,de,Kt(10,18)):Ye(z,de,Kt(6,11))}for(let re=0;re<1800;re++){const k=Math.PI*.4+yn()*Math.PI*1.25,B=Kt(540,1150);Ye(Gc+Math.cos(k)*B,Wc+Math.sin(k)*B,Kt(14,26))}fe(-700,300,260,62,190),fe(-980,-520,380,75,300),fe(-1050,700,300,60,260),fe(-1100,60,500,35,240);function fe(re,k,B,z,de){const me=new ve(new Zt(1,28,14,0,Math.PI*2,0,Math.PI/2),vi("#3f5230",{flatShading:!0}));me.scale.set(B,z,de),me.position.set(re,li-2,k),i.add(me);const L=Math.round(B*de/90);for(let A=0;A<L;A++){const X=yn()*Math.PI*2,oe=Math.sqrt(yn())*.97,ge=Math.cos(X)*oe,ce=Math.sin(X)*oe,Ie=li-2+z*Math.sqrt(Math.max(0,1-ge*ge-ce*ce)),Te=re+ge*B,Re=k+ce*de;yn()<.35?Be(Te,Re,Kt(10,16),Ie-2):Ye(Te,Re,Kt(7,13),Ie-3)}}const pe=vi("#c9c6be",{roughness:.9}),ue=vi("#b5b0a6",{roughness:.9}),De=vi("#6e4234",{roughness:.9}),ze=vi("#8f9496",{roughness:.6,metalness:.3}),Pe=vi("#56606a",{roughness:.4}),je=new en(1,1,1).toNonIndexed(),ae=new Dn(.5,.5,1,3,1).toNonIndexed();ae.rotateZ(Math.PI/2),ae.rotateX(-Math.PI/2);for(let re=0;re<70;re++){const k=Math.PI*.55+yn()*Math.PI*.95,B=30+Math.pow(yn(),1.4)*420,z=Gc+Math.cos(k)*B,de=Wc+Math.sin(k)*B;if(!ne(z,de))continue;const me=Kt(8,14),L=Kt(8,13),A=Kt(6,11),X=yn()*Math.PI;if(li+A+3.5>K(z,de))continue;p(yn()<.7?pe:ue,je,z,li+A/2,de,me,A,L,X),p(Pe,je,z,li+A*.62,de,me+.1,1,L*.6,X);const oe=yn();oe<.45?p(pe,je,z,li+A+.4,de,me+.3,.8,L+.3,X):oe<.8?p(De,ae,z,li+A+1.6,de,me+1,3.2,L+1,X):p(ze,je,z,li+A+.6,de,me+1,.25,L+1,X)}const xe=new Nh().load("textures/skyline.png");xe.colorSpace=yt,xe.anisotropy=4;const N=new ve(new ut(V(S)-V(R),W(C)-W(b)),new Ln({map:xe,transparent:!0,alphaTest:.03,depthWrite:!1,fog:!1,toneMapped:!1}));N.rotation.y=Math.PI/2,N.position.set(M.x-D,(W(C)+W(b))/2,(V(S)+V(R))/2),N.renderOrder=1,i.add(N);for(const[re,k]of h){const B=new ve(Ka(k,!1),re);B.castShadow=!1,B.receiveShadow=!1,i.add(B)}}function GM(){const i=[];for(let s=0;s<9;s++){const r=s/9*Math.PI*2+s%2*.2,o=s%3===0?.55:.25,a=[];for(let u=0;u<=3;u++){const f=u/3,d=f*4.6,g=o*d*.6-f*f*2.4,_=.55*Math.sin(Math.PI*Math.min(1,f*1.1+.08));a.push({r:d,y:g,w:_})}const c=[Math.cos(r),Math.sin(r)],l=[-Math.sin(r),Math.cos(r)],h=(u,f)=>[c[0]*u.r+l[0]*u.w*f,u.y,c[1]*u.r+l[1]*u.w*f];for(let u=0;u<3;u++){const f=h(a[u],-1),d=h(a[u],1),g=h(a[u+1],-1),_=h(a[u+1],1);i.push(...f,...g,...d,...d,...g,..._)}}const n=new Ht;return n.setAttribute("position",new ft(i,3)),n.computeVertexNormals(),n.setAttribute("uv",new ft(new Float32Array(i.length/3*2),2)),n}const cn=CM,vt=-3.6,yi=.25,Ps=3.85,Dp=.12,xa=-3.95,ss=i=>Ps+i*Dp,Bt=i=>new Et(i),ke={curb:Bt({color:"#6f6c66",roughness:.95}),steel:Bt({color:"#8e8d88",roughness:.55,metalness:.55}),rust:Bt({color:"#9b8a78",roughness:.7,metalness:.35}),galv:Bt({color:"#a9aca9",roughness:.45,metalness:.6}),steelRail:Bt({color:"#c4c7c9",roughness:.22,metalness:.95}),poly:new Et({color:"#d2a8c8",transparent:!0,opacity:.42,roughness:.35,depthWrite:!1,side:Ot}),glass:new Et({color:"#d6e6e2",transparent:!0,opacity:.2,roughness:.05,metalness:.1,depthWrite:!1,side:Ot}),clad:Bt({color:"#cfc6b2",roughness:.6,metalness:.25}),plaster:Bt({color:"#e9e6df",roughness:.95}),coir:Bt({color:"#6e4b30",roughness:1}),potWhite:Bt({color:"#efede8",roughness:.55}),leafDark:Bt({color:"#355e2a",roughness:.75}),leafMid:Bt({color:"#5e8a3a",roughness:.75}),leafPale:Bt({color:"#a9bf83",roughness:.75}),leafRed:Bt({color:"#a6473a",roughness:.75}),palm:Bt({color:"#4f7a2f",roughness:.8,side:Ot}),macrame:Bt({color:"#6d5a4b",roughness:1,side:Ot}),cushion:Bt({color:"#d9cdb8",roughness:1}),tableTop:Bt({color:"#8a6142",roughness:.55}),rattan:Bt({color:"#7b6c60",roughness:.9}),water:new Et({color:"#a9cde8",transparent:!0,opacity:.55,roughness:.1,depthWrite:!1}),capBlue:Bt({color:"#2464b0",roughness:.5}),counterTop:Bt({color:"#222222",roughness:.35,metalness:.2}),acGrey:Bt({color:"#d9d9d4",roughness:.6})},WM=(()=>{const i=document.createElement("canvas");i.width=128,i.height=256;const e=i.getContext("2d"),t=["#a4553f","#d9b26a","#5b6f8a","#c98a5a","#7a8a5a","#e6d6b8","#8a4a5a"];for(let s=0;s<256;s+=3)e.fillStyle=t[Math.floor(Je()*t.length)],e.fillRect(0,s,128,3);const n=new On(i);return n.colorSpace=yt,n})();ke.rug=Bt({map:WM,roughness:1});const XM=(i=16)=>{const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.strokeStyle="#fff",t.lineWidth=3;for(let s=-128;s<=256;s+=i)t.beginPath(),t.moveTo(s,0),t.lineTo(s+128,128),t.stroke(),t.beginPath(),t.moveTo(s,128),t.lineTo(s+128,0),t.stroke();const n=new On(e);return n.wrapS=n.wrapT=pi,n},Np=XM(22);Np.repeat.set(5,3);ke.macrameNet=Bt({color:"#6d5a4b",alphaMap:Np,alphaTest:.5,roughness:1,side:Ot});const qM=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,3),e.fillRect(0,0,3,64);const t=new On(i);return t.wrapS=t.wrapT=pi,t})();function Ns(i,e,t,n,s){const r=new nt;return r.position.set(e,t,n),s&&(r.userData.label=s),i.add(r),r}function _a(i,e,t,n,s,r,o,a=8){return et(i,e,t,t,o-r,n,s,(r+o)/2,{rx:Math.PI/2,seg:a,shadow:!1})}function va(i,e,t,n,s,r,o=7){for(let a=0;a<o;a++){const c=new ve(new Xa(1,0),r[a%r.length]),l=s*(.45+Je()*.4);c.scale.set(l,l*(.7+Je()*.5),l);const h=Je()*Math.PI*2,u=Je()*s*.6;c.position.set(e+Math.cos(h)*u,t+l*.8+Je()*s*.6,n+Math.sin(h)*u),c.rotation.set(Je()*3,Je()*3,Je()*3),c.castShadow=!0,c.receiveShadow=!0,i.add(c)}}function Up(i,e,t,n,{n:s=12,len:r=.6,mat:o=ke.leafMid,droop:a=.5,w:c=.12}={}){for(let l=0;l<s;l++){const h=new nt;h.position.set(e,t,n),h.rotation.y=l/s*Math.PI*2+Je()*.4,i.add(h);const u=a*(.5+Je()),f=new ve(new ut(r,c),o);f.position.set(Math.cos(u)*r/2,Math.sin(-u+.9)*r/2-.05,0),f.rotation.set(Math.PI/2-.3,0,-u+.9-Math.PI/4),f.castShadow=!0,h.add(f)}}function lr(i,e,t,n="snake",{r:s=.18,h:r=.32}={}){const o=Ns(i,e,0,t,"Plant");return et(o,ke.potWhite,s,s*.78,r,0,r/2,0,{seg:16}),et(o,w.soil,s-.02,s-.02,.01,0,r-.01,0,{seg:12,shadow:!1}),n==="snake"?ja(o,0,r,0,10,.75):n==="bush"?va(o,0,r,0,s*1.6,[ke.leafDark,ke.leafMid]):n==="variegated"?va(o,0,r,0,s*1.7,[ke.leafPale,ke.leafMid,ke.leafPale],9):n==="croton"?va(o,0,r,0,s*1.4,[ke.leafRed,ke.leafMid,ke.leafRed]):n==="fern"?Up(o,0,r+.08,0,{n:16,len:.55,mat:ke.leafPale,droop:.9,w:.16}):n==="tree"&&(et(o,w.woodDark,.015,.02,.9,0,r+.45,0,{seg:5}),va(o,0,r+.55,0,.35,[ke.leafMid,ke.leafPale,ke.leafDark],8)),He(e-s,t-s,e+s,t+s),o}function Yf(i,e,t,n,s,r=ke.coir){et(i,w.blackMatte,.004,.004,n-s,e,(n+s)/2,t,{seg:3,shadow:!1}),et(i,r,.07,.11,.3,e,s-.15,t,{seg:10})}function YM(i,e,t,n=0){const s=Ns(i,e,0,t,"Bar stool");s.rotation.y=n;for(const[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])T(s,w.black,.025,.78,.025,r*.15,.39,o*.15,{rx:o*.05,rz:-r*.05});T(s,w.black,.34,.04,.34,0,.78,0);for(const r of[-1,1])T(s,w.black,.025,.36,.025,.15,.96,r*.13);T(s,w.black,.025,.06,.3,.15,1.12,0),T(s,w.black,.3,.02,.02,0,.3,.15,{shadow:!1}),T(s,w.black,.3,.02,.02,0,.3,-.15,{shadow:!1})}function $M(i,e,t,n=.62){const s=Ns(i,e,0,t,"Stool");et(s,ke.tableTop,.17,.17,.04,0,n,0,{seg:16});for(let o=0;o<3;o++){const a=o/3*Math.PI*2;T(s,w.black,.02,n,.02,Math.cos(a)*.14,n/2,Math.sin(a)*.14,{rz:Math.cos(a)*.1,rx:-Math.sin(a)*.1})}const r=new ve(new Nr(.16,.008,4,20),w.black);r.rotation.x=Math.PI/2,r.position.y=.22,s.add(r),He(e-.18,t-.18,e+.18,t+.18)}function KM(i){const e=Ns(i,0,0,0,"Terrace"),t=cn;wt(e,w.floorTerrace,vt,0,0,cn,0),T(e,ke.curb,.3,yi,t,vt+.15,yi/2,t/2),T(e,ke.curb,.32,.03,t,vt+.15,yi+.015,t/2,{shadow:!1}),He(vt-.1,0,vt+.32,cn),He(vt,-.15,0,0),He(vt,cn,0,cn+.15);const n=vt+.1,s=yi+1;for(let m=0;m<t-.01;m+=1.2){const p=Math.min(1.2,t-m)-.02,v=new ve(new ut(p,s-yi-.06),ke.glass);v.position.set(n,(yi+s)/2,m+.01+p/2),v.rotation.y=Math.PI/2,v.renderOrder=2,e.add(v),T(e,w.chrome,.03,.06,.05,n,s-.04,m+.06,{shadow:!1}),T(e,w.chrome,.03,.06,.05,n,yi+.06,m+.06,{shadow:!1})}_a(e,ke.steelRail,.028,n,s+.03,0,t,12),_a(e,ke.galv,.035,vt+.42,.55,.4,t-.4,10);for(let m=1.5;m<t;m+=3.1)T(e,ke.galv,.03,.3,.03,vt+.42,.4,m,{shadow:!1});for(const m of[.12,t-.12])et(e,ke.steelRail,.025,.025,s,vt+.35,s/2,m,{seg:10}),T(e,ke.steelRail,.25,.04,.04,vt+.23,s+.03,m,{shadow:!1});const r=m=>m<It?qe:2.8;for(const[m,p]of[[0,It],[It,cn]]){const v=r(m),y=Ps+.2-v;T(e,ke.clad,.03,y,p-m,-.09,v+y/2,(m+p)/2,{shadow:!1});for(let x=m+.08;x<p;x+=.16)T(e,ke.clad,.025,y,.035,-.115,v+y/2,x,{shadow:!1});T(e,ke.steel,.12,.08,p-m,-.12,v+.04,(m+p)/2,{shadow:!1})}const o=-xa,a=Math.atan2(o*Dp,o),c=o/Math.cos(a),l=xa/2,h=T(e,ke.poly,c,.012,t+.4,l,ss(l)+.06,t/2,{shadow:!1,rz:a});h.renderOrder=3;for(let m=0;m<=t+.01;m+=t/16)T(e,Math.round(m/(t/16))%3===1?ke.rust:ke.steel,c,.1,.06,l,ss(l),m,{rz:a});for(const m of[-.35,-1.25,-2.15,-3.05,-3.85])_a(e,ke.steel,.025,m,ss(m)+.03,-.2,t+.2);T(e,ke.steel,.16,.14,t+.4,xa,ss(xa)-.02,t/2),T(e,ke.steel,.12,.12,t,-.18,Ps-.06,t/2);const u=-1.8,f=ss(u)-.28;_a(e,ke.galv,.02,u,f,0,t);for(let m=.5;m<t;m+=1.55){et(e,ke.galv,.006,.006,.26,u,f+.13,m,{seg:4,shadow:!1}),et(e,w.white,.055,.045,.1,u,f-.07,m,{seg:12,shadow:!1});const p=new ve(new $n(.035,12),w.spotGlow);p.rotation.x=Math.PI/2,p.position.set(u,f-.121,m),e.add(p)}const d=vt+.36;for(let m=0;m<=8;m++){const p=.25+m*(t-.5)/8,v=ss(d);if(et(e,ke.galv,.045,.045,v-yi,d,(v+yi)/2,p,{seg:10}),m>=3&&m<=5){et(e,ke.coir,.085,.085,2.5,d,yi+1.3,p,{seg:12});for(const y of[.9,1.6,2.3])et(e,ke.plaster,.088,.088,.06,d,y,p,{seg:12,shadow:!1});Yf(e,d+.16,p+.05,v-.1,2.75)}He(d-.09,p-.09,d+.09,p+.09)}const g=-.32,_=[[1.4,"tree"],[1.95,"fern"],[2.6,"croton"],[3.2,"variegated"],[4.35,"snake"],[7,"snake"],[7.5,"variegated"],[8,"bush"],[8.5,"snake"],[10.6,"bush"],[11.1,"snake"],[11.6,"variegated"],[12.1,"snake"],[13.6,"tree"],[14.6,"bush"],[16.3,"snake"],[17.2,"variegated"],[18.2,"snake"],[19.3,"croton"],[22,"fern"]];for(const[m,p]of _)lr(e,g-(p==="fern"?.1:0),m,p,p==="tree"?{r:.2,h:.34}:{});lr(e,vt+.75,12,"variegated",{r:.22,h:.4}),lr(e,vt+.75,8.3,"tree",{r:.18,h:.34});for(const m of[6.2,9.9,13])Yf(e,-.55,m,Ps-.1,2.55,ke.potWhite);T(e,ke.rug,.55,.012,.85,-.45,.007,5.7,{shadow:!1}),T(e,ke.rug,.5,.012,.8,-.4,.007,20.8,{shadow:!1,ry:.08});{const y=Ns(e,-.95,0,9.3,"Hanging chair");et(y,ke.coir,.012,.012,ss(-.95)-1.75,0,(ss(-.95)+1.75)/2,0,{seg:4});const x=new I(0,1.75,0);for(const C of[-.6,.6,Math.PI-.5,Math.PI+.5]){const M=new I(Math.cos(C)*.46,1.05,Math.sin(C)*.46).clone().sub(x),D=new ve(new Dn(.01,.01,M.length(),4),ke.coir);D.position.copy(x).addScaledVector(M,.5),D.quaternion.setFromUnitVectors(new I(0,1,0),M.normalize()),y.add(D)}const E=new ve(new Nr(.5,.025,6,32),ke.macrame);E.position.set(0,.55+.5,0),E.rotation.x=Math.PI/2,y.add(E);const S=new ve(new Zt(.5,20,12,0,Math.PI*2,Math.PI*.5,Math.PI*.42),ke.macrameNet);S.position.y=.55+.42,S.castShadow=!0,y.add(S);const R=new ve(new Zt(.5,20,10,-Math.PI/2,Math.PI,.15*Math.PI,.38*Math.PI),ke.macrameNet);R.position.y=.55+.42,R.castShadow=!0,y.add(R),et(y,ke.cushion,.36,.36,.1,0,.55+.07,0,{seg:20});for(let C=0;C<14;C++){const b=C/14*Math.PI*2;et(y,ke.macrame,.012,.004,.1,Math.cos(b)*.3,.55-.02,Math.sin(b)*.3,{seg:4,shadow:!1})}He(-.95-.45,9.3-.45,-.95+.45,9.3+.45)}{const v=vt+.58;T(e,ke.tableTop,.38,.05,13.4-10.3,v,1.05,(10.3+13.4)/2);for(const y of[10.3+.15,(10.3+13.4)/2,13.4-.15])T(e,w.black,.04,1.03,.04,v-.05,.52,y),T(e,w.black,.3,.03,.03,v,.98,y,{shadow:!1});He(v-.2,10.3,v+.2,13.4);for(const y of[10.8,11.6,12.4,13.1])YM(e,v+.5,y,0);for(const y of[10.8,11.6,12.4,13.1])He(v+.33,y-.18,v+.67,y+.18)}{const v=Ps+.1,y=vt+.45,x=.9,E=Math.hypot(-.3-y,v-x),S=Math.atan2(v-x,-.3-y);T(e,ke.curb,E,.42,.3,(-.3+y)/2,(v+x)/2,.06+.1,{rz:S});const R=new Ro([new ye(y,0),new ye(-.3,0),new ye(-.3,v),new ye(y,x)]),C=new ve(new Dh(R),Bt({color:"#cfccc4",roughness:.95,side:Ot}));C.position.z=.06-.04,C.receiveShadow=!0,e.add(C),T(e,ke.curb,-.3-y,.3,.3,(-.3+y)/2,.15,.06+.1),T(e,ke.plaster,.35,Ps,.2,-.17,Ps/2,.06+.05);const b=-2.75,M=-.4,D=2.55,V=qM.clone();V.needsUpdate=!0,V.repeat.set((M-b)/.1,D/.1);const W=Bt({color:"#2a2a2a",alphaMap:V,alphaTest:.5,side:Ot,roughness:.8}),K=new ve(new ut(M-b,D),W);K.position.set((b+M)/2,D/2,.06+.02),e.add(K);for(const Y of[b,(b+M)/2,M])T(e,w.black,.03,D,.03,Y,D/2,.06+.03,{shadow:!1});T(e,w.black,M-b,.03,.03,(b+M)/2,D,.06+.03,{shadow:!1});const j=Y=>x+(Y-y)*(v-x)/(-.3-y);for(let Y=0;Y<5;Y++){const ie=.45+Y*.42;for(let F=b+.2;F<M-.1;F+=.36)ie>j(F)-.35||(T(e,w.blackMatte,.2,.13,.1,F,ie,.06+.08,{shadow:!1}),ja(e,F,ie+.06,.06+.1,6,.32).rotation.x=.25)}lr(e,-.75,.45,"tree",{r:.17,h:.3}),lr(e,-1.15,.4,"bush")}{const m=cn-.12;T(e,ke.plaster,-vt,1.15,.24,vt/2,.575,m),T(e,ke.plaster,-vt,.5,.6,vt/2,1.4,cn+.3);for(let S=vt+.4;S<-.2;S+=.7)et(e,w.woodDark,.03,.04,.9,S,2.05,cn+.3,{seg:6}),Up(e,S,2.45+Je()*.3,cn+.3,{n:9,len:.9,mat:ke.palm,droop:.45,w:.22});T(e,w.whiteGloss,.4,.14,.45,-.42,.86,23.3),et(e,w.chrome,.012,.012,.14,-.27,1,23.3,{seg:6,shadow:!1}),He(-.64,23.05,-.2,23.55);{const S=Ns(e,-.42,2.25,24.2,"AC outdoor unit");T(S,ke.acGrey,.32,.55,.78,0,0,0);const R=new ve(new $n(.2,18),w.metalDark);R.rotation.y=-Math.PI/2,R.position.set(-.161,0,-.1),S.add(R),T(S,w.metalDark,.3,.03,.3,.05,-.29,0,{shadow:!1})}const p=-2.45,v=-.6,y=m-.42;T(e,w.white,v-p,.86,.58,(p+v)/2,.43,y),T(e,ke.counterTop,v-p+.04,.04,.62,(p+v)/2,.88,y);for(let S=p+.45;S<v;S+=.45)T(e,w.metalDark,.008,.78,.005,S,.43,y-.292,{shadow:!1});T(e,w.blackMatte,.4,.5,.02,-1.75,.45,y-.29,{shadow:!1});for(let S=0;S<6;S++)T(e,[w.bottleTeal,w.red,w.cream][S%3],.04,.2+Je()*.06,.15,-1.9+S*.055,.35,y-.2,{shadow:!1});for(const[S,R]of[[-2.25,w.chrome],[-1.98,w.black],[-1.2,w.chrome]])et(e,R,.07,.085,.2,S,1,y,{seg:14}),T(e,w.black,.03,.12,.03,S+.09,1,y,{shadow:!1});T(e,w.blackMatte,.18,.08,.18,-1.55,.94,y,{shadow:!1}),He(p,y-.3,v,cn);const x=-1.75,E=22.95;T(e,ke.tableTop,.72,.05,1.4,x,.95,E);for(const S of[-1,1])T(e,w.black,.04,.95,.04,x+S*.25,.48,E-.5,{rz:S*.18}),T(e,w.black,.04,.95,.04,x+S*.25,.48,E+.5,{rz:S*.18});T(e,w.black,.04,.04,1,x,.3,E,{shadow:!1}),He(x-.36,E-.7,x+.36,E+.7);for(const[S,R]of[[x-.6,E-.35],[x-.6,E+.35],[x+.6,E-.3],[x+.6,E+.4],[x+.1,E+.95]])$M(e,S,R);{const S=Ns(e,x-.05,0,E-.95,"Rattan stool");T(S,ke.rattan,.34,.5,.34,0,.25,0),T(S,ke.rattan,.4,.05,.4,0,.52,0),He(x-.25,E-1.15,x+.15,E-.75)}for(const[S,R]of[[vt+.75,cn-1.15],[vt+.75,cn-.8],[vt+1.05,cn-.95]])et(e,ke.water,.14,.14,.46,S,.23,R,{seg:16,shadow:!1}).renderOrder=2,et(e,ke.capBlue,.04,.04,.06,S,.49,R,{seg:10,shadow:!1});He(vt+.55,cn-1.35,vt+1.25,cn-.6),lr(e,-.4,22.75,"bush")}for(let m=0;m<40;m++){const p=T(e,Je()>.5?ke.leafPale:w.woodDark,.04,.003,.025,vt+.5+Je()*2.8,.004,1+Je()*(cn-2),{shadow:!1,ry:Je()*3});p.receiveShadow=!1}}const $f=40;function jM(i){eo(i,0,0,0,4.9,qe),eo(i,0,6.5,0,It,qe),T(i,w.black,.12,.08,1.6,0,2.44,5.7),T(i,w.chrome,.1,.015,1.6,0,.008,5.7,{shadow:!1});const e=new ve(new ut(1.6,qe-2.48),w.glass);e.position.set(0,(2.48+qe)/2,5.7),e.rotation.y=Math.PI/2,e.renderOrder=2,i.add(e),Yt(i,0,0,0,It,{h:Fe-qe,y0:qe,collide:!1});const[t,n]=oh;eo(i,0,It,0,t,2.8),eo(i,0,n,0,Lt,2.8),T(i,w.black,.12,.08,n-t,0,2.44,(t+n)/2),T(i,w.chrome,.1,.015,n-t,0,.008,(t+n)/2,{shadow:!1});const s=new ve(new ut(n-t,2.8-2.48),w.glass);s.position.set(0,(2.48+2.8)/2,(t+n)/2),s.rotation.y=Math.PI/2,s.renderOrder=2,i.add(s),T(i,w.wall,.12,Fe-2.8,Lt-It,.02,2.8+(Fe-2.8)/2,(It+Lt)/2,{shadow:!1});for(let o=2.95;o<Fe-.05;o+=.14)T(i,w.wallWarm,.02,.03,Hf-It,.09,o,(It+Hf)/2,{shadow:!1});Yt(i,-.1,Lt,-.1,Mn+.2,{h:Fe+.3,mat:w.wallWarm,t:.2}),eo(i,0,0,Ut,0,qe),Yt(i,0,0,Ut,0,{h:Fe-qe,y0:qe,collide:!1}),KM(i);const r=20-vt;T(i,w.wallWarm,r,$f,Mn+1.2,vt+r/2,-$f/2-.01,(Mn-1)/2+.1,{shadow:!1});for(let o=1;o<12;o++)T(i,w.blackMatte,.05,.25,Mn+1.3,vt-.01,-o*3.4,(Mn-1)/2+.1,{shadow:!1});VM(i)}const ZM=new Et({color:"#a39b91",roughness:.55}),qc=new Et({color:"#ece7dc",roughness:.6}),JM=new Et({color:"#e9e4d6",roughness:.7}),QM=new Et({color:"#6c6a66",roughness:.5,metalness:.3});function e2(i,e,t,n=2.45){et(i,w.black,.004,.004,Fe-n,e,(Fe+n)/2,t,{seg:3,shadow:!1}),et(i,w.black,.045,.045,.2,e,n-.1,t,{seg:14});const s=new ve(new $n(.035,12),w.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,n-.201,t),i.add(s)}function t2(i){const e=new nt;e.userData.label="Meeting room",i.add(e),wt(e,w.floorDark,0,pt,Fn,Lt,0),wt(e,w.ceilingBlack,0,pt,Fn,Lt,Fe,{down:!0}),Yt(e,Fn+.1,pt,Fn+.1,Lt+.1,{h:Fe,mat:w.white});const[t,n]=PM;Yt(e,0,Lt+.1,t,Lt+.1,{h:Fe,mat:w.white}),Yt(e,n,Lt+.1,Fn+.2,Lt+.1,{h:Fe,mat:w.white}),Yt(e,t,Lt+.1,n,Lt+.1,{h:Fe-2.12,y0:2.12,mat:w.white,collide:!1}),et(e,w.ceilingBlack,.16,.16,Lt-pt,Fn-.35,Fe-.3,(pt+Lt)/2,{rx:Math.PI/2,seg:12,shadow:!1}),T(e,w.ceilingBlack,Fn,.35,.3,Fn/2,Fe-.18,pt+.25,{shadow:!1});for(const[l,h,u,f]of[[0,Lt-.01,Fn,Lt-.01],[Fn-.01,pt,Fn-.01,Lt]])T(e,w.concrete,Math.max(.02,u-l),.08,Math.max(.02,f-h),(l+u)/2,.04,(h+f)/2,{shadow:!1});const s=1.9,r=19.85,o=22,a=1,c=(r+o)/2;{const l=new nt;l.userData.label="Meeting table",e.add(l),T(l,ZM,a,.04,o-r,s,.75,c),T(l,qc,a+.01,.025,o-r+.01,s,.72,c,{shadow:!1});for(const h of[r+.15,o-.15])for(const u of[-1,1])T(l,w.black,.05,.72,.05,s+u*(a/2-.08),.36,h);for(const h of[r+.5,c-.1,o-.6]){const u=new ve(new $n(.04,14),w.black);u.rotation.x=-Math.PI/2,u.position.set(s+.1,.772,h),l.add(u)}T(l,w.black,.05,.02,.2,s-.15,.78,c-.4,{shadow:!1,ry:.4}),Rp(l,s,.77,c+.35,{petal:w.petalWhite,n:5}),He(s-a/2,r,s+a/2,o)}for(const l of[r+.4,c,o-.4])yr(e,s-a/2-.32,l,Math.PI/2),yr(e,s+a/2+.32,l,-Math.PI/2);yr(e,s,o+.35,Math.PI);{const l=new nt;l.userData.label="TV",l.position.set(1.75,0,19.25),e.add(l);for(let h=0;h<4;h++)T(l,w.black,.04,.03,.34,Math.sin(h*Math.PI/2)*.15,.04,Math.cos(h*Math.PI/2)*.15,{ry:h*Math.PI/2});et(l,w.black,.025,.025,1.5,0,.78,0,{seg:8}),T(l,w.black,1.1,.64,.06,0,1.55,.03),T(l,w.screenOff,1.06,.6,.005,0,1.55,.062,{shadow:!1}),He(1.55,19.05,1.95,19.45)}{const l=Pp(e,s,c,1.8,Math.PI/2,2.35,Fe);l.children[0].material=QM,l.children[0].scale.set(1.8,.09,.09)}for(const[l,h]of[[.8,19.6],[.8,21.6],[3,19.6],[3,21.6]])e2(e,l,h);zh(e,Fn-.02,2.7,20.6,-Math.PI/2);{const l=new nt;l.userData.label="Door frame",e.add(l);const h=Lt+.1,u=n-t;for(const g of[t-.02,n+.02])T(l,qc,.04,2.14,.22,g,1.07,h);T(l,qc,u+.08,.04,.22,(t+n)/2,2.14,h);const f=new nt;f.position.set(n,0,h);const d=u-.02;T(f,JM,d,2.08,.04,-d/2,1.05,0);for(const g of[-1,1]){T(f,w.chrome,.025,.32,.03,-d+.1,1.05,g*.06);for(const _ of[.92,1.18])T(f,w.chrome,.02,.02,.05,-d+.1,_,g*.035,{shadow:!1})}Za.push({leaf:f,closed:0,open:1.45,name:"game room door",handle:[-d+.1,1.3,.1],x:(t+n)/2,z:h,block:{minX:t,maxX:n,minZ:h-.1,maxZ:h+.1}})}{const l=new nt;l.userData.label="Shelf",e.add(l);const h=.38,u=Lt-.3,f=.5,d=.38,g=2.3;for(const _ of[-1,1])T(l,w.white,.02,g,d,h+_*f/2,g/2,u);T(l,w.white,f,g,.02,h,g/2,u+d/2);for(const _ of[.02,.55,.95,1.45,1.9,g])T(l,w.white,f,.02,d,h,_,u);T(l,w.white,f-.02,.52,.02,h,.28,u-d/2,{shadow:!1}),T(l,w.woodDark,.3,.16,.22,h,1.04,u),T(l,w.black,.26,.02,.16,h,1.47,u,{shadow:!1}),He(h-f/2,u-d/2,h+f/2,u+d/2)}{const l=new nt;l.userData.label="Cabinet",e.add(l),T(l,w.woodDark,.9,.45,.4,.95,.225,pt+.32),T(l,w.white,.42,.2,.01,.75,.32,pt+.52,{shadow:!1}),He(.5,pt+.1,1.4,pt+.52)}}const rs={x:.088,y:1.4,z:25.35,w:1.68,h:.94},Jn=i=>new Et(i),Wt={navy:Jn({color:"#1e2740",roughness:.9}),ledPurple:Jn({color:"#b46cff",emissive:"#9b4dff",emissiveIntensity:2.2}),ledCyan:Jn({color:"#5fe3ff",emissive:"#29c8ff",emissiveIntensity:1.8}),felt:Jn({color:"#1f6b46",roughness:.95}),railWood:Jn({color:"#5a3522",roughness:.5}),ps5White:Jn({color:"#f4f4f2",roughness:.35}),rug:Jn({color:"#3a3f4b",roughness:1}),cue:Jn({color:"#c79a62",roughness:.5}),beanRed:Jn({color:"#a8322d",roughness:.95}),beanBlue:Jn({color:"#2d4f8a",roughness:.95})},n2=["#f2c21b","#1f4fb4","#c8281f","#5b2a86","#ef7a1a","#1d7a3c","#7a1f1f","#111111"],Kf=n2.map(i=>Jn({color:i,roughness:.2,metalness:.05})),jf=(()=>{const i=document.createElement("canvas");i.width=512,i.height=160;const e=i.getContext("2d");e.font='700 110px "Avenir Next", "Helvetica Neue", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ff4fd8",e.shadowBlur=24,e.fillStyle="#ffd6f6",e.fillText("GAME ON",256,84);const t=new On(i);return t.colorSpace=yt,t})();Wt.neon=Jn({map:jf,emissive:"#ffffff",emissiveMap:jf,emissiveIntensity:1.6,transparent:!0,alphaTest:.05});function Fi(i,e,t=0,n=0,s=0){const r=new nt;return r.userData.label=e,r.position.set(t,0,n),r.rotation.y=s,i.add(r),r}function Zf(i,e,t,n,s,r){const o=Fi(i,"Controller",e,n,s);T(o,r,.16,.035,.07,0,t,0,{shadow:!1});for(const a of[-1,1])T(o,r,.05,.035,.06,a*.065,t,.04,{shadow:!1,ry:a*.4});T(o,w.black,.11,.004,.03,0,t+.019,-.005,{shadow:!1})}function i2(i){const e=Fi(i,"Game room"),t=Lt+.2;wt(e,w.floorDark,0,Lt,ci,Mn,0),wt(e,w.ceilingBlack,0,Lt,ci,Mn,Fe,{down:!0}),Yt(e,Fn+.2,Lt+.1,ci+.2,Lt+.1,{h:Fe,mat:w.white}),Yt(e,ci+.1,Lt,ci+.1,Mn+.2,{h:Fe,mat:w.white}),Yt(e,0,Mn+.1,ci+.2,Mn+.1,{h:Fe,mat:w.white}),T(e,w.ceilingBlack,ci,.4,.3,ci/2,Fe-.2,(t+Mn)/2,{shadow:!1});const n=rs.z;T(e,Wt.navy,.02,Fe,Mn-t-.4,.01,Fe/2,(t+Mn)/2),T(e,Wt.ledPurple,.02,.025,Mn-t-.6,.03,Fe-.25,(t+Mn)/2,{shadow:!1});{const c=Fi(e,"TV");T(c,w.black,.05,.98,1.72,.06,1.4,n),T(c,w.screenDark,.005,.94,1.68,.087,1.4,n,{shadow:!1}),T(c,Wt.ledCyan,.01,1.06,1.8,.03,1.4,n,{shadow:!1})}{const c=Fi(e,"TV console");T(c,w.white,.42,.42,1.9,.24,.21,n);for(const l of[n-.48,n+.48])T(c,w.metalDark,.005,.32,.9,.452,.21,l,{shadow:!1});He(0,n-.95,.45,n+.95)}{const c=Fi(e,"PS5",.25,n+.65);T(c,w.black,.06,.38,.22,0,.62,0);for(const l of[-1,1])T(c,Wt.ps5White,.02,.4,.26,l*.04,.63,0,{rz:l*.04});T(c,w.black,.1,.02,.12,0,.43,0,{shadow:!1})}T(e,w.blackMatte,.18,.26,.18,.25,.55,n-.75),T(e,Wt.rug,2.2,.01,2.4,1.75,.006,n,{shadow:!1}),Pn(Fh(e,2.95,n,-Math.PI/2,3),-.05);{const c=Fi(e,"Coffee table");T(c,w.woodDark,.55,.04,1,1.75,.4,n);for(const[l,h]of[[-1,-1],[1,-1],[1,1],[-1,1]])T(c,w.black,.03,.38,.03,1.75+l*.23,.19,n+h*.45);He(1.45,n-.52,2.05,n+.52)}Zf(e,1.72,.44,n-.22,.3,Wt.ps5White),Zf(e,1.8,.44,n+.2,-.2,Wt.ps5White),T(e,w.black,.12,.02,.05,1.68,.43,n+.38,{shadow:!1,ry:.5});for(const[c,l]of[[23.8,Wt.beanRed],[26.65,Wt.beanBlue]])Pn(Cp(e,1.35,c,l),-.15);const s=5,r=25,o=2.3,a=1.25;{const c=Fi(e,"Pool table");T(c,Wt.railWood,a+.2,.2,o+.2,s,.7,r),T(c,Wt.felt,a,.02,o,s,.81,r,{shadow:!1});for(const d of[-1,1])T(c,Wt.felt,.06,.05,o,s+d*(a/2-.03),.835,r,{shadow:!1}),T(c,Wt.felt,a,.05,.06,s,.835,r+d*(o/2-.03),{shadow:!1}),T(c,Wt.railWood,.1,.06,o+.2,s+d*(a/2+.05),.83,r),T(c,Wt.railWood,a+.2,.06,.1,s,.83,r+d*(o/2+.05));for(const[d,g]of[[-1,-1],[1,-1],[1,1],[-1,1]])T(c,Wt.railWood,.14,.62,.14,s+d*(a/2-.05),.31,r+g*(o/2-.1));for(const d of[-1,1])for(const g of[-1,0,1]){const _=new ve(new $n(.055,14),w.black);_.rotation.x=-Math.PI/2,_.position.set(s+d*(a/2-.04),.865,r+g*(o/2-.04)),c.add(_)}const l=.028,h=new Zt(l,14,10);let u=0;for(let d=0;d<5;d++)for(let g=0;g<=d;g++){const _=new ve(h,Kf[u++%Kf.length]);_.position.set(s+(g-d/2)*l*2.05,.82+l,r+.45+d*l*1.8),_.castShadow=!0,c.add(_)}const f=new ve(h,Wt.ps5White);f.position.set(s+.05,.82+l,r-.6),f.castShadow=!0,c.add(f),et(c,Wt.cue,.006,.012,1.45,s-.35,.9,r-.2,{rx:Math.PI/2-.03,seg:8}),He(s-a/2-.1,r-o/2-.1,s+a/2+.1,r+o/2+.1)}{const c=Fi(e,"Pool light");T(c,w.black,.32,.12,1.7,s,1.85,r);for(const l of[-.55,0,.55]){const h=new ve(new ut(.24,.4),w.lightStrip);h.rotation.x=Math.PI/2,h.position.set(s,1.789,r+l),c.add(h)}for(const l of[-.7,.7])et(c,w.black,.004,.004,Fe-1.91,s,(Fe+1.91)/2,r+l,{seg:3,shadow:!1})}{const c=Fi(e,"Cue rack");T(c,w.woodDark,.05,.08,.7,ci-.03,1.55,23.6),T(c,w.woodDark,.05,.06,.7,ci-.03,.1,23.6);for(let l=0;l<4;l++)et(c,Wt.cue,.007,.013,1.5,ci-.07,.8,23.35+l*.16,{seg:8})}{const c=new ve(new ut(1.5,.47),Wt.neon);c.position.set(4.7,2.45,Mn-.01),c.rotation.y=Math.PI,c.userData.label="Neon sign",e.add(c)}for(const[c,l]of[[1.8,23.6],[1.8,26.4]]){et(e,w.black,.05,.05,.12,c,Fe-.06,l,{seg:10,shadow:!1});const h=new ve(new $n(.035,10),w.spotGlow);h.rotation.x=Math.PI/2,h.position.set(c,Fe-.121,l),e.add(h)}}const Ne=Pt,Z=Pt+5.8,vn=-2,ln=47,Ve=3.2,tt=3,hn=.6,Jf=2.4;let Qf=4242;const un=()=>((Qf=Qf*16807%2147483647)-1)/2147483646;function zn(i,e,t,n=!0){const s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);const r=new On(s);return r.colorSpace=yt,n&&(r.wrapS=r.wrapT=pi),r.anisotropy=8,r}function ed(i,e,t){return zn(1024,1024,(n,s)=>{const o=s/2;for(let a=0;a<2;a++)for(let c=0;c<2;c++){const l=(un()-.5)*14;n.fillStyle=`rgb(${i[0]+l},${i[1]+l},${i[2]+l})`,n.fillRect(a*o,c*o,o,o),n.save(),n.beginPath(),n.rect(a*o,c*o,o,o),n.clip();for(let h=0;h<7;h++){n.strokeStyle=e.replace("A",(.06+un()*.14).toFixed(2)),n.lineWidth=.8+un()*2,n.beginPath();let u=a*o+un()*o,f=c*o;n.moveTo(u,f);for(let d=0;d<6;d++)u+=(un()-.4)*o*.5,f+=o/5,n.quadraticCurveTo(u+(un()-.5)*60,f-o/10,u,f);n.stroke()}for(let h=0;h<400;h++){const u=(un()-.5)*18;n.fillStyle=`rgba(${i[0]+u},${i[1]+u},${i[2]+u},0.25)`,n.beginPath(),n.arc(a*o+un()*o,c*o+un()*o,4+un()*18,0,Math.PI*2),n.fill()}n.restore()}n.strokeStyle=t,n.lineWidth=2;for(let a=0;a<=2;a++)n.beginPath(),n.moveTo(a*o,0),n.lineTo(a*o,s),n.stroke(),n.beginPath(),n.moveTo(0,a*o),n.lineTo(s,a*o),n.stroke()})}const s2=zn(256,256,(i,e)=>{i.fillStyle="#f1f0ec",i.fillRect(0,0,e,e);for(let t=0;t<1500;t++)i.fillStyle=`rgba(0,0,0,${.03+un()*.05})`,i.fillRect(un()*e,un()*e,1.5,1.5);i.strokeStyle="#c9c7c0",i.lineWidth=3;for(const t of[0,e/2,e])i.beginPath(),i.moveTo(t,0),i.lineTo(t,e),i.stroke(),i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke()}),r2=zn(128,128,(i,e)=>{i.fillStyle="#e9e8e4",i.fillRect(0,0,e,e);for(let t=0;t<6;t++){const n=8+t*9;i.strokeStyle=t%2?"#bdbbb5":"#8e8c86",i.lineWidth=4,i.strokeRect(n,n,e-2*n,e-2*n)}i.fillStyle="#55534f",i.fillRect(56,56,16,16)},!1),o2=zn(256,256,(i,e)=>{i.fillStyle="#ecebe6",i.fillRect(0,0,e,e),i.strokeStyle="#c6c4bd",i.lineWidth=2;for(const[t,n,s,r]of[[0,e/2,e/2,0],[e/2,0,e,e/2],[e,e/2,e/2,e],[e/2,e,0,e/2]])i.beginPath(),i.moveTo(t,n),i.lineTo(s,r),i.stroke()}),a2=zn(256,512,(i,e,t)=>{i.fillStyle="#d9d2c3",i.fillRect(0,0,e,t);for(let n=0;n<600;n++)i.fillStyle=`rgba(120,105,85,${.05+un()*.08})`,i.fillRect(un()*e,un()*t,10+un()*50,1);i.fillStyle="rgba(110,100,85,.55)";for(let n=22;n<t;n+=26)i.fillRect(0,n,e,2)},!1);function Oi(i,{bg:e="#0f8a3c",fg:t="#ffffff",w:n=512,h:s=128,font:r="bold 64px system-ui, sans-serif",icon:o=""}={}){return zn(n,s,a=>{a.fillStyle=e,a.fillRect(0,0,n,s),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=r,a.fillText(o?`${o}  ${i}`:i,n/2,s/2+2)},!1)}const it=i=>new Et(i),to=i=>it({map:i,emissive:"#ffffff",emissiveMap:i,emissiveIntensity:.55,roughness:.4}),te={floor:it({map:ed([214,196,170],"rgba(150,120,90,A)","#b9a487"),roughness:.08,metalness:.05,envMapIntensity:1.6}),floorBrown:it({map:ed([104,82,66],"rgba(205,190,170,A)","#4e3c30"),roughness:.08,metalness:.05,envMapIntensity:1.6}),skirting:it({color:"#4a3326",roughness:.25}),wall:it({color:"#ecebe6",roughness:.92}),grid:it({map:s2,roughness:.95}),diffuser:it({map:r2,roughness:.8}),steel:it({color:"#a7aba9",roughness:.45,metalness:.55}),doorWhite:it({color:"#efeee8",roughness:.6}),frame:it({color:"#d8d2c2",roughness:.6}),laminate:it({map:a2,roughness:.55}),diamond:it({map:o2,roughness:.85}),woodStrip:it({color:"#6a4126",roughness:.5}),darkGlass:new Et({color:"#2c3a2c",transparent:!0,opacity:.55,roughness:.05,metalness:.3,depthWrite:!1,side:Ot}),orange:it({color:"#ff6a12",roughness:.35}),caution:it({map:Oi("CAUTION",{bg:"#f2b90f",fg:"#2a2a2a",w:256,h:512,font:"bold 44px system-ui, sans-serif"}),roughness:.5}),red:it({color:"#c42a22",roughness:.5}),fireExit:to(Oi("FIRE EXIT  ←",{w:512,h:112,font:"bold 60px system-ui, sans-serif"})),fireExt:to(Oi("FIRE EXTINGUISHER",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),pushBar:to(Oi("PUSH BAR TO OPEN",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),exitSmall:to(Oi("EXIT",{w:256,h:96,font:"bold 60px system-ui, sans-serif"})),gents:it({map:Oi("GENTS TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚹"}),roughness:.4}),techno:it({map:zn(512,280,(i,e,t)=>{i.fillStyle="#f7f7f5",i.fillRect(0,0,e,t),i.fillStyle="#2b5fae",i.fillRect(e*.58,t*.3,e*.42,t*.32),i.font="bold 66px system-ui, sans-serif",i.textBaseline="middle",i.fillStyle="#2b5fae",i.fillText("Techn",22,t*.46),i.fillStyle="#ffffff",i.fillText("aureus",e*.6,t*.46),i.fillStyle="#555",i.font="22px system-ui, sans-serif",i.fillText("IT STRATEGY & TECHNOLOGY PARTNER",24,t*.78)},!1),roughness:.5}),pixPanel:it({color:"#3c3e40",roughness:.5,metalness:.2}),pixText:it({map:zn(256,96,(i,e,t)=>{i.fillStyle="#3c3e40",i.fillRect(0,0,e,t),i.fillStyle="#4aa3df",i.font="bold 50px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("pixbit",e/2,t*.42),i.fillStyle="#cfd2d4",i.font="16px system-ui, sans-serif",i.fillText("solutions",e/2,t*.8)},!1),roughness:.5}),mat:it({color:"#3b2620",roughness:1}),pink:it({color:"#e9b8c4",roughness:.3}),mirror:it({color:"#c9d4d8",roughness:.08,metalness:.25}),slot:it({color:"#5d6a6e",roughness:.1,metalness:.4}),room:it({color:"#cfccc4",roughness:.9}),roomCeil:it({color:"#e9e7e1",roughness:.95}),desk:it({color:"#c8b79c",roughness:.7}),officeGlass:new Et({color:"#33403a",transparent:!0,opacity:.4,roughness:.05,metalness:.3,depthWrite:!1,side:Ot}),pixLetters:it({map:zn(512,216,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#141414",i.textAlign="center",i.textBaseline="middle",i.font="bold 128px system-ui, sans-serif",i.fillText("pixbit",e/2,t*.38),i.font="44px system-ui, sans-serif",i.fillText("· s o l u t i o n s ·",e/2,t*.82)},!1),transparent:!0,alphaTest:.3,roughness:.6}),cam:it({color:"#f2f2f0",roughness:.4}),leather:it({color:"#1e1a19",roughness:.3,metalness:.05,envMapIntensity:1.2}),tableWood:it({color:"#6b5646",roughness:.55}),daylight:new Ln({color:"#f4f8ff"}),lamp:new Ln({color:"#fff3c9"}),tint:new Et({color:"#c9d6b0",transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1,side:Ot}),olive:it({color:"#8f9a2e",roughness:.85}),silver:it({color:"#b8bcc0",roughness:.3,metalness:.8}),tableTop:it({color:"#e6e1d8",roughness:.35}),ladies:it({map:Oi("LADIES TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚺"}),roughness:.4}),slate:it({color:"#6b6e71",roughness:.85}),navy:it({color:"#1f2a3b",roughness:.6}),navySlats:it({map:zn(256,256,(i,e,t)=>{i.fillStyle="#212d40",i.fillRect(0,0,e,t);for(let n=0;n<e;n+=16)i.fillStyle="#141c29",i.fillRect(n,0,3,t),i.fillStyle="#2b3950",i.fillRect(n+3,0,2,t)}),roughness:.55}),tenCod:it({map:zn(512,160,(i,e,t)=>{i.fillStyle="#e9ecef",i.beginPath(),i.moveTo(20,30),i.lineTo(95,30),i.lineTo(60,80),i.lineTo(95,80),i.lineTo(55,135),i.lineTo(20,135),i.lineTo(55,85),i.lineTo(20,85),i.closePath(),i.fill(),i.font="bold 96px system-ui, sans-serif",i.textBaseline="middle",i.fillText("10COD",120,t/2+4)},!1),transparent:!0,alphaTest:.3,roughness:.4}),eSyn:it({map:zn(512,256,(i,e,t)=>{i.fillStyle="#e8506a",i.beginPath(),i.arc(120,118,100,0,Math.PI*2),i.fill(),i.font="italic bold 150px Georgia, serif",i.textBaseline="middle",i.fillStyle="#26334a",i.fillText("e",40,120),i.fillStyle="#f4e9e4",i.fillText("S",120,130),i.font="bold 76px system-ui, sans-serif",i.fillStyle="#26334a",i.fillText("YNERGY",210,150)},!1),transparent:!0,alphaTest:.3,roughness:.5}),ringLogo:it({map:zn(256,256,(i,e)=>{i.strokeStyle="#8f6cff",i.lineWidth=16,i.beginPath(),i.arc(e/2,e/2,90,0,Math.PI*2),i.stroke(),i.fillStyle="#e5e1ff",i.font="bold 54px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("dev",e/2,e/2)},!1),transparent:!0,alphaTest:.3,roughness:.4}),greyTile:it({color:"#9a9c9a",roughness:.3}),stairBlue:it({color:"#5a6fc4",roughness:.8}),fireRed:it({color:"#c8231c",roughness:.5}),granite:it({color:"#141416",roughness:.12,metalness:.35,envMapIntensity:1.4}),liftSteel:it({color:"#b9bdbd",roughness:.42,metalness:.75}),fireDoor:it({color:"#9aa5a1",roughness:.55,metalness:.15}),greenSign:to(Oi("FIRE STATION",{w:512,h:112,font:"bold 50px system-ui, sans-serif"})),fourth:it({map:Oi("FOURTH FLOOR",{bg:"#c9ccce",fg:"#2c2c2c",w:512,h:128,font:"bold 54px system-ui, sans-serif"}),roughness:.4,metalness:.3}),ledRed:it({color:"#ff2a1a",emissive:"#ff2a1a",emissiveIntensity:1.4}),numDisc:i=>it({map:zn(128,128,(e,t)=>{e.fillStyle="#fff",e.fillRect(0,0,t,t),e.fillStyle="#111",e.font="bold 84px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(String(i),t/2,t/2+4)},!1),roughness:.4})};function qn(i,e,t,n,s,r=te.wall,o=tt){T(i,r,.1,o,n-t,e+s*-.05,o/2,(t+n)/2),T(i,te.skirting,.015,.1,n-t,e+s*.008,.05,(t+n)/2,{shadow:!1}),He(Math.min(e,e-s*.1),t,Math.max(e,e-s*.1),n)}function td(i,e,t,n=Ne,s=Z,r=Ne+.25,o=Z-.25){const l=o-r;T(i,te.wall,s-n,.85,.25,(n+s)/2,.85/2,e),T(i,te.skirting,s-n,.1,.015,(n+s)/2,.05,e+t*.13,{shadow:!1}),T(i,te.wall,s-n,Ve-2.7,.25,(n+s)/2,(2.7+Ve)/2,e);for(const[u,f]of[[n,r],[o,s]])T(i,te.wall,f-u,2.7-.85,.25,(u+f)/2,(.85+2.7)/2,e);const h=new ve(new ut(l,2.7-.85),w.glass);h.position.set((r+o)/2,(.85+2.7)/2,e),h.renderOrder=2,i.add(h);for(let u=0;u<=5;u++)T(i,w.black,.06,2.7-.85,.08,r+u/5*l,(.85+2.7)/2,e);for(const u of[.85+.02,2.7-.02])T(i,w.black,l,.05,.08,(r+o)/2,u,e);He(n,e-.15,s,e+.15)}function Yc(i,e,t,n,s,r,o){const a=e-o*.03;return T(i,te.frame,.06,s+.06,n+.12,e-o*.015,(s+.06)/2,t),T(i,r,.04,s,n,a,s/2,t),a-o*.03}function c2(i,e,t,n){const o=n-.475,a=n+.95/2;qn(i,Z,e,o-.06,-1),qn(i,Z,a+.06,t,-1),T(i,te.wall,.1,tt-2.25-.06,.95+.12,Z+.05,(tt+2.25+.06)/2,n);for(const v of[o-.03,a+.03])T(i,te.frame,.14,2.25+.06,.06,Z+.03,(2.25+.06)/2,v);T(i,te.frame,.14,.06,.95+.12,Z+.03,2.25+.03,n);const c=new nt;c.position.set(Z-.01,0,o),T(c,te.laminate,.04,2.25-.01,.95-.01,0,2.25/2,.95/2);for(const v of[-1,1]){T(c,te.slot,.012,.9,.12,v*.022,1.45,.95/2-.05,{shadow:!1}),T(c,w.chrome,.03,.42,.03,v*.075,1.05,.95-.12,{shadow:!1});for(const y of[.86,1.24])T(c,w.chrome,.06,.02,.02,v*.05,y,.95-.12,{shadow:!1})}Za.push({leaf:c,closed:0,open:Math.PI/2*.92,name:"ladies toilet",handle:[-.12,1.25,.95-.12],x:Z,z:n,block:{minX:Z-.05,maxX:Z+.1,minZ:o,maxZ:a}});const l=Z+.1,h=Z+2.3,u=e+.05,f=t-.05,d=tt,g=(l+h)/2,_=(u+f)/2;T(i,w.floorCorridor,h-l,.02,f-u,g,.01,_,{shadow:!1}),T(i,w.white,h-l,.04,f-u,g,d,_,{shadow:!1}),T(i,w.whiteGloss,.1,d,f-u+.2,h+.05,d/2,_);for(const v of[u-.05,f+.05])T(i,w.whiteGloss,h-l,d,.1,g,d/2,v);T(i,te.pink,.02,1.2,f-u,h-.005,.6,_,{shadow:!1});for(const v of[u+.005,f-.005])T(i,te.pink,h-l,1.2,.02,g,.6,v,{shadow:!1});He(h,u-.1,h+.1,f+.1),He(l-.1,u-.1,h,u),He(l-.1,f,h,f+.1),T(i,w.lightStrip,.6,.02,.6,g,d-.03,_,{shadow:!1});const m=_+.7;T(i,w.whiteGloss,.2,.55,.42,h-.1,.8,m),et(i,w.whiteGloss,.19,.15,.4,h-.42,.2,m,{seg:20}),et(i,w.white,.2,.2,.03,h-.42,.42,m,{seg:20}),He(h-.65,m-.25,h,m+.25);const p=_-.6;T(i,w.whiteGloss,.45,.14,.55,h-.23,.85,p),T(i,w.chrome,.12,.03,.03,h-.08,.98,p,{shadow:!1}),T(i,te.mirror,.02,.7,.55,h-.012,1.55,p,{shadow:!1}),He(h-.46,p-.3,h,p+.3)}function $c(i,e,t,n,s,{alarm:r=!0}={}){const a=-s,c=s*Math.PI/2,l=u=>e+s*u;T(i,w.blackMatte,.04,2.3,1.1+.2,l(.005),1.15,t,{shadow:!1});for(const u of[-1,1])T(i,te.liftSteel,.03,2.22,1.1/2-.01,l(.03),1.11,t+u*1.1/4,{shadow:!1});for(const u of[-1,1])T(i,te.liftSteel,.04,2.26,.03,l(.03),1.13,t+u*(1.1/2+.02),{shadow:!1});T(i,te.liftSteel,.04,.03,1.1+.07,l(.03),2.26,t,{shadow:!1}),gt(i,te.numDisc(n),.22,.22,l(.012),2.55,t,c),T(i,te.liftSteel,.03,.14,.62,l(.015),2.92,t,{shadow:!1}),T(i,w.blackMatte,.035,.08,.2,l(.02),2.92,t,{shadow:!1}),T(i,te.ledRed,.036,.04,.06,l(.022),2.92,t,{shadow:!1});const h=t+a*(1.1/2+.33);if(T(i,te.liftSteel,.02,.26,.11,l(.01),1.15,h,{shadow:!1}),T(i,w.blackMatte,.01,.06,.05,l(.022),1.12,h,{shadow:!1}),r){const u=t-a*.97;T(i,te.fireRed,.05,.14,.12,l(.025),2.05,u,{shadow:!1}),T(i,te.fireRed,.04,.13,.1,l(.02),1.3,u,{shadow:!1})}}const l2=["techno","tenCod","eSyn","ringLogo"];function Op(i){for(const e of l2)te[e].visible=i}Op(!1);function Kc(i,e,t,n,s,r=4.2,{frost:o=!1}={}){const a=e-t*.03,c=e+t*3;wt(i,te.room,Math.min(e,c),n,Math.max(e,c),s,0),T(i,te.room,.1,Ve,s-n,c,Ve/2,(n+s)/2,{shadow:!1}),wt(i,te.roomCeil,Math.min(e,c),n,Math.max(e,c),s,Ve,{down:!0});for(let l=n;l<s-.5;l+=r){const h=l+.2,u=Math.min(l+r,s)-.2;T(i,te.wall,.4,Ve,.4,e,Ve/2,l);const f=new ve(new ut(u-h,tt-.05),te.officeGlass);if(f.position.set(a,(tt-.05)/2,(h+u)/2),f.rotation.y=t>0?-Math.PI/2:Math.PI/2,f.renderOrder=2,i.add(f),o){const p=new ve(new ut(u-h,.75),w.glassFrost);p.position.set(a-t*.006,1.25,(h+u)/2),p.rotation.y=f.rotation.y,p.renderOrder=3,i.add(p)}const d=Math.max(2,Math.round((u-h)/1));for(let p=0;p<=d;p++)T(i,w.black,.06,tt,.05,a,tt/2,h+p/d*(u-h));for(const p of[.04,2.35,tt-.03])T(i,w.black,.06,.06,u-h,a,p,(h+u)/2);const g=h+(u-h)/d;for(const p of[-1,1])T(i,w.chrome,.03,.6,.025,a-t*p*.05,1.05,g-.12,{shadow:!1});const _=e+t*1.6,m=(h+u)/2+.6;T(i,te.desk,.7,.04,1.4,_,.75,m);for(const p of[-1,1])T(i,w.black,.05,.73,.05,_,.37,m+p*.6,{shadow:!1});T(i,w.screenDark,.03,.32,.55,_+t*.2,1,m),T(i,w.black,.45,.5,.45,_-t*.55,.5,m)}T(i,te.wall,.4,Ve,.4,e,Ve/2,s),He(Math.min(e,a)-.05,n,Math.max(e,a)+.05,s)}const ah=14.5,Bn=ah+11.85,Xt=Bn+6.4,hi=Z+11;function nd(i,e,t,n=0,s=1.6){const r=new nt;r.position.set(e,0,t),r.rotation.y=n,i.add(r),T(r,te.leather,s,.3,.82,0,.24,0),T(r,te.leather,s-.36,.14,.62,0,.45,.08);for(const o of[-1,1])T(r,te.leather,.18,.62,.82,o*(s/2-.09),.37,0);T(r,te.leather,s-.1,.36,.18,0,.6,-.32);for(const o of[-1,1])T(r,te.leather,(s-.4)/2,.36,.16,o*(s-.4)/4,.74,-.22,{rx:-.12});for(const o of[-1,1])for(const a of[-1,1])T(r,w.blackMatte,.06,.09,.06,o*(s/2-.08),.045,a*.34,{shadow:!1});return r}function id(i,e,t,n=0,s=1.9){const r=new nt;r.position.set(e,0,t),r.rotation.y=n,i.add(r),T(r,te.leather,s,.22,.72,0,.27,.04),T(r,te.leather,s,.1,.7,0,.42,.05),T(r,te.leather,s,.62,.16,0,.73,-.3,{rx:-.08});for(const o of[-1,1])T(r,w.chrome,.03,.03,.72,o*(s/2-.12),.015,.02,{shadow:!1}),T(r,w.chrome,.03,.16,.03,o*(s/2-.12),.08,.34,{shadow:!1}),T(r,w.chrome,.03,.16,.03,o*(s/2-.12),.08,-.3,{shadow:!1});return r}function jc(i,e,t,n=.85){He(i-t/2,e-n/2,i+t/2,e+n/2)}function h2(i){const e=(Bn+Xt)/2,t=Xt-Bn;wt(i,te.floor,Z,Bn,hi,Xt,.001,{tile:1.6}),wt(i,te.grid,Z,Bn,hi,Xt,Ve,{down:!0,tile:1.2});for(const d of[Bn,Xt]){const g=d===Bn?-1:1;T(i,te.wall,hi-Z,Ve,.1,(Z+hi)/2,Ve/2,d+g*.05),T(i,te.skirting,hi-Z,.1,.015,(Z+hi)/2,.05,d-g*.008,{shadow:!1}),He(Z,d-.1,hi,d+.1)}T(i,te.granite,.65,Ve,.55,Z+.08,Ve/2,Xt+.275),He(Z-.25,Xt,Z+.4,Xt+.55),T(i,te.wall,.1,Ve,t,hi+.05,Ve/2,e);const n=hi-.02,s=e-1.6,r=e+1.6,o=2.55,a=new ve(new ut(r-s,o),te.daylight);a.position.set(n+.005,o/2,e),a.rotation.y=-Math.PI/2,i.add(a);const c=new ve(new ut(r-s,o),w.glass);c.position.set(n,o/2,e),c.rotation.y=-Math.PI/2,c.renderOrder=2,i.add(c);for(const d of[s,e-.75,e+.75,r])T(i,w.black,.07,o,.07,n,o/2,d);for(const d of[.04,o])T(i,w.black,.07,.07,r-s,n,d,e);for(const[d,g]of[[s,e-.75],[e+.75,r]])for(const _ of[.3,1.25,2.15])T(i,w.black,.07,.05,g-d,n,_,(d+g)/2);T(i,w.black,.07,.05,1.5,n,2.15,e);for(const d of[e-.07,e+.07])T(i,w.blackMatte,.04,.45,.03,n-.07,1.1,d,{shadow:!1});He(hi-.1,Bn,hi+.1,Xt),nd(i,Z+5,Bn+.48,0,1.6),jc(Z+5,Bn+.48,1.6),id(i,Z+7.1,Bn+.45,0,1.9),jc(Z+7.1,Bn+.45,1.9),id(i,Z+5.6,Xt-.45,Math.PI,2.2),jc(Z+5.6,Xt-.45,2.2),nd(i,Z+9.4,Xt-.75,Math.PI+.35,1.6),He(Z+8.5,Xt-1.3,Z+10.3,Xt-.2);const l=Z+6.2,h=Bn+1.6;T(i,te.tableTop,1.2,.04,.6,l,.42,h),T(i,te.tableWood,1.1,.02,.5,l,.12,h,{shadow:!1});for(const d of[-1,1])for(const g of[-1,1])T(i,te.tableWood,.04,.44,.04,l+d*.52,.2,h+g*.24,{rz:d*.12});He(l-.62,h-.32,l+.62,h+.32);const u=Z+8.4;T(i,te.frame,1.05,2.15,.05,u,1.075,Xt-.02),T(i,te.fireDoor,.95,2.1,.04,u,1.05,Xt-.04),T(i,w.chrome,.14,.03,.04,u-.35,1.05,Xt-.08,{shadow:!1}),gt(i,te.greenSign,.5,.11,u+.2,2.35,Xt-.012,Math.PI),T(i,w.white,.09,.09,.012,u-.75,1.25,Xt-.006,{shadow:!1});for(const d of[Z+2,Z+5,Z+8])for(const g of[e-1.7,e+1.7])T(i,te.lamp,.24,.01,.24,d,Ve-.006,g,{shadow:!1});for(const d of[Z+3.5,Z+6.5,Z+9.5])for(const g of[e-2.2,e+2.2])gt(i,te.diffuser,.6,.6,d,Ve-.004,g,0,Math.PI/2);for(const d of[Z+3,Z+7.5])et(i,te.cam,.06,.07,.03,d,Ve-.015,e-.6,{seg:14,shadow:!1});const f=new ve(new Zt(.07,16,10,0,Math.PI*2,0,Math.PI/2),te.cam);f.rotation.x=Math.PI,f.position.set(Z+9.2,Ve,Xt-.5),i.add(f)}function u2(i){wt(i,te.floor,Ne+.02,vn,Z-Jf,ln,.001,{tile:1.6}),wt(i,te.floorBrown,Z-Jf,vn,Z,ln,.001,{tile:1.6}),wt(i,te.grid,Ne+hn,vn,Z-hn,ln,Ve,{down:!0,tile:1.2});for(const[H,Ee,Ue,Ze,Ce,U]of[[Ne,Ne+hn,Ne+hn,1,vn,ln],[Z-hn,Z,Z-hn,-1,vn,ln]])wt(i,te.wall,H,Ce,Ee,U,tt,{down:!0}),T(i,te.wall,.03,Ve-tt,U-Ce,Ue,(tt+Ve)/2,(Ce+U)/2,{shadow:!1}),T(i,w.lightStrip,.02,.025,U-Ce-.4,Ue+Ze*.03,tt+.04,(Ce+U)/2,{shadow:!1});for(let H=vn+2.2;H<ln-1;H+=3)for(const Ee of[Ne+hn+.9,Z-hn-.9])et(i,w.spotGlow,.07,.07,.01,Ee,Ve-.006,H,{seg:16,shadow:!1});for(let H=vn+3.7;H<ln-2;H+=6)gt(i,te.diffuser,.6,.6,(Ne+Z)/2+(Math.round(H)%2?.6:-.6),Ve-.004,H,0,Math.PI/2),et(i,te.cam,.05,.06,.03,(Ne+Z)/2,Ve-.015,H+1.5,{seg:14,shadow:!1});for(const H of[vn+1.7,12.5,22.5])T(i,w.spotGlow,.22,.012,.6,Ne+hn/2,tt-.008,H,{shadow:!1});qn(i,Ne,vn,fn,1),T(i,te.wall,.1,Ve-tt,fn-vn,Ne-.05,(tt+Ve)/2,(vn+fn)/2,{shadow:!1}),T(i,te.steel,.03,1.75,.82,Ne+.015,1.12,1.75),T(i,w.metalDark,.035,.012,.8,Ne+.016,.25,1.75,{shadow:!1}),T(i,w.chrome,.04,.03,.12,Ne+.04,1.15,1.42,{shadow:!1}),gt(i,te.fireExt,.36,.07,Ne+.004,1.35,2.4,Math.PI/2),gt(i,te.fireExt,.36,.07,Ne+.004,2.35,1.75,Math.PI/2);const e=Yc(i,Ne,-.25,.95,2.15,te.doorWhite,-1);T(i,w.chrome,.05,.05,.8,e+.03,1,-.25,{shadow:!1});for(const H of[-.62,.12])T(i,w.chrome,.06,.08,.05,e+.02,1,H,{shadow:!1});gt(i,te.pushBar,.3,.06,e+.002,1.2,-.25,Math.PI/2),gt(i,te.exitSmall,.28,.1,Ne+.004,2.45,-.25,Math.PI/2),T(i,te.red,.04,.12,.12,Ne+.02,1.4,.55,{shadow:!1}),T(i,w.white,.01,.12,.08,Ne+.04,1.6,-.25+.75,{shadow:!1});const t=Tt,n=18.75,s=(H,Ee,Ue,Ze)=>{T(i,w.concrete,.08,Ze-Ue,Ee-H,Ne-.04,(Ue+Ze)/2,(H+Ee)/2,{shadow:!1});const Ce=new ve(Ds(new ut(Ee-H,Ze-Ue),Ee-H,Ze-Ue,1.6),w.concrete);Ce.position.set(Ne+.002,(Ue+Ze)/2,(H+Ee)/2),Ce.rotation.y=Math.PI/2,Ce.receiveShadow=!0,i.add(Ce),Ue===0&&(T(i,te.skirting,.015,.1,Ee-H,Ne+.008,.05,(H+Ee)/2,{shadow:!1}),He(Ne-.1,H,Ne+.02,Ee))},r=[t,...go.flatMap(H=>[H-bn-.03,H+bn+.03]),n];for(let H=0;H<r.length;H+=2)s(r[H],r[H+1],0,tt);for(const H of go)s(H-bn-.03,H+bn+.03,Eo+.03,tt);T(i,te.wall,.1,Ve-tt,ln-t,Ne-.05,(tt+Ve)/2,(t+ln)/2,{shadow:!1}),T(i,w.white,.012,.09,.09,Ne+.006,1.25,9.55,{shadow:!1}),T(i,w.blackMatte,.015,.03,.035,Ne+.012,1.25,9.55,{shadow:!1}),T(i,w.blackMatte,.03,.14,.07,Ne+.015,1.25,9.8,{shadow:!1}),T(i,w.bottleBlue,.01,.04,.04,Ne+.031,1.27,9.8,{shadow:!1}),T(i,w.white,.012,.09,.09,Ne+.006,.4,9.7,{shadow:!1});const o=17.4;T(i,w.black,.03,.78,.78,Ne+.015,2.05,o),gt(i,w.logo,.42,.6,Ne+.032,2.05,o,Math.PI/2),gt(i,te.pixLetters,.8,.34,Ne+.004,1.42,o,Math.PI/2),T(i,w.white,.012,.09,.14,Ne+.006,.42,o+.35,{shadow:!1}),T(i,w.white,.03,.03,.9,Ne+hn/2,tt-.015,o,{shadow:!1});for(const H of[o-.3,o+.3])et(i,w.white,.045,.045,.16,Ne+hn/2-.05,tt-.12,H,{seg:12,shadow:!1,rz:.6});qn(i,Ne,n,20,1);const a=Yc(i,Ne,19.35,.95,2.25,te.laminate,-1);T(i,te.slot,.012,.9,.12,a,1.45,19.3,{shadow:!1}),T(i,w.chrome,.03,.42,.03,a+.05,1.05,19,{shadow:!1});const c=new ve(new ut(.95,1.9),te.fireDoor);c.position.set(Ne+.012,1.15,20.9),c.rotation.y=Math.PI/2,i.add(c),T(i,w.chrome,.03,.1,.04,Ne+.03,1,21.2,{shadow:!1}),gt(i,te.greenSign,.5,.11,Ne+.012,2.25,20.9,Math.PI/2),gt(i,te.fireExt,.62,.12,Ne+.012,1.45,22.05,Math.PI/2);const l=22.8,h=36;qn(i,Ne,20,l,1),qn(i,Ne,l,h,1,te.granite);const u=[{n:4,z:24.6},{n:3,z:28},{n:2,z:31.4},{n:1,z:34.6}];for(const H of u)$c(i,Ne,H.z,H.n,1);T(i,w.white,.012,.09,.09,Ne+.006,.38,29.7,{shadow:!1});for(const H of[32.6,33])et(i,w.chrome,.22,.22,.7,Ne+.32,.35,H,{seg:20,shadow:!1});const f=new nt;f.position.set(Ne+.9,2.95,24.2),i.add(f),T(f,w.black,.03,.2,.62,0,0,0,{shadow:!1}),gt(f,te.fourth,.6,.18,.017,0,0,Math.PI/2),gt(f,te.fourth,.6,.18,-.017,0,0,-Math.PI/2);const d=h,g=h+3.6;qn(i,Ne,d,g,1,te.slate);for(const H of[g-1.25,g-.25])T(i,w.blackMatte,.006,2.2,.01,Ne+.003,1.1,H,{shadow:!1});T(i,w.blackMatte,.006,.01,1,Ne+.003,2.2,g-.75,{shadow:!1}),gt(i,te.eSyn,1.3,.65,Ne+.012,1.75,d+1.35,Math.PI/2),T(i,w.white,.04,.03,1.2,Ne+hn+.3,Ve-.03,d+1.35,{shadow:!1});for(const H of[d+.9,d+1.35,d+1.8])et(i,w.white,.045,.045,.16,Ne+hn+.3,Ve-.12,H,{seg:12,shadow:!1,rz:.7});T(i,te.navy,.4,Ve,.3,Ne,Ve/2,g+.1);const _=g+4.2;Kc(i,Ne,-1,g+.25,_,4.2,{frost:!0});const m=_+.2,p=m+1.3;qn(i,Ne,m,p,1,te.navy);const v=new ve(Ds(new ut(p-m,tt),p-m,tt,.8),te.navySlats);v.position.set(Ne+.004,tt/2,(m+p)/2),v.rotation.y=Math.PI/2,i.add(v),gt(i,te.ringLogo,.5,.5,Ne+.01,1.75,(m+p)/2,Math.PI/2),Kc(i,Ne,-1,p+.2,ln-.15),T(i,te.wall,.1,Ve-tt,ln-20,Ne-.05,(tt+Ve)/2,(20+ln)/2,{shadow:!1}),T(i,te.mat,.6,.012,1.05,Ne+.42,.006,8.12,{shadow:!1});for(const H of[5,18.3])T(i,te.cam,.04,.04,.12,Ne+hn-.05,tt-.03,H,{shadow:!1}),et(i,te.cam,.035,.035,.14,Ne+hn-.1,tt-.08,H,{seg:10,shadow:!1,rz:Math.PI/2-.3});qn(i,Z,vn,Math.min(15,ah),-1),T(i,te.wall,.1,Ve-tt,ln-vn,Z+.05,(tt+Ve)/2,(vn+ln)/2,{shadow:!1});const y=new ve(new ut(.85,2.3),w.glassFrost);y.position.set(Z-.03,1.15,-1.2),y.rotation.y=-Math.PI/2,y.renderOrder=2,i.add(y);for(const H of[-1.65,-.75])T(i,w.black,.06,2.35,.05,Z-.03,1.17,H);for(const H of[.05,1.2,2.33])T(i,w.black,.06,.05,.9,Z-.03,H,-1.2);T(i,w.chrome,.03,.4,.025,Z-.09,1.05,-.88,{shadow:!1});const x=2.6,E=Yc(i,Z,x,1,2.25,te.laminate,1);T(i,te.slot,.012,.9,.12,E,1.45,x-.05,{shadow:!1}),T(i,w.chrome,.03,.42,.03,E-.05,1.05,x+.37,{shadow:!1});for(const H of[.86,1.24])T(i,w.chrome,.06,.02,.02,E-.025,H,x+.37,{shadow:!1});et(i,w.chrome,.02,.02,.02,E-.01,.95,x+.42,{seg:10,shadow:!1,rz:Math.PI/2});const S=new nt;S.position.set(Z-.33,2.62,x-.75),i.add(S),T(S,w.black,.6,.15,.03,0,0,0),gt(S,te.gents,.56,.12,0,0,.017,0),gt(S,te.gents,.56,.12,0,0,-.017,Math.PI),T(S,w.metalDark,.04,.05,.04,.3,.1,0);const R=new ve(new Zt(.1,20,14),te.orange);R.position.set(Z-.13,1.78,x+1.4),R.castShadow=!0,i.add(R),et(i,w.metalDark,.11,.09,.08,Z-.13,1.72,x+1.4,{seg:16,open:!0,shadow:!1}),T(i,w.metalDark,.08,.02,.02,Z-.05,1.72,x+1.4,{shadow:!1});const C=ah,b=C+1.7,M=2.45,D=Z-.04,V=C+1.05,W=new ve(new ut(b-C,tt-.05),te.tint);W.position.set(D,(tt-.05)/2,(C+b)/2),W.rotation.y=-Math.PI/2,W.renderOrder=2,i.add(W);const K=(H,Ee=0,Ue=tt)=>T(i,w.black,.07,Ue-Ee,.06,D,(Ee+Ue)/2,H),j=(H,Ee=C,Ue=b)=>T(i,w.black,.07,.06,Ue-Ee,D,H,(Ee+Ue)/2);for(const H of[C,b])K(H,0,tt);j(.03),j(M),j(tt-.03);for(const H of[C+.04,V-.03,V+.03,b-.04])K(H,0,M);K((C+V)/2,0,M);for(const H of[.62,1.22,1.84])j(H,C,V);j(1.22,V,b);for(const H of[V-.09,V+.09]){T(i,w.chrome,.03,.6,.025,Z-.12,1.15,H,{shadow:!1});for(const Ee of[.88,1.42])T(i,w.chrome,.08,.02,.02,Z-.09,Ee,H,{shadow:!1})}He(Z-.08,C,Z+.02,b);const Y=C-.6,ie=b+.6,F=Z+2.6;wt(i,te.tableWood,Z+.02,Y,F,ie,.002),wt(i,te.roomCeil,Z,Y,F,ie,Ve,{down:!0}),T(i,te.olive,.1,Ve,ie-Y,F,Ve/2,(Y+ie)/2,{shadow:!1});for(const H of[Y,ie])T(i,te.olive,F-Z-.12,Ve,.1,(Z+.12+F)/2,Ve/2,H,{shadow:!1});for(const[H,Ee]of[[V-.1,.9],[V+.15,1.15]]){T(i,w.black,.01,Ee,.01,Z+.9,Ve-Ee/2,H,{shadow:!1});const Ue=new ve(new Zt(.05,12,10),te.lamp);Ue.position.set(Z+.9,Ve-Ee-.04,H),i.add(Ue)}T(i,te.silver,.035,.2,.15,Z-.018,1.35,C-.4,{shadow:!1}),T(i,w.blackMatte,.01,.08,.09,Z-.037,1.39,C-.4,{shadow:!1}),T(i,w.bottleBlue,.006,.05,.05,Z-.043,1.4,C-.42,{shadow:!1});const le=new ve(new Zt(.07,16,10,0,Math.PI*2,0,Math.PI/2),te.cam);le.rotation.x=Math.PI,le.position.set(Z-.35,tt,C+.3),i.add(le);const he=C+2.85,Se=he+3.4;qn(i,Z,b,Se+.2,-1),T(i,w.white,.012,.09,.09,Z-.006,.38,he-.3,{shadow:!1});for(const H of[he-.1,Se+.1]){T(i,te.woodStrip,.06,tt,.2,Z-.03,tt/2,H);for(const Ee of[-.06,0,.06])T(i,w.blackMatte,.005,tt,.008,Z-.061,tt/2,H+Ee,{shadow:!1})}const Be=new ve(Ds(new ut(Se-he,tt),Se-he,tt,.7),te.diamond);Be.position.set(Z-.004,tt/2,(he+Se)/2),Be.rotation.y=-Math.PI/2,Be.receiveShadow=!0,i.add(Be);const Ye=(he+Se)/2+.2;T(i,w.white,.03,.58,1.05,Z-.02,1.85,Ye),gt(i,te.techno,1,.55,Z-.036,1.85,Ye,-Math.PI/2),T(i,w.black,.04,.03,.8,Z-hn-.3,Ve-.03,Ye,{shadow:!1});for(const H of[Ye-.3,Ye+.05,Ye+.35])et(i,w.black,.04,.035,.14,Z-hn-.3,Ve-.12,H,{seg:10,shadow:!1,rz:-.7});const ne=Se+.2,fe=Se+1.35,pe=fe+.6,ue=pe+1.1,De=ue,ze=Bn;T(i,w.blackMatte,.02,.17,.09,Z-.07,1.45,Se+.1,{shadow:!1}),T(i,w.bottleBlue,.005,.11,.06,Z-.081,1.47,Se+.1,{shadow:!1});const Pe=new ve(new ut(fe-ne-.04,2.38),w.glass);Pe.position.set(Z-.03,1.2,(ne+fe)/2),Pe.rotation.y=-Math.PI/2,Pe.renderOrder=2,i.add(Pe);for(const H of[ne+.05,fe-.05])T(i,w.chrome,.03,.05,.12,Z-.03,2.36,H,{shadow:!1});T(i,w.chrome,.03,1.1,.03,Z-.11,1.15,ne+.16,{shadow:!1});for(const H of[.62,1.68])T(i,w.chrome,.08,.02,.02,Z-.07,H,ne+.16,{shadow:!1});He(Z-.06,ne,Z+.02,fe),wt(i,te.greyTile,Z+.02,ne,Z+3,fe+.3,.002,{tile:1.2}),wt(i,te.roomCeil,Z,ne,Z+3,fe+.3,Ve,{down:!0}),T(i,te.room,.1,Ve,fe+.3-ne,Z+3,Ve/2,(ne+fe+.3)/2,{shadow:!1}),T(i,w.black,.05,2.6,.05,Z+1.6,1.3,ne+.5,{shadow:!1}),T(i,te.room,2.88,Ve,.1,Z+1.56,Ve/2,fe+.35,{shadow:!1}),qn(i,Z,fe,pe,-1),T(i,w.white,.012,.09,.09,Z-.006,1.25,(fe+pe)/2,{shadow:!1}),T(i,w.blackMatte,.015,.03,.035,Z-.012,1.25,(fe+pe)/2,{shadow:!1}),T(i,te.wall,.1,tt-2.4,fe-ne,Z+.05,(2.4+tt)/2,(ne+fe)/2),T(i,te.wall,.1,tt-2.3,ue-pe,Z+.05,(2.3+tt)/2,(pe+ue)/2),T(i,te.frame,.12,.06,ue-pe,Z+.02,2.3,(pe+ue)/2);for(const H of[pe+.02,ue-.02])T(i,te.frame,.12,2.3,.04,Z+.02,1.15,H);const je=new nt;je.position.set(Z+.06,0,pe+.04),je.rotation.y=1.25,i.add(je);const ae=ue-pe-.08;T(je,te.laminate,.04,2.25,ae,0,1.125,ae/2);for(const H of[-1,1])T(je,te.slot,.012,.9,.1,H*.021,1.45,ae*.6,{shadow:!1}),T(je,w.chrome,.03,.42,.025,H*.06,1.05,ae-.12,{shadow:!1});He(Z+.04,pe,Z+1.05,pe+.4);const xe=Z+4.2,N=pe-.1,re=ue+.15;wt(i,te.granite,Z+.02,N,xe,re,.003,{tile:1.2}),wt(i,te.roomCeil,Z,N,xe,re,4.5,{down:!0}),T(i,te.stairBlue,xe-Z-.12,4.5,.1,(Z+.12+xe)/2,2.25,N-.05,{shadow:!1}),T(i,te.stairBlue,xe-Z-.12,4.5,.1,(Z+.12+xe)/2,2.25,re+.05,{shadow:!1}),T(i,te.stairBlue,.1,4.5,re-N,xe+.05,2.25,(N+re)/2,{shadow:!1}),T(i,te.wall,.1,4.5-tt,ue-pe,Z+.05,(4.5+tt)/2,(pe+ue)/2,{shadow:!1});for(let H=0;H<9;H++)T(i,te.granite,.3,.17*(H+1),.95,Z+1.3+H*.3,.085*(H+1),ue-.4);He(Z+1.15,ue-.9,xe,re),He(xe-.05,N,xe+.1,re);const k=ue+1.5,B=Z-.1;T(i,te.granite,.2,Ve,ze-De,Z,Ve/2,(De+ze)/2),T(i,te.granite,.1,Ve,.1,Z+.05,Ve/2,ze+.05),He(B,De,Z+.1,ze),$c(i,B,k,5,-1);const z=new nt;z.position.set(Z-.9,2.95,De-.1),i.add(z),T(z,w.black,.03,.2,.62,0,0,0,{shadow:!1}),gt(z,te.fourth,.6,.18,.017,0,0,Math.PI/2),gt(z,te.fourth,.6,.18,-.017,0,0,-Math.PI/2);const de=Xt+.55,me=de+.35,L=me+2.6;qn(i,Z,de,me,-1),T(i,te.granite,.2,Ve,L-me,Z,Ve/2,(me+L)/2),He(Z-.1,me,Z+.1,L),$c(i,Z-.1,me+1.45,6,-1);const A=L,X=A+2.8,oe=A+.9;c2(i,A,X,oe);const ge=new nt;ge.position.set(Z-.33,2.62,oe+.75),i.add(ge),T(ge,w.black,.6,.15,.03,0,0,0),gt(ge,te.ladies,.56,.12,0,0,.017,0),gt(ge,te.ladies,.56,.12,0,0,-.017,Math.PI);const ce=new ve(new Zt(.1,20,14),te.orange);ce.position.set(Z-.13,1.78,A+2.2),ce.castShadow=!0,i.add(ce),et(i,w.metalDark,.11,.09,.08,Z-.13,1.72,A+2.2,{seg:16,open:!0,shadow:!1}),T(i,w.white,.012,.09,.09,Z-.006,.38,X-.25,{shadow:!1});const Ie=X,Te=Ie+2.6;qn(i,Z,Ie,Te,-1,te.navy);const Re=new ve(Ds(new ut(Te-Ie,tt),Te-Ie,tt,.8),te.navySlats);Re.position.set(Z-.004,tt/2,(Ie+Te)/2),Re.rotation.y=-Math.PI/2,i.add(Re),gt(i,te.tenCod,1.5,.47,Z-.012,1.75,(Ie+Te)/2,-Math.PI/2),Kc(i,Z,1,Te+.2,ln-.15),h2(i),td(i,vn-.12,1,Ne,Z,Ne+.9,Z-.25),td(i,ln+.12,-1),gt(i,te.fireExit,.5,.11,(Ne+Z)/2,2.95,ln-.01,Math.PI);const rt=new nt;rt.position.set((Ne+Z)/2,2.72,vn+1.6),i.add(rt),T(rt,w.white,.58,.14,.03,0,0,0,{shadow:!1}),gt(rt,te.fireExit,.56,.12,0,0,.016,0),gt(rt,te.fireExit,.56,.12,0,0,-.016,Math.PI);for(const H of[-1,1])T(rt,w.chrome,.006,Ve-2.79,.006,H*.22,(Ve-2.79)/2+.07,0,{shadow:!1})}const sd={x:12.75,z:17.72,yaw:1.05};function f2(i){wt(i,w.floorBeige,0,0,Ut,It,0),wt(i,w.floorBeige,Ut,fn,Pt,It,0),wt(i,w.floorBeige,qt-as,It,Pt,Tt,0),wt(i,w.floorDark,0,It,qt-as,Tt,0),wt(i,w.floorDark,0,Tt,jt,pt,0),LM(i),IM(i),u2(i),NM(i),HM(i),jM(i),t2(i),i2(i)}function Hh(i,e){return i>Pt?"Building Hall":i<0?"Terrace":e>Lt?"Game Room":e>pt?i<Fn?"Meeting Room":"Workspace":e<ls&&i<Ut?"Corner Cabin":e<Gt&&e>fn&&i>Ut&&i<Wi?i<7?"Cabin 2":"Cabin 1":i>=qt&&e<Tt?"Reception":e<It?i<Ut?"Window Lounge":"Cabin Corridor":"Workspace"}const hr=new En(0,0,0,"YXZ"),ur=new I,d2={type:"change"},p2={type:"lock"},m2={type:"unlock"},rd=Math.PI/2;class g2 extends Ty{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=x2.bind(this),this._onPointerlockChange=_2.bind(this),this._onPointerlockError=v2.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;ur.setFromMatrixColumn(t.matrix,0),ur.crossVectors(t.up,ur),t.position.addScaledVector(ur,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;ur.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(ur,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function x2(i){if(this.enabled===!1||this.isLocked===!1)return;const e=i.movementX||i.mozMovementX||i.webkitMovementX||0,t=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;hr.setFromQuaternion(n.quaternion),hr.y-=e*.002*this.pointerSpeed,hr.x-=t*.002*this.pointerSpeed,hr.x=Math.max(rd-this.maxPolarAngle,Math.min(rd-this.minPolarAngle,hr.x)),n.quaternion.setFromEuler(hr),this.dispatchEvent(d2)}function _2(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(p2),this.isLocked=!0):(this.dispatchEvent(m2),this.isLocked=!1)}function v2(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const od=1.65,y2=.25,ad=3,M2=6,b2=18,S2=5.2;function w2(i,e,{spawn:t,yaw:n=0}){const s=new g2(i,e),r={},o={x:0,y:0,run:!1},a=new I(t.x,0,t.z),c=new I;let l=0,h=0,u=0,f=0;i.position.set(a.x,od,a.z),i.rotation.set(0,n,0,"YXZ");const d={dragMode:!1,paused:!1};let g=!1,_=0,m=0;const p=new En(0,0,0,"YXZ");e.addEventListener("mousedown",C=>{d.dragMode&&(g=!0,_=C.clientX,m=C.clientY)}),addEventListener("mouseup",()=>{g=!1}),addEventListener("mousemove",C=>{!d.dragMode||!g||d.paused||(p.setFromQuaternion(i.quaternion),p.y-=(C.clientX-_)*.004,p.x=Math.max(-1.45,Math.min(1.45,p.x-(C.clientY-m)*.004)),i.quaternion.setFromEuler(p),_=C.clientX,m=C.clientY)});const v=()=>!d.paused&&(s.isLocked||d.dragMode);addEventListener("keydown",C=>{r[C.code]=!0,C.code==="Space"&&y()});function y(){v()&&h<=.001&&(l=S2)}addEventListener("keyup",C=>{r[C.code]=!1}),addEventListener("blur",()=>{for(const C in r)r[C]=!1});const x=new I,E=new I,S=new I;function R(C){C=Math.min(C,.05),S.set(0,0,0),v()&&(i.getWorldDirection(x),x.y=0,x.normalize(),E.crossVectors(x,i.up).normalize(),(r.KeyW||r.ArrowUp)&&S.add(x),(r.KeyS||r.ArrowDown)&&S.sub(x),(r.KeyD||r.ArrowRight)&&S.add(E),(r.KeyA||r.ArrowLeft)&&S.sub(E),(o.x||o.y)&&S.addScaledVector(x,o.y).addScaledVector(E,o.x));const b=r.ShiftLeft||r.ShiftRight||o.run;if(S.lengthSq()>0){const V=Math.min(1,S.length());S.normalize().multiplyScalar((b?M2:ad)*(o.x||o.y?Math.max(.5,V):1))}const M=1-Math.exp(-(h>0?3:12)*C);c.x+=(S.x-c.x)*M,c.z+=(S.z-c.z)*M,RM(a,c.x*C,c.z*C,y2),l-=b2*C,h=Math.max(0,h+l*C),h===0&&(l=Math.max(l,0));const D=Math.hypot(c.x,c.z);h===0&&D>.3?(u+=C*D*2.6,f=Math.sin(u)*.035*Math.min(1,D/ad)):f*=.85,i.position.set(a.x,od+h+f,a.z)}return{controls:s,update:R,pos:a,state:d,touch:o,jump:y}}function E2(i){var s;i.updateMatrixWorld(!0);const e=new Map,t=[];i.traverse(r=>{r.isMesh&&t.push(r)});const n=r=>{const o=[];for(let a=r;a&&a!==i;a=a.parent)a.userData.label&&o.at(-1)!==a.userData.label&&o.push(a.userData.label);return o.join(" · ")};for(const r of t){const o=`${r.material.uuid}|${r.castShadow}|${r.renderOrder}`;let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(const h of Object.keys(a.attributes))["position","normal","uv"].includes(h)||a.deleteAttribute(h);a.attributes.uv||a.setAttribute("uv",new ft(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(r.matrixWorld),e.has(o)||e.set(o,{material:r.material,cast:r.castShadow,order:r.renderOrder,geos:[],tris:0,labels:[]});const c=e.get(o),l=n(r);l&&((s=c.labels.at(-1))==null?void 0:s[1])!==l?c.labels.push([c.tris,l]):!l&&c.labels.length&&c.labels.at(-1)[1]!==""&&c.labels.push([c.tris,""]),c.geos.push(a),c.tris+=a.attributes.position.count/3}for(;i.children.length;)i.remove(i.children[0]);for(const r of e.values()){const o=Ka(r.geos,!1);o.computeBoundingSphere();const a=new ve(o,r.material);a.castShadow=r.cast,a.receiveShadow=!0,a.renderOrder=r.order,a.userData.labels=r.labels,i.add(a)}return e.size}function T2(i){const e=i.object.userData.labels;if(e){let t=0,n=e.length-1,s="";for(;t<=n;){const r=t+n>>1;e[r][0]<=i.faceIndex?(s=e[r][1],t=r+1):n=r-1}return s}for(let t=i.object;t;t=t.parent)if(t.userData.label)return t.userData.label;return""}const Zc="/api/suggestions",Jc="pixbit-suggestions-v2",kp={W:"Window table",L:"Long table",E:"East-wall desk",LOCK:"Lockers"},A2={W:[1.4,1.2],L:[2.8,1.2],E:[1.3,.8],LOCK:[.55,1.25]},R2=["Corner cabin","Cabin 1","Cabin 2","Lounge","Corridor","Reception","Open workspace","Back wall","East wall","Windows",...Oa.map(i=>i.id==="LOCK"?"Lockers":`${kp[i.id[0]]} ${i.id}`)],Wn="#ecc828",cd="#3fbf6f",C2=35e6;function P2({scene:i,camera:e,player:t,world:n,zoneAt:s,renderer:r}){let o=[],a=!1,c=null,l=[],h=[],u=!1,f=!1,d=null;async function g(){try{const U=await fetch(Zc);if(!U.ok)throw new Error(U.status);o=await U.json()}catch{a=!0;try{o=JSON.parse(localStorage.getItem(Jc))||[]}catch{o=[]}}B()}async function _(U,Q,we){if(a){U.n=U.n??o.reduce((be,Me)=>Math.max(be,Me.n||0),0)+1,U.created=U.created??Date.now(),U.files=[...(U.files||[]).filter(be=>!we.includes(be.name)),...Q.map(be=>({name:be.name,type:be.type,path:be.data}))];const se=o.findIndex(be=>be.id===U.id);se>=0?o[se]=U:o.push(U);try{localStorage.setItem(Jc,JSON.stringify(o))}catch{throw new Error("browser storage is full (start the dev server to save files to the project)")}return U}const O=await fetch(Zc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...U,newFiles:Q,removeFiles:we})}),_e=await O.json().catch(()=>({}));if(!O.ok)throw new Error(_e.error||`server said ${O.status}`);const $=o.findIndex(se=>se.id===_e.id);return $>=0?o[$]=_e:o.push(_e),_e}async function m(U){if(a||await fetch(`${Zc}/${encodeURIComponent(U)}`,{method:"DELETE"}),o=o.filter(Q=>Q.id!==U),a)try{localStorage.setItem(Jc,JSON.stringify(o))}catch{}}function p(U,Q){let we=null,O=.9;const _e=s(U,Q);for(const $ of Oa){if(s($.x,$.z)!==_e)continue;const se=$.id==="LOCK"?"LOCK":$.id[0];let[be,Me]=A2[se]||[1,1];($.rot||0)%180&&([be,Me]=[Me,be]);const Qe=Math.hypot(Math.max(0,Math.abs(U-$.x)-be/2),Math.max(0,Math.abs(Q-$.z)-Me/2));Qe<O&&(O=Qe,we=$.id==="LOCK"?"Lockers":`${kp[se]} ${$.id}`)}return we}const v=U=>Math.round(U*100)/100,y=U=>/^image\/(jpeg|png|gif|webp|avif|svg\+xml|bmp)$/.test(U.type),x=U=>U.src||U.path,E=new nt;E.name="suggestion-marks",i.add(E);const S=new Zt(.07,16,12),R=new Dn(.008,.008,1,6),C=new Ln({color:"#222"}),b=new I(0,1,0),M={},D=(U,Q=1)=>M[U+Q]||(M[U+Q]=new Ln({color:U,transparent:Q<1,opacity:Q,depthWrite:Q===1,side:Ot}));function V(U,Q){const we=document.createElement("canvas");we.width=we.height=64;const O=we.getContext("2d");O.fillStyle="#111",O.beginPath(),O.arc(32,32,28,0,Math.PI*2),O.fill(),O.strokeStyle=Q,O.lineWidth=5,O.stroke(),O.fillStyle="#fff",O.font="bold 28px system-ui, sans-serif",O.textAlign="center",O.textBaseline="middle",O.fillText(String(U),32,34);const _e=new On(we);_e.colorSpace=yt;const $=new Rr(new ks({map:_e,depthTest:!1,transparent:!0}));return $.scale.set(.22,.22,1),$.renderOrder=10,$}function W({x0:U,z0:Q,x1:we,z1:O},_e,$){const se=Math.abs(we-U),be=Math.abs(O-Q),Me=new ve(new ut(se,be),D(_e,.18));Me.rotation.x=-Math.PI/2,Me.position.set((U+we)/2,.02,(Q+O)/2),Me.renderOrder=3;const Qe=[[U,Q],[we,Q],[we,O],[U,O]].map(([on,_t])=>new I(on,.025,_t)),zt=new cp(new Ht().setFromPoints(Qe),new Eh({color:_e}));$.add(Me,zt)}function K(U,Q,we,O,_e,$){const se=new ve(R,C);se.scale.y=O,se.quaternion.setFromUnitVectors(b,we),se.position.copy(Q).addScaledVector(we,O/2);const be=new ve(S,D(_e));be.position.copy(Q).addScaledVector(we,O);const Me=V($,_e);Me.position.copy(be.position).add(new I(0,.18,0)),U.add(se,be,Me)}function j(){for(const U of[...E.children])E.remove(U),U.traverse(Q=>{var we,O,_e;(O=(we=Q.material)==null?void 0:we.map)==null||O.dispose(),(Q.isLine||((_e=Q.geometry)==null?void 0:_e.type)==="PlaneGeometry")&&Q.geometry.dispose()});for(const U of o){if(U.status==="done")continue;const Q=new nt;Q.userData.sid=U.id;const we=Wn;U.area?(W(U.area,we,Q),K(Q,new I((U.area.x0+U.area.x1)/2,0,(U.area.z0+U.area.z1)/2),b,1.1,we,U.n)):K(Q,new I(...U.point),new I(...U.normal||[0,1,0]).normalize(),.28,we,U.n),E.add(Q)}}const Y=new nt;i.add(Y);function ie(){for(const U of[...Y.children])Y.remove(U)}const F=document.createElement("style");F.textContent=`
  .sg-modal { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,.5); z-index:20; padding:16px; }
  .sg-hidden { display:none !important; }
  .sg-card { width:min(520px,100%); max-height:100%; overflow:auto; background:#1b1b1b; color:#eee; border:1px solid ${Wn}; border-radius:12px; padding:18px 20px; font-size:14px; box-sizing:border-box; }
  .sg-card h2 { margin:0 0 6px; font-size:18px; color:#fff; }
  .sg-card label.f { display:block; font-size:12px; color:#aaa; margin:10px 0 4px; }
  .sg-card input[type=text], .sg-card textarea { width:100%; box-sizing:border-box; background:#111; color:#fff; border:1px solid #444; border-radius:8px; padding:8px 10px; font:inherit; }
  .sg-card textarea { min-height:110px; resize:vertical; }
  .sg-card input:focus, .sg-card textarea:focus { outline:none; border-color:${Wn}; }
  .sg-meta { color:#999; font-size:12px; margin-top:4px; }
  .sg-drop { margin-top:4px; border:1.5px dashed #555; border-radius:8px; padding:12px; text-align:center; color:#aaa; cursor:pointer; }
  .sg-drop.over, .sg-drop:focus { border-color:${Wn}; color:${Wn}; outline:none; }
  .sg-files { display:grid; grid-template-columns:repeat(auto-fill,minmax(110px,1fr)); gap:8px; margin-top:8px; }
  .sg-file { position:relative; background:#111; border:1px solid #333; border-radius:8px; overflow:hidden; font-size:12px; }
  .sg-file img { width:100%; height:80px; object-fit:cover; display:block; }
  .sg-file .doc { height:80px; display:flex; align-items:center; justify-content:center; color:${Wn}; font-weight:700; font-size:16px; }
  .sg-file span { display:block; padding:4px 6px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .sg-file button { position:absolute; top:4px; right:4px; padding:1px 7px !important; }
  .sg-check { display:flex; align-items:center; gap:8px; margin-top:12px; }
  .sg-reply { margin-top:10px; background:#11261a; border:1px solid #2c5a3c; border-radius:8px; padding:8px 10px; white-space:pre-wrap; font-size:13px; }
  .sg-row { display:flex; gap:8px; margin-top:14px; align-items:center; flex-wrap:wrap; }
  .sg-row .sp { flex:1; }
  .sg-card button, .sg-list button { font:inherit; font-size:13px; padding:7px 12px; border-radius:7px; border:1px solid #555; background:#2a2a2a; color:#eee; cursor:pointer; }
  .sg-card button:hover, .sg-list button:hover { border-color:#999; }
  .sg-card button.pri { background:${Wn}; color:#111; border-color:${Wn}; font-weight:700; }
  .sg-card button.del { color:#ff8a7a; }
  .sg-err { color:#ff8a7a; font-size:13px; margin-top:8px; min-height:1em; }
  .sg-list { position:fixed; top:0; right:0; bottom:0; width:min(380px,100%); background:#161616; color:#eee; border-left:1px solid #333; z-index:15; display:flex; flex-direction:column; font-size:14px; }
  .sg-list header { display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid #333; gap:8px; }
  .sg-list header b { flex:1; font-size:16px; }
  .sg-items { overflow:auto; padding:8px 12px 16px; }
  .sg-item { display:flex; gap:10px; padding:12px 4px; border-bottom:1px solid #2a2a2a; }
  .sg-num { flex:none; width:26px; height:26px; border-radius:50%; background:#111; border:2px solid ${Wn}; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; }
  .sg-num.done { border-color:${cd}; }
  .sg-body { flex:1; min-width:0; }
  .sg-body p { margin:0 0 6px; white-space:pre-wrap; word-break:break-word; }
  .sg-body small { color:#999; display:block; margin-bottom:6px; }
  .sg-badge { display:inline-block; font-size:11px; padding:1px 7px; border-radius:10px; background:#3a3315; color:${Wn}; margin-right:6px; }
  .sg-badge.done { background:#16301f; color:${cd}; }
  .sg-thumbs { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:6px; }
  .sg-thumbs img { width:72px; height:54px; object-fit:cover; border-radius:5px; }
  .sg-thumbs a { font-size:12px; color:${Wn}; }
  .sg-reply-l { font-size:12px; color:#9fd8b0; background:#11261a; border-radius:6px; padding:6px 8px; margin-bottom:6px; white-space:pre-wrap; }
  .sg-empty { color:#999; padding:16px 4px; line-height:1.6; }
  .sg-toast { position:fixed; left:50%; bottom:40px; transform:translateX(-50%); background:rgba(0,0,0,.85); color:#fff; padding:8px 16px; border-radius:6px; z-index:30; font-size:14px; pointer-events:none; opacity:0; transition:opacity .3s; max-width:90vw; text-align:center; }
  .sg-toast.show { opacity:1; }`,document.head.appendChild(F);const le=document.createElement("div");le.className="sg-modal sg-hidden",le.innerHTML=`<div class="sg-card" role="dialog" aria-modal="true" aria-labelledby="sg-title">
    <h2 id="sg-title">New suggestion</h2>
    <label class="f" for="sg-section">Section</label>
    <input type="text" id="sg-section" list="sg-sections" placeholder="e.g. Long table L2, Reception, Cabin 1">
    <datalist id="sg-sections">${R2.map(U=>`<option value="${U}">`).join("")}</datalist>
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
  </div>`,document.body.appendChild(le);const he=U=>le.querySelector(U),Se=he("#sg-text"),Be=he("#sg-section"),Ye=he(".sg-drop"),ne=he("input[type=file]"),fe=he(".sg-files"),pe=he(".sg-err"),ue=he(".sg-meta"),De=he("#sg-done"),ze=he(".sg-reply"),Pe=document.createElement("div");Pe.className="sg-list sg-hidden",Pe.innerHTML='<header><b>Suggestions</b><button type="button" class="close">Close (L)</button></header><div class="sg-items"></div>',document.body.appendChild(Pe);const je=Pe.querySelector(".sg-items"),ae=document.createElement("div");ae.className="sg-toast",document.body.appendChild(ae);let xe;function N(U,Q=2600){ae.textContent=U,ae.classList.add("show"),clearTimeout(xe),xe=setTimeout(()=>ae.classList.remove("show"),Q)}const re=U=>U.area?`Area x ${v(U.area.x0)}–${v(U.area.x1)} m, z ${v(U.area.z0)}–${v(U.area.z1)} m`:`Point x ${U.point[0]}, z ${U.point[2]}`;function k(){if(je.innerHTML="",!o.length){je.innerHTML='<div class="sg-empty">No suggestions yet.<br>Aim the dot at something and press <b>C</b>, or press <b>X</b> on two floor corners to mark an area.</div>';return}for(const U of[...o].sort((Q,we)=>Q.n-we.n)){const Q=document.createElement("div");Q.className="sg-item",Q.innerHTML=`<div class="sg-num ${U.status==="done"?"done":""}">${U.n}</div><div class="sg-body"><small></small><p></p><div class="sg-thumbs"></div></div>`;const we=Q.querySelector("small");we.innerHTML=`<span class="sg-badge ${U.status==="done"?"done":""}">${U.status==="done"?"done":"open"}</span>`,we.append(U.section||U.zone||""),Q.querySelector("p").textContent=U.text,U.reply&&Q.querySelector("p").after(Object.assign(document.createElement("div"),{className:"sg-reply-l",textContent:`Claude: ${U.reply}`}));const O=Q.querySelector(".sg-thumbs");for(const Qe of U.files||[])y(Qe)?O.append(Object.assign(document.createElement("img"),{src:x(Qe),alt:Qe.name,title:Qe.name})):O.append(Object.assign(document.createElement("a"),{href:x(Qe),textContent:Qe.name,target:"_blank",download:Qe.name}));const _e=Q.querySelector(".sg-body"),$=document.createElement("div");$.className="sg-row",$.style.marginTop="2px";const se=Object.assign(document.createElement("button"),{type:"button",textContent:"Go there"});se.onclick=()=>Te(U);const be=Object.assign(document.createElement("button"),{type:"button",textContent:"Open"});be.onclick=()=>{Pe.classList.add("sg-hidden"),X(U)};const Me=Object.assign(document.createElement("button"),{type:"button",textContent:"Delete"});Me.style.color="#ff8a7a",ge(Me,()=>ce(U)),$.append(se,be,Me),_e.appendChild($),je.appendChild(Q)}}function B(){j(),k()}function z(){fe.innerHTML="",l.forEach((U,Q)=>{const we=document.createElement("div");we.className="sg-file",y(U)?we.append(Object.assign(document.createElement("img"),{src:x(U),alt:U.name})):we.append(Object.assign(document.createElement("div"),{className:"doc",textContent:(U.name.split(".").pop()||"file").slice(0,5).toUpperCase()})),we.append(Object.assign(document.createElement("span"),{textContent:U.name,title:U.name}));const O=Object.assign(document.createElement("button"),{type:"button",textContent:"×"});O.setAttribute("aria-label",`Remove ${U.name}`),O.onclick=()=>{U.data||h.push(U.name),l.splice(Q,1),z()},we.append(O),fe.append(we)})}const de=U=>new Promise((Q,we)=>{const O=new FileReader;O.onload=()=>Q(O.result),O.onerror=we,O.readAsDataURL(U)});async function me(U){pe.textContent="";for(const Q of U){let we=Q.name||`pasted-${Date.now()}.png`,O=Q.type||"application/octet-stream",_e;if(/^image\/(jpeg|png|webp)$/.test(O)&&Q.size>15e5)try{const se=await createImageBitmap(Q),be=Math.min(1,2e3/Math.max(se.width,se.height)),Me=document.createElement("canvas");Me.width=Math.round(se.width*be),Me.height=Math.round(se.height*be),Me.getContext("2d").drawImage(se,0,0,Me.width,Me.height),_e=Me.toDataURL("image/jpeg",.85),O="image/jpeg",we=we.replace(/\.\w+$/,"")+".jpg"}catch{}if(_e=_e||await de(Q),l.reduce((se,be)=>{var Me;return se+(((Me=be.data)==null?void 0:Me.length)||0)},0)+_e.length>C2){pe.textContent=`${we} is too big to add (keep new files under ~25 MB per save).`;continue}l.push({name:we,type:O,data:_e,src:_e})}z()}Ye.onclick=()=>ne.click(),Ye.onkeydown=U=>{(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),ne.click())},ne.onchange=()=>{me([...ne.files]),ne.value=""},Ye.ondragover=U=>{U.preventDefault(),Ye.classList.add("over")},Ye.ondragleave=()=>Ye.classList.remove("over"),Ye.ondrop=U=>{U.preventDefault(),Ye.classList.remove("over"),me([...U.dataTransfer.files])},le.addEventListener("paste",U=>{const Q=[...U.clipboardData.files];Q.length&&(U.preventDefault(),me(Q))}),Se.oninput=()=>{pe.textContent=""};const L=()=>!le.classList.contains("sg-hidden");let A=()=>{};function X(U){c=U,l=(U.files||[]).map(Q=>({...Q})),h=[],he("#sg-title").textContent=U.id?`Suggestion ${U.n}`:U.area?"New suggestion for this area":"New suggestion",Be.value=U.section||[U.near,U.zone].filter(Boolean).join(" · "),ue.textContent=re(U)+(U.folder?` · saved in suggestions/${U.folder}/`:""),Se.value=U.text||"",De.checked=U.status==="done",he(".sg-check").classList.toggle("sg-hidden",!U.id),ze.textContent=U.reply?`Claude: ${U.reply}`:"",ze.classList.toggle("sg-hidden",!U.reply),he(".del").classList.toggle("sg-hidden",!U.id),pe.textContent="",z(),u=!!document.pointerLockElement,le.classList.remove("sg-hidden"),t.state.paused=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>Se.focus(),30)}function oe(){if(le.classList.add("sg-hidden"),c=null,l=[],h=[],ie(),t.state.paused=!1,u)try{const U=r.domElement.requestPointerLock();U!=null&&U.catch&&U.catch(()=>A())}catch{A()}}he(".cancel").onclick=oe,he(".pri").onclick=async()=>{const U=Se.value.trim();if(!U){pe.textContent="Write what needs to change first.",Se.focus();return}const Q={...c,text:U,section:Be.value.trim(),status:De.checked?"done":"open",updated:Date.now()};delete Q.near,Q.id||(Q.id=`s${Date.now().toString(36)}`);const we=l.filter(O=>O.data).map(({name:O,type:_e,data:$})=>({name:O,type:_e,data:$}));he(".pri").disabled=!0,he(".pri").textContent="Saving…";try{const O=await _(Q,we,h);B(),N(a?`Suggestion ${O.n} saved in this browser`:`Suggestion ${O.n} saved to suggestions/${O.folder}/`),oe()}catch(O){pe.textContent=`Could not save: ${O.message}`}finally{he(".pri").disabled=!1,he(".pri").textContent="Save"}};function ge(U,Q){let we=0;U.onclick=async()=>{if(!we){U.textContent="Click again to delete",U.style.borderColor="#ff8a7a",we=setTimeout(()=>{we=0,U.textContent="Delete",U.style.borderColor=""},4e3);return}clearTimeout(we),we=0,U.disabled=!0;try{await Q()}finally{U.disabled=!1,U.textContent="Delete",U.style.borderColor=""}}}async function ce(U){await m(U.id),B(),N(`Suggestion ${U.n} deleted`)}ge(he(".del"),async()=>{if(c!=null&&c.id){const U=c;oe(),await ce(U)}}),Pe.querySelector(".close").onclick=()=>Ie(!1);function Ie(U=Pe.classList.contains("sg-hidden")){Pe.classList.toggle("sg-hidden",!U),U&&(k(),document.pointerLockElement&&document.exitPointerLock())}function Te(U){U.view&&(t.pos.set(U.view.x,0,U.view.z),e.position.set(U.view.x,e.position.y,U.view.z),e.quaternion.setFromEuler(new En(U.view.pitch,U.view.yaw,0,"YXZ"))),Ie(!1),N(`${U.n}: ${U.text.slice(0,70)}${U.text.length>70?"…":""}`)}const Re=new Ey;Re.far=40;const rt=new ye(0,0);function H(){Re.setFromCamera(rt,e);const U=Re.intersectObjects([E,n],!0).find(O=>O.object.visible&&!O.object.isLine);if(!U)return null;let Q=U.object;for(;Q&&!Q.userData.sid&&Q!==i;)Q=Q.parent;if(Q!=null&&Q.userData.sid)return{mark:o.find(O=>O.id===Q.userData.sid),point:U.point};const we=U.face?U.face.normal.clone().transformDirection(U.object.matrixWorld):b.clone();return we.dot(Re.ray.direction)>0&&we.negate(),{point:U.point,normal:we,target:Ee(T2(U),U.point,we)}}function Ee(U,Q,we){return U==="Wall"||U==="Glass wall"?Q.x<.35?`Window ${U.toLowerCase()}`:Q.x>9.8&&Q.z>9.5?"East wall":Q.z>18.4?"Back wall":`${U} (${s(Q.x,Q.z)})`:U||(we.y>.7&&Q.y<.1?"Floor":we.y<-.7?"Ceiling":"")}function Ue(){const U=new En().setFromQuaternion(e.quaternion,"YXZ");return{x:v(t.pos.x),z:v(t.pos.z),yaw:v(U.y),pitch:v(U.x)}}function Ze(){const U=H();if(!U){N("Aim the dot at something first");return}if(U.mark){X(U.mark);return}const Q=U.point;X({point:[v(Q.x),v(Q.y),v(Q.z)],normal:[v(U.normal.x),v(U.normal.y),v(U.normal.z)],zone:s(Q.x,Q.z),near:U.target||p(Q.x,Q.z),target:U.target,view:Ue()})}function Ce(){const U=H();if(!U){N("Aim the dot at the floor first");return}const{x:Q,z:we}=U.point;if(!d){d={x:Q,z:we},ie(),K(Y,new I(Q,0,we),b,.5,Wn,"1"),N("Corner 1 set. Aim at the opposite corner and press X (Esc cancels).",4e3);return}const O={x0:v(Math.min(d.x,Q)),z0:v(Math.min(d.z,we)),x1:v(Math.max(d.x,Q)),z1:v(Math.max(d.z,we))};if(d=null,ie(),O.x1-O.x0<.2||O.z1-O.z0<.2){N("That area is too small: pick two corners further apart");return}W(O,Wn,Y);const _e=(O.x0+O.x1)/2,$=(O.z0+O.z1)/2;X({area:O,point:[v(_e),0,v($)],normal:[0,1,0],zone:s(_e,$),near:p(_e,$),view:Ue()})}return addEventListener("keydown",U=>{if(L()){if(!f)return;U.code==="Escape"&&(U.preventDefault(),oe()),U.code==="Enter"&&(U.metaKey||U.ctrlKey)&&he(".pri").click();return}f&&(/^(INPUT|TEXTAREA|SELECT)$/.test(U.target.tagName)||(U.code==="Escape"&&d&&(d=null,ie(),N("Area cancelled")),U.code==="KeyC"&&Ze(),U.code==="KeyX"&&Ce(),U.code==="KeyL"&&Ie()))}),g(),{isOpen:()=>L()||!Pe.classList.contains("sg-hidden"),setEnabled(U){f=U,E.visible=U,U||(L()&&oe(),Ie(!1),d=null,ie())},onResumeFailed(U){A=U}}}const ld=1.8,hd=2.2;function ud(i,e,t,n=2.4){const s=new nt;i.add(s);const r=new ve(new en(.012,n-.04,e-.02),w.glass);r.position.set(0,n/2,t*e/2),r.renderOrder=2,s.add(r),T(s,w.chrome,.02,.1,e-.04,0,.05,t*e/2),T(s,w.chrome,.02,.06,.12,0,n-.06,t*.08),T(s,w.chrome,.02,.06,.12,0,.12,t*.08);const o=t*(e-.12);for(const a of[-1,1]){T(s,w.chrome,.028,1,.028,a*.07,1.05,o);for(const c of[.62,1.48])T(s,w.chrome,.12,.02,.02,a*.035,c,o)}return t>0&&T(s,w.blackMatte,.03,.14,.2,0,1.05,t*(e-.02)),s}let Qc=null;function L2(){if(Qc)return Qc;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d");return e.fillStyle="rgba(15,18,24,.8)",e.strokeStyle="#fff",e.lineWidth=8,e.beginPath(),e.arc(64,64,56,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.font="bold 72px system-ui, sans-serif",e.fillText("F",64,68),Qc=new On(i)}function fd(i,e,t,n){const s=new Rr(new ks({map:L2(),depthTest:!1,transparent:!0}));return s.scale.set(.11,.11,1),s.position.set(e,t,n),s.renderOrder=20,s.visible=!1,i.add(s),s}function I2({scene:i,player:e,camera:t}){const n=[],s=(p,v,y)=>{const x=(v-p)/2,E=new nt;i.add(E);const S=new nt;S.position.set(0,0,p),E.add(S);const R=new nt;R.position.set(0,0,v),E.add(R);const C=fd(S,.1,1.25,x-.12);ud(S,x,1),ud(R,x,-1);const b={minX:-.08,maxX:.08,minZ:p,maxZ:v};os.push(b),n.push({name:y,x:0,z:(p+v)/2,t:0,target:0,block:b,marker:C,apply(M){const D=M*Math.PI/2*.95;S.rotation.y=D,R.rotation.y=-D}})};s(4.9,6.5,"balcony door"),s(oh[0],oh[1],"meeting room door");for(const p of Za){i.add(p.leaf),os.push(p.block);const v=fd(p.leaf,p.handle[0],p.handle[1],p.handle[2]);n.push({name:p.name,x:p.x,z:p.z,t:0,target:0,block:p.block,marker:v,apply(y){p.leaf.rotation.y=p.closed+(p.open-p.closed)*y}})}const r={visible:!1,material:{opacity:1}},o=Ua.map(p=>(i.add(p.leaf),{name:"locker door",x:p.center.x,z:p.center.z,center:p.center,t:0,target:0,block:null,marker:r,apply(v){p.leaf.rotation.y=p.closed+(p.open-p.closed)*v}}));n.push(...o);const a=new I,c=new I,l=()=>{t.getWorldDirection(c);let p=null,v=.96;for(const y of o){if(a.copy(y.center).sub(t.position),a.length()>1.8)continue;const E=a.normalize().dot(c);E>v&&(v=E,p=y)}return p},h=()=>{var x;const p=l();if(p)return p;let v=null,y=ld;for(const E of n){if(E.center||(x=E.locked)!=null&&x.call(E))continue;const S=Math.hypot(e.pos.x-E.x,e.pos.z-E.z);S<y&&(y=S,v=E)}return v},u=p=>{if(p.target=p.target?0:1,p.target&&p.block){const v=os.indexOf(p.block);v>=0&&os.splice(v,1)}};addEventListener("keydown",p=>{if(p.code!=="KeyF"||e.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(p.target.tagName))return;const v=h();v&&u(v)});let f=0,d=0;addEventListener("mousedown",p=>{f=p.clientX,d=p.clientY}),addEventListener("click",p=>{if(p.button!==0||e.state.paused||!e.controls.isLocked&&!e.state.dragMode||Math.hypot(p.clientX-f,p.clientY-d)>5&&!e.controls.isLocked)return;const v=l();v&&u(v)});function g(p){var y,x;const v=h();for(const E of n){const S=Math.hypot(e.pos.x-E.x,e.pos.z-E.z);E.marker.visible=S<4.5&&(!((y=E.locked)!=null&&y.call(E))||E.askToOpen),E.marker.material.opacity=E===v||E.askToOpen&&((x=E.locked)!=null&&x.call(E))&&S<ld?1:.55}for(const E of n)E.t!==E.target&&(E.t=E.target>E.t?Math.min(1,E.t+p*hd):Math.max(0,E.t-p*hd),E.apply(E.t*E.t*(3-2*E.t)),E.block&&E.t===0&&!os.includes(E.block)&&os.push(E.block))}function _(){const p=h();return p?`${p.center?"F / click":"F"} ${p.target?"close":"open"} ${p.name.toLowerCase()}`:""}return{update:g,prompt:_,byName:p=>n.find(v=>v.name===p),toggle:u}}const D2=1,el=8,tl=(7.6+8.65)/2;function dd(i){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=i?"#3ddc84":"#ff5a4f";t.fillStyle="rgba(12,14,18,.85)",t.strokeStyle=n,t.lineWidth=7,t.beginPath(),t.arc(64,64,58,0,Math.PI*2),t.fill(),t.stroke(),t.lineWidth=9,t.lineCap="round",t.beginPath(),i?(t.arc(78,50,17,Math.PI,0),t.lineTo(95,58)):(t.moveTo(47,62),t.lineTo(47,50),t.arc(64,50,17,Math.PI,0),t.lineTo(81,62)),t.stroke(),t.fillStyle=n,t.beginPath(),t.roundRect(36,60,56,40,7),t.fill(),t.fillStyle="rgba(12,14,18,.9)",t.beginPath(),t.arc(64,76,6,0,Math.PI*2),t.fill(),t.fillRect(61,78,6,12);const s=new On(e);return s.colorSpace=yt,s}function N2(){const i=new Et({color:"#d7a07c",roughness:.75}),e=new Et({color:"#27324a",roughness:.9}),t=new nt,n=(o,a,c,l,h,u,f,d=0,g=0)=>{const _=new ve(new en(a,c,l),o);_.position.set(h,u,f),_.rotation.set(d,g,0),t.add(_)};n(i,.018,.018,.075,0,0,-.037),n(i,.084,.026,.09,.03,-.004,-.118);for(const[o,a]of[.023,.044,.064].entries())n(i,.019,.026,.034-o*.003,a,-.012,-.072);n(i,.02,.02,.055,-.016,-.012,-.11,0,.6);const s=new ve(new Dn(.046,.05,.34,14),e);s.rotation.x=Math.PI/2,s.position.set(.03,-.006,-.33),t.add(s);const r=new ve(new Dn(.041,.041,.03,14),i);return r.rotation.x=Math.PI/2,r.position.set(.03,-.006,-.165),t.add(r),t.traverse(o=>{o.isMesh&&(o.castShadow=!1)}),t.visible=!1,t}const U2=`
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
`;function O2({scene:i,player:e,camera:t,doors:n}){const s=n.byName("entrance door"),r=()=>e.pos.x>Pt,o=dd(!1),a=dd(!0),c=new Rr(new ks({map:o,transparent:!0}));c.scale.set(.13,.13,1),c.position.set(_n.x+.06,_n.y+.24,_n.z),c.renderOrder=20,i.add(c);const l=new Et({color:"#ff3b30",emissive:"#ff3b30",emissiveIntensity:1.6}),h=new ve(new en(.006,.012,.03),l);h.position.set(_n.x+.018,_n.y+.055,_n.z),i.add(h);const u=document.createElement("canvas");u.width=512,u.height=150;const f=u.getContext("2d"),d=new On(u);d.colorSpace=yt;const g=new Rr(new ks({map:d,transparent:!0}));g.scale.set(.4,.4*150/512,1),g.center.set(0,.5),g.position.set(_n.x+.06,_n.y+.24,_n.z-.09),g.renderOrder=20,i.add(g);let _="";const m=(pe,ue,De,ze)=>{const Pe=`${pe}|${ue}|${Math.round(De*40)}|${ze}`;Pe!==_&&(_=Pe,f.clearRect(0,0,512,150),f.fillStyle="rgba(0,0,0,.86)",f.beginPath(),f.roundRect(4,4,504,142,16),f.fill(),f.fillStyle="#fff",f.font="600 46px system-ui, sans-serif",f.textBaseline="alphabetic",f.fillText(pe,30,66),f.fillStyle="rgba(255,255,255,.65)",f.font="400 30px system-ui, sans-serif",f.fillText(ue,30,108),f.fillStyle="rgba(255,255,255,.18)",f.fillRect(30,124,452,8),f.fillStyle=ze,f.fillRect(30,124,452*Math.max(0,Math.min(1,De)),8),d.needsUpdate=!0)},p=N2();i.add(p);const v=new I(_n.x+.004,_n.y+.02,_n.z),y=new I,x=new I,E=new I;let S=0;const R=document.createElement("style");R.textContent=U2,document.head.appendChild(R);const C=document.createElement("div");C.id="unlockbox";const b=2*Math.PI*18;C.innerHTML=`<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="4"/>
    <circle class="ring" cx="22" cy="22" r="18" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-dasharray="${b}" stroke-dashoffset="${b}"/>
    <text x="22" y="27.5" text-anchor="middle" fill="#fff" font-family="system-ui, sans-serif" font-weight="700" font-size="15">F</text></svg>
    <div class="txt"></div>`,document.body.appendChild(C);const M=C.querySelector(".ring"),D=C.querySelector("text"),V=C.querySelector(".txt");let W="";const K=(pe,ue,De,ze,Pe)=>{C.classList.toggle("show",pe),pe&&(ue!==W&&(V.innerHTML=ue,W=ue),M.setAttribute("stroke-dashoffset",String(b*(1-De))),M.setAttribute("stroke",ze),D.textContent=Pe)};let j="locked",Y=0,ie=!1,F=0;const le=()=>r()&&Math.hypot(e.pos.x-_n.x,e.pos.z-_n.z)<.9,he=()=>r()&&Math.hypot(e.pos.x-Pt,e.pos.z-tl)<1.4,Se=()=>e.pos.x>Pt-.6&&e.pos.x<Pt+.6&&Math.abs(e.pos.z-tl)<.75;s.locked=()=>j!=="open"&&r();const Be=()=>{j="open",F=el,ie=!1,Y=0,s.target||n.toggle(s),c.material.map=a,c.material.needsUpdate=!0},Ye=pe=>{var ue;return/^(INPUT|TEXTAREA|SELECT)$/.test((ue=pe.target)==null?void 0:ue.tagName)};addEventListener("keydown",pe=>{pe.code!=="KeyF"||pe.repeat||e.state.paused||Ye(pe)||j==="locked"&&le()&&(ie=!0)}),addEventListener("keyup",pe=>{pe.code==="KeyF"&&(ie=!1)}),addEventListener("blur",()=>{ie=!1});function ne(pe){const ue=le();if((!ue||j!=="locked")&&(ie=!1),ie?(Y+=pe/D2,Y>=1&&Be()):Y=Math.max(0,Y-pe*2.5),j==="open"&&(F-=pe,F<=0&&!Se()&&(j="closing")),j==="closing"&&(s.target&&n.toggle(s),s.t===0&&(j="locked",c.material.map=o,c.material.needsUpdate=!0)),S=(ie?1:0)?Math.min(1,S+pe/.3):Math.max(0,S-pe/.35),p.visible=S>0,p.visible){y.set(.2,-.34,-.32),t.localToWorld(y),t.position.distanceTo(v)<2.4&&r()?x.copy(v):(t.getWorldDirection(E),x.copy(t.position).addScaledVector(E,.6)),p.position.copy(y),p.lookAt(x);const N=S*S*(3-2*S),re=ie&&S===1?.012*(.5+.5*Math.sin(performance.now()/120)):0;p.position.lerpVectors(y,x,N),p.translateZ(re)}const Pe=j==="open"?"#34d058":ie&&S===1?Math.floor(performance.now()/150)%2?"#3aa0ff":"#0b2a55":"#ff3b30";l.color.set(Pe),l.emissive.set(Pe);const je=Math.hypot(e.pos.x-_n.x,e.pos.z-_n.z),ae=r()&&(je<1.8||he());if(c.visible=g.visible=ae,ae)if(j==="open"){const N=Math.max(0,Math.ceil(F));m("Door unlocked",F>0?`Locks again in ${N}s`:"Clear the doorway to lock",Math.max(0,F)/el,"#34d058")}else j==="closing"?m("Locking…","Door closing",0,"#ff5a4f"):ue?m(Y>0?"Unlocking…":"Hold F to unlock",Y>0?"Keep holding F":"Place your finger",Y,"#fff"):m("Locked","Use fingerprint to unlock",1,"#ff5a4f");const xe=ue||j!=="locked"&&Math.hypot(e.pos.x-Pt,e.pos.z-tl)<5;if(j==="locked")!ue&&he()?K(!0,"Use fingerprint to unlock<small>Reader on the wall beside the door</small>",1,"#ff5a4f","🔒"):K(ue,Y>0?"Unlocking…<small>Keep holding <kbd>F</kbd></small>":"Press and hold <kbd>F</kbd> to unlock<small>Pixbit entrance</small>",Y,"#fff","F");else if(j==="open"){const N=Math.max(0,Math.ceil(F));K(xe,F>0?`Door unlocked<small>Locks again in ${N}s</small>`:"Door unlocked<small>Clear the doorway to lock</small>",Math.max(0,F)/el,"#34d058",String(N))}else K(xe,"Locking…<small>Door closing</small>",0,"#ff5a4f","🔒")}function fe(){return j==="locked"&&le()?"F hold to unlock door":""}return{update:ne,prompt:fe}}const k2=`
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
`;let no=null;function F2(i){try{no||(no=new(window.AudioContext||window.webkitAudioContext));const e=no.currentTime,t=i?[[392,0],[523,.12],[659,.24],[784,.36],[1047,.5]]:[[160,0],[120,.22]];for(const[n,s]of t){const r=no.createOscillator(),o=no.createGain();r.type=i?"triangle":"sawtooth",r.frequency.value=n;const a=i?s===.5?.7:.16:.3;o.gain.setValueAtTime(1e-4,e+s),o.gain.exponentialRampToValueAtTime(i?.18:.12,e+s+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+s+a),r.connect(o).connect(no.destination),r.start(e+s),r.stop(e+s+a+.05)}}catch{}}function B2({scene:i,player:e,doors:t}){const n=t.byName("ladies toilet");if(!n)return{update(){},prompt:()=>""};const s=new $a("#fff4ea",6,4.5,1.6);s.position.set(n.x+1.2,2.7,n.z+.5),i.add(s);const r=document.createElement("style");r.textContent=k2,document.head.appendChild(r);const o=document.createElement("div");o.id="ladiesq",o.innerHTML='<div class="band"></div><div class="big"></div><div class="sub"></div>',document.body.appendChild(o);const a=o.querySelector(".big"),c=o.querySelector(".sub");let l=!1,h=!1,u=0,f=!1;n.locked=()=>!l,n.askToOpen=!0;const d=()=>Math.hypot(e.pos.x-n.x,e.pos.z-n.z)<1.8&&e.pos.x<n.x,g=(E,S,R,C)=>{a.textContent=E,a.classList.toggle("red",S),c.innerHTML=R,o.classList.remove("show"),o.offsetWidth,o.classList.add("show"),u=C?performance.now()+C:0},_=()=>{o.classList.remove("show"),h=!1,u=0},m=()=>{h=!0,g("Are u gay?",!1,'<button data-a="y"><kbd>Y</kbd> Yes</button><button data-a="n"><kbd>N</kbd> No</button>',0)},p=E=>{h&&(h=!1,E?(l=!0,n.target||t.toggle(n),g("Respect +",!1,"<span>Welcome in</span>",2200)):g("Access denied",!0,"<span>Ladies only</span>",2e3),F2(E))};c.addEventListener("click",E=>{const S=E.target.closest("button");S&&p(S.dataset.a==="y")});const v=E=>{var S;return/^(INPUT|TEXTAREA|SELECT)$/.test((S=E.target)==null?void 0:S.tagName)};addEventListener("keydown",E=>{if(!(E.repeat||e.state.paused||v(E))){if(h){E.code==="KeyY"?p(!0):(E.code==="KeyN"||E.code==="Escape")&&p(!1);return}E.code==="KeyF"&&!l&&d()&&m()}});function y(){h&&!d()&&_(),u&&performance.now()>u&&_(),n.t>0&&(f=!0),l&&f&&n.t===0&&!n.target&&(l=!1,f=!1)}function x(){return!l&&!h&&d()?"F open ladies toilet":""}return{update:y,prompt:x}}const z2=3.4,Xn=640,Bi=360,Rn=20,nl=Xn/Rn,il=(Bi-40)/Rn,io=[{name:"Snake",ready:!0},{name:"Pong",ready:!1},{name:"Tetris",ready:!1},{name:"Car Race",ready:!1}];function H2({scene:i,player:e}){const t=document.createElement("canvas");t.width=Xn,t.height=Bi;const n=t.getContext("2d"),s=new On(t);s.colorSpace=yt;const r=new ve(new ut(rs.w,rs.h),new Ln({map:s,toneMapped:!1}));r.position.set(rs.x+.003,rs.y,rs.z),r.rotation.y=Math.PI/2,r.visible=!1,i.add(r);const o=document.createElement("div");Object.assign(o.style,{position:"fixed",inset:"0",background:"#000",display:"none",zIndex:"20",alignItems:"center",justifyContent:"center"}),document.body.appendChild(o);let a="off",c=0,l=!1,h,u,f,d,g,_=0,m,p=0,v=.11;const y=()=>Math.hypot(e.pos.x-rs.x,e.pos.z-rs.z)<z2&&e.pos.x>0&&e.pos.z>22.8;function x(F){l=F,F?(o.appendChild(t),Object.assign(t.style,{width:"min(100vw, 177.78vh)",height:"auto",imageRendering:"pixelated"}),o.style.display="flex"):(o.style.display="none",t.parentNode&&t.parentNode.removeChild(t))}function E(){a="menu",c=0,r.visible=!0,e.state.paused=!0,K()}function S(){a="off",r.visible=!1,e.state.paused=!1,x(!1)}function R(){h=[{x:8,y:8},{x:7,y:8},{x:6,y:8}],u={x:1,y:0},f=u,g=0,m=!1,p=0,v=.11,C(),a="snake"}function C(){do d={x:Math.floor(Math.random()*nl),y:Math.floor(Math.random()*il)};while(h.some(F=>F.x===d.x&&F.y===d.y))}function b(){u=f;const F={x:h[0].x+u.x,y:h[0].y+u.y};if(F.x<0||F.y<0||F.x>=nl||F.y>=il||h.some(le=>le.x===F.x&&le.y===F.y)){m=!0,_=Math.max(_,g);return}h.unshift(F),F.x===d.x&&F.y===d.y?(g++,v=Math.max(.06,v-.003),C()):h.pop()}const M=(F,le=600)=>`${le} ${F}px "Avenir Next", "Helvetica Neue", Arial, sans-serif`;function D(F){n.fillStyle="rgba(255,255,255,.55)",n.font=M(14,500),n.textAlign="center",n.fillText(F,Xn/2,Bi-14)}function V(){const F=n.createLinearGradient(0,0,Xn,Bi);F.addColorStop(0,"#1a1f3a"),F.addColorStop(1,"#3a1d4f"),n.fillStyle=F,n.fillRect(0,0,Xn,Bi),n.fillStyle="#fff",n.font=M(30,700),n.textAlign="left",n.fillText("Pixbit Arcade",40,56),n.fillStyle="#b46cff",n.fillRect(40,68,120,3),io.forEach((le,he)=>{const Se=104+he*50,Be=he===c;n.fillStyle=Be?"rgba(255,255,255,.14)":"rgba(255,255,255,.04)",n.fillRect(40,Se,Xn-80,40),Be&&(n.fillStyle="#5fe3ff",n.fillRect(40,Se,5,40)),n.fillStyle=le.ready?"#fff":"rgba(255,255,255,.35)",n.font=M(20,Be?700:500),n.textAlign="left",n.fillText(le.name,62,Se+27),n.font=M(14,500),n.textAlign="right",n.fillStyle=le.ready?"#7dff9a":"rgba(255,255,255,.35)",n.fillText(le.ready?"PLAY":"coming soon",Xn-58,Se+26)}),D("↑ ↓ choose · Enter play · F full screen · E turn TV off")}function W(){n.fillStyle="#0d1410",n.fillRect(0,0,Xn,Bi),n.fillStyle="#15241a",n.fillRect(0,0,Xn,40),n.fillStyle="#7dff9a",n.font=M(18,700),n.textAlign="left",n.fillText(`SNAKE   score ${g}`,16,27),n.textAlign="right",n.fillStyle="rgba(255,255,255,.5)",n.font=M(13,500),n.fillText(`best ${_} · arrows/WASD · F full screen · Backspace menu`,Xn-14,26);const F=40;n.fillStyle="rgba(255,255,255,.03)";for(let le=0;le<nl;le++)for(let he=0;he<il;he++)(le+he)%2&&n.fillRect(le*Rn,F+he*Rn,Rn,Rn);n.fillStyle="#ff4f6d",n.beginPath(),n.arc(d.x*Rn+Rn/2,F+d.y*Rn+Rn/2,Rn/2-3,0,Math.PI*2),n.fill(),h.forEach((le,he)=>{n.fillStyle=he===0?"#c8ffd4":`hsl(${135-Math.min(he,30)}, 80%, ${55-Math.min(he,20)}%)`,n.fillRect(le.x*Rn+1,F+le.y*Rn+1,Rn-2,Rn-2)}),m&&(n.fillStyle="rgba(0,0,0,.6)",n.fillRect(0,0,Xn,Bi),n.fillStyle="#fff",n.textAlign="center",n.font=M(40,800),n.fillText("GAME OVER",Xn/2,Bi/2-14),n.font=M(18,500),n.fillText(`score ${g} · best ${_}`,Xn/2,Bi/2+20),D("Enter play again · Backspace menu"))}function K(){a==="menu"?V():a==="snake"&&W(),s.needsUpdate=!0}const j={ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1],ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0]};addEventListener("keydown",F=>{if(!/^(INPUT|TEXTAREA|SELECT)$/.test(F.target.tagName)){if(a==="off"){F.code==="KeyE"&&y()&&!e.state.paused&&(E(),F.stopImmediatePropagation());return}if(F.stopImmediatePropagation(),F.code!=="Escape"&&F.preventDefault(),F.code==="KeyF"){x(!l);return}if(a==="menu"){if((F.code==="ArrowUp"||F.code==="KeyW")&&(c=(c+io.length-1)%io.length),(F.code==="ArrowDown"||F.code==="KeyS")&&(c=(c+1)%io.length),(F.code==="Enter"||F.code==="Space")&&io[c].ready&&R(),F.code==="KeyE"||F.code==="Backspace"){S();return}}else if(a==="snake"){const le=j[F.code];le&&!m&&!(le[0]===-u.x&&le[1]===-u.y)&&(f={x:le[0],y:le[1]}),m&&(F.code==="Enter"||F.code==="Space")&&R(),F.code==="Backspace"&&(a="menu")}K()}},!0);function Y(F){a!=="snake"||m||(p+=Math.min(F,v),p>=v&&(p-=v,b(),K()))}function ie(){return a!=="off"?a==="menu"?"TV on":"playing snake":y()?"E play TV games":""}return{update:Y,prompt:ie,isOn:()=>a!=="off"}}const V2=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0,so=i=>`<svg viewBox="0 0 24 24">${i}</svg>`,sl={jump:so('<path d="M12 19V6"/><path d="M6 11l6-6 6 6"/><path d="M5 21h14"/>'),doorOpen:so('<path d="M4 21h16"/><path d="M6 21V3h9v2"/><path d="M15 21V5l-5 1.5V21"/><path d="M11.8 13h.01"/><path d="M18 9l2 2-2 2"/>'),doorClose:so('<path d="M4 21h16"/><path d="M6 21V3h12v18"/><path d="M15 12h.01"/>'),rotate:so('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),tv:so('<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/><path d="M10 9l4 2-4 2z"/>')};async function G2(){var i,e,t,n;try{const s=document.documentElement;document.fullscreenElement||await(((i=s.requestFullscreen)==null?void 0:i.call(s,{navigationUI:"hide"}))??((e=s.webkitRequestFullscreen)==null?void 0:e.call(s)))}catch{}try{await((n=(t=screen.orientation)==null?void 0:t.lock)==null?void 0:n.call(t,"landscape"))}catch{}}function W2({player:i,camera:e}){const{touch:t}=i,n=document.createElement("div");n.id="touch",n.innerHTML=`
    <div class="tj-base"><div class="tj-knob"></div></div>
    <button class="tb tb-jump" type="button" aria-label="Jump">${sl.jump}</button>
    <button class="tb tb-act off" type="button" aria-label="Use"></button>
    <div class="t-rotate">${sl.rotate}<div>Rotate your phone to landscape</div></div>`;const s=document.createElement("style");s.textContent=`
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
  `,document.head.appendChild(s),document.body.appendChild(n);const r=n.querySelector(".tj-base"),o=n.querySelector(".tj-knob"),a=55;let c=null,l=0,h=0,u=null,f=0,d=0;const g=new En(0,0,0,"YXZ");r.style.display="none";const _=S=>!!(S.closest&&S.closest(".tb"));n.addEventListener("touchstart",S=>{for(const R of S.changedTouches)_(R.target)||(R.clientX<innerWidth/2&&c===null?(c=R.identifier,l=R.clientX,h=R.clientY,r.style.left=l+"px",r.style.top=h+"px",r.style.display="block",o.style.transform="translate(0,0)"):R.clientX>=innerWidth/2&&u===null&&(u=R.identifier,f=R.clientX,d=R.clientY));_(S.target)||S.preventDefault()},{passive:!1}),n.addEventListener("touchmove",S=>{for(const R of S.changedTouches)if(R.identifier===c){let C=R.clientX-l,b=R.clientY-h;const M=Math.hypot(C,b);M>a&&(C*=a/M,b*=a/M),o.style.transform=`translate(${C}px, ${b}px)`,t.x=C/a,t.y=-b/a,t.run=M>a*1.15}else R.identifier===u&&!i.state.paused&&(g.setFromQuaternion(e.quaternion),g.y-=(R.clientX-f)*.006,g.x=Math.max(-1.45,Math.min(1.45,g.x-(R.clientY-d)*.006)),e.quaternion.setFromEuler(g),f=R.clientX,d=R.clientY);S.preventDefault()},{passive:!1});const m=S=>{for(const R of S.changedTouches)R.identifier===c&&(c=null,t.x=t.y=0,t.run=!1,r.style.display="none"),R.identifier===u&&(u=null)};n.addEventListener("touchend",m),n.addEventListener("touchcancel",m);const p=(S,R)=>{const C=n.querySelector(S);C.addEventListener("touchstart",b=>{b.preventDefault(),b.stopPropagation(),R()},{passive:!1}),C.addEventListener("click",b=>b.preventDefault())};p(".tb-jump",()=>i.jump());const v=n.querySelector(".tb-act");let y=null,x="",E=null;p(".tb-act",()=>{y&&(E=y,dispatchEvent(new KeyboardEvent("keydown",{code:y,bubbles:!0})))});for(const S of["touchend","touchcancel"])v.addEventListener(S,()=>{E&&(dispatchEvent(new KeyboardEvent("keyup",{code:E,bubbles:!0})),E=null)});return{show(S){n.classList.toggle("off",!S),S&&G2()},setAction(S){let R="",C=null;/^F (open|close|collect|hold)/.test(S)?(C="KeyF",R=S.startsWith("F close")?"doorClose":"doorOpen"):S&&(C="KeyE",R="tv"),y=C,v.classList.toggle("off",!C),R!==x&&(v.innerHTML=R?sl[R]:"",v.setAttribute("aria-label",S),x=R)}}}const pd="pixbit-gamemode",rl={free:'<path d="M8 21l3-6 3 3v3"/><path d="M11 15l1-5-3 2-1 3"/><path d="M12 10l3 2h3"/><circle cx="13.5" cy="5" r="2"/>',hunt:'<circle cx="6.5" cy="15.5" r="3.5"/><circle cx="17.5" cy="15.5" r="3.5"/><path d="M10 15h4M5 12l2-7h3v10M19 12l-2-7h-3v10"/>',online:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',play:'<path d="M7 4l13 8-13 8z"/>'};function X2({list:i}){const e=[{id:"free",name:"Free Walk",desc:"Just explore the office",start(){},stop(){},update(){}}];let t=e[0];function n(){i.innerHTML="";for(const o of e){const a=o===t,c=document.createElement("button");c.type="button",c.className="mode-btn"+(a?" on":""),c.innerHTML=`<svg viewBox="0 0 24 24">${a?rl.play:rl[o.id]||rl.play}</svg>
        <span class="name">${a?"Play · ":""}${o.name}<span class="desc">${o.desc||""}</span></span><span class="arrow">&rsaquo;</span>`,c.addEventListener("click",()=>s(o.id)),i.appendChild(c)}}function s(o){const a=e.find(c=>c.id===o)||e[0];a!==t&&(t.stop(),t=a,a.start());try{localStorage.setItem(pd,a.id)}catch{}n()}function r(o){e.push(o);let a=null;try{a=localStorage.getItem(pd)}catch{}n(),a===o.id&&s(o.id)}return n(),{register:r,select:s,update:(o,a)=>t.update(o,a),get current(){return t}}}const md="pixbit-hunt-best",q2=2.5,Y2=[{name:"Keycard",kind:"card",locker:!0},{name:"Golden mug",kind:"mug",spots:[[-1.6,1.15,12.5],[-1.2,1.15,17]]},{name:"Stapler",kind:"stapler",spots:[[7.5,1.1,4.4],[8.3,1.1,3.6]]},{name:"Game controller",kind:"pad",spots:[[4.6,.9,24.3],[5.4,1.1,26.4]]},{name:"Sticky note",kind:"note",spots:[[4.5,1.25,12],[2.2,1.25,13.6]]},{name:"Trophy star",kind:"star",spots:[[9.85,1.5,6.1],[9.4,1.3,7.2]]},{name:"Marker pen",kind:"pen",spots:[[2,1.1,20.4],[1.4,1.1,21.6]]},{name:"Plant badge",kind:"badge",spots:[[1.2,1.2,7],[2.4,1.2,4.2]]}],$2=new Et({color:"#ffcf3a",emissive:"#c88a00",emissiveIntensity:.9,roughness:.35,metalness:.6}),gd=new ks({map:null,color:"#ffe27a",transparent:!0,opacity:.55,depthWrite:!1,blending:hl});function K2(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new On(i)}function j2(i){const e=new nt,t=(n,s=0,r=0,o=0)=>{const a=new ve(n,$2);return a.position.set(s,r,o),e.add(a),a};switch(i){case"card":t(new en(.085,.054,.004));break;case"mug":t(new Dn(.04,.035,.09,16)),t(new Nr(.028,.008,8,14),.05,0,0);break;case"stapler":t(new en(.15,.03,.04)),t(new en(.12,.02,.035),-.01,.02,0);break;case"pad":t(new en(.13,.035,.07)),t(new Zt(.03,10,8),-.05,-.01,.04),t(new Zt(.03,10,8),.05,-.01,.04);break;case"note":t(new en(.1,.1,.004));break;case"star":{const n=new Ro;for(let s=0;s<10;s++){const r=s%2?.025:.06,o=Math.PI/5*s+Math.PI/2;s?n.lineTo(Math.cos(o)*r,Math.sin(o)*r):n.moveTo(Math.cos(o)*r,Math.sin(o)*r)}n.closePath(),t(new Wa(n,{depth:.015,bevelEnabled:!1}));break}case"pen":{const n=t(new Dn(.01,.01,.14,10));n.rotation.z=Math.PI/2;break}default:t(new Dn(.045,.045,.01,20)).rotation.x=Math.PI/2}return e}function Z2({scene:i,camera:e,player:t}){const n=new nt;n.visible=!1,i.add(n),gd.map=K2();const s=Ua.find(b=>b.center.y>.9&&b.center.y<1.4)||Ua[0];let r=[],o=!1,a=0,c=0,l=!1,h=!1,u=null;try{u=parseFloat(localStorage.getItem(md))||null}catch{}const f=document.createElement("div");Object.assign(f.style,{position:"fixed",top:"14px",right:"14px",zIndex:"5",color:"#fff",font:"600 14px system-ui, sans-serif",background:"rgba(0,0,0,.5)",borderLeft:"4px solid #ecc828",borderRadius:"6px",padding:"8px 12px",display:"none",pointerEvents:"none",minWidth:"170px"}),document.body.appendChild(f);const d=document.createElement("div");Object.assign(d.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:"8",color:"#fff",textAlign:"center",font:"600 15px system-ui, sans-serif",background:"rgba(20,20,20,.92)",border:"1px solid #ecc828",borderRadius:"14px",padding:"24px 32px",display:"none"}),document.body.appendChild(d);let g="",_=0;const m=b=>`${Math.floor(b/60)}:${String(Math.floor(b%60)).padStart(2,"0")}`;function p(){const b=r.filter(M=>!M.got);f.innerHTML=`<div style="color:#ecc828;letter-spacing:.5px">SCAVENGER HUNT</div>
      <div>Found ${a} / ${r.length} &nbsp;·&nbsp; ${m(c)}</div>
      ${u?`<div style="font-weight:400;color:#bbb">Best ${m(u)}</div>`:""}
      <div style="font-weight:400;color:#ddd;margin-top:4px">${g||(b.length?"H = hint":"")}</div>`}function v(b){if(b.locker){const D=s.closed;return new I(s.center.x-.12*Math.cos(D),s.center.y-.04,s.center.z+.12*Math.sin(D))}const M=b.spots[Math.floor(Math.random()*b.spots.length)];return new I(M[0],M[1],M[2])}function y(){n.clear(),r=Y2.map(b=>{const M=j2(b.kind),D=v(b);if(M.position.copy(D),b.locker)M.scale.setScalar(.9);else{const V=new Rr(gd);V.scale.setScalar(.5),M.add(V)}return n.add(M),{...b,mesh:M,base:D,got:!1,zone:Hh(D.x,D.z)}}),a=0,c=0,h=!1,l=!0,g="",d.style.display="none",p()}const x=new I,E=new I;function S(){e.getWorldDirection(E);let b=null,M=.93;for(const D of r){if(D.got||D.locker&&Math.abs(s.leaf.rotation.y-s.closed)<.5||(x.copy(D.mesh.position).sub(e.position),x.length()>q2))continue;const W=x.normalize().dot(E);W>M&&(M=W,b=D)}return b}function R(b){b.got=!0,a++,n.remove(b.mesh),g=`Got the ${b.name.toLowerCase()}!`,_=2.5,a===r.length?C():p()}function C(){l=!1,h=!0;const b=!u||c<u;if(b){u=c;try{localStorage.setItem(md,String(c))}catch{}}p(),d.innerHTML=`<div style="font-size:24px;color:#ecc828;margin-bottom:6px">All 8 found!</div>
      <div>Time ${m(c)}${b?" &nbsp;🏆 new best":` &nbsp;·&nbsp; best ${m(u)}`}</div>
      <div style="font-weight:400;color:#bbb;margin-top:10px">Press Enter to play again, or Esc to change the game mode</div>`,d.style.display="block"}return addEventListener("keydown",b=>{if(!(!o||t.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(b.target.tagName)))if(b.code==="KeyF"){const M=S();M&&R(M)}else if(b.code==="KeyH"&&l){const M=r.find(D=>!D.got);M&&(g=`Hint: ${M.name} – ${M.locker?"inside a locker in the ":"in the "}${M.zone}`,_=6,p())}else b.code==="Enter"&&h&&y()}),{id:"hunt",name:"Scavenger Hunt",desc:"Find 8 hidden gold items. F to collect, H for a hint. One is in a locker.",start(){o=!0,n.visible=!0,f.style.display="block",y()},stop(){o=!1,l=!1,n.visible=!1,f.style.display="none",d.style.display="none"},update(b,M){if(!o)return;const D=performance.now()/1e3;for(const V of r)V.got||V.locker||(V.mesh.rotation.y=D*1.6,V.mesh.position.y=V.base.y+Math.sin(D*2+V.base.x)*.03);l&&M&&(c+=b,_>0&&(_-=b)<=0&&(g=""),p())},prompt(){if(!o||!l)return"";const b=S();return b?`F collect ${b.name.toLowerCase()}`:""}}}const Fp={apiKey:"AIzaSyD_KZcTz53Bfh12ZB7Gwed8f1WCKrsGIX4",authDomain:"office-world-60ed1.firebaseapp.com",databaseURL:"https://office-world-60ed1-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"office-world-60ed1",storageBucket:"office-world-60ed1.firebasestorage.app",messagingSenderId:"607388062460",appId:"1:607388062460:web:4b68c0880c4d8822607d79"},J2="office",Q2=()=>!Fp.apiKey.startsWith("PASTE"),ol="https://www.gstatic.com/firebasejs/11.0.2/",eb=[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]}],tb=15,fr=["#e8505b","#f9a73e","#ecc828","#4fbf6f","#2fa4d9","#7b68ee","#e26fc4","#3fc1b0"],xd="pixbit-online-name",_d="pixbit-online-color",nb=1.65,ib=`
  .ow { width: 100%; margin-top: 14px; display: none; flex-direction: column; gap: 8px; cursor: default; }
  .ow.show { display: flex; }
  .ow-row { display: flex; align-items: center; gap: 10px; }
  .ow label { width: 66px; flex: none; font: 700 12px system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; color: #ecc828; }
  .ow input { flex: 1; min-width: 0; padding: 8px 12px; border-radius: 10px; border: 1.5px solid rgba(255,255,255,.25); background: rgba(20,20,24,.7);
    color: #fff; font: 600 15px system-ui, sans-serif; outline: none; }
  .ow input:focus { border-color: #ecc828; }
  .ow-dot { width: 22px; height: 22px; flex: none; border-radius: 50%; border: 2px solid rgba(255,255,255,.7); cursor: pointer; }
  .ow-status { font: 500 13px system-ui, sans-serif; color: rgba(255,255,255,.75); }
  .ow-status b { color: #7ee08f; }
  .ow-status.err b { color: #ff8a80; }
  #ow-hud { position: fixed; left: 50%; bottom: 14px; transform: translateX(-50%); z-index: 5; display: none; align-items: center; gap: 10px;
    padding: 6px 14px; border-radius: 20px; background: rgba(0,0,0,.5); color: #fff; font: 600 13px system-ui, sans-serif; pointer-events: none; }
  #ow-hud.show { display: flex; }
  #ow-hud .mic { width: 10px; height: 10px; border-radius: 50%; background: #777; }
  #ow-hud.talk .mic { background: #ff4d4d; box-shadow: 0 0 10px #ff4d4d; }
  #ow-hud kbd { background: #333; border: 1px solid #666; border-radius: 4px; padding: 0 5px; font: 700 11px system-ui; }
  #ow-ptt { position: fixed; z-index: 7; right: max(84px, calc(env(safe-area-inset-right) + 66px)); bottom: max(26px, env(safe-area-inset-bottom));
    width: 54px; height: 54px; border-radius: 50%; border: 2px solid rgba(255,255,255,.55); background: rgba(20,20,20,.5); color: #fff;
    display: none; align-items: center; justify-content: center; touch-action: none; user-select: none; -webkit-user-select: none; }
  #ow-ptt.show { display: flex; }
  #ow-ptt.on { background: rgba(255,77,77,.8); }
  #ow-ptt svg { width: 26px; height: 26px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; pointer-events: none; }
`;function sb({scene:i,camera:e,player:t,panel:n,touch:s=!1}){const r=document.createElement("style");r.textContent=ib,document.head.appendChild(r);let o="",a="";try{o=localStorage.getItem(xd)||"",a=localStorage.getItem(_d)||""}catch{}o||(o="Guest "+Math.floor(100+Math.random()*900)),fr.includes(a)||(a=fr[Math.floor(Math.random()*fr.length)]);const c=document.createElement("div");c.className="ow",c.innerHTML=`
    <div class="ow-row"><label for="ow-name">Name</label><input id="ow-name" maxlength="18" autocomplete="off" spellcheck="false">
      <span class="ow-dot" title="Change colour"></span></div>
    <div class="ow-row"><label>Online</label><span class="ow-status"></span></div>`,n.insertBefore(c,n.querySelector(".m-hint"));const l=c.querySelector("input"),h=c.querySelector(".ow-dot"),u=c.querySelector(".ow-status");l.value=o,h.style.background=a,c.addEventListener("click",k=>k.stopPropagation()),l.addEventListener("keydown",k=>{k.code!=="Escape"&&k.stopPropagation(),k.code==="Enter"&&l.blur()}),l.addEventListener("keyup",k=>k.stopPropagation()),l.addEventListener("change",()=>{o=l.value.trim().slice(0,18)||o,l.value=o;try{localStorage.setItem(xd,o)}catch{}V()}),h.addEventListener("click",()=>{a=fr[(fr.indexOf(a)+1)%fr.length],h.style.background=a;try{localStorage.setItem(_d,a)}catch{}V()});function f(k,B=!1){u.innerHTML=k,u.classList.toggle("err",B)}const d=document.createElement("div");d.id="ow-hud",d.innerHTML='<span class="mic"></span><span class="txt"></span>',document.body.appendChild(d);const g=document.createElement("button");g.id="ow-ptt",g.type="button",g.setAttribute("aria-label","Hold to talk"),g.innerHTML='<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',document.body.appendChild(g),g.addEventListener("pointerdown",k=>{k.preventDefault(),pe(!0)});for(const k of["pointerup","pointercancel","pointerleave"])g.addEventListener(k,()=>pe(!1));let _=!1,m=null,p=null,v=null,y=[];const x=new Map;let E=null,S=null,R=!1,C=!1;async function b(){if(m)return m;if(window.__owFake)return m=window.__owFake;const[k,B,z]=await Promise.all([import(ol+"firebase-app.js"),import(ol+"firebase-auth.js"),import(ol+"firebase-database.js")]),de=k.initializeApp(Fp,"pixbit-online");return m={auth:B.initializeAuth(de,{persistence:B.inMemoryPersistence}),signIn:B.signInAnonymously,...z},m}const M=k=>m.ref(p,`rooms/${J2}/${k}`);async function D(){if(!Q2()&&!window.__owFake){f("<b>Not set up yet</b> · add your Firebase config (see MULTIPLAYER.md)",!0);return}f("Connecting…");try{await b(),p=m.getDatabase(m.auth.app);const k=await m.signIn(m.auth);if(!_)return;v=k.user.uid,await m.remove(M(`signal/${v}`)),m.onDisconnect(M(`players/${v}`)).remove(),m.onDisconnect(M(`signal/${v}`)).remove(),await V();const B=M("players");y.push(m.onChildAdded(B,z=>{z.key!==v&&j(z.key,z.val()),N()})),y.push(m.onChildChanged(B,z=>{const de=x.get(z.key);de&&(de.name=z.val().name,de.color=z.val().color,de.avatar.setLook(de.name,de.color))})),y.push(m.onChildRemoved(B,z=>{Se(z.key),N()})),y.push(m.onChildAdded(M(`signal/${v}`),z=>{const de=z.val();m.remove(z.ref),F(de).catch(me=>console.warn("[online] signal",me))})),N()}catch(k){console.warn("[online]",k),f(`<b>Couldn't connect</b> · ${String(k.code||k.message||k).replace(/</g,"&lt;")}`,!0)}}function V(){return!_||!v?Promise.resolve():m.set(M(`players/${v}`),{name:o,color:a,t:m.serverTimestamp()})}function W(k,B){v&&m.push(M(`signal/${k}`),{...B,from:v})}function K(){for(const k of y)k();y=[];for(const k of[...x.keys()])Se(k);m&&v&&(m.remove(M(`players/${v}`)),m.remove(M(`signal/${v}`))),v=null}function j(k,B){if(x.has(k))return x.get(k);const z=Y(k,B||{});return z.initiator&&ie(z),z}function Y(k,B){const z=new RTCPeerConnection({iceServers:eb}),de={id:k,pc:z,dc:null,name:B.name||"Guest",color:B.color||"#999",initiator:v<k,pendingIce:[],audioEl:null,last:null};return de.avatar=rb(de.name,de.color),de.avatar.group.visible=!1,i.add(de.avatar.group),x.set(k,de),z.onicecandidate=me=>{me.candidate&&W(k,{type:"ice",c:JSON.stringify(me.candidate.toJSON())})},z.ontrack=me=>Ye(de,me.streams[0]||new MediaStream([me.track])),z.onconnectionstatechange=()=>{N(),z.connectionState==="failed"&&_&&x.get(k)===de&&(Se(k),setTimeout(()=>{_&&v&&m.get(M(`players/${k}`)).then(me=>{me.exists()&&j(k,me.val())})},3e3))},de.initiator?(z.addTransceiver("audio",{direction:"sendrecv"}),he(de,z.createDataChannel("pos",{ordered:!1,maxRetransmits:0}))):z.ondatachannel=me=>he(de,me.channel),de}async function ie(k){const B=await k.pc.createOffer();await k.pc.setLocalDescription(B),W(k.id,{type:"offer",sdp:B.sdp})}async function F(k){if(!k||!k.from)return;let B=x.get(k.from);if(k.type==="offer"){(!B||B.initiator)&&(B&&Se(k.from),B=Y(k.from,{}),B.initiator=!1);const z=await m.get(M(`players/${k.from}`));z.exists()&&(B.name=z.val().name,B.color=z.val().color,B.avatar.setLook(B.name,B.color)),await B.pc.setRemoteDescription({type:"offer",sdp:k.sdp});for(const me of B.pc.getTransceivers())me.receiver.track.kind==="audio"&&(me.direction="sendrecv",S&&me.sender.replaceTrack(S));await le(B);const de=await B.pc.createAnswer();await B.pc.setLocalDescription(de),W(k.from,{type:"answer",sdp:de.sdp})}else if(k.type==="answer"&&B){if(await B.pc.setRemoteDescription({type:"answer",sdp:k.sdp}),S)for(const z of B.pc.getSenders())z.track||z.replaceTrack(S);await le(B)}else if(k.type==="ice"&&B){const z=JSON.parse(k.c);B.pc.remoteDescription?await B.pc.addIceCandidate(z).catch(()=>{}):B.pendingIce.push(z)}}async function le(k){for(const B of k.pendingIce.splice(0))await k.pc.addIceCandidate(B).catch(()=>{})}function he(k,B){k.dc=B,B.onopen=()=>{N(),ae(!0)},B.onclose=()=>N(),B.onmessage=z=>{try{const[de,me,L,A,X]=JSON.parse(z.data);k.avatar.target(de,me,L,A,!!X)}catch{}}}function Se(k){var z;const B=x.get(k);if(B){x.delete(k);try{(z=B.dc)==null||z.close()}catch{}try{B.pc.close()}catch{}B.audioEl&&(B.audioEl.srcObject=null,B.audioEl.remove()),B.avatar.dispose()}}function Be(){return E||(E=new fy,e.add(E)),E.context.state==="suspended"&&E.context.resume(),E}function Ye(k,B){k.audioEl||(k.audioEl=document.createElement("audio"),k.audioEl.muted=!0,k.audioEl.autoplay=!0,document.body.appendChild(k.audioEl)),k.audioEl.srcObject=B;const z=new my(Be());z.setMediaStreamSource(B),z.setRefDistance(2.5),z.setRolloffFactor(1.4),z.setDistanceModel("inverse"),z.setMaxDistance(40),k.avatar.setVoice(z)}async function ne(){if(S||R)return S;R=!0;try{S=(await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})).getAudioTracks()[0],S.enabled=C;for(const B of x.values())for(const z of B.pc.getTransceivers())z.receiver.track.kind==="audio"&&z.currentDirection!=="stopped"&&z.sender.replaceTrack(S)}catch(k){console.warn("[online] mic",k),fe="Microphone blocked: allow it in the browser to talk"}return S}let fe="";function pe(k){!_||k===C||(C=k,Be(),k&&!S&&ne().then(()=>{S&&(S.enabled=C)}),S&&(S.enabled=k),g.classList.toggle("on",k),ae(!0),re())}const ue=k=>/^(INPUT|TEXTAREA|SELECT)$/.test(k.target.tagName)||t.state.paused;addEventListener("keydown",k=>{k.code==="KeyV"&&!k.repeat&&!ue(k)&&pe(!0)}),addEventListener("keyup",k=>{k.code==="KeyV"&&pe(!1)}),addEventListener("blur",()=>pe(!1)),addEventListener("pointerdown",()=>{_&&E&&Be()});const De=new I;let ze=0,Pe="",je=0;function ae(k=!1){e.getWorldDirection(De);const B=Math.atan2(-De.x,-De.z),z=JSON.stringify([+t.pos.x.toFixed(2),+Math.max(0,e.position.y-nb).toFixed(2),+t.pos.z.toFixed(2),+B.toFixed(2),C?1:0]);if(!(!k&&z===Pe&&je<1)){Pe=z,je=0;for(const de of x.values())if(de.dc&&de.dc.readyState==="open")try{de.dc.send(z)}catch{}}}function xe(){let k=0;for(const B of x.values())B.dc&&B.dc.readyState==="open"&&k++;return k}function N(){if(!_||!v)return;const k=xe(),z=x.size-k;f(`<b>Connected</b> · ${k+1} in the world${z?` · ${z} joining…`:""} · hold <b>V</b> to talk`),re()}function re(){d.classList.toggle("talk",C);const k=xe()+1;d.querySelector(".txt").innerHTML=fe||(C?"Talking…":`${k} online · hold <kbd>V</kbd> to talk`)}return{id:"online",name:"Open World",desc:"Explore with other people online. Hold V to talk.",start(){_=!0,c.classList.add("show"),d.classList.add("show"),s&&g.classList.add("show"),re(),D()},stop(){_=!1,pe(!1),c.classList.remove("show"),d.classList.remove("show"),g.classList.remove("show"),K()},update(k){if(_){for(const B of x.values())B.avatar.update(k);ze+=k,je+=k,ze>=1/tb&&(ze=0,ae()),fe&&(vd+=k)>5&&(fe="",vd=0,re())}},prompt(){return""}}}let vd=0;function rb(i,e){const t=new nt,n=new Et({color:e,roughness:.6}),s=new ve(new Ph(.24,.85,6,14),n);s.position.y=.24+.425+.02,s.castShadow=!0;const r=new ve(new Zt(.17,20,14),new Et({color:"#f1d3b8",roughness:.7}));r.position.y=1.5,r.castShadow=!0;const o=new ve(new en(.22,.07,.08),new Et({color:"#15171c",roughness:.2,metalness:.4}));o.position.set(0,1.53,-.14),t.add(s,r,o);const a=document.createElement("canvas");a.width=512,a.height=128;const c=new On(a);c.colorSpace=yt;const l=new Rr(new ks({map:c,depthTest:!1,transparent:!0}));l.scale.set(1.1,.275,1),l.position.y=1.95,l.renderOrder=10,t.add(l);let h=i,u=e,f=!1;function d(){const E=a.getContext("2d");E.clearRect(0,0,512,128),E.font="700 54px system-ui, sans-serif";const S=Math.min(500,E.measureText(h).width+(f?110:60)),R=(512-S)/2;E.fillStyle="rgba(0,0,0,.55)",E.beginPath(),E.roundRect(R,20,S,88,44),E.fill(),E.fillStyle=u,E.beginPath(),E.arc(R+36,64,12,0,Math.PI*2),E.fill(),f&&(E.fillStyle="#ff4d4d",E.beginPath(),E.arc(R+S-36,64,14,0,Math.PI*2),E.fill()),E.fillStyle="#fff",E.textBaseline="middle",E.textAlign="left",E.fillText(h,R+58,66,S-(f?120:70)),c.needsUpdate=!0}d();const g=new I,_=new I;let m=0,p=0,v=!1,y=0,x=null;return{group:t,setLook(E,S){h=E||h,u=S||u,n.color.set(u),d()},setVoice(E){var S;x&&((S=x.disconnect)==null||S.call(x),r.remove(x)),x=E,r.add(E)},target(E,S,R,C,b){g.set(E,S,R),m=C,v||(_.copy(g),p=C,v=!0,t.visible=!0),b!==f&&(f=b,d())},update(E){if(!v)return;const S=1-Math.exp(-12*E),R=_.distanceToSquared(g)>4e-4;_.lerp(g,S);let C=m-p;C=Math.atan2(Math.sin(C),Math.cos(C)),p+=C*S,R&&(y+=E*9),t.position.set(_.x,_.y+(R?Math.abs(Math.sin(y))*.04:0),_.z),t.rotation.y=p},dispose(){if(x)try{x.disconnect()}catch{}t.removeFromParent(),t.traverse(E=>{var S,R;(S=E.geometry)==null||S.dispose(),E.material&&((R=E.material.map)==null||R.dispose(),E.material.dispose())})}}}const pn=new o1({antialias:!0,powerPreference:"high-performance"});pn.setPixelRatio(Math.min(devicePixelRatio,2));pn.setSize(innerWidth,innerHeight);pn.outputColorSpace=yt;pn.toneMapping=Ad;pn.toneMappingExposure=.9;pn.shadowMap.enabled=!0;pn.shadowMap.type=Ed;document.body.appendChild(pn.domElement);const mn=new ip,Bp=new st("#a8aaa4");mn.background=Bp;mn.fog=new Sh(Bp,40,1100);const ob=new jl(pn);mn.environment=ob.fromScene(new Ay,.04).texture;mn.environmentIntensity=.45;const mi=new Cn(78,innerWidth/innerHeight,.05,1500);mn.add(new sy("#f6f7ff","#7a7066",.8));const bi=new Mp("#fff3e2",1.5);bi.position.set(-22,20,4);bi.target.position.set(5,0,10);bi.castShadow=!0;bi.shadow.mapSize.set(2048,2048);Object.assign(bi.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:80});bi.shadow.bias=-4e-4;bi.shadow.normalBias=.03;mn.add(bi,bi.target);const zp=new $a("#ffe8c8",6,12,1.5);zp.position.set(8.7,2.6,7.8);mn.add(zp);const Ja=new nt;f2(Ja);E2(Ja);mn.add(Ja);const rn=w2(mi,pn.domElement,{spawn:sd,yaw:sd.yaw}),$i=document.getElementById("overlay"),Bs=V2()?W2({player:rn,camera:mi}):null;Bs&&Bs.show(!1);$i.addEventListener("click",()=>{if(Bs){Ra(),Bs.show(!0);return}try{const i=rn.controls.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>Ra())}catch{Ra()}});function Ra(){rn.state.dragMode=!0,$i.classList.add("hidden"),lh.dataset.mode="drag"}document.addEventListener("pointerlockerror",Ra);addEventListener("keydown",i=>{i.code==="Escape"&&rn.state.dragMode&&!Po.isOpen()&&(rn.state.dragMode=!1,$i.classList.remove("hidden"))});rn.controls.addEventListener("lock",()=>$i.classList.add("hidden"));rn.controls.addEventListener("unlock",()=>{Po.isOpen()||$i.classList.remove("hidden")});const ka=I2({scene:mn,player:rn,camera:mi}),yd=O2({scene:mn,player:rn,camera:mi,doors:ka}),Md=B2({scene:mn,player:rn,doors:ka}),bd=H2({scene:mn,player:rn}),Po=P2({scene:mn,camera:mi,player:rn,world:Ja,zoneAt:Hh,renderer:pn});Po.onResumeFailed(()=>$i.classList.remove("hidden"));const Fa=X2({list:$i.querySelector(".modes")}),ch=Z2({scene:mn,camera:mi,player:rn});Fa.register(ch);const ab=sb({scene:mn,camera:mi,player:rn,panel:$i.querySelector(".m-main"),touch:!!Bs});Fa.register(ab);let Lo=!1;try{Lo=localStorage.getItem("pixbit-devmode")==="1"}catch{}const Ba=document.getElementById("devbox");function Vh(i){Lo=i,document.body.classList.toggle("dev",i),Ba.checked=i,Po.setEnabled(i),Op(i);try{localStorage.setItem("pixbit-devmode",i?"1":"0")}catch{}}Ba.addEventListener("click",i=>i.stopPropagation());document.getElementById("devsw").addEventListener("click",i=>i.stopPropagation());Ba.addEventListener("change",()=>Vh(Ba.checked));addEventListener("keydown",i=>{i.code==="KeyP"&&!/^(INPUT|TEXTAREA|SELECT)$/.test(i.target.tagName)&&!Po.isOpen()&&Vh(!Lo)});Vh(Lo);let lo=!0;addEventListener("keydown",i=>{i.code==="KeyQ"&&(lo=!lo,bi.castShadow=lo,pn.setPixelRatio(lo?Math.min(devicePixelRatio,2):1),pn.setSize(innerWidth,innerHeight))});const al=document.getElementById("zone"),lh=document.getElementById("hud");let Sd="",cl=0,ya=0,ll=0;function cb(i){const e=Hh(rn.pos.x,rn.pos.z);e!==Sd&&(Sd=e,al.textContent=e,al.classList.add("show"),cl=2.2),cl>0&&(cl-=i)<=0&&al.classList.remove("show")}addEventListener("resize",()=>{mi.aspect=innerWidth/innerHeight,mi.updateProjectionMatrix(),pn.setSize(innerWidth,innerHeight)});const lb=new bp;pn.setAnimationLoop(()=>{const i=lb.getDelta();if(rn.update(i),ka.update(i),yd.update(i),Md.update(i),bd.update(i),Fa.update(i,$i.classList.contains("hidden")),cb(i),ll++,ya+=i,ya>.5){const e=bd.prompt()||Fa.current===ch&&ch.prompt()||ka.prompt()||yd.prompt()||Md.prompt();Bs?(Bs.setAction(e),lh.textContent=""):lh.textContent=`${e?e.toUpperCase()+" · ":""}${Math.round(ll/ya)} fps · ${lo?"high":"low"} quality (Q) · ${Lo?"DEV · C suggest · X area · L list":"dev mode off (P)"}${rn.state.dragMode?" · drag mouse to look":""}`,ll=0,ya=0}pn.render(mn,mi)});Object.assign(window,{__office:{scene:mn,camera:mi,player:rn,renderer:pn}});
