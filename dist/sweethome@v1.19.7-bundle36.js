(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{135:function(c,a,p){var e=p(136);"string"==typeof e&&(e=[[c.i,e,""]]),e.locals&&(c.exports=e.locals);(0,p(2).default)("data-quickpaper-73cc16f4",e,!0)},136:function(c,a,p){(c.exports=p(1)(!1)).push([c.i,"",""])},203:function(c,a,p){"use strict";p.r(a);var e={};p(135);e.render=function(c){return c("div",{quickpaper:"","data-quickpaper-73cc16f4":""},[c("div",{class:"doc-view","data-quickpaper-73cc16f4":""},[c("h2",{"data-quickpaper-73cc16f4":""},["npm命令"]),c("h3",{"data-quickpaper-73cc16f4":""},["发布和撤销包"]),c("p",{"data-quickpaper-73cc16f4":""},["发布一个普通的包很简单，首先我们需要登录："]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},["npm login"]),c("p",{"data-quickpaper-73cc16f4":""},["然后根据提示输入用户名、密码和邮箱即可。为了验证登录是否成功，执行下面命令："]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},["npm who am i"]),c("p",{"data-quickpaper-73cc16f4":""},["如果发现正常打印出来用户名就基本说明登录没有问题（登录只需要一次，不是每次发布的时候都需要重新登录）。"]),c("p",{"data-quickpaper-73cc16f4":""},["当然，你也可以退出登录："]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},["npm logout"]),c("p",{"data-quickpaper-73cc16f4":""},["接着，我们需要提前配置好package.json文件，然后执行下面命令即可发布："]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},["npm publish"]),c("p",{"data-quickpaper-73cc16f4":""},["如果刚刚发布的包需要撤销（发布一定时间内可以成功，超过一定时间以后，无法撤销）："]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},["npm unpublish yourName@0.0.0"]),c("p",{"data-quickpaper-73cc16f4":""},["上面的命令会撤销yourName包发布的0.0.0版本的文件。"]),c("h3",{"data-quickpaper-73cc16f4":""},["特殊发布"]),c("p",{"data-quickpaper-73cc16f4":""},["发布带@的包（就是包名类似：@hai2007/tool.js的包）需要添加一些额外的参数:"]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},["npm publish --access public"]),c("p",{"data-quickpaper-73cc16f4":""},["默认情况下，我们发布的包属于latest，如果想发布固定类型的（比如beta或alpha，next等），需要特别标记一下，比如beta:"]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},["npm publish --tag=beta"]),c("p",{"data-quickpaper-73cc16f4":""},["对应的，安装的时候也可以指明特殊类型："]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},["npm install <pkg>@beta"]),c("h3",{"data-quickpaper-73cc16f4":""},["工具类配置"]),c("p",{"data-quickpaper-73cc16f4":""},["普通的包我们都是通过在package.json中配置main、module或browser来指定入口js后发布的，而如果你希望安装后可以通过命令行调用该工具，就需要额外添加一个配置项：bin。"]),c("p",{"data-quickpaper-73cc16f4":""},["比如发布的是一个工具demo-cli（在bin目录下新建一个脚本文件cli），你需要添加下列配置："]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},['{↵    "bin": {"demo-cli": "bin/cli"}↵}']),c("p",{"data-quickpaper-73cc16f4":""},["发布后，如果是 -g 全局安装，直接在命令行中通过demo-cli即可执行该脚本。"]),c("h3",{"data-quickpaper-73cc16f4":""},["修改和查看镜像"]),c("p",{"data-quickpaper-73cc16f4":""},["有时候我们的npm镜像由于一些原因可能会被修改，可以通过下面命令查看："]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},["npm get registry"]),c("p",{"data-quickpaper-73cc16f4":""},["如果打印的地址不是官方镜像，可以通过下面命令恢复："]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},["npm config set registry https://registry.npmjs.org/"]),c("h3",{"data-quickpaper-73cc16f4":""},["包标记"]),c("p",{"data-quickpaper-73cc16f4":""},["如果已经发布的包过时或别的原因想通知使用者弃用："]),c("pre",{"q-code":"","data-quickpaper-73cc16f4":""},["npm deprecate <pkg>[@<version>] <message>"])])])};a.default=e}}]);