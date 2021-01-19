(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{57:function(e,c,a){var p=a(58);"string"==typeof p&&(p=[[e.i,p,""]]),p.locals&&(e.exports=p.locals);(0,a(1).default)("data-quickpaper-4cc7e2fe",p,!0)},58:function(e,c,a){(e.exports=a(0)(!1)).push([e.i,"",""])},76:function(e,c,a){"use strict";a.r(c);var p={};a(57);p.render=function(e){return e("div",{quickpaper:"","data-quickpaper-4cc7e2fe":""},[e("div",{class:"doc-view","data-quickpaper-4cc7e2fe":""},[e("h2",{"data-quickpaper-4cc7e2fe":""},["npm命令"]),e("h3",{"data-quickpaper-4cc7e2fe":""},["发布和撤销包"]),e("p",{"data-quickpaper-4cc7e2fe":""},["发布一个普通的包很简单，首先我们需要登录："]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},["npm login"]),e("p",{"data-quickpaper-4cc7e2fe":""},["然后根据提示输入用户名、密码和邮箱即可。为了验证登录是否成功，执行下面命令："]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},["npm who am i"]),e("p",{"data-quickpaper-4cc7e2fe":""},["如果发现正常打印出来用户名就基本说明登录没有问题（登录只需要一次，不是每次发布的时候都需要重新登录）。"]),e("p",{"data-quickpaper-4cc7e2fe":""},["当然，你也可以退出登录："]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},["npm logout"]),e("p",{"data-quickpaper-4cc7e2fe":""},["接着，我们需要提前配置好package.json文件，然后执行下面命令即可发布："]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},["npm publish"]),e("p",{"data-quickpaper-4cc7e2fe":""},["如果刚刚发布的包需要撤销（发布一定时间内可以成功，超过一定时间以后，无法撤销）："]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},["npm unpublish yourName@0.0.0"]),e("p",{"data-quickpaper-4cc7e2fe":""},["上面的命令会撤销yourName包发布的0.0.0版本的文件。"]),e("h3",{"data-quickpaper-4cc7e2fe":""},["特殊发布"]),e("p",{"data-quickpaper-4cc7e2fe":""},["发布带@的包（就是包名类似：@yelloxing/core.js的包）需要添加一些额外的参数:"]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},["npm publish --access public"]),e("p",{"data-quickpaper-4cc7e2fe":""},["默认情况下，我们发布的包属于latest，如果想发布固定类型的（比如beta或alpha，next等），需要特别标记一下，比如beta:"]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},["npm publish --tag=beta"]),e("p",{"data-quickpaper-4cc7e2fe":""},["对应的，安装的时候也可以指明特殊类型："]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},["npm install <pkg>@beta"]),e("h3",{"data-quickpaper-4cc7e2fe":""},["工具类配置"]),e("p",{"data-quickpaper-4cc7e2fe":""},["普通的包我们都是通过在package.json中配置main、module或browser来指定入口js后发布的，而如果你希望安装后可以通过命令行调用该工具，就需要额外添加一个配置项：bin。"]),e("p",{"data-quickpaper-4cc7e2fe":""},["比如发布的是一个工具demo-cli（在bin目录下新建一个脚本文件cli），你需要添加下列配置："]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},['{↵    "bin": {"demo-cli": "bin/cli"}↵}']),e("p",{"data-quickpaper-4cc7e2fe":""},["发布后，如果是 -g 全局安装，直接在命令行中通过demo-cli即可执行该脚本。"]),e("h3",{"data-quickpaper-4cc7e2fe":""},["修改和查看镜像"]),e("p",{"data-quickpaper-4cc7e2fe":""},["有时候我们的npm镜像由于一些原因可能会被修改，可以通过下面命令查看："]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},["npm get registry"]),e("p",{"data-quickpaper-4cc7e2fe":""},["如果打印的地址不是官方镜像，可以通过下面命令恢复："]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},["npm config set registry https://registry.npmjs.org/"]),e("h3",{"data-quickpaper-4cc7e2fe":""},["包标记"]),e("p",{"data-quickpaper-4cc7e2fe":""},["如果已经发布的包过时或别的原因想通知使用者弃用："]),e("pre",{"q-code":"","data-quickpaper-4cc7e2fe":""},["npm deprecate <pkg>[@<version>] <message>"])])])};c.default=p}}]);