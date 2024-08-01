import MoffattEmploymentListing from "@/components/moffatt/employment/MoffattEmploymentListing";

export const metadata = {
  title: "Employment | Moffatt-Ladd House & Garden",
};

const JobListings = () => {
  return (
    <>
      <div className="ptf-site-wrapper animsition ptf-is--works-listing container">
        {/* End Page SEO Content */}
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
                        <h1 className="large-heading has-accent-1">Employment</h1>
                      </div>
                    </div>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "1rem" }}
                  ></div>
                </div>
                {/* End .container-xxl */}

                {/*=============================================
                Start Portfolio main 
                ============================================== */}
                <div className="container-xxl">
                  <MoffattEmploymentListing />
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
                ></div>

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

export default JobListings;
