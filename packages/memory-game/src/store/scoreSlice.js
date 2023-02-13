import { createSlice } from "@reduxjs/toolkit";

const PENALTY_POINT = 10;
const REWARD_POINT = 50;
const initialState = 0;

const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        resetScore: () => initialState,
        increaseScore: state => state + REWARD_POINT,
        decreaseScore: state => state - PENALTY_POINT,
    }
});

export const scoreSelector = state => state.score;
export const { resetScore, increaseScore, decreaseScore } = scoreSlice.actions;
export default scoreSlice.reducer;