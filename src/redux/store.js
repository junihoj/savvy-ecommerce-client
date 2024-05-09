import { configureStore } from '@reduxjs/toolkit';
import { reduxApiService } from './api-slice';
import userReducer from './user/user-slice';
import appReducer from './app/app-slice';


const rootReducer = {
    [reduxApiService.reducerPath]: reduxApiService.reducer,
    user:userReducer,
    app: appReducer
}
export default configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(reduxApiService.middleware)
});