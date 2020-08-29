# 流程
1. 新建一个computed watcher，存入getter但是不取值不收集依赖，只不过dirty设置为true。
2. 如果dirty是true，在初次获取计算属性值的时候，会调用`Watcher.prorotype.evaluate()`，通过`this.get()`取值并且收集这个`computed watcher`依赖，之后设置`this.dirty`为`false`，这样如果不修改计算属性的依赖属性，就不会再次`get()`计算，也就是缓存
3. 如果计算属性的依赖属性发生变化，调用依赖属性的setter，触发计算属性的`Watcher.prototype.update()`：
```js
 Watcher.prototype.update = function update () {
    if (this.lazy) {
      this.dirty = true;    // 这里
    } else if (this.sync) {
      this.run();
    } else {
      queueWatcher(this);
    }
  };
```
这个时候this.dirty又会被设置成true，下次再获取计算属性值的时候，还会重新计算

所以计算属性的依赖值的修改，就只是修改了`computed watcher`的`this.dirty`，让下次再取值的时候重新get获取

4. 每次计算属性取值会走这
```js
  Object.defineProperty(target, key, sharedPropertyDefinition);

  sharedPropertyDefinition.get = createComputedGetter(key)

  function createComputedGetter (key) {
  return function computedGetter () {
    // 取计算属性的值才走这里，这个时候watcher里有了getter，但是value是undefined（没有执行过watcher.get()）
    // 创建或修改后第一次取值时 watcher.dirty 是 true
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        // 如果watcher.dirty改变了，再次请求重新求值（缓存）
        // 触发computed watcher的get ，修改前只走一次
        // 会修改watcher.dirty为false
        // 通过watcher.get()取了一次值，把这个computed watcher 收集到计算属性依赖数据的deps里
        watcher.evaluate();  
        // 如果数据修改，触发watcher的update:
        // Watcher.prototype.update = function update () {
        //   if (this.lazy) {
        //     this.dirty = true;  // 会走这里
        //   } else if (this.sync) {
        //     this.run();
        //   } else {
        //     queueWatcher(this);
        //   }
        // };
        // 这个时候computed watcher.dirty又变成true了，下次再取计算属性值，又会走到这里，重新计算
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}
```

# 总结：
计算属性取值：
1. 判断dirty，是否需要重新计算取值

计算属性依赖修改：
1. 修改dirty为true，下次计算属性取值时必会重新计算