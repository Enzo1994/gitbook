# 1. JavaScript运行环境：
- setTimeout、DOM、Http请求实际并不在里面

- V8运行时+浏览器提供的其他东西（WebAPI）+事件循环+回调队列

- JavaScript特性：
    1. JavaScript是单线程的
    2. 只有一个调用栈
    3.  
## 调用栈：
1. 调用栈示意图 
2. console的报错 
3. 内存泄漏
4. 同步回调：如果调用栈有东西，浏览器不能渲染，不能调用其他代码
5. 异步回调： setTImeout演示调用栈情况

## setTimeout：
1. setTimeout是浏览器提供的API，不是V8提供的
2. setTimeout动画演示
    1. 调用栈里执行setTimeout函数
    2. setTimeout方法里的callback放到webApi内
    3. 延迟时间结束，callback放到回调队列，如果当前调用栈没有任务，则把callback放入调用栈（调用栈必须清空，才能放入回调）

http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkg3ISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D