(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{44:function(e,a,i){var r=i(45);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,i(1).default)("data-icrush-f9b01ee0",r,!0)},45:function(e,a,i){(e.exports=i(0)(!1)).push([e.i,"",""])},60:function(e,a,i){"use strict";i.r(a);var r={};i(44);r.render=function(e){return e("div",{class:"doc-view","data-icrush-f9b01ee0":""},[e("h2",{"data-icrush-f9b01ee0":""},["npm命令"]),e("h3",{"data-icrush-f9b01ee0":""},["发布和撤销包"]),e("p",{"data-icrush-f9b01ee0":""},["发布一个普通的包很简单，首先我们需要登录："]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},["npm login"]),e("p",{"data-icrush-f9b01ee0":""},["然后根据提示输入用户名、密码和邮箱即可。为了验证登录是否成功，执行下面命令："]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},["npm who am i"]),e("p",{"data-icrush-f9b01ee0":""},["如果发现正常打印出来用户名就基本说明登录没有问题（登录只需要一次，不是每次发布的时候都需要重新登录）。"]),e("p",{"data-icrush-f9b01ee0":""},["当然，你也可以退出登录："]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},["npm logout"]),e("p",{"data-icrush-f9b01ee0":""},["接着，我们需要提前配置好package.json文件，然后执行下面命令即可发布："]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},["npm publish"]),e("p",{"data-icrush-f9b01ee0":""},["如果刚刚发布的包需要撤销（发布一定时间内可以成功，超过一定时间以后，无法撤销）："]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},["npm unpublish yourName@0.0.0"]),e("p",{"data-icrush-f9b01ee0":""},["上面的命令会撤销yourName包发布的0.0.0版本的文件。"]),e("h3",{"data-icrush-f9b01ee0":""},["特殊发布"]),e("p",{"data-icrush-f9b01ee0":""},["发布带@的包（就是包名类似：@yelloxing/core.js的包）需要添加一些额外的参数:"]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},["npm publish --access public"]),e("p",{"data-icrush-f9b01ee0":""},["默认情况下，我们发布的包属于latest，如果想发布固定类型的（比如beta或alpha，next等），需要特别标记一下，比如beta:"]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},["npm publish --tag=beta"]),e("p",{"data-icrush-f9b01ee0":""},["对应的，安装的时候也可以指明特殊类型："]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},["npm install <pkg>@beta"]),e("h3",{"data-icrush-f9b01ee0":""},["工具类配置"]),e("p",{"data-icrush-f9b01ee0":""},["普通的包我们都是通过在package.json中配置main、module或browser来指定入口js后发布的，而如果你希望安装后可以通过命令行调用该工具，就需要额外添加一个配置项：bin。"]),e("p",{"data-icrush-f9b01ee0":""},["比如发布的是一个工具demo-cli（在bin目录下新建一个脚本文件cli），你需要添加下列配置："]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},['{↵    "bin": {"demo-cli": "bin/cli"}↵}']),e("p",{"data-icrush-f9b01ee0":""},["发布后，如果是 -g 全局安装，直接在命令行中通过demo-cli即可执行该脚本。"]),e("h3",{"data-icrush-f9b01ee0":""},["修改和查看镜像"]),e("p",{"data-icrush-f9b01ee0":""},["有时候我们的npm镜像由于一些原因可能会被修改，可以通过下面命令查看："]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},["npm get registry"]),e("p",{"data-icrush-f9b01ee0":""},["如果打印的地址不是官方镜像，可以通过下面命令恢复："]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},["npm config set registry https://registry.npmjs.org/"]),e("h3",{"data-icrush-f9b01ee0":""},["包标记"]),e("p",{"data-icrush-f9b01ee0":""},["如果已经发布的包过时或别的原因想通知使用者弃用："]),e("pre",{"ui-code":"","data-icrush-f9b01ee0":""},["npm deprecate <pkg>[@<version>] <message>"])])};a.default=r}}]);