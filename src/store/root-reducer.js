import { combineReducers } from "redux";
import { cartReducer } from "./cart/reducer";
import { categoriesReducer } from "./categories/reducer";
import { userReducer } from "./user/reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
