import { Fragment } from "react";

import AddBook from "./components/AddBookForm/AddBook";
import Books from "./components/BooksList/Books";

function App() {
  return (
    <Fragment>
      <AddBook />
      <Books />
    </Fragment>
  );
}

export default App;
