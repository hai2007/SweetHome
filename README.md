# [🏠 今天，你写代码了吗？](https://hai2007.gitee.io/sweethome/)

<p align="center">
    <a href="https://github.com/hai2007/SweetHome/graphs/code-frequency" target='_blank'>
        <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/hai2007/SweetHome">
    </a>
    <a href="https://github.com/hai2007/SweetHome/graphs/commit-activity" target='_blank'>
        <img alt="GitHub repo commit" src="https://img.shields.io/github/last-commit/hai2007/SweetHome">
    </a>
    <a href="https://github.com/hai2007/SweetHome" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/SweetHome?style=social">
    </a>
</p >

```
我还惊讶地意识到， 在我生命中有很多时刻， 每当我遇到一个遥不
可及、令人害怕的情境，并感到惊慌失措时， 我都能够应付——因为我
回想起了很久以前自己上过的那一课。

我提醒自己不要看下面遥远的岩石， 而是注意相对轻松、容易的第一
小步， 迈出一小步、再一小步，就这样体会每一步带来的成就感，
直到完成了自己想要完成的， 达到了自己的目标，然后再回头看时，
不禁对自己走过的这段漫漫长路感到惊讶和自豪。

               ———— 摘自 莫顿·亨特《走一步，再走一步》
```

<p align='center'>
    <a href='https://hai2007.gitee.io/sweethome/' target='_blank'>
        <img src="https://s05.flagcounter.com/count2/bdd0/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_12/viewers_3/labels_1/pageviews_1/flags_0/percent_0/">
    </a>
</p>

## 如何启动本地编辑？

首先，你需要确保本地安装了node.js，然后，执行下面命令安装项目依赖：

```bash
npm install
```

接着，启动下面命令会自动打开页面，修改内容页面也自动刷新：

```bash
npm run dev
```

如果你想发布开发的代码，执行下面命令进行打包：

```bash
npm run build
```

## 在线代码演示

为了更好的演示代码，我们提供了一个前端代码在线可编辑运行工具，访问地址：

```
https://hai2007.gitee.io/sweethome/#/editor
```

如果你希望打开的时候使用你设定的初始化代码，有下列三种方式：

- 第一种：通过共享storage的方式

非跨域的页面如果想控制打开页面编辑器内容，只需要在打开前主动修改```localStorage```的```hai2007-sweethome-editor-html-code```条目内容即可。

- 第二种：通过URL参数提供代码地址

任意页面打开此页面的时候，如何想选择提前定义好的某个内容作为编辑器内容，可以通过参数告知，语法：```?file=xxx```。当然，页面需要提前在```examples/lazy-load.js```中懒加载注册好。

- 第三种：通过URL参数提供代码内容

任意页面打开此页面的时候，如何想直接传递某个内容作为编辑器内容，可以通过参数告知，语法：```?content=xxx```。此方法的缺点是，内容不可以过多，其次，如果没有特别说明，传递的内容需要经过```encodeURIComponent```处理，如果没有经过处理，语法：```?content=xxx&decode=no```。

开源协议
---------------------------------------
[Apache-2.0](https://github.com/hai2007/SweetHome/blob/master/LICENSE)

Copyright (c) 2016-2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
