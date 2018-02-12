import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button, Thumbnail, H3} from 'native-base';

export default tabOne = (props) => (
 <Container style={{justifyContent: 'center', alignSelf: 'center'}}>
    <Content>
      <Thumbnail 
        large 
        source={{uri: 'https://d1qgcmfii0ptfa.cloudfront.net/K/content/common/images/mno/ML_Logo.png'}} 
        style={{alignItems: 'center', width: 250, height:200}}
      />
      <Text style={nbstyle.subtitle}>
        Welcome to Mobile Legends
      </Text>
      <Text style={nbstyle.subtitle}>
        Heroes Dictionary
      </Text>
      <Text style={nbstyle.subtitle}>
        Start Exploring/Creating
      </Text>
      <Text style={nbstyle.subtitle}>
        Your Favourite Heroes
      </Text>

      <Button
        block
        style={nbstyle.btn}
        onPress={() => props.navigation.navigate('Tab2')}
      >
        <Text>Start</Text>
      </Button>
    </Content>
 </Container>
)

const nbstyle = {
  subtitle: {
    textAlign: 'center',
    color: 'blue'
  },
  btn: {
    marginTop: 15,
  }

}


/* <Card>
    <CardItem header>
      <Text>NativeBase</Text>
    </CardItem>
    <CardItem>
      <Body>
        <Text>
          TAB ONE
        </Text>
      </Body>
    </CardItem>

 </Card>*/