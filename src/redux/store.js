import { configureStore } from '@reduxjs/toolkit';
import { reduxApiService } from './api-slice';
import userReducer from './user/user-slice';
import appReducer from './app/app-slice';
import wishlistReducer from './wishlist/wishlist-slice';
import productReducer from './product/product-slice';
import cartReducer from './cart/cart-slice';
import eventReducer from './event/event-slice'
const rootReducer = {
    [reduxApiService.reducerPath]: reduxApiService.reducer,
    user:userReducer,
    app: appReducer,
    wishlist:wishlistReducer,
    products:productReducer,
    cart:cartReducer,
    events:eventReducer
}
export default configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(reduxApiService.middleware)
});