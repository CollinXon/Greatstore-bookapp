// src/components/BookListing.jsx
import React, { useState, useEffect, useContext } from "react";
import axiosInstance from "../axiosInstance";
import { CartContext } from "../Context/CartContext";

const BookListing = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
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
    console.log("Adding product:", product);
    addToCart(product);
  };

  return (
    <div className="p-4 bg-primary grid grid-cols-3  sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
      {products.map((product, index) => (
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
              className="bg-orange-500 text-white px-4 py-2 rounded-md "
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookListing;
