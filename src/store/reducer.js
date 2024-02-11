import {createSlice} from '@reduxjs/toolkit';
import InitState from './initState';

const mainSlice = createSlice({
    name: 'main',
    initialState: InitState,
    reducers: {
        saveAccount(state, action) {
            state.account = action.payload;
        },
        saveLoading(state, action) {
            state.loading = action.payload;
        },
        saveNetwork(state, action) {
            state.network = action.payload;
        },
    },
});

export const {
    saveAccount,
    saveNetwork,
    saveLoading
} = mainSlice.actions;
export default mainSlice.reducer;
