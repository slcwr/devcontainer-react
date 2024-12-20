import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
 name: 'counter',
 initialState: 0,
 reducers: {
  add(state,{type, payload}){
    console.log(type, payload)
    return state + payload;
  },
  minus(state,{type, payload}){
    console.log(type, payload)
    return state - payload;
  }
 }
})

const {add, minus} = counter.actions;

// const initialState = 0;

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "counter/+":
//       return state + payload;
//     case "counter/-":
//       return state - payload;
//     default:
//       return state;
//   }
// };


//以下はResux toolkitの場合は自動的に生成される
// const add = (payload) => {
//     return {
//         type: "counter/+",
//         payload
//     }
// }

// const minus = (payload) => {
//     return {
//         type: "counter/-",
//         payload
//     }
// }

export { add, minus }
export default counter.reducer