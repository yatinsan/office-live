(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Su="170",t0=0,rh=1,n0=2,Nd=1,Ud=2,Yi=3,ns=0,Tn=1,Bt=2,Ms=0,Pr=1,Sl=2,oh=3,ah=4,i0=5,Vs=100,s0=101,r0=102,o0=103,a0=104,c0=200,l0=201,u0=202,h0=203,El=204,Tl=205,f0=206,d0=207,p0=208,m0=209,g0=210,x0=211,_0=212,v0=213,y0=214,Al=0,Rl=1,Cl=2,Ur=3,Pl=4,Ll=5,Il=6,Dl=7,kd=0,M0=1,b0=2,bs=0,w0=1,S0=2,E0=3,Od=4,T0=5,A0=6,R0=7,ch="attached",C0="detached",Fd=300,kr=301,Or=302,Nl=303,Ul=304,Qa=306,wi=1e3,vs=1001,Wa=1002,On=1003,Bd=1004,wo=1005,Zn=1006,ka=1007,Ji=1008,is=1009,zd=1010,Hd=1011,No=1012,Eu=1013,Ys=1014,Mi=1015,Go=1016,Tu=1017,Au=1018,Fr=1020,Vd=35902,Gd=1021,Wd=1022,hi=1023,Xd=1024,qd=1025,Lr=1026,Br=1027,Ru=1028,Cu=1029,Yd=1030,Pu=1031,Lu=1033,Oa=33776,Fa=33777,Ba=33778,za=33779,kl=35840,Ol=35841,Fl=35842,Bl=35843,zl=36196,Hl=37492,Vl=37496,Gl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,$l=37813,Kl=37814,jl=37815,Zl=37816,Jl=37817,Ql=37818,eu=37819,tu=37820,nu=37821,Ha=36492,iu=36494,su=36495,$d=36283,ru=36284,ou=36285,au=36286,Uo=2300,ko=2301,fc=2302,lh=2400,uh=2401,hh=2402,P0=2500,L0=0,Kd=1,cu=2,I0=3200,D0=3201,jd=0,N0=1,xs="",Et="srgb",Fn="srgb-linear",ec="linear",Dt="srgb",ir=7680,fh=519,U0=512,k0=513,O0=514,Zd=515,F0=516,B0=517,z0=518,H0=519,lu=35044,dh="300 es",Qi=2e3,Xa=2001;class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ph=1234567;const Ro=Math.PI/180,zr=180/Math.PI;function fi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vn[i&255]+vn[i>>8&255]+vn[i>>16&255]+vn[i>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[n&255]+vn[n>>8&255]+vn[n>>16&255]+vn[n>>24&255]).toLowerCase()}function rn(i,e,t){return Math.max(e,Math.min(t,i))}function Iu(i,e){return(i%e+e)%e}function V0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function G0(i,e,t){return i!==e?(t-i)/(e-i):0}function Co(i,e,t){return(1-t)*i+t*e}function W0(i,e,t,n){return Co(i,e,1-Math.exp(-t*n))}function X0(i,e=1){return e-Math.abs(Iu(i,e*2)-e)}function q0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Y0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function K0(i,e){return i+Math.random()*(e-i)}function j0(i){return i*(.5-Math.random())}function Z0(i){i!==void 0&&(ph=i);let e=ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J0(i){return i*Ro}function Q0(i){return i*zr}function em(i){return(i&i-1)===0&&i!==0}function tm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function nm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function im(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const sm={DEG2RAD:Ro,RAD2DEG:zr,generateUUID:fi,clamp:rn,euclideanModulo:Iu,mapLinear:V0,inverseLerp:G0,lerp:Co,damp:W0,pingpong:X0,smoothstep:q0,smootherstep:Y0,randInt:$0,randFloat:K0,randFloatSpread:j0,seededRandom:Z0,degToRad:J0,radToDeg:Q0,isPowerOfTwo:em,ceilPowerOfTwo:tm,floorPowerOfTwo:nm,setQuaternionFromProperEuler:im,normalize:Lt,denormalize:yi};class we{constructor(e=0,t=0){we.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,n,s,r,o,a,c,l){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],y=s[4],_=s[7],A=s[2],E=s[5],R=s[8];return r[0]=o*x+a*v+c*A,r[3]=o*m+a*y+c*E,r[6]=o*p+a*_+c*R,r[1]=l*x+u*v+h*A,r[4]=l*m+u*y+h*E,r[7]=l*p+u*_+h*R,r[2]=f*x+d*v+g*A,r[5]=f*m+d*y+g*E,r[8]=f*p+d*_+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(dc.makeScale(e,t)),this}rotate(e){return this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dc=new ft;function Jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Oo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rm(){const i=Oo("canvas");return i.style.display="block",i}const mh={};function So(i){i in mh||(mh[i]=!0,console.warn(i))}function om(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function am(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bt={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Dt&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Dt&&(i.r=Ir(i.r),i.g=Ir(i.g),i.b=Ir(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===xs?ec:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ir(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gh=[.64,.33,.3,.6,.15,.06],xh=[.2126,.7152,.0722],_h=[.3127,.329],vh=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yh=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);bt.define({[Fn]:{primaries:gh,whitePoint:_h,transfer:ec,toXYZ:vh,fromXYZ:yh,luminanceCoefficients:xh,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:gh,whitePoint:_h,transfer:Dt,toXYZ:vh,fromXYZ:yh,luminanceCoefficients:xh,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}});let sr;class lm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sr===void 0&&(sr=Oo("canvas")),sr.width=e.width,sr.height=e.height;const n=sr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=sr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ts(t[n]/255)*255):t[n]=ts(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let um=0;class Qd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pc(s[o].image)):r.push(pc(s[o]))}else r=pc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hm=0;class on extends Qs{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=vs,s=vs,r=Zn,o=Ji,a=hi,c=is,l=on.DEFAULT_ANISOTROPY,u=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=fi(),this.name="",this.source=new Qd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wi:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case Wa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wi:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case Wa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Fd;on.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(d+1)/2,A=(p+1)/2,E=(u+f)/4,R=(h+x)/4,P=(g+m)/4;return y>_&&y>A?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=R/n):_>A?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=P/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=R/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fm extends Qs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $s extends fm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ep extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dm extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),E=Math.atan2(A,p*v);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const _=a*v;if(c=c*m+f*_,l=l*m+d*_,u=u*m+g*_,h=h*m+x*_,m===1-a){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-a*d,e[t+2]=l*g+u*d+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mc.copy(this).projectOnVector(e),this.sub(mc)}reflect(e){return this.sub(mc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const mc=new I,Mh=new Wn;class Di{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),jo.subVectors(this.max,io),rr.subVectors(e.a,io),or.subVectors(e.b,io),ar.subVectors(e.c,io),os.subVectors(or,rr),as.subVectors(ar,or),Rs.subVectors(rr,ar);let t=[0,-os.z,os.y,0,-as.z,as.y,0,-Rs.z,Rs.y,os.z,0,-os.x,as.z,0,-as.x,Rs.z,0,-Rs.x,-os.y,os.x,0,-as.y,as.x,0,-Rs.y,Rs.x,0];return!gc(t,rr,or,ar,jo)||(t=[1,0,0,0,1,0,0,0,1],!gc(t,rr,or,ar,jo))?!1:(Zo.crossVectors(os,as),t=[Zo.x,Zo.y,Zo.z],gc(t,rr,or,ar,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new I,new I,new I,new I,new I,new I,new I,new I],pi=new I,Ko=new Di,rr=new I,or=new I,ar=new I,os=new I,as=new I,Rs=new I,io=new I,jo=new I,Zo=new I,Cs=new I;function gc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Cs.fromArray(i,r);const a=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),c=e.dot(Cs),l=t.dot(Cs),u=n.dot(Cs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const pm=new Di,so=new I,xc=new I;class Ni{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):pm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;so.subVectors(e,this.center);const t=so.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(so,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(so.copy(e.center).add(xc)),this.expandByPoint(so.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new I,_c=new I,Jo=new I,cs=new I,vc=new I,Qo=new I,yc=new I;class Wo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_c.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(_c);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Jo),a=cs.dot(this.direction),c=-cs.dot(Jo),l=cs.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(_c).addScaledVector(Jo,f),d}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){vc.subVectors(t,e),Qo.subVectors(n,e),yc.crossVectors(vc,Qo);let o=this.direction.dot(yc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;cs.subVectors(this.origin,e);const c=a*this.direction.dot(Qo.crossVectors(cs,Qo));if(c<0)return null;const l=a*this.direction.dot(vc.cross(cs));if(l<0||c+l>o)return null;const u=-a*cs.dot(yc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,o,a,c,l,u,h,f,d,g,x,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,f,d,g,x,m)}set(e,t,n,s,r,o,a,c,l,u,h,f,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/cr.setFromMatrixColumn(e,0).length(),r=1/cr.setFromMatrixColumn(e,1).length(),o=1/cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,x=l*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mm,e,gm)}lookAt(e,t,n){const s=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),ls.crossVectors(n,qn),ls.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),ls.crossVectors(n,qn)),ls.normalize(),ea.crossVectors(qn,ls),s[0]=ls.x,s[4]=ea.x,s[8]=qn.x,s[1]=ls.y,s[5]=ea.y,s[9]=qn.y,s[2]=ls.z,s[6]=ea.z,s[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],A=n[15],E=s[0],R=s[4],P=s[8],b=s[12],M=s[1],D=s[5],G=s[9],V=s[13],q=s[2],ee=s[6],$=s[10],le=s[14],z=s[3],de=s[7],ue=s[11],Te=s[15];return r[0]=o*E+a*M+c*q+l*z,r[4]=o*R+a*D+c*ee+l*de,r[8]=o*P+a*G+c*$+l*ue,r[12]=o*b+a*V+c*le+l*Te,r[1]=u*E+h*M+f*q+d*z,r[5]=u*R+h*D+f*ee+d*de,r[9]=u*P+h*G+f*$+d*ue,r[13]=u*b+h*V+f*le+d*Te,r[2]=g*E+x*M+m*q+p*z,r[6]=g*R+x*D+m*ee+p*de,r[10]=g*P+x*G+m*$+p*ue,r[14]=g*b+x*V+m*le+p*Te,r[3]=v*E+y*M+_*q+A*z,r[7]=v*R+y*D+_*ee+A*de,r[11]=v*P+y*G+_*$+A*ue,r[15]=v*b+y*V+_*le+A*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+x*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+t*l*h-t*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*f+s*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=h*m*l-x*f*l+x*c*d-a*m*d-h*c*p+a*f*p,y=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,_=u*x*l-g*h*l+g*a*d-o*x*d-u*a*p+o*h*p,A=g*h*c-u*x*c-g*a*f+o*x*f+u*a*m-o*h*m,E=t*v+n*y+s*_+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=v*R,e[1]=(x*f*r-h*m*r-x*s*d+n*m*d+h*s*p-n*f*p)*R,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*R,e[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*R,e[4]=y*R,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*R,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*R,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*d+t*c*d)*R,e[8]=_*R,e[9]=(g*h*r-u*x*r-g*n*d+t*x*d+u*n*p-t*h*p)*R,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*R,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*d-t*a*d)*R,e[12]=A*R,e[13]=(u*x*s-g*h*s+g*n*f-t*x*f-u*n*m+t*h*m)*R,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*R,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*f+t*a*f)*R,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,v=c*l,y=c*u,_=c*h,A=n.x,E=n.y,R=n.z;return s[0]=(1-(x+p))*A,s[1]=(d+_)*A,s[2]=(g-y)*A,s[3]=0,s[4]=(d-_)*E,s[5]=(1-(f+p))*E,s[6]=(m+v)*E,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(f+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=cr.set(s[0],s[1],s[2]).length();const o=cr.set(s[4],s[5],s[6]).length(),a=cr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);const l=1/r,u=1/o,h=1/a;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Qi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let d,g;if(a===Qi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Xa)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Qi){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*l,d=(n+s)*u;let g,x;if(a===Qi)g=(o+r)*h,x=-2*h;else if(a===Xa)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const cr=new I,mi=new ht,mm=new I(0,0,0),gm=new I(1,1,1),ls=new I,ea=new I,qn=new I,bh=new ht,wh=new Wn;class Rn{constructor(e=0,t=0,n=0,s=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wh.setFromEuler(this),this.setFromQuaternion(wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Du{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xm=0;const Sh=new I,lr=new Wn,Vi=new ht,ta=new I,ro=new I,_m=new I,vm=new Wn,Eh=new I(1,0,0),Th=new I(0,1,0),Ah=new I(0,0,1),Rh={type:"added"},ym={type:"removed"},ur={type:"childadded",child:null},Mc={type:"childremoved",child:null};class Ot extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new I,t=new Rn,n=new Wn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new ft}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.multiply(lr),this}rotateOnWorldAxis(e,t){return lr.setFromAxisAngle(e,t),this.quaternion.premultiply(lr),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(Th,e)}rotateZ(e){return this.rotateOnAxis(Ah,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(Th,e)}translateZ(e){return this.translateOnAxis(Ah,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ta.copy(e):ta.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(ro,ta,this.up):Vi.lookAt(ta,ro,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),lr.setFromRotationMatrix(Vi),this.quaternion.premultiply(lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rh),ur.child=e,this.dispatchEvent(ur),ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ym),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rh),ur.child=e,this.dispatchEvent(ur),ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,_m),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,vm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new I(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new I,Gi=new I,bc=new I,Wi=new I,hr=new I,fr=new I,Ch=new I,wc=new I,Sc=new I,Ec=new I,Tc=new At,Ac=new At,Rc=new At;class ui{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gi.subVectors(e,t),s.cross(gi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gi.subVectors(s,t),Gi.subVectors(n,t),bc.subVectors(e,t);const o=gi.dot(gi),a=gi.dot(Gi),c=gi.dot(bc),l=Gi.dot(Gi),u=Gi.dot(bc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wi.x),c.addScaledVector(o,Wi.y),c.addScaledVector(a,Wi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Tc.setScalar(0),Ac.setScalar(0),Rc.setScalar(0),Tc.fromBufferAttribute(e,t),Ac.fromBufferAttribute(e,n),Rc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Tc,r.x),o.addScaledVector(Ac,r.y),o.addScaledVector(Rc,r.z),o}static isFrontFacing(e,t,n,s){return gi.subVectors(n,t),Gi.subVectors(e,t),gi.cross(Gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),gi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ui.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;hr.subVectors(s,n),fr.subVectors(r,n),wc.subVectors(e,n);const c=hr.dot(wc),l=fr.dot(wc);if(c<=0&&l<=0)return t.copy(n);Sc.subVectors(e,s);const u=hr.dot(Sc),h=fr.dot(Sc);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(hr,o);Ec.subVectors(e,r);const d=hr.dot(Ec),g=fr.dot(Ec);if(g>=0&&d<=g)return t.copy(r);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(fr,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ch.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Ch,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(hr,o).addScaledVector(fr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},us={h:0,s:0,l:0},na={h:0,s:0,l:0};function Cc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=Iu(e,1),t=rn(t,0,1),n=rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Cc(o,r,e+1/3),this.g=Cc(o,r,e),this.b=Cc(o,r,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=tp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}copyLinearToSRGB(e){return this.r=Ir(e.r),this.g=Ir(e.g),this.b=Ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return bt.fromWorkingColorSpace(yn.copy(this),e),Math.round(rn(yn.r*255,0,255))*65536+Math.round(rn(yn.g*255,0,255))*256+Math.round(rn(yn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(yn.copy(this),t);const n=yn.r,s=yn.g,r=yn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(yn.copy(this),t),e.r=yn.r,e.g=yn.g,e.b=yn.b,e}getStyle(e=Et){bt.fromWorkingColorSpace(yn.copy(this),e);const t=yn.r,n=yn.g,s=yn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(us),this.setHSL(us.h+e,us.s+t,us.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(us),e.getHSL(na);const n=Co(us.h,na.h,t),s=Co(us.s,na.s,t),r=Co(us.l,na.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yn=new ut;ut.NAMES=tp;let Mm=0;class bi extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=fi(),this.name="",this.blending=Pr,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=El,this.blendDst=Tl,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ir,this.stencilZFail=ir,this.stencilZPass=ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==ns&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==El&&(n.blendSrc=this.blendSrc),this.blendDst!==Tl&&(n.blendDst=this.blendDst),this.blendEquation!==Vs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ir&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ir&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ir&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kn extends bi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=kd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new I,ia=new we;class An{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lu,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lu&&(e.usage=this.usage),e}}class np extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ip extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class _t extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bm=0;const oi=new ht,Pc=new Ot,dr=new I,Yn=new Di,oo=new Di,ln=new I;class Gt extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?ip:np)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _t(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Yn.setFromBufferAttribute(r),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Yn.min,oo.min),Yn.expandByPoint(ln),ln.addVectors(Yn.max,oo.max),Yn.expandByPoint(ln)):(Yn.expandByPoint(oo.min),Yn.expandByPoint(oo.max))}Yn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(ln));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ln.fromBufferAttribute(a,l),c&&(dr.fromBufferAttribute(e,l),ln.add(dr)),s=Math.max(s,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,u=new I,h=new I,f=new we,d=new we,g=new we,x=new I,m=new I;function p(P,b,M){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(D),a[P].add(x),a[b].add(x),a[M].add(x),c[P].add(m),c[b].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,b=v.length;P<b;++P){const M=v[P],D=M.start,G=M.count;for(let V=D,q=D+G;V<q;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const y=new I,_=new I,A=new I,E=new I;function R(P){A.fromBufferAttribute(s,P),E.copy(A);const b=a[P];y.copy(b),y.sub(A.multiplyScalar(A.dot(b))).normalize(),_.crossVectors(E,b);const D=_.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,b=v.length;P<b;++P){const M=v[P],D=M.start,G=M.count;for(let V=D,q=D+G;V<q;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new An(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ph=new ht,Ps=new Wo,sa=new Ni,Lh=new I,ra=new I,oa=new I,aa=new I,Lc=new I,ca=new I,Ih=new I,la=new I;class Ee extends Ot{constructor(e=new Gt,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ca.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Lc.fromBufferAttribute(h,e),o?ca.addScaledVector(Lc,u):ca.addScaledVector(Lc.sub(t),u))}t.add(ca)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),Ps.copy(e.ray).recast(e.near),!(sa.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(sa,Lh)===null||Ps.origin.distanceToSquared(Lh)>(e.far-e.near)**2))&&(Ph.copy(r).invert(),Ps.copy(e.ray).applyMatrix4(Ph),!(n.boundingBox!==null&&Ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,A=y;_<A;_+=3){const E=a.getX(_),R=a.getX(_+1),P=a.getX(_+2);s=ua(this,p,e,n,l,u,h,E,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=ua(this,o,e,n,l,u,h,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,A=y;_<A;_+=3){const E=_,R=_+1,P=_+2;s=ua(this,p,e,n,l,u,h,E,R,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=m,y=m+1,_=m+2;s=ua(this,o,e,n,l,u,h,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function wm(i,e,t,n,s,r,o,a){let c;if(e.side===Tn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ns,a),c===null)return null;la.copy(a),la.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(la);return l<t.near||l>t.far?null:{distance:l,point:la.clone(),object:i}}function ua(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ra),i.getVertexPosition(c,oa),i.getVertexPosition(l,aa);const u=wm(i,e,t,n,ra,oa,aa,Ih);if(u){const h=new I;ui.getBarycoord(Ih,ra,oa,aa,h),s&&(u.uv=ui.getInterpolatedAttribute(s,a,c,l,h,new we)),r&&(u.uv1=ui.getInterpolatedAttribute(r,a,c,l,h,new we)),o&&(u.normal=ui.getInterpolatedAttribute(o,a,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new I,materialIndex:0};ui.getNormal(ra,oa,aa,f.normal),u.face=f,u.barycoord=h}return u}class un extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(h,2));function g(x,m,p,v,y,_,A,E,R,P,b){const M=_/R,D=A/P,G=_/2,V=A/2,q=E/2,ee=R+1,$=P+1;let le=0,z=0;const de=new I;for(let ue=0;ue<$;ue++){const Te=ue*D-V;for(let Ge=0;Ge<ee;Ge++){const qe=Ge*M-G;de[x]=qe*v,de[m]=Te*y,de[p]=q,l.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=E>0?1:-1,u.push(de.x,de.y,de.z),h.push(Ge/R),h.push(1-ue/P),le+=1}}for(let ue=0;ue<P;ue++)for(let Te=0;Te<R;Te++){const Ge=f+Te+ee*ue,qe=f+Te+ee*(ue+1),te=f+(Te+1)+ee*(ue+1),ne=f+(Te+1)+ee*ue;c.push(Ge,qe,ne),c.push(qe,te,ne),z+=6}a.addGroup(d,z,b),d+=z,f+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new un(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function In(i){const e={};for(let t=0;t<i.length;t++){const n=Hr(i[t]);for(const s in n)e[s]=n[s]}return e}function Sm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Em={clone:Hr,merge:In};var Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ss extends bi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=Am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=Sm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rp extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new I,Dh=new we,Nh=new we;class Nn extends rp{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ro*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zr*2*Math.atan(Math.tan(Ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,Dh,Nh),t.subVectors(Nh,Dh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ro*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pr=-90,mr=1;class Rm extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Nn(pr,mr,e,t);s.layers=this.layers,this.add(s);const r=new Nn(pr,mr,e,t);r.layers=this.layers,this.add(r);const o=new Nn(pr,mr,e,t);o.layers=this.layers,this.add(o);const a=new Nn(pr,mr,e,t);a.layers=this.layers,this.add(a);const c=new Nn(pr,mr,e,t);c.layers=this.layers,this.add(c);const l=new Nn(pr,mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Qi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class op extends on{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:kr,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cm extends $s{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new op(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new Ss({name:"CubemapFromEquirect",uniforms:Hr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Ms});r.uniforms.tEquirect.value=t;const o=new Ee(s,r),a=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Zn),new Rm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Ic=new I,Pm=new I,Lm=new ft;class Bs{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ic.subVectors(n,t).cross(Pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ic),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lm.getNormalMatrix(e),s=this.coplanarPoint(Ic).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new Ni,ha=new I;class Nu{constructor(e=new Bs,t=new Bs,n=new Bs,s=new Bs,r=new Bs,o=new Bs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-d,_-p).normalize(),n[1].setComponents(c+r,f+l,m+d,_+p).normalize(),n[2].setComponents(c+o,f+u,m+g,_+v).normalize(),n[3].setComponents(c-o,f-u,m-g,_-v).normalize(),n[4].setComponents(c-a,f-h,m-x,_-y).normalize(),t===Qi)n[5].setComponents(c+a,f+h,m+x,_+y).normalize();else if(t===Xa)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){return Ls.center.set(0,0,0),Ls.radius=.7071067811865476,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ha.x=s.normal.x>0?e.max.x:e.min.x,ha.y=s.normal.y>0?e.max.y:e.min.y,ha.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ap(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Im(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class xt extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let y=0;y<l;y++){const _=y*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,_=v+l*(p+1),A=v+1+l*(p+1),E=v+1+l*p;d.push(y,_,E),d.push(_,A,E)}this.setIndex(d),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Dm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nm=`#ifdef USE_ALPHAHASH
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
#endif`,Um=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Om=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bm=`#ifdef USE_AOMAP
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
#endif`,zm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hm=`#ifdef USE_BATCHING
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
#endif`,Vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qm=`#ifdef USE_IRIDESCENCE
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
#endif`,Ym=`#ifdef USE_BUMPMAP
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
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Km=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ng=`#define PI 3.141592653589793
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
} // validated`,ig=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sg=`vec3 transformedNormal = objectNormal;
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
#endif`,rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ag=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hg=`#ifdef USE_ENVMAP
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
#endif`,fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dg=`#ifdef USE_ENVMAP
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
#endif`,pg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mg=`#ifdef USE_ENVMAP
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
#endif`,gg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yg=`#ifdef USE_GRADIENTMAP
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
}`,Mg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
#endif`,Eg=`#ifdef USE_ENVMAP
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
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
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
#endif`,Lg=`struct PhysicalMaterial {
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
}`,Ig=`
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
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ug=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vg=`#if defined( USE_POINTS_UV )
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
#endif`,Gg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$g=`#ifdef USE_MORPHTARGETS
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
#endif`,Kg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tx=`#ifdef USE_NORMALMAP
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
#endif`,nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ax=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,px=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xx=`float getShadowMask() {
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
}`,_x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,yx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mx=`#ifdef USE_SKINNING
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
#endif`,bx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ax=`#ifdef USE_TRANSMISSION
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ix=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dx=`uniform sampler2D t2D;
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
}`,Nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ux=`#ifdef ENVMAP_TYPE_CUBE
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
}`,kx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ox=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fx=`#include <common>
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
}`,Bx=`#if DEPTH_PACKING == 3200
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
}`,zx=`#define DISTANCE
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
}`,Hx=`#define DISTANCE
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
}`,Vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`uniform float scale;
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
}`,Xx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Yx=`uniform vec3 diffuse;
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
}`,$x=`#define LAMBERT
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
}`,Kx=`#define LAMBERT
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
}`,jx=`#define MATCAP
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
}`,Zx=`#define MATCAP
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
}`,Jx=`#define NORMAL
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
}`,Qx=`#define NORMAL
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
}`,e_=`#define PHONG
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
}`,t_=`#define PHONG
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
}`,n_=`#define STANDARD
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
}`,i_=`#define STANDARD
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
}`,s_=`#define TOON
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
}`,r_=`#define TOON
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
}`,o_=`uniform float size;
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
}`,a_=`uniform vec3 diffuse;
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
}`,c_=`#include <common>
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
}`,l_=`uniform vec3 color;
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
}`,u_=`uniform float rotation;
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
}`,h_=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Dm,alphahash_pars_fragment:Nm,alphamap_fragment:Um,alphamap_pars_fragment:km,alphatest_fragment:Om,alphatest_pars_fragment:Fm,aomap_fragment:Bm,aomap_pars_fragment:zm,batching_pars_vertex:Hm,batching_vertex:Vm,begin_vertex:Gm,beginnormal_vertex:Wm,bsdfs:Xm,iridescence_fragment:qm,bumpmap_pars_fragment:Ym,clipping_planes_fragment:$m,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:jm,clipping_planes_vertex:Zm,color_fragment:Jm,color_pars_fragment:Qm,color_pars_vertex:eg,color_vertex:tg,common:ng,cube_uv_reflection_fragment:ig,defaultnormal_vertex:sg,displacementmap_pars_vertex:rg,displacementmap_vertex:og,emissivemap_fragment:ag,emissivemap_pars_fragment:cg,colorspace_fragment:lg,colorspace_pars_fragment:ug,envmap_fragment:hg,envmap_common_pars_fragment:fg,envmap_pars_fragment:dg,envmap_pars_vertex:pg,envmap_physical_pars_fragment:Eg,envmap_vertex:mg,fog_vertex:gg,fog_pars_vertex:xg,fog_fragment:_g,fog_pars_fragment:vg,gradientmap_pars_fragment:yg,lightmap_pars_fragment:Mg,lights_lambert_fragment:bg,lights_lambert_pars_fragment:wg,lights_pars_begin:Sg,lights_toon_fragment:Tg,lights_toon_pars_fragment:Ag,lights_phong_fragment:Rg,lights_phong_pars_fragment:Cg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Ig,lights_fragment_maps:Dg,lights_fragment_end:Ng,logdepthbuf_fragment:Ug,logdepthbuf_pars_fragment:kg,logdepthbuf_pars_vertex:Og,logdepthbuf_vertex:Fg,map_fragment:Bg,map_pars_fragment:zg,map_particle_fragment:Hg,map_particle_pars_fragment:Vg,metalnessmap_fragment:Gg,metalnessmap_pars_fragment:Wg,morphinstance_vertex:Xg,morphcolor_vertex:qg,morphnormal_vertex:Yg,morphtarget_pars_vertex:$g,morphtarget_vertex:Kg,normal_fragment_begin:jg,normal_fragment_maps:Zg,normal_pars_fragment:Jg,normal_pars_vertex:Qg,normal_vertex:ex,normalmap_pars_fragment:tx,clearcoat_normal_fragment_begin:nx,clearcoat_normal_fragment_maps:ix,clearcoat_pars_fragment:sx,iridescence_pars_fragment:rx,opaque_fragment:ox,packing:ax,premultiplied_alpha_fragment:cx,project_vertex:lx,dithering_fragment:ux,dithering_pars_fragment:hx,roughnessmap_fragment:fx,roughnessmap_pars_fragment:dx,shadowmap_pars_fragment:px,shadowmap_pars_vertex:mx,shadowmap_vertex:gx,shadowmask_pars_fragment:xx,skinbase_vertex:_x,skinning_pars_vertex:vx,skinning_vertex:yx,skinnormal_vertex:Mx,specularmap_fragment:bx,specularmap_pars_fragment:wx,tonemapping_fragment:Sx,tonemapping_pars_fragment:Ex,transmission_fragment:Tx,transmission_pars_fragment:Ax,uv_pars_fragment:Rx,uv_pars_vertex:Cx,uv_vertex:Px,worldpos_vertex:Lx,background_vert:Ix,background_frag:Dx,backgroundCube_vert:Nx,backgroundCube_frag:Ux,cube_vert:kx,cube_frag:Ox,depth_vert:Fx,depth_frag:Bx,distanceRGBA_vert:zx,distanceRGBA_frag:Hx,equirect_vert:Vx,equirect_frag:Gx,linedashed_vert:Wx,linedashed_frag:Xx,meshbasic_vert:qx,meshbasic_frag:Yx,meshlambert_vert:$x,meshlambert_frag:Kx,meshmatcap_vert:jx,meshmatcap_frag:Zx,meshnormal_vert:Jx,meshnormal_frag:Qx,meshphong_vert:e_,meshphong_frag:t_,meshphysical_vert:n_,meshphysical_frag:i_,meshtoon_vert:s_,meshtoon_frag:r_,points_vert:o_,points_frag:a_,shadow_vert:c_,shadow_frag:l_,sprite_vert:u_,sprite_frag:h_},Fe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ci={basic:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:In([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:In([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:In([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:In([Fe.points,Fe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:In([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:In([Fe.common,Fe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:In([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:In([Fe.sprite,Fe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:In([Fe.common,Fe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:In([Fe.lights,Fe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ci.physical={uniforms:In([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const fa={r:0,b:0,g:0},Is=new Rn,f_=new ht;function d_(i,e,t,n,s,r,o){const a=new ut(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1;const _=g(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===Qa)?(u===void 0&&(u=new Ee(new un(1,1,1),new Ss({name:"BackgroundCubeMaterial",uniforms:Hr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Is.copy(y.backgroundRotation),Is.x*=-1,Is.y*=-1,Is.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Is.y*=-1,Is.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(f_.makeRotationFromEuler(Is)),u.material.toneMapped=bt.getTransfer(_.colorSpace)!==Dt,(h!==_||f!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ee(new xt(2,2),new Ss({name:"BackgroundMaterial",uniforms:Hr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=bt.getTransfer(_.colorSpace)!==Dt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(fa,sp(i)),n.buffers.color.setClear(fa.r,fa.g,fa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m}}function p_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,D,G,V,q){let ee=!1;const $=h(V,G,D);r!==$&&(r=$,l(r.object)),ee=d(M,V,G,q),ee&&g(M,V,G,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,_(M,D,G,V),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,D,G){const V=G.wireframe===!0;let q=n[M.id];q===void 0&&(q={},n[M.id]=q);let ee=q[D.id];ee===void 0&&(ee={},q[D.id]=ee);let $=ee[V];return $===void 0&&($=f(c()),ee[V]=$),$}function f(M){const D=[],G=[],V=[];for(let q=0;q<t;q++)D[q]=0,G[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:G,attributeDivisors:V,object:M,attributes:{},index:null}}function d(M,D,G,V){const q=r.attributes,ee=D.attributes;let $=0;const le=G.getAttributes();for(const z in le)if(le[z].location>=0){const ue=q[z];let Te=ee[z];if(Te===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(Te=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(Te=M.instanceColor)),ue===void 0||ue.attribute!==Te||Te&&ue.data!==Te.data)return!0;$++}return r.attributesNum!==$||r.index!==V}function g(M,D,G,V){const q={},ee=D.attributes;let $=0;const le=G.getAttributes();for(const z in le)if(le[z].location>=0){let ue=ee[z];ue===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const Te={};Te.attribute=ue,ue&&ue.data&&(Te.data=ue.data),q[z]=Te,$++}r.attributes=q,r.attributesNum=$,r.index=V}function x(){const M=r.newAttributes;for(let D=0,G=M.length;D<G;D++)M[D]=0}function m(M){p(M,0)}function p(M,D){const G=r.newAttributes,V=r.enabledAttributes,q=r.attributeDivisors;G[M]=1,V[M]===0&&(i.enableVertexAttribArray(M),V[M]=1),q[M]!==D&&(i.vertexAttribDivisor(M,D),q[M]=D)}function v(){const M=r.newAttributes,D=r.enabledAttributes;for(let G=0,V=D.length;G<V;G++)D[G]!==M[G]&&(i.disableVertexAttribArray(G),D[G]=0)}function y(M,D,G,V,q,ee,$){$===!0?i.vertexAttribIPointer(M,D,G,q,ee):i.vertexAttribPointer(M,D,G,V,q,ee)}function _(M,D,G,V){x();const q=V.attributes,ee=G.getAttributes(),$=D.defaultAttributeValues;for(const le in ee){const z=ee[le];if(z.location>=0){let de=q[le];if(de===void 0&&(le==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),le==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){const ue=de.normalized,Te=de.itemSize,Ge=e.get(de);if(Ge===void 0)continue;const qe=Ge.buffer,te=Ge.type,ne=Ge.bytesPerElement,ve=te===i.INT||te===i.UNSIGNED_INT||de.gpuType===Eu;if(de.isInterleavedBufferAttribute){const pe=de.data,ke=pe.stride,ze=de.offset;if(pe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<z.locationSize;Oe++)p(z.location+Oe,pe.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Oe=0;Oe<z.locationSize;Oe++)m(z.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let Oe=0;Oe<z.locationSize;Oe++)y(z.location+Oe,Te/z.locationSize,te,ue,ke*ne,(ze+Te/z.locationSize*Oe)*ne,ve)}else{if(de.isInstancedBufferAttribute){for(let pe=0;pe<z.locationSize;pe++)p(z.location+pe,de.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let pe=0;pe<z.locationSize;pe++)m(z.location+pe);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let pe=0;pe<z.locationSize;pe++)y(z.location+pe,Te/z.locationSize,te,ue,Te*ne,Te/z.locationSize*pe*ne,ve)}}else if($!==void 0){const ue=$[le];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(z.location,ue);break;case 3:i.vertexAttrib3fv(z.location,ue);break;case 4:i.vertexAttrib4fv(z.location,ue);break;default:i.vertexAttrib1fv(z.location,ue)}}}}v()}function A(){P();for(const M in n){const D=n[M];for(const G in D){const V=D[G];for(const q in V)u(V[q].object),delete V[q];delete D[G]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const D=n[M.id];for(const G in D){const V=D[G];for(const q in V)u(V[q].object),delete V[q];delete D[G]}delete n[M.id]}function R(M){for(const D in n){const G=n[D];if(G[M.id]===void 0)continue;const V=G[M.id];for(const q in V)u(V[q].object),delete V[q];delete G[M.id]}}function P(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function m_(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function g_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==hi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===Go&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==is&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Mi&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:A,maxSamples:E}}function x_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Bs,a=new ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,y=v*4;let _=p.clippingState||null;c.value=_,_=u(g,f,y,d);for(let A=0;A!==y;++A)_[A]=t[A];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function __(i){let e=new WeakMap;function t(o,a){return a===Nl?o.mapping=kr:a===Ul&&(o.mapping=Or),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Nl||a===Ul)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Cm(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Uu extends rp{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Rr=4,Uh=[.125,.215,.35,.446,.526,.582],Gs=20,Dc=new Uu,kh=new ut;let Nc=null,Uc=0,kc=0,Oc=!1;const zs=(1+Math.sqrt(5))/2,gr=1/zs,Oh=[new I(-zs,gr,0),new I(zs,gr,0),new I(-gr,0,zs),new I(gr,0,zs),new I(0,zs,-gr),new I(0,zs,gr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class uu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Nc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nc,Uc,kc),this._renderer.xr.enabled=Oc,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===kr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nc=this._renderer.getRenderTarget(),Uc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Oc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Go,format:hi,colorSpace:Fn,depthBuffer:!1},s=Fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v_(r)),this._blurMaterial=y_(r,e,t)}return s}_compileMaterial(e){const t=new Ee(this._lodPlanes[0],e);this._renderer.compile(t,Dc)}_sceneToCubeUV(e,t,n,s){const a=new Nn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(kh),u.toneMapping=bs,u.autoClear=!1;const d=new kn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Ee(new un,d);let x=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(kh),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;da(s,v*y,p>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===kr||e.mapping===Or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;da(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Dc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oh[(s-r-1)%Oh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ee(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Gs-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Gs;m>Gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gs}`);const p=[];let v=0;for(let R=0;R<Gs;++R){const P=R/x,b=Math.exp(-P*P/2);p.push(b),R===0?v+=b:R<m&&(v+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const _=this._sizeLods[s],A=3*_*(s>y-Rr?s-y+Rr:0),E=4*(this._cubeSize-_);da(t,A,E,3*_,2*_),c.setRenderTarget(t),c.render(h,Dc)}}function v_(i){const e=[],t=[],n=[];let s=i;const r=i-Rr+1+Uh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Rr?c=Uh[o-i+Rr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let E=0;E<d;E++){const R=E%3*2/3-1,P=E>2?0:-1,b=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(b,x*g*E),y.set(f,m*g*E);const M=[E,E,E,E,E,E];_.set(M,p*g*E)}const A=new Gt;A.setAttribute("position",new An(v,x)),A.setAttribute("uv",new An(y,m)),A.setAttribute("faceIndex",new An(_,p)),e.push(A),s>Rr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fh(i,e,t){const n=new $s(i,e,t);return n.texture.mapping=Qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function y_(i,e,t){const n=new Float32Array(Gs),s=new I(0,1,0);return new Ss({name:"SphericalGaussianBlur",defines:{n:Gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function Bh(){return new Ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

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
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function zh(){return new Ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ms,depthTest:!1,depthWrite:!1})}function ku(){return`

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
	`}function M_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Nl||c===Ul,u=c===kr||c===Or;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new uu(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new uu(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function b_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&So("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function w_(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const v=d.array;x=d.version;for(let y=0,_=v.length;y<_;y+=3){const A=v[y+0],E=v[y+1],R=v[y+2];f.push(A,E,E,R,R,A)}}else if(g!==void 0){const v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const A=y+0,E=y+1,R=y+2;f.push(A,E,E,R,R,A)}}else return;const m=new(Jd(f)?ip:np)(f,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function S_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*x[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function E_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function T_(i,e,t){const n=new WeakMap,s=new At;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let A=a.attributes.position.count*_,E=1;A>e.maxTextureSize&&(E=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const R=new Float32Array(A*E*4*h),P=new ep(R,A,E,h);P.type=Mi,P.needsUpdate=!0;const b=_*4;for(let D=0;D<h;D++){const G=p[D],V=v[D],q=y[D],ee=A*E*4*D;for(let $=0;$<G.count;$++){const le=$*b;g===!0&&(s.fromBufferAttribute(G,$),R[ee+le+0]=s.x,R[ee+le+1]=s.y,R[ee+le+2]=s.z,R[ee+le+3]=0),x===!0&&(s.fromBufferAttribute(V,$),R[ee+le+4]=s.x,R[ee+le+5]=s.y,R[ee+le+6]=s.z,R[ee+le+7]=0),m===!0&&(s.fromBufferAttribute(q,$),R[ee+le+8]=s.x,R[ee+le+9]=s.y,R[ee+le+10]=s.z,R[ee+le+11]=q.itemSize===4?s.w:1)}}f={count:h,texture:P,size:new we(A,E)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function A_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class cp extends on{constructor(e,t,n,s,r,o,a,c,l,u=Lr){if(u!==Lr&&u!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Lr&&(n=Ys),n===void 0&&u===Br&&(n=Fr),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:On,this.minFilter=c!==void 0?c:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lp=new on,Hh=new cp(1,1),up=new ep,hp=new dm,fp=new op,Vh=[],Gh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function Xr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Vh[s];if(r===void 0&&(r=new Float32Array(s),Vh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function tc(i,e){let t=Gh[e];t===void 0&&(t=new Int32Array(e),Gh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function R_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function C_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),cn(t,e)}}function P_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),cn(t,e)}}function L_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),cn(t,e)}}function I_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;qh.set(n),i.uniformMatrix2fv(this.addr,!1,qh),cn(t,n)}}function D_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;Xh.set(n),i.uniformMatrix3fv(this.addr,!1,Xh),cn(t,n)}}function N_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(an(t,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),cn(t,n)}}function U_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function k_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),cn(t,e)}}function O_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),cn(t,e)}}function F_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),cn(t,e)}}function B_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),cn(t,e)}}function H_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),cn(t,e)}}function V_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),cn(t,e)}}function G_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hh.compareFunction=Zd,r=Hh):r=lp,t.setTexture2D(e||r,s)}function W_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||hp,s)}function X_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||fp,s)}function q_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||up,s)}function Y_(i){switch(i){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return L_;case 35674:return I_;case 35675:return D_;case 35676:return N_;case 5124:case 35670:return U_;case 35667:case 35671:return k_;case 35668:case 35672:return O_;case 35669:case 35673:return F_;case 5125:return B_;case 36294:return z_;case 36295:return H_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}function $_(i,e){i.uniform1fv(this.addr,e)}function K_(i,e){const t=Xr(e,this.size,2);i.uniform2fv(this.addr,t)}function j_(i,e){const t=Xr(e,this.size,3);i.uniform3fv(this.addr,t)}function Z_(i,e){const t=Xr(e,this.size,4);i.uniform4fv(this.addr,t)}function J_(i,e){const t=Xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Q_(i,e){const t=Xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ev(i,e){const t=Xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tv(i,e){i.uniform1iv(this.addr,e)}function nv(i,e){i.uniform2iv(this.addr,e)}function iv(i,e){i.uniform3iv(this.addr,e)}function sv(i,e){i.uniform4iv(this.addr,e)}function rv(i,e){i.uniform1uiv(this.addr,e)}function ov(i,e){i.uniform2uiv(this.addr,e)}function av(i,e){i.uniform3uiv(this.addr,e)}function cv(i,e){i.uniform4uiv(this.addr,e)}function lv(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);an(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||lp,r[o])}function uv(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);an(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||hp,r[o])}function hv(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);an(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||fp,r[o])}function fv(i,e,t){const n=this.cache,s=e.length,r=tc(t,s);an(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||up,r[o])}function dv(i){switch(i){case 5126:return $_;case 35664:return K_;case 35665:return j_;case 35666:return Z_;case 35674:return J_;case 35675:return Q_;case 35676:return ev;case 5124:case 35670:return tv;case 35667:case 35671:return nv;case 35668:case 35672:return iv;case 35669:case 35673:return sv;case 5125:return rv;case 36294:return ov;case 36295:return av;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return lv;case 35679:case 36299:case 36307:return uv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return fv}}class pv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Y_(t.type)}}class mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dv(t.type)}}class gv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Fc=/(\w+)(\])?(\[|\.)?/g;function Yh(i,e){i.seq.push(e),i.map[e.id]=e}function xv(i,e,t){const n=i.name,s=n.length;for(Fc.lastIndex=0;;){const r=Fc.exec(n),o=Fc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Yh(t,l===void 0?new pv(a,i,e):new mv(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new gv(a),Yh(t,h)),t=h}}}class Va{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);xv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function $h(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const _v=37297;let vv=0;function yv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Kh=new ft;function Mv(i){bt._getMatrix(Kh,bt.workingColorSpace,i);const e=`mat3( ${Kh.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case ec:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+yv(i.getShaderSource(e),o)}else return s}function bv(i,e){const t=Mv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wv(i,e){let t;switch(e){case w0:t="Linear";break;case S0:t="Reinhard";break;case E0:t="Cineon";break;case Od:t="ACESFilmic";break;case A0:t="AgX";break;case R0:t="Neutral";break;case T0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pa=new I;function Sv(){bt.getLuminanceCoefficients(pa);const i=pa.x.toFixed(4),e=pa.y.toFixed(4),t=pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function Tv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Av(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Eo(i){return i!==""}function Zh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Rv=/^[ \t]*#include +<([\w\d./]+)>/gm;function hu(i){return i.replace(Rv,Pv)}const Cv=new Map;function Pv(i,e){let t=mt[e];if(t===void 0){const n=Cv.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hu(t)}const Lv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(Lv,Iv)}function Iv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ef(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Dv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Nv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case kr:case Or:e="ENVMAP_TYPE_CUBE";break;case Qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Uv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function kv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kd:e="ENVMAP_BLENDING_MULTIPLY";break;case M0:e="ENVMAP_BLENDING_MIX";break;case b0:e="ENVMAP_BLENDING_ADD";break}return e}function Ov(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Fv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Dv(t),l=Nv(t),u=Uv(t),h=kv(t),f=Ov(t),d=Ev(t),g=Tv(r),x=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Eo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Eo).join(`
`),p.length>0&&(p+=`
`)):(m=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),p=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?mt.tonemapping_pars_fragment:"",t.toneMapping!==bs?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,bv("linearToOutputTexel",t.outputColorSpace),Sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Eo).join(`
`)),o=hu(o),o=Zh(o,t),o=Jh(o,t),a=hu(a),a=Zh(a,t),a=Jh(a,t),o=Qh(o),a=Qh(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,_=v+p+a,A=$h(s,s.VERTEX_SHADER,y),E=$h(s,s.FRAGMENT_SHADER,_);s.attachShader(x,A),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(A).trim(),q=s.getShaderInfoLog(E).trim();let ee=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,A,E);else{const le=jh(s,A,"vertex"),z=jh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+le+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||q==="")&&($=!1);$&&(D.diagnostics={runnable:ee,programLog:G,vertexShader:{log:V,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(A),s.deleteShader(E),P=new Va(s,x),b=Av(s,x)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,_v)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=E,this}let Bv=0;class zv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hv(e),t.set(e,n)),n}}class Hv{constructor(e){this.id=Bv++,this.code=e,this.usedTimes=0}}function Vv(i,e,t,n,s,r,o){const a=new Du,c=new zv,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,D,G,V){const q=G.fog,ee=V.geometry,$=b.isMeshStandardMaterial?G.environment:null,le=(b.isMeshStandardMaterial?t:e).get(b.envMap||$),z=le&&le.mapping===Qa?le.image.height:null,de=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ue=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Te=ue!==void 0?ue.length:0;let Ge=0;ee.morphAttributes.position!==void 0&&(Ge=1),ee.morphAttributes.normal!==void 0&&(Ge=2),ee.morphAttributes.color!==void 0&&(Ge=3);let qe,te,ne,ve;if(de){const Mt=Ci[de];qe=Mt.vertexShader,te=Mt.fragmentShader}else qe=b.vertexShader,te=b.fragmentShader,c.update(b),ne=c.getVertexShaderID(b),ve=c.getFragmentShaderID(b);const pe=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),ze=V.isInstancedMesh===!0,Oe=V.isBatchedMesh===!0,Ve=!!b.map,fe=!!b.matcap,xe=!!le,N=!!b.aoMap,he=!!b.lightMap,j=!!b.bumpMap,F=!!b.normalMap,Y=!!b.displacementMap,_e=!!b.emissiveMap,me=!!b.metalnessMap,C=!!b.roughnessMap,T=b.anisotropy>0,B=b.clearcoat>0,ae=b.dispersion>0,ge=b.iridescence>0,se=b.sheen>0,Le=b.transmission>0,be=T&&!!b.anisotropyMap,Ie=B&&!!b.clearcoatMap,ot=B&&!!b.clearcoatNormalMap,H=B&&!!b.clearcoatRoughnessMap,Ce=ge&&!!b.iridescenceMap,De=ge&&!!b.iridescenceThicknessMap,Qe=se&&!!b.sheenColorMap,Ue=se&&!!b.sheenRoughnessMap,U=!!b.specularMap,J=!!b.specularColorMap,Re=!!b.specularIntensityMap,k=Le&&!!b.transmissionMap,ye=Le&&!!b.thicknessMap,K=!!b.gradientMap,ce=!!b.alphaMap,Ae=b.alphaTest>0,Se=!!b.alphaHash,Je=!!b.extensions;let Ct=bs;b.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ct=i.toneMapping);const Zt={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:qe,fragmentShader:te,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Oe,batchingColor:Oe&&V._colorsTexture!==null,instancing:ze,instancingColor:ze&&V.instanceColor!==null,instancingMorph:ze&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Fn,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:fe,envMap:xe,envMapMode:xe&&le.mapping,envMapCubeUVHeight:z,aoMap:N,lightMap:he,bumpMap:j,normalMap:F,displacementMap:f&&Y,emissiveMap:_e,normalMapObjectSpace:F&&b.normalMapType===N0,normalMapTangentSpace:F&&b.normalMapType===jd,metalnessMap:me,roughnessMap:C,anisotropy:T,anisotropyMap:be,clearcoat:B,clearcoatMap:Ie,clearcoatNormalMap:ot,clearcoatRoughnessMap:H,dispersion:ae,iridescence:ge,iridescenceMap:Ce,iridescenceThicknessMap:De,sheen:se,sheenColorMap:Qe,sheenRoughnessMap:Ue,specularMap:U,specularColorMap:J,specularIntensityMap:Re,transmission:Le,transmissionMap:k,thicknessMap:ye,gradientMap:K,opaque:b.transparent===!1&&b.blending===Pr&&b.alphaToCoverage===!1,alphaMap:ce,alphaTest:Ae,alphaHash:Se,combine:b.combine,mapUv:Ve&&x(b.map.channel),aoMapUv:N&&x(b.aoMap.channel),lightMapUv:he&&x(b.lightMap.channel),bumpMapUv:j&&x(b.bumpMap.channel),normalMapUv:F&&x(b.normalMap.channel),displacementMapUv:Y&&x(b.displacementMap.channel),emissiveMapUv:_e&&x(b.emissiveMap.channel),metalnessMapUv:me&&x(b.metalnessMap.channel),roughnessMapUv:C&&x(b.roughnessMap.channel),anisotropyMapUv:be&&x(b.anisotropyMap.channel),clearcoatMapUv:Ie&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:H&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(b.sheenRoughnessMap.channel),specularMapUv:U&&x(b.specularMap.channel),specularColorMapUv:J&&x(b.specularColorMap.channel),specularIntensityMapUv:Re&&x(b.specularIntensityMap.channel),transmissionMapUv:k&&x(b.transmissionMap.channel),thicknessMapUv:ye&&x(b.thicknessMap.channel),alphaMapUv:ce&&x(b.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(F||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ee.attributes.uv&&(Ve||ce),fog:!!q,useFog:b.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ke,skinning:V.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&bt.getTransfer(b.map.colorSpace)===Dt,decodeVideoTextureEmissive:_e&&b.emissiveMap.isVideoTexture===!0&&bt.getTransfer(b.emissiveMap.colorSpace)===Dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Bt,flipSided:b.side===Tn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Je&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&b.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Zt.vertexUv1s=l.has(1),Zt.vertexUv2s=l.has(2),Zt.vertexUv3s=l.has(3),l.clear(),Zt}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)M.push(D),M.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(v(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function v(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const M=g[b.type];let D;if(M){const G=Ci[M];D=Em.clone(G.uniforms)}else D=b.uniforms;return D}function A(b,M){let D;for(let G=0,V=u.length;G<V;G++){const q=u[G];if(q.cacheKey===M){D=q,++D.usedTimes;break}}return D===void 0&&(D=new Fv(i,M,b,r),u.push(D)),D}function E(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:u,dispose:P}}function Gv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Wv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||Wv),n.length>1&&n.sort(f||tf),s.length>1&&s.sort(f||tf)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function Xv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new nf,i.set(n,[o])):s>=r.length?(o=new nf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new ut};break;case"SpotLight":t={position:new I,direction:new I,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Yv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $v=0;function Kv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jv(i){const e=new qv,t=Yv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new ht,o=new ht;function a(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,A=0,E=0,R=0;l.sort(Kv);for(let b=0,M=l.length;b<M;b++){const D=l[b],G=D.color,V=D.intensity,q=D.distance,ee=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=G.r*V,h+=G.g*V,f+=G.b*V;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],V);R++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const le=D.shadow,z=t.get(D);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,n.directionalShadow[d]=z,n.directionalShadowMap[d]=ee,n.directionalShadowMatrix[d]=D.shadow.matrix,v++}n.directional[d]=$,d++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(G).multiplyScalar(V),$.distance=q,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[x]=$;const le=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,le.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[x]=le.matrix,D.castShadow){const z=t.get(D);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,n.spotShadow[x]=z,n.spotShadowMap[x]=ee,_++}x++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(G).multiplyScalar(V),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=$,m++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const le=D.shadow,z=t.get(D);z.shadowIntensity=le.intensity,z.shadowBias=le.bias,z.shadowNormalBias=le.normalBias,z.shadowRadius=le.radius,z.shadowMapSize=le.mapSize,z.shadowCameraNear=le.camera.near,z.shadowCameraFar=le.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=$,g++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(V),$.groundColor.copy(D.groundColor).multiplyScalar(V),n.hemi[p]=$,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==_||P.numSpotMaps!==A||P.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.directionalLength=d,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=_,P.numSpotMaps=A,P.numLightProbes=R,n.version=$v++)}function c(l,u){let h=0,f=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function sf(i){const e=new jv(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Zv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new sf(i),e.set(s,[a])):r>=o.length?(a=new sf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Jv extends bi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=I0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qv extends bi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const e1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t1=`uniform sampler2D shadow_pass;
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
}`;function n1(i,e,t){let n=new Nu;const s=new we,r=new we,o=new At,a=new Jv({depthPacking:D0}),c=new Qv,l={},u=t.maxTextureSize,h={[ns]:Tn,[Tn]:ns,[Bt]:Bt},f=new Ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:e1,fragmentShader:t1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ee(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let p=this.type;this.render=function(E,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Ms),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=p!==Yi&&this.type===Yi,q=p===Yi&&this.type!==Yi;for(let ee=0,$=E.length;ee<$;ee++){const le=E[ee],z=le.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const de=z.getFrameExtents();if(s.multiply(de),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,z.mapSize.y=r.y)),z.map===null||V===!0||q===!0){const Te=this.type!==Yi?{minFilter:On,magFilter:On}:{};z.map!==null&&z.map.dispose(),z.map=new $s(s.x,s.y,Te),z.map.texture.name=le.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ue=z.getViewportCount();for(let Te=0;Te<ue;Te++){const Ge=z.getViewport(Te);o.set(r.x*Ge.x,r.y*Ge.y,r.x*Ge.z,r.y*Ge.w),G.viewport(o),z.updateMatrices(le,Te),n=z.getFrustum(),_(R,P,z.camera,le,this.type)}z.isPointLightShadow!==!0&&this.type===Yi&&v(z,P),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,D)};function v(E,R){const P=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $s(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,P,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,P,d,x,null)}function y(E,R,P,b){let M=null;const D=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)M=D;else if(M=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=M.uuid,V=R.uuid;let q=l[G];q===void 0&&(q={},l[G]=q);let ee=q[V];ee===void 0&&(ee=M.clone(),q[V]=ee,R.addEventListener("dispose",A)),M=ee}if(M.visible=R.visible,M.wireframe=R.wireframe,b===Yi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=i.properties.get(M);G.light=P}return M}function _(E,R,P,b,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===Yi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const V=e.update(E),q=E.material;if(Array.isArray(q)){const ee=V.groups;for(let $=0,le=ee.length;$<le;$++){const z=ee[$],de=q[z.materialIndex];if(de&&de.visible){const ue=y(E,de,b,M);E.onBeforeShadow(i,E,R,P,V,ue,z),i.renderBufferDirect(P,null,V,ue,E,z),E.onAfterShadow(i,E,R,P,V,ue,z)}}}else if(q.visible){const ee=y(E,q,b,M);E.onBeforeShadow(i,E,R,P,V,ee,null),i.renderBufferDirect(P,null,V,ee,E,null),E.onAfterShadow(i,E,R,P,V,ee,null)}}const G=E.children;for(let V=0,q=G.length;V<q;V++)_(G[V],R,P,b,M)}function A(E){E.target.removeEventListener("dispose",A);for(const P in l){const b=l[P],M=E.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const i1={[Al]:Rl,[Cl]:Il,[Pl]:Dl,[Ur]:Ll,[Rl]:Al,[Il]:Cl,[Dl]:Pl,[Ll]:Ur};function s1(i,e){function t(){let k=!1;const ye=new At;let K=null;const ce=new At(0,0,0,0);return{setMask:function(Ae){K!==Ae&&!k&&(i.colorMask(Ae,Ae,Ae,Ae),K=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,Se,Je,Ct,Zt){Zt===!0&&(Ae*=Ct,Se*=Ct,Je*=Ct),ye.set(Ae,Se,Je,Ct),ce.equals(ye)===!1&&(i.clearColor(Ae,Se,Je,Ct),ce.copy(ye))},reset:function(){k=!1,K=null,ce.set(-1,0,0,0)}}}function n(){let k=!1,ye=!1,K=null,ce=null,Ae=null;return{setReversed:function(Se){if(ye!==Se){const Je=e.get("EXT_clip_control");ye?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT);const Ct=Ae;Ae=null,this.setClear(Ct)}ye=Se},getReversed:function(){return ye},setTest:function(Se){Se?pe(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(Se){K!==Se&&!k&&(i.depthMask(Se),K=Se)},setFunc:function(Se){if(ye&&(Se=i1[Se]),ce!==Se){switch(Se){case Al:i.depthFunc(i.NEVER);break;case Rl:i.depthFunc(i.ALWAYS);break;case Cl:i.depthFunc(i.LESS);break;case Ur:i.depthFunc(i.LEQUAL);break;case Pl:i.depthFunc(i.EQUAL);break;case Ll:i.depthFunc(i.GEQUAL);break;case Il:i.depthFunc(i.GREATER);break;case Dl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=Se}},setLocked:function(Se){k=Se},setClear:function(Se){Ae!==Se&&(ye&&(Se=1-Se),i.clearDepth(Se),Ae=Se)},reset:function(){k=!1,K=null,ce=null,Ae=null,ye=!1}}}function s(){let k=!1,ye=null,K=null,ce=null,Ae=null,Se=null,Je=null,Ct=null,Zt=null;return{setTest:function(Mt){k||(Mt?pe(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(Mt){ye!==Mt&&!k&&(i.stencilMask(Mt),ye=Mt)},setFunc:function(Mt,Pn,gt){(K!==Mt||ce!==Pn||Ae!==gt)&&(i.stencilFunc(Mt,Pn,gt),K=Mt,ce=Pn,Ae=gt)},setOp:function(Mt,Pn,gt){(Se!==Mt||Je!==Pn||Ct!==gt)&&(i.stencilOp(Mt,Pn,gt),Se=Mt,Je=Pn,Ct=gt)},setLocked:function(Mt){k=Mt},setClear:function(Mt){Zt!==Mt&&(i.clearStencil(Mt),Zt=Mt)},reset:function(){k=!1,ye=null,K=null,ce=null,Ae=null,Se=null,Je=null,Ct=null,Zt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,A=null,E=null,R=new ut(0,0,0),P=0,b=!1,M=null,D=null,G=null,V=null,q=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,le=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(z)[1]),$=le>=1):z.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),$=le>=2);let de=null,ue={};const Te=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),qe=new At().fromArray(Te),te=new At().fromArray(Ge);function ne(k,ye,K,ce){const Ae=new Uint8Array(4),Se=i.createTexture();i.bindTexture(k,Se),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<K;Je++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(ye+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return Se}const ve={};ve[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(i.DEPTH_TEST),o.setFunc(Ur),j(!1),F(rh),pe(i.CULL_FACE),N(Ms);function pe(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function ke(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function ze(k,ye){return h[k]!==ye?(i.bindFramebuffer(k,ye),h[k]=ye,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Oe(k,ye){let K=d,ce=!1;if(k){K=f.get(ye),K===void 0&&(K=[],f.set(ye,K));const Ae=k.textures;if(K.length!==Ae.length||K[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Je=Ae.length;Se<Je;Se++)K[Se]=i.COLOR_ATTACHMENT0+Se;K.length=Ae.length,ce=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ce=!0);ce&&i.drawBuffers(K)}function Ve(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const fe={[Vs]:i.FUNC_ADD,[s0]:i.FUNC_SUBTRACT,[r0]:i.FUNC_REVERSE_SUBTRACT};fe[o0]=i.MIN,fe[a0]=i.MAX;const xe={[c0]:i.ZERO,[l0]:i.ONE,[u0]:i.SRC_COLOR,[El]:i.SRC_ALPHA,[g0]:i.SRC_ALPHA_SATURATE,[p0]:i.DST_COLOR,[f0]:i.DST_ALPHA,[h0]:i.ONE_MINUS_SRC_COLOR,[Tl]:i.ONE_MINUS_SRC_ALPHA,[m0]:i.ONE_MINUS_DST_COLOR,[d0]:i.ONE_MINUS_DST_ALPHA,[x0]:i.CONSTANT_COLOR,[_0]:i.ONE_MINUS_CONSTANT_COLOR,[v0]:i.CONSTANT_ALPHA,[y0]:i.ONE_MINUS_CONSTANT_ALPHA};function N(k,ye,K,ce,Ae,Se,Je,Ct,Zt,Mt){if(k===Ms){x===!0&&(ke(i.BLEND),x=!1);return}if(x===!1&&(pe(i.BLEND),x=!0),k!==i0){if(k!==m||Mt!==b){if((p!==Vs||_!==Vs)&&(i.blendEquation(i.FUNC_ADD),p=Vs,_=Vs),Mt)switch(k){case Pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sl:i.blendFunc(i.ONE,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ah:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,y=null,A=null,E=null,R.set(0,0,0),P=0,m=k,b=Mt}return}Ae=Ae||ye,Se=Se||K,Je=Je||ce,(ye!==p||Ae!==_)&&(i.blendEquationSeparate(fe[ye],fe[Ae]),p=ye,_=Ae),(K!==v||ce!==y||Se!==A||Je!==E)&&(i.blendFuncSeparate(xe[K],xe[ce],xe[Se],xe[Je]),v=K,y=ce,A=Se,E=Je),(Ct.equals(R)===!1||Zt!==P)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Zt),R.copy(Ct),P=Zt),m=k,b=!1}function he(k,ye){k.side===Bt?ke(i.CULL_FACE):pe(i.CULL_FACE);let K=k.side===Tn;ye&&(K=!K),j(K),k.blending===Pr&&k.transparent===!1?N(Ms):N(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const ce=k.stencilWrite;a.setTest(ce),ce&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),_e(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function j(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function F(k){k!==t0?(pe(i.CULL_FACE),k!==D&&(k===rh?i.cullFace(i.BACK):k===n0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),D=k}function Y(k){k!==G&&($&&i.lineWidth(k),G=k)}function _e(k,ye,K){k?(pe(i.POLYGON_OFFSET_FILL),(V!==ye||q!==K)&&(i.polygonOffset(ye,K),V=ye,q=K)):ke(i.POLYGON_OFFSET_FILL)}function me(k){k?pe(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function C(k){k===void 0&&(k=i.TEXTURE0+ee-1),de!==k&&(i.activeTexture(k),de=k)}function T(k,ye,K){K===void 0&&(de===null?K=i.TEXTURE0+ee-1:K=de);let ce=ue[K];ce===void 0&&(ce={type:void 0,texture:void 0},ue[K]=ce),(ce.type!==k||ce.texture!==ye)&&(de!==K&&(i.activeTexture(K),de=K),i.bindTexture(k,ye||ve[k]),ce.type=k,ce.texture=ye)}function B(){const k=ue[de];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(k){qe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),qe.copy(k))}function Ue(k){te.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),te.copy(k))}function U(k,ye){let K=l.get(ye);K===void 0&&(K=new WeakMap,l.set(ye,K));let ce=K.get(k);ce===void 0&&(ce=i.getUniformBlockIndex(ye,k.name),K.set(k,ce))}function J(k,ye){const ce=l.get(ye).get(k);c.get(ye)!==ce&&(i.uniformBlockBinding(ye,ce,k.__bindingPointIndex),c.set(ye,ce))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},de=null,ue={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,A=null,E=null,R=new ut(0,0,0),P=0,b=!1,M=null,D=null,G=null,V=null,q=null,qe.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:ke,bindFramebuffer:ze,drawBuffers:Oe,useProgram:Ve,setBlending:N,setMaterial:he,setFlipSided:j,setCullFace:F,setLineWidth:Y,setPolygonOffset:_e,setScissorTest:me,activeTexture:C,bindTexture:T,unbindTexture:B,compressedTexImage2D:ae,compressedTexImage3D:ge,texImage2D:Ce,texImage3D:De,updateUBOMapping:U,uniformBlockBinding:J,texStorage2D:ot,texStorage3D:H,texSubImage2D:se,texSubImage3D:Le,compressedTexSubImage2D:be,compressedTexSubImage3D:Ie,scissor:Qe,viewport:Ue,reset:Re}}function rf(i,e,t,n){const s=r1(n);switch(t){case Gd:return i*e;case Xd:return i*e;case qd:return i*e*2;case Ru:return i*e/s.components*s.byteLength;case Cu:return i*e/s.components*s.byteLength;case Yd:return i*e*2/s.components*s.byteLength;case Pu:return i*e*2/s.components*s.byteLength;case Wd:return i*e*3/s.components*s.byteLength;case hi:return i*e*4/s.components*s.byteLength;case Lu:return i*e*4/s.components*s.byteLength;case Oa:case Fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:case Bl:return Math.max(i,16)*Math.max(e,8)/4;case kl:case Fl:return Math.max(i,8)*Math.max(e,8)/2;case zl:case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ha:case iu:case su:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $d:case ru:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ou:case au:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function r1(i){switch(i){case is:case zd:return{byteLength:1,components:1};case No:case Hd:case Go:return{byteLength:2,components:1};case Tu:case Au:return{byteLength:2,components:4};case Ys:case Eu:case Mi:return{byteLength:4,components:1};case Vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function o1(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new we,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,T){return d?new OffscreenCanvas(C,T):Oo("canvas")}function x(C,T,B){let ae=1;const ge=me(C);if((ge.width>B||ge.height>B)&&(ae=B/Math.max(ge.width,ge.height)),ae<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const se=Math.floor(ae*ge.width),Le=Math.floor(ae*ge.height);h===void 0&&(h=g(se,Le));const be=T?g(se,Le):h;return be.width=se,be.height=Le,be.getContext("2d").drawImage(C,0,0,se,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+se+"x"+Le+")."),be}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,T,B,ae,ge=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let se=T;if(T===i.RED&&(B===i.FLOAT&&(se=i.R32F),B===i.HALF_FLOAT&&(se=i.R16F),B===i.UNSIGNED_BYTE&&(se=i.R8)),T===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(se=i.R8UI),B===i.UNSIGNED_SHORT&&(se=i.R16UI),B===i.UNSIGNED_INT&&(se=i.R32UI),B===i.BYTE&&(se=i.R8I),B===i.SHORT&&(se=i.R16I),B===i.INT&&(se=i.R32I)),T===i.RG&&(B===i.FLOAT&&(se=i.RG32F),B===i.HALF_FLOAT&&(se=i.RG16F),B===i.UNSIGNED_BYTE&&(se=i.RG8)),T===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(se=i.RG8UI),B===i.UNSIGNED_SHORT&&(se=i.RG16UI),B===i.UNSIGNED_INT&&(se=i.RG32UI),B===i.BYTE&&(se=i.RG8I),B===i.SHORT&&(se=i.RG16I),B===i.INT&&(se=i.RG32I)),T===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(se=i.RGB8UI),B===i.UNSIGNED_SHORT&&(se=i.RGB16UI),B===i.UNSIGNED_INT&&(se=i.RGB32UI),B===i.BYTE&&(se=i.RGB8I),B===i.SHORT&&(se=i.RGB16I),B===i.INT&&(se=i.RGB32I)),T===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),B===i.UNSIGNED_INT&&(se=i.RGBA32UI),B===i.BYTE&&(se=i.RGBA8I),B===i.SHORT&&(se=i.RGBA16I),B===i.INT&&(se=i.RGBA32I)),T===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),T===i.RGBA){const Le=ge?ec:bt.getTransfer(ae);B===i.FLOAT&&(se=i.RGBA32F),B===i.HALF_FLOAT&&(se=i.RGBA16F),B===i.UNSIGNED_BYTE&&(se=Le===Dt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function _(C,T){let B;return C?T===null||T===Ys||T===Fr?B=i.DEPTH24_STENCIL8:T===Mi?B=i.DEPTH32F_STENCIL8:T===No&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ys||T===Fr?B=i.DEPTH_COMPONENT24:T===Mi?B=i.DEPTH_COMPONENT32F:T===No&&(B=i.DEPTH_COMPONENT16),B}function A(C,T){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==On&&C.minFilter!==Zn?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function E(C){const T=C.target;T.removeEventListener("dispose",E),P(T),T.isVideoTexture&&u.delete(T)}function R(C){const T=C.target;T.removeEventListener("dispose",R),M(T)}function P(C){const T=n.get(C);if(T.__webglInit===void 0)return;const B=C.source,ae=f.get(B);if(ae){const ge=ae[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(C),Object.keys(ae).length===0&&f.delete(B)}n.remove(C)}function b(C){const T=n.get(C);i.deleteTexture(T.__webglTexture);const B=C.source,ae=f.get(B);delete ae[T.__cacheKey],o.memory.textures--}function M(C){const T=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(T.__webglFramebuffer[ae]))for(let ge=0;ge<T.__webglFramebuffer[ae].length;ge++)i.deleteFramebuffer(T.__webglFramebuffer[ae][ge]);else i.deleteFramebuffer(T.__webglFramebuffer[ae]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ae])}else{if(Array.isArray(T.__webglFramebuffer))for(let ae=0;ae<T.__webglFramebuffer.length;ae++)i.deleteFramebuffer(T.__webglFramebuffer[ae]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ae=0;ae<T.__webglColorRenderbuffer.length;ae++)T.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ae]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const B=C.textures;for(let ae=0,ge=B.length;ae<ge;ae++){const se=n.get(B[ae]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(B[ae])}n.remove(C)}let D=0;function G(){D=0}function V(){const C=D;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function q(C){const T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function ee(C,T){const B=n.get(C);if(C.isVideoTexture&&Y(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const ae=C.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(B,C,T);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+T)}function $(C,T){const B=n.get(C);if(C.version>0&&B.__version!==C.version){te(B,C,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+T)}function le(C,T){const B=n.get(C);if(C.version>0&&B.__version!==C.version){te(B,C,T);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+T)}function z(C,T){const B=n.get(C);if(C.version>0&&B.__version!==C.version){ne(B,C,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+T)}const de={[wi]:i.REPEAT,[vs]:i.CLAMP_TO_EDGE,[Wa]:i.MIRRORED_REPEAT},ue={[On]:i.NEAREST,[Bd]:i.NEAREST_MIPMAP_NEAREST,[wo]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[Ji]:i.LINEAR_MIPMAP_LINEAR},Te={[U0]:i.NEVER,[H0]:i.ALWAYS,[k0]:i.LESS,[Zd]:i.LEQUAL,[O0]:i.EQUAL,[z0]:i.GEQUAL,[F0]:i.GREATER,[B0]:i.NOTEQUAL};function Ge(C,T){if(T.type===Mi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zn||T.magFilter===ka||T.magFilter===wo||T.magFilter===Ji||T.minFilter===Zn||T.minFilter===ka||T.minFilter===wo||T.minFilter===Ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,de[T.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,de[T.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,de[T.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ue[T.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ue[T.minFilter]),T.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Te[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===On||T.minFilter!==wo&&T.minFilter!==Ji||T.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function qe(C,T){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",E));const ae=T.source;let ge=f.get(ae);ge===void 0&&(ge={},f.set(ae,ge));const se=q(T);if(se!==C.__cacheKey){ge[se]===void 0&&(ge[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ge[se].usedTimes++;const Le=ge[C.__cacheKey];Le!==void 0&&(ge[C.__cacheKey].usedTimes--,Le.usedTimes===0&&b(T)),C.__cacheKey=se,C.__webglTexture=ge[se].texture}return B}function te(C,T,B){let ae=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ae=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ae=i.TEXTURE_3D);const ge=qe(C,T),se=T.source;t.bindTexture(ae,C.__webglTexture,i.TEXTURE0+B);const Le=n.get(se);if(se.version!==Le.__version||ge===!0){t.activeTexture(i.TEXTURE0+B);const be=bt.getPrimaries(bt.workingColorSpace),Ie=T.colorSpace===xs?null:bt.getPrimaries(T.colorSpace),ot=T.colorSpace===xs||be===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let H=x(T.image,!1,s.maxTextureSize);H=_e(T,H);const Ce=r.convert(T.format,T.colorSpace),De=r.convert(T.type);let Qe=y(T.internalFormat,Ce,De,T.colorSpace,T.isVideoTexture);Ge(ae,T);let Ue;const U=T.mipmaps,J=T.isVideoTexture!==!0,Re=Le.__version===void 0||ge===!0,k=se.dataReady,ye=A(T,H);if(T.isDepthTexture)Qe=_(T.format===Br,T.type),Re&&(J?t.texStorage2D(i.TEXTURE_2D,1,Qe,H.width,H.height):t.texImage2D(i.TEXTURE_2D,0,Qe,H.width,H.height,0,Ce,De,null));else if(T.isDataTexture)if(U.length>0){J&&Re&&t.texStorage2D(i.TEXTURE_2D,ye,Qe,U[0].width,U[0].height);for(let K=0,ce=U.length;K<ce;K++)Ue=U[K],J?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Ue.width,Ue.height,Ce,De,Ue.data):t.texImage2D(i.TEXTURE_2D,K,Qe,Ue.width,Ue.height,0,Ce,De,Ue.data);T.generateMipmaps=!1}else J?(Re&&t.texStorage2D(i.TEXTURE_2D,ye,Qe,H.width,H.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,H.width,H.height,Ce,De,H.data)):t.texImage2D(i.TEXTURE_2D,0,Qe,H.width,H.height,0,Ce,De,H.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){J&&Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Qe,U[0].width,U[0].height,H.depth);for(let K=0,ce=U.length;K<ce;K++)if(Ue=U[K],T.format!==hi)if(Ce!==null)if(J){if(k)if(T.layerUpdates.size>0){const Ae=rf(Ue.width,Ue.height,T.format,T.type);for(const Se of T.layerUpdates){const Je=Ue.data.subarray(Se*Ae/Ue.data.BYTES_PER_ELEMENT,(Se+1)*Ae/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,Se,Ue.width,Ue.height,1,Ce,Je)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Ue.width,Ue.height,H.depth,Ce,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,Qe,Ue.width,Ue.height,H.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,Ue.width,Ue.height,H.depth,Ce,De,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,K,Qe,Ue.width,Ue.height,H.depth,0,Ce,De,Ue.data)}else{J&&Re&&t.texStorage2D(i.TEXTURE_2D,ye,Qe,U[0].width,U[0].height);for(let K=0,ce=U.length;K<ce;K++)Ue=U[K],T.format!==hi?Ce!==null?J?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,Ue.width,Ue.height,Ce,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,K,Qe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Ue.width,Ue.height,Ce,De,Ue.data):t.texImage2D(i.TEXTURE_2D,K,Qe,Ue.width,Ue.height,0,Ce,De,Ue.data)}else if(T.isDataArrayTexture)if(J){if(Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Qe,H.width,H.height,H.depth),k)if(T.layerUpdates.size>0){const K=rf(H.width,H.height,T.format,T.type);for(const ce of T.layerUpdates){const Ae=H.data.subarray(ce*K/H.data.BYTES_PER_ELEMENT,(ce+1)*K/H.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,H.width,H.height,1,Ce,De,Ae)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,H.width,H.height,H.depth,Ce,De,H.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Qe,H.width,H.height,H.depth,0,Ce,De,H.data);else if(T.isData3DTexture)J?(Re&&t.texStorage3D(i.TEXTURE_3D,ye,Qe,H.width,H.height,H.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,H.width,H.height,H.depth,Ce,De,H.data)):t.texImage3D(i.TEXTURE_3D,0,Qe,H.width,H.height,H.depth,0,Ce,De,H.data);else if(T.isFramebufferTexture){if(Re)if(J)t.texStorage2D(i.TEXTURE_2D,ye,Qe,H.width,H.height);else{let K=H.width,ce=H.height;for(let Ae=0;Ae<ye;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Qe,K,ce,0,Ce,De,null),K>>=1,ce>>=1}}else if(U.length>0){if(J&&Re){const K=me(U[0]);t.texStorage2D(i.TEXTURE_2D,ye,Qe,K.width,K.height)}for(let K=0,ce=U.length;K<ce;K++)Ue=U[K],J?k&&t.texSubImage2D(i.TEXTURE_2D,K,0,0,Ce,De,Ue):t.texImage2D(i.TEXTURE_2D,K,Qe,Ce,De,Ue);T.generateMipmaps=!1}else if(J){if(Re){const K=me(H);t.texStorage2D(i.TEXTURE_2D,ye,Qe,K.width,K.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,De,H)}else t.texImage2D(i.TEXTURE_2D,0,Qe,Ce,De,H);m(T)&&p(ae),Le.__version=se.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ne(C,T,B){if(T.image.length!==6)return;const ae=qe(C,T),ge=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+B);const se=n.get(ge);if(ge.version!==se.__version||ae===!0){t.activeTexture(i.TEXTURE0+B);const Le=bt.getPrimaries(bt.workingColorSpace),be=T.colorSpace===xs?null:bt.getPrimaries(T.colorSpace),Ie=T.colorSpace===xs||Le===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ot=T.isCompressedTexture||T.image[0].isCompressedTexture,H=T.image[0]&&T.image[0].isDataTexture,Ce=[];for(let ce=0;ce<6;ce++)!ot&&!H?Ce[ce]=x(T.image[ce],!0,s.maxCubemapSize):Ce[ce]=H?T.image[ce].image:T.image[ce],Ce[ce]=_e(T,Ce[ce]);const De=Ce[0],Qe=r.convert(T.format,T.colorSpace),Ue=r.convert(T.type),U=y(T.internalFormat,Qe,Ue,T.colorSpace),J=T.isVideoTexture!==!0,Re=se.__version===void 0||ae===!0,k=ge.dataReady;let ye=A(T,De);Ge(i.TEXTURE_CUBE_MAP,T);let K;if(ot){J&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,U,De.width,De.height);for(let ce=0;ce<6;ce++){K=Ce[ce].mipmaps;for(let Ae=0;Ae<K.length;Ae++){const Se=K[Ae];T.format!==hi?Qe!==null?J?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,Se.width,Se.height,Qe,Se.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,U,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,0,0,Se.width,Se.height,Qe,Ue,Se.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae,U,Se.width,Se.height,0,Qe,Ue,Se.data)}}}else{if(K=T.mipmaps,J&&Re){K.length>0&&ye++;const ce=me(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,U,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(H){J?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ce[ce].width,Ce[ce].height,Qe,Ue,Ce[ce].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,U,Ce[ce].width,Ce[ce].height,0,Qe,Ue,Ce[ce].data);for(let Ae=0;Ae<K.length;Ae++){const Je=K[Ae].image[ce].image;J?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,Je.width,Je.height,Qe,Ue,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,U,Je.width,Je.height,0,Qe,Ue,Je.data)}}else{J?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Qe,Ue,Ce[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,U,Qe,Ue,Ce[ce]);for(let Ae=0;Ae<K.length;Ae++){const Se=K[Ae];J?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,0,0,Qe,Ue,Se.image[ce]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae+1,U,Qe,Ue,Se.image[ce])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),se.__version=ge.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ve(C,T,B,ae,ge,se){const Le=r.convert(B.format,B.colorSpace),be=r.convert(B.type),Ie=y(B.internalFormat,Le,be,B.colorSpace),ot=n.get(T),H=n.get(B);if(H.__renderTarget=T,!ot.__hasExternalTextures){const Ce=Math.max(1,T.width>>se),De=Math.max(1,T.height>>se);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,se,Ie,Ce,De,T.depth,0,Le,be,null):t.texImage2D(ge,se,Ie,Ce,De,0,Le,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),F(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,ge,H.__webglTexture,0,j(T)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ae,ge,H.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(C,T,B){if(i.bindRenderbuffer(i.RENDERBUFFER,C),T.depthBuffer){const ae=T.depthTexture,ge=ae&&ae.isDepthTexture?ae.type:null,se=_(T.stencilBuffer,ge),Le=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=j(T);F(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,se,T.width,T.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,se,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,se,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,C)}else{const ae=T.textures;for(let ge=0;ge<ae.length;ge++){const se=ae[ge],Le=r.convert(se.format,se.colorSpace),be=r.convert(se.type),Ie=y(se.internalFormat,Le,be,se.colorSpace),ot=j(T);B&&F(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,Ie,T.width,T.height):F(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,Ie,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ke(C,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ae=n.get(T.depthTexture);ae.__renderTarget=T,(!ae.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ee(T.depthTexture,0);const ge=ae.__webglTexture,se=j(T);if(T.depthTexture.format===Lr)F(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(T.depthTexture.format===Br)F(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function ze(C){const T=n.get(C),B=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){const ae=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ae){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ae.removeEventListener("dispose",ge)};ae.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=ae}if(C.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");ke(T.__webglFramebuffer,C)}else if(B){T.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ae]),T.__webglDepthbuffer[ae]===void 0)T.__webglDepthbuffer[ae]=i.createRenderbuffer(),pe(T.__webglDepthbuffer[ae],C,!1);else{const ge=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=T.__webglDepthbuffer[ae];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,se)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),pe(T.__webglDepthbuffer,C,!1);else{const ae=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(C,T,B){const ae=n.get(C);T!==void 0&&ve(ae.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ze(C)}function Ve(C){const T=C.texture,B=n.get(C),ae=n.get(T);C.addEventListener("dispose",R);const ge=C.textures,se=C.isWebGLCubeRenderTarget===!0,Le=ge.length>1;if(Le||(ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture()),ae.__version=T.version,o.memory.textures++),se){B.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[be]=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)B.__webglFramebuffer[be][Ie]=i.createFramebuffer()}else B.__webglFramebuffer[be]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)B.__webglFramebuffer[be]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Le)for(let be=0,Ie=ge.length;be<Ie;be++){const ot=n.get(ge[be]);ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&F(C)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){const Ie=ge[be];B.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[be]);const ot=r.convert(Ie.format,Ie.colorSpace),H=r.convert(Ie.type),Ce=y(Ie.internalFormat,ot,H,Ie.colorSpace,C.isXRRenderTarget===!0),De=j(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Ce,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,B.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),pe(B.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ae.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)ve(B.__webglFramebuffer[be][Ie],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie);else ve(B.__webglFramebuffer[be],C,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(T)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let be=0,Ie=ge.length;be<Ie;be++){const ot=ge[be],H=n.get(ot);t.bindTexture(i.TEXTURE_2D,H.__webglTexture),Ge(i.TEXTURE_2D,ot),ve(B.__webglFramebuffer,C,ot,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),m(ot)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,ae.__webglTexture),Ge(be,T),T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)ve(B.__webglFramebuffer[Ie],C,T,i.COLOR_ATTACHMENT0,be,Ie);else ve(B.__webglFramebuffer,C,T,i.COLOR_ATTACHMENT0,be,0);m(T)&&p(be),t.unbindTexture()}C.depthBuffer&&ze(C)}function fe(C){const T=C.textures;for(let B=0,ae=T.length;B<ae;B++){const ge=T[B];if(m(ge)){const se=v(C),Le=n.get(ge).__webglTexture;t.bindTexture(se,Le),p(se),t.unbindTexture()}}}const xe=[],N=[];function he(C){if(C.samples>0){if(F(C)===!1){const T=C.textures,B=C.width,ae=C.height;let ge=i.COLOR_BUFFER_BIT;const se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(C),be=T.length>1;if(be)for(let Ie=0;Ie<T.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ie=0;Ie<T.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const ot=n.get(T[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,B,ae,0,0,B,ae,ge,i.NEAREST),c===!0&&(xe.length=0,N.length=0,xe.push(i.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(xe.push(se),N.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let Ie=0;Ie<T.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const ot=n.get(T[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,ot,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const T=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function j(C){return Math.min(s.maxSamples,C.samples)}function F(C){const T=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Y(C){const T=o.render.frame;u.get(C)!==T&&(u.set(C,T),C.update())}function _e(C,T){const B=C.colorSpace,ae=C.format,ge=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Fn&&B!==xs&&(bt.getTransfer(B)===Dt?(ae!==hi||ge!==is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}function me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=G,this.setTexture2D=ee,this.setTexture2DArray=$,this.setTexture3D=le,this.setTextureCube=z,this.rebindTextures=Oe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=F}function a1(i,e){function t(n,s=xs){let r;const o=bt.getTransfer(s);if(n===is)return i.UNSIGNED_BYTE;if(n===Tu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Au)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zd)return i.BYTE;if(n===Hd)return i.SHORT;if(n===No)return i.UNSIGNED_SHORT;if(n===Eu)return i.INT;if(n===Ys)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===Go)return i.HALF_FLOAT;if(n===Gd)return i.ALPHA;if(n===Wd)return i.RGB;if(n===hi)return i.RGBA;if(n===Xd)return i.LUMINANCE;if(n===qd)return i.LUMINANCE_ALPHA;if(n===Lr)return i.DEPTH_COMPONENT;if(n===Br)return i.DEPTH_STENCIL;if(n===Ru)return i.RED;if(n===Cu)return i.RED_INTEGER;if(n===Yd)return i.RG;if(n===Pu)return i.RG_INTEGER;if(n===Lu)return i.RGBA_INTEGER;if(n===Oa||n===Fa||n===Ba||n===za)if(o===Dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Oa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Oa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ba)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kl||n===Ol||n===Fl||n===Bl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zl||n===Hl||n===Vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===zl||n===Hl)return o===Dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gl||n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===Kl||n===jl||n===Zl||n===Jl||n===Ql||n===eu||n===tu||n===nu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Gl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$l)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ql)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nu)return o===Dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ha||n===iu||n===su)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ha)return o===Dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===iu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===su)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$d||n===ru||n===ou||n===au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ru)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class c1 extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class st extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l1={type:"move"};class Bc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const u1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,h1=`
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

}`;class f1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new on,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ss({vertexShader:u1,fragmentShader:h1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ee(new xt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class d1 extends Qs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const x=new f1,m=t.getContextAttributes();let p=null,v=null;const y=[],_=[],A=new we;let E=null;const R=new Nn;R.viewport=new At;const P=new Nn;P.viewport=new At;const b=[R,P],M=new c1;let D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ne=y[te];return ne===void 0&&(ne=new Bc,y[te]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(te){let ne=y[te];return ne===void 0&&(ne=new Bc,y[te]=ne),ne.getGripSpace()},this.getHand=function(te){let ne=y[te];return ne===void 0&&(ne=new Bc,y[te]=ne),ne.getHandSpace()};function V(te){const ne=_.indexOf(te.inputSource);if(ne===-1)return;const ve=y[ne];ve!==void 0&&(ve.update(te.inputSource,te.frame,l||o),ve.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ee);for(let te=0;te<y.length;te++){const ne=_[te];ne!==null&&(_[te]=null,y[te].disconnect(ne))}D=null,G=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,v=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(A),s.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new $s(d.framebufferWidth,d.framebufferHeight,{format:hi,type:is,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ve=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Br:Lr,ve=m.stencil?Fr:Ys);const ke={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new $s(f.textureWidth,f.textureHeight,{format:hi,type:is,depthTexture:new cp(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(te){for(let ne=0;ne<te.removed.length;ne++){const ve=te.removed[ne],pe=_.indexOf(ve);pe>=0&&(_[pe]=null,y[pe].disconnect(ve))}for(let ne=0;ne<te.added.length;ne++){const ve=te.added[ne];let pe=_.indexOf(ve);if(pe===-1){for(let ze=0;ze<y.length;ze++)if(ze>=_.length){_.push(ve),pe=ze;break}else if(_[ze]===null){_[ze]=ve,pe=ze;break}if(pe===-1)break}const ke=y[pe];ke&&ke.connect(ve)}}const $=new I,le=new I;function z(te,ne,ve){$.setFromMatrixPosition(ne.matrixWorld),le.setFromMatrixPosition(ve.matrixWorld);const pe=$.distanceTo(le),ke=ne.projectionMatrix.elements,ze=ve.projectionMatrix.elements,Oe=ke[14]/(ke[10]-1),Ve=ke[14]/(ke[10]+1),fe=(ke[9]+1)/ke[5],xe=(ke[9]-1)/ke[5],N=(ke[8]-1)/ke[0],he=(ze[8]+1)/ze[0],j=Oe*N,F=Oe*he,Y=pe/(-N+he),_e=Y*-N;if(ne.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(_e),te.translateZ(Y),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),ke[10]===-1)te.projectionMatrix.copy(ne.projectionMatrix),te.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const me=Oe+Y,C=Ve+Y,T=j-_e,B=F+(pe-_e),ae=fe*Ve/C*me,ge=xe*Ve/C*me;te.projectionMatrix.makePerspective(T,B,ae,ge,me,C),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function de(te,ne){ne===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ne.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ne=te.near,ve=te.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),M.near=P.near=R.near=ne,M.far=P.far=R.far=ve,(D!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,G=M.far),R.layers.mask=te.layers.mask|2,P.layers.mask=te.layers.mask|4,M.layers.mask=R.layers.mask|P.layers.mask;const pe=te.parent,ke=M.cameras;de(M,pe);for(let ze=0;ze<ke.length;ze++)de(ke[ze],pe);ke.length===2?z(M,R,P):M.projectionMatrix.copy(R.projectionMatrix),ue(te,M,pe)};function ue(te,ne,ve){ve===null?te.matrix.copy(ne.matrixWorld):(te.matrix.copy(ve.matrixWorld),te.matrix.invert(),te.matrix.multiply(ne.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ne.projectionMatrix),te.projectionMatrixInverse.copy(ne.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=zr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let Te=null;function Ge(te,ne){if(u=ne.getViewerPose(l||o),g=ne,u!==null){const ve=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let pe=!1;ve.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let ze=0;ze<ve.length;ze++){const Oe=ve[ze];let Ve=null;if(d!==null)Ve=d.getViewport(Oe);else{const xe=h.getViewSubImage(f,Oe);Ve=xe.viewport,ze===0&&(e.setRenderTargetTextures(v,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(v))}let fe=b[ze];fe===void 0&&(fe=new Nn,fe.layers.enable(ze),fe.viewport=new At,b[ze]=fe),fe.matrix.fromArray(Oe.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Oe.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),ze===0&&(M.matrix.copy(fe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(fe)}const ke=s.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const ze=h.getDepthInformation(ve[0]);ze&&ze.isValid&&ze.texture&&x.init(e,ze,s.renderState)}}for(let ve=0;ve<y.length;ve++){const pe=_[ve],ke=y[ve];pe!==null&&ke!==void 0&&ke.update(pe,ne,l||o)}Te&&Te(te,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}const qe=new ap;qe.setAnimationLoop(Ge),this.setAnimationLoop=function(te){Te=te},this.dispose=function(){}}}const Ds=new Rn,p1=new ht;function m1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,sp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,Ds.copy(_),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),m.envMapRotation.value.setFromMatrix4(p1.makeRotationFromEuler(Ds)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function g1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(g(v),_=u(v),s[v.id]=_,v.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(v,A);const E=e.render.frame;r[v.id]!==E&&(f(v),r[v.id]=E)}function u(v){const y=h();v.__bindingPointIndex=y;const _=i.createBuffer(),A=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],_=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,R=_.length;E<R;E++){const P=Array.isArray(_[E])?_[E]:[_[E]];for(let b=0,M=P.length;b<M;b++){const D=P[b];if(d(D,E,b,A)===!0){const G=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let q=0;for(let ee=0;ee<V.length;ee++){const $=V[ee],le=x($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,G+q,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,q),q+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,_,A){const E=v.value,R=y+"_"+_;if(A[R]===void 0)return typeof E=="number"||typeof E=="boolean"?A[R]=E:A[R]=E.clone(),!0;{const P=A[R];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return A[R]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(v){const y=v.uniforms;let _=0;const A=16;for(let R=0,P=y.length;R<P;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,D=b.length;M<D;M++){const G=b[M],V=Array.isArray(G.value)?G.value:[G.value];for(let q=0,ee=V.length;q<ee;q++){const $=V[q],le=x($),z=_%A,de=z%le.boundary,ue=z+de;_+=de,ue!==0&&A-ue<le.storage&&(_+=A-ue),G.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=le.storage}}}const E=_%A;return E>0&&(_+=A-E),v.__size=_,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class x1{constructor(e={}){const{canvas:t=rm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=bs,this.toneMappingExposure=1;const _=this;let A=!1,E=0,R=0,P=null,b=-1,M=null;const D=new At,G=new At;let V=null;const q=new ut(0);let ee=0,$=t.width,le=t.height,z=1,de=null,ue=null;const Te=new At(0,0,$,le),Ge=new At(0,0,$,le);let qe=!1;const te=new Nu;let ne=!1,ve=!1;const pe=new ht,ke=new ht,ze=new I,Oe=new At,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function xe(){return P===null?z:1}let N=n;function he(L,W){return t.getContext(L,W)}try{const L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Su}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Se,!1),N===null){const W="webgl2";if(N=he(W,L),N===null)throw he(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let j,F,Y,_e,me,C,T,B,ae,ge,se,Le,be,Ie,ot,H,Ce,De,Qe,Ue,U,J,Re,k;function ye(){j=new b_(N),j.init(),J=new a1(N,j),F=new g_(N,j,e,J),Y=new s1(N,j),F.reverseDepthBuffer&&f&&Y.buffers.depth.setReversed(!0),_e=new E_(N),me=new Gv,C=new o1(N,j,Y,me,F,J,_e),T=new __(_),B=new M_(_),ae=new Im(N),Re=new p_(N,ae),ge=new w_(N,ae,_e,Re),se=new A_(N,ge,ae,_e),Qe=new T_(N,F,C),H=new x_(me),Le=new Vv(_,T,B,j,F,Re,H),be=new m1(_,me),Ie=new Xv,ot=new Zv(j),De=new d_(_,T,B,Y,se,d,c),Ce=new n1(_,se,F),k=new g1(N,_e,F,Y),Ue=new m_(N,j,_e),U=new S_(N,j,_e),_e.programs=Le.programs,_.capabilities=F,_.extensions=j,_.properties=me,_.renderLists=Ie,_.shadowMap=Ce,_.state=Y,_.info=_e}ye();const K=new d1(_,N);this.xr=K,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const L=j.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=j.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize($,le,!1))},this.getSize=function(L){return L.set($,le)},this.setSize=function(L,W,ie=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=L,le=W,t.width=Math.floor(L*z),t.height=Math.floor(W*z),ie===!0&&(t.style.width=L+"px",t.style.height=W+"px"),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set($*z,le*z).floor()},this.setDrawingBufferSize=function(L,W,ie){$=L,le=W,z=ie,t.width=Math.floor(L*ie),t.height=Math.floor(W*ie),this.setViewport(0,0,L,W)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(Te)},this.setViewport=function(L,W,ie,Q){L.isVector4?Te.set(L.x,L.y,L.z,L.w):Te.set(L,W,ie,Q),Y.viewport(D.copy(Te).multiplyScalar(z).round())},this.getScissor=function(L){return L.copy(Ge)},this.setScissor=function(L,W,ie,Q){L.isVector4?Ge.set(L.x,L.y,L.z,L.w):Ge.set(L,W,ie,Q),Y.scissor(G.copy(Ge).multiplyScalar(z).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(L){Y.setScissorTest(qe=L)},this.setOpaqueSort=function(L){de=L},this.setTransparentSort=function(L){ue=L},this.getClearColor=function(L){return L.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(L=!0,W=!0,ie=!0){let Q=0;if(L){let X=!1;if(P!==null){const Pe=P.texture.format;X=Pe===Lu||Pe===Pu||Pe===Cu}if(X){const Pe=P.texture.type,Be=Pe===is||Pe===Ys||Pe===No||Pe===Fr||Pe===Tu||Pe===Au,Ye=De.getClearColor(),Ke=De.getClearAlpha(),at=Ye.r,lt=Ye.g,O=Ye.b;Be?(g[0]=at,g[1]=lt,g[2]=O,g[3]=Ke,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=at,x[1]=lt,x[2]=O,x[3]=Ke,N.clearBufferiv(N.COLOR,0,x))}else Q|=N.COLOR_BUFFER_BIT}W&&(Q|=N.DEPTH_BUFFER_BIT),ie&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ie.dispose(),ot.dispose(),me.dispose(),T.dispose(),B.dispose(),se.dispose(),Re.dispose(),k.dispose(),Le.dispose(),K.dispose(),K.removeEventListener("sessionstart",ni),K.removeEventListener("sessionend",zn),ii.stop()};function ce(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const L=_e.autoReset,W=Ce.enabled,ie=Ce.autoUpdate,Q=Ce.needsUpdate,X=Ce.type;ye(),_e.autoReset=L,Ce.enabled=W,Ce.autoUpdate=ie,Ce.needsUpdate=Q,Ce.type=X}function Se(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Je(L){const W=L.target;W.removeEventListener("dispose",Je),Ct(W)}function Ct(L){Zt(L),me.remove(L)}function Zt(L){const W=me.get(L).programs;W!==void 0&&(W.forEach(function(ie){Le.releaseProgram(ie)}),L.isShaderMaterial&&Le.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,ie,Q,X,Pe){W===null&&(W=Ve);const Be=X.isMesh&&X.matrixWorld.determinant()<0,Ye=si(L,W,ie,Q,X);Y.setMaterial(Q,Be);let Ke=ie.index,at=1;if(Q.wireframe===!0){if(Ke=ge.getWireframeAttribute(ie),Ke===void 0)return;at=2}const lt=ie.drawRange,O=ie.attributes.position;let re=lt.start*at,Me=(lt.start+lt.count)*at;Pe!==null&&(re=Math.max(re,Pe.start*at),Me=Math.min(Me,(Pe.start+Pe.count)*at)),Ke!==null?(re=Math.max(re,0),Me=Math.min(Me,Ke.count)):O!=null&&(re=Math.max(re,0),Me=Math.min(Me,O.count));const Ne=Me-re;if(Ne<0||Ne===1/0)return;Re.setup(X,Q,Ye,ie,Ke);let dt,pt=Ue;if(Ke!==null&&(dt=ae.get(Ke),pt=U,pt.setIndex(dt)),X.isMesh)Q.wireframe===!0?(Y.setLineWidth(Q.wireframeLinewidth*xe()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(X.isLine){let je=Q.linewidth;je===void 0&&(je=1),Y.setLineWidth(je*xe()),X.isLineSegments?pt.setMode(N.LINES):X.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else X.isPoints?pt.setMode(N.POINTS):X.isSprite&&pt.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)pt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))pt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const je=X._multiDrawStarts,nn=X._multiDrawCounts,St=X._multiDrawCount,di=Ke?ae.get(Ke).bytesPerElement:1,nr=me.get(Q).currentProgram.getUniforms();for(let Xn=0;Xn<St;Xn++)nr.setValue(N,"_gl_DrawID",Xn),pt.render(je[Xn]/di,nn[Xn])}else if(X.isInstancedMesh)pt.renderInstances(re,Ne,X.count);else if(ie.isInstancedBufferGeometry){const je=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,nn=Math.min(ie.instanceCount,je);pt.renderInstances(re,Ne,nn)}else pt.render(re,Ne)};function Mt(L,W,ie){L.transparent===!0&&L.side===Bt&&L.forceSinglePass===!1?(L.side=Tn,L.needsUpdate=!0,Ts(L,W,ie),L.side=ns,L.needsUpdate=!0,Ts(L,W,ie),L.side=Bt):Ts(L,W,ie)}this.compile=function(L,W,ie=null){ie===null&&(ie=L),p=ot.get(ie),p.init(W),y.push(p),ie.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),L!==ie&&L.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const Q=new Set;return L.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Pe=X.material;if(Pe)if(Array.isArray(Pe))for(let Be=0;Be<Pe.length;Be++){const Ye=Pe[Be];Mt(Ye,ie,X),Q.add(Ye)}else Mt(Pe,ie,X),Q.add(Pe)}),y.pop(),p=null,Q},this.compileAsync=function(L,W,ie=null){const Q=this.compile(L,W,ie);return new Promise(X=>{function Pe(){if(Q.forEach(function(Be){me.get(Be).currentProgram.isReady()&&Q.delete(Be)}),Q.size===0){X(L);return}setTimeout(Pe,10)}j.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Pn=null;function gt(L){Pn&&Pn(L)}function ni(){ii.stop()}function zn(){ii.start()}const ii=new ap;ii.setAnimationLoop(gt),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(L){Pn=L,K.setAnimationLoop(L),L===null?ii.stop():ii.start()},K.addEventListener("sessionstart",ni),K.addEventListener("sessionend",zn),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(W),W=K.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,W,P),p=ot.get(L,y.length),p.init(W),y.push(p),ke.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),te.setFromProjectionMatrix(ke),ve=this.localClippingEnabled,ne=H.init(this.clippingPlanes,ve),m=Ie.get(L,v.length),m.init(),v.push(m),K.enabled===!0&&K.isPresenting===!0){const Pe=_.xr.getDepthSensingMesh();Pe!==null&&Fi(Pe,W,-1/0,_.sortObjects)}Fi(L,W,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(de,ue),fe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,fe&&De.addToRenderList(m,L),this.info.render.frame++,ne===!0&&H.beginShadows();const ie=p.state.shadowsArray;Ce.render(ie,L,W),ne===!0&&H.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){const Pe=W.cameras;if(X.length>0)for(let Be=0,Ye=Pe.length;Be<Ye;Be++){const Ke=Pe[Be];Jr(Q,X,L,Ke)}fe&&De.render(L);for(let Be=0,Ye=Pe.length;Be<Ye;Be++){const Ke=Pe[Be];er(m,L,Ke,Ke.viewport)}}else X.length>0&&Jr(Q,X,L,W),fe&&De.render(L),er(m,L,W);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),L.isScene===!0&&L.onAfterRender(_,L,W),Re.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ne===!0&&H.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Fi(L,W,ie,Q){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)ie=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||te.intersectsSprite(L)){Q&&Oe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ke);const Be=se.update(L),Ye=L.material;Ye.visible&&m.push(L,Be,Ye,ie,Oe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||te.intersectsObject(L))){const Be=se.update(L),Ye=L.material;if(Q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Oe.copy(L.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Oe.copy(Be.boundingSphere.center)),Oe.applyMatrix4(L.matrixWorld).applyMatrix4(ke)),Array.isArray(Ye)){const Ke=Be.groups;for(let at=0,lt=Ke.length;at<lt;at++){const O=Ke[at],re=Ye[O.materialIndex];re&&re.visible&&m.push(L,Be,re,ie,Oe.z,O)}}else Ye.visible&&m.push(L,Be,Ye,ie,Oe.z,null)}}const Pe=L.children;for(let Be=0,Ye=Pe.length;Be<Ye;Be++)Fi(Pe[Be],W,ie,Q)}function er(L,W,ie,Q){const X=L.opaque,Pe=L.transmissive,Be=L.transparent;p.setupLightsView(ie),ne===!0&&H.setGlobalState(_.clippingPlanes,ie),Q&&Y.viewport(D.copy(Q)),X.length>0&&Ei(X,W,ie),Pe.length>0&&Ei(Pe,W,ie),Be.length>0&&Ei(Be,W,ie),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function Jr(L,W,ie,Q){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Q.id]===void 0&&(p.state.transmissionRenderTarget[Q.id]=new $s(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?Go:is,minFilter:Ji,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Pe=p.state.transmissionRenderTarget[Q.id],Be=Q.viewport||D;Pe.setSize(Be.z,Be.w);const Ye=_.getRenderTarget();_.setRenderTarget(Pe),_.getClearColor(q),ee=_.getClearAlpha(),ee<1&&_.setClearColor(16777215,.5),_.clear(),fe&&De.render(ie);const Ke=_.toneMapping;_.toneMapping=bs;const at=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),p.setupLightsView(Q),ne===!0&&H.setGlobalState(_.clippingPlanes,Q),Ei(L,ie,Q),C.updateMultisampleRenderTarget(Pe),C.updateRenderTargetMipmap(Pe),j.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let O=0,re=W.length;O<re;O++){const Me=W[O],Ne=Me.object,dt=Me.geometry,pt=Me.material,je=Me.group;if(pt.side===Bt&&Ne.layers.test(Q.layers)){const nn=pt.side;pt.side=Tn,pt.needsUpdate=!0,Qr(Ne,ie,Q,dt,pt,je),pt.side=nn,pt.needsUpdate=!0,lt=!0}}lt===!0&&(C.updateMultisampleRenderTarget(Pe),C.updateRenderTargetMipmap(Pe))}_.setRenderTarget(Ye),_.setClearColor(q,ee),at!==void 0&&(Q.viewport=at),_.toneMapping=Ke}function Ei(L,W,ie){const Q=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Pe=L.length;X<Pe;X++){const Be=L[X],Ye=Be.object,Ke=Be.geometry,at=Q===null?Be.material:Q,lt=Be.group;Ye.layers.test(ie.layers)&&Qr(Ye,W,ie,Ke,at,lt)}}function Qr(L,W,ie,Q,X,Pe){L.onBeforeRender(_,W,ie,Q,X,Pe),L.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),X.onBeforeRender(_,W,ie,Q,L,Pe),X.transparent===!0&&X.side===Bt&&X.forceSinglePass===!1?(X.side=Tn,X.needsUpdate=!0,_.renderBufferDirect(ie,W,Q,X,L,Pe),X.side=ns,X.needsUpdate=!0,_.renderBufferDirect(ie,W,Q,X,L,Pe),X.side=Bt):_.renderBufferDirect(ie,W,Q,X,L,Pe),L.onAfterRender(_,W,ie,Q,X,Pe)}function Ts(L,W,ie){W.isScene!==!0&&(W=Ve);const Q=me.get(L),X=p.state.lights,Pe=p.state.shadowsArray,Be=X.state.version,Ye=Le.getParameters(L,X.state,Pe,W,ie),Ke=Le.getProgramCacheKey(Ye);let at=Q.programs;Q.environment=L.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(L.isMeshStandardMaterial?B:T).get(L.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,at===void 0&&(L.addEventListener("dispose",Je),at=new Map,Q.programs=at);let lt=at.get(Ke);if(lt!==void 0){if(Q.currentProgram===lt&&Q.lightsStateVersion===Be)return tr(L,Ye),lt}else Ye.uniforms=Le.getUniforms(L),L.onBeforeCompile(Ye,_),lt=Le.acquireProgram(Ye,Ke),at.set(Ke,lt),Q.uniforms=Ye.uniforms;const O=Q.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(O.clippingPlanes=H.uniform),tr(L,Ye),Q.needsLights=eo(L),Q.lightsStateVersion=Be,Q.needsLights&&(O.ambientLightColor.value=X.state.ambient,O.lightProbe.value=X.state.probe,O.directionalLights.value=X.state.directional,O.directionalLightShadows.value=X.state.directionalShadow,O.spotLights.value=X.state.spot,O.spotLightShadows.value=X.state.spotShadow,O.rectAreaLights.value=X.state.rectArea,O.ltc_1.value=X.state.rectAreaLTC1,O.ltc_2.value=X.state.rectAreaLTC2,O.pointLights.value=X.state.point,O.pointLightShadows.value=X.state.pointShadow,O.hemisphereLights.value=X.state.hemi,O.directionalShadowMap.value=X.state.directionalShadowMap,O.directionalShadowMatrix.value=X.state.directionalShadowMatrix,O.spotShadowMap.value=X.state.spotShadowMap,O.spotLightMatrix.value=X.state.spotLightMatrix,O.spotLightMap.value=X.state.spotLightMap,O.pointShadowMap.value=X.state.pointShadowMap,O.pointShadowMatrix.value=X.state.pointShadowMatrix),Q.currentProgram=lt,Q.uniformsList=null,lt}function As(L){if(L.uniformsList===null){const W=L.currentProgram.getUniforms();L.uniformsList=Va.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function tr(L,W){const ie=me.get(L);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.batchingColor=W.batchingColor,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function si(L,W,ie,Q,X){W.isScene!==!0&&(W=Ve),C.resetTextureUnits();const Pe=W.fog,Be=Q.isMeshStandardMaterial?W.environment:null,Ye=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fn,Ke=(Q.isMeshStandardMaterial?B:T).get(Q.envMap||Be),at=Q.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,lt=!!ie.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),O=!!ie.morphAttributes.position,re=!!ie.morphAttributes.normal,Me=!!ie.morphAttributes.color;let Ne=bs;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Ne=_.toneMapping);const dt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,pt=dt!==void 0?dt.length:0,je=me.get(Q),nn=p.state.lights;if(ne===!0&&(ve===!0||L!==M)){const ri=L===M&&Q.id===b;H.setState(Q,L,ri)}let St=!1;Q.version===je.__version?(je.needsLights&&je.lightsStateVersion!==nn.state.version||je.outputColorSpace!==Ye||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isBatchedMesh&&je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&je.instancingMorph===!1&&X.morphTexture!==null||je.envMap!==Ke||Q.fog===!0&&je.fog!==Pe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==H.numPlanes||je.numIntersection!==H.numIntersection)||je.vertexAlphas!==at||je.vertexTangents!==lt||je.morphTargets!==O||je.morphNormals!==re||je.morphColors!==Me||je.toneMapping!==Ne||je.morphTargetsCount!==pt)&&(St=!0):(St=!0,je.__version=Q.version);let di=je.currentProgram;St===!0&&(di=Ts(Q,W,X));let nr=!1,Xn=!1,to=!1;const Ht=di.getUniforms(),Ti=je.uniforms;if(Y.useProgram(di.program)&&(nr=!0,Xn=!0,to=!0),Q.id!==b&&(b=Q.id,Xn=!0),nr||M!==L){Y.buffers.depth.getReversed()?(pe.copy(L.projectionMatrix),am(pe),cm(pe),Ht.setValue(N,"projectionMatrix",pe)):Ht.setValue(N,"projectionMatrix",L.projectionMatrix),Ht.setValue(N,"viewMatrix",L.matrixWorldInverse);const ss=Ht.map.cameraPosition;ss!==void 0&&ss.setValue(N,ze.setFromMatrixPosition(L.matrixWorld)),F.logarithmicDepthBuffer&&Ht.setValue(N,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ht.setValue(N,"isOrthographic",L.isOrthographicCamera===!0),M!==L&&(M=L,Xn=!0,to=!0)}if(X.isSkinnedMesh){Ht.setOptional(N,X,"bindMatrix"),Ht.setOptional(N,X,"bindMatrixInverse");const ri=X.skeleton;ri&&(ri.boneTexture===null&&ri.computeBoneTexture(),Ht.setValue(N,"boneTexture",ri.boneTexture,C))}X.isBatchedMesh&&(Ht.setOptional(N,X,"batchingTexture"),Ht.setValue(N,"batchingTexture",X._matricesTexture,C),Ht.setOptional(N,X,"batchingIdTexture"),Ht.setValue(N,"batchingIdTexture",X._indirectTexture,C),Ht.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&Ht.setValue(N,"batchingColorTexture",X._colorsTexture,C));const no=ie.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0)&&Qe.update(X,ie,di),(Xn||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,Ht.setValue(N,"receiveShadow",X.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Ti.envMap.value=Ke,Ti.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Ti.envMapIntensity.value=W.environmentIntensity),Xn&&(Ht.setValue(N,"toneMappingExposure",_.toneMappingExposure),je.needsLights&&Bi(Ti,to),Pe&&Q.fog===!0&&be.refreshFogUniforms(Ti,Pe),be.refreshMaterialUniforms(Ti,Q,z,le,p.state.transmissionRenderTarget[L.id]),Va.upload(N,As(je),Ti,C)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Va.upload(N,As(je),Ti,C),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ht.setValue(N,"center",X.center),Ht.setValue(N,"modelViewMatrix",X.modelViewMatrix),Ht.setValue(N,"normalMatrix",X.normalMatrix),Ht.setValue(N,"modelMatrix",X.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ri=Q.uniformsGroups;for(let ss=0,rs=ri.length;ss<rs;ss++){const sh=ri[ss];k.update(sh,di),k.bind(sh,di)}}return di}function Bi(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function eo(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(L,W,ie){me.get(L.texture).__webglTexture=W,me.get(L.depthTexture).__webglTexture=ie;const Q=me.get(L);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=ie===void 0,Q.__autoAllocateDepthBuffer||j.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,W){const ie=me.get(L);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,ie=0){P=L,E=W,R=ie;let Q=!0,X=null,Pe=!1,Be=!1;if(L){const Ke=me.get(L);if(Ke.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(N.FRAMEBUFFER,null),Q=!1;else if(Ke.__webglFramebuffer===void 0)C.setupRenderTarget(L);else if(Ke.__hasExternalTextures)C.rebindTextures(L,me.get(L.texture).__webglTexture,me.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const O=L.depthTexture;if(Ke.__boundDepthTexture!==O){if(O!==null&&me.has(O)&&(L.width!==O.image.width||L.height!==O.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(L)}}const at=L.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Be=!0);const lt=me.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(lt[W])?X=lt[W][ie]:X=lt[W],Pe=!0):L.samples>0&&C.useMultisampledRTT(L)===!1?X=me.get(L).__webglMultisampledFramebuffer:Array.isArray(lt)?X=lt[ie]:X=lt,D.copy(L.viewport),G.copy(L.scissor),V=L.scissorTest}else D.copy(Te).multiplyScalar(z).floor(),G.copy(Ge).multiplyScalar(z).floor(),V=qe;if(Y.bindFramebuffer(N.FRAMEBUFFER,X)&&Q&&Y.drawBuffers(L,X),Y.viewport(D),Y.scissor(G),Y.setScissorTest(V),Pe){const Ke=me.get(L.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ke.__webglTexture,ie)}else if(Be){const Ke=me.get(L.texture),at=W||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ke.__webglTexture,ie||0,at)}b=-1},this.readRenderTargetPixels=function(L,W,ie,Q,X,Pe,Be){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Be!==void 0&&(Ye=Ye[Be]),Ye){Y.bindFramebuffer(N.FRAMEBUFFER,Ye);try{const Ke=L.texture,at=Ke.format,lt=Ke.type;if(!F.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-Q&&ie>=0&&ie<=L.height-X&&N.readPixels(W,ie,Q,X,J.convert(at),J.convert(lt),Pe)}finally{const Ke=P!==null?me.get(P).__webglFramebuffer:null;Y.bindFramebuffer(N.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(L,W,ie,Q,X,Pe,Be){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Be!==void 0&&(Ye=Ye[Be]),Ye){const Ke=L.texture,at=Ke.format,lt=Ke.type;if(!F.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=L.width-Q&&ie>=0&&ie<=L.height-X){Y.bindFramebuffer(N.FRAMEBUFFER,Ye);const O=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,O),N.bufferData(N.PIXEL_PACK_BUFFER,Pe.byteLength,N.STREAM_READ),N.readPixels(W,ie,Q,X,J.convert(at),J.convert(lt),0);const re=P!==null?me.get(P).__webglFramebuffer:null;Y.bindFramebuffer(N.FRAMEBUFFER,re);const Me=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await om(N,Me,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,O),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Pe),N.deleteBuffer(O),N.deleteSync(Me),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,W=null,ie=0){L.isTexture!==!0&&(So("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,L=arguments[1]);const Q=Math.pow(2,-ie),X=Math.floor(L.image.width*Q),Pe=Math.floor(L.image.height*Q),Be=W!==null?W.x:0,Ye=W!==null?W.y:0;C.setTexture2D(L,0),N.copyTexSubImage2D(N.TEXTURE_2D,ie,0,0,Be,Ye,X,Pe),Y.unbindTexture()},this.copyTextureToTexture=function(L,W,ie=null,Q=null,X=0){L.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,L=arguments[1],W=arguments[2],X=arguments[3]||0,ie=null);let Pe,Be,Ye,Ke,at,lt,O,re,Me;const Ne=L.isCompressedTexture?L.mipmaps[X]:L.image;ie!==null?(Pe=ie.max.x-ie.min.x,Be=ie.max.y-ie.min.y,Ye=ie.isBox3?ie.max.z-ie.min.z:1,Ke=ie.min.x,at=ie.min.y,lt=ie.isBox3?ie.min.z:0):(Pe=Ne.width,Be=Ne.height,Ye=Ne.depth||1,Ke=0,at=0,lt=0),Q!==null?(O=Q.x,re=Q.y,Me=Q.z):(O=0,re=0,Me=0);const dt=J.convert(W.format),pt=J.convert(W.type);let je;W.isData3DTexture?(C.setTexture3D(W,0),je=N.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(C.setTexture2DArray(W,0),je=N.TEXTURE_2D_ARRAY):(C.setTexture2D(W,0),je=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,W.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,W.unpackAlignment);const nn=N.getParameter(N.UNPACK_ROW_LENGTH),St=N.getParameter(N.UNPACK_IMAGE_HEIGHT),di=N.getParameter(N.UNPACK_SKIP_PIXELS),nr=N.getParameter(N.UNPACK_SKIP_ROWS),Xn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ne.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ne.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,at),N.pixelStorei(N.UNPACK_SKIP_IMAGES,lt);const to=L.isDataArrayTexture||L.isData3DTexture,Ht=W.isDataArrayTexture||W.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const Ti=me.get(L),no=me.get(W),ri=me.get(Ti.__renderTarget),ss=me.get(no.__renderTarget);Y.bindFramebuffer(N.READ_FRAMEBUFFER,ri.__webglFramebuffer),Y.bindFramebuffer(N.DRAW_FRAMEBUFFER,ss.__webglFramebuffer);for(let rs=0;rs<Ye;rs++)to&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,me.get(L).__webglTexture,X,lt+rs),L.isDepthTexture?(Ht&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,me.get(W).__webglTexture,X,Me+rs),N.blitFramebuffer(Ke,at,Pe,Be,O,re,Pe,Be,N.DEPTH_BUFFER_BIT,N.NEAREST)):Ht?N.copyTexSubImage3D(je,X,O,re,Me+rs,Ke,at,Pe,Be):N.copyTexSubImage2D(je,X,O,re,Me+rs,Ke,at,Pe,Be);Y.bindFramebuffer(N.READ_FRAMEBUFFER,null),Y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ht?L.isDataTexture||L.isData3DTexture?N.texSubImage3D(je,X,O,re,Me,Pe,Be,Ye,dt,pt,Ne.data):W.isCompressedArrayTexture?N.compressedTexSubImage3D(je,X,O,re,Me,Pe,Be,Ye,dt,Ne.data):N.texSubImage3D(je,X,O,re,Me,Pe,Be,Ye,dt,pt,Ne):L.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,X,O,re,Pe,Be,dt,pt,Ne.data):L.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,X,O,re,Ne.width,Ne.height,dt,Ne.data):N.texSubImage2D(N.TEXTURE_2D,X,O,re,Pe,Be,dt,pt,Ne);N.pixelStorei(N.UNPACK_ROW_LENGTH,nn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St),N.pixelStorei(N.UNPACK_SKIP_PIXELS,di),N.pixelStorei(N.UNPACK_SKIP_ROWS,nr),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Xn),X===0&&W.generateMipmaps&&N.generateMipmap(je),Y.unbindTexture()},this.copyTextureToTexture3D=function(L,W,ie=null,Q=null,X=0){return L.isTexture!==!0&&(So("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ie=arguments[0]||null,Q=arguments[1]||null,L=arguments[2],W=arguments[3],X=arguments[4]||0),So('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,W,ie,Q,X)},this.initRenderTarget=function(L){me.get(L).__webglFramebuffer===void 0&&C.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?C.setTextureCube(L,0):L.isData3DTexture?C.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?C.setTexture2DArray(L,0):C.setTexture2D(L,0),Y.unbindTexture()},this.resetState=function(){E=0,R=0,P=null,Y.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}class Ou{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ut(e),this.near=t,this.far=n}clone(){return new Ou(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class dp extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=lu,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ln=new I;class Fo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyMatrix4(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.applyNormalMatrix(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ln.fromBufferAttribute(this,t),Ln.transformDirection(e),this.setXYZ(t,Ln.x,Ln.y,Ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),s=Lt(s,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new An(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Es extends bi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xr;const ao=new I,_r=new I,vr=new I,yr=new we,co=new we,mp=new ht,ma=new I,lo=new I,ga=new I,of=new we,zc=new we,af=new we;class Ks extends Ot{constructor(e=new Es){if(super(),this.isSprite=!0,this.type="Sprite",xr===void 0){xr=new Gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pp(t,5);xr.setIndex([0,1,2,0,2,3]),xr.setAttribute("position",new Fo(n,3,0,!1)),xr.setAttribute("uv",new Fo(n,2,3,!1))}this.geometry=xr,this.material=e,this.center=new we(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_r.setFromMatrixScale(this.matrixWorld),mp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_r.multiplyScalar(-vr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;xa(ma.set(-.5,-.5,0),vr,o,_r,s,r),xa(lo.set(.5,-.5,0),vr,o,_r,s,r),xa(ga.set(.5,.5,0),vr,o,_r,s,r),of.set(0,0),zc.set(1,0),af.set(1,1);let a=e.ray.intersectTriangle(ma,lo,ga,!1,ao);if(a===null&&(xa(lo.set(-.5,.5,0),vr,o,_r,s,r),zc.set(0,1),a=e.ray.intersectTriangle(ma,ga,lo,!1,ao),a===null))return;const c=e.ray.origin.distanceTo(ao);c<e.near||c>e.far||t.push({distance:c,point:ao.clone(),uv:ui.getInterpolation(ao,ma,lo,ga,of,zc,af,new we),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function xa(i,e,t,n,s,r){yr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(co.x=r*yr.x-s*yr.y,co.y=s*yr.x+r*yr.y):co.copy(yr),i.copy(e),i.x+=co.x,i.y+=co.y,i.applyMatrix4(mp)}const cf=new I,lf=new At,uf=new At,_1=new I,hf=new ht,_a=new I,Hc=new Ni,ff=new ht,Vc=new Wo;class v1 extends Ee{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ch,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Di),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingBox.expandByPoint(_a)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,_a),this.boundingSphere.expandByPoint(_a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hc.copy(this.boundingSphere),Hc.applyMatrix4(s),e.ray.intersectsSphere(Hc)!==!1&&(ff.copy(s).invert(),Vc.copy(e.ray).applyMatrix4(ff),!(this.boundingBox!==null&&Vc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===C0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;lf.fromBufferAttribute(s.attributes.skinIndex,e),uf.fromBufferAttribute(s.attributes.skinWeight,e),cf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=uf.getComponent(r);if(o!==0){const a=lf.getComponent(r);hf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_1.copy(cf).applyMatrix4(hf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class gp extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class xp extends on{constructor(e=null,t=1,n=1,s,r,o,a,c,l=On,u=On,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const df=new ht,y1=new ht;class Fu{constructor(e=[],t=[]){this.uuid=fi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ht;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:y1;df.multiplyMatrices(a,t[r]),df.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Fu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new xp(t,e,e,hi,Mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new gp),this.bones.push(o),this.boneInverses.push(new ht().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class fu extends An{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Mr=new ht,pf=new ht,va=[],mf=new Di,M1=new ht,uo=new Ee,ho=new Ni;class b1 extends Ee{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,M1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),mf.copy(e.boundingBox).applyMatrix4(Mr),this.boundingBox.union(mf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Mr),ho.copy(e.boundingSphere).applyMatrix4(Mr),this.boundingSphere.union(ho)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(uo.geometry=this.geometry,uo.material=this.material,uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ho.copy(this.boundingSphere),ho.applyMatrix4(n),e.ray.intersectsSphere(ho)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Mr),pf.multiplyMatrices(n,Mr),uo.matrixWorld=pf,uo.raycast(e,va);for(let o=0,a=va.length;o<a;o++){const c=va[o];c.instanceId=r,c.object=this,t.push(c)}va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xp(new Float32Array(s*this.count),s,this.count,Ru,Mi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Bu extends bi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qa=new I,Ya=new I,gf=new ht,fo=new Wo,ya=new Ni,Gc=new I,xf=new I;class zu extends Ot{constructor(e=new Gt,t=new Bu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)qa.fromBufferAttribute(t,s-1),Ya.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=qa.distanceTo(Ya);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(s),ya.radius+=r,e.ray.intersectsSphere(ya)===!1)return;gf.copy(s).invert(),fo.copy(e.ray).applyMatrix4(gf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){const p=u.getX(x),v=u.getX(x+1),y=Ma(this,e,fo,c,p,v);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(d),p=Ma(this,e,fo,c,x,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){const p=Ma(this,e,fo,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=Ma(this,e,fo,c,g-1,d);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ma(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(qa.fromBufferAttribute(o,s),Ya.fromBufferAttribute(o,r),t.distanceSqToSegment(qa,Ya,Gc,xf)>n)return;Gc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Gc);if(!(c<e.near||c>e.far))return{distance:c,point:xf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const _f=new I,vf=new I;class w1 extends zu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_f.fromBufferAttribute(t,s),vf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_f.distanceTo(vf);e.setAttribute("lineDistance",new _t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _p extends zu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vp extends bi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yf=new ht,du=new Wo,ba=new Ni,wa=new I;class S1 extends Ot{constructor(e=new Gt,t=new vp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),ba.radius+=r,e.ray.intersectsSphere(ba)===!1)return;yf.copy(s).invert(),du.copy(e.ray).applyMatrix4(yf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const m=l.getX(g);wa.fromBufferAttribute(h,m),Mf(wa,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)wa.fromBufferAttribute(h,g),Mf(wa,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mf(i,e,t,n,s,r,o){const a=du.distanceSqToPoint(i);if(a<t){const c=new I;du.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Cn extends on{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new we:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new I,s=[],r=[],o=[],a=new I,c=new ht;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(rn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(rn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Hu extends Ui{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new we){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class E1 extends Hu{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Vu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Sa=new I,Wc=new Vu,Xc=new Vu,qc=new Vu;class yp extends Ui{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Sa.subVectors(s[0],s[1]).add(s[0]),l=Sa);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Sa.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Sa),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Wc.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,x,m),Xc.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,x,m),qc.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Wc.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Xc.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),qc.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Wc.calc(c),Xc.calc(c),qc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function bf(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function T1(i,e){const t=1-i;return t*t*e}function A1(i,e){return 2*(1-i)*i*e}function R1(i,e){return i*i*e}function Po(i,e,t,n){return T1(i,e)+A1(i,t)+R1(i,n)}function C1(i,e){const t=1-i;return t*t*t*e}function P1(i,e){const t=1-i;return 3*t*t*i*e}function L1(i,e){return 3*(1-i)*i*i*e}function I1(i,e){return i*i*i*e}function Lo(i,e,t,n,s){return C1(i,e)+P1(i,t)+L1(i,n)+I1(i,s)}class Mp extends Ui{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lo(e,s.x,r.x,o.x,a.x),Lo(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class D1 extends Ui{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Lo(e,s.x,r.x,o.x,a.x),Lo(e,s.y,r.y,o.y,a.y),Lo(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bp extends Ui{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N1 extends Ui{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class wp extends Ui{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gu extends Ui{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Po(e,s.x,r.x,o.x),Po(e,s.y,r.y,o.y),Po(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sp extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(bf(a,c.x,l.x,u.x,h.x),bf(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new we().fromArray(s))}return this}}var $a=Object.freeze({__proto__:null,ArcCurve:E1,CatmullRomCurve3:yp,CubicBezierCurve:Mp,CubicBezierCurve3:D1,EllipseCurve:Hu,LineCurve:bp,LineCurve3:N1,QuadraticBezierCurve:wp,QuadraticBezierCurve3:Gu,SplineCurve:Sp});class U1 extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $a[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new $a[s.type]().fromJSON(s))}return this}}class pu extends U1{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new bp(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new wp(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new Mp(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Sp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Hu(e,t,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qr extends Gt{constructor(e=[new we(0,-.5),new we(.5,0),new we(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=rn(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,h=new I,f=new we,d=new I,g=new I,x=new I;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let v=0;v<=t;v++){const y=n+v*u*s,_=Math.sin(y),A=Math.cos(y);for(let E=0;E<=e.length-1;E++){h.x=e[E].x*_,h.y=e[E].y,h.z=e[E].x*A,o.push(h.x,h.y,h.z),f.x=v/t,f.y=E/(e.length-1),a.push(f.x,f.y);const R=c[3*E+0]*_,P=c[3*E+1],b=c[3*E+0]*A;l.push(R,P,b)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const _=y+v*e.length,A=_,E=_+e.length,R=_+e.length+1,P=_+1;r.push(A,E,P),r.push(R,P,E)}this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("uv",new _t(a,2)),this.setAttribute("normal",new _t(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.points,e.segments,e.phiStart,e.phiLength)}}class Wu extends qr{constructor(e=1,t=1,n=4,s=8){const r=new pu;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Wu(e.radius,e.length,e.capSegments,e.radialSegments)}}class ei extends Gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new I,u=new we;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(a,3)),this.setAttribute("uv",new _t(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jn extends Gt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(d,2));function v(){const _=new I,A=new I;let E=0;const R=(t-e)/n;for(let P=0;P<=r;P++){const b=[],M=P/r,D=M*(t-e)+e;for(let G=0;G<=s;G++){const V=G/s,q=V*c+a,ee=Math.sin(q),$=Math.cos(q);A.x=D*ee,A.y=-M*n+m,A.z=D*$,h.push(A.x,A.y,A.z),_.set(ee,R,$).normalize(),f.push(_.x,_.y,_.z),d.push(V,1-M),b.push(g++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){const M=x[b][P],D=x[b+1][P],G=x[b+1][P+1],V=x[b][P+1];(e>0||b!==0)&&(u.push(M,D,V),E+=3),(t>0||b!==r-1)&&(u.push(D,G,V),E+=3)}l.addGroup(p,E,0),p+=E}function y(_){const A=g,E=new we,R=new I;let P=0;const b=_===!0?e:t,M=_===!0?1:-1;for(let G=1;G<=s;G++)h.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),g++;const D=g;for(let G=0;G<=s;G++){const q=G/s*c+a,ee=Math.cos(q),$=Math.sin(q);R.x=b*$,R.y=m*M,R.z=b*ee,h.push(R.x,R.y,R.z),f.push(0,M,0),E.x=ee*.5+.5,E.y=$*.5*M+.5,d.push(E.x,E.y),g++}for(let G=0;G<s;G++){const V=A+G,q=D+G;_===!0?u.push(q,q+1,V):u.push(q+1,q,V),P+=3}l.addGroup(p,P,_===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xu extends Jn{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Xu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qu extends Gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new _t(r,3)),this.setAttribute("normal",new _t(r.slice(),3)),this.setAttribute("uv",new _t(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new I,_=new I,A=new I;for(let E=0;E<t.length;E+=3)d(t[E+0],y),d(t[E+1],_),d(t[E+2],A),c(y,_,A,v)}function c(v,y,_,A){const E=A+1,R=[];for(let P=0;P<=E;P++){R[P]=[];const b=v.clone().lerp(_,P/E),M=y.clone().lerp(_,P/E),D=E-P;for(let G=0;G<=D;G++)G===0&&P===E?R[P][G]=b:R[P][G]=b.clone().lerp(M,G/D)}for(let P=0;P<E;P++)for(let b=0;b<2*(E-P)-1;b++){const M=Math.floor(b/2);b%2===0?(f(R[P][M+1]),f(R[P+1][M]),f(R[P][M])):(f(R[P][M+1]),f(R[P+1][M+1]),f(R[P+1][M]))}}function l(v){const y=new I;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const v=new I;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const _=m(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;o.push(_,1-A)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const y=o[v+0],_=o[v+2],A=o[v+4],E=Math.max(y,_,A),R=Math.min(y,_,A);E>.9&&R<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){const _=v*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const v=new I,y=new I,_=new I,A=new I,E=new we,R=new we,P=new we;for(let b=0,M=0;b<r.length;b+=9,M+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),_.set(r[b+6],r[b+7],r[b+8]),E.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),A.copy(v).add(y).add(_).divideScalar(3);const D=m(A);x(E,M+0,v,D),x(R,M+2,y,D),x(P,M+4,_,D)}}function x(v,y,_,A){A<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.vertices,e.indices,e.radius,e.details)}}class Xo extends pu{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new pu().fromJSON(s))}return this}}const k1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Ep(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=H1(i,e,r,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<s;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return Bo(r,o,t,a,c,d,0),o}};function Ep(i,e,t,n,s){let r,o;if(s===J1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=wf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=wf(r,i[r],i[r+1],o);return o&&nc(o,o.next)&&(Ho(o),o=o.next),o}function js(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(nc(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Ho(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Bo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&q1(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?F1(i,n,s,r):O1(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Ho(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=B1(js(i),e,t),Bo(i,e,t,n,s,r,2)):o===2&&z1(i,e,t,n,s,r):Bo(js(i),e,t,n,s,r,1);break}}}function O1(i){const e=i.prev,t=i,n=i.next;if(Wt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Cr(s,a,r,c,o,l,g.x,g.y)&&Wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function F1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Wt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,x=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=mu(d,g,e,t,n),v=mu(x,m,e,t,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Cr(a,u,c,h,l,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Cr(a,u,c,h,l,f,_.x,_.y)&&Wt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Cr(a,u,c,h,l,f,y.x,y.y)&&Wt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Cr(a,u,c,h,l,f,_.x,_.y)&&Wt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function B1(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!nc(s,r)&&Tp(s,n,n.next,r)&&zo(s,r)&&zo(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Ho(n),Ho(n.next),n=i=r),n=n.next}while(n!==i);return js(n)}function z1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K1(o,a)){let c=Ap(o,a);o=js(o,o.next),c=js(c,c.next),Bo(o,e,t,n,s,r,0),Bo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function H1(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Ep(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push($1(l));for(s.sort(V1),r=0;r<s.length;r++)t=G1(s[r],t);return t}function V1(i,e){return i.x-e.x}function G1(i,e){const t=W1(i,e);if(!t)return e;const n=Ap(t,i);return js(n,n.next),js(t,t.next)}function W1(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Cr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),zo(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&X1(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function X1(i,e){return Wt(i.prev,i,e.prev)<0&&Wt(e.next,i,i.next)<0}function q1(i,e,t,n){let s=i;do s.z===0&&(s.z=mu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Y1(s)}function Y1(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function mu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Cr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function K1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!j1(i,e)&&(zo(i,e)&&zo(e,i)&&Z1(i,e)&&(Wt(i.prev,i,e.prev)||Wt(i,e.prev,e))||nc(i,e)&&Wt(i.prev,i,i.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function nc(i,e){return i.x===e.x&&i.y===e.y}function Tp(i,e,t,n){const s=Ta(Wt(i,e,t)),r=Ta(Wt(i,e,n)),o=Ta(Wt(t,n,i)),a=Ta(Wt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ea(i,t,e)||r===0&&Ea(i,n,e)||o===0&&Ea(t,i,n)||a===0&&Ea(t,e,n))}function Ea(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ta(i){return i>0?1:i<0?-1:0}function j1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Tp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function zo(i,e){return Wt(i.prev,i,i.next)<0?Wt(i,e,i.next)>=0&&Wt(i,i.prev,e)>=0:Wt(i,e,i.prev)<0||Wt(i,i.next,e)<0}function Z1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Ap(i,e){const t=new gu(i.i,i.x,i.y),n=new gu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function wf(i,e,t,n){const s=new gu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ho(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function gu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function J1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ws{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ws.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Sf(e),Ef(n,e);let o=e.length;t.forEach(Sf);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Ef(n,t[c]);const a=k1.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Sf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ef(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ic extends Gt{constructor(e=new Xo([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new _t(s,3)),this.setAttribute("uv",new _t(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Q1;let y,_=!1,A,E,R,P;p&&(y=p.getSpacedPoints(u),_=!0,f=!1,A=p.computeFrenetFrames(u,!1),E=new I,R=new I,P=new I),f||(m=0,d=0,g=0,x=0);const b=a.extractPoints(l);let M=b.shape;const D=b.holes;if(!ws.isClockWise(M)){M=M.reverse();for(let fe=0,xe=D.length;fe<xe;fe++){const N=D[fe];ws.isClockWise(N)&&(D[fe]=N.reverse())}}const V=ws.triangulateShape(M,D),q=M;for(let fe=0,xe=D.length;fe<xe;fe++){const N=D[fe];M=M.concat(N)}function ee(fe,xe,N){return xe||console.error("THREE.ExtrudeGeometry: vec does not exist"),fe.clone().addScaledVector(xe,N)}const $=M.length,le=V.length;function z(fe,xe,N){let he,j,F;const Y=fe.x-xe.x,_e=fe.y-xe.y,me=N.x-fe.x,C=N.y-fe.y,T=Y*Y+_e*_e,B=Y*C-_e*me;if(Math.abs(B)>Number.EPSILON){const ae=Math.sqrt(T),ge=Math.sqrt(me*me+C*C),se=xe.x-_e/ae,Le=xe.y+Y/ae,be=N.x-C/ge,Ie=N.y+me/ge,ot=((be-se)*C-(Ie-Le)*me)/(Y*C-_e*me);he=se+Y*ot-fe.x,j=Le+_e*ot-fe.y;const H=he*he+j*j;if(H<=2)return new we(he,j);F=Math.sqrt(H/2)}else{let ae=!1;Y>Number.EPSILON?me>Number.EPSILON&&(ae=!0):Y<-Number.EPSILON?me<-Number.EPSILON&&(ae=!0):Math.sign(_e)===Math.sign(C)&&(ae=!0),ae?(he=-_e,j=Y,F=Math.sqrt(T)):(he=Y,j=_e,F=Math.sqrt(T/2))}return new we(he/F,j/F)}const de=[];for(let fe=0,xe=q.length,N=xe-1,he=fe+1;fe<xe;fe++,N++,he++)N===xe&&(N=0),he===xe&&(he=0),de[fe]=z(q[fe],q[N],q[he]);const ue=[];let Te,Ge=de.concat();for(let fe=0,xe=D.length;fe<xe;fe++){const N=D[fe];Te=[];for(let he=0,j=N.length,F=j-1,Y=he+1;he<j;he++,F++,Y++)F===j&&(F=0),Y===j&&(Y=0),Te[he]=z(N[he],N[F],N[Y]);ue.push(Te),Ge=Ge.concat(Te)}for(let fe=0;fe<m;fe++){const xe=fe/m,N=d*Math.cos(xe*Math.PI/2),he=g*Math.sin(xe*Math.PI/2)+x;for(let j=0,F=q.length;j<F;j++){const Y=ee(q[j],de[j],he);pe(Y.x,Y.y,-N)}for(let j=0,F=D.length;j<F;j++){const Y=D[j];Te=ue[j];for(let _e=0,me=Y.length;_e<me;_e++){const C=ee(Y[_e],Te[_e],he);pe(C.x,C.y,-N)}}}const qe=g+x;for(let fe=0;fe<$;fe++){const xe=f?ee(M[fe],Ge[fe],qe):M[fe];_?(R.copy(A.normals[0]).multiplyScalar(xe.x),E.copy(A.binormals[0]).multiplyScalar(xe.y),P.copy(y[0]).add(R).add(E),pe(P.x,P.y,P.z)):pe(xe.x,xe.y,0)}for(let fe=1;fe<=u;fe++)for(let xe=0;xe<$;xe++){const N=f?ee(M[xe],Ge[xe],qe):M[xe];_?(R.copy(A.normals[fe]).multiplyScalar(N.x),E.copy(A.binormals[fe]).multiplyScalar(N.y),P.copy(y[fe]).add(R).add(E),pe(P.x,P.y,P.z)):pe(N.x,N.y,h/u*fe)}for(let fe=m-1;fe>=0;fe--){const xe=fe/m,N=d*Math.cos(xe*Math.PI/2),he=g*Math.sin(xe*Math.PI/2)+x;for(let j=0,F=q.length;j<F;j++){const Y=ee(q[j],de[j],he);pe(Y.x,Y.y,h+N)}for(let j=0,F=D.length;j<F;j++){const Y=D[j];Te=ue[j];for(let _e=0,me=Y.length;_e<me;_e++){const C=ee(Y[_e],Te[_e],he);_?pe(C.x,C.y+y[u-1].y,y[u-1].x+N):pe(C.x,C.y,h+N)}}}te(),ne();function te(){const fe=s.length/3;if(f){let xe=0,N=$*xe;for(let he=0;he<le;he++){const j=V[he];ke(j[2]+N,j[1]+N,j[0]+N)}xe=u+m*2,N=$*xe;for(let he=0;he<le;he++){const j=V[he];ke(j[0]+N,j[1]+N,j[2]+N)}}else{for(let xe=0;xe<le;xe++){const N=V[xe];ke(N[2],N[1],N[0])}for(let xe=0;xe<le;xe++){const N=V[xe];ke(N[0]+$*u,N[1]+$*u,N[2]+$*u)}}n.addGroup(fe,s.length/3-fe,0)}function ne(){const fe=s.length/3;let xe=0;ve(q,xe),xe+=q.length;for(let N=0,he=D.length;N<he;N++){const j=D[N];ve(j,xe),xe+=j.length}n.addGroup(fe,s.length/3-fe,1)}function ve(fe,xe){let N=fe.length;for(;--N>=0;){const he=N;let j=N-1;j<0&&(j=fe.length-1);for(let F=0,Y=u+m*2;F<Y;F++){const _e=$*F,me=$*(F+1),C=xe+he+_e,T=xe+j+_e,B=xe+j+me,ae=xe+he+me;ze(C,T,B,ae)}}}function pe(fe,xe,N){c.push(fe),c.push(xe),c.push(N)}function ke(fe,xe,N){Oe(fe),Oe(xe),Oe(N);const he=s.length/3,j=v.generateTopUV(n,s,he-3,he-2,he-1);Ve(j[0]),Ve(j[1]),Ve(j[2])}function ze(fe,xe,N,he){Oe(fe),Oe(xe),Oe(he),Oe(xe),Oe(N),Oe(he);const j=s.length/3,F=v.generateSideWallUV(n,s,j-6,j-3,j-2,j-1);Ve(F[0]),Ve(F[1]),Ve(F[3]),Ve(F[1]),Ve(F[2]),Ve(F[3])}function Oe(fe){s.push(c[fe*3+0]),s.push(c[fe*3+1]),s.push(c[fe*3+2])}function Ve(fe){r.push(fe.x),r.push(fe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ey(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new $a[s.type]().fromJSON(s)),new ic(n,e.options)}}const Q1={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new we(r,o),new we(a,c),new we(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new we(o,1-c),new we(l,1-h),new we(f,1-g),new we(x,1-p)]:[new we(a,1-c),new we(u,1-h),new we(d,1-g),new we(m,1-p)]}};function ey(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class sc extends qu{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sc(e.radius,e.detail)}}class Yu extends Gt{constructor(e=new Xo([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new _t(s,3)),this.setAttribute("normal",new _t(r,3)),this.setAttribute("uv",new _t(o,2));function l(u){const h=s.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;ws.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];ws.isClockWise(v)===!0&&(g[m]=v.reverse())}const x=ws.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){const v=x[m],y=v[0]+h,_=v[1]+h,A=v[2]+h;n.push(y,_,A),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ty(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new Yu(n,e.curveSegments)}}function ty(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class Xt extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new I,f=new I,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let A=0;A<=t;A++){const E=A/t;h.x=-e*Math.cos(s+E*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+E*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(E+_,1-y),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=u[p][v+1],_=u[p][v],A=u[p+1][v],E=u[p+1][v+1];(p!==0||o>0)&&d.push(y,_,E),(p!==n-1||c<Math.PI)&&d.push(_,A,E)}this.setIndex(d),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(x,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yr extends Gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new I,h=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new _t(a,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rc extends Gt{constructor(e=new Gu(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new I,c=new I,l=new we;let u=new I;const h=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new _t(h,3)),this.setAttribute("normal",new _t(f,3)),this.setAttribute("uv",new _t(d,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),p()}function m(y){u=e.getPointAt(y/t,u);const _=o.normals[y],A=o.binormals[y];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,P=Math.sin(R),b=-Math.cos(R);c.x=b*_.x+P*A.x,c.y=b*_.y+P*A.y,c.z=b*_.z+P*A.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){const A=(s+1)*(y-1)+(_-1),E=(s+1)*y+(_-1),R=(s+1)*y+_,P=(s+1)*(y-1)+_;g.push(A,E,P),g.push(E,R,P)}}function v(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)l.x=y/t,l.y=_/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new rc(new $a[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class zt extends bi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jd,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ki extends zt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Aa(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function ny(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function iy(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Tf(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Rp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class qo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sy extends qo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case uh:r=e,a=2*t-n;break;case hh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case uh:o=e,c=2*n-t;break;case hh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let A=0;A!==a;++A)r[A]=p*o[u+A]+v*o[l+A]+y*o[c+A]+_*o[h+A];return r}}class ry extends qo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class oy extends qo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Oi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Aa(t,this.TimeBufferType),this.values=Aa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Aa(e.times,Array),values:Aa(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new oy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ry(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sy(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Uo:t=this.InterpolantFactoryMethodDiscrete;break;case ko:t=this.InterpolantFactoryMethodLinear;break;case fc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Uo;case this.InterpolantFactoryMethodLinear:return ko;case this.InterpolantFactoryMethodSmooth:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&ny(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===fc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=ko;class $r extends Oi{constructor(e,t,n){super(e,t,n)}}$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=Uo;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class Cp extends Oi{}Cp.prototype.ValueTypeName="color";class Vr extends Oi{}Vr.prototype.ValueTypeName="number";class ay extends qo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Wn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Gr extends Oi{InterpolantFactoryMethodLinear(e){return new ay(this.times,this.values,this.getValueSize(),e)}}Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;class Kr extends Oi{constructor(e,t,n){super(e,t,n)}}Kr.prototype.ValueTypeName="string";Kr.prototype.ValueBufferType=Array;Kr.prototype.DefaultInterpolation=Uo;Kr.prototype.InterpolantFactoryMethodLinear=void 0;Kr.prototype.InterpolantFactoryMethodSmooth=void 0;class Wr extends Oi{}Wr.prototype.ValueTypeName="vector";class cy{constructor(e="",t=-1,n=[],s=P0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=fi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(uy(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Oi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=iy(c);c=Tf(c,1,u),l=Tf(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Vr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,x){if(d.length!==0){const m=[],p=[];Rp(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(const x in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const y=f[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Vr(".morphTargetInfluence["+x+"]",m,p))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(Wr,d+".position",f,"pos",s),n(Gr,d+".quaternion",f,"rot",s),n(Wr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ly(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vr;case"vector":case"vector2":case"vector3":case"vector4":return Wr;case"color":return Cp;case"quaternion":return Gr;case"bool":case"boolean":return $r;case"string":return Kr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function uy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ly(i.type);if(i.times===void 0){const t=[],n=[];Rp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ys={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class hy{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const fy=new hy;class jr{constructor(e){this.manager=e!==void 0?e:fy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}jr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi={};class dy extends Error{constructor(e,t){super(e),this.response=t}}class Pp extends jr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ys.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:s});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Xi[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let x=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let E=0,R=u.length;E<R;E++){const P=u[E];P.onProgress&&P.onProgress(A)}p.enqueue(_),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new dy(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{ys.add(e,l);const u=Xi[e];delete Xi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Xi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Xi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class py extends jr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ys.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Oo("img");function c(){u(),ys.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class $u extends jr{constructor(e){super(e)}load(e,t,n,s){const r=new on,o=new py(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class oc extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class my extends oc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Yc=new ht,Af=new I,Rf=new I;class Ku{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nu,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Af.setFromMatrixPosition(e.matrixWorld),t.position.copy(Af),Rf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rf),t.updateMatrixWorld(),Yc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Yc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gy extends Ku{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xy extends oc{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new gy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Cf=new ht,po=new I,$c=new I;class _y extends Ku{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),po.setFromMatrixPosition(e.matrixWorld),n.position.copy(po),$c.copy(n.position),$c.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($c),n.updateMatrixWorld(),s.makeTranslation(-po.x,-po.y,-po.z),Cf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cf)}}class ac extends oc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new _y}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vy extends Ku{constructor(){super(new Uu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lp extends oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new vy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Io{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class yy extends jr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ys.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return ys.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),ys.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ys.add(e,c),r.manager.itemStart(e)}}let Ra;class My{static getContext(){return Ra===void 0&&(Ra=new(window.AudioContext||window.webkitAudioContext)),Ra}static setContext(e){Ra=e}}class Ip{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Pf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Pf(){return performance.now()}const Ns=new I,Lf=new Wn,by=new I,Us=new I;class wy extends Ot{constructor(){super(),this.type="AudioListener",this.context=My.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ip}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ns,Lf,by),Us.set(0,0,-1).applyQuaternion(Lf),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ns.x,s),t.positionY.linearRampToValueAtTime(Ns.y,s),t.positionZ.linearRampToValueAtTime(Ns.z,s),t.forwardX.linearRampToValueAtTime(Us.x,s),t.forwardY.linearRampToValueAtTime(Us.y,s),t.forwardZ.linearRampToValueAtTime(Us.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(Ns.x,Ns.y,Ns.z),t.setOrientation(Us.x,Us.y,Us.z,n.x,n.y,n.z)}}class Sy extends Ot{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const ks=new I,If=new Wn,Ey=new I,Os=new I;class Ty extends Sy{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ks,If,Ey),Os.set(0,0,1).applyQuaternion(If);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ks.x,n),t.positionY.linearRampToValueAtTime(ks.y,n),t.positionZ.linearRampToValueAtTime(ks.z,n),t.orientationX.linearRampToValueAtTime(Os.x,n),t.orientationY.linearRampToValueAtTime(Os.y,n),t.orientationZ.linearRampToValueAtTime(Os.z,n)}else t.setPosition(ks.x,ks.y,ks.z),t.setOrientation(Os.x,Os.y,Os.z)}}const ju="\\[\\]\\.:\\/",Ay=new RegExp("["+ju+"]","g"),Zu="[^"+ju+"]",Ry="[^"+ju.replace("\\.","")+"]",Cy=/((?:WC+[\/:])*)/.source.replace("WC",Zu),Py=/(WCOD+)?/.source.replace("WCOD",Ry),Ly=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zu),Iy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zu),Dy=new RegExp("^"+Cy+Py+Ly+Iy+"$"),Ny=["material","materials","bones","map"];class Uy{constructor(e,t,n){const s=n||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class It{constructor(e,t,n){this.path=t,this.parsedPath=n||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,n):new It(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ay,"")}static parseTrackName(e){const t=Dy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Ny.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=Uy;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Df=new ht;class ky{constructor(e,t,n=0,s=1/0){this.ray=new Wo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Du,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Df.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Df),this}intersectObject(e,t=!0,n=[]){return xu(e,this,n,t),n.sort(Nf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)xu(e[s],this,n,t);return n.sort(Nf),n}}function Nf(i,e){return i.distance-e.distance}function xu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)xu(r[o],e,t,!0)}}class Oy extends Qs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);class Fy extends dp{constructor(){super();const e=new un;e.deleteAttribute("uv");const t=new zt({side:Tn}),n=new zt,s=new ac(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ee(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ee(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Ee(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Ee(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Ee(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new Ee(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new Ee(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new Ee(e,br(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Ee(e,br(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new Ee(e,br(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new Ee(e,br(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const m=new Ee(e,br(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Ee(e,br(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function br(i){const e=new kn;return e.color.setScalar(i),e}const By=new $u;let Dp=8;function Si(i,e,t,{repeat:n=!0,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const o=new Cn(r);return s&&(o.colorSpace=Et),n&&(o.wrapS=o.wrapT=wi),o.anisotropy=Dp,o}function Kc(i,e=!1){const t=By.load(i);return t.colorSpace=Et,e&&(t.wrapS=t.wrapT=wi),t.anisotropy=Dp,t}let jc=1337;function nt(){return jc=jc*16807%2147483647,(jc-1)/2147483646}function Ca(i,e,t){return Si(512,512,(n,s)=>{const o=s/4;for(let a=0;a<4;a++)for(let c=0;c<4;c++){const l=(nt()-.5)*e;n.fillStyle=`rgb(${i[0]+l},${i[1]+l},${i[2]+l})`,n.fillRect(a*o,c*o,o,o);for(let u=0;u<140;u++){const h=(nt()-.5)*e*1.4;n.fillStyle=`rgba(${i[0]+h},${i[1]+h},${i[2]+h},0.5)`,n.fillRect(a*o+nt()*o,c*o+nt()*o,2+nt()*5,2+nt()*5)}}n.strokeStyle=t,n.lineWidth=3;for(let a=0;a<=4;a++)n.beginPath(),n.moveTo(a*o,0),n.lineTo(a*o,s),n.stroke(),n.beginPath(),n.moveTo(0,a*o),n.lineTo(s,a*o),n.stroke()})}const zy=Si(256,1024,(i,e,t)=>{i.fillStyle="#d9c7a4",i.fillRect(0,0,e,t);for(let n=0;n<90;n++){const s=nt()*e,r=.05+nt()*.12;i.strokeStyle=nt()>.5?`rgba(150,120,80,${r})`:`rgba(245,235,215,${r})`,i.lineWidth=1+nt()*3,i.beginPath(),i.moveTo(s,0);for(let o=0;o<=t;o+=64)i.lineTo(s+Math.sin(o*.01+n)*4,o);i.stroke()}}),Hy=Si(256,1024,(i,e,t)=>{i.fillStyle="#a8978a",i.fillRect(0,0,e,t);for(let n=0;n<120;n++){const s=nt()*e,r=.05+nt()*.1;i.strokeStyle=nt()>.5?`rgba(90,75,65,${r})`:`rgba(210,200,190,${r})`,i.lineWidth=1+nt()*2.5,i.beginPath(),i.moveTo(s,0);for(let o=0;o<=t;o+=64)i.lineTo(s+Math.sin(o*.012+n)*3,o);i.stroke()}}),Vy=Si(256,96,(i,e,t)=>{i.fillStyle="#e4e4e2",i.fillRect(0,0,e,t);for(let n=0;n<4;n++)for(let s=0;s<14;s++)n===3&&s>3&&s<9||(i.fillStyle="#fafafa",i.strokeStyle="#b9b9b6",i.lineWidth=1.5,i.beginPath(),i.arc(14+s*17.5,14+n*22,7.5,0,7),i.fill(),i.stroke());i.beginPath(),i.roundRect(80,70,90,15,7),i.fill(),i.stroke()}),Gy=Si(128,128,(i,e)=>{i.fillStyle="#c4c5c8",i.fillRect(0,0,e,e);for(let t=0;t<40;t++)i.fillStyle=`rgba(255,255,255,${.03+nt()*.05})`,i.fillRect(0,nt()*e,e,1);i.fillStyle="#8d8e92",i.beginPath(),i.arc(60,70,15,0,7),i.arc(76,70,15,0,7),i.fill(),i.beginPath(),i.ellipse(68,80,18,20,0,0,7),i.fill(),i.fillStyle="#c4c5c8",i.beginPath(),i.arc(90,62,10,0,7),i.fill(),i.fillStyle="#8d8e92",i.beginPath(),i.ellipse(70,46,9,5,-.7,0,7),i.fill()},{repeat:!1}),Wy=Si(512,512,(i,e)=>{const n=e/2;i.fillStyle="#111111",i.fillRect(0,0,e,e),i.fillStyle="#d6ccb2",i.beginPath(),i.moveTo(0,0),i.lineTo(n,0),i.lineTo(n,n),i.closePath(),i.fill(),i.strokeStyle="#ecc828",i.lineWidth=7;for(let s=0;s<=2;s++)i.beginPath(),i.moveTo(s*n,0),i.lineTo(s*n,e),i.stroke(),i.beginPath(),i.moveTo(0,s*n),i.lineTo(e,s*n),i.stroke();i.beginPath(),i.moveTo(0,0),i.lineTo(e,e),i.moveTo(n,0),i.lineTo(e,n),i.moveTo(0,n),i.lineTo(n,e),i.stroke()}),Uf=Si(256,160,(i,e,t)=>{i.fillStyle="#1b1d24",i.fillRect(0,0,e,t),i.fillStyle="#2a2d36",i.fillRect(0,0,40,t);const n=["#c792ea","#82aaff","#c3e88d","#f78c6c","#89ddff","#d0d0d0"];for(let s=8;s<t-4;s+=7){let r=48+Math.floor(nt()*4)*8;const o=1+Math.floor(nt()*4);for(let a=0;a<o&&r<e-10;a++){const c=10+nt()*45;i.fillStyle=n[Math.floor(nt()*n.length)],i.fillRect(r,s,c,3),r+=c+5}}},{repeat:!1}),kf=Si(256,160,(i,e,t)=>{i.fillStyle="#f4f6fa",i.fillRect(0,0,e,t),i.fillStyle="#26324a",i.fillRect(0,0,36,t),i.fillStyle="#ffffff";for(let n=0;n<3;n++)i.fillRect(44+n*70,10,62,34);i.fillStyle="#4c7cf0";for(let n=0;n<12;n++){const s=10+nt()*50;i.fillRect(48+n*16,140-s,9,s)}i.fillStyle="#26c281",i.fillRect(50,20,40,6),i.fillStyle="#f0a04c",i.fillRect(120,20,40,6)},{repeat:!1}),Of=Si(256,160,(i,e,t)=>{const n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#20263a"),n.addColorStop(1,"#3b2a4f"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,.85)";for(let s=0;s<4;s++)i.fillRect(30,30+s*22,120+nt()*60,8);i.fillStyle="#ecc828",i.fillRect(30,120,60,14)},{repeat:!1}),Xy=Si(1024,360,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#3a3a38",i.textAlign="center",i.font='700 210px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("pixbit",e/2,200),i.font='500 78px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("· s o l u t i o n s ·",e/2,320)},{repeat:!1}),qy=Si(256,256,(i,e)=>{const t=e/2;i.fillStyle="#f7f7f5",i.beginPath(),i.arc(t,t,t-4,0,Math.PI*2),i.fill(),i.lineWidth=10,i.strokeStyle="#222",i.stroke(),i.fillStyle="#222";for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.fillRect(t+Math.sin(s)*96-3,t-Math.cos(s)*96-9,6,18)}i.lineCap="round",i.lineWidth=8,i.beginPath(),i.moveTo(t,t),i.lineTo(t+50,t-30),i.stroke(),i.lineWidth=5,i.beginPath(),i.moveTo(t,t),i.lineTo(t-20,t-85),i.stroke()},{repeat:!1}),tt=i=>new zt(i),w={floorBeige:tt({map:Ca([196,180,160],14,"#a8998a"),roughness:.3,metalness:0}),floorDark:tt({map:Ca([78,78,80],12,"#5a5a5c"),roughness:.6}),floorTerrace:tt({map:Ca([184,160,136],16,"#9c7e66"),roughness:.75}),floorCorridor:tt({map:Ca([226,214,196],8,"#cbbfae"),roughness:.12}),wall:tt({color:"#dededb",roughness:.92}),wallWarm:tt({color:"#e6e1d6",roughness:.92}),concrete:tt({map:Kc("textures/concrete.jpg",!0),roughness:.95}),ceilingBlack:tt({color:"#151516",roughness:.95}),diamond:tt({map:Wy,roughness:.7}),yellow:tt({color:"#ecc21c",roughness:.5}),black:tt({color:"#161616",roughness:.45,metalness:.3}),blackMatte:tt({color:"#1e1e1e",roughness:.85}),metalDark:tt({color:"#2a2a2c",roughness:.35,metalness:.7}),chrome:tt({color:"#b9bcc0",roughness:.2,metalness:1}),mesh:tt({color:"#262628",roughness:.9}),fabric:tt({color:"#2d2d30",roughness:1}),leather:tt({color:"#1a1a1a",roughness:.38,metalness:.05}),wood:tt({map:zy,roughness:.6}),greyOak:tt({map:Hy,roughness:.75}),oakEdge:tt({color:"#d9cfb4",roughness:.7}),macTop:tt({map:Gy,roughness:.35,metalness:.6}),silver:tt({color:"#c9cacc",roughness:.3,metalness:.8}),keyboardTop:tt({map:Vy,roughness:.5}),woodDark:tt({color:"#7a5233",roughness:.6}),white:tt({color:"#f3f3f1",roughness:.5}),whiteGloss:tt({color:"#f5f5f3",roughness:.2}),cream:tt({color:"#e8e2c8",roughness:.6}),glass:new zt({color:"#cfdde0",transparent:!0,opacity:.16,roughness:.05,metalness:.1,depthWrite:!1,side:Bt}),glassFrost:new zt({color:"#f2f2f0",transparent:!0,opacity:.82,roughness:.5,depthWrite:!1,side:Bt}),glassYellow:tt({color:"#f1d27a",emissive:"#a8820f",emissiveIntensity:.35,roughness:.4}),lightStrip:tt({color:"#ffffff",emissive:"#fff4e0",emissiveIntensity:2.2}),spotGlow:tt({color:"#ffffff",emissive:"#ffe9c4",emissiveIntensity:3}),screenCode:tt({map:Uf,emissive:"#ffffff",emissiveMap:Uf,emissiveIntensity:.9,roughness:.3}),screenDash:tt({map:kf,emissive:"#ffffff",emissiveMap:kf,emissiveIntensity:.7,roughness:.3}),screenDark:tt({map:Of,emissive:"#ffffff",emissiveMap:Of,emissiveIntensity:.8,roughness:.3}),screenOff:tt({color:"#0b0b0c",roughness:.15,metalness:.3}),plant:tt({color:"#3d6b2f",roughness:.7}),plantLight:tt({color:"#7f9b3a",roughness:.7}),soil:tt({color:"#3a2c20",roughness:1}),plantDark:tt({color:"#2c4f24",roughness:.55}),stem:tt({color:"#4f7a34",roughness:.7}),petalPink:tt({color:"#e8738f",roughness:.6}),petalWhite:tt({color:"#f6f2ea",roughness:.6}),petalYellow:tt({color:"#f2c230",roughness:.6}),flowerCentre:tt({color:"#d99a1c",roughness:.8}),ceramic:tt({color:"#efece6",roughness:.25}),led:tt({color:"#ffffff",emissive:"#dff1ff",emissiveIntensity:2}),beanbag:tt({color:"#3b3d40",roughness:.95}),bottleYellow:tt({color:"#f2b705",roughness:.3,metalness:.4}),bottleBlue:tt({color:"#1f4fa8",roughness:.3,metalness:.4}),bottleTeal:tt({color:"#3ab7a6",roughness:.3}),red:tt({color:"#b23a2e",roughness:.6}),pergola:tt({color:"#8a4b3a",roughness:.8}),rail:tt({color:"#4a4a4a",roughness:.4,metalness:.6}),logo:tt({map:Kc("textures/logo.png"),transparent:!0,alphaTest:.4,roughness:.4}),logoText:tt({map:Xy,transparent:!0,alphaTest:.3,roughness:.6}),gallery:tt({map:Kc("textures/gallery.jpg"),roughness:.6}),clock:tt({map:qy,roughness:.5})};w.screens=[w.screenCode,w.screenCode,w.screenDash,w.screenDark];const mo=new I;function ai(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;mo.copy(e),mo[n]=0,mo.normalize();const l=.5*o/(o+a),u=1-mo.angleTo(i)/c;return Math.sign(mo[t])===1?u*l:a/(o+a)+l+l*(1-u)}class Yy extends un{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new I,c=new I,l=new I(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,g=new I,x=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[m+0]=l.x*Math.sign(a.x)+c.x*r,u[m+1]=l.y*Math.sign(a.y)+c.y*r,u[m+2]=l.z*Math.sign(a.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=ai(g,c,"z","y",r,n),f[p+1]=1-ai(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-ai(g,c,"z","y",r,n),f[p+1]=1-ai(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-ai(g,c,"x","z",r,e),f[p+1]=ai(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-ai(g,c,"x","z",r,e),f[p+1]=1-ai(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-ai(g,c,"x","y",r,e),f[p+1]=1-ai(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=ai(g,c,"x","y",r,e),f[p+1]=1-ai(g,c,"y","x",r,t);break}}}function cc(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Gt;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Ff(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);const g=Ff(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Ff(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new An(o,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){const x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Bf(i,e){if(e===L0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===cu||e===Kd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===cu)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class $y extends jr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qy(t)}),this.register(function(t){return new e2(t)}),this.register(function(t){return new l2(t)}),this.register(function(t){return new u2(t)}),this.register(function(t){return new h2(t)}),this.register(function(t){return new n2(t)}),this.register(function(t){return new i2(t)}),this.register(function(t){return new s2(t)}),this.register(function(t){return new r2(t)}),this.register(function(t){return new Jy(t)}),this.register(function(t){return new o2(t)}),this.register(function(t){return new t2(t)}),this.register(function(t){return new c2(t)}),this.register(function(t){return new a2(t)}),this.register(function(t){return new jy(t)}),this.register(function(t){return new f2(t)}),this.register(function(t){return new d2(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Io.extractUrlBase(e);o=Io.resolveURL(l,this.path)}else o=Io.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Pp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Np){try{o[vt.KHR_BINARY_GLTF]=new p2(e)}catch(h){s&&s(h);return}r=JSON.parse(o[vt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new A2(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case vt.KHR_MATERIALS_UNLIT:o[h]=new Zy;break;case vt.KHR_DRACO_MESH_COMPRESSION:o[h]=new m2(r,this.dracoLoader);break;case vt.KHR_TEXTURE_TRANSFORM:o[h]=new g2;break;case vt.KHR_MESH_QUANTIZATION:o[h]=new x2;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Ky(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const vt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class jy{constructor(e){this.parser=e,this.name=vt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new ut(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Fn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Lp(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ac(u),l.distance=h;break;case"spot":l=new xy(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,ji(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Zy{constructor(){this.name=vt.KHR_MATERIALS_UNLIT}getMaterialType(){return kn}extendParams(e,t,n){const s=[];e.color=new ut(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Fn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}}class Jy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Qy{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new we(a,a)}return Promise.all(r)}}class e2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class t2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class n2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class i2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class s2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ut().setRGB(a[0],a[1],a[2],Fn),Promise.all(r)}}class r2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class o2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ut().setRGB(a[0],a[1],a[2],Fn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}}class a2{constructor(e){this.parser=e,this.name=vt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class c2{constructor(e){this.parser=e,this.name=vt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class l2{constructor(e){this.parser=e,this.name=vt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class u2{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class h2{constructor(e){this.parser=e,this.name=vt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class f2{constructor(e){this.name=vt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class d2{constructor(e){this.name=vt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==li.TRIANGLES&&l.mode!==li.TRIANGLE_STRIP&&l.mode!==li.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const g of h){const x=new ht,m=new I,p=new Wn,v=new I(1,1,1),y=new b1(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,x.compose(m,p,v));for(const _ in c)if(_==="_COLOR_0"){const A=c[_];y.instanceColor=new fu(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Ot.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Np="glTF",go=12,zf={JSON:1313821514,BIN:5130562};class p2{constructor(e){this.name=vt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,go),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Np)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-go,r=new DataView(e,go);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===zf.JSON){const l=new Uint8Array(e,go+o,a);this.content=n.decode(l)}else if(c===zf.BIN){const l=go+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class m2{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=vt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=_u[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=_u[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Dr[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const x=d.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(d)},a,l,Fn,f)})})}}class g2{constructor(){this.name=vt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class x2{constructor(){this.name=vt.KHR_MESH_QUANTIZATION}}class Up extends qo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,x=g-l,m=-2*d+3*f,p=d-f,v=1-m,y=p-f+h;for(let _=0;_!==a;_++){const A=o[x+_+a],E=o[x+_+c]*u,R=o[g+_+a],P=o[g+_]*u;r[_]=v*A+y*E+m*R+p*P}return r}}const _2=new Wn;class v2 extends Up{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return _2.fromArray(r).normalize().toArray(r),r}}const li={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Dr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hf={9728:On,9729:Zn,9984:Bd,9985:ka,9986:wo,9987:Ji},Vf={33071:vs,33648:Wa,10497:wi},Zc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_u={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},y2={CUBICSPLINE:void 0,LINEAR:ko,STEP:Uo},Jc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function M2(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ns})),i.DefaultMaterial}function Fs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ji(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function b2(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function w2(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function S2(i){let e;const t=i.extensions&&i.extensions[vt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Qc(t.attributes):e=i.indices+":"+Qc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Qc(i.targets[n]);return e}function Qc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function vu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function E2(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const T2=new ht;class A2{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ky,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new $u(this.options.manager):this.textureLoader=new yy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Pp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Fs(r,a,s),ji(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[vt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Io.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Zc[s.type],a=Dr[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new An(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Zc[s.type],l=Dr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let x,m;if(d&&d!==h){const p=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(v);y||(x=new l(a,p*d,s.count*d/u),y=new pp(x,d/u),t.cache.add(v,y)),m=new Fo(y,c,f%d/u,g)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),m=new An(x,c,g);if(s.sparse!==void 0){const p=Zc.SCALAR,v=Dr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,A=new v(o[1],y,s.sparse.count*p),E=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new An(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=A.length;R<P;R++){const b=A[R];if(m.setX(b,E[R*c]),c>=2&&m.setY(b,E[R*c+1]),c>=3&&m.setZ(b,E[R*c+2]),c>=4&&m.setW(b,E[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Hf[f.magFilter]||Zn,u.minFilter=Hf[f.minFilter]||Ji,u.wrapS=Vf[f.wrapS]||wi,u.wrapT=Vf[f.wrapT]||wi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==On&&u.minFilter!==Zn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){const m=new on(x);m.needsUpdate=!0,f(m)}),t.load(Io.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),ji(h,o),h.userData.mimeType=o.mimeType||E2(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[vt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[vt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[vt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new vp,bi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Bu,bi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return zt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[vt.KHR_MATERIALS_UNLIT]){const h=s[vt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ut(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Fn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Bt);const u=r.alphaMode||Jc.OPAQUE;if(u===Jc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Jc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==kn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new we(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==kn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==kn){const h=r.emissiveFactor;a.emissive=new ut().setRGB(h[0],h[1],h[2],Fn)}return r.emissiveTexture!==void 0&&o!==kn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),ji(h,r),t.associations.set(h,{materials:e}),r.extensions&&Fs(s,h,r),h})}createUniqueName(e){const t=It.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[vt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Gf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=S2(l),h=s[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[vt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Gf(new Gt,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?M2(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const x=u[d],m=o[d];let p;const v=l[d];if(m.mode===li.TRIANGLES||m.mode===li.TRIANGLE_STRIP||m.mode===li.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new v1(x,v):new Ee(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===li.TRIANGLE_STRIP?p.geometry=Bf(p.geometry,Kd):m.mode===li.TRIANGLE_FAN&&(p.geometry=Bf(p.geometry,cu));else if(m.mode===li.LINES)p=new w1(x,v);else if(m.mode===li.LINE_STRIP)p=new zu(x,v);else if(m.mode===li.LINE_LOOP)p=new _p(x,v);else if(m.mode===li.POINTS)p=new S1(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&w2(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ji(p,r),m.extensions&&Fs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Fs(s,h[0],r),h[0];const f=new st;r.extensions&&Fs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nn(sm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Uu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ji(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new ht;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Fu(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let v=0,y=f.length;v<y;v++){const _=f[v],A=d[v],E=g[v],R=x[v],P=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const b=n._createAnimationTracks(_,A,E,R,P);if(b)for(let M=0;M<b.length;M++)p.push(b[M])}return new cy(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,T2)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new gp:l.length>1?u=new st:l.length===1?u=l[0]:u=new Ot,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ji(u,r),r.extensions&&Fs(n,u,r),r.matrix!==void 0){const h=new ht;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new st;n.name&&(r.name=s.createUniqueName(n.name)),ji(r,n),n.extensions&&Fs(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof bi||f instanceof on)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];fs[r.path]===fs.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(fs[r.path]){case fs.weights:l=Vr;break;case fs.rotation:l=Gr;break;case fs.position:case fs.scale:l=Wr;break;default:switch(n.itemSize){case 1:l=Vr;break;case 2:case 3:default:l=Wr;break}break}const u=s.interpolation!==void 0?y2[s.interpolation]:ko,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+fs[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=vu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Gr?v2:Up;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function R2(i,e,t){const n=e.attributes,s=new Di;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),a.normalized){const u=vu(Dr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new I,c=new I;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const x=vu(Dr[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Ni;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Gf(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=_u[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return bt.workingColorSpace!==Fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),ji(i,e),R2(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?b2(i,e.targets,t):i})}const el=new Map;function gn(i,e){return el.has(i)||el.set(i,e()),el.get(i)}function C2(i,e,t){const n=new Xo,s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),n}function To(i,e,t,n,s){const r=new ic(C2(i-2*s,e-2*s,Math.max(.001,n-s)),{depth:t-2*s,bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:6});return r.translate(0,0,s),r}const Pa={shell:()=>gn("mon.shell",()=>{const i=To(.536,.322,.012,.008,.0025);return i.translate(0,.35-.005,-.0592-.012),i}),back:()=>gn("mon.back",()=>{const i=To(.42,.22,.016,.03,.006);i.translate(0,.335,-.0712-.016);const e=To(.22,.13,.014,.03,.006);return e.translate(0,.325,-.0872-.014),cc([i,e])}),arm:()=>gn("mon.arm",()=>{const i=new yp([new I(0,.008,-.03),new I(0,.05,-.085),new I(0,.16,-.13),new I(0,.27,-.125),new I(0,.31,-.1)]),e=new rc(i,24,1,10,!1),t=e.attributes.position,n=new I,s=new I;for(let r=0;r<t.count;r++){const o=Math.floor(r/11),a=o/24;i.getPointAt(Math.min(1,a),s),n.set(t.getX(r),t.getY(r),t.getZ(r)).sub(s),t.setXYZ(r,s.x+n.x*.024,s.y+n.y*.008,s.z+n.z*.008)}return e.computeVertexNormals(),e}),foot:()=>gn("mon.foot",()=>{const i=To(.24,.17,.008,.07,.003);return i.rotateX(-Math.PI/2),i.translate(0,0,-.05),i})},Wf={base:()=>gn("kb.base",()=>{const i=To(.28,.108,.01,.008,.003);i.rotateX(-Math.PI/2);const e=i.attributes.position;for(let t=0;t<e.count;t++)e.getY(t)>.005&&e.getZ(t)<0&&e.setY(t,e.getY(t)+.004*(-e.getZ(t)/.054));return i.computeVertexNormals(),i.translate(-.01,0,.25),i}),keys:()=>gn("kb.keys",()=>{const i=[],s=(r,o,a)=>{const c=new un(a,.004,.0155);c.translate(r,.0125+.004*(.304-o)/.108,o),i.push(c)};for(let r=0;r<5;r++){const o=.213+r*.0185;if(r===4){let c=-.132;for(const l of[1,1,1.25,6.5,1.25,1,1,1]){const u=l*.0185-.002999999999999999;s(c+u/2,o,u),c+=l*.0185}continue}const a=14;for(let c=0;c<a;c++)s(-.01-.13+.008+.0155/2+c*.0185+r%2*.004,o,.0155)}return cc(i)})},Xf={shell:()=>gn("mouse.shell",()=>{const i=new Xt(1,20,12,0,Math.PI*2,0,Math.PI/2);i.scale(.03,.022,.054);const e=i.attributes.position;for(let t=0;t<e.count;t++)e.setY(t,e.getY(t)*(1+.15*Math.max(0,e.getZ(t)/.054)));return i.computeVertexNormals(),i}),wheel:()=>gn("mouse.wheel",()=>{const i=new Jn(.006,.006,.005,12);return i.rotateZ(Math.PI/2),i})},qf={body:()=>gn("bottle.body",()=>new qr([[0,0],[.028,0],[.032,.006],[.032,.16],[.03,.18],[.022,.196],[.019,.2],[0,.2]].map(([i,e])=>new we(i,e)),18)),cap:()=>gn("bottle.cap",()=>new Jn(.02,.021,.03,16).translate(0,.215,0))};function kp(i=0,{width:e=.09,thick:t=.016,bend:n=.08,twist:s=.5}={}){return gn(`blade.${i}.${e}.${t}.${n}.${s}`,()=>{const o=[],a=[],c=n*(.6+.4*(i*37%10)/10)*(i%2?-1:1),l=s*(i%3===2?-1:1);for(let f=0;f<=10;f++){const d=f/10,g=e/2*Math.sin(Math.PI*Math.min(1,.12+d*.95))*(1-.35*d),x=t/2*(1-d*.85),m=l*d,p=Math.cos(m),v=Math.sin(m),y=c*d*d;for(const[_,A]of[[-g,0],[0,x],[g,0],[0,-x]])o.push(_*p-A*v,d,y+_*v+A*p)}const u=o.length/3;o.push(0,1.04,c*1.08);for(let f=0;f<10;f++)for(let d=0;d<4;d++){const g=f*4+d,x=f*4+(d+1)%4,m=g+4,p=x+4;a.push(g,x,m,x,p,m)}for(let f=0;f<4;f++)a.push(10*4+f,10*4+(f+1)%4,u);a.push(0,2,1,0,3,2);const h=new Gt;return h.setAttribute("position",new _t(o,3)),h.setIndex(a),h.computeVertexNormals(),h})}function P2(i,e){return gn(`planter.${i}.${e}`,()=>{const t=i/2-.004,n=t*.78,s=new qr([[0,.002],[n-.01,0],[n,.012],[t-.012,e-.03],[t,e-.02],[t,e-.004],[t-.006,e],[t-.016,e-.004],[t-.018,e-.04]].map(([o,a])=>new we(o,a)),32),r=new ei(t-.016,28).rotateX(-Math.PI/2).translate(0,e-.035,0);return{pot:s,soil:r,soilY:e-.035}})}const La={petal:()=>gn("fl.petal",()=>{const i=new Xt(1,10,6);return i.scale(.011,.0025,.022),i.translate(0,0,.02),i}),centre:()=>gn("fl.centre",()=>new Xt(.009,10,8).scale(1,.6,1)),pot:()=>gn("fl.pot",()=>new qr([[0,.002],[.04,0],[.046,.01],[.058,.1],[.062,.108],[.06,.112],[.054,.105]].map(([i,e])=>new we(i,e)),28)),soil:()=>gn("fl.soil",()=>new ei(.055,20).rotateX(-Math.PI/2).translate(0,.1,0))};function L2(i){const e=`stem.${i.map(t=>t.toFixed(3)).join(",")}`;return gn(e,()=>{const t=new Gu(new I(0,0,0),new I(i[0]*.2,i[1]*.6,i[2]*.2),new I(...i));return new rc(t,10,.0025,5,!1)})}new $y;const I2=new un(1,1,1);function S(i,e,t,n,s,r,o,a,{shadow:c=!0,ry:l=0,rx:u=0,rz:h=0}={}){const f=new Ee(I2,e);return f.scale.set(t,n,s),f.position.set(r,o,a),f.rotation.set(u,l,h),f.castShadow=c,f.receiveShadow=!0,i.add(f),f}function it(i,e,t,n,s,r,o,a,{seg:c=12,shadow:l=!0,rx:u=0,rz:h=0,open:f=!1}={}){const d=new Ee(new Jn(t,n,s,c,1,f),e);return d.position.set(r,o,a),d.rotation.set(u,0,h),d.castShadow=l,d.receiveShadow=!0,i.add(d),d}function Zi(i,e,t,n,s,r,o,a,c){const l=new Ee(new Yy(t,n,s,2,r),e);return l.position.set(o,a,c),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function wt(i,e,t,n,s,r,o,a=0,c=0){const l=new Ee(new xt(t,n),e);return l.position.set(s,r,o),l.rotation.set(c,a,0,"YXZ"),l.receiveShadow=!0,i.add(l),l}function sn(i,e,t,n=0,s=0,r=0,{shadow:o=!0,rx:a=0,ry:c=0,rz:l=0,s:u=null}={}){const h=new Ee(e,t);return h.position.set(n,s,r),h.rotation.set(a,c,l),u&&(Array.isArray(u)?h.scale.set(...u):h.scale.setScalar(u)),h.castShadow=o,h.receiveShadow=!0,i.add(h),h}function Bn(i,e=0,t=0,n=0,s=0){const r=new st;return r.position.set(e,t,n),r.rotation.y=s,i.add(r),r}function Nr(i,e,t,n=0,{exec:s=!1}={}){const r=Bn(i,e,0,t,n);r.userData.label="Chair";for(let c=0;c<5;c++){const l=c/5*Math.PI*2,u=S(r,w.black,.04,.035,.32,Math.sin(l)*.15,.07,Math.cos(l)*.15,{ry:l});u.castShadow=!1,it(r,w.black,.025,.025,.04,Math.sin(l)*.3,.03,Math.cos(l)*.3,{seg:6,shadow:!1})}it(r,w.chrome,.025,.025,.32,0,.26,0,{seg:8}),Zi(r,w.fabric,.5,.08,.48,.03,0,.47,0);const o=s?.75:.55;S(r,w.black,.04,.5,.04,0,.62,-.25);const a=S(r,w.mesh,.46,o,.05,0,.62+o/2,-.27,{rx:-.1});a.material=w.mesh,s&&S(r,w.mesh,.3,.14,.06,0,1.45,-.33,{rx:-.1});for(const c of[-1,1])S(r,w.black,.035,.22,.035,c*.26,.6,-.02),S(r,w.black,.06,.025,.24,c*.26,.72,.02);return r}function Op(i,e,t,n=0){const s=Bn(i,e,0,t,n);s.userData.label="Visitor chair";for(const r of[-1,1])S(s,w.chrome,.025,.025,.5,r*.22,.012,.05),S(s,w.chrome,.025,.45,.025,r*.22,.23,.29,{rx:.05});return S(s,w.fabric,.48,.06,.46,0,.47,.05),S(s,w.mesh,.46,.5,.04,0,.78,-.2,{rx:-.12}),s}function D2(i,e,t,n,s=0){const r=Bn(i,e,.77,t,n);r.userData.label="Monitor",sn(r,Pa.foot(),w.black),sn(r,Pa.arm(),w.silver),sn(r,Pa.back(),w.black),sn(r,Pa.shell(),w.black),wt(r,s%3===2?w.screenDash:w.screenCode,.52,.3,0,.35,-.058),S(r,w.led,.006,.0025,.002,.235,.35-.1665,-.0585,{shadow:!1});const o=-.26,a=.06;Zi(r,w.black,.114,.006,.114,.002,o,.003,a),Zi(r,w.silver,.12,.03,.12,.012,o,.021,a),wt(r,w.macTop,.09,.09,o,.0365,a,0,-Math.PI/2),S(r,w.black,.012,.004,.002,o-.03,.021,a+.0605,{shadow:!1}),S(r,w.black,.012,.004,.002,o-.012,.021,a+.0605,{shadow:!1}),S(r,w.white,.004,.004,.002,o+.04,.021,a+.0605,{shadow:!1}),sn(r,Wf.base(),w.silver,0,0,0,{shadow:!1}),sn(r,Wf.keys(),w.white,0,0,0,{shadow:!1});const c=.24,l=.24;return sn(r,Xf.shell(),w.blackMatte,c,0,l),S(r,w.black,.0015,.003,.024,c,.0195,l-.02,{shadow:!1,rx:.25}),sn(r,Xf.wheel(),w.chrome,c,.0185,l-.024,{shadow:!1}),s%3===0&&(sn(r,qf.body(),w.bottleYellow,.28,0,-.04),sn(r,qf.cap(),w.black,.28,0,-.04,{shadow:!1})),r}function Yf(i,e,t,n,{width:s=1.5,seats:r=!0,solidFn:o,seatW:a=1.1,chairOff:c=.12,sides:l=[-1,1]}={}){const u=Bn(i,e,0,0);u.userData.label="Desk";const h=n-t,f=(t+n)/2;S(u,w.greyOak,s,.04,h,0,.75,f),S(u,w.oakEdge,s+.004,.012,h+.004,0,.734,f,{shadow:!1});const d=Math.max(2,Math.round(h/2)+1);for(let m=0;m<d;m++){const p=t+.12+m/(d-1)*(h-.24);for(const v of[-1,1])S(u,w.black,.05,.78,.05,v*(s/2-.22),.37,p,{rz:v*.2}),S(u,w.black,.05,.78,.05,v*(s/2-.22),.37,p,{rz:-v*.2});S(u,w.black,s-.2,.05,.05,0,.72,p)}if(o&&o(e-s/2,t,e+s/2,n),!r)return u;const g=Math.max(1,Math.floor(h/a+1e-6));let x=0;for(const m of l)for(let p=0;p<g;p++){const v=t+(p+.5)*(h/g),y=l.length===2?m*.22:-m*(s/2-.2);D2(u,y,v,m*Math.PI/2,x++);const _=e+m*(s/2+c);Nr(i,_,v,m>0?-Math.PI/2:Math.PI/2),o&&o(_-.2,v-.2,_+.2,v+.2)}return u}function Ju(i,e,t,n=0,s=2){const r=Bn(i,e,0,t,n);r.userData.label="Sofa";const o=s*.75+.3;Zi(r,w.leather,o,.38,.9,.06,0,.24,0),Zi(r,w.leather,o,.5,.22,.08,0,.62,-.34);for(const a of[-1,1])Zi(r,w.leather,.18,.62,.9,.06,a*(o/2-.09),.33,0);for(let a=0;a<s;a++){const c=-o/2+.15+.75*(a+.5);Zi(r,w.leather,.72,.14,.62,.06,c,.49,.08);const l=Zi(r,w.leather,.5,.4,.14,.07,c,.78,-.18);l.rotation.x=-.18}return r}function lc(i,e,t,n,s=9,r=.8){const o=Bn(i,e,t,n);o.userData.label="Plant";for(let a=0;a<s;a++){const c=r*(.6+nt()*.6),l=nt()>.3;sn(o,kp(a%5),l?w.plant:a%2?w.plantDark:w.plantLight,(nt()-.5)*.3,0,(nt()-.5)*.2,{s:[1,c,1]}).rotation.set((nt()-.5)*.35,nt()*Math.PI,(nt()-.5)*.35)}return o}function Qu(i,e,t,{size:n=.45,h:s=.45,mat:r=w.white}={}){const o=Bn(i,e,0,t);o.userData.label="Plant";const{pot:a,soil:c,soilY:l}=P2(n,s);return sn(o,a,r),sn(o,c,w.soil,0,0,0,{shadow:!1}),lc(o,0,l-.01,0,11,.9),o}function Fp(i,e,t,n,{petal:s=w.petalPink,n:r=5,scale:o=1}={}){const a=Bn(i,e,t,n);a.userData.label="Flowers",a.scale.setScalar(o),sn(a,La.pot(),w.ceramic),sn(a,La.soil(),w.soil,0,0,0,{shadow:!1});const c=l=>{const u=Math.sin(l*127.1+e*311.7+n*74.7)*43758.5453;return u-Math.floor(u)};for(let l=0;l<r;l++){const u=l/r*Math.PI*2+c(l)*.6,h=.025+c(l+9)*.06,f=.16+c(l+3)*.12,d=[Math.cos(u)*h,f,Math.sin(u)*h];sn(a,L2(d),w.stem,0,.1,0,{shadow:!1});const g=Bn(a,d[0],.1+d[1],d[2]);g.rotation.set(Math.sin(u)*.5,0,-Math.cos(u)*.5);const x=6;for(let m=0;m<x;m++)sn(g,La.petal(),s,0,0,0,{ry:m/x*Math.PI*2+c(l+m)*.2,rx:-.35,shadow:!1});sn(g,La.centre(),w.flowerCentre,0,.003,0,{shadow:!1})}for(let l=0;l<6;l++)sn(a,kp(l,{width:.035,thick:.006,bend:.06,twist:.3}),l%2?w.plant:w.plantDark,0,.098,0,{s:[1,.11+c(l+20)*.05,1],shadow:!1}).rotation.set(.7+c(l+30)*.3,l/6*Math.PI*2,0,"YXZ");return a}function Bp(i,e,t,n=w.beanbag){const s=new Ee(new Xt(.5,20,14),n);return s.scale.set(1,.65,1.05),s.position.set(e,.3,t),s.userData.label="Bean bag",s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function N2(i,e,t,n,{yellowCubbies:s=[]}={}){const r=Bn(i,e,0,0);r.userData.label="Shelving";const o=n-t,a=(t+n)/2,c=.4,l=2.4,u=.55;S(r,w.white,c,u,o,0,u/2,a);const h=Math.max(1,Math.round(o/1.1));for(let d=0;d<h;d++){const g=t+(d+.5)*(o/h);S(r,w.blackMatte,.3,.32,.3,0,u+.16,g),lc(r,0,u+.32,g,7,.6)}for(const d of[t+.02,n-.02])for(const g of[-1,1])S(r,w.black,.025,l-u,.025,g*c/2,u+(l-u)/2,d);for(const d of[1.55,l]){for(const g of[-1,1])S(r,w.black,.025,.025,o,g*c/2,d,a,{shadow:!1});S(r,w.black,c,.012,o,0,d-.01,a,{shadow:!1})}const f=Math.max(1,Math.round(o/.65));for(let d=1;d<f;d++)for(const g of[-1,1])S(r,w.black,.02,l-u,.02,g*c/2,u+(l-u)/2,t+d/f*o,{shadow:!1});for(const d of s){if(d.i>=f)continue;const g=t+(d.i+.5)*(o/f),x=d.row===0?1.2:1.9;S(r,w.yellow,c-.05,.45,o/f-.08,0,x,g)}for(let d=0;d<f;d++)nt()<.3&&S(r,w.blackMatte,.12,.15+nt()*.1,.12,0,1.55+.09,t+(d+.5)*(o/f));return r}function zp(i,e,t,n=2.4,s=0,r=2.6,o=3.6){const a=Bn(i,e,r,t,s);a.userData.label="Light",S(a,w.black,n,.06,.08,0,0,0,{shadow:!1}),wt(a,w.lightStrip,n-.04,.05,0,-.031,0,0,Math.PI/2);for(const c of[-.4,.4])it(a,w.black,.003,.003,o-r,c*n,(o-r)/2,0,{seg:3,shadow:!1});return a}function Ka(i,e,t,n=2.2,s=3.6,r=1){const o=Bn(i,e,n,t);o.userData.label="Pendant light",it(o,w.black,.004,.004,s-n,0,(s-n)/2,0,{seg:3,shadow:!1});const a=new Ee(new Xu(.18*r,.26*r,20,1,!0),w.black);a.position.y=-.1*r,a.material.side=Bt,o.add(a),it(o,w.black,.02,.02,.06,0,.05,0,{seg:8,shadow:!1});const c=new Ee(new ei(.15*r,16),w.spotGlow);return c.rotation.x=Math.PI/2,c.position.y=-.22*r,o.add(c),o}function U2(i,e,t,n){it(i,w.black,.05,.05,.12,e,n-.06,t,{seg:10,shadow:!1});const s=new Ee(new ei(.035,10),w.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,n-.121,t),i.add(s)}function eh(i,e,t,n,s=0){const r=Bn(i,e,t,n,s);return r.userData.label="AC unit",Zi(r,w.white,.9,.28,.2,.05,0,0,.1),S(r,w.metalDark,.8,.02,.02,0,-.1,.2,{shadow:!1}),r}function k2(i,e,t,n=3){S(i,w.white,.85,.12,.85,e,n,t,{shadow:!1}),S(i,w.metalDark,.55,.02,.55,e,n-.065,t,{shadow:!1})}function O2(i,e,t,n,s=0,r=2.4){const o=n-t,a=Bn(i,e,0,(t+n)/2,s);a.userData.label="Lockers";const c=Math.round(o/.5),l=5,u=o/c,h=(r-.1)/l;S(a,w.white,.02,r,o,-.265,r/2,0),S(a,w.white,.55,.1,o,0,.05,0);for(let f=0;f<=l;f++)S(a,w.white,.55,.02,o,0,f===l?r-.01:.1+f*h,0);for(let f=0;f<=c;f++)S(a,w.white,.55,r,.02,0,r/2,-o/2+f*u+(f===c?-.01:f===0?.01:0));a.updateMatrixWorld(!0);for(let f=0;f<c;f++)for(let d=0;d<l;d++){const g=-o/2+(f+.5)*u,x=.1+(d+.5)*h;nt()<.35&&S(a,nt()<.5?w.bottleYellow:w.black,.22,.05+nt()*.12,u-.16,0,.1+d*h+.02+.03,g,{shadow:!1});const m=new st;m.position.copy(a.localToWorld(new I(.285,x,g-u/2+.01))),m.rotation.y=a.rotation.y,S(m,w.whiteGloss,.01,h-.02,u-.02,0,0,u/2-.01,{shadow:!1}),S(m,w.metalDark,.02,.07,.07,.01,.08,u-.09,{shadow:!1,rx:Math.PI/4}),ja.push({leaf:m,closed:a.rotation.y,open:a.rotation.y+1.9,center:a.localToWorld(new I(.285,x,g))})}return a}function F2(i,e,t,n,s=0){const r=Bn(i,e,t,n,s);r.userData.label="Wall clock";const o=new Ee(new ei(.2,32),w.clock);o.position.z=.03,r.add(o);const a=new Ee(new Yr(.2,.02,8,32),w.black);return a.position.z=.03,r.add(a),r}const ms=[];function $e(i,e,t,n){ms.push({minX:Math.min(i,t),maxX:Math.max(i,t),minZ:Math.min(e,n),maxZ:Math.max(e,n)})}const xo=new Di;function Un(i,e=0){return i.updateMatrixWorld(!0),xo.setFromObject(i),$e(xo.min.x-e,xo.min.z-e,xo.max.x+e,xo.max.z+e),i}function B2(i,e,t){return!!yu(i,e,t)}function yu(i,e,t){for(const n of ms)if(i+t>n.minX&&i-t<n.maxX&&e+t>n.minZ&&e-t<n.maxZ)return n;return null}function z2(i,e,t,n){const s=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(t))/(n*.5))),r=e/s,o=t/s;for(let a=0;a<s;a++){if(r){const c=i.x+r,l=yu(c,i.z,n);l?i.x=r>0?l.minX-n-1e-4:l.maxX+n+1e-4:i.x=c}if(o){const c=i.z+o,l=yu(i.x,c,n);l?i.z=o>0?l.minZ-n-1e-4:l.maxZ+n+1e-4:i.z=c}}}const Xe=3.6,et=3,en=10.05,Nt=10.3,yt=18.7,_s=3.5,mn=3,qt=5.75,Ft=3,wr=6.15,es=8.9,kt=7.95,Kt=7.3,gs=.15,Do=[12.45,15.45],En=.5,Vo=2.9,Pt=9.25,$f=yt,Hn=3.7,Ut=22.6,Mu=[20,21.6],H2=25.2,xi=6.6,Sn=27.2,V2=[2.3,3.2];function Xs(i,e,t,n){const s=i.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*e/n,s.getY(r)*t/n);return s.needsUpdate=!0,i}function Rt(i,e,t,n,s,r,o,{down:a=!1,tile:c=2.4}={}){const l=s-t,u=r-n,h=Xs(new xt(l,u),l,u,c),f=new Ee(h,e);return f.rotation.x=a?Math.PI/2:-Math.PI/2,f.position.set((t+s)/2,o,(n+r)/2),f.receiveShadow=!0,i.add(f),f}function jt(i,e,t,n,s,{h:r=Xe,mat:o=w.wall,t:a=.2,y0:c=0,collide:l=!0}={}){const u=Math.abs(n-e)>=Math.abs(s-t),h=u?Math.abs(n-e):a,f=u?a:Math.abs(s-t),d=S(i,o,h,r,f,(e+n)/2,c+r/2,(t+s)/2);return d.userData.label="Wall",l&&c<1.5&&$e((e+n)/2-h/2,(t+s)/2-f/2,(e+n)/2+h/2,(t+s)/2+f/2),d}const uc=[],ja=[],Mn={x:10.3+.03,y:1.25,z:9.8};function Ar(i,{x0:e,z0:t,x1:n,z1:s,h:r=3,door:o=null,transom:a=2.3,frost:c=!1,panel:l=1.1,swing:u=1,name:h="door"}){const f=t===s,d=new st;d.userData.label="Glass wall",i.add(d),i=d;const g=f?e:t,x=f?n:s,m=f?t:e,p=(_,A,E,R,P)=>f?S(i,w.black,R,P,E,_,A,m,{shadow:!0}):S(i,w.black,E,P,R,m,A,_,{shadow:!0}),v=(_,A,E,R)=>{const P=new Ee(new xt(A-_,R-E),c?w.glassFrost:w.glass);P.position.set(f?(_+A)/2:m,(E+R)/2,f?m:(_+A)/2),f||(P.rotation.y=Math.PI/2),P.renderOrder=2,i.add(P)},y=o?[[g,Math.min(...o)],[Math.max(...o),x]]:[[g,x]];for(const[_,A]of y){if(A-_<.01)continue;v(_,A,.05,r);const E=Math.max(1,Math.round((A-_)/l));for(let R=0;R<=E;R++)p(_+R/E*(A-_),r/2,.05,.05,r);p((_+A)/2,.04,.06,A-_,.08),a&&a<r&&p((_+A)/2,a,.05,A-_,.05),f?$e(_,m-.06,A,m+.06):$e(m-.06,_,m+.06,A)}if(p((g+x)/2,r-.03,.06,x-g,.06),o){const[_,A]=o,E=Math.abs(A-_);v(Math.min(_,A),Math.max(_,A),a,r),p((_+A)/2,a,.06,E,.06);const R=new st;R.position.set(f?_:m,0,f?m:_);const P=Math.sign(A-_),b=E-.04,M=new Ee(new xt(b,a-.1),w.glass);M.position.set(P*b/2,a/2,0),R.add(M);for(const ee of[0,1])S(R,w.black,.04,a-.08,.04,P*ee*b,a/2,0);S(R,w.black,b,.05,.04,P*b/2,.06,0),S(R,w.black,b,.04,.04,P*b/2,a-.08,0),S(R,w.chrome,.02,.35,.03,P*(b-.1),1.05,.04);const D=f?0:-Math.PI/2,G=D+(f?-1:1)*u*P*1.4;R.rotation.y=D;const V=Math.min(_,A),q=Math.max(_,A);uc.push({leaf:R,closed:D,open:G,name:h,handle:[P*(b-.1),1.2,.04],x:f?(_+A)/2:m,z:f?m:(_+A)/2,block:f?{minX:V,maxX:q,minZ:m-.06,maxZ:m+.06}:{minX:m-.06,maxX:m+.06,minZ:V,maxZ:q}})}}function _o(i,e,t,n,s,r){const o=t===s,a=o?n-e:s-t,c=new Ee(new xt(a,r),w.glass);c.position.set((e+n)/2,r/2,(t+s)/2),o||(c.rotation.y=Math.PI/2),c.renderOrder=2,i.add(c);const l=Math.max(1,Math.round(a/1.2));for(let u=0;u<=l;u++)o?S(i,w.black,.07,r,.1,e+u/l*a,r/2,t):S(i,w.black,.1,r,.07,e,r/2,t+u/l*a);for(const u of[.08,.55,Math.min(2.45,r-.3),r-.04]){const h=u<.1?.16:.07;o?S(i,w.black,a,h,.1,(e+n)/2,u,t,{shadow:u>2}):S(i,w.black,.1,h,a,e,u,(t+s)/2,{shadow:u>2})}o?$e(e,t-.08,n,t+.08):$e(e-.08,t,e+.08,s)}function G2(i){Rt(i,w.diamond,0,_s,Ft,kt,et,{down:!0}),Rt(i,w.diamond,Ft,qt,Kt,kt,et,{down:!0}),Rt(i,w.diamond,Kt,qt,Nt,Pt,et,{down:!0});for(const[e,t]of[[1,4.4],[1,6.8],[2.4,6.8],[4,7],[5.6,7],[7.9,6.9],[9.4,8.6],[8.2,8.9]])U2(i,e,t,et);S(i,w.yellow,Kt,Xe-et,.08,Kt/2,et+(Xe-et)/2,kt+.04,{shadow:!1}),S(i,w.yellow,Kt,.07,.14,Kt/2,et-.035,kt,{shadow:!1}),Rt(i,w.white,0,0,Ft,_s,et,{down:!0}),Rt(i,w.white,Ft,mn,es,qt,et,{down:!0});for(const[e,t]of[[1.5,1.6],[5,4.5],[8.2,4.5]])S(i,w.whiteGloss,.35,.02,.35,e,et-.01,t,{shadow:!1});Rt(i,w.ceilingBlack,0,kt,en,yt,Xe,{down:!0});for(const e of[12.3,15.3])S(i,w.ceilingBlack,en,.5,.4,en/2,Xe-.25,e,{shadow:!1});it(i,w.ceilingBlack,.2,.2,en,en/2,Xe-.45,9.2,{rz:Math.PI/2,shadow:!1,seg:14}),it(i,w.red,.04,.04,yt-kt,4.6,Xe-.3,(kt+yt)/2,{rx:Math.PI/2,shadow:!1,seg:8}),it(i,w.red,.04,.04,en,en/2,Xe-.3,17.9,{rz:Math.PI/2,shadow:!1,seg:8});for(const[e,t]of[[2,12.2],[5.5,12.2],[2,15.3],[5.5,15.3],[8.6,12.2]])k2(i,e,t,Xe-.62)}function Kf(i,e,t,n,s){const r=Math.hypot(n-e,s-t);S(i,w.blackMatte,.01,.012,r,Kt+.008,(t+s)/2,(e+n)/2,{shadow:!1,rx:Math.atan2(-(s-t),n-e)})}function W2(i){S(i,w.concrete,gs,et,Pt-7.4,Kt-gs/2,et/2,(7.4+Pt)/2),S(i,w.wall,gs,Xe-et,Pt-7.4,Kt-gs/2,et+(Xe-et)/2,(7.4+Pt)/2,{shadow:!1}),$e(Kt-gs,7.4,Kt,Pt+.35);const t=Pt-7.4,n=new Ee(Xs(new xt(t,et),t,et,1.6),w.concrete);n.position.set(Kt+.003,et/2,(7.4+Pt)/2),n.rotation.y=Math.PI/2,n.receiveShadow=!0,n.userData.label="Logo wall",i.add(n),Kf(i,Pt,3,7.4+.1,1),Kf(i,7.4+.1,1,7.4+.9,0),wt(i,w.logo,.5,.72,Kt+.03,2.35,8.25,Math.PI/2),wt(i,w.logoText,1,.35,Kt+.02,1.78,8.3,Math.PI/2),Un(Ju(i,Kt+.47,8.4,Math.PI/2,2)),S(i,w.concrete,.5,et-.004,.32,Kt-.15,(et-.004)/2,7.4+.14),jt(i,Kt-gs,Pt+.175,8.3,Pt+.175,{h:Xe,t:.35});const s=wt(i,w.glassFrost,Nt-8.3,et-.1,(8.3+Nt)/2,et/2,Pt);s.renderOrder=2;for(const[a,c,l]of[[8.7,1.5,.5],[9.25,.9,-.4],[9.25,2.2,.6],[9.85,1.4,-.5]])S(i,w.concrete,.45,1,.01,a,c,Pt-.02,{rz:l,shadow:!1});for(const a of[8.3,9.35,Nt])S(i,w.black,.05,et,.06,a,et/2,Pt);S(i,w.black,Nt-8.3,.06,.06,(8.3+Nt)/2,.03,Pt),S(i,w.wall,Nt-8.3,Xe-et,.15,(8.3+Nt)/2,et+(Xe-et)/2,Pt,{shadow:!1}),$e(8.3,Pt-.08,Nt,Pt+.08),Ar(i,{x0:Nt,z0:qt,x1:Nt,z1:Pt,h:et,panel:.9,door:[7.6,8.65],transom:2.4,swing:-1,name:"entrance door"}),S(i,w.metalDark,.06,.05,.4,Nt-.06,2.3,8.4,{shadow:!1}),S(i,w.wall,.15,Xe-et,Pt-qt,Nt,et+(Xe-et)/2,(qt+Pt)/2,{shadow:!1}),S(i,w.blackMatte,.6,.01,1,Nt-.45,.005,8.12,{shadow:!1}),S(i,w.concrete,Nt-es,Xe,qt-mn,(es+Nt)/2,Xe/2,(mn+qt)/2),$e(es,mn,Nt+.05,qt);const r=new st;r.position.set(9.85,0,qt),i.add(r),S(r,w.cream,.56,2.3,.3,0,1.25,.15);for(const a of[.75,1.3,1.85,2.35])S(r,w.white,.58,.035,.32,0,a,.16);for(const[a,c,l]of[[-.14,1.87,.3],[.14,1.87,.26],[0,2.37,.34]])it(r,w.bottleYellow,.035,.05,l,a,c+l/2,.16,{seg:10});for(const[a,c,l]of[[-.12,1.32,w.gallery],[.13,1.32,w.red],[0,.77,w.gallery]])S(r,w.black,.2,.26,.03,a,c+.14,.16,{rx:-.12}),S(r,l,.16,.2,.01,a,c+.14,.178,{shadow:!1,rx:-.12});$e(9.55,qt,10.15,qt+.32),S(i,w.white,.13,.16,.04,9.2,1.35,qt+.02),S(i,w.bottleBlue,.07,.05,.01,9.2,1.38,qt+.045,{shadow:!1});const o=new st;o.userData.label="Reception desk",o.position.set(9.3,0,6.6),i.add(o),S(o,w.cream,.7,.05,1.25,0,.8,0),S(o,w.cream,.05,.78,1.25,-.33,.39,0,{rz:.12});for(const a of[-1,1])S(o,w.cream,.65,.78,.05,0,.39,a*.6);S(o,w.black,.05,.05,1.15,-.4,.03,0),it(o,w.black,.035,.035,.01,.1,.83,.3,{seg:12}),Fp(o,.12,.825,-.4,{petal:w.petalPink,n:6}),Un(o),Ka(i,9.1,6.5,2.15,et,1.3),S(i,w.white,.08,.08,.06,Kt+.05,2.85,9.1),Un(Qu(i,9.95,8.95,{size:.4,h:.45}))}function Hp(i,e,t,n=1.6,{monitor:s=!1}={}){const r=new st;r.userData.label="Cabin desk",r.position.set(e,0,t),i.add(r),S(r,w.whiteGloss,n,.05,.8,0,.77,0),S(r,w.woodDark,n-.1,.72,.05,0,.38,.36);for(let o=0;o<6;o++)S(r,w.black,n-.15,.02,.01,0,.15+o*.1,.39,{shadow:!1});S(r,w.woodDark,.05,.72,.75,-n/2+.05,.38,0),S(r,w.woodDark,.45,.72,.6,n/2-.25,.38,0),s&&(S(r,w.black,.5,.31,.03,-.25,1.12,-.2),S(r,w.black,.04,.3,.03,-.25,.94,-.23)),Un(r)}function X2(i,e,t,n,s){const r=new st;r.userData.label="Built-in shelves",r.position.set(e+s*.2,0,(t+n)/2),i.add(r);const o=n-t;S(r,w.white,.4,2.7,o,0,1.35,0);const a=Math.max(1,Math.round(o/.8));for(let c=0;c<a;c++){const l=-o/2+(c+.5)*(o/a);for(const u of[1.2,1.65,2.1])S(r,w.whiteGloss,.02,.03,o/a-.06,s*.2,u,l,{shadow:!1});for(const u of[.25,.6,.95])S(r,w.whiteGloss,.02,.32,o/a-.06,s*.205,u,l,{shadow:!1});nt()<.6&&S(r,w.black,.04,.18,.2,s*.12,1.32,l),nt()<.6&&S(r,w.gallery,.12,.2,.15,s*.12,1.75,l+.2)}$e(Math.min(e,e+s*.4),t,Math.max(e,e+s*.4),n)}function jf(i,e,t,n){const s=t-e,r=new Ee(Xs(new xt(s,et),s,et,1.6),w.concrete);r.position.set((e+t)/2,et/2,n+.105),r.receiveShadow=!0,i.add(r)}function Zf(i,e,t,{chairsZ:n,back:s,len:r=1.6,visitors:o=[-.4,.4],monitor:a=!1}){Hp(i,e,t,r,{monitor:a}),Un(Nr(i,e-.1,t-.75,0,{exec:!0}),-.1);for(const c of o)Un(Op(i,e+c,n,Math.PI),-.05);eh(i,e,2.55,s+.11,0)}function q2(i){jt(i,Ft,mn,es,mn,{h:Xe}),jt(i,Ft,0,Ft,_s,{h:Xe}),Ar(i,{x0:Ft,z0:_s,x1:Ft,z1:qt,h:et}),jt(i,Ft,_s,Ft,qt,{h:Xe-et,y0:et,collide:!1}),Ar(i,{x0:wr,z0:mn,x1:wr,z1:qt,h:et}),jf(i,Ft+.1,wr-.08,mn),jf(i,wr+.08,es,mn),Ar(i,{x0:Ft,z0:qt,x1:wr,z1:qt,h:et,door:[6.05,5.15],swing:-1,name:"Cabin 2 door"}),Ar(i,{x0:wr,z0:qt,x1:es,z1:qt,h:et,door:[6.25,7.15],swing:-1,name:"Cabin 1 door"}),Ar(i,{x0:0,z0:_s,x1:Ft,z1:_s,h:et,door:[.15,1.05],swing:-1,name:"Corner cabin door"}),Zf(i,7.35,4.35,{chairsZ:5.15,back:mn,len:1.6,visitors:[.35,.85]}),X2(i,es,mn+.1,5.65,-1),Zf(i,4,4.35,{chairsZ:5.15,back:mn,len:1.5,monitor:!1}),Un(Qu(i,5.35,3.45,{size:.35,h:.4})),Hp(i,1.6,1.85),Un(Nr(i,1.5,1.05,0,{exec:!0}),-.1);for(const t of[1.35,2.05])Un(Op(i,t,2.95,Math.PI),-.05);S(i,w.concrete,.55,et,.55,Ft-.38,et/2,.38),$e(Ft-.65,0,Ft,.65),eh(i,Ft-.11,2.55,1.8,-Math.PI/2),S(i,w.blackMatte,.25,.3,.25,2.7,.15,2.9),jt(i,0,kt,1.3,kt,{h:Xe,t:.3});const e=[[1.3,2.6],[4.3,5.6],[5.6,6.9]];for(const[t,n]of e){const s=new st;s.position.set(0,0,kt),s.rotation.y=Math.PI/2,i.add(s);const r=[];for(let o=0;o<3;o++)nt()<.55&&r.push({i:o,row:nt()<.5?0:1});N2(s,0,t,n,{yellowCubbies:r}),$e(t,kt-.2,n,kt+.2)}Un(Bp(i,.6,7.25),-.15),Un(Ju(i,Ft-.47,5,-Math.PI/2,2)),S(i,w.red,.55,.01,.9,.5,.005,5.7,{shadow:!1}),Ka(i,1.9,4.6,2.2,et),Ka(i,5,7,2.25,et)}const Za=[{id:"W1",x:1.3,z:10.7,rot:0},{id:"L1",x:4.9,z:10.75,rot:0},{id:"W2",x:1.15,z:13.6,rot:0},{id:"L2",x:4.95,z:13.7,rot:0},{id:"W3",x:1.55,z:17.25,rot:0},{id:"L3",x:5.25,z:16.95,rot:0},{id:"E1",x:9.25,z:10.95,rot:0},{id:"E2",x:9.3,z:14,rot:0},{id:"E3",x:9.3,z:16.9,rot:0},{id:"LOCK",x:6.875,z:8.875,rot:0},{id:"LOCK2",x:.675,z:8.375,rot:270}],Jf="rgba(238,222,180,0.96)",Y2="rgba(232,186,80,0.16)";function Qf(i){const e=document.createElement("canvas");e.width=256,e.height=640;const t=e.getContext("2d"),n=(r,o)=>{t.fillStyle=o,t.beginPath(),r.forEach(([a,c],l)=>(l?t.lineTo:t.moveTo).call(t,a*256,c*640)),t.closePath(),t.fill()};t.fillStyle=Jf,t.fillRect(0,0,256,640);for(const[r,o]of i)o?n(r,Jf):(t.save(),t.beginPath(),r.forEach(([a,c],l)=>(l?t.lineTo:t.moveTo).call(t,a*256,c*640)),t.closePath(),t.clip(),t.clearRect(0,0,256,640),t.fillStyle=Y2,t.fillRect(0,0,256,640),t.restore());const s=new Cn(e);return s.colorSpace=Et,new zt({map:s,transparent:!0,roughness:.15,metalness:.05,depthWrite:!1,side:Bt})}const Vp=[Qf([[[[0,.37],[1,.37],[1,1],[0,1]],!1],[[[.6,.15],[.77,.15],[.77,.22],[.6,.22]],!1],[[[1,.37],[.62,.6],[1,.85]],!0],[[[.42,.37],[.62,.37],[.35,.55],[.25,.5]],!0],[[[0,.55],[1,.9],[1,1],[0,1]],!0]]),Qf([[[[0,.3],[.75,.6],[.06,1],[0,1]],!1],[[[0,.42],[.43,.62],[0,.82]],!0],[[[.75,.6],[1,.6],[1,1],[.06,1],[.3,.85]],!0]])];function $2(i,e,t){const n=new st;n.userData.label="Door",i.add(n);const s=9.95,r=Nt,o=10.12,a=En*2,c=Vo,l=2.3;for(const f of[-1,1])S(n,w.concrete,r-s,c,.03,(s+r)/2,c/2,e+f*(En+.015),{shadow:!1});S(n,w.concrete,r-s,.03,a,(s+r)/2,c+.015,e,{shadow:!1});for(const f of[-1,1])S(n,w.black,.07,c,.05,o,c/2,e+f*(En-.025));for(const f of[.04,l,c-.03])S(n,w.black,.07,f===l?.06:.08,a,o,f,e);const u=new Ee(new xt(a-.1,l-.1),t);u.position.set(o,(l+.08)/2,e),u.rotation.y=Math.PI/2,u.renderOrder=2,n.add(u);const h=new Ee(new xt(a-.1,c-l-.1),Vp[0].clone());h.material.map=null,h.material.color.set("#f4e7c4"),h.material.opacity=.75,h.position.set(o,(l+c)/2,e),h.rotation.y=Math.PI/2,h.renderOrder=2,n.add(h),S(n,w.chrome,.12,.35,.025,o,1.05,e+En-.12,{shadow:!1}),$e(s,e-En,r,e+En)}function K2(i,e,t,n,s,r=3,o=4){const a=new st;a.position.set(e,t,n),a.rotation.y=s,a.userData.label="Photo gallery",i.add(a);const c=.3,l=.22,u=.08;for(let h=0;h<o;h++)for(let f=0;f<r;f++){if(h===o-1&&f===r-1)continue;const d=(f-(r-1)/2)*(c+u),g=((o-1)/2-h)*(l+u);S(a,w.black,c,l,.02,d,g,.01,{shadow:!1}),wt(a,w.gallery,c-.04,l-.04,d,g,.021)}}function j2(i,e,t,n,s){$2(i,t,Vp[s]);const r=new st;r.position.set(e,0,t),r.rotation.y=n,r.userData.label="Wall",i.add(r);const o=2*En+.16,a=Vo;for(const c of[-1,1])S(r,w.white,.14,Xe,.08,c*(En+.15),Xe/2,.12);S(r,w.blackMatte,o,Xe-a-.12,.03,0,(a+.12+Xe)/2,.11,{shadow:!1}),S(r,w.white,o,.12,.08,0,a+.06,.12)}const Z2={W:{len:1.4,width:1.2,seatW:.7,name:"Window table"},L:{len:2.8,width:1.2,seatW:.7,name:"Long table"},E:{len:1.3,width:.8,seatW:1.2,name:"East-wall desk"}};function J2(i,e,t,{len:n,width:s,seatW:r},o=0,a="Table"){const c={width:s,seatW:r,chairOff:.12};if(o%180){const u=new st;u.userData.label=a,i.add(u),Yf(u,e,t-n/2,t+n/2,{...c,solidFn:(h,f,d,g)=>$e(h,f,d,g)});return}const l=new st;l.position.set(0,0,t),l.rotation.y=Math.PI/2,l.userData.label=a,i.add(l),Yf(l,0,e-n/2,e+n/2,{...c,solidFn:(u,h,f,d)=>$e(h,t-f,d,t-u)})}function Q2(i){const[e,t,n,s]=[.45,2.95,.5,2.75];jt(i,0,yt,e,yt,{h:Xe}),jt(i,e,yt,t,yt,{h:n}),jt(i,e,yt,t,yt,{h:Xe-s,y0:s,collide:!1}),jt(i,t,yt,en,yt,{h:Xe});{const c=new st;c.userData.label="Meeting room window",i.add(c);const l=new Ee(new xt(t-e,s-n),w.glass);l.position.set((e+t)/2,(n+s)/2,yt),l.renderOrder=2,c.add(l);const u=[e,e+.85,e+1.7,t],h=[n,n+.65,n+1.6,s];for(const f of u)S(c,w.black,.06,s-n+.06,.22,f,(n+s)/2,yt,{shadow:!1});for(const f of h)S(c,w.black,t-e,.06,.22,(e+t)/2,f,yt,{shadow:!1})}{const c=Do.flatMap(u=>[u-En,u+En]),l=[Pt,...c,yt];for(let u=0;u<l.length;u+=2)jt(i,en,l[u],en,l[u+1],{h:Xe});for(const u of Do)jt(i,en,u-En,en,u+En,{h:Xe-Vo,y0:Vo,collide:!1})}S(i,w.ceilingBlack,en,.45,.05,en/2,Xe-.225,yt-.13,{shadow:!1}),S(i,w.ceilingBlack,.05,.45,yt-Pt,en-.13,Xe-.225,(Pt+yt)/2,{shadow:!1}),S(i,w.white,.6,Xe,.6,7.35,Xe/2,15.7).userData.label="Pillar",$e(7.05,15.4,7.65,16),F2(i,7.35,2.35,15.39,Math.PI),S(i,w.white,1.25,Xe,.4,.62,Xe/2,15.7).userData.label="Window column",$e(0,15.5,1.25,15.9);for(const c of Za){const l=Z2[c.id[0]];!l||c.id.startsWith("LOCK")||(J2(i,c.x,c.z,l,c.rot||0,`${l.name} ${c.id}`),c.id[0]==="E"?Ka(i,c.x,c.z,2.2):zp(i,c.x,c.z,Math.min(2.4,l.len-.1),c.rot%180?Math.PI/2:0))}const r=new Ee(new xt(en-3.3,yt-17.6),w.floorBeige);r.rotation.x=-Math.PI/2,r.position.set((3.3+en)/2,.004,(17.6+yt)/2),r.receiveShadow=!0,i.add(r);const o=it(i,w.blackMatte,.16,.16,.6,4.2,.3,yt-.3,{seg:16});Un(o),S(i,w.glassYellow,.18,.38,.02,4.2,.34,yt-.47,{shadow:!1}),Do.forEach((c,l)=>j2(i,en-.1,c,-Math.PI/2,l)),K2(i,en-.115,1.95,14,-Math.PI/2);const a={0:Math.PI,90:Math.PI/2,180:0,270:-Math.PI/2};for(const c of Za.filter(l=>l.id.startsWith("LOCK"))){const l=((c.rot||0)%360+360)%360;O2(i,c.x,c.z-.625,c.z+.625,a[l]);const[u,h]=l%180?[.625,.275]:[.275,.625];$e(c.x-u,c.z-h,c.x+u,c.z+h)}for(const[c,l]of[[1.6,8.6]])Un(Qu(i,c,l,{size:.4,h:.5,mat:w.blackMatte}))}const _i=-40,tl=9,nl=12;let il=5660;const wn=()=>(il=il*16807%2147483647,(il-1)/2147483646),Qt=(i,e)=>i+wn()*(e-i),Ai=(i,e={})=>new zt({color:i,roughness:1,...e});function eM(i){const e={cool:["#a4a8ac","#a3a7aa","#a2a9af","#9ba9b8","#8ea2bd","#7d95b5","#7890b0"],centre:["#ccc8bd","#cec8bb","#cbc6bb","#c4c8c7","#b3c0ca","#a2b4c4","#9bb0c2"],warm:["#e6d5b9","#ead9bd","#efe1c4","#f4efde","#eaebe3","#d0dbe0","#bccbd6"]},t=[0,3,10,18,26,60,90],n=he=>new ut(he),s=(he,j)=>{const F=e[he];if(j<=0)return n(F[0]);let Y=0;for(;Y<t.length-2&&j>t[Y+1];)Y++;const _e=Math.min(1,(j-t[Y])/(t[Y+1]-t[Y]));return n(F[Y]).lerp(n(F[Y+1]),_e)},r=document.createElement("canvas");r.width=256,r.height=128;const o=r.getContext("2d");for(let he=0;he<r.width;he++){let j=he/r.width*360;j>180&&(j-=360);const F=-j,Y=Math.max(-1,Math.min(1,F/38))*Math.max(0,1-Math.max(0,Math.abs(j)-90)/60);for(let _e=0;_e<r.height;_e++){const me=90-_e/(r.height-1)*180,C=s("centre",me).lerp(s(Y<0?"cool":"warm",me),Math.abs(Y));o.fillStyle="#"+C.getHexString(),o.fillRect(he,_e,1,1)}}const a=new Cn(r);a.colorSpace=Et;const c=new Ee(new Xt(1300,32,24),new kn({map:a,side:Tn,fog:!1,depthWrite:!1,toneMapped:!1}));c.renderOrder=-1,i.add(c);const l=new Ee(new xt(2600,2600),Ai("#34462a"));l.rotation.x=-Math.PI/2,l.position.y=_i,i.add(l);const u=new Map,h=(he,j,F)=>{u.has(he)||u.set(he,[]);const Y=j.clone();Y.applyMatrix4(F),u.get(he).push(Y)},f=new ht,d=new Wn,g=new Rn,x=new I,m=new I,p=(he,j,F,Y,_e,me,C,T,B=0)=>{d.setFromEuler(g.set(0,B,0)),f.compose(m.set(F,Y,_e),d,x.set(me,C,T)),h(he,j,f)},v=2016,y=1512,A=3029/2,[E,R,P,b]=[1480,3550,1270,1760],M={x:-2.8,y:1.6,z:12},D=230,G=he=>M.z-(he-v)/A*D,V=he=>M.y+(y-he)/A*D,q=(he,j)=>{const F=M.x-he;if(F<60)return 1/0;const Y=v-(j-M.z)/F*A;return Y<E-60||Y>R+60?1/0:F>D?-1/0:M.y+(y-(b-25))/A*F},ee=new sc(1,1).toNonIndexed(),$=new Jn(.16,.24,1,5,1,!0).toNonIndexed();$.translate(0,.5,0);const le=tM(),z=["#34452a","#3d4f30","#475a37","#516440","#38492d"].map(he=>Ai(he,{flatShading:!0})),de=["#43552f","#4d6136","#3b4c2a","#566b3c"].map(he=>Ai(he,{side:Bt,roughness:.85})),ue=Ai("#4f4a40"),Te=he=>he[Math.floor(wn()*he.length)],Ge=(he,j,F=Qt(9,17),Y=_i)=>{const _e=q(he,j)-Y-2;if(_e<3){_e>1&&qe(he,j,_e/2.2,Y);return}F=Math.min(F,_e);const me=Qt(-.08,.08);p(ue,$,he,Y,j,1,F,1,0);const C=Qt(.8,1.15);d.setFromEuler(g.set(me,wn()*Math.PI*2,me)),f.compose(m.set(he,Y+F,j),d,x.set(C,C,C)),h(Te(de),le,f)};function qe(he,j,F,Y=_i){F=Math.min(F,(q(he,j)-Y-4)/1.8),!(F<.8)&&p(Te(z),ee,he,Y+F*.9+Qt(1,4),j,F*Qt(.9,1.2),F*Qt(.6,.85),F*Qt(.9,1.2),wn()*6)}const te=(he,j)=>he<-7||j<-8&&he<40||j>30&&he<20;for(let he=0;he<2600;he++){const j=Qt(-190,40),F=Qt(-170,210);te(j,F)&&(wn()<.58?Ge(j,F):qe(j,F,Qt(3.5,7)))}for(let he=0;he<5200;he++){const j=Math.PI*.4+wn()*Math.PI*1.25,F=Qt(170,560),Y=tl+Math.cos(j)*F,_e=nl+Math.sin(j)*F;wn()<.55?Ge(Y,_e,Qt(10,18)):qe(Y,_e,Qt(6,11))}for(let he=0;he<1800;he++){const j=Math.PI*.4+wn()*Math.PI*1.25,F=Qt(540,1150);qe(tl+Math.cos(j)*F,nl+Math.sin(j)*F,Qt(14,26))}ne(-700,300,260,62,190),ne(-980,-520,380,75,300),ne(-1050,700,300,60,260),ne(-1100,60,500,35,240);function ne(he,j,F,Y,_e){const me=new Ee(new Xt(1,28,14,0,Math.PI*2,0,Math.PI/2),Ai("#3f5230",{flatShading:!0}));me.scale.set(F,Y,_e),me.position.set(he,_i-2,j),i.add(me);const C=Math.round(F*_e/90);for(let T=0;T<C;T++){const B=wn()*Math.PI*2,ae=Math.sqrt(wn())*.97,ge=Math.cos(B)*ae,se=Math.sin(B)*ae,Le=_i-2+Y*Math.sqrt(Math.max(0,1-ge*ge-se*se)),be=he+ge*F,Ie=j+se*_e;wn()<.35?Ge(be,Ie,Qt(10,16),Le-2):qe(be,Ie,Qt(7,13),Le-3)}}const ve=Ai("#c9c6be",{roughness:.9}),pe=Ai("#b5b0a6",{roughness:.9}),ke=Ai("#6e4234",{roughness:.9}),ze=Ai("#8f9496",{roughness:.6,metalness:.3}),Oe=Ai("#56606a",{roughness:.4}),Ve=new un(1,1,1).toNonIndexed(),fe=new Jn(.5,.5,1,3,1).toNonIndexed();fe.rotateZ(Math.PI/2),fe.rotateX(-Math.PI/2);for(let he=0;he<70;he++){const j=Math.PI*.55+wn()*Math.PI*.95,F=30+Math.pow(wn(),1.4)*420,Y=tl+Math.cos(j)*F,_e=nl+Math.sin(j)*F;if(!te(Y,_e))continue;const me=Qt(8,14),C=Qt(8,13),T=Qt(6,11),B=wn()*Math.PI;if(_i+T+3.5>q(Y,_e))continue;p(wn()<.7?ve:pe,Ve,Y,_i+T/2,_e,me,T,C,B),p(Oe,Ve,Y,_i+T*.62,_e,me+.1,1,C*.6,B);const ae=wn();ae<.45?p(ve,Ve,Y,_i+T+.4,_e,me+.3,.8,C+.3,B):ae<.8?p(ke,fe,Y,_i+T+1.6,_e,me+1,3.2,C+1,B):p(ze,Ve,Y,_i+T+.6,_e,me+1,.25,C+1,B)}const xe=new $u().load("textures/skyline.png");xe.colorSpace=Et,xe.anisotropy=4;const N=new Ee(new xt(G(E)-G(R),V(P)-V(b)),new kn({map:xe,transparent:!0,alphaTest:.03,depthWrite:!1,fog:!1,toneMapped:!1}));N.rotation.y=Math.PI/2,N.position.set(M.x-D,(V(P)+V(b))/2,(G(E)+G(R))/2),N.renderOrder=1,i.add(N);for(const[he,j]of u){const F=new Ee(cc(j,!1),he);F.castShadow=!1,F.receiveShadow=!1,i.add(F)}}function tM(){const i=[];for(let s=0;s<9;s++){const r=s/9*Math.PI*2+s%2*.2,o=s%3===0?.55:.25,a=[];for(let h=0;h<=3;h++){const f=h/3,d=f*4.6,g=o*d*.6-f*f*2.4,x=.55*Math.sin(Math.PI*Math.min(1,f*1.1+.08));a.push({r:d,y:g,w:x})}const c=[Math.cos(r),Math.sin(r)],l=[-Math.sin(r),Math.cos(r)],u=(h,f)=>[c[0]*h.r+l[0]*h.w*f,h.y,c[1]*h.r+l[1]*h.w*f];for(let h=0;h<3;h++){const f=u(a[h],-1),d=u(a[h],1),g=u(a[h+1],-1),x=u(a[h+1],1);i.push(...f,...g,...d,...d,...g,...x)}}const n=new Gt;return n.setAttribute("position",new _t(i,3)),n.computeVertexNormals(),n.setAttribute("uv",new _t(new Float32Array(i.length/3*2),2)),n}const hn=H2,Tt=-3.6,Ri=.25,Hs=3.85,Gp=.12,Ia=-3.95,ds=i=>Hs+i*Gp,Vt=i=>new zt(i),We={curb:Vt({color:"#6f6c66",roughness:.95}),steel:Vt({color:"#8e8d88",roughness:.55,metalness:.55}),rust:Vt({color:"#9b8a78",roughness:.7,metalness:.35}),galv:Vt({color:"#a9aca9",roughness:.45,metalness:.6}),steelRail:Vt({color:"#c4c7c9",roughness:.22,metalness:.95}),poly:new zt({color:"#d2a8c8",transparent:!0,opacity:.42,roughness:.35,depthWrite:!1,side:Bt}),glass:new zt({color:"#d6e6e2",transparent:!0,opacity:.2,roughness:.05,metalness:.1,depthWrite:!1,side:Bt}),clad:Vt({color:"#cfc6b2",roughness:.6,metalness:.25}),plaster:Vt({color:"#e9e6df",roughness:.95}),coir:Vt({color:"#6e4b30",roughness:1}),potWhite:Vt({color:"#efede8",roughness:.55}),leafDark:Vt({color:"#355e2a",roughness:.75}),leafMid:Vt({color:"#5e8a3a",roughness:.75}),leafPale:Vt({color:"#a9bf83",roughness:.75}),leafRed:Vt({color:"#a6473a",roughness:.75}),palm:Vt({color:"#4f7a2f",roughness:.8,side:Bt}),macrame:Vt({color:"#6d5a4b",roughness:1,side:Bt}),cushion:Vt({color:"#d9cdb8",roughness:1}),tableTop:Vt({color:"#8a6142",roughness:.55}),rattan:Vt({color:"#7b6c60",roughness:.9}),water:new zt({color:"#a9cde8",transparent:!0,opacity:.55,roughness:.1,depthWrite:!1}),capBlue:Vt({color:"#2464b0",roughness:.5}),counterTop:Vt({color:"#222222",roughness:.35,metalness:.2}),acGrey:Vt({color:"#d9d9d4",roughness:.6})},nM=(()=>{const i=document.createElement("canvas");i.width=128,i.height=256;const e=i.getContext("2d"),t=["#a4553f","#d9b26a","#5b6f8a","#c98a5a","#7a8a5a","#e6d6b8","#8a4a5a"];for(let s=0;s<256;s+=3)e.fillStyle=t[Math.floor(nt()*t.length)],e.fillRect(0,s,128,3);const n=new Cn(i);return n.colorSpace=Et,n})();We.rug=Vt({map:nM,roughness:1});const iM=(i=16)=>{const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.strokeStyle="#fff",t.lineWidth=3;for(let s=-128;s<=256;s+=i)t.beginPath(),t.moveTo(s,0),t.lineTo(s+128,128),t.stroke(),t.beginPath(),t.moveTo(s,128),t.lineTo(s+128,0),t.stroke();const n=new Cn(e);return n.wrapS=n.wrapT=wi,n},Wp=iM(22);Wp.repeat.set(5,3);We.macrameNet=Vt({color:"#6d5a4b",alphaMap:Wp,alphaTest:.5,roughness:1,side:Bt});const sM=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,3),e.fillRect(0,0,3,64);const t=new Cn(i);return t.wrapS=t.wrapT=wi,t})();function qs(i,e,t,n,s){const r=new st;return r.position.set(e,t,n),s&&(r.userData.label=s),i.add(r),r}function Da(i,e,t,n,s,r,o,a=8){return it(i,e,t,t,o-r,n,s,(r+o)/2,{rx:Math.PI/2,seg:a,shadow:!1})}function Na(i,e,t,n,s,r,o=7){for(let a=0;a<o;a++){const c=new Ee(new sc(1,0),r[a%r.length]),l=s*(.45+nt()*.4);c.scale.set(l,l*(.7+nt()*.5),l);const u=nt()*Math.PI*2,h=nt()*s*.6;c.position.set(e+Math.cos(u)*h,t+l*.8+nt()*s*.6,n+Math.sin(u)*h),c.rotation.set(nt()*3,nt()*3,nt()*3),c.castShadow=!0,c.receiveShadow=!0,i.add(c)}}function Xp(i,e,t,n,{n:s=12,len:r=.6,mat:o=We.leafMid,droop:a=.5,w:c=.12}={}){for(let l=0;l<s;l++){const u=new st;u.position.set(e,t,n),u.rotation.y=l/s*Math.PI*2+nt()*.4,i.add(u);const h=a*(.5+nt()),f=new Ee(new xt(r,c),o);f.position.set(Math.cos(h)*r/2,Math.sin(-h+.9)*r/2-.05,0),f.rotation.set(Math.PI/2-.3,0,-h+.9-Math.PI/4),f.castShadow=!0,u.add(f)}}function Sr(i,e,t,n="snake",{r:s=.18,h:r=.32}={}){const o=qs(i,e,0,t,"Plant");return it(o,We.potWhite,s,s*.78,r,0,r/2,0,{seg:16}),it(o,w.soil,s-.02,s-.02,.01,0,r-.01,0,{seg:12,shadow:!1}),n==="snake"?lc(o,0,r,0,10,.75):n==="bush"?Na(o,0,r,0,s*1.6,[We.leafDark,We.leafMid]):n==="variegated"?Na(o,0,r,0,s*1.7,[We.leafPale,We.leafMid,We.leafPale],9):n==="croton"?Na(o,0,r,0,s*1.4,[We.leafRed,We.leafMid,We.leafRed]):n==="fern"?Xp(o,0,r+.08,0,{n:16,len:.55,mat:We.leafPale,droop:.9,w:.16}):n==="tree"&&(it(o,w.woodDark,.015,.02,.9,0,r+.45,0,{seg:5}),Na(o,0,r+.55,0,.35,[We.leafMid,We.leafPale,We.leafDark],8)),$e(e-s,t-s,e+s,t+s),o}function ed(i,e,t,n,s,r=We.coir){it(i,w.blackMatte,.004,.004,n-s,e,(n+s)/2,t,{seg:3,shadow:!1}),it(i,r,.07,.11,.3,e,s-.15,t,{seg:10})}function rM(i,e,t,n=0){const s=qs(i,e,0,t,"Bar stool");s.rotation.y=n;for(const[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])S(s,w.black,.025,.78,.025,r*.15,.39,o*.15,{rx:o*.05,rz:-r*.05});S(s,w.black,.34,.04,.34,0,.78,0);for(const r of[-1,1])S(s,w.black,.025,.36,.025,.15,.96,r*.13);S(s,w.black,.025,.06,.3,.15,1.12,0),S(s,w.black,.3,.02,.02,0,.3,.15,{shadow:!1}),S(s,w.black,.3,.02,.02,0,.3,-.15,{shadow:!1})}function oM(i,e,t,n=.62){const s=qs(i,e,0,t,"Stool");it(s,We.tableTop,.17,.17,.04,0,n,0,{seg:16});for(let o=0;o<3;o++){const a=o/3*Math.PI*2;S(s,w.black,.02,n,.02,Math.cos(a)*.14,n/2,Math.sin(a)*.14,{rz:Math.cos(a)*.1,rx:-Math.sin(a)*.1})}const r=new Ee(new Yr(.16,.008,4,20),w.black);r.rotation.x=Math.PI/2,r.position.y=.22,s.add(r),$e(e-.18,t-.18,e+.18,t+.18)}function aM(i){const e=qs(i,0,0,0,"Terrace"),t=hn;Rt(e,w.floorTerrace,Tt,0,0,hn,0),S(e,We.curb,.3,Ri,t,Tt+.15,Ri/2,t/2),S(e,We.curb,.32,.03,t,Tt+.15,Ri+.015,t/2,{shadow:!1}),$e(Tt-.1,0,Tt+.32,hn),$e(Tt,-.15,0,0),$e(Tt,hn,0,hn+.15);const n=Tt+.1,s=Ri+1;for(let m=0;m<t-.01;m+=1.2){const p=Math.min(1.2,t-m)-.02,v=new Ee(new xt(p,s-Ri-.06),We.glass);v.position.set(n,(Ri+s)/2,m+.01+p/2),v.rotation.y=Math.PI/2,v.renderOrder=2,e.add(v),S(e,w.chrome,.03,.06,.05,n,s-.04,m+.06,{shadow:!1}),S(e,w.chrome,.03,.06,.05,n,Ri+.06,m+.06,{shadow:!1})}Da(e,We.steelRail,.028,n,s+.03,0,t,12),Da(e,We.galv,.035,Tt+.42,.55,.4,t-.4,10);for(let m=1.5;m<t;m+=3.1)S(e,We.galv,.03,.3,.03,Tt+.42,.4,m,{shadow:!1});for(const m of[.12,t-.12])it(e,We.steelRail,.025,.025,s,Tt+.35,s/2,m,{seg:10}),S(e,We.steelRail,.25,.04,.04,Tt+.23,s+.03,m,{shadow:!1});const r=m=>m<kt?et:2.8;for(const[m,p]of[[0,kt],[kt,hn]]){const v=r(m),y=Hs+.2-v;S(e,We.clad,.03,y,p-m,-.09,v+y/2,(m+p)/2,{shadow:!1});for(let _=m+.08;_<p;_+=.16)S(e,We.clad,.025,y,.035,-.115,v+y/2,_,{shadow:!1});S(e,We.steel,.12,.08,p-m,-.12,v+.04,(m+p)/2,{shadow:!1})}const o=-Ia,a=Math.atan2(o*Gp,o),c=o/Math.cos(a),l=Ia/2,u=S(e,We.poly,c,.012,t+.4,l,ds(l)+.06,t/2,{shadow:!1,rz:a});u.renderOrder=3;for(let m=0;m<=t+.01;m+=t/16)S(e,Math.round(m/(t/16))%3===1?We.rust:We.steel,c,.1,.06,l,ds(l),m,{rz:a});for(const m of[-.35,-1.25,-2.15,-3.05,-3.85])Da(e,We.steel,.025,m,ds(m)+.03,-.2,t+.2);S(e,We.steel,.16,.14,t+.4,Ia,ds(Ia)-.02,t/2),S(e,We.steel,.12,.12,t,-.18,Hs-.06,t/2);const h=-1.8,f=ds(h)-.28;Da(e,We.galv,.02,h,f,0,t);for(let m=.5;m<t;m+=1.55){it(e,We.galv,.006,.006,.26,h,f+.13,m,{seg:4,shadow:!1}),it(e,w.white,.055,.045,.1,h,f-.07,m,{seg:12,shadow:!1});const p=new Ee(new ei(.035,12),w.spotGlow);p.rotation.x=Math.PI/2,p.position.set(h,f-.121,m),e.add(p)}const d=Tt+.36;for(let m=0;m<=8;m++){const p=.25+m*(t-.5)/8,v=ds(d);if(it(e,We.galv,.045,.045,v-Ri,d,(v+Ri)/2,p,{seg:10}),m>=3&&m<=5){it(e,We.coir,.085,.085,2.5,d,Ri+1.3,p,{seg:12});for(const y of[.9,1.6,2.3])it(e,We.plaster,.088,.088,.06,d,y,p,{seg:12,shadow:!1});ed(e,d+.16,p+.05,v-.1,2.75)}$e(d-.09,p-.09,d+.09,p+.09)}const g=-.32,x=[[1.4,"tree"],[1.95,"fern"],[2.6,"croton"],[3.2,"variegated"],[4.35,"snake"],[7,"snake"],[7.5,"variegated"],[8,"bush"],[8.5,"snake"],[10.6,"bush"],[11.1,"snake"],[11.6,"variegated"],[12.1,"snake"],[13.6,"tree"],[14.6,"bush"],[16.3,"snake"],[17.2,"variegated"],[18.2,"snake"],[19.3,"croton"],[22,"fern"]];for(const[m,p]of x)Sr(e,g-(p==="fern"?.1:0),m,p,p==="tree"?{r:.2,h:.34}:{});Sr(e,Tt+.75,12,"variegated",{r:.22,h:.4}),Sr(e,Tt+.75,8.3,"tree",{r:.18,h:.34});for(const m of[6.2,9.9,13])ed(e,-.55,m,Hs-.1,2.55,We.potWhite);S(e,We.rug,.55,.012,.85,-.45,.007,5.7,{shadow:!1}),S(e,We.rug,.5,.012,.8,-.4,.007,20.8,{shadow:!1,ry:.08});{const y=qs(e,-.95,0,9.3,"Hanging chair");it(y,We.coir,.012,.012,ds(-.95)-1.75,0,(ds(-.95)+1.75)/2,0,{seg:4});const _=new I(0,1.75,0);for(const P of[-.6,.6,Math.PI-.5,Math.PI+.5]){const M=new I(Math.cos(P)*.46,1.05,Math.sin(P)*.46).clone().sub(_),D=new Ee(new Jn(.01,.01,M.length(),4),We.coir);D.position.copy(_).addScaledVector(M,.5),D.quaternion.setFromUnitVectors(new I(0,1,0),M.normalize()),y.add(D)}const A=new Ee(new Yr(.5,.025,6,32),We.macrame);A.position.set(0,.55+.5,0),A.rotation.x=Math.PI/2,y.add(A);const E=new Ee(new Xt(.5,20,12,0,Math.PI*2,Math.PI*.5,Math.PI*.42),We.macrameNet);E.position.y=.55+.42,E.castShadow=!0,y.add(E);const R=new Ee(new Xt(.5,20,10,-Math.PI/2,Math.PI,.15*Math.PI,.38*Math.PI),We.macrameNet);R.position.y=.55+.42,R.castShadow=!0,y.add(R),it(y,We.cushion,.36,.36,.1,0,.55+.07,0,{seg:20});for(let P=0;P<14;P++){const b=P/14*Math.PI*2;it(y,We.macrame,.012,.004,.1,Math.cos(b)*.3,.55-.02,Math.sin(b)*.3,{seg:4,shadow:!1})}$e(-.95-.45,9.3-.45,-.95+.45,9.3+.45)}{const v=Tt+.58;S(e,We.tableTop,.38,.05,13.4-10.3,v,1.05,(10.3+13.4)/2);for(const y of[10.3+.15,(10.3+13.4)/2,13.4-.15])S(e,w.black,.04,1.03,.04,v-.05,.52,y),S(e,w.black,.3,.03,.03,v,.98,y,{shadow:!1});$e(v-.2,10.3,v+.2,13.4);for(const y of[10.8,11.6,12.4,13.1])rM(e,v+.5,y,0);for(const y of[10.8,11.6,12.4,13.1])$e(v+.33,y-.18,v+.67,y+.18)}{const v=Hs+.1,y=Tt+.45,_=.9,A=Math.hypot(-.3-y,v-_),E=Math.atan2(v-_,-.3-y);S(e,We.curb,A,.42,.3,(-.3+y)/2,(v+_)/2,.06+.1,{rz:E});const R=new Xo([new we(y,0),new we(-.3,0),new we(-.3,v),new we(y,_)]),P=new Ee(new Yu(R),Vt({color:"#cfccc4",roughness:.95,side:Bt}));P.position.z=.06-.04,P.receiveShadow=!0,e.add(P),S(e,We.curb,-.3-y,.3,.3,(-.3+y)/2,.15,.06+.1),S(e,We.plaster,.35,Hs,.2,-.17,Hs/2,.06+.05);const b=-2.75,M=-.4,D=2.55,G=sM.clone();G.needsUpdate=!0,G.repeat.set((M-b)/.1,D/.1);const V=Vt({color:"#2a2a2a",alphaMap:G,alphaTest:.5,side:Bt,roughness:.8}),q=new Ee(new xt(M-b,D),V);q.position.set((b+M)/2,D/2,.06+.02),e.add(q);for(const $ of[b,(b+M)/2,M])S(e,w.black,.03,D,.03,$,D/2,.06+.03,{shadow:!1});S(e,w.black,M-b,.03,.03,(b+M)/2,D,.06+.03,{shadow:!1});const ee=$=>_+($-y)*(v-_)/(-.3-y);for(let $=0;$<5;$++){const le=.45+$*.42;for(let z=b+.2;z<M-.1;z+=.36)le>ee(z)-.35||(S(e,w.blackMatte,.2,.13,.1,z,le,.06+.08,{shadow:!1}),lc(e,z,le+.06,.06+.1,6,.32).rotation.x=.25)}Sr(e,-.75,.45,"tree",{r:.17,h:.3}),Sr(e,-1.15,.4,"bush")}{const m=hn-.12;S(e,We.plaster,-Tt,1.15,.24,Tt/2,.575,m),S(e,We.plaster,-Tt,.5,.6,Tt/2,1.4,hn+.3);for(let E=Tt+.4;E<-.2;E+=.7)it(e,w.woodDark,.03,.04,.9,E,2.05,hn+.3,{seg:6}),Xp(e,E,2.45+nt()*.3,hn+.3,{n:9,len:.9,mat:We.palm,droop:.45,w:.22});S(e,w.whiteGloss,.4,.14,.45,-.42,.86,23.3),it(e,w.chrome,.012,.012,.14,-.27,1,23.3,{seg:6,shadow:!1}),$e(-.64,23.05,-.2,23.55);{const E=qs(e,-.42,2.25,24.2,"AC outdoor unit");S(E,We.acGrey,.32,.55,.78,0,0,0);const R=new Ee(new ei(.2,18),w.metalDark);R.rotation.y=-Math.PI/2,R.position.set(-.161,0,-.1),E.add(R),S(E,w.metalDark,.3,.03,.3,.05,-.29,0,{shadow:!1})}const p=-2.45,v=-.6,y=m-.42;S(e,w.white,v-p,.86,.58,(p+v)/2,.43,y),S(e,We.counterTop,v-p+.04,.04,.62,(p+v)/2,.88,y);for(let E=p+.45;E<v;E+=.45)S(e,w.metalDark,.008,.78,.005,E,.43,y-.292,{shadow:!1});S(e,w.blackMatte,.4,.5,.02,-1.75,.45,y-.29,{shadow:!1});for(let E=0;E<6;E++)S(e,[w.bottleTeal,w.red,w.cream][E%3],.04,.2+nt()*.06,.15,-1.9+E*.055,.35,y-.2,{shadow:!1});for(const[E,R]of[[-2.25,w.chrome],[-1.98,w.black],[-1.2,w.chrome]])it(e,R,.07,.085,.2,E,1,y,{seg:14}),S(e,w.black,.03,.12,.03,E+.09,1,y,{shadow:!1});S(e,w.blackMatte,.18,.08,.18,-1.55,.94,y,{shadow:!1}),$e(p,y-.3,v,hn);const _=-1.75,A=22.95;S(e,We.tableTop,.72,.05,1.4,_,.95,A);for(const E of[-1,1])S(e,w.black,.04,.95,.04,_+E*.25,.48,A-.5,{rz:E*.18}),S(e,w.black,.04,.95,.04,_+E*.25,.48,A+.5,{rz:E*.18});S(e,w.black,.04,.04,1,_,.3,A,{shadow:!1}),$e(_-.36,A-.7,_+.36,A+.7);for(const[E,R]of[[_-.6,A-.35],[_-.6,A+.35],[_+.6,A-.3],[_+.6,A+.4],[_+.1,A+.95]])oM(e,E,R);{const E=qs(e,_-.05,0,A-.95,"Rattan stool");S(E,We.rattan,.34,.5,.34,0,.25,0),S(E,We.rattan,.4,.05,.4,0,.52,0),$e(_-.25,A-1.15,_+.15,A-.75)}for(const[E,R]of[[Tt+.75,hn-1.15],[Tt+.75,hn-.8],[Tt+1.05,hn-.95]])it(e,We.water,.14,.14,.46,E,.23,R,{seg:16,shadow:!1}).renderOrder=2,it(e,We.capBlue,.04,.04,.06,E,.49,R,{seg:10,shadow:!1});$e(Tt+.55,hn-1.35,Tt+1.25,hn-.6),Sr(e,-.4,22.75,"bush")}for(let m=0;m<40;m++){const p=S(e,nt()>.5?We.leafPale:w.woodDark,.04,.003,.025,Tt+.5+nt()*2.8,.004,1+nt()*(hn-2),{shadow:!1,ry:nt()*3});p.receiveShadow=!1}}const td=40;function cM(i){_o(i,0,0,0,4.9,et),_o(i,0,6.5,0,kt,et),S(i,w.black,.12,.08,1.6,0,2.44,5.7),S(i,w.chrome,.1,.015,1.6,0,.008,5.7,{shadow:!1});const e=new Ee(new xt(1.6,et-2.48),w.glass);e.position.set(0,(2.48+et)/2,5.7),e.rotation.y=Math.PI/2,e.renderOrder=2,i.add(e),jt(i,0,0,0,kt,{h:Xe-et,y0:et,collide:!1});const[t,n]=Mu;_o(i,0,kt,0,t,2.8),_o(i,0,n,0,Ut,2.8),S(i,w.black,.12,.08,n-t,0,2.44,(t+n)/2),S(i,w.chrome,.1,.015,n-t,0,.008,(t+n)/2,{shadow:!1});const s=new Ee(new xt(n-t,2.8-2.48),w.glass);s.position.set(0,(2.48+2.8)/2,(t+n)/2),s.rotation.y=Math.PI/2,s.renderOrder=2,i.add(s),S(i,w.wall,.12,Xe-2.8,Ut-kt,.02,2.8+(Xe-2.8)/2,(kt+Ut)/2,{shadow:!1});for(let o=2.95;o<Xe-.05;o+=.14)S(i,w.wallWarm,.02,.03,$f-kt,.09,o,(kt+$f)/2,{shadow:!1});jt(i,-.1,Ut,-.1,Sn+.2,{h:Xe+.3,mat:w.wallWarm,t:.2}),_o(i,0,0,Ft,0,et),jt(i,0,0,Ft,0,{h:Xe-et,y0:et,collide:!1}),aM(i);const r=20-Tt;S(i,w.wallWarm,r,td,Sn+1.2,Tt+r/2,-td/2-.01,(Sn-1)/2+.1,{shadow:!1});for(let o=1;o<12;o++)S(i,w.blackMatte,.05,.25,Sn+1.3,Tt-.01,-o*3.4,(Sn-1)/2+.1,{shadow:!1});eM(i)}const lM=new zt({color:"#a39b91",roughness:.55}),sl=new zt({color:"#ece7dc",roughness:.6}),uM=new zt({color:"#e9e4d6",roughness:.7}),hM=new zt({color:"#6c6a66",roughness:.5,metalness:.3});function fM(i,e,t,n=2.45){it(i,w.black,.004,.004,Xe-n,e,(Xe+n)/2,t,{seg:3,shadow:!1}),it(i,w.black,.045,.045,.2,e,n-.1,t,{seg:14});const s=new Ee(new ei(.035,12),w.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,n-.201,t),i.add(s)}function dM(i){const e=new st;e.userData.label="Meeting room",i.add(e),Rt(e,w.floorDark,0,yt,Hn,Ut,0),Rt(e,w.ceilingBlack,0,yt,Hn,Ut,Xe,{down:!0}),jt(e,Hn+.1,yt,Hn+.1,Ut+.1,{h:Xe,mat:w.white});const[t,n]=V2;jt(e,0,Ut+.1,t,Ut+.1,{h:Xe,mat:w.white}),jt(e,n,Ut+.1,Hn+.2,Ut+.1,{h:Xe,mat:w.white}),jt(e,t,Ut+.1,n,Ut+.1,{h:Xe-2.12,y0:2.12,mat:w.white,collide:!1}),it(e,w.ceilingBlack,.16,.16,Ut-yt,Hn-.35,Xe-.3,(yt+Ut)/2,{rx:Math.PI/2,seg:12,shadow:!1}),S(e,w.ceilingBlack,Hn,.35,.3,Hn/2,Xe-.18,yt+.25,{shadow:!1});for(const[l,u,h,f]of[[0,Ut-.01,Hn,Ut-.01],[Hn-.01,yt,Hn-.01,Ut]])S(e,w.concrete,Math.max(.02,h-l),.08,Math.max(.02,f-u),(l+h)/2,.04,(u+f)/2,{shadow:!1});const s=1.9,r=19.85,o=22,a=1,c=(r+o)/2;{const l=new st;l.userData.label="Meeting table",e.add(l),S(l,lM,a,.04,o-r,s,.75,c),S(l,sl,a+.01,.025,o-r+.01,s,.72,c,{shadow:!1});for(const u of[r+.15,o-.15])for(const h of[-1,1])S(l,w.black,.05,.72,.05,s+h*(a/2-.08),.36,u);for(const u of[r+.5,c-.1,o-.6]){const h=new Ee(new ei(.04,14),w.black);h.rotation.x=-Math.PI/2,h.position.set(s+.1,.772,u),l.add(h)}S(l,w.black,.05,.02,.2,s-.15,.78,c-.4,{shadow:!1,ry:.4}),Fp(l,s,.77,c+.35,{petal:w.petalWhite,n:5}),$e(s-a/2,r,s+a/2,o)}for(const l of[r+.4,c,o-.4])Nr(e,s-a/2-.32,l,Math.PI/2),Nr(e,s+a/2+.32,l,-Math.PI/2);Nr(e,s,o+.35,Math.PI);{const l=new st;l.userData.label="TV",l.position.set(1.75,0,19.25),e.add(l);for(let u=0;u<4;u++)S(l,w.black,.04,.03,.34,Math.sin(u*Math.PI/2)*.15,.04,Math.cos(u*Math.PI/2)*.15,{ry:u*Math.PI/2});it(l,w.black,.025,.025,1.5,0,.78,0,{seg:8}),S(l,w.black,1.1,.64,.06,0,1.55,.03),S(l,w.screenOff,1.06,.6,.005,0,1.55,.062,{shadow:!1}),$e(1.55,19.05,1.95,19.45)}{const l=zp(e,s,c,1.8,Math.PI/2,2.35,Xe);l.children[0].material=hM,l.children[0].scale.set(1.8,.09,.09)}for(const[l,u]of[[.8,19.6],[.8,21.6],[3,19.6],[3,21.6]])fM(e,l,u);eh(e,Hn-.02,2.7,20.6,-Math.PI/2);{const l=new st;l.userData.label="Door frame",e.add(l);const u=Ut+.1,h=n-t;for(const g of[t-.02,n+.02])S(l,sl,.04,2.14,.22,g,1.07,u);S(l,sl,h+.08,.04,.22,(t+n)/2,2.14,u);const f=new st;f.position.set(n,0,u);const d=h-.02;S(f,uM,d,2.08,.04,-d/2,1.05,0);for(const g of[-1,1]){S(f,w.chrome,.025,.32,.03,-d+.1,1.05,g*.06);for(const x of[.92,1.18])S(f,w.chrome,.02,.02,.05,-d+.1,x,g*.035,{shadow:!1})}uc.push({leaf:f,closed:0,open:1.45,name:"game room door",handle:[-d+.1,1.3,.1],x:(t+n)/2,z:u,block:{minX:t,maxX:n,minZ:u-.1,maxZ:u+.1}})}{const l=new st;l.userData.label="Shelf",e.add(l);const u=.38,h=Ut-.3,f=.5,d=.38,g=2.3;for(const x of[-1,1])S(l,w.white,.02,g,d,u+x*f/2,g/2,h);S(l,w.white,f,g,.02,u,g/2,h+d/2);for(const x of[.02,.55,.95,1.45,1.9,g])S(l,w.white,f,.02,d,u,x,h);S(l,w.white,f-.02,.52,.02,u,.28,h-d/2,{shadow:!1}),S(l,w.woodDark,.3,.16,.22,u,1.04,h),S(l,w.black,.26,.02,.16,u,1.47,h,{shadow:!1}),$e(u-f/2,h-d/2,u+f/2,h+d/2)}{const l=new st;l.userData.label="Cabinet",e.add(l),S(l,w.woodDark,.9,.45,.4,.95,.225,yt+.32),S(l,w.white,.42,.2,.01,.75,.32,yt+.52,{shadow:!1}),$e(.5,yt+.1,1.4,yt+.52)}}const ps={x:.088,y:1.4,z:25.35,w:1.68,h:.94},ci=i=>new zt(i),Yt={navy:ci({color:"#1e2740",roughness:.9}),ledPurple:ci({color:"#b46cff",emissive:"#9b4dff",emissiveIntensity:2.2}),ledCyan:ci({color:"#5fe3ff",emissive:"#29c8ff",emissiveIntensity:1.8}),felt:ci({color:"#1f6b46",roughness:.95}),railWood:ci({color:"#5a3522",roughness:.5}),ps5White:ci({color:"#f4f4f2",roughness:.35}),rug:ci({color:"#3a3f4b",roughness:1}),cue:ci({color:"#c79a62",roughness:.5}),beanRed:ci({color:"#a8322d",roughness:.95}),beanBlue:ci({color:"#2d4f8a",roughness:.95})},pM=["#f2c21b","#1f4fb4","#c8281f","#5b2a86","#ef7a1a","#1d7a3c","#7a1f1f","#111111"],nd=pM.map(i=>ci({color:i,roughness:.2,metalness:.05})),id=(()=>{const i=document.createElement("canvas");i.width=512,i.height=160;const e=i.getContext("2d");e.font='700 110px "Avenir Next", "Helvetica Neue", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ff4fd8",e.shadowBlur=24,e.fillStyle="#ffd6f6",e.fillText("GAME ON",256,84);const t=new Cn(i);return t.colorSpace=Et,t})();Yt.neon=ci({map:id,emissive:"#ffffff",emissiveMap:id,emissiveIntensity:1.6,transparent:!0,alphaTest:.05});function $i(i,e,t=0,n=0,s=0){const r=new st;return r.userData.label=e,r.position.set(t,0,n),r.rotation.y=s,i.add(r),r}function sd(i,e,t,n,s,r){const o=$i(i,"Controller",e,n,s);S(o,r,.16,.035,.07,0,t,0,{shadow:!1});for(const a of[-1,1])S(o,r,.05,.035,.06,a*.065,t,.04,{shadow:!1,ry:a*.4});S(o,w.black,.11,.004,.03,0,t+.019,-.005,{shadow:!1})}function mM(i){const e=$i(i,"Game room"),t=Ut+.2;Rt(e,w.floorDark,0,Ut,xi,Sn,0),Rt(e,w.ceilingBlack,0,Ut,xi,Sn,Xe,{down:!0}),jt(e,Hn+.2,Ut+.1,xi+.2,Ut+.1,{h:Xe,mat:w.white}),jt(e,xi+.1,Ut,xi+.1,Sn+.2,{h:Xe,mat:w.white}),jt(e,0,Sn+.1,xi+.2,Sn+.1,{h:Xe,mat:w.white}),S(e,w.ceilingBlack,xi,.4,.3,xi/2,Xe-.2,(t+Sn)/2,{shadow:!1});const n=ps.z;S(e,Yt.navy,.02,Xe,Sn-t-.4,.01,Xe/2,(t+Sn)/2),S(e,Yt.ledPurple,.02,.025,Sn-t-.6,.03,Xe-.25,(t+Sn)/2,{shadow:!1});{const c=$i(e,"TV");S(c,w.black,.05,.98,1.72,.06,1.4,n),S(c,w.screenDark,.005,.94,1.68,.087,1.4,n,{shadow:!1}),S(c,Yt.ledCyan,.01,1.06,1.8,.03,1.4,n,{shadow:!1})}{const c=$i(e,"TV console");S(c,w.white,.42,.42,1.9,.24,.21,n);for(const l of[n-.48,n+.48])S(c,w.metalDark,.005,.32,.9,.452,.21,l,{shadow:!1});$e(0,n-.95,.45,n+.95)}{const c=$i(e,"PS5",.25,n+.65);S(c,w.black,.06,.38,.22,0,.62,0);for(const l of[-1,1])S(c,Yt.ps5White,.02,.4,.26,l*.04,.63,0,{rz:l*.04});S(c,w.black,.1,.02,.12,0,.43,0,{shadow:!1})}S(e,w.blackMatte,.18,.26,.18,.25,.55,n-.75),S(e,Yt.rug,2.2,.01,2.4,1.75,.006,n,{shadow:!1}),Un(Ju(e,2.95,n,-Math.PI/2,3),-.05);{const c=$i(e,"Coffee table");S(c,w.woodDark,.55,.04,1,1.75,.4,n);for(const[l,u]of[[-1,-1],[1,-1],[1,1],[-1,1]])S(c,w.black,.03,.38,.03,1.75+l*.23,.19,n+u*.45);$e(1.45,n-.52,2.05,n+.52)}sd(e,1.72,.44,n-.22,.3,Yt.ps5White),sd(e,1.8,.44,n+.2,-.2,Yt.ps5White),S(e,w.black,.12,.02,.05,1.68,.43,n+.38,{shadow:!1,ry:.5});for(const[c,l]of[[23.8,Yt.beanRed],[26.65,Yt.beanBlue]])Un(Bp(e,1.35,c,l),-.15);const s=5,r=25,o=2.3,a=1.25;{const c=$i(e,"Pool table");S(c,Yt.railWood,a+.2,.2,o+.2,s,.7,r),S(c,Yt.felt,a,.02,o,s,.81,r,{shadow:!1});for(const d of[-1,1])S(c,Yt.felt,.06,.05,o,s+d*(a/2-.03),.835,r,{shadow:!1}),S(c,Yt.felt,a,.05,.06,s,.835,r+d*(o/2-.03),{shadow:!1}),S(c,Yt.railWood,.1,.06,o+.2,s+d*(a/2+.05),.83,r),S(c,Yt.railWood,a+.2,.06,.1,s,.83,r+d*(o/2+.05));for(const[d,g]of[[-1,-1],[1,-1],[1,1],[-1,1]])S(c,Yt.railWood,.14,.62,.14,s+d*(a/2-.05),.31,r+g*(o/2-.1));for(const d of[-1,1])for(const g of[-1,0,1]){const x=new Ee(new ei(.055,14),w.black);x.rotation.x=-Math.PI/2,x.position.set(s+d*(a/2-.04),.865,r+g*(o/2-.04)),c.add(x)}const l=.028,u=new Xt(l,14,10);let h=0;for(let d=0;d<5;d++)for(let g=0;g<=d;g++){const x=new Ee(u,nd[h++%nd.length]);x.position.set(s+(g-d/2)*l*2.05,.82+l,r+.45+d*l*1.8),x.castShadow=!0,c.add(x)}const f=new Ee(u,Yt.ps5White);f.position.set(s+.05,.82+l,r-.6),f.castShadow=!0,c.add(f),it(c,Yt.cue,.006,.012,1.45,s-.35,.9,r-.2,{rx:Math.PI/2-.03,seg:8}),$e(s-a/2-.1,r-o/2-.1,s+a/2+.1,r+o/2+.1)}{const c=$i(e,"Pool light");S(c,w.black,.32,.12,1.7,s,1.85,r);for(const l of[-.55,0,.55]){const u=new Ee(new xt(.24,.4),w.lightStrip);u.rotation.x=Math.PI/2,u.position.set(s,1.789,r+l),c.add(u)}for(const l of[-.7,.7])it(c,w.black,.004,.004,Xe-1.91,s,(Xe+1.91)/2,r+l,{seg:3,shadow:!1})}{const c=$i(e,"Cue rack");S(c,w.woodDark,.05,.08,.7,xi-.03,1.55,23.6),S(c,w.woodDark,.05,.06,.7,xi-.03,.1,23.6);for(let l=0;l<4;l++)it(c,Yt.cue,.007,.013,1.5,xi-.07,.8,23.35+l*.16,{seg:8})}{const c=new Ee(new xt(1.5,.47),Yt.neon);c.position.set(4.7,2.45,Sn-.01),c.rotation.y=Math.PI,c.userData.label="Neon sign",e.add(c)}for(const[c,l]of[[1.8,23.6],[1.8,26.4]]){it(e,w.black,.05,.05,.12,c,Xe-.06,l,{seg:10,shadow:!1});const u=new Ee(new ei(.035,10),w.spotGlow);u.rotation.x=Math.PI/2,u.position.set(c,Xe-.121,l),e.add(u)}}const He=Nt,Z=Nt+5.8,bn=-2,fn=47,Ze=3.2,rt=3,dn=.6,rd=2.4;let od=4242;const pn=()=>((od=od*16807%2147483647)-1)/2147483646;function Gn(i,e,t,n=!0){const s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);const r=new Cn(s);return r.colorSpace=Et,n&&(r.wrapS=r.wrapT=wi),r.anisotropy=8,r}function ad(i,e,t){return Gn(1024,1024,(n,s)=>{const o=s/2;for(let a=0;a<2;a++)for(let c=0;c<2;c++){const l=(pn()-.5)*14;n.fillStyle=`rgb(${i[0]+l},${i[1]+l},${i[2]+l})`,n.fillRect(a*o,c*o,o,o),n.save(),n.beginPath(),n.rect(a*o,c*o,o,o),n.clip();for(let u=0;u<7;u++){n.strokeStyle=e.replace("A",(.06+pn()*.14).toFixed(2)),n.lineWidth=.8+pn()*2,n.beginPath();let h=a*o+pn()*o,f=c*o;n.moveTo(h,f);for(let d=0;d<6;d++)h+=(pn()-.4)*o*.5,f+=o/5,n.quadraticCurveTo(h+(pn()-.5)*60,f-o/10,h,f);n.stroke()}for(let u=0;u<400;u++){const h=(pn()-.5)*18;n.fillStyle=`rgba(${i[0]+h},${i[1]+h},${i[2]+h},0.25)`,n.beginPath(),n.arc(a*o+pn()*o,c*o+pn()*o,4+pn()*18,0,Math.PI*2),n.fill()}n.restore()}n.strokeStyle=t,n.lineWidth=2;for(let a=0;a<=2;a++)n.beginPath(),n.moveTo(a*o,0),n.lineTo(a*o,s),n.stroke(),n.beginPath(),n.moveTo(0,a*o),n.lineTo(s,a*o),n.stroke()})}const gM=Gn(256,256,(i,e)=>{i.fillStyle="#f1f0ec",i.fillRect(0,0,e,e);for(let t=0;t<1500;t++)i.fillStyle=`rgba(0,0,0,${.03+pn()*.05})`,i.fillRect(pn()*e,pn()*e,1.5,1.5);i.strokeStyle="#c9c7c0",i.lineWidth=3;for(const t of[0,e/2,e])i.beginPath(),i.moveTo(t,0),i.lineTo(t,e),i.stroke(),i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke()}),xM=Gn(128,128,(i,e)=>{i.fillStyle="#e9e8e4",i.fillRect(0,0,e,e);for(let t=0;t<6;t++){const n=8+t*9;i.strokeStyle=t%2?"#bdbbb5":"#8e8c86",i.lineWidth=4,i.strokeRect(n,n,e-2*n,e-2*n)}i.fillStyle="#55534f",i.fillRect(56,56,16,16)},!1),_M=Gn(256,256,(i,e)=>{i.fillStyle="#ecebe6",i.fillRect(0,0,e,e),i.strokeStyle="#c6c4bd",i.lineWidth=2;for(const[t,n,s,r]of[[0,e/2,e/2,0],[e/2,0,e,e/2],[e,e/2,e/2,e],[e/2,e,0,e/2]])i.beginPath(),i.moveTo(t,n),i.lineTo(s,r),i.stroke()}),vM=Gn(256,512,(i,e,t)=>{i.fillStyle="#d9d2c3",i.fillRect(0,0,e,t);for(let n=0;n<600;n++)i.fillStyle=`rgba(120,105,85,${.05+pn()*.08})`,i.fillRect(pn()*e,pn()*t,10+pn()*50,1);i.fillStyle="rgba(110,100,85,.55)";for(let n=22;n<t;n+=26)i.fillRect(0,n,e,2)},!1);function qi(i,{bg:e="#0f8a3c",fg:t="#ffffff",w:n=512,h:s=128,font:r="bold 64px system-ui, sans-serif",icon:o=""}={}){return Gn(n,s,a=>{a.fillStyle=e,a.fillRect(0,0,n,s),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=r,a.fillText(o?`${o}  ${i}`:i,n/2,s/2+2)},!1)}const ct=i=>new zt(i),vo=i=>ct({map:i,emissive:"#ffffff",emissiveMap:i,emissiveIntensity:.55,roughness:.4}),oe={floor:ct({map:ad([214,196,170],"rgba(150,120,90,A)","#b9a487"),roughness:.08,metalness:.05,envMapIntensity:1.6}),floorBrown:ct({map:ad([104,82,66],"rgba(205,190,170,A)","#4e3c30"),roughness:.08,metalness:.05,envMapIntensity:1.6}),skirting:ct({color:"#4a3326",roughness:.25}),wall:ct({color:"#ecebe6",roughness:.92}),grid:ct({map:gM,roughness:.95}),diffuser:ct({map:xM,roughness:.8}),steel:ct({color:"#a7aba9",roughness:.45,metalness:.55}),doorWhite:ct({color:"#efeee8",roughness:.6}),frame:ct({color:"#d8d2c2",roughness:.6}),laminate:ct({map:vM,roughness:.55}),diamond:ct({map:_M,roughness:.85}),woodStrip:ct({color:"#6a4126",roughness:.5}),darkGlass:new zt({color:"#2c3a2c",transparent:!0,opacity:.55,roughness:.05,metalness:.3,depthWrite:!1,side:Bt}),orange:ct({color:"#ff6a12",roughness:.35}),caution:ct({map:qi("CAUTION",{bg:"#f2b90f",fg:"#2a2a2a",w:256,h:512,font:"bold 44px system-ui, sans-serif"}),roughness:.5}),red:ct({color:"#c42a22",roughness:.5}),fireExit:vo(qi("FIRE EXIT  ←",{w:512,h:112,font:"bold 60px system-ui, sans-serif"})),fireExt:vo(qi("FIRE EXTINGUISHER",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),pushBar:vo(qi("PUSH BAR TO OPEN",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),exitSmall:vo(qi("EXIT",{w:256,h:96,font:"bold 60px system-ui, sans-serif"})),gents:ct({map:qi("GENTS TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚹"}),roughness:.4}),techno:ct({map:Gn(512,280,(i,e,t)=>{i.fillStyle="#f7f7f5",i.fillRect(0,0,e,t),i.fillStyle="#2b5fae",i.fillRect(e*.58,t*.3,e*.42,t*.32),i.font="bold 66px system-ui, sans-serif",i.textBaseline="middle",i.fillStyle="#2b5fae",i.fillText("Techn",22,t*.46),i.fillStyle="#ffffff",i.fillText("aureus",e*.6,t*.46),i.fillStyle="#555",i.font="22px system-ui, sans-serif",i.fillText("IT STRATEGY & TECHNOLOGY PARTNER",24,t*.78)},!1),roughness:.5}),pixPanel:ct({color:"#3c3e40",roughness:.5,metalness:.2}),pixText:ct({map:Gn(256,96,(i,e,t)=>{i.fillStyle="#3c3e40",i.fillRect(0,0,e,t),i.fillStyle="#4aa3df",i.font="bold 50px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("pixbit",e/2,t*.42),i.fillStyle="#cfd2d4",i.font="16px system-ui, sans-serif",i.fillText("solutions",e/2,t*.8)},!1),roughness:.5}),mat:ct({color:"#3b2620",roughness:1}),pink:ct({color:"#e9b8c4",roughness:.3}),mirror:ct({color:"#c9d4d8",roughness:.08,metalness:.25}),slot:ct({color:"#5d6a6e",roughness:.1,metalness:.4}),room:ct({color:"#cfccc4",roughness:.9}),roomCeil:ct({color:"#e9e7e1",roughness:.95}),desk:ct({color:"#c8b79c",roughness:.7}),officeGlass:new zt({color:"#33403a",transparent:!0,opacity:.4,roughness:.05,metalness:.3,depthWrite:!1,side:Bt}),pixLetters:ct({map:Gn(512,216,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#141414",i.textAlign="center",i.textBaseline="middle",i.font="bold 128px system-ui, sans-serif",i.fillText("pixbit",e/2,t*.38),i.font="44px system-ui, sans-serif",i.fillText("· s o l u t i o n s ·",e/2,t*.82)},!1),transparent:!0,alphaTest:.3,roughness:.6}),cam:ct({color:"#f2f2f0",roughness:.4}),leather:ct({color:"#1e1a19",roughness:.3,metalness:.05,envMapIntensity:1.2}),tableWood:ct({color:"#6b5646",roughness:.55}),daylight:new kn({color:"#f4f8ff"}),lamp:new kn({color:"#fff3c9"}),tint:new zt({color:"#c9d6b0",transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1,side:Bt}),olive:ct({color:"#8f9a2e",roughness:.85}),silver:ct({color:"#b8bcc0",roughness:.3,metalness:.8}),tableTop:ct({color:"#e6e1d8",roughness:.35}),ladies:ct({map:qi("LADIES TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚺"}),roughness:.4}),slate:ct({color:"#6b6e71",roughness:.85}),navy:ct({color:"#1f2a3b",roughness:.6}),navySlats:ct({map:Gn(256,256,(i,e,t)=>{i.fillStyle="#212d40",i.fillRect(0,0,e,t);for(let n=0;n<e;n+=16)i.fillStyle="#141c29",i.fillRect(n,0,3,t),i.fillStyle="#2b3950",i.fillRect(n+3,0,2,t)}),roughness:.55}),tenCod:ct({map:Gn(512,160,(i,e,t)=>{i.fillStyle="#e9ecef",i.beginPath(),i.moveTo(20,30),i.lineTo(95,30),i.lineTo(60,80),i.lineTo(95,80),i.lineTo(55,135),i.lineTo(20,135),i.lineTo(55,85),i.lineTo(20,85),i.closePath(),i.fill(),i.font="bold 96px system-ui, sans-serif",i.textBaseline="middle",i.fillText("10COD",120,t/2+4)},!1),transparent:!0,alphaTest:.3,roughness:.4}),eSyn:ct({map:Gn(512,256,(i,e,t)=>{i.fillStyle="#e8506a",i.beginPath(),i.arc(120,118,100,0,Math.PI*2),i.fill(),i.font="italic bold 150px Georgia, serif",i.textBaseline="middle",i.fillStyle="#26334a",i.fillText("e",40,120),i.fillStyle="#f4e9e4",i.fillText("S",120,130),i.font="bold 76px system-ui, sans-serif",i.fillStyle="#26334a",i.fillText("YNERGY",210,150)},!1),transparent:!0,alphaTest:.3,roughness:.5}),ringLogo:ct({map:Gn(256,256,(i,e)=>{i.strokeStyle="#8f6cff",i.lineWidth=16,i.beginPath(),i.arc(e/2,e/2,90,0,Math.PI*2),i.stroke(),i.fillStyle="#e5e1ff",i.font="bold 54px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("dev",e/2,e/2)},!1),transparent:!0,alphaTest:.3,roughness:.4}),greyTile:ct({color:"#9a9c9a",roughness:.3}),stairBlue:ct({color:"#5a6fc4",roughness:.8}),fireRed:ct({color:"#c8231c",roughness:.5}),granite:ct({color:"#141416",roughness:.12,metalness:.35,envMapIntensity:1.4}),liftSteel:ct({color:"#b9bdbd",roughness:.42,metalness:.75}),fireDoor:ct({color:"#9aa5a1",roughness:.55,metalness:.15}),greenSign:vo(qi("FIRE STATION",{w:512,h:112,font:"bold 50px system-ui, sans-serif"})),fourth:ct({map:qi("FOURTH FLOOR",{bg:"#c9ccce",fg:"#2c2c2c",w:512,h:128,font:"bold 54px system-ui, sans-serif"}),roughness:.4,metalness:.3}),ledRed:ct({color:"#ff2a1a",emissive:"#ff2a1a",emissiveIntensity:1.4}),numDisc:i=>ct({map:Gn(128,128,(e,t)=>{e.fillStyle="#fff",e.fillRect(0,0,t,t),e.fillStyle="#111",e.font="bold 84px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(String(i),t/2,t/2+4)},!1),roughness:.4})};function jn(i,e,t,n,s,r=oe.wall,o=rt){S(i,r,.1,o,n-t,e+s*-.05,o/2,(t+n)/2),S(i,oe.skirting,.015,.1,n-t,e+s*.008,.05,(t+n)/2,{shadow:!1}),$e(Math.min(e,e-s*.1),t,Math.max(e,e-s*.1),n)}function cd(i,e,t,n=He,s=Z,r=He+.25,o=Z-.25){const l=o-r;S(i,oe.wall,s-n,.85,.25,(n+s)/2,.85/2,e),S(i,oe.skirting,s-n,.1,.015,(n+s)/2,.05,e+t*.13,{shadow:!1}),S(i,oe.wall,s-n,Ze-2.7,.25,(n+s)/2,(2.7+Ze)/2,e);for(const[h,f]of[[n,r],[o,s]])S(i,oe.wall,f-h,2.7-.85,.25,(h+f)/2,(.85+2.7)/2,e);const u=new Ee(new xt(l,2.7-.85),w.glass);u.position.set((r+o)/2,(.85+2.7)/2,e),u.renderOrder=2,i.add(u);for(let h=0;h<=5;h++)S(i,w.black,.06,2.7-.85,.08,r+h/5*l,(.85+2.7)/2,e);for(const h of[.85+.02,2.7-.02])S(i,w.black,l,.05,.08,(r+o)/2,h,e);$e(n,e-.15,s,e+.15)}function rl(i,e,t,n,s,r,o){const a=e-o*.03;return S(i,oe.frame,.06,s+.06,n+.12,e-o*.015,(s+.06)/2,t),S(i,r,.04,s,n,a,s/2,t),a-o*.03}function yM(i,e,t,n){const o=n-.475,a=n+.95/2;jn(i,Z,e,o-.06,-1),jn(i,Z,a+.06,t,-1),S(i,oe.wall,.1,rt-2.25-.06,.95+.12,Z+.05,(rt+2.25+.06)/2,n);for(const v of[o-.03,a+.03])S(i,oe.frame,.14,2.25+.06,.06,Z+.03,(2.25+.06)/2,v);S(i,oe.frame,.14,.06,.95+.12,Z+.03,2.25+.03,n);const c=new st;c.position.set(Z-.01,0,o),S(c,oe.laminate,.04,2.25-.01,.95-.01,0,2.25/2,.95/2);for(const v of[-1,1]){S(c,oe.slot,.012,.9,.12,v*.022,1.45,.95/2-.05,{shadow:!1}),S(c,w.chrome,.03,.42,.03,v*.075,1.05,.95-.12,{shadow:!1});for(const y of[.86,1.24])S(c,w.chrome,.06,.02,.02,v*.05,y,.95-.12,{shadow:!1})}uc.push({leaf:c,closed:0,open:Math.PI/2*.92,name:"ladies toilet",handle:[-.12,1.25,.95-.12],x:Z,z:n,block:{minX:Z-.05,maxX:Z+.1,minZ:o,maxZ:a}});const l=Z+.1,u=Z+2.3,h=e+.05,f=t-.05,d=rt,g=(l+u)/2,x=(h+f)/2;S(i,w.floorCorridor,u-l,.02,f-h,g,.01,x,{shadow:!1}),S(i,w.white,u-l,.04,f-h,g,d,x,{shadow:!1}),S(i,w.whiteGloss,.1,d,f-h+.2,u+.05,d/2,x);for(const v of[h-.05,f+.05])S(i,w.whiteGloss,u-l,d,.1,g,d/2,v);S(i,oe.pink,.02,1.2,f-h,u-.005,.6,x,{shadow:!1});for(const v of[h+.005,f-.005])S(i,oe.pink,u-l,1.2,.02,g,.6,v,{shadow:!1});$e(u,h-.1,u+.1,f+.1),$e(l-.1,h-.1,u,h),$e(l-.1,f,u,f+.1),S(i,w.lightStrip,.6,.02,.6,g,d-.03,x,{shadow:!1});const m=x+.7;S(i,w.whiteGloss,.2,.55,.42,u-.1,.8,m),it(i,w.whiteGloss,.19,.15,.4,u-.42,.2,m,{seg:20}),it(i,w.white,.2,.2,.03,u-.42,.42,m,{seg:20}),$e(u-.65,m-.25,u,m+.25);const p=x-.6;S(i,w.whiteGloss,.45,.14,.55,u-.23,.85,p),S(i,w.chrome,.12,.03,.03,u-.08,.98,p,{shadow:!1}),S(i,oe.mirror,.02,.7,.55,u-.012,1.55,p,{shadow:!1}),$e(u-.46,p-.3,u,p+.3)}function ol(i,e,t,n,s,{alarm:r=!0}={}){const a=-s,c=s*Math.PI/2,l=h=>e+s*h;S(i,w.blackMatte,.04,2.3,1.1+.2,l(.005),1.15,t,{shadow:!1});for(const h of[-1,1])S(i,oe.liftSteel,.03,2.22,1.1/2-.01,l(.03),1.11,t+h*1.1/4,{shadow:!1});for(const h of[-1,1])S(i,oe.liftSteel,.04,2.26,.03,l(.03),1.13,t+h*(1.1/2+.02),{shadow:!1});S(i,oe.liftSteel,.04,.03,1.1+.07,l(.03),2.26,t,{shadow:!1}),wt(i,oe.numDisc(n),.22,.22,l(.012),2.55,t,c),S(i,oe.liftSteel,.03,.14,.62,l(.015),2.92,t,{shadow:!1}),S(i,w.blackMatte,.035,.08,.2,l(.02),2.92,t,{shadow:!1}),S(i,oe.ledRed,.036,.04,.06,l(.022),2.92,t,{shadow:!1});const u=t+a*(1.1/2+.33);if(S(i,oe.liftSteel,.02,.26,.11,l(.01),1.15,u,{shadow:!1}),S(i,w.blackMatte,.01,.06,.05,l(.022),1.12,u,{shadow:!1}),r){const h=t-a*.97;S(i,oe.fireRed,.05,.14,.12,l(.025),2.05,h,{shadow:!1}),S(i,oe.fireRed,.04,.13,.1,l(.02),1.3,h,{shadow:!1})}}const MM=["techno","tenCod","eSyn","ringLogo"];function qp(i){for(const e of MM)oe[e].visible=i}qp(!1);function al(i,e,t,n,s,r=4.2,{frost:o=!1}={}){const a=e-t*.03,c=e+t*3;Rt(i,oe.room,Math.min(e,c),n,Math.max(e,c),s,0),S(i,oe.room,.1,Ze,s-n,c,Ze/2,(n+s)/2,{shadow:!1}),Rt(i,oe.roomCeil,Math.min(e,c),n,Math.max(e,c),s,Ze,{down:!0});for(let l=n;l<s-.5;l+=r){const u=l+.2,h=Math.min(l+r,s)-.2;S(i,oe.wall,.4,Ze,.4,e,Ze/2,l);const f=new Ee(new xt(h-u,rt-.05),oe.officeGlass);if(f.position.set(a,(rt-.05)/2,(u+h)/2),f.rotation.y=t>0?-Math.PI/2:Math.PI/2,f.renderOrder=2,i.add(f),o){const p=new Ee(new xt(h-u,.75),w.glassFrost);p.position.set(a-t*.006,1.25,(u+h)/2),p.rotation.y=f.rotation.y,p.renderOrder=3,i.add(p)}const d=Math.max(2,Math.round((h-u)/1));for(let p=0;p<=d;p++)S(i,w.black,.06,rt,.05,a,rt/2,u+p/d*(h-u));for(const p of[.04,2.35,rt-.03])S(i,w.black,.06,.06,h-u,a,p,(u+h)/2);const g=u+(h-u)/d;for(const p of[-1,1])S(i,w.chrome,.03,.6,.025,a-t*p*.05,1.05,g-.12,{shadow:!1});const x=e+t*1.6,m=(u+h)/2+.6;S(i,oe.desk,.7,.04,1.4,x,.75,m);for(const p of[-1,1])S(i,w.black,.05,.73,.05,x,.37,m+p*.6,{shadow:!1});S(i,w.screenDark,.03,.32,.55,x+t*.2,1,m),S(i,w.black,.45,.5,.45,x-t*.55,.5,m)}S(i,oe.wall,.4,Ze,.4,e,Ze/2,s),$e(Math.min(e,a)-.05,n,Math.max(e,a)+.05,s)}const bu=14.5,Vn=bu+11.85,$t=Vn+6.4,vi=Z+11;function ld(i,e,t,n=0,s=1.6){const r=new st;r.position.set(e,0,t),r.rotation.y=n,i.add(r),S(r,oe.leather,s,.3,.82,0,.24,0),S(r,oe.leather,s-.36,.14,.62,0,.45,.08);for(const o of[-1,1])S(r,oe.leather,.18,.62,.82,o*(s/2-.09),.37,0);S(r,oe.leather,s-.1,.36,.18,0,.6,-.32);for(const o of[-1,1])S(r,oe.leather,(s-.4)/2,.36,.16,o*(s-.4)/4,.74,-.22,{rx:-.12});for(const o of[-1,1])for(const a of[-1,1])S(r,w.blackMatte,.06,.09,.06,o*(s/2-.08),.045,a*.34,{shadow:!1});return r}function ud(i,e,t,n=0,s=1.9){const r=new st;r.position.set(e,0,t),r.rotation.y=n,i.add(r),S(r,oe.leather,s,.22,.72,0,.27,.04),S(r,oe.leather,s,.1,.7,0,.42,.05),S(r,oe.leather,s,.62,.16,0,.73,-.3,{rx:-.08});for(const o of[-1,1])S(r,w.chrome,.03,.03,.72,o*(s/2-.12),.015,.02,{shadow:!1}),S(r,w.chrome,.03,.16,.03,o*(s/2-.12),.08,.34,{shadow:!1}),S(r,w.chrome,.03,.16,.03,o*(s/2-.12),.08,-.3,{shadow:!1});return r}function cl(i,e,t,n=.85){$e(i-t/2,e-n/2,i+t/2,e+n/2)}function bM(i){const e=(Vn+$t)/2,t=$t-Vn;Rt(i,oe.floor,Z,Vn,vi,$t,.001,{tile:1.6}),Rt(i,oe.grid,Z,Vn,vi,$t,Ze,{down:!0,tile:1.2});for(const d of[Vn,$t]){const g=d===Vn?-1:1;S(i,oe.wall,vi-Z,Ze,.1,(Z+vi)/2,Ze/2,d+g*.05),S(i,oe.skirting,vi-Z,.1,.015,(Z+vi)/2,.05,d-g*.008,{shadow:!1}),$e(Z,d-.1,vi,d+.1)}S(i,oe.granite,.65,Ze,.55,Z+.08,Ze/2,$t+.275),$e(Z-.25,$t,Z+.4,$t+.55),S(i,oe.wall,.1,Ze,t,vi+.05,Ze/2,e);const n=vi-.02,s=e-1.6,r=e+1.6,o=2.55,a=new Ee(new xt(r-s,o),oe.daylight);a.position.set(n+.005,o/2,e),a.rotation.y=-Math.PI/2,i.add(a);const c=new Ee(new xt(r-s,o),w.glass);c.position.set(n,o/2,e),c.rotation.y=-Math.PI/2,c.renderOrder=2,i.add(c);for(const d of[s,e-.75,e+.75,r])S(i,w.black,.07,o,.07,n,o/2,d);for(const d of[.04,o])S(i,w.black,.07,.07,r-s,n,d,e);for(const[d,g]of[[s,e-.75],[e+.75,r]])for(const x of[.3,1.25,2.15])S(i,w.black,.07,.05,g-d,n,x,(d+g)/2);S(i,w.black,.07,.05,1.5,n,2.15,e);for(const d of[e-.07,e+.07])S(i,w.blackMatte,.04,.45,.03,n-.07,1.1,d,{shadow:!1});$e(vi-.1,Vn,vi+.1,$t),ld(i,Z+5,Vn+.48,0,1.6),cl(Z+5,Vn+.48,1.6),ud(i,Z+7.1,Vn+.45,0,1.9),cl(Z+7.1,Vn+.45,1.9),ud(i,Z+5.6,$t-.45,Math.PI,2.2),cl(Z+5.6,$t-.45,2.2),ld(i,Z+9.4,$t-.75,Math.PI+.35,1.6),$e(Z+8.5,$t-1.3,Z+10.3,$t-.2);const l=Z+6.2,u=Vn+1.6;S(i,oe.tableTop,1.2,.04,.6,l,.42,u),S(i,oe.tableWood,1.1,.02,.5,l,.12,u,{shadow:!1});for(const d of[-1,1])for(const g of[-1,1])S(i,oe.tableWood,.04,.44,.04,l+d*.52,.2,u+g*.24,{rz:d*.12});$e(l-.62,u-.32,l+.62,u+.32);const h=Z+8.4;S(i,oe.frame,1.05,2.15,.05,h,1.075,$t-.02),S(i,oe.fireDoor,.95,2.1,.04,h,1.05,$t-.04),S(i,w.chrome,.14,.03,.04,h-.35,1.05,$t-.08,{shadow:!1}),wt(i,oe.greenSign,.5,.11,h+.2,2.35,$t-.012,Math.PI),S(i,w.white,.09,.09,.012,h-.75,1.25,$t-.006,{shadow:!1});for(const d of[Z+2,Z+5,Z+8])for(const g of[e-1.7,e+1.7])S(i,oe.lamp,.24,.01,.24,d,Ze-.006,g,{shadow:!1});for(const d of[Z+3.5,Z+6.5,Z+9.5])for(const g of[e-2.2,e+2.2])wt(i,oe.diffuser,.6,.6,d,Ze-.004,g,0,Math.PI/2);for(const d of[Z+3,Z+7.5])it(i,oe.cam,.06,.07,.03,d,Ze-.015,e-.6,{seg:14,shadow:!1});const f=new Ee(new Xt(.07,16,10,0,Math.PI*2,0,Math.PI/2),oe.cam);f.rotation.x=Math.PI,f.position.set(Z+9.2,Ze,$t-.5),i.add(f)}function wM(i){Rt(i,oe.floor,He+.02,bn,Z-rd,fn,.001,{tile:1.6}),Rt(i,oe.floorBrown,Z-rd,bn,Z,fn,.001,{tile:1.6}),Rt(i,oe.grid,He+dn,bn,Z-dn,fn,Ze,{down:!0,tile:1.2});for(const[H,Ce,De,Qe,Ue,U]of[[He,He+dn,He+dn,1,bn,fn],[Z-dn,Z,Z-dn,-1,bn,fn]])Rt(i,oe.wall,H,Ue,Ce,U,rt,{down:!0}),S(i,oe.wall,.03,Ze-rt,U-Ue,De,(rt+Ze)/2,(Ue+U)/2,{shadow:!1}),S(i,w.lightStrip,.02,.025,U-Ue-.4,De+Qe*.03,rt+.04,(Ue+U)/2,{shadow:!1});for(let H=bn+2.2;H<fn-1;H+=3)for(const Ce of[He+dn+.9,Z-dn-.9])it(i,w.spotGlow,.07,.07,.01,Ce,Ze-.006,H,{seg:16,shadow:!1});for(let H=bn+3.7;H<fn-2;H+=6)wt(i,oe.diffuser,.6,.6,(He+Z)/2+(Math.round(H)%2?.6:-.6),Ze-.004,H,0,Math.PI/2),it(i,oe.cam,.05,.06,.03,(He+Z)/2,Ze-.015,H+1.5,{seg:14,shadow:!1});for(const H of[bn+1.7,12.5,22.5])S(i,w.spotGlow,.22,.012,.6,He+dn/2,rt-.008,H,{shadow:!1});jn(i,He,bn,mn,1),S(i,oe.wall,.1,Ze-rt,mn-bn,He-.05,(rt+Ze)/2,(bn+mn)/2,{shadow:!1}),S(i,oe.steel,.03,1.75,.82,He+.015,1.12,1.75),S(i,w.metalDark,.035,.012,.8,He+.016,.25,1.75,{shadow:!1}),S(i,w.chrome,.04,.03,.12,He+.04,1.15,1.42,{shadow:!1}),wt(i,oe.fireExt,.36,.07,He+.004,1.35,2.4,Math.PI/2),wt(i,oe.fireExt,.36,.07,He+.004,2.35,1.75,Math.PI/2);const e=rl(i,He,-.25,.95,2.15,oe.doorWhite,-1);S(i,w.chrome,.05,.05,.8,e+.03,1,-.25,{shadow:!1});for(const H of[-.62,.12])S(i,w.chrome,.06,.08,.05,e+.02,1,H,{shadow:!1});wt(i,oe.pushBar,.3,.06,e+.002,1.2,-.25,Math.PI/2),wt(i,oe.exitSmall,.28,.1,He+.004,2.45,-.25,Math.PI/2),S(i,oe.red,.04,.12,.12,He+.02,1.4,.55,{shadow:!1}),S(i,w.white,.01,.12,.08,He+.04,1.6,-.25+.75,{shadow:!1});const t=Pt,n=18.75,s=(H,Ce,De,Qe)=>{S(i,w.concrete,.08,Qe-De,Ce-H,He-.04,(De+Qe)/2,(H+Ce)/2,{shadow:!1});const Ue=new Ee(Xs(new xt(Ce-H,Qe-De),Ce-H,Qe-De,1.6),w.concrete);Ue.position.set(He+.002,(De+Qe)/2,(H+Ce)/2),Ue.rotation.y=Math.PI/2,Ue.receiveShadow=!0,i.add(Ue),De===0&&(S(i,oe.skirting,.015,.1,Ce-H,He+.008,.05,(H+Ce)/2,{shadow:!1}),$e(He-.1,H,He+.02,Ce))},r=[t,...Do.flatMap(H=>[H-En-.03,H+En+.03]),n];for(let H=0;H<r.length;H+=2)s(r[H],r[H+1],0,rt);for(const H of Do)s(H-En-.03,H+En+.03,Vo+.03,rt);S(i,oe.wall,.1,Ze-rt,fn-t,He-.05,(rt+Ze)/2,(t+fn)/2,{shadow:!1}),S(i,w.white,.012,.09,.09,He+.006,1.25,9.55,{shadow:!1}),S(i,w.blackMatte,.015,.03,.035,He+.012,1.25,9.55,{shadow:!1}),S(i,w.blackMatte,.03,.14,.07,He+.015,1.25,9.8,{shadow:!1}),S(i,w.bottleBlue,.01,.04,.04,He+.031,1.27,9.8,{shadow:!1}),S(i,w.white,.012,.09,.09,He+.006,.4,9.7,{shadow:!1});const o=17.4;S(i,w.black,.03,.78,.78,He+.015,2.05,o),wt(i,w.logo,.42,.6,He+.032,2.05,o,Math.PI/2),wt(i,oe.pixLetters,.8,.34,He+.004,1.42,o,Math.PI/2),S(i,w.white,.012,.09,.14,He+.006,.42,o+.35,{shadow:!1}),S(i,w.white,.03,.03,.9,He+dn/2,rt-.015,o,{shadow:!1});for(const H of[o-.3,o+.3])it(i,w.white,.045,.045,.16,He+dn/2-.05,rt-.12,H,{seg:12,shadow:!1,rz:.6});jn(i,He,n,20,1);const a=rl(i,He,19.35,.95,2.25,oe.laminate,-1);S(i,oe.slot,.012,.9,.12,a,1.45,19.3,{shadow:!1}),S(i,w.chrome,.03,.42,.03,a+.05,1.05,19,{shadow:!1});const c=new Ee(new xt(.95,1.9),oe.fireDoor);c.position.set(He+.012,1.15,20.9),c.rotation.y=Math.PI/2,i.add(c),S(i,w.chrome,.03,.1,.04,He+.03,1,21.2,{shadow:!1}),wt(i,oe.greenSign,.5,.11,He+.012,2.25,20.9,Math.PI/2),wt(i,oe.fireExt,.62,.12,He+.012,1.45,22.05,Math.PI/2);const l=22.8,u=36;jn(i,He,20,l,1),jn(i,He,l,u,1,oe.granite);const h=[{n:4,z:24.6},{n:3,z:28},{n:2,z:31.4},{n:1,z:34.6}];for(const H of h)ol(i,He,H.z,H.n,1);S(i,w.white,.012,.09,.09,He+.006,.38,29.7,{shadow:!1});for(const H of[32.6,33])it(i,w.chrome,.22,.22,.7,He+.32,.35,H,{seg:20,shadow:!1});const f=new st;f.position.set(He+.9,2.95,24.2),i.add(f),S(f,w.black,.03,.2,.62,0,0,0,{shadow:!1}),wt(f,oe.fourth,.6,.18,.017,0,0,Math.PI/2),wt(f,oe.fourth,.6,.18,-.017,0,0,-Math.PI/2);const d=u,g=u+3.6;jn(i,He,d,g,1,oe.slate);for(const H of[g-1.25,g-.25])S(i,w.blackMatte,.006,2.2,.01,He+.003,1.1,H,{shadow:!1});S(i,w.blackMatte,.006,.01,1,He+.003,2.2,g-.75,{shadow:!1}),wt(i,oe.eSyn,1.3,.65,He+.012,1.75,d+1.35,Math.PI/2),S(i,w.white,.04,.03,1.2,He+dn+.3,Ze-.03,d+1.35,{shadow:!1});for(const H of[d+.9,d+1.35,d+1.8])it(i,w.white,.045,.045,.16,He+dn+.3,Ze-.12,H,{seg:12,shadow:!1,rz:.7});S(i,oe.navy,.4,Ze,.3,He,Ze/2,g+.1);const x=g+4.2;al(i,He,-1,g+.25,x,4.2,{frost:!0});const m=x+.2,p=m+1.3;jn(i,He,m,p,1,oe.navy);const v=new Ee(Xs(new xt(p-m,rt),p-m,rt,.8),oe.navySlats);v.position.set(He+.004,rt/2,(m+p)/2),v.rotation.y=Math.PI/2,i.add(v),wt(i,oe.ringLogo,.5,.5,He+.01,1.75,(m+p)/2,Math.PI/2),al(i,He,-1,p+.2,fn-.15),S(i,oe.wall,.1,Ze-rt,fn-20,He-.05,(rt+Ze)/2,(20+fn)/2,{shadow:!1}),S(i,oe.mat,.6,.012,1.05,He+.42,.006,8.12,{shadow:!1});for(const H of[5,18.3])S(i,oe.cam,.04,.04,.12,He+dn-.05,rt-.03,H,{shadow:!1}),it(i,oe.cam,.035,.035,.14,He+dn-.1,rt-.08,H,{seg:10,shadow:!1,rz:Math.PI/2-.3});jn(i,Z,bn,Math.min(15,bu),-1),S(i,oe.wall,.1,Ze-rt,fn-bn,Z+.05,(rt+Ze)/2,(bn+fn)/2,{shadow:!1});const y=new Ee(new xt(.85,2.3),w.glassFrost);y.position.set(Z-.03,1.15,-1.2),y.rotation.y=-Math.PI/2,y.renderOrder=2,i.add(y);for(const H of[-1.65,-.75])S(i,w.black,.06,2.35,.05,Z-.03,1.17,H);for(const H of[.05,1.2,2.33])S(i,w.black,.06,.05,.9,Z-.03,H,-1.2);S(i,w.chrome,.03,.4,.025,Z-.09,1.05,-.88,{shadow:!1});const _=2.6,A=rl(i,Z,_,1,2.25,oe.laminate,1);S(i,oe.slot,.012,.9,.12,A,1.45,_-.05,{shadow:!1}),S(i,w.chrome,.03,.42,.03,A-.05,1.05,_+.37,{shadow:!1});for(const H of[.86,1.24])S(i,w.chrome,.06,.02,.02,A-.025,H,_+.37,{shadow:!1});it(i,w.chrome,.02,.02,.02,A-.01,.95,_+.42,{seg:10,shadow:!1,rz:Math.PI/2});const E=new st;E.position.set(Z-.33,2.62,_-.75),i.add(E),S(E,w.black,.6,.15,.03,0,0,0),wt(E,oe.gents,.56,.12,0,0,.017,0),wt(E,oe.gents,.56,.12,0,0,-.017,Math.PI),S(E,w.metalDark,.04,.05,.04,.3,.1,0);const R=new Ee(new Xt(.1,20,14),oe.orange);R.position.set(Z-.13,1.78,_+1.4),R.castShadow=!0,i.add(R),it(i,w.metalDark,.11,.09,.08,Z-.13,1.72,_+1.4,{seg:16,open:!0,shadow:!1}),S(i,w.metalDark,.08,.02,.02,Z-.05,1.72,_+1.4,{shadow:!1});const P=bu,b=P+1.7,M=2.45,D=Z-.04,G=P+1.05,V=new Ee(new xt(b-P,rt-.05),oe.tint);V.position.set(D,(rt-.05)/2,(P+b)/2),V.rotation.y=-Math.PI/2,V.renderOrder=2,i.add(V);const q=(H,Ce=0,De=rt)=>S(i,w.black,.07,De-Ce,.06,D,(Ce+De)/2,H),ee=(H,Ce=P,De=b)=>S(i,w.black,.07,.06,De-Ce,D,H,(Ce+De)/2);for(const H of[P,b])q(H,0,rt);ee(.03),ee(M),ee(rt-.03);for(const H of[P+.04,G-.03,G+.03,b-.04])q(H,0,M);q((P+G)/2,0,M);for(const H of[.62,1.22,1.84])ee(H,P,G);ee(1.22,G,b);for(const H of[G-.09,G+.09]){S(i,w.chrome,.03,.6,.025,Z-.12,1.15,H,{shadow:!1});for(const Ce of[.88,1.42])S(i,w.chrome,.08,.02,.02,Z-.09,Ce,H,{shadow:!1})}$e(Z-.08,P,Z+.02,b);const $=P-.6,le=b+.6,z=Z+2.6;Rt(i,oe.tableWood,Z+.02,$,z,le,.002),Rt(i,oe.roomCeil,Z,$,z,le,Ze,{down:!0}),S(i,oe.olive,.1,Ze,le-$,z,Ze/2,($+le)/2,{shadow:!1});for(const H of[$,le])S(i,oe.olive,z-Z-.12,Ze,.1,(Z+.12+z)/2,Ze/2,H,{shadow:!1});for(const[H,Ce]of[[G-.1,.9],[G+.15,1.15]]){S(i,w.black,.01,Ce,.01,Z+.9,Ze-Ce/2,H,{shadow:!1});const De=new Ee(new Xt(.05,12,10),oe.lamp);De.position.set(Z+.9,Ze-Ce-.04,H),i.add(De)}S(i,oe.silver,.035,.2,.15,Z-.018,1.35,P-.4,{shadow:!1}),S(i,w.blackMatte,.01,.08,.09,Z-.037,1.39,P-.4,{shadow:!1}),S(i,w.bottleBlue,.006,.05,.05,Z-.043,1.4,P-.42,{shadow:!1});const de=new Ee(new Xt(.07,16,10,0,Math.PI*2,0,Math.PI/2),oe.cam);de.rotation.x=Math.PI,de.position.set(Z-.35,rt,P+.3),i.add(de);const ue=P+2.85,Te=ue+3.4;jn(i,Z,b,Te+.2,-1),S(i,w.white,.012,.09,.09,Z-.006,.38,ue-.3,{shadow:!1});for(const H of[ue-.1,Te+.1]){S(i,oe.woodStrip,.06,rt,.2,Z-.03,rt/2,H);for(const Ce of[-.06,0,.06])S(i,w.blackMatte,.005,rt,.008,Z-.061,rt/2,H+Ce,{shadow:!1})}const Ge=new Ee(Xs(new xt(Te-ue,rt),Te-ue,rt,.7),oe.diamond);Ge.position.set(Z-.004,rt/2,(ue+Te)/2),Ge.rotation.y=-Math.PI/2,Ge.receiveShadow=!0,i.add(Ge);const qe=(ue+Te)/2+.2;S(i,w.white,.03,.58,1.05,Z-.02,1.85,qe),wt(i,oe.techno,1,.55,Z-.036,1.85,qe,-Math.PI/2),S(i,w.black,.04,.03,.8,Z-dn-.3,Ze-.03,qe,{shadow:!1});for(const H of[qe-.3,qe+.05,qe+.35])it(i,w.black,.04,.035,.14,Z-dn-.3,Ze-.12,H,{seg:10,shadow:!1,rz:-.7});const te=Te+.2,ne=Te+1.35,ve=ne+.6,pe=ve+1.1,ke=pe,ze=Vn;S(i,w.blackMatte,.02,.17,.09,Z-.07,1.45,Te+.1,{shadow:!1}),S(i,w.bottleBlue,.005,.11,.06,Z-.081,1.47,Te+.1,{shadow:!1});const Oe=new Ee(new xt(ne-te-.04,2.38),w.glass);Oe.position.set(Z-.03,1.2,(te+ne)/2),Oe.rotation.y=-Math.PI/2,Oe.renderOrder=2,i.add(Oe);for(const H of[te+.05,ne-.05])S(i,w.chrome,.03,.05,.12,Z-.03,2.36,H,{shadow:!1});S(i,w.chrome,.03,1.1,.03,Z-.11,1.15,te+.16,{shadow:!1});for(const H of[.62,1.68])S(i,w.chrome,.08,.02,.02,Z-.07,H,te+.16,{shadow:!1});$e(Z-.06,te,Z+.02,ne),Rt(i,oe.greyTile,Z+.02,te,Z+3,ne+.3,.002,{tile:1.2}),Rt(i,oe.roomCeil,Z,te,Z+3,ne+.3,Ze,{down:!0}),S(i,oe.room,.1,Ze,ne+.3-te,Z+3,Ze/2,(te+ne+.3)/2,{shadow:!1}),S(i,w.black,.05,2.6,.05,Z+1.6,1.3,te+.5,{shadow:!1}),S(i,oe.room,2.88,Ze,.1,Z+1.56,Ze/2,ne+.35,{shadow:!1}),jn(i,Z,ne,ve,-1),S(i,w.white,.012,.09,.09,Z-.006,1.25,(ne+ve)/2,{shadow:!1}),S(i,w.blackMatte,.015,.03,.035,Z-.012,1.25,(ne+ve)/2,{shadow:!1}),S(i,oe.wall,.1,rt-2.4,ne-te,Z+.05,(2.4+rt)/2,(te+ne)/2),S(i,oe.wall,.1,rt-2.3,pe-ve,Z+.05,(2.3+rt)/2,(ve+pe)/2),S(i,oe.frame,.12,.06,pe-ve,Z+.02,2.3,(ve+pe)/2);for(const H of[ve+.02,pe-.02])S(i,oe.frame,.12,2.3,.04,Z+.02,1.15,H);const Ve=new st;Ve.position.set(Z+.06,0,ve+.04),Ve.rotation.y=1.25,i.add(Ve);const fe=pe-ve-.08;S(Ve,oe.laminate,.04,2.25,fe,0,1.125,fe/2);for(const H of[-1,1])S(Ve,oe.slot,.012,.9,.1,H*.021,1.45,fe*.6,{shadow:!1}),S(Ve,w.chrome,.03,.42,.025,H*.06,1.05,fe-.12,{shadow:!1});$e(Z+.04,ve,Z+1.05,ve+.4);const xe=Z+4.2,N=ve-.1,he=pe+.15;Rt(i,oe.granite,Z+.02,N,xe,he,.003,{tile:1.2}),Rt(i,oe.roomCeil,Z,N,xe,he,4.5,{down:!0}),S(i,oe.stairBlue,xe-Z-.12,4.5,.1,(Z+.12+xe)/2,2.25,N-.05,{shadow:!1}),S(i,oe.stairBlue,xe-Z-.12,4.5,.1,(Z+.12+xe)/2,2.25,he+.05,{shadow:!1}),S(i,oe.stairBlue,.1,4.5,he-N,xe+.05,2.25,(N+he)/2,{shadow:!1}),S(i,oe.wall,.1,4.5-rt,pe-ve,Z+.05,(4.5+rt)/2,(ve+pe)/2,{shadow:!1});for(let H=0;H<9;H++)S(i,oe.granite,.3,.17*(H+1),.95,Z+1.3+H*.3,.085*(H+1),pe-.4);$e(Z+1.15,pe-.9,xe,he),$e(xe-.05,N,xe+.1,he);const j=pe+1.5,F=Z-.1;S(i,oe.granite,.2,Ze,ze-ke,Z,Ze/2,(ke+ze)/2),S(i,oe.granite,.1,Ze,.1,Z+.05,Ze/2,ze+.05),$e(F,ke,Z+.1,ze),ol(i,F,j,5,-1);const Y=new st;Y.position.set(Z-.9,2.95,ke-.1),i.add(Y),S(Y,w.black,.03,.2,.62,0,0,0,{shadow:!1}),wt(Y,oe.fourth,.6,.18,.017,0,0,Math.PI/2),wt(Y,oe.fourth,.6,.18,-.017,0,0,-Math.PI/2);const _e=$t+.55,me=_e+.35,C=me+2.6;jn(i,Z,_e,me,-1),S(i,oe.granite,.2,Ze,C-me,Z,Ze/2,(me+C)/2),$e(Z-.1,me,Z+.1,C),ol(i,Z-.1,me+1.45,6,-1);const T=C,B=T+2.8,ae=T+.9;yM(i,T,B,ae);const ge=new st;ge.position.set(Z-.33,2.62,ae+.75),i.add(ge),S(ge,w.black,.6,.15,.03,0,0,0),wt(ge,oe.ladies,.56,.12,0,0,.017,0),wt(ge,oe.ladies,.56,.12,0,0,-.017,Math.PI);const se=new Ee(new Xt(.1,20,14),oe.orange);se.position.set(Z-.13,1.78,T+2.2),se.castShadow=!0,i.add(se),it(i,w.metalDark,.11,.09,.08,Z-.13,1.72,T+2.2,{seg:16,open:!0,shadow:!1}),S(i,w.white,.012,.09,.09,Z-.006,.38,B-.25,{shadow:!1});const Le=B,be=Le+2.6;jn(i,Z,Le,be,-1,oe.navy);const Ie=new Ee(Xs(new xt(be-Le,rt),be-Le,rt,.8),oe.navySlats);Ie.position.set(Z-.004,rt/2,(Le+be)/2),Ie.rotation.y=-Math.PI/2,i.add(Ie),wt(i,oe.tenCod,1.5,.47,Z-.012,1.75,(Le+be)/2,-Math.PI/2),al(i,Z,1,be+.2,fn-.15),bM(i),cd(i,bn-.12,1,He,Z,He+.9,Z-.25),cd(i,fn+.12,-1),wt(i,oe.fireExit,.5,.11,(He+Z)/2,2.95,fn-.01,Math.PI);const ot=new st;ot.position.set((He+Z)/2,2.72,bn+1.6),i.add(ot),S(ot,w.white,.58,.14,.03,0,0,0,{shadow:!1}),wt(ot,oe.fireExit,.56,.12,0,0,.016,0),wt(ot,oe.fireExit,.56,.12,0,0,-.016,Math.PI);for(const H of[-1,1])S(ot,w.chrome,.006,Ze-2.79,.006,H*.22,(Ze-2.79)/2+.07,0,{shadow:!1})}const Ws={x:12.75,z:17.72,yaw:1.05};function SM(i){Rt(i,w.floorBeige,0,0,Ft,kt,0),Rt(i,w.floorBeige,Ft,mn,Nt,kt,0),Rt(i,w.floorBeige,Kt-gs,kt,Nt,Pt,0),Rt(i,w.floorDark,0,kt,Kt-gs,Pt,0),Rt(i,w.floorDark,0,Pt,en,yt,0),G2(i),W2(i),wM(i),q2(i),Q2(i),cM(i),dM(i),mM(i)}function th(i,e){return i>Nt?"Building Hall":i<0?"Terrace":e>Ut?"Game Room":e>yt?i<Hn?"Meeting Room":"Workspace":e<_s&&i<Ft?"Corner Cabin":e<qt&&e>mn&&i>Ft&&i<es?i<7?"Cabin 2":"Cabin 1":i>=Kt&&e<Pt?"Reception":e<kt?i<Ft?"Window Lounge":"Cabin Corridor":"Workspace"}const Er=new Rn(0,0,0,"YXZ"),Tr=new I,EM={type:"change"},TM={type:"lock"},AM={type:"unlock"},hd=Math.PI/2;class RM extends Oy{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=CM.bind(this),this._onPointerlockChange=PM.bind(this),this._onPointerlockError=LM.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;Tr.setFromMatrixColumn(t.matrix,0),Tr.crossVectors(t.up,Tr),t.position.addScaledVector(Tr,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;Tr.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Tr,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function CM(i){if(this.enabled===!1||this.isLocked===!1)return;const e=i.movementX||i.mozMovementX||i.webkitMovementX||0,t=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;Er.setFromQuaternion(n.quaternion),Er.y-=e*.002*this.pointerSpeed,Er.x-=t*.002*this.pointerSpeed,Er.x=Math.max(hd-this.maxPolarAngle,Math.min(hd-this.minPolarAngle,Er.x)),n.quaternion.setFromEuler(Er),this.dispatchEvent(EM)}function PM(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(TM),this.isLocked=!0):(this.dispatchEvent(AM),this.isLocked=!1)}function LM(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const fd=1.65,IM=.25,dd=3,DM=6,NM=18,UM=5.2;function kM(i,e,{spawn:t,yaw:n=0}){const s=new RM(i,e),r={},o={x:0,y:0,run:!1},a=new I(t.x,0,t.z),c=new I;let l=0,u=0,h=0,f=0;i.position.set(a.x,fd,a.z),i.rotation.set(0,n,0,"YXZ");const d={dragMode:!1,paused:!1};let g=!1,x=0,m=0;const p=new Rn(0,0,0,"YXZ");e.addEventListener("mousedown",P=>{d.dragMode&&(g=!0,x=P.clientX,m=P.clientY)}),addEventListener("mouseup",()=>{g=!1}),addEventListener("mousemove",P=>{!d.dragMode||!g||d.paused||(p.setFromQuaternion(i.quaternion),p.y-=(P.clientX-x)*.004,p.x=Math.max(-1.45,Math.min(1.45,p.x-(P.clientY-m)*.004)),i.quaternion.setFromEuler(p),x=P.clientX,m=P.clientY)});const v=()=>!d.paused&&(s.isLocked||d.dragMode);addEventListener("keydown",P=>{r[P.code]=!0,P.code==="Space"&&y()});function y(){v()&&u<=.001&&(l=UM)}addEventListener("keyup",P=>{r[P.code]=!1}),addEventListener("blur",()=>{for(const P in r)r[P]=!1});const _=new I,A=new I,E=new I;function R(P){P=Math.min(P,.05),E.set(0,0,0),v()&&(i.getWorldDirection(_),_.y=0,_.normalize(),A.crossVectors(_,i.up).normalize(),(r.KeyW||r.ArrowUp)&&E.add(_),(r.KeyS||r.ArrowDown)&&E.sub(_),(r.KeyD||r.ArrowRight)&&E.add(A),(r.KeyA||r.ArrowLeft)&&E.sub(A),(o.x||o.y)&&E.addScaledVector(_,o.y).addScaledVector(A,o.x));const b=r.ShiftLeft||r.ShiftRight||o.run;if(E.lengthSq()>0){const G=Math.min(1,E.length());E.normalize().multiplyScalar((b?DM:dd)*(o.x||o.y?Math.max(.5,G):1))}const M=1-Math.exp(-(u>0?3:12)*P);c.x+=(E.x-c.x)*M,c.z+=(E.z-c.z)*M,z2(a,c.x*P,c.z*P,IM),l-=NM*P,u=Math.max(0,u+l*P),u===0&&(l=Math.max(l,0));const D=Math.hypot(c.x,c.z);u===0&&D>.3?(h+=P*D*2.6,f=Math.sin(h)*.035*Math.min(1,D/dd)):f*=.85,i.position.set(a.x,fd+u+f,a.z)}return{controls:s,update:R,pos:a,state:d,touch:o,jump:y}}function OM(i){var s;i.updateMatrixWorld(!0);const e=new Map,t=[];i.traverse(r=>{r.isMesh&&t.push(r)});const n=r=>{const o=[];for(let a=r;a&&a!==i;a=a.parent)a.userData.label&&o.at(-1)!==a.userData.label&&o.push(a.userData.label);return o.join(" · ")};for(const r of t){const o=`${r.material.uuid}|${r.castShadow}|${r.renderOrder}`;let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(const u of Object.keys(a.attributes))["position","normal","uv"].includes(u)||a.deleteAttribute(u);a.attributes.uv||a.setAttribute("uv",new _t(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(r.matrixWorld),e.has(o)||e.set(o,{material:r.material,cast:r.castShadow,order:r.renderOrder,geos:[],tris:0,labels:[]});const c=e.get(o),l=n(r);l&&((s=c.labels.at(-1))==null?void 0:s[1])!==l?c.labels.push([c.tris,l]):!l&&c.labels.length&&c.labels.at(-1)[1]!==""&&c.labels.push([c.tris,""]),c.geos.push(a),c.tris+=a.attributes.position.count/3}for(;i.children.length;)i.remove(i.children[0]);for(const r of e.values()){const o=cc(r.geos,!1);o.computeBoundingSphere();const a=new Ee(o,r.material);a.castShadow=r.cast,a.receiveShadow=!0,a.renderOrder=r.order,a.userData.labels=r.labels,i.add(a)}return e.size}function FM(i){const e=i.object.userData.labels;if(e){let t=0,n=e.length-1,s="";for(;t<=n;){const r=t+n>>1;e[r][0]<=i.faceIndex?(s=e[r][1],t=r+1):n=r-1}return s}for(let t=i.object;t;t=t.parent)if(t.userData.label)return t.userData.label;return""}const ll="/api/suggestions",ul="pixbit-suggestions-v2",Yp={W:"Window table",L:"Long table",E:"East-wall desk",LOCK:"Lockers"},BM={W:[1.4,1.2],L:[2.8,1.2],E:[1.3,.8],LOCK:[.55,1.25]},zM=["Corner cabin","Cabin 1","Cabin 2","Lounge","Corridor","Reception","Open workspace","Back wall","East wall","Windows",...Za.map(i=>i.id==="LOCK"?"Lockers":`${Yp[i.id[0]]} ${i.id}`)],$n="#ecc828",pd="#3fbf6f",HM=35e6;function VM({scene:i,camera:e,player:t,world:n,zoneAt:s,renderer:r}){let o=[],a=!1,c=null,l=[],u=[],h=!1,f=!1,d=null;async function g(){try{const U=await fetch(ll);if(!U.ok)throw new Error(U.status);o=await U.json()}catch{a=!0;try{o=JSON.parse(localStorage.getItem(ul))||[]}catch{o=[]}}F()}async function x(U,J,Re){if(a){U.n=U.n??o.reduce((Ae,Se)=>Math.max(Ae,Se.n||0),0)+1,U.created=U.created??Date.now(),U.files=[...(U.files||[]).filter(Ae=>!Re.includes(Ae.name)),...J.map(Ae=>({name:Ae.name,type:Ae.type,path:Ae.data}))];const ce=o.findIndex(Ae=>Ae.id===U.id);ce>=0?o[ce]=U:o.push(U);try{localStorage.setItem(ul,JSON.stringify(o))}catch{throw new Error("browser storage is full (start the dev server to save files to the project)")}return U}const k=await fetch(ll,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...U,newFiles:J,removeFiles:Re})}),ye=await k.json().catch(()=>({}));if(!k.ok)throw new Error(ye.error||`server said ${k.status}`);const K=o.findIndex(ce=>ce.id===ye.id);return K>=0?o[K]=ye:o.push(ye),ye}async function m(U){if(a||await fetch(`${ll}/${encodeURIComponent(U)}`,{method:"DELETE"}),o=o.filter(J=>J.id!==U),a)try{localStorage.setItem(ul,JSON.stringify(o))}catch{}}function p(U,J){let Re=null,k=.9;const ye=s(U,J);for(const K of Za){if(s(K.x,K.z)!==ye)continue;const ce=K.id==="LOCK"?"LOCK":K.id[0];let[Ae,Se]=BM[ce]||[1,1];(K.rot||0)%180&&([Ae,Se]=[Se,Ae]);const Je=Math.hypot(Math.max(0,Math.abs(U-K.x)-Ae/2),Math.max(0,Math.abs(J-K.z)-Se/2));Je<k&&(k=Je,Re=K.id==="LOCK"?"Lockers":`${Yp[ce]} ${K.id}`)}return Re}const v=U=>Math.round(U*100)/100,y=U=>/^image\/(jpeg|png|gif|webp|avif|svg\+xml|bmp)$/.test(U.type),_=U=>U.src||U.path,A=new st;A.name="suggestion-marks",i.add(A);const E=new Xt(.07,16,12),R=new Jn(.008,.008,1,6),P=new kn({color:"#222"}),b=new I(0,1,0),M={},D=(U,J=1)=>M[U+J]||(M[U+J]=new kn({color:U,transparent:J<1,opacity:J,depthWrite:J===1,side:Bt}));function G(U,J){const Re=document.createElement("canvas");Re.width=Re.height=64;const k=Re.getContext("2d");k.fillStyle="#111",k.beginPath(),k.arc(32,32,28,0,Math.PI*2),k.fill(),k.strokeStyle=J,k.lineWidth=5,k.stroke(),k.fillStyle="#fff",k.font="bold 28px system-ui, sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText(String(U),32,34);const ye=new Cn(Re);ye.colorSpace=Et;const K=new Ks(new Es({map:ye,depthTest:!1,transparent:!0}));return K.scale.set(.22,.22,1),K.renderOrder=10,K}function V({x0:U,z0:J,x1:Re,z1:k},ye,K){const ce=Math.abs(Re-U),Ae=Math.abs(k-J),Se=new Ee(new xt(ce,Ae),D(ye,.18));Se.rotation.x=-Math.PI/2,Se.position.set((U+Re)/2,.02,(J+k)/2),Se.renderOrder=3;const Je=[[U,J],[Re,J],[Re,k],[U,k]].map(([Zt,Mt])=>new I(Zt,.025,Mt)),Ct=new _p(new Gt().setFromPoints(Je),new Bu({color:ye}));K.add(Se,Ct)}function q(U,J,Re,k,ye,K){const ce=new Ee(R,P);ce.scale.y=k,ce.quaternion.setFromUnitVectors(b,Re),ce.position.copy(J).addScaledVector(Re,k/2);const Ae=new Ee(E,D(ye));Ae.position.copy(J).addScaledVector(Re,k);const Se=G(K,ye);Se.position.copy(Ae.position).add(new I(0,.18,0)),U.add(ce,Ae,Se)}function ee(){for(const U of[...A.children])A.remove(U),U.traverse(J=>{var Re,k,ye;(k=(Re=J.material)==null?void 0:Re.map)==null||k.dispose(),(J.isLine||((ye=J.geometry)==null?void 0:ye.type)==="PlaneGeometry")&&J.geometry.dispose()});for(const U of o){if(U.status==="done")continue;const J=new st;J.userData.sid=U.id;const Re=$n;U.area?(V(U.area,Re,J),q(J,new I((U.area.x0+U.area.x1)/2,0,(U.area.z0+U.area.z1)/2),b,1.1,Re,U.n)):q(J,new I(...U.point),new I(...U.normal||[0,1,0]).normalize(),.28,Re,U.n),A.add(J)}}const $=new st;i.add($);function le(){for(const U of[...$.children])$.remove(U)}const z=document.createElement("style");z.textContent=`
  .sg-modal { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,.5); z-index:20; padding:16px; }
  .sg-hidden { display:none !important; }
  .sg-card { width:min(520px,100%); max-height:100%; overflow:auto; background:#1b1b1b; color:#eee; border:1px solid ${$n}; border-radius:12px; padding:18px 20px; font-size:14px; box-sizing:border-box; }
  .sg-card h2 { margin:0 0 6px; font-size:18px; color:#fff; }
  .sg-card label.f { display:block; font-size:12px; color:#aaa; margin:10px 0 4px; }
  .sg-card input[type=text], .sg-card textarea { width:100%; box-sizing:border-box; background:#111; color:#fff; border:1px solid #444; border-radius:8px; padding:8px 10px; font:inherit; }
  .sg-card textarea { min-height:110px; resize:vertical; }
  .sg-card input:focus, .sg-card textarea:focus { outline:none; border-color:${$n}; }
  .sg-meta { color:#999; font-size:12px; margin-top:4px; }
  .sg-drop { margin-top:4px; border:1.5px dashed #555; border-radius:8px; padding:12px; text-align:center; color:#aaa; cursor:pointer; }
  .sg-drop.over, .sg-drop:focus { border-color:${$n}; color:${$n}; outline:none; }
  .sg-files { display:grid; grid-template-columns:repeat(auto-fill,minmax(110px,1fr)); gap:8px; margin-top:8px; }
  .sg-file { position:relative; background:#111; border:1px solid #333; border-radius:8px; overflow:hidden; font-size:12px; }
  .sg-file img { width:100%; height:80px; object-fit:cover; display:block; }
  .sg-file .doc { height:80px; display:flex; align-items:center; justify-content:center; color:${$n}; font-weight:700; font-size:16px; }
  .sg-file span { display:block; padding:4px 6px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .sg-file button { position:absolute; top:4px; right:4px; padding:1px 7px !important; }
  .sg-check { display:flex; align-items:center; gap:8px; margin-top:12px; }
  .sg-reply { margin-top:10px; background:#11261a; border:1px solid #2c5a3c; border-radius:8px; padding:8px 10px; white-space:pre-wrap; font-size:13px; }
  .sg-row { display:flex; gap:8px; margin-top:14px; align-items:center; flex-wrap:wrap; }
  .sg-row .sp { flex:1; }
  .sg-card button, .sg-list button { font:inherit; font-size:13px; padding:7px 12px; border-radius:7px; border:1px solid #555; background:#2a2a2a; color:#eee; cursor:pointer; }
  .sg-card button:hover, .sg-list button:hover { border-color:#999; }
  .sg-card button.pri { background:${$n}; color:#111; border-color:${$n}; font-weight:700; }
  .sg-card button.del { color:#ff8a7a; }
  .sg-err { color:#ff8a7a; font-size:13px; margin-top:8px; min-height:1em; }
  .sg-list { position:fixed; top:0; right:0; bottom:0; width:min(380px,100%); background:#161616; color:#eee; border-left:1px solid #333; z-index:15; display:flex; flex-direction:column; font-size:14px; }
  .sg-list header { display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid #333; gap:8px; }
  .sg-list header b { flex:1; font-size:16px; }
  .sg-items { overflow:auto; padding:8px 12px 16px; }
  .sg-item { display:flex; gap:10px; padding:12px 4px; border-bottom:1px solid #2a2a2a; }
  .sg-num { flex:none; width:26px; height:26px; border-radius:50%; background:#111; border:2px solid ${$n}; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; }
  .sg-num.done { border-color:${pd}; }
  .sg-body { flex:1; min-width:0; }
  .sg-body p { margin:0 0 6px; white-space:pre-wrap; word-break:break-word; }
  .sg-body small { color:#999; display:block; margin-bottom:6px; }
  .sg-badge { display:inline-block; font-size:11px; padding:1px 7px; border-radius:10px; background:#3a3315; color:${$n}; margin-right:6px; }
  .sg-badge.done { background:#16301f; color:${pd}; }
  .sg-thumbs { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:6px; }
  .sg-thumbs img { width:72px; height:54px; object-fit:cover; border-radius:5px; }
  .sg-thumbs a { font-size:12px; color:${$n}; }
  .sg-reply-l { font-size:12px; color:#9fd8b0; background:#11261a; border-radius:6px; padding:6px 8px; margin-bottom:6px; white-space:pre-wrap; }
  .sg-empty { color:#999; padding:16px 4px; line-height:1.6; }
  .sg-toast { position:fixed; left:50%; bottom:40px; transform:translateX(-50%); background:rgba(0,0,0,.85); color:#fff; padding:8px 16px; border-radius:6px; z-index:30; font-size:14px; pointer-events:none; opacity:0; transition:opacity .3s; max-width:90vw; text-align:center; }
  .sg-toast.show { opacity:1; }`,document.head.appendChild(z);const de=document.createElement("div");de.className="sg-modal sg-hidden",de.innerHTML=`<div class="sg-card" role="dialog" aria-modal="true" aria-labelledby="sg-title">
    <h2 id="sg-title">New suggestion</h2>
    <label class="f" for="sg-section">Section</label>
    <input type="text" id="sg-section" list="sg-sections" placeholder="e.g. Long table L2, Reception, Cabin 1">
    <datalist id="sg-sections">${zM.map(U=>`<option value="${U}">`).join("")}</datalist>
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
  </div>`,document.body.appendChild(de);const ue=U=>de.querySelector(U),Te=ue("#sg-text"),Ge=ue("#sg-section"),qe=ue(".sg-drop"),te=ue("input[type=file]"),ne=ue(".sg-files"),ve=ue(".sg-err"),pe=ue(".sg-meta"),ke=ue("#sg-done"),ze=ue(".sg-reply"),Oe=document.createElement("div");Oe.className="sg-list sg-hidden",Oe.innerHTML='<header><b>Suggestions</b><button type="button" class="close">Close (L)</button></header><div class="sg-items"></div>',document.body.appendChild(Oe);const Ve=Oe.querySelector(".sg-items"),fe=document.createElement("div");fe.className="sg-toast",document.body.appendChild(fe);let xe;function N(U,J=2600){fe.textContent=U,fe.classList.add("show"),clearTimeout(xe),xe=setTimeout(()=>fe.classList.remove("show"),J)}const he=U=>U.area?`Area x ${v(U.area.x0)}–${v(U.area.x1)} m, z ${v(U.area.z0)}–${v(U.area.z1)} m`:`Point x ${U.point[0]}, z ${U.point[2]}`;function j(){if(Ve.innerHTML="",!o.length){Ve.innerHTML='<div class="sg-empty">No suggestions yet.<br>Aim the dot at something and press <b>C</b>, or press <b>X</b> on two floor corners to mark an area.</div>';return}for(const U of[...o].sort((J,Re)=>J.n-Re.n)){const J=document.createElement("div");J.className="sg-item",J.innerHTML=`<div class="sg-num ${U.status==="done"?"done":""}">${U.n}</div><div class="sg-body"><small></small><p></p><div class="sg-thumbs"></div></div>`;const Re=J.querySelector("small");Re.innerHTML=`<span class="sg-badge ${U.status==="done"?"done":""}">${U.status==="done"?"done":"open"}</span>`,Re.append(U.section||U.zone||""),J.querySelector("p").textContent=U.text,U.reply&&J.querySelector("p").after(Object.assign(document.createElement("div"),{className:"sg-reply-l",textContent:`Claude: ${U.reply}`}));const k=J.querySelector(".sg-thumbs");for(const Je of U.files||[])y(Je)?k.append(Object.assign(document.createElement("img"),{src:_(Je),alt:Je.name,title:Je.name})):k.append(Object.assign(document.createElement("a"),{href:_(Je),textContent:Je.name,target:"_blank",download:Je.name}));const ye=J.querySelector(".sg-body"),K=document.createElement("div");K.className="sg-row",K.style.marginTop="2px";const ce=Object.assign(document.createElement("button"),{type:"button",textContent:"Go there"});ce.onclick=()=>be(U);const Ae=Object.assign(document.createElement("button"),{type:"button",textContent:"Open"});Ae.onclick=()=>{Oe.classList.add("sg-hidden"),B(U)};const Se=Object.assign(document.createElement("button"),{type:"button",textContent:"Delete"});Se.style.color="#ff8a7a",ge(Se,()=>se(U)),K.append(ce,Ae,Se),ye.appendChild(K),Ve.appendChild(J)}}function F(){ee(),j()}function Y(){ne.innerHTML="",l.forEach((U,J)=>{const Re=document.createElement("div");Re.className="sg-file",y(U)?Re.append(Object.assign(document.createElement("img"),{src:_(U),alt:U.name})):Re.append(Object.assign(document.createElement("div"),{className:"doc",textContent:(U.name.split(".").pop()||"file").slice(0,5).toUpperCase()})),Re.append(Object.assign(document.createElement("span"),{textContent:U.name,title:U.name}));const k=Object.assign(document.createElement("button"),{type:"button",textContent:"×"});k.setAttribute("aria-label",`Remove ${U.name}`),k.onclick=()=>{U.data||u.push(U.name),l.splice(J,1),Y()},Re.append(k),ne.append(Re)})}const _e=U=>new Promise((J,Re)=>{const k=new FileReader;k.onload=()=>J(k.result),k.onerror=Re,k.readAsDataURL(U)});async function me(U){ve.textContent="";for(const J of U){let Re=J.name||`pasted-${Date.now()}.png`,k=J.type||"application/octet-stream",ye;if(/^image\/(jpeg|png|webp)$/.test(k)&&J.size>15e5)try{const ce=await createImageBitmap(J),Ae=Math.min(1,2e3/Math.max(ce.width,ce.height)),Se=document.createElement("canvas");Se.width=Math.round(ce.width*Ae),Se.height=Math.round(ce.height*Ae),Se.getContext("2d").drawImage(ce,0,0,Se.width,Se.height),ye=Se.toDataURL("image/jpeg",.85),k="image/jpeg",Re=Re.replace(/\.\w+$/,"")+".jpg"}catch{}if(ye=ye||await _e(J),l.reduce((ce,Ae)=>{var Se;return ce+(((Se=Ae.data)==null?void 0:Se.length)||0)},0)+ye.length>HM){ve.textContent=`${Re} is too big to add (keep new files under ~25 MB per save).`;continue}l.push({name:Re,type:k,data:ye,src:ye})}Y()}qe.onclick=()=>te.click(),qe.onkeydown=U=>{(U.key==="Enter"||U.key===" ")&&(U.preventDefault(),te.click())},te.onchange=()=>{me([...te.files]),te.value=""},qe.ondragover=U=>{U.preventDefault(),qe.classList.add("over")},qe.ondragleave=()=>qe.classList.remove("over"),qe.ondrop=U=>{U.preventDefault(),qe.classList.remove("over"),me([...U.dataTransfer.files])},de.addEventListener("paste",U=>{const J=[...U.clipboardData.files];J.length&&(U.preventDefault(),me(J))}),Te.oninput=()=>{ve.textContent=""};const C=()=>!de.classList.contains("sg-hidden");let T=()=>{};function B(U){c=U,l=(U.files||[]).map(J=>({...J})),u=[],ue("#sg-title").textContent=U.id?`Suggestion ${U.n}`:U.area?"New suggestion for this area":"New suggestion",Ge.value=U.section||[U.near,U.zone].filter(Boolean).join(" · "),pe.textContent=he(U)+(U.folder?` · saved in suggestions/${U.folder}/`:""),Te.value=U.text||"",ke.checked=U.status==="done",ue(".sg-check").classList.toggle("sg-hidden",!U.id),ze.textContent=U.reply?`Claude: ${U.reply}`:"",ze.classList.toggle("sg-hidden",!U.reply),ue(".del").classList.toggle("sg-hidden",!U.id),ve.textContent="",Y(),h=!!document.pointerLockElement,de.classList.remove("sg-hidden"),t.state.paused=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>Te.focus(),30)}function ae(){if(de.classList.add("sg-hidden"),c=null,l=[],u=[],le(),t.state.paused=!1,h)try{const U=r.domElement.requestPointerLock();U!=null&&U.catch&&U.catch(()=>T())}catch{T()}}ue(".cancel").onclick=ae,ue(".pri").onclick=async()=>{const U=Te.value.trim();if(!U){ve.textContent="Write what needs to change first.",Te.focus();return}const J={...c,text:U,section:Ge.value.trim(),status:ke.checked?"done":"open",updated:Date.now()};delete J.near,J.id||(J.id=`s${Date.now().toString(36)}`);const Re=l.filter(k=>k.data).map(({name:k,type:ye,data:K})=>({name:k,type:ye,data:K}));ue(".pri").disabled=!0,ue(".pri").textContent="Saving…";try{const k=await x(J,Re,u);F(),N(a?`Suggestion ${k.n} saved in this browser`:`Suggestion ${k.n} saved to suggestions/${k.folder}/`),ae()}catch(k){ve.textContent=`Could not save: ${k.message}`}finally{ue(".pri").disabled=!1,ue(".pri").textContent="Save"}};function ge(U,J){let Re=0;U.onclick=async()=>{if(!Re){U.textContent="Click again to delete",U.style.borderColor="#ff8a7a",Re=setTimeout(()=>{Re=0,U.textContent="Delete",U.style.borderColor=""},4e3);return}clearTimeout(Re),Re=0,U.disabled=!0;try{await J()}finally{U.disabled=!1,U.textContent="Delete",U.style.borderColor=""}}}async function se(U){await m(U.id),F(),N(`Suggestion ${U.n} deleted`)}ge(ue(".del"),async()=>{if(c!=null&&c.id){const U=c;ae(),await se(U)}}),Oe.querySelector(".close").onclick=()=>Le(!1);function Le(U=Oe.classList.contains("sg-hidden")){Oe.classList.toggle("sg-hidden",!U),U&&(j(),document.pointerLockElement&&document.exitPointerLock())}function be(U){U.view&&(t.pos.set(U.view.x,0,U.view.z),e.position.set(U.view.x,e.position.y,U.view.z),e.quaternion.setFromEuler(new Rn(U.view.pitch,U.view.yaw,0,"YXZ"))),Le(!1),N(`${U.n}: ${U.text.slice(0,70)}${U.text.length>70?"…":""}`)}const Ie=new ky;Ie.far=40;const ot=new we(0,0);function H(){Ie.setFromCamera(ot,e);const U=Ie.intersectObjects([A,n],!0).find(k=>k.object.visible&&!k.object.isLine);if(!U)return null;let J=U.object;for(;J&&!J.userData.sid&&J!==i;)J=J.parent;if(J!=null&&J.userData.sid)return{mark:o.find(k=>k.id===J.userData.sid),point:U.point};const Re=U.face?U.face.normal.clone().transformDirection(U.object.matrixWorld):b.clone();return Re.dot(Ie.ray.direction)>0&&Re.negate(),{point:U.point,normal:Re,target:Ce(FM(U),U.point,Re)}}function Ce(U,J,Re){return U==="Wall"||U==="Glass wall"?J.x<.35?`Window ${U.toLowerCase()}`:J.x>9.8&&J.z>9.5?"East wall":J.z>18.4?"Back wall":`${U} (${s(J.x,J.z)})`:U||(Re.y>.7&&J.y<.1?"Floor":Re.y<-.7?"Ceiling":"")}function De(){const U=new Rn().setFromQuaternion(e.quaternion,"YXZ");return{x:v(t.pos.x),z:v(t.pos.z),yaw:v(U.y),pitch:v(U.x)}}function Qe(){const U=H();if(!U){N("Aim the dot at something first");return}if(U.mark){B(U.mark);return}const J=U.point;B({point:[v(J.x),v(J.y),v(J.z)],normal:[v(U.normal.x),v(U.normal.y),v(U.normal.z)],zone:s(J.x,J.z),near:U.target||p(J.x,J.z),target:U.target,view:De()})}function Ue(){const U=H();if(!U){N("Aim the dot at the floor first");return}const{x:J,z:Re}=U.point;if(!d){d={x:J,z:Re},le(),q($,new I(J,0,Re),b,.5,$n,"1"),N("Corner 1 set. Aim at the opposite corner and press X (Esc cancels).",4e3);return}const k={x0:v(Math.min(d.x,J)),z0:v(Math.min(d.z,Re)),x1:v(Math.max(d.x,J)),z1:v(Math.max(d.z,Re))};if(d=null,le(),k.x1-k.x0<.2||k.z1-k.z0<.2){N("That area is too small: pick two corners further apart");return}V(k,$n,$);const ye=(k.x0+k.x1)/2,K=(k.z0+k.z1)/2;B({area:k,point:[v(ye),0,v(K)],normal:[0,1,0],zone:s(ye,K),near:p(ye,K),view:De()})}return addEventListener("keydown",U=>{if(C()){if(!f)return;U.code==="Escape"&&(U.preventDefault(),ae()),U.code==="Enter"&&(U.metaKey||U.ctrlKey)&&ue(".pri").click();return}f&&(/^(INPUT|TEXTAREA|SELECT)$/.test(U.target.tagName)||(U.code==="Escape"&&d&&(d=null,le(),N("Area cancelled")),U.code==="KeyC"&&Qe(),U.code==="KeyX"&&Ue(),U.code==="KeyL"&&Le()))}),g(),{isOpen:()=>C()||!Oe.classList.contains("sg-hidden"),setEnabled(U){f=U,A.visible=U,U||(C()&&ae(),Le(!1),d=null,le())},onResumeFailed(U){T=U}}}const md=1.8,gd=2.2;function xd(i,e,t,n=2.4){const s=new st;i.add(s);const r=new Ee(new un(.012,n-.04,e-.02),w.glass);r.position.set(0,n/2,t*e/2),r.renderOrder=2,s.add(r),S(s,w.chrome,.02,.1,e-.04,0,.05,t*e/2),S(s,w.chrome,.02,.06,.12,0,n-.06,t*.08),S(s,w.chrome,.02,.06,.12,0,.12,t*.08);const o=t*(e-.12);for(const a of[-1,1]){S(s,w.chrome,.028,1,.028,a*.07,1.05,o);for(const c of[.62,1.48])S(s,w.chrome,.12,.02,.02,a*.035,c,o)}return t>0&&S(s,w.blackMatte,.03,.14,.2,0,1.05,t*(e-.02)),s}let hl=null;function GM(){if(hl)return hl;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d");return e.fillStyle="rgba(15,18,24,.8)",e.strokeStyle="#fff",e.lineWidth=8,e.beginPath(),e.arc(64,64,56,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.font="bold 72px system-ui, sans-serif",e.fillText("F",64,68),hl=new Cn(i)}function _d(i,e,t,n){const s=new Ks(new Es({map:GM(),depthTest:!1,transparent:!0}));return s.scale.set(.11,.11,1),s.position.set(e,t,n),s.renderOrder=20,s.visible=!1,i.add(s),s}function WM({scene:i,player:e,camera:t}){const n=[],s=(p,v,y)=>{const _=(v-p)/2,A=new st;i.add(A);const E=new st;E.position.set(0,0,p),A.add(E);const R=new st;R.position.set(0,0,v),A.add(R);const P=_d(E,.1,1.25,_-.12);xd(E,_,1),xd(R,_,-1);const b={minX:-.08,maxX:.08,minZ:p,maxZ:v};ms.push(b),n.push({name:y,x:0,z:(p+v)/2,t:0,target:0,block:b,marker:P,apply(M){const D=M*Math.PI/2*.95;E.rotation.y=D,R.rotation.y=-D}})};s(4.9,6.5,"balcony door"),s(Mu[0],Mu[1],"meeting room door");for(const p of uc){i.add(p.leaf),ms.push(p.block);const v=_d(p.leaf,p.handle[0],p.handle[1],p.handle[2]);n.push({name:p.name,x:p.x,z:p.z,t:0,target:0,block:p.block,marker:v,apply(y){p.leaf.rotation.y=p.closed+(p.open-p.closed)*y}})}const r={visible:!1,material:{opacity:1}},o=ja.map(p=>(i.add(p.leaf),{name:"locker door",x:p.center.x,z:p.center.z,center:p.center,t:0,target:0,block:null,marker:r,apply(v){p.leaf.rotation.y=p.closed+(p.open-p.closed)*v}}));n.push(...o);const a=new I,c=new I,l=()=>{t.getWorldDirection(c);let p=null,v=.96;for(const y of o){if(a.copy(y.center).sub(t.position),a.length()>1.8)continue;const A=a.normalize().dot(c);A>v&&(v=A,p=y)}return p},u=()=>{var _;const p=l();if(p)return p;let v=null,y=md;for(const A of n){if(A.center||(_=A.locked)!=null&&_.call(A))continue;const E=Math.hypot(e.pos.x-A.x,e.pos.z-A.z);E<y&&(y=E,v=A)}return v},h=p=>{if(p.target=p.target?0:1,p.target&&p.block){const v=ms.indexOf(p.block);v>=0&&ms.splice(v,1)}};addEventListener("keydown",p=>{if(p.code!=="KeyF"||e.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(p.target.tagName))return;const v=u();v&&h(v)});let f=0,d=0;addEventListener("mousedown",p=>{f=p.clientX,d=p.clientY}),addEventListener("click",p=>{if(p.button!==0||e.state.paused||!e.controls.isLocked&&!e.state.dragMode||Math.hypot(p.clientX-f,p.clientY-d)>5&&!e.controls.isLocked)return;const v=l();v&&h(v)});function g(p){var y,_;const v=u();for(const A of n){const E=Math.hypot(e.pos.x-A.x,e.pos.z-A.z);A.marker.visible=E<4.5&&(!((y=A.locked)!=null&&y.call(A))||A.askToOpen),A.marker.material.opacity=A===v||A.askToOpen&&((_=A.locked)!=null&&_.call(A))&&E<md?1:.55}for(const A of n)A.t!==A.target&&(A.t=A.target>A.t?Math.min(1,A.t+p*gd):Math.max(0,A.t-p*gd),A.apply(A.t*A.t*(3-2*A.t)),A.block&&A.t===0&&!ms.includes(A.block)&&ms.push(A.block))}function x(){const p=u();return p?`${p.center?"F / click":"F"} ${p.target?"close":"open"} ${p.name.toLowerCase()}`:""}return{update:g,prompt:x,byName:p=>n.find(v=>v.name===p),toggle:h}}const XM=1,fl=8,dl=(7.6+8.65)/2;function vd(i){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=i?"#3ddc84":"#ff5a4f";t.fillStyle="rgba(12,14,18,.85)",t.strokeStyle=n,t.lineWidth=7,t.beginPath(),t.arc(64,64,58,0,Math.PI*2),t.fill(),t.stroke(),t.lineWidth=9,t.lineCap="round",t.beginPath(),i?(t.arc(78,50,17,Math.PI,0),t.lineTo(95,58)):(t.moveTo(47,62),t.lineTo(47,50),t.arc(64,50,17,Math.PI,0),t.lineTo(81,62)),t.stroke(),t.fillStyle=n,t.beginPath(),t.roundRect(36,60,56,40,7),t.fill(),t.fillStyle="rgba(12,14,18,.9)",t.beginPath(),t.arc(64,76,6,0,Math.PI*2),t.fill(),t.fillRect(61,78,6,12);const s=new Cn(e);return s.colorSpace=Et,s}const qM=`
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
`;function YM({scene:i,player:e,camera:t,doors:n}){const s=n.byName("entrance door"),r=()=>e.pos.x>Nt,o=vd(!1),a=vd(!0),c=new Ks(new Es({map:o,transparent:!0}));c.scale.set(.13,.13,1),c.position.set(Mn.x+.06,Mn.y+.24,Mn.z),c.renderOrder=20,i.add(c);const l=new zt({color:"#ff3b30",emissive:"#ff3b30",emissiveIntensity:1.6}),u=new Ee(new un(.006,.012,.03),l);u.position.set(Mn.x+.018,Mn.y+.055,Mn.z),i.add(u);const h=document.createElement("canvas");h.width=512,h.height=150;const f=h.getContext("2d"),d=new Cn(h);d.colorSpace=Et;const g=new Ks(new Es({map:d,transparent:!0}));g.scale.set(.4,.4*150/512,1),g.center.set(0,.5),g.position.set(Mn.x+.06,Mn.y+.24,Mn.z-.09),g.renderOrder=20,i.add(g);let x="";const m=(ne,ve,pe,ke)=>{const ze=`${ne}|${ve}|${Math.round(pe*40)}|${ke}`;ze!==x&&(x=ze,f.clearRect(0,0,512,150),f.fillStyle="rgba(0,0,0,.86)",f.beginPath(),f.roundRect(4,4,504,142,16),f.fill(),f.fillStyle="#fff",f.font="600 46px system-ui, sans-serif",f.textBaseline="alphabetic",f.fillText(ne,30,66),f.fillStyle="rgba(255,255,255,.65)",f.font="400 30px system-ui, sans-serif",f.fillText(ve,30,108),f.fillStyle="rgba(255,255,255,.18)",f.fillRect(30,124,452,8),f.fillStyle=ke,f.fillRect(30,124,452*Math.max(0,Math.min(1,pe)),8),d.needsUpdate=!0)},p=new I(Mn.x+.004,Mn.y+.02,Mn.z),v=new I,y=new I;let _=0;const A=document.createElement("style");A.textContent=qM,document.head.appendChild(A);const E=document.createElement("div");E.id="unlockbox";const R=2*Math.PI*18;E.innerHTML=`<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="4"/>
    <circle class="ring" cx="22" cy="22" r="18" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-dasharray="${R}" stroke-dashoffset="${R}"/>
    <text x="22" y="27.5" text-anchor="middle" fill="#fff" font-family="system-ui, sans-serif" font-weight="700" font-size="15">F</text></svg>
    <div class="txt"></div>`,document.body.appendChild(E);const P=E.querySelector(".ring"),b=E.querySelector("text"),M=E.querySelector(".txt");let D="";const G=(ne,ve,pe,ke,ze)=>{E.classList.toggle("show",ne),ne&&(ve!==D&&(M.innerHTML=ve,D=ve),P.setAttribute("stroke-dashoffset",String(R*(1-pe))),P.setAttribute("stroke",ke),b.textContent=ze)};let V="locked",q=0,ee=!1,$=0;const le=()=>r()&&Math.hypot(e.pos.x-Mn.x,e.pos.z-Mn.z)<.9,z=()=>r()&&Math.hypot(e.pos.x-Nt,e.pos.z-dl)<1.4,de=()=>e.pos.x>Nt-.6&&e.pos.x<Nt+.6&&Math.abs(e.pos.z-dl)<.75;s.locked=()=>V!=="open"&&r();const ue=()=>{V="open",$=fl,ee=!1,q=0,s.target||n.toggle(s),c.material.map=a,c.material.needsUpdate=!0},Te=ne=>{var ve;return/^(INPUT|TEXTAREA|SELECT)$/.test((ve=ne.target)==null?void 0:ve.tagName)};addEventListener("keydown",ne=>{ne.code!=="KeyF"||ne.repeat||e.state.paused||Te(ne)||V==="locked"&&le()&&(ee=!0)}),addEventListener("keyup",ne=>{ne.code==="KeyF"&&(ee=!1)}),addEventListener("blur",()=>{ee=!1});function Ge(ne){const ve=le();if((!ve||V!=="locked")&&(ee=!1),ee?(q+=ne/XM,q>=1&&ue()):q=Math.max(0,q-ne*2.5),V==="open"&&($-=ne,$<=0&&!de()&&(V="closing")),V==="closing"&&(s.target&&n.toggle(s),s.t===0&&(V="locked",c.material.map=o,c.material.needsUpdate=!0)),_=(ee?1:0)?Math.min(1,_+ne/.3):Math.max(0,_-ne/.35),_>0){t.position.distanceTo(p)<2.4&&r()?v.copy(p):(t.getWorldDirection(y),v.copy(t.position).addScaledVector(y,.6).y-=.15);const xe=ee&&_===1?.012*(.5+.5*Math.sin(performance.now()/120)):0;xe&&(t.getWorldDirection(y),v.addScaledVector(y,xe))}const ze=V==="open"?"#34d058":ee&&_===1?Math.floor(performance.now()/150)%2?"#3aa0ff":"#0b2a55":"#ff3b30";l.color.set(ze),l.emissive.set(ze);const Oe=Math.hypot(e.pos.x-Mn.x,e.pos.z-Mn.z),Ve=r()&&(Oe<1.8||z());if(c.visible=g.visible=Ve,Ve)if(V==="open"){const xe=Math.max(0,Math.ceil($));m("Door unlocked",$>0?`Locks again in ${xe}s`:"Clear the doorway to lock",Math.max(0,$)/fl,"#34d058")}else V==="closing"?m("Locking…","Door closing",0,"#ff5a4f"):ve?m(q>0?"Unlocking…":"Hold F to unlock",q>0?"Keep holding F":"Place your finger",q,"#fff"):m("Locked","Use fingerprint to unlock",1,"#ff5a4f");const fe=ve||V!=="locked"&&Math.hypot(e.pos.x-Nt,e.pos.z-dl)<5;if(V==="locked")!ve&&z()?G(!0,"Use fingerprint to unlock<small>Reader on the wall beside the door</small>",1,"#ff5a4f","🔒"):G(ve,q>0?"Unlocking…<small>Keep holding <kbd>F</kbd></small>":"Press and hold <kbd>F</kbd> to unlock<small>Pixbit entrance</small>",q,"#fff","F");else if(V==="open"){const xe=Math.max(0,Math.ceil($));G(fe,$>0?`Door unlocked<small>Locks again in ${xe}s</small>`:"Door unlocked<small>Clear the doorway to lock</small>",Math.max(0,$)/fl,"#34d058",String(xe))}else G(fe,"Locking…<small>Door closing</small>",0,"#ff5a4f","🔒")}function qe(){return V==="locked"&&le()?"F hold to unlock door":""}function te(){return{k:_*_*(3-2*_),aim:v}}return{update:Ge,prompt:qe,reach:te}}const $M=`
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
`;let yo=null;function KM(i){try{yo||(yo=new(window.AudioContext||window.webkitAudioContext));const e=yo.currentTime,t=i?[[392,0],[523,.12],[659,.24],[784,.36],[1047,.5]]:[[160,0],[120,.22]];for(const[n,s]of t){const r=yo.createOscillator(),o=yo.createGain();r.type=i?"triangle":"sawtooth",r.frequency.value=n;const a=i?s===.5?.7:.16:.3;o.gain.setValueAtTime(1e-4,e+s),o.gain.exponentialRampToValueAtTime(i?.18:.12,e+s+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+s+a),r.connect(o).connect(yo.destination),r.start(e+s),r.stop(e+s+a+.05)}}catch{}}function jM({scene:i,player:e,doors:t}){const n=t.byName("ladies toilet");if(!n)return{update(){},prompt:()=>""};const s=new ac("#fff4ea",6,4.5,1.6);s.position.set(n.x+1.2,2.7,n.z+.5),i.add(s);const r=document.createElement("style");r.textContent=$M,document.head.appendChild(r);const o=document.createElement("div");o.id="ladiesq",o.innerHTML='<div class="band"></div><div class="big"></div><div class="sub"></div>',document.body.appendChild(o);const a=o.querySelector(".big"),c=o.querySelector(".sub");let l=!1,u=!1,h=0,f=!1;n.locked=()=>!l,n.askToOpen=!0;const d=()=>Math.hypot(e.pos.x-n.x,e.pos.z-n.z)<1.8&&e.pos.x<n.x,g=(A,E,R,P)=>{a.textContent=A,a.classList.toggle("red",E),c.innerHTML=R,o.classList.remove("show"),o.offsetWidth,o.classList.add("show"),h=P?performance.now()+P:0},x=()=>{o.classList.remove("show"),u=!1,h=0},m=()=>{u=!0,g("Are u gay?",!1,'<button data-a="y"><kbd>Y</kbd> Yes</button><button data-a="n"><kbd>N</kbd> No</button>',0)},p=A=>{u&&(u=!1,A?(l=!0,n.target||t.toggle(n),g("Respect +",!1,"<span>Welcome in</span>",2200)):g("Access denied",!0,"<span>Ladies only</span>",2e3),KM(A))};c.addEventListener("click",A=>{const E=A.target.closest("button");E&&p(E.dataset.a==="y")});const v=A=>{var E;return/^(INPUT|TEXTAREA|SELECT)$/.test((E=A.target)==null?void 0:E.tagName)};addEventListener("keydown",A=>{if(!(A.repeat||e.state.paused||v(A))){if(u){A.code==="KeyY"?p(!0):(A.code==="KeyN"||A.code==="Escape")&&p(!1);return}A.code==="KeyF"&&!l&&d()&&m()}});function y(){u&&!d()&&x(),h&&performance.now()>h&&x(),n.t>0&&(f=!0),l&&f&&n.t===0&&!n.target&&(l=!1,f=!1)}function _(){return!l&&!u&&d()?"F open ladies toilet":""}return{update:y,prompt:_}}const ZM=3.4,Kn=640,Ki=360,Dn=20,pl=Kn/Dn,ml=(Ki-40)/Dn,Mo=[{name:"Snake",ready:!0},{name:"Pong",ready:!1},{name:"Tetris",ready:!1},{name:"Car Race",ready:!1}];function JM({scene:i,player:e}){const t=document.createElement("canvas");t.width=Kn,t.height=Ki;const n=t.getContext("2d"),s=new Cn(t);s.colorSpace=Et;const r=new Ee(new xt(ps.w,ps.h),new kn({map:s,toneMapped:!1}));r.position.set(ps.x+.003,ps.y,ps.z),r.rotation.y=Math.PI/2,r.visible=!1,i.add(r);const o=document.createElement("div");Object.assign(o.style,{position:"fixed",inset:"0",background:"#000",display:"none",zIndex:"20",alignItems:"center",justifyContent:"center"}),document.body.appendChild(o);let a="off",c=0,l=!1,u,h,f,d,g,x=0,m,p=0,v=.11;const y=()=>Math.hypot(e.pos.x-ps.x,e.pos.z-ps.z)<ZM&&e.pos.x>0&&e.pos.z>22.8;function _(z){l=z,z?(o.appendChild(t),Object.assign(t.style,{width:"min(100vw, 177.78vh)",height:"auto",imageRendering:"pixelated"}),o.style.display="flex"):(o.style.display="none",t.parentNode&&t.parentNode.removeChild(t))}function A(){a="menu",c=0,r.visible=!0,e.state.paused=!0,q()}function E(){a="off",r.visible=!1,e.state.paused=!1,_(!1)}function R(){u=[{x:8,y:8},{x:7,y:8},{x:6,y:8}],h={x:1,y:0},f=h,g=0,m=!1,p=0,v=.11,P(),a="snake"}function P(){do d={x:Math.floor(Math.random()*pl),y:Math.floor(Math.random()*ml)};while(u.some(z=>z.x===d.x&&z.y===d.y))}function b(){h=f;const z={x:u[0].x+h.x,y:u[0].y+h.y};if(z.x<0||z.y<0||z.x>=pl||z.y>=ml||u.some(de=>de.x===z.x&&de.y===z.y)){m=!0,x=Math.max(x,g);return}u.unshift(z),z.x===d.x&&z.y===d.y?(g++,v=Math.max(.06,v-.003),P()):u.pop()}const M=(z,de=600)=>`${de} ${z}px "Avenir Next", "Helvetica Neue", Arial, sans-serif`;function D(z){n.fillStyle="rgba(255,255,255,.55)",n.font=M(14,500),n.textAlign="center",n.fillText(z,Kn/2,Ki-14)}function G(){const z=n.createLinearGradient(0,0,Kn,Ki);z.addColorStop(0,"#1a1f3a"),z.addColorStop(1,"#3a1d4f"),n.fillStyle=z,n.fillRect(0,0,Kn,Ki),n.fillStyle="#fff",n.font=M(30,700),n.textAlign="left",n.fillText("Pixbit Arcade",40,56),n.fillStyle="#b46cff",n.fillRect(40,68,120,3),Mo.forEach((de,ue)=>{const Te=104+ue*50,Ge=ue===c;n.fillStyle=Ge?"rgba(255,255,255,.14)":"rgba(255,255,255,.04)",n.fillRect(40,Te,Kn-80,40),Ge&&(n.fillStyle="#5fe3ff",n.fillRect(40,Te,5,40)),n.fillStyle=de.ready?"#fff":"rgba(255,255,255,.35)",n.font=M(20,Ge?700:500),n.textAlign="left",n.fillText(de.name,62,Te+27),n.font=M(14,500),n.textAlign="right",n.fillStyle=de.ready?"#7dff9a":"rgba(255,255,255,.35)",n.fillText(de.ready?"PLAY":"coming soon",Kn-58,Te+26)}),D("↑ ↓ choose · Enter play · F full screen · E turn TV off")}function V(){n.fillStyle="#0d1410",n.fillRect(0,0,Kn,Ki),n.fillStyle="#15241a",n.fillRect(0,0,Kn,40),n.fillStyle="#7dff9a",n.font=M(18,700),n.textAlign="left",n.fillText(`SNAKE   score ${g}`,16,27),n.textAlign="right",n.fillStyle="rgba(255,255,255,.5)",n.font=M(13,500),n.fillText(`best ${x} · arrows/WASD · F full screen · Backspace menu`,Kn-14,26);const z=40;n.fillStyle="rgba(255,255,255,.03)";for(let de=0;de<pl;de++)for(let ue=0;ue<ml;ue++)(de+ue)%2&&n.fillRect(de*Dn,z+ue*Dn,Dn,Dn);n.fillStyle="#ff4f6d",n.beginPath(),n.arc(d.x*Dn+Dn/2,z+d.y*Dn+Dn/2,Dn/2-3,0,Math.PI*2),n.fill(),u.forEach((de,ue)=>{n.fillStyle=ue===0?"#c8ffd4":`hsl(${135-Math.min(ue,30)}, 80%, ${55-Math.min(ue,20)}%)`,n.fillRect(de.x*Dn+1,z+de.y*Dn+1,Dn-2,Dn-2)}),m&&(n.fillStyle="rgba(0,0,0,.6)",n.fillRect(0,0,Kn,Ki),n.fillStyle="#fff",n.textAlign="center",n.font=M(40,800),n.fillText("GAME OVER",Kn/2,Ki/2-14),n.font=M(18,500),n.fillText(`score ${g} · best ${x}`,Kn/2,Ki/2+20),D("Enter play again · Backspace menu"))}function q(){a==="menu"?G():a==="snake"&&V(),s.needsUpdate=!0}const ee={ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1],ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0]};addEventListener("keydown",z=>{if(!/^(INPUT|TEXTAREA|SELECT)$/.test(z.target.tagName)){if(a==="off"){z.code==="KeyE"&&y()&&!e.state.paused&&(A(),z.stopImmediatePropagation());return}if(z.stopImmediatePropagation(),z.code!=="Escape"&&z.preventDefault(),z.code==="KeyF"){_(!l);return}if(a==="menu"){if((z.code==="ArrowUp"||z.code==="KeyW")&&(c=(c+Mo.length-1)%Mo.length),(z.code==="ArrowDown"||z.code==="KeyS")&&(c=(c+1)%Mo.length),(z.code==="Enter"||z.code==="Space")&&Mo[c].ready&&R(),z.code==="KeyE"||z.code==="Backspace"){E();return}}else if(a==="snake"){const de=ee[z.code];de&&!m&&!(de[0]===-h.x&&de[1]===-h.y)&&(f={x:de[0],y:de[1]}),m&&(z.code==="Enter"||z.code==="Space")&&R(),z.code==="Backspace"&&(a="menu")}q()}},!0);function $(z){a!=="snake"||m||(p+=Math.min(z,v),p>=v&&(p-=v,b(),q()))}function le(){return a!=="off"?a==="menu"?"TV on":"playing snake":y()?"E play TV games":""}return{update:$,prompt:le,isOn:()=>a!=="off"}}const QM=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0,bo=i=>`<svg viewBox="0 0 24 24">${i}</svg>`,gl={jump:bo('<path d="M12 19V6"/><path d="M6 11l6-6 6 6"/><path d="M5 21h14"/>'),doorOpen:bo('<path d="M4 21h16"/><path d="M6 21V3h9v2"/><path d="M15 21V5l-5 1.5V21"/><path d="M11.8 13h.01"/><path d="M18 9l2 2-2 2"/>'),doorClose:bo('<path d="M4 21h16"/><path d="M6 21V3h12v18"/><path d="M15 12h.01"/>'),rotate:bo('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),tv:bo('<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/><path d="M10 9l4 2-4 2z"/>')};async function eb(){var i,e,t,n;try{const s=document.documentElement;document.fullscreenElement||await(((i=s.requestFullscreen)==null?void 0:i.call(s,{navigationUI:"hide"}))??((e=s.webkitRequestFullscreen)==null?void 0:e.call(s)))}catch{}try{await((n=(t=screen.orientation)==null?void 0:t.lock)==null?void 0:n.call(t,"landscape"))}catch{}}function tb({player:i,camera:e}){const{touch:t}=i,n=document.createElement("div");n.id="touch",n.innerHTML=`
    <div class="tj-base"><div class="tj-knob"></div></div>
    <button class="tb tb-jump" type="button" aria-label="Jump">${gl.jump}</button>
    <button class="tb tb-act off" type="button" aria-label="Use"></button>
    <div class="t-rotate">${gl.rotate}<div>Rotate your phone to landscape</div></div>`;const s=document.createElement("style");s.textContent=`
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
  `,document.head.appendChild(s),document.body.appendChild(n);const r=n.querySelector(".tj-base"),o=n.querySelector(".tj-knob"),a=55;let c=null,l=0,u=0,h=null,f=0,d=0;const g=new Rn(0,0,0,"YXZ");r.style.display="none";const x=E=>!!(E.closest&&E.closest(".tb"));n.addEventListener("touchstart",E=>{for(const R of E.changedTouches)x(R.target)||(R.clientX<innerWidth/2&&c===null?(c=R.identifier,l=R.clientX,u=R.clientY,r.style.left=l+"px",r.style.top=u+"px",r.style.display="block",o.style.transform="translate(0,0)"):R.clientX>=innerWidth/2&&h===null&&(h=R.identifier,f=R.clientX,d=R.clientY));x(E.target)||E.preventDefault()},{passive:!1}),n.addEventListener("touchmove",E=>{for(const R of E.changedTouches)if(R.identifier===c){let P=R.clientX-l,b=R.clientY-u;const M=Math.hypot(P,b);M>a&&(P*=a/M,b*=a/M),o.style.transform=`translate(${P}px, ${b}px)`,t.x=P/a,t.y=-b/a,t.run=M>a*1.15}else R.identifier===h&&!i.state.paused&&(g.setFromQuaternion(e.quaternion),g.y-=(R.clientX-f)*.006,g.x=Math.max(-1.45,Math.min(1.45,g.x-(R.clientY-d)*.006)),e.quaternion.setFromEuler(g),f=R.clientX,d=R.clientY);E.preventDefault()},{passive:!1});const m=E=>{for(const R of E.changedTouches)R.identifier===c&&(c=null,t.x=t.y=0,t.run=!1,r.style.display="none"),R.identifier===h&&(h=null)};n.addEventListener("touchend",m),n.addEventListener("touchcancel",m);const p=(E,R)=>{const P=n.querySelector(E);P.addEventListener("touchstart",b=>{b.preventDefault(),b.stopPropagation(),R()},{passive:!1}),P.addEventListener("click",b=>b.preventDefault())};p(".tb-jump",()=>i.jump());const v=n.querySelector(".tb-act");let y=null,_="",A=null;p(".tb-act",()=>{y&&(A=y,dispatchEvent(new KeyboardEvent("keydown",{code:y,bubbles:!0})))});for(const E of["touchend","touchcancel"])v.addEventListener(E,()=>{A&&(dispatchEvent(new KeyboardEvent("keyup",{code:A,bubbles:!0})),A=null)});return{show(E){n.classList.toggle("off",!E),E&&eb()},setAction(E){let R="",P=null;/^F (open|close|collect|hold)/.test(E)?(P="KeyF",R=E.startsWith("F close")?"doorClose":"doorOpen"):E&&(P="KeyE",R="tv"),y=P,v.classList.toggle("off",!P),R!==_&&(v.innerHTML=R?gl[R]:"",v.setAttribute("aria-label",E),_=R)}}}const yd="pixbit-gamemode";function nb({defaultId:i="free"}={}){const e=[{id:"free",name:"Free Walk",desc:"Just explore the office",start(){},stop(){},update(){}}];let t=e[0],n=!1;function s(c){const l=e.find(u=>u.id===c)||e[0];n&&l!==t&&(t.stop(),n=!1),t=l;try{localStorage.setItem(yd,l.id)}catch{}}function r(){n||(n=!0,t.start())}function o(){n&&(t.stop(),n=!1)}function a(c){e.push(c);let l=null;try{l=localStorage.getItem(yd)}catch{}(l===c.id||c.id===i)&&(t=c)}return{register:a,choose:s,play:r,quit:o,update:(c,l)=>{n&&t.update(c,l)},get current(){return t},get running(){return n},get list(){return e.filter(c=>c.id!=="free")}}}function ib({root:i,active:e,foot:t=()=>""}){let n=[],s=0,r=0;const o=x=>typeof x=="function"?x():x,a=()=>n[n.length-1],c=x=>typeof x=="function"?x():x;function l(){var p;const x=a();if(i.innerHTML="",!x)return;const m=(v,y)=>{const _=document.createElement("div");return _.className=v,_.innerHTML=y,i.appendChild(_),_};m("mi-title",x.title||""),x.extra&&i.appendChild(x.extra),x.items.forEach((v,y)=>{const _=m("mi"+(y===s?" sel":""),c(v.label));_.addEventListener("mouseenter",()=>{s!==y&&(s=y,l())}),_.addEventListener("click",A=>{A.stopPropagation(),s=y,u()})}),m("mi-hint",((p=x.items[s])==null?void 0:p.hint)||""),m("mi-foot",t()||""),m("mi-keys","&uarr; &darr; select &nbsp;&middot;&nbsp; Enter confirm &nbsp;&middot;&nbsp; Esc back")}function u(){var m;const x=(m=a())==null?void 0:m.items[s];x&&x.action()}function h(x){n=[o(x)],s=0,r=performance.now(),l()}function f(x){n.push(o(x)),s=0,l()}function d(){const x=a();n.length>1?(n.pop(),s=0,l()):x&&x.back&&x.back()}const g=l;return addEventListener("keydown",x=>{if(!e()||!a()||/^(INPUT|TEXTAREA|SELECT)$/.test(x.target.tagName))return;const m=a().items.length;if(x.code==="ArrowDown"||x.code==="KeyS")s=(s+1)%m,l(),x.preventDefault();else if(x.code==="ArrowUp"||x.code==="KeyW")s=(s-1+m)%m,l(),x.preventDefault();else if(x.code==="Enter"||x.code==="NumpadEnter"||x.code==="Space")x.preventDefault(),u();else if(x.code==="Escape"){if(performance.now()-r<200)return;d()}}),{open:h,push:f,back:d,refresh:g,get depth(){return n.length}}}const Md="pixbit-hunt-best",sb=2.5,rb=[{name:"Keycard",kind:"card",locker:!0},{name:"Golden mug",kind:"mug",spots:[[-1.6,1.15,12.5],[-1.2,1.15,17]]},{name:"Stapler",kind:"stapler",spots:[[7.5,1.1,4.4],[8.3,1.1,3.6]]},{name:"Game controller",kind:"pad",spots:[[4.6,.9,24.3],[5.4,1.1,26.4]]},{name:"Sticky note",kind:"note",spots:[[4.5,1.25,12],[2.2,1.25,13.6]]},{name:"Trophy star",kind:"star",spots:[[9.85,1.5,6.1],[9.4,1.3,7.2]]},{name:"Marker pen",kind:"pen",spots:[[2,1.1,20.4],[1.4,1.1,21.6]]},{name:"Plant badge",kind:"badge",spots:[[1.2,1.2,7],[2.4,1.2,4.2]]}],ob=new zt({color:"#ffcf3a",emissive:"#c88a00",emissiveIntensity:.9,roughness:.35,metalness:.6}),bd=new Es({map:null,color:"#ffe27a",transparent:!0,opacity:.55,depthWrite:!1,blending:Sl});function ab(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Cn(i)}function cb(i){const e=new st,t=(n,s=0,r=0,o=0)=>{const a=new Ee(n,ob);return a.position.set(s,r,o),e.add(a),a};switch(i){case"card":t(new un(.085,.054,.004));break;case"mug":t(new Jn(.04,.035,.09,16)),t(new Yr(.028,.008,8,14),.05,0,0);break;case"stapler":t(new un(.15,.03,.04)),t(new un(.12,.02,.035),-.01,.02,0);break;case"pad":t(new un(.13,.035,.07)),t(new Xt(.03,10,8),-.05,-.01,.04),t(new Xt(.03,10,8),.05,-.01,.04);break;case"note":t(new un(.1,.1,.004));break;case"star":{const n=new Xo;for(let s=0;s<10;s++){const r=s%2?.025:.06,o=Math.PI/5*s+Math.PI/2;s?n.lineTo(Math.cos(o)*r,Math.sin(o)*r):n.moveTo(Math.cos(o)*r,Math.sin(o)*r)}n.closePath(),t(new ic(n,{depth:.015,bevelEnabled:!1}));break}case"pen":{const n=t(new Jn(.01,.01,.14,10));n.rotation.z=Math.PI/2;break}default:t(new Jn(.045,.045,.01,20)).rotation.x=Math.PI/2}return e}function lb({scene:i,camera:e,player:t}){const n=new st;n.visible=!1,i.add(n),bd.map=ab();const s=ja.find(b=>b.center.y>.9&&b.center.y<1.4)||ja[0];let r=[],o=!1,a=0,c=0,l=!1,u=!1,h=null;try{h=parseFloat(localStorage.getItem(Md))||null}catch{}const f=document.createElement("div");Object.assign(f.style,{position:"fixed",top:"14px",right:"14px",zIndex:"5",color:"#fff",font:"600 14px system-ui, sans-serif",background:"rgba(0,0,0,.5)",borderLeft:"4px solid #ecc828",borderRadius:"6px",padding:"8px 12px",display:"none",pointerEvents:"none",minWidth:"170px"}),document.body.appendChild(f);const d=document.createElement("div");Object.assign(d.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:"8",color:"#fff",textAlign:"center",font:"600 15px system-ui, sans-serif",background:"rgba(20,20,20,.92)",border:"1px solid #ecc828",borderRadius:"14px",padding:"24px 32px",display:"none"}),document.body.appendChild(d);let g="",x=0;const m=b=>`${Math.floor(b/60)}:${String(Math.floor(b%60)).padStart(2,"0")}`;function p(){const b=r.filter(M=>!M.got);f.innerHTML=`<div style="color:#ecc828;letter-spacing:.5px">SCAVENGER HUNT</div>
      <div>Found ${a} / ${r.length} &nbsp;·&nbsp; ${m(c)}</div>
      ${h?`<div style="font-weight:400;color:#bbb">Best ${m(h)}</div>`:""}
      <div style="font-weight:400;color:#ddd;margin-top:4px">${g||(b.length?"H = hint":"")}</div>`}function v(b){if(b.locker){const D=s.closed;return new I(s.center.x-.12*Math.cos(D),s.center.y-.04,s.center.z+.12*Math.sin(D))}const M=b.spots[Math.floor(Math.random()*b.spots.length)];return new I(M[0],M[1],M[2])}function y(){n.clear(),r=rb.map(b=>{const M=cb(b.kind),D=v(b);if(M.position.copy(D),b.locker)M.scale.setScalar(.9);else{const G=new Ks(bd);G.scale.setScalar(.5),M.add(G)}return n.add(M),{...b,mesh:M,base:D,got:!1,zone:th(D.x,D.z)}}),a=0,c=0,u=!1,l=!0,g="",d.style.display="none",p()}const _=new I,A=new I;function E(){e.getWorldDirection(A);let b=null,M=.93;for(const D of r){if(D.got||D.locker&&Math.abs(s.leaf.rotation.y-s.closed)<.5||(_.copy(D.mesh.position).sub(e.position),_.length()>sb))continue;const V=_.normalize().dot(A);V>M&&(M=V,b=D)}return b}function R(b){b.got=!0,a++,n.remove(b.mesh),g=`Got the ${b.name.toLowerCase()}!`,x=2.5,a===r.length?P():p()}function P(){l=!1,u=!0;const b=!h||c<h;if(b){h=c;try{localStorage.setItem(Md,String(c))}catch{}}p(),d.innerHTML=`<div style="font-size:24px;color:#ecc828;margin-bottom:6px">All 8 found!</div>
      <div>Time ${m(c)}${b?" &nbsp;🏆 new best":` &nbsp;·&nbsp; best ${m(h)}`}</div>
      <div style="font-weight:400;color:#bbb;margin-top:10px">Press Enter to play again, or Esc to change the game mode</div>`,d.style.display="block"}return addEventListener("keydown",b=>{if(!(!o||t.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(b.target.tagName)))if(b.code==="KeyF"){const M=E();M&&R(M)}else if(b.code==="KeyH"&&l){const M=r.find(D=>!D.got);M&&(g=`Hint: ${M.name} – ${M.locker?"inside a locker in the ":"in the "}${M.zone}`,x=6,p())}else b.code==="Enter"&&u&&y()}),{id:"hunt",name:"Scavenger Hunt",desc:"Find 8 hidden gold items. F to collect, H for a hint. One is in a locker.",start(){o=!0,n.visible=!0,f.style.display="block",y()},stop(){o=!1,l=!1,n.visible=!1,f.style.display="none",d.style.display="none"},update(b,M){if(!o)return;const D=performance.now()/1e3;for(const G of r)G.got||G.locker||(G.mesh.rotation.y=D*1.6,G.mesh.position.y=G.base.y+Math.sin(D*2+G.base.x)*.03);l&&M&&(c+=b,x>0&&(x-=b)<=0&&(g=""),p())},prompt(){if(!o||!l)return"";const b=E();return b?`F collect ${b.name.toLowerCase()}`:""}}}const $p={apiKey:"AIzaSyD_KZcTz53Bfh12ZB7Gwed8f1WCKrsGIX4",authDomain:"office-world-60ed1.firebaseapp.com",databaseURL:"https://office-world-60ed1-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"office-world-60ed1",storageBucket:"office-world-60ed1.firebasestorage.app",messagingSenderId:"607388062460",appId:"1:607388062460:web:4b68c0880c4d8822607d79"},ub="office",hb=()=>!$p.apiKey.startsWith("PASTE"),xl="https://www.gstatic.com/firebasejs/11.0.2/",fb=[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]}],db=15,_l=["#e8505b","#f9a73e","#ecc828","#4fbf6f","#2fa4d9","#7b68ee","#e26fc4","#3fc1b0"],wd="pixbit-online-name",Sd="pixbit-online-color",Ed="pixbit-online-mic",Td=1.65,pb=`
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
  .ow-edit { flex: 1; display: flex; align-items: center; gap: 10px; padding: 8px 12px; border-radius: 10px; cursor: pointer; text-align: left;
    background: rgba(30,30,34,.6); border: 1.5px solid rgba(255,255,255,.25); color: #fff; font: 700 14px system-ui, sans-serif; }
  .ow-gear.on { border-color: #ecc828; }
  .ow-edit:hover { border-color: #ecc828; }
  .ow-edit .ow-who { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .ow-edit .go { color: #ecc828; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
  body.char-open #zone, body.char-open #crosshair { display: none; }
  #ow-char { position: fixed; z-index: 12; right: 4vw; top: 50%; transform: translateY(-50%); width: 310px; box-sizing: border-box; padding: 22px; display: none;
    flex-direction: column; gap: 10px; border-radius: 18px; color: #fff; background: rgba(20,20,24,.72); border: 1px solid rgba(255,255,255,.14);
    box-shadow: -4px -4px 0 -1px #ecc828, 0 20px 50px rgba(0,0,0,.5); -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); font-family: system-ui, sans-serif; }
  #ow-char.show { display: flex; }
  #ow-char h3 { margin: 0; font-size: 20px; color: #ecc828; }
  #ow-char p { margin: 0 0 4px; font-size: 13px; color: rgba(255,255,255,.65); }
  #ow-char label { font: 700 12px system-ui, sans-serif; text-transform: uppercase; letter-spacing: 1px; color: #ecc828; margin-top: 4px; }
  #ow-char input[type=text] { padding: 10px 12px; border-radius: 10px; border: 1.5px solid rgba(255,255,255,.25); background: rgba(10,10,14,.7);
    color: #fff; font: 600 16px system-ui, sans-serif; outline: none; }
  #ow-char input[type=text]:focus { border-color: #ecc828; }
  #ow-char input.need { border-color: #ff6b6b; box-shadow: 0 0 0 3px rgba(255,107,107,.25); animation: ow-shake .35s; }
  #ow-char .sw { display: flex; flex-wrap: wrap; gap: 8px; align-items: center; }
  #ow-char .sw button { width: 30px; height: 30px; border-radius: 50%; padding: 0; cursor: pointer; border: 2px solid rgba(255,255,255,.35); }
  #ow-char .sw button.on { border-color: #fff; box-shadow: 0 0 0 2px #ecc828; }
  #ow-char .sw input[type=color] { width: 34px; height: 34px; padding: 0; border: 0; background: none; cursor: pointer; }
  #ow-char .acts { display: flex; gap: 8px; margin-top: 10px; }
  #ow-char .acts button { flex: 1; padding: 11px; border-radius: 12px; cursor: pointer; font: 800 15px system-ui, sans-serif; color: #fff;
    background: rgba(40,40,46,.8); border: 1.5px solid rgba(255,255,255,.25); }
  #ow-char .acts .done { flex: 2; background: linear-gradient(180deg, #ffd52e, #e9b800); border-color: #ffe36b; color: #111; }
  @media (max-width: 700px) { #ow-char { right: 50%; transform: translateX(50%); top: auto; bottom: 12px; width: min(340px, 94vw); padding: 14px; } }
  .ow-status { font: 500 13px system-ui, sans-serif; color: rgba(255,255,255,.75); }
  .ow-status b { color: #7ee08f; }
  .ow-status.err b { color: #ff8a80; }
  #ow-online { position: fixed; left: 14px; top: 14px; z-index: 8; display: none; pointer-events: none; }
  #ow-online.show { display: flex; }
  #ow-online svg { width: 16px; height: 16px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; opacity: .85; }
  #ow-online .dot { width: 8px; height: 8px; border-radius: 50%; background: #7ee08f; box-shadow: 0 0 8px #7ee08f; }
  #ow-online.warn .dot { background: #ffb84d; box-shadow: 0 0 8px #ffb84d; }
  #ow-online.bad .dot { background: #ff5c5c; box-shadow: 0 0 8px #ff5c5c; }
  #ow-hud { position: fixed; right: 14px; bottom: 46px; z-index: 8; display: none; align-items: center; gap: 8px; }
  #ow-hud.show { display: flex; }
  #ow-mic { --lvl: 0; cursor: pointer; pointer-events: auto; padding: 7px; border-radius: 50%; user-select: none; -webkit-user-select: none; font-weight: 800; letter-spacing: 1.5px; }
  #ow-mic .lbl { display: none; }
  #ow-mic .ico { width: 34px; height: 34px; border-radius: 50%; flex: none; display: flex; align-items: center; justify-content: center; position: relative;
    background: rgba(255,255,255,.1); color: #cfcfd4; transition: background .15s, color .15s;
    box-shadow: 0 0 0 calc(var(--lvl) * 7px) rgba(126,224,143,.28); }
  #ow-mic .ico svg { width: 17px; height: 17px; fill: none; stroke: currentColor; stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; }
  #ow-mic .ico .slash { display: none; position: absolute; width: 22px; height: 2.5px; background: currentColor; border-radius: 2px; transform: rotate(-45deg); }
  #ow-mic.live .ico { background: rgba(126,224,143,.2); color: #7ee08f; }
  #ow-mic.live { color: #b8f0c2; }
  #ow-mic.talk .ico { background: rgba(126,224,143,.35); color: #7ee08f; animation: ow-pulse 1s ease-in-out infinite; }
  #ow-mic.talk { color: #b8f0c2; }
  #ow-mic.muted .ico, #ow-mic.bad .ico { background: rgba(255,77,77,.2); color: #ff6b6b; }
  #ow-mic.muted, #ow-mic.bad { color: #ff9a9a; border-color: rgba(255,92,92,.45); }
  #ow-mic.muted .slash, #ow-mic.bad .slash { display: block; }
  #ow-mic.ptt-on .ico { background: #ecc828; color: #111; }
  #ow-mic.ptt-on { color: #ecc828; border-color: rgba(236,200,40,.6); }
  #ow-mic kbd { display: none; font-weight: 700; letter-spacing: 0; padding: 0 6px; font-size: 10px; line-height: 15px; transition: transform .08s, background .08s; }
  #ow-mic.ptt-on kbd { transform: translateY(2px); border-bottom-width: 1px; background: #ecc828; color: #111; }
  @media (hover: none) and (pointer: coarse) { #ow-mic { display: none; } }
  @keyframes ow-pulse { 50% { transform: scale(1.1); } }
  #ow-hud .ow-mode { display: none; pointer-events: auto; cursor: pointer; padding: 6px 11px; border-radius: 12px; border: 1px solid rgba(255,255,255,.14);
    background: rgba(14,14,18,.62); color: rgba(255,255,255,.75); font: 700 12px system-ui, sans-serif; white-space: nowrap; -webkit-backdrop-filter: blur(6px); backdrop-filter: blur(6px); }
  #ow-hud .ow-mode:hover { border-color: #ecc828; color: #ecc828; }
  #ow-hud .ow-mode kbd { margin-left: 4px; }
  #ow-ptt { position: fixed; z-index: 7; right: max(84px, calc(env(safe-area-inset-right) + 66px)); bottom: max(26px, env(safe-area-inset-bottom));
    width: 54px; height: 54px; border-radius: 50%; border: 2px solid rgba(255,255,255,.55); background: rgba(20,20,20,.5); color: #fff;
    display: none; align-items: center; justify-content: center; touch-action: none; user-select: none; -webkit-user-select: none; }
  #ow-ptt.show { display: flex; }
  #ow-ptt.on { background: rgba(255,77,77,.8); }
  #ow-ptt.muted::after { content: ''; position: absolute; width: 34px; height: 2.5px; background: #fff; transform: rotate(-45deg); border-radius: 2px; }
  #ow-ptt svg { width: 26px; height: 26px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; pointer-events: none; }
`;function mb({scene:i,camera:e,player:t,panel:n,touch:s=!1,start:r=()=>{}}){const o=document.createElement("style");o.textContent=pb,document.head.appendChild(o);let a="",c="";try{a=localStorage.getItem(wd)||"",c=localStorage.getItem(Sd)||""}catch{}/^#[0-9a-f]{6}$/i.test(c)||(c=_l[Math.floor(Math.random()*_l.length)]);const l=document.createElement("div");l.className="ow",l.innerHTML=`
    <div class="ow-row"><label>Menu</label><button type="button" class="ow-edit"><span class="ow-dot"></span><span class="ow-who"></span><span class="go">Character</span></button>
      <button type="button" class="ow-edit ow-gear" style="flex:none"><span class="go">Settings</span></button></div>
    <div class="ow-set" style="display:none"><div class="ow-row"><label>Mic</label><div class="ow-seg"><button type="button" data-m="ptt">Push to talk</button><button type="button" data-m="open">Always on</button></div></div></div>
    <div class="ow-row"><label>Online</label><span class="ow-status"></span></div>`;const u=l.querySelector(".ow-status"),h=l.querySelector(".ow-edit"),f=l.querySelector(".ow-dot"),d=l.querySelector(".ow-who"),g=l.querySelector(".ow-set"),x=l.querySelector(".ow-gear");x.addEventListener("click",()=>{const O=g.style.display==="none";g.style.display=O?"block":"none",x.classList.toggle("on",O)}),l.addEventListener("click",O=>O.stopPropagation());const m=()=>n.closest("#overlay");function p(){f.style.background=c,d.textContent=a||"New"}p(),h.addEventListener("click",()=>ue());const v=document.createElement("div");v.id="ow-char",v.innerHTML=`
    <h3>Your character</h3><p>Pick a name and a dress colour</p>
    <label for="ow-name">Name</label><input type="text" id="ow-name" maxlength="18" autocomplete="off" spellcheck="false" placeholder="Type your name">
    <label>Dress colour</label><div class="sw"></div>
    <div class="acts"><button type="button" class="back">Back</button><button type="button" class="done">Done</button></div>`,document.body.appendChild(v);const y=v.querySelector("input[type=text]"),_=v.querySelector(".sw");let A=c;const E=_l.map(O=>{const re=document.createElement("button");return re.type="button",re.style.background=O,re.dataset.c=O,re.title=O,_.appendChild(re),re.addEventListener("click",()=>P(O)),re}),R=document.createElement("input");R.type="color",R.title="Custom colour",_.appendChild(R),R.addEventListener("input",()=>P(R.value));function P(O){A=O,R.value=O;for(const re of E)re.classList.toggle("on",re.dataset.c===O);M&&M.setLook(null,O)}v.addEventListener("click",O=>O.stopPropagation()),y.addEventListener("keydown",O=>{O.code!=="Escape"&&O.stopPropagation(),(O.code==="Enter"||O.code==="NumpadEnter")&&(O.preventDefault(),Ge())}),y.addEventListener("keyup",O=>O.stopPropagation()),y.addEventListener("input",()=>{y.classList.remove("need"),M&&M.setLook(y.value.trim()||"Your name",null)}),v.querySelector(".done").addEventListener("click",Ge),v.querySelector(".back").addEventListener("click",()=>Te(!0)),addEventListener("keydown",O=>{O.code==="Escape"&&b&&(O.stopImmediatePropagation(),Te(!0))});let b=!1,M=null,D=0,G=3.4,V=0;const q=new I,ee=new Wn;let $=78,le=0;const z=40;let de=!1;function ue(O=!1){if(b)return;b=!0,de=O,e.getWorldDirection(Y),D=Math.atan2(-Y.x,-Y.z);let re=-1;for(let Ne=0;Ne<16;Ne++){const dt=D+(Ne%2?-1:1)*Math.ceil(Ne/2)*(Math.PI/8),pt=-Math.sin(dt),je=-Math.cos(dt);let nn=0;for(;nn<3.4&&!B2(t.pos.x+pt*(nn+.2),t.pos.z+je*(nn+.2),.3);)nn+=.2;nn-Ne*.02>re&&(re=nn-Ne*.02,G=Math.max(1.6,nn),V=Math.atan2(-pt,-je),le=dt)}q.copy(e.position),ee.copy(e.quaternion),$=e.fov,e.fov=Math.min(70,Math.max(z,2*Math.atan(1.45/G)*180/Math.PI)),e.updateProjectionMatrix(),y.value=a,y.classList.remove("need"),M=vl(a||"Your name",c),i.add(M.group),F.group.visible=!1,P(c);const Me=m();Me&&Me.classList.add("hidden"),v.classList.add("show"),document.body.classList.add("char-open"),setTimeout(()=>y.focus(),0)}function Te(O){if(!b)return;b=!1,v.classList.remove("show"),document.body.classList.remove("char-open"),y.blur(),i.remove(M.group),M.dispose(),M=null,e.position.copy(q),e.quaternion.copy(ee),e.fov=$,e.updateProjectionMatrix(),F.group.visible=!0;const re=m();O&&re&&re.classList.remove("hidden")}function Ge(){if(!y.value.trim()){te();return}c=A;try{localStorage.setItem(Sd,c)}catch{}if(F.setLook(null,c),qe(),p(),!de){Te(!0);return}Te(!1),r()}function qe(){const O=y.value.trim().replace(/\s+/g," ").slice(0,18);if(y.value=O,!O)return!1;const re=!a||!B;a=O;try{localStorage.setItem(wd,a)}catch{}return me&&re&&!B&&!ge?Qe():U(),!0}function te(){if(!b){ue();return}y.classList.remove("need"),y.offsetWidth,y.classList.add("need"),setTimeout(()=>y.focus(),0)}function ne(O,re=!1){u.innerHTML=O,u.classList.toggle("err",re),N=re,typeof lt=="function"&&typeof ze<"u"&&lt()}const ve='<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',pe=document.createElement("div");pe.id="ow-online",pe.className="chip",pe.innerHTML='<span class="dot"></span><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.6 0 4.4 1.8 4.4 4.4"/></svg><span class="txt"></span>';const ke=pe.querySelector(".txt");document.body.appendChild(pe);const ze=document.createElement("div");ze.id="ow-hud",ze.innerHTML=`<div id="ow-mic" class="chip" role="button"><span class="ico">${ve}<i class="slash"></i></span><span class="lbl"></span><kbd>V</kbd></div><button type="button" class="ow-mode"></button>`;const Oe=ze.querySelector(".ow-mode"),Ve=ze.querySelector("#ow-mic"),fe=Ve.querySelector(".lbl"),xe=Ve.querySelector("kbd");document.body.appendChild(ze);let N=!1;const he=O=>{ze.classList.toggle("show",O),pe.classList.toggle("show",O)},j=document.createElement("button");j.id="ow-ptt",j.type="button",j.setAttribute("aria-label","Hold to talk"),j.innerHTML=ve,document.body.appendChild(j),j.addEventListener("pointerdown",O=>{O.preventDefault(),gt==="ptt"?Bi(!0):eo(!zn)});for(const O of["pointerup","pointercancel","pointerleave"])j.addEventListener(O,()=>Bi(!1));Ve.addEventListener("pointerdown",O=>{O.preventDefault(),O.stopPropagation(),gt==="ptt"?Bi(!0):eo(!zn)});for(const O of["pointerup","pointercancel","pointerleave"])Ve.addEventListener(O,()=>Bi(!1));const F=vl("",c,{self:!0});i.add(F.group);const Y=new I;function _e(O,re=null){if(b){const Me=-Math.sin(le),Ne=-Math.cos(le);M.target(t.pos.x,0,t.pos.z,V,!1),M.update(O),e.position.set(t.pos.x+Me*G,1.25,t.pos.z+Ne*G),e.lookAt(t.pos.x,1,t.pos.z);return}e.getWorldDirection(Y),F.target(t.pos.x,Math.max(0,e.position.y-Td),t.pos.z,Math.atan2(-Y.x,-Y.z),!1),F.setReach(re==null?void 0:re.aim,(re==null?void 0:re.k)||0),F.update(O)}let me=!1,C=null,T=null,B=null,ae=[],ge=!1;const se=new Map;let Le=null,be=null,Ie=!1,ot=!1,H=!1;async function Ce(){if(C)return C;if(window.__owFake)return C=window.__owFake;const[O,re,Me]=await Promise.all([import(xl+"firebase-app.js"),import(xl+"firebase-auth.js"),import(xl+"firebase-database.js")]),Ne=O.initializeApp($p,"pixbit-online");return C={auth:re.initializeAuth(Ne,{persistence:re.inMemoryPersistence}),signIn:re.signInAnonymously,...Me},C}const De=O=>C.ref(T,`rooms/${ub}/${O}`);async function Qe(){if(a){ge=!0;try{await Ue()}finally{ge=!1}}}async function Ue(){if(!hb()&&!window.__owFake){ne("<b>Not set up yet</b> · add your Firebase config (see MULTIPLAYER.md)",!0);return}ne("Connecting…");try{await Ce(),T=C.getDatabase(C.auth.app);const O=await C.signIn(C.auth);if(!me)return;B=O.user.uid,gt==="open"&&Mt().then(()=>si()),await C.remove(De(`signal/${B}`)),C.onDisconnect(De(`players/${B}`)).remove(),C.onDisconnect(De(`signal/${B}`)).remove(),await U();const re=De("players");ae.push(C.onChildAdded(re,Me=>{Me.key!==B&&k(Me.key,Me.val()),at()})),ae.push(C.onChildChanged(re,Me=>{const Ne=se.get(Me.key);Ne&&(Ne.name=Me.val().name,Ne.color=Me.val().color,Ne.avatar.setLook(Ne.name,Ne.color))})),ae.push(C.onChildRemoved(re,Me=>{Je(Me.key),at()})),ae.push(C.onChildAdded(De(`signal/${B}`),Me=>{const Ne=Me.val();C.remove(Me.ref),ce(Ne).catch(dt=>console.warn("[online] signal",dt))})),at()}catch(O){console.warn("[online]",O),ne(`<b>Couldn't connect</b> · ${String(O.code||O.message||O).replace(/</g,"&lt;")}`,!0)}}function U(){return!me||!B?Promise.resolve():C.set(De(`players/${B}`),{name:a,color:c,t:C.serverTimestamp()})}function J(O,re){B&&C.push(De(`signal/${O}`),{...re,from:B})}function Re(){for(const O of ae)O();ae=[];for(const O of[...se.keys()])Je(O);C&&B&&(C.remove(De(`players/${B}`)),C.remove(De(`signal/${B}`))),B=null}function k(O,re){if(se.has(O))return se.get(O);const Me=ye(O,re||{});return Me.initiator&&K(Me),Me}function ye(O,re){const Me=new RTCPeerConnection({iceServers:fb}),Ne={id:O,pc:Me,dc:null,name:re.name||"Guest",color:re.color||"#999",initiator:B<O,pendingIce:[],audioEl:null,last:null};return Ne.avatar=vl(Ne.name,Ne.color),Ne.avatar.group.visible=!1,i.add(Ne.avatar.group),se.set(O,Ne),Me.onicecandidate=dt=>{dt.candidate&&J(O,{type:"ice",c:JSON.stringify(dt.candidate.toJSON())})},Me.ontrack=dt=>Zt(Ne,dt.streams[0]||new MediaStream([dt.track])),Me.onconnectionstatechange=()=>{at(),Me.connectionState==="failed"&&me&&se.get(O)===Ne&&(Je(O),setTimeout(()=>{me&&B&&C.get(De(`players/${O}`)).then(dt=>{dt.exists()&&k(O,dt.val())})},3e3))},Ne.initiator?(Me.addTransceiver("audio",{direction:"sendrecv"}),Se(Ne,Me.createDataChannel("pos",{ordered:!1,maxRetransmits:0}))):Me.ondatachannel=dt=>Se(Ne,dt.channel),Ne}async function K(O){const re=await O.pc.createOffer();await O.pc.setLocalDescription(re),J(O.id,{type:"offer",sdp:re.sdp})}async function ce(O){if(!O||!O.from)return;let re=se.get(O.from);if(O.type==="offer"){(!re||re.initiator)&&(re&&Je(O.from),re=ye(O.from,{}),re.initiator=!1);const Me=await C.get(De(`players/${O.from}`));Me.exists()&&(re.name=Me.val().name,re.color=Me.val().color,re.avatar.setLook(re.name,re.color)),await re.pc.setRemoteDescription({type:"offer",sdp:O.sdp});for(const dt of re.pc.getTransceivers())dt.receiver.track.kind==="audio"&&(dt.direction="sendrecv",be&&dt.sender.replaceTrack(be));await Ae(re);const Ne=await re.pc.createAnswer();await re.pc.setLocalDescription(Ne),J(O.from,{type:"answer",sdp:Ne.sdp})}else if(O.type==="answer"&&re){if(await re.pc.setRemoteDescription({type:"answer",sdp:O.sdp}),be)for(const Me of re.pc.getSenders())Me.track||Me.replaceTrack(be);await Ae(re)}else if(O.type==="ice"&&re){const Me=JSON.parse(O.c);re.pc.remoteDescription?await re.pc.addIceCandidate(Me).catch(()=>{}):re.pendingIce.push(Me)}}async function Ae(O){for(const re of O.pendingIce.splice(0))await O.pc.addIceCandidate(re).catch(()=>{})}function Se(O,re){O.dc=re,re.onopen=()=>{at(),Ye(!0)},re.onclose=()=>at(),re.onmessage=Me=>{try{const[Ne,dt,pt,je,nn,St]=JSON.parse(Me.data);O.avatar.target(Ne,dt,pt,je,!!nn,!!St)}catch{}}}function Je(O){var Me;const re=se.get(O);if(re){se.delete(O);try{(Me=re.dc)==null||Me.close()}catch{}try{re.pc.close()}catch{}re.audioEl&&(re.audioEl.srcObject=null,re.audioEl.remove()),re.avatar.dispose()}}function Ct(){return Le||(Le=new wy,e.add(Le)),Le.context.state==="suspended"&&Le.context.resume(),Le}function Zt(O,re){O.audioEl||(O.audioEl=document.createElement("audio"),O.audioEl.muted=!0,O.audioEl.autoplay=!0,document.body.appendChild(O.audioEl)),O.audioEl.srcObject=re;const Me=new Ty(Ct());Me.setMediaStreamSource(re),Me.setRefDistance(2.5),Me.setRolloffFactor(1.4),Me.setDistanceModel("inverse"),Me.setMaxDistance(40),O.avatar.setVoice(Me)}async function Mt(){if(be||Ie)return be;Ie=!0;try{be=(await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})).getAudioTracks()[0],be.enabled=!1;for(const Me of se.values())for(const Ne of Me.pc.getTransceivers())Ne.receiver.track.kind==="audio"&&Ne.currentDirection!=="stopped"&&Ne.sender.replaceTrack(be);const re=Ct().context;Jr=re.createMediaStreamSource(new MediaStream([be])),Ei=re.createAnalyser(),Ei.fftSize=512,Jr.connect(Ei)}catch(O){console.warn("[online] mic",O),Pn="Microphone blocked: allow it in the browser to talk"}return be}let Pn="",gt="open",ni=!1,zn=!1,ii=!1,Fi=!1,er=0,Jr=null,Ei=null;try{localStorage.getItem(Ed)==="ptt"&&(gt="ptt")}catch{}const Qr=l.querySelectorAll(".ow-seg button");function Ts(){for(const O of Qr)O.classList.toggle("on",O.dataset.m===gt)}function As(O){if(O!==gt){gt=O,zn=!1,ni=!1;try{localStorage.setItem(Ed,gt)}catch{}gt==="open"&&me&&Mt().then(si),Ts(),si(),at()}}for(const O of Qr)O.addEventListener("click",()=>As(O.dataset.m));Ts(),Oe.addEventListener("pointerdown",O=>{O.preventDefault(),O.stopPropagation(),As(gt==="ptt"?"open":"ptt")}),addEventListener("keydown",O=>{O.code==="KeyT"&&!O.repeat&&me&&!L(O)&&As(gt==="ptt"?"open":"ptt")});const tr=()=>me&&(gt==="ptt"?ni:ii&&!zn);function si(){const O=tr();Ct(),O&&!be&&Mt().then(()=>{be&&si()}),be&&(be.enabled=O);const re=gt==="ptt"?O:O&&Fi;j.classList.toggle("on",gt==="ptt"?ni:O),j.classList.toggle("muted",gt==="open"&&zn),j.setAttribute("aria-label",gt==="ptt"?"Hold to talk":zn?"Unmute":"Mute");const Me=gt==="open"&&zn;(re!==ot||Me!==H)&&(ot=re,H=Me,Ye(!0)),lt()}function Bi(O){gt==="ptt"&&O!==ni&&(ni=O,si())}function eo(O){gt==="open"&&O!==zn&&(zn=O,si())}const L=O=>/^(INPUT|TEXTAREA|SELECT)$/.test(O.target.tagName)||t.state.paused;addEventListener("keydown",O=>{O.code!=="KeyV"||O.repeat||L(O)||!me||(gt==="ptt"?Bi(!0):eo(!zn))}),addEventListener("keyup",O=>{O.code==="KeyV"&&Bi(!1)}),addEventListener("blur",()=>Bi(!1));const W=new Float32Array(512);function ie(O){if(gt!=="open"||!Ei||!tr()){Ve.style.setProperty("--lvl","0"),Fi&&(Fi=!1,si());return}Ei.getFloatTimeDomainData(W);let re=0;for(let pt=0;pt<W.length;pt++)re+=W[pt]*W[pt];const Me=Math.sqrt(re/W.length),Ne=Me>.02;Ve.style.setProperty("--lvl",Math.min(1,Me*10).toFixed(2)),Ne?er=0:er+=O;const dt=Ne||er<.4;dt!==Fi&&(Fi=dt,si())}addEventListener("pointerdown",()=>{me&&Le&&Ct()});const Q=new I;let X=0,Pe="",Be=0;function Ye(O=!1){if(b)return;e.getWorldDirection(Q);const re=Math.atan2(-Q.x,-Q.z),Me=JSON.stringify([+t.pos.x.toFixed(2),+Math.max(0,e.position.y-Td).toFixed(2),+t.pos.z.toFixed(2),+re.toFixed(2),ot?1:0,H?1:0]);if(!(!O&&Me===Pe&&Be<1)){Pe=Me,Be=0;for(const Ne of se.values())if(Ne.dc&&Ne.dc.readyState==="open")try{Ne.dc.send(Me)}catch{}}}function Ke(){let O=0;for(const re of se.values())re.dc&&re.dc.readyState==="open"&&O++;return O}function at(){if(!me||!B)return;const O=Ke(),Me=se.size-O;ne(`<b>Connected</b> · ${O+1} in the world${Me?` · ${Me} joining…`:""} · ${gt==="ptt"?"hold <b>V</b> to talk":"mic on in game, <b>V</b> mutes"}`),lt()}function lt(){const O=Ke()+1,re=se.size-(O-1);pe.classList.toggle("warn",!!B&&re>0),pe.classList.toggle("bad",N),ke.textContent=B?`${O} online${re>0?` · ${re} joining…`:""}`:N?"Not connected":"Connecting…",Oe.innerHTML=`${gt==="ptt"?"Push to talk":"Always on"}${s?"":" <kbd>T</kbd>"}`,Oe.title="Switch between push to talk and always-on mic";const Me=Ie&&!be,Ne=gt==="open"&&zn;Ve.classList.toggle("bad",Me),Ve.classList.toggle("muted",!Me&&Ne),Ve.classList.toggle("talk",!Me&&ot),Ve.classList.toggle("live",!Me&&!ot&&!Ne&&gt==="open"&&tr()&&!!be),Ve.classList.toggle("ptt-on",!Me&&gt==="ptt"&&ni),fe.textContent=Me?"MIC BLOCKED":gt==="ptt"?ni?"TALKING":"PUSH TO TALK":Ne?"MUTED":ot?"TALKING":"MIC ON",xe.style.display=s?"none":"",Ve.title=Me?"Allow the microphone in your browser to talk":gt==="ptt"?"Hold V to talk":Ne?"Click or press V to unmute":"Click or press V to mute"}return{id:"online",name:"Open World",desc:"Explore with other people online and talk: push to talk or always-on mic.",start(){me=!0,l.classList.add("show"),he(!0),s&&j.classList.add("show"),lt(),a?Qe():ne("Click <b>Play</b> to create your character and join")},intro(){ue(!0)},stop(){me=!1,ni=!1,si(),l.classList.remove("show"),he(!1),j.classList.remove("show"),Te(!1),Re()},update(O,re){if(!me)return;const Me=!!re&&!b;Me!==ii&&(ii=Me,ii||(ni=!1),si()),ie(O);for(const Ne of se.values())Ne.avatar.update(O);X+=O,Be+=O,X>=1/db&&(X=0,Ye()),Pn&&(Ad+=O)>5&&(Pn="",Ad=0,lt())},prompt(){return""},updateSelf:_e,edit:()=>ue(!1),get micMode(){return gt},setMicMode:O=>As(O),statusHtml:()=>me&&u.innerHTML||"",get hasName(){return!!a}}}let Ad=0;const gb="#f1d3b8",xb="#2b3550",_b="#1c1c20";function vl(i,e,{self:t=!1}={}){const n=new st,s=(F,Y=.65,_e=0)=>new zt({color:F,roughness:Y,metalness:_e}),r=s(e,.6),o=s(gb,.7),a=s(xb,.8),c=s(_b,.5),l=(F,Y,_e,me,C,T)=>{const B=new Ee(Y,_e);return B.position.set(me,C,T),B.castShadow=!0,F.add(B),B},u=(F,Y)=>new Wu(F,Y,6,14),h=(F,Y)=>{const _e=new st;return _e.position.set(F,Y,0),n.add(_e),_e},f=.8,d=1.47,g=h(-.1,f),x=h(.1,f);for(const F of[g,x])l(F,u(.085,.6),a,0,-.385,0),l(F,new Xt(.1,16,10),c,0,-.77,-.04).scale.set(1,.55,1.45);const m=l(n,u(.22,.4),r,0,1.17,0),p=h(-.29,d),v=h(.29,d);for(const F of[p,v])l(F,u(.065,.48),r,0,-.27,0),l(F,new Xt(.07,16,12),o,0,-.6,0);const y=new st;if(y.position.y=1.62,n.add(y),l(y,new Xt(.17,24,16),o,0,.13,0),l(y,new un(.22,.07,.08),s("#15171c",.2,.4),0,.16,-.14),t){y.visible=!1,m.visible=!1,l(n,new Xt(.2,18,12),a,0,f+.02,0).scale.set(1.05,.55,.75);for(const F of n.children)F.position.z-=.08,F.position.y-=.08}const _=.6,A=document.createElement("canvas");A.width=512,A.height=128;const E=new Cn(A);E.colorSpace=Et;const R=new Ks(new Es({map:E,depthTest:!1,transparent:!0}));R.scale.set(1.1,.275,1),R.position.y=2.2,R.renderOrder=10,R.visible=!t,n.add(R);let P=i,b=e,M=!1,D=!1;const G=document.createElement("canvas");G.width=128,G.height=128;const V=new Cn(G);V.colorSpace=Et;const q=new Ks(new Es({map:V,depthTest:!1,transparent:!0}));q.scale.set(.34,.34,1),q.position.y=2.55,q.renderOrder=11,q.visible=!1,n.add(q);let ee=0,$=0;function le(){const F=G.getContext("2d");if(F.clearRect(0,0,128,128),q.visible=!t&&(M||D),!!q.visible){if(F.lineCap="round",F.lineJoin="round",M){F.fillStyle="rgba(0,0,0,.6)",F.beginPath(),F.arc(64,64,58,0,Math.PI*2),F.fill(),F.fillStyle="#fff",F.beginPath(),F.moveTo(26,52),F.lineTo(42,52),F.lineTo(62,36),F.lineTo(62,92),F.lineTo(42,76),F.lineTo(26,76),F.closePath(),F.fill();const Y=ee*3.2%4;F.lineWidth=7;for(let _e=0;_e<3;_e++){const me=_e<Y?1:.18,C=16+_e*13;F.strokeStyle=`rgba(126,224,143,${me})`,F.beginPath(),F.arc(62,64,C,-.75,.75),F.stroke()}}else F.fillStyle="rgba(0,0,0,.6)",F.beginPath(),F.arc(64,64,34,0,Math.PI*2),F.fill(),F.strokeStyle="#ff5c5c",F.lineWidth=6,F.beginPath(),F.roundRect(55,40,18,30,9),F.stroke(),F.beginPath(),F.moveTo(46,62),F.arc(64,62,18,Math.PI,0,!0),F.moveTo(64,82),F.lineTo(64,90),F.stroke(),F.lineWidth=7,F.beginPath(),F.moveTo(44,90),F.lineTo(84,38),F.stroke();V.needsUpdate=!0}}function z(){const F=A.getContext("2d");F.clearRect(0,0,512,128),F.font="700 54px system-ui, sans-serif";const Y=Math.min(500,F.measureText(P).width+60),_e=(512-Y)/2;F.fillStyle="rgba(0,0,0,.55)",F.beginPath(),F.roundRect(_e,20,Y,88,44),F.fill(),F.fillStyle=b,F.beginPath(),F.arc(_e+36,64,12,0,Math.PI*2),F.fill(),F.fillStyle="#fff",F.textBaseline="middle",F.textAlign="left",F.fillText(P,_e+58,66,Y-70),E.needsUpdate=!0}z();const de=new I,ue=new I,Te=new I;let Ge=0,qe=0,te=!1,ne=null,ve=0,pe=0,ke=0,ze=0,Oe=0;const Ve=new I,fe=new I,xe=new I,N=new I(0,-1,0),he=new Wn,j=new Wn;return{group:n,setLook(F,Y){P=F||P,b=Y||b,r.color.set(b),z()},setReach(F,Y){Oe=Y,F&&Ve.copy(F)},setVoice(F){var Y;ne&&((Y=ne.disconnect)==null||Y.call(ne),y.remove(ne)),ne=F,y.add(F)},target(F,Y,_e,me,C,T=!1){de.set(F,Y,_e),Ge=me,te||(ue.copy(de),Te.copy(de),qe=me,te=!0,n.visible=!0),(C!==M||T!==D)&&(M=C,D=T,le())},update(F){if(!te||F<=0)return;const Y=t?1:1-Math.exp(-12*F);Te.copy(ue),ue.lerp(de,Y);let _e=Ge-qe;_e=Math.atan2(Math.sin(_e),Math.cos(_e)),qe+=_e*Y;const me=Math.hypot(ue.x-Te.x,ue.z-Te.z)/F;pe+=(me-pe)*(1-Math.exp(-8*F));const C=ue.y>.05;ve+=F*(3+pe*2.2);const T=C?0:Math.min(1,pe/3)*.75;ke+=(Math.sin(ve)*T-ke)*(1-Math.exp(-14*F)),g.rotation.x=ke,x.rotation.x=-ke,p.rotation.x=-ke*.9,v.rotation.x=ke*.9;const B=C?-.5:0;if(p.rotation.z=C?-.35:0,v.rotation.z=C?.35:0,p.rotation.x+=B,v.rotation.x+=B,ze+=F,M&&!t&&(ee+=F,($+=F)>.08&&($=0,le())),y.rotation.z=M?Math.sin(ze*7)*.03:0,v.scale.y=1,Oe>0){n.position.set(ue.x,ue.y,ue.z),n.rotation.y=qe,n.updateMatrixWorld(!0),v.getWorldPosition(fe),xe.subVectors(Ve,fe);const ge=xe.length();xe.applyQuaternion(j.copy(n.quaternion).invert()).normalize(),he.setFromUnitVectors(N,xe),v.quaternion.slerp(he,Oe),v.scale.y=1+(Math.min(1.9,Math.max(1,ge/_))-1)*Oe}const ae=C?0:Math.abs(Math.sin(ve))*Math.min(1,pe/3)*.05;n.position.set(ue.x,ue.y+ae,ue.z),n.rotation.y=qe},dispose(){if(ne)try{ne.disconnect()}catch{}n.removeFromParent(),n.traverse(F=>{var Y,_e;(Y=F.geometry)==null||Y.dispose(),F.material&&((_e=F.material.map)==null||_e.dispose(),F.material.dispose())})}}}const xn=new x1({antialias:!0,powerPreference:"high-performance"});xn.setPixelRatio(Math.min(devicePixelRatio,2));xn.setSize(innerWidth,innerHeight);xn.outputColorSpace=Et;xn.toneMapping=Od;xn.toneMappingExposure=.9;xn.shadowMap.enabled=!0;xn.shadowMap.type=Ud;document.body.appendChild(xn.domElement);const _n=new dp,Kp=new ut("#a8aaa4");_n.background=Kp;_n.fog=new Ou(Kp,40,1100);const vb=new uu(xn);_n.environment=vb.fromScene(new Fy,.04).texture;_n.environmentIntensity=.45;const ti=new Nn(78,innerWidth/innerHeight,.05,1500);_n.add(new my("#f6f7ff","#7a7066",.8));const Ii=new Lp("#fff3e2",1.5);Ii.position.set(-22,20,4);Ii.target.position.set(5,0,10);Ii.castShadow=!0;Ii.shadow.mapSize.set(2048,2048);Object.assign(Ii.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:80});Ii.shadow.bias=-4e-4;Ii.shadow.normalBias=.03;_n.add(Ii,Ii.target);const jp=new ac("#ffe8c8",6,12,1.5);jp.position.set(8.7,2.6,7.8);_n.add(jp);const hc=new st;SM(hc);OM(hc);_n.add(hc);const tn=kM(ti,xn.domElement,{spawn:Ws,yaw:Ws.yaw}),Zr=document.getElementById("overlay"),Li=QM()?tb({player:tn,camera:ti}):null;Li&&Li.show(!1);let nh=!1;function Zp(){if(Li){Ga(),Li.show(!0);return}try{const i=tn.controls.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>Ga())}catch{Ga()}}function Ga(){tn.state.dragMode=!0,Zr.classList.add("hidden"),wu.dataset.mode="drag"}document.addEventListener("pointerlockerror",Ga);addEventListener("keydown",i=>{i.code==="Escape"&&tn.state.dragMode&&!Yo.isOpen()&&(tn.state.dragMode=!1,$o())});tn.controls.addEventListener("lock",()=>Zr.classList.add("hidden"));tn.controls.addEventListener("unlock",()=>{Yo.isOpen()||$o()});const Ja=WM({scene:_n,player:tn,camera:ti}),yl=YM({scene:_n,player:tn,camera:ti,doors:Ja}),Rd=jM({scene:_n,player:tn,doors:Ja}),Cd=JM({scene:_n,player:tn}),Yo=VM({scene:_n,camera:ti,player:tn,world:hc,zoneAt:th,renderer:xn});Yo.onResumeFailed(()=>$o());const Qn=nb({defaultId:"online"}),Pd=lb({scene:_n,camera:ti,player:tn}),Zs=mb({scene:_n,camera:ti,player:tn,panel:Zr,touch:!!Li,start:()=>Qp()});Qn.register(Zs);const yb=document.querySelector(".m-controls"),Pi=ib({root:document.getElementById("menu"),active:()=>!Zr.classList.contains("hidden"),foot:()=>Qn.running&&Qn.current.id==="online"?Zs.statusHtml():""});function Jp(i){i&&Qn.choose(i),Qn.current.intro?Qn.current.intro():Qp()}function Qp(){nh=!0,Qn.play(),Zp()}function Ld(){Zp()}function Mb(){Qn.quit(),nh=!1,tn.pos.set(Ws.x,0,Ws.z),ti.position.set(Ws.x,1.65,Ws.z),ti.rotation.set(0,Ws.yaw,0,"YXZ"),Li==null||Li.show(!1),$o()}const bb=()=>"Mic: "+(Zs.micMode==="ptt"?"Push to talk":"Always on"),e0=()=>({title:"Settings",items:[{label:bb,hint:"Push to talk (hold V) or always-on mic. Press T in game to switch.",action(){Zs.setMicMode(Zs.micMode==="ptt"?"open":"ptt"),Pi.refresh()}},{label:()=>"Dev mode: "+(Js?"On":"Off"),hint:"Suggestions tools (C / X / L). Press P in game to switch.",action(){ih(!Js),Pi.refresh()}},{label:"Controls",hint:"Keys and mouse",action:()=>Pi.push({title:"Controls",extra:yb,items:[{label:"Back",action:()=>Pi.back()}]})},{label:"Back",action:()=>Pi.back()}]}),wb=()=>({title:"Play",items:[...Qn.list.map(i=>({label:i.name,hint:i.desc,action:()=>Jp(i.id)})),{label:"Back",action:()=>Pi.back()}]}),Sb=()=>({title:"Pixbit Office",items:[{label:"Play",hint:"Pick your character, then walk the office with other people",action:()=>Qn.list.length===1?Jp(Qn.list[0].id):Pi.push(wb)},{label:"Settings",hint:"Mic, dev mode and controls",action:()=>Pi.push(e0)}]}),Eb=()=>({title:"Paused",back:Ld,items:[{label:"Resume",action:Ld},{label:"Character",hint:"Your name and dress colour",action:()=>Zs.edit()},{label:"Settings",hint:"Mic, dev mode and controls",action:()=>Pi.push(e0)},{label:"Quit",hint:"Back to the start screen",action:Mb}]});function $o(){Zr.classList.remove("hidden"),Pi.open(nh?Eb:Sb)}$o();let Js=!1;try{Js=localStorage.getItem("pixbit-devmode")==="1"}catch{}function ih(i){Js=i,document.body.classList.toggle("dev",i),Yo.setEnabled(i),qp(i);try{localStorage.setItem("pixbit-devmode",i?"1":"0")}catch{}}addEventListener("keydown",i=>{i.code==="KeyP"&&!/^(INPUT|TEXTAREA|SELECT)$/.test(i.target.tagName)&&!Yo.isOpen()&&ih(!Js)});ih(Js);let Ao=!0;addEventListener("keydown",i=>{i.code==="KeyQ"&&(Ao=!Ao,Ii.castShadow=Ao,xn.setPixelRatio(Ao?Math.min(devicePixelRatio,2):1),xn.setSize(innerWidth,innerHeight))});const Ml=document.getElementById("zone"),wu=document.getElementById("hud"),Id=document.getElementById("prompt");let Dd="",bl=0,Ua=0,wl=0;function Tb(i){const e=th(tn.pos.x,tn.pos.z);e!==Dd&&(Dd=e,Ml.textContent=e,Ml.classList.add("show"),bl=2.2),bl>0&&(bl-=i)<=0&&Ml.classList.remove("show")}addEventListener("resize",()=>{ti.aspect=innerWidth/innerHeight,ti.updateProjectionMatrix(),xn.setSize(innerWidth,innerHeight)});const Ab=new Ip;xn.setAnimationLoop(()=>{const i=Ab.getDelta();if(tn.update(i),Ja.update(i),yl.update(i),Rd.update(i),Cd.update(i),Qn.update(i,Zr.classList.contains("hidden")),Zs.updateSelf(i,yl.reach()),Tb(i),wl++,Ua+=i,Ua>.5){const e=Cd.prompt()||Qn.current===Pd&&Pd.prompt()||Ja.prompt()||yl.prompt()||Rd.prompt();Li?(Li.setAction(e),wu.textContent="",Id.textContent=""):(Id.textContent=e||"",wu.textContent=`${Math.round(wl/Ua)} fps · ${Ao?"high":"low"} (Q)${Js?" · DEV · C suggest · X area · L list":""}${tn.state.dragMode?" · drag to look":""}`),wl=0,Ua=0}xn.render(_n,ti)});Object.assign(window,{__office:{scene:_n,camera:ti,player:tn,renderer:xn}});
