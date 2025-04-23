# Git Tag 與 Git Commit 的差別

## 基本概念

### Git Commit（提交）

- 記錄代碼的變更歷史
- 每次提交都會產生一個唯一的 commit hash
- 代表程式碼的一個版本節點
- 是 Git 版本控制的基本單位
- 可以被修改或回退

### Git Tag（標籤）

- 是對某個特定 commit 的標記
- 通常用於標記發布版本
- 一般不會被更改
- 便於識別和檢索特定版本
- 可以附帶說明信息（annotated tag）

## 主要差異

1. **用途不同**

   ```bash
   # Commit 記錄變更
   git commit -m "修復登入按鈕 bug"

   # Tag 標記重要節點
   git tag -a v1.0.0 -m "第一個正式版本發布"
   ```

2. **識別方式**

   ```bash
   # Commit 使用 hash 值
   git checkout 8a9f2c3

   # Tag 使用語義化名稱
   git checkout v1.0.0
   ```

3. **可變性**

   ```bash
   # Commit 可以被修改
   git commit --amend
   git rebase -i HEAD~3

   # Tag 一般不建議修改
   # 如需修改，通常是刪除後重新創建
   git tag -d v1.0.0
   git tag -a v1.0.0 -m "新的標籤信息"
   ```

## 使用場景

### Git Commit 適用於：

- 日常開發過程中的代碼提交
- 記錄功能開發的進度
- 追蹤 bug 修復
- 代碼評審和協作

```bash
# 開發新功能
git commit -m "feat: 添加用戶註冊功能"

# 修復 bug
git commit -m "fix: 修復表單驗證問題"
```

### Git Tag 適用於：

- 標記軟件發布版本
- 標記重要的里程碑
- 標記穩定的版本節點

```bash
# 發布正式版本
git tag -a v1.0.0 -m "正式版本發布"

# 標記重要更新
git tag -a v1.1.0 -m "添加新功能模塊"
```

## 工作流程示例

```bash
# 1. 開發新功能（使用 commit）
git commit -m "feat: 實現登入功能"
git commit -m "feat: 添加表單驗證"
git commit -m "fix: 修復樣式問題"

# 2. 功能完成後，標記版本（使用 tag）
git tag -a v1.0.0 -m "登入功能完整發布"

# 3. 繼續開發（使用 commit）
git commit -m "feat: 開始開發註冊功能"
```

## 最佳實踐

1. **Commit 最佳實踐**

   - 經常性小批量提交
   - 提交信息要清晰明確
   - 每個提交專注於一個改動
   - 保持提交歷史的整潔

2. **Tag 最佳實踐**
   - 只在重要節點打標籤
   - 使用語義化版本號
   - 標籤信息要詳細
   - 推送到遠程後不要修改

## 小結

- Commit 是日常開發的基本單位，記錄代碼變更
- Tag 是重要版本的標記，方便版本管理
- 兩者配合使用，能更好地管理專案版本歷史
