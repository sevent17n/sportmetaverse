import React, { FC } from 'react';
import styles from './CardItem.module.scss';
import classNames from 'classnames';
import border from '../../../../../../assets/images/info/border.png';

interface ICard {
	leftTop?: boolean;
	leftBottom?: boolean;
	middleMiddle?: boolean;
	middleRight?: boolean;
	middleBottom?: boolean;
	rightTop?: boolean;
	rightBottom?: boolean;
	text: string;
	left?: boolean;
}

const CardItem: FC<ICard> = ({
	rightTop,
	leftTop,
	leftBottom,
	middleMiddle,
	middleRight,
	middleBottom,
	rightBottom,
	text,
	left
}) => {
	return (
		<>
			<div
				className={classNames(styles.card, {
					[styles.leftTop]: leftTop,
					[styles.leftBottom]: leftBottom,
					[styles.middleMiddle]: middleMiddle,
					[styles.middleRight]: middleRight,
					[styles.middleBottom]: middleBottom,
					[styles.rightTop]: rightTop,
					[styles.rightBottom]: rightBottom
				})}
			>
				<p>{text}</p>
				<div>
					<img
						alt={''}
						className={classNames(styles.border, {
							[styles.positionLeft]: left
						})}
						src={border}
					/>
				</div>
			</div>
		</>
	);
};

export default CardItem;
