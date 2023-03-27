import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './index.scss';

interface SectionWrapperProps {
	children: ReactNode;
	className?: any;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ children, className }) => {
	return (
		<section className={classNames('main-section', className)}>
			{children}
		</section>
	);
};

export default SectionWrapper;
