# $on和$emit 原理：


## 要点：
$on和$emit只在同一层级里可以使用

1. $on:
```js
Vue.prototype.$on = function (event, fn) {
    var vm = this;
  if (Array.isArray(event)) {
    // 多个事件可以绑定一个处理方法
    // this.$on(['event1','event2'],this.clickHandler)
    for (let eventItem of event) {
      vm.$on(eventItem, fn);
    }
  } else {
    // 一个事件可以绑定多个处理方法
    // this.$on('event',this.clickHandler1)
    // this.$on('event',this.clickHandler2)
    (vm._events[event] || (vm._events[event] = [])).push(event);
  }
};
```
2. $emit:  
去vm._events里找到对事件，调用回调
```js
Vue.prototype.$emit = function(event,msg){
    var vm = this;
    {
        // 提示处理，包裹在块内
        var lowerCaseEvent = event.toLowerCase();
        if(lowerCaseEvent !== event || vm._events[event]){
            // 事件名称不符合规范
        }
    }
    var cbs = vm._events[event];
    if(cbs){
        cbs = cbs.length>1?toArray(cbs):cbs;
        // 截取除了第一个事件名以外的所有参数
        var args = toArray(arguments,1) 
        for(let cb of cbs){
            invokeWithErrorHandling(vm,cb,args,)
        }
    }
}
```