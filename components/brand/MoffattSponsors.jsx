"use client";

import React from "react";
import Image from "next/image";
const iconList = [
  { delayAnimation: "0", icon: "aland" },
  { delayAnimation: "100", icon: "gsm" },
  { delayAnimation: "200", icon: "portscollection" },
  { delayAnimation: "300", icon: "shadetree" },
  { delayAnimation: "400", icon: "pisqbank" },
  { delayAnimation: "400", icon: "harborcruises" },
];

const BrandTwo = () => {
  return (
    <ul
      className="
          ptf-clients-list
          ptf-clients-list--start
          ptf-clients-list--style-1
        "
      data-columns="6"
    >
      {iconList.map((val, i) => (
        <li
          className="ptf-clients-list__item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <Image
            width={1200}
            height={1200}
            style={{ width: "132px", height: "54px" }}
            src={`/assets/img/moffatt/clients/${val.icon}.png`}
            alt="brand logo"
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};

export default BrandTwo;
