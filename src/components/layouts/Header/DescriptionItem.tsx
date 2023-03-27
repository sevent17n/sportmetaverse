import { FC } from 'react';
import styles from './Header.module.scss';

interface DescriptionItemProps {
	title: string;
	subtitle: string;
}

const DescriptionItem: FC<DescriptionItemProps> = ({ title, subtitle }) => {
	return (
		<div className={styles['description-item']}>
			<h3 className={'mb-1'}>{title}</h3>
			<p>{subtitle}</p>
		</div>
	);
};

export default DescriptionItem;
