import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { articleService } from "services";

export const getArticles = createAsyncThunk("article/getArticles", async () => {
  const res = await articleService.getArticles();
  return res.data;
});

export const getArticle = createAsyncThunk("article/getArticle", async (id) => {
  const res = await articleService.getArticle(id);
  return res.data;
});

export const saveArticle = createAsyncThunk(
  "article/saveArticle",
  async (data) => {
    const res = await articleService.saveArticle(data);
    return res.data;
  }
);

export const updateArticle = createAsyncThunk(
  "article/updateArticle",
  async (data) => {
    const { id, ...rest } = data;
    const res = await articleService.updateArticle(id, rest);
    return res.data;
  }
);

export const deleteArticle = createAsyncThunk(
  "article/deleteArticle",
  async (id) => {
    const res = await articleService.deleteArticle(id);
    return res.data;
  }
);

const initialState = {
  loading: false,
  saving: false,
  updating: false,
  deleting: false,
  error: null,
  entities: [],
  currentArticle: {},
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getArticles.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
    builder.addCase(getArticles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    //GET ONE
    builder.addCase(getArticle.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getArticle.fulfilled, (state, action) => {
      state.loading = false;
      state.currentArticle = action.payload;
    });
    builder.addCase(getArticle.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    //SAVE Article
    builder.addCase(saveArticle.pending, (state, action) => {
      state.saving = true;
    });
    builder.addCase(saveArticle.fulfilled, (state, action) => {
      state.saving = false;
      state.entities.unshift(action.payload.newArticle);
    });
    builder.addCase(saveArticle.rejected, (state, action) => {
      state.saving = false;
      state.error = action.error;
    });

    //UPDATE Article
    builder.addCase(updateArticle.pending, (state, action) => {
      state.updating = true;
    });
    builder.addCase(updateArticle.fulfilled, (state, action) => {
      state.updating = false;
      let ArticleIndex = state.entities.findIndex(
        (obj) => obj._id === action.payload.updatedArticle._id
      );
      state.entities[ArticleIndex] = action.payload.updatedArticle;
    });
    builder.addCase(updateArticle.rejected, (state, action) => {
      state.updating = false;
      state.error = action.error;
    });

    //DELETE A Article
    builder.addCase(deleteArticle.pending, (state, action) => {
      state.deleting = true;
    });
    builder.addCase(deleteArticle.fulfilled, (state, action) => {
      state.deleting = false;
      state.entities = state.entities.filter(
        (obj) => obj._id !== action.payload.deletedArticle._id
      );
    });
    builder.addCase(deleteArticle.rejected, (state, action) => {
      state.deleting = false;
      state.error = action.error;
    });
  },
});

export default articleSlice.reducer;
