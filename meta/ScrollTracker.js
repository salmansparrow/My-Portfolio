import { useEffect, useState } from "react";

function ScrollTracker({ setPageTitle }) {
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 200; // Adjust this value for better accuracy

    let foundSection = false;

    sections.forEach((section) => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        const sectionId = section.getAttribute("id");
        if (sectionId) {
          setPageTitle(sectionId.charAt(0).toUpperCase() + sectionId.slice(1));
          foundSection = true;
        }
      }
    });

    // Fallback to "Home" or any other default if no section is found
    if (!foundSection) {
      setPageTitle("Home");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null; // This component doesn't render anything
}

export default ScrollTracker;
