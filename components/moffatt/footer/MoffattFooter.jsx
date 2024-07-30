"use client";

import React from "react";
import MoffattFooterNav from "./MoffattFooterNav";

const MoffattFooter = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-7">
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
          >
            <div className="ptf-widget ptf-widget-contacts has-white-color">
              <ul>
                <li>
                  <span>Address</span>
                  <p>154 Market Street, Portsmouth, NH 03801</p>
                </li>
                <li>
                  <span>House Phone</span>
                  <a href="">+1 603-436-8221</a>
                </li>
                <li>
                  <span>Office Phone</span>
                  <a href="">603-430-7968</a>
                </li>
                <li>
                  <span>Email</span>
                  <a href="">info@moffattladd.org</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12 col-lg-5">
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="100"
          >
            <div className="ptf-widget ptf-widget-links has-white-color">
              <MoffattFooterNav />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default MoffattFooter;
