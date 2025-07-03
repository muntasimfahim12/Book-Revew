import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { saveReadList } from "../../Utiliti/LocalStoreg";
import { saveWishList } from "../../Utiliti/LocalStorege2";

const Details = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const [book, setBook] = useState(null);


    const handleRead = () => {
        const added = saveReadList(idInt);
        if (added) {
            toast.success(' Book added to Read List');
        } else {
            toast.warning(' Book already in Read List');
        }
    };


    const handleWish = () => {
        const added = saveWishList(idInt);
        if (added) {
            toast.success(' Book added to Wishlist');
        } else {
            toast.warning(' Book already in Wishlist');
        }
    };


    useEffect(() => {
        fetch('/json.json')
            .then(res => res.json())
            .then(data => {
                const foundBook = data.find(item => item.id === idInt);
                setBook(foundBook);
            });
    }, [idInt]);


    if (!book) {
        return <p className="text-center mt-10 text-xl font-semibold">Loading...</p>;
    }

    return (
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center gap-10 p-6">


            <div className="md:w-1/2 flex justify-center">
                <img
                    className="w-72 h-96 object-cover rounded-xl shadow-xl"
                    src={book.image}
                    alt={book.bookName}
                />
            </div>


            <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">{book.bookName}</h2>
                <p className="text-lg text-gray-600 font-medium">Author: {book.author}</p>

                <hr className="border-gray-300" />
                <p className="text-sm font-semibold text-purple-700">Category: {book.category}</p>

                <hr className="border-gray-300" />
                <p className="text-gray-700 text-base leading-relaxed">Review: {book.review}</p>


                <div className="text-base leading-relaxed flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-gray-700">Tags:</span>
                    {book.tags?.map((tag, index) => (
                        <span key={index} className="text-green-700 px-2 py-1 text-sm">
                            #{tag}
                        </span>
                    ))}
                </div>

                <hr className="border-gray-300" />


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                    <p><strong>Pages:</strong> {book.totalPages}</p>
                    <p><strong>Publisher:</strong> {book.publisher}</p>
                    <p><strong>Published:</strong> {book.yearOfPublishing}</p>
                    <p><strong>Rating:</strong> {book.rating}</p>
                </div>


                <div className="pt-4 flex gap-4">
                    <button
                        onClick={handleRead}
                        className="bg-blue-900 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                        Read
                    </button>
                    <button
                        onClick={handleWish}
                        className="bg-pink-600 text-white px-5 py-2 rounded-lg shadow hover:bg-pink-700 transition"
                    >
                        Wishlist
                    </button>
                </div>


                <ToastContainer />
            </div>
        </div>
    );
};

export default Details;
