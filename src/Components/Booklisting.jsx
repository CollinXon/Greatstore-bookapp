

export const BookListing =()=>{

    const Books = [

        {
            title: 'UX and UI Strategy',
            author: 'Pamala B. Deacon',
            price: '₦5,000',
            image: 'public/assets/Book List/ux.png',
          },
          {
            title: 'Crime and Punishment',
            author: 'Fyodor Dostoyevsky',
            price: '₦7,000',
            image: 'public/assets/Book List/crime.png',
          },
          
          {title: 'Arrow of God',
          author: 'Chinua Achebe',
          price: '₦6,500',
          image: 'public/assets/Book List/achebe arrow.png',
        },
        
        {title: 'Around Your Neck',
        author: 'Chimamanda Ngozi Adichie',
        price: '₦5,000',
        image: 'public/assets/Book List/adichie.png',
      },



      {title: 'Animal Farm',
      author: 'George Orwell',
      price: '₦6,000',
      image: 'public/assets/Book List/animal farm.png',
    },


    {title: 'The 5am Club',
    author: 'Robin Sharma',
    price: '₦4,000',
    image: 'public/assets/Book List/5am.png',
  },




  {title: 'Harry Potter',
  author: 'J.K Rowling',
  price: '₦7,000',
  image: 'public/assets/Book List/harry.png',
},



{title: 'The Trial',
author: 'Frank Kafka',
price: '₦4,500',
image: 'public/assets/Book List/kafka tr.png',
},



/*
{title: 'Crime and Punishment',
author: 'Fyodor Dostoyevsky',
price: '₦7,000',
image: 'https://drive.google.com/drive/folders/1afPG8BEAc3v_CggrQnOHE5HV9oLc0qWu',
},

{title: 'Crime and Punishment',
author: 'Fyodor Dostoyevsky',
price: '₦7,000',
image: 'https://drive.google.com/drive/folders/1afPG8BEAc3v_CggrQnOHE5HV9oLc0qWu',
},

{title: 'Crime and Punishment',
author: 'Fyodor Dostoyevsky',
price: '₦7,000',
image: 'https://drive.google.com/drive/folders/1afPG8BEAc3v_CggrQnOHE5HV9oLc0qWu',
},
*/

    ]



    return (


<section className="">
      <h2 className="text-2xl font-bold mb-4 text-center">Best Seller</h2>
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