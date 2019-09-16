import * as React from 'react';
import {Link} from "react-router-dom";

import '../styles/container.scss'

interface ContainerProps {
	title?: string;
}

export default class Container extends React.Component<ContainerProps, any> {
	
	render() {
		return <div className={'container'}>
			<div className={'top-header'}>
				<span />{/*separator*/}
				<label>{this.props.title}</label>
				<Link className={'homebtn'} to={'/'} />
			</div>
			<div className={'top'} />
			<div className={'left'} />
			<div className={'right'} />
			<div className={'bottom-left'} />
			<div className={'bottom-right'} />
			{this.props.children}
		</div>
	}
}