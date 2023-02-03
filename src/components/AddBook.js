import { useDispatch } from "react-redux";

import Card from "./UI/Card";
import classes from "./AddBook.module.css";
import { addBook } from "../store/features/addBookSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  // const { id, bookName, bookDescription } = book;

  return (
    <Card className={classes.card}>
      <h2>DAVZON BOOK LIBRARY</h2>
      <ul className={classes.item}>
        <div className={classes.details}>
          <label htmlFor="name">Book Name</label>
          <input type="text" id="name" />
        </div>
        <div className={classes.details}>
          <label htmlFor="bookAuthor">Book Author</label>
          <input type="text" id="bookAuthor" />
        </div>
        <div className={classes.details}>
          <label htmlFor="bookDescription">Book Description</label>
          <input type="text" id="bookDescription" />
        </div>
      </ul>

      <div className={classes.actions}>
        <button>Add Book</button>
      </div>
    </Card>
  );
};

export default AddBook;
