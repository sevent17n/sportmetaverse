import styles from './Navigation.module.scss';
import { Container } from 'react-bootstrap';
import Logo from '../../UI/Logo/Logo';
import { navigationData } from './Navigation.data';
import { INavigationData } from '../../../core/utils/types';
import { v4 as uuid } from 'uuid';

const Navigation = () => {
	return (
		<nav className={styles['navigation']}>
			<Container
				className={`d-flex justify-content-between align-items-center w-full`}
				fluid={'xxl'}
			>
				<Logo />

				<ul className={styles['list']}>
					{navigationData.length > 0 &&
						navigationData.map((link: INavigationData, index) => {
							return (
								<li key={uuid()}>
									<a href={link.path}>{link.title}</a>
								</li>
							);
						})}
				</ul>
			</Container>
		</nav>
	);
};

export default Navigation;
