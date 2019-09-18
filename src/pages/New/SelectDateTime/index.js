import React from 'react';
import { View } from 'react-native';

import Background from '~/components/Background';

import { Container } from './styles';

export default function SelectDateTime({ navigation }) {
  console.tron.log(navigation.state.params);
  return (
    <Background>
      <Container />
    </Background>
  );
}

SelectDateTime.navigationOptions = {
  title: 'Selecione o horário',
};
