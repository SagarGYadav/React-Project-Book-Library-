import AddBook from "./AddBook";
import Card from "./UI/Card";
import classes from "./BookItem.module.css";

const BookItem = ({ book }) => {
  const { id, bookName, bookAuthor, bookDescription } = book;

  return (
    <li className={classes.item}>
      <Card>
        <div to={`/students/${id}`}>
          <header>
            <h3>{bookName}</h3>
            <h4>{bookAuthor}</h4>
          </header>
          <p>{bookDescription}</p>
        </div>
        <div className={classes.actions}>
          <button className={classes.viewButton}>View</button>
          <button className={classes.deleteButton}>Delete</button>
          <button>Update </button>
        </div>
      </Card>
    </li>
  );
};

export default BookItem;
