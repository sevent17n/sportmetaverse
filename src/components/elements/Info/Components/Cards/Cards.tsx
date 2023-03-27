import React from 'react';
import CardItem from './CardItem/CardItem';
import styles from './CardItem/CardItem.module.scss';
import blur from '../../../../../assets/images/info/blur.png';
import mobileBlur from '../../../../../assets/images/info/bodyBlur.svg';
import SectionWrapper from '../../../../containers/SectionWrapper';
import { useMobile } from '../../../../../core/hooks/useMobile';
import classNames from 'classnames';

const Cards = () => {
	const { isMobile } = useMobile();
	return (
		<SectionWrapper className={styles.cards_container}>
			<h1>
				With sportmetavers
				<br /> games can be
			</h1>
			<CardItem text={'Serverless for 24/7 uptime'} leftTop />
			<CardItem
				text={'Provably fair and trustless with open source'}
				middleMiddle
			/>
			<CardItem text={'internal coin for ecosystem development'} rightTop />
			<CardItem
				text={'Economic power houses with free trading and free markets'}
				middleRight
			/>
			<CardItem
				text={'Innovative with new economies and game genres'}
				left
				leftBottom
			/>
			<CardItem
				text={'Community driven beyond anything we’ve seen so far'}
				middleBottom
			/>
			<CardItem
				text={'Eternal and immortal past their “end of life/support”'}
				rightBottom
			/>
			<img
				alt={''}
				src={isMobile ? mobileBlur : blur}
				className={classNames({
					[styles.mobileBlur]: isMobile
				})}
			/>
			<p>
				For developers, these end user benefits can make their games more
				attractive and stickier. By delivering new and better gaming
				experiences, developers can take advantage of the SPORTMETAVERSE
				platform to turbo charge their business with the best that blockchain
				has to offer.
			</p>
		</SectionWrapper>
	);
};

export default Cards;
