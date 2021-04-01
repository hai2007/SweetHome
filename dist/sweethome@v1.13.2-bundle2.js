(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{135:function(r,t,n){"use strict";n.r(t);var e=n(56),a=n.n(e),i=!0,o={methods:{openlink:function(){window.location.href="https://hai2007.gitee.io/image3d/"},doRestart:function(){i=!0},doStop:function(){i=!1}},mounted:function(){var r=new a.a(document.getElementById("skybox"),{"vertex-shader":"attribute vec4 a_position;\n            varying vec3 v_normal;\n            uniform mat4 u_matrix;\n            void main(){\n                gl_Position=u_matrix * a_position;\n                // 因为位置是以几何中心为原点的,可以用顶点坐标作为法向量\n                v_normal=normalize(a_position.xyz);\n            }","fragment-shader":"precision mediump float;\n            varying vec3 v_normal;\n            uniform samplerCube u_texture;\n            void main(){\n                gl_FragColor=textureCube(u_texture,normalize(v_normal));\n            }",depth:!0}),t=new Float32Array([.5,.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,0,0,.8,0,0,-.8,.8,0,0,-.8,0,0,0,.8,0,0,-.8,0]),n=new Uint8Array([0,1,8,1,2,8,2,3,8,0,3,8,4,5,9,5,6,9,6,7,9,4,7,9,0,1,10,1,5,10,4,5,10,0,4,10,2,6,11,6,7,11,3,7,11,2,3,11,0,3,12,3,7,12,4,7,12,4,0,12,1,2,13,1,5,13,5,6,13,2,6,13]);r.Buffer().write(t).use("a_position",3,3,0),r.Buffer(!0).write(n);var e=r.TextureCube(500,500),o=new Image;o.onload=function(){var t=new Image;t.onload=function(){var n=new Image;n.onload=function(){var a=new Image;a.onload=function(){var u=new Image;u.onload=function(){var c=new Image;c.onload=function(){e.write(o,t,n,a,u,c),r.setUniformInt("u_texture",e);var p,s,f,g=r.Camera(),d=r.Painter(),l=0;setInterval((function(){var t;t=0==i?50:15,0==l?(p=100*Math.random(),s=30*Math.random(),f=10*Math.random(),l=5):l-=1,g.rotateBody(Math.PI/t,p,-1*s,f,-1*p,s,-1*f),r.setUniformMatrix("u_matrix",g.value()),d.elemTriangle(0,72)}),50)},c.src="src/assets/skybox/front.jpg"},u.src="src/assets/skybox/back.jpg"},a.src="src/assets/skybox/bottom.jpg"},n.src="src/assets/skybox/top.jpg"},t.src="src/assets/skybox/left.jpg"},o.src="src/assets/skybox/right.jpg"}};n(57);o.render=function(r){return r("div",{quickpaper:"","data-quickpaper-c2c9482e":""},[r("canvas",{id:"skybox",width:"300px",height:"300px",title:"点击我查看image3D文档","@click":"openlink()","@mouseover":"doStop()","@mouseout":"doRestart()","data-quickpaper-c2c9482e":""},[])])};var u={data:function(){return{counterUrl:window.hai2007_sweethome_counterUrl}},mounted:function(){this.changeActive("menu-1","home")},component:{uiSkybox:o}};n(59);u.render=function(r){return r("div",{quickpaper:"","data-quickpaper-4633c27a":""},[r("div",{class:"page","data-quickpaper-4633c27a":""},[r("div",{class:"left","data-quickpaper-4633c27a":""},[r("div",{class:"title","data-quickpaper-4633c27a":""},["你好2007",r("span",{"data-quickpaper-4633c27a":""},["@hai2007"])]),r("div",{class:"belief","data-quickpaper-4633c27a":""},["走一步，再走一步。"]),r("a",{class:"fork",href:"https://github.com/hai2007/SweetHome",target:"_blank","data-quickpaper-4633c27a":""},["Fork me on Github"]),r("div",{class:"link","data-quickpaper-4633c27a":""},[r("a",{href:"https://github.com/hai2007",class:"github",target:"_blank","data-quickpaper-4633c27a":""},["Github"]),r("a",{href:"https://www.npmjs.com/~hai2007",class:"npm",target:"_blank","data-quickpaper-4633c27a":""},["NPM"]),r("a",{href:"https://my.oschina.net/u/4252568",class:"oschina",target:"_blank","data-quickpaper-4633c27a":""},["OSCHINA"]),r("a",{href:"https://segmentfault.com/u/hai2007/articles",class:"sf",target:"_blank","data-quickpaper-4633c27a":""},["思否"])]),r("div",{class:"cat","data-quickpaper-4633c27a":""},["一只陪伴了我十六年的猫"]),r("a",{class:"license",href:"#/license",target:"_blank",title:"查看开源协议权限规则","data-quickpaper-4633c27a":""},[]),r("ui-skybox",{"data-quickpaper-4633c27a":""},[]),r("a",{class:"counter",href:"https://info.flagcounter.com/bdd0",target:"_blank","data-quickpaper-4633c27a":""},[r("img",{":src":"counterUrl","data-quickpaper-4633c27a":""},[])])]),r("div",{class:"right","data-quickpaper-4633c27a":""},[r("div",{class:"stepbystep","data-quickpaper-4633c27a":""},[r("h2",{"data-quickpaper-4633c27a":""},["What I Believe"]),r("p",{"data-quickpaper-4633c27a":""},["我还惊讶地意识到，在我生命中有很多时刻，每当我遇到一个遥不可及、令人害怕的情境，↵                    并感到惊慌失措时，我都能够应付——因为我回想起了很久以前自己上过的那一课。"]),r("p",{"data-quickpaper-4633c27a":""},["我提醒自己不要看下面遥远的岩石，而是注意相对轻松、容易的第一小步，迈出一小步、再↵                    一小步，就这样体会每一步带来的成就感，直到完成了自己想要完成的，达到了自己的目标，然↵                    后再回头看时，不禁对自己走过的这段漫漫长路感到惊讶和自豪。"]),r("p",{class:"right","data-quickpaper-4633c27a":""},["———— 摘自 莫顿·亨特《走一步，再走一步》"])]),r("div",{class:"cat-page","data-quickpaper-4633c27a":""},[r("h4",{"data-quickpaper-4633c27a":""},["由老猫的离世而引发的追忆"]),r("p",{"data-quickpaper-4633c27a":""},["去年冬天的一个周末，大学室友小孩出生，从南京出发刚到达合肥南，打算从这转车去淮南。由于离下一班车开还有一会，就打个电话回去，问问家里近来情况。"]),r("p",{"data-quickpaper-4633c27a":""},["从母亲口中得知老猫早在去年（2019年）夏天就离开了这个世界，十六年，整整十六年，从小学四年级那个夏天开始。"]),r("p",{"data-quickpaper-4633c27a":""},["03年夏的一个普通日子里，大姨夫骑着自行车带了一只刚出生没多久的猫来到我家，因为刚刚从无锡回到老家，母亲准备养只猫捉老鼠。"]),r("p",{"data-quickpaper-4633c27a":""},["刚见到她时，并不十分认生，小小的一团，叫声很小却清脆。家里还养了一只狗，开始会欺负她，等长大了，她总会把狗抓得嗷嗷叫。他们平时可能因为一点食物大打出手，但当有邻居家的狗来我家门口“挑衅”，却又总能出奇的一致对外；而在冬天，猫习惯性地卷成一团睡在狗的身上，当然，狗也是卷成一团在那打呼。"]),r("p",{"data-quickpaper-4633c27a":""},["咪的（老猫的名字）特别爱干净，经常看见她在河边洗澡，用舌头舔自己的毛发，有时也会用尾巴钓鱼，在夏天的时候。但却一直提防着我，当我走向河边的时候，可能是之前多次把她抓住按在河里给她洗澡，她讨厌水的感觉吧！"]),r("p",{"data-quickpaper-4633c27a":""},["她经常会吃一些青草，特别是雨后，并不多，一点点。当然，她喜欢在夏夜捉蚱蜢吃我也是知道的，因为我总会帮她一起捉，在院子里，拿在手中给她的时候都会先轻轻咬一下，等我手离开后，才会一口猛咬，狼吞虎咽的吃下去。"]),r("p",{"data-quickpaper-4633c27a":""},["回忆起来，都是一些锁事，但手摸过她后背的那种感觉，到今天，都依旧那么真实。"]),r("p",{"data-quickpaper-4633c27a":""},["在她生活的十几年里，狗换了一只又一只（农村有人偷狗，特别是冬天，可能一夜就没了）。记得有一只小狗养了没多久就生病去世了，等狗完全失去生命特征，我把他带到河里扔了，而当我有时路过那附近时，时常会看见她一个蹲在河岸往下看。"]),r("p",{"data-quickpaper-4633c27a":""},["我不知道她是否明白生死，是否知道死亡意味着什么，只是，她一定很想念小狗。"]),r("p",{"data-quickpaper-4633c27a":""},["因为一些原因，后来就没有养过狗了，咪的也总是独处，特别是上了大学到现在工作，回家的次数也越来越少，以至于老猫去世半年才知道。"]),r("p",{"data-quickpaper-4633c27a":""},["刚认识她时才十岁，转眼时光飞逝！"]),r("p",{"data-quickpaper-4633c27a":""},["这几天总会想起来你小时候，特别是冬天，你喜欢躲在我被窝里，虽然我妈不许你在房间里过夜，好在你不叫，大多数都没被发现。昨天做梦，又梦到你了，半夜醒来，对着窗外，久久发呆······"]),r("p",{"data-quickpaper-4633c27a":""},["不知你在那边过得怎么样，没能在最后一刻陪你，我真得很抱歉。"]),r("p",{"data-quickpaper-4633c27a":""},["我想这一生，都不会忘记你，当然，还有那些和你一起生活过的小狗们。"]),r("p",{class:"mark","data-quickpaper-4633c27a":""},["当我仰望星空的时候、当我疲于工作或学习的时候、当我此刻在灯光下记录这一切的时候，那些令我感动的东西，我一直与你们同在。",r("div",{"data-quickpaper-4633c27a":""},["-------- 后记"])])]),r("ul",{class:"footer-link","data-quickpaper-4633c27a":""},[r("li",{"data-quickpaper-4633c27a":""},[r("h2",{"data-quickpaper-4633c27a":""},["官方地址"]),r("a",{href:"https://www.w3.org/",target:"_blank","data-quickpaper-4633c27a":""},["万维网联盟(w3c)"]),r("a",{href:"https://www.khronos.org/webgl/",target:"_blank","data-quickpaper-4633c27a":""},["WebGL"])]),r("li",{"data-quickpaper-4633c27a":""},[r("h2",{"data-quickpaper-4633c27a":""},["有用的资源"]),r("a",{href:"https://emojipedia.org/",target:"_blank","data-quickpaper-4633c27a":""},["表情文字"])]),r("li",{"data-quickpaper-4633c27a":""},[r("h2",{"data-quickpaper-4633c27a":""},["其它"]),r("a",{href:"#/aboutUS",target:"_blank","data-quickpaper-4633c27a":""},["关于我们"]),r("a",{href:"#/Sponsors",target:"_blank","data-quickpaper-4633c27a":""},["捐款支持我们"])])])])])])};t.default=u},56:function(r,t,n){"use strict";(function(r){
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
var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};!function(){var n=function(r,t,n){var e=r.createShader(t);if(null==e)throw new Error("Unable to create shader!");if(r.shaderSource(e,n),r.compileShader(e),!r.getShaderParameter(e,r.COMPILE_STATUS))throw new Error("Failed to compile shader:"+r.getShaderInfoLog(e));return e};function e(r,t){var e=function(r,t){var n=["webgl","experimental-webgl","webkit-3d","moz-webgl"],e=null,a=void 0;for(a=0;a<n.length;a++){try{e=r.getContext(n[a],t)}catch(r){}if(e)break}return e}(r,t),a={painter:function(){return function(r){var t={byte:r.UNSIGNED_BYTE,short:r.UNSIGNED_SHORT};return{openDeep:function(){return r.enable(r.DEPTH_TEST),this},points:function(n,e,a){return a?r.drawElements(r.POINTS,e,t[a],n):r.drawArrays(r.POINTS,n,e),this},lines:function(n,e,a){return a?r.drawElements(r.LINES,e,t[a],n):r.drawArrays(r.LINES,n,e),this},stripLines:function(n,e,a){return a?r.drawElements(r.LINE_STRIP,e,t[a],n):r.drawArrays(r.LINE_STRIP,n,e),this},loopLines:function(n,e,a){return a?r.drawElements(r.LINE_LOOP,e,t[a],n):r.drawArrays(r.LINE_LOOP,n,e),this},triangles:function(n,e,a){return a?r.drawElements(r.TRIANGLES,e,t[a],n):r.drawArrays(r.TRIANGLES,n,e),this},stripTriangles:function(n,e,a){return a?r.drawElements(r.TRIANGLE_STRIP,e,t[a],n):r.drawArrays(r.TRIANGLE_STRIP,n,e),this},fanTriangles:function(n,e,a){return a?r.drawElements(r.TRIANGLE_FAN,e,t[a],n):r.drawArrays(r.TRIANGLE_FAN,n,e),this}}}(e)},shader:function(r,t){return e.program=function(r,t,e){var a=n(r,r.VERTEX_SHADER,t),i=n(r,r.FRAGMENT_SHADER,e),o=r.createProgram();if(r.attachShader(o,a),r.attachShader(o,i),r.linkProgram(o),!r.getProgramParameter(o,r.LINK_STATUS))throw new Error("Failed to link program: "+r.getProgramInfoLog(o));return r.useProgram(o),o}(e,r,t),a},buffer:function(r){!function(r,t){var n=r.createBuffer(),e=t?r.ELEMENT_ARRAY_BUFFER:r.ARRAY_BUFFER;r.bindBuffer(e,n)}(e,r);var t=void 0,n={write:function(a,i){return i=i||e.STATIC_DRAW,function(r,t,n,e){var a=e?r.ELEMENT_ARRAY_BUFFER:r.ARRAY_BUFFER;r.bufferData(a,t,n)}(e,a,i,r),t=a,n},use:function(r,a,i,o,u,c){var p=t.BYTES_PER_ELEMENT;return"string"==typeof r&&(r=e.getAttribLocation(e.program,r)),i=i||0,o=o||0,u=u||e.FLOAT,function(r,t,n,e,a,i,o){r.vertexAttribPointer(t,n,e,o||!1,a||0,i||0),r.enableVertexAttribArray(t)}(e,r,a,u,i*p,o*p,c),n}};return n},texture:function(r,t){var n={"2d":e.TEXTURE_2D,cube:e.TEXTURE_CUBE_MAP}[r],a=function(r,t,n,e){var a=r.createTexture();return"2d"==e&&(n=n||0,r.activeTexture(r["TEXTURE"+n])),r.bindTexture(t,a),a}(e,n,t,r);e.texParameteri(n,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(n,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(n,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);var i={useImage:function(r,t,a,o){return function(r,t,n,e,a,i){e={rgb:r.RGB,rgba:r.RGBA,alpha:r.ALPHA}[e]||r.RGBA,r.texImage2D(t,n||0,e,e,{}[a]||r.UNSIGNED_BYTE,i)}(e,n,t,a,o,r),i},useCube:function(r,t,i,o,u,c){!function(r,t,n,e,a,i,o,u,c){e={rgb:r.RGB,rgba:r.RGBA,alpha:r.ALPHA}[e]||r.RGBA,n=n||0,a={}[a]||r.UNSIGNED_BYTE;var p=[r.TEXTURE_CUBE_MAP_POSITIVE_X,r.TEXTURE_CUBE_MAP_NEGATIVE_X,r.TEXTURE_CUBE_MAP_POSITIVE_Y,r.TEXTURE_CUBE_MAP_NEGATIVE_Y,r.TEXTURE_CUBE_MAP_POSITIVE_Z,r.TEXTURE_CUBE_MAP_NEGATIVE_Z],s=void 0,f=void 0;for(s=0;s<p.length;s++)f=p[s],r.texImage2D(f,n,e,o,u,0,e,a,null),r.bindTexture(t,c),r.texImage2D(f,n,e,e,a,i[s]);r.generateMipmap(t)}(e,n,o,u,c,r,t,i,a)}};return i}},i=function(r){return{setAttribute1f:function(t,n){var e=r.getAttribLocation(r.program,t);r.vertexAttrib1f(e,n)},setAttribute2f:function(t,n,e){var a=r.getAttribLocation(r.program,t);r.vertexAttrib2f(a,n,e)},setAttribute3f:function(t,n,e,a){var i=r.getAttribLocation(r.program,t);r.vertexAttrib3f(i,n,e,a)},setAttribute4f:function(t,n,e,a,i){var o=r.getAttribLocation(r.program,t);r.vertexAttrib4f(o,n,e,a,i)},setAttribute1i:function(t,n){var e=r.getAttribLocation(r.program,t);r.vertexAttrib1i(e,n)},setAttribute2i:function(t,n,e){var a=r.getAttribLocation(r.program,t);r.vertexAttrib2i(a,n,e)},setAttribute3i:function(t,n,e,a){var i=r.getAttribLocation(r.program,t);r.vertexAttrib3i(i,n,e,a)},setAttribute4i:function(t,n,e,a,i){var o=r.getAttribLocation(r.program,t);r.vertexAttrib4i(o,n,e,a,i)},setUniform1f:function(t,n){var e=r.getUniformLocation(r.program,t);r.uniform1f(e,n)},setUniform2f:function(t,n,e){var a=r.getUniformLocation(r.program,t);r.uniform2f(a,n,e)},setUniform3f:function(t,n,e,a){var i=r.getUniformLocation(r.program,t);r.uniform3f(i,n,e,a)},setUniform4f:function(t,n,e,a,i){var o=r.getUniformLocation(r.program,t);r.uniform4f(o,n,e,a,i)},setUniform1i:function(t,n){var e=r.getUniformLocation(r.program,t);r.uniform1i(e,n)},setUniform2i:function(t,n,e){var a=r.getUniformLocation(r.program,t);r.uniform2i(a,n,e)},setUniform3i:function(t,n,e,a){var i=r.getUniformLocation(r.program,t);r.uniform3i(i,n,e,a)},setUniform4i:function(t,n,e,a,i){var o=r.getUniformLocation(r.program,t);r.uniform4i(o,n,e,a,i)},setUniformMatrix2fv:function(t,n){var e=r.getUniformLocation(r.program,t);r.uniformMatrix2fv(e,!1,n)},setUniformMatrix3fv:function(t,n){var e=r.getUniformLocation(r.program,t);r.uniformMatrix3fv(e,!1,n)},setUniformMatrix4fv:function(t,n){var e=r.getUniformLocation(r.program,t);r.uniformMatrix4fv(e,!1,n)}}}(e);for(var o in i)a[o]=i[o];return a}var a=function(r,t){for(var n=[],e=0;e<4;e++)for(var a=0;a<t.length/4;a++)n[4*a+e]=r[e]*t[4*a]+r[e+4]*t[4*a+1]+r[e+8]*t[4*a+2]+r[e+12]*t[4*a+3];return n};function i(r){var t=r||[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n={move:function(r,e,i,o){return t=a(function(r,t,n,e){e=e||0;var a=Math.sqrt(t*t+n*n+e*e);return[1,0,0,0,0,1,0,0,0,0,1,0,t*r/a,n*r/a,e*r/a,1]}(r,e,i,o),t),n},rotate:function(r,e,i,o,u,c,p){var s=function(r,t,n,e,a,i){if("number"==typeof r&&"number"==typeof t){if("number"!=typeof n?(n=0,e=r,a=t,i=1):"number"==typeof e&&"number"==typeof a&&"number"==typeof i||(e=r,a=t,i=n,r=0,t=0,n=0),r==e&&t==a&&n==i)throw new Error("It's not a legitimate ray!");var o=Math.sqrt((e-r)*(e-r)+(a-t)*(a-t)),u=0!=o?(a-t)/o:1,c=0!=o?(e-r)/o:0,p=(e-r)*c+(a-t)*u,s=i-n,f=Math.sqrt(p*p+s*s),g=0!=f?s/f:1,d=0!=f?p/f:0;return[[u,g*c,c*d,0,-c,u*g,u*d,0,0,-d,g,0,t*c-r*u,n*d-r*c*g-t*u*g,-r*c*d-t*u*d-n*g,1],[u,-c,0,0,g*c,g*u,-d,0,c*d,u*d,g,0,r,t,n,1]]}throw new Error("a1 and b1 is required!")}(e,i,o,u,c,p);return t=a(a(a(s[1],function(r){var t=Math.sin(r),n=Math.cos(r);return[n,t,0,0,-t,n,0,0,0,0,1,0,0,0,0,1]}(r)),s[0]),t),n},scale:function(r,e,i,o,u,c){return t=a(function(r,t,n,e,a,i){return[r,0,0,0,0,t,0,0,0,0,n,0,(e=e||0)-e*r,(a=a||0)-a*t,(i=i||0)-i*n,1]}(r,e,i,o,u,c),t),n},multiply:function(r,e){return t=e?a(t,r):a(r,t),n},use:function(r,n,e,i){var o=a(t,[r,n,e=e||0,i=i||1]);return o[0]=+o[0].toFixed(7),o[1]=+o[1].toFixed(7),o[2]=+o[2].toFixed(7),o[3]=+o[3].toFixed(7),o},value:function(){return t}};return n}function o(r,t){return function(){return new function(){var r=this,t=i();this.rotateEye=function(n,e,a,i,o,u,c){return t.rotate(-n,e,a,i,o,u,c),r},this.moveEye=function(n,e,a,i){return t.move(-n,e,a,i),r},this.rotateBody=function(n,e,a,i,o,u,c){return t.rotate(n,e,a,i,o,u,c),r},this.moveBody=function(n,e,a,i){return t.move(n,e,a,i),r},this.scaleBody=function(n,e,a,i,o,u){return t.scale(n,e,a,i,o,u),r},this.value=function(){return t.value()}}}}function u(r,t){var n=r.painter();return t.depth&&n.openDeep(),function(){return new function(){!function(r,t){t.drawPoint=function(n,e){return r.points(n,e),t},t.drawLine=function(n,e){return r.lines(n,e),t},t.drawStripLine=function(n,e){return r.stripLines(n,e),t},t.drawLoopLine=function(n,e){return r.loopLines(n,e),t},t.drawTriangle=function(n,e){return r.triangles(n,e),t},t.drawStripTriangle=function(n,e){return r.stripTriangles(n,e),t},t.drawFanTriangle=function(n,e){return r.fanTriangles(n,e),t}}(n,this),function(r,t){t.elemPoint=function(n,e,a){return a=a||"byte",r.points(n,e,a),t},t.elemLine=function(n,e,a){return a=a||"byte",r.lines(n,e,a),t},t.elemStripLine=function(n,e,a){return a=a||"byte",r.stripLines(n,e,a),t},t.elemLoopLine=function(n,e,a){return a=a||"byte",r.loopLines(n,e,a),t},t.elemTriangle=function(n,e,a){return a=a||"byte",r.triangles(n,e,a),t},t.elemStripTriangle=function(n,e,a){return a=a||"byte",r.stripTriangles(n,e,a),t},t.elemFanTriangle=function(n,e,a){return a=a||"byte",r.fanTriangles(n,e,a),t}}(n,this)}}}var c={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    void main(){\n        gl_Position=a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "},p={vs:"\n    attribute vec4 a_position;\n    attribute vec4 a_color;\n    attribute float a_size;\n    varying vec4 v_color;\n    uniform mat4 u_matrix;\n    void main(){\n        gl_Position=u_matrix * a_position;\n        gl_PointSize=a_size;\n        v_color=a_color;\n    }\n    ",fs:"\n    precision mediump float;\n    varying vec4 v_color;\n    void main(){\n        gl_FragColor=v_color;\n    }\n    "};function s(r){return{type_default:c,type_camera:p}["type_"+r]}var f=function r(t,n){var a=function(r,t){for(var n in t)try{r[n]=t[n]}catch(r){throw new Error("Illegal property key : "+n)}return r}({depth:!1},n||{}),i=e(t),c=a["vertex-shader"],p=a["fragment-shader"];if(!c||!p){var f=s(a.shader||"default");c=f.vs,p=f.fs}i.shader(c,p),(r.fn=r.prototype).Buffer=function(r,t){return function(t){return new function(){var n=this,e=r.buffer(t);this.write=function(r){return e.write(r),n},t||(this.use=function(r,t,a,i){return e.use(r,t,a,i),n})}}}(i),r.fn.Camera=o(),r.fn.Painter=u(i,a),r.fn.Texture2D=function(r,t){return function(t){return new function(){var n=this,e=r.texture("2d",t);this.write=function(r){return e.useImage(r),n}}}}(i),r.fn.TextureCube=function(r,t){return function(t,n){return new function(){var e=this,a=r.texture("cube");this.write=function(r,i,o,u,c,p){return a.useCube([r,i,o,u,c,p],t,n),e}}}}(i),r.fn.setAttributeFloat=function(r,t,n,e,a){return i["setAttribute"+(arguments.length-1)+"f"](r,t,n,e,a),this},r.fn.setAttributeInt=function(r,t,n,e,a){return i["setAttribute"+(arguments.length-1)+"i"](r,t,n,e,a),this},r.fn.setUniformFloat=function(r,t,n,e,a){return i["setUniform"+(arguments.length-1)+"f"](r,t,n,e,a),this},r.fn.setUniformInt=function(r,t,n,e,a){return i["setUniform"+(arguments.length-1)+"i"](r,t,n,e,a),this},r.fn.setUniformMatrix=function(r,t){var n={4:2,9:3,16:4}[t.length];return i["setUniformMatrix"+n+"fv"](r,t),this}};if(f.core=e,"object"===t(r)&&"object"===t(r.exports))r.exports=f;else{var g=window.image3D;f.noConflict=function(){return window.image3D===f&&(window.image3D=g),f},window.image3D=f}}()}).call(this,n(7)(r))},57:function(r,t,n){var e=n(58);"string"==typeof e&&(e=[[r.i,e,""]]),e.locals&&(r.exports=e.locals);(0,n(2).default)("data-quickpaper-c2c9482e",e,!0)},58:function(r,t,n){(r.exports=n(1)(!1)).push([r.i,"",""])},59:function(r,t,n){var e=n(60);"string"==typeof e&&(e=[[r.i,e,""]]),e.locals&&(r.exports=e.locals);(0,n(2).default)("data-quickpaper-4633c27a",e,!0)},60:function(r,t,n){t=r.exports=n(1)(!1);var e=n(6),a=e(n(61)),i=e(n(62)),o=e(n(63)),u=e(n(64)),c=e(n(65)),p=e(n(66));t.push([r.i,"\r\n    div.page {\r\n        background-image: url("+a+");\r\n        background-repeat: no-repeat;\r\n        background-position: 100px bottom;\r\n    }\r\n\r\n    /* 主体划分 */\r\n    div.page>div {\r\n        display: inline-block;\r\n        vertical-align: top;\r\n    }\r\n\r\n    div.page>div.left {\r\n        text-align: center;\r\n        width: 300px;\r\n        padding-bottom: 120px;\r\n    }\r\n\r\n    div.page>div.right {\r\n        width: 700px;\r\n    }\r\n\r\n    /* 左边样式 */\r\n    div.page>div.left>.title {\r\n        padding-top: 200px;\r\n        background-image: url("+i+");\r\n        background-repeat: no-repeat;\r\n        background-position: center 30px;\r\n        font-size: 20px;\r\n        font-weight: 800;\r\n    }\r\n\r\n    div.page>div.left>.title>span {\r\n        display: block;\r\n        font-size: 14px;\r\n        font-weight: 400;\r\n        line-height: 2em;\r\n    }\r\n\r\n    div.page>div.left>.belief {\r\n        line-height: 2em;\r\n        color: gray;\r\n    }\r\n\r\n    div.page>div.left>.fork {\r\n        color: rgb(90, 86, 86);\r\n        border: 1px solid rgb(202, 199, 199);\r\n        padding: 5px 10px;\r\n        display: inline-block;\r\n        cursor: pointer;\r\n        -webkit-user-select: none;\r\n           -moz-user-select: none;\r\n            -ms-user-select: none;\r\n                user-select: none;\r\n        margin-top: 10px;\r\n    }\r\n\r\n    div.page>div.left>.fork:hover {\r\n        text-decoration: underline;\r\n        color: rgb(245, 12, 12);\r\n        border-color: rgb(236, 49, 49);\r\n    }\r\n\r\n    div.page>div.left>.link {\r\n        padding-top: 20px;\r\n    }\r\n\r\n    div.page>div.left>.link>a {\r\n        background-image: url("+o+");\r\n        padding-top: inherit;\r\n        background-repeat: no-repeat;\r\n        background-position-y: -9px;\r\n        width: 50px;\r\n        font-size: 12px;\r\n        display: inline-block;\r\n        color: rgb(0, 0, 0);\r\n        font-weight: 800;\r\n    }\r\n\r\n    div.page>div.left>.link>a.github {\r\n        background-position-x: 6px;\r\n    }\r\n\r\n    div.page>div.left>.link>a.npm {\r\n        background-position-x: -124px;\r\n    }\r\n\r\n    div.page>div.left>.link>a.oschina {\r\n        background-position-x: -242px;\r\n    }\r\n\r\n    div.page>div.left>.link>a.sf {\r\n        background-position-x: -390px;\r\n    }\r\n\r\n    div.page>div.left>.cat {\r\n        background-image: url("+u+");\r\n        background-repeat: no-repeat;\r\n        background-position: center center;\r\n        height: 260px;\r\n        background-size: 100% auto;\r\n        font-size: 0;\r\n    }\r\n\r\n    div.page>div.left>.license {\r\n        background-image: url("+c+");\r\n        height: 80px;\r\n        display: block;\r\n        background-repeat: no-repeat;\r\n        background-position: center center;\r\n        margin-top: 30px;\r\n    }\r\n\r\n    div.page>div.left>.counter>img {\r\n        margin-top: 20px;\r\n    }\r\n\r\n    /* 右边顶部说明 */\r\n\r\n    div.page>div.right>.stepbystep>h2 {\r\n        line-height: 3em;\r\n        background-image: url("+p+");\r\n        background-position: 350px center;\r\n        background-size: auto 80%;\r\n        background-repeat: no-repeat;\r\n        color: red;\r\n    }\r\n\r\n    div.page>div.right>.stepbystep>p {\r\n        text-indent: 2em;\r\n        padding: 5px;\r\n        line-height: 1.4em;\r\n    }\r\n\r\n    div.page>div.right>.stepbystep>p.right {\r\n        text-align: right;\r\n        font-size: 14px;\r\n        font-weight: 800;\r\n    }\r\n\r\n    /* 右边底部链接 */\r\n    div.page>div.right>.footer-link {\r\n        border-top: 1px solid rgb(187, 183, 183);\r\n        margin-top: 10px;\r\n        font-family: monospace;\r\n        text-align: center;\r\n    }\r\n\r\n    div.page>div.right>.footer-link>li {\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        width: 33.33%;\r\n        padding: 10px;\r\n        text-align: left;\r\n    }\r\n\r\n    div.page>div.right>.footer-link>li>h2 {\r\n        font-size: 16px;\r\n        padding: 20px 0;\r\n    }\r\n\r\n    div.page>div.right>.footer-link>li>a {\r\n        display: block;\r\n        color: rgb(70, 73, 73);\r\n        font-weight: 200;\r\n        margin-bottom: 20px;\r\n\r\n    }\r\n\r\n    div.page>div.right>.footer-link>li>a:hover {\r\n        text-decoration: underline;\r\n    }\r\n\r\n    /* 其它 */\r\n    div.page>div.right>h2 {\r\n        margin-top: 30px;\r\n    }\r\n\r\n    /* 猫 */\r\n    .cat-page {\r\n        background: #d0c1c1;\r\n        margin: 30px 50px 50px 50px;\r\n        padding: 30px;\r\n    }\r\n\r\n    .cat-page>h4 {\r\n        font-weight: 800;\r\n        padding-bottom: 10px;\r\n    }\r\n\r\n    .cat-page>p {\r\n        text-indent: 2em;\r\n        line-height: 1.6em;\r\n        font-size: 14px;\r\n        color: rgb(16, 15, 15);\r\n    }\r\n\r\n    .cat-page>p.mark {\r\n        text-indent: 0;\r\n        margin: 20px 0;\r\n    }\r\n\r\n    .cat-page>p.mark>div {\r\n        text-align: right;\r\n    }\r\n",""])},61:function(r,t){r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABUCAMAAAAI7rEmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFor1mcIpCiqRTTVg3mLRcrbqVu8eltNBulrJc2uLMcoxE+Pr1utRwsc5uZHJNgZxMdpBFaoU9mrVgbog/3eLS6u7ibIZAjqFpobODhJpcdY5IdpBKa4Y9fplLjahVwsysaYQ6eZRFcYtBtMGcwtx5nblh7PDl8vXtZYI1tdFwq8dyh6JTvth0udNwutlzu9h0zNW59vjyeZJMutZyhaFOdoFocX9ZcIpFvdhzj6NqobttbohArcpqpcFlvNd2rslssMxyudZ0iZ5kvNl0sLWoutV6doVa/P36do5MXWlIx9G1kqNwqMRmepVJkKxW4unWVmU9Z4I5k69YlK5hpMBqm6t99PfwqcZpt9Rw+vz4w86x/v79c45GeZFQsb6XztDGjahd3+XVeJJIytaz5urcqsZtv9l5gJVV5OnZfZVWm69+fZZSZ4E4nLle7vLo0NnCmrRnudNytdNws8ST2NrSudZxvt13qLaM/v/8eZRNfJdJnrhsutZw0t3FlalypbSHvtlzb4hCc45ChJ9Q1d7GcIlKjKRdfJZNvth3+vv46O3fqrmOuNZyZH80gJlTj6tXs85umat2/f78eY5M5+vfc4xIcYw+l7FhuNJvfJJRvNl3gJhXlK9dvNp0vNty1t7J9Pbvvdp2gZZdsc1r8PDur8ttpsNmgZtSpsFjv9p2q8lrkqxdu9ZytNF2b4lEaYM8a4o90Ni94+nYl6p3rMdpfpZYhZ1Yb4pCuNV3fZNUhJpXqshna4Y6gp1Ov9p0vNhxb4o/a4lBr81qaog68vTroL1gepJVaIQ1fJVRkKpeo8BjbIhAutRyu9VyvNZyvddzvNZzvNdyutVxu9dzvddyutRzu9V0vdZz5+7cudVzu9RxqcJo/f38cIxAzde+oLCDoqaa2NvPdI1NobdokKZvw9Cc0uC70NbAr8hui5V9u9pvc4pHhIx2vtdz9PjstNFx8PPrfptGsstvcIdGlbBZg55VbYg84u/Fv910iJ1fobB/bItA0tvCutRx////////MqBa3wAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAqPSURBVHja7JgLVFP3GcCTNLxuiNybyFVyk3ATjICEpDzaBINRSTeiAhqkGjBhkoqWCr5WbMEqJLQFBItFA4pgRYdKpdAq1aqh3D7QFvMgQWyh0u44trm5zs62rNYlLgkBggTFnZ2zs3P65SSHfPf+f/nu//+9+HD3/yuC+wXzf4xZQzryXShpzbiimvTlqzv95qY/FmbVnyteWPam1782jS4LXVoUFK28NCvk9JppY9KDpbl7cmUyGXI+7r3rdsX1pbcu75GhbW2yXF3md9PEbDqDoioCBZfGOVWqpYWk30/3CkNfiyDicH94XdsmE/hNC0NKABT15Lo6Ca+xrompADJJRWHQ6/PqGhuE68turqWFqb+cBiaxaF90WrPR6hRTD0X12ZCO+vmviv0d3/1NkjQFejD00Zisfcraw9ZRMTSeQqhoifhan0thaUjTot9UPwpjK0JLF5nHMFbuHRpEzS4eV1jnrNSpdz8KQzoPrZzDLSvj2kVof3/Yl9z2I6/TbDaaTCahUMgta14EXA5+FCYQFp3dsmPl57U7ttRvmb9jy475Cqj29sXs7EXzstPmz99xau3az2noLtdT2SZhovyCvSoyN4fQ750TtMLwa6+1am/cuKG98b5AdGKjAkCkUq1AoG1Vq9WCc/BBkmPFzOCiisAJmPKlQefoKHo5F75yD6/A0yERpKZpCwTqG++fg/GA7pNPdEAbHVCwz51TsLGPtBV+u/3icoBB3dEoN0zULhEdggV4NiaC8SE7v15qF+9fL1lhl6dv0eOGEobOzH6pYtmMGQ6NVvnRldw9AgRhAbfU0PPjmPS4y8Ng1YKFN2+2p9JqnrM55cUlTzhkyffobBKp2qF5xql4YsYlEchkYDCmAdQieN04JiPsXuzq/M6r5p4P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"},62:function(r,t,n){r.exports=n.p+"dist/girl-hai2007.png"},63:function(r,t){r.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAAgCAMAAACSJAeKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFXmFlO7ZYIqZ0+fz7QLZY7e7uK6p7RkpP6Onodnl8VLqVQ7SKw8TFAJJVNq1VPbZYxgAAAppiPrNWAJZc2UlJ09TViYuOyAAA2N/cKS4zJisxpMG00dLT/vz8ycrLNpVZPbKGAJlgwtDKEaBqWFtfsd/OfYGDhrOc2dvbMqZSOqpU2vDoLDE2TJ1rXZ57KZJN0djVm9fBg4aJAJRY3mJiNa6AvL2/YKN8PKxWgYSHqt3KS05SbnF16/byDp9p8PDwirSf2klJf8yvODxBzhERSbaNJCkuzxUV9vb38vj27/j17PfzJSovMa1/gq+aUpdyKJdLxsjIPrhZ32RkPLJWPq5XPq5YO6xVLzQ5lruqKphMLZJPda2PaaiFPK1VIygu/////v7+AJphywMDywAAAZphygAA/Pz8/f39ywIC2kpKAJxiAJZb2ktL/v//AZpiAJhe+/v7OapU9fX2+fn5+/DwP7VX/PHx+Pj48Pj1AJlf/PX1O6tVPEBF/f79QblaQ7hZAZheSbpe8/Pz/fz8en2A9fX1QLlZAZlfrd7L219ffK+VAJRXMppVyuneBJhfUbSJteLRvuXW8fLyxM/KApphWqR3AJddAI9RywEBVJpz4Gxs+fr62kxMF6BrAIZC//7/ccam1tfYptrH656eOrJYL6RRP7BY/P38ydTQy8zNAJNXuszE1e7l3+Xi2O/mOrRYitC3PrFW2d3cRLVakbelMpdVrcW60B0dOZRbt8rCv8DBKJVLBZxjBZtk1dbW9fj2qdvIob6yrt7NAJpgBZxkCZ1mAZpgAptiLppQBJtjGKFtQURJYqGAAplgptvIKZVNPbBVFJ1m4eLi/v7/5ebmAJVZOalUT1NXJiov+/39EqBrLo5UFKFtRLpb8/T0grGYYL6bV6N0XqF78vn2OKhTywQEkdK6k9O8ltW9R55noqSmpaeppqipP69YQ7laZ2tt3N/eNZFaTbeP3FhY6+zskpWXAJhf9fr4AZhf4uPkuuPTwgAAUVZZVFhc////mywbMAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAP2SURBVHjaYvg/CoYSYBgNgtH4GgWj8TUKRuNrNL5GwWh8jYLR+BqNr1EwEPEV2GrtfObD68sD45iUtJRkOABy6Gfziv//N28/tKt5kMSKabZgahIQKCblFzSeyzbFEV8eRjo+bm5uPpK13yoGJL5S0sThIC2FjvH1XylWfk/UBd3IwRFf2Yrg6AJGWI7d3aOK2VjjK72YQQoYXT4gLMlQnDEA8SXunisikpWV5SgikusuTsf48tsTVHZxk1A73yyOwRBfJ5KSQBGmqJiz0Dah78RU7PnLUlLlzd8IdnadG28ZJI0GwJmZArkJeXkJQAAkcwUy6WRt+n8HzYY4rXfLi2q2MPoPhvhKPZKadOJEfqowU13CJKeOVKzxJScpyZnY/Kui5OrkRDVJnVX0d2ayuEhiRkZiIjDCMhJFxJPpZa+B/r3rcSx8fGUWT5s2OAyC+EpSzK+6Ziyc2qOQWLmXNykJa3xx+vioFUKYhZY+NzkHIH9B4qt6dteSRGB80St//Y9hDA0P2amuLs/CwnfybPrAx5diUs4xBVem1H6uRC82u+/Y44vdTXLRf6hjNXR82Acif2UlJMomlM788yUhwZFu+Stdt76GRX5zRobBnVfqBoOhPMzPYVsLLGScTBMSmRM28p7CGl86Ps5tcC+w++gMUHxlJJS7CwQn0jG+7OXL3m2ISTwwJ3Fd2+BoH6bmHEzonGDINc8q4cdL12uCWONL0i3iK9wLzm6SAxdfLgLBCfSNrzDG2MQVdYnp/wdJfAmrJpy/NCNntW9CZYFxkiKO8tDN7D+4Aiv5b+bjxj5i4us/qDzcNiUxUenTtMiPgyG+BK9xeyVcOci0mjvhye2fijjaG1IRtfshTFF2KZ+Bam+0JJa6CJjQtb3RvfRduFD048fRLEGavXolg6C9kc/L9Nw74fdq7jxP5YIO7PEV6CZm48Mg9/+/jE2Em5SU3AC15xHxRbf8JaH/vqhGiJ9fqEarifHBYGjPT2e7Pf8hs7eiwi0v5QIc7fn/aj4yYgwawMahm5uOlOXA9ZerweVhFh37y1uXNcQVWVgUWQyS/vLxfu0nhusTDvO6Jiy43ZiKvb+cXviPfTcoVzU7u0kxeAxA3QsdjxJ5Jr5jbhZ9x6MC2oWAoF1Tj3VQjEd1fJ5oq/3i9Gpf1cV2BUknsOev/yWtPvHAJiKrj6TlgI73poFo+o73rjGPjorSfyQ9ONqH2YrXck4IGhckVU2frngCx3gvuA4TK/7/v1iMZ2CcCZ1PyUxJm0nn+RQgWCktrTRImvP/TbP3nahSPJGqmJSamiqIcz5lFAx6MBpfo/E1CkbjaxSMxtdofI2C0fgaBcgAIMAArnWESZSxWY4AAAAASUVORK5CYII="},64:function(r,t,n){r.exports=n.p+"dist/cat.jpeg"},65:function(r,t){r.exports="data:image/png;base64,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"},66:function(r,t,n){r.exports=n.p+"dist/dream.png"}}]);