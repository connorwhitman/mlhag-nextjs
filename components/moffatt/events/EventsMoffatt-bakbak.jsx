"use client"

import React ,{useState,useEffect} from "react";
import Link from "next/link";

import {eventListings} from '@/components/moffatt/data/events'

const MoffattEmploymentListing = () => {
  const [pageItems, setPageItems] = useState([])
  const [tabActive, setTabActive] = useState('All')
  useEffect(() => {

    if (tabActive == 'All') {
      setPageItems(eventListings)
      
    }
    else{

      const fiteredItems = eventListings.filter(elm=>elm
        .cat
        .toLowerCase()
        .split(',')
        .map(elm=>elm
          .trim())
          .includes(tabActive
            .toLowerCase()
            .trim()))
      setPageItems(fiteredItems)

    }
    
  }, [tabActive])
  
  return (
    <>
      <div>

        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "3rem", "--ptf-md": "3.125rem" }}
        ></div>

        
          <div >
            {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <div className="ptf-isotope-grid">
                <div className=" grid-item ">
                  
                  {pageItems.map((val, i) => (
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
                    </article>
                  ))}
                </div>
                <div></div>

              </div>

            </div>

          </div>
    
      </div>
    </>
  );
};

export default MoffattEmploymentListing;
