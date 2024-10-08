import React from 'react'
import '../index.css'
import  Whomage from '../assets/Frame 61005.png'
import Core1 from "../../src/assets/Group 50 (2).png";
import Core2 from "../../src/assets/Group 50 (1).png";
import Core3 from "../../src/assets/Group 50.png";
import Core4 from "../../src/assets/Group 50 (3).png";
import Core5 from "../../src/assets/Group 50 (4).png";
import Motivate  from '../../src/assets/Group 628.png';
import Talk from '../../src/assets/Group 20664.png';
import Nnpc  from '../../src/assets/palmpay (2).png';
import Total from '../../src/assets/Frame 427318867.png';
import Saipem from '../../src/assets/Frame 427318865.png';
import Maire from '../../src/assets/Frame 427318868.png';
import Lng from '../../src/assets/palmpay (3).png';
import Hec from '../../src/assets/Frame 427318867 (1).png';
import Gbin from '../../src/assets/Frame 427318865 (1).png';
import Eroton from '../../src/assets/Frame 427318868 (1).png';
import Entre from '../../src/assets/Frame 427318866.png';
import Netco from '../../src/assets/Frame 427318867 (2).png';
import Africa from '../../src/assets/Frame 427318865 (2).png';
import Deux from '../../src/assets/palmpay (4).png';
import Shell from '../../src/assets/Frame 427318868 (2).png';
import Location from '../../src/assets/marker 1 (1).png';
import Call from '../../src/assets/phone-call 1 (1).png';
import Ig from '../../src/assets/Instagram Outline (2).png';
import Mail from '../../src/assets/envelope 2 (1).png';
import Calling from '../../src/assets/Group 34.png';
import Logo2 from '../../src/assets/Frame 60994.png';
import Insta2 from '../../src/assets/bi_instagram.png';
import Facebk from '../../src/assets/Group (7).png';
import Twitt from '../../src/assets/Group (8).png';
import Linked from '../../src/assets/Group (9).png';




const About = () => {
  return (
    <>
      <div style={{textAlign: "center", background: "#E8FAFF", height: "100vh"}}>
        <h1 style={{paddingTop: "13rem", fontSize: "60px", fontWeight: "800"}}> <span style={{color:"#004865"}}>SESTO</span> <span style={{color:"#42C6EC"}}>ELEMENTO</span> <br /> <span></span> <span style={{color:"#42C6EC"}}>SERVICES</span> <span style={{color:"#004865"}}>LIMITED</span></h1>
        <p style={{color: "#232323", fontSize:"16px", fontWeight: "400"}}>Sesto elemento services Limited was established in 2013, a leading, Procurement, Integration, Installation and Maintenance provider.</p>
        <p>Sesto elemento is  headquartered in Lagos Nigeria and has a satellite office in Port Harcourt and Abuja. Our primary focus is on Project Procurement <br /> services, Technical site assistance services innovative solutions enhancing Production (Oil, Gas, Minerals), Mining, Pipeline Infrastructure, while its scope <br /> extends to various environmentally responsible technologies enhance clean and renewable energy.</p>
      </div>
      <div style={{textAlign: "center"}} className="who-section">
        <h2 style={{marginTop: "2.5rem", fontWeight: "600", color: "#004865"}}>Who we are</h2>
        <p style={{fontWeight: "500", color: "#232323"}}>We are a projects and operations support services firm poised towards the provision of solutions in the Oil, Energy, <br /> Marine, Building and Civil Infrastructure Industry where we develop unrivaled trailblazing solutions in building <br /> sustainable infrastructures that comply with global best practice.</p>
      </div>
      <div className="below-who-cont">
        <div className="below-who-image">
          <img src={Whomage} alt="" />
        </div>
        <div className="below-who-text">
          <h4 style={{color: "#004865", fontWeight: "600"}}>Our Vision</h4>
          <p>Our vision is to provide our clients with cost effective value adding solutions <br /> to achieve success in projects and operations with high standards and <br /> positive economic position.</p>
          <h4 style={{color: "#004865", fontWeight: "600"}}>Our Mission</h4>
          <p>To improve customer operation efficiency by reducing products and service <br /> turnaround time through partnership with global manufacturers and <br /> engineers. We also keep stock on selected items which enables us offer <br /> short delivery time. Our quality control system aims to enhance customer <br /> satisfaction through effective procedures.</p>
        </div>
      </div>
      <div className="core-section" style={{background: "#E8FAFF", padding: "20px"}}>
        <h2
          style={{
            color: "#004865",
            fontWeight: "700",
            fontSize: "48px",
            margin: "5rem 0",
          }}
        >
          Our Core Values
        </h2>
        <div className="core-boxes" style={{paddingBottom: "4.5rem"}}>
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
      <div className="motivate-sec">
        <div className="motivate-section-text">
          <h1 style={{color: "#004865", fontWeight: "600"}}>Our Motivation</h1>
          <p>We are motivated to achieve the elements needed to provide <br /> project success and build structures and roadways that will leave a <br /> lasting impression for our clients, our society and our communities</p>
          <button className='motive-btn'>Work with us</button>
        </div>
        <div className="motivate-section-image">
          <img src={Motivate} alt="" />
        </div>
      </div>
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
            successfully executing projects of all sizes and complexities. Our
            satisfied clients have consistently praised our ability to deliver
            projects on time, within budget, and to the highest quality
            standards.
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

    

    
  )
}

export default About
