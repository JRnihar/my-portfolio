import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import './Home.css'

const Home = () => {
    return (
        <section className='homeBody'>
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
                     
                    <div class="content mt-5">
                        <div class="title text-white"><span>My Skill</span></div>
                    </div>
                    <div className='d-flex'>
                        <Link to='/home/web'><button className='rounded mt-5 ms-3 btn btn-outline mb-5'>web</button></Link>
                        <Link to='/home/tools'><button className='rounded mt-5 ms-3 btn btn-outline mb-5'>tools</button></Link>
                        <Link to='/home/familiar'><button className='rounded mt-5 ms-3 btn btn-outline mb-5'>Familiar</button></Link>
                    </div>
                        <Outlet></Outlet>
                       

                        {/* <Link to='/home/web'><button className='text-white'>web</button></Link> */}
                       
                </div>
                <Contact></Contact>
            </div>
        </section>
    );
};

export default Home;