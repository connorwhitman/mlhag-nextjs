import ServiceMoffatt from "@/components/moffatt/services/ServiceMoffatt";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Education | Moffatt-Ladd House & Garden",
};

const AboutUs = () => {
  return (
    <div className="ptf-site-wrapper ptf-is--about-us">
      <div className="ptf-site-wrapper__inner">
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "6.125rem" }}
        ></div>

        <div className="ptf-main">
          <div className="ptf-page">
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "4.25rem", "--ptf-md": "4.125rem" }}
            ></div>

            {/* === HERO === */}
            <section>
              <div className="container-xxl">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h1 className="large-heading text-center has-accent-1">
                    Employment
                  </h1>
                </div>
                <div
                  className="ptf-divider-center mt-1 mb-3"
                  style={{ "--ptf-width": "15%", "--ptf-height": "3px" }}
                ></div>
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="50"
                >
                  <div className="col-6 offset-3">
                    <h2 className="fz-28 fz-18--md fw-bold text-uppercase has-accent-4 text-center">
                      Join our great team
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <Image
                  src="/assets/img/moffatt/molding-banner.jpg"
                  width={4096}
                  height={100}
                  alt="alt"
                  loading="lazy"
                />
              </div>
            </section>

            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "3rem", "--ptf-md": "3rem" }}
            ></div>

            <section>
              <div className="container">
                <div className="col-8 offset-2">
                  <h2 className="has-accent-4">Working at Moffatt-Ladd</h2>

                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
                  ></div>

                  <div className="ptf-single-post__content">
                    <p>Lorem Ipsum</p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="ptf-divider-center my-5"
              style={{
                "--ptf-width": "40%",
                "--ptf-height": "2px",
                "--ptf-color": "#222",
              }}
            ></div>

            <section>
              <div className="container">
                <div className="col-8 offset-2">
                  <h2 className="has-accent-4">Current Openings</h2>

                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
                  ></div>

                  <div className="ptf-single-post__content">
                    <p>
                      Moffatt-Ladd House & Garden is not hiring at this time,
                      please check back!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="ptf-divider-center my-5"
              style={{
                "--ptf-width": "40%",
                "--ptf-height": "2px",
                "--ptf-color": "#222",
              }}
            ></div>

            <ServiceMoffatt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
