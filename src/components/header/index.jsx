import React from 'react';
import { StyledTitle } from './styled';
import Search from '../search';


const Header = () => {
	return (
		<div>
			<StyledTitle> China Virus Statistics </StyledTitle>
			<div>
				<Search />
			</div>
		</div>
	);
};

export default Header;
