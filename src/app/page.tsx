import Image from 'next/image';

import { AppConfig } from '@/utils/AppConfig';

import { HOME_INFOS } from '../const/home';

export async function generateMetadata() {
  return {
    title: 'home',
  };
}

const Home = () => (
  <div className="py-12">
    <div className="py-8">
      <h1 className="text-3xl font-normal text-white">{AppConfig.name}</h1>
      <h2 className="text-lg text-gray-400">삶을 끝맺는 공간을 지나 죽음을 끝맺다</h2>
    </div>
    <div className="mx-auto h-fit px-12">
      <Image
        width={5906}
        height={5906}
        src="/assets/images/1.webP"
        alt="Picture of me"
        className="w-80"
        // placeholder="blur"
        // blurDataURL="/assets/images/1.webP" // 추후 수정
      />{' '}
      <Image
        width={3508}
        height={4961}
        src="/assets/images/2.webP"
        alt="Picture of me"
        className="w-80"
        // placeholder="blur"
        // blurDataURL="/assets/images/2.webP" // 추후 수정
      />{' '}
      <Image
        width={2268}
        height={1135}
        src="/assets/images/3.webP"
        alt="Picture of me"
        className="w-80"
        // placeholder="blur"
        // blurDataURL="/assets/images/3.webP" // 추후 수정
      />
      <Image
        width={472}
        height={1135}
        src="/assets/images/4.webP"
        alt="Picture of me"
        className="w-80"
        // placeholder="blur"
        // blurDataURL="/assets/images/4.webP" // 추후 수정
      />
      <p>삶을 끝맺는 공간을 지나 죽음을 끝맺다.</p>
      <p>무연고자 사후처리시스템을 통해 새로운 형태의 도심 속 장사 시설을 제안한다.</p>
      {HOME_INFOS.map((info, _) => (
        <span key={info.title}>
          <h1 className="text-2xl font-semibold">{`#${info.title}`}</h1>
          <p>{info.description}</p>
        </span>
      ))}
      <h1>#PROPOSAL</h1>
    </div>
  </div>
);

export default Home;
