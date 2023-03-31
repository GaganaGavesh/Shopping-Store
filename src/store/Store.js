import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./product/ProductSlice";
import CartSlice from "./cart/CartSlice";

export default configureStore({
  reducer: {
    products: ProductSlice,
    cart: CartSlice,
  },
});
