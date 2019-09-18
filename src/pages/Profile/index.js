import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

export default function Profile() {
  return (
    <Background>
      <SafeAreaView>
        <Text>Perfil</Text>
      </SafeAreaView>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
