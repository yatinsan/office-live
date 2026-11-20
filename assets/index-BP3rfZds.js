(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="170",Xp=0,Zh=1,qp=2,Ed=1,Td=2,ki=3,qi=0,wn=1,Ot=2,fs=0,gr=1,hl=2,Jh=3,Qh=4,Yp=5,Ls=100,$p=101,Kp=102,jp=103,Zp=104,Jp=200,Qp=201,e0=202,t0=203,ul=204,fl=205,n0=206,i0=207,s0=208,r0=209,o0=210,a0=211,c0=212,l0=213,h0=214,dl=0,pl=1,ml=2,Mr=3,gl=4,xl=5,_l=6,vl=7,Ad=0,u0=1,f0=2,ds=0,d0=1,p0=2,m0=3,Rd=4,g0=5,x0=6,_0=7,eu="attached",v0="detached",Cd=300,br=301,wr=302,yl=303,Ml=304,za=306,pi=1e3,hs=1001,Pa=1002,In=1003,Pd=1004,oo=1005,Yn=1006,ba=1007,Vi=1008,Yi=1009,Ld=1010,Id=1011,_o=1012,uh=1013,Us=1014,fi=1015,Ao=1016,fh=1017,dh=1018,Sr=1020,Dd=35902,Nd=1021,Ud=1022,ti=1023,Od=1024,kd=1025,xr=1026,Er=1027,ph=1028,mh=1029,Fd=1030,gh=1031,xh=1033,wa=33776,Sa=33777,Ea=33778,Ta=33779,bl=35840,wl=35841,Sl=35842,El=35843,Tl=36196,Al=37492,Rl=37496,Cl=37808,Pl=37809,Ll=37810,Il=37811,Dl=37812,Nl=37813,Ul=37814,Ol=37815,kl=37816,Fl=37817,Bl=37818,zl=37819,Hl=37820,Vl=37821,Aa=36492,Gl=36494,Wl=36495,Bd=36283,Xl=36284,ql=36285,Yl=36286,vo=2300,yo=2301,ec=2302,tu=2400,nu=2401,iu=2402,y0=2500,M0=0,zd=1,$l=2,b0=3200,w0=3201,Hd=0,S0=1,cs="",yt="srgb",Nn="srgb-linear",Ha="linear",Ct="srgb",Vs=7680,su=519,E0=512,T0=513,A0=514,Vd=515,R0=516,C0=517,P0=518,L0=519,Kl=35044,ru="300 es",Gi=2e3,La=2001;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ou=1234567;const uo=Math.PI/180,Tr=180/Math.PI;function ni(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Qt(i,e,t){return Math.max(e,Math.min(t,i))}function _h(i,e){return(i%e+e)%e}function I0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function D0(i,e,t){return i!==e?(t-i)/(e-i):0}function fo(i,e,t){return(1-t)*i+t*e}function N0(i,e,t,n){return fo(i,e,1-Math.exp(-t*n))}function U0(i,e=1){return e-Math.abs(_h(i,e*2)-e)}function O0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function k0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function F0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function B0(i,e){return i+Math.random()*(e-i)}function z0(i){return i*(.5-Math.random())}function H0(i){i!==void 0&&(ou=i);let e=ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V0(i){return i*uo}function G0(i){return i*Tr}function W0(i){return(i&i-1)===0&&i!==0}function X0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function q0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Y0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $0={DEG2RAD:uo,RAD2DEG:Tr,generateUUID:ni,clamp:Qt,euclideanModulo:_h,mapLinear:I0,inverseLerp:D0,lerp:fo,damp:N0,pingpong:U0,smoothstep:O0,smootherstep:k0,randInt:F0,randFloat:B0,randFloatSpread:z0,seededRandom:H0,degToRad:V0,radToDeg:G0,isPowerOfTwo:W0,ceilPowerOfTwo:X0,floorPowerOfTwo:q0,setQuaternionFromProperEuler:Y0,normalize:At,denormalize:ui};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,s,r,o,a,c,l){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],x=s[7],E=s[2],S=s[5],R=s[8];return r[0]=o*_+a*v+c*E,r[3]=o*m+a*y+c*S,r[6]=o*p+a*x+c*R,r[1]=l*_+h*v+u*E,r[4]=l*m+h*y+u*S,r[7]=l*p+h*x+u*R,r[2]=f*_+d*v+g*E,r[5]=f*m+d*y+g*S,r[8]=f*p+d*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tc.makeScale(e,t)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new lt;function Gd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function K0(){const i=Mo("canvas");return i.style.display="block",i}const au={};function ao(i){i in au||(au[i]=!0,console.warn(i))}function j0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Z0(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function J0(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mt={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cs?Ha:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const cu=[.64,.33,.3,.6,.15,.06],lu=[.2126,.7152,.0722],hu=[.3127,.329],uu=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fu=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[Nn]:{primaries:cu,whitePoint:hu,transfer:Ha,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:lu,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:cu,whitePoint:hu,transfer:Ct,toXYZ:uu,fromXYZ:fu,luminanceCoefficients:lu,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}});let Gs;class Q0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=Mo("canvas")),Gs.width=e.width,Gs.height=e.height;const n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let em=0;class Wd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Q0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tm=0;class tn extends zs{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=hs,s=hs,r=Yn,o=Vi,a=ti,c=Yi,l=tn.DEFAULT_ANISOTROPY,h=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ni(),this.name="",this.source=new Wd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pi:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pi:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Cd;tn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(d+1)/2,E=(p+1)/2,S=(h+f)/4,R=(u+_)/4,P=(g+m)/4;return y>x&&y>E?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=R/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=P/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nm extends zs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends nm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xd extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class im extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),S=Math.atan2(E,p*v);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E}const x=a*v;if(c=c*m+f*x,l=l*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=E,l*=E,h*=E,u*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(du.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(du.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new D,du=new gi;class wi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ri):ri.fromBufferAttribute(r,o),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Oo.subVectors(this.max,Hr),Ws.subVectors(e.a,Hr),Xs.subVectors(e.b,Hr),qs.subVectors(e.c,Hr),Zi.subVectors(Xs,Ws),Ji.subVectors(qs,Xs),xs.subVectors(Ws,qs);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-xs.z,xs.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,xs.z,0,-xs.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-xs.y,xs.x,0];return!sc(t,Ws,Xs,qs,Oo)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,Ws,Xs,qs,Oo))?!1:(ko.crossVectors(Zi,Ji),t=[ko.x,ko.y,ko.z],sc(t,Ws,Xs,qs,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new D,new D,new D,new D,new D,new D,new D,new D],ri=new D,Uo=new wi,Ws=new D,Xs=new D,qs=new D,Zi=new D,Ji=new D,xs=new D,Hr=new D,Oo=new D,ko=new D,_s=new D;function sc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_s.fromArray(i,r);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=e.dot(_s),l=t.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const sm=new wi,Vr=new D,rc=new D;class Si{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(rc)),this.expandByPoint(Vr.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new D,oc=new D,Fo=new D,Qi=new D,ac=new D,Bo=new D,cc=new D;class Ro{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oc.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(oc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fo),a=Qi.dot(this.direction),c=-Qi.dot(Fo),l=Qi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oc).addScaledVector(Fo,f),d}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,s,r){ac.subVectors(t,e),Bo.subVectors(n,e),cc.crossVectors(ac,Bo);let o=this.direction.dot(cc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const c=a*this.direction.dot(Bo.crossVectors(Qi,Bo));if(c<0)return null;const l=a*this.direction.dot(ac.cross(Qi));if(l<0||c+l>o)return null;const h=-a*Qi.dot(cc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rm,e,om)}lookAt(e,t,n){const s=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),es.crossVectors(n,Vn),es.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),es.crossVectors(n,Vn)),es.normalize(),zo.crossVectors(Vn,es),s[0]=es.x,s[4]=zo.x,s[8]=Vn.x,s[1]=es.y,s[5]=zo.y,s[9]=Vn.y,s[2]=es.z,s[6]=zo.z,s[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],E=n[15],S=s[0],R=s[4],P=s[8],M=s[12],b=s[1],N=s[5],V=s[9],H=s[13],$=s[2],j=s[6],q=s[10],ne=s[14],B=s[3],ue=s[7],de=s[11],Ee=s[15];return r[0]=o*S+a*b+c*$+l*B,r[4]=o*R+a*N+c*j+l*ue,r[8]=o*P+a*V+c*q+l*de,r[12]=o*M+a*H+c*ne+l*Ee,r[1]=h*S+u*b+f*$+d*B,r[5]=h*R+u*N+f*j+d*ue,r[9]=h*P+u*V+f*q+d*de,r[13]=h*M+u*H+f*ne+d*Ee,r[2]=g*S+_*b+m*$+p*B,r[6]=g*R+_*N+m*j+p*ue,r[10]=g*P+_*V+m*q+p*de,r[14]=g*M+_*H+m*ne+p*Ee,r[3]=v*S+y*b+x*$+E*B,r[7]=v*R+y*N+x*j+E*ue,r[11]=v*P+y*V+x*q+E*de,r[15]=v*M+y*H+x*ne+E*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,x=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,E=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,S=t*v+n*y+s*x+r*E;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/S;return e[0]=v*R,e[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*R,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*R,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*R,e[4]=y*R,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*R,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*R,e[8]=x*R,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*R,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*R,e[12]=E*R,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=c*l,y=c*h,x=c*u,E=n.x,S=n.y,R=n.z;return s[0]=(1-(_+p))*E,s[1]=(d+x)*E,s[2]=(g-y)*E,s[3]=0,s[4]=(d-x)*S,s[5]=(1-(f+p))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ys.set(s[0],s[1],s[2]).length();const o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],oi.copy(this);const l=1/r,h=1/o,u=1/a;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=h,oi.elements[5]*=h,oi.elements[6]*=h,oi.elements[8]*=u,oi.elements[9]*=u,oi.elements[10]*=u,t.setFromRotationMatrix(oi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Gi){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let d,g;if(a===Gi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===La)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gi){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,d=(n+s)*h;let g,_;if(a===Gi)g=(o+r)*u,_=-2*u;else if(a===La)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ys=new D,oi=new ot,rm=new D(0,0,0),om=new D(1,1,1),es=new D,zo=new D,Vn=new D,pu=new ot,mu=new gi;class En{constructor(e=0,t=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mu.setFromEuler(this),this.setFromQuaternion(mu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let am=0;const gu=new D,$s=new gi,Ii=new ot,Ho=new D,Gr=new D,cm=new D,lm=new gi,xu=new D(1,0,0),_u=new D(0,1,0),vu=new D(0,0,1),yu={type:"added"},hm={type:"removed"},Ks={type:"childadded",child:null},lc={type:"childremoved",child:null};class Dt extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new D,t=new En,n=new gi,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new lt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(xu,e)}rotateY(e){return this.rotateOnAxis(_u,e)}rotateZ(e){return this.rotateOnAxis(vu,e)}translateOnAxis(e,t){return gu.copy(e).applyQuaternion(this.quaternion),this.position.add(gu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xu,e)}translateY(e){return this.translateOnAxis(_u,e)}translateZ(e){return this.translateOnAxis(vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ho.copy(e):Ho.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Gr,Ho,this.up):Ii.lookAt(Ho,Gr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ii),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yu),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hm),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yu),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,cm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new D(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new D,Di=new D,hc=new D,Ni=new D,js=new D,Zs=new D,Mu=new D,uc=new D,fc=new D,dc=new D,pc=new Mt,mc=new Mt,gc=new Mt;class ei{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ai.subVectors(e,t),s.cross(ai);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ai.subVectors(s,t),Di.subVectors(n,t),hc.subVectors(e,t);const o=ai.dot(ai),a=ai.dot(Di),c=ai.dot(hc),l=Di.dot(Di),h=Di.dot(hc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pc,r.x),o.addScaledVector(mc,r.y),o.addScaledVector(gc,r.z),o}static isFrontFacing(e,t,n,s){return ai.subVectors(n,t),Di.subVectors(e,t),ai.cross(Di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ai.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ei.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,n),Zs.subVectors(r,n),uc.subVectors(e,n);const c=js.dot(uc),l=Zs.dot(uc);if(c<=0&&l<=0)return t.copy(n);fc.subVectors(e,s);const h=js.dot(fc),u=Zs.dot(fc);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(js,o);dc.subVectors(e,r);const d=js.dot(dc),g=Zs.dot(dc);if(g>=0&&d<=g)return t.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Zs,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Mu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Mu,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(js,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=_h(e,1),t=Qt(t,0,1),n=Qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xc(o,r,e+1/3),this.g=xc(o,r,e),this.b=xc(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=qd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return mt.fromWorkingColorSpace(xn.copy(this),e),Math.round(Qt(xn.r*255,0,255))*65536+Math.round(Qt(xn.g*255,0,255))*256+Math.round(Qt(xn.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=yt){mt.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,s=xn.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(Vo);const n=fo(ts.h,Vo.h,t),s=fo(ts.s,Vo.s,t),r=fo(ts.l,Vo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new rt;rt.NAMES=qd;let um=0;class di extends zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=ni(),this.name="",this.blending=gr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ul,this.blendDst=fl,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=su,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ul&&(n.blendSrc=this.blendSrc),this.blendDst!==fl&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==su&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ln extends di{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new D,Go=new ye;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kl,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ui(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ui(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ui(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ui(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),e}}class Yd extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class $d extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let fm=0;const jn=new ot,_c=new Dt,Js=new D,Gn=new wi,Wr=new wi,an=new D;class Ht extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gd(e)?$d:Yd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Gn.min,Wr.min),Gn.expandByPoint(an),an.addVectors(Gn.max,Wr.max),Gn.expandByPoint(an)):(Gn.expandByPoint(Wr.min),Gn.expandByPoint(Wr.max))}Gn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)an.fromBufferAttribute(a,l),c&&(Js.fromBufferAttribute(e,l),an.add(Js)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new D,c[P]=new D;const l=new D,h=new D,u=new D,f=new ye,d=new ye,g=new ye,_=new D,m=new D;function p(P,M,b){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(N),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(N),a[P].add(_),a[M].add(_),a[b].add(_),c[P].add(m),c[M].add(m),c[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,M=v.length;P<M;++P){const b=v[P],N=b.start,V=b.count;for(let H=N,$=N+V;H<$;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new D,x=new D,E=new D,S=new D;function R(P){E.fromBufferAttribute(s,P),S.copy(E);const M=a[P];y.copy(M),y.sub(E.multiplyScalar(E.dot(M))).normalize(),x.crossVectors(S,M);const N=x.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,N)}for(let P=0,M=v.length;P<M;++P){const b=v[P],N=b.start,V=b.count;for(let H=N,$=N+V;H<$;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Sn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new ot,vs=new Ro,Wo=new Si,wu=new D,Xo=new D,qo=new D,Yo=new D,vc=new D,$o=new D,Su=new D,Ko=new D;class ve extends Dt{constructor(e=new Ht,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$o.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(vc.fromBufferAttribute(u,e),o?$o.addScaledVector(vc,h):$o.addScaledVector(vc.sub(t),h))}t.add($o)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(Wo.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Wo,wu)===null||vs.origin.distanceToSquared(wu)>(e.far-e.near)**2))&&(bu.copy(r).invert(),vs.copy(e.ray).applyMatrix4(bu),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,E=y;x<E;x+=3){const S=a.getX(x),R=a.getX(x+1),P=a.getX(x+2);s=jo(this,p,e,n,l,h,u,S,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=jo(this,o,e,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,E=y;x<E;x+=3){const S=x,R=x+1,P=x+2;s=jo(this,p,e,n,l,h,u,S,R,P),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;s=jo(this,o,e,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function dm(i,e,t,n,s,r,o,a){let c;if(e.side===wn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===qi,a),c===null)return null;Ko.copy(a),Ko.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ko);return l<t.near||l>t.far?null:{distance:l,point:Ko.clone(),object:i}}function jo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Xo),i.getVertexPosition(c,qo),i.getVertexPosition(l,Yo);const h=dm(i,e,t,n,Xo,qo,Yo,Su);if(h){const u=new D;ei.getBarycoord(Su,Xo,qo,Yo,u),s&&(h.uv=ei.getInterpolatedAttribute(s,a,c,l,u,new ye)),r&&(h.uv1=ei.getInterpolatedAttribute(r,a,c,l,u,new ye)),o&&(h.normal=ei.getInterpolatedAttribute(o,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new D,materialIndex:0};ei.getNormal(Xo,qo,Yo,f.normal),h.face=f,h.barycoord=u}return h}class en extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(_,m,p,v,y,x,E,S,R,P,M){const b=x/R,N=E/P,V=x/2,H=E/2,$=S/2,j=R+1,q=P+1;let ne=0,B=0;const ue=new D;for(let de=0;de<q;de++){const Ee=de*N-H;for(let ze=0;ze<j;ze++){const $e=ze*b-V;ue[_]=$e*v,ue[m]=Ee*y,ue[p]=$,l.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=S>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(ze/R),u.push(1-de/P),ne+=1}}for(let de=0;de<P;de++)for(let Ee=0;Ee<R;Ee++){const ze=f+Ee+j*de,$e=f+Ee+j*(de+1),Q=f+(Ee+1)+j*(de+1),me=f+(Ee+1)+j*de;c.push(ze,$e,me),c.push($e,Q,me),B+=6}a.addGroup(d,B,M),d+=B,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function An(i){const e={};for(let t=0;t<i.length;t++){const n=Ar(i[t]);for(const s in n)e[s]=n[s]}return e}function pm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const mm={clone:Ar,merge:An};var gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ms extends di{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=xm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=pm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class jd extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new D,Eu=new ye,Tu=new ye;class Cn extends jd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Eu,Tu),t.subVectors(Tu,Eu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,er=1;class _m extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(Qs,er,e,t);s.layers=this.layers,this.add(s);const r=new Cn(Qs,er,e,t);r.layers=this.layers,this.add(r);const o=new Cn(Qs,er,e,t);o.layers=this.layers,this.add(o);const a=new Cn(Qs,er,e,t);a.layers=this.layers,this.add(a);const c=new Cn(Qs,er,e,t);c.layers=this.layers,this.add(c);const l=new Cn(Qs,er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Zd extends tn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vm extends Os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Zd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new en(5,5,5),r=new ms({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:fs});r.uniforms.tEquirect.value=t;const o=new ve(s,r),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Yn),new _m(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const yc=new D,ym=new D,Mm=new lt;class Rs{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=yc.subVectors(n,t).cross(ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Mm.getNormalMatrix(e),s=this.coplanarPoint(yc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Si,Zo=new D;class yh{constructor(e=new Rs,t=new Rs,n=new Rs,s=new Rs,r=new Rs,o=new Rs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,m-d,x-p).normalize(),n[1].setComponents(c+r,f+l,m+d,x+p).normalize(),n[2].setComponents(c+o,f+h,m+g,x+v).normalize(),n[3].setComponents(c-o,f-h,m-g,x-v).normalize(),n[4].setComponents(c-a,f-u,m-_,x-y).normalize(),t===Gi)n[5].setComponents(c+a,f+u,m+_,x+y).normalize();else if(t===La)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Zo.x=s.normal.x>0?e.max.x:e.min.x,Zo.y=s.normal.y>0?e.max.y:e.min.y,Zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Jd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bm(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ut extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*f-o;for(let y=0;y<l;y++){const x=y*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),E=v+1+l*(p+1),S=v+1+l*p;d.push(y,x,S),d.push(x,E,S)}this.setIndex(d),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.widthSegments,e.heightSegments)}}var wm=`#ifdef USE_ALPHAHASH
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
#endif`,Em=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Am=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
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
#endif`,Pm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lm=`#ifdef USE_BATCHING
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
#endif`,Im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Om=`#ifdef USE_IRIDESCENCE
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
#endif`,km=`#ifdef USE_BUMPMAP
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
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qm=`#define PI 3.141592653589793
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
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$m=`vec3 transformedNormal = objectNormal;
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
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",eg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ig=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ag=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hg=`#ifdef USE_GRADIENTMAP
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
}`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pg=`uniform bool receiveShadow;
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
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yg=`PhysicalMaterial material;
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
#endif`,Mg=`struct PhysicalMaterial {
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
}`,bg=`
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ig=`#if defined( USE_POINTS_UV )
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
#endif`,Dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ng=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`#ifdef USE_MORPHTARGETS
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
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xg=`#ifdef USE_NORMALMAP
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
#endif`,qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ox=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ax=`float getShadowMask() {
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
}`,cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lx=`#ifdef USE_SKINNING
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
#endif`,hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ux=`#ifdef USE_SKINNING
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
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gx=`#ifdef USE_TRANSMISSION
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
#endif`,xx=`#ifdef USE_TRANSMISSION
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
#endif`,_x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
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
}`,Ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`#include <common>
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
}`,Cx=`#if DEPTH_PACKING == 3200
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
}`,Px=`#define DISTANCE
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
}`,Lx=`#define DISTANCE
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
}`,Ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
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
}`,Ux=`uniform vec3 diffuse;
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
}`,Ox=`#include <common>
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
}`,kx=`uniform vec3 diffuse;
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
}`,Fx=`#define LAMBERT
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
}`,Bx=`#define LAMBERT
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
}`,zx=`#define MATCAP
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
}`,Hx=`#define MATCAP
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
}`,Vx=`#define NORMAL
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
}`,Gx=`#define NORMAL
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
}`,Wx=`#define PHONG
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
}`,Xx=`#define PHONG
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
}`,qx=`#define STANDARD
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
}`,Yx=`#define STANDARD
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
}`,$x=`#define TOON
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
}`,Kx=`#define TOON
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
}`,jx=`uniform float size;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,Qx=`uniform vec3 color;
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
}`,e_=`uniform float rotation;
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
}`,t_=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:wm,alphahash_pars_fragment:Sm,alphamap_fragment:Em,alphamap_pars_fragment:Tm,alphatest_fragment:Am,alphatest_pars_fragment:Rm,aomap_fragment:Cm,aomap_pars_fragment:Pm,batching_pars_vertex:Lm,batching_vertex:Im,begin_vertex:Dm,beginnormal_vertex:Nm,bsdfs:Um,iridescence_fragment:Om,bumpmap_pars_fragment:km,clipping_planes_fragment:Fm,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:Hm,color_fragment:Vm,color_pars_fragment:Gm,color_pars_vertex:Wm,color_vertex:Xm,common:qm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:$m,displacementmap_pars_vertex:Km,displacementmap_vertex:jm,emissivemap_fragment:Zm,emissivemap_pars_fragment:Jm,colorspace_fragment:Qm,colorspace_pars_fragment:eg,envmap_fragment:tg,envmap_common_pars_fragment:ng,envmap_pars_fragment:ig,envmap_pars_vertex:sg,envmap_physical_pars_fragment:mg,envmap_vertex:rg,fog_vertex:og,fog_pars_vertex:ag,fog_fragment:cg,fog_pars_fragment:lg,gradientmap_pars_fragment:hg,lightmap_pars_fragment:ug,lights_lambert_fragment:fg,lights_lambert_pars_fragment:dg,lights_pars_begin:pg,lights_toon_fragment:gg,lights_toon_pars_fragment:xg,lights_phong_fragment:_g,lights_phong_pars_fragment:vg,lights_physical_fragment:yg,lights_physical_pars_fragment:Mg,lights_fragment_begin:bg,lights_fragment_maps:wg,lights_fragment_end:Sg,logdepthbuf_fragment:Eg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:Ag,logdepthbuf_vertex:Rg,map_fragment:Cg,map_pars_fragment:Pg,map_particle_fragment:Lg,map_particle_pars_fragment:Ig,metalnessmap_fragment:Dg,metalnessmap_pars_fragment:Ng,morphinstance_vertex:Ug,morphcolor_vertex:Og,morphnormal_vertex:kg,morphtarget_pars_vertex:Fg,morphtarget_vertex:Bg,normal_fragment_begin:zg,normal_fragment_maps:Hg,normal_pars_fragment:Vg,normal_pars_vertex:Gg,normal_vertex:Wg,normalmap_pars_fragment:Xg,clearcoat_normal_fragment_begin:qg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:$g,iridescence_pars_fragment:Kg,opaque_fragment:jg,packing:Zg,premultiplied_alpha_fragment:Jg,project_vertex:Qg,dithering_fragment:ex,dithering_pars_fragment:tx,roughnessmap_fragment:nx,roughnessmap_pars_fragment:ix,shadowmap_pars_fragment:sx,shadowmap_pars_vertex:rx,shadowmap_vertex:ox,shadowmask_pars_fragment:ax,skinbase_vertex:cx,skinning_pars_vertex:lx,skinning_vertex:hx,skinnormal_vertex:ux,specularmap_fragment:fx,specularmap_pars_fragment:dx,tonemapping_fragment:px,tonemapping_pars_fragment:mx,transmission_fragment:gx,transmission_pars_fragment:xx,uv_pars_fragment:_x,uv_pars_vertex:vx,uv_vertex:yx,worldpos_vertex:Mx,background_vert:bx,background_frag:wx,backgroundCube_vert:Sx,backgroundCube_frag:Ex,cube_vert:Tx,cube_frag:Ax,depth_vert:Rx,depth_frag:Cx,distanceRGBA_vert:Px,distanceRGBA_frag:Lx,equirect_vert:Ix,equirect_frag:Dx,linedashed_vert:Nx,linedashed_frag:Ux,meshbasic_vert:Ox,meshbasic_frag:kx,meshlambert_vert:Fx,meshlambert_frag:Bx,meshmatcap_vert:zx,meshmatcap_frag:Hx,meshnormal_vert:Vx,meshnormal_frag:Gx,meshphong_vert:Wx,meshphong_frag:Xx,meshphysical_vert:qx,meshphysical_frag:Yx,meshtoon_vert:$x,meshtoon_frag:Kx,points_vert:jx,points_frag:Zx,shadow_vert:Jx,shadow_frag:Qx,sprite_vert:e_,sprite_frag:t_},De={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Mi={basic:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new rt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:An([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:An([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new rt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:An([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:An([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:An([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:An([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:An([De.common,De.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:An([De.lights,De.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Mi.physical={uniforms:An([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Jo={r:0,b:0,g:0},Ms=new En,n_=new ot;function i_(i,e,t,n,s,r,o){const a=new rt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===za)?(h===void 0&&(h=new ve(new en(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:Ar(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ms.copy(y.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(n_.makeRotationFromEuler(Ms)),h.material.toneMapped=mt.getTransfer(x.colorSpace)!==Ct,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ve(new ut(2,2),new ms({name:"BackgroundMaterial",uniforms:Ar(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=mt.getTransfer(x.colorSpace)!==Ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(Jo,Kd(i)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function s_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(b,N,V,H,$){let j=!1;const q=u(H,V,N);r!==q&&(r=q,l(r.object)),j=d(b,H,V,$),j&&g(b,H,V,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(b,N,V,H),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function h(b){return i.deleteVertexArray(b)}function u(b,N,V){const H=V.wireframe===!0;let $=n[b.id];$===void 0&&($={},n[b.id]=$);let j=$[N.id];j===void 0&&(j={},$[N.id]=j);let q=j[H];return q===void 0&&(q=f(c()),j[H]=q),q}function f(b){const N=[],V=[],H=[];for(let $=0;$<t;$++)N[$]=0,V[$]=0,H[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:H,object:b,attributes:{},index:null}}function d(b,N,V,H){const $=r.attributes,j=N.attributes;let q=0;const ne=V.getAttributes();for(const B in ne)if(ne[B].location>=0){const de=$[B];let Ee=j[B];if(Ee===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(Ee=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(Ee=b.instanceColor)),de===void 0||de.attribute!==Ee||Ee&&de.data!==Ee.data)return!0;q++}return r.attributesNum!==q||r.index!==H}function g(b,N,V,H){const $={},j=N.attributes;let q=0;const ne=V.getAttributes();for(const B in ne)if(ne[B].location>=0){let de=j[B];de===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(de=b.instanceColor));const Ee={};Ee.attribute=de,de&&de.data&&(Ee.data=de.data),$[B]=Ee,q++}r.attributes=$,r.attributesNum=q,r.index=H}function _(){const b=r.newAttributes;for(let N=0,V=b.length;N<V;N++)b[N]=0}function m(b){p(b,0)}function p(b,N){const V=r.newAttributes,H=r.enabledAttributes,$=r.attributeDivisors;V[b]=1,H[b]===0&&(i.enableVertexAttribArray(b),H[b]=1),$[b]!==N&&(i.vertexAttribDivisor(b,N),$[b]=N)}function v(){const b=r.newAttributes,N=r.enabledAttributes;for(let V=0,H=N.length;V<H;V++)N[V]!==b[V]&&(i.disableVertexAttribArray(V),N[V]=0)}function y(b,N,V,H,$,j,q){q===!0?i.vertexAttribIPointer(b,N,V,$,j):i.vertexAttribPointer(b,N,V,H,$,j)}function x(b,N,V,H){_();const $=H.attributes,j=V.getAttributes(),q=N.defaultAttributeValues;for(const ne in j){const B=j[ne];if(B.location>=0){let ue=$[ne];if(ue===void 0&&(ne==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),ne==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor)),ue!==void 0){const de=ue.normalized,Ee=ue.itemSize,ze=e.get(ue);if(ze===void 0)continue;const $e=ze.buffer,Q=ze.type,me=ze.bytesPerElement,ge=Q===i.INT||Q===i.UNSIGNED_INT||ue.gpuType===uh;if(ue.isInterleavedBufferAttribute){const pe=ue.data,Ne=pe.stride,ke=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let Te=0;Te<B.locationSize;Te++)p(B.location+Te,pe.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Te=0;Te<B.locationSize;Te++)m(B.location+Te);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let Te=0;Te<B.locationSize;Te++)y(B.location+Te,Ee/B.locationSize,Q,de,Ne*me,(ke+Ee/B.locationSize*Te)*me,ge)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<B.locationSize;pe++)p(B.location+pe,ue.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<B.locationSize;pe++)m(B.location+pe);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let pe=0;pe<B.locationSize;pe++)y(B.location+pe,Ee/B.locationSize,Q,de,Ee*me,Ee/B.locationSize*pe*me,ge)}}else if(q!==void 0){const de=q[ne];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(B.location,de);break;case 3:i.vertexAttrib3fv(B.location,de);break;case 4:i.vertexAttrib4fv(B.location,de);break;default:i.vertexAttrib1fv(B.location,de)}}}}v()}function E(){P();for(const b in n){const N=n[b];for(const V in N){const H=N[V];for(const $ in H)h(H[$].object),delete H[$];delete N[V]}delete n[b]}}function S(b){if(n[b.id]===void 0)return;const N=n[b.id];for(const V in N){const H=N[V];for(const $ in H)h(H[$].object),delete H[$];delete N[V]}delete n[b.id]}function R(b){for(const N in n){const V=n[N];if(V[b.id]===void 0)continue;const H=V[b.id];for(const $ in H)h(H[$].object),delete H[$];delete V[b.id]}}function P(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function r_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function o_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ti&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==fi&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:E,maxSamples:S}}function a_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Rs,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=h(g,f,y,d);for(let E=0;E!==y;++E)x[E]=t[E];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function c_(i){let e=new WeakMap;function t(o,a){return a===yl?o.mapping=br:a===Ml&&(o.mapping=wr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yl||a===Ml)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new vm(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Mh extends jd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pr=4,Au=[.125,.215,.35,.446,.526,.582],Is=20,Mc=new Mh,Ru=new rt;let bc=null,wc=0,Sc=0,Ec=!1;const Cs=(1+Math.sqrt(5))/2,tr=1/Cs,Cu=[new D(-Cs,tr,0),new D(Cs,tr,0),new D(-tr,0,Cs),new D(tr,0,Cs),new D(0,Cs,-tr),new D(0,Cs,tr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,wc,Sc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,Qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ao,format:ti,colorSpace:Nn,depthBuffer:!1},s=Pu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(r)),this._blurMaterial=h_(r,e,t)}return s}_compileMaterial(e){const t=new ve(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,s){const a=new Cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Ru),h.toneMapping=ds,h.autoClear=!1;const d=new Ln({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new ve(new en,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Ru),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Qo(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===br||e.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Qo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Mc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cu[(s-r-1)%Cu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ve(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Is-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Is;m>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Is}`);const p=[];let v=0;for(let R=0;R<Is;++R){const P=R/_,M=Math.exp(-P*P/2);p.push(M),R===0?v+=M:R<m&&(v+=2*M)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const x=this._sizeLods[s],E=3*x*(s>y-pr?s-y+pr:0),S=4*(this._cubeSize-x);Qo(t,E,S,3*x,2*x),c.setRenderTarget(t),c.render(u,Mc)}}function l_(i){const e=[],t=[],n=[];let s=i;const r=i-pr+1+Au.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-pr?c=Au[o-i+pr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let S=0;S<d;S++){const R=S%3*2/3-1,P=S>2?0:-1,M=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(M,_*g*S),y.set(f,m*g*S);const b=[S,S,S,S,S,S];x.set(b,p*g*S)}const E=new Ht;E.setAttribute("position",new Sn(v,_)),E.setAttribute("uv",new Sn(y,m)),E.setAttribute("faceIndex",new Sn(x,p)),e.push(E),s>pr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Pu(i,e,t){const n=new Os(i,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function h_(i,e,t){const n=new Float32Array(Is),s=new D(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bh(),fragmentShader:`

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
	`}function u_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===yl||c===Ml,h=c===br||c===wr;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new jl(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new jl(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function f_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ao("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function d_(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let y=0,x=v.length;y<x;y+=3){const E=v[y+0],S=v[y+1],R=v[y+2];f.push(E,S,S,R,R,E)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const E=y+0,S=y+1,R=y+2;f.push(E,S,S,R,R,E)}}else return;const m=new(Gd(f)?$d:Yd)(f,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function p_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function m_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function g_(i,e,t){const n=new WeakMap,s=new Mt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let b=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let E=a.attributes.position.count*x,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*S*4*u),P=new Xd(R,E,S,u);P.type=fi,P.needsUpdate=!0;const M=x*4;for(let N=0;N<u;N++){const V=p[N],H=v[N],$=y[N],j=E*S*4*N;for(let q=0;q<V.count;q++){const ne=q*M;g===!0&&(s.fromBufferAttribute(V,q),R[j+ne+0]=s.x,R[j+ne+1]=s.y,R[j+ne+2]=s.z,R[j+ne+3]=0),_===!0&&(s.fromBufferAttribute(H,q),R[j+ne+4]=s.x,R[j+ne+5]=s.y,R[j+ne+6]=s.z,R[j+ne+7]=0),m===!0&&(s.fromBufferAttribute($,q),R[j+ne+8]=s.x,R[j+ne+9]=s.y,R[j+ne+10]=s.z,R[j+ne+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:P,size:new ye(E,S)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function x_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Qd extends tn{constructor(e,t,n,s,r,o,a,c,l,h=xr){if(h!==xr&&h!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xr&&(n=Us),n===void 0&&h===Er&&(n=Sr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:In,this.minFilter=c!==void 0?c:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ep=new tn,Du=new Qd(1,1),tp=new Xd,np=new im,ip=new Zd,Nu=[],Uu=[],Ou=new Float32Array(16),ku=new Float32Array(9),Fu=new Float32Array(4);function Dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Nu[s];if(r===void 0&&(r=new Float32Array(s),Nu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Va(i,e){let t=Uu[e];t===void 0&&(t=new Int32Array(e),Uu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function __(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function v_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function M_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function b_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Fu.set(n),i.uniformMatrix2fv(this.addr,!1,Fu),sn(t,n)}}function w_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;ku.set(n),i.uniformMatrix3fv(this.addr,!1,ku),sn(t,n)}}function S_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Ou.set(n),i.uniformMatrix4fv(this.addr,!1,Ou),sn(t,n)}}function E_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function T_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function A_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function R_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function C_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function P_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function L_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function I_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function D_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Du.compareFunction=Vd,r=Du):r=ep,t.setTexture2D(e||r,s)}function N_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||np,s)}function U_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ip,s)}function O_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tp,s)}function k_(i){switch(i){case 5126:return __;case 35664:return v_;case 35665:return y_;case 35666:return M_;case 35674:return b_;case 35675:return w_;case 35676:return S_;case 5124:case 35670:return E_;case 35667:case 35671:return T_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return P_;case 36295:return L_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return O_}}function F_(i,e){i.uniform1fv(this.addr,e)}function B_(i,e){const t=Dr(e,this.size,2);i.uniform2fv(this.addr,t)}function z_(i,e){const t=Dr(e,this.size,3);i.uniform3fv(this.addr,t)}function H_(i,e){const t=Dr(e,this.size,4);i.uniform4fv(this.addr,t)}function V_(i,e){const t=Dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function G_(i,e){const t=Dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function W_(i,e){const t=Dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function X_(i,e){i.uniform1iv(this.addr,e)}function q_(i,e){i.uniform2iv(this.addr,e)}function Y_(i,e){i.uniform3iv(this.addr,e)}function $_(i,e){i.uniform4iv(this.addr,e)}function K_(i,e){i.uniform1uiv(this.addr,e)}function j_(i,e){i.uniform2uiv(this.addr,e)}function Z_(i,e){i.uniform3uiv(this.addr,e)}function J_(i,e){i.uniform4uiv(this.addr,e)}function Q_(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ep,r[o])}function ev(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||np,r[o])}function tv(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||ip,r[o])}function nv(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||tp,r[o])}function iv(i){switch(i){case 5126:return F_;case 35664:return B_;case 35665:return z_;case 35666:return H_;case 35674:return V_;case 35675:return G_;case 35676:return W_;case 5124:case 35670:return X_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return $_;case 5125:return K_;case 36294:return j_;case 36295:return Z_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Q_;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}class sv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k_(t.type)}}class rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iv(t.type)}}class ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function Bu(i,e){i.seq.push(e),i.map[e.id]=e}function av(i,e,t){const n=i.name,s=n.length;for(Tc.lastIndex=0;;){const r=Tc.exec(n),o=Tc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bu(t,l===void 0?new sv(a,i,e):new rv(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new ov(a),Bu(t,u)),t=u}}}class Ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);av(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function zu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cv=37297;let lv=0;function hv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Hu=new lt;function uv(i){mt._getMatrix(Hu,mt.workingColorSpace,i);const e=`mat3( ${Hu.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Ha:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Vu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+hv(i.getShaderSource(e),o)}else return s}function fv(i,e){const t=uv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dv(i,e){let t;switch(e){case d0:t="Linear";break;case p0:t="Reinhard";break;case m0:t="Cineon";break;case Rd:t="ACESFilmic";break;case x0:t="AgX";break;case _0:t="Neutral";break;case g0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new D;function pv(){mt.getLuminanceCoefficients(ea);const i=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function gv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function co(i){return i!==""}function Gu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _v=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(i){return i.replace(_v,yv)}const vv=new Map;function yv(i,e){let t=ht[e];if(t===void 0){const n=vv.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xu(i){return i.replace(Mv,bv)}function bv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function wv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Td?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Sv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case br:case wr:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ev(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function Tv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ad:e="ENVMAP_BLENDING_MULTIPLY";break;case u0:e="ENVMAP_BLENDING_MIX";break;case f0:e="ENVMAP_BLENDING_ADD";break}return e}function Av(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=wv(t),l=Sv(t),h=Ev(t),u=Tv(t),f=Av(t),d=mv(t),g=gv(r),_=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),p.length>0&&(p+=`
`)):(m=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),p=[qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?ht.tonemapping_pars_fragment:"",t.toneMapping!==ds?dv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,fv("linearToOutputTexel",t.outputColorSpace),pv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=Zl(o),o=Gu(o,t),o=Wu(o,t),a=Zl(a),a=Gu(a,t),a=Wu(a,t),o=Xu(o),a=Xu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,E=zu(s,s.VERTEX_SHADER,y),S=zu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,E),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(N){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(E).trim(),$=s.getShaderInfoLog(S).trim();let j=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,S);else{const ne=Vu(s,E,"vertex"),B=Vu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+V+`
`+ne+`
`+B)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||$==="")&&(q=!1);q&&(N.diagnostics={runnable:j,programLog:V,vertexShader:{log:H,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(E),s.deleteShader(S),P=new Ra(s,_),M=xv(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,cv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=S,this}let Cv=0;class Pv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Lv(e),t.set(e,n)),n}}class Lv{constructor(e){this.id=Cv++,this.code=e,this.usedTimes=0}}function Iv(i,e,t,n,s,r,o){const a=new vh,c=new Pv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,b,N,V,H){const $=V.fog,j=H.geometry,q=M.isMeshStandardMaterial?V.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),B=ne&&ne.mapping===za?ne.image.height:null,ue=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ee=de!==void 0?de.length:0;let ze=0;j.morphAttributes.position!==void 0&&(ze=1),j.morphAttributes.normal!==void 0&&(ze=2),j.morphAttributes.color!==void 0&&(ze=3);let $e,Q,me,ge;if(ue){const _t=Mi[ue];$e=_t.vertexShader,Q=_t.fragmentShader}else $e=M.vertexShader,Q=M.fragmentShader,c.update(M),me=c.getVertexShaderID(M),ge=c.getFragmentShaderID(M);const pe=i.getRenderTarget(),Ne=i.state.buffers.depth.getReversed(),ke=H.isInstancedMesh===!0,Te=H.isBatchedMesh===!0,We=!!M.map,ae=!!M.matcap,xe=!!ne,O=!!M.aoMap,ce=!!M.lightMap,Z=!!M.bumpMap,he=!!M.normalMap,ie=!!M.displacementMap,Re=!!M.emissiveMap,Me=!!M.metalnessMap,I=!!M.roughnessMap,A=M.anisotropy>0,G=M.clearcoat>0,re=M.dispersion>0,fe=M.iridescence>0,le=M.sheen>0,Le=M.transmission>0,Ae=A&&!!M.anisotropyMap,Pe=G&&!!M.clearcoatMap,st=G&&!!M.clearcoatNormalMap,z=G&&!!M.clearcoatRoughnessMap,Se=fe&&!!M.iridescenceMap,Ie=fe&&!!M.iridescenceThicknessMap,Ve=le&&!!M.sheenColorMap,k=le&&!!M.sheenRoughnessMap,C=!!M.specularMap,F=!!M.specularColorMap,oe=!!M.specularIntensityMap,U=Le&&!!M.transmissionMap,_e=Le&&!!M.thicknessMap,Y=!!M.gradientMap,se=!!M.alphaMap,we=M.alphaTest>0,be=!!M.alphaHash,Qe=!!M.extensions;let zt=ds;M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(zt=i.toneMapping);const on={shaderID:ue,shaderType:M.type,shaderName:M.name,vertexShader:$e,fragmentShader:Q,defines:M.defines,customVertexShaderID:me,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Te,batchingColor:Te&&H._colorsTexture!==null,instancing:ke,instancingColor:ke&&H.instanceColor!==null,instancingMorph:ke&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Nn,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:ae,envMap:xe,envMapMode:xe&&ne.mapping,envMapCubeUVHeight:B,aoMap:O,lightMap:ce,bumpMap:Z,normalMap:he,displacementMap:f&&ie,emissiveMap:Re,normalMapObjectSpace:he&&M.normalMapType===S0,normalMapTangentSpace:he&&M.normalMapType===Hd,metalnessMap:Me,roughnessMap:I,anisotropy:A,anisotropyMap:Ae,clearcoat:G,clearcoatMap:Pe,clearcoatNormalMap:st,clearcoatRoughnessMap:z,dispersion:re,iridescence:fe,iridescenceMap:Se,iridescenceThicknessMap:Ie,sheen:le,sheenColorMap:Ve,sheenRoughnessMap:k,specularMap:C,specularColorMap:F,specularIntensityMap:oe,transmission:Le,transmissionMap:U,thicknessMap:_e,gradientMap:Y,opaque:M.transparent===!1&&M.blending===gr&&M.alphaToCoverage===!1,alphaMap:se,alphaTest:we,alphaHash:be,combine:M.combine,mapUv:We&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:ce&&_(M.lightMap.channel),bumpMapUv:Z&&_(M.bumpMap.channel),normalMapUv:he&&_(M.normalMap.channel),displacementMapUv:ie&&_(M.displacementMap.channel),emissiveMapUv:Re&&_(M.emissiveMap.channel),metalnessMapUv:Me&&_(M.metalnessMap.channel),roughnessMapUv:I&&_(M.roughnessMap.channel),anisotropyMapUv:Ae&&_(M.anisotropyMap.channel),clearcoatMapUv:Pe&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:st&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:z&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:k&&_(M.sheenRoughnessMap.channel),specularMapUv:C&&_(M.specularMap.channel),specularColorMapUv:F&&_(M.specularColorMap.channel),specularIntensityMapUv:oe&&_(M.specularIntensityMap.channel),transmissionMapUv:U&&_(M.transmissionMap.channel),thicknessMapUv:_e&&_(M.thicknessMap.channel),alphaMapUv:se&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(he||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&(We||se),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ne,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&mt.getTransfer(M.map.colorSpace)===Ct,decodeVideoTextureEmissive:Re&&M.emissiveMap.isVideoTexture===!0&&mt.getTransfer(M.emissiveMap.colorSpace)===Ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ot,flipSided:M.side===wn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Qe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&M.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return on.vertexUv1s=l.has(1),on.vertexUv2s=l.has(2),on.vertexUv3s=l.has(3),l.clear(),on}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)b.push(N),b.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(v(b,M),y(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const b=g[M.type];let N;if(b){const V=Mi[b];N=mm.clone(V.uniforms)}else N=M.uniforms;return N}function E(M,b){let N;for(let V=0,H=h.length;V<H;V++){const $=h[V];if($.cacheKey===b){N=$,++N.usedTimes;break}}return N===void 0&&(N=new Rv(i,b,M,r),h.push(N)),N}function S(M){if(--M.usedTimes===0){const b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function R(M){c.remove(M)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:E,releaseProgram:S,releaseShaderCache:R,programs:h,dispose:P}}function Dv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Nv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Yu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $u(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||Nv),n.length>1&&n.sort(f||Yu),s.length>1&&s.sort(f||Yu)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Uv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new $u,i.set(n,[o])):s>=r.length?(o=new $u,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ov(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new rt};break;case"SpotLight":t={position:new D,direction:new D,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function kv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Fv=0;function Bv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zv(i){const e=new Ov,t=kv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new ot,o=new ot;function a(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,E=0,S=0,R=0;l.sort(Bv);for(let M=0,b=l.length;M<b;M++){const N=l[M],V=N.color,H=N.intensity,$=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=V.r*H,u+=V.g*H,f+=V.b*H;else if(N.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(N.sh.coefficients[q],H);R++}else if(N.isDirectionalLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ne=N.shadow,B=t.get(N);B.shadowIntensity=ne.intensity,B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=N.shadow.matrix,v++}n.directional[d]=q,d++}else if(N.isSpotLight){const q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(V).multiplyScalar(H),q.distance=$,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,n.spot[_]=q;const ne=N.shadow;if(N.map&&(n.spotLightMap[E]=N.map,E++,ne.updateMatrices(N),N.castShadow&&S++),n.spotLightMatrix[_]=ne.matrix,N.castShadow){const B=t.get(N);B.shadowIntensity=ne.intensity,B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=j,x++}_++}else if(N.isRectAreaLight){const q=e.get(N);q.color.copy(V).multiplyScalar(H),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=q,m++}else if(N.isPointLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const ne=N.shadow,B=t.get(N);B.shadowIntensity=ne.intensity,B.shadowBias=ne.bias,B.shadowNormalBias=ne.normalBias,B.shadowRadius=ne.radius,B.shadowMapSize=ne.mapSize,B.shadowCameraNear=ne.camera.near,B.shadowCameraFar=ne.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=N.shadow.matrix,y++}n.point[g]=q,g++}else if(N.isHemisphereLight){const q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(H),q.groundColor.copy(N.groundColor).multiplyScalar(H),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==E||P.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+E-S,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,P.directionalLength=d,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=E,P.numLightProbes=R,n.version=Fv++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Ku(i){const e=new zv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Hv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ku(i),e.set(s,[a])):r>=o.length?(a=new Ku(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Vv extends di{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=b0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gv extends di{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xv=`uniform sampler2D shadow_pass;
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
}`;function qv(i,e,t){let n=new yh;const s=new ye,r=new ye,o=new Mt,a=new Vv({depthPacking:w0}),c=new Gv,l={},h=t.maxTextureSize,u={[qi]:wn,[wn]:qi,[Ot]:Ot},f=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Wv,fragmentShader:Xv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ve(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ed;let p=this.type;this.render=function(S,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),V=i.state;V.setBlending(fs),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=p!==ki&&this.type===ki,$=p===ki&&this.type!==ki;for(let j=0,q=S.length;j<q;j++){const ne=S[j],B=ne.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const ue=B.getFrameExtents();if(s.multiply(ue),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,B.mapSize.y=r.y)),B.map===null||H===!0||$===!0){const Ee=this.type!==ki?{minFilter:In,magFilter:In}:{};B.map!==null&&B.map.dispose(),B.map=new Os(s.x,s.y,Ee),B.map.texture.name=ne.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const de=B.getViewportCount();for(let Ee=0;Ee<de;Ee++){const ze=B.getViewport(Ee);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),V.viewport(o),B.updateMatrices(ne,Ee),n=B.getFrustum(),x(R,P,B.camera,ne,this.type)}B.isPointLightShadow!==!0&&this.type===ki&&v(B,P),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,N)};function v(S,R){const P=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Os(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,P,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,P,d,_,null)}function y(S,R,P,M){let b=null;const N=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)b=N;else if(b=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=b.uuid,H=R.uuid;let $=l[V];$===void 0&&($={},l[V]=$);let j=$[H];j===void 0&&(j=b.clone(),$[H]=j,R.addEventListener("dispose",E)),b=j}if(b.visible=R.visible,b.wireframe=R.wireframe,M===ki?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:u[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const V=i.properties.get(b);V.light=P}return b}function x(S,R,P,M,b){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===ki)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);const H=e.update(S),$=S.material;if(Array.isArray($)){const j=H.groups;for(let q=0,ne=j.length;q<ne;q++){const B=j[q],ue=$[B.materialIndex];if(ue&&ue.visible){const de=y(S,ue,M,b);S.onBeforeShadow(i,S,R,P,H,de,B),i.renderBufferDirect(P,null,H,de,S,B),S.onAfterShadow(i,S,R,P,H,de,B)}}}else if($.visible){const j=y(S,$,M,b);S.onBeforeShadow(i,S,R,P,H,j,null),i.renderBufferDirect(P,null,H,j,S,null),S.onAfterShadow(i,S,R,P,H,j,null)}}const V=S.children;for(let H=0,$=V.length;H<$;H++)x(V[H],R,P,M,b)}function E(S){S.target.removeEventListener("dispose",E);for(const P in l){const M=l[P],b=S.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const Yv={[dl]:pl,[ml]:_l,[gl]:vl,[Mr]:xl,[pl]:dl,[_l]:ml,[vl]:gl,[xl]:Mr};function $v(i,e){function t(){let U=!1;const _e=new Mt;let Y=null;const se=new Mt(0,0,0,0);return{setMask:function(we){Y!==we&&!U&&(i.colorMask(we,we,we,we),Y=we)},setLocked:function(we){U=we},setClear:function(we,be,Qe,zt,on){on===!0&&(we*=zt,be*=zt,Qe*=zt),_e.set(we,be,Qe,zt),se.equals(_e)===!1&&(i.clearColor(we,be,Qe,zt),se.copy(_e))},reset:function(){U=!1,Y=null,se.set(-1,0,0,0)}}}function n(){let U=!1,_e=!1,Y=null,se=null,we=null;return{setReversed:function(be){if(_e!==be){const Qe=e.get("EXT_clip_control");_e?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT);const zt=we;we=null,this.setClear(zt)}_e=be},getReversed:function(){return _e},setTest:function(be){be?pe(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(be){Y!==be&&!U&&(i.depthMask(be),Y=be)},setFunc:function(be){if(_e&&(be=Yv[be]),se!==be){switch(be){case dl:i.depthFunc(i.NEVER);break;case pl:i.depthFunc(i.ALWAYS);break;case ml:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case gl:i.depthFunc(i.EQUAL);break;case xl:i.depthFunc(i.GEQUAL);break;case _l:i.depthFunc(i.GREATER);break;case vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=be}},setLocked:function(be){U=be},setClear:function(be){we!==be&&(_e&&(be=1-be),i.clearDepth(be),we=be)},reset:function(){U=!1,Y=null,se=null,we=null,_e=!1}}}function s(){let U=!1,_e=null,Y=null,se=null,we=null,be=null,Qe=null,zt=null,on=null;return{setTest:function(_t){U||(_t?pe(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(_t){_e!==_t&&!U&&(i.stencilMask(_t),_e=_t)},setFunc:function(_t,ii,Ri){(Y!==_t||se!==ii||we!==Ri)&&(i.stencilFunc(_t,ii,Ri),Y=_t,se=ii,we=Ri)},setOp:function(_t,ii,Ri){(be!==_t||Qe!==ii||zt!==Ri)&&(i.stencilOp(_t,ii,Ri),be=_t,Qe=ii,zt=Ri)},setLocked:function(_t){U=_t},setClear:function(_t){on!==_t&&(i.clearStencil(_t),on=_t)},reset:function(){U=!1,_e=null,Y=null,se=null,we=null,be=null,Qe=null,zt=null,on=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,E=null,S=null,R=new rt(0,0,0),P=0,M=!1,b=null,N=null,V=null,H=null,$=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ne=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=ne>=1):B.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=ne>=2);let ue=null,de={};const Ee=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),$e=new Mt().fromArray(Ee),Q=new Mt().fromArray(ze);function me(U,_e,Y,se){const we=new Uint8Array(4),be=i.createTexture();i.bindTexture(U,be),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<Y;Qe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(_e,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(_e+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return be}const ge={};ge[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(Mr),Z(!1),he(Zh),pe(i.CULL_FACE),O(fs);function pe(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Ne(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function ke(U,_e){return u[U]!==_e?(i.bindFramebuffer(U,_e),u[U]=_e,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=_e),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=_e),!0):!1}function Te(U,_e){let Y=d,se=!1;if(U){Y=f.get(_e),Y===void 0&&(Y=[],f.set(_e,Y));const we=U.textures;if(Y.length!==we.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let be=0,Qe=we.length;be<Qe;be++)Y[be]=i.COLOR_ATTACHMENT0+be;Y.length=we.length,se=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,se=!0);se&&i.drawBuffers(Y)}function We(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const ae={[Ls]:i.FUNC_ADD,[$p]:i.FUNC_SUBTRACT,[Kp]:i.FUNC_REVERSE_SUBTRACT};ae[jp]=i.MIN,ae[Zp]=i.MAX;const xe={[Jp]:i.ZERO,[Qp]:i.ONE,[e0]:i.SRC_COLOR,[ul]:i.SRC_ALPHA,[o0]:i.SRC_ALPHA_SATURATE,[s0]:i.DST_COLOR,[n0]:i.DST_ALPHA,[t0]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[r0]:i.ONE_MINUS_DST_COLOR,[i0]:i.ONE_MINUS_DST_ALPHA,[a0]:i.CONSTANT_COLOR,[c0]:i.ONE_MINUS_CONSTANT_COLOR,[l0]:i.CONSTANT_ALPHA,[h0]:i.ONE_MINUS_CONSTANT_ALPHA};function O(U,_e,Y,se,we,be,Qe,zt,on,_t){if(U===fs){_===!0&&(Ne(i.BLEND),_=!1);return}if(_===!1&&(pe(i.BLEND),_=!0),U!==Yp){if(U!==m||_t!==M){if((p!==Ls||x!==Ls)&&(i.blendEquation(i.FUNC_ADD),p=Ls,x=Ls),_t)switch(U){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.ONE,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Qh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,y=null,E=null,S=null,R.set(0,0,0),P=0,m=U,M=_t}return}we=we||_e,be=be||Y,Qe=Qe||se,(_e!==p||we!==x)&&(i.blendEquationSeparate(ae[_e],ae[we]),p=_e,x=we),(Y!==v||se!==y||be!==E||Qe!==S)&&(i.blendFuncSeparate(xe[Y],xe[se],xe[be],xe[Qe]),v=Y,y=se,E=be,S=Qe),(zt.equals(R)===!1||on!==P)&&(i.blendColor(zt.r,zt.g,zt.b,on),R.copy(zt),P=on),m=U,M=!1}function ce(U,_e){U.side===Ot?Ne(i.CULL_FACE):pe(i.CULL_FACE);let Y=U.side===wn;_e&&(Y=!Y),Z(Y),U.blending===gr&&U.transparent===!1?O(fs):O(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const se=U.stencilWrite;a.setTest(se),se&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Re(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(U){b!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),b=U)}function he(U){U!==Xp?(pe(i.CULL_FACE),U!==N&&(U===Zh?i.cullFace(i.BACK):U===qp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),N=U}function ie(U){U!==V&&(q&&i.lineWidth(U),V=U)}function Re(U,_e,Y){U?(pe(i.POLYGON_OFFSET_FILL),(H!==_e||$!==Y)&&(i.polygonOffset(_e,Y),H=_e,$=Y)):Ne(i.POLYGON_OFFSET_FILL)}function Me(U){U?pe(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function I(U){U===void 0&&(U=i.TEXTURE0+j-1),ue!==U&&(i.activeTexture(U),ue=U)}function A(U,_e,Y){Y===void 0&&(ue===null?Y=i.TEXTURE0+j-1:Y=ue);let se=de[Y];se===void 0&&(se={type:void 0,texture:void 0},de[Y]=se),(se.type!==U||se.texture!==_e)&&(ue!==Y&&(i.activeTexture(Y),ue=Y),i.bindTexture(U,_e||ge[U]),se.type=U,se.texture=_e)}function G(){const U=de[ue];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(U){$e.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),$e.copy(U))}function k(U){Q.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function C(U,_e){let Y=l.get(_e);Y===void 0&&(Y=new WeakMap,l.set(_e,Y));let se=Y.get(U);se===void 0&&(se=i.getUniformBlockIndex(_e,U.name),Y.set(U,se))}function F(U,_e){const se=l.get(_e).get(U);c.get(_e)!==se&&(i.uniformBlockBinding(_e,se,U.__bindingPointIndex),c.set(_e,se))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,de={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,E=null,S=null,R=new rt(0,0,0),P=0,M=!1,b=null,N=null,V=null,H=null,$=null,$e.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:Ne,bindFramebuffer:ke,drawBuffers:Te,useProgram:We,setBlending:O,setMaterial:ce,setFlipSided:Z,setCullFace:he,setLineWidth:ie,setPolygonOffset:Re,setScissorTest:Me,activeTexture:I,bindTexture:A,unbindTexture:G,compressedTexImage2D:re,compressedTexImage3D:fe,texImage2D:Se,texImage3D:Ie,updateUBOMapping:C,uniformBlockBinding:F,texStorage2D:st,texStorage3D:z,texSubImage2D:le,texSubImage3D:Le,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Pe,scissor:Ve,viewport:k,reset:oe}}function ju(i,e,t,n){const s=Kv(n);switch(t){case Nd:return i*e;case Od:return i*e;case kd:return i*e*2;case ph:return i*e/s.components*s.byteLength;case mh:return i*e/s.components*s.byteLength;case Fd:return i*e*2/s.components*s.byteLength;case gh:return i*e*2/s.components*s.byteLength;case Ud:return i*e*3/s.components*s.byteLength;case ti:return i*e*4/s.components*s.byteLength;case xh:return i*e*4/s.components*s.byteLength;case wa:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wl:case El:return Math.max(i,16)*Math.max(e,8)/4;case bl:case Sl:return Math.max(i,8)*Math.max(e,8)/2;case Tl:case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case kl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Aa:case Gl:case Wl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bd:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ql:case Yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kv(i){switch(i){case Yi:case Ld:return{byteLength:1,components:1};case _o:case Id:case Ao:return{byteLength:2,components:1};case fh:case dh:return{byteLength:2,components:4};case Us:case uh:case fi:return{byteLength:4,components:1};case Dd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function jv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,A){return d?new OffscreenCanvas(I,A):Mo("canvas")}function _(I,A,G){let re=1;const fe=Me(I);if((fe.width>G||fe.height>G)&&(re=G/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const le=Math.floor(re*fe.width),Le=Math.floor(re*fe.height);u===void 0&&(u=g(le,Le));const Ae=A?g(le,Le):u;return Ae.width=le,Ae.height=Le,Ae.getContext("2d").drawImage(I,0,0,le,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+le+"x"+Le+")."),Ae}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){i.generateMipmap(I)}function v(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,A,G,re,fe=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let le=A;if(A===i.RED&&(G===i.FLOAT&&(le=i.R32F),G===i.HALF_FLOAT&&(le=i.R16F),G===i.UNSIGNED_BYTE&&(le=i.R8)),A===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.R8UI),G===i.UNSIGNED_SHORT&&(le=i.R16UI),G===i.UNSIGNED_INT&&(le=i.R32UI),G===i.BYTE&&(le=i.R8I),G===i.SHORT&&(le=i.R16I),G===i.INT&&(le=i.R32I)),A===i.RG&&(G===i.FLOAT&&(le=i.RG32F),G===i.HALF_FLOAT&&(le=i.RG16F),G===i.UNSIGNED_BYTE&&(le=i.RG8)),A===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RG8UI),G===i.UNSIGNED_SHORT&&(le=i.RG16UI),G===i.UNSIGNED_INT&&(le=i.RG32UI),G===i.BYTE&&(le=i.RG8I),G===i.SHORT&&(le=i.RG16I),G===i.INT&&(le=i.RG32I)),A===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RGB8UI),G===i.UNSIGNED_SHORT&&(le=i.RGB16UI),G===i.UNSIGNED_INT&&(le=i.RGB32UI),G===i.BYTE&&(le=i.RGB8I),G===i.SHORT&&(le=i.RGB16I),G===i.INT&&(le=i.RGB32I)),A===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),G===i.UNSIGNED_INT&&(le=i.RGBA32UI),G===i.BYTE&&(le=i.RGBA8I),G===i.SHORT&&(le=i.RGBA16I),G===i.INT&&(le=i.RGBA32I)),A===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),A===i.RGBA){const Le=fe?Ha:mt.getTransfer(re);G===i.FLOAT&&(le=i.RGBA32F),G===i.HALF_FLOAT&&(le=i.RGBA16F),G===i.UNSIGNED_BYTE&&(le=Le===Ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function x(I,A){let G;return I?A===null||A===Us||A===Sr?G=i.DEPTH24_STENCIL8:A===fi?G=i.DEPTH32F_STENCIL8:A===_o&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Us||A===Sr?G=i.DEPTH_COMPONENT24:A===fi?G=i.DEPTH_COMPONENT32F:A===_o&&(G=i.DEPTH_COMPONENT16),G}function E(I,A){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==In&&I.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function S(I){const A=I.target;A.removeEventListener("dispose",S),P(A),A.isVideoTexture&&h.delete(A)}function R(I){const A=I.target;A.removeEventListener("dispose",R),b(A)}function P(I){const A=n.get(I);if(A.__webglInit===void 0)return;const G=I.source,re=f.get(G);if(re){const fe=re[A.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&M(I),Object.keys(re).length===0&&f.delete(G)}n.remove(I)}function M(I){const A=n.get(I);i.deleteTexture(A.__webglTexture);const G=I.source,re=f.get(G);delete re[A.__cacheKey],o.memory.textures--}function b(I){const A=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(A.__webglFramebuffer[re]))for(let fe=0;fe<A.__webglFramebuffer[re].length;fe++)i.deleteFramebuffer(A.__webglFramebuffer[re][fe]);else i.deleteFramebuffer(A.__webglFramebuffer[re]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[re])}else{if(Array.isArray(A.__webglFramebuffer))for(let re=0;re<A.__webglFramebuffer.length;re++)i.deleteFramebuffer(A.__webglFramebuffer[re]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let re=0;re<A.__webglColorRenderbuffer.length;re++)A.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[re]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const G=I.textures;for(let re=0,fe=G.length;re<fe;re++){const le=n.get(G[re]);le.__webglTexture&&(i.deleteTexture(le.__webglTexture),o.memory.textures--),n.remove(G[re])}n.remove(I)}let N=0;function V(){N=0}function H(){const I=N;return I>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),N+=1,I}function $(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function j(I,A){const G=n.get(I);if(I.isVideoTexture&&ie(I),I.isRenderTargetTexture===!1&&I.version>0&&G.__version!==I.version){const re=I.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,I,A);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+A)}function q(I,A){const G=n.get(I);if(I.version>0&&G.__version!==I.version){Q(G,I,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+A)}function ne(I,A){const G=n.get(I);if(I.version>0&&G.__version!==I.version){Q(G,I,A);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+A)}function B(I,A){const G=n.get(I);if(I.version>0&&G.__version!==I.version){me(G,I,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+A)}const ue={[pi]:i.REPEAT,[hs]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},de={[In]:i.NEAREST,[Pd]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},Ee={[E0]:i.NEVER,[L0]:i.ALWAYS,[T0]:i.LESS,[Vd]:i.LEQUAL,[A0]:i.EQUAL,[P0]:i.GEQUAL,[R0]:i.GREATER,[C0]:i.NOTEQUAL};function ze(I,A){if(A.type===fi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Yn||A.magFilter===ba||A.magFilter===oo||A.magFilter===Vi||A.minFilter===Yn||A.minFilter===ba||A.minFilter===oo||A.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,ue[A.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,ue[A.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,ue[A.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,de[A.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,de[A.minFilter]),A.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===In||A.minFilter!==oo&&A.minFilter!==Vi||A.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function $e(I,A){let G=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",S));const re=A.source;let fe=f.get(re);fe===void 0&&(fe={},f.set(re,fe));const le=$(A);if(le!==I.__cacheKey){fe[le]===void 0&&(fe[le]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),fe[le].usedTimes++;const Le=fe[I.__cacheKey];Le!==void 0&&(fe[I.__cacheKey].usedTimes--,Le.usedTimes===0&&M(A)),I.__cacheKey=le,I.__webglTexture=fe[le].texture}return G}function Q(I,A,G){let re=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(re=i.TEXTURE_3D);const fe=$e(I,A),le=A.source;t.bindTexture(re,I.__webglTexture,i.TEXTURE0+G);const Le=n.get(le);if(le.version!==Le.__version||fe===!0){t.activeTexture(i.TEXTURE0+G);const Ae=mt.getPrimaries(mt.workingColorSpace),Pe=A.colorSpace===cs?null:mt.getPrimaries(A.colorSpace),st=A.colorSpace===cs||Ae===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let z=_(A.image,!1,s.maxTextureSize);z=Re(A,z);const Se=r.convert(A.format,A.colorSpace),Ie=r.convert(A.type);let Ve=y(A.internalFormat,Se,Ie,A.colorSpace,A.isVideoTexture);ze(re,A);let k;const C=A.mipmaps,F=A.isVideoTexture!==!0,oe=Le.__version===void 0||fe===!0,U=le.dataReady,_e=E(A,z);if(A.isDepthTexture)Ve=x(A.format===Er,A.type),oe&&(F?t.texStorage2D(i.TEXTURE_2D,1,Ve,z.width,z.height):t.texImage2D(i.TEXTURE_2D,0,Ve,z.width,z.height,0,Se,Ie,null));else if(A.isDataTexture)if(C.length>0){F&&oe&&t.texStorage2D(i.TEXTURE_2D,_e,Ve,C[0].width,C[0].height);for(let Y=0,se=C.length;Y<se;Y++)k=C[Y],F?U&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,k.width,k.height,Se,Ie,k.data):t.texImage2D(i.TEXTURE_2D,Y,Ve,k.width,k.height,0,Se,Ie,k.data);A.generateMipmaps=!1}else F?(oe&&t.texStorage2D(i.TEXTURE_2D,_e,Ve,z.width,z.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,z.width,z.height,Se,Ie,z.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,z.width,z.height,0,Se,Ie,z.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){F&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ve,C[0].width,C[0].height,z.depth);for(let Y=0,se=C.length;Y<se;Y++)if(k=C[Y],A.format!==ti)if(Se!==null)if(F){if(U)if(A.layerUpdates.size>0){const we=ju(k.width,k.height,A.format,A.type);for(const be of A.layerUpdates){const Qe=k.data.subarray(be*we/k.data.BYTES_PER_ELEMENT,(be+1)*we/k.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,be,k.width,k.height,1,Se,Qe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,k.width,k.height,z.depth,Se,k.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ve,k.width,k.height,z.depth,0,k.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,k.width,k.height,z.depth,Se,Ie,k.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ve,k.width,k.height,z.depth,0,Se,Ie,k.data)}else{F&&oe&&t.texStorage2D(i.TEXTURE_2D,_e,Ve,C[0].width,C[0].height);for(let Y=0,se=C.length;Y<se;Y++)k=C[Y],A.format!==ti?Se!==null?F?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,k.width,k.height,Se,k.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ve,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?U&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,k.width,k.height,Se,Ie,k.data):t.texImage2D(i.TEXTURE_2D,Y,Ve,k.width,k.height,0,Se,Ie,k.data)}else if(A.isDataArrayTexture)if(F){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,Ve,z.width,z.height,z.depth),U)if(A.layerUpdates.size>0){const Y=ju(z.width,z.height,A.format,A.type);for(const se of A.layerUpdates){const we=z.data.subarray(se*Y/z.data.BYTES_PER_ELEMENT,(se+1)*Y/z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,se,z.width,z.height,1,Se,Ie,we)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,Se,Ie,z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,z.width,z.height,z.depth,0,Se,Ie,z.data);else if(A.isData3DTexture)F?(oe&&t.texStorage3D(i.TEXTURE_3D,_e,Ve,z.width,z.height,z.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,Se,Ie,z.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,z.width,z.height,z.depth,0,Se,Ie,z.data);else if(A.isFramebufferTexture){if(oe)if(F)t.texStorage2D(i.TEXTURE_2D,_e,Ve,z.width,z.height);else{let Y=z.width,se=z.height;for(let we=0;we<_e;we++)t.texImage2D(i.TEXTURE_2D,we,Ve,Y,se,0,Se,Ie,null),Y>>=1,se>>=1}}else if(C.length>0){if(F&&oe){const Y=Me(C[0]);t.texStorage2D(i.TEXTURE_2D,_e,Ve,Y.width,Y.height)}for(let Y=0,se=C.length;Y<se;Y++)k=C[Y],F?U&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Se,Ie,k):t.texImage2D(i.TEXTURE_2D,Y,Ve,Se,Ie,k);A.generateMipmaps=!1}else if(F){if(oe){const Y=Me(z);t.texStorage2D(i.TEXTURE_2D,_e,Ve,Y.width,Y.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Ie,z)}else t.texImage2D(i.TEXTURE_2D,0,Ve,Se,Ie,z);m(A)&&p(re),Le.__version=le.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function me(I,A,G){if(A.image.length!==6)return;const re=$e(I,A),fe=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+G);const le=n.get(fe);if(fe.version!==le.__version||re===!0){t.activeTexture(i.TEXTURE0+G);const Le=mt.getPrimaries(mt.workingColorSpace),Ae=A.colorSpace===cs?null:mt.getPrimaries(A.colorSpace),Pe=A.colorSpace===cs||Le===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const st=A.isCompressedTexture||A.image[0].isCompressedTexture,z=A.image[0]&&A.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)!st&&!z?Se[se]=_(A.image[se],!0,s.maxCubemapSize):Se[se]=z?A.image[se].image:A.image[se],Se[se]=Re(A,Se[se]);const Ie=Se[0],Ve=r.convert(A.format,A.colorSpace),k=r.convert(A.type),C=y(A.internalFormat,Ve,k,A.colorSpace),F=A.isVideoTexture!==!0,oe=le.__version===void 0||re===!0,U=fe.dataReady;let _e=E(A,Ie);ze(i.TEXTURE_CUBE_MAP,A);let Y;if(st){F&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,C,Ie.width,Ie.height);for(let se=0;se<6;se++){Y=Se[se].mipmaps;for(let we=0;we<Y.length;we++){const be=Y[we];A.format!==ti?Ve!==null?F?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,be.width,be.height,Ve,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,C,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,0,0,be.width,be.height,Ve,k,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we,C,be.width,be.height,0,Ve,k,be.data)}}}else{if(Y=A.mipmaps,F&&oe){Y.length>0&&_e++;const se=Me(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,C,se.width,se.height)}for(let se=0;se<6;se++)if(z){F?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,Ve,k,Se[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,C,Se[se].width,Se[se].height,0,Ve,k,Se[se].data);for(let we=0;we<Y.length;we++){const Qe=Y[we].image[se].image;F?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Qe.width,Qe.height,Ve,k,Qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,C,Qe.width,Qe.height,0,Ve,k,Qe.data)}}else{F?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ve,k,Se[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,C,Ve,k,Se[se]);for(let we=0;we<Y.length;we++){const be=Y[we];F?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,0,0,Ve,k,be.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,we+1,C,Ve,k,be.image[se])}}}m(A)&&p(i.TEXTURE_CUBE_MAP),le.__version=fe.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ge(I,A,G,re,fe,le){const Le=r.convert(G.format,G.colorSpace),Ae=r.convert(G.type),Pe=y(G.internalFormat,Le,Ae,G.colorSpace),st=n.get(A),z=n.get(G);if(z.__renderTarget=A,!st.__hasExternalTextures){const Se=Math.max(1,A.width>>le),Ie=Math.max(1,A.height>>le);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,le,Pe,Se,Ie,A.depth,0,Le,Ae,null):t.texImage2D(fe,le,Pe,Se,Ie,0,Le,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),he(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,fe,z.__webglTexture,0,Z(A)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,fe,z.__webglTexture,le),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(I,A,G){if(i.bindRenderbuffer(i.RENDERBUFFER,I),A.depthBuffer){const re=A.depthTexture,fe=re&&re.isDepthTexture?re.type:null,le=x(A.stencilBuffer,fe),Le=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=Z(A);he(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,le,A.width,A.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,le,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,le,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,I)}else{const re=A.textures;for(let fe=0;fe<re.length;fe++){const le=re[fe],Le=r.convert(le.format,le.colorSpace),Ae=r.convert(le.type),Pe=y(le.internalFormat,Le,Ae,le.colorSpace),st=Z(A);G&&he(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Pe,A.width,A.height):he(A)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Pe,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const re=n.get(A.depthTexture);re.__renderTarget=A,(!re.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),j(A.depthTexture,0);const fe=re.__webglTexture,le=Z(A);if(A.depthTexture.format===xr)he(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,fe,0);else if(A.depthTexture.format===Er)he(A)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function ke(I){const A=n.get(I),G=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const re=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),re){const fe=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),A.__depthDisposeCallback=fe}A.__boundDepthTexture=re}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ne(A.__webglFramebuffer,I)}else if(G){A.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[re]),A.__webglDepthbuffer[re]===void 0)A.__webglDepthbuffer[re]=i.createRenderbuffer(),pe(A.__webglDepthbuffer[re],I,!1);else{const fe=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,le)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),pe(A.__webglDepthbuffer,I,!1);else{const re=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,fe),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,fe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(I,A,G){const re=n.get(I);A!==void 0&&ge(re.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ke(I)}function We(I){const A=I.texture,G=n.get(I),re=n.get(A);I.addEventListener("dispose",R);const fe=I.textures,le=I.isWebGLCubeRenderTarget===!0,Le=fe.length>1;if(Le||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=A.version,o.memory.textures++),le){G.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[Ae]=[];for(let Pe=0;Pe<A.mipmaps.length;Pe++)G.__webglFramebuffer[Ae][Pe]=i.createFramebuffer()}else G.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)G.__webglFramebuffer[Ae]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Le)for(let Ae=0,Pe=fe.length;Ae<Pe;Ae++){const st=n.get(fe[Ae]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&he(I)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Ae=0;Ae<fe.length;Ae++){const Pe=fe[Ae];G.__webglColorRenderbuffer[Ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Ae]);const st=r.convert(Pe.format,Pe.colorSpace),z=r.convert(Pe.type),Se=y(Pe.internalFormat,st,z,Pe.colorSpace,I.isXRRenderTarget===!0),Ie=Z(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Se,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,G.__webglColorRenderbuffer[Ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(G.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(le){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),ze(i.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let Pe=0;Pe<A.mipmaps.length;Pe++)ge(G.__webglFramebuffer[Ae][Pe],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Pe);else ge(G.__webglFramebuffer[Ae],I,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);m(A)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let Ae=0,Pe=fe.length;Ae<Pe;Ae++){const st=fe[Ae],z=n.get(st);t.bindTexture(i.TEXTURE_2D,z.__webglTexture),ze(i.TEXTURE_2D,st),ge(G.__webglFramebuffer,I,st,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,0),m(st)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ae,re.__webglTexture),ze(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let Pe=0;Pe<A.mipmaps.length;Pe++)ge(G.__webglFramebuffer[Pe],I,A,i.COLOR_ATTACHMENT0,Ae,Pe);else ge(G.__webglFramebuffer,I,A,i.COLOR_ATTACHMENT0,Ae,0);m(A)&&p(Ae),t.unbindTexture()}I.depthBuffer&&ke(I)}function ae(I){const A=I.textures;for(let G=0,re=A.length;G<re;G++){const fe=A[G];if(m(fe)){const le=v(I),Le=n.get(fe).__webglTexture;t.bindTexture(le,Le),p(le),t.unbindTexture()}}}const xe=[],O=[];function ce(I){if(I.samples>0){if(he(I)===!1){const A=I.textures,G=I.width,re=I.height;let fe=i.COLOR_BUFFER_BIT;const le=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(I),Ae=A.length>1;if(Ae)for(let Pe=0;Pe<A.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Pe=0;Pe<A.length;Pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]);const st=n.get(A[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,st,0)}i.blitFramebuffer(0,0,G,re,0,0,G,re,fe,i.NEAREST),c===!0&&(xe.length=0,O.length=0,xe.push(i.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(xe.push(le),O.push(le),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ae)for(let Pe=0;Pe<A.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]);const st=n.get(A[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const A=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function Z(I){return Math.min(s.maxSamples,I.samples)}function he(I){const A=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ie(I){const A=o.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function Re(I,A){const G=I.colorSpace,re=I.format,fe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||G!==Nn&&G!==cs&&(mt.getTransfer(G)===Ct?(re!==ti||fe!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}function Me(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=ne,this.setTextureCube=B,this.rebindTextures=Te,this.setupRenderTarget=We,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=he}function Zv(i,e){function t(n,s=cs){let r;const o=mt.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===fh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ld)return i.BYTE;if(n===Id)return i.SHORT;if(n===_o)return i.UNSIGNED_SHORT;if(n===uh)return i.INT;if(n===Us)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===Ao)return i.HALF_FLOAT;if(n===Nd)return i.ALPHA;if(n===Ud)return i.RGB;if(n===ti)return i.RGBA;if(n===Od)return i.LUMINANCE;if(n===kd)return i.LUMINANCE_ALPHA;if(n===xr)return i.DEPTH_COMPONENT;if(n===Er)return i.DEPTH_STENCIL;if(n===ph)return i.RED;if(n===mh)return i.RED_INTEGER;if(n===Fd)return i.RG;if(n===gh)return i.RG_INTEGER;if(n===xh)return i.RGBA_INTEGER;if(n===wa||n===Sa||n===Ea||n===Ta)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bl||n===wl||n===Sl||n===El)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tl||n===Al||n===Rl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tl||n===Al)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Rl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cl||n===Pl||n===Ll||n===Il||n===Dl||n===Nl||n===Ul||n===Ol||n===kl||n===Fl||n===Bl||n===zl||n===Hl||n===Vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ll)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Il)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ul)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ol)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===kl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vl)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===Gl||n===Wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Aa)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bd||n===Xl||n===ql||n===Yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Jv extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nt extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qv={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qv)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const e1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t1=`
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

}`;class n1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new tn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ms({vertexShader:e1,fragmentShader:t1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new ut(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class i1 extends zs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new n1,m=t.getContextAttributes();let p=null,v=null;const y=[],x=[],E=new ye;let S=null;const R=new Cn;R.viewport=new Mt;const P=new Cn;P.viewport=new Mt;const M=[R,P],b=new Jv;let N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=y[Q];return me===void 0&&(me=new Ac,y[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=y[Q];return me===void 0&&(me=new Ac,y[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=y[Q];return me===void 0&&(me=new Ac,y[Q]=me),me.getHandSpace()};function H(Q){const me=x.indexOf(Q.inputSource);if(me===-1)return;const ge=y[me];ge!==void 0&&(ge.update(Q.inputSource,Q.frame,l||o),ge.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",j);for(let Q=0;Q<y.length;Q++){const me=x[Q];me!==null&&(x[Q]=null,y[Q].disconnect(me))}N=null,V=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",$),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0){const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Os(d.framebufferWidth,d.framebufferHeight,{format:ti,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let me=null,ge=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=m.stencil?Er:xr,ge=m.stencil?Sr:Us);const Ne={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Os(f.textureWidth,f.textureHeight,{format:ti,type:Yi,depthTexture:new Qd(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(Q){for(let me=0;me<Q.removed.length;me++){const ge=Q.removed[me],pe=x.indexOf(ge);pe>=0&&(x[pe]=null,y[pe].disconnect(ge))}for(let me=0;me<Q.added.length;me++){const ge=Q.added[me];let pe=x.indexOf(ge);if(pe===-1){for(let ke=0;ke<y.length;ke++)if(ke>=x.length){x.push(ge),pe=ke;break}else if(x[ke]===null){x[ke]=ge,pe=ke;break}if(pe===-1)break}const Ne=y[pe];Ne&&Ne.connect(ge)}}const q=new D,ne=new D;function B(Q,me,ge){q.setFromMatrixPosition(me.matrixWorld),ne.setFromMatrixPosition(ge.matrixWorld);const pe=q.distanceTo(ne),Ne=me.projectionMatrix.elements,ke=ge.projectionMatrix.elements,Te=Ne[14]/(Ne[10]-1),We=Ne[14]/(Ne[10]+1),ae=(Ne[9]+1)/Ne[5],xe=(Ne[9]-1)/Ne[5],O=(Ne[8]-1)/Ne[0],ce=(ke[8]+1)/ke[0],Z=Te*O,he=Te*ce,ie=pe/(-O+ce),Re=ie*-O;if(me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Re),Q.translateZ(ie),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ne[10]===-1)Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Me=Te+ie,I=We+ie,A=Z-Re,G=he+(pe-Re),re=ae*We/I*Me,fe=xe*We/I*Me;Q.projectionMatrix.makePerspective(A,G,re,fe,Me,I),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let me=Q.near,ge=Q.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(ge=_.depthFar)),b.near=P.near=R.near=me,b.far=P.far=R.far=ge,(N!==b.near||V!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),N=b.near,V=b.far),R.layers.mask=Q.layers.mask|2,P.layers.mask=Q.layers.mask|4,b.layers.mask=R.layers.mask|P.layers.mask;const pe=Q.parent,Ne=b.cameras;ue(b,pe);for(let ke=0;ke<Ne.length;ke++)ue(Ne[ke],pe);Ne.length===2?B(b,R,P):b.projectionMatrix.copy(R.projectionMatrix),de(Q,b,pe)};function de(Q,me,ge){ge===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(ge.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Tr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Ee=null;function ze(Q,me){if(h=me.getViewerPose(l||o),g=me,h!==null){const ge=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let pe=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,pe=!0);for(let ke=0;ke<ge.length;ke++){const Te=ge[ke];let We=null;if(d!==null)We=d.getViewport(Te);else{const xe=u.getViewSubImage(f,Te);We=xe.viewport,ke===0&&(e.setRenderTargetTextures(v,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(v))}let ae=M[ke];ae===void 0&&(ae=new Cn,ae.layers.enable(ke),ae.viewport=new Mt,M[ke]=ae),ae.matrix.fromArray(Te.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Te.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(We.x,We.y,We.width,We.height),ke===0&&(b.matrix.copy(ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),pe===!0&&b.cameras.push(ae)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const ke=u.getDepthInformation(ge[0]);ke&&ke.isValid&&ke.texture&&_.init(e,ke,s.renderState)}}for(let ge=0;ge<y.length;ge++){const pe=x[ge],Ne=y[ge];pe!==null&&Ne!==void 0&&Ne.update(pe,me,l||o)}Ee&&Ee(Q,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),g=null}const $e=new Jd;$e.setAnimationLoop(ze),this.setAnimationLoop=function(Q){Ee=Q},this.dispose=function(){}}}const bs=new En,s1=new ot;function r1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,bs.copy(x),bs.x*=-1,bs.y*=-1,bs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),m.envMapRotation.value.setFromMatrix4(s1.makeRotationFromEuler(bs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function o1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const E=y.program;n.updateUBOMapping(v,E);const S=e.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function h(v){const y=u();v.__bindingPointIndex=y;const x=i.createBuffer(),E=v.__size,S=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,E,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],x=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,R=x.length;S<R;S++){const P=Array.isArray(x[S])?x[S]:[x[S]];for(let M=0,b=P.length;M<b;M++){const N=P[M];if(d(N,S,M,E)===!0){const V=N.__offset,H=Array.isArray(N.value)?N.value:[N.value];let $=0;for(let j=0;j<H.length;j++){const q=H[j],ne=_(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,V+$,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,$),$+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,x,E){const S=v.value,R=y+"_"+x;if(E[R]===void 0)return typeof S=="number"||typeof S=="boolean"?E[R]=S:E[R]=S.clone(),!0;{const P=E[R];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return E[R]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(v){const y=v.uniforms;let x=0;const E=16;for(let R=0,P=y.length;R<P;R++){const M=Array.isArray(y[R])?y[R]:[y[R]];for(let b=0,N=M.length;b<N;b++){const V=M[b],H=Array.isArray(V.value)?V.value:[V.value];for(let $=0,j=H.length;$<j;$++){const q=H[$],ne=_(q),B=x%E,ue=B%ne.boundary,de=B+ue;x+=ue,de!==0&&E-de<ne.storage&&(x+=E-de),V.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=ne.storage}}}const S=x%E;return S>0&&(x+=E-S),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class a1{constructor(e={}){const{canvas:t=K0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=ds,this.toneMappingExposure=1;const x=this;let E=!1,S=0,R=0,P=null,M=-1,b=null;const N=new Mt,V=new Mt;let H=null;const $=new rt(0);let j=0,q=t.width,ne=t.height,B=1,ue=null,de=null;const Ee=new Mt(0,0,q,ne),ze=new Mt(0,0,q,ne);let $e=!1;const Q=new yh;let me=!1,ge=!1;const pe=new ot,Ne=new ot,ke=new D,Te=new Mt,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function xe(){return P===null?B:1}let O=n;function ce(L,W){return t.getContext(L,W)}try{const L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hh}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",be,!1),O===null){const W="webgl2";if(O=ce(W,L),O===null)throw ce(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Z,he,ie,Re,Me,I,A,G,re,fe,le,Le,Ae,Pe,st,z,Se,Ie,Ve,k,C,F,oe,U;function _e(){Z=new f_(O),Z.init(),F=new Zv(O,Z),he=new o_(O,Z,e,F),ie=new $v(O,Z),he.reverseDepthBuffer&&f&&ie.buffers.depth.setReversed(!0),Re=new m_(O),Me=new Dv,I=new jv(O,Z,ie,Me,he,F,Re),A=new c_(x),G=new u_(x),re=new bm(O),oe=new s_(O,re),fe=new d_(O,re,Re,oe),le=new x_(O,fe,re,Re),Ve=new g_(O,he,I),z=new a_(Me),Le=new Iv(x,A,G,Z,he,oe,z),Ae=new r1(x,Me),Pe=new Uv,st=new Hv(Z),Ie=new i_(x,A,G,ie,le,d,c),Se=new qv(x,le,he),U=new o1(O,Re,he,ie),k=new r_(O,Z,Re),C=new p_(O,Z,Re),Re.programs=Le.programs,x.capabilities=he,x.extensions=Z,x.properties=Me,x.renderLists=Pe,x.shadowMap=Se,x.state=ie,x.info=Re}_e();const Y=new i1(x,O);this.xr=Y,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const L=Z.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Z.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(L){L!==void 0&&(B=L,this.setSize(q,ne,!1))},this.getSize=function(L){return L.set(q,ne)},this.setSize=function(L,W,J=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,ne=W,t.width=Math.floor(L*B),t.height=Math.floor(W*B),J===!0&&(t.style.width=L+"px",t.style.height=W+"px"),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set(q*B,ne*B).floor()},this.setDrawingBufferSize=function(L,W,J){q=L,ne=W,B=J,t.width=Math.floor(L*J),t.height=Math.floor(W*J),this.setViewport(0,0,L,W)},this.getCurrentViewport=function(L){return L.copy(N)},this.getViewport=function(L){return L.copy(Ee)},this.setViewport=function(L,W,J,ee){L.isVector4?Ee.set(L.x,L.y,L.z,L.w):Ee.set(L,W,J,ee),ie.viewport(N.copy(Ee).multiplyScalar(B).round())},this.getScissor=function(L){return L.copy(ze)},this.setScissor=function(L,W,J,ee){L.isVector4?ze.set(L.x,L.y,L.z,L.w):ze.set(L,W,J,ee),ie.scissor(V.copy(ze).multiplyScalar(B).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(L){ie.setScissorTest($e=L)},this.setOpaqueSort=function(L){ue=L},this.setTransparentSort=function(L){de=L},this.getClearColor=function(L){return L.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(L=!0,W=!0,J=!0){let ee=0;if(L){let X=!1;if(P!==null){const Ce=P.texture.format;X=Ce===xh||Ce===gh||Ce===mh}if(X){const Ce=P.texture.type,Oe=Ce===Yi||Ce===Us||Ce===_o||Ce===Sr||Ce===fh||Ce===dh,Xe=Ie.getClearColor(),qe=Ie.getClearAlpha(),at=Xe.r,ct=Xe.g,Ye=Xe.b;Oe?(g[0]=at,g[1]=ct,g[2]=Ye,g[3]=qe,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=at,_[1]=ct,_[2]=Ye,_[3]=qe,O.clearBufferiv(O.COLOR,0,_))}else ee|=O.COLOR_BUFFER_BIT}W&&(ee|=O.DEPTH_BUFFER_BIT),J&&(ee|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Pe.dispose(),st.dispose(),Me.dispose(),A.dispose(),G.dispose(),le.dispose(),oe.dispose(),U.dispose(),Le.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Gh),Y.removeEventListener("sessionend",Wh),gs.stop()};function se(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const L=Re.autoReset,W=Se.enabled,J=Se.autoUpdate,ee=Se.needsUpdate,X=Se.type;_e(),Re.autoReset=L,Se.enabled=W,Se.autoUpdate=J,Se.needsUpdate=ee,Se.type=X}function be(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Qe(L){const W=L.target;W.removeEventListener("dispose",Qe),zt(W)}function zt(L){on(L),Me.remove(L)}function on(L){const W=Me.get(L).programs;W!==void 0&&(W.forEach(function(J){Le.releaseProgram(J)}),L.isShaderMaterial&&Le.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,J,ee,X,Ce){W===null&&(W=We);const Oe=X.isMesh&&X.matrixWorld.determinant()<0,Xe=Vp(L,W,J,ee,X);ie.setMaterial(ee,Oe);let qe=J.index,at=1;if(ee.wireframe===!0){if(qe=fe.getWireframeAttribute(J),qe===void 0)return;at=2}const ct=J.drawRange,Ye=J.attributes.position;let xt=ct.start*at,Nt=(ct.start+ct.count)*at;Ce!==null&&(xt=Math.max(xt,Ce.start*at),Nt=Math.min(Nt,(Ce.start+Ce.count)*at)),qe!==null?(xt=Math.max(xt,0),Nt=Math.min(Nt,qe.count)):Ye!=null&&(xt=Math.max(xt,0),Nt=Math.min(Nt,Ye.count));const kt=Nt-xt;if(kt<0||kt===1/0)return;oe.setup(X,ee,Xe,J,qe);let kn,bt=k;if(qe!==null&&(kn=re.get(qe),bt=C,bt.setIndex(kn)),X.isMesh)ee.wireframe===!0?(ie.setLineWidth(ee.wireframeLinewidth*xe()),bt.setMode(O.LINES)):bt.setMode(O.TRIANGLES);else if(X.isLine){let je=ee.linewidth;je===void 0&&(je=1),ie.setLineWidth(je*xe()),X.isLineSegments?bt.setMode(O.LINES):X.isLineLoop?bt.setMode(O.LINE_LOOP):bt.setMode(O.LINE_STRIP)}else X.isPoints?bt.setMode(O.POINTS):X.isSprite&&bt.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)bt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))bt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const je=X._multiDrawStarts,Ci=X._multiDrawCounts,wt=X._multiDrawCount,si=qe?re.get(qe).bytesPerElement:1,Hs=Me.get(ee).currentProgram.getUniforms();for(let Hn=0;Hn<wt;Hn++)Hs.setValue(O,"_gl_DrawID",Hn),bt.render(je[Hn]/si,Ci[Hn])}else if(X.isInstancedMesh)bt.renderInstances(xt,kt,X.count);else if(J.isInstancedBufferGeometry){const je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ci=Math.min(J.instanceCount,je);bt.renderInstances(xt,kt,Ci)}else bt.render(xt,kt)};function _t(L,W,J){L.transparent===!0&&L.side===Ot&&L.forceSinglePass===!1?(L.side=wn,L.needsUpdate=!0,No(L,W,J),L.side=qi,L.needsUpdate=!0,No(L,W,J),L.side=Ot):No(L,W,J)}this.compile=function(L,W,J=null){J===null&&(J=L),p=st.get(J),p.init(W),y.push(p),J.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),L!==J&&L.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const ee=new Set;return L.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ce=X.material;if(Ce)if(Array.isArray(Ce))for(let Oe=0;Oe<Ce.length;Oe++){const Xe=Ce[Oe];_t(Xe,J,X),ee.add(Xe)}else _t(Ce,J,X),ee.add(Ce)}),y.pop(),p=null,ee},this.compileAsync=function(L,W,J=null){const ee=this.compile(L,W,J);return new Promise(X=>{function Ce(){if(ee.forEach(function(Oe){Me.get(Oe).currentProgram.isReady()&&ee.delete(Oe)}),ee.size===0){X(L);return}setTimeout(Ce,10)}Z.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let ii=null;function Ri(L){ii&&ii(L)}function Gh(){gs.stop()}function Wh(){gs.start()}const gs=new Jd;gs.setAnimationLoop(Ri),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(L){ii=L,Y.setAnimationLoop(L),L===null?gs.stop():gs.start()},Y.addEventListener("sessionstart",Gh),Y.addEventListener("sessionend",Wh),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(W),W=Y.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,W,P),p=st.get(L,y.length),p.init(W),y.push(p),Ne.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Q.setFromProjectionMatrix(Ne),ge=this.localClippingEnabled,me=z.init(this.clippingPlanes,ge),m=Pe.get(L,v.length),m.init(),v.push(m),Y.enabled===!0&&Y.isPresenting===!0){const Ce=x.xr.getDepthSensingMesh();Ce!==null&&Qa(Ce,W,-1/0,x.sortObjects)}Qa(L,W,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(ue,de),ae=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ae&&Ie.addToRenderList(m,L),this.info.render.frame++,me===!0&&z.beginShadows();const J=p.state.shadowsArray;Se.render(J,L,W),me===!0&&z.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){const Ce=W.cameras;if(X.length>0)for(let Oe=0,Xe=Ce.length;Oe<Xe;Oe++){const qe=Ce[Oe];qh(ee,X,L,qe)}ae&&Ie.render(L);for(let Oe=0,Xe=Ce.length;Oe<Xe;Oe++){const qe=Ce[Oe];Xh(m,L,qe,qe.viewport)}}else X.length>0&&qh(ee,X,L,W),ae&&Ie.render(L),Xh(m,L,W);P!==null&&(I.updateMultisampleRenderTarget(P),I.updateRenderTargetMipmap(P)),L.isScene===!0&&L.onAfterRender(x,L,W),oe.resetDefaultState(),M=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],me===!0&&z.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Qa(L,W,J,ee){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)J=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Q.intersectsSprite(L)){ee&&Te.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ne);const Oe=le.update(L),Xe=L.material;Xe.visible&&m.push(L,Oe,Xe,J,Te.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Q.intersectsObject(L))){const Oe=le.update(L),Xe=L.material;if(ee&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Te.copy(L.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Te.copy(Oe.boundingSphere.center)),Te.applyMatrix4(L.matrixWorld).applyMatrix4(Ne)),Array.isArray(Xe)){const qe=Oe.groups;for(let at=0,ct=qe.length;at<ct;at++){const Ye=qe[at],xt=Xe[Ye.materialIndex];xt&&xt.visible&&m.push(L,Oe,xt,J,Te.z,Ye)}}else Xe.visible&&m.push(L,Oe,Xe,J,Te.z,null)}}const Ce=L.children;for(let Oe=0,Xe=Ce.length;Oe<Xe;Oe++)Qa(Ce[Oe],W,J,ee)}function Xh(L,W,J,ee){const X=L.opaque,Ce=L.transmissive,Oe=L.transparent;p.setupLightsView(J),me===!0&&z.setGlobalState(x.clippingPlanes,J),ee&&ie.viewport(N.copy(ee)),X.length>0&&Do(X,W,J),Ce.length>0&&Do(Ce,W,J),Oe.length>0&&Do(Oe,W,J),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function qh(L,W,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new Os(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Ao:Yi,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const Ce=p.state.transmissionRenderTarget[ee.id],Oe=ee.viewport||N;Ce.setSize(Oe.z,Oe.w);const Xe=x.getRenderTarget();x.setRenderTarget(Ce),x.getClearColor($),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),ae&&Ie.render(J);const qe=x.toneMapping;x.toneMapping=ds;const at=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),me===!0&&z.setGlobalState(x.clippingPlanes,ee),Do(L,J,ee),I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce),Z.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Ye=0,xt=W.length;Ye<xt;Ye++){const Nt=W[Ye],kt=Nt.object,kn=Nt.geometry,bt=Nt.material,je=Nt.group;if(bt.side===Ot&&kt.layers.test(ee.layers)){const Ci=bt.side;bt.side=wn,bt.needsUpdate=!0,Yh(kt,J,ee,kn,bt,je),bt.side=Ci,bt.needsUpdate=!0,ct=!0}}ct===!0&&(I.updateMultisampleRenderTarget(Ce),I.updateRenderTargetMipmap(Ce))}x.setRenderTarget(Xe),x.setClearColor($,j),at!==void 0&&(ee.viewport=at),x.toneMapping=qe}function Do(L,W,J){const ee=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Ce=L.length;X<Ce;X++){const Oe=L[X],Xe=Oe.object,qe=Oe.geometry,at=ee===null?Oe.material:ee,ct=Oe.group;Xe.layers.test(J.layers)&&Yh(Xe,W,J,qe,at,ct)}}function Yh(L,W,J,ee,X,Ce){L.onBeforeRender(x,W,J,ee,X,Ce),L.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),X.onBeforeRender(x,W,J,ee,L,Ce),X.transparent===!0&&X.side===Ot&&X.forceSinglePass===!1?(X.side=wn,X.needsUpdate=!0,x.renderBufferDirect(J,W,ee,X,L,Ce),X.side=qi,X.needsUpdate=!0,x.renderBufferDirect(J,W,ee,X,L,Ce),X.side=Ot):x.renderBufferDirect(J,W,ee,X,L,Ce),L.onAfterRender(x,W,J,ee,X,Ce)}function No(L,W,J){W.isScene!==!0&&(W=We);const ee=Me.get(L),X=p.state.lights,Ce=p.state.shadowsArray,Oe=X.state.version,Xe=Le.getParameters(L,X.state,Ce,W,J),qe=Le.getProgramCacheKey(Xe);let at=ee.programs;ee.environment=L.isMeshStandardMaterial?W.environment:null,ee.fog=W.fog,ee.envMap=(L.isMeshStandardMaterial?G:A).get(L.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,at===void 0&&(L.addEventListener("dispose",Qe),at=new Map,ee.programs=at);let ct=at.get(qe);if(ct!==void 0){if(ee.currentProgram===ct&&ee.lightsStateVersion===Oe)return Kh(L,Xe),ct}else Xe.uniforms=Le.getUniforms(L),L.onBeforeCompile(Xe,x),ct=Le.acquireProgram(Xe,qe),at.set(qe,ct),ee.uniforms=Xe.uniforms;const Ye=ee.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ye.clippingPlanes=z.uniform),Kh(L,Xe),ee.needsLights=Wp(L),ee.lightsStateVersion=Oe,ee.needsLights&&(Ye.ambientLightColor.value=X.state.ambient,Ye.lightProbe.value=X.state.probe,Ye.directionalLights.value=X.state.directional,Ye.directionalLightShadows.value=X.state.directionalShadow,Ye.spotLights.value=X.state.spot,Ye.spotLightShadows.value=X.state.spotShadow,Ye.rectAreaLights.value=X.state.rectArea,Ye.ltc_1.value=X.state.rectAreaLTC1,Ye.ltc_2.value=X.state.rectAreaLTC2,Ye.pointLights.value=X.state.point,Ye.pointLightShadows.value=X.state.pointShadow,Ye.hemisphereLights.value=X.state.hemi,Ye.directionalShadowMap.value=X.state.directionalShadowMap,Ye.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ye.spotShadowMap.value=X.state.spotShadowMap,Ye.spotLightMatrix.value=X.state.spotLightMatrix,Ye.spotLightMap.value=X.state.spotLightMap,Ye.pointShadowMap.value=X.state.pointShadowMap,Ye.pointShadowMatrix.value=X.state.pointShadowMatrix),ee.currentProgram=ct,ee.uniformsList=null,ct}function $h(L){if(L.uniformsList===null){const W=L.currentProgram.getUniforms();L.uniformsList=Ra.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function Kh(L,W){const J=Me.get(L);J.outputColorSpace=W.outputColorSpace,J.batching=W.batching,J.batchingColor=W.batchingColor,J.instancing=W.instancing,J.instancingColor=W.instancingColor,J.instancingMorph=W.instancingMorph,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function Vp(L,W,J,ee,X){W.isScene!==!0&&(W=We),I.resetTextureUnits();const Ce=W.fog,Oe=ee.isMeshStandardMaterial?W.environment:null,Xe=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Nn,qe=(ee.isMeshStandardMaterial?G:A).get(ee.envMap||Oe),at=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ct=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ye=!!J.morphAttributes.position,xt=!!J.morphAttributes.normal,Nt=!!J.morphAttributes.color;let kt=ds;ee.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(kt=x.toneMapping);const kn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,bt=kn!==void 0?kn.length:0,je=Me.get(ee),Ci=p.state.lights;if(me===!0&&(ge===!0||L!==b)){const Kn=L===b&&ee.id===M;z.setState(ee,L,Kn)}let wt=!1;ee.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Ci.state.version||je.outputColorSpace!==Xe||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isBatchedMesh&&je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&je.instancingMorph===!1&&X.morphTexture!==null||je.envMap!==qe||ee.fog===!0&&je.fog!==Ce||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==z.numPlanes||je.numIntersection!==z.numIntersection)||je.vertexAlphas!==at||je.vertexTangents!==ct||je.morphTargets!==Ye||je.morphNormals!==xt||je.morphColors!==Nt||je.toneMapping!==kt||je.morphTargetsCount!==bt)&&(wt=!0):(wt=!0,je.__version=ee.version);let si=je.currentProgram;wt===!0&&(si=No(ee,W,X));let Hs=!1,Hn=!1,Br=!1;const Ft=si.getUniforms(),_i=je.uniforms;if(ie.useProgram(si.program)&&(Hs=!0,Hn=!0,Br=!0),ee.id!==M&&(M=ee.id,Hn=!0),Hs||b!==L){ie.buffers.depth.getReversed()?(pe.copy(L.projectionMatrix),Z0(pe),J0(pe),Ft.setValue(O,"projectionMatrix",pe)):Ft.setValue(O,"projectionMatrix",L.projectionMatrix),Ft.setValue(O,"viewMatrix",L.matrixWorldInverse);const Ki=Ft.map.cameraPosition;Ki!==void 0&&Ki.setValue(O,ke.setFromMatrixPosition(L.matrixWorld)),he.logarithmicDepthBuffer&&Ft.setValue(O,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Ft.setValue(O,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,Hn=!0,Br=!0)}if(X.isSkinnedMesh){Ft.setOptional(O,X,"bindMatrix"),Ft.setOptional(O,X,"bindMatrixInverse");const Kn=X.skeleton;Kn&&(Kn.boneTexture===null&&Kn.computeBoneTexture(),Ft.setValue(O,"boneTexture",Kn.boneTexture,I))}X.isBatchedMesh&&(Ft.setOptional(O,X,"batchingTexture"),Ft.setValue(O,"batchingTexture",X._matricesTexture,I),Ft.setOptional(O,X,"batchingIdTexture"),Ft.setValue(O,"batchingIdTexture",X._indirectTexture,I),Ft.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Ft.setValue(O,"batchingColorTexture",X._colorsTexture,I));const zr=J.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&Ve.update(X,J,si),(Hn||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,Ft.setValue(O,"receiveShadow",X.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(_i.envMap.value=qe,_i.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&W.environment!==null&&(_i.envMapIntensity.value=W.environmentIntensity),Hn&&(Ft.setValue(O,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&Gp(_i,Br),Ce&&ee.fog===!0&&Ae.refreshFogUniforms(_i,Ce),Ae.refreshMaterialUniforms(_i,ee,B,ne,p.state.transmissionRenderTarget[L.id]),Ra.upload(O,$h(je),_i,I)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ra.upload(O,$h(je),_i,I),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Ft.setValue(O,"center",X.center),Ft.setValue(O,"modelViewMatrix",X.modelViewMatrix),Ft.setValue(O,"normalMatrix",X.normalMatrix),Ft.setValue(O,"modelMatrix",X.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Kn=ee.uniformsGroups;for(let Ki=0,ji=Kn.length;Ki<ji;Ki++){const jh=Kn[Ki];U.update(jh,si),U.bind(jh,si)}}return si}function Gp(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function Wp(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(L,W,J){Me.get(L.texture).__webglTexture=W,Me.get(L.depthTexture).__webglTexture=J;const ee=Me.get(L);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,W){const J=Me.get(L);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,J=0){P=L,S=W,R=J;let ee=!0,X=null,Ce=!1,Oe=!1;if(L){const qe=Me.get(L);if(qe.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(O.FRAMEBUFFER,null),ee=!1;else if(qe.__webglFramebuffer===void 0)I.setupRenderTarget(L);else if(qe.__hasExternalTextures)I.rebindTextures(L,Me.get(L.texture).__webglTexture,Me.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Ye=L.depthTexture;if(qe.__boundDepthTexture!==Ye){if(Ye!==null&&Me.has(Ye)&&(L.width!==Ye.image.width||L.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(L)}}const at=L.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Oe=!0);const ct=Me.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ct[W])?X=ct[W][J]:X=ct[W],Ce=!0):L.samples>0&&I.useMultisampledRTT(L)===!1?X=Me.get(L).__webglMultisampledFramebuffer:Array.isArray(ct)?X=ct[J]:X=ct,N.copy(L.viewport),V.copy(L.scissor),H=L.scissorTest}else N.copy(Ee).multiplyScalar(B).floor(),V.copy(ze).multiplyScalar(B).floor(),H=$e;if(ie.bindFramebuffer(O.FRAMEBUFFER,X)&&ee&&ie.drawBuffers(L,X),ie.viewport(N),ie.scissor(V),ie.setScissorTest(H),Ce){const qe=Me.get(L.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,qe.__webglTexture,J)}else if(Oe){const qe=Me.get(L.texture),at=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,qe.__webglTexture,J||0,at)}M=-1},this.readRenderTargetPixels=function(L,W,J,ee,X,Ce,Oe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=Me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Oe!==void 0&&(Xe=Xe[Oe]),Xe){ie.bindFramebuffer(O.FRAMEBUFFER,Xe);try{const qe=L.texture,at=qe.format,ct=qe.type;if(!he.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-ee&&J>=0&&J<=L.height-X&&O.readPixels(W,J,ee,X,F.convert(at),F.convert(ct),Ce)}finally{const qe=P!==null?Me.get(P).__webglFramebuffer:null;ie.bindFramebuffer(O.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(L,W,J,ee,X,Ce,Oe){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=Me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Oe!==void 0&&(Xe=Xe[Oe]),Xe){const qe=L.texture,at=qe.format,ct=qe.type;if(!he.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=L.width-ee&&J>=0&&J<=L.height-X){ie.bindFramebuffer(O.FRAMEBUFFER,Xe);const Ye=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ye),O.bufferData(O.PIXEL_PACK_BUFFER,Ce.byteLength,O.STREAM_READ),O.readPixels(W,J,ee,X,F.convert(at),F.convert(ct),0);const xt=P!==null?Me.get(P).__webglFramebuffer:null;ie.bindFramebuffer(O.FRAMEBUFFER,xt);const Nt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await j0(O,Nt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ye),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ce),O.deleteBuffer(Ye),O.deleteSync(Nt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,W=null,J=0){L.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,L=arguments[1]);const ee=Math.pow(2,-J),X=Math.floor(L.image.width*ee),Ce=Math.floor(L.image.height*ee),Oe=W!==null?W.x:0,Xe=W!==null?W.y:0;I.setTexture2D(L,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Oe,Xe,X,Ce),ie.unbindTexture()},this.copyTextureToTexture=function(L,W,J=null,ee=null,X=0){L.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,L=arguments[1],W=arguments[2],X=arguments[3]||0,J=null);let Ce,Oe,Xe,qe,at,ct,Ye,xt,Nt;const kt=L.isCompressedTexture?L.mipmaps[X]:L.image;J!==null?(Ce=J.max.x-J.min.x,Oe=J.max.y-J.min.y,Xe=J.isBox3?J.max.z-J.min.z:1,qe=J.min.x,at=J.min.y,ct=J.isBox3?J.min.z:0):(Ce=kt.width,Oe=kt.height,Xe=kt.depth||1,qe=0,at=0,ct=0),ee!==null?(Ye=ee.x,xt=ee.y,Nt=ee.z):(Ye=0,xt=0,Nt=0);const kn=F.convert(W.format),bt=F.convert(W.type);let je;W.isData3DTexture?(I.setTexture3D(W,0),je=O.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(I.setTexture2DArray(W,0),je=O.TEXTURE_2D_ARRAY):(I.setTexture2D(W,0),je=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Ci=O.getParameter(O.UNPACK_ROW_LENGTH),wt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),si=O.getParameter(O.UNPACK_SKIP_PIXELS),Hs=O.getParameter(O.UNPACK_SKIP_ROWS),Hn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,kt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,kt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qe),O.pixelStorei(O.UNPACK_SKIP_ROWS,at),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ct);const Br=L.isDataArrayTexture||L.isData3DTexture,Ft=W.isDataArrayTexture||W.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const _i=Me.get(L),zr=Me.get(W),Kn=Me.get(_i.__renderTarget),Ki=Me.get(zr.__renderTarget);ie.bindFramebuffer(O.READ_FRAMEBUFFER,Kn.__webglFramebuffer),ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let ji=0;ji<Xe;ji++)Br&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.get(L).__webglTexture,X,ct+ji),L.isDepthTexture?(Ft&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Me.get(W).__webglTexture,X,Nt+ji),O.blitFramebuffer(qe,at,Ce,Oe,Ye,xt,Ce,Oe,O.DEPTH_BUFFER_BIT,O.NEAREST)):Ft?O.copyTexSubImage3D(je,X,Ye,xt,Nt+ji,qe,at,Ce,Oe):O.copyTexSubImage2D(je,X,Ye,xt,Nt+ji,qe,at,Ce,Oe);ie.bindFramebuffer(O.READ_FRAMEBUFFER,null),ie.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ft?L.isDataTexture||L.isData3DTexture?O.texSubImage3D(je,X,Ye,xt,Nt,Ce,Oe,Xe,kn,bt,kt.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(je,X,Ye,xt,Nt,Ce,Oe,Xe,kn,kt.data):O.texSubImage3D(je,X,Ye,xt,Nt,Ce,Oe,Xe,kn,bt,kt):L.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,Ye,xt,Ce,Oe,kn,bt,kt.data):L.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,Ye,xt,kt.width,kt.height,kn,kt.data):O.texSubImage2D(O.TEXTURE_2D,X,Ye,xt,Ce,Oe,kn,bt,kt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ci),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,si),O.pixelStorei(O.UNPACK_SKIP_ROWS,Hs),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Hn),X===0&&W.generateMipmaps&&O.generateMipmap(je),ie.unbindTexture()},this.copyTextureToTexture3D=function(L,W,J=null,ee=null,X=0){return L.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,L=arguments[2],W=arguments[3],X=arguments[4]||0),ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,W,J,ee,X)},this.initRenderTarget=function(L){Me.get(L).__webglFramebuffer===void 0&&I.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?I.setTextureCube(L,0):L.isData3DTexture?I.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?I.setTexture2DArray(L,0):I.setTexture2D(L,0),ie.unbindTexture()},this.resetState=function(){S=0,R=0,P=null,ie.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}class wh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=n}clone(){return new wh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class sp extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kl,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new D;class bo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ui(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ui(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ui(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ui(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ui(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ks extends di{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let nr;const Xr=new D,ir=new D,sr=new D,rr=new ye,qr=new ye,op=new ot,ta=new D,Yr=new D,na=new D,Zu=new ye,Rc=new ye,Ju=new ye;class Rr extends Dt{constructor(e=new ks){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new rp(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new bo(n,3,0,!1)),nr.setAttribute("uv",new bo(n,2,3,!1))}this.geometry=nr,this.material=e,this.center=new ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),op.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ia(ta.set(-.5,-.5,0),sr,o,ir,s,r),ia(Yr.set(.5,-.5,0),sr,o,ir,s,r),ia(na.set(.5,.5,0),sr,o,ir,s,r),Zu.set(0,0),Rc.set(1,0),Ju.set(1,1);let a=e.ray.intersectTriangle(ta,Yr,na,!1,Xr);if(a===null&&(ia(Yr.set(-.5,.5,0),sr,o,ir,s,r),Rc.set(0,1),a=e.ray.intersectTriangle(ta,na,Yr,!1,Xr),a===null))return;const c=e.ray.origin.distanceTo(Xr);c<e.near||c>e.far||t.push({distance:c,point:Xr.clone(),uv:ei.getInterpolation(Xr,ta,Yr,na,Zu,Rc,Ju,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ia(i,e,t,n,s,r){rr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(qr.x=r*rr.x-s*rr.y,qr.y=s*rr.x+r*rr.y):qr.copy(rr),i.copy(e),i.x+=qr.x,i.y+=qr.y,i.applyMatrix4(op)}const Qu=new D,ef=new Mt,tf=new Mt,c1=new D,nf=new ot,sa=new D,Cc=new Si,sf=new ot,Pc=new Ro;class l1 extends ve{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=eu,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingBox.expandByPoint(sa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingSphere.expandByPoint(sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cc.copy(this.boundingSphere),Cc.applyMatrix4(s),e.ray.intersectsSphere(Cc)!==!1&&(sf.copy(s).invert(),Pc.copy(e.ray).applyMatrix4(sf),!(this.boundingBox!==null&&Pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===eu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===v0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;ef.fromBufferAttribute(s.attributes.skinIndex,e),tf.fromBufferAttribute(s.attributes.skinWeight,e),Qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=tf.getComponent(r);if(o!==0){const a=ef.getComponent(r);nf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(c1.copy(Qu).applyMatrix4(nf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class ap extends Dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cp extends tn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=In,h=In,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rf=new ot,h1=new ot;class Sh{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:h1;rf.multiplyMatrices(a,t[r]),rf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Sh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new cp(t,e,e,ti,fi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new ap),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Jl extends Sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new ot,of=new ot,ra=[],af=new wi,u1=new ot,$r=new ve,Kr=new Si;class f1 extends ve{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Jl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,u1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),af.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(af)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),Kr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),e.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),of.multiplyMatrices(n,or),$r.matrixWorld=of,$r.raycast(e,ra);for(let o=0,a=ra.length;o<a;o++){const c=ra[o];c.instanceId=r,c.object=this,t.push(c)}ra.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Jl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new cp(new Float32Array(s*this.count),s,this.count,ph,fi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Eh extends di{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ia=new D,Da=new D,cf=new ot,jr=new Ro,oa=new Si,Lc=new D,lf=new D;class Th extends Dt{constructor(e=new Ht,t=new Eh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ia.fromBufferAttribute(t,s-1),Da.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ia.distanceTo(Da);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;cf.copy(s).invert(),jr.copy(e.ray).applyMatrix4(cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),y=aa(this,e,jr,c,p,v);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=aa(this,e,jr,c,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=aa(this,e,jr,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=aa(this,e,jr,c,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function aa(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Ia.fromBufferAttribute(o,s),Da.fromBufferAttribute(o,r),t.distanceSqToSegment(Ia,Da,Lc,lf)>n)return;Lc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Lc);if(!(c<e.near||c>e.far))return{distance:c,point:lf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const hf=new D,uf=new D;class d1 extends Th{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)hf.fromBufferAttribute(t,s),uf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hf.distanceTo(uf);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class lp extends Th{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class hp extends di{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ff=new ot,Ql=new Ro,ca=new Si,la=new D;class p1 extends Dt{constructor(e=new Ht,t=new hp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;ff.copy(s).invert(),Ql.copy(e.ray).applyMatrix4(ff);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);la.fromBufferAttribute(u,m),df(la,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)la.fromBufferAttribute(u,g),df(la,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function df(i,e,t,n,s,r,o){const a=Ql.distanceSqToPoint(i);if(a<t){const c=new D;Ql.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class On extends tn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ye:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,s=[],r=[],o=[],a=new D,c=new ot;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Qt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ah extends Ei{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ye){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class m1 extends Ah{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Rh(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const ha=new D,Ic=new Rh,Dc=new Rh,Nc=new Rh;class up extends Ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ha.subVectors(s[0],s[1]).add(s[0]),l=ha);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ha.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ha),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ic.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Dc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Nc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Dc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Nc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ic.calc(c),Dc.calc(c),Nc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function pf(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function g1(i,e){const t=1-i;return t*t*e}function x1(i,e){return 2*(1-i)*i*e}function _1(i,e){return i*i*e}function po(i,e,t,n){return g1(i,e)+x1(i,t)+_1(i,n)}function v1(i,e){const t=1-i;return t*t*t*e}function y1(i,e){const t=1-i;return 3*t*t*i*e}function M1(i,e){return 3*(1-i)*i*i*e}function b1(i,e){return i*i*i*e}function mo(i,e,t,n,s){return v1(i,e)+y1(i,t)+M1(i,n)+b1(i,s)}class fp extends Ei{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class w1 extends Ei{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y),mo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dp extends Ei{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S1 extends Ei{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class pp extends Ei{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ch extends Ei{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y),po(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mp extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(pf(a,c.x,l.x,h.x,u.x),pf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ye().fromArray(s))}return this}}var Na=Object.freeze({__proto__:null,ArcCurve:m1,CatmullRomCurve3:up,CubicBezierCurve:fp,CubicBezierCurve3:w1,EllipseCurve:Ah,LineCurve:dp,LineCurve3:S1,QuadraticBezierCurve:pp,QuadraticBezierCurve3:Ch,SplineCurve:mp});class E1 extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Na[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Na[s.type]().fromJSON(s))}return this}}class eh extends E1{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new dp(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new pp(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new fp(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new mp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Ah(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Nr extends Ht{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Qt(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new D,f=new ye,d=new D,g=new D,_=new D;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let v=0;v<=t;v++){const y=n+v*h*s,x=Math.sin(y),E=Math.cos(y);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*x,u.y=e[S].y,u.z=e[S].x*E,o.push(u.x,u.y,u.z),f.x=v/t,f.y=S/(e.length-1),a.push(f.x,f.y);const R=c[3*S+0]*x,P=c[3*S+1],M=c[3*S+0]*E;l.push(R,P,M)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const x=y+v*e.length,E=x,S=x+e.length,R=x+e.length+1,P=x+1;r.push(E,S,P),r.push(R,P,S)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("uv",new ft(a,2)),this.setAttribute("normal",new ft(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.points,e.segments,e.phiStart,e.phiLength)}}class Ph extends Nr{constructor(e=1,t=1,n=4,s=8){const r=new eh;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Ph(e.radius,e.length,e.capSegments,e.radialSegments)}}class $n extends Ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new D,h=new ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Dn extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(d,2));function v(){const x=new D,E=new D;let S=0;const R=(t-e)/n;for(let P=0;P<=r;P++){const M=[],b=P/r,N=b*(t-e)+e;for(let V=0;V<=s;V++){const H=V/s,$=H*c+a,j=Math.sin($),q=Math.cos($);E.x=N*j,E.y=-b*n+m,E.z=N*q,u.push(E.x,E.y,E.z),x.set(j,R,q).normalize(),f.push(x.x,x.y,x.z),d.push(H,1-b),M.push(g++)}_.push(M)}for(let P=0;P<s;P++)for(let M=0;M<r;M++){const b=_[M][P],N=_[M+1][P],V=_[M+1][P+1],H=_[M][P+1];(e>0||M!==0)&&(h.push(b,N,H),S+=3),(t>0||M!==r-1)&&(h.push(N,V,H),S+=3)}l.addGroup(p,S,0),p+=S}function y(x){const E=g,S=new ye,R=new D;let P=0;const M=x===!0?e:t,b=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;const N=g;for(let V=0;V<=s;V++){const $=V/s*c+a,j=Math.cos($),q=Math.sin($);R.x=M*q,R.y=m*b,R.z=M*j,u.push(R.x,R.y,R.z),f.push(0,b,0),S.x=j*.5+.5,S.y=q*.5*b+.5,d.push(S.x,S.y),g++}for(let V=0;V<s;V++){const H=E+V,$=N+V;x===!0?h.push($,$+1,H):h.push($+1,$,H),P+=3}l.addGroup(p,P,x===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lh extends Dn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Lh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ih extends Ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new D,x=new D,E=new D;for(let S=0;S<t.length;S+=3)d(t[S+0],y),d(t[S+1],x),d(t[S+2],E),c(y,x,E,v)}function c(v,y,x,E){const S=E+1,R=[];for(let P=0;P<=S;P++){R[P]=[];const M=v.clone().lerp(x,P/S),b=y.clone().lerp(x,P/S),N=S-P;for(let V=0;V<=N;V++)V===0&&P===S?R[P][V]=M:R[P][V]=M.clone().lerp(b,V/N)}for(let P=0;P<S;P++)for(let M=0;M<2*(S-P)-1;M++){const b=Math.floor(M/2);M%2===0?(f(R[P][b+1]),f(R[P+1][b]),f(R[P][b])):(f(R[P][b+1]),f(R[P+1][b+1]),f(R[P+1][b]))}}function l(v){const y=new D;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const v=new D;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,E=p(v)/Math.PI+.5;o.push(x,1-E)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],E=o[v+4],S=Math.max(y,x,E),R=Math.min(y,x,E);S>.9&&R<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),E<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new D,y=new D,x=new D,E=new D,S=new ye,R=new ye,P=new ye;for(let M=0,b=0;M<r.length;M+=9,b+=6){v.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),x.set(r[M+6],r[M+7],r[M+8]),S.set(o[b+0],o[b+1]),R.set(o[b+2],o[b+3]),P.set(o[b+4],o[b+5]),E.copy(v).add(y).add(x).divideScalar(3);const N=m(E);_(S,b+0,v,N),_(R,b+2,y,N),_(P,b+4,x,N)}}function _(v,y,x,E){E<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=E/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ih(e.vertices,e.indices,e.radius,e.details)}}class Co extends eh{constructor(e){super(e),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new eh().fromJSON(s))}return this}}const T1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=gp(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=L1(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return wo(r,o,t,a,c,d,0),o}};function gp(i,e,t,n,s){let r,o;if(s===V1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=mf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=mf(r,i[r],i[r+1],o);return o&&Ga(o,o.next)&&(Eo(o),o=o.next),o}function Fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ga(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Eo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&O1(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?R1(i,n,s,r):A1(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Eo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=C1(Fs(i),e,t),wo(i,e,t,n,s,r,2)):o===2&&P1(i,e,t,n,s,r):wo(Fs(i),e,t,n,s,r,1);break}}}function A1(i){const e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&mr(s,a,r,c,o,l,g.x,g.y)&&Vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function R1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Vt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=th(d,g,e,t,n),v=th(_,m,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&mr(a,h,c,u,l,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&mr(a,h,c,u,l,f,x.x,x.y)&&Vt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&mr(a,h,c,u,l,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&mr(a,h,c,u,l,f,x.x,x.y)&&Vt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function C1(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ga(s,r)&&xp(s,n,n.next,r)&&So(s,r)&&So(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Eo(n),Eo(n.next),n=i=r),n=n.next}while(n!==i);return Fs(n)}function P1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&B1(o,a)){let c=_p(o,a);o=Fs(o,o.next),c=Fs(c,c.next),wo(o,e,t,n,s,r,0),wo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function L1(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=gp(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(F1(l));for(s.sort(I1),r=0;r<s.length;r++)t=D1(s[r],t);return t}function I1(i,e){return i.x-e.x}function D1(i,e){const t=N1(i,e);if(!t)return e;const n=_p(t,i);return Fs(n,n.next),Fs(t,t.next)}function N1(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&mr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),So(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&U1(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function U1(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function O1(i,e,t,n){let s=i;do s.z===0&&(s.z=th(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k1(s)}function k1(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function th(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function F1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function mr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function B1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!z1(i,e)&&(So(i,e)&&So(e,i)&&H1(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||Ga(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ga(i,e){return i.x===e.x&&i.y===e.y}function xp(i,e,t,n){const s=fa(Vt(i,e,t)),r=fa(Vt(i,e,n)),o=fa(Vt(t,n,i)),a=fa(Vt(t,n,e));return!!(s!==r&&o!==a||s===0&&ua(i,t,e)||r===0&&ua(i,n,e)||o===0&&ua(t,i,n)||a===0&&ua(t,e,n))}function ua(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fa(i){return i>0?1:i<0?-1:0}function z1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&xp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function So(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function H1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function _p(i,e){const t=new nh(i.i,i.x,i.y),n=new nh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function mf(i,e,t,n){const s=new nh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Eo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nh(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function V1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ps{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ps.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];gf(e),xf(n,e);let o=e.length;t.forEach(gf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,xf(n,t[c]);const a=T1.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function gf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function xf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Wa extends Ht{constructor(e=new Co([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:G1;let y,x=!1,E,S,R,P;p&&(y=p.getSpacedPoints(h),x=!0,f=!1,E=p.computeFrenetFrames(h,!1),S=new D,R=new D,P=new D),f||(m=0,d=0,g=0,_=0);const M=a.extractPoints(l);let b=M.shape;const N=M.holes;if(!ps.isClockWise(b)){b=b.reverse();for(let ae=0,xe=N.length;ae<xe;ae++){const O=N[ae];ps.isClockWise(O)&&(N[ae]=O.reverse())}}const H=ps.triangulateShape(b,N),$=b;for(let ae=0,xe=N.length;ae<xe;ae++){const O=N[ae];b=b.concat(O)}function j(ae,xe,O){return xe||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(xe,O)}const q=b.length,ne=H.length;function B(ae,xe,O){let ce,Z,he;const ie=ae.x-xe.x,Re=ae.y-xe.y,Me=O.x-ae.x,I=O.y-ae.y,A=ie*ie+Re*Re,G=ie*I-Re*Me;if(Math.abs(G)>Number.EPSILON){const re=Math.sqrt(A),fe=Math.sqrt(Me*Me+I*I),le=xe.x-Re/re,Le=xe.y+ie/re,Ae=O.x-I/fe,Pe=O.y+Me/fe,st=((Ae-le)*I-(Pe-Le)*Me)/(ie*I-Re*Me);ce=le+ie*st-ae.x,Z=Le+Re*st-ae.y;const z=ce*ce+Z*Z;if(z<=2)return new ye(ce,Z);he=Math.sqrt(z/2)}else{let re=!1;ie>Number.EPSILON?Me>Number.EPSILON&&(re=!0):ie<-Number.EPSILON?Me<-Number.EPSILON&&(re=!0):Math.sign(Re)===Math.sign(I)&&(re=!0),re?(ce=-Re,Z=ie,he=Math.sqrt(A)):(ce=ie,Z=Re,he=Math.sqrt(A/2))}return new ye(ce/he,Z/he)}const ue=[];for(let ae=0,xe=$.length,O=xe-1,ce=ae+1;ae<xe;ae++,O++,ce++)O===xe&&(O=0),ce===xe&&(ce=0),ue[ae]=B($[ae],$[O],$[ce]);const de=[];let Ee,ze=ue.concat();for(let ae=0,xe=N.length;ae<xe;ae++){const O=N[ae];Ee=[];for(let ce=0,Z=O.length,he=Z-1,ie=ce+1;ce<Z;ce++,he++,ie++)he===Z&&(he=0),ie===Z&&(ie=0),Ee[ce]=B(O[ce],O[he],O[ie]);de.push(Ee),ze=ze.concat(Ee)}for(let ae=0;ae<m;ae++){const xe=ae/m,O=d*Math.cos(xe*Math.PI/2),ce=g*Math.sin(xe*Math.PI/2)+_;for(let Z=0,he=$.length;Z<he;Z++){const ie=j($[Z],ue[Z],ce);pe(ie.x,ie.y,-O)}for(let Z=0,he=N.length;Z<he;Z++){const ie=N[Z];Ee=de[Z];for(let Re=0,Me=ie.length;Re<Me;Re++){const I=j(ie[Re],Ee[Re],ce);pe(I.x,I.y,-O)}}}const $e=g+_;for(let ae=0;ae<q;ae++){const xe=f?j(b[ae],ze[ae],$e):b[ae];x?(R.copy(E.normals[0]).multiplyScalar(xe.x),S.copy(E.binormals[0]).multiplyScalar(xe.y),P.copy(y[0]).add(R).add(S),pe(P.x,P.y,P.z)):pe(xe.x,xe.y,0)}for(let ae=1;ae<=h;ae++)for(let xe=0;xe<q;xe++){const O=f?j(b[xe],ze[xe],$e):b[xe];x?(R.copy(E.normals[ae]).multiplyScalar(O.x),S.copy(E.binormals[ae]).multiplyScalar(O.y),P.copy(y[ae]).add(R).add(S),pe(P.x,P.y,P.z)):pe(O.x,O.y,u/h*ae)}for(let ae=m-1;ae>=0;ae--){const xe=ae/m,O=d*Math.cos(xe*Math.PI/2),ce=g*Math.sin(xe*Math.PI/2)+_;for(let Z=0,he=$.length;Z<he;Z++){const ie=j($[Z],ue[Z],ce);pe(ie.x,ie.y,u+O)}for(let Z=0,he=N.length;Z<he;Z++){const ie=N[Z];Ee=de[Z];for(let Re=0,Me=ie.length;Re<Me;Re++){const I=j(ie[Re],Ee[Re],ce);x?pe(I.x,I.y+y[h-1].y,y[h-1].x+O):pe(I.x,I.y,u+O)}}}Q(),me();function Q(){const ae=s.length/3;if(f){let xe=0,O=q*xe;for(let ce=0;ce<ne;ce++){const Z=H[ce];Ne(Z[2]+O,Z[1]+O,Z[0]+O)}xe=h+m*2,O=q*xe;for(let ce=0;ce<ne;ce++){const Z=H[ce];Ne(Z[0]+O,Z[1]+O,Z[2]+O)}}else{for(let xe=0;xe<ne;xe++){const O=H[xe];Ne(O[2],O[1],O[0])}for(let xe=0;xe<ne;xe++){const O=H[xe];Ne(O[0]+q*h,O[1]+q*h,O[2]+q*h)}}n.addGroup(ae,s.length/3-ae,0)}function me(){const ae=s.length/3;let xe=0;ge($,xe),xe+=$.length;for(let O=0,ce=N.length;O<ce;O++){const Z=N[O];ge(Z,xe),xe+=Z.length}n.addGroup(ae,s.length/3-ae,1)}function ge(ae,xe){let O=ae.length;for(;--O>=0;){const ce=O;let Z=O-1;Z<0&&(Z=ae.length-1);for(let he=0,ie=h+m*2;he<ie;he++){const Re=q*he,Me=q*(he+1),I=xe+ce+Re,A=xe+Z+Re,G=xe+Z+Me,re=xe+ce+Me;ke(I,A,G,re)}}}function pe(ae,xe,O){c.push(ae),c.push(xe),c.push(O)}function Ne(ae,xe,O){Te(ae),Te(xe),Te(O);const ce=s.length/3,Z=v.generateTopUV(n,s,ce-3,ce-2,ce-1);We(Z[0]),We(Z[1]),We(Z[2])}function ke(ae,xe,O,ce){Te(ae),Te(xe),Te(ce),Te(xe),Te(O),Te(ce);const Z=s.length/3,he=v.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);We(he[0]),We(he[1]),We(he[3]),We(he[1]),We(he[2]),We(he[3])}function Te(ae){s.push(c[ae*3+0]),s.push(c[ae*3+1]),s.push(c[ae*3+2])}function We(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return W1(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Na[s.type]().fromJSON(s)),new Wa(n,e.options)}}const G1={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ye(r,o),new ye(a,c),new ye(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ye(o,1-c),new ye(l,1-u),new ye(f,1-g),new ye(_,1-p)]:[new ye(a,1-c),new ye(h,1-u),new ye(d,1-g),new ye(m,1-p)]}};function W1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xa extends Ih{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xa(e.radius,e.detail)}}class Dh extends Ht{constructor(e=new Co([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(r,3)),this.setAttribute("uv",new ft(o,2));function l(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;ps.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];ps.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=ps.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],y=v[0]+u,x=v[1]+u,E=v[2]+u;n.push(y,x,E),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return X1(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Dh(n,e.curveSegments)}}function X1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Zt extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new D,f=new D,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const S=E/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(S+x,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=h[p][v+1],x=h[p][v],E=h[p+1][v],S=h[p+1][v+1];(p!==0||o>0)&&d.push(y,x,S),(p!==n-1||c<Math.PI)&&d.push(x,E,S)}this.setIndex(d),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ur extends Ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qa extends Ht{constructor(e=new Ch(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new ye;let h=new D;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(d,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),p()}function m(y){h=e.getPointAt(y/t,h);const x=o.normals[y],E=o.binormals[y];for(let S=0;S<=s;S++){const R=S/s*Math.PI*2,P=Math.sin(R),M=-Math.cos(R);c.x=M*x.x+P*E.x,c.y=M*x.y+P*E.y,c.z=M*x.z+P*E.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){const E=(s+1)*(y-1)+(x-1),S=(s+1)*y+(x-1),R=(s+1)*y+x,P=(s+1)*(y-1)+x;g.push(E,S,P),g.push(S,R,P)}}function v(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)l.x=y/t,l.y=x/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new qa(new Na[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Et extends di{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hd,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends Et{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function da(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function q1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Y1(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function _f(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function vp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Po{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $1 extends Po{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case nu:r=e,a=2*t-n;break;case iu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nu:o=e,c=2*n-t;break;case iu:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+v*o[l+E]+y*o[c+E]+x*o[u+E];return r}}class K1 extends Po{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class j1 extends Po{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ai{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new j1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new K1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vo:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case ec:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&q1(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ec,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=yo;class Or extends Ai{constructor(e,t,n){super(e,t,n)}}Or.prototype.ValueTypeName="bool";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=vo;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;class yp extends Ai{}yp.prototype.ValueTypeName="color";class Cr extends Ai{}Cr.prototype.ValueTypeName="number";class Z1 extends Po{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)gi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Pr extends Ai{InterpolantFactoryMethodLinear(e){return new Z1(this.times,this.values,this.getValueSize(),e)}}Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class kr extends Ai{constructor(e,t,n){super(e,t,n)}}kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=vo;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends Ai{}Lr.prototype.ValueTypeName="vector";class J1{constructor(e="",t=-1,n=[],s=y0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ey(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ai.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=Y1(c);c=_f(c,1,h),l=_f(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Cr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,_){if(d.length!==0){const m=[],p=[];vp(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const y=f[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Cr(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{const d=".bones["+t[u].name+"]";n(Lr,d+".position",f,"pos",s),n(Pr,d+".quaternion",f,"rot",s),n(Lr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Q1(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cr;case"vector":case"vector2":case"vector3":case"vector4":return Lr;case"color":return yp;case"quaternion":return Pr;case"bool":case"boolean":return Or;case"string":return kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ey(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Q1(i.type);if(i.times===void 0){const t=[],n=[];vp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const us={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ty{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const ny=new ty;class Fr{constructor(e){this.manager=e!==void 0?e:ny,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class iy extends Error{constructor(e,t){super(e),this.response=t}}class Mp extends Fr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=us.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:s});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ui[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let S=0,R=h.length;S<R;S++){const P=h[S];P.onProgress&&P.onProgress(E)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new iy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{us.add(e,l);const h=Ui[e];delete Ui[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ui[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class sy extends Fr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Mo("img");function c(){h(),us.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Nh extends Fr{constructor(e){super(e)}load(e,t,n,s){const r=new tn,o=new sy(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ya extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ry extends Ya{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Uc=new ot,vf=new D,yf=new D;class Uh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(vf),yf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yf),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oy extends Uh{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ay extends Ya{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new oy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Mf=new ot,Zr=new D,Oc=new D;class cy extends Uh{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zr),Oc.copy(n.position),Oc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oc),n.updateMatrixWorld(),s.makeTranslation(-Zr.x,-Zr.y,-Zr.z),Mf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mf)}}class $a extends Ya{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ly extends Uh{constructor(){super(new Mh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bp extends Ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new ly}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class go{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class hy extends Fr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return us.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),us.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});us.add(e,c),r.manager.itemStart(e)}}let pa;class uy{static getContext(){return pa===void 0&&(pa=new(window.AudioContext||window.webkitAudioContext)),pa}static setContext(e){pa=e}}class wp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bf(){return performance.now()}const ws=new D,wf=new gi,fy=new D,Ss=new D;class dy extends Dt{constructor(){super(),this.type="AudioListener",this.context=uy.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new wp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ws,wf,fy),Ss.set(0,0,-1).applyQuaternion(wf),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ws.x,s),t.positionY.linearRampToValueAtTime(ws.y,s),t.positionZ.linearRampToValueAtTime(ws.z,s),t.forwardX.linearRampToValueAtTime(Ss.x,s),t.forwardY.linearRampToValueAtTime(Ss.y,s),t.forwardZ.linearRampToValueAtTime(Ss.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(ws.x,ws.y,ws.z),t.setOrientation(Ss.x,Ss.y,Ss.z,n.x,n.y,n.z)}}class py extends Dt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Es=new D,Sf=new gi,my=new D,Ts=new D;class gy extends py{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Es,Sf,my),Ts.set(0,0,1).applyQuaternion(Sf);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Es.x,n),t.positionY.linearRampToValueAtTime(Es.y,n),t.positionZ.linearRampToValueAtTime(Es.z,n),t.orientationX.linearRampToValueAtTime(Ts.x,n),t.orientationY.linearRampToValueAtTime(Ts.y,n),t.orientationZ.linearRampToValueAtTime(Ts.z,n)}else t.setPosition(Es.x,Es.y,Es.z),t.setOrientation(Ts.x,Ts.y,Ts.z)}}const Oh="\\[\\]\\.:\\/",xy=new RegExp("["+Oh+"]","g"),kh="[^"+Oh+"]",_y="[^"+Oh.replace("\\.","")+"]",vy=/((?:WC+[\/:])*)/.source.replace("WC",kh),yy=/(WCOD+)?/.source.replace("WCOD",_y),My=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),by=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),wy=new RegExp("^"+vy+yy+My+by+"$"),Sy=["material","materials","bones","map"];class Ey{constructor(e,t,n){const s=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xy,"")}static parseTrackName(e){const t=wy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Sy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=Ey;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ef=new ot;class Ty{constructor(e,t,n=0,s=1/0){this.ray=new Ro(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new vh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ef.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ef),this}intersectObject(e,t=!0,n=[]){return ih(e,this,n,t),n.sort(Tf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ih(e[s],this,n,t);return n.sort(Tf),n}}function Tf(i,e){return i.distance-e.distance}function ih(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)ih(r[o],e,t,!0)}}class Ay extends zs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);class Ry extends sp{constructor(){super();const e=new en;e.deleteAttribute("uv");const t=new Et({side:wn}),n=new Et,s=new $a(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new ve(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ve(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ve(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new ve(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new ve(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new ve(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new ve(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new ve(e,ar(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new ve(e,ar(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new ve(e,ar(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new ve(e,ar(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new ve(e,ar(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new ve(e,ar(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ar(i){const e=new Ln;return e.color.setScalar(i),e}const Cy=new Nh;let Sp=8;function xi(i,e,t,{repeat:n=!0,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const o=new On(r);return s&&(o.colorSpace=yt),n&&(o.wrapS=o.wrapT=pi),o.anisotropy=Sp,o}function kc(i,e=!1){const t=Cy.load(i);return t.colorSpace=yt,e&&(t.wrapS=t.wrapT=pi),t.anisotropy=Sp,t}let Fc=1337;function Je(){return Fc=Fc*16807%2147483647,(Fc-1)/2147483646}function ma(i,e,t){return xi(512,512,(n,s)=>{const o=s/4;for(let a=0;a<4;a++)for(let c=0;c<4;c++){const l=(Je()-.5)*e;n.fillStyle=`rgb(${i[0]+l},${i[1]+l},${i[2]+l})`,n.fillRect(a*o,c*o,o,o);for(let h=0;h<140;h++){const u=(Je()-.5)*e*1.4;n.fillStyle=`rgba(${i[0]+u},${i[1]+u},${i[2]+u},0.5)`,n.fillRect(a*o+Je()*o,c*o+Je()*o,2+Je()*5,2+Je()*5)}}n.strokeStyle=t,n.lineWidth=3;for(let a=0;a<=4;a++)n.beginPath(),n.moveTo(a*o,0),n.lineTo(a*o,s),n.stroke(),n.beginPath(),n.moveTo(0,a*o),n.lineTo(s,a*o),n.stroke()})}const Py=xi(256,1024,(i,e,t)=>{i.fillStyle="#d9c7a4",i.fillRect(0,0,e,t);for(let n=0;n<90;n++){const s=Je()*e,r=.05+Je()*.12;i.strokeStyle=Je()>.5?`rgba(150,120,80,${r})`:`rgba(245,235,215,${r})`,i.lineWidth=1+Je()*3,i.beginPath(),i.moveTo(s,0);for(let o=0;o<=t;o+=64)i.lineTo(s+Math.sin(o*.01+n)*4,o);i.stroke()}}),Ly=xi(256,1024,(i,e,t)=>{i.fillStyle="#a8978a",i.fillRect(0,0,e,t);for(let n=0;n<120;n++){const s=Je()*e,r=.05+Je()*.1;i.strokeStyle=Je()>.5?`rgba(90,75,65,${r})`:`rgba(210,200,190,${r})`,i.lineWidth=1+Je()*2.5,i.beginPath(),i.moveTo(s,0);for(let o=0;o<=t;o+=64)i.lineTo(s+Math.sin(o*.012+n)*3,o);i.stroke()}}),Iy=xi(256,96,(i,e,t)=>{i.fillStyle="#e4e4e2",i.fillRect(0,0,e,t);for(let n=0;n<4;n++)for(let s=0;s<14;s++)n===3&&s>3&&s<9||(i.fillStyle="#fafafa",i.strokeStyle="#b9b9b6",i.lineWidth=1.5,i.beginPath(),i.arc(14+s*17.5,14+n*22,7.5,0,7),i.fill(),i.stroke());i.beginPath(),i.roundRect(80,70,90,15,7),i.fill(),i.stroke()}),Dy=xi(128,128,(i,e)=>{i.fillStyle="#c4c5c8",i.fillRect(0,0,e,e);for(let t=0;t<40;t++)i.fillStyle=`rgba(255,255,255,${.03+Je()*.05})`,i.fillRect(0,Je()*e,e,1);i.fillStyle="#8d8e92",i.beginPath(),i.arc(60,70,15,0,7),i.arc(76,70,15,0,7),i.fill(),i.beginPath(),i.ellipse(68,80,18,20,0,0,7),i.fill(),i.fillStyle="#c4c5c8",i.beginPath(),i.arc(90,62,10,0,7),i.fill(),i.fillStyle="#8d8e92",i.beginPath(),i.ellipse(70,46,9,5,-.7,0,7),i.fill()},{repeat:!1}),Ny=xi(512,512,(i,e)=>{const n=e/2;i.fillStyle="#111111",i.fillRect(0,0,e,e),i.fillStyle="#d6ccb2",i.beginPath(),i.moveTo(0,0),i.lineTo(n,0),i.lineTo(n,n),i.closePath(),i.fill(),i.strokeStyle="#ecc828",i.lineWidth=7;for(let s=0;s<=2;s++)i.beginPath(),i.moveTo(s*n,0),i.lineTo(s*n,e),i.stroke(),i.beginPath(),i.moveTo(0,s*n),i.lineTo(e,s*n),i.stroke();i.beginPath(),i.moveTo(0,0),i.lineTo(e,e),i.moveTo(n,0),i.lineTo(e,n),i.moveTo(0,n),i.lineTo(n,e),i.stroke()}),Af=xi(256,160,(i,e,t)=>{i.fillStyle="#1b1d24",i.fillRect(0,0,e,t),i.fillStyle="#2a2d36",i.fillRect(0,0,40,t);const n=["#c792ea","#82aaff","#c3e88d","#f78c6c","#89ddff","#d0d0d0"];for(let s=8;s<t-4;s+=7){let r=48+Math.floor(Je()*4)*8;const o=1+Math.floor(Je()*4);for(let a=0;a<o&&r<e-10;a++){const c=10+Je()*45;i.fillStyle=n[Math.floor(Je()*n.length)],i.fillRect(r,s,c,3),r+=c+5}}},{repeat:!1}),Rf=xi(256,160,(i,e,t)=>{i.fillStyle="#f4f6fa",i.fillRect(0,0,e,t),i.fillStyle="#26324a",i.fillRect(0,0,36,t),i.fillStyle="#ffffff";for(let n=0;n<3;n++)i.fillRect(44+n*70,10,62,34);i.fillStyle="#4c7cf0";for(let n=0;n<12;n++){const s=10+Je()*50;i.fillRect(48+n*16,140-s,9,s)}i.fillStyle="#26c281",i.fillRect(50,20,40,6),i.fillStyle="#f0a04c",i.fillRect(120,20,40,6)},{repeat:!1}),Cf=xi(256,160,(i,e,t)=>{const n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#20263a"),n.addColorStop(1,"#3b2a4f"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,.85)";for(let s=0;s<4;s++)i.fillRect(30,30+s*22,120+Je()*60,8);i.fillStyle="#ecc828",i.fillRect(30,120,60,14)},{repeat:!1}),Uy=xi(1024,360,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#3a3a38",i.textAlign="center",i.font='700 210px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("pixbit",e/2,200),i.font='500 78px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("· s o l u t i o n s ·",e/2,320)},{repeat:!1}),Oy=xi(256,256,(i,e)=>{const t=e/2;i.fillStyle="#f7f7f5",i.beginPath(),i.arc(t,t,t-4,0,Math.PI*2),i.fill(),i.lineWidth=10,i.strokeStyle="#222",i.stroke(),i.fillStyle="#222";for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.fillRect(t+Math.sin(s)*96-3,t-Math.cos(s)*96-9,6,18)}i.lineCap="round",i.lineWidth=8,i.beginPath(),i.moveTo(t,t),i.lineTo(t+50,t-30),i.stroke(),i.lineWidth=5,i.beginPath(),i.moveTo(t,t),i.lineTo(t-20,t-85),i.stroke()},{repeat:!1}),Ze=i=>new Et(i),w={floorBeige:Ze({map:ma([196,180,160],14,"#a8998a"),roughness:.3,metalness:0}),floorDark:Ze({map:ma([78,78,80],12,"#5a5a5c"),roughness:.6}),floorTerrace:Ze({map:ma([184,160,136],16,"#9c7e66"),roughness:.75}),floorCorridor:Ze({map:ma([226,214,196],8,"#cbbfae"),roughness:.12}),wall:Ze({color:"#dededb",roughness:.92}),wallWarm:Ze({color:"#e6e1d6",roughness:.92}),concrete:Ze({map:kc("textures/concrete.jpg",!0),roughness:.95}),ceilingBlack:Ze({color:"#151516",roughness:.95}),diamond:Ze({map:Ny,roughness:.7}),yellow:Ze({color:"#ecc21c",roughness:.5}),black:Ze({color:"#161616",roughness:.45,metalness:.3}),blackMatte:Ze({color:"#1e1e1e",roughness:.85}),metalDark:Ze({color:"#2a2a2c",roughness:.35,metalness:.7}),chrome:Ze({color:"#b9bcc0",roughness:.2,metalness:1}),mesh:Ze({color:"#262628",roughness:.9}),fabric:Ze({color:"#2d2d30",roughness:1}),leather:Ze({color:"#1a1a1a",roughness:.38,metalness:.05}),wood:Ze({map:Py,roughness:.6}),greyOak:Ze({map:Ly,roughness:.75}),oakEdge:Ze({color:"#d9cfb4",roughness:.7}),macTop:Ze({map:Dy,roughness:.35,metalness:.6}),silver:Ze({color:"#c9cacc",roughness:.3,metalness:.8}),keyboardTop:Ze({map:Iy,roughness:.5}),woodDark:Ze({color:"#7a5233",roughness:.6}),white:Ze({color:"#f3f3f1",roughness:.5}),whiteGloss:Ze({color:"#f5f5f3",roughness:.2}),cream:Ze({color:"#e8e2c8",roughness:.6}),glass:new Et({color:"#cfdde0",transparent:!0,opacity:.16,roughness:.05,metalness:.1,depthWrite:!1,side:Ot}),glassFrost:new Et({color:"#f2f2f0",transparent:!0,opacity:.82,roughness:.5,depthWrite:!1,side:Ot}),glassYellow:Ze({color:"#f1d27a",emissive:"#a8820f",emissiveIntensity:.35,roughness:.4}),lightStrip:Ze({color:"#ffffff",emissive:"#fff4e0",emissiveIntensity:2.2}),spotGlow:Ze({color:"#ffffff",emissive:"#ffe9c4",emissiveIntensity:3}),screenCode:Ze({map:Af,emissive:"#ffffff",emissiveMap:Af,emissiveIntensity:.9,roughness:.3}),screenDash:Ze({map:Rf,emissive:"#ffffff",emissiveMap:Rf,emissiveIntensity:.7,roughness:.3}),screenDark:Ze({map:Cf,emissive:"#ffffff",emissiveMap:Cf,emissiveIntensity:.8,roughness:.3}),screenOff:Ze({color:"#0b0b0c",roughness:.15,metalness:.3}),plant:Ze({color:"#3d6b2f",roughness:.7}),plantLight:Ze({color:"#7f9b3a",roughness:.7}),soil:Ze({color:"#3a2c20",roughness:1}),plantDark:Ze({color:"#2c4f24",roughness:.55}),stem:Ze({color:"#4f7a34",roughness:.7}),petalPink:Ze({color:"#e8738f",roughness:.6}),petalWhite:Ze({color:"#f6f2ea",roughness:.6}),petalYellow:Ze({color:"#f2c230",roughness:.6}),flowerCentre:Ze({color:"#d99a1c",roughness:.8}),ceramic:Ze({color:"#efece6",roughness:.25}),led:Ze({color:"#ffffff",emissive:"#dff1ff",emissiveIntensity:2}),beanbag:Ze({color:"#3b3d40",roughness:.95}),bottleYellow:Ze({color:"#f2b705",roughness:.3,metalness:.4}),bottleBlue:Ze({color:"#1f4fa8",roughness:.3,metalness:.4}),bottleTeal:Ze({color:"#3ab7a6",roughness:.3}),red:Ze({color:"#b23a2e",roughness:.6}),pergola:Ze({color:"#8a4b3a",roughness:.8}),rail:Ze({color:"#4a4a4a",roughness:.4,metalness:.6}),logo:Ze({map:kc("textures/logo.png"),transparent:!0,alphaTest:.4,roughness:.4}),logoText:Ze({map:Uy,transparent:!0,alphaTest:.3,roughness:.6}),gallery:Ze({map:kc("textures/gallery.jpg"),roughness:.6}),clock:Ze({map:Oy,roughness:.5})};w.screens=[w.screenCode,w.screenCode,w.screenDash,w.screenDark];const Jr=new D;function Zn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Jr.copy(e),Jr[n]=0,Jr.normalize();const l=.5*o/(o+a),h=1-Jr.angleTo(i)/c;return Math.sign(Jr[t])===1?h*l:a/(o+a)+l+l*(1-h)}class ky extends en{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new D,c=new D,l=new D(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new D,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=Zn(g,c,"z","y",r,n),f[p+1]=1-Zn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-Zn(g,c,"z","y",r,n),f[p+1]=1-Zn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-Zn(g,c,"x","z",r,e),f[p+1]=Zn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-Zn(g,c,"x","z",r,e),f[p+1]=1-Zn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-Zn(g,c,"x","y",r,e),f[p+1]=1-Zn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=Zn(g,c,"x","y",r,e),f[p+1]=1-Zn(g,c,"y","x",r,t);break}}}function Ka(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ht;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Pf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=Pf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Pf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Sn(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function Lf(i,e){if(e===M0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===$l||e===zd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===$l)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Fy extends Fr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gy(t)}),this.register(function(t){return new Wy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new qy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new Vy(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new zy(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=go.extractUrlBase(e);o=go.resolveURL(l,this.path)}else o=go.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Mp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ep){try{o[dt.KHR_BINARY_GLTF]=new sM(e)}catch(u){s&&s(u);return}r=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new xM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:o[u]=new Hy;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[u]=new rM(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[u]=new oM;break;case dt.KHR_MESH_QUANTIZATION:o[u]=new aM;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function By(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zy{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new rt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Nn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new bp(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $a(h),l.distance=u;break;case"spot":l=new ay(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,zi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Hy{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,t,n){const s=[];e.color=new rt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Nn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}}class Vy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Gy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(a,a)}return Promise.all(r)}}class Wy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Xy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class qy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Nn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class Yy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class $y{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new rt().setRGB(a[0],a[1],a[2],Nn),Promise.all(r)}}class Ky{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class jy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new rt().setRGB(a[0],a[1],a[2],Nn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(r)}}class Zy{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Jy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Qy{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class eM{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class tM{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class nM{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}}class iM{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Qn.TRIANGLES&&l.mode!==Qn.TRIANGLE_STRIP&&l.mode!==Qn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const g of u){const _=new ot,m=new D,p=new gi,v=new D(1,1,1),y=new f1(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(m,p,v));for(const x in c)if(x==="_COLOR_0"){const E=c[x];y.instanceColor=new Jl(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);Dt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Ep="glTF",Qr=12,If={JSON:1313821514,BIN:5130562};class sM{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ep)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Qr,r=new DataView(e,Qr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===If.JSON){const l=new Uint8Array(e,Qr+o,a);this.content=n.decode(l)}else if(c===If.BIN){const l=Qr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class rM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=sh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=sh[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=vr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(const g in d.attributes){const _=d.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(d)},a,l,Nn,f)})})}}class oM{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class aM{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}}class Tp extends Po{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,_=g-l,m=-2*d+3*f,p=d-f,v=1-m,y=p-f+u;for(let x=0;x!==a;x++){const E=o[_+x+a],S=o[_+x+c]*h,R=o[g+x+a],P=o[g+x]*h;r[x]=v*E+y*S+m*R+p*P}return r}}const cM=new gi;class lM extends Tp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return cM.fromArray(r).normalize().toArray(r),r}}const Qn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Df={9728:In,9729:Yn,9984:Pd,9985:ba,9986:oo,9987:Vi},Nf={33071:hs,33648:Pa,10497:pi},Bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},sh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hM={CUBICSPLINE:void 0,LINEAR:yo,STEP:vo},zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Et({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qi})),i.DefaultMaterial}function As(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function dM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pM(i){let e;const t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hc(t.attributes):e=i.indices+":"+Hc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Hc(i.targets[n]);return e}function Hc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function rh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const gM=new ot;class xM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new By,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Nh(this.options.manager):this.textureLoader=new hy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return As(r,a,s),zi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(go.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Bc[s.type],a=vr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Sn(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Bc[s.type],l=vr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==u){const p=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(v);y||(_=new l(a,p*d,s.count*d/h),y=new rp(_,d/h),t.cache.add(v,y)),m=new bo(y,c,f%d/h,g)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new Sn(_,c,g);if(s.sparse!==void 0){const p=Bc.SCALAR,v=vr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,E=new v(o[1],y,s.sparse.count*p),S=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new Sn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=E.length;R<P;R++){const M=E[R];if(m.setX(M,S[R*c]),c>=2&&m.setY(M,S[R*c+1]),c>=3&&m.setZ(M,S[R*c+2]),c>=4&&m.setW(M,S[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Df[f.magFilter]||Yn,h.minFilter=Df[f.minFilter]||Vi,h.wrapS=Nf[f.wrapS]||pi,h.wrapT=Nf[f.wrapT]||pi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==In&&h.minFilter!==Yn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new tn(_);m.needsUpdate=!0,f(m)}),t.load(go.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),zi(u,o),u.userData.mimeType=o.mimeType||mM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new hp,di.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Eh,di.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Et}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){const u=s[dt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new rt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Nn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,yt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ot);const h=r.alphaMode||zc.OPAQUE;if(h===zc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===zc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ln&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ln&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ln){const u=r.emissiveFactor;a.emissive=new rt().setRGB(u[0],u[1],u[2],Nn)}return r.emissiveTexture!==void 0&&o!==Ln&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&As(s,u,r),u})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Uf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=pM(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Uf(new Ht,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?uM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const _=h[d],m=o[d];let p;const v=l[d];if(m.mode===Qn.TRIANGLES||m.mode===Qn.TRIANGLE_STRIP||m.mode===Qn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new l1(_,v):new ve(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Qn.TRIANGLE_STRIP?p.geometry=Lf(p.geometry,zd):m.mode===Qn.TRIANGLE_FAN&&(p.geometry=Lf(p.geometry,$l));else if(m.mode===Qn.LINES)p=new d1(_,v);else if(m.mode===Qn.LINE_STRIP)p=new Th(_,v);else if(m.mode===Qn.LINE_LOOP)p=new lp(_,v);else if(m.mode===Qn.POINTS)p=new p1(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&dM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),zi(p,r),m.extensions&&As(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&As(s,u[0],r),u[0];const f=new nt;r.extensions&&As(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Cn($0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Mh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new ot;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Sh(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,y=f.length;v<y;v++){const x=f[v],E=d[v],S=g[v],R=_[v],P=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const M=n._createAnimationTracks(x,E,S,R,P);if(M)for(let b=0;b<M.length;b++)p.push(M[b])}return new J1(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,gM)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new ap:l.length>1?h=new nt:l.length===1?h=l[0]:h=new Dt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),zi(h,r),r.extensions&&As(n,h,r),r.matrix!==void 0){const u=new ot;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new nt;n.name&&(r.name=s.createUniqueName(n.name)),zi(r,n),n.extensions&&As(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof di||f instanceof tn)&&u.set(f,d);return h.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];is[r.path]===is.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(is[r.path]){case is.weights:l=Cr;break;case is.rotation:l=Pr;break;case is.position:case is.scale:l=Lr;break;default:switch(n.itemSize){case 1:l=Cr;break;case 2:case 3:default:l=Lr;break}break}const h=s.interpolation!==void 0?hM[s.interpolation]:yo,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+is[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=rh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Pr?lM:Tp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _M(i,e,t){const n=e.attributes,s=new wi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){const h=rh(vr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,c=new D;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=rh(vr[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Si;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Uf(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=sh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return mt.workingColorSpace!==Nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),zi(i,e),_M(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?fM(i,e.targets,t):i})}const Vc=new Map;function dn(i,e){return Vc.has(i)||Vc.set(i,e()),Vc.get(i)}function vM(i,e,t){const n=new Co,s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),n}function lo(i,e,t,n,s){const r=new Wa(vM(i-2*s,e-2*s,Math.max(.001,n-s)),{depth:t-2*s,bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:6});return r.translate(0,0,s),r}const ga={shell:()=>dn("mon.shell",()=>{const i=lo(.536,.322,.012,.008,.0025);return i.translate(0,.35-.005,-.0592-.012),i}),back:()=>dn("mon.back",()=>{const i=lo(.42,.22,.016,.03,.006);i.translate(0,.335,-.0712-.016);const e=lo(.22,.13,.014,.03,.006);return e.translate(0,.325,-.0872-.014),Ka([i,e])}),arm:()=>dn("mon.arm",()=>{const i=new up([new D(0,.008,-.03),new D(0,.05,-.085),new D(0,.16,-.13),new D(0,.27,-.125),new D(0,.31,-.1)]),e=new qa(i,24,1,10,!1),t=e.attributes.position,n=new D,s=new D;for(let r=0;r<t.count;r++){const o=Math.floor(r/11),a=o/24;i.getPointAt(Math.min(1,a),s),n.set(t.getX(r),t.getY(r),t.getZ(r)).sub(s),t.setXYZ(r,s.x+n.x*.024,s.y+n.y*.008,s.z+n.z*.008)}return e.computeVertexNormals(),e}),foot:()=>dn("mon.foot",()=>{const i=lo(.24,.17,.008,.07,.003);return i.rotateX(-Math.PI/2),i.translate(0,0,-.05),i})},Of={base:()=>dn("kb.base",()=>{const i=lo(.28,.108,.01,.008,.003);i.rotateX(-Math.PI/2);const e=i.attributes.position;for(let t=0;t<e.count;t++)e.getY(t)>.005&&e.getZ(t)<0&&e.setY(t,e.getY(t)+.004*(-e.getZ(t)/.054));return i.computeVertexNormals(),i.translate(-.01,0,.25),i}),keys:()=>dn("kb.keys",()=>{const i=[],s=(r,o,a)=>{const c=new en(a,.004,.0155);c.translate(r,.0125+.004*(.304-o)/.108,o),i.push(c)};for(let r=0;r<5;r++){const o=.213+r*.0185;if(r===4){let c=-.132;for(const l of[1,1,1.25,6.5,1.25,1,1,1]){const h=l*.0185-.002999999999999999;s(c+h/2,o,h),c+=l*.0185}continue}const a=14;for(let c=0;c<a;c++)s(-.01-.13+.008+.0155/2+c*.0185+r%2*.004,o,.0155)}return Ka(i)})},kf={shell:()=>dn("mouse.shell",()=>{const i=new Zt(1,20,12,0,Math.PI*2,0,Math.PI/2);i.scale(.03,.022,.054);const e=i.attributes.position;for(let t=0;t<e.count;t++)e.setY(t,e.getY(t)*(1+.15*Math.max(0,e.getZ(t)/.054)));return i.computeVertexNormals(),i}),wheel:()=>dn("mouse.wheel",()=>{const i=new Dn(.006,.006,.005,12);return i.rotateZ(Math.PI/2),i})},Ff={body:()=>dn("bottle.body",()=>new Nr([[0,0],[.028,0],[.032,.006],[.032,.16],[.03,.18],[.022,.196],[.019,.2],[0,.2]].map(([i,e])=>new ye(i,e)),18)),cap:()=>dn("bottle.cap",()=>new Dn(.02,.021,.03,16).translate(0,.215,0))};function Ap(i=0,{width:e=.09,thick:t=.016,bend:n=.08,twist:s=.5}={}){return dn(`blade.${i}.${e}.${t}.${n}.${s}`,()=>{const o=[],a=[],c=n*(.6+.4*(i*37%10)/10)*(i%2?-1:1),l=s*(i%3===2?-1:1);for(let f=0;f<=10;f++){const d=f/10,g=e/2*Math.sin(Math.PI*Math.min(1,.12+d*.95))*(1-.35*d),_=t/2*(1-d*.85),m=l*d,p=Math.cos(m),v=Math.sin(m),y=c*d*d;for(const[x,E]of[[-g,0],[0,_],[g,0],[0,-_]])o.push(x*p-E*v,d,y+x*v+E*p)}const h=o.length/3;o.push(0,1.04,c*1.08);for(let f=0;f<10;f++)for(let d=0;d<4;d++){const g=f*4+d,_=f*4+(d+1)%4,m=g+4,p=_+4;a.push(g,_,m,_,p,m)}for(let f=0;f<4;f++)a.push(10*4+f,10*4+(f+1)%4,h);a.push(0,2,1,0,3,2);const u=new Ht;return u.setAttribute("position",new ft(o,3)),u.setIndex(a),u.computeVertexNormals(),u})}function yM(i,e){return dn(`planter.${i}.${e}`,()=>{const t=i/2-.004,n=t*.78,s=new Nr([[0,.002],[n-.01,0],[n,.012],[t-.012,e-.03],[t,e-.02],[t,e-.004],[t-.006,e],[t-.016,e-.004],[t-.018,e-.04]].map(([o,a])=>new ye(o,a)),32),r=new $n(t-.016,28).rotateX(-Math.PI/2).translate(0,e-.035,0);return{pot:s,soil:r,soilY:e-.035}})}const xa={petal:()=>dn("fl.petal",()=>{const i=new Zt(1,10,6);return i.scale(.011,.0025,.022),i.translate(0,0,.02),i}),centre:()=>dn("fl.centre",()=>new Zt(.009,10,8).scale(1,.6,1)),pot:()=>dn("fl.pot",()=>new Nr([[0,.002],[.04,0],[.046,.01],[.058,.1],[.062,.108],[.06,.112],[.054,.105]].map(([i,e])=>new ye(i,e)),28)),soil:()=>dn("fl.soil",()=>new $n(.055,20).rotateX(-Math.PI/2).translate(0,.1,0))};function MM(i){const e=`stem.${i.map(t=>t.toFixed(3)).join(",")}`;return dn(e,()=>{const t=new Ch(new D(0,0,0),new D(i[0]*.2,i[1]*.6,i[2]*.2),new D(...i));return new qa(t,10,.0025,5,!1)})}new Fy;const bM=new en(1,1,1);function T(i,e,t,n,s,r,o,a,{shadow:c=!0,ry:l=0,rx:h=0,rz:u=0}={}){const f=new ve(bM,e);return f.scale.set(t,n,s),f.position.set(r,o,a),f.rotation.set(h,l,u),f.castShadow=c,f.receiveShadow=!0,i.add(f),f}function et(i,e,t,n,s,r,o,a,{seg:c=12,shadow:l=!0,rx:h=0,rz:u=0,open:f=!1}={}){const d=new ve(new Dn(t,n,s,c,1,f),e);return d.position.set(r,o,a),d.rotation.set(h,0,u),d.castShadow=l,d.receiveShadow=!0,i.add(d),d}function Hi(i,e,t,n,s,r,o,a,c){const l=new ve(new ky(t,n,s,2,r),e);return l.position.set(o,a,c),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function gt(i,e,t,n,s,r,o,a=0,c=0){const l=new ve(new ut(t,n),e);return l.position.set(s,r,o),l.rotation.set(c,a,0,"YXZ"),l.receiveShadow=!0,i.add(l),l}function Jt(i,e,t,n=0,s=0,r=0,{shadow:o=!0,rx:a=0,ry:c=0,rz:l=0,s:h=null}={}){const u=new ve(e,t);return u.position.set(n,s,r),u.rotation.set(a,c,l),h&&(Array.isArray(h)?u.scale.set(...h):u.scale.setScalar(h)),u.castShadow=o,u.receiveShadow=!0,i.add(u),u}function Un(i,e=0,t=0,n=0,s=0){const r=new nt;return r.position.set(e,t,n),r.rotation.y=s,i.add(r),r}function yr(i,e,t,n=0,{exec:s=!1}={}){const r=Un(i,e,0,t,n);r.userData.label="Chair";for(let c=0;c<5;c++){const l=c/5*Math.PI*2,h=T(r,w.black,.04,.035,.32,Math.sin(l)*.15,.07,Math.cos(l)*.15,{ry:l});h.castShadow=!1,et(r,w.black,.025,.025,.04,Math.sin(l)*.3,.03,Math.cos(l)*.3,{seg:6,shadow:!1})}et(r,w.chrome,.025,.025,.32,0,.26,0,{seg:8}),Hi(r,w.fabric,.5,.08,.48,.03,0,.47,0);const o=s?.75:.55;T(r,w.black,.04,.5,.04,0,.62,-.25);const a=T(r,w.mesh,.46,o,.05,0,.62+o/2,-.27,{rx:-.1});a.material=w.mesh,s&&T(r,w.mesh,.3,.14,.06,0,1.45,-.33,{rx:-.1});for(const c of[-1,1])T(r,w.black,.035,.22,.035,c*.26,.6,-.02),T(r,w.black,.06,.025,.24,c*.26,.72,.02);return r}function Rp(i,e,t,n=0){const s=Un(i,e,0,t,n);s.userData.label="Visitor chair";for(const r of[-1,1])T(s,w.chrome,.025,.025,.5,r*.22,.012,.05),T(s,w.chrome,.025,.45,.025,r*.22,.23,.29,{rx:.05});return T(s,w.fabric,.48,.06,.46,0,.47,.05),T(s,w.mesh,.46,.5,.04,0,.78,-.2,{rx:-.12}),s}function wM(i,e,t,n,s=0){const r=Un(i,e,.77,t,n);r.userData.label="Monitor",Jt(r,ga.foot(),w.black),Jt(r,ga.arm(),w.silver),Jt(r,ga.back(),w.black),Jt(r,ga.shell(),w.black),gt(r,s%3===2?w.screenDash:w.screenCode,.52,.3,0,.35,-.058),T(r,w.led,.006,.0025,.002,.235,.35-.1665,-.0585,{shadow:!1});const o=-.26,a=.06;Hi(r,w.black,.114,.006,.114,.002,o,.003,a),Hi(r,w.silver,.12,.03,.12,.012,o,.021,a),gt(r,w.macTop,.09,.09,o,.0365,a,0,-Math.PI/2),T(r,w.black,.012,.004,.002,o-.03,.021,a+.0605,{shadow:!1}),T(r,w.black,.012,.004,.002,o-.012,.021,a+.0605,{shadow:!1}),T(r,w.white,.004,.004,.002,o+.04,.021,a+.0605,{shadow:!1}),Jt(r,Of.base(),w.silver,0,0,0,{shadow:!1}),Jt(r,Of.keys(),w.white,0,0,0,{shadow:!1});const c=.24,l=.24;return Jt(r,kf.shell(),w.blackMatte,c,0,l),T(r,w.black,.0015,.003,.024,c,.0195,l-.02,{shadow:!1,rx:.25}),Jt(r,kf.wheel(),w.chrome,c,.0185,l-.024,{shadow:!1}),s%3===0&&(Jt(r,Ff.body(),w.bottleYellow,.28,0,-.04),Jt(r,Ff.cap(),w.black,.28,0,-.04,{shadow:!1})),r}function Bf(i,e,t,n,{width:s=1.5,seats:r=!0,solidFn:o,seatW:a=1.1,chairOff:c=.12,sides:l=[-1,1]}={}){const h=Un(i,e,0,0);h.userData.label="Desk";const u=n-t,f=(t+n)/2;T(h,w.greyOak,s,.04,u,0,.75,f),T(h,w.oakEdge,s+.004,.012,u+.004,0,.734,f,{shadow:!1});const d=Math.max(2,Math.round(u/2)+1);for(let m=0;m<d;m++){const p=t+.12+m/(d-1)*(u-.24);for(const v of[-1,1])T(h,w.black,.05,.78,.05,v*(s/2-.22),.37,p,{rz:v*.2}),T(h,w.black,.05,.78,.05,v*(s/2-.22),.37,p,{rz:-v*.2});T(h,w.black,s-.2,.05,.05,0,.72,p)}if(o&&o(e-s/2,t,e+s/2,n),!r)return h;const g=Math.max(1,Math.floor(u/a+1e-6));let _=0;for(const m of l)for(let p=0;p<g;p++){const v=t+(p+.5)*(u/g),y=l.length===2?m*.22:-m*(s/2-.2);wM(h,y,v,m*Math.PI/2,_++);const x=e+m*(s/2+c);yr(i,x,v,m>0?-Math.PI/2:Math.PI/2),o&&o(x-.2,v-.2,x+.2,v+.2)}return h}function Fh(i,e,t,n=0,s=2){const r=Un(i,e,0,t,n);r.userData.label="Sofa";const o=s*.75+.3;Hi(r,w.leather,o,.38,.9,.06,0,.24,0),Hi(r,w.leather,o,.5,.22,.08,0,.62,-.34);for(const a of[-1,1])Hi(r,w.leather,.18,.62,.9,.06,a*(o/2-.09),.33,0);for(let a=0;a<s;a++){const c=-o/2+.15+.75*(a+.5);Hi(r,w.leather,.72,.14,.62,.06,c,.49,.08);const l=Hi(r,w.leather,.5,.4,.14,.07,c,.78,-.18);l.rotation.x=-.18}return r}function ja(i,e,t,n,s=9,r=.8){const o=Un(i,e,t,n);o.userData.label="Plant";for(let a=0;a<s;a++){const c=r*(.6+Je()*.6),l=Je()>.3;Jt(o,Ap(a%5),l?w.plant:a%2?w.plantDark:w.plantLight,(Je()-.5)*.3,0,(Je()-.5)*.2,{s:[1,c,1]}).rotation.set((Je()-.5)*.35,Je()*Math.PI,(Je()-.5)*.35)}return o}function Bh(i,e,t,{size:n=.45,h:s=.45,mat:r=w.white}={}){const o=Un(i,e,0,t);o.userData.label="Plant";const{pot:a,soil:c,soilY:l}=yM(n,s);return Jt(o,a,r),Jt(o,c,w.soil,0,0,0,{shadow:!1}),ja(o,0,l-.01,0,11,.9),o}function Cp(i,e,t,n,{petal:s=w.petalPink,n:r=5,scale:o=1}={}){const a=Un(i,e,t,n);a.userData.label="Flowers",a.scale.setScalar(o),Jt(a,xa.pot(),w.ceramic),Jt(a,xa.soil(),w.soil,0,0,0,{shadow:!1});const c=l=>{const h=Math.sin(l*127.1+e*311.7+n*74.7)*43758.5453;return h-Math.floor(h)};for(let l=0;l<r;l++){const h=l/r*Math.PI*2+c(l)*.6,u=.025+c(l+9)*.06,f=.16+c(l+3)*.12,d=[Math.cos(h)*u,f,Math.sin(h)*u];Jt(a,MM(d),w.stem,0,.1,0,{shadow:!1});const g=Un(a,d[0],.1+d[1],d[2]);g.rotation.set(Math.sin(h)*.5,0,-Math.cos(h)*.5);const _=6;for(let m=0;m<_;m++)Jt(g,xa.petal(),s,0,0,0,{ry:m/_*Math.PI*2+c(l+m)*.2,rx:-.35,shadow:!1});Jt(g,xa.centre(),w.flowerCentre,0,.003,0,{shadow:!1})}for(let l=0;l<6;l++)Jt(a,Ap(l,{width:.035,thick:.006,bend:.06,twist:.3}),l%2?w.plant:w.plantDark,0,.098,0,{s:[1,.11+c(l+20)*.05,1],shadow:!1}).rotation.set(.7+c(l+30)*.3,l/6*Math.PI*2,0,"YXZ");return a}function Pp(i,e,t,n=w.beanbag){const s=new ve(new Zt(.5,20,14),n);return s.scale.set(1,.65,1.05),s.position.set(e,.3,t),s.userData.label="Bean bag",s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function SM(i,e,t,n,{yellowCubbies:s=[]}={}){const r=Un(i,e,0,0);r.userData.label="Shelving";const o=n-t,a=(t+n)/2,c=.4,l=2.4,h=.55;T(r,w.white,c,h,o,0,h/2,a);const u=Math.max(1,Math.round(o/1.1));for(let d=0;d<u;d++){const g=t+(d+.5)*(o/u);T(r,w.blackMatte,.3,.32,.3,0,h+.16,g),ja(r,0,h+.32,g,7,.6)}for(const d of[t+.02,n-.02])for(const g of[-1,1])T(r,w.black,.025,l-h,.025,g*c/2,h+(l-h)/2,d);for(const d of[1.55,l]){for(const g of[-1,1])T(r,w.black,.025,.025,o,g*c/2,d,a,{shadow:!1});T(r,w.black,c,.012,o,0,d-.01,a,{shadow:!1})}const f=Math.max(1,Math.round(o/.65));for(let d=1;d<f;d++)for(const g of[-1,1])T(r,w.black,.02,l-h,.02,g*c/2,h+(l-h)/2,t+d/f*o,{shadow:!1});for(const d of s){if(d.i>=f)continue;const g=t+(d.i+.5)*(o/f),_=d.row===0?1.2:1.9;T(r,w.yellow,c-.05,.45,o/f-.08,0,_,g)}for(let d=0;d<f;d++)Je()<.3&&T(r,w.blackMatte,.12,.15+Je()*.1,.12,0,1.55+.09,t+(d+.5)*(o/f));return r}function Lp(i,e,t,n=2.4,s=0,r=2.6,o=3.6){const a=Un(i,e,r,t,s);a.userData.label="Light",T(a,w.black,n,.06,.08,0,0,0,{shadow:!1}),gt(a,w.lightStrip,n-.04,.05,0,-.031,0,0,Math.PI/2);for(const c of[-.4,.4])et(a,w.black,.003,.003,o-r,c*n,(o-r)/2,0,{seg:3,shadow:!1});return a}function Ua(i,e,t,n=2.2,s=3.6,r=1){const o=Un(i,e,n,t);o.userData.label="Pendant light",et(o,w.black,.004,.004,s-n,0,(s-n)/2,0,{seg:3,shadow:!1});const a=new ve(new Lh(.18*r,.26*r,20,1,!0),w.black);a.position.y=-.1*r,a.material.side=Ot,o.add(a),et(o,w.black,.02,.02,.06,0,.05,0,{seg:8,shadow:!1});const c=new ve(new $n(.15*r,16),w.spotGlow);return c.rotation.x=Math.PI/2,c.position.y=-.22*r,o.add(c),o}function EM(i,e,t,n){et(i,w.black,.05,.05,.12,e,n-.06,t,{seg:10,shadow:!1});const s=new ve(new $n(.035,10),w.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,n-.121,t),i.add(s)}function zh(i,e,t,n,s=0){const r=Un(i,e,t,n,s);return r.userData.label="AC unit",Hi(r,w.white,.9,.28,.2,.05,0,0,.1),T(r,w.metalDark,.8,.02,.02,0,-.1,.2,{shadow:!1}),r}function TM(i,e,t,n=3){T(i,w.white,.85,.12,.85,e,n,t,{shadow:!1}),T(i,w.metalDark,.55,.02,.55,e,n-.065,t,{shadow:!1})}function AM(i,e,t,n,s=0,r=2.4){const o=n-t,a=Un(i,e,0,(t+n)/2,s);a.userData.label="Lockers";const c=Math.round(o/.5),l=5,h=o/c,u=(r-.1)/l;T(a,w.white,.02,r,o,-.265,r/2,0),T(a,w.white,.55,.1,o,0,.05,0);for(let f=0;f<=l;f++)T(a,w.white,.55,.02,o,0,f===l?r-.01:.1+f*u,0);for(let f=0;f<=c;f++)T(a,w.white,.55,r,.02,0,r/2,-o/2+f*h+(f===c?-.01:f===0?.01:0));a.updateMatrixWorld(!0);for(let f=0;f<c;f++)for(let d=0;d<l;d++){const g=-o/2+(f+.5)*h,_=.1+(d+.5)*u;Je()<.35&&T(a,Je()<.5?w.bottleYellow:w.black,.22,.05+Je()*.12,h-.16,0,.1+d*u+.02+.03,g,{shadow:!1});const m=new nt;m.position.copy(a.localToWorld(new D(.285,_,g-h/2+.01))),m.rotation.y=a.rotation.y,T(m,w.whiteGloss,.01,u-.02,h-.02,0,0,h/2-.01,{shadow:!1}),T(m,w.metalDark,.02,.07,.07,.01,.08,h-.09,{shadow:!1,rx:Math.PI/4}),Oa.push({leaf:m,closed:a.rotation.y,open:a.rotation.y+1.9,center:a.localToWorld(new D(.285,_,g))})}return a}function RM(i,e,t,n,s=0){const r=Un(i,e,t,n,s);r.userData.label="Wall clock";const o=new ve(new $n(.2,32),w.clock);o.position.z=.03,r.add(o);const a=new ve(new Ur(.2,.02,8,32),w.black);return a.position.z=.03,r.add(a),r}const os=[];function He(i,e,t,n){os.push({minX:Math.min(i,t),maxX:Math.max(i,t),minZ:Math.min(e,n),maxZ:Math.max(e,n)})}const eo=new wi;function Pn(i,e=0){return i.updateMatrixWorld(!0),eo.setFromObject(i),He(eo.min.x-e,eo.min.z-e,eo.max.x+e,eo.max.z+e),i}function zf(i,e,t){for(const n of os)if(i+t>n.minX&&i-t<n.maxX&&e+t>n.minZ&&e-t<n.maxZ)return n;return null}function CM(i,e,t,n){const s=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(t))/(n*.5))),r=e/s,o=t/s;for(let a=0;a<s;a++){if(r){const c=i.x+r,l=zf(c,i.z,n);l?i.x=r>0?l.minX-n-1e-4:l.maxX+n+1e-4:i.x=c}if(o){const c=i.z+o,l=zf(i.x,c,n);l?i.z=o>0?l.minZ-n-1e-4:l.maxZ+n+1e-4:i.z=c}}}const Be=3.6,Ke=3,jt=10.05,Pt=10.3,pt=18.7,ls=3.5,fn=3,Gt=5.75,Ut=3,cr=6.15,Wi=8.9,It=7.95,qt=7.3,as=.15,xo=[12.45,15.45],bn=.5,To=2.9,Tt=9.25,Hf=pt,Fn=3.7,Lt=22.6,oh=[20,21.6],PM=25.2,ci=6.6,Mn=27.2,LM=[2.3,3.2];function Ds(i,e,t,n){const s=i.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*e/n,s.getY(r)*t/n);return s.needsUpdate=!0,i}function St(i,e,t,n,s,r,o,{down:a=!1,tile:c=2.4}={}){const l=s-t,h=r-n,u=Ds(new ut(l,h),l,h,c),f=new ve(u,e);return f.rotation.x=a?Math.PI/2:-Math.PI/2,f.position.set((t+s)/2,o,(n+r)/2),f.receiveShadow=!0,i.add(f),f}function Yt(i,e,t,n,s,{h:r=Be,mat:o=w.wall,t:a=.2,y0:c=0,collide:l=!0}={}){const h=Math.abs(n-e)>=Math.abs(s-t),u=h?Math.abs(n-e):a,f=h?a:Math.abs(s-t),d=T(i,o,u,r,f,(e+n)/2,c+r/2,(t+s)/2);return d.userData.label="Wall",l&&c<1.5&&He((e+n)/2-u/2,(t+s)/2-f/2,(e+n)/2+u/2,(t+s)/2+f/2),d}const Za=[],Oa=[],_n={x:10.3+.03,y:1.25,z:9.8};function dr(i,{x0:e,z0:t,x1:n,z1:s,h:r=3,door:o=null,transom:a=2.3,frost:c=!1,panel:l=1.1,swing:h=1,name:u="door"}){const f=t===s,d=new nt;d.userData.label="Glass wall",i.add(d),i=d;const g=f?e:t,_=f?n:s,m=f?t:e,p=(x,E,S,R,P)=>f?T(i,w.black,R,P,S,x,E,m,{shadow:!0}):T(i,w.black,S,P,R,m,E,x,{shadow:!0}),v=(x,E,S,R)=>{const P=new ve(new ut(E-x,R-S),c?w.glassFrost:w.glass);P.position.set(f?(x+E)/2:m,(S+R)/2,f?m:(x+E)/2),f||(P.rotation.y=Math.PI/2),P.renderOrder=2,i.add(P)},y=o?[[g,Math.min(...o)],[Math.max(...o),_]]:[[g,_]];for(const[x,E]of y){if(E-x<.01)continue;v(x,E,.05,r);const S=Math.max(1,Math.round((E-x)/l));for(let R=0;R<=S;R++)p(x+R/S*(E-x),r/2,.05,.05,r);p((x+E)/2,.04,.06,E-x,.08),a&&a<r&&p((x+E)/2,a,.05,E-x,.05),f?He(x,m-.06,E,m+.06):He(m-.06,x,m+.06,E)}if(p((g+_)/2,r-.03,.06,_-g,.06),o){const[x,E]=o,S=Math.abs(E-x);v(Math.min(x,E),Math.max(x,E),a,r),p((x+E)/2,a,.06,S,.06);const R=new nt;R.position.set(f?x:m,0,f?m:x);const P=Math.sign(E-x),M=S-.04,b=new ve(new ut(M,a-.1),w.glass);b.position.set(P*M/2,a/2,0),R.add(b);for(const j of[0,1])T(R,w.black,.04,a-.08,.04,P*j*M,a/2,0);T(R,w.black,M,.05,.04,P*M/2,.06,0),T(R,w.black,M,.04,.04,P*M/2,a-.08,0),T(R,w.chrome,.02,.35,.03,P*(M-.1),1.05,.04);const N=f?0:-Math.PI/2,V=N+(f?-1:1)*h*P*1.4;R.rotation.y=N;const H=Math.min(x,E),$=Math.max(x,E);Za.push({leaf:R,closed:N,open:V,name:u,handle:[P*(M-.1),1.2,.04],x:f?(x+E)/2:m,z:f?m:(x+E)/2,block:f?{minX:H,maxX:$,minZ:m-.06,maxZ:m+.06}:{minX:m-.06,maxX:m+.06,minZ:H,maxZ:$}})}}function to(i,e,t,n,s,r){const o=t===s,a=o?n-e:s-t,c=new ve(new ut(a,r),w.glass);c.position.set((e+n)/2,r/2,(t+s)/2),o||(c.rotation.y=Math.PI/2),c.renderOrder=2,i.add(c);const l=Math.max(1,Math.round(a/1.2));for(let h=0;h<=l;h++)o?T(i,w.black,.07,r,.1,e+h/l*a,r/2,t):T(i,w.black,.1,r,.07,e,r/2,t+h/l*a);for(const h of[.08,.55,Math.min(2.45,r-.3),r-.04]){const u=h<.1?.16:.07;o?T(i,w.black,a,u,.1,(e+n)/2,h,t,{shadow:h>2}):T(i,w.black,.1,u,a,e,h,(t+s)/2,{shadow:h>2})}o?He(e,t-.08,n,t+.08):He(e-.08,t,e+.08,s)}function IM(i){St(i,w.diamond,0,ls,Ut,It,Ke,{down:!0}),St(i,w.diamond,Ut,Gt,qt,It,Ke,{down:!0}),St(i,w.diamond,qt,Gt,Pt,Tt,Ke,{down:!0});for(const[e,t]of[[1,4.4],[1,6.8],[2.4,6.8],[4,7],[5.6,7],[7.9,6.9],[9.4,8.6],[8.2,8.9]])EM(i,e,t,Ke);T(i,w.yellow,qt,Be-Ke,.08,qt/2,Ke+(Be-Ke)/2,It+.04,{shadow:!1}),T(i,w.yellow,qt,.07,.14,qt/2,Ke-.035,It,{shadow:!1}),St(i,w.white,0,0,Ut,ls,Ke,{down:!0}),St(i,w.white,Ut,fn,Wi,Gt,Ke,{down:!0});for(const[e,t]of[[1.5,1.6],[5,4.5],[8.2,4.5]])T(i,w.whiteGloss,.35,.02,.35,e,Ke-.01,t,{shadow:!1});St(i,w.ceilingBlack,0,It,jt,pt,Be,{down:!0});for(const e of[12.3,15.3])T(i,w.ceilingBlack,jt,.5,.4,jt/2,Be-.25,e,{shadow:!1});et(i,w.ceilingBlack,.2,.2,jt,jt/2,Be-.45,9.2,{rz:Math.PI/2,shadow:!1,seg:14}),et(i,w.red,.04,.04,pt-It,4.6,Be-.3,(It+pt)/2,{rx:Math.PI/2,shadow:!1,seg:8}),et(i,w.red,.04,.04,jt,jt/2,Be-.3,17.9,{rz:Math.PI/2,shadow:!1,seg:8});for(const[e,t]of[[2,12.2],[5.5,12.2],[2,15.3],[5.5,15.3],[8.6,12.2]])TM(i,e,t,Be-.62)}function Vf(i,e,t,n,s){const r=Math.hypot(n-e,s-t);T(i,w.blackMatte,.01,.012,r,qt+.008,(t+s)/2,(e+n)/2,{shadow:!1,rx:Math.atan2(-(s-t),n-e)})}function DM(i){T(i,w.concrete,as,Ke,Tt-7.4,qt-as/2,Ke/2,(7.4+Tt)/2),T(i,w.wall,as,Be-Ke,Tt-7.4,qt-as/2,Ke+(Be-Ke)/2,(7.4+Tt)/2,{shadow:!1}),He(qt-as,7.4,qt,Tt+.35);const t=Tt-7.4,n=new ve(Ds(new ut(t,Ke),t,Ke,1.6),w.concrete);n.position.set(qt+.003,Ke/2,(7.4+Tt)/2),n.rotation.y=Math.PI/2,n.receiveShadow=!0,n.userData.label="Logo wall",i.add(n),Vf(i,Tt,3,7.4+.1,1),Vf(i,7.4+.1,1,7.4+.9,0),gt(i,w.logo,.5,.72,qt+.03,2.35,8.25,Math.PI/2),gt(i,w.logoText,1,.35,qt+.02,1.78,8.3,Math.PI/2),Pn(Fh(i,qt+.47,8.4,Math.PI/2,2)),T(i,w.concrete,.5,Ke-.004,.32,qt-.15,(Ke-.004)/2,7.4+.14),Yt(i,qt-as,Tt+.175,8.3,Tt+.175,{h:Be,t:.35});const s=gt(i,w.glassFrost,Pt-8.3,Ke-.1,(8.3+Pt)/2,Ke/2,Tt);s.renderOrder=2;for(const[a,c,l]of[[8.7,1.5,.5],[9.25,.9,-.4],[9.25,2.2,.6],[9.85,1.4,-.5]])T(i,w.concrete,.45,1,.01,a,c,Tt-.02,{rz:l,shadow:!1});for(const a of[8.3,9.35,Pt])T(i,w.black,.05,Ke,.06,a,Ke/2,Tt);T(i,w.black,Pt-8.3,.06,.06,(8.3+Pt)/2,.03,Tt),T(i,w.wall,Pt-8.3,Be-Ke,.15,(8.3+Pt)/2,Ke+(Be-Ke)/2,Tt,{shadow:!1}),He(8.3,Tt-.08,Pt,Tt+.08),dr(i,{x0:Pt,z0:Gt,x1:Pt,z1:Tt,h:Ke,panel:.9,door:[7.6,8.65],transom:2.4,swing:-1,name:"entrance door"}),T(i,w.metalDark,.06,.05,.4,Pt-.06,2.3,8.4,{shadow:!1}),T(i,w.wall,.15,Be-Ke,Tt-Gt,Pt,Ke+(Be-Ke)/2,(Gt+Tt)/2,{shadow:!1}),T(i,w.blackMatte,.6,.01,1,Pt-.45,.005,8.12,{shadow:!1}),T(i,w.concrete,Pt-Wi,Be,Gt-fn,(Wi+Pt)/2,Be/2,(fn+Gt)/2),He(Wi,fn,Pt+.05,Gt);const r=new nt;r.position.set(9.85,0,Gt),i.add(r),T(r,w.cream,.56,2.3,.3,0,1.25,.15);for(const a of[.75,1.3,1.85,2.35])T(r,w.white,.58,.035,.32,0,a,.16);for(const[a,c,l]of[[-.14,1.87,.3],[.14,1.87,.26],[0,2.37,.34]])et(r,w.bottleYellow,.035,.05,l,a,c+l/2,.16,{seg:10});for(const[a,c,l]of[[-.12,1.32,w.gallery],[.13,1.32,w.red],[0,.77,w.gallery]])T(r,w.black,.2,.26,.03,a,c+.14,.16,{rx:-.12}),T(r,l,.16,.2,.01,a,c+.14,.178,{shadow:!1,rx:-.12});He(9.55,Gt,10.15,Gt+.32),T(i,w.white,.13,.16,.04,9.2,1.35,Gt+.02),T(i,w.bottleBlue,.07,.05,.01,9.2,1.38,Gt+.045,{shadow:!1});const o=new nt;o.userData.label="Reception desk",o.position.set(9.3,0,6.6),i.add(o),T(o,w.cream,.7,.05,1.25,0,.8,0),T(o,w.cream,.05,.78,1.25,-.33,.39,0,{rz:.12});for(const a of[-1,1])T(o,w.cream,.65,.78,.05,0,.39,a*.6);T(o,w.black,.05,.05,1.15,-.4,.03,0),et(o,w.black,.035,.035,.01,.1,.83,.3,{seg:12}),Cp(o,.12,.825,-.4,{petal:w.petalPink,n:6}),Pn(o),Ua(i,9.1,6.5,2.15,Ke,1.3),T(i,w.white,.08,.08,.06,qt+.05,2.85,9.1),Pn(Bh(i,9.95,8.95,{size:.4,h:.45}))}function Ip(i,e,t,n=1.6,{monitor:s=!1}={}){const r=new nt;r.userData.label="Cabin desk",r.position.set(e,0,t),i.add(r),T(r,w.whiteGloss,n,.05,.8,0,.77,0),T(r,w.woodDark,n-.1,.72,.05,0,.38,.36);for(let o=0;o<6;o++)T(r,w.black,n-.15,.02,.01,0,.15+o*.1,.39,{shadow:!1});T(r,w.woodDark,.05,.72,.75,-n/2+.05,.38,0),T(r,w.woodDark,.45,.72,.6,n/2-.25,.38,0),s&&(T(r,w.black,.5,.31,.03,-.25,1.12,-.2),T(r,w.black,.04,.3,.03,-.25,.94,-.23)),Pn(r)}function NM(i,e,t,n,s){const r=new nt;r.userData.label="Built-in shelves",r.position.set(e+s*.2,0,(t+n)/2),i.add(r);const o=n-t;T(r,w.white,.4,2.7,o,0,1.35,0);const a=Math.max(1,Math.round(o/.8));for(let c=0;c<a;c++){const l=-o/2+(c+.5)*(o/a);for(const h of[1.2,1.65,2.1])T(r,w.whiteGloss,.02,.03,o/a-.06,s*.2,h,l,{shadow:!1});for(const h of[.25,.6,.95])T(r,w.whiteGloss,.02,.32,o/a-.06,s*.205,h,l,{shadow:!1});Je()<.6&&T(r,w.black,.04,.18,.2,s*.12,1.32,l),Je()<.6&&T(r,w.gallery,.12,.2,.15,s*.12,1.75,l+.2)}He(Math.min(e,e+s*.4),t,Math.max(e,e+s*.4),n)}function Gf(i,e,t,n){const s=t-e,r=new ve(Ds(new ut(s,Ke),s,Ke,1.6),w.concrete);r.position.set((e+t)/2,Ke/2,n+.105),r.receiveShadow=!0,i.add(r)}function Wf(i,e,t,{chairsZ:n,back:s,len:r=1.6,visitors:o=[-.4,.4],monitor:a=!1}){Ip(i,e,t,r,{monitor:a}),Pn(yr(i,e-.1,t-.75,0,{exec:!0}),-.1);for(const c of o)Pn(Rp(i,e+c,n,Math.PI),-.05);zh(i,e,2.55,s+.11,0)}function UM(i){Yt(i,Ut,fn,Wi,fn,{h:Be}),Yt(i,Ut,0,Ut,ls,{h:Be}),dr(i,{x0:Ut,z0:ls,x1:Ut,z1:Gt,h:Ke}),Yt(i,Ut,ls,Ut,Gt,{h:Be-Ke,y0:Ke,collide:!1}),dr(i,{x0:cr,z0:fn,x1:cr,z1:Gt,h:Ke}),Gf(i,Ut+.1,cr-.08,fn),Gf(i,cr+.08,Wi,fn),dr(i,{x0:Ut,z0:Gt,x1:cr,z1:Gt,h:Ke,door:[6.05,5.15],swing:-1,name:"Cabin 2 door"}),dr(i,{x0:cr,z0:Gt,x1:Wi,z1:Gt,h:Ke,door:[6.25,7.15],swing:-1,name:"Cabin 1 door"}),dr(i,{x0:0,z0:ls,x1:Ut,z1:ls,h:Ke,door:[.15,1.05],swing:-1,name:"Corner cabin door"}),Wf(i,7.35,4.35,{chairsZ:5.15,back:fn,len:1.6,visitors:[.35,.85]}),NM(i,Wi,fn+.1,5.65,-1),Wf(i,4,4.35,{chairsZ:5.15,back:fn,len:1.5,monitor:!1}),Pn(Bh(i,5.35,3.45,{size:.35,h:.4})),Ip(i,1.6,1.85),Pn(yr(i,1.5,1.05,0,{exec:!0}),-.1);for(const t of[1.35,2.05])Pn(Rp(i,t,2.95,Math.PI),-.05);T(i,w.concrete,.55,Ke,.55,Ut-.38,Ke/2,.38),He(Ut-.65,0,Ut,.65),zh(i,Ut-.11,2.55,1.8,-Math.PI/2),T(i,w.blackMatte,.25,.3,.25,2.7,.15,2.9),Yt(i,0,It,1.3,It,{h:Be,t:.3});const e=[[1.3,2.6],[4.3,5.6],[5.6,6.9]];for(const[t,n]of e){const s=new nt;s.position.set(0,0,It),s.rotation.y=Math.PI/2,i.add(s);const r=[];for(let o=0;o<3;o++)Je()<.55&&r.push({i:o,row:Je()<.5?0:1});SM(s,0,t,n,{yellowCubbies:r}),He(t,It-.2,n,It+.2)}Pn(Pp(i,.6,7.25),-.15),Pn(Fh(i,Ut-.47,5,-Math.PI/2,2)),T(i,w.red,.55,.01,.9,.5,.005,5.7,{shadow:!1}),Ua(i,1.9,4.6,2.2,Ke),Ua(i,5,7,2.25,Ke)}const ka=[{id:"W1",x:1.3,z:10.7,rot:0},{id:"L1",x:4.9,z:10.75,rot:0},{id:"W2",x:1.15,z:13.6,rot:0},{id:"L2",x:4.95,z:13.7,rot:0},{id:"W3",x:1.55,z:17.25,rot:0},{id:"L3",x:5.25,z:16.95,rot:0},{id:"E1",x:9.25,z:10.95,rot:0},{id:"E2",x:9.3,z:14,rot:0},{id:"E3",x:9.3,z:16.9,rot:0},{id:"LOCK",x:6.875,z:8.875,rot:0},{id:"LOCK2",x:.675,z:8.375,rot:270}],Xf="rgba(238,222,180,0.96)",OM="rgba(232,186,80,0.16)";function qf(i){const e=document.createElement("canvas");e.width=256,e.height=640;const t=e.getContext("2d"),n=(r,o)=>{t.fillStyle=o,t.beginPath(),r.forEach(([a,c],l)=>(l?t.lineTo:t.moveTo).call(t,a*256,c*640)),t.closePath(),t.fill()};t.fillStyle=Xf,t.fillRect(0,0,256,640);for(const[r,o]of i)o?n(r,Xf):(t.save(),t.beginPath(),r.forEach(([a,c],l)=>(l?t.lineTo:t.moveTo).call(t,a*256,c*640)),t.closePath(),t.clip(),t.clearRect(0,0,256,640),t.fillStyle=OM,t.fillRect(0,0,256,640),t.restore());const s=new On(e);return s.colorSpace=yt,new Et({map:s,transparent:!0,roughness:.15,metalness:.05,depthWrite:!1,side:Ot})}const Dp=[qf([[[[0,.37],[1,.37],[1,1],[0,1]],!1],[[[.6,.15],[.77,.15],[.77,.22],[.6,.22]],!1],[[[1,.37],[.62,.6],[1,.85]],!0],[[[.42,.37],[.62,.37],[.35,.55],[.25,.5]],!0],[[[0,.55],[1,.9],[1,1],[0,1]],!0]]),qf([[[[0,.3],[.75,.6],[.06,1],[0,1]],!1],[[[0,.42],[.43,.62],[0,.82]],!0],[[[.75,.6],[1,.6],[1,1],[.06,1],[.3,.85]],!0]])];function kM(i,e,t){const n=new nt;n.userData.label="Door",i.add(n);const s=9.95,r=Pt,o=10.12,a=bn*2,c=To,l=2.3;for(const f of[-1,1])T(n,w.concrete,r-s,c,.03,(s+r)/2,c/2,e+f*(bn+.015),{shadow:!1});T(n,w.concrete,r-s,.03,a,(s+r)/2,c+.015,e,{shadow:!1});for(const f of[-1,1])T(n,w.black,.07,c,.05,o,c/2,e+f*(bn-.025));for(const f of[.04,l,c-.03])T(n,w.black,.07,f===l?.06:.08,a,o,f,e);const h=new ve(new ut(a-.1,l-.1),t);h.position.set(o,(l+.08)/2,e),h.rotation.y=Math.PI/2,h.renderOrder=2,n.add(h);const u=new ve(new ut(a-.1,c-l-.1),Dp[0].clone());u.material.map=null,u.material.color.set("#f4e7c4"),u.material.opacity=.75,u.position.set(o,(l+c)/2,e),u.rotation.y=Math.PI/2,u.renderOrder=2,n.add(u),T(n,w.chrome,.12,.35,.025,o,1.05,e+bn-.12,{shadow:!1}),He(s,e-bn,r,e+bn)}function FM(i,e,t,n,s,r=3,o=4){const a=new nt;a.position.set(e,t,n),a.rotation.y=s,a.userData.label="Photo gallery",i.add(a);const c=.3,l=.22,h=.08;for(let u=0;u<o;u++)for(let f=0;f<r;f++){if(u===o-1&&f===r-1)continue;const d=(f-(r-1)/2)*(c+h),g=((o-1)/2-u)*(l+h);T(a,w.black,c,l,.02,d,g,.01,{shadow:!1}),gt(a,w.gallery,c-.04,l-.04,d,g,.021)}}function BM(i,e,t,n,s){kM(i,t,Dp[s]);const r=new nt;r.position.set(e,0,t),r.rotation.y=n,r.userData.label="Wall",i.add(r);const o=2*bn+.16,a=To;for(const c of[-1,1])T(r,w.white,.14,Be,.08,c*(bn+.15),Be/2,.12);T(r,w.blackMatte,o,Be-a-.12,.03,0,(a+.12+Be)/2,.11,{shadow:!1}),T(r,w.white,o,.12,.08,0,a+.06,.12)}const zM={W:{len:1.4,width:1.2,seatW:.7,name:"Window table"},L:{len:2.8,width:1.2,seatW:.7,name:"Long table"},E:{len:1.3,width:.8,seatW:1.2,name:"East-wall desk"}};function HM(i,e,t,{len:n,width:s,seatW:r},o=0,a="Table"){const c={width:s,seatW:r,chairOff:.12};if(o%180){const h=new nt;h.userData.label=a,i.add(h),Bf(h,e,t-n/2,t+n/2,{...c,solidFn:(u,f,d,g)=>He(u,f,d,g)});return}const l=new nt;l.position.set(0,0,t),l.rotation.y=Math.PI/2,l.userData.label=a,i.add(l),Bf(l,0,e-n/2,e+n/2,{...c,solidFn:(h,u,f,d)=>He(u,t-f,d,t-h)})}function VM(i){const[e,t,n,s]=[.45,2.95,.5,2.75];Yt(i,0,pt,e,pt,{h:Be}),Yt(i,e,pt,t,pt,{h:n}),Yt(i,e,pt,t,pt,{h:Be-s,y0:s,collide:!1}),Yt(i,t,pt,jt,pt,{h:Be});{const c=new nt;c.userData.label="Meeting room window",i.add(c);const l=new ve(new ut(t-e,s-n),w.glass);l.position.set((e+t)/2,(n+s)/2,pt),l.renderOrder=2,c.add(l);const h=[e,e+.85,e+1.7,t],u=[n,n+.65,n+1.6,s];for(const f of h)T(c,w.black,.06,s-n+.06,.22,f,(n+s)/2,pt,{shadow:!1});for(const f of u)T(c,w.black,t-e,.06,.22,(e+t)/2,f,pt,{shadow:!1})}{const c=xo.flatMap(h=>[h-bn,h+bn]),l=[Tt,...c,pt];for(let h=0;h<l.length;h+=2)Yt(i,jt,l[h],jt,l[h+1],{h:Be});for(const h of xo)Yt(i,jt,h-bn,jt,h+bn,{h:Be-To,y0:To,collide:!1})}T(i,w.ceilingBlack,jt,.45,.05,jt/2,Be-.225,pt-.13,{shadow:!1}),T(i,w.ceilingBlack,.05,.45,pt-Tt,jt-.13,Be-.225,(Tt+pt)/2,{shadow:!1}),T(i,w.white,.6,Be,.6,7.35,Be/2,15.7).userData.label="Pillar",He(7.05,15.4,7.65,16),RM(i,7.35,2.35,15.39,Math.PI),T(i,w.white,1.25,Be,.4,.62,Be/2,15.7).userData.label="Window column",He(0,15.5,1.25,15.9);for(const c of ka){const l=zM[c.id[0]];!l||c.id.startsWith("LOCK")||(HM(i,c.x,c.z,l,c.rot||0,`${l.name} ${c.id}`),c.id[0]==="E"?Ua(i,c.x,c.z,2.2):Lp(i,c.x,c.z,Math.min(2.4,l.len-.1),c.rot%180?Math.PI/2:0))}const r=new ve(new ut(jt-3.3,pt-17.6),w.floorBeige);r.rotation.x=-Math.PI/2,r.position.set((3.3+jt)/2,.004,(17.6+pt)/2),r.receiveShadow=!0,i.add(r);const o=et(i,w.blackMatte,.16,.16,.6,4.2,.3,pt-.3,{seg:16});Pn(o),T(i,w.glassYellow,.18,.38,.02,4.2,.34,pt-.47,{shadow:!1}),xo.forEach((c,l)=>BM(i,jt-.1,c,-Math.PI/2,l)),FM(i,jt-.115,1.95,14,-Math.PI/2);const a={0:Math.PI,90:Math.PI/2,180:0,270:-Math.PI/2};for(const c of ka.filter(l=>l.id.startsWith("LOCK"))){const l=((c.rot||0)%360+360)%360;AM(i,c.x,c.z-.625,c.z+.625,a[l]);const[h,u]=l%180?[.625,.275]:[.275,.625];He(c.x-h,c.z-u,c.x+h,c.z+u)}for(const[c,l]of[[1.6,8.6]])Pn(Bh(i,c,l,{size:.4,h:.5,mat:w.blackMatte}))}const li=-40,Gc=9,Wc=12;let Xc=5660;const yn=()=>(Xc=Xc*16807%2147483647,(Xc-1)/2147483646),Kt=(i,e)=>i+yn()*(e-i),vi=(i,e={})=>new Et({color:i,roughness:1,...e});function GM(i){const e={cool:["#a4a8ac","#a3a7aa","#a2a9af","#9ba9b8","#8ea2bd","#7d95b5","#7890b0"],centre:["#ccc8bd","#cec8bb","#cbc6bb","#c4c8c7","#b3c0ca","#a2b4c4","#9bb0c2"],warm:["#e6d5b9","#ead9bd","#efe1c4","#f4efde","#eaebe3","#d0dbe0","#bccbd6"]},t=[0,3,10,18,26,60,90],n=ce=>new rt(ce),s=(ce,Z)=>{const he=e[ce];if(Z<=0)return n(he[0]);let ie=0;for(;ie<t.length-2&&Z>t[ie+1];)ie++;const Re=Math.min(1,(Z-t[ie])/(t[ie+1]-t[ie]));return n(he[ie]).lerp(n(he[ie+1]),Re)},r=document.createElement("canvas");r.width=256,r.height=128;const o=r.getContext("2d");for(let ce=0;ce<r.width;ce++){let Z=ce/r.width*360;Z>180&&(Z-=360);const he=-Z,ie=Math.max(-1,Math.min(1,he/38))*Math.max(0,1-Math.max(0,Math.abs(Z)-90)/60);for(let Re=0;Re<r.height;Re++){const Me=90-Re/(r.height-1)*180,I=s("centre",Me).lerp(s(ie<0?"cool":"warm",Me),Math.abs(ie));o.fillStyle="#"+I.getHexString(),o.fillRect(ce,Re,1,1)}}const a=new On(r);a.colorSpace=yt;const c=new ve(new Zt(1300,32,24),new Ln({map:a,side:wn,fog:!1,depthWrite:!1,toneMapped:!1}));c.renderOrder=-1,i.add(c);const l=new ve(new ut(2600,2600),vi("#34462a"));l.rotation.x=-Math.PI/2,l.position.y=li,i.add(l);const h=new Map,u=(ce,Z,he)=>{h.has(ce)||h.set(ce,[]);const ie=Z.clone();ie.applyMatrix4(he),h.get(ce).push(ie)},f=new ot,d=new gi,g=new En,_=new D,m=new D,p=(ce,Z,he,ie,Re,Me,I,A,G=0)=>{d.setFromEuler(g.set(0,G,0)),f.compose(m.set(he,ie,Re),d,_.set(Me,I,A)),u(ce,Z,f)},v=2016,y=1512,E=3029/2,[S,R,P,M]=[1480,3550,1270,1760],b={x:-2.8,y:1.6,z:12},N=230,V=ce=>b.z-(ce-v)/E*N,H=ce=>b.y+(y-ce)/E*N,$=(ce,Z)=>{const he=b.x-ce;if(he<60)return 1/0;const ie=v-(Z-b.z)/he*E;return ie<S-60||ie>R+60?1/0:he>N?-1/0:b.y+(y-(M-25))/E*he},j=new Xa(1,1).toNonIndexed(),q=new Dn(.16,.24,1,5,1,!0).toNonIndexed();q.translate(0,.5,0);const ne=WM(),B=["#34452a","#3d4f30","#475a37","#516440","#38492d"].map(ce=>vi(ce,{flatShading:!0})),ue=["#43552f","#4d6136","#3b4c2a","#566b3c"].map(ce=>vi(ce,{side:Ot,roughness:.85})),de=vi("#4f4a40"),Ee=ce=>ce[Math.floor(yn()*ce.length)],ze=(ce,Z,he=Kt(9,17),ie=li)=>{const Re=$(ce,Z)-ie-2;if(Re<3){Re>1&&$e(ce,Z,Re/2.2,ie);return}he=Math.min(he,Re);const Me=Kt(-.08,.08);p(de,q,ce,ie,Z,1,he,1,0);const I=Kt(.8,1.15);d.setFromEuler(g.set(Me,yn()*Math.PI*2,Me)),f.compose(m.set(ce,ie+he,Z),d,_.set(I,I,I)),u(Ee(ue),ne,f)};function $e(ce,Z,he,ie=li){he=Math.min(he,($(ce,Z)-ie-4)/1.8),!(he<.8)&&p(Ee(B),j,ce,ie+he*.9+Kt(1,4),Z,he*Kt(.9,1.2),he*Kt(.6,.85),he*Kt(.9,1.2),yn()*6)}const Q=(ce,Z)=>ce<-7||Z<-8&&ce<40||Z>30&&ce<20;for(let ce=0;ce<2600;ce++){const Z=Kt(-190,40),he=Kt(-170,210);Q(Z,he)&&(yn()<.58?ze(Z,he):$e(Z,he,Kt(3.5,7)))}for(let ce=0;ce<5200;ce++){const Z=Math.PI*.4+yn()*Math.PI*1.25,he=Kt(170,560),ie=Gc+Math.cos(Z)*he,Re=Wc+Math.sin(Z)*he;yn()<.55?ze(ie,Re,Kt(10,18)):$e(ie,Re,Kt(6,11))}for(let ce=0;ce<1800;ce++){const Z=Math.PI*.4+yn()*Math.PI*1.25,he=Kt(540,1150);$e(Gc+Math.cos(Z)*he,Wc+Math.sin(Z)*he,Kt(14,26))}me(-700,300,260,62,190),me(-980,-520,380,75,300),me(-1050,700,300,60,260),me(-1100,60,500,35,240);function me(ce,Z,he,ie,Re){const Me=new ve(new Zt(1,28,14,0,Math.PI*2,0,Math.PI/2),vi("#3f5230",{flatShading:!0}));Me.scale.set(he,ie,Re),Me.position.set(ce,li-2,Z),i.add(Me);const I=Math.round(he*Re/90);for(let A=0;A<I;A++){const G=yn()*Math.PI*2,re=Math.sqrt(yn())*.97,fe=Math.cos(G)*re,le=Math.sin(G)*re,Le=li-2+ie*Math.sqrt(Math.max(0,1-fe*fe-le*le)),Ae=ce+fe*he,Pe=Z+le*Re;yn()<.35?ze(Ae,Pe,Kt(10,16),Le-2):$e(Ae,Pe,Kt(7,13),Le-3)}}const ge=vi("#c9c6be",{roughness:.9}),pe=vi("#b5b0a6",{roughness:.9}),Ne=vi("#6e4234",{roughness:.9}),ke=vi("#8f9496",{roughness:.6,metalness:.3}),Te=vi("#56606a",{roughness:.4}),We=new en(1,1,1).toNonIndexed(),ae=new Dn(.5,.5,1,3,1).toNonIndexed();ae.rotateZ(Math.PI/2),ae.rotateX(-Math.PI/2);for(let ce=0;ce<70;ce++){const Z=Math.PI*.55+yn()*Math.PI*.95,he=30+Math.pow(yn(),1.4)*420,ie=Gc+Math.cos(Z)*he,Re=Wc+Math.sin(Z)*he;if(!Q(ie,Re))continue;const Me=Kt(8,14),I=Kt(8,13),A=Kt(6,11),G=yn()*Math.PI;if(li+A+3.5>$(ie,Re))continue;p(yn()<.7?ge:pe,We,ie,li+A/2,Re,Me,A,I,G),p(Te,We,ie,li+A*.62,Re,Me+.1,1,I*.6,G);const re=yn();re<.45?p(ge,We,ie,li+A+.4,Re,Me+.3,.8,I+.3,G):re<.8?p(Ne,ae,ie,li+A+1.6,Re,Me+1,3.2,I+1,G):p(ke,We,ie,li+A+.6,Re,Me+1,.25,I+1,G)}const xe=new Nh().load("textures/skyline.png");xe.colorSpace=yt,xe.anisotropy=4;const O=new ve(new ut(V(S)-V(R),H(P)-H(M)),new Ln({map:xe,transparent:!0,alphaTest:.03,depthWrite:!1,fog:!1,toneMapped:!1}));O.rotation.y=Math.PI/2,O.position.set(b.x-N,(H(P)+H(M))/2,(V(S)+V(R))/2),O.renderOrder=1,i.add(O);for(const[ce,Z]of h){const he=new ve(Ka(Z,!1),ce);he.castShadow=!1,he.receiveShadow=!1,i.add(he)}}function WM(){const i=[];for(let s=0;s<9;s++){const r=s/9*Math.PI*2+s%2*.2,o=s%3===0?.55:.25,a=[];for(let u=0;u<=3;u++){const f=u/3,d=f*4.6,g=o*d*.6-f*f*2.4,_=.55*Math.sin(Math.PI*Math.min(1,f*1.1+.08));a.push({r:d,y:g,w:_})}const c=[Math.cos(r),Math.sin(r)],l=[-Math.sin(r),Math.cos(r)],h=(u,f)=>[c[0]*u.r+l[0]*u.w*f,u.y,c[1]*u.r+l[1]*u.w*f];for(let u=0;u<3;u++){const f=h(a[u],-1),d=h(a[u],1),g=h(a[u+1],-1),_=h(a[u+1],1);i.push(...f,...g,...d,...d,...g,..._)}}const n=new Ht;return n.setAttribute("position",new ft(i,3)),n.computeVertexNormals(),n.setAttribute("uv",new ft(new Float32Array(i.length/3*2),2)),n}const cn=PM,vt=-3.6,yi=.25,Ps=3.85,Np=.12,_a=-3.95,ss=i=>Ps+i*Np,Bt=i=>new Et(i),Fe={curb:Bt({color:"#6f6c66",roughness:.95}),steel:Bt({color:"#8e8d88",roughness:.55,metalness:.55}),rust:Bt({color:"#9b8a78",roughness:.7,metalness:.35}),galv:Bt({color:"#a9aca9",roughness:.45,metalness:.6}),steelRail:Bt({color:"#c4c7c9",roughness:.22,metalness:.95}),poly:new Et({color:"#d2a8c8",transparent:!0,opacity:.42,roughness:.35,depthWrite:!1,side:Ot}),glass:new Et({color:"#d6e6e2",transparent:!0,opacity:.2,roughness:.05,metalness:.1,depthWrite:!1,side:Ot}),clad:Bt({color:"#cfc6b2",roughness:.6,metalness:.25}),plaster:Bt({color:"#e9e6df",roughness:.95}),coir:Bt({color:"#6e4b30",roughness:1}),potWhite:Bt({color:"#efede8",roughness:.55}),leafDark:Bt({color:"#355e2a",roughness:.75}),leafMid:Bt({color:"#5e8a3a",roughness:.75}),leafPale:Bt({color:"#a9bf83",roughness:.75}),leafRed:Bt({color:"#a6473a",roughness:.75}),palm:Bt({color:"#4f7a2f",roughness:.8,side:Ot}),macrame:Bt({color:"#6d5a4b",roughness:1,side:Ot}),cushion:Bt({color:"#d9cdb8",roughness:1}),tableTop:Bt({color:"#8a6142",roughness:.55}),rattan:Bt({color:"#7b6c60",roughness:.9}),water:new Et({color:"#a9cde8",transparent:!0,opacity:.55,roughness:.1,depthWrite:!1}),capBlue:Bt({color:"#2464b0",roughness:.5}),counterTop:Bt({color:"#222222",roughness:.35,metalness:.2}),acGrey:Bt({color:"#d9d9d4",roughness:.6})},XM=(()=>{const i=document.createElement("canvas");i.width=128,i.height=256;const e=i.getContext("2d"),t=["#a4553f","#d9b26a","#5b6f8a","#c98a5a","#7a8a5a","#e6d6b8","#8a4a5a"];for(let s=0;s<256;s+=3)e.fillStyle=t[Math.floor(Je()*t.length)],e.fillRect(0,s,128,3);const n=new On(i);return n.colorSpace=yt,n})();Fe.rug=Bt({map:XM,roughness:1});const qM=(i=16)=>{const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.strokeStyle="#fff",t.lineWidth=3;for(let s=-128;s<=256;s+=i)t.beginPath(),t.moveTo(s,0),t.lineTo(s+128,128),t.stroke(),t.beginPath(),t.moveTo(s,128),t.lineTo(s+128,0),t.stroke();const n=new On(e);return n.wrapS=n.wrapT=pi,n},Up=qM(22);Up.repeat.set(5,3);Fe.macrameNet=Bt({color:"#6d5a4b",alphaMap:Up,alphaTest:.5,roughness:1,side:Ot});const YM=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,3),e.fillRect(0,0,3,64);const t=new On(i);return t.wrapS=t.wrapT=pi,t})();function Ns(i,e,t,n,s){const r=new nt;return r.position.set(e,t,n),s&&(r.userData.label=s),i.add(r),r}function va(i,e,t,n,s,r,o,a=8){return et(i,e,t,t,o-r,n,s,(r+o)/2,{rx:Math.PI/2,seg:a,shadow:!1})}function ya(i,e,t,n,s,r,o=7){for(let a=0;a<o;a++){const c=new ve(new Xa(1,0),r[a%r.length]),l=s*(.45+Je()*.4);c.scale.set(l,l*(.7+Je()*.5),l);const h=Je()*Math.PI*2,u=Je()*s*.6;c.position.set(e+Math.cos(h)*u,t+l*.8+Je()*s*.6,n+Math.sin(h)*u),c.rotation.set(Je()*3,Je()*3,Je()*3),c.castShadow=!0,c.receiveShadow=!0,i.add(c)}}function Op(i,e,t,n,{n:s=12,len:r=.6,mat:o=Fe.leafMid,droop:a=.5,w:c=.12}={}){for(let l=0;l<s;l++){const h=new nt;h.position.set(e,t,n),h.rotation.y=l/s*Math.PI*2+Je()*.4,i.add(h);const u=a*(.5+Je()),f=new ve(new ut(r,c),o);f.position.set(Math.cos(u)*r/2,Math.sin(-u+.9)*r/2-.05,0),f.rotation.set(Math.PI/2-.3,0,-u+.9-Math.PI/4),f.castShadow=!0,h.add(f)}}function lr(i,e,t,n="snake",{r:s=.18,h:r=.32}={}){const o=Ns(i,e,0,t,"Plant");return et(o,Fe.potWhite,s,s*.78,r,0,r/2,0,{seg:16}),et(o,w.soil,s-.02,s-.02,.01,0,r-.01,0,{seg:12,shadow:!1}),n==="snake"?ja(o,0,r,0,10,.75):n==="bush"?ya(o,0,r,0,s*1.6,[Fe.leafDark,Fe.leafMid]):n==="variegated"?ya(o,0,r,0,s*1.7,[Fe.leafPale,Fe.leafMid,Fe.leafPale],9):n==="croton"?ya(o,0,r,0,s*1.4,[Fe.leafRed,Fe.leafMid,Fe.leafRed]):n==="fern"?Op(o,0,r+.08,0,{n:16,len:.55,mat:Fe.leafPale,droop:.9,w:.16}):n==="tree"&&(et(o,w.woodDark,.015,.02,.9,0,r+.45,0,{seg:5}),ya(o,0,r+.55,0,.35,[Fe.leafMid,Fe.leafPale,Fe.leafDark],8)),He(e-s,t-s,e+s,t+s),o}function Yf(i,e,t,n,s,r=Fe.coir){et(i,w.blackMatte,.004,.004,n-s,e,(n+s)/2,t,{seg:3,shadow:!1}),et(i,r,.07,.11,.3,e,s-.15,t,{seg:10})}function $M(i,e,t,n=0){const s=Ns(i,e,0,t,"Bar stool");s.rotation.y=n;for(const[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])T(s,w.black,.025,.78,.025,r*.15,.39,o*.15,{rx:o*.05,rz:-r*.05});T(s,w.black,.34,.04,.34,0,.78,0);for(const r of[-1,1])T(s,w.black,.025,.36,.025,.15,.96,r*.13);T(s,w.black,.025,.06,.3,.15,1.12,0),T(s,w.black,.3,.02,.02,0,.3,.15,{shadow:!1}),T(s,w.black,.3,.02,.02,0,.3,-.15,{shadow:!1})}function KM(i,e,t,n=.62){const s=Ns(i,e,0,t,"Stool");et(s,Fe.tableTop,.17,.17,.04,0,n,0,{seg:16});for(let o=0;o<3;o++){const a=o/3*Math.PI*2;T(s,w.black,.02,n,.02,Math.cos(a)*.14,n/2,Math.sin(a)*.14,{rz:Math.cos(a)*.1,rx:-Math.sin(a)*.1})}const r=new ve(new Ur(.16,.008,4,20),w.black);r.rotation.x=Math.PI/2,r.position.y=.22,s.add(r),He(e-.18,t-.18,e+.18,t+.18)}function jM(i){const e=Ns(i,0,0,0,"Terrace"),t=cn;St(e,w.floorTerrace,vt,0,0,cn,0),T(e,Fe.curb,.3,yi,t,vt+.15,yi/2,t/2),T(e,Fe.curb,.32,.03,t,vt+.15,yi+.015,t/2,{shadow:!1}),He(vt-.1,0,vt+.32,cn),He(vt,-.15,0,0),He(vt,cn,0,cn+.15);const n=vt+.1,s=yi+1;for(let m=0;m<t-.01;m+=1.2){const p=Math.min(1.2,t-m)-.02,v=new ve(new ut(p,s-yi-.06),Fe.glass);v.position.set(n,(yi+s)/2,m+.01+p/2),v.rotation.y=Math.PI/2,v.renderOrder=2,e.add(v),T(e,w.chrome,.03,.06,.05,n,s-.04,m+.06,{shadow:!1}),T(e,w.chrome,.03,.06,.05,n,yi+.06,m+.06,{shadow:!1})}va(e,Fe.steelRail,.028,n,s+.03,0,t,12),va(e,Fe.galv,.035,vt+.42,.55,.4,t-.4,10);for(let m=1.5;m<t;m+=3.1)T(e,Fe.galv,.03,.3,.03,vt+.42,.4,m,{shadow:!1});for(const m of[.12,t-.12])et(e,Fe.steelRail,.025,.025,s,vt+.35,s/2,m,{seg:10}),T(e,Fe.steelRail,.25,.04,.04,vt+.23,s+.03,m,{shadow:!1});const r=m=>m<It?Ke:2.8;for(const[m,p]of[[0,It],[It,cn]]){const v=r(m),y=Ps+.2-v;T(e,Fe.clad,.03,y,p-m,-.09,v+y/2,(m+p)/2,{shadow:!1});for(let x=m+.08;x<p;x+=.16)T(e,Fe.clad,.025,y,.035,-.115,v+y/2,x,{shadow:!1});T(e,Fe.steel,.12,.08,p-m,-.12,v+.04,(m+p)/2,{shadow:!1})}const o=-_a,a=Math.atan2(o*Np,o),c=o/Math.cos(a),l=_a/2,h=T(e,Fe.poly,c,.012,t+.4,l,ss(l)+.06,t/2,{shadow:!1,rz:a});h.renderOrder=3;for(let m=0;m<=t+.01;m+=t/16)T(e,Math.round(m/(t/16))%3===1?Fe.rust:Fe.steel,c,.1,.06,l,ss(l),m,{rz:a});for(const m of[-.35,-1.25,-2.15,-3.05,-3.85])va(e,Fe.steel,.025,m,ss(m)+.03,-.2,t+.2);T(e,Fe.steel,.16,.14,t+.4,_a,ss(_a)-.02,t/2),T(e,Fe.steel,.12,.12,t,-.18,Ps-.06,t/2);const u=-1.8,f=ss(u)-.28;va(e,Fe.galv,.02,u,f,0,t);for(let m=.5;m<t;m+=1.55){et(e,Fe.galv,.006,.006,.26,u,f+.13,m,{seg:4,shadow:!1}),et(e,w.white,.055,.045,.1,u,f-.07,m,{seg:12,shadow:!1});const p=new ve(new $n(.035,12),w.spotGlow);p.rotation.x=Math.PI/2,p.position.set(u,f-.121,m),e.add(p)}const d=vt+.36;for(let m=0;m<=8;m++){const p=.25+m*(t-.5)/8,v=ss(d);if(et(e,Fe.galv,.045,.045,v-yi,d,(v+yi)/2,p,{seg:10}),m>=3&&m<=5){et(e,Fe.coir,.085,.085,2.5,d,yi+1.3,p,{seg:12});for(const y of[.9,1.6,2.3])et(e,Fe.plaster,.088,.088,.06,d,y,p,{seg:12,shadow:!1});Yf(e,d+.16,p+.05,v-.1,2.75)}He(d-.09,p-.09,d+.09,p+.09)}const g=-.32,_=[[1.4,"tree"],[1.95,"fern"],[2.6,"croton"],[3.2,"variegated"],[4.35,"snake"],[7,"snake"],[7.5,"variegated"],[8,"bush"],[8.5,"snake"],[10.6,"bush"],[11.1,"snake"],[11.6,"variegated"],[12.1,"snake"],[13.6,"tree"],[14.6,"bush"],[16.3,"snake"],[17.2,"variegated"],[18.2,"snake"],[19.3,"croton"],[22,"fern"]];for(const[m,p]of _)lr(e,g-(p==="fern"?.1:0),m,p,p==="tree"?{r:.2,h:.34}:{});lr(e,vt+.75,12,"variegated",{r:.22,h:.4}),lr(e,vt+.75,8.3,"tree",{r:.18,h:.34});for(const m of[6.2,9.9,13])Yf(e,-.55,m,Ps-.1,2.55,Fe.potWhite);T(e,Fe.rug,.55,.012,.85,-.45,.007,5.7,{shadow:!1}),T(e,Fe.rug,.5,.012,.8,-.4,.007,20.8,{shadow:!1,ry:.08});{const y=Ns(e,-.95,0,9.3,"Hanging chair");et(y,Fe.coir,.012,.012,ss(-.95)-1.75,0,(ss(-.95)+1.75)/2,0,{seg:4});const x=new D(0,1.75,0);for(const P of[-.6,.6,Math.PI-.5,Math.PI+.5]){const b=new D(Math.cos(P)*.46,1.05,Math.sin(P)*.46).clone().sub(x),N=new ve(new Dn(.01,.01,b.length(),4),Fe.coir);N.position.copy(x).addScaledVector(b,.5),N.quaternion.setFromUnitVectors(new D(0,1,0),b.normalize()),y.add(N)}const E=new ve(new Ur(.5,.025,6,32),Fe.macrame);E.position.set(0,.55+.5,0),E.rotation.x=Math.PI/2,y.add(E);const S=new ve(new Zt(.5,20,12,0,Math.PI*2,Math.PI*.5,Math.PI*.42),Fe.macrameNet);S.position.y=.55+.42,S.castShadow=!0,y.add(S);const R=new ve(new Zt(.5,20,10,-Math.PI/2,Math.PI,.15*Math.PI,.38*Math.PI),Fe.macrameNet);R.position.y=.55+.42,R.castShadow=!0,y.add(R),et(y,Fe.cushion,.36,.36,.1,0,.55+.07,0,{seg:20});for(let P=0;P<14;P++){const M=P/14*Math.PI*2;et(y,Fe.macrame,.012,.004,.1,Math.cos(M)*.3,.55-.02,Math.sin(M)*.3,{seg:4,shadow:!1})}He(-.95-.45,9.3-.45,-.95+.45,9.3+.45)}{const v=vt+.58;T(e,Fe.tableTop,.38,.05,13.4-10.3,v,1.05,(10.3+13.4)/2);for(const y of[10.3+.15,(10.3+13.4)/2,13.4-.15])T(e,w.black,.04,1.03,.04,v-.05,.52,y),T(e,w.black,.3,.03,.03,v,.98,y,{shadow:!1});He(v-.2,10.3,v+.2,13.4);for(const y of[10.8,11.6,12.4,13.1])$M(e,v+.5,y,0);for(const y of[10.8,11.6,12.4,13.1])He(v+.33,y-.18,v+.67,y+.18)}{const v=Ps+.1,y=vt+.45,x=.9,E=Math.hypot(-.3-y,v-x),S=Math.atan2(v-x,-.3-y);T(e,Fe.curb,E,.42,.3,(-.3+y)/2,(v+x)/2,.06+.1,{rz:S});const R=new Co([new ye(y,0),new ye(-.3,0),new ye(-.3,v),new ye(y,x)]),P=new ve(new Dh(R),Bt({color:"#cfccc4",roughness:.95,side:Ot}));P.position.z=.06-.04,P.receiveShadow=!0,e.add(P),T(e,Fe.curb,-.3-y,.3,.3,(-.3+y)/2,.15,.06+.1),T(e,Fe.plaster,.35,Ps,.2,-.17,Ps/2,.06+.05);const M=-2.75,b=-.4,N=2.55,V=YM.clone();V.needsUpdate=!0,V.repeat.set((b-M)/.1,N/.1);const H=Bt({color:"#2a2a2a",alphaMap:V,alphaTest:.5,side:Ot,roughness:.8}),$=new ve(new ut(b-M,N),H);$.position.set((M+b)/2,N/2,.06+.02),e.add($);for(const q of[M,(M+b)/2,b])T(e,w.black,.03,N,.03,q,N/2,.06+.03,{shadow:!1});T(e,w.black,b-M,.03,.03,(M+b)/2,N,.06+.03,{shadow:!1});const j=q=>x+(q-y)*(v-x)/(-.3-y);for(let q=0;q<5;q++){const ne=.45+q*.42;for(let B=M+.2;B<b-.1;B+=.36)ne>j(B)-.35||(T(e,w.blackMatte,.2,.13,.1,B,ne,.06+.08,{shadow:!1}),ja(e,B,ne+.06,.06+.1,6,.32).rotation.x=.25)}lr(e,-.75,.45,"tree",{r:.17,h:.3}),lr(e,-1.15,.4,"bush")}{const m=cn-.12;T(e,Fe.plaster,-vt,1.15,.24,vt/2,.575,m),T(e,Fe.plaster,-vt,.5,.6,vt/2,1.4,cn+.3);for(let S=vt+.4;S<-.2;S+=.7)et(e,w.woodDark,.03,.04,.9,S,2.05,cn+.3,{seg:6}),Op(e,S,2.45+Je()*.3,cn+.3,{n:9,len:.9,mat:Fe.palm,droop:.45,w:.22});T(e,w.whiteGloss,.4,.14,.45,-.42,.86,23.3),et(e,w.chrome,.012,.012,.14,-.27,1,23.3,{seg:6,shadow:!1}),He(-.64,23.05,-.2,23.55);{const S=Ns(e,-.42,2.25,24.2,"AC outdoor unit");T(S,Fe.acGrey,.32,.55,.78,0,0,0);const R=new ve(new $n(.2,18),w.metalDark);R.rotation.y=-Math.PI/2,R.position.set(-.161,0,-.1),S.add(R),T(S,w.metalDark,.3,.03,.3,.05,-.29,0,{shadow:!1})}const p=-2.45,v=-.6,y=m-.42;T(e,w.white,v-p,.86,.58,(p+v)/2,.43,y),T(e,Fe.counterTop,v-p+.04,.04,.62,(p+v)/2,.88,y);for(let S=p+.45;S<v;S+=.45)T(e,w.metalDark,.008,.78,.005,S,.43,y-.292,{shadow:!1});T(e,w.blackMatte,.4,.5,.02,-1.75,.45,y-.29,{shadow:!1});for(let S=0;S<6;S++)T(e,[w.bottleTeal,w.red,w.cream][S%3],.04,.2+Je()*.06,.15,-1.9+S*.055,.35,y-.2,{shadow:!1});for(const[S,R]of[[-2.25,w.chrome],[-1.98,w.black],[-1.2,w.chrome]])et(e,R,.07,.085,.2,S,1,y,{seg:14}),T(e,w.black,.03,.12,.03,S+.09,1,y,{shadow:!1});T(e,w.blackMatte,.18,.08,.18,-1.55,.94,y,{shadow:!1}),He(p,y-.3,v,cn);const x=-1.75,E=22.95;T(e,Fe.tableTop,.72,.05,1.4,x,.95,E);for(const S of[-1,1])T(e,w.black,.04,.95,.04,x+S*.25,.48,E-.5,{rz:S*.18}),T(e,w.black,.04,.95,.04,x+S*.25,.48,E+.5,{rz:S*.18});T(e,w.black,.04,.04,1,x,.3,E,{shadow:!1}),He(x-.36,E-.7,x+.36,E+.7);for(const[S,R]of[[x-.6,E-.35],[x-.6,E+.35],[x+.6,E-.3],[x+.6,E+.4],[x+.1,E+.95]])KM(e,S,R);{const S=Ns(e,x-.05,0,E-.95,"Rattan stool");T(S,Fe.rattan,.34,.5,.34,0,.25,0),T(S,Fe.rattan,.4,.05,.4,0,.52,0),He(x-.25,E-1.15,x+.15,E-.75)}for(const[S,R]of[[vt+.75,cn-1.15],[vt+.75,cn-.8],[vt+1.05,cn-.95]])et(e,Fe.water,.14,.14,.46,S,.23,R,{seg:16,shadow:!1}).renderOrder=2,et(e,Fe.capBlue,.04,.04,.06,S,.49,R,{seg:10,shadow:!1});He(vt+.55,cn-1.35,vt+1.25,cn-.6),lr(e,-.4,22.75,"bush")}for(let m=0;m<40;m++){const p=T(e,Je()>.5?Fe.leafPale:w.woodDark,.04,.003,.025,vt+.5+Je()*2.8,.004,1+Je()*(cn-2),{shadow:!1,ry:Je()*3});p.receiveShadow=!1}}const $f=40;function ZM(i){to(i,0,0,0,4.9,Ke),to(i,0,6.5,0,It,Ke),T(i,w.black,.12,.08,1.6,0,2.44,5.7),T(i,w.chrome,.1,.015,1.6,0,.008,5.7,{shadow:!1});const e=new ve(new ut(1.6,Ke-2.48),w.glass);e.position.set(0,(2.48+Ke)/2,5.7),e.rotation.y=Math.PI/2,e.renderOrder=2,i.add(e),Yt(i,0,0,0,It,{h:Be-Ke,y0:Ke,collide:!1});const[t,n]=oh;to(i,0,It,0,t,2.8),to(i,0,n,0,Lt,2.8),T(i,w.black,.12,.08,n-t,0,2.44,(t+n)/2),T(i,w.chrome,.1,.015,n-t,0,.008,(t+n)/2,{shadow:!1});const s=new ve(new ut(n-t,2.8-2.48),w.glass);s.position.set(0,(2.48+2.8)/2,(t+n)/2),s.rotation.y=Math.PI/2,s.renderOrder=2,i.add(s),T(i,w.wall,.12,Be-2.8,Lt-It,.02,2.8+(Be-2.8)/2,(It+Lt)/2,{shadow:!1});for(let o=2.95;o<Be-.05;o+=.14)T(i,w.wallWarm,.02,.03,Hf-It,.09,o,(It+Hf)/2,{shadow:!1});Yt(i,-.1,Lt,-.1,Mn+.2,{h:Be+.3,mat:w.wallWarm,t:.2}),to(i,0,0,Ut,0,Ke),Yt(i,0,0,Ut,0,{h:Be-Ke,y0:Ke,collide:!1}),jM(i);const r=20-vt;T(i,w.wallWarm,r,$f,Mn+1.2,vt+r/2,-$f/2-.01,(Mn-1)/2+.1,{shadow:!1});for(let o=1;o<12;o++)T(i,w.blackMatte,.05,.25,Mn+1.3,vt-.01,-o*3.4,(Mn-1)/2+.1,{shadow:!1});GM(i)}const JM=new Et({color:"#a39b91",roughness:.55}),qc=new Et({color:"#ece7dc",roughness:.6}),QM=new Et({color:"#e9e4d6",roughness:.7}),e2=new Et({color:"#6c6a66",roughness:.5,metalness:.3});function t2(i,e,t,n=2.45){et(i,w.black,.004,.004,Be-n,e,(Be+n)/2,t,{seg:3,shadow:!1}),et(i,w.black,.045,.045,.2,e,n-.1,t,{seg:14});const s=new ve(new $n(.035,12),w.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,n-.201,t),i.add(s)}function n2(i){const e=new nt;e.userData.label="Meeting room",i.add(e),St(e,w.floorDark,0,pt,Fn,Lt,0),St(e,w.ceilingBlack,0,pt,Fn,Lt,Be,{down:!0}),Yt(e,Fn+.1,pt,Fn+.1,Lt+.1,{h:Be,mat:w.white});const[t,n]=LM;Yt(e,0,Lt+.1,t,Lt+.1,{h:Be,mat:w.white}),Yt(e,n,Lt+.1,Fn+.2,Lt+.1,{h:Be,mat:w.white}),Yt(e,t,Lt+.1,n,Lt+.1,{h:Be-2.12,y0:2.12,mat:w.white,collide:!1}),et(e,w.ceilingBlack,.16,.16,Lt-pt,Fn-.35,Be-.3,(pt+Lt)/2,{rx:Math.PI/2,seg:12,shadow:!1}),T(e,w.ceilingBlack,Fn,.35,.3,Fn/2,Be-.18,pt+.25,{shadow:!1});for(const[l,h,u,f]of[[0,Lt-.01,Fn,Lt-.01],[Fn-.01,pt,Fn-.01,Lt]])T(e,w.concrete,Math.max(.02,u-l),.08,Math.max(.02,f-h),(l+u)/2,.04,(h+f)/2,{shadow:!1});const s=1.9,r=19.85,o=22,a=1,c=(r+o)/2;{const l=new nt;l.userData.label="Meeting table",e.add(l),T(l,JM,a,.04,o-r,s,.75,c),T(l,qc,a+.01,.025,o-r+.01,s,.72,c,{shadow:!1});for(const h of[r+.15,o-.15])for(const u of[-1,1])T(l,w.black,.05,.72,.05,s+u*(a/2-.08),.36,h);for(const h of[r+.5,c-.1,o-.6]){const u=new ve(new $n(.04,14),w.black);u.rotation.x=-Math.PI/2,u.position.set(s+.1,.772,h),l.add(u)}T(l,w.black,.05,.02,.2,s-.15,.78,c-.4,{shadow:!1,ry:.4}),Cp(l,s,.77,c+.35,{petal:w.petalWhite,n:5}),He(s-a/2,r,s+a/2,o)}for(const l of[r+.4,c,o-.4])yr(e,s-a/2-.32,l,Math.PI/2),yr(e,s+a/2+.32,l,-Math.PI/2);yr(e,s,o+.35,Math.PI);{const l=new nt;l.userData.label="TV",l.position.set(1.75,0,19.25),e.add(l);for(let h=0;h<4;h++)T(l,w.black,.04,.03,.34,Math.sin(h*Math.PI/2)*.15,.04,Math.cos(h*Math.PI/2)*.15,{ry:h*Math.PI/2});et(l,w.black,.025,.025,1.5,0,.78,0,{seg:8}),T(l,w.black,1.1,.64,.06,0,1.55,.03),T(l,w.screenOff,1.06,.6,.005,0,1.55,.062,{shadow:!1}),He(1.55,19.05,1.95,19.45)}{const l=Lp(e,s,c,1.8,Math.PI/2,2.35,Be);l.children[0].material=e2,l.children[0].scale.set(1.8,.09,.09)}for(const[l,h]of[[.8,19.6],[.8,21.6],[3,19.6],[3,21.6]])t2(e,l,h);zh(e,Fn-.02,2.7,20.6,-Math.PI/2);{const l=new nt;l.userData.label="Door frame",e.add(l);const h=Lt+.1,u=n-t;for(const g of[t-.02,n+.02])T(l,qc,.04,2.14,.22,g,1.07,h);T(l,qc,u+.08,.04,.22,(t+n)/2,2.14,h);const f=new nt;f.position.set(n,0,h);const d=u-.02;T(f,QM,d,2.08,.04,-d/2,1.05,0);for(const g of[-1,1]){T(f,w.chrome,.025,.32,.03,-d+.1,1.05,g*.06);for(const _ of[.92,1.18])T(f,w.chrome,.02,.02,.05,-d+.1,_,g*.035,{shadow:!1})}Za.push({leaf:f,closed:0,open:1.45,name:"game room door",handle:[-d+.1,1.3,.1],x:(t+n)/2,z:h,block:{minX:t,maxX:n,minZ:h-.1,maxZ:h+.1}})}{const l=new nt;l.userData.label="Shelf",e.add(l);const h=.38,u=Lt-.3,f=.5,d=.38,g=2.3;for(const _ of[-1,1])T(l,w.white,.02,g,d,h+_*f/2,g/2,u);T(l,w.white,f,g,.02,h,g/2,u+d/2);for(const _ of[.02,.55,.95,1.45,1.9,g])T(l,w.white,f,.02,d,h,_,u);T(l,w.white,f-.02,.52,.02,h,.28,u-d/2,{shadow:!1}),T(l,w.woodDark,.3,.16,.22,h,1.04,u),T(l,w.black,.26,.02,.16,h,1.47,u,{shadow:!1}),He(h-f/2,u-d/2,h+f/2,u+d/2)}{const l=new nt;l.userData.label="Cabinet",e.add(l),T(l,w.woodDark,.9,.45,.4,.95,.225,pt+.32),T(l,w.white,.42,.2,.01,.75,.32,pt+.52,{shadow:!1}),He(.5,pt+.1,1.4,pt+.52)}}const rs={x:.088,y:1.4,z:25.35,w:1.68,h:.94},Jn=i=>new Et(i),Wt={navy:Jn({color:"#1e2740",roughness:.9}),ledPurple:Jn({color:"#b46cff",emissive:"#9b4dff",emissiveIntensity:2.2}),ledCyan:Jn({color:"#5fe3ff",emissive:"#29c8ff",emissiveIntensity:1.8}),felt:Jn({color:"#1f6b46",roughness:.95}),railWood:Jn({color:"#5a3522",roughness:.5}),ps5White:Jn({color:"#f4f4f2",roughness:.35}),rug:Jn({color:"#3a3f4b",roughness:1}),cue:Jn({color:"#c79a62",roughness:.5}),beanRed:Jn({color:"#a8322d",roughness:.95}),beanBlue:Jn({color:"#2d4f8a",roughness:.95})},i2=["#f2c21b","#1f4fb4","#c8281f","#5b2a86","#ef7a1a","#1d7a3c","#7a1f1f","#111111"],Kf=i2.map(i=>Jn({color:i,roughness:.2,metalness:.05})),jf=(()=>{const i=document.createElement("canvas");i.width=512,i.height=160;const e=i.getContext("2d");e.font='700 110px "Avenir Next", "Helvetica Neue", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ff4fd8",e.shadowBlur=24,e.fillStyle="#ffd6f6",e.fillText("GAME ON",256,84);const t=new On(i);return t.colorSpace=yt,t})();Wt.neon=Jn({map:jf,emissive:"#ffffff",emissiveMap:jf,emissiveIntensity:1.6,transparent:!0,alphaTest:.05});function Fi(i,e,t=0,n=0,s=0){const r=new nt;return r.userData.label=e,r.position.set(t,0,n),r.rotation.y=s,i.add(r),r}function Zf(i,e,t,n,s,r){const o=Fi(i,"Controller",e,n,s);T(o,r,.16,.035,.07,0,t,0,{shadow:!1});for(const a of[-1,1])T(o,r,.05,.035,.06,a*.065,t,.04,{shadow:!1,ry:a*.4});T(o,w.black,.11,.004,.03,0,t+.019,-.005,{shadow:!1})}function s2(i){const e=Fi(i,"Game room"),t=Lt+.2;St(e,w.floorDark,0,Lt,ci,Mn,0),St(e,w.ceilingBlack,0,Lt,ci,Mn,Be,{down:!0}),Yt(e,Fn+.2,Lt+.1,ci+.2,Lt+.1,{h:Be,mat:w.white}),Yt(e,ci+.1,Lt,ci+.1,Mn+.2,{h:Be,mat:w.white}),Yt(e,0,Mn+.1,ci+.2,Mn+.1,{h:Be,mat:w.white}),T(e,w.ceilingBlack,ci,.4,.3,ci/2,Be-.2,(t+Mn)/2,{shadow:!1});const n=rs.z;T(e,Wt.navy,.02,Be,Mn-t-.4,.01,Be/2,(t+Mn)/2),T(e,Wt.ledPurple,.02,.025,Mn-t-.6,.03,Be-.25,(t+Mn)/2,{shadow:!1});{const c=Fi(e,"TV");T(c,w.black,.05,.98,1.72,.06,1.4,n),T(c,w.screenDark,.005,.94,1.68,.087,1.4,n,{shadow:!1}),T(c,Wt.ledCyan,.01,1.06,1.8,.03,1.4,n,{shadow:!1})}{const c=Fi(e,"TV console");T(c,w.white,.42,.42,1.9,.24,.21,n);for(const l of[n-.48,n+.48])T(c,w.metalDark,.005,.32,.9,.452,.21,l,{shadow:!1});He(0,n-.95,.45,n+.95)}{const c=Fi(e,"PS5",.25,n+.65);T(c,w.black,.06,.38,.22,0,.62,0);for(const l of[-1,1])T(c,Wt.ps5White,.02,.4,.26,l*.04,.63,0,{rz:l*.04});T(c,w.black,.1,.02,.12,0,.43,0,{shadow:!1})}T(e,w.blackMatte,.18,.26,.18,.25,.55,n-.75),T(e,Wt.rug,2.2,.01,2.4,1.75,.006,n,{shadow:!1}),Pn(Fh(e,2.95,n,-Math.PI/2,3),-.05);{const c=Fi(e,"Coffee table");T(c,w.woodDark,.55,.04,1,1.75,.4,n);for(const[l,h]of[[-1,-1],[1,-1],[1,1],[-1,1]])T(c,w.black,.03,.38,.03,1.75+l*.23,.19,n+h*.45);He(1.45,n-.52,2.05,n+.52)}Zf(e,1.72,.44,n-.22,.3,Wt.ps5White),Zf(e,1.8,.44,n+.2,-.2,Wt.ps5White),T(e,w.black,.12,.02,.05,1.68,.43,n+.38,{shadow:!1,ry:.5});for(const[c,l]of[[23.8,Wt.beanRed],[26.65,Wt.beanBlue]])Pn(Pp(e,1.35,c,l),-.15);const s=5,r=25,o=2.3,a=1.25;{const c=Fi(e,"Pool table");T(c,Wt.railWood,a+.2,.2,o+.2,s,.7,r),T(c,Wt.felt,a,.02,o,s,.81,r,{shadow:!1});for(const d of[-1,1])T(c,Wt.felt,.06,.05,o,s+d*(a/2-.03),.835,r,{shadow:!1}),T(c,Wt.felt,a,.05,.06,s,.835,r+d*(o/2-.03),{shadow:!1}),T(c,Wt.railWood,.1,.06,o+.2,s+d*(a/2+.05),.83,r),T(c,Wt.railWood,a+.2,.06,.1,s,.83,r+d*(o/2+.05));for(const[d,g]of[[-1,-1],[1,-1],[1,1],[-1,1]])T(c,Wt.railWood,.14,.62,.14,s+d*(a/2-.05),.31,r+g*(o/2-.1));for(const d of[-1,1])for(const g of[-1,0,1]){const _=new ve(new $n(.055,14),w.black);_.rotation.x=-Math.PI/2,_.position.set(s+d*(a/2-.04),.865,r+g*(o/2-.04)),c.add(_)}const l=.028,h=new Zt(l,14,10);let u=0;for(let d=0;d<5;d++)for(let g=0;g<=d;g++){const _=new ve(h,Kf[u++%Kf.length]);_.position.set(s+(g-d/2)*l*2.05,.82+l,r+.45+d*l*1.8),_.castShadow=!0,c.add(_)}const f=new ve(h,Wt.ps5White);f.position.set(s+.05,.82+l,r-.6),f.castShadow=!0,c.add(f),et(c,Wt.cue,.006,.012,1.45,s-.35,.9,r-.2,{rx:Math.PI/2-.03,seg:8}),He(s-a/2-.1,r-o/2-.1,s+a/2+.1,r+o/2+.1)}{const c=Fi(e,"Pool light");T(c,w.black,.32,.12,1.7,s,1.85,r);for(const l of[-.55,0,.55]){const h=new ve(new ut(.24,.4),w.lightStrip);h.rotation.x=Math.PI/2,h.position.set(s,1.789,r+l),c.add(h)}for(const l of[-.7,.7])et(c,w.black,.004,.004,Be-1.91,s,(Be+1.91)/2,r+l,{seg:3,shadow:!1})}{const c=Fi(e,"Cue rack");T(c,w.woodDark,.05,.08,.7,ci-.03,1.55,23.6),T(c,w.woodDark,.05,.06,.7,ci-.03,.1,23.6);for(let l=0;l<4;l++)et(c,Wt.cue,.007,.013,1.5,ci-.07,.8,23.35+l*.16,{seg:8})}{const c=new ve(new ut(1.5,.47),Wt.neon);c.position.set(4.7,2.45,Mn-.01),c.rotation.y=Math.PI,c.userData.label="Neon sign",e.add(c)}for(const[c,l]of[[1.8,23.6],[1.8,26.4]]){et(e,w.black,.05,.05,.12,c,Be-.06,l,{seg:10,shadow:!1});const h=new ve(new $n(.035,10),w.spotGlow);h.rotation.x=Math.PI/2,h.position.set(c,Be-.121,l),e.add(h)}}const Ue=Pt,K=Pt+5.8,vn=-2,ln=47,Ge=3.2,tt=3,hn=.6,Jf=2.4;let Qf=4242;const un=()=>((Qf=Qf*16807%2147483647)-1)/2147483646;function zn(i,e,t,n=!0){const s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);const r=new On(s);return r.colorSpace=yt,n&&(r.wrapS=r.wrapT=pi),r.anisotropy=8,r}function ed(i,e,t){return zn(1024,1024,(n,s)=>{const o=s/2;for(let a=0;a<2;a++)for(let c=0;c<2;c++){const l=(un()-.5)*14;n.fillStyle=`rgb(${i[0]+l},${i[1]+l},${i[2]+l})`,n.fillRect(a*o,c*o,o,o),n.save(),n.beginPath(),n.rect(a*o,c*o,o,o),n.clip();for(let h=0;h<7;h++){n.strokeStyle=e.replace("A",(.06+un()*.14).toFixed(2)),n.lineWidth=.8+un()*2,n.beginPath();let u=a*o+un()*o,f=c*o;n.moveTo(u,f);for(let d=0;d<6;d++)u+=(un()-.4)*o*.5,f+=o/5,n.quadraticCurveTo(u+(un()-.5)*60,f-o/10,u,f);n.stroke()}for(let h=0;h<400;h++){const u=(un()-.5)*18;n.fillStyle=`rgba(${i[0]+u},${i[1]+u},${i[2]+u},0.25)`,n.beginPath(),n.arc(a*o+un()*o,c*o+un()*o,4+un()*18,0,Math.PI*2),n.fill()}n.restore()}n.strokeStyle=t,n.lineWidth=2;for(let a=0;a<=2;a++)n.beginPath(),n.moveTo(a*o,0),n.lineTo(a*o,s),n.stroke(),n.beginPath(),n.moveTo(0,a*o),n.lineTo(s,a*o),n.stroke()})}const r2=zn(256,256,(i,e)=>{i.fillStyle="#f1f0ec",i.fillRect(0,0,e,e);for(let t=0;t<1500;t++)i.fillStyle=`rgba(0,0,0,${.03+un()*.05})`,i.fillRect(un()*e,un()*e,1.5,1.5);i.strokeStyle="#c9c7c0",i.lineWidth=3;for(const t of[0,e/2,e])i.beginPath(),i.moveTo(t,0),i.lineTo(t,e),i.stroke(),i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke()}),o2=zn(128,128,(i,e)=>{i.fillStyle="#e9e8e4",i.fillRect(0,0,e,e);for(let t=0;t<6;t++){const n=8+t*9;i.strokeStyle=t%2?"#bdbbb5":"#8e8c86",i.lineWidth=4,i.strokeRect(n,n,e-2*n,e-2*n)}i.fillStyle="#55534f",i.fillRect(56,56,16,16)},!1),a2=zn(256,256,(i,e)=>{i.fillStyle="#ecebe6",i.fillRect(0,0,e,e),i.strokeStyle="#c6c4bd",i.lineWidth=2;for(const[t,n,s,r]of[[0,e/2,e/2,0],[e/2,0,e,e/2],[e,e/2,e/2,e],[e/2,e,0,e/2]])i.beginPath(),i.moveTo(t,n),i.lineTo(s,r),i.stroke()}),c2=zn(256,512,(i,e,t)=>{i.fillStyle="#d9d2c3",i.fillRect(0,0,e,t);for(let n=0;n<600;n++)i.fillStyle=`rgba(120,105,85,${.05+un()*.08})`,i.fillRect(un()*e,un()*t,10+un()*50,1);i.fillStyle="rgba(110,100,85,.55)";for(let n=22;n<t;n+=26)i.fillRect(0,n,e,2)},!1);function Oi(i,{bg:e="#0f8a3c",fg:t="#ffffff",w:n=512,h:s=128,font:r="bold 64px system-ui, sans-serif",icon:o=""}={}){return zn(n,s,a=>{a.fillStyle=e,a.fillRect(0,0,n,s),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=r,a.fillText(o?`${o}  ${i}`:i,n/2,s/2+2)},!1)}const it=i=>new Et(i),no=i=>it({map:i,emissive:"#ffffff",emissiveMap:i,emissiveIntensity:.55,roughness:.4}),te={floor:it({map:ed([214,196,170],"rgba(150,120,90,A)","#b9a487"),roughness:.08,metalness:.05,envMapIntensity:1.6}),floorBrown:it({map:ed([104,82,66],"rgba(205,190,170,A)","#4e3c30"),roughness:.08,metalness:.05,envMapIntensity:1.6}),skirting:it({color:"#4a3326",roughness:.25}),wall:it({color:"#ecebe6",roughness:.92}),grid:it({map:r2,roughness:.95}),diffuser:it({map:o2,roughness:.8}),steel:it({color:"#a7aba9",roughness:.45,metalness:.55}),doorWhite:it({color:"#efeee8",roughness:.6}),frame:it({color:"#d8d2c2",roughness:.6}),laminate:it({map:c2,roughness:.55}),diamond:it({map:a2,roughness:.85}),woodStrip:it({color:"#6a4126",roughness:.5}),darkGlass:new Et({color:"#2c3a2c",transparent:!0,opacity:.55,roughness:.05,metalness:.3,depthWrite:!1,side:Ot}),orange:it({color:"#ff6a12",roughness:.35}),caution:it({map:Oi("CAUTION",{bg:"#f2b90f",fg:"#2a2a2a",w:256,h:512,font:"bold 44px system-ui, sans-serif"}),roughness:.5}),red:it({color:"#c42a22",roughness:.5}),fireExit:no(Oi("FIRE EXIT  ←",{w:512,h:112,font:"bold 60px system-ui, sans-serif"})),fireExt:no(Oi("FIRE EXTINGUISHER",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),pushBar:no(Oi("PUSH BAR TO OPEN",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),exitSmall:no(Oi("EXIT",{w:256,h:96,font:"bold 60px system-ui, sans-serif"})),gents:it({map:Oi("GENTS TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚹"}),roughness:.4}),techno:it({map:zn(512,280,(i,e,t)=>{i.fillStyle="#f7f7f5",i.fillRect(0,0,e,t),i.fillStyle="#2b5fae",i.fillRect(e*.58,t*.3,e*.42,t*.32),i.font="bold 66px system-ui, sans-serif",i.textBaseline="middle",i.fillStyle="#2b5fae",i.fillText("Techn",22,t*.46),i.fillStyle="#ffffff",i.fillText("aureus",e*.6,t*.46),i.fillStyle="#555",i.font="22px system-ui, sans-serif",i.fillText("IT STRATEGY & TECHNOLOGY PARTNER",24,t*.78)},!1),roughness:.5}),pixPanel:it({color:"#3c3e40",roughness:.5,metalness:.2}),pixText:it({map:zn(256,96,(i,e,t)=>{i.fillStyle="#3c3e40",i.fillRect(0,0,e,t),i.fillStyle="#4aa3df",i.font="bold 50px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("pixbit",e/2,t*.42),i.fillStyle="#cfd2d4",i.font="16px system-ui, sans-serif",i.fillText("solutions",e/2,t*.8)},!1),roughness:.5}),mat:it({color:"#3b2620",roughness:1}),pink:it({color:"#e9b8c4",roughness:.3}),mirror:it({color:"#c9d4d8",roughness:.08,metalness:.25}),slot:it({color:"#5d6a6e",roughness:.1,metalness:.4}),room:it({color:"#cfccc4",roughness:.9}),roomCeil:it({color:"#e9e7e1",roughness:.95}),desk:it({color:"#c8b79c",roughness:.7}),officeGlass:new Et({color:"#33403a",transparent:!0,opacity:.4,roughness:.05,metalness:.3,depthWrite:!1,side:Ot}),pixLetters:it({map:zn(512,216,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#141414",i.textAlign="center",i.textBaseline="middle",i.font="bold 128px system-ui, sans-serif",i.fillText("pixbit",e/2,t*.38),i.font="44px system-ui, sans-serif",i.fillText("· s o l u t i o n s ·",e/2,t*.82)},!1),transparent:!0,alphaTest:.3,roughness:.6}),cam:it({color:"#f2f2f0",roughness:.4}),leather:it({color:"#1e1a19",roughness:.3,metalness:.05,envMapIntensity:1.2}),tableWood:it({color:"#6b5646",roughness:.55}),daylight:new Ln({color:"#f4f8ff"}),lamp:new Ln({color:"#fff3c9"}),tint:new Et({color:"#c9d6b0",transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1,side:Ot}),olive:it({color:"#8f9a2e",roughness:.85}),silver:it({color:"#b8bcc0",roughness:.3,metalness:.8}),tableTop:it({color:"#e6e1d8",roughness:.35}),ladies:it({map:Oi("LADIES TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚺"}),roughness:.4}),slate:it({color:"#6b6e71",roughness:.85}),navy:it({color:"#1f2a3b",roughness:.6}),navySlats:it({map:zn(256,256,(i,e,t)=>{i.fillStyle="#212d40",i.fillRect(0,0,e,t);for(let n=0;n<e;n+=16)i.fillStyle="#141c29",i.fillRect(n,0,3,t),i.fillStyle="#2b3950",i.fillRect(n+3,0,2,t)}),roughness:.55}),tenCod:it({map:zn(512,160,(i,e,t)=>{i.fillStyle="#e9ecef",i.beginPath(),i.moveTo(20,30),i.lineTo(95,30),i.lineTo(60,80),i.lineTo(95,80),i.lineTo(55,135),i.lineTo(20,135),i.lineTo(55,85),i.lineTo(20,85),i.closePath(),i.fill(),i.font="bold 96px system-ui, sans-serif",i.textBaseline="middle",i.fillText("10COD",120,t/2+4)},!1),transparent:!0,alphaTest:.3,roughness:.4}),eSyn:it({map:zn(512,256,(i,e,t)=>{i.fillStyle="#e8506a",i.beginPath(),i.arc(120,118,100,0,Math.PI*2),i.fill(),i.font="italic bold 150px Georgia, serif",i.textBaseline="middle",i.fillStyle="#26334a",i.fillText("e",40,120),i.fillStyle="#f4e9e4",i.fillText("S",120,130),i.font="bold 76px system-ui, sans-serif",i.fillStyle="#26334a",i.fillText("YNERGY",210,150)},!1),transparent:!0,alphaTest:.3,roughness:.5}),ringLogo:it({map:zn(256,256,(i,e)=>{i.strokeStyle="#8f6cff",i.lineWidth=16,i.beginPath(),i.arc(e/2,e/2,90,0,Math.PI*2),i.stroke(),i.fillStyle="#e5e1ff",i.font="bold 54px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("dev",e/2,e/2)},!1),transparent:!0,alphaTest:.3,roughness:.4}),greyTile:it({color:"#9a9c9a",roughness:.3}),stairBlue:it({color:"#5a6fc4",roughness:.8}),fireRed:it({color:"#c8231c",roughness:.5}),granite:it({color:"#141416",roughness:.12,metalness:.35,envMapIntensity:1.4}),liftSteel:it({color:"#b9bdbd",roughness:.42,metalness:.75}),fireDoor:it({color:"#9aa5a1",roughness:.55,metalness:.15}),greenSign:no(Oi("FIRE STATION",{w:512,h:112,font:"bold 50px system-ui, sans-serif"})),fourth:it({map:Oi("FOURTH FLOOR",{bg:"#c9ccce",fg:"#2c2c2c",w:512,h:128,font:"bold 54px system-ui, sans-serif"}),roughness:.4,metalness:.3}),ledRed:it({color:"#ff2a1a",emissive:"#ff2a1a",emissiveIntensity:1.4}),numDisc:i=>it({map:zn(128,128,(e,t)=>{e.fillStyle="#fff",e.fillRect(0,0,t,t),e.fillStyle="#111",e.font="bold 84px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(String(i),t/2,t/2+4)},!1),roughness:.4})};function qn(i,e,t,n,s,r=te.wall,o=tt){T(i,r,.1,o,n-t,e+s*-.05,o/2,(t+n)/2),T(i,te.skirting,.015,.1,n-t,e+s*.008,.05,(t+n)/2,{shadow:!1}),He(Math.min(e,e-s*.1),t,Math.max(e,e-s*.1),n)}function td(i,e,t,n=Ue,s=K,r=Ue+.25,o=K-.25){const l=o-r;T(i,te.wall,s-n,.85,.25,(n+s)/2,.85/2,e),T(i,te.skirting,s-n,.1,.015,(n+s)/2,.05,e+t*.13,{shadow:!1}),T(i,te.wall,s-n,Ge-2.7,.25,(n+s)/2,(2.7+Ge)/2,e);for(const[u,f]of[[n,r],[o,s]])T(i,te.wall,f-u,2.7-.85,.25,(u+f)/2,(.85+2.7)/2,e);const h=new ve(new ut(l,2.7-.85),w.glass);h.position.set((r+o)/2,(.85+2.7)/2,e),h.renderOrder=2,i.add(h);for(let u=0;u<=5;u++)T(i,w.black,.06,2.7-.85,.08,r+u/5*l,(.85+2.7)/2,e);for(const u of[.85+.02,2.7-.02])T(i,w.black,l,.05,.08,(r+o)/2,u,e);He(n,e-.15,s,e+.15)}function Yc(i,e,t,n,s,r,o){const a=e-o*.03;return T(i,te.frame,.06,s+.06,n+.12,e-o*.015,(s+.06)/2,t),T(i,r,.04,s,n,a,s/2,t),a-o*.03}function l2(i,e,t,n){const o=n-.475,a=n+.95/2;qn(i,K,e,o-.06,-1),qn(i,K,a+.06,t,-1),T(i,te.wall,.1,tt-2.25-.06,.95+.12,K+.05,(tt+2.25+.06)/2,n);for(const v of[o-.03,a+.03])T(i,te.frame,.14,2.25+.06,.06,K+.03,(2.25+.06)/2,v);T(i,te.frame,.14,.06,.95+.12,K+.03,2.25+.03,n);const c=new nt;c.position.set(K-.01,0,o),T(c,te.laminate,.04,2.25-.01,.95-.01,0,2.25/2,.95/2);for(const v of[-1,1]){T(c,te.slot,.012,.9,.12,v*.022,1.45,.95/2-.05,{shadow:!1}),T(c,w.chrome,.03,.42,.03,v*.075,1.05,.95-.12,{shadow:!1});for(const y of[.86,1.24])T(c,w.chrome,.06,.02,.02,v*.05,y,.95-.12,{shadow:!1})}Za.push({leaf:c,closed:0,open:Math.PI/2*.92,name:"ladies toilet",handle:[-.12,1.25,.95-.12],x:K,z:n,block:{minX:K-.05,maxX:K+.1,minZ:o,maxZ:a}});const l=K+.1,h=K+2.3,u=e+.05,f=t-.05,d=tt,g=(l+h)/2,_=(u+f)/2;T(i,w.floorCorridor,h-l,.02,f-u,g,.01,_,{shadow:!1}),T(i,w.white,h-l,.04,f-u,g,d,_,{shadow:!1}),T(i,w.whiteGloss,.1,d,f-u+.2,h+.05,d/2,_);for(const v of[u-.05,f+.05])T(i,w.whiteGloss,h-l,d,.1,g,d/2,v);T(i,te.pink,.02,1.2,f-u,h-.005,.6,_,{shadow:!1});for(const v of[u+.005,f-.005])T(i,te.pink,h-l,1.2,.02,g,.6,v,{shadow:!1});He(h,u-.1,h+.1,f+.1),He(l-.1,u-.1,h,u),He(l-.1,f,h,f+.1),T(i,w.lightStrip,.6,.02,.6,g,d-.03,_,{shadow:!1});const m=_+.7;T(i,w.whiteGloss,.2,.55,.42,h-.1,.8,m),et(i,w.whiteGloss,.19,.15,.4,h-.42,.2,m,{seg:20}),et(i,w.white,.2,.2,.03,h-.42,.42,m,{seg:20}),He(h-.65,m-.25,h,m+.25);const p=_-.6;T(i,w.whiteGloss,.45,.14,.55,h-.23,.85,p),T(i,w.chrome,.12,.03,.03,h-.08,.98,p,{shadow:!1}),T(i,te.mirror,.02,.7,.55,h-.012,1.55,p,{shadow:!1}),He(h-.46,p-.3,h,p+.3)}function $c(i,e,t,n,s,{alarm:r=!0}={}){const a=-s,c=s*Math.PI/2,l=u=>e+s*u;T(i,w.blackMatte,.04,2.3,1.1+.2,l(.005),1.15,t,{shadow:!1});for(const u of[-1,1])T(i,te.liftSteel,.03,2.22,1.1/2-.01,l(.03),1.11,t+u*1.1/4,{shadow:!1});for(const u of[-1,1])T(i,te.liftSteel,.04,2.26,.03,l(.03),1.13,t+u*(1.1/2+.02),{shadow:!1});T(i,te.liftSteel,.04,.03,1.1+.07,l(.03),2.26,t,{shadow:!1}),gt(i,te.numDisc(n),.22,.22,l(.012),2.55,t,c),T(i,te.liftSteel,.03,.14,.62,l(.015),2.92,t,{shadow:!1}),T(i,w.blackMatte,.035,.08,.2,l(.02),2.92,t,{shadow:!1}),T(i,te.ledRed,.036,.04,.06,l(.022),2.92,t,{shadow:!1});const h=t+a*(1.1/2+.33);if(T(i,te.liftSteel,.02,.26,.11,l(.01),1.15,h,{shadow:!1}),T(i,w.blackMatte,.01,.06,.05,l(.022),1.12,h,{shadow:!1}),r){const u=t-a*.97;T(i,te.fireRed,.05,.14,.12,l(.025),2.05,u,{shadow:!1}),T(i,te.fireRed,.04,.13,.1,l(.02),1.3,u,{shadow:!1})}}const h2=["techno","tenCod","eSyn","ringLogo"];function kp(i){for(const e of h2)te[e].visible=i}kp(!1);function Kc(i,e,t,n,s,r=4.2,{frost:o=!1}={}){const a=e-t*.03,c=e+t*3;St(i,te.room,Math.min(e,c),n,Math.max(e,c),s,0),T(i,te.room,.1,Ge,s-n,c,Ge/2,(n+s)/2,{shadow:!1}),St(i,te.roomCeil,Math.min(e,c),n,Math.max(e,c),s,Ge,{down:!0});for(let l=n;l<s-.5;l+=r){const h=l+.2,u=Math.min(l+r,s)-.2;T(i,te.wall,.4,Ge,.4,e,Ge/2,l);const f=new ve(new ut(u-h,tt-.05),te.officeGlass);if(f.position.set(a,(tt-.05)/2,(h+u)/2),f.rotation.y=t>0?-Math.PI/2:Math.PI/2,f.renderOrder=2,i.add(f),o){const p=new ve(new ut(u-h,.75),w.glassFrost);p.position.set(a-t*.006,1.25,(h+u)/2),p.rotation.y=f.rotation.y,p.renderOrder=3,i.add(p)}const d=Math.max(2,Math.round((u-h)/1));for(let p=0;p<=d;p++)T(i,w.black,.06,tt,.05,a,tt/2,h+p/d*(u-h));for(const p of[.04,2.35,tt-.03])T(i,w.black,.06,.06,u-h,a,p,(h+u)/2);const g=h+(u-h)/d;for(const p of[-1,1])T(i,w.chrome,.03,.6,.025,a-t*p*.05,1.05,g-.12,{shadow:!1});const _=e+t*1.6,m=(h+u)/2+.6;T(i,te.desk,.7,.04,1.4,_,.75,m);for(const p of[-1,1])T(i,w.black,.05,.73,.05,_,.37,m+p*.6,{shadow:!1});T(i,w.screenDark,.03,.32,.55,_+t*.2,1,m),T(i,w.black,.45,.5,.45,_-t*.55,.5,m)}T(i,te.wall,.4,Ge,.4,e,Ge/2,s),He(Math.min(e,a)-.05,n,Math.max(e,a)+.05,s)}const ah=14.5,Bn=ah+11.85,Xt=Bn+6.4,hi=K+11;function nd(i,e,t,n=0,s=1.6){const r=new nt;r.position.set(e,0,t),r.rotation.y=n,i.add(r),T(r,te.leather,s,.3,.82,0,.24,0),T(r,te.leather,s-.36,.14,.62,0,.45,.08);for(const o of[-1,1])T(r,te.leather,.18,.62,.82,o*(s/2-.09),.37,0);T(r,te.leather,s-.1,.36,.18,0,.6,-.32);for(const o of[-1,1])T(r,te.leather,(s-.4)/2,.36,.16,o*(s-.4)/4,.74,-.22,{rx:-.12});for(const o of[-1,1])for(const a of[-1,1])T(r,w.blackMatte,.06,.09,.06,o*(s/2-.08),.045,a*.34,{shadow:!1});return r}function id(i,e,t,n=0,s=1.9){const r=new nt;r.position.set(e,0,t),r.rotation.y=n,i.add(r),T(r,te.leather,s,.22,.72,0,.27,.04),T(r,te.leather,s,.1,.7,0,.42,.05),T(r,te.leather,s,.62,.16,0,.73,-.3,{rx:-.08});for(const o of[-1,1])T(r,w.chrome,.03,.03,.72,o*(s/2-.12),.015,.02,{shadow:!1}),T(r,w.chrome,.03,.16,.03,o*(s/2-.12),.08,.34,{shadow:!1}),T(r,w.chrome,.03,.16,.03,o*(s/2-.12),.08,-.3,{shadow:!1});return r}function jc(i,e,t,n=.85){He(i-t/2,e-n/2,i+t/2,e+n/2)}function u2(i){const e=(Bn+Xt)/2,t=Xt-Bn;St(i,te.floor,K,Bn,hi,Xt,.001,{tile:1.6}),St(i,te.grid,K,Bn,hi,Xt,Ge,{down:!0,tile:1.2});for(const d of[Bn,Xt]){const g=d===Bn?-1:1;T(i,te.wall,hi-K,Ge,.1,(K+hi)/2,Ge/2,d+g*.05),T(i,te.skirting,hi-K,.1,.015,(K+hi)/2,.05,d-g*.008,{shadow:!1}),He(K,d-.1,hi,d+.1)}T(i,te.granite,.65,Ge,.55,K+.08,Ge/2,Xt+.275),He(K-.25,Xt,K+.4,Xt+.55),T(i,te.wall,.1,Ge,t,hi+.05,Ge/2,e);const n=hi-.02,s=e-1.6,r=e+1.6,o=2.55,a=new ve(new ut(r-s,o),te.daylight);a.position.set(n+.005,o/2,e),a.rotation.y=-Math.PI/2,i.add(a);const c=new ve(new ut(r-s,o),w.glass);c.position.set(n,o/2,e),c.rotation.y=-Math.PI/2,c.renderOrder=2,i.add(c);for(const d of[s,e-.75,e+.75,r])T(i,w.black,.07,o,.07,n,o/2,d);for(const d of[.04,o])T(i,w.black,.07,.07,r-s,n,d,e);for(const[d,g]of[[s,e-.75],[e+.75,r]])for(const _ of[.3,1.25,2.15])T(i,w.black,.07,.05,g-d,n,_,(d+g)/2);T(i,w.black,.07,.05,1.5,n,2.15,e);for(const d of[e-.07,e+.07])T(i,w.blackMatte,.04,.45,.03,n-.07,1.1,d,{shadow:!1});He(hi-.1,Bn,hi+.1,Xt),nd(i,K+5,Bn+.48,0,1.6),jc(K+5,Bn+.48,1.6),id(i,K+7.1,Bn+.45,0,1.9),jc(K+7.1,Bn+.45,1.9),id(i,K+5.6,Xt-.45,Math.PI,2.2),jc(K+5.6,Xt-.45,2.2),nd(i,K+9.4,Xt-.75,Math.PI+.35,1.6),He(K+8.5,Xt-1.3,K+10.3,Xt-.2);const l=K+6.2,h=Bn+1.6;T(i,te.tableTop,1.2,.04,.6,l,.42,h),T(i,te.tableWood,1.1,.02,.5,l,.12,h,{shadow:!1});for(const d of[-1,1])for(const g of[-1,1])T(i,te.tableWood,.04,.44,.04,l+d*.52,.2,h+g*.24,{rz:d*.12});He(l-.62,h-.32,l+.62,h+.32);const u=K+8.4;T(i,te.frame,1.05,2.15,.05,u,1.075,Xt-.02),T(i,te.fireDoor,.95,2.1,.04,u,1.05,Xt-.04),T(i,w.chrome,.14,.03,.04,u-.35,1.05,Xt-.08,{shadow:!1}),gt(i,te.greenSign,.5,.11,u+.2,2.35,Xt-.012,Math.PI),T(i,w.white,.09,.09,.012,u-.75,1.25,Xt-.006,{shadow:!1});for(const d of[K+2,K+5,K+8])for(const g of[e-1.7,e+1.7])T(i,te.lamp,.24,.01,.24,d,Ge-.006,g,{shadow:!1});for(const d of[K+3.5,K+6.5,K+9.5])for(const g of[e-2.2,e+2.2])gt(i,te.diffuser,.6,.6,d,Ge-.004,g,0,Math.PI/2);for(const d of[K+3,K+7.5])et(i,te.cam,.06,.07,.03,d,Ge-.015,e-.6,{seg:14,shadow:!1});const f=new ve(new Zt(.07,16,10,0,Math.PI*2,0,Math.PI/2),te.cam);f.rotation.x=Math.PI,f.position.set(K+9.2,Ge,Xt-.5),i.add(f)}function f2(i){St(i,te.floor,Ue+.02,vn,K-Jf,ln,.001,{tile:1.6}),St(i,te.floorBrown,K-Jf,vn,K,ln,.001,{tile:1.6}),St(i,te.grid,Ue+hn,vn,K-hn,ln,Ge,{down:!0,tile:1.2});for(const[z,Se,Ie,Ve,k,C]of[[Ue,Ue+hn,Ue+hn,1,vn,ln],[K-hn,K,K-hn,-1,vn,ln]])St(i,te.wall,z,k,Se,C,tt,{down:!0}),T(i,te.wall,.03,Ge-tt,C-k,Ie,(tt+Ge)/2,(k+C)/2,{shadow:!1}),T(i,w.lightStrip,.02,.025,C-k-.4,Ie+Ve*.03,tt+.04,(k+C)/2,{shadow:!1});for(let z=vn+2.2;z<ln-1;z+=3)for(const Se of[Ue+hn+.9,K-hn-.9])et(i,w.spotGlow,.07,.07,.01,Se,Ge-.006,z,{seg:16,shadow:!1});for(let z=vn+3.7;z<ln-2;z+=6)gt(i,te.diffuser,.6,.6,(Ue+K)/2+(Math.round(z)%2?.6:-.6),Ge-.004,z,0,Math.PI/2),et(i,te.cam,.05,.06,.03,(Ue+K)/2,Ge-.015,z+1.5,{seg:14,shadow:!1});for(const z of[vn+1.7,12.5,22.5])T(i,w.spotGlow,.22,.012,.6,Ue+hn/2,tt-.008,z,{shadow:!1});qn(i,Ue,vn,fn,1),T(i,te.wall,.1,Ge-tt,fn-vn,Ue-.05,(tt+Ge)/2,(vn+fn)/2,{shadow:!1}),T(i,te.steel,.03,1.75,.82,Ue+.015,1.12,1.75),T(i,w.metalDark,.035,.012,.8,Ue+.016,.25,1.75,{shadow:!1}),T(i,w.chrome,.04,.03,.12,Ue+.04,1.15,1.42,{shadow:!1}),gt(i,te.fireExt,.36,.07,Ue+.004,1.35,2.4,Math.PI/2),gt(i,te.fireExt,.36,.07,Ue+.004,2.35,1.75,Math.PI/2);const e=Yc(i,Ue,-.25,.95,2.15,te.doorWhite,-1);T(i,w.chrome,.05,.05,.8,e+.03,1,-.25,{shadow:!1});for(const z of[-.62,.12])T(i,w.chrome,.06,.08,.05,e+.02,1,z,{shadow:!1});gt(i,te.pushBar,.3,.06,e+.002,1.2,-.25,Math.PI/2),gt(i,te.exitSmall,.28,.1,Ue+.004,2.45,-.25,Math.PI/2),T(i,te.red,.04,.12,.12,Ue+.02,1.4,.55,{shadow:!1}),T(i,w.white,.01,.12,.08,Ue+.04,1.6,-.25+.75,{shadow:!1});const t=Tt,n=18.75,s=(z,Se,Ie,Ve)=>{T(i,w.concrete,.08,Ve-Ie,Se-z,Ue-.04,(Ie+Ve)/2,(z+Se)/2,{shadow:!1});const k=new ve(Ds(new ut(Se-z,Ve-Ie),Se-z,Ve-Ie,1.6),w.concrete);k.position.set(Ue+.002,(Ie+Ve)/2,(z+Se)/2),k.rotation.y=Math.PI/2,k.receiveShadow=!0,i.add(k),Ie===0&&(T(i,te.skirting,.015,.1,Se-z,Ue+.008,.05,(z+Se)/2,{shadow:!1}),He(Ue-.1,z,Ue+.02,Se))},r=[t,...xo.flatMap(z=>[z-bn-.03,z+bn+.03]),n];for(let z=0;z<r.length;z+=2)s(r[z],r[z+1],0,tt);for(const z of xo)s(z-bn-.03,z+bn+.03,To+.03,tt);T(i,te.wall,.1,Ge-tt,ln-t,Ue-.05,(tt+Ge)/2,(t+ln)/2,{shadow:!1}),T(i,w.white,.012,.09,.09,Ue+.006,1.25,9.55,{shadow:!1}),T(i,w.blackMatte,.015,.03,.035,Ue+.012,1.25,9.55,{shadow:!1}),T(i,w.blackMatte,.03,.14,.07,Ue+.015,1.25,9.8,{shadow:!1}),T(i,w.bottleBlue,.01,.04,.04,Ue+.031,1.27,9.8,{shadow:!1}),T(i,w.white,.012,.09,.09,Ue+.006,.4,9.7,{shadow:!1});const o=17.4;T(i,w.black,.03,.78,.78,Ue+.015,2.05,o),gt(i,w.logo,.42,.6,Ue+.032,2.05,o,Math.PI/2),gt(i,te.pixLetters,.8,.34,Ue+.004,1.42,o,Math.PI/2),T(i,w.white,.012,.09,.14,Ue+.006,.42,o+.35,{shadow:!1}),T(i,w.white,.03,.03,.9,Ue+hn/2,tt-.015,o,{shadow:!1});for(const z of[o-.3,o+.3])et(i,w.white,.045,.045,.16,Ue+hn/2-.05,tt-.12,z,{seg:12,shadow:!1,rz:.6});qn(i,Ue,n,20,1);const a=Yc(i,Ue,19.35,.95,2.25,te.laminate,-1);T(i,te.slot,.012,.9,.12,a,1.45,19.3,{shadow:!1}),T(i,w.chrome,.03,.42,.03,a+.05,1.05,19,{shadow:!1});const c=new ve(new ut(.95,1.9),te.fireDoor);c.position.set(Ue+.012,1.15,20.9),c.rotation.y=Math.PI/2,i.add(c),T(i,w.chrome,.03,.1,.04,Ue+.03,1,21.2,{shadow:!1}),gt(i,te.greenSign,.5,.11,Ue+.012,2.25,20.9,Math.PI/2),gt(i,te.fireExt,.62,.12,Ue+.012,1.45,22.05,Math.PI/2);const l=22.8,h=36;qn(i,Ue,20,l,1),qn(i,Ue,l,h,1,te.granite);const u=[{n:4,z:24.6},{n:3,z:28},{n:2,z:31.4},{n:1,z:34.6}];for(const z of u)$c(i,Ue,z.z,z.n,1);T(i,w.white,.012,.09,.09,Ue+.006,.38,29.7,{shadow:!1});for(const z of[32.6,33])et(i,w.chrome,.22,.22,.7,Ue+.32,.35,z,{seg:20,shadow:!1});const f=new nt;f.position.set(Ue+.9,2.95,24.2),i.add(f),T(f,w.black,.03,.2,.62,0,0,0,{shadow:!1}),gt(f,te.fourth,.6,.18,.017,0,0,Math.PI/2),gt(f,te.fourth,.6,.18,-.017,0,0,-Math.PI/2);const d=h,g=h+3.6;qn(i,Ue,d,g,1,te.slate);for(const z of[g-1.25,g-.25])T(i,w.blackMatte,.006,2.2,.01,Ue+.003,1.1,z,{shadow:!1});T(i,w.blackMatte,.006,.01,1,Ue+.003,2.2,g-.75,{shadow:!1}),gt(i,te.eSyn,1.3,.65,Ue+.012,1.75,d+1.35,Math.PI/2),T(i,w.white,.04,.03,1.2,Ue+hn+.3,Ge-.03,d+1.35,{shadow:!1});for(const z of[d+.9,d+1.35,d+1.8])et(i,w.white,.045,.045,.16,Ue+hn+.3,Ge-.12,z,{seg:12,shadow:!1,rz:.7});T(i,te.navy,.4,Ge,.3,Ue,Ge/2,g+.1);const _=g+4.2;Kc(i,Ue,-1,g+.25,_,4.2,{frost:!0});const m=_+.2,p=m+1.3;qn(i,Ue,m,p,1,te.navy);const v=new ve(Ds(new ut(p-m,tt),p-m,tt,.8),te.navySlats);v.position.set(Ue+.004,tt/2,(m+p)/2),v.rotation.y=Math.PI/2,i.add(v),gt(i,te.ringLogo,.5,.5,Ue+.01,1.75,(m+p)/2,Math.PI/2),Kc(i,Ue,-1,p+.2,ln-.15),T(i,te.wall,.1,Ge-tt,ln-20,Ue-.05,(tt+Ge)/2,(20+ln)/2,{shadow:!1}),T(i,te.mat,.6,.012,1.05,Ue+.42,.006,8.12,{shadow:!1});for(const z of[5,18.3])T(i,te.cam,.04,.04,.12,Ue+hn-.05,tt-.03,z,{shadow:!1}),et(i,te.cam,.035,.035,.14,Ue+hn-.1,tt-.08,z,{seg:10,shadow:!1,rz:Math.PI/2-.3});qn(i,K,vn,Math.min(15,ah),-1),T(i,te.wall,.1,Ge-tt,ln-vn,K+.05,(tt+Ge)/2,(vn+ln)/2,{shadow:!1});const y=new ve(new ut(.85,2.3),w.glassFrost);y.position.set(K-.03,1.15,-1.2),y.rotation.y=-Math.PI/2,y.renderOrder=2,i.add(y);for(const z of[-1.65,-.75])T(i,w.black,.06,2.35,.05,K-.03,1.17,z);for(const z of[.05,1.2,2.33])T(i,w.black,.06,.05,.9,K-.03,z,-1.2);T(i,w.chrome,.03,.4,.025,K-.09,1.05,-.88,{shadow:!1});const x=2.6,E=Yc(i,K,x,1,2.25,te.laminate,1);T(i,te.slot,.012,.9,.12,E,1.45,x-.05,{shadow:!1}),T(i,w.chrome,.03,.42,.03,E-.05,1.05,x+.37,{shadow:!1});for(const z of[.86,1.24])T(i,w.chrome,.06,.02,.02,E-.025,z,x+.37,{shadow:!1});et(i,w.chrome,.02,.02,.02,E-.01,.95,x+.42,{seg:10,shadow:!1,rz:Math.PI/2});const S=new nt;S.position.set(K-.33,2.62,x-.75),i.add(S),T(S,w.black,.6,.15,.03,0,0,0),gt(S,te.gents,.56,.12,0,0,.017,0),gt(S,te.gents,.56,.12,0,0,-.017,Math.PI),T(S,w.metalDark,.04,.05,.04,.3,.1,0);const R=new ve(new Zt(.1,20,14),te.orange);R.position.set(K-.13,1.78,x+1.4),R.castShadow=!0,i.add(R),et(i,w.metalDark,.11,.09,.08,K-.13,1.72,x+1.4,{seg:16,open:!0,shadow:!1}),T(i,w.metalDark,.08,.02,.02,K-.05,1.72,x+1.4,{shadow:!1});const P=ah,M=P+1.7,b=2.45,N=K-.04,V=P+1.05,H=new ve(new ut(M-P,tt-.05),te.tint);H.position.set(N,(tt-.05)/2,(P+M)/2),H.rotation.y=-Math.PI/2,H.renderOrder=2,i.add(H);const $=(z,Se=0,Ie=tt)=>T(i,w.black,.07,Ie-Se,.06,N,(Se+Ie)/2,z),j=(z,Se=P,Ie=M)=>T(i,w.black,.07,.06,Ie-Se,N,z,(Se+Ie)/2);for(const z of[P,M])$(z,0,tt);j(.03),j(b),j(tt-.03);for(const z of[P+.04,V-.03,V+.03,M-.04])$(z,0,b);$((P+V)/2,0,b);for(const z of[.62,1.22,1.84])j(z,P,V);j(1.22,V,M);for(const z of[V-.09,V+.09]){T(i,w.chrome,.03,.6,.025,K-.12,1.15,z,{shadow:!1});for(const Se of[.88,1.42])T(i,w.chrome,.08,.02,.02,K-.09,Se,z,{shadow:!1})}He(K-.08,P,K+.02,M);const q=P-.6,ne=M+.6,B=K+2.6;St(i,te.tableWood,K+.02,q,B,ne,.002),St(i,te.roomCeil,K,q,B,ne,Ge,{down:!0}),T(i,te.olive,.1,Ge,ne-q,B,Ge/2,(q+ne)/2,{shadow:!1});for(const z of[q,ne])T(i,te.olive,B-K-.12,Ge,.1,(K+.12+B)/2,Ge/2,z,{shadow:!1});for(const[z,Se]of[[V-.1,.9],[V+.15,1.15]]){T(i,w.black,.01,Se,.01,K+.9,Ge-Se/2,z,{shadow:!1});const Ie=new ve(new Zt(.05,12,10),te.lamp);Ie.position.set(K+.9,Ge-Se-.04,z),i.add(Ie)}T(i,te.silver,.035,.2,.15,K-.018,1.35,P-.4,{shadow:!1}),T(i,w.blackMatte,.01,.08,.09,K-.037,1.39,P-.4,{shadow:!1}),T(i,w.bottleBlue,.006,.05,.05,K-.043,1.4,P-.42,{shadow:!1});const ue=new ve(new Zt(.07,16,10,0,Math.PI*2,0,Math.PI/2),te.cam);ue.rotation.x=Math.PI,ue.position.set(K-.35,tt,P+.3),i.add(ue);const de=P+2.85,Ee=de+3.4;qn(i,K,M,Ee+.2,-1),T(i,w.white,.012,.09,.09,K-.006,.38,de-.3,{shadow:!1});for(const z of[de-.1,Ee+.1]){T(i,te.woodStrip,.06,tt,.2,K-.03,tt/2,z);for(const Se of[-.06,0,.06])T(i,w.blackMatte,.005,tt,.008,K-.061,tt/2,z+Se,{shadow:!1})}const ze=new ve(Ds(new ut(Ee-de,tt),Ee-de,tt,.7),te.diamond);ze.position.set(K-.004,tt/2,(de+Ee)/2),ze.rotation.y=-Math.PI/2,ze.receiveShadow=!0,i.add(ze);const $e=(de+Ee)/2+.2;T(i,w.white,.03,.58,1.05,K-.02,1.85,$e),gt(i,te.techno,1,.55,K-.036,1.85,$e,-Math.PI/2),T(i,w.black,.04,.03,.8,K-hn-.3,Ge-.03,$e,{shadow:!1});for(const z of[$e-.3,$e+.05,$e+.35])et(i,w.black,.04,.035,.14,K-hn-.3,Ge-.12,z,{seg:10,shadow:!1,rz:-.7});const Q=Ee+.2,me=Ee+1.35,ge=me+.6,pe=ge+1.1,Ne=pe,ke=Bn;T(i,w.blackMatte,.02,.17,.09,K-.07,1.45,Ee+.1,{shadow:!1}),T(i,w.bottleBlue,.005,.11,.06,K-.081,1.47,Ee+.1,{shadow:!1});const Te=new ve(new ut(me-Q-.04,2.38),w.glass);Te.position.set(K-.03,1.2,(Q+me)/2),Te.rotation.y=-Math.PI/2,Te.renderOrder=2,i.add(Te);for(const z of[Q+.05,me-.05])T(i,w.chrome,.03,.05,.12,K-.03,2.36,z,{shadow:!1});T(i,w.chrome,.03,1.1,.03,K-.11,1.15,Q+.16,{shadow:!1});for(const z of[.62,1.68])T(i,w.chrome,.08,.02,.02,K-.07,z,Q+.16,{shadow:!1});He(K-.06,Q,K+.02,me),St(i,te.greyTile,K+.02,Q,K+3,me+.3,.002,{tile:1.2}),St(i,te.roomCeil,K,Q,K+3,me+.3,Ge,{down:!0}),T(i,te.room,.1,Ge,me+.3-Q,K+3,Ge/2,(Q+me+.3)/2,{shadow:!1}),T(i,w.black,.05,2.6,.05,K+1.6,1.3,Q+.5,{shadow:!1}),T(i,te.room,2.88,Ge,.1,K+1.56,Ge/2,me+.35,{shadow:!1}),qn(i,K,me,ge,-1),T(i,w.white,.012,.09,.09,K-.006,1.25,(me+ge)/2,{shadow:!1}),T(i,w.blackMatte,.015,.03,.035,K-.012,1.25,(me+ge)/2,{shadow:!1}),T(i,te.wall,.1,tt-2.4,me-Q,K+.05,(2.4+tt)/2,(Q+me)/2),T(i,te.wall,.1,tt-2.3,pe-ge,K+.05,(2.3+tt)/2,(ge+pe)/2),T(i,te.frame,.12,.06,pe-ge,K+.02,2.3,(ge+pe)/2);for(const z of[ge+.02,pe-.02])T(i,te.frame,.12,2.3,.04,K+.02,1.15,z);const We=new nt;We.position.set(K+.06,0,ge+.04),We.rotation.y=1.25,i.add(We);const ae=pe-ge-.08;T(We,te.laminate,.04,2.25,ae,0,1.125,ae/2);for(const z of[-1,1])T(We,te.slot,.012,.9,.1,z*.021,1.45,ae*.6,{shadow:!1}),T(We,w.chrome,.03,.42,.025,z*.06,1.05,ae-.12,{shadow:!1});He(K+.04,ge,K+1.05,ge+.4);const xe=K+4.2,O=ge-.1,ce=pe+.15;St(i,te.granite,K+.02,O,xe,ce,.003,{tile:1.2}),St(i,te.roomCeil,K,O,xe,ce,4.5,{down:!0}),T(i,te.stairBlue,xe-K-.12,4.5,.1,(K+.12+xe)/2,2.25,O-.05,{shadow:!1}),T(i,te.stairBlue,xe-K-.12,4.5,.1,(K+.12+xe)/2,2.25,ce+.05,{shadow:!1}),T(i,te.stairBlue,.1,4.5,ce-O,xe+.05,2.25,(O+ce)/2,{shadow:!1}),T(i,te.wall,.1,4.5-tt,pe-ge,K+.05,(4.5+tt)/2,(ge+pe)/2,{shadow:!1});for(let z=0;z<9;z++)T(i,te.granite,.3,.17*(z+1),.95,K+1.3+z*.3,.085*(z+1),pe-.4);He(K+1.15,pe-.9,xe,ce),He(xe-.05,O,xe+.1,ce);const Z=pe+1.5,he=K-.1;T(i,te.granite,.2,Ge,ke-Ne,K,Ge/2,(Ne+ke)/2),T(i,te.granite,.1,Ge,.1,K+.05,Ge/2,ke+.05),He(he,Ne,K+.1,ke),$c(i,he,Z,5,-1);const ie=new nt;ie.position.set(K-.9,2.95,Ne-.1),i.add(ie),T(ie,w.black,.03,.2,.62,0,0,0,{shadow:!1}),gt(ie,te.fourth,.6,.18,.017,0,0,Math.PI/2),gt(ie,te.fourth,.6,.18,-.017,0,0,-Math.PI/2);const Re=Xt+.55,Me=Re+.35,I=Me+2.6;qn(i,K,Re,Me,-1),T(i,te.granite,.2,Ge,I-Me,K,Ge/2,(Me+I)/2),He(K-.1,Me,K+.1,I),$c(i,K-.1,Me+1.45,6,-1);const A=I,G=A+2.8,re=A+.9;l2(i,A,G,re);const fe=new nt;fe.position.set(K-.33,2.62,re+.75),i.add(fe),T(fe,w.black,.6,.15,.03,0,0,0),gt(fe,te.ladies,.56,.12,0,0,.017,0),gt(fe,te.ladies,.56,.12,0,0,-.017,Math.PI);const le=new ve(new Zt(.1,20,14),te.orange);le.position.set(K-.13,1.78,A+2.2),le.castShadow=!0,i.add(le),et(i,w.metalDark,.11,.09,.08,K-.13,1.72,A+2.2,{seg:16,open:!0,shadow:!1}),T(i,w.white,.012,.09,.09,K-.006,.38,G-.25,{shadow:!1});const Le=G,Ae=Le+2.6;qn(i,K,Le,Ae,-1,te.navy);const Pe=new ve(Ds(new ut(Ae-Le,tt),Ae-Le,tt,.8),te.navySlats);Pe.position.set(K-.004,tt/2,(Le+Ae)/2),Pe.rotation.y=-Math.PI/2,i.add(Pe),gt(i,te.tenCod,1.5,.47,K-.012,1.75,(Le+Ae)/2,-Math.PI/2),Kc(i,K,1,Ae+.2,ln-.15),u2(i),td(i,vn-.12,1,Ue,K,Ue+.9,K-.25),td(i,ln+.12,-1),gt(i,te.fireExit,.5,.11,(Ue+K)/2,2.95,ln-.01,Math.PI);const st=new nt;st.position.set((Ue+K)/2,2.72,vn+1.6),i.add(st),T(st,w.white,.58,.14,.03,0,0,0,{shadow:!1}),gt(st,te.fireExit,.56,.12,0,0,.016,0),gt(st,te.fireExit,.56,.12,0,0,-.016,Math.PI);for(const z of[-1,1])T(st,w.chrome,.006,Ge-2.79,.006,z*.22,(Ge-2.79)/2+.07,0,{shadow:!1})}const sd={x:12.75,z:17.72,yaw:1.05};function d2(i){St(i,w.floorBeige,0,0,Ut,It,0),St(i,w.floorBeige,Ut,fn,Pt,It,0),St(i,w.floorBeige,qt-as,It,Pt,Tt,0),St(i,w.floorDark,0,It,qt-as,Tt,0),St(i,w.floorDark,0,Tt,jt,pt,0),IM(i),DM(i),f2(i),UM(i),VM(i),ZM(i),n2(i),s2(i)}function Hh(i,e){return i>Pt?"Building Hall":i<0?"Terrace":e>Lt?"Game Room":e>pt?i<Fn?"Meeting Room":"Workspace":e<ls&&i<Ut?"Corner Cabin":e<Gt&&e>fn&&i>Ut&&i<Wi?i<7?"Cabin 2":"Cabin 1":i>=qt&&e<Tt?"Reception":e<It?i<Ut?"Window Lounge":"Cabin Corridor":"Workspace"}const hr=new En(0,0,0,"YXZ"),ur=new D,p2={type:"change"},m2={type:"lock"},g2={type:"unlock"},rd=Math.PI/2;class x2 extends Ay{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=_2.bind(this),this._onPointerlockChange=v2.bind(this),this._onPointerlockError=y2.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;ur.setFromMatrixColumn(t.matrix,0),ur.crossVectors(t.up,ur),t.position.addScaledVector(ur,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;ur.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(ur,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function _2(i){if(this.enabled===!1||this.isLocked===!1)return;const e=i.movementX||i.mozMovementX||i.webkitMovementX||0,t=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;hr.setFromQuaternion(n.quaternion),hr.y-=e*.002*this.pointerSpeed,hr.x-=t*.002*this.pointerSpeed,hr.x=Math.max(rd-this.maxPolarAngle,Math.min(rd-this.minPolarAngle,hr.x)),n.quaternion.setFromEuler(hr),this.dispatchEvent(p2)}function v2(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(m2),this.isLocked=!0):(this.dispatchEvent(g2),this.isLocked=!1)}function y2(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const od=1.65,M2=.25,ad=3,b2=6,w2=18,S2=5.2;function E2(i,e,{spawn:t,yaw:n=0}){const s=new x2(i,e),r={},o={x:0,y:0,run:!1},a=new D(t.x,0,t.z),c=new D;let l=0,h=0,u=0,f=0;i.position.set(a.x,od,a.z),i.rotation.set(0,n,0,"YXZ");const d={dragMode:!1,paused:!1};let g=!1,_=0,m=0;const p=new En(0,0,0,"YXZ");e.addEventListener("mousedown",P=>{d.dragMode&&(g=!0,_=P.clientX,m=P.clientY)}),addEventListener("mouseup",()=>{g=!1}),addEventListener("mousemove",P=>{!d.dragMode||!g||d.paused||(p.setFromQuaternion(i.quaternion),p.y-=(P.clientX-_)*.004,p.x=Math.max(-1.45,Math.min(1.45,p.x-(P.clientY-m)*.004)),i.quaternion.setFromEuler(p),_=P.clientX,m=P.clientY)});const v=()=>!d.paused&&(s.isLocked||d.dragMode);addEventListener("keydown",P=>{r[P.code]=!0,P.code==="Space"&&y()});function y(){v()&&h<=.001&&(l=S2)}addEventListener("keyup",P=>{r[P.code]=!1}),addEventListener("blur",()=>{for(const P in r)r[P]=!1});const x=new D,E=new D,S=new D;function R(P){P=Math.min(P,.05),S.set(0,0,0),v()&&(i.getWorldDirection(x),x.y=0,x.normalize(),E.crossVectors(x,i.up).normalize(),(r.KeyW||r.ArrowUp)&&S.add(x),(r.KeyS||r.ArrowDown)&&S.sub(x),(r.KeyD||r.ArrowRight)&&S.add(E),(r.KeyA||r.ArrowLeft)&&S.sub(E),(o.x||o.y)&&S.addScaledVector(x,o.y).addScaledVector(E,o.x));const M=r.ShiftLeft||r.ShiftRight||o.run;if(S.lengthSq()>0){const V=Math.min(1,S.length());S.normalize().multiplyScalar((M?b2:ad)*(o.x||o.y?Math.max(.5,V):1))}const b=1-Math.exp(-(h>0?3:12)*P);c.x+=(S.x-c.x)*b,c.z+=(S.z-c.z)*b,CM(a,c.x*P,c.z*P,M2),l-=w2*P,h=Math.max(0,h+l*P),h===0&&(l=Math.max(l,0));const N=Math.hypot(c.x,c.z);h===0&&N>.3?(u+=P*N*2.6,f=Math.sin(u)*.035*Math.min(1,N/ad)):f*=.85,i.position.set(a.x,od+h+f,a.z)}return{controls:s,update:R,pos:a,state:d,touch:o,jump:y}}function T2(i){var s;i.updateMatrixWorld(!0);const e=new Map,t=[];i.traverse(r=>{r.isMesh&&t.push(r)});const n=r=>{const o=[];for(let a=r;a&&a!==i;a=a.parent)a.userData.label&&o.at(-1)!==a.userData.label&&o.push(a.userData.label);return o.join(" · ")};for(const r of t){const o=`${r.material.uuid}|${r.castShadow}|${r.renderOrder}`;let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(const h of Object.keys(a.attributes))["position","normal","uv"].includes(h)||a.deleteAttribute(h);a.attributes.uv||a.setAttribute("uv",new ft(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(r.matrixWorld),e.has(o)||e.set(o,{material:r.material,cast:r.castShadow,order:r.renderOrder,geos:[],tris:0,labels:[]});const c=e.get(o),l=n(r);l&&((s=c.labels.at(-1))==null?void 0:s[1])!==l?c.labels.push([c.tris,l]):!l&&c.labels.length&&c.labels.at(-1)[1]!==""&&c.labels.push([c.tris,""]),c.geos.push(a),c.tris+=a.attributes.position.count/3}for(;i.children.length;)i.remove(i.children[0]);for(const r of e.values()){const o=Ka(r.geos,!1);o.computeBoundingSphere();const a=new ve(o,r.material);a.castShadow=r.cast,a.receiveShadow=!0,a.renderOrder=r.order,a.userData.labels=r.labels,i.add(a)}return e.size}function A2(i){const e=i.object.userData.labels;if(e){let t=0,n=e.length-1,s="";for(;t<=n;){const r=t+n>>1;e[r][0]<=i.faceIndex?(s=e[r][1],t=r+1):n=r-1}return s}for(let t=i.object;t;t=t.parent)if(t.userData.label)return t.userData.label;return""}const Zc="/api/suggestions",Jc="pixbit-suggestions-v2",Fp={W:"Window table",L:"Long table",E:"East-wall desk",LOCK:"Lockers"},R2={W:[1.4,1.2],L:[2.8,1.2],E:[1.3,.8],LOCK:[.55,1.25]},C2=["Corner cabin","Cabin 1","Cabin 2","Lounge","Corridor","Reception","Open workspace","Back wall","East wall","Windows",...ka.map(i=>i.id==="LOCK"?"Lockers":`${Fp[i.id[0]]} ${i.id}`)],Wn="#ecc828",cd="#3fbf6f",P2=35e6;function L2({scene:i,camera:e,player:t,world:n,zoneAt:s,renderer:r}){let o=[],a=!1,c=null,l=[],h=[],u=!1,f=!1,d=null;async function g(){try{const C=await fetch(Zc);if(!C.ok)throw new Error(C.status);o=await C.json()}catch{a=!0;try{o=JSON.parse(localStorage.getItem(Jc))||[]}catch{o=[]}}he()}async function _(C,F,oe){if(a){C.n=C.n??o.reduce((we,be)=>Math.max(we,be.n||0),0)+1,C.created=C.created??Date.now(),C.files=[...(C.files||[]).filter(we=>!oe.includes(we.name)),...F.map(we=>({name:we.name,type:we.type,path:we.data}))];const se=o.findIndex(we=>we.id===C.id);se>=0?o[se]=C:o.push(C);try{localStorage.setItem(Jc,JSON.stringify(o))}catch{throw new Error("browser storage is full (start the dev server to save files to the project)")}return C}const U=await fetch(Zc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...C,newFiles:F,removeFiles:oe})}),_e=await U.json().catch(()=>({}));if(!U.ok)throw new Error(_e.error||`server said ${U.status}`);const Y=o.findIndex(se=>se.id===_e.id);return Y>=0?o[Y]=_e:o.push(_e),_e}async function m(C){if(a||await fetch(`${Zc}/${encodeURIComponent(C)}`,{method:"DELETE"}),o=o.filter(F=>F.id!==C),a)try{localStorage.setItem(Jc,JSON.stringify(o))}catch{}}function p(C,F){let oe=null,U=.9;const _e=s(C,F);for(const Y of ka){if(s(Y.x,Y.z)!==_e)continue;const se=Y.id==="LOCK"?"LOCK":Y.id[0];let[we,be]=R2[se]||[1,1];(Y.rot||0)%180&&([we,be]=[be,we]);const Qe=Math.hypot(Math.max(0,Math.abs(C-Y.x)-we/2),Math.max(0,Math.abs(F-Y.z)-be/2));Qe<U&&(U=Qe,oe=Y.id==="LOCK"?"Lockers":`${Fp[se]} ${Y.id}`)}return oe}const v=C=>Math.round(C*100)/100,y=C=>/^image\/(jpeg|png|gif|webp|avif|svg\+xml|bmp)$/.test(C.type),x=C=>C.src||C.path,E=new nt;E.name="suggestion-marks",i.add(E);const S=new Zt(.07,16,12),R=new Dn(.008,.008,1,6),P=new Ln({color:"#222"}),M=new D(0,1,0),b={},N=(C,F=1)=>b[C+F]||(b[C+F]=new Ln({color:C,transparent:F<1,opacity:F,depthWrite:F===1,side:Ot}));function V(C,F){const oe=document.createElement("canvas");oe.width=oe.height=64;const U=oe.getContext("2d");U.fillStyle="#111",U.beginPath(),U.arc(32,32,28,0,Math.PI*2),U.fill(),U.strokeStyle=F,U.lineWidth=5,U.stroke(),U.fillStyle="#fff",U.font="bold 28px system-ui, sans-serif",U.textAlign="center",U.textBaseline="middle",U.fillText(String(C),32,34);const _e=new On(oe);_e.colorSpace=yt;const Y=new Rr(new ks({map:_e,depthTest:!1,transparent:!0}));return Y.scale.set(.22,.22,1),Y.renderOrder=10,Y}function H({x0:C,z0:F,x1:oe,z1:U},_e,Y){const se=Math.abs(oe-C),we=Math.abs(U-F),be=new ve(new ut(se,we),N(_e,.18));be.rotation.x=-Math.PI/2,be.position.set((C+oe)/2,.02,(F+U)/2),be.renderOrder=3;const Qe=[[C,F],[oe,F],[oe,U],[C,U]].map(([on,_t])=>new D(on,.025,_t)),zt=new lp(new Ht().setFromPoints(Qe),new Eh({color:_e}));Y.add(be,zt)}function $(C,F,oe,U,_e,Y){const se=new ve(R,P);se.scale.y=U,se.quaternion.setFromUnitVectors(M,oe),se.position.copy(F).addScaledVector(oe,U/2);const we=new ve(S,N(_e));we.position.copy(F).addScaledVector(oe,U);const be=V(Y,_e);be.position.copy(we.position).add(new D(0,.18,0)),C.add(se,we,be)}function j(){for(const C of[...E.children])E.remove(C),C.traverse(F=>{var oe,U,_e;(U=(oe=F.material)==null?void 0:oe.map)==null||U.dispose(),(F.isLine||((_e=F.geometry)==null?void 0:_e.type)==="PlaneGeometry")&&F.geometry.dispose()});for(const C of o){if(C.status==="done")continue;const F=new nt;F.userData.sid=C.id;const oe=Wn;C.area?(H(C.area,oe,F),$(F,new D((C.area.x0+C.area.x1)/2,0,(C.area.z0+C.area.z1)/2),M,1.1,oe,C.n)):$(F,new D(...C.point),new D(...C.normal||[0,1,0]).normalize(),.28,oe,C.n),E.add(F)}}const q=new nt;i.add(q);function ne(){for(const C of[...q.children])q.remove(C)}const B=document.createElement("style");B.textContent=`
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
  .sg-toast.show { opacity:1; }`,document.head.appendChild(B);const ue=document.createElement("div");ue.className="sg-modal sg-hidden",ue.innerHTML=`<div class="sg-card" role="dialog" aria-modal="true" aria-labelledby="sg-title">
    <h2 id="sg-title">New suggestion</h2>
    <label class="f" for="sg-section">Section</label>
    <input type="text" id="sg-section" list="sg-sections" placeholder="e.g. Long table L2, Reception, Cabin 1">
    <datalist id="sg-sections">${C2.map(C=>`<option value="${C}">`).join("")}</datalist>
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
  </div>`,document.body.appendChild(ue);const de=C=>ue.querySelector(C),Ee=de("#sg-text"),ze=de("#sg-section"),$e=de(".sg-drop"),Q=de("input[type=file]"),me=de(".sg-files"),ge=de(".sg-err"),pe=de(".sg-meta"),Ne=de("#sg-done"),ke=de(".sg-reply"),Te=document.createElement("div");Te.className="sg-list sg-hidden",Te.innerHTML='<header><b>Suggestions</b><button type="button" class="close">Close (L)</button></header><div class="sg-items"></div>',document.body.appendChild(Te);const We=Te.querySelector(".sg-items"),ae=document.createElement("div");ae.className="sg-toast",document.body.appendChild(ae);let xe;function O(C,F=2600){ae.textContent=C,ae.classList.add("show"),clearTimeout(xe),xe=setTimeout(()=>ae.classList.remove("show"),F)}const ce=C=>C.area?`Area x ${v(C.area.x0)}–${v(C.area.x1)} m, z ${v(C.area.z0)}–${v(C.area.z1)} m`:`Point x ${C.point[0]}, z ${C.point[2]}`;function Z(){if(We.innerHTML="",!o.length){We.innerHTML='<div class="sg-empty">No suggestions yet.<br>Aim the dot at something and press <b>C</b>, or press <b>X</b> on two floor corners to mark an area.</div>';return}for(const C of[...o].sort((F,oe)=>F.n-oe.n)){const F=document.createElement("div");F.className="sg-item",F.innerHTML=`<div class="sg-num ${C.status==="done"?"done":""}">${C.n}</div><div class="sg-body"><small></small><p></p><div class="sg-thumbs"></div></div>`;const oe=F.querySelector("small");oe.innerHTML=`<span class="sg-badge ${C.status==="done"?"done":""}">${C.status==="done"?"done":"open"}</span>`,oe.append(C.section||C.zone||""),F.querySelector("p").textContent=C.text,C.reply&&F.querySelector("p").after(Object.assign(document.createElement("div"),{className:"sg-reply-l",textContent:`Claude: ${C.reply}`}));const U=F.querySelector(".sg-thumbs");for(const Qe of C.files||[])y(Qe)?U.append(Object.assign(document.createElement("img"),{src:x(Qe),alt:Qe.name,title:Qe.name})):U.append(Object.assign(document.createElement("a"),{href:x(Qe),textContent:Qe.name,target:"_blank",download:Qe.name}));const _e=F.querySelector(".sg-body"),Y=document.createElement("div");Y.className="sg-row",Y.style.marginTop="2px";const se=Object.assign(document.createElement("button"),{type:"button",textContent:"Go there"});se.onclick=()=>Ae(C);const we=Object.assign(document.createElement("button"),{type:"button",textContent:"Open"});we.onclick=()=>{Te.classList.add("sg-hidden"),G(C)};const be=Object.assign(document.createElement("button"),{type:"button",textContent:"Delete"});be.style.color="#ff8a7a",fe(be,()=>le(C)),Y.append(se,we,be),_e.appendChild(Y),We.appendChild(F)}}function he(){j(),Z()}function ie(){me.innerHTML="",l.forEach((C,F)=>{const oe=document.createElement("div");oe.className="sg-file",y(C)?oe.append(Object.assign(document.createElement("img"),{src:x(C),alt:C.name})):oe.append(Object.assign(document.createElement("div"),{className:"doc",textContent:(C.name.split(".").pop()||"file").slice(0,5).toUpperCase()})),oe.append(Object.assign(document.createElement("span"),{textContent:C.name,title:C.name}));const U=Object.assign(document.createElement("button"),{type:"button",textContent:"×"});U.setAttribute("aria-label",`Remove ${C.name}`),U.onclick=()=>{C.data||h.push(C.name),l.splice(F,1),ie()},oe.append(U),me.append(oe)})}const Re=C=>new Promise((F,oe)=>{const U=new FileReader;U.onload=()=>F(U.result),U.onerror=oe,U.readAsDataURL(C)});async function Me(C){ge.textContent="";for(const F of C){let oe=F.name||`pasted-${Date.now()}.png`,U=F.type||"application/octet-stream",_e;if(/^image\/(jpeg|png|webp)$/.test(U)&&F.size>15e5)try{const se=await createImageBitmap(F),we=Math.min(1,2e3/Math.max(se.width,se.height)),be=document.createElement("canvas");be.width=Math.round(se.width*we),be.height=Math.round(se.height*we),be.getContext("2d").drawImage(se,0,0,be.width,be.height),_e=be.toDataURL("image/jpeg",.85),U="image/jpeg",oe=oe.replace(/\.\w+$/,"")+".jpg"}catch{}if(_e=_e||await Re(F),l.reduce((se,we)=>{var be;return se+(((be=we.data)==null?void 0:be.length)||0)},0)+_e.length>P2){ge.textContent=`${oe} is too big to add (keep new files under ~25 MB per save).`;continue}l.push({name:oe,type:U,data:_e,src:_e})}ie()}$e.onclick=()=>Q.click(),$e.onkeydown=C=>{(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),Q.click())},Q.onchange=()=>{Me([...Q.files]),Q.value=""},$e.ondragover=C=>{C.preventDefault(),$e.classList.add("over")},$e.ondragleave=()=>$e.classList.remove("over"),$e.ondrop=C=>{C.preventDefault(),$e.classList.remove("over"),Me([...C.dataTransfer.files])},ue.addEventListener("paste",C=>{const F=[...C.clipboardData.files];F.length&&(C.preventDefault(),Me(F))}),Ee.oninput=()=>{ge.textContent=""};const I=()=>!ue.classList.contains("sg-hidden");let A=()=>{};function G(C){c=C,l=(C.files||[]).map(F=>({...F})),h=[],de("#sg-title").textContent=C.id?`Suggestion ${C.n}`:C.area?"New suggestion for this area":"New suggestion",ze.value=C.section||[C.near,C.zone].filter(Boolean).join(" · "),pe.textContent=ce(C)+(C.folder?` · saved in suggestions/${C.folder}/`:""),Ee.value=C.text||"",Ne.checked=C.status==="done",de(".sg-check").classList.toggle("sg-hidden",!C.id),ke.textContent=C.reply?`Claude: ${C.reply}`:"",ke.classList.toggle("sg-hidden",!C.reply),de(".del").classList.toggle("sg-hidden",!C.id),ge.textContent="",ie(),u=!!document.pointerLockElement,ue.classList.remove("sg-hidden"),t.state.paused=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>Ee.focus(),30)}function re(){if(ue.classList.add("sg-hidden"),c=null,l=[],h=[],ne(),t.state.paused=!1,u)try{const C=r.domElement.requestPointerLock();C!=null&&C.catch&&C.catch(()=>A())}catch{A()}}de(".cancel").onclick=re,de(".pri").onclick=async()=>{const C=Ee.value.trim();if(!C){ge.textContent="Write what needs to change first.",Ee.focus();return}const F={...c,text:C,section:ze.value.trim(),status:Ne.checked?"done":"open",updated:Date.now()};delete F.near,F.id||(F.id=`s${Date.now().toString(36)}`);const oe=l.filter(U=>U.data).map(({name:U,type:_e,data:Y})=>({name:U,type:_e,data:Y}));de(".pri").disabled=!0,de(".pri").textContent="Saving…";try{const U=await _(F,oe,h);he(),O(a?`Suggestion ${U.n} saved in this browser`:`Suggestion ${U.n} saved to suggestions/${U.folder}/`),re()}catch(U){ge.textContent=`Could not save: ${U.message}`}finally{de(".pri").disabled=!1,de(".pri").textContent="Save"}};function fe(C,F){let oe=0;C.onclick=async()=>{if(!oe){C.textContent="Click again to delete",C.style.borderColor="#ff8a7a",oe=setTimeout(()=>{oe=0,C.textContent="Delete",C.style.borderColor=""},4e3);return}clearTimeout(oe),oe=0,C.disabled=!0;try{await F()}finally{C.disabled=!1,C.textContent="Delete",C.style.borderColor=""}}}async function le(C){await m(C.id),he(),O(`Suggestion ${C.n} deleted`)}fe(de(".del"),async()=>{if(c!=null&&c.id){const C=c;re(),await le(C)}}),Te.querySelector(".close").onclick=()=>Le(!1);function Le(C=Te.classList.contains("sg-hidden")){Te.classList.toggle("sg-hidden",!C),C&&(Z(),document.pointerLockElement&&document.exitPointerLock())}function Ae(C){C.view&&(t.pos.set(C.view.x,0,C.view.z),e.position.set(C.view.x,e.position.y,C.view.z),e.quaternion.setFromEuler(new En(C.view.pitch,C.view.yaw,0,"YXZ"))),Le(!1),O(`${C.n}: ${C.text.slice(0,70)}${C.text.length>70?"…":""}`)}const Pe=new Ty;Pe.far=40;const st=new ye(0,0);function z(){Pe.setFromCamera(st,e);const C=Pe.intersectObjects([E,n],!0).find(U=>U.object.visible&&!U.object.isLine);if(!C)return null;let F=C.object;for(;F&&!F.userData.sid&&F!==i;)F=F.parent;if(F!=null&&F.userData.sid)return{mark:o.find(U=>U.id===F.userData.sid),point:C.point};const oe=C.face?C.face.normal.clone().transformDirection(C.object.matrixWorld):M.clone();return oe.dot(Pe.ray.direction)>0&&oe.negate(),{point:C.point,normal:oe,target:Se(A2(C),C.point,oe)}}function Se(C,F,oe){return C==="Wall"||C==="Glass wall"?F.x<.35?`Window ${C.toLowerCase()}`:F.x>9.8&&F.z>9.5?"East wall":F.z>18.4?"Back wall":`${C} (${s(F.x,F.z)})`:C||(oe.y>.7&&F.y<.1?"Floor":oe.y<-.7?"Ceiling":"")}function Ie(){const C=new En().setFromQuaternion(e.quaternion,"YXZ");return{x:v(t.pos.x),z:v(t.pos.z),yaw:v(C.y),pitch:v(C.x)}}function Ve(){const C=z();if(!C){O("Aim the dot at something first");return}if(C.mark){G(C.mark);return}const F=C.point;G({point:[v(F.x),v(F.y),v(F.z)],normal:[v(C.normal.x),v(C.normal.y),v(C.normal.z)],zone:s(F.x,F.z),near:C.target||p(F.x,F.z),target:C.target,view:Ie()})}function k(){const C=z();if(!C){O("Aim the dot at the floor first");return}const{x:F,z:oe}=C.point;if(!d){d={x:F,z:oe},ne(),$(q,new D(F,0,oe),M,.5,Wn,"1"),O("Corner 1 set. Aim at the opposite corner and press X (Esc cancels).",4e3);return}const U={x0:v(Math.min(d.x,F)),z0:v(Math.min(d.z,oe)),x1:v(Math.max(d.x,F)),z1:v(Math.max(d.z,oe))};if(d=null,ne(),U.x1-U.x0<.2||U.z1-U.z0<.2){O("That area is too small: pick two corners further apart");return}H(U,Wn,q);const _e=(U.x0+U.x1)/2,Y=(U.z0+U.z1)/2;G({area:U,point:[v(_e),0,v(Y)],normal:[0,1,0],zone:s(_e,Y),near:p(_e,Y),view:Ie()})}return addEventListener("keydown",C=>{if(I()){if(!f)return;C.code==="Escape"&&(C.preventDefault(),re()),C.code==="Enter"&&(C.metaKey||C.ctrlKey)&&de(".pri").click();return}f&&(/^(INPUT|TEXTAREA|SELECT)$/.test(C.target.tagName)||(C.code==="Escape"&&d&&(d=null,ne(),O("Area cancelled")),C.code==="KeyC"&&Ve(),C.code==="KeyX"&&k(),C.code==="KeyL"&&Le()))}),g(),{isOpen:()=>I()||!Te.classList.contains("sg-hidden"),setEnabled(C){f=C,E.visible=C,C||(I()&&re(),Le(!1),d=null,ne())},onResumeFailed(C){A=C}}}const ld=1.8,hd=2.2;function ud(i,e,t,n=2.4){const s=new nt;i.add(s);const r=new ve(new en(.012,n-.04,e-.02),w.glass);r.position.set(0,n/2,t*e/2),r.renderOrder=2,s.add(r),T(s,w.chrome,.02,.1,e-.04,0,.05,t*e/2),T(s,w.chrome,.02,.06,.12,0,n-.06,t*.08),T(s,w.chrome,.02,.06,.12,0,.12,t*.08);const o=t*(e-.12);for(const a of[-1,1]){T(s,w.chrome,.028,1,.028,a*.07,1.05,o);for(const c of[.62,1.48])T(s,w.chrome,.12,.02,.02,a*.035,c,o)}return t>0&&T(s,w.blackMatte,.03,.14,.2,0,1.05,t*(e-.02)),s}let Qc=null;function I2(){if(Qc)return Qc;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d");return e.fillStyle="rgba(15,18,24,.8)",e.strokeStyle="#fff",e.lineWidth=8,e.beginPath(),e.arc(64,64,56,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.font="bold 72px system-ui, sans-serif",e.fillText("F",64,68),Qc=new On(i)}function fd(i,e,t,n){const s=new Rr(new ks({map:I2(),depthTest:!1,transparent:!0}));return s.scale.set(.11,.11,1),s.position.set(e,t,n),s.renderOrder=20,s.visible=!1,i.add(s),s}function D2({scene:i,player:e,camera:t}){const n=[],s=(p,v,y)=>{const x=(v-p)/2,E=new nt;i.add(E);const S=new nt;S.position.set(0,0,p),E.add(S);const R=new nt;R.position.set(0,0,v),E.add(R);const P=fd(S,.1,1.25,x-.12);ud(S,x,1),ud(R,x,-1);const M={minX:-.08,maxX:.08,minZ:p,maxZ:v};os.push(M),n.push({name:y,x:0,z:(p+v)/2,t:0,target:0,block:M,marker:P,apply(b){const N=b*Math.PI/2*.95;S.rotation.y=N,R.rotation.y=-N}})};s(4.9,6.5,"balcony door"),s(oh[0],oh[1],"meeting room door");for(const p of Za){i.add(p.leaf),os.push(p.block);const v=fd(p.leaf,p.handle[0],p.handle[1],p.handle[2]);n.push({name:p.name,x:p.x,z:p.z,t:0,target:0,block:p.block,marker:v,apply(y){p.leaf.rotation.y=p.closed+(p.open-p.closed)*y}})}const r={visible:!1,material:{opacity:1}},o=Oa.map(p=>(i.add(p.leaf),{name:"locker door",x:p.center.x,z:p.center.z,center:p.center,t:0,target:0,block:null,marker:r,apply(v){p.leaf.rotation.y=p.closed+(p.open-p.closed)*v}}));n.push(...o);const a=new D,c=new D,l=()=>{t.getWorldDirection(c);let p=null,v=.96;for(const y of o){if(a.copy(y.center).sub(t.position),a.length()>1.8)continue;const E=a.normalize().dot(c);E>v&&(v=E,p=y)}return p},h=()=>{var x;const p=l();if(p)return p;let v=null,y=ld;for(const E of n){if(E.center||(x=E.locked)!=null&&x.call(E))continue;const S=Math.hypot(e.pos.x-E.x,e.pos.z-E.z);S<y&&(y=S,v=E)}return v},u=p=>{if(p.target=p.target?0:1,p.target&&p.block){const v=os.indexOf(p.block);v>=0&&os.splice(v,1)}};addEventListener("keydown",p=>{if(p.code!=="KeyF"||e.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(p.target.tagName))return;const v=h();v&&u(v)});let f=0,d=0;addEventListener("mousedown",p=>{f=p.clientX,d=p.clientY}),addEventListener("click",p=>{if(p.button!==0||e.state.paused||!e.controls.isLocked&&!e.state.dragMode||Math.hypot(p.clientX-f,p.clientY-d)>5&&!e.controls.isLocked)return;const v=l();v&&u(v)});function g(p){var y,x;const v=h();for(const E of n){const S=Math.hypot(e.pos.x-E.x,e.pos.z-E.z);E.marker.visible=S<4.5&&(!((y=E.locked)!=null&&y.call(E))||E.askToOpen),E.marker.material.opacity=E===v||E.askToOpen&&((x=E.locked)!=null&&x.call(E))&&S<ld?1:.55}for(const E of n)E.t!==E.target&&(E.t=E.target>E.t?Math.min(1,E.t+p*hd):Math.max(0,E.t-p*hd),E.apply(E.t*E.t*(3-2*E.t)),E.block&&E.t===0&&!os.includes(E.block)&&os.push(E.block))}function _(){const p=h();return p?`${p.center?"F / click":"F"} ${p.target?"close":"open"} ${p.name.toLowerCase()}`:""}return{update:g,prompt:_,byName:p=>n.find(v=>v.name===p),toggle:u}}const N2=1,el=8,tl=(7.6+8.65)/2;function dd(i){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=i?"#3ddc84":"#ff5a4f";t.fillStyle="rgba(12,14,18,.85)",t.strokeStyle=n,t.lineWidth=7,t.beginPath(),t.arc(64,64,58,0,Math.PI*2),t.fill(),t.stroke(),t.lineWidth=9,t.lineCap="round",t.beginPath(),i?(t.arc(78,50,17,Math.PI,0),t.lineTo(95,58)):(t.moveTo(47,62),t.lineTo(47,50),t.arc(64,50,17,Math.PI,0),t.lineTo(81,62)),t.stroke(),t.fillStyle=n,t.beginPath(),t.roundRect(36,60,56,40,7),t.fill(),t.fillStyle="rgba(12,14,18,.9)",t.beginPath(),t.arc(64,76,6,0,Math.PI*2),t.fill(),t.fillRect(61,78,6,12);const s=new On(e);return s.colorSpace=yt,s}function U2(){const i=new Et({color:"#d7a07c",roughness:.75}),e=new Et({color:"#27324a",roughness:.9}),t=new nt,n=(o,a,c,l,h,u,f,d=0,g=0)=>{const _=new ve(new en(a,c,l),o);_.position.set(h,u,f),_.rotation.set(d,g,0),t.add(_)};n(i,.018,.018,.075,0,0,-.037),n(i,.084,.026,.09,.03,-.004,-.118);for(const[o,a]of[.023,.044,.064].entries())n(i,.019,.026,.034-o*.003,a,-.012,-.072);n(i,.02,.02,.055,-.016,-.012,-.11,0,.6);const s=new ve(new Dn(.046,.05,.34,14),e);s.rotation.x=Math.PI/2,s.position.set(.03,-.006,-.33),t.add(s);const r=new ve(new Dn(.041,.041,.03,14),i);return r.rotation.x=Math.PI/2,r.position.set(.03,-.006,-.165),t.add(r),t.traverse(o=>{o.isMesh&&(o.castShadow=!1)}),t.visible=!1,t}const O2=`
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
`;function k2({scene:i,player:e,camera:t,doors:n}){const s=n.byName("entrance door"),r=()=>e.pos.x>Pt,o=dd(!1),a=dd(!0),c=new Rr(new ks({map:o,transparent:!0}));c.scale.set(.13,.13,1),c.position.set(_n.x+.06,_n.y+.24,_n.z),c.renderOrder=20,i.add(c);const l=new Et({color:"#ff3b30",emissive:"#ff3b30",emissiveIntensity:1.6}),h=new ve(new en(.006,.012,.03),l);h.position.set(_n.x+.018,_n.y+.055,_n.z),i.add(h);const u=document.createElement("canvas");u.width=512,u.height=150;const f=u.getContext("2d"),d=new On(u);d.colorSpace=yt;const g=new Rr(new ks({map:d,transparent:!0}));g.scale.set(.4,.4*150/512,1),g.center.set(0,.5),g.position.set(_n.x+.06,_n.y+.24,_n.z-.09),g.renderOrder=20,i.add(g);let _="";const m=(ge,pe,Ne,ke)=>{const Te=`${ge}|${pe}|${Math.round(Ne*40)}|${ke}`;Te!==_&&(_=Te,f.clearRect(0,0,512,150),f.fillStyle="rgba(0,0,0,.86)",f.beginPath(),f.roundRect(4,4,504,142,16),f.fill(),f.fillStyle="#fff",f.font="600 46px system-ui, sans-serif",f.textBaseline="alphabetic",f.fillText(ge,30,66),f.fillStyle="rgba(255,255,255,.65)",f.font="400 30px system-ui, sans-serif",f.fillText(pe,30,108),f.fillStyle="rgba(255,255,255,.18)",f.fillRect(30,124,452,8),f.fillStyle=ke,f.fillRect(30,124,452*Math.max(0,Math.min(1,Ne)),8),d.needsUpdate=!0)},p=U2();i.add(p);const v=new D(_n.x+.004,_n.y+.02,_n.z),y=new D,x=new D,E=new D;let S=0;const R=document.createElement("style");R.textContent=O2,document.head.appendChild(R);const P=document.createElement("div");P.id="unlockbox";const M=2*Math.PI*18;P.innerHTML=`<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="4"/>
    <circle class="ring" cx="22" cy="22" r="18" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-dasharray="${M}" stroke-dashoffset="${M}"/>
    <text x="22" y="27.5" text-anchor="middle" fill="#fff" font-family="system-ui, sans-serif" font-weight="700" font-size="15">F</text></svg>
    <div class="txt"></div>`,document.body.appendChild(P);const b=P.querySelector(".ring"),N=P.querySelector("text"),V=P.querySelector(".txt");let H="";const $=(ge,pe,Ne,ke,Te)=>{P.classList.toggle("show",ge),ge&&(pe!==H&&(V.innerHTML=pe,H=pe),b.setAttribute("stroke-dashoffset",String(M*(1-Ne))),b.setAttribute("stroke",ke),N.textContent=Te)};let j="locked",q=0,ne=!1,B=0;const ue=()=>r()&&Math.hypot(e.pos.x-_n.x,e.pos.z-_n.z)<.9,de=()=>r()&&Math.hypot(e.pos.x-Pt,e.pos.z-tl)<1.4,Ee=()=>e.pos.x>Pt-.6&&e.pos.x<Pt+.6&&Math.abs(e.pos.z-tl)<.75;s.locked=()=>j!=="open"&&r();const ze=()=>{j="open",B=el,ne=!1,q=0,s.target||n.toggle(s),c.material.map=a,c.material.needsUpdate=!0},$e=ge=>{var pe;return/^(INPUT|TEXTAREA|SELECT)$/.test((pe=ge.target)==null?void 0:pe.tagName)};addEventListener("keydown",ge=>{ge.code!=="KeyF"||ge.repeat||e.state.paused||$e(ge)||j==="locked"&&ue()&&(ne=!0)}),addEventListener("keyup",ge=>{ge.code==="KeyF"&&(ne=!1)}),addEventListener("blur",()=>{ne=!1});function Q(ge){const pe=ue();if((!pe||j!=="locked")&&(ne=!1),ne?(q+=ge/N2,q>=1&&ze()):q=Math.max(0,q-ge*2.5),j==="open"&&(B-=ge,B<=0&&!Ee()&&(j="closing")),j==="closing"&&(s.target&&n.toggle(s),s.t===0&&(j="locked",c.material.map=o,c.material.needsUpdate=!0)),S=(ne?1:0)?Math.min(1,S+ge/.3):Math.max(0,S-ge/.35),p.visible=S>0,p.visible){y.set(.2,-.34,-.32),t.localToWorld(y),t.position.distanceTo(v)<2.4&&r()?x.copy(v):(t.getWorldDirection(E),x.copy(t.position).addScaledVector(E,.6)),p.position.copy(y),p.lookAt(x);const O=S*S*(3-2*S),ce=ne&&S===1?.012*(.5+.5*Math.sin(performance.now()/120)):0;p.position.lerpVectors(y,x,O),p.translateZ(ce)}const Te=j==="open"?"#34d058":ne&&S===1?Math.floor(performance.now()/150)%2?"#3aa0ff":"#0b2a55":"#ff3b30";l.color.set(Te),l.emissive.set(Te);const We=Math.hypot(e.pos.x-_n.x,e.pos.z-_n.z),ae=r()&&(We<1.8||de());if(c.visible=g.visible=ae,ae)if(j==="open"){const O=Math.max(0,Math.ceil(B));m("Door unlocked",B>0?`Locks again in ${O}s`:"Clear the doorway to lock",Math.max(0,B)/el,"#34d058")}else j==="closing"?m("Locking…","Door closing",0,"#ff5a4f"):pe?m(q>0?"Unlocking…":"Hold F to unlock",q>0?"Keep holding F":"Place your finger",q,"#fff"):m("Locked","Use fingerprint to unlock",1,"#ff5a4f");const xe=pe||j!=="locked"&&Math.hypot(e.pos.x-Pt,e.pos.z-tl)<5;if(j==="locked")!pe&&de()?$(!0,"Use fingerprint to unlock<small>Reader on the wall beside the door</small>",1,"#ff5a4f","🔒"):$(pe,q>0?"Unlocking…<small>Keep holding <kbd>F</kbd></small>":"Press and hold <kbd>F</kbd> to unlock<small>Pixbit entrance</small>",q,"#fff","F");else if(j==="open"){const O=Math.max(0,Math.ceil(B));$(xe,B>0?`Door unlocked<small>Locks again in ${O}s</small>`:"Door unlocked<small>Clear the doorway to lock</small>",Math.max(0,B)/el,"#34d058",String(O))}else $(xe,"Locking…<small>Door closing</small>",0,"#ff5a4f","🔒")}function me(){return j==="locked"&&ue()?"F hold to unlock door":""}return{update:Q,prompt:me}}const F2=`
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
`;let io=null;function B2(i){try{io||(io=new(window.AudioContext||window.webkitAudioContext));const e=io.currentTime,t=i?[[392,0],[523,.12],[659,.24],[784,.36],[1047,.5]]:[[160,0],[120,.22]];for(const[n,s]of t){const r=io.createOscillator(),o=io.createGain();r.type=i?"triangle":"sawtooth",r.frequency.value=n;const a=i?s===.5?.7:.16:.3;o.gain.setValueAtTime(1e-4,e+s),o.gain.exponentialRampToValueAtTime(i?.18:.12,e+s+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+s+a),r.connect(o).connect(io.destination),r.start(e+s),r.stop(e+s+a+.05)}}catch{}}function z2({scene:i,player:e,doors:t}){const n=t.byName("ladies toilet");if(!n)return{update(){},prompt:()=>""};const s=new $a("#fff4ea",6,4.5,1.6);s.position.set(n.x+1.2,2.7,n.z+.5),i.add(s);const r=document.createElement("style");r.textContent=F2,document.head.appendChild(r);const o=document.createElement("div");o.id="ladiesq",o.innerHTML='<div class="band"></div><div class="big"></div><div class="sub"></div>',document.body.appendChild(o);const a=o.querySelector(".big"),c=o.querySelector(".sub");let l=!1,h=!1,u=0,f=!1;n.locked=()=>!l,n.askToOpen=!0;const d=()=>Math.hypot(e.pos.x-n.x,e.pos.z-n.z)<1.8&&e.pos.x<n.x,g=(E,S,R,P)=>{a.textContent=E,a.classList.toggle("red",S),c.innerHTML=R,o.classList.remove("show"),o.offsetWidth,o.classList.add("show"),u=P?performance.now()+P:0},_=()=>{o.classList.remove("show"),h=!1,u=0},m=()=>{h=!0,g("Are u gay?",!1,'<button data-a="y"><kbd>Y</kbd> Yes</button><button data-a="n"><kbd>N</kbd> No</button>',0)},p=E=>{h&&(h=!1,E?(l=!0,n.target||t.toggle(n),g("Respect +",!1,"<span>Welcome in</span>",2200)):g("Access denied",!0,"<span>Ladies only</span>",2e3),B2(E))};c.addEventListener("click",E=>{const S=E.target.closest("button");S&&p(S.dataset.a==="y")});const v=E=>{var S;return/^(INPUT|TEXTAREA|SELECT)$/.test((S=E.target)==null?void 0:S.tagName)};addEventListener("keydown",E=>{if(!(E.repeat||e.state.paused||v(E))){if(h){E.code==="KeyY"?p(!0):(E.code==="KeyN"||E.code==="Escape")&&p(!1);return}E.code==="KeyF"&&!l&&d()&&m()}});function y(){h&&!d()&&_(),u&&performance.now()>u&&_(),n.t>0&&(f=!0),l&&f&&n.t===0&&!n.target&&(l=!1,f=!1)}function x(){return!l&&!h&&d()?"F open ladies toilet":""}return{update:y,prompt:x}}const H2=3.4,Xn=640,Bi=360,Rn=20,nl=Xn/Rn,il=(Bi-40)/Rn,so=[{name:"Snake",ready:!0},{name:"Pong",ready:!1},{name:"Tetris",ready:!1},{name:"Car Race",ready:!1}];function V2({scene:i,player:e}){const t=document.createElement("canvas");t.width=Xn,t.height=Bi;const n=t.getContext("2d"),s=new On(t);s.colorSpace=yt;const r=new ve(new ut(rs.w,rs.h),new Ln({map:s,toneMapped:!1}));r.position.set(rs.x+.003,rs.y,rs.z),r.rotation.y=Math.PI/2,r.visible=!1,i.add(r);const o=document.createElement("div");Object.assign(o.style,{position:"fixed",inset:"0",background:"#000",display:"none",zIndex:"20",alignItems:"center",justifyContent:"center"}),document.body.appendChild(o);let a="off",c=0,l=!1,h,u,f,d,g,_=0,m,p=0,v=.11;const y=()=>Math.hypot(e.pos.x-rs.x,e.pos.z-rs.z)<H2&&e.pos.x>0&&e.pos.z>22.8;function x(B){l=B,B?(o.appendChild(t),Object.assign(t.style,{width:"min(100vw, 177.78vh)",height:"auto",imageRendering:"pixelated"}),o.style.display="flex"):(o.style.display="none",t.parentNode&&t.parentNode.removeChild(t))}function E(){a="menu",c=0,r.visible=!0,e.state.paused=!0,$()}function S(){a="off",r.visible=!1,e.state.paused=!1,x(!1)}function R(){h=[{x:8,y:8},{x:7,y:8},{x:6,y:8}],u={x:1,y:0},f=u,g=0,m=!1,p=0,v=.11,P(),a="snake"}function P(){do d={x:Math.floor(Math.random()*nl),y:Math.floor(Math.random()*il)};while(h.some(B=>B.x===d.x&&B.y===d.y))}function M(){u=f;const B={x:h[0].x+u.x,y:h[0].y+u.y};if(B.x<0||B.y<0||B.x>=nl||B.y>=il||h.some(ue=>ue.x===B.x&&ue.y===B.y)){m=!0,_=Math.max(_,g);return}h.unshift(B),B.x===d.x&&B.y===d.y?(g++,v=Math.max(.06,v-.003),P()):h.pop()}const b=(B,ue=600)=>`${ue} ${B}px "Avenir Next", "Helvetica Neue", Arial, sans-serif`;function N(B){n.fillStyle="rgba(255,255,255,.55)",n.font=b(14,500),n.textAlign="center",n.fillText(B,Xn/2,Bi-14)}function V(){const B=n.createLinearGradient(0,0,Xn,Bi);B.addColorStop(0,"#1a1f3a"),B.addColorStop(1,"#3a1d4f"),n.fillStyle=B,n.fillRect(0,0,Xn,Bi),n.fillStyle="#fff",n.font=b(30,700),n.textAlign="left",n.fillText("Pixbit Arcade",40,56),n.fillStyle="#b46cff",n.fillRect(40,68,120,3),so.forEach((ue,de)=>{const Ee=104+de*50,ze=de===c;n.fillStyle=ze?"rgba(255,255,255,.14)":"rgba(255,255,255,.04)",n.fillRect(40,Ee,Xn-80,40),ze&&(n.fillStyle="#5fe3ff",n.fillRect(40,Ee,5,40)),n.fillStyle=ue.ready?"#fff":"rgba(255,255,255,.35)",n.font=b(20,ze?700:500),n.textAlign="left",n.fillText(ue.name,62,Ee+27),n.font=b(14,500),n.textAlign="right",n.fillStyle=ue.ready?"#7dff9a":"rgba(255,255,255,.35)",n.fillText(ue.ready?"PLAY":"coming soon",Xn-58,Ee+26)}),N("↑ ↓ choose · Enter play · F full screen · E turn TV off")}function H(){n.fillStyle="#0d1410",n.fillRect(0,0,Xn,Bi),n.fillStyle="#15241a",n.fillRect(0,0,Xn,40),n.fillStyle="#7dff9a",n.font=b(18,700),n.textAlign="left",n.fillText(`SNAKE   score ${g}`,16,27),n.textAlign="right",n.fillStyle="rgba(255,255,255,.5)",n.font=b(13,500),n.fillText(`best ${_} · arrows/WASD · F full screen · Backspace menu`,Xn-14,26);const B=40;n.fillStyle="rgba(255,255,255,.03)";for(let ue=0;ue<nl;ue++)for(let de=0;de<il;de++)(ue+de)%2&&n.fillRect(ue*Rn,B+de*Rn,Rn,Rn);n.fillStyle="#ff4f6d",n.beginPath(),n.arc(d.x*Rn+Rn/2,B+d.y*Rn+Rn/2,Rn/2-3,0,Math.PI*2),n.fill(),h.forEach((ue,de)=>{n.fillStyle=de===0?"#c8ffd4":`hsl(${135-Math.min(de,30)}, 80%, ${55-Math.min(de,20)}%)`,n.fillRect(ue.x*Rn+1,B+ue.y*Rn+1,Rn-2,Rn-2)}),m&&(n.fillStyle="rgba(0,0,0,.6)",n.fillRect(0,0,Xn,Bi),n.fillStyle="#fff",n.textAlign="center",n.font=b(40,800),n.fillText("GAME OVER",Xn/2,Bi/2-14),n.font=b(18,500),n.fillText(`score ${g} · best ${_}`,Xn/2,Bi/2+20),N("Enter play again · Backspace menu"))}function $(){a==="menu"?V():a==="snake"&&H(),s.needsUpdate=!0}const j={ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1],ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0]};addEventListener("keydown",B=>{if(!/^(INPUT|TEXTAREA|SELECT)$/.test(B.target.tagName)){if(a==="off"){B.code==="KeyE"&&y()&&!e.state.paused&&(E(),B.stopImmediatePropagation());return}if(B.stopImmediatePropagation(),B.code!=="Escape"&&B.preventDefault(),B.code==="KeyF"){x(!l);return}if(a==="menu"){if((B.code==="ArrowUp"||B.code==="KeyW")&&(c=(c+so.length-1)%so.length),(B.code==="ArrowDown"||B.code==="KeyS")&&(c=(c+1)%so.length),(B.code==="Enter"||B.code==="Space")&&so[c].ready&&R(),B.code==="KeyE"||B.code==="Backspace"){S();return}}else if(a==="snake"){const ue=j[B.code];ue&&!m&&!(ue[0]===-u.x&&ue[1]===-u.y)&&(f={x:ue[0],y:ue[1]}),m&&(B.code==="Enter"||B.code==="Space")&&R(),B.code==="Backspace"&&(a="menu")}$()}},!0);function q(B){a!=="snake"||m||(p+=Math.min(B,v),p>=v&&(p-=v,M(),$()))}function ne(){return a!=="off"?a==="menu"?"TV on":"playing snake":y()?"E play TV games":""}return{update:q,prompt:ne,isOn:()=>a!=="off"}}const G2=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0,ro=i=>`<svg viewBox="0 0 24 24">${i}</svg>`,sl={jump:ro('<path d="M12 19V6"/><path d="M6 11l6-6 6 6"/><path d="M5 21h14"/>'),doorOpen:ro('<path d="M4 21h16"/><path d="M6 21V3h9v2"/><path d="M15 21V5l-5 1.5V21"/><path d="M11.8 13h.01"/><path d="M18 9l2 2-2 2"/>'),doorClose:ro('<path d="M4 21h16"/><path d="M6 21V3h12v18"/><path d="M15 12h.01"/>'),rotate:ro('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),tv:ro('<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/><path d="M10 9l4 2-4 2z"/>')};async function W2(){var i,e,t,n;try{const s=document.documentElement;document.fullscreenElement||await(((i=s.requestFullscreen)==null?void 0:i.call(s,{navigationUI:"hide"}))??((e=s.webkitRequestFullscreen)==null?void 0:e.call(s)))}catch{}try{await((n=(t=screen.orientation)==null?void 0:t.lock)==null?void 0:n.call(t,"landscape"))}catch{}}function X2({player:i,camera:e}){const{touch:t}=i,n=document.createElement("div");n.id="touch",n.innerHTML=`
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
  `,document.head.appendChild(s),document.body.appendChild(n);const r=n.querySelector(".tj-base"),o=n.querySelector(".tj-knob"),a=55;let c=null,l=0,h=0,u=null,f=0,d=0;const g=new En(0,0,0,"YXZ");r.style.display="none";const _=S=>!!(S.closest&&S.closest(".tb"));n.addEventListener("touchstart",S=>{for(const R of S.changedTouches)_(R.target)||(R.clientX<innerWidth/2&&c===null?(c=R.identifier,l=R.clientX,h=R.clientY,r.style.left=l+"px",r.style.top=h+"px",r.style.display="block",o.style.transform="translate(0,0)"):R.clientX>=innerWidth/2&&u===null&&(u=R.identifier,f=R.clientX,d=R.clientY));_(S.target)||S.preventDefault()},{passive:!1}),n.addEventListener("touchmove",S=>{for(const R of S.changedTouches)if(R.identifier===c){let P=R.clientX-l,M=R.clientY-h;const b=Math.hypot(P,M);b>a&&(P*=a/b,M*=a/b),o.style.transform=`translate(${P}px, ${M}px)`,t.x=P/a,t.y=-M/a,t.run=b>a*1.15}else R.identifier===u&&!i.state.paused&&(g.setFromQuaternion(e.quaternion),g.y-=(R.clientX-f)*.006,g.x=Math.max(-1.45,Math.min(1.45,g.x-(R.clientY-d)*.006)),e.quaternion.setFromEuler(g),f=R.clientX,d=R.clientY);S.preventDefault()},{passive:!1});const m=S=>{for(const R of S.changedTouches)R.identifier===c&&(c=null,t.x=t.y=0,t.run=!1,r.style.display="none"),R.identifier===u&&(u=null)};n.addEventListener("touchend",m),n.addEventListener("touchcancel",m);const p=(S,R)=>{const P=n.querySelector(S);P.addEventListener("touchstart",M=>{M.preventDefault(),M.stopPropagation(),R()},{passive:!1}),P.addEventListener("click",M=>M.preventDefault())};p(".tb-jump",()=>i.jump());const v=n.querySelector(".tb-act");let y=null,x="",E=null;p(".tb-act",()=>{y&&(E=y,dispatchEvent(new KeyboardEvent("keydown",{code:y,bubbles:!0})))});for(const S of["touchend","touchcancel"])v.addEventListener(S,()=>{E&&(dispatchEvent(new KeyboardEvent("keyup",{code:E,bubbles:!0})),E=null)});return{show(S){n.classList.toggle("off",!S),S&&W2()},setAction(S){let R="",P=null;/^F (open|close|collect|hold)/.test(S)?(P="KeyF",R=S.startsWith("F close")?"doorClose":"doorOpen"):S&&(P="KeyE",R="tv"),y=P,v.classList.toggle("off",!P),R!==x&&(v.innerHTML=R?sl[R]:"",v.setAttribute("aria-label",S),x=R)}}}const pd="pixbit-gamemode",rl={free:'<path d="M8 21l3-6 3 3v3"/><path d="M11 15l1-5-3 2-1 3"/><path d="M12 10l3 2h3"/><circle cx="13.5" cy="5" r="2"/>',hunt:'<circle cx="6.5" cy="15.5" r="3.5"/><circle cx="17.5" cy="15.5" r="3.5"/><path d="M10 15h4M5 12l2-7h3v10M19 12l-2-7h-3v10"/>',online:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',play:'<path d="M7 4l13 8-13 8z"/>'};function q2({list:i}){const e=[{id:"free",name:"Free Walk",desc:"Just explore the office",start(){},stop(){},update(){}}];let t=e[0];function n(){i.innerHTML="";for(const o of e){const a=o===t,c=document.createElement("button");c.type="button",c.className="mode-btn"+(a?" on":""),c.innerHTML=`<svg viewBox="0 0 24 24">${a?rl.play:rl[o.id]||rl.play}</svg>
        <span class="name">${a?"Play · ":""}${o.name}<span class="desc">${o.desc||""}</span></span><span class="arrow">&rsaquo;</span>`,c.addEventListener("click",()=>s(o.id)),i.appendChild(c)}}function s(o){const a=e.find(c=>c.id===o)||e[0];a!==t&&(t.stop(),t=a,a.start());try{localStorage.setItem(pd,a.id)}catch{}n()}function r(o){e.push(o);let a=null;try{a=localStorage.getItem(pd)}catch{}n(),a===o.id&&s(o.id)}return n(),{register:r,select:s,update:(o,a)=>t.update(o,a),get current(){return t}}}const md="pixbit-hunt-best",Y2=2.5,$2=[{name:"Keycard",kind:"card",locker:!0},{name:"Golden mug",kind:"mug",spots:[[-1.6,1.15,12.5],[-1.2,1.15,17]]},{name:"Stapler",kind:"stapler",spots:[[7.5,1.1,4.4],[8.3,1.1,3.6]]},{name:"Game controller",kind:"pad",spots:[[4.6,.9,24.3],[5.4,1.1,26.4]]},{name:"Sticky note",kind:"note",spots:[[4.5,1.25,12],[2.2,1.25,13.6]]},{name:"Trophy star",kind:"star",spots:[[9.85,1.5,6.1],[9.4,1.3,7.2]]},{name:"Marker pen",kind:"pen",spots:[[2,1.1,20.4],[1.4,1.1,21.6]]},{name:"Plant badge",kind:"badge",spots:[[1.2,1.2,7],[2.4,1.2,4.2]]}],K2=new Et({color:"#ffcf3a",emissive:"#c88a00",emissiveIntensity:.9,roughness:.35,metalness:.6}),gd=new ks({map:null,color:"#ffe27a",transparent:!0,opacity:.55,depthWrite:!1,blending:hl});function j2(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new On(i)}function Z2(i){const e=new nt,t=(n,s=0,r=0,o=0)=>{const a=new ve(n,K2);return a.position.set(s,r,o),e.add(a),a};switch(i){case"card":t(new en(.085,.054,.004));break;case"mug":t(new Dn(.04,.035,.09,16)),t(new Ur(.028,.008,8,14),.05,0,0);break;case"stapler":t(new en(.15,.03,.04)),t(new en(.12,.02,.035),-.01,.02,0);break;case"pad":t(new en(.13,.035,.07)),t(new Zt(.03,10,8),-.05,-.01,.04),t(new Zt(.03,10,8),.05,-.01,.04);break;case"note":t(new en(.1,.1,.004));break;case"star":{const n=new Co;for(let s=0;s<10;s++){const r=s%2?.025:.06,o=Math.PI/5*s+Math.PI/2;s?n.lineTo(Math.cos(o)*r,Math.sin(o)*r):n.moveTo(Math.cos(o)*r,Math.sin(o)*r)}n.closePath(),t(new Wa(n,{depth:.015,bevelEnabled:!1}));break}case"pen":{const n=t(new Dn(.01,.01,.14,10));n.rotation.z=Math.PI/2;break}default:t(new Dn(.045,.045,.01,20)).rotation.x=Math.PI/2}return e}function J2({scene:i,camera:e,player:t}){const n=new nt;n.visible=!1,i.add(n),gd.map=j2();const s=Oa.find(M=>M.center.y>.9&&M.center.y<1.4)||Oa[0];let r=[],o=!1,a=0,c=0,l=!1,h=!1,u=null;try{u=parseFloat(localStorage.getItem(md))||null}catch{}const f=document.createElement("div");Object.assign(f.style,{position:"fixed",top:"14px",right:"14px",zIndex:"5",color:"#fff",font:"600 14px system-ui, sans-serif",background:"rgba(0,0,0,.5)",borderLeft:"4px solid #ecc828",borderRadius:"6px",padding:"8px 12px",display:"none",pointerEvents:"none",minWidth:"170px"}),document.body.appendChild(f);const d=document.createElement("div");Object.assign(d.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:"8",color:"#fff",textAlign:"center",font:"600 15px system-ui, sans-serif",background:"rgba(20,20,20,.92)",border:"1px solid #ecc828",borderRadius:"14px",padding:"24px 32px",display:"none"}),document.body.appendChild(d);let g="",_=0;const m=M=>`${Math.floor(M/60)}:${String(Math.floor(M%60)).padStart(2,"0")}`;function p(){const M=r.filter(b=>!b.got);f.innerHTML=`<div style="color:#ecc828;letter-spacing:.5px">SCAVENGER HUNT</div>
      <div>Found ${a} / ${r.length} &nbsp;·&nbsp; ${m(c)}</div>
      ${u?`<div style="font-weight:400;color:#bbb">Best ${m(u)}</div>`:""}
      <div style="font-weight:400;color:#ddd;margin-top:4px">${g||(M.length?"H = hint":"")}</div>`}function v(M){if(M.locker){const N=s.closed;return new D(s.center.x-.12*Math.cos(N),s.center.y-.04,s.center.z+.12*Math.sin(N))}const b=M.spots[Math.floor(Math.random()*M.spots.length)];return new D(b[0],b[1],b[2])}function y(){n.clear(),r=$2.map(M=>{const b=Z2(M.kind),N=v(M);if(b.position.copy(N),M.locker)b.scale.setScalar(.9);else{const V=new Rr(gd);V.scale.setScalar(.5),b.add(V)}return n.add(b),{...M,mesh:b,base:N,got:!1,zone:Hh(N.x,N.z)}}),a=0,c=0,h=!1,l=!0,g="",d.style.display="none",p()}const x=new D,E=new D;function S(){e.getWorldDirection(E);let M=null,b=.93;for(const N of r){if(N.got||N.locker&&Math.abs(s.leaf.rotation.y-s.closed)<.5||(x.copy(N.mesh.position).sub(e.position),x.length()>Y2))continue;const H=x.normalize().dot(E);H>b&&(b=H,M=N)}return M}function R(M){M.got=!0,a++,n.remove(M.mesh),g=`Got the ${M.name.toLowerCase()}!`,_=2.5,a===r.length?P():p()}function P(){l=!1,h=!0;const M=!u||c<u;if(M){u=c;try{localStorage.setItem(md,String(c))}catch{}}p(),d.innerHTML=`<div style="font-size:24px;color:#ecc828;margin-bottom:6px">All 8 found!</div>
      <div>Time ${m(c)}${M?" &nbsp;🏆 new best":` &nbsp;·&nbsp; best ${m(u)}`}</div>
      <div style="font-weight:400;color:#bbb;margin-top:10px">Press Enter to play again, or Esc to change the game mode</div>`,d.style.display="block"}return addEventListener("keydown",M=>{if(!(!o||t.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(M.target.tagName)))if(M.code==="KeyF"){const b=S();b&&R(b)}else if(M.code==="KeyH"&&l){const b=r.find(N=>!N.got);b&&(g=`Hint: ${b.name} – ${b.locker?"inside a locker in the ":"in the "}${b.zone}`,_=6,p())}else M.code==="Enter"&&h&&y()}),{id:"hunt",name:"Scavenger Hunt",desc:"Find 8 hidden gold items. F to collect, H for a hint. One is in a locker.",start(){o=!0,n.visible=!0,f.style.display="block",y()},stop(){o=!1,l=!1,n.visible=!1,f.style.display="none",d.style.display="none"},update(M,b){if(!o)return;const N=performance.now()/1e3;for(const V of r)V.got||V.locker||(V.mesh.rotation.y=N*1.6,V.mesh.position.y=V.base.y+Math.sin(N*2+V.base.x)*.03);l&&b&&(c+=M,_>0&&(_-=M)<=0&&(g=""),p())},prompt(){if(!o||!l)return"";const M=S();return M?`F collect ${M.name.toLowerCase()}`:""}}}const Bp={apiKey:"AIzaSyD_KZcTz53Bfh12ZB7Gwed8f1WCKrsGIX4",authDomain:"office-world-60ed1.firebaseapp.com",databaseURL:"https://office-world-60ed1-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"office-world-60ed1",storageBucket:"office-world-60ed1.firebasestorage.app",messagingSenderId:"607388062460",appId:"1:607388062460:web:4b68c0880c4d8822607d79"},Q2="office",eb=()=>!Bp.apiKey.startsWith("PASTE"),ol="https://www.gstatic.com/firebasejs/11.0.2/",tb=[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]}],nb=15,fr=["#e8505b","#f9a73e","#ecc828","#4fbf6f","#2fa4d9","#7b68ee","#e26fc4","#3fc1b0"],xd="pixbit-online-name",_d="pixbit-online-color",vd="pixbit-online-mic",ib=1.65,sb=`
  .ow { width: 100%; margin-top: 14px; display: none; flex-direction: column; gap: 8px; cursor: default; }
  .ow.show { display: flex; }
  .ow-row { display: flex; align-items: center; gap: 10px; }
  .ow label { width: 66px; flex: none; font: 700 12px system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; color: #ecc828; }
  .ow input { flex: 1; min-width: 0; padding: 8px 12px; border-radius: 10px; border: 1.5px solid rgba(255,255,255,.25); background: rgba(20,20,24,.7);
    color: #fff; font: 600 15px system-ui, sans-serif; outline: none; }
  .ow input:focus { border-color: #ecc828; }
  .ow input::placeholder { color: rgba(255,255,255,.45); font-weight: 500; }
  .ow input.need { border-color: #ff6b6b; box-shadow: 0 0 0 3px rgba(255,107,107,.25); animation: ow-shake .35s; }
  @keyframes ow-shake { 20%, 60% { transform: translateX(-5px); } 40%, 80% { transform: translateX(5px); } }
  .ow-dot { width: 22px; height: 22px; flex: none; border-radius: 50%; border: 2px solid rgba(255,255,255,.7); cursor: pointer; }
  .ow-seg { display: flex; gap: 6px; flex: 1; }
  .ow-seg button { flex: 1; padding: 7px 8px; border-radius: 10px; cursor: pointer; background: rgba(30,30,34,.6); border: 1.5px solid rgba(255,255,255,.2);
    color: #fff; font: 700 13px system-ui, sans-serif; white-space: nowrap; }
  .ow-seg button:hover { border-color: rgba(255,255,255,.5); }
  .ow-seg button.on { background: linear-gradient(180deg, #ffd52e, #e9b800); border-color: #ffe36b; color: #111; }
  .ow-status { font: 500 13px system-ui, sans-serif; color: rgba(255,255,255,.75); }
  .ow-status b { color: #7ee08f; }
  .ow-status.err b { color: #ff8a80; }
  #ow-hud { position: fixed; left: 50%; bottom: 14px; transform: translateX(-50%); z-index: 5; display: none; align-items: center; gap: 10px;
    padding: 6px 14px; border-radius: 20px; background: rgba(0,0,0,.5); color: #fff; font: 600 13px system-ui, sans-serif; pointer-events: none; }
  #ow-hud.show { display: flex; }
  #ow-hud .mic { width: 10px; height: 10px; border-radius: 50%; background: #777; }
  #ow-hud.live .mic { background: #7ee08f; }
  #ow-hud.talk .mic { background: #ff4d4d; box-shadow: 0 0 10px #ff4d4d; }
  #ow-hud kbd { background: #333; border: 1px solid #666; border-radius: 4px; padding: 0 5px; font: 700 11px system-ui; }
  #ow-ptt { position: fixed; z-index: 7; right: max(84px, calc(env(safe-area-inset-right) + 66px)); bottom: max(26px, env(safe-area-inset-bottom));
    width: 54px; height: 54px; border-radius: 50%; border: 2px solid rgba(255,255,255,.55); background: rgba(20,20,20,.5); color: #fff;
    display: none; align-items: center; justify-content: center; touch-action: none; user-select: none; -webkit-user-select: none; }
  #ow-ptt.show { display: flex; }
  #ow-ptt.on { background: rgba(255,77,77,.8); }
  #ow-ptt.muted::after { content: ''; position: absolute; width: 34px; height: 2.5px; background: #fff; transform: rotate(-45deg); border-radius: 2px; }
  #ow-ptt svg { width: 26px; height: 26px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; pointer-events: none; }
`;function rb({scene:i,camera:e,player:t,panel:n,touch:s=!1}){const r=document.createElement("style");r.textContent=sb,document.head.appendChild(r);let o="",a="";try{o=localStorage.getItem(xd)||"",a=localStorage.getItem(_d)||""}catch{}fr.includes(a)||(a=fr[Math.floor(Math.random()*fr.length)]);const c=document.createElement("div");c.className="ow",c.innerHTML=`
    <div class="ow-row"><label for="ow-name">Name</label><input id="ow-name" maxlength="18" autocomplete="off" spellcheck="false" placeholder="Type your name to join">
      <span class="ow-dot" title="Change colour"></span></div>
    <div class="ow-row"><label>Mic</label><div class="ow-seg"><button type="button" data-m="ptt">Push to talk</button><button type="button" data-m="open">Always on</button></div></div>
    <div class="ow-row"><label>Online</label><span class="ow-status"></span></div>`,n.insertBefore(c,n.querySelector(".m-hint"));const l=c.querySelector("input"),h=c.querySelector(".ow-dot"),u=c.querySelector(".ow-status");l.value=o,h.style.background=a,c.addEventListener("click",k=>k.stopPropagation()),l.addEventListener("keydown",k=>{var C;k.code!=="Escape"&&k.stopPropagation(),(k.code==="Enter"||k.code==="NumpadEnter")&&(k.preventDefault(),f()?(l.blur(),(C=n.closest("#overlay"))==null||C.click()):d())}),l.addEventListener("keyup",k=>k.stopPropagation()),l.addEventListener("input",()=>l.classList.remove("need")),l.addEventListener("change",f);function f(){const k=l.value.trim().replace(/\s+/g," ").slice(0,18);if(l.value=k,!k)return!1;const C=!o||!x;o=k;try{localStorage.setItem(xd,o)}catch{}return p&&C&&!x&&!S?$():q(),!0}function d(){l.classList.remove("need"),l.offsetWidth,l.classList.add("need"),g("<b>Enter your name</b> to join the world",!0),setTimeout(()=>l.focus(),0)}h.addEventListener("click",()=>{a=fr[(fr.indexOf(a)+1)%fr.length],h.style.background=a;try{localStorage.setItem(_d,a)}catch{}q()});function g(k,C=!1){u.innerHTML=k,u.classList.toggle("err",C)}const _=document.createElement("div");_.id="ow-hud",_.innerHTML='<span class="mic"></span><span class="txt"></span>',document.body.appendChild(_);const m=document.createElement("button");m.id="ow-ptt",m.type="button",m.setAttribute("aria-label","Hold to talk"),m.innerHTML='<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',document.body.appendChild(m),m.addEventListener("pointerdown",k=>{k.preventDefault(),Te==="ptt"?A(!0):G(!ae)});for(const k of["pointerup","pointercancel","pointerleave"])m.addEventListener(k,()=>A(!1));let p=!1,v=null,y=null,x=null,E=[],S=!1;const R=new Map;let P=null,M=null,b=!1,N=!1;async function V(){if(v)return v;if(window.__owFake)return v=window.__owFake;const[k,C,F]=await Promise.all([import(ol+"firebase-app.js"),import(ol+"firebase-auth.js"),import(ol+"firebase-database.js")]),oe=k.initializeApp(Bp,"pixbit-online");return v={auth:C.initializeAuth(oe,{persistence:C.inMemoryPersistence}),signIn:C.signInAnonymously,...F},v}const H=k=>v.ref(y,`rooms/${Q2}/${k}`);async function $(){if(!o){d();return}S=!0;try{await j()}finally{S=!1}}async function j(){if(!eb()&&!window.__owFake){g("<b>Not set up yet</b> · add your Firebase config (see MULTIPLAYER.md)",!0);return}g("Connecting…");try{await V(),y=v.getDatabase(v.auth.app);const k=await v.signIn(v.auth);if(!p)return;x=k.user.uid,await v.remove(H(`signal/${x}`)),v.onDisconnect(H(`players/${x}`)).remove(),v.onDisconnect(H(`signal/${x}`)).remove(),await q();const C=H("players");E.push(v.onChildAdded(C,F=>{F.key!==x&&ue(F.key,F.val()),Ie()})),E.push(v.onChildChanged(C,F=>{const oe=R.get(F.key);oe&&(oe.name=F.val().name,oe.color=F.val().color,oe.avatar.setLook(oe.name,oe.color))})),E.push(v.onChildRemoved(C,F=>{me(F.key),Ie()})),E.push(v.onChildAdded(H(`signal/${x}`),F=>{const oe=F.val();v.remove(F.ref),ze(oe).catch(U=>console.warn("[online] signal",U))})),Ie()}catch(k){console.warn("[online]",k),g(`<b>Couldn't connect</b> · ${String(k.code||k.message||k).replace(/</g,"&lt;")}`,!0)}}function q(){return!p||!x?Promise.resolve():v.set(H(`players/${x}`),{name:o,color:a,t:v.serverTimestamp()})}function ne(k,C){x&&v.push(H(`signal/${k}`),{...C,from:x})}function B(){for(const k of E)k();E=[];for(const k of[...R.keys()])me(k);v&&x&&(v.remove(H(`players/${x}`)),v.remove(H(`signal/${x}`))),x=null}function ue(k,C){if(R.has(k))return R.get(k);const F=de(k,C||{});return F.initiator&&Ee(F),F}function de(k,C){const F=new RTCPeerConnection({iceServers:tb}),oe={id:k,pc:F,dc:null,name:C.name||"Guest",color:C.color||"#999",initiator:x<k,pendingIce:[],audioEl:null,last:null};return oe.avatar=ob(oe.name,oe.color),oe.avatar.group.visible=!1,i.add(oe.avatar.group),R.set(k,oe),F.onicecandidate=U=>{U.candidate&&ne(k,{type:"ice",c:JSON.stringify(U.candidate.toJSON())})},F.ontrack=U=>pe(oe,U.streams[0]||new MediaStream([U.track])),F.onconnectionstatechange=()=>{Ie(),F.connectionState==="failed"&&p&&R.get(k)===oe&&(me(k),setTimeout(()=>{p&&x&&v.get(H(`players/${k}`)).then(U=>{U.exists()&&ue(k,U.val())})},3e3))},oe.initiator?(F.addTransceiver("audio",{direction:"sendrecv"}),Q(oe,F.createDataChannel("pos",{ordered:!1,maxRetransmits:0}))):F.ondatachannel=U=>Q(oe,U.channel),oe}async function Ee(k){const C=await k.pc.createOffer();await k.pc.setLocalDescription(C),ne(k.id,{type:"offer",sdp:C.sdp})}async function ze(k){if(!k||!k.from)return;let C=R.get(k.from);if(k.type==="offer"){(!C||C.initiator)&&(C&&me(k.from),C=de(k.from,{}),C.initiator=!1);const F=await v.get(H(`players/${k.from}`));F.exists()&&(C.name=F.val().name,C.color=F.val().color,C.avatar.setLook(C.name,C.color)),await C.pc.setRemoteDescription({type:"offer",sdp:k.sdp});for(const U of C.pc.getTransceivers())U.receiver.track.kind==="audio"&&(U.direction="sendrecv",M&&U.sender.replaceTrack(M));await $e(C);const oe=await C.pc.createAnswer();await C.pc.setLocalDescription(oe),ne(k.from,{type:"answer",sdp:oe.sdp})}else if(k.type==="answer"&&C){if(await C.pc.setRemoteDescription({type:"answer",sdp:k.sdp}),M)for(const F of C.pc.getSenders())F.track||F.replaceTrack(M);await $e(C)}else if(k.type==="ice"&&C){const F=JSON.parse(k.c);C.pc.remoteDescription?await C.pc.addIceCandidate(F).catch(()=>{}):C.pendingIce.push(F)}}async function $e(k){for(const C of k.pendingIce.splice(0))await k.pc.addIceCandidate(C).catch(()=>{})}function Q(k,C){k.dc=C,C.onopen=()=>{Ie(),z(!0)},C.onclose=()=>Ie(),C.onmessage=F=>{try{const[oe,U,_e,Y,se]=JSON.parse(F.data);k.avatar.target(oe,U,_e,Y,!!se)}catch{}}}function me(k){var F;const C=R.get(k);if(C){R.delete(k);try{(F=C.dc)==null||F.close()}catch{}try{C.pc.close()}catch{}C.audioEl&&(C.audioEl.srcObject=null,C.audioEl.remove()),C.avatar.dispose()}}function ge(){return P||(P=new dy,e.add(P)),P.context.state==="suspended"&&P.context.resume(),P}function pe(k,C){k.audioEl||(k.audioEl=document.createElement("audio"),k.audioEl.muted=!0,k.audioEl.autoplay=!0,document.body.appendChild(k.audioEl)),k.audioEl.srcObject=C;const F=new gy(ge());F.setMediaStreamSource(C),F.setRefDistance(2.5),F.setRolloffFactor(1.4),F.setDistanceModel("inverse"),F.setMaxDistance(40),k.avatar.setVoice(F)}async function Ne(){if(M||b)return M;b=!0;try{M=(await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})).getAudioTracks()[0],M.enabled=!1;for(const F of R.values())for(const oe of F.pc.getTransceivers())oe.receiver.track.kind==="audio"&&oe.currentDirection!=="stopped"&&oe.sender.replaceTrack(M);const C=ge().context;Z=C.createMediaStreamSource(new MediaStream([M])),he=C.createAnalyser(),he.fftSize=512,Z.connect(he)}catch(k){console.warn("[online] mic",k),ke="Microphone blocked: allow it in the browser to talk"}return M}let ke="",Te="ptt",We=!1,ae=!1,xe=!1,O=!1,ce=0,Z=null,he=null;try{localStorage.getItem(vd)==="open"&&(Te="open")}catch{}const ie=c.querySelectorAll(".ow-seg button");function Re(){for(const k of ie)k.classList.toggle("on",k.dataset.m===Te)}for(const k of ie)k.addEventListener("click",()=>{Te=k.dataset.m,ae=!1,We=!1;try{localStorage.setItem(vd,Te)}catch{}Te==="open"&&Ne().then(I),Re(),I(),Ie()});Re();const Me=()=>p&&(Te==="ptt"?We:xe&&!ae);function I(){const k=Me();ge(),k&&!M&&Ne().then(()=>{M&&I()}),M&&(M.enabled=k);const C=Te==="ptt"?k:k&&O;m.classList.toggle("on",Te==="ptt"?We:k),m.classList.toggle("muted",Te==="open"&&ae),m.setAttribute("aria-label",Te==="ptt"?"Hold to talk":ae?"Unmute":"Mute"),C!==N&&(N=C,z(!0)),Ve()}function A(k){Te==="ptt"&&k!==We&&(We=k,I())}function G(k){Te==="open"&&k!==ae&&(ae=k,I())}const re=k=>/^(INPUT|TEXTAREA|SELECT)$/.test(k.target.tagName)||t.state.paused;addEventListener("keydown",k=>{k.code!=="KeyV"||k.repeat||re(k)||!p||(Te==="ptt"?A(!0):G(!ae))}),addEventListener("keyup",k=>{k.code==="KeyV"&&A(!1)}),addEventListener("blur",()=>A(!1));const fe=new Float32Array(512);function le(k){if(Te!=="open"||!he||!Me()){O&&(O=!1,I());return}he.getFloatTimeDomainData(fe);let C=0;for(let U=0;U<fe.length;U++)C+=fe[U]*fe[U];const F=Math.sqrt(C/fe.length)>.02;F?ce=0:ce+=k;const oe=F||ce<.4;oe!==O&&(O=oe,I())}addEventListener("pointerdown",()=>{p&&P&&ge()});const Le=new D;let Ae=0,Pe="",st=0;function z(k=!1){e.getWorldDirection(Le);const C=Math.atan2(-Le.x,-Le.z),F=JSON.stringify([+t.pos.x.toFixed(2),+Math.max(0,e.position.y-ib).toFixed(2),+t.pos.z.toFixed(2),+C.toFixed(2),N?1:0]);if(!(!k&&F===Pe&&st<1)){Pe=F,st=0;for(const oe of R.values())if(oe.dc&&oe.dc.readyState==="open")try{oe.dc.send(F)}catch{}}}function Se(){let k=0;for(const C of R.values())C.dc&&C.dc.readyState==="open"&&k++;return k}function Ie(){if(!p||!x)return;const k=Se(),F=R.size-k;g(`<b>Connected</b> · ${k+1} in the world${F?` · ${F} joining…`:""} · ${Te==="ptt"?"hold <b>V</b> to talk":"mic on in game, <b>V</b> mutes"}`),Ve()}function Ve(){_.classList.toggle("talk",N),_.classList.toggle("live",!N&&Te==="open"&&Me()&&!!M);const k=Se()+1,C=Te==="ptt"?`${k} online · hold <kbd>V</kbd> to talk`:ae?`${k} online · mic muted · <kbd>V</kbd> to unmute`:`${k} online · mic on · <kbd>V</kbd> to mute`,F=b&&!M;_.querySelector(".txt").innerHTML=ke||(F?`${k} online · microphone blocked: allow it in the browser to talk`:N?"Talking…":C)}return{id:"online",name:"Open World",desc:"Explore with other people online and talk: push to talk or always-on mic.",start(){p=!0,c.classList.add("show"),_.classList.add("show"),s&&m.classList.add("show"),Ve(),o?$():d()},canStart(){return o?!0:(d(),!1)},stop(){p=!1,We=!1,I(),c.classList.remove("show"),_.classList.remove("show"),m.classList.remove("show"),B()},update(k,C){if(p){!!C!==xe&&(xe=!!C,xe||(We=!1),I()),le(k);for(const F of R.values())F.avatar.update(k);Ae+=k,st+=k,Ae>=1/nb&&(Ae=0,z()),ke&&(yd+=k)>5&&(ke="",yd=0,Ve())}},prompt(){return""}}}let yd=0;function ob(i,e){const t=new nt,n=new Et({color:e,roughness:.6}),s=new ve(new Ph(.24,.85,6,14),n);s.position.y=.24+.425+.02,s.castShadow=!0;const r=new ve(new Zt(.17,20,14),new Et({color:"#f1d3b8",roughness:.7}));r.position.y=1.5,r.castShadow=!0;const o=new ve(new en(.22,.07,.08),new Et({color:"#15171c",roughness:.2,metalness:.4}));o.position.set(0,1.53,-.14),t.add(s,r,o);const a=document.createElement("canvas");a.width=512,a.height=128;const c=new On(a);c.colorSpace=yt;const l=new Rr(new ks({map:c,depthTest:!1,transparent:!0}));l.scale.set(1.1,.275,1),l.position.y=1.95,l.renderOrder=10,t.add(l);let h=i,u=e,f=!1;function d(){const E=a.getContext("2d");E.clearRect(0,0,512,128),E.font="700 54px system-ui, sans-serif";const S=Math.min(500,E.measureText(h).width+(f?110:60)),R=(512-S)/2;E.fillStyle="rgba(0,0,0,.55)",E.beginPath(),E.roundRect(R,20,S,88,44),E.fill(),E.fillStyle=u,E.beginPath(),E.arc(R+36,64,12,0,Math.PI*2),E.fill(),f&&(E.fillStyle="#ff4d4d",E.beginPath(),E.arc(R+S-36,64,14,0,Math.PI*2),E.fill()),E.fillStyle="#fff",E.textBaseline="middle",E.textAlign="left",E.fillText(h,R+58,66,S-(f?120:70)),c.needsUpdate=!0}d();const g=new D,_=new D;let m=0,p=0,v=!1,y=0,x=null;return{group:t,setLook(E,S){h=E||h,u=S||u,n.color.set(u),d()},setVoice(E){var S;x&&((S=x.disconnect)==null||S.call(x),r.remove(x)),x=E,r.add(E)},target(E,S,R,P,M){g.set(E,S,R),m=P,v||(_.copy(g),p=P,v=!0,t.visible=!0),M!==f&&(f=M,d())},update(E){if(!v)return;const S=1-Math.exp(-12*E),R=_.distanceToSquared(g)>4e-4;_.lerp(g,S);let P=m-p;P=Math.atan2(Math.sin(P),Math.cos(P)),p+=P*S,R&&(y+=E*9),t.position.set(_.x,_.y+(R?Math.abs(Math.sin(y))*.04:0),_.z),t.rotation.y=p},dispose(){if(x)try{x.disconnect()}catch{}t.removeFromParent(),t.traverse(E=>{var S,R;(S=E.geometry)==null||S.dispose(),E.material&&((R=E.material.map)==null||R.dispose(),E.material.dispose())})}}}const pn=new a1({antialias:!0,powerPreference:"high-performance"});pn.setPixelRatio(Math.min(devicePixelRatio,2));pn.setSize(innerWidth,innerHeight);pn.outputColorSpace=yt;pn.toneMapping=Rd;pn.toneMappingExposure=.9;pn.shadowMap.enabled=!0;pn.shadowMap.type=Td;document.body.appendChild(pn.domElement);const mn=new sp,zp=new rt("#a8aaa4");mn.background=zp;mn.fog=new wh(zp,40,1100);const ab=new jl(pn);mn.environment=ab.fromScene(new Ry,.04).texture;mn.environmentIntensity=.45;const mi=new Cn(78,innerWidth/innerHeight,.05,1500);mn.add(new ry("#f6f7ff","#7a7066",.8));const bi=new bp("#fff3e2",1.5);bi.position.set(-22,20,4);bi.target.position.set(5,0,10);bi.castShadow=!0;bi.shadow.mapSize.set(2048,2048);Object.assign(bi.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:80});bi.shadow.bias=-4e-4;bi.shadow.normalBias=.03;mn.add(bi,bi.target);const Hp=new $a("#ffe8c8",6,12,1.5);Hp.position.set(8.7,2.6,7.8);mn.add(Hp);const Ja=new nt;d2(Ja);T2(Ja);mn.add(Ja);const rn=E2(mi,pn.domElement,{spawn:sd,yaw:sd.yaw}),$i=document.getElementById("overlay"),Bs=G2()?X2({player:rn,camera:mi}):null;Bs&&Bs.show(!1);$i.addEventListener("click",()=>{if(!(Ir.current.canStart&&!Ir.current.canStart())){if(Bs){Ca(),Bs.show(!0);return}try{const i=rn.controls.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>Ca())}catch{Ca()}}});function Ca(){rn.state.dragMode=!0,$i.classList.add("hidden"),lh.dataset.mode="drag"}document.addEventListener("pointerlockerror",Ca);addEventListener("keydown",i=>{i.code==="Escape"&&rn.state.dragMode&&!Lo.isOpen()&&(rn.state.dragMode=!1,$i.classList.remove("hidden"))});rn.controls.addEventListener("lock",()=>$i.classList.add("hidden"));rn.controls.addEventListener("unlock",()=>{Lo.isOpen()||$i.classList.remove("hidden")});const Fa=D2({scene:mn,player:rn,camera:mi}),Md=k2({scene:mn,player:rn,camera:mi,doors:Fa}),bd=z2({scene:mn,player:rn,doors:Fa}),wd=V2({scene:mn,player:rn}),Lo=L2({scene:mn,camera:mi,player:rn,world:Ja,zoneAt:Hh,renderer:pn});Lo.onResumeFailed(()=>$i.classList.remove("hidden"));const Ir=q2({list:$i.querySelector(".modes")}),ch=J2({scene:mn,camera:mi,player:rn});Ir.register(ch);const cb=rb({scene:mn,camera:mi,player:rn,panel:$i.querySelector(".m-main"),touch:!!Bs});Ir.register(cb);let Io=!1;try{Io=localStorage.getItem("pixbit-devmode")==="1"}catch{}const Ba=document.getElementById("devbox");function Vh(i){Io=i,document.body.classList.toggle("dev",i),Ba.checked=i,Lo.setEnabled(i),kp(i);try{localStorage.setItem("pixbit-devmode",i?"1":"0")}catch{}}Ba.addEventListener("click",i=>i.stopPropagation());document.getElementById("devsw").addEventListener("click",i=>i.stopPropagation());Ba.addEventListener("change",()=>Vh(Ba.checked));addEventListener("keydown",i=>{i.code==="KeyP"&&!/^(INPUT|TEXTAREA|SELECT)$/.test(i.target.tagName)&&!Lo.isOpen()&&Vh(!Io)});Vh(Io);let ho=!0;addEventListener("keydown",i=>{i.code==="KeyQ"&&(ho=!ho,bi.castShadow=ho,pn.setPixelRatio(ho?Math.min(devicePixelRatio,2):1),pn.setSize(innerWidth,innerHeight))});const al=document.getElementById("zone"),lh=document.getElementById("hud");let Sd="",cl=0,Ma=0,ll=0;function lb(i){const e=Hh(rn.pos.x,rn.pos.z);e!==Sd&&(Sd=e,al.textContent=e,al.classList.add("show"),cl=2.2),cl>0&&(cl-=i)<=0&&al.classList.remove("show")}addEventListener("resize",()=>{mi.aspect=innerWidth/innerHeight,mi.updateProjectionMatrix(),pn.setSize(innerWidth,innerHeight)});const hb=new wp;pn.setAnimationLoop(()=>{const i=hb.getDelta();if(rn.update(i),Fa.update(i),Md.update(i),bd.update(i),wd.update(i),Ir.update(i,$i.classList.contains("hidden")),lb(i),ll++,Ma+=i,Ma>.5){const e=wd.prompt()||Ir.current===ch&&ch.prompt()||Fa.prompt()||Md.prompt()||bd.prompt();Bs?(Bs.setAction(e),lh.textContent=""):lh.textContent=`${e?e.toUpperCase()+" · ":""}${Math.round(ll/Ma)} fps · ${ho?"high":"low"} quality (Q) · ${Io?"DEV · C suggest · X area · L list":"dev mode off (P)"}${rn.state.dragMode?" · drag mouse to look":""}`,ll=0,Ma=0}pn.render(mn,mi)});Object.assign(window,{__office:{scene:mn,camera:mi,player:rn,renderer:pn}});
