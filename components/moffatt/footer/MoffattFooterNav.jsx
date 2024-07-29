"use client";

import React from "react";
import Link from "next/link";

const footerItems = [
  { itemName: "Home", link: "/" },
  { itemName: "About", link: "/about" },
  { itemName: "Visit", link: "/visit" },
  { itemName: "Education", link: "/education" },
  { itemName: "Events", link: "/events" },
  { itemName: "Membership", link: "/membership" },
  { itemName: "Donate", link: "/donate" },
  { itemName: "Contact", link: "/contact" },
];

const MoffattFooterNav = () => {
  return (
    <ul>
      {footerItems.map((item, i) => (
        <li key={i}>
          <Link href={item.link}>{item.itemName}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MoffattFooterNav;
