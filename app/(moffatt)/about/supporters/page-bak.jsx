import Image from "next/image";
import MoffattSponsorBlock from "@/components/moffatt/sponsors/MoffattSponsorBlock";

export const metadata = {
  title: "Supporters | Moffatt-Ladd House & Garden",
};

const AboutUs = () => {
  return (
    <div className="ptf-site-wrapper ptf-is--about-us">
      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--about-us">
            <section>
              <div className="container-xxl">
                <div className="ptf-divider"></div>
              </div>
            </section>

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xl">
                <div className="row">
                  <div className="col-lg-6">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="h1 large-heading">Our Supporters</h1>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem" }}
                      ></div>
                      <p className="fz-18">Thank you to our generous supporters! If you'd like to contribute to or partner with the Moffatt-Ladd house, please Donate or Contact us for a partnership.</p>
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
                </div>
                <div className="row">
                  <MoffattSponsorBlock/>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
