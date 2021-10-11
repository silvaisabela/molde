import React from 'react'
import { View } from 'react-native'
import { LeftType } from '../../components/AppBar'
import { SignupIdentifyStyles } from './signupIdentify.styles'
import { Arrow } from '../../../assets/Icons'
import { Title } from '../../components/Title'
import { InputText } from '../../components/InputText'
import { Button } from '../../components/Button'
import { SignupLayout } from '../../components/SignupLayout'
import { useSignupIdentify } from './useSignupIdentify'

const SignupIdentify = () => {
  const {
    handleChangeText,
    isValid,
    text
  } = useSignupIdentify()

  return (
    <SignupLayout
      leftType={LeftType.Close}
      onLeftClick={() => {}}
      action={
        isValid && (
          <View style={SignupIdentifyStyles.containerButton}>
            <Button icon={<Arrow />} onPress={() => {}}>
              Continuar
            </Button>
          </View>
        )
      }
    >
      <View>
        <View style={SignupIdentifyStyles.containerTitle}>
          <Title size="3xl">Antes de tudo, como podemos te chamar?</Title>
        </View>
        <View style={SignupIdentifyStyles.containerInput}>
          <InputText
            placeholder="Digite seu nome ou apelido"
            valid={isValid}
            value={text}
            onChangeText={handleChangeText}
          />
        </View>
      </View>
    </SignupLayout>
  )
}

export { SignupIdentify }
