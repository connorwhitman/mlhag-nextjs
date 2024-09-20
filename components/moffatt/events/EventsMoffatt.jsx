"use client";

import React from "react";
import Link from "next/link";

import { events } from "@/components/moffatt/data/events";

const EventsMoffatt = () => {
  return (
    <>
      <section>
        <div className="container">
          {/* === TITLE === */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
          >
            <h1 className="large-heading has-accent-1">Events</h1>
            <div
              className="ptf-divider mt-2"
              style={{ "--ptf-color": "hsl(215, 37%, 40%)" }}
            ></div>
          </div>

          {/* -SPCR- */}
          <div className="ptf-spacer" style={{ "--ptf-xxl": "3.25rem" }}></div>

          {/* === EVENT LIST === */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
          >
            <div className=" grid-item ">
              {events.map((event, i) => (
                <article
                  className="ptf-work ptf-work--style-4"
                  data-tip
                  data-for={event.link}
                  key={i}
                >
                  <Link
                    className="ptf-work__link"
                    href={`/events/${event.link}`}
                  ></Link>
                  <div className="ptf-work__category">{event.time}</div>
                  <h4 className="ptf-work__title">{event.title}</h4>
                  <div className="ptf-work__date">{event.date}</div>
                </article>
              ))}
            </div>
            {/* End .grid-item */}
            <div></div>
            {/* End .ptf-isotope-grid */}
          </div>
        </div>
        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "5rem", "--ptf-md": "5rem" }}
        ></div>
      </section>
    </>
  );
};

export default EventsMoffatt;
