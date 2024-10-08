import Link from "next/link";
import ServiceList from "@/components/list/ServiceList";
import MoffattSupporters from "@/components/moffatt/sponsors/MoffattSupporters";
import Award from "@/components/award/Award";
import Blog from "@/components/blog/Blog";
import CopyRightThree from "@/components/footer/copyright/CopyRightThree";
import ContactJarallax from "@/components/jarallax/ContactJarallax";

export const metadata = {
  title: "Supporters | Moffatt-Ladd House & Garden",
};

const HomeStudio = () => {
  return (
    <div className="container">
    <div className="">
      <div className="ptf-site-wrapper__inner">
        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-studio">
            {/*=============================================
            Start Service Section 
            ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.125rem", "--ptf-md": "1.5625rem" }}
              ></div>
              <div className="container-xxl">
                {/* End <!--Animated Block--> */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="100"
                >
                  <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading has-accent-1">Our Supporters</h1>
                      <div
                              className="ptf-divider mt-2"
                              style={{ "--ptf-color": "hsl(215, 37%, 40%)" }}
                            ></div>
                    </div>
                </div>
              </div>
            </section>

            {/*=============================================
            Start Service Section 
            ============================================== */}
            <section>
              <div className="container-xl">
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4rem", "--ptf-md": "4rem" }}
                ></div>


                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "4.75rem",
                      "--bs-gutter-y": "4.75rem",
                    }}
                  >
                    <MoffattSupporters />
                  </div>
                </div>
              </div>
            </section>
            
            <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4rem", "--ptf-md": "4rem" }}
                ></div>

          </div>
          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}

    </div>
    </div>
  );
};

export default HomeStudio;
