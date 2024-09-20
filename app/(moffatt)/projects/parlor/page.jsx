import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Parlor Project | Moffatt-Ladd House & Garden",
};

const YellowChamber = ({ params }) => {
  let pageItem = {
    img: "/assets/img/moffatt/collections/moffatt-parlor.jpg",
    title: "The Parlor Project",
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
                        "/assets/img/moffatt/collections/moffatt-parlor.jpg"
                      }
                      alt="The Parlor Project"
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
                    Wallpaper Discovered in Closet
                  </h4>
                  <p>
                    Recently, we had an exciting discovery – 18th century
                    wallpaper that had been hidden behind a small false wall in
                    a closet in the Parlor of the house for 200+ years!
                  </p>
                  <p>
                    As you may recall, we’re in the middle of a long project to
                    restore the Parlor to its 18th century appearance. We’ve
                    been using 4 inventories from the family taken between 1768
                    and 1786, along with scholarly research and family
                    information. Through paint research and analysis, we
                    determined that the original color of the woodwork was a
                    dark stone color. The room has been painted to match that
                    color. A 1912 letter records a family memory that the walls
                    were papered with “heavy velvet [flock] paper with red
                    lines.” No traces of that wallpaper had been found in the
                    room itself, but removal of shelves in one of the room’s
                    closets revealed an unexpected treasure trove of portions of
                    two eighteenth century wallpapers and a narrow border! We
                    were thrilled by the discovery, but it has led to more
                    questions and not as many answers as we’d like.
                  </p>
                  <p>
                    Both patterns have large motifs in red flock and each has a
                    different background pattern printed in white on gray. We
                    are hoping someone will recognize one of these distinctive
                    background patterns that might lead us to a larger example
                    that can be reproduced. Please take a look at the pictures
                    below and if you think you might be able to help, please
                    contact us at{" "}
                    <a href="mailto:outreach@moffattladd.org" className="has-accent-5">
                      outreach@moffattladd.org
                    </a>{" "}
                    or <a href="tel:603-430-7968" className="has-accent-5">(603) 430-7968</a>.
                  </p>
                  <p>
                    We have contacted wallpaper expert Richard Nylander (who is
                    helping us on the project) and he has also sent out the
                    word. We are in the process of preserving the wallpaper
                    samples and afterward we’ll determine how to best display
                    the discovery for our visitors.
                  </p>
                  <p>
                    Restoration projects are always exciting and we can’t wait
                    to see what else pops up! Stay tuned!
                  </p>
                </div>
                <div
                  className="ptf-divider-center my-5"
                  style={{ "--ptf-width": "50%" }}
                ></div>
                <div>
                  <h6>Parlor Project Update Dec. 2017</h6>
                  <p>
                    The Parlor Project is in progress! Kate Shattuck has
                    finished painting the woodwork according to the findings of
                    the paint analysis done by Brian Powell, formerly of
                    Building Conservation Associates, and Historic New England.
                    We have been actively studying and researching throughout
                    the process. Members of the committee, including Jane C.
                    Nylander, Richard Nylander, Sherry Cullimore, Meredith
                    Harding, Jennifer Evans, Barbara Ward, Gerald Ward, and Mary
                    Waples, have closely inspected evidence for curtains and
                    curtain hardware, and we are removing a core sample from one
                    area to pinpoint how the paint evidence in the holes
                    connects to the full stratigraphy.
                  </p>
                  <p>
                    {" "}
                    Kate Shattuck has carefully removed layers of paint that
                    obscured some of the carved details of the mantel surround,
                    but we have left the full paint sequence in tact in most
                    areas. The full beauty of the carving is now revealed!
                  </p>
                  <p>
                    {" "}
                    The walls will be covered with red flocked wallpaper similar
                    to that mentioned in a family reminiscence. The paper the
                    committee has chosen is the surviving paper still on the
                    walls of one front rooms of the John Wentworth House (built
                    ca. 1760), now used as a conference room by Wentworth Senior
                    Living, which owns the house. The blocks for the paper have
                    been cut, and the colors selected, using evidence from the
                    Wentworth wallpaper. The original vibrant colors of the
                    paper are visible in small areas. The accompanying photo
                    (below) shows the paper as it has darkened over the years,
                    but the original vibrant colors of the paper are visible in
                    small areas, and will be reproduced for the Moffatt-Ladd
                    Parlor. The paper is being produced by Adelphi Paperhangings
                    in Sharon Springs, New York, and will be ready for
                    installation in the spring or summer of 2018.
                  </p>
                  <p>
                    {" "}
                    There is still much more work to be done this winter. We are
                    hoping to make a final determination on the floor treatment
                    soon. Paint evidence suggests that the floor was originally
                    unpainted. Because the floor has now been painted for more
                    than 150 years, removing it presents a challenge. We know
                    that we will be preserving sections of these paint layers,
                    but how we will take the floor back to its original
                    appearance is still under discussion. The early inventories
                    show that there was a small “persia carpet” in the room in
                    1788 (from the designation in the inventory, we know that it
                    was approximately 7-7 1/2 feet wide, and we believe the
                    length was approximately 9 feet), and this will be an
                    important feature of the room.
                  </p>
                </div>

                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5rem", "--ptf-md": "3.125rem" }}
                ></div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </div>
  );
};

export default YellowChamber;
