import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      bookName: "Atomic Habits",
      bookDescription: "Book by James Clear",
    },
    {
      id: "2",
      bookName: "Rich Dad Poor Dad",
      bookDescription: "Book by Robert Kiyosaki and Sharon Lechter",
    },
  ],
  book: {
    bookName: "",
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
