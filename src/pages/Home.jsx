import React, { useState, useEffect } from "react";
import "../index.css";
import Core1 from "../../src/assets/Group 50 (2).png";
import Core2 from "../../src/assets/Group 50 (1).png";
import Core3 from "../../src/assets/Group 50.png";
import Core4 from "../../src/assets/Group 50 (3).png";
import Core5 from "../../src/assets/Group 50 (4).png";
import Talk from "../../src/assets/Group 20664.png";
import Max from "../../src/assets/Group 20664 (1).png";
import Construct from "../../src/assets/Group 20664 (2).png";
import Nnpc from "../../src/assets/palmpay (2).png";
import Total from "../../src/assets/Frame 427318867.png";
import Saipem from "../../src/assets/Frame 427318865.png";
import Maire from "../../src/assets/Frame 427318868.png";
import Lng from "../../src/assets/palmpay (3).png";
import Hec from "../../src/assets/Frame 427318867 (1).png";
import Gbin from "../../src/assets/Frame 427318865 (1).png";
import Eroton from "../../src/assets/Frame 427318868 (1).png";
import Entre from "../../src/assets/Frame 427318866.png";
import Netco from "../../src/assets/Frame 427318867 (2).png";
import Africa from "../../src/assets/Frame 427318865 (2).png";
import Deux from "../../src/assets/palmpay (4).png";
import Shell from "../../src/assets/Frame 427318868 (2).png";
import Location from "../../src/assets/marker 1 (1).png";
import Call from "../../src/assets/phone-call 1 (1).png";
import Ig from "../../src/assets/Instagram Outline (2).png";
import Mail from "../../src/assets/envelope 2 (1).png";
import Calling from "../../src/assets/Group 34.png";
import Logo2 from "../../src/assets/Frame 60994.png";
import Insta2 from "../../src/assets/bi_instagram.png";
import Facebk from "../../src/assets/Group (7).png";
import Twitt from "../../src/assets/Group (8).png";
import Linked from "../../src/assets/Group (9).png";

import { Rect1, Rect2, Rect3 } from "../assets";

