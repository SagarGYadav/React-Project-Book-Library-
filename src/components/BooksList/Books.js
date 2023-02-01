import BookItem from "./BookItem";
import classes from "./Books.module.css";

const Books = (props) => {
  return (
    <section className={classes.books}>
      <h2>BOOK LIST</h2>
      <ul>
        <BookItem

        // title="Book Name"
        // description="This is a first book - amazing!"
        />
      </ul>
    </section>
  );
};

export default Books;
