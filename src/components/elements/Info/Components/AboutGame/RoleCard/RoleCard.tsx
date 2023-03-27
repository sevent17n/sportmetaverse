import React, { FC } from 'react';

import styles from './RoleCard.module.scss';
interface IRoleCard {
	img: string;
	heading: string;
	li1: string;
	li2: string;
	li3: string;
}

const RoleCard: FC<IRoleCard> = ({ img, heading, li1, li2, li3 }) => {
	return (
		<div className={styles.card}>
			<div className={styles.card_poster}>
				<img src={img} draggable={false} alt={img} />
			</div>
			<div className={styles.description}>
				<h1>{heading}</h1>
				<ul>
					<li>{li1}</li>
					<li>{li2}</li>
					<li>{li3}</li>
				</ul>
			</div>
		</div>
	);
};

export default RoleCard;
