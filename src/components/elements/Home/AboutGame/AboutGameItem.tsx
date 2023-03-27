import { FC, useRef, useState } from 'react';
import styles from './AboutGame.module.scss';
import plus from '../../../../assets/images/icons/plus.svg';
import classNames from 'classnames';
import useClickOutside from '../../../../core/hooks/useClickOutside';

interface AboutGameItemProps {
	title: string;
	description?: string;
}

const AboutGameItem: FC<AboutGameItemProps> = ({ title, description }) => {
	const [isShow, setIsShow] = useState<boolean>(false);
	const aboutGameRef = useRef<HTMLDivElement>(null);

	useClickOutside(aboutGameRef, () => setIsShow(false));
	const showInfo = () => {
		setIsShow(true);
	};

	return (
		<>
			<div ref={aboutGameRef} className={styles['about-game__item']}>
				<button onClick={showInfo}>
					<i>{title}</i>
					<img src={plus} alt='plus icon' />
				</button>
			</div>

			<div
				onClick={event => event.stopPropagation()}
				className={classNames(
					styles['about-game__item__info'],
					isShow && styles.visible
				)}
			>
				<p>{description}</p>
			</div>
		</>
	);
};

export default AboutGameItem;
