"use client";

import React from "react";
import MoffattSocial from "@/components/moffatt/footer/MoffattSocial";
import Image from "next/image";
const logo = "/assets/img/moffatt/moffatt-logo.png";

const MoffattCopyright = () => {
  return (
    <div className="container">
    <div className="row align-items-center justify-content-center">
      <div className="col-12 col-md">
        <a href="/">
          <Image
            width={1200}
            height={1200}
            style={{ width: "120px", height: "50px" }}
            src={logo}
            alt="logo"
            loading="lazy"
          />
        </a>
      </div>
      <div className="col-12 col-md text-md-center text-lg-center">
        <p className="ptf-footer-copyright has-black-color">
          ©{new Date().getFullYear()}{" "}
          <span>
            Moffatt-Ladd House & Garden
          </span>
        </p>
      </div>
      <div className="col-12 col-lg text-md-center text-lg-end">
        <div className="ptf-footer-socials has-black-color ">
          <MoffattSocial />
        </div>
      </div>
    </div>
    </div>
  );
};

export default MoffattCopyright;
