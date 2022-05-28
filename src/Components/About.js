import React from 'react';
import './About.css'


const About = () => {
    return (
        <section>
            <div class="content mt-5">
                <div class="title text-white"><span>About Me</span></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://i.ibb.co/Qfdgn0s/GZR3671.jpg" className=' img-fluid w-100  mt-5 rounded-3' alt="" />
                       
                    </div>
                    <div className="col-md-6">
                        <h4 className='text-white lead mt-5 '>
                            Hello! I'm Zonayed Ahmed, a passionate software engineer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Chandigarh University at Punjab, India in 2020. I am available for any kind of job opportunity that suits my interests.
                        </h4>
                        <button className='rounded mt-5 mb-5'>Resume</button>
                        <button className='rounded mt-5 ms-3 btn btn-outline mb-5'>Skill</button>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;