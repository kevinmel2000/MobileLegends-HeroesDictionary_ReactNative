import React, { Component } from 'react';
import { TabNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, Header, FooterTab } from "native-base";
import Tab1Screen from './tabOne';
import Tab2Screen from './components/heroRouter';
import Tab3Screen from './tabThree';

export default ( MainScreenNavigator = TabNavigator(
	{
		Tab1: { screen: Tab1Screen },
		Tab2: { screen: Tab2Screen },
		Tab3: { screen: Tab3Screen },
	},
	{
	    tabBarPosition: "top",
	    tabBarComponent: props => {
	      return (
	        <Footer>
	          <FooterTab>
	            <Button
	              vertical
	              active={props.navigationState.index === 0}
	              onPress={() => props.navigation.navigate("Tab1")}>
	              <Text style={{fontSize:14}}>Home</Text>
	            </Button>
	            <Button
	              vertical
	              active={props.navigationState.index === 1}
	              onPress={() => props.navigation.navigate("Tab2")}>
	              <Text style={{fontSize:14}}>Heroes</Text>
	            </Button>
	            <Button
	              vertical
	              active={props.navigationState.index === 2}
	              onPress={() => props.navigation.navigate("Tab3")}>
	              <Text style={{fontSize:14}}>Setting</Text>
	            </Button>
	          </FooterTab>
	        </Footer>
	      );
	    }
	  }
 )
);