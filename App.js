import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, Left, Body, Right, Button, Icon, Title } from 'native-base';
import TabRouter from './app/tabRouter';
export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title  style={{fontSize:16, paddingLeft:10}}>MOBILE LEGENDS</Title>
          </Body>
          <Right />
        </Header>
          <TabRouter />
      </Container>
    );
  }
}

