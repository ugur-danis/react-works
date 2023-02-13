import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import getCardList from "../utils/cardList";

const cardAdapter = createEntityAdapter();
const initialState = cardAdapter.upsertMany(cardAdapter.getInitialState(), getCardList());

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        flipCard: {
            prepare: payload => ({
                payload: {
                    id: payload.id,
                    changes: {
                        flipped: payload.flipped
                    }
                }
            }),
            reducer: cardAdapter.updateOne
        },
        flipCards: {
            prepare: payload => ({
                payload: payload.map(x => ({
                    id: x.id,
                    changes: {
                        flipped: x.flipped
                    }
                }))
            }),
            reducer: cardAdapter.updateMany
        },
        matchCards: {
            prepare: payload => ({
                payload: payload.map(id => ({
                    id,
                    changes: {
                        matched: true,
                        flipped: false
                    }
                }))
            }),
            reducer: cardAdapter.updateMany
        },
        resetCards: {
            prepare: payload => ({
                payload: payload.map(id => ({
                    id: id,
                    changes: {
                        matched: false,
                        flipped: false
                    }
                }))
            }),
            reducer: cardAdapter.updateMany
        },
        mixCards: () => cardAdapter.upsertMany(cardAdapter.getInitialState(), getCardList())
    }
});

export const cardsSelector = cardAdapter.getSelectors(state => state.cards);
export const { flipCard, matchCards, flipCards, resetCards, mixCards } = cardsSlice.actions;
export default cardsSlice.reducer;