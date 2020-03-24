# 区别

## commit：
1. 一个commit对应一棵主tree，主树代表取出某个commit时的总文件快照（顶级文件夹）

## tree:
1. tree 代表文件夹，也就是文件快照树的枝干

## blob：
1. blob 代表文件，是文件快照树的叶子

## 如何查看对象内容？
```css
git cat-file -p <hash>
```
## 如何查看对象类型？
```css
git cat-file -t <hash>
```

## 如何查看git对象:
```css
find .git/objects -type f
```