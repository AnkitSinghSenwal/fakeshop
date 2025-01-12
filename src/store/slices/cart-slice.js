import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log(action)
            state.push(action.payload)
        },
        removeFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload)
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// // Load state from localStorage
// const loadFromLocalStorage = () => {
//     try {
//         const serializedState = localStorage.getItem('cart');
//         if (serializedState === null) return [];
//         return JSON.parse(serializedState);
//     } catch (error) {
//         console.error('Error loading from localStorage', error);
//         return [];
//     }
// };

// // Save state to localStorage
// const saveToLocalStorage = (state) => {
//     try {
//         const serializedState = JSON.stringify(state);
//         localStorage.setItem('cart', serializedState);
//     } catch (error) {
//         console.error('Error saving to localStorage', error);
//     }
// };

// const initialState = loadFromLocalStorage();

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             state.push(action.payload);
//         },
//         removeFromCart(state, action) {
//             return state.filter((item) => item.id !== action.payload);
//         },
//     },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;