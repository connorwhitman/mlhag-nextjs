import MoffattCollectionsList from "@/components/moffatt/collections/MoffattCollectionsList";

import RelatedPortfolio from "../../../components/portfolio/RelatedPortfolio";

export const metadata = {
  title: "Works Grid || Moonex Portfolio and Agency NextJS Template",
};

const WorksGrid = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-grid">
      <div className="ptf-site-wrapper__inner">
        <div className="main">
          <div className="ptf-page ptf-page--portfolio-grid">
            <section>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-10">
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">Collections</h1>
                    </div>
                  </div>
                </div>

                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem" }}
                ></div>
              </div>

              <div className="container-xxl">
                <MoffattCollectionsList />
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
                ></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksGrid;
