import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";

import {characterService} from "../../services";

const initialState = {
    characters: [],
    loading: null,
    errors: null

}

const getCharactersById = createAsyncThunk(
    'characterSlice/getCharactersById',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await characterService.getById(id)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const characterSlice = createSlice({
    name: 'characterSlice',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(getCharactersById.fulfilled, (state, action) => {
                state.characters = action.payload
            })

            .addMatcher(isFulfilled(getCharactersById), state => {
                state.loading = false
                state.errors = null
            })

            .addMatcher(isPending(getCharactersById), state => {
                state.loading = true;
            })

            .addMatcher(isRejected(getCharactersById), (state, action) => {
                state.errors = action.payload;
                state.isLoading = false;
            })

})

const {reducer: charactersReducer, actions} = characterSlice;

const charactersActions = {
    ...actions,
    getCharactersById
};

export {
    charactersReducer,
    charactersActions
}