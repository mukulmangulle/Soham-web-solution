import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        isSuccess: false,
        isLoading: false,
        isError: false,
        categoriescontents: [
            {
             
            }
        ],
        message: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchcategories.pending, (state) => {
                state.isLoading = true;
                state.message = "";
            })
            .addCase(fetchcategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categoriescontents = action.payload;
            })
            .addCase(fetchcategories.rejected, (state) => {
                state.isLoading = false;
                state.isSuccess = false;
                state.isError = true;
                state.message = "categories Cannot Be Fetched!";
            });
    },
});

export default categoriesSlice.reducer;


const apiUrl = "https://sohamsolution.com/wp-json/wp/v2/categories";

export const fetchcategories = createAsyncThunk("FETCH/CATEGORIES", async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        return data;
    } catch (error) {
       
        throw error; 
    }
});
