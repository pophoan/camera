import React from 'react'

const Latest: React.FC = () => {
    return (
        <div className="py-4">
            <h2 className="text-xl font-bold mb-4">最新商品</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 最新商品列表 */}
                {[1, 2, 3].map((item) => (
                    <div key={item} className="border rounded-lg p-4">
                        <div className="aspect-w-3 aspect-h-2 mb-4">
                            <img
                                src="https://placeholder.com/300x200"
                                alt="商品圖片"
                                className="w-full h-48 object-cover rounded-lg"
                            />
                        </div>
                        <h3 className="font-bold mb-2">最新上架商品 {item}</h3>
                        <p className="text-gray-600">NT$ {(Math.random() * 50000 + 10000).toFixed(0)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Latest