const Home = () => {
  // Array of hero section content
  const heroContent = [
    {
      title: "Empowering Success In Projects And Operations",
      description:
        "We are an indigenous oil and gas project and operational support servicing company, purposed to provide best-in-class services in markets across Africa and other regions.",
      backgroundImage: Rect3,  
    },
    {
      title: "Global Technology, Local Inclusion",
      description:
        "Guaranteed by our global partnerships, products and services delivered are aligned with advanced technology, giving us the leverage to provide solutions while the required standards are maintained locally.",
      backgroundImage: Rect2,  
    },
    {
      title: "Procurement and technical services for critical applications",
      description:
        "Pioneering procurement and technical solutions to drive efficiency, reliability and critical performance.",
      backgroundImage: Rect1,  
    },
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);

  // Use Effect to change hero content every 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
     setCurrentHeroIndex(prev => prev === 2 ? 0 : prev + 1)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const currentHero = heroContent[currentHeroIndex];

  return (
    <>
      {/* Hero Section */}
      <div
        className="body-hero"
        style={{
          backgroundImage: `url(${currentHero.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          
        }}
      >
        <div className="hero-content">
          <h1>
            <span className="change">{currentHero.title}</span>
          </h1>
          <p>{currentHero.description}</p>
          <button className="work-btn">Work with us</button>
        </div>
      </div>

      {/* Core Values Section */}
     <div className="core-section" style={{ padding: "20px" }}>
      <h2
          style={{
            color: "#004865",
            fontWeight: "700",
            fontSize: "48px",
            margin: "7rem 0",
          }}
        >
          Our Core Values
        </h2>
        <div className="core-boxes">
          <div className="core-box">
            <img src={Core1} alt="" />
            <h5 style={{ marginTop: "20px" }}>Integrity</h5>
          </div>
          <div className="core-box">
            <img src={Core2} alt="" />
            <h5 style={{ marginTop: "20px" }}>Team Work</h5>
          </div>
          <div className="core-box">
            <img src={Core3} alt="" />
            <h5 style={{ marginTop: "20px" }}>Customer satisfaction</h5>
          </div>
          <div className="core-box">
            <img src={Core4} alt="" />
            <h5 style={{ marginTop: "20px" }}>Accountability</h5>
          </div>
          <div className="core-box">
            <img src={Core5} alt="" />
            <h5 style={{ marginTop: "20px" }}>Reliability</h5>
          </div>
        </div>
      </div>

      {/* Why Us Section */}
      <div className="why-section">
        <div className="why-img">
          <img src={Talk} alt="" />
        </div>
        <div className="why-text">
          <h1 style={{ fontWeight: "700", fontSize: "50px", color: "#004865" }}>
            Why us?
          </h1>
          <p
            style={{
              width: "85%",
              fontSize: "20px",
              color: "#232323",
              lineHeight: "28.8px",
              fontWeight: "400",
            }}
          >
            Our track record speaks for itself. We have a long history of
            successfully executing projects of all sizes and complexities.
          </p>
          <button className="work-btn">Work with us</button>
        </div>
      </div>

      <div className="max-section">
        <div className="max-text">
          <h1
            style={{
              fontWeight: "700",
              fontSize: "45px",
              width: "90%",
              color: "#004865",
            }}
          >
            {" "}
            <span className="change">Maximizing</span> Operational Efficiency
            For <span className="change">Sustainable</span>{" "}
            <span className="change">Growth</span>
          </h1>
          <p
            style={{
              width: "90%",
              color: "#232323",
              fontWeight: "400",
              fontSize: "16px",
            }}
          >
            At Sesto Elemento ltd. We pride ourselves in helping clients save
            time, reduce costs, enhance project efficiency, and mitigate risks.
          </p>
          <button className="work-btn">Read More</button>
        </div>
        <div className="max-image">
          <img src={Max} alt="" />
        </div>
      </div>

      <div className="expert-section">
        <div className="expert-image">
          <img src={Construct} alt="" />
        </div>
        <div className="expert-text">
          <h1 style={{ fontWeight: "700", fontSize: "45px", color: "#004865" }}>
            {" "}
            <span className="change">Our Expertise</span>Spans For Multiple{" "}
            <span className="change">Industries</span>
          </h1>
          <p style={{ color: "#232323", fontWeight: "400", fontSize: "16px" }}>
            We offer comprehensive project and operations support across a
            diverse range of sectors. Our expertise spans multiple industries,
            enabling us to cater to the unique needs and requirements of each
            sector
          </p>
          <button className="work-btn">Work with us</button>
        </div>
      </div>

      <div className="worked-with">
        <h5
          style={{
            textAlign: "center",
            color: "#004865",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          Clients we've worked with
        </h5>
        <div className="first-worked">
          <div>
            <img src={Nnpc} alt="" />
          </div>
          <div>
            <img src={Total} alt="" />
          </div>
          <div>
            <img src={Saipem} alt="" />
          </div>
          <div>
            <img src={Maire} alt="" />
          </div>
        </div>
        <div className="second-worked">
          <div>
            <img src={Lng} alt="" />
          </div>
          <div>
            <img src={Hec} alt="" />
          </div>
          <div>
            <img src={Gbin} alt="" />
          </div>
          <div>
            <img src={Eroton} alt="" />
          </div>
        </div>
        <div className="third-worked">
          <div>
            <img src={Entre} alt="" />
          </div>
          <div>
            <img src={Netco} alt="" />
          </div>
          <div>
            <img src={Africa} alt="" />
          </div>
        </div>
        <div className="fourth-worked">
          <div>
            <img src={Deux} alt="" />
          </div>
          <div>
            <img src={Shell} alt="" />
          </div>
        </div>
      </div>

      <div className="rech-out-section">
        <div className="the-text">
          <div>
            <h1 className="reach-top-text">Reach Out to Us</h1>
          </div>
          <div className="reach-reach">
            <div>
              <img src={Location} alt="" />
            </div>
            <div>
              <h6>Corporate headquarters:</h6>
              <p>
                3rd floor, 39 Adeola Odeku Street, Victoria island 
                <br /> Lagos Nigeria
              </p>
              <h6>Branch office/ Operational yard:</h6>
              <p>
                Plot 28 High street off ordinance road
                <br />
                Trans-Amadi Industrial layout , Port harcourt
                <br />
                Rivers state Nigeria.
              </p>
            </div>
          </div>

          <div className="reach-reach">
            <div>
              <img src={Call} alt="" />
            </div>
            <div>
              <h6>+234 8023535353</h6>
              <h6>+234 8136611200</h6>
            </div>
          </div>

          <div className="reach-reach">
            <div>
              <img src={Ig} alt="" />
            </div>
            <div>
              <p>sesl_ng</p>
            </div>
          </div>
          <div className="reach-reach">
            <div>
              <img src={Mail} alt="" />
            </div>
            <div>
              <p>info@sesl-ng.com</p>
            </div>
          </div>
        </div>
        <div>
          <img className="the-call" src={Calling} alt="" />
        </div>
      </div>

      <div className="footer-main-main">
        <div className="footer-main">
          <div className="logo-footer">
            <img style={{paddingBottom: "10px"}} src={Logo2} alt="" />
            <p>Delivering maximum value by leveraging <br /> on our global sourcing networks</p>
          </div>
          <div className="footer-contents">
            <div>
              <h5>Conpmay</h5>
              <p>About us</p>
              <p>Our Partners</p>
              <p>Faq</p>
            </div>
            <div>
              <h5>Our Service</h5>
              <p>Procurement</p>
              <p>Contracting</p>
              <p>Man power Supply</p>
              <p>Technical Site Asst</p>
              <p>Equipment Lease</p>
            </div>
            <div>
              <h5>Our Sector</h5>
              <p>oil and gas</p>
              <p>Defence</p>
              <p>Power Generation</p>
              <p>Infrastructure</p>
              <p>Renewable</p>
            </div>
            <div>
              <h5>Contact Us</h5>
              <p>Customer Support</p>
              <p>Help</p>
            </div>
          </div>
        </div>
        <div className="copy">
          <div className="copy-text">
            <p>Follow us on all social media platforms</p>
          </div>
          <div className="copy-icons">
            <div>
              <img src={Insta2} alt="" />
            </div>
            <div>
              <img src={Facebk} alt="" />
            </div>
            <div>
              <img src={Twitt} alt="" />
            </div>
            <div>
              <img src={Linked} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
