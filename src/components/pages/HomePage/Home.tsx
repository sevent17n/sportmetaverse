import Main from '../../containers/Main';
import Header from '../../layouts/Header/Header';
import MetaVerse from '../../elements/Home/MetaVerse/MetaVerse';
import AboutGame from '../../elements/Home/AboutGame/AboutGame';
import RoadMap from '../../elements/Home/RoadMap/RoadMap';
import Tokenomics from '../../elements/Home/Tokenomics/Tokenomics';
import TokenSale from '../../elements/Home/TokenSale/TokenSale';
import OurPartners from '../../elements/Home/OurPartners/OurPartners';

const Home = () => {
	return (
		<>
			<Header />
			<Main>
				<MetaVerse />
				<AboutGame />
				<RoadMap />
				<Tokenomics />
				<TokenSale />
				<OurPartners />
			</Main>
		</>
	);
};

export default Home;
