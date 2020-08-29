# 一、处理不了数组的修改和索引添加：
```js
// msg:[1,2]
this.msg[2] = 3 // 索引添加无效
this.msg[1] = 9 // 修改已有无效
// 解决方案：
this.msg.push(3)  // 数组方法拦截
Vue.set(this.msg,1,9)  // 增加监听
```

# 二、处理不了对象属性的添加：
```js
// msg:{a:3}
this.msg.b = 4 // 添加属性无效
// 解决方案：
Vue.set(this.msg,'b',4)
```

# 关于Vue.set方法：
```js
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    // 如果是数组，
    target.splice(key, 1, val);
    return val
  }

  if (key in target && !(key in Object.prototype)) {
    // 已经存在，直接修改即可
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {

    // data里的值就是root $data (跟数据对象)
    // this.$set(this,'q',{d:333}) 
    // this.$set(this.$data,'q',{d:333})

    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option(请先在data选项里配置上).'
    );
    return val
  }
  if (!ob) {
    // 非观察者对象，直接修改即可
    target[key] = val;
    return val
  }
  // 
  defineReactive$$1(ob.value, key, val);
  // 收集依赖并且通知watcher
  ob.dep.notify();
  return val
}
```