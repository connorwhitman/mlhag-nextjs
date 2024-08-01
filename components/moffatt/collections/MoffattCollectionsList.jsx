"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { moffattCollections } from "@/components/moffatt/data/collections";

const MoffattCollectionsList = () => {
  const [pageItems, setPageItems] = useState([]);
  const [tabActive, setTabActive] = useState("All");
  useEffect(() => {
    if (tabActive == "All") {
      setPageItems(moffattCollections);
    } else {
      const fiteredItems = moffattCollections.filter((elm) =>
        elm.meta
          .toLowerCase()
          .split(",")
          .map((elm) => elm.trim())
          .includes(tabActive.toLowerCase().trim())
      );
      setPageItems(fiteredItems);
    }
  }, [tabActive]);

  return (
    <>
      <div>
        <div>
          {/* {/* <!--Animated Block--> */}

          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
          >
            <div
              className="ptf-isotope-grid row"
              style={{
                "--bs-gutter-x": "4.75rem",
                "--bs-gutter-y": "4.75rem",
              }}
            >
              {moffattCollections.map((collectionItem, i) => (
                <div className="col-lg-6" key={i}>
                  <article className="ptf-work ptf-work--style-1">
                    <div className="ptf-work__media">
                      <Link
                        className="ptf-work__link"
                        href={collectionItem.link}
                      ></Link>
                      <Image
                        width={1200}
                        height={1200}
                        style={{ width: "100%", height: "100%" }}
                        src={collectionItem.img}
                        alt="work"
                        loading="lazy"
                      />
                    </div>
                      <h4 className="ptf-work__title mt-3 has-accent-4">
                        <Link href={collectionItem.link}>
                          {collectionItem.title}
                        </Link>
                      </h4>
                  </article>
                </div>
              ))}
              {/* End .col */}
            </div>
          </div>

          {/* End portfolio */}
        </div>
      </div>
    </>
  );
};

export default MoffattCollectionsList;
