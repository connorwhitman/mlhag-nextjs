"use client";

import React from "react";
import Link from "next/link";

const AboutHomeMoffatt = () => {
  return (
    <section className="ptf-custom--3993 jarallax">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-3 col-md-8 offset-md-2">
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
              {/* <h6 className="fz-16 has-accent-1 text-uppercase">About Us</h6> */}
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "1.875rem" }}
              ></div>
              <h3 style={{ maxWidth: "30rem" }} className="has-accent-4">Our Mission & Purpose</h3>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2rem", "--ptf-md": "2rem" }}
              ></div>
              <p
                className="fz-18 h6"
                style={{ maxWidth: "30rem", color: "#333333" }}
              >
                The purpose of the Moffatt-Ladd House and Garden is to interpret
                American, New Hampshire, and Portsmouth history through the
                lives and possessions of the inhabitants of the house, both free
                and enslaved.
              </p>
              <br />
              <p
                className="fz-18 h6"
                style={{ maxWidth: "30rem", color: "#333333" }}
              >
                The Society collects and preserves objects and manuscripts
                appropriate to this history. The Moffatt-Ladd House is a
                National Historic Landmark Building and a member of the Great
                American Treasures program of The National Society of The Colonial Dames of America <Link href="/about/nscda" className="has-accent-1">(NSCDA)</Link>.
              </p>
              <br />
              <p
                className="fz-18 h6"
                style={{ maxWidth: "30rem", color: "#333333" }}
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
              style={{ "--ptf-xxl": "8.125rem", "--ptf-lg": "3rem" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHomeMoffatt;
