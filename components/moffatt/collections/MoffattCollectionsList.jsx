"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { moffattCollections } from "@/components/moffatt/data/collections";
import { completedProjects } from "../data/completedProjects";

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
            <h2 className="has-accent-1">Completed Projects</h2>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
            ></div>
              {completedProjects.map((collectionItem, i) => (
                <div className="col-lg-9 col-lg-offset-2" key={i}>
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

          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
          >
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "4rem", "--ptf-md": "4rem" }}
            ></div>
            <h2 className="has-accent-1">Ongoing Projects</h2>
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "1rem", "--ptf-md": "1rem" }}
            ></div>
              {moffattCollections.map((collectionItem, i) => (
                <div className="col-lg-9 col-lg-offset-2 mb-5" key={i}>
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

          {/* End portfolio */}
        </div>
      </div>
    </>
  );
};

export default MoffattCollectionsList;
