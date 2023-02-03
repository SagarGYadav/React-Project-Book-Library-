import BookItem from "./BookItem";
import classes from "./Books.module.css";
import { useSelector } from "react-redux";

const Books = (props) => {
  const books = useSelector((state) => state.addBook.books);
  return (
    <section className={classes.books}>
      <h2>BOOK LIST</h2>
      <ul>
        {books.map((book, index) => (
          <BookItem key={index} book={book} />
        ))}
      </ul>
    </section>
  );
};

export default Books;
