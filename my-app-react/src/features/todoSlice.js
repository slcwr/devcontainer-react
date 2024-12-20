import { createSlice } from "@reduxjs/toolkit";

//ローカルストレージから既存のTODOリスト配列を取得
const getTodos = JSON.parse(localStorage.getItem("TODO"));

//各タスクのIDを採番する関数
const updateId = (arr) => {
    const newObj =[];
    //const newObj = new Array();
    arr.forEach((todo, index) => {
        newObj.push({id: index, task: todo.task});
    })
    return newObj;
};

const todoSlice = createSlice({
    name: "todo",
    initialState: getTodos || [],
    reducers: {
        add: (state, action) => {
            const newTodo = [...state, action.payload];
            localStorage.setItem("TODO",JSON.stringify(newTodo));
            return newTodo;
        },
        //TODOを削除する
        remove: (state,action) => {
            const todos = Object.values(state).map((item) => ({...item}));
            let updateTodo = todos.filter((todo) => todo.id !== action.payload.id);
            updateTodo = updateId(updateTodo);
            localStorage.setItem("TODO",JSON.stringify(updateTodo));
            return updateTodo;
        }
    },
});

export const { add, remove, search } = todoSlice.actions;
export default todoSlice.reducer;


