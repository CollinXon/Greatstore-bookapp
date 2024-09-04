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
  // {
  //   content: (
  //     <div className=" hidden md:flex  flex-col w-full px-8 bg-[#FFEEE8]   ">
  //       <div className="hidden lg:block ">
  //       <header className=" flex w-full p-6  justify-between">
  //         <div className=" w-[800px]  bg-white py-4 rounded shadow-md  ">
  //           <img
  //             src={Mask}
  //             alt="Mask Group"
  //             className="absolute left-24 "
  //           />
  //           <div className="relative">
  //             <input
  //               type="text"
  //               placeholder="Search"
  //               className="border-none outline-none rounded-lg py-2  pl-10 w-[300px] xl:w-[480px] ml-[120px] bg-slate-100   "
  //             />
  //             <button>
  //               <i className="fa fa-search   absolute left-[135px] top-3 text-gray-500 "></i>
  //             </button>
  //             <button className="absolute right-32  top-1/2 transform -translate-y-1/2 text-gray-500">
  //               <i className="fas fa-user border-solid border-gray-500 border-2 rounded-md p-1  bg-slate-100"></i>
  //             </button>
  //             <button className="absolute right-20  top-1/2 transform -translate-y-1/2 text-gray-500 ">
  //               <i className="fas fa-heart border-solid border-gray-500 rounded-md border-2 p-1  bg-slate-100"></i>
  //             </button>
  //             <Link to="/cart ">
  //               <button className="absolute right-[30px] top-1/2 transform -translate-y-1/2 ">
  //                 <i className="fas fa-shopping-cart text-gray-500 border-solid border-gray-500 border-2  rounded-md p-1  bg-slate-100 "></i>
  //               </button>
  //             </Link>
  //           </div>
  //         </div>
  //         <div className=" flex items-center  px-0 xl:px-16 gap-8  ">
  //           <button className="bg-orange-500 text-white text-nowrap w-28 h-12    rounded-lg ml-5 xl:ml-0">
  //             Sign Up
  //           </button>
  //           <button className="border border-orange-500 text-orange-500  w-28 h-12 rounded-lg text-nowrap ">
  //             Login
  //           </button>
  //         </div>
  //       </header>
  //       </div>
  //       <main className="flex-wrap md:flex items-center   mt-14 ml-4   ">
  //         <div className="w-full md:w-1/2 ">
  //           <h1 className="text-5xl font-bold mb-3  ">
  //             Discover Your <br />
  //             Next Great Read
  //           </h1>

  //           <p className="text-lg mb-5  ">
  //             Explore a world of stories, knowledge, and inspiration at Goodness
  //             Bookstore. Whether you are seeking the latest bestsellers,
  //             timeless classics, or hidden gems, our curated selection has
  //             something for every reader.
  //           </p>
  //           <button className="  mb-10  md:bg-white text-[#FF6636] px-6 py-4 rounded-lg ">
  //             Shop Now
  //           </button>
  //         </div>
  //         <div className="w-full md:w-1/2 ">
  //           <img src={Teenager} alt="Logo" className="object-contain  " />
  //         </div>
  //       </main>
  //     </div>
  //   ),
  // },

  {
    content: (
      <div className=" hidden md:flex flex-col justify-items-center   w-full   bg-gradient-to-r from-pink-50 to-white ">
        <div className="hidden lg:block ">
        <header className=" flex w-full p-6  justify-between">
          <div className=" w-[800px]  bg-white py-4 rounded shadow-md  ">
             <img
              src={Mask}
              alt="Mask Group"
              className="absolute left-16 "
            />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border-none outline-none rounded-lg py-2  pl-10 w-[300px] xl:w-[480px] ml-[120px] bg-slate-100   "
              />
              <button>
                <i className="fa fa-search   absolute left-[135px] top-3 text-gray-500 "></i>
              </button>
              <button className="absolute right-32  top-1/2 transform -translate-y-1/2 text-gray-500">
                <i className="fas fa-user border-solid border-gray-500 border-2 rounded-md p-1  bg-slate-100"></i>
              </button>
              <button className="absolute right-20  top-1/2 transform -translate-y-1/2 text-gray-500 ">
                <i className="fas fa-heart border-solid border-gray-500 rounded-md border-2 p-1  bg-slate-100"></i>
              </button>
              <Link to="/cart ">
                <button className="absolute right-[30px] top-1/2 transform -translate-y-1/2 ">
                  <i className="fas fa-shopping-cart text-gray-500 border-solid border-gray-500 border-2  rounded-md p-1  bg-slate-100 "></i>
                </button>
              </Link>
            </div>
          </div>
          <div className=" flex items-center  px-0 xl:px-16 gap-8  ">
            <button className="bg-orange-500 text-white text-nowrap w-28 h-12    rounded-lg ml-5 xl:ml-0">
              Sign Up
            </button>
            <button className="border border-orange-500 text-orange-500  w-28 h-12 rounded-lg text-nowrap ">
              Login
            </button>
          </div>
        </header>
        </div>
        <main className="  flex w-full   mt-10  p-8 text-center] ">
          <div className=" flex w-full  ">
            <div className=" block  w-1/2 mt-14  ">
              <h1 className="font-bold text-5xl ">
                Discover Your <br />
                Next Great Read
              </h1>

              <p className="lg:text-lg pr-8 lg:pr-10">
                Explore a world of stories, knowledge, and inspiration at
                Goodness  Bookstore. Whether you are seeking the latest
                bestsellers, timeless classics, or hidden gems, our
                curated selection has something for  every reader.
              </p>

              <button className="bg-white mt-4 px-4 py-2 text-[#FF6636] rounded-md">
                Shop Now
              </button>
            </div>

            <div className="w-1/2 flex justify-center place-items-center object-cover ">
              <img
                src={George}
                alt="George Martin"
                className=" w-32 lg:w-40 lg:h-60 object-cover  "
              />
              <div className="flex flex-col ">
                <img
                  src={Prophet}
                  alt="Prophet"
                  className="w-40 lg:w-40 h-44 lg:h-60 object-cover   "
                />
                <img
                  src={Underground}
                  alt="Underground"
                  className="w-40 lg:w-40 h-44 lg:h-60 object-cover    "
                />
              </div>

              <img
                src={Tolks}
                alt="Tolks"
                className=" w-32 lg:w-40 lg:h-60 object-cover "
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
