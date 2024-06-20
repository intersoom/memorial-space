const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="h-screen w-screen bg-black text-white antialiased">
      <div className="mx-auto flex size-full flex-col">
        <header className="min-h-fit border-b border-gray-300 p-8">
          <div className="flex items-center justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-2xl">{props.leftNav}</ul>
            </nav>
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-2xl">{props.rightNav}</ul>
            </nav>
          </div>
        </header>
        <main className="h-full">{props.children}</main>
        <footer className="border-t border-gray-300 py-8 text-center text-sm">
          made by : 허제연 site by : 이수민
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
