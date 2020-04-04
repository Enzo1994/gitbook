# CommonJs 和 ESM 区别：

ES6

1. ES6 模块中的值属于动态只读引用。
2. 对于只读来说，即不允许修改引入变量的值，import 的变量是只读的，不论是基本数据类型还是复杂数据类型。当模块遇到 import 命令时，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。
3. 对于动态来说，原始值发生变化，import 加载的值也会发生变化。不论是基本数据类型还是复杂数据类型。
4. 循环加载时，ES6 模块是动态引用。只要两个模块之间存在某个引用，代码就能够执行。
   CommonJS
5. **对于基本数据类型，属于复制。即会被模块缓存。同时，在另一个模块可以对该模块输出的变量重新赋值。**
6. 对于复杂数据类型，属于浅拷贝。由于两个模块引用的对象指向同一个内存空间，因此对该模块的值做修改时会影响另一个模块。
7. 当使用 require 命令加载某个模块时，就会运行整个模块的代码。
8. 当使用 require 命令加载同一个模块时，不会再执行该模块，而是取到缓存之中的值。也就是说，CommonJS 模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。
9. 当循环加载时，脚本代码在 require 的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。

https://github.com/YvetteLau/Step-By-Step/issues/43

1. CommonJS 模块输出的是一个值的浅拷贝，ES6 模块输出的是值的引用（直接指向原内存地址，不可修改内存指向，ES6 模块输入的变量 counter 是活的，完全反应其所在 被引入模块 内部的变化。）。
2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
3. CommonJs 是单个值导出，ES6 Module 可以导出多个
4. CommonJs 是动态语法可以写在判断里，ES6 Module 静态语法只能写在顶层
5. CommonJs 的 this 是当前模块，ES6 Module 的 this 是 undefined
6. CommonJs 只支持同步，适合后台
7. CommonJS 是在运行时才确定引入, 然后执行这个模块, 相当于是调用一个函数, 返回一个对象, 就这么简单.

# ESM 特点：

1. 支持异步和同步
2. 由于 ES6 的静态模块结构，支持 tree shaking

# 原理：

1. ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令 import 就会生成一个只读引用。等到脚本真正执行的时候，再根据这个只读引用到被加载的模块中取值。因此，ES6 模块是动态引用，并且不会缓存值，模块里的变量绑定其所在的模块。  
   我的解释：静态分析时候，先拿到 import 值的内存地址；在运行的时候，再连接到 import 的变量和这个内存地址。
2. ES6 模块输入的变量 counter 是活的，完全反应其所在 被引入模块 内部的变化。

## 为何 ESM 无法修改引用进来的值

https://stackoverflow.com/questions/48168601/change-the-value-of-imported-variable-in-es6

```js
import { a, b } from "./moduleA";
```

类似于

```js
const a = ...
const b = ...
```

因为您以后无法分配该值。这并不完全相同，因为值可以更改，但只能在模块内部更改。所以你可以做

```js
let a = 5;
function setA(value) {
  a = value;
}

export { a, setA };
```

与

```js
import { a, setA } from "./moduleA";

setA(4);
console.log(a); // 4
```

从模块外，就像你可以用 const 修改引用类型，比如，你要改变一个对象的属性，但你不能让变量指向一个完全不同的对象（不可修改内存指针指向）。  
From outside of a module you can mutate a value, just like you could with const, like if you're changing a property on an object, but you cannot make the variable point to an entirely different object.

# 关于静态结构：

ES5 的 JavaScript 模块格式具有动态结构：导入和导出的内容可以在运行时更改。ES6 引入自己的模块格式的原因之一是要启用静态结构，这意味着您可以在编译时（静态地）确定导入和导出–您只需要查看源代码即可，而不必执行它。
ES6 在语法上强制执行此操作：您只能在顶层进行导入和导出（决不能嵌套在条件语句中）。而且 import 和 export 语句没有动态部分（不允许有变量等）。

## 模块处理流程：

1. 在开发过程中，代码存在着很多（通常很小的）模块。
2. 为了进行部署，这些模块捆绑为几个相对较大的文件。

## 捆绑的原因：

1. 为了加载所有模块，需要检索的文件较少。
2. 压缩捆绑的文件比压缩 ​​ 单独的文件效率更高。
3. 捆绑期间，可以删除未使用的出口，从而可能节省大量空间。

# 引用、浅拷贝、深拷贝的区别：

参考副本=指向原始对象的新变量。

浅副本=创建原始对象的新副本，并为其原始属性分配相同的值，但对于引用其他对象的属性，使用与原始对象相同的引用。

深度复制=创建原始对象的新副本，并为原始对象引用链中的每个对象引用递归创建新副本。

# Reference Webpage：

https://dev.to/iggredible/what-the-heck-are-cjs-amd-umd-and-esm-ikm

# pdf：

https://exploringjs.com/es6/ch_modules.html#static-module-structure
