"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {supporters} from '@/components/moffatt/data/supporters'

const MoffattSupporters = () => {
  return (
    <>
      {supporters.map((supporter, i) => (
        <div className="col-lg-4 text-center" key={i}>
          <div className=" grid-item filter-1 filter-4 filter-7">
            {/* <!--Sponsor Item--> */}
            <article className="ptf-work ptf-work--style-6">
              <div className="ptf-work__media">
                <Image
                      width={1200}
                      height={1200}
                      style={{width : '100%' , height: '100%'}}
                  src={supporter.img}
                  alt={supporter.title}
                  loading="lazy"
                />
              </div>
              <a
                href={supporter.link}
              >
              </a>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default MoffattSupporters;
