import EventsMoffatt from "@/components/moffatt/events/EventsMoffatt";
export const metadata = {
  title: "Events | Moffatt-Ladd House & Garden",
};

const EventsListing = () => {
  return (
    <>
      <div className="ptf-site-wrapper ptf-is--works-listing container">
        <div className="ptf-site-wrapper__inner">

          <div className="main">
            <div className="ptf-page ptf-page--portfolio-listing">
              <section>
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>

                <div className="container-xxl">
                  <div className="row">
                    <div className="col-xl-10">
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                      </div>
                    </div>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1rem" }}
                  ></div>
                </div>
                
                <div className="container-xl">
                  <EventsMoffatt />
                </div>

              </section>
            </div>
            {/* End .ptf-page */}
          </div>
        </div>
      </div>
    </>
    // End .ptf-is--blog-grid
  );
};

export default EventsListing;
