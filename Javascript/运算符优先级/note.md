1. 
```js
new Foo().getName()

// 相当于(new Foo()).getName()


new new Foo().getName()

// 相当于new ((new Foo()).getName)()
```