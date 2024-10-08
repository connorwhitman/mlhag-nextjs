"use client";

import React from "react";
import Image from "next/image";
const sponsorList = [
  { delayAnimation: "0", icon: "aland" },
  { delayAnimation: "100", icon: "gsm" },
  { delayAnimation: "200", icon: "portscollection" },
  { delayAnimation: "300", icon: "shadetree" },
  { delayAnimation: "400", icon: "pisqbank" },
  { delayAnimation: "400", icon: "harborcruises" },
];

const SponsorsMoffatt = () => {
  return (
    <>
      <section>
        {/* -SPCR- */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
        ></div>

        <div className="container-xxl">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-lg-7 offset-lg-2 col-sm-10 offset-sm-1">
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <h2 className="has-accent-4 mb-2">
                  Our Sponsors & Benefactors
                </h2>

                <div
                  className="ptf-divider"
                  style={{ "--ptf-width": "40%", "--ptf-color": "#A6763D" }}
                ></div>

                {/* -SPCR- */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5rem" }}
                ></div>

                <h4 className="fz-24">
                  Thank you to the following businesses for your support of the
                  Moffatt-Ladd House & Garden!
                </h4>
              </div>
            </div>
          </div>

          {/* -SPCR- */}
          {/* <div
            className="ptf-spacer"
            style={{ "--ptf-xxl": "5rem", "--ptf-md": "3rem" }}
          ></div> */}
{/* 
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <ul
                className="
          ptf-clients-list
          ptf-clients-list--start
          ptf-clients-list--style-1
        "
                data-columns="2"
              >
                {sponsorList.map((val, i) => (
                  <li
                    className="ptf-clients-list__item"
                    data-aos="fade"
                    data-aos-delay={val.delayAnimation}
                    key={i}
                  >
                    <Image
                      width={1200}
                      height={1200}
                      style={{
                        width: "250px",
                        height: "85px",
                        margin: "10px 50px",
                      }}
                      src={`/assets/img/moffatt/supporters/${val.icon}.png`}
                      alt="brand logo"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </div>
        {/* -SPCR- */}
        {/* <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
        ></div> */}
      </section>
    </>
  );
};

export default SponsorsMoffatt;
