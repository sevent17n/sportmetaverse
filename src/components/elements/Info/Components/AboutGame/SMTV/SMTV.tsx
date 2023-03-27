import React from 'react';

import pc from '../../../../../../assets/images/info/pc.png';
import card from '../../../../../../assets/images/info/cards.png';
import gridBg from '../../../../../../assets/images/bg-ai/bg-ai__header.png';
import styles from '../AboutGameCards/AboutGameCards.module.scss';
import bigBlur from '../../../../../../assets/images/info/bigBodyBlur.svg';
import SectionWrapper from '../../../../../containers/SectionWrapper';
import { useMobile } from '../../../../../../core/hooks/useMobile';
const Smtv = () => {
	const { isMobile } = useMobile();
	return (
		<SectionWrapper className={styles.container}>
			<h1>SMTV token</h1>
			<div className={styles.card}>
				<img src={pc} alt={'SMTV Function'} className={styles.card_image} />
				{!isMobile && <img src={bigBlur} className={styles.bigBlur} alt={''} />}
				<div className={styles.card_description}>
					<h1>Main function</h1>
					<div>
						<p>
							The main function of $SMTV is the DAO Sportmetaverse Governance
							Token.
							<br />
							<br />
							Once the game is fully launched along with the DAO functionality,
							$SMTV owners will be able to vote on decisions in the game and
							receive rewards for their activity, as well as a share in the
							platform's profits.
							<br />
							<br />
							The profit of the Sportmetaverse platform is distributed among the
							holders of $SMTV governance tokens. The owners of these tokens
							also make decisions on the development of the ecosystem. Players
							can earn $SMTV by participating in the game or contributing to the
							ecosystem.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.card}>
				<div className={styles.card_description}>
					<div>
						<p>
							To speed up the progress of the player, it will be possible to buy
							special NFT cards to increase his attributes. Payments upon
							purchase will be made in SMTV.
							<br />
							<br />
							SMTV betting is one of the main ways to make money in the
							ecosystem. After staking SMTV, the player will receive synthetic
							SMTV ($SMTV)
						</p>
					</div>
				</div>
				<img src={card} alt={'NFT CARDS'} className={styles.card_image} />
			</div>
			<img className={styles.bgGrid} src={gridBg} alt={''} />
		</SectionWrapper>
	);
};

export default Smtv;
