import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const blogcontentSlice = createSlice({
  name: "blogcontents",
  initialState: {
    isSuccess: false,
    isLoading: false,
    isError: false,
    blogcontents: [

    ],
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchblogcontents.pending, (state) => {
      state.isLoading = true
    })
      .addCase(fetchblogcontents.fulfilled, (state, action) => {
        // state.isLoading = false;
       state.isSuccess=true;
        state.blogcontents = action.payload;
      })
      .addCase(fetchblogcontents.rejected, (state, action) => {
        // state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = "Products Cannot Be Fetched!";
      });
  },
});

export default blogcontentSlice.reducer;

const apiUrl = "https://sohamsolution.com/wp-json/wp/v2/posts?per_page=10&page=1";
export const fetchblogcontents = createAsyncThunk("FETCH/BLOGCONTENT", async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
  // console.log(data)
});

