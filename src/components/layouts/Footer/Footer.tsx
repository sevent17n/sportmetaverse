import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../../UI/Logo/Logo';
import instagram from '../../../assets/images/icons/Inst.svg';
import telegram from '../../../assets/images/icons/Telegram.svg';
import facebook from '../../../assets/images/icons/Facebook.svg';
import twitter from '../../../assets/images/icons/Twitter.svg';
import styles from './Footer.module.scss';
import { useMobile } from '../../../core/hooks/useMobile';

const Footer = () => {
	const { isMobile } = useMobile();
	return (
		<footer className={styles.footer}>
			<div className={styles.border} />
			<Container fluid='xxl' className={styles.container}>
				<div className={styles.leftContainer}>
					<Logo className={styles.logo} />
					{!isMobile && (
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard.
						</p>
					)}
					<div className={styles.icons}>
						<a href={'/'}>
							<div>
								<img src={twitter} alt={'Twitter'} />
							</div>
						</a>

						<a href={'/'}>
							<div>
								<img src={telegram} alt={'Telegram'} />
							</div>
						</a>

						<a href={'/'}>
							<div>
								<img src={instagram} alt={'Instagram'} />
							</div>
						</a>

						<a href={'/'}>
							<div>
								<img src={facebook} alt={'Facebook'} />
							</div>
						</a>
					</div>
					<p>Copyright © 2023</p>
				</div>
				<div className={styles.rightContainer}>
					<div className={styles.links}>
						<a href={'/'}>About us</a>
						<a href={'/'}>Help</a>
						<a href={'/'}>Conditions</a>
						<a href={'/'}>Confidentiality</a>
					</div>
					<div className={`d-flex  flex-column gap-4   ${styles.news}`}>
						<p>join our newsletter!</p>
						<p>
							Your email is safe with us.
							<br /> We don’t spam.
						</p>
					</div>
					<div className={styles.container__input}>
						<input type='text' placeholder={'Enter email address...'} />
						<button>Join</button>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
