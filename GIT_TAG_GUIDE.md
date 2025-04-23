# Git Tag 使用指南

## 什麼是 Git Tag？

Git tag 是用來標記代碼庫中的特定時間點，通常用於標記發布版本（如 v1.0.0、v2.1.0 等）。

## Tag 的類型

1. 輕量標籤（Lightweight Tags）

   - 只是一個特定提交的引用
   - 類似於一個不會改變的分支
   - 只包含提交信息

2. 附註標籤（Annotated Tags）
   - 包含完整的標籤信息
   - 包含標籤者的名字、電子郵件、日期時間
   - 包含標籤信息
   - 可以使用 GPG 簽名驗證

## 常用命令

### 創建標籤

```bash
# 創建輕量標籤
git tag v1.0.0

# 創建附註標籤（推薦）
git tag -a v1.0.0 -m "版本 1.0.0 發布"

# 為特定的提交創建標籤
git tag -a v1.0.0 9fceb02 -m "為歷史提交添加標籤"
```

### 查看標籤

```bash
# 列出所有標籤
git tag

# 按照模式列出標籤
git tag -l "v1.0.*"

# 查看標籤詳細信息
git show v1.0.0

# 查看遠程標籤
git ls-remote --tags origin
```

### 推送標籤

```bash
# 推送特定標籤到遠程
git push origin v1.0.0

# 推送所有標籤到遠程
git push origin --tags

# 推送標籤到所有遠程倉庫
git push --tags
```

### 刪除標籤

```bash
# 刪除本地標籤
git tag -d v1.0.0

# 刪除遠程標籤
git push origin :refs/tags/v1.0.0
# 或者
git push origin --delete v1.0.0
```

### 檢出標籤

```bash
# 檢出特定標籤
git checkout v1.0.0

# 基於標籤創建新分支
git checkout -b branch-name v1.0.0
```

## 版本號命名規範（語義化版本）

使用 `主版本號.次版本號.修訂號` 格式：

- 主版本號（Major）：做了不兼容的 API 修改
- 次版本號（Minor）：新增功能，但向下兼容
- 修訂號（Patch）：修復 bug，向下兼容

例如：

```bash
v1.0.0  # 首次發布
v1.0.1  # 修復 bug
v1.1.0  # 新增功能
v2.0.0  # 重大更新，不兼容舊版
```

## 最佳實踐

1. 總是使用附註標籤（-a 選項）
2. 標籤信息要清晰明確
3. 遵循語義化版本規範
4. 重要的發布版本必須打標籤
5. 定期清理過時的本地標籤

## 實用腳本

```bash
# 批量刪除本地標籤
git tag | xargs git tag -d

# 批量刪除遠程標籤
git tag -l | xargs -n 1 git push --delete origin

# 獲取最新標籤
git describe --tags `git rev-list --tags --max-count=1`
```

## 注意事項

1. 標籤一旦推送到遠程，不建議修改
2. 刪除遠程標籤要謹慎
3. 重要版本的標籤建議使用 GPG 簽名
4. 標籤命名要統一且有意義
5. 定期備份重要的標籤信息
