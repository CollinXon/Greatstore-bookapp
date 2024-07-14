// src/components/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  console.log('Cart items:', cartItems);

  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col bg-[#F9F9FB]">
      <header className="flex justify-between place-self-center items-center w-11/12 bg-white p-4 rounded shadow">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md py-2 px-4 pl-10 w-full"
          />
          <i className="fa fa-search absolute left-4 top-3 text-gray-500"></i>
        </div>
      </header>

      <main className="bg-white mt-6 p-6 rounded shadow">
        <h1 className="text-5xl mb-6 text-center">Cart</h1>

        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex mt-4 border-b pb-4 mb-4 justify-between">
              <div className="w-8/12 flex items-center">
                <img
                  src={item.image}
                  alt={item.description}
                  className="w-40 h-40 object-cover rounded"
                />
                <div className="ml-4">
                  <h3 className="text-md">{item.name}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                  <button className="text-red-500" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  className="px-2 py-1 border rounded"
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
              <div className="text-lg font-semibold">
                ₦{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-lg mt-8">Your cart is empty.</div>
        )}

        {cartItems.length > 0 && (
          <div className="flex flex-col items-end mt-4">
            <div className="text-lg font-semibold mb-2">Total: ₦{calculateTotal()}</div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">Proceed to Checkout</button>
          </div>
        )}
      </main>
    </div>
  );
};
