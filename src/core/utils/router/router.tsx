import { createBrowserRouter } from 'react-router-dom';
import Home from '../../../components/pages/HomePage/Home';
import InfoPage from '../../../components/pages/InfoPage/InfoPage';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: '/info',
		element: <InfoPage />
	}
]);
