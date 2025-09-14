import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: [],
  text: [],
  gallery: [],
};
const gallerySlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    setStoreReduxVideo: (state, action) => {
      state.video = action.payload;
    },
    setStoreReduxText: (state, action) => {
      state.text = action.payload;
    },
    setStoreReduxGallery: (state, action) => {
      state.gallery = action.payload;
    },
  },
});
export const { setStoreReduxGallery, setStoreReduxText, setStoreReduxVideo } =
  gallerySlice.actions;
export default gallerySlice.reducer;
