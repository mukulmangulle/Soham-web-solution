    import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

    export const fetchFormData = createAsyncThunk("FETCH/FORM", async () => {
        try {
            const apiUrl = "https://crud-api-mlhz.onrender.com/api/todo";
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Failed to fetch form data");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    });

    const FormSlice = createSlice({
        name: "Form",
        initialState: {
            isSuccess: false,
            isLoading: false,
            isError: false,
            formData: null, 
            errorMessage: "", 
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(fetchFormData.pending, (state) => {
                    state.isLoading = true;
                    state.isSuccess = false; 
                    state.isError = false; 
                    state.errorMessage = ""; 
                })
                .addCase(fetchFormData.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = true;
                    state.formData = action.payload;
                })
                .addCase(fetchFormData.rejected, (state, action) => {
                    state.isLoading = false;
                    state.isSuccess = false;
                    state.isError = true;
                    state.errorMessage = action.error.message; 
                });
        },
    });

    export default FormSlice.reducer;
