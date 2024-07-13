// src/components/CartPage.jsx
import React, { useContext, useEffect } from 'react';
import { CartContext } from '../Context/CartContext';
import Mask from '../assets/mask-group.png';

export const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  useEffect(() => {
    console.log('Rendering CartPage with cart items:', cartItems);
  }, [cartItems]);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col bg-[#F9F9FB]">
      <header className="flex justify-between place-self-center items-center w-11/12 bg-white p-4 rounded shadow">
        <div className="relative w-full max-w-xs">
          <img src={Mask} alt="Mask Group" className="absolute top-1 left-6" />
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md py-2 px-4 pl-10 w-[600px] ml-[150px]"
          />
          <i className="fa fa-search absolute left-[165px] top-3 text-gray-500"></i>
          <button className="absolute right-[-600px] top-1/2 transform -translate-y-1/2 text-gray-500">
            <i className="fas fa-user border-solid border-gray-500 border-2 rounded-md p-2 bg-slate-100"></i>
          </button>
          <button className="absolute right-[-660px] top-1/2 transform -translate-y-1/2 text-gray-500">
            <i className="fas fa-heart border-solid border-gray-500 border-2 rounded-md p-2 bg-slate-100"></i>
          </button>
          <button className="absolute right-[-720px] top-1/2 transform -translate-y-1/2 text-gray-500">
            <i className="fas fa-shopping-cart border-solid border-gray-500 border-2 rounded-md p-2 bg-slate-100"></i>
          </button>
        </div>
      </header>

      <main className="bg-white mt-6 p-6 rounded shadow">
        <h1 className="text-5xl mb-6 text-center">Cart</h1>
        <div className="flex mb-14">
          <a href="/">
            <button className="flex items-center space-x-2 text-gray-500">
              <i className="fas fa-arrow-left fa-2x mt-[-90px]"></i>
            </button>
          </a>
        </div>
        <div className="flex w-full justify-center pt-4">
          <div className="block justify-self-center text-lg text-center mb-4 w-1/2">
            <span className="mr-2 border bg-black text-white px-2 text-md rounded-full">1</span>
            Shopping Cart
          </div>
          <div className="flex items-center space-x-4 opacity-50 ml-8">
            <span className="bg-gray-400 text-white px-4 py-2 rounded-full">2</span>
            <span>Checkout Details</span>
          </div>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex mt-24 border-b pb-4 mb-4 justify-between">
              <div className="w-8/12">
                <div className="flex w-full items-center border p-4 rounded gap-72">
                  <div className="text-lg">Product</div>
                  <div className="flex w-1/3 justify-between text-lg">
                    <div className="ml-[-35px]">Quantity</div>
                    <div className="ml-[-30px]">Price</div>
                    <div className="mr-[-95px]">Subtotal</div>
                  </div>
                </div>

                <div className="flex w-full items-center border p-4 rounded">
                  <div className="flex items-center ml-[-18px] place-items-start">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="w-40 h-40 object-cover rounded"
                    />
                    <div className="ml-[-15px]">
                      <h3 className="text-md">{item.name}</h3>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                      <button className="text-red-500" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="px-2 py-1 border rounded ml-10"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 border rounded"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex-1 mx-4 text-center">
                    <p className="text-lg font-semibold">₦{item.price}</p>
                  </div>
                  <div className="flex-1 mx-4 text-center">
                    <p className="text-lg font-semibold">₦{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-lg mt-8">Your cart is empty.</div>
        )}

        {cartItems.length > 0 && (
          <div className="flex items-center justify-between border p-4 rounded h-full mr-[110px]  flex-col w-full">
            <h2 className="text-xl font-semibold mb-8">Cart Summary</h2>
            <div className="h-full">
              <div className="bg-[#FFEEE8] mb-6 border-solid border-2 px-4 py-3 rounded-lg">
                <input
                  type="radio"
                  id="pickup"
                  name="delivery"
                  value="pickup"
                  className="mr-2"
                />
                <label htmlFor="pickup">Pick Up</label>
              </div>
              <div className="mb-8 px-4 py-3 border-solid border-2 rounded-lg">
                <input
                  type="radio"
                  id="shipping"
                  name="delivery"
                  value="shipping"
                  className="mr-2"
                />
                <label htmlFor="shipping">Express Shipping</label>
              </div>
              <div className="mb-6 flex justify-between border-gray-950 border-b-2 py-4">
                <div>Subtotal</div>
                <div>₦{calculateTotal()}</div>
              </div>
              <div className="mb-10 flex justify-between">
                <div>Total</div>
                <div>₦{calculateTotal()}</div>
              </div>
              <a href="/checkout">
                <button className="w-full bg-orange-500 text-white px-4 py-2 rounded">
                  Proceed To Checkout
                </button>
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
