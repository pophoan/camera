import React from 'react'
import { Link } from 'react-router-dom'

interface Product {
    id: string
    name: string
    price: number
    brand: string
    condition: string
    imageUrl: string
}

const dummyProducts: Product[] = [
    {
        id: '1',
        name: 'Canon EOS R5',
        price: 89000,
        brand: 'Canon',
        condition: '9成新',
        imageUrl: 'https://placeholder.com/300x200'
    },
    {
        id: '2',
        name: 'Sony A7 IV',
        price: 72000,
        brand: 'Sony',
        condition: '95成新',
        imageUrl: 'https://placeholder.com/300x200'
    },
    // 先用假資料示範
]

const Products: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">二手相機列表</h1>

            {/* 篩選器 */}
            <div className="mb-6 p-4 bg-gray-100 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <select className="p-2 border rounded">
                        <option value="">品牌</option>
                        <option value="canon">Canon</option>
                        <option value="sony">Sony</option>
                        <option value="nikon">Nikon</option>
                    </select>
                    <select className="p-2 border rounded">
                        <option value="">價格範圍</option>
                        <option value="0-30000">0-30,000</option>
                        <option value="30000-50000">30,000-50,000</option>
                        <option value="50000+">50,000以上</option>
                    </select>
                    <select className="p-2 border rounded">
                        <option value="">商品狀況</option>
                        <option value="new">全新</option>
                        <option value="like-new">9成新以上</option>
                        <option value="used">8成新以下</option>
                    </select>
                    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        搜尋
                    </button>
                </div>
            </div>

            {/* 產品列表 */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {dummyProducts.map(product => (
                    <Link
                        to={`/products/${product.id}`}
                        key={product.id}
                        className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className="aspect-w-3 aspect-h-2">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-2">品牌：{product.brand}</p>
                            <p className="text-gray-600 mb-2">狀況：{product.condition}</p>
                            <p className="text-xl font-bold text-blue-600">
                                NT$ {product.price.toLocaleString()}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Products 