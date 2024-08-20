"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import "react-pro-sidebar/dist/css/styles.css";
import dynamic from "next/dynamic";


export default function AdminLayout({ children }) {
  

  return (
    <html suppressHydrationWarning={false} className="html" lang="en">
      <body>
        

        {children}

      </body>
    </html>
  );
}

{
  /* {showCursor && (
          <AnimatedCursor
            innerSize={5}
            outerSize={25}
            color="220, 53, 69"
            outerAlpha={0.1}
            innerScale={0.7}
            outerScale={1.2}
          />
        )} */
}
{
  /* {showCursor && <ScrollToTop />}{" "} */
}
