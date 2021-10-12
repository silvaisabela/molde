import React from 'react'
import { View } from 'react-native'
import { LeftType } from '../../components/AppBar'
import { RegisterPhraseStyles } from './registerPhrase.styles'
import { Arrow } from '../../../assets/Icons'
import { Title } from '../../components/Title'
import { InputText } from '../../components/InputText'
import { Button } from '../../components/Button'
import { SignupLayout } from '../../components/SignupLayout'
import { useRegisterPhrase } from './useRegisterPhrase'

const RegisterPhrase = () => {
  const {
    handleChangeText,
    isValid,
    text
  } = useRegisterPhrase()

  return (
    <SignupLayout
      leftType={LeftType.Close}
      onLeftClick={() => {}}
      action={
        isValid && (
          <View style={RegisterPhraseStyles.containerButton}>
            <Button icon={<Arrow />} onPress={() => {}}>
              Continuar
            </Button>
          </View>
        )
      }
    >
      <View>
        <View style={RegisterPhraseStyles.containerTitle}>
          <Title size="3xl">Digite a frase</Title>
        </View>
        <View style={RegisterPhraseStyles.containerInput}>
          <InputText
            placeholder="Ex: Bom dia, Cheguei"
            plus
          />
        </View>
      </View>
    </SignupLayout>
  )
}

export { RegisterPhrase }
