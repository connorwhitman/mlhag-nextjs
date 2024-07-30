import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "The Garden || Moffatt-Ladd House & Garden",
};

const Garden = () => {
  return (
    <div className="ptf-site-wrapper animsition">
      <div className="ptf-site-wrapper__inner">
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "6.125rem" }}
        ></div>
        <div className="ptf-main">
          <div className="ptf-page ">
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row align-items-center">
                  <div className="col-xl-6 offset-xl-1 col-lg-8">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading has-accent-1">NSCDA</h1>
                    </div>
                    <div className="row">
                      <div className="col-xl-10">
                        <div className="ptf-single-post__content">
                          <div
                            className="ptf-animated-block"
                            data-aos="fade"
                            data-aos-delay="200"
                          >
                            <div
                              className="ptf-divider mb-5"
                              style={{ "--ptf-color": "hsl(215, 37%, 40%)" }}
                            ></div>

                            <p>
                              Founded in 1891,{" "}
                              <a
                                href="https://nscda.org"
                                className="has-accent-5"
                              >
                                NSCDA
                              </a>{" "}
                              is a women’s organization dedicated to educating
                              the public about American history. More than 80
                              properties nationwide are affiliated with{" "}
                              <a
                                href="https://nscda.org"
                                className="has-accent-5"
                              >
                                NSCDA
                              </a>{" "}
                              and its state societies.
                            </p>
                            <h6>About the NSCDA</h6>
                            <p>
                              The National Society of The Colonial Dames of
                              America promotes appreciation for the people,
                              places and events that led to the formation and
                              development of our country. We are an
                              unincorporated association of 44 Corporate
                              Societies with more than 15,000 members. The NSCDA
                              has been a leader in the field of historic
                              preservation, restoration and the interpretation
                              of historic sites since its New York Society first
                              undertook the preservation of the Van Cortlandt
                              House in 1897. The National Society headquarters
                              is located at Dumbarton House, a Federal period
                              house museum in Washington, D.C.
                            </p>
                            <h6 className="mt-5">Members of the Board</h6>
                            <ul className="mt-3" style={{listStyleType: "none", lineHeight: "2.5rem"}}>
                              <li><b>President</b> - Paige Trace</li>
                              <li><b>First Vice President</b> - Walker Greenwell</li>
                              <li><b>Second Vice President</b> - Phyllis Gagnon</li>
                              <li><b>Treasurer</b> - Elaine Blaylock</li>
                              <li><b>Recording Secretary</b> - Elizabeth Davis</li>
                            </ul>
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
                          src="/assets/img/moffatt/moffatt-nscda.jpg"
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
