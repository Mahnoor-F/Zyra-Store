import { createSlice } from "@reduxjs/toolkit";

const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem("zyra_cart");
    return savedCart ? JSON.parse(savedCart) : { items: [], totalQuantity: 0 };
};

const initialState = loadCartFromStorage();

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({...newItem, quantity: 1});
            } else {
                existingItem.quantity++;
            }
            state.totalQuantity++;

            localStorage.setItem("zyra_cart", JSON.stringify(state));
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                if (existingItem.quantity === 1) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    existingItem.quantity--;
                }
                state.totalQuantity--;
            }

            localStorage.setItem("zyra_cart", JSON.stringify(state));
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }

            localStorage.setItem("zyra_cart", JSON.stringify(state));
        },
        
        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            localStorage.removeItem("zyra_cart");
        }
    }
});

export const { addToCart, removeFromCart, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;