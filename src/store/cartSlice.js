import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        increase(state, action) {
            let id = state.findIndex( a => { return a.id == action.payload})
            state[id].count++;

            // for (let e of state) {
            //     if (e.id == action.payload) {
            //         e.count += 1
            //     }
            // }
        },
        decrease(state, action) {
            for (let e of state) {
                if (e.id == action.payload) {
                    if (e.count <= 0) {
                        e.count = 0;
                    }
                    if (e.count > 0) {
                        e.count -= 1
                    }
                }
            }
        },
        addItem(state, action) {
            return [...state, action.payload]
        }
    }
})


export let { increase, decrease, addItem } = cart.actions;
export default cart;