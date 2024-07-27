"use client";

import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

const HeroMoffatt = () => {
  const [isOpen, setOpen] = useState(false);

  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // adaptiveHeight: true,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="home-image-overlay">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                <span className="has-accent-1">Moffatt-Ladd</span><br />
                House & Garden
              </h1>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>

              <h2
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                A National Historic Landmark open to the public as a museum since 1912
              </h2>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>

              <div className="d-flex justify-content-center">
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--primary"
                  href="/"
                  // style={{ marginLeft: "2rem" }}
                >
                  Visit Us
                </Link>

                <Link
                  className="ptf-btn ptf-btn--secondary"
                  href="/"
                  style={{ marginLeft: "2rem" }}
                >
                  Membership
                </Link>
                <Link
                  className="ptf-btn ptf-btn--secondary"
                  href="/"
                  style={{ marginLeft: "2rem" }}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}
      </Slider>
    </>
  );
};

export default HeroMoffatt;
