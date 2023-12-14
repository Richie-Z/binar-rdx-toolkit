import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/couterSlice";
import menuReducer from "./features/menu/menuSlice";
import registerReducer from "./features/register/registerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    menu: menuReducer,
    register: registerReducer
  },
});
