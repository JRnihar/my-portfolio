import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'


const About = () => {
    return (
        <section className='aboutBody'>
            <div class="content mt-5">
                <div class="title text-white"><span>About Me</span></div>
            </div>
            <div className="container">
                <div className="row">
                    <div
                     data-aos="fade-right"
                 
                     data-aos-delay="100"
                     data-aos-duration="1000"
                     
                     className="col-md-6">
                        <img src="https://i.ibb.co/Qfdgn0s/GZR3671.jpg" className=' img-fluid w-100  mt-5 rounded-3' alt="" />
                       
                    </div>
                    <div 
                    data-aos="fade-left"
                   
                    data-aos-delay="100"
                    data-aos-duration="1000"
                 
                    className="col-md-6">
                        <h4 className='text-white lead mt-5 '>
                            Hello! I'm Monirul Islam, a passionate Front-End Developer. I develop web applications  and desktop applications. My core skill is based on JavaScript,ReactJS and I love to do most of the things using JavaScript,ReactJS. I love to make the web more open to the world. I am studing with a bachelor's degree  from National university at Chittagong, Basngladesh . I am available for any kind of job opportunity that suits my interests.
                        </h4>
                        <button className='rounded mt-5 mb-5'>Resume</button>
                        <Link to='/contact'><button className='rounded mt-5 ms-3 btn btn-outline mb-5'>Contact Me</button></Link>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;