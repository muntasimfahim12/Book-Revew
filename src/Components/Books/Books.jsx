import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [book, setBooks] = useState([]);

    useEffect(() => {
        fetch('json.json')
            .then(res => res.json())
            .then(data => setBooks(data))

    }, [])
    console.log(book);
    return (
        <div className="grid ">
            <div>
                <h2 className="text-6xl text-center mt-4">Books: {book.length}</h2>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-8 ">
                {
                    book.map(book => <Book key={book.id} book={book}></Book> )
                }
            </div>

        </div>
    );
};

export default Books;