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
import { Link } from "react-router-dom";

const slides = [
  {
    content: (
      <div className=" hidden md:flex  flex-col w-full px-8 bg-[#FFEEE8]   ">
        <header className=" flex w-11/12 p-4  ml-8  mt-10 justify-between">
          <div className=" w-[800px]  bg-white py-4 rounded shadow mt-[-20px] ">
            <img
              src={Mask}
              alt="Mask Group"
              className="absolute top-[55px] left-28 "
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border-none outline-none rounded-lg py-2  pl-10 w-[480px] ml-[120px] bg-slate-100   "
              />
              <button>
                <i className="fa fa-search   absolute left-[135px] top-3 text-gray-500 "></i>
              </button>
              <button className="absolute right-[140px]  top-1/2 transform -translate-y-1/2 text-gray-500">
                <i className="fas fa-user border-solid border-gray-500 border-2 rounded-md p-2  bg-slate-100"></i>
              </button>
              <button className="absolute right-[85px]  top-1/2 transform -translate-y-1/2 text-gray-500 ">
                <i className="fas fa-heart border-solid border-gray-500 rounded-md border-2 p-2  bg-slate-100"></i>
              </button>
              <Link to="/cart ">
                <button className="absolute right-[30px] top-1/2 transform -translate-y-1/2 ">
                  <i className="fas fa-shopping-cart text-gray-500 border-solid border-gray-500 border-2  rounded-md p-2  bg-slate-100 "></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="space-x-4 flex mb-2 ">
            <button className="bg-orange-500 text-white px-8   rounded-lg">
              Sign Up
            </button>
            <button className="border border-orange-500 text-orange-500 px-10 rounded-lg">
              Login
            </button>
          </div>
        </header>

        <main className="flex-wrap md:flex items-center   mt-14 ml-4   ">
          <div className="w-full md:w-1/2 ">
            <h1 className="text-5xl font-bold mb-3  ">
              Discover Your <br />
              Next Great Read
            </h1>

            <p className="text-lg mb-5  ">
              Explore a world of stories, knowledge, and inspiration at Goodness
              Bookstore. Whether you are seeking the latest bestsellers,
              timeless classics, or hidden gems, our curated selection has
              something for every reader.
            </p>
            <button className="  mb-10  md:bg-white text-[#FF6636] px-6 py-4 rounded-lg ">
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
      <div className=" hidden md:flex flex-col justify-items-center mt-6  w-full   bg-gradient-to-r from-pink-50 to-white ">
        <header className=" flex w-11/12 p-4 ml-8 mt-4 justify-between">
          <div className=" w-[900px]  bg-white py-3 rounded shadow mt-[-20px] ">
            <img
              src={Mask}
              alt="Mask Group"
              className="absolute top-[60px] left-20 "
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border-none outline-none rounded-lg py-2  pl-10 w-[580px] ml-[120px] bg-slate-100   "
              />
              <button>
                <i className="fa fa-search  absolute left-[135px] top-3 text-gray-500 "></i>
              </button>
              <button className="absolute right-[140px]  top-1/2 transform -translate-y-1/2 text-gray-500">
                <i className="fas fa-user border-solid border-gray-500 border-2 rounded-md p-2  bg-slate-100"></i>
              </button>
              <button className="absolute right-[85px]  top-1/2 transform -translate-y-1/2 text-gray-500 ">
                <i className="fas fa-heart border-solid border-gray-500 rounded-md border-2 p-2  bg-slate-100"></i>
              </button>
              <Link to="/cart">
              <button className="absolute right-[30px] top-1/2 transform -translate-y-1/2 ">
                <i className="fas fa-shopping-cart text-gray-500 border-solid border-gray-500 border-2  rounded-md p-2  bg-slate-100 "></i>
              </button>
              </Link>
            </div>
          </div>
          <div className="space-x-4 flex mt-[-5px] mr-[-25px] ">
            <button className="bg-orange-500 text-white px-5  rounded-lg">
              Sign Up
            </button>
            <button className="border border-orange-500 text-orange-500 px-8 rounded-lg">
              Login
            </button>
          </div>
        </header>

        <main className="  flex w-full   mt-10  p-8 text-center] ">
          <div className=" flex w-full  ">
            <div className=" block  w-1/2 mt-14  ">
              <h1 className="font-bold text-5xl ">
                Discover Your <br />
                Next Great Read
              </h1>

              <p className="text-lg">
                Explore a world of stories, knowledge, and inspiration at
                Goodness <br /> Bookstore. Whether you are seeking the latest
                bestsellers, timeless <br /> classics, or hidden gems, our
                curated selection has something for <br /> every reader.
              </p>

              <button className="bg-white mt-4 px-4 py-2 text-[#FF6636] rounded-md">
                Shop Now
              </button>
            </div>

            <div className="w-1/2 flex justify-center place-items-center object-cover ">
              <img
                src={George}
                alt="George Martin"
                className=" w-40 h-60 object-cover  "
              />
              <div className="flex flex-col ">
                <img
                  src={Prophet}
                  alt="Prophet"
                  className="w-40 h-60 object-cover   "
                />
                <img
                  src={Underground}
                  alt="Underground"
                  className=" w-40 h-60 object-cover    "
                />
              </div>

              <img
                src={Tolks}
                alt="Tolks"
                className=" w-40 h-60 object-cover "
              />
            </div>
          </div>
        </main>
      </div>
    ),
  },
];

export const HeroSection = () => {
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
    <section className="hero-section">
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
