import { ReactNode, FC } from 'react';
import './index.scss';

interface WrapperProps {
	children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
	return <div className={'wrapper '}>{children}</div>;
};

export default Wrapper;
