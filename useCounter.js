import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    // const onAddCounter = (value = 1) => setCounter(counter + value)
    const onAddCounter = (value = 1) => setCounter((current) => current + value)
    // const onSubstractCounter = () => setCounter(counter - 1)
    const onSubstractCounter = (value = 1) => {
        // if(counter === 0) return
        // setCounter(counter - value)
        setCounter((current) => current - value)
    }
    const onResetCounter = () => setCounter(initialValue)

    return {
        // * Propiedades
        counter,

        // * Métodos
        onAddCounter,
        onSubstractCounter,
        onResetCounter,
    }

}