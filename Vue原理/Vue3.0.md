# 如何获得一手信息？
去看RFC

# 库
稳定性 第三方支持

# 两点：
性能提升
所有API都支持tree-shaking
composition API
Fragment Teleport suspense

## 1. performance：
1. 保留vdom的runtime（手写runder函数、jsx），脱离模板，更灵活的表达能力
2. 基于模板 直接生成指令 直接生成操作dom的指令 
3. 分析模板 生成更加优化的 vdom function ，会有优化提示hint
4. 编译器+runtime结合，让runtime性能获得很大提升
5. 服务器渲染重写
6. 编译会生成hint flag 通过flag里面的信息，直接比较内部变动信息，
7. flag用注释表示 /* TEXT , PROPS */
8. 编译器分析，runtime配合hint flag
9. v-on的handler函数，会被看做静态的，跳过更新
```js

<Foo @click="()=>{}"></Foo>
```
10. 总之，尽可能静态
11. 静态html数量超过阈值会用innerHTML配合纯文本出现

12. tree-shaking:
webpack必须配合魔法注释引入
v-model transition 不用的话，就不会被引用到vue包里
、、、、、、、、、、、、、、

## composition API
1. 可以替换mixin，重复逻辑可用
2. 核心就6个：
3. 组件复用、搭架子用的

## Fragments：
1. 渲染函数可以返回数组

## Teleport：
1. 相当于react 的 portal

## suspense：
1. 内存中渲染，记录异步依赖组件
2. 用async setup()
3. 等async里的所有promise都完成，才会渲染树

# TS：

总之，不做很重的运行时调度