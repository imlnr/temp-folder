import React from 'react'
import { Todo } from '../constants';

const TodoItem = ({ title, status }: Todo) => {
    return (
        <div>
            <p>Todos:{title},Status:{status ? "Completed" : "NotCompleted"}</p>
        </div>
    )
}

export default TodoItem;