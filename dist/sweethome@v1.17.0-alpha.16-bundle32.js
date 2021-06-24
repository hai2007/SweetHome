(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{134:function(a,c,e){var p=e(135);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,e(2).default)("data-quickpaper-5c74c4bf",p,!0)},135:function(a,c,e){(a.exports=e(1)(!1)).push([a.i,"",""])},202:function(a,c,e){"use strict";e.r(c);var p={};e(134);p.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-5c74c4bf":""},[a("h2",{"data-quickpaper-5c74c4bf":""},["Git版本控制"]),a("ul",{"data-quickpaper-5c74c4bf":""},[a("li",{"data-quickpaper-5c74c4bf":""},[a("span",{class:"important","data-quickpaper-5c74c4bf":""},["工作区"]),"：就是你在电脑里能看到的目录。"]),a("li",{"data-quickpaper-5c74c4bf":""},[a("span",{class:"important","data-quickpaper-5c74c4bf":""},["暂存区"]),'：英文叫stage, 或index。一般存放在 ".git目录下" 下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index)。']),a("li",{"data-quickpaper-5c74c4bf":""},[a("span",{class:"important","data-quickpaper-5c74c4bf":""},["版本库"]),"：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。"])]),a("h3",{"data-quickpaper-5c74c4bf":""},["用户名和邮箱"]),a("p",{"data-quickpaper-5c74c4bf":""},["分别修改用户名和邮箱，其中--global带和不带的区别在于操作文件是.git/config还是~/.gitconfig，如果你使用的是--system则对应的就是/etc/gitconfig文件。"]),a("p",{"data-quickpaper-5c74c4bf":""},["对于是否在最后带username或email，区别在于你是设置还是查看。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git config [--global] user.name [username]↵git config [--global] user.email [email]"]),a("p",{"data-quickpaper-5c74c4bf":""},["如果想重新设置系统保存的用户名和密码。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["sudo git config --system --unset credential.helper"]),a("h3",{"data-quickpaper-5c74c4bf":""},["主机"]),a("p",{"data-quickpaper-5c74c4bf":""},["列出所有远程主机，使用-v选项（即：git remote -v），可以参看远程主机的网址,使用show hostname可以查看主机hostname的详细信息。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git remote [show hostname]"]),a("p",{"data-quickpaper-5c74c4bf":""},["添加连接的远程仓库，其中hostname是给仓库起的名称，uri是仓库地址。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git remote add hostname uri"]),a("p",{"data-quickpaper-5c74c4bf":""},["删除连接的远程仓库，其中hostname是给仓库起的名称。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git remote rm hostname"]),a("p",{"data-quickpaper-5c74c4bf":""},["修改远程主机oldhostname名称为newhostname。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git remote rename oldhostname newhostname"]),a("h3",{"data-quickpaper-5c74c4bf":""},["初始化"]),a("p",{"data-quickpaper-5c74c4bf":""},["使用该命令会在目录中创建新的Git仓库，本地化的。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git init"]),a("p",{"data-quickpaper-5c74c4bf":""},["把uri指定的仓库代码克隆到本地来，如果加了可选参数dir，表示克隆到该文件夹下。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git clone uri [dir]"]),a("h3",{"data-quickpaper-5c74c4bf":""},["提交"]),a("p",{"data-quickpaper-5c74c4bf":""},["从远程服务器拉取代码更新，hostname是对应的仓库名称，branchname是分支名称。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git pull hostname branchname"]),a("p",{"data-quickpaper-5c74c4bf":""},["【不推荐直接用这个】添加文件到缓冲区，你可以指定添加的文件filename，也可以使用-A把文件夹下全部文件添加到缓冲区。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git fetch hostname branchname↵git diff localbranchname hostname/branchname[ -- filepath][ >>filePath]↵git merge hostname/branchname"]),a("p",{"data-quickpaper-5c74c4bf":""},["【推荐使用这个比较安全】以上命令的含义：首先从远程的hostname的branchname分支下载最新的版本到hostname/branchname分支上，然后比较本地的branchname分支和hostname/branchname分支的差别，最后进行合并。"]),a("p",{"data-quickpaper-5c74c4bf":""},["最后可选参数 -- filepath是指定对比的文件，不指定就是全部文件。"]),a("p",{"data-quickpaper-5c74c4bf":""},["最后的可选参数 >>filePath表示把差异文件输出到文件，方便查看。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git add filename|-A"]),a("p",{"data-quickpaper-5c74c4bf":""},["提交代码到本地仓库，-m后面的remark表示对这次提交的描述。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git commit [-m remark]"]),a("p",{"data-quickpaper-5c74c4bf":""},["提交代码到远程服务器，hostname是对应的仓库名称，branchname是分支名称。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git push hostname branchname"]),a("h3",{"data-quickpaper-5c74c4bf":""},["日志"]),a("p",{"data-quickpaper-5c74c4bf":""},["查看日志（-p显示每次提交的内容差异），后面的那些可选参数是对日志过滤以后再显示，-num举个例子：-2表示查看最近2次的提交历史记录，后面的fileName和branchName方便表示查看特定文件和分支的日志，commit代表查看提交日志。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git log [-p] [-num|fileName|branchName|commit]"]),a("p",{"data-quickpaper-5c74c4bf":""},["显示整个本地仓储的commit，包括所有branch的commit，甚至包括已经撤销的commit，只要HEAD发生了变化，就会在reflog里面看得到，git log只包括当前分支的commit。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git reflog"]),a("h3",{"data-quickpaper-5c74c4bf":""},["回退"]),a("p",{"data-quickpaper-5c74c4bf":""},["将特定的filename文件回滚到hashname提交。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git checkout hashname filename"]),a("p",{"data-quickpaper-5c74c4bf":""},["用暂存区的所有文件直接覆盖本地文件，不给用户任何确认的机会，可以理解放弃本地修改。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git checkout ."]),a("p",{"data-quickpaper-5c74c4bf":""},["如果发现最新的一次提交完了加某个文件,它会把最新的提交打回暂存区，并尝试重新提交。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git commit —amend"]),a("p",{"data-quickpaper-5c74c4bf":""},["把add添加的文件filename从缓冲区删除。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git reset -- filename"]),a("p",{"data-quickpaper-5c74c4bf":""},["恢复到hashname指定的提交时，不保留修改。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git reset --hard hashname"]),a("p",{"data-quickpaper-5c74c4bf":""},["恢复到hashname指定的提交时，保留修改。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git reset --soft hashname"]),a("p",{"data-quickpaper-5c74c4bf":""},["回滚提交，其中HEAD是最新的一次提交别名（git revert是用一次新的commit来回滚之前的commit，git reset是直接删除指定的commit。）。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git revert HEAD|hashname"]),a("h3",{"data-quickpaper-5c74c4bf":""},["比较"]),a("p",{"data-quickpaper-5c74c4bf":""},["查看两次提交对比修改了什么，可以看见他们之间的全部更改。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git diff commitFromHashname..commitToHashname"]),a("p",{"data-quickpaper-5c74c4bf":""},["执行该命令可以知道仓库目前的状态，是否是最新代码，有没有修改等。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git status"]),a("p",{"data-quickpaper-5c74c4bf":""},["查看当前全部文件的修改"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git diff HEAD"]),a("p",{"data-quickpaper-5c74c4bf":""},["仅查看变化（changes 【not staged】to be commited）"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git diff"]),a("p",{"data-quickpaper-5c74c4bf":""},["仅查看变化（changes 【staged】to be commited）"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git diff --staged"]),a("h3",{"data-quickpaper-5c74c4bf":""},["合并"]),a("p",{"data-quickpaper-5c74c4bf":""},["合并分支branchname到当前活跃分支。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git merge|rebase branchname"]),a("h3",{"data-quickpaper-5c74c4bf":""},["暂存"]),a("p",{"data-quickpaper-5c74c4bf":""},["暂存当前正在进行的工作，比如想pull最新代码，又不想加新commit，或者另外一种情况，为了fix一个紧急的bug，先stash，使返回到自己上一个commit,改完bug之后再stash pop，继续原来的工作。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git stash"]),a("p",{"data-quickpaper-5c74c4bf":""},["取出最后暂存的，并从暂存栈移除。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git stash pop"]),a("p",{"data-quickpaper-5c74c4bf":""},["将当前的暂存栈信息打印出来。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git stash list"]),a("p",{"data-quickpaper-5c74c4bf":""},["将暂存栈清空。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git stash clear"]),a("p",{"data-quickpaper-5c74c4bf":""},["将你指定版本号为stash@{num}的工作取出来，不会移除。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git stash apply stash@{num}"]),a("h3",{"data-quickpaper-5c74c4bf":""},["标签"]),a("p",{"data-quickpaper-5c74c4bf":""},["查看已经打的标签，如果要进行筛选，可以使用-l添加选择（比如git tag -l v1.会选择开头是v1.标签，而git tag -l .2会选择结尾是.2的，以此类推别的，*就是一个通配符）。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git tag [-l 筛选表达式]"]),a("p",{"data-quickpaper-5c74c4bf":""},["打一个名称为tagname并添加该标签的注释为tagremark的标签，这种是普通的标签（如果你有GPG私钥，把-a换成-s就是前面的tag了）。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git tag -a tagname [-m tagremark]"]),a("p",{"data-quickpaper-5c74c4bf":""},["提交标签tagname到远程hostname。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git push hostname tagname"]),a("p",{"data-quickpaper-5c74c4bf":""},["提交全部标签到远程hostname。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git push hostname --tags"]),a("p",{"data-quickpaper-5c74c4bf":""},["删除标签tagname(本地的)。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git tag -d tagname"]),a("p",{"data-quickpaper-5c74c4bf":""},["删除标签tagname(远程的)。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git push hostname -d tag tagname"]),a("h3",{"data-quickpaper-5c74c4bf":""},["分支"]),a("p",{"data-quickpaper-5c74c4bf":""},["查看分支状态，如果使用-r（即：git branch -r）表示查看远程分支状态，-a选项查看所有分支。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git branch"]),a("p",{"data-quickpaper-5c74c4bf":""},["创建一个名称叫branchname的分支，此分支初始化拥有的是你创建此分支时活跃分支。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git branch branchname"]),a("p",{"data-quickpaper-5c74c4bf":""},["切换当前活跃分支为branchname。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git checkout branchname"]),a("p",{"data-quickpaper-5c74c4bf":""},["删除本地指定分支branchname。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git branch -d branchname"]),a("p",{"data-quickpaper-5c74c4bf":""},["删除远程指定分支branchname。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git push hostname --delete branchname"]),a("p",{"data-quickpaper-5c74c4bf":""},["修改本地分支oldbranchname的名称为newbranchname。"]),a("pre",{"q-code":"","data-quickpaper-5c74c4bf":""},["git branch -m oldbranchname newbranchname"])])};c.default=p}}]);