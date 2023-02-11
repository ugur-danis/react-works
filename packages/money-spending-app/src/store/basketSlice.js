import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    money: 100000000000,
    totalAmount: 0,
    items: []
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload;

            const foundItem = state.items.find(x => x.id === product.id);
            if (foundItem) {
                foundItem.amount = product.amount;
            } else {
                state.items.push(action.payload);
            }

            const totalAmount = state.items.reduce((acc, item) => acc += item.price * item.amount, 0);
            state.money = initialState.money - totalAmount;
            state.totalAmount = totalAmount;
        },
    }
});

export const { addProduct, removeProduct } = basketSlice.actions;
export const basketSelector = state => state.basket;
export default basketSlice.reducer;