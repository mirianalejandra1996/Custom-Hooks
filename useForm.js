import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [formState, setFormState] = useState(initialState)

    const onInputChange = (e) => {
        const {name, value} = e.target
        setFormState({...formState, [name]: value})
    }

    const onReset = () => {
        // const resetValues = {}
        // Object.keys(formState).forEach(field => resetValues[field] = '' )
        // setFormState(resetValues)
        
        setFormState(initialState)
        
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onReset
  }
}
