import styled from 'styled-components/native'
import { Image as ImageR, Text } from 'react-native-elements';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
  justify-content: space-between;
  padding: 40px;
`;

export const Image = styled(ImageR)`
  width: 250px;
  height: 250px;
  margin-top: 40px;
  resize-mode: contain;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const LoginText = styled(Text)`
  color: ${({ theme }) => theme.color};
  text-align: center;
`

export const Button = styled.Pressable`
  align-items: center;
  justify-content: center;
  padding: 12px 32px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color};
`;

export const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.secondary};
`