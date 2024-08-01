"use client"

import React ,{useState,useEffect} from "react";
import dynamic from 'next/dynamic'
import Link from "next/link";

import {jobListings} from '@/components/moffatt/data/employment'

const MoffattEmploymentListing = () => {
  const [pageItems, setPageItems] = useState([])
  const [tabActive, setTabActive] = useState('All')
  useEffect(() => {

    if (tabActive == 'All') {
      setPageItems(jobListings)
      
    }
    else{

      const fiteredItems = jobListings.filter(elm=>elm
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
                  {/* <!--Portfolio Item--> */}
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
                      <div className="ptf-work__category">{val.cat}</div>
                      <h4 className="ptf-work__title">{val.title}</h4>
                      <div className="ptf-work__date">{val.date}</div>
                    </article>
                  ))}
                </div>
                <div></div>
                {/* End .grid-item */}
              </div>
              {/* End .ptf-isotope-grid */}
            </div>

            {/* End portfolio */}
          </div>
    
      </div>
    </>
  );
};

export default MoffattEmploymentListing;
