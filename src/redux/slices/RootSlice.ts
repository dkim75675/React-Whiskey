
import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        brand: "Brand",
        age: "Age",
        size: "Size",
        alcohol_content: "Alcohol Content"
    },
    reducers:{
        chooseName: (state, action) => { state.name = action.payload}, 
        chooseBrand:(state, action) => { state.brand = action.payload},
        chooseAge:(state, action) => { state.age = action.payload},
        chooseSize: (state, action) => { state.size = action.payload },
        chooseAlcohol: (state, action) => {state.alcohol_content = action.payload}

    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseBrand, chooseAge, chooseSize, chooseAlcohol} = rootSlice.actions