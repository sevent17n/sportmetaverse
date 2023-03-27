import styles from './Logo.module.scss';
import { FC } from 'react';
import classNames from 'classnames';

const Logo: FC<{ className?: string }> = ({ className }) => {
	return (
		<a className={classNames(styles['logo'], className)} href='/'>
			<svg
				width='197'
				height='269'
				viewBox='0 0 197 269'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clipPath='url(#clip0_90_220)'>
					<path
						d='M162.391 154.328L0 57.599L8.27016 46.5085C11.915 41.6565 45.3397 -0.977698 100.722 0.0171358C139.057 0.703104 165.943 21.749 175.72 30.7672C184.193 38.6011 191.37 47.6577 196.996 57.6169L184.26 64.4156C181.645 65.8254 178.589 66.2593 175.668 65.6355C172.747 65.0118 170.161 63.3735 168.397 61.0288C165.233 56.7499 161.662 52.7697 157.729 49.1411C150.169 42.1629 129.422 25.8792 100.241 25.3585C71.4638 24.8413 50.2685 40.0834 38.8161 50.9907L153.795 119.469C156.718 121.21 159.259 123.493 161.272 126.187C163.286 128.881 164.733 131.934 165.532 135.17C166.33 138.407 166.463 141.765 165.924 145.052C165.386 148.339 164.185 151.491 162.391 154.328Z'
						fill='white'
					/>
					<path
						d='M34.6052 114.672L196.996 211.4L188.726 222.491C185.082 227.343 151.657 269.977 96.2744 268.982C57.9393 268.296 31.0529 247.25 21.2767 238.232C12.8032 230.398 5.62645 221.342 0 211.382L12.7512 204.559C15.3625 203.151 18.414 202.717 21.3314 203.34C24.2488 203.963 26.831 205.6 28.5922 207.942C31.757 212.225 35.3313 216.209 39.2676 219.84C46.8273 226.818 67.5748 243.102 96.7554 243.623C125.533 244.14 146.728 228.898 158.18 217.991L43.201 149.53C40.2784 147.789 37.7377 145.507 35.724 142.813C33.7103 140.119 32.263 137.066 31.4648 133.829C30.6666 130.592 30.5331 127.234 31.072 123.947C31.6108 120.66 32.8114 117.508 34.6052 114.672Z'
						fill='white'
					/>
				</g>
				<defs>
					<clipPath id='clip0_90_220'>
						<rect width='197' height='269' fill='white' />
					</clipPath>
				</defs>
			</svg>
		</a>
	);
};

export default Logo;
