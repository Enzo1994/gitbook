# 方法写在构造函数内和写在原型对象上的区别（3点）

## 写在构造函数內：
1. 缺陷：每次创建新实例，附加的任何方法都将被重复声明，会占用大量内存
2. 优势：可以访问局部私有变量
3. 何时使用：
    1. 需要访问局部私有变量
    2. 只创建少量实例

## 写在原型对象上：
1. 缺陷：
    1. 无法访问局部私有变量，
    2. 方法调用速度会降低，需要JavaScript运行时在原型链上查找方法，但时间可忽略不计
2. 优势：内存中只存储一次，
3. 何时使用：
    1. 不需要访问局部私有变量；
    2. 创建多个实例时

## 记忆：
1. {% em %}内存占用{% endem %}区别
2. {% em %}局部私有变量{% endem %}访问区别
3. {% em %}原型链查找{% endem %}区别

## 实例：
```js
function Person(name, family) {  // 构造函数
    this.name = name;
    this.family = family;

    var records = [{type: "in", amount: 0}];  // 局部私有变量

    this.addTransaction = function(trans) {  // 构造函数內方法
        if(trans.hasOwnProperty("type") && trans.hasOwnProperty("amount")) {
           records.push(trans);  // 可以访问局部私有变量
        }
    }
};

Person.prototype.getFull = function() {  // 原型对象上方法
    return this.name + " " + this.family;
};

```