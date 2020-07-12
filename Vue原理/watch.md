# watch：
1. 如果设置immediate，则在渲染之前先执行一下
2. handler可以传入数组：
    ```js
    {
        ={ 
            watch:{
                message:[{
                    handler:'watchHandler'
                },
                'watchHanlder2',
                function (value){
                    this.copyMessage = this.copyMessage
                }
            ]}
        }

       
    }
    ```

3. 可以直接监听深度对象：
```js
 ={
     watch:{
         'deepObject.b.c':'watchHandler'
     }
 }
```