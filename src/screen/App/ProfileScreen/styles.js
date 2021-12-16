import styled from 'styled-components/native';
import { Image as ImageR, Text as TextR} from 'react-native-elements'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color};
  align-items: center;
  padding: 5px;
`;

export const Image = styled(ImageR)`
  width: 200px;
  height: 200px;
  resize-mode: contain;
`;

export const Text = styled(TextR)`
  color: ${({ theme }) => theme.background};
`;