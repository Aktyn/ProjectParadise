import * as React from 'react';
const { MorphReplace } = require('react-svg-morph');

import '../styles/cloud_btn.scss';

class CloudShape extends React.Component<any, any> {
    render() {
        return <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
	        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>;
    }
}

class RoundedRectShape extends React.Component {
    render() {
        return (
            <svg width="24" height="24" fill="#f55" viewBox="0 0 24 24">
                <path d="M 22.909091,5 H 1.090909 C 0.488416,5 0,5.522335 0,6.166662 V 17.833337 C 0,18.477664 0.488416,19 1.090909,19 H 22.909091 C 23.511583,19 24,18.477664 24,17.833337 V 6.166662 C 24,5.522335 23.511583,5 22.909091,5 Z" />
            </svg>
        );
    }
}

const enum SHAPE {
	CLOUD,
	RECT
}

interface CloudBtnState {
	shape: SHAPE;
}

interface CloudBtnProps {
	width: number;
	height: number;
	content: string;
}

export default class CloudBtn extends React.Component<CloudBtnProps, CloudBtnState> {
	
	static defaultProps: Partial<CloudBtnProps> = {
	
	};
	
	state: CloudBtnState = {
		shape: SHAPE.CLOUD
	};
	
	private renderShape() {
		switch(this.state.shape) {
			case SHAPE.CLOUD:
				return <CloudShape />;
			case SHAPE.RECT:
				return <RoundedRectShape key="checkbox" />;
		}
	}
	
	render() {
		return <div className={'cloud-btn'}
		            onMouseEnter={() => this.setState({shape: SHAPE.RECT})}
					onMouseLeave={() => this.setState({shape: SHAPE.CLOUD})}
					style={{
						width: `${this.props.width}px`,
						height: `${this.props.height}px`,
					}}>
			<MorphReplace width={this.props.width} height={this.props.height} rotation={'none'}
			              duration={200} easing={(t: number) => t*t}>
				{this.renderShape()}
			</MorphReplace>
			<span className={'content'}>{this.props.content}</span>
		</div>;
	}
}