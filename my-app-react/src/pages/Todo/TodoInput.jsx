import { useState } from "react";
import { Button } from "@mui/material";
import { Grid, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../features/todoSlice";
import TodoList from "./TodoList"

function TodoInput() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const[task,setTask] = useState("");

    const addTodo = () => {
        if (task === "") return;
        const newTodo = { id: todos.length + 1, task: task };
        dispatch(add(newTodo));
        setTask("");  
    };

    return (
        <div>
          <Grid container spacing={5} alignItems="center" justifyContent="center">
          <Grid item>
            <TextField
              value={task}
              type="text"
              margin="dense"
              sx={{
                width: 400,
              }}
              placeholder="タスクを入力しましょう"
              onChange={(e) => setTask(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              onClick={addTodo}
              variant="contained"
              size="large"
              color="secondary"
            >
              追加
            </Button>
          </Grid>
        </Grid>
        <TodoList />
        </div>
      );
    }
    
    export default TodoInput;