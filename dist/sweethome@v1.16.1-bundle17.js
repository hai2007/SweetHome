(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{137:function(a,p,e){"use strict";e.r(p);var d={};e(81);d.render=function(a){return a("div",{quickpaper:"","data-quickpaper-609bd09a":""},[a("div",{class:"doc-view","data-quickpaper-609bd09a":""},[a("h2",{"data-quickpaper-609bd09a":""},["npm命令"]),a("h3",{"data-quickpaper-609bd09a":""},["发布和撤销包"]),a("p",{"data-quickpaper-609bd09a":""},["发布一个普通的包很简单，首先我们需要登录："]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},["npm login"]),a("p",{"data-quickpaper-609bd09a":""},["然后根据提示输入用户名、密码和邮箱即可。为了验证登录是否成功，执行下面命令："]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},["npm who am i"]),a("p",{"data-quickpaper-609bd09a":""},["如果发现正常打印出来用户名就基本说明登录没有问题（登录只需要一次，不是每次发布的时候都需要重新登录）。"]),a("p",{"data-quickpaper-609bd09a":""},["当然，你也可以退出登录："]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},["npm logout"]),a("p",{"data-quickpaper-609bd09a":""},["接着，我们需要提前配置好package.json文件，然后执行下面命令即可发布："]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},["npm publish"]),a("p",{"data-quickpaper-609bd09a":""},["如果刚刚发布的包需要撤销（发布一定时间内可以成功，超过一定时间以后，无法撤销）："]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},["npm unpublish yourName@0.0.0"]),a("p",{"data-quickpaper-609bd09a":""},["上面的命令会撤销yourName包发布的0.0.0版本的文件。"]),a("h3",{"data-quickpaper-609bd09a":""},["特殊发布"]),a("p",{"data-quickpaper-609bd09a":""},["发布带@的包（就是包名类似：@hai2007/tool.js的包）需要添加一些额外的参数:"]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},["npm publish --access public"]),a("p",{"data-quickpaper-609bd09a":""},["默认情况下，我们发布的包属于latest，如果想发布固定类型的（比如beta或alpha，next等），需要特别标记一下，比如beta:"]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},["npm publish --tag=beta"]),a("p",{"data-quickpaper-609bd09a":""},["对应的，安装的时候也可以指明特殊类型："]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},["npm install <pkg>@beta"]),a("h3",{"data-quickpaper-609bd09a":""},["工具类配置"]),a("p",{"data-quickpaper-609bd09a":""},["普通的包我们都是通过在package.json中配置main、module或browser来指定入口js后发布的，而如果你希望安装后可以通过命令行调用该工具，就需要额外添加一个配置项：bin。"]),a("p",{"data-quickpaper-609bd09a":""},["比如发布的是一个工具demo-cli（在bin目录下新建一个脚本文件cli），你需要添加下列配置："]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},['{↵    "bin": {"demo-cli": "bin/cli"}↵}']),a("p",{"data-quickpaper-609bd09a":""},["发布后，如果是 -g 全局安装，直接在命令行中通过demo-cli即可执行该脚本。"]),a("h3",{"data-quickpaper-609bd09a":""},["修改和查看镜像"]),a("p",{"data-quickpaper-609bd09a":""},["有时候我们的npm镜像由于一些原因可能会被修改，可以通过下面命令查看："]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},["npm get registry"]),a("p",{"data-quickpaper-609bd09a":""},["如果打印的地址不是官方镜像，可以通过下面命令恢复："]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},["npm config set registry https://registry.npmjs.org/"]),a("h3",{"data-quickpaper-609bd09a":""},["包标记"]),a("p",{"data-quickpaper-609bd09a":""},["如果已经发布的包过时或别的原因想通知使用者弃用："]),a("pre",{"q-code":"","data-quickpaper-609bd09a":""},["npm deprecate <pkg>[@<version>] <message>"])])])};p.default=d},81:function(a,p,e){var d=e(82);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);(0,e(2).default)("data-quickpaper-609bd09a",d,!0)},82:function(a,p,e){(a.exports=e(1)(!1)).push([a.i,"",""])}}]);