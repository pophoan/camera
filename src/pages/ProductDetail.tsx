import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

interface ProductDetails {
    id: string
    name: string
    price: number
    brand: string
    condition: string
    description: string
    specifications: {
        sensor: string
        resolution: string
        iso: string
        shutterSpeed: string
        viewfinder: string
    }
    sellerInfo: {
        name: string
        rating: number
        location: string
    }
    images: string[]
}

// 假資料
const dummyProducts: ProductDetails[] = [
    {
        id: '1',
        name: 'Canon EOS R5',
        price: 89000,
        brand: 'Canon',
        condition: '9成新',
        description: '購入後僅使用過幾次，保存良好。附原廠電池、充電器、說明書等完整配件。',
        specifications: {
            sensor: '全片幅 CMOS',
            resolution: '4500萬像素',
            iso: '100-51200',
            shutterSpeed: '1/8000-30秒',
            viewfinder: 'EVF, 560萬點'
        },
        sellerInfo: {
            name: '小明',
            rating: 4.8,
            location: '台北市'
        },
        images: [
            'https://placeholder.com/800x600',
            'https://placeholder.com/800x600',
            'https://placeholder.com/800x600'
        ]
    },
    {
        id: '2',
        name: 'Sony A7 IV',
        price: 75000,
        brand: 'Sony',
        condition: '全新',
        description: '全新未拆封，公司貨，附完整保固。',
        specifications: {
            sensor: '全片幅 CMOS',
            resolution: '3300萬像素',
            iso: '100-51200',
            shutterSpeed: '1/8000-30秒',
            viewfinder: 'EVF, 368萬點'
        },
        sellerInfo: {
            name: '阿華',
            rating: 4.9,
            location: '新北市'
        },
        images: [
            'https://placeholder.com/800x600',
            'https://placeholder.com/800x600',
            'https://placeholder.com/800x600'
        ]
    }
]

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()

    const product = dummyProducts.find(p => p.id === id) || dummyProducts[0] // 如果找不到對應的產品，就顯示第一個產品

    if (!product) {
        return <div>找不到產品</div>
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 左側圖片區 */}
                <div>
                    <div className="mb-4">
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full rounded-lg"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                        {product.images.slice(1).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`${product.name} - ${index + 2}`}
                                className="w-full rounded-lg cursor-pointer hover:opacity-80"
                            />
                        ))}
                    </div>
                </div>

                {/* 右側資訊區 */}
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-2xl text-blue-600 font-bold mb-4">
                        NT$ {product.price.toLocaleString()}
                    </p>

                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">基本資訊</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>品牌：{product.brand}</div>
                            <div>狀況：{product.condition}</div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">商品描述</h2>
                        <p className="text-gray-600">{product.description}</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">規格</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>感光元件：{product.specifications.sensor}</div>
                            <div>解析度：{product.specifications.resolution}</div>
                            <div>ISO範圍：{product.specifications.iso}</div>
                            <div>快門速度：{product.specifications.shutterSpeed}</div>
                            <div>觀景窗：{product.specifications.viewfinder}</div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">賣家資訊</h2>
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <div className="flex items-center mb-2">
                                <span className="font-bold mr-2">{product.sellerInfo.name}</span>
                                <span className="text-yellow-500">★</span>
                                <span className="ml-1">{product.sellerInfo.rating}</span>
                            </div>
                            <div>地區：{product.sellerInfo.location}</div>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <button className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600">
                            聯絡賣家
                        </button>
                        <button className="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600">
                            加入收藏
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail 