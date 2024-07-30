import MoffattContactSocial from "@/components/moffatt/MoffattContactSocial";
import MoffattContactForm from "@/components/moffatt/MoffattContactForm";
import MoffattAddress from "@/components/moffatt/data/MoffattContact";

export const metadata = {
  title: "Contact || Moffatt-Ladd House & Garden",
};

const Contact = () => {
  return (
    <>
      <div className="ptf-main">
        <div className="ptf-page ptf-page--contact">
          <section>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "10rem" }}
            ></div>

            <div className="container">
              <div className="row">
                <div className="col-xl-10">
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading has-accent-4">Contact Us</h1>
                    <MoffattContactSocial />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
            ></div>
          </section>

          <section>
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <MoffattAddress />
                </div>

                <div className="col-lg-8">
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <h5 className="fz-24 has-3-color fw-normal">
                      Have a question or comment? Send us a note using the form
                      below, or email or call a staff member directly using the
                      contact information on the left.
                    </h5>
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3.125rem" }}
                    ></div>
                    <MoffattContactForm />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
