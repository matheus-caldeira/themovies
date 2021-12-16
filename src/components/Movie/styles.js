import styled from "styled-components/native";
import { Text as TextR, Image as ImageR} from 'react-native-elements'

export const Container = styled.Pressable`
  width: 48%;
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.background};
  border-radius: 12px;
  elevation: 8;
  overflow: hidden;
`

export const Image = styled(ImageR)`
  width: 100%;
  min-height: 250px;
`;

export const Content = styled.View`
  padding: 8px 2px;
  justify-content: center;
  align-items: center;
`

export const Text = styled(TextR)``;

export const TextBold = styled(TextR)`
  color: ${({ theme }) => theme.color};
  text-align: center;
  font-weight: bold;
  font-size: 16px;
`;

export const TextOpacity = styled(TextR)`

`;
