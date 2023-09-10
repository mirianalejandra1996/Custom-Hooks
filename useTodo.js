import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del amor',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // }
]

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || []
}

export const useTodo = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    const todosCount = todos.length
    const pendingTodos = todos.filter( todo => !todo.done).length

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const handleNewTodo = (todo) => {
        console.log('handleNewTodo', todo)
        dispatch({type: '[TODO] Add Todo', payload: todo})
    }

    const handleDeleteTodo = (id) => {
        console.log('handleNewTodo', id)
        dispatch({type: '[TODO] Remove Todo', payload: id})
    }

    const handleToggleTodo = (id) => {
        console.log('handleToggleTodo', id)
        dispatch({type: '[TODO] Toggle Todo', payload: id})
    }

    return {
        // Properties
        todos,
        todosCount,
        pendingTodos,

        // Methods
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
