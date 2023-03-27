import styles from './Video.module.scss';
import { Col, Row } from 'react-bootstrap';
import video from './Video.png';
import { useMobile } from '../../../../../core/hooks/useMobile';

const Video = () => {
	const { isMobile } = useMobile();
	// const [pause, setPause] = useState(false);
	// const [isHidden, setIsHidden] = useState(false);
	// const videoRef = useRef<HTMLVideoElement>(null);
	// const handlePlay = (): void => {
	// 	pause ? videoRef.current?.pause() : videoRef.current?.play();
	// 	setPause(prev => !prev);
	// };
	// useEffect(() => {
	// 	setIsHidden(prev => !prev);
	// }, [pause]);

	return (
		<div className={styles.video__container}>
			<img src={video} alt='' />
			{/*<video src={video} ref={videoRef} loop={true} />*/}
			{/*<button*/}
			{/*	onClick={handlePlay}*/}
			{/*	className={classNames({*/}
			{/*		[styles.hidden]: isHidden*/}
			{/*	})}*/}
			{/*>*/}
			{/*	<div>*/}
			{/*		<div*/}
			{/*			className={classNames({*/}
			{/*				[styles.play]: !pause*/}
			{/*				// [styles.pause]: pause*/}
			{/*			})}*/}
			{/*		></div>*/}
			{/*	</div>*/}
			{/*</button>*/}
			{!isMobile && (
				<Row>
					<Col className={'col-6'}></Col>
					<Col className={'col-6'}>
						<h3>SPORTMETAVERSE</h3>
						<p>decouples the anchor that keeps games merely digital.</p>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default Video;
