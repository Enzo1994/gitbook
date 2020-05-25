# 一、语言概述：
ECMAScript是基于对象的：基本语言和宿主功能由对象提供，而ECMAScript程序是通信对象的群集。 ECMAScript对象是属性的集合，每个属性都具有零个或多个属性，这些属性决定如何使用每个属性-例如，当某个属性的Writable属性设置为false时，执行的ECMAScript代码将尝试更改该属性的值会修改失败。 属性是容纳其他对象，原始值或函数的容器。 
## 基本值（primitive value）：
基本值是以下内置类型之一的成员：Undefined，Null，Boolean，Number和String； 
## 对象：
对象是其余内置类型Object的成员； 函数是可调用的对象。 通过属性与对象关联的函数是一种方法。

ECMAScript定义了一组内置对象，这些对象对ECMAScript实体的定义进行了完善。这些内置对象包括全局对象，对象对象，函数对象，数组对象，字符串对象，布尔对象，数字对象，数学对象，日期对象，RegExp对象，JSON对象，错误对象Error，EvalError，RangeError，ReferenceError，SyntaxError，TypeError和URIError。
ECMAScript还定义了一组内置运算符。 ECMAScript运算符包括各种一元运算符，乘法运算符，加法运算符，按位移位运算符，关系运算符，相等运算符，二进制按位运算符，二进制逻辑运算符，赋值运算符和逗号运算符。

与基于类的对象语言不同，可以通过为对象分配值来将属性动态添加到对象。也就是说，构造函数不需要为所有或任何构造对象的属性命名或分配值。在上图中，可以通过为CFp中的属性分配新值来为cf1，cf2，cf3，cf4和cf5添加新的共享属性。

完整的ECMAScript程序可以同时包含严格模式和非严格模式ECMAScript代码单元。在这种情况下，严格模式仅在实际执行在严格模式代码单元内定义的代码时适用。

## 对象的定义：
An object is a collection of properties and has a single prototype object. The prototype may be the null value.
对象是属性的集合，

## 构造函数constructors的定义：
function object that creates and initialises objects

## 构造函数中的prototype定义：
构造函数的“ prototype”属性的值是一个原型对象，**用于实现继承和共享属性。**
构造函数创建对象时，该对象隐式引用构造函数的“ prototype”属性，以解决属性引用的问题。 

## prototype的定义：
提供其他对象共享属性的对象

构造函数的“原型属性”可以由程序表达式的contructor.prototype引用，添加到对象原型的属性**可以通过继承**，由共享原型的所有对象共享。 或者，可以使用Object.create内置函数使用明确指定的原型创建新对象。

## 本地对象native object的定义：
ECMAScript实现中的对象，其语义完全由此规范而不是由主机环境定义；
一些本地对象是内置的。 其他的可以在执行ECMAScript程序的过程中构造。

## 布尔对象的定义：
对象类型的成员，它是标准内置布尔构造函数的实例；
注意通过在新表达式中使用布尔构造函数创建布尔对象，并提供布尔值作为参数。结果对象具有一个内部属性，其值为布尔值。**布尔对象可以强制为布尔值。**

## 分为值 、 类型 、 对象：

## 字符串值的定义：
基本值，它是零个或多个16位无符号整数的有限有序序列；
注意字符串值是字符串类型的成员。序列中的每个整数值通常代表UTF-16文本的单个16位单元。但是，ECMAScript对值没有任何限制或要求，只是它们必须是16位无符号整数。

## 字符串对象的定义：
是标准内置String构造函数的实例的Object类型的成员
注意通过在new表达式中使用String构造函数创建String对象，并提供String值作为参数，结果对象具有一个内部属性，其值为String值。通过将String构造函数作为函数调用，**可以将String对象强制转换为String值**（15.5.1）。
```js
var str = new String('你好')
typeof str  // "object"
var pristr = String(str)
typeof pristr  // "string"

```

## 数值的定义：
对应于双精度64位二进制格式IEEE 754值的原始值
注意Number值是Number类型的成员，并且是数字的直接表示。
