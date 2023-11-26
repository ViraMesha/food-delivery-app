import Image from "next/image";
import Link from "next/link";
import React from "react";

import { footerContent } from "@/lib/data";

import Copyright from "./ui/Copyright";

const Footer = () => {
  const {
    socialLinks,
    downloadLinks,
    infoLinks: { heading: infoHeading, links },
    contact: { heading: contactHeading, text, phone, email },
  } = footerContent;

  return (
    <footer className="bg-[var(--accent-color)] py-10 md:py-15 md:pb-10 text-[#000]">
      <div className="wrapper">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 lg:gap-12 justify-between">
          <div className="flex flex-col gap-5 sm:gap-7 sm:col-span-2">
            <Link
              href="/"
              className="font-black text-[25px] md:text-[35px] leading-normal"
            >
              FoodSwift
            </Link>
            <ul className="flex gap-3">
              {socialLinks.map(({ icon, url }, index) => (
                <li
                  key={index}
                  className="w-18 h-18 bg-white rounded-full group"
                >
                  <a
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="w-9 h-9 inline-flex items-center justify-center group-hover:opacity-30 trans"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex gap-6">
              {downloadLinks.map(({ img, url, alt }, i) => (
                <li
                  key={i}
                  className="hover:scale-110 trans w-[100px] lg:w-[200px]"
                >
                  <Link href={url}>
                    <Image src={img} alt={alt} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-bold leading-[1.78] mb-3">
              {infoHeading}
            </h3>
            <ul>
              {links.map(({ href, label }, i) => (
                <li key={i} className="mb-2">
                  <Link
                    href={href}
                    className="hover:text-[var(--secondary-text-color)] trans"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-bold leading-[1.78] mb-3">
              {contactHeading}
            </h3>
            <p className="mb-4 max-w-[200px]">{text}</p>
            <p className="mb-2">{phone}</p>
            <p>{email}</p>
          </div>
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
