import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cart-slice'


const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// store.subscribe(() => {
//     saveToLocalStorage(store.getState().cart);
// });

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './path/to/cartSlice';

// const store = configureStore({
//     reducer: {
//         cart: cartReducer,
//     },
// });

// store.subscribe(() => {
//     saveToLocalStorage(store.getState().cart);
// });

// export default store;