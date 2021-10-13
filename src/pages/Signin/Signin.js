import React from 'react'
import { View } from 'react-native'
import { ArrowRight, Logo } from '../../../assets/Icons'
import { SigninStyles } from './signin.styles'
import { Title } from '../../components/Title'
import { InputText } from '../../components/InputText'
import { InputPassword } from '../../components/InputPassword'
import { Link } from '../../components/Link'
import { Button } from '../../components/Button'
import { LeftType } from '../../components/AppBar'
import { SigninLayout } from '../../components/SigninLayout/SigninLayout'

const Signin = () => {
  return (
    <SigninLayout
      leftType={LeftType.Back}
      onLeftClick={() => {}}
      rightIcon={<Logo />}
    >
      <View style={SigninStyles.containerTitle}>
        <Title weight="bold" size="6xl">
          Molde a sua forma de escutar o mundo.
        </Title>
      </View>
        <View style={SigninStyles.containerInput}>
          <InputText style={SigninStyles.input} placeholder="Email" />
          <InputPassword placeholder="senha" />
        </View>
        <Link style={SigninStyles.link} onPress={() => {}}>
          Esqueci minha senha
        </Link>
        <View style={SigninStyles.containerButton}>
          <Button
            type="secondary"
            icon={<ArrowRight />}
            large
            onPress={() => {}}
          >
            Entrar
          </Button>
      </View>
    </SigninLayout>
  )
}

export { Signin }
