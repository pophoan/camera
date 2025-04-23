import { RouteObject } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
import Latest from '../pages/home/Latest'
import Popular from '../pages/home/Popular'
import Discount from '../pages/home/Discount'
import About from '../pages/About'

import Contact from '../pages/Contact'
import Products from '../pages/Products'
import ProductDetail from '../pages/ProductDetail'

// 定義路由類型
export type AppRouteObject = RouteObject & {
    title?: string
    icon?: string
    children?: AppRouteObject[]
}

// 路由配置
export const routes: AppRouteObject[] = [
    {
        path: "/home",
        element: <HomeLayout />,
        title: '首頁',
        children: [
            {
                path: "latest",
                element: <Latest />,
                title: '最新商品'
            },
            {
                path: "popular",
                element: <Popular />,
                title: '熱門商品'
            },
            {
                path: "discount",
                element: <Discount />,
                title: '特價商品'
            }
        ]
    },
    {
        path: '/products',
        element: <Products />,
        title: '二手相機'
    },
    {
        path: '/products/:id',
        element: <ProductDetail />,
        title: '商品詳情'
    },
    {
        path: '/about',
        element: <About />,
        title: '關於我們'
    },
    {
        path: '/contact',
        element: <Contact />,
        title: '聯絡我們'
    }
]

export default routes 