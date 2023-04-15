import { useSelector, useDispatch } from "react-redux";
import fetchBooks from "../../../redux/books/thunk/fetchBooks";
import BookItem from "./BookItem";
import { useEffect } from "react";

const Book = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    books,
    filter: { status, searchTerm },
  } = state;

  const modifiedBooks = books
    .filter((book) => {
      if (status == "featured") {
        return book.featured;
      } else {
        return book;
      }
    })
    .filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);
  return (
    <div className="lws-bookContainer">
      {/* <!-- Card 1 --> */}
      {modifiedBooks.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Book;
