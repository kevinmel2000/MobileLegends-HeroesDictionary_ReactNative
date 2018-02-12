import React from 'react';
import {ListItem, Thumbnail, Body, Text} from 'native-base';

export default Heroes = (props) => (
  <ListItem 
    onPress={()=>props.navigation.navigate("HeroView", {name: props.hero.name})}
  >
    <Thumbnail 
      square 
      size={80} 
      source={{ uri: props.hero.imageUri }} 
    />
    <Body>
      <Text>{props.hero.name}</Text>
      <Text note>{props.hero.title}</Text>
    </Body>
  </ListItem>
)
