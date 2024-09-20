import MoffattCollectionsList from "@/components/moffatt/collections/MoffattCollectionsList";

export const metadata = {
  title: "Collections | Moffatt-Ladd House & Garden",
};

const WorksGrid = () => {
  return (
    <div className="ptf-site-wrapper ptf-is--works-grid">
      <div className="ptf-site-wrapper__inner">
        <div className="main">
          <div className="ptf-page ptf-page--portfolio-grid">
            
          <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            <section>

              <div className="col-lg-10 offset-lg-2">
                <div className="col-lg-8">
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h1 className="large-heading has-accent-1">Projects</h1>
                  <div
                    className="ptf-divider mt-2"
                    style={{ "--ptf-color": "hsl(215, 37%, 40%)" }}
                  ></div>
                  </div>
                </div>

                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2rem" }}
                ></div>

              <MoffattCollectionsList />
              
              </div>
            </section>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "8.125rem", "--ptf-md": "4.0625rem" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksGrid;
