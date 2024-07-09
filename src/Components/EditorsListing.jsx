export const EditorsListing =()=>{

const Books = [



    {title: 'And The Mountains',
    author: 'Khaled Hosseini',
    price: '₦6,000',
    image: 'public/assets/Book List/echo.png',
    },
    
    
    
    {title: 'The Fall',
    author: 'Albert Camus',
    price: '₦7,000',
    image: 'public/assets/Book List/fall camus.png'},
    
    
    {title: 'The Idiot',
    author: 'Fyodor Dostoyevsky',
    price: '₦6,000',
    image: 'public/assets/Book List/history of map.png',
    },
    
    {title: 'Geography of World',
    author: 'Simon Adams',
    price: '₦7,000',
    image: 'public/assets/Book List/geography.png',
    },
    
    {title: 'A Storm of Swords',
    author: 'George R.R Martin',
    price: '₦7,500',
    image: 'public/assets/Book List/rr.png',
    },
    
    {title: 'Finish What You Start',
    author: 'Peter Hollins',
    price: '₦4,500',
    image: 'public/assets/Book List/finish.png',
    },
    
    {title: 'NeverWhere',
    author: 'Neil Gaiman',
    price: '₦5,500',
    image: 'public/assets/Book List/gaiman.png',
    },
    
    {title: 'Demons',
    author: 'Fyodor Dostoyevsky',
    price: '₦5,500',
    image: 'public/assets/Book List/da.png',
    }

]


return (




<section className="">
      <h2 className="text-2xl font-bold mb-4 text-center">Editor's Choice</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Books.map((book, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            
            <img src={book.image} alt={book.title} className="h-80 w-full object-cover  " />
            <div className="ml-[-16px]">
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-sm">{book.author}</p>
            <p className="text-sm text-orange-500">{book.price}</p>
            <a href="/cart"><button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-2">Add to Cart</button></a> 

            </div>
          </div>
        ))}
      </div>

      

      

    </section>







)









}