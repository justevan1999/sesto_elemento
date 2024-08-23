import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navslinks = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate()

  const links = [
    {
      name: "About Us",
      url: "/about",
      submenu: true,
      sublinks: [
        { sublink: [{ name: "Mission", link: "/" }, { name: "Vision", link: "/" }] },
      ],
    },
    {
      name: "Services",
      url: "/service",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Procurement", link: "/" },
            { name: "Contracting", link: "/" },
            { name: "Man power Supply", link: "/" },
            { name: "Technical Site Asst", link: "/" },
            { name: "Equipment Lease", link: "/" },
          ],
        },
      ],
    },
    {
      name: "Sectors",
      url: "/sectors",
      submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Oil and gas", link: "/" },
            { name: "Defence", link: "/" },
            { name: "Power Generation", link: "/" },
            { name: "Infrastructure", link: "/" },
            { name: "Renewable", link: "/" },
          ],
        },
      ],
    },
    { name: "Our Partners", url: "/partners" },
  ];

  const handleLinkClick = (linkName) => {
    setActiveLink((prev) => (prev === linkName ? "" : linkName));
  };

  const handleMouseEnter = (linkName) => {
    if (!isMobile) setActiveLink(linkName);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setActiveLink("");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {links.map((link) => (
        <div
          key={link.name}
          className="link-container"
          onMouseEnter={() => handleMouseEnter(link.name)}
          onMouseLeave={handleMouseLeave}
          onClick={() => isMobile && handleLinkClick(link.name)}
        >
          <div onClick={() => navigate(link.url)} className="tain">
            <p
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                color: activeLink === link.name ? "#004865" : "inherit",
                borderBottom: activeLink === link.name ? "1.9px solid #004865" : "none",
                transition: "all 0.3s ease",
              }}
              className="render"
            >
              {link.name}{" "}
              {link.submenu && (
                <span
                  style={{
                    marginTop: ".5rem",
                    marginLeft: ".5rem",
                    transition: "transform 0.3s ease",
                    transform: activeLink === link.name ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              )}
            </p>
            {link.submenu && (
              <div
                style={{
                  display: activeLink === link.name ? "block" : "none",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="test">
                  <div className="ppds">
                    {activeLink === link.name && <div className="sharp"></div>}
                  </div>
                  <div className="test-2">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index}>
                        {mysublinks.sublink.map((slink, i) => (
                          <li key={i} className="subtain">
                            <Link to={slink.link}>{slink.name}</Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Navslinks;


// <>
// {links.map((link) => (

// ))}
// </>
