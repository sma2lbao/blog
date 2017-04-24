# <center>Vuex API 学习</center>
[参考vuex官网](https://vuex.vuejs.org/zh-cn/)

vuex是一个专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex也集成到Vue的官方调试工具。
例子：

    const store = new Vuex.Store({
        state: {
            count: 0,
        },
        mutations: {
            increment (state) {
                state.count++
            }
        }
    });
    store.commit('increment');
    console.log(store.state.count);

### state
单一状态树：<br>
Vuex使用单一状态树。用一个对象就包含了全部的应用层级状态。至此它便作为一个唯一数据源而存在。这意味着每个应用将仅仅包含一个store实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易的取到整个当前应用状态的快照。<br>
单状态树和模块化并不冲突。<br>
#### 在Vue组件中获得Vuex状态：
最简单从实例中读取状态最简单的方法就是在计算属性中返回某个状态。如：

    const Counter = {
        template: `<div>{{ count }}</div>`,
        computed: {
            count () {
                return store.state.count
            }
        }
    }
    这种模式会导致组件依赖的全局状态单例。

另一方法如：

        const store = new Vuex.Store({
            state: {
                count: 0;
            },
            mutations: {
                increment (state): {
                    state.count++;
                }
            }
        });

        const Counter = {
            template: `
                <div>
                    {{ count }}
                </div>
            `,
            computed: {
                count () {
                    return this.$store.state.count
                }
            }
        }

        const app = new Vue({
            store,
            componets: { Counter },
            template: `
            <div>
                <Counter></Counter>
            </div>
            `
        });

### mapState辅助函数：
当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。因此可以使用mapState辅助函数帮助我们生成计算属性。

    const User = {
        template: `
            <div>
                姓名： {{ name }}
                <br />
                年龄： {{ age }}
                <br />
                期望活到：{{ toAge }}
            </div>
        `,
        data: function () {
            return {
                localAge: 100,
            }
        },
        computed: Vuex.mapState({
            name: state => state.name,
            age: 'age',
            toAge (state) => {
                state.age + this.localAge
            }
        }),
    }

    const store = new Vuex.Store({
        state: {
            name: 'sma2lbao',
            age: 23,
        },
        mutations: {
            increment(state): {
                return state.age++
            }
        }
    });
    注：当映射的计算属性的名称与state的子节点名称相同时，我们也可以给mapState传一个字符串数组。
    如：
        computed: Vuex.mapState(['name', 'age']);

### Getters:
解决从store中的state中派生的一些状态。
可在store中定义getters属性。接收state作为第一个参数。
也可接收getters为第二个参数。

    如：
        const store = new Vuex.Store({
            state: {
                itmes: ['one', 'two', 'three'],
            }
            getters: {
                itemsNew: state => {
                    return state.items.filter(item => {
                        return item.length == 3;
                    });
                },
                itemsNewLen: (state, getters) => {
                    return getters.itemsNew.length
                }
            }
        });

在组件中可通过如下方式使用：

    this.$store.getters.itemsNem
    this.$store.getters.itemsNemLen

### mapGetters辅助函数
mapGetters辅助函数仅仅是将store中的getters映射到局部计算属性：

    const Counter = {
        template: ``,
        computed: {
            mapGetters(['itemsNew', 'itemsNewLen'])
        }
    }

### Mutations

更改Vuex的store中的状态的唯一方法是提交mutations。Vuex中的mutations非常类似于事件：每个mutations都有一个字符串的事件类型和一个回调函数。这个回调函数就是我们实际进行状态更改的地方，并且它会接收state作为第一个参数。

    如：
        const store = new Vuex.Store({
            state: {
                count: 1,
            },
            mutations: {
                increment (state) {
                    state.counte++
                }
            }
        });
调用方式：store.commit('increment');

#### 提交载荷：
即向store.commit传入额外的参数。如：

    const store = new Vuex.Store({
        state: {
            count: 1,
        }
        mutations: {
            increment (state, n) {
                store.count += n
            }
        }
    });
    调用方式：store.commit('increment', 10)
在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的mutation会更易读：

    如：
    mutations: {
        increment (state, payload) {
            state.count += payload.amount
        }
    }
    store.commit('increment', {
        amount: 10,
    })

对象风格的提交方式

    提交mutation的另一种方式是直接使用type属性的对象：
    store.commit({
        type: 'increment',
        amount: 10
    })

#### Mutations需遵守Vue的响应规则<br>
既然Vuex的store中的状态是响应式的，那么当我们变更状态时，监视状态的Vue组件也会自动更新。这也意味着Vuex中的mutation也需要与使用Vue一样遵守一些注意事项：<br>
1. 最好提前在你的store中初始化好所有所需的属性。
2. 当需要在对象是上添加新属性时，使用Vue.set(obj, 'newProp', 123)或者state.obj = { ...state.obj, newProp: 123 }

#### 使用常量替代Mutation事件类型
使用常量替代mutation事件类型在各种Flux实现中是很常见的模式。这样可以是linter之类的工具发挥作用，同时把这些常量放在单独的文件中可以让你的代码合作者对整个app包含的mutation一目了然。

    如：
    //mutations-type.js
    export const SOME_MUTATION = 'SOME_MUTATION'

    //store.js
    import Vuex from 'vuex'
    import { SOME_MUTATION } from './mutations-type'

    const store = new Vuex.Store({
        mutations: {
            [SOME_MUTATION]: {

            }
        }
    });

mutation必须是同步函数<br>
在组件中提交Mutations<br>
    可以在组件中使用this.$store.commit('xxx')提交mutation,或者使用mapMutations辅助函数将组件中的methods映射为store.commit调用（需要在根节点注入store）

### Actions
Action类似于mutation，不同在于：<br>
    Action提交的是mutation，而不是直接变更状态。<br>
    Action可以包含任意异步操作。<br>

    如：
        const store = new Vuex.Store({
            state: {
                count: 1,
            },
            mutations: {
                increment (state) {
                    state.count++
                }
            },
            actions: {
                increment (context) {
                    context.commit('increment')
                }
            }
        });

Action函数接受一个与store实例具有相同方法和属性的context对象，因此可以调用context.commit提交一个mutation，或者通过context.state和context.getters来获取state和getters。开发中可以用参数解构来简化代码

    如：
    actions: {
        increment ({ commit }) {
            commit('increment')
        }
    }

分发Action<br>
Action通过store.dispatch方法触发：<br>
store.dispatch('increment')<br>
由于mutation必须同步执行，因此需要使用Action来执行异步操作。

    actions: {
        incrementAsyn ({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 1000);
        }
    }

Action支持同样的挂荷方式和对象方式进行分发：

    store.dispatch('incrementAsyn', {
        amount: 10
    })
    store.dispatch({
        type: 'incrementAsyn',
        amount: 10
    })

在组件中分发Action<br>
你在组件中使用this.$store.dispatch('xxx')分发action，或者使用mapActions辅助函数将组件的methods映射为store.dispatch调用：
import { mapActions } from 'vuex'

### Modules
使用单一状态树，导致应用的所有状态集中到一个很大的对象。但是，当应用变得很大时，store对象会变得臃肿不堪。<br>
为了解决以上问题，Vuex允许我们将store分割到模块。每个模块拥有自己的state、mutation、action、getters。

    如：
    const moduleA = {
        state: {},
        mutations: {},
        actions: {},
        getters: {},
    }
    const moduleB = {
        state: {},
        mutations: {},
        actions: {},
        getters: {},
    }
    const store = new Vuex.Store({
        modules: {
            a: moduleA,
            b: moduleB,
        }
    })
    store.state.a
    store.state.b

#### 模块的局部状态
对于模块内部的mutation和getter，接收的第一个参数时模块的局部状态。

    const moduleA = {
        state: { count: 0 },
        mutations: {
            increment (state) {
                state.count++
            }
        },

        getters: {
            doubleCount (state) {
                return state.count * 2
            }
        }
    }

同样，对于模块内部的action，context.state是局部状态，根节点的状态是context.rootState

    如：
    const modeleA = {
        actions: {
            incrementIfOddOnRootSum ({ state, commit, rootState }) {
                if ((state,count + rootState.count) % 2 === 1 ) {
                    commit('increment')
                }
            }
        }
    }

对于模块内部的getter，根节点状态会作为第三个参数：

    const moduleA = {
        getters: {
            sumWithRootCount (state, getters, rootState) {
                return state.count + rootState.count
            }
        }
    }

### 命名空间
模块内部的action、mutation和getter现在仍然注册在全局命名空间--这样保证了多个模块能够响应同一mutation或action。你可以通过添加前缀或后缀的方式隔离各模块，以避免名称冲突。你也可能希望写出一个可复用的模块，其使用环境不可控。例如，我们想创建一个todos模块：

    // types.js
    export const DONE_COUNT = 'todos/DONE_COUNT'
    export const FETCH_ALL = 'todos/FETCH_ALL'
    export const TOGGLE_DONE ='todos/TOGGLE_DONE'

    // modules/todos.js
    import * as types from '../types'

    const todosModule = {
        state: { todos: [] },

        getters: {
            [types.DONE_COUNT] (state) {

            }
        },
        actions: {
            [types.FETCH_ALL] (context, payload) {

            }
        },
        mutations: {
            [types.TOGGLE_DONE] (state, payload) {

            }
        }
    }

模块动态注册<br>

在store创建之后，你可以使用store.registerModule方法注册模块：

    store.registerModule('myModule', {

    })
模块的状态将是store.state.myModule
也可以使用store.unregisterModule(moduleName)动态地卸载模块。只能卸载动态注册的模块。

严格模式<br>
开启严格模式，仅需在创建store的时候传入strict: true

    如：
        const store  = new Vuex.Store({
            ...,
            strict: true
        });
