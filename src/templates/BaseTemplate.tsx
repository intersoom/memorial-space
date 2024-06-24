'use client';

import Link from 'next/link';
import { useState } from 'react';

const BaseTemplate = (props: { children: React.ReactNode; headerDefault: string }) => {
  const [tab, setTab] = useState(props.headerDefault);

  console.log(props.headerDefault);
  return (
    <div className="h-screen bg-black text-white antialiased">
      <div className="mx-auto flex justify-between flex-col bg-black">
        <header className="min-h-fit border-b border-gray-300 p-8">
          <div className="flex items-center justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-2xl">
                <li>
                  <Link
                    onClick={() => setTab('/')}
                    href="/"
                    className={`border-none  text-gray-100 hover:text-gray-400 ${
                      tab === '/' ? 'font-normal' : 'font-thin'
                    }`}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => setTab('/find')}
                    href="/find"
                    className={`border-none  text-gray-100 hover:text-gray-400 ${
                      tab === '/find' ? 'font-normal' : 'font-thin'
                    }`}
                  >
                    FIND
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="size-full">{props.children}</main>
        <footer className="border-t border-gray-300 py-8 text-center text-sm min-h-fit w-full">
          결[結] : 삶을 끝맺는 공간을 지나 죽음을 끝맺다. 무연고자 사후처리시스템을 통해 도심 속
          새로운 형태의 장사시설[葬事施設]을 제안한다. [ 홍익대학교 건축도시대학 실내건축학과 허제연
          ]
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
