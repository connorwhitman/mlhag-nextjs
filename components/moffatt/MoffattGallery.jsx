"use client";
import { Gallery } from "react-grid-gallery";
import Image from "next/image";
const imageList = [
  { img: "/assets/img/moffatt/garden/garden1.jpg", delayAnimation: "0" },
  { img: "/assets/img/moffatt/garden/garden2.jpg", delayAnimation: "20" },
  { img: "/assets/img/moffatt/garden/garden3.jpg", delayAnimation: "40" },
  { img: "/assets/img/moffatt/garden/garden4.jpg", delayAnimation: "60" },
  { img: "/assets/img/moffatt/garden/garden5.jpg", delayAnimation: "80" },
  { img: "/assets/img/moffatt/garden/garden6.jpg", delayAnimation: "90" },
  { img: "/assets/img/moffatt/garden/garden7.jpg", delayAnimation: "100" },
  { img: "/assets/img/moffatt/garden/garden8.jpg", delayAnimation: "120" },
  { img: "/assets/img/moffatt/garden/garden9.jpg", delayAnimation: "140" },
  { img: "/assets/img/moffatt/garden/garden10.jpg", delayAnimation: "160" },
  { img: "/assets/img/moffatt/garden/garden11.jpg", delayAnimation: "180" },
  { img: "/assets/img/moffatt/garden/garden12.jpg", delayAnimation: "200" },
  { img: "/assets/img/moffatt/garden/garden13.jpg", delayAnimation: "220" },
  { img: "/assets/img/moffatt/garden/garden14.jpg", delayAnimation: "240" },
];

const GardenGallery = () => {
  return (
    <Gallery images={imageList} />
  );
};

export default GardenGallery;
