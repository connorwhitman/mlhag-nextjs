"use client"

import React from "react";

const socialList = [
  {
    iconName: "socicon-facebook",
    link: "https://www.facebook.com/moffattladd/",
  },
  {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/moffattladd/",
  },
  {
    iconName: "socicon-linkedin",
    link: "https://www.linkedin.com/company/moffatt-ladd-house-&-garden",
  },
  // {
  //   iconName: "socicon-twitter",
  //   link: "https://twitter.com/Moffatt_Ladd",
  // },
  {
    iconName: "socicon-youtube",
    link: "https://www.youtube.com/channel/UCbLWomJCx7FXHPrlepd7mkA",
  },
];

const MoffattSocial = () => {
  return (
    <>
      {socialList.map((val, i) => (
        <a
          className="ptf-social-icon ptf-social-icon--style-1"
          target="_blank"
          rel="noopener noreferrer"
          href={val.link}
          key={i}
        >
          <i className={val.iconName}></i>
        </a>
      ))}
    </>
  );
};

export default MoffattSocial;
