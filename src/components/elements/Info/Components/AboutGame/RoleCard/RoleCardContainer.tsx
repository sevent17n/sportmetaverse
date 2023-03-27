import React from 'react';
import RoleCard from './RoleCard';
import pinkBlur from '../../../../../../assets/images/info/pinkBlur.png';
import manager from '../../../../../../assets/images/info/manager.png';
import shareholder from '../../../../../../assets/images/info/shareholder.png';
import agent from '../../../../../../assets/images/info/agent.png';
import styles from './RoleCard.module.scss';
import SectionWrapper from '../../../../../containers/SectionWrapper';
import { useMobile } from '../../../../../../core/hooks/useMobile';
const RoleCardContainer = () => {
	const { isMobile } = useMobile();
	return (
		<SectionWrapper className={styles.roleCard_container}>
			{isMobile && <img src={pinkBlur} className={styles.pinkBlur} alt={''} />}
			<div className={styles.heading}>
				<p>ROLES IN SOCCER MANAGER </p>
				<p>
					You can take any of 3 core roles in
					<br /> Sportmetaverse.
				</p>
			</div>
			<div className={styles.card_container}>
				<RoleCard
					img={manager}
					heading={'MANAGER'}
					li1={'Managers manage clubs as per normal Soccer Management games.'}
					li2={'Make sure your club is happy though or you could get “fired”.'}
					li3={
						'Set matchday tactics and buy/sell players on the transfer market.'
					}
				/>
				<RoleCard
					img={shareholder}
					heading={'SHAREHOLDERS'}
					li1={'Shareholders own shares in clubs and players.'}
					li2={'Receive dividends from your club’s profits.'}
					li3={'$SMTV can be purchased with Metaversesport marketplace.'}
				/>
				<RoleCard
					img={agent}
					heading={'AGENT'}
					li1={'Agents manage individual soccer players.'}
					li2={
						'An agent can put pressure on a club by controlling the player’s morale..'
					}
					li3={'Agents receive a percentage of the soccer player’s wages.'}
				/>
			</div>
		</SectionWrapper>
	);
};

export default RoleCardContainer;
