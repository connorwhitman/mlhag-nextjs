"use client";

import React, { useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

// BUTTONS: text, link, accent

const HeroHomeMoffatt = ({ heroData }) => {
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
    <section>
      <div className="ptf-showcase-3 swiper-container">
        <div className="swiper-wrapper">
          <Slider {...settings}>
            <div className="home-image-overlay">
              <div className="ptf-showcase-slide">
                <div className="container">
                  <h1 className="fz-100 fz-90--lg lh-1 fz-50--md has-white-color text-center">
                  <span className="has-accent-5">
                    {heroData.accentTitle}
                  </span><br />
                    {heroData.title}
                  </h1>

                  {/* -SPCR- */}
                  <div className="ptf-spacer" style={{ "--ptf-xxl": "2.125rem" }}></div>

                  <h2
                  className="fz-24 fz-18--md has-white-color text-center"
                  style={{ maxWidth: "34.375rem", margin: "0 auto", textTransform: "uppercase", letterSpacing: ".05rem"}}>
                    {heroData.subtitle}
                  </h2>

                  {/* -SPCR- */}
                  <div className="ptf-spacer" style={{ "--ptf-xxl": "3.625rem" }}></div>

                  {/* == BUTTONS == */}

                  <div className="d-flex justify-content-center">
                    { heroData.buttons.map( (button, i) => {
                      return(
                        <Link
                          className={
                            i === 0
                            ? "ptf-btn ptf-btn--primary"
                            : "ptf-btn ptf-btn--secondary"
                          }
                          href={button.link}
                          style={{ margin: "0 .5rem", padding: "1rem 3rem"}}
                          key={i}
                        >
                          {button.text}
                        </Link>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      </section>
    </>
  );
};

export default HeroHomeMoffatt;
