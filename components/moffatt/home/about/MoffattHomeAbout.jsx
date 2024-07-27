"use client";

import React from "react";

const MoffattHomeAbout = () => {
  return (
    <section className="ptf-custom--3993 jarallax">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 offset-lg-5">
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5.125rem", "--ptf-lg": "0" }}
            ></div>
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <h6 className="fz-16 has-accent-1 text-uppercase">About Us</h6>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "1.875rem" }}
              ></div>
              <h3 style={{ maxWidth: "30rem" }}>Our Mission & Purpose</h3>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2rem", "--ptf-md": "2rem" }}
              ></div>
              <p
                className="fz-18 has-black-color h6"
                style={{ maxWidth: "30rem" }}
              >
                The purpose of the Moffatt-Ladd House and Garden is to interpret
                American, New Hampshire, and Portsmouth history through the
                lives and possessions of the inhabitants of the house, both free
                and enslaved.
              </p>
              <br />
              <p
                className="fz-18 has-black-color h6"
                style={{ maxWidth: "30rem" }}
              >
                The Society collects and preserves objects and manuscripts
                appropriate to this history. The Moffatt-Ladd House is a
                National Historic Landmark Building and a member of the Great
                American Treasures program of NSCDA.
              </p>
              <br />
              <p
                className="fz-18 has-black-color h6"
                style={{ maxWidth: "30rem" }}
              >
                Members of the Friends of the Moffatt-Ladd House and Garden
                receive free admission passes to the house and garden and
                invitations to special programs. Shop discounts and discounts on
                other programs are available to members joining at the Family
                level or higher. See Friends page for further details.
              </p>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "8.125rem", "--ptf-lg": "0" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoffattHomeAbout;
