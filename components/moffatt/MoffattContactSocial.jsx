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
  {
    iconName: "socicon-youtube",
    link: "https://www.youtube.com/channel/UCbLWomJCx7FXHPrlepd7mkA",
  },
];

const MoffattContactSocial = () => {
  return (
    <div className="ptf-offcanvas-menu__socials">
      {/* <!--Social Icon--> */}
      {socialList.map((icon, i) => (
        <a
          className={`ptf-social-icon ptf-social-icon--style-3  ${icon.iconClass}`}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <i className={icon.iconName}></i>
        </a>
      ))}
    </div>
  );
};

export default MoffattContactSocial;
