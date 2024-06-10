import '@/styles/global.css';

import localFont from 'next/font/local';

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata = {
  title: 'Memorial Space',
  description: 'Graduation Project',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>{props.children}</body>
    </html>
  );
}
