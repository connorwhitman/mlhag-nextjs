


import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Not Found || Moffatt-Ladd House & Garden",
};

const NotFound = () => {
  return (
    <>
<div className="container">
      <div className="ptf-main">
        <div className="ptf-page ptf-page--404">
          <section className="min-vh-50">
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "7rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-5 offset-lg-1 order-lg-2 text-center">
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="100"
                  >
                    <Image
                      width={1200}
                      height={1200}
                      style={{ width: "100%", height: "100%" }}
                      src="/assets/img/root/404-robot.png"
                      alt="robot"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{
                      "--ptf-lg": "5.625rem",
                      "--ptf-md": "2.8125rem",
                    }}
                  ></div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">
                      Oops...! <br />
                      Page not found
                    </h1>
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "3.75rem", "--ptf-md": "1.875rem" }}
                  ></div>
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="100"
                  >
                    <p>It seems the page you're looking for doesn't exist.</p>
                  </div>
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "2rem", "--ptf-md": "2rem" }}
                  ></div>
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="200"
                  >
                    <Link href="/">Back to Home</Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "4rem", "--ptf-md": "4rem" }}
            ></div>
          </section>
        </div>
      </div>
      </div>
    </>
  );
};

export default NotFound;
