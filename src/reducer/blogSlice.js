import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setStoreReduxBlog: (state, action) => {
      state.blogs = action.payload;
    },
  },
});
export const { setStoreReduxBlog } = blogSlice.actions;
export default blogSlice.reducer;
