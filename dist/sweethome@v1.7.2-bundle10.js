(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{62:function(e,r,o){var s=o(63);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,o(1).default)("data-quickpaper-32cfcb37",s,!0)},63:function(e,r,o){(e.exports=o(0)(!1)).push([e.i,"",""])},69:function(e,r,o){"use strict";o.r(r);var s={};o(62);s.render=function(e){return e("div",{class:"doc-view",quickpaper:"","data-quickpaper-32cfcb37":""},[e("h2",{"data-quickpaper-32cfcb37":""},["nginx基本配置和常见问题"]),e("h3",{"data-quickpaper-32cfcb37":""},["session丢失问题"]),e("h4",{"data-quickpaper-32cfcb37":""},["发生情况"]),e("p",{"data-quickpaper-32cfcb37":""},["转发的时候，如果只是host、端口转换，则session不会丢失，如果路径也变化了，则需要设置cookie的路径转换，不然session会发生丢失。"]),e("h4",{"data-quickpaper-32cfcb37":""},["解决方案"]),e("p",{"data-quickpaper-32cfcb37":""},["通过设置cookie的路径转换就可以解决了，具体例子如下："]),e("pre",{"q-code":"","data-quickpaper-32cfcb37":""},["location /pre-url/ {↵    proxy_pass http://serverProxy/new-url;↵    proxy_cookie_path  /new-url /pre-url;↵}"]),e("h3",{"data-quickpaper-32cfcb37":""},["配置文件说明"]),e("pre",{"q-code":"","data-quickpaper-32cfcb37":""},["#定义Nginx运行的用户和用户组↵#user  nobody;↵↵#nginx进程数，建议设置为等于CPU总核心数。↵worker_processes  1;↵↵#全局错误日志↵error_log   /Users/yelloxing/nginxConfig/error_debug.log  debug;↵error_log   /Users/yelloxing/nginxConfig/error_notice.log  notice;↵error_log   /Users/yelloxing/nginxConfig/error_info.log  info;↵error_log   /Users/yelloxing/nginxConfig/error_warn.log  warn;↵error_log   /Users/yelloxing/nginxConfig/error_error.log  error;↵error_log   /Users/yelloxing/nginxConfig/error_crit.log  crit;↵↵#进程文件↵pid       /Users/yelloxing/nginxConfig/nginx.pid;↵↵events {↵    #单个进程最大连接数（最大连接数=连接数*进程数）↵    worker_connections  256;↵}↵↵#设定http服务器，利用它的反向代理功能提供负载均衡支持↵http {↵↵    #文件扩展名与文件类型映射表↵    include      /Users/yelloxing/nginxConfig/mime.types;↵↵    #默认文件类型↵    default_type  application/octet-stream;↵↵    #默认编码↵    #charset utf-8;↵↵    log_format  main  '$remote_addr - $remote_user [$time_local] \"$request\" '↵                        '\"$request_body\" $body_bytes_sent $status ';↵↵    #sendfile指令指定 nginx 是否调用sendfile 函数来输出文件，对于普通应用，必须设为on。↵    #如果用来进行下载等应用磁盘IO重负载应用，可设置为off，以平衡磁盘与网络IO处理速度，降低系统uptime。↵    sendfile        on;↵↵    #长连接超时时间，单位是秒↵    keepalive_timeout  65;↵↵    #预定义的第一个请求数据的地址↵    upstream localJsonProxy {↵        server 127.0.0.1:30000;↵    }↵↵    #负载均衡配置简单例子↵    #upstream serverName {↵    #    server 192.168.0.14 weight=10;↵    #    server 192.168.0.15 weight=10;↵    #}↵↵    #预定义的第二个请求数据的地址↵    upstream serverProxy {↵        server 192.168.0.16:20000;↵    }↵↵    #虚拟主机的配置↵    server {↵↵        #监听端口↵        listen       8080;↵        #域名可以有多个，用空格隔开↵        server_name  localhost;↵        access_log  /Users/yelloxing/nginxConfig/host.access.log main;↵↵        #---1↵        location / {↵            root  /Users/yelloxing/-------/source/;↵            index  index.html;↵        }↵↵        #---2↵        location /server/ {↵            proxy_pass http://serverProxy/server/;↵            proxy_redirect          off;↵        }↵↵        #---3↵        location /local/ {↵            rewrite ^(.*).do$ $1.json last;↵            proxy_pass http://localJsonProxy/;↵            proxy_redirect          off;↵        }↵    }↵↵    #虚拟主机的配置（这里是对应上面的『预定义的第一个请求数据的地址』）↵    server {↵        listen       30000;↵        server_name  dataServer;↵        access_log  /Users/yelloxing/nginxConfig/data.access.log main;↵↵        location ~ (.*\\.json) {↵            root   /Users/yelloxing/-------/source/data;↵            default_type application/json;↵            error_page 405 =200 $1;↵        }↵    }↵}"]),e("a",{class:"download",download:"mime.types",href:"./public/mime.types","data-quickpaper-32cfcb37":""},["下载mime.types"])])};r.default=s}}]);