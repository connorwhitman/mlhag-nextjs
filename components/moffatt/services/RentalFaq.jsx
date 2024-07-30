"use client";

import React from "react";
import Link from "next/link";

const rentalFaqs = [
  {
    title: "Rental FAQs",
    faqSub: [
      {
        title: "What is your capacity?",
        descriptions: `We can accommodate up to 125 people without a tent. With a tent, we can accommodate up to 50 people standing, with cocktail tables; or 27 people with tables and chairs. Keep in mind, the total number of people include service staff, musicians, etc.`,
      },
      {
        title: "Are you open all year round?",
        descriptions: `
        Our rental season runs from June through October.`,
      },
      {
        title: "What are your rates?",
        descriptions: `
        We charge an hourly rate which must include set up and break down time. A minimum of two hours rental is required. Please remember to factor in this extra time into your total rental.`,
      },
      {
        title: "What does my rental include?",
        descriptions: `
        Your rental includes the garden and/or Warehouse space. All outside contractors such as caterers, tent rentals/chairs, florists, photographers, performers are the responsibility of the renter and must be approved in advance.`,
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
        The outdoor space is available for photography sessions for a fee of $100 per hour (rate applies to photography-only sessions). These sessions must be reserved at least one week in advance and they are subject to availability. Please be aware if your photography session is scheduled during our open hours museum visitors may be in the garden.`,
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
