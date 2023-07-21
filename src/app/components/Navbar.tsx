import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between px-2 text-4xl font-semibold py-3 bg-gradient-to-r from-cyan-500/75 to-blue-500/75'>
			<Link href='https://www.sap.com/korea/sustainability.html' className='text-lg text-white font-extralight'>
				SAP.지속가능한
			</Link>
			<Link href='https://www.instagram.com/explore/tags/에코플랜터즈/' className='text-lg text-white pl-2 font-extralight'>
				#에코플랜터즈
			</Link>
		</nav>
	);
};

export default Navbar;
