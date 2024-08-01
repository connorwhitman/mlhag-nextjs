"use client";

import Image from "next/image";
import supporters from "@/components/moffatt/data/supporters"

const brandContent = [
  {
    delayAnimation: "0",
    hoverBg: "#fcf8f4",
    imgHeight: "85px",
    imgName: "image-1",
    title: "Zeplin",
  },
  {
    delayAnimation: "100",
    hoverBg: "#f3f7fc",
    imgHeight: "78px",
    imgName: "image-2",
    title: "Dropbox",
  },
  {
    delayAnimation: "200",
    hoverBg: "#f9fcf3",
    imgHeight: "90px",
    imgName: "image-3",
    title: "Shopify",
  },
  {
    delayAnimation: "300",
    hoverBg: "#f9f9f9",
    imgHeight: "90px",
    imgName: "image-4",
    title: "Slack",
  },
  {
    delayAnimation: "400",
    hoverBg: "#fdf4fb",
    imgHeight: "62px",
    imgName: "image-5",
    title: "WooCommerce",
  },
  {
    delayAnimation: "500",
    hoverBg: "#fdf4fb",
    imgHeight: "77px",
    imgName: "image-6",
    title: "InvisionApp",
  },
];

const Brand = () => {
  return (
    <div className="row" style={{ "--bs-gutter-y": "2rem" }}>
      {supporters.map((supporter, i) => (
        <div className="col-6 col-md-3 col-lg-2" key={i}>
          
            {/* <!--Partner Box--> */}
            <div
              className="ptf-partner-box"
              style={{
                "--ptf-hover-background": supporter.hoverBg,
                "--ptf-image-height": supporter.imgHeight,
              }}
            >
              <div className="ptf-partner-box__image">
                <Image
                  width={200}
                  height={200}
                  style={{
                    width: "108px",
                    height: "90px",
                    objectFit: "contain",
                  }}
                  src={`/assets/img/moffatt/supporters/${supporter.imgName}.jpg`}
                  loading="lazy"
                />
              </div>
              <h6 className="ptf-partner-box__title">{supporter.title}</h6>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Brand;
