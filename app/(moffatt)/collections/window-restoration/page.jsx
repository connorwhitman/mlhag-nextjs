import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Yellow Chamber | Moffatt-Ladd House & Garden",
};

const YellowChamber = ({ params }) => {
  let pageItem = {
    img: "/assets/img/moffatt/collections/moffatt-yellow-chamber.jpg",
    title: "The Yellow Chamber Restoration Project",
  };

  if (params.id) {
    const item = allportfolioContent.filter((elm) => elm.id == params.id)[0];

    if (item) {
      pageItem = item;
    }
  }

  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <div className="main">
          <article className="ptf-page ptf-page--single-work-1">
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xl">
                <div className="row">
                  <div className="col-xl-10">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">
                        {pageItem.title || "Moffatt-Ladd House & Garden"}
                      </h1>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "4rem", "--ptf-md": "2.5rem" }}
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
                      alt="The Yellow Chamber"
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
                    What is the Yellow Chamber?
                  </h4>
                  <p>
                    When Samuel and Sarah Catherine moved into the Moffatt-Ladd
                    House in 1764 the home was a brand new showpiece. Designed
                    to impress, no expense was spared. In the inventories of the
                    home that were taken in 1768 and 1786, the “Yellow Chamber,”
                    the largest bedroom on the right on the second floor, was
                    valued the highest because of the materials that were in it.
                    Yellow damask fabric, imported from England, covered the
                    bed, the curtains, and the chairs. There were four Persia
                    carpets covering the floor, and high-style wallpaper
                    covering the walls.
                  </p>
                </div>
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="100"
                >
                  <h4 className="fz-30 has-black-color mt-5">Our Goal</h4>
                  <p>
                    Our goal is that the Yellow Chamber will serve as a way for
                    visitors to understand the many facets of the history of the
                    house and those who lived in it. By restoring it to its
                    original condition, visitors will be able to see for
                    themselves the richness of the fabric, the complexity of the
                    wallpaper, and the true color of the walls. Those features
                    speak to the fortune of the Moffatt family and their
                    involvement with the Atlantic economy of the eighteenth
                    century. The room will guide us in our understanding of life
                    for a merchant and his family, the people they enslaved, and
                    the complexities of their world.
                  </p>
                </div>
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="100"
                >
                  <h4 className="fz-30 has-black-color mt-5">Why Now</h4>
                  <p>
                    This room was restored in the 1970s and 1980s, however
                    technology and research have come a long way. Therefore, the
                    NSCDA-NH put together a committee to lead a new restoration
                    project of this special chamber. In February 2022 we hired
                    Amy Cole Ives from Sutherland Conservation and Consulting to
                    conduct a paint analysis. She confirmed that the paint in
                    the room had indeed been yellow, but it most likely looked a
                    lot different than the yellow that is painted in there now.
                    In the eighteenth century, paints were mixed with natural
                    components that gave them a more translucent appearance than
                    our commercial paints have today. We will be recreating the
                    paint in the chamber so that its appearance will be closer
                    to how it looked in the 1760s.
                  </p>
                </div>

                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="100"
                >
                  <h4 className="fz-30 has-black-color mt-5">Scope of Work</h4>
                  <p>
                    This project began with a paint analysis completed in 2022
                    which tells us the colors and materials of the original
                    paint. The wallpaper, bed curtains, and window curtains are
                    being reproduced from original samples, and the woodwork
                    will be painted with a new paint, made with the same
                    materials as the original. We know from inventories taken in
                    the eighteenth century which furniture was in the room, so
                    the committee is attempting to find appropriate furniture in
                    line with what would have been found there.
                  </p>
                </div>

                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="50"
                >
                  <h4 className="fz-30 has-black-color mt-5">Want to Help?</h4>
                  <p>
                    The Yellow Chamber Restoration Project is estimated to cost
                    about $200,000. Since the NSCDA-NH is a 501c3 nonprofit
                    organization, we rely on generous donations to fund these
                    important preservation initiatives. To give to the Yellow
                    Chamber, please send a check payable to Moffatt-Ladd House &
                    Garden to 154 Market Street Portsmouth, NH 03801 or{" "}
                    <Link href="/donate" className="has-accent-5">
                      give online
                    </Link>
                    .
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
