"use client";

import React from "react";
import Link from "next/link";

import {eventsList} from '../data/events'

const EventsMoffatt = () => {
  return (
    <>
      <div className=" grid-item ">
        {/* <!--Portfolio Item--> */}
        {eventsList.map((val, i) => (
          <article
            className="ptf-work ptf-work--style-4"
            data-tip
            data-for={val.dataId}
            key={i}
          >
              <Link
                className="ptf-work__link"
                href={`/works/${val.id}`}
              ></Link>
            <div className="ptf-work__category">{val.cat}</div>
            <h4 className="ptf-work__title">{val.title}</h4>
            <div className="ptf-work__date">{val.date}</div>
          </article>
        ))}
      </div>
      {/* End .grid-item */}
      <div></div>
      {/* End .grid-item */}
    </>
  );
};

export default EventsMoffatt;
