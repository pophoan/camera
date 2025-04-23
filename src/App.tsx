import { Routes, Route, Link, Navigate } from 'react-router-dom'
import { routes } from './routes'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      {/* 導航欄 */}
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex space-x-4">
          <Link to="/home/latest" className="text-white hover:text-gray-300">首頁</Link>
          <Link to="/products" className="text-white hover:text-gray-300">二手相機</Link>
          <Link to="/about" className="text-white hover:text-gray-300">關於我們</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">聯絡我們</Link>
        </div>
      </nav>

      {/* 路由內容 */}
      <Routes>
        <Route path="/" element={<Navigate to="/home/latest" replace />} />
        {routes.map((route) => {
          if (route.children) {
            return (
              <Route key={route.path} path={route.path} element={route.element}>
                {route.children.map((child) => (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={child.element}
                  />
                ))}
              </Route>
            )
          }
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          )
        })}
      </Routes>
    </div>
  )
}

export default App