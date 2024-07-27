"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import "react-pro-sidebar/dist/css/styles.css";
import dynamic from "next/dynamic";

import MoffattNav from "../components/moffatt/nav/MoffattNav";
import MoffattFooter from "../components/moffatt/footer/MoffattFooter";


const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

import "../public/assets/scss/main.scss";
const ScrollToTop = dynamic(() => import("../components/ScrollToTop"), {
  ssr: false,
});

export default function RootLayout({ children }) {
  const [showCursor, setShowCursor] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    if (typeof window !== "undefined") {
      setShowCursor(true);
    }
  }, []);

  return (
    <html suppressHydrationWarning={true} className="html" lang="en">
      <body>
        <MoffattNav />
        {children}
        
        <footer className="ptf-footer ptf-footer--style-3">
          <div className="container">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <div className="ptf-footer__top">
                  <MoffattFooter />
                </div>
                {/* End .ptf-footer__top */}

                {/* <div className="ptf-footer__bottom">
                  <CopyRightTwo />
                </div> */}
                {/* End .ptf-footer__bottom */}
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}


        {/* {showCursor && (
          <AnimatedCursor
            innerSize={5}
            outerSize={25}
            color="220, 53, 69"
            outerAlpha={0.1}
            innerScale={0.7}
            outerScale={1.2}
          />
        )} */}
        {/* {showCursor && <ScrollToTop />}{" "} */}