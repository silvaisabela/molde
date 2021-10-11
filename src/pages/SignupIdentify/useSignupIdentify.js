import { useState } from 'react'

const useSignupIdentify = () => {
  const [isValid, setIsValid] = useState(false)
  const [text, setText] = useState('')

  const handleChangeText = (value) => {
    setIsValid(value.length >= 3)
    setText(value)
  }

  return { handleChangeText, isValid, text }
}

export { useSignupIdentify }
