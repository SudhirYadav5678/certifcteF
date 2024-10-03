import { createSlice } from "@reduxjs/toolkit";

const imagesSlice = createSlice({
    name: "images",
    initialState: {
        images: null
    },
    reducers: {
        // actions
        setImages: (state, action) => {
            state.images = action.payload;
        },
    }
});
export const { setImages } = imagesSlice.actions;
export default imagesSlice.reducer;