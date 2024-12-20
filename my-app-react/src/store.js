import { configureStore } from "@reduxjs/toolokit";
import reducer from "../features/todoSlice";

export default configureStore ({
    reducer: {
        todos: reducer,
    },
});

