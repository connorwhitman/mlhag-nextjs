import Link from "next/link";

import { servicesData } from "../data/services";

const ServiceMoffatt = () => {
  return (
    <>
      <section>
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="ptf-animated-block"
                data-aos="fade"
                data-aos-delay="0"
              >
                <h2 className="has-accent-4">
                  {servicesData.sectionTitle}
                </h2>

                <div
                  className="ptf-divider"
                  style={{ "--ptf-width": "40%", "--ptf-color": "#A6763D"}}
                ></div>

                {/* -SPCR- */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5rem" }}
                ></div>

                <p className="fz-18">{servicesData.sectionText}</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            
            <div className="col-lg-10 offset-lg-1">
              {servicesData.services.map((service, i) => (
                
                <div
                  // className="ptf-animated-block"
                  // data-aos="fade"
                  // data-aos-delay="0"
                  // key={i}
                >
                  {/* <!--Services Box--> */}
                  <div className="ptf-service-box">
                    <Link
                      href={`${service.link}`}
                      className="ptf-service-box__link"
                    ></Link>
                    <div className="ptf-service-box__icon">
                      <span className="has-accent-4">
                        <i className={service.icon}></i>
                      </span>
                    </div>
                    <h5 className="ptf-service-box__title">
                      {service.titlePart1} <br />
                      {service.titlePart2}
                    </h5>
                    <div className="ptf-service-box__content">
                      <p>{service.description}</p>
                    </div>
                    <div className="ptf-service-box__arrow">
                      <i className="lnil lnil-chevron-right"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceMoffatt;
