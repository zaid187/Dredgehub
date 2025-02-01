import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../../assets/images/aboutus.jpg";
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?'  cover={img}  />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Welcome to A.S. Marines Services, your trusted partner for dredging and equipment hire solutions. 
              We specialize in providing top-quality dredging equipment and efficient rental services tailored to meet 
              the unique needs of our clients. Our platform is designed to simplify the rental process, showcase our extensive
               catalog of equipment, and ensure seamless project management for clients across various industries. With a commitment 
               to operational excellence, customer satisfaction, and innovation, A.S. Marines Services is dedicated to supporting 
               your projects with reliable equipment and unmatched expertise. Let us help you bring your vision to life!
</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
