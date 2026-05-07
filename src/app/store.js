import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/authSlice";
import tagReducer from "features/tag/tagSlice";
import articleReducer from "features/article/articleSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    article: articleReducer,
    tag: tagReducer,
  },
});
