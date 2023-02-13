import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./cardsSlice";
import scoreSlice from "./scoreSlice";

const store = configureStore({
    reducer: {
        cards: cardsSlice,
        score: scoreSlice
    }
});

export default store;