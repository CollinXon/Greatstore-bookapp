import React, { useState, useEffect, useContext } from "react";
import axiosInstance from "../axiosInstance";
import { CartContext } from "../Context/CartContext";

const BookListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Initially set to 1 to avoid division by zero
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/products", {
          params: {
            organization_id: "f94993a184a1424f814e6cb011ff839b",
            reverse_sort: false,
            page: 1,
            size: 30,
            Appid: "78AZLZYO9PJVYHQ",
            Apikey: "5c10690e33b7445894b656e29f6fef8c20240712182542337119",
          },
        });
        console.log(response.data);
        setLoading(false);
        const items = response.data.items.map((item) => ({
          name: item.name,
          description: item.description,
          price: extractPrice(item.current_price),
          id: item.id,
          image: `https://api.timbu.cloud/images/${
            item.photos.length > 0 ? item.photos[0].url : ""
          }`,
        }));
        setProducts(items);

        // Calculate total pages based on fetched products
        setTotalPages(Math.ceil(items.length / 10)); // Assuming 10 items per page
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const extractPrice = (current_price) => {
    if (
      current_price &&
      current_price.length > 0 &&
      current_price[0].NGN &&
      current_price[0].NGN.length > 0
    ) {
      return current_price[0].NGN[0];
    }
    return "Price not available";
  };

  const handleAddToCart = (product) => {
    console.log("Adding product to cart:", product);
    addToCart(product);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Calculate start and end indices for current page
  const startIndex = (currentPage - 1) * 10;
  const endIndex = currentPage * 10;

  return (
    <div>

        <div className=" mt-12 flex justify-center items-center "><div className="border-t-2 border-[#1D2026] w-5/12"></div><span className="pl-6 pr-6 font-md text-nowrap">Best Seller</span><div className="border-b-2 border-[#1D2026] w-5/12 "></div></div>
      
      {loading && <h1 className="loader"></h1>}
      <div className=" bg-primary grid grid-cols-2  lg:grid-cols-5 gap-12  lg:gap-6  mt-12 justify-evenly">
        
        {products.slice(startIndex, endIndex).map((product, index) => (
          <div key={index} className="  border p-6 rounded-lg shadow-lg  ">
            <img
              src={product.image}
              alt={product.description}
              className=" h-48  xl:h-80 w-full object-cover"
            />
            <div className="ml-[-20px] md:ml-[-16px]">
              <h3 className="text-[12px] md:text-md text-nowrap font-bold ">
                {product.name}
              </h3>
              <p className=" text-nowrap text-[12px] md:text-md mb-3">
                {product.description}
              </p>

              <p className="text-lg text-black  "> ₦{product.price}</p>
              <button
                className=" text-nowrap md: bg-orange-500  text-white flex flex-wrap px-8 py-2 rounded-md "
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        {/* Pagination */}
        <div className="ml-9 flex mr-[-300px] sm:justify-center mt-12 bg-slate-100 pb-10 lg:hidden">
          <button
            className="bg-white p-5 rounded-md border-solid border-2 border-gray-300 "
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-[#FF6636] border-solid border-2 border-gray-300   ${
                currentPage === index + 1
                  ? "text-white bg-[#FF6636]"
                  : "bg-white"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="bg-white px-4 py-2 rounded-md border-solid border-2 border-gray-300 "
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>

        <div className="hidden lg:flex ml-[400px] xl:ml-[500px]  mt-12 bg-slate-100 pb-14">
          <button
            className="bg-white p-3 rounded-md border-solid border-2 border-gray-200 "
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`p-3 text-[#FF6636] border-solid border-2 border-gray-200   ${
                currentPage === index + 1
                  ? "text-white bg-[#FF6636]"
                  : "bg-white"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="bg-white p-3 rounded-md border-solid border-2 border-gray-200 "
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookListing;
