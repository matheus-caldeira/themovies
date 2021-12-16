import React from "react";
import { ActivityIndicator } from 'react-native';

import { useAuth } from '../../../context/auth'
import getImageUrl from '../../../utils/getImageUrl'

import { Container, Text, Image } from "./styles";

function ProfileScreen() {
  const { user } = useAuth();

  return (
    <Container>
      <Text h3>{user.name}</Text>
      <Image
        source={{ uri: getImageUrl(user.avatar_url) }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text h5>
        @{user.username}
      </Text>
    </Container>
  )
}

export default ProfileScreen;