import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookName: "",
  bookDescription: "",
};

const addBookSlice = createSlice({
  name: "addBook",
  initialState,
  reducers: {
    addBookToLibrary(state, action) {
      const newBook = {
        bookName: action.payload.bookName,
        bookDescription: action.payload.bookDescription,
      };
      state.push(newBook);
    },
  },
});

export const addBookActions = addBookSlice.actions;

export default addBookSlice.reducer;

// {
//   id: "1",
//   bookName: "Atomic Habits",
//   bookDescription: "Book by James Clear",
// },
// {
//   id: "2",
//   bookName: "Rich Dad Poor Dad",
//   bookDescription: "Book by Robert Kiyosaki and Sharon Lechter",
// },
