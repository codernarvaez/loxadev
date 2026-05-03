import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { tagService } from "services";

export const getTags = createAsyncThunk("tag/getTags", async () => {
  const res = await tagService.getTags();
  return res.data;
});

export const getTag = createAsyncThunk("tag/getTag", async (id) => {
  const res = await tagService.getTag(id);
  return res.data;
});

export const saveTag = createAsyncThunk("tag/saveTag", async (data) => {
  const res = await tagService.saveTag(data);
  return res.data;
});

export const updateTag = createAsyncThunk("tag/updateTag", async (data) => {
  const { id, ...rest } = data;
  const res = await tagService.updateTag(id, rest);
  return res.data;
});

export const deleteTag = createAsyncThunk("tag/deleteTag", async (id) => {
  const res = await tagService.deleteTag(id);
  return res.data;
});

const initialState = {
  loading: false,
  saving: false,
  updating: false,
  deleting: false,
  error: null,
  entities: [],
  currentTag: {},
};

const tagSlice = createSlice({
  name: "tag",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getTags.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getTags.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
    builder.addCase(getTags.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
    //GET ONE
    builder.addCase(getTag.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getTag.fulfilled, (state, action) => {
      state.loading = false;
      state.currentTag = action.payload;
    });
    builder.addCase(getTag.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    //SAVE TAG
    builder.addCase(saveTag.pending, (state, action) => {
      state.saving = true;
    });
    builder.addCase(saveTag.fulfilled, (state, action) => {
      state.saving = false;
      state.entities.unshift(action.payload.newTag);
    });
    builder.addCase(saveTag.rejected, (state, action) => {
      state.saving = false;
      state.error = action.error;
    });

    //UPDATE TAG
    builder.addCase(updateTag.pending, (state, action) => {
      state.updating = true;
    });
    builder.addCase(updateTag.fulfilled, (state, action) => {
      state.updating = false;
      let tagIndex = state.entities.findIndex(
        (obj) => obj._id === action.payload.updatedTag._id
      );
      state.entities[tagIndex] = action.payload.updatedTag;
    });
    builder.addCase(updateTag.rejected, (state, action) => {
      state.updating = false;
      state.error = action.error;
    });

    //DELETE A TAG
    builder.addCase(deleteTag.pending, (state, action) => {
      state.deleting = true;
    });
    builder.addCase(deleteTag.fulfilled, (state, action) => {
      state.deleting = false;
      state.entities = state.entities.filter((obj) => obj._id !== action.payload.deletedTag._id);
    });
    builder.addCase(deleteTag.rejected, (state, action) => {
      state.deleting = false;
      state.error = action.error;
    });
  },
});

export default tagSlice.reducer;
