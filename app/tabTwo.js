import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Thumbnail, Body, Header, Left, Right, Icon, Title, Button} from 'native-base';
import axios from 'axios';
import Heroes from './components/Heroes';
import { StackNavigator } from "react-navigation";
import HeroAddScreen from "./components/heroAdd";

export default class tabTwo extends Component{

  constructor(){
    super();
    this.state = {
      heroes: []
    }
  }

  componentDidMount() {
    const self = this;
    axios.get('http://rest.learncode.academy/api/rachmadkurniawan/heroes')
    .then((response)=> {
      self.setState({heroes: response.data});
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  renderHeader(){
    return (
      <Header>
        <Body>
          <Text style={{color:"white", fontSize:16}}>List Heroes</Text>
        </Body>
        <Right>
          <Button transparent
            onPress={() => this.props.navigation.navigate("HeroAdd")}
          >
            <Icon name="add" style={{color:"white"}} />
          </Button>
        </Right>
      </Header>
    )
  }

  render(){
    return (
      <Container style={{backgroundColor:"white"}}>
        {this.renderHeader()}
        <Content>
          <List>
            {this.state.heroes.map((hero, key)=> <Heroes key={key} hero={hero} {...this.props} />)}
          </List>
        </Content>
      </Container>
    )    
  }
}

const nbstyle = {
  subtitle: {
    textAlign: 'center',
    color: 'blue'
  }
}
