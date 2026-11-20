(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const uh="170",$p=0,Jh=1,Kp=2,Ad=1,Rd=2,ki=3,qi=0,wn=1,Ot=2,fs=0,gr=1,ul=2,Qh=3,eu=4,jp=5,Ls=100,Zp=101,Jp=102,Qp=103,e0=104,t0=200,n0=201,i0=202,s0=203,fl=204,dl=205,r0=206,o0=207,a0=208,c0=209,l0=210,h0=211,u0=212,f0=213,d0=214,pl=0,ml=1,gl=2,Mr=3,xl=4,_l=5,vl=6,yl=7,Cd=0,p0=1,m0=2,ds=0,g0=1,x0=2,_0=3,Pd=4,v0=5,y0=6,M0=7,tu="attached",b0="detached",Ld=300,br=301,wr=302,Ml=303,bl=304,za=306,mi=1e3,hs=1001,Pa=1002,In=1003,Id=1004,oo=1005,qn=1006,ba=1007,Vi=1008,Yi=1009,Dd=1010,Nd=1011,_o=1012,fh=1013,Us=1014,di=1015,Ao=1016,dh=1017,ph=1018,Sr=1020,Ud=35902,Od=1021,kd=1022,ni=1023,Fd=1024,Bd=1025,xr=1026,Er=1027,mh=1028,gh=1029,zd=1030,xh=1031,_h=1033,wa=33776,Sa=33777,Ea=33778,Ta=33779,wl=35840,Sl=35841,El=35842,Tl=35843,Al=36196,Rl=37492,Cl=37496,Pl=37808,Ll=37809,Il=37810,Dl=37811,Nl=37812,Ul=37813,Ol=37814,kl=37815,Fl=37816,Bl=37817,zl=37818,Hl=37819,Vl=37820,Gl=37821,Aa=36492,Wl=36494,Xl=36495,Hd=36283,ql=36284,Yl=36285,$l=36286,vo=2300,yo=2301,ec=2302,nu=2400,iu=2401,su=2402,w0=2500,S0=0,Vd=1,Kl=2,E0=3200,T0=3201,Gd=0,A0=1,cs="",yt="srgb",Dn="srgb-linear",Ha="linear",Rt="srgb",Vs=7680,ru=519,R0=512,C0=513,P0=514,Wd=515,L0=516,I0=517,D0=518,N0=519,jl=35044,ou="300 es",Gi=2e3,La=2001;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let au=1234567;const uo=Math.PI/180,Tr=180/Math.PI;function ii(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function vh(i,e){return(i%e+e)%e}function U0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function O0(i,e,t){return i!==e?(t-i)/(e-i):0}function fo(i,e,t){return(1-t)*i+t*e}function k0(i,e,t,n){return fo(i,e,1-Math.exp(-t*n))}function F0(i,e=1){return e-Math.abs(vh(i,e*2)-e)}function B0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function z0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function H0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function V0(i,e){return i+Math.random()*(e-i)}function G0(i){return i*(.5-Math.random())}function W0(i){i!==void 0&&(au=i);let e=au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function X0(i){return i*uo}function q0(i){return i*Tr}function Y0(i){return(i&i-1)===0&&i!==0}function $0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function K0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function j0(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Tt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Z0={DEG2RAD:uo,RAD2DEG:Tr,generateUUID:ii,clamp:en,euclideanModulo:vh,mapLinear:U0,inverseLerp:O0,lerp:fo,damp:k0,pingpong:F0,smoothstep:B0,smootherstep:z0,randInt:H0,randFloat:V0,randFloatSpread:G0,seededRandom:W0,degToRad:X0,radToDeg:q0,isPowerOfTwo:Y0,ceilPowerOfTwo:$0,floorPowerOfTwo:K0,setQuaternionFromProperEuler:j0,normalize:Tt,denormalize:fi};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,n,s,r,o,a,c,l){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],x=s[7],A=s[2],S=s[5],R=s[8];return r[0]=o*_+a*v+c*A,r[3]=o*m+a*y+c*S,r[6]=o*p+a*x+c*R,r[1]=l*_+h*v+u*A,r[4]=l*m+h*y+u*S,r[7]=l*p+h*x+u*R,r[2]=f*_+d*v+g*A,r[5]=f*m+d*y+g*S,r[8]=f*p+d*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*l-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tc.makeScale(e,t)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new lt;function Xd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Mo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function J0(){const i=Mo("canvas");return i.style.display="block",i}const cu={};function ao(i){i in cu||(cu[i]=!0,console.warn(i))}function Q0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function em(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mt={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Rt&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Rt&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===cs?Ha:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Xi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const lu=[.64,.33,.3,.6,.15,.06],hu=[.2126,.7152,.0722],uu=[.3127,.329],fu=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[Dn]:{primaries:lu,whitePoint:uu,transfer:Ha,toXYZ:fu,fromXYZ:du,luminanceCoefficients:hu,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:lu,whitePoint:uu,transfer:Rt,toXYZ:fu,fromXYZ:du,luminanceCoefficients:hu,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}});let Gs;class nm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gs===void 0&&(Gs=Mo("canvas")),Gs.width=e.width,Gs.height=e.height;const n=Gs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let im=0;class qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nc(s[o].image)):r.push(nc(s[o]))}else r=nc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function nc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sm=0;class tn extends zs{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=hs,s=hs,r=qn,o=Vi,a=ni,c=Yi,l=tn.DEFAULT_ANISOTROPY,h=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=ii(),this.name="",this.source=new qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ld)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mi:e.x=e.x-Math.floor(e.x);break;case hs:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mi:e.y=e.y-Math.floor(e.y);break;case hs:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Ld;tn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,t=0,n=0,s=1){Mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,x=(d+1)/2,A=(p+1)/2,S=(h+f)/4,R=(u+_)/4,C=(g+m)/4;return y>x&&y>A?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=S/n,r=R/n):x>A?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=S/s,r=C/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=C/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rm extends zs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Os extends rm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yd extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class om extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),S=Math.atan2(A,p*v);m=Math.sin(m*S)/A,a=Math.sin(a*S)/A}const x=a*v;if(c=c*m+f*x,l=l*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+c*d-l*f,e[t+1]=c*g+h*f+l*u-a*d,e[t+2]=l*g+h*d+a*f-c*u,e[t+3]=h*g-a*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new N,pu=new $n;class wi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,oi):oi.fromBufferAttribute(r,o),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Oo.subVectors(this.max,Hr),Ws.subVectors(e.a,Hr),Xs.subVectors(e.b,Hr),qs.subVectors(e.c,Hr),Zi.subVectors(Xs,Ws),Ji.subVectors(qs,Xs),xs.subVectors(Ws,qs);let t=[0,-Zi.z,Zi.y,0,-Ji.z,Ji.y,0,-xs.z,xs.y,Zi.z,0,-Zi.x,Ji.z,0,-Ji.x,xs.z,0,-xs.x,-Zi.y,Zi.x,0,-Ji.y,Ji.x,0,-xs.y,xs.x,0];return!sc(t,Ws,Xs,qs,Oo)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,Ws,Xs,qs,Oo))?!1:(ko.crossVectors(Zi,Ji),t=[ko.x,ko.y,ko.z],sc(t,Ws,Xs,qs,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new N,new N,new N,new N,new N,new N,new N,new N],oi=new N,Uo=new wi,Ws=new N,Xs=new N,qs=new N,Zi=new N,Ji=new N,xs=new N,Hr=new N,Oo=new N,ko=new N,_s=new N;function sc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){_s.fromArray(i,r);const a=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),c=e.dot(_s),l=t.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const am=new wi,Vr=new N,rc=new N;class Si{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):am.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(rc)),this.expandByPoint(Vr.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new N,oc=new N,Fo=new N,Qi=new N,ac=new N,Bo=new N,cc=new N;class Ro{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oc.copy(e).add(t).multiplyScalar(.5),Fo.copy(t).sub(e).normalize(),Qi.copy(this.origin).sub(oc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Fo),a=Qi.dot(this.direction),c=-Qi.dot(Fo),l=Qi.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oc).addScaledVector(Fo,f),d}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,s,r){ac.subVectors(t,e),Bo.subVectors(n,e),cc.crossVectors(ac,Bo);let o=this.direction.dot(cc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qi.subVectors(this.origin,e);const c=a*this.direction.dot(Bo.crossVectors(Qi,Bo));if(c<0)return null;const l=a*this.direction.dot(ac.cross(Qi));if(l<0||c+l>o)return null;const h=-a*Qi.dot(cc);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(e,t,n,s,r,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Ys.setFromMatrixColumn(e,0).length(),r=1/Ys.setFromMatrixColumn(e,1).length(),o=1/Ys.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cm,e,lm)}lookAt(e,t,n){const s=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),es.crossVectors(n,Hn),es.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),es.crossVectors(n,Hn)),es.normalize(),zo.crossVectors(Hn,es),s[0]=es.x,s[4]=zo.x,s[8]=Hn.x,s[1]=es.y,s[5]=zo.y,s[9]=Hn.y,s[2]=es.z,s[6]=zo.z,s[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],A=n[15],S=s[0],R=s[4],C=s[8],b=s[12],M=s[1],I=s[5],V=s[9],B=s[13],$=s[2],Z=s[6],Y=s[10],ne=s[14],z=s[3],pe=s[7],me=s[11],we=s[15];return r[0]=o*S+a*M+c*$+l*z,r[4]=o*R+a*I+c*Z+l*pe,r[8]=o*C+a*V+c*Y+l*me,r[12]=o*b+a*B+c*ne+l*we,r[1]=h*S+u*M+f*$+d*z,r[5]=h*R+u*I+f*Z+d*pe,r[9]=h*C+u*V+f*Y+d*me,r[13]=h*b+u*B+f*ne+d*we,r[2]=g*S+_*M+m*$+p*z,r[6]=g*R+_*I+m*Z+p*pe,r[10]=g*C+_*V+m*Y+p*me,r[14]=g*b+_*B+m*ne+p*we,r[3]=v*S+y*M+x*$+A*z,r[7]=v*R+y*I+x*Z+A*pe,r[11]=v*C+y*V+x*Y+A*me,r[15]=v*b+y*B+x*ne+A*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*u-t*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-t*c*u+t*a*f+s*o*u-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,x=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,A=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,S=t*v+n*y+s*x+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/S;return e[0]=v*R,e[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*R,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*R,e[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*R,e[4]=y*R,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*R,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*R,e[8]=x*R,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*R,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*l+t*u*l+o*n*d-t*a*d)*R,e[12]=A*R,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*n*c-t*u*c-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,v=c*l,y=c*h,x=c*u,A=n.x,S=n.y,R=n.z;return s[0]=(1-(_+p))*A,s[1]=(d+x)*A,s[2]=(g-y)*A,s[3]=0,s[4]=(d-x)*S,s[5]=(1-(f+p))*S,s[6]=(m+v)*S,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Ys.set(s[0],s[1],s[2]).length();const o=Ys.set(s[4],s[5],s[6]).length(),a=Ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);const l=1/r,h=1/o,u=1/a;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=h,ai.elements[5]*=h,ai.elements[6]*=h,ai.elements[8]*=u,ai.elements[9]*=u,ai.elements[10]*=u,t.setFromRotationMatrix(ai),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Gi){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s);let d,g;if(a===Gi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===La)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Gi){const c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(o-r),f=(t+e)*l,d=(n+s)*h;let g,_;if(a===Gi)g=(o+r)*u,_=-2*u;else if(a===La)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ys=new N,ai=new ot,cm=new N(0,0,0),lm=new N(1,1,1),es=new N,zo=new N,Hn=new N,mu=new ot,gu=new $n;class En{constructor(e=0,t=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gu.setFromEuler(this),this.setFromQuaternion(gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hm=0;const xu=new N,$s=new $n,Ii=new ot,Ho=new N,Gr=new N,um=new N,fm=new $n,_u=new N(1,0,0),vu=new N(0,1,0),yu=new N(0,0,1),Mu={type:"added"},dm={type:"removed"},Ks={type:"childadded",child:null},lc={type:"childremoved",child:null};class It extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new N,t=new En,n=new $n,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new lt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(_u,e)}rotateY(e){return this.rotateOnAxis(vu,e)}rotateZ(e){return this.rotateOnAxis(yu,e)}translateOnAxis(e,t){return xu.copy(e).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_u,e)}translateY(e){return this.translateOnAxis(vu,e)}translateZ(e){return this.translateOnAxis(yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ho.copy(e):Ho.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Gr,Ho,this.up):Ii.lookAt(Ho,Gr,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),$s.setFromRotationMatrix(Ii),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mu),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dm),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mu),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,fm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}It.DEFAULT_UP=new N(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new N,Di=new N,hc=new N,Ni=new N,js=new N,Zs=new N,bu=new N,uc=new N,fc=new N,dc=new N,pc=new Mt,mc=new Mt,gc=new Mt;class ti{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ci.subVectors(s,t),Di.subVectors(n,t),hc.subVectors(e,t);const o=ci.dot(ci),a=ci.dot(Di),c=ci.dot(hc),l=Di.dot(Di),h=Di.dot(hc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ni.x),c.addScaledVector(o,Ni.y),c.addScaledVector(a,Ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),gc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(pc,r.x),o.addScaledVector(mc,r.y),o.addScaledVector(gc,r.z),o}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),Di.subVectors(e,t),ci.cross(Di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ci.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;js.subVectors(s,n),Zs.subVectors(r,n),uc.subVectors(e,n);const c=js.dot(uc),l=Zs.dot(uc);if(c<=0&&l<=0)return t.copy(n);fc.subVectors(e,s);const h=js.dot(fc),u=Zs.dot(fc);if(h>=0&&u<=h)return t.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(js,o);dc.subVectors(e,r);const d=js.dot(dc),g=Zs.dot(dc);if(g>=0&&d<=g)return t.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Zs,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return bu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(bu,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(js,o).addScaledVector(Zs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function xc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class rt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=mt.workingColorSpace){if(e=vh(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=xc(o,r,e+1/3),this.g=xc(o,r,e),this.b=xc(o,r,e-1/3)}return mt.toWorkingColorSpace(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=$d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return mt.fromWorkingColorSpace(xn.copy(this),e),Math.round(en(xn.r*255,0,255))*65536+Math.round(en(xn.g*255,0,255))*256+Math.round(en(xn.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(xn.copy(this),t);const n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=yt){mt.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,n=xn.g,s=xn.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(Vo);const n=fo(ts.h,Vo.h,t),s=fo(ts.s,Vo.s,t),r=fo(ts.l,Vo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new rt;rt.NAMES=$d;let pm=0;class pi extends zs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=ii(),this.name="",this.blending=gr,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ru,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==Ls&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ru&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ln extends pi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new N,Go=new ye;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Go.fromBufferAttribute(this,t),Go.applyMatrix3(e),this.setXY(t,Go.x,Go.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),e}}class Kd extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class jd extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mm=0;const Zn=new ot,_c=new It,Js=new N,Vn=new wi,Wr=new wi,on=new N;class Ht extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xd(e)?jd:Kd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Vn.min,Wr.min),Vn.expandByPoint(on),on.addVectors(Vn.max,Wr.max),Vn.expandByPoint(on)):(Vn.expandByPoint(Wr.min),Vn.expandByPoint(Wr.max))}Vn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)on.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(on));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(Js.fromBufferAttribute(e,l),on.add(Js)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new N,c[C]=new N;const l=new N,h=new N,u=new N,f=new ye,d=new ye,g=new ye,_=new N,m=new N;function p(C,b,M){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(I),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(_),a[b].add(_),a[M].add(_),c[C].add(m),c[b].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,b=v.length;C<b;++C){const M=v[C],I=M.start,V=M.count;for(let B=I,$=I+V;B<$;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new N,x=new N,A=new N,S=new N;function R(C){A.fromBufferAttribute(s,C),S.copy(A);const b=a[C];y.copy(b),y.sub(A.multiplyScalar(A.dot(b))).normalize(),x.crossVectors(S,b);const I=x.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,I)}for(let C=0,b=v.length;C<b;++C){const M=v[C],I=M.start,V=M.count;for(let B=I,$=I+V;B<$;B+=3)R(e.getX(B+0)),R(e.getX(B+1)),R(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,u=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Sn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wu=new ot,vs=new Ro,Wo=new Si,Su=new N,Xo=new N,qo=new N,Yo=new N,vc=new N,$o=new N,Eu=new N,Ko=new N;class be extends It{constructor(e=new Ht,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$o.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(vc.fromBufferAttribute(u,e),o?$o.addScaledVector(vc,h):$o.addScaledVector(vc.sub(t),h))}t.add($o)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(Wo.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Wo,Su)===null||vs.origin.distanceToSquared(Su)>(e.far-e.near)**2))&&(wu.copy(r).invert(),vs.copy(e.ray).applyMatrix4(wu),!(n.boundingBox!==null&&vs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,A=y;x<A;x+=3){const S=a.getX(x),R=a.getX(x+1),C=a.getX(x+2);s=jo(this,p,e,n,l,h,u,S,R,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);s=jo(this,o,e,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,A=y;x<A;x+=3){const S=x,R=x+1,C=x+2;s=jo(this,p,e,n,l,h,u,S,R,C),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;s=jo(this,o,e,n,l,h,u,v,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function gm(i,e,t,n,s,r,o,a){let c;if(e.side===wn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===qi,a),c===null)return null;Ko.copy(a),Ko.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ko);return l<t.near||l>t.far?null:{distance:l,point:Ko.clone(),object:i}}function jo(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Xo),i.getVertexPosition(c,qo),i.getVertexPosition(l,Yo);const h=gm(i,e,t,n,Xo,qo,Yo,Eu);if(h){const u=new N;ti.getBarycoord(Eu,Xo,qo,Yo,u),s&&(h.uv=ti.getInterpolatedAttribute(s,a,c,l,u,new ye)),r&&(h.uv1=ti.getInterpolatedAttribute(r,a,c,l,u,new ye)),o&&(h.normal=ti.getInterpolatedAttribute(o,a,c,l,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new N,materialIndex:0};ti.getNormal(Xo,qo,Yo,f.normal),h.face=f,h.barycoord=u}return h}class an extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(_,m,p,v,y,x,A,S,R,C,b){const M=x/R,I=A/C,V=x/2,B=A/2,$=S/2,Z=R+1,Y=C+1;let ne=0,z=0;const pe=new N;for(let me=0;me<Y;me++){const we=me*I-B;for(let Be=0;Be<Z;Be++){const Ve=Be*M-V;pe[_]=Ve*v,pe[m]=we*y,pe[p]=$,l.push(pe.x,pe.y,pe.z),pe[_]=0,pe[m]=0,pe[p]=S>0?1:-1,h.push(pe.x,pe.y,pe.z),u.push(Be/R),u.push(1-me/C),ne+=1}}for(let me=0;me<C;me++)for(let we=0;we<R;we++){const Be=f+we+Z*me,Ve=f+we+Z*(me+1),Q=f+(we+1)+Z*(me+1),he=f+(we+1)+Z*me;c.push(Be,Ve,he),c.push(Ve,Q,he),z+=6}a.addGroup(d,z,b),d+=z,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new an(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function An(i){const e={};for(let t=0;t<i.length;t++){const n=Ar(i[t]);for(const s in n)e[s]=n[s]}return e}function xm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zd(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const _m={clone:Ar,merge:An};var vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ym=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ms extends pi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vm,this.fragmentShader=ym,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=xm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Jd extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new N,Tu=new ye,Au=new ye;class Cn extends Jd{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,Tu,Au),t.subVectors(Au,Tu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qs=-90,er=1;class Mm extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(Qs,er,e,t);s.layers=this.layers,this.add(s);const r=new Cn(Qs,er,e,t);r.layers=this.layers,this.add(r);const o=new Cn(Qs,er,e,t);o.layers=this.layers,this.add(o);const a=new Cn(Qs,er,e,t);a.layers=this.layers,this.add(a);const c=new Cn(Qs,er,e,t);c.layers=this.layers,this.add(c);const l=new Cn(Qs,er,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===La)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Qd extends tn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bm extends Os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Qd(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new an(5,5,5),r=new ms({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wn,blending:fs});r.uniforms.tEquirect.value=t;const o=new be(s,r),a=t.minFilter;return t.minFilter===Vi&&(t.minFilter=qn),new Mm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const yc=new N,wm=new N,Sm=new lt;class Rs{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=yc.subVectors(n,t).cross(wm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(yc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Sm.getNormalMatrix(e),s=this.coplanarPoint(yc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Si,Zo=new N;class Mh{constructor(e=new Rs,t=new Rs,n=new Rs,s=new Rs,r=new Rs,o=new Rs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Gi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],v=s[13],y=s[14],x=s[15];if(n[0].setComponents(c-r,f-l,m-d,x-p).normalize(),n[1].setComponents(c+r,f+l,m+d,x+p).normalize(),n[2].setComponents(c+o,f+h,m+g,x+v).normalize(),n[3].setComponents(c-o,f-h,m-g,x-v).normalize(),n[4].setComponents(c-a,f-u,m-_,x-y).normalize(),t===Gi)n[5].setComponents(c+a,f+u,m+_,x+y).normalize();else if(t===La)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(e){return ys.center.set(0,0,0),ys.radius=.7071067811865476,ys.applyMatrix4(e.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Zo.x=s.normal.x>0?e.max.x:e.min.x,Zo.y=s.normal.y>0?e.max.y:e.min.y,Zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ep(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Em(i){const e=new WeakMap;function t(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class ut extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=e/a,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*f-o;for(let y=0;y<l;y++){const x=y*u-r;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,x=v+l*(p+1),A=v+1+l*(p+1),S=v+1+l*p;d.push(y,x,S),d.push(x,A,S)}this.setIndex(d),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ut(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Am=`#ifdef USE_ALPHAHASH
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
#endif`,Rm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Im=`#ifdef USE_AOMAP
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
#endif`,Dm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nm=`#ifdef USE_BATCHING
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
#endif`,Um=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bm=`#ifdef USE_IRIDESCENCE
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
#endif`,zm=`#ifdef USE_BUMPMAP
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
#endif`,Hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ym=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Km=`#define PI 3.141592653589793
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
} // validated`,jm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Jm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sg=`#ifdef USE_ENVMAP
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
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cg=`#ifdef USE_ENVMAP
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
#endif`,lg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
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
}`,pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xg=`uniform bool receiveShadow;
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
#endif`,_g=`#ifdef USE_ENVMAP
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
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wg=`PhysicalMaterial material;
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
#endif`,Sg=`struct PhysicalMaterial {
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
}`,Eg=`
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
#endif`,Tg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ig=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ug=`#if defined( USE_POINTS_UV )
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
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hg=`#ifdef USE_MORPHTARGETS
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
#endif`,Vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$g=`#ifdef USE_NORMALMAP
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
#endif`,Kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ex=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ix=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ax=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hx=`float getShadowMask() {
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
}`,ux=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fx=`#ifdef USE_SKINNING
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
#endif`,dx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,px=`#ifdef USE_SKINNING
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
#endif`,mx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_x=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,vx=`#ifdef USE_TRANSMISSION
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
#endif`,yx=`#ifdef USE_TRANSMISSION
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
#endif`,Mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ex=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tx=`uniform sampler2D t2D;
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
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Px=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`#include <common>
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
}`,Ix=`#if DEPTH_PACKING == 3200
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
}`,Dx=`#define DISTANCE
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
}`,Nx=`#define DISTANCE
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ox=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kx=`uniform float scale;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,zx=`uniform vec3 diffuse;
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
}`,Hx=`#define LAMBERT
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
}`,Vx=`#define LAMBERT
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
}`,Gx=`#define MATCAP
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
}`,Wx=`#define MATCAP
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
}`,Xx=`#define NORMAL
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
}`,qx=`#define NORMAL
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
}`,Yx=`#define PHONG
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
}`,$x=`#define PHONG
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
}`,Kx=`#define STANDARD
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
}`,jx=`#define STANDARD
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
}`,Zx=`#define TOON
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
}`,Jx=`#define TOON
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
}`,Qx=`uniform float size;
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
}`,e_=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,n_=`uniform vec3 color;
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
}`,i_=`uniform float rotation;
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
}`,s_=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Tm,alphahash_pars_fragment:Am,alphamap_fragment:Rm,alphamap_pars_fragment:Cm,alphatest_fragment:Pm,alphatest_pars_fragment:Lm,aomap_fragment:Im,aomap_pars_fragment:Dm,batching_pars_vertex:Nm,batching_vertex:Um,begin_vertex:Om,beginnormal_vertex:km,bsdfs:Fm,iridescence_fragment:Bm,bumpmap_pars_fragment:zm,clipping_planes_fragment:Hm,clipping_planes_pars_fragment:Vm,clipping_planes_pars_vertex:Gm,clipping_planes_vertex:Wm,color_fragment:Xm,color_pars_fragment:qm,color_pars_vertex:Ym,color_vertex:$m,common:Km,cube_uv_reflection_fragment:jm,defaultnormal_vertex:Zm,displacementmap_pars_vertex:Jm,displacementmap_vertex:Qm,emissivemap_fragment:eg,emissivemap_pars_fragment:tg,colorspace_fragment:ng,colorspace_pars_fragment:ig,envmap_fragment:sg,envmap_common_pars_fragment:rg,envmap_pars_fragment:og,envmap_pars_vertex:ag,envmap_physical_pars_fragment:_g,envmap_vertex:cg,fog_vertex:lg,fog_pars_vertex:hg,fog_fragment:ug,fog_pars_fragment:fg,gradientmap_pars_fragment:dg,lightmap_pars_fragment:pg,lights_lambert_fragment:mg,lights_lambert_pars_fragment:gg,lights_pars_begin:xg,lights_toon_fragment:vg,lights_toon_pars_fragment:yg,lights_phong_fragment:Mg,lights_phong_pars_fragment:bg,lights_physical_fragment:wg,lights_physical_pars_fragment:Sg,lights_fragment_begin:Eg,lights_fragment_maps:Tg,lights_fragment_end:Ag,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Lg,map_fragment:Ig,map_pars_fragment:Dg,map_particle_fragment:Ng,map_particle_pars_fragment:Ug,metalnessmap_fragment:Og,metalnessmap_pars_fragment:kg,morphinstance_vertex:Fg,morphcolor_vertex:Bg,morphnormal_vertex:zg,morphtarget_pars_vertex:Hg,morphtarget_vertex:Vg,normal_fragment_begin:Gg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:qg,normal_vertex:Yg,normalmap_pars_fragment:$g,clearcoat_normal_fragment_begin:Kg,clearcoat_normal_fragment_maps:jg,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Jg,opaque_fragment:Qg,packing:ex,premultiplied_alpha_fragment:tx,project_vertex:nx,dithering_fragment:ix,dithering_pars_fragment:sx,roughnessmap_fragment:rx,roughnessmap_pars_fragment:ox,shadowmap_pars_fragment:ax,shadowmap_pars_vertex:cx,shadowmap_vertex:lx,shadowmask_pars_fragment:hx,skinbase_vertex:ux,skinning_pars_vertex:fx,skinning_vertex:dx,skinnormal_vertex:px,specularmap_fragment:mx,specularmap_pars_fragment:gx,tonemapping_fragment:xx,tonemapping_pars_fragment:_x,transmission_fragment:vx,transmission_pars_fragment:yx,uv_pars_fragment:Mx,uv_pars_vertex:bx,uv_vertex:wx,worldpos_vertex:Sx,background_vert:Ex,background_frag:Tx,backgroundCube_vert:Ax,backgroundCube_frag:Rx,cube_vert:Cx,cube_frag:Px,depth_vert:Lx,depth_frag:Ix,distanceRGBA_vert:Dx,distanceRGBA_frag:Nx,equirect_vert:Ux,equirect_frag:Ox,linedashed_vert:kx,linedashed_frag:Fx,meshbasic_vert:Bx,meshbasic_frag:zx,meshlambert_vert:Hx,meshlambert_frag:Vx,meshmatcap_vert:Gx,meshmatcap_frag:Wx,meshnormal_vert:Xx,meshnormal_frag:qx,meshphong_vert:Yx,meshphong_frag:$x,meshphysical_vert:Kx,meshphysical_frag:jx,meshtoon_vert:Zx,meshtoon_frag:Jx,points_vert:Qx,points_frag:e_,shadow_vert:t_,shadow_frag:n_,sprite_vert:i_,sprite_frag:s_},De={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Mi={basic:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new rt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:An([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:An([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:An([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new rt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:An([De.points,De.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:An([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:An([De.common,De.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:An([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:An([De.sprite,De.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:An([De.common,De.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:An([De.lights,De.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Mi.physical={uniforms:An([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Jo={r:0,b:0,g:0},Ms=new En,r_=new ot;function o_(i,e,t,n,s,r,o){const a=new rt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function _(v){let y=!1;const x=g(v);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===za)?(h===void 0&&(h=new be(new an(1,1,1),new ms({name:"BackgroundCubeMaterial",uniforms:Ar(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ms.copy(y.backgroundRotation),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(r_.makeRotationFromEuler(Ms)),h.material.toneMapped=mt.getTransfer(x.colorSpace)!==Rt,(u!==x||f!==x.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new be(new ut(2,2),new ms({name:"BackgroundMaterial",uniforms:Ar(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=mt.getTransfer(x.colorSpace)!==Rt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(Jo,Zd(i)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:_,addToRenderList:m}}function a_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,I,V,B,$){let Z=!1;const Y=u(B,V,I);r!==Y&&(r=Y,l(r.object)),Z=d(M,B,V,$),Z&&g(M,B,V,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(M,I,V,B),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,I,V){const B=V.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let Z=$[I.id];Z===void 0&&(Z={},$[I.id]=Z);let Y=Z[B];return Y===void 0&&(Y=f(c()),Z[B]=Y),Y}function f(M){const I=[],V=[],B=[];for(let $=0;$<t;$++)I[$]=0,V[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:B,object:M,attributes:{},index:null}}function d(M,I,V,B){const $=r.attributes,Z=I.attributes;let Y=0;const ne=V.getAttributes();for(const z in ne)if(ne[z].location>=0){const me=$[z];let we=Z[z];if(we===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),me===void 0||me.attribute!==we||we&&me.data!==we.data)return!0;Y++}return r.attributesNum!==Y||r.index!==B}function g(M,I,V,B){const $={},Z=I.attributes;let Y=0;const ne=V.getAttributes();for(const z in ne)if(ne[z].location>=0){let me=Z[z];me===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const we={};we.attribute=me,me&&me.data&&(we.data=me.data),$[z]=we,Y++}r.attributes=$,r.attributesNum=Y,r.index=B}function _(){const M=r.newAttributes;for(let I=0,V=M.length;I<V;I++)M[I]=0}function m(M){p(M,0)}function p(M,I){const V=r.newAttributes,B=r.enabledAttributes,$=r.attributeDivisors;V[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),$[M]!==I&&(i.vertexAttribDivisor(M,I),$[M]=I)}function v(){const M=r.newAttributes,I=r.enabledAttributes;for(let V=0,B=I.length;V<B;V++)I[V]!==M[V]&&(i.disableVertexAttribArray(V),I[V]=0)}function y(M,I,V,B,$,Z,Y){Y===!0?i.vertexAttribIPointer(M,I,V,$,Z):i.vertexAttribPointer(M,I,V,B,$,Z)}function x(M,I,V,B){_();const $=B.attributes,Z=V.getAttributes(),Y=I.defaultAttributeValues;for(const ne in Z){const z=Z[ne];if(z.location>=0){let pe=$[ne];if(pe===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),pe!==void 0){const me=pe.normalized,we=pe.itemSize,Be=e.get(pe);if(Be===void 0)continue;const Ve=Be.buffer,Q=Be.type,he=Be.bytesPerElement,_e=Q===i.INT||Q===i.UNSIGNED_INT||pe.gpuType===fh;if(pe.isInterleavedBufferAttribute){const ve=pe.data,Ne=ve.stride,Fe=pe.offset;if(ve.isInstancedInterleavedBuffer){for(let ue=0;ue<z.locationSize;ue++)p(z.location+ue,ve.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ue=0;ue<z.locationSize;ue++)m(z.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ue=0;ue<z.locationSize;ue++)y(z.location+ue,we/z.locationSize,Q,me,Ne*he,(Fe+we/z.locationSize*ue)*he,_e)}else{if(pe.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)p(z.location+ve,pe.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ve=0;ve<z.locationSize;ve++)m(z.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ve=0;ve<z.locationSize;ve++)y(z.location+ve,we/z.locationSize,Q,me,we*he,we/z.locationSize*ve*he,_e)}}else if(Y!==void 0){const me=Y[ne];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(z.location,me);break;case 3:i.vertexAttrib3fv(z.location,me);break;case 4:i.vertexAttrib4fv(z.location,me);break;default:i.vertexAttrib1fv(z.location,me)}}}}v()}function A(){C();for(const M in n){const I=n[M];for(const V in I){const B=I[V];for(const $ in B)h(B[$].object),delete B[$];delete I[V]}delete n[M]}}function S(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const V in I){const B=I[V];for(const $ in B)h(B[$].object),delete B[$];delete I[V]}delete n[M.id]}function R(M){for(const I in n){const V=n[I];if(V[M.id]===void 0)continue;const B=V[M.id];for(const $ in B)h(B[$].object),delete B[$];delete V[M.id]}}function C(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function c_(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function a(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function l_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ni&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const C=R===Ao&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==di&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,S=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:S}}function h_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Rs,a=new lt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const v=r?0:n,y=v*4;let x=p.clippingState||null;c.value=x,x=h(g,f,y,d);for(let A=0;A!==y;++A)x[A]=t[A];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function u_(i){let e=new WeakMap;function t(o,a){return a===Ml?o.mapping=br:a===bl&&(o.mapping=wr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ml||a===bl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new bm(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class bh extends Jd{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pr=4,Ru=[.125,.215,.35,.446,.526,.582],Is=20,Mc=new bh,Cu=new rt;let bc=null,wc=0,Sc=0,Ec=!1;const Cs=(1+Math.sqrt(5))/2,tr=1/Cs,Pu=[new N(-Cs,tr,0),new N(Cs,tr,0),new N(-tr,0,Cs),new N(tr,0,Cs),new N(0,Cs,-tr),new N(0,Cs,tr),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Zl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Du(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,wc,Sc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,Qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Ao,format:ni,colorSpace:Dn,depthBuffer:!1},s=Lu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f_(r)),this._blurMaterial=d_(r,e,t)}return s}_compileMaterial(e){const t=new be(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,s){const a=new Cn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Cu),h.toneMapping=ds,h.autoClear=!1;const d=new Ln({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),g=new be(new an,d);let _=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Cu),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Qo(s,v*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===br||e.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Du()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Iu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Qo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Mc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Pu[(s-r-1)%Pu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new be(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Is-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Is;m>Is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Is}`);const p=[];let v=0;for(let R=0;R<Is;++R){const C=R/_,b=Math.exp(-C*C/2);p.push(b),R===0?v+=b:R<m&&(v+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const x=this._sizeLods[s],A=3*x*(s>y-pr?s-y+pr:0),S=4*(this._cubeSize-x);Qo(t,A,S,3*x,2*x),c.setRenderTarget(t),c.render(u,Mc)}}function f_(i){const e=[],t=[],n=[];let s=i;const r=i-pr+1+Ru.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-pr?c=Ru[o-i+pr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let S=0;S<d;S++){const R=S%3*2/3-1,C=S>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];v.set(b,_*g*S),y.set(f,m*g*S);const M=[S,S,S,S,S,S];x.set(M,p*g*S)}const A=new Ht;A.setAttribute("position",new Sn(v,_)),A.setAttribute("uv",new Sn(y,m)),A.setAttribute("faceIndex",new Sn(x,p)),e.push(A),s>pr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Lu(i,e,t){const n=new Os(i,e,t);return n.texture.mapping=za,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function d_(i,e,t){const n=new Float32Array(Is),s=new N(0,1,0);return new ms({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wh(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Iu(){return new ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wh(),fragmentShader:`

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
		`,blending:fs,depthTest:!1,depthWrite:!1})}function Du(){return new ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fs,depthTest:!1,depthWrite:!1})}function wh(){return`

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
	`}function p_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ml||c===bl,h=c===br||c===wr;if(l||h){let u=e.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Zl(i)),u=l?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new Zl(i)),u=l?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function m_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ao("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function g_(i,e,t,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let y=0,x=v.length;y<x;y+=3){const A=v[y+0],S=v[y+1],R=v[y+2];f.push(A,S,S,R,R,A)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const A=y+0,S=y+1,R=y+2;f.push(A,S,S,R,R,A)}}else return;const m=new(Xd(f)?jd:Kd)(f,1);m.version=_;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function x_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function __(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function v_(i,e,t){const n=new WeakMap,s=new Mt;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,S=1;A>e.maxTextureSize&&(S=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*S*4*u),C=new Yd(R,A,S,u);C.type=di,C.needsUpdate=!0;const b=x*4;for(let I=0;I<u;I++){const V=p[I],B=v[I],$=y[I],Z=A*S*4*I;for(let Y=0;Y<V.count;Y++){const ne=Y*b;g===!0&&(s.fromBufferAttribute(V,Y),R[Z+ne+0]=s.x,R[Z+ne+1]=s.y,R[Z+ne+2]=s.z,R[Z+ne+3]=0),_===!0&&(s.fromBufferAttribute(B,Y),R[Z+ne+4]=s.x,R[Z+ne+5]=s.y,R[Z+ne+6]=s.z,R[Z+ne+7]=0),m===!0&&(s.fromBufferAttribute($,Y),R[Z+ne+8]=s.x,R[Z+ne+9]=s.y,R[Z+ne+10]=s.z,R[Z+ne+11]=$.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new ye(A,S)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function y_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class tp extends tn{constructor(e,t,n,s,r,o,a,c,l,h=xr){if(h!==xr&&h!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===xr&&(n=Us),n===void 0&&h===Er&&(n=Sr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:In,this.minFilter=c!==void 0?c:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const np=new tn,Nu=new tp(1,1),ip=new Yd,sp=new om,rp=new Qd,Uu=[],Ou=[],ku=new Float32Array(16),Fu=new Float32Array(9),Bu=new Float32Array(4);function Dr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Uu[s];if(r===void 0&&(r=new Float32Array(s),Uu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Va(i,e){let t=Ou[e];t===void 0&&(t=new Int32Array(e),Ou[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function M_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function b_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function w_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function S_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function E_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Bu.set(n),i.uniformMatrix2fv(this.addr,!1,Bu),sn(t,n)}}function T_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;Fu.set(n),i.uniformMatrix3fv(this.addr,!1,Fu),sn(t,n)}}function A_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(nn(t,n))return;ku.set(n),i.uniformMatrix4fv(this.addr,!1,ku),sn(t,n)}}function R_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function C_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function P_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function L_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function I_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function D_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function N_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function U_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function O_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Nu.compareFunction=Wd,r=Nu):r=np,t.setTexture2D(e||r,s)}function k_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sp,s)}function F_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||rp,s)}function B_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ip,s)}function z_(i){switch(i){case 5126:return M_;case 35664:return b_;case 35665:return w_;case 35666:return S_;case 35674:return E_;case 35675:return T_;case 35676:return A_;case 5124:case 35670:return R_;case 35667:case 35671:return C_;case 35668:case 35672:return P_;case 35669:case 35673:return L_;case 5125:return I_;case 36294:return D_;case 36295:return N_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return O_;case 35679:case 36299:case 36307:return k_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return B_}}function H_(i,e){i.uniform1fv(this.addr,e)}function V_(i,e){const t=Dr(e,this.size,2);i.uniform2fv(this.addr,t)}function G_(i,e){const t=Dr(e,this.size,3);i.uniform3fv(this.addr,t)}function W_(i,e){const t=Dr(e,this.size,4);i.uniform4fv(this.addr,t)}function X_(i,e){const t=Dr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q_(i,e){const t=Dr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Y_(i,e){const t=Dr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $_(i,e){i.uniform1iv(this.addr,e)}function K_(i,e){i.uniform2iv(this.addr,e)}function j_(i,e){i.uniform3iv(this.addr,e)}function Z_(i,e){i.uniform4iv(this.addr,e)}function J_(i,e){i.uniform1uiv(this.addr,e)}function Q_(i,e){i.uniform2uiv(this.addr,e)}function ev(i,e){i.uniform3uiv(this.addr,e)}function tv(i,e){i.uniform4uiv(this.addr,e)}function nv(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||np,r[o])}function iv(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||sp,r[o])}function sv(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||rp,r[o])}function rv(i,e,t){const n=this.cache,s=e.length,r=Va(t,s);nn(n,r)||(i.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ip,r[o])}function ov(i){switch(i){case 5126:return H_;case 35664:return V_;case 35665:return G_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return $_;case 35667:case 35671:return K_;case 35668:case 35672:return j_;case 35669:case 35673:return Z_;case 5125:return J_;case 36294:return Q_;case 36295:return ev;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return nv;case 35679:case 36299:case 36307:return iv;case 35680:case 36300:case 36308:case 36293:return sv;case 36289:case 36303:case 36311:case 36292:return rv}}class av{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=z_(t.type)}}class cv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ov(t.type)}}class lv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function zu(i,e){i.seq.push(e),i.map[e.id]=e}function hv(i,e,t){const n=i.name,s=n.length;for(Tc.lastIndex=0;;){const r=Tc.exec(n),o=Tc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){zu(t,l===void 0?new av(a,i,e):new cv(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new lv(a),zu(t,u)),t=u}}}class Ra{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Hu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const uv=37297;let fv=0;function dv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Vu=new lt;function pv(i){mt._getMatrix(Vu,mt.workingColorSpace,i);const e=`mat3( ${Vu.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Ha:return[e,"LinearTransferOETF"];case Rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Gu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+dv(i.getShaderSource(e),o)}else return s}function mv(i,e){const t=pv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gv(i,e){let t;switch(e){case g0:t="Linear";break;case x0:t="Reinhard";break;case _0:t="Cineon";break;case Pd:t="ACESFilmic";break;case y0:t="AgX";break;case M0:t="Neutral";break;case v0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ea=new N;function xv(){mt.getLuminanceCoefficients(ea);const i=ea.x.toFixed(4),e=ea.y.toFixed(4),t=ea.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _v(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function vv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function co(i){return i!==""}function Wu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Mv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(Mv,wv)}const bv=new Map;function wv(i,e){let t=ht[e];if(t===void 0){const n=bv.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Jl(t)}const Sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(i){return i.replace(Sv,Ev)}function Ev(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Tv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ad?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Av(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case br:case wr:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function Cv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cd:e="ENVMAP_BLENDING_MULTIPLY";break;case p0:e="ENVMAP_BLENDING_MIX";break;case m0:e="ENVMAP_BLENDING_ADD";break}return e}function Pv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Lv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Tv(t),l=Av(t),h=Rv(t),u=Cv(t),f=Pv(t),d=_v(t),g=vv(r),_=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(co).join(`
`),p.length>0&&(p+=`
`)):(m=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),p=[Yu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ds?"#define TONE_MAPPING":"",t.toneMapping!==ds?ht.tonemapping_pars_fragment:"",t.toneMapping!==ds?gv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,mv("linearToOutputTexel",t.outputColorSpace),xv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),o=Jl(o),o=Wu(o,t),o=Xu(o,t),a=Jl(a),a=Wu(a,t),a=Xu(a,t),o=qu(o),a=qu(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ou?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ou?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,x=v+p+a,A=Hu(s,s.VERTEX_SHADER,y),S=Hu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,A),s.attachShader(_,S),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(I){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(A).trim(),$=s.getShaderInfoLog(S).trim();let Z=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,S);else{const ne=Gu(s,A,"vertex"),z=Gu(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+ne+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||$==="")&&(Y=!1);Y&&(I.diagnostics={runnable:Z,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(A),s.deleteShader(S),C=new Ra(s,_),b=yv(s,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,uv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=S,this}let Iv=0;class Dv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Nv(e),t.set(e,n)),n}}class Nv{constructor(e){this.id=Iv++,this.code=e,this.usedTimes=0}}function Uv(i,e,t,n,s,r,o){const a=new yh,c=new Dv,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,I,V,B){const $=V.fog,Z=B.geometry,Y=b.isMeshStandardMaterial?V.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),z=ne&&ne.mapping===za?ne.image.height:null,pe=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,we=me!==void 0?me.length:0;let Be=0;Z.morphAttributes.position!==void 0&&(Be=1),Z.morphAttributes.normal!==void 0&&(Be=2),Z.morphAttributes.color!==void 0&&(Be=3);let Ve,Q,he,_e;if(pe){const _t=Mi[pe];Ve=_t.vertexShader,Q=_t.fragmentShader}else Ve=b.vertexShader,Q=b.fragmentShader,c.update(b),he=c.getVertexShaderID(b),_e=c.getFragmentShaderID(b);const ve=i.getRenderTarget(),Ne=i.state.buffers.depth.getReversed(),Fe=B.isInstancedMesh===!0,ue=B.isBatchedMesh===!0,Ce=!!b.map,j=!!b.matcap,de=!!ne,D=!!b.aoMap,ce=!!b.lightMap,K=!!b.bumpMap,fe=!!b.normalMap,re=!!b.displacementMap,Ae=!!b.emissiveMap,Se=!!b.metalnessMap,L=!!b.roughnessMap,T=b.anisotropy>0,W=b.clearcoat>0,le=b.dispersion>0,xe=b.iridescence>0,oe=b.sheen>0,Le=b.transmission>0,Te=T&&!!b.anisotropyMap,Pe=W&&!!b.clearcoatMap,it=W&&!!b.clearcoatNormalMap,G=W&&!!b.clearcoatRoughnessMap,Ee=xe&&!!b.iridescenceMap,Ue=xe&&!!b.iridescenceThicknessMap,Xe=oe&&!!b.sheenColorMap,Ie=oe&&!!b.sheenRoughnessMap,U=!!b.specularMap,ee=!!b.specularColorMap,Me=!!b.specularIntensityMap,O=Le&&!!b.transmissionMap,k=Le&&!!b.thicknessMap,F=!!b.gradientMap,H=!!b.alphaMap,ae=b.alphaTest>0,ge=!!b.alphaHash,je=!!b.extensions;let Dt=ds;b.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Dt=i.toneMapping);const Kt={shaderID:pe,shaderType:b.type,shaderName:b.name,vertexShader:Ve,fragmentShader:Q,defines:b.defines,customVertexShaderID:he,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ue,batchingColor:ue&&B._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&B.instanceColor!==null,instancingMorph:Fe&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Dn,alphaToCoverage:!!b.alphaToCoverage,map:Ce,matcap:j,envMap:de,envMapMode:de&&ne.mapping,envMapCubeUVHeight:z,aoMap:D,lightMap:ce,bumpMap:K,normalMap:fe,displacementMap:f&&re,emissiveMap:Ae,normalMapObjectSpace:fe&&b.normalMapType===A0,normalMapTangentSpace:fe&&b.normalMapType===Gd,metalnessMap:Se,roughnessMap:L,anisotropy:T,anisotropyMap:Te,clearcoat:W,clearcoatMap:Pe,clearcoatNormalMap:it,clearcoatRoughnessMap:G,dispersion:le,iridescence:xe,iridescenceMap:Ee,iridescenceThicknessMap:Ue,sheen:oe,sheenColorMap:Xe,sheenRoughnessMap:Ie,specularMap:U,specularColorMap:ee,specularIntensityMap:Me,transmission:Le,transmissionMap:O,thicknessMap:k,gradientMap:F,opaque:b.transparent===!1&&b.blending===gr&&b.alphaToCoverage===!1,alphaMap:H,alphaTest:ae,alphaHash:ge,combine:b.combine,mapUv:Ce&&_(b.map.channel),aoMapUv:D&&_(b.aoMap.channel),lightMapUv:ce&&_(b.lightMap.channel),bumpMapUv:K&&_(b.bumpMap.channel),normalMapUv:fe&&_(b.normalMap.channel),displacementMapUv:re&&_(b.displacementMap.channel),emissiveMapUv:Ae&&_(b.emissiveMap.channel),metalnessMapUv:Se&&_(b.metalnessMap.channel),roughnessMapUv:L&&_(b.roughnessMap.channel),anisotropyMapUv:Te&&_(b.anisotropyMap.channel),clearcoatMapUv:Pe&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Xe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(b.sheenRoughnessMap.channel),specularMapUv:U&&_(b.specularMap.channel),specularColorMapUv:ee&&_(b.specularColorMap.channel),specularIntensityMapUv:Me&&_(b.specularIntensityMap.channel),transmissionMapUv:O&&_(b.transmissionMap.channel),thicknessMapUv:k&&_(b.thicknessMap.channel),alphaMapUv:H&&_(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(fe||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(Ce||H),fog:!!$,useFog:b.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ne,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ce&&b.map.isVideoTexture===!0&&mt.getTransfer(b.map.colorSpace)===Rt,decodeVideoTextureEmissive:Ae&&b.emissiveMap.isVideoTexture===!0&&mt.getTransfer(b.emissiveMap.colorSpace)===Rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ot,flipSided:b.side===wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:je&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&b.extensions.multiDraw===!0||ue)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Kt.vertexUv1s=l.has(1),Kt.vertexUv2s=l.has(2),Kt.vertexUv3s=l.has(3),l.clear(),Kt}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const M=g[b.type];let I;if(M){const V=Mi[M];I=_m.clone(V.uniforms)}else I=b.uniforms;return I}function A(b,M){let I;for(let V=0,B=h.length;V<B;V++){const $=h[V];if($.cacheKey===M){I=$,++I.usedTimes;break}}return I===void 0&&(I=new Lv(i,M,b,r),h.push(I)),I}function S(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:S,releaseShaderCache:R,programs:h,dispose:C}}function Ov(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function kv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function $u(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ku(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||kv),n.length>1&&n.sort(f||$u),s.length>1&&s.sort(f||$u)}function h(){for(let u=e,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Fv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ku,i.set(n,[o])):s>=r.length?(o=new Ku,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new rt};break;case"SpotLight":t={position:new N,direction:new N,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function zv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hv=0;function Vv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gv(i){const e=new Bv,t=zv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const s=new N,r=new ot,o=new ot;function a(l){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,A=0,S=0,R=0;l.sort(Vv);for(let b=0,M=l.length;b<M;b++){const I=l[b],V=I.color,B=I.intensity,$=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=V.r*B,u+=V.g*B,f+=V.b*B;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],B);R++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,z=t.get(I);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=I.shadow.matrix,v++}n.directional[d]=Y,d++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(V).multiplyScalar(B),Y.distance=$,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[_]=Y;const ne=I.shadow;if(I.map&&(n.spotLightMap[A]=I.map,A++,ne.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[_]=ne.matrix,I.castShadow){const z=t.get(I);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=Z,x++}_++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(V).multiplyScalar(B),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=Y,m++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const ne=I.shadow,z=t.get(I);z.shadowIntensity=ne.intensity,z.shadowBias=ne.bias,z.shadowNormalBias=ne.normalBias,z.shadowRadius=ne.radius,z.shadowMapSize=ne.mapSize,z.shadowCameraNear=ne.camera.near,z.shadowCameraFar=ne.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=I.shadow.matrix,y++}n.point[g]=Y,g++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(B),Y.groundColor.copy(I.groundColor).multiplyScalar(B),n.hemi[p]=Y,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==A||C.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+A-S,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=A,C.numLightProbes=R,n.version=Hv++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function ju(i){const e=new Gv(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Wv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new ju(i),e.set(s,[a])):r>=o.length?(a=new ju(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Xv extends pi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qv extends pi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
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
}`;function Kv(i,e,t){let n=new Mh;const s=new ye,r=new ye,o=new Mt,a=new Xv({depthPacking:T0}),c=new qv,l={},h=t.maxTextureSize,u={[qi]:wn,[wn]:qi,[Ot]:Ot},f=new ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:Yv,fragmentShader:$v}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new be(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ad;let p=this.type;this.render=function(S,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),V=i.state;V.setBlending(fs),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=p!==ki&&this.type===ki,$=p===ki&&this.type!==ki;for(let Z=0,Y=S.length;Z<Y;Z++){const ne=S[Z],z=ne.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const pe=z.getFrameExtents();if(s.multiply(pe),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,z.mapSize.y=r.y)),z.map===null||B===!0||$===!0){const we=this.type!==ki?{minFilter:In,magFilter:In}:{};z.map!==null&&z.map.dispose(),z.map=new Os(s.x,s.y,we),z.map.texture.name=ne.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const me=z.getViewportCount();for(let we=0;we<me;we++){const Be=z.getViewport(we);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),V.viewport(o),z.updateMatrices(ne,we),n=z.getFrustum(),x(R,C,z.camera,ne,this.type)}z.isPointLightShadow!==!0&&this.type===ki&&v(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,I)};function v(S,R){const C=e.update(_);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Os(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,C,f,_,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,C,d,_,null)}function y(S,R,C,b){let M=null;const I=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)M=I;else if(M=C.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const V=M.uuid,B=R.uuid;let $=l[V];$===void 0&&($={},l[V]=$);let Z=$[B];Z===void 0&&(Z=M.clone(),$[B]=Z,R.addEventListener("dispose",A)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,b===ki?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=C}return M}function x(S,R,C,b,M){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===ki)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);const B=e.update(S),$=S.material;if(Array.isArray($)){const Z=B.groups;for(let Y=0,ne=Z.length;Y<ne;Y++){const z=Z[Y],pe=$[z.materialIndex];if(pe&&pe.visible){const me=y(S,pe,b,M);S.onBeforeShadow(i,S,R,C,B,me,z),i.renderBufferDirect(C,null,B,me,S,z),S.onAfterShadow(i,S,R,C,B,me,z)}}}else if($.visible){const Z=y(S,$,b,M);S.onBeforeShadow(i,S,R,C,B,Z,null),i.renderBufferDirect(C,null,B,Z,S,null),S.onAfterShadow(i,S,R,C,B,Z,null)}}const V=S.children;for(let B=0,$=V.length;B<$;B++)x(V[B],R,C,b,M)}function A(S){S.target.removeEventListener("dispose",A);for(const C in l){const b=l[C],M=S.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const jv={[pl]:ml,[gl]:vl,[xl]:yl,[Mr]:_l,[ml]:pl,[vl]:gl,[yl]:xl,[_l]:Mr};function Zv(i,e){function t(){let O=!1;const k=new Mt;let F=null;const H=new Mt(0,0,0,0);return{setMask:function(ae){F!==ae&&!O&&(i.colorMask(ae,ae,ae,ae),F=ae)},setLocked:function(ae){O=ae},setClear:function(ae,ge,je,Dt,Kt){Kt===!0&&(ae*=Dt,ge*=Dt,je*=Dt),k.set(ae,ge,je,Dt),H.equals(k)===!1&&(i.clearColor(ae,ge,je,Dt),H.copy(k))},reset:function(){O=!1,F=null,H.set(-1,0,0,0)}}}function n(){let O=!1,k=!1,F=null,H=null,ae=null;return{setReversed:function(ge){if(k!==ge){const je=e.get("EXT_clip_control");k?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const Dt=ae;ae=null,this.setClear(Dt)}k=ge},getReversed:function(){return k},setTest:function(ge){ge?ve(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(ge){F!==ge&&!O&&(i.depthMask(ge),F=ge)},setFunc:function(ge){if(k&&(ge=jv[ge]),H!==ge){switch(ge){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case xl:i.depthFunc(i.EQUAL);break;case _l:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case yl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}H=ge}},setLocked:function(ge){O=ge},setClear:function(ge){ae!==ge&&(k&&(ge=1-ge),i.clearDepth(ge),ae=ge)},reset:function(){O=!1,F=null,H=null,ae=null,k=!1}}}function s(){let O=!1,k=null,F=null,H=null,ae=null,ge=null,je=null,Dt=null,Kt=null;return{setTest:function(_t){O||(_t?ve(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(_t){k!==_t&&!O&&(i.stencilMask(_t),k=_t)},setFunc:function(_t,si,Ri){(F!==_t||H!==si||ae!==Ri)&&(i.stencilFunc(_t,si,Ri),F=_t,H=si,ae=Ri)},setOp:function(_t,si,Ri){(ge!==_t||je!==si||Dt!==Ri)&&(i.stencilOp(_t,si,Ri),ge=_t,je=si,Dt=Ri)},setLocked:function(_t){O=_t},setClear:function(_t){Kt!==_t&&(i.clearStencil(_t),Kt=_t)},reset:function(){O=!1,k=null,F=null,H=null,ae=null,ge=null,je=null,Dt=null,Kt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,A=null,S=null,R=new rt(0,0,0),C=0,b=!1,M=null,I=null,V=null,B=null,$=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ne=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=ne>=1):z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=ne>=2);let pe=null,me={};const we=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),Ve=new Mt().fromArray(we),Q=new Mt().fromArray(Be);function he(O,k,F,H){const ae=new Uint8Array(4),ge=i.createTexture();i.bindTexture(O,ge),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<F;je++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(k,0,i.RGBA,1,1,H,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(k+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return ge}const _e={};_e[i.TEXTURE_2D]=he(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=he(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=he(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=he(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ve(i.DEPTH_TEST),o.setFunc(Mr),K(!1),fe(Jh),ve(i.CULL_FACE),D(fs);function ve(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function Ne(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Fe(O,k){return u[O]!==k?(i.bindFramebuffer(O,k),u[O]=k,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=k),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=k),!0):!1}function ue(O,k){let F=d,H=!1;if(O){F=f.get(k),F===void 0&&(F=[],f.set(k,F));const ae=O.textures;if(F.length!==ae.length||F[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,je=ae.length;ge<je;ge++)F[ge]=i.COLOR_ATTACHMENT0+ge;F.length=ae.length,H=!0}}else F[0]!==i.BACK&&(F[0]=i.BACK,H=!0);H&&i.drawBuffers(F)}function Ce(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const j={[Ls]:i.FUNC_ADD,[Zp]:i.FUNC_SUBTRACT,[Jp]:i.FUNC_REVERSE_SUBTRACT};j[Qp]=i.MIN,j[e0]=i.MAX;const de={[t0]:i.ZERO,[n0]:i.ONE,[i0]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[l0]:i.SRC_ALPHA_SATURATE,[a0]:i.DST_COLOR,[r0]:i.DST_ALPHA,[s0]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[c0]:i.ONE_MINUS_DST_COLOR,[o0]:i.ONE_MINUS_DST_ALPHA,[h0]:i.CONSTANT_COLOR,[u0]:i.ONE_MINUS_CONSTANT_COLOR,[f0]:i.CONSTANT_ALPHA,[d0]:i.ONE_MINUS_CONSTANT_ALPHA};function D(O,k,F,H,ae,ge,je,Dt,Kt,_t){if(O===fs){_===!0&&(Ne(i.BLEND),_=!1);return}if(_===!1&&(ve(i.BLEND),_=!0),O!==jp){if(O!==m||_t!==b){if((p!==Ls||x!==Ls)&&(i.blendEquation(i.FUNC_ADD),p=Ls,x=Ls),_t)switch(O){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ul:i.blendFunc(i.ONE,i.ONE);break;case Qh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ul:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Qh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,y=null,A=null,S=null,R.set(0,0,0),C=0,m=O,b=_t}return}ae=ae||k,ge=ge||F,je=je||H,(k!==p||ae!==x)&&(i.blendEquationSeparate(j[k],j[ae]),p=k,x=ae),(F!==v||H!==y||ge!==A||je!==S)&&(i.blendFuncSeparate(de[F],de[H],de[ge],de[je]),v=F,y=H,A=ge,S=je),(Dt.equals(R)===!1||Kt!==C)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Kt),R.copy(Dt),C=Kt),m=O,b=!1}function ce(O,k){O.side===Ot?Ne(i.CULL_FACE):ve(i.CULL_FACE);let F=O.side===wn;k&&(F=!F),K(F),O.blending===gr&&O.transparent===!1?D(fs):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);const H=O.stencilWrite;a.setTest(H),H&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ae(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function K(O){M!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),M=O)}function fe(O){O!==$p?(ve(i.CULL_FACE),O!==I&&(O===Jh?i.cullFace(i.BACK):O===Kp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),I=O}function re(O){O!==V&&(Y&&i.lineWidth(O),V=O)}function Ae(O,k,F){O?(ve(i.POLYGON_OFFSET_FILL),(B!==k||$!==F)&&(i.polygonOffset(k,F),B=k,$=F)):Ne(i.POLYGON_OFFSET_FILL)}function Se(O){O?ve(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function L(O){O===void 0&&(O=i.TEXTURE0+Z-1),pe!==O&&(i.activeTexture(O),pe=O)}function T(O,k,F){F===void 0&&(pe===null?F=i.TEXTURE0+Z-1:F=pe);let H=me[F];H===void 0&&(H={type:void 0,texture:void 0},me[F]=H),(H.type!==O||H.texture!==k)&&(pe!==F&&(i.activeTexture(F),pe=F),i.bindTexture(O,k||_e[O]),H.type=O,H.texture=k)}function W(){const O=me[pe];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(O){Ve.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ve.copy(O))}function Ie(O){Q.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Q.copy(O))}function U(O,k){let F=l.get(k);F===void 0&&(F=new WeakMap,l.set(k,F));let H=F.get(O);H===void 0&&(H=i.getUniformBlockIndex(k,O.name),F.set(O,H))}function ee(O,k){const H=l.get(k).get(O);c.get(k)!==H&&(i.uniformBlockBinding(k,H,O.__bindingPointIndex),c.set(k,H))}function Me(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pe=null,me={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,A=null,S=null,R=new rt(0,0,0),C=0,b=!1,M=null,I=null,V=null,B=null,$=null,Ve.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ve,disable:Ne,bindFramebuffer:Fe,drawBuffers:ue,useProgram:Ce,setBlending:D,setMaterial:ce,setFlipSided:K,setCullFace:fe,setLineWidth:re,setPolygonOffset:Ae,setScissorTest:Se,activeTexture:L,bindTexture:T,unbindTexture:W,compressedTexImage2D:le,compressedTexImage3D:xe,texImage2D:Ee,texImage3D:Ue,updateUBOMapping:U,uniformBlockBinding:ee,texStorage2D:it,texStorage3D:G,texSubImage2D:oe,texSubImage3D:Le,compressedTexSubImage2D:Te,compressedTexSubImage3D:Pe,scissor:Xe,viewport:Ie,reset:Me}}function Zu(i,e,t,n){const s=Jv(n);switch(t){case Od:return i*e;case Fd:return i*e;case Bd:return i*e*2;case mh:return i*e/s.components*s.byteLength;case gh:return i*e/s.components*s.byteLength;case zd:return i*e*2/s.components*s.byteLength;case xh:return i*e*2/s.components*s.byteLength;case kd:return i*e*3/s.components*s.byteLength;case ni:return i*e*4/s.components*s.byteLength;case _h:return i*e*4/s.components*s.byteLength;case wa:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ea:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sl:case Tl:return Math.max(i,16)*Math.max(e,8)/4;case wl:case El:return Math.max(i,8)*Math.max(e,8)/2;case Al:case Rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case kl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Gl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Aa:case Wl:case Xl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Hd:case ql:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Yl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jv(i){switch(i){case Yi:case Dd:return{byteLength:1,components:1};case _o:case Nd:case Ao:return{byteLength:2,components:1};case dh:case ph:return{byteLength:2,components:4};case Us:case fh:case di:return{byteLength:4,components:1};case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Qv(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return d?new OffscreenCanvas(L,T):Mo("canvas")}function _(L,T,W){let le=1;const xe=Se(L);if((xe.width>W||xe.height>W)&&(le=W/Math.max(xe.width,xe.height)),le<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const oe=Math.floor(le*xe.width),Le=Math.floor(le*xe.height);u===void 0&&(u=g(oe,Le));const Te=T?g(oe,Le):u;return Te.width=oe,Te.height=Le,Te.getContext("2d").drawImage(L,0,0,oe,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+oe+"x"+Le+")."),Te}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,T,W,le,xe=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let oe=T;if(T===i.RED&&(W===i.FLOAT&&(oe=i.R32F),W===i.HALF_FLOAT&&(oe=i.R16F),W===i.UNSIGNED_BYTE&&(oe=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.R8UI),W===i.UNSIGNED_SHORT&&(oe=i.R16UI),W===i.UNSIGNED_INT&&(oe=i.R32UI),W===i.BYTE&&(oe=i.R8I),W===i.SHORT&&(oe=i.R16I),W===i.INT&&(oe=i.R32I)),T===i.RG&&(W===i.FLOAT&&(oe=i.RG32F),W===i.HALF_FLOAT&&(oe=i.RG16F),W===i.UNSIGNED_BYTE&&(oe=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.RG8UI),W===i.UNSIGNED_SHORT&&(oe=i.RG16UI),W===i.UNSIGNED_INT&&(oe=i.RG32UI),W===i.BYTE&&(oe=i.RG8I),W===i.SHORT&&(oe=i.RG16I),W===i.INT&&(oe=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),W===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),W===i.UNSIGNED_INT&&(oe=i.RGB32UI),W===i.BYTE&&(oe=i.RGB8I),W===i.SHORT&&(oe=i.RGB16I),W===i.INT&&(oe=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),W===i.UNSIGNED_INT&&(oe=i.RGBA32UI),W===i.BYTE&&(oe=i.RGBA8I),W===i.SHORT&&(oe=i.RGBA16I),W===i.INT&&(oe=i.RGBA32I)),T===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),T===i.RGBA){const Le=xe?Ha:mt.getTransfer(le);W===i.FLOAT&&(oe=i.RGBA32F),W===i.HALF_FLOAT&&(oe=i.RGBA16F),W===i.UNSIGNED_BYTE&&(oe=Le===Rt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function x(L,T){let W;return L?T===null||T===Us||T===Sr?W=i.DEPTH24_STENCIL8:T===di?W=i.DEPTH32F_STENCIL8:T===_o&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Us||T===Sr?W=i.DEPTH_COMPONENT24:T===di?W=i.DEPTH_COMPONENT32F:T===_o&&(W=i.DEPTH_COMPONENT16),W}function A(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==In&&L.minFilter!==qn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function S(L){const T=L.target;T.removeEventListener("dispose",S),C(T),T.isVideoTexture&&h.delete(T)}function R(L){const T=L.target;T.removeEventListener("dispose",R),M(T)}function C(L){const T=n.get(L);if(T.__webglInit===void 0)return;const W=L.source,le=f.get(W);if(le){const xe=le[T.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&b(L),Object.keys(le).length===0&&f.delete(W)}n.remove(L)}function b(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const W=L.source,le=f.get(W);delete le[T.__cacheKey],o.memory.textures--}function M(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(T.__webglFramebuffer[le]))for(let xe=0;xe<T.__webglFramebuffer[le].length;xe++)i.deleteFramebuffer(T.__webglFramebuffer[le][xe]);else i.deleteFramebuffer(T.__webglFramebuffer[le]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[le])}else{if(Array.isArray(T.__webglFramebuffer))for(let le=0;le<T.__webglFramebuffer.length;le++)i.deleteFramebuffer(T.__webglFramebuffer[le]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let le=0;le<T.__webglColorRenderbuffer.length;le++)T.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[le]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=L.textures;for(let le=0,xe=W.length;le<xe;le++){const oe=n.get(W[le]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),o.memory.textures--),n.remove(W[le])}n.remove(L)}let I=0;function V(){I=0}function B(){const L=I;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),I+=1,L}function $(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function Z(L,T){const W=n.get(L);if(L.isVideoTexture&&re(L),L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){const le=L.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(W,L,T);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function Y(L,T){const W=n.get(L);if(L.version>0&&W.__version!==L.version){Q(W,L,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function ne(L,T){const W=n.get(L);if(L.version>0&&W.__version!==L.version){Q(W,L,T);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function z(L,T){const W=n.get(L);if(L.version>0&&W.__version!==L.version){he(W,L,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const pe={[mi]:i.REPEAT,[hs]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},me={[In]:i.NEAREST,[Id]:i.NEAREST_MIPMAP_NEAREST,[oo]:i.NEAREST_MIPMAP_LINEAR,[qn]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},we={[R0]:i.NEVER,[N0]:i.ALWAYS,[C0]:i.LESS,[Wd]:i.LEQUAL,[P0]:i.EQUAL,[D0]:i.GEQUAL,[L0]:i.GREATER,[I0]:i.NOTEQUAL};function Be(L,T){if(T.type===di&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===qn||T.magFilter===ba||T.magFilter===oo||T.magFilter===Vi||T.minFilter===qn||T.minFilter===ba||T.minFilter===oo||T.minFilter===Vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,pe[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,pe[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,pe[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,me[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,me[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,we[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===In||T.minFilter!==oo&&T.minFilter!==Vi||T.type===di&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Ve(L,T){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",S));const le=T.source;let xe=f.get(le);xe===void 0&&(xe={},f.set(le,xe));const oe=$(T);if(oe!==L.__cacheKey){xe[oe]===void 0&&(xe[oe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),xe[oe].usedTimes++;const Le=xe[L.__cacheKey];Le!==void 0&&(xe[L.__cacheKey].usedTimes--,Le.usedTimes===0&&b(T)),L.__cacheKey=oe,L.__webglTexture=xe[oe].texture}return W}function Q(L,T,W){let le=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(le=i.TEXTURE_3D);const xe=Ve(L,T),oe=T.source;t.bindTexture(le,L.__webglTexture,i.TEXTURE0+W);const Le=n.get(oe);if(oe.version!==Le.__version||xe===!0){t.activeTexture(i.TEXTURE0+W);const Te=mt.getPrimaries(mt.workingColorSpace),Pe=T.colorSpace===cs?null:mt.getPrimaries(T.colorSpace),it=T.colorSpace===cs||Te===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let G=_(T.image,!1,s.maxTextureSize);G=Ae(T,G);const Ee=r.convert(T.format,T.colorSpace),Ue=r.convert(T.type);let Xe=y(T.internalFormat,Ee,Ue,T.colorSpace,T.isVideoTexture);Be(le,T);let Ie;const U=T.mipmaps,ee=T.isVideoTexture!==!0,Me=Le.__version===void 0||xe===!0,O=oe.dataReady,k=A(T,G);if(T.isDepthTexture)Xe=x(T.format===Er,T.type),Me&&(ee?t.texStorage2D(i.TEXTURE_2D,1,Xe,G.width,G.height):t.texImage2D(i.TEXTURE_2D,0,Xe,G.width,G.height,0,Ee,Ue,null));else if(T.isDataTexture)if(U.length>0){ee&&Me&&t.texStorage2D(i.TEXTURE_2D,k,Xe,U[0].width,U[0].height);for(let F=0,H=U.length;F<H;F++)Ie=U[F],ee?O&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Ee,Ue,Ie.data):t.texImage2D(i.TEXTURE_2D,F,Xe,Ie.width,Ie.height,0,Ee,Ue,Ie.data);T.generateMipmaps=!1}else ee?(Me&&t.texStorage2D(i.TEXTURE_2D,k,Xe,G.width,G.height),O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,G.width,G.height,Ee,Ue,G.data)):t.texImage2D(i.TEXTURE_2D,0,Xe,G.width,G.height,0,Ee,Ue,G.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ee&&Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,k,Xe,U[0].width,U[0].height,G.depth);for(let F=0,H=U.length;F<H;F++)if(Ie=U[F],T.format!==ni)if(Ee!==null)if(ee){if(O)if(T.layerUpdates.size>0){const ae=Zu(Ie.width,Ie.height,T.format,T.type);for(const ge of T.layerUpdates){const je=Ie.data.subarray(ge*ae/Ie.data.BYTES_PER_ELEMENT,(ge+1)*ae/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,ge,Ie.width,Ie.height,1,Ee,je)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Ie.width,Ie.height,G.depth,Ee,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,Xe,Ie.width,Ie.height,G.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Ie.width,Ie.height,G.depth,Ee,Ue,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,Xe,Ie.width,Ie.height,G.depth,0,Ee,Ue,Ie.data)}else{ee&&Me&&t.texStorage2D(i.TEXTURE_2D,k,Xe,U[0].width,U[0].height);for(let F=0,H=U.length;F<H;F++)Ie=U[F],T.format!==ni?Ee!==null?ee?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Ee,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,F,Xe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?O&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Ee,Ue,Ie.data):t.texImage2D(i.TEXTURE_2D,F,Xe,Ie.width,Ie.height,0,Ee,Ue,Ie.data)}else if(T.isDataArrayTexture)if(ee){if(Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,k,Xe,G.width,G.height,G.depth),O)if(T.layerUpdates.size>0){const F=Zu(G.width,G.height,T.format,T.type);for(const H of T.layerUpdates){const ae=G.data.subarray(H*F/G.data.BYTES_PER_ELEMENT,(H+1)*F/G.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,H,G.width,G.height,1,Ee,Ue,ae)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,Ee,Ue,G.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Xe,G.width,G.height,G.depth,0,Ee,Ue,G.data);else if(T.isData3DTexture)ee?(Me&&t.texStorage3D(i.TEXTURE_3D,k,Xe,G.width,G.height,G.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,Ee,Ue,G.data)):t.texImage3D(i.TEXTURE_3D,0,Xe,G.width,G.height,G.depth,0,Ee,Ue,G.data);else if(T.isFramebufferTexture){if(Me)if(ee)t.texStorage2D(i.TEXTURE_2D,k,Xe,G.width,G.height);else{let F=G.width,H=G.height;for(let ae=0;ae<k;ae++)t.texImage2D(i.TEXTURE_2D,ae,Xe,F,H,0,Ee,Ue,null),F>>=1,H>>=1}}else if(U.length>0){if(ee&&Me){const F=Se(U[0]);t.texStorage2D(i.TEXTURE_2D,k,Xe,F.width,F.height)}for(let F=0,H=U.length;F<H;F++)Ie=U[F],ee?O&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Ee,Ue,Ie):t.texImage2D(i.TEXTURE_2D,F,Xe,Ee,Ue,Ie);T.generateMipmaps=!1}else if(ee){if(Me){const F=Se(G);t.texStorage2D(i.TEXTURE_2D,k,Xe,F.width,F.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,Ue,G)}else t.texImage2D(i.TEXTURE_2D,0,Xe,Ee,Ue,G);m(T)&&p(le),Le.__version=oe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function he(L,T,W){if(T.image.length!==6)return;const le=Ve(L,T),xe=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);const oe=n.get(xe);if(xe.version!==oe.__version||le===!0){t.activeTexture(i.TEXTURE0+W);const Le=mt.getPrimaries(mt.workingColorSpace),Te=T.colorSpace===cs?null:mt.getPrimaries(T.colorSpace),Pe=T.colorSpace===cs||Le===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const it=T.isCompressedTexture||T.image[0].isCompressedTexture,G=T.image[0]&&T.image[0].isDataTexture,Ee=[];for(let H=0;H<6;H++)!it&&!G?Ee[H]=_(T.image[H],!0,s.maxCubemapSize):Ee[H]=G?T.image[H].image:T.image[H],Ee[H]=Ae(T,Ee[H]);const Ue=Ee[0],Xe=r.convert(T.format,T.colorSpace),Ie=r.convert(T.type),U=y(T.internalFormat,Xe,Ie,T.colorSpace),ee=T.isVideoTexture!==!0,Me=oe.__version===void 0||le===!0,O=xe.dataReady;let k=A(T,Ue);Be(i.TEXTURE_CUBE_MAP,T);let F;if(it){ee&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,k,U,Ue.width,Ue.height);for(let H=0;H<6;H++){F=Ee[H].mipmaps;for(let ae=0;ae<F.length;ae++){const ge=F[ae];T.format!==ni?Xe!==null?ee?O&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ae,0,0,ge.width,ge.height,Xe,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ae,U,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ae,0,0,ge.width,ge.height,Xe,Ie,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ae,U,ge.width,ge.height,0,Xe,Ie,ge.data)}}}else{if(F=T.mipmaps,ee&&Me){F.length>0&&k++;const H=Se(Ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,k,U,H.width,H.height)}for(let H=0;H<6;H++)if(G){ee?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Ee[H].width,Ee[H].height,Xe,Ie,Ee[H].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,U,Ee[H].width,Ee[H].height,0,Xe,Ie,Ee[H].data);for(let ae=0;ae<F.length;ae++){const je=F[ae].image[H].image;ee?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ae+1,0,0,je.width,je.height,Xe,Ie,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ae+1,U,je.width,je.height,0,Xe,Ie,je.data)}}else{ee?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Xe,Ie,Ee[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,U,Xe,Ie,Ee[H]);for(let ae=0;ae<F.length;ae++){const ge=F[ae];ee?O&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ae+1,0,0,Xe,Ie,ge.image[H]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ae+1,U,Xe,Ie,ge.image[H])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),oe.__version=xe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function _e(L,T,W,le,xe,oe){const Le=r.convert(W.format,W.colorSpace),Te=r.convert(W.type),Pe=y(W.internalFormat,Le,Te,W.colorSpace),it=n.get(T),G=n.get(W);if(G.__renderTarget=T,!it.__hasExternalTextures){const Ee=Math.max(1,T.width>>oe),Ue=Math.max(1,T.height>>oe);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,oe,Pe,Ee,Ue,T.depth,0,Le,Te,null):t.texImage2D(xe,oe,Pe,Ee,Ue,0,Le,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,xe,G.__webglTexture,0,K(T)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,xe,G.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ve(L,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const le=T.depthTexture,xe=le&&le.isDepthTexture?le.type:null,oe=x(T.stencilBuffer,xe),Le=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=K(T);fe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,oe,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,oe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,oe,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,L)}else{const le=T.textures;for(let xe=0;xe<le.length;xe++){const oe=le[xe],Le=r.convert(oe.format,oe.colorSpace),Te=r.convert(oe.type),Pe=y(oe.internalFormat,Le,Te,oe.colorSpace),it=K(T);W&&fe(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,Pe,T.width,T.height):fe(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,Pe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const le=n.get(T.depthTexture);le.__renderTarget=T,(!le.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z(T.depthTexture,0);const xe=le.__webglTexture,oe=K(T);if(T.depthTexture.format===xr)fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(T.depthTexture.format===Er)fe(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Fe(L){const T=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const le=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),le){const xe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,le.removeEventListener("dispose",xe)};le.addEventListener("dispose",xe),T.__depthDisposeCallback=xe}T.__boundDepthTexture=le}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ne(T.__webglFramebuffer,L)}else if(W){T.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[le]),T.__webglDepthbuffer[le]===void 0)T.__webglDepthbuffer[le]=i.createRenderbuffer(),ve(T.__webglDepthbuffer[le],L,!1);else{const xe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=T.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),ve(T.__webglDepthbuffer,L,!1);else{const le=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,xe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(L,T,W){const le=n.get(L);T!==void 0&&_e(le.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Fe(L)}function Ce(L){const T=L.texture,W=n.get(L),le=n.get(T);L.addEventListener("dispose",R);const xe=L.textures,oe=L.isWebGLCubeRenderTarget===!0,Le=xe.length>1;if(Le||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=T.version,o.memory.textures++),oe){W.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[Te]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)W.__webglFramebuffer[Te][Pe]=i.createFramebuffer()}else W.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let Te=0;Te<T.mipmaps.length;Te++)W.__webglFramebuffer[Te]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Le)for(let Te=0,Pe=xe.length;Te<Pe;Te++){const it=n.get(xe[Te]);it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&fe(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Te=0;Te<xe.length;Te++){const Pe=xe[Te];W.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Te]);const it=r.convert(Pe.format,Pe.colorSpace),G=r.convert(Pe.type),Ee=y(Pe.internalFormat,it,G,Pe.colorSpace,L.isXRRenderTarget===!0),Ue=K(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ee,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,W.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ve(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Be(i.TEXTURE_CUBE_MAP,T);for(let Te=0;Te<6;Te++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)_e(W.__webglFramebuffer[Te][Pe],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Pe);else _e(W.__webglFramebuffer[Te],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);m(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let Te=0,Pe=xe.length;Te<Pe;Te++){const it=xe[Te],G=n.get(it);t.bindTexture(i.TEXTURE_2D,G.__webglTexture),Be(i.TEXTURE_2D,it),_e(W.__webglFramebuffer,L,it,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,0),m(it)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,le.__webglTexture),Be(Te,T),T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)_e(W.__webglFramebuffer[Pe],L,T,i.COLOR_ATTACHMENT0,Te,Pe);else _e(W.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,Te,0);m(T)&&p(Te),t.unbindTexture()}L.depthBuffer&&Fe(L)}function j(L){const T=L.textures;for(let W=0,le=T.length;W<le;W++){const xe=T[W];if(m(xe)){const oe=v(L),Le=n.get(xe).__webglTexture;t.bindTexture(oe,Le),p(oe),t.unbindTexture()}}}const de=[],D=[];function ce(L){if(L.samples>0){if(fe(L)===!1){const T=L.textures,W=L.width,le=L.height;let xe=i.COLOR_BUFFER_BIT;const oe=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(L),Te=T.length>1;if(Te)for(let Pe=0;Pe<T.length;Pe++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Pe=0;Pe<T.length;Pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]);const it=n.get(T[Pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,W,le,0,0,W,le,xe,i.NEAREST),c===!0&&(de.length=0,D.length=0,de.push(i.COLOR_ATTACHMENT0+Pe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(de.push(oe),D.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let Pe=0;Pe<T.length;Pe++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Pe]);const it=n.get(T[Pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pe,i.TEXTURE_2D,it,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function K(L){return Math.min(s.maxSamples,L.samples)}function fe(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function re(L){const T=o.render.frame;h.get(L)!==T&&(h.set(L,T),L.update())}function Ae(L,T){const W=L.colorSpace,le=L.format,xe=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Dn&&W!==cs&&(mt.getTransfer(W)===Rt?(le!==ni||xe!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),T}function Se(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=V,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=ne,this.setTextureCube=z,this.rebindTextures=ue,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=fe}function e1(i,e){function t(n,s=cs){let r;const o=mt.getTransfer(s);if(n===Yi)return i.UNSIGNED_BYTE;if(n===dh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ph)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dd)return i.BYTE;if(n===Nd)return i.SHORT;if(n===_o)return i.UNSIGNED_SHORT;if(n===fh)return i.INT;if(n===Us)return i.UNSIGNED_INT;if(n===di)return i.FLOAT;if(n===Ao)return i.HALF_FLOAT;if(n===Od)return i.ALPHA;if(n===kd)return i.RGB;if(n===ni)return i.RGBA;if(n===Fd)return i.LUMINANCE;if(n===Bd)return i.LUMINANCE_ALPHA;if(n===xr)return i.DEPTH_COMPONENT;if(n===Er)return i.DEPTH_STENCIL;if(n===mh)return i.RED;if(n===gh)return i.RED_INTEGER;if(n===zd)return i.RG;if(n===xh)return i.RG_INTEGER;if(n===_h)return i.RGBA_INTEGER;if(n===wa||n===Sa||n===Ea||n===Ta)if(o===Rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wl||n===Sl||n===El||n===Tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===El)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Al||n===Rl||n===Cl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Al||n===Rl)return o===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Ll||n===Il||n===Dl||n===Nl||n===Ul||n===Ol||n===kl||n===Fl||n===Bl||n===zl||n===Hl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ll)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ul)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ol)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Gl)return o===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Aa||n===Wl||n===Xl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Aa)return o===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hd||n===ql||n===Yl||n===$l)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Aa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ql)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class t1 extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tt extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const n1={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(n1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const i1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s1=`
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

}`;class r1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new tn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ms({vertexShader:i1,fragmentShader:s1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new be(new ut(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class o1 extends zs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new r1,m=t.getContextAttributes();let p=null,v=null;const y=[],x=[],A=new ye;let S=null;const R=new Cn;R.viewport=new Mt;const C=new Cn;C.viewport=new Mt;const b=[R,C],M=new t1;let I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let he=y[Q];return he===void 0&&(he=new Ac,y[Q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Q){let he=y[Q];return he===void 0&&(he=new Ac,y[Q]=he),he.getGripSpace()},this.getHand=function(Q){let he=y[Q];return he===void 0&&(he=new Ac,y[Q]=he),he.getHandSpace()};function B(Q){const he=x.indexOf(Q.inputSource);if(he===-1)return;const _e=y[he];_e!==void 0&&(_e.update(Q.inputSource,Q.frame,l||o),_e.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",Z);for(let Q=0;Q<y.length;Q++){const he=x[Q];he!==null&&(x[Q]=null,y[Q].disconnect(he))}I=null,V=null,_.reset(),e.setRenderTarget(p),d=null,f=null,u=null,s=null,v=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",$),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){const he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Os(d.framebufferWidth,d.framebufferHeight,{format:ni,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,_e=null,ve=null;m.depth&&(ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?Er:xr,_e=m.stencil?Sr:Us);const Ne={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};u=new XRWebGLBinding(s,t),f=u.createProjectionLayer(Ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Os(f.textureWidth,f.textureHeight,{format:ni,type:Yi,depthTexture:new tp(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(Q){for(let he=0;he<Q.removed.length;he++){const _e=Q.removed[he],ve=x.indexOf(_e);ve>=0&&(x[ve]=null,y[ve].disconnect(_e))}for(let he=0;he<Q.added.length;he++){const _e=Q.added[he];let ve=x.indexOf(_e);if(ve===-1){for(let Fe=0;Fe<y.length;Fe++)if(Fe>=x.length){x.push(_e),ve=Fe;break}else if(x[Fe]===null){x[Fe]=_e,ve=Fe;break}if(ve===-1)break}const Ne=y[ve];Ne&&Ne.connect(_e)}}const Y=new N,ne=new N;function z(Q,he,_e){Y.setFromMatrixPosition(he.matrixWorld),ne.setFromMatrixPosition(_e.matrixWorld);const ve=Y.distanceTo(ne),Ne=he.projectionMatrix.elements,Fe=_e.projectionMatrix.elements,ue=Ne[14]/(Ne[10]-1),Ce=Ne[14]/(Ne[10]+1),j=(Ne[9]+1)/Ne[5],de=(Ne[9]-1)/Ne[5],D=(Ne[8]-1)/Ne[0],ce=(Fe[8]+1)/Fe[0],K=ue*D,fe=ue*ce,re=ve/(-D+ce),Ae=re*-D;if(he.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ae),Q.translateZ(re),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ne[10]===-1)Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Se=ue+re,L=Ce+re,T=K-Ae,W=fe+(ve-Ae),le=j*Ce/L*Se,xe=de*Ce/L*Se;Q.projectionMatrix.makePerspective(T,W,le,xe,Se,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function pe(Q,he){he===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(he.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let he=Q.near,_e=Q.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),M.near=C.near=R.near=he,M.far=C.far=R.far=_e,(I!==M.near||V!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,V=M.far),R.layers.mask=Q.layers.mask|2,C.layers.mask=Q.layers.mask|4,M.layers.mask=R.layers.mask|C.layers.mask;const ve=Q.parent,Ne=M.cameras;pe(M,ve);for(let Fe=0;Fe<Ne.length;Fe++)pe(Ne[Fe],ve);Ne.length===2?z(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),me(Q,M,ve)};function me(Q,he,_e){_e===null?Q.matrix.copy(he.matrixWorld):(Q.matrix.copy(_e.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(he.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(he.projectionMatrix),Q.projectionMatrixInverse.copy(he.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Tr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let we=null;function Be(Q,he){if(h=he.getViewerPose(l||o),g=he,h!==null){const _e=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let ve=!1;_e.length!==M.cameras.length&&(M.cameras.length=0,ve=!0);for(let Fe=0;Fe<_e.length;Fe++){const ue=_e[Fe];let Ce=null;if(d!==null)Ce=d.getViewport(ue);else{const de=u.getViewSubImage(f,ue);Ce=de.viewport,Fe===0&&(e.setRenderTargetTextures(v,de.colorTexture,f.ignoreDepthValues?void 0:de.depthStencilTexture),e.setRenderTarget(v))}let j=b[Fe];j===void 0&&(j=new Cn,j.layers.enable(Fe),j.viewport=new Mt,b[Fe]=j),j.matrix.fromArray(ue.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ue.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Fe===0&&(M.matrix.copy(j.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ve===!0&&M.cameras.push(j)}const Ne=s.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const Fe=u.getDepthInformation(_e[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,s.renderState)}}for(let _e=0;_e<y.length;_e++){const ve=x[_e],Ne=y[_e];ve!==null&&Ne!==void 0&&Ne.update(ve,he,l||o)}we&&we(Q,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}const Ve=new ep;Ve.setAnimationLoop(Be),this.setAnimationLoop=function(Q){we=Q},this.dispose=function(){}}}const bs=new En,a1=new ot;function c1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,bs.copy(x),bs.x*=-1,bs.y*=-1,bs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),m.envMapRotation.value.setFromMatrix4(a1.makeRotationFromEuler(bs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function l(v,y){let x=s[v.id];x===void 0&&(g(v),x=h(v),s[v.id]=x,v.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(v,A);const S=e.render.frame;r[v.id]!==S&&(f(v),r[v.id]=S)}function h(v){const y=u();v.__bindingPointIndex=y;const x=i.createBuffer(),A=v.__size,S=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,A,S),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],x=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let S=0,R=x.length;S<R;S++){const C=Array.isArray(x[S])?x[S]:[x[S]];for(let b=0,M=C.length;b<M;b++){const I=C[b];if(d(I,S,b,A)===!0){const V=I.__offset,B=Array.isArray(I.value)?I.value:[I.value];let $=0;for(let Z=0;Z<B.length;Z++){const Y=B[Z],ne=_(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,V+$,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,$),$+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,x,A){const S=v.value,R=y+"_"+x;if(A[R]===void 0)return typeof S=="number"||typeof S=="boolean"?A[R]=S:A[R]=S.clone(),!0;{const C=A[R];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return A[R]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(v){const y=v.uniforms;let x=0;const A=16;for(let R=0,C=y.length;R<C;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,I=b.length;M<I;M++){const V=b[M],B=Array.isArray(V.value)?V.value:[V.value];for(let $=0,Z=B.length;$<Z;$++){const Y=B[$],ne=_(Y),z=x%A,pe=z%ne.boundary,me=z+pe;x+=pe,me!==0&&A-me<ne.storage&&(x+=A-me),V.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=ne.storage}}}const S=x%A;return S>0&&(x+=A-S),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class h1{constructor(e={}){const{canvas:t=J0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this.toneMapping=ds,this.toneMappingExposure=1;const x=this;let A=!1,S=0,R=0,C=null,b=-1,M=null;const I=new Mt,V=new Mt;let B=null;const $=new rt(0);let Z=0,Y=t.width,ne=t.height,z=1,pe=null,me=null;const we=new Mt(0,0,Y,ne),Be=new Mt(0,0,Y,ne);let Ve=!1;const Q=new Mh;let he=!1,_e=!1;const ve=new ot,Ne=new ot,Fe=new N,ue=new Mt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function de(){return C===null?z:1}let D=n;function ce(P,X){return t.getContext(P,X)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uh}`),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ge,!1),D===null){const X="webgl2";if(D=ce(X,P),D===null)throw ce(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let K,fe,re,Ae,Se,L,T,W,le,xe,oe,Le,Te,Pe,it,G,Ee,Ue,Xe,Ie,U,ee,Me,O;function k(){K=new m_(D),K.init(),ee=new e1(D,K),fe=new l_(D,K,e,ee),re=new Zv(D,K),fe.reverseDepthBuffer&&f&&re.buffers.depth.setReversed(!0),Ae=new __(D),Se=new Ov,L=new Qv(D,K,re,Se,fe,ee,Ae),T=new u_(x),W=new p_(x),le=new Em(D),Me=new a_(D,le),xe=new g_(D,le,Ae,Me),oe=new y_(D,xe,le,Ae),Xe=new v_(D,fe,L),G=new h_(Se),Le=new Uv(x,T,W,K,fe,Me,G),Te=new c1(x,Se),Pe=new Fv,it=new Wv(K),Ue=new o_(x,T,W,re,oe,d,c),Ee=new Kv(x,oe,fe),O=new l1(D,Ae,fe,re),Ie=new c_(D,K,Ae),U=new x_(D,K,Ae),Ae.programs=Le.programs,x.capabilities=fe,x.extensions=K,x.properties=Se,x.renderLists=Pe,x.shadowMap=Ee,x.state=re,x.info=Ae}k();const F=new o1(x,D);this.xr=F,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=K.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=K.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(Y,ne,!1))},this.getSize=function(P){return P.set(Y,ne)},this.setSize=function(P,X,te=!0){if(F.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=P,ne=X,t.width=Math.floor(P*z),t.height=Math.floor(X*z),te===!0&&(t.style.width=P+"px",t.style.height=X+"px"),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set(Y*z,ne*z).floor()},this.setDrawingBufferSize=function(P,X,te){Y=P,ne=X,z=te,t.width=Math.floor(P*te),t.height=Math.floor(X*te),this.setViewport(0,0,P,X)},this.getCurrentViewport=function(P){return P.copy(I)},this.getViewport=function(P){return P.copy(we)},this.setViewport=function(P,X,te,ie){P.isVector4?we.set(P.x,P.y,P.z,P.w):we.set(P,X,te,ie),re.viewport(I.copy(we).multiplyScalar(z).round())},this.getScissor=function(P){return P.copy(Be)},this.setScissor=function(P,X,te,ie){P.isVector4?Be.set(P.x,P.y,P.z,P.w):Be.set(P,X,te,ie),re.scissor(V.copy(Be).multiplyScalar(z).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(P){re.setScissorTest(Ve=P)},this.setOpaqueSort=function(P){pe=P},this.setTransparentSort=function(P){me=P},this.getClearColor=function(P){return P.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(P=!0,X=!0,te=!0){let ie=0;if(P){let q=!1;if(C!==null){const Re=C.texture.format;q=Re===_h||Re===xh||Re===gh}if(q){const Re=C.texture.type,ke=Re===Yi||Re===Us||Re===_o||Re===Sr||Re===dh||Re===ph,qe=Ue.getClearColor(),Ye=Ue.getClearAlpha(),at=qe.r,ct=qe.g,$e=qe.b;ke?(g[0]=at,g[1]=ct,g[2]=$e,g[3]=Ye,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=at,_[1]=ct,_[2]=$e,_[3]=Ye,D.clearBufferiv(D.COLOR,0,_))}else ie|=D.COLOR_BUFFER_BIT}X&&(ie|=D.DEPTH_BUFFER_BIT),te&&(ie|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Pe.dispose(),it.dispose(),Se.dispose(),T.dispose(),W.dispose(),oe.dispose(),Me.dispose(),O.dispose(),Le.dispose(),F.dispose(),F.removeEventListener("sessionstart",Wh),F.removeEventListener("sessionend",Xh),gs.stop()};function H(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=Ae.autoReset,X=Ee.enabled,te=Ee.autoUpdate,ie=Ee.needsUpdate,q=Ee.type;k(),Ae.autoReset=P,Ee.enabled=X,Ee.autoUpdate=te,Ee.needsUpdate=ie,Ee.type=q}function ge(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function je(P){const X=P.target;X.removeEventListener("dispose",je),Dt(X)}function Dt(P){Kt(P),Se.remove(P)}function Kt(P){const X=Se.get(P).programs;X!==void 0&&(X.forEach(function(te){Le.releaseProgram(te)}),P.isShaderMaterial&&Le.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,te,ie,q,Re){X===null&&(X=Ce);const ke=q.isMesh&&q.matrixWorld.determinant()<0,qe=Xp(P,X,te,ie,q);re.setMaterial(ie,ke);let Ye=te.index,at=1;if(ie.wireframe===!0){if(Ye=xe.getWireframeAttribute(te),Ye===void 0)return;at=2}const ct=te.drawRange,$e=te.attributes.position;let xt=ct.start*at,Nt=(ct.start+ct.count)*at;Re!==null&&(xt=Math.max(xt,Re.start*at),Nt=Math.min(Nt,(Re.start+Re.count)*at)),Ye!==null?(xt=Math.max(xt,0),Nt=Math.min(Nt,Ye.count)):$e!=null&&(xt=Math.max(xt,0),Nt=Math.min(Nt,$e.count));const Ft=Nt-xt;if(Ft<0||Ft===1/0)return;Me.setup(q,ie,qe,te,Ye);let On,bt=Ie;if(Ye!==null&&(On=le.get(Ye),bt=U,bt.setIndex(On)),q.isMesh)ie.wireframe===!0?(re.setLineWidth(ie.wireframeLinewidth*de()),bt.setMode(D.LINES)):bt.setMode(D.TRIANGLES);else if(q.isLine){let Ze=ie.linewidth;Ze===void 0&&(Ze=1),re.setLineWidth(Ze*de()),q.isLineSegments?bt.setMode(D.LINES):q.isLineLoop?bt.setMode(D.LINE_LOOP):bt.setMode(D.LINE_STRIP)}else q.isPoints?bt.setMode(D.POINTS):q.isSprite&&bt.setMode(D.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)bt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))bt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ze=q._multiDrawStarts,Ci=q._multiDrawCounts,wt=q._multiDrawCount,ri=Ye?le.get(Ye).bytesPerElement:1,Hs=Se.get(ie).currentProgram.getUniforms();for(let zn=0;zn<wt;zn++)Hs.setValue(D,"_gl_DrawID",zn),bt.render(Ze[zn]/ri,Ci[zn])}else if(q.isInstancedMesh)bt.renderInstances(xt,Ft,q.count);else if(te.isInstancedBufferGeometry){const Ze=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ci=Math.min(te.instanceCount,Ze);bt.renderInstances(xt,Ft,Ci)}else bt.render(xt,Ft)};function _t(P,X,te){P.transparent===!0&&P.side===Ot&&P.forceSinglePass===!1?(P.side=wn,P.needsUpdate=!0,No(P,X,te),P.side=qi,P.needsUpdate=!0,No(P,X,te),P.side=Ot):No(P,X,te)}this.compile=function(P,X,te=null){te===null&&(te=P),p=it.get(te),p.init(X),y.push(p),te.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),P!==te&&P.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ie=new Set;return P.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Re=q.material;if(Re)if(Array.isArray(Re))for(let ke=0;ke<Re.length;ke++){const qe=Re[ke];_t(qe,te,q),ie.add(qe)}else _t(Re,te,q),ie.add(Re)}),y.pop(),p=null,ie},this.compileAsync=function(P,X,te=null){const ie=this.compile(P,X,te);return new Promise(q=>{function Re(){if(ie.forEach(function(ke){Se.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){q(P);return}setTimeout(Re,10)}K.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let si=null;function Ri(P){si&&si(P)}function Wh(){gs.stop()}function Xh(){gs.start()}const gs=new ep;gs.setAnimationLoop(Ri),typeof self<"u"&&gs.setContext(self),this.setAnimationLoop=function(P){si=P,F.setAnimationLoop(P),P===null?gs.stop():gs.start()},F.addEventListener("sessionstart",Wh),F.addEventListener("sessionend",Xh),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),F.enabled===!0&&F.isPresenting===!0&&(F.cameraAutoUpdate===!0&&F.updateCamera(X),X=F.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,X,C),p=it.get(P,y.length),p.init(X),y.push(p),Ne.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Q.setFromProjectionMatrix(Ne),_e=this.localClippingEnabled,he=G.init(this.clippingPlanes,_e),m=Pe.get(P,v.length),m.init(),v.push(m),F.enabled===!0&&F.isPresenting===!0){const Re=x.xr.getDepthSensingMesh();Re!==null&&Qa(Re,X,-1/0,x.sortObjects)}Qa(P,X,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(pe,me),j=F.enabled===!1||F.isPresenting===!1||F.hasDepthSensing()===!1,j&&Ue.addToRenderList(m,P),this.info.render.frame++,he===!0&&G.beginShadows();const te=p.state.shadowsArray;Ee.render(te,P,X),he===!0&&G.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){const Re=X.cameras;if(q.length>0)for(let ke=0,qe=Re.length;ke<qe;ke++){const Ye=Re[ke];Yh(ie,q,P,Ye)}j&&Ue.render(P);for(let ke=0,qe=Re.length;ke<qe;ke++){const Ye=Re[ke];qh(m,P,Ye,Ye.viewport)}}else q.length>0&&Yh(ie,q,P,X),j&&Ue.render(P),qh(m,P,X);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(x,P,X),Me.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],he===!0&&G.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Qa(P,X,te,ie){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Q.intersectsSprite(P)){ie&&ue.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ne);const ke=oe.update(P),qe=P.material;qe.visible&&m.push(P,ke,qe,te,ue.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Q.intersectsObject(P))){const ke=oe.update(P),qe=P.material;if(ie&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ue.copy(P.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ue.copy(ke.boundingSphere.center)),ue.applyMatrix4(P.matrixWorld).applyMatrix4(Ne)),Array.isArray(qe)){const Ye=ke.groups;for(let at=0,ct=Ye.length;at<ct;at++){const $e=Ye[at],xt=qe[$e.materialIndex];xt&&xt.visible&&m.push(P,ke,xt,te,ue.z,$e)}}else qe.visible&&m.push(P,ke,qe,te,ue.z,null)}}const Re=P.children;for(let ke=0,qe=Re.length;ke<qe;ke++)Qa(Re[ke],X,te,ie)}function qh(P,X,te,ie){const q=P.opaque,Re=P.transmissive,ke=P.transparent;p.setupLightsView(te),he===!0&&G.setGlobalState(x.clippingPlanes,te),ie&&re.viewport(I.copy(ie)),q.length>0&&Do(q,X,te),Re.length>0&&Do(Re,X,te),ke.length>0&&Do(ke,X,te),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Yh(P,X,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ie.id]===void 0&&(p.state.transmissionRenderTarget[ie.id]=new Os(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Ao:Yi,minFilter:Vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const Re=p.state.transmissionRenderTarget[ie.id],ke=ie.viewport||I;Re.setSize(ke.z,ke.w);const qe=x.getRenderTarget();x.setRenderTarget(Re),x.getClearColor($),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),j&&Ue.render(te);const Ye=x.toneMapping;x.toneMapping=ds;const at=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),p.setupLightsView(ie),he===!0&&G.setGlobalState(x.clippingPlanes,ie),Do(P,te,ie),L.updateMultisampleRenderTarget(Re),L.updateRenderTargetMipmap(Re),K.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let $e=0,xt=X.length;$e<xt;$e++){const Nt=X[$e],Ft=Nt.object,On=Nt.geometry,bt=Nt.material,Ze=Nt.group;if(bt.side===Ot&&Ft.layers.test(ie.layers)){const Ci=bt.side;bt.side=wn,bt.needsUpdate=!0,$h(Ft,te,ie,On,bt,Ze),bt.side=Ci,bt.needsUpdate=!0,ct=!0}}ct===!0&&(L.updateMultisampleRenderTarget(Re),L.updateRenderTargetMipmap(Re))}x.setRenderTarget(qe),x.setClearColor($,Z),at!==void 0&&(ie.viewport=at),x.toneMapping=Ye}function Do(P,X,te){const ie=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Re=P.length;q<Re;q++){const ke=P[q],qe=ke.object,Ye=ke.geometry,at=ie===null?ke.material:ie,ct=ke.group;qe.layers.test(te.layers)&&$h(qe,X,te,Ye,at,ct)}}function $h(P,X,te,ie,q,Re){P.onBeforeRender(x,X,te,ie,q,Re),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),q.onBeforeRender(x,X,te,ie,P,Re),q.transparent===!0&&q.side===Ot&&q.forceSinglePass===!1?(q.side=wn,q.needsUpdate=!0,x.renderBufferDirect(te,X,ie,q,P,Re),q.side=qi,q.needsUpdate=!0,x.renderBufferDirect(te,X,ie,q,P,Re),q.side=Ot):x.renderBufferDirect(te,X,ie,q,P,Re),P.onAfterRender(x,X,te,ie,q,Re)}function No(P,X,te){X.isScene!==!0&&(X=Ce);const ie=Se.get(P),q=p.state.lights,Re=p.state.shadowsArray,ke=q.state.version,qe=Le.getParameters(P,q.state,Re,X,te),Ye=Le.getProgramCacheKey(qe);let at=ie.programs;ie.environment=P.isMeshStandardMaterial?X.environment:null,ie.fog=X.fog,ie.envMap=(P.isMeshStandardMaterial?W:T).get(P.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,at===void 0&&(P.addEventListener("dispose",je),at=new Map,ie.programs=at);let ct=at.get(Ye);if(ct!==void 0){if(ie.currentProgram===ct&&ie.lightsStateVersion===ke)return jh(P,qe),ct}else qe.uniforms=Le.getUniforms(P),P.onBeforeCompile(qe,x),ct=Le.acquireProgram(qe,Ye),at.set(Ye,ct),ie.uniforms=qe.uniforms;const $e=ie.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&($e.clippingPlanes=G.uniform),jh(P,qe),ie.needsLights=Yp(P),ie.lightsStateVersion=ke,ie.needsLights&&($e.ambientLightColor.value=q.state.ambient,$e.lightProbe.value=q.state.probe,$e.directionalLights.value=q.state.directional,$e.directionalLightShadows.value=q.state.directionalShadow,$e.spotLights.value=q.state.spot,$e.spotLightShadows.value=q.state.spotShadow,$e.rectAreaLights.value=q.state.rectArea,$e.ltc_1.value=q.state.rectAreaLTC1,$e.ltc_2.value=q.state.rectAreaLTC2,$e.pointLights.value=q.state.point,$e.pointLightShadows.value=q.state.pointShadow,$e.hemisphereLights.value=q.state.hemi,$e.directionalShadowMap.value=q.state.directionalShadowMap,$e.directionalShadowMatrix.value=q.state.directionalShadowMatrix,$e.spotShadowMap.value=q.state.spotShadowMap,$e.spotLightMatrix.value=q.state.spotLightMatrix,$e.spotLightMap.value=q.state.spotLightMap,$e.pointShadowMap.value=q.state.pointShadowMap,$e.pointShadowMatrix.value=q.state.pointShadowMatrix),ie.currentProgram=ct,ie.uniformsList=null,ct}function Kh(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=Ra.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function jh(P,X){const te=Se.get(P);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Xp(P,X,te,ie,q){X.isScene!==!0&&(X=Ce),L.resetTextureUnits();const Re=X.fog,ke=ie.isMeshStandardMaterial?X.environment:null,qe=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Dn,Ye=(ie.isMeshStandardMaterial?W:T).get(ie.envMap||ke),at=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ct=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),$e=!!te.morphAttributes.position,xt=!!te.morphAttributes.normal,Nt=!!te.morphAttributes.color;let Ft=ds;ie.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ft=x.toneMapping);const On=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,bt=On!==void 0?On.length:0,Ze=Se.get(ie),Ci=p.state.lights;if(he===!0&&(_e===!0||P!==M)){const jn=P===M&&ie.id===b;G.setState(ie,P,jn)}let wt=!1;ie.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Ci.state.version||Ze.outputColorSpace!==qe||q.isBatchedMesh&&Ze.batching===!1||!q.isBatchedMesh&&Ze.batching===!0||q.isBatchedMesh&&Ze.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ze.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ze.instancing===!1||!q.isInstancedMesh&&Ze.instancing===!0||q.isSkinnedMesh&&Ze.skinning===!1||!q.isSkinnedMesh&&Ze.skinning===!0||q.isInstancedMesh&&Ze.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ze.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ze.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ze.instancingMorph===!1&&q.morphTexture!==null||Ze.envMap!==Ye||ie.fog===!0&&Ze.fog!==Re||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==G.numPlanes||Ze.numIntersection!==G.numIntersection)||Ze.vertexAlphas!==at||Ze.vertexTangents!==ct||Ze.morphTargets!==$e||Ze.morphNormals!==xt||Ze.morphColors!==Nt||Ze.toneMapping!==Ft||Ze.morphTargetsCount!==bt)&&(wt=!0):(wt=!0,Ze.__version=ie.version);let ri=Ze.currentProgram;wt===!0&&(ri=No(ie,X,q));let Hs=!1,zn=!1,Br=!1;const Bt=ri.getUniforms(),_i=Ze.uniforms;if(re.useProgram(ri.program)&&(Hs=!0,zn=!0,Br=!0),ie.id!==b&&(b=ie.id,zn=!0),Hs||M!==P){re.buffers.depth.getReversed()?(ve.copy(P.projectionMatrix),em(ve),tm(ve),Bt.setValue(D,"projectionMatrix",ve)):Bt.setValue(D,"projectionMatrix",P.projectionMatrix),Bt.setValue(D,"viewMatrix",P.matrixWorldInverse);const Ki=Bt.map.cameraPosition;Ki!==void 0&&Ki.setValue(D,Fe.setFromMatrixPosition(P.matrixWorld)),fe.logarithmicDepthBuffer&&Bt.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Bt.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,zn=!0,Br=!0)}if(q.isSkinnedMesh){Bt.setOptional(D,q,"bindMatrix"),Bt.setOptional(D,q,"bindMatrixInverse");const jn=q.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),Bt.setValue(D,"boneTexture",jn.boneTexture,L))}q.isBatchedMesh&&(Bt.setOptional(D,q,"batchingTexture"),Bt.setValue(D,"batchingTexture",q._matricesTexture,L),Bt.setOptional(D,q,"batchingIdTexture"),Bt.setValue(D,"batchingIdTexture",q._indirectTexture,L),Bt.setOptional(D,q,"batchingColorTexture"),q._colorsTexture!==null&&Bt.setValue(D,"batchingColorTexture",q._colorsTexture,L));const zr=te.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&Xe.update(q,te,ri),(zn||Ze.receiveShadow!==q.receiveShadow)&&(Ze.receiveShadow=q.receiveShadow,Bt.setValue(D,"receiveShadow",q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(_i.envMap.value=Ye,_i.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&X.environment!==null&&(_i.envMapIntensity.value=X.environmentIntensity),zn&&(Bt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ze.needsLights&&qp(_i,Br),Re&&ie.fog===!0&&Te.refreshFogUniforms(_i,Re),Te.refreshMaterialUniforms(_i,ie,z,ne,p.state.transmissionRenderTarget[P.id]),Ra.upload(D,Kh(Ze),_i,L)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ra.upload(D,Kh(Ze),_i,L),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Bt.setValue(D,"center",q.center),Bt.setValue(D,"modelViewMatrix",q.modelViewMatrix),Bt.setValue(D,"normalMatrix",q.normalMatrix),Bt.setValue(D,"modelMatrix",q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const jn=ie.uniformsGroups;for(let Ki=0,ji=jn.length;Ki<ji;Ki++){const Zh=jn[Ki];O.update(Zh,ri),O.bind(Zh,ri)}}return ri}function qp(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function Yp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,X,te){Se.get(P.texture).__webglTexture=X,Se.get(P.depthTexture).__webglTexture=te;const ie=Se.get(P);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=te===void 0,ie.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,X){const te=Se.get(P);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,te=0){C=P,S=X,R=te;let ie=!0,q=null,Re=!1,ke=!1;if(P){const Ye=Se.get(P);if(Ye.__useDefaultFramebuffer!==void 0)re.bindFramebuffer(D.FRAMEBUFFER,null),ie=!1;else if(Ye.__webglFramebuffer===void 0)L.setupRenderTarget(P);else if(Ye.__hasExternalTextures)L.rebindTextures(P,Se.get(P.texture).__webglTexture,Se.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const $e=P.depthTexture;if(Ye.__boundDepthTexture!==$e){if($e!==null&&Se.has($e)&&(P.width!==$e.image.width||P.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(P)}}const at=P.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(ke=!0);const ct=Se.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ct[X])?q=ct[X][te]:q=ct[X],Re=!0):P.samples>0&&L.useMultisampledRTT(P)===!1?q=Se.get(P).__webglMultisampledFramebuffer:Array.isArray(ct)?q=ct[te]:q=ct,I.copy(P.viewport),V.copy(P.scissor),B=P.scissorTest}else I.copy(we).multiplyScalar(z).floor(),V.copy(Be).multiplyScalar(z).floor(),B=Ve;if(re.bindFramebuffer(D.FRAMEBUFFER,q)&&ie&&re.drawBuffers(P,q),re.viewport(I),re.scissor(V),re.setScissorTest(B),Re){const Ye=Se.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ye.__webglTexture,te)}else if(ke){const Ye=Se.get(P.texture),at=X||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ye.__webglTexture,te||0,at)}b=-1},this.readRenderTargetPixels=function(P,X,te,ie,q,Re,ke){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Se.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){re.bindFramebuffer(D.FRAMEBUFFER,qe);try{const Ye=P.texture,at=Ye.format,ct=Ye.type;if(!fe.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-ie&&te>=0&&te<=P.height-q&&D.readPixels(X,te,ie,q,ee.convert(at),ee.convert(ct),Re)}finally{const Ye=C!==null?Se.get(C).__webglFramebuffer:null;re.bindFramebuffer(D.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(P,X,te,ie,q,Re,ke){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Se.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(qe=qe[ke]),qe){const Ye=P.texture,at=Ye.format,ct=Ye.type;if(!fe.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=P.width-ie&&te>=0&&te<=P.height-q){re.bindFramebuffer(D.FRAMEBUFFER,qe);const $e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.bufferData(D.PIXEL_PACK_BUFFER,Re.byteLength,D.STREAM_READ),D.readPixels(X,te,ie,q,ee.convert(at),ee.convert(ct),0);const xt=C!==null?Se.get(C).__webglFramebuffer:null;re.bindFramebuffer(D.FRAMEBUFFER,xt);const Nt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Q0(D,Nt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Re),D.deleteBuffer($e),D.deleteSync(Nt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,X=null,te=0){P.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,P=arguments[1]);const ie=Math.pow(2,-te),q=Math.floor(P.image.width*ie),Re=Math.floor(P.image.height*ie),ke=X!==null?X.x:0,qe=X!==null?X.y:0;L.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,te,0,0,ke,qe,q,Re),re.unbindTexture()},this.copyTextureToTexture=function(P,X,te=null,ie=null,q=0){P.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,P=arguments[1],X=arguments[2],q=arguments[3]||0,te=null);let Re,ke,qe,Ye,at,ct,$e,xt,Nt;const Ft=P.isCompressedTexture?P.mipmaps[q]:P.image;te!==null?(Re=te.max.x-te.min.x,ke=te.max.y-te.min.y,qe=te.isBox3?te.max.z-te.min.z:1,Ye=te.min.x,at=te.min.y,ct=te.isBox3?te.min.z:0):(Re=Ft.width,ke=Ft.height,qe=Ft.depth||1,Ye=0,at=0,ct=0),ie!==null?($e=ie.x,xt=ie.y,Nt=ie.z):($e=0,xt=0,Nt=0);const On=ee.convert(X.format),bt=ee.convert(X.type);let Ze;X.isData3DTexture?(L.setTexture3D(X,0),Ze=D.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Ze=D.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Ze=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,X.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,X.unpackAlignment);const Ci=D.getParameter(D.UNPACK_ROW_LENGTH),wt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ri=D.getParameter(D.UNPACK_SKIP_PIXELS),Hs=D.getParameter(D.UNPACK_SKIP_ROWS),zn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ft.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ft.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,at),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ct);const Br=P.isDataArrayTexture||P.isData3DTexture,Bt=X.isDataArrayTexture||X.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const _i=Se.get(P),zr=Se.get(X),jn=Se.get(_i.__renderTarget),Ki=Se.get(zr.__renderTarget);re.bindFramebuffer(D.READ_FRAMEBUFFER,jn.__webglFramebuffer),re.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ki.__webglFramebuffer);for(let ji=0;ji<qe;ji++)Br&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(P).__webglTexture,q,ct+ji),P.isDepthTexture?(Bt&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.get(X).__webglTexture,q,Nt+ji),D.blitFramebuffer(Ye,at,Re,ke,$e,xt,Re,ke,D.DEPTH_BUFFER_BIT,D.NEAREST)):Bt?D.copyTexSubImage3D(Ze,q,$e,xt,Nt+ji,Ye,at,Re,ke):D.copyTexSubImage2D(Ze,q,$e,xt,Nt+ji,Ye,at,Re,ke);re.bindFramebuffer(D.READ_FRAMEBUFFER,null),re.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Bt?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Ze,q,$e,xt,Nt,Re,ke,qe,On,bt,Ft.data):X.isCompressedArrayTexture?D.compressedTexSubImage3D(Ze,q,$e,xt,Nt,Re,ke,qe,On,Ft.data):D.texSubImage3D(Ze,q,$e,xt,Nt,Re,ke,qe,On,bt,Ft):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,q,$e,xt,Re,ke,On,bt,Ft.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,q,$e,xt,Ft.width,Ft.height,On,Ft.data):D.texSubImage2D(D.TEXTURE_2D,q,$e,xt,Re,ke,On,bt,Ft);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ci),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,wt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ri),D.pixelStorei(D.UNPACK_SKIP_ROWS,Hs),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zn),q===0&&X.generateMipmaps&&D.generateMipmap(Ze),re.unbindTexture()},this.copyTextureToTexture3D=function(P,X,te=null,ie=null,q=0){return P.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ie=arguments[1]||null,P=arguments[2],X=arguments[3],q=arguments[4]||0),ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,X,te,ie,q)},this.initRenderTarget=function(P){Se.get(P).__webglFramebuffer===void 0&&L.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?L.setTextureCube(P,0):P.isData3DTexture?L.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?L.setTexture2DArray(P,0):L.setTexture2D(P,0),re.unbindTexture()},this.resetState=function(){S=0,R=0,C=null,re.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}class Sh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=n}clone(){return new Sh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class op extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ap{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new N;class bo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),s=Tt(s,this.array),r=Tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new bo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ks extends pi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let nr;const Xr=new N,ir=new N,sr=new N,rr=new ye,qr=new ye,cp=new ot,ta=new N,Yr=new N,na=new N,Ju=new ye,Rc=new ye,Qu=new ye;class Rr extends It{constructor(e=new ks){if(super(),this.isSprite=!0,this.type="Sprite",nr===void 0){nr=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ap(t,5);nr.setIndex([0,1,2,0,2,3]),nr.setAttribute("position",new bo(n,3,0,!1)),nr.setAttribute("uv",new bo(n,2,3,!1))}this.geometry=nr,this.material=e,this.center=new ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ir.setFromMatrixScale(this.matrixWorld),cp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ir.multiplyScalar(-sr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ia(ta.set(-.5,-.5,0),sr,o,ir,s,r),ia(Yr.set(.5,-.5,0),sr,o,ir,s,r),ia(na.set(.5,.5,0),sr,o,ir,s,r),Ju.set(0,0),Rc.set(1,0),Qu.set(1,1);let a=e.ray.intersectTriangle(ta,Yr,na,!1,Xr);if(a===null&&(ia(Yr.set(-.5,.5,0),sr,o,ir,s,r),Rc.set(0,1),a=e.ray.intersectTriangle(ta,na,Yr,!1,Xr),a===null))return;const c=e.ray.origin.distanceTo(Xr);c<e.near||c>e.far||t.push({distance:c,point:Xr.clone(),uv:ti.getInterpolation(Xr,ta,Yr,na,Ju,Rc,Qu,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ia(i,e,t,n,s,r){rr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(qr.x=r*rr.x-s*rr.y,qr.y=s*rr.x+r*rr.y):qr.copy(rr),i.copy(e),i.x+=qr.x,i.y+=qr.y,i.applyMatrix4(cp)}const ef=new N,tf=new Mt,nf=new Mt,u1=new N,sf=new ot,sa=new N,Cc=new Si,rf=new ot,Pc=new Ro;class f1 extends be{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=tu,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new wi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingBox.expandByPoint(sa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,sa),this.boundingSphere.expandByPoint(sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cc.copy(this.boundingSphere),Cc.applyMatrix4(s),e.ray.intersectsSphere(Cc)!==!1&&(rf.copy(s).invert(),Pc.copy(e.ray).applyMatrix4(rf),!(this.boundingBox!==null&&Pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Pc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Mt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===b0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;tf.fromBufferAttribute(s.attributes.skinIndex,e),nf.fromBufferAttribute(s.attributes.skinWeight,e),ef.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=nf.getComponent(r);if(o!==0){const a=tf.getComponent(r);sf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(u1.copy(ef).applyMatrix4(sf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class lp extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hp extends tn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=In,h=In,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const of=new ot,d1=new ot;class Eh{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:d1;of.multiplyMatrices(a,t[r]),of.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Eh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new hp(t,e,e,ni,di);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new lp),this.bones.push(o),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class Ql extends Sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const or=new ot,af=new ot,ra=[],cf=new wi,p1=new ot,$r=new be,Kr=new Si;class m1 extends be{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ql(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,p1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new wi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),cf.copy(e.boundingBox).applyMatrix4(or),this.boundingBox.union(cf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,or),Kr.copy(e.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),e.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),af.multiplyMatrices(n,or),$r.matrixWorld=af,$r.raycast(e,ra);for(let o=0,a=ra.length;o<a;o++){const c=ra[o];c.instanceId=r,c.object=this,t.push(c)}ra.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ql(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hp(new Float32Array(s*this.count),s,this.count,mh,di));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Th extends pi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ia=new N,Da=new N,lf=new ot,jr=new Ro,oa=new Si,Lc=new N,hf=new N;class Ah extends It{constructor(e=new Ht,t=new Th){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ia.fromBufferAttribute(t,s-1),Da.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ia.distanceTo(Da);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(s),oa.radius+=r,e.ray.intersectsSphere(oa)===!1)return;lf.copy(s).invert(),jr.copy(e.ray).applyMatrix4(lf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=h.getX(_),v=h.getX(_+1),y=aa(this,e,jr,c,p,v);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(d),p=aa(this,e,jr,c,_,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=l){const p=aa(this,e,jr,c,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=aa(this,e,jr,c,g-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function aa(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Ia.fromBufferAttribute(o,s),Da.fromBufferAttribute(o,r),t.distanceSqToSegment(Ia,Da,Lc,hf)>n)return;Lc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Lc);if(!(c<e.near||c>e.far))return{distance:c,point:hf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const uf=new N,ff=new N;class g1 extends Ah{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)uf.fromBufferAttribute(t,s),ff.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+uf.distanceTo(ff);e.setAttribute("lineDistance",new ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class up extends Ah{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class fp extends pi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const df=new ot,eh=new Ro,ca=new Si,la=new N;class x1 extends It{constructor(e=new Ht,t=new fp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;df.copy(s).invert(),eh.copy(e.ray).applyMatrix4(df);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=l.getX(g);la.fromBufferAttribute(u,m),pf(la,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)la.fromBufferAttribute(u,g),pf(la,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function pf(i,e,t,n,s,r,o){const a=eh.distanceSqToPoint(i);if(a<t){const c=new N;eh.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Un extends tn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ei{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new ye:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new N,s=[],r=[],o=[],a=new N,c=new ot;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(en(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(en(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rh extends Ei{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ye){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class _1 extends Rh{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ch(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const ha=new N,Ic=new Ch,Dc=new Ch,Nc=new Ch;class dp extends Ei{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ha.subVectors(s[0],s[1]).add(s[0]),l=ha);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ha.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ha),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ic.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Dc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Nc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Ic.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Dc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Nc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Ic.calc(c),Dc.calc(c),Nc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mf(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function v1(i,e){const t=1-i;return t*t*e}function y1(i,e){return 2*(1-i)*i*e}function M1(i,e){return i*i*e}function po(i,e,t,n){return v1(i,e)+y1(i,t)+M1(i,n)}function b1(i,e){const t=1-i;return t*t*t*e}function w1(i,e){const t=1-i;return 3*t*t*i*e}function S1(i,e){return 3*(1-i)*i*i*e}function E1(i,e){return i*i*i*e}function mo(i,e,t,n,s){return b1(i,e)+w1(i,t)+S1(i,n)+E1(i,s)}class pp extends Ei{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T1 extends Ei{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(mo(e,s.x,r.x,o.x,a.x),mo(e,s.y,r.y,o.y,a.y),mo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mp extends Ei{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A1 extends Ei{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gp extends Ei{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ph extends Ei{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(po(e,s.x,r.x,o.x),po(e,s.y,r.y,o.y),po(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class xp extends Ei{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(mf(a,c.x,l.x,h.x,u.x),mf(a,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ye().fromArray(s))}return this}}var Na=Object.freeze({__proto__:null,ArcCurve:_1,CatmullRomCurve3:dp,CubicBezierCurve:pp,CubicBezierCurve3:T1,EllipseCurve:Rh,LineCurve:mp,LineCurve3:A1,QuadraticBezierCurve:gp,QuadraticBezierCurve3:Ph,SplineCurve:xp});class R1 extends Ei{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Na[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Na[s.type]().fromJSON(s))}return this}}class th extends R1{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new mp(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new gp(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new pp(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new xp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Rh(e,t,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Nr extends Ht{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=en(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/t,u=new N,f=new ye,d=new N,g=new N,_=new N;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let v=0;v<=t;v++){const y=n+v*h*s,x=Math.sin(y),A=Math.cos(y);for(let S=0;S<=e.length-1;S++){u.x=e[S].x*x,u.y=e[S].y,u.z=e[S].x*A,o.push(u.x,u.y,u.z),f.x=v/t,f.y=S/(e.length-1),a.push(f.x,f.y);const R=c[3*S+0]*x,C=c[3*S+1],b=c[3*S+0]*A;l.push(R,C,b)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const x=y+v*e.length,A=x,S=x+e.length,R=x+e.length+1,C=x+1;r.push(A,S,C),r.push(R,C,S)}this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("uv",new ft(a,2)),this.setAttribute("normal",new ft(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.points,e.segments,e.phiStart,e.phiLength)}}class Lh extends Nr{constructor(e=1,t=1,n=4,s=8){const r=new th;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Lh(e.radius,e.length,e.capSegments,e.radialSegments)}}class Kn extends Ht{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new N,h=new ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yn extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(d,2));function v(){const x=new N,A=new N;let S=0;const R=(t-e)/n;for(let C=0;C<=r;C++){const b=[],M=C/r,I=M*(t-e)+e;for(let V=0;V<=s;V++){const B=V/s,$=B*c+a,Z=Math.sin($),Y=Math.cos($);A.x=I*Z,A.y=-M*n+m,A.z=I*Y,u.push(A.x,A.y,A.z),x.set(Z,R,Y).normalize(),f.push(x.x,x.y,x.z),d.push(B,1-M),b.push(g++)}_.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const M=_[b][C],I=_[b+1][C],V=_[b+1][C+1],B=_[b][C+1];(e>0||b!==0)&&(h.push(M,I,B),S+=3),(t>0||b!==r-1)&&(h.push(I,V,B),S+=3)}l.addGroup(p,S,0),p+=S}function y(x){const A=g,S=new ye,R=new N;let C=0;const b=x===!0?e:t,M=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const I=g;for(let V=0;V<=s;V++){const $=V/s*c+a,Z=Math.cos($),Y=Math.sin($);R.x=b*Y,R.y=m*M,R.z=b*Z,u.push(R.x,R.y,R.z),f.push(0,M,0),S.x=Z*.5+.5,S.y=Y*.5*M+.5,d.push(S.x,S.y),g++}for(let V=0;V<s;V++){const B=A+V,$=I+V;x===!0?h.push($,$+1,B):h.push($+1,$,B),C+=3}l.addGroup(p,C,x===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ih extends Yn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Ih(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Dh extends Ht{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new N,x=new N,A=new N;for(let S=0;S<t.length;S+=3)d(t[S+0],y),d(t[S+1],x),d(t[S+2],A),c(y,x,A,v)}function c(v,y,x,A){const S=A+1,R=[];for(let C=0;C<=S;C++){R[C]=[];const b=v.clone().lerp(x,C/S),M=y.clone().lerp(x,C/S),I=S-C;for(let V=0;V<=I;V++)V===0&&C===S?R[C][V]=b:R[C][V]=b.clone().lerp(M,V/I)}for(let C=0;C<S;C++)for(let b=0;b<2*(S-C)-1;b++){const M=Math.floor(b/2);b%2===0?(f(R[C][M+1]),f(R[C+1][M]),f(R[C][M])):(f(R[C][M+1]),f(R[C+1][M+1]),f(R[C+1][M]))}}function l(v){const y=new N;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(v),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){const v=new N;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const x=m(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;o.push(x,1-A)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){const y=o[v+0],x=o[v+2],A=o[v+4],S=Math.max(y,x,A),R=Math.min(y,x,A);S>.9&&R<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){const x=v*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const v=new N,y=new N,x=new N,A=new N,S=new ye,R=new ye,C=new ye;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),S.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),A.copy(v).add(y).add(x).divideScalar(3);const I=m(A);_(S,M+0,v,I),_(R,M+2,y,I),_(C,M+4,x,I)}}function _(v,y,x,A){A<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dh(e.vertices,e.indices,e.radius,e.details)}}class Co extends th{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new th().fromJSON(s))}return this}}const C1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=_p(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=N1(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return wo(r,o,t,a,c,d,0),o}};function _p(i,e,t,n,s){let r,o;if(s===X1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=gf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=gf(r,i[r],i[r+1],o);return o&&Ga(o,o.next)&&(Eo(o),o=o.next),o}function Fs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Ga(t,t.next)||Vt(t.prev,t,t.next)===0)){if(Eo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function wo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&B1(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?L1(i,n,s,r):P1(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Eo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=I1(Fs(i),e,t),wo(i,e,t,n,s,r,2)):o===2&&D1(i,e,t,n,s,r):wo(Fs(i),e,t,n,s,r,1);break}}}function P1(i){const e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&mr(s,a,r,c,o,l,g.x,g.y)&&Vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function L1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Vt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=nh(d,g,e,t,n),v=nh(_,m,e,t,n);let y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&mr(a,h,c,u,l,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&mr(a,h,c,u,l,f,x.x,x.y)&&Vt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&mr(a,h,c,u,l,f,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&mr(a,h,c,u,l,f,x.x,x.y)&&Vt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function I1(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!Ga(s,r)&&vp(s,n,n.next,r)&&So(s,r)&&So(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Eo(n),Eo(n.next),n=i=r),n=n.next}while(n!==i);return Fs(n)}function D1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&V1(o,a)){let c=yp(o,a);o=Fs(o,o.next),c=Fs(c,c.next),wo(o,e,t,n,s,r,0),wo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function N1(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=_p(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(H1(l));for(s.sort(U1),r=0;r<s.length;r++)t=O1(s[r],t);return t}function U1(i,e){return i.x-e.x}function O1(i,e){const t=k1(i,e);if(!t)return e;const n=yp(t,i);return Fs(n,n.next),Fs(t,t.next)}function k1(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&mr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(r-t.x),So(t,i)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&F1(s,t)))&&(s=t,h=u)),t=t.next;while(t!==a);return s}function F1(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function B1(i,e,t,n){let s=i;do s.z===0&&(s.z=nh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,z1(s)}function z1(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function nh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function H1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function mr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function V1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!G1(i,e)&&(So(i,e)&&So(e,i)&&W1(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||Ga(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ga(i,e){return i.x===e.x&&i.y===e.y}function vp(i,e,t,n){const s=fa(Vt(i,e,t)),r=fa(Vt(i,e,n)),o=fa(Vt(t,n,i)),a=fa(Vt(t,n,e));return!!(s!==r&&o!==a||s===0&&ua(i,t,e)||r===0&&ua(i,n,e)||o===0&&ua(t,i,n)||a===0&&ua(t,e,n))}function ua(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fa(i){return i>0?1:i<0?-1:0}function G1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function So(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function W1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function yp(i,e){const t=new ih(i.i,i.x,i.y),n=new ih(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function gf(i,e,t,n){const s=new ih(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Eo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ih(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function X1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ps{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ps.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];xf(e),_f(n,e);let o=e.length;t.forEach(xf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,_f(n,t[c]);const a=C1.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function xf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function _f(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class Wa extends Ht{constructor(e=new Co([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:q1;let y,x=!1,A,S,R,C;p&&(y=p.getSpacedPoints(h),x=!0,f=!1,A=p.computeFrenetFrames(h,!1),S=new N,R=new N,C=new N),f||(m=0,d=0,g=0,_=0);const b=a.extractPoints(l);let M=b.shape;const I=b.holes;if(!ps.isClockWise(M)){M=M.reverse();for(let j=0,de=I.length;j<de;j++){const D=I[j];ps.isClockWise(D)&&(I[j]=D.reverse())}}const B=ps.triangulateShape(M,I),$=M;for(let j=0,de=I.length;j<de;j++){const D=I[j];M=M.concat(D)}function Z(j,de,D){return de||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(de,D)}const Y=M.length,ne=B.length;function z(j,de,D){let ce,K,fe;const re=j.x-de.x,Ae=j.y-de.y,Se=D.x-j.x,L=D.y-j.y,T=re*re+Ae*Ae,W=re*L-Ae*Se;if(Math.abs(W)>Number.EPSILON){const le=Math.sqrt(T),xe=Math.sqrt(Se*Se+L*L),oe=de.x-Ae/le,Le=de.y+re/le,Te=D.x-L/xe,Pe=D.y+Se/xe,it=((Te-oe)*L-(Pe-Le)*Se)/(re*L-Ae*Se);ce=oe+re*it-j.x,K=Le+Ae*it-j.y;const G=ce*ce+K*K;if(G<=2)return new ye(ce,K);fe=Math.sqrt(G/2)}else{let le=!1;re>Number.EPSILON?Se>Number.EPSILON&&(le=!0):re<-Number.EPSILON?Se<-Number.EPSILON&&(le=!0):Math.sign(Ae)===Math.sign(L)&&(le=!0),le?(ce=-Ae,K=re,fe=Math.sqrt(T)):(ce=re,K=Ae,fe=Math.sqrt(T/2))}return new ye(ce/fe,K/fe)}const pe=[];for(let j=0,de=$.length,D=de-1,ce=j+1;j<de;j++,D++,ce++)D===de&&(D=0),ce===de&&(ce=0),pe[j]=z($[j],$[D],$[ce]);const me=[];let we,Be=pe.concat();for(let j=0,de=I.length;j<de;j++){const D=I[j];we=[];for(let ce=0,K=D.length,fe=K-1,re=ce+1;ce<K;ce++,fe++,re++)fe===K&&(fe=0),re===K&&(re=0),we[ce]=z(D[ce],D[fe],D[re]);me.push(we),Be=Be.concat(we)}for(let j=0;j<m;j++){const de=j/m,D=d*Math.cos(de*Math.PI/2),ce=g*Math.sin(de*Math.PI/2)+_;for(let K=0,fe=$.length;K<fe;K++){const re=Z($[K],pe[K],ce);ve(re.x,re.y,-D)}for(let K=0,fe=I.length;K<fe;K++){const re=I[K];we=me[K];for(let Ae=0,Se=re.length;Ae<Se;Ae++){const L=Z(re[Ae],we[Ae],ce);ve(L.x,L.y,-D)}}}const Ve=g+_;for(let j=0;j<Y;j++){const de=f?Z(M[j],Be[j],Ve):M[j];x?(R.copy(A.normals[0]).multiplyScalar(de.x),S.copy(A.binormals[0]).multiplyScalar(de.y),C.copy(y[0]).add(R).add(S),ve(C.x,C.y,C.z)):ve(de.x,de.y,0)}for(let j=1;j<=h;j++)for(let de=0;de<Y;de++){const D=f?Z(M[de],Be[de],Ve):M[de];x?(R.copy(A.normals[j]).multiplyScalar(D.x),S.copy(A.binormals[j]).multiplyScalar(D.y),C.copy(y[j]).add(R).add(S),ve(C.x,C.y,C.z)):ve(D.x,D.y,u/h*j)}for(let j=m-1;j>=0;j--){const de=j/m,D=d*Math.cos(de*Math.PI/2),ce=g*Math.sin(de*Math.PI/2)+_;for(let K=0,fe=$.length;K<fe;K++){const re=Z($[K],pe[K],ce);ve(re.x,re.y,u+D)}for(let K=0,fe=I.length;K<fe;K++){const re=I[K];we=me[K];for(let Ae=0,Se=re.length;Ae<Se;Ae++){const L=Z(re[Ae],we[Ae],ce);x?ve(L.x,L.y+y[h-1].y,y[h-1].x+D):ve(L.x,L.y,u+D)}}}Q(),he();function Q(){const j=s.length/3;if(f){let de=0,D=Y*de;for(let ce=0;ce<ne;ce++){const K=B[ce];Ne(K[2]+D,K[1]+D,K[0]+D)}de=h+m*2,D=Y*de;for(let ce=0;ce<ne;ce++){const K=B[ce];Ne(K[0]+D,K[1]+D,K[2]+D)}}else{for(let de=0;de<ne;de++){const D=B[de];Ne(D[2],D[1],D[0])}for(let de=0;de<ne;de++){const D=B[de];Ne(D[0]+Y*h,D[1]+Y*h,D[2]+Y*h)}}n.addGroup(j,s.length/3-j,0)}function he(){const j=s.length/3;let de=0;_e($,de),de+=$.length;for(let D=0,ce=I.length;D<ce;D++){const K=I[D];_e(K,de),de+=K.length}n.addGroup(j,s.length/3-j,1)}function _e(j,de){let D=j.length;for(;--D>=0;){const ce=D;let K=D-1;K<0&&(K=j.length-1);for(let fe=0,re=h+m*2;fe<re;fe++){const Ae=Y*fe,Se=Y*(fe+1),L=de+ce+Ae,T=de+K+Ae,W=de+K+Se,le=de+ce+Se;Fe(L,T,W,le)}}}function ve(j,de,D){c.push(j),c.push(de),c.push(D)}function Ne(j,de,D){ue(j),ue(de),ue(D);const ce=s.length/3,K=v.generateTopUV(n,s,ce-3,ce-2,ce-1);Ce(K[0]),Ce(K[1]),Ce(K[2])}function Fe(j,de,D,ce){ue(j),ue(de),ue(ce),ue(de),ue(D),ue(ce);const K=s.length/3,fe=v.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);Ce(fe[0]),Ce(fe[1]),Ce(fe[3]),Ce(fe[1]),Ce(fe[2]),Ce(fe[3])}function ue(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function Ce(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Y1(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Na[s.type]().fromJSON(s)),new Wa(n,e.options)}}const q1={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ye(r,o),new ye(a,c),new ye(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ye(o,1-c),new ye(l,1-u),new ye(f,1-g),new ye(_,1-p)]:[new ye(a,1-c),new ye(h,1-u),new ye(d,1-g),new ye(m,1-p)]}};function Y1(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Xa extends Dh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xa(e.radius,e.detail)}}class Nh extends Ht{constructor(e=new Co([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(r,3)),this.setAttribute("uv",new ft(o,2));function l(h){const u=s.length/3,f=h.extractPoints(t);let d=f.shape;const g=f.holes;ps.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];ps.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=ps.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],y=v[0]+u,x=v[1]+u,A=v[2]+u;n.push(y,x,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return $1(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Nh(n,e.curveSegments)}}function $1(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Gt extends Ht{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new N,f=new N,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&c===Math.PI&&(x=-.5/t);for(let A=0;A<=t;A++){const S=A/t;u.x=-e*Math.cos(s+S*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+S*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(S+x,1-y),v.push(l++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=h[p][v+1],x=h[p][v],A=h[p+1][v],S=h[p+1][v+1];(p!==0||o>0)&&d.push(y,x,S),(p!==n-1||c<Math.PI)&&d.push(x,A,S)}this.setIndex(d),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ur extends Ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new N,u=new N,f=new N;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class qa extends Ht{constructor(e=new Ph(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,c=new N,l=new ye;let h=new N;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(d,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),p()}function m(y){h=e.getPointAt(y/t,h);const x=o.normals[y],A=o.binormals[y];for(let S=0;S<=s;S++){const R=S/s*Math.PI*2,C=Math.sin(R),b=-Math.cos(R);c.x=b*x.x+C*A.x,c.y=b*x.y+C*A.y,c.z=b*x.z+C*A.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){const A=(s+1)*(y-1)+(x-1),S=(s+1)*y+(x-1),R=(s+1)*y+x,C=(s+1)*(y-1)+x;g.push(A,S,C),g.push(S,R,C)}}function v(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)l.x=y/t,l.y=x/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new qa(new Na[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class kt extends pi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gd,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends kt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function da(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function K1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function j1(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function vf(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Mp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Po{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Z1 extends Po{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nu,endingEnd:nu}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case iu:r=e,a=2*t-n;break;case su:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case iu:o=e,c=2*n-t;break;case su:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+v*o[l+A]+y*o[c+A]+x*o[u+A];return r}}class J1 extends Po{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}}class Q1 extends Po{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ai{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Q1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new J1(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Z1(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vo:t=this.InterpolantFactoryMethodDiscrete;break;case yo:t=this.InterpolantFactoryMethodLinear;break;case ec:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return yo;case this.InterpolantFactoryMethodSmooth:return ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&K1(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ec,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{const u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ai.prototype.TimeBufferType=Float32Array;Ai.prototype.ValueBufferType=Float32Array;Ai.prototype.DefaultInterpolation=yo;class Or extends Ai{constructor(e,t,n){super(e,t,n)}}Or.prototype.ValueTypeName="bool";Or.prototype.ValueBufferType=Array;Or.prototype.DefaultInterpolation=vo;Or.prototype.InterpolantFactoryMethodLinear=void 0;Or.prototype.InterpolantFactoryMethodSmooth=void 0;class bp extends Ai{}bp.prototype.ValueTypeName="color";class Cr extends Ai{}Cr.prototype.ValueTypeName="number";class ey extends Po{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let h=l+a;l!==h;l+=4)$n.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Pr extends Ai{InterpolantFactoryMethodLinear(e){return new ey(this.times,this.values,this.getValueSize(),e)}}Pr.prototype.ValueTypeName="quaternion";Pr.prototype.InterpolantFactoryMethodSmooth=void 0;class kr extends Ai{constructor(e,t,n){super(e,t,n)}}kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=vo;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends Ai{}Lr.prototype.ValueTypeName="vector";class ty{constructor(e="",t=-1,n=[],s=w0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(iy(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ai.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const h=j1(c);c=vf(c,1,h),l=vf(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Cr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=s[u];f||(s[u]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,g,_){if(d.length!==0){const m=[],p=[];Mp(d,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const y=f[g];m.push(y.time),p.push(y.morphTarget===_?1:0)}s.push(new Cr(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{const d=".bones["+t[u].name+"]";n(Lr,d+".position",f,"pos",s),n(Pr,d+".quaternion",f,"rot",s),n(Lr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ny(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cr;case"vector":case"vector2":case"vector3":case"vector4":return Lr;case"color":return bp;case"quaternion":return Pr;case"bool":case"boolean":return Or;case"string":return kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function iy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ny(i.type);if(i.times===void 0){const t=[],n=[];Mp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const us={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class sy{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}}const ry=new sy;class Fr{constructor(e){this.manager=e!==void 0?e:ry,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ui={};class oy extends Error{constructor(e,t){super(e),this.response=t}}class wp extends Fr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=us.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ui[e]!==void 0){Ui[e].push({onLoad:t,onProgress:n,onError:s});return}Ui[e]=[],Ui[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=Ui[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let S=0,R=h.length;S<R;S++){const C=h[S];C.onProgress&&C.onProgress(A)}p.enqueue(x),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new oy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{us.add(e,l);const h=Ui[e];delete Ui[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=Ui[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ui[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ay extends Fr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Mo("img");function c(){h(),us.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Uh extends Fr{constructor(e){super(e)}load(e,t,n,s){const r=new tn,o=new ay(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ya extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cy extends Ya{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Uc=new ot,yf=new N,Mf=new N;class Oh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mh,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yf.setFromMatrixPosition(e.matrixWorld),t.position.copy(yf),Mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mf),t.updateMatrixWorld(),Uc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ly extends Oh{constructor(){super(new Cn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class hy extends Ya{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ly}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const bf=new ot,Zr=new N,Oc=new N;class uy extends Oh{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new Mt(2,1,1,1),new Mt(0,1,1,1),new Mt(3,1,1,1),new Mt(1,1,1,1),new Mt(3,0,1,1),new Mt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zr),Oc.copy(n.position),Oc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Oc),n.updateMatrixWorld(),s.makeTranslation(-Zr.x,-Zr.y,-Zr.z),bf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bf)}}class $a extends Ya{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fy extends Oh{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sp extends Ya{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new fy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class go{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class dy extends Fr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=us.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return us.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),us.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});us.add(e,c),r.manager.itemStart(e)}}let pa;class py{static getContext(){return pa===void 0&&(pa=new(window.AudioContext||window.webkitAudioContext)),pa}static setContext(e){pa=e}}class Ep{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=wf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=wf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function wf(){return performance.now()}const ws=new N,Sf=new $n,my=new N,Ss=new N;class gy extends It{constructor(){super(),this.type="AudioListener",this.context=py.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ep}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ws,Sf,my),Ss.set(0,0,-1).applyQuaternion(Sf),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ws.x,s),t.positionY.linearRampToValueAtTime(ws.y,s),t.positionZ.linearRampToValueAtTime(ws.z,s),t.forwardX.linearRampToValueAtTime(Ss.x,s),t.forwardY.linearRampToValueAtTime(Ss.y,s),t.forwardZ.linearRampToValueAtTime(Ss.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(ws.x,ws.y,ws.z),t.setOrientation(Ss.x,Ss.y,Ss.z,n.x,n.y,n.z)}}class xy extends It{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Es=new N,Ef=new $n,_y=new N,Ts=new N;class vy extends xy{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Es,Ef,_y),Ts.set(0,0,1).applyQuaternion(Ef);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Es.x,n),t.positionY.linearRampToValueAtTime(Es.y,n),t.positionZ.linearRampToValueAtTime(Es.z,n),t.orientationX.linearRampToValueAtTime(Ts.x,n),t.orientationY.linearRampToValueAtTime(Ts.y,n),t.orientationZ.linearRampToValueAtTime(Ts.z,n)}else t.setPosition(Es.x,Es.y,Es.z),t.setOrientation(Ts.x,Ts.y,Ts.z)}}const kh="\\[\\]\\.:\\/",yy=new RegExp("["+kh+"]","g"),Fh="[^"+kh+"]",My="[^"+kh.replace("\\.","")+"]",by=/((?:WC+[\/:])*)/.source.replace("WC",Fh),wy=/(WCOD+)?/.source.replace("WCOD",My),Sy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh),Ey=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh),Ty=new RegExp("^"+by+wy+Sy+Ey+"$"),Ay=["material","materials","bones","map"];class Ry{constructor(e,t,n){const s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class At{constructor(e,t,n){this.path=t,this.parsedPath=n||At.parseTrackName(t),this.node=At.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new At.Composite(e,t,n):new At(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yy,"")}static parseTrackName(e){const t=Ty.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ay.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=At.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}At.Composite=Ry;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Tf=new ot;class Cy{constructor(e,t,n=0,s=1/0){this.ray=new Ro(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Tf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Tf),this}intersectObject(e,t=!0,n=[]){return sh(e,this,n,t),n.sort(Af),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)sh(e[s],this,n,t);return n.sort(Af),n}}function Af(i,e){return i.distance-e.distance}function sh(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)sh(r[o],e,t,!0)}}class Py extends zs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);class Ly extends op{constructor(){super();const e=new an;e.deleteAttribute("uv");const t=new kt({side:wn}),n=new kt,s=new $a(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new be(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new be(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new be(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new be(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new be(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new be(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new be(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new be(e,ar(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new be(e,ar(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new be(e,ar(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new be(e,ar(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new be(e,ar(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new be(e,ar(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ar(i){const e=new Ln;return e.color.setScalar(i),e}const Iy=new Uh;let Tp=8;function xi(i,e,t,{repeat:n=!0,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const o=new Un(r);return s&&(o.colorSpace=yt),n&&(o.wrapS=o.wrapT=mi),o.anisotropy=Tp,o}function kc(i,e=!1){const t=Iy.load(i);return t.colorSpace=yt,e&&(t.wrapS=t.wrapT=mi),t.anisotropy=Tp,t}let Fc=1337;function Qe(){return Fc=Fc*16807%2147483647,(Fc-1)/2147483646}function ma(i,e,t){return xi(512,512,(n,s)=>{const o=s/4;for(let a=0;a<4;a++)for(let c=0;c<4;c++){const l=(Qe()-.5)*e;n.fillStyle=`rgb(${i[0]+l},${i[1]+l},${i[2]+l})`,n.fillRect(a*o,c*o,o,o);for(let h=0;h<140;h++){const u=(Qe()-.5)*e*1.4;n.fillStyle=`rgba(${i[0]+u},${i[1]+u},${i[2]+u},0.5)`,n.fillRect(a*o+Qe()*o,c*o+Qe()*o,2+Qe()*5,2+Qe()*5)}}n.strokeStyle=t,n.lineWidth=3;for(let a=0;a<=4;a++)n.beginPath(),n.moveTo(a*o,0),n.lineTo(a*o,s),n.stroke(),n.beginPath(),n.moveTo(0,a*o),n.lineTo(s,a*o),n.stroke()})}const Dy=xi(256,1024,(i,e,t)=>{i.fillStyle="#d9c7a4",i.fillRect(0,0,e,t);for(let n=0;n<90;n++){const s=Qe()*e,r=.05+Qe()*.12;i.strokeStyle=Qe()>.5?`rgba(150,120,80,${r})`:`rgba(245,235,215,${r})`,i.lineWidth=1+Qe()*3,i.beginPath(),i.moveTo(s,0);for(let o=0;o<=t;o+=64)i.lineTo(s+Math.sin(o*.01+n)*4,o);i.stroke()}}),Ny=xi(256,1024,(i,e,t)=>{i.fillStyle="#a8978a",i.fillRect(0,0,e,t);for(let n=0;n<120;n++){const s=Qe()*e,r=.05+Qe()*.1;i.strokeStyle=Qe()>.5?`rgba(90,75,65,${r})`:`rgba(210,200,190,${r})`,i.lineWidth=1+Qe()*2.5,i.beginPath(),i.moveTo(s,0);for(let o=0;o<=t;o+=64)i.lineTo(s+Math.sin(o*.012+n)*3,o);i.stroke()}}),Uy=xi(256,96,(i,e,t)=>{i.fillStyle="#e4e4e2",i.fillRect(0,0,e,t);for(let n=0;n<4;n++)for(let s=0;s<14;s++)n===3&&s>3&&s<9||(i.fillStyle="#fafafa",i.strokeStyle="#b9b9b6",i.lineWidth=1.5,i.beginPath(),i.arc(14+s*17.5,14+n*22,7.5,0,7),i.fill(),i.stroke());i.beginPath(),i.roundRect(80,70,90,15,7),i.fill(),i.stroke()}),Oy=xi(128,128,(i,e)=>{i.fillStyle="#c4c5c8",i.fillRect(0,0,e,e);for(let t=0;t<40;t++)i.fillStyle=`rgba(255,255,255,${.03+Qe()*.05})`,i.fillRect(0,Qe()*e,e,1);i.fillStyle="#8d8e92",i.beginPath(),i.arc(60,70,15,0,7),i.arc(76,70,15,0,7),i.fill(),i.beginPath(),i.ellipse(68,80,18,20,0,0,7),i.fill(),i.fillStyle="#c4c5c8",i.beginPath(),i.arc(90,62,10,0,7),i.fill(),i.fillStyle="#8d8e92",i.beginPath(),i.ellipse(70,46,9,5,-.7,0,7),i.fill()},{repeat:!1}),ky=xi(512,512,(i,e)=>{const n=e/2;i.fillStyle="#111111",i.fillRect(0,0,e,e),i.fillStyle="#d6ccb2",i.beginPath(),i.moveTo(0,0),i.lineTo(n,0),i.lineTo(n,n),i.closePath(),i.fill(),i.strokeStyle="#ecc828",i.lineWidth=7;for(let s=0;s<=2;s++)i.beginPath(),i.moveTo(s*n,0),i.lineTo(s*n,e),i.stroke(),i.beginPath(),i.moveTo(0,s*n),i.lineTo(e,s*n),i.stroke();i.beginPath(),i.moveTo(0,0),i.lineTo(e,e),i.moveTo(n,0),i.lineTo(e,n),i.moveTo(0,n),i.lineTo(n,e),i.stroke()}),Rf=xi(256,160,(i,e,t)=>{i.fillStyle="#1b1d24",i.fillRect(0,0,e,t),i.fillStyle="#2a2d36",i.fillRect(0,0,40,t);const n=["#c792ea","#82aaff","#c3e88d","#f78c6c","#89ddff","#d0d0d0"];for(let s=8;s<t-4;s+=7){let r=48+Math.floor(Qe()*4)*8;const o=1+Math.floor(Qe()*4);for(let a=0;a<o&&r<e-10;a++){const c=10+Qe()*45;i.fillStyle=n[Math.floor(Qe()*n.length)],i.fillRect(r,s,c,3),r+=c+5}}},{repeat:!1}),Cf=xi(256,160,(i,e,t)=>{i.fillStyle="#f4f6fa",i.fillRect(0,0,e,t),i.fillStyle="#26324a",i.fillRect(0,0,36,t),i.fillStyle="#ffffff";for(let n=0;n<3;n++)i.fillRect(44+n*70,10,62,34);i.fillStyle="#4c7cf0";for(let n=0;n<12;n++){const s=10+Qe()*50;i.fillRect(48+n*16,140-s,9,s)}i.fillStyle="#26c281",i.fillRect(50,20,40,6),i.fillStyle="#f0a04c",i.fillRect(120,20,40,6)},{repeat:!1}),Pf=xi(256,160,(i,e,t)=>{const n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#20263a"),n.addColorStop(1,"#3b2a4f"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,.85)";for(let s=0;s<4;s++)i.fillRect(30,30+s*22,120+Qe()*60,8);i.fillStyle="#ecc828",i.fillRect(30,120,60,14)},{repeat:!1}),Fy=xi(1024,360,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#3a3a38",i.textAlign="center",i.font='700 210px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("pixbit",e/2,200),i.font='500 78px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("· s o l u t i o n s ·",e/2,320)},{repeat:!1}),By=xi(256,256,(i,e)=>{const t=e/2;i.fillStyle="#f7f7f5",i.beginPath(),i.arc(t,t,t-4,0,Math.PI*2),i.fill(),i.lineWidth=10,i.strokeStyle="#222",i.stroke(),i.fillStyle="#222";for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.fillRect(t+Math.sin(s)*96-3,t-Math.cos(s)*96-9,6,18)}i.lineCap="round",i.lineWidth=8,i.beginPath(),i.moveTo(t,t),i.lineTo(t+50,t-30),i.stroke(),i.lineWidth=5,i.beginPath(),i.moveTo(t,t),i.lineTo(t-20,t-85),i.stroke()},{repeat:!1}),Je=i=>new kt(i),w={floorBeige:Je({map:ma([196,180,160],14,"#a8998a"),roughness:.3,metalness:0}),floorDark:Je({map:ma([78,78,80],12,"#5a5a5c"),roughness:.6}),floorTerrace:Je({map:ma([184,160,136],16,"#9c7e66"),roughness:.75}),floorCorridor:Je({map:ma([226,214,196],8,"#cbbfae"),roughness:.12}),wall:Je({color:"#dededb",roughness:.92}),wallWarm:Je({color:"#e6e1d6",roughness:.92}),concrete:Je({map:kc("textures/concrete.jpg",!0),roughness:.95}),ceilingBlack:Je({color:"#151516",roughness:.95}),diamond:Je({map:ky,roughness:.7}),yellow:Je({color:"#ecc21c",roughness:.5}),black:Je({color:"#161616",roughness:.45,metalness:.3}),blackMatte:Je({color:"#1e1e1e",roughness:.85}),metalDark:Je({color:"#2a2a2c",roughness:.35,metalness:.7}),chrome:Je({color:"#b9bcc0",roughness:.2,metalness:1}),mesh:Je({color:"#262628",roughness:.9}),fabric:Je({color:"#2d2d30",roughness:1}),leather:Je({color:"#1a1a1a",roughness:.38,metalness:.05}),wood:Je({map:Dy,roughness:.6}),greyOak:Je({map:Ny,roughness:.75}),oakEdge:Je({color:"#d9cfb4",roughness:.7}),macTop:Je({map:Oy,roughness:.35,metalness:.6}),silver:Je({color:"#c9cacc",roughness:.3,metalness:.8}),keyboardTop:Je({map:Uy,roughness:.5}),woodDark:Je({color:"#7a5233",roughness:.6}),white:Je({color:"#f3f3f1",roughness:.5}),whiteGloss:Je({color:"#f5f5f3",roughness:.2}),cream:Je({color:"#e8e2c8",roughness:.6}),glass:new kt({color:"#cfdde0",transparent:!0,opacity:.16,roughness:.05,metalness:.1,depthWrite:!1,side:Ot}),glassFrost:new kt({color:"#f2f2f0",transparent:!0,opacity:.82,roughness:.5,depthWrite:!1,side:Ot}),glassYellow:Je({color:"#f1d27a",emissive:"#a8820f",emissiveIntensity:.35,roughness:.4}),lightStrip:Je({color:"#ffffff",emissive:"#fff4e0",emissiveIntensity:2.2}),spotGlow:Je({color:"#ffffff",emissive:"#ffe9c4",emissiveIntensity:3}),screenCode:Je({map:Rf,emissive:"#ffffff",emissiveMap:Rf,emissiveIntensity:.9,roughness:.3}),screenDash:Je({map:Cf,emissive:"#ffffff",emissiveMap:Cf,emissiveIntensity:.7,roughness:.3}),screenDark:Je({map:Pf,emissive:"#ffffff",emissiveMap:Pf,emissiveIntensity:.8,roughness:.3}),screenOff:Je({color:"#0b0b0c",roughness:.15,metalness:.3}),plant:Je({color:"#3d6b2f",roughness:.7}),plantLight:Je({color:"#7f9b3a",roughness:.7}),soil:Je({color:"#3a2c20",roughness:1}),plantDark:Je({color:"#2c4f24",roughness:.55}),stem:Je({color:"#4f7a34",roughness:.7}),petalPink:Je({color:"#e8738f",roughness:.6}),petalWhite:Je({color:"#f6f2ea",roughness:.6}),petalYellow:Je({color:"#f2c230",roughness:.6}),flowerCentre:Je({color:"#d99a1c",roughness:.8}),ceramic:Je({color:"#efece6",roughness:.25}),led:Je({color:"#ffffff",emissive:"#dff1ff",emissiveIntensity:2}),beanbag:Je({color:"#3b3d40",roughness:.95}),bottleYellow:Je({color:"#f2b705",roughness:.3,metalness:.4}),bottleBlue:Je({color:"#1f4fa8",roughness:.3,metalness:.4}),bottleTeal:Je({color:"#3ab7a6",roughness:.3}),red:Je({color:"#b23a2e",roughness:.6}),pergola:Je({color:"#8a4b3a",roughness:.8}),rail:Je({color:"#4a4a4a",roughness:.4,metalness:.6}),logo:Je({map:kc("textures/logo.png"),transparent:!0,alphaTest:.4,roughness:.4}),logoText:Je({map:Fy,transparent:!0,alphaTest:.3,roughness:.6}),gallery:Je({map:kc("textures/gallery.jpg"),roughness:.6}),clock:Je({map:By,roughness:.5})};w.screens=[w.screenCode,w.screenCode,w.screenDash,w.screenDark];const Jr=new N;function Jn(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Jr.copy(e),Jr[n]=0,Jr.normalize();const l=.5*o/(o+a),h=1-Jr.angleTo(i)/c;return Math.sign(Jr[t])===1?h*l:a/(o+a)+l+l*(1-h)}class zy extends an{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new N,c=new N,l=new N(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,d=h.length/6,g=new N,_=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(a.fromArray(h,m),c.copy(a),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[m+0]=l.x*Math.sign(a.x)+c.x*r,h[m+1]=l.y*Math.sign(a.y)+c.y*r,h[m+2]=l.z*Math.sign(a.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=Jn(g,c,"z","y",r,n),f[p+1]=1-Jn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-Jn(g,c,"z","y",r,n),f[p+1]=1-Jn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-Jn(g,c,"x","z",r,e),f[p+1]=Jn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-Jn(g,c,"x","z",r,e),f[p+1]=1-Jn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-Jn(g,c,"x","y",r,e),f[p+1]=1-Jn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=Jn(g,c,"x","y",r,e),f[p+1]=1-Jn(g,c,"y","x",r,t);break}}}function Ka(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ht;let l=0;for(let h=0;h<i.length;++h){const u=i[h];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(t){let h=0;const u=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(const h in r){const u=Lf(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);const g=Lf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Lf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}const o=new e(r),a=new Sn(o,t,n);let c=0;for(let l=0;l<i.length;++l){const h=i[l];if(h.isInterleavedBufferAttribute){const u=c/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){const _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}function If(i,e){if(e===S0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kl||e===Vd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===Kl)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Hy extends Fr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qy(t)}),this.register(function(t){return new Yy(t)}),this.register(function(t){return new nM(t)}),this.register(function(t){return new iM(t)}),this.register(function(t){return new sM(t)}),this.register(function(t){return new Ky(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new Xy(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new $y(t)}),this.register(function(t){return new tM(t)}),this.register(function(t){return new eM(t)}),this.register(function(t){return new Gy(t)}),this.register(function(t){return new rM(t)}),this.register(function(t){return new oM(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=go.extractUrlBase(e);o=go.resolveURL(l,this.path)}else o=go.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new wp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ap){try{o[dt.KHR_BINARY_GLTF]=new aM(e)}catch(u){s&&s(u);return}r=JSON.parse(o[dt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new yM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case dt.KHR_MATERIALS_UNLIT:o[u]=new Wy;break;case dt.KHR_DRACO_MESH_COMPRESSION:o[u]=new cM(r,this.dracoLoader);break;case dt.KHR_TEXTURE_TRANSFORM:o[u]=new lM;break;case dt.KHR_MESH_QUANTIZATION:o[u]=new hM;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Vy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const dt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Gy{constructor(e){this.parser=e,this.name=dt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new rt(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Dn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Sp(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $a(h),l.distance=u;break;case"spot":l=new hy(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,zi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Wy{constructor(){this.name=dt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,t,n){const s=[];e.color=new rt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Dn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}}class Xy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class qy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(a,a)}return Promise.all(r)}}class Yy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class $y{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Ky{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new rt(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Dn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class jy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Zy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new rt().setRGB(a[0],a[1],a[2],Dn),Promise.all(r)}}class Jy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Qy{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new rt().setRGB(a[0],a[1],a[2],Dn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(r)}}class eM{constructor(e){this.parser=e,this.name=dt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class tM{constructor(e){this.parser=e,this.name=dt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class nM{constructor(e){this.parser=e,this.name=dt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class iM{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class sM{constructor(e){this.parser=e,this.name=dt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class rM{constructor(e){this.name=dt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(d),h,u,f,s.mode,s.filter),d})})}else return null}}class oM{constructor(e){this.name=dt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==ei.TRIANGLES&&l.mode!==ei.TRIANGLE_STRIP&&l.mode!==ei.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(h=>(c[l]=h,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const g of u){const _=new ot,m=new N,p=new $n,v=new N(1,1,1),y=new m1(g.geometry,g.material,f);for(let x=0;x<f;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&v.fromBufferAttribute(c.SCALE,x),y.setMatrixAt(x,_.compose(m,p,v));for(const x in c)if(x==="_COLOR_0"){const A=c[x];y.instanceColor=new Ql(A.array,A.itemSize,A.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);It.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Ap="glTF",Qr=12,Df={JSON:1313821514,BIN:5130562};class aM{constructor(e){this.name=dt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ap)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Qr,r=new DataView(e,Qr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Df.JSON){const l=new Uint8Array(e,Qr+o,a);this.content=n.decode(l)}else if(c===Df.BIN){const l=Qr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class cM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=dt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const h in o){const u=rh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=rh[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],d=vr[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){s.decodeDracoFile(h,function(d){for(const g in d.attributes){const _=d.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(d)},a,l,Dn,f)})})}}class lM{constructor(){this.name=dt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hM{constructor(){this.name=dt.KHR_MESH_QUANTIZATION}}class Rp extends Po{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,h=s-t,u=(n-t)/h,f=u*u,d=f*u,g=e*l,_=g-l,m=-2*d+3*f,p=d-f,v=1-m,y=p-f+u;for(let x=0;x!==a;x++){const A=o[_+x+a],S=o[_+x+c]*h,R=o[g+x+a],C=o[g+x]*h;r[x]=v*A+y*S+m*R+p*C}return r}}const uM=new $n;class fM extends Rp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return uM.fromArray(r).normalize().toArray(r),r}}const ei={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nf={9728:In,9729:qn,9984:Id,9985:ba,9986:oo,9987:Vi},Uf={33071:hs,33648:Pa,10497:mi},Bc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dM={CUBICSPLINE:void 0,LINEAR:yo,STEP:vo},zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new kt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:qi})),i.DefaultMaterial}function As(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mM(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(f)}if(s){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function gM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function xM(i){let e;const t=i.extensions&&i.extensions[dt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hc(t.attributes):e=i.indices+":"+Hc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Hc(i.targets[n]);return e}function Hc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function oh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _M(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const vM=new ot;class yM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Uh(this.options.manager):this.textureLoader=new dy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new wp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return As(r,a,s),zi(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,h]of o.children.entries())r(h,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[dt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(go.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Bc[s.type],a=vr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Sn(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Bc[s.type],l=vr[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==u){const p=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(v);y||(_=new l(a,p*d,s.count*d/h),y=new ap(_,d/h),t.cache.add(v,y)),m=new bo(y,c,f%d/h,g)}else a===null?_=new l(s.count*c):_=new l(a,f,s.count*c),m=new Sn(_,c,g);if(s.sparse!==void 0){const p=Bc.SCALAR,v=vr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,x=s.sparse.values.byteOffset||0,A=new v(o[1],y,s.sparse.count*p),S=new l(o[2],x,s.sparse.count*c);a!==null&&(m=new Sn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,C=A.length;R<C;R++){const b=A[R];if(m.setX(b,S[R*c]),c>=2&&m.setY(b,S[R*c+1]),c>=3&&m.setZ(b,S[R*c+2]),c>=4&&m.setW(b,S[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return h.magFilter=Nf[f.magFilter]||qn,h.minFilter=Nf[f.minFilter]||Vi,h.wrapS=Uf[f.wrapS]||mi,h.wrapT=Uf[f.wrapT]||mi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==In&&h.minFilter!==qn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new tn(_);m.needsUpdate=!0,f(m)}),t.load(go.resolveURL(u,r.path),g,void 0,d)})}).then(function(u){return l===!0&&a.revokeObjectURL(c),zi(u,o),u.userData.mimeType=o.mimeType||_M(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[dt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[dt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[dt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new fp,pi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Th,pi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return kt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[dt.KHR_MATERIALS_UNLIT]){const u=s[dt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),l.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new rt(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Dn),a.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",u.baseColorTexture,yt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ot);const h=r.alphaMode||zc.OPAQUE;if(h===zc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===zc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ln&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ln&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ln){const u=r.emissiveFactor;a.emissive=new rt().setRGB(u[0],u[1],u[2],Dn)}return r.emissiveTexture!==void 0&&o!==Ln&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(l).then(function(){const u=new o(a);return r.name&&(u.name=r.name),zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&As(s,u,r),u})}createUniqueName(e){const t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[dt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Of(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],h=xM(l),u=s[h];if(u)o.push(u.promise);else{let f;l.extensions&&l.extensions[dt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Of(new Ht,l,t),s[h]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const h=o[c].material===void 0?pM(this.cache):this.getDependency("material",o[c].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,g=h.length;d<g;d++){const _=h[d],m=o[d];let p;const v=l[d];if(m.mode===ei.TRIANGLES||m.mode===ei.TRIANGLE_STRIP||m.mode===ei.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new f1(_,v):new be(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ei.TRIANGLE_STRIP?p.geometry=If(p.geometry,Vd):m.mode===ei.TRIANGLE_FAN&&(p.geometry=If(p.geometry,Kl));else if(m.mode===ei.LINES)p=new g1(_,v);else if(m.mode===ei.LINE_STRIP)p=new Ah(_,v);else if(m.mode===ei.LINE_LOOP)p=new up(_,v);else if(m.mode===ei.POINTS)p=new x1(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&gM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),zi(p,r),m.extensions&&As(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&As(s,u[0],r),u[0];const f=new tt;r.extensions&&As(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=u.length;d<g;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Cn(Z0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new bh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,h=o.length;l<h;l++){const u=o[l];if(u){a.push(u);const f=new ot;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Eh(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],h=[];for(let u=0,f=s.channels.length;u<f;u++){const d=s.channels[u],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let v=0,y=f.length;v<y;v++){const x=f[v],A=d[v],S=g[v],R=_[v],C=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const b=n._createAnimationTracks(x,A,S,R,C);if(b)for(let M=0;M<b.length;M++)p.push(b[M])}return new ty(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,h=a.length;l<h;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,vM)});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let h;if(r.isBone===!0?h=new lp:l.length>1?h=new tt:l.length===1?h=l[0]:h=new It,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=o),zi(h,r),r.extensions&&As(n,h,r),r.matrix!==void 0){const u=new ot;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new tt;n.name&&(r.name=s.createUniqueName(n.name)),zi(r,n),n.extensions&&As(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of s.associations)(f instanceof pi||f instanceof tn)&&u.set(f,d);return h.traverse(f=>{const d=s.associations.get(f);d!=null&&u.set(f,d)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];is[r.path]===is.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(is[r.path]){case is.weights:l=Cr;break;case is.rotation:l=Pr;break;case is.position:case is.scale:l=Lr;break;default:switch(n.itemSize){case 1:l=Cr;break;case 2:case 3:default:l=Lr;break}break}const h=s.interpolation!==void 0?dM[s.interpolation]:yo,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+is[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=oh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Pr?fM:Rp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function MM(i,e,t){const n=e.attributes,s=new wi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),a.normalized){const h=oh(vr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new N,c=new N;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=oh(vr[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Si;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Of(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=rh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return mt.workingColorSpace!==Dn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${mt.workingColorSpace}" not supported.`),zi(i,e),MM(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?mM(i,e.targets,t):i})}const Vc=new Map;function dn(i,e){return Vc.has(i)||Vc.set(i,e()),Vc.get(i)}function bM(i,e,t){const n=new Co,s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),n}function lo(i,e,t,n,s){const r=new Wa(bM(i-2*s,e-2*s,Math.max(.001,n-s)),{depth:t-2*s,bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:6});return r.translate(0,0,s),r}const ga={shell:()=>dn("mon.shell",()=>{const i=lo(.536,.322,.012,.008,.0025);return i.translate(0,.35-.005,-.0592-.012),i}),back:()=>dn("mon.back",()=>{const i=lo(.42,.22,.016,.03,.006);i.translate(0,.335,-.0712-.016);const e=lo(.22,.13,.014,.03,.006);return e.translate(0,.325,-.0872-.014),Ka([i,e])}),arm:()=>dn("mon.arm",()=>{const i=new dp([new N(0,.008,-.03),new N(0,.05,-.085),new N(0,.16,-.13),new N(0,.27,-.125),new N(0,.31,-.1)]),e=new qa(i,24,1,10,!1),t=e.attributes.position,n=new N,s=new N;for(let r=0;r<t.count;r++){const o=Math.floor(r/11),a=o/24;i.getPointAt(Math.min(1,a),s),n.set(t.getX(r),t.getY(r),t.getZ(r)).sub(s),t.setXYZ(r,s.x+n.x*.024,s.y+n.y*.008,s.z+n.z*.008)}return e.computeVertexNormals(),e}),foot:()=>dn("mon.foot",()=>{const i=lo(.24,.17,.008,.07,.003);return i.rotateX(-Math.PI/2),i.translate(0,0,-.05),i})},kf={base:()=>dn("kb.base",()=>{const i=lo(.28,.108,.01,.008,.003);i.rotateX(-Math.PI/2);const e=i.attributes.position;for(let t=0;t<e.count;t++)e.getY(t)>.005&&e.getZ(t)<0&&e.setY(t,e.getY(t)+.004*(-e.getZ(t)/.054));return i.computeVertexNormals(),i.translate(-.01,0,.25),i}),keys:()=>dn("kb.keys",()=>{const i=[],s=(r,o,a)=>{const c=new an(a,.004,.0155);c.translate(r,.0125+.004*(.304-o)/.108,o),i.push(c)};for(let r=0;r<5;r++){const o=.213+r*.0185;if(r===4){let c=-.132;for(const l of[1,1,1.25,6.5,1.25,1,1,1]){const h=l*.0185-.002999999999999999;s(c+h/2,o,h),c+=l*.0185}continue}const a=14;for(let c=0;c<a;c++)s(-.01-.13+.008+.0155/2+c*.0185+r%2*.004,o,.0155)}return Ka(i)})},Ff={shell:()=>dn("mouse.shell",()=>{const i=new Gt(1,20,12,0,Math.PI*2,0,Math.PI/2);i.scale(.03,.022,.054);const e=i.attributes.position;for(let t=0;t<e.count;t++)e.setY(t,e.getY(t)*(1+.15*Math.max(0,e.getZ(t)/.054)));return i.computeVertexNormals(),i}),wheel:()=>dn("mouse.wheel",()=>{const i=new Yn(.006,.006,.005,12);return i.rotateZ(Math.PI/2),i})},Bf={body:()=>dn("bottle.body",()=>new Nr([[0,0],[.028,0],[.032,.006],[.032,.16],[.03,.18],[.022,.196],[.019,.2],[0,.2]].map(([i,e])=>new ye(i,e)),18)),cap:()=>dn("bottle.cap",()=>new Yn(.02,.021,.03,16).translate(0,.215,0))};function Cp(i=0,{width:e=.09,thick:t=.016,bend:n=.08,twist:s=.5}={}){return dn(`blade.${i}.${e}.${t}.${n}.${s}`,()=>{const o=[],a=[],c=n*(.6+.4*(i*37%10)/10)*(i%2?-1:1),l=s*(i%3===2?-1:1);for(let f=0;f<=10;f++){const d=f/10,g=e/2*Math.sin(Math.PI*Math.min(1,.12+d*.95))*(1-.35*d),_=t/2*(1-d*.85),m=l*d,p=Math.cos(m),v=Math.sin(m),y=c*d*d;for(const[x,A]of[[-g,0],[0,_],[g,0],[0,-_]])o.push(x*p-A*v,d,y+x*v+A*p)}const h=o.length/3;o.push(0,1.04,c*1.08);for(let f=0;f<10;f++)for(let d=0;d<4;d++){const g=f*4+d,_=f*4+(d+1)%4,m=g+4,p=_+4;a.push(g,_,m,_,p,m)}for(let f=0;f<4;f++)a.push(10*4+f,10*4+(f+1)%4,h);a.push(0,2,1,0,3,2);const u=new Ht;return u.setAttribute("position",new ft(o,3)),u.setIndex(a),u.computeVertexNormals(),u})}function wM(i,e){return dn(`planter.${i}.${e}`,()=>{const t=i/2-.004,n=t*.78,s=new Nr([[0,.002],[n-.01,0],[n,.012],[t-.012,e-.03],[t,e-.02],[t,e-.004],[t-.006,e],[t-.016,e-.004],[t-.018,e-.04]].map(([o,a])=>new ye(o,a)),32),r=new Kn(t-.016,28).rotateX(-Math.PI/2).translate(0,e-.035,0);return{pot:s,soil:r,soilY:e-.035}})}const xa={petal:()=>dn("fl.petal",()=>{const i=new Gt(1,10,6);return i.scale(.011,.0025,.022),i.translate(0,0,.02),i}),centre:()=>dn("fl.centre",()=>new Gt(.009,10,8).scale(1,.6,1)),pot:()=>dn("fl.pot",()=>new Nr([[0,.002],[.04,0],[.046,.01],[.058,.1],[.062,.108],[.06,.112],[.054,.105]].map(([i,e])=>new ye(i,e)),28)),soil:()=>dn("fl.soil",()=>new Kn(.055,20).rotateX(-Math.PI/2).translate(0,.1,0))};function SM(i){const e=`stem.${i.map(t=>t.toFixed(3)).join(",")}`;return dn(e,()=>{const t=new Ph(new N(0,0,0),new N(i[0]*.2,i[1]*.6,i[2]*.2),new N(...i));return new qa(t,10,.0025,5,!1)})}new Hy;const EM=new an(1,1,1);function E(i,e,t,n,s,r,o,a,{shadow:c=!0,ry:l=0,rx:h=0,rz:u=0}={}){const f=new be(EM,e);return f.scale.set(t,n,s),f.position.set(r,o,a),f.rotation.set(h,l,u),f.castShadow=c,f.receiveShadow=!0,i.add(f),f}function et(i,e,t,n,s,r,o,a,{seg:c=12,shadow:l=!0,rx:h=0,rz:u=0,open:f=!1}={}){const d=new be(new Yn(t,n,s,c,1,f),e);return d.position.set(r,o,a),d.rotation.set(h,0,u),d.castShadow=l,d.receiveShadow=!0,i.add(d),d}function Hi(i,e,t,n,s,r,o,a,c){const l=new be(new zy(t,n,s,2,r),e);return l.position.set(o,a,c),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function gt(i,e,t,n,s,r,o,a=0,c=0){const l=new be(new ut(t,n),e);return l.position.set(s,r,o),l.rotation.set(c,a,0,"YXZ"),l.receiveShadow=!0,i.add(l),l}function Qt(i,e,t,n=0,s=0,r=0,{shadow:o=!0,rx:a=0,ry:c=0,rz:l=0,s:h=null}={}){const u=new be(e,t);return u.position.set(n,s,r),u.rotation.set(a,c,l),h&&(Array.isArray(h)?u.scale.set(...h):u.scale.setScalar(h)),u.castShadow=o,u.receiveShadow=!0,i.add(u),u}function Nn(i,e=0,t=0,n=0,s=0){const r=new tt;return r.position.set(e,t,n),r.rotation.y=s,i.add(r),r}function yr(i,e,t,n=0,{exec:s=!1}={}){const r=Nn(i,e,0,t,n);r.userData.label="Chair";for(let c=0;c<5;c++){const l=c/5*Math.PI*2,h=E(r,w.black,.04,.035,.32,Math.sin(l)*.15,.07,Math.cos(l)*.15,{ry:l});h.castShadow=!1,et(r,w.black,.025,.025,.04,Math.sin(l)*.3,.03,Math.cos(l)*.3,{seg:6,shadow:!1})}et(r,w.chrome,.025,.025,.32,0,.26,0,{seg:8}),Hi(r,w.fabric,.5,.08,.48,.03,0,.47,0);const o=s?.75:.55;E(r,w.black,.04,.5,.04,0,.62,-.25);const a=E(r,w.mesh,.46,o,.05,0,.62+o/2,-.27,{rx:-.1});a.material=w.mesh,s&&E(r,w.mesh,.3,.14,.06,0,1.45,-.33,{rx:-.1});for(const c of[-1,1])E(r,w.black,.035,.22,.035,c*.26,.6,-.02),E(r,w.black,.06,.025,.24,c*.26,.72,.02);return r}function Pp(i,e,t,n=0){const s=Nn(i,e,0,t,n);s.userData.label="Visitor chair";for(const r of[-1,1])E(s,w.chrome,.025,.025,.5,r*.22,.012,.05),E(s,w.chrome,.025,.45,.025,r*.22,.23,.29,{rx:.05});return E(s,w.fabric,.48,.06,.46,0,.47,.05),E(s,w.mesh,.46,.5,.04,0,.78,-.2,{rx:-.12}),s}function TM(i,e,t,n,s=0){const r=Nn(i,e,.77,t,n);r.userData.label="Monitor",Qt(r,ga.foot(),w.black),Qt(r,ga.arm(),w.silver),Qt(r,ga.back(),w.black),Qt(r,ga.shell(),w.black),gt(r,s%3===2?w.screenDash:w.screenCode,.52,.3,0,.35,-.058),E(r,w.led,.006,.0025,.002,.235,.35-.1665,-.0585,{shadow:!1});const o=-.26,a=.06;Hi(r,w.black,.114,.006,.114,.002,o,.003,a),Hi(r,w.silver,.12,.03,.12,.012,o,.021,a),gt(r,w.macTop,.09,.09,o,.0365,a,0,-Math.PI/2),E(r,w.black,.012,.004,.002,o-.03,.021,a+.0605,{shadow:!1}),E(r,w.black,.012,.004,.002,o-.012,.021,a+.0605,{shadow:!1}),E(r,w.white,.004,.004,.002,o+.04,.021,a+.0605,{shadow:!1}),Qt(r,kf.base(),w.silver,0,0,0,{shadow:!1}),Qt(r,kf.keys(),w.white,0,0,0,{shadow:!1});const c=.24,l=.24;return Qt(r,Ff.shell(),w.blackMatte,c,0,l),E(r,w.black,.0015,.003,.024,c,.0195,l-.02,{shadow:!1,rx:.25}),Qt(r,Ff.wheel(),w.chrome,c,.0185,l-.024,{shadow:!1}),s%3===0&&(Qt(r,Bf.body(),w.bottleYellow,.28,0,-.04),Qt(r,Bf.cap(),w.black,.28,0,-.04,{shadow:!1})),r}function zf(i,e,t,n,{width:s=1.5,seats:r=!0,solidFn:o,seatW:a=1.1,chairOff:c=.12,sides:l=[-1,1]}={}){const h=Nn(i,e,0,0);h.userData.label="Desk";const u=n-t,f=(t+n)/2;E(h,w.greyOak,s,.04,u,0,.75,f),E(h,w.oakEdge,s+.004,.012,u+.004,0,.734,f,{shadow:!1});const d=Math.max(2,Math.round(u/2)+1);for(let m=0;m<d;m++){const p=t+.12+m/(d-1)*(u-.24);for(const v of[-1,1])E(h,w.black,.05,.78,.05,v*(s/2-.22),.37,p,{rz:v*.2}),E(h,w.black,.05,.78,.05,v*(s/2-.22),.37,p,{rz:-v*.2});E(h,w.black,s-.2,.05,.05,0,.72,p)}if(o&&o(e-s/2,t,e+s/2,n),!r)return h;const g=Math.max(1,Math.floor(u/a+1e-6));let _=0;for(const m of l)for(let p=0;p<g;p++){const v=t+(p+.5)*(u/g),y=l.length===2?m*.22:-m*(s/2-.2);TM(h,y,v,m*Math.PI/2,_++);const x=e+m*(s/2+c);yr(i,x,v,m>0?-Math.PI/2:Math.PI/2),o&&o(x-.2,v-.2,x+.2,v+.2)}return h}function Bh(i,e,t,n=0,s=2){const r=Nn(i,e,0,t,n);r.userData.label="Sofa";const o=s*.75+.3;Hi(r,w.leather,o,.38,.9,.06,0,.24,0),Hi(r,w.leather,o,.5,.22,.08,0,.62,-.34);for(const a of[-1,1])Hi(r,w.leather,.18,.62,.9,.06,a*(o/2-.09),.33,0);for(let a=0;a<s;a++){const c=-o/2+.15+.75*(a+.5);Hi(r,w.leather,.72,.14,.62,.06,c,.49,.08);const l=Hi(r,w.leather,.5,.4,.14,.07,c,.78,-.18);l.rotation.x=-.18}return r}function ja(i,e,t,n,s=9,r=.8){const o=Nn(i,e,t,n);o.userData.label="Plant";for(let a=0;a<s;a++){const c=r*(.6+Qe()*.6),l=Qe()>.3;Qt(o,Cp(a%5),l?w.plant:a%2?w.plantDark:w.plantLight,(Qe()-.5)*.3,0,(Qe()-.5)*.2,{s:[1,c,1]}).rotation.set((Qe()-.5)*.35,Qe()*Math.PI,(Qe()-.5)*.35)}return o}function zh(i,e,t,{size:n=.45,h:s=.45,mat:r=w.white}={}){const o=Nn(i,e,0,t);o.userData.label="Plant";const{pot:a,soil:c,soilY:l}=wM(n,s);return Qt(o,a,r),Qt(o,c,w.soil,0,0,0,{shadow:!1}),ja(o,0,l-.01,0,11,.9),o}function Lp(i,e,t,n,{petal:s=w.petalPink,n:r=5,scale:o=1}={}){const a=Nn(i,e,t,n);a.userData.label="Flowers",a.scale.setScalar(o),Qt(a,xa.pot(),w.ceramic),Qt(a,xa.soil(),w.soil,0,0,0,{shadow:!1});const c=l=>{const h=Math.sin(l*127.1+e*311.7+n*74.7)*43758.5453;return h-Math.floor(h)};for(let l=0;l<r;l++){const h=l/r*Math.PI*2+c(l)*.6,u=.025+c(l+9)*.06,f=.16+c(l+3)*.12,d=[Math.cos(h)*u,f,Math.sin(h)*u];Qt(a,SM(d),w.stem,0,.1,0,{shadow:!1});const g=Nn(a,d[0],.1+d[1],d[2]);g.rotation.set(Math.sin(h)*.5,0,-Math.cos(h)*.5);const _=6;for(let m=0;m<_;m++)Qt(g,xa.petal(),s,0,0,0,{ry:m/_*Math.PI*2+c(l+m)*.2,rx:-.35,shadow:!1});Qt(g,xa.centre(),w.flowerCentre,0,.003,0,{shadow:!1})}for(let l=0;l<6;l++)Qt(a,Cp(l,{width:.035,thick:.006,bend:.06,twist:.3}),l%2?w.plant:w.plantDark,0,.098,0,{s:[1,.11+c(l+20)*.05,1],shadow:!1}).rotation.set(.7+c(l+30)*.3,l/6*Math.PI*2,0,"YXZ");return a}function Ip(i,e,t,n=w.beanbag){const s=new be(new Gt(.5,20,14),n);return s.scale.set(1,.65,1.05),s.position.set(e,.3,t),s.userData.label="Bean bag",s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function AM(i,e,t,n,{yellowCubbies:s=[]}={}){const r=Nn(i,e,0,0);r.userData.label="Shelving";const o=n-t,a=(t+n)/2,c=.4,l=2.4,h=.55;E(r,w.white,c,h,o,0,h/2,a);const u=Math.max(1,Math.round(o/1.1));for(let d=0;d<u;d++){const g=t+(d+.5)*(o/u);E(r,w.blackMatte,.3,.32,.3,0,h+.16,g),ja(r,0,h+.32,g,7,.6)}for(const d of[t+.02,n-.02])for(const g of[-1,1])E(r,w.black,.025,l-h,.025,g*c/2,h+(l-h)/2,d);for(const d of[1.55,l]){for(const g of[-1,1])E(r,w.black,.025,.025,o,g*c/2,d,a,{shadow:!1});E(r,w.black,c,.012,o,0,d-.01,a,{shadow:!1})}const f=Math.max(1,Math.round(o/.65));for(let d=1;d<f;d++)for(const g of[-1,1])E(r,w.black,.02,l-h,.02,g*c/2,h+(l-h)/2,t+d/f*o,{shadow:!1});for(const d of s){if(d.i>=f)continue;const g=t+(d.i+.5)*(o/f),_=d.row===0?1.2:1.9;E(r,w.yellow,c-.05,.45,o/f-.08,0,_,g)}for(let d=0;d<f;d++)Qe()<.3&&E(r,w.blackMatte,.12,.15+Qe()*.1,.12,0,1.55+.09,t+(d+.5)*(o/f));return r}function Dp(i,e,t,n=2.4,s=0,r=2.6,o=3.6){const a=Nn(i,e,r,t,s);a.userData.label="Light",E(a,w.black,n,.06,.08,0,0,0,{shadow:!1}),gt(a,w.lightStrip,n-.04,.05,0,-.031,0,0,Math.PI/2);for(const c of[-.4,.4])et(a,w.black,.003,.003,o-r,c*n,(o-r)/2,0,{seg:3,shadow:!1});return a}function Ua(i,e,t,n=2.2,s=3.6,r=1){const o=Nn(i,e,n,t);o.userData.label="Pendant light",et(o,w.black,.004,.004,s-n,0,(s-n)/2,0,{seg:3,shadow:!1});const a=new be(new Ih(.18*r,.26*r,20,1,!0),w.black);a.position.y=-.1*r,a.material.side=Ot,o.add(a),et(o,w.black,.02,.02,.06,0,.05,0,{seg:8,shadow:!1});const c=new be(new Kn(.15*r,16),w.spotGlow);return c.rotation.x=Math.PI/2,c.position.y=-.22*r,o.add(c),o}function RM(i,e,t,n){et(i,w.black,.05,.05,.12,e,n-.06,t,{seg:10,shadow:!1});const s=new be(new Kn(.035,10),w.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,n-.121,t),i.add(s)}function Hh(i,e,t,n,s=0){const r=Nn(i,e,t,n,s);return r.userData.label="AC unit",Hi(r,w.white,.9,.28,.2,.05,0,0,.1),E(r,w.metalDark,.8,.02,.02,0,-.1,.2,{shadow:!1}),r}function CM(i,e,t,n=3){E(i,w.white,.85,.12,.85,e,n,t,{shadow:!1}),E(i,w.metalDark,.55,.02,.55,e,n-.065,t,{shadow:!1})}function PM(i,e,t,n,s=0,r=2.4){const o=n-t,a=Nn(i,e,0,(t+n)/2,s);a.userData.label="Lockers";const c=Math.round(o/.5),l=5,h=o/c,u=(r-.1)/l;E(a,w.white,.02,r,o,-.265,r/2,0),E(a,w.white,.55,.1,o,0,.05,0);for(let f=0;f<=l;f++)E(a,w.white,.55,.02,o,0,f===l?r-.01:.1+f*u,0);for(let f=0;f<=c;f++)E(a,w.white,.55,r,.02,0,r/2,-o/2+f*h+(f===c?-.01:f===0?.01:0));a.updateMatrixWorld(!0);for(let f=0;f<c;f++)for(let d=0;d<l;d++){const g=-o/2+(f+.5)*h,_=.1+(d+.5)*u;Qe()<.35&&E(a,Qe()<.5?w.bottleYellow:w.black,.22,.05+Qe()*.12,h-.16,0,.1+d*u+.02+.03,g,{shadow:!1});const m=new tt;m.position.copy(a.localToWorld(new N(.285,_,g-h/2+.01))),m.rotation.y=a.rotation.y,E(m,w.whiteGloss,.01,u-.02,h-.02,0,0,h/2-.01,{shadow:!1}),E(m,w.metalDark,.02,.07,.07,.01,.08,h-.09,{shadow:!1,rx:Math.PI/4}),Oa.push({leaf:m,closed:a.rotation.y,open:a.rotation.y+1.9,center:a.localToWorld(new N(.285,_,g))})}return a}function LM(i,e,t,n,s=0){const r=Nn(i,e,t,n,s);r.userData.label="Wall clock";const o=new be(new Kn(.2,32),w.clock);o.position.z=.03,r.add(o);const a=new be(new Ur(.2,.02,8,32),w.black);return a.position.z=.03,r.add(a),r}const os=[];function Ge(i,e,t,n){os.push({minX:Math.min(i,t),maxX:Math.max(i,t),minZ:Math.min(e,n),maxZ:Math.max(e,n)})}const eo=new wi;function Pn(i,e=0){return i.updateMatrixWorld(!0),eo.setFromObject(i),Ge(eo.min.x-e,eo.min.z-e,eo.max.x+e,eo.max.z+e),i}function Hf(i,e,t){for(const n of os)if(i+t>n.minX&&i-t<n.maxX&&e+t>n.minZ&&e-t<n.maxZ)return n;return null}function IM(i,e,t,n){const s=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(t))/(n*.5))),r=e/s,o=t/s;for(let a=0;a<s;a++){if(r){const c=i.x+r,l=Hf(c,i.z,n);l?i.x=r>0?l.minX-n-1e-4:l.maxX+n+1e-4:i.x=c}if(o){const c=i.z+o,l=Hf(i.x,c,n);l?i.z=o>0?l.minZ-n-1e-4:l.maxZ+n+1e-4:i.z=c}}}const He=3.6,Ke=3,Jt=10.05,Ct=10.3,pt=18.7,ls=3.5,fn=3,Wt=5.75,Ut=3,cr=6.15,Wi=8.9,Lt=7.95,Yt=7.3,as=.15,xo=[12.45,15.45],bn=.5,To=2.9,Et=9.25,Vf=pt,kn=3.7,Pt=22.6,ah=[20,21.6],DM=25.2,li=6.6,Mn=27.2,NM=[2.3,3.2];function Ds(i,e,t,n){const s=i.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*e/n,s.getY(r)*t/n);return s.needsUpdate=!0,i}function St(i,e,t,n,s,r,o,{down:a=!1,tile:c=2.4}={}){const l=s-t,h=r-n,u=Ds(new ut(l,h),l,h,c),f=new be(u,e);return f.rotation.x=a?Math.PI/2:-Math.PI/2,f.position.set((t+s)/2,o,(n+r)/2),f.receiveShadow=!0,i.add(f),f}function $t(i,e,t,n,s,{h:r=He,mat:o=w.wall,t:a=.2,y0:c=0,collide:l=!0}={}){const h=Math.abs(n-e)>=Math.abs(s-t),u=h?Math.abs(n-e):a,f=h?a:Math.abs(s-t),d=E(i,o,u,r,f,(e+n)/2,c+r/2,(t+s)/2);return d.userData.label="Wall",l&&c<1.5&&Ge((e+n)/2-u/2,(t+s)/2-f/2,(e+n)/2+u/2,(t+s)/2+f/2),d}const Za=[],Oa=[],_n={x:10.3+.03,y:1.25,z:9.8};function dr(i,{x0:e,z0:t,x1:n,z1:s,h:r=3,door:o=null,transom:a=2.3,frost:c=!1,panel:l=1.1,swing:h=1,name:u="door"}){const f=t===s,d=new tt;d.userData.label="Glass wall",i.add(d),i=d;const g=f?e:t,_=f?n:s,m=f?t:e,p=(x,A,S,R,C)=>f?E(i,w.black,R,C,S,x,A,m,{shadow:!0}):E(i,w.black,S,C,R,m,A,x,{shadow:!0}),v=(x,A,S,R)=>{const C=new be(new ut(A-x,R-S),c?w.glassFrost:w.glass);C.position.set(f?(x+A)/2:m,(S+R)/2,f?m:(x+A)/2),f||(C.rotation.y=Math.PI/2),C.renderOrder=2,i.add(C)},y=o?[[g,Math.min(...o)],[Math.max(...o),_]]:[[g,_]];for(const[x,A]of y){if(A-x<.01)continue;v(x,A,.05,r);const S=Math.max(1,Math.round((A-x)/l));for(let R=0;R<=S;R++)p(x+R/S*(A-x),r/2,.05,.05,r);p((x+A)/2,.04,.06,A-x,.08),a&&a<r&&p((x+A)/2,a,.05,A-x,.05),f?Ge(x,m-.06,A,m+.06):Ge(m-.06,x,m+.06,A)}if(p((g+_)/2,r-.03,.06,_-g,.06),o){const[x,A]=o,S=Math.abs(A-x);v(Math.min(x,A),Math.max(x,A),a,r),p((x+A)/2,a,.06,S,.06);const R=new tt;R.position.set(f?x:m,0,f?m:x);const C=Math.sign(A-x),b=S-.04,M=new be(new ut(b,a-.1),w.glass);M.position.set(C*b/2,a/2,0),R.add(M);for(const Z of[0,1])E(R,w.black,.04,a-.08,.04,C*Z*b,a/2,0);E(R,w.black,b,.05,.04,C*b/2,.06,0),E(R,w.black,b,.04,.04,C*b/2,a-.08,0),E(R,w.chrome,.02,.35,.03,C*(b-.1),1.05,.04);const I=f?0:-Math.PI/2,V=I+(f?-1:1)*h*C*1.4;R.rotation.y=I;const B=Math.min(x,A),$=Math.max(x,A);Za.push({leaf:R,closed:I,open:V,name:u,handle:[C*(b-.1),1.2,.04],x:f?(x+A)/2:m,z:f?m:(x+A)/2,block:f?{minX:B,maxX:$,minZ:m-.06,maxZ:m+.06}:{minX:m-.06,maxX:m+.06,minZ:B,maxZ:$}})}}function to(i,e,t,n,s,r){const o=t===s,a=o?n-e:s-t,c=new be(new ut(a,r),w.glass);c.position.set((e+n)/2,r/2,(t+s)/2),o||(c.rotation.y=Math.PI/2),c.renderOrder=2,i.add(c);const l=Math.max(1,Math.round(a/1.2));for(let h=0;h<=l;h++)o?E(i,w.black,.07,r,.1,e+h/l*a,r/2,t):E(i,w.black,.1,r,.07,e,r/2,t+h/l*a);for(const h of[.08,.55,Math.min(2.45,r-.3),r-.04]){const u=h<.1?.16:.07;o?E(i,w.black,a,u,.1,(e+n)/2,h,t,{shadow:h>2}):E(i,w.black,.1,u,a,e,h,(t+s)/2,{shadow:h>2})}o?Ge(e,t-.08,n,t+.08):Ge(e-.08,t,e+.08,s)}function UM(i){St(i,w.diamond,0,ls,Ut,Lt,Ke,{down:!0}),St(i,w.diamond,Ut,Wt,Yt,Lt,Ke,{down:!0}),St(i,w.diamond,Yt,Wt,Ct,Et,Ke,{down:!0});for(const[e,t]of[[1,4.4],[1,6.8],[2.4,6.8],[4,7],[5.6,7],[7.9,6.9],[9.4,8.6],[8.2,8.9]])RM(i,e,t,Ke);E(i,w.yellow,Yt,He-Ke,.08,Yt/2,Ke+(He-Ke)/2,Lt+.04,{shadow:!1}),E(i,w.yellow,Yt,.07,.14,Yt/2,Ke-.035,Lt,{shadow:!1}),St(i,w.white,0,0,Ut,ls,Ke,{down:!0}),St(i,w.white,Ut,fn,Wi,Wt,Ke,{down:!0});for(const[e,t]of[[1.5,1.6],[5,4.5],[8.2,4.5]])E(i,w.whiteGloss,.35,.02,.35,e,Ke-.01,t,{shadow:!1});St(i,w.ceilingBlack,0,Lt,Jt,pt,He,{down:!0});for(const e of[12.3,15.3])E(i,w.ceilingBlack,Jt,.5,.4,Jt/2,He-.25,e,{shadow:!1});et(i,w.ceilingBlack,.2,.2,Jt,Jt/2,He-.45,9.2,{rz:Math.PI/2,shadow:!1,seg:14}),et(i,w.red,.04,.04,pt-Lt,4.6,He-.3,(Lt+pt)/2,{rx:Math.PI/2,shadow:!1,seg:8}),et(i,w.red,.04,.04,Jt,Jt/2,He-.3,17.9,{rz:Math.PI/2,shadow:!1,seg:8});for(const[e,t]of[[2,12.2],[5.5,12.2],[2,15.3],[5.5,15.3],[8.6,12.2]])CM(i,e,t,He-.62)}function Gf(i,e,t,n,s){const r=Math.hypot(n-e,s-t);E(i,w.blackMatte,.01,.012,r,Yt+.008,(t+s)/2,(e+n)/2,{shadow:!1,rx:Math.atan2(-(s-t),n-e)})}function OM(i){E(i,w.concrete,as,Ke,Et-7.4,Yt-as/2,Ke/2,(7.4+Et)/2),E(i,w.wall,as,He-Ke,Et-7.4,Yt-as/2,Ke+(He-Ke)/2,(7.4+Et)/2,{shadow:!1}),Ge(Yt-as,7.4,Yt,Et+.35);const t=Et-7.4,n=new be(Ds(new ut(t,Ke),t,Ke,1.6),w.concrete);n.position.set(Yt+.003,Ke/2,(7.4+Et)/2),n.rotation.y=Math.PI/2,n.receiveShadow=!0,n.userData.label="Logo wall",i.add(n),Gf(i,Et,3,7.4+.1,1),Gf(i,7.4+.1,1,7.4+.9,0),gt(i,w.logo,.5,.72,Yt+.03,2.35,8.25,Math.PI/2),gt(i,w.logoText,1,.35,Yt+.02,1.78,8.3,Math.PI/2),Pn(Bh(i,Yt+.47,8.4,Math.PI/2,2)),E(i,w.concrete,.5,Ke-.004,.32,Yt-.15,(Ke-.004)/2,7.4+.14),$t(i,Yt-as,Et+.175,8.3,Et+.175,{h:He,t:.35});const s=gt(i,w.glassFrost,Ct-8.3,Ke-.1,(8.3+Ct)/2,Ke/2,Et);s.renderOrder=2;for(const[a,c,l]of[[8.7,1.5,.5],[9.25,.9,-.4],[9.25,2.2,.6],[9.85,1.4,-.5]])E(i,w.concrete,.45,1,.01,a,c,Et-.02,{rz:l,shadow:!1});for(const a of[8.3,9.35,Ct])E(i,w.black,.05,Ke,.06,a,Ke/2,Et);E(i,w.black,Ct-8.3,.06,.06,(8.3+Ct)/2,.03,Et),E(i,w.wall,Ct-8.3,He-Ke,.15,(8.3+Ct)/2,Ke+(He-Ke)/2,Et,{shadow:!1}),Ge(8.3,Et-.08,Ct,Et+.08),dr(i,{x0:Ct,z0:Wt,x1:Ct,z1:Et,h:Ke,panel:.9,door:[7.6,8.65],transom:2.4,swing:-1,name:"entrance door"}),E(i,w.metalDark,.06,.05,.4,Ct-.06,2.3,8.4,{shadow:!1}),E(i,w.wall,.15,He-Ke,Et-Wt,Ct,Ke+(He-Ke)/2,(Wt+Et)/2,{shadow:!1}),E(i,w.blackMatte,.6,.01,1,Ct-.45,.005,8.12,{shadow:!1}),E(i,w.concrete,Ct-Wi,He,Wt-fn,(Wi+Ct)/2,He/2,(fn+Wt)/2),Ge(Wi,fn,Ct+.05,Wt);const r=new tt;r.position.set(9.85,0,Wt),i.add(r),E(r,w.cream,.56,2.3,.3,0,1.25,.15);for(const a of[.75,1.3,1.85,2.35])E(r,w.white,.58,.035,.32,0,a,.16);for(const[a,c,l]of[[-.14,1.87,.3],[.14,1.87,.26],[0,2.37,.34]])et(r,w.bottleYellow,.035,.05,l,a,c+l/2,.16,{seg:10});for(const[a,c,l]of[[-.12,1.32,w.gallery],[.13,1.32,w.red],[0,.77,w.gallery]])E(r,w.black,.2,.26,.03,a,c+.14,.16,{rx:-.12}),E(r,l,.16,.2,.01,a,c+.14,.178,{shadow:!1,rx:-.12});Ge(9.55,Wt,10.15,Wt+.32),E(i,w.white,.13,.16,.04,9.2,1.35,Wt+.02),E(i,w.bottleBlue,.07,.05,.01,9.2,1.38,Wt+.045,{shadow:!1});const o=new tt;o.userData.label="Reception desk",o.position.set(9.3,0,6.6),i.add(o),E(o,w.cream,.7,.05,1.25,0,.8,0),E(o,w.cream,.05,.78,1.25,-.33,.39,0,{rz:.12});for(const a of[-1,1])E(o,w.cream,.65,.78,.05,0,.39,a*.6);E(o,w.black,.05,.05,1.15,-.4,.03,0),et(o,w.black,.035,.035,.01,.1,.83,.3,{seg:12}),Lp(o,.12,.825,-.4,{petal:w.petalPink,n:6}),Pn(o),Ua(i,9.1,6.5,2.15,Ke,1.3),E(i,w.white,.08,.08,.06,Yt+.05,2.85,9.1),Pn(zh(i,9.95,8.95,{size:.4,h:.45}))}function Np(i,e,t,n=1.6,{monitor:s=!1}={}){const r=new tt;r.userData.label="Cabin desk",r.position.set(e,0,t),i.add(r),E(r,w.whiteGloss,n,.05,.8,0,.77,0),E(r,w.woodDark,n-.1,.72,.05,0,.38,.36);for(let o=0;o<6;o++)E(r,w.black,n-.15,.02,.01,0,.15+o*.1,.39,{shadow:!1});E(r,w.woodDark,.05,.72,.75,-n/2+.05,.38,0),E(r,w.woodDark,.45,.72,.6,n/2-.25,.38,0),s&&(E(r,w.black,.5,.31,.03,-.25,1.12,-.2),E(r,w.black,.04,.3,.03,-.25,.94,-.23)),Pn(r)}function kM(i,e,t,n,s){const r=new tt;r.userData.label="Built-in shelves",r.position.set(e+s*.2,0,(t+n)/2),i.add(r);const o=n-t;E(r,w.white,.4,2.7,o,0,1.35,0);const a=Math.max(1,Math.round(o/.8));for(let c=0;c<a;c++){const l=-o/2+(c+.5)*(o/a);for(const h of[1.2,1.65,2.1])E(r,w.whiteGloss,.02,.03,o/a-.06,s*.2,h,l,{shadow:!1});for(const h of[.25,.6,.95])E(r,w.whiteGloss,.02,.32,o/a-.06,s*.205,h,l,{shadow:!1});Qe()<.6&&E(r,w.black,.04,.18,.2,s*.12,1.32,l),Qe()<.6&&E(r,w.gallery,.12,.2,.15,s*.12,1.75,l+.2)}Ge(Math.min(e,e+s*.4),t,Math.max(e,e+s*.4),n)}function Wf(i,e,t,n){const s=t-e,r=new be(Ds(new ut(s,Ke),s,Ke,1.6),w.concrete);r.position.set((e+t)/2,Ke/2,n+.105),r.receiveShadow=!0,i.add(r)}function Xf(i,e,t,{chairsZ:n,back:s,len:r=1.6,visitors:o=[-.4,.4],monitor:a=!1}){Np(i,e,t,r,{monitor:a}),Pn(yr(i,e-.1,t-.75,0,{exec:!0}),-.1);for(const c of o)Pn(Pp(i,e+c,n,Math.PI),-.05);Hh(i,e,2.55,s+.11,0)}function FM(i){$t(i,Ut,fn,Wi,fn,{h:He}),$t(i,Ut,0,Ut,ls,{h:He}),dr(i,{x0:Ut,z0:ls,x1:Ut,z1:Wt,h:Ke}),$t(i,Ut,ls,Ut,Wt,{h:He-Ke,y0:Ke,collide:!1}),dr(i,{x0:cr,z0:fn,x1:cr,z1:Wt,h:Ke}),Wf(i,Ut+.1,cr-.08,fn),Wf(i,cr+.08,Wi,fn),dr(i,{x0:Ut,z0:Wt,x1:cr,z1:Wt,h:Ke,door:[6.05,5.15],swing:-1,name:"Cabin 2 door"}),dr(i,{x0:cr,z0:Wt,x1:Wi,z1:Wt,h:Ke,door:[6.25,7.15],swing:-1,name:"Cabin 1 door"}),dr(i,{x0:0,z0:ls,x1:Ut,z1:ls,h:Ke,door:[.15,1.05],swing:-1,name:"Corner cabin door"}),Xf(i,7.35,4.35,{chairsZ:5.15,back:fn,len:1.6,visitors:[.35,.85]}),kM(i,Wi,fn+.1,5.65,-1),Xf(i,4,4.35,{chairsZ:5.15,back:fn,len:1.5,monitor:!1}),Pn(zh(i,5.35,3.45,{size:.35,h:.4})),Np(i,1.6,1.85),Pn(yr(i,1.5,1.05,0,{exec:!0}),-.1);for(const t of[1.35,2.05])Pn(Pp(i,t,2.95,Math.PI),-.05);E(i,w.concrete,.55,Ke,.55,Ut-.38,Ke/2,.38),Ge(Ut-.65,0,Ut,.65),Hh(i,Ut-.11,2.55,1.8,-Math.PI/2),E(i,w.blackMatte,.25,.3,.25,2.7,.15,2.9),$t(i,0,Lt,1.3,Lt,{h:He,t:.3});const e=[[1.3,2.6],[4.3,5.6],[5.6,6.9]];for(const[t,n]of e){const s=new tt;s.position.set(0,0,Lt),s.rotation.y=Math.PI/2,i.add(s);const r=[];for(let o=0;o<3;o++)Qe()<.55&&r.push({i:o,row:Qe()<.5?0:1});AM(s,0,t,n,{yellowCubbies:r}),Ge(t,Lt-.2,n,Lt+.2)}Pn(Ip(i,.6,7.25),-.15),Pn(Bh(i,Ut-.47,5,-Math.PI/2,2)),E(i,w.red,.55,.01,.9,.5,.005,5.7,{shadow:!1}),Ua(i,1.9,4.6,2.2,Ke),Ua(i,5,7,2.25,Ke)}const ka=[{id:"W1",x:1.3,z:10.7,rot:0},{id:"L1",x:4.9,z:10.75,rot:0},{id:"W2",x:1.15,z:13.6,rot:0},{id:"L2",x:4.95,z:13.7,rot:0},{id:"W3",x:1.55,z:17.25,rot:0},{id:"L3",x:5.25,z:16.95,rot:0},{id:"E1",x:9.25,z:10.95,rot:0},{id:"E2",x:9.3,z:14,rot:0},{id:"E3",x:9.3,z:16.9,rot:0},{id:"LOCK",x:6.875,z:8.875,rot:0},{id:"LOCK2",x:.675,z:8.375,rot:270}],qf="rgba(238,222,180,0.96)",BM="rgba(232,186,80,0.16)";function Yf(i){const e=document.createElement("canvas");e.width=256,e.height=640;const t=e.getContext("2d"),n=(r,o)=>{t.fillStyle=o,t.beginPath(),r.forEach(([a,c],l)=>(l?t.lineTo:t.moveTo).call(t,a*256,c*640)),t.closePath(),t.fill()};t.fillStyle=qf,t.fillRect(0,0,256,640);for(const[r,o]of i)o?n(r,qf):(t.save(),t.beginPath(),r.forEach(([a,c],l)=>(l?t.lineTo:t.moveTo).call(t,a*256,c*640)),t.closePath(),t.clip(),t.clearRect(0,0,256,640),t.fillStyle=BM,t.fillRect(0,0,256,640),t.restore());const s=new Un(e);return s.colorSpace=yt,new kt({map:s,transparent:!0,roughness:.15,metalness:.05,depthWrite:!1,side:Ot})}const Up=[Yf([[[[0,.37],[1,.37],[1,1],[0,1]],!1],[[[.6,.15],[.77,.15],[.77,.22],[.6,.22]],!1],[[[1,.37],[.62,.6],[1,.85]],!0],[[[.42,.37],[.62,.37],[.35,.55],[.25,.5]],!0],[[[0,.55],[1,.9],[1,1],[0,1]],!0]]),Yf([[[[0,.3],[.75,.6],[.06,1],[0,1]],!1],[[[0,.42],[.43,.62],[0,.82]],!0],[[[.75,.6],[1,.6],[1,1],[.06,1],[.3,.85]],!0]])];function zM(i,e,t){const n=new tt;n.userData.label="Door",i.add(n);const s=9.95,r=Ct,o=10.12,a=bn*2,c=To,l=2.3;for(const f of[-1,1])E(n,w.concrete,r-s,c,.03,(s+r)/2,c/2,e+f*(bn+.015),{shadow:!1});E(n,w.concrete,r-s,.03,a,(s+r)/2,c+.015,e,{shadow:!1});for(const f of[-1,1])E(n,w.black,.07,c,.05,o,c/2,e+f*(bn-.025));for(const f of[.04,l,c-.03])E(n,w.black,.07,f===l?.06:.08,a,o,f,e);const h=new be(new ut(a-.1,l-.1),t);h.position.set(o,(l+.08)/2,e),h.rotation.y=Math.PI/2,h.renderOrder=2,n.add(h);const u=new be(new ut(a-.1,c-l-.1),Up[0].clone());u.material.map=null,u.material.color.set("#f4e7c4"),u.material.opacity=.75,u.position.set(o,(l+c)/2,e),u.rotation.y=Math.PI/2,u.renderOrder=2,n.add(u),E(n,w.chrome,.12,.35,.025,o,1.05,e+bn-.12,{shadow:!1}),Ge(s,e-bn,r,e+bn)}function HM(i,e,t,n,s,r=3,o=4){const a=new tt;a.position.set(e,t,n),a.rotation.y=s,a.userData.label="Photo gallery",i.add(a);const c=.3,l=.22,h=.08;for(let u=0;u<o;u++)for(let f=0;f<r;f++){if(u===o-1&&f===r-1)continue;const d=(f-(r-1)/2)*(c+h),g=((o-1)/2-u)*(l+h);E(a,w.black,c,l,.02,d,g,.01,{shadow:!1}),gt(a,w.gallery,c-.04,l-.04,d,g,.021)}}function VM(i,e,t,n,s){zM(i,t,Up[s]);const r=new tt;r.position.set(e,0,t),r.rotation.y=n,r.userData.label="Wall",i.add(r);const o=2*bn+.16,a=To;for(const c of[-1,1])E(r,w.white,.14,He,.08,c*(bn+.15),He/2,.12);E(r,w.blackMatte,o,He-a-.12,.03,0,(a+.12+He)/2,.11,{shadow:!1}),E(r,w.white,o,.12,.08,0,a+.06,.12)}const GM={W:{len:1.4,width:1.2,seatW:.7,name:"Window table"},L:{len:2.8,width:1.2,seatW:.7,name:"Long table"},E:{len:1.3,width:.8,seatW:1.2,name:"East-wall desk"}};function WM(i,e,t,{len:n,width:s,seatW:r},o=0,a="Table"){const c={width:s,seatW:r,chairOff:.12};if(o%180){const h=new tt;h.userData.label=a,i.add(h),zf(h,e,t-n/2,t+n/2,{...c,solidFn:(u,f,d,g)=>Ge(u,f,d,g)});return}const l=new tt;l.position.set(0,0,t),l.rotation.y=Math.PI/2,l.userData.label=a,i.add(l),zf(l,0,e-n/2,e+n/2,{...c,solidFn:(h,u,f,d)=>Ge(u,t-f,d,t-h)})}function XM(i){const[e,t,n,s]=[.45,2.95,.5,2.75];$t(i,0,pt,e,pt,{h:He}),$t(i,e,pt,t,pt,{h:n}),$t(i,e,pt,t,pt,{h:He-s,y0:s,collide:!1}),$t(i,t,pt,Jt,pt,{h:He});{const c=new tt;c.userData.label="Meeting room window",i.add(c);const l=new be(new ut(t-e,s-n),w.glass);l.position.set((e+t)/2,(n+s)/2,pt),l.renderOrder=2,c.add(l);const h=[e,e+.85,e+1.7,t],u=[n,n+.65,n+1.6,s];for(const f of h)E(c,w.black,.06,s-n+.06,.22,f,(n+s)/2,pt,{shadow:!1});for(const f of u)E(c,w.black,t-e,.06,.22,(e+t)/2,f,pt,{shadow:!1})}{const c=xo.flatMap(h=>[h-bn,h+bn]),l=[Et,...c,pt];for(let h=0;h<l.length;h+=2)$t(i,Jt,l[h],Jt,l[h+1],{h:He});for(const h of xo)$t(i,Jt,h-bn,Jt,h+bn,{h:He-To,y0:To,collide:!1})}E(i,w.ceilingBlack,Jt,.45,.05,Jt/2,He-.225,pt-.13,{shadow:!1}),E(i,w.ceilingBlack,.05,.45,pt-Et,Jt-.13,He-.225,(Et+pt)/2,{shadow:!1}),E(i,w.white,.6,He,.6,7.35,He/2,15.7).userData.label="Pillar",Ge(7.05,15.4,7.65,16),LM(i,7.35,2.35,15.39,Math.PI),E(i,w.white,1.25,He,.4,.62,He/2,15.7).userData.label="Window column",Ge(0,15.5,1.25,15.9);for(const c of ka){const l=GM[c.id[0]];!l||c.id.startsWith("LOCK")||(WM(i,c.x,c.z,l,c.rot||0,`${l.name} ${c.id}`),c.id[0]==="E"?Ua(i,c.x,c.z,2.2):Dp(i,c.x,c.z,Math.min(2.4,l.len-.1),c.rot%180?Math.PI/2:0))}const r=new be(new ut(Jt-3.3,pt-17.6),w.floorBeige);r.rotation.x=-Math.PI/2,r.position.set((3.3+Jt)/2,.004,(17.6+pt)/2),r.receiveShadow=!0,i.add(r);const o=et(i,w.blackMatte,.16,.16,.6,4.2,.3,pt-.3,{seg:16});Pn(o),E(i,w.glassYellow,.18,.38,.02,4.2,.34,pt-.47,{shadow:!1}),xo.forEach((c,l)=>VM(i,Jt-.1,c,-Math.PI/2,l)),HM(i,Jt-.115,1.95,14,-Math.PI/2);const a={0:Math.PI,90:Math.PI/2,180:0,270:-Math.PI/2};for(const c of ka.filter(l=>l.id.startsWith("LOCK"))){const l=((c.rot||0)%360+360)%360;PM(i,c.x,c.z-.625,c.z+.625,a[l]);const[h,u]=l%180?[.625,.275]:[.275,.625];Ge(c.x-h,c.z-u,c.x+h,c.z+u)}for(const[c,l]of[[1.6,8.6]])Pn(zh(i,c,l,{size:.4,h:.5,mat:w.blackMatte}))}const hi=-40,Gc=9,Wc=12;let Xc=5660;const yn=()=>(Xc=Xc*16807%2147483647,(Xc-1)/2147483646),Zt=(i,e)=>i+yn()*(e-i),vi=(i,e={})=>new kt({color:i,roughness:1,...e});function qM(i){const e={cool:["#a4a8ac","#a3a7aa","#a2a9af","#9ba9b8","#8ea2bd","#7d95b5","#7890b0"],centre:["#ccc8bd","#cec8bb","#cbc6bb","#c4c8c7","#b3c0ca","#a2b4c4","#9bb0c2"],warm:["#e6d5b9","#ead9bd","#efe1c4","#f4efde","#eaebe3","#d0dbe0","#bccbd6"]},t=[0,3,10,18,26,60,90],n=ce=>new rt(ce),s=(ce,K)=>{const fe=e[ce];if(K<=0)return n(fe[0]);let re=0;for(;re<t.length-2&&K>t[re+1];)re++;const Ae=Math.min(1,(K-t[re])/(t[re+1]-t[re]));return n(fe[re]).lerp(n(fe[re+1]),Ae)},r=document.createElement("canvas");r.width=256,r.height=128;const o=r.getContext("2d");for(let ce=0;ce<r.width;ce++){let K=ce/r.width*360;K>180&&(K-=360);const fe=-K,re=Math.max(-1,Math.min(1,fe/38))*Math.max(0,1-Math.max(0,Math.abs(K)-90)/60);for(let Ae=0;Ae<r.height;Ae++){const Se=90-Ae/(r.height-1)*180,L=s("centre",Se).lerp(s(re<0?"cool":"warm",Se),Math.abs(re));o.fillStyle="#"+L.getHexString(),o.fillRect(ce,Ae,1,1)}}const a=new Un(r);a.colorSpace=yt;const c=new be(new Gt(1300,32,24),new Ln({map:a,side:wn,fog:!1,depthWrite:!1,toneMapped:!1}));c.renderOrder=-1,i.add(c);const l=new be(new ut(2600,2600),vi("#34462a"));l.rotation.x=-Math.PI/2,l.position.y=hi,i.add(l);const h=new Map,u=(ce,K,fe)=>{h.has(ce)||h.set(ce,[]);const re=K.clone();re.applyMatrix4(fe),h.get(ce).push(re)},f=new ot,d=new $n,g=new En,_=new N,m=new N,p=(ce,K,fe,re,Ae,Se,L,T,W=0)=>{d.setFromEuler(g.set(0,W,0)),f.compose(m.set(fe,re,Ae),d,_.set(Se,L,T)),u(ce,K,f)},v=2016,y=1512,A=3029/2,[S,R,C,b]=[1480,3550,1270,1760],M={x:-2.8,y:1.6,z:12},I=230,V=ce=>M.z-(ce-v)/A*I,B=ce=>M.y+(y-ce)/A*I,$=(ce,K)=>{const fe=M.x-ce;if(fe<60)return 1/0;const re=v-(K-M.z)/fe*A;return re<S-60||re>R+60?1/0:fe>I?-1/0:M.y+(y-(b-25))/A*fe},Z=new Xa(1,1).toNonIndexed(),Y=new Yn(.16,.24,1,5,1,!0).toNonIndexed();Y.translate(0,.5,0);const ne=YM(),z=["#34452a","#3d4f30","#475a37","#516440","#38492d"].map(ce=>vi(ce,{flatShading:!0})),pe=["#43552f","#4d6136","#3b4c2a","#566b3c"].map(ce=>vi(ce,{side:Ot,roughness:.85})),me=vi("#4f4a40"),we=ce=>ce[Math.floor(yn()*ce.length)],Be=(ce,K,fe=Zt(9,17),re=hi)=>{const Ae=$(ce,K)-re-2;if(Ae<3){Ae>1&&Ve(ce,K,Ae/2.2,re);return}fe=Math.min(fe,Ae);const Se=Zt(-.08,.08);p(me,Y,ce,re,K,1,fe,1,0);const L=Zt(.8,1.15);d.setFromEuler(g.set(Se,yn()*Math.PI*2,Se)),f.compose(m.set(ce,re+fe,K),d,_.set(L,L,L)),u(we(pe),ne,f)};function Ve(ce,K,fe,re=hi){fe=Math.min(fe,($(ce,K)-re-4)/1.8),!(fe<.8)&&p(we(z),Z,ce,re+fe*.9+Zt(1,4),K,fe*Zt(.9,1.2),fe*Zt(.6,.85),fe*Zt(.9,1.2),yn()*6)}const Q=(ce,K)=>ce<-7||K<-8&&ce<40||K>30&&ce<20;for(let ce=0;ce<2600;ce++){const K=Zt(-190,40),fe=Zt(-170,210);Q(K,fe)&&(yn()<.58?Be(K,fe):Ve(K,fe,Zt(3.5,7)))}for(let ce=0;ce<5200;ce++){const K=Math.PI*.4+yn()*Math.PI*1.25,fe=Zt(170,560),re=Gc+Math.cos(K)*fe,Ae=Wc+Math.sin(K)*fe;yn()<.55?Be(re,Ae,Zt(10,18)):Ve(re,Ae,Zt(6,11))}for(let ce=0;ce<1800;ce++){const K=Math.PI*.4+yn()*Math.PI*1.25,fe=Zt(540,1150);Ve(Gc+Math.cos(K)*fe,Wc+Math.sin(K)*fe,Zt(14,26))}he(-700,300,260,62,190),he(-980,-520,380,75,300),he(-1050,700,300,60,260),he(-1100,60,500,35,240);function he(ce,K,fe,re,Ae){const Se=new be(new Gt(1,28,14,0,Math.PI*2,0,Math.PI/2),vi("#3f5230",{flatShading:!0}));Se.scale.set(fe,re,Ae),Se.position.set(ce,hi-2,K),i.add(Se);const L=Math.round(fe*Ae/90);for(let T=0;T<L;T++){const W=yn()*Math.PI*2,le=Math.sqrt(yn())*.97,xe=Math.cos(W)*le,oe=Math.sin(W)*le,Le=hi-2+re*Math.sqrt(Math.max(0,1-xe*xe-oe*oe)),Te=ce+xe*fe,Pe=K+oe*Ae;yn()<.35?Be(Te,Pe,Zt(10,16),Le-2):Ve(Te,Pe,Zt(7,13),Le-3)}}const _e=vi("#c9c6be",{roughness:.9}),ve=vi("#b5b0a6",{roughness:.9}),Ne=vi("#6e4234",{roughness:.9}),Fe=vi("#8f9496",{roughness:.6,metalness:.3}),ue=vi("#56606a",{roughness:.4}),Ce=new an(1,1,1).toNonIndexed(),j=new Yn(.5,.5,1,3,1).toNonIndexed();j.rotateZ(Math.PI/2),j.rotateX(-Math.PI/2);for(let ce=0;ce<70;ce++){const K=Math.PI*.55+yn()*Math.PI*.95,fe=30+Math.pow(yn(),1.4)*420,re=Gc+Math.cos(K)*fe,Ae=Wc+Math.sin(K)*fe;if(!Q(re,Ae))continue;const Se=Zt(8,14),L=Zt(8,13),T=Zt(6,11),W=yn()*Math.PI;if(hi+T+3.5>$(re,Ae))continue;p(yn()<.7?_e:ve,Ce,re,hi+T/2,Ae,Se,T,L,W),p(ue,Ce,re,hi+T*.62,Ae,Se+.1,1,L*.6,W);const le=yn();le<.45?p(_e,Ce,re,hi+T+.4,Ae,Se+.3,.8,L+.3,W):le<.8?p(Ne,j,re,hi+T+1.6,Ae,Se+1,3.2,L+1,W):p(Fe,Ce,re,hi+T+.6,Ae,Se+1,.25,L+1,W)}const de=new Uh().load("textures/skyline.png");de.colorSpace=yt,de.anisotropy=4;const D=new be(new ut(V(S)-V(R),B(C)-B(b)),new Ln({map:de,transparent:!0,alphaTest:.03,depthWrite:!1,fog:!1,toneMapped:!1}));D.rotation.y=Math.PI/2,D.position.set(M.x-I,(B(C)+B(b))/2,(V(S)+V(R))/2),D.renderOrder=1,i.add(D);for(const[ce,K]of h){const fe=new be(Ka(K,!1),ce);fe.castShadow=!1,fe.receiveShadow=!1,i.add(fe)}}function YM(){const i=[];for(let s=0;s<9;s++){const r=s/9*Math.PI*2+s%2*.2,o=s%3===0?.55:.25,a=[];for(let u=0;u<=3;u++){const f=u/3,d=f*4.6,g=o*d*.6-f*f*2.4,_=.55*Math.sin(Math.PI*Math.min(1,f*1.1+.08));a.push({r:d,y:g,w:_})}const c=[Math.cos(r),Math.sin(r)],l=[-Math.sin(r),Math.cos(r)],h=(u,f)=>[c[0]*u.r+l[0]*u.w*f,u.y,c[1]*u.r+l[1]*u.w*f];for(let u=0;u<3;u++){const f=h(a[u],-1),d=h(a[u],1),g=h(a[u+1],-1),_=h(a[u+1],1);i.push(...f,...g,...d,...d,...g,..._)}}const n=new Ht;return n.setAttribute("position",new ft(i,3)),n.computeVertexNormals(),n.setAttribute("uv",new ft(new Float32Array(i.length/3*2),2)),n}const cn=DM,vt=-3.6,yi=.25,Ps=3.85,Op=.12,_a=-3.95,ss=i=>Ps+i*Op,zt=i=>new kt(i),ze={curb:zt({color:"#6f6c66",roughness:.95}),steel:zt({color:"#8e8d88",roughness:.55,metalness:.55}),rust:zt({color:"#9b8a78",roughness:.7,metalness:.35}),galv:zt({color:"#a9aca9",roughness:.45,metalness:.6}),steelRail:zt({color:"#c4c7c9",roughness:.22,metalness:.95}),poly:new kt({color:"#d2a8c8",transparent:!0,opacity:.42,roughness:.35,depthWrite:!1,side:Ot}),glass:new kt({color:"#d6e6e2",transparent:!0,opacity:.2,roughness:.05,metalness:.1,depthWrite:!1,side:Ot}),clad:zt({color:"#cfc6b2",roughness:.6,metalness:.25}),plaster:zt({color:"#e9e6df",roughness:.95}),coir:zt({color:"#6e4b30",roughness:1}),potWhite:zt({color:"#efede8",roughness:.55}),leafDark:zt({color:"#355e2a",roughness:.75}),leafMid:zt({color:"#5e8a3a",roughness:.75}),leafPale:zt({color:"#a9bf83",roughness:.75}),leafRed:zt({color:"#a6473a",roughness:.75}),palm:zt({color:"#4f7a2f",roughness:.8,side:Ot}),macrame:zt({color:"#6d5a4b",roughness:1,side:Ot}),cushion:zt({color:"#d9cdb8",roughness:1}),tableTop:zt({color:"#8a6142",roughness:.55}),rattan:zt({color:"#7b6c60",roughness:.9}),water:new kt({color:"#a9cde8",transparent:!0,opacity:.55,roughness:.1,depthWrite:!1}),capBlue:zt({color:"#2464b0",roughness:.5}),counterTop:zt({color:"#222222",roughness:.35,metalness:.2}),acGrey:zt({color:"#d9d9d4",roughness:.6})},$M=(()=>{const i=document.createElement("canvas");i.width=128,i.height=256;const e=i.getContext("2d"),t=["#a4553f","#d9b26a","#5b6f8a","#c98a5a","#7a8a5a","#e6d6b8","#8a4a5a"];for(let s=0;s<256;s+=3)e.fillStyle=t[Math.floor(Qe()*t.length)],e.fillRect(0,s,128,3);const n=new Un(i);return n.colorSpace=yt,n})();ze.rug=zt({map:$M,roughness:1});const KM=(i=16)=>{const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.strokeStyle="#fff",t.lineWidth=3;for(let s=-128;s<=256;s+=i)t.beginPath(),t.moveTo(s,0),t.lineTo(s+128,128),t.stroke(),t.beginPath(),t.moveTo(s,128),t.lineTo(s+128,0),t.stroke();const n=new Un(e);return n.wrapS=n.wrapT=mi,n},kp=KM(22);kp.repeat.set(5,3);ze.macrameNet=zt({color:"#6d5a4b",alphaMap:kp,alphaTest:.5,roughness:1,side:Ot});const jM=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,3),e.fillRect(0,0,3,64);const t=new Un(i);return t.wrapS=t.wrapT=mi,t})();function Ns(i,e,t,n,s){const r=new tt;return r.position.set(e,t,n),s&&(r.userData.label=s),i.add(r),r}function va(i,e,t,n,s,r,o,a=8){return et(i,e,t,t,o-r,n,s,(r+o)/2,{rx:Math.PI/2,seg:a,shadow:!1})}function ya(i,e,t,n,s,r,o=7){for(let a=0;a<o;a++){const c=new be(new Xa(1,0),r[a%r.length]),l=s*(.45+Qe()*.4);c.scale.set(l,l*(.7+Qe()*.5),l);const h=Qe()*Math.PI*2,u=Qe()*s*.6;c.position.set(e+Math.cos(h)*u,t+l*.8+Qe()*s*.6,n+Math.sin(h)*u),c.rotation.set(Qe()*3,Qe()*3,Qe()*3),c.castShadow=!0,c.receiveShadow=!0,i.add(c)}}function Fp(i,e,t,n,{n:s=12,len:r=.6,mat:o=ze.leafMid,droop:a=.5,w:c=.12}={}){for(let l=0;l<s;l++){const h=new tt;h.position.set(e,t,n),h.rotation.y=l/s*Math.PI*2+Qe()*.4,i.add(h);const u=a*(.5+Qe()),f=new be(new ut(r,c),o);f.position.set(Math.cos(u)*r/2,Math.sin(-u+.9)*r/2-.05,0),f.rotation.set(Math.PI/2-.3,0,-u+.9-Math.PI/4),f.castShadow=!0,h.add(f)}}function lr(i,e,t,n="snake",{r:s=.18,h:r=.32}={}){const o=Ns(i,e,0,t,"Plant");return et(o,ze.potWhite,s,s*.78,r,0,r/2,0,{seg:16}),et(o,w.soil,s-.02,s-.02,.01,0,r-.01,0,{seg:12,shadow:!1}),n==="snake"?ja(o,0,r,0,10,.75):n==="bush"?ya(o,0,r,0,s*1.6,[ze.leafDark,ze.leafMid]):n==="variegated"?ya(o,0,r,0,s*1.7,[ze.leafPale,ze.leafMid,ze.leafPale],9):n==="croton"?ya(o,0,r,0,s*1.4,[ze.leafRed,ze.leafMid,ze.leafRed]):n==="fern"?Fp(o,0,r+.08,0,{n:16,len:.55,mat:ze.leafPale,droop:.9,w:.16}):n==="tree"&&(et(o,w.woodDark,.015,.02,.9,0,r+.45,0,{seg:5}),ya(o,0,r+.55,0,.35,[ze.leafMid,ze.leafPale,ze.leafDark],8)),Ge(e-s,t-s,e+s,t+s),o}function $f(i,e,t,n,s,r=ze.coir){et(i,w.blackMatte,.004,.004,n-s,e,(n+s)/2,t,{seg:3,shadow:!1}),et(i,r,.07,.11,.3,e,s-.15,t,{seg:10})}function ZM(i,e,t,n=0){const s=Ns(i,e,0,t,"Bar stool");s.rotation.y=n;for(const[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])E(s,w.black,.025,.78,.025,r*.15,.39,o*.15,{rx:o*.05,rz:-r*.05});E(s,w.black,.34,.04,.34,0,.78,0);for(const r of[-1,1])E(s,w.black,.025,.36,.025,.15,.96,r*.13);E(s,w.black,.025,.06,.3,.15,1.12,0),E(s,w.black,.3,.02,.02,0,.3,.15,{shadow:!1}),E(s,w.black,.3,.02,.02,0,.3,-.15,{shadow:!1})}function JM(i,e,t,n=.62){const s=Ns(i,e,0,t,"Stool");et(s,ze.tableTop,.17,.17,.04,0,n,0,{seg:16});for(let o=0;o<3;o++){const a=o/3*Math.PI*2;E(s,w.black,.02,n,.02,Math.cos(a)*.14,n/2,Math.sin(a)*.14,{rz:Math.cos(a)*.1,rx:-Math.sin(a)*.1})}const r=new be(new Ur(.16,.008,4,20),w.black);r.rotation.x=Math.PI/2,r.position.y=.22,s.add(r),Ge(e-.18,t-.18,e+.18,t+.18)}function QM(i){const e=Ns(i,0,0,0,"Terrace"),t=cn;St(e,w.floorTerrace,vt,0,0,cn,0),E(e,ze.curb,.3,yi,t,vt+.15,yi/2,t/2),E(e,ze.curb,.32,.03,t,vt+.15,yi+.015,t/2,{shadow:!1}),Ge(vt-.1,0,vt+.32,cn),Ge(vt,-.15,0,0),Ge(vt,cn,0,cn+.15);const n=vt+.1,s=yi+1;for(let m=0;m<t-.01;m+=1.2){const p=Math.min(1.2,t-m)-.02,v=new be(new ut(p,s-yi-.06),ze.glass);v.position.set(n,(yi+s)/2,m+.01+p/2),v.rotation.y=Math.PI/2,v.renderOrder=2,e.add(v),E(e,w.chrome,.03,.06,.05,n,s-.04,m+.06,{shadow:!1}),E(e,w.chrome,.03,.06,.05,n,yi+.06,m+.06,{shadow:!1})}va(e,ze.steelRail,.028,n,s+.03,0,t,12),va(e,ze.galv,.035,vt+.42,.55,.4,t-.4,10);for(let m=1.5;m<t;m+=3.1)E(e,ze.galv,.03,.3,.03,vt+.42,.4,m,{shadow:!1});for(const m of[.12,t-.12])et(e,ze.steelRail,.025,.025,s,vt+.35,s/2,m,{seg:10}),E(e,ze.steelRail,.25,.04,.04,vt+.23,s+.03,m,{shadow:!1});const r=m=>m<Lt?Ke:2.8;for(const[m,p]of[[0,Lt],[Lt,cn]]){const v=r(m),y=Ps+.2-v;E(e,ze.clad,.03,y,p-m,-.09,v+y/2,(m+p)/2,{shadow:!1});for(let x=m+.08;x<p;x+=.16)E(e,ze.clad,.025,y,.035,-.115,v+y/2,x,{shadow:!1});E(e,ze.steel,.12,.08,p-m,-.12,v+.04,(m+p)/2,{shadow:!1})}const o=-_a,a=Math.atan2(o*Op,o),c=o/Math.cos(a),l=_a/2,h=E(e,ze.poly,c,.012,t+.4,l,ss(l)+.06,t/2,{shadow:!1,rz:a});h.renderOrder=3;for(let m=0;m<=t+.01;m+=t/16)E(e,Math.round(m/(t/16))%3===1?ze.rust:ze.steel,c,.1,.06,l,ss(l),m,{rz:a});for(const m of[-.35,-1.25,-2.15,-3.05,-3.85])va(e,ze.steel,.025,m,ss(m)+.03,-.2,t+.2);E(e,ze.steel,.16,.14,t+.4,_a,ss(_a)-.02,t/2),E(e,ze.steel,.12,.12,t,-.18,Ps-.06,t/2);const u=-1.8,f=ss(u)-.28;va(e,ze.galv,.02,u,f,0,t);for(let m=.5;m<t;m+=1.55){et(e,ze.galv,.006,.006,.26,u,f+.13,m,{seg:4,shadow:!1}),et(e,w.white,.055,.045,.1,u,f-.07,m,{seg:12,shadow:!1});const p=new be(new Kn(.035,12),w.spotGlow);p.rotation.x=Math.PI/2,p.position.set(u,f-.121,m),e.add(p)}const d=vt+.36;for(let m=0;m<=8;m++){const p=.25+m*(t-.5)/8,v=ss(d);if(et(e,ze.galv,.045,.045,v-yi,d,(v+yi)/2,p,{seg:10}),m>=3&&m<=5){et(e,ze.coir,.085,.085,2.5,d,yi+1.3,p,{seg:12});for(const y of[.9,1.6,2.3])et(e,ze.plaster,.088,.088,.06,d,y,p,{seg:12,shadow:!1});$f(e,d+.16,p+.05,v-.1,2.75)}Ge(d-.09,p-.09,d+.09,p+.09)}const g=-.32,_=[[1.4,"tree"],[1.95,"fern"],[2.6,"croton"],[3.2,"variegated"],[4.35,"snake"],[7,"snake"],[7.5,"variegated"],[8,"bush"],[8.5,"snake"],[10.6,"bush"],[11.1,"snake"],[11.6,"variegated"],[12.1,"snake"],[13.6,"tree"],[14.6,"bush"],[16.3,"snake"],[17.2,"variegated"],[18.2,"snake"],[19.3,"croton"],[22,"fern"]];for(const[m,p]of _)lr(e,g-(p==="fern"?.1:0),m,p,p==="tree"?{r:.2,h:.34}:{});lr(e,vt+.75,12,"variegated",{r:.22,h:.4}),lr(e,vt+.75,8.3,"tree",{r:.18,h:.34});for(const m of[6.2,9.9,13])$f(e,-.55,m,Ps-.1,2.55,ze.potWhite);E(e,ze.rug,.55,.012,.85,-.45,.007,5.7,{shadow:!1}),E(e,ze.rug,.5,.012,.8,-.4,.007,20.8,{shadow:!1,ry:.08});{const y=Ns(e,-.95,0,9.3,"Hanging chair");et(y,ze.coir,.012,.012,ss(-.95)-1.75,0,(ss(-.95)+1.75)/2,0,{seg:4});const x=new N(0,1.75,0);for(const C of[-.6,.6,Math.PI-.5,Math.PI+.5]){const M=new N(Math.cos(C)*.46,1.05,Math.sin(C)*.46).clone().sub(x),I=new be(new Yn(.01,.01,M.length(),4),ze.coir);I.position.copy(x).addScaledVector(M,.5),I.quaternion.setFromUnitVectors(new N(0,1,0),M.normalize()),y.add(I)}const A=new be(new Ur(.5,.025,6,32),ze.macrame);A.position.set(0,.55+.5,0),A.rotation.x=Math.PI/2,y.add(A);const S=new be(new Gt(.5,20,12,0,Math.PI*2,Math.PI*.5,Math.PI*.42),ze.macrameNet);S.position.y=.55+.42,S.castShadow=!0,y.add(S);const R=new be(new Gt(.5,20,10,-Math.PI/2,Math.PI,.15*Math.PI,.38*Math.PI),ze.macrameNet);R.position.y=.55+.42,R.castShadow=!0,y.add(R),et(y,ze.cushion,.36,.36,.1,0,.55+.07,0,{seg:20});for(let C=0;C<14;C++){const b=C/14*Math.PI*2;et(y,ze.macrame,.012,.004,.1,Math.cos(b)*.3,.55-.02,Math.sin(b)*.3,{seg:4,shadow:!1})}Ge(-.95-.45,9.3-.45,-.95+.45,9.3+.45)}{const v=vt+.58;E(e,ze.tableTop,.38,.05,13.4-10.3,v,1.05,(10.3+13.4)/2);for(const y of[10.3+.15,(10.3+13.4)/2,13.4-.15])E(e,w.black,.04,1.03,.04,v-.05,.52,y),E(e,w.black,.3,.03,.03,v,.98,y,{shadow:!1});Ge(v-.2,10.3,v+.2,13.4);for(const y of[10.8,11.6,12.4,13.1])ZM(e,v+.5,y,0);for(const y of[10.8,11.6,12.4,13.1])Ge(v+.33,y-.18,v+.67,y+.18)}{const v=Ps+.1,y=vt+.45,x=.9,A=Math.hypot(-.3-y,v-x),S=Math.atan2(v-x,-.3-y);E(e,ze.curb,A,.42,.3,(-.3+y)/2,(v+x)/2,.06+.1,{rz:S});const R=new Co([new ye(y,0),new ye(-.3,0),new ye(-.3,v),new ye(y,x)]),C=new be(new Nh(R),zt({color:"#cfccc4",roughness:.95,side:Ot}));C.position.z=.06-.04,C.receiveShadow=!0,e.add(C),E(e,ze.curb,-.3-y,.3,.3,(-.3+y)/2,.15,.06+.1),E(e,ze.plaster,.35,Ps,.2,-.17,Ps/2,.06+.05);const b=-2.75,M=-.4,I=2.55,V=jM.clone();V.needsUpdate=!0,V.repeat.set((M-b)/.1,I/.1);const B=zt({color:"#2a2a2a",alphaMap:V,alphaTest:.5,side:Ot,roughness:.8}),$=new be(new ut(M-b,I),B);$.position.set((b+M)/2,I/2,.06+.02),e.add($);for(const Y of[b,(b+M)/2,M])E(e,w.black,.03,I,.03,Y,I/2,.06+.03,{shadow:!1});E(e,w.black,M-b,.03,.03,(b+M)/2,I,.06+.03,{shadow:!1});const Z=Y=>x+(Y-y)*(v-x)/(-.3-y);for(let Y=0;Y<5;Y++){const ne=.45+Y*.42;for(let z=b+.2;z<M-.1;z+=.36)ne>Z(z)-.35||(E(e,w.blackMatte,.2,.13,.1,z,ne,.06+.08,{shadow:!1}),ja(e,z,ne+.06,.06+.1,6,.32).rotation.x=.25)}lr(e,-.75,.45,"tree",{r:.17,h:.3}),lr(e,-1.15,.4,"bush")}{const m=cn-.12;E(e,ze.plaster,-vt,1.15,.24,vt/2,.575,m),E(e,ze.plaster,-vt,.5,.6,vt/2,1.4,cn+.3);for(let S=vt+.4;S<-.2;S+=.7)et(e,w.woodDark,.03,.04,.9,S,2.05,cn+.3,{seg:6}),Fp(e,S,2.45+Qe()*.3,cn+.3,{n:9,len:.9,mat:ze.palm,droop:.45,w:.22});E(e,w.whiteGloss,.4,.14,.45,-.42,.86,23.3),et(e,w.chrome,.012,.012,.14,-.27,1,23.3,{seg:6,shadow:!1}),Ge(-.64,23.05,-.2,23.55);{const S=Ns(e,-.42,2.25,24.2,"AC outdoor unit");E(S,ze.acGrey,.32,.55,.78,0,0,0);const R=new be(new Kn(.2,18),w.metalDark);R.rotation.y=-Math.PI/2,R.position.set(-.161,0,-.1),S.add(R),E(S,w.metalDark,.3,.03,.3,.05,-.29,0,{shadow:!1})}const p=-2.45,v=-.6,y=m-.42;E(e,w.white,v-p,.86,.58,(p+v)/2,.43,y),E(e,ze.counterTop,v-p+.04,.04,.62,(p+v)/2,.88,y);for(let S=p+.45;S<v;S+=.45)E(e,w.metalDark,.008,.78,.005,S,.43,y-.292,{shadow:!1});E(e,w.blackMatte,.4,.5,.02,-1.75,.45,y-.29,{shadow:!1});for(let S=0;S<6;S++)E(e,[w.bottleTeal,w.red,w.cream][S%3],.04,.2+Qe()*.06,.15,-1.9+S*.055,.35,y-.2,{shadow:!1});for(const[S,R]of[[-2.25,w.chrome],[-1.98,w.black],[-1.2,w.chrome]])et(e,R,.07,.085,.2,S,1,y,{seg:14}),E(e,w.black,.03,.12,.03,S+.09,1,y,{shadow:!1});E(e,w.blackMatte,.18,.08,.18,-1.55,.94,y,{shadow:!1}),Ge(p,y-.3,v,cn);const x=-1.75,A=22.95;E(e,ze.tableTop,.72,.05,1.4,x,.95,A);for(const S of[-1,1])E(e,w.black,.04,.95,.04,x+S*.25,.48,A-.5,{rz:S*.18}),E(e,w.black,.04,.95,.04,x+S*.25,.48,A+.5,{rz:S*.18});E(e,w.black,.04,.04,1,x,.3,A,{shadow:!1}),Ge(x-.36,A-.7,x+.36,A+.7);for(const[S,R]of[[x-.6,A-.35],[x-.6,A+.35],[x+.6,A-.3],[x+.6,A+.4],[x+.1,A+.95]])JM(e,S,R);{const S=Ns(e,x-.05,0,A-.95,"Rattan stool");E(S,ze.rattan,.34,.5,.34,0,.25,0),E(S,ze.rattan,.4,.05,.4,0,.52,0),Ge(x-.25,A-1.15,x+.15,A-.75)}for(const[S,R]of[[vt+.75,cn-1.15],[vt+.75,cn-.8],[vt+1.05,cn-.95]])et(e,ze.water,.14,.14,.46,S,.23,R,{seg:16,shadow:!1}).renderOrder=2,et(e,ze.capBlue,.04,.04,.06,S,.49,R,{seg:10,shadow:!1});Ge(vt+.55,cn-1.35,vt+1.25,cn-.6),lr(e,-.4,22.75,"bush")}for(let m=0;m<40;m++){const p=E(e,Qe()>.5?ze.leafPale:w.woodDark,.04,.003,.025,vt+.5+Qe()*2.8,.004,1+Qe()*(cn-2),{shadow:!1,ry:Qe()*3});p.receiveShadow=!1}}const Kf=40;function e2(i){to(i,0,0,0,4.9,Ke),to(i,0,6.5,0,Lt,Ke),E(i,w.black,.12,.08,1.6,0,2.44,5.7),E(i,w.chrome,.1,.015,1.6,0,.008,5.7,{shadow:!1});const e=new be(new ut(1.6,Ke-2.48),w.glass);e.position.set(0,(2.48+Ke)/2,5.7),e.rotation.y=Math.PI/2,e.renderOrder=2,i.add(e),$t(i,0,0,0,Lt,{h:He-Ke,y0:Ke,collide:!1});const[t,n]=ah;to(i,0,Lt,0,t,2.8),to(i,0,n,0,Pt,2.8),E(i,w.black,.12,.08,n-t,0,2.44,(t+n)/2),E(i,w.chrome,.1,.015,n-t,0,.008,(t+n)/2,{shadow:!1});const s=new be(new ut(n-t,2.8-2.48),w.glass);s.position.set(0,(2.48+2.8)/2,(t+n)/2),s.rotation.y=Math.PI/2,s.renderOrder=2,i.add(s),E(i,w.wall,.12,He-2.8,Pt-Lt,.02,2.8+(He-2.8)/2,(Lt+Pt)/2,{shadow:!1});for(let o=2.95;o<He-.05;o+=.14)E(i,w.wallWarm,.02,.03,Vf-Lt,.09,o,(Lt+Vf)/2,{shadow:!1});$t(i,-.1,Pt,-.1,Mn+.2,{h:He+.3,mat:w.wallWarm,t:.2}),to(i,0,0,Ut,0,Ke),$t(i,0,0,Ut,0,{h:He-Ke,y0:Ke,collide:!1}),QM(i);const r=20-vt;E(i,w.wallWarm,r,Kf,Mn+1.2,vt+r/2,-Kf/2-.01,(Mn-1)/2+.1,{shadow:!1});for(let o=1;o<12;o++)E(i,w.blackMatte,.05,.25,Mn+1.3,vt-.01,-o*3.4,(Mn-1)/2+.1,{shadow:!1});qM(i)}const t2=new kt({color:"#a39b91",roughness:.55}),qc=new kt({color:"#ece7dc",roughness:.6}),n2=new kt({color:"#e9e4d6",roughness:.7}),i2=new kt({color:"#6c6a66",roughness:.5,metalness:.3});function s2(i,e,t,n=2.45){et(i,w.black,.004,.004,He-n,e,(He+n)/2,t,{seg:3,shadow:!1}),et(i,w.black,.045,.045,.2,e,n-.1,t,{seg:14});const s=new be(new Kn(.035,12),w.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,n-.201,t),i.add(s)}function r2(i){const e=new tt;e.userData.label="Meeting room",i.add(e),St(e,w.floorDark,0,pt,kn,Pt,0),St(e,w.ceilingBlack,0,pt,kn,Pt,He,{down:!0}),$t(e,kn+.1,pt,kn+.1,Pt+.1,{h:He,mat:w.white});const[t,n]=NM;$t(e,0,Pt+.1,t,Pt+.1,{h:He,mat:w.white}),$t(e,n,Pt+.1,kn+.2,Pt+.1,{h:He,mat:w.white}),$t(e,t,Pt+.1,n,Pt+.1,{h:He-2.12,y0:2.12,mat:w.white,collide:!1}),et(e,w.ceilingBlack,.16,.16,Pt-pt,kn-.35,He-.3,(pt+Pt)/2,{rx:Math.PI/2,seg:12,shadow:!1}),E(e,w.ceilingBlack,kn,.35,.3,kn/2,He-.18,pt+.25,{shadow:!1});for(const[l,h,u,f]of[[0,Pt-.01,kn,Pt-.01],[kn-.01,pt,kn-.01,Pt]])E(e,w.concrete,Math.max(.02,u-l),.08,Math.max(.02,f-h),(l+u)/2,.04,(h+f)/2,{shadow:!1});const s=1.9,r=19.85,o=22,a=1,c=(r+o)/2;{const l=new tt;l.userData.label="Meeting table",e.add(l),E(l,t2,a,.04,o-r,s,.75,c),E(l,qc,a+.01,.025,o-r+.01,s,.72,c,{shadow:!1});for(const h of[r+.15,o-.15])for(const u of[-1,1])E(l,w.black,.05,.72,.05,s+u*(a/2-.08),.36,h);for(const h of[r+.5,c-.1,o-.6]){const u=new be(new Kn(.04,14),w.black);u.rotation.x=-Math.PI/2,u.position.set(s+.1,.772,h),l.add(u)}E(l,w.black,.05,.02,.2,s-.15,.78,c-.4,{shadow:!1,ry:.4}),Lp(l,s,.77,c+.35,{petal:w.petalWhite,n:5}),Ge(s-a/2,r,s+a/2,o)}for(const l of[r+.4,c,o-.4])yr(e,s-a/2-.32,l,Math.PI/2),yr(e,s+a/2+.32,l,-Math.PI/2);yr(e,s,o+.35,Math.PI);{const l=new tt;l.userData.label="TV",l.position.set(1.75,0,19.25),e.add(l);for(let h=0;h<4;h++)E(l,w.black,.04,.03,.34,Math.sin(h*Math.PI/2)*.15,.04,Math.cos(h*Math.PI/2)*.15,{ry:h*Math.PI/2});et(l,w.black,.025,.025,1.5,0,.78,0,{seg:8}),E(l,w.black,1.1,.64,.06,0,1.55,.03),E(l,w.screenOff,1.06,.6,.005,0,1.55,.062,{shadow:!1}),Ge(1.55,19.05,1.95,19.45)}{const l=Dp(e,s,c,1.8,Math.PI/2,2.35,He);l.children[0].material=i2,l.children[0].scale.set(1.8,.09,.09)}for(const[l,h]of[[.8,19.6],[.8,21.6],[3,19.6],[3,21.6]])s2(e,l,h);Hh(e,kn-.02,2.7,20.6,-Math.PI/2);{const l=new tt;l.userData.label="Door frame",e.add(l);const h=Pt+.1,u=n-t;for(const g of[t-.02,n+.02])E(l,qc,.04,2.14,.22,g,1.07,h);E(l,qc,u+.08,.04,.22,(t+n)/2,2.14,h);const f=new tt;f.position.set(n,0,h);const d=u-.02;E(f,n2,d,2.08,.04,-d/2,1.05,0);for(const g of[-1,1]){E(f,w.chrome,.025,.32,.03,-d+.1,1.05,g*.06);for(const _ of[.92,1.18])E(f,w.chrome,.02,.02,.05,-d+.1,_,g*.035,{shadow:!1})}Za.push({leaf:f,closed:0,open:1.45,name:"game room door",handle:[-d+.1,1.3,.1],x:(t+n)/2,z:h,block:{minX:t,maxX:n,minZ:h-.1,maxZ:h+.1}})}{const l=new tt;l.userData.label="Shelf",e.add(l);const h=.38,u=Pt-.3,f=.5,d=.38,g=2.3;for(const _ of[-1,1])E(l,w.white,.02,g,d,h+_*f/2,g/2,u);E(l,w.white,f,g,.02,h,g/2,u+d/2);for(const _ of[.02,.55,.95,1.45,1.9,g])E(l,w.white,f,.02,d,h,_,u);E(l,w.white,f-.02,.52,.02,h,.28,u-d/2,{shadow:!1}),E(l,w.woodDark,.3,.16,.22,h,1.04,u),E(l,w.black,.26,.02,.16,h,1.47,u,{shadow:!1}),Ge(h-f/2,u-d/2,h+f/2,u+d/2)}{const l=new tt;l.userData.label="Cabinet",e.add(l),E(l,w.woodDark,.9,.45,.4,.95,.225,pt+.32),E(l,w.white,.42,.2,.01,.75,.32,pt+.52,{shadow:!1}),Ge(.5,pt+.1,1.4,pt+.52)}}const rs={x:.088,y:1.4,z:25.35,w:1.68,h:.94},Qn=i=>new kt(i),Xt={navy:Qn({color:"#1e2740",roughness:.9}),ledPurple:Qn({color:"#b46cff",emissive:"#9b4dff",emissiveIntensity:2.2}),ledCyan:Qn({color:"#5fe3ff",emissive:"#29c8ff",emissiveIntensity:1.8}),felt:Qn({color:"#1f6b46",roughness:.95}),railWood:Qn({color:"#5a3522",roughness:.5}),ps5White:Qn({color:"#f4f4f2",roughness:.35}),rug:Qn({color:"#3a3f4b",roughness:1}),cue:Qn({color:"#c79a62",roughness:.5}),beanRed:Qn({color:"#a8322d",roughness:.95}),beanBlue:Qn({color:"#2d4f8a",roughness:.95})},o2=["#f2c21b","#1f4fb4","#c8281f","#5b2a86","#ef7a1a","#1d7a3c","#7a1f1f","#111111"],jf=o2.map(i=>Qn({color:i,roughness:.2,metalness:.05})),Zf=(()=>{const i=document.createElement("canvas");i.width=512,i.height=160;const e=i.getContext("2d");e.font='700 110px "Avenir Next", "Helvetica Neue", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ff4fd8",e.shadowBlur=24,e.fillStyle="#ffd6f6",e.fillText("GAME ON",256,84);const t=new Un(i);return t.colorSpace=yt,t})();Xt.neon=Qn({map:Zf,emissive:"#ffffff",emissiveMap:Zf,emissiveIntensity:1.6,transparent:!0,alphaTest:.05});function Fi(i,e,t=0,n=0,s=0){const r=new tt;return r.userData.label=e,r.position.set(t,0,n),r.rotation.y=s,i.add(r),r}function Jf(i,e,t,n,s,r){const o=Fi(i,"Controller",e,n,s);E(o,r,.16,.035,.07,0,t,0,{shadow:!1});for(const a of[-1,1])E(o,r,.05,.035,.06,a*.065,t,.04,{shadow:!1,ry:a*.4});E(o,w.black,.11,.004,.03,0,t+.019,-.005,{shadow:!1})}function a2(i){const e=Fi(i,"Game room"),t=Pt+.2;St(e,w.floorDark,0,Pt,li,Mn,0),St(e,w.ceilingBlack,0,Pt,li,Mn,He,{down:!0}),$t(e,kn+.2,Pt+.1,li+.2,Pt+.1,{h:He,mat:w.white}),$t(e,li+.1,Pt,li+.1,Mn+.2,{h:He,mat:w.white}),$t(e,0,Mn+.1,li+.2,Mn+.1,{h:He,mat:w.white}),E(e,w.ceilingBlack,li,.4,.3,li/2,He-.2,(t+Mn)/2,{shadow:!1});const n=rs.z;E(e,Xt.navy,.02,He,Mn-t-.4,.01,He/2,(t+Mn)/2),E(e,Xt.ledPurple,.02,.025,Mn-t-.6,.03,He-.25,(t+Mn)/2,{shadow:!1});{const c=Fi(e,"TV");E(c,w.black,.05,.98,1.72,.06,1.4,n),E(c,w.screenDark,.005,.94,1.68,.087,1.4,n,{shadow:!1}),E(c,Xt.ledCyan,.01,1.06,1.8,.03,1.4,n,{shadow:!1})}{const c=Fi(e,"TV console");E(c,w.white,.42,.42,1.9,.24,.21,n);for(const l of[n-.48,n+.48])E(c,w.metalDark,.005,.32,.9,.452,.21,l,{shadow:!1});Ge(0,n-.95,.45,n+.95)}{const c=Fi(e,"PS5",.25,n+.65);E(c,w.black,.06,.38,.22,0,.62,0);for(const l of[-1,1])E(c,Xt.ps5White,.02,.4,.26,l*.04,.63,0,{rz:l*.04});E(c,w.black,.1,.02,.12,0,.43,0,{shadow:!1})}E(e,w.blackMatte,.18,.26,.18,.25,.55,n-.75),E(e,Xt.rug,2.2,.01,2.4,1.75,.006,n,{shadow:!1}),Pn(Bh(e,2.95,n,-Math.PI/2,3),-.05);{const c=Fi(e,"Coffee table");E(c,w.woodDark,.55,.04,1,1.75,.4,n);for(const[l,h]of[[-1,-1],[1,-1],[1,1],[-1,1]])E(c,w.black,.03,.38,.03,1.75+l*.23,.19,n+h*.45);Ge(1.45,n-.52,2.05,n+.52)}Jf(e,1.72,.44,n-.22,.3,Xt.ps5White),Jf(e,1.8,.44,n+.2,-.2,Xt.ps5White),E(e,w.black,.12,.02,.05,1.68,.43,n+.38,{shadow:!1,ry:.5});for(const[c,l]of[[23.8,Xt.beanRed],[26.65,Xt.beanBlue]])Pn(Ip(e,1.35,c,l),-.15);const s=5,r=25,o=2.3,a=1.25;{const c=Fi(e,"Pool table");E(c,Xt.railWood,a+.2,.2,o+.2,s,.7,r),E(c,Xt.felt,a,.02,o,s,.81,r,{shadow:!1});for(const d of[-1,1])E(c,Xt.felt,.06,.05,o,s+d*(a/2-.03),.835,r,{shadow:!1}),E(c,Xt.felt,a,.05,.06,s,.835,r+d*(o/2-.03),{shadow:!1}),E(c,Xt.railWood,.1,.06,o+.2,s+d*(a/2+.05),.83,r),E(c,Xt.railWood,a+.2,.06,.1,s,.83,r+d*(o/2+.05));for(const[d,g]of[[-1,-1],[1,-1],[1,1],[-1,1]])E(c,Xt.railWood,.14,.62,.14,s+d*(a/2-.05),.31,r+g*(o/2-.1));for(const d of[-1,1])for(const g of[-1,0,1]){const _=new be(new Kn(.055,14),w.black);_.rotation.x=-Math.PI/2,_.position.set(s+d*(a/2-.04),.865,r+g*(o/2-.04)),c.add(_)}const l=.028,h=new Gt(l,14,10);let u=0;for(let d=0;d<5;d++)for(let g=0;g<=d;g++){const _=new be(h,jf[u++%jf.length]);_.position.set(s+(g-d/2)*l*2.05,.82+l,r+.45+d*l*1.8),_.castShadow=!0,c.add(_)}const f=new be(h,Xt.ps5White);f.position.set(s+.05,.82+l,r-.6),f.castShadow=!0,c.add(f),et(c,Xt.cue,.006,.012,1.45,s-.35,.9,r-.2,{rx:Math.PI/2-.03,seg:8}),Ge(s-a/2-.1,r-o/2-.1,s+a/2+.1,r+o/2+.1)}{const c=Fi(e,"Pool light");E(c,w.black,.32,.12,1.7,s,1.85,r);for(const l of[-.55,0,.55]){const h=new be(new ut(.24,.4),w.lightStrip);h.rotation.x=Math.PI/2,h.position.set(s,1.789,r+l),c.add(h)}for(const l of[-.7,.7])et(c,w.black,.004,.004,He-1.91,s,(He+1.91)/2,r+l,{seg:3,shadow:!1})}{const c=Fi(e,"Cue rack");E(c,w.woodDark,.05,.08,.7,li-.03,1.55,23.6),E(c,w.woodDark,.05,.06,.7,li-.03,.1,23.6);for(let l=0;l<4;l++)et(c,Xt.cue,.007,.013,1.5,li-.07,.8,23.35+l*.16,{seg:8})}{const c=new be(new ut(1.5,.47),Xt.neon);c.position.set(4.7,2.45,Mn-.01),c.rotation.y=Math.PI,c.userData.label="Neon sign",e.add(c)}for(const[c,l]of[[1.8,23.6],[1.8,26.4]]){et(e,w.black,.05,.05,.12,c,He-.06,l,{seg:10,shadow:!1});const h=new be(new Kn(.035,10),w.spotGlow);h.rotation.x=Math.PI/2,h.position.set(c,He-.121,l),e.add(h)}}const Oe=Ct,J=Ct+5.8,vn=-2,ln=47,We=3.2,nt=3,hn=.6,Qf=2.4;let ed=4242;const un=()=>((ed=ed*16807%2147483647)-1)/2147483646;function Bn(i,e,t,n=!0){const s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);const r=new Un(s);return r.colorSpace=yt,n&&(r.wrapS=r.wrapT=mi),r.anisotropy=8,r}function td(i,e,t){return Bn(1024,1024,(n,s)=>{const o=s/2;for(let a=0;a<2;a++)for(let c=0;c<2;c++){const l=(un()-.5)*14;n.fillStyle=`rgb(${i[0]+l},${i[1]+l},${i[2]+l})`,n.fillRect(a*o,c*o,o,o),n.save(),n.beginPath(),n.rect(a*o,c*o,o,o),n.clip();for(let h=0;h<7;h++){n.strokeStyle=e.replace("A",(.06+un()*.14).toFixed(2)),n.lineWidth=.8+un()*2,n.beginPath();let u=a*o+un()*o,f=c*o;n.moveTo(u,f);for(let d=0;d<6;d++)u+=(un()-.4)*o*.5,f+=o/5,n.quadraticCurveTo(u+(un()-.5)*60,f-o/10,u,f);n.stroke()}for(let h=0;h<400;h++){const u=(un()-.5)*18;n.fillStyle=`rgba(${i[0]+u},${i[1]+u},${i[2]+u},0.25)`,n.beginPath(),n.arc(a*o+un()*o,c*o+un()*o,4+un()*18,0,Math.PI*2),n.fill()}n.restore()}n.strokeStyle=t,n.lineWidth=2;for(let a=0;a<=2;a++)n.beginPath(),n.moveTo(a*o,0),n.lineTo(a*o,s),n.stroke(),n.beginPath(),n.moveTo(0,a*o),n.lineTo(s,a*o),n.stroke()})}const c2=Bn(256,256,(i,e)=>{i.fillStyle="#f1f0ec",i.fillRect(0,0,e,e);for(let t=0;t<1500;t++)i.fillStyle=`rgba(0,0,0,${.03+un()*.05})`,i.fillRect(un()*e,un()*e,1.5,1.5);i.strokeStyle="#c9c7c0",i.lineWidth=3;for(const t of[0,e/2,e])i.beginPath(),i.moveTo(t,0),i.lineTo(t,e),i.stroke(),i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke()}),l2=Bn(128,128,(i,e)=>{i.fillStyle="#e9e8e4",i.fillRect(0,0,e,e);for(let t=0;t<6;t++){const n=8+t*9;i.strokeStyle=t%2?"#bdbbb5":"#8e8c86",i.lineWidth=4,i.strokeRect(n,n,e-2*n,e-2*n)}i.fillStyle="#55534f",i.fillRect(56,56,16,16)},!1),h2=Bn(256,256,(i,e)=>{i.fillStyle="#ecebe6",i.fillRect(0,0,e,e),i.strokeStyle="#c6c4bd",i.lineWidth=2;for(const[t,n,s,r]of[[0,e/2,e/2,0],[e/2,0,e,e/2],[e,e/2,e/2,e],[e/2,e,0,e/2]])i.beginPath(),i.moveTo(t,n),i.lineTo(s,r),i.stroke()}),u2=Bn(256,512,(i,e,t)=>{i.fillStyle="#d9d2c3",i.fillRect(0,0,e,t);for(let n=0;n<600;n++)i.fillStyle=`rgba(120,105,85,${.05+un()*.08})`,i.fillRect(un()*e,un()*t,10+un()*50,1);i.fillStyle="rgba(110,100,85,.55)";for(let n=22;n<t;n+=26)i.fillRect(0,n,e,2)},!1);function Oi(i,{bg:e="#0f8a3c",fg:t="#ffffff",w:n=512,h:s=128,font:r="bold 64px system-ui, sans-serif",icon:o=""}={}){return Bn(n,s,a=>{a.fillStyle=e,a.fillRect(0,0,n,s),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=r,a.fillText(o?`${o}  ${i}`:i,n/2,s/2+2)},!1)}const st=i=>new kt(i),no=i=>st({map:i,emissive:"#ffffff",emissiveMap:i,emissiveIntensity:.55,roughness:.4}),se={floor:st({map:td([214,196,170],"rgba(150,120,90,A)","#b9a487"),roughness:.08,metalness:.05,envMapIntensity:1.6}),floorBrown:st({map:td([104,82,66],"rgba(205,190,170,A)","#4e3c30"),roughness:.08,metalness:.05,envMapIntensity:1.6}),skirting:st({color:"#4a3326",roughness:.25}),wall:st({color:"#ecebe6",roughness:.92}),grid:st({map:c2,roughness:.95}),diffuser:st({map:l2,roughness:.8}),steel:st({color:"#a7aba9",roughness:.45,metalness:.55}),doorWhite:st({color:"#efeee8",roughness:.6}),frame:st({color:"#d8d2c2",roughness:.6}),laminate:st({map:u2,roughness:.55}),diamond:st({map:h2,roughness:.85}),woodStrip:st({color:"#6a4126",roughness:.5}),darkGlass:new kt({color:"#2c3a2c",transparent:!0,opacity:.55,roughness:.05,metalness:.3,depthWrite:!1,side:Ot}),orange:st({color:"#ff6a12",roughness:.35}),caution:st({map:Oi("CAUTION",{bg:"#f2b90f",fg:"#2a2a2a",w:256,h:512,font:"bold 44px system-ui, sans-serif"}),roughness:.5}),red:st({color:"#c42a22",roughness:.5}),fireExit:no(Oi("FIRE EXIT  ←",{w:512,h:112,font:"bold 60px system-ui, sans-serif"})),fireExt:no(Oi("FIRE EXTINGUISHER",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),pushBar:no(Oi("PUSH BAR TO OPEN",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),exitSmall:no(Oi("EXIT",{w:256,h:96,font:"bold 60px system-ui, sans-serif"})),gents:st({map:Oi("GENTS TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚹"}),roughness:.4}),techno:st({map:Bn(512,280,(i,e,t)=>{i.fillStyle="#f7f7f5",i.fillRect(0,0,e,t),i.fillStyle="#2b5fae",i.fillRect(e*.58,t*.3,e*.42,t*.32),i.font="bold 66px system-ui, sans-serif",i.textBaseline="middle",i.fillStyle="#2b5fae",i.fillText("Techn",22,t*.46),i.fillStyle="#ffffff",i.fillText("aureus",e*.6,t*.46),i.fillStyle="#555",i.font="22px system-ui, sans-serif",i.fillText("IT STRATEGY & TECHNOLOGY PARTNER",24,t*.78)},!1),roughness:.5}),pixPanel:st({color:"#3c3e40",roughness:.5,metalness:.2}),pixText:st({map:Bn(256,96,(i,e,t)=>{i.fillStyle="#3c3e40",i.fillRect(0,0,e,t),i.fillStyle="#4aa3df",i.font="bold 50px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("pixbit",e/2,t*.42),i.fillStyle="#cfd2d4",i.font="16px system-ui, sans-serif",i.fillText("solutions",e/2,t*.8)},!1),roughness:.5}),mat:st({color:"#3b2620",roughness:1}),pink:st({color:"#e9b8c4",roughness:.3}),mirror:st({color:"#c9d4d8",roughness:.08,metalness:.25}),slot:st({color:"#5d6a6e",roughness:.1,metalness:.4}),room:st({color:"#cfccc4",roughness:.9}),roomCeil:st({color:"#e9e7e1",roughness:.95}),desk:st({color:"#c8b79c",roughness:.7}),officeGlass:new kt({color:"#33403a",transparent:!0,opacity:.4,roughness:.05,metalness:.3,depthWrite:!1,side:Ot}),pixLetters:st({map:Bn(512,216,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#141414",i.textAlign="center",i.textBaseline="middle",i.font="bold 128px system-ui, sans-serif",i.fillText("pixbit",e/2,t*.38),i.font="44px system-ui, sans-serif",i.fillText("· s o l u t i o n s ·",e/2,t*.82)},!1),transparent:!0,alphaTest:.3,roughness:.6}),cam:st({color:"#f2f2f0",roughness:.4}),leather:st({color:"#1e1a19",roughness:.3,metalness:.05,envMapIntensity:1.2}),tableWood:st({color:"#6b5646",roughness:.55}),daylight:new Ln({color:"#f4f8ff"}),lamp:new Ln({color:"#fff3c9"}),tint:new kt({color:"#c9d6b0",transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1,side:Ot}),olive:st({color:"#8f9a2e",roughness:.85}),silver:st({color:"#b8bcc0",roughness:.3,metalness:.8}),tableTop:st({color:"#e6e1d8",roughness:.35}),ladies:st({map:Oi("LADIES TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚺"}),roughness:.4}),slate:st({color:"#6b6e71",roughness:.85}),navy:st({color:"#1f2a3b",roughness:.6}),navySlats:st({map:Bn(256,256,(i,e,t)=>{i.fillStyle="#212d40",i.fillRect(0,0,e,t);for(let n=0;n<e;n+=16)i.fillStyle="#141c29",i.fillRect(n,0,3,t),i.fillStyle="#2b3950",i.fillRect(n+3,0,2,t)}),roughness:.55}),tenCod:st({map:Bn(512,160,(i,e,t)=>{i.fillStyle="#e9ecef",i.beginPath(),i.moveTo(20,30),i.lineTo(95,30),i.lineTo(60,80),i.lineTo(95,80),i.lineTo(55,135),i.lineTo(20,135),i.lineTo(55,85),i.lineTo(20,85),i.closePath(),i.fill(),i.font="bold 96px system-ui, sans-serif",i.textBaseline="middle",i.fillText("10COD",120,t/2+4)},!1),transparent:!0,alphaTest:.3,roughness:.4}),eSyn:st({map:Bn(512,256,(i,e,t)=>{i.fillStyle="#e8506a",i.beginPath(),i.arc(120,118,100,0,Math.PI*2),i.fill(),i.font="italic bold 150px Georgia, serif",i.textBaseline="middle",i.fillStyle="#26334a",i.fillText("e",40,120),i.fillStyle="#f4e9e4",i.fillText("S",120,130),i.font="bold 76px system-ui, sans-serif",i.fillStyle="#26334a",i.fillText("YNERGY",210,150)},!1),transparent:!0,alphaTest:.3,roughness:.5}),ringLogo:st({map:Bn(256,256,(i,e)=>{i.strokeStyle="#8f6cff",i.lineWidth=16,i.beginPath(),i.arc(e/2,e/2,90,0,Math.PI*2),i.stroke(),i.fillStyle="#e5e1ff",i.font="bold 54px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("dev",e/2,e/2)},!1),transparent:!0,alphaTest:.3,roughness:.4}),greyTile:st({color:"#9a9c9a",roughness:.3}),stairBlue:st({color:"#5a6fc4",roughness:.8}),fireRed:st({color:"#c8231c",roughness:.5}),granite:st({color:"#141416",roughness:.12,metalness:.35,envMapIntensity:1.4}),liftSteel:st({color:"#b9bdbd",roughness:.42,metalness:.75}),fireDoor:st({color:"#9aa5a1",roughness:.55,metalness:.15}),greenSign:no(Oi("FIRE STATION",{w:512,h:112,font:"bold 50px system-ui, sans-serif"})),fourth:st({map:Oi("FOURTH FLOOR",{bg:"#c9ccce",fg:"#2c2c2c",w:512,h:128,font:"bold 54px system-ui, sans-serif"}),roughness:.4,metalness:.3}),ledRed:st({color:"#ff2a1a",emissive:"#ff2a1a",emissiveIntensity:1.4}),numDisc:i=>st({map:Bn(128,128,(e,t)=>{e.fillStyle="#fff",e.fillRect(0,0,t,t),e.fillStyle="#111",e.font="bold 84px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(String(i),t/2,t/2+4)},!1),roughness:.4})};function Xn(i,e,t,n,s,r=se.wall,o=nt){E(i,r,.1,o,n-t,e+s*-.05,o/2,(t+n)/2),E(i,se.skirting,.015,.1,n-t,e+s*.008,.05,(t+n)/2,{shadow:!1}),Ge(Math.min(e,e-s*.1),t,Math.max(e,e-s*.1),n)}function nd(i,e,t,n=Oe,s=J,r=Oe+.25,o=J-.25){const l=o-r;E(i,se.wall,s-n,.85,.25,(n+s)/2,.85/2,e),E(i,se.skirting,s-n,.1,.015,(n+s)/2,.05,e+t*.13,{shadow:!1}),E(i,se.wall,s-n,We-2.7,.25,(n+s)/2,(2.7+We)/2,e);for(const[u,f]of[[n,r],[o,s]])E(i,se.wall,f-u,2.7-.85,.25,(u+f)/2,(.85+2.7)/2,e);const h=new be(new ut(l,2.7-.85),w.glass);h.position.set((r+o)/2,(.85+2.7)/2,e),h.renderOrder=2,i.add(h);for(let u=0;u<=5;u++)E(i,w.black,.06,2.7-.85,.08,r+u/5*l,(.85+2.7)/2,e);for(const u of[.85+.02,2.7-.02])E(i,w.black,l,.05,.08,(r+o)/2,u,e);Ge(n,e-.15,s,e+.15)}function Yc(i,e,t,n,s,r,o){const a=e-o*.03;return E(i,se.frame,.06,s+.06,n+.12,e-o*.015,(s+.06)/2,t),E(i,r,.04,s,n,a,s/2,t),a-o*.03}function f2(i,e,t,n){const o=n-.475,a=n+.95/2;Xn(i,J,e,o-.06,-1),Xn(i,J,a+.06,t,-1),E(i,se.wall,.1,nt-2.25-.06,.95+.12,J+.05,(nt+2.25+.06)/2,n);for(const v of[o-.03,a+.03])E(i,se.frame,.14,2.25+.06,.06,J+.03,(2.25+.06)/2,v);E(i,se.frame,.14,.06,.95+.12,J+.03,2.25+.03,n);const c=new tt;c.position.set(J-.01,0,o),E(c,se.laminate,.04,2.25-.01,.95-.01,0,2.25/2,.95/2);for(const v of[-1,1]){E(c,se.slot,.012,.9,.12,v*.022,1.45,.95/2-.05,{shadow:!1}),E(c,w.chrome,.03,.42,.03,v*.075,1.05,.95-.12,{shadow:!1});for(const y of[.86,1.24])E(c,w.chrome,.06,.02,.02,v*.05,y,.95-.12,{shadow:!1})}Za.push({leaf:c,closed:0,open:Math.PI/2*.92,name:"ladies toilet",handle:[-.12,1.25,.95-.12],x:J,z:n,block:{minX:J-.05,maxX:J+.1,minZ:o,maxZ:a}});const l=J+.1,h=J+2.3,u=e+.05,f=t-.05,d=nt,g=(l+h)/2,_=(u+f)/2;E(i,w.floorCorridor,h-l,.02,f-u,g,.01,_,{shadow:!1}),E(i,w.white,h-l,.04,f-u,g,d,_,{shadow:!1}),E(i,w.whiteGloss,.1,d,f-u+.2,h+.05,d/2,_);for(const v of[u-.05,f+.05])E(i,w.whiteGloss,h-l,d,.1,g,d/2,v);E(i,se.pink,.02,1.2,f-u,h-.005,.6,_,{shadow:!1});for(const v of[u+.005,f-.005])E(i,se.pink,h-l,1.2,.02,g,.6,v,{shadow:!1});Ge(h,u-.1,h+.1,f+.1),Ge(l-.1,u-.1,h,u),Ge(l-.1,f,h,f+.1),E(i,w.lightStrip,.6,.02,.6,g,d-.03,_,{shadow:!1});const m=_+.7;E(i,w.whiteGloss,.2,.55,.42,h-.1,.8,m),et(i,w.whiteGloss,.19,.15,.4,h-.42,.2,m,{seg:20}),et(i,w.white,.2,.2,.03,h-.42,.42,m,{seg:20}),Ge(h-.65,m-.25,h,m+.25);const p=_-.6;E(i,w.whiteGloss,.45,.14,.55,h-.23,.85,p),E(i,w.chrome,.12,.03,.03,h-.08,.98,p,{shadow:!1}),E(i,se.mirror,.02,.7,.55,h-.012,1.55,p,{shadow:!1}),Ge(h-.46,p-.3,h,p+.3)}function $c(i,e,t,n,s,{alarm:r=!0}={}){const a=-s,c=s*Math.PI/2,l=u=>e+s*u;E(i,w.blackMatte,.04,2.3,1.1+.2,l(.005),1.15,t,{shadow:!1});for(const u of[-1,1])E(i,se.liftSteel,.03,2.22,1.1/2-.01,l(.03),1.11,t+u*1.1/4,{shadow:!1});for(const u of[-1,1])E(i,se.liftSteel,.04,2.26,.03,l(.03),1.13,t+u*(1.1/2+.02),{shadow:!1});E(i,se.liftSteel,.04,.03,1.1+.07,l(.03),2.26,t,{shadow:!1}),gt(i,se.numDisc(n),.22,.22,l(.012),2.55,t,c),E(i,se.liftSteel,.03,.14,.62,l(.015),2.92,t,{shadow:!1}),E(i,w.blackMatte,.035,.08,.2,l(.02),2.92,t,{shadow:!1}),E(i,se.ledRed,.036,.04,.06,l(.022),2.92,t,{shadow:!1});const h=t+a*(1.1/2+.33);if(E(i,se.liftSteel,.02,.26,.11,l(.01),1.15,h,{shadow:!1}),E(i,w.blackMatte,.01,.06,.05,l(.022),1.12,h,{shadow:!1}),r){const u=t-a*.97;E(i,se.fireRed,.05,.14,.12,l(.025),2.05,u,{shadow:!1}),E(i,se.fireRed,.04,.13,.1,l(.02),1.3,u,{shadow:!1})}}const d2=["techno","tenCod","eSyn","ringLogo"];function Bp(i){for(const e of d2)se[e].visible=i}Bp(!1);function Kc(i,e,t,n,s,r=4.2,{frost:o=!1}={}){const a=e-t*.03,c=e+t*3;St(i,se.room,Math.min(e,c),n,Math.max(e,c),s,0),E(i,se.room,.1,We,s-n,c,We/2,(n+s)/2,{shadow:!1}),St(i,se.roomCeil,Math.min(e,c),n,Math.max(e,c),s,We,{down:!0});for(let l=n;l<s-.5;l+=r){const h=l+.2,u=Math.min(l+r,s)-.2;E(i,se.wall,.4,We,.4,e,We/2,l);const f=new be(new ut(u-h,nt-.05),se.officeGlass);if(f.position.set(a,(nt-.05)/2,(h+u)/2),f.rotation.y=t>0?-Math.PI/2:Math.PI/2,f.renderOrder=2,i.add(f),o){const p=new be(new ut(u-h,.75),w.glassFrost);p.position.set(a-t*.006,1.25,(h+u)/2),p.rotation.y=f.rotation.y,p.renderOrder=3,i.add(p)}const d=Math.max(2,Math.round((u-h)/1));for(let p=0;p<=d;p++)E(i,w.black,.06,nt,.05,a,nt/2,h+p/d*(u-h));for(const p of[.04,2.35,nt-.03])E(i,w.black,.06,.06,u-h,a,p,(h+u)/2);const g=h+(u-h)/d;for(const p of[-1,1])E(i,w.chrome,.03,.6,.025,a-t*p*.05,1.05,g-.12,{shadow:!1});const _=e+t*1.6,m=(h+u)/2+.6;E(i,se.desk,.7,.04,1.4,_,.75,m);for(const p of[-1,1])E(i,w.black,.05,.73,.05,_,.37,m+p*.6,{shadow:!1});E(i,w.screenDark,.03,.32,.55,_+t*.2,1,m),E(i,w.black,.45,.5,.45,_-t*.55,.5,m)}E(i,se.wall,.4,We,.4,e,We/2,s),Ge(Math.min(e,a)-.05,n,Math.max(e,a)+.05,s)}const ch=14.5,Fn=ch+11.85,qt=Fn+6.4,ui=J+11;function id(i,e,t,n=0,s=1.6){const r=new tt;r.position.set(e,0,t),r.rotation.y=n,i.add(r),E(r,se.leather,s,.3,.82,0,.24,0),E(r,se.leather,s-.36,.14,.62,0,.45,.08);for(const o of[-1,1])E(r,se.leather,.18,.62,.82,o*(s/2-.09),.37,0);E(r,se.leather,s-.1,.36,.18,0,.6,-.32);for(const o of[-1,1])E(r,se.leather,(s-.4)/2,.36,.16,o*(s-.4)/4,.74,-.22,{rx:-.12});for(const o of[-1,1])for(const a of[-1,1])E(r,w.blackMatte,.06,.09,.06,o*(s/2-.08),.045,a*.34,{shadow:!1});return r}function sd(i,e,t,n=0,s=1.9){const r=new tt;r.position.set(e,0,t),r.rotation.y=n,i.add(r),E(r,se.leather,s,.22,.72,0,.27,.04),E(r,se.leather,s,.1,.7,0,.42,.05),E(r,se.leather,s,.62,.16,0,.73,-.3,{rx:-.08});for(const o of[-1,1])E(r,w.chrome,.03,.03,.72,o*(s/2-.12),.015,.02,{shadow:!1}),E(r,w.chrome,.03,.16,.03,o*(s/2-.12),.08,.34,{shadow:!1}),E(r,w.chrome,.03,.16,.03,o*(s/2-.12),.08,-.3,{shadow:!1});return r}function jc(i,e,t,n=.85){Ge(i-t/2,e-n/2,i+t/2,e+n/2)}function p2(i){const e=(Fn+qt)/2,t=qt-Fn;St(i,se.floor,J,Fn,ui,qt,.001,{tile:1.6}),St(i,se.grid,J,Fn,ui,qt,We,{down:!0,tile:1.2});for(const d of[Fn,qt]){const g=d===Fn?-1:1;E(i,se.wall,ui-J,We,.1,(J+ui)/2,We/2,d+g*.05),E(i,se.skirting,ui-J,.1,.015,(J+ui)/2,.05,d-g*.008,{shadow:!1}),Ge(J,d-.1,ui,d+.1)}E(i,se.granite,.65,We,.55,J+.08,We/2,qt+.275),Ge(J-.25,qt,J+.4,qt+.55),E(i,se.wall,.1,We,t,ui+.05,We/2,e);const n=ui-.02,s=e-1.6,r=e+1.6,o=2.55,a=new be(new ut(r-s,o),se.daylight);a.position.set(n+.005,o/2,e),a.rotation.y=-Math.PI/2,i.add(a);const c=new be(new ut(r-s,o),w.glass);c.position.set(n,o/2,e),c.rotation.y=-Math.PI/2,c.renderOrder=2,i.add(c);for(const d of[s,e-.75,e+.75,r])E(i,w.black,.07,o,.07,n,o/2,d);for(const d of[.04,o])E(i,w.black,.07,.07,r-s,n,d,e);for(const[d,g]of[[s,e-.75],[e+.75,r]])for(const _ of[.3,1.25,2.15])E(i,w.black,.07,.05,g-d,n,_,(d+g)/2);E(i,w.black,.07,.05,1.5,n,2.15,e);for(const d of[e-.07,e+.07])E(i,w.blackMatte,.04,.45,.03,n-.07,1.1,d,{shadow:!1});Ge(ui-.1,Fn,ui+.1,qt),id(i,J+5,Fn+.48,0,1.6),jc(J+5,Fn+.48,1.6),sd(i,J+7.1,Fn+.45,0,1.9),jc(J+7.1,Fn+.45,1.9),sd(i,J+5.6,qt-.45,Math.PI,2.2),jc(J+5.6,qt-.45,2.2),id(i,J+9.4,qt-.75,Math.PI+.35,1.6),Ge(J+8.5,qt-1.3,J+10.3,qt-.2);const l=J+6.2,h=Fn+1.6;E(i,se.tableTop,1.2,.04,.6,l,.42,h),E(i,se.tableWood,1.1,.02,.5,l,.12,h,{shadow:!1});for(const d of[-1,1])for(const g of[-1,1])E(i,se.tableWood,.04,.44,.04,l+d*.52,.2,h+g*.24,{rz:d*.12});Ge(l-.62,h-.32,l+.62,h+.32);const u=J+8.4;E(i,se.frame,1.05,2.15,.05,u,1.075,qt-.02),E(i,se.fireDoor,.95,2.1,.04,u,1.05,qt-.04),E(i,w.chrome,.14,.03,.04,u-.35,1.05,qt-.08,{shadow:!1}),gt(i,se.greenSign,.5,.11,u+.2,2.35,qt-.012,Math.PI),E(i,w.white,.09,.09,.012,u-.75,1.25,qt-.006,{shadow:!1});for(const d of[J+2,J+5,J+8])for(const g of[e-1.7,e+1.7])E(i,se.lamp,.24,.01,.24,d,We-.006,g,{shadow:!1});for(const d of[J+3.5,J+6.5,J+9.5])for(const g of[e-2.2,e+2.2])gt(i,se.diffuser,.6,.6,d,We-.004,g,0,Math.PI/2);for(const d of[J+3,J+7.5])et(i,se.cam,.06,.07,.03,d,We-.015,e-.6,{seg:14,shadow:!1});const f=new be(new Gt(.07,16,10,0,Math.PI*2,0,Math.PI/2),se.cam);f.rotation.x=Math.PI,f.position.set(J+9.2,We,qt-.5),i.add(f)}function m2(i){St(i,se.floor,Oe+.02,vn,J-Qf,ln,.001,{tile:1.6}),St(i,se.floorBrown,J-Qf,vn,J,ln,.001,{tile:1.6}),St(i,se.grid,Oe+hn,vn,J-hn,ln,We,{down:!0,tile:1.2});for(const[G,Ee,Ue,Xe,Ie,U]of[[Oe,Oe+hn,Oe+hn,1,vn,ln],[J-hn,J,J-hn,-1,vn,ln]])St(i,se.wall,G,Ie,Ee,U,nt,{down:!0}),E(i,se.wall,.03,We-nt,U-Ie,Ue,(nt+We)/2,(Ie+U)/2,{shadow:!1}),E(i,w.lightStrip,.02,.025,U-Ie-.4,Ue+Xe*.03,nt+.04,(Ie+U)/2,{shadow:!1});for(let G=vn+2.2;G<ln-1;G+=3)for(const Ee of[Oe+hn+.9,J-hn-.9])et(i,w.spotGlow,.07,.07,.01,Ee,We-.006,G,{seg:16,shadow:!1});for(let G=vn+3.7;G<ln-2;G+=6)gt(i,se.diffuser,.6,.6,(Oe+J)/2+(Math.round(G)%2?.6:-.6),We-.004,G,0,Math.PI/2),et(i,se.cam,.05,.06,.03,(Oe+J)/2,We-.015,G+1.5,{seg:14,shadow:!1});for(const G of[vn+1.7,12.5,22.5])E(i,w.spotGlow,.22,.012,.6,Oe+hn/2,nt-.008,G,{shadow:!1});Xn(i,Oe,vn,fn,1),E(i,se.wall,.1,We-nt,fn-vn,Oe-.05,(nt+We)/2,(vn+fn)/2,{shadow:!1}),E(i,se.steel,.03,1.75,.82,Oe+.015,1.12,1.75),E(i,w.metalDark,.035,.012,.8,Oe+.016,.25,1.75,{shadow:!1}),E(i,w.chrome,.04,.03,.12,Oe+.04,1.15,1.42,{shadow:!1}),gt(i,se.fireExt,.36,.07,Oe+.004,1.35,2.4,Math.PI/2),gt(i,se.fireExt,.36,.07,Oe+.004,2.35,1.75,Math.PI/2);const e=Yc(i,Oe,-.25,.95,2.15,se.doorWhite,-1);E(i,w.chrome,.05,.05,.8,e+.03,1,-.25,{shadow:!1});for(const G of[-.62,.12])E(i,w.chrome,.06,.08,.05,e+.02,1,G,{shadow:!1});gt(i,se.pushBar,.3,.06,e+.002,1.2,-.25,Math.PI/2),gt(i,se.exitSmall,.28,.1,Oe+.004,2.45,-.25,Math.PI/2),E(i,se.red,.04,.12,.12,Oe+.02,1.4,.55,{shadow:!1}),E(i,w.white,.01,.12,.08,Oe+.04,1.6,-.25+.75,{shadow:!1});const t=Et,n=18.75,s=(G,Ee,Ue,Xe)=>{E(i,w.concrete,.08,Xe-Ue,Ee-G,Oe-.04,(Ue+Xe)/2,(G+Ee)/2,{shadow:!1});const Ie=new be(Ds(new ut(Ee-G,Xe-Ue),Ee-G,Xe-Ue,1.6),w.concrete);Ie.position.set(Oe+.002,(Ue+Xe)/2,(G+Ee)/2),Ie.rotation.y=Math.PI/2,Ie.receiveShadow=!0,i.add(Ie),Ue===0&&(E(i,se.skirting,.015,.1,Ee-G,Oe+.008,.05,(G+Ee)/2,{shadow:!1}),Ge(Oe-.1,G,Oe+.02,Ee))},r=[t,...xo.flatMap(G=>[G-bn-.03,G+bn+.03]),n];for(let G=0;G<r.length;G+=2)s(r[G],r[G+1],0,nt);for(const G of xo)s(G-bn-.03,G+bn+.03,To+.03,nt);E(i,se.wall,.1,We-nt,ln-t,Oe-.05,(nt+We)/2,(t+ln)/2,{shadow:!1}),E(i,w.white,.012,.09,.09,Oe+.006,1.25,9.55,{shadow:!1}),E(i,w.blackMatte,.015,.03,.035,Oe+.012,1.25,9.55,{shadow:!1}),E(i,w.blackMatte,.03,.14,.07,Oe+.015,1.25,9.8,{shadow:!1}),E(i,w.bottleBlue,.01,.04,.04,Oe+.031,1.27,9.8,{shadow:!1}),E(i,w.white,.012,.09,.09,Oe+.006,.4,9.7,{shadow:!1});const o=17.4;E(i,w.black,.03,.78,.78,Oe+.015,2.05,o),gt(i,w.logo,.42,.6,Oe+.032,2.05,o,Math.PI/2),gt(i,se.pixLetters,.8,.34,Oe+.004,1.42,o,Math.PI/2),E(i,w.white,.012,.09,.14,Oe+.006,.42,o+.35,{shadow:!1}),E(i,w.white,.03,.03,.9,Oe+hn/2,nt-.015,o,{shadow:!1});for(const G of[o-.3,o+.3])et(i,w.white,.045,.045,.16,Oe+hn/2-.05,nt-.12,G,{seg:12,shadow:!1,rz:.6});Xn(i,Oe,n,20,1);const a=Yc(i,Oe,19.35,.95,2.25,se.laminate,-1);E(i,se.slot,.012,.9,.12,a,1.45,19.3,{shadow:!1}),E(i,w.chrome,.03,.42,.03,a+.05,1.05,19,{shadow:!1});const c=new be(new ut(.95,1.9),se.fireDoor);c.position.set(Oe+.012,1.15,20.9),c.rotation.y=Math.PI/2,i.add(c),E(i,w.chrome,.03,.1,.04,Oe+.03,1,21.2,{shadow:!1}),gt(i,se.greenSign,.5,.11,Oe+.012,2.25,20.9,Math.PI/2),gt(i,se.fireExt,.62,.12,Oe+.012,1.45,22.05,Math.PI/2);const l=22.8,h=36;Xn(i,Oe,20,l,1),Xn(i,Oe,l,h,1,se.granite);const u=[{n:4,z:24.6},{n:3,z:28},{n:2,z:31.4},{n:1,z:34.6}];for(const G of u)$c(i,Oe,G.z,G.n,1);E(i,w.white,.012,.09,.09,Oe+.006,.38,29.7,{shadow:!1});for(const G of[32.6,33])et(i,w.chrome,.22,.22,.7,Oe+.32,.35,G,{seg:20,shadow:!1});const f=new tt;f.position.set(Oe+.9,2.95,24.2),i.add(f),E(f,w.black,.03,.2,.62,0,0,0,{shadow:!1}),gt(f,se.fourth,.6,.18,.017,0,0,Math.PI/2),gt(f,se.fourth,.6,.18,-.017,0,0,-Math.PI/2);const d=h,g=h+3.6;Xn(i,Oe,d,g,1,se.slate);for(const G of[g-1.25,g-.25])E(i,w.blackMatte,.006,2.2,.01,Oe+.003,1.1,G,{shadow:!1});E(i,w.blackMatte,.006,.01,1,Oe+.003,2.2,g-.75,{shadow:!1}),gt(i,se.eSyn,1.3,.65,Oe+.012,1.75,d+1.35,Math.PI/2),E(i,w.white,.04,.03,1.2,Oe+hn+.3,We-.03,d+1.35,{shadow:!1});for(const G of[d+.9,d+1.35,d+1.8])et(i,w.white,.045,.045,.16,Oe+hn+.3,We-.12,G,{seg:12,shadow:!1,rz:.7});E(i,se.navy,.4,We,.3,Oe,We/2,g+.1);const _=g+4.2;Kc(i,Oe,-1,g+.25,_,4.2,{frost:!0});const m=_+.2,p=m+1.3;Xn(i,Oe,m,p,1,se.navy);const v=new be(Ds(new ut(p-m,nt),p-m,nt,.8),se.navySlats);v.position.set(Oe+.004,nt/2,(m+p)/2),v.rotation.y=Math.PI/2,i.add(v),gt(i,se.ringLogo,.5,.5,Oe+.01,1.75,(m+p)/2,Math.PI/2),Kc(i,Oe,-1,p+.2,ln-.15),E(i,se.wall,.1,We-nt,ln-20,Oe-.05,(nt+We)/2,(20+ln)/2,{shadow:!1}),E(i,se.mat,.6,.012,1.05,Oe+.42,.006,8.12,{shadow:!1});for(const G of[5,18.3])E(i,se.cam,.04,.04,.12,Oe+hn-.05,nt-.03,G,{shadow:!1}),et(i,se.cam,.035,.035,.14,Oe+hn-.1,nt-.08,G,{seg:10,shadow:!1,rz:Math.PI/2-.3});Xn(i,J,vn,Math.min(15,ch),-1),E(i,se.wall,.1,We-nt,ln-vn,J+.05,(nt+We)/2,(vn+ln)/2,{shadow:!1});const y=new be(new ut(.85,2.3),w.glassFrost);y.position.set(J-.03,1.15,-1.2),y.rotation.y=-Math.PI/2,y.renderOrder=2,i.add(y);for(const G of[-1.65,-.75])E(i,w.black,.06,2.35,.05,J-.03,1.17,G);for(const G of[.05,1.2,2.33])E(i,w.black,.06,.05,.9,J-.03,G,-1.2);E(i,w.chrome,.03,.4,.025,J-.09,1.05,-.88,{shadow:!1});const x=2.6,A=Yc(i,J,x,1,2.25,se.laminate,1);E(i,se.slot,.012,.9,.12,A,1.45,x-.05,{shadow:!1}),E(i,w.chrome,.03,.42,.03,A-.05,1.05,x+.37,{shadow:!1});for(const G of[.86,1.24])E(i,w.chrome,.06,.02,.02,A-.025,G,x+.37,{shadow:!1});et(i,w.chrome,.02,.02,.02,A-.01,.95,x+.42,{seg:10,shadow:!1,rz:Math.PI/2});const S=new tt;S.position.set(J-.33,2.62,x-.75),i.add(S),E(S,w.black,.6,.15,.03,0,0,0),gt(S,se.gents,.56,.12,0,0,.017,0),gt(S,se.gents,.56,.12,0,0,-.017,Math.PI),E(S,w.metalDark,.04,.05,.04,.3,.1,0);const R=new be(new Gt(.1,20,14),se.orange);R.position.set(J-.13,1.78,x+1.4),R.castShadow=!0,i.add(R),et(i,w.metalDark,.11,.09,.08,J-.13,1.72,x+1.4,{seg:16,open:!0,shadow:!1}),E(i,w.metalDark,.08,.02,.02,J-.05,1.72,x+1.4,{shadow:!1});const C=ch,b=C+1.7,M=2.45,I=J-.04,V=C+1.05,B=new be(new ut(b-C,nt-.05),se.tint);B.position.set(I,(nt-.05)/2,(C+b)/2),B.rotation.y=-Math.PI/2,B.renderOrder=2,i.add(B);const $=(G,Ee=0,Ue=nt)=>E(i,w.black,.07,Ue-Ee,.06,I,(Ee+Ue)/2,G),Z=(G,Ee=C,Ue=b)=>E(i,w.black,.07,.06,Ue-Ee,I,G,(Ee+Ue)/2);for(const G of[C,b])$(G,0,nt);Z(.03),Z(M),Z(nt-.03);for(const G of[C+.04,V-.03,V+.03,b-.04])$(G,0,M);$((C+V)/2,0,M);for(const G of[.62,1.22,1.84])Z(G,C,V);Z(1.22,V,b);for(const G of[V-.09,V+.09]){E(i,w.chrome,.03,.6,.025,J-.12,1.15,G,{shadow:!1});for(const Ee of[.88,1.42])E(i,w.chrome,.08,.02,.02,J-.09,Ee,G,{shadow:!1})}Ge(J-.08,C,J+.02,b);const Y=C-.6,ne=b+.6,z=J+2.6;St(i,se.tableWood,J+.02,Y,z,ne,.002),St(i,se.roomCeil,J,Y,z,ne,We,{down:!0}),E(i,se.olive,.1,We,ne-Y,z,We/2,(Y+ne)/2,{shadow:!1});for(const G of[Y,ne])E(i,se.olive,z-J-.12,We,.1,(J+.12+z)/2,We/2,G,{shadow:!1});for(const[G,Ee]of[[V-.1,.9],[V+.15,1.15]]){E(i,w.black,.01,Ee,.01,J+.9,We-Ee/2,G,{shadow:!1});const Ue=new be(new Gt(.05,12,10),se.lamp);Ue.position.set(J+.9,We-Ee-.04,G),i.add(Ue)}E(i,se.silver,.035,.2,.15,J-.018,1.35,C-.4,{shadow:!1}),E(i,w.blackMatte,.01,.08,.09,J-.037,1.39,C-.4,{shadow:!1}),E(i,w.bottleBlue,.006,.05,.05,J-.043,1.4,C-.42,{shadow:!1});const pe=new be(new Gt(.07,16,10,0,Math.PI*2,0,Math.PI/2),se.cam);pe.rotation.x=Math.PI,pe.position.set(J-.35,nt,C+.3),i.add(pe);const me=C+2.85,we=me+3.4;Xn(i,J,b,we+.2,-1),E(i,w.white,.012,.09,.09,J-.006,.38,me-.3,{shadow:!1});for(const G of[me-.1,we+.1]){E(i,se.woodStrip,.06,nt,.2,J-.03,nt/2,G);for(const Ee of[-.06,0,.06])E(i,w.blackMatte,.005,nt,.008,J-.061,nt/2,G+Ee,{shadow:!1})}const Be=new be(Ds(new ut(we-me,nt),we-me,nt,.7),se.diamond);Be.position.set(J-.004,nt/2,(me+we)/2),Be.rotation.y=-Math.PI/2,Be.receiveShadow=!0,i.add(Be);const Ve=(me+we)/2+.2;E(i,w.white,.03,.58,1.05,J-.02,1.85,Ve),gt(i,se.techno,1,.55,J-.036,1.85,Ve,-Math.PI/2),E(i,w.black,.04,.03,.8,J-hn-.3,We-.03,Ve,{shadow:!1});for(const G of[Ve-.3,Ve+.05,Ve+.35])et(i,w.black,.04,.035,.14,J-hn-.3,We-.12,G,{seg:10,shadow:!1,rz:-.7});const Q=we+.2,he=we+1.35,_e=he+.6,ve=_e+1.1,Ne=ve,Fe=Fn;E(i,w.blackMatte,.02,.17,.09,J-.07,1.45,we+.1,{shadow:!1}),E(i,w.bottleBlue,.005,.11,.06,J-.081,1.47,we+.1,{shadow:!1});const ue=new be(new ut(he-Q-.04,2.38),w.glass);ue.position.set(J-.03,1.2,(Q+he)/2),ue.rotation.y=-Math.PI/2,ue.renderOrder=2,i.add(ue);for(const G of[Q+.05,he-.05])E(i,w.chrome,.03,.05,.12,J-.03,2.36,G,{shadow:!1});E(i,w.chrome,.03,1.1,.03,J-.11,1.15,Q+.16,{shadow:!1});for(const G of[.62,1.68])E(i,w.chrome,.08,.02,.02,J-.07,G,Q+.16,{shadow:!1});Ge(J-.06,Q,J+.02,he),St(i,se.greyTile,J+.02,Q,J+3,he+.3,.002,{tile:1.2}),St(i,se.roomCeil,J,Q,J+3,he+.3,We,{down:!0}),E(i,se.room,.1,We,he+.3-Q,J+3,We/2,(Q+he+.3)/2,{shadow:!1}),E(i,w.black,.05,2.6,.05,J+1.6,1.3,Q+.5,{shadow:!1}),E(i,se.room,2.88,We,.1,J+1.56,We/2,he+.35,{shadow:!1}),Xn(i,J,he,_e,-1),E(i,w.white,.012,.09,.09,J-.006,1.25,(he+_e)/2,{shadow:!1}),E(i,w.blackMatte,.015,.03,.035,J-.012,1.25,(he+_e)/2,{shadow:!1}),E(i,se.wall,.1,nt-2.4,he-Q,J+.05,(2.4+nt)/2,(Q+he)/2),E(i,se.wall,.1,nt-2.3,ve-_e,J+.05,(2.3+nt)/2,(_e+ve)/2),E(i,se.frame,.12,.06,ve-_e,J+.02,2.3,(_e+ve)/2);for(const G of[_e+.02,ve-.02])E(i,se.frame,.12,2.3,.04,J+.02,1.15,G);const Ce=new tt;Ce.position.set(J+.06,0,_e+.04),Ce.rotation.y=1.25,i.add(Ce);const j=ve-_e-.08;E(Ce,se.laminate,.04,2.25,j,0,1.125,j/2);for(const G of[-1,1])E(Ce,se.slot,.012,.9,.1,G*.021,1.45,j*.6,{shadow:!1}),E(Ce,w.chrome,.03,.42,.025,G*.06,1.05,j-.12,{shadow:!1});Ge(J+.04,_e,J+1.05,_e+.4);const de=J+4.2,D=_e-.1,ce=ve+.15;St(i,se.granite,J+.02,D,de,ce,.003,{tile:1.2}),St(i,se.roomCeil,J,D,de,ce,4.5,{down:!0}),E(i,se.stairBlue,de-J-.12,4.5,.1,(J+.12+de)/2,2.25,D-.05,{shadow:!1}),E(i,se.stairBlue,de-J-.12,4.5,.1,(J+.12+de)/2,2.25,ce+.05,{shadow:!1}),E(i,se.stairBlue,.1,4.5,ce-D,de+.05,2.25,(D+ce)/2,{shadow:!1}),E(i,se.wall,.1,4.5-nt,ve-_e,J+.05,(4.5+nt)/2,(_e+ve)/2,{shadow:!1});for(let G=0;G<9;G++)E(i,se.granite,.3,.17*(G+1),.95,J+1.3+G*.3,.085*(G+1),ve-.4);Ge(J+1.15,ve-.9,de,ce),Ge(de-.05,D,de+.1,ce);const K=ve+1.5,fe=J-.1;E(i,se.granite,.2,We,Fe-Ne,J,We/2,(Ne+Fe)/2),E(i,se.granite,.1,We,.1,J+.05,We/2,Fe+.05),Ge(fe,Ne,J+.1,Fe),$c(i,fe,K,5,-1);const re=new tt;re.position.set(J-.9,2.95,Ne-.1),i.add(re),E(re,w.black,.03,.2,.62,0,0,0,{shadow:!1}),gt(re,se.fourth,.6,.18,.017,0,0,Math.PI/2),gt(re,se.fourth,.6,.18,-.017,0,0,-Math.PI/2);const Ae=qt+.55,Se=Ae+.35,L=Se+2.6;Xn(i,J,Ae,Se,-1),E(i,se.granite,.2,We,L-Se,J,We/2,(Se+L)/2),Ge(J-.1,Se,J+.1,L),$c(i,J-.1,Se+1.45,6,-1);const T=L,W=T+2.8,le=T+.9;f2(i,T,W,le);const xe=new tt;xe.position.set(J-.33,2.62,le+.75),i.add(xe),E(xe,w.black,.6,.15,.03,0,0,0),gt(xe,se.ladies,.56,.12,0,0,.017,0),gt(xe,se.ladies,.56,.12,0,0,-.017,Math.PI);const oe=new be(new Gt(.1,20,14),se.orange);oe.position.set(J-.13,1.78,T+2.2),oe.castShadow=!0,i.add(oe),et(i,w.metalDark,.11,.09,.08,J-.13,1.72,T+2.2,{seg:16,open:!0,shadow:!1}),E(i,w.white,.012,.09,.09,J-.006,.38,W-.25,{shadow:!1});const Le=W,Te=Le+2.6;Xn(i,J,Le,Te,-1,se.navy);const Pe=new be(Ds(new ut(Te-Le,nt),Te-Le,nt,.8),se.navySlats);Pe.position.set(J-.004,nt/2,(Le+Te)/2),Pe.rotation.y=-Math.PI/2,i.add(Pe),gt(i,se.tenCod,1.5,.47,J-.012,1.75,(Le+Te)/2,-Math.PI/2),Kc(i,J,1,Te+.2,ln-.15),p2(i),nd(i,vn-.12,1,Oe,J,Oe+.9,J-.25),nd(i,ln+.12,-1),gt(i,se.fireExit,.5,.11,(Oe+J)/2,2.95,ln-.01,Math.PI);const it=new tt;it.position.set((Oe+J)/2,2.72,vn+1.6),i.add(it),E(it,w.white,.58,.14,.03,0,0,0,{shadow:!1}),gt(it,se.fireExit,.56,.12,0,0,.016,0),gt(it,se.fireExit,.56,.12,0,0,-.016,Math.PI);for(const G of[-1,1])E(it,w.chrome,.006,We-2.79,.006,G*.22,(We-2.79)/2+.07,0,{shadow:!1})}const rd={x:12.75,z:17.72,yaw:1.05};function g2(i){St(i,w.floorBeige,0,0,Ut,Lt,0),St(i,w.floorBeige,Ut,fn,Ct,Lt,0),St(i,w.floorBeige,Yt-as,Lt,Ct,Et,0),St(i,w.floorDark,0,Lt,Yt-as,Et,0),St(i,w.floorDark,0,Et,Jt,pt,0),UM(i),OM(i),m2(i),FM(i),XM(i),e2(i),r2(i),a2(i)}function Vh(i,e){return i>Ct?"Building Hall":i<0?"Terrace":e>Pt?"Game Room":e>pt?i<kn?"Meeting Room":"Workspace":e<ls&&i<Ut?"Corner Cabin":e<Wt&&e>fn&&i>Ut&&i<Wi?i<7?"Cabin 2":"Cabin 1":i>=Yt&&e<Et?"Reception":e<Lt?i<Ut?"Window Lounge":"Cabin Corridor":"Workspace"}const hr=new En(0,0,0,"YXZ"),ur=new N,x2={type:"change"},_2={type:"lock"},v2={type:"unlock"},od=Math.PI/2;class y2 extends Py{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=M2.bind(this),this._onPointerlockChange=b2.bind(this),this._onPointerlockError=w2.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;ur.setFromMatrixColumn(t.matrix,0),ur.crossVectors(t.up,ur),t.position.addScaledVector(ur,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;ur.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(ur,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function M2(i){if(this.enabled===!1||this.isLocked===!1)return;const e=i.movementX||i.mozMovementX||i.webkitMovementX||0,t=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;hr.setFromQuaternion(n.quaternion),hr.y-=e*.002*this.pointerSpeed,hr.x-=t*.002*this.pointerSpeed,hr.x=Math.max(od-this.maxPolarAngle,Math.min(od-this.minPolarAngle,hr.x)),n.quaternion.setFromEuler(hr),this.dispatchEvent(x2)}function b2(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(_2),this.isLocked=!0):(this.dispatchEvent(v2),this.isLocked=!1)}function w2(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const ad=1.65,S2=.25,cd=3,E2=6,T2=18,A2=5.2;function R2(i,e,{spawn:t,yaw:n=0}){const s=new y2(i,e),r={},o={x:0,y:0,run:!1},a=new N(t.x,0,t.z),c=new N;let l=0,h=0,u=0,f=0;i.position.set(a.x,ad,a.z),i.rotation.set(0,n,0,"YXZ");const d={dragMode:!1,paused:!1};let g=!1,_=0,m=0;const p=new En(0,0,0,"YXZ");e.addEventListener("mousedown",C=>{d.dragMode&&(g=!0,_=C.clientX,m=C.clientY)}),addEventListener("mouseup",()=>{g=!1}),addEventListener("mousemove",C=>{!d.dragMode||!g||d.paused||(p.setFromQuaternion(i.quaternion),p.y-=(C.clientX-_)*.004,p.x=Math.max(-1.45,Math.min(1.45,p.x-(C.clientY-m)*.004)),i.quaternion.setFromEuler(p),_=C.clientX,m=C.clientY)});const v=()=>!d.paused&&(s.isLocked||d.dragMode);addEventListener("keydown",C=>{r[C.code]=!0,C.code==="Space"&&y()});function y(){v()&&h<=.001&&(l=A2)}addEventListener("keyup",C=>{r[C.code]=!1}),addEventListener("blur",()=>{for(const C in r)r[C]=!1});const x=new N,A=new N,S=new N;function R(C){C=Math.min(C,.05),S.set(0,0,0),v()&&(i.getWorldDirection(x),x.y=0,x.normalize(),A.crossVectors(x,i.up).normalize(),(r.KeyW||r.ArrowUp)&&S.add(x),(r.KeyS||r.ArrowDown)&&S.sub(x),(r.KeyD||r.ArrowRight)&&S.add(A),(r.KeyA||r.ArrowLeft)&&S.sub(A),(o.x||o.y)&&S.addScaledVector(x,o.y).addScaledVector(A,o.x));const b=r.ShiftLeft||r.ShiftRight||o.run;if(S.lengthSq()>0){const V=Math.min(1,S.length());S.normalize().multiplyScalar((b?E2:cd)*(o.x||o.y?Math.max(.5,V):1))}const M=1-Math.exp(-(h>0?3:12)*C);c.x+=(S.x-c.x)*M,c.z+=(S.z-c.z)*M,IM(a,c.x*C,c.z*C,S2),l-=T2*C,h=Math.max(0,h+l*C),h===0&&(l=Math.max(l,0));const I=Math.hypot(c.x,c.z);h===0&&I>.3?(u+=C*I*2.6,f=Math.sin(u)*.035*Math.min(1,I/cd)):f*=.85,i.position.set(a.x,ad+h+f,a.z)}return{controls:s,update:R,pos:a,state:d,touch:o,jump:y}}function C2(i){var s;i.updateMatrixWorld(!0);const e=new Map,t=[];i.traverse(r=>{r.isMesh&&t.push(r)});const n=r=>{const o=[];for(let a=r;a&&a!==i;a=a.parent)a.userData.label&&o.at(-1)!==a.userData.label&&o.push(a.userData.label);return o.join(" · ")};for(const r of t){const o=`${r.material.uuid}|${r.castShadow}|${r.renderOrder}`;let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(const h of Object.keys(a.attributes))["position","normal","uv"].includes(h)||a.deleteAttribute(h);a.attributes.uv||a.setAttribute("uv",new ft(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(r.matrixWorld),e.has(o)||e.set(o,{material:r.material,cast:r.castShadow,order:r.renderOrder,geos:[],tris:0,labels:[]});const c=e.get(o),l=n(r);l&&((s=c.labels.at(-1))==null?void 0:s[1])!==l?c.labels.push([c.tris,l]):!l&&c.labels.length&&c.labels.at(-1)[1]!==""&&c.labels.push([c.tris,""]),c.geos.push(a),c.tris+=a.attributes.position.count/3}for(;i.children.length;)i.remove(i.children[0]);for(const r of e.values()){const o=Ka(r.geos,!1);o.computeBoundingSphere();const a=new be(o,r.material);a.castShadow=r.cast,a.receiveShadow=!0,a.renderOrder=r.order,a.userData.labels=r.labels,i.add(a)}return e.size}function P2(i){const e=i.object.userData.labels;if(e){let t=0,n=e.length-1,s="";for(;t<=n;){const r=t+n>>1;e[r][0]<=i.faceIndex?(s=e[r][1],t=r+1):n=r-1}return s}for(let t=i.object;t;t=t.parent)if(t.userData.label)return t.userData.label;return""}const Zc="/api/suggestions",Jc="pixbit-suggestions-v2",zp={W:"Window table",L:"Long table",E:"East-wall desk",LOCK:"Lockers"},L2={W:[1.4,1.2],L:[2.8,1.2],E:[1.3,.8],LOCK:[.55,1.25]},I2=["Corner cabin","Cabin 1","Cabin 2","Lounge","Corridor","Reception","Open workspace","Back wall","East wall","Windows",...ka.map(i=>i.id==="LOCK"?"Lockers":`${zp[i.id[0]]} ${i.id}`)],Gn="#ecc828",ld="#3fbf6f",D2=35e6;function N2({scene:i,camera:e,player:t,world:n,zoneAt:s,renderer:r}){let o=[],a=!1,c=null,l=[],h=[],u=!1,f=!1,d=null;async function g(){try{const U=await fetch(Zc);if(!U.ok)throw new Error(U.status);o=await U.json()}catch{a=!0;try{o=JSON.parse(localStorage.getItem(Jc))||[]}catch{o=[]}}fe()}async function _(U,ee,Me){if(a){U.n=U.n??o.reduce((ae,ge)=>Math.max(ae,ge.n||0),0)+1,U.created=U.created??Date.now(),U.files=[...(U.files||[]).filter(ae=>!Me.includes(ae.name)),...ee.map(ae=>({name:ae.name,type:ae.type,path:ae.data}))];const H=o.findIndex(ae=>ae.id===U.id);H>=0?o[H]=U:o.push(U);try{localStorage.setItem(Jc,JSON.stringify(o))}catch{throw new Error("browser storage is full (start the dev server to save files to the project)")}return U}const O=await fetch(Zc,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...U,newFiles:ee,removeFiles:Me})}),k=await O.json().catch(()=>({}));if(!O.ok)throw new Error(k.error||`server said ${O.status}`);const F=o.findIndex(H=>H.id===k.id);return F>=0?o[F]=k:o.push(k),k}async function m(U){if(a||await fetch(`${Zc}/${encodeURIComponent(U)}`,{method:"DELETE"}),o=o.filter(ee=>ee.id!==U),a)try{localStorage.setItem(Jc,JSON.stringify(o))}catch{}}function p(U,ee){let Me=null,O=.9;const k=s(U,ee);for(const F of ka){if(s(F.x,F.z)!==k)continue;const H=F.id==="LOCK"?"LOCK":F.id[0];let[ae,ge]=L2[H]||[1,1];(F.rot||0)%180&&([ae,ge]=[ge,ae]);const je=Math.hypot(Math.max(0,Math.abs(U-F.x)-ae/2),Math.max(0,Math.abs(ee-F.z)-ge/2));je<O&&(O=je,Me=F.id==="LOCK"?"Lockers":`${zp[H]} ${F.id}`)}return Me}const v=U=>Math.round(U*100)/100,y=U=>/^image\/(jpeg|png|gif|webp|avif|svg\+xml|bmp)$/.test(U.type),x=U=>U.src||U.path,A=new tt;A.name="suggestion-marks",i.add(A);const S=new Gt(.07,16,12),R=new Yn(.008,.008,1,6),C=new Ln({color:"#222"}),b=new N(0,1,0),M={},I=(U,ee=1)=>M[U+ee]||(M[U+ee]=new Ln({color:U,transparent:ee<1,opacity:ee,depthWrite:ee===1,side:Ot}));function V(U,ee){const Me=document.createElement("canvas");Me.width=Me.height=64;const O=Me.getContext("2d");O.fillStyle="#111",O.beginPath(),O.arc(32,32,28,0,Math.PI*2),O.fill(),O.strokeStyle=ee,O.lineWidth=5,O.stroke(),O.fillStyle="#fff",O.font="bold 28px system-ui, sans-serif",O.textAlign="center",O.textBaseline="middle",O.fillText(String(U),32,34);const k=new Un(Me);k.colorSpace=yt;const F=new Rr(new ks({map:k,depthTest:!1,transparent:!0}));return F.scale.set(.22,.22,1),F.renderOrder=10,F}function B({x0:U,z0:ee,x1:Me,z1:O},k,F){const H=Math.abs(Me-U),ae=Math.abs(O-ee),ge=new be(new ut(H,ae),I(k,.18));ge.rotation.x=-Math.PI/2,ge.position.set((U+Me)/2,.02,(ee+O)/2),ge.renderOrder=3;const je=[[U,ee],[Me,ee],[Me,O],[U,O]].map(([Kt,_t])=>new N(Kt,.025,_t)),Dt=new up(new Ht().setFromPoints(je),new Th({color:k}));F.add(ge,Dt)}function $(U,ee,Me,O,k,F){const H=new be(R,C);H.scale.y=O,H.quaternion.setFromUnitVectors(b,Me),H.position.copy(ee).addScaledVector(Me,O/2);const ae=new be(S,I(k));ae.position.copy(ee).addScaledVector(Me,O);const ge=V(F,k);ge.position.copy(ae.position).add(new N(0,.18,0)),U.add(H,ae,ge)}function Z(){for(const U of[...A.children])A.remove(U),U.traverse(ee=>{var Me,O,k;(O=(Me=ee.material)==null?void 0:Me.map)==null||O.dispose(),(ee.isLine||((k=ee.geometry)==null?void 0:k.type)==="PlaneGeometry")&&ee.geometry.dispose()});for(const U of o){if(U.status==="done")continue;const ee=new tt;ee.userData.sid=U.id;const Me=Gn;U.area?(B(U.area,Me,ee),$(ee,new N((U.area.x0+U.area.x1)/2,0,(U.area.z0+U.area.z1)/2),b,1.1,Me,U.n)):$(ee,new N(...U.point),new N(...U.normal||[0,1,0]).normalize(),.28,Me,U.n),A.add(ee)}}const Y=new tt;i.add(Y);function ne(){for(const U of[...Y.children])Y.remove(U)}const z=document.createElement("style");z.textContent=`
  .sg-modal { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,.5); z-index:20; padding:16px; }
  .sg-hidden { display:none !important; }
  .sg-card { width:min(520px,100%); max-height:100%; overflow:auto; background:#1b1b1b; color:#eee; border:1px solid ${Gn}; border-radius:12px; padding:18px 20px; font-size:14px; box-sizing:border-box; }
  .sg-card h2 { margin:0 0 6px; font-size:18px; color:#fff; }
  .sg-card label.f { display:block; font-size:12px; color:#aaa; margin:10px 0 4px; }
  .sg-card input[type=text], .sg-card textarea { width:100%; box-sizing:border-box; background:#111; color:#fff; border:1px solid #444; border-radius:8px; padding:8px 10px; font:inherit; }
  .sg-card textarea { min-height:110px; resize:vertical; }
  .sg-card input:focus, .sg-card textarea:focus { outline:none; border-color:${Gn}; }
  .sg-meta { color:#999; font-size:12px; margin-top:4px; }
  .sg-drop { margin-top:4px; border:1.5px dashed #555; border-radius:8px; padding:12px; text-align:center; color:#aaa; cursor:pointer; }
  .sg-drop.over, .sg-drop:focus { border-color:${Gn}; color:${Gn}; outline:none; }
  .sg-files { display:grid; grid-template-columns:repeat(auto-fill,minmax(110px,1fr)); gap:8px; margin-top:8px; }
  .sg-file { position:relative; background:#111; border:1px solid #333; border-radius:8px; overflow:hidden; font-size:12px; }
  .sg-file img { width:100%; height:80px; object-fit:cover; display:block; }
  .sg-file .doc { height:80px; display:flex; align-items:center; justify-content:center; color:${Gn}; font-weight:700; font-size:16px; }
  .sg-file span { display:block; padding:4px 6px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .sg-file button { position:absolute; top:4px; right:4px; padding:1px 7px !important; }
  .sg-check { display:flex; align-items:center; gap:8px; margin-top:12px; }
  .sg-reply { margin-top:10px; background:#11261a; border:1px solid #2c5a3c; border-radius:8px; padding:8px 10px; white-space:pre-wrap; font-size:13px; }
  .sg-row { display:flex; gap:8px; margin-top:14px; align-items:center; flex-wrap:wrap; }
  .sg-row .sp { flex:1; }
  .sg-card button, .sg-list button { font:inherit; font-size:13px; padding:7px 12px; border-radius:7px; border:1px solid #555; background:#2a2a2a; color:#eee; cursor:pointer; }
  .sg-card button:hover, .sg-list button:hover { border-color:#999; }
  .sg-card button.pri { background:${Gn}; color:#111; border-color:${Gn}; font-weight:700; }
  .sg-card button.del { color:#ff8a7a; }
  .sg-err { color:#ff8a7a; font-size:13px; margin-top:8px; min-height:1em; }
  .sg-list { position:fixed; top:0; right:0; bottom:0; width:min(380px,100%); background:#161616; color:#eee; border-left:1px solid #333; z-index:15; display:flex; flex-direction:column; font-size:14px; }
  .sg-list header { display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid #333; gap:8px; }
  .sg-list header b { flex:1; font-size:16px; }
  .sg-items { overflow:auto; padding:8px 12px 16px; }
  .sg-item { display:flex; gap:10px; padding:12px 4px; border-bottom:1px solid #2a2a2a; }
  .sg-num { flex:none; width:26px; height:26px; border-radius:50%; background:#111; border:2px solid ${Gn}; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; }
  .sg-num.done { border-color:${ld}; }
  .sg-body { flex:1; min-width:0; }
  .sg-body p { margin:0 0 6px; white-space:pre-wrap; word-break:break-word; }
  .sg-body small { color:#999; display:block; margin-bottom:6px; }
  .sg-badge { display:inline-block; font-size:11px; padding:1px 7px; border-radius:10px; background:#3a3315; color:${Gn}; margin-right:6px; }
  .sg-badge.done { background:#16301f; color:${ld}; }
  .sg-thumbs { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:6px; }
  .sg-thumbs img { width:72px; height:54px; object-fit:cover; border-radius:5px; }
  .sg-thumbs a { font-size:12px; color:${Gn}; }
  .sg-reply-l { font-size:12px; color:#9fd8b0; background:#11261a; border-radius:6px; padding:6px 8px; margin-bottom:6px; white-space:pre-wrap; }
  .sg-empty { color:#999; padding:16px 4px; line-height:1.6; }
  .sg-toast { position:fixed; left:50%; bottom:40px; transform:translateX(-50%); background:rgba(0,0,0,.85); color:#fff; padding:8px 16px; border-radius:6px; z-index:30; font-size:14px; pointer-events:none; opacity:0; transition:opacity .3s; max-width:90vw; text-align:center; }
  .sg-toast.show { opacity:1; }`,document.head.appendChild(z);const pe=document.createElement("div");pe.className="sg-modal sg-hidden",pe.innerHTML=`<div class="sg-card" role="dialog" aria-modal="true" aria-labelledby="sg-title">
    <h2 id="sg-title">New suggestion</h2>
    <label class="f" for="sg-section">Section</label>
    <input type="text" id="sg-section" list="sg-sections" placeholder="e.g. Long table L2, Reception, Cabin 1">
    <datalist id="sg-sections">${I2.map(U=>`<option value="${U}">`).join("")}</datalist>
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
  </div>`,document.body.appendChild(pe);const me=U=>pe.querySelector(U),we=me("#sg-text"),Be=me("#sg-section"),Ve=me(".sg-drop"),Q=me("input[type=file]"),he=me(".sg-files"),_e=me(".sg-err"),ve=me(".sg-meta"),Ne=me("#sg-done"),Fe=me(".sg-reply"),ue=document.createElement("div");ue.className="sg-list sg-hidden",ue.innerHTML='<header><b>Suggestions</b><button type="button" class="close">Close (L)</button></header><div class="sg-items"></div>',document.body.appendChild(ue);const Ce=ue.querySelector(".sg-items"),j=document.createElement("div");j.className="sg-toast",document.body.appendChild(j);let de;function D(U,ee=2600){j.textContent=U,j.classList.add("show"),clearTimeout(de),de=setTimeout(()=>j.classList.remove("show"),ee)}const ce=U=>U.area?`Area x ${v(U.area.x0)}–${v(U.area.x1)} m, z ${v(U.area.z0)}–${v(U.area.z1)} m`:`Point x ${U.point[0]}, z ${U.point[2]}`;function K(){if(Ce.innerHTML="",!o.length){Ce.innerHTML='<div class="sg-empty">No suggestions yet.<br>Aim the dot at something and press <b>C</b>, or press <b>X</b> on two floor corners to mark an area.</div>';return}for(const U of[...o].sort((ee,Me)=>ee.n-Me.n)){const ee=document.createElement("div");ee.className="sg-item",ee.innerHTML=`<div class="sg-num ${U.status==="done"?"done":""}">${U.n}</div><div class="sg-body"><small></small><p></p><div class="sg-thumbs"></div></div>`;const Me=ee.querySelector("small");Me.innerHTML=`<span class="sg-badge ${U.status==="done"?"done":""}">${U.status==="done"?"done":"open"}</span>`,Me.append(U.section||U.zone||""),ee.querySelector("p").textContent=U.text,U.reply&&ee.querySelector("p").after(Object.assign(document.createElement("div"),{className:"sg-reply-l",textContent:`Claude: ${U.reply}`}));const O=ee.querySelector(".sg-thumbs");for(const je of U.files||[])y(je)?O.append(Object.assign(document.createElement("img"),{src:x(je),alt:je.name,title:je.name})):O.append(Object.assign(document.createElement("a"),{href:x(je),textContent:je.name,target:"_blank",download:je.name}));const k=ee.querySelector(".sg-body"),F=document.createElement("div");F.className="sg-row",F.style.marginTop="2px";const H=Object.assign(document.createElement("button"),{type:"button",textContent:"Go there"});H.onclick=()=>Te(U);const ae=Object.assign(document.createElement("button"),{type:"button",textContent:"Open"});ae.onclick=()=>{ue.classList.add("sg-hidden"),W(U)};const ge=Object.assign(document.createElement("button"),{type:"button",textContent:"Delete"});ge.style.color="#ff8a7a",xe(ge,()=>oe(U)),F.append(H,ae,ge),k.appendChild(F),Ce.appendChild(ee)}}function fe(){Z(),K()}function re(){he.innerHTML="",l.forEach((U,ee)=>{const Me=document.createElement("div");Me.className="sg-file",y(U)?Me.append(Object.assign(document.createElement("img"),{src:x(U),alt:U.name})):Me.append(Object.assign(document.createElement("div"),{className:"doc",textContent:(U.name.split(".").pop()||"file").slice(0,5).toUpperCase()})),Me.append(Object.assign(document.createElement("span"),{textContent:U.name,title:U.name}));const O=Object.assign(document.createElement("button"),{type:"button",textContent:"×"});O.setAttribute("aria-label",`Remove ${U.name}`),O.onclick=()=>{U.data||h.push(U.name),l.splice(ee,1),re()},Me.append(O),he.append(Me)})}const Ae=U=>new Promise((ee,Me)=>{const O=new FileReader;O.onload=()=>ee(O.result),O.onerror=Me,O.readAsDataURL(U)});async function Se(U){_e.textContent="";for(const ee of U){let Me=ee.name||`pasted-${Date.now()}.png`,O=ee.type||"application/octet-stream",k;if(/^image\/(jpeg|png|webp)$/.test(O)&&ee.size>15e5)try{const H=await createImageBitmap(ee),ae=Math.min(1,2e3/Math.max(H.width,H.height)),ge=document.createElement("canvas");ge.width=Math.round(H.width*ae),ge.height=Math.round(H.height*ae),ge.getContext("2d").drawImage(H,0,0,ge.width,ge.height),k=ge.toDataURL("image/jpeg",.85),O="image/jpeg",Me=Me.replace(/\.\w+$/,"")+".jpg"}catch{}if(k=k||await Ae(ee),l.reduce((H,ae)=>{var ge;return H+(((ge=ae.data)==null?void 0:ge.length)||0)},0)+k.length>D2){_e.textContent=`${Me} is too big to add (keep new files under ~25 MB per save).`;continue}l.push({name:Me,type:O,data:k,src:k})}re()}Ve.onclick=()=>Q.click(),Ve.onkeydown=U=>{(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),Q.click())},Q.onchange=()=>{Se([...Q.files]),Q.value=""},Ve.ondragover=U=>{U.preventDefault(),Ve.classList.add("over")},Ve.ondragleave=()=>Ve.classList.remove("over"),Ve.ondrop=U=>{U.preventDefault(),Ve.classList.remove("over"),Se([...U.dataTransfer.files])},pe.addEventListener("paste",U=>{const ee=[...U.clipboardData.files];ee.length&&(U.preventDefault(),Se(ee))}),we.oninput=()=>{_e.textContent=""};const L=()=>!pe.classList.contains("sg-hidden");let T=()=>{};function W(U){c=U,l=(U.files||[]).map(ee=>({...ee})),h=[],me("#sg-title").textContent=U.id?`Suggestion ${U.n}`:U.area?"New suggestion for this area":"New suggestion",Be.value=U.section||[U.near,U.zone].filter(Boolean).join(" · "),ve.textContent=ce(U)+(U.folder?` · saved in suggestions/${U.folder}/`:""),we.value=U.text||"",Ne.checked=U.status==="done",me(".sg-check").classList.toggle("sg-hidden",!U.id),Fe.textContent=U.reply?`Claude: ${U.reply}`:"",Fe.classList.toggle("sg-hidden",!U.reply),me(".del").classList.toggle("sg-hidden",!U.id),_e.textContent="",re(),u=!!document.pointerLockElement,pe.classList.remove("sg-hidden"),t.state.paused=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>we.focus(),30)}function le(){if(pe.classList.add("sg-hidden"),c=null,l=[],h=[],ne(),t.state.paused=!1,u)try{const U=r.domElement.requestPointerLock();U!=null&&U.catch&&U.catch(()=>T())}catch{T()}}me(".cancel").onclick=le,me(".pri").onclick=async()=>{const U=we.value.trim();if(!U){_e.textContent="Write what needs to change first.",we.focus();return}const ee={...c,text:U,section:Be.value.trim(),status:Ne.checked?"done":"open",updated:Date.now()};delete ee.near,ee.id||(ee.id=`s${Date.now().toString(36)}`);const Me=l.filter(O=>O.data).map(({name:O,type:k,data:F})=>({name:O,type:k,data:F}));me(".pri").disabled=!0,me(".pri").textContent="Saving…";try{const O=await _(ee,Me,h);fe(),D(a?`Suggestion ${O.n} saved in this browser`:`Suggestion ${O.n} saved to suggestions/${O.folder}/`),le()}catch(O){_e.textContent=`Could not save: ${O.message}`}finally{me(".pri").disabled=!1,me(".pri").textContent="Save"}};function xe(U,ee){let Me=0;U.onclick=async()=>{if(!Me){U.textContent="Click again to delete",U.style.borderColor="#ff8a7a",Me=setTimeout(()=>{Me=0,U.textContent="Delete",U.style.borderColor=""},4e3);return}clearTimeout(Me),Me=0,U.disabled=!0;try{await ee()}finally{U.disabled=!1,U.textContent="Delete",U.style.borderColor=""}}}async function oe(U){await m(U.id),fe(),D(`Suggestion ${U.n} deleted`)}xe(me(".del"),async()=>{if(c!=null&&c.id){const U=c;le(),await oe(U)}}),ue.querySelector(".close").onclick=()=>Le(!1);function Le(U=ue.classList.contains("sg-hidden")){ue.classList.toggle("sg-hidden",!U),U&&(K(),document.pointerLockElement&&document.exitPointerLock())}function Te(U){U.view&&(t.pos.set(U.view.x,0,U.view.z),e.position.set(U.view.x,e.position.y,U.view.z),e.quaternion.setFromEuler(new En(U.view.pitch,U.view.yaw,0,"YXZ"))),Le(!1),D(`${U.n}: ${U.text.slice(0,70)}${U.text.length>70?"…":""}`)}const Pe=new Cy;Pe.far=40;const it=new ye(0,0);function G(){Pe.setFromCamera(it,e);const U=Pe.intersectObjects([A,n],!0).find(O=>O.object.visible&&!O.object.isLine);if(!U)return null;let ee=U.object;for(;ee&&!ee.userData.sid&&ee!==i;)ee=ee.parent;if(ee!=null&&ee.userData.sid)return{mark:o.find(O=>O.id===ee.userData.sid),point:U.point};const Me=U.face?U.face.normal.clone().transformDirection(U.object.matrixWorld):b.clone();return Me.dot(Pe.ray.direction)>0&&Me.negate(),{point:U.point,normal:Me,target:Ee(P2(U),U.point,Me)}}function Ee(U,ee,Me){return U==="Wall"||U==="Glass wall"?ee.x<.35?`Window ${U.toLowerCase()}`:ee.x>9.8&&ee.z>9.5?"East wall":ee.z>18.4?"Back wall":`${U} (${s(ee.x,ee.z)})`:U||(Me.y>.7&&ee.y<.1?"Floor":Me.y<-.7?"Ceiling":"")}function Ue(){const U=new En().setFromQuaternion(e.quaternion,"YXZ");return{x:v(t.pos.x),z:v(t.pos.z),yaw:v(U.y),pitch:v(U.x)}}function Xe(){const U=G();if(!U){D("Aim the dot at something first");return}if(U.mark){W(U.mark);return}const ee=U.point;W({point:[v(ee.x),v(ee.y),v(ee.z)],normal:[v(U.normal.x),v(U.normal.y),v(U.normal.z)],zone:s(ee.x,ee.z),near:U.target||p(ee.x,ee.z),target:U.target,view:Ue()})}function Ie(){const U=G();if(!U){D("Aim the dot at the floor first");return}const{x:ee,z:Me}=U.point;if(!d){d={x:ee,z:Me},ne(),$(Y,new N(ee,0,Me),b,.5,Gn,"1"),D("Corner 1 set. Aim at the opposite corner and press X (Esc cancels).",4e3);return}const O={x0:v(Math.min(d.x,ee)),z0:v(Math.min(d.z,Me)),x1:v(Math.max(d.x,ee)),z1:v(Math.max(d.z,Me))};if(d=null,ne(),O.x1-O.x0<.2||O.z1-O.z0<.2){D("That area is too small: pick two corners further apart");return}B(O,Gn,Y);const k=(O.x0+O.x1)/2,F=(O.z0+O.z1)/2;W({area:O,point:[v(k),0,v(F)],normal:[0,1,0],zone:s(k,F),near:p(k,F),view:Ue()})}return addEventListener("keydown",U=>{if(L()){if(!f)return;U.code==="Escape"&&(U.preventDefault(),le()),U.code==="Enter"&&(U.metaKey||U.ctrlKey)&&me(".pri").click();return}f&&(/^(INPUT|TEXTAREA|SELECT)$/.test(U.target.tagName)||(U.code==="Escape"&&d&&(d=null,ne(),D("Area cancelled")),U.code==="KeyC"&&Xe(),U.code==="KeyX"&&Ie(),U.code==="KeyL"&&Le()))}),g(),{isOpen:()=>L()||!ue.classList.contains("sg-hidden"),setEnabled(U){f=U,A.visible=U,U||(L()&&le(),Le(!1),d=null,ne())},onResumeFailed(U){T=U}}}const hd=1.8,ud=2.2;function fd(i,e,t,n=2.4){const s=new tt;i.add(s);const r=new be(new an(.012,n-.04,e-.02),w.glass);r.position.set(0,n/2,t*e/2),r.renderOrder=2,s.add(r),E(s,w.chrome,.02,.1,e-.04,0,.05,t*e/2),E(s,w.chrome,.02,.06,.12,0,n-.06,t*.08),E(s,w.chrome,.02,.06,.12,0,.12,t*.08);const o=t*(e-.12);for(const a of[-1,1]){E(s,w.chrome,.028,1,.028,a*.07,1.05,o);for(const c of[.62,1.48])E(s,w.chrome,.12,.02,.02,a*.035,c,o)}return t>0&&E(s,w.blackMatte,.03,.14,.2,0,1.05,t*(e-.02)),s}let Qc=null;function U2(){if(Qc)return Qc;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d");return e.fillStyle="rgba(15,18,24,.8)",e.strokeStyle="#fff",e.lineWidth=8,e.beginPath(),e.arc(64,64,56,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.font="bold 72px system-ui, sans-serif",e.fillText("F",64,68),Qc=new Un(i)}function dd(i,e,t,n){const s=new Rr(new ks({map:U2(),depthTest:!1,transparent:!0}));return s.scale.set(.11,.11,1),s.position.set(e,t,n),s.renderOrder=20,s.visible=!1,i.add(s),s}function O2({scene:i,player:e,camera:t}){const n=[],s=(p,v,y)=>{const x=(v-p)/2,A=new tt;i.add(A);const S=new tt;S.position.set(0,0,p),A.add(S);const R=new tt;R.position.set(0,0,v),A.add(R);const C=dd(S,.1,1.25,x-.12);fd(S,x,1),fd(R,x,-1);const b={minX:-.08,maxX:.08,minZ:p,maxZ:v};os.push(b),n.push({name:y,x:0,z:(p+v)/2,t:0,target:0,block:b,marker:C,apply(M){const I=M*Math.PI/2*.95;S.rotation.y=I,R.rotation.y=-I}})};s(4.9,6.5,"balcony door"),s(ah[0],ah[1],"meeting room door");for(const p of Za){i.add(p.leaf),os.push(p.block);const v=dd(p.leaf,p.handle[0],p.handle[1],p.handle[2]);n.push({name:p.name,x:p.x,z:p.z,t:0,target:0,block:p.block,marker:v,apply(y){p.leaf.rotation.y=p.closed+(p.open-p.closed)*y}})}const r={visible:!1,material:{opacity:1}},o=Oa.map(p=>(i.add(p.leaf),{name:"locker door",x:p.center.x,z:p.center.z,center:p.center,t:0,target:0,block:null,marker:r,apply(v){p.leaf.rotation.y=p.closed+(p.open-p.closed)*v}}));n.push(...o);const a=new N,c=new N,l=()=>{t.getWorldDirection(c);let p=null,v=.96;for(const y of o){if(a.copy(y.center).sub(t.position),a.length()>1.8)continue;const A=a.normalize().dot(c);A>v&&(v=A,p=y)}return p},h=()=>{var x;const p=l();if(p)return p;let v=null,y=hd;for(const A of n){if(A.center||(x=A.locked)!=null&&x.call(A))continue;const S=Math.hypot(e.pos.x-A.x,e.pos.z-A.z);S<y&&(y=S,v=A)}return v},u=p=>{if(p.target=p.target?0:1,p.target&&p.block){const v=os.indexOf(p.block);v>=0&&os.splice(v,1)}};addEventListener("keydown",p=>{if(p.code!=="KeyF"||e.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(p.target.tagName))return;const v=h();v&&u(v)});let f=0,d=0;addEventListener("mousedown",p=>{f=p.clientX,d=p.clientY}),addEventListener("click",p=>{if(p.button!==0||e.state.paused||!e.controls.isLocked&&!e.state.dragMode||Math.hypot(p.clientX-f,p.clientY-d)>5&&!e.controls.isLocked)return;const v=l();v&&u(v)});function g(p){var y,x;const v=h();for(const A of n){const S=Math.hypot(e.pos.x-A.x,e.pos.z-A.z);A.marker.visible=S<4.5&&(!((y=A.locked)!=null&&y.call(A))||A.askToOpen),A.marker.material.opacity=A===v||A.askToOpen&&((x=A.locked)!=null&&x.call(A))&&S<hd?1:.55}for(const A of n)A.t!==A.target&&(A.t=A.target>A.t?Math.min(1,A.t+p*ud):Math.max(0,A.t-p*ud),A.apply(A.t*A.t*(3-2*A.t)),A.block&&A.t===0&&!os.includes(A.block)&&os.push(A.block))}function _(){const p=h();return p?`${p.center?"F / click":"F"} ${p.target?"close":"open"} ${p.name.toLowerCase()}`:""}return{update:g,prompt:_,byName:p=>n.find(v=>v.name===p),toggle:u}}const k2=1,el=8,tl=(7.6+8.65)/2;function pd(i){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=i?"#3ddc84":"#ff5a4f";t.fillStyle="rgba(12,14,18,.85)",t.strokeStyle=n,t.lineWidth=7,t.beginPath(),t.arc(64,64,58,0,Math.PI*2),t.fill(),t.stroke(),t.lineWidth=9,t.lineCap="round",t.beginPath(),i?(t.arc(78,50,17,Math.PI,0),t.lineTo(95,58)):(t.moveTo(47,62),t.lineTo(47,50),t.arc(64,50,17,Math.PI,0),t.lineTo(81,62)),t.stroke(),t.fillStyle=n,t.beginPath(),t.roundRect(36,60,56,40,7),t.fill(),t.fillStyle="rgba(12,14,18,.9)",t.beginPath(),t.arc(64,76,6,0,Math.PI*2),t.fill(),t.fillRect(61,78,6,12);const s=new Un(e);return s.colorSpace=yt,s}const F2=`
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
`;function B2({scene:i,player:e,camera:t,doors:n}){const s=n.byName("entrance door"),r=()=>e.pos.x>Ct,o=pd(!1),a=pd(!0),c=new Rr(new ks({map:o,transparent:!0}));c.scale.set(.13,.13,1),c.position.set(_n.x+.06,_n.y+.24,_n.z),c.renderOrder=20,i.add(c);const l=new kt({color:"#ff3b30",emissive:"#ff3b30",emissiveIntensity:1.6}),h=new be(new an(.006,.012,.03),l);h.position.set(_n.x+.018,_n.y+.055,_n.z),i.add(h);const u=document.createElement("canvas");u.width=512,u.height=150;const f=u.getContext("2d"),d=new Un(u);d.colorSpace=yt;const g=new Rr(new ks({map:d,transparent:!0}));g.scale.set(.4,.4*150/512,1),g.center.set(0,.5),g.position.set(_n.x+.06,_n.y+.24,_n.z-.09),g.renderOrder=20,i.add(g);let _="";const m=(he,_e,ve,Ne)=>{const Fe=`${he}|${_e}|${Math.round(ve*40)}|${Ne}`;Fe!==_&&(_=Fe,f.clearRect(0,0,512,150),f.fillStyle="rgba(0,0,0,.86)",f.beginPath(),f.roundRect(4,4,504,142,16),f.fill(),f.fillStyle="#fff",f.font="600 46px system-ui, sans-serif",f.textBaseline="alphabetic",f.fillText(he,30,66),f.fillStyle="rgba(255,255,255,.65)",f.font="400 30px system-ui, sans-serif",f.fillText(_e,30,108),f.fillStyle="rgba(255,255,255,.18)",f.fillRect(30,124,452,8),f.fillStyle=Ne,f.fillRect(30,124,452*Math.max(0,Math.min(1,ve)),8),d.needsUpdate=!0)},p=new N(_n.x+.004,_n.y+.02,_n.z),v=new N,y=new N;let x=0;const A=document.createElement("style");A.textContent=F2,document.head.appendChild(A);const S=document.createElement("div");S.id="unlockbox";const R=2*Math.PI*18;S.innerHTML=`<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="4"/>
    <circle class="ring" cx="22" cy="22" r="18" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-dasharray="${R}" stroke-dashoffset="${R}"/>
    <text x="22" y="27.5" text-anchor="middle" fill="#fff" font-family="system-ui, sans-serif" font-weight="700" font-size="15">F</text></svg>
    <div class="txt"></div>`,document.body.appendChild(S);const C=S.querySelector(".ring"),b=S.querySelector("text"),M=S.querySelector(".txt");let I="";const V=(he,_e,ve,Ne,Fe)=>{S.classList.toggle("show",he),he&&(_e!==I&&(M.innerHTML=_e,I=_e),C.setAttribute("stroke-dashoffset",String(R*(1-ve))),C.setAttribute("stroke",Ne),b.textContent=Fe)};let B="locked",$=0,Z=!1,Y=0;const ne=()=>r()&&Math.hypot(e.pos.x-_n.x,e.pos.z-_n.z)<.9,z=()=>r()&&Math.hypot(e.pos.x-Ct,e.pos.z-tl)<1.4,pe=()=>e.pos.x>Ct-.6&&e.pos.x<Ct+.6&&Math.abs(e.pos.z-tl)<.75;s.locked=()=>B!=="open"&&r();const me=()=>{B="open",Y=el,Z=!1,$=0,s.target||n.toggle(s),c.material.map=a,c.material.needsUpdate=!0},we=he=>{var _e;return/^(INPUT|TEXTAREA|SELECT)$/.test((_e=he.target)==null?void 0:_e.tagName)};addEventListener("keydown",he=>{he.code!=="KeyF"||he.repeat||e.state.paused||we(he)||B==="locked"&&ne()&&(Z=!0)}),addEventListener("keyup",he=>{he.code==="KeyF"&&(Z=!1)}),addEventListener("blur",()=>{Z=!1});function Be(he){const _e=ne();if((!_e||B!=="locked")&&(Z=!1),Z?($+=he/k2,$>=1&&me()):$=Math.max(0,$-he*2.5),B==="open"&&(Y-=he,Y<=0&&!pe()&&(B="closing")),B==="closing"&&(s.target&&n.toggle(s),s.t===0&&(B="locked",c.material.map=o,c.material.needsUpdate=!0)),x=(Z?1:0)?Math.min(1,x+he/.3):Math.max(0,x-he/.35),x>0){t.position.distanceTo(p)<2.4&&r()?v.copy(p):(t.getWorldDirection(y),v.copy(t.position).addScaledVector(y,.6).y-=.15);const de=Z&&x===1?.012*(.5+.5*Math.sin(performance.now()/120)):0;de&&(t.getWorldDirection(y),v.addScaledVector(y,de))}const Fe=B==="open"?"#34d058":Z&&x===1?Math.floor(performance.now()/150)%2?"#3aa0ff":"#0b2a55":"#ff3b30";l.color.set(Fe),l.emissive.set(Fe);const ue=Math.hypot(e.pos.x-_n.x,e.pos.z-_n.z),Ce=r()&&(ue<1.8||z());if(c.visible=g.visible=Ce,Ce)if(B==="open"){const de=Math.max(0,Math.ceil(Y));m("Door unlocked",Y>0?`Locks again in ${de}s`:"Clear the doorway to lock",Math.max(0,Y)/el,"#34d058")}else B==="closing"?m("Locking…","Door closing",0,"#ff5a4f"):_e?m($>0?"Unlocking…":"Hold F to unlock",$>0?"Keep holding F":"Place your finger",$,"#fff"):m("Locked","Use fingerprint to unlock",1,"#ff5a4f");const j=_e||B!=="locked"&&Math.hypot(e.pos.x-Ct,e.pos.z-tl)<5;if(B==="locked")!_e&&z()?V(!0,"Use fingerprint to unlock<small>Reader on the wall beside the door</small>",1,"#ff5a4f","🔒"):V(_e,$>0?"Unlocking…<small>Keep holding <kbd>F</kbd></small>":"Press and hold <kbd>F</kbd> to unlock<small>Pixbit entrance</small>",$,"#fff","F");else if(B==="open"){const de=Math.max(0,Math.ceil(Y));V(j,Y>0?`Door unlocked<small>Locks again in ${de}s</small>`:"Door unlocked<small>Clear the doorway to lock</small>",Math.max(0,Y)/el,"#34d058",String(de))}else V(j,"Locking…<small>Door closing</small>",0,"#ff5a4f","🔒")}function Ve(){return B==="locked"&&ne()?"F hold to unlock door":""}function Q(){return{k:x*x*(3-2*x),aim:v}}return{update:Be,prompt:Ve,reach:Q}}const z2=`
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
`;let io=null;function H2(i){try{io||(io=new(window.AudioContext||window.webkitAudioContext));const e=io.currentTime,t=i?[[392,0],[523,.12],[659,.24],[784,.36],[1047,.5]]:[[160,0],[120,.22]];for(const[n,s]of t){const r=io.createOscillator(),o=io.createGain();r.type=i?"triangle":"sawtooth",r.frequency.value=n;const a=i?s===.5?.7:.16:.3;o.gain.setValueAtTime(1e-4,e+s),o.gain.exponentialRampToValueAtTime(i?.18:.12,e+s+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+s+a),r.connect(o).connect(io.destination),r.start(e+s),r.stop(e+s+a+.05)}}catch{}}function V2({scene:i,player:e,doors:t}){const n=t.byName("ladies toilet");if(!n)return{update(){},prompt:()=>""};const s=new $a("#fff4ea",6,4.5,1.6);s.position.set(n.x+1.2,2.7,n.z+.5),i.add(s);const r=document.createElement("style");r.textContent=z2,document.head.appendChild(r);const o=document.createElement("div");o.id="ladiesq",o.innerHTML='<div class="band"></div><div class="big"></div><div class="sub"></div>',document.body.appendChild(o);const a=o.querySelector(".big"),c=o.querySelector(".sub");let l=!1,h=!1,u=0,f=!1;n.locked=()=>!l,n.askToOpen=!0;const d=()=>Math.hypot(e.pos.x-n.x,e.pos.z-n.z)<1.8&&e.pos.x<n.x,g=(A,S,R,C)=>{a.textContent=A,a.classList.toggle("red",S),c.innerHTML=R,o.classList.remove("show"),o.offsetWidth,o.classList.add("show"),u=C?performance.now()+C:0},_=()=>{o.classList.remove("show"),h=!1,u=0},m=()=>{h=!0,g("Are u gay?",!1,'<button data-a="y"><kbd>Y</kbd> Yes</button><button data-a="n"><kbd>N</kbd> No</button>',0)},p=A=>{h&&(h=!1,A?(l=!0,n.target||t.toggle(n),g("Respect +",!1,"<span>Welcome in</span>",2200)):g("Access denied",!0,"<span>Ladies only</span>",2e3),H2(A))};c.addEventListener("click",A=>{const S=A.target.closest("button");S&&p(S.dataset.a==="y")});const v=A=>{var S;return/^(INPUT|TEXTAREA|SELECT)$/.test((S=A.target)==null?void 0:S.tagName)};addEventListener("keydown",A=>{if(!(A.repeat||e.state.paused||v(A))){if(h){A.code==="KeyY"?p(!0):(A.code==="KeyN"||A.code==="Escape")&&p(!1);return}A.code==="KeyF"&&!l&&d()&&m()}});function y(){h&&!d()&&_(),u&&performance.now()>u&&_(),n.t>0&&(f=!0),l&&f&&n.t===0&&!n.target&&(l=!1,f=!1)}function x(){return!l&&!h&&d()?"F open ladies toilet":""}return{update:y,prompt:x}}const G2=3.4,Wn=640,Bi=360,Rn=20,nl=Wn/Rn,il=(Bi-40)/Rn,so=[{name:"Snake",ready:!0},{name:"Pong",ready:!1},{name:"Tetris",ready:!1},{name:"Car Race",ready:!1}];function W2({scene:i,player:e}){const t=document.createElement("canvas");t.width=Wn,t.height=Bi;const n=t.getContext("2d"),s=new Un(t);s.colorSpace=yt;const r=new be(new ut(rs.w,rs.h),new Ln({map:s,toneMapped:!1}));r.position.set(rs.x+.003,rs.y,rs.z),r.rotation.y=Math.PI/2,r.visible=!1,i.add(r);const o=document.createElement("div");Object.assign(o.style,{position:"fixed",inset:"0",background:"#000",display:"none",zIndex:"20",alignItems:"center",justifyContent:"center"}),document.body.appendChild(o);let a="off",c=0,l=!1,h,u,f,d,g,_=0,m,p=0,v=.11;const y=()=>Math.hypot(e.pos.x-rs.x,e.pos.z-rs.z)<G2&&e.pos.x>0&&e.pos.z>22.8;function x(z){l=z,z?(o.appendChild(t),Object.assign(t.style,{width:"min(100vw, 177.78vh)",height:"auto",imageRendering:"pixelated"}),o.style.display="flex"):(o.style.display="none",t.parentNode&&t.parentNode.removeChild(t))}function A(){a="menu",c=0,r.visible=!0,e.state.paused=!0,$()}function S(){a="off",r.visible=!1,e.state.paused=!1,x(!1)}function R(){h=[{x:8,y:8},{x:7,y:8},{x:6,y:8}],u={x:1,y:0},f=u,g=0,m=!1,p=0,v=.11,C(),a="snake"}function C(){do d={x:Math.floor(Math.random()*nl),y:Math.floor(Math.random()*il)};while(h.some(z=>z.x===d.x&&z.y===d.y))}function b(){u=f;const z={x:h[0].x+u.x,y:h[0].y+u.y};if(z.x<0||z.y<0||z.x>=nl||z.y>=il||h.some(pe=>pe.x===z.x&&pe.y===z.y)){m=!0,_=Math.max(_,g);return}h.unshift(z),z.x===d.x&&z.y===d.y?(g++,v=Math.max(.06,v-.003),C()):h.pop()}const M=(z,pe=600)=>`${pe} ${z}px "Avenir Next", "Helvetica Neue", Arial, sans-serif`;function I(z){n.fillStyle="rgba(255,255,255,.55)",n.font=M(14,500),n.textAlign="center",n.fillText(z,Wn/2,Bi-14)}function V(){const z=n.createLinearGradient(0,0,Wn,Bi);z.addColorStop(0,"#1a1f3a"),z.addColorStop(1,"#3a1d4f"),n.fillStyle=z,n.fillRect(0,0,Wn,Bi),n.fillStyle="#fff",n.font=M(30,700),n.textAlign="left",n.fillText("Pixbit Arcade",40,56),n.fillStyle="#b46cff",n.fillRect(40,68,120,3),so.forEach((pe,me)=>{const we=104+me*50,Be=me===c;n.fillStyle=Be?"rgba(255,255,255,.14)":"rgba(255,255,255,.04)",n.fillRect(40,we,Wn-80,40),Be&&(n.fillStyle="#5fe3ff",n.fillRect(40,we,5,40)),n.fillStyle=pe.ready?"#fff":"rgba(255,255,255,.35)",n.font=M(20,Be?700:500),n.textAlign="left",n.fillText(pe.name,62,we+27),n.font=M(14,500),n.textAlign="right",n.fillStyle=pe.ready?"#7dff9a":"rgba(255,255,255,.35)",n.fillText(pe.ready?"PLAY":"coming soon",Wn-58,we+26)}),I("↑ ↓ choose · Enter play · F full screen · E turn TV off")}function B(){n.fillStyle="#0d1410",n.fillRect(0,0,Wn,Bi),n.fillStyle="#15241a",n.fillRect(0,0,Wn,40),n.fillStyle="#7dff9a",n.font=M(18,700),n.textAlign="left",n.fillText(`SNAKE   score ${g}`,16,27),n.textAlign="right",n.fillStyle="rgba(255,255,255,.5)",n.font=M(13,500),n.fillText(`best ${_} · arrows/WASD · F full screen · Backspace menu`,Wn-14,26);const z=40;n.fillStyle="rgba(255,255,255,.03)";for(let pe=0;pe<nl;pe++)for(let me=0;me<il;me++)(pe+me)%2&&n.fillRect(pe*Rn,z+me*Rn,Rn,Rn);n.fillStyle="#ff4f6d",n.beginPath(),n.arc(d.x*Rn+Rn/2,z+d.y*Rn+Rn/2,Rn/2-3,0,Math.PI*2),n.fill(),h.forEach((pe,me)=>{n.fillStyle=me===0?"#c8ffd4":`hsl(${135-Math.min(me,30)}, 80%, ${55-Math.min(me,20)}%)`,n.fillRect(pe.x*Rn+1,z+pe.y*Rn+1,Rn-2,Rn-2)}),m&&(n.fillStyle="rgba(0,0,0,.6)",n.fillRect(0,0,Wn,Bi),n.fillStyle="#fff",n.textAlign="center",n.font=M(40,800),n.fillText("GAME OVER",Wn/2,Bi/2-14),n.font=M(18,500),n.fillText(`score ${g} · best ${_}`,Wn/2,Bi/2+20),I("Enter play again · Backspace menu"))}function $(){a==="menu"?V():a==="snake"&&B(),s.needsUpdate=!0}const Z={ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1],ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0]};addEventListener("keydown",z=>{if(!/^(INPUT|TEXTAREA|SELECT)$/.test(z.target.tagName)){if(a==="off"){z.code==="KeyE"&&y()&&!e.state.paused&&(A(),z.stopImmediatePropagation());return}if(z.stopImmediatePropagation(),z.code!=="Escape"&&z.preventDefault(),z.code==="KeyF"){x(!l);return}if(a==="menu"){if((z.code==="ArrowUp"||z.code==="KeyW")&&(c=(c+so.length-1)%so.length),(z.code==="ArrowDown"||z.code==="KeyS")&&(c=(c+1)%so.length),(z.code==="Enter"||z.code==="Space")&&so[c].ready&&R(),z.code==="KeyE"||z.code==="Backspace"){S();return}}else if(a==="snake"){const pe=Z[z.code];pe&&!m&&!(pe[0]===-u.x&&pe[1]===-u.y)&&(f={x:pe[0],y:pe[1]}),m&&(z.code==="Enter"||z.code==="Space")&&R(),z.code==="Backspace"&&(a="menu")}$()}},!0);function Y(z){a!=="snake"||m||(p+=Math.min(z,v),p>=v&&(p-=v,b(),$()))}function ne(){return a!=="off"?a==="menu"?"TV on":"playing snake":y()?"E play TV games":""}return{update:Y,prompt:ne,isOn:()=>a!=="off"}}const X2=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0,ro=i=>`<svg viewBox="0 0 24 24">${i}</svg>`,sl={jump:ro('<path d="M12 19V6"/><path d="M6 11l6-6 6 6"/><path d="M5 21h14"/>'),doorOpen:ro('<path d="M4 21h16"/><path d="M6 21V3h9v2"/><path d="M15 21V5l-5 1.5V21"/><path d="M11.8 13h.01"/><path d="M18 9l2 2-2 2"/>'),doorClose:ro('<path d="M4 21h16"/><path d="M6 21V3h12v18"/><path d="M15 12h.01"/>'),rotate:ro('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),tv:ro('<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/><path d="M10 9l4 2-4 2z"/>')};async function q2(){var i,e,t,n;try{const s=document.documentElement;document.fullscreenElement||await(((i=s.requestFullscreen)==null?void 0:i.call(s,{navigationUI:"hide"}))??((e=s.webkitRequestFullscreen)==null?void 0:e.call(s)))}catch{}try{await((n=(t=screen.orientation)==null?void 0:t.lock)==null?void 0:n.call(t,"landscape"))}catch{}}function Y2({player:i,camera:e}){const{touch:t}=i,n=document.createElement("div");n.id="touch",n.innerHTML=`
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
  `,document.head.appendChild(s),document.body.appendChild(n);const r=n.querySelector(".tj-base"),o=n.querySelector(".tj-knob"),a=55;let c=null,l=0,h=0,u=null,f=0,d=0;const g=new En(0,0,0,"YXZ");r.style.display="none";const _=S=>!!(S.closest&&S.closest(".tb"));n.addEventListener("touchstart",S=>{for(const R of S.changedTouches)_(R.target)||(R.clientX<innerWidth/2&&c===null?(c=R.identifier,l=R.clientX,h=R.clientY,r.style.left=l+"px",r.style.top=h+"px",r.style.display="block",o.style.transform="translate(0,0)"):R.clientX>=innerWidth/2&&u===null&&(u=R.identifier,f=R.clientX,d=R.clientY));_(S.target)||S.preventDefault()},{passive:!1}),n.addEventListener("touchmove",S=>{for(const R of S.changedTouches)if(R.identifier===c){let C=R.clientX-l,b=R.clientY-h;const M=Math.hypot(C,b);M>a&&(C*=a/M,b*=a/M),o.style.transform=`translate(${C}px, ${b}px)`,t.x=C/a,t.y=-b/a,t.run=M>a*1.15}else R.identifier===u&&!i.state.paused&&(g.setFromQuaternion(e.quaternion),g.y-=(R.clientX-f)*.006,g.x=Math.max(-1.45,Math.min(1.45,g.x-(R.clientY-d)*.006)),e.quaternion.setFromEuler(g),f=R.clientX,d=R.clientY);S.preventDefault()},{passive:!1});const m=S=>{for(const R of S.changedTouches)R.identifier===c&&(c=null,t.x=t.y=0,t.run=!1,r.style.display="none"),R.identifier===u&&(u=null)};n.addEventListener("touchend",m),n.addEventListener("touchcancel",m);const p=(S,R)=>{const C=n.querySelector(S);C.addEventListener("touchstart",b=>{b.preventDefault(),b.stopPropagation(),R()},{passive:!1}),C.addEventListener("click",b=>b.preventDefault())};p(".tb-jump",()=>i.jump());const v=n.querySelector(".tb-act");let y=null,x="",A=null;p(".tb-act",()=>{y&&(A=y,dispatchEvent(new KeyboardEvent("keydown",{code:y,bubbles:!0})))});for(const S of["touchend","touchcancel"])v.addEventListener(S,()=>{A&&(dispatchEvent(new KeyboardEvent("keyup",{code:A,bubbles:!0})),A=null)});return{show(S){n.classList.toggle("off",!S),S&&q2()},setAction(S){let R="",C=null;/^F (open|close|collect|hold)/.test(S)?(C="KeyF",R=S.startsWith("F close")?"doorClose":"doorOpen"):S&&(C="KeyE",R="tv"),y=C,v.classList.toggle("off",!C),R!==x&&(v.innerHTML=R?sl[R]:"",v.setAttribute("aria-label",S),x=R)}}}const md="pixbit-gamemode",rl={free:'<path d="M8 21l3-6 3 3v3"/><path d="M11 15l1-5-3 2-1 3"/><path d="M12 10l3 2h3"/><circle cx="13.5" cy="5" r="2"/>',hunt:'<circle cx="6.5" cy="15.5" r="3.5"/><circle cx="17.5" cy="15.5" r="3.5"/><path d="M10 15h4M5 12l2-7h3v10M19 12l-2-7h-3v10"/>',online:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',play:'<path d="M7 4l13 8-13 8z"/>'};function $2({list:i}){const e=[{id:"free",name:"Free Walk",desc:"Just explore the office",start(){},stop(){},update(){}}];let t=e[0];function n(){i.innerHTML="";for(const o of e){const a=o===t,c=document.createElement("button");c.type="button",c.className="mode-btn"+(a?" on":""),c.innerHTML=`<svg viewBox="0 0 24 24">${a?rl.play:rl[o.id]||rl.play}</svg>
        <span class="name">${a?"Play · ":""}${o.name}<span class="desc">${o.desc||""}</span></span><span class="arrow">&rsaquo;</span>`,c.addEventListener("click",()=>s(o.id)),i.appendChild(c)}}function s(o){const a=e.find(c=>c.id===o)||e[0];a!==t&&(t.stop(),t=a,a.start());try{localStorage.setItem(md,a.id)}catch{}n()}function r(o){e.push(o);let a=null;try{a=localStorage.getItem(md)}catch{}n(),a===o.id&&s(o.id)}return n(),{register:r,select:s,update:(o,a)=>t.update(o,a),get current(){return t}}}const gd="pixbit-hunt-best",K2=2.5,j2=[{name:"Keycard",kind:"card",locker:!0},{name:"Golden mug",kind:"mug",spots:[[-1.6,1.15,12.5],[-1.2,1.15,17]]},{name:"Stapler",kind:"stapler",spots:[[7.5,1.1,4.4],[8.3,1.1,3.6]]},{name:"Game controller",kind:"pad",spots:[[4.6,.9,24.3],[5.4,1.1,26.4]]},{name:"Sticky note",kind:"note",spots:[[4.5,1.25,12],[2.2,1.25,13.6]]},{name:"Trophy star",kind:"star",spots:[[9.85,1.5,6.1],[9.4,1.3,7.2]]},{name:"Marker pen",kind:"pen",spots:[[2,1.1,20.4],[1.4,1.1,21.6]]},{name:"Plant badge",kind:"badge",spots:[[1.2,1.2,7],[2.4,1.2,4.2]]}],Z2=new kt({color:"#ffcf3a",emissive:"#c88a00",emissiveIntensity:.9,roughness:.35,metalness:.6}),xd=new ks({map:null,color:"#ffe27a",transparent:!0,opacity:.55,depthWrite:!1,blending:ul});function J2(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Un(i)}function Q2(i){const e=new tt,t=(n,s=0,r=0,o=0)=>{const a=new be(n,Z2);return a.position.set(s,r,o),e.add(a),a};switch(i){case"card":t(new an(.085,.054,.004));break;case"mug":t(new Yn(.04,.035,.09,16)),t(new Ur(.028,.008,8,14),.05,0,0);break;case"stapler":t(new an(.15,.03,.04)),t(new an(.12,.02,.035),-.01,.02,0);break;case"pad":t(new an(.13,.035,.07)),t(new Gt(.03,10,8),-.05,-.01,.04),t(new Gt(.03,10,8),.05,-.01,.04);break;case"note":t(new an(.1,.1,.004));break;case"star":{const n=new Co;for(let s=0;s<10;s++){const r=s%2?.025:.06,o=Math.PI/5*s+Math.PI/2;s?n.lineTo(Math.cos(o)*r,Math.sin(o)*r):n.moveTo(Math.cos(o)*r,Math.sin(o)*r)}n.closePath(),t(new Wa(n,{depth:.015,bevelEnabled:!1}));break}case"pen":{const n=t(new Yn(.01,.01,.14,10));n.rotation.z=Math.PI/2;break}default:t(new Yn(.045,.045,.01,20)).rotation.x=Math.PI/2}return e}function eb({scene:i,camera:e,player:t}){const n=new tt;n.visible=!1,i.add(n),xd.map=J2();const s=Oa.find(b=>b.center.y>.9&&b.center.y<1.4)||Oa[0];let r=[],o=!1,a=0,c=0,l=!1,h=!1,u=null;try{u=parseFloat(localStorage.getItem(gd))||null}catch{}const f=document.createElement("div");Object.assign(f.style,{position:"fixed",top:"14px",right:"14px",zIndex:"5",color:"#fff",font:"600 14px system-ui, sans-serif",background:"rgba(0,0,0,.5)",borderLeft:"4px solid #ecc828",borderRadius:"6px",padding:"8px 12px",display:"none",pointerEvents:"none",minWidth:"170px"}),document.body.appendChild(f);const d=document.createElement("div");Object.assign(d.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:"8",color:"#fff",textAlign:"center",font:"600 15px system-ui, sans-serif",background:"rgba(20,20,20,.92)",border:"1px solid #ecc828",borderRadius:"14px",padding:"24px 32px",display:"none"}),document.body.appendChild(d);let g="",_=0;const m=b=>`${Math.floor(b/60)}:${String(Math.floor(b%60)).padStart(2,"0")}`;function p(){const b=r.filter(M=>!M.got);f.innerHTML=`<div style="color:#ecc828;letter-spacing:.5px">SCAVENGER HUNT</div>
      <div>Found ${a} / ${r.length} &nbsp;·&nbsp; ${m(c)}</div>
      ${u?`<div style="font-weight:400;color:#bbb">Best ${m(u)}</div>`:""}
      <div style="font-weight:400;color:#ddd;margin-top:4px">${g||(b.length?"H = hint":"")}</div>`}function v(b){if(b.locker){const I=s.closed;return new N(s.center.x-.12*Math.cos(I),s.center.y-.04,s.center.z+.12*Math.sin(I))}const M=b.spots[Math.floor(Math.random()*b.spots.length)];return new N(M[0],M[1],M[2])}function y(){n.clear(),r=j2.map(b=>{const M=Q2(b.kind),I=v(b);if(M.position.copy(I),b.locker)M.scale.setScalar(.9);else{const V=new Rr(xd);V.scale.setScalar(.5),M.add(V)}return n.add(M),{...b,mesh:M,base:I,got:!1,zone:Vh(I.x,I.z)}}),a=0,c=0,h=!1,l=!0,g="",d.style.display="none",p()}const x=new N,A=new N;function S(){e.getWorldDirection(A);let b=null,M=.93;for(const I of r){if(I.got||I.locker&&Math.abs(s.leaf.rotation.y-s.closed)<.5||(x.copy(I.mesh.position).sub(e.position),x.length()>K2))continue;const B=x.normalize().dot(A);B>M&&(M=B,b=I)}return b}function R(b){b.got=!0,a++,n.remove(b.mesh),g=`Got the ${b.name.toLowerCase()}!`,_=2.5,a===r.length?C():p()}function C(){l=!1,h=!0;const b=!u||c<u;if(b){u=c;try{localStorage.setItem(gd,String(c))}catch{}}p(),d.innerHTML=`<div style="font-size:24px;color:#ecc828;margin-bottom:6px">All 8 found!</div>
      <div>Time ${m(c)}${b?" &nbsp;🏆 new best":` &nbsp;·&nbsp; best ${m(u)}`}</div>
      <div style="font-weight:400;color:#bbb;margin-top:10px">Press Enter to play again, or Esc to change the game mode</div>`,d.style.display="block"}return addEventListener("keydown",b=>{if(!(!o||t.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(b.target.tagName)))if(b.code==="KeyF"){const M=S();M&&R(M)}else if(b.code==="KeyH"&&l){const M=r.find(I=>!I.got);M&&(g=`Hint: ${M.name} – ${M.locker?"inside a locker in the ":"in the "}${M.zone}`,_=6,p())}else b.code==="Enter"&&h&&y()}),{id:"hunt",name:"Scavenger Hunt",desc:"Find 8 hidden gold items. F to collect, H for a hint. One is in a locker.",start(){o=!0,n.visible=!0,f.style.display="block",y()},stop(){o=!1,l=!1,n.visible=!1,f.style.display="none",d.style.display="none"},update(b,M){if(!o)return;const I=performance.now()/1e3;for(const V of r)V.got||V.locker||(V.mesh.rotation.y=I*1.6,V.mesh.position.y=V.base.y+Math.sin(I*2+V.base.x)*.03);l&&M&&(c+=b,_>0&&(_-=b)<=0&&(g=""),p())},prompt(){if(!o||!l)return"";const b=S();return b?`F collect ${b.name.toLowerCase()}`:""}}}const Hp={apiKey:"AIzaSyD_KZcTz53Bfh12ZB7Gwed8f1WCKrsGIX4",authDomain:"office-world-60ed1.firebaseapp.com",databaseURL:"https://office-world-60ed1-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"office-world-60ed1",storageBucket:"office-world-60ed1.firebasestorage.app",messagingSenderId:"607388062460",appId:"1:607388062460:web:4b68c0880c4d8822607d79"},tb="office",nb=()=>!Hp.apiKey.startsWith("PASTE"),ol="https://www.gstatic.com/firebasejs/11.0.2/",ib=[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]}],sb=15,fr=["#e8505b","#f9a73e","#ecc828","#4fbf6f","#2fa4d9","#7b68ee","#e26fc4","#3fc1b0"],_d="pixbit-online-name",vd="pixbit-online-color",yd="pixbit-online-mic",Md=1.65,rb=`
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
  #ow-hud { position: fixed; left: 50%; bottom: 14px; transform: translateX(-50%); z-index: 8; display: none; align-items: center; gap: 10px;
    padding: 6px 14px; border-radius: 20px; background: rgba(0,0,0,.5); color: #fff; font: 600 13px system-ui, sans-serif; pointer-events: none; }
  #ow-hud.show { display: flex; }
  #ow-hud .mic { width: 10px; height: 10px; border-radius: 50%; background: #777; }
  #ow-hud.live .mic { background: #7ee08f; }
  #ow-hud.talk .mic { background: #ff4d4d; box-shadow: 0 0 10px #ff4d4d; }
  #ow-hud .ow-mode { pointer-events: auto; cursor: pointer; padding: 3px 9px; border-radius: 12px; border: 1px solid rgba(236,200,40,.7);
    background: rgba(236,200,40,.15); color: #ecc828; font: 700 12px system-ui, sans-serif; white-space: nowrap; }
  #ow-hud .ow-mode:hover { background: rgba(236,200,40,.3); }
  #ow-hud kbd { background: #333; border: 1px solid #666; border-radius: 4px; padding: 0 5px; font: 700 11px system-ui; }
  #ow-ptt { position: fixed; z-index: 7; right: max(84px, calc(env(safe-area-inset-right) + 66px)); bottom: max(26px, env(safe-area-inset-bottom));
    width: 54px; height: 54px; border-radius: 50%; border: 2px solid rgba(255,255,255,.55); background: rgba(20,20,20,.5); color: #fff;
    display: none; align-items: center; justify-content: center; touch-action: none; user-select: none; -webkit-user-select: none; }
  #ow-ptt.show { display: flex; }
  #ow-ptt.on { background: rgba(255,77,77,.8); }
  #ow-ptt.muted::after { content: ''; position: absolute; width: 34px; height: 2.5px; background: #fff; transform: rotate(-45deg); border-radius: 2px; }
  #ow-ptt svg { width: 26px; height: 26px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; pointer-events: none; }
`;function ob({scene:i,camera:e,player:t,panel:n,touch:s=!1}){const r=document.createElement("style");r.textContent=rb,document.head.appendChild(r);let o="",a="";try{o=localStorage.getItem(_d)||"",a=localStorage.getItem(vd)||""}catch{}fr.includes(a)||(a=fr[Math.floor(Math.random()*fr.length)]);const c=document.createElement("div");c.className="ow",c.innerHTML=`
    <div class="ow-row"><label for="ow-name">Name</label><input id="ow-name" maxlength="18" autocomplete="off" spellcheck="false" placeholder="Type your name to join">
      <span class="ow-dot" title="Change colour"></span></div>
    <div class="ow-row"><label>Mic</label><div class="ow-seg"><button type="button" data-m="ptt">Push to talk</button><button type="button" data-m="open">Always on</button></div></div>
    <div class="ow-row"><label>Online</label><span class="ow-status"></span></div>`,n.insertBefore(c,n.querySelector(".m-hint"));const l=c.querySelector("input"),h=c.querySelector(".ow-dot"),u=c.querySelector(".ow-status");l.value=o,h.style.background=a,c.addEventListener("click",k=>k.stopPropagation()),l.addEventListener("keydown",k=>{var F;k.code!=="Escape"&&k.stopPropagation(),(k.code==="Enter"||k.code==="NumpadEnter")&&(k.preventDefault(),f()?(l.blur(),(F=n.closest("#overlay"))==null||F.click()):d())}),l.addEventListener("keyup",k=>k.stopPropagation()),l.addEventListener("input",()=>l.classList.remove("need")),l.addEventListener("change",f);function f(){const k=l.value.trim().replace(/\s+/g," ").slice(0,18);if(l.value=k,!k)return!1;const F=!o||!C;o=k;try{localStorage.setItem(_d,o)}catch{}return A&&F&&!C&&!M?z():me(),!0}function d(){l.classList.remove("need"),l.offsetWidth,l.classList.add("need"),g("<b>Enter your name</b> to join the world",!0),setTimeout(()=>l.focus(),0)}h.addEventListener("click",()=>{a=fr[(fr.indexOf(a)+1)%fr.length],h.style.background=a,v.setLook(null,a);try{localStorage.setItem(vd,a)}catch{}me()});function g(k,F=!1){u.innerHTML=k,u.classList.toggle("err",F)}const _=document.createElement("div");_.id="ow-hud",_.innerHTML='<span class="mic"></span><span class="txt"></span><button type="button" class="ow-mode"></button>';const m=_.querySelector(".ow-mode");document.body.appendChild(_);const p=document.createElement("button");p.id="ow-ptt",p.type="button",p.setAttribute("aria-label","Hold to talk"),p.innerHTML='<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',document.body.appendChild(p),p.addEventListener("pointerdown",k=>{k.preventDefault(),D==="ptt"?Le(!0):Te(!K)});for(const k of["pointerup","pointercancel","pointerleave"])p.addEventListener(k,()=>Le(!1));const v=wd("",a,{self:!0});i.add(v.group);const y=new N;function x(k,F=null){e.getWorldDirection(y),v.target(t.pos.x,Math.max(0,e.position.y-Md),t.pos.z,Math.atan2(-y.x,-y.z),!1),v.setReach(F==null?void 0:F.aim,(F==null?void 0:F.k)||0),v.update(k)}let A=!1,S=null,R=null,C=null,b=[],M=!1;const I=new Map;let V=null,B=null,$=!1,Z=!1;async function Y(){if(S)return S;if(window.__owFake)return S=window.__owFake;const[k,F,H]=await Promise.all([import(ol+"firebase-app.js"),import(ol+"firebase-auth.js"),import(ol+"firebase-database.js")]),ae=k.initializeApp(Hp,"pixbit-online");return S={auth:F.initializeAuth(ae,{persistence:F.inMemoryPersistence}),signIn:F.signInAnonymously,...H},S}const ne=k=>S.ref(R,`rooms/${tb}/${k}`);async function z(){if(!o){d();return}M=!0;try{await pe()}finally{M=!1}}async function pe(){if(!nb()&&!window.__owFake){g("<b>Not set up yet</b> · add your Firebase config (see MULTIPLAYER.md)",!0);return}g("Connecting…");try{await Y(),R=S.getDatabase(S.auth.app);const k=await S.signIn(S.auth);if(!A)return;C=k.user.uid,D==="open"&&j().then(()=>oe()),await S.remove(ne(`signal/${C}`)),S.onDisconnect(ne(`players/${C}`)).remove(),S.onDisconnect(ne(`signal/${C}`)).remove(),await me();const F=ne("players");b.push(S.onChildAdded(F,H=>{H.key!==C&&Ve(H.key,H.val()),Me()})),b.push(S.onChildChanged(F,H=>{const ae=I.get(H.key);ae&&(ae.name=H.val().name,ae.color=H.val().color,ae.avatar.setLook(ae.name,ae.color))})),b.push(S.onChildRemoved(F,H=>{Fe(H.key),Me()})),b.push(S.onChildAdded(ne(`signal/${C}`),H=>{const ae=H.val();S.remove(H.ref),_e(ae).catch(ge=>console.warn("[online] signal",ge))})),Me()}catch(k){console.warn("[online]",k),g(`<b>Couldn't connect</b> · ${String(k.code||k.message||k).replace(/</g,"&lt;")}`,!0)}}function me(){return!A||!C?Promise.resolve():S.set(ne(`players/${C}`),{name:o,color:a,t:S.serverTimestamp()})}function we(k,F){C&&S.push(ne(`signal/${k}`),{...F,from:C})}function Be(){for(const k of b)k();b=[];for(const k of[...I.keys()])Fe(k);S&&C&&(S.remove(ne(`players/${C}`)),S.remove(ne(`signal/${C}`))),C=null}function Ve(k,F){if(I.has(k))return I.get(k);const H=Q(k,F||{});return H.initiator&&he(H),H}function Q(k,F){const H=new RTCPeerConnection({iceServers:ib}),ae={id:k,pc:H,dc:null,name:F.name||"Guest",color:F.color||"#999",initiator:C<k,pendingIce:[],audioEl:null,last:null};return ae.avatar=wd(ae.name,ae.color),ae.avatar.group.visible=!1,i.add(ae.avatar.group),I.set(k,ae),H.onicecandidate=ge=>{ge.candidate&&we(k,{type:"ice",c:JSON.stringify(ge.candidate.toJSON())})},H.ontrack=ge=>Ce(ae,ge.streams[0]||new MediaStream([ge.track])),H.onconnectionstatechange=()=>{Me(),H.connectionState==="failed"&&A&&I.get(k)===ae&&(Fe(k),setTimeout(()=>{A&&C&&S.get(ne(`players/${k}`)).then(ge=>{ge.exists()&&Ve(k,ge.val())})},3e3))},ae.initiator?(H.addTransceiver("audio",{direction:"sendrecv"}),Ne(ae,H.createDataChannel("pos",{ordered:!1,maxRetransmits:0}))):H.ondatachannel=ge=>Ne(ae,ge.channel),ae}async function he(k){const F=await k.pc.createOffer();await k.pc.setLocalDescription(F),we(k.id,{type:"offer",sdp:F.sdp})}async function _e(k){if(!k||!k.from)return;let F=I.get(k.from);if(k.type==="offer"){(!F||F.initiator)&&(F&&Fe(k.from),F=Q(k.from,{}),F.initiator=!1);const H=await S.get(ne(`players/${k.from}`));H.exists()&&(F.name=H.val().name,F.color=H.val().color,F.avatar.setLook(F.name,F.color)),await F.pc.setRemoteDescription({type:"offer",sdp:k.sdp});for(const ge of F.pc.getTransceivers())ge.receiver.track.kind==="audio"&&(ge.direction="sendrecv",B&&ge.sender.replaceTrack(B));await ve(F);const ae=await F.pc.createAnswer();await F.pc.setLocalDescription(ae),we(k.from,{type:"answer",sdp:ae.sdp})}else if(k.type==="answer"&&F){if(await F.pc.setRemoteDescription({type:"answer",sdp:k.sdp}),B)for(const H of F.pc.getSenders())H.track||H.replaceTrack(B);await ve(F)}else if(k.type==="ice"&&F){const H=JSON.parse(k.c);F.pc.remoteDescription?await F.pc.addIceCandidate(H).catch(()=>{}):F.pendingIce.push(H)}}async function ve(k){for(const F of k.pendingIce.splice(0))await k.pc.addIceCandidate(F).catch(()=>{})}function Ne(k,F){k.dc=F,F.onopen=()=>{Me(),U(!0)},F.onclose=()=>Me(),F.onmessage=H=>{try{const[ae,ge,je,Dt,Kt]=JSON.parse(H.data);k.avatar.target(ae,ge,je,Dt,!!Kt)}catch{}}}function Fe(k){var H;const F=I.get(k);if(F){I.delete(k);try{(H=F.dc)==null||H.close()}catch{}try{F.pc.close()}catch{}F.audioEl&&(F.audioEl.srcObject=null,F.audioEl.remove()),F.avatar.dispose()}}function ue(){return V||(V=new gy,e.add(V)),V.context.state==="suspended"&&V.context.resume(),V}function Ce(k,F){k.audioEl||(k.audioEl=document.createElement("audio"),k.audioEl.muted=!0,k.audioEl.autoplay=!0,document.body.appendChild(k.audioEl)),k.audioEl.srcObject=F;const H=new vy(ue());H.setMediaStreamSource(F),H.setRefDistance(2.5),H.setRolloffFactor(1.4),H.setDistanceModel("inverse"),H.setMaxDistance(40),k.avatar.setVoice(H)}async function j(){if(B||$)return B;$=!0;try{B=(await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})).getAudioTracks()[0],B.enabled=!1;for(const H of I.values())for(const ae of H.pc.getTransceivers())ae.receiver.track.kind==="audio"&&ae.currentDirection!=="stopped"&&ae.sender.replaceTrack(B);const F=ue().context;Se=F.createMediaStreamSource(new MediaStream([B])),L=F.createAnalyser(),L.fftSize=512,Se.connect(L)}catch(k){console.warn("[online] mic",k),de="Microphone blocked: allow it in the browser to talk"}return B}let de="",D="open",ce=!1,K=!1,fe=!1,re=!1,Ae=0,Se=null,L=null;try{localStorage.getItem(yd)==="ptt"&&(D="ptt")}catch{}const T=c.querySelectorAll(".ow-seg button");function W(){for(const k of T)k.classList.toggle("on",k.dataset.m===D)}function le(k){if(k!==D){D=k,K=!1,ce=!1;try{localStorage.setItem(yd,D)}catch{}D==="open"&&A&&j().then(oe),W(),oe(),Me()}}for(const k of T)k.addEventListener("click",()=>le(k.dataset.m));W(),m.addEventListener("pointerdown",k=>{k.preventDefault(),k.stopPropagation(),le(D==="ptt"?"open":"ptt")}),addEventListener("keydown",k=>{k.code==="KeyT"&&!k.repeat&&A&&!Pe(k)&&le(D==="ptt"?"open":"ptt")});const xe=()=>A&&(D==="ptt"?ce:fe&&!K);function oe(){const k=xe();ue(),k&&!B&&j().then(()=>{B&&oe()}),B&&(B.enabled=k);const F=D==="ptt"?k:k&&re;p.classList.toggle("on",D==="ptt"?ce:k),p.classList.toggle("muted",D==="open"&&K),p.setAttribute("aria-label",D==="ptt"?"Hold to talk":K?"Unmute":"Mute"),F!==Z&&(Z=F,U(!0)),O()}function Le(k){D==="ptt"&&k!==ce&&(ce=k,oe())}function Te(k){D==="open"&&k!==K&&(K=k,oe())}const Pe=k=>/^(INPUT|TEXTAREA|SELECT)$/.test(k.target.tagName)||t.state.paused;addEventListener("keydown",k=>{k.code!=="KeyV"||k.repeat||Pe(k)||!A||(D==="ptt"?Le(!0):Te(!K))}),addEventListener("keyup",k=>{k.code==="KeyV"&&Le(!1)}),addEventListener("blur",()=>Le(!1));const it=new Float32Array(512);function G(k){if(D!=="open"||!L||!xe()){re&&(re=!1,oe());return}L.getFloatTimeDomainData(it);let F=0;for(let ge=0;ge<it.length;ge++)F+=it[ge]*it[ge];const H=Math.sqrt(F/it.length)>.02;H?Ae=0:Ae+=k;const ae=H||Ae<.4;ae!==re&&(re=ae,oe())}addEventListener("pointerdown",()=>{A&&V&&ue()});const Ee=new N;let Ue=0,Xe="",Ie=0;function U(k=!1){e.getWorldDirection(Ee);const F=Math.atan2(-Ee.x,-Ee.z),H=JSON.stringify([+t.pos.x.toFixed(2),+Math.max(0,e.position.y-Md).toFixed(2),+t.pos.z.toFixed(2),+F.toFixed(2),Z?1:0]);if(!(!k&&H===Xe&&Ie<1)){Xe=H,Ie=0;for(const ae of I.values())if(ae.dc&&ae.dc.readyState==="open")try{ae.dc.send(H)}catch{}}}function ee(){let k=0;for(const F of I.values())F.dc&&F.dc.readyState==="open"&&k++;return k}function Me(){if(!A||!C)return;const k=ee(),H=I.size-k;g(`<b>Connected</b> · ${k+1} in the world${H?` · ${H} joining…`:""} · ${D==="ptt"?"hold <b>V</b> to talk":"mic on in game, <b>V</b> mutes"}`),O()}function O(){m.innerHTML=`${D==="ptt"?"Push to talk":"Always on"}${s?"":" <kbd>T</kbd>"}`,m.title="Switch between push to talk and always-on mic",_.classList.toggle("talk",Z),_.classList.toggle("live",!Z&&D==="open"&&xe()&&!!B);const k=ee()+1,F=D==="ptt"?`${k} online · hold <kbd>V</kbd> to talk`:K?`${k} online · mic muted · <kbd>V</kbd> to unmute`:`${k} online · mic on · <kbd>V</kbd> to mute`,H=$&&!B;_.querySelector(".txt").innerHTML=de||(H?`${k} online · microphone blocked: allow it in the browser to talk`:Z?"Talking…":F)}return{id:"online",name:"Open World",desc:"Explore with other people online and talk: push to talk or always-on mic.",start(){A=!0,c.classList.add("show"),_.classList.add("show"),s&&p.classList.add("show"),O(),o?z():d()},canStart(){return o?!0:(d(),!1)},stop(){A=!1,ce=!1,oe(),c.classList.remove("show"),_.classList.remove("show"),p.classList.remove("show"),Be()},update(k,F){if(A){!!F!==fe&&(fe=!!F,fe||(ce=!1),oe()),G(k);for(const H of I.values())H.avatar.update(k);Ue+=k,Ie+=k,Ue>=1/sb&&(Ue=0,U()),de&&(bd+=k)>5&&(de="",bd=0,O())}},prompt(){return""},updateSelf:x}}let bd=0;const ab="#f1d3b8",cb="#2b3550",lb="#1c1c20";function wd(i,e,{self:t=!1}={}){const n=new tt,s=(ue,Ce=.65,j=0)=>new kt({color:ue,roughness:Ce,metalness:j}),r=s(e,.6),o=s(ab,.7),a=s(cb,.8),c=s(lb,.5),l=(ue,Ce,j,de,D,ce)=>{const K=new be(Ce,j);return K.position.set(de,D,ce),K.castShadow=!0,ue.add(K),K},h=(ue,Ce)=>new Lh(ue,Ce,6,14),u=(ue,Ce)=>{const j=new tt;return j.position.set(ue,Ce,0),n.add(j),j},f=.8,d=1.47,g=u(-.1,f),_=u(.1,f);for(const ue of[g,_])l(ue,h(.085,.6),a,0,-.385,0),l(ue,new Gt(.1,16,10),c,0,-.77,-.04).scale.set(1,.55,1.45);const m=l(n,h(.22,.4),r,0,1.17,0),p=u(-.29,d),v=u(.29,d);for(const ue of[p,v])l(ue,h(.065,.48),r,0,-.27,0),l(ue,new Gt(.07,16,12),o,0,-.6,0);const y=new tt;if(y.position.y=1.62,n.add(y),l(y,new Gt(.17,24,16),o,0,.13,0),l(y,new an(.22,.07,.08),s("#15171c",.2,.4),0,.16,-.14),t){y.visible=!1,m.visible=!1,l(n,new Gt(.2,18,12),a,0,f+.02,0).scale.set(1.05,.55,.75);for(const ue of n.children)ue.position.z-=.08,ue.position.y-=.08}const x=.6,A=document.createElement("canvas");A.width=512,A.height=128;const S=new Un(A);S.colorSpace=yt;const R=new Rr(new ks({map:S,depthTest:!1,transparent:!0}));R.scale.set(1.1,.275,1),R.position.y=2.2,R.renderOrder=10,R.visible=!t,n.add(R);let C=i,b=e,M=!1;function I(){const ue=A.getContext("2d");ue.clearRect(0,0,512,128),ue.font="700 54px system-ui, sans-serif";const Ce=Math.min(500,ue.measureText(C).width+(M?110:60)),j=(512-Ce)/2;ue.fillStyle="rgba(0,0,0,.55)",ue.beginPath(),ue.roundRect(j,20,Ce,88,44),ue.fill(),ue.fillStyle=b,ue.beginPath(),ue.arc(j+36,64,12,0,Math.PI*2),ue.fill(),M&&(ue.fillStyle="#ff4d4d",ue.beginPath(),ue.arc(j+Ce-36,64,14,0,Math.PI*2),ue.fill()),ue.fillStyle="#fff",ue.textBaseline="middle",ue.textAlign="left",ue.fillText(C,j+58,66,Ce-(M?120:70)),S.needsUpdate=!0}I();const V=new N,B=new N,$=new N;let Z=0,Y=0,ne=!1,z=null,pe=0,me=0,we=0,Be=0,Ve=0;const Q=new N,he=new N,_e=new N,ve=new N(0,-1,0),Ne=new $n,Fe=new $n;return{group:n,setLook(ue,Ce){C=ue||C,b=Ce||b,r.color.set(b),I()},setReach(ue,Ce){Ve=Ce,ue&&Q.copy(ue)},setVoice(ue){var Ce;z&&((Ce=z.disconnect)==null||Ce.call(z),y.remove(z)),z=ue,y.add(ue)},target(ue,Ce,j,de,D){V.set(ue,Ce,j),Z=de,ne||(B.copy(V),$.copy(V),Y=de,ne=!0,n.visible=!0),D!==M&&(M=D,I())},update(ue){if(!ne||ue<=0)return;const Ce=t?1:1-Math.exp(-12*ue);$.copy(B),B.lerp(V,Ce);let j=Z-Y;j=Math.atan2(Math.sin(j),Math.cos(j)),Y+=j*Ce;const de=Math.hypot(B.x-$.x,B.z-$.z)/ue;me+=(de-me)*(1-Math.exp(-8*ue));const D=B.y>.05;pe+=ue*(3+me*2.2);const ce=D?0:Math.min(1,me/3)*.75;we+=(Math.sin(pe)*ce-we)*(1-Math.exp(-14*ue)),g.rotation.x=we,_.rotation.x=-we,p.rotation.x=-we*.9,v.rotation.x=we*.9;const K=D?-.5:0;if(p.rotation.z=D?-.35:0,v.rotation.z=D?.35:0,p.rotation.x+=K,v.rotation.x+=K,Be+=ue,y.rotation.z=M?Math.sin(Be*7)*.03:0,v.scale.y=1,Ve>0){n.position.set(B.x,B.y,B.z),n.rotation.y=Y,n.updateMatrixWorld(!0),v.getWorldPosition(he),_e.subVectors(Q,he);const re=_e.length();_e.applyQuaternion(Fe.copy(n.quaternion).invert()).normalize(),Ne.setFromUnitVectors(ve,_e),v.quaternion.slerp(Ne,Ve),v.scale.y=1+(Math.min(1.9,Math.max(1,re/x))-1)*Ve}const fe=D?0:Math.abs(Math.sin(pe))*Math.min(1,me/3)*.05;n.position.set(B.x,B.y+fe,B.z),n.rotation.y=Y},dispose(){if(z)try{z.disconnect()}catch{}n.removeFromParent(),n.traverse(ue=>{var Ce,j;(Ce=ue.geometry)==null||Ce.dispose(),ue.material&&((j=ue.material.map)==null||j.dispose(),ue.material.dispose())})}}}const pn=new h1({antialias:!0,powerPreference:"high-performance"});pn.setPixelRatio(Math.min(devicePixelRatio,2));pn.setSize(innerWidth,innerHeight);pn.outputColorSpace=yt;pn.toneMapping=Pd;pn.toneMappingExposure=.9;pn.shadowMap.enabled=!0;pn.shadowMap.type=Rd;document.body.appendChild(pn.domElement);const mn=new op,Vp=new rt("#a8aaa4");mn.background=Vp;mn.fog=new Sh(Vp,40,1100);const hb=new Zl(pn);mn.environment=hb.fromScene(new Ly,.04).texture;mn.environmentIntensity=.45;const gi=new Cn(78,innerWidth/innerHeight,.05,1500);mn.add(new cy("#f6f7ff","#7a7066",.8));const bi=new Sp("#fff3e2",1.5);bi.position.set(-22,20,4);bi.target.position.set(5,0,10);bi.castShadow=!0;bi.shadow.mapSize.set(2048,2048);Object.assign(bi.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:80});bi.shadow.bias=-4e-4;bi.shadow.normalBias=.03;mn.add(bi,bi.target);const Gp=new $a("#ffe8c8",6,12,1.5);Gp.position.set(8.7,2.6,7.8);mn.add(Gp);const Ja=new tt;g2(Ja);C2(Ja);mn.add(Ja);const rn=R2(gi,pn.domElement,{spawn:rd,yaw:rd.yaw}),$i=document.getElementById("overlay"),Bs=X2()?Y2({player:rn,camera:gi}):null;Bs&&Bs.show(!1);$i.addEventListener("click",()=>{if(!(Ir.current.canStart&&!Ir.current.canStart())){if(Bs){Ca(),Bs.show(!0);return}try{const i=rn.controls.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>Ca())}catch{Ca()}}});function Ca(){rn.state.dragMode=!0,$i.classList.add("hidden"),hh.dataset.mode="drag"}document.addEventListener("pointerlockerror",Ca);addEventListener("keydown",i=>{i.code==="Escape"&&rn.state.dragMode&&!Lo.isOpen()&&(rn.state.dragMode=!1,$i.classList.remove("hidden"))});rn.controls.addEventListener("lock",()=>$i.classList.add("hidden"));rn.controls.addEventListener("unlock",()=>{Lo.isOpen()||$i.classList.remove("hidden")});const Fa=O2({scene:mn,player:rn,camera:gi}),al=B2({scene:mn,player:rn,camera:gi,doors:Fa}),Sd=V2({scene:mn,player:rn,doors:Fa}),Ed=W2({scene:mn,player:rn}),Lo=N2({scene:mn,camera:gi,player:rn,world:Ja,zoneAt:Vh,renderer:pn});Lo.onResumeFailed(()=>$i.classList.remove("hidden"));const Ir=$2({list:$i.querySelector(".modes")}),lh=eb({scene:mn,camera:gi,player:rn});Ir.register(lh);const Wp=ob({scene:mn,camera:gi,player:rn,panel:$i.querySelector(".m-main"),touch:!!Bs});Ir.register(Wp);let Io=!1;try{Io=localStorage.getItem("pixbit-devmode")==="1"}catch{}const Ba=document.getElementById("devbox");function Gh(i){Io=i,document.body.classList.toggle("dev",i),Ba.checked=i,Lo.setEnabled(i),Bp(i);try{localStorage.setItem("pixbit-devmode",i?"1":"0")}catch{}}Ba.addEventListener("click",i=>i.stopPropagation());document.getElementById("devsw").addEventListener("click",i=>i.stopPropagation());Ba.addEventListener("change",()=>Gh(Ba.checked));addEventListener("keydown",i=>{i.code==="KeyP"&&!/^(INPUT|TEXTAREA|SELECT)$/.test(i.target.tagName)&&!Lo.isOpen()&&Gh(!Io)});Gh(Io);let ho=!0;addEventListener("keydown",i=>{i.code==="KeyQ"&&(ho=!ho,bi.castShadow=ho,pn.setPixelRatio(ho?Math.min(devicePixelRatio,2):1),pn.setSize(innerWidth,innerHeight))});const cl=document.getElementById("zone"),hh=document.getElementById("hud");let Td="",ll=0,Ma=0,hl=0;function ub(i){const e=Vh(rn.pos.x,rn.pos.z);e!==Td&&(Td=e,cl.textContent=e,cl.classList.add("show"),ll=2.2),ll>0&&(ll-=i)<=0&&cl.classList.remove("show")}addEventListener("resize",()=>{gi.aspect=innerWidth/innerHeight,gi.updateProjectionMatrix(),pn.setSize(innerWidth,innerHeight)});const fb=new Ep;pn.setAnimationLoop(()=>{const i=fb.getDelta();if(rn.update(i),Fa.update(i),al.update(i),Sd.update(i),Ed.update(i),Ir.update(i,$i.classList.contains("hidden")),Wp.updateSelf(i,al.reach()),ub(i),hl++,Ma+=i,Ma>.5){const e=Ed.prompt()||Ir.current===lh&&lh.prompt()||Fa.prompt()||al.prompt()||Sd.prompt();Bs?(Bs.setAction(e),hh.textContent=""):hh.textContent=`${e?e.toUpperCase()+" · ":""}${Math.round(hl/Ma)} fps · ${ho?"high":"low"} quality (Q) · ${Io?"DEV · C suggest · X area · L list":"dev mode off (P)"}${rn.state.dragMode?" · drag mouse to look":""}`,hl=0,Ma=0}pn.render(mn,gi)});Object.assign(window,{__office:{scene:mn,camera:gi,player:rn,renderer:pn}});
