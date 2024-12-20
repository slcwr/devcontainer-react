import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: 'counter',

  //もし初期値がオブジェクトだった場合
  initialState: {
    count: 0
  },
  reducers: {
    add(state, { type, payload }) {
      console.log(type, payload)
      //以下のようにコピーして新しく作り直すのがイミュータビリティの保持.
      const newState = { ...state };
      newState.count = state.count + payload
      return state + payload;
      //以下はミュータブル(純粋関数の中では基本ミュータブルな操作は扱ってはいけない)
      //ただし、Redux-tool-kitでは、ミュータブルもイミュータブルに扱われる。(Immerの働き)
      //ミュータブルのばあおはreturn文を書いてはいけない。
      //state.count = state.count + payload;
    },
    minus(state, { type, payload }) {
      const newState = { ...state };
      newState.count = state.count - payload
      return state - payload;
    }
  }
})

const { add, minus } = counter.actions;

export { add, minus }
export default counter.reducer