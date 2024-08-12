import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The Garden | Moffatt-Ladd House & Garden",
};

const Garden = () => {
  return (
    <div className="ptf-site-wrapper">
      <div className="ptf-site-wrapper__inner">
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "4.25rem", "--ptf-md": "6.125rem" }}
        ></div>
        <div className="ptf-main">
          <div className="ptf-page ">
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "4.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row align-items-top">
                  <div className="col-xl-6 offset-xl-1 col-lg-8">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading has-accent-1">The Garden</h1>
                    </div>
                    <div className="row">
                      <div className="col-xl-10">
                        <div className="ptf-single-post__content">
                          <div
                            className="ptf-animated-block"
                            data-aos="fade"
                            data-aos-delay="200"
                          >
                            <div className="ptf-divider mb-5"
                            style={{"--ptf-color": "hsl(215, 37%, 40%)"}}></div>

                            <p>
                              The Garden was laid out in its present form by
                              Alexander Hamilton Ladd in the late nineteenth
                              century. His daily records reveal that he obtained
                              plants from the gardens of his mother and
                              grandmother and that he was an enthusiastic bulb
                              gardener.
                            </p>
                            <p>
                              A 300-foot axis path flanked by formal gardens
                              leads from the house up four terraces to a
                              wrought-iron gate at the rear boundary. Grass
                              steps lead to the upper flower beds.
                            </p>
                            <p>
                              An English damask rose planted in 1768 by Sarah
                              Catherine Mason Moffatt and the enormous horse
                              chestnut tree planted in 1776 by General William
                              Whipple upon his return from signing the
                              Declaration of Independence can still be seen
                              today. The horse chestnut tree was designated the
                              Millennium Landmark Tree for the State of New
                              Hampshire in 2000, and is on the National Register
                              of Historic Trees.
                            </p>
                            <p>
                              The Garden may be rented for weddings, wedding
                              receptions, birthday parties, and other similar
                              functions. Please see the Rental page for more
                              information.
                            </p>
                            <Link
                              className="ptf-btn ptf-btn--secondary mt-5"
                              href="/rentals"
                            >
                              Plan Your Visit!
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
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
                        <Image
                          width={1200}
                          height={1200}
                          src="/assets/img/moffatt/moffatt-garden-cropped.jpg"
                          alt="Moffatt-Ladd Garden"
                          loading="lazy"
                          className="d-none d-lg-block"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>

            <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3rem", "--ptf-md": "3rem" }}
              ></div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Garden;
