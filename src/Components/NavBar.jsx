import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Teenager from "../assets/Teenager in glasses reading book on floor.png";
import George from "../assets/rr.svg";
import Prophet from "../assets/the prophet.svg";
import Underground from "../assets/undergroun.svg";
import Tolks from "../assets/tolk.svg";
import Mask from "../assets/mask-group.png";
import Menu from "../assets/menu.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const slides = [
  {
    content: (
      <div className=" flex flex-col w-full  bg-[#FFEEE8] md:hidden  ">
        <header className=" flex w-11/12 p-4  ml-8  mt-10 justify-between ">
          
         
        </header>

        <main className=" flex  flex-col items-center   mt-5 ml-4  ">
          <div className="w-full md:w-1/2 ">
            <div className="flex justify-center">
              <img src={Mask} alt="Mask Group" />
            </div>
            <h1 className=" text-3xl  md:text-5xl font-bold mb-3 text-center ">
              Discover Your <br />
              Next Great Read
            </h1>

            <p className="  text-lg mb-6   ">
              Explore a world of stories, knowledge, and inspiration at Goodness
              Bookstore. Whether you are seeking the latest bestsellers,
              timeless classics, or hidden gems, our curated selection has
              something for every reader.
            </p>
            <button className=" w-full mb-12 bg-white text-[#FF6636] px-6 py-4 rounded-lg ">
              Shop Now
            </button>
          </div>
          <div className="w-full md:w-1/2 ">
            <img src={Teenager} alt="Logo" className="object-contain  " />
          </div>
        </main>
      </div>
    ),
  },

  {
    content: (
      <div className="flex flex-col justify-items-center   w-full   bg-pink-50 md:hidden ">
        
        <header className=" flex w-11/12 p-4  ml-8   justify-between">
          <img
            src={Mask}
            alt="Mask Group"
            className="absolute top-[120px] left-44 "
          />
          
          
        </header>

        <main className=" flex  flex-col items-center   mt-16 ml-4   ">
          <div className="w-full md:w-1/2 ">
            <div className="  mt-14  ">
              <h1 className="font-bold text-5xl text-center ">
                Discover Your <br />
                Next Great Read
              </h1>

              <p className="text-lg mb-6 text-center">
                Explore a world of stories, knowledge, and inspiration at
                Goodness Bookstore. Whether you are seeking the latest
                bestsellers, timeless classics, or hidden gems, our curated
                selection has something for every reader.
              </p>

              <button className=" w-full mb-12 bg-white text-[#FF6636] px-6 py-4 rounded-lg ">
                Shop Now
              </button>
            </div>

            <div className=" w-full  md:w-1/2 flex justify-center place-items-center object-cover ">
              <img
                src={George}
                alt="George Martin"
                className=" w-20 h-40 object-cover  "
              />
              <div className="flex flex-col ">
                <img
                  src={Prophet}
                  alt="Prophet"
                  className=" w-20 h-40 object-cover   "
                />
                <img
                  src={Underground}
                  alt="Underground"
                  className=" w-20 h-40 object-cover    "
                />
              </div>

              <img
                src={Tolks}
                alt="Tolks"
                className="  w-20 h-40 object-cover "
              />
            </div>
          </div>
        </main>
      </div>
    ),
  },
];

export const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  return (
    <section className="hero-section ">
       <div className="fixed z-50">
      <div className="block w-screen  sm:hidden">
        <div className="relative  p-2">
          {/* Hamburger icon */}
          <button
            onClick={toggleMenu}
            className="text-3xl p-2 focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose className="text-black" />
            ) : (
              <AiOutlineMenu className="text-black" />
            )}
          </button>

          <div className=""><button className="fixed right-[75px] top-10 transform -translate-y-1/2 text-gray-500 ">
              <i className="fas fa-heart border-solid border-gray-500 rounded-md border-2 p-2  bg-slate-100"></i>
            </button>
            <button className="fixed right-[10px] top-10 transform -translate-y-1/2 ">
              <i className="fas fa-shopping-cart text-gray-500 border-solid border-gray-500 border-2  rounded-md p-2  bg-slate-100 "></i>
            </button></div>

          {/* Sidebar */}
          <div
            className={`fixed top-10 left-0 h-full w-9/12 bg-[#FFEEE8] text-[#FF6636] transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className="p-6">
              <ul className="space-y-8 ">
                <li className="border-b-2 border-white">
                  <button onClick={toggleMenu}>
                  SHOP
                  </button>
                </li>
                <li className="border-b-2 border-white">
                  <button onClick={toggleMenu}>
                  BOOK SUBSCRIPTION
                  </button>
                </li>
                <li className="border-b-2 border-white">
                  <button onClick={toggleMenu}>
                  JOIN OUR BOOK CLUB
                  </button>
                </li>
                <li className="border-b-2 border-white">
                  <button
                    
                    onClick={toggleMenu}
                  >
                    SIGN UP FOR OUR NEWSLETTER
                  </button>
                </li>
                <li className="border-b-2 border-white">
                  <button onClick={toggleMenu}>
                  REQUEST FOR A BOOK
                  </button>
                </li>
                <li className="border-b-2 border-white">
                  <button onClick={toggleMenu}>
                  BE OUR VENDOR
                  </button>
                </li>
                <li className="border-b-2 border-white">
                  <button onClick={toggleMenu}>
                  SIGN UP / LOGIN
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          </div>
          </div>
        </div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full">
            {slide.content}
          </div>
        ))}
      </Slider>
    </section>
  );
};
