# 关于 nextTick 的兼容性处理：

1. Promise
2. MutationObserver（注意关注用法）
3. setImmediate

```js
if (typeof Promise !== "undefined" && isNative(Promise)) {
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) setTimeout(noop);
  };
  isUsingMicroTask = true;
} else if (
  !isIE &&
  typeof MutationObserver !== "undefined" &&
  (isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === "[object MutationObserverConstructor]")
) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  let counter = 1;
  const observer = new MutationObserver(flushCallbacks);
  const textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true,
  });
  timerFunc = () => {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== "undefined" && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = () => {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}
```

# nextTick 的执行顺序：

```js
export default {
  //...
  data:{
    msg:'原始值'
  },
  methods: {
    change() {
      this.$nextTick(() => {
        console.log("nextTick", this.$refs.msg.innerText)
      });
      this.msg = "修改了msg";
      console.log("sync", this.$refs.msg.innerText);
      this.$nextTick(() => {
        console.log("nextTick", this.$refs.msg.innerText)
      });
    },
  },
};
```
输出结果会是：
1. sync 原始值
2. nextTick 原始值
3. nextTick 修改了msg

所以：
nextTick内部的队列，先push的先执行
如果修改之前写$nextTick会使得callback先被push进队列，而负责渲染的queueWatcher()则会后被push进
watcher的执行最后也会走nextTick
先调用$nextTick会比