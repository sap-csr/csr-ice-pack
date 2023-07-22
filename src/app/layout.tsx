import './globals.css';
import { Noto_Sans_KR, Bagel_Fat_One } from 'next/font/google';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const notoSansKr = Noto_Sans_KR({
	// preload: true, 기본값
	subsets: ['latin'], // 또는 preload: false
	weight: ['100', '400', '700', '900'], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

const bagelFatOne = Bagel_Fat_One({ subsets: ['latin'], weight: '400' })

export const metadata = {
	title: 'CSR',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={bagelFatOne.className}>{children}</body>
		</html>
	);
}
