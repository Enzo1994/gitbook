# 修改commit：

## 一、 修改最近一次新生成的commit：

### 语法：
```cmd
git commit --amend
```

## 二、 修改历史commit:

### 语法：
#### 第一步：
```cmd
git rebase -i < 目标commit的父亲commit >
```

#### 第二步：
这个时候会打开一个文件，文件内有指示，按指示修改上方未注释部分的第一个单词（策略）

#### 第三步：
保存文件并关闭

### 原理：
rebase 先分离头指针 然后 修改 然后产生一个commit 然后用head指针指向这个commit


## 3. 合成多个commit：
### 语法：
```cmd
git rebase -i < 被合并的多个commit的父亲commit >
```

