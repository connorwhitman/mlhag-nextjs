"use client";

import React from "react";
import Link from "next/link";

const rentalFaqs = [
  {
    title: "Rental FAQs",
    faqSub: [
      {
        title: "What is your capacity?",
        descriptions: `As of 2024, we can now accommodate fewer than 100 people under a tent per the City of Portsmouth Fire Department, although that number can be lower depending on equipment and vendors (caterer’s needs, bands, etc.) for each wedding/reception.  For ceremonies, our garden can accommodate up to 125 without a tent. HOWEVER, in the event of rain, our indoor facility (the Warehouse) can only fit a maximum of 80 guests.`,
      },
      {
        title: "Are you open all year round?",
        descriptions: `
        All of our events are outdoors and therefore weather dependent/seasonal. Typically, the garden is at its best mid-May to mid-October.`,
      },
      {
        title: "What are your rates?",
        descriptions: `
        We charge an hourly rate which must include set up and break down time. A minimum of two hours rental is required. Please remember to factor in this extra time into your total rental.`,
      },
      {
        title: "What does my rental include?",
        descriptions: `
        We only provide the space. All outside contractors such as caterers, tent rentals/chairs, florists, photographers, performers are the responsibility of the renter and must be approved in advance.`,
      },
      {
        title: "What happens if it rains the day of my event?",
        descriptions: `
        We do not refund for inclement weather. However, we offer the Warehouse as a backup space, free of charge with a capacity of 80.

`,
      },
      {
        title: "Is the garden available for photography sessions?",
        descriptions: `
        Yes, the outdoor space is available for photography sessions for a fee of $100 per hour (rate applies to photography-only sessions). These sessions must be reserved at least one week in advance and they are subject to availability.`,
      },
    ],
  },
];

const RentalFaqs = () => {
  return (
    <section>
      {/* <!--Spacer--> */}

      <div className="container">
        {rentalFaqs.map((item, i) => (
          <div key={i}>
            <div className="ptf-animated-block" data-aos="fade">
              {/* <!--FAQ--> */}
              <div className="ptf-faq">
                <div className="ptf-faq__category">
                  <h3>{item.title}</h3>
                </div>
                <div className="ptf-faq__content">
                  {item.faqSub.map((val, i) => (
                    <div className="ptf-faq__item" key={i}>
                      <div className="ptf-faq__question">
                        <h6>{val.title}</h6>
                      </div>
                      <div className="ptf-faq__answer">
                        <p>{val.descriptions}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
    
      </div>
    </section>
  );
};

export default RentalFaqs;
