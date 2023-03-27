import styles from './Header.module.scss';
import { Container, Col, Row } from 'react-bootstrap';
import classNames from 'classnames';
import bgBlurRed from '../../../assets/images/bg-blur/header-blur__red.svg';
import bgBlurYellow from '../../../assets/images/bg-blur/header-blur__yellow.svg';
import bgBlurBlue from '../../../assets/images/bg-blur/header-blur__blue.svg';
import bgAi from '../../../assets/images/bg-ai/bg-ai__header.png';
import basketballFocus from '../../../assets/images/header-images/basketball/basketballFocus.png';
import basketballBlur from '../../../assets/images/header-images/basketball/basketballBlur.png';
import footballFocus from '../../../assets/images/header-images/football/footballFocus.png';
import footballBlur from '../../../assets/images/header-images/football/footballBlur.png';
import hockeyFocus from '../../../assets/images/header-images/hockey/hockeyFocus.png';
import hockeyBlur from '../../../assets/images/header-images/hockey/hockeyBlur.png';
import { headerData } from './Header.data';
import DescriptionItem from './DescriptionItem';
import { v4 as uuid } from 'uuid';
import LearnMore from '../../UI/LearnMore/LearnMore';
import { useEffect, useState } from 'react';

const Header = () => {
	const [indexImg, setIndexImg] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndexImg(prevCount => {
				if (prevCount >= 3) {
					return 1;
				} else {
					return prevCount + 1;
				}
			});
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<header className={styles.header}>
			<Container fluid={'xxl'}>
				<Row className={styles.main}>
					<Col
						className={
							'col-12 col-md-4 d-sm-flex justify-content-between d-md-block'
						}
					>
						<h1 className={classNames(styles.title, 'mb-3')}>
							SPORT
							<br />
							META
							<br />
							VERSE
						</h1>

						<div className={styles['wrap-cont']}>
							<p className={classNames(styles.subtitle, 'mb-5')}>
								Sportmetaverse is the first metaverse where you can manage your
								own club and generate income while you play
							</p>

							<LearnMore className={'mb-3'} />
						</div>
					</Col>

					<Col className={'col-12 col-md-8'}>
						<div className={styles.animation}>
							<div
								className={classNames(
									styles['animation-focus'],
									indexImg === 1 && styles.visible
								)}
							>
								<img
									className={classNames(styles['animation-img'])}
									src={basketballFocus}
									alt='Basketball Player'
									draggable={false}
								/>
							</div>

							<div
								className={classNames(
									styles['animation-focus'],
									indexImg === 2 && styles.visible
								)}
							>
								<img
									className={classNames(styles['animation-img'])}
									src={footballFocus}
									alt='Football Player'
									draggable={false}
								/>
							</div>

							<div
								className={classNames(
									styles['animation-focus'],
									indexImg === 3 && styles.visible
								)}
							>
								<img
									className={classNames(styles['animation-img'])}
									src={hockeyFocus}
									alt='Hockey Player'
									draggable={false}
								/>
							</div>

							<div
								className={classNames(
									styles['animation-blur'],
									indexImg === 1 && styles.visible
								)}
							>
								<img
									className={classNames(styles['animation-img'])}
									src={basketballBlur}
									alt='Basketball Player'
									draggable={false}
								/>
							</div>

							<div
								className={classNames(
									styles['animation-blur'],
									indexImg === 2 && styles.visible
								)}
							>
								<img
									className={classNames(styles['animation-img'])}
									src={footballBlur}
									alt='Football Player'
									draggable={false}
								/>
							</div>

							<div
								className={classNames(
									styles['animation-blur'],
									indexImg === 3 && styles.visible
								)}
							>
								<img
									className={classNames(styles['animation-img'])}
									src={hockeyBlur}
									alt='Hockey Player'
									draggable={false}
								/>
							</div>
						</div>
					</Col>
				</Row>

				<div className={styles.description}>
					{headerData.length > 0 &&
						headerData.map(item => {
							return (
								<DescriptionItem
									key={uuid()}
									title={item.title}
									subtitle={item.subtitle}
								/>
							);
						})}
				</div>
			</Container>

			<img
				className={classNames(
					styles['bg-blur'],
					indexImg === 1 && styles.visible,
					'position-absolute'
				)}
				src={bgBlurRed}
				alt='decor'
			/>

			<img
				className={classNames(
					styles['bg-blur'],
					indexImg === 2 && styles.visible,
					'position-absolute'
				)}
				src={bgBlurYellow}
				alt='decor'
			/>

			<img
				className={classNames(
					styles['bg-blur'],
					indexImg === 3 && styles.visible,
					'position-absolute'
				)}
				src={bgBlurBlue}
				alt='decor'
			/>

			<img
				className={classNames(styles['bg-ai'], 'position-absolute')}
				src={bgAi}
				alt='background AI'
			/>
		</header>
	);
};

export default Header;
