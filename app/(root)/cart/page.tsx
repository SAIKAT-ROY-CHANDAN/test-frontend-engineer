'use client'
import { useAppSelector } from '@/redux/hooks'
import { Product } from '@/types/global'
import Image from 'next/image'

const Cart = () => {
  const cartItems = useAppSelector((state) => state.cart.items)

  return (
    <div className='max-w-7xl mx-auto'>
      <h1>Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item: Product) => (
            <div key={item.id}>
              <h1>{item.title}</h1>
              <Image
                src={item?.image}
                width={1080}
                height={720}
                alt={item.title}
                className='size-28'
              />
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  )
}

export default Cart