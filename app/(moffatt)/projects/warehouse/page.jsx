import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Warehouse | Moffatt-Ladd House & Garden",
};

const Warehouse = ({ params }) => {
  let pageItem = {
    img: "/assets/img/moffatt/collections/moffatt-warehouse-thumbnail.jpg",
    title: "The Moffatt-Ladd Warehouse",
  };

  if (params.id) {
    const item = allportfolioContent.filter((elm) => elm.id == params.id)[0];

    if (item) {
      pageItem = item;
    }
  }

  return (
    <div className="ptf-site-wrapper ptf-is--work-showcase-1">
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <div className="main">
          <article className="ptf-page ptf-page--single-work-1">
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-lg">
                <div className="row">
                  <div className="col-xl-10">

                  <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading has-accent-1">{pageItem.title || "Moffatt-Ladd House & Garden"}</h1>
                      <div
                              className="ptf-divider mt-2"
                              style={{ "--ptf-color": "hsl(215, 37%, 40%)" }}
                            ></div>
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
                  {/* End .col */}
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.25rem", "--ptf-md": "1rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Simple Image--> */}
                  <div className="ptf-simple-image  container widthfull">
                    <Image
                      width={1200}
                      height={1200}
                      style={{ width: "100%", height: "100%" }}
                      src={
                        pageItem.img ||
                        pageItem.imgPopup ||
                        "/assets/img/moffatt/collections/moffatt-yellow-chamber.jpg"
                      }
                      alt="The Moffatt-Ladd Warehouse"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="col-8 offset-2">
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h4 className="fz-30 has-black-color">
                    Learn about our rare 18th century warehouse and its
                    restoration!
                  </h4>
                  <p>
                    The Moffatt-Ladd Warehouse is a rare survival of a
                    merchant’s store and warehouse from the 18th century. It was
                    modified with the addition of a carriage bay and doors at
                    the front, probably about 1790. Archaeological evidence
                    suggests that it was moved to its current site about 1840,
                    and we suspect that it originally stood on a nearby
                    property, perhaps within the same block as the Moffatt-Ladd
                    House. We interpret the space as a Warehouse and store, and
                    offer activities related to its use for school and camp
                    groups, some of which are designed to be available
                    throughout the season to all families and visitors coming to
                    the site.
                  </p>
                  <p>
                    The Warehouse is a great venue for a variety of different
                    programs. Its versatility has made it possible for us to
                    offer a wide range of programs, including overnights for
                    Girl Scout troops (through the Girl Scouts of the Green and
                    White Mountains), Pirate Camp, lectures, and concerts. We
                    also welcome non profits and other groups to consider
                    partnering with us to bring a special event to the public —
                    as we do with the New Hampshire Film Festival and Portsmouth
                    Maritime Folk Festival, and the Piscataqua Maritime
                    Commission — or to rent the space for your own program or
                    celebration.
                  </p>
                  <p>
                    <Link href="/rentals" className="has-accent-5">
                      The Warehouse is also available for private rentals.
                    </Link>
                  </p>
                </div>
                {/* <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5rem", "--ptf-md": "3.125rem" }}
                ></div> */}
              </div>
              <div
                className="ptf-divider-center my-5"
                style={{
                  "--ptf-height": "1px",
                  "--ptf-color": "#99c",
                  "--ptf-width": "35%",
                }}
              ></div>
              <div className="row mb-5">
                <div className="col-6">
                  <h4>
                    Story and Purpose of the Project to Restore and Rehabilitate
                    the Warehouse, 2008-2009
                  </h4>
                  <p>
                    The Grand Ribbon Cutting ceremony opening the restored
                    Warehouse took place on May 31, 2009. The project was made
                    possible through the generous support of the 1772
                    Foundation, the Lane & Elizabeth Dwinell Charitable Trust,
                    the Felicia Fund, the Arthur P. Getz Foundation, and New
                    Hampshire’s Land and Community Heritage Investment programs,
                    and more than 100 private and corporate donors.
                  </p>
                  <p>
                    We are still adding to the educational components of the
                    building. If you are a donor or business interested in
                    sponsoring three large interpretive panels, please contact
                    the office of the Moffatt-Ladd House and Garden at (603)
                    430-7968 to see how you can help, or visit our Donate Now
                    page to make a contribution using your credit card. Thank
                    you for your interest in the Moffatt-Ladd House and Garden.
                  </p>
                </div>
                <div className="col-6">
                  <h4> Story of the Restoration</h4>
                  <p>
                    In 2005 it became evident that the building then known as
                    the Coach House was in a serious state of disrepair. Thus
                    began an ambitious project to restore this rare 18th century
                    outbuilding (far left in ca. 1885 photograph) which is one
                    of a few colonial-era shops or warehouses to survive on the
                    New Hampshire Seacoast. New Hampshire’s State Architectural
                    Historian describes the Warehouse as a “rare and significant
                    structure.” Its restoration was an act of remarkable
                    dedication to the principles of historic preservation, by
                    The National Society of The Colonial Dames of America in the
                    State of New Hampshire, which owns the site, and has
                    operated the Moffatt-ladd House & Garden as a museum since
                    1912.
                  </p>
                  <p>
                    Skilled artisans have restored the building, using the
                    latest restoration techniques to update the sills, girts,
                    and posts of the timber-frame building. Original material
                    was retained and reused as much as possible. Lumber from an
                    ash tree, removed from the adjacent hillside, was used to
                    construct the beautiful and durable new floor of the
                    Warehouse.
                  </p>
                  <p>
                    Between April and August 2008 the building was lifted to
                    allow for the excavation of a foundation and perimeter
                    drainage. Prior to this work being done, archaeological
                    investigations and paint analysis revealed that the
                    structure has been on its present site since approximately
                    1840. The new, modern foundation of the building has been
                    faced with stone, to help preserve its historic character.
                    The building is now heated and available for use from April
                    through mid-November.
                  </p>
                  <p>
                    In addition to the restoration of the historic space, the
                    project also included the construction of a lean-to addition
                    with modern storage in the Goss Collections Center, and
                    audio-visual equipment and storage for function furniture
                    and garden equipment. The building is handicap accessible
                    via a ramp located in the lean-to section of the building. A
                    retractable screen and built-in projector make it an ideal
                    location for power-point presentations. The wooden interior
                    creates an acoustic environment that makes it a favorite for
                    acoustic music.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
