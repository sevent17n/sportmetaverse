import styles from './TokenSale.module.scss';
import SectionWrapper from '../../../containers/SectionWrapper';
import classNames from 'classnames';
import { tokenSaleData } from './TokenSale.data';
import { v4 as uuid } from 'uuid';

const TokenSale = () => {
	return (
		<SectionWrapper className={classNames(styles['token-sale'], 'pt-0')}>
			<h1 className={'text-center'}>Token Sale</h1>

			<table className={styles.table}>
				<thead>
					<tr>
						<th>stage</th>
						<th>allocation</th>
						<th>price</th>
					</tr>
				</thead>
				<tbody>
					{tokenSaleData.length > 0 &&
						tokenSaleData.map(item => {
							return (
								<tr key={uuid()}>
									<td>{item.stage}</td>
									<td>{item.allocation}</td>
									<td>{item.price}</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</SectionWrapper>
	);
};

export default TokenSale;
