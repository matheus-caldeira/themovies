import React, { useCallback, useState, useEffect } from "react";

import { useAuth } from '../../../context/auth'

import logo from '../../../assets/logo.png'

import { Container, Image, Content, LoginText, Button, ButtonText } from "./styles";

function SignInScreen() {
  const [status, setStatus] = useState({
    loading: false,
    message: 'Fazer login'
  })
  const { generateToken } = useAuth();

  const handle = useCallback(async () => {
    if (status.loading) return;

    setStatus({
      loading: true,
      message: 'Carregando...'
    })
    generateToken();
  }, [status]);

  useEffect(() => {
    let interval = null;
    if (status.loading) {
      interval = setTimeout(() => {
        setStatus({
          loading: false,
          message: 'Fazer login'
        })
      }, 8000)
    }

    return () => {
      if (interval) clearInterval(interval);
    }
  }, [status])

  return (
    <Container>
      <Image 
        source={logo}
        size="xlarge"
      />
      <Content>
        <LoginText h4>Realize o login com sua conta do The Movie DB</LoginText>
        <Button onPress={handle}>
          <ButtonText h4>
            {status.message}
          </ButtonText>
        </Button>
      </Content>
    </Container>
  )
}

export default SignInScreen;