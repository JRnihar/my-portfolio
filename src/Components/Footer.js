import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerbg'>
            <footer class="bg p-5 text-center text-lg-start">
 
  <div class="text-center p-3">
   <p className='text-white text-muted'>
   © 2022 Copyright Monirul Islam
   </p>
                    <div className='mt-2'>
                        <a href="https://github.com/JRnihar" target='_blank'><i class=" text-white icon fa-brands fa-github"></i></a><a href="https://niharmonirulislam@gmail.com" target='_blank'><i class="text-white ms-3 icon fa-solid fa-envelope"></i></a><a href="https://www.facebook.com/monirulislam.nihar" target='_blank'><i class=" ms-3 text-white icon fa-brands fa-facebook-square"></i></a><a href="https://www.linkedin.com/in/moinr/" target='_blank'><i class=" ms-3 text-white icon fa-brands fa-linkedin" target='_blank'></i></a><a href="https://wa.me/1571142002" target='_blank'><i class=" ms-3 text-white icon fa-brands fa-whatsapp"></i></a>

                    </div>
    <h4 class="text-white" >Moniruls Islam</h4>
                  
  </div>
 
</footer>
        </div>
    );
};

export default Footer;