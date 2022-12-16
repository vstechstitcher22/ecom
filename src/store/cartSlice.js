import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity:0
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add:(state,action)=>{
            state.totalQuantity+=action.payload.quantity;
            const find = state.items.findIndex((item) => item.newItem.id === action.payload.newItem.id);
            if(find>=0){
              state.items[find].quantity+=action.payload.quantity;
            }
            else{           
            const tempver = {...action.payload, quantity:action.payload.quantity};
            state.items.push(tempver)
          }
        },
        
        removeCartItem:(state, action) => {
          const newList = state.items.filter((item) => item.newItem.id !== action.payload)
          state.items = newList;
        },
        decrementQuantity: (state, action) =>{
          state.totalQuantity--;
          const find = state.items.findIndex((item) => item.newItem.id === action.payload.id);
          if(state.items[find].quantity === 1){
            const newList1 = state.items.filter((item) => item.newItem.id !== action.payload.id)
            state.items = newList1;
          }else{
            state.items[find].quantity-=1;
          }
         
        },
    }
})

export const {add, removeCartItem,decrementQuantity} = cartSlice.actions;
export default cartSlice.reducer


// const cartSlice = createSlice({
//     name: 'cart',
//     initialState:{
//         cart:[]
//     },
//     reducers: {
//         addToCart: (state, action) =>{
//             const itemInCart = state.cart.find((item)=> item.id === action.payload.id);
//             if(itemInCart){
//                 itemInCart.quantity++;
//             }else{
//                 state.cart.push({...action.payload, quantity: 1})
//             }
//         },
//         incrementQuantity: (state, action) => {
//             const item = state.cart.find((item) => item.id === action.payload);
//             item.quantity++;
//         },
//         decrementQuantity: (state, action) => {
//             const item = state.cart.find((item) => item.id === action.payload);
//             if(item.quantity === 1){
//                 item.quantity = 1;
//             }else{
//                 item.quantity--;
//             }
//         },
//         removeItem: (state, action) => {
//             const removeItem = state.cart.filter((item) => item.id !== action.payload);
//             state.cart = removeItem
//         },
//     },
// });