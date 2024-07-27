import Link from "next/link";
import HeroMoffatt from "@/components/moffatt/home/hero/HeroMoffatt";
import MoffattService from "@/components/moffatt/services/MoffattService";
import MoffattEvents from "@/components/moffatt/events/MoffattEvents";
import MoffattSponsors from "@/components/moffatt/sponsors/MoffattSponsors";
import MoffattHomeAbout from "@/components/moffatt/home/about/MoffattHomeAbout";

export const metadata = {
  title: "Moffatt-Ladd House & Garden || A Portsmouth Historic Landmark",
};

const HomeAgency = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-moffatt">
      <div className="ptf-site-wrapper__inner">
      <div className="ptf-main">
      <div className="ptf-page ptf-page--home-agency">
      {/* === HERO === */}
        <HeroMoffatt />

      {/* === SERVICES === */}
      <section>
      
      {/* -SPCR- */}
      <div 
        className="ptf-spacer" 
        style={{ "--ptf-xxl": "7rem", "--ptf-md": "5rem" }}>
      </div>
      
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-3">
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <h2 className="h1 medium-heading">Join Us!</h2>

              {/* -SPCR- */}
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

            {/* -SPCR- */}
            <div
              className="ptf-spacer"
              style={{
                "--ptf-lg": "4.375rem",
                "--ptf-md": "2.1875rem",
              }}
            ></div>

          </div>

          <div className="col-lg-8 offset-lg-1">
            <MoffattService />
          </div>
        </div>
      </div>

      {/* -SPCR- */}
      <div
        className="ptf-spacer"
        style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
      ></div>

      </section>
          
          {/* Brief About */}

            <MoffattHomeAbout />

              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
              ></div>

            {/*=============================================
          Events section
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
                    <MoffattEvents />
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
          Start Brand section
          ============================================== */}

          <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row col-md-8 offset-md-1">
                  <div className="col-lg-5 offset-lg-1">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2 className="text-uppercase fw-semibold">
                        Our Sponsors<br />& Benefactors
                      </h2>
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-lg-5">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": " 0.625rem",
                        "--ptf-lg": "1.875rem",
                      }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="has-3-color">
                        Thank you to the following businesses for your support of the Moffatt-Ladd House & Garden! 
                      </p>
                    </div>
                  </div>
                  {/* End .col */}
                </div>
                {/* End .row */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                ></div>

                <div className="row">
                  <div className="col-lg-10 offset-lg-1">
                    {/* <!--Clients List--> */}
                    <MoffattSponsors />
                  </div>
                </div>
                {/* End .row */}
              </div>
              {/* End .container-xxl */}

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
            </section>


            {/*=============================================
          Start Footer section
          ============================================== */}
            {/* <footer className="ptf-footer ptf-footer--style-3">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 offset-xl-1">
                    <div className="ptf-footer__top">
                      <MoffattFooter />
                    </div> */}
                    {/* End .ptf-footer__top */}

                    {/* <div className="ptf-footer__bottom">
                      <CopyRightTwo />
                    </div> */}
                    {/* End .ptf-footer__bottom */}
                  {/* </div>
                </div>
              </div>
            </footer> */}
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
