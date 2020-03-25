# 关于HEAD:
## HEAD特性:
1. 可以指向分支的最后一次提交
2. 也可以不和分支挂钩,处于分离头的时候,可以指向某个commit上面去
3. 分支切换也会改变HEAD指向

# 关于分支:
分支实际上最后也会落脚到某个commit上

## 比较差异：
```css
git diff < commit hash 1 > < commit hash 2 >
```