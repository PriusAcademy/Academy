import { useLocation } from "react-router-dom";
import MobileNavBar from "../small-devices/mobile-nav-bar";
import DesktopNavBar from "../large-devices/desktop-nav-bar";

const NavItems = () => {
  const { pathname } = useLocation();

  const studentCourses = [
    {
      course: "Computer Science Engineering",
      href: "/academy/courses/students/computer-science",
    },
    {
      course: "Electrical Engineering",
      href: "/academy/courses/students/electrical",
    },
    {
      course: "Mechanical Engineering",
      href: "/academy/courses/students/mechanical",
    },
  ];

  const links = [
    {
      title: "Home",
      href: "/",
      isActive: pathname == "/",
    },
    {
      title: "Events",
      href: "/academy/events",
      isActive: pathname == "/events",
    },
    {
      title: "Gallery",
      href: "/academy/gallery",
      isActive: pathname == "academy/gallery",
    },
    {
      title: "Career",
      href: "/academy/career",
      isActive: pathname == "/academy/career",
    },
    {
      title: "Contact",
      href: "/academy/contact",
      isActive: pathname == "academy/contact",
    },
  ];

  const data = [
    {
      title: "About us",
      isActive: pathname == "academy/company-profile",
      data: [
        { title: "Company Profile", href: "/academy/company-profile" },
        { title: "Our Mission, Vision & Core values", href: "/academy/vision" },
      ],
    },
    {
      title: "Courses",
      isActive: pathname == "academy/courses",
      data: [
        {
          title: "Working Professionals",
          href: "/courses/professionals",
          courses: [
            { course: "General", href: "/academy/courses/professionals" },
          ],
        },
        {
          title: "Students",
          href: "/courses/students",
          courses: studentCourses,
        },
      ],
    },
  ];

  return (
    <>
      <DesktopNavBar links={links} data={data} />
      <MobileNavBar links={links} data={data} />
    </>
  );
};

export default NavItems;
