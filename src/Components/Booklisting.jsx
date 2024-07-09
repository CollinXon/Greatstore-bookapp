import Ux from "../assets/Book List/ux.png";
import Crime from "../assets/Book List/crime.png";
import Arrows from "../assets/Book List/achebe arrow.png";
import AroundNeck from "../assets/Book List/adichie.png";
import AnimalFarm from "../assets/Book List/animal farm.png";
import AmClub from "../assets/Book List/5am.png";
import HarryPotter from "../assets/Book List/harry.png";
import Trial from "../assets/Book List/kafka tr.png";
import Book from "./Book";

export const BookListing = () => {
  const Books = [
    {
      title: "UX and UI Strategy",
      author: "Pamala B. Deacon",
      price: "₦5,000",
      image: Ux,
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoyevsky",
      price: "₦7,000",
      image: Crime,
    },

    {
      title: "Arrow of God",
      author: "Chinua Achebe",
      price: "₦6,500",
      image: Arrows,
    },

    {
      title: "Around Your Neck",
      author: "Chimamanda Ngozi Adichie",
      price: "₦5,000",
      image: AroundNeck,
    },

    {
      title: "Animal Farm",
      author: "George Orwell",
      price: "₦6,000",
      image: AnimalFarm,
    },

    {
      title: "The 5am Club",
      author: "Robin Sharma",
      price: "₦4,000",
      image: AmClub,
    },

    {
      title: "Harry Potter",
      author: "J.K Rowling",
      price: "₦7,000",
      image: HarryPotter,
    },

    {
      title: "The Trial",
      author: "Frank Kafka",
      price: "₦4,500",
      image: Trial,
    },
  ];

  return (
    <section className="">
      <h2 className="text-2xl font-bold mt-12 mb-6 text-center ">
        Best Seller
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {Books.map((book, index) => (
          <Book
            image={book.image}
            author={book.author}
            price={book.price}
            title={book.title}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
