import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, H3} from 'native-base';
export default tabThree = (props) => (
   <Container>
    <Content>
      <H3 style={nbstyle.subtitle}>
        Settings
      </H3>
    </Content>
 </Container>
)

const nbstyle = {
  subtitle: {
    textAlign: 'center',
    color: 'blue'
  }
}