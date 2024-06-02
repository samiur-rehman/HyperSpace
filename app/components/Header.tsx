'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { logoImg } from '../utils';

const Header = () => {
  const navLists = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Creative',
      url: '/creative',
    },
  ];

  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-center items-center bg-zinc">
      <nav className="md:w-10/12 w-8/12 flex justify-center screen-max-width">
        <Link href="https://hyper-space.com/" target="_blank">
          <Image src={logoImg} alt="Apple" width={20} height={24} />
        </Link>

        <div className="flex flex-1 justify-center">
          {navLists.map(({ name, url }) => (
            <Link
              key={name}
              href={url}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
