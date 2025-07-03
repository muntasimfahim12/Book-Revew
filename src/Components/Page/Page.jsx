const books = [
  { title: "The Great Gatsby", count: 192, color: "bg-blue-500", textColor: "text-blue-500" },
  { title: "To kill a mocking bird", count: 281, color: "bg-teal-500", textColor: "text-teal-500" },
  { title: "1984", count: 328, color: "bg-amber-400", textColor: "text-yellow-600" },
  { title: "The Alchemist", count: 177, color: "bg-orange-400", textColor: "text-orange-500" },
  { title: "Pride and prejudice", count: 279, color: "bg-red-500", textColor: "text-red-500" },
];

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="flex gap-8 items-end h-[550px] w-full max-w-6xl">
        {books.map((book, index) => (
          <div key={index} className="flex flex-col items-center w-28 relative">
            {/* Value */}
            <div className={`absolute -top-8 font-semibold ${book.textColor}`}>
              {book.count}
            </div>

            {/* Bar */}
            <div
              className={`w-full ${book.color}`}
              style={{
                height: `${book.count * 1.5}px`,
                clipPath: "ellipse(45% 100% at 50% 100%)",
              }}
            ></div>

            {/* Title */}
            <div className="text-center text-sm mt-3 text-gray-600">
              {book.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
