import styles from './AboutGame.module.scss';
import SectionWrapper from '../../../containers/SectionWrapper';
import { Row, Col } from 'react-bootstrap';
import AboutGameItem from './AboutGameItem';
import bigLogo from '../../../../assets/images/logo/Logo-big.svg';
import bgBlur from '../../../../assets/images/bg-blur/AboutGame-blur__purple.svg';
import { aboutGameData } from './AboutGame.data';
import { v4 as uuid } from 'uuid';
import LearnMore from '../../../UI/LearnMore/LearnMore';
import classNames from 'classnames';

const AboutGame = () => {
	return (
		<SectionWrapper className={styles['about-game']}>
			<h1 className={'text-center'}>about game</h1>

			<Row className={'justify-content-center'}>
				<Col className={'col-5 col-lg-5 d-none d-sm-block'}>
					<img src={bigLogo} alt='Sportmetaverse logo' />
				</Col>
				<Col className={'col-12 col-sm-7 col-lg-5 text-end'}>
					<div className={styles['about-game__items']}>
						{aboutGameData.length > 0 &&
							aboutGameData.map(item => {
								return (
									<AboutGameItem
										key={uuid()}
										title={item.title}
										description={item.description}
									/>
								);
							})}
					</div>

					<LearnMore />
				</Col>
			</Row>

			<img
				src={bgBlur}
				alt='blur'
				className={classNames(styles['bg-blur'], 'position-absolute')}
			/>
		</SectionWrapper>
	);
};

export default AboutGame;
