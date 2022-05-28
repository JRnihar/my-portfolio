import React from 'react';
import About from './About';
import './Home.css'

const Home = () => {
    return (
        <div className='homeBody'>
            <div className="container">
                <div className="row mt-5">
                        <div className="col-md-6">
                                <p className='line1'>Hello!! I am</p>
                                <h1 className='text-white text-bold name'>Monirul Islam</h1>
                                <h3 className='title1 tex-bold'>Full-Stack Developer </h3>
                        <p className='text-white text-bold title2'><li>Web Developer</li></p>
                        <button className='rounded mt-5 mb-5'>Resume</button>
                        <button className='rounded mt-5 ms-3 btn btn-outline mb-5'>About Me</button>
                        </div>
                        <div className="col-md-6">
                        <img src="https://i.ibb.co/hcNb21S/GZR3643-1.jpg" className='justify-content-center img-fluid w-50 ms-5 rounded-3' alt="" />
                        </div>
                        <About></About>
                </div>
            </div>
        </div>
    );
};

export default Home;