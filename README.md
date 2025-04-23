# 前端開發規範文檔

## 技術棧

- React 18
- Vite
- TypeScript
- Tailwind CSS
- ESLint
- Prettier

## 命名規範

### 變數命名（小駝峰 camelCase）

```typescript
// 一般變數
const userName = "John";
const firstName = "Tom";
const isLoading = true;
const hasPermission = false;

// 陣列變數（建議使用複數）
const userList = [];
const todoItems = [];

// 事件處理函數（建議使用 handle 開頭）
const handleClick = () => {};
const handleSubmit = () => {};
const handleInputChange = () => {};

// 回調函數（建議使用 on 開頭）
const onSuccess = () => {};
const onError = () => {};

// 布林值（建議使用 is, has, can, should 等開頭）
const isVisible = true;
const hasData = false;
const canEdit = true;
const shouldUpdate = false;

// 獲取數據的函數（建議使用 get 開頭）
const getData = () => {};
const getUserInfo = () => {};

// 設置數據的函數（建議使用 set 開頭）
const setData = () => {};
const setUserInfo = () => {};

// 計算或轉換的函數（建議使用動詞開頭）
const calculateTotal = () => {};
const convertToString = () => {};

// React Hooks（必須使用 use 開頭）
const useCustomHook = () => {};
const useFormValidation = () => {};
```

### 不推薦的命名方式

```typescript
// 不推薦：使用下劃線
const user_name = "John";

// 不推薦：使用匈牙利命名法
const strName = "John";

// 不推薦：使用無意義的名稱
const x = "John";
const temp = "John";

// 不推薦：縮寫（除非是非常常見的縮寫）
const btn = "button";
const evt = "event";
```

## 開發環境設置

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 構建生產版本
npm run build

# 預覽生產版本
npm run preview
```

## 代碼規範

### 文件命名規範

- 組件文件：使用 PascalCase（例如：`UserProfile.tsx`）
- 工具/輔助文件：使用 camelCase（例如：`utils.ts`）
- 樣式文件：與組件同名（例如：`UserProfile.css`）
- 測試文件：添加 `.test` 或 `.spec`（例如：`UserProfile.test.tsx`）

### TypeScript 規範

- 優先使用 `interface` 而不是 `type`
- 明確定義所有 props 類型
- 避免使用 `any`
- 使用 TypeScript 的嚴格模式

```typescript
// 好的例子
interface UserProps {
  name: string;
  age: number;
  onUpdate: (id: number) => void;
}

// 避免這樣做
const user: any = { name: "John" };
```

### React 組件規範

- 使用函數組件和 Hooks
- 組件文件結構統一
- Props 類型定義放在組件上方
- 小型組件使用箭頭函數
- 大型組件使用普通函數聲明

```typescript
// 小型組件
const Button = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
);

// 大型組件
function UserDashboard({ user, settings }: DashboardProps) {
  // 實現邏輯
  return (
    // JSX
  );
}
```

### CSS/Tailwind 規範

- 優先使用 Tailwind 類名
- 複雜樣式使用 CSS Modules
- 避免內聯樣式
- 使用語義化的類名
- 遵循移動優先的響應式設計原則

```jsx
// 推薦
<div className="flex items-center p-4 hover:bg-gray-100">

// 避免
<div style={{ display: 'flex', padding: '1rem' }}>
```

### 狀態管理

- 小型應用使用 React Context
- 大型應用考慮使用 Redux Toolkit
- 合理使用 localStorage/sessionStorage
- 注意狀態的性能優化

### 性能優化

- 使用 `useMemo` 和 `useCallback` 優化性能
- 實現組件懶加載
- 圖片使用適當的格式和大小
- 注意打包體積

```typescript
// 懶加載示例
const HeavyComponent = lazy(() => import("./HeavyComponent"));
```

### Git 提交規範

提交信息格式：

```
<type>(<scope>): <subject>

<body>
```

類型（type）：

- feat: 新功能
- fix: 修復問題
- docs: 文檔修改
- style: 代碼格式修改
- refactor: 代碼重構
- test: 測試用例修改
- chore: 其他修改

例如：

```bash
feat(auth): implement user login
fix(ui): resolve button alignment issue
```

### 項目結構

```
src/
├── assets/        # 靜態資源
├── components/    # 共用組件
├── hooks/         # 自定義 hooks
├── pages/         # 頁面組件
├── services/      # API 服務
├── styles/        # 全局樣式
├── types/         # TypeScript 類型定義
└── utils/         # 工具函數
```

### 代碼審查清單

- [ ] 代碼是否遵循 TypeScript 規範
- [ ] 組件是否具有適當的錯誤處理
- [ ] 是否編寫了必要的測試
- [ ] 代碼是否經過優化
- [ ] 是否有適當的文檔註釋
- [ ] 提交信息是否符合規範

## 開發流程

1. 從主分支創建功能分支
2. 開發完成後提交 PR
3. 代碼審查通過後合併
4. 定期部署到測試環境
5. 確認無問題後部署到生產環境

## 有用的資源

- [React 文檔](https://react.dev)
- [TypeScript 文檔](https://www.typescriptlang.org/docs)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [ESLint 文檔](https://eslint.org/docs/user-guide/getting-started)
