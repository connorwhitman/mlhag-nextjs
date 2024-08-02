import Image from "next/image";
import Link from "next/link";
import ServiceMoffatt from "@/components/moffatt/services/ServiceMoffatt";

export const metadata = {
  title: "Donate | Moffatt-Ladd House & Garden",
};

const AboutUs = () => {
  return (
    <div className="ptf-site-wrapper animsition  ptf-is--about-us">
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
                  <h1 className="large-heading text-center has-accent-4">
                    Donations
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
                    <h2 className="fz-28 fz-18--md fw-bold text-uppercase has-accent-1 text-center">
                      Support the Moffatt-Ladd House
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-4">
                <Image
                  src="/assets/img/moffatt/molding-banner.jpg"
                  width={1920}
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

            {/* === INTRO === */}
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-8 offset-2">
                    <p className="fz-20">
                      We hope you’ll consider donating to support the
                      Moffatt-Ladd House & Garden, a National Historic Landmark,
                      owned and operated by The National Society of The Colonial
                      Dames of America in the State of New Hampshire, a
                      501(c)(3) not-for-profit charitable organization.
                      Donations like yours help us to tackle essential
                      preservation needs while also helping to support exciting
                      new projects and programs that are offered to the public.
                    </p>
                    <p className="fz-20">
                      Donations can be made through the Zeffy form below, or you
                      can send a check made out to the Moffatt-Ladd House &
                      Garden and mail it to{" "}
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=154+market+street+portsmouth+nh+03801&query_place_id=ChIJd-VNUwm_4okRRxkLypPSLvI"
                        className="has-accent-5"
                      >
                        154 Market Street, Portsmouth, NH 03801
                      </a>
                      . If you have any questions or would like to make a
                      donation of stock, please call the Moffatt-Ladd office at
                      <a href="tel:603-430-7968" className="has-accent-5">
                        {" "}
                        (603) 430-7968
                      </a>{" "}
                      or email Mikaela Reisman at{" "}
                      <a
                        href="mailto:outreach@moffattladd.org"
                        className="has-accent-5"
                      >
                        outreach@moffattladd.org
                      </a>
                    </p>
                    <p className="fz-20">
                      Your donation is tax-deductible to the fullest extent
                      allowed by law. Thank you for your support!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="ptf-divider-center mt-5"
              style={{
                "--ptf-width": "40%",
                "--ptf-height": "2px",
                "--ptf-color": "#222",
              }}
            ></div>

            <section>
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  height: "1200px",
                  width: "100%",
                }}
              >
                <iframe
                  title="Donation form powered by Zeffy"
                  style={{
                    position: "absolute",
                    border: 0,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%",
                  }}
                  src="https://www.zeffy.com/embed/donation-form/fd995573-1f4f-4bbe-8abd-f0a3b57a1327"
                  allowpaymentrequest="true"
                  allowtransparency="true"
                ></iframe>
              </div>
            </section>

            <div
              className="ptf-divider-center mb-5"
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
