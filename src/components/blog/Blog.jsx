import React from "react"
import Back from "../common/Back"
<<<<<<< HEAD
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from '../../assets/images/blogbg.png';

=======
import Heading from "../common/Heading"
import img1 from "/Users/shubz8/Documents/fyp/Dredgehub/src/components/images/blogbg.png"
import  "/Users/shubz8/Documents/fyp/Dredgehub/src/components/images/review.jpg"
>>>>>>> 7b3659392253623218b5c8970e8540e14ea0d5cf

const Blog = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?'  cover={img1}  />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Experience from our past customers.' subtitle='Check out our company story and work process' />

            <p>"From the very start, the team at A.S. Marines Services impressed us with their professionalism and knowledge. They guided us in choosing the right equipment for our project and provided excellent support throughout. The dredging equipment worked flawlessly, saving us time and money. We’ll definitely partner with them again!"
             – 
</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src ='/Users/shubz8/Documents/fyp/Dredgehub/src/components/images/review.jpg' alt='logo' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog
