'use client'
import { useGetProductsQuery } from "@/redux/api/baseApi"
import { Product } from "@/types/global"
import Image from "next/image"
import Link from "next/link"
const ProductCard = () => {
    const { data, isLoading } = useGetProductsQuery({})

    if (isLoading) return <div>Loading...</div>

    return (
        <div>
            <h1 className="text-4xl font-bold py-4">Products</h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 mx-2 md:mx-0 gap-x-4 gap-y-10 justify-items-center">
                {data?.map((product: Product) => (
                    <div
                        key={product.id}
                        className="border p-6 w-96 rounded-md drop-shadow-sm flex flex-col justify-between h-[480px]"
                    >
                        <Image
                            src={product?.image}
                            width={1080}
                            height={720}
                            alt={product.title}
                            className="size-48 mb-4 mx-auto"
                        />
                        <div className="space-y-2.5 flex-1">
                            <h1 className="text-lg font-semibold line-clamp-2">{product.title}</h1>
                            <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                            <h1 className="text-lg font-semibold mb-2 inline-flex items-center justify-between w-full">${product.price}
                                <span className="rounded-full bg-gray-600 px-3 py-1 text-xs text-white">{product.category}</span>
                            </h1>
                        </div>
                        {/* Buttons container */}

                        <Link href={`/${product.id}`} className="rounded-md border border-black px-4 py-2 duration-300 hover:bg-gray-200 text-center">
                            View Details
                        </Link>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ProductCard