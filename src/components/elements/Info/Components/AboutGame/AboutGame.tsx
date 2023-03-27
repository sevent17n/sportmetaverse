import React from 'react';
import SectionWrapper from '../../../../containers/SectionWrapper';

import styles from './AboutGame.module.scss';
import messi from '../../../../../assets/images/info/messi.png';
import pinkBlur from '../../../../../assets/images/info/pinkBlur.png';
import lightPinkBlur from '../../../../../assets/images/info/pinkBlur.svg';
import { useMobile } from '../../../../../core/hooks/useMobile';
const AboutGame = () => {
	const { isMobile, isTablet } = useMobile();
	return (
		<SectionWrapper className={styles.aboutGame_container}>
			<h1>About Game</h1>
			<div className={styles.stripes}>
				<div>
					<h3>
						NOTE: The following game play is subject to change. Not all elements
						are final yet. are subject to change during the beta.
					</h3>
				</div>
				<div>
					<h3>
						Sell and trade received and winning cards other collectable/crafted
						NFT items on Sportmetaverse marketplace.
					</h3>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.messi}>
					<div>
						<p className={styles.messi_heading}>What is sportmetaverse?</p>
						<div className={styles.text}>
							<p>
								Sportmetaverse is an evolution of the classic. Real-time
								multiplayer game, utilising blockchain technology, giving you
								true realism, ownership and total control.
								<br />
								<br />
								Only a limited number of clubs are available to manage in one
								exclusive game world, “The Elite Championship”.
								<br />
								<br />
								All the clubs are owned by shareholders (other players) who
								appoint their managers. This allows the game to be played by the
								thousands.
							</p>
						</div>
					</div>
					<img src={messi} alt={''} />
				</div>
			</div>
			<img
				src={isTablet ? lightPinkBlur : pinkBlur}
				alt={''}
				className={styles.blur}
			/>
		</SectionWrapper>
	);
};

export default AboutGame;
