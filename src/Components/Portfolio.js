import React from 'react';
import './Portfolio.css'
import computer from '../img/Screenshot (111).png'
import Shop from '../img/Screenshot (113).png'
import Photography from '../img/Screenshot (115).png'
import Ecomarce from '../img/Screenshot (117).png'
import painting from '../img/Screenshot (119).png'
import calculate from '../img/Screenshot (121).png'

const Portfolio = () => {
    return (
        <section>
            <div class="content mt-5">
                <div class="title text-white"><span>My Projects</span></div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card w-100 h-100">
                       <div >
                            <img src={computer} class="card-img-top h-100 " alt="..." />
                       </div>
                        <div class="card-body">
                            <h3 class="card-title text-white">Computer House</h3>
                            <p class="card-text text-white">Simple ordering system with a dashboard to manage orders.A system with ability to determine admin or customer to show interactive options based on the role.</p>
                            <p><i class="icon text-white fa-brands fa-github"></i><a href="https://final-project-d2e43.web.app/" target='_blank'><i class="icon fa-solid ms-3 fa-arrow-up-right-from-square text-white"></i></a></p>
                            <div className='d-flex'>
                                <p className='text-white' >ReactJS</p>
                                <p className='ms-3 text-white'>NodeJS</p>
                                <p className='ms-3 text-white'>MongoDB</p>
                                <p className='ms-3 text-white'>Tailwind</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card w-100 h-100">
                        <div>
                            <img src={Shop} class="card-img-top h-100  " alt="..." />
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-white">DELPHINUS-SHOP
                            </h3>
                            <p class="card-text text-white">Deleting system,manage products system with filtering and Simple ordering system .A system with ability to determine customer to show interactive options </p>
                            <p><a href="https://github.com/JRnihar/DELPHINUS-SHOP" target='_blank'><i class="icon text-white fa-brands fa-github"></i></a><a href="https://assigment-10-ce427.firebaseapp.com/" target='_blank'><i class="icon fa-solid ms-3 fa-arrow-up-right-from-square text-white"></i></a></p>
                            <div className='d-flex'>
                                <p className='text-white' >ReactJS</p>
                                <p className='ms-3 text-white'>NodeJS</p>
                                <p className='ms-3 text-white'>MongoDB</p>
                                <p className='ms-3 text-white'>Bootstrap</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card w-100 h-100">
                        <div>
                            <img src={Photography} class="card-img-top h-100  " alt="..." />
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-white">Mahi-Photography

                            </h3>
                            <p class="card-text text-white">A front-end web application.And Strong Security with log-in and Registration system using Firebase </p>
                            <p><a href="https://github.com/JRnihar/independent-service" target='_blank'><i class="icon text-white fa-brands fa-github"></i></a><a href="https://photographer-services.web.app/" target='_blank'><i class="icon fa-solid ms-3 fa-arrow-up-right-from-square text-white"></i></a></p>
                            <div className='d-flex'>
                                <p className='text-white' >ReactJS</p>
                                <p className='ms-3 text-white'>Bootstrap</p>
                                <p className='ms-3 text-white'>Firebase</p>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card w-100 h-100">
                        <div>
                            <img src={Ecomarce} class="card-img-top h-100  " alt="..." />
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-white">Ema-John

                            </h3>
                            <p class="card-text text-white">It’s an E-commerce base website. A web application which users can calculate their shopping and review their products. Users also can delete their products.</p>
                            <p><a href="https://github.com/JRnihar/simple-ema-john-auth" target='_blank'><i class="icon text-white fa-brands fa-github"></i></a><a href="https://ema-john-simple-firebase-a348a.web.app/" target='_blank'><i class="icon fa-solid ms-3 fa-arrow-up-right-from-square text-white"></i></a></p>
                            <div className='d-flex'>
                                <p className='text-white' >ReactJS</p>
                                <p className='ms-3 text-white'>Bootstrap</p>
                                <p className='ms-3 text-white'>Vanilla Javascript</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card w-100 h-100">
                        <div>
                            <img src={painting} class="card-img-top h-100  " alt="..." />
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-white">Painting Shop

                            </h3>
                            <p class="card-text text-white">A simple Front-end web application using raw javascript.</p>
                            <p><a href="https://github.com/JRnihar/luck-one" target='_blank'><i class="icon text-white fa-brands fa-github"></i></a><a href="https://jr-nihar-shop-00dcaf.netlify.app/" target='_blank'><i class="icon fa-solid ms-3 fa-arrow-up-right-from-square text-white"></i></a></p>
                            <div className='d-flex'>
                                <p className='text-white' >ReactJS</p>
                                <p className='ms-3 text-white'>Bootstrap</p>
                                <p className='ms-3 text-white'>Vanilla Javascript</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card w-100 h-100">
                        <div>
                            <img src={calculate} class="card-img-top h-100  " alt="..." />
                        </div>
                        <div class="card-body">
                            <h3 class="card-title text-white">Money Master

                            </h3>
                            <p class="card-text text-white">A simple calculate system using raw javascript.</p>
                            <p><a href="https://github.com/JRnihar/money-master" target='_blank'><i class="icon text-white fa-brands fa-github"></i></a><a href="https://jr-nihar-money-cost-c3e072.netlify.app/" target='_blank'><i class="icon fa-solid ms-3 fa-arrow-up-right-from-square text-white"></i></a></p>
                            <div className='d-flex'>
                                <p className='text-white' >Html, Css</p>
                                <p className='ms-3 text-white'>Bootstrap</p>
                                <p className='ms-3 text-white'>Vanilla Javascript</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;