import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./content/contentSlice";
import blogcontentsreducer from "./blog/blogsSlice";
import categoriesreducer from "./Categories/categoriesSlice"
import Formreducer from "./Form/FormSlice"


const store = configureStore({
  reducer: {
    content: contentReducer,
    blogs: blogcontentsreducer,
    categorie:categoriesreducer,
    Form: Formreducer,
  },
});

export default store;
