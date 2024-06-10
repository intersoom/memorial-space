import { HOME_INFOS } from '../const/home';

export async function generateMetadata() {
  return {
    title: 'home',
  };
}

const Home = () => (
  <div className="py-12">
    <div className="mx-auto h-screen overflow-auto px-12">
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
