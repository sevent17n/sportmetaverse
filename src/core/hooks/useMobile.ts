import { useEffect, useState } from 'react';

export const useMobile = () => {
	const [isMobile, setIsMobile] = useState(false);
	const [isTablet, setIsTablet] = useState(false);
	useEffect(() => {
		window.innerWidth <= 550 && setIsMobile(true);
		window.innerWidth <= 850 && setIsTablet(true);
	}, []);
	return { isMobile, isTablet };
};
