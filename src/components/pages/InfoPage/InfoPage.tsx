import Main from '../../containers/Main';
import Video from '../../elements/Info/Components/Video/Video';
import AboutUs from '../../elements/Info/Components/AboutUs/AboutUs';
import React from 'react';
import Cards from '../../elements/Info/Components/Cards/Cards';
import AboutGame from '../../elements/Info/Components/AboutGame/AboutGame';
import RoleCardContainer from '../../elements/Info/Components/AboutGame/RoleCard/RoleCardContainer';
import AboutGameCards from '../../elements/Info/Components/AboutGame/AboutGameCards/AboutGameCards';
import SMTV from '../../elements/Info/Components/AboutGame/SMTV/SMTV';

const InfoPage = () => {
	return (
		<>
			<AboutUs />
			<Video />
			<Main>
				<Cards />
				<AboutGame />
				<RoleCardContainer />
				<AboutGameCards />
				<SMTV />
			</Main>
		</>
	);
};

export default InfoPage;
