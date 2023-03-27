import styles from './MetaVerse.module.scss';
import SectionWrapper from '../../../containers/SectionWrapper';
import bgBlurPurple from '../../../../assets/images/bg-blur/MetaVerse-blur__purple.svg';
import bgBlurPink from '../../../../assets/images/bg-blur/MetaVerse-blur__pink.svg';
import classNames from 'classnames';
import MetaVerseCard from './MetaVerseCard';
import { metaVerseData } from './MetaVerse.data';
import { v4 as uuid } from 'uuid';

const MetaVerse = () => {
	return (
		<SectionWrapper className={'pt-0'}>
			<div className={styles.box}>
				<a className={classNames(styles.link, styles['m-none'])} href='/'>
					Explore more
				</a>

				<div className={styles['box__cards-wrapper']}>
					{metaVerseData.length > 0 &&
						metaVerseData.map(card => {
							return (
								<MetaVerseCard
									key={uuid()}
									img={card.img}
									title={card.title}
									description={card.description}
								/>
							);
						})}
				</div>
			</div>

			<img
				className={classNames(styles['bg-blur__purple'], 'position-absolute')}
				src={bgBlurPurple}
				alt='blur'
			/>

			<img
				className={classNames(styles['bg-blur__pink'], 'position-absolute')}
				src={bgBlurPink}
				alt='blur'
			/>
		</SectionWrapper>
	);
};

export default MetaVerse;
