import Link from "next/link";
import HeroHomeMoffatt from "@/components/moffatt/heros/HeroHomeMoffatt";
import AboutHomeMoffatt from "@/components/moffatt/home/AboutHomeMoffatt";
import ServiceMoffatt from "@/components/moffatt/services/ServiceMoffatt";
import EventsMoffatt from "@/components/moffatt/events/EventsMoffatt";
import SponsorsMoffatt from "@/components/moffatt/sponsors/SponsorsMoffatt";

export const metadata = {
  title: {
    absolute: 'Moffatt-Ladd House & Garden | A Portsmouth Historic Landmark',
  },
}

const heroData = {
  accentTitle: "Moffatt-Ladd",
  title: "House & Garden",
  subtitle: "A National Historic Landmark open to the public as a museum since 1912",
  buttons: [
    {text: "Plan Your Visit", link: "/visit", accent: true},
    {text: "Membership", link: "/membership", accent: false},
    {text: "Donate", link: "/Donate", accent: false},
  ]
}



const HomeMoffatt = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-moffatt">
      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-agency">

            {/* === HERO === */}
            <HeroHomeMoffatt heroData={heroData} />

            {/* -SPCR- */}
            <div className="ptf-spacer" style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
            ></div>

            {/* === SERVICES === */}
            <ServiceMoffatt />

            {/* -SPCR- */}
            <div className="ptf-spacer" style={{ "--ptf-xxl": "2rem", "--ptf-md": "2rem" }}
            ></div>

            {/* === ABOUT === */}
            <AboutHomeMoffatt />

            {/* -SPCR- */}
            <div className="ptf-spacer" style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
            ></div>

            {/* === EVENTS === */}
            
                  
                    <EventsMoffatt />
                  

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
                        Our Sponsors
                        <br />& Benefactors
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
                        Thank you to the following businesses for your support
                        of the Moffatt-Ladd House & Garden!
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
                    <SponsorsMoffatt />
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

export default HomeMoffatt;
