import styles from './RoadMap.module.scss';
import SectionWrapper from '../../../containers/SectionWrapper';
import iconOne from '../../../../assets/images/secton-img/roadmap/one.svg';
import iconTwo from '../../../../assets/images/secton-img/roadmap/two.svg';
import iconThree from '../../../../assets/images/secton-img/roadmap/three.svg';
import iconFour from '../../../../assets/images/secton-img/roadmap/four.svg';
import classNames from 'classnames';

const RoadMap = () => {
	return (
		<SectionWrapper className={styles.roadmap}>
			<h1 className={'text-center'}>Roadmap</h1>

			<div className={styles['roadmap-wrapper']}>
				<div
					className={classNames(
						styles['roadmap-item'],
						styles['roadmap-item--one'],
						'order-1'
					)}
				>
					<div
						className={classNames(styles['roadmap-item__img'], 'text-center')}
					>
						<img src={iconOne} alt='roadmap 1' />
					</div>

					<h2>1.01.2022 - 1.05.2022</h2>

					<ul className={styles['roadmap-item__list']}>
						<li>Company registration</li>
						<li>Marketing Campaign Start</li>
						<li>Project launch on PC & Mac - beta testing</li>
					</ul>
				</div>

				<div
					className={classNames(
						styles['roadmap-item'],
						styles['roadmap-item--two'],
						'order-2'
					)}
				>
					<div
						className={classNames(styles['roadmap-item__img'], 'text-center')}
					>
						<img src={iconTwo} alt='roadmap 1' />
					</div>

					<h2>1.05.2022 - September 2022</h2>

					<ul className={styles['roadmap-item__list']}>
						<li>Listing of the token on crypto exchanges</li>
						<li>Project launch on Xbox, Sony Playstation</li>
						<li>Gaming DeFi assets</li>
						<li>Buying sports equipment</li>
					</ul>
				</div>

				<div
					className={classNames(
						styles['roadmap-item'],
						styles['roadmap-item--four'],
						'order-4'
					)}
				>
					<div
						className={classNames(styles['roadmap-item__img'], 'text-center')}
					>
						<img src={iconFour} alt='roadmap 1' />
					</div>

					<h2>November - January 2023</h2>

					<ul className={styles['roadmap-item__list']}>
						<li>Start broadcasting matches</li>
						<li>Start of sales of tickets for matches</li>
						<li>Leasing stadiums</li>
						<li>Adding the ability to purchase land in the metaverse</li>
						<li>New game modules</li>
						<li>Buyback and burning of $SMTV through contracts</li>
					</ul>
				</div>

				<div
					className={classNames(
						styles['roadmap-item'],
						styles['roadmap-item--three'],
						'order-2'
					)}
				>
					<div
						className={classNames(styles['roadmap-item__img'], 'text-center')}
					>
						<img src={iconThree} alt='roadmap 1' />
					</div>

					<h2>September - November 2022</h2>

					<ul className={styles['roadmap-item__list']}>
						<li>Developing a game on VRTemplate Unreal Engine 5</li>
						<li>Creation of sports stadiums by players</li>
						<li>Separation of roles: Owner and Team Manager</li>
						<li>Decentralized Marketplace</li>
						<li>SMTV holders will be able to control the metaverse</li>
					</ul>
				</div>
			</div>
		</SectionWrapper>
	);
};

export default RoadMap;
