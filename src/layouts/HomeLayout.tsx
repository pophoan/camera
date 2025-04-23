import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const HomeLayout: React.FC = () => {
    const location = useLocation()

    const isActive = (path: string) => {
        return location.pathname === `/home${path}`
    }

    return (
        <div className="container mx-auto p-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">二手相機商城</h1>
                <p className="text-gray-600">尋找您心儀的相機，開始攝影之旅</p>
            </div>

            {/* 導航標籤 */}
            <div className="flex space-x-4 mb-6 border-b">
                <Link
                    to="/home/latest"
                    className={`pb-2 px-4 ${isActive('/latest') ? 'border-b-2 border-blue-500 text-blue-500' : ''
                        }`}
                >
                    最新商品
                </Link>
                <Link
                    to="/home/popular"
                    className={`pb-2 px-4 ${isActive('/popular') ? 'border-b-2 border-blue-500 text-blue-500' : ''
                        }`}
                >
                    熱門商品
                </Link>
                <Link
                    to="/home/discount"
                    className={`pb-2 px-4 ${isActive('/discount') ? 'border-b-2 border-blue-500 text-blue-500' : ''
                        }`}
                >
                    特價商品
                </Link>
            </div>

            {/* 子路由內容 */}
            <Outlet />

            {/* 底部推薦區域 */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">推薦品牌</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Canon', 'Sony', 'Nikon', 'Fujifilm'].map((brand) => (
                        <div
                            key={brand}
                            className="border rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                        >
                            <h3 className="font-bold">{brand}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomeLayout