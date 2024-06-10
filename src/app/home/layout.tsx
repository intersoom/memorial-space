import { headers } from 'next/headers';
import Link from 'next/link';

import { BaseTemplate } from '@/templates/BaseTemplate';

export default function HomeLayout(props: { children: React.ReactNode }) {
  const headersList = headers();
  const headerPathname = headersList.get('x-pathname') || '';

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/home"
              className={`border-none  text-gray-100 hover:text-gray-400 ${
                headerPathname === '/home' ? 'font-normal' : 'font-thin'
              }`}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/find"
              className={`border-none  text-gray-100 hover:text-gray-400 ${
                headerPathname === '/find' ? 'font-normal' : 'font-thin'
              }`}
            >
              FIND
            </Link>
          </li>
        </>
      }
    >
      {props.children}
    </BaseTemplate>
  );
}
