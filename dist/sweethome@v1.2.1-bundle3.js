(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{17:function(a,n,e){"use strict";a.exports=function(a,n){return"string"!=typeof a?a:(/^['"].*['"]$/.test(a)&&(a=a.slice(1,-1)),/["'() \t\n]/.test(a)||n?'"'+a.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':a)}},18:function(a,n,e){var i=e(19);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,e(1).default)("data-quickpaper-fa52a6ae",i,!0)},19:function(a,n,e){n=a.exports=e(0)(!1);var i=e(17),t=i(e(20)),p=i(e(21)),r=i(e(22));n.push([a.i,"\n    /* 主体划分 */\n    div.page>div {\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    div.page>div.left {\n        text-align: center;\n        width: 300px;\n    }\n\n    div.page>div.right {\n        width: 700px;\n    }\n\n    /* 左边样式 */\n    div.page>div.left>.title {\n        padding-top: 200px;\n        background-image: url("+t+");\n        background-repeat: no-repeat;\n        background-position: center 30px;\n        font-size: 20px;\n        font-weight: 800;\n    }\n\n    div.page>div.left>.title>span {\n        display: block;\n        font-size: 14px;\n        font-weight: 400;\n        line-height: 2em;\n    }\n\n    div.page>div.left>.belief {\n        line-height: 2em;\n        color: gray;\n    }\n\n    div.page>div.left>.fork {\n        color: rgb(90, 86, 86);\n        border: 1px solid rgb(202, 199, 199);\n        padding: 5px 10px;\n        display: inline-block;\n        cursor: pointer;\n        -webkit-user-select: none;\n           -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n        margin-top: 10px;\n    }\n\n    div.page>div.left>.fork:hover {\n        text-decoration: underline;\n        color: rgb(245, 12, 12);\n        border-color: rgb(236, 49, 49);\n    }\n\n    div.page>div.left>.link {\n        padding-top: 20px;\n    }\n\n    div.page>div.left>.link>a {\n        background-image: url("+p+");\n        padding-top: inherit;\n        background-repeat: no-repeat;\n        background-position-y: -9px;\n        width: 50px;\n        font-size: 12px;\n        display: inline-block;\n        color: rgb(0, 0, 0);\n        font-weight: 800;\n    }\n\n    div.page>div.left>.link>a.github {\n        background-position-x: 6px;\n    }\n\n    div.page>div.left>.link>a.npm {\n        background-position-x: -124px;\n    }\n\n    div.page>div.left>.link>a.oschina {\n        background-position-x: -242px;\n    }\n\n    div.page>div.left>.link>a.sf {\n        background-position-x: -390px;\n    }\n\n    div.page>div.left>.cat {\n        background-image: url("+r+");\n        background-repeat: no-repeat;\n        background-position: center center;\n        height: 260px;\n        background-size: 100% auto;\n        font-size: 0;\n    }\n\n    /* 右边顶部说明 */\n\n    div.page>div.right>.stepbystep>h2 {\n        line-height: 3em;\n    }\n\n    div.page>div.right>.stepbystep>p {\n        text-indent: 2em;\n        padding: 5px;\n        line-height: 1.4em;\n    }\n\n    div.page>div.right>.stepbystep>p.right {\n        text-align: right;\n        font-size: 14px;\n        font-weight: 800;\n    }\n\n    /* 右边底部链接 */\n    div.page>div.right>.footer-link {\n        border-top: 1px solid rgb(187, 183, 183);\n        margin-top: 10px;\n        font-family: monospace;\n        text-align: center;\n    }\n\n    div.page>div.right>.footer-link>li {\n        display: inline-block;\n        vertical-align: top;\n        width: 233px;\n        padding: 10px;\n        text-align: left;\n    }\n\n    div.page>div.right>.footer-link>li>h2 {\n        font-size: 16px;\n        padding: 20px 0;\n    }\n\n    div.page>div.right>.footer-link>li>a {\n        display: block;\n        color: rgb(70, 73, 73);\n        font-weight: 200;\n        margin-bottom: 20px;\n\n    }\n\n    div.page>div.right>.footer-link>li>a:hover {\n        text-decoration: underline;\n    }\n\n    /* 其它 */\n    div.page>div.right>h2 {\n        margin-top: 30px;\n    }\n\n    /* 猫 */\n    .cat-page {\n        background: #d0c1c1;\n        margin: 30px 50px 50px 50px;\n        padding: 30px;\n    }\n\n    .cat-page>h4 {\n        font-weight: 800;\n        padding-bottom: 10px;\n    }\n\n    .cat-page>p {\n        text-indent: 2em;\n        line-height: 1.6em;\n        font-size: 14px;\n        color: rgb(16, 15, 15);\n    }\n\n    .cat-page>p.mark {\n        text-indent: 0;\n        margin: 20px 0;\n    }\n\n    .cat-page>p.mark>div {\n        text-align: right;\n    }\n",""])},20:function(a,n,e){a.exports=e.p+"dist/girl-hai2007.png"},21:function(a,n){a.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAa8AAAAgCAMAAACSJAeKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFXmFlO7ZYIqZ0+fz7QLZY7e7uK6p7RkpP6Onodnl8VLqVQ7SKw8TFAJJVNq1VPbZYxgAAAppiPrNWAJZc2UlJ09TViYuOyAAA2N/cKS4zJisxpMG00dLT/vz8ycrLNpVZPbKGAJlgwtDKEaBqWFtfsd/OfYGDhrOc2dvbMqZSOqpU2vDoLDE2TJ1rXZ57KZJN0djVm9fBg4aJAJRY3mJiNa6AvL2/YKN8PKxWgYSHqt3KS05SbnF16/byDp9p8PDwirSf2klJf8yvODxBzhERSbaNJCkuzxUV9vb38vj27/j17PfzJSovMa1/gq+aUpdyKJdLxsjIPrhZ32RkPLJWPq5XPq5YO6xVLzQ5lruqKphMLZJPda2PaaiFPK1VIygu/////v7+AJphywMDywAAAZphygAA/Pz8/f39ywIC2kpKAJxiAJZb2ktL/v//AZpiAJhe+/v7OapU9fX2+fn5+/DwP7VX/PHx+Pj48Pj1AJlf/PX1O6tVPEBF/f79QblaQ7hZAZheSbpe8/Pz/fz8en2A9fX1QLlZAZlfrd7L219ffK+VAJRXMppVyuneBJhfUbSJteLRvuXW8fLyxM/KApphWqR3AJddAI9RywEBVJpz4Gxs+fr62kxMF6BrAIZC//7/ccam1tfYptrH656eOrJYL6RRP7BY/P38ydTQy8zNAJNXuszE1e7l3+Xi2O/mOrRYitC3PrFW2d3cRLVakbelMpdVrcW60B0dOZRbt8rCv8DBKJVLBZxjBZtk1dbW9fj2qdvIob6yrt7NAJpgBZxkCZ1mAZpgAptiLppQBJtjGKFtQURJYqGAAplgptvIKZVNPbBVFJ1m4eLi/v7/5ebmAJVZOalUT1NXJiov+/39EqBrLo5UFKFtRLpb8/T0grGYYL6bV6N0XqF78vn2OKhTywQEkdK6k9O8ltW9R55noqSmpaeppqipP69YQ7laZ2tt3N/eNZFaTbeP3FhY6+zskpWXAJhf9fr4AZhf4uPkuuPTwgAAUVZZVFhc////mywbMAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAP2SURBVHjaYvg/CoYSYBgNgtH4GgWj8TUKRuNrNL5GwWh8jYLR+BqNr1EwEPEV2GrtfObD68sD45iUtJRkOABy6Gfziv//N28/tKt5kMSKabZgahIQKCblFzSeyzbFEV8eRjo+bm5uPpK13yoGJL5S0sThIC2FjvH1XylWfk/UBd3IwRFf2Yrg6AJGWI7d3aOK2VjjK72YQQoYXT4gLMlQnDEA8SXunisikpWV5SgikusuTsf48tsTVHZxk1A73yyOwRBfJ5KSQBGmqJiz0Dah78RU7PnLUlLlzd8IdnadG28ZJI0GwJmZArkJeXkJQAAkcwUy6WRt+n8HzYY4rXfLi2q2MPoPhvhKPZKadOJEfqowU13CJKeOVKzxJScpyZnY/Kui5OrkRDVJnVX0d2ayuEhiRkZiIjDCMhJFxJPpZa+B/r3rcSx8fGUWT5s2OAyC+EpSzK+6Ziyc2qOQWLmXNykJa3xx+vioFUKYhZY+NzkHIH9B4qt6dteSRGB80St//Y9hDA0P2amuLs/CwnfybPrAx5diUs4xBVem1H6uRC82u+/Y44vdTXLRf6hjNXR82Acif2UlJMomlM788yUhwZFu+Stdt76GRX5zRobBnVfqBoOhPMzPYVsLLGScTBMSmRM28p7CGl86Ps5tcC+w++gMUHxlJJS7CwQn0jG+7OXL3m2ISTwwJ3Fd2+BoH6bmHEzonGDINc8q4cdL12uCWONL0i3iK9wLzm6SAxdfLgLBCfSNrzDG2MQVdYnp/wdJfAmrJpy/NCNntW9CZYFxkiKO8tDN7D+4Aiv5b+bjxj5i4us/qDzcNiUxUenTtMiPgyG+BK9xeyVcOci0mjvhye2fijjaG1IRtfshTFF2KZ+Bam+0JJa6CJjQtb3RvfRduFD048fRLEGavXolg6C9kc/L9Nw74fdq7jxP5YIO7PEV6CZm48Mg9/+/jE2Em5SU3AC15xHxRbf8JaH/vqhGiJ9fqEarifHBYGjPT2e7Pf8hs7eiwi0v5QIc7fn/aj4yYgwawMahm5uOlOXA9ZerweVhFh37y1uXNcQVWVgUWQyS/vLxfu0nhusTDvO6Jiy43ZiKvb+cXviPfTcoVzU7u0kxeAxA3QsdjxJ5Jr5jbhZ9x6MC2oWAoF1Tj3VQjEd1fJ5oq/3i9Gpf1cV2BUknsOev/yWtPvHAJiKrj6TlgI73poFo+o73rjGPjorSfyQ9ONqH2YrXck4IGhckVU2frngCx3gvuA4TK/7/v1iMZ2CcCZ1PyUxJm0nn+RQgWCktrTRImvP/TbP3nahSPJGqmJSamiqIcz5lFAx6MBpfo/E1CkbjaxSMxtdofI2C0fgaBcgAIMAArnWESZSxWY4AAAAASUVORK5CYII="},22:function(a,n,e){a.exports=e.p+"dist/cat.jpeg"},65:function(a,n,e){"use strict";e.r(n);var i={data:function(){return{counterUrl:window.hai2007_sweethome_counterUrl}},mounted:function(){this.changeActive("menu-1","home")}};e(18);i.render=function(a){return a("div",{quickpaper:"","data-quickpaper-fa52a6ae":""},[a("div",{class:"page","data-quickpaper-fa52a6ae":""},[a("div",{class:"left","data-quickpaper-fa52a6ae":""},[a("div",{class:"title","data-quickpaper-fa52a6ae":""},["你好2007",a("span",{"data-quickpaper-fa52a6ae":""},["@hai2007"])]),a("div",{class:"belief","data-quickpaper-fa52a6ae":""},["走一步，再走一步。"]),a("a",{class:"fork",href:"https://github.com/hai2007/SweetHome",target:"_blank","data-quickpaper-fa52a6ae":""},["Fork me on Github"]),a("div",{class:"link","data-quickpaper-fa52a6ae":""},[a("a",{href:"https://github.com/hai2007",class:"github",target:"_blank","data-quickpaper-fa52a6ae":""},["Github"]),a("a",{href:"https://www.npmjs.com/~hai2007",class:"npm",target:"_blank","data-quickpaper-fa52a6ae":""},["NPM"]),a("a",{href:"https://my.oschina.net/u/4252568",class:"oschina",target:"_blank","data-quickpaper-fa52a6ae":""},["OSCHINA"]),a("a",{href:"https://segmentfault.com/u/nihao2007/articles",class:"sf",target:"_blank","data-quickpaper-fa52a6ae":""},["思否"])]),a("div",{class:"cat","data-quickpaper-fa52a6ae":""},["一只陪伴了我十六年的猫"]),a("a",{href:"https://info.flagcounter.com/bdd0",target:"_blank","data-quickpaper-fa52a6ae":""},[a("img",{":src":"counterUrl","data-quickpaper-fa52a6ae":""},[])])]),a("div",{class:"right","data-quickpaper-fa52a6ae":""},[a("div",{class:"stepbystep","data-quickpaper-fa52a6ae":""},[a("h2",{"data-quickpaper-fa52a6ae":""},["What I Believe"]),a("p",{"data-quickpaper-fa52a6ae":""},["我还惊讶地意识到，在我生命中有很多时刻，每当我遇到一个遥不可及、令人害怕的情境，↵                    并感到惊慌失措时，我都能够应付——因为我回想起了很久以前自己上过的那一课。"]),a("p",{"data-quickpaper-fa52a6ae":""},["我提醒自己不要看下面遥远的岩石，而是注意相对轻松、容易的第一小步，迈出一小步、再↵                    一小步，就这样体会每一步带来的成就感，直到完成了自己想要完成的，达到了自己的目标，然↵                    后再回头看时，不禁对自己走过的这段漫漫长路感到惊讶和自豪。"]),a("p",{class:"right","data-quickpaper-fa52a6ae":""},["———— 摘自 莫顿·亨特《走一步，再走一步》"])]),a("div",{class:"cat-page","data-quickpaper-fa52a6ae":""},[a("h4",{"data-quickpaper-fa52a6ae":""},["由老猫的离世而引发的追忆"]),a("p",{"data-quickpaper-fa52a6ae":""},["去年冬天的一个周末，大学室友小孩出生，从南京出发刚到达合肥南，打算从这转车去淮南。由于离下一班车开还有一会，就打个电话回去，问问家里近来情况。"]),a("p",{"data-quickpaper-fa52a6ae":""},["从母亲口中得知老猫早在去年（2019年）夏天就离开了这个世界，十六年，整整十六年，从小学四年级那个夏天开始。"]),a("p",{"data-quickpaper-fa52a6ae":""},["03年夏的一个普通日子里，大姨夫骑着自行车带了一只刚出生没多久的猫来到我家，因为刚刚从无锡回到老家，母亲准备养只猫捉老鼠。"]),a("p",{"data-quickpaper-fa52a6ae":""},["刚见到她时，并不十分认生，小小的一团，叫声很小却清脆。家里还养了一只狗，开始会欺负她，等长大了，她总会把狗抓得嗷嗷叫。他们平时可能因为一点食物大打出手，但当有邻居家的狗来我家门口“挑衅”，却又总能出奇的一致对外；而在冬天，猫习惯性地卷成一团睡在狗的身上，当然，狗也是卷成一团在那打呼。"]),a("p",{"data-quickpaper-fa52a6ae":""},["咪的（老猫的名字）特别爱干净，经常看见她在河边洗澡，用舌头舔自己的毛发，用时也会用尾巴钓鱼，在夏天的时候。但却一直提防着我，当我走向河边的时候，可能是之前多次把她抓住按在河里给她洗澡，她讨厌水的感觉吧！"]),a("p",{"data-quickpaper-fa52a6ae":""},["她经常会吃一些青草，特别是雨后，并不多，一点点。当然，她喜欢在夏夜捉蚱蜢吃我也是知道的，因为我总会帮她一起捉，在院子里，拿在手中给她的时候都会先轻轻咬一下，等我手离开后，才会一口猛咬，狼吞虎咽的吃下去。"]),a("p",{"data-quickpaper-fa52a6ae":""},["回忆起来，都是一些锁事，但手摸过她后背的那种感觉，到今天，都依旧那么真实。"]),a("p",{"data-quickpaper-fa52a6ae":""},["在她生活的十几年里，狗换了一只又一只（农村有人偷狗，特别是冬天，可能一夜就没了）。记得有一只小狗养了没多久就生病去世了，等狗完全失去生命特征，我把他带到河里扔了，而当我有时路过那附近时，时常会看见她一个蹲在河岸往下看。"]),a("p",{"data-quickpaper-fa52a6ae":""},["我不知道她是否明白生死，是否知道死亡意味着什么，只是，她一定很想念小狗。"]),a("p",{"data-quickpaper-fa52a6ae":""},["因为一些原因，后来就没有养过狗了，咪的也总是独处，特别是上了大学到现在工作，回家的次数也越来越少，以至于老猫去世半年才知道。"]),a("p",{"data-quickpaper-fa52a6ae":""},["刚认识她时才十岁，转眼时光飞逝！"]),a("p",{"data-quickpaper-fa52a6ae":""},["这几天总会想起来你小时候，特别是冬天，你喜欢躲在我被窝里，虽然我妈不许你在房间里过夜，好在你不叫，大多数都没被发现。昨天做梦，又梦到你了，半夜醒来，对着窗外，久久发呆······"]),a("p",{"data-quickpaper-fa52a6ae":""},["不知你在那边过得怎么样，没能在最后一刻陪你，我真得很抱歉。"]),a("p",{"data-quickpaper-fa52a6ae":""},["我想这一生，都不会忘记你，当然，还有那些和你一起生活过的小狗们。"]),a("p",{class:"mark","data-quickpaper-fa52a6ae":""},["当我仰望星空的时候、当我疲于工作或学习的时候、当我此刻在灯光下记录这一切的时候，那些令我感动的东西，我一直与你们同在。",a("div",{"data-quickpaper-fa52a6ae":""},["-------- 后记"])])]),a("ul",{class:"footer-link","data-quickpaper-fa52a6ae":""},[a("li",{"data-quickpaper-fa52a6ae":""},[a("h2",{"data-quickpaper-fa52a6ae":""},["官方地址"]),a("a",{href:"https://www.w3.org/",target:"_blank","data-quickpaper-fa52a6ae":""},["万维网联盟(w3c)"]),a("a",{href:"https://www.khronos.org/webgl/",target:"_blank","data-quickpaper-fa52a6ae":""},["WebGL"])]),a("li",{"data-quickpaper-fa52a6ae":""},[a("h2",{"data-quickpaper-fa52a6ae":""},["有用的资源"]),a("a",{href:"https://emojipedia.org/",target:"_blank","data-quickpaper-fa52a6ae":""},["表情文字"])]),a("li",{"data-quickpaper-fa52a6ae":""},[a("h2",{"data-quickpaper-fa52a6ae":""},["其它"]),a("a",{href:"#/Sponsors",target:"_blank","data-quickpaper-fa52a6ae":""},["捐款支持我们"])])])])])])};n.default=i}}]);