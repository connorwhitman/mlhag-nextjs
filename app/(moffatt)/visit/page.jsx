import Link from "next/link";
import Image from "next/image";
import ServiceMoffatt from "@/components/moffatt/services/ServiceMoffatt";

export const metadata = {
  title: "Visit | Moffatt-Ladd House & Garden",
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
                <div className="row align-items-top">
                  <div className="col-xl-6 offset-xl-1 col-lg-8">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading has-accent-1">Visit Us</h1>
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
                              If you’re interested in renting the garden for a
                              special event, scheduling group tours or school
                              tours, please email us at{" "}
                              <a
                                href="mailto:director@moffattladd.org"
                                className="has-accent-5"
                              >
                                director@moffattladd.org
                              </a>{" "}
                              or call{" "}
                              <a
                                href="tel:603-430-7968"
                                className="has-accent-5"
                              >
                                (603) 430-7968
                              </a>
                            </p>

                            {/* NEED LINK TO DOWNLOAD MEMBERSHIP FORM */}
                            <p>
                              <strong>
                                Tour reservations are not accepted except for
                                larger groups. Groups of 10 or more must
                                schedule ahead of time
                              </strong>
                              <br />
                              <em>
                                Please check our Facebook page for the latest
                                updates.
                              </em>
                            </p>
                            <h3 className="mt-4 has-accent-1">Hours</h3>
                            <div
                              className="ptf-divider mb-4"
                              style={{ "--ptf-color": "hsl(215, 37%, 40%)" }}
                            ></div>
                            <div className="mb-1">
                              <h6>June 1 – Oct. 15 2024</h6>
                              <p>
                                Every day except Wednesdays 11 a.m. to 4 p.m.
                                Tours every 45 minutes starting at 11 a.m. with
                                the last tour at 3:15 p.m.
                                <br />
                                Advance reservations or tickets are not
                                necessary/required. We do not have the capacity
                                to take reservations – please just show up!
                              </p>
                              <p>
                                <em>
                                  Please check our{" "}
                                  <a
                                    href="http://www.facebook.com/moffattladd"
                                    className="has-accent-5"
                                  >
                                    Facebook
                                  </a>{" "}
                                  page for updates on early closings or late
                                  openings, and for special free admission days.
                                </em>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4">
                    <h4>Pricing</h4>
                    <ul className="mt-2">
                      <li>
                        <strong>Adults: </strong>$12
                      </li>
                      <li>
                        <strong>Seniors (65+): </strong>$10
                      </li>
                      <li>
                        <strong>Children (7-12): </strong>$8
                      </li>
                      <li>
                        <strong>Children (6 and under): </strong> FREE
                      </li>
                      <li>The Garden is open for FREE during open hours </li>
                    </ul>
                    <p className="mt-4">
                      Members of the Friends of the Moffatt-Ladd House and
                      Garden receive free admission passes to the house and
                      garden and invitations to special programs. Shop discounts
                      and discounts on other programs are available to members
                      joining at the Family level or higher. See our
                      <Link href="/membership" className="has-accent-5">
                        {" "}
                        Membership
                      </Link>{" "}
                      page for further details.
                    </p>
                    <iframe
                      width="425"
                      height="450"
                      style={{ border: 0 }}
                      loading="lazy"
                      allowfullscreen
                      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJd-VNUwm_4okRRxkLypPSLvI&key=AIzaSyB_olKFaAouNSHpLWUrBU_NQf_AK63FXhE"
                    ></iframe>
                    <div
                      className="ptf-divider mb-3"
                      style={{ "--ptf-height": "1px", "--ptf-color": "#999" }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
            <div
              className="ptf-divider-center mt-4"
              style={{ "--ptf-width": "50%" }}
            ></div>
            <div className="container col-6 offset-3 mt-5">
              <h4>Group Tours</h4>
              <p>
                If you are interested in scheduling a group or school tour,
                please contact us at education@moffattladd.org. Group tours
                (groups of 10 or more) are available from April through
                mid-November by appointment only.
              </p>
              <div
                className="ptf-divider mb-3"
                style={{ "--ptf-height": "1px", "--ptf-color": "#999" }}
              ></div>
              <h4>Directions & Parking</h4>
              <p>
                From Interstate 95, North or South, take Exit 7, Downtown
                Portsmouth, Historic Sites. From the South, take a right at the
                end of the exit ramp, from the North, take a left at the end of
                the exit ramp. You will be on Market Street. The Moffatt-Ladd
                House is at 154 Market Street. The most convenient parking is at
                the Municipal Parking Garage at the corner of High and Hanover
                streets, just 1/2 block from the Moffatt-Ladd House. Parking
                rates are $0.75 per hour. On-street parking is $0.75 per hour.
                The Moffatt-Ladd House and Garden is site #7 on the map shown
                below.
              </p>
              <h6>Parking</h6>
              <p>
                Parking is available on-street or in the High Hanover Garage
                just one block from the Moffatt-Ladd House, and in the new
                Foundry Place Garage which is four blocks away.
                <strong>
                  Handicapped parking is available on advanced request – please
                  call the office at (603) 430-7968 during the week to make
                  arrangements.
                </strong>
              </p>
              <p>
                On-street parking is difficult in the Summer, but more available
                in the Fall. Meters across from the Moffatt-Ladd House & Garden
                are three-hour meters. Meters are in operation from 9AM-8PM
                Monday through Saturday and from 12 noon to 8PM on Sunday. Most
                metered spaces are controlled by muni-meters spaced along the
                street. The muni-meters take change, bills, and credit cards.
                They dispense tickets noting the expiration time of your parking
                which must be displayed on the dashboard of your car.
              </p>
              <h6 className="mt-3 mb-1">Helpful Links</h6>
              <ul>
                <li>
                  <a
                    href="www.cityofportsmouth.com/publicworks/parkportsmouth/hanover-parking-garage"
                    className="has-accent-5"
                  >
                    Hanover Garage
                  </a>
                </li>
                <li>
                  <a
                    href="www.cityofportsmouth.com/publicworks/parkportsmouth/foundry-place-garage"
                    className="has-accent-5"
                  >
                    Foundry Garage
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="ptf-divider-center mt-4"
              style={{ "--ptf-width": "50%", "--ptf-color": "#999", "--ptf-height": "1px"}}
            ></div>
            <section>
              <div className="container col-8 offset-2 mt-4">
                <div className="row">
                  <div className="col-5 offset-1">
                    <h4>The Museum Office</h4>
                    <p>
                      To reach the office, please contact us at (603) 430-7968.
                      If you are interested in renting our facilities for an
                      event (June through Oct.), please contact Mikaela Reisman
                      at{" "}
                      <a
                        href="mailto:outreach@moffattladd.org"
                        className="has-accent-5"
                      >
                        outreach@moffattladd.org
                      </a>
                      . 
                      <span style={{color: "red"}}>If you are interested in scheduling a group or school
                      tour, please contact us at Maddie Beihl at
                      education@moffattladd.org. </span>
                      Group tours (groups of 10 or
                      more) are available from April through mid-November by
                      appointment only.
                    </p>
                  </div>

                  <div className="col-5">
                    <h4>The Shop</h4>
                    <p>
                      While you are here, please plan to visit the Moffatt-Ladd
                      House gift shop. We have heirloom plants for sale
                      throughout the season from our extensive garden, as well
                      as seedlings from the Whipple Horsechestnut tree, dubbed
                      “The Tree of Independence” by Famous and Historic Trees.
                    </p>
                    <p>
                      We also have a variety of Moffatt-Ladd House & Garden
                      merchandise including mugs, china coasters, Cat’s Meow
                      houses and ornaments, linen towels, and tote bags.
                    </p>
                    <p>
                      The Moffatt-Ladd House: From Mansion to Museum ($15) tells
                      the story of the history of the house and its restoration
                      and includes more detailed catalog entries on twenty-five
                      objects from the museum’s collection. Alexander H. Ladd’s
                      Garden Book, 1888-1895: A 19th Century View of Portsmouth
                      ($20) includes a full transcription of Ladd’s diary as
                      well as period photographs and essays on the garden’s
                      history. Both are available by mail for an additional
                      charge.
                    </p>
                    <p>
                      The shop also carries a variety of related books and gifts
                      for both adults and children.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div
              className="ptf-divider-center mt-4"
              style={{ "--ptf-width": "50%", "--ptf-color": "#999", "--ptf-height": "1px"}}
            ></div>
            <section>
              <div className="col-6 offset-3 mt-4">
                <h4>Related Websites</h4>
                <p>
                  Portsmouth, NH, is a great destination for lovers of history,
                  nature, fine dining, kayaking, bicycling, and fine arts and
                  contemporary crafts galleries. Two tour boat companies
                  offering harbor and river cruises operate from the wharves
                  just below the Moffatt-Ladd House. Portsmouth, in tax-free New
                  Hampshire, is also a great place to shop.
                </p>
                <p>
                  The Moffatt-Ladd House and Garden is a member of Portsmouth
                  Historic House Associates, is a site on Portsmouth’s Black
                  Heritage Trail and Harbor Trail, and is a member of the NH
                  Heritage Museum Trail.
                </p>
                <p>
                  New this season! Moffatt-Ladd is now a member of North
                  American Reciprocal Museum Association (NARM), which means
                  that members at the NARM level and above have free admission
                  and even more benefits at all NARM museums!
                </p>
                <p>
                  For more information on restaurants, hotels, and shopping,
                  visit:{" "}
                  <a
                    href="https://www.cityofportsmouth.com/"
                    className="has-accent-5"
                  >
                    https://www.cityofportsmouth.com/
                  </a>
                </p>
                <p>
                  For more information on Portsmouth’s historic house museums
                  and sites, visit:{" "}
                  <a
                    href="https://www.portsmouthhistoric.org/"
                    className="has-accent-5"
                  >
                    https://www.portsmouthhistoric.org/
                  </a>
                </p>
                <p>
                  For more information on Portsmouth’s Black Heritage Trail,
                  visit:{" "}
                  <a
                    href="https://blackheritagetrailnh.org/"
                    className="has-accent-5"
                  >
                    https://blackheritagetrailnh.org/
                  </a>
                </p>
                <p>
                  For more information on NARM, visit:
                  <a
                    href="https://narmassociation.org/"
                    className="has-accent-5"
                  >
                    https://narmassociation.org/
                  </a>
                </p>
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
