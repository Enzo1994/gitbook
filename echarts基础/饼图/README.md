# 饼图：
## 饼图特点：
1. 展示百分比
2. `series`中的`type`是`pie` 

## 重要配置：
### 1. 圆心坐标 center：

### 2. 半径 radius：

### 3. 图例名字 name：

### 4. 是否支持多选 selectedMode

## 配置项：
```js
var option = {
    legend:{
        orient:'vertical',
        left:'left',
        data:['直接访问','邮件营销','视频广告',]
    },
    series:[
        {
            name:'访问来源',
            type:'pie',
            radius: '55%',
            center:['50%','50%'],
            hoverAnimation:true, // 滑动放大动画
            data:[
                {value:335,name:'直接访问'}  // name必须和上面legend 一一对应
                {value:677,name:'邮件营销'}
                {value:123,name:'视频广告'}
            ]
        }
    ]
}
```