# watcher：
1. 如果设置immediate，则在渲染之前先执行一下
2. handler可以传入数组：
    ```js
    {
        ={ 
            watch:{
                message:[{
                    handler:'watchHandler'
                },
                'watchHanlder2',
                function (value){
                    this.copyMessage = this.copyMessage
                }
            ]}
        }

       
    }
    ```

3. 可以直接监听深度对象：
```js
 ={
     watch:{
         'deepObject.b.c':'watchHandler'
     }
 }
```
4. user watch 是在render watcher之前被初始化的


# cleanupDeps：
```js
 Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var i = this.deps.length;
    while (i--) {
    // 一条数据对应一个dep，也就对应一个id
      var dep = this.deps[i];
      if (!this.newDepIds.has(dep.id)) {
        // 删除此次无需渲染但是上次渲染的数据dep
        // 删除当前模板里不包括的之前模板的数据dep
        dep.removeSub(this);
      }
    }
    var tmp = this.depIds;
    this.depIds = this.newDepIds;
    this.newDepIds = tmp;
    this.newDepIds.clear();
    tmp = this.deps;
    this.deps = this.newDeps;
    this.newDeps = tmp;
    this.newDeps.length = 0;
  };
```

1. cleanupDeps逻辑：

    0. 一条数据对应一个Dep
    1. 如果新的订阅deps里没有老的（v-if，v-else），则说明模板里不渲染这条数据，就直接删除不订阅了
    1. 新newDeps和newDepIds传给旧mdeps和depIds 
    2. 清空newDeps和newDepIds，以备下次渲染使用
