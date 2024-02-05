import { createSlice} from "@reduxjs/toolkit";
import { DEFAUT_ITEMS } from "../data/items";
const itemSlice=createSlice ({
    name:'items',
    initialState:[DEFAUT_ITEMS],
    reducers:{
        addInitialItems:(store,action)=>{
            return store;
        }
    }
 });

 export const itemsActions=itemSlice.actions;
 export default itemSlice;


 