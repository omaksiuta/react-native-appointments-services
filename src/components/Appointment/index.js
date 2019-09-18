import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri:
              'https://lh3.googleusercontent.com/-fkoRiG2JVlA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rewyQhI1Zx9I7eNds4YNAFuJ3ifFA.CMID/s192-c/photo.jpg',
          }}
        />
        <Info>
          <Name>Marlon Authority</Name>
          <Time>em 3 horas</Time>
        </Info>
      </Left>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
