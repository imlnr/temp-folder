import React, { useState } from 'react'
import { Todo } from '../constants';
import { addTodo, getTodos } from '../api';

type TodoInputPropTypes = {
    setChange: ()=> void;
};
export const TodoInput = ({setChange}:TodoInputPropTypes) => {
    const [title, setTitle] = useState<string>("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const todo: Todo = {
            title,
            status: false
        }
        addTodo(todo).then(()=>{
            setChange();
        });
        // setChange();
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Add todo" value={title} onChange={handleChange} />
                <button>Add Todo</button>
            </form>
        </div>
    )
}
