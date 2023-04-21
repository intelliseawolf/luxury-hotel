import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import hotelSlice from "./modules/hotelSlice";

export const store = configureStore({
  reducer: {
    hotel: hotelSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export function setupStore() {
  return configureStore({
    reducer: {
      hotel: hotelSlice,
    },
  });
}
