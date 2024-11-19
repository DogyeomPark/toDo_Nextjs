"use client";
import {useState, useEffect} from "react";
import axios from "axios";
import TodoCreate from "./TodoCreate";
import TodoItem from "./TodoItem";

const Todo = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/todos").then((res) => setTodos(res.data));
    }, []);

    const addTodo = async
}

const Todo = ({todos}: TodoProps) => {
    const [todolist, setTodolists] = useState<Todo[]>(todos);

    return (
        <ul>
            {todolist.map((todo) => (
                <li key={todo.id}>
                    <span>{todo.value}</span>
                    <span>{todo.done ? "✓" : "🙅"}</span>
                </li>
            ))}
        </ul>
    );
};

export default Todo;