import * as React from 'react';
import {onceHasInstantInviteLink} from "../discord_info";
// import CloudBtn from "../components/cloud_btn";

import '../styles/home.scss';

interface HomeState {
	discord_invitation_link?: string;
}

export default class Home extends React.Component<any, HomeState> {
	
	state: HomeState = {};
	
	componentDidMount() {
		onceHasInstantInviteLink(link => this.setState({discord_invitation_link: link}));
	}
	
	render() {
		return <div className={'home'}>
			{/*<CloudBtn width={256} height={256} content={'DISCORD'} />*/}
			<section className={'links'}>
				{this.state.discord_invitation_link &&
					<a href={this.state.discord_invitation_link} target={'_blank'}>
						<div className={'water-text'} data-text={'DISCORD'}>DISCORD</div>
					</a>
				}
			</section>
		</div>;
	}
}