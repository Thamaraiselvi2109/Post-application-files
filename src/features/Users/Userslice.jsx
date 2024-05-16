import { createSlice } from "@reduxjs/toolkit";


const initialState = [
  {
    id: 1,
    author: "Thamarai",
    
  },
  {
    id: 2,
    author: "Ruthra",
    
  },
  {
    id: 3,
    author: "Abirami",
    
  }
];
export const AuthorSlice = createSlice({
  name: "author",
  initialState
});

export default AuthorSlice.reducer;
export const Selectallusers = (state)=>state.author
