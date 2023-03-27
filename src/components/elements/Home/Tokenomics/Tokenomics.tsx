import styles from './Tokenomics.module.scss';
import SectionWrapper from '../../../containers/SectionWrapper';
import diagram from '../../../../assets/images/secton-img/tokenomics/schedule.svg';
import lineTeam from '../../../../assets/images/secton-img/tokenomics/lineTeam.svg';
import lineEarn from '../../../../assets/images/secton-img/tokenomics/lineEarn.png';
import lineMark from '../../../../assets/images/secton-img/tokenomics/lineMark.svg';
import lineNft from '../../../../assets/images/secton-img/tokenomics/lineNft.svg';
import linePart from '../../../../assets/images/secton-img/tokenomics/linePart.svg';
import lineSale from '../../../../assets/images/secton-img/tokenomics/lineSale.svg';
import lineEcs from '../../../../assets/images/secton-img/tokenomics/lineEcsos.svg';
import classNames from 'classnames';

const Tokenomics = () => {
	return (
		<SectionWrapper className={styles.tokenomics}>
			<h1 className={'text-center'}>Tokenomics</h1>

			<div className={styles.diagram}>
				<img src={diagram} alt='tokenomics diagram' />

				<div
					className={classNames(
						styles['clue-team'],
						styles.clue,
						'position-absolute'
					)}
				>
					<p>Team</p>
					<img src={lineTeam} alt='team line' />
				</div>

				<div
					className={classNames(
						styles['clue-nft'],
						styles.clue,
						'position-absolute'
					)}
				>
					<p>NFT Mining</p>
					<img src={lineNft} alt='NFT Mining line' />
				</div>

				<div
					className={classNames(
						styles['clue-sale'],
						styles.clue,
						'position-absolute'
					)}
				>
					<p>Private sale</p>
					<img src={lineSale} alt='Private sale line' />
				</div>

				<div
					className={classNames(
						styles['clue-earn'],
						styles.clue,
						'position-absolute'
					)}
				>
					<p>Play to Earn</p>
					<img src={lineEarn} alt='Play to Earn line' />
				</div>

				<div
					className={classNames(
						styles['clue-part'],
						styles.clue,
						'position-absolute'
					)}
				>
					<p>Partners</p>
					<img src={linePart} alt='Partners line' />
				</div>

				<div
					className={classNames(
						styles['clue-mark'],
						styles.clue,
						'position-absolute'
					)}
				>
					<p>Marketing</p>
					<img src={lineMark} alt='Marketing line' />
				</div>

				<div
					className={classNames(
						styles['clue-ecs'],
						styles.clue,
						'position-absolute'
					)}
				>
					<p>Ecosystem Fund</p>
					<img src={lineEcs} alt='Ecosystem Fund line' />
				</div>
			</div>
		</SectionWrapper>
	);
};

export default Tokenomics;
