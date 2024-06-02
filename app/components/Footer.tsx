import Link from 'next/link';
import React from 'react';
import { footerLinks } from '../constants';

const Footer = () => (
  <footer className="w-full relative bottom-0 py-5 sm:px-10 px-5 bg-zinc">
    <div className="screen-max-width">
      <div className="bg-neutral-700 my-5 h-[1px] w-full" />

      <div className="flex md:flex-row flex-col md:items-center justify-between">
        <p className="font-semibold text-gray text-xs">
          Developed By. Sami ur Rehman
        </p>
        <div className="flex">
          {footerLinks.map((link, i) => (
            <Link
              key={link}
              className="font-semibold text-gray text-xs"
              href="https://www.linkedin.com/in/samiurrehman1"
              target="_blank"
            >
              {link}
              {i !== footerLinks.length - 1 && (
                <span className="mx-2"> | </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
