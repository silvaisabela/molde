import { useState } from 'react'

const addPhrase = () => {
  const [text, setText] = useState('')
  const [frases, setFrases] = useState([]);

  const handleChangeText = (value) => {
    setText(value)
  }
  
  const onPress = () => {
    frases.push(text)
    console.log(frases)
  }
  return { onPress, handleChangeText, frases }
}

export { addPhrase }
