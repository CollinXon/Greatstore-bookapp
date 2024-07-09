const Book = (book) => {
return (
<div>
<div className="border p-4 rounded-lg shadow-lg  ">
        <img
        src={book.image}
        alt={book.title}
        className="h-80 w-full object-cover  "
        />
        <div className="ml-[-16px]">
        <h3 className="text-lg font-bold">{book.title}</h3>
        <p className="text-sm">{book.author}</p>
        <p className="text-sm text-orange-500">{book.price}</p>
        <a href="/cart">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md mt-2">
        Add to Cart
        </button>
        </a>
        </div>
</div>
</div>
);
};

export default Book;
