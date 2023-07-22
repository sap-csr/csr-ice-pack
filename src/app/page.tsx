import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import CardNews from './components/CardNews';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className='flex flex-col w-full bg-white justify-start'>
			<Navbar />
			<CardNews />

			<div className='w-full overflow-hidden h-auto pt-5 justify-center pb-5'>
        <p className='text-center text-gray-300 text-sm'>
        인스타그램과 링크드인 해시태그의 업데이트 주기는 24시간입니다.
        </p>
<div className='sk-ww-instagram-hashtag-feed' data-embed-id='170285'></div><script src='https://widgets.sociablekit.com/instagram-hashtag-feed/widget.js' async defer></script>

			</div>

			<div className='w-full overflow-hidden h-auto pt-5 justify-center pb-5'>
<div class='sk-ww-linkedin-hashtag-posts' data-embed-id='170120'></div><script src='https://widgets.sociablekit.com/linkedin-hashtag-posts/widget.js' async defer></script>

			</div>

		</main>
	);
}

