(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{123:function(n,e,r){"use strict";r.r(e);var t=r(0),o=r.n(t),i=r(3),a={"blog_html_dom-sync":{content:function(){return r.e(24).then(r.bind(null,139))}},blog_css_margin:{content:function(){return r.e(19).then(r.bind(null,140))}},"blog_css_overflow-hidden":{content:function(){return r.e(20).then(r.bind(null,141))}},blog_css_percent:{content:function(){return r.e(21).then(r.bind(null,142))}},"blog_css_vertical-align":{content:function(){return r.e(22).then(r.bind(null,143))}},"blog_css_z-index":{content:function(){return r.e(23).then(r.bind(null,144))}},blog_js_prototype:{content:function(){return r.e(13).then(r.bind(null,145))}},"blog_js_var-up":{content:function(){return r.e(25).then(r.bind(null,146))}},blog_angular1_directive:{content:function(){return r.e(18).then(r.bind(null,147))}},blog_vue2_slot:{content:function(){return r.e(26).then(r.bind(null,148))}},"blog_webpack4_loader-plug":{content:function(){return r.e(27).then(r.bind(null,149))}}};function u(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function c(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){p(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function p(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var d=c(c(c({home:{content:function(){return r.e(1).then(r.bind(null,124))}},notebook:{content:function(){return r.e(2).then(r.bind(null,133))}},Sponsors:{content:function(){return r.e(12).then(r.bind(null,134))}},license:{content:function(){return r.e(14).then(r.bind(null,135))}}},{api_css_selector:{content:function(){return r.e(15).then(r.bind(null,136))}},api_npm_terminal:{content:function(){return r.e(17).then(r.bind(null,137))}},api_git_terminal:{content:function(){return r.e(16).then(r.bind(null,138))}}}),a),{},{_default_:"notebook"}),l={install:function(n){n.prototype.loadRouter=function(e,r){for(var t=n.urlFormat(window.location.href).router,o=d,i=0;i<r;i++)o=o[t[i]]||o[o._default_];o.content().then((function(n){e(n.default)}))},n.prototype.goRouter=function(n,e){for(var r=d,t="#",o=0;o<e.length;o++)r=r[e[o]]||r[r._default_],t+="/"+e[o];r.content().then((function(e){n(e.default)})),window.location.href=t},n.prototype.changeActive=function(n,e){for(var r=i.a.find(document.body,(function(e){return i.a.hasClass(e,n)})),t=0;t<r.length;t++)r[t].setAttribute("active","no");i.a.find(document.body,(function(r){return i.a.hasClass(r,[n,e])}))[0].setAttribute("active","yes")}}};o.a.use(l);var s={data:function(){return{page:null}},methods:{openRouter:function(n){var e=this;window.sweethome_noRefresh=!0,this.goRouter((function(n){return e.page=n}),[n])}},mounted:function(){var n=this;this.loadRouter((function(e){return n.page=e}),1)}};r(40);s.render=function(n){return n("div",{quickpaper:"","data-quickpaper-4815b19e":""},[n("div",{class:"page","data-quickpaper-4815b19e":""},[n("header",{"data-quickpaper-4815b19e":""},[n("div",{"data-quickpaper-4815b19e":""},[]),n("h2",{"data-quickpaper-4815b19e":""},["🏠 今天，你写代码了吗？"]),n("ul",{"data-quickpaper-4815b19e":""},[n("li",{"@click":'openRouter("home")',class:"menu-1 home","data-quickpaper-4815b19e":""},[n("span",{"data-quickpaper-4815b19e":""},["首页"])]),n("li",{"@click":'openRouter("notebook")',class:"menu-1 notebook","data-quickpaper-4815b19e":""},[n("span",{"data-quickpaper-4815b19e":""},["小文档&理解"])]),n("li",{class:"split","data-quickpaper-4815b19e":""},["右边的是非主站的内容"]),n("li",{class:"menu-1","@click":'reloadPage("#/learning")',"data-quickpaper-4815b19e":""},["入门小教程"])])]),n("div",{"data-quickpaper-4815b19e":""},[n("div",{class:"warn","data-quickpaper-4815b19e":""},["开源项目推荐：更友好的前端绘图框架clunch.js，提供更友好的数据可视化解决方案，你可以",n("a",{href:"https://hai2007.gitee.io/clunch/#/guide",target:"_blank","data-quickpaper-4815b19e":""},["点击此处"]),"进一步了解详情！"]),n("component",{":is":"page","data-quickpaper-4815b19e":""},[])]),n("footer",{"data-quickpaper-4815b19e":""},[n("p",{"data-quickpaper-4815b19e":""},["Copyright©2016-2021 hai2007 All Rights Reserved 你好2007"]),n("span",{"data-quickpaper-4815b19e":""},["走一步，再走一步。"])])])])};e.default=s},34:function(n,e,r){"use strict";n.exports=function(n,e){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},36:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA+CAMAAAChgZ0aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFqryTt9Ryo8Blq8Zpsc5utNFx3OnW3e7N0dzDjKNm5PDi2+PL5+zd6/TpssGTkq5a4una4+nM5Ojg9vvz/f77+fz4d5NPgpZb2+TReZVQfpJVs8OacYZJ+Pry9/3sbIRBfJZN1ujR+P3v/v//ttRxaoU9uNZyudd0bIc+t9Vwuth0aYQ7bohCuNNyb4pBdI9GdpBLbok+hJxgcYtETVg1bIY7coxB/v/+dI5JiqVS/v/7///+aIM2uthxvNl1co1InrtiZYA2fJdJb4lGuddyZ4I3t9V0jKJrnLhfrMlqaYI+lbFcrspsco1FjalUdYxKm7F+j6tWqLyOmLRdk6lyu9dzcotIhKBO/P75oLKEv92AkaVwfppbaII6fpVW8fXqUl08vNlyor1ng5lbiJ1j1d/IstBvdpFE8/bvfplMeJJIvNd1/P37gZdWvMyoiJli+/32sL6WepRJsM1rgZ5LweCCZH8ybYRH7fLkcIdD8/njutVz7/XjkadshaBheo1O+fzwnbCB1+fB5/HeeZRGz9m/eZFOtsSfo7WIpLiKxdKyxdS2+v70haFRdI9Ce5VV0uO60uPLlLBXma16+vv16vbdc49MvNl6eZJSys7DmrZjysil0+DAfZhV9PrscIs+/f7+vcubdIlO6e7lp8VnjKdYusmllap5mqt0dYtEoLR8uNdwtdJufZBRgpxRl7NkwM+vzNa6yuC30N2y1NzL+Pb0udZ/pLqE6fDnaHJXtsij4ObRsc114/HRv9Cpy+PG3+fE/v7/Xn4vxNSnsMKZ5u3TdIhJfJZSyNunqbyF5ObdfINti5N9fJNaRVAttsqc/Pz53O7hhI53n6aUeo5WXGZIi55mwdx2utOyyda17PHWc3xjf5xGtdRyvNSc/P/8x8y90NPI1+rJ3+Paq8OVQk4q//7/rMlzrrWj2NG3ydm93O3a8vbw7vnttcmS5t3Ilp2L/v/8/v/z7PTk1+bS6ODNrsON//7+6/Tkx9mx5Ozd9OfZ/v7+ttRy////////3v/uwAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAoRSURBVHjarJgHWFPJFscJCa6s7KJPEKQYd83NvckNqaQS0kNCAgRCl957R5Em0ruKbdW1i72Xtbd9uuuWt7338ra/3hsZ3tyEBNSg+77vnXxfuGcy85v/mTlTLh6Tbk3mV9vS7dNdukYMHAUgwq82dMmmtEngtr6Hu0IgXnMu4919Fkvmy3NXRcCGQDZS9GRSwcnC+NvzZQD8PAzw6zKY1Hoe5wiGUAtuLwRgzdftJvVKaHpqyN6WCPCzMOLb+1Ye6Rya5+NTFFyltVhrR87uU8uDOuuCrXxEbWrfPPEzMEC2o0POnwcctmogtvnzrhD13epVhLuw1yDUe7tG7GFqFiZJCroBmCDseVBrZWVz1QVzION56ILQYNz09zWPxvidfZF3AzaZMtDGF8iVV4HLB3V67QsPD4ropPKovHCXqxVsF6zW14Hvpv1NBvnRSjArBkyK0/wmJ9eckAcDMdGtIzDQr2cFgml/AnzEe21VxKyY2pbHdpzZcf1civAM0eqVbV+VEu1A+i8z4QPYv23bJQfXp167QGxXLvvzfRgw2bK3JoRKtezTCkVFsNW2y7nvvf0KsGO8NwFw/nJu7quvREzsmQA5Bdg8P5g8Ix/vONcyEwPAyPrsJjnO4/GEOMIuAmD/5W/Dw8N/VQkITMab4M1XX4f+H4ED03y0d0Hb3kOvWVj8FjCNWTayPgTfLVVFR0eTE0SCXgC+yoWtcj8hoqkj1Fx6j/AJLAwqBcsyUZUsSQpbQD03M6jNQVkacoWiVafLo5Sx6wDYFh7uVFO3UjIfPHf59fDc3HcmCMwZE1ujYeM8iYSFUV+Sgemg9uLscYWNMAZDyqmCzd7+9vXw976ElE3ecn0/AD9Ayie/Jih+GeqyYnp0Yg+WEsuidk1jIkYMWalMmh1Di/TkCJJyQM47r7795T8AEAeLeHg2XAnb3vmBoESAaj1mVpBQppdZgLEEbdNjk7Y5BFcxbQ4MTecbu7Z9/tSaKn1yrbCHjWfk2L3vAJANvSjXUFBYk85U8XDLC8QEAYeaQCovGrVNWdTxVM7uqoNXV5XmXK32FsX2kBP0Kwt7c+BGA9b4WAV4DznZFkXEn6dCsMzfr9+8S2zHyOZR2TEujE3XIOWI2NwqPn+pSMRJjVEwpIgaqTpsvfOyd1+zspFcERZlF85QxOEYqzngjV0ONS/MVGMLS072TC3hcDixnPLURC+UdgzdztHr1WqMzWNzE4qZraSp+OkUDsbCRO9ed2A2p/DGdTQXJowRSSPnGxMTVWQa0yGfkigt66kvSzVH6+hRdGdNkiIBYbFEfeftGBBaIHcOsePn1tbWCiY0lESb6peJ0oobKDQmyqBTKAxnl/SYchZL8H6bI29kR9WpTMY0JoxECiOEkxzqScQTiUGn00k2Gj1aI6WRpioyGBocC3lpKv0i1jeJGo7Z7jdSmB0GqTDQsKmEYPoK4lxR0SJHcerLac4sXrg6a4PCDcYpzqkL9n/8ZEoicxoTZ+LmACcm7aMs0Ywpd3Ecfz6bUdQaUy9RRboweb5ZO5e4liZYUmBqJNFtj7Zkcn1J/gw1Zry5awS4dr9b+/RSFH00Bm1YyjHOUJOAYfxuF2ZZ2vomeeo1hWsqZzNFTLkybhoTKRXyLBdrXZsoWPKvJn2JJ1P3cC0ouTHWspTilE1iNCIY23LVFRQ84D9vytp9IDpZR3KPoB2LRGN8y2MlHE5ClMI+jjCJRAgWq5w385zy61pNRco3kBkKJh2mG8mevjBIIk6GjhnZkB+n4UrqtyeUc6SqGCK/aZGJGI/NqWqbiQFPL7loEfJEjWZPL3peXjJKj2IwGFEkOspEj5NVBENZIo3OK5aWczkHvOhEEmkQVuy7L8nuwURM1nYFUDEMwUrKEoye5JhrYaSw45To/MSE0aUcGE193HgrSqPTjKMnzV4kGi3PiCOCjFu195/hQHa9MIUtwnCTCcF2r60/WabpKeHEKlOURyT1UmMMPZKYSjpqK45iwH0yeq0wuyhU5uYqkHa9pu+keZQjzMrCTQgLQeBMSLhlcWZPyrFIujMd7HsFSdeYhZx3f6MA4scyFsfFeHkmboiTwk9CwgajapyCMpl0G21mUtEYzA1CZGvOrLetj5P6NIm0Dz5QKCqSk5MrKpJRlO5co86FDjG6RB7S0fWQK2TLnSCuxjxOe2CNwe0izJlVdDLPhJyT2TPOPSZi14KjzULsU7KbterKTUbD6Fpkb2iEbBYMvOcA0JaNCMuNbpcqCe6CDAYxNiqe8vDFHX5uhxgQN6C0atZuI7mY4YZyrLW4oZgGNwMagz4Kp7HjDfGDGPCnpzffOtudk50Vp0ieMRLTizNa2lNSokk1wm0ZHV/LFrEL28CDahZ4NzWZmt4XlMTobFFoHhMeEDooioQmVzwDbXmxBhPKhQjeCCc/ipmAsdjtux7EDFPrt+fnj+KY7/JnUK9xVaJ5g5FsYyo+I2/39fU1b//eV7nInJ+v8myA51dUJFkkTLnx4BAXhUgvLF++YoWZeoByKrVErkdw9Ur5p0ZVmVCtZmEIWxmbsn3FihXLn6HbGKRIBpqKFLbUysC9mO/uLL0AIdcujPN28/QWg3WoqGi4OgPBhdqMutPDw/0bA9iCA98vJ6xC15BPURgx7sbDt9PuxUx4+K44dUq1JVbECjo85OPvuJxUxrP651faH7/oNiCCsgOnTuVfu1AsFRk/iBHhR8r5bfdinn/ybiNOxbWHPHrtrwhgGTTgn2GAwAn7Mwi8U7BIi/G2cDVLBaJnF9x6FtqPofeNzd+41CtFP435OxH2pnNYHjM8EHhmYKP1fYzNrXl2tneGP7A7vwDTDEdQQ6xehz+xTGwv9KsE1ciJH/8z2zuD/2F87j0EIIYLw7pl/5QH9ixbtmcPLAL98tVvzvrq8SEeXwmmCJse7+0f6NzYWVdUmFR6aX7g3KL9/sBlA3jmc7NhSgO2BBJ1/C8FDg8YtqawBBKtUruFZUjK3CoRcDOTPE6f31+aBtWkGZDZMVbhwKo55097dLav0xYcstZVDw/deMNbqfROik8fiG/nsgTcdXzDofTB9PRsbHHpLJivX+RkZnO1OLI1/spPZ64Mxm/sPJSUtG6R98WDBw+eHh76pj2TqxSw4f6M81K0J55wj9lViEgWLV68dbX19PDBwY2DVo/+6uBvBrlcGFV6fHwGv5C/mp+5cydXwpVIuNoO9xjxHWFm9rqd62BdaEnx8VZrevpgkryjRqCNv/Fh9ZXgdO92/uqd63YuvrtViQm13W4x/jVHgqpOdHCbBX19lqqagNdqAgL6Opr5X/8uOCCopiYoKMhyIht+8/l3qwwZhsJBf/dqHn/rrcff+s1TN8fGxm4+dfPs2fU7xuaO3QyFP/320j//8u9/z5nz1F8Di8bmzf+FzxOb/NMe/c+F/93+T5j/CjAA1EEclsdhZicAAAAASUVORK5CYII="},40:function(n,e,r){var t=r(41);"string"==typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);(0,r(2).default)("data-quickpaper-4815b19e",t,!0)},41:function(n,e,r){e=n.exports=r(1)(!1);var t=r(34),o=t(r(36)),i=t(r(42)),a=t(r(43));e.push([n.i,"\r\n    /* 页头 */\r\n    div.page>header {\r\n        line-height: 50px;\r\n        height: 50px;\r\n        background-color: #fff;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px;\r\n        padding: 0 30px;\r\n        position: fixed;\r\n        width: 100vw;\r\n        top: 0;\r\n        left: 0;\r\n        -webkit-user-select: none;\r\n           -moz-user-select: none;\r\n            -ms-user-select: none;\r\n                user-select: none;\r\n        z-index: 2;\r\n    }\r\n\r\n    div.page>header>div {\r\n        height: 70px;\r\n        width: 70px;\r\n        display: inline-block;\r\n        position: fixed;\r\n        background-image: url("+o+");\r\n        background-repeat: no-repeat;\r\n        left: 300px;\r\n        top: 2px;\r\n    }\r\n\r\n    div.page>header>h2 {\r\n        color: #bce05d;\r\n        font-weight: 800;\r\n        font-family: monospace;\r\n        display: inline-block;\r\n    }\r\n\r\n    div.page>header>ul,\r\n    div.page>header>ul>li {\r\n        cursor: pointer;\r\n        display: inline-block;\r\n    }\r\n\r\n    div.page>header>ul>li[active='yes'] {\r\n        border-bottom: 3px solid red;\r\n    }\r\n\r\n    div.page>header>ul>li[active='no']:hover,\r\n    div.page>header>ul>li[active='no']:hover>a {\r\n        text-decoration: underline;\r\n    }\r\n\r\n    div.page>header>ul>li[active='yes']>span {\r\n        background-color: red;\r\n        color: white;\r\n        padding: 5px 7px;\r\n    }\r\n\r\n    div.page>header>ul>li,\r\n    div.page>header>ul>li>a {\r\n        color: black;\r\n    }\r\n\r\n    div.page>header>ul>li {\r\n        padding: 0 10px;\r\n        font-weight: 800;\r\n        position: relative;\r\n    }\r\n\r\n    div.page>header>ul {\r\n        position: absolute;\r\n        right: 30px;\r\n        top: 0;\r\n    }\r\n\r\n    div.page>header>ul>li.split {\r\n        cursor: auto;\r\n        background-image: url("+i+");\r\n        font-size: 0;\r\n        width: 50px;\r\n        vertical-align: top;\r\n    }\r\n\r\n    /* 内容 */\r\n    div.page>div {\r\n        padding: 0 50px;\r\n        padding-top: 58px;\r\n        min-height: calc(100vh - 92px);\r\n        width: 1100px;\r\n        margin: auto;\r\n    }\r\n\r\n    div.page>div>div.warn {\r\n        text-align: center;\r\n        padding: 10px;\r\n        background-color: #bce05d;\r\n        color: white;\r\n        margin-top: 20px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    div.page>div>div.warn>a {\r\n        color: #03a9f4;\r\n        text-decoration: underline;\r\n        padding: 0 1em;\r\n        font-weight: 800;\r\n    }\r\n\r\n    /* 页脚 */\r\n    div.page>footer {\r\n        text-align: center;\r\n        padding: 10px 0 20px 0;\r\n        min-width: 1100px;\r\n        box-shadow: rgba(0, 0, 0, 0.1) 1px -5px 2px;\r\n        background-image: url("+a+");\r\n        background-repeat: no-repeat;\r\n        background-position: right bottom;\r\n        background-size: 70px auto;\r\n    }\r\n\r\n    div.page>footer>p {\r\n        line-height: 40px;\r\n        height: 40px;\r\n        color: gray;\r\n        font-size: 14px;\r\n    }\r\n\r\n    div.page>footer>span {\r\n        display: inline-block;\r\n        padding: 0 15px;\r\n        line-height: 30px;\r\n        height: 30px;\r\n        color: #999999;\r\n        font-size: 12px;\r\n        border: 1px solid #E3E3E5;\r\n        border-radius: 45px;\r\n    }\r\n",""])},42:function(n,e,r){n.exports=r.p+"dist/split.png"},43:function(n,e){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFY30zTFY1utVzbIVFyOblw+Py2NrUlbLKusahp7rN09nG6u7js813vdh1YYOle5FUzev5z+368/T1mrNcvNvrk6xalbKJorxk7vHmfJVIYoWprMVq0vD9lJuIstPm2Pb/gptMp6uca4usrLGjvNZ0vczb3eDYdJOy+fv1utRzhqK8mrNls85uu9R6ZG1Tyun2rLqTqMzgbYU+zNW7wNt1fZyUXoGm/P36jayMtdBx1PL/cYlBg4p11PD/1vT/tsOdssy6hZtj9PbviaN2aoyceZJIuNNywca6kauF6e70wMuqRE4sfJdr9/jz7u/sc5Gsu9Zyytbir8lsq8vf2uHMs7eqna5+cYpF/v7+o7KEd49Tja3H093n5OraaYE5dY1JjZ9nc3tkv9XYutZ02/j/t9JyZoir+fr4mrnRpcneqsd9iaFSdY5Gsb6Y0vD3ZIekd39oxc+xWmNG2uPq/Pz7dZiylazFq8aBcYk+g526ao2hqMNmd45N+vv4vdhzg6TAq7qNyObzaoU6yMvCgJVa1/L/iKBPhZ5RaYI8cIZBaIZWhZhdyNG14uTem7aV1PP8sNDhcIlJpL9keZm4iqJUk6VzaoQ9l7BbW36jeo9Pf5VUbIM+7vL1udVwZn81boc+vdduipF94+rwd5BJvtd8xub2+vz9psTaj6hW3+bT/v78bY2vdI1BjKa/jaVSjKZVu76ylalzfJu3vd7vutVwcoxCn7lhh6FRc4xFttTmc4xIosLXutVyiqRUZoWL/f77+fn85OfisMDSbot2prWLb5Gxp8FoV19C0tnB9/n7foVw6O3fh6jDzti8Zn841PL6xeHfbIQ5qcfcdotNuNN0/f39Z4E2aYao1vH//f7+cI+v+/v79/f2uNfot9rrutrjjaabnbdfoKWV3+bt6Onln7uEpL+kq8ezf5dMa4I60/H9oL/Wc4pD0NnBPEYlcI2yb5CbcpCcb45sdZa3epOxj6Fud5BFudfIwODwvNhxj6uAmal40/D/udRz////////LoXnogAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAmXSURBVHja7Nh7VBNXGgDwYZSH4gxiiIEkOAijGMoaiQgywVhQ6IJCY0RA0CALxAcoj2KL8lDwAVEURQQhQkQWDYJPUDFSqbSiRcz6Ap91F4sWI921pbrakkknCZCQBHr2nP1rz35/cM4kuT++ud93750zgPK/EsD/mf8hJjwc11542tbkB86+GYT/Rwxum7x+eeis2ZarNchsn14ZAFSwrPIzR2JSn04K7p5u1qHz0QyLXoAIGV/oM75ZqcwMlQH80t2ryoqBzt2Wxpng5/aV9pXe3mbajyx9AP7ub5JvJW8tE4d945l5EMg5eMM2aIZvzXIhkGFrlJk01d7J3jvJ/unQJ7bbK6zyfXFVWK6PyrFYDwiTPdWXePgNK+BtptGbCj8x3Tv6uVZpDs0pq8EHI/l8lJAfOHSJ11hVBBqf4u6k6GWp2subGVG3tMMItPNgKn5C6+aUBhljgqNnVl61NDMblCyA3/CvnJwy8Y7u1cSwG6K8fHxb2zYcN9ujYoJWsWqMMPjUlJlEpMwMHijcKiAQn3590Rn8ecpUYths/v6VuPc/Uz5xmpmkdrYC+eomsLyRr5uNWVubt3el/TYiG/xRhzIoI+cGwZiktJksSkrF8fyKUlt86iITIlLMVIxFTqitb1BI6Pb9GboMnvrkSWpHONEeIRahy2eFstg1eLi9etwnqmxkpZa4b7Tq2v4EHk5MjjhnzL3tLHaj2M9IFzeP98mTyTplsmJWCI4HV6Zcn3lGXRqh9CaOX7WP9l72FCcWCB7IEtel8Vlh0rAMQ6Z5lkgmtrt4WuIQxkomRq8223ZVXRnbjDxV4TqePiH+EIrnWTHZi0fZyR4jLTVgwudXiE+l+6NcKC6XHYrrRIiw4myzzvWP0qp0dxQCabnFOkzwsmVO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"}}]);