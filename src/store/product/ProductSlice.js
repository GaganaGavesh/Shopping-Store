import { createSlice } from "@reduxjs/toolkit";

import PRODUCTS from "../../data/DummyData";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
  },
});

// Action creators are generated for each case reducer function
//Actions are commented since there ane no any.
// export const { } = productSlice.actions;

export default productSlice.reducer;

//createSlice returns an object which we can access the actions and reducer
