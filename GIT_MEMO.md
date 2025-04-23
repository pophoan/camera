# Git 常用指令備忘錄

## 基本配置

```bash
# 設置用戶名和郵箱
git config --global user.name "你的名字"
git config --global user.email "你的郵箱"

# 檢查配置
git config --list
```

## 基本操作

```bash
# 初始化倉庫
git init

# 檢查狀態
git status

# 添加文件到暫存區
git add .                    # 添加所有文件
git add filename            # 添加特定文件

# 提交更改
git commit -m "提交信息"
git commit -am "提交信息"    # 合併 add 和 commit（僅對已追蹤文件有效）
```

## 分支操作

```bash
# 查看分支
git branch                  # 查看本地分支
git branch -r              # 查看遠程分支
git branch -a              # 查看所有分支

# 創建分支
git branch branch-name     # 創建分支
git checkout -b branch-name # 創建並切換到新分支

# 切換分支
git checkout branch-name
git switch branch-name     # Git 2.23+ 新命令

# 合併分支
git merge branch-name      # 合併指定分支到當前分支
```

## 遠程操作

```bash
# 克隆倉庫
git clone repository-url

# 添加遠程倉庫
git remote add origin repository-url

# 推送到遠程
git push origin branch-name
git push -u origin branch-name  # 設置上游分支並推送

# 拉取更新
git pull                   # 拉取並合併更新
git fetch                  # 僅拉取更新
```

## 查看歷史

```bash
# 查看提交歷史
git log                    # 詳細歷史
git log --oneline         # 簡潔歷史
git log --graph           # 圖形化歷史

# 查看文件變更
git diff                  # 查看未暫存的更改
git diff --staged         # 查看已暫存的更改
```

## 撤銷操作

```bash
# 撤銷工作區更改
git checkout -- filename
git restore filename      # Git 2.23+ 新命令

# 撤銷暫存區更改
git reset HEAD filename
git restore --staged filename  # Git 2.23+ 新命令

# 撤銷提交
git reset --soft HEAD^    # 撤銷上一次提交，保留更改
git reset --hard HEAD^    # 撤銷上一次提交，丟棄更改
```

## 暫存工作

```bash
# 暫存當前工作
git stash

# 查看暫存列表
git stash list

# 恢復暫存的工作
git stash pop            # 恢復並刪除暫存
git stash apply         # 僅恢復暫存
```

## 標籤操作

```bash
# 創建標籤
git tag v1.0.0
git tag -a v1.0.0 -m "版本信息"

# 查看標籤
git tag
git show v1.0.0

# 推送標籤
git push origin v1.0.0
git push origin --tags   # 推送所有標籤
```

## 實用技巧

```bash
# 查看命令歷史
git reflog

# 清理未追蹤的文件
git clean -n             # 預覽要清理的文件
git clean -f             # 強制清理文件
git clean -fd            # 清理文件和目錄

# 修改最後一次提交
git commit --amend

# 查找問題代碼
git blame filename       # 查看文件的每一行最後修改信息
git bisect              # 二分查找引入問題的提交
```
