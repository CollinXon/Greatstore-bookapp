
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Teenager} from "public/assets/Teenager in glasses reading book on floor.png";
import {George} from "public/assets/rr.svg" 
import {Prophet} from "public/assets/the prophet.svg"
import {Underground} from "public/assets/undergroun.svg" 
import {Tolks} from "public/assets/tolk.svg"



const slides = [



    {
        content: (
          <div className="flex flex-col w-full bg-[#FFEEE8] ">
            <header className=" flex w-11/12 p-4 ml-8 mt-4 justify-between">
              
                <div className='relative w-full max-w-xs' >
                  <input
                    type="text"
                    placeholder="Search"
                    className="border rounded-md py-3  pl-10 w-[850px]"
                  />
                        <i className="fa fa-search absolute left-3 top-4 text-gray-500"></i>
                        <div className=''>
            <button className="absolute right-[-400px] top-1/2 transform -translate-y-1/2 text-gray-500  bg-gray-200  px-2 py-1">
              <i className="fas fa-user"></i> </button>
                        <button className="absolute right-[-450px] top-1/2 transform -translate-y-1/2 text-gray-500  bg-gray-200 px-2 py-1"><i className="fas fa-heart"></i></button>
            <button className="absolute right-[-500px] top-1/2 transform -translate-y-1/2 text-gray-500  bg-gray-200 px-2 py-1"><i className="fas fa-shopping-cart"></i></button>
            </div>
          </div>
               <div className="space-x-4">
                  <button className="bg-orange-500 text-white px-4 py-2 rounded">Sign Up</button>
                  <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded">Login</button>
                </div>
              
            </header>
            
            <main className="flex items-center w-11/12 ml-12 mt-8 ">
            
                <div className='block w-1/2   mt-[-10px]'>
              <h1 className="text-5xl font-bold mb-3 ">Discover Your <br/>Next Great Read</h1>
              <p className="text-lg mb-5">Explore a world of stories, knowledge, and inspiration at Goodness Bookstore. Whether you are seeking the latest bestsellers, timeless classics, or hidden gems, our curated selection has something for every reader.</p>
              <button className="bg-white text-[#FF6636] px-6 py-4 rounded-lg">Shop Now</button>
              </div>
<div className='flex w-1/2 '>
              <img src= {Teenager}  alt="Logo" className="object-contain" />
               </div>
               
            </main>
          </div>
        ),
      }, 

      



      { content :( 
        < div  className="flex flex-col justify-items-center mt-6  w-full   bg-gradient-to-r from-pink-50 to-white ">

<header className=" flex w-11/12 p-4 ml-8 mt-4 justify-between">
              
              <div className='relative w-full max-w-xs' >
                <input
                  type="text"
                  placeholder="Search"
                  className="border rounded-md py-3  pl-10 w-[850px]"
                />
                      <i className="fa fa-search absolute left-3 top-4 text-gray-500"></i>
                      <div className=''>
          <button className="absolute right-[-400px] top-1/2 transform -translate-y-1/2 text-gray-500  bg-gray-200  px-2 py-1">
            <i className="fas fa-user"></i> </button>
                      <button className="absolute right-[-450px] top-1/2 transform -translate-y-1/2 text-gray-500  bg-gray-200 px-2 py-1"><i className="fas fa-heart"></i></button>
          <button className="absolute right-[-500px] top-1/2 transform -translate-y-1/2 text-gray-500  bg-gray-200 px-2 py-1"><i className="fas fa-shopping-cart"></i></button>
          </div>
        </div>
             <div className="space-x-4">
                <button className="bg-orange-500 text-white px-4 py-2 rounded">Sign Up</button>
                <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded">Login</button>
              </div>
            
          </header>
          

            
            

        <main className="  flex w-full   mt-10  p-8 text-center] ">

        <div className=" flex w-full  ">
        
        <div className=" block  w-1/2 mt-14  ">
        
        <h1 className="font-bold text-5xl ">Discover Your <br/>Next Great Read </h1>
        
        <p className="text-lg">Explore a world of stories, knowledge, and inspiration at Goodness <br/>  Bookstore. Whether you are seeking the latest bestsellers, timeless <br/> classics, or hidden gems, our curated selection has something for <br/>  every reader.</p>
        
        <button className="bg-white mt-4 px-4 py-2 text-[#FF6636] rounded-md">Shop Now</button>
        </div>
        
        <div  className="w-1/2 flex justify-center place-items-center object-cover ">
            
        <img src={George} alt="George Martin" className=" w-40 h-60 object-cover  "/>
        <div className="flex flex-col ">
        <img src= {Prophet} alt="Prophet" className="w-40 h-60 object-cover   "/>
        <img src= {Underground} alt="Underground"  className=" w-40 h-60 object-cover    "/>
        </div>
        
        <img src= {Tolks} alt="Tolks" className=" w-40 h-60 object-cover "/>
        
        </div>
        
        </div>
        
        
        
        </main>
    
        </div>

      ) 



      } 
]




export const  HeroSection = () => {
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
