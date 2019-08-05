import * as React from 'react';

import '../styles/layout.scss';

const Sun = (props: {seed: number, sun_index: number, scale: number}) => {
	const filter_name = `displacementFilter${props.sun_index}`;
	return <svg viewBox="0 0 384 320" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="sun_grad" x1="0%" y1="0%" x2="0%" y2="100%">
				<stop offset="0%" stopColor={'#fff'} stopOpacity={0.8}/>
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

export default class Layout extends React.Component<any, any> {
	
	render() {
		return <main className={'layout'}>
			<header>
				<div className={'background-parallax'} />
				<div className={'content'}>
					TODO: header content
				</div>
				<div className={'sun-holder'}>
					<div className={'sun'} />
					<div className={'sun-shine-bottom'} />
				</div>
			</header>
			<main>
				<div className={'page'}>
					<div className={'wave-container'}>
						<div className={'wave'} />
						<div className={'wave'} />
						<div className={'sun-reflection'}>
							<Sun seed={3} sun_index={1} scale={30} />
							<Sun seed={400} sun_index={2} scale={60} />
						</div>
					</div>
					<div>
						{this.props.children}
					</div>
				</div>
			</main>
			<footer>TODO: footer content</footer>
		</main>;
	}
}