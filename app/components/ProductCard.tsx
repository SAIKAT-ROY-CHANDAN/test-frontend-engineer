'use client'
import { useGetProductsQuery } from "@/redux/api/baseApi"
import { useAppDispatch } from "@/redux/hooks"
import { addToCart } from "@/redux/slices/cartSlice"
import { Product } from "@/types/global"
import Image from "next/image"
const ProductCard = () => {
    const { data, isLoading } = useGetProductsQuery({})
    const dispatch = useAppDispatch()

    if (isLoading) return <div>Loading...</div>

    const handleAddToCart = (product: Product) => {
        dispatch(addToCart(product))
    }

    return (
        <div>
            <h1 className="text-4xl font-bold py-4">Products</h1>
            <div className="grid grid-cols-3 gap-4">
                {data?.map((product: Product) => (
                    <div key={product.id} className="border p-4 w-96 rounded-md">
                        <h1 className="mb-6 line-clamp-1">{product.title}</h1>
                        <h1 className="mb-6">{product.price}</h1>
                        <Image
                            src={product?.image}
                            width={1080}
                            height={720}
                            alt={product.title}
                            className="size-48 mb-4"
                        />
                        <button
                            onClick={() => handleAddToCart(product)}
                            className="bg-black/80 p-3 text-white rounded-lg hover:bg-black/70">
                            Add Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCard