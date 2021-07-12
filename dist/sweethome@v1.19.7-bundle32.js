(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{137:function(a,d,t){var p=t(138);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,t(2).default)("data-quickpaper-7d00206f",p,!0)},138:function(a,d,t){(a.exports=t(1)(!1)).push([a.i,"",""])},202:function(a,d,t){"use strict";t.r(d);var p={};t(137);p.render=function(a){return a("div",{quickpaper:"","data-quickpaper-7d00206f":""},[a("div",{class:"doc-view","data-quickpaper-7d00206f":""},[a("h2",{"data-quickpaper-7d00206f":""},["HTTP请求响应码"]),a("table",{"data-quickpaper-7d00206f":""},[a("thead",{"data-quickpaper-7d00206f":""},[a("tr",{"data-quickpaper-7d00206f":""},[a("th",{"data-quickpaper-7d00206f":""},["响应码"]),a("th",{"data-quickpaper-7d00206f":""},["解释"]),a("th",{"data-quickpaper-7d00206f":""},["版本"])])]),a("tbody",{"data-quickpaper-7d00206f":""},[a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["100"]),a("td",{"data-quickpaper-7d00206f":""},["初始的请求已经接受，客户应当继续发送请求的其余部分。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["101"]),a("td",{"data-quickpaper-7d00206f":""},["服务器将遵从客户的请求转换到另外一种协议。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["200"]),a("td",{"data-quickpaper-7d00206f":""},["一切正常，对GET和POST请求的应答文档跟在后面。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["201"]),a("td",{"data-quickpaper-7d00206f":""},["服务器已经创建了文档，Location头给出了它的URL。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["202"]),a("td",{"data-quickpaper-7d00206f":""},["已经接受请求，但处理尚未完成。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["203"]),a("td",{"data-quickpaper-7d00206f":""},["文档已经正常地返回，但一些应答头可能不正确，因为使用的是文档的拷贝。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["204"]),a("td",{"data-quickpaper-7d00206f":""},["没有新文档，浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是很有用的。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["205"]),a("td",{"data-quickpaper-7d00206f":""},["没有新的内容，但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["206"]),a("td",{"data-quickpaper-7d00206f":""},["客户发送了一个带有Range头的GET请求，服务器完成了它。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["300"]),a("td",{"data-quickpaper-7d00206f":""},["客户请求的文档可以在多个位置找到，这些位置已经在返回的文档内列出。如果服务器要提出优先选择，则应该在Location应答头指明。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["301"]),a("td",{"data-quickpaper-7d00206f":""},["客户请求的文档在其他地方，新的URL在Location头中给出，浏览器应该自动地访问新的URL。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["302"]),a("td",{"data-quickpaper-7d00206f":""},["类似于301，但新的URL应该被视为临时性的替代，而不是永久性的。注意，在HTTP1.0中对应的状态信息是“Moved↵                        Temporatily”。出现该状态代码时，浏览器能够自动访问新的URL，因此它是一个很有用的状态代码。注意这个状态代码有时候可以和301替换使用。例如，如果浏览器错误地请求http"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["303"]),a("td",{"data-quickpaper-7d00206f":""},["类似于301/302，不同之处在于，如果原来的请求是POST，Location头指定的重定向目标文档应该通过GET提取。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["304"]),a("td",{"data-quickpaper-7d00206f":""},["客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告↵                        诉客户，原来缓冲的文档还可以继续使用。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["305"]),a("td",{"data-quickpaper-7d00206f":""},["客户请求的文档应该通过Location头所指明的代理服务器提取。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["307"]),a("td",{"data-quickpaper-7d00206f":""},["和302↵                        （Found）相同。许多浏览器会错误地响应302应答进行重定向，即使原来的请求是POST，即使它实际上只能在POST请求的应答是303时才能重定 向。由于这个原因，HTTP↵                        1.1新增了307，以便更加清除地区分几个状态代码：当出现303应答时，浏览器可以跟随重定向的GET和POST请求；如果是307应答，则浏览器只 能跟随对GET请求的重定向。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["400"]),a("td",{"data-quickpaper-7d00206f":""},["请求出现语法错误。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["401"]),a("td",{"data-quickpaper-7d00206f":""},["客户试图未经授权访问受密码保护的页面。应答中会包含一个WWW-Authenticate头，浏览器据此显示用户名字/密码对话框，然后在填↵                        写合适的Authorization头后再次发出请求。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["403"]),a("td",{"data-quickpaper-7d00206f":""},["资源不可用。服务器理解客户的请求，但拒绝处理它。通常由于服务器上文件或目录的权限设置导致。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["404"]),a("td",{"data-quickpaper-7d00206f":""},["无法找到指定位置的资源。这也是一个常用的应答。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["405"]),a("td",{"data-quickpaper-7d00206f":""},["请求方法（GET、POST、HEAD、DELETE、PUT、TRACE等）对指定的资源不适用。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["406"]),a("td",{"data-quickpaper-7d00206f":""},["指定的资源已经找到，但它的MIME类型和客户在Accpet头中所指定的不兼容。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["407"]),a("td",{"data-quickpaper-7d00206f":""},["类似于401，表示客户必须先经过代理服务器的授权。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["408"]),a("td",{"data-quickpaper-7d00206f":""},["在服务器许可的等待时间内，客户一直没有发出任何请求。客户可以在以后重复同一请求。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["409"]),a("td",{"data-quickpaper-7d00206f":""},["通常和PUT请求有关。由于请求和资源的当前状态相冲突，因此请求不能成功。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["410"]),a("td",{"data-quickpaper-7d00206f":""},["所请求的文档已经不再可用，而且服务器不知道应该重定向到哪一个地址。它和404的不同在于，返回407表示文档永久地离开了指定的位置，而↵                        404表示由于未知的原因文档不可用。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["411"]),a("td",{"data-quickpaper-7d00206f":""},["服务器不能处理请求，除非客户发送一个Content-Length头。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["412"]),a("td",{"data-quickpaper-7d00206f":""},["请求头中指定的一些前提条件失败。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["413"]),a("td",{"data-quickpaper-7d00206f":""},["目标文档的大小超过服务器当前愿意处理的大小。如果服务器认为自己能够稍后再处理该请求，则应该提供一个Retry-After头。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["414"]),a("td",{"data-quickpaper-7d00206f":""},["URI太长。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["416"]),a("td",{"data-quickpaper-7d00206f":""},["服务器不能满足客户在请求中指定的Range头。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["500"]),a("td",{"data-quickpaper-7d00206f":""},["服务器遇到了意料不到的情况，不能完成客户的请求。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["501"]),a("td",{"data-quickpaper-7d00206f":""},["服务器不支持实现请求所需要的功能。例如，客户发出了一个服务器不支持的PUT请求。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["502"]),a("td",{"data-quickpaper-7d00206f":""},["服务器作为网关或者代理时，为了完成请求访问下一个服务器，但该服务器返回了非法的应答。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["503"]),a("td",{"data-quickpaper-7d00206f":""},["服务器由于维护或者负载过重未能应答。例如，Servlet可能在数据库连接池已满的情况下返回503。服务器返回503时可以提供一个↵                        Retry-After头。"]),a("td",{"data-quickpaper-7d00206f":""},["无"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["504"]),a("td",{"data-quickpaper-7d00206f":""},["由作为代理或网关的服务器使用，表示不能及时地从远程服务器获得应答。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])]),a("tr",{"data-quickpaper-7d00206f":""},[a("td",{"data-quickpaper-7d00206f":""},["505"]),a("td",{"data-quickpaper-7d00206f":""},["服务器不支持请求中所指明的HTTP版本。"]),a("td",{"data-quickpaper-7d00206f":""},["1.1"])])])])])])};d.default=p}}]);