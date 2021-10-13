import { useState } from 'react'

const emailPattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i

const useSignupRegistration = () => {
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isConfirmPassword, setIsConfirmPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (value) => {
    setIsEmailValid(emailPattern.test(value))
    setEmail(value)
  }

  const handleChangePassword = (value) => {
    setIsPasswordValid(value.length >= 8)
    setPassword(value)
  }

  const handleChangePasswordConfirm = (value) => {
    setIsConfirmPassword(value === password)
  }

  const isFormValid = Array.of(
    isEmailValid,
    isPasswordValid,
    isConfirmPassword).every((v) => v)

  return {
    handleChangeEmail,
    handleChangePassword,
    handleChangePasswordConfirm,
    isFormValid,
    isEmailValid,
    email,
    password
  }
}

export { useSignupRegistration }
