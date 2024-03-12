import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: "Brand Name",
        variety: "Variety",
        origin: "Origin",
        year: "Year",
    },
    reducers: {
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseVariety: (state, action) => { state.variety = action.payload},
        chooseOrigin: (state, action) => { state.origin = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseVariety, chooseOrigin, chooseYear} = rootSlice.actions