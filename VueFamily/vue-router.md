# <center>Vue-Router API 学习</center>

[参考vue-router官网](https://router.vuejs.org/zh-cn/)

### 路由：
    const router = new VueRouter({
        routes: [
            //普通路径
            { path: '/user', component: componentName }
            // 动态路径参数 以冒号开头
            { path: '/user/:id', component: componentName }
        ]
    })

### 动态路由匹配
路径参数使用:标记。参数值会被设置到this.$route.params中。可以在组件中使用。

    如:
    const myComponent = {
        template: '<div>{{ $route.params.id }}</div>'
    }

#### 响应路由参数的变化
当使用路由参数时（动态路由）。原来的组件实例会被复用。<br>
可以在组件中watch $route对象。

    如：
    const User = {
        template: ``,
        watch: {
            '$route' (to, form) {
                //todo
            }
            //等价于
            '$route': function (to, form) {
                //todo
            }
            //等价于
            $route： function (to, form) {
                //todo
            }
        }
    }
    注：不能使用ES6箭头函数。作用域会改变。

#### 匹配优先级：
对于同一路径匹配多个路由时。优先级按照谁先定义的谁优先。

### 嵌套路由:
在组件中可能存在路由。

    如：
        const User = {
            template: `
                <div>
                    <h1>这是父组件标题</h1>
                    <router-view></router-view>
                </div>
            `,
        }
        const userAge = {
            template: `
            <div>
                <h2>这是子组件Age</h2>
            </div>
            `
        }
        const userSex = {
            template: `
            <div>
                <h2>这是子组件Sex</h2>
            </div>
            `
        }
        const userHome = {
            template: `
            <div>
                <h2>UserHome</h2>
            </div>
            `
        }
    组件定义如上。
    路由器定义如下：
    const router = new VueRouter({
        routers: [
            {
                path: '/user/:id', component: User,
                children: [
                    { path: '', component: userHome },
                    { path: 'age', component: userAge },
                    { path: 'sex', component: userSex },
                ]
            }
        ]
    })
    注：以 / 开头的嵌套路径会被当做根路径。

### 路由命名：

    如：
    const router = new VueRouter({
        routes: [
            { path: '/user/:name', name: 'user', component: User },
        ]
    });
    html
    <router-link :to="{ name:'user', params: { name: 'sma2lbao' }}">User Sma2lBao</router-link>
        等价于
    router.push({ name: 'user', params: {name: 'sma2lbao'} })

### 导航方式：
#### 常规式导航：
<router-link to='path'></router-link>
创建a标签来来定义导航链接。
#### 编程式导航：
router.push(location)<br>
此方法会向history栈添加一个新的记录。<br>
等价于<router-link to='path'></router-link><br>
该方法的参数可以是一个字符串路径，或者一个描述地址的对象。

    如：
    router.push('/user/sma2lbao');
    router.push({ path: '/user/sma2lbao' });
    router.push({ name: 'user', params: { id: 123 } });
    router.push({name: 'user', params: { id:123 }, query: { key: 'value' }});

router.replace(location)<br>
此方法跟router.push差不多。唯一不同的是，它不会向history添加新记录。而是替换当前的history记录。
可返回但返回后前进时无法定位到开始的页面。

    等价于<router-link to='path' replace></router-link>

router.go(n) <br>
参数为整数。作用是在history中前进多少步，为负整数时为后退多少步。类似于window.history.go(n);<br>
注：只能定位在history中有记录的。当使用replace定位时无法使用router.go(n)跳转。

### 命名视图
如果router-view没有设置名字，那么默认为default。<br>

    <router-view></router-view>
    <router-view name="viewAge"></router-view>
    <router-view name="viewSex"></router-view>
    在定义路由时可如下定义：
        const router = new VueRouter({
            routes: [
                {
                    path: '/user/:id',
                    components: {
                        default: userHome,
                        viewAge: userAge,
                        viewSex: userSex,
                    }
                }
            ]
        });

### 重定向和别名

#### 重定向：

重定向是通过routes配置来完成的，

    如：
        const router = new VueRouter({
            routes: [
                { path: '/user/:id', redirect: '/about' },
                { path: '/about', component: About, name: 'about' },
            ]
        });
    注：重定向的目标可以是路径字符串、可以是命名的路由、可以是个方法。

    如：
        const router = new VueRouter({
            routes: [
                {
                    path: '/user/:id',
                    redirect: function (to) {
                        return { name: 'about' }
                    }
                }
            ]
        });
#### 别名：
属性名：alias

        如：
            const router = new VueRouter({
                routes: [
                    { path: '/user/:id', alias: '/about' }
                ]
            });
        注：如果存在别名的路由，则遵循谁先定义谁优先原则。
        且alias的值须为字符路径。

### HTML5  history模式
    如：
    const router = new VueRouer({
        mode: 'history',
        routes: [
            { path: '/user/:id'}
        ]
    });
    注：需要后台配置的支持。

### 导航钩子：
#### 全局钩子：router.beforeEach

    如：
    const router = new VueRouter({
        routes: [
            { path: '/user/:id', component: User },
        ]
    });
    router.beforeEach((to, from, next) => {
        console.log('beforeEach...');
        next();
    });

    router.afterEach(route => {
        //
    })
#### 某个路由独享的钩子：
直接在路由配置上直接定义beforeEnter钩子,如：

    const router = new VueRouter({
        routes: [
            {
                path: '/user/:id',
                component: User,
                beforeEnter: (to, from, next) => {
                    console.log('beforeEnter...');
                    next();
                }
            }
        ]
    });

#### 组件内的钩子
beforeRouterEnter<br>
beforeRouterUpdate<br>
beforeRouterLeave<br>

    如：
        const User = {
            template: `...`,

            beforeRouterEnter (to, from, next){
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当钩子执行前，组件实例还没被创建
            },
            beforeRouterUpdate (to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            },
            beforRouterLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
            }
        }
    注：你可以 在 beforeRouteLeave 中直接访问 this。这个 leave 钩子通常用来禁止用户在还未保存修改前突然离开。可以通过 next(false) 来取消导航。

#### 路由元信息：
在定义路由的时候可以配置meta字段。

### 数据获取：
#### 导航完成之后获取：
先完成导航，然后在接下来的组件生命周期钩子中获取数据。<br>
适用于在新页面添加提示信息。
#### 导航完成之前获取：
导航完成前，在路由的enter钩子中获取数据，在数据获取成功后执行导航。<br>
适用于在跳转前页面添加提示信息。

### 滚动行为：
在HTML5 history中有效。<br>
在路由中添加scrollBehavior (to, from, savedPositon) {return { x: 0, y: 0 }}
