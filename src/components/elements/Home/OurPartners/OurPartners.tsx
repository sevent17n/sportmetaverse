import styles from './OurPartners.module.scss';
import SectionWrapper from '../../../containers/SectionWrapper';
import { ourPartnersData } from './OurPartners.data';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';

const OurPartners = () => {
	return (
		<SectionWrapper className={classNames(styles['our-partners'], 'pb-0')}>
			<h1 className={'text-center'}>our partners</h1>

			<div className={styles.partners}>
				{ourPartnersData.length > 0 &&
					ourPartnersData.map(item => {
						return (
							<a
								key={uuid()}
								href={item.link}
								className={styles['partners-item']}
							>
								<img src={item.img} alt={item.name} />
							</a>
						);
					})}
			</div>
		</SectionWrapper>
	);
};

export default OurPartners;
