# 第二章 Object 的变化侦测

## 1、 如何收集依赖？

```html
<div>
  {{name}}
</div>
```

1. 先收集依赖，即把所有用到 name 的地方都收集起来
2. 等数据发生变化，把所有收集到的依赖全部触发一遍即可
3. 核心就是在 getter 中收集依赖，在 setter 中触发依赖
