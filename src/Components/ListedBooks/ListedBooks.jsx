import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreReadList } from "../../Utiliti/LocalStoreg";
import { getStoreWishList } from "../../Utiliti/LocalStorege2";


const ListedBooks = () => {
  const books = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);
  const [activeTab, setActiveTab] = useState("read");
  useEffect(() => {
    if (!Array.isArray(books) || books.length === 0) return;

    const readIds = getStoreReadList();
    const wishIds = getStoreWishList();

    setReadBooks(books.filter((b) => readIds.includes(b.id)));
    setWishBooks(books.filter((b) => wishIds.includes(b.id)));
  }, [books]);


  const listToShow = activeTab === "read" ? readBooks : wishBooks;

  return (
    <div className="p-10">

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("read")}
          className={`px-5 py-2 rounded-lg transition-colors ${activeTab === "read"
            ? "bg-blue-600 text-white"
            : "bg-blue-100 text-blue-700 hover:bg-blue-200"
            }`}
        >
          Read Books
        </button>

        <button
          onClick={() => setActiveTab("wish")}
          className={`px-5 py-2 rounded-lg transition-colors ${activeTab === "wish"
            ? "bg-green-600 text-white"
            : "bg-green-100 text-green-700 hover:bg-green-200"
            }`}
        >
          Wishlist
        </button>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6">
        {activeTab === "read" ? "Read Books" : "Wishlist"}: {listToShow.length}
      </h2>

      {/* Content */}
      <div className="grid grid-cols-1 gap-6">
        {listToShow.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};


const BookCard = ({ book }) => (
  <div className="flex items-center gap-4 border p-4 rounded-xl shadow-md bg-white">
    <img
      src={book.image || "https://via.placeholder.com/150"}
      alt={book.name}
      className="w-28 h-36 object-cover rounded-md"
    />

    <div className="flex-grow">
      <h3 className="text-xl font-semibold">{book.name}</h3>
      <p className="text-gray-600">By: {book.author}</p>

      <div className="flex flex-wrap gap-2 my-2">
        {book.tags?.map((tag, i) => (
          <span
            key={i}
            className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="text-sm text-gray-600 flex flex-wrap gap-4 mb-2">
        <span>Publisher: {book.publisher}</span>
        <span>Page: {book.page}</span>
        <span>Year: {book.year}</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">
          Category: {book.category}
        </span>
        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-sm">
          Rating: {book.rating}
        </span>
        <button className="ml-auto bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full text-sm">
          View Details
        </button>
      </div>
    </div>
  </div>
);

export default ListedBooks;
