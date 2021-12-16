import styled from 'styled-components/native';
import { Image as ImageR } from 'react-native-elements';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  align-items: center;
`;

export const Image = styled(ImageR)`
  width: 250px;
  height: 250px;
  margin-top: 40px;
  resize-mode: contain;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  flex: 1;
`;