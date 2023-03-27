import React, { FC, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './MetaVerse.module.scss';
import gradientBorder from '../../../../assets/images/secton-img/meta-verse/gradiend-border.png';
import gradientCard from '../../../../assets/images/secton-img/meta-verse/bgCard.png';
import useClickOutside from '../../../../core/hooks/useClickOutside';

interface MetaVerseCardProps {
	img: string;
	title?: string;
	description?: string;
}

const MetaVerseCard: FC<MetaVerseCardProps> = ({ img, title, description }) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const ref = useRef<HTMLDivElement>(null);

	useClickOutside(ref, () => {
		if (isActive) {
			setIsActive(false);
			console.log(3);
		}
	});

	const showModal = () => {
		setIsActive(true);
	};

	return (
		<>
			<div ref={ref} onClick={showModal} className={styles['card']}>
				<div className={styles['card__img-wrapper']}>
					<img src={img} alt={title} />
				</div>
				<h4>{title}</h4>
				<img
					className={classNames(
						styles['card__gradient-border'],
						'position-absolute'
					)}
					src={gradientBorder}
					alt='gradient border'
				/>
			</div>

			{isActive && (
				<div
					onClick={event => event.stopPropagation()}
					style={{ background: `url(${gradientCard})` }}
					className={classNames(
						styles['modal-card'],
						isActive && styles.active
					)}
				>
					<p>{description}</p>
				</div>
			)}
		</>
	);
};

export default MetaVerseCard;
