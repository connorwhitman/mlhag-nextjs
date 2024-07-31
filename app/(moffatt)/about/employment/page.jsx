import PortfolioListing from "@/components/moffatt/employment/PortfolioListing";

export const metadata = {
  title: "Employment | Moffatt-Ladd House & Garden",
};

const WorksListing = () => {
  return (
    <>
      <div className="ptf-site-wrapper animsition ptf-is--works-listing">
        <div className="ptf-site-wrapper__inner">
          <div className="main">
            <div className="ptf-page ptf-page--portfolio-listing">
              <section>
                {/* <!--Spacer--> */}
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
                        <h1 className="large-heading">Employment</h1>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "4.375rem" }}
                  ></div>
                </div>

                {/*=============================================
                Start Portfolio main 
                ============================================== */}
                <div className="container-xl">
                  <PortfolioListing />
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>


                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
    // End .ptf-is--blog-grid
  );
};

export default WorksListing;
