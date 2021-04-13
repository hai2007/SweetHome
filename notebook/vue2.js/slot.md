v-solt 插槽（基础使用、具名插槽、作用域插槽等）
======================

## 基本使用

组件通过slot预留位置，使用组件的时候，可以通过传递具体的内容去替换slot占用的地方，这就是插槽。

比如现在定义了一个组件：

```html
<!--
simple-use.vue
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

组件```<slot></slot>```占用的位置具体内容不确定，需要使用的时候传递进来，我们就可以这样使用：

```html
<simple-use>
  <em style='color:red'>传递给插槽的内容（可以是文本，标签或者组件等）</em>
</simple-use>
```

最终的结果可以理解为：

```html
<template>
  <div>
    <!-- <slot></slot> 这个标记的内容被下面的代替了 -->
    <em style='color:red'>传递给插槽的内容（可以是文本，标签或者组件等）</em>
  </div>
</template>
```

### 给插槽一个默认值

有时候，我们可能希望slot有一个自己的默认值，在没有传递数据给组件的时候，使用默认数据。
想实现这样给功能很简单，只要在slot直接添加默认值即可，比如：

```html
<!--
default-content.vue
-->
<template>
  <div>
    <slot>
      没有传递数据时候的默认值
    </slot>
  </div>
</template>
```

使用的时候就可以传递或者不传递数据：

```html
<default-content></default-content>
<default-content>这是传递的数据</default-content>
```

最终的结果可以理解为：

```html
<template>
  <div>
      没有传递数据时候的默认值
  </div>
</template>

<template>
  <div>
    这是传递的数据
  </div>
</template>
```

我们看见，第一个选择了默认数据，第二个使用了传递进去的数据。

> 温馨提示：父级模板里面的所有内容都是在父级作用域中编译的，子模板里面的所有内容都是在子作用域中编译的。

## 具名插槽

有时候slot可能有多个，为了对应起来，可以给slot起名字，传递的时候对应起来：

```html
<!--
name-slot.vue
-->
<template>
  <ul>
    <li>
      <slot name='index1'></slot>
    </li>
    <li>
      <slot name='index2'></slot>
    </li>
    <li>
      <slot></slot>
    </li>
  </ul>
</template>
```

我们定义了三个slot，其中二个名字分别叫index1和index2，第三个没有定义名称，默认名称是default，因此，我们在使用的时候就需要这样使用：

```html
<name-slot>
  <template v-slot:index1>
    地方1
  </template>
  <template v-slot:index2>
    地方2
  </template>
  <template v-slot:default>
    默认地方
  </template>
</name-slot>
```

我们通过v-slot:name的方式把template模板和slot对应了起来，因此运行后的结果就是：

```html
<!--
name-slot.vue
-->
<template>
  <ul>
    <li>
      地方1
    </li>
    <li>
      地方2
    </li>
    <li>
      默认地方
    </li>
  </ul>
</template>
```

> 需要注意的是，v-slot只能添加在```<template>```上（不过"作用域插槽"这种情况除外）。

## 作用域插槽

有时候我们希望在使用组件的是，让插槽内容访问子组件中的数据，可以通过插槽 prop这个特性实现：

```html
<!--
scope-slot.vue
-->
<template>
  <div>
    <slot v-bind:message='message'></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "来自子组件中的数据"
    };
  }
};
</script>
```

使用的时候，我们需要接收一下：

```html
<scope-slot>
  <!-- 这里的default表示默认的，如果有多个插槽，改为对应的插槽名字 -->
  <template v-slot:default='sub_scope'>
    {{sub_scope.message}}
  </template>
</scope-slot>
```

最终的结果就是：

```html
<template>
  <div>
    来自子组件中的数据
  </div>
</template>
```

[<< 返回首页](../../README.md)
