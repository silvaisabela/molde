import React from 'react'
import { View } from 'react-native'
import { ArrowRight, Logo } from '../../../assets/Icons'
import { WelcomeStyles } from './welcome.style'
import { Title } from '../../components/Title'
import { Link } from '../../components/Link'
import { Button } from '../../components/Button'
import { WelcomeLayout } from '../../components/WelcomeLayout/WelcomeLayout'

const Welcome = () => {
  return (
    <WelcomeLayout
      rightIcon={<Logo />}
    >
      <View style={WelcomeStyles.containerTitle}>
        <Title weight="bold" size="6xl">
          Molde a sua forma de escutar o mundo.
        </Title>
        <View style={WelcomeStyles.titleDecoration} />
      </View>
      <View style={WelcomeStyles.containerButton}>
        <Button type="primary" icon={<ArrowRight />} large>
          Vamos começar
        </Button>
      </View>
      <Link style={WelcomeStyles.link}>Já tenho uma conta</Link>
    </WelcomeLayout>
  )
}

export { Welcome }
