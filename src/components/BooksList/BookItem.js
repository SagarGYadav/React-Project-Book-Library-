import Card from "../UI/Card";
import classes from "./BookItem.module.css";

const BookItem = (props) => {
  const { title, description } = props;

  return (
    <li className={classes.item}>
      <Card>
        <div>
          <header>
            <h3>{title}</h3>
          </header>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button className={classes.deleteButton}>Delete</button>
          <button>Update User</button>
        </div>
      </Card>
    </li>
  );
};

export default BookItem;
