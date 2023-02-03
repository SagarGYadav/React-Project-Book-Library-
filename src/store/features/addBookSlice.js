import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      bookName: "Atomic Habits",
      bookAuthor: "Book by James Clear",
      bookDescription:
        "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
    },
    {
      id: "2",
      bookName: "Rich Dad Poor Dad",
      bookAuthor: "Book by Robert Kiyosaki ",
      bookDescription:
        "Rich Dad Poor Dad is about Robert Kiyosaki (author) and his two dads—his real father (poor dad) and the father of his best friend (rich dad)—and the ways in which both men shaped his thoughts about money and investing. The book explodes the myth that you do not need to earn a high income to become rich.",
    },
  ],
  book: {
    bookName: "",
    bookAuthor: "",
    bookDescription: "",
  },
};

const addBookSlice = createSlice({
  name: "addBook",
  initialState,
  reducers: {
    getBook: (state, action) => {
      state.book = state.books.find((el) => el.id === action.payload);
    },
    addBook: (state, action) => {
      state.books = [action.payload, ...state.books];
    },
  },
});

export const { getBook, addBook } = addBookSlice.actions;

export default addBookSlice.reducer;
