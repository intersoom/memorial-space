import '@/styles/global.css';

import localFont from 'next/font/local';

import { BaseTemplate } from '@/templates/BaseTemplate';
import { Toaster } from '@/components/ui/toaster';
import { headers } from 'next/headers';

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
  const headersList = headers();
  const headerPathname = headersList.get('x-pathname') || '';
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <BaseTemplate headerDefault={headerPathname}>{props.children}</BaseTemplate>
        <Toaster />
      </body>
    </html>
  );
}
