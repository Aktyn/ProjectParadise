import * as React from 'react';
import Header from "./header";
import Footer from "./footer";

import '../styles/layout.scss';

const Sun = (props: {seed: number, sun_index: number, scale: number}) => {
	const filter_name = `displacementFilter${props.sun_index}`;
	return <svg viewBox="0 0 384 320" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="sun_grad" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" stopColor={'#fffa'} stopOpacity={0.8}/>
				<stop offset="100%" stopColor={'#FFCCBC'} stopOpacity={0.2}/>
			</linearGradient>
			<filter id={filter_name}>
				<feTurbulence type="turbulence" baseFrequency="0.01 0.08" seed={props.seed}
				              numOctaves="4" result="turbulence"/>
				<feDisplacementMap in="SourceGraphic" in2="turbulence" result='turbulence'
				                   scale={props.scale} xChannelSelector="R" yChannelSelector="G"/>
				<feGaussianBlur in='turbulence' stdDeviation="4"/>
			</filter>
		</defs>
		<circle cx="186" cy="160" r="128" fill={'url(#sun_grad)'}
		        filter={`url(#${filter_name})`}/>
	</svg>;
};

interface LayoutState {
	//darkness: number;
}

export default class Layout extends React.Component<any, LayoutState> {
	state: LayoutState = {
	
	};
	
	render() {
		return <><main className={'layout'} onScroll={e => {
			//let factor = (e.target as HTMLElement).scrollTop / 400;//where 400 is header height
			//console.log( factor );
			//this.setState({darkness: factor});
		}}>
			<header>
				<div className={'parallax-scrollfix'}>
					<div className={'background-parallax'} />
				</div>
				<div className={'gradient-fixed'} />
			</header>
			<div className={'header-content'}>
				<Header />
			</div>
			<div className={'sun-holder'}>
				<div className={'sun-parallax'}>
					<div className={'sun-halo'} /*style={{transform: 'scale(1.3)'}}*/ />
					<div className={'sun-halo'} /*style={{transform: 'scale(1.2)'}}*/ />
					<div className={'sun-halo'} /*style={{transform: 'scale(1.1)'}}*/ />
					<div className={'sun'}>
						{/*<div className={'dark-sun'} style={{opacity: this.state.darkness}} />*/}
					</div>
				</div>
				<div className={'sun-shine-bottom'} />
			</div>
			<div className={'wave-container'}>
				<div className={'wave'}/>
				<div className={'wave'}/>
				<div className={'sun-reflection'}>
					<Sun seed={3} sun_index={1} scale={30}/>
					<Sun seed={400} sun_index={2} scale={60}/>
				</div>
			</div>
			<main>
				{/*<div className={'sun-shine-bottom'} />*/}
				<div className={'page'}>
					<div>
						{this.props.children}
					</div>
				</div>
			</main>
			<Footer />
		</main>
		<div className={'night-fader'} />
		</>;
	}
}