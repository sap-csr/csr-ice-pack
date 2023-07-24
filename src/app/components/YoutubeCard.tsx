import React from 'react';

const YoutubeCard = ({ href }: { href: string }) => {
	return (
		<div className='w-3/4 h-auto bg-gray-50 shadow-lg p-2 rounded-lg mt-5 sm:p-5'>
			<div className='flex justify-center aspect-w-16 aspect-h-9'>
				<iframe width='100%' height='auto' src={href} allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
			</div>
		</div>
	);
};

export default YoutubeCard;
