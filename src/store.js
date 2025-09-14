import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./reducer/blogSlice";
import gallerySlice from "./reducer/gallerySlice";
import faqSlice from "./reducer/faqSlice";
export const store = configureStore({
  reducer: {
    faqs: faqSlice,
    blogs: blogSlice,
    galleries: gallerySlice,
  },
});
