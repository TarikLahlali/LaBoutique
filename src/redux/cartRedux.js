import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },

  reducers: {
    addToCart(state, action) {
      const existingIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          cartquantity: state.products[existingIndex].cartquantity + 1,
        };
       
      } else {
        let tempProductItem = { ...action.payload, cartquantity: 1 };
        state.products.push(tempProductItem);
       
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.products[itemIndex].cartquantity > 1) {
        state.products[itemIndex].cartquantity -= 1;

      } else if (state.products[itemIndex].cartquantity === 1) {
        const nextProducts = state.products.filter(
          (item) => item._id !== action.payload._id
        );

        state.products = nextProducts;
      
      }

      localStorage.setItem("products", JSON.stringify(state.products));
    },
    removeFromCart(state, action) {
      state.products.map((cartItem) => {
        if (cartItem._id === action.payload._id) {
          const nextProducts = state.products.filter(
            (item) => item._id !== cartItem._id
          );
          state.products = nextProducts;
   
        }
        localStorage.setItem("products", JSON.stringify(state.products));
        return state;
      });
    },
    clearCart(state, action) {
      state.products = [];
      localStorage.setItem("products", JSON.stringify(state.products));
    },

  getTotals(state, action) {
    let { total, quantity } = state.products.reduce(
      (cartTotal, cartItem) => {
        const { price, cartquantity } = cartItem;
        const itemTotal = price * cartquantity;
        cartTotal.total += itemTotal;
        cartTotal.quantity += cartquantity;
        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
    total= parseFloat(total.toFixed(2));
    state.quantity = quantity;
    state.total = (total < 1000 && total > 0 ) ? total+ 100 : total;
  },
},

});

export const { addToCart,decreaseCart, removeFromCart , getTotals} = cartSlice.actions;
export default cartSlice.reducer;