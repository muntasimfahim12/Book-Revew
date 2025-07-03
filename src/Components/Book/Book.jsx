import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { id, image, bookName, author = "Awlad Hossain", genre = "Fiction", rating = "5.00" } = book;
    console.log(id)
    return (
        <Link to={`/book/${id}`}>
            <div className="group relative w-80 rounded-2xl border border-gray-200 p-4 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105 hover:border-transparent hover:ring-4 hover:ring-green-300/50">

                <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-200 via-green-100 to-white opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></span>

                <div className="relative z-10">
                    <div className="bg-gray-100 rounded-xl flex justify-center items-center h-64 mb-4">
                        <img src={image} alt={bookName} className="h-48 object-contain shadow-md rounded" />
                    </div>

                    <div className="flex gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">Young Adult</span>
                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm font-medium">Identity</span>
                    </div>

                    <h2 className="text-xl font-semibold mb-1">{bookName}</h2>
                    <p className="text-gray-500 text-sm mb-4">By : {author}</p>

                    <div className="border-t border-dashed pt-3 flex justify-between items-center text-gray-600 text-sm">
                        <span>{genre}</span>
                        <span className="flex items-center gap-1">
                            {rating}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 .587l3.668 7.568L24 9.75l-6 5.85 1.42 8.3L12 19.77l-7.42 4.13L6 15.6 0 9.75l8.332-1.595z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Book;
