"use client";

import React from "react";
import Link from "next/link";

const footerItems = [
  { itemName: "Home", link: "" },
  { itemName: "About", link: "" },
  { itemName: "Visit", link: "" },
  { itemName: "Education", link: "" },
  { itemName: "Events", link: "" },
  { itemName: "Membership", link: "" },
  { itemName: "Donate", link: "" },
  { itemName: "Contact", link: "" },
];

const FooterList = () => {
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

export default FooterList;
