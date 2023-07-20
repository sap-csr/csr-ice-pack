'use client';

import React, { Component } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export class CardNews extends Component {
	render() {
		const settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return (
			<div className='bg-white text-black text-lg w-full justify-center'>
				<Slider {...settings} className='m-5'>
					<div>
						<Image src='/images/001.png' width='500' height='300' alt='001' />
					</div>
					<div>
						<Image src='/images/002.png' width='500' height='300' alt='002' />
					</div>
					<div>
						<Image src='/images/003.png' width='500' height='300' alt='003' />
					</div>
					<div>
						<Image src='/images/004.png' width='500' height='300' alt='004' />
					</div>
					<div>
						<Image src='/images/005.png' width='500' height='300' alt='005' />
					</div>
					<div>
						<Image src='/images/006.png' width='500' height='300' alt='006' />
					</div>
					<div>
						<Image src='/images/007.png' width='500' height='300' alt='007' />
					</div>
					<div>
						<Image src='/images/008.png' width='500' height='300' alt='008' />
					</div>
					<div>
						<Image src='/images/009.png' width='500' height='300' alt='009' />
					</div>
					<div>
						<Image src='/images/010.png' width='500' height='300' alt='010' />
					</div>
					<div>
						<Image src='/images/011.png' width='500' height='300' alt='011' />
					</div>
				</Slider>
			</div>
		);
	}
}

export default CardNews;
