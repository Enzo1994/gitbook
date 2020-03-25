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


## 3. 合成多个连续commit：
### 语法：
```cmd
git rebase -i < 被合并的多个commit的父亲commit >
```

### 规则：
1. 必须有一个pick，基于哪一个commit合并


### 文件内容：
```bash
pick ef9ddd9 update:更新    # 必须有一个pick
s 75f66b7 Add chapters
s 0c710ea git和JavaScript对象内容新增
s ff37ee8 添加JavaScript对象和git内容  # squash 三合一
pick 59cd02f 新增内容

# Rebase 5cd34e8..59cd02f onto ff37ee8 (5 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out

```

## 4. 