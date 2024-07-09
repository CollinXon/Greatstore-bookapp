import Echo from "../assets/Book List/echo.png";
import Fall from "../assets/Book List/fall camus.png";
import Idiot from "../assets/Book List/history of map.png";
import Geography from "../assets/Book List/geography.png";
import Storm from "../assets/Book List/rr.png";
import Finish from "../assets/Book List/finish.png";
import Gaiman from "../assets/Book List/gaiman.png";
import Demons from "../assets/Book List/da.png";
import Book from "./Book";

export const EditorsListing = () => {
  const Books = [
    {
      title: "And The Mountains",
      author: "Khaled Hosseini",
      price: "₦6,000",
      image: Echo,
    },

    { title: "The Fall", author: "Albert Camus", price: "₦7,000", image: Fall },

    {
      title: "The Idiot",
      author: "Fyodor Dostoyevsky",
      price: "₦6,000",
      image: Idiot,
    },

    {
      title: "Geography of World",
      author: "Simon Adams",
      price: "₦7,000",
      image: Geography,
    },

    {
      title: "A Storm of Swords",
      author: "George R.R Martin",
      price: "₦7,500",
      image: Storm,
    },

    {
      title: "Finish What You Start",
      author: "Peter Hollins",
      price: "₦4,500",
      image: Finish,
    },

    {
      title: "NeverWhere",
      author: "Neil Gaiman",
      price: "₦5,500",
      image: Gaiman,
    },

    {
      title: "Demons",
      author: "Fyodor Dostoyevsky",
      price: "₦5,500",
      image: Demons,
    },
  ];

  return (
    <section className="">
      <h2 className="text-2xl font-bold mb-4 text-center">Editor's Choice</h2>
      <div className="grid grid-cols-2  md:grid-cols-4  gap-6 mb-12">
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
