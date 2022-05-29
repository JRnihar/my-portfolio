import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import './Home.css'
import Portfolio from './Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Footer from './Footer';
// ..
AOS.init();

const Home = () => {
    return (
        <section className='homeBody'>
           
            <div className="container">
                <div className="row mt-5">
                        <div data-aos="fade-down-right"
                    
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        
                         className="col-md-6">
                                <p className='line1'>Hello!! I am</p>
                                <h1 className='text-white text-bold name'>Monirul Islam</h1>
                                {/* <h3 className='title1 tex-bold'>Web Developer </h3> */}
                        <ul  className='d-flex'
                        > <li className='title1'><p className='text-white text-bold title2 d-flex'>Front-End Developer</p></li>
                         {/* <li className='title1 ms-5'><p className='text-white text-bold title2'>Full-Stack Developer</p></li> */}
                         </ul>
                        <a href="https://drive.google.com/file/d/1_SJfqAVtDyl93XUsZT4vNTti3P4_4no-/view?usp=sharing" target="_blank" rel="noopener noreferrer"> <button className='rounded mt-5 mb-5'>Resume</button></a>
                        <Link to='/about'><button className='rounded mt-5 ms-3 btn btn-outline mb-5'>About Me</button></Link>
                        </div>
                        <div data-aos="fade-down-left"
                        
                        data-aos-delay="50"
                        data-aos-duration="1000"
                       
                         className="col-md-6">
                        <img src="https://i.ibb.co/hcNb21S/GZR3643-1.jpg" className='  img-fluid w-50  rounded-3' alt="" />
                        </div>
                        <About></About>
                     
                    <div class="content mt-5">
                        <div class="title text-white"><span>My Skill</span></div>
                    </div>
                    <div className='d-flex'>
                        <Link to='/home/web'><button className='rounded mt-5 ms-3 btn btn-outline mb-5'>Core</button></Link>
                        <Link to='/home/tools'><button className='rounded mt-5 ms-3 btn btn-outline mb-5'>tools</button></Link>
                        <Link to='/home/familiar'><button className='rounded mt-5 ms-3 btn btn-outline mb-5'>Other</button></Link>
                    </div>
                        <Outlet></Outlet>
                       

                        {/* <Link to='/home/web'><button className='text-white'>web</button></Link> */}
                       
                </div>
                <Portfolio></Portfolio>
                <Contact></Contact>
               
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Home;