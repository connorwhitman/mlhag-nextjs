import Link from "next/link";
import HeroHomeMoffatt from "@/components/moffatt/heros/HeroHomeMoffatt";
import AboutHomeMoffatt from "@/components/moffatt/home/AboutHomeMoffatt";
import ServiceMoffatt from "@/components/moffatt/services/ServiceMoffatt";
import EventsMoffatt from "@/components/moffatt/events/EventsMoffatt";
import SponsorsMoffatt from "@/components/moffatt/sponsors/SponsorsMoffatt";

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
    { text: "Plan Your Visit", link: "/visit", accent: true },
    { text: "Membership", link: "/membership", accent: false },
    { text: "Donate", link: "/Donate", accent: false },
  ],
};

const HomeMoffatt = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-moffatt">
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
              style={{ "--ptf-xxl": "2rem", "--ptf-md": "2rem" }}
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

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMoffatt;
