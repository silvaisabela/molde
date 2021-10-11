import React from 'react'
import { View } from 'react-native'
import { LeftType } from '../../components/AppBar'
import { SignupRegistrationStyles } from './signupRegistration.styles'
import { Arrow } from '../../../assets/Icons'
import { Title } from '../../components/Title'
import { InputText } from '../../components/InputText'
import { InputPassword } from '../../components/InputPassword'
import { Button } from '../../components/Button'
import { SignupLayout } from '../../components/SignupLayout'
import { useSignupRegistration } from './useSignupRegistration'

const SignupRegistration = () => {
  const {
    handleChangeEmail,
    handleChangePassword,
    handleChangePasswordConfirm,
    isEmailValid,
    isFormValid,
    email,
    password
  } = useSignupRegistration()

  return (
    <SignupLayout
      leftType={LeftType.Back}
      onLeftClick={() => {}}
      action={
        isFormValid && (
          <View style={SignupRegistrationStyles.containerButton}>
            <Button icon={<Arrow />} onPress={() => {}}>
              Continuar
            </Button>
          </View>
        )
      }
    >
      <View>
        <View style={SignupRegistrationStyles.containerTitle}>
          <View style={SignupRegistrationStyles.titleName}>
            <Title size="3xl">Olá, Isabela!</Title>
          </View>
          <Title size="2xl">Agora,vamos iniciar seu cadastro :)</Title>
        </View>
        <View style={SignupRegistrationStyles.containerInput}>
          <InputText
            placeholder="Email"
            valid={isEmailValid}
            value={email}
            onChangeText={handleChangeEmail}
          />
          <InputPassword
            placeholder="Digite sua senha"
            helperText="A senha deve conter no mínimo 8 caracteres."
            value={password}
            onChangeText={handleChangePassword}
          />
          <InputPassword
            placeholder="Confirme sua senha"
            onChangeText={handleChangePasswordConfirm}
          />
        </View>
      </View>
    </SignupLayout>
  )
}

export { SignupRegistration }
