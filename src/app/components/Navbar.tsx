import Link from 'next/link';
import React from 'react';

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between px-2 text-4xl font-semibold py-3 bg-purple-200'>
			<Link href='https://www.sap.com/korea/sustainability.html' className='text-lg text-black'>
				SAP.지속가능한
			</Link>
			<Link href='https://www.instagram.com/explore/tags/에코플랜터즈/' className='text-lg text-black pl-2'>
				<div className='text-blue-400'>#에코플랜터즈</div>
			</Link>
		</nav>
	);
};

export default Navbar;
