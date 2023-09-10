
export const todoReducer = ( initialState = [] , action ) => {

    switch(action.type) {
        case '[TODO] Add Todo':
            // throw new Error('Action.type = "[TODO] Add Todo" is not implemented')
        return [...initialState, action.payload]

        case '[TODO] Remove Todo':
            // throw new Error('Action.type = "[TODO] Add Todo" is not implemented')
            // return [...initialState, action.payload] 
            return initialState.filter(todo => todo.id !== action.payload)

        case '[TODO] Toggle Todo':

        return initialState.map(todo => {
            
            if (todo.id === action.payload) {
                return {...todo, done: !todo.done}
            }

            return todo
        })

        default:
            return initialState
    }
}

// las cookies graban menor información, las cookies viajan usualmente cuando hago un request y
// también llegan e el momento en el que el servidor va a procesar la petición,van implicitas y
// almacenan menos información

// El local storage nunca deja la computadora a menos que nosotros explícitamente hagamos que lea el
// local storage