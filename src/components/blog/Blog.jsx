import React, { useState } from "react";
import Back from "../common/Back";
import RecentCard from "../home/recent/RecentCard";
import "../home/recent/recent.css";
import img from "../../assets/images/blogbg.png"; // Relative import from src/assets
import img1 from "../../assets/images/blogbg.png"; // Ensure this file is inside src/assets
import reviewImg from "../../assets/images/review.jpg";
import Heading from "../common/Heading";

const Blog = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleMoreInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img1} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Experience from our past customers."
              subtitle="Check out our company story and work process"
            />

            <p>
              "From the very start, the team at A.S. Marines Services impressed
              us with their professionalism and knowledge. They guided us in
              choosing the right equipment for our project and provided
              excellent support throughout. The dredging equipment worked
              flawlessly, saving us time and money. We’ll definitely partner
              with them again!" –
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            {showMore && (
              <p>
                Our commitment to excellence and customer satisfaction ensures
                that we deliver top-quality service for every project. We take
                pride in our expertise and the relationships we build with our
                clients.
              </p>
            )}
            <button className="btn2" onClick={toggleMoreInfo}>
              {showMore ? "Show Less" : "More About Us"}
            </button>
          </div>
          <div className="right row">
            <img src={reviewImg} alt="Customer review" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
