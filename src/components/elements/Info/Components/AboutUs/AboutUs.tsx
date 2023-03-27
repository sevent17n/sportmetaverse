import React from 'react';
import styles from './AboutUs.module.scss';
import redBlur from '../../../../../assets/images/bg-blur/header-blur__red.svg';
import { Container } from 'react-bootstrap';
const AboutUs = () => {
	return (
		<header>
			<Container fluid={'xxl'} className={`main-section ${styles.container}`}>
				<img src={redBlur} className={styles.redBlur} alt={''} />
				<h1>About us</h1>
				<p>
					Our vision for video games is a big one. We’re looking to
					fundamentally change how people perceive video games and how they play
					them.
					<br />
					<br />
					We see the blockchain as a transformational technology where games
					transcend the virtual and take on a life of their own in the real
					world.
					<br />
					<br />
					With no walled gardens, free markets and natural price discovery are
					underpinned by censorship resistance, trustless trading, and
					cryptographic security.
				</p>
			</Container>
		</header>
	);
};

export default AboutUs;
