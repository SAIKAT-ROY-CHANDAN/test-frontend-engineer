'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { removeFromCart } from '@/redux/slices/cartSlice'
import Image from 'next/image'
import { toast } from 'sonner'

const Cart = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector((state) => state.cart.items)

  const handleDelete = (id: number) => {
    dispatch(removeFromCart(id))
    toast.success("Item removed from the cart!"); 
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
          </header>

          <div className="mt-8">
            <div className="space-y-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-x-8 border-b pb-6">
                  <Image
                    src={item.image}
                    width={1080}
                    height={720}
                    alt={item.title}
                    className="size-24 rounded"
                  />
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">{item.title}</h3>
                    <div className='text-md text-gray-600'>Price: {item.price}</div>
                    <div className='text-md text-gray-600'>Category: <span className='capitalize'>{item.category}</span></div>
                  </div>
                  <div className="flex flex-1 items-center justify-end gap-2">
                    <p className='p-2 text-center border-gray-200 rounded bg-gray-100 text-sm text-gray-800 w-10'>8</p>
                    <button onClick={() => handleDelete(item.id)} className="text-gray-600 hover:text-red-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-8">
              <dl className="text-sm text-gray-700">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd>£250</dd>
                </div>
                <div className="flex justify-between">
                  <dt>VAT</dt>
                  <dd>£25</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Discount</dt>
                  <dd>-£20</dd>
                </div>
                <div className="flex justify-between font-medium">
                  <dt>Total</dt>
                  <dd>£200</dd>
                </div>
              </dl>
              <div className="mt-4 flex justify-end">
                <a href="#" className="bg-gray-700 text-white px-5 py-3 rounded hover:bg-gray-600">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart