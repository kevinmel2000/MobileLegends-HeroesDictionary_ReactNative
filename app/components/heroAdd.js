import React, { Component } from 'react';
import { Container, Content, Text, Header, Left, Button, Icon, Body, Right, Title, Form, Item, Label, Input} from 'native-base';
import axios from 'axios';

export default class heroAdd extends Component {

	constructor(){
		super();
		this.state = {
			name: "",
			title: "",
			role: "",
			speciality: "",
			imageUri: "",
			isValid: false
		}
	}

	handleDone() {
		//alert(JSON.stringify(this.state))

		const self = this;
		axios({
			method: 'post',
			url: 'http://rest.learncode.academy/api/rachmadkurniawan/heroes',
			data: this.state
		}).then(()=> {
			self.props.navigation.goBack();
		});
	}

	_checkIsValid() {
		const self = this;
		setTimeout(()=>{
			const {name, title, role, speciality, imageUri} = this.state;
			if(name != "" && title != "" && role != "" && speciality != "" && imageUri != ""){
				this.setState({isValid: true});
			}else{
				this.setState({isValid: false});
			}
		}, 1000)
	}

	renderHeader() {
		const {isValid} = this.state;

		return (
			<Header>
				<Left>
					<Button transparent
						onPress={() => this.props.navigation.goBack()}
					>
						<Icon name="arrow-back" style={{color:"white"}} />
					</Button>
				</Left>
				<Body>
					<Text style={{color:"white", fontSize:16}}>New Hero</Text>
				</Body>
				<Right>
					{
						isValid?
						(
							<Button transparent
								onPress={() => this.handleDone()}
							>
								<Text style={{color:"white", fontSize:14}}>Done</Text>
							</Button>
						):
						(
							<Button transparent>
								<Text style={{color:"gray", fontSize:14}}>Done</Text>
							</Button>
						)
					}
				</Right>
			</Header>
		)
	}

	render() {
		return (
			<Container>
				{this.renderHeader()}
				<Content>
					<Form>
						<Item floatingLabel>
							<Label>Name</Label>
							<Input onChangeText= {(text) => {
								this.setState({name: text});
								this._checkIsValid();
							}}/>
						</Item>
						<Item floatingLabel>
							<Label>Image Uri</Label>
							<Input onChangeText= {(text) => {
								this.setState({imageUri: text});
								this._checkIsValid();
							}}/>
						</Item>
						<Item floatingLabel>
							<Label>Title</Label>
							<Input onChangeText= {(text) => {
								this.setState({title: text});
								this._checkIsValid();
							}}/>
						</Item>
						<Item floatingLabel>
							<Label>Role</Label>
							<Input onChangeText= {(text) => {
								this.setState({role: text});
								this._checkIsValid();
							}}/>
						</Item>
						<Item floatingLabel>
							<Label>Speciality</Label>
							<Input onChangeText= {(text) => {
								this.setState({speciality: text});
								this._checkIsValid();
							}}/>
						</Item>
					</Form>
				</Content>
			</Container>
		)
	}
}