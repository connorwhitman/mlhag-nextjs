import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The Yellow Chamber | Moffatt-Ladd House & Garden",
};

const YellowChamber = ({ params }) => {
  let pageItem = {
    img: "/assets/img/moffatt/collections/moffatt-collections-windows.jpg",
    title: "Window Restoration & Conservation Projet",
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
                        "/assets/img/moffatt/collections/moffatt-collections-windows.jpg"
                      }
                      alt="Moffatt-Ladd Windows Restoration Project"
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
                  <h4 className="fz-30 has-black-color">About the Project</h4>
                  <p>
                    The project consisted of conserving forty-eight windows and
                    the corresponding window trim, sills, headers, jambs,
                    pediments, and interior casing on the Moffatt-Ladd House and
                    its Ell. (Three windows were treated prior to January 1,
                    2012; one first-floor transom light and the basement windows
                    have not been treated.). We were fortunate to receive
                    funding for the project from private donations, New
                    Hampshire’s Land and Community Heritage Investment Program,
                    and the Institute of Museum and Library Services. Prior to
                    treatment, many of these windows and their trim were in
                    extremely poor condition; the best were in fair condition.
                    The windows were, in many cases, so seriously askew, and the
                    openings so structurally compromised, that the work needed
                    to re-install the conserved windows was extensive.
                  </p>
                  <p>
                    During the grant period, paint evidence from the windows was
                    carefully preserved. The windows were taken out, façade by
                    façade, and conserved by Jade Mortimer of Heartwood Window
                    Restoration in her studio which was then in Hawley,
                    Massachusetts. The window openings and trim were conserved
                    by Preservation Timber Framing of Berwick, Maine. Periodic
                    inspection and consultation regarding the treatment involved
                    James L. Garvin, Brian Powell of Building Conservation
                    Associates, Arron Sturgis of Preservation Timber Framing,
                    Jade Mortimer, and project staff Barbara Ward and Brielly
                    Allen.
                  </p>
                  <p>
                    Tours of the work were offered to special groups and to the
                    general public throughout the project. Jade Mortimer also
                    was a featured presenter at the museum’s “Our Old House”
                    Festivals which took place on the first Saturday of June, in
                    2012 and 2013. In October 2013, the Moffatt-Ladd House &
                    Garden joined with the NH Preservation Alliance to
                    co-sponsor and host a window restoration workshop by Jade
                    Mortimer.
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
