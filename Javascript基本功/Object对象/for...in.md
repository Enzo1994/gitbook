# for...in...:

## 特点：
1. 会遍历当前对象和原型链上所有可枚举属性（自带属性不可枚举）
2. 如果只想遍历当前对象的属性,使用`Object.prototype.hasOwnProperty`加以判断,构造函数內方法(对象实例上的方法)也会返回ture;
3. 如果属性是可枚举的函数,也会被遍历出来

## 如何查看属性描述符(是否可枚举):
使用Object.getOwnPropertyDescriptors(objName)