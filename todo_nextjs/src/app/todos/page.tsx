import axios from "axios";
import Todo from "@/app/components/Todo";

const TodosPage = async () => {
    const res = await axios.get("http://localhost:8060/todo/");
    const todos = res.data;

    return (
        <div>
            <h1>Todo List</h1>
            <Todo todos={todos} />
        </div>
    );
};

export default TodosPage;