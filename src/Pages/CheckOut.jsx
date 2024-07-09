export const Checkout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9FB]">
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <img src="/assets/mask-group.png" alt="Logo" className="h-10" />
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md py-2 px-4 pl-10 w-full"
          />
          <i className="fa fa-search absolute left-3 top-3 text-gray-500"></i>
        </div>
        <div className="flex space-x-4">
          <button>
            <i className="fas fa-user text-gray-500"></i>
          </button>
          <button>
            <i className="fas fa-heart text-gray-500"></i>
          </button>
          <button>
            <i className="fas fa-shopping-cart text-gray-500"></i>
          </button>
        </div>
      </header>

      <main className="flex-grow p-8">
        <h1 className="text-4xl mb-8 text-center">Checkout</h1>
        <div className="flex justify-center mb-8">
          <div className=" block justify-self-center text-lg  text-center mb-4 w-1/2  ">
            {" "}
            <span className="mr-2 border bg-black text-white px-2  text-md rounded-full ">
              1
            </span>{" "}
            Shopping Cart
          </div>
          <div className="flex items-center space-x-4 opacity-50 ml-8">
            <span className="bg-gray-400 text-white px-4 py-2 rounded-full">
              2
            </span>
            <span>Checkout Details</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="w-full md:w-2/3">
            <div className="bg-white p-6 rounded shadow mb-8">
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="border p-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border p-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border p-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="border p-3 rounded"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="border p-4 rounded mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <i className="fab fa-cc-mastercard text-2xl mr-2"></i>
                  <span>5795 **** **** 0424</span>
                </div>
                <span>Afolabi Afeez</span>
              </div>
              <div className="border p-4 rounded mb-4">
                <input type="radio" id="newCard" name="paymentMethod" />
                <label htmlFor="newCard" className="ml-2">
                  New Payment Card
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name on card"
                  className="border p-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Card Number"
                  className="border p-3 rounded"
                />
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="border p-3 rounded"
                />
                <input
                  type="text"
                  placeholder="Security Code"
                  className="border p-3 rounded"
                />
              </div>
              <div className="flex items-center mt-4">
                <input type="checkbox" id="saveCard" className="mr-2" />
                <label htmlFor="saveCard">Remember this card</label>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src="/assets/Book List/ux.png"
                      alt="UX and UI Strategy"
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="text-md">UX and UI Strategy</h3>
                      <p className="text-gray-500 text-sm">Parrish B. Deacon</p>
                      <p className="text-gray-500">₦10,000</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="px-2 py-1 border rounded">-</button>
                    <span className="px-4">2</span>
                    <button className="px-2 py-1 border rounded">+</button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <img
                      src="/assets/Book List/crime.png"
                      alt="Crime and Punishment"
                      className="w-16 h-16 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="text-md">Crime and Punishment</h3>
                      <p className="text-gray-500 text-sm">Fyodor Dostoevsky</p>
                      <p className="text-gray-500">₦7,000</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="px-2 py-1 border rounded">-</button>
                    <span className="px-4">1</span>
                    <button className="px-2 py-1 border rounded">+</button>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span>Subtotal</span>
                <span>₦17,000</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span>Coupon Discount</span>
                <span>8%</span>
              </div>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border p-3 rounded-l w-full"
                />
                <button className="bg-orange-500 text-white px-4 rounded-r">
                  Apply
                </button>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span>Total</span>
                <span>₦17,000</span>
              </div>
              <button className="bg-orange-500 text-white w-full py-3 rounded">
                Complete Payment
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-8">
        <div className="flex justify-between">
          <div className="w-1/2 pr-4">
            <h3 className="text-lg font-semibold mb-4">
              About Goodness Bookstore
            </h3>
            <p className="text-sm">
              At Goodness Books, we believe in the power of stories to transform
              lives. Our carefully curated collection spans various genres,
              ensuring there is something for every reader. We are passionate
              about fostering a love for reading and building a community of
              book enthusiasts. Whether you are searching for the latest
              bestseller or a timeless classic, our knowledgeable staff is here
              to guide you. Join us in celebrating the joy of reading and
              discover your next great adventure with Goodness Books.
            </p>
          </div>
          <div className="w-1/2 pl-4">
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-sm mb-4">
              Stay connected with Goodness Books by subscribing to our
              newsletter! Be the first to know about new arrivals, exclusive
              offers, upcoming events, and book recommendations tailored just
              for you.
            </p>
            <div className="flex mb-4">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="border p-3 rounded-l w-full"
              />
              <button className="bg-orange-500 text-white px-4 rounded-r">
                Join
              </button>
            </div>
            <div className="flex space-x-4 mb-4">
              <button className="bg-gray-700 p-3 rounded">
                <i className="fab fa-facebook-f text-white"></i>
              </button>
              <button className="bg-gray-700 p-3 rounded">
                <i className="fab fa-instagram text-white"></i>
              </button>
              <button className="bg-gray-700 p-3 rounded">
                <i className="fab fa-linkedin text-white"></i>
              </button>
              <button className="bg-gray-700 p-3 rounded">
                <i className="fab fa-youtube text-white"></i>
              </button>
            </div>
            <div className="flex space-x-4">
              <button className="bg-gray-700 p-3 rounded">
                <i className="fab fa-apple text-white"></i>
              </button>
              <button className="bg-gray-700 p-3 rounded">
                <i className="fab fa-google-play text-white"></i>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
