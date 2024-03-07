import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";

import {episodeService} from "../../services";

const initialState = {
    episodes: {},
    nameEpisode: null,
    loading: null,
    errors: null

}

const getAllEpisodes = createAsyncThunk(
    'episodeSlice/getAllEpisodes',
    async (page, thunkAPI) => {
        try {
            const {data} = await episodeService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data);
        }
    }
)

const episodeSlice = createSlice({
    name: 'episodeSlice',
    initialState,
    reducers: {
        setNameEpisode: (state, action) => {
            state.nameEpisode = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAllEpisodes.fulfilled, (state, action) => {
                state.episodes = action.payload
            })
            .addMatcher(isFulfilled(getAllEpisodes), state => {
                state.loading = false
                state.error = null
            })

            .addMatcher(isPending(getAllEpisodes), state => {
                state.loading = true;
            })

})

const {reducer: episodesReducer, actions} = episodeSlice;

const episodesActions = {
    ...actions,
    getAllEpisodes
};

export {
    episodesReducer,
    episodesActions
}