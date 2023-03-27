import React, { RefObject } from 'react';

const useClickOutside = (
	ref: RefObject<HTMLElement | null>,
	callback: () => void
) => {
	const handleClick = (e: any) => {
		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};
	React.useEffect(() => {
		document.addEventListener('click', handleClick);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
};

export default useClickOutside;
