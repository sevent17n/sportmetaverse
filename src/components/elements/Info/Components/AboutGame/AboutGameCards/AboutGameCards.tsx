import React from 'react';
import footballField from '../../../../../../assets/images/info/footbalField.png';
import vr from '../../../../../../assets/images/info/vr.png';
import bigLogo from '../../../../../../assets/images/logo/Logo-big.svg';
import styles from './AboutGameCards.module.scss';
import blur from '../../../../../../assets/images/info/cardBlur.svg';
import SectionWrapper from '../../../../../containers/SectionWrapper';
import { useMobile } from '../../../../../../core/hooks/useMobile';
const AboutGameCards = () => {
	const { isMobile } = useMobile();
	return (
		<SectionWrapper>
			<div className={styles.card}>
				<div className={styles.card_description}>
					<h1>ECONOMY GAME WORLD START</h1>
					<div>
						<p>
							The starting club balance is based on stadium size and division
							<br />
							<br />
							The transfer budget is set as 100% of the club’s balance
							<br />
							<br />
							Spectator attendance is in effect (although club promotion and
							demotion will increase/decrease attendance respectively)
							<br />
							<br />
							The total wage bill for a division determines the income for games
							in that division for all leagues and all clubs
						</p>
					</div>
				</div>
				<img
					src={footballField}
					alt={'Football Field'}
					className={styles.card_image}
				/>
				{!isMobile && (
					<img src={blur} className={styles.card_blur_economy} alt={''} />
				)}
			</div>
			<div className={styles.card}>
				<img
					src={vr}
					alt={'Virtual Reality Glasses'}
					className={styles.card_image}
				/>
				{!isMobile && (
					<img src={blur} className={styles.card_blur_vr} alt={''} />
				)}
				<div className={styles.card_description}>
					<h1>MAKING MONEY IN sportmetaverse</h1>
					<p>
						You can make money as an investor <br /> (shareholder) and as a
						worker (manager or agent).
						<br />
						<br />
						The in-game currency is $SMTV. You use this for everything in the
						game, but it doesn’t stop there. In a very real sense, you own your
						$SMTV. Nobody can take it away from you, not even the game
						developers.
					</p>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.card_description}>
					<h1>SPORTMETAVERSE COIN</h1>
					<p>
						SMTV will be used to make calculations within the ecosystem and make
						all possible types of game payments, including: advertising on
						T-shirts, advertising at virtual stadiums, buying stadiums with the
						ability to lease them to your own or someone else's team, paying for
						players' transfers, paying football agents, receiving salaries by
						players, paying bonuses to the team, at the SPORTMETAVERSE bookmaker
						when making bets and payouts, for NFT marketplace trading, including
						players' transfers
					</p>
				</div>
				<img src={bigLogo} alt='Logo' className={styles.card_image} />
				<img src={blur} className={styles.card_coin} alt={''} />
			</div>
		</SectionWrapper>
	);
};

export default AboutGameCards;
