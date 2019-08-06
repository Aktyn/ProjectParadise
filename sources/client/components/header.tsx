import * as React from 'react';

import '../styles/header.scss';

export default class Header extends React.Component<any, any> {
	
	render() {
		return <div className={'header'}>
			<h1>
				<span><span data-text="Project">Project</span></span>
				<span><span data-text="Paradise">Paradise</span></span>
			</h1>
		</div>;
	}
}