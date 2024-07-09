import React from "react"
import {MaskGroup} from "src/assets/Mask group.svg"
import {Ux} from 'src/assets/Book List/ux.png'
import {Crime} from 'src/assets/Book List/crime.png'

 


 export const CartPage = () => {
  return (
    <div className=" max-w-7xl  mx-auto  p-4 flex flex-col bg-[#F9F9FB]">
      {/* Header */}
      <header className="flex justify-between place-self-center items-center w-11/12 bg-white p-4 rounded shadow">
        <div className="relative w-full max-w-xs ">
          <img src=  {MaskGroup} alt="Mask Group" className="absolute top-1 left-6"/>
          <input type="text" placeholder="Search" className="border rounded-md py-2 px-4 pl-10 w-[600px] ml-[150px]  " />
          
          <i className="fa fa-search absolute left-[165px] top-3 text-gray-500 "></i>
          <button className="absolute right-[-630px] top-1/2 transform -translate-y-1/2 text-gray-500">
            <i className="fas fa-user"></i>
          </button>
          <button className="absolute  right-[-680px] top-1/2 transform -translate-y-1/2 text-gray-500">
            <i className="fas fa-heart"></i>
          </button>
          <button className="absolute right-[-720px] top-1/2 transform -translate-y-1/2 text-gray-500">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white mt-6 p-6 rounded shadow  ">
        
        <h1 className="text-5xl  mb-6 text-center">Cart</h1>
        <div className="flex  mb-14 ">
          <button className="flex items-center space-x-2 text-gray-500">
            <i className="fas fa-arrow-left fa-2x mt-[-90px] "></i>
           
          </button>
        
        </div>
<div className="flex w-full border-red-600 border-2 justify-center pt-4 ">

<div className=" block justify-self-center text-lg  text-center mb-4 w-1/2  " > <span className="mr-2 border bg-black text-white px-2  text-md rounded-full ">1</span> Shopping Cart</div>
<div className="w-1/2 text-center text-lg opacity-[0.4] mr-[-120px]"> <span className="mr-2 border  text-white p-[5px] bg-[#B1B5C3]   rounded-full ">2</span> Checkout Details</div>
</div>


        <div className="flex  mt-24 border-b pb-4 mb-4  justify-between  ">
         



    <div className="  w-8/12   ">

<div className="flex w-full items-center  border p-4 rounded gap-72">
<div className="text-lg">Product</div>
<div className="flex w-1/3 justify-between text-lg ">
<div className="ml-[-35px]">Quantity</div>

<div className="ml-[-30px]">Price</div>

<div className="mr-[-95px] ">Subtotal</div>
</div>

</div>

                {/* Cart Item 1 */}
                <div className="flex  w-full items-center  border p-4  rounded">
                  <div className="flex items-center ml-[-18px]  place-items-start ">
                  <img src={Ux}  alt="Product Image" className="w-40 h-40 object-cover rounded  " />
                  <div className="ml-[-15px]">
                    <h3 className="text-md">UX and UI Strategy</h3>
                    <p className="text-gray-500 text-sm">Parrish B. Deacon</p>
                    <p className="text-gray-500">5.0 <i className="fas fa-star text-yellow-500"></i></p>
                    <button className="text-red-500">Remove</button>
                  </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="px-2 py-1 border rounded ml-10">-</button>
                    <span>2</span>
                    <button className="px-2 py-1 border rounded">+</button>
                  </div>
                  <div className="flex-1 mx-4 text-center">
                    <p className="text-lg font-semibold">₦5,000</p>
                  </div>
                  <div className="flex-1 mx-4 text-center">
                    <p className="text-lg font-semibold">₦10,000</p>
                  </div>
                </div>
                {/* Cart Item 2 */}
                <div className="flex  items-center justify-between border p-4 rounded">
                  <div className=" flex items-center ml-[-18px]">
                  <img src={Crime}  alt="Product Image" className="w-40 h-40 object-cover rounded" />
                  <div className="ml-[-15px]">
                    <h3 className="text-md ">Crime and Punishment</h3>
                    <p className="text-gray-500 text-sm">Fyodor Dostoevsky</p>
                    <p className="text-gray-500">5.0 <i className="fas fa-star text-yellow-500"></i></p>
                    <button className="text-red-500">Remove</button>
                  </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="px-2 py-1 border rounded">-</button>
                    <span>1</span>
                    <button className="px-2 py-1 border rounded">+</button>
                  </div>
                  <div className="flex-1 mx-4 text-center">
                    <p className="text-lg font-semibold">₦7,000</p>
                  </div>
                  <div className="flex-1 mx-4 text-center">
                    <p className="text-lg font-semibold">₦7,000</p>
                  </div>
                </div>
            
          </div>
          <div>
            <div className="border p-4 rounded h-full mr-[110px] flex flex-col  w-full justify-between ">
              <h2 className="text-xl font-semibold mb-8">Cart Summary</h2>
              <div className=" h-full ">
              <div className=" bg-[#FFEEE8]  mb-6 border-solid  border-2 px-4 py-3 rounded-lg">
                <input type="radio" id="pickup" name="delivery" value="pickup" className="mr-2  " />
                <label htmlFor="pickup">Pick Up</label>
              </div>
              <div className="mb-8 px-4 py-3 border-solid border-2 rounded-lg ">
                <input type="radio" id="shipping" name="delivery" value="shipping" className="mr-2" />
                <label htmlFor="shipping">Express Shipping</label>
              </div>
              <div className="mb-6 flex justify-between border-gray-950 border-b-2 py-4  ">
                <div>Subtotal</div> <div>₦17,000</div>
                </div>
                <div className="mb-10 flex justify-between">

                <div>Total</div> <div>₦17,000</div>
              </div>
              <a href="/checkout">
              <button className="w-full bg-orange-500 text-white px-4 py-2 rounded">Proceed To Checkout</button>
              </a>
            </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-6 bg-gray-800 text-white p-6 rounded shadow">
        <div className="flex justify-between">
          <div className="w-1/2 pr-4">
            <h3 className="text-lg font-semibold mb-4">About Goodness Bookstore</h3>
            <p className="text-sm">At Goodness Books, we believe in the power of stories to transform lives. Our carefully curated collection spans various genres, ensuring there is something for every reader. We are passionate about fostering a love for reading and building a community of book enthusiasts. Whether you are searching for the latest bestseller or a timeless classic, our knowledgeable staff is here to guide you. Join us in celebrating the joy of reading and discover your next great adventure with Goodness Books.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white"><i className="fab fa-linkedin bg-red-600"></i></a>
              <a href="#" className="text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-sm mb-4">Stay connected with Goodness Books by subscribing to our newsletter! Be the first to know about new arrivals, exclusive offers, upcoming events, and book recommendations tailored just for you.</p>
            <div className="flex">
              <input type="email" placeholder="Enter Your Email" className="w-full p-2 rounded-l" />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-r">Join</button>
            </div>
            <div className="mt-4 flex space-x-2">
              <a href="#" className="bg-black text-white px-4 py-2 rounded"><i className="fab fa-apple"></i> App Store</a>
              <a href="#" className="bg-black text-white px-4 py-2 rounded"><i className="fab fa-google-play"></i> Play Store</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
