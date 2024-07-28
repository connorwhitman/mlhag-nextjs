import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Moffatt-Ladd House & Garden || History & People",
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
            {/* === HERO === */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "4.125rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row align-items-center">
                  {/* === TEXT BLOCK === */}
                  <div className="col-xl-6 offset-xl-1 col-lg-5 offset-lg-1 col-md-5 offset-md-1">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">About Us</h1>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.8125rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <p className="fz-24 fw-bold text-uppercase has-3-color">
                        Learn the history & Heritage <br />
                        of the Moffatt-Ladd House
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2rem", "--ptf-md": "2rem" }}
                    ></div>

                    {/* === DETAIL TEXT === */}
                    <div className="row">
                      <div className="col-xl-8 col-lg-8">
                        <div style={{ maxWidth: "29.6875rem" }}>
                          {/* <!--Animated Block--> */}
                          <div
                            className="ptf-animated-block"
                            data-aos="fade"
                            data-aos-delay="200"
                          >
                            {/* <!--Divider--> */}
                            <div className="ptf-divider"></div>
                            {/* <!--Spacer--> */}

                            <div
                              className="ptf-spacer"
                              style={{
                                "--ptf-xxl": "2.375rem",
                                "--ptf-md": "2.1875rem",
                              }}
                            ></div>
                            <p className="fz-20">
                              The Moffatt-Ladd House & Garden Museum has a rich
                              history spanning centuries, and involving
                              incredible historical figures who were pivotal and
                              influential to both American and Seacoast New
                              England History.
                            </p>
                            <p className="fz-20">
                              Read on to learn some of our history, then
                            </p>
                            <div
                              className="ptf-spacer"
                              style={{
                                "--ptf-xxl": "1.375rem",
                                "--ptf-md": "1.1875rem",
                              }}
                            ></div>
                            <Link
                              className="ptf-btn ptf-btn--primary"
                              href="/visit"
                              // style={{ marginLeft: "2rem" }}
                            >
                              Plan Your Visit!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* === IMAGE === */}
                  <div className="col-xl-5 offset-xl-0 col-lg-5 offset-lg-0 col-md-5 offset-md-0">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xl": "5.625rem" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="300"
                    >
                      <div className="text-center">
                        {/* <!--Mask Image--> */}

                        <img
                          width={1200}
                          height={1200}
                          src="/assets/img/root/about-us/about-us-main-image-mask.png"
                          alt="layer"
                          loading="lazy"
                          className="lay2"
                          style={{
                            zIndex: "1",
                          }}
                          srcSet="/assets/img/moffatt/about/moffatt-about-image.jpg"
                        />
                      </div>
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

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div className="ptf-divider"></div>
              </div>
            </section>

            <section>
            <div className="ptf-single-post__wrapper">
            <div className="container-xxl">
            <div className="row">
              <div className="col-xl-8 offset-xl-2">
              <div className="fz-24">
                <p>The purpose of the Moffatt-Ladd House and Garden is to interpret
                  American, New Hampshire, and Portsmouth history through the
                  lives and possessions of the inhabitants of the house, both free
                  and enslaved.</p>
                  
                <p>The Society collects and preserves objects and
                  manuscripts appropriate to this history. The Moffatt-Ladd House
                  is a National Historic Landmark Building and a member of the
                  Great American Treasures program of NSCDA.</p>
              </div></div></div></div></div>
            </section>
          </div>
        </div>
        {/* End ptf-main */}
      </div>
    </div>
  );
};

export default AboutUs;
