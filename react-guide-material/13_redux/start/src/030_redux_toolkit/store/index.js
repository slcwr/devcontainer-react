import { configureStore } from "@reduxjs/toolkit";
import  reducer from "./modules/counter"


const reducers = combineReducers({
  counter: reducer,
});

//reducerが増えた場合には、reducerオブジェクトに追加していく
export default configureStore({
  reducer: {
    counter: reducer
  }
});
