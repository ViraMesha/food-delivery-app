import React from "react";
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import appleStoreImg from "@images/apple-store.svg";
import googlePlayImg from "@images/google-play.svg";
import slide1 from "@images/slide1.jpg";
import slide2 from "@images/slide2.jpg";
import slide3 from "@images/slide3.jpg";
import hamburgerImg from "@images/temp/hamburger.png";
import pastaImg from "@images/temp/pasta.png";
import pizzaImg from "@images/temp/pizza.png";

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
      url: "/contact",
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

export const heroContent = [
  {
    title: "Eat The Best",
    img: slide1,
  },
  {
    title: "Savor Speedy Satisfaction",
    img: slide2,
  },
  {
    title: "Delight in Every Bite",
    img: slide3,
  },
];

export const featuredContent = [
  {
    id: "1",
    title: "Pizza Beef and Crispy",
    desc: "Mozarella, Sweet pepper, Tomatoes, Pickled cucumbers, BBQ sauce, Crispy onion, Beef",
    img: pizzaImg,
    price: 11.32,
    options: [
      {
        title: "Small",
        additinalPrice: 0,
      },
      {
        title: "Medium",
        additinalPrice: 2,
      },
      {
        title: "Large",
        additinalPrice: 4,
      },
    ],
  },
  {
    id: "2",
    title: "Pasta Carbonara 270g",
    desc: "Garlic oil, noodles, ham, cream, Parmesan cheese",
    img: pastaImg,
    price: 15.98,
    options: [
      {
        title: "Small",
        additinalPrice: 0,
      },
      {
        title: "Medium",
        additinalPrice: 2,
      },
      {
        title: "Large",
        additinalPrice: 4,
      },
    ],
  },
  {
    id: "3",
    title: "Crispy Chicken burger",
    desc: "crispy breaded chicken fillet with tomato, pickled cucumber, onion, 1000 Islands sauce and mustard-honey sauce",
    img: hamburgerImg,
    price: 20.22,
    options: [
      {
        title: "Small",
        additinalPrice: 0,
      },
      {
        title: "Medium",
        additinalPrice: 2,
      },
      {
        title: "Large",
        additinalPrice: 4,
      },
    ],
  },
];
