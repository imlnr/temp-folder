import axios from "axios";
import { Todo } from "./constants";

const url = "http://localhost:8080/todos";
export const addTodo = async(newTodo: Todo)=>{
    let res = await axios.post("http://localhost:8080/todos",newTodo);
    return res.data;
}
export const getTodos = async () => {
    let res = await axios.get(url);
    return res.data;
}