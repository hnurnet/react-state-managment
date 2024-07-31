import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "../store/cartSlice";
import contentSlice from '../store/contentSlice';



const store = configureStore({
    reducer : {
        cart: cartSlice,
        content: contentSlice

    }

});


export default store;



