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
          <a href="#" className={""}>
              Home
          </a>
      </li>
      <li className={"menu-item-has-children"}>
          <a href="/about" className={""}>
              About
          </a>
      </li>
      <li className={"menu-item-has-children"}>
          <a href="#" className={""}>
              Visit
          </a>
      </li>
      <li className={"menu-item-has-children"}>
          <a href="#" className={""}>
              Membership
          </a>
      </li>
      <li className={"menu-item-has-children"}>
          <a href="#" className={""}>
              Donate
          </a>
      </li>
      <li className={"menu-item-has-children"}>
          <a href="#" className={""}>
              Contact
          </a>
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