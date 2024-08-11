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
          >
            <div className="ptf-widget ptf-widget-contacts has-white-color">
              <ul>
                <li>
                  <span>Address</span>
                  <a
                        href="https://www.google.com/maps/search/?api=1&query=154+market+street+portsmouth+nh+03801&query_place_id=ChIJd-VNUwm_4okRRxkLypPSLvI"
                        className="has-accent-5"
                      >
                        154 Market Street, Portsmouth, NH 03801
                      </a>
                </li>
                <li>
                  <span>House Phone</span>
                  <a href="tel:603-436-8221" className="has-accent-5">+1 603-436-8221</a>
                </li>
                <li>
                  <span>Office Phone</span>
                  <a href="tel:603-430-7968" className="has-accent-5">603-430-7968</a>
                </li>
                <li>
                  <span>Email</span>
                  <a href="mailto:info@moffattladd.org" className="has-accent-5">info@moffattladd.org</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End .col */}

        <div className="col-12 col-lg-5">
            <div className="ptf-widget ptf-widget-links has-white-color">
              <MoffattFooterNav />
            </div>
            
          </div>
        </div>
    </>
  );
};

export default MoffattFooter;
