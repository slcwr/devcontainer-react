import { Box, Button, Stack, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../features/todoSlice";
import { useState, useMemo } from 'react';


function TodoList() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");

    const deleteTodo = (e, todo) => {
        dispatch(remove(todo));
    };

    //memo化されたフィルタリング結果
    const filteredTodos = useMemo(() => {
      return todos.filter(todo => 
        todo.task.toLowerCase().includes(searchTerm.toLowerCase())
    );
    }, [todos, searchTerm]);

    return (
      <>
        <Box sx={{ display: 'flex', justifyContent: 'center', m: 2 }}>
                <TextField
                    placeholder="タスクを検索"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{ width: 500 }}
                />
            </Box>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0.5}
          sx={{
            margin: 2,
          }}
        >
          {filteredTodos.map((todo) => {
            return (
             
            
              <Box
                key={todo.id}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                  m: 1,
                  background:
                    "linear-gradient(167deg, rgba(255, 167, 247, 1), rgba(255, 137, 179, 1) 19%, rgba(224, 216, 239, 1) 31%, rgba(216, 237, 255, 1) 61%)",
                  borderRadius: 1,
                  width: 500,
                  boxShadow: "0px 2px 7px 0px rgba(0, 0, 0, 0.35)",
                }}
              >
                <Box>{todo.task}</Box>
                <Button
                  onClick={(e) => deleteTodo(e, todo)}
                  sx={{
                    color: "red",
                    background: "pink",
                    "&:hover": {
                      background: "rgba(8, 33, 0, 0.26)",
                    },
                  }}
                >
                  削除
                </Button>
              </Box>
            );
          })}
        </Stack>
      </>
      );
    }
    export default TodoList;

