import styled from "styled-components/native";
import { Image as ImageR, Text as TextR } from 'react-native-elements'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color };
  align-items: center;
  padding: 10px;
`

export const ScrollView = styled.ScrollView`
  width: 100%;
`;

export const Image = styled(ImageR)`
  width: 100%;
  height: 500px;
`

export const Title = styled(TextR)`
  text-align: center;
  margin-top: 25px;
`

export const TitleDate = styled(TextR)`
  text-align: center;
`

export const Genres = styled(TextR)`
  text-align: center;
  margin: 8px 0;
`

export const OverviewTitle = styled(TextR)`
  text-align: center;
  margin: 10px 0 4px;
`

export const OverviewText = styled(TextR)`
margin: 8px 0;
`

export const ButtonFixed = styled.Pressable`
  position: absolute;
  bottom: 15px;
  right: 15px;
  height: 50px;
  width: 50px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: 180px;
  justify-content: center;
  align-items: center;
`;