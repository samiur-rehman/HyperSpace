import React from 'react';
import Link from 'next/link';
import Popup from './components/Popup';

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

const Home = ({ searchParams }: SearchParamProps) => {
  const show = searchParams?.show;
  return (
    <section className="w-full h-full flex flex-col justify-center items-center bg-zinc-800">
      <div className="max-w-5xl text-center px-4">
        <h2 className="pt-40 mb-4 text-2xl font-semibold tracking-tighter text-gray-200 lg:text-7xl md:text-4xl">
          Welcome to HyperSpace Assignment Task
        </h2>
        <div className="mt-8">
          <Link className="btn" href="/?show=true">
            Popup Modal
          </Link>
          {show === 'true' && <Popup />}
        </div>
      </div>
    </section>
  );
};
export default Home;
