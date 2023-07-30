import React from 'react';

const Navbar = () => {

	return (
		<nav className='flex items-center justify-between p-2 md:px-4 text-4xl font-semibold py-3 bg-gradient-to-r from-cyan-500/75 to-blue-500/75'>
			<a href='https://www.sap.com/korea/sustainability.html'
				className='text-lg text-white font-bold hover:text-gray-300 transition-colors duration-200' // 'font-extralight'를 'font-bold'로 변경했습니다.
				target='_blank'
				rel='noopener noreferrer'
			>
				SAP.지속가능한
			</a>
		</nav>
	);
};

export default Navbar;
