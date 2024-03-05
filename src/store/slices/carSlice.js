import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null
}

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCar: (state, action) => {
            state.cars = action.payload;
        },
        trigger:state=>{
            state.trigger = !state.trigger
        },
        setCarForUpdate: (state,action)=>{
            state.carForUpdate = action.payload
        }
    }
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}