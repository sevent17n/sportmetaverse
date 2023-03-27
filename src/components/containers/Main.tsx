import { ReactNode, FC } from 'react';
import './index.scss';

interface MainProps {
	children: ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
	return <main className={'main container-xxl '}>{children}</main>;
};

export default Main;
