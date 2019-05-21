import React from 'react';

import Qrcode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutText,
} from './styles';

export default function Menu({ translateY }) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}
    >
      <Code>
        <Qrcode value="https://www.google.com" size={80} bgColor="#8B10AE" fgColor="#fff" />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#FFF" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutText>Sair do App</SignOutText>
      </SignOutButton>
    </Container>
  );
}
