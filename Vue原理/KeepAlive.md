```html
<keep-alive include="组件名，指定下面所有组件中被缓存的组件" exlude="组件名，指定下面所有组件中不被缓存的组件" :max="组件数量，指定缓存的组件数量">
    <component v-bind:is="组件名，这里是动态的，如果指定组件被keepalive包裹，就缓存组件内容"></component>
</keep-alive>
```

# 1. 只会拿到keep-alive组件里面的第一个子组件

# 2. keep-alive组件内部有个一缓存状态，通过key去缓存状态里拿组件实例的vnode

# 3. 如果this.cache里有这个组件，把当前componentInstance设置成缓存的componentInstance

# 4. 如果this.cache里没有这个组件，把当前组件的vnode存入this.cache

# 5. cache的索引为key，也就是组件的key或者tag或者
# 3. 如果keep-alive内部不是vue组件，则直接返回内容