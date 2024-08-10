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
    <div className="ptf-site-wrapper ptf-is--home-studio">
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
                  <h1 className="fz-120 fz-90--lg fz-60--md lh-1p1 has-accent-1">
                    Our Supporters
                  </h1>
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
                  style={{ "--ptf-xxl": "8rem", "--ptf-md": "6rem" }}
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
  );
};

export default HomeStudio;
