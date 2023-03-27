import React, { FC, useRef } from 'react';
import styles from './LearnMore.module.scss';

interface LearnMoreProps {
	className?: string;
}

const LearnMore: FC<LearnMoreProps> = ({ className }) => {
	const [coords, setCoords] = React.useState({ x: -1, y: -1 });
	const [isRippling, setIsRippling] = React.useState(false);
	const ref = useRef<any>(null);

	React.useEffect(() => {
		if (coords.x !== -1 && coords.y !== -1) {
			setIsRippling(true);
			setTimeout(() => setIsRippling(false), 300);
		} else setIsRippling(false);
	}, [coords]);

	React.useEffect(() => {
		if (!isRippling) setCoords({ x: -1, y: -1 });
	}, [isRippling]);

	return (
		<a
			ref={ref}
			className={styles['ripple-button']}
			onClick={(e: any) => {
				const rect = e.target.getBoundingClientRect();
				setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
			}}
		>
			{isRippling ? (
				<span
					className={styles['ripple']}
					style={{
						left: coords.x,
						top: coords.y
					}}
				/>
			) : (
				''
			)}
			<span className={styles['content']}>Learn More</span>
		</a>
	);
};

export default LearnMore;
