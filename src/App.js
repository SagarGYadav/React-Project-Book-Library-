import { Fragment } from "react";

import AddBook from "./components/AddBook";
import Books from "./components/Books";

function App() {
  return (
    <Fragment>
      <AddBook />
      <Books />
    </Fragment>
  );
}

export default App;
