import { useDispatch } from "react-redux";

import { addBookActions } from "../../store/features/addBookSlice";
import Card from "../UI/Card";
import classes from "./AddBook.module.css";

const AddBook = () => {
  const dispatch = useDispatch();

  const addBookHandler = () => {
    const bookName = document.getElementById("bookName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    dispatch(addBookActions.addBookToLibrary({ bookName, bookDescription }));
  };

  return (
    <Card className={classes.card}>
      <h2>DAVZON BOOK LIBRARY</h2>
      <ul className={classes.item}>
        <div className={classes.details}>
          <label htmlFor="name">Book Name</label>
          <input type="text" id="name" />
        </div>
        <div className={classes.details}>
          <label htmlFor="bookDescription">Book Description</label>
          <input type="text" id="bookDescription" />
        </div>
      </ul>

      <div className={classes.actions}>
        <button onClick={addBookHandler}>Add Book</button>
      </div>
    </Card>
  );
};

export default AddBook;
