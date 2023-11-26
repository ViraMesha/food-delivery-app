import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import appleStoreImg from "../public/apple-store.svg";
import googlePlayImg from "../public/google-play.svg";

export const headerContent = {
  mobNavLinks: [
    {
      id: "id-1",
      name: "Home",
      url: "/",
    },
    {
      id: "id-2",
      name: "Menu",
      url: "/menu",
    },
    {
      id: "id-3",
      name: "Working hours",
      url: "#",
    },
    {
      id: "id-4",
      name: "Contact",
      url: "/",
    },
  ],
  navLinks: [
    {
      id: "id-1",
      name: "Home",
      url: "/",
    },
    {
      id: "id-2",
      name: "Menu",
      url: "/menu",
    },
    {
      id: "id-3",
      name: "Contact",
      url: "/",
    },
  ],
};

export const footerContent = {
  socialLinks: [
    {
      icon: React.createElement(FaInstagram),
      url: "https://www.instagram.com/",
    },
    {
      icon: React.createElement(FaTwitter),
      url: "https://twitter.com/",
    },
    {
      icon: React.createElement(FaFacebook),
      url: "https://www.facebook.com/",
    },
    {
      icon: React.createElement(FaDiscord),
      url: "https://discord.com/",
    },
    {
      icon: React.createElement(FaYoutube),
      url: "https://www.youtube.com/",
    },
  ],
  downloadLinks: [
    { img: googlePlayImg, url: "#", alt: "Download Google Play" },
    { img: appleStoreImg, url: "#", alt: "Download Apple Store" },
  ],
  infoLinks: {
    heading: "Information",
    links: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Privacy Policy" },
      { href: "#", label: "Terms & Conditions" },
      { href: "#", label: "What info we collect?" },
    ],
  },
  contact: {
    heading: "Contact Us",
    text: "Our main restaurant is located on Street 231, NYC",
    phone: "Phone - +00 1234567890",
    email: "Email - help@foodswift.com",
  },
};
