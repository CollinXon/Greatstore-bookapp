import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import {Echo} from 'src/assets/Book List/echo.png'
import {Fall} from 'src/assets/Book List/fall camus.png'
import {Idiot} from 'src/assets/Book List/history of map.png'
import {Geography} from 'src/assets/Book List/geography.png'
import {Storm} from 'src/assets/Book List/rr.png'
import {Finish} from  'src/assets/Book List/finish.png'
import {Gaiman} from 'src/assets/Book List/gaiman.png'
import {Demons} from  'src/assets/Book List/da.png'




  export const MostSearched = () => {



const mostSearchedBooks = [
    

        {title: 'And The Mountains',
        author: 'Khaled Hosseini',
        price: '₦6,000',
        image: {Echo},
        },
        
        
        
        {title: 'The Fall',
        author: 'Albert Camus',
        price: '₦7,000',
        image: {Fall}},
        
        
        {title: 'The Idiot',
        author: 'Fyodor Dostoyevsky',
        price: '₦6,000',
        image: {Idiot} ,
        },
        
        {title: 'Geography of World',
        author: 'Simon Adams',
        price: '₦7,000',
        image: {Geography} ,
        },
        
        {title: 'A Storm of Swords',
        author: 'George R.R Martin',
        price: '₦7,500',
        image:{Storm} ,
        },
        
        {title: 'Finish What You Start',
        author: 'Peter Hollins',
        price: '₦4,500',
        image:{Finish} ,
        },
        
        {title: 'NeverWhere',
        author: 'Neil Gaiman',
        price: '₦5,500',
        image: {Gaiman} ,
        },
        
        {title: 'Demons',
        author: 'Fyodor Dostoyevsky',
        price: '₦5,500',
        image: {Demons} ,
        }
    
    ]
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
        ],
      };
    
      return (
        <section className="p-8">
          <h2 className="text-2xl font-bold mb-4">Most Searched</h2>
          <Slider {...settings}>
            {mostSearchedBooks.map((book, index) => (
              <div key={index} className="p-4">
                <div className="border p-4 rounded-lg shadow-lg">
                  <img src={book.image} alt={book.title} className="h-40 w-full object-cover mb-4" />
                  <h3 className="text-lg font-bold">{book.title}</h3>
                  <p className="text-sm">{book.author}</p>
                  <p className="text-sm text-orange-500">{book.price}</p>
                  <a href="/cart"><button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-2">Add to Cart</button></a> 
                </div>
              </div>
            ))}
          </Slider>
        </section>
    );
  };
  

