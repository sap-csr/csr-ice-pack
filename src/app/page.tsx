import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import CardNews from './components/CardNews';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className='w-full bg-white'>
			<Navbar />
			<main className='flex flex-col justify-center items-center py-10'>
				<CardNews />

				<section className='w-3/4 bg-gray-50 shadow-lg p-5 rounded-lg mt-5'>
					<p className='text-center text-gray-500 text-sm mb-3'>
						해시태그 업데이트 주기는 24h 입니다.
					</p>
					<div className='sk-ww-linkedin-hashtag-posts' data-embed-id='170120'>
						링크드인
					</div>
					<script src='https://widgets.sociablekit.com/linkedin-hashtag-posts/widget.js' async defer></script>
				</section>

				<section className='w-3/4 bg-gray-50 shadow-lg p-5 rounded-lg mt-5'>
					<div className='sk-ww-instagram-hashtag-feed' data-embed-id='170285'>
						인스타그램
					</div>
					<script src='https://widgets.sociablekit.com/instagram-hashtag-feed/widget.js' async defer></script>
				</section>

			</main>
		</div>
	);
}

