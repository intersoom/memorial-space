import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';

import { HOME_INFOS } from '../const/home';

export async function generateMetadata() {
  return {
    title: 'home',
  };
}

const Home = () => (
  <div className="p-12 size-full">
    <div className="py-8">
      <h1 className="text-3xl font-normal text-white mb-2">{AppConfig.name}</h1>
      <h2 className="text-lg text-gray-400">삶을 끝맺는 공간을 지나 죽음을 끝맺다</h2>
    </div>
    <div className="mx-auto h-fit w-9/12 px-12 flex justify-center flex-col items-center gap-10 text-center">
      <Image
        width={1000}
        height={1000}
        src="/assets/images/1.webP"
        alt="Picture of me"
        className="w-96"
      />
      <Image
        width={1169}
        height={1653}
        src="/assets/images/2.webP"
        alt="Picture of me"
        className="w-96"
      />
      <Image
        width={1134}
        height={567.5}
        src="/assets/images/3.webP"
        alt="Picture of me"
        className="w-96"
      />
      <Image
        width={472}
        height={1135}
        src="/assets/images/4.webP"
        alt="Picture of me"
        className="w-96"
      />
      <div>
        <p>삶을 끝맺는 공간을 지나 죽음을 끝맺다.</p>
        <p>무연고자 사후처리시스템을 통해 새로운 형태의 도심 속 장사 시설을 제안한다.</p>
      </div>
      {HOME_INFOS.map((info, ind) => (
        <div key={info.title} className="flex flex-col items-center gap-4">
          <h1 className="text-2xl font-semibold">{`#${info.title}`}</h1>
          <p>{info.description}</p>
          <Image
            width={472}
            height={1135}
            src={`/assets/images/${ind + 5}.webP`}
            alt="Picture of me"
            className="w-96"
          />
        </div>
      ))}
      <h1 className="text-2xl font-semibold">#PROPOSAL</h1>
      {Array.from({ length: 10 }).map((_, ind) => (
        <Image
          key={`${ind}th`}
          width={472}
          height={1135}
          src={`/assets/images/${ind + 9}.webP`}
          alt="Picture of me"
          className="w-96"
        />
      ))}
    </div>
  </div>
);

export default Home;
