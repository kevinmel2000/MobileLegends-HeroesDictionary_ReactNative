import React, { Component } from 'react';
import { StackNavigator } from "react-navigation";
import { Button, Text, Icon, Footer, Header, FooterTab } from "native-base";
import AddHero from './heroAdd';
import HeroDetail from '../HeroView';
import Tab2Screen from '../tabTwo';

export default ( MainScreenNavigator = StackNavigator(
	{
		Tab2: { screen: Tab2Screen },
		HeroAdd: { screen: AddHero },
		DetailHero: { screen: HeroDetail },
	},
	{
		mode: "modal",
		headerMode: "none"
	}
 )
);