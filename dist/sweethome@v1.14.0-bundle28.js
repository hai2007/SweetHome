(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{117:function(a,p,e){var r=e(118);"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);(0,e(2).default)("data-quickpaper-631f8201",r,!0)},118:function(a,p,e){(a.exports=e(1)(!1)).push([a.i,"",""])},154:function(a,p,e){"use strict";e.r(p);var r={};e(117);r.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-631f8201":""},[a("h2",{"data-quickpaper-631f8201":""},["SVN版本控制"]),a("h3",{"data-quickpaper-631f8201":""},["初始化"]),a("p",{"data-quickpaper-631f8201":""},["把uri指定的仓库代码检出到本地来："]),a("pre",{"q-code":"","data-quickpaper-631f8201":""},["svn checkout url"]),a("p",{"data-quickpaper-631f8201":""},["更新代码："]),a("pre",{"q-code":"","data-quickpaper-631f8201":""},["svn up"]),a("p",{"data-quickpaper-631f8201":""},["清理："]),a("pre",{"q-code":"","data-quickpaper-631f8201":""},["svn cleanup"]),a("h3",{"data-quickpaper-631f8201":""},["状态查询"]),a("p",{"data-quickpaper-631f8201":""},["查看当前工作区的状态："]),a("pre",{"q-code":"","data-quickpaper-631f8201":""},["svn status"]),a("p",{"data-quickpaper-631f8201":""},["查看svn信息："]),a("pre",{"q-code":"","data-quickpaper-631f8201":""},["svn info"]),a("h3",{"data-quickpaper-631f8201":""},["提交"]),a("p",{"data-quickpaper-631f8201":""},["添加新文件到版本库："]),a("pre",{"q-code":"","data-quickpaper-631f8201":""},["svn add filename"]),a("p",{"data-quickpaper-631f8201":""},["递归添加当前目录下的所有新文件："]),a("pre",{"q-code":"","data-quickpaper-631f8201":""},["svn add . --no-ignore --force"]),a("p",{"data-quickpaper-631f8201":""},["提交代码（只有新文件需要add,修改文件可以直接提交）："]),a("pre",{"q-code":"","data-quickpaper-631f8201":""},['svn commit -m "提交描述"']),a("h3",{"data-quickpaper-631f8201":""},["忽略或删除"]),a("p",{"data-quickpaper-631f8201":""},["已经通过add添加到仓库的文件，如果想删除，需要执行下面命令回退到unversioned状态："]),a("pre",{"q-code":"","data-quickpaper-631f8201":""},["svn revert file --depth infinity"])])};p.default=r}}]);