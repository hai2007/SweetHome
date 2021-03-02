(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{16:function(n,t,e){"use strict";n.exports=function(n,t){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||t?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},17:function(n,t,e){"use strict";(function(n){
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
var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n};!function(){var e=function(n,t,e){var a=n.createShader(t);if(null==a)throw new Error("Unable to create shader!");if(n.shaderSource(a,e),n.compileShader(a),!n.getShaderParameter(a,n.COMPILE_STATUS))throw new Error("Failed to compile shader:"+n.getShaderInfoLog(a));return a};function a(n,t){var a=function(n,t){var e=["webgl","experimental-webgl","webkit-3d","moz-webgl"],a=null,r=void 0;for(r=0;r<e.length;r++){try{a=n.getContext(e[r],t)}catch(n){}if(a)break}return a}(n,t),r={painter:function(){return function(n){var t={byte:n.UNSIGNED_BYTE,short:n.UNSIGNED_SHORT};return{openDeep:function(){return n.enable(n.DEPTH_TEST),this},points:function(e,a,r){return r?n.drawElements(n.POINTS,a,t[r],e):n.drawArrays(n.POINTS,e,a),this},lines:function(e,a,r){return r?n.drawElements(n.LINES,a,t[r],e):n.drawArrays(n.LINES,e,a),this},stripLines:function(e,a,r){return r?n.drawElements(n.LINE_STRIP,a,t[r],e):n.drawArrays(n.LINE_STRIP,e,a),this},loopLines:function(e,a,r){return r?n.drawElements(n.LINE_LOOP,a,t[r],e):n.drawArrays(n.LINE_LOOP,e,a),this},triangles:function(e,a,r){return r?n.drawElements(n.TRIANGLES,a,t[r],e):n.drawArrays(n.TRIANGLES,e,a),this},stripTriangles:function(e,a,r){return r?n.drawElements(n.TRIANGLE_STRIP,a,t[r],e):n.drawArrays(n.TRIANGLE_STRIP,e,a),this},fanTriangles:function(e,a,r){return r?n.drawElements(n.TRIANGLE_FAN,a,t[r],e):n.drawArrays(n.TRIANGLE_FAN,e,a),this}}}(a)},shader:function(n,t){return a.program=function(n,t,a){var r=e(n,n.VERTEX_SHADER,t),i=e(n,n.FRAGMENT_SHADER,a),o=n.createProgram();if(n.attachShader(o,r),n.attachShader(o,i),n.linkProgram(o),!n.getProgramParameter(o,n.LINK_STATUS))throw new Error("Failed to link program: "+n.getProgramInfoLog(o));return n.useProgram(o),o}(a,n,t),r},buffer:function(n){!function(n,t){var e=n.createBuffer(),a=t?n.ELEMENT_ARRAY_BUFFER:n.ARRAY_BUFFER;n.bindBuffer(a,e)}(a,n);var t=void 0,e={write:function(r,i){return i=i||a.STATIC_DRAW,function(n,t,e,a){var r=a?n.ELEMENT_ARRAY_BUFFER:n.ARRAY_BUFFER;n.bufferData(r,t,e)}(a,r,i,n),t=r,e},use:function(n,r,i,o,u,p){var f=t.BYTES_PER_ELEMENT;return"string"==typeof n&&(n=a.getAttribLocation(a.program,n)),i=i||0,o=o||0,u=u||a.FLOAT,function(n,t,e,a,r,i,o){n.vertexAttribPointer(t,e,a,o||!1,r||0,i||0),n.enableVertexAttribArray(t)}(a,n,r,u,i*f,o*f,p),e}};return e},texture:function(n,t){var e={"2d":a.TEXTURE_2D,cube:a.TEXTURE_CUBE_MAP}[n],r=function(n,t,e,a){var r=n.createTexture();return"2d"==a&&(e=e||0,n.activeTexture(n["TEXTURE"+e])),n.bindTexture(t,r),r}(a,e,t,n);a.texParameteri(e,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(e,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(e,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);var i={useImage:function(n,t,r,o){return function(n,t,e,a,r,i){a={rgb:n.RGB,rgba:n.RGBA,alpha:n.ALPHA}[a]||n.RGBA,n.texImage2D(t,e||0,a,a,{}[r]||n.UNSIGNED_BYTE,i)}(a,e,t,r,o,n),i},useCube:function(n,t,i,o,u,p){!function(n,t,e,a,r,i,o,u,p){a={rgb:n.RGB,rgba:n.RGBA,alpha:n.ALPHA}[a]||n.RGBA,e=e||0,r={}[r]||n.UNSIGNED_BYTE;var f=[n.TEXTURE_CUBE_MAP_POSITIVE_X,n.TEXTURE_CUBE_MAP_NEGATIVE_X,n.TEXTURE_CUBE_MAP_POSITIVE_Y,n.TEXTURE_CUBE_MAP_NEGATIVE_Y,n.TEXTURE_CUBE_MAP_POSITIVE_Z,n.TEXTURE_CUBE_MAP_NEGATIVE_Z],c=void 0,s=void 0;for(c=0;c<f.length;c++)s=f[c],n.texImage2D(s,e,a,o,u,0,a,r,null),n.bindTexture(t,p),n.texImage2D(s,e,a,a,r,i[c]);n.generateMipmap(t)}(a,e,o,u,p,n,t,i,r)}};return i}},i=function(n){return{setAttribute1f:function(t,e){var a=n.getAttribLocation(n.program,t);n.vertexAttrib1f(a,e)},setAttribute2f:function(t,e,a){var r=n.getAttribLocation(n.program,t);n.vertexAttrib2f(r,e,a)},setAttribute3f:function(t,e,a,r){var i=n.getAttribLocation(n.program,t);n.vertexAttrib3f(i,e,a,r)},setAttribute4f:function(t,e,a,r,i){var o=n.getAttribLocation(n.program,t);n.vertexAttrib4f(o,e,a,r,i)},setAttribute1i:function(t,e){var a=n.getAttribLocation(n.program,t);n.vertexAttrib1i(a,e)},setAttribute2i:function(t,e,a){var r=n.getAttribLocation(n.program,t);n.vertexAttrib2i(r,e,a)},setAttribute3i:function(t,e,a,r){var i=n.getAttribLocation(n.program,t);n.vertexAttrib3i(i,e,a,r)},setAttribute4i:function(t,e,a,r,i){var o=n.getAttribLocation(n.program,t);n.vertexAttrib4i(o,e,a,r,i)},setUniform1f:function(t,e){var a=n.getUniformLocation(n.program,t);n.uniform1f(a,e)},setUniform2f:function(t,e,a){var r=n.getUniformLocation(n.program,t);n.uniform2f(r,e,a)},setUniform3f:function(t,e,a,r){var i=n.getUniformLocation(n.program,t);n.uniform3f(i,e,a,r)},setUniform4f:function(t,e,a,r,i){var o=n.getUniformLocation(n.program,t);n.uniform4f(o,e,a,r,i)},setUniform1i:function(t,e){var a=n.getUniformLocation(n.program,t);n.uniform1i(a,e)},setUniform2i:function(t,e,a){var r=n.getUniformLocation(n.program,t);n.uniform2i(r,e,a)},setUniform3i:function(t,e,a,r){var i=n.getUniformLocation(n.program,t);n.uniform3i(i,e,a,r)},setUniform4i:function(t,e,a,r,i){var o=n.getUniformLocation(n.program,t);n.uniform4i(o,e,a,r,i)},setUniformMatrix2fv:function(t,e){var a=n.getUniformLocation(n.program,t);n.uniformMatrix2fv(a,!1,e)},setUniformMatrix3fv:function(t,e){var a=n.getUniformLocation(n.program,t);n.uniformMatrix3fv(a,!1,e)},setUniformMatrix4fv:function(t,e){var a=n.getUniformLocation(n.program,t);n.uniformMatrix4fv(a,!1,e)}}}(a);for(var o in i)r[o]=i[o];return r}var r=function(n,t){for(var e=[],a=0;a<4;a++)for(var r=0;r<t.length/4;r++)e[4*r+a]=n[a]*t[4*r]+n[a+4]*t[4*r+1]+n[a+8]*t[4*r+2]+n[a+12]*t[4*r+3];return e};function i(n){var t=n||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e={move:function(n,a,i,o){return t=r(function(n,t,e,a){a=a||0;var r=Math.sqrt(t*t+e*e+a*a);return[1,0,0,0,0,1,0,0,0,0,1,0,t*n/r,e*n/r,a*n/r,1]}(n,a,i,o),t),e},rotate:function(n,a,i,o,u,p,f){var c=function(n,t,e,a,r,i){if("number"==typeof n&&"number"==typeof t){if("number"!=typeof e?(e=0,a=n,r=t,i=1):"number"==typeof a&&"number"==typeof r&&"number"==typeof i||(a=n,r=t,i=e,n=0,t=0,e=0),n==a&&t==r&&e==i)throw new Error("It's not a legitimate ray!");var o=Math.sqrt((a-n)*(a-n)+(r-t)*(r-t)),u=0!=o?(r-t)/o:1,p=0!=o?(a-n)/o:0,f=(a-n)*p+(r-t)*u,c=i-e,s=Math.sqrt(f*f+c*c),d=0!=s?c/s:1,l=0!=s?f/s:0;return[[u,d*p,p*l,0,-p,u*d,u*l,0,0,-l,d,0,t*p-n*u,e*l-n*p*d-t*u*d,-n*p*l-t*u*l-e*d,1],[u,-p,0,0,d*p,d*u,-l,0,p*l,u*l,d,0,n,t,e,1]]}throw new Error("a1 and b1 is required!")}(a,i,o,u,p,f);return t=r(r(r(c[1],function(n){var t=Math.sin(n),e=Math.cos(n);return[e,t,0,0,-t,e,0,0,0,0,1,0,0,0,0,1]}(n)),c[0]),t),e},scale:function(n,a,i,o,u,p){return t=r(function(n,t,e,a,r,i){return[n,0,0,0,0,t,0,0,0,0,e,0,(a=a||0)-a*n,(r=r||0)-r*t,(i=i||0)-i*e,1]}(n,a,i,o,u,p),t),e},multiply:function(n,a){return t=a?r(t,n):r(n,t),e},use:function(n,e,a,i){var o=r(t,[n,e,a=a||0,i=i||1]);return o[0]=+o[0].toFixed(7),o[1]=+o[1].toFixed(7),o[2]=+o[2].toFixed(7),o[3]=+o[3].toFixed(7),o},value:function(){return t}};return e}function o(n,t){return function(){return new function(){var n=this,t=i();this.rotateEye=function(e,a,r,i,o,u,p){return t.rotate(-e,a,r,i,o,u,p),n},this.moveEye=function(e,a,r,i){return t.move(-e,a,r,i),n},this.rotateBody=function(e,a,r,i,o,u,p){return t.rotate(e,a,r,i,o,u,p),n},this.moveBody=function(e,a,r,i){return t.move(e,a,r,i),n},this.scaleBody=function(e,a,r,i,o,u){return t.scale(e,a,r,i,o,u),n},this.value=function(){return t.value()}}}}function u(n,t){var e=n.painter();return t.depth&&e.openDeep(),function(){return new function(){!function(n,t){t.drawPoint=function(e,a){return n.points(e,a),t},t.drawLine=function(e,a){return n.lines(e,a),t},t.drawStripLine=function(e,a){return n.stripLines(e,a),t},t.drawLoopLine=function(e,a){return n.loopLines(e,a),t},t.drawTriangle=function(e,a){return n.triangles(e,a),t},t.drawStripTriangle=function(e,a){return n.stripTriangles(e,a),t},t.drawFanTriangle=function(e,a){return n.fanTriangles(e,a),t}}(e,this),function(n,t){t.elemPoint=function(e,a,r){return r=r||"byte",n.points(e,a,r),t},t.elemLine=function(e,a,r){return r=r||"byte",n.lines(e,a,r),t},t.elemStripLine=function(e,a,r){return r=r||"byte",n.stripLines(e,a,r),t},t.elemLoopLine=function(e,a,r){return r=r||"byte",n.loopLines(e,a,r),t},t.elemTriangle=function(e,a,r){return r=r||"byte",n.triangles(e,a,r),t},t.elemStripTriangle=function(e,a,r){return r=r||"byte",n.stripTriangles(e,a,r),t},t.elemFanTriangle=function(e,a,r){return r=r||"byte",n.fanTriangles(e,a,r),t}}(e,this)}}}var p={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    void main(){\n        gl_Position=a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "},f={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    uniform mat4 u_matrix;\n    void main(){\n        gl_Position=u_matrix * a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "};function c(n){return{type_default:p,type_camera:f}["type_"+n]}var s=function n(t,e){var r=function(n,t){for(var e in t)try{n[e]=t[e]}catch(n){throw new Error("Illegal property key : "+e)}return n}({depth:!1},e||{}),i=a(t),p=r["vertex-shader"],f=r["fragment-shader"];if(!p||!f){var s=c(r.shader||"default");p=s.vs,f=s.fs}i.shader(p,f),(n.fn=n.prototype).Buffer=function(n,t){return function(t){return new function(){var e=this,a=n.buffer(t);this.write=function(n){return a.write(n),e},t||(this.use=function(n,t,r,i){return a.use(n,t,r,i),e})}}}(i),n.fn.Camera=o(),n.fn.Painter=u(i,r),n.fn.Texture2D=function(n,t){return function(t){return new function(){var e=this,a=n.texture("2d",t);this.write=function(n){return a.useImage(n),e}}}}(i),n.fn.TextureCube=function(n,t){return function(t,e){return new function(){var a=this,r=n.texture("cube");this.write=function(n,i,o,u,p,f){return r.useCube([n,i,o,u,p,f],t,e),a}}}}(i),n.fn.setAttributeFloat=function(n,t,e,a,r){return i["setAttribute"+(arguments.length-1)+"f"](n,t,e,a,r),this},n.fn.setAttributeInt=function(n,t,e,a,r){return i["setAttribute"+(arguments.length-1)+"i"](n,t,e,a,r),this},n.fn.setUniformFloat=function(n,t,e,a,r){return i["setUniform"+(arguments.length-1)+"f"](n,t,e,a,r),this},n.fn.setUniformInt=function(n,t,e,a,r){return i["setUniform"+(arguments.length-1)+"i"](n,t,e,a,r),this},n.fn.setUniformMatrix=function(n,t){var e={4:2,9:3,16:4}[t.length];return i["setUniformMatrix"+e+"fv"](n,t),this}};if(s.core=a,"object"===t(n)&&"object"===t(n.exports))n.exports=s;else{var d=window.image3D;s.noConflict=function(){return window.image3D===s&&(window.image3D=d),s},window.image3D=s}}()}).call(this,e(3)(n))},18:function(n,t,e){var a=e(19);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,e(1).default)("data-quickpaper-36912c6e",a,!0)},19:function(n,t,e){(n.exports=e(0)(!1)).push([n.i,"",""])},20:function(n,t,e){var a=e(21);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,e(1).default)("data-quickpaper-fa52a6ae",a,!0)},21:function(n,t,e){t=n.exports=e(0)(!1);var a=e(16),r=a(e(22)),i=a(e(23)),o=a(e(24)),u=a(e(25));t.push([n.i,"\n    /* 主体划分 */\n    div.page>div {\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    div.page>div.left {\n        text-align: center;\n        width: 300px;\n    }\n\n    div.page>div.right {\n        width: 700px;\n    }\n\n    /* 左边样式 */\n    div.page>div.left>.title {\n        padding-top: 200px;\n        background-image: url("+r+");\n        background-repeat: no-repeat;\n        background-position: center 30px;\n        font-size: 20px;\n        font-weight: 800;\n    }\n\n    div.page>div.left>.title>span {\n        display: block;\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 2em;\n    }\n\n    div.page>div.left>.belief {\n        line-height: 2em;\n        color: gray;\n    }\n\n    div.page>div.left>.contact {\n        padding: 10px 40px;\n        background: #e7f2f5;\n        margin-top: 20px;\n        color: #2196f3;\n    }\n\n    div.page>div.left>.contact>li {\n        line-height: 1.6em;\n        text-align: left;\n    }\n\n    div.page>div.left>.fork {\n        color: rgb(90, 86, 86);\n        border: 1px solid rgb(202, 199, 199);\n        padding: 5px 10px;\n        display: inline-block;\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        margin-top: 10px;\n    }\n\n    div.page>div.left>.fork:hover {\n        text-decoration: underline;\n        color: rgb(245, 12, 12);\n        border-color: rgb(236, 49, 49);\n    }\n\n    div.page>div.left>.link {\n        padding-top: 20px;\n    }\n\n    div.page>div.left>.link>a {\n        background-image: url("+i+");\n        padding-top: inherit;\n        background-repeat: no-repeat;\n        background-position-y: -9px;\n        width: 50px;\n        font-size: 12px;\n        display: inline-block;\n        color: rgb(0, 0, 0);\n        font-weight: 800;\n    }\n\n    div.page>div.left>.link>a.github {\n        background-position-x: 6px;\n    }\n\n    div.page>div.left>.link>a.npm {\n        background-position-x: -124px;\n    }\n\n    div.page>div.left>.link>a.oschina {\n        background-position-x: -242px;\n    }\n\n    div.page>div.left>.link>a.sf {\n        background-position-x: -390px;\n    }\n\n    div.page>div.left>.cat {\n        background-image: url("+o+");\n        background-repeat: no-repeat;\n        background-position: center center;\n        height: 260px;\n        background-size: 100% auto;\n        font-size: 0;\n    }\n\n    /* 右边顶部说明 */\n\n    div.page>div.right>.stepbystep>h2 {\n        line-height: 3em;\n        background-image: url("+u+");\n        background-position: 350px center;\n        background-size: auto 80%;\n        background-repeat: no-repeat;\n        color: red;\n    }\n\n    div.page>div.right>.stepbystep>p {\n        text-indent: 2em;\n        padding: 5px;\n        line-height: 1.4em;\n    }\n\n    div.page>div.right>.stepbystep>p.right {\n        text-align: right;\n        font-size: 14px;\n        font-weight: 800;\n    }\n\n    /* 右边底部链接 */\n    div.page>div.right>.footer-link {\n        border-top: 1px solid rgb(187, 183, 183);\n        margin-top: 10px;\n        font-family: monospace;\n        text-align: center;\n    }\n\n    div.page>div.right>.footer-link>li {\n        display: inline-block;\n        vertical-align: top;\n        width: 233px;\n        padding: 10px;\n        text-align: left;\n    }\n\n    div.page>div.right>.footer-link>li>h2 {\n        font-size: 16px;\n        padding: 20px 0;\n    }\n\n    div.page>div.right>.footer-link>li>a {\n        display: block;\n        color: rgb(70, 73, 73);\n        font-weight: 200;\n        margin-bottom: 20px;\n\n    }\n\n    div.page>div.right>.footer-link>li>a:hover {\n        text-decoration: underline;\n    }\n\n    /* 其它 */\n    div.page>div.right>h2 {\n        margin-top: 30px;\n    }\n\n    /* 猫 */\n    .cat-page {\n        background: #d0c1c1;\n        margin: 30px 50px 50px 50px;\n        padding: 30px;\n    }\n\n    .cat-page>h4 {\n        font-weight: 800;\n        padding-bottom: 10px;\n    }\n\n    .cat-page>p {\n        text-indent: 2em;\n        line-height: 1.6em;\n        font-size: 14px;\n        color: rgb(16, 15, 15);\n    }\n\n    .cat-page>p.mark {\n        text-indent: 0;\n        margin: 20px 0;\n    }\n\n    .cat-page>p.mark>div {\n        text-align: right;\n    }\n",""])},22:function(n,t,e){n.exports=e.p+"dist/girl-hai2007.png"},23:function(n,t){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAAgCAMAAACSJAeKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFXmFlO7ZYIqZ0+fz7QLZY7e7uK6p7RkpP6Onodnl8VLqVQ7SKw8TFAJJVNq1VPbZYxgAAAppiPrNWAJZc2UlJ09TViYuOyAAA2N/cKS4zJisxpMG00dLT/vz8ycrLNpVZPbKGAJlgwtDKEaBqWFtfsd/OfYGDhrOc2dvbMqZSOqpU2vDoLDE2TJ1rXZ57KZJN0djVm9fBg4aJAJRY3mJiNa6AvL2/YKN8PKxWgYSHqt3KS05SbnF16/byDp9p8PDwirSf2klJf8yvODxBzhERSbaNJCkuzxUV9vb38vj27/j17PfzJSovMa1/gq+aUpdyKJdLxsjIPrhZ32RkPLJWPq5XPq5YO6xVLzQ5lruqKphMLZJPda2PaaiFPK1VIygu/////v7+AJphywMDywAAAZphygAA/Pz8/f39ywIC2kpKAJxiAJZb2ktL/v//AZpiAJhe+/v7OapU9fX2+fn5+/DwP7VX/PHx+Pj48Pj1AJlf/PX1O6tVPEBF/f79QblaQ7hZAZheSbpe8/Pz/fz8en2A9fX1QLlZAZlfrd7L219ffK+VAJRXMppVyuneBJhfUbSJteLRvuXW8fLyxM/KApphWqR3AJddAI9RywEBVJpz4Gxs+fr62kxMF6BrAIZC//7/ccam1tfYptrH656eOrJYL6RRP7BY/P38ydTQy8zNAJNXuszE1e7l3+Xi2O/mOrRYitC3PrFW2d3cRLVakbelMpdVrcW60B0dOZRbt8rCv8DBKJVLBZxjBZtk1dbW9fj2qdvIob6yrt7NAJpgBZxkCZ1mAZpgAptiLppQBJtjGKFtQURJYqGAAplgptvIKZVNPbBVFJ1m4eLi/v7/5ebmAJVZOalUT1NXJiov+/39EqBrLo5UFKFtRLpb8/T0grGYYL6bV6N0XqF78vn2OKhTywQEkdK6k9O8ltW9R55noqSmpaeppqipP69YQ7laZ2tt3N/eNZFaTbeP3FhY6+zskpWXAJhf9fr4AZhf4uPkuuPTwgAAUVZZVFhc////mywbMAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAP2SURBVHjaYvg/CoYSYBgNgtH4GgWj8TUKRuNrNL5GwWh8jYLR+BqNr1EwEPEV2GrtfObD68sD45iUtJRkOABy6Gfziv//N28/tKt5kMSKabZgahIQKCblFzSeyzbFEV8eRjo+bm5uPpK13yoGJL5S0sThIC2FjvH1XylWfk/UBd3IwRFf2Yrg6AJGWI7d3aOK2VjjK72YQQoYXT4gLMlQnDEA8SXunisikpWV5SgikusuTsf48tsTVHZxk1A73yyOwRBfJ5KSQBGmqJiz0Dah78RU7PnLUlLlzd8IdnadG28ZJI0GwJmZArkJeXkJQAAkcwUy6WRt+n8HzYY4rXfLi2q2MPoPhvhKPZKadOJEfqowU13CJKeOVKzxJScpyZnY/Kui5OrkRDVJnVX0d2ayuEhiRkZiIjDCMhJFxJPpZa+B/r3rcSx8fGUWT5s2OAyC+EpSzK+6Ziyc2qOQWLmXNykJa3xx+vioFUKYhZY+NzkHIH9B4qt6dteSRGB80St//Y9hDA0P2amuLs/CwnfybPrAx5diUs4xBVem1H6uRC82u+/Y44vdTXLRf6hjNXR82Acif2UlJMomlM788yUhwZFu+Stdt76GRX5zRobBnVfqBoOhPMzPYVsLLGScTBMSmRM28p7CGl86Ps5tcC+w++gMUHxlJJS7CwQn0jG+7OXL3m2ISTwwJ3Fd2+BoH6bmHEzonGDINc8q4cdL12uCWONL0i3iK9wLzm6SAxdfLgLBCfSNrzDG2MQVdYnp/wdJfAmrJpy/NCNntW9CZYFxkiKO8tDN7D+4Aiv5b+bjxj5i4us/qDzcNiUxUenTtMiPgyG+BK9xeyVcOci0mjvhye2fijjaG1IRtfshTFF2KZ+Bam+0JJa6CJjQtb3RvfRduFD048fRLEGavXolg6C9kc/L9Nw74fdq7jxP5YIO7PEV6CZm48Mg9/+/jE2Em5SU3AC15xHxRbf8JaH/vqhGiJ9fqEarifHBYGjPT2e7Pf8hs7eiwi0v5QIc7fn/aj4yYgwawMahm5uOlOXA9ZerweVhFh37y1uXNcQVWVgUWQyS/vLxfu0nhusTDvO6Jiy43ZiKvb+cXviPfTcoVzU7u0kxeAxA3QsdjxJ5Jr5jbhZ9x6MC2oWAoF1Tj3VQjEd1fJ5oq/3i9Gpf1cV2BUknsOev/yWtPvHAJiKrj6TlgI73poFo+o73rjGPjorSfyQ9ONqH2YrXck4IGhckVU2frngCx3gvuA4TK/7/v1iMZ2CcCZ1PyUxJm0nn+RQgWCktrTRImvP/TbP3nahSPJGqmJSamiqIcz5lFAx6MBpfo/E1CkbjaxSMxtdofI2C0fgaBcgAIMAArnWESZSxWY4AAAAASUVORK5CYII="},24:function(n,t,e){n.exports=e.p+"dist/cat.jpeg"},25:function(n,t,e){n.exports=e.p+"dist/dream.png"},59:function(n,t,e){"use strict";e.r(t);var a=e(17),r=e.n(a),i=!0,o={methods:{openlink:function(){window.location.href="https://hai2007.gitee.io/image3d/"},doRestart:function(){i=!0},doStop:function(){i=!1}},mounted:function(){var n=new r.a(document.getElementById("skybox"),{"vertex-shader":"attribute vec4 a_position;\n            varying vec3 v_normal;\n            uniform mat4 u_matrix;\n            void main(){\n                gl_Position=u_matrix * a_position;\n                // 因为位置是以几何中心为原点的,可以用顶点坐标作为法向量\n                v_normal=normalize(a_position.xyz);\n            }","fragment-shader":"precision mediump float;\n            varying vec3 v_normal;\n            uniform samplerCube u_texture;\n            void main(){\n                gl_FragColor=textureCube(u_texture,normalize(v_normal));\n            }",depth:!0}),t=new Float32Array([.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,0,0,.8,0,0,-.8,.8,0,0,-.8,0,0,0,.8,0,0,-.8,0]),e=new Uint8Array([0,1,8,1,2,8,2,3,8,0,3,8,4,5,9,5,6,9,6,7,9,4,7,9,0,1,10,1,5,10,4,5,10,0,4,10,2,6,11,6,7,11,3,7,11,2,3,11,0,3,12,3,7,12,4,7,12,4,0,12,1,2,13,1,5,13,5,6,13,2,6,13]);n.Buffer().write(t).use("a_position",3,3,0),n.Buffer(!0).write(e);var a=n.TextureCube(500,500),o=new Image;o.onload=function(){var t=new Image;t.onload=function(){var e=new Image;e.onload=function(){var r=new Image;r.onload=function(){var u=new Image;u.onload=function(){var p=new Image;p.onload=function(){a.write(o,t,e,r,u,p),n.setUniformInt("u_texture",a);var f,c,s,d=n.Camera(),l=n.Painter(),g=0;setInterval((function(){var t;t=0==i?50:15,0==g?(f=100*Math.random(),c=30*Math.random(),s=10*Math.random(),g=5):g-=1,d.rotateBody(Math.PI/t,f,-1*c,s,-1*f,c,-1*s),n.setUniformMatrix("u_matrix",d.value()),l.elemTriangle(0,72)}),50)},p.src="src/assets/skybox/front.jpg"},u.src="src/assets/skybox/back.jpg"},r.src="src/assets/skybox/bottom.jpg"},e.src="src/assets/skybox/top.jpg"},t.src="src/assets/skybox/left.jpg"},o.src="src/assets/skybox/right.jpg"}};e(18);o.render=function(n){return n("div",{quickpaper:"","data-quickpaper-36912c6e":""},[n("canvas",{id:"skybox",width:"300px",height:"300px",title:"点击我查看image3D文档","@click":"openlink()","@mouseover":"doStop()","@mouseout":"doRestart()","data-quickpaper-36912c6e":""},[])])};var u={data:function(){return{counterUrl:window.hai2007_sweethome_counterUrl}},mounted:function(){this.changeActive("menu-1","home")},component:{uiSkybox:o}};e(20);u.render=function(n){return n("div",{quickpaper:"","data-quickpaper-fa52a6ae":""},[n("div",{class:"page","data-quickpaper-fa52a6ae":""},[n("div",{class:"left","data-quickpaper-fa52a6ae":""},[n("div",{class:"title","data-quickpaper-fa52a6ae":""},["你好2007",n("span",{"data-quickpaper-fa52a6ae":""},["@hai2007"])]),n("div",{class:"belief","data-quickpaper-fa52a6ae":""},["走一步，再走一步。"]),n("a",{class:"fork",href:"https://github.com/hai2007/SweetHome",target:"_blank","data-quickpaper-fa52a6ae":""},["Fork me on Github"]),n("div",{class:"link","data-quickpaper-fa52a6ae":""},[n("a",{href:"https://github.com/hai2007",class:"github",target:"_blank","data-quickpaper-fa52a6ae":""},["Github"]),n("a",{href:"https://www.npmjs.com/~hai2007",class:"npm",target:"_blank","data-quickpaper-fa52a6ae":""},["NPM"]),n("a",{href:"https://my.oschina.net/u/4252568",class:"oschina",target:"_blank","data-quickpaper-fa52a6ae":""},["OSCHINA"]),n("a",{href:"https://segmentfault.com/u/hai2007/articles",class:"sf",target:"_blank","data-quickpaper-fa52a6ae":""},["思否"])]),n("ul",{class:"contact","data-quickpaper-fa52a6ae":""},[n("li",{"data-quickpaper-fa52a6ae":""},["QQ:2501482523"]),n("li",{"data-quickpaper-fa52a6ae":""},["Email:2501482523@qq.com"])]),n("div",{class:"cat","data-quickpaper-fa52a6ae":""},["一只陪伴了我十六年的猫"]),n("ui-skybox",{"data-quickpaper-fa52a6ae":""},[]),n("a",{href:"https://info.flagcounter.com/bdd0",target:"_blank","data-quickpaper-fa52a6ae":""},[n("img",{":src":"counterUrl","data-quickpaper-fa52a6ae":""},[])])]),n("div",{class:"right","data-quickpaper-fa52a6ae":""},[n("div",{class:"stepbystep","data-quickpaper-fa52a6ae":""},[n("h2",{"data-quickpaper-fa52a6ae":""},["What I Believe"]),n("p",{"data-quickpaper-fa52a6ae":""},["我还惊讶地意识到，在我生命中有很多时刻，每当我遇到一个遥不可及、令人害怕的情境，↵                    并感到惊慌失措时，我都能够应付——因为我回想起了很久以前自己上过的那一课。"]),n("p",{"data-quickpaper-fa52a6ae":""},["我提醒自己不要看下面遥远的岩石，而是注意相对轻松、容易的第一小步，迈出一小步、再↵                    一小步，就这样体会每一步带来的成就感，直到完成了自己想要完成的，达到了自己的目标，然↵                    后再回头看时，不禁对自己走过的这段漫漫长路感到惊讶和自豪。"]),n("p",{class:"right","data-quickpaper-fa52a6ae":""},["———— 摘自 莫顿·亨特《走一步，再走一步》"])]),n("div",{class:"cat-page","data-quickpaper-fa52a6ae":""},[n("h4",{"data-quickpaper-fa52a6ae":""},["由老猫的离世而引发的追忆"]),n("p",{"data-quickpaper-fa52a6ae":""},["去年冬天的一个周末，大学室友小孩出生，从南京出发刚到达合肥南，打算从这转车去淮南。由于离下一班车开还有一会，就打个电话回去，问问家里近来情况。"]),n("p",{"data-quickpaper-fa52a6ae":""},["从母亲口中得知老猫早在去年（2019年）夏天就离开了这个世界，十六年，整整十六年，从小学四年级那个夏天开始。"]),n("p",{"data-quickpaper-fa52a6ae":""},["03年夏的一个普通日子里，大姨夫骑着自行车带了一只刚出生没多久的猫来到我家，因为刚刚从无锡回到老家，母亲准备养只猫捉老鼠。"]),n("p",{"data-quickpaper-fa52a6ae":""},["刚见到她时，并不十分认生，小小的一团，叫声很小却清脆。家里还养了一只狗，开始会欺负她，等长大了，她总会把狗抓得嗷嗷叫。他们平时可能因为一点食物大打出手，但当有邻居家的狗来我家门口“挑衅”，却又总能出奇的一致对外；而在冬天，猫习惯性地卷成一团睡在狗的身上，当然，狗也是卷成一团在那打呼。"]),n("p",{"data-quickpaper-fa52a6ae":""},["咪的（老猫的名字）特别爱干净，经常看见她在河边洗澡，用舌头舔自己的毛发，有时也会用尾巴钓鱼，在夏天的时候。但却一直提防着我，当我走向河边的时候，可能是之前多次把她抓住按在河里给她洗澡，她讨厌水的感觉吧！"]),n("p",{"data-quickpaper-fa52a6ae":""},["她经常会吃一些青草，特别是雨后，并不多，一点点。当然，她喜欢在夏夜捉蚱蜢吃我也是知道的，因为我总会帮她一起捉，在院子里，拿在手中给她的时候都会先轻轻咬一下，等我手离开后，才会一口猛咬，狼吞虎咽的吃下去。"]),n("p",{"data-quickpaper-fa52a6ae":""},["回忆起来，都是一些锁事，但手摸过她后背的那种感觉，到今天，都依旧那么真实。"]),n("p",{"data-quickpaper-fa52a6ae":""},["在她生活的十几年里，狗换了一只又一只（农村有人偷狗，特别是冬天，可能一夜就没了）。记得有一只小狗养了没多久就生病去世了，等狗完全失去生命特征，我把他带到河里扔了，而当我有时路过那附近时，时常会看见她一个蹲在河岸往下看。"]),n("p",{"data-quickpaper-fa52a6ae":""},["我不知道她是否明白生死，是否知道死亡意味着什么，只是，她一定很想念小狗。"]),n("p",{"data-quickpaper-fa52a6ae":""},["因为一些原因，后来就没有养过狗了，咪的也总是独处，特别是上了大学到现在工作，回家的次数也越来越少，以至于老猫去世半年才知道。"]),n("p",{"data-quickpaper-fa52a6ae":""},["刚认识她时才十岁，转眼时光飞逝！"]),n("p",{"data-quickpaper-fa52a6ae":""},["这几天总会想起来你小时候，特别是冬天，你喜欢躲在我被窝里，虽然我妈不许你在房间里过夜，好在你不叫，大多数都没被发现。昨天做梦，又梦到你了，半夜醒来，对着窗外，久久发呆······"]),n("p",{"data-quickpaper-fa52a6ae":""},["不知你在那边过得怎么样，没能在最后一刻陪你，我真得很抱歉。"]),n("p",{"data-quickpaper-fa52a6ae":""},["我想这一生，都不会忘记你，当然，还有那些和你一起生活过的小狗们。"]),n("p",{class:"mark","data-quickpaper-fa52a6ae":""},["当我仰望星空的时候、当我疲于工作或学习的时候、当我此刻在灯光下记录这一切的时候，那些令我感动的东西，我一直与你们同在。",n("div",{"data-quickpaper-fa52a6ae":""},["-------- 后记"])])]),n("ul",{class:"footer-link","data-quickpaper-fa52a6ae":""},[n("li",{"data-quickpaper-fa52a6ae":""},[n("h2",{"data-quickpaper-fa52a6ae":""},["官方地址"]),n("a",{href:"https://www.w3.org/",target:"_blank","data-quickpaper-fa52a6ae":""},["万维网联盟(w3c)"]),n("a",{href:"https://www.khronos.org/webgl/",target:"_blank","data-quickpaper-fa52a6ae":""},["WebGL"])]),n("li",{"data-quickpaper-fa52a6ae":""},[n("h2",{"data-quickpaper-fa52a6ae":""},["有用的资源"]),n("a",{href:"https://emojipedia.org/",target:"_blank","data-quickpaper-fa52a6ae":""},["表情文字"])]),n("li",{"data-quickpaper-fa52a6ae":""},[n("h2",{"data-quickpaper-fa52a6ae":""},["其它"]),n("a",{href:"#/Sponsors",target:"_blank","data-quickpaper-fa52a6ae":""},["捐款支持我们"])])])])])])};t.default=u}}]);