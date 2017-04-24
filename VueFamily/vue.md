# <center>Vue API 学习</center>

* [Vue.js官方介绍](https://cn.vuejs.org/v2/guide/)

### 常用指令：
#### v-bind
（属性绑定）缩写：:

    <!-- 绑定一个属性 -->
    <img v-bind:src="imageSrc">
    <!-- 缩写 -->
    <img :src="imageSrc">
    <!-- with inline string concatenation -->
    <img :src="'/path/to/images/' + fileName">
    <!-- class 绑定 -->
    <div :class="{ red: isRed }"></div>
    <div :class="[classA, classB]"></div>
    <div :class="[classA, { classB: isB, classC: isC }]">
    <!-- style 绑定 -->
    <div :style="{ fontSize: size + 'px' }"></div>
    <div :style="[styleObjectA, styleObjectB]"></div>
    <!-- 绑定一个有属性的对象 -->
    <div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
    <!-- 通过 prop 修饰符绑定 DOM 属性 -->
    <div v-bind:text-content.prop="text"></div>
    <!-- prop 绑定. “prop” 必须在 my-component 中声明。 -->
    <my-component :prop="someThing"></my-component>
    <!-- XLink -->
    <svg><a :xlink:special="foo"></a></svg>

.camel修饰符允许在使用DOM模板时将v-bind属性名称驼峰化。如：

    <svg :view-box.camel="viewBox"></svg>

#### v-model
    用在表单控件或者组件上创建双向绑定。<br>
    随表单控件类型不同而不同。<br>
    修饰符：.lazy .number .trim

#### 条件指令
    v-if
    v-else-if
    v-else
#### v-for（循环指令）
特定语法：alias in expression <br />
如：

    <div v-for="item in items">
        {{ item.text }}
    </div>

另外也可以为数组索引指定别名（或者用于对象的键）： <br />
如：

    <div v-for="(item, index) in items"></div>
    <div v-for="(val, key) in object"></div>
    <div v-for="(val, key, index) in object"></div>

v-for默认行为试着不改变整体，而是替换元素。迫使其重新排序的元素，需要提供一个key的特殊属性：
如：

    <div v-for="item in items" :key="item.id">
        {{ item.text }}
    </div>

#### v-on（事件监听）

缩写：@
修饰符：.stop --调用event.stopPropagation()。该方法阻止事件冒泡到父元素，阻止任何父事件处理程序被执行。 <br />
    .prevent --调用event.preventDefault()。该方法阻止元素发生默认的行为。<br />
    .capture --添加事件侦听器时使用capture模式。<br />
    .self --只当事件是从侦听器绑定的元素本身触发时才触发回调。<br />
    .{keyCode | keyAlias} --只当事件是从侦听器绑定的元素本身触发时才触发回调。<br />
    .native --监听组件根元素的原生事件。<br />
在监听原生DOM事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个$event属性： v-on:click="handle('ok', $event)"。

#### v-once
不需要表达式 <br />
只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将视为静态内容并跳过。这可以用于优化更新性能。

#### v-text
更新元素的textContent。如果要更新部分的textContent，需要使用{{Mustache}}插值。如：

    <span v-text="msg"></span>
    等价于
    <span>{{ msg }}<span>

#### v-show
根据表达式之真假值，切换元素的display CSS属性。

#### v-pre
跳过这个元素和它的子元素的编译过程。可以用来显示原始Mustache标签。跳过大量没有指令的节点会加快编译。

#### v-cloak
这个指令保持在元素上直到关联实例结束编译。和CSS规则如[v-cloak]{ display: none }一起用时，这个指令可以隐藏未编译的Mustache标签直到实例准备完毕。

    如：
    [v-cloak]{
        display: none;
    }
    <div v-cloak>
        {{ msg }}
    </div>
    不会显示，直到编译结束。

### Vue选项:

#### el
只在由new创建的实例中遵守。<br />
在实例挂载之后，元素可以用vm.$el访问。<br>
如果这个选项在实例化时有作用，实例将立即进入编译过程，否则，需要显示调用vm.$mount('选择器')手动开启编译。

    如new Vue({}).$mount('#id');

#### template
一个字符串模板作为Vue实例的标识使用。模板将会替换挂载的元素。挂载的内容都将被忽略，除非模板的内容有分发slot。
如果Vue选项中包含render函数，template选项将被忽略。

#### data
对象或函数；组件中只接受函数。
访问方式vm.$data。

    如vm.$data.a或vm.a
    var vm = new Vue({
        el: '#app',
        data: {
            a: '',
        }
    })
#### props
数组或对象。<br>
用于接收父组件的数据。<br>
为对象允许配置高级选项，如类型检查、自定义检验和设置默认值。<br>

    props: {
        option1: Number,
        option2: {
            type: Number,
            default: 'value',
            required: true,
            validator: function (value) {
                return value >= 0
            }
        }
    }

#### computed
计算属性。<br>
不能使用箭头函数来定义计算属性函数。箭头函数绑定了父级作用域的上下文。

#### methods
可通过VM实例访问这些方法。或者在指令表达式中使用。

#### watch
一个对象。<br>
KEY为需要观察的表达式，VAL是对应回调函数。值也可以是方法名，或者包含选项的对象。Vue实例将会在实例化时调用$watch()，遍历watch对象的每一个属性。

    如：
    var vm = new Vue({
        data: {
            a: 1,
            b: 2,
            c: 3,
        },
        watch: {
            a: function (val, oldVal) {
                console.log('new: %s, old: %s', val, oldVal);
            },
            b: 'someMethod',
            c: {
                handler: function (val, oldVal) { },
                deep: true
            }
        }
    });

### 实例属性

#### vm.$on(event, callback)
监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。

#### vm.$emit(event, [...args])
触发当前实例上的事件。

#### vm.$once(event, callback)
监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。

#### vm.$off([event, callback])
移除事件监听器。<br>
1.如果没有提供参数，则移除所有的事件监听器；<br>
2.如果只提供了事件，则移除该事件所有的监听器；<br>
3.如果同时提供了事件与回调，则只会移除这个回调的监听器。<br>
