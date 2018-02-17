import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Thumbnail, Body, H2} from 'native-base';

export default class HeroView extends Component {

	render() {
	    const { params } = this.props.navigation.state;
	    const detail = params ? params.detail : null;
	    return (
			<Container>
				<Content style={{backgroundColor:"white"}}>
					<H2 style={{margin:5}}>Detail Hero</H2>
					<List>
						<ListItem>
							<Thumbnail square size={80} source={{ uri: detail.imageUri}} />
							<Body>
								<Text>{detail.name}</Text>
								<Text note>{detail.title}</Text>
							</Body>
						</ListItem>

						<ListItem itemDivider>
							<Text>Role</Text>
						</ListItem>
						<ListItem>
							<Text>{detail.role}</Text>
						</ListItem>

						<ListItem itemDivider>
							<Text>Speciality</Text>
						</ListItem>
						<ListItem>
							<Text>{detail.speciality}</Text>
						</ListItem>

						<ListItem itemDivider>
							<Text>Skills</Text>
						</ListItem>
						<ListItem>
							<Text>...</Text>
						</ListItem>
					</List>
				</Content>
			</Container>
		)
	}
}