"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";

// import Social from "../../social/Social";

const menuContent = [
  {
    name: "Home",
    page: "home",
    dropDownItems: [
      {
        name: "Home Default",
        routerPath: "/home-default",
      },
      {
        name: "Home Studio",
        routerPath: "/home-studio",
      },
      {
        name: "Home Agency",
        routerPath: "/home-agency",
      },
      {
        name: "Home Minimal",
        routerPath: "/home-minimal",
      },
      {
        name: "Home Dark",
        routerPath: "/home-dark",
      },
      {
        name: "Home Freelancer",
        routerPath: "/home-freelancer",
      },
      {
        name: "Home Trending",
        routerPath: "/home-trending",
      },
      {
        name: "Home Modern",
        routerPath: "/home-modern",
      },
    ],
  },
  {
    name: "Portfolio",
    page: "works",
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
    page: "others",
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

const MobileMenu = () => {
  let currentPage = "";
  const pathname = usePathname();

  currentPage = pathname.split("-")[0].split("/")[1];

  if (
    currentPage !== "works" &&
    currentPage !== "blog" &&
    currentPage !== "home"
  ) {
    currentPage = "others";
  }
  // titleStyle={item.page == currentPage ? {color: '#fa4529'}:''}

  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
            <MenuItem>
              <Link className={""} href="/">
                <h4>Home</h4>
              </Link>
            </MenuItem>

            <SubMenu className={""} title="Visit">
              <MenuItem>
                <Link className={""} href="/visit">
                  Visit
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={""} href="/visit/collections">
                  Collections
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={""} href="/visit/education">
                  Education
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={""} href="/visit/garden">
                  Garden
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={""} href="/visit/events">
                  Events
                </Link>
              </MenuItem>
            </SubMenu>

            <SubMenu className={""} title="About">
              <MenuItem>
                <Link className={""} href="/about">
                  About Us
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={""} href="/about/team">
                  Team
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={""} href="/about/nscda">
                  NSCDA
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={""} href="/about/supporters">
                  Supporters
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className={""} href="/about/employment">
                  Employment
                </Link>
              </MenuItem>
            </SubMenu>

            <MenuItem>
              <Link className={""} href="/rentals">
                <h4>Rentals</h4>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={""} href="/membership">
                <h4>Membership</h4>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={""} href="/donate">
                <h4>Donate</h4>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link className={""} href="/contact">
                <h4>Contact</h4>
              </Link>
            </MenuItem>
              
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}
    </>
  );
};

export default MobileMenu;


// {menuContent.map((item, i) => (
//   <SubMenu
//     className={item.page == currentPage ? "active-page" : ""}
//     title={item.name}
//     key={i}
//   >
//     {item.dropDownItems.map((val, i) => (
//       <MenuItem key={i}>
//         <Link
//           className={
//             val.routerPath == pathname ? "active-page" : ""
//           }
//           href={val.routerPath}
//         >
//           {val.name}
//         </Link>
//       </MenuItem>
//     ))}
//   </SubMenu>
// ))}

{/* <MenuItem>
  <Link className={""} href="/about">
  <h4>About</h4>
  </Link>
</MenuItem> */}

// <SubMenu className={""} title="About">
//   <MenuItem>
//     <Link className={} href="/about/team">
//       Team
//     </Link>
//   </MenuItem>
//   <MenuItem>
//     <Link className={} href="/about/nscda">
//       NSCDA
//     </Link>
//   </MenuItem>
//   <MenuItem>
//     <Link className={} href="/about/supporters">
//       Supporters
//     </Link>
//   </MenuItem>
//   <MenuItem>
//     <Link className={} href="/about/employment">
//       Employment
//     </Link>
//   </MenuItem>
// </SubMenu>