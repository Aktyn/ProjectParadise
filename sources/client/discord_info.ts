// const EventEmitter = require('events');
import * as EventEmitter from 'events';

const DISCORD_GUILD_ID = '553291364406919188';

export interface DiscordMember {
	avatar_url: string;
	discriminator: string;
	game?: {name: string};
	id: string;
	status: string;//"online"
	username: string;
}

let instant_invite: string | undefined;

let emitter = new EventEmitter();

function refreshInfo() {
	fetch(`https://discordapp.com/api/guilds/${DISCORD_GUILD_ID}/widget.json`, {
		method: 'GET',
		mode: 'cors',
		headers: {"Content-Type": "application/json; charset=utf-8"},
		cache: 'reload'
	}).then(res => res.json()).then((res: { members: DiscordMember[]; instant_invite: string }) => {
		//console.log(res);
		instant_invite = res.instant_invite;
		emitter.emit('has_instant_invite', instant_invite);
		emitter.emit('members_update', res.members);
		setTimeout(() => refreshInfo(), 1000 * 60);//update every minute
	}).catch(console.error);
}

refreshInfo();

export function onDiscordMembersUpdate(listener: (members: DiscordMember[]) => void) {
	emitter.on('members_update', listener);
}

export function offDiscordMembersUpdate(listener: (members: DiscordMember[]) => void) {
	emitter.off('members_update', listener);
}

export function onceHasInstantInviteLink(callback: (link: string) => void) {
	if(instant_invite !== undefined)
		callback(instant_invite);
	else
		emitter.once('has_instant_invite', callback);
}