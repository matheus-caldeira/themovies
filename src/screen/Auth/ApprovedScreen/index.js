import React, { useEffect } from "react";
import { Alert } from 'react-native';

import { useAuth } from '../../../context/auth'
import { useTheme } from '../../../context/theme'

import logo from '../../../assets/logo.png'

import { Container, Image, ActivityIndicator } from "./styles";

function ApprovedScreen( { navigation }) {
  const { singIn } = useAuth();
  const { theme } = useTheme();

  useEffect(() => {
    const load = async _ => {
      try {
        await singIn();
      } catch {
        Alert.alert(
          'Erro ao fazer login',
          'Um erro inesperado ocorreu, tente novamente',
          [{
              text: 'Ok',
              onPress: () => navigation.goBack()
          }]
        )
      }
    }

    load();
  })

  return (
    <Container>
      <Image source={logo} size="xlarge" />
      <ActivityIndicator size="large" color={theme.color} />
    </Container>
  )
}

export default ApprovedScreen;