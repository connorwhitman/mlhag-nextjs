"use client";

import React from "react";
import Link from "next/link";

import { events } from "../data/events";

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
            <h2 className="h1 large-heading has-accent-1 d-inline-flex">
              Upcoming Events
            </h2>
            <Link
              className="ptf-link-with-arrow fz-18 text-uppercase d-none d-lg-inline-flex"
              href="/"
              style={{ marginLeft: "5.625rem" }}
            >
              All Events{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                style={{ height: "1em" }}
                viewBox="0 0 17 17"
              >
                <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
              </svg>
            </Link>
            <Link
              className="ptf-link-with-arrow fz-18 text-uppercase d-md-inline-flex d-lg-none"
              href="/"
              style={{ marginLeft: "10rem", marginTop: "2rem" }}
            >
              All Events{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                style={{ height: "1em" }}
                viewBox="0 0 17 17"
              >
                <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
              </svg>
            </Link>
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
