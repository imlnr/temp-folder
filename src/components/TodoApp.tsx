import React, { useEffect, useState } from 'react'
import { TodoInput } from './TodoInput'
import { Todo } from '../constants';
import TodoItem from './TodoItem';
import { getTodos } from '../api';

const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [change,setChange] = useState<boolean>(false);
    const handlechange = ()=>{
        setChange((prev)=>!prev);
    }
    useEffect(() => {
        getTodos().then(res => setTodos(res));
    }, [change]);
    return (
        <div>
            <h1>Todo App</h1>
            <TodoInput setChange={handlechange}/>
            {
                todos.map((ele) => {
                    return <TodoItem key={ele.id} {...ele} />
                })
            }
        </div>
    )
}
export default TodoApp