import Link from "next/link";
import Image from "next/image";
import ServiceMoffatt from "@/components/moffatt/services/ServiceMoffatt";

export const metadata = {
  title: "Membership | Moffatt-Ladd House & Garden",
};

const Garden = () => {
  return (
    <div className="ptf-site-wrapper">
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
                <div className="row align-items-top">
                  <div className="col-xl-6 offset-xl-1 col-lg-8">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading has-accent-1">Membership</h1>
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
                              className="ptf-divider mb-5 mt-2"
                              style={{ "--ptf-color": "hsl(215, 37%, 40%)" }}
                            ></div>

                            <p>
                              Join the Friends of the Moffatt-Ladd House and
                              Garden for invitations to special events; shop,
                              rental, and program discounts, and free tour
                              tickets.
                            </p>

                            {/* NEED LINK TO DOWNLOAD MEMBERSHIP FORM */}
                            <p>
                              To become a member of the Friends of the
                              Moffatt-Ladd House, you may pay by credit card by
                              clicking the button below or by filling out and
                              mailing in the membership form. To join over the
                              phone, or if you have any questions, please call
                              <a
                                href="tel:603-430-7968"
                                className="has-accent-5"
                              >
                                {" "}
                                (603) 430-7968
                              </a>
                              . You may also contact us by e-mail:{" "}
                              <a
                                href="mailto:info@moffattladd.org"
                                className="has-accent-5"
                              >
                                info@moffattladd.org
                              </a>
                            </p>
                            <h3 className="mt-4 has-accent-1">
                              Friends' Levels & Benefits
                            </h3>
                            <div
                              className="ptf-divider mb-4"
                              style={{ "--ptf-color": "hsl(215, 37%, 40%)" }}
                            ></div>
                            <div className="mb-1">
                              <h6>Friend – Individual: $35</h6>
                              <ul>
                                <li>
                                  Free admission to Moffatt-Ladd House & Garden
                                </li>
                                <li>10% discount at shop and on plants</li>
                                <li>
                                  Invitations to Moffatt-Ladd events & programs
                                </li>
                              </ul>
                            </div>
                            <div className="mb-1">
                              <h6>Friend - Family: $50</h6>
                              <ul>
                                <li>All of the above, PLUS:</li>
                                <li>
                                  Admission for two adults and children (under
                                  18)
                                </li>
                              </ul>
                            </div>
                            <div className="mb-1">
                              <h6>Patron: $100</h6>
                              <ul>
                                <li>All of the above, PLUS:</li>
                                <li>Four (4) one-time guest passes</li>
                                <li>
                                  Complementary NARM (North American Reciprocal
                                  Museum Association) membership*
                                </li>
                              </ul>
                            </div>
                            <div className="mb-1">
                              <h6>Benefactor: $250</h6>
                              <ul>
                                <li>All of the above, PLUS:</li>
                                <li>20% discount at gift shop and on plants</li>
                                <li>
                                  Your name or corporate logo on our website
                                </li>
                              </ul>
                            </div>
                            <div className="mb-1">
                              <h6>Sponsor: $500</h6>
                              <ul>
                                <li>All of the above, PLUS:</li>
                                <li>Four additional guest passes (8 total)</li>
                                <li>
                                  10% discount on site rental for wedding or
                                  corporate/social event
                                </li>
                              </ul>
                            </div>
                            <div className="mb-2">
                              <h6>General Whipple Circle: $1000</h6>
                              <ul>
                                <li>All of the above, PLUS:</li>
                                <li>Private tour for up to ten (10) people</li>
                                <li>15% discount on site rentals</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <div
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        height: "1300px",
                        width: "100%",
                        paddingTop: "1038px",
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
                        src="https://www.zeffy.com/embed/ticketing/8a77416d-9b29-40df-b1e6-56f7e85347c4"
                        allowpaymentrequest="true"
                        allowtransparency="true"
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <div className="mt-4 mb-4">
                    <p>
                      *NARM reciprocal benefits include: free/members admission
                      price, discounts in the shop, and discounts on ticketed
                      events at all NARM member organizations! Visit
                      <a
                        href="https://narmassociation.org/"
                        className="has-accent-5"
                      >
                        https://narmassociation.org/
                      </a>{" "}
                      for more information.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "3rem", "--ptf-md": "3rem" }}
            ></div>
            
            <ServiceMoffatt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garden;
