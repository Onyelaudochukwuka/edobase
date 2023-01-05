import { configureStore } from '@reduxjs/toolkit';

import edoBaseApi from './ApiConnection';

const store = configureStore({
  reducer: {
    [edoBaseApi.reducerPath]: edoBaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(edoBaseApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
