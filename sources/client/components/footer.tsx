import * as React from 'react';
import '../styles/footer.scss';
import {trimString} from "../utils";
import {DiscordMember, offDiscordMembersUpdate, onDiscordMembersUpdate} from "../discord_info";

const github_link = 'https://github.com/Aktyn';

interface FooterState {
	author_info: boolean;
	members: DiscordMember[];
}

export default class Footer extends React.Component<any, FooterState> {
	private updateMembers = (members: DiscordMember[]) => this.setState({members});
	
	state: FooterState = {
		author_info: false,
		members: []
	};
	
	componentDidMount() {
		onDiscordMembersUpdate(this.updateMembers);
	}
	componentWillUnmount() {
		offDiscordMembersUpdate(this.updateMembers);
	}
	
	private static renderAuthorInfo() {
		return <div className={'author-info'}>
			<h3>Aktyn</h3>
			<table style={{textAlign: 'left'}}><tbody>
				<tr><td>GitHub:</td><td><a href={github_link} target={'_blank'}>{github_link}</a></td></tr>
				<tr><td>Discord:</td><td><b>Aktyn#9473</b></td></tr>
			</tbody></table>
		</div>;
	}
	
	private renderDiscordWidget() {
		return <div className={'discord-widget'}>
			<h3>Użytkownicy online ({this.state.members.length})</h3>
			<div className={'users-list'}>
				<table><tbody>{this.state.members.map(member => {
					return <tr key={member.id}>
						<td><img src={member.avatar_url+'?size=32'} alt={'Avatar'} /></td>
						<td>{trimString(member.username, 25)}</td>
						<td>{member.game && trimString(member.game.name, 40)}</td>
					</tr>;
				})}</tbody></table>
			</div>
		</div>;
	}
	
	render() {
		return <footer>
			<div style={{
				height: '15px',
				backgroundColor: '#283593'
			}} />
			<section className={'footer-content'}>
				<div className={'moon-widget'}>
					{this.state.author_info ?
						Footer.renderAuthorInfo() :
						<button className={'moon'} data-text={'O AUTORZE'} onClick={() => {
							this.setState({author_info: !this.state.author_info});
						}} />
					}
				</div>
				{this.renderDiscordWidget()}
				<div className={'copyright'}>Copyright © 2019 - 2020 - Aktyn</div>
			</section>
		</footer>;
	}
}