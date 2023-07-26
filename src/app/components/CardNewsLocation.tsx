'use client';

import React, { Component } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export class CardNewsLocation extends Component {
	render() {
		const settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			cssEase: 'ease',
		};

		const images = Array.from({ length: 5 }, (_, i) => `/images/ep2023_location_${i + 1}.jpg`);

		return (
			<div className='bg-white text-black text-lg w-full justify-center'>
				<Slider {...settings} className='m-5 justify-center'>
					{images.map((image, index) => (
						<div key={index}>
							<Image src={image} width='500' height='300' alt={`ep2023_location_${index + 1}`} />
						</div>
					))}
				</Slider>
			</div>
		);
	}
}

export default CardNewsLocation;
