(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{118:function(t,n,a){"use strict";a.r(n);var e=a(42),r=a.n(e),i=!0,o={methods:{openlink:function(){window.location.href="https://hai2007.gitee.io/image3d/"},doRestart:function(){i=!0},doStop:function(){i=!1}},mounted:function(){var t=new r.a(document.getElementById("skybox"),{"vertex-shader":"attribute vec4 a_position;\n            varying vec3 v_normal;\n            uniform mat4 u_matrix;\n            void main(){\n                gl_Position=u_matrix * a_position;\n                // 因为位置是以几何中心为原点的,可以用顶点坐标作为法向量\n                v_normal=normalize(a_position.xyz);\n            }","fragment-shader":"precision mediump float;\n            varying vec3 v_normal;\n            uniform samplerCube u_texture;\n            void main(){\n                gl_FragColor=textureCube(u_texture,normalize(v_normal));\n            }",depth:!0}),n=new Float32Array([.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,0,0,.8,0,0,-.8,.8,0,0,-.8,0,0,0,.8,0,0,-.8,0]),a=new Uint8Array([0,1,8,1,2,8,2,3,8,0,3,8,4,5,9,5,6,9,6,7,9,4,7,9,0,1,10,1,5,10,4,5,10,0,4,10,2,6,11,6,7,11,3,7,11,2,3,11,0,3,12,3,7,12,4,7,12,4,0,12,1,2,13,1,5,13,5,6,13,2,6,13]);t.Buffer().write(n).use("a_position",3,3,0),t.Buffer(!0).write(a);var e=t.TextureCube(500,500),o=new Image;o.onload=function(){var n=new Image;n.onload=function(){var a=new Image;a.onload=function(){var r=new Image;r.onload=function(){var u=new Image;u.onload=function(){var p=new Image;p.onload=function(){e.write(o,n,a,r,u,p),t.setUniformInt("u_texture",e);var c,f,s,d=t.Camera(),g=t.Painter(),l=0;setInterval((function(){var n;n=0==i?50:15,0==l?(c=100*Math.random(),f=30*Math.random(),s=10*Math.random(),l=5):l-=1,d.rotateBody(Math.PI/n,c,-1*f,s,-1*c,f,-1*s),t.setUniformMatrix("u_matrix",d.value()),g.elemTriangle(0,72)}),50)},p.src="src/assets/skybox/front.jpg"},u.src="src/assets/skybox/back.jpg"},r.src="src/assets/skybox/bottom.jpg"},a.src="src/assets/skybox/top.jpg"},n.src="src/assets/skybox/left.jpg"},o.src="src/assets/skybox/right.jpg"}};a(43);o.render=function(t){return t("div",{quickpaper:"","data-quickpaper-36912c6e":""},[t("canvas",{id:"skybox",width:"300px",height:"300px",title:"点击我查看image3D文档","@click":"openlink()","@mouseover":"doStop()","@mouseout":"doRestart()","data-quickpaper-36912c6e":""},[])])};var u={data:function(){return{counterUrl:window.hai2007_sweethome_counterUrl}},mounted:function(){this.changeActive("menu-1","home")},component:{uiSkybox:o}};a(45);u.render=function(t){return t("div",{quickpaper:"","data-quickpaper-fa52a6ae":""},[t("div",{class:"page","data-quickpaper-fa52a6ae":""},[t("div",{class:"left","data-quickpaper-fa52a6ae":""},[t("div",{class:"title","data-quickpaper-fa52a6ae":""},["你好2007",t("span",{"data-quickpaper-fa52a6ae":""},["@hai2007"])]),t("div",{class:"belief","data-quickpaper-fa52a6ae":""},["走一步，再走一步。"]),t("a",{class:"fork",href:"https://github.com/hai2007/SweetHome",target:"_blank","data-quickpaper-fa52a6ae":""},["Fork me on Github"]),t("div",{class:"link","data-quickpaper-fa52a6ae":""},[t("a",{href:"https://github.com/hai2007",class:"github",target:"_blank","data-quickpaper-fa52a6ae":""},["Github"]),t("a",{href:"https://www.npmjs.com/~hai2007",class:"npm",target:"_blank","data-quickpaper-fa52a6ae":""},["NPM"]),t("a",{href:"https://my.oschina.net/u/4252568",class:"oschina",target:"_blank","data-quickpaper-fa52a6ae":""},["OSCHINA"]),t("a",{href:"https://segmentfault.com/u/hai2007/articles",class:"sf",target:"_blank","data-quickpaper-fa52a6ae":""},["思否"])]),t("div",{class:"cat","data-quickpaper-fa52a6ae":""},["一只陪伴了我十六年的猫"]),t("a",{class:"license",href:"#/license",target:"_blank",title:"查看开源协议权限规则","data-quickpaper-fa52a6ae":""},[]),t("ui-skybox",{"data-quickpaper-fa52a6ae":""},[]),t("a",{class:"counter",href:"https://info.flagcounter.com/bdd0",target:"_blank","data-quickpaper-fa52a6ae":""},[t("img",{":src":"counterUrl","data-quickpaper-fa52a6ae":""},[])])]),t("div",{class:"right","data-quickpaper-fa52a6ae":""},[t("div",{class:"stepbystep","data-quickpaper-fa52a6ae":""},[t("h2",{"data-quickpaper-fa52a6ae":""},["What I Believe"]),t("p",{"data-quickpaper-fa52a6ae":""},["我还惊讶地意识到，在我生命中有很多时刻，每当我遇到一个遥不可及、令人害怕的情境，↵                    并感到惊慌失措时，我都能够应付——因为我回想起了很久以前自己上过的那一课。"]),t("p",{"data-quickpaper-fa52a6ae":""},["我提醒自己不要看下面遥远的岩石，而是注意相对轻松、容易的第一小步，迈出一小步、再↵                    一小步，就这样体会每一步带来的成就感，直到完成了自己想要完成的，达到了自己的目标，然↵                    后再回头看时，不禁对自己走过的这段漫漫长路感到惊讶和自豪。"]),t("p",{class:"right","data-quickpaper-fa52a6ae":""},["———— 摘自 莫顿·亨特《走一步，再走一步》"])]),t("div",{class:"cat-page","data-quickpaper-fa52a6ae":""},[t("h4",{"data-quickpaper-fa52a6ae":""},["由老猫的离世而引发的追忆"]),t("p",{"data-quickpaper-fa52a6ae":""},["去年冬天的一个周末，大学室友小孩出生，从南京出发刚到达合肥南，打算从这转车去淮南。由于离下一班车开还有一会，就打个电话回去，问问家里近来情况。"]),t("p",{"data-quickpaper-fa52a6ae":""},["从母亲口中得知老猫早在去年（2019年）夏天就离开了这个世界，十六年，整整十六年，从小学四年级那个夏天开始。"]),t("p",{"data-quickpaper-fa52a6ae":""},["03年夏的一个普通日子里，大姨夫骑着自行车带了一只刚出生没多久的猫来到我家，因为刚刚从无锡回到老家，母亲准备养只猫捉老鼠。"]),t("p",{"data-quickpaper-fa52a6ae":""},["刚见到她时，并不十分认生，小小的一团，叫声很小却清脆。家里还养了一只狗，开始会欺负她，等长大了，她总会把狗抓得嗷嗷叫。他们平时可能因为一点食物大打出手，但当有邻居家的狗来我家门口“挑衅”，却又总能出奇的一致对外；而在冬天，猫习惯性地卷成一团睡在狗的身上，当然，狗也是卷成一团在那打呼。"]),t("p",{"data-quickpaper-fa52a6ae":""},["咪的（老猫的名字）特别爱干净，经常看见她在河边洗澡，用舌头舔自己的毛发，有时也会用尾巴钓鱼，在夏天的时候。但却一直提防着我，当我走向河边的时候，可能是之前多次把她抓住按在河里给她洗澡，她讨厌水的感觉吧！"]),t("p",{"data-quickpaper-fa52a6ae":""},["她经常会吃一些青草，特别是雨后，并不多，一点点。当然，她喜欢在夏夜捉蚱蜢吃我也是知道的，因为我总会帮她一起捉，在院子里，拿在手中给她的时候都会先轻轻咬一下，等我手离开后，才会一口猛咬，狼吞虎咽的吃下去。"]),t("p",{"data-quickpaper-fa52a6ae":""},["回忆起来，都是一些锁事，但手摸过她后背的那种感觉，到今天，都依旧那么真实。"]),t("p",{"data-quickpaper-fa52a6ae":""},["在她生活的十几年里，狗换了一只又一只（农村有人偷狗，特别是冬天，可能一夜就没了）。记得有一只小狗养了没多久就生病去世了，等狗完全失去生命特征，我把他带到河里扔了，而当我有时路过那附近时，时常会看见她一个蹲在河岸往下看。"]),t("p",{"data-quickpaper-fa52a6ae":""},["我不知道她是否明白生死，是否知道死亡意味着什么，只是，她一定很想念小狗。"]),t("p",{"data-quickpaper-fa52a6ae":""},["因为一些原因，后来就没有养过狗了，咪的也总是独处，特别是上了大学到现在工作，回家的次数也越来越少，以至于老猫去世半年才知道。"]),t("p",{"data-quickpaper-fa52a6ae":""},["刚认识她时才十岁，转眼时光飞逝！"]),t("p",{"data-quickpaper-fa52a6ae":""},["这几天总会想起来你小时候，特别是冬天，你喜欢躲在我被窝里，虽然我妈不许你在房间里过夜，好在你不叫，大多数都没被发现。昨天做梦，又梦到你了，半夜醒来，对着窗外，久久发呆······"]),t("p",{"data-quickpaper-fa52a6ae":""},["不知你在那边过得怎么样，没能在最后一刻陪你，我真得很抱歉。"]),t("p",{"data-quickpaper-fa52a6ae":""},["我想这一生，都不会忘记你，当然，还有那些和你一起生活过的小狗们。"]),t("p",{class:"mark","data-quickpaper-fa52a6ae":""},["当我仰望星空的时候、当我疲于工作或学习的时候、当我此刻在灯光下记录这一切的时候，那些令我感动的东西，我一直与你们同在。",t("div",{"data-quickpaper-fa52a6ae":""},["-------- 后记"])])]),t("ul",{class:"footer-link","data-quickpaper-fa52a6ae":""},[t("li",{"data-quickpaper-fa52a6ae":""},[t("h2",{"data-quickpaper-fa52a6ae":""},["官方地址"]),t("a",{href:"https://www.w3.org/",target:"_blank","data-quickpaper-fa52a6ae":""},["万维网联盟(w3c)"]),t("a",{href:"https://www.khronos.org/webgl/",target:"_blank","data-quickpaper-fa52a6ae":""},["WebGL"])]),t("li",{"data-quickpaper-fa52a6ae":""},[t("h2",{"data-quickpaper-fa52a6ae":""},["有用的资源"]),t("a",{href:"https://emojipedia.org/",target:"_blank","data-quickpaper-fa52a6ae":""},["表情文字"])]),t("li",{"data-quickpaper-fa52a6ae":""},[t("h2",{"data-quickpaper-fa52a6ae":""},["在线工具"]),t("a",{href:"#/editor",target:"_blank","data-quickpaper-fa52a6ae":""},["在线代码演示"])]),t("li",{"data-quickpaper-fa52a6ae":""},[t("h2",{"data-quickpaper-fa52a6ae":""},["其它"]),t("a",{href:"#/aboutUS",target:"_blank","data-quickpaper-fa52a6ae":""},["关于我们"]),t("a",{href:"#/Sponsors",target:"_blank","data-quickpaper-fa52a6ae":""},["捐款支持我们"])])])])])])};n.default=u},42:function(t,n,a){"use strict";(function(t){
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
var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(){var a=function(t,n,a){var e=t.createShader(n);if(null==e)throw new Error("Unable to create shader!");if(t.shaderSource(e,a),t.compileShader(e),!t.getShaderParameter(e,t.COMPILE_STATUS))throw new Error("Failed to compile shader:"+t.getShaderInfoLog(e));return e};function e(t,n){var e=function(t,n){var a=["webgl","experimental-webgl","webkit-3d","moz-webgl"],e=null,r=void 0;for(r=0;r<a.length;r++){try{e=t.getContext(a[r],n)}catch(t){}if(e)break}return e}(t,n),r={painter:function(){return function(t){var n={byte:t.UNSIGNED_BYTE,short:t.UNSIGNED_SHORT};return{openDeep:function(){return t.enable(t.DEPTH_TEST),this},points:function(a,e,r){return r?t.drawElements(t.POINTS,e,n[r],a):t.drawArrays(t.POINTS,a,e),this},lines:function(a,e,r){return r?t.drawElements(t.LINES,e,n[r],a):t.drawArrays(t.LINES,a,e),this},stripLines:function(a,e,r){return r?t.drawElements(t.LINE_STRIP,e,n[r],a):t.drawArrays(t.LINE_STRIP,a,e),this},loopLines:function(a,e,r){return r?t.drawElements(t.LINE_LOOP,e,n[r],a):t.drawArrays(t.LINE_LOOP,a,e),this},triangles:function(a,e,r){return r?t.drawElements(t.TRIANGLES,e,n[r],a):t.drawArrays(t.TRIANGLES,a,e),this},stripTriangles:function(a,e,r){return r?t.drawElements(t.TRIANGLE_STRIP,e,n[r],a):t.drawArrays(t.TRIANGLE_STRIP,a,e),this},fanTriangles:function(a,e,r){return r?t.drawElements(t.TRIANGLE_FAN,e,n[r],a):t.drawArrays(t.TRIANGLE_FAN,a,e),this}}}(e)},shader:function(t,n){return e.program=function(t,n,e){var r=a(t,t.VERTEX_SHADER,n),i=a(t,t.FRAGMENT_SHADER,e),o=t.createProgram();if(t.attachShader(o,r),t.attachShader(o,i),t.linkProgram(o),!t.getProgramParameter(o,t.LINK_STATUS))throw new Error("Failed to link program: "+t.getProgramInfoLog(o));return t.useProgram(o),o}(e,t,n),r},buffer:function(t){!function(t,n){var a=t.createBuffer(),e=n?t.ELEMENT_ARRAY_BUFFER:t.ARRAY_BUFFER;t.bindBuffer(e,a)}(e,t);var n=void 0,a={write:function(r,i){return i=i||e.STATIC_DRAW,function(t,n,a,e){var r=e?t.ELEMENT_ARRAY_BUFFER:t.ARRAY_BUFFER;t.bufferData(r,n,a)}(e,r,i,t),n=r,a},use:function(t,r,i,o,u,p){var c=n.BYTES_PER_ELEMENT;return"string"==typeof t&&(t=e.getAttribLocation(e.program,t)),i=i||0,o=o||0,u=u||e.FLOAT,function(t,n,a,e,r,i,o){t.vertexAttribPointer(n,a,e,o||!1,r||0,i||0),t.enableVertexAttribArray(n)}(e,t,r,u,i*c,o*c,p),a}};return a},texture:function(t,n){var a={"2d":e.TEXTURE_2D,cube:e.TEXTURE_CUBE_MAP}[t],r=function(t,n,a,e){var r=t.createTexture();return"2d"==e&&(a=a||0,t.activeTexture(t["TEXTURE"+a])),t.bindTexture(n,r),r}(e,a,n,t);e.texParameteri(a,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(a,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(a,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);var i={useImage:function(t,n,r,o){return function(t,n,a,e,r,i){e={rgb:t.RGB,rgba:t.RGBA,alpha:t.ALPHA}[e]||t.RGBA,t.texImage2D(n,a||0,e,e,{}[r]||t.UNSIGNED_BYTE,i)}(e,a,n,r,o,t),i},useCube:function(t,n,i,o,u,p){!function(t,n,a,e,r,i,o,u,p){e={rgb:t.RGB,rgba:t.RGBA,alpha:t.ALPHA}[e]||t.RGBA,a=a||0,r={}[r]||t.UNSIGNED_BYTE;var c=[t.TEXTURE_CUBE_MAP_POSITIVE_X,t.TEXTURE_CUBE_MAP_NEGATIVE_X,t.TEXTURE_CUBE_MAP_POSITIVE_Y,t.TEXTURE_CUBE_MAP_NEGATIVE_Y,t.TEXTURE_CUBE_MAP_POSITIVE_Z,t.TEXTURE_CUBE_MAP_NEGATIVE_Z],f=void 0,s=void 0;for(f=0;f<c.length;f++)s=c[f],t.texImage2D(s,a,e,o,u,0,e,r,null),t.bindTexture(n,p),t.texImage2D(s,a,e,e,r,i[f]);t.generateMipmap(n)}(e,a,o,u,p,t,n,i,r)}};return i}},i=function(t){return{setAttribute1f:function(n,a){var e=t.getAttribLocation(t.program,n);t.vertexAttrib1f(e,a)},setAttribute2f:function(n,a,e){var r=t.getAttribLocation(t.program,n);t.vertexAttrib2f(r,a,e)},setAttribute3f:function(n,a,e,r){var i=t.getAttribLocation(t.program,n);t.vertexAttrib3f(i,a,e,r)},setAttribute4f:function(n,a,e,r,i){var o=t.getAttribLocation(t.program,n);t.vertexAttrib4f(o,a,e,r,i)},setAttribute1i:function(n,a){var e=t.getAttribLocation(t.program,n);t.vertexAttrib1i(e,a)},setAttribute2i:function(n,a,e){var r=t.getAttribLocation(t.program,n);t.vertexAttrib2i(r,a,e)},setAttribute3i:function(n,a,e,r){var i=t.getAttribLocation(t.program,n);t.vertexAttrib3i(i,a,e,r)},setAttribute4i:function(n,a,e,r,i){var o=t.getAttribLocation(t.program,n);t.vertexAttrib4i(o,a,e,r,i)},setUniform1f:function(n,a){var e=t.getUniformLocation(t.program,n);t.uniform1f(e,a)},setUniform2f:function(n,a,e){var r=t.getUniformLocation(t.program,n);t.uniform2f(r,a,e)},setUniform3f:function(n,a,e,r){var i=t.getUniformLocation(t.program,n);t.uniform3f(i,a,e,r)},setUniform4f:function(n,a,e,r,i){var o=t.getUniformLocation(t.program,n);t.uniform4f(o,a,e,r,i)},setUniform1i:function(n,a){var e=t.getUniformLocation(t.program,n);t.uniform1i(e,a)},setUniform2i:function(n,a,e){var r=t.getUniformLocation(t.program,n);t.uniform2i(r,a,e)},setUniform3i:function(n,a,e,r){var i=t.getUniformLocation(t.program,n);t.uniform3i(i,a,e,r)},setUniform4i:function(n,a,e,r,i){var o=t.getUniformLocation(t.program,n);t.uniform4i(o,a,e,r,i)},setUniformMatrix2fv:function(n,a){var e=t.getUniformLocation(t.program,n);t.uniformMatrix2fv(e,!1,a)},setUniformMatrix3fv:function(n,a){var e=t.getUniformLocation(t.program,n);t.uniformMatrix3fv(e,!1,a)},setUniformMatrix4fv:function(n,a){var e=t.getUniformLocation(t.program,n);t.uniformMatrix4fv(e,!1,a)}}}(e);for(var o in i)r[o]=i[o];return r}var r=function(t,n){for(var a=[],e=0;e<4;e++)for(var r=0;r<n.length/4;r++)a[4*r+e]=t[e]*n[4*r]+t[e+4]*n[4*r+1]+t[e+8]*n[4*r+2]+t[e+12]*n[4*r+3];return a};function i(t){var n=t||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],a={move:function(t,e,i,o){return n=r(function(t,n,a,e){e=e||0;var r=Math.sqrt(n*n+a*a+e*e);return[1,0,0,0,0,1,0,0,0,0,1,0,n*t/r,a*t/r,e*t/r,1]}(t,e,i,o),n),a},rotate:function(t,e,i,o,u,p,c){var f=function(t,n,a,e,r,i){if("number"==typeof t&&"number"==typeof n){if("number"!=typeof a?(a=0,e=t,r=n,i=1):"number"==typeof e&&"number"==typeof r&&"number"==typeof i||(e=t,r=n,i=a,t=0,n=0,a=0),t==e&&n==r&&a==i)throw new Error("It's not a legitimate ray!");var o=Math.sqrt((e-t)*(e-t)+(r-n)*(r-n)),u=0!=o?(r-n)/o:1,p=0!=o?(e-t)/o:0,c=(e-t)*p+(r-n)*u,f=i-a,s=Math.sqrt(c*c+f*f),d=0!=s?f/s:1,g=0!=s?c/s:0;return[[u,d*p,p*g,0,-p,u*d,u*g,0,0,-g,d,0,n*p-t*u,a*g-t*p*d-n*u*d,-t*p*g-n*u*g-a*d,1],[u,-p,0,0,d*p,d*u,-g,0,p*g,u*g,d,0,t,n,a,1]]}throw new Error("a1 and b1 is required!")}(e,i,o,u,p,c);return n=r(r(r(f[1],function(t){var n=Math.sin(t),a=Math.cos(t);return[a,n,0,0,-n,a,0,0,0,0,1,0,0,0,0,1]}(t)),f[0]),n),a},scale:function(t,e,i,o,u,p){return n=r(function(t,n,a,e,r,i){return[t,0,0,0,0,n,0,0,0,0,a,0,(e=e||0)-e*t,(r=r||0)-r*n,(i=i||0)-i*a,1]}(t,e,i,o,u,p),n),a},multiply:function(t,e){return n=e?r(n,t):r(t,n),a},use:function(t,a,e,i){var o=r(n,[t,a,e=e||0,i=i||1]);return o[0]=+o[0].toFixed(7),o[1]=+o[1].toFixed(7),o[2]=+o[2].toFixed(7),o[3]=+o[3].toFixed(7),o},value:function(){return n}};return a}function o(t,n){return function(){return new function(){var t=this,n=i();this.rotateEye=function(a,e,r,i,o,u,p){return n.rotate(-a,e,r,i,o,u,p),t},this.moveEye=function(a,e,r,i){return n.move(-a,e,r,i),t},this.rotateBody=function(a,e,r,i,o,u,p){return n.rotate(a,e,r,i,o,u,p),t},this.moveBody=function(a,e,r,i){return n.move(a,e,r,i),t},this.scaleBody=function(a,e,r,i,o,u){return n.scale(a,e,r,i,o,u),t},this.value=function(){return n.value()}}}}function u(t,n){var a=t.painter();return n.depth&&a.openDeep(),function(){return new function(){!function(t,n){n.drawPoint=function(a,e){return t.points(a,e),n},n.drawLine=function(a,e){return t.lines(a,e),n},n.drawStripLine=function(a,e){return t.stripLines(a,e),n},n.drawLoopLine=function(a,e){return t.loopLines(a,e),n},n.drawTriangle=function(a,e){return t.triangles(a,e),n},n.drawStripTriangle=function(a,e){return t.stripTriangles(a,e),n},n.drawFanTriangle=function(a,e){return t.fanTriangles(a,e),n}}(a,this),function(t,n){n.elemPoint=function(a,e,r){return r=r||"byte",t.points(a,e,r),n},n.elemLine=function(a,e,r){return r=r||"byte",t.lines(a,e,r),n},n.elemStripLine=function(a,e,r){return r=r||"byte",t.stripLines(a,e,r),n},n.elemLoopLine=function(a,e,r){return r=r||"byte",t.loopLines(a,e,r),n},n.elemTriangle=function(a,e,r){return r=r||"byte",t.triangles(a,e,r),n},n.elemStripTriangle=function(a,e,r){return r=r||"byte",t.stripTriangles(a,e,r),n},n.elemFanTriangle=function(a,e,r){return r=r||"byte",t.fanTriangles(a,e,r),n}}(a,this)}}}var p={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    void main(){\n        gl_Position=a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "},c={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    uniform mat4 u_matrix;\n    void main(){\n        gl_Position=u_matrix * a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "};function f(t){return{type_default:p,type_camera:c}["type_"+t]}var s=function t(n,a){var r=function(t,n){for(var a in n)try{t[a]=n[a]}catch(t){throw new Error("Illegal property key : "+a)}return t}({depth:!1},a||{}),i=e(n),p=r["vertex-shader"],c=r["fragment-shader"];if(!p||!c){var s=f(r.shader||"default");p=s.vs,c=s.fs}i.shader(p,c),(t.fn=t.prototype).Buffer=function(t,n){return function(n){return new function(){var a=this,e=t.buffer(n);this.write=function(t){return e.write(t),a},n||(this.use=function(t,n,r,i){return e.use(t,n,r,i),a})}}}(i),t.fn.Camera=o(),t.fn.Painter=u(i,r),t.fn.Texture2D=function(t,n){return function(n){return new function(){var a=this,e=t.texture("2d",n);this.write=function(t){return e.useImage(t),a}}}}(i),t.fn.TextureCube=function(t,n){return function(n,a){return new function(){var e=this,r=t.texture("cube");this.write=function(t,i,o,u,p,c){return r.useCube([t,i,o,u,p,c],n,a),e}}}}(i),t.fn.setAttributeFloat=function(t,n,a,e,r){return i["setAttribute"+(arguments.length-1)+"f"](t,n,a,e,r),this},t.fn.setAttributeInt=function(t,n,a,e,r){return i["setAttribute"+(arguments.length-1)+"i"](t,n,a,e,r),this},t.fn.setUniformFloat=function(t,n,a,e,r){return i["setUniform"+(arguments.length-1)+"f"](t,n,a,e,r),this},t.fn.setUniformInt=function(t,n,a,e,r){return i["setUniform"+(arguments.length-1)+"i"](t,n,a,e,r),this},t.fn.setUniformMatrix=function(t,n){var a={4:2,9:3,16:4}[n.length];return i["setUniformMatrix"+a+"fv"](t,n),this}};if(s.core=e,"object"===n(t)&&"object"===n(t.exports))t.exports=s;else{var d=window.image3D;s.noConflict=function(){return window.image3D===s&&(window.image3D=d),s},window.image3D=s}}()}).call(this,a(5)(t))},43:function(t,n,a){var e=a(44);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a(1).default)("data-quickpaper-36912c6e",e,!0)},44:function(t,n,a){(t.exports=a(0)(!1)).push([t.i,"",""])},45:function(t,n,a){var e=a(46);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,a(1).default)("data-quickpaper-fa52a6ae",e,!0)},46:function(t,n,a){n=t.exports=a(0)(!1);var e=a(4),r=e(a(47)),i=e(a(48)),o=e(a(49)),u=e(a(50)),p=e(a(51)),c=e(a(52));n.push([t.i,"\n    div.page {\n        background-image: url("+r+");\n        background-repeat: no-repeat;\n        background-position: 100px bottom;\n    }\n\n    /* 主体划分 */\n    div.page>div {\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    div.page>div.left {\n        text-align: center;\n        width: 300px;\n        padding-bottom: 120px;\n    }\n\n    div.page>div.right {\n        width: 700px;\n    }\n\n    /* 左边样式 */\n    div.page>div.left>.title {\n        padding-top: 200px;\n        background-image: url("+i+");\n        background-repeat: no-repeat;\n        background-position: center 30px;\n        font-size: 20px;\n        font-weight: 800;\n    }\n\n    div.page>div.left>.title>span {\n        display: block;\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 2em;\n    }\n\n    div.page>div.left>.belief {\n        line-height: 2em;\n        color: gray;\n    }\n\n    div.page>div.left>.fork {\n        color: rgb(90, 86, 86);\n        border: 1px solid rgb(202, 199, 199);\n        padding: 5px 10px;\n        display: inline-block;\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        margin-top: 10px;\n    }\n\n    div.page>div.left>.fork:hover {\n        text-decoration: underline;\n        color: rgb(245, 12, 12);\n        border-color: rgb(236, 49, 49);\n    }\n\n    div.page>div.left>.link {\n        padding-top: 20px;\n    }\n\n    div.page>div.left>.link>a {\n        background-image: url("+o+");\n        padding-top: inherit;\n        background-repeat: no-repeat;\n        background-position-y: -9px;\n        width: 50px;\n        font-size: 12px;\n        display: inline-block;\n        color: rgb(0, 0, 0);\n        font-weight: 800;\n    }\n\n    div.page>div.left>.link>a.github {\n        background-position-x: 6px;\n    }\n\n    div.page>div.left>.link>a.npm {\n        background-position-x: -124px;\n    }\n\n    div.page>div.left>.link>a.oschina {\n        background-position-x: -242px;\n    }\n\n    div.page>div.left>.link>a.sf {\n        background-position-x: -390px;\n    }\n\n    div.page>div.left>.cat {\n        background-image: url("+u+");\n        background-repeat: no-repeat;\n        background-position: center center;\n        height: 260px;\n        background-size: 100% auto;\n        font-size: 0;\n    }\n\n    div.page>div.left>.license {\n        background-image: url("+p+");\n        height: 80px;\n        display: block;\n        background-repeat: no-repeat;\n        background-position: center center;\n        margin-top: 30px;\n    }\n\n    div.page>div.left>.counter>img {\n        margin-top: 20px;\n    }\n\n    /* 右边顶部说明 */\n\n    div.page>div.right>.stepbystep>h2 {\n        line-height: 3em;\n        background-image: url("+c+");\n        background-position: 350px center;\n        background-size: auto 80%;\n        background-repeat: no-repeat;\n        color: red;\n    }\n\n    div.page>div.right>.stepbystep>p {\n        text-indent: 2em;\n        padding: 5px;\n        line-height: 1.4em;\n    }\n\n    div.page>div.right>.stepbystep>p.right {\n        text-align: right;\n        font-size: 14px;\n        font-weight: 800;\n    }\n\n    /* 右边底部链接 */\n    div.page>div.right>.footer-link {\n        border-top: 1px solid rgb(187, 183, 183);\n        margin-top: 10px;\n        font-family: monospace;\n        text-align: center;\n    }\n\n    div.page>div.right>.footer-link>li {\n        display: inline-block;\n        vertical-align: top;\n        width: 25%;\n        padding: 10px;\n        text-align: left;\n    }\n\n    div.page>div.right>.footer-link>li>h2 {\n        font-size: 16px;\n        padding: 20px 0;\n    }\n\n    div.page>div.right>.footer-link>li>a {\n        display: block;\n        color: rgb(70, 73, 73);\n        font-weight: 200;\n        margin-bottom: 20px;\n\n    }\n\n    div.page>div.right>.footer-link>li>a:hover {\n        text-decoration: underline;\n    }\n\n    /* 其它 */\n    div.page>div.right>h2 {\n        margin-top: 30px;\n    }\n\n    /* 猫 */\n    .cat-page {\n        background: #d0c1c1;\n        margin: 30px 50px 50px 50px;\n        padding: 30px;\n    }\n\n    .cat-page>h4 {\n        font-weight: 800;\n        padding-bottom: 10px;\n    }\n\n    .cat-page>p {\n        text-indent: 2em;\n        line-height: 1.6em;\n        font-size: 14px;\n        color: rgb(16, 15, 15);\n    }\n\n    .cat-page>p.mark {\n        text-indent: 0;\n        margin: 20px 0;\n    }\n\n    .cat-page>p.mark>div {\n        text-align: right;\n    }\n",""])},47:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABUCAMAAAAI7rEmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFor1mcIpCiqRTTVg3mLRcrbqVu8eltNBulrJc2uLMcoxE+Pr1utRwsc5uZHJNgZxMdpBFaoU9mrVgbog/3eLS6u7ibIZAjqFpobODhJpcdY5IdpBKa4Y9fplLjahVwsysaYQ6eZRFcYtBtMGcwtx5nblh7PDl8vXtZYI1tdFwq8dyh6JTvth0udNwutlzu9h0zNW59vjyeZJMutZyhaFOdoFocX9ZcIpFvdhzj6NqobttbohArcpqpcFlvNd2rslssMxyudZ0iZ5kvNl0sLWoutV6doVa/P36do5MXWlIx9G1kqNwqMRmepVJkKxW4unWVmU9Z4I5k69YlK5hpMBqm6t99PfwqcZpt9Rw+vz4w86x/v79c45GeZFQsb6XztDGjahd3+XVeJJIytaz5urcqsZtv9l5gJVV5OnZfZVWm69+fZZSZ4E4nLle7vLo0NnCmrRnudNytdNws8ST2NrSudZxvt13qLaM/v/8eZRNfJdJnrhsutZw0t3FlalypbSHvtlzb4hCc45ChJ9Q1d7GcIlKjKRdfJZNvth3+vv46O3fqrmOuNZyZH80gJlTj6tXs85umat2/f78eY5M5+vfc4xIcYw+l7FhuNJvfJJRvNl3gJhXlK9dvNp0vNty1t7J9Pbvvdp2gZZdsc1r8PDur8ttpsNmgZtSpsFjv9p2q8lrkqxdu9ZytNF2b4lEaYM8a4o90Ni94+nYl6p3rMdpfpZYhZ1Yb4pCuNV3fZNUhJpXqshna4Y6gp1Ov9p0vNhxb4o/a4lBr81qaog68vTroL1gepJVaIQ1fJVRkKpeo8BjbIhAutRyu9VyvNZyvddzvNZzvNdyutVxu9dzvddyutRzu9V0vdZz5+7cudVzu9RxqcJo/f38cIxAzde+oLCDoqaa2NvPdI1NobdokKZvw9Cc0uC70NbAr8hui5V9u9pvc4pHhIx2vtdz9PjstNFx8PPrfptGsstvcIdGlbBZg55VbYg84u/Fv910iJ1fobB/bItA0tvCutRx////////MqBa3wAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAqPSURBVHja7JgLVFP3GcCTNLxuiNybyFVyk3ATjICEpDzaBINRSTeiAhqkGjBhkoqWCr5WbMEqJLQFBItFA4pgRYdKpdAq1aqh3D7QFvMgQWyh0u44trm5zs62rNYlLgkBggTFnZ2zs3P65SSHfPf+f/nu//+9+HD3/yuC+wXzf4xZQzryXShpzbiimvTlqzv95qY/FmbVnyteWPam1782jS4LXVoUFK28NCvk9JppY9KDpbl7cmUyGXI+7r3rdsX1pbcu75GhbW2yXF3md9PEbDqDoioCBZfGOVWqpYWk30/3CkNfiyDicH94XdsmE/hNC0NKABT15Lo6Ca+xrompADJJRWHQ6/PqGhuE68turqWFqb+cBiaxaF90WrPR6hRTD0X12ZCO+vmviv0d3/1NkjQFejD00Zisfcraw9ZRMTSeQqhoifhan0thaUjTot9UPwpjK0JLF5nHMFbuHRpEzS4eV1jnrNSpdz8KQzoPrZzDLSvj2kVof3/Yl9z2I6/TbDaaTCahUMgta14EXA5+FCYQFp3dsmPl57U7ttRvmb9jy475Cqj29sXs7EXzstPmz99xau3az2noLtdT2SZhovyCvSoyN4fQ750TtMLwa6+1am/cuKG98b5AdGKjAkCkUq1AoG1Vq9WCc/BBkmPFzOCiisAJmPKlQefoKHo5F75yD6/A0yERpKZpCwTqG++fg/GA7pNPdEAbHVCwz51TsLGPtBV+u/3icoBB3dEoN0zULhEdggV4NiaC8SE7v15qF+9fL1lhl6dv0eOGEobOzH6pYtmMGQ6NVvnRldw9AgRhAbfU0PPjmPS4y8Ng1YKFN2+2p9JqnrM55cUlTzhkyffobBKp2qF5xql4YsYlEchkYDCmAdQieN04JiPsXuzq/M6r5p4P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"},48:function(t,n,a){t.exports=a.p+"dist/girl-hai2007.png"},49:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAAgCAMAAACSJAeKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFXmFlO7ZYIqZ0+fz7QLZY7e7uK6p7RkpP6Onodnl8VLqVQ7SKw8TFAJJVNq1VPbZYxgAAAppiPrNWAJZc2UlJ09TViYuOyAAA2N/cKS4zJisxpMG00dLT/vz8ycrLNpVZPbKGAJlgwtDKEaBqWFtfsd/OfYGDhrOc2dvbMqZSOqpU2vDoLDE2TJ1rXZ57KZJN0djVm9fBg4aJAJRY3mJiNa6AvL2/YKN8PKxWgYSHqt3KS05SbnF16/byDp9p8PDwirSf2klJf8yvODxBzhERSbaNJCkuzxUV9vb38vj27/j17PfzJSovMa1/gq+aUpdyKJdLxsjIPrhZ32RkPLJWPq5XPq5YO6xVLzQ5lruqKphMLZJPda2PaaiFPK1VIygu/////v7+AJphywMDywAAAZphygAA/Pz8/f39ywIC2kpKAJxiAJZb2ktL/v//AZpiAJhe+/v7OapU9fX2+fn5+/DwP7VX/PHx+Pj48Pj1AJlf/PX1O6tVPEBF/f79QblaQ7hZAZheSbpe8/Pz/fz8en2A9fX1QLlZAZlfrd7L219ffK+VAJRXMppVyuneBJhfUbSJteLRvuXW8fLyxM/KApphWqR3AJddAI9RywEBVJpz4Gxs+fr62kxMF6BrAIZC//7/ccam1tfYptrH656eOrJYL6RRP7BY/P38ydTQy8zNAJNXuszE1e7l3+Xi2O/mOrRYitC3PrFW2d3cRLVakbelMpdVrcW60B0dOZRbt8rCv8DBKJVLBZxjBZtk1dbW9fj2qdvIob6yrt7NAJpgBZxkCZ1mAZpgAptiLppQBJtjGKFtQURJYqGAAplgptvIKZVNPbBVFJ1m4eLi/v7/5ebmAJVZOalUT1NXJiov+/39EqBrLo5UFKFtRLpb8/T0grGYYL6bV6N0XqF78vn2OKhTywQEkdK6k9O8ltW9R55noqSmpaeppqipP69YQ7laZ2tt3N/eNZFaTbeP3FhY6+zskpWXAJhf9fr4AZhf4uPkuuPTwgAAUVZZVFhc////mywbMAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAP2SURBVHjaYvg/CoYSYBgNgtH4GgWj8TUKRuNrNL5GwWh8jYLR+BqNr1EwEPEV2GrtfObD68sD45iUtJRkOABy6Gfziv//N28/tKt5kMSKabZgahIQKCblFzSeyzbFEV8eRjo+bm5uPpK13yoGJL5S0sThIC2FjvH1XylWfk/UBd3IwRFf2Yrg6AJGWI7d3aOK2VjjK72YQQoYXT4gLMlQnDEA8SXunisikpWV5SgikusuTsf48tsTVHZxk1A73yyOwRBfJ5KSQBGmqJiz0Dah78RU7PnLUlLlzd8IdnadG28ZJI0GwJmZArkJeXkJQAAkcwUy6WRt+n8HzYY4rXfLi2q2MPoPhvhKPZKadOJEfqowU13CJKeOVKzxJScpyZnY/Kui5OrkRDVJnVX0d2ayuEhiRkZiIjDCMhJFxJPpZa+B/r3rcSx8fGUWT5s2OAyC+EpSzK+6Ziyc2qOQWLmXNykJa3xx+vioFUKYhZY+NzkHIH9B4qt6dteSRGB80St//Y9hDA0P2amuLs/CwnfybPrAx5diUs4xBVem1H6uRC82u+/Y44vdTXLRf6hjNXR82Acif2UlJMomlM788yUhwZFu+Stdt76GRX5zRobBnVfqBoOhPMzPYVsLLGScTBMSmRM28p7CGl86Ps5tcC+w++gMUHxlJJS7CwQn0jG+7OXL3m2ISTwwJ3Fd2+BoH6bmHEzonGDINc8q4cdL12uCWONL0i3iK9wLzm6SAxdfLgLBCfSNrzDG2MQVdYnp/wdJfAmrJpy/NCNntW9CZYFxkiKO8tDN7D+4Aiv5b+bjxj5i4us/qDzcNiUxUenTtMiPgyG+BK9xeyVcOci0mjvhye2fijjaG1IRtfshTFF2KZ+Bam+0JJa6CJjQtb3RvfRduFD048fRLEGavXolg6C9kc/L9Nw74fdq7jxP5YIO7PEV6CZm48Mg9/+/jE2Em5SU3AC15xHxRbf8JaH/vqhGiJ9fqEarifHBYGjPT2e7Pf8hs7eiwi0v5QIc7fn/aj4yYgwawMahm5uOlOXA9ZerweVhFh37y1uXNcQVWVgUWQyS/vLxfu0nhusTDvO6Jiy43ZiKvb+cXviPfTcoVzU7u0kxeAxA3QsdjxJ5Jr5jbhZ9x6MC2oWAoF1Tj3VQjEd1fJ5oq/3i9Gpf1cV2BUknsOev/yWtPvHAJiKrj6TlgI73poFo+o73rjGPjorSfyQ9ONqH2YrXck4IGhckVU2frngCx3gvuA4TK/7/v1iMZ2CcCZ1PyUxJm0nn+RQgWCktrTRImvP/TbP3nahSPJGqmJSamiqIcz5lFAx6MBpfo/E1CkbjaxSMxtdofI2C0fgaBcgAIMAArnWESZSxWY4AAAAASUVORK5CYII="},50:function(t,n,a){t.exports=a.p+"dist/cat.jpeg"},51:function(t,n){t.exports="data:image/png;base64,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"},52:function(t,n,a){t.exports=a.p+"dist/dream.png"}}]);