import styled from 'styled-components/native';
import { Text as TextR } from 'react-native-elements'

export const Container = styled.View`
  flex: 1;
  padding: 5px;
  background-color: ${({ theme }) => theme.background};
`;

export const ContainerAvatar = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 10px;
`;

export const ContainerTextName = styled.View`
  margin-left: 5px;
`

export const Text = styled(TextR)`
  color: ${({ theme }) => theme.color};
`;

export const BoldText = styled(TextR)`
  font-weight: bold;
`

export const ContainerItems = styled.View`
  margin-top: 15px;
`
