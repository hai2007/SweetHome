(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{132:function(e,a,r){var p=r(133);"string"==typeof p&&(p=[[e.i,p,""]]),p.locals&&(e.exports=p.locals);(0,r(2).default)("data-quickpaper-391f5c52",p,!0)},133:function(e,a,r){(e.exports=r(1)(!1)).push([e.i,"",""])},206:function(e,a,r){"use strict";r.r(a);var p={};r(132);p.render=function(e){return e("div",{class:"doc-view",quickpaper:"","data-quickpaper-391f5c52":""},[e("h2",{"data-quickpaper-391f5c52":""},["自定义指令一些有价值的细节和技巧"]),e("pre",{"q-code":"","data-quickpaper-391f5c52":""},['angular.module(\'AppModuleName\', []).directive(\'uiDirective\', function() {↵    return {↵        "restrict":String,// 标明该指令可以在模板中用于元素E、属性A、类C和注释M或组合↵        "priority":Number,// 设置指令执行优先级，在某个DOM上优先级高的会先执行↵        "terminal":Boolean,// 为true时，指示优先级小于当前指令的指令都不执行，仅执行到本指令↵        "template":String or Template Function,// 就是设置模板，和下面的templateUrl属性两个只可以设置一个↵        "templateUrl":String or Template Function,// 除了字符串，这两个属性还可以设置函数↵        "replace":Boolean,// 指令模板是否替换原来的元素↵        "scope":Boolean,// 为true的时候，表示继承父scope，是一个新的scope，否则直接使用父scope↵        "controller":String or function(scope, element, attrs) { ... },// 指令自己的控制器↵        "require":String or Array,// 请求另外的controller，然后作为link方法的第四个参数传递进去↵        "link": function(scope, element, attrs,ctrl) { ... }, // 你需要知道link在每个实例都执行一遍，compile全程只会执行一遍↵        "compile":function(element, attrs) { ... } // 在此处写执行一次的代码，或者在link方法里面写和dom有关的操作↵    };↵});']),e("span",{class:"warn","data-quickpaper-391f5c52":""},["温馨提示：上面这些配置项并不用所有都是必要的，根据实际情况选择即可！"]),e("h3",{"data-quickpaper-391f5c52":""},["查找控制器的方法"]),e("p",{"data-quickpaper-391f5c52":""},["配置项",e("span",{class:"warn","data-quickpaper-391f5c52":""},["require"]),"用于配置查找控制器的方法，具体有如下几种方式："]),e("ul",{"data-quickpaper-391f5c52":""},[e("li",{"data-quickpaper-391f5c52":""},["使用？表示如果在当前指令中没有找到所需要的控制器，会将null作为传给link函数的第四个参数。"]),e("li",{"data-quickpaper-391f5c52":""},["如果添加了^前缀，指令会在上游的指令链中查找require参数所指定的控制器。"]),e("li",{"data-quickpaper-391f5c52":""},["如果没有前缀，指令将会在自身所提供的控制器中进行查找，如果没有找到任何控制器（或具有指定名字的指令）就抛出一个错误。"])]),e("p",{"data-quickpaper-391f5c52":""},['此外，他们也可以组合使用，比如require: "?^ngModel"。']),e("h3",{"data-quickpaper-391f5c52":""},["视图和model之间的数据格式化"]),e("p",{"data-quickpaper-391f5c52":""},["类似过滤器的功能，在写指令的时候，我们可能希望输入框在页面显示的是益于阅读的，而获取值的时候获取的是简洁的，因此你可能会需要在link中使用下面的方法来实现这个功能。"]),e("h4",{"data-quickpaper-391f5c52":""},["1.model到view的数据格式化："]),e("pre",{"q-code":"","data-quickpaper-391f5c52":""},["ctrl.$formatters.unshift(function(input) {});"]),e("h4",{"data-quickpaper-391f5c52":""},["2.view到model的数据格式化："]),e("pre",{"q-code":"","data-quickpaper-391f5c52":""},["ctrl.$parsers.unshift(function(input) {});"]),e("p",{"data-quickpaper-391f5c52":""},["上面的$formatters和$parsers就是二个队列，视图到model和model到视图，会方便经过里面定义的方法的过滤，有点类似管道流，最后流到目的地。"]),e("p",{class:"warn","data-quickpaper-391f5c52":""},['温馨提示：别忘了设置类似require: "?ngModel"这样的语句去查找控制器。']),e("h3",{"data-quickpaper-391f5c52":""},["视图和model数据不同步问题"]),e("p",{"data-quickpaper-391f5c52":""},["有时候在指令里面通过jquery修改了input的数据，不过angularjs并不会知道，这时候，你有如下方法可以选择。"]),e("h4",{"data-quickpaper-391f5c52":""},["1.触发输入框change改变，让Angularjs发现数据改变了，从而去调用$setViewValue(value),同步数据："]),e("pre",{"q-code":"","data-quickpaper-391f5c52":""},['$("input").trigger("change");']),e("h4",{"data-quickpaper-391f5c52":""},["2.直接手动触发同步value到viewValue和modelValue中的行为："]),e("pre",{"q-code":"","data-quickpaper-391f5c52":""},["ctrl.$setViewValue($scope.info);"]),e("h3",{"data-quickpaper-391f5c52":""},["表单控制"]),e("p",{"data-quickpaper-391f5c52":""},["在自定义form表单的时候，或者新写一个指令来控制输入框输入的时候，为了统一控制表单输入是否合法（最后都通过$scope[表单名称]的方法来获取表单情况），你可以通过下面的方法来修改输入框是否合法："]),e("pre",{"q-code":"","data-quickpaper-391f5c52":""},["ctrl.$setValidity(errorType, boolean);//errorType表示错误类别，可以自定义"])])};a.default=p}}]);