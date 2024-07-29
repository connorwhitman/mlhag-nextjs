"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuContent = [
  {
    name: "Home",
    activeClass: "sf-with-ul",
    page: "home",
    menuClass: "current-menu-item",
    dropDownItems: [
    ],
  },
  {
    name: "Portfolio",
    page: "works",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Works Grid",
        routerPath: "/works-grid",
      },
      {
        name: "Works Masonry",
        routerPath: "/works-masonry",
      },
      {
        name: "Works Listing",
        routerPath: "/works-listing",
      },
      {
        name: "Works Carousel",
        routerPath: "/works-carousel",
      },
      {
        name: "Works Showcase",
        routerPath: "/works/3",
      },
    ],
  },
  {
    name: "Blog",
    activeClass: "",
    menuClass: "",
    page: "blog",

    dropDownItems: [
      {
        name: "Blog Grid",
        routerPath: "/blog-grid",
      },
      {
        name: "Blog Masonry",
        routerPath: "/blog-masonry",
      },
      {
        name: "Blog Sidebar",
        routerPath: "/blog-sidebar",
      },
      {
        name: "Blog Details",
        routerPath: "/blog/2",
      },
      {
        name: "Blog Details Sidebar",
        routerPath: "/blog-details-sidebar/7",
      },
    ],
  },
  {
    name: "Pages",
    activeClass: "",
    page: "others",
    menuClass: "two-columns",
    dropDownItems: [
      {
        name: "About Us",
        routerPath: "/about-us",
      },
      {
        name: "About Me",
        routerPath: "/about-me",
      },
      {
        name: "Services",
        routerPath: "/service",
      },
      {
        name: "Service Details",
        routerPath: "/service/5",
      },
      {
        name: "Pricing",
        routerPath: "/pricing",
      },
      {
        name: "Team",
        routerPath: "/team",
      },
      {
        name: "FAQ",
        routerPath: "/faq",
      },
      {
        name: "Contact",
        routerPath: "/contact",
      },
      {
        name: "Page 404",
        routerPath: "/404",
      },
      {
        name: "Coming Soon",
        routerPath: "/coming-soon",
      },
    ],
  },
];

const DropdownMenu = () => {
  let currentPage = "";
  const pathname = usePathname();

  if (pathname.split("/")[1].trim() != "home-default") {
    currentPage = pathname.split("-")[0].split("/")[1];

    if (
      currentPage !== "works" &&
      currentPage !== "blog" &&
      currentPage !== "home"
    ) {
      currentPage = "others";
    }
  }

  return (
    <ul className="sf-menu">
      <li className={"menu-item-has-children"}>
          <Link href="/" className={""}>
              Home
          </Link>
      </li>

      <li className={"menu-item-has-children"}>

        <Link href="/visit" className={""}>
            Visit
        </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/visit/collections">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/visit/education">
                Education
              </Link>
            </li>
            <li>
              <Link href="/visit/garden">
                Garden
              </Link>
            </li>
            <li>
              <Link href="/visit/events">
                Events
              </Link>
            </li>
          </ul>
      </li>

      <li className={"menu-item-has-children"}>

        <Link href="/about" className={""}>
            About
        </Link>
          <ul className="sub-menu">
            <li>
              <Link href="/about/team">
                Team
              </Link>
            </li>
            <li>
              <Link href="/about/nscda">
                NSCDA
              </Link>
            </li>
            <li>
              <Link href="/about/supporters">
                Supporters
              </Link>
            </li>
            <li>
              <Link href="/about/employment">
                Employment
              </Link>
            </li>
          </ul>
      </li>



      


      <li className={"menu-item-has-children"}>
          <Link href="/rentals" className={""}>
              Rentals
          </Link>
      </li>
      <li className={"menu-item-has-children"}>
          <Link href="/membership" className={""}>
              Membership
          </Link>
      </li>
      <li className={"menu-item-has-children"}>
          <Link href="/donate" className={""}>
              Donate
          </Link>
      </li>
      <li className={"menu-item-has-children"}>
          <Link href="/contact" className={""}>
              Contact
          </Link>
      </li>
      
      
    </ul>
  );
};

export default DropdownMenu;


// {menuContent.map((item, i) => (
//   <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
//     <a href="#" className={item.activeClass}>
//       <span className={item.page == currentPage ? "active-page" : ""}>
//         {item.name}
//       </span>
//     </a>

//     <ul className="sub-menu mega">
//       {item.dropDownItems.map((val, i) => (
//         <li key={i}>
//           <Link href={val.routerPath}>
//             {" "}
//             <span
//               className={val.routerPath == pathname ? "active-page" : ""}
//             >
//               {val.name}
//             </span>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </li>
// ))}

{/* <li className={"menu-item-has-children"}>

  <Link href="/about" className={""}>
      About
  </Link>

  <ul className="sub-menu mega">
    <li>
      <Link href="/about/team">
        Team
      </Link>
    </li>
    <li>
      <Link href="/about/nscda">
        NSCDA
      </Link>
    </li>
    <li>
      <Link href="/about/supporters">
        Supporters
      </Link>
    </li>
    <li>
      <Link href="/about/employment">
        Employment
      </Link>
    </li>
  </ul>
</li> */}