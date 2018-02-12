import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, Header, FooterTab } from "native-base";
import AddHero from './heroAdd';
import HeroView from '../HeroView';
import Tab2Screen from '../tabTwo';

export default ( MainScreenNavigator = StackNavigator(
	{
		Tab2: { screen: Tab2Screen },
		HeroAdd: { screen: AddHero },
		HeroView: { screen: HeroView },
	},
	{
		mode: "modal",
		headerMode: "none"
	}
 )
);