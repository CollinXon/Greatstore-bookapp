import React, { useState, useEffect, useContext } from 'react';
import axiosInstance from '../axiosInstance';
import { CartContext } from '../Context/CartContext';

const BookListing = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Initially set to 1 to avoid division by zero
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products', {
          params: {
            organization_id: 'f94993a184a1424f814e6cb011ff839b',
            reverse_sort: false,
            page: 1,
            size: 30,
            Appid: '78AZLZYO9PJVYHQ',
            Apikey: '5c10690e33b7445894b656e29f6fef8c20240712182542337119',
          },
        });
        console.log(response.data);
        const items = response.data.items.map((item) => ({
          name: item.name,
          description: item.description,
          price: extractPrice(item.current_price),
          id: item.id,
          image: `https://api.timbu.cloud/images/${item.photos.length > 0 ? item.photos[0].url : ''}`,
        }));
        setProducts(items);

        // Calculate total pages based on fetched products
        setTotalPages(Math.ceil(items.length / 10)); // Assuming 10 items per page
      } catch (error) {
        console.error('Error fetching products:', error);
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
    return 'Price not available';
  };

  const handleAddToCart = (product) => {
    console.log('Adding product to cart:', product);
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
    <div className="p-4 bg-primary grid grid-cols-3 lg:px-16 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {products.slice(startIndex, endIndex).map((product, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-lg">
          <img
            src={product.image}
            alt={product.description}
            className="h-80 w-full object-cover"
          />
          <div className="ml-[-16px]">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-sm">{product.description}</p>
            <p className="text-sm text-orange-500">{product.price}</p>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-md mt-2"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      {/* Pagination */}
      <div className="flex justify-center mt-8 ml-[1000px]">
        <button
          className="bg-gray-300 px-4 py-2 rounded-md mr-2"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-md mr-2 ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="bg-gray-300 px-4 py-2 rounded-md ml-2"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookListing;
