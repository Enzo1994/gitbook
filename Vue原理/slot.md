# slot:

slot 只能在 template 标签里使用

# 动态插槽：

```html
<!--子组件-->
<slot>默认内容</slot>
<!--父组件-->
<my-component>
  <template #[section]="{section}">
    this is {{section}}
  </template>
</my-component>
```
