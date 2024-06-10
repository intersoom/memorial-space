import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="size-full bg-black px-1 text-white antialiased">
      <div className="mx-auto w-full">
        <header className="border-b border-gray-300 px-8 py-4">
          <div className="pb-8 pt-16">
            <h1 className="text-7xl font-normal text-white">{AppConfig.name}</h1>
            <h2 className="text-lg text-gray-400">삶을 끝맺는 공간을 지나 죽음을 끝맺다</h2>
          </div>
          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-4xl">{props.leftNav}</ul>
            </nav>

            <nav>
              <ul className="flex flex-wrap gap-x-5 text-4xl">{props.rightNav}</ul>
            </nav>
          </div>
        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          made by : 허제연 site by : 이수민
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
