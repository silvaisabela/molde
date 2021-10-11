import React from 'react'
import { View } from 'react-native'
import { ArrowRight, Logo } from '../../../assets/Icons'
import { WelcomeStyles } from './welcome.style'
import { Title } from '../../components/Title'
import { Link } from '../../components/Link'
import { Button } from '../../components/Button'
import { SigninLayout } from '../../components/SigninLayout/SigninLayout'

const Welcome = () => {
  return (
    <SigninLayout
      rightIcon={<Logo />}
      scale={3}
    >
      <View style={WelcomeStyles.containerTitle}>
        <Title weight="bold" size="6xl">
          Molde a sua forma de escutar o mundo.
        </Title>
      </View>
      <View style={WelcomeStyles.containerButton}>
        <Button type="primary" icon={<ArrowRight />} large>
          Vamos começar
        </Button>
      </View>
      <Link style={WelcomeStyles.link}>Já tenho uma conta</Link>
    </SigninLayout>
  )
}

export { Welcome }
