(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{16:function(n,t,r){"use strict";n.exports=function(n,t){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||t?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},17:function(n,t,r){"use strict";(function(n){
/*!
* image3D - 🍊 使用webGL绘制三维图片。Drawing three-dimensional images using webGL.
* git+https://github.com/hai2007/image3D.git
*
* author 你好2007
*
* version 2.1.0
*
* build Thu Apr 11 2019
*
* Copyright hai2007 < https://hai2007.gitee.io/sweethome/ >
* Released under the MIT license
*
* Date:Sun Jan 10 2021 11:45:45 GMT+0800 (GMT+08:00)
*/
var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(){var r=function(n,t,r){var e=n.createShader(t);if(null==e)throw new Error("Unable to create shader!");if(n.shaderSource(e,r),n.compileShader(e),!n.getShaderParameter(e,n.COMPILE_STATUS))throw new Error("Failed to compile shader:"+n.getShaderInfoLog(e));return e};function e(n,t){var e=function(n,t){var r=["webgl","experimental-webgl","webkit-3d","moz-webgl"],e=null,i=void 0;for(i=0;i<r.length;i++){try{e=n.getContext(r[i],t)}catch(n){}if(e)break}return e}(n,t),i={painter:function(){return function(n){var t={byte:n.UNSIGNED_BYTE,short:n.UNSIGNED_SHORT};return{openDeep:function(){return n.enable(n.DEPTH_TEST),this},points:function(r,e,i){return i?n.drawElements(n.POINTS,e,t[i],r):n.drawArrays(n.POINTS,r,e),this},lines:function(r,e,i){return i?n.drawElements(n.LINES,e,t[i],r):n.drawArrays(n.LINES,r,e),this},stripLines:function(r,e,i){return i?n.drawElements(n.LINE_STRIP,e,t[i],r):n.drawArrays(n.LINE_STRIP,r,e),this},loopLines:function(r,e,i){return i?n.drawElements(n.LINE_LOOP,e,t[i],r):n.drawArrays(n.LINE_LOOP,r,e),this},triangles:function(r,e,i){return i?n.drawElements(n.TRIANGLES,e,t[i],r):n.drawArrays(n.TRIANGLES,r,e),this},stripTriangles:function(r,e,i){return i?n.drawElements(n.TRIANGLE_STRIP,e,t[i],r):n.drawArrays(n.TRIANGLE_STRIP,r,e),this},fanTriangles:function(r,e,i){return i?n.drawElements(n.TRIANGLE_FAN,e,t[i],r):n.drawArrays(n.TRIANGLE_FAN,r,e),this}}}(e)},shader:function(n,t){return e.program=function(n,t,e){var i=r(n,n.VERTEX_SHADER,t),a=r(n,n.FRAGMENT_SHADER,e),o=n.createProgram();if(n.attachShader(o,i),n.attachShader(o,a),n.linkProgram(o),!n.getProgramParameter(o,n.LINK_STATUS))throw new Error("Failed to link program: "+n.getProgramInfoLog(o));return n.useProgram(o),o}(e,n,t),i},buffer:function(n){!function(n,t){var r=n.createBuffer(),e=t?n.ELEMENT_ARRAY_BUFFER:n.ARRAY_BUFFER;n.bindBuffer(e,r)}(e,n);var t=void 0,r={write:function(i,a){return a=a||e.STATIC_DRAW,function(n,t,r,e){var i=e?n.ELEMENT_ARRAY_BUFFER:n.ARRAY_BUFFER;n.bufferData(i,t,r)}(e,i,a,n),t=i,r},use:function(n,i,a,o,c,u){var p=t.BYTES_PER_ELEMENT;return"string"==typeof n&&(n=e.getAttribLocation(e.program,n)),a=a||0,o=o||0,c=c||e.FLOAT,function(n,t,r,e,i,a,o){n.vertexAttribPointer(t,r,e,o||!1,i||0,a||0),n.enableVertexAttribArray(t)}(e,n,i,c,a*p,o*p,u),r}};return r},texture:function(n,t){var r={"2d":e.TEXTURE_2D,cube:e.TEXTURE_CUBE_MAP}[n],i=function(n,t,r,e){var i=n.createTexture();return"2d"==e&&(r=r||0,n.activeTexture(n["TEXTURE"+r])),n.bindTexture(t,i),i}(e,r,t,n);e.texParameteri(r,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(r,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(r,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);var a={useImage:function(n,t,i,o){return function(n,t,r,e,i,a){e={rgb:n.RGB,rgba:n.RGBA,alpha:n.ALPHA}[e]||n.RGBA,n.texImage2D(t,r||0,e,e,{}[i]||n.UNSIGNED_BYTE,a)}(e,r,t,i,o,n),a},useCube:function(n,t,a,o,c,u){!function(n,t,r,e,i,a,o,c,u){e={rgb:n.RGB,rgba:n.RGBA,alpha:n.ALPHA}[e]||n.RGBA,r=r||0,i={}[i]||n.UNSIGNED_BYTE;var p=[n.TEXTURE_CUBE_MAP_POSITIVE_X,n.TEXTURE_CUBE_MAP_NEGATIVE_X,n.TEXTURE_CUBE_MAP_POSITIVE_Y,n.TEXTURE_CUBE_MAP_NEGATIVE_Y,n.TEXTURE_CUBE_MAP_POSITIVE_Z,n.TEXTURE_CUBE_MAP_NEGATIVE_Z],f=void 0,s=void 0;for(f=0;f<p.length;f++)s=p[f],n.texImage2D(s,r,e,o,c,0,e,i,null),n.bindTexture(t,u),n.texImage2D(s,r,e,e,i,a[f]);n.generateMipmap(t)}(e,r,o,c,u,n,t,a,i)}};return a}},a=function(n){return{setAttribute1f:function(t,r){var e=n.getAttribLocation(n.program,t);n.vertexAttrib1f(e,r)},setAttribute2f:function(t,r,e){var i=n.getAttribLocation(n.program,t);n.vertexAttrib2f(i,r,e)},setAttribute3f:function(t,r,e,i){var a=n.getAttribLocation(n.program,t);n.vertexAttrib3f(a,r,e,i)},setAttribute4f:function(t,r,e,i,a){var o=n.getAttribLocation(n.program,t);n.vertexAttrib4f(o,r,e,i,a)},setAttribute1i:function(t,r){var e=n.getAttribLocation(n.program,t);n.vertexAttrib1i(e,r)},setAttribute2i:function(t,r,e){var i=n.getAttribLocation(n.program,t);n.vertexAttrib2i(i,r,e)},setAttribute3i:function(t,r,e,i){var a=n.getAttribLocation(n.program,t);n.vertexAttrib3i(a,r,e,i)},setAttribute4i:function(t,r,e,i,a){var o=n.getAttribLocation(n.program,t);n.vertexAttrib4i(o,r,e,i,a)},setUniform1f:function(t,r){var e=n.getUniformLocation(n.program,t);n.uniform1f(e,r)},setUniform2f:function(t,r,e){var i=n.getUniformLocation(n.program,t);n.uniform2f(i,r,e)},setUniform3f:function(t,r,e,i){var a=n.getUniformLocation(n.program,t);n.uniform3f(a,r,e,i)},setUniform4f:function(t,r,e,i,a){var o=n.getUniformLocation(n.program,t);n.uniform4f(o,r,e,i,a)},setUniform1i:function(t,r){var e=n.getUniformLocation(n.program,t);n.uniform1i(e,r)},setUniform2i:function(t,r,e){var i=n.getUniformLocation(n.program,t);n.uniform2i(i,r,e)},setUniform3i:function(t,r,e,i){var a=n.getUniformLocation(n.program,t);n.uniform3i(a,r,e,i)},setUniform4i:function(t,r,e,i,a){var o=n.getUniformLocation(n.program,t);n.uniform4i(o,r,e,i,a)},setUniformMatrix2fv:function(t,r){var e=n.getUniformLocation(n.program,t);n.uniformMatrix2fv(e,!1,r)},setUniformMatrix3fv:function(t,r){var e=n.getUniformLocation(n.program,t);n.uniformMatrix3fv(e,!1,r)},setUniformMatrix4fv:function(t,r){var e=n.getUniformLocation(n.program,t);n.uniformMatrix4fv(e,!1,r)}}}(e);for(var o in a)i[o]=a[o];return i}var i=function(n,t){for(var r=[],e=0;e<4;e++)for(var i=0;i<t.length/4;i++)r[4*i+e]=n[e]*t[4*i]+n[e+4]*t[4*i+1]+n[e+8]*t[4*i+2]+n[e+12]*t[4*i+3];return r};function a(n){var t=n||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r={move:function(n,e,a,o){return t=i(function(n,t,r,e){e=e||0;var i=Math.sqrt(t*t+r*r+e*e);return[1,0,0,0,0,1,0,0,0,0,1,0,t*n/i,r*n/i,e*n/i,1]}(n,e,a,o),t),r},rotate:function(n,e,a,o,c,u,p){var f=function(n,t,r,e,i,a){if("number"==typeof n&&"number"==typeof t){if("number"!=typeof r?(r=0,e=n,i=t,a=1):"number"==typeof e&&"number"==typeof i&&"number"==typeof a||(e=n,i=t,a=r,n=0,t=0,r=0),n==e&&t==i&&r==a)throw new Error("It's not a legitimate ray!");var o=Math.sqrt((e-n)*(e-n)+(i-t)*(i-t)),c=0!=o?(i-t)/o:1,u=0!=o?(e-n)/o:0,p=(e-n)*u+(i-t)*c,f=a-r,s=Math.sqrt(p*p+f*f),d=0!=s?f/s:1,l=0!=s?p/s:0;return[[c,d*u,u*l,0,-u,c*d,c*l,0,0,-l,d,0,t*u-n*c,r*l-n*u*d-t*c*d,-n*u*l-t*c*l-r*d,1],[c,-u,0,0,d*u,d*c,-l,0,u*l,c*l,d,0,n,t,r,1]]}throw new Error("a1 and b1 is required!")}(e,a,o,c,u,p);return t=i(i(i(f[1],function(n){var t=Math.sin(n),r=Math.cos(n);return[r,t,0,0,-t,r,0,0,0,0,1,0,0,0,0,1]}(n)),f[0]),t),r},scale:function(n,e,a,o,c,u){return t=i(function(n,t,r,e,i,a){return[n,0,0,0,0,t,0,0,0,0,r,0,(e=e||0)-e*n,(i=i||0)-i*t,(a=a||0)-a*r,1]}(n,e,a,o,c,u),t),r},multiply:function(n,e){return t=e?i(t,n):i(n,t),r},use:function(n,r,e,a){var o=i(t,[n,r,e=e||0,a=a||1]);return o[0]=+o[0].toFixed(7),o[1]=+o[1].toFixed(7),o[2]=+o[2].toFixed(7),o[3]=+o[3].toFixed(7),o},value:function(){return t}};return r}function o(n,t){return function(){return new function(){var n=this,t=a();this.rotateEye=function(r,e,i,a,o,c,u){return t.rotate(-r,e,i,a,o,c,u),n},this.moveEye=function(r,e,i,a){return t.move(-r,e,i,a),n},this.rotateBody=function(r,e,i,a,o,c,u){return t.rotate(r,e,i,a,o,c,u),n},this.moveBody=function(r,e,i,a){return t.move(r,e,i,a),n},this.scaleBody=function(r,e,i,a,o,c){return t.scale(r,e,i,a,o,c),n},this.value=function(){return t.value()}}}}function c(n,t){var r=n.painter();return t.depth&&r.openDeep(),function(){return new function(){!function(n,t){t.drawPoint=function(r,e){return n.points(r,e),t},t.drawLine=function(r,e){return n.lines(r,e),t},t.drawStripLine=function(r,e){return n.stripLines(r,e),t},t.drawLoopLine=function(r,e){return n.loopLines(r,e),t},t.drawTriangle=function(r,e){return n.triangles(r,e),t},t.drawStripTriangle=function(r,e){return n.stripTriangles(r,e),t},t.drawFanTriangle=function(r,e){return n.fanTriangles(r,e),t}}(r,this),function(n,t){t.elemPoint=function(r,e,i){return i=i||"byte",n.points(r,e,i),t},t.elemLine=function(r,e,i){return i=i||"byte",n.lines(r,e,i),t},t.elemStripLine=function(r,e,i){return i=i||"byte",n.stripLines(r,e,i),t},t.elemLoopLine=function(r,e,i){return i=i||"byte",n.loopLines(r,e,i),t},t.elemTriangle=function(r,e,i){return i=i||"byte",n.triangles(r,e,i),t},t.elemStripTriangle=function(r,e,i){return i=i||"byte",n.stripTriangles(r,e,i),t},t.elemFanTriangle=function(r,e,i){return i=i||"byte",n.fanTriangles(r,e,i),t}}(r,this)}}}var u={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    void main(){\n        gl_Position=a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "},p={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    uniform mat4 u_matrix;\n    void main(){\n        gl_Position=u_matrix * a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "};function f(n){return{type_default:u,type_camera:p}["type_"+n]}var s=function n(t,r){var i=function(n,t){for(var r in t)try{n[r]=t[r]}catch(n){throw new Error("Illegal property key : "+r)}return n}({depth:!1},r||{}),a=e(t),u=i["vertex-shader"],p=i["fragment-shader"];if(!u||!p){var s=f(i.shader||"default");u=s.vs,p=s.fs}a.shader(u,p),(n.fn=n.prototype).Buffer=function(n,t){return function(t){return new function(){var r=this,e=n.buffer(t);this.write=function(n){return e.write(n),r},t||(this.use=function(n,t,i,a){return e.use(n,t,i,a),r})}}}(a),n.fn.Camera=o(),n.fn.Painter=c(a,i),n.fn.Texture2D=function(n,t){return function(t){return new function(){var r=this,e=n.texture("2d",t);this.write=function(n){return e.useImage(n),r}}}}(a),n.fn.TextureCube=function(n,t){return function(t,r){return new function(){var e=this,i=n.texture("cube");this.write=function(n,a,o,c,u,p){return i.useCube([n,a,o,c,u,p],t,r),e}}}}(a),n.fn.setAttributeFloat=function(n,t,r,e,i){return a["setAttribute"+(arguments.length-1)+"f"](n,t,r,e,i),this},n.fn.setAttributeInt=function(n,t,r,e,i){return a["setAttribute"+(arguments.length-1)+"i"](n,t,r,e,i),this},n.fn.setUniformFloat=function(n,t,r,e,i){return a["setUniform"+(arguments.length-1)+"f"](n,t,r,e,i),this},n.fn.setUniformInt=function(n,t,r,e,i){return a["setUniform"+(arguments.length-1)+"i"](n,t,r,e,i),this},n.fn.setUniformMatrix=function(n,t){var r={4:2,9:3,16:4}[t.length];return a["setUniformMatrix"+r+"fv"](n,t),this}};if(s.core=e,"object"===t(n)&&"object"===t(n.exports))n.exports=s;else{var d=window.image3D;s.noConflict=function(){return window.image3D===s&&(window.image3D=d),s},window.image3D=s}}()}).call(this,r(3)(n))},18:function(n,t,r){var e=r(19);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,r(1).default)("data-quickpaper-c2c9482e",e,!0)},19:function(n,t,r){(n.exports=r(0)(!1)).push([n.i,"",""])},20:function(n,t,r){var e=r(21);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);(0,r(1).default)("data-quickpaper-4633c27a",e,!0)},21:function(n,t,r){t=n.exports=r(0)(!1);var e=r(16),i=e(r(22)),a=e(r(23)),o=e(r(24)),c=e(r(25));t.push([n.i,"\n    /* 主体划分 */\n    div.page>div {\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    div.page>div.left {\n        text-align: center;\n        width: 300px;\n    }\n\n    div.page>div.right {\n        width: 700px;\n    }\n\n    /* 左边样式 */\n    div.page>div.left>.title {\n        padding-top: 200px;\n        background-image: url("+i+");\n        background-repeat: no-repeat;\n        background-position: center 30px;\n        font-size: 20px;\n        font-weight: 800;\n    }\n\n    div.page>div.left>.title>span {\n        display: block;\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 2em;\n    }\n\n    div.page>div.left>.belief {\n        line-height: 2em;\n        color: gray;\n    }\n\n    div.page>div.left>.fork {\n        color: rgb(90, 86, 86);\n        border: 1px solid rgb(202, 199, 199);\n        padding: 5px 10px;\n        display: inline-block;\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        margin-top: 10px;\n    }\n\n    div.page>div.left>.fork:hover {\n        text-decoration: underline;\n        color: rgb(245, 12, 12);\n        border-color: rgb(236, 49, 49);\n    }\n\n    div.page>div.left>.link {\n        padding-top: 20px;\n    }\n\n    div.page>div.left>.link>a {\n        background-image: url("+a+");\n        padding-top: inherit;\n        background-repeat: no-repeat;\n        background-position-y: -9px;\n        width: 50px;\n        font-size: 12px;\n        display: inline-block;\n        color: rgb(0, 0, 0);\n        font-weight: 800;\n    }\n\n    div.page>div.left>.link>a.github {\n        background-position-x: 6px;\n    }\n\n    div.page>div.left>.link>a.npm {\n        background-position-x: -124px;\n    }\n\n    div.page>div.left>.link>a.oschina {\n        background-position-x: -242px;\n    }\n\n    div.page>div.left>.link>a.sf {\n        background-position-x: -390px;\n    }\n\n    div.page>div.left>.cat {\n        background-image: url("+o+");\n        background-repeat: no-repeat;\n        background-position: center center;\n        height: 260px;\n        background-size: 100% auto;\n        font-size: 0;\n    }\n\n    /* 右边顶部说明 */\n\n    div.page>div.right>.stepbystep>h2 {\n        line-height: 3em;\n        background-image: url("+c+");\n        background-position: 350px center;\n        background-size: auto 80%;\n        background-repeat: no-repeat;\n        color: red;\n    }\n\n    div.page>div.right>.stepbystep>p {\n        text-indent: 2em;\n        padding: 5px;\n        line-height: 1.4em;\n    }\n\n    div.page>div.right>.stepbystep>p.right {\n        text-align: right;\n        font-size: 14px;\n        font-weight: 800;\n    }\n\n    /* 右边底部链接 */\n    div.page>div.right>.footer-link {\n        border-top: 1px solid rgb(187, 183, 183);\n        margin-top: 10px;\n        font-family: monospace;\n        text-align: center;\n    }\n\n    div.page>div.right>.footer-link>li {\n        display: inline-block;\n        vertical-align: top;\n        width: 233px;\n        padding: 10px;\n        text-align: left;\n    }\n\n    div.page>div.right>.footer-link>li>h2 {\n        font-size: 16px;\n        padding: 20px 0;\n    }\n\n    div.page>div.right>.footer-link>li>a {\n        display: block;\n        color: rgb(70, 73, 73);\n        font-weight: 200;\n        margin-bottom: 20px;\n\n    }\n\n    div.page>div.right>.footer-link>li>a:hover {\n        text-decoration: underline;\n    }\n\n    /* 其它 */\n    div.page>div.right>h2 {\n        margin-top: 30px;\n    }\n\n    /* 猫 */\n    .cat-page {\n        background: #d0c1c1;\n        margin: 30px 50px 50px 50px;\n        padding: 30px;\n    }\n\n    .cat-page>h4 {\n        font-weight: 800;\n        padding-bottom: 10px;\n    }\n\n    .cat-page>p {\n        text-indent: 2em;\n        line-height: 1.6em;\n        font-size: 14px;\n        color: rgb(16, 15, 15);\n    }\n\n    .cat-page>p.mark {\n        text-indent: 0;\n        margin: 20px 0;\n    }\n\n    .cat-page>p.mark>div {\n        text-align: right;\n    }\n",""])},22:function(n,t,r){n.exports=r.p+"dist/girl-hai2007.png"},23:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAAgCAMAAACSJAeKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFXmFlO7ZYIqZ0+fz7QLZY7e7uK6p7RkpP6Onodnl8VLqVQ7SKw8TFAJJVNq1VPbZYxgAAAppiPrNWAJZc2UlJ09TViYuOyAAA2N/cKS4zJisxpMG00dLT/vz8ycrLNpVZPbKGAJlgwtDKEaBqWFtfsd/OfYGDhrOc2dvbMqZSOqpU2vDoLDE2TJ1rXZ57KZJN0djVm9fBg4aJAJRY3mJiNa6AvL2/YKN8PKxWgYSHqt3KS05SbnF16/byDp9p8PDwirSf2klJf8yvODxBzhERSbaNJCkuzxUV9vb38vj27/j17PfzJSovMa1/gq+aUpdyKJdLxsjIPrhZ32RkPLJWPq5XPq5YO6xVLzQ5lruqKphMLZJPda2PaaiFPK1VIygu/////v7+AJphywMDywAAAZphygAA/Pz8/f39ywIC2kpKAJxiAJZb2ktL/v//AZpiAJhe+/v7OapU9fX2+fn5+/DwP7VX/PHx+Pj48Pj1AJlf/PX1O6tVPEBF/f79QblaQ7hZAZheSbpe8/Pz/fz8en2A9fX1QLlZAZlfrd7L219ffK+VAJRXMppVyuneBJhfUbSJteLRvuXW8fLyxM/KApphWqR3AJddAI9RywEBVJpz4Gxs+fr62kxMF6BrAIZC//7/ccam1tfYptrH656eOrJYL6RRP7BY/P38ydTQy8zNAJNXuszE1e7l3+Xi2O/mOrRYitC3PrFW2d3cRLVakbelMpdVrcW60B0dOZRbt8rCv8DBKJVLBZxjBZtk1dbW9fj2qdvIob6yrt7NAJpgBZxkCZ1mAZpgAptiLppQBJtjGKFtQURJYqGAAplgptvIKZVNPbBVFJ1m4eLi/v7/5ebmAJVZOalUT1NXJiov+/39EqBrLo5UFKFtRLpb8/T0grGYYL6bV6N0XqF78vn2OKhTywQEkdK6k9O8ltW9R55noqSmpaeppqipP69YQ7laZ2tt3N/eNZFaTbeP3FhY6+zskpWXAJhf9fr4AZhf4uPkuuPTwgAAUVZZVFhc////mywbMAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAP2SURBVHjaYvg/CoYSYBgNgtH4GgWj8TUKRuNrNL5GwWh8jYLR+BqNr1EwEPEV2GrtfObD68sD45iUtJRkOABy6Gfziv//N28/tKt5kMSKabZgahIQKCblFzSeyzbFEV8eRjo+bm5uPpK13yoGJL5S0sThIC2FjvH1XylWfk/UBd3IwRFf2Yrg6AJGWI7d3aOK2VjjK72YQQoYXT4gLMlQnDEA8SXunisikpWV5SgikusuTsf48tsTVHZxk1A73yyOwRBfJ5KSQBGmqJiz0Dah78RU7PnLUlLlzd8IdnadG28ZJI0GwJmZArkJeXkJQAAkcwUy6WRt+n8HzYY4rXfLi2q2MPoPhvhKPZKadOJEfqowU13CJKeOVKzxJScpyZnY/Kui5OrkRDVJnVX0d2ayuEhiRkZiIjDCMhJFxJPpZa+B/r3rcSx8fGUWT5s2OAyC+EpSzK+6Ziyc2qOQWLmXNykJa3xx+vioFUKYhZY+NzkHIH9B4qt6dteSRGB80St//Y9hDA0P2amuLs/CwnfybPrAx5diUs4xBVem1H6uRC82u+/Y44vdTXLRf6hjNXR82Acif2UlJMomlM788yUhwZFu+Stdt76GRX5zRobBnVfqBoOhPMzPYVsLLGScTBMSmRM28p7CGl86Ps5tcC+w++gMUHxlJJS7CwQn0jG+7OXL3m2ISTwwJ3Fd2+BoH6bmHEzonGDINc8q4cdL12uCWONL0i3iK9wLzm6SAxdfLgLBCfSNrzDG2MQVdYnp/wdJfAmrJpy/NCNntW9CZYFxkiKO8tDN7D+4Aiv5b+bjxj5i4us/qDzcNiUxUenTtMiPgyG+BK9xeyVcOci0mjvhye2fijjaG1IRtfshTFF2KZ+Bam+0JJa6CJjQtb3RvfRduFD048fRLEGavXolg6C9kc/L9Nw74fdq7jxP5YIO7PEV6CZm48Mg9/+/jE2Em5SU3AC15xHxRbf8JaH/vqhGiJ9fqEarifHBYGjPT2e7Pf8hs7eiwi0v5QIc7fn/aj4yYgwawMahm5uOlOXA9ZerweVhFh37y1uXNcQVWVgUWQyS/vLxfu0nhusTDvO6Jiy43ZiKvb+cXviPfTcoVzU7u0kxeAxA3QsdjxJ5Jr5jbhZ9x6MC2oWAoF1Tj3VQjEd1fJ5oq/3i9Gpf1cV2BUknsOev/yWtPvHAJiKrj6TlgI73poFo+o73rjGPjorSfyQ9ONqH2YrXck4IGhckVU2frngCx3gvuA4TK/7/v1iMZ2CcCZ1PyUxJm0nn+RQgWCktrTRImvP/TbP3nahSPJGqmJSamiqIcz5lFAx6MBpfo/E1CkbjaxSMxtdofI2C0fgaBcgAIMAArnWESZSxWY4AAAAASUVORK5CYII="},24:function(n,t,r){n.exports=r.p+"dist/cat.jpeg"},25:function(n,t,r){n.exports=r.p+"dist/dream.png"},71:function(n,t,r){"use strict";r.r(t);var e=r(17),i=r.n(e),a=!0,o={methods:{openlink:function(){window.location.href="https://hai2007.gitee.io/image3d/"},doRestart:function(){a=!0},doStop:function(){a=!1}},mounted:function(){var n=new i.a(document.getElementById("skybox"),{"vertex-shader":"attribute vec4 a_position;\n            varying vec3 v_normal;\n            uniform mat4 u_matrix;\n            void main(){\n                gl_Position=u_matrix * a_position;\n                // 因为位置是以几何中心为原点的,可以用顶点坐标作为法向量\n                v_normal=normalize(a_position.xyz);\n            }","fragment-shader":"precision mediump float;\n            varying vec3 v_normal;\n            uniform samplerCube u_texture;\n            void main(){\n                gl_FragColor=textureCube(u_texture,normalize(v_normal));\n            }",depth:!0}),t=new Float32Array([.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,0,0,.8,0,0,-.8,.8,0,0,-.8,0,0,0,.8,0,0,-.8,0]),r=new Uint8Array([0,1,8,1,2,8,2,3,8,0,3,8,4,5,9,5,6,9,6,7,9,4,7,9,0,1,10,1,5,10,4,5,10,0,4,10,2,6,11,6,7,11,3,7,11,2,3,11,0,3,12,3,7,12,4,7,12,4,0,12,1,2,13,1,5,13,5,6,13,2,6,13]);n.Buffer().write(t).use("a_position",3,3,0),n.Buffer(!0).write(r);var e=n.TextureCube(500,500),o=new Image;o.onload=function(){var t=new Image;t.onload=function(){var r=new Image;r.onload=function(){var i=new Image;i.onload=function(){var c=new Image;c.onload=function(){var u=new Image;u.onload=function(){e.write(o,t,r,i,c,u),n.setUniformInt("u_texture",e);var p,f,s,d=n.Camera(),l=n.Painter(),g=0;setInterval((function(){var t;t=0==a?50:15,0==g?(p=100*Math.random(),f=30*Math.random(),s=10*Math.random(),g=5):g-=1,d.rotateBody(Math.PI/t,p,-1*f,s,-1*p,f,-1*s),n.setUniformMatrix("u_matrix",d.value()),l.elemTriangle(0,72)}),50)},u.src="src/assets/skybox/front.jpg"},c.src="src/assets/skybox/back.jpg"},i.src="src/assets/skybox/bottom.jpg"},r.src="src/assets/skybox/top.jpg"},t.src="src/assets/skybox/left.jpg"},o.src="src/assets/skybox/right.jpg"}};r(18);o.render=function(n){return n("div",{quickpaper:"","data-quickpaper-c2c9482e":""},[n("canvas",{id:"skybox",width:"300px",height:"300px",title:"点击我查看image3D文档","@click":"openlink()","@mouseover":"doStop()","@mouseout":"doRestart()","data-quickpaper-c2c9482e":""},[])])};var c={data:function(){return{counterUrl:window.hai2007_sweethome_counterUrl}},mounted:function(){this.changeActive("menu-1","home")},component:{uiSkybox:o}};r(20);c.render=function(n){return n("div",{quickpaper:"","data-quickpaper-4633c27a":""},[n("div",{class:"page","data-quickpaper-4633c27a":""},[n("div",{class:"left","data-quickpaper-4633c27a":""},[n("div",{class:"title","data-quickpaper-4633c27a":""},["你好2007",n("span",{"data-quickpaper-4633c27a":""},["@hai2007"])]),n("div",{class:"belief","data-quickpaper-4633c27a":""},["走一步，再走一步。"]),n("a",{class:"fork",href:"https://github.com/hai2007/SweetHome",target:"_blank","data-quickpaper-4633c27a":""},["Fork me on Github"]),n("div",{class:"link","data-quickpaper-4633c27a":""},[n("a",{href:"https://github.com/hai2007",class:"github",target:"_blank","data-quickpaper-4633c27a":""},["Github"]),n("a",{href:"https://www.npmjs.com/~hai2007",class:"npm",target:"_blank","data-quickpaper-4633c27a":""},["NPM"]),n("a",{href:"https://my.oschina.net/u/4252568",class:"oschina",target:"_blank","data-quickpaper-4633c27a":""},["OSCHINA"]),n("a",{href:"https://segmentfault.com/u/nihao2007/articles",class:"sf",target:"_blank","data-quickpaper-4633c27a":""},["思否"])]),n("div",{class:"cat","data-quickpaper-4633c27a":""},["一只陪伴了我十六年的猫"]),n("ui-skybox",{"data-quickpaper-4633c27a":""},[]),n("a",{href:"https://info.flagcounter.com/bdd0",target:"_blank","data-quickpaper-4633c27a":""},[n("img",{":src":"counterUrl","data-quickpaper-4633c27a":""},[])])]),n("div",{class:"right","data-quickpaper-4633c27a":""},[n("div",{class:"stepbystep","data-quickpaper-4633c27a":""},[n("h2",{"data-quickpaper-4633c27a":""},["What I Believe"]),n("p",{"data-quickpaper-4633c27a":""},["我还惊讶地意识到，在我生命中有很多时刻，每当我遇到一个遥不可及、令人害怕的情境，↵                    并感到惊慌失措时，我都能够应付——因为我回想起了很久以前自己上过的那一课。"]),n("p",{"data-quickpaper-4633c27a":""},["我提醒自己不要看下面遥远的岩石，而是注意相对轻松、容易的第一小步，迈出一小步、再↵                    一小步，就这样体会每一步带来的成就感，直到完成了自己想要完成的，达到了自己的目标，然↵                    后再回头看时，不禁对自己走过的这段漫漫长路感到惊讶和自豪。"]),n("p",{class:"right","data-quickpaper-4633c27a":""},["———— 摘自 莫顿·亨特《走一步，再走一步》"])]),n("div",{class:"cat-page","data-quickpaper-4633c27a":""},[n("h4",{"data-quickpaper-4633c27a":""},["由老猫的离世而引发的追忆"]),n("p",{"data-quickpaper-4633c27a":""},["去年冬天的一个周末，大学室友小孩出生，从南京出发刚到达合肥南，打算从这转车去淮南。由于离下一班车开还有一会，就打个电话回去，问问家里近来情况。"]),n("p",{"data-quickpaper-4633c27a":""},["从母亲口中得知老猫早在去年（2019年）夏天就离开了这个世界，十六年，整整十六年，从小学四年级那个夏天开始。"]),n("p",{"data-quickpaper-4633c27a":""},["03年夏的一个普通日子里，大姨夫骑着自行车带了一只刚出生没多久的猫来到我家，因为刚刚从无锡回到老家，母亲准备养只猫捉老鼠。"]),n("p",{"data-quickpaper-4633c27a":""},["刚见到她时，并不十分认生，小小的一团，叫声很小却清脆。家里还养了一只狗，开始会欺负她，等长大了，她总会把狗抓得嗷嗷叫。他们平时可能因为一点食物大打出手，但当有邻居家的狗来我家门口“挑衅”，却又总能出奇的一致对外；而在冬天，猫习惯性地卷成一团睡在狗的身上，当然，狗也是卷成一团在那打呼。"]),n("p",{"data-quickpaper-4633c27a":""},["咪的（老猫的名字）特别爱干净，经常看见她在河边洗澡，用舌头舔自己的毛发，用时也会用尾巴钓鱼，在夏天的时候。但却一直提防着我，当我走向河边的时候，可能是之前多次把她抓住按在河里给她洗澡，她讨厌水的感觉吧！"]),n("p",{"data-quickpaper-4633c27a":""},["她经常会吃一些青草，特别是雨后，并不多，一点点。当然，她喜欢在夏夜捉蚱蜢吃我也是知道的，因为我总会帮她一起捉，在院子里，拿在手中给她的时候都会先轻轻咬一下，等我手离开后，才会一口猛咬，狼吞虎咽的吃下去。"]),n("p",{"data-quickpaper-4633c27a":""},["回忆起来，都是一些锁事，但手摸过她后背的那种感觉，到今天，都依旧那么真实。"]),n("p",{"data-quickpaper-4633c27a":""},["在她生活的十几年里，狗换了一只又一只（农村有人偷狗，特别是冬天，可能一夜就没了）。记得有一只小狗养了没多久就生病去世了，等狗完全失去生命特征，我把他带到河里扔了，而当我有时路过那附近时，时常会看见她一个蹲在河岸往下看。"]),n("p",{"data-quickpaper-4633c27a":""},["我不知道她是否明白生死，是否知道死亡意味着什么，只是，她一定很想念小狗。"]),n("p",{"data-quickpaper-4633c27a":""},["因为一些原因，后来就没有养过狗了，咪的也总是独处，特别是上了大学到现在工作，回家的次数也越来越少，以至于老猫去世半年才知道。"]),n("p",{"data-quickpaper-4633c27a":""},["刚认识她时才十岁，转眼时光飞逝！"]),n("p",{"data-quickpaper-4633c27a":""},["这几天总会想起来你小时候，特别是冬天，你喜欢躲在我被窝里，虽然我妈不许你在房间里过夜，好在你不叫，大多数都没被发现。昨天做梦，又梦到你了，半夜醒来，对着窗外，久久发呆······"]),n("p",{"data-quickpaper-4633c27a":""},["不知你在那边过得怎么样，没能在最后一刻陪你，我真得很抱歉。"]),n("p",{"data-quickpaper-4633c27a":""},["我想这一生，都不会忘记你，当然，还有那些和你一起生活过的小狗们。"]),n("p",{class:"mark","data-quickpaper-4633c27a":""},["当我仰望星空的时候、当我疲于工作或学习的时候、当我此刻在灯光下记录这一切的时候，那些令我感动的东西，我一直与你们同在。",n("div",{"data-quickpaper-4633c27a":""},["-------- 后记"])])]),n("ul",{class:"footer-link","data-quickpaper-4633c27a":""},[n("li",{"data-quickpaper-4633c27a":""},[n("h2",{"data-quickpaper-4633c27a":""},["官方地址"]),n("a",{href:"https://www.w3.org/",target:"_blank","data-quickpaper-4633c27a":""},["万维网联盟(w3c)"]),n("a",{href:"https://www.khronos.org/webgl/",target:"_blank","data-quickpaper-4633c27a":""},["WebGL"])]),n("li",{"data-quickpaper-4633c27a":""},[n("h2",{"data-quickpaper-4633c27a":""},["有用的资源"]),n("a",{href:"https://emojipedia.org/",target:"_blank","data-quickpaper-4633c27a":""},["表情文字"])]),n("li",{"data-quickpaper-4633c27a":""},[n("h2",{"data-quickpaper-4633c27a":""},["其它"]),n("a",{href:"#/Sponsors",target:"_blank","data-quickpaper-4633c27a":""},["捐款支持我们"])])])])])])};t.default=c}}]);