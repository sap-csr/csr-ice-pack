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
					<div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', width: '100%' }}>
						<iframe width="auto" height="auto" src="https://www.youtube.com/embed/Pf1fMbGCDGI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</div>
				</section>

				<section className='w-3/4 bg-gray-50 shadow-lg p-5 rounded-lg mt-5'>
					<p className='text-center text-gray-300 text-sm mb-3'>
						해시태그 업데이트 주기는 24h 입니다.
					</p>
					<div className='sk-ww-linkedin-hashtag-posts' data-embed-id='170424'>
					</div>
					<script src='https://widgets.sociablekit.com/linkedin-hashtag-posts/widget.js' async defer></script>
				</section>

				<footer className='w-full text-center bg-gray-100 p-3 mt-10 border-t border-gray-200'>
					<p className='text-gray-600 text-sm'>
						<a href="https://instagram.com/eco_planters2023?igshid=ZDc4ODBmNjlmNQ==">
							© 2023. 에코 플랜터즈 All right reserved.
						</a>
					</p>
				</footer>

			</main>
		</div>
	);
}
