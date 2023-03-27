import { RouterProvider } from 'react-router-dom';
import { router } from './core/utils/router/router';
import Wrapper from './components/containers/Wrapper';
import Navigation from './components/layouts/Navigation/Navigation';
import Footer from './components/layouts/Footer/Footer';

const App = () => {
	return (
		<Wrapper>
			<Navigation />
			<RouterProvider router={router} />
			<Footer />
		</Wrapper>
	);
};

export default App;
