(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eu="170",n0=0,oh=1,i0=2,Ud=1,kd=2,Xi=3,es=0,Rn=1,Bt=2,bs=0,Cr=1,El=2,ah=3,ch=4,s0=5,Gs=100,r0=101,o0=102,a0=103,c0=104,l0=200,u0=201,h0=202,f0=203,Tl=204,Al=205,d0=206,p0=207,m0=208,g0=209,x0=210,_0=211,v0=212,y0=213,M0=214,Rl=0,Cl=1,Pl=2,Nr=3,Ll=4,Il=5,Dl=6,Nl=7,Od=0,b0=1,w0=2,ws=0,S0=1,E0=2,T0=3,Fd=4,A0=5,R0=6,C0=7,lh="attached",P0="detached",Bd=300,Ur=301,kr=302,Ul=303,kl=304,ec=306,Si=1e3,ys=1001,qa=1002,Bn=1003,zd=1004,So=1005,ti=1006,Fa=1007,Ki=1008,ts=1009,Hd=1010,Vd=1011,Uo=1012,Tu=1013,$s=1014,Mi=1015,Wo=1016,Au=1017,Ru=1018,Or=1020,Gd=35902,Wd=1021,Xd=1022,fi=1023,qd=1024,Yd=1025,Pr=1026,Fr=1027,Cu=1028,Pu=1029,$d=1030,Lu=1031,Iu=1033,Ba=33776,za=33777,Ha=33778,Va=33779,Ol=35840,Fl=35841,Bl=35842,zl=35843,Hl=36196,Vl=37492,Gl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,$l=37812,jl=37813,Kl=37814,Zl=37815,Jl=37816,Ql=37817,eu=37818,tu=37819,nu=37820,iu=37821,Ga=36492,su=36494,ru=36495,jd=36283,ou=36284,au=36285,cu=36286,ko=2300,Oo=2301,dc=2302,uh=2400,hh=2401,fh=2402,L0=2500,I0=0,Kd=1,lu=2,D0=3200,N0=3201,Zd=0,U0=1,_s="",Et="srgb",zn="srgb-linear",tc="linear",It="srgb",nr=7680,dh=519,k0=512,O0=513,F0=514,Jd=515,B0=516,z0=517,H0=518,V0=519,uu=35044,ph="300 es",Zi=2e3,Ya=2001;class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mh=1234567;const Co=Math.PI/180,Br=180/Math.PI;function di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function on(i,e,t){return Math.max(e,Math.min(t,i))}function Du(i,e){return(i%e+e)%e}function G0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function W0(i,e,t){return i!==e?(t-i)/(e-i):0}function Po(i,e,t){return(1-t)*i+t*e}function X0(i,e,t,n){return Po(i,e,1-Math.exp(-t*n))}function q0(i,e=1){return e-Math.abs(Du(i,e*2)-e)}function Y0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function j0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function K0(i,e){return i+Math.random()*(e-i)}function Z0(i){return i*(.5-Math.random())}function J0(i){i!==void 0&&(mh=i);let e=mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Q0(i){return i*Co}function em(i){return i*Br}function tm(i){return(i&i-1)===0&&i!==0}function nm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function im(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function sm(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*f,a*l);break;case"YZY":i.set(c*f,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*f,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function yi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const rm={DEG2RAD:Co,RAD2DEG:Br,generateUUID:di,clamp:on,euclideanModulo:Du,mapLinear:G0,inverseLerp:W0,lerp:Po,damp:X0,pingpong:q0,smoothstep:Y0,smootherstep:$0,randInt:j0,randFloat:K0,randFloatSpread:Z0,seededRandom:J0,degToRad:Q0,radToDeg:em,isPowerOfTwo:tm,ceilPowerOfTwo:nm,floorPowerOfTwo:im,setQuaternionFromProperEuler:sm,normalize:Pt,denormalize:yi};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,t,n,s,r,o,a,c,l){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],y=s[4],_=s[7],I=s[2],A=s[5],w=s[8];return r[0]=o*x+a*v+c*I,r[3]=o*m+a*y+c*A,r[6]=o*p+a*_+c*w,r[1]=l*x+u*v+h*I,r[4]=l*m+u*y+h*A,r[7]=l*p+u*_+h*w,r[2]=f*x+d*v+g*I,r[5]=f*m+d*y+g*A,r[8]=f*p+d*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=t*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(s*l-u*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(pc.makeScale(e,t)),this}rotate(e){return this.premultiply(pc.makeRotation(-e)),this}translate(e,t){return this.premultiply(pc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pc=new dt;function Qd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function om(){const i=Fo("canvas");return i.style.display="block",i}const gh={};function Eo(i){i in gh||(gh[i]=!0,console.warn(i))}function am(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function cm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bt={enabled:!0,workingColorSpace:zn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===It&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===It&&(i.r=Lr(i.r),i.g=Lr(i.g),i.b=Lr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===_s?tc:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const xh=[.64,.33,.3,.6,.15,.06],_h=[.2126,.7152,.0722],vh=[.3127,.329],yh=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mh=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);bt.define({[zn]:{primaries:xh,whitePoint:vh,transfer:tc,toXYZ:yh,fromXYZ:Mh,luminanceCoefficients:_h,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:xh,whitePoint:vh,transfer:It,toXYZ:yh,fromXYZ:Mh,luminanceCoefficients:_h,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}});let ir;class um{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=Fo("canvas")),ir.width=e.width,ir.height=e.height;const n=ir.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hm=0;class ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mc(s[o].image)):r.push(mc(s[o]))}else r=mc(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?um.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fm=0;class an extends Qs{constructor(e=an.DEFAULT_IMAGE,t=an.DEFAULT_MAPPING,n=ys,s=ys,r=ti,o=Ki,a=fi,c=ts,l=an.DEFAULT_ANISOTROPY,u=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=di(),this.name="",this.source=new ep(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Si:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Si:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Bd;an.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,n=0,s=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,_=(d+1)/2,I=(p+1)/2,A=(u+f)/4,w=(h+x)/4,R=(g+m)/4;return y>_&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=w/n):_>I?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=R/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=w/r,s=R/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-x)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dm extends Qs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new an(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ep(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class js extends dm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class tp extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pm extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==f||l!==d||u!==g){let m=1-a;const p=c*f+l*d+u*g+h*x,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),A=Math.atan2(I,p*v);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}const _=a*v;if(c=c*m+f*_,l=l*m+d*_,u=u*m+g*_,h=h*m+x*_,m===1-a){const I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-a*d,e[t+2]=l*g+u*d+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(on(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return gc.copy(this).projectOnVector(e),this.sub(gc)}reflect(e){return this.sub(gc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(on(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new D,bh=new Xn;class Di{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ko.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ko.copy(n.boundingBox)),Ko.applyMatrix4(e.matrixWorld),this.union(Ko)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),Zo.subVectors(this.max,so),sr.subVectors(e.a,so),rr.subVectors(e.b,so),or.subVectors(e.c,so),as.subVectors(rr,sr),cs.subVectors(or,rr),Cs.subVectors(sr,or);let t=[0,-as.z,as.y,0,-cs.z,cs.y,0,-Cs.z,Cs.y,as.z,0,-as.x,cs.z,0,-cs.x,Cs.z,0,-Cs.x,-as.y,as.x,0,-cs.y,cs.x,0,-Cs.y,Cs.x,0];return!xc(t,sr,rr,or,Zo)||(t=[1,0,0,0,1,0,0,0,1],!xc(t,sr,rr,or,Zo))?!1:(Jo.crossVectors(as,cs),t=[Jo.x,Jo.y,Jo.z],xc(t,sr,rr,or,Zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new D,new D,new D,new D,new D,new D,new D,new D],pi=new D,Ko=new Di,sr=new D,rr=new D,or=new D,as=new D,cs=new D,Cs=new D,so=new D,Zo=new D,Jo=new D,Ps=new D;function xc(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ps.fromArray(i,r);const a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),c=e.dot(Ps),l=t.dot(Ps),u=n.dot(Ps);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const mm=new Di,ro=new D,_c=new D;class Ni{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const t=ro.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ro,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(_c)),this.expandByPoint(ro.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bi=new D,vc=new D,Qo=new D,ls=new D,yc=new D,ea=new D,Mc=new D;class Xo{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bi.copy(this.origin).addScaledVector(this.direction,t),Bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){vc.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(vc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Qo),a=ls.dot(this.direction),c=-ls.dot(Qo),l=ls.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(vc).addScaledVector(Qo,f),d}intersectSphere(e,t){Bi.subVectors(e.center,this.origin);const n=Bi.dot(this.direction),s=Bi.dot(Bi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bi)!==null}intersectTriangle(e,t,n,s,r){yc.subVectors(t,e),ea.subVectors(n,e),Mc.crossVectors(yc,ea);let o=this.direction.dot(Mc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ls.subVectors(this.origin,e);const c=a*this.direction.dot(ea.crossVectors(ls,ea));if(c<0)return null;const l=a*this.direction.dot(yc.cross(ls));if(l<0||c+l>o)return null;const u=-a*ls.dot(Mc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,s,r,o,a,c,l,u,h,f,d,g,x,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,f,d,g,x,m)}set(e,t,n,s,r,o,a,c,l,u,h,f,d,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ar.setFromMatrixColumn(e,0).length(),r=1/ar.setFromMatrixColumn(e,1).length(),o=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,x=l*h;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,x=l*h;t[0]=f-x*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,x=a*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*h,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=x-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+x,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gm,e,xm)}lookAt(e,t,n){const s=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),us.crossVectors(n,Kn),us.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),us.crossVectors(n,Kn)),us.normalize(),ta.crossVectors(Kn,us),s[0]=us.x,s[4]=ta.x,s[8]=Kn.x,s[1]=us.y,s[5]=ta.y,s[9]=Kn.y,s[2]=us.z,s[6]=ta.z,s[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],I=n[15],A=s[0],w=s[4],R=s[8],M=s[12],b=s[1],C=s[5],z=s[9],H=s[13],q=s[2],Z=s[6],$=s[10],ce=s[14],B=s[3],de=s[7],fe=s[11],Te=s[15];return r[0]=o*A+a*b+c*q+l*B,r[4]=o*w+a*C+c*Z+l*de,r[8]=o*R+a*z+c*$+l*fe,r[12]=o*M+a*H+c*ce+l*Te,r[1]=u*A+h*b+f*q+d*B,r[5]=u*w+h*C+f*Z+d*de,r[9]=u*R+h*z+f*$+d*fe,r[13]=u*M+h*H+f*ce+d*Te,r[2]=g*A+x*b+m*q+p*B,r[6]=g*w+x*C+m*Z+p*de,r[10]=g*R+x*z+m*$+p*fe,r[14]=g*M+x*H+m*ce+p*Te,r[3]=v*A+y*b+_*q+I*B,r[7]=v*w+y*C+_*Z+I*de,r[11]=v*R+y*z+_*$+I*fe,r[15]=v*M+y*H+_*ce+I*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*f+n*l*f+s*a*d-n*c*d)+x*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*u-r*c*u)+m*(+t*l*h-t*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*f+s*o*h-n*o*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=h*m*l-x*f*l+x*c*d-a*m*d-h*c*p+a*f*p,y=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,_=u*x*l-g*h*l+g*a*d-o*x*d-u*a*p+o*h*p,I=g*h*c-u*x*c-g*a*f+o*x*f+u*a*m-o*h*m,A=t*v+n*y+s*_+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(x*f*r-h*m*r-x*s*d+n*m*d+h*s*p-n*f*p)*w,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*w,e[3]=(h*c*r-a*f*r-h*s*l+n*f*l+a*s*d-n*c*d)*w,e[4]=y*w,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*w,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*w,e[7]=(o*f*r-u*c*r+u*s*l-t*f*l-o*s*d+t*c*d)*w,e[8]=_*w,e[9]=(g*h*r-u*x*r-g*n*d+t*x*d+u*n*p-t*h*p)*w,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*d-t*a*d)*w,e[12]=I*w,e[13]=(u*x*s-g*h*s+g*n*f-t*x*f-u*n*m+t*h*m)*w,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*w,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*f+t*a*f)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,x=o*u,m=o*h,p=a*h,v=c*l,y=c*u,_=c*h,I=n.x,A=n.y,w=n.z;return s[0]=(1-(x+p))*I,s[1]=(d+_)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(d-_)*A,s[5]=(1-(f+p))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+y)*w,s[9]=(m-v)*w,s[10]=(1-(f+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ar.set(s[0],s[1],s[2]).length();const o=ar.set(s[4],s[5],s[6]).length(),a=ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);const l=1/r,u=1/o,h=1/a;return mi.elements[0]*=l,mi.elements[1]*=l,mi.elements[2]*=l,mi.elements[4]*=u,mi.elements[5]*=u,mi.elements[6]*=u,mi.elements[8]*=h,mi.elements[9]*=h,mi.elements[10]*=h,t.setFromRotationMatrix(mi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Zi){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let d,g;if(a===Zi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ya)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Zi){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*l,d=(n+s)*u;let g,x;if(a===Zi)g=(o+r)*h,x=-2*h;else if(a===Ya)g=r*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ar=new D,mi=new ht,gm=new D(0,0,0),xm=new D(1,1,1),us=new D,ta=new D,Kn=new D,wh=new ht,Sh=new Xn;class Pn{constructor(e=0,t=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(on(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-on(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(on(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-on(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(on(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-on(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Nu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _m=0;const Eh=new D,cr=new Xn,zi=new ht,na=new D,oo=new D,vm=new D,ym=new Xn,Th=new D(1,0,0),Ah=new D(0,1,0),Rh=new D(0,0,1),Ch={type:"added"},Mm={type:"removed"},lr={type:"childadded",child:null},bc={type:"childremoved",child:null};class Ot extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_m++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new D,t=new Pn,n=new Xn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new dt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Nu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.multiply(cr),this}rotateOnWorldAxis(e,t){return cr.setFromAxisAngle(e,t),this.quaternion.premultiply(cr),this}rotateX(e){return this.rotateOnAxis(Th,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Rh,e)}translateOnAxis(e,t){return Eh.copy(e).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Th,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Rh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?na.copy(e):na.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(oo,na,this.up):zi.lookAt(na,oo,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),cr.setFromRotationMatrix(zi),this.quaternion.premultiply(cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mm),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Ot.DEFAULT_UP=new D(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new D,Hi=new D,wc=new D,Vi=new D,ur=new D,hr=new D,Ph=new D,Sc=new D,Ec=new D,Tc=new D,Ac=new At,Rc=new At,Cc=new At;class hi{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gi.subVectors(e,t),s.cross(gi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gi.subVectors(s,t),Hi.subVectors(n,t),wc.subVectors(e,t);const o=gi.dot(gi),a=gi.dot(Hi),c=gi.dot(wc),l=Hi.dot(Hi),u=Hi.dot(wc),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(o,Vi.y),c.addScaledVector(a,Vi.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(e,t),Rc.fromBufferAttribute(e,n),Cc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ac,r.x),o.addScaledVector(Rc,r.y),o.addScaledVector(Cc,r.z),o}static isFrontFacing(e,t,n,s){return gi.subVectors(n,t),Hi.subVectors(e,t),gi.cross(Hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),gi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return hi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ur.subVectors(s,n),hr.subVectors(r,n),Sc.subVectors(e,n);const c=ur.dot(Sc),l=hr.dot(Sc);if(c<=0&&l<=0)return t.copy(n);Ec.subVectors(e,s);const u=ur.dot(Ec),h=hr.dot(Ec);if(u>=0&&h<=u)return t.copy(s);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ur,o);Tc.subVectors(e,r);const d=ur.dot(Tc),g=hr.dot(Tc);if(g>=0&&d<=g)return t.copy(r);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(hr,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ph.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Ph,a);const p=1/(m+x+f);return o=x*p,a=f*p,t.copy(n).addScaledVector(ur,o).addScaledVector(hr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const np={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},ia={h:0,s:0,l:0};function Pc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ut{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=bt.workingColorSpace){if(e=Du(e,1),t=on(t,0,1),n=on(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Pc(o,r,e+1/3),this.g=Pc(o,r,e),this.b=Pc(o,r,e-1/3)}return bt.toWorkingColorSpace(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=np[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return bt.fromWorkingColorSpace(bn.copy(this),e),Math.round(on(bn.r*255,0,255))*65536+Math.round(on(bn.g*255,0,255))*256+Math.round(on(bn.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(bn.copy(this),t);const n=bn.r,s=bn.g,r=bn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Et){bt.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,s=bn.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(hs),this.setHSL(hs.h+e,hs.s+t,hs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(hs),e.getHSL(ia);const n=Po(hs.h,ia.h,t),s=Po(hs.s,ia.s,t),r=Po(hs.l,ia.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new ut;ut.NAMES=np;let bm=0;class bi extends Qs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=di(),this.name="",this.blending=Cr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tl,this.blendDst=Al,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==es&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tl&&(n.blendSrc=this.blendSrc),this.blendDst!==Al&&(n.blendDst=this.blendDst),this.blendEquation!==Gs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fn extends bi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new D,sa=new Me;class Cn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=uu,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)sa.fromBufferAttribute(this,t),sa.applyMatrix3(e),this.setXY(t,sa.x,sa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uu&&(e.usage=this.usage),e}}class ip extends Cn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sp extends Cn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class xt extends Cn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let wm=0;const ai=new ht,Lc=new Ot,fr=new D,Zn=new Di,ao=new Di,un=new D;class Gt extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qd(e)?sp:ip)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new dt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,t,n){return ai.makeTranslation(e,t,n),this.applyMatrix4(ai),this}scale(e,t,n){return ai.makeScale(e,t,n),this.applyMatrix4(ai),this}lookAt(e){return Lc.lookAt(e),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ao.setFromBufferAttribute(a),this.morphTargetsRelative?(un.addVectors(Zn.min,ao.min),Zn.expandByPoint(un),un.addVectors(Zn.max,ao.max),Zn.expandByPoint(un)):(Zn.expandByPoint(ao.min),Zn.expandByPoint(ao.max))}Zn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)un.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(un));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)un.fromBufferAttribute(a,l),c&&(fr.fromBufferAttribute(e,l),un.add(fr)),s=Math.max(s,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let R=0;R<n.count;R++)a[R]=new D,c[R]=new D;const l=new D,u=new D,h=new D,f=new Me,d=new Me,g=new Me,x=new D,m=new D;function p(R,M,b){l.fromBufferAttribute(n,R),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,b),u.sub(l),h.sub(l),d.sub(f),g.sub(f);const C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(C),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(C),a[R].add(x),a[M].add(x),a[b].add(x),c[R].add(m),c[M].add(m),c[b].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const b=v[R],C=b.start,z=b.count;for(let H=C,q=C+z;H<q;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new D,_=new D,I=new D,A=new D;function w(R){I.fromBufferAttribute(s,R),A.copy(I);const M=a[R];y.copy(M),y.sub(I.multiplyScalar(I.dot(M))).normalize(),_.crossVectors(A,M);const C=_.dot(c[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,C)}for(let R=0,M=v.length;R<M;++R){const b=v[R],C=b.start,z=b.count;for(let H=C,q=C+z;H<q;H+=3)w(e.getX(H+0)),w(e.getX(H+1)),w(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Cn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lh=new ht,Ls=new Xo,ra=new Ni,Ih=new D,oa=new D,aa=new D,ca=new D,Ic=new D,la=new D,Dh=new D,ua=new D;class Se extends Ot{constructor(e=new Gt,t=new Fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){la.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(Ic.fromBufferAttribute(h,e),o?la.addScaledVector(Ic,u):la.addScaledVector(Ic.sub(t),u))}t.add(la)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),Ls.copy(e.ray).recast(e.near),!(ra.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(ra,Ih)===null||Ls.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Lh.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Ls.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,I=y;_<I;_+=3){const A=a.getX(_),w=a.getX(_+1),R=a.getX(_+2);s=ha(this,p,e,n,l,u,h,A,w,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=ha(this,o,e,n,l,u,h,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,I=y;_<I;_+=3){const A=_,w=_+1,R=_+2;s=ha(this,p,e,n,l,u,h,A,w,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){const v=m,y=m+1,_=m+2;s=ha(this,o,e,n,l,u,h,v,y,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Sm(i,e,t,n,s,r,o,a){let c;if(e.side===Rn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===es,a),c===null)return null;ua.copy(a),ua.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ua);return l<t.near||l>t.far?null:{distance:l,point:ua.clone(),object:i}}function ha(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,oa),i.getVertexPosition(c,aa),i.getVertexPosition(l,ca);const u=Sm(i,e,t,n,oa,aa,ca,Dh);if(u){const h=new D;hi.getBarycoord(Dh,oa,aa,ca,h),s&&(u.uv=hi.getInterpolatedAttribute(s,a,c,l,h,new Me)),r&&(u.uv1=hi.getInterpolatedAttribute(r,a,c,l,h,new Me)),o&&(u.normal=hi.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new D,materialIndex:0};hi.getNormal(oa,aa,ca,f.normal),u.face=f,u.barycoord=h}return u}class hn extends Gt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(h,2));function g(x,m,p,v,y,_,I,A,w,R,M){const b=_/w,C=I/R,z=_/2,H=I/2,q=A/2,Z=w+1,$=R+1;let ce=0,B=0;const de=new D;for(let fe=0;fe<$;fe++){const Te=fe*C-H;for(let Ve=0;Ve<Z;Ve++){const $e=Ve*b-z;de[x]=$e*v,de[m]=Te*y,de[p]=q,l.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=A>0?1:-1,u.push(de.x,de.y,de.z),h.push(Ve/w),h.push(1-fe/R),ce+=1}}for(let fe=0;fe<R;fe++)for(let Te=0;Te<w;Te++){const Ve=f+Te+Z*fe,$e=f+Te+Z*(fe+1),ne=f+(Te+1)+Z*(fe+1),oe=f+(Te+1)+Z*fe;c.push(Ve,$e,oe),c.push($e,ne,oe),B+=6}a.addGroup(d,B,M),d+=B,f+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Nn(i){const e={};for(let t=0;t<i.length;t++){const n=zr(i[t]);for(const s in n)e[s]=n[s]}return e}function Em(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Tm={clone:zr,merge:Nn};var Am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Es extends bi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Am,this.fragmentShader=Rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=Em(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class op extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new D,Nh=new Me,Uh=new Me;class kn extends op{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Br*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Br*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,Nh,Uh),t.subVectors(Uh,Nh)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Co*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const dr=-90,pr=1;class Cm extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(dr,pr,e,t);s.layers=this.layers,this.add(s);const r=new kn(dr,pr,e,t);r.layers=this.layers,this.add(r);const o=new kn(dr,pr,e,t);o.layers=this.layers,this.add(o);const a=new kn(dr,pr,e,t);a.layers=this.layers,this.add(a);const c=new kn(dr,pr,e,t);c.layers=this.layers,this.add(c);const l=new kn(dr,pr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Zi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ya)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ap extends an{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Ur,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pm extends js{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ap(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hn(5,5,5),r=new Es({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:bs});r.uniforms.tEquirect.value=t;const o=new Se(s,r),a=t.minFilter;return t.minFilter===Ki&&(t.minFilter=ti),new Cm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Dc=new D,Lm=new D,Im=new dt;class zs{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Dc.subVectors(n,t).cross(Lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Dc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Im.getNormalMatrix(e),s=this.coplanarPoint(Dc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new Ni,fa=new D;class Uu{constructor(e=new zs,t=new zs,n=new zs,s=new zs,r=new zs,o=new zs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],v=s[13],y=s[14],_=s[15];if(n[0].setComponents(c-r,f-l,m-d,_-p).normalize(),n[1].setComponents(c+r,f+l,m+d,_+p).normalize(),n[2].setComponents(c+o,f+u,m+g,_+v).normalize(),n[3].setComponents(c-o,f-u,m-g,_-v).normalize(),n[4].setComponents(c-a,f-h,m-x,_-y).normalize(),t===Zi)n[5].setComponents(c+a,f+h,m+x,_+y).normalize();else if(t===Ya)n[5].setComponents(a,h,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){return Is.center.set(0,0,0),Is.radius=.7071067811865476,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(fa.x=s.normal.x>0?e.max.x:e.min.x,fa.y=s.normal.y>0?e.max.y:e.min.y,fa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cp(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Dm(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class gt extends Gt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,f=t/c,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const v=p*f-o;for(let y=0;y<l;y++){const _=y*h-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const y=v+l*p,_=v+l*(p+1),I=v+1+l*(p+1),A=v+1+l*p;d.push(y,_,A),d.push(_,I,A)}this.setIndex(d),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Um=`#ifdef USE_ALPHAHASH
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
#endif`,km=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zm=`#ifdef USE_AOMAP
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
#endif`,Hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vm=`#ifdef USE_BATCHING
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
#endif`,Gm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ym=`#ifdef USE_IRIDESCENCE
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
#endif`,$m=`#ifdef USE_BUMPMAP
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
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ig=`#define PI 3.141592653589793
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
} // validated`,sg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rg=`vec3 transformedNormal = objectNormal;
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
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ag=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,mg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
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
#endif`,xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mg=`#ifdef USE_GRADIENTMAP
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
}`,bg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eg=`uniform bool receiveShadow;
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
#endif`,Tg=`#ifdef USE_ENVMAP
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
#endif`,Ag=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lg=`PhysicalMaterial material;
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
#endif`,Ig=`struct PhysicalMaterial {
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
}`,Dg=`
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
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Og=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gg=`#if defined( USE_POINTS_UV )
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
#endif`,Wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$g=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jg=`#ifdef USE_MORPHTARGETS
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
#endif`,Zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nx=`#ifdef USE_NORMALMAP
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
#endif`,ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ux=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_x=`float getShadowMask() {
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
}`,vx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yx=`#ifdef USE_SKINNING
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
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ax=`#ifdef USE_TRANSMISSION
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
#endif`,Rx=`#ifdef USE_TRANSMISSION
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
#endif`,Cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nx=`uniform sampler2D t2D;
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
}`,Ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bx=`#include <common>
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
}`,zx=`#if DEPTH_PACKING == 3200
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
}`,Hx=`#define DISTANCE
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
}`,Vx=`#define DISTANCE
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`uniform float scale;
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
}`,qx=`uniform vec3 diffuse;
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
}`,Yx=`#include <common>
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
}`,$x=`uniform vec3 diffuse;
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
}`,jx=`#define LAMBERT
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
}`,Zx=`#define MATCAP
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
}`,Jx=`#define MATCAP
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
}`,Qx=`#define NORMAL
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
}`,e_=`#define NORMAL
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
}`,t_=`#define PHONG
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
}`,n_=`#define PHONG
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
}`,i_=`#define STANDARD
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
}`,s_=`#define STANDARD
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
}`,r_=`#define TOON
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
}`,o_=`#define TOON
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
}`,a_=`uniform float size;
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
}`,c_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,u_=`uniform vec3 color;
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
}`,h_=`uniform float rotation;
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
}`,f_=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:Nm,alphahash_pars_fragment:Um,alphamap_fragment:km,alphamap_pars_fragment:Om,alphatest_fragment:Fm,alphatest_pars_fragment:Bm,aomap_fragment:zm,aomap_pars_fragment:Hm,batching_pars_vertex:Vm,batching_vertex:Gm,begin_vertex:Wm,beginnormal_vertex:Xm,bsdfs:qm,iridescence_fragment:Ym,bumpmap_pars_fragment:$m,clipping_planes_fragment:jm,clipping_planes_pars_fragment:Km,clipping_planes_pars_vertex:Zm,clipping_planes_vertex:Jm,color_fragment:Qm,color_pars_fragment:eg,color_pars_vertex:tg,color_vertex:ng,common:ig,cube_uv_reflection_fragment:sg,defaultnormal_vertex:rg,displacementmap_pars_vertex:og,displacementmap_vertex:ag,emissivemap_fragment:cg,emissivemap_pars_fragment:lg,colorspace_fragment:ug,colorspace_pars_fragment:hg,envmap_fragment:fg,envmap_common_pars_fragment:dg,envmap_pars_fragment:pg,envmap_pars_vertex:mg,envmap_physical_pars_fragment:Tg,envmap_vertex:gg,fog_vertex:xg,fog_pars_vertex:_g,fog_fragment:vg,fog_pars_fragment:yg,gradientmap_pars_fragment:Mg,lightmap_pars_fragment:bg,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Sg,lights_pars_begin:Eg,lights_toon_fragment:Ag,lights_toon_pars_fragment:Rg,lights_phong_fragment:Cg,lights_phong_pars_fragment:Pg,lights_physical_fragment:Lg,lights_physical_pars_fragment:Ig,lights_fragment_begin:Dg,lights_fragment_maps:Ng,lights_fragment_end:Ug,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Og,logdepthbuf_pars_vertex:Fg,logdepthbuf_vertex:Bg,map_fragment:zg,map_pars_fragment:Hg,map_particle_fragment:Vg,map_particle_pars_fragment:Gg,metalnessmap_fragment:Wg,metalnessmap_pars_fragment:Xg,morphinstance_vertex:qg,morphcolor_vertex:Yg,morphnormal_vertex:$g,morphtarget_pars_vertex:jg,morphtarget_vertex:Kg,normal_fragment_begin:Zg,normal_fragment_maps:Jg,normal_pars_fragment:Qg,normal_pars_vertex:ex,normal_vertex:tx,normalmap_pars_fragment:nx,clearcoat_normal_fragment_begin:ix,clearcoat_normal_fragment_maps:sx,clearcoat_pars_fragment:rx,iridescence_pars_fragment:ox,opaque_fragment:ax,packing:cx,premultiplied_alpha_fragment:lx,project_vertex:ux,dithering_fragment:hx,dithering_pars_fragment:fx,roughnessmap_fragment:dx,roughnessmap_pars_fragment:px,shadowmap_pars_fragment:mx,shadowmap_pars_vertex:gx,shadowmap_vertex:xx,shadowmask_pars_fragment:_x,skinbase_vertex:vx,skinning_pars_vertex:yx,skinning_vertex:Mx,skinnormal_vertex:bx,specularmap_fragment:wx,specularmap_pars_fragment:Sx,tonemapping_fragment:Ex,tonemapping_pars_fragment:Tx,transmission_fragment:Ax,transmission_pars_fragment:Rx,uv_pars_fragment:Cx,uv_pars_vertex:Px,uv_vertex:Lx,worldpos_vertex:Ix,background_vert:Dx,background_frag:Nx,backgroundCube_vert:Ux,backgroundCube_frag:kx,cube_vert:Ox,cube_frag:Fx,depth_vert:Bx,depth_frag:zx,distanceRGBA_vert:Hx,distanceRGBA_frag:Vx,equirect_vert:Gx,equirect_frag:Wx,linedashed_vert:Xx,linedashed_frag:qx,meshbasic_vert:Yx,meshbasic_frag:$x,meshlambert_vert:jx,meshlambert_frag:Kx,meshmatcap_vert:Zx,meshmatcap_frag:Jx,meshnormal_vert:Qx,meshnormal_frag:e_,meshphong_vert:t_,meshphong_frag:n_,meshphysical_vert:i_,meshphysical_frag:s_,meshtoon_vert:r_,meshtoon_frag:o_,points_vert:a_,points_frag:c_,shadow_vert:l_,shadow_frag:u_,sprite_vert:h_,sprite_frag:f_},Fe={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Pi={basic:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Nn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Nn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ut(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Nn([Fe.points,Fe.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Nn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Nn([Fe.common,Fe.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Nn([Fe.sprite,Fe.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Nn([Fe.common,Fe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Nn([Fe.lights,Fe.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Pi.physical={uniforms:Nn([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const da={r:0,b:0,g:0},Ds=new Pn,d_=new ht;function p_(i,e,t,n,s,r,o){const a=new ut(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function x(v){let y=!1;const _=g(v);_===null?p(a,c):_&&_.isColor&&(p(_,1),y=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,y){const _=g(y);_&&(_.isCubeTexture||_.mapping===ec)?(u===void 0&&(u=new Se(new hn(1,1,1),new Es({name:"BackgroundCubeMaterial",uniforms:zr(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ds.copy(y.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(d_.makeRotationFromEuler(Ds)),u.material.toneMapped=bt.getTransfer(_.colorSpace)!==It,(h!==_||f!==_.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Se(new gt(2,2),new Es({name:"BackgroundMaterial",uniforms:zr(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=bt.getTransfer(_.colorSpace)!==It,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,y){v.getRGB(da,rp(i)),n.buffers.color.setClear(da.r,da.g,da.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(a,c)},render:x,addToRenderList:m}}function m_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(b,C,z,H,q){let Z=!1;const $=h(H,z,C);r!==$&&(r=$,l(r.object)),Z=d(b,H,z,q),Z&&g(b,H,z,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(b,C,z,H),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,C,z){const H=z.wireframe===!0;let q=n[b.id];q===void 0&&(q={},n[b.id]=q);let Z=q[C.id];Z===void 0&&(Z={},q[C.id]=Z);let $=Z[H];return $===void 0&&($=f(c()),Z[H]=$),$}function f(b){const C=[],z=[],H=[];for(let q=0;q<t;q++)C[q]=0,z[q]=0,H[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:H,object:b,attributes:{},index:null}}function d(b,C,z,H){const q=r.attributes,Z=C.attributes;let $=0;const ce=z.getAttributes();for(const B in ce)if(ce[B].location>=0){const fe=q[B];let Te=Z[B];if(Te===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(Te=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(Te=b.instanceColor)),fe===void 0||fe.attribute!==Te||Te&&fe.data!==Te.data)return!0;$++}return r.attributesNum!==$||r.index!==H}function g(b,C,z,H){const q={},Z=C.attributes;let $=0;const ce=z.getAttributes();for(const B in ce)if(ce[B].location>=0){let fe=Z[B];fe===void 0&&(B==="instanceMatrix"&&b.instanceMatrix&&(fe=b.instanceMatrix),B==="instanceColor"&&b.instanceColor&&(fe=b.instanceColor));const Te={};Te.attribute=fe,fe&&fe.data&&(Te.data=fe.data),q[B]=Te,$++}r.attributes=q,r.attributesNum=$,r.index=H}function x(){const b=r.newAttributes;for(let C=0,z=b.length;C<z;C++)b[C]=0}function m(b){p(b,0)}function p(b,C){const z=r.newAttributes,H=r.enabledAttributes,q=r.attributeDivisors;z[b]=1,H[b]===0&&(i.enableVertexAttribArray(b),H[b]=1),q[b]!==C&&(i.vertexAttribDivisor(b,C),q[b]=C)}function v(){const b=r.newAttributes,C=r.enabledAttributes;for(let z=0,H=C.length;z<H;z++)C[z]!==b[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function y(b,C,z,H,q,Z,$){$===!0?i.vertexAttribIPointer(b,C,z,q,Z):i.vertexAttribPointer(b,C,z,H,q,Z)}function _(b,C,z,H){x();const q=H.attributes,Z=z.getAttributes(),$=C.defaultAttributeValues;for(const ce in Z){const B=Z[ce];if(B.location>=0){let de=q[ce];if(de===void 0&&(ce==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),ce==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),de!==void 0){const fe=de.normalized,Te=de.itemSize,Ve=e.get(de);if(Ve===void 0)continue;const $e=Ve.buffer,ne=Ve.type,oe=Ve.bytesPerElement,_e=ne===i.INT||ne===i.UNSIGNED_INT||de.gpuType===Tu;if(de.isInterleavedBufferAttribute){const xe=de.data,Ue=xe.stride,Ge=de.offset;if(xe.isInstancedInterleavedBuffer){for(let ke=0;ke<B.locationSize;ke++)p(B.location+ke,xe.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ke=0;ke<B.locationSize;ke++)m(B.location+ke);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let ke=0;ke<B.locationSize;ke++)y(B.location+ke,Te/B.locationSize,ne,fe,Ue*oe,(Ge+Te/B.locationSize*ke)*oe,_e)}else{if(de.isInstancedBufferAttribute){for(let xe=0;xe<B.locationSize;xe++)p(B.location+xe,de.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let xe=0;xe<B.locationSize;xe++)m(B.location+xe);i.bindBuffer(i.ARRAY_BUFFER,$e);for(let xe=0;xe<B.locationSize;xe++)y(B.location+xe,Te/B.locationSize,ne,fe,Te*oe,Te/B.locationSize*xe*oe,_e)}}else if($!==void 0){const fe=$[ce];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(B.location,fe);break;case 3:i.vertexAttrib3fv(B.location,fe);break;case 4:i.vertexAttrib4fv(B.location,fe);break;default:i.vertexAttrib1fv(B.location,fe)}}}}v()}function I(){R();for(const b in n){const C=n[b];for(const z in C){const H=C[z];for(const q in H)u(H[q].object),delete H[q];delete C[z]}delete n[b]}}function A(b){if(n[b.id]===void 0)return;const C=n[b.id];for(const z in C){const H=C[z];for(const q in H)u(H[q].object),delete H[q];delete C[z]}delete n[b.id]}function w(b){for(const C in n){const z=n[C];if(z[b.id]===void 0)continue;const H=z[b.id];for(const q in H)u(H[q].object),delete H[q];delete z[b.id]}}function R(){M(),o=!0,r!==s&&(r=s,l(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function g_(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function x_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==fi&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===Wo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ts&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Mi&&!R)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:I,maxSamples:A}}function __(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new zs,a=new dt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,y=v*4;let _=p.clippingState||null;c.value=_,_=u(g,f,y,d);for(let I=0;I!==y;++I)_[I]=t[I];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function v_(i){let e=new WeakMap;function t(o,a){return a===Ul?o.mapping=Ur:a===kl&&(o.mapping=kr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ul||a===kl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Pm(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ku extends op{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ar=4,kh=[.125,.215,.35,.446,.526,.582],Ws=20,Nc=new ku,Oh=new ut;let Uc=null,kc=0,Oc=0,Fc=!1;const Hs=(1+Math.sqrt(5))/2,mr=1/Hs,Fh=[new D(-Hs,mr,0),new D(Hs,mr,0),new D(-mr,0,Hs),new D(mr,0,Hs),new D(0,Hs,-mr),new D(0,Hs,mr),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Uc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,kc,Oc),this._renderer.xr.enabled=Fc,e.scissorTest=!1,pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ur||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),kc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Wo,format:fi,colorSpace:zn,depthBuffer:!1},s=Bh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y_(r)),this._blurMaterial=M_(r,e,t)}return s}_compileMaterial(e){const t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,Nc)}_sceneToCubeUV(e,t,n,s){const a=new kn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Oh),u.toneMapping=ws,u.autoClear=!1;const d=new Fn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),g=new Se(new hn,d);let x=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Oh),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;pa(s,v*y,p>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ur||e.mapping===kr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;pa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Nc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fh[(s-r-1)%Fh.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Se(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ws-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):Ws;m>Ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ws}`);const p=[];let v=0;for(let w=0;w<Ws;++w){const R=w/x,M=Math.exp(-R*R/2);p.push(M),w===0?v+=M:w<m&&(v+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const _=this._sizeLods[s],I=3*_*(s>y-Ar?s-y+Ar:0),A=4*(this._cubeSize-_);pa(t,I,A,3*_,2*_),c.setRenderTarget(t),c.render(h,Nc)}}function y_(i){const e=[],t=[],n=[];let s=i;const r=i-Ar+1+kh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ar?c=kh[o-i+Ar-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*d),y=new Float32Array(m*g*d),_=new Float32Array(p*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,R=A>2?0:-1,M=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];v.set(M,x*g*A),y.set(f,m*g*A);const b=[A,A,A,A,A,A];_.set(b,p*g*A)}const I=new Gt;I.setAttribute("position",new Cn(v,x)),I.setAttribute("uv",new Cn(y,m)),I.setAttribute("faceIndex",new Cn(_,p)),e.push(I),s>Ar&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bh(i,e,t){const n=new js(i,e,t);return n.texture.mapping=ec,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function M_(i,e,t){const n=new Float32Array(Ws),s=new D(0,1,0);return new Es({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function zh(){return new Es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ou(),fragmentShader:`

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
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Hh(){return new Es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ou(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bs,depthTest:!1,depthWrite:!1})}function Ou(){return`

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
	`}function b_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ul||c===kl,u=c===Ur||c===kr;if(l||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new hu(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return l&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new hu(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function w_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Eo("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S_(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const x=d[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,g=h.attributes.position;let x=0;if(d!==null){const v=d.array;x=d.version;for(let y=0,_=v.length;y<_;y+=3){const I=v[y+0],A=v[y+1],w=v[y+2];f.push(I,A,A,w,w,I)}}else if(g!==void 0){const v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const I=y+0,A=y+1,w=y+2;f.push(I,A,A,w,w,I)}}else return;const m=new(Qd(f)?sp:ip)(f,1);m.version=x;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function E_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function h(f,d,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*x[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function T_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function A_(i,e,t){const n=new WeakMap,s=new At;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var d=b;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let I=a.attributes.position.count*_,A=1;I>e.maxTextureSize&&(A=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const w=new Float32Array(I*A*4*h),R=new tp(w,I,A,h);R.type=Mi,R.needsUpdate=!0;const M=_*4;for(let C=0;C<h;C++){const z=p[C],H=v[C],q=y[C],Z=I*A*4*C;for(let $=0;$<z.count;$++){const ce=$*M;g===!0&&(s.fromBufferAttribute(z,$),w[Z+ce+0]=s.x,w[Z+ce+1]=s.y,w[Z+ce+2]=s.z,w[Z+ce+3]=0),x===!0&&(s.fromBufferAttribute(H,$),w[Z+ce+4]=s.x,w[Z+ce+5]=s.y,w[Z+ce+6]=s.z,w[Z+ce+7]=0),m===!0&&(s.fromBufferAttribute(q,$),w[Z+ce+8]=s.x,w[Z+ce+9]=s.y,w[Z+ce+10]=s.z,w[Z+ce+11]=q.itemSize===4?s.w:1)}}f={count:h,texture:R,size:new Me(I,A)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function R_(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class lp extends an{constructor(e,t,n,s,r,o,a,c,l,u=Pr){if(u!==Pr&&u!==Fr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Pr&&(n=$s),n===void 0&&u===Fr&&(n=Or),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bn,this.minFilter=c!==void 0?c:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const up=new an,Vh=new lp(1,1),hp=new tp,fp=new pm,dp=new ap,Gh=[],Wh=[],Xh=new Float32Array(16),qh=new Float32Array(9),Yh=new Float32Array(4);function Xr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nc(i,e){let t=Wh[e];t===void 0&&(t=new Int32Array(e),Wh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function P_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function L_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function I_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function D_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;Yh.set(n),i.uniformMatrix2fv(this.addr,!1,Yh),ln(t,n)}}function N_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;qh.set(n),i.uniformMatrix3fv(this.addr,!1,qh),ln(t,n)}}function U_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;Xh.set(n),i.uniformMatrix4fv(this.addr,!1,Xh),ln(t,n)}}function k_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function O_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function F_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function B_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function z_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function H_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function V_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function G_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function W_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vh.compareFunction=Jd,r=Vh):r=up,t.setTexture2D(e||r,s)}function X_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fp,s)}function q_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||dp,s)}function Y_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hp,s)}function $_(i){switch(i){case 5126:return C_;case 35664:return P_;case 35665:return L_;case 35666:return I_;case 35674:return D_;case 35675:return N_;case 35676:return U_;case 5124:case 35670:return k_;case 35667:case 35671:return O_;case 35668:case 35672:return F_;case 35669:case 35673:return B_;case 5125:return z_;case 36294:return H_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}function j_(i,e){i.uniform1fv(this.addr,e)}function K_(i,e){const t=Xr(e,this.size,2);i.uniform2fv(this.addr,t)}function Z_(i,e){const t=Xr(e,this.size,3);i.uniform3fv(this.addr,t)}function J_(i,e){const t=Xr(e,this.size,4);i.uniform4fv(this.addr,t)}function Q_(i,e){const t=Xr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ev(i,e){const t=Xr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tv(i,e){const t=Xr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nv(i,e){i.uniform1iv(this.addr,e)}function iv(i,e){i.uniform2iv(this.addr,e)}function sv(i,e){i.uniform3iv(this.addr,e)}function rv(i,e){i.uniform4iv(this.addr,e)}function ov(i,e){i.uniform1uiv(this.addr,e)}function av(i,e){i.uniform2uiv(this.addr,e)}function cv(i,e){i.uniform3uiv(this.addr,e)}function lv(i,e){i.uniform4uiv(this.addr,e)}function uv(i,e,t){const n=this.cache,s=e.length,r=nc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||up,r[o])}function hv(i,e,t){const n=this.cache,s=e.length,r=nc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fp,r[o])}function fv(i,e,t){const n=this.cache,s=e.length,r=nc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||dp,r[o])}function dv(i,e,t){const n=this.cache,s=e.length,r=nc(t,s);cn(n,r)||(i.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||hp,r[o])}function pv(i){switch(i){case 5126:return j_;case 35664:return K_;case 35665:return Z_;case 35666:return J_;case 35674:return Q_;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return sv;case 35669:case 35673:return rv;case 5125:return ov;case 36294:return av;case 36295:return cv;case 36296:return lv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return fv;case 36289:case 36303:case 36311:case 36292:return dv}}class mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$_(t.type)}}class gv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pv(t.type)}}class xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function $h(i,e){i.seq.push(e),i.map[e.id]=e}function _v(i,e,t){const n=i.name,s=n.length;for(Bc.lastIndex=0;;){const r=Bc.exec(n),o=Bc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){$h(t,l===void 0?new mv(a,i,e):new gv(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new xv(a),$h(t,h)),t=h}}}class Wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);_v(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function jh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const vv=37297;let yv=0;function Mv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Kh=new dt;function bv(i){bt._getMatrix(Kh,bt.workingColorSpace,i);const e=`mat3( ${Kh.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(i)){case tc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zh(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Mv(i.getShaderSource(e),o)}else return s}function wv(i,e){const t=bv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Sv(i,e){let t;switch(e){case S0:t="Linear";break;case E0:t="Reinhard";break;case T0:t="Cineon";break;case Fd:t="ACESFilmic";break;case R0:t="AgX";break;case C0:t="Neutral";break;case A0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ma=new D;function Ev(){bt.getLuminanceCoefficients(ma);const i=ma.x.toFixed(4),e=ma.y.toFixed(4),t=ma.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function Av(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function To(i){return i!==""}function Jh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fu(i){return i.replace(Cv,Lv)}const Pv=new Map;function Lv(i,e){let t=pt[e];if(t===void 0){const n=Pv.get(e);if(n!==void 0)t=pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fu(t)}const Iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ef(i){return i.replace(Iv,Dv)}function Dv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Nv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ud?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function Uv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ur:case kr:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case kr:e="ENVMAP_MODE_REFRACTION";break}return e}function Ov(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Od:e="ENVMAP_BLENDING_MULTIPLY";break;case b0:e="ENVMAP_BLENDING_MIX";break;case w0:e="ENVMAP_BLENDING_ADD";break}return e}function Fv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Bv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Nv(t),l=Uv(t),u=kv(t),h=Ov(t),f=Fv(t),d=Tv(t),g=Av(r),x=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(To).join(`
`),p.length>0&&(p+=`
`)):(m=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),p=[tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ws?"#define TONE_MAPPING":"",t.toneMapping!==ws?pt.tonemapping_pars_fragment:"",t.toneMapping!==ws?Sv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,wv("linearToOutputTexel",t.outputColorSpace),Ev(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),o=fu(o),o=Jh(o,t),o=Qh(o,t),a=fu(a),a=Jh(a,t),a=Qh(a,t),o=ef(o),a=ef(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,_=v+p+a,I=jh(s,s.VERTEX_SHADER,y),A=jh(s,s.FRAGMENT_SHADER,_);s.attachShader(x,I),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(I).trim(),q=s.getShaderInfoLog(A).trim();let Z=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,A);else{const ce=Zh(s,I,"vertex"),B=Zh(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+ce+`
`+B)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(H===""||q==="")&&($=!1);$&&(C.diagnostics={runnable:Z,programLog:z,vertexShader:{log:H,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(I),s.deleteShader(A),R=new Wa(s,x),M=Rv(s,x)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,vv)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}let zv=0;class Hv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vv(e),t.set(e,n)),n}}class Vv{constructor(e){this.id=zv++,this.code=e,this.usedTimes=0}}function Gv(i,e,t,n,s,r,o){const a=new Nu,c=new Hv,l=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,b,C,z,H){const q=z.fog,Z=H.geometry,$=M.isMeshStandardMaterial?z.environment:null,ce=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),B=ce&&ce.mapping===ec?ce.image.height:null,de=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const fe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Te=fe!==void 0?fe.length:0;let Ve=0;Z.morphAttributes.position!==void 0&&(Ve=1),Z.morphAttributes.normal!==void 0&&(Ve=2),Z.morphAttributes.color!==void 0&&(Ve=3);let $e,ne,oe,_e;if(de){const vt=Pi[de];$e=vt.vertexShader,ne=vt.fragmentShader}else $e=M.vertexShader,ne=M.fragmentShader,c.update(M),oe=c.getVertexShaderID(M),_e=c.getFragmentShaderID(M);const xe=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),Ge=H.isInstancedMesh===!0,ke=H.isBatchedMesh===!0,Qe=!!M.map,ae=!!M.matcap,me=!!ce,U=!!M.aoMap,ue=!!M.lightMap,ee=!!M.bumpMap,O=!!M.normalMap,Y=!!M.displacementMap,ge=!!M.emissiveMap,ye=!!M.metalnessMap,P=!!M.roughnessMap,E=M.anisotropy>0,G=M.clearcoat>0,K=M.dispersion>0,pe=M.iridescence>0,he=M.sheen>0,Ie=M.transmission>0,Le=E&&!!M.anisotropyMap,Ce=G&&!!M.clearcoatMap,ct=G&&!!M.clearcoatNormalMap,V=G&&!!M.clearcoatRoughnessMap,Pe=pe&&!!M.iridescenceMap,ze=pe&&!!M.iridescenceThicknessMap,We=he&&!!M.sheenColorMap,Oe=he&&!!M.sheenRoughnessMap,N=!!M.specularMap,ie=!!M.specularColorMap,Re=!!M.specularIntensityMap,k=Ie&&!!M.transmissionMap,ve=Ie&&!!M.thicknessMap,j=!!M.gradientMap,le=!!M.alphaMap,Ae=M.alphaTest>0,we=!!M.alphaHash,et=!!M.extensions;let Nt=ws;M.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Nt=i.toneMapping);const Wt={shaderID:de,shaderType:M.type,shaderName:M.name,vertexShader:$e,fragmentShader:ne,defines:M.defines,customVertexShaderID:oe,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:ke,batchingColor:ke&&H._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&H.instanceColor!==null,instancingMorph:Ge&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:zn,alphaToCoverage:!!M.alphaToCoverage,map:Qe,matcap:ae,envMap:me,envMapMode:me&&ce.mapping,envMapCubeUVHeight:B,aoMap:U,lightMap:ue,bumpMap:ee,normalMap:O,displacementMap:f&&Y,emissiveMap:ge,normalMapObjectSpace:O&&M.normalMapType===U0,normalMapTangentSpace:O&&M.normalMapType===Zd,metalnessMap:ye,roughnessMap:P,anisotropy:E,anisotropyMap:Le,clearcoat:G,clearcoatMap:Ce,clearcoatNormalMap:ct,clearcoatRoughnessMap:V,dispersion:K,iridescence:pe,iridescenceMap:Pe,iridescenceThicknessMap:ze,sheen:he,sheenColorMap:We,sheenRoughnessMap:Oe,specularMap:N,specularColorMap:ie,specularIntensityMap:Re,transmission:Ie,transmissionMap:k,thicknessMap:ve,gradientMap:j,opaque:M.transparent===!1&&M.blending===Cr&&M.alphaToCoverage===!1,alphaMap:le,alphaTest:Ae,alphaHash:we,combine:M.combine,mapUv:Qe&&x(M.map.channel),aoMapUv:U&&x(M.aoMap.channel),lightMapUv:ue&&x(M.lightMap.channel),bumpMapUv:ee&&x(M.bumpMap.channel),normalMapUv:O&&x(M.normalMap.channel),displacementMapUv:Y&&x(M.displacementMap.channel),emissiveMapUv:ge&&x(M.emissiveMap.channel),metalnessMapUv:ye&&x(M.metalnessMap.channel),roughnessMapUv:P&&x(M.roughnessMap.channel),anisotropyMapUv:Le&&x(M.anisotropyMap.channel),clearcoatMapUv:Ce&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ct&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(M.sheenRoughnessMap.channel),specularMapUv:N&&x(M.specularMap.channel),specularColorMapUv:ie&&x(M.specularColorMap.channel),specularIntensityMapUv:Re&&x(M.specularIntensityMap.channel),transmissionMapUv:k&&x(M.transmissionMap.channel),thicknessMapUv:ve&&x(M.thicknessMap.channel),alphaMapUv:le&&x(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(O||E),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Z.attributes.uv&&(Qe||le),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ue,skinning:H.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ve,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Qe&&M.map.isVideoTexture===!0&&bt.getTransfer(M.map.colorSpace)===It,decodeVideoTextureEmissive:ge&&M.emissiveMap.isVideoTexture===!0&&bt.getTransfer(M.emissiveMap.colorSpace)===It,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bt,flipSided:M.side===Rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:et&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&M.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Wt.vertexUv1s=l.has(1),Wt.vertexUv2s=l.has(2),Wt.vertexUv3s=l.has(3),l.clear(),Wt}function p(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)b.push(C),b.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(v(b,M),y(b,M),b.push(i.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function v(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function y(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function _(M){const b=g[M.type];let C;if(b){const z=Pi[b];C=Tm.clone(z.uniforms)}else C=M.uniforms;return C}function I(M,b){let C;for(let z=0,H=u.length;z<H;z++){const q=u[z];if(q.cacheKey===b){C=q,++C.usedTimes;break}}return C===void 0&&(C=new Bv(i,b,M,r),u.push(C)),C}function A(M){if(--M.usedTimes===0){const b=u.indexOf(M);u[b]=u[u.length-1],u.pop(),M.destroy()}}function w(M){c.remove(M)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:I,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:R}}function Wv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Xv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function sf(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,d,g,x,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function a(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function c(h,f,d,g,x,m){const p=o(h,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||Xv),n.length>1&&n.sort(f||nf),s.length>1&&s.sort(f||nf)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function qv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new sf,i.set(n,[o])):s>=r.length?(o=new sf,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Yv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ut};break;case"SpotLight":t={position:new D,direction:new D,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function $v(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jv=0;function Kv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zv(i){const e=new Yv,t=$v(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,r=new ht,o=new ht;function a(l){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,I=0,A=0,w=0;l.sort(Kv);for(let M=0,b=l.length;M<b;M++){const C=l[M],z=C.color,H=C.intensity,q=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*H,h+=z.g*H,f+=z.b*H;else if(C.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(C.sh.coefficients[$],H);w++}else if(C.isDirectionalLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ce=C.shadow,B=t.get(C);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,n.directionalShadow[d]=B,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=C.shadow.matrix,v++}n.directional[d]=$,d++}else if(C.isSpotLight){const $=e.get(C);$.position.setFromMatrixPosition(C.matrixWorld),$.color.copy(z).multiplyScalar(H),$.distance=q,$.coneCos=Math.cos(C.angle),$.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),$.decay=C.decay,n.spot[x]=$;const ce=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,ce.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=ce.matrix,C.castShadow){const B=t.get(C);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=Z,_++}x++}else if(C.isRectAreaLight){const $=e.get(C);$.color.copy(z).multiplyScalar(H),$.halfWidth.set(C.width*.5,0,0),$.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=$,m++}else if(C.isPointLight){const $=e.get(C);if($.color.copy(C.color).multiplyScalar(C.intensity),$.distance=C.distance,$.decay=C.decay,C.castShadow){const ce=C.shadow,B=t.get(C);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=$,g++}else if(C.isHemisphereLight){const $=e.get(C);$.skyColor.copy(C.color).multiplyScalar(H),$.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[p]=$,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==v||R.numPointShadows!==y||R.numSpotShadows!==_||R.numSpotMaps!==I||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,R.directionalLength=d,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=v,R.numPointShadows=y,R.numSpotShadows=_,R.numSpotMaps=I,R.numLightProbes=w,n.version=jv++)}function c(l,u){let h=0,f=0,d=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const y=l[p];if(y.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(y.isSpotLight){const _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function rf(i){const e=new Zv(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Jv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new rf(i),e.set(s,[a])):r>=o.length?(a=new rf(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Qv extends bi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=D0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e1 extends bi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n1=`uniform sampler2D shadow_pass;
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
}`;function i1(i,e,t){let n=new Uu;const s=new Me,r=new Me,o=new At,a=new Qv({depthPacking:N0}),c=new e1,l={},u=t.maxTextureSize,h={[es]:Rn,[Rn]:es,[Bt]:Bt},f=new Es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:t1,fragmentShader:n1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Gt;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Se(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ud;let p=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),b=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(bs),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const H=p!==Xi&&this.type===Xi,q=p===Xi&&this.type!==Xi;for(let Z=0,$=A.length;Z<$;Z++){const ce=A[Z],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const de=B.getFrameExtents();if(s.multiply(de),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/de.x),s.x=r.x*de.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/de.y),s.y=r.y*de.y,B.mapSize.y=r.y)),B.map===null||H===!0||q===!0){const Te=this.type!==Xi?{minFilter:Bn,magFilter:Bn}:{};B.map!==null&&B.map.dispose(),B.map=new js(s.x,s.y,Te),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const fe=B.getViewportCount();for(let Te=0;Te<fe;Te++){const Ve=B.getViewport(Te);o.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),z.viewport(o),B.updateMatrices(ce,Te),n=B.getFrustum(),_(w,R,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===Xi&&v(B,R),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,b,C)};function v(A,w){const R=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new js(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,R,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,R,d,x,null)}function y(A,w,R,M){let b=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)b=C;else if(b=R.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=b.uuid,H=w.uuid;let q=l[z];q===void 0&&(q={},l[z]=q);let Z=q[H];Z===void 0&&(Z=b.clone(),q[H]=Z,w.addEventListener("dispose",I)),b=Z}if(b.visible=w.visible,b.wireframe=w.wireframe,M===Xi?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=i.properties.get(b);z.light=R}return b}function _(A,w,R,M,b){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Xi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const H=e.update(A),q=A.material;if(Array.isArray(q)){const Z=H.groups;for(let $=0,ce=Z.length;$<ce;$++){const B=Z[$],de=q[B.materialIndex];if(de&&de.visible){const fe=y(A,de,M,b);A.onBeforeShadow(i,A,w,R,H,fe,B),i.renderBufferDirect(R,null,H,fe,A,B),A.onAfterShadow(i,A,w,R,H,fe,B)}}}else if(q.visible){const Z=y(A,q,M,b);A.onBeforeShadow(i,A,w,R,H,Z,null),i.renderBufferDirect(R,null,H,Z,A,null),A.onAfterShadow(i,A,w,R,H,Z,null)}}const z=A.children;for(let H=0,q=z.length;H<q;H++)_(z[H],w,R,M,b)}function I(A){A.target.removeEventListener("dispose",I);for(const R in l){const M=l[R],b=A.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}const s1={[Rl]:Cl,[Pl]:Dl,[Ll]:Nl,[Nr]:Il,[Cl]:Rl,[Dl]:Pl,[Nl]:Ll,[Il]:Nr};function r1(i,e){function t(){let k=!1;const ve=new At;let j=null;const le=new At(0,0,0,0);return{setMask:function(Ae){j!==Ae&&!k&&(i.colorMask(Ae,Ae,Ae,Ae),j=Ae)},setLocked:function(Ae){k=Ae},setClear:function(Ae,we,et,Nt,Wt){Wt===!0&&(Ae*=Nt,we*=Nt,et*=Nt),ve.set(Ae,we,et,Nt),le.equals(ve)===!1&&(i.clearColor(Ae,we,et,Nt),le.copy(ve))},reset:function(){k=!1,j=null,le.set(-1,0,0,0)}}}function n(){let k=!1,ve=!1,j=null,le=null,Ae=null;return{setReversed:function(we){if(ve!==we){const et=e.get("EXT_clip_control");ve?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);const Nt=Ae;Ae=null,this.setClear(Nt)}ve=we},getReversed:function(){return ve},setTest:function(we){we?xe(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(we){j!==we&&!k&&(i.depthMask(we),j=we)},setFunc:function(we){if(ve&&(we=s1[we]),le!==we){switch(we){case Rl:i.depthFunc(i.NEVER);break;case Cl:i.depthFunc(i.ALWAYS);break;case Pl:i.depthFunc(i.LESS);break;case Nr:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Il:i.depthFunc(i.GEQUAL);break;case Dl:i.depthFunc(i.GREATER);break;case Nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=we}},setLocked:function(we){k=we},setClear:function(we){Ae!==we&&(ve&&(we=1-we),i.clearDepth(we),Ae=we)},reset:function(){k=!1,j=null,le=null,Ae=null,ve=!1}}}function s(){let k=!1,ve=null,j=null,le=null,Ae=null,we=null,et=null,Nt=null,Wt=null;return{setTest:function(vt){k||(vt?xe(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(vt){ve!==vt&&!k&&(i.stencilMask(vt),ve=vt)},setFunc:function(vt,Yn,$n){(j!==vt||le!==Yn||Ae!==$n)&&(i.stencilFunc(vt,Yn,$n),j=vt,le=Yn,Ae=$n)},setOp:function(vt,Yn,$n){(we!==vt||et!==Yn||Nt!==$n)&&(i.stencilOp(vt,Yn,$n),we=vt,et=Yn,Nt=$n)},setLocked:function(vt){k=vt},setClear:function(vt){Wt!==vt&&(i.clearStencil(vt),Wt=vt)},reset:function(){k=!1,ve=null,j=null,le=null,Ae=null,we=null,et=null,Nt=null,Wt=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,I=null,A=null,w=new ut(0,0,0),R=0,M=!1,b=null,C=null,z=null,H=null,q=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ce=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(B)[1]),$=ce>=1):B.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),$=ce>=2);let de=null,fe={};const Te=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),$e=new At().fromArray(Te),ne=new At().fromArray(Ve);function oe(k,ve,j,le){const Ae=new Uint8Array(4),we=i.createTexture();i.bindTexture(k,we),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<j;et++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(ve+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return we}const _e={};_e[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),xe(i.DEPTH_TEST),o.setFunc(Nr),ee(!1),O(oh),xe(i.CULL_FACE),U(bs);function xe(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Ue(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Ge(k,ve){return h[k]!==ve?(i.bindFramebuffer(k,ve),h[k]=ve,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ve),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function ke(k,ve){let j=d,le=!1;if(k){j=f.get(ve),j===void 0&&(j=[],f.set(ve,j));const Ae=k.textures;if(j.length!==Ae.length||j[0]!==i.COLOR_ATTACHMENT0){for(let we=0,et=Ae.length;we<et;we++)j[we]=i.COLOR_ATTACHMENT0+we;j.length=Ae.length,le=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,le=!0);le&&i.drawBuffers(j)}function Qe(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const ae={[Gs]:i.FUNC_ADD,[r0]:i.FUNC_SUBTRACT,[o0]:i.FUNC_REVERSE_SUBTRACT};ae[a0]=i.MIN,ae[c0]=i.MAX;const me={[l0]:i.ZERO,[u0]:i.ONE,[h0]:i.SRC_COLOR,[Tl]:i.SRC_ALPHA,[x0]:i.SRC_ALPHA_SATURATE,[m0]:i.DST_COLOR,[d0]:i.DST_ALPHA,[f0]:i.ONE_MINUS_SRC_COLOR,[Al]:i.ONE_MINUS_SRC_ALPHA,[g0]:i.ONE_MINUS_DST_COLOR,[p0]:i.ONE_MINUS_DST_ALPHA,[_0]:i.CONSTANT_COLOR,[v0]:i.ONE_MINUS_CONSTANT_COLOR,[y0]:i.CONSTANT_ALPHA,[M0]:i.ONE_MINUS_CONSTANT_ALPHA};function U(k,ve,j,le,Ae,we,et,Nt,Wt,vt){if(k===bs){x===!0&&(Ue(i.BLEND),x=!1);return}if(x===!1&&(xe(i.BLEND),x=!0),k!==s0){if(k!==m||vt!==M){if((p!==Gs||_!==Gs)&&(i.blendEquation(i.FUNC_ADD),p=Gs,_=Gs),vt)switch(k){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ch:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}v=null,y=null,I=null,A=null,w.set(0,0,0),R=0,m=k,M=vt}return}Ae=Ae||ve,we=we||j,et=et||le,(ve!==p||Ae!==_)&&(i.blendEquationSeparate(ae[ve],ae[Ae]),p=ve,_=Ae),(j!==v||le!==y||we!==I||et!==A)&&(i.blendFuncSeparate(me[j],me[le],me[we],me[et]),v=j,y=le,I=we,A=et),(Nt.equals(w)===!1||Wt!==R)&&(i.blendColor(Nt.r,Nt.g,Nt.b,Wt),w.copy(Nt),R=Wt),m=k,M=!1}function ue(k,ve){k.side===Bt?Ue(i.CULL_FACE):xe(i.CULL_FACE);let j=k.side===Rn;ve&&(j=!j),ee(j),k.blending===Cr&&k.transparent===!1?U(bs):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const le=k.stencilWrite;a.setTest(le),le&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ge(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(k){b!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),b=k)}function O(k){k!==n0?(xe(i.CULL_FACE),k!==C&&(k===oh?i.cullFace(i.BACK):k===i0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),C=k}function Y(k){k!==z&&($&&i.lineWidth(k),z=k)}function ge(k,ve,j){k?(xe(i.POLYGON_OFFSET_FILL),(H!==ve||q!==j)&&(i.polygonOffset(ve,j),H=ve,q=j)):Ue(i.POLYGON_OFFSET_FILL)}function ye(k){k?xe(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function P(k){k===void 0&&(k=i.TEXTURE0+Z-1),de!==k&&(i.activeTexture(k),de=k)}function E(k,ve,j){j===void 0&&(de===null?j=i.TEXTURE0+Z-1:j=de);let le=fe[j];le===void 0&&(le={type:void 0,texture:void 0},fe[j]=le),(le.type!==k||le.texture!==ve)&&(de!==j&&(i.activeTexture(j),de=j),i.bindTexture(k,ve||_e[k]),le.type=k,le.texture=ve)}function G(){const k=fe[de];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function V(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(k){$e.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),$e.copy(k))}function Oe(k){ne.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function N(k,ve){let j=l.get(ve);j===void 0&&(j=new WeakMap,l.set(ve,j));let le=j.get(k);le===void 0&&(le=i.getUniformBlockIndex(ve,k.name),j.set(k,le))}function ie(k,ve){const le=l.get(ve).get(k);c.get(ve)!==le&&(i.uniformBlockBinding(ve,le,k.__bindingPointIndex),c.set(ve,le))}function Re(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},de=null,fe={},h={},f=new WeakMap,d=[],g=null,x=!1,m=null,p=null,v=null,y=null,_=null,I=null,A=null,w=new ut(0,0,0),R=0,M=!1,b=null,C=null,z=null,H=null,q=null,$e.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:xe,disable:Ue,bindFramebuffer:Ge,drawBuffers:ke,useProgram:Qe,setBlending:U,setMaterial:ue,setFlipSided:ee,setCullFace:O,setLineWidth:Y,setPolygonOffset:ge,setScissorTest:ye,activeTexture:P,bindTexture:E,unbindTexture:G,compressedTexImage2D:K,compressedTexImage3D:pe,texImage2D:Pe,texImage3D:ze,updateUBOMapping:N,uniformBlockBinding:ie,texStorage2D:ct,texStorage3D:V,texSubImage2D:he,texSubImage3D:Ie,compressedTexSubImage2D:Le,compressedTexSubImage3D:Ce,scissor:We,viewport:Oe,reset:Re}}function of(i,e,t,n){const s=o1(n);switch(t){case Wd:return i*e;case qd:return i*e;case Yd:return i*e*2;case Cu:return i*e/s.components*s.byteLength;case Pu:return i*e/s.components*s.byteLength;case $d:return i*e*2/s.components*s.byteLength;case Lu:return i*e*2/s.components*s.byteLength;case Xd:return i*e*3/s.components*s.byteLength;case fi:return i*e*4/s.components*s.byteLength;case Iu:return i*e*4/s.components*s.byteLength;case Ba:case za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:case zl:return Math.max(i,16)*Math.max(e,8)/4;case Ol:case Bl:return Math.max(i,8)*Math.max(e,8)/2;case Hl:case Vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case eu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case iu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ga:case su:case ru:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jd:case ou:return Math.ceil(i/4)*Math.ceil(e/4)*8;case au:case cu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function o1(i){switch(i){case ts:case Hd:return{byteLength:1,components:1};case Uo:case Vd:case Wo:return{byteLength:2,components:1};case Au:case Ru:return{byteLength:2,components:4};case $s:case Tu:case Mi:return{byteLength:4,components:1};case Gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function a1(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return d?new OffscreenCanvas(P,E):Fo("canvas")}function x(P,E,G){let K=1;const pe=ye(P);if((pe.width>G||pe.height>G)&&(K=G/Math.max(pe.width,pe.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const he=Math.floor(K*pe.width),Ie=Math.floor(K*pe.height);h===void 0&&(h=g(he,Ie));const Le=E?g(he,Ie):h;return Le.width=he,Le.height=Ie,Le.getContext("2d").drawImage(P,0,0,he,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+he+"x"+Ie+")."),Le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,E,G,K,pe=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let he=E;if(E===i.RED&&(G===i.FLOAT&&(he=i.R32F),G===i.HALF_FLOAT&&(he=i.R16F),G===i.UNSIGNED_BYTE&&(he=i.R8)),E===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(he=i.R8UI),G===i.UNSIGNED_SHORT&&(he=i.R16UI),G===i.UNSIGNED_INT&&(he=i.R32UI),G===i.BYTE&&(he=i.R8I),G===i.SHORT&&(he=i.R16I),G===i.INT&&(he=i.R32I)),E===i.RG&&(G===i.FLOAT&&(he=i.RG32F),G===i.HALF_FLOAT&&(he=i.RG16F),G===i.UNSIGNED_BYTE&&(he=i.RG8)),E===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(he=i.RG8UI),G===i.UNSIGNED_SHORT&&(he=i.RG16UI),G===i.UNSIGNED_INT&&(he=i.RG32UI),G===i.BYTE&&(he=i.RG8I),G===i.SHORT&&(he=i.RG16I),G===i.INT&&(he=i.RG32I)),E===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(he=i.RGB8UI),G===i.UNSIGNED_SHORT&&(he=i.RGB16UI),G===i.UNSIGNED_INT&&(he=i.RGB32UI),G===i.BYTE&&(he=i.RGB8I),G===i.SHORT&&(he=i.RGB16I),G===i.INT&&(he=i.RGB32I)),E===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(he=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(he=i.RGBA16UI),G===i.UNSIGNED_INT&&(he=i.RGBA32UI),G===i.BYTE&&(he=i.RGBA8I),G===i.SHORT&&(he=i.RGBA16I),G===i.INT&&(he=i.RGBA32I)),E===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(he=i.RGB9_E5),E===i.RGBA){const Ie=pe?tc:bt.getTransfer(K);G===i.FLOAT&&(he=i.RGBA32F),G===i.HALF_FLOAT&&(he=i.RGBA16F),G===i.UNSIGNED_BYTE&&(he=Ie===It?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(he=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(he=i.RGB5_A1)}return(he===i.R16F||he===i.R32F||he===i.RG16F||he===i.RG32F||he===i.RGBA16F||he===i.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function _(P,E){let G;return P?E===null||E===$s||E===Or?G=i.DEPTH24_STENCIL8:E===Mi?G=i.DEPTH32F_STENCIL8:E===Uo&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$s||E===Or?G=i.DEPTH_COMPONENT24:E===Mi?G=i.DEPTH_COMPONENT32F:E===Uo&&(G=i.DEPTH_COMPONENT16),G}function I(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Bn&&P.minFilter!==ti?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){const E=P.target;E.removeEventListener("dispose",A),R(E),E.isVideoTexture&&u.delete(E)}function w(P){const E=P.target;E.removeEventListener("dispose",w),b(E)}function R(P){const E=n.get(P);if(E.__webglInit===void 0)return;const G=P.source,K=f.get(G);if(K){const pe=K[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&M(P),Object.keys(K).length===0&&f.delete(G)}n.remove(P)}function M(P){const E=n.get(P);i.deleteTexture(E.__webglTexture);const G=P.source,K=f.get(G);delete K[E.__cacheKey],o.memory.textures--}function b(P){const E=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let pe=0;pe<E.__webglFramebuffer[K].length;pe++)i.deleteFramebuffer(E.__webglFramebuffer[K][pe]);else i.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)i.deleteFramebuffer(E.__webglFramebuffer[K]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=P.textures;for(let K=0,pe=G.length;K<pe;K++){const he=n.get(G[K]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),o.memory.textures--),n.remove(G[K])}n.remove(P)}let C=0;function z(){C=0}function H(){const P=C;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),C+=1,P}function q(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Z(P,E){const G=n.get(P);if(P.isVideoTexture&&Y(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(G,P,E);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+E)}function $(P,E){const G=n.get(P);if(P.version>0&&G.__version!==P.version){ne(G,P,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+E)}function ce(P,E){const G=n.get(P);if(P.version>0&&G.__version!==P.version){ne(G,P,E);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+E)}function B(P,E){const G=n.get(P);if(P.version>0&&G.__version!==P.version){oe(G,P,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+E)}const de={[Si]:i.REPEAT,[ys]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},fe={[Bn]:i.NEAREST,[zd]:i.NEAREST_MIPMAP_NEAREST,[So]:i.NEAREST_MIPMAP_LINEAR,[ti]:i.LINEAR,[Fa]:i.LINEAR_MIPMAP_NEAREST,[Ki]:i.LINEAR_MIPMAP_LINEAR},Te={[k0]:i.NEVER,[V0]:i.ALWAYS,[O0]:i.LESS,[Jd]:i.LEQUAL,[F0]:i.EQUAL,[H0]:i.GEQUAL,[B0]:i.GREATER,[z0]:i.NOTEQUAL};function Ve(P,E){if(E.type===Mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ti||E.magFilter===Fa||E.magFilter===So||E.magFilter===Ki||E.minFilter===ti||E.minFilter===Fa||E.minFilter===So||E.minFilter===Ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,de[E.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,de[E.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,de[E.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,fe[E.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,fe[E.minFilter]),E.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==So&&E.minFilter!==Ki||E.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function $e(P,E){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",A));const K=E.source;let pe=f.get(K);pe===void 0&&(pe={},f.set(K,pe));const he=q(E);if(he!==P.__cacheKey){pe[he]===void 0&&(pe[he]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),pe[he].usedTimes++;const Ie=pe[P.__cacheKey];Ie!==void 0&&(pe[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&M(E)),P.__cacheKey=he,P.__webglTexture=pe[he].texture}return G}function ne(P,E,G){let K=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=i.TEXTURE_3D);const pe=$e(P,E),he=E.source;t.bindTexture(K,P.__webglTexture,i.TEXTURE0+G);const Ie=n.get(he);if(he.version!==Ie.__version||pe===!0){t.activeTexture(i.TEXTURE0+G);const Le=bt.getPrimaries(bt.workingColorSpace),Ce=E.colorSpace===_s?null:bt.getPrimaries(E.colorSpace),ct=E.colorSpace===_s||Le===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let V=x(E.image,!1,s.maxTextureSize);V=ge(E,V);const Pe=r.convert(E.format,E.colorSpace),ze=r.convert(E.type);let We=y(E.internalFormat,Pe,ze,E.colorSpace,E.isVideoTexture);Ve(K,E);let Oe;const N=E.mipmaps,ie=E.isVideoTexture!==!0,Re=Ie.__version===void 0||pe===!0,k=he.dataReady,ve=I(E,V);if(E.isDepthTexture)We=_(E.format===Fr,E.type),Re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,We,V.width,V.height):t.texImage2D(i.TEXTURE_2D,0,We,V.width,V.height,0,Pe,ze,null));else if(E.isDataTexture)if(N.length>0){ie&&Re&&t.texStorage2D(i.TEXTURE_2D,ve,We,N[0].width,N[0].height);for(let j=0,le=N.length;j<le;j++)Oe=N[j],ie?k&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Oe.width,Oe.height,Pe,ze,Oe.data):t.texImage2D(i.TEXTURE_2D,j,We,Oe.width,Oe.height,0,Pe,ze,Oe.data);E.generateMipmaps=!1}else ie?(Re&&t.texStorage2D(i.TEXTURE_2D,ve,We,V.width,V.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,V.width,V.height,Pe,ze,V.data)):t.texImage2D(i.TEXTURE_2D,0,We,V.width,V.height,0,Pe,ze,V.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,We,N[0].width,N[0].height,V.depth);for(let j=0,le=N.length;j<le;j++)if(Oe=N[j],E.format!==fi)if(Pe!==null)if(ie){if(k)if(E.layerUpdates.size>0){const Ae=of(Oe.width,Oe.height,E.format,E.type);for(const we of E.layerUpdates){const et=Oe.data.subarray(we*Ae/Oe.data.BYTES_PER_ELEMENT,(we+1)*Ae/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,we,Oe.width,Oe.height,1,Pe,et)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Oe.width,Oe.height,V.depth,Pe,Oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,We,Oe.width,Oe.height,V.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,Oe.width,Oe.height,V.depth,Pe,ze,Oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,We,Oe.width,Oe.height,V.depth,0,Pe,ze,Oe.data)}else{ie&&Re&&t.texStorage2D(i.TEXTURE_2D,ve,We,N[0].width,N[0].height);for(let j=0,le=N.length;j<le;j++)Oe=N[j],E.format!==fi?Pe!==null?ie?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,Oe.width,Oe.height,Pe,Oe.data):t.compressedTexImage2D(i.TEXTURE_2D,j,We,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?k&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Oe.width,Oe.height,Pe,ze,Oe.data):t.texImage2D(i.TEXTURE_2D,j,We,Oe.width,Oe.height,0,Pe,ze,Oe.data)}else if(E.isDataArrayTexture)if(ie){if(Re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,We,V.width,V.height,V.depth),k)if(E.layerUpdates.size>0){const j=of(V.width,V.height,E.format,E.type);for(const le of E.layerUpdates){const Ae=V.data.subarray(le*j/V.data.BYTES_PER_ELEMENT,(le+1)*j/V.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,le,V.width,V.height,1,Pe,ze,Ae)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,Pe,ze,V.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,V.width,V.height,V.depth,0,Pe,ze,V.data);else if(E.isData3DTexture)ie?(Re&&t.texStorage3D(i.TEXTURE_3D,ve,We,V.width,V.height,V.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,Pe,ze,V.data)):t.texImage3D(i.TEXTURE_3D,0,We,V.width,V.height,V.depth,0,Pe,ze,V.data);else if(E.isFramebufferTexture){if(Re)if(ie)t.texStorage2D(i.TEXTURE_2D,ve,We,V.width,V.height);else{let j=V.width,le=V.height;for(let Ae=0;Ae<ve;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,We,j,le,0,Pe,ze,null),j>>=1,le>>=1}}else if(N.length>0){if(ie&&Re){const j=ye(N[0]);t.texStorage2D(i.TEXTURE_2D,ve,We,j.width,j.height)}for(let j=0,le=N.length;j<le;j++)Oe=N[j],ie?k&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,Pe,ze,Oe):t.texImage2D(i.TEXTURE_2D,j,We,Pe,ze,Oe);E.generateMipmaps=!1}else if(ie){if(Re){const j=ye(V);t.texStorage2D(i.TEXTURE_2D,ve,We,j.width,j.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Pe,ze,V)}else t.texImage2D(i.TEXTURE_2D,0,We,Pe,ze,V);m(E)&&p(K),Ie.__version=he.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function oe(P,E,G){if(E.image.length!==6)return;const K=$e(P,E),pe=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);const he=n.get(pe);if(pe.version!==he.__version||K===!0){t.activeTexture(i.TEXTURE0+G);const Ie=bt.getPrimaries(bt.workingColorSpace),Le=E.colorSpace===_s?null:bt.getPrimaries(E.colorSpace),Ce=E.colorSpace===_s||Ie===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ct=E.isCompressedTexture||E.image[0].isCompressedTexture,V=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let le=0;le<6;le++)!ct&&!V?Pe[le]=x(E.image[le],!0,s.maxCubemapSize):Pe[le]=V?E.image[le].image:E.image[le],Pe[le]=ge(E,Pe[le]);const ze=Pe[0],We=r.convert(E.format,E.colorSpace),Oe=r.convert(E.type),N=y(E.internalFormat,We,Oe,E.colorSpace),ie=E.isVideoTexture!==!0,Re=he.__version===void 0||K===!0,k=pe.dataReady;let ve=I(E,ze);Ve(i.TEXTURE_CUBE_MAP,E);let j;if(ct){ie&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,N,ze.width,ze.height);for(let le=0;le<6;le++){j=Pe[le].mipmaps;for(let Ae=0;Ae<j.length;Ae++){const we=j[Ae];E.format!==fi?We!==null?ie?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,we.width,we.height,We,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,N,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,we.width,we.height,We,Oe,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,N,we.width,we.height,0,We,Oe,we.data)}}}else{if(j=E.mipmaps,ie&&Re){j.length>0&&ve++;const le=ye(Pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,N,le.width,le.height)}for(let le=0;le<6;le++)if(V){ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Pe[le].width,Pe[le].height,We,Oe,Pe[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,N,Pe[le].width,Pe[le].height,0,We,Oe,Pe[le].data);for(let Ae=0;Ae<j.length;Ae++){const et=j[Ae].image[le].image;ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,et.width,et.height,We,Oe,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,N,et.width,et.height,0,We,Oe,et.data)}}else{ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,We,Oe,Pe[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,N,We,Oe,Pe[le]);for(let Ae=0;Ae<j.length;Ae++){const we=j[Ae];ie?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,We,Oe,we.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,N,We,Oe,we.image[le])}}}m(E)&&p(i.TEXTURE_CUBE_MAP),he.__version=pe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function _e(P,E,G,K,pe,he){const Ie=r.convert(G.format,G.colorSpace),Le=r.convert(G.type),Ce=y(G.internalFormat,Ie,Le,G.colorSpace),ct=n.get(E),V=n.get(G);if(V.__renderTarget=E,!ct.__hasExternalTextures){const Pe=Math.max(1,E.width>>he),ze=Math.max(1,E.height>>he);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,he,Ce,Pe,ze,E.depth,0,Ie,Le,null):t.texImage2D(pe,he,Ce,Pe,ze,0,Ie,Le,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),O(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,pe,V.__webglTexture,0,ee(E)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,pe,V.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(P,E,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),E.depthBuffer){const K=E.depthTexture,pe=K&&K.isDepthTexture?K.type:null,he=_(E.stencilBuffer,pe),Ie=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=ee(E);O(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,he,E.width,E.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,he,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,he,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,P)}else{const K=E.textures;for(let pe=0;pe<K.length;pe++){const he=K[pe],Ie=r.convert(he.format,he.colorSpace),Le=r.convert(he.type),Ce=y(he.internalFormat,Ie,Le,he.colorSpace),ct=ee(E);G&&O(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Ce,E.width,E.height):O(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Ce,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Z(E.depthTexture,0);const pe=K.__webglTexture,he=ee(E);if(E.depthTexture.format===Pr)O(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(E.depthTexture.format===Fr)O(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Ge(P){const E=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",pe)};K.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=K}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ue(E.__webglFramebuffer,P)}else if(G){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=i.createRenderbuffer(),xe(E.__webglDepthbuffer[K],P,!1);else{const pe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=E.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,he)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),xe(E.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,pe)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(P,E,G){const K=n.get(P);E!==void 0&&_e(K.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ge(P)}function Qe(P){const E=P.texture,G=n.get(P),K=n.get(E);P.addEventListener("dispose",w);const pe=P.textures,he=P.isWebGLCubeRenderTarget===!0,Ie=pe.length>1;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=E.version,o.memory.textures++),he){G.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Le]=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)G.__webglFramebuffer[Le][Ce]=i.createFramebuffer()}else G.__webglFramebuffer[Le]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Le=0;Le<E.mipmaps.length;Le++)G.__webglFramebuffer[Le]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let Le=0,Ce=pe.length;Le<Ce;Le++){const ct=n.get(pe[Le]);ct.__webglTexture===void 0&&(ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&O(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Le=0;Le<pe.length;Le++){const Ce=pe[Le];G.__webglColorRenderbuffer[Le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Le]);const ct=r.convert(Ce.format,Ce.colorSpace),V=r.convert(Ce.type),Pe=y(Ce.internalFormat,ct,V,Ce.colorSpace,P.isXRRenderTarget===!0),ze=ee(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,ze,Pe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,G.__webglColorRenderbuffer[Le])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),xe(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,E);for(let Le=0;Le<6;Le++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ce=0;Ce<E.mipmaps.length;Ce++)_e(G.__webglFramebuffer[Le][Ce],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ce);else _e(G.__webglFramebuffer[Le],P,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);m(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let Le=0,Ce=pe.length;Le<Ce;Le++){const ct=pe[Le],V=n.get(ct);t.bindTexture(i.TEXTURE_2D,V.__webglTexture),Ve(i.TEXTURE_2D,ct),_e(G.__webglFramebuffer,P,ct,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,0),m(ct)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Le=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Le,K.__webglTexture),Ve(Le,E),E.mipmaps&&E.mipmaps.length>0)for(let Ce=0;Ce<E.mipmaps.length;Ce++)_e(G.__webglFramebuffer[Ce],P,E,i.COLOR_ATTACHMENT0,Le,Ce);else _e(G.__webglFramebuffer,P,E,i.COLOR_ATTACHMENT0,Le,0);m(E)&&p(Le),t.unbindTexture()}P.depthBuffer&&Ge(P)}function ae(P){const E=P.textures;for(let G=0,K=E.length;G<K;G++){const pe=E[G];if(m(pe)){const he=v(P),Ie=n.get(pe).__webglTexture;t.bindTexture(he,Ie),p(he),t.unbindTexture()}}}const me=[],U=[];function ue(P){if(P.samples>0){if(O(P)===!1){const E=P.textures,G=P.width,K=P.height;let pe=i.COLOR_BUFFER_BIT;const he=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(P),Le=E.length>1;if(Le)for(let Ce=0;Ce<E.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ce=0;Ce<E.length;Ce++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),Le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);const ct=n.get(E[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,G,K,0,0,G,K,pe,i.NEAREST),c===!0&&(me.length=0,U.length=0,me.push(i.COLOR_ATTACHMENT0+Ce),P.depthBuffer&&P.resolveDepthBuffer===!1&&(me.push(he),U.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Le)for(let Ce=0;Ce<E.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);const ct=n.get(E[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ct,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const E=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ee(P){return Math.min(s.maxSamples,P.samples)}function O(P){const E=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(P){const E=o.render.frame;u.get(P)!==E&&(u.set(P,E),P.update())}function ge(P,E){const G=P.colorSpace,K=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==zn&&G!==_s&&(bt.getTransfer(G)===It?(K!==fi||pe!==ts)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function ye(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=$,this.setTexture3D=ce,this.setTextureCube=B,this.rebindTextures=ke,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=O}function c1(i,e){function t(n,s=_s){let r;const o=bt.getTransfer(s);if(n===ts)return i.UNSIGNED_BYTE;if(n===Au)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ru)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hd)return i.BYTE;if(n===Vd)return i.SHORT;if(n===Uo)return i.UNSIGNED_SHORT;if(n===Tu)return i.INT;if(n===$s)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===Wo)return i.HALF_FLOAT;if(n===Wd)return i.ALPHA;if(n===Xd)return i.RGB;if(n===fi)return i.RGBA;if(n===qd)return i.LUMINANCE;if(n===Yd)return i.LUMINANCE_ALPHA;if(n===Pr)return i.DEPTH_COMPONENT;if(n===Fr)return i.DEPTH_STENCIL;if(n===Cu)return i.RED;if(n===Pu)return i.RED_INTEGER;if(n===$d)return i.RG;if(n===Lu)return i.RG_INTEGER;if(n===Iu)return i.RGBA_INTEGER;if(n===Ba||n===za||n===Ha||n===Va)if(o===It)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ba)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ba)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ha)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ol||n===Fl||n===Bl||n===zl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hl||n===Vl||n===Gl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hl||n===Vl)return o===It?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wl||n===Xl||n===ql||n===Yl||n===$l||n===jl||n===Kl||n===Zl||n===Jl||n===Ql||n===eu||n===tu||n===nu||n===iu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ql)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Yl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$l)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Kl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jl)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===iu)return o===It?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ga||n===su||n===ru)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ga)return o===It?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===su)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ru)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jd||n===ou||n===au||n===cu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ga)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ou)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===au)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Or?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class l1 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rt extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u1={type:"move"};class zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const h1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f1=`
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

}`;class d1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new an,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Es({vertexShader:h1,fragmentShader:f1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p1 extends Qs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const x=new d1,m=t.getContextAttributes();let p=null,v=null;const y=[],_=[],I=new Me;let A=null;const w=new kn;w.viewport=new At;const R=new kn;R.viewport=new At;const M=[w,R],b=new l1;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let oe=y[ne];return oe===void 0&&(oe=new zc,y[ne]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ne){let oe=y[ne];return oe===void 0&&(oe=new zc,y[ne]=oe),oe.getGripSpace()},this.getHand=function(ne){let oe=y[ne];return oe===void 0&&(oe=new zc,y[ne]=oe),oe.getHandSpace()};function H(ne){const oe=_.indexOf(ne.inputSource);if(oe===-1)return;const _e=y[oe];_e!==void 0&&(_e.update(ne.inputSource,ne.frame,l||o),_e.dispatchEvent({type:ne.type,data:ne.inputSource}))}function q(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<y.length;ne++){const oe=_[ne];oe!==null&&(_[ne]=null,y[ne].disconnect(oe))}C=null,z=null,x.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,v=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",q),s.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new js(d.framebufferWidth,d.framebufferHeight,{format:fi,type:ts,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,_e=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?Fr:Pr,_e=m.stencil?Or:$s);const Ue={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Ue),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new js(f.textureWidth,f.textureHeight,{format:fi,type:ts,depthTexture:new lp(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(ne){for(let oe=0;oe<ne.removed.length;oe++){const _e=ne.removed[oe],xe=_.indexOf(_e);xe>=0&&(_[xe]=null,y[xe].disconnect(_e))}for(let oe=0;oe<ne.added.length;oe++){const _e=ne.added[oe];let xe=_.indexOf(_e);if(xe===-1){for(let Ge=0;Ge<y.length;Ge++)if(Ge>=_.length){_.push(_e),xe=Ge;break}else if(_[Ge]===null){_[Ge]=_e,xe=Ge;break}if(xe===-1)break}const Ue=y[xe];Ue&&Ue.connect(_e)}}const $=new D,ce=new D;function B(ne,oe,_e){$.setFromMatrixPosition(oe.matrixWorld),ce.setFromMatrixPosition(_e.matrixWorld);const xe=$.distanceTo(ce),Ue=oe.projectionMatrix.elements,Ge=_e.projectionMatrix.elements,ke=Ue[14]/(Ue[10]-1),Qe=Ue[14]/(Ue[10]+1),ae=(Ue[9]+1)/Ue[5],me=(Ue[9]-1)/Ue[5],U=(Ue[8]-1)/Ue[0],ue=(Ge[8]+1)/Ge[0],ee=ke*U,O=ke*ue,Y=xe/(-U+ue),ge=Y*-U;if(oe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ge),ne.translateZ(Y),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ue[10]===-1)ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const ye=ke+Y,P=Qe+Y,E=ee-ge,G=O+(xe-ge),K=ae*Qe/P*ye,pe=me*Qe/P*ye;ne.projectionMatrix.makePerspective(E,G,K,pe,ye,P),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function de(ne,oe){oe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(oe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let oe=ne.near,_e=ne.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(_e=x.depthFar)),b.near=R.near=w.near=oe,b.far=R.far=w.far=_e,(C!==b.near||z!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,z=b.far),w.layers.mask=ne.layers.mask|2,R.layers.mask=ne.layers.mask|4,b.layers.mask=w.layers.mask|R.layers.mask;const xe=ne.parent,Ue=b.cameras;de(b,xe);for(let Ge=0;Ge<Ue.length;Ge++)de(Ue[Ge],xe);Ue.length===2?B(b,w,R):b.projectionMatrix.copy(w.projectionMatrix),fe(ne,b,xe)};function fe(ne,oe,_e){_e===null?ne.matrix.copy(oe.matrixWorld):(ne.matrix.copy(_e.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(oe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Br*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ne){c=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let Te=null;function Ve(ne,oe){if(u=oe.getViewerPose(l||o),g=oe,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let xe=!1;_e.length!==b.cameras.length&&(b.cameras.length=0,xe=!0);for(let Ge=0;Ge<_e.length;Ge++){const ke=_e[Ge];let Qe=null;if(d!==null)Qe=d.getViewport(ke);else{const me=h.getViewSubImage(f,ke);Qe=me.viewport,Ge===0&&(e.setRenderTargetTextures(v,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(v))}let ae=M[Ge];ae===void 0&&(ae=new kn,ae.layers.enable(Ge),ae.viewport=new At,M[Ge]=ae),ae.matrix.fromArray(ke.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ke.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ge===0&&(b.matrix.copy(ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),xe===!0&&b.cameras.push(ae)}const Ue=s.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Ge=h.getDepthInformation(_e[0]);Ge&&Ge.isValid&&Ge.texture&&x.init(e,Ge,s.renderState)}}for(let _e=0;_e<y.length;_e++){const xe=_[_e],Ue=y[_e];xe!==null&&Ue!==void 0&&Ue.update(xe,oe,l||o)}Te&&Te(ne,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const $e=new cp;$e.setAnimationLoop(Ve),this.setAnimationLoop=function(ne){Te=ne},this.dispose=function(){}}}const Ns=new Pn,m1=new ht;function g1(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,Ns.copy(_),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),m.envMapRotation.value.setFromMatrix4(m1.makeRotationFromEuler(Ns)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function x1(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const _=y.program;n.uniformBlockBinding(v,_)}function l(v,y){let _=s[v.id];_===void 0&&(g(v),_=u(v),s[v.id]=_,v.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(v,I);const A=e.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function u(v){const y=h();v.__bindingPointIndex=y;const _=i.createBuffer(),I=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],_=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,w=_.length;A<w;A++){const R=Array.isArray(_[A])?_[A]:[_[A]];for(let M=0,b=R.length;M<b;M++){const C=R[M];if(d(C,A,M,I)===!0){const z=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let Z=0;Z<H.length;Z++){const $=H[Z],ce=x($);typeof $=="number"||typeof $=="boolean"?(C.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,z+q,C.__data)):$.isMatrix3?(C.__data[0]=$.elements[0],C.__data[1]=$.elements[1],C.__data[2]=$.elements[2],C.__data[3]=0,C.__data[4]=$.elements[3],C.__data[5]=$.elements[4],C.__data[6]=$.elements[5],C.__data[7]=0,C.__data[8]=$.elements[6],C.__data[9]=$.elements[7],C.__data[10]=$.elements[8],C.__data[11]=0):($.toArray(C.__data,q),q+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,y,_,I){const A=v.value,w=y+"_"+_;if(I[w]===void 0)return typeof A=="number"||typeof A=="boolean"?I[w]=A:I[w]=A.clone(),!0;{const R=I[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return I[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(v){const y=v.uniforms;let _=0;const I=16;for(let w=0,R=y.length;w<R;w++){const M=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,C=M.length;b<C;b++){const z=M[b],H=Array.isArray(z.value)?z.value:[z.value];for(let q=0,Z=H.length;q<Z;q++){const $=H[q],ce=x($),B=_%I,de=B%ce.boundary,fe=B+de;_+=de,fe!==0&&I-fe<ce.storage&&(_+=I-fe),z.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=_,_+=ce.storage}}}const A=_%I;return A>0&&(_+=I-A),v.__size=_,v.__cache={},this}function x(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class _1{constructor(e={}){const{canvas:t=om(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const v=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Et,this.toneMapping=ws,this.toneMappingExposure=1;const _=this;let I=!1,A=0,w=0,R=null,M=-1,b=null;const C=new At,z=new At;let H=null;const q=new ut(0);let Z=0,$=t.width,ce=t.height,B=1,de=null,fe=null;const Te=new At(0,0,$,ce),Ve=new At(0,0,$,ce);let $e=!1;const ne=new Uu;let oe=!1,_e=!1;const xe=new ht,Ue=new ht,Ge=new D,ke=new At,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ae=!1;function me(){return R===null?B:1}let U=n;function ue(L,W){return t.getContext(L,W)}try{const L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eu}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",we,!1),U===null){const W="webgl2";if(U=ue(W,L),U===null)throw ue(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ee,O,Y,ge,ye,P,E,G,K,pe,he,Ie,Le,Ce,ct,V,Pe,ze,We,Oe,N,ie,Re,k;function ve(){ee=new w_(U),ee.init(),ie=new c1(U,ee),O=new x_(U,ee,e,ie),Y=new r1(U,ee),O.reverseDepthBuffer&&f&&Y.buffers.depth.setReversed(!0),ge=new T_(U),ye=new Wv,P=new a1(U,ee,Y,ye,O,ie,ge),E=new v_(_),G=new b_(_),K=new Dm(U),Re=new m_(U,K),pe=new S_(U,K,ge,Re),he=new R_(U,pe,K,ge),We=new A_(U,O,P),V=new __(ye),Ie=new Gv(_,E,G,ee,O,Re,V),Le=new g1(_,ye),Ce=new qv,ct=new Jv(ee),ze=new p_(_,E,G,Y,he,d,c),Pe=new i1(_,he,O),k=new x1(U,ge,O,Y),Oe=new g_(U,ee,ge),N=new E_(U,ee,ge),ge.programs=Ie.programs,_.capabilities=O,_.extensions=ee,_.properties=ye,_.renderLists=Ce,_.shadowMap=Pe,_.state=Y,_.info=ge}ve();const j=new p1(_,U);this.xr=j,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const L=ee.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=ee.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(L){L!==void 0&&(B=L,this.setSize($,ce,!1))},this.getSize=function(L){return L.set($,ce)},this.setSize=function(L,W,te=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=L,ce=W,t.width=Math.floor(L*B),t.height=Math.floor(W*B),te===!0&&(t.style.width=L+"px",t.style.height=W+"px"),this.setViewport(0,0,L,W)},this.getDrawingBufferSize=function(L){return L.set($*B,ce*B).floor()},this.setDrawingBufferSize=function(L,W,te){$=L,ce=W,B=te,t.width=Math.floor(L*te),t.height=Math.floor(W*te),this.setViewport(0,0,L,W)},this.getCurrentViewport=function(L){return L.copy(C)},this.getViewport=function(L){return L.copy(Te)},this.setViewport=function(L,W,te,J){L.isVector4?Te.set(L.x,L.y,L.z,L.w):Te.set(L,W,te,J),Y.viewport(C.copy(Te).multiplyScalar(B).round())},this.getScissor=function(L){return L.copy(Ve)},this.setScissor=function(L,W,te,J){L.isVector4?Ve.set(L.x,L.y,L.z,L.w):Ve.set(L,W,te,J),Y.scissor(z.copy(Ve).multiplyScalar(B).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(L){Y.setScissorTest($e=L)},this.setOpaqueSort=function(L){de=L},this.setTransparentSort=function(L){fe=L},this.getClearColor=function(L){return L.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(L=!0,W=!0,te=!0){let J=0;if(L){let X=!1;if(R!==null){const De=R.texture.format;X=De===Iu||De===Lu||De===Pu}if(X){const De=R.texture.type,Be=De===ts||De===$s||De===Uo||De===Or||De===Au||De===Ru,Ze=ze.getClearColor(),je=ze.getClearAlpha(),lt=Ze.r,ft=Ze.g,Xe=Ze.b;Be?(g[0]=lt,g[1]=ft,g[2]=Xe,g[3]=je,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=lt,x[1]=ft,x[2]=Xe,x[3]=je,U.clearBufferiv(U.COLOR,0,x))}else J|=U.COLOR_BUFFER_BIT}W&&(J|=U.DEPTH_BUFFER_BIT),te&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",we,!1),Ce.dispose(),ct.dispose(),ye.dispose(),E.dispose(),G.dispose(),he.dispose(),Re.dispose(),k.dispose(),Ie.dispose(),j.dispose(),j.removeEventListener("sessionstart",er),j.removeEventListener("sessionend",St),fn.stop()};function le(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const L=ge.autoReset,W=Pe.enabled,te=Pe.autoUpdate,J=Pe.needsUpdate,X=Pe.type;ve(),ge.autoReset=L,Pe.enabled=W,Pe.autoUpdate=te,Pe.needsUpdate=J,Pe.type=X}function we(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function et(L){const W=L.target;W.removeEventListener("dispose",et),Nt(W)}function Nt(L){Wt(L),ye.remove(L)}function Wt(L){const W=ye.get(L).programs;W!==void 0&&(W.forEach(function(te){Ie.releaseProgram(te)}),L.isShaderMaterial&&Ie.releaseShaderCache(L))}this.renderBufferDirect=function(L,W,te,J,X,De){W===null&&(W=Qe);const Be=X.isMesh&&X.matrixWorld.determinant()<0,Ze=tr(L,W,te,J,X);Y.setMaterial(J,Be);let je=te.index,lt=1;if(J.wireframe===!0){if(je=pe.getWireframeAttribute(te),je===void 0)return;lt=2}const ft=te.drawRange,Xe=te.attributes.position;let mt=ft.start*lt,F=(ft.start+ft.count)*lt;De!==null&&(mt=Math.max(mt,De.start*lt),F=Math.min(F,(De.start+De.count)*lt)),je!==null?(mt=Math.max(mt,0),F=Math.min(F,je.count)):Xe!=null&&(mt=Math.max(mt,0),F=Math.min(F,Xe.count));const se=F-mt;if(se<0||se===1/0)return;Re.setup(X,J,Ze,te,je);let Ee,be=Oe;if(je!==null&&(Ee=K.get(je),be=N,be.setIndex(Ee)),X.isMesh)J.wireframe===!0?(Y.setLineWidth(J.wireframeLinewidth*me()),be.setMode(U.LINES)):be.setMode(U.TRIANGLES);else if(X.isLine){let Ne=J.linewidth;Ne===void 0&&(Ne=1),Y.setLineWidth(Ne*me()),X.isLineSegments?be.setMode(U.LINES):X.isLineLoop?be.setMode(U.LINE_LOOP):be.setMode(U.LINE_STRIP)}else X.isPoints?be.setMode(U.POINTS):X.isSprite&&be.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)be.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))be.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ne=X._multiDrawStarts,$t=X._multiDrawCounts,Mt=X._multiDrawCount,jt=je?K.get(je).bytesPerElement:1,ss=ye.get(J).currentProgram.getUniforms();for(let jn=0;jn<Mt;jn++)ss.setValue(U,"_gl_DrawID",jn),be.render(Ne[jn]/jt,$t[jn])}else if(X.isInstancedMesh)be.renderInstances(mt,se,X.count);else if(te.isInstancedBufferGeometry){const Ne=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,$t=Math.min(te.instanceCount,Ne);be.renderInstances(mt,se,$t)}else be.render(mt,se)};function vt(L,W,te){L.transparent===!0&&L.side===Bt&&L.forceSinglePass===!1?(L.side=Rn,L.needsUpdate=!0,Ti(L,W,te),L.side=es,L.needsUpdate=!0,Ti(L,W,te),L.side=Bt):Ti(L,W,te)}this.compile=function(L,W,te=null){te===null&&(te=L),p=ct.get(te),p.init(W),y.push(p),te.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),L!==te&&L.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const J=new Set;return L.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const De=X.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const Ze=De[Be];vt(Ze,te,X),J.add(Ze)}else vt(De,te,X),J.add(De)}),y.pop(),p=null,J},this.compileAsync=function(L,W,te=null){const J=this.compile(L,W,te);return new Promise(X=>{function De(){if(J.forEach(function(Be){ye.get(Be).currentProgram.isReady()&&J.delete(Be)}),J.size===0){X(L);return}setTimeout(De,10)}ee.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Yn=null;function $n(L){Yn&&Yn(L)}function er(){fn.stop()}function St(){fn.start()}const fn=new cp;fn.setAnimationLoop($n),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(L){Yn=L,j.setAnimationLoop(L),L===null?fn.stop():fn.start()},j.addEventListener("sessionstart",er),j.addEventListener("sessionend",St),this.render=function(L,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(W),W=j.getCamera()),L.isScene===!0&&L.onBeforeRender(_,L,W,R),p=ct.get(L,y.length),p.init(W),y.push(p),Ue.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),ne.setFromProjectionMatrix(Ue),_e=this.localClippingEnabled,oe=V.init(this.clippingPlanes,_e),m=Ce.get(L,v.length),m.init(),v.push(m),j.enabled===!0&&j.isPresenting===!0){const De=_.xr.getDepthSensingMesh();De!==null&&In(De,W,-1/0,_.sortObjects)}In(L,W,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(de,fe),ae=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ae&&ze.addToRenderList(m,L),this.info.render.frame++,oe===!0&&V.beginShadows();const te=p.state.shadowsArray;Pe.render(te,L,W),oe===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,X=m.transmissive;if(p.setupLights(),W.isArrayCamera){const De=W.cameras;if(X.length>0)for(let Be=0,Ze=De.length;Be<Ze;Be++){const je=De[Be];ns(J,X,L,je)}ae&&ze.render(L);for(let Be=0,Ze=De.length;Be<Ze;Be++){const je=De[Be];Rs(m,L,je,je.viewport)}}else X.length>0&&ns(J,X,L,W),ae&&ze.render(L),Rs(m,L,W);R!==null&&(P.updateMultisampleRenderTarget(R),P.updateRenderTargetMipmap(R)),L.isScene===!0&&L.onAfterRender(_,L,W),Re.resetDefaultState(),M=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],oe===!0&&V.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function In(L,W,te,J){if(L.visible===!1)return;if(L.layers.test(W.layers)){if(L.isGroup)te=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(W);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||ne.intersectsSprite(L)){J&&ke.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ue);const Be=he.update(L),Ze=L.material;Ze.visible&&m.push(L,Be,Ze,te,ke.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||ne.intersectsObject(L))){const Be=he.update(L),Ze=L.material;if(J&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ke.copy(L.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),ke.copy(Be.boundingSphere.center)),ke.applyMatrix4(L.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ze)){const je=Be.groups;for(let lt=0,ft=je.length;lt<ft;lt++){const Xe=je[lt],mt=Ze[Xe.materialIndex];mt&&mt.visible&&m.push(L,Be,mt,te,ke.z,Xe)}}else Ze.visible&&m.push(L,Be,Ze,te,ke.z,null)}}const De=L.children;for(let Be=0,Ze=De.length;Be<Ze;Be++)In(De[Be],W,te,J)}function Rs(L,W,te,J){const X=L.opaque,De=L.transmissive,Be=L.transparent;p.setupLightsView(te),oe===!0&&V.setGlobalState(_.clippingPlanes,te),J&&Y.viewport(C.copy(J)),X.length>0&&is(X,W,te),De.length>0&&is(De,W,te),Be.length>0&&is(Be,W,te),Y.buffers.depth.setTest(!0),Y.buffers.depth.setMask(!0),Y.buffers.color.setMask(!0),Y.setPolygonOffset(!1)}function ns(L,W,te,J){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new js(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Wo:ts,minFilter:Ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const De=p.state.transmissionRenderTarget[J.id],Be=J.viewport||C;De.setSize(Be.z,Be.w);const Ze=_.getRenderTarget();_.setRenderTarget(De),_.getClearColor(q),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),ae&&ze.render(te);const je=_.toneMapping;_.toneMapping=ws;const lt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),oe===!0&&V.setGlobalState(_.clippingPlanes,J),is(L,te,J),P.updateMultisampleRenderTarget(De),P.updateRenderTargetMipmap(De),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Xe=0,mt=W.length;Xe<mt;Xe++){const F=W[Xe],se=F.object,Ee=F.geometry,be=F.material,Ne=F.group;if(be.side===Bt&&se.layers.test(J.layers)){const $t=be.side;be.side=Rn,be.needsUpdate=!0,Jr(se,te,J,Ee,be,Ne),be.side=$t,be.needsUpdate=!0,ft=!0}}ft===!0&&(P.updateMultisampleRenderTarget(De),P.updateRenderTargetMipmap(De))}_.setRenderTarget(Ze),_.setClearColor(q,Z),lt!==void 0&&(J.viewport=lt),_.toneMapping=je}function is(L,W,te){const J=W.isScene===!0?W.overrideMaterial:null;for(let X=0,De=L.length;X<De;X++){const Be=L[X],Ze=Be.object,je=Be.geometry,lt=J===null?Be.material:J,ft=Be.group;Ze.layers.test(te.layers)&&Jr(Ze,W,te,je,lt,ft)}}function Jr(L,W,te,J,X,De){L.onBeforeRender(_,W,te,J,X,De),L.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),X.onBeforeRender(_,W,te,J,L,De),X.transparent===!0&&X.side===Bt&&X.forceSinglePass===!1?(X.side=Rn,X.needsUpdate=!0,_.renderBufferDirect(te,W,J,X,L,De),X.side=es,X.needsUpdate=!0,_.renderBufferDirect(te,W,J,X,L,De),X.side=Bt):_.renderBufferDirect(te,W,J,X,L,De),L.onAfterRender(_,W,te,J,X,De)}function Ti(L,W,te){W.isScene!==!0&&(W=Qe);const J=ye.get(L),X=p.state.lights,De=p.state.shadowsArray,Be=X.state.version,Ze=Ie.getParameters(L,X.state,De,W,te),je=Ie.getProgramCacheKey(Ze);let lt=J.programs;J.environment=L.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(L.isMeshStandardMaterial?G:E).get(L.envMap||J.environment),J.envMapRotation=J.environment!==null&&L.envMap===null?W.environmentRotation:L.envMapRotation,lt===void 0&&(L.addEventListener("dispose",et),lt=new Map,J.programs=lt);let ft=lt.get(je);if(ft!==void 0){if(J.currentProgram===ft&&J.lightsStateVersion===Be)return eo(L,Ze),ft}else Ze.uniforms=Ie.getUniforms(L),L.onBeforeCompile(Ze,_),ft=Ie.acquireProgram(Ze,je),lt.set(je,ft),J.uniforms=Ze.uniforms;const Xe=J.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Xe.clippingPlanes=V.uniform),eo(L,Ze),J.needsLights=ri(L),J.lightsStateVersion=Be,J.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=ft,J.uniformsList=null,ft}function Qr(L){if(L.uniformsList===null){const W=L.currentProgram.getUniforms();L.uniformsList=Wa.seqWithValue(W.seq,L.uniforms)}return L.uniformsList}function eo(L,W){const te=ye.get(L);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function tr(L,W,te,J,X){W.isScene!==!0&&(W=Qe),P.resetTextureUnits();const De=W.fog,Be=J.isMeshStandardMaterial?W.environment:null,Ze=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:zn,je=(J.isMeshStandardMaterial?G:E).get(J.envMap||Be),lt=J.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ft=!!te.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Xe=!!te.morphAttributes.position,mt=!!te.morphAttributes.normal,F=!!te.morphAttributes.color;let se=ws;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(se=_.toneMapping);const Ee=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,be=Ee!==void 0?Ee.length:0,Ne=ye.get(J),$t=p.state.lights;if(oe===!0&&(_e===!0||L!==b)){const oi=L===b&&J.id===M;V.setState(J,L,oi)}let Mt=!1;J.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==$t.state.version||Ne.outputColorSpace!==Ze||X.isBatchedMesh&&Ne.batching===!1||!X.isBatchedMesh&&Ne.batching===!0||X.isBatchedMesh&&Ne.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ne.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ne.instancing===!1||!X.isInstancedMesh&&Ne.instancing===!0||X.isSkinnedMesh&&Ne.skinning===!1||!X.isSkinnedMesh&&Ne.skinning===!0||X.isInstancedMesh&&Ne.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ne.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ne.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ne.instancingMorph===!1&&X.morphTexture!==null||Ne.envMap!==je||J.fog===!0&&Ne.fog!==De||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==V.numPlanes||Ne.numIntersection!==V.numIntersection)||Ne.vertexAlphas!==lt||Ne.vertexTangents!==ft||Ne.morphTargets!==Xe||Ne.morphNormals!==mt||Ne.morphColors!==F||Ne.toneMapping!==se||Ne.morphTargetsCount!==be)&&(Mt=!0):(Mt=!0,Ne.__version=J.version);let jt=Ne.currentProgram;Mt===!0&&(jt=Ti(J,W,X));let ss=!1,jn=!1,no=!1;const Ht=jt.getUniforms(),Ai=Ne.uniforms;if(Y.useProgram(jt.program)&&(ss=!0,jn=!0,no=!0),J.id!==M&&(M=J.id,jn=!0),ss||b!==L){Y.buffers.depth.getReversed()?(xe.copy(L.projectionMatrix),cm(xe),lm(xe),Ht.setValue(U,"projectionMatrix",xe)):Ht.setValue(U,"projectionMatrix",L.projectionMatrix),Ht.setValue(U,"viewMatrix",L.matrixWorldInverse);const rs=Ht.map.cameraPosition;rs!==void 0&&rs.setValue(U,Ge.setFromMatrixPosition(L.matrixWorld)),O.logarithmicDepthBuffer&&Ht.setValue(U,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ht.setValue(U,"isOrthographic",L.isOrthographicCamera===!0),b!==L&&(b=L,jn=!0,no=!0)}if(X.isSkinnedMesh){Ht.setOptional(U,X,"bindMatrix"),Ht.setOptional(U,X,"bindMatrixInverse");const oi=X.skeleton;oi&&(oi.boneTexture===null&&oi.computeBoneTexture(),Ht.setValue(U,"boneTexture",oi.boneTexture,P))}X.isBatchedMesh&&(Ht.setOptional(U,X,"batchingTexture"),Ht.setValue(U,"batchingTexture",X._matricesTexture,P),Ht.setOptional(U,X,"batchingIdTexture"),Ht.setValue(U,"batchingIdTexture",X._indirectTexture,P),Ht.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&Ht.setValue(U,"batchingColorTexture",X._colorsTexture,P));const io=te.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&We.update(X,te,jt),(jn||Ne.receiveShadow!==X.receiveShadow)&&(Ne.receiveShadow=X.receiveShadow,Ht.setValue(U,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ai.envMap.value=je,Ai.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(Ai.envMapIntensity.value=W.environmentIntensity),jn&&(Ht.setValue(U,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&to(Ai,no),De&&J.fog===!0&&Le.refreshFogUniforms(Ai,De),Le.refreshMaterialUniforms(Ai,J,B,ce,p.state.transmissionRenderTarget[L.id]),Wa.upload(U,Qr(Ne),Ai,P)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Wa.upload(U,Qr(Ne),Ai,P),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ht.setValue(U,"center",X.center),Ht.setValue(U,"modelViewMatrix",X.modelViewMatrix),Ht.setValue(U,"normalMatrix",X.normalMatrix),Ht.setValue(U,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const oi=J.uniformsGroups;for(let rs=0,os=oi.length;rs<os;rs++){const rh=oi[rs];k.update(rh,jt),k.bind(rh,jt)}}return jt}function to(L,W){L.ambientLightColor.needsUpdate=W,L.lightProbe.needsUpdate=W,L.directionalLights.needsUpdate=W,L.directionalLightShadows.needsUpdate=W,L.pointLights.needsUpdate=W,L.pointLightShadows.needsUpdate=W,L.spotLights.needsUpdate=W,L.spotLightShadows.needsUpdate=W,L.rectAreaLights.needsUpdate=W,L.hemisphereLights.needsUpdate=W}function ri(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(L,W,te){ye.get(L.texture).__webglTexture=W,ye.get(L.depthTexture).__webglTexture=te;const J=ye.get(L);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=te===void 0,J.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,W){const te=ye.get(L);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(L,W=0,te=0){R=L,A=W,w=te;let J=!0,X=null,De=!1,Be=!1;if(L){const je=ye.get(L);if(je.__useDefaultFramebuffer!==void 0)Y.bindFramebuffer(U.FRAMEBUFFER,null),J=!1;else if(je.__webglFramebuffer===void 0)P.setupRenderTarget(L);else if(je.__hasExternalTextures)P.rebindTextures(L,ye.get(L.texture).__webglTexture,ye.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Xe=L.depthTexture;if(je.__boundDepthTexture!==Xe){if(Xe!==null&&ye.has(Xe)&&(L.width!==Xe.image.width||L.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(L)}}const lt=L.texture;(lt.isData3DTexture||lt.isDataArrayTexture||lt.isCompressedArrayTexture)&&(Be=!0);const ft=ye.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ft[W])?X=ft[W][te]:X=ft[W],De=!0):L.samples>0&&P.useMultisampledRTT(L)===!1?X=ye.get(L).__webglMultisampledFramebuffer:Array.isArray(ft)?X=ft[te]:X=ft,C.copy(L.viewport),z.copy(L.scissor),H=L.scissorTest}else C.copy(Te).multiplyScalar(B).floor(),z.copy(Ve).multiplyScalar(B).floor(),H=$e;if(Y.bindFramebuffer(U.FRAMEBUFFER,X)&&J&&Y.drawBuffers(L,X),Y.viewport(C),Y.scissor(z),Y.setScissorTest(H),De){const je=ye.get(L.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,je.__webglTexture,te)}else if(Be){const je=ye.get(L.texture),lt=W||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,je.__webglTexture,te||0,lt)}M=-1},this.readRenderTargetPixels=function(L,W,te,J,X,De,Be){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ye.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Be!==void 0&&(Ze=Ze[Be]),Ze){Y.bindFramebuffer(U.FRAMEBUFFER,Ze);try{const je=L.texture,lt=je.format,ft=je.type;if(!O.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=L.width-J&&te>=0&&te<=L.height-X&&U.readPixels(W,te,J,X,ie.convert(lt),ie.convert(ft),De)}finally{const je=R!==null?ye.get(R).__webglFramebuffer:null;Y.bindFramebuffer(U.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(L,W,te,J,X,De,Be){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=ye.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Be!==void 0&&(Ze=Ze[Be]),Ze){const je=L.texture,lt=je.format,ft=je.type;if(!O.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=L.width-J&&te>=0&&te<=L.height-X){Y.bindFramebuffer(U.FRAMEBUFFER,Ze);const Xe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.bufferData(U.PIXEL_PACK_BUFFER,De.byteLength,U.STREAM_READ),U.readPixels(W,te,J,X,ie.convert(lt),ie.convert(ft),0);const mt=R!==null?ye.get(R).__webglFramebuffer:null;Y.bindFramebuffer(U.FRAMEBUFFER,mt);const F=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await am(U,F,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Xe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,De),U.deleteBuffer(Xe),U.deleteSync(F),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,W=null,te=0){L.isTexture!==!0&&(Eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,L=arguments[1]);const J=Math.pow(2,-te),X=Math.floor(L.image.width*J),De=Math.floor(L.image.height*J),Be=W!==null?W.x:0,Ze=W!==null?W.y:0;P.setTexture2D(L,0),U.copyTexSubImage2D(U.TEXTURE_2D,te,0,0,Be,Ze,X,De),Y.unbindTexture()},this.copyTextureToTexture=function(L,W,te=null,J=null,X=0){L.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,L=arguments[1],W=arguments[2],X=arguments[3]||0,te=null);let De,Be,Ze,je,lt,ft,Xe,mt,F;const se=L.isCompressedTexture?L.mipmaps[X]:L.image;te!==null?(De=te.max.x-te.min.x,Be=te.max.y-te.min.y,Ze=te.isBox3?te.max.z-te.min.z:1,je=te.min.x,lt=te.min.y,ft=te.isBox3?te.min.z:0):(De=se.width,Be=se.height,Ze=se.depth||1,je=0,lt=0,ft=0),J!==null?(Xe=J.x,mt=J.y,F=J.z):(Xe=0,mt=0,F=0);const Ee=ie.convert(W.format),be=ie.convert(W.type);let Ne;W.isData3DTexture?(P.setTexture3D(W,0),Ne=U.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(P.setTexture2DArray(W,0),Ne=U.TEXTURE_2D_ARRAY):(P.setTexture2D(W,0),Ne=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);const $t=U.getParameter(U.UNPACK_ROW_LENGTH),Mt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),jt=U.getParameter(U.UNPACK_SKIP_PIXELS),ss=U.getParameter(U.UNPACK_SKIP_ROWS),jn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,je),U.pixelStorei(U.UNPACK_SKIP_ROWS,lt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ft);const no=L.isDataArrayTexture||L.isData3DTexture,Ht=W.isDataArrayTexture||W.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const Ai=ye.get(L),io=ye.get(W),oi=ye.get(Ai.__renderTarget),rs=ye.get(io.__renderTarget);Y.bindFramebuffer(U.READ_FRAMEBUFFER,oi.__webglFramebuffer),Y.bindFramebuffer(U.DRAW_FRAMEBUFFER,rs.__webglFramebuffer);for(let os=0;os<Ze;os++)no&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.get(L).__webglTexture,X,ft+os),L.isDepthTexture?(Ht&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.get(W).__webglTexture,X,F+os),U.blitFramebuffer(je,lt,De,Be,Xe,mt,De,Be,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ht?U.copyTexSubImage3D(Ne,X,Xe,mt,F+os,je,lt,De,Be):U.copyTexSubImage2D(Ne,X,Xe,mt,F+os,je,lt,De,Be);Y.bindFramebuffer(U.READ_FRAMEBUFFER,null),Y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ht?L.isDataTexture||L.isData3DTexture?U.texSubImage3D(Ne,X,Xe,mt,F,De,Be,Ze,Ee,be,se.data):W.isCompressedArrayTexture?U.compressedTexSubImage3D(Ne,X,Xe,mt,F,De,Be,Ze,Ee,se.data):U.texSubImage3D(Ne,X,Xe,mt,F,De,Be,Ze,Ee,be,se):L.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,X,Xe,mt,De,Be,Ee,be,se.data):L.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,X,Xe,mt,se.width,se.height,Ee,se.data):U.texSubImage2D(U.TEXTURE_2D,X,Xe,mt,De,Be,Ee,be,se);U.pixelStorei(U.UNPACK_ROW_LENGTH,$t),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Mt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,jt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ss),U.pixelStorei(U.UNPACK_SKIP_IMAGES,jn),X===0&&W.generateMipmaps&&U.generateMipmap(Ne),Y.unbindTexture()},this.copyTextureToTexture3D=function(L,W,te=null,J=null,X=0){return L.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,J=arguments[1]||null,L=arguments[2],W=arguments[3],X=arguments[4]||0),Eo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,W,te,J,X)},this.initRenderTarget=function(L){ye.get(L).__webglFramebuffer===void 0&&P.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?P.setTextureCube(L,0):L.isData3DTexture?P.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?P.setTexture2DArray(L,0):P.setTexture2D(L,0),Y.unbindTexture()},this.resetState=function(){A=0,w=0,R=null,Y.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}class Fu{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ut(e),this.near=t,this.far=n}clone(){return new Fu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pp extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class mp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=uu,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dn=new D;class Bo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ts extends bi{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let gr;const co=new D,xr=new D,_r=new D,vr=new Me,lo=new Me,gp=new ht,ga=new D,uo=new D,xa=new D,af=new Me,Hc=new Me,cf=new Me;class Ks extends Ot{constructor(e=new Ts){if(super(),this.isSprite=!0,this.type="Sprite",gr===void 0){gr=new Gt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mp(t,5);gr.setIndex([0,1,2,0,2,3]),gr.setAttribute("position",new Bo(n,3,0,!1)),gr.setAttribute("uv",new Bo(n,2,3,!1))}this.geometry=gr,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xr.setFromMatrixScale(this.matrixWorld),gp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),_r.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xr.multiplyScalar(-_r.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;_a(ga.set(-.5,-.5,0),_r,o,xr,s,r),_a(uo.set(.5,-.5,0),_r,o,xr,s,r),_a(xa.set(.5,.5,0),_r,o,xr,s,r),af.set(0,0),Hc.set(1,0),cf.set(1,1);let a=e.ray.intersectTriangle(ga,uo,xa,!1,co);if(a===null&&(_a(uo.set(-.5,.5,0),_r,o,xr,s,r),Hc.set(0,1),a=e.ray.intersectTriangle(ga,xa,uo,!1,co),a===null))return;const c=e.ray.origin.distanceTo(co);c<e.near||c>e.far||t.push({distance:c,point:co.clone(),uv:hi.getInterpolation(co,ga,uo,xa,af,Hc,cf,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function _a(i,e,t,n,s,r){vr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(lo.x=r*vr.x-s*vr.y,lo.y=s*vr.x+r*vr.y):lo.copy(vr),i.copy(e),i.x+=lo.x,i.y+=lo.y,i.applyMatrix4(gp)}const lf=new D,uf=new At,hf=new At,v1=new D,ff=new ht,va=new D,Vc=new Ni,df=new ht,Gc=new Xo;class y1 extends Se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lh,this.bindMatrix=new ht,this.bindMatrixInverse=new ht,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Di),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,va),this.boundingBox.expandByPoint(va)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,va),this.boundingSphere.expandByPoint(va)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vc.copy(this.boundingSphere),Vc.applyMatrix4(s),e.ray.intersectsSphere(Vc)!==!1&&(df.copy(s).invert(),Gc.copy(e.ray).applyMatrix4(df),!(this.boundingBox!==null&&Gc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===P0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;uf.fromBufferAttribute(s.attributes.skinIndex,e),hf.fromBufferAttribute(s.attributes.skinWeight,e),lf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=hf.getComponent(r);if(o!==0){const a=uf.getComponent(r);ff.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(v1.copy(lf).applyMatrix4(ff),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class xp extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _p extends an{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Bn,u=Bn,h,f){super(null,o,a,c,l,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=new ht,M1=new ht;class Bu{constructor(e=[],t=[]){this.uuid=di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ht)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ht;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:M1;pf.multiplyMatrices(a,t[r]),pf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Bu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new _p(t,e,e,fi,Mi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new xp),this.bones.push(o),this.boneInverses.push(new ht().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class du extends Cn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const yr=new ht,mf=new ht,ya=[],gf=new Di,b1=new ht,ho=new Se,fo=new Ni;class w1 extends Se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new du(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,b1)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Di),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),gf.copy(e.boundingBox).applyMatrix4(yr),this.boundingBox.union(gf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yr),fo.copy(e.boundingSphere).applyMatrix4(yr),this.boundingSphere.union(fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ho.geometry=this.geometry,ho.material=this.material,ho.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fo.copy(this.boundingSphere),fo.applyMatrix4(n),e.ray.intersectsSphere(fo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,yr),mf.multiplyMatrices(n,yr),ho.matrixWorld=mf,ho.raycast(e,ya);for(let o=0,a=ya.length;o<a;o++){const c=ya[o];c.instanceId=r,c.object=this,t.push(c)}ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new du(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _p(new Float32Array(s*this.count),s,this.count,Cu,Mi));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class zu extends bi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $a=new D,ja=new D,xf=new ht,po=new Xo,Ma=new Ni,Wc=new D,_f=new D;class Hu extends Ot{constructor(e=new Gt,t=new zu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$a.fromBufferAttribute(t,s-1),ja.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$a.distanceTo(ja);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(s),Ma.radius+=r,e.ray.intersectsSphere(Ma)===!1)return;xf.copy(s).invert(),po.copy(e.ray).applyMatrix4(xf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){const p=u.getX(x),v=u.getX(x+1),y=ba(this,e,po,c,p,v);y&&t.push(y)}if(this.isLineLoop){const x=u.getX(g-1),m=u.getX(d),p=ba(this,e,po,c,x,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){const p=ba(this,e,po,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=ba(this,e,po,c,g-1,d);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ba(i,e,t,n,s,r){const o=i.geometry.attributes.position;if($a.fromBufferAttribute(o,s),ja.fromBufferAttribute(o,r),t.distanceSqToSegment($a,ja,Wc,_f)>n)return;Wc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Wc);if(!(c<e.near||c>e.far))return{distance:c,point:_f.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const vf=new D,yf=new D;class S1 extends Hu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)vf.fromBufferAttribute(t,s),yf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+vf.distanceTo(yf);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vp extends Hu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yp extends bi{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mf=new ht,pu=new Xo,wa=new Ni,Sa=new D;class E1 extends Ot{constructor(e=new Gt,t=new yp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;Mf.copy(s).invert(),pu.copy(e.ray).applyMatrix4(Mf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,x=d;g<x;g++){const m=l.getX(g);Sa.fromBufferAttribute(h,m),bf(Sa,m,c,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Sa.fromBufferAttribute(h,g),bf(Sa,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bf(i,e,t,n,s,r,o){const a=pu.distanceSqToPoint(i);if(a<t){const c=new D;pu.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ln extends an{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ui{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Me:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new D,s=[],r=[],o=[],a=new D,c=new ht;for(let d=0;d<=e;d++){const g=d/e;s[d]=this.getTangentAt(g,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(on(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(on(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vu extends Ui{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Me){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class T1 extends Vu{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Gu(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Ea=new D,Xc=new Gu,qc=new Gu,Yc=new Gu;class Mp extends Ui{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ea.subVectors(s[0],s[1]).add(s[0]),l=Ea);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ea.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ea),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Xc.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,x,m),qc.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,x,m),Yc.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),qc.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Yc.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Xc.calc(c),qc.calc(c),Yc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function wf(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function A1(i,e){const t=1-i;return t*t*e}function R1(i,e){return 2*(1-i)*i*e}function C1(i,e){return i*i*e}function Lo(i,e,t,n){return A1(i,e)+R1(i,t)+C1(i,n)}function P1(i,e){const t=1-i;return t*t*t*e}function L1(i,e){const t=1-i;return 3*t*t*i*e}function I1(i,e){return 3*(1-i)*i*i*e}function D1(i,e){return i*i*i*e}function Io(i,e,t,n,s){return P1(i,e)+L1(i,t)+I1(i,n)+D1(i,s)}class bp extends Ui{constructor(e=new Me,t=new Me,n=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Me){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(e,s.x,r.x,o.x,a.x),Io(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class N1 extends Ui{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Io(e,s.x,r.x,o.x,a.x),Io(e,s.y,r.y,o.y,a.y),Io(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wp extends Ui{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class U1 extends Ui{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sp extends Ui{constructor(e=new Me,t=new Me,n=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Me){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lo(e,s.x,r.x,o.x),Lo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wu extends Ui{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Lo(e,s.x,r.x,o.x),Lo(e,s.y,r.y,o.y),Lo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ep extends Ui{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(wf(a,c.x,l.x,u.x,h.x),wf(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new Me().fromArray(s))}return this}}var Ka=Object.freeze({__proto__:null,ArcCurve:T1,CatmullRomCurve3:Mp,CubicBezierCurve:bp,CubicBezierCurve3:N1,EllipseCurve:Vu,LineCurve:wp,LineCurve3:U1,QuadraticBezierCurve:Sp,QuadraticBezierCurve3:Wu,SplineCurve:Ep});class k1 extends Ui{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ka[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ka[s.type]().fromJSON(s))}return this}}class mu extends k1{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new wp(this.currentPoint.clone(),new Me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new Sp(this.currentPoint.clone(),new Me(e,t),new Me(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new bp(this.currentPoint.clone(),new Me(e,t),new Me(n,s),new Me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Ep(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){const l=new Vu(e,t,n,s,r,o,a,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qr extends Gt{constructor(e=[new Me(0,-.5),new Me(.5,0),new Me(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=on(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/t,h=new D,f=new Me,d=new D,g=new D,x=new D;let m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let v=0;v<=t;v++){const y=n+v*u*s,_=Math.sin(y),I=Math.cos(y);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*_,h.y=e[A].y,h.z=e[A].x*I,o.push(h.x,h.y,h.z),f.x=v/t,f.y=A/(e.length-1),a.push(f.x,f.y);const w=c[3*A+0]*_,R=c[3*A+1],M=c[3*A+0]*I;l.push(w,R,M)}}for(let v=0;v<t;v++)for(let y=0;y<e.length-1;y++){const _=y+v*e.length,I=_,A=_+e.length,w=_+e.length+1,R=_+1;r.push(I,A,R),r.push(w,R,A)}this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.points,e.segments,e.phiStart,e.phiLength)}}class Xu extends qr{constructor(e=1,t=1,n=4,s=8){const r=new mu;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Xu(e.radius,e.length,e.capSegments,e.radialSegments)}}class si extends Gt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new D,u=new Me;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ni extends Gt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const x=[],m=n/2;let p=0;v(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(d,2));function v(){const _=new D,I=new D;let A=0;const w=(t-e)/n;for(let R=0;R<=r;R++){const M=[],b=R/r,C=b*(t-e)+e;for(let z=0;z<=s;z++){const H=z/s,q=H*c+a,Z=Math.sin(q),$=Math.cos(q);I.x=C*Z,I.y=-b*n+m,I.z=C*$,h.push(I.x,I.y,I.z),_.set(Z,w,$).normalize(),f.push(_.x,_.y,_.z),d.push(H,1-b),M.push(g++)}x.push(M)}for(let R=0;R<s;R++)for(let M=0;M<r;M++){const b=x[M][R],C=x[M+1][R],z=x[M+1][R+1],H=x[M][R+1];(e>0||M!==0)&&(u.push(b,C,H),A+=3),(t>0||M!==r-1)&&(u.push(C,z,H),A+=3)}l.addGroup(p,A,0),p+=A}function y(_){const I=g,A=new Me,w=new D;let R=0;const M=_===!0?e:t,b=_===!0?1:-1;for(let z=1;z<=s;z++)h.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),g++;const C=g;for(let z=0;z<=s;z++){const q=z/s*c+a,Z=Math.cos(q),$=Math.sin(q);w.x=M*$,w.y=m*b,w.z=M*Z,h.push(w.x,w.y,w.z),f.push(0,b,0),A.x=Z*.5+.5,A.y=$*.5*b+.5,d.push(A.x,A.y),g++}for(let z=0;z<s;z++){const H=I+z,q=C+z;_===!0?u.push(q,q+1,H):u.push(q+1,q,H),R+=3}l.addGroup(p,R,_===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qu extends ni{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new qu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yu extends Gt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const y=new D,_=new D,I=new D;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],_),d(t[A+2],I),c(y,_,I,v)}function c(v,y,_,I){const A=I+1,w=[];for(let R=0;R<=A;R++){w[R]=[];const M=v.clone().lerp(_,R/A),b=y.clone().lerp(_,R/A),C=A-R;for(let z=0;z<=C;z++)z===0&&R===A?w[R][z]=M:w[R][z]=M.clone().lerp(b,z/C)}for(let R=0;R<A;R++)for(let M=0;M<2*(A-R)-1;M++){const b=Math.floor(M/2);M%2===0?(f(w[R][b+1]),f(w[R+1][b]),f(w[R][b])):(f(w[R][b+1]),f(w[R+1][b+1]),f(w[R+1][b]))}}function l(v){const y=new D;for(let _=0;_<r.length;_+=3)y.x=r[_+0],y.y=r[_+1],y.z=r[_+2],y.normalize().multiplyScalar(v),r[_+0]=y.x,r[_+1]=y.y,r[_+2]=y.z}function u(){const v=new D;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const _=m(v)/2/Math.PI+.5,I=p(v)/Math.PI+.5;o.push(_,1-I)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){const y=o[v+0],_=o[v+2],I=o[v+4],A=Math.max(y,_,I),w=Math.min(y,_,I);A>.9&&w<.1&&(y<.2&&(o[v+0]+=1),_<.2&&(o[v+2]+=1),I<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,y){const _=v*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){const v=new D,y=new D,_=new D,I=new D,A=new Me,w=new Me,R=new Me;for(let M=0,b=0;M<r.length;M+=9,b+=6){v.set(r[M+0],r[M+1],r[M+2]),y.set(r[M+3],r[M+4],r[M+5]),_.set(r[M+6],r[M+7],r[M+8]),A.set(o[b+0],o[b+1]),w.set(o[b+2],o[b+3]),R.set(o[b+4],o[b+5]),I.copy(v).add(y).add(_).divideScalar(3);const C=m(I);x(A,b+0,v,C),x(w,b+2,y,C),x(R,b+4,_,C)}}function x(v,y,_,I){I<0&&v.x===1&&(o[y]=v.x-1),_.x===0&&_.z===0&&(o[y]=I/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.vertices,e.indices,e.radius,e.details)}}class qo extends mu{constructor(e){super(e),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new mu().fromJSON(s))}return this}}const O1={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Tp(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=V1(i,e,r,t)),i.length>80*t){a=l=i[0],c=u=i[1];for(let g=t;g<s;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return zo(r,o,t,a,c,d,0),o}};function Tp(i,e,t,n,s){let r,o;if(s===Q1(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Sf(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Sf(r,i[r],i[r+1],o);return o&&ic(o,o.next)&&(Vo(o),o=o.next),o}function Zs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ic(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Vo(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function zo(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Y1(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?B1(i,n,s,r):F1(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Vo(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=z1(Zs(i),e,t),zo(i,e,t,n,s,r,2)):o===2&&H1(i,e,t,n,s,r):zo(Zs(i),e,t,n,s,r,1);break}}}function F1(i){const e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Rr(s,a,r,c,o,l,g.x,g.y)&&Xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function B1(i,e,t,n){const s=i.prev,r=i,o=i.next;if(Xt(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,u=s.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,x=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=gu(d,g,e,t,n),v=gu(x,m,e,t,n);let y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Rr(a,u,c,h,l,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Rr(a,u,c,h,l,f,_.x,_.y)&&Xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Rr(a,u,c,h,l,f,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&Rr(a,u,c,h,l,f,_.x,_.y)&&Xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function z1(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!ic(s,r)&&Ap(s,n,n.next,r)&&Ho(s,r)&&Ho(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),Vo(n),Vo(n.next),n=i=r),n=n.next}while(n!==i);return Zs(n)}function H1(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K1(o,a)){let c=Rp(o,a);o=Zs(o,o.next),c=Zs(c,c.next),zo(o,e,t,n,s,r,0),zo(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function V1(i,e,t,n){const s=[];let r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Tp(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(j1(l));for(s.sort(G1),r=0;r<s.length;r++)t=W1(s[r],t);return t}function G1(i,e){return i.x-e.x}function W1(i,e){const t=X1(i,e);if(!t)return e;const n=Rp(t,i);return Zs(n,n.next),Zs(t,t.next)}function X1(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,c=s.x,l=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Rr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),Ho(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&q1(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function q1(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function Y1(i,e,t,n){let s=i;do s.z===0&&(s.z=gu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,$1(s)}function $1(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function gu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function j1(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Rr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function K1(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Z1(i,e)&&(Ho(i,e)&&Ho(e,i)&&J1(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||ic(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ic(i,e){return i.x===e.x&&i.y===e.y}function Ap(i,e,t,n){const s=Aa(Xt(i,e,t)),r=Aa(Xt(i,e,n)),o=Aa(Xt(t,n,i)),a=Aa(Xt(t,n,e));return!!(s!==r&&o!==a||s===0&&Ta(i,t,e)||r===0&&Ta(i,n,e)||o===0&&Ta(t,i,n)||a===0&&Ta(t,e,n))}function Ta(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Aa(i){return i>0?1:i<0?-1:0}function Z1(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Ap(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ho(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function J1(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Rp(i,e){const t=new xu(i.i,i.x,i.y),n=new xu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Sf(i,e,t,n){const s=new xu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q1(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ss{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Ss.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Ef(e),Tf(n,e);let o=e.length;t.forEach(Ef);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Tf(n,t[c]);const a=O1.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Ef(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Tf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class sc extends Gt{constructor(e=new qo([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:ey;let y,_=!1,I,A,w,R;p&&(y=p.getSpacedPoints(u),_=!0,f=!1,I=p.computeFrenetFrames(u,!1),A=new D,w=new D,R=new D),f||(m=0,d=0,g=0,x=0);const M=a.extractPoints(l);let b=M.shape;const C=M.holes;if(!Ss.isClockWise(b)){b=b.reverse();for(let ae=0,me=C.length;ae<me;ae++){const U=C[ae];Ss.isClockWise(U)&&(C[ae]=U.reverse())}}const H=Ss.triangulateShape(b,C),q=b;for(let ae=0,me=C.length;ae<me;ae++){const U=C[ae];b=b.concat(U)}function Z(ae,me,U){return me||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(me,U)}const $=b.length,ce=H.length;function B(ae,me,U){let ue,ee,O;const Y=ae.x-me.x,ge=ae.y-me.y,ye=U.x-ae.x,P=U.y-ae.y,E=Y*Y+ge*ge,G=Y*P-ge*ye;if(Math.abs(G)>Number.EPSILON){const K=Math.sqrt(E),pe=Math.sqrt(ye*ye+P*P),he=me.x-ge/K,Ie=me.y+Y/K,Le=U.x-P/pe,Ce=U.y+ye/pe,ct=((Le-he)*P-(Ce-Ie)*ye)/(Y*P-ge*ye);ue=he+Y*ct-ae.x,ee=Ie+ge*ct-ae.y;const V=ue*ue+ee*ee;if(V<=2)return new Me(ue,ee);O=Math.sqrt(V/2)}else{let K=!1;Y>Number.EPSILON?ye>Number.EPSILON&&(K=!0):Y<-Number.EPSILON?ye<-Number.EPSILON&&(K=!0):Math.sign(ge)===Math.sign(P)&&(K=!0),K?(ue=-ge,ee=Y,O=Math.sqrt(E)):(ue=Y,ee=ge,O=Math.sqrt(E/2))}return new Me(ue/O,ee/O)}const de=[];for(let ae=0,me=q.length,U=me-1,ue=ae+1;ae<me;ae++,U++,ue++)U===me&&(U=0),ue===me&&(ue=0),de[ae]=B(q[ae],q[U],q[ue]);const fe=[];let Te,Ve=de.concat();for(let ae=0,me=C.length;ae<me;ae++){const U=C[ae];Te=[];for(let ue=0,ee=U.length,O=ee-1,Y=ue+1;ue<ee;ue++,O++,Y++)O===ee&&(O=0),Y===ee&&(Y=0),Te[ue]=B(U[ue],U[O],U[Y]);fe.push(Te),Ve=Ve.concat(Te)}for(let ae=0;ae<m;ae++){const me=ae/m,U=d*Math.cos(me*Math.PI/2),ue=g*Math.sin(me*Math.PI/2)+x;for(let ee=0,O=q.length;ee<O;ee++){const Y=Z(q[ee],de[ee],ue);xe(Y.x,Y.y,-U)}for(let ee=0,O=C.length;ee<O;ee++){const Y=C[ee];Te=fe[ee];for(let ge=0,ye=Y.length;ge<ye;ge++){const P=Z(Y[ge],Te[ge],ue);xe(P.x,P.y,-U)}}}const $e=g+x;for(let ae=0;ae<$;ae++){const me=f?Z(b[ae],Ve[ae],$e):b[ae];_?(w.copy(I.normals[0]).multiplyScalar(me.x),A.copy(I.binormals[0]).multiplyScalar(me.y),R.copy(y[0]).add(w).add(A),xe(R.x,R.y,R.z)):xe(me.x,me.y,0)}for(let ae=1;ae<=u;ae++)for(let me=0;me<$;me++){const U=f?Z(b[me],Ve[me],$e):b[me];_?(w.copy(I.normals[ae]).multiplyScalar(U.x),A.copy(I.binormals[ae]).multiplyScalar(U.y),R.copy(y[ae]).add(w).add(A),xe(R.x,R.y,R.z)):xe(U.x,U.y,h/u*ae)}for(let ae=m-1;ae>=0;ae--){const me=ae/m,U=d*Math.cos(me*Math.PI/2),ue=g*Math.sin(me*Math.PI/2)+x;for(let ee=0,O=q.length;ee<O;ee++){const Y=Z(q[ee],de[ee],ue);xe(Y.x,Y.y,h+U)}for(let ee=0,O=C.length;ee<O;ee++){const Y=C[ee];Te=fe[ee];for(let ge=0,ye=Y.length;ge<ye;ge++){const P=Z(Y[ge],Te[ge],ue);_?xe(P.x,P.y+y[u-1].y,y[u-1].x+U):xe(P.x,P.y,h+U)}}}ne(),oe();function ne(){const ae=s.length/3;if(f){let me=0,U=$*me;for(let ue=0;ue<ce;ue++){const ee=H[ue];Ue(ee[2]+U,ee[1]+U,ee[0]+U)}me=u+m*2,U=$*me;for(let ue=0;ue<ce;ue++){const ee=H[ue];Ue(ee[0]+U,ee[1]+U,ee[2]+U)}}else{for(let me=0;me<ce;me++){const U=H[me];Ue(U[2],U[1],U[0])}for(let me=0;me<ce;me++){const U=H[me];Ue(U[0]+$*u,U[1]+$*u,U[2]+$*u)}}n.addGroup(ae,s.length/3-ae,0)}function oe(){const ae=s.length/3;let me=0;_e(q,me),me+=q.length;for(let U=0,ue=C.length;U<ue;U++){const ee=C[U];_e(ee,me),me+=ee.length}n.addGroup(ae,s.length/3-ae,1)}function _e(ae,me){let U=ae.length;for(;--U>=0;){const ue=U;let ee=U-1;ee<0&&(ee=ae.length-1);for(let O=0,Y=u+m*2;O<Y;O++){const ge=$*O,ye=$*(O+1),P=me+ue+ge,E=me+ee+ge,G=me+ee+ye,K=me+ue+ye;Ge(P,E,G,K)}}}function xe(ae,me,U){c.push(ae),c.push(me),c.push(U)}function Ue(ae,me,U){ke(ae),ke(me),ke(U);const ue=s.length/3,ee=v.generateTopUV(n,s,ue-3,ue-2,ue-1);Qe(ee[0]),Qe(ee[1]),Qe(ee[2])}function Ge(ae,me,U,ue){ke(ae),ke(me),ke(ue),ke(me),ke(U),ke(ue);const ee=s.length/3,O=v.generateSideWallUV(n,s,ee-6,ee-3,ee-2,ee-1);Qe(O[0]),Qe(O[1]),Qe(O[3]),Qe(O[1]),Qe(O[2]),Qe(O[3])}function ke(ae){s.push(c[ae*3+0]),s.push(c[ae*3+1]),s.push(c[ae*3+2])}function Qe(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ty(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Ka[s.type]().fromJSON(s)),new sc(n,e.options)}}const ey={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],u=e[s*3+1];return[new Me(r,o),new Me(a,c),new Me(l,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Me(o,1-c),new Me(l,1-h),new Me(f,1-g),new Me(x,1-p)]:[new Me(a,1-c),new Me(u,1-h),new Me(d,1-g),new Me(m,1-p)]}};function ty(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class rc extends Yu{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rc(e.radius,e.detail)}}class $u extends Gt{constructor(e=new qo([new Me(0,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(a,c,u),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(r,3)),this.setAttribute("uv",new xt(o,2));function l(u){const h=s.length/3,f=u.extractPoints(t);let d=f.shape;const g=f.holes;Ss.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];Ss.isClockWise(v)===!0&&(g[m]=v.reverse())}const x=Ss.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];d=d.concat(v)}for(let m=0,p=d.length;m<p;m++){const v=d[m];s.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,p=x.length;m<p;m++){const v=x[m],y=v[0]+h,_=v[1]+h,I=v[2]+h;n.push(y,_,I),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return ny(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const o=t[e.shapes[s]];n.push(o)}return new $u(n,e.curveSegments)}}function ny(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class qt extends Gt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new D,f=new D,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let _=0;p===0&&o===0?_=.5/t:p===n&&c===Math.PI&&(_=-.5/t);for(let I=0;I<=t;I++){const A=I/t;h.x=-e*Math.cos(s+A*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(A+_,1-y),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){const y=u[p][v+1],_=u[p][v],I=u[p+1][v],A=u[p+1][v+1];(p!==0||o>0)&&d.push(y,_,A),(p!==n-1||c<Math.PI)&&d.push(_,I,A)}this.setIndex(d),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(x,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yr extends Gt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new D,h=new D,f=new D;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){const x=g/s*r,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){const x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,v=(s+1)*d+g;o.push(x,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class oc extends Gt{constructor(e=new Wu(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};const o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,c=new D,l=new Me;let u=new D;const h=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(d,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),v(),p()}function m(y){u=e.getPointAt(y/t,u);const _=o.normals[y],I=o.binormals[y];for(let A=0;A<=s;A++){const w=A/s*Math.PI*2,R=Math.sin(w),M=-Math.cos(w);c.x=M*_.x+R*I.x,c.y=M*_.y+R*I.y,c.z=M*_.z+R*I.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let _=1;_<=s;_++){const I=(s+1)*(y-1)+(_-1),A=(s+1)*y+(_-1),w=(s+1)*y+_,R=(s+1)*(y-1)+_;g.push(I,A,R),g.push(A,w,R)}}function v(){for(let y=0;y<=t;y++)for(let _=0;_<=s;_++)l.x=y/t,l.y=_/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new oc(new Ka[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class zt extends bi{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zd,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ki extends zt{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ra(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function iy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sy(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Af(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)s[o++]=i[a+c]}return s}function Cp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Yo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ry extends Yo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hh:r=e,a=2*t-n;break;case fh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hh:o=e,c=2*n-t;break;case fh:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+v*o[l+I]+y*o[c+I]+_*o[h+I];return r}}class oy extends Yo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}}class ay extends Yo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Oi{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ay(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new oy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ry(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ko:t=this.InterpolantFactoryMethodDiscrete;break;case Oo:t=this.InterpolantFactoryMethodLinear;break;case dc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ko;case this.InterpolantFactoryMethodLinear:return Oo;case this.InterpolantFactoryMethodSmooth:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&iy(s))for(let a=0,c=s.length;a!==c;++a){const l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===dc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(s)c=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const x=t[h+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=Oo;class $r extends Oi{constructor(e,t,n){super(e,t,n)}}$r.prototype.ValueTypeName="bool";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=ko;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;class Pp extends Oi{}Pp.prototype.ValueTypeName="color";class Hr extends Oi{}Hr.prototype.ValueTypeName="number";class cy extends Yo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Xn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class Vr extends Oi{InterpolantFactoryMethodLinear(e){return new cy(this.times,this.values,this.getValueSize(),e)}}Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;class jr extends Oi{constructor(e,t,n){super(e,t,n)}}jr.prototype.ValueTypeName="string";jr.prototype.ValueBufferType=Array;jr.prototype.DefaultInterpolation=ko;jr.prototype.InterpolantFactoryMethodLinear=void 0;jr.prototype.InterpolantFactoryMethodSmooth=void 0;class Gr extends Oi{}Gr.prototype.ValueTypeName="vector";class ly{constructor(e="",t=-1,n=[],s=L0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=di(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(hy(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Oi.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=sy(c);c=Af(c,1,u),l=Af(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Hr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(l)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,x){if(d.length!==0){const m=[],p=[];Cp(d,m,p,g),m.length!==0&&x.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)d[f[g].morphTargets[x]]=-1;for(const x in d){const m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){const y=f[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Hr(".morphTargetInfluence["+x+"]",m,p))}c=d.length*o}else{const d=".bones["+t[h].name+"]";n(Gr,d+".position",f,"pos",s),n(Vr,d+".quaternion",f,"rot",s),n(Gr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,c,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function uy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hr;case"vector":case"vector2":case"vector3":case"vector4":return Gr;case"color":return Pp;case"quaternion":return Vr;case"bool":case"boolean":return $r;case"string":return jr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function hy(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=uy(i.type);if(i.times===void 0){const t=[],n=[];Cp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Ms={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class fy{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const dy=new fy;class Kr{constructor(e){this.manager=e!==void 0?e:dy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Kr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Gi={};class py extends Error{constructor(e,t){super(e),this.response=t}}class Lp extends Kr{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ms.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:s});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Gi[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let x=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:y,value:_})=>{if(y)p.close();else{x+=_.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:d});for(let A=0,w=u.length;A<w;A++){const R=u[A];R.onProgress&&R.onProgress(I)}p.enqueue(_),v()}},y=>{p.error(y)})}}});return new Response(m)}else throw new py(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Ms.add(e,l);const u=Gi[e];delete Gi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Gi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Gi[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class my extends Kr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ms.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Fo("img");function c(){u(),Ms.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class ju extends Kr{constructor(e){super(e)}load(e,t,n,s){const r=new an,o=new my(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ac extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gy extends ac{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $c=new ht,Rf=new D,Cf=new D;class Ku{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uu,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rf),Cf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cf),t.updateMatrixWorld(),$c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($c),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xy extends Ku{constructor(){super(new kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Br*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _y extends ac{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new xy}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Pf=new ht,mo=new D,jc=new D;class vy extends Ku{constructor(){super(new kn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Me(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),mo.setFromMatrixPosition(e.matrixWorld),n.position.copy(mo),jc.copy(n.position),jc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(jc),n.updateMatrixWorld(),s.makeTranslation(-mo.x,-mo.y,-mo.z),Pf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pf)}}class cc extends ac{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yy extends Ku{constructor(){super(new ku(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ip extends ac{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new yy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Do{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class My extends Kr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ms.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ms.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Ms.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ms.add(e,c),r.manager.itemStart(e)}}let Ca;class by{static getContext(){return Ca===void 0&&(Ca=new(window.AudioContext||window.webkitAudioContext)),Ca}static setContext(e){Ca=e}}class Dp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Lf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Lf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Lf(){return performance.now()}const Us=new D,If=new Xn,wy=new D,ks=new D;class Sy extends Ot{constructor(){super(),this.type="AudioListener",this.context=by.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Dp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Us,If,wy),ks.set(0,0,-1).applyQuaternion(If),t.positionX){const s=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Us.x,s),t.positionY.linearRampToValueAtTime(Us.y,s),t.positionZ.linearRampToValueAtTime(Us.z,s),t.forwardX.linearRampToValueAtTime(ks.x,s),t.forwardY.linearRampToValueAtTime(ks.y,s),t.forwardZ.linearRampToValueAtTime(ks.z,s),t.upX.linearRampToValueAtTime(n.x,s),t.upY.linearRampToValueAtTime(n.y,s),t.upZ.linearRampToValueAtTime(n.z,s)}else t.setPosition(Us.x,Us.y,Us.z),t.setOrientation(ks.x,ks.y,ks.z,n.x,n.y,n.z)}}class Ey extends Ot{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Os=new D,Df=new Xn,Ty=new D,Fs=new D;class Ay extends Ey{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Os,Df,Ty),Fs.set(0,0,1).applyQuaternion(Df);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Os.x,n),t.positionY.linearRampToValueAtTime(Os.y,n),t.positionZ.linearRampToValueAtTime(Os.z,n),t.orientationX.linearRampToValueAtTime(Fs.x,n),t.orientationY.linearRampToValueAtTime(Fs.y,n),t.orientationZ.linearRampToValueAtTime(Fs.z,n)}else t.setPosition(Os.x,Os.y,Os.z),t.setOrientation(Fs.x,Fs.y,Fs.z)}}const Zu="\\[\\]\\.:\\/",Ry=new RegExp("["+Zu+"]","g"),Ju="[^"+Zu+"]",Cy="[^"+Zu.replace("\\.","")+"]",Py=/((?:WC+[\/:])*)/.source.replace("WC",Ju),Ly=/(WCOD+)?/.source.replace("WCOD",Cy),Iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ju),Dy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ju),Ny=new RegExp("^"+Py+Ly+Iy+Dy+"$"),Uy=["material","materials","bones","map"];class ky{constructor(e,t,n){const s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ry,"")}static parseTrackName(e){const t=Ny.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Uy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[s];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=ky;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Nf=new ht;class Oy{constructor(e,t,n=0,s=1/0){this.ray=new Xo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Nu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(e,t=!0,n=[]){return _u(e,this,n,t),n.sort(Uf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)_u(e[s],this,n,t);return n.sort(Uf),n}}function Uf(i,e){return i.distance-e.distance}function _u(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)_u(r[o],e,t,!0)}}class Fy extends Qs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eu);class By extends pp{constructor(){super();const e=new hn;e.deleteAttribute("uv");const t=new zt({side:Rn}),n=new zt,s=new cc(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Se(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Se(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Se(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new Se(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new Se(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new Se(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new Se(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new Se(e,Mr(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new Se(e,Mr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const g=new Se(e,Mr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new Se(e,Mr(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const m=new Se(e,Mr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new Se(e,Mr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Mr(i){const e=new Fn;return e.color.setScalar(i),e}const zy=new ju;let Np=8;function Ei(i,e,t,{repeat:n=!0,srgb:s=!0}={}){const r=document.createElement("canvas");r.width=i,r.height=e,t(r.getContext("2d"),i,e);const o=new Ln(r);return s&&(o.colorSpace=Et),n&&(o.wrapS=o.wrapT=Si),o.anisotropy=Np,o}function Kc(i,e=!1){const t=zy.load(i);return t.colorSpace=Et,e&&(t.wrapS=t.wrapT=Si),t.anisotropy=Np,t}let Zc=1337;function it(){return Zc=Zc*16807%2147483647,(Zc-1)/2147483646}function Pa(i,e,t){return Ei(512,512,(n,s)=>{const o=s/4;for(let a=0;a<4;a++)for(let c=0;c<4;c++){const l=(it()-.5)*e;n.fillStyle=`rgb(${i[0]+l},${i[1]+l},${i[2]+l})`,n.fillRect(a*o,c*o,o,o);for(let u=0;u<140;u++){const h=(it()-.5)*e*1.4;n.fillStyle=`rgba(${i[0]+h},${i[1]+h},${i[2]+h},0.5)`,n.fillRect(a*o+it()*o,c*o+it()*o,2+it()*5,2+it()*5)}}n.strokeStyle=t,n.lineWidth=3;for(let a=0;a<=4;a++)n.beginPath(),n.moveTo(a*o,0),n.lineTo(a*o,s),n.stroke(),n.beginPath(),n.moveTo(0,a*o),n.lineTo(s,a*o),n.stroke()})}const Hy=Ei(256,1024,(i,e,t)=>{i.fillStyle="#d9c7a4",i.fillRect(0,0,e,t);for(let n=0;n<90;n++){const s=it()*e,r=.05+it()*.12;i.strokeStyle=it()>.5?`rgba(150,120,80,${r})`:`rgba(245,235,215,${r})`,i.lineWidth=1+it()*3,i.beginPath(),i.moveTo(s,0);for(let o=0;o<=t;o+=64)i.lineTo(s+Math.sin(o*.01+n)*4,o);i.stroke()}}),Vy=Ei(256,1024,(i,e,t)=>{i.fillStyle="#a8978a",i.fillRect(0,0,e,t);for(let n=0;n<120;n++){const s=it()*e,r=.05+it()*.1;i.strokeStyle=it()>.5?`rgba(90,75,65,${r})`:`rgba(210,200,190,${r})`,i.lineWidth=1+it()*2.5,i.beginPath(),i.moveTo(s,0);for(let o=0;o<=t;o+=64)i.lineTo(s+Math.sin(o*.012+n)*3,o);i.stroke()}}),Gy=Ei(256,96,(i,e,t)=>{i.fillStyle="#e4e4e2",i.fillRect(0,0,e,t);for(let n=0;n<4;n++)for(let s=0;s<14;s++)n===3&&s>3&&s<9||(i.fillStyle="#fafafa",i.strokeStyle="#b9b9b6",i.lineWidth=1.5,i.beginPath(),i.arc(14+s*17.5,14+n*22,7.5,0,7),i.fill(),i.stroke());i.beginPath(),i.roundRect(80,70,90,15,7),i.fill(),i.stroke()}),Wy=Ei(128,128,(i,e)=>{i.fillStyle="#c4c5c8",i.fillRect(0,0,e,e);for(let t=0;t<40;t++)i.fillStyle=`rgba(255,255,255,${.03+it()*.05})`,i.fillRect(0,it()*e,e,1);i.fillStyle="#8d8e92",i.beginPath(),i.arc(60,70,15,0,7),i.arc(76,70,15,0,7),i.fill(),i.beginPath(),i.ellipse(68,80,18,20,0,0,7),i.fill(),i.fillStyle="#c4c5c8",i.beginPath(),i.arc(90,62,10,0,7),i.fill(),i.fillStyle="#8d8e92",i.beginPath(),i.ellipse(70,46,9,5,-.7,0,7),i.fill()},{repeat:!1}),Xy=Ei(512,512,(i,e)=>{const n=e/2;i.fillStyle="#111111",i.fillRect(0,0,e,e),i.fillStyle="#d6ccb2",i.beginPath(),i.moveTo(0,0),i.lineTo(n,0),i.lineTo(n,n),i.closePath(),i.fill(),i.strokeStyle="#ecc828",i.lineWidth=7;for(let s=0;s<=2;s++)i.beginPath(),i.moveTo(s*n,0),i.lineTo(s*n,e),i.stroke(),i.beginPath(),i.moveTo(0,s*n),i.lineTo(e,s*n),i.stroke();i.beginPath(),i.moveTo(0,0),i.lineTo(e,e),i.moveTo(n,0),i.lineTo(e,n),i.moveTo(0,n),i.lineTo(n,e),i.stroke()}),kf=Ei(256,160,(i,e,t)=>{i.fillStyle="#1b1d24",i.fillRect(0,0,e,t),i.fillStyle="#2a2d36",i.fillRect(0,0,40,t);const n=["#c792ea","#82aaff","#c3e88d","#f78c6c","#89ddff","#d0d0d0"];for(let s=8;s<t-4;s+=7){let r=48+Math.floor(it()*4)*8;const o=1+Math.floor(it()*4);for(let a=0;a<o&&r<e-10;a++){const c=10+it()*45;i.fillStyle=n[Math.floor(it()*n.length)],i.fillRect(r,s,c,3),r+=c+5}}},{repeat:!1}),Of=Ei(256,160,(i,e,t)=>{i.fillStyle="#f4f6fa",i.fillRect(0,0,e,t),i.fillStyle="#26324a",i.fillRect(0,0,36,t),i.fillStyle="#ffffff";for(let n=0;n<3;n++)i.fillRect(44+n*70,10,62,34);i.fillStyle="#4c7cf0";for(let n=0;n<12;n++){const s=10+it()*50;i.fillRect(48+n*16,140-s,9,s)}i.fillStyle="#26c281",i.fillRect(50,20,40,6),i.fillStyle="#f0a04c",i.fillRect(120,20,40,6)},{repeat:!1}),Ff=Ei(256,160,(i,e,t)=>{const n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#20263a"),n.addColorStop(1,"#3b2a4f"),i.fillStyle=n,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,.85)";for(let s=0;s<4;s++)i.fillRect(30,30+s*22,120+it()*60,8);i.fillStyle="#ecc828",i.fillRect(30,120,60,14)},{repeat:!1}),qy=Ei(1024,360,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#3a3a38",i.textAlign="center",i.font='700 210px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("pixbit",e/2,200),i.font='500 78px "Avenir Next", "Helvetica Neue", Arial, sans-serif',i.fillText("· s o l u t i o n s ·",e/2,320)},{repeat:!1}),Yy=Ei(256,256,(i,e)=>{const t=e/2;i.fillStyle="#f7f7f5",i.beginPath(),i.arc(t,t,t-4,0,Math.PI*2),i.fill(),i.lineWidth=10,i.strokeStyle="#222",i.stroke(),i.fillStyle="#222";for(let n=0;n<12;n++){const s=n/12*Math.PI*2;i.fillRect(t+Math.sin(s)*96-3,t-Math.cos(s)*96-9,6,18)}i.lineCap="round",i.lineWidth=8,i.beginPath(),i.moveTo(t,t),i.lineTo(t+50,t-30),i.stroke(),i.lineWidth=5,i.beginPath(),i.moveTo(t,t),i.lineTo(t-20,t-85),i.stroke()},{repeat:!1}),nt=i=>new zt(i),S={floorBeige:nt({map:Pa([196,180,160],14,"#a8998a"),roughness:.3,metalness:0}),floorDark:nt({map:Pa([78,78,80],12,"#5a5a5c"),roughness:.6}),floorTerrace:nt({map:Pa([184,160,136],16,"#9c7e66"),roughness:.75}),floorCorridor:nt({map:Pa([226,214,196],8,"#cbbfae"),roughness:.12}),wall:nt({color:"#dededb",roughness:.92}),wallWarm:nt({color:"#e6e1d6",roughness:.92}),concrete:nt({map:Kc("textures/concrete.jpg",!0),roughness:.95}),ceilingBlack:nt({color:"#151516",roughness:.95}),diamond:nt({map:Xy,roughness:.7}),yellow:nt({color:"#ecc21c",roughness:.5}),black:nt({color:"#161616",roughness:.45,metalness:.3}),blackMatte:nt({color:"#1e1e1e",roughness:.85}),metalDark:nt({color:"#2a2a2c",roughness:.35,metalness:.7}),chrome:nt({color:"#b9bcc0",roughness:.2,metalness:1}),mesh:nt({color:"#262628",roughness:.9}),fabric:nt({color:"#2d2d30",roughness:1}),leather:nt({color:"#1a1a1a",roughness:.38,metalness:.05}),wood:nt({map:Hy,roughness:.6}),greyOak:nt({map:Vy,roughness:.75}),oakEdge:nt({color:"#d9cfb4",roughness:.7}),macTop:nt({map:Wy,roughness:.35,metalness:.6}),silver:nt({color:"#c9cacc",roughness:.3,metalness:.8}),keyboardTop:nt({map:Gy,roughness:.5}),woodDark:nt({color:"#7a5233",roughness:.6}),white:nt({color:"#f3f3f1",roughness:.5}),whiteGloss:nt({color:"#f5f5f3",roughness:.2}),cream:nt({color:"#e8e2c8",roughness:.6}),glass:new zt({color:"#cfdde0",transparent:!0,opacity:.16,roughness:.05,metalness:.1,depthWrite:!1,side:Bt}),glassFrost:new zt({color:"#f2f2f0",transparent:!0,opacity:.82,roughness:.5,depthWrite:!1,side:Bt}),glassYellow:nt({color:"#f1d27a",emissive:"#a8820f",emissiveIntensity:.35,roughness:.4}),lightStrip:nt({color:"#ffffff",emissive:"#fff4e0",emissiveIntensity:2.2}),spotGlow:nt({color:"#ffffff",emissive:"#ffe9c4",emissiveIntensity:3}),screenCode:nt({map:kf,emissive:"#ffffff",emissiveMap:kf,emissiveIntensity:.9,roughness:.3}),screenDash:nt({map:Of,emissive:"#ffffff",emissiveMap:Of,emissiveIntensity:.7,roughness:.3}),screenDark:nt({map:Ff,emissive:"#ffffff",emissiveMap:Ff,emissiveIntensity:.8,roughness:.3}),screenOff:nt({color:"#0b0b0c",roughness:.15,metalness:.3}),plant:nt({color:"#3d6b2f",roughness:.7}),plantLight:nt({color:"#7f9b3a",roughness:.7}),soil:nt({color:"#3a2c20",roughness:1}),plantDark:nt({color:"#2c4f24",roughness:.55}),stem:nt({color:"#4f7a34",roughness:.7}),petalPink:nt({color:"#e8738f",roughness:.6}),petalWhite:nt({color:"#f6f2ea",roughness:.6}),petalYellow:nt({color:"#f2c230",roughness:.6}),flowerCentre:nt({color:"#d99a1c",roughness:.8}),ceramic:nt({color:"#efece6",roughness:.25}),led:nt({color:"#ffffff",emissive:"#dff1ff",emissiveIntensity:2}),beanbag:nt({color:"#3b3d40",roughness:.95}),bottleYellow:nt({color:"#f2b705",roughness:.3,metalness:.4}),bottleBlue:nt({color:"#1f4fa8",roughness:.3,metalness:.4}),bottleTeal:nt({color:"#3ab7a6",roughness:.3}),red:nt({color:"#b23a2e",roughness:.6}),pergola:nt({color:"#8a4b3a",roughness:.8}),rail:nt({color:"#4a4a4a",roughness:.4,metalness:.6}),logo:nt({map:Kc("textures/logo.png"),transparent:!0,alphaTest:.4,roughness:.4}),logoText:nt({map:qy,transparent:!0,alphaTest:.3,roughness:.6}),gallery:nt({map:Kc("textures/gallery.jpg"),roughness:.6}),clock:nt({map:Yy,roughness:.5})};S.screens=[S.screenCode,S.screenCode,S.screenDash,S.screenDark];const go=new D;function ci(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;go.copy(e),go[n]=0,go.normalize();const l=.5*o/(o+a),u=1-go.angleTo(i)/c;return Math.sign(go[t])===1?u*l:a/(o+a)+l+l*(1-u)}class $y extends hn{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new D,c=new D,l=new D(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,d=u.length/6,g=new D,x=.5/s;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(a.fromArray(u,m),c.copy(a),c.x-=Math.sign(c.x)*x,c.y-=Math.sign(c.y)*x,c.z-=Math.sign(c.z)*x,c.normalize(),u[m+0]=l.x*Math.sign(a.x)+c.x*r,u[m+1]=l.y*Math.sign(a.y)+c.y*r,u[m+2]=l.z*Math.sign(a.z)+c.z*r,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/d)){case 0:g.set(1,0,0),f[p+0]=ci(g,c,"z","y",r,n),f[p+1]=1-ci(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),f[p+0]=1-ci(g,c,"z","y",r,n),f[p+1]=1-ci(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),f[p+0]=1-ci(g,c,"x","z",r,e),f[p+1]=ci(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),f[p+0]=1-ci(g,c,"x","z",r,e),f[p+1]=1-ci(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),f[p+0]=1-ci(g,c,"x","y",r,e),f[p+1]=1-ci(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),f[p+0]=ci(g,c,"x","y",r,e),f[p+1]=1-ci(g,c,"y","x",r,t);break}}}function lc(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Gt;let l=0;for(let u=0;u<i.length;++u){const h=i[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0;const h=[];for(let f=0;f<i.length;++f){const d=i[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=i[f].attributes.position.count}c.setIndex(h)}for(const u in r){const h=Bf(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let x=0;x<o[u].length;++x)d.push(o[u][x][f]);const g=Bf(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Bf(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Cn(o,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const h=c/t;for(let f=0,d=u.count;f<d;f++)for(let g=0;g<t;g++){const x=u.getComponent(f,g);a.setComponent(f+h,g,x)}}else o.set(u.array,c);c+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function zf(i,e){if(e===I0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===lu||e===Kd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===lu)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class jy extends Kr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new e2(t)}),this.register(function(t){return new t2(t)}),this.register(function(t){return new u2(t)}),this.register(function(t){return new h2(t)}),this.register(function(t){return new f2(t)}),this.register(function(t){return new i2(t)}),this.register(function(t){return new s2(t)}),this.register(function(t){return new r2(t)}),this.register(function(t){return new o2(t)}),this.register(function(t){return new Qy(t)}),this.register(function(t){return new a2(t)}),this.register(function(t){return new n2(t)}),this.register(function(t){return new l2(t)}),this.register(function(t){return new c2(t)}),this.register(function(t){return new Zy(t)}),this.register(function(t){return new d2(t)}),this.register(function(t){return new p2(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Do.extractUrlBase(e);o=Do.resolveURL(l,this.path)}else o=Do.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Lp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Up){try{o[_t.KHR_BINARY_GLTF]=new m2(e)}catch(h){s&&s(h);return}r=JSON.parse(o[_t.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new R2(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case _t.KHR_MATERIALS_UNLIT:o[h]=new Jy;break;case _t.KHR_DRACO_MESH_COMPRESSION:o[h]=new g2(r,this.dracoLoader);break;case _t.KHR_TEXTURE_TRANSFORM:o[h]=new x2;break;case _t.KHR_MESH_QUANTIZATION:o[h]=new _2;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Ky(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const _t={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Zy{constructor(e){this.parser=e,this.name=_t.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new ut(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],zn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ip(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new cc(u),l.distance=h;break;case"spot":l=new _y(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,$i(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Jy{constructor(){this.name=_t.KHR_MATERIALS_UNLIT}getMaterialType(){return Fn}extendParams(e,t,n){const s=[];e.color=new ut(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}}class Qy{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class e2{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Me(a,a)}return Promise.all(r)}}class t2{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class n2{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class i2{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],zn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Et)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class s2{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class r2{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ut().setRGB(a[0],a[1],a[2],zn),Promise.all(r)}}class o2{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class a2{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new ut().setRGB(a[0],a[1],a[2],zn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Et)),Promise.all(r)}}class c2{constructor(e){this.parser=e,this.name=_t.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class l2{constructor(e){this.parser=e,this.name=_t.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ki}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class u2{constructor(e){this.parser=e,this.name=_t.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class h2{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class f2{constructor(e){this.parser=e,this.name=_t.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class d2{constructor(e){this.name=_t.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class p2{constructor(e){this.name=_t.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==ui.TRIANGLES&&l.mode!==ui.TRIANGLE_STRIP&&l.mode!==ui.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const g of h){const x=new ht,m=new D,p=new Xn,v=new D(1,1,1),y=new w1(g.geometry,g.material,f);for(let _=0;_<f;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),y.setMatrixAt(_,x.compose(m,p,v));for(const _ in c)if(_==="_COLOR_0"){const I=c[_];y.instanceColor=new du(I.array,I.itemSize,I.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);Ot.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Up="glTF",xo=12,Hf={JSON:1313821514,BIN:5130562};class m2{constructor(e){this.name=_t.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-xo,r=new DataView(e,xo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Hf.JSON){const l=new Uint8Array(e,xo+o,a);this.content=n.decode(l)}else if(c===Hf.BIN){const l=xo+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class g2{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=_t.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=vu[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=vu[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Ir[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const x=d.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(d)},a,l,zn,f)})})}}class x2{constructor(){this.name=_t.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _2{constructor(){this.name=_t.KHR_MESH_QUANTIZATION}}class kp extends Yo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,x=g-l,m=-2*d+3*f,p=d-f,v=1-m,y=p-f+h;for(let _=0;_!==a;_++){const I=o[x+_+a],A=o[x+_+c]*u,w=o[g+_+a],R=o[g+_]*u;r[_]=v*I+y*A+m*w+p*R}return r}}const v2=new Xn;class y2 extends kp{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return v2.fromArray(r).normalize().toArray(r),r}}const ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vf={9728:Bn,9729:ti,9984:zd,9985:Fa,9986:So,9987:Ki},Gf={33071:ys,33648:qa,10497:Si},Jc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ds={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},M2={CUBICSPLINE:void 0,LINEAR:Oo,STEP:ko},Qc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function b2(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new zt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:es})),i.DefaultMaterial}function Bs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function w2(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function S2(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function E2(i){let e;const t=i.extensions&&i.extensions[_t.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+el(t.attributes):e=i.indices+":"+el(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+el(i.targets[n]);return e}function el(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function yu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function T2(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const A2=new ht;class R2{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ky,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ju(this.options.manager):this.textureLoader=new My(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Lp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Bs(r,a,s),$i(a,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[_t.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(Do.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Jc[s.type],a=Ir[s.componentType],c=s.normalized===!0,l=new a(s.count*o);return Promise.resolve(new Cn(l,o,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Jc[s.type],l=Ir[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let x,m;if(d&&d!==h){const p=Math.floor(f/d),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let y=t.cache.get(v);y||(x=new l(a,p*d,s.count*d/u),y=new mp(x,d/u),t.cache.add(v,y)),m=new Bo(y,c,f%d/u,g)}else a===null?x=new l(s.count*c):x=new l(a,f,s.count*c),m=new Cn(x,c,g);if(s.sparse!==void 0){const p=Jc.SCALAR,v=Ir[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,I=new v(o[1],y,s.sparse.count*p),A=new l(o[2],_,s.sparse.count*c);a!==null&&(m=new Cn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,R=I.length;w<R;w++){const M=I[w];if(m.setX(M,A[w*c]),c>=2&&m.setY(M,A[w*c+1]),c>=3&&m.setZ(M,A[w*c+2]),c>=4&&m.setW(M,A[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Vf[f.magFilter]||ti,u.minFilter=Vf[f.minFilter]||Ki,u.wrapS=Gf[f.wrapS]||Si,u.wrapT=Gf[f.wrapT]||Si,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Bn&&u.minFilter!==ti,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){const m=new an(x);m.needsUpdate=!0,f(m)}),t.load(Do.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),$i(h,o),h.userData.mimeType=o.mimeType||T2(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[_t.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[_t.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[_t.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new yp,bi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new zu,bi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return zt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[_t.KHR_MATERIALS_UNLIT]){const h=s[_t.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new ut(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],zn),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Et)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Bt);const u=r.alphaMode||Qc.OPAQUE;if(u===Qc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Qc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Fn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Me(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Fn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Fn){const h=r.emissiveFactor;a.emissive=new ut().setRGB(h[0],h[1],h[2],zn)}return r.emissiveTexture!==void 0&&o!==Fn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Et)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),$i(h,r),t.associations.set(h,{materials:e}),r.extensions&&Bs(s,h,r),h})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[_t.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Wf(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=E2(l),h=s[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[_t.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Wf(new Gt,l,t),s[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?b2(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const x=u[d],m=o[d];let p;const v=l[d];if(m.mode===ui.TRIANGLES||m.mode===ui.TRIANGLE_STRIP||m.mode===ui.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new y1(x,v):new Se(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ui.TRIANGLE_STRIP?p.geometry=zf(p.geometry,Kd):m.mode===ui.TRIANGLE_FAN&&(p.geometry=zf(p.geometry,lu));else if(m.mode===ui.LINES)p=new S1(x,v);else if(m.mode===ui.LINE_STRIP)p=new Hu(x,v);else if(m.mode===ui.LINE_LOOP)p=new vp(x,v);else if(m.mode===ui.POINTS)p=new E1(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&S2(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),$i(p,r),m.extensions&&Bs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&Bs(s,h[0],r),h[0];const f=new rt;r.extensions&&Bs(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kn(rm.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ku(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const f=new ht;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Bu(a,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],x=d.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let v=0,y=f.length;v<y;v++){const _=f[v],I=d[v],A=g[v],w=x[v],R=m[v];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();const M=n._createAnimationTracks(_,I,A,w,R);if(M)for(let b=0;b<M.length;b++)p.push(M[b])}return new ly(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=s.weights.length;c<l;c++)a.morphTargetInfluences[c]=s.weights[c]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,A2)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new xp:l.length>1?u=new rt:l.length===1?u=l[0]:u=new Ot,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),$i(u,r),r.extensions&&Bs(n,u,r),r.matrix!==void 0){const h=new ht;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new rt;n.name&&(r.name=s.createUniqueName(n.name)),$i(r,n),n.extensions&&Bs(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(s.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof bi||f instanceof an)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,c=[];ds[r.path]===ds.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(ds[r.path]){case ds.weights:l=Hr;break;case ds.rotation:l=Vr;break;case ds.position:case ds.scale:l=Gr;break;default:switch(n.itemSize){case 1:l=Hr;break;case 2:case 3:default:l=Gr;break}break}const u=s.interpolation!==void 0?M2[s.interpolation]:Oo,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const g=new l(c[f]+"."+ds[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=yu(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Vr?y2:kp;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function C2(i,e,t){const n=e.attributes,s=new Di;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){const u=yu(Ir[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,c=new D;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const x=yu(Ir[f.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Ni;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Wf(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=vu[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return bt.workingColorSpace!==zn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),$i(i,e),C2(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?w2(i,e.targets,t):i})}const tl=new Map;function _n(i,e){return tl.has(i)||tl.set(i,e()),tl.get(i)}function P2(i,e,t){const n=new qo,s=-i/2,r=-e/2;return n.moveTo(s+t,r),n.lineTo(s+i-t,r),n.quadraticCurveTo(s+i,r,s+i,r+t),n.lineTo(s+i,r+e-t),n.quadraticCurveTo(s+i,r+e,s+i-t,r+e),n.lineTo(s+t,r+e),n.quadraticCurveTo(s,r+e,s,r+e-t),n.lineTo(s,r+t),n.quadraticCurveTo(s,r,s+t,r),n}function Ao(i,e,t,n,s){const r=new sc(P2(i-2*s,e-2*s,Math.max(.001,n-s)),{depth:t-2*s,bevelEnabled:s>0,bevelThickness:s,bevelSize:s,bevelSegments:2,curveSegments:6});return r.translate(0,0,s),r}const La={shell:()=>_n("mon.shell",()=>{const i=Ao(.536,.322,.012,.008,.0025);return i.translate(0,.35-.005,-.0592-.012),i}),back:()=>_n("mon.back",()=>{const i=Ao(.42,.22,.016,.03,.006);i.translate(0,.335,-.0712-.016);const e=Ao(.22,.13,.014,.03,.006);return e.translate(0,.325,-.0872-.014),lc([i,e])}),arm:()=>_n("mon.arm",()=>{const i=new Mp([new D(0,.008,-.03),new D(0,.05,-.085),new D(0,.16,-.13),new D(0,.27,-.125),new D(0,.31,-.1)]),e=new oc(i,24,1,10,!1),t=e.attributes.position,n=new D,s=new D;for(let r=0;r<t.count;r++){const o=Math.floor(r/11),a=o/24;i.getPointAt(Math.min(1,a),s),n.set(t.getX(r),t.getY(r),t.getZ(r)).sub(s),t.setXYZ(r,s.x+n.x*.024,s.y+n.y*.008,s.z+n.z*.008)}return e.computeVertexNormals(),e}),foot:()=>_n("mon.foot",()=>{const i=Ao(.24,.17,.008,.07,.003);return i.rotateX(-Math.PI/2),i.translate(0,0,-.05),i})},Xf={base:()=>_n("kb.base",()=>{const i=Ao(.28,.108,.01,.008,.003);i.rotateX(-Math.PI/2);const e=i.attributes.position;for(let t=0;t<e.count;t++)e.getY(t)>.005&&e.getZ(t)<0&&e.setY(t,e.getY(t)+.004*(-e.getZ(t)/.054));return i.computeVertexNormals(),i.translate(-.01,0,.25),i}),keys:()=>_n("kb.keys",()=>{const i=[],s=(r,o,a)=>{const c=new hn(a,.004,.0155);c.translate(r,.0125+.004*(.304-o)/.108,o),i.push(c)};for(let r=0;r<5;r++){const o=.213+r*.0185;if(r===4){let c=-.132;for(const l of[1,1,1.25,6.5,1.25,1,1,1]){const u=l*.0185-.002999999999999999;s(c+u/2,o,u),c+=l*.0185}continue}const a=14;for(let c=0;c<a;c++)s(-.01-.13+.008+.0155/2+c*.0185+r%2*.004,o,.0155)}return lc(i)})},qf={shell:()=>_n("mouse.shell",()=>{const i=new qt(1,20,12,0,Math.PI*2,0,Math.PI/2);i.scale(.03,.022,.054);const e=i.attributes.position;for(let t=0;t<e.count;t++)e.setY(t,e.getY(t)*(1+.15*Math.max(0,e.getZ(t)/.054)));return i.computeVertexNormals(),i}),wheel:()=>_n("mouse.wheel",()=>{const i=new ni(.006,.006,.005,12);return i.rotateZ(Math.PI/2),i})},Yf={body:()=>_n("bottle.body",()=>new qr([[0,0],[.028,0],[.032,.006],[.032,.16],[.03,.18],[.022,.196],[.019,.2],[0,.2]].map(([i,e])=>new Me(i,e)),18)),cap:()=>_n("bottle.cap",()=>new ni(.02,.021,.03,16).translate(0,.215,0))};function Op(i=0,{width:e=.09,thick:t=.016,bend:n=.08,twist:s=.5}={}){return _n(`blade.${i}.${e}.${t}.${n}.${s}`,()=>{const o=[],a=[],c=n*(.6+.4*(i*37%10)/10)*(i%2?-1:1),l=s*(i%3===2?-1:1);for(let f=0;f<=10;f++){const d=f/10,g=e/2*Math.sin(Math.PI*Math.min(1,.12+d*.95))*(1-.35*d),x=t/2*(1-d*.85),m=l*d,p=Math.cos(m),v=Math.sin(m),y=c*d*d;for(const[_,I]of[[-g,0],[0,x],[g,0],[0,-x]])o.push(_*p-I*v,d,y+_*v+I*p)}const u=o.length/3;o.push(0,1.04,c*1.08);for(let f=0;f<10;f++)for(let d=0;d<4;d++){const g=f*4+d,x=f*4+(d+1)%4,m=g+4,p=x+4;a.push(g,x,m,x,p,m)}for(let f=0;f<4;f++)a.push(10*4+f,10*4+(f+1)%4,u);a.push(0,2,1,0,3,2);const h=new Gt;return h.setAttribute("position",new xt(o,3)),h.setIndex(a),h.computeVertexNormals(),h})}function L2(i,e){return _n(`planter.${i}.${e}`,()=>{const t=i/2-.004,n=t*.78,s=new qr([[0,.002],[n-.01,0],[n,.012],[t-.012,e-.03],[t,e-.02],[t,e-.004],[t-.006,e],[t-.016,e-.004],[t-.018,e-.04]].map(([o,a])=>new Me(o,a)),32),r=new si(t-.016,28).rotateX(-Math.PI/2).translate(0,e-.035,0);return{pot:s,soil:r,soilY:e-.035}})}const Ia={petal:()=>_n("fl.petal",()=>{const i=new qt(1,10,6);return i.scale(.011,.0025,.022),i.translate(0,0,.02),i}),centre:()=>_n("fl.centre",()=>new qt(.009,10,8).scale(1,.6,1)),pot:()=>_n("fl.pot",()=>new qr([[0,.002],[.04,0],[.046,.01],[.058,.1],[.062,.108],[.06,.112],[.054,.105]].map(([i,e])=>new Me(i,e)),28)),soil:()=>_n("fl.soil",()=>new si(.055,20).rotateX(-Math.PI/2).translate(0,.1,0))};function I2(i){const e=`stem.${i.map(t=>t.toFixed(3)).join(",")}`;return _n(e,()=>{const t=new Wu(new D(0,0,0),new D(i[0]*.2,i[1]*.6,i[2]*.2),new D(...i));return new oc(t,10,.0025,5,!1)})}new jy;const D2=new hn(1,1,1);function T(i,e,t,n,s,r,o,a,{shadow:c=!0,ry:l=0,rx:u=0,rz:h=0}={}){const f=new Se(D2,e);return f.scale.set(t,n,s),f.position.set(r,o,a),f.rotation.set(u,l,h),f.castShadow=c,f.receiveShadow=!0,i.add(f),f}function st(i,e,t,n,s,r,o,a,{seg:c=12,shadow:l=!0,rx:u=0,rz:h=0,open:f=!1}={}){const d=new Se(new ni(t,n,s,c,1,f),e);return d.position.set(r,o,a),d.rotation.set(u,0,h),d.castShadow=l,d.receiveShadow=!0,i.add(d),d}function ji(i,e,t,n,s,r,o,a,c){const l=new Se(new $y(t,n,s,2,r),e);return l.position.set(o,a,c),l.castShadow=!0,l.receiveShadow=!0,i.add(l),l}function wt(i,e,t,n,s,r,o,a=0,c=0){const l=new Se(new gt(t,n),e);return l.position.set(s,r,o),l.rotation.set(c,a,0,"YXZ"),l.receiveShadow=!0,i.add(l),l}function rn(i,e,t,n=0,s=0,r=0,{shadow:o=!0,rx:a=0,ry:c=0,rz:l=0,s:u=null}={}){const h=new Se(e,t);return h.position.set(n,s,r),h.rotation.set(a,c,l),u&&(Array.isArray(u)?h.scale.set(...u):h.scale.setScalar(u)),h.castShadow=o,h.receiveShadow=!0,i.add(h),h}function Hn(i,e=0,t=0,n=0,s=0){const r=new rt;return r.position.set(e,t,n),r.rotation.y=s,i.add(r),r}function Dr(i,e,t,n=0,{exec:s=!1}={}){const r=Hn(i,e,0,t,n);r.userData.label="Chair";for(let c=0;c<5;c++){const l=c/5*Math.PI*2,u=T(r,S.black,.04,.035,.32,Math.sin(l)*.15,.07,Math.cos(l)*.15,{ry:l});u.castShadow=!1,st(r,S.black,.025,.025,.04,Math.sin(l)*.3,.03,Math.cos(l)*.3,{seg:6,shadow:!1})}st(r,S.chrome,.025,.025,.32,0,.26,0,{seg:8}),ji(r,S.fabric,.5,.08,.48,.03,0,.47,0);const o=s?.75:.55;T(r,S.black,.04,.5,.04,0,.62,-.25);const a=T(r,S.mesh,.46,o,.05,0,.62+o/2,-.27,{rx:-.1});a.material=S.mesh,s&&T(r,S.mesh,.3,.14,.06,0,1.45,-.33,{rx:-.1});for(const c of[-1,1])T(r,S.black,.035,.22,.035,c*.26,.6,-.02),T(r,S.black,.06,.025,.24,c*.26,.72,.02);return r}function Fp(i,e,t,n=0){const s=Hn(i,e,0,t,n);s.userData.label="Visitor chair";for(const r of[-1,1])T(s,S.chrome,.025,.025,.5,r*.22,.012,.05),T(s,S.chrome,.025,.45,.025,r*.22,.23,.29,{rx:.05});return T(s,S.fabric,.48,.06,.46,0,.47,.05),T(s,S.mesh,.46,.5,.04,0,.78,-.2,{rx:-.12}),s}function N2(i,e,t,n,s=0){const r=Hn(i,e,.77,t,n);r.userData.label="Monitor",rn(r,La.foot(),S.black),rn(r,La.arm(),S.silver),rn(r,La.back(),S.black),rn(r,La.shell(),S.black),wt(r,s%3===2?S.screenDash:S.screenCode,.52,.3,0,.35,-.058),T(r,S.led,.006,.0025,.002,.235,.35-.1665,-.0585,{shadow:!1});const o=-.26,a=.06;ji(r,S.black,.114,.006,.114,.002,o,.003,a),ji(r,S.silver,.12,.03,.12,.012,o,.021,a),wt(r,S.macTop,.09,.09,o,.0365,a,0,-Math.PI/2),T(r,S.black,.012,.004,.002,o-.03,.021,a+.0605,{shadow:!1}),T(r,S.black,.012,.004,.002,o-.012,.021,a+.0605,{shadow:!1}),T(r,S.white,.004,.004,.002,o+.04,.021,a+.0605,{shadow:!1}),rn(r,Xf.base(),S.silver,0,0,0,{shadow:!1}),rn(r,Xf.keys(),S.white,0,0,0,{shadow:!1});const c=.24,l=.24;return rn(r,qf.shell(),S.blackMatte,c,0,l),T(r,S.black,.0015,.003,.024,c,.0195,l-.02,{shadow:!1,rx:.25}),rn(r,qf.wheel(),S.chrome,c,.0185,l-.024,{shadow:!1}),s%3===0&&(rn(r,Yf.body(),S.bottleYellow,.28,0,-.04),rn(r,Yf.cap(),S.black,.28,0,-.04,{shadow:!1})),r}function $f(i,e,t,n,{width:s=1.5,seats:r=!0,solidFn:o,seatW:a=1.1,chairOff:c=.12,sides:l=[-1,1]}={}){const u=Hn(i,e,0,0);u.userData.label="Desk";const h=n-t,f=(t+n)/2;T(u,S.greyOak,s,.04,h,0,.75,f),T(u,S.oakEdge,s+.004,.012,h+.004,0,.734,f,{shadow:!1});const d=Math.max(2,Math.round(h/2)+1);for(let m=0;m<d;m++){const p=t+.12+m/(d-1)*(h-.24);for(const v of[-1,1])T(u,S.black,.05,.78,.05,v*(s/2-.22),.37,p,{rz:v*.2}),T(u,S.black,.05,.78,.05,v*(s/2-.22),.37,p,{rz:-v*.2});T(u,S.black,s-.2,.05,.05,0,.72,p)}if(o&&o(e-s/2,t,e+s/2,n),!r)return u;const g=Math.max(1,Math.floor(h/a+1e-6));let x=0;for(const m of l)for(let p=0;p<g;p++){const v=t+(p+.5)*(h/g),y=l.length===2?m*.22:-m*(s/2-.2);N2(u,y,v,m*Math.PI/2,x++);const _=e+m*(s/2+c);Dr(i,_,v,m>0?-Math.PI/2:Math.PI/2),o&&o(_-.2,v-.2,_+.2,v+.2)}return u}function Qu(i,e,t,n=0,s=2){const r=Hn(i,e,0,t,n);r.userData.label="Sofa";const o=s*.75+.3;ji(r,S.leather,o,.38,.9,.06,0,.24,0),ji(r,S.leather,o,.5,.22,.08,0,.62,-.34);for(const a of[-1,1])ji(r,S.leather,.18,.62,.9,.06,a*(o/2-.09),.33,0);for(let a=0;a<s;a++){const c=-o/2+.15+.75*(a+.5);ji(r,S.leather,.72,.14,.62,.06,c,.49,.08);const l=ji(r,S.leather,.5,.4,.14,.07,c,.78,-.18);l.rotation.x=-.18}return r}function uc(i,e,t,n,s=9,r=.8){const o=Hn(i,e,t,n);o.userData.label="Plant";for(let a=0;a<s;a++){const c=r*(.6+it()*.6),l=it()>.3;rn(o,Op(a%5),l?S.plant:a%2?S.plantDark:S.plantLight,(it()-.5)*.3,0,(it()-.5)*.2,{s:[1,c,1]}).rotation.set((it()-.5)*.35,it()*Math.PI,(it()-.5)*.35)}return o}function eh(i,e,t,{size:n=.45,h:s=.45,mat:r=S.white}={}){const o=Hn(i,e,0,t);o.userData.label="Plant";const{pot:a,soil:c,soilY:l}=L2(n,s);return rn(o,a,r),rn(o,c,S.soil,0,0,0,{shadow:!1}),uc(o,0,l-.01,0,11,.9),o}function Bp(i,e,t,n,{petal:s=S.petalPink,n:r=5,scale:o=1}={}){const a=Hn(i,e,t,n);a.userData.label="Flowers",a.scale.setScalar(o),rn(a,Ia.pot(),S.ceramic),rn(a,Ia.soil(),S.soil,0,0,0,{shadow:!1});const c=l=>{const u=Math.sin(l*127.1+e*311.7+n*74.7)*43758.5453;return u-Math.floor(u)};for(let l=0;l<r;l++){const u=l/r*Math.PI*2+c(l)*.6,h=.025+c(l+9)*.06,f=.16+c(l+3)*.12,d=[Math.cos(u)*h,f,Math.sin(u)*h];rn(a,I2(d),S.stem,0,.1,0,{shadow:!1});const g=Hn(a,d[0],.1+d[1],d[2]);g.rotation.set(Math.sin(u)*.5,0,-Math.cos(u)*.5);const x=6;for(let m=0;m<x;m++)rn(g,Ia.petal(),s,0,0,0,{ry:m/x*Math.PI*2+c(l+m)*.2,rx:-.35,shadow:!1});rn(g,Ia.centre(),S.flowerCentre,0,.003,0,{shadow:!1})}for(let l=0;l<6;l++)rn(a,Op(l,{width:.035,thick:.006,bend:.06,twist:.3}),l%2?S.plant:S.plantDark,0,.098,0,{s:[1,.11+c(l+20)*.05,1],shadow:!1}).rotation.set(.7+c(l+30)*.3,l/6*Math.PI*2,0,"YXZ");return a}function zp(i,e,t,n=S.beanbag){const s=new Se(new qt(.5,20,14),n);return s.scale.set(1,.65,1.05),s.position.set(e,.3,t),s.userData.label="Bean bag",s.castShadow=!0,s.receiveShadow=!0,i.add(s),s}function U2(i,e,t,n,{yellowCubbies:s=[]}={}){const r=Hn(i,e,0,0);r.userData.label="Shelving";const o=n-t,a=(t+n)/2,c=.4,l=2.4,u=.55;T(r,S.white,c,u,o,0,u/2,a);const h=Math.max(1,Math.round(o/1.1));for(let d=0;d<h;d++){const g=t+(d+.5)*(o/h);T(r,S.blackMatte,.3,.32,.3,0,u+.16,g),uc(r,0,u+.32,g,7,.6)}for(const d of[t+.02,n-.02])for(const g of[-1,1])T(r,S.black,.025,l-u,.025,g*c/2,u+(l-u)/2,d);for(const d of[1.55,l]){for(const g of[-1,1])T(r,S.black,.025,.025,o,g*c/2,d,a,{shadow:!1});T(r,S.black,c,.012,o,0,d-.01,a,{shadow:!1})}const f=Math.max(1,Math.round(o/.65));for(let d=1;d<f;d++)for(const g of[-1,1])T(r,S.black,.02,l-u,.02,g*c/2,u+(l-u)/2,t+d/f*o,{shadow:!1});for(const d of s){if(d.i>=f)continue;const g=t+(d.i+.5)*(o/f),x=d.row===0?1.2:1.9;T(r,S.yellow,c-.05,.45,o/f-.08,0,x,g)}for(let d=0;d<f;d++)it()<.3&&T(r,S.blackMatte,.12,.15+it()*.1,.12,0,1.55+.09,t+(d+.5)*(o/f));return r}function Hp(i,e,t,n=2.4,s=0,r=2.6,o=3.6){const a=Hn(i,e,r,t,s);a.userData.label="Light",T(a,S.black,n,.06,.08,0,0,0,{shadow:!1}),wt(a,S.lightStrip,n-.04,.05,0,-.031,0,0,Math.PI/2);for(const c of[-.4,.4])st(a,S.black,.003,.003,o-r,c*n,(o-r)/2,0,{seg:3,shadow:!1});return a}function Za(i,e,t,n=2.2,s=3.6,r=1){const o=Hn(i,e,n,t);o.userData.label="Pendant light",st(o,S.black,.004,.004,s-n,0,(s-n)/2,0,{seg:3,shadow:!1});const a=new Se(new qu(.18*r,.26*r,20,1,!0),S.black);a.position.y=-.1*r,a.material.side=Bt,o.add(a),st(o,S.black,.02,.02,.06,0,.05,0,{seg:8,shadow:!1});const c=new Se(new si(.15*r,16),S.spotGlow);return c.rotation.x=Math.PI/2,c.position.y=-.22*r,o.add(c),o}function k2(i,e,t,n){st(i,S.black,.05,.05,.12,e,n-.06,t,{seg:10,shadow:!1});const s=new Se(new si(.035,10),S.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,n-.121,t),i.add(s)}function th(i,e,t,n,s=0){const r=Hn(i,e,t,n,s);return r.userData.label="AC unit",ji(r,S.white,.9,.28,.2,.05,0,0,.1),T(r,S.metalDark,.8,.02,.02,0,-.1,.2,{shadow:!1}),r}function O2(i,e,t,n=3){T(i,S.white,.85,.12,.85,e,n,t,{shadow:!1}),T(i,S.metalDark,.55,.02,.55,e,n-.065,t,{shadow:!1})}function F2(i,e,t,n,s=0,r=2.4){const o=n-t,a=Hn(i,e,0,(t+n)/2,s);a.userData.label="Lockers";const c=Math.round(o/.5),l=5,u=o/c,h=(r-.1)/l;T(a,S.white,.02,r,o,-.265,r/2,0),T(a,S.white,.55,.1,o,0,.05,0);for(let f=0;f<=l;f++)T(a,S.white,.55,.02,o,0,f===l?r-.01:.1+f*h,0);for(let f=0;f<=c;f++)T(a,S.white,.55,r,.02,0,r/2,-o/2+f*u+(f===c?-.01:f===0?.01:0));a.updateMatrixWorld(!0);for(let f=0;f<c;f++)for(let d=0;d<l;d++){const g=-o/2+(f+.5)*u,x=.1+(d+.5)*h;it()<.35&&T(a,it()<.5?S.bottleYellow:S.black,.22,.05+it()*.12,u-.16,0,.1+d*h+.02+.03,g,{shadow:!1});const m=new rt;m.position.copy(a.localToWorld(new D(.285,x,g-u/2+.01))),m.rotation.y=a.rotation.y,T(m,S.whiteGloss,.01,h-.02,u-.02,0,0,u/2-.01,{shadow:!1}),T(m,S.metalDark,.02,.07,.07,.01,.08,u-.09,{shadow:!1,rx:Math.PI/4}),Ja.push({leaf:m,closed:a.rotation.y,open:a.rotation.y+1.9,center:a.localToWorld(new D(.285,x,g))})}return a}function B2(i,e,t,n,s=0){const r=Hn(i,e,t,n,s);r.userData.label="Wall clock";const o=new Se(new si(.2,32),S.clock);o.position.z=.03,r.add(o);const a=new Se(new Yr(.2,.02,8,32),S.black);return a.position.z=.03,r.add(a),r}const gs=[];function Ke(i,e,t,n){gs.push({minX:Math.min(i,t),maxX:Math.max(i,t),minZ:Math.min(e,n),maxZ:Math.max(e,n)})}const _o=new Di;function On(i,e=0){return i.updateMatrixWorld(!0),_o.setFromObject(i),Ke(_o.min.x-e,_o.min.z-e,_o.max.x+e,_o.max.z+e),i}function z2(i,e,t){return!!Mu(i,e,t)}function Mu(i,e,t){for(const n of gs)if(i+t>n.minX&&i-t<n.maxX&&e+t>n.minZ&&e-t<n.maxZ)return n;return null}function H2(i,e,t,n){const s=Math.max(1,Math.ceil(Math.max(Math.abs(e),Math.abs(t))/(n*.5))),r=e/s,o=t/s;for(let a=0;a<s;a++){if(r){const c=i.x+r,l=Mu(c,i.z,n);l?i.x=r>0?l.minX-n-1e-4:l.maxX+n+1e-4:i.x=c}if(o){const c=i.z+o,l=Mu(i.x,c,n);l?i.z=o>0?l.minZ-n-1e-4:l.maxZ+n+1e-4:i.z=c}}}const Ye=3.6,tt=3,sn=10.05,Dt=10.3,yt=18.7,vs=3.5,xn=3,Yt=5.75,Ft=3,br=6.15,Ji=8.9,kt=7.95,Jt=7.3,xs=.15,No=[12.45,15.45],An=.5,Go=2.9,Ct=9.25,jf=yt,Vn=3.7,Ut=22.6,bu=[20,21.6],V2=25.2,xi=6.6,Tn=27.2,G2=[2.3,3.2];function qs(i,e,t,n){const s=i.attributes.uv;for(let r=0;r<s.count;r++)s.setXY(r,s.getX(r)*e/n,s.getY(r)*t/n);return s.needsUpdate=!0,i}function Rt(i,e,t,n,s,r,o,{down:a=!1,tile:c=2.4}={}){const l=s-t,u=r-n,h=qs(new gt(l,u),l,u,c),f=new Se(h,e);return f.rotation.x=a?Math.PI/2:-Math.PI/2,f.position.set((t+s)/2,o,(n+r)/2),f.receiveShadow=!0,i.add(f),f}function Qt(i,e,t,n,s,{h:r=Ye,mat:o=S.wall,t:a=.2,y0:c=0,collide:l=!0}={}){const u=Math.abs(n-e)>=Math.abs(s-t),h=u?Math.abs(n-e):a,f=u?a:Math.abs(s-t),d=T(i,o,h,r,f,(e+n)/2,c+r/2,(t+s)/2);return d.userData.label="Wall",l&&c<1.5&&Ke((e+n)/2-h/2,(t+s)/2-f/2,(e+n)/2+h/2,(t+s)/2+f/2),d}const hc=[],Ja=[],wn={x:10.3+.03,y:1.25,z:9.8};function Tr(i,{x0:e,z0:t,x1:n,z1:s,h:r=3,door:o=null,transom:a=2.3,frost:c=!1,panel:l=1.1,swing:u=1,name:h="door"}){const f=t===s,d=new rt;d.userData.label="Glass wall",i.add(d),i=d;const g=f?e:t,x=f?n:s,m=f?t:e,p=(_,I,A,w,R)=>f?T(i,S.black,w,R,A,_,I,m,{shadow:!0}):T(i,S.black,A,R,w,m,I,_,{shadow:!0}),v=(_,I,A,w)=>{const R=new Se(new gt(I-_,w-A),c?S.glassFrost:S.glass);R.position.set(f?(_+I)/2:m,(A+w)/2,f?m:(_+I)/2),f||(R.rotation.y=Math.PI/2),R.renderOrder=2,i.add(R)},y=o?[[g,Math.min(...o)],[Math.max(...o),x]]:[[g,x]];for(const[_,I]of y){if(I-_<.01)continue;v(_,I,.05,r);const A=Math.max(1,Math.round((I-_)/l));for(let w=0;w<=A;w++)p(_+w/A*(I-_),r/2,.05,.05,r);p((_+I)/2,.04,.06,I-_,.08),a&&a<r&&p((_+I)/2,a,.05,I-_,.05),f?Ke(_,m-.06,I,m+.06):Ke(m-.06,_,m+.06,I)}if(p((g+x)/2,r-.03,.06,x-g,.06),o){const[_,I]=o,A=Math.abs(I-_);v(Math.min(_,I),Math.max(_,I),a,r),p((_+I)/2,a,.06,A,.06);const w=new rt;w.position.set(f?_:m,0,f?m:_);const R=Math.sign(I-_),M=A-.04,b=new Se(new gt(M,a-.1),S.glass);b.position.set(R*M/2,a/2,0),w.add(b);for(const Z of[0,1])T(w,S.black,.04,a-.08,.04,R*Z*M,a/2,0);T(w,S.black,M,.05,.04,R*M/2,.06,0),T(w,S.black,M,.04,.04,R*M/2,a-.08,0),T(w,S.chrome,.02,.35,.03,R*(M-.1),1.05,.04);const C=f?0:-Math.PI/2,z=C+(f?-1:1)*u*R*1.4;w.rotation.y=C;const H=Math.min(_,I),q=Math.max(_,I);hc.push({leaf:w,closed:C,open:z,name:h,handle:[R*(M-.1),1.2,.04],x:f?(_+I)/2:m,z:f?m:(_+I)/2,block:f?{minX:H,maxX:q,minZ:m-.06,maxZ:m+.06}:{minX:m-.06,maxX:m+.06,minZ:H,maxZ:q}})}}function vo(i,e,t,n,s,r){const o=t===s,a=o?n-e:s-t,c=new Se(new gt(a,r),S.glass);c.position.set((e+n)/2,r/2,(t+s)/2),o||(c.rotation.y=Math.PI/2),c.renderOrder=2,i.add(c);const l=Math.max(1,Math.round(a/1.2));for(let u=0;u<=l;u++)o?T(i,S.black,.07,r,.1,e+u/l*a,r/2,t):T(i,S.black,.1,r,.07,e,r/2,t+u/l*a);for(const u of[.08,.55,Math.min(2.45,r-.3),r-.04]){const h=u<.1?.16:.07;o?T(i,S.black,a,h,.1,(e+n)/2,u,t,{shadow:u>2}):T(i,S.black,.1,h,a,e,u,(t+s)/2,{shadow:u>2})}o?Ke(e,t-.08,n,t+.08):Ke(e-.08,t,e+.08,s)}function W2(i){Rt(i,S.diamond,0,vs,Ft,kt,tt,{down:!0}),Rt(i,S.diamond,Ft,Yt,Jt,kt,tt,{down:!0}),Rt(i,S.diamond,Jt,Yt,Dt,Ct,tt,{down:!0});for(const[e,t]of[[1,4.4],[1,6.8],[2.4,6.8],[4,7],[5.6,7],[7.9,6.9],[9.4,8.6],[8.2,8.9]])k2(i,e,t,tt);T(i,S.yellow,Jt,Ye-tt,.08,Jt/2,tt+(Ye-tt)/2,kt+.04,{shadow:!1}),T(i,S.yellow,Jt,.07,.14,Jt/2,tt-.035,kt,{shadow:!1}),Rt(i,S.white,0,0,Ft,vs,tt,{down:!0}),Rt(i,S.white,Ft,xn,Ji,Yt,tt,{down:!0});for(const[e,t]of[[1.5,1.6],[5,4.5],[8.2,4.5]])T(i,S.whiteGloss,.35,.02,.35,e,tt-.01,t,{shadow:!1});Rt(i,S.ceilingBlack,0,kt,sn,yt,Ye,{down:!0});for(const e of[12.3,15.3])T(i,S.ceilingBlack,sn,.5,.4,sn/2,Ye-.25,e,{shadow:!1});st(i,S.ceilingBlack,.2,.2,sn,sn/2,Ye-.45,9.2,{rz:Math.PI/2,shadow:!1,seg:14}),st(i,S.red,.04,.04,yt-kt,4.6,Ye-.3,(kt+yt)/2,{rx:Math.PI/2,shadow:!1,seg:8}),st(i,S.red,.04,.04,sn,sn/2,Ye-.3,17.9,{rz:Math.PI/2,shadow:!1,seg:8});for(const[e,t]of[[2,12.2],[5.5,12.2],[2,15.3],[5.5,15.3],[8.6,12.2]])O2(i,e,t,Ye-.62)}function Kf(i,e,t,n,s){const r=Math.hypot(n-e,s-t);T(i,S.blackMatte,.01,.012,r,Jt+.008,(t+s)/2,(e+n)/2,{shadow:!1,rx:Math.atan2(-(s-t),n-e)})}function X2(i){T(i,S.concrete,xs,tt,Ct-7.4,Jt-xs/2,tt/2,(7.4+Ct)/2),T(i,S.wall,xs,Ye-tt,Ct-7.4,Jt-xs/2,tt+(Ye-tt)/2,(7.4+Ct)/2,{shadow:!1}),Ke(Jt-xs,7.4,Jt,Ct+.35);const t=Ct-7.4,n=new Se(qs(new gt(t,tt),t,tt,1.6),S.concrete);n.position.set(Jt+.003,tt/2,(7.4+Ct)/2),n.rotation.y=Math.PI/2,n.receiveShadow=!0,n.userData.label="Logo wall",i.add(n),Kf(i,Ct,3,7.4+.1,1),Kf(i,7.4+.1,1,7.4+.9,0),wt(i,S.logo,.5,.72,Jt+.03,2.35,8.25,Math.PI/2),wt(i,S.logoText,1,.35,Jt+.02,1.78,8.3,Math.PI/2),On(Qu(i,Jt+.47,8.4,Math.PI/2,2)),T(i,S.concrete,.5,tt-.004,.32,Jt-.15,(tt-.004)/2,7.4+.14),Qt(i,Jt-xs,Ct+.175,8.3,Ct+.175,{h:Ye,t:.35});const s=wt(i,S.glassFrost,Dt-8.3,tt-.1,(8.3+Dt)/2,tt/2,Ct);s.renderOrder=2;for(const[a,c,l]of[[8.7,1.5,.5],[9.25,.9,-.4],[9.25,2.2,.6],[9.85,1.4,-.5]])T(i,S.concrete,.45,1,.01,a,c,Ct-.02,{rz:l,shadow:!1});for(const a of[8.3,9.35,Dt])T(i,S.black,.05,tt,.06,a,tt/2,Ct);T(i,S.black,Dt-8.3,.06,.06,(8.3+Dt)/2,.03,Ct),T(i,S.wall,Dt-8.3,Ye-tt,.15,(8.3+Dt)/2,tt+(Ye-tt)/2,Ct,{shadow:!1}),Ke(8.3,Ct-.08,Dt,Ct+.08),Tr(i,{x0:Dt,z0:Yt,x1:Dt,z1:Ct,h:tt,panel:.9,door:[7.6,8.65],transom:2.4,swing:-1,name:"entrance door"}),T(i,S.metalDark,.06,.05,.4,Dt-.06,2.3,8.4,{shadow:!1}),T(i,S.wall,.15,Ye-tt,Ct-Yt,Dt,tt+(Ye-tt)/2,(Yt+Ct)/2,{shadow:!1}),T(i,S.blackMatte,.6,.01,1,Dt-.45,.005,8.12,{shadow:!1}),T(i,S.concrete,Dt-Ji,Ye,Yt-xn,(Ji+Dt)/2,Ye/2,(xn+Yt)/2),Ke(Ji,xn,Dt+.05,Yt);const r=new rt;r.position.set(9.85,0,Yt),i.add(r),T(r,S.cream,.56,2.3,.3,0,1.25,.15);for(const a of[.75,1.3,1.85,2.35])T(r,S.white,.58,.035,.32,0,a,.16);for(const[a,c,l]of[[-.14,1.87,.3],[.14,1.87,.26],[0,2.37,.34]])st(r,S.bottleYellow,.035,.05,l,a,c+l/2,.16,{seg:10});for(const[a,c,l]of[[-.12,1.32,S.gallery],[.13,1.32,S.red],[0,.77,S.gallery]])T(r,S.black,.2,.26,.03,a,c+.14,.16,{rx:-.12}),T(r,l,.16,.2,.01,a,c+.14,.178,{shadow:!1,rx:-.12});Ke(9.55,Yt,10.15,Yt+.32),T(i,S.white,.13,.16,.04,9.2,1.35,Yt+.02),T(i,S.bottleBlue,.07,.05,.01,9.2,1.38,Yt+.045,{shadow:!1});const o=new rt;o.userData.label="Reception desk",o.position.set(9.3,0,6.6),i.add(o),T(o,S.cream,.7,.05,1.25,0,.8,0),T(o,S.cream,.05,.78,1.25,-.33,.39,0,{rz:.12});for(const a of[-1,1])T(o,S.cream,.65,.78,.05,0,.39,a*.6);T(o,S.black,.05,.05,1.15,-.4,.03,0),st(o,S.black,.035,.035,.01,.1,.83,.3,{seg:12}),Bp(o,.12,.825,-.4,{petal:S.petalPink,n:6}),On(o),Za(i,9.1,6.5,2.15,tt,1.3),T(i,S.white,.08,.08,.06,Jt+.05,2.85,9.1),On(eh(i,9.95,8.95,{size:.4,h:.45}))}function Vp(i,e,t,n=1.6,{monitor:s=!1}={}){const r=new rt;r.userData.label="Cabin desk",r.position.set(e,0,t),i.add(r),T(r,S.whiteGloss,n,.05,.8,0,.77,0),T(r,S.woodDark,n-.1,.72,.05,0,.38,.36);for(let o=0;o<6;o++)T(r,S.black,n-.15,.02,.01,0,.15+o*.1,.39,{shadow:!1});T(r,S.woodDark,.05,.72,.75,-n/2+.05,.38,0),T(r,S.woodDark,.45,.72,.6,n/2-.25,.38,0),s&&(T(r,S.black,.5,.31,.03,-.25,1.12,-.2),T(r,S.black,.04,.3,.03,-.25,.94,-.23)),On(r)}function q2(i,e,t,n,s){const r=new rt;r.userData.label="Built-in shelves",r.position.set(e+s*.2,0,(t+n)/2),i.add(r);const o=n-t;T(r,S.white,.4,2.7,o,0,1.35,0);const a=Math.max(1,Math.round(o/.8));for(let c=0;c<a;c++){const l=-o/2+(c+.5)*(o/a);for(const u of[1.2,1.65,2.1])T(r,S.whiteGloss,.02,.03,o/a-.06,s*.2,u,l,{shadow:!1});for(const u of[.25,.6,.95])T(r,S.whiteGloss,.02,.32,o/a-.06,s*.205,u,l,{shadow:!1});it()<.6&&T(r,S.black,.04,.18,.2,s*.12,1.32,l),it()<.6&&T(r,S.gallery,.12,.2,.15,s*.12,1.75,l+.2)}Ke(Math.min(e,e+s*.4),t,Math.max(e,e+s*.4),n)}function Zf(i,e,t,n){const s=t-e,r=new Se(qs(new gt(s,tt),s,tt,1.6),S.concrete);r.position.set((e+t)/2,tt/2,n+.105),r.receiveShadow=!0,i.add(r)}function Jf(i,e,t,{chairsZ:n,back:s,len:r=1.6,visitors:o=[-.4,.4],monitor:a=!1}){Vp(i,e,t,r,{monitor:a}),On(Dr(i,e-.1,t-.75,0,{exec:!0}),-.1);for(const c of o)On(Fp(i,e+c,n,Math.PI),-.05);th(i,e,2.55,s+.11,0)}function Y2(i){Qt(i,Ft,xn,Ji,xn,{h:Ye}),Qt(i,Ft,0,Ft,vs,{h:Ye}),Tr(i,{x0:Ft,z0:vs,x1:Ft,z1:Yt,h:tt}),Qt(i,Ft,vs,Ft,Yt,{h:Ye-tt,y0:tt,collide:!1}),Tr(i,{x0:br,z0:xn,x1:br,z1:Yt,h:tt}),Zf(i,Ft+.1,br-.08,xn),Zf(i,br+.08,Ji,xn),Tr(i,{x0:Ft,z0:Yt,x1:br,z1:Yt,h:tt,door:[6.05,5.15],swing:-1,name:"Cabin 2 door"}),Tr(i,{x0:br,z0:Yt,x1:Ji,z1:Yt,h:tt,door:[6.25,7.15],swing:-1,name:"Cabin 1 door"}),Tr(i,{x0:0,z0:vs,x1:Ft,z1:vs,h:tt,door:[.15,1.05],swing:-1,name:"Corner cabin door"}),Jf(i,7.35,4.35,{chairsZ:5.15,back:xn,len:1.6,visitors:[.35,.85]}),q2(i,Ji,xn+.1,5.65,-1),Jf(i,4,4.35,{chairsZ:5.15,back:xn,len:1.5,monitor:!1}),On(eh(i,5.35,3.45,{size:.35,h:.4})),Vp(i,1.6,1.85),On(Dr(i,1.5,1.05,0,{exec:!0}),-.1);for(const t of[1.35,2.05])On(Fp(i,t,2.95,Math.PI),-.05);T(i,S.concrete,.55,tt,.55,Ft-.38,tt/2,.38),Ke(Ft-.65,0,Ft,.65),th(i,Ft-.11,2.55,1.8,-Math.PI/2),T(i,S.blackMatte,.25,.3,.25,2.7,.15,2.9),Qt(i,0,kt,1.3,kt,{h:Ye,t:.3});const e=[[1.3,2.6],[4.3,5.6],[5.6,6.9]];for(const[t,n]of e){const s=new rt;s.position.set(0,0,kt),s.rotation.y=Math.PI/2,i.add(s);const r=[];for(let o=0;o<3;o++)it()<.55&&r.push({i:o,row:it()<.5?0:1});U2(s,0,t,n,{yellowCubbies:r}),Ke(t,kt-.2,n,kt+.2)}On(zp(i,.6,7.25),-.15),On(Qu(i,Ft-.47,5,-Math.PI/2,2)),T(i,S.red,.55,.01,.9,.5,.005,5.7,{shadow:!1}),Za(i,1.9,4.6,2.2,tt),Za(i,5,7,2.25,tt)}const Qa=[{id:"W1",x:1.3,z:10.7,rot:0},{id:"L1",x:4.9,z:10.75,rot:0},{id:"W2",x:1.15,z:13.6,rot:0},{id:"L2",x:4.95,z:13.7,rot:0},{id:"W3",x:1.55,z:17.25,rot:0},{id:"L3",x:5.25,z:16.95,rot:0},{id:"E1",x:9.25,z:10.95,rot:0},{id:"E2",x:9.3,z:14,rot:0},{id:"E3",x:9.3,z:16.9,rot:0},{id:"LOCK",x:6.875,z:8.875,rot:0},{id:"LOCK2",x:.675,z:8.375,rot:270}],Qf="rgba(238,222,180,0.96)",$2="rgba(232,186,80,0.16)";function ed(i){const e=document.createElement("canvas");e.width=256,e.height=640;const t=e.getContext("2d"),n=(r,o)=>{t.fillStyle=o,t.beginPath(),r.forEach(([a,c],l)=>(l?t.lineTo:t.moveTo).call(t,a*256,c*640)),t.closePath(),t.fill()};t.fillStyle=Qf,t.fillRect(0,0,256,640);for(const[r,o]of i)o?n(r,Qf):(t.save(),t.beginPath(),r.forEach(([a,c],l)=>(l?t.lineTo:t.moveTo).call(t,a*256,c*640)),t.closePath(),t.clip(),t.clearRect(0,0,256,640),t.fillStyle=$2,t.fillRect(0,0,256,640),t.restore());const s=new Ln(e);return s.colorSpace=Et,new zt({map:s,transparent:!0,roughness:.15,metalness:.05,depthWrite:!1,side:Bt})}const Gp=[ed([[[[0,.37],[1,.37],[1,1],[0,1]],!1],[[[.6,.15],[.77,.15],[.77,.22],[.6,.22]],!1],[[[1,.37],[.62,.6],[1,.85]],!0],[[[.42,.37],[.62,.37],[.35,.55],[.25,.5]],!0],[[[0,.55],[1,.9],[1,1],[0,1]],!0]]),ed([[[[0,.3],[.75,.6],[.06,1],[0,1]],!1],[[[0,.42],[.43,.62],[0,.82]],!0],[[[.75,.6],[1,.6],[1,1],[.06,1],[.3,.85]],!0]])];function j2(i,e,t){const n=new rt;n.userData.label="Door",i.add(n);const s=9.95,r=Dt,o=10.12,a=An*2,c=Go,l=2.3;for(const f of[-1,1])T(n,S.concrete,r-s,c,.03,(s+r)/2,c/2,e+f*(An+.015),{shadow:!1});T(n,S.concrete,r-s,.03,a,(s+r)/2,c+.015,e,{shadow:!1});for(const f of[-1,1])T(n,S.black,.07,c,.05,o,c/2,e+f*(An-.025));for(const f of[.04,l,c-.03])T(n,S.black,.07,f===l?.06:.08,a,o,f,e);const u=new Se(new gt(a-.1,l-.1),t);u.position.set(o,(l+.08)/2,e),u.rotation.y=Math.PI/2,u.renderOrder=2,n.add(u);const h=new Se(new gt(a-.1,c-l-.1),Gp[0].clone());h.material.map=null,h.material.color.set("#f4e7c4"),h.material.opacity=.75,h.position.set(o,(l+c)/2,e),h.rotation.y=Math.PI/2,h.renderOrder=2,n.add(h),T(n,S.chrome,.12,.35,.025,o,1.05,e+An-.12,{shadow:!1}),Ke(s,e-An,r,e+An)}function K2(i,e,t,n,s,r=3,o=4){const a=new rt;a.position.set(e,t,n),a.rotation.y=s,a.userData.label="Photo gallery",i.add(a);const c=.3,l=.22,u=.08;for(let h=0;h<o;h++)for(let f=0;f<r;f++){if(h===o-1&&f===r-1)continue;const d=(f-(r-1)/2)*(c+u),g=((o-1)/2-h)*(l+u);T(a,S.black,c,l,.02,d,g,.01,{shadow:!1}),wt(a,S.gallery,c-.04,l-.04,d,g,.021)}}function Z2(i,e,t,n,s){j2(i,t,Gp[s]);const r=new rt;r.position.set(e,0,t),r.rotation.y=n,r.userData.label="Wall",i.add(r);const o=2*An+.16,a=Go;for(const c of[-1,1])T(r,S.white,.14,Ye,.08,c*(An+.15),Ye/2,.12);T(r,S.blackMatte,o,Ye-a-.12,.03,0,(a+.12+Ye)/2,.11,{shadow:!1}),T(r,S.white,o,.12,.08,0,a+.06,.12)}const J2={W:{len:1.4,width:1.2,seatW:.7,name:"Window table"},L:{len:2.8,width:1.2,seatW:.7,name:"Long table"},E:{len:1.3,width:.8,seatW:1.2,name:"East-wall desk"}};function Q2(i,e,t,{len:n,width:s,seatW:r},o=0,a="Table"){const c={width:s,seatW:r,chairOff:.12};if(o%180){const u=new rt;u.userData.label=a,i.add(u),$f(u,e,t-n/2,t+n/2,{...c,solidFn:(h,f,d,g)=>Ke(h,f,d,g)});return}const l=new rt;l.position.set(0,0,t),l.rotation.y=Math.PI/2,l.userData.label=a,i.add(l),$f(l,0,e-n/2,e+n/2,{...c,solidFn:(u,h,f,d)=>Ke(h,t-f,d,t-u)})}function eM(i){const[e,t,n,s]=[.45,2.95,.5,2.75];Qt(i,0,yt,e,yt,{h:Ye}),Qt(i,e,yt,t,yt,{h:n}),Qt(i,e,yt,t,yt,{h:Ye-s,y0:s,collide:!1}),Qt(i,t,yt,sn,yt,{h:Ye});{const c=new rt;c.userData.label="Meeting room window",i.add(c);const l=new Se(new gt(t-e,s-n),S.glass);l.position.set((e+t)/2,(n+s)/2,yt),l.renderOrder=2,c.add(l);const u=[e,e+.85,e+1.7,t],h=[n,n+.65,n+1.6,s];for(const f of u)T(c,S.black,.06,s-n+.06,.22,f,(n+s)/2,yt,{shadow:!1});for(const f of h)T(c,S.black,t-e,.06,.22,(e+t)/2,f,yt,{shadow:!1})}{const c=No.flatMap(u=>[u-An,u+An]),l=[Ct,...c,yt];for(let u=0;u<l.length;u+=2)Qt(i,sn,l[u],sn,l[u+1],{h:Ye});for(const u of No)Qt(i,sn,u-An,sn,u+An,{h:Ye-Go,y0:Go,collide:!1})}T(i,S.ceilingBlack,sn,.45,.05,sn/2,Ye-.225,yt-.13,{shadow:!1}),T(i,S.ceilingBlack,.05,.45,yt-Ct,sn-.13,Ye-.225,(Ct+yt)/2,{shadow:!1}),T(i,S.white,.6,Ye,.6,7.35,Ye/2,15.7).userData.label="Pillar",Ke(7.05,15.4,7.65,16),B2(i,7.35,2.35,15.39,Math.PI),T(i,S.white,1.25,Ye,.4,.62,Ye/2,15.7).userData.label="Window column",Ke(0,15.5,1.25,15.9);for(const c of Qa){const l=J2[c.id[0]];!l||c.id.startsWith("LOCK")||(Q2(i,c.x,c.z,l,c.rot||0,`${l.name} ${c.id}`),c.id[0]==="E"?Za(i,c.x,c.z,2.2):Hp(i,c.x,c.z,Math.min(2.4,l.len-.1),c.rot%180?Math.PI/2:0))}const r=new Se(new gt(sn-3.3,yt-17.6),S.floorBeige);r.rotation.x=-Math.PI/2,r.position.set((3.3+sn)/2,.004,(17.6+yt)/2),r.receiveShadow=!0,i.add(r);const o=st(i,S.blackMatte,.16,.16,.6,4.2,.3,yt-.3,{seg:16});On(o),T(i,S.glassYellow,.18,.38,.02,4.2,.34,yt-.47,{shadow:!1}),No.forEach((c,l)=>Z2(i,sn-.1,c,-Math.PI/2,l)),K2(i,sn-.115,1.95,14,-Math.PI/2);const a={0:Math.PI,90:Math.PI/2,180:0,270:-Math.PI/2};for(const c of Qa.filter(l=>l.id.startsWith("LOCK"))){const l=((c.rot||0)%360+360)%360;F2(i,c.x,c.z-.625,c.z+.625,a[l]);const[u,h]=l%180?[.625,.275]:[.275,.625];Ke(c.x-u,c.z-h,c.x+u,c.z+h)}for(const[c,l]of[[1.6,8.6]])On(eh(i,c,l,{size:.4,h:.5,mat:S.blackMatte}))}const _i=-40,nl=9,il=12;let sl=5660;const En=()=>(sl=sl*16807%2147483647,(sl-1)/2147483646),nn=(i,e)=>i+En()*(e-i),Ri=(i,e={})=>new zt({color:i,roughness:1,...e});function tM(i){const e={cool:["#a4a8ac","#a3a7aa","#a2a9af","#9ba9b8","#8ea2bd","#7d95b5","#7890b0"],centre:["#ccc8bd","#cec8bb","#cbc6bb","#c4c8c7","#b3c0ca","#a2b4c4","#9bb0c2"],warm:["#e6d5b9","#ead9bd","#efe1c4","#f4efde","#eaebe3","#d0dbe0","#bccbd6"]},t=[0,3,10,18,26,60,90],n=ue=>new ut(ue),s=(ue,ee)=>{const O=e[ue];if(ee<=0)return n(O[0]);let Y=0;for(;Y<t.length-2&&ee>t[Y+1];)Y++;const ge=Math.min(1,(ee-t[Y])/(t[Y+1]-t[Y]));return n(O[Y]).lerp(n(O[Y+1]),ge)},r=document.createElement("canvas");r.width=256,r.height=128;const o=r.getContext("2d");for(let ue=0;ue<r.width;ue++){let ee=ue/r.width*360;ee>180&&(ee-=360);const O=-ee,Y=Math.max(-1,Math.min(1,O/38))*Math.max(0,1-Math.max(0,Math.abs(ee)-90)/60);for(let ge=0;ge<r.height;ge++){const ye=90-ge/(r.height-1)*180,P=s("centre",ye).lerp(s(Y<0?"cool":"warm",ye),Math.abs(Y));o.fillStyle="#"+P.getHexString(),o.fillRect(ue,ge,1,1)}}const a=new Ln(r);a.colorSpace=Et;const c=new Se(new qt(1300,32,24),new Fn({map:a,side:Rn,fog:!1,depthWrite:!1,toneMapped:!1}));c.renderOrder=-1,i.add(c);const l=new Se(new gt(2600,2600),Ri("#34462a"));l.rotation.x=-Math.PI/2,l.position.y=_i,i.add(l);const u=new Map,h=(ue,ee,O)=>{u.has(ue)||u.set(ue,[]);const Y=ee.clone();Y.applyMatrix4(O),u.get(ue).push(Y)},f=new ht,d=new Xn,g=new Pn,x=new D,m=new D,p=(ue,ee,O,Y,ge,ye,P,E,G=0)=>{d.setFromEuler(g.set(0,G,0)),f.compose(m.set(O,Y,ge),d,x.set(ye,P,E)),h(ue,ee,f)},v=2016,y=1512,I=3029/2,[A,w,R,M]=[1480,3550,1270,1760],b={x:-2.8,y:1.6,z:12},C=230,z=ue=>b.z-(ue-v)/I*C,H=ue=>b.y+(y-ue)/I*C,q=(ue,ee)=>{const O=b.x-ue;if(O<60)return 1/0;const Y=v-(ee-b.z)/O*I;return Y<A-60||Y>w+60?1/0:O>C?-1/0:b.y+(y-(M-25))/I*O},Z=new rc(1,1).toNonIndexed(),$=new ni(.16,.24,1,5,1,!0).toNonIndexed();$.translate(0,.5,0);const ce=nM(),B=["#34452a","#3d4f30","#475a37","#516440","#38492d"].map(ue=>Ri(ue,{flatShading:!0})),de=["#43552f","#4d6136","#3b4c2a","#566b3c"].map(ue=>Ri(ue,{side:Bt,roughness:.85})),fe=Ri("#4f4a40"),Te=ue=>ue[Math.floor(En()*ue.length)],Ve=(ue,ee,O=nn(9,17),Y=_i)=>{const ge=q(ue,ee)-Y-2;if(ge<3){ge>1&&$e(ue,ee,ge/2.2,Y);return}O=Math.min(O,ge);const ye=nn(-.08,.08);p(fe,$,ue,Y,ee,1,O,1,0);const P=nn(.8,1.15);d.setFromEuler(g.set(ye,En()*Math.PI*2,ye)),f.compose(m.set(ue,Y+O,ee),d,x.set(P,P,P)),h(Te(de),ce,f)};function $e(ue,ee,O,Y=_i){O=Math.min(O,(q(ue,ee)-Y-4)/1.8),!(O<.8)&&p(Te(B),Z,ue,Y+O*.9+nn(1,4),ee,O*nn(.9,1.2),O*nn(.6,.85),O*nn(.9,1.2),En()*6)}const ne=(ue,ee)=>ue<-7||ee<-8&&ue<40||ee>30&&ue<20;for(let ue=0;ue<2600;ue++){const ee=nn(-190,40),O=nn(-170,210);ne(ee,O)&&(En()<.58?Ve(ee,O):$e(ee,O,nn(3.5,7)))}for(let ue=0;ue<5200;ue++){const ee=Math.PI*.4+En()*Math.PI*1.25,O=nn(170,560),Y=nl+Math.cos(ee)*O,ge=il+Math.sin(ee)*O;En()<.55?Ve(Y,ge,nn(10,18)):$e(Y,ge,nn(6,11))}for(let ue=0;ue<1800;ue++){const ee=Math.PI*.4+En()*Math.PI*1.25,O=nn(540,1150);$e(nl+Math.cos(ee)*O,il+Math.sin(ee)*O,nn(14,26))}oe(-700,300,260,62,190),oe(-980,-520,380,75,300),oe(-1050,700,300,60,260),oe(-1100,60,500,35,240);function oe(ue,ee,O,Y,ge){const ye=new Se(new qt(1,28,14,0,Math.PI*2,0,Math.PI/2),Ri("#3f5230",{flatShading:!0}));ye.scale.set(O,Y,ge),ye.position.set(ue,_i-2,ee),i.add(ye);const P=Math.round(O*ge/90);for(let E=0;E<P;E++){const G=En()*Math.PI*2,K=Math.sqrt(En())*.97,pe=Math.cos(G)*K,he=Math.sin(G)*K,Ie=_i-2+Y*Math.sqrt(Math.max(0,1-pe*pe-he*he)),Le=ue+pe*O,Ce=ee+he*ge;En()<.35?Ve(Le,Ce,nn(10,16),Ie-2):$e(Le,Ce,nn(7,13),Ie-3)}}const _e=Ri("#c9c6be",{roughness:.9}),xe=Ri("#b5b0a6",{roughness:.9}),Ue=Ri("#6e4234",{roughness:.9}),Ge=Ri("#8f9496",{roughness:.6,metalness:.3}),ke=Ri("#56606a",{roughness:.4}),Qe=new hn(1,1,1).toNonIndexed(),ae=new ni(.5,.5,1,3,1).toNonIndexed();ae.rotateZ(Math.PI/2),ae.rotateX(-Math.PI/2);for(let ue=0;ue<70;ue++){const ee=Math.PI*.55+En()*Math.PI*.95,O=30+Math.pow(En(),1.4)*420,Y=nl+Math.cos(ee)*O,ge=il+Math.sin(ee)*O;if(!ne(Y,ge))continue;const ye=nn(8,14),P=nn(8,13),E=nn(6,11),G=En()*Math.PI;if(_i+E+3.5>q(Y,ge))continue;p(En()<.7?_e:xe,Qe,Y,_i+E/2,ge,ye,E,P,G),p(ke,Qe,Y,_i+E*.62,ge,ye+.1,1,P*.6,G);const K=En();K<.45?p(_e,Qe,Y,_i+E+.4,ge,ye+.3,.8,P+.3,G):K<.8?p(Ue,ae,Y,_i+E+1.6,ge,ye+1,3.2,P+1,G):p(Ge,Qe,Y,_i+E+.6,ge,ye+1,.25,P+1,G)}const me=new ju().load("textures/skyline.png");me.colorSpace=Et,me.anisotropy=4;const U=new Se(new gt(z(A)-z(w),H(R)-H(M)),new Fn({map:me,transparent:!0,alphaTest:.03,depthWrite:!1,fog:!1,toneMapped:!1}));U.rotation.y=Math.PI/2,U.position.set(b.x-C,(H(R)+H(M))/2,(z(A)+z(w))/2),U.renderOrder=1,i.add(U);for(const[ue,ee]of u){const O=new Se(lc(ee,!1),ue);O.castShadow=!1,O.receiveShadow=!1,i.add(O)}}function nM(){const i=[];for(let s=0;s<9;s++){const r=s/9*Math.PI*2+s%2*.2,o=s%3===0?.55:.25,a=[];for(let h=0;h<=3;h++){const f=h/3,d=f*4.6,g=o*d*.6-f*f*2.4,x=.55*Math.sin(Math.PI*Math.min(1,f*1.1+.08));a.push({r:d,y:g,w:x})}const c=[Math.cos(r),Math.sin(r)],l=[-Math.sin(r),Math.cos(r)],u=(h,f)=>[c[0]*h.r+l[0]*h.w*f,h.y,c[1]*h.r+l[1]*h.w*f];for(let h=0;h<3;h++){const f=u(a[h],-1),d=u(a[h],1),g=u(a[h+1],-1),x=u(a[h+1],1);i.push(...f,...g,...d,...d,...g,...x)}}const n=new Gt;return n.setAttribute("position",new xt(i,3)),n.computeVertexNormals(),n.setAttribute("uv",new xt(new Float32Array(i.length/3*2),2)),n}const dn=V2,Tt=-3.6,Ci=.25,Vs=3.85,Wp=.12,Da=-3.95,ps=i=>Vs+i*Wp,Vt=i=>new zt(i),qe={curb:Vt({color:"#6f6c66",roughness:.95}),steel:Vt({color:"#8e8d88",roughness:.55,metalness:.55}),rust:Vt({color:"#9b8a78",roughness:.7,metalness:.35}),galv:Vt({color:"#a9aca9",roughness:.45,metalness:.6}),steelRail:Vt({color:"#c4c7c9",roughness:.22,metalness:.95}),poly:new zt({color:"#d2a8c8",transparent:!0,opacity:.42,roughness:.35,depthWrite:!1,side:Bt}),glass:new zt({color:"#d6e6e2",transparent:!0,opacity:.2,roughness:.05,metalness:.1,depthWrite:!1,side:Bt}),clad:Vt({color:"#cfc6b2",roughness:.6,metalness:.25}),plaster:Vt({color:"#e9e6df",roughness:.95}),coir:Vt({color:"#6e4b30",roughness:1}),potWhite:Vt({color:"#efede8",roughness:.55}),leafDark:Vt({color:"#355e2a",roughness:.75}),leafMid:Vt({color:"#5e8a3a",roughness:.75}),leafPale:Vt({color:"#a9bf83",roughness:.75}),leafRed:Vt({color:"#a6473a",roughness:.75}),palm:Vt({color:"#4f7a2f",roughness:.8,side:Bt}),macrame:Vt({color:"#6d5a4b",roughness:1,side:Bt}),cushion:Vt({color:"#d9cdb8",roughness:1}),tableTop:Vt({color:"#8a6142",roughness:.55}),rattan:Vt({color:"#7b6c60",roughness:.9}),water:new zt({color:"#a9cde8",transparent:!0,opacity:.55,roughness:.1,depthWrite:!1}),capBlue:Vt({color:"#2464b0",roughness:.5}),counterTop:Vt({color:"#222222",roughness:.35,metalness:.2}),acGrey:Vt({color:"#d9d9d4",roughness:.6})},iM=(()=>{const i=document.createElement("canvas");i.width=128,i.height=256;const e=i.getContext("2d"),t=["#a4553f","#d9b26a","#5b6f8a","#c98a5a","#7a8a5a","#e6d6b8","#8a4a5a"];for(let s=0;s<256;s+=3)e.fillStyle=t[Math.floor(it()*t.length)],e.fillRect(0,s,128,3);const n=new Ln(i);return n.colorSpace=Et,n})();qe.rug=Vt({map:iM,roughness:1});const sM=(i=16)=>{const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.strokeStyle="#fff",t.lineWidth=3;for(let s=-128;s<=256;s+=i)t.beginPath(),t.moveTo(s,0),t.lineTo(s+128,128),t.stroke(),t.beginPath(),t.moveTo(s,128),t.lineTo(s+128,0),t.stroke();const n=new Ln(e);return n.wrapS=n.wrapT=Si,n},Xp=sM(22);Xp.repeat.set(5,3);qe.macrameNet=Vt({color:"#6d5a4b",alphaMap:Xp,alphaTest:.5,roughness:1,side:Bt});const rM=(()=>{const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d");e.fillStyle="#fff",e.fillRect(0,0,64,3),e.fillRect(0,0,3,64);const t=new Ln(i);return t.wrapS=t.wrapT=Si,t})();function Ys(i,e,t,n,s){const r=new rt;return r.position.set(e,t,n),s&&(r.userData.label=s),i.add(r),r}function Na(i,e,t,n,s,r,o,a=8){return st(i,e,t,t,o-r,n,s,(r+o)/2,{rx:Math.PI/2,seg:a,shadow:!1})}function Ua(i,e,t,n,s,r,o=7){for(let a=0;a<o;a++){const c=new Se(new rc(1,0),r[a%r.length]),l=s*(.45+it()*.4);c.scale.set(l,l*(.7+it()*.5),l);const u=it()*Math.PI*2,h=it()*s*.6;c.position.set(e+Math.cos(u)*h,t+l*.8+it()*s*.6,n+Math.sin(u)*h),c.rotation.set(it()*3,it()*3,it()*3),c.castShadow=!0,c.receiveShadow=!0,i.add(c)}}function qp(i,e,t,n,{n:s=12,len:r=.6,mat:o=qe.leafMid,droop:a=.5,w:c=.12}={}){for(let l=0;l<s;l++){const u=new rt;u.position.set(e,t,n),u.rotation.y=l/s*Math.PI*2+it()*.4,i.add(u);const h=a*(.5+it()),f=new Se(new gt(r,c),o);f.position.set(Math.cos(h)*r/2,Math.sin(-h+.9)*r/2-.05,0),f.rotation.set(Math.PI/2-.3,0,-h+.9-Math.PI/4),f.castShadow=!0,u.add(f)}}function wr(i,e,t,n="snake",{r:s=.18,h:r=.32}={}){const o=Ys(i,e,0,t,"Plant");return st(o,qe.potWhite,s,s*.78,r,0,r/2,0,{seg:16}),st(o,S.soil,s-.02,s-.02,.01,0,r-.01,0,{seg:12,shadow:!1}),n==="snake"?uc(o,0,r,0,10,.75):n==="bush"?Ua(o,0,r,0,s*1.6,[qe.leafDark,qe.leafMid]):n==="variegated"?Ua(o,0,r,0,s*1.7,[qe.leafPale,qe.leafMid,qe.leafPale],9):n==="croton"?Ua(o,0,r,0,s*1.4,[qe.leafRed,qe.leafMid,qe.leafRed]):n==="fern"?qp(o,0,r+.08,0,{n:16,len:.55,mat:qe.leafPale,droop:.9,w:.16}):n==="tree"&&(st(o,S.woodDark,.015,.02,.9,0,r+.45,0,{seg:5}),Ua(o,0,r+.55,0,.35,[qe.leafMid,qe.leafPale,qe.leafDark],8)),Ke(e-s,t-s,e+s,t+s),o}function td(i,e,t,n,s,r=qe.coir){st(i,S.blackMatte,.004,.004,n-s,e,(n+s)/2,t,{seg:3,shadow:!1}),st(i,r,.07,.11,.3,e,s-.15,t,{seg:10})}function oM(i,e,t,n=0){const s=Ys(i,e,0,t,"Bar stool");s.rotation.y=n;for(const[r,o]of[[-1,-1],[1,-1],[1,1],[-1,1]])T(s,S.black,.025,.78,.025,r*.15,.39,o*.15,{rx:o*.05,rz:-r*.05});T(s,S.black,.34,.04,.34,0,.78,0);for(const r of[-1,1])T(s,S.black,.025,.36,.025,.15,.96,r*.13);T(s,S.black,.025,.06,.3,.15,1.12,0),T(s,S.black,.3,.02,.02,0,.3,.15,{shadow:!1}),T(s,S.black,.3,.02,.02,0,.3,-.15,{shadow:!1})}function aM(i,e,t,n=.62){const s=Ys(i,e,0,t,"Stool");st(s,qe.tableTop,.17,.17,.04,0,n,0,{seg:16});for(let o=0;o<3;o++){const a=o/3*Math.PI*2;T(s,S.black,.02,n,.02,Math.cos(a)*.14,n/2,Math.sin(a)*.14,{rz:Math.cos(a)*.1,rx:-Math.sin(a)*.1})}const r=new Se(new Yr(.16,.008,4,20),S.black);r.rotation.x=Math.PI/2,r.position.y=.22,s.add(r),Ke(e-.18,t-.18,e+.18,t+.18)}function cM(i){const e=Ys(i,0,0,0,"Terrace"),t=dn;Rt(e,S.floorTerrace,Tt,0,0,dn,0),T(e,qe.curb,.3,Ci,t,Tt+.15,Ci/2,t/2),T(e,qe.curb,.32,.03,t,Tt+.15,Ci+.015,t/2,{shadow:!1}),Ke(Tt-.1,0,Tt+.32,dn),Ke(Tt,-.15,0,0),Ke(Tt,dn,0,dn+.15);const n=Tt+.1,s=Ci+1;for(let m=0;m<t-.01;m+=1.2){const p=Math.min(1.2,t-m)-.02,v=new Se(new gt(p,s-Ci-.06),qe.glass);v.position.set(n,(Ci+s)/2,m+.01+p/2),v.rotation.y=Math.PI/2,v.renderOrder=2,e.add(v),T(e,S.chrome,.03,.06,.05,n,s-.04,m+.06,{shadow:!1}),T(e,S.chrome,.03,.06,.05,n,Ci+.06,m+.06,{shadow:!1})}Na(e,qe.steelRail,.028,n,s+.03,0,t,12),Na(e,qe.galv,.035,Tt+.42,.55,.4,t-.4,10);for(let m=1.5;m<t;m+=3.1)T(e,qe.galv,.03,.3,.03,Tt+.42,.4,m,{shadow:!1});for(const m of[.12,t-.12])st(e,qe.steelRail,.025,.025,s,Tt+.35,s/2,m,{seg:10}),T(e,qe.steelRail,.25,.04,.04,Tt+.23,s+.03,m,{shadow:!1});const r=m=>m<kt?tt:2.8;for(const[m,p]of[[0,kt],[kt,dn]]){const v=r(m),y=Vs+.2-v;T(e,qe.clad,.03,y,p-m,-.09,v+y/2,(m+p)/2,{shadow:!1});for(let _=m+.08;_<p;_+=.16)T(e,qe.clad,.025,y,.035,-.115,v+y/2,_,{shadow:!1});T(e,qe.steel,.12,.08,p-m,-.12,v+.04,(m+p)/2,{shadow:!1})}const o=-Da,a=Math.atan2(o*Wp,o),c=o/Math.cos(a),l=Da/2,u=T(e,qe.poly,c,.012,t+.4,l,ps(l)+.06,t/2,{shadow:!1,rz:a});u.renderOrder=3;for(let m=0;m<=t+.01;m+=t/16)T(e,Math.round(m/(t/16))%3===1?qe.rust:qe.steel,c,.1,.06,l,ps(l),m,{rz:a});for(const m of[-.35,-1.25,-2.15,-3.05,-3.85])Na(e,qe.steel,.025,m,ps(m)+.03,-.2,t+.2);T(e,qe.steel,.16,.14,t+.4,Da,ps(Da)-.02,t/2),T(e,qe.steel,.12,.12,t,-.18,Vs-.06,t/2);const h=-1.8,f=ps(h)-.28;Na(e,qe.galv,.02,h,f,0,t);for(let m=.5;m<t;m+=1.55){st(e,qe.galv,.006,.006,.26,h,f+.13,m,{seg:4,shadow:!1}),st(e,S.white,.055,.045,.1,h,f-.07,m,{seg:12,shadow:!1});const p=new Se(new si(.035,12),S.spotGlow);p.rotation.x=Math.PI/2,p.position.set(h,f-.121,m),e.add(p)}const d=Tt+.36;for(let m=0;m<=8;m++){const p=.25+m*(t-.5)/8,v=ps(d);if(st(e,qe.galv,.045,.045,v-Ci,d,(v+Ci)/2,p,{seg:10}),m>=3&&m<=5){st(e,qe.coir,.085,.085,2.5,d,Ci+1.3,p,{seg:12});for(const y of[.9,1.6,2.3])st(e,qe.plaster,.088,.088,.06,d,y,p,{seg:12,shadow:!1});td(e,d+.16,p+.05,v-.1,2.75)}Ke(d-.09,p-.09,d+.09,p+.09)}const g=-.32,x=[[1.4,"tree"],[1.95,"fern"],[2.6,"croton"],[3.2,"variegated"],[4.35,"snake"],[7,"snake"],[7.5,"variegated"],[8,"bush"],[8.5,"snake"],[10.6,"bush"],[11.1,"snake"],[11.6,"variegated"],[12.1,"snake"],[13.6,"tree"],[14.6,"bush"],[16.3,"snake"],[17.2,"variegated"],[18.2,"snake"],[19.3,"croton"],[22,"fern"]];for(const[m,p]of x)wr(e,g-(p==="fern"?.1:0),m,p,p==="tree"?{r:.2,h:.34}:{});wr(e,Tt+.75,12,"variegated",{r:.22,h:.4}),wr(e,Tt+.75,8.3,"tree",{r:.18,h:.34});for(const m of[6.2,9.9,13])td(e,-.55,m,Vs-.1,2.55,qe.potWhite);T(e,qe.rug,.55,.012,.85,-.45,.007,5.7,{shadow:!1}),T(e,qe.rug,.5,.012,.8,-.4,.007,20.8,{shadow:!1,ry:.08});{const y=Ys(e,-.95,0,9.3,"Hanging chair");st(y,qe.coir,.012,.012,ps(-.95)-1.75,0,(ps(-.95)+1.75)/2,0,{seg:4});const _=new D(0,1.75,0);for(const R of[-.6,.6,Math.PI-.5,Math.PI+.5]){const b=new D(Math.cos(R)*.46,1.05,Math.sin(R)*.46).clone().sub(_),C=new Se(new ni(.01,.01,b.length(),4),qe.coir);C.position.copy(_).addScaledVector(b,.5),C.quaternion.setFromUnitVectors(new D(0,1,0),b.normalize()),y.add(C)}const I=new Se(new Yr(.5,.025,6,32),qe.macrame);I.position.set(0,.55+.5,0),I.rotation.x=Math.PI/2,y.add(I);const A=new Se(new qt(.5,20,12,0,Math.PI*2,Math.PI*.5,Math.PI*.42),qe.macrameNet);A.position.y=.55+.42,A.castShadow=!0,y.add(A);const w=new Se(new qt(.5,20,10,-Math.PI/2,Math.PI,.15*Math.PI,.38*Math.PI),qe.macrameNet);w.position.y=.55+.42,w.castShadow=!0,y.add(w),st(y,qe.cushion,.36,.36,.1,0,.55+.07,0,{seg:20});for(let R=0;R<14;R++){const M=R/14*Math.PI*2;st(y,qe.macrame,.012,.004,.1,Math.cos(M)*.3,.55-.02,Math.sin(M)*.3,{seg:4,shadow:!1})}Ke(-.95-.45,9.3-.45,-.95+.45,9.3+.45)}{const v=Tt+.58;T(e,qe.tableTop,.38,.05,13.4-10.3,v,1.05,(10.3+13.4)/2);for(const y of[10.3+.15,(10.3+13.4)/2,13.4-.15])T(e,S.black,.04,1.03,.04,v-.05,.52,y),T(e,S.black,.3,.03,.03,v,.98,y,{shadow:!1});Ke(v-.2,10.3,v+.2,13.4);for(const y of[10.8,11.6,12.4,13.1])oM(e,v+.5,y,0);for(const y of[10.8,11.6,12.4,13.1])Ke(v+.33,y-.18,v+.67,y+.18)}{const v=Vs+.1,y=Tt+.45,_=.9,I=Math.hypot(-.3-y,v-_),A=Math.atan2(v-_,-.3-y);T(e,qe.curb,I,.42,.3,(-.3+y)/2,(v+_)/2,.06+.1,{rz:A});const w=new qo([new Me(y,0),new Me(-.3,0),new Me(-.3,v),new Me(y,_)]),R=new Se(new $u(w),Vt({color:"#cfccc4",roughness:.95,side:Bt}));R.position.z=.06-.04,R.receiveShadow=!0,e.add(R),T(e,qe.curb,-.3-y,.3,.3,(-.3+y)/2,.15,.06+.1),T(e,qe.plaster,.35,Vs,.2,-.17,Vs/2,.06+.05);const M=-2.75,b=-.4,C=2.55,z=rM.clone();z.needsUpdate=!0,z.repeat.set((b-M)/.1,C/.1);const H=Vt({color:"#2a2a2a",alphaMap:z,alphaTest:.5,side:Bt,roughness:.8}),q=new Se(new gt(b-M,C),H);q.position.set((M+b)/2,C/2,.06+.02),e.add(q);for(const $ of[M,(M+b)/2,b])T(e,S.black,.03,C,.03,$,C/2,.06+.03,{shadow:!1});T(e,S.black,b-M,.03,.03,(M+b)/2,C,.06+.03,{shadow:!1});const Z=$=>_+($-y)*(v-_)/(-.3-y);for(let $=0;$<5;$++){const ce=.45+$*.42;for(let B=M+.2;B<b-.1;B+=.36)ce>Z(B)-.35||(T(e,S.blackMatte,.2,.13,.1,B,ce,.06+.08,{shadow:!1}),uc(e,B,ce+.06,.06+.1,6,.32).rotation.x=.25)}wr(e,-.75,.45,"tree",{r:.17,h:.3}),wr(e,-1.15,.4,"bush")}{const m=dn-.12;T(e,qe.plaster,-Tt,1.15,.24,Tt/2,.575,m),T(e,qe.plaster,-Tt,.5,.6,Tt/2,1.4,dn+.3);for(let A=Tt+.4;A<-.2;A+=.7)st(e,S.woodDark,.03,.04,.9,A,2.05,dn+.3,{seg:6}),qp(e,A,2.45+it()*.3,dn+.3,{n:9,len:.9,mat:qe.palm,droop:.45,w:.22});T(e,S.whiteGloss,.4,.14,.45,-.42,.86,23.3),st(e,S.chrome,.012,.012,.14,-.27,1,23.3,{seg:6,shadow:!1}),Ke(-.64,23.05,-.2,23.55);{const A=Ys(e,-.42,2.25,24.2,"AC outdoor unit");T(A,qe.acGrey,.32,.55,.78,0,0,0);const w=new Se(new si(.2,18),S.metalDark);w.rotation.y=-Math.PI/2,w.position.set(-.161,0,-.1),A.add(w),T(A,S.metalDark,.3,.03,.3,.05,-.29,0,{shadow:!1})}const p=-2.45,v=-.6,y=m-.42;T(e,S.white,v-p,.86,.58,(p+v)/2,.43,y),T(e,qe.counterTop,v-p+.04,.04,.62,(p+v)/2,.88,y);for(let A=p+.45;A<v;A+=.45)T(e,S.metalDark,.008,.78,.005,A,.43,y-.292,{shadow:!1});T(e,S.blackMatte,.4,.5,.02,-1.75,.45,y-.29,{shadow:!1});for(let A=0;A<6;A++)T(e,[S.bottleTeal,S.red,S.cream][A%3],.04,.2+it()*.06,.15,-1.9+A*.055,.35,y-.2,{shadow:!1});for(const[A,w]of[[-2.25,S.chrome],[-1.98,S.black],[-1.2,S.chrome]])st(e,w,.07,.085,.2,A,1,y,{seg:14}),T(e,S.black,.03,.12,.03,A+.09,1,y,{shadow:!1});T(e,S.blackMatte,.18,.08,.18,-1.55,.94,y,{shadow:!1}),Ke(p,y-.3,v,dn);const _=-1.75,I=22.95;T(e,qe.tableTop,.72,.05,1.4,_,.95,I);for(const A of[-1,1])T(e,S.black,.04,.95,.04,_+A*.25,.48,I-.5,{rz:A*.18}),T(e,S.black,.04,.95,.04,_+A*.25,.48,I+.5,{rz:A*.18});T(e,S.black,.04,.04,1,_,.3,I,{shadow:!1}),Ke(_-.36,I-.7,_+.36,I+.7);for(const[A,w]of[[_-.6,I-.35],[_-.6,I+.35],[_+.6,I-.3],[_+.6,I+.4],[_+.1,I+.95]])aM(e,A,w);{const A=Ys(e,_-.05,0,I-.95,"Rattan stool");T(A,qe.rattan,.34,.5,.34,0,.25,0),T(A,qe.rattan,.4,.05,.4,0,.52,0),Ke(_-.25,I-1.15,_+.15,I-.75)}for(const[A,w]of[[Tt+.75,dn-1.15],[Tt+.75,dn-.8],[Tt+1.05,dn-.95]])st(e,qe.water,.14,.14,.46,A,.23,w,{seg:16,shadow:!1}).renderOrder=2,st(e,qe.capBlue,.04,.04,.06,A,.49,w,{seg:10,shadow:!1});Ke(Tt+.55,dn-1.35,Tt+1.25,dn-.6),wr(e,-.4,22.75,"bush")}for(let m=0;m<40;m++){const p=T(e,it()>.5?qe.leafPale:S.woodDark,.04,.003,.025,Tt+.5+it()*2.8,.004,1+it()*(dn-2),{shadow:!1,ry:it()*3});p.receiveShadow=!1}}const nd=40;function lM(i){vo(i,0,0,0,4.9,tt),vo(i,0,6.5,0,kt,tt),T(i,S.black,.12,.08,1.6,0,2.44,5.7),T(i,S.chrome,.1,.015,1.6,0,.008,5.7,{shadow:!1});const e=new Se(new gt(1.6,tt-2.48),S.glass);e.position.set(0,(2.48+tt)/2,5.7),e.rotation.y=Math.PI/2,e.renderOrder=2,i.add(e),Qt(i,0,0,0,kt,{h:Ye-tt,y0:tt,collide:!1});const[t,n]=bu;vo(i,0,kt,0,t,2.8),vo(i,0,n,0,Ut,2.8),T(i,S.black,.12,.08,n-t,0,2.44,(t+n)/2),T(i,S.chrome,.1,.015,n-t,0,.008,(t+n)/2,{shadow:!1});const s=new Se(new gt(n-t,2.8-2.48),S.glass);s.position.set(0,(2.48+2.8)/2,(t+n)/2),s.rotation.y=Math.PI/2,s.renderOrder=2,i.add(s),T(i,S.wall,.12,Ye-2.8,Ut-kt,.02,2.8+(Ye-2.8)/2,(kt+Ut)/2,{shadow:!1});for(let o=2.95;o<Ye-.05;o+=.14)T(i,S.wallWarm,.02,.03,jf-kt,.09,o,(kt+jf)/2,{shadow:!1});Qt(i,-.1,Ut,-.1,Tn+.2,{h:Ye+.3,mat:S.wallWarm,t:.2}),vo(i,0,0,Ft,0,tt),Qt(i,0,0,Ft,0,{h:Ye-tt,y0:tt,collide:!1}),cM(i);const r=20-Tt;T(i,S.wallWarm,r,nd,Tn+1.2,Tt+r/2,-nd/2-.01,(Tn-1)/2+.1,{shadow:!1});for(let o=1;o<12;o++)T(i,S.blackMatte,.05,.25,Tn+1.3,Tt-.01,-o*3.4,(Tn-1)/2+.1,{shadow:!1});tM(i)}const uM=new zt({color:"#a39b91",roughness:.55}),rl=new zt({color:"#ece7dc",roughness:.6}),hM=new zt({color:"#e9e4d6",roughness:.7}),fM=new zt({color:"#6c6a66",roughness:.5,metalness:.3});function dM(i,e,t,n=2.45){st(i,S.black,.004,.004,Ye-n,e,(Ye+n)/2,t,{seg:3,shadow:!1}),st(i,S.black,.045,.045,.2,e,n-.1,t,{seg:14});const s=new Se(new si(.035,12),S.spotGlow);s.rotation.x=Math.PI/2,s.position.set(e,n-.201,t),i.add(s)}function pM(i){const e=new rt;e.userData.label="Meeting room",i.add(e),Rt(e,S.floorDark,0,yt,Vn,Ut,0),Rt(e,S.ceilingBlack,0,yt,Vn,Ut,Ye,{down:!0}),Qt(e,Vn+.1,yt,Vn+.1,Ut+.1,{h:Ye,mat:S.white});const[t,n]=G2;Qt(e,0,Ut+.1,t,Ut+.1,{h:Ye,mat:S.white}),Qt(e,n,Ut+.1,Vn+.2,Ut+.1,{h:Ye,mat:S.white}),Qt(e,t,Ut+.1,n,Ut+.1,{h:Ye-2.12,y0:2.12,mat:S.white,collide:!1}),st(e,S.ceilingBlack,.16,.16,Ut-yt,Vn-.35,Ye-.3,(yt+Ut)/2,{rx:Math.PI/2,seg:12,shadow:!1}),T(e,S.ceilingBlack,Vn,.35,.3,Vn/2,Ye-.18,yt+.25,{shadow:!1});for(const[l,u,h,f]of[[0,Ut-.01,Vn,Ut-.01],[Vn-.01,yt,Vn-.01,Ut]])T(e,S.concrete,Math.max(.02,h-l),.08,Math.max(.02,f-u),(l+h)/2,.04,(u+f)/2,{shadow:!1});const s=1.9,r=19.85,o=22,a=1,c=(r+o)/2;{const l=new rt;l.userData.label="Meeting table",e.add(l),T(l,uM,a,.04,o-r,s,.75,c),T(l,rl,a+.01,.025,o-r+.01,s,.72,c,{shadow:!1});for(const u of[r+.15,o-.15])for(const h of[-1,1])T(l,S.black,.05,.72,.05,s+h*(a/2-.08),.36,u);for(const u of[r+.5,c-.1,o-.6]){const h=new Se(new si(.04,14),S.black);h.rotation.x=-Math.PI/2,h.position.set(s+.1,.772,u),l.add(h)}T(l,S.black,.05,.02,.2,s-.15,.78,c-.4,{shadow:!1,ry:.4}),Bp(l,s,.77,c+.35,{petal:S.petalWhite,n:5}),Ke(s-a/2,r,s+a/2,o)}for(const l of[r+.4,c,o-.4])Dr(e,s-a/2-.32,l,Math.PI/2),Dr(e,s+a/2+.32,l,-Math.PI/2);Dr(e,s,o+.35,Math.PI);{const l=new rt;l.userData.label="TV",l.position.set(1.75,0,19.25),e.add(l);for(let u=0;u<4;u++)T(l,S.black,.04,.03,.34,Math.sin(u*Math.PI/2)*.15,.04,Math.cos(u*Math.PI/2)*.15,{ry:u*Math.PI/2});st(l,S.black,.025,.025,1.5,0,.78,0,{seg:8}),T(l,S.black,1.1,.64,.06,0,1.55,.03),T(l,S.screenOff,1.06,.6,.005,0,1.55,.062,{shadow:!1}),Ke(1.55,19.05,1.95,19.45)}{const l=Hp(e,s,c,1.8,Math.PI/2,2.35,Ye);l.children[0].material=fM,l.children[0].scale.set(1.8,.09,.09)}for(const[l,u]of[[.8,19.6],[.8,21.6],[3,19.6],[3,21.6]])dM(e,l,u);th(e,Vn-.02,2.7,20.6,-Math.PI/2);{const l=new rt;l.userData.label="Door frame",e.add(l);const u=Ut+.1,h=n-t;for(const g of[t-.02,n+.02])T(l,rl,.04,2.14,.22,g,1.07,u);T(l,rl,h+.08,.04,.22,(t+n)/2,2.14,u);const f=new rt;f.position.set(n,0,u);const d=h-.02;T(f,hM,d,2.08,.04,-d/2,1.05,0);for(const g of[-1,1]){T(f,S.chrome,.025,.32,.03,-d+.1,1.05,g*.06);for(const x of[.92,1.18])T(f,S.chrome,.02,.02,.05,-d+.1,x,g*.035,{shadow:!1})}hc.push({leaf:f,closed:0,open:1.45,name:"game room door",handle:[-d+.1,1.3,.1],x:(t+n)/2,z:u,block:{minX:t,maxX:n,minZ:u-.1,maxZ:u+.1}})}{const l=new rt;l.userData.label="Shelf",e.add(l);const u=.38,h=Ut-.3,f=.5,d=.38,g=2.3;for(const x of[-1,1])T(l,S.white,.02,g,d,u+x*f/2,g/2,h);T(l,S.white,f,g,.02,u,g/2,h+d/2);for(const x of[.02,.55,.95,1.45,1.9,g])T(l,S.white,f,.02,d,u,x,h);T(l,S.white,f-.02,.52,.02,u,.28,h-d/2,{shadow:!1}),T(l,S.woodDark,.3,.16,.22,u,1.04,h),T(l,S.black,.26,.02,.16,u,1.47,h,{shadow:!1}),Ke(u-f/2,h-d/2,u+f/2,h+d/2)}{const l=new rt;l.userData.label="Cabinet",e.add(l),T(l,S.woodDark,.9,.45,.4,.95,.225,yt+.32),T(l,S.white,.42,.2,.01,.75,.32,yt+.52,{shadow:!1}),Ke(.5,yt+.1,1.4,yt+.52)}}const ms={x:.088,y:1.4,z:25.35,w:1.68,h:.94},li=i=>new zt(i),Kt={navy:li({color:"#1e2740",roughness:.9}),ledPurple:li({color:"#b46cff",emissive:"#9b4dff",emissiveIntensity:2.2}),ledCyan:li({color:"#5fe3ff",emissive:"#29c8ff",emissiveIntensity:1.8}),felt:li({color:"#1f6b46",roughness:.95}),railWood:li({color:"#5a3522",roughness:.5}),ps5White:li({color:"#f4f4f2",roughness:.35}),rug:li({color:"#3a3f4b",roughness:1}),cue:li({color:"#c79a62",roughness:.5}),beanRed:li({color:"#a8322d",roughness:.95}),beanBlue:li({color:"#2d4f8a",roughness:.95})},mM=["#f2c21b","#1f4fb4","#c8281f","#5b2a86","#ef7a1a","#1d7a3c","#7a1f1f","#111111"],id=mM.map(i=>li({color:i,roughness:.2,metalness:.05})),sd=(()=>{const i=document.createElement("canvas");i.width=512,i.height=160;const e=i.getContext("2d");e.font='700 110px "Avenir Next", "Helvetica Neue", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ff4fd8",e.shadowBlur=24,e.fillStyle="#ffd6f6",e.fillText("GAME ON",256,84);const t=new Ln(i);return t.colorSpace=Et,t})();Kt.neon=li({map:sd,emissive:"#ffffff",emissiveMap:sd,emissiveIntensity:1.6,transparent:!0,alphaTest:.05});function qi(i,e,t=0,n=0,s=0){const r=new rt;return r.userData.label=e,r.position.set(t,0,n),r.rotation.y=s,i.add(r),r}function rd(i,e,t,n,s,r){const o=qi(i,"Controller",e,n,s);T(o,r,.16,.035,.07,0,t,0,{shadow:!1});for(const a of[-1,1])T(o,r,.05,.035,.06,a*.065,t,.04,{shadow:!1,ry:a*.4});T(o,S.black,.11,.004,.03,0,t+.019,-.005,{shadow:!1})}function gM(i){const e=qi(i,"Game room"),t=Ut+.2;Rt(e,S.floorDark,0,Ut,xi,Tn,0),Rt(e,S.ceilingBlack,0,Ut,xi,Tn,Ye,{down:!0}),Qt(e,Vn+.2,Ut+.1,xi+.2,Ut+.1,{h:Ye,mat:S.white}),Qt(e,xi+.1,Ut,xi+.1,Tn+.2,{h:Ye,mat:S.white}),Qt(e,0,Tn+.1,xi+.2,Tn+.1,{h:Ye,mat:S.white}),T(e,S.ceilingBlack,xi,.4,.3,xi/2,Ye-.2,(t+Tn)/2,{shadow:!1});const n=ms.z;T(e,Kt.navy,.02,Ye,Tn-t-.4,.01,Ye/2,(t+Tn)/2),T(e,Kt.ledPurple,.02,.025,Tn-t-.6,.03,Ye-.25,(t+Tn)/2,{shadow:!1});{const c=qi(e,"TV");T(c,S.black,.05,.98,1.72,.06,1.4,n),T(c,S.screenDark,.005,.94,1.68,.087,1.4,n,{shadow:!1}),T(c,Kt.ledCyan,.01,1.06,1.8,.03,1.4,n,{shadow:!1})}{const c=qi(e,"TV console");T(c,S.white,.42,.42,1.9,.24,.21,n);for(const l of[n-.48,n+.48])T(c,S.metalDark,.005,.32,.9,.452,.21,l,{shadow:!1});Ke(0,n-.95,.45,n+.95)}{const c=qi(e,"PS5",.25,n+.65);T(c,S.black,.06,.38,.22,0,.62,0);for(const l of[-1,1])T(c,Kt.ps5White,.02,.4,.26,l*.04,.63,0,{rz:l*.04});T(c,S.black,.1,.02,.12,0,.43,0,{shadow:!1})}T(e,S.blackMatte,.18,.26,.18,.25,.55,n-.75),T(e,Kt.rug,2.2,.01,2.4,1.75,.006,n,{shadow:!1}),On(Qu(e,2.95,n,-Math.PI/2,3),-.05);{const c=qi(e,"Coffee table");T(c,S.woodDark,.55,.04,1,1.75,.4,n);for(const[l,u]of[[-1,-1],[1,-1],[1,1],[-1,1]])T(c,S.black,.03,.38,.03,1.75+l*.23,.19,n+u*.45);Ke(1.45,n-.52,2.05,n+.52)}rd(e,1.72,.44,n-.22,.3,Kt.ps5White),rd(e,1.8,.44,n+.2,-.2,Kt.ps5White),T(e,S.black,.12,.02,.05,1.68,.43,n+.38,{shadow:!1,ry:.5});for(const[c,l]of[[23.8,Kt.beanRed],[26.65,Kt.beanBlue]])On(zp(e,1.35,c,l),-.15);const s=5,r=25,o=2.3,a=1.25;{const c=qi(e,"Pool table");T(c,Kt.railWood,a+.2,.2,o+.2,s,.7,r),T(c,Kt.felt,a,.02,o,s,.81,r,{shadow:!1});for(const d of[-1,1])T(c,Kt.felt,.06,.05,o,s+d*(a/2-.03),.835,r,{shadow:!1}),T(c,Kt.felt,a,.05,.06,s,.835,r+d*(o/2-.03),{shadow:!1}),T(c,Kt.railWood,.1,.06,o+.2,s+d*(a/2+.05),.83,r),T(c,Kt.railWood,a+.2,.06,.1,s,.83,r+d*(o/2+.05));for(const[d,g]of[[-1,-1],[1,-1],[1,1],[-1,1]])T(c,Kt.railWood,.14,.62,.14,s+d*(a/2-.05),.31,r+g*(o/2-.1));for(const d of[-1,1])for(const g of[-1,0,1]){const x=new Se(new si(.055,14),S.black);x.rotation.x=-Math.PI/2,x.position.set(s+d*(a/2-.04),.865,r+g*(o/2-.04)),c.add(x)}const l=.028,u=new qt(l,14,10);let h=0;for(let d=0;d<5;d++)for(let g=0;g<=d;g++){const x=new Se(u,id[h++%id.length]);x.position.set(s+(g-d/2)*l*2.05,.82+l,r+.45+d*l*1.8),x.castShadow=!0,c.add(x)}const f=new Se(u,Kt.ps5White);f.position.set(s+.05,.82+l,r-.6),f.castShadow=!0,c.add(f),st(c,Kt.cue,.006,.012,1.45,s-.35,.9,r-.2,{rx:Math.PI/2-.03,seg:8}),Ke(s-a/2-.1,r-o/2-.1,s+a/2+.1,r+o/2+.1)}{const c=qi(e,"Pool light");T(c,S.black,.32,.12,1.7,s,1.85,r);for(const l of[-.55,0,.55]){const u=new Se(new gt(.24,.4),S.lightStrip);u.rotation.x=Math.PI/2,u.position.set(s,1.789,r+l),c.add(u)}for(const l of[-.7,.7])st(c,S.black,.004,.004,Ye-1.91,s,(Ye+1.91)/2,r+l,{seg:3,shadow:!1})}{const c=qi(e,"Cue rack");T(c,S.woodDark,.05,.08,.7,xi-.03,1.55,23.6),T(c,S.woodDark,.05,.06,.7,xi-.03,.1,23.6);for(let l=0;l<4;l++)st(c,Kt.cue,.007,.013,1.5,xi-.07,.8,23.35+l*.16,{seg:8})}{const c=new Se(new gt(1.5,.47),Kt.neon);c.position.set(4.7,2.45,Tn-.01),c.rotation.y=Math.PI,c.userData.label="Neon sign",e.add(c)}for(const[c,l]of[[1.8,23.6],[1.8,26.4]]){st(e,S.black,.05,.05,.12,c,Ye-.06,l,{seg:10,shadow:!1});const u=new Se(new si(.035,10),S.spotGlow);u.rotation.x=Math.PI/2,u.position.set(c,Ye-.121,l),e.add(u)}}const He=Dt,Q=Dt+5.8,Sn=-2,pn=47,Je=3.2,ot=3,mn=.6,od=2.4;let ad=4242;const gn=()=>((ad=ad*16807%2147483647)-1)/2147483646;function Wn(i,e,t,n=!0){const s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);const r=new Ln(s);return r.colorSpace=Et,n&&(r.wrapS=r.wrapT=Si),r.anisotropy=8,r}function cd(i,e,t){return Wn(1024,1024,(n,s)=>{const o=s/2;for(let a=0;a<2;a++)for(let c=0;c<2;c++){const l=(gn()-.5)*14;n.fillStyle=`rgb(${i[0]+l},${i[1]+l},${i[2]+l})`,n.fillRect(a*o,c*o,o,o),n.save(),n.beginPath(),n.rect(a*o,c*o,o,o),n.clip();for(let u=0;u<7;u++){n.strokeStyle=e.replace("A",(.06+gn()*.14).toFixed(2)),n.lineWidth=.8+gn()*2,n.beginPath();let h=a*o+gn()*o,f=c*o;n.moveTo(h,f);for(let d=0;d<6;d++)h+=(gn()-.4)*o*.5,f+=o/5,n.quadraticCurveTo(h+(gn()-.5)*60,f-o/10,h,f);n.stroke()}for(let u=0;u<400;u++){const h=(gn()-.5)*18;n.fillStyle=`rgba(${i[0]+h},${i[1]+h},${i[2]+h},0.25)`,n.beginPath(),n.arc(a*o+gn()*o,c*o+gn()*o,4+gn()*18,0,Math.PI*2),n.fill()}n.restore()}n.strokeStyle=t,n.lineWidth=2;for(let a=0;a<=2;a++)n.beginPath(),n.moveTo(a*o,0),n.lineTo(a*o,s),n.stroke(),n.beginPath(),n.moveTo(0,a*o),n.lineTo(s,a*o),n.stroke()})}const xM=Wn(256,256,(i,e)=>{i.fillStyle="#f1f0ec",i.fillRect(0,0,e,e);for(let t=0;t<1500;t++)i.fillStyle=`rgba(0,0,0,${.03+gn()*.05})`,i.fillRect(gn()*e,gn()*e,1.5,1.5);i.strokeStyle="#c9c7c0",i.lineWidth=3;for(const t of[0,e/2,e])i.beginPath(),i.moveTo(t,0),i.lineTo(t,e),i.stroke(),i.beginPath(),i.moveTo(0,t),i.lineTo(e,t),i.stroke()}),_M=Wn(128,128,(i,e)=>{i.fillStyle="#e9e8e4",i.fillRect(0,0,e,e);for(let t=0;t<6;t++){const n=8+t*9;i.strokeStyle=t%2?"#bdbbb5":"#8e8c86",i.lineWidth=4,i.strokeRect(n,n,e-2*n,e-2*n)}i.fillStyle="#55534f",i.fillRect(56,56,16,16)},!1),vM=Wn(256,256,(i,e)=>{i.fillStyle="#ecebe6",i.fillRect(0,0,e,e),i.strokeStyle="#c6c4bd",i.lineWidth=2;for(const[t,n,s,r]of[[0,e/2,e/2,0],[e/2,0,e,e/2],[e,e/2,e/2,e],[e/2,e,0,e/2]])i.beginPath(),i.moveTo(t,n),i.lineTo(s,r),i.stroke()}),yM=Wn(256,512,(i,e,t)=>{i.fillStyle="#d9d2c3",i.fillRect(0,0,e,t);for(let n=0;n<600;n++)i.fillStyle=`rgba(120,105,85,${.05+gn()*.08})`,i.fillRect(gn()*e,gn()*t,10+gn()*50,1);i.fillStyle="rgba(110,100,85,.55)";for(let n=22;n<t;n+=26)i.fillRect(0,n,e,2)},!1);function Wi(i,{bg:e="#0f8a3c",fg:t="#ffffff",w:n=512,h:s=128,font:r="bold 64px system-ui, sans-serif",icon:o=""}={}){return Wn(n,s,a=>{a.fillStyle=e,a.fillRect(0,0,n,s),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle",a.font=r,a.fillText(o?`${o}  ${i}`:i,n/2,s/2+2)},!1)}const at=i=>new zt(i),yo=i=>at({map:i,emissive:"#ffffff",emissiveMap:i,emissiveIntensity:.55,roughness:.4}),re={floor:at({map:cd([214,196,170],"rgba(150,120,90,A)","#b9a487"),roughness:.08,metalness:.05,envMapIntensity:1.6}),floorBrown:at({map:cd([104,82,66],"rgba(205,190,170,A)","#4e3c30"),roughness:.08,metalness:.05,envMapIntensity:1.6}),skirting:at({color:"#4a3326",roughness:.25}),wall:at({color:"#ecebe6",roughness:.92}),grid:at({map:xM,roughness:.95}),diffuser:at({map:_M,roughness:.8}),steel:at({color:"#a7aba9",roughness:.45,metalness:.55}),doorWhite:at({color:"#efeee8",roughness:.6}),frame:at({color:"#d8d2c2",roughness:.6}),laminate:at({map:yM,roughness:.55}),diamond:at({map:vM,roughness:.85}),woodStrip:at({color:"#6a4126",roughness:.5}),darkGlass:new zt({color:"#2c3a2c",transparent:!0,opacity:.55,roughness:.05,metalness:.3,depthWrite:!1,side:Bt}),orange:at({color:"#ff6a12",roughness:.35}),caution:at({map:Wi("CAUTION",{bg:"#f2b90f",fg:"#2a2a2a",w:256,h:512,font:"bold 44px system-ui, sans-serif"}),roughness:.5}),red:at({color:"#c42a22",roughness:.5}),fireExit:yo(Wi("FIRE EXIT  ←",{w:512,h:112,font:"bold 60px system-ui, sans-serif"})),fireExt:yo(Wi("FIRE EXTINGUISHER",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),pushBar:yo(Wi("PUSH BAR TO OPEN",{w:512,h:96,font:"bold 44px system-ui, sans-serif"})),exitSmall:yo(Wi("EXIT",{w:256,h:96,font:"bold 60px system-ui, sans-serif"})),gents:at({map:Wi("GENTS TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚹"}),roughness:.4}),techno:at({map:Wn(512,280,(i,e,t)=>{i.fillStyle="#f7f7f5",i.fillRect(0,0,e,t),i.fillStyle="#2b5fae",i.fillRect(e*.58,t*.3,e*.42,t*.32),i.font="bold 66px system-ui, sans-serif",i.textBaseline="middle",i.fillStyle="#2b5fae",i.fillText("Techn",22,t*.46),i.fillStyle="#ffffff",i.fillText("aureus",e*.6,t*.46),i.fillStyle="#555",i.font="22px system-ui, sans-serif",i.fillText("IT STRATEGY & TECHNOLOGY PARTNER",24,t*.78)},!1),roughness:.5}),pixPanel:at({color:"#3c3e40",roughness:.5,metalness:.2}),pixText:at({map:Wn(256,96,(i,e,t)=>{i.fillStyle="#3c3e40",i.fillRect(0,0,e,t),i.fillStyle="#4aa3df",i.font="bold 50px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("pixbit",e/2,t*.42),i.fillStyle="#cfd2d4",i.font="16px system-ui, sans-serif",i.fillText("solutions",e/2,t*.8)},!1),roughness:.5}),mat:at({color:"#3b2620",roughness:1}),pink:at({color:"#e9b8c4",roughness:.3}),mirror:at({color:"#c9d4d8",roughness:.08,metalness:.25}),slot:at({color:"#5d6a6e",roughness:.1,metalness:.4}),room:at({color:"#cfccc4",roughness:.9}),roomCeil:at({color:"#e9e7e1",roughness:.95}),desk:at({color:"#c8b79c",roughness:.7}),officeGlass:new zt({color:"#33403a",transparent:!0,opacity:.4,roughness:.05,metalness:.3,depthWrite:!1,side:Bt}),pixLetters:at({map:Wn(512,216,(i,e,t)=>{i.clearRect(0,0,e,t),i.fillStyle="#141414",i.textAlign="center",i.textBaseline="middle",i.font="bold 128px system-ui, sans-serif",i.fillText("pixbit",e/2,t*.38),i.font="44px system-ui, sans-serif",i.fillText("· s o l u t i o n s ·",e/2,t*.82)},!1),transparent:!0,alphaTest:.3,roughness:.6}),cam:at({color:"#f2f2f0",roughness:.4}),leather:at({color:"#1e1a19",roughness:.3,metalness:.05,envMapIntensity:1.2}),tableWood:at({color:"#6b5646",roughness:.55}),daylight:new Fn({color:"#f4f8ff"}),lamp:new Fn({color:"#fff3c9"}),tint:new zt({color:"#c9d6b0",transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1,side:Bt}),olive:at({color:"#8f9a2e",roughness:.85}),silver:at({color:"#b8bcc0",roughness:.3,metalness:.8}),tableTop:at({color:"#e6e1d8",roughness:.35}),ladies:at({map:Wi("LADIES TOILET",{bg:"#141414",w:512,h:112,font:"bold 54px system-ui, sans-serif",icon:"🚺"}),roughness:.4}),slate:at({color:"#6b6e71",roughness:.85}),navy:at({color:"#1f2a3b",roughness:.6}),navySlats:at({map:Wn(256,256,(i,e,t)=>{i.fillStyle="#212d40",i.fillRect(0,0,e,t);for(let n=0;n<e;n+=16)i.fillStyle="#141c29",i.fillRect(n,0,3,t),i.fillStyle="#2b3950",i.fillRect(n+3,0,2,t)}),roughness:.55}),tenCod:at({map:Wn(512,160,(i,e,t)=>{i.fillStyle="#e9ecef",i.beginPath(),i.moveTo(20,30),i.lineTo(95,30),i.lineTo(60,80),i.lineTo(95,80),i.lineTo(55,135),i.lineTo(20,135),i.lineTo(55,85),i.lineTo(20,85),i.closePath(),i.fill(),i.font="bold 96px system-ui, sans-serif",i.textBaseline="middle",i.fillText("10COD",120,t/2+4)},!1),transparent:!0,alphaTest:.3,roughness:.4}),eSyn:at({map:Wn(512,256,(i,e,t)=>{i.fillStyle="#e8506a",i.beginPath(),i.arc(120,118,100,0,Math.PI*2),i.fill(),i.font="italic bold 150px Georgia, serif",i.textBaseline="middle",i.fillStyle="#26334a",i.fillText("e",40,120),i.fillStyle="#f4e9e4",i.fillText("S",120,130),i.font="bold 76px system-ui, sans-serif",i.fillStyle="#26334a",i.fillText("YNERGY",210,150)},!1),transparent:!0,alphaTest:.3,roughness:.5}),ringLogo:at({map:Wn(256,256,(i,e)=>{i.strokeStyle="#8f6cff",i.lineWidth=16,i.beginPath(),i.arc(e/2,e/2,90,0,Math.PI*2),i.stroke(),i.fillStyle="#e5e1ff",i.font="bold 54px system-ui, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("dev",e/2,e/2)},!1),transparent:!0,alphaTest:.3,roughness:.4}),greyTile:at({color:"#9a9c9a",roughness:.3}),stairBlue:at({color:"#5a6fc4",roughness:.8}),fireRed:at({color:"#c8231c",roughness:.5}),granite:at({color:"#141416",roughness:.12,metalness:.35,envMapIntensity:1.4}),liftSteel:at({color:"#b9bdbd",roughness:.42,metalness:.75}),fireDoor:at({color:"#9aa5a1",roughness:.55,metalness:.15}),greenSign:yo(Wi("FIRE STATION",{w:512,h:112,font:"bold 50px system-ui, sans-serif"})),fourth:at({map:Wi("FOURTH FLOOR",{bg:"#c9ccce",fg:"#2c2c2c",w:512,h:128,font:"bold 54px system-ui, sans-serif"}),roughness:.4,metalness:.3}),ledRed:at({color:"#ff2a1a",emissive:"#ff2a1a",emissiveIntensity:1.4}),numDisc:i=>at({map:Wn(128,128,(e,t)=>{e.fillStyle="#fff",e.fillRect(0,0,t,t),e.fillStyle="#111",e.font="bold 84px system-ui, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(String(i),t/2,t/2+4)},!1),roughness:.4})};function ei(i,e,t,n,s,r=re.wall,o=ot){T(i,r,.1,o,n-t,e+s*-.05,o/2,(t+n)/2),T(i,re.skirting,.015,.1,n-t,e+s*.008,.05,(t+n)/2,{shadow:!1}),Ke(Math.min(e,e-s*.1),t,Math.max(e,e-s*.1),n)}function ld(i,e,t,n=He,s=Q,r=He+.25,o=Q-.25){const l=o-r;T(i,re.wall,s-n,.85,.25,(n+s)/2,.85/2,e),T(i,re.skirting,s-n,.1,.015,(n+s)/2,.05,e+t*.13,{shadow:!1}),T(i,re.wall,s-n,Je-2.7,.25,(n+s)/2,(2.7+Je)/2,e);for(const[h,f]of[[n,r],[o,s]])T(i,re.wall,f-h,2.7-.85,.25,(h+f)/2,(.85+2.7)/2,e);const u=new Se(new gt(l,2.7-.85),S.glass);u.position.set((r+o)/2,(.85+2.7)/2,e),u.renderOrder=2,i.add(u);for(let h=0;h<=5;h++)T(i,S.black,.06,2.7-.85,.08,r+h/5*l,(.85+2.7)/2,e);for(const h of[.85+.02,2.7-.02])T(i,S.black,l,.05,.08,(r+o)/2,h,e);Ke(n,e-.15,s,e+.15)}function ol(i,e,t,n,s,r,o){const a=e-o*.03;return T(i,re.frame,.06,s+.06,n+.12,e-o*.015,(s+.06)/2,t),T(i,r,.04,s,n,a,s/2,t),a-o*.03}function MM(i,e,t,n){const o=n-.475,a=n+.95/2;ei(i,Q,e,o-.06,-1),ei(i,Q,a+.06,t,-1),T(i,re.wall,.1,ot-2.25-.06,.95+.12,Q+.05,(ot+2.25+.06)/2,n);for(const v of[o-.03,a+.03])T(i,re.frame,.14,2.25+.06,.06,Q+.03,(2.25+.06)/2,v);T(i,re.frame,.14,.06,.95+.12,Q+.03,2.25+.03,n);const c=new rt;c.position.set(Q-.01,0,o),T(c,re.laminate,.04,2.25-.01,.95-.01,0,2.25/2,.95/2);for(const v of[-1,1]){T(c,re.slot,.012,.9,.12,v*.022,1.45,.95/2-.05,{shadow:!1}),T(c,S.chrome,.03,.42,.03,v*.075,1.05,.95-.12,{shadow:!1});for(const y of[.86,1.24])T(c,S.chrome,.06,.02,.02,v*.05,y,.95-.12,{shadow:!1})}hc.push({leaf:c,closed:0,open:Math.PI/2*.92,name:"ladies toilet",handle:[-.12,1.25,.95-.12],x:Q,z:n,block:{minX:Q-.05,maxX:Q+.1,minZ:o,maxZ:a}});const l=Q+.1,u=Q+2.3,h=e+.05,f=t-.05,d=ot,g=(l+u)/2,x=(h+f)/2;T(i,S.floorCorridor,u-l,.02,f-h,g,.01,x,{shadow:!1}),T(i,S.white,u-l,.04,f-h,g,d,x,{shadow:!1}),T(i,S.whiteGloss,.1,d,f-h+.2,u+.05,d/2,x);for(const v of[h-.05,f+.05])T(i,S.whiteGloss,u-l,d,.1,g,d/2,v);T(i,re.pink,.02,1.2,f-h,u-.005,.6,x,{shadow:!1});for(const v of[h+.005,f-.005])T(i,re.pink,u-l,1.2,.02,g,.6,v,{shadow:!1});Ke(u,h-.1,u+.1,f+.1),Ke(l-.1,h-.1,u,h),Ke(l-.1,f,u,f+.1),T(i,S.lightStrip,.6,.02,.6,g,d-.03,x,{shadow:!1});const m=x+.7;T(i,S.whiteGloss,.2,.55,.42,u-.1,.8,m),st(i,S.whiteGloss,.19,.15,.4,u-.42,.2,m,{seg:20}),st(i,S.white,.2,.2,.03,u-.42,.42,m,{seg:20}),Ke(u-.65,m-.25,u,m+.25);const p=x-.6;T(i,S.whiteGloss,.45,.14,.55,u-.23,.85,p),T(i,S.chrome,.12,.03,.03,u-.08,.98,p,{shadow:!1}),T(i,re.mirror,.02,.7,.55,u-.012,1.55,p,{shadow:!1}),Ke(u-.46,p-.3,u,p+.3)}function al(i,e,t,n,s,{alarm:r=!0}={}){const a=-s,c=s*Math.PI/2,l=h=>e+s*h;T(i,S.blackMatte,.04,2.3,1.1+.2,l(.005),1.15,t,{shadow:!1});for(const h of[-1,1])T(i,re.liftSteel,.03,2.22,1.1/2-.01,l(.03),1.11,t+h*1.1/4,{shadow:!1});for(const h of[-1,1])T(i,re.liftSteel,.04,2.26,.03,l(.03),1.13,t+h*(1.1/2+.02),{shadow:!1});T(i,re.liftSteel,.04,.03,1.1+.07,l(.03),2.26,t,{shadow:!1}),wt(i,re.numDisc(n),.22,.22,l(.012),2.55,t,c),T(i,re.liftSteel,.03,.14,.62,l(.015),2.92,t,{shadow:!1}),T(i,S.blackMatte,.035,.08,.2,l(.02),2.92,t,{shadow:!1}),T(i,re.ledRed,.036,.04,.06,l(.022),2.92,t,{shadow:!1});const u=t+a*(1.1/2+.33);if(T(i,re.liftSteel,.02,.26,.11,l(.01),1.15,u,{shadow:!1}),T(i,S.blackMatte,.01,.06,.05,l(.022),1.12,u,{shadow:!1}),r){const h=t-a*.97;T(i,re.fireRed,.05,.14,.12,l(.025),2.05,h,{shadow:!1}),T(i,re.fireRed,.04,.13,.1,l(.02),1.3,h,{shadow:!1})}}const bM=["techno","tenCod","eSyn","ringLogo"];function Yp(i){for(const e of bM)re[e].visible=i}Yp(!1);function cl(i,e,t,n,s,r=4.2,{frost:o=!1}={}){const a=e-t*.03,c=e+t*3;Rt(i,re.room,Math.min(e,c),n,Math.max(e,c),s,0),T(i,re.room,.1,Je,s-n,c,Je/2,(n+s)/2,{shadow:!1}),Rt(i,re.roomCeil,Math.min(e,c),n,Math.max(e,c),s,Je,{down:!0});for(let l=n;l<s-.5;l+=r){const u=l+.2,h=Math.min(l+r,s)-.2;T(i,re.wall,.4,Je,.4,e,Je/2,l);const f=new Se(new gt(h-u,ot-.05),re.officeGlass);if(f.position.set(a,(ot-.05)/2,(u+h)/2),f.rotation.y=t>0?-Math.PI/2:Math.PI/2,f.renderOrder=2,i.add(f),o){const p=new Se(new gt(h-u,.75),S.glassFrost);p.position.set(a-t*.006,1.25,(u+h)/2),p.rotation.y=f.rotation.y,p.renderOrder=3,i.add(p)}const d=Math.max(2,Math.round((h-u)/1));for(let p=0;p<=d;p++)T(i,S.black,.06,ot,.05,a,ot/2,u+p/d*(h-u));for(const p of[.04,2.35,ot-.03])T(i,S.black,.06,.06,h-u,a,p,(u+h)/2);const g=u+(h-u)/d;for(const p of[-1,1])T(i,S.chrome,.03,.6,.025,a-t*p*.05,1.05,g-.12,{shadow:!1});const x=e+t*1.6,m=(u+h)/2+.6;T(i,re.desk,.7,.04,1.4,x,.75,m);for(const p of[-1,1])T(i,S.black,.05,.73,.05,x,.37,m+p*.6,{shadow:!1});T(i,S.screenDark,.03,.32,.55,x+t*.2,1,m),T(i,S.black,.45,.5,.45,x-t*.55,.5,m)}T(i,re.wall,.4,Je,.4,e,Je/2,s),Ke(Math.min(e,a)-.05,n,Math.max(e,a)+.05,s)}const wu=14.5,Gn=wu+11.85,Zt=Gn+6.4,vi=Q+11;function ud(i,e,t,n=0,s=1.6){const r=new rt;r.position.set(e,0,t),r.rotation.y=n,i.add(r),T(r,re.leather,s,.3,.82,0,.24,0),T(r,re.leather,s-.36,.14,.62,0,.45,.08);for(const o of[-1,1])T(r,re.leather,.18,.62,.82,o*(s/2-.09),.37,0);T(r,re.leather,s-.1,.36,.18,0,.6,-.32);for(const o of[-1,1])T(r,re.leather,(s-.4)/2,.36,.16,o*(s-.4)/4,.74,-.22,{rx:-.12});for(const o of[-1,1])for(const a of[-1,1])T(r,S.blackMatte,.06,.09,.06,o*(s/2-.08),.045,a*.34,{shadow:!1});return r}function hd(i,e,t,n=0,s=1.9){const r=new rt;r.position.set(e,0,t),r.rotation.y=n,i.add(r),T(r,re.leather,s,.22,.72,0,.27,.04),T(r,re.leather,s,.1,.7,0,.42,.05),T(r,re.leather,s,.62,.16,0,.73,-.3,{rx:-.08});for(const o of[-1,1])T(r,S.chrome,.03,.03,.72,o*(s/2-.12),.015,.02,{shadow:!1}),T(r,S.chrome,.03,.16,.03,o*(s/2-.12),.08,.34,{shadow:!1}),T(r,S.chrome,.03,.16,.03,o*(s/2-.12),.08,-.3,{shadow:!1});return r}function ll(i,e,t,n=.85){Ke(i-t/2,e-n/2,i+t/2,e+n/2)}function wM(i){const e=(Gn+Zt)/2,t=Zt-Gn;Rt(i,re.floor,Q,Gn,vi,Zt,.001,{tile:1.6}),Rt(i,re.grid,Q,Gn,vi,Zt,Je,{down:!0,tile:1.2});for(const d of[Gn,Zt]){const g=d===Gn?-1:1;T(i,re.wall,vi-Q,Je,.1,(Q+vi)/2,Je/2,d+g*.05),T(i,re.skirting,vi-Q,.1,.015,(Q+vi)/2,.05,d-g*.008,{shadow:!1}),Ke(Q,d-.1,vi,d+.1)}T(i,re.granite,.65,Je,.55,Q+.08,Je/2,Zt+.275),Ke(Q-.25,Zt,Q+.4,Zt+.55),T(i,re.wall,.1,Je,t,vi+.05,Je/2,e);const n=vi-.02,s=e-1.6,r=e+1.6,o=2.55,a=new Se(new gt(r-s,o),re.daylight);a.position.set(n+.005,o/2,e),a.rotation.y=-Math.PI/2,i.add(a);const c=new Se(new gt(r-s,o),S.glass);c.position.set(n,o/2,e),c.rotation.y=-Math.PI/2,c.renderOrder=2,i.add(c);for(const d of[s,e-.75,e+.75,r])T(i,S.black,.07,o,.07,n,o/2,d);for(const d of[.04,o])T(i,S.black,.07,.07,r-s,n,d,e);for(const[d,g]of[[s,e-.75],[e+.75,r]])for(const x of[.3,1.25,2.15])T(i,S.black,.07,.05,g-d,n,x,(d+g)/2);T(i,S.black,.07,.05,1.5,n,2.15,e);for(const d of[e-.07,e+.07])T(i,S.blackMatte,.04,.45,.03,n-.07,1.1,d,{shadow:!1});Ke(vi-.1,Gn,vi+.1,Zt),ud(i,Q+5,Gn+.48,0,1.6),ll(Q+5,Gn+.48,1.6),hd(i,Q+7.1,Gn+.45,0,1.9),ll(Q+7.1,Gn+.45,1.9),hd(i,Q+5.6,Zt-.45,Math.PI,2.2),ll(Q+5.6,Zt-.45,2.2),ud(i,Q+9.4,Zt-.75,Math.PI+.35,1.6),Ke(Q+8.5,Zt-1.3,Q+10.3,Zt-.2);const l=Q+6.2,u=Gn+1.6;T(i,re.tableTop,1.2,.04,.6,l,.42,u),T(i,re.tableWood,1.1,.02,.5,l,.12,u,{shadow:!1});for(const d of[-1,1])for(const g of[-1,1])T(i,re.tableWood,.04,.44,.04,l+d*.52,.2,u+g*.24,{rz:d*.12});Ke(l-.62,u-.32,l+.62,u+.32);const h=Q+8.4;T(i,re.frame,1.05,2.15,.05,h,1.075,Zt-.02),T(i,re.fireDoor,.95,2.1,.04,h,1.05,Zt-.04),T(i,S.chrome,.14,.03,.04,h-.35,1.05,Zt-.08,{shadow:!1}),wt(i,re.greenSign,.5,.11,h+.2,2.35,Zt-.012,Math.PI),T(i,S.white,.09,.09,.012,h-.75,1.25,Zt-.006,{shadow:!1});for(const d of[Q+2,Q+5,Q+8])for(const g of[e-1.7,e+1.7])T(i,re.lamp,.24,.01,.24,d,Je-.006,g,{shadow:!1});for(const d of[Q+3.5,Q+6.5,Q+9.5])for(const g of[e-2.2,e+2.2])wt(i,re.diffuser,.6,.6,d,Je-.004,g,0,Math.PI/2);for(const d of[Q+3,Q+7.5])st(i,re.cam,.06,.07,.03,d,Je-.015,e-.6,{seg:14,shadow:!1});const f=new Se(new qt(.07,16,10,0,Math.PI*2,0,Math.PI/2),re.cam);f.rotation.x=Math.PI,f.position.set(Q+9.2,Je,Zt-.5),i.add(f)}function SM(i){Rt(i,re.floor,He+.02,Sn,Q-od,pn,.001,{tile:1.6}),Rt(i,re.floorBrown,Q-od,Sn,Q,pn,.001,{tile:1.6}),Rt(i,re.grid,He+mn,Sn,Q-mn,pn,Je,{down:!0,tile:1.2});for(const[V,Pe,ze,We,Oe,N]of[[He,He+mn,He+mn,1,Sn,pn],[Q-mn,Q,Q-mn,-1,Sn,pn]])Rt(i,re.wall,V,Oe,Pe,N,ot,{down:!0}),T(i,re.wall,.03,Je-ot,N-Oe,ze,(ot+Je)/2,(Oe+N)/2,{shadow:!1}),T(i,S.lightStrip,.02,.025,N-Oe-.4,ze+We*.03,ot+.04,(Oe+N)/2,{shadow:!1});for(let V=Sn+2.2;V<pn-1;V+=3)for(const Pe of[He+mn+.9,Q-mn-.9])st(i,S.spotGlow,.07,.07,.01,Pe,Je-.006,V,{seg:16,shadow:!1});for(let V=Sn+3.7;V<pn-2;V+=6)wt(i,re.diffuser,.6,.6,(He+Q)/2+(Math.round(V)%2?.6:-.6),Je-.004,V,0,Math.PI/2),st(i,re.cam,.05,.06,.03,(He+Q)/2,Je-.015,V+1.5,{seg:14,shadow:!1});for(const V of[Sn+1.7,12.5,22.5])T(i,S.spotGlow,.22,.012,.6,He+mn/2,ot-.008,V,{shadow:!1});ei(i,He,Sn,xn,1),T(i,re.wall,.1,Je-ot,xn-Sn,He-.05,(ot+Je)/2,(Sn+xn)/2,{shadow:!1}),T(i,re.steel,.03,1.75,.82,He+.015,1.12,1.75),T(i,S.metalDark,.035,.012,.8,He+.016,.25,1.75,{shadow:!1}),T(i,S.chrome,.04,.03,.12,He+.04,1.15,1.42,{shadow:!1}),wt(i,re.fireExt,.36,.07,He+.004,1.35,2.4,Math.PI/2),wt(i,re.fireExt,.36,.07,He+.004,2.35,1.75,Math.PI/2);const e=ol(i,He,-.25,.95,2.15,re.doorWhite,-1);T(i,S.chrome,.05,.05,.8,e+.03,1,-.25,{shadow:!1});for(const V of[-.62,.12])T(i,S.chrome,.06,.08,.05,e+.02,1,V,{shadow:!1});wt(i,re.pushBar,.3,.06,e+.002,1.2,-.25,Math.PI/2),wt(i,re.exitSmall,.28,.1,He+.004,2.45,-.25,Math.PI/2),T(i,re.red,.04,.12,.12,He+.02,1.4,.55,{shadow:!1}),T(i,S.white,.01,.12,.08,He+.04,1.6,-.25+.75,{shadow:!1});const t=Ct,n=18.75,s=(V,Pe,ze,We)=>{T(i,S.concrete,.08,We-ze,Pe-V,He-.04,(ze+We)/2,(V+Pe)/2,{shadow:!1});const Oe=new Se(qs(new gt(Pe-V,We-ze),Pe-V,We-ze,1.6),S.concrete);Oe.position.set(He+.002,(ze+We)/2,(V+Pe)/2),Oe.rotation.y=Math.PI/2,Oe.receiveShadow=!0,i.add(Oe),ze===0&&(T(i,re.skirting,.015,.1,Pe-V,He+.008,.05,(V+Pe)/2,{shadow:!1}),Ke(He-.1,V,He+.02,Pe))},r=[t,...No.flatMap(V=>[V-An-.03,V+An+.03]),n];for(let V=0;V<r.length;V+=2)s(r[V],r[V+1],0,ot);for(const V of No)s(V-An-.03,V+An+.03,Go+.03,ot);T(i,re.wall,.1,Je-ot,pn-t,He-.05,(ot+Je)/2,(t+pn)/2,{shadow:!1}),T(i,S.white,.012,.09,.09,He+.006,1.25,9.55,{shadow:!1}),T(i,S.blackMatte,.015,.03,.035,He+.012,1.25,9.55,{shadow:!1}),T(i,S.blackMatte,.03,.14,.07,He+.015,1.25,9.8,{shadow:!1}),T(i,S.bottleBlue,.01,.04,.04,He+.031,1.27,9.8,{shadow:!1}),T(i,S.white,.012,.09,.09,He+.006,.4,9.7,{shadow:!1});const o=17.4;T(i,S.black,.03,.78,.78,He+.015,2.05,o),wt(i,S.logo,.42,.6,He+.032,2.05,o,Math.PI/2),wt(i,re.pixLetters,.8,.34,He+.004,1.42,o,Math.PI/2),T(i,S.white,.012,.09,.14,He+.006,.42,o+.35,{shadow:!1}),T(i,S.white,.03,.03,.9,He+mn/2,ot-.015,o,{shadow:!1});for(const V of[o-.3,o+.3])st(i,S.white,.045,.045,.16,He+mn/2-.05,ot-.12,V,{seg:12,shadow:!1,rz:.6});ei(i,He,n,20,1);const a=ol(i,He,19.35,.95,2.25,re.laminate,-1);T(i,re.slot,.012,.9,.12,a,1.45,19.3,{shadow:!1}),T(i,S.chrome,.03,.42,.03,a+.05,1.05,19,{shadow:!1});const c=new Se(new gt(.95,1.9),re.fireDoor);c.position.set(He+.012,1.15,20.9),c.rotation.y=Math.PI/2,i.add(c),T(i,S.chrome,.03,.1,.04,He+.03,1,21.2,{shadow:!1}),wt(i,re.greenSign,.5,.11,He+.012,2.25,20.9,Math.PI/2),wt(i,re.fireExt,.62,.12,He+.012,1.45,22.05,Math.PI/2);const l=22.8,u=36;ei(i,He,20,l,1),ei(i,He,l,u,1,re.granite);const h=[{n:4,z:24.6},{n:3,z:28},{n:2,z:31.4},{n:1,z:34.6}];for(const V of h)al(i,He,V.z,V.n,1);T(i,S.white,.012,.09,.09,He+.006,.38,29.7,{shadow:!1});for(const V of[32.6,33])st(i,S.chrome,.22,.22,.7,He+.32,.35,V,{seg:20,shadow:!1});const f=new rt;f.position.set(He+.9,2.95,24.2),i.add(f),T(f,S.black,.03,.2,.62,0,0,0,{shadow:!1}),wt(f,re.fourth,.6,.18,.017,0,0,Math.PI/2),wt(f,re.fourth,.6,.18,-.017,0,0,-Math.PI/2);const d=u,g=u+3.6;ei(i,He,d,g,1,re.slate);for(const V of[g-1.25,g-.25])T(i,S.blackMatte,.006,2.2,.01,He+.003,1.1,V,{shadow:!1});T(i,S.blackMatte,.006,.01,1,He+.003,2.2,g-.75,{shadow:!1}),wt(i,re.eSyn,1.3,.65,He+.012,1.75,d+1.35,Math.PI/2),T(i,S.white,.04,.03,1.2,He+mn+.3,Je-.03,d+1.35,{shadow:!1});for(const V of[d+.9,d+1.35,d+1.8])st(i,S.white,.045,.045,.16,He+mn+.3,Je-.12,V,{seg:12,shadow:!1,rz:.7});T(i,re.navy,.4,Je,.3,He,Je/2,g+.1);const x=g+4.2;cl(i,He,-1,g+.25,x,4.2,{frost:!0});const m=x+.2,p=m+1.3;ei(i,He,m,p,1,re.navy);const v=new Se(qs(new gt(p-m,ot),p-m,ot,.8),re.navySlats);v.position.set(He+.004,ot/2,(m+p)/2),v.rotation.y=Math.PI/2,i.add(v),wt(i,re.ringLogo,.5,.5,He+.01,1.75,(m+p)/2,Math.PI/2),cl(i,He,-1,p+.2,pn-.15),T(i,re.wall,.1,Je-ot,pn-20,He-.05,(ot+Je)/2,(20+pn)/2,{shadow:!1}),T(i,re.mat,.6,.012,1.05,He+.42,.006,8.12,{shadow:!1});for(const V of[5,18.3])T(i,re.cam,.04,.04,.12,He+mn-.05,ot-.03,V,{shadow:!1}),st(i,re.cam,.035,.035,.14,He+mn-.1,ot-.08,V,{seg:10,shadow:!1,rz:Math.PI/2-.3});ei(i,Q,Sn,Math.min(15,wu),-1),T(i,re.wall,.1,Je-ot,pn-Sn,Q+.05,(ot+Je)/2,(Sn+pn)/2,{shadow:!1});const y=new Se(new gt(.85,2.3),S.glassFrost);y.position.set(Q-.03,1.15,-1.2),y.rotation.y=-Math.PI/2,y.renderOrder=2,i.add(y);for(const V of[-1.65,-.75])T(i,S.black,.06,2.35,.05,Q-.03,1.17,V);for(const V of[.05,1.2,2.33])T(i,S.black,.06,.05,.9,Q-.03,V,-1.2);T(i,S.chrome,.03,.4,.025,Q-.09,1.05,-.88,{shadow:!1});const _=2.6,I=ol(i,Q,_,1,2.25,re.laminate,1);T(i,re.slot,.012,.9,.12,I,1.45,_-.05,{shadow:!1}),T(i,S.chrome,.03,.42,.03,I-.05,1.05,_+.37,{shadow:!1});for(const V of[.86,1.24])T(i,S.chrome,.06,.02,.02,I-.025,V,_+.37,{shadow:!1});st(i,S.chrome,.02,.02,.02,I-.01,.95,_+.42,{seg:10,shadow:!1,rz:Math.PI/2});const A=new rt;A.position.set(Q-.33,2.62,_-.75),i.add(A),T(A,S.black,.6,.15,.03,0,0,0),wt(A,re.gents,.56,.12,0,0,.017,0),wt(A,re.gents,.56,.12,0,0,-.017,Math.PI),T(A,S.metalDark,.04,.05,.04,.3,.1,0);const w=new Se(new qt(.1,20,14),re.orange);w.position.set(Q-.13,1.78,_+1.4),w.castShadow=!0,i.add(w),st(i,S.metalDark,.11,.09,.08,Q-.13,1.72,_+1.4,{seg:16,open:!0,shadow:!1}),T(i,S.metalDark,.08,.02,.02,Q-.05,1.72,_+1.4,{shadow:!1});const R=wu,M=R+1.7,b=2.45,C=Q-.04,z=R+1.05,H=new Se(new gt(M-R,ot-.05),re.tint);H.position.set(C,(ot-.05)/2,(R+M)/2),H.rotation.y=-Math.PI/2,H.renderOrder=2,i.add(H);const q=(V,Pe=0,ze=ot)=>T(i,S.black,.07,ze-Pe,.06,C,(Pe+ze)/2,V),Z=(V,Pe=R,ze=M)=>T(i,S.black,.07,.06,ze-Pe,C,V,(Pe+ze)/2);for(const V of[R,M])q(V,0,ot);Z(.03),Z(b),Z(ot-.03);for(const V of[R+.04,z-.03,z+.03,M-.04])q(V,0,b);q((R+z)/2,0,b);for(const V of[.62,1.22,1.84])Z(V,R,z);Z(1.22,z,M);for(const V of[z-.09,z+.09]){T(i,S.chrome,.03,.6,.025,Q-.12,1.15,V,{shadow:!1});for(const Pe of[.88,1.42])T(i,S.chrome,.08,.02,.02,Q-.09,Pe,V,{shadow:!1})}Ke(Q-.08,R,Q+.02,M);const $=R-.6,ce=M+.6,B=Q+2.6;Rt(i,re.tableWood,Q+.02,$,B,ce,.002),Rt(i,re.roomCeil,Q,$,B,ce,Je,{down:!0}),T(i,re.olive,.1,Je,ce-$,B,Je/2,($+ce)/2,{shadow:!1});for(const V of[$,ce])T(i,re.olive,B-Q-.12,Je,.1,(Q+.12+B)/2,Je/2,V,{shadow:!1});for(const[V,Pe]of[[z-.1,.9],[z+.15,1.15]]){T(i,S.black,.01,Pe,.01,Q+.9,Je-Pe/2,V,{shadow:!1});const ze=new Se(new qt(.05,12,10),re.lamp);ze.position.set(Q+.9,Je-Pe-.04,V),i.add(ze)}T(i,re.silver,.035,.2,.15,Q-.018,1.35,R-.4,{shadow:!1}),T(i,S.blackMatte,.01,.08,.09,Q-.037,1.39,R-.4,{shadow:!1}),T(i,S.bottleBlue,.006,.05,.05,Q-.043,1.4,R-.42,{shadow:!1});const de=new Se(new qt(.07,16,10,0,Math.PI*2,0,Math.PI/2),re.cam);de.rotation.x=Math.PI,de.position.set(Q-.35,ot,R+.3),i.add(de);const fe=R+2.85,Te=fe+3.4;ei(i,Q,M,Te+.2,-1),T(i,S.white,.012,.09,.09,Q-.006,.38,fe-.3,{shadow:!1});for(const V of[fe-.1,Te+.1]){T(i,re.woodStrip,.06,ot,.2,Q-.03,ot/2,V);for(const Pe of[-.06,0,.06])T(i,S.blackMatte,.005,ot,.008,Q-.061,ot/2,V+Pe,{shadow:!1})}const Ve=new Se(qs(new gt(Te-fe,ot),Te-fe,ot,.7),re.diamond);Ve.position.set(Q-.004,ot/2,(fe+Te)/2),Ve.rotation.y=-Math.PI/2,Ve.receiveShadow=!0,i.add(Ve);const $e=(fe+Te)/2+.2;T(i,S.white,.03,.58,1.05,Q-.02,1.85,$e),wt(i,re.techno,1,.55,Q-.036,1.85,$e,-Math.PI/2),T(i,S.black,.04,.03,.8,Q-mn-.3,Je-.03,$e,{shadow:!1});for(const V of[$e-.3,$e+.05,$e+.35])st(i,S.black,.04,.035,.14,Q-mn-.3,Je-.12,V,{seg:10,shadow:!1,rz:-.7});const ne=Te+.2,oe=Te+1.35,_e=oe+.6,xe=_e+1.1,Ue=xe,Ge=Gn;T(i,S.blackMatte,.02,.17,.09,Q-.07,1.45,Te+.1,{shadow:!1}),T(i,S.bottleBlue,.005,.11,.06,Q-.081,1.47,Te+.1,{shadow:!1});const ke=new Se(new gt(oe-ne-.04,2.38),S.glass);ke.position.set(Q-.03,1.2,(ne+oe)/2),ke.rotation.y=-Math.PI/2,ke.renderOrder=2,i.add(ke);for(const V of[ne+.05,oe-.05])T(i,S.chrome,.03,.05,.12,Q-.03,2.36,V,{shadow:!1});T(i,S.chrome,.03,1.1,.03,Q-.11,1.15,ne+.16,{shadow:!1});for(const V of[.62,1.68])T(i,S.chrome,.08,.02,.02,Q-.07,V,ne+.16,{shadow:!1});Ke(Q-.06,ne,Q+.02,oe),Rt(i,re.greyTile,Q+.02,ne,Q+3,oe+.3,.002,{tile:1.2}),Rt(i,re.roomCeil,Q,ne,Q+3,oe+.3,Je,{down:!0}),T(i,re.room,.1,Je,oe+.3-ne,Q+3,Je/2,(ne+oe+.3)/2,{shadow:!1}),T(i,S.black,.05,2.6,.05,Q+1.6,1.3,ne+.5,{shadow:!1}),T(i,re.room,2.88,Je,.1,Q+1.56,Je/2,oe+.35,{shadow:!1}),ei(i,Q,oe,_e,-1),T(i,S.white,.012,.09,.09,Q-.006,1.25,(oe+_e)/2,{shadow:!1}),T(i,S.blackMatte,.015,.03,.035,Q-.012,1.25,(oe+_e)/2,{shadow:!1}),T(i,re.wall,.1,ot-2.4,oe-ne,Q+.05,(2.4+ot)/2,(ne+oe)/2),T(i,re.wall,.1,ot-2.3,xe-_e,Q+.05,(2.3+ot)/2,(_e+xe)/2),T(i,re.frame,.12,.06,xe-_e,Q+.02,2.3,(_e+xe)/2);for(const V of[_e+.02,xe-.02])T(i,re.frame,.12,2.3,.04,Q+.02,1.15,V);const Qe=new rt;Qe.position.set(Q+.06,0,_e+.04),Qe.rotation.y=1.25,i.add(Qe);const ae=xe-_e-.08;T(Qe,re.laminate,.04,2.25,ae,0,1.125,ae/2);for(const V of[-1,1])T(Qe,re.slot,.012,.9,.1,V*.021,1.45,ae*.6,{shadow:!1}),T(Qe,S.chrome,.03,.42,.025,V*.06,1.05,ae-.12,{shadow:!1});Ke(Q+.04,_e,Q+1.05,_e+.4);const me=Q+4.2,U=_e-.1,ue=xe+.15;Rt(i,re.granite,Q+.02,U,me,ue,.003,{tile:1.2}),Rt(i,re.roomCeil,Q,U,me,ue,4.5,{down:!0}),T(i,re.stairBlue,me-Q-.12,4.5,.1,(Q+.12+me)/2,2.25,U-.05,{shadow:!1}),T(i,re.stairBlue,me-Q-.12,4.5,.1,(Q+.12+me)/2,2.25,ue+.05,{shadow:!1}),T(i,re.stairBlue,.1,4.5,ue-U,me+.05,2.25,(U+ue)/2,{shadow:!1}),T(i,re.wall,.1,4.5-ot,xe-_e,Q+.05,(4.5+ot)/2,(_e+xe)/2,{shadow:!1});for(let V=0;V<9;V++)T(i,re.granite,.3,.17*(V+1),.95,Q+1.3+V*.3,.085*(V+1),xe-.4);Ke(Q+1.15,xe-.9,me,ue),Ke(me-.05,U,me+.1,ue);const ee=xe+1.5,O=Q-.1;T(i,re.granite,.2,Je,Ge-Ue,Q,Je/2,(Ue+Ge)/2),T(i,re.granite,.1,Je,.1,Q+.05,Je/2,Ge+.05),Ke(O,Ue,Q+.1,Ge),al(i,O,ee,5,-1);const Y=new rt;Y.position.set(Q-.9,2.95,Ue-.1),i.add(Y),T(Y,S.black,.03,.2,.62,0,0,0,{shadow:!1}),wt(Y,re.fourth,.6,.18,.017,0,0,Math.PI/2),wt(Y,re.fourth,.6,.18,-.017,0,0,-Math.PI/2);const ge=Zt+.55,ye=ge+.35,P=ye+2.6;ei(i,Q,ge,ye,-1),T(i,re.granite,.2,Je,P-ye,Q,Je/2,(ye+P)/2),Ke(Q-.1,ye,Q+.1,P),al(i,Q-.1,ye+1.45,6,-1);const E=P,G=E+2.8,K=E+.9;MM(i,E,G,K);const pe=new rt;pe.position.set(Q-.33,2.62,K+.75),i.add(pe),T(pe,S.black,.6,.15,.03,0,0,0),wt(pe,re.ladies,.56,.12,0,0,.017,0),wt(pe,re.ladies,.56,.12,0,0,-.017,Math.PI);const he=new Se(new qt(.1,20,14),re.orange);he.position.set(Q-.13,1.78,E+2.2),he.castShadow=!0,i.add(he),st(i,S.metalDark,.11,.09,.08,Q-.13,1.72,E+2.2,{seg:16,open:!0,shadow:!1}),T(i,S.white,.012,.09,.09,Q-.006,.38,G-.25,{shadow:!1});const Ie=G,Le=Ie+2.6;ei(i,Q,Ie,Le,-1,re.navy);const Ce=new Se(qs(new gt(Le-Ie,ot),Le-Ie,ot,.8),re.navySlats);Ce.position.set(Q-.004,ot/2,(Ie+Le)/2),Ce.rotation.y=-Math.PI/2,i.add(Ce),wt(i,re.tenCod,1.5,.47,Q-.012,1.75,(Ie+Le)/2,-Math.PI/2),cl(i,Q,1,Le+.2,pn-.15),wM(i),ld(i,Sn-.12,1,He,Q,He+.9,Q-.25),ld(i,pn+.12,-1),wt(i,re.fireExit,.5,.11,(He+Q)/2,2.95,pn-.01,Math.PI);const ct=new rt;ct.position.set((He+Q)/2,2.72,Sn+1.6),i.add(ct),T(ct,S.white,.58,.14,.03,0,0,0,{shadow:!1}),wt(ct,re.fireExit,.56,.12,0,0,.016,0),wt(ct,re.fireExit,.56,.12,0,0,-.016,Math.PI);for(const V of[-1,1])T(ct,S.chrome,.006,Je-2.79,.006,V*.22,(Je-2.79)/2+.07,0,{shadow:!1})}const Xs={x:12.75,z:17.72,yaw:1.05};function EM(i){Rt(i,S.floorBeige,0,0,Ft,kt,0),Rt(i,S.floorBeige,Ft,xn,Dt,kt,0),Rt(i,S.floorBeige,Jt-xs,kt,Dt,Ct,0),Rt(i,S.floorDark,0,kt,Jt-xs,Ct,0),Rt(i,S.floorDark,0,Ct,sn,yt,0),W2(i),X2(i),SM(i),Y2(i),eM(i),lM(i),pM(i),gM(i)}function nh(i,e){return i>Dt?"Building Hall":i<0?"Terrace":e>Ut?"Game Room":e>yt?i<Vn?"Meeting Room":"Workspace":e<vs&&i<Ft?"Corner Cabin":e<Yt&&e>xn&&i>Ft&&i<Ji?i<7?"Cabin 2":"Cabin 1":i>=Jt&&e<Ct?"Reception":e<kt?i<Ft?"Window Lounge":"Cabin Corridor":"Workspace"}const Sr=new Pn(0,0,0,"YXZ"),Er=new D,TM={type:"change"},AM={type:"lock"},RM={type:"unlock"},fd=Math.PI/2;class CM extends Fy{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=PM.bind(this),this._onPointerlockChange=LM.bind(this),this._onPointerlockError=IM.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;Er.setFromMatrixColumn(t.matrix,0),Er.crossVectors(t.up,Er),t.position.addScaledVector(Er,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;Er.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(Er,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function PM(i){if(this.enabled===!1||this.isLocked===!1)return;const e=i.movementX||i.mozMovementX||i.webkitMovementX||0,t=i.movementY||i.mozMovementY||i.webkitMovementY||0,n=this.object;Sr.setFromQuaternion(n.quaternion),Sr.y-=e*.002*this.pointerSpeed,Sr.x-=t*.002*this.pointerSpeed,Sr.x=Math.max(fd-this.maxPolarAngle,Math.min(fd-this.minPolarAngle,Sr.x)),n.quaternion.setFromEuler(Sr),this.dispatchEvent(TM)}function LM(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(AM),this.isLocked=!0):(this.dispatchEvent(RM),this.isLocked=!1)}function IM(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const dd=1.65,DM=.25,pd=3,NM=6,UM=18,kM=5.2;function OM(i,e,{spawn:t,yaw:n=0}){const s=new CM(i,e),r={},o={x:0,y:0,run:!1},a=new D(t.x,0,t.z),c=new D;let l=0,u=0,h=0,f=0;i.position.set(a.x,dd,a.z),i.rotation.set(0,n,0,"YXZ");const d={dragMode:!1,paused:!1};let g=!1,x=0,m=0;const p=new Pn(0,0,0,"YXZ");e.addEventListener("mousedown",R=>{d.dragMode&&(g=!0,x=R.clientX,m=R.clientY)}),addEventListener("mouseup",()=>{g=!1}),addEventListener("mousemove",R=>{!d.dragMode||!g||d.paused||(p.setFromQuaternion(i.quaternion),p.y-=(R.clientX-x)*.004,p.x=Math.max(-1.45,Math.min(1.45,p.x-(R.clientY-m)*.004)),i.quaternion.setFromEuler(p),x=R.clientX,m=R.clientY)});const v=()=>!d.paused&&(s.isLocked||d.dragMode);addEventListener("keydown",R=>{r[R.code]=!0,R.code==="Space"&&y()});function y(){v()&&u<=.001&&(l=kM)}addEventListener("keyup",R=>{r[R.code]=!1}),addEventListener("blur",()=>{for(const R in r)r[R]=!1});const _=new D,I=new D,A=new D;function w(R){R=Math.min(R,.05),A.set(0,0,0),v()&&(i.getWorldDirection(_),_.y=0,_.normalize(),I.crossVectors(_,i.up).normalize(),(r.KeyW||r.ArrowUp)&&A.add(_),(r.KeyS||r.ArrowDown)&&A.sub(_),(r.KeyD||r.ArrowRight)&&A.add(I),(r.KeyA||r.ArrowLeft)&&A.sub(I),(o.x||o.y)&&A.addScaledVector(_,o.y).addScaledVector(I,o.x));const M=r.ShiftLeft||r.ShiftRight||o.run;if(A.lengthSq()>0){const z=Math.min(1,A.length());A.normalize().multiplyScalar((M?NM:pd)*(o.x||o.y?Math.max(.5,z):1))}const b=1-Math.exp(-(u>0?3:12)*R);c.x+=(A.x-c.x)*b,c.z+=(A.z-c.z)*b,H2(a,c.x*R,c.z*R,DM),l-=UM*R,u=Math.max(0,u+l*R),u===0&&(l=Math.max(l,0));const C=Math.hypot(c.x,c.z);u===0&&C>.3?(h+=R*C*2.6,f=Math.sin(h)*.035*Math.min(1,C/pd)):f*=.85,i.position.set(a.x,dd+u+f,a.z)}return{controls:s,update:w,pos:a,state:d,touch:o,jump:y}}function FM(i){var s;i.updateMatrixWorld(!0);const e=new Map,t=[];i.traverse(r=>{r.isMesh&&t.push(r)});const n=r=>{const o=[];for(let a=r;a&&a!==i;a=a.parent)a.userData.label&&o.at(-1)!==a.userData.label&&o.push(a.userData.label);return o.join(" · ")};for(const r of t){const o=`${r.material.uuid}|${r.castShadow}|${r.renderOrder}`;let a=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(const u of Object.keys(a.attributes))["position","normal","uv"].includes(u)||a.deleteAttribute(u);a.attributes.uv||a.setAttribute("uv",new xt(new Float32Array(a.attributes.position.count*2),2)),a.applyMatrix4(r.matrixWorld),e.has(o)||e.set(o,{material:r.material,cast:r.castShadow,order:r.renderOrder,geos:[],tris:0,labels:[]});const c=e.get(o),l=n(r);l&&((s=c.labels.at(-1))==null?void 0:s[1])!==l?c.labels.push([c.tris,l]):!l&&c.labels.length&&c.labels.at(-1)[1]!==""&&c.labels.push([c.tris,""]),c.geos.push(a),c.tris+=a.attributes.position.count/3}for(;i.children.length;)i.remove(i.children[0]);for(const r of e.values()){const o=lc(r.geos,!1);o.computeBoundingSphere();const a=new Se(o,r.material);a.castShadow=r.cast,a.receiveShadow=!0,a.renderOrder=r.order,a.userData.labels=r.labels,i.add(a)}return e.size}function BM(i){const e=i.object.userData.labels;if(e){let t=0,n=e.length-1,s="";for(;t<=n;){const r=t+n>>1;e[r][0]<=i.faceIndex?(s=e[r][1],t=r+1):n=r-1}return s}for(let t=i.object;t;t=t.parent)if(t.userData.label)return t.userData.label;return""}const ul="/api/suggestions",hl="pixbit-suggestions-v2",$p={W:"Window table",L:"Long table",E:"East-wall desk",LOCK:"Lockers"},zM={W:[1.4,1.2],L:[2.8,1.2],E:[1.3,.8],LOCK:[.55,1.25]},HM=["Corner cabin","Cabin 1","Cabin 2","Lounge","Corridor","Reception","Open workspace","Back wall","East wall","Windows",...Qa.map(i=>i.id==="LOCK"?"Lockers":`${$p[i.id[0]]} ${i.id}`)],Jn="#ecc828",md="#3fbf6f",VM=35e6;function GM({scene:i,camera:e,player:t,world:n,zoneAt:s,renderer:r}){let o=[],a=!1,c=null,l=[],u=[],h=!1,f=!1,d=null;async function g(){try{const N=await fetch(ul);if(!N.ok)throw new Error(N.status);o=await N.json()}catch{a=!0;try{o=JSON.parse(localStorage.getItem(hl))||[]}catch{o=[]}}O()}async function x(N,ie,Re){if(a){N.n=N.n??o.reduce((Ae,we)=>Math.max(Ae,we.n||0),0)+1,N.created=N.created??Date.now(),N.files=[...(N.files||[]).filter(Ae=>!Re.includes(Ae.name)),...ie.map(Ae=>({name:Ae.name,type:Ae.type,path:Ae.data}))];const le=o.findIndex(Ae=>Ae.id===N.id);le>=0?o[le]=N:o.push(N);try{localStorage.setItem(hl,JSON.stringify(o))}catch{throw new Error("browser storage is full (start the dev server to save files to the project)")}return N}const k=await fetch(ul,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...N,newFiles:ie,removeFiles:Re})}),ve=await k.json().catch(()=>({}));if(!k.ok)throw new Error(ve.error||`server said ${k.status}`);const j=o.findIndex(le=>le.id===ve.id);return j>=0?o[j]=ve:o.push(ve),ve}async function m(N){if(a||await fetch(`${ul}/${encodeURIComponent(N)}`,{method:"DELETE"}),o=o.filter(ie=>ie.id!==N),a)try{localStorage.setItem(hl,JSON.stringify(o))}catch{}}function p(N,ie){let Re=null,k=.9;const ve=s(N,ie);for(const j of Qa){if(s(j.x,j.z)!==ve)continue;const le=j.id==="LOCK"?"LOCK":j.id[0];let[Ae,we]=zM[le]||[1,1];(j.rot||0)%180&&([Ae,we]=[we,Ae]);const et=Math.hypot(Math.max(0,Math.abs(N-j.x)-Ae/2),Math.max(0,Math.abs(ie-j.z)-we/2));et<k&&(k=et,Re=j.id==="LOCK"?"Lockers":`${$p[le]} ${j.id}`)}return Re}const v=N=>Math.round(N*100)/100,y=N=>/^image\/(jpeg|png|gif|webp|avif|svg\+xml|bmp)$/.test(N.type),_=N=>N.src||N.path,I=new rt;I.name="suggestion-marks",i.add(I);const A=new qt(.07,16,12),w=new ni(.008,.008,1,6),R=new Fn({color:"#222"}),M=new D(0,1,0),b={},C=(N,ie=1)=>b[N+ie]||(b[N+ie]=new Fn({color:N,transparent:ie<1,opacity:ie,depthWrite:ie===1,side:Bt}));function z(N,ie){const Re=document.createElement("canvas");Re.width=Re.height=64;const k=Re.getContext("2d");k.fillStyle="#111",k.beginPath(),k.arc(32,32,28,0,Math.PI*2),k.fill(),k.strokeStyle=ie,k.lineWidth=5,k.stroke(),k.fillStyle="#fff",k.font="bold 28px system-ui, sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText(String(N),32,34);const ve=new Ln(Re);ve.colorSpace=Et;const j=new Ks(new Ts({map:ve,depthTest:!1,transparent:!0}));return j.scale.set(.22,.22,1),j.renderOrder=10,j}function H({x0:N,z0:ie,x1:Re,z1:k},ve,j){const le=Math.abs(Re-N),Ae=Math.abs(k-ie),we=new Se(new gt(le,Ae),C(ve,.18));we.rotation.x=-Math.PI/2,we.position.set((N+Re)/2,.02,(ie+k)/2),we.renderOrder=3;const et=[[N,ie],[Re,ie],[Re,k],[N,k]].map(([Wt,vt])=>new D(Wt,.025,vt)),Nt=new vp(new Gt().setFromPoints(et),new zu({color:ve}));j.add(we,Nt)}function q(N,ie,Re,k,ve,j){const le=new Se(w,R);le.scale.y=k,le.quaternion.setFromUnitVectors(M,Re),le.position.copy(ie).addScaledVector(Re,k/2);const Ae=new Se(A,C(ve));Ae.position.copy(ie).addScaledVector(Re,k);const we=z(j,ve);we.position.copy(Ae.position).add(new D(0,.18,0)),N.add(le,Ae,we)}function Z(){for(const N of[...I.children])I.remove(N),N.traverse(ie=>{var Re,k,ve;(k=(Re=ie.material)==null?void 0:Re.map)==null||k.dispose(),(ie.isLine||((ve=ie.geometry)==null?void 0:ve.type)==="PlaneGeometry")&&ie.geometry.dispose()});for(const N of o){if(N.status==="done")continue;const ie=new rt;ie.userData.sid=N.id;const Re=Jn;N.area?(H(N.area,Re,ie),q(ie,new D((N.area.x0+N.area.x1)/2,0,(N.area.z0+N.area.z1)/2),M,1.1,Re,N.n)):q(ie,new D(...N.point),new D(...N.normal||[0,1,0]).normalize(),.28,Re,N.n),I.add(ie)}}const $=new rt;i.add($);function ce(){for(const N of[...$.children])$.remove(N)}const B=document.createElement("style");B.textContent=`
  .sg-modal { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,.5); z-index:20; padding:16px; }
  .sg-hidden { display:none !important; }
  .sg-card { width:min(520px,100%); max-height:100%; overflow:auto; background:#1b1b1b; color:#eee; border:1px solid ${Jn}; border-radius:12px; padding:18px 20px; font-size:14px; box-sizing:border-box; }
  .sg-card h2 { margin:0 0 6px; font-size:18px; color:#fff; }
  .sg-card label.f { display:block; font-size:12px; color:#aaa; margin:10px 0 4px; }
  .sg-card input[type=text], .sg-card textarea { width:100%; box-sizing:border-box; background:#111; color:#fff; border:1px solid #444; border-radius:8px; padding:8px 10px; font:inherit; }
  .sg-card textarea { min-height:110px; resize:vertical; }
  .sg-card input:focus, .sg-card textarea:focus { outline:none; border-color:${Jn}; }
  .sg-meta { color:#999; font-size:12px; margin-top:4px; }
  .sg-drop { margin-top:4px; border:1.5px dashed #555; border-radius:8px; padding:12px; text-align:center; color:#aaa; cursor:pointer; }
  .sg-drop.over, .sg-drop:focus { border-color:${Jn}; color:${Jn}; outline:none; }
  .sg-files { display:grid; grid-template-columns:repeat(auto-fill,minmax(110px,1fr)); gap:8px; margin-top:8px; }
  .sg-file { position:relative; background:#111; border:1px solid #333; border-radius:8px; overflow:hidden; font-size:12px; }
  .sg-file img { width:100%; height:80px; object-fit:cover; display:block; }
  .sg-file .doc { height:80px; display:flex; align-items:center; justify-content:center; color:${Jn}; font-weight:700; font-size:16px; }
  .sg-file span { display:block; padding:4px 6px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .sg-file button { position:absolute; top:4px; right:4px; padding:1px 7px !important; }
  .sg-check { display:flex; align-items:center; gap:8px; margin-top:12px; }
  .sg-reply { margin-top:10px; background:#11261a; border:1px solid #2c5a3c; border-radius:8px; padding:8px 10px; white-space:pre-wrap; font-size:13px; }
  .sg-row { display:flex; gap:8px; margin-top:14px; align-items:center; flex-wrap:wrap; }
  .sg-row .sp { flex:1; }
  .sg-card button, .sg-list button { font:inherit; font-size:13px; padding:7px 12px; border-radius:7px; border:1px solid #555; background:#2a2a2a; color:#eee; cursor:pointer; }
  .sg-card button:hover, .sg-list button:hover { border-color:#999; }
  .sg-card button.pri { background:${Jn}; color:#111; border-color:${Jn}; font-weight:700; }
  .sg-card button.del { color:#ff8a7a; }
  .sg-err { color:#ff8a7a; font-size:13px; margin-top:8px; min-height:1em; }
  .sg-list { position:fixed; top:0; right:0; bottom:0; width:min(380px,100%); background:#161616; color:#eee; border-left:1px solid #333; z-index:15; display:flex; flex-direction:column; font-size:14px; }
  .sg-list header { display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid #333; gap:8px; }
  .sg-list header b { flex:1; font-size:16px; }
  .sg-items { overflow:auto; padding:8px 12px 16px; }
  .sg-item { display:flex; gap:10px; padding:12px 4px; border-bottom:1px solid #2a2a2a; }
  .sg-num { flex:none; width:26px; height:26px; border-radius:50%; background:#111; border:2px solid ${Jn}; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; }
  .sg-num.done { border-color:${md}; }
  .sg-body { flex:1; min-width:0; }
  .sg-body p { margin:0 0 6px; white-space:pre-wrap; word-break:break-word; }
  .sg-body small { color:#999; display:block; margin-bottom:6px; }
  .sg-badge { display:inline-block; font-size:11px; padding:1px 7px; border-radius:10px; background:#3a3315; color:${Jn}; margin-right:6px; }
  .sg-badge.done { background:#16301f; color:${md}; }
  .sg-thumbs { display:flex; gap:6px; flex-wrap:wrap; margin-bottom:6px; }
  .sg-thumbs img { width:72px; height:54px; object-fit:cover; border-radius:5px; }
  .sg-thumbs a { font-size:12px; color:${Jn}; }
  .sg-reply-l { font-size:12px; color:#9fd8b0; background:#11261a; border-radius:6px; padding:6px 8px; margin-bottom:6px; white-space:pre-wrap; }
  .sg-empty { color:#999; padding:16px 4px; line-height:1.6; }
  .sg-toast { position:fixed; left:50%; bottom:40px; transform:translateX(-50%); background:rgba(0,0,0,.85); color:#fff; padding:8px 16px; border-radius:6px; z-index:30; font-size:14px; pointer-events:none; opacity:0; transition:opacity .3s; max-width:90vw; text-align:center; }
  .sg-toast.show { opacity:1; }`,document.head.appendChild(B);const de=document.createElement("div");de.className="sg-modal sg-hidden",de.innerHTML=`<div class="sg-card" role="dialog" aria-modal="true" aria-labelledby="sg-title">
    <h2 id="sg-title">New suggestion</h2>
    <label class="f" for="sg-section">Section</label>
    <input type="text" id="sg-section" list="sg-sections" placeholder="e.g. Long table L2, Reception, Cabin 1">
    <datalist id="sg-sections">${HM.map(N=>`<option value="${N}">`).join("")}</datalist>
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
  </div>`,document.body.appendChild(de);const fe=N=>de.querySelector(N),Te=fe("#sg-text"),Ve=fe("#sg-section"),$e=fe(".sg-drop"),ne=fe("input[type=file]"),oe=fe(".sg-files"),_e=fe(".sg-err"),xe=fe(".sg-meta"),Ue=fe("#sg-done"),Ge=fe(".sg-reply"),ke=document.createElement("div");ke.className="sg-list sg-hidden",ke.innerHTML='<header><b>Suggestions</b><button type="button" class="close">Close (L)</button></header><div class="sg-items"></div>',document.body.appendChild(ke);const Qe=ke.querySelector(".sg-items"),ae=document.createElement("div");ae.className="sg-toast",document.body.appendChild(ae);let me;function U(N,ie=2600){ae.textContent=N,ae.classList.add("show"),clearTimeout(me),me=setTimeout(()=>ae.classList.remove("show"),ie)}const ue=N=>N.area?`Area x ${v(N.area.x0)}–${v(N.area.x1)} m, z ${v(N.area.z0)}–${v(N.area.z1)} m`:`Point x ${N.point[0]}, z ${N.point[2]}`;function ee(){if(Qe.innerHTML="",!o.length){Qe.innerHTML='<div class="sg-empty">No suggestions yet.<br>Aim the dot at something and press <b>C</b>, or press <b>X</b> on two floor corners to mark an area.</div>';return}for(const N of[...o].sort((ie,Re)=>ie.n-Re.n)){const ie=document.createElement("div");ie.className="sg-item",ie.innerHTML=`<div class="sg-num ${N.status==="done"?"done":""}">${N.n}</div><div class="sg-body"><small></small><p></p><div class="sg-thumbs"></div></div>`;const Re=ie.querySelector("small");Re.innerHTML=`<span class="sg-badge ${N.status==="done"?"done":""}">${N.status==="done"?"done":"open"}</span>`,Re.append(N.section||N.zone||""),ie.querySelector("p").textContent=N.text,N.reply&&ie.querySelector("p").after(Object.assign(document.createElement("div"),{className:"sg-reply-l",textContent:`Claude: ${N.reply}`}));const k=ie.querySelector(".sg-thumbs");for(const et of N.files||[])y(et)?k.append(Object.assign(document.createElement("img"),{src:_(et),alt:et.name,title:et.name})):k.append(Object.assign(document.createElement("a"),{href:_(et),textContent:et.name,target:"_blank",download:et.name}));const ve=ie.querySelector(".sg-body"),j=document.createElement("div");j.className="sg-row",j.style.marginTop="2px";const le=Object.assign(document.createElement("button"),{type:"button",textContent:"Go there"});le.onclick=()=>Le(N);const Ae=Object.assign(document.createElement("button"),{type:"button",textContent:"Open"});Ae.onclick=()=>{ke.classList.add("sg-hidden"),G(N)};const we=Object.assign(document.createElement("button"),{type:"button",textContent:"Delete"});we.style.color="#ff8a7a",pe(we,()=>he(N)),j.append(le,Ae,we),ve.appendChild(j),Qe.appendChild(ie)}}function O(){Z(),ee()}function Y(){oe.innerHTML="",l.forEach((N,ie)=>{const Re=document.createElement("div");Re.className="sg-file",y(N)?Re.append(Object.assign(document.createElement("img"),{src:_(N),alt:N.name})):Re.append(Object.assign(document.createElement("div"),{className:"doc",textContent:(N.name.split(".").pop()||"file").slice(0,5).toUpperCase()})),Re.append(Object.assign(document.createElement("span"),{textContent:N.name,title:N.name}));const k=Object.assign(document.createElement("button"),{type:"button",textContent:"×"});k.setAttribute("aria-label",`Remove ${N.name}`),k.onclick=()=>{N.data||u.push(N.name),l.splice(ie,1),Y()},Re.append(k),oe.append(Re)})}const ge=N=>new Promise((ie,Re)=>{const k=new FileReader;k.onload=()=>ie(k.result),k.onerror=Re,k.readAsDataURL(N)});async function ye(N){_e.textContent="";for(const ie of N){let Re=ie.name||`pasted-${Date.now()}.png`,k=ie.type||"application/octet-stream",ve;if(/^image\/(jpeg|png|webp)$/.test(k)&&ie.size>15e5)try{const le=await createImageBitmap(ie),Ae=Math.min(1,2e3/Math.max(le.width,le.height)),we=document.createElement("canvas");we.width=Math.round(le.width*Ae),we.height=Math.round(le.height*Ae),we.getContext("2d").drawImage(le,0,0,we.width,we.height),ve=we.toDataURL("image/jpeg",.85),k="image/jpeg",Re=Re.replace(/\.\w+$/,"")+".jpg"}catch{}if(ve=ve||await ge(ie),l.reduce((le,Ae)=>{var we;return le+(((we=Ae.data)==null?void 0:we.length)||0)},0)+ve.length>VM){_e.textContent=`${Re} is too big to add (keep new files under ~25 MB per save).`;continue}l.push({name:Re,type:k,data:ve,src:ve})}Y()}$e.onclick=()=>ne.click(),$e.onkeydown=N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),ne.click())},ne.onchange=()=>{ye([...ne.files]),ne.value=""},$e.ondragover=N=>{N.preventDefault(),$e.classList.add("over")},$e.ondragleave=()=>$e.classList.remove("over"),$e.ondrop=N=>{N.preventDefault(),$e.classList.remove("over"),ye([...N.dataTransfer.files])},de.addEventListener("paste",N=>{const ie=[...N.clipboardData.files];ie.length&&(N.preventDefault(),ye(ie))}),Te.oninput=()=>{_e.textContent=""};const P=()=>!de.classList.contains("sg-hidden");let E=()=>{};function G(N){c=N,l=(N.files||[]).map(ie=>({...ie})),u=[],fe("#sg-title").textContent=N.id?`Suggestion ${N.n}`:N.area?"New suggestion for this area":"New suggestion",Ve.value=N.section||[N.near,N.zone].filter(Boolean).join(" · "),xe.textContent=ue(N)+(N.folder?` · saved in suggestions/${N.folder}/`:""),Te.value=N.text||"",Ue.checked=N.status==="done",fe(".sg-check").classList.toggle("sg-hidden",!N.id),Ge.textContent=N.reply?`Claude: ${N.reply}`:"",Ge.classList.toggle("sg-hidden",!N.reply),fe(".del").classList.toggle("sg-hidden",!N.id),_e.textContent="",Y(),h=!!document.pointerLockElement,de.classList.remove("sg-hidden"),t.state.paused=!0,document.pointerLockElement&&document.exitPointerLock(),setTimeout(()=>Te.focus(),30)}function K(){if(de.classList.add("sg-hidden"),c=null,l=[],u=[],ce(),t.state.paused=!1,h)try{const N=r.domElement.requestPointerLock();N!=null&&N.catch&&N.catch(()=>E())}catch{E()}}fe(".cancel").onclick=K,fe(".pri").onclick=async()=>{const N=Te.value.trim();if(!N){_e.textContent="Write what needs to change first.",Te.focus();return}const ie={...c,text:N,section:Ve.value.trim(),status:Ue.checked?"done":"open",updated:Date.now()};delete ie.near,ie.id||(ie.id=`s${Date.now().toString(36)}`);const Re=l.filter(k=>k.data).map(({name:k,type:ve,data:j})=>({name:k,type:ve,data:j}));fe(".pri").disabled=!0,fe(".pri").textContent="Saving…";try{const k=await x(ie,Re,u);O(),U(a?`Suggestion ${k.n} saved in this browser`:`Suggestion ${k.n} saved to suggestions/${k.folder}/`),K()}catch(k){_e.textContent=`Could not save: ${k.message}`}finally{fe(".pri").disabled=!1,fe(".pri").textContent="Save"}};function pe(N,ie){let Re=0;N.onclick=async()=>{if(!Re){N.textContent="Click again to delete",N.style.borderColor="#ff8a7a",Re=setTimeout(()=>{Re=0,N.textContent="Delete",N.style.borderColor=""},4e3);return}clearTimeout(Re),Re=0,N.disabled=!0;try{await ie()}finally{N.disabled=!1,N.textContent="Delete",N.style.borderColor=""}}}async function he(N){await m(N.id),O(),U(`Suggestion ${N.n} deleted`)}pe(fe(".del"),async()=>{if(c!=null&&c.id){const N=c;K(),await he(N)}}),ke.querySelector(".close").onclick=()=>Ie(!1);function Ie(N=ke.classList.contains("sg-hidden")){ke.classList.toggle("sg-hidden",!N),N&&(ee(),document.pointerLockElement&&document.exitPointerLock())}function Le(N){N.view&&(t.pos.set(N.view.x,0,N.view.z),e.position.set(N.view.x,e.position.y,N.view.z),e.quaternion.setFromEuler(new Pn(N.view.pitch,N.view.yaw,0,"YXZ"))),Ie(!1),U(`${N.n}: ${N.text.slice(0,70)}${N.text.length>70?"…":""}`)}const Ce=new Oy;Ce.far=40;const ct=new Me(0,0);function V(){Ce.setFromCamera(ct,e);const N=Ce.intersectObjects([I,n],!0).find(k=>k.object.visible&&!k.object.isLine);if(!N)return null;let ie=N.object;for(;ie&&!ie.userData.sid&&ie!==i;)ie=ie.parent;if(ie!=null&&ie.userData.sid)return{mark:o.find(k=>k.id===ie.userData.sid),point:N.point};const Re=N.face?N.face.normal.clone().transformDirection(N.object.matrixWorld):M.clone();return Re.dot(Ce.ray.direction)>0&&Re.negate(),{point:N.point,normal:Re,target:Pe(BM(N),N.point,Re)}}function Pe(N,ie,Re){return N==="Wall"||N==="Glass wall"?ie.x<.35?`Window ${N.toLowerCase()}`:ie.x>9.8&&ie.z>9.5?"East wall":ie.z>18.4?"Back wall":`${N} (${s(ie.x,ie.z)})`:N||(Re.y>.7&&ie.y<.1?"Floor":Re.y<-.7?"Ceiling":"")}function ze(){const N=new Pn().setFromQuaternion(e.quaternion,"YXZ");return{x:v(t.pos.x),z:v(t.pos.z),yaw:v(N.y),pitch:v(N.x)}}function We(){const N=V();if(!N){U("Aim the dot at something first");return}if(N.mark){G(N.mark);return}const ie=N.point;G({point:[v(ie.x),v(ie.y),v(ie.z)],normal:[v(N.normal.x),v(N.normal.y),v(N.normal.z)],zone:s(ie.x,ie.z),near:N.target||p(ie.x,ie.z),target:N.target,view:ze()})}function Oe(){const N=V();if(!N){U("Aim the dot at the floor first");return}const{x:ie,z:Re}=N.point;if(!d){d={x:ie,z:Re},ce(),q($,new D(ie,0,Re),M,.5,Jn,"1"),U("Corner 1 set. Aim at the opposite corner and press X (Esc cancels).",4e3);return}const k={x0:v(Math.min(d.x,ie)),z0:v(Math.min(d.z,Re)),x1:v(Math.max(d.x,ie)),z1:v(Math.max(d.z,Re))};if(d=null,ce(),k.x1-k.x0<.2||k.z1-k.z0<.2){U("That area is too small: pick two corners further apart");return}H(k,Jn,$);const ve=(k.x0+k.x1)/2,j=(k.z0+k.z1)/2;G({area:k,point:[v(ve),0,v(j)],normal:[0,1,0],zone:s(ve,j),near:p(ve,j),view:ze()})}return addEventListener("keydown",N=>{if(P()){if(!f)return;N.code==="Escape"&&(N.preventDefault(),K()),N.code==="Enter"&&(N.metaKey||N.ctrlKey)&&fe(".pri").click();return}f&&(/^(INPUT|TEXTAREA|SELECT)$/.test(N.target.tagName)||(N.code==="Escape"&&d&&(d=null,ce(),U("Area cancelled")),N.code==="KeyC"&&We(),N.code==="KeyX"&&Oe(),N.code==="KeyL"&&Ie()))}),g(),{isOpen:()=>P()||!ke.classList.contains("sg-hidden"),setEnabled(N){f=N,I.visible=N,N||(P()&&K(),Ie(!1),d=null,ce())},onResumeFailed(N){E=N}}}const gd=1.8,xd=2.2;function _d(i,e,t,n=2.4){const s=new rt;i.add(s);const r=new Se(new hn(.012,n-.04,e-.02),S.glass);r.position.set(0,n/2,t*e/2),r.renderOrder=2,s.add(r),T(s,S.chrome,.02,.1,e-.04,0,.05,t*e/2),T(s,S.chrome,.02,.06,.12,0,n-.06,t*.08),T(s,S.chrome,.02,.06,.12,0,.12,t*.08);const o=t*(e-.12);for(const a of[-1,1]){T(s,S.chrome,.028,1,.028,a*.07,1.05,o);for(const c of[.62,1.48])T(s,S.chrome,.12,.02,.02,a*.035,c,o)}return t>0&&T(s,S.blackMatte,.03,.14,.2,0,1.05,t*(e-.02)),s}let fl=null;function WM(){if(fl)return fl;const i=document.createElement("canvas");i.width=i.height=128;const e=i.getContext("2d");return e.fillStyle="rgba(15,18,24,.8)",e.strokeStyle="#fff",e.lineWidth=8,e.beginPath(),e.arc(64,64,56,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fff",e.textAlign="center",e.textBaseline="middle",e.font="bold 72px system-ui, sans-serif",e.fillText("F",64,68),fl=new Ln(i)}function vd(i,e,t,n){const s=new Ks(new Ts({map:WM(),depthTest:!1,transparent:!0}));return s.scale.set(.11,.11,1),s.position.set(e,t,n),s.renderOrder=20,s.visible=!1,i.add(s),s}function XM({scene:i,player:e,camera:t}){const n=[],s=(w,R,M)=>{const b=(R-w)/2,C=new rt;i.add(C);const z=new rt;z.position.set(0,0,w),C.add(z);const H=new rt;H.position.set(0,0,R),C.add(H);const q=vd(z,.1,1.25,b-.12);_d(z,b,1),_d(H,b,-1);const Z={minX:-.08,maxX:.08,minZ:w,maxZ:R};gs.push(Z),n.push({name:M,x:0,z:(w+R)/2,t:0,target:0,block:Z,marker:q,apply($){const ce=$*Math.PI/2*.95;z.rotation.y=ce,H.rotation.y=-ce}})};s(4.9,6.5,"balcony door"),s(bu[0],bu[1],"meeting room door");for(const w of hc){i.add(w.leaf),gs.push(w.block);const R=vd(w.leaf,w.handle[0],w.handle[1],w.handle[2]);n.push({name:w.name,x:w.x,z:w.z,t:0,target:0,block:w.block,marker:R,apply(M){w.leaf.rotation.y=w.closed+(w.open-w.closed)*M}})}const r={visible:!1,material:{opacity:1}},o=Ja.map(w=>(i.add(w.leaf),{name:"locker door",x:w.center.x,z:w.center.z,center:w.center,t:0,target:0,block:null,marker:r,apply(R){w.leaf.rotation.y=w.closed+(w.open-w.closed)*R}}));n.push(...o);const a=new D,c=new D,l=()=>{t.getWorldDirection(c);let w=null,R=.96;for(const M of o){if(a.copy(M.center).sub(t.position),a.length()>1.8)continue;const C=a.normalize().dot(c);C>R&&(R=C,w=M)}return w},u=()=>{var b;const w=l();if(w)return w;let R=null,M=gd;for(const C of n){if(C.center||(b=C.locked)!=null&&b.call(C))continue;const z=Math.hypot(e.pos.x-C.x,e.pos.z-C.z);z<M&&(M=z,R=C)}return R},h=[],f=(w,R)=>{if(w.target=R?1:0,w.target&&w.block){const M=gs.indexOf(w.block);M>=0&&gs.splice(M,1)}},d=w=>{f(w,!w.target);const R=n.indexOf(w);for(const M of h)M(R,w.target)},g=(w,R)=>{const M=n[w];M&&!!M.target!=!!R&&f(M,R)},x=()=>n.map(w=>w.target),m=w=>{Array.isArray(w)&&w.forEach((R,M)=>g(M,R))},p=w=>h.push(w);addEventListener("keydown",w=>{if(w.code!=="KeyF"||e.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(w.target.tagName))return;const R=u();R&&d(R)});let v=0,y=0;addEventListener("mousedown",w=>{v=w.clientX,y=w.clientY}),addEventListener("click",w=>{if(w.button!==0||e.state.paused||!e.controls.isLocked&&!e.state.dragMode||Math.hypot(w.clientX-v,w.clientY-y)>5&&!e.controls.isLocked)return;const R=l();R&&d(R)});function _(w){var M,b;const R=u();for(const C of n){const z=Math.hypot(e.pos.x-C.x,e.pos.z-C.z);C.marker.visible=z<4.5&&(!((M=C.locked)!=null&&M.call(C))||C.askToOpen),C.marker.material.opacity=C===R||C.askToOpen&&((b=C.locked)!=null&&b.call(C))&&z<gd?1:.55}for(const C of n)C.t!==C.target&&(C.t=C.target>C.t?Math.min(1,C.t+w*xd):Math.max(0,C.t-w*xd),C.apply(C.t*C.t*(3-2*C.t)),C.block&&C.t===0&&!gs.includes(C.block)&&gs.push(C.block))}function I(){const w=u();return w?`${w.center?"F / click":"F"} ${w.target?"close":"open"} ${w.name.toLowerCase()}`:""}return{update:_,prompt:I,byName:w=>n.find(R=>R.name===w),toggle:d,setOpen:g,snapshot:x,applySnapshot:m,onChange:p}}const qM=1,dl=8,pl=(7.6+8.65)/2;function yd(i){const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d"),n=i?"#3ddc84":"#ff5a4f";t.fillStyle="rgba(12,14,18,.85)",t.strokeStyle=n,t.lineWidth=7,t.beginPath(),t.arc(64,64,58,0,Math.PI*2),t.fill(),t.stroke(),t.lineWidth=9,t.lineCap="round",t.beginPath(),i?(t.arc(78,50,17,Math.PI,0),t.lineTo(95,58)):(t.moveTo(47,62),t.lineTo(47,50),t.arc(64,50,17,Math.PI,0),t.lineTo(81,62)),t.stroke(),t.fillStyle=n,t.beginPath(),t.roundRect(36,60,56,40,7),t.fill(),t.fillStyle="rgba(12,14,18,.9)",t.beginPath(),t.arc(64,76,6,0,Math.PI*2),t.fill(),t.fillRect(61,78,6,12);const s=new Ln(e);return s.colorSpace=Et,s}const YM=`
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
`;function $M({scene:i,player:e,camera:t,doors:n}){const s=n.byName("entrance door"),r=()=>e.pos.x>Dt,o=yd(!1),a=yd(!0),c=new Ks(new Ts({map:o,transparent:!0}));c.scale.set(.13,.13,1),c.position.set(wn.x+.06,wn.y+.24,wn.z),c.renderOrder=20,i.add(c);const l=new zt({color:"#ff3b30",emissive:"#ff3b30",emissiveIntensity:1.6}),u=new Se(new hn(.006,.012,.03),l);u.position.set(wn.x+.018,wn.y+.055,wn.z),i.add(u);const h=document.createElement("canvas");h.width=512,h.height=150;const f=h.getContext("2d"),d=new Ln(h);d.colorSpace=Et;const g=new Ks(new Ts({map:d,transparent:!0}));g.scale.set(.4,.4*150/512,1),g.center.set(0,.5),g.position.set(wn.x+.06,wn.y+.24,wn.z-.09),g.renderOrder=20,i.add(g);let x="";const m=(oe,_e,xe,Ue)=>{const Ge=`${oe}|${_e}|${Math.round(xe*40)}|${Ue}`;Ge!==x&&(x=Ge,f.clearRect(0,0,512,150),f.fillStyle="rgba(0,0,0,.86)",f.beginPath(),f.roundRect(4,4,504,142,16),f.fill(),f.fillStyle="#fff",f.font="600 46px system-ui, sans-serif",f.textBaseline="alphabetic",f.fillText(oe,30,66),f.fillStyle="rgba(255,255,255,.65)",f.font="400 30px system-ui, sans-serif",f.fillText(_e,30,108),f.fillStyle="rgba(255,255,255,.18)",f.fillRect(30,124,452,8),f.fillStyle=Ue,f.fillRect(30,124,452*Math.max(0,Math.min(1,xe)),8),d.needsUpdate=!0)},p=new D(wn.x+.004,wn.y+.02,wn.z),v=new D,y=new D;let _=0;const I=document.createElement("style");I.textContent=YM,document.head.appendChild(I);const A=document.createElement("div");A.id="unlockbox";const w=2*Math.PI*18;A.innerHTML=`<svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,.22)" stroke-width="4"/>
    <circle class="ring" cx="22" cy="22" r="18" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-dasharray="${w}" stroke-dashoffset="${w}"/>
    <text x="22" y="27.5" text-anchor="middle" fill="#fff" font-family="system-ui, sans-serif" font-weight="700" font-size="15">F</text></svg>
    <div class="txt"></div>`,document.body.appendChild(A);const R=A.querySelector(".ring"),M=A.querySelector("text"),b=A.querySelector(".txt");let C="";const z=(oe,_e,xe,Ue,Ge)=>{A.classList.toggle("show",oe),oe&&(_e!==C&&(b.innerHTML=_e,C=_e),R.setAttribute("stroke-dashoffset",String(w*(1-xe))),R.setAttribute("stroke",Ue),M.textContent=Ge)};let H="locked",q=0,Z=!1,$=0;const ce=()=>r()&&Math.hypot(e.pos.x-wn.x,e.pos.z-wn.z)<.9,B=()=>r()&&Math.hypot(e.pos.x-Dt,e.pos.z-pl)<1.4,de=()=>e.pos.x>Dt-.6&&e.pos.x<Dt+.6&&Math.abs(e.pos.z-pl)<.75;s.locked=()=>H!=="open"&&r();const fe=()=>{H="open",$=dl,Z=!1,q=0,s.target||n.toggle(s),c.material.map=a,c.material.needsUpdate=!0},Te=oe=>{var _e;return/^(INPUT|TEXTAREA|SELECT)$/.test((_e=oe.target)==null?void 0:_e.tagName)};addEventListener("keydown",oe=>{oe.code!=="KeyF"||oe.repeat||e.state.paused||Te(oe)||H==="locked"&&ce()&&(Z=!0)}),addEventListener("keyup",oe=>{oe.code==="KeyF"&&(Z=!1)}),addEventListener("blur",()=>{Z=!1});function Ve(oe){const _e=ce();if((!_e||H!=="locked")&&(Z=!1),Z?(q+=oe/qM,q>=1&&fe()):q=Math.max(0,q-oe*2.5),H==="open"&&($-=oe,$<=0&&!de()&&(H="closing")),H==="closing"&&(s.target&&n.toggle(s),s.t===0&&(H="locked",c.material.map=o,c.material.needsUpdate=!0)),_=(Z?1:0)?Math.min(1,_+oe/.3):Math.max(0,_-oe/.35),_>0){t.position.distanceTo(p)<2.4&&r()?v.copy(p):(t.getWorldDirection(y),v.copy(t.position).addScaledVector(y,.6).y-=.15);const me=Z&&_===1?.012*(.5+.5*Math.sin(performance.now()/120)):0;me&&(t.getWorldDirection(y),v.addScaledVector(y,me))}const Ge=H==="open"?"#34d058":Z&&_===1?Math.floor(performance.now()/150)%2?"#3aa0ff":"#0b2a55":"#ff3b30";l.color.set(Ge),l.emissive.set(Ge);const ke=Math.hypot(e.pos.x-wn.x,e.pos.z-wn.z),Qe=r()&&(ke<1.8||B());if(c.visible=g.visible=Qe,Qe)if(H==="open"){const me=Math.max(0,Math.ceil($));m("Door unlocked",$>0?`Locks again in ${me}s`:"Clear the doorway to lock",Math.max(0,$)/dl,"#34d058")}else H==="closing"?m("Locking…","Door closing",0,"#ff5a4f"):_e?m(q>0?"Unlocking…":"Hold F to unlock",q>0?"Keep holding F":"Place your finger",q,"#fff"):m("Locked","Use fingerprint to unlock",1,"#ff5a4f");const ae=_e||H!=="locked"&&Math.hypot(e.pos.x-Dt,e.pos.z-pl)<5;if(H==="locked")!_e&&B()?z(!0,"Use fingerprint to unlock<small>Reader on the wall beside the door</small>",1,"#ff5a4f","🔒"):z(_e,q>0?"Unlocking…<small>Keep holding <kbd>F</kbd></small>":"Press and hold <kbd>F</kbd> to unlock<small>Pixbit entrance</small>",q,"#fff","F");else if(H==="open"){const me=Math.max(0,Math.ceil($));z(ae,$>0?`Door unlocked<small>Locks again in ${me}s</small>`:"Door unlocked<small>Clear the doorway to lock</small>",Math.max(0,$)/dl,"#34d058",String(me))}else z(ae,"Locking…<small>Door closing</small>",0,"#ff5a4f","🔒")}function $e(){return H==="locked"&&ce()?"F hold to unlock door":""}function ne(){return{k:_*_*(3-2*_),aim:v}}return{update:Ve,prompt:$e,reach:ne}}const jM=`
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
`;let Mo=null;function KM(i){try{Mo||(Mo=new(window.AudioContext||window.webkitAudioContext));const e=Mo.currentTime,t=i?[[392,0],[523,.12],[659,.24],[784,.36],[1047,.5]]:[[160,0],[120,.22]];for(const[n,s]of t){const r=Mo.createOscillator(),o=Mo.createGain();r.type=i?"triangle":"sawtooth",r.frequency.value=n;const a=i?s===.5?.7:.16:.3;o.gain.setValueAtTime(1e-4,e+s),o.gain.exponentialRampToValueAtTime(i?.18:.12,e+s+.02),o.gain.exponentialRampToValueAtTime(1e-4,e+s+a),r.connect(o).connect(Mo.destination),r.start(e+s),r.stop(e+s+a+.05)}}catch{}}function ZM({scene:i,player:e,doors:t}){const n=t.byName("ladies toilet");if(!n)return{update(){},prompt:()=>""};const s=new cc("#fff4ea",6,4.5,1.6);s.position.set(n.x+1.2,2.7,n.z+.5),i.add(s);const r=document.createElement("style");r.textContent=jM,document.head.appendChild(r);const o=document.createElement("div");o.id="ladiesq",o.innerHTML='<div class="band"></div><div class="big"></div><div class="sub"></div>',document.body.appendChild(o);const a=o.querySelector(".big"),c=o.querySelector(".sub");let l=!1,u=!1,h=0,f=!1;n.locked=()=>!l,n.askToOpen=!0;const d=()=>Math.hypot(e.pos.x-n.x,e.pos.z-n.z)<1.8&&e.pos.x<n.x,g=(I,A,w,R)=>{a.textContent=I,a.classList.toggle("red",A),c.innerHTML=w,o.classList.remove("show"),o.offsetWidth,o.classList.add("show"),h=R?performance.now()+R:0},x=()=>{o.classList.remove("show"),u=!1,h=0},m=()=>{u=!0,g("Are u gay?",!1,'<button data-a="y"><kbd>Y</kbd> Yes</button><button data-a="n"><kbd>N</kbd> No</button>',0)},p=I=>{u&&(u=!1,I?(l=!0,n.target||t.toggle(n),g("Respect +",!1,"<span>Welcome in</span>",2200)):g("Access denied",!0,"<span>Ladies only</span>",2e3),KM(I))};c.addEventListener("click",I=>{const A=I.target.closest("button");A&&p(A.dataset.a==="y")});const v=I=>{var A;return/^(INPUT|TEXTAREA|SELECT)$/.test((A=I.target)==null?void 0:A.tagName)};addEventListener("keydown",I=>{if(!(I.repeat||e.state.paused||v(I))){if(u){I.code==="KeyY"?p(!0):(I.code==="KeyN"||I.code==="Escape")&&p(!1);return}I.code==="KeyF"&&!l&&d()&&m()}});function y(){u&&!d()&&x(),h&&performance.now()>h&&x(),n.t>0&&(f=!0),l&&f&&n.t===0&&!n.target&&(l=!1,f=!1)}function _(){return!l&&!u&&d()?"F open ladies toilet":""}return{update:y,prompt:_}}const JM=3.4,Qn=640,Yi=360,Un=20,ml=Qn/Un,gl=(Yi-40)/Un,bo=[{name:"Snake",ready:!0},{name:"Pong",ready:!1},{name:"Tetris",ready:!1},{name:"Car Race",ready:!1}];function QM({scene:i,player:e}){const t=document.createElement("canvas");t.width=Qn,t.height=Yi;const n=t.getContext("2d"),s=new Ln(t);s.colorSpace=Et;const r=new Se(new gt(ms.w,ms.h),new Fn({map:s,toneMapped:!1}));r.position.set(ms.x+.003,ms.y,ms.z),r.rotation.y=Math.PI/2,r.visible=!1,i.add(r);const o=document.createElement("div");Object.assign(o.style,{position:"fixed",inset:"0",background:"#000",display:"none",zIndex:"20",alignItems:"center",justifyContent:"center"}),document.body.appendChild(o);let a="off",c=0,l=!1,u,h,f,d,g,x=0,m,p=0,v=.11;const y=()=>Math.hypot(e.pos.x-ms.x,e.pos.z-ms.z)<JM&&e.pos.x>0&&e.pos.z>22.8;function _(B){l=B,B?(o.appendChild(t),Object.assign(t.style,{width:"min(100vw, 177.78vh)",height:"auto",imageRendering:"pixelated"}),o.style.display="flex"):(o.style.display="none",t.parentNode&&t.parentNode.removeChild(t))}function I(){a="menu",c=0,r.visible=!0,e.state.paused=!0,q()}function A(){a="off",r.visible=!1,e.state.paused=!1,_(!1)}function w(){u=[{x:8,y:8},{x:7,y:8},{x:6,y:8}],h={x:1,y:0},f=h,g=0,m=!1,p=0,v=.11,R(),a="snake"}function R(){do d={x:Math.floor(Math.random()*ml),y:Math.floor(Math.random()*gl)};while(u.some(B=>B.x===d.x&&B.y===d.y))}function M(){h=f;const B={x:u[0].x+h.x,y:u[0].y+h.y};if(B.x<0||B.y<0||B.x>=ml||B.y>=gl||u.some(de=>de.x===B.x&&de.y===B.y)){m=!0,x=Math.max(x,g);return}u.unshift(B),B.x===d.x&&B.y===d.y?(g++,v=Math.max(.06,v-.003),R()):u.pop()}const b=(B,de=600)=>`${de} ${B}px "Avenir Next", "Helvetica Neue", Arial, sans-serif`;function C(B){n.fillStyle="rgba(255,255,255,.55)",n.font=b(14,500),n.textAlign="center",n.fillText(B,Qn/2,Yi-14)}function z(){const B=n.createLinearGradient(0,0,Qn,Yi);B.addColorStop(0,"#1a1f3a"),B.addColorStop(1,"#3a1d4f"),n.fillStyle=B,n.fillRect(0,0,Qn,Yi),n.fillStyle="#fff",n.font=b(30,700),n.textAlign="left",n.fillText("Pixbit Arcade",40,56),n.fillStyle="#b46cff",n.fillRect(40,68,120,3),bo.forEach((de,fe)=>{const Te=104+fe*50,Ve=fe===c;n.fillStyle=Ve?"rgba(255,255,255,.14)":"rgba(255,255,255,.04)",n.fillRect(40,Te,Qn-80,40),Ve&&(n.fillStyle="#5fe3ff",n.fillRect(40,Te,5,40)),n.fillStyle=de.ready?"#fff":"rgba(255,255,255,.35)",n.font=b(20,Ve?700:500),n.textAlign="left",n.fillText(de.name,62,Te+27),n.font=b(14,500),n.textAlign="right",n.fillStyle=de.ready?"#7dff9a":"rgba(255,255,255,.35)",n.fillText(de.ready?"PLAY":"coming soon",Qn-58,Te+26)}),C("↑ ↓ choose · Enter play · F full screen · E turn TV off")}function H(){n.fillStyle="#0d1410",n.fillRect(0,0,Qn,Yi),n.fillStyle="#15241a",n.fillRect(0,0,Qn,40),n.fillStyle="#7dff9a",n.font=b(18,700),n.textAlign="left",n.fillText(`SNAKE   score ${g}`,16,27),n.textAlign="right",n.fillStyle="rgba(255,255,255,.5)",n.font=b(13,500),n.fillText(`best ${x} · arrows/WASD · F full screen · Backspace menu`,Qn-14,26);const B=40;n.fillStyle="rgba(255,255,255,.03)";for(let de=0;de<ml;de++)for(let fe=0;fe<gl;fe++)(de+fe)%2&&n.fillRect(de*Un,B+fe*Un,Un,Un);n.fillStyle="#ff4f6d",n.beginPath(),n.arc(d.x*Un+Un/2,B+d.y*Un+Un/2,Un/2-3,0,Math.PI*2),n.fill(),u.forEach((de,fe)=>{n.fillStyle=fe===0?"#c8ffd4":`hsl(${135-Math.min(fe,30)}, 80%, ${55-Math.min(fe,20)}%)`,n.fillRect(de.x*Un+1,B+de.y*Un+1,Un-2,Un-2)}),m&&(n.fillStyle="rgba(0,0,0,.6)",n.fillRect(0,0,Qn,Yi),n.fillStyle="#fff",n.textAlign="center",n.font=b(40,800),n.fillText("GAME OVER",Qn/2,Yi/2-14),n.font=b(18,500),n.fillText(`score ${g} · best ${x}`,Qn/2,Yi/2+20),C("Enter play again · Backspace menu"))}function q(){a==="menu"?z():a==="snake"&&H(),s.needsUpdate=!0}const Z={ArrowUp:[0,-1],KeyW:[0,-1],ArrowDown:[0,1],KeyS:[0,1],ArrowLeft:[-1,0],KeyA:[-1,0],ArrowRight:[1,0],KeyD:[1,0]};addEventListener("keydown",B=>{if(!/^(INPUT|TEXTAREA|SELECT)$/.test(B.target.tagName)){if(a==="off"){B.code==="KeyE"&&y()&&!e.state.paused&&(I(),B.stopImmediatePropagation());return}if(B.stopImmediatePropagation(),B.code!=="Escape"&&B.preventDefault(),B.code==="KeyF"){_(!l);return}if(a==="menu"){if((B.code==="ArrowUp"||B.code==="KeyW")&&(c=(c+bo.length-1)%bo.length),(B.code==="ArrowDown"||B.code==="KeyS")&&(c=(c+1)%bo.length),(B.code==="Enter"||B.code==="Space")&&bo[c].ready&&w(),B.code==="KeyE"||B.code==="Backspace"){A();return}}else if(a==="snake"){const de=Z[B.code];de&&!m&&!(de[0]===-h.x&&de[1]===-h.y)&&(f={x:de[0],y:de[1]}),m&&(B.code==="Enter"||B.code==="Space")&&w(),B.code==="Backspace"&&(a="menu")}q()}},!0);function $(B){a!=="snake"||m||(p+=Math.min(B,v),p>=v&&(p-=v,M(),q()))}function ce(){return a!=="off"?a==="menu"?"TV on":"playing snake":y()?"E play TV games":""}return{update:$,prompt:ce,isOn:()=>a!=="off"}}const eb=()=>matchMedia("(pointer: coarse)").matches||"ontouchstart"in window||navigator.maxTouchPoints>0,wo=i=>`<svg viewBox="0 0 24 24">${i}</svg>`,xl={jump:wo('<path d="M12 19V6"/><path d="M6 11l6-6 6 6"/><path d="M5 21h14"/>'),doorOpen:wo('<path d="M4 21h16"/><path d="M6 21V3h9v2"/><path d="M15 21V5l-5 1.5V21"/><path d="M11.8 13h.01"/><path d="M18 9l2 2-2 2"/>'),doorClose:wo('<path d="M4 21h16"/><path d="M6 21V3h12v18"/><path d="M15 12h.01"/>'),rotate:wo('<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),tv:wo('<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8"/><path d="M10 9l4 2-4 2z"/>')};async function tb(){var i,e,t,n;try{const s=document.documentElement;document.fullscreenElement||await(((i=s.requestFullscreen)==null?void 0:i.call(s,{navigationUI:"hide"}))??((e=s.webkitRequestFullscreen)==null?void 0:e.call(s)))}catch{}try{await((n=(t=screen.orientation)==null?void 0:t.lock)==null?void 0:n.call(t,"landscape"))}catch{}}function nb({player:i,camera:e}){const{touch:t}=i,n=document.createElement("div");n.id="touch",n.innerHTML=`
    <div class="tj-base"><div class="tj-knob"></div></div>
    <button class="tb tb-jump" type="button" aria-label="Jump">${xl.jump}</button>
    <button class="tb tb-act off" type="button" aria-label="Use"></button>
    <div class="t-rotate">${xl.rotate}<div>Rotate your phone to landscape</div></div>`;const s=document.createElement("style");s.textContent=`
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
  `,document.head.appendChild(s),document.body.appendChild(n);const r=n.querySelector(".tj-base"),o=n.querySelector(".tj-knob"),a=55;let c=null,l=0,u=0,h=null,f=0,d=0;const g=new Pn(0,0,0,"YXZ");r.style.display="none";const x=A=>!!(A.closest&&A.closest(".tb"));n.addEventListener("touchstart",A=>{for(const w of A.changedTouches)x(w.target)||(w.clientX<innerWidth/2&&c===null?(c=w.identifier,l=w.clientX,u=w.clientY,r.style.left=l+"px",r.style.top=u+"px",r.style.display="block",o.style.transform="translate(0,0)"):w.clientX>=innerWidth/2&&h===null&&(h=w.identifier,f=w.clientX,d=w.clientY));x(A.target)||A.preventDefault()},{passive:!1}),n.addEventListener("touchmove",A=>{for(const w of A.changedTouches)if(w.identifier===c){let R=w.clientX-l,M=w.clientY-u;const b=Math.hypot(R,M);b>a&&(R*=a/b,M*=a/b),o.style.transform=`translate(${R}px, ${M}px)`,t.x=R/a,t.y=-M/a,t.run=b>a*1.15}else w.identifier===h&&!i.state.paused&&(g.setFromQuaternion(e.quaternion),g.y-=(w.clientX-f)*.006,g.x=Math.max(-1.45,Math.min(1.45,g.x-(w.clientY-d)*.006)),e.quaternion.setFromEuler(g),f=w.clientX,d=w.clientY);A.preventDefault()},{passive:!1});const m=A=>{for(const w of A.changedTouches)w.identifier===c&&(c=null,t.x=t.y=0,t.run=!1,r.style.display="none"),w.identifier===h&&(h=null)};n.addEventListener("touchend",m),n.addEventListener("touchcancel",m);const p=(A,w)=>{const R=n.querySelector(A);R.addEventListener("touchstart",M=>{M.preventDefault(),M.stopPropagation(),w()},{passive:!1}),R.addEventListener("click",M=>M.preventDefault())};p(".tb-jump",()=>i.jump());const v=n.querySelector(".tb-act");let y=null,_="",I=null;p(".tb-act",()=>{y&&(I=y,dispatchEvent(new KeyboardEvent("keydown",{code:y,bubbles:!0})))});for(const A of["touchend","touchcancel"])v.addEventListener(A,()=>{I&&(dispatchEvent(new KeyboardEvent("keyup",{code:I,bubbles:!0})),I=null)});return{show(A){n.classList.toggle("off",!A),A&&tb()},setAction(A){let w="",R=null;/^F (open|close|collect|hold)/.test(A)?(R="KeyF",w=A.startsWith("F close")?"doorClose":"doorOpen"):A&&(R="KeyE",w="tv"),y=R,v.classList.toggle("off",!R),w!==_&&(v.innerHTML=w?xl[w]:"",v.setAttribute("aria-label",A),_=w)}}}const Md="pixbit-gamemode";function ib({defaultId:i="free"}={}){const e=[{id:"free",name:"Free Walk",desc:"Just explore the office",start(){},stop(){},update(){}}];let t=e[0],n=!1;function s(c){const l=e.find(u=>u.id===c)||e[0];n&&l!==t&&(t.stop(),n=!1),t=l;try{localStorage.setItem(Md,l.id)}catch{}}function r(){n||(n=!0,t.start())}function o(){n&&(t.stop(),n=!1)}function a(c){e.push(c);let l=null;try{l=localStorage.getItem(Md)}catch{}(l===c.id||c.id===i)&&(t=c)}return{register:a,choose:s,play:r,quit:o,update:(c,l)=>{n&&t.update(c,l)},get current(){return t},get running(){return n},get list(){return e.filter(c=>c.id!=="free")}}}function sb({root:i,active:e,foot:t=()=>""}){let n=[],s=0,r=0;const o=x=>typeof x=="function"?x():x,a=()=>n[n.length-1],c=x=>typeof x=="function"?x():x;function l(){var p;const x=a();if(i.innerHTML="",!x)return;const m=(v,y)=>{const _=document.createElement("div");return _.className=v,_.innerHTML=y,i.appendChild(_),_};m("mi-title",x.title||""),x.extra&&i.appendChild(x.extra),x.items.forEach((v,y)=>{const _=m("mi"+(y===s?" sel":""),c(v.label));_.addEventListener("mouseenter",()=>{s!==y&&(s=y,l())}),_.addEventListener("click",I=>{I.stopPropagation(),s=y,u()})}),m("mi-hint",((p=x.items[s])==null?void 0:p.hint)||""),m("mi-foot",t()||""),m("mi-keys","&uarr; &darr; select &nbsp;&middot;&nbsp; Enter confirm &nbsp;&middot;&nbsp; Esc back")}function u(){var m;const x=(m=a())==null?void 0:m.items[s];x&&x.action()}function h(x){n=[o(x)],s=0,r=performance.now(),l()}function f(x){n.push(o(x)),s=0,l()}function d(){const x=a();n.length>1?(n.pop(),s=0,l()):x&&x.back&&x.back()}const g=l;return addEventListener("keydown",x=>{if(!e()||!a()||/^(INPUT|TEXTAREA|SELECT)$/.test(x.target.tagName))return;const m=a().items.length;if(x.code==="ArrowDown"||x.code==="KeyS")s=(s+1)%m,l(),x.preventDefault();else if(x.code==="ArrowUp"||x.code==="KeyW")s=(s-1+m)%m,l(),x.preventDefault();else if(x.code==="Enter"||x.code==="NumpadEnter"||x.code==="Space")x.preventDefault(),u();else if(x.code==="Escape"){if(performance.now()-r<200)return;d()}}),{open:h,push:f,back:d,refresh:g,get depth(){return n.length}}}const bd="pixbit-hunt-best",rb=2.5,ob=[{name:"Keycard",kind:"card",locker:!0},{name:"Golden mug",kind:"mug",spots:[[-1.6,1.15,12.5],[-1.2,1.15,17]]},{name:"Stapler",kind:"stapler",spots:[[7.5,1.1,4.4],[8.3,1.1,3.6]]},{name:"Game controller",kind:"pad",spots:[[4.6,.9,24.3],[5.4,1.1,26.4]]},{name:"Sticky note",kind:"note",spots:[[4.5,1.25,12],[2.2,1.25,13.6]]},{name:"Trophy star",kind:"star",spots:[[9.85,1.5,6.1],[9.4,1.3,7.2]]},{name:"Marker pen",kind:"pen",spots:[[2,1.1,20.4],[1.4,1.1,21.6]]},{name:"Plant badge",kind:"badge",spots:[[1.2,1.2,7],[2.4,1.2,4.2]]}],ab=new zt({color:"#ffcf3a",emissive:"#c88a00",emissiveIntensity:.9,roughness:.35,metalness:.6}),wd=new Ts({map:null,color:"#ffe27a",transparent:!0,opacity:.55,depthWrite:!1,blending:El});function cb(){const i=document.createElement("canvas");i.width=i.height=64;const e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Ln(i)}function lb(i){const e=new rt,t=(n,s=0,r=0,o=0)=>{const a=new Se(n,ab);return a.position.set(s,r,o),e.add(a),a};switch(i){case"card":t(new hn(.085,.054,.004));break;case"mug":t(new ni(.04,.035,.09,16)),t(new Yr(.028,.008,8,14),.05,0,0);break;case"stapler":t(new hn(.15,.03,.04)),t(new hn(.12,.02,.035),-.01,.02,0);break;case"pad":t(new hn(.13,.035,.07)),t(new qt(.03,10,8),-.05,-.01,.04),t(new qt(.03,10,8),.05,-.01,.04);break;case"note":t(new hn(.1,.1,.004));break;case"star":{const n=new qo;for(let s=0;s<10;s++){const r=s%2?.025:.06,o=Math.PI/5*s+Math.PI/2;s?n.lineTo(Math.cos(o)*r,Math.sin(o)*r):n.moveTo(Math.cos(o)*r,Math.sin(o)*r)}n.closePath(),t(new sc(n,{depth:.015,bevelEnabled:!1}));break}case"pen":{const n=t(new ni(.01,.01,.14,10));n.rotation.z=Math.PI/2;break}default:t(new ni(.045,.045,.01,20)).rotation.x=Math.PI/2}return e}function ub({scene:i,camera:e,player:t}){const n=new rt;n.visible=!1,i.add(n),wd.map=cb();const s=Ja.find(M=>M.center.y>.9&&M.center.y<1.4)||Ja[0];let r=[],o=!1,a=0,c=0,l=!1,u=!1,h=null;try{h=parseFloat(localStorage.getItem(bd))||null}catch{}const f=document.createElement("div");Object.assign(f.style,{position:"fixed",top:"14px",right:"14px",zIndex:"5",color:"#fff",font:"600 14px system-ui, sans-serif",background:"rgba(0,0,0,.5)",borderLeft:"4px solid #ecc828",borderRadius:"6px",padding:"8px 12px",display:"none",pointerEvents:"none",minWidth:"170px"}),document.body.appendChild(f);const d=document.createElement("div");Object.assign(d.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)",zIndex:"8",color:"#fff",textAlign:"center",font:"600 15px system-ui, sans-serif",background:"rgba(20,20,20,.92)",border:"1px solid #ecc828",borderRadius:"14px",padding:"24px 32px",display:"none"}),document.body.appendChild(d);let g="",x=0;const m=M=>`${Math.floor(M/60)}:${String(Math.floor(M%60)).padStart(2,"0")}`;function p(){const M=r.filter(b=>!b.got);f.innerHTML=`<div style="color:#ecc828;letter-spacing:.5px">SCAVENGER HUNT</div>
      <div>Found ${a} / ${r.length} &nbsp;·&nbsp; ${m(c)}</div>
      ${h?`<div style="font-weight:400;color:#bbb">Best ${m(h)}</div>`:""}
      <div style="font-weight:400;color:#ddd;margin-top:4px">${g||(M.length?"H = hint":"")}</div>`}function v(M){if(M.locker){const C=s.closed;return new D(s.center.x-.12*Math.cos(C),s.center.y-.04,s.center.z+.12*Math.sin(C))}const b=M.spots[Math.floor(Math.random()*M.spots.length)];return new D(b[0],b[1],b[2])}function y(){n.clear(),r=ob.map(M=>{const b=lb(M.kind),C=v(M);if(b.position.copy(C),M.locker)b.scale.setScalar(.9);else{const z=new Ks(wd);z.scale.setScalar(.5),b.add(z)}return n.add(b),{...M,mesh:b,base:C,got:!1,zone:nh(C.x,C.z)}}),a=0,c=0,u=!1,l=!0,g="",d.style.display="none",p()}const _=new D,I=new D;function A(){e.getWorldDirection(I);let M=null,b=.93;for(const C of r){if(C.got||C.locker&&Math.abs(s.leaf.rotation.y-s.closed)<.5||(_.copy(C.mesh.position).sub(e.position),_.length()>rb))continue;const H=_.normalize().dot(I);H>b&&(b=H,M=C)}return M}function w(M){M.got=!0,a++,n.remove(M.mesh),g=`Got the ${M.name.toLowerCase()}!`,x=2.5,a===r.length?R():p()}function R(){l=!1,u=!0;const M=!h||c<h;if(M){h=c;try{localStorage.setItem(bd,String(c))}catch{}}p(),d.innerHTML=`<div style="font-size:24px;color:#ecc828;margin-bottom:6px">All 8 found!</div>
      <div>Time ${m(c)}${M?" &nbsp;🏆 new best":` &nbsp;·&nbsp; best ${m(h)}`}</div>
      <div style="font-weight:400;color:#bbb;margin-top:10px">Press Enter to play again, or Esc to change the game mode</div>`,d.style.display="block"}return addEventListener("keydown",M=>{if(!(!o||t.state.paused||/^(INPUT|TEXTAREA|SELECT)$/.test(M.target.tagName)))if(M.code==="KeyF"){const b=A();b&&w(b)}else if(M.code==="KeyH"&&l){const b=r.find(C=>!C.got);b&&(g=`Hint: ${b.name} – ${b.locker?"inside a locker in the ":"in the "}${b.zone}`,x=6,p())}else M.code==="Enter"&&u&&y()}),{id:"hunt",name:"Scavenger Hunt",desc:"Find 8 hidden gold items. F to collect, H for a hint. One is in a locker.",start(){o=!0,n.visible=!0,f.style.display="block",y()},stop(){o=!1,l=!1,n.visible=!1,f.style.display="none",d.style.display="none"},update(M,b){if(!o)return;const C=performance.now()/1e3;for(const z of r)z.got||z.locker||(z.mesh.rotation.y=C*1.6,z.mesh.position.y=z.base.y+Math.sin(C*2+z.base.x)*.03);l&&b&&(c+=M,x>0&&(x-=M)<=0&&(g=""),p())},prompt(){if(!o||!l)return"";const M=A();return M?`F collect ${M.name.toLowerCase()}`:""}}}const jp={apiKey:"AIzaSyD_KZcTz53Bfh12ZB7Gwed8f1WCKrsGIX4",authDomain:"office-world-60ed1.firebaseapp.com",databaseURL:"https://office-world-60ed1-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"office-world-60ed1",storageBucket:"office-world-60ed1.firebasestorage.app",messagingSenderId:"607388062460",appId:"1:607388062460:web:4b68c0880c4d8822607d79"},hb="office",fb=()=>!jp.apiKey.startsWith("PASTE"),_l="https://www.gstatic.com/firebasejs/11.0.2/",db=[{urls:["stun:stun.l.google.com:19302","stun:stun1.l.google.com:19302"]}],pb=15,vl=["#e8505b","#f9a73e","#ecc828","#4fbf6f","#2fa4d9","#7b68ee","#e26fc4","#3fc1b0"],Sd="pixbit-online-name",Ed="pixbit-online-color",Td="pixbit-online-mic",Ad=1.65,mb=`
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
`;function gb({scene:i,camera:e,player:t,panel:n,doors:s=null,touch:r=!1,start:o=()=>{}}){const a=document.createElement("style");a.textContent=mb,document.head.appendChild(a);let c="",l="";try{c=localStorage.getItem(Sd)||"",l=localStorage.getItem(Ed)||""}catch{}/^#[0-9a-f]{6}$/i.test(l)||(l=vl[Math.floor(Math.random()*vl.length)]);const u=document.createElement("div");u.className="ow",u.innerHTML=`
    <div class="ow-row"><label>Menu</label><button type="button" class="ow-edit"><span class="ow-dot"></span><span class="ow-who"></span><span class="go">Character</span></button>
      <button type="button" class="ow-edit ow-gear" style="flex:none"><span class="go">Settings</span></button></div>
    <div class="ow-set" style="display:none"><div class="ow-row"><label>Mic</label><div class="ow-seg"><button type="button" data-m="ptt">Push to talk</button><button type="button" data-m="open">Always on</button></div></div></div>
    <div class="ow-row"><label>Online</label><span class="ow-status"></span></div>`;const h=u.querySelector(".ow-status"),f=u.querySelector(".ow-edit"),d=u.querySelector(".ow-dot"),g=u.querySelector(".ow-who"),x=u.querySelector(".ow-set"),m=u.querySelector(".ow-gear");m.addEventListener("click",()=>{const F=x.style.display==="none";x.style.display=F?"block":"none",m.classList.toggle("on",F)}),u.addEventListener("click",F=>F.stopPropagation());const p=()=>n.closest("#overlay");function v(){d.style.background=l,g.textContent=c||"New"}v(),f.addEventListener("click",()=>Te());const y=document.createElement("div");y.id="ow-char",y.innerHTML=`
    <h3>Your character</h3><p>Pick a name and a dress colour</p>
    <label for="ow-name">Name</label><input type="text" id="ow-name" maxlength="18" autocomplete="off" spellcheck="false" placeholder="Type your name">
    <label>Dress colour</label><div class="sw"></div>
    <div class="acts"><button type="button" class="back">Back</button><button type="button" class="done">Done</button></div>`,document.body.appendChild(y);const _=y.querySelector("input[type=text]"),I=y.querySelector(".sw");let A=l;const w=vl.map(F=>{const se=document.createElement("button");return se.type="button",se.style.background=F,se.dataset.c=F,se.title=F,I.appendChild(se),se.addEventListener("click",()=>M(F)),se}),R=document.createElement("input");R.type="color",R.title="Custom colour",I.appendChild(R),R.addEventListener("input",()=>M(R.value));function M(F){A=F,R.value=F;for(const se of w)se.classList.toggle("on",se.dataset.c===F);C&&C.setLook(null,F)}y.addEventListener("click",F=>F.stopPropagation()),_.addEventListener("keydown",F=>{F.code!=="Escape"&&F.stopPropagation(),(F.code==="Enter"||F.code==="NumpadEnter")&&(F.preventDefault(),$e())}),_.addEventListener("keyup",F=>F.stopPropagation()),_.addEventListener("input",()=>{_.classList.remove("need"),C&&C.setLook(_.value.trim()||"Your name",null)}),y.querySelector(".done").addEventListener("click",$e),y.querySelector(".back").addEventListener("click",()=>Ve(!0)),addEventListener("keydown",F=>{F.code==="Escape"&&b&&(F.stopImmediatePropagation(),Ve(!0))});let b=!1,C=null,z=0,H=3.4,q=0;const Z=new D,$=new Xn;let ce=78,B=0;const de=40;let fe=!1;function Te(F=!1){if(b)return;b=!0,fe=F,e.getWorldDirection(ge),z=Math.atan2(-ge.x,-ge.z);let se=-1;for(let be=0;be<16;be++){const Ne=z+(be%2?-1:1)*Math.ceil(be/2)*(Math.PI/8),$t=-Math.sin(Ne),Mt=-Math.cos(Ne);let jt=0;for(;jt<3.4&&!z2(t.pos.x+$t*(jt+.2),t.pos.z+Mt*(jt+.2),.3);)jt+=.2;jt-be*.02>se&&(se=jt-be*.02,H=Math.max(1.6,jt),q=Math.atan2(-$t,-Mt),B=Ne)}Z.copy(e.position),$.copy(e.quaternion),ce=e.fov,e.fov=Math.min(70,Math.max(de,2*Math.atan(1.45/H)*180/Math.PI)),e.updateProjectionMatrix(),_.value=c,_.classList.remove("need"),C=yl(c||"Your name",l),i.add(C.group),Y.group.visible=!1,M(l);const Ee=p();Ee&&Ee.classList.add("hidden"),y.classList.add("show"),document.body.classList.add("char-open"),setTimeout(()=>_.focus(),0)}function Ve(F){if(!b)return;b=!1,y.classList.remove("show"),document.body.classList.remove("char-open"),_.blur(),i.remove(C.group),C.dispose(),C=null,e.position.copy(Z),e.quaternion.copy($),e.fov=ce,e.updateProjectionMatrix(),Y.group.visible=!0;const se=p();F&&se&&se.classList.remove("hidden")}function $e(){if(!_.value.trim()){oe();return}l=A;try{localStorage.setItem(Ed,l)}catch{}if(Y.setLook(null,l),ne(),v(),!fe){Ve(!0);return}Ve(!1),o()}function ne(){const F=_.value.trim().replace(/\s+/g," ").slice(0,18);if(_.value=F,!F)return!1;const se=!c||!K;c=F;try{localStorage.setItem(Sd,c)}catch{}return P&&se&&!K&&!he?Oe():ie(),!0}function oe(){if(!b){Te();return}_.classList.remove("need"),_.offsetWidth,_.classList.add("need"),setTimeout(()=>_.focus(),0)}function _e(F,se=!1){h.innerHTML=F,h.classList.toggle("err",se),ue=se,typeof mt=="function"&&typeof ke<"u"&&mt()}const xe='<svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',Ue=document.createElement("div");Ue.id="ow-online",Ue.className="chip",Ue.innerHTML='<span class="dot"></span><svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.6 2.7-6 6-6s6 2.4 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M17 14c2.6 0 4.4 1.8 4.4 4.4"/></svg><span class="txt"></span>';const Ge=Ue.querySelector(".txt");document.body.appendChild(Ue);const ke=document.createElement("div");ke.id="ow-hud",ke.innerHTML=`<div id="ow-mic" class="chip" role="button"><span class="ico">${xe}<i class="slash"></i></span><span class="lbl"></span><kbd>V</kbd></div><button type="button" class="ow-mode"></button>`;const Qe=ke.querySelector(".ow-mode"),ae=ke.querySelector("#ow-mic"),me=ae.querySelector(".lbl"),U=ae.querySelector("kbd");document.body.appendChild(ke);let ue=!1;const ee=F=>{ke.classList.toggle("show",F),Ue.classList.toggle("show",F)},O=document.createElement("button");O.id="ow-ptt",O.type="button",O.setAttribute("aria-label","Hold to talk"),O.innerHTML=xe,document.body.appendChild(O),O.addEventListener("pointerdown",F=>{F.preventDefault(),St==="ptt"?L(!0):W(!In)});for(const F of["pointerup","pointercancel","pointerleave"])O.addEventListener(F,()=>L(!1));ae.addEventListener("pointerdown",F=>{F.preventDefault(),F.stopPropagation(),St==="ptt"?L(!0):W(!In)});for(const F of["pointerup","pointercancel","pointerleave"])ae.addEventListener(F,()=>L(!1));const Y=yl("",l,{self:!0});i.add(Y.group);const ge=new D;function ye(F,se=null){if(b){const Ee=-Math.sin(B),be=-Math.cos(B);C.target(t.pos.x,0,t.pos.z,q,!1),C.update(F),e.position.set(t.pos.x+Ee*H,1.25,t.pos.z+be*H),e.lookAt(t.pos.x,1,t.pos.z);return}e.getWorldDirection(ge),Y.target(t.pos.x,Math.max(0,e.position.y-Ad),t.pos.z,Math.atan2(-ge.x,-ge.z),!1),Y.setReach(se==null?void 0:se.aim,(se==null?void 0:se.k)||0),Y.update(F)}let P=!1,E=null,G=null,K=null,pe=[],he=!1;const Ie=new Map;let Le=null,Ce=null,ct=!1,V=!1,Pe=!1;async function ze(){if(E)return E;if(window.__owFake)return E=window.__owFake;const[F,se,Ee]=await Promise.all([import(_l+"firebase-app.js"),import(_l+"firebase-auth.js"),import(_l+"firebase-database.js")]),be=F.initializeApp(jp,"pixbit-online");return E={auth:se.initializeAuth(be,{persistence:se.inMemoryPersistence}),signIn:se.signInAnonymously,...Ee},E}const We=F=>E.ref(G,`rooms/${hb}/${F}`);async function Oe(){if(c){he=!0;try{await N()}finally{he=!1}}}async function N(){if(!fb()&&!window.__owFake){_e("<b>Not set up yet</b> · add your Firebase config (see MULTIPLAYER.md)",!0);return}_e("Connecting…");try{await ze(),G=E.getDatabase(E.auth.app);const F=await E.signIn(E.auth);if(!P)return;K=F.user.uid,St==="open"&&$n().then(()=>ri()),await E.remove(We(`signal/${K}`)),E.onDisconnect(We(`players/${K}`)).remove(),E.onDisconnect(We(`signal/${K}`)).remove(),await ie();const se=We("players");pe.push(E.onChildAdded(se,Ee=>{Ee.key!==K&&ve(Ee.key,Ee.val()),Xe()})),pe.push(E.onChildChanged(se,Ee=>{const be=Ie.get(Ee.key);be&&(be.name=Ee.val().name,be.color=Ee.val().color,be.avatar.setLook(be.name,be.color))})),pe.push(E.onChildRemoved(se,Ee=>{Wt(Ee.key),Xe()})),pe.push(E.onChildAdded(We(`signal/${K}`),Ee=>{const be=Ee.val();E.remove(Ee.ref),Ae(be).catch(Ne=>console.warn("[online] signal",Ne))})),Xe()}catch(F){console.warn("[online]",F),_e(`<b>Couldn't connect</b> · ${String(F.code||F.message||F).replace(/</g,"&lt;")}`,!0)}}function ie(){return!P||!K?Promise.resolve():E.set(We(`players/${K}`),{name:c,color:l,t:E.serverTimestamp()})}function Re(F,se){K&&E.push(We(`signal/${F}`),{...se,from:K})}function k(){for(const F of pe)F();pe=[];for(const F of[...Ie.keys()])Wt(F);E&&K&&(E.remove(We(`players/${K}`)),E.remove(We(`signal/${K}`))),K=null}function ve(F,se){if(Ie.has(F))return Ie.get(F);const Ee=j(F,se||{});return Ee.initiator&&le(Ee),Ee}function j(F,se){const Ee=new RTCPeerConnection({iceServers:db}),be={id:F,pc:Ee,dc:null,name:se.name||"Guest",color:se.color||"#999",initiator:K<F,pendingIce:[],audioEl:null,last:null};return be.avatar=yl(be.name,be.color),be.avatar.group.visible=!1,i.add(be.avatar.group),Ie.set(F,be),Ee.onicecandidate=Ne=>{Ne.candidate&&Re(F,{type:"ice",c:JSON.stringify(Ne.candidate.toJSON())})},Ee.ontrack=Ne=>Yn(be,Ne.streams[0]||new MediaStream([Ne.track])),Ee.onconnectionstatechange=()=>{Xe(),Ee.connectionState==="failed"&&P&&Ie.get(F)===be&&(Wt(F),setTimeout(()=>{P&&K&&E.get(We(`players/${F}`)).then(Ne=>{Ne.exists()&&ve(F,Ne.val())})},3e3))},be.initiator?(Ee.addTransceiver("audio",{direction:"sendrecv"}),et(be,Ee.createDataChannel("pos",{ordered:!1,maxRetransmits:0})),Nt(be,Ee.createDataChannel("door"))):Ee.ondatachannel=Ne=>Ne.channel.label==="door"?Nt(be,Ne.channel):et(be,Ne.channel),be}async function le(F){const se=await F.pc.createOffer();await F.pc.setLocalDescription(se),Re(F.id,{type:"offer",sdp:se.sdp})}async function Ae(F){if(!F||!F.from)return;let se=Ie.get(F.from);if(F.type==="offer"){(!se||se.initiator)&&(se&&Wt(F.from),se=j(F.from,{}),se.initiator=!1);const Ee=await E.get(We(`players/${F.from}`));Ee.exists()&&(se.name=Ee.val().name,se.color=Ee.val().color,se.avatar.setLook(se.name,se.color)),await se.pc.setRemoteDescription({type:"offer",sdp:F.sdp});for(const Ne of se.pc.getTransceivers())Ne.receiver.track.kind==="audio"&&(Ne.direction="sendrecv",Ce&&Ne.sender.replaceTrack(Ce));await we(se);const be=await se.pc.createAnswer();await se.pc.setLocalDescription(be),Re(F.from,{type:"answer",sdp:be.sdp})}else if(F.type==="answer"&&se){if(await se.pc.setRemoteDescription({type:"answer",sdp:F.sdp}),Ce)for(const Ee of se.pc.getSenders())Ee.track||Ee.replaceTrack(Ce);await we(se)}else if(F.type==="ice"&&se){const Ee=JSON.parse(F.c);se.pc.remoteDescription?await se.pc.addIceCandidate(Ee).catch(()=>{}):se.pendingIce.push(Ee)}}async function we(F){for(const se of F.pendingIce.splice(0))await F.pc.addIceCandidate(se).catch(()=>{})}function et(F,se){F.dc=se,se.onopen=()=>{Xe(),lt(!0)},se.onclose=()=>Xe(),se.onmessage=Ee=>{try{const[be,Ne,$t,Mt,jt,ss]=JSON.parse(Ee.data);F.avatar.target(be,Ne,$t,Mt,!!jt,!!ss)}catch{}}}function Nt(F,se){F.dd=se,se.onopen=()=>{if(s)try{se.send(JSON.stringify({t:"all",s:s.snapshot()}))}catch{}},se.onmessage=Ee=>{if(s)try{const be=JSON.parse(Ee.data);be.t==="door"?s.setOpen(be.id,be.open):be.t==="all"&&Array.isArray(be.s)&&be.s.forEach((Ne,$t)=>{Ne&&s.setOpen($t,1)})}catch{}}}s==null||s.onChange((F,se)=>{const Ee=JSON.stringify({t:"door",id:F,open:se?1:0});for(const be of Ie.values())if(be.dd&&be.dd.readyState==="open")try{be.dd.send(Ee)}catch{}});function Wt(F){var Ee,be;const se=Ie.get(F);if(se){Ie.delete(F);try{(Ee=se.dd)==null||Ee.close()}catch{}try{(be=se.dc)==null||be.close()}catch{}try{se.pc.close()}catch{}se.audioEl&&(se.audioEl.srcObject=null,se.audioEl.remove()),se.avatar.dispose()}}function vt(){return Le||(Le=new Sy,e.add(Le)),Le.context.state==="suspended"&&Le.context.resume(),Le}function Yn(F,se){F.audioEl||(F.audioEl=document.createElement("audio"),F.audioEl.muted=!0,F.audioEl.autoplay=!0,document.body.appendChild(F.audioEl)),F.audioEl.srcObject=se;const Ee=new Ay(vt());Ee.setMediaStreamSource(se),Ee.setRefDistance(2.5),Ee.setRolloffFactor(1.4),Ee.setDistanceModel("inverse"),Ee.setMaxDistance(40),F.avatar.setVoice(Ee)}async function $n(){if(Ce||ct)return Ce;ct=!0;try{Ce=(await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}})).getAudioTracks()[0],Ce.enabled=!1;for(const Ee of Ie.values())for(const be of Ee.pc.getTransceivers())be.receiver.track.kind==="audio"&&be.currentDirection!=="stopped"&&be.sender.replaceTrack(Ce);const se=vt().context;Jr=se.createMediaStreamSource(new MediaStream([Ce])),Ti=se.createAnalyser(),Ti.fftSize=512,Jr.connect(Ti)}catch(F){console.warn("[online] mic",F),er="Microphone blocked: allow it in the browser to talk"}return Ce}let er="",St="open",fn=!1,In=!1,Rs=!1,ns=!1,is=0,Jr=null,Ti=null;try{localStorage.getItem(Td)==="ptt"&&(St="ptt")}catch{}const Qr=u.querySelectorAll(".ow-seg button");function eo(){for(const F of Qr)F.classList.toggle("on",F.dataset.m===St)}function tr(F){if(F!==St){St=F,In=!1,fn=!1;try{localStorage.setItem(Td,St)}catch{}St==="open"&&P&&$n().then(ri),eo(),ri(),Xe()}}for(const F of Qr)F.addEventListener("click",()=>tr(F.dataset.m));eo(),Qe.addEventListener("pointerdown",F=>{F.preventDefault(),F.stopPropagation(),tr(St==="ptt"?"open":"ptt")}),addEventListener("keydown",F=>{F.code==="KeyT"&&!F.repeat&&P&&!te(F)&&tr(St==="ptt"?"open":"ptt")});const to=()=>P&&(St==="ptt"?fn:Rs&&!In);function ri(){const F=to();vt(),F&&!Ce&&$n().then(()=>{Ce&&ri()}),Ce&&(Ce.enabled=F);const se=St==="ptt"?F:F&&ns;O.classList.toggle("on",St==="ptt"?fn:F),O.classList.toggle("muted",St==="open"&&In),O.setAttribute("aria-label",St==="ptt"?"Hold to talk":In?"Unmute":"Mute");const Ee=St==="open"&&In;(se!==V||Ee!==Pe)&&(V=se,Pe=Ee,lt(!0)),mt()}function L(F){St==="ptt"&&F!==fn&&(fn=F,ri())}function W(F){St==="open"&&F!==In&&(In=F,ri())}const te=F=>/^(INPUT|TEXTAREA|SELECT)$/.test(F.target.tagName)||t.state.paused;addEventListener("keydown",F=>{F.code!=="KeyV"||F.repeat||te(F)||!P||(St==="ptt"?L(!0):W(!In))}),addEventListener("keyup",F=>{F.code==="KeyV"&&L(!1)}),addEventListener("blur",()=>L(!1));const J=new Float32Array(512);function X(F){if(St!=="open"||!Ti||!to()){ae.style.setProperty("--lvl","0"),ns&&(ns=!1,ri());return}Ti.getFloatTimeDomainData(J);let se=0;for(let $t=0;$t<J.length;$t++)se+=J[$t]*J[$t];const Ee=Math.sqrt(se/J.length),be=Ee>.02;ae.style.setProperty("--lvl",Math.min(1,Ee*10).toFixed(2)),be?is=0:is+=F;const Ne=be||is<.4;Ne!==ns&&(ns=Ne,ri())}addEventListener("pointerdown",()=>{P&&Le&&vt()});const De=new D;let Be=0,Ze="",je=0;function lt(F=!1){if(b)return;e.getWorldDirection(De);const se=Math.atan2(-De.x,-De.z),Ee=JSON.stringify([+t.pos.x.toFixed(2),+Math.max(0,e.position.y-Ad).toFixed(2),+t.pos.z.toFixed(2),+se.toFixed(2),V?1:0,Pe?1:0]);if(!(!F&&Ee===Ze&&je<1)){Ze=Ee,je=0;for(const be of Ie.values())if(be.dc&&be.dc.readyState==="open")try{be.dc.send(Ee)}catch{}}}function ft(){let F=0;for(const se of Ie.values())se.dc&&se.dc.readyState==="open"&&F++;return F}function Xe(){if(!P||!K)return;const F=ft(),Ee=Ie.size-F;_e(`<b>Connected</b> · ${F+1} in the world${Ee?` · ${Ee} joining…`:""} · ${St==="ptt"?"hold <b>V</b> to talk":"mic on in game, <b>V</b> mutes"}`),mt()}function mt(){const F=ft()+1,se=Ie.size-(F-1);Ue.classList.toggle("warn",!!K&&se>0),Ue.classList.toggle("bad",ue),Ge.textContent=K?`${F} online${se>0?` · ${se} joining…`:""}`:ue?"Not connected":"Connecting…",Qe.innerHTML=`${St==="ptt"?"Push to talk":"Always on"}${r?"":" <kbd>T</kbd>"}`,Qe.title="Switch between push to talk and always-on mic";const Ee=ct&&!Ce,be=St==="open"&&In;ae.classList.toggle("bad",Ee),ae.classList.toggle("muted",!Ee&&be),ae.classList.toggle("talk",!Ee&&V),ae.classList.toggle("live",!Ee&&!V&&!be&&St==="open"&&to()&&!!Ce),ae.classList.toggle("ptt-on",!Ee&&St==="ptt"&&fn),me.textContent=Ee?"MIC BLOCKED":St==="ptt"?fn?"TALKING":"PUSH TO TALK":be?"MUTED":V?"TALKING":"MIC ON",U.style.display=r?"none":"",ae.title=Ee?"Allow the microphone in your browser to talk":St==="ptt"?"Hold V to talk":be?"Click or press V to unmute":"Click or press V to mute"}return{id:"online",name:"Open World",desc:"Explore with other people online and talk: push to talk or always-on mic.",start(){P=!0,u.classList.add("show"),ee(!0),r&&O.classList.add("show"),mt(),c?Oe():_e("Click <b>Play</b> to create your character and join")},intro(){return c?!1:(Te(!0),!0)},stop(){P=!1,fn=!1,ri(),u.classList.remove("show"),ee(!1),O.classList.remove("show"),Ve(!1),k()},update(F,se){if(!P)return;const Ee=!!se&&!b;Ee!==Rs&&(Rs=Ee,Rs||(fn=!1),ri()),X(F);for(const be of Ie.values())be.avatar.update(F);Be+=F,je+=F,Be>=1/pb&&(Be=0,lt()),er&&(Rd+=F)>5&&(er="",Rd=0,mt())},prompt(){return""},updateSelf:ye,edit:()=>Te(!1),get micMode(){return St},setMicMode:F=>tr(F),statusHtml:()=>P&&h.innerHTML||"",get hasName(){return!!c}}}let Rd=0;const xb="#f1d3b8",_b="#2b3550",vb="#1c1c20";function yl(i,e,{self:t=!1}={}){const n=new rt,s=(O,Y=.65,ge=0)=>new zt({color:O,roughness:Y,metalness:ge}),r=s(e,.6),o=s(xb,.7),a=s(_b,.8),c=s(vb,.5),l=(O,Y,ge,ye,P,E)=>{const G=new Se(Y,ge);return G.position.set(ye,P,E),G.castShadow=!0,O.add(G),G},u=(O,Y)=>new Xu(O,Y,6,14),h=(O,Y)=>{const ge=new rt;return ge.position.set(O,Y,0),n.add(ge),ge},f=.8,d=1.47,g=h(-.1,f),x=h(.1,f);for(const O of[g,x])l(O,u(.085,.6),a,0,-.385,0),l(O,new qt(.1,16,10),c,0,-.77,-.04).scale.set(1,.55,1.45);const m=l(n,u(.22,.4),r,0,1.17,0),p=h(-.29,d),v=h(.29,d);for(const O of[p,v])l(O,u(.065,.48),r,0,-.27,0),l(O,new qt(.07,16,12),o,0,-.6,0);const y=new rt;if(y.position.y=1.62,n.add(y),l(y,new qt(.17,24,16),o,0,.13,0),l(y,new hn(.22,.07,.08),s("#15171c",.2,.4),0,.16,-.14),t){y.visible=!1,m.visible=!1,l(n,new qt(.2,18,12),a,0,f+.02,0).scale.set(1.05,.55,.75);for(const O of n.children)O.position.z-=.08,O.position.y-=.08}const _=.6,I=document.createElement("canvas");I.width=512,I.height=128;const A=new Ln(I);A.colorSpace=Et;const w=new Ks(new Ts({map:A,depthTest:!1,transparent:!0}));w.scale.set(1.1,.275,1),w.position.y=2.2,w.renderOrder=10,w.visible=!t,n.add(w);let R=i,M=e,b=!1,C=!1;const z=document.createElement("canvas");z.width=128,z.height=128;const H=new Ln(z);H.colorSpace=Et;const q=new Ks(new Ts({map:H,depthTest:!1,transparent:!0}));q.scale.set(.34,.34,1),q.position.y=2.55,q.renderOrder=11,q.visible=!1,n.add(q);let Z=0,$=0;function ce(){const O=z.getContext("2d");if(O.clearRect(0,0,128,128),q.visible=!t&&(b||C),!!q.visible){if(O.lineCap="round",O.lineJoin="round",b){O.fillStyle="rgba(0,0,0,.6)",O.beginPath(),O.arc(64,64,58,0,Math.PI*2),O.fill(),O.fillStyle="#fff",O.beginPath(),O.moveTo(26,52),O.lineTo(42,52),O.lineTo(62,36),O.lineTo(62,92),O.lineTo(42,76),O.lineTo(26,76),O.closePath(),O.fill();const Y=Z*3.2%4;O.lineWidth=7;for(let ge=0;ge<3;ge++){const ye=ge<Y?1:.18,P=16+ge*13;O.strokeStyle=`rgba(126,224,143,${ye})`,O.beginPath(),O.arc(62,64,P,-.75,.75),O.stroke()}}else O.fillStyle="rgba(0,0,0,.6)",O.beginPath(),O.arc(64,64,34,0,Math.PI*2),O.fill(),O.strokeStyle="#ff5c5c",O.lineWidth=6,O.beginPath(),O.roundRect(55,40,18,30,9),O.stroke(),O.beginPath(),O.moveTo(46,62),O.arc(64,62,18,Math.PI,0,!0),O.moveTo(64,82),O.lineTo(64,90),O.stroke(),O.lineWidth=7,O.beginPath(),O.moveTo(44,90),O.lineTo(84,38),O.stroke();H.needsUpdate=!0}}function B(){const O=I.getContext("2d");O.clearRect(0,0,512,128),O.font="700 54px system-ui, sans-serif";const Y=Math.min(500,O.measureText(R).width+60),ge=(512-Y)/2;O.fillStyle="rgba(0,0,0,.55)",O.beginPath(),O.roundRect(ge,20,Y,88,44),O.fill(),O.fillStyle=M,O.beginPath(),O.arc(ge+36,64,12,0,Math.PI*2),O.fill(),O.fillStyle="#fff",O.textBaseline="middle",O.textAlign="left",O.fillText(R,ge+58,66,Y-70),A.needsUpdate=!0}B();const de=new D,fe=new D,Te=new D;let Ve=0,$e=0,ne=!1,oe=null,_e=0,xe=0,Ue=0,Ge=0,ke=0;const Qe=new D,ae=new D,me=new D,U=new D(0,-1,0),ue=new Xn,ee=new Xn;return{group:n,setLook(O,Y){R=O||R,M=Y||M,r.color.set(M),B()},setReach(O,Y){ke=Y,O&&Qe.copy(O)},setVoice(O){var Y;oe&&((Y=oe.disconnect)==null||Y.call(oe),y.remove(oe)),oe=O,y.add(O)},target(O,Y,ge,ye,P,E=!1){de.set(O,Y,ge),Ve=ye,ne||(fe.copy(de),Te.copy(de),$e=ye,ne=!0,n.visible=!0),(P!==b||E!==C)&&(b=P,C=E,ce())},update(O){if(!ne||O<=0)return;const Y=t?1:1-Math.exp(-12*O);Te.copy(fe),fe.lerp(de,Y);let ge=Ve-$e;ge=Math.atan2(Math.sin(ge),Math.cos(ge)),$e+=ge*Y;const ye=Math.hypot(fe.x-Te.x,fe.z-Te.z)/O;xe+=(ye-xe)*(1-Math.exp(-8*O));const P=fe.y>.05;_e+=O*(3+xe*2.2);const E=P?0:Math.min(1,xe/3)*.75;Ue+=(Math.sin(_e)*E-Ue)*(1-Math.exp(-14*O)),g.rotation.x=Ue,x.rotation.x=-Ue,p.rotation.x=-Ue*.9,v.rotation.x=Ue*.9;const G=P?-.5:0;if(p.rotation.z=P?-.35:0,v.rotation.z=P?.35:0,p.rotation.x+=G,v.rotation.x+=G,Ge+=O,b&&!t&&(Z+=O,($+=O)>.08&&($=0,ce())),y.rotation.z=b?Math.sin(Ge*7)*.03:0,v.scale.y=1,ke>0){n.position.set(fe.x,fe.y,fe.z),n.rotation.y=$e,n.updateMatrixWorld(!0),v.getWorldPosition(ae),me.subVectors(Qe,ae);const pe=me.length();me.applyQuaternion(ee.copy(n.quaternion).invert()).normalize(),ue.setFromUnitVectors(U,me),v.quaternion.slerp(ue,ke),v.scale.y=1+(Math.min(1.9,Math.max(1,pe/_))-1)*ke}const K=P?0:Math.abs(Math.sin(_e))*Math.min(1,xe/3)*.05;n.position.set(fe.x,fe.y+K,fe.z),n.rotation.y=$e},dispose(){if(oe)try{oe.disconnect()}catch{}n.removeFromParent(),n.traverse(O=>{var Y,ge;(Y=O.geometry)==null||Y.dispose(),O.material&&((ge=O.material.map)==null||ge.dispose(),O.material.dispose())})}}}const yb="media/balcony.mp4",ka={x1:-3.2,x2:-2.2,z1:.3,z2:24.9},Mb=-.95,bb=-.06,wb=.1,Sb=1.2,Eb=.9,Tb=2,Ab=`
#jumpPrompt { position: fixed; left: 50%; top: 58%; transform: translate(-50%, 8px); z-index: 6; pointer-events: none; text-align: center;
  color: #fff; font: 800 clamp(28px, 5vw, 64px)/1.1 system-ui, -apple-system, sans-serif; letter-spacing: 2px; text-transform: uppercase;
  text-shadow: 0 2px 14px rgba(0,0,0,.85), 0 0 2px #000; opacity: 0; transition: opacity .35s, transform .35s; }
#jumpPrompt.show { opacity: 1; transform: translate(-50%, 0); }
#jumpPrompt kbd { display: inline-block; padding: 0 .35em; margin: 0 .1em; border-radius: .2em; border: 3px solid #ecc828; color: #ecc828; background: rgba(14,14,18,.55); }
#jumpPrompt small { display: block; margin-top: .5em; font-size: .3em; font-weight: 600; letter-spacing: 3px; color: rgba(255,255,255,.8); }
#jumpVideoWrap { position: fixed; inset: 0; z-index: 30; background: #000; opacity: 0; pointer-events: none; transition: opacity .8s; display: none; }
#jumpVideoWrap.show { opacity: 1; }
#jumpVideoWrap video { width: 100%; height: 100%; object-fit: cover; display: block; }
#jumpVideoWrap .skip { display: none; position: absolute; right: 16px; top: 14px; z-index: 2; padding: 5px 12px; border-radius: 10px; background: rgba(14,14,18,.6); color: #ecc828; font: 600 13px system-ui, sans-serif; }
body.dev #jumpVideoWrap .skip { display: block; }
#jumpVideoWrap::after { content: ''; position: absolute; inset: 0; pointer-events: none; box-shadow: inset 0 0 160px 40px rgba(0,0,0,.65); }
body.cutscene #prompt, body.cutscene #hud, body.cutscene #crosshair, body.cutscene #zone, body.cutscene #byline { display: none !important; }
`;function Rb({camera:i,player:e,touch:t=!1}){const n=document.createElement("style");n.textContent=Ab,document.head.appendChild(n);const s=document.createElement("div");s.id="jumpPrompt",s.innerHTML=t?"Tap <kbd>JUMP</kbd> to jump<small>walk away to stay</small>":"Press <kbd>Space</kbd> to jump<small>or quit the job &middot; walk away to stay</small>",document.body.appendChild(s);const r=document.createElement("div");r.id="jumpVideoWrap";const o=document.createElement("video");o.src=yb,o.preload="auto",o.playsInline=!0,r.appendChild(o);const a=document.createElement("div");a.className="skip",a.textContent="DEV · Esc to exit video",r.appendChild(a),document.body.appendChild(r);let c=!1,l=0,u=0,h=!1,f=!1,d=0,g=0,x=0;const m={x:0,z:0};function p(){const w=e.pos;if(w.x<ka.x1||w.x>ka.x2||w.z<ka.z1||w.z>ka.z2)return!1;m.x=-Math.sin(i.rotation.y)*Math.cos(i.rotation.x),m.z=-Math.cos(i.rotation.y)*Math.cos(i.rotation.x);const R=Math.hypot(m.x,m.z)||1;return m.x/R<-.25}const v=()=>!c&&u<=0&&!e.state.paused&&(e.controls.isLocked||e.state.dragMode);function y(){c=!0,l=0,h=!1,d=i.rotation.x,g=i.rotation.y,x=i.rotation.z,e.state.paused=!0,document.body.classList.add("cutscene"),s.classList.remove("show"),f=!1,r.style.display="block",o.currentTime=0,o.muted=!1;const w=o.play();w&&w.catch&&w.catch(()=>{o.muted=!0,o.play().catch(_)})}function _(){c&&(r.classList.remove("show"),o.pause(),setTimeout(()=>{r.style.display="none"},800),i.rotation.set(d,g,x,"YXZ"),e.state.paused=!1,document.body.classList.remove("cutscene"),c=!1,u=Tb)}o.addEventListener("ended",_),o.addEventListener("error",_),addEventListener("keydown",w=>{if(c){w.code==="Escape"&&document.body.classList.contains("dev")&&_(),w.stopImmediatePropagation(),w.preventDefault();return}w.code==="Space"&&v()&&p()&&(w.stopImmediatePropagation(),w.preventDefault(),y())},!0);const I=w=>w*w*(3-2*w);function A(w){if(w=Math.min(w,.05),u>0&&(u-=w),c){l+=w;const M=I(Math.min(1,l/Sb));i.rotation.set(d+(bb-d)*M,g+Mb*M,x+(wb-x)*M,"YXZ"),!h&&l>=Eb&&(h=!0,r.classList.add("show"));return}const R=v()&&p();R!==f&&(f=R,s.classList.toggle("show",R))}return{update:A,prompt:()=>"",get active(){return c}}}const vn=new _1({antialias:!0,powerPreference:"high-performance"});vn.setPixelRatio(Math.min(devicePixelRatio,2));vn.setSize(innerWidth,innerHeight);vn.outputColorSpace=Et;vn.toneMapping=Fd;vn.toneMappingExposure=.9;vn.shadowMap.enabled=!0;vn.shadowMap.type=kd;document.body.appendChild(vn.domElement);const yn=new pp,Kp=new ut("#a8aaa4");yn.background=Kp;yn.fog=new Fu(Kp,40,1100);const Cb=new hu(vn);yn.environment=Cb.fromScene(new By,.04).texture;yn.environmentIntensity=.45;const qn=new kn(78,innerWidth/innerHeight,.05,1500);yn.add(new gy("#f6f7ff","#7a7066",.8));const Ii=new Ip("#fff3e2",1.5);Ii.position.set(-22,20,4);Ii.target.position.set(5,0,10);Ii.castShadow=!0;Ii.shadow.mapSize.set(2048,2048);Object.assign(Ii.shadow.camera,{left:-18,right:18,top:18,bottom:-18,near:1,far:80});Ii.shadow.bias=-4e-4;Ii.shadow.normalBias=.03;yn.add(Ii,Ii.target);const Zp=new cc("#ffe8c8",6,12,1.5);Zp.position.set(8.7,2.6,7.8);yn.add(Zp);const fc=new rt;EM(fc);FM(fc);yn.add(fc);const en=OM(qn,vn.domElement,{spawn:Xs,yaw:Xs.yaw}),Zr=document.getElementById("overlay"),wi=eb()?nb({player:en,camera:qn}):null;wi&&wi.show(!1);let ih=!1;function Jp(){if(wi){Xa(),wi.show(!0);return}try{const i=en.controls.domElement.requestPointerLock();i&&i.catch&&i.catch(()=>Xa())}catch{Xa()}}function Xa(){en.state.dragMode=!0,Zr.classList.add("hidden"),Su.dataset.mode="drag"}document.addEventListener("pointerlockerror",Xa);addEventListener("keydown",i=>{i.code==="Escape"&&en.state.dragMode&&!$o.isOpen()&&(en.state.dragMode=!1,jo())});en.controls.addEventListener("lock",()=>Zr.classList.add("hidden"));en.controls.addEventListener("unlock",()=>{$o.isOpen()||jo()});const Wr=XM({scene:yn,player:en,camera:qn}),Ml=$M({scene:yn,player:en,camera:qn,doors:Wr}),Cd=ZM({scene:yn,player:en,doors:Wr}),Pd=QM({scene:yn,player:en}),Pb=Rb({camera:qn,player:en,touch:!!wi}),$o=GM({scene:yn,camera:qn,player:en,world:fc,zoneAt:nh,renderer:vn});$o.onResumeFailed(()=>jo());const ii=ib({defaultId:"online"}),Ld=ub({scene:yn,camera:qn,player:en}),As=gb({scene:yn,camera:qn,player:en,panel:Zr,doors:Wr,touch:!!wi,start:()=>e0()});ii.register(As);const Lb=document.querySelector(".m-controls"),Li=sb({root:document.getElementById("menu"),active:()=>!Zr.classList.contains("hidden"),foot:()=>ii.running&&ii.current.id==="online"?As.statusHtml():""});function Qp(i){i&&ii.choose(i),ii.current.intro&&ii.current.intro()||e0()}function e0(){ih=!0,ii.play(),Jp()}function Id(){Jp()}function Ib(){ii.quit(),ih=!1,en.pos.set(Xs.x,0,Xs.z),qn.position.set(Xs.x,1.65,Xs.z),qn.rotation.set(0,Xs.yaw,0,"YXZ"),wi==null||wi.show(!1),jo()}const Db=()=>"Mic: "+(As.micMode==="ptt"?"Push to talk":"Always on"),t0=()=>({title:"Settings",items:[{label:Db,hint:"Push to talk (hold V) or always-on mic. Press T in game to switch.",action(){As.setMicMode(As.micMode==="ptt"?"open":"ptt"),Li.refresh()}},{label:()=>"Dev mode: "+(Js?"On":"Off"),hint:"Suggestions tools (C / X / L). Press P in game to switch.",action(){sh(!Js),Li.refresh()}},{label:"Controls",hint:"Keys and mouse",action:()=>Li.push({title:"Controls",extra:Lb,items:[{label:"Back",action:()=>Li.back()}]})},{label:"Back",action:()=>Li.back()}]}),Nb=()=>({title:"Play",items:[...ii.list.map(i=>({label:i.name,hint:i.desc,action:()=>Qp(i.id)})),{label:"Back",action:()=>Li.back()}]}),Ub=()=>({title:"Pixbit Office",items:[{label:"Play",hint:"Pick your character, then walk the office with other people",action:()=>ii.list.length===1?Qp(ii.list[0].id):Li.push(Nb)},{label:"Character",hint:"Your name and dress colour",action:()=>As.edit()},{label:"Settings",hint:"Mic, dev mode and controls",action:()=>Li.push(t0)}]}),kb=()=>({title:"Paused",back:Id,items:[{label:"Resume",action:Id},{label:"Character",hint:"Your name and dress colour",action:()=>As.edit()},{label:"Settings",hint:"Mic, dev mode and controls",action:()=>Li.push(t0)},{label:"Quit",hint:"Back to the start screen",action:Ib}]});function jo(){Zr.classList.remove("hidden"),Li.open(ih?kb:Ub)}jo();let Js=!1;try{Js=localStorage.getItem("pixbit-devmode")==="1"}catch{}function sh(i){Js=i,document.body.classList.toggle("dev",i),$o.setEnabled(i),Yp(i);try{localStorage.setItem("pixbit-devmode",i?"1":"0")}catch{}}addEventListener("keydown",i=>{i.code==="KeyP"&&!/^(INPUT|TEXTAREA|SELECT)$/.test(i.target.tagName)&&!$o.isOpen()&&sh(!Js)});sh(Js);let Ro=!0;addEventListener("keydown",i=>{i.code==="KeyQ"&&(Ro=!Ro,Ii.castShadow=Ro,vn.setPixelRatio(Ro?Math.min(devicePixelRatio,2):1),vn.setSize(innerWidth,innerHeight))});const bl=document.getElementById("zone"),Su=document.getElementById("hud"),Dd=document.getElementById("prompt");let Nd="",wl=0,Oa=0,Sl=0;function Ob(i){const e=nh(en.pos.x,en.pos.z);e!==Nd&&(Nd=e,bl.textContent=e,bl.classList.add("show"),wl=2.2),wl>0&&(wl-=i)<=0&&bl.classList.remove("show")}addEventListener("resize",()=>{qn.aspect=innerWidth/innerHeight,qn.updateProjectionMatrix(),vn.setSize(innerWidth,innerHeight)});const Fb=new Dp;vn.setAnimationLoop(()=>{const i=Fb.getDelta();if(en.update(i),Pb.update(i),Wr.update(i),Ml.update(i),Cd.update(i),Pd.update(i),ii.update(i,Zr.classList.contains("hidden")),As.updateSelf(i,Ml.reach()),Ob(i),Sl++,Oa+=i,Oa>.5){const e=Pd.prompt()||ii.current===Ld&&Ld.prompt()||Wr.prompt()||Ml.prompt()||Cd.prompt();wi?(wi.setAction(e),Su.textContent="",Dd.textContent=""):(Dd.textContent=e||"",Su.textContent=`${Math.round(Sl/Oa)} fps · ${Ro?"high":"low"} (Q)${Js?" · DEV · C suggest · X area · L list":""}${en.state.dragMode?" · drag to look":""}`),Sl=0,Oa=0}vn.render(yn,qn)});Object.assign(window,{__office:{scene:yn,camera:qn,player:en,renderer:vn,doors:Wr}});
