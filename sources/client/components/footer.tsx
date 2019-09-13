import * as React from 'react';
import '../styles/footer.scss';
import Config from "../../common/config";
import {trimString} from "../utils";

const github_link = 'https://github.com/Aktyn';

interface DiscordMember {
	avatar_url: string;
	discriminator: string;
	game?: {name: string};
	id: string;
	status: string;//"online"
	username: string;
}

interface FooterState {
	author_info: boolean;
	members: DiscordMember[];
	instant_ivnite?: string;
}

export default class Footer extends React.Component<any, FooterState> {
	
	state: FooterState = {
		author_info: false,
		members: []
	};
	
	componentDidMount() {
		this.refreshUsersList();
	}
	
	private refreshUsersList() {
		fetch(`https://discordapp.com/api/guilds/${Config.DISCORD_GUILD_ID}/widget.json`, {
			method: 'GET',
			mode: 'cors',
			headers: {"Content-Type": "application/json; charset=utf-8"},
			cache: 'reload'
		}).then(res => res.json()).then((res: {members: DiscordMember[]; instant_invite: string}) => {
			console.log(res);
			this.setState({
				members: res.members,
				instant_ivnite: res.instant_invite
			});
			setTimeout(() => this.refreshUsersList(), 1000*60);//update every minute
		}).catch(console.error);
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
			<h3>Użytkownicy online</h3>
			<div className={'users-list'}>
				<table><tbody>{this.state.members.map(member => {
					return <tr key={member.id}>
						<td><img src={member.avatar_url+'?size=32'} alt={'Avatar'} /></td>
						<td>{trimString(member.username, 25)}</td>
						<td>{member.game && member.game.name}</td>
					</tr>;
				})}</tbody></table>
			</div>
		</div>;
	}
	
	render() {
		return <footer>
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
		</footer>;
	}
}