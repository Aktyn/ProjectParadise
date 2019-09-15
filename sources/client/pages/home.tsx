import * as React from 'react';
import {Link} from 'react-router-dom';
import {onceHasInstantInviteLink} from "../discord_info";
// import CloudBtn from "../components/cloud_btn";

import '../styles/home.scss';

const ShinyLink = (props: {content: string, href: string, target?: string, separate_page?: boolean}) => {
	let inside = <>
		<span>{props.content}</span>
		<div className={'left'} />
		<div className={'right'} />
		<div className={'top'} />
		<div className={'bottom'} />
	</>;
	if(props.separate_page)
		return <a href={props.href} target={props.target || '_self'}>
			{inside}
		</a>;
	else
		return <Link to={props.href}>{inside}</Link>;
};

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
				<ShinyLink content={'FORUM'} href={'/forum'} separate_page={true} />
				{this.state.discord_invitation_link &&
					<ShinyLink content={'DISCORD'} href={this.state.discord_invitation_link} target={'_blank'}
						separate_page={true} />
				}
				<ShinyLink content={'REGULAMIN'} href={'/regulamin'} />
				<ShinyLink content={'KLAWISZOLOGIA'} href={'/klawiszologia'} />
			</section>
		</div>;
	}
}