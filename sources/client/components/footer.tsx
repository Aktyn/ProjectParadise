import * as React from 'react';
import '../styles/footer.scss';
import {trimString} from "../utils";
import {DiscordMember, offDiscordMembersUpdate, onDiscordMembersUpdate} from "../discord_info";
import Config from "../../common/config";

const github_link = 'https://github.com/Aktyn';

interface PlayerSchema {
	endpoint: string;
	id: number;
	identifiers: string[];
	name: string;
	ping: number;
}

interface FooterState {
	author_info: boolean;
	members: DiscordMember[];
	online_players: PlayerSchema[];
	open_players_list: boolean;
}

export default class Footer extends React.Component<any, FooterState> {
	private updateMembers = (members: DiscordMember[]) => this.setState({members});
	
	state: FooterState = {
		author_info: false,
		members: [],
		online_players: [],
		open_players_list: false
	};
	
	componentDidMount() {
		onDiscordMembersUpdate(this.updateMembers);
		this.loadOnlinePlayers();
	}
	componentWillUnmount() {
		offDiscordMembersUpdate(this.updateMembers);
	}
	
	private loadOnlinePlayers() {
		fetch(`https://cors-anywhere.herokuapp.com/${Config.FIVEM_URL}/players.json`, {
			method: 'GET',
			mode: 'cors',
			headers: {"Content-Type": "application/json; charset=utf-8"},
			cache: 'reload'
		}).then(res => res.json()).then((res: PlayerSchema[]) => {
			this.setState({online_players: res});
			
			/*res = JSON.parse('[{"endpoint":"127.0.0.1","id":1,"identifiers":["steam:11000010d695d4e","license:d3fa8fbd2026b2ad7429be7df1ede2c7eaf118d0","discord:463821661637050389"],"name":"Magnum44","ping":70}]');
			this.setState({
				online_players: [...res, ...res, ...res, ...res, ...res, ...res, ...res, ]
			});*/
		}).catch(console.error);
		
		setTimeout(() => this.loadOnlinePlayers(), 1000*60);//update every minute
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
		let online_count = this.state.online_players.length;
		return <footer>
			<div className={'footer-top'}>
				<div className={'online-info'}>{online_count === 0 ? <span>Brak graczy na serwerze</span> :
					<span>Na serwerze {online_count === 1 ? 'gra aktualnie jedna osoba.' : <>
						{online_count < 5 ?
							<>grają aktualnie {online_count} osoby.</> : <>gra aktualnie {online_count} osób.</>}
					</>}</span>
				}
					{online_count > 0 && <button className={`show-list-btn${
						this.state.open_players_list ? ' close' : ''}`} onClick={() =>
					{
						this.setState({open_players_list: !this.state.open_players_list})
					}}/>}
					<div className={'online-list'} style={{
						height: this.state.open_players_list ?
							`${15*(1+Math.min(10, this.state.online_players.length))}px` : '0px'
					}}><div className={'scroll-area'}>
						<table><tbody>{this.state.online_players.map(player => {
							return <tr key={player.id}>
								<td>{player.name}</td>
							</tr>;
						})}</tbody></table>
					</div></div>
				</div>
			</div>
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