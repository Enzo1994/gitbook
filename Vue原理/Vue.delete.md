# 主要解决：
`delete a`无法响应式删除的问题

# 关于Vue.del方法：
```js
/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (process.env.NODE_ENV !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    // 如果是删除数组已有元素，直接调拦截后splice
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.（别直接删除跟数据，设置成null即可）'
    );
    return
  }
  if (!hasOwn(target, key)) {
    // 如果要删除的key不在target里，直接返回
    return
  }
  delete target[key];
  // 如果删除非响应式数据，和直接delete删除一样
  if (!ob) {
    return
  }
  // 删除响应式数据，删除之后重新提醒watchers
  ob.dep.notify();
}
```