import Image from "next/image";
import Link from "next/link";
import RentalFaqs from "@/components/moffatt/services/RentalFaq";

export const metadata = {
  title: "Rentals | Moffatt-Ladd House & Garden",
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
              <div className="container-xl">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h1 className="large-heading text-center has-accent-4">
                    Rentals
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
                      Join Us for Your Event
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
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h4 className="mb-3">Garden Rentals</h4>
                    <p>
                      The garden may be rented for functions and is a
                      particularly lovely setting for weddings, wedding
                      receptions, anniversary parties, and more. Please take a
                      look at our FAQ section below, which will hopefully answer
                      many of your initial questions, or click the link below to
                      learn more about the Garden at Moffatt Ladd.
                    </p>
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-xxl": "3.1rem",
                        "--ptf-xl": "3.3rem",
                        "--ptf-md": "3rem",
                      }}
                    ></div>

                    <Image
                      width={768}
                      height={432}
                      alt=""
                      loading="lazy"
                      src="/assets/img/moffatt/rentals/garden-rental.jpg"
                      className="mt-4"
                    />
                    <div className="text-center">
                    <Link
                      className="ptf-btn ptf-btn--primary mt-5"
                      href="/visit/garden"
                    >
                      The Garden
                    </Link>
                    </div>
                  </div>
                  <div className="col-md-6 mt-4">
                    <h4 className="mb-3">Warehouse Rentals</h4>
                    <p>
                      The Moffatt-Ladd Warehouse is available for rentals,
                      including weddings, cocktails, and other parties,
                      meetings, lectures, and presentations. The building can
                      accommodate up to 90 people standing and approximately 50
                      people seated. We also have AV equipment available to use
                      for your presentation needs. Please take a look at our FAQ
                      section below, which will hopefully answer many of your
                      initial questions.
                    </p>
                    <Image
                      width={768}
                      height={432}
                      alt=""
                      loading="lazy"
                      src="/assets/img/moffatt/rentals/warehouse-rental.jpg"
                      className="mt-4"
                    />
                    <div className="text-center">
                      <Link
                        className="ptf-btn ptf-btn--primary mt-5"
                        href="/collections/warehouse"
                      >
                        The Warehouse
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="ptf-divider-center mt-5 mb-4"
                  style={{
                    "--ptf-width": "40%",
                    "--ptf-height": "2px",
                    "--ptf-color": "#222",
                  }}
                ></div>
                <div className="col-lg-8 offset-lg-2">
                  <h6 className="text-center">
                    If you are interested in renting our space for a private
                    event in 2024, please call or email Mikaela Reisman,
                    Operations Manager, at {" "}
                    <a href="tel:603-430-7968" className="has-accent-5">
                      (603) 430-7968
                    </a>{" "}
                    or{" "}
                    <a
                      href="mailto:outreach@moffattladd.org"
                      className="has-accent-5"
                    >
                      outreach@moffattladd.org
                    </a>{" "}
                    for more information on rates and availability.
                  </h6>
                </div>
                <div
                  className="ptf-divider-center mt-4 mb-5"
                  style={{
                    "--ptf-width": "40%",
                    "--ptf-height": "2px",
                    "--ptf-color": "#222",
                  }}
                ></div>
              </div>
            </section>
            <section>
              <div className="container">
                <div className="row">
                  <div className="ptf-single-post__excerpt col-8 offset-2">
                    <ul className="fz-16">
                      <li>A site visit is strongly recommended</li>
                      <li>Reservations are required for site visits.</li>
                      <li>
                        Please reach out to{" "}
                        <a href="mailto:outreach@moffattladd.org">
                          <span className="has-accent-1">Mikaela</span>
                        </a>{" "}
                        with enough notice to book your appointment. We cannot
                        accommodate unannounced visitors. We apologize for any
                        inconvenience.
                      </li>
                      <li>
                        Please do not fill out any form and send in payment
                        without corresponding with our Development and Outreach
                        Manager first.
                      </li>
                      <li>
                        Reservations are not valid until the Operations Manager has given confirmation.
                      </li>
                    </ul>
                  </div>
                </div>
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
            <section>
              <div className="container">
                <RentalFaqs />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
