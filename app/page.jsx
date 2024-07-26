import Link from "next/link";
import CounterTwo from "../components/counter/CounterTwo";
import CopyRightTwo from "../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../components/footer/FooterTwo";
import HeaderMoffatt from "../components/header/HeaderMoffatt";
import HeroMoffatt from "../components/hero/HeroMoffatt";
import ListOne from "../components/list/ListOne";
import ListTwo from "../components/list/ListTwo";
import PortfolioTw from "../components/portfolio/PortfolioTwo";
import Pricing from "../components/pricing/Pricing";
import Team from "../components/team/Team";
import TestimonialTwo from "../components/testimonial/TestimonialTwo";

import ServiceOne from "../components/service/MoffattHomeService";

export const metadata = {
  title: "Home Agency || Moonex Portfolio and Agency NextJS Template",
};

const HomeAgency = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-moffatt">
      <div className="ptf-site-wrapper__inner">
        <HeaderMoffatt />

        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-agency">
          {/*=============================================
          Hero Section
          ============================================== */}
          <div className="ptf-showcase-3 swiper-container">
              <div className="swiper-wrapper">
                <HeroMoffatt />
              </div>
          </div>

          {/* Visit CTA */}

          <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "7rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-lg-3">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 medium-heading">
                        Join Us!
                        
                      </h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem" }}
                      ></div>
                      <p className="fz-18">
                      The purpose of the Moffatt-Ladd House and Garden is to interpret 
                      American, New Hampshire, and Portsmouth history through the lives 
                      and possessions of the inhabitants of the house, both free and enslaved.
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-lg": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                  </div>
                  <div className="col-lg-8 offset-lg-1">
                    <ServiceOne />
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>
          
          {/* Brief About */}

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
                      <h6 className="fz-16 has-accent-1 text-uppercase">
                        About Us
                      </h6>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.875rem" }}
                      ></div>
                      <h3 style={{ maxWidth: "30rem" }}>
                        Our Mission & Purpose
                      </h3>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2rem", "--ptf-md": "2rem" }}
                      ></div>
                      <p className="fz-18 has-black-color h6" style={{ maxWidth: "30rem" }}>
                        The purpose of the Moffatt-Ladd House and Garden is to interpret 
                        American, New Hampshire, and Portsmouth history through the lives 
                        and possessions of the inhabitants of the house, both free and enslaved.
                      </p><br />
                      <p className="fz-18 has-black-color h6" style={{ maxWidth: "30rem" }}>
                        The Society collects and preserves objects and manuscripts appropriate to this history. 
                        The Moffatt-Ladd House is a National Historic Landmark Building and a member of the 
                        Great American Treasures program of NSCDA.
                      </p><br />
                      <p className="fz-18 has-black-color h6" style={{ maxWidth: "30rem" }}>
                      Members of the Friends of the Moffatt-Ladd House and Garden receive free admission passes 
                      to the house and garden and invitations to special programs. Shop discounts and discounts 
                      on other programs are available to members joining at the Family level or higher. 
                      See Friends page for further details.
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

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
              ></div>

            {/*=============================================
          Start Latest Works section
          ============================================== */}
            <section>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1 d-inline-flex">
                    Upcoming Events
                  </h2>
                  <Link
                    className="ptf-link-with-arrow fz-18 text-uppercase d-none d-lg-inline-flex"
                    href="/"
                    style={{ marginLeft: "5.625rem" }}
                  >
                    All Events{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ height: "1em" }}
                      viewBox="0 0 17 17"
                    >
                      <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                    </svg>
                  </Link>
                </div>
                {/* End .ptf-animated-block */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div className="ptf-isotope-grid">
                    <PortfolioTw />
                  </div>
                  {/* End .ptf-isotope-grid */}
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>



            <section>
              <div className="container">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            {/*=============================================
          Start Testimonial section
          ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-8">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="h1 medium-heading has-accent-1">
                        What Our Visitors Say
                      </h2>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": " 4.375rem" }}
                ></div>
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Content Slider--> */}
                  <div className="ptf-content-slider swiper-container ">
                    <div className="swiper-wrapper testimonial-100-spacer">
                      <TestimonialTwo />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
          Start Footer section
          ============================================== */}
            <footer className="ptf-footer ptf-footer--style-3">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 offset-xl-2">
                    <div className="ptf-footer__top">
                      <FooterTwo />
                    </div>
                    {/* End .ptf-footer__top */}

                    <div className="ptf-footer__bottom">
                      <CopyRightTwo />
                    </div>
                    {/* End .ptf-footer__bottom */}
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}
    </div>
  );
};

export default HomeAgency;
