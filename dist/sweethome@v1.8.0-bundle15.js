(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{67:function(e,a,p){var c=p(68);"string"==typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);(0,p(1).default)("data-quickpaper-910dc6e4",c,!0)},68:function(e,a,p){(e.exports=p(0)(!1)).push([e.i,"",""])},84:function(e,a,p){"use strict";p.r(a);var c={};p(67);c.render=function(e){return e("div",{class:"doc-view",quickpaper:"","data-quickpaper-910dc6e4":""},[e("h2",{"data-quickpaper-910dc6e4":""},["SVN版本控制"]),e("h3",{"data-quickpaper-910dc6e4":""},["初始化"]),e("p",{"data-quickpaper-910dc6e4":""},["把uri指定的仓库代码检出到本地来："]),e("pre",{"q-code":"","data-quickpaper-910dc6e4":""},["svn checkout url"]),e("p",{"data-quickpaper-910dc6e4":""},["更新代码："]),e("pre",{"q-code":"","data-quickpaper-910dc6e4":""},["svn up"]),e("p",{"data-quickpaper-910dc6e4":""},["清理："]),e("pre",{"q-code":"","data-quickpaper-910dc6e4":""},["svn cleanup"]),e("h3",{"data-quickpaper-910dc6e4":""},["状态查询"]),e("p",{"data-quickpaper-910dc6e4":""},["查看当前工作区的状态："]),e("pre",{"q-code":"","data-quickpaper-910dc6e4":""},["svn status"]),e("p",{"data-quickpaper-910dc6e4":""},["查看svn信息："]),e("pre",{"q-code":"","data-quickpaper-910dc6e4":""},["svn info"]),e("h3",{"data-quickpaper-910dc6e4":""},["提交"]),e("p",{"data-quickpaper-910dc6e4":""},["添加新文件到版本库："]),e("pre",{"q-code":"","data-quickpaper-910dc6e4":""},["svn add filename"]),e("p",{"data-quickpaper-910dc6e4":""},["递归添加当前目录下的所有新文件："]),e("pre",{"q-code":"","data-quickpaper-910dc6e4":""},["svn add . --no-ignore --force"]),e("p",{"data-quickpaper-910dc6e4":""},["提交代码（只有新文件需要add,修改文件可以直接提交）："]),e("pre",{"q-code":"","data-quickpaper-910dc6e4":""},['svn commit -m "提交描述"']),e("h3",{"data-quickpaper-910dc6e4":""},["忽略或删除"]),e("p",{"data-quickpaper-910dc6e4":""},["已经通过add添加到仓库的文件，如果想删除，需要执行下面命令回退到unversioned状态："]),e("pre",{"q-code":"","data-quickpaper-910dc6e4":""},["svn revert file --depth infinity"])])};a.default=c}}]);