import Link from "next/link";
import HeroHomeMoffatt from "@/components/moffatt/heros/HeroHomeMoffatt";
import AboutHomeMoffatt from "@/components/moffatt/home/AboutHomeMoffatt";
import ServiceMoffatt from "@/components/moffatt/services/ServiceMoffatt";
import EventsMoffatt from "@/components/moffatt/events/EventsMoffatt";
import SponsorsMoffatt from "@/components/moffatt/sponsors/SponsorsMoffatt";
import MoffattSupporters from "@/components/moffatt/sponsors/MoffattSupporters";

export const metadata = {
  title: {
    absolute: "Moffatt-Ladd House & Garden | A Portsmouth Historic Landmark",
  },
};

const heroData = {
  accentTitle: "Moffatt-Ladd",
  title: "House & Garden",
  subtitle:
    "A National Historic Landmark open to the public as a museum since 1912",
  buttons: [
    { text: "Visit Us", link: "/visit", accent: true },
    { text: "Membership", link: "/membership", accent: false },
    { text: "Donate", link: "/Donate", accent: false },
  ],
};

const HomeMoffatt = () => {
  return (
    <div className="ptf-site-wrapper ptf-is--home-moffatt">
      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-agency">
            {/* === HERO === */}
            <HeroHomeMoffatt heroData={heroData} />

            {/* -SPCR- */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
            ></div>

            {/* === SERVICES === */}
            <ServiceMoffatt />

            {/* -SPCR- */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "3rem", "--ptf-md": "3rem" }}
            ></div>

            {/* === ABOUT === */}
            <AboutHomeMoffatt />

            {/* -SPCR- */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
            ></div>

            {/* === EVENTS === */}
            <EventsMoffatt />

            <div className="container">
              <div className="ptf-divider"></div>
            </div>

            {/* === SPONSORS === */}
            <SponsorsMoffatt />
            <section>
              <div className="container-xl">
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4rem", "--ptf-md": "4rem" }}
                ></div>


                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "4.75rem",
                      "--bs-gutter-y": "4.75rem",
                    }}
                  >
                    <MoffattSupporters />
                  </div>
                </div>
              </div>
            </section>
            
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
            ></div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMoffatt;
