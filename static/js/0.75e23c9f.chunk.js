(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{99:function(e,t,n){"use strict";n.r(t),n.d(t,"createSwipeBackGesture",(function(){return i}));var r=n(4),a=n(27),i=(n(21),function(e,t,n,i,u){var c=e.ownerDocument.defaultView;return Object(a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return e.startX<=50&&t()},onStart:n,onMove:function(e){var t=e.deltaX/c.innerWidth;i(t)},onEnd:function(e){var t=e.deltaX,n=c.innerWidth,a=t/n,i=e.velocityX,o=n/2,s=i>=0&&(i>.2||e.deltaX>o),d=(s?1-a:a)*n,f=0;if(d>5){var h=d/Math.abs(i);f=Math.min(h,540)}u(s,a<=0?.01:Object(r.j)(0,a,.9999),f)}})})}}]);
//# sourceMappingURL=0.75e23c9f.chunk.js.map