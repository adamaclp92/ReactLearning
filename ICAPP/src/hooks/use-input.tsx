import { useState } from "react"

const useInput = () => {

  const [enteredValue, setEnteredValue] = useState('')

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value)
  }

  const clearInputFields = () => {
    setEnteredValue("")
  }


return {
        value: enteredValue,  valueChangeHandler, clearInputFields
    }

}

export default useInput