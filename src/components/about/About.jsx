import React, { useState } from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../../assets/images/aboutus.jpg";
import "./about.css";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />

            <p>
              Welcome to A.S. Marines Services, your trusted partner for
              dredging and equipment hire solutions. We specialize in providing
              top-quality dredging equipment and efficient rental services
              tailored to meet the unique needs of our clients. Our platform is
              designed to simplify the rental process, showcase our extensive
              catalog of equipment, and ensure seamless project management for
              clients across various industries. With a commitment to
              operational excellence, customer satisfaction, and innovation,
              A.S. Marines Services is dedicated to supporting your projects
              with reliable equipment and unmatched expertise. Let us help you
              bring your vision to life!
            </p>
            
            {showMore && (
              <p>
                Our team consists of industry experts with years of experience
                in maritime solutions. We take pride in delivering exceptional
                service, maintaining transparency in all our dealings, and
                continuously improving our offerings to serve you better. From
                small-scale projects to large infrastructural developments, we
                ensure that our clients receive the best possible support.
              </p>
            )}

            <button className="btn2" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show Less" : "More About Us"}
            </button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="Company" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
