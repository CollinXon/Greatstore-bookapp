
import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import Apple from "../assets/apple 1.png";
import GooglePlay from "../assets/google-play-5 1.png";
import ApplePlay from "../assets/Info.png";
import Download from "../assets/Info.png";

export const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  console.log('Cart items:', cartItems);

  return (
    <div className="flex-col w-full p-4 flex-wrap bg-[#F9F9FB]">
      <header className="flex justify-between items-center w-full sm:w-11/12 bg-white p-4 rounded shadow">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md py-2 px-4 pl-10 w-full"
          />
          <i className="fa fa-search absolute left-4 top-3 text-gray-500"></i>
        </div>
      </header>

      <main className="bg-white mt-6 p-6 rounded shadow w-full sm:w-11/12">
        <h1 className="text-2xl sm:text-5xl mb-6 text-center">Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="col-span-1 lg:col-span-8">
            <div className="bg-white shadow-md rounded-md p-4">
              <div className="border-b pb-2 mb-4 hidden lg:flex">
                <div className="w-full lg:flex lg:justify-between">
                  <h2 className="text-lg font-semibold">Shopping Cart</h2>
                  <div className="text-lg font-semibold">Product</div>
                  <div className="text-lg font-semibold">Quantity</div>
                  <div className="text-lg font-semibold">Price</div>
                  <div className="text-lg font-semibold">Subtotal</div>
                </div>
              </div>

              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex flex-col lg:flex-row items-center border-b pb-4 mb-4 justify-between">
                    <div className="w-full lg:w-2/12 mb-4 lg:mb-0">
                      <img
                        src={item.image}
                        alt={item.description}
                        className="w-full h-auto object-cover rounded"
                      />
                    </div>
                    <div className="w-full lg:w-4/12 pl-4 mb-4 lg:mb-0">
                      <h3 className="text-md font-semibold">{item.name}</h3>
                      <p className="text-gray-500 text-sm">{item.description}</p>
                      <button className="text-red-500 mt-2" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                    <div className="w-full lg:w-2/12 flex items-center space-x-4 mb-4 lg:mb-0">
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
                    <div className="w-full lg:w-2/12 text-center text-lg font-semibold mb-4 lg:mb-0">
                      ₦{item.price.toFixed(2)}
                    </div>
                    <div className="w-full lg:w-2/12 text-center text-lg font-semibold">
                      ₦{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-lg mt-8">Your cart is empty.</div>
              )}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-4">
            {cartItems.length > 0 && (
              <div className="bg-white shadow-md rounded-md p-4">
                <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
                <div className="mb-4">
                  <label className="flex items-center space-x-2 border-solid border-2 p-3 rounded-md">
                    <input type="radio" name="shipping" value="pickup" checked className="form-radio" />
                    <span>Pick Up</span>
                  </label>
                  <label className="flex items-center space-x-2 mt-2 border-solid border-2 p-3 rounded-md">
                    <input type="radio" name="shipping" value="shipping" className="form-radio" />
                    <span>Express Shipping</span>
                  </label>
                </div>
                <div className="flex justify-between mt-10 mb-6">
                  <span className="text-lg">Subtotal</span>
                  <span className="text-lg">₦{calculateTotal()}</span>
                </div>
                <div className="flex justify-between mb-10">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">₦{calculateTotal()}</span>
                </div>
                <Link to="/checkout">
                  <button className="bg-orange-500 text-white w-full py-3 rounded-lg">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="flex flex-col lg:flex-row bg-[#1D2026] text-white mt-8 p-6 rounded shadow w-full sm:w-11/12 gap-6 lg:gap-20">
        <div className="w-full lg:w-6/12">
          <h3 className="text-lg font-bold mb-2">About Goodness Bookstore</h3>
          <p>
            At Goodness Books, we believe in the power of stories to transform lives. Our carefully curated collection spans various genres, ensuring there is something for every reader. We are passionate about fostering a love for reading and building a community of book enthusiasts. Whether you are searching for the latest bestseller or a timeless classic, our knowledgeable staff is here to guide you. Join us in celebrating the joy of reading and discover your next great adventure with Goodness Books.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-8">
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white mt-[-5px] bg-orange-500 p-[6px] rounded-md">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-4/12 mt-8 lg:mt-0">
          <h3 className="text-lg font-bold mb-2">Join Our Newsletter</h3>
          <p>
            Stay connected with Goodness Books by subscribing to our newsletter! Be the first to know about new arrivals, exclusive offers, upcoming events, and book recommendations tailored just for you.
          </p>
          <div className="mt-4 flex mb-8">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="rounded-l-lg py-2 px-4 w-full lg:w-1/2 text-black outline-none"
            />
            <button className="bg-orange-500 text-white py-2 px-4 rounded-r-lg">Join</button>
          </div>
          <h3 className="text-lg font-semibold mb-2">DOWNLOAD OUR APP</h3>
          <div className="flex space-x-4">
            <div className="flex space-x-2 border-[#363B47] border-solid border-2 rounded-lg px-[20px] py-[12px]">
              <img src={Apple} alt="Download on the App Store" className="w-10" />
              <img src={ApplePlay} alt="Get it on Apple Play" className="w-24" />
            </div>
            <div className="flex space-x-2 border-[#363B47] border-solid border-2 rounded-lg px-[20px] py-[12px]">
              <img src={GooglePlay} alt="" />
              <img src={Download} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


