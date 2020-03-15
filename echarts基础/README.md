# 必走流程：

## 1. 第一步：初始化
语句：`echarts.init(dom)`
注意：需要给dom设置尺寸
```js
import echarts from 'echarts';
const echartsInstance = echarts.init(dom)
```

## 2. 第二步：配置echarts配置项
```js
let option = {
    // 这里是配置项配置
}
```

## 3. 第三步：通过setOption用指定配置绘图
```js
echartsInstance.setOption(option)  // 执行后即绘制
```
