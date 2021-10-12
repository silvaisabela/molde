import React from 'react'
import { View } from 'react-native'
import { LeftType } from '../../components/AppBar'
import { RegisterPhraseStyles } from './registerPhrase.styles'
import { Arrow } from '../../../assets/Icons'
import { Title } from '../../components/Title'
import { InputText } from '../../components/InputText'
import { Button } from '../../components/Button'
import { SignupLayout } from '../../components/SignupLayout'
import { addPhrase } from './useRegisterPhrase'
import { PhraseBox } from '../../components/PhraseBox/PhraseBox'


const RegisterPhrase = () => {

  const {
    onPress,
    handleChangeText,
    text,
    frases
  } = addPhrase()

  return (
    <SignupLayout
      leftType={LeftType.Close}
      onLeftClick={() => {}}
      action={
        (frases.length > 0) && (
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
            value={text}
            onClickPlus={onPress}
            onChangeText={handleChangeText}
          />
        </View>
        {frases.map((frase) => <PhraseBox key={frase}> {frase} </PhraseBox>)}
      </View>
    </SignupLayout>
  )
}

export { RegisterPhrase }
