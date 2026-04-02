import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/Product/productSlice";
import loginReducer from "./features/Login/loginSlice";
import cartSlice from "./features/Cart/cartSlice";
<<<<<<< HEAD
import profileReducer from "./features/Profile";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
=======
import { persistStore, persistReducer } from "redux-persist";
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
const persistCartConfig = {
  key: "cart",
  storage,
};
const persistedReducer = persistReducer(persistCartConfig, cartSlice);
export const store = configureStore({
  reducer: {
    product: productReducer,
    login: loginReducer,
    cart: persistedReducer,
<<<<<<< HEAD
    profile: profileReducer,
=======
>>>>>>> 2148c4f751ba7c58f9135aafa612f04fc058df7c
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
