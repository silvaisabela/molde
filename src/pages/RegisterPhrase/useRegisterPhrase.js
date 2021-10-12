import { useState } from 'react'

const useRegisterPhrase = () => {
  const [isValid, setIsValid] = useState(false)
  const [text, setText] = useState('')

  const handleChangeText = (value) => {
    setIsValid(value.length >= 2)
    setText(value)
  }

  return { handleChangeText, isValid, text }
}

export { useRegisterPhrase }
