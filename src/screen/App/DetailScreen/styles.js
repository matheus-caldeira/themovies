import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color};
  align-items: center;
`;

export const ActivityIndicator = styled.ActivityIndicator`
  flex: 1;
`;