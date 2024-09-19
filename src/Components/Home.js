import React from 'react'
import '../Css/Home.css' ; 
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <header className='py-5'>
            <div className='row my-5 pt-3'>
                <div className='col-lg-6 col-sm-12'>
                    <h1 className='fs-1 fw-bold text-white text-sm-center'>Hello, I'm <span>Ahmed Hamed</span></h1>
                    <h2 className='fs-2 fw-bold  my-5 text-sm-center text-md-start py-2'>Frontend Developer</h2>
                    <p className='text-sm-center text-md-start text-secondary'>
                        I am a Front-End Developer specializing in React JS and Angular,
                        currently studying  Engineering at the Al-Azhar University.
                        I have strong skills in HTML, CSS, JavaScript, andmodern React libraries and tools.
                        I excel in time management and thrive in collaborative teamenvironments.
                        Passionate about creating user-friendly, responsive, and visually appealing webapplications,
                        I am equipped to tackle complex problems and deliver high-quality solutionsefficiently .
                    </p>
                    <div>
                        <a href="../../assets/cv.pdf" download="cv.pdf" target="_blank">
                            <button className='rounded-pill px-4 py-2 m-auto mt-3'>Download resume <i class="ic fa-solid fa-download ms-2"></i> </button>
                        </a>
                        <Link to="/projects">
                            <button className='rounded-pill px-4 py-2 m-auto mt-3 mx-2'>View Project <i class="fa-regular fa-share-from-square ms-3"></i> </button>
                        </Link>
                    </div>
                    <div className='icon mt-3'>
                        <a href="https://www.linkedin.com/in/ahmed-hamed-610537294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank">
                            <i class="fa-brands fa-linkedin mx-2 fs-2 text-white"> </i>
                        </a>
                        <a href="https://github.com/AhmedHamed2002" target="blank">
                            <i class="fa-brands fa-github mx-2 fs-2 text-white"></i>
                        </a>
                        
                        
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12  mx-auto mt-5 pt-2 mt-md-0 pt-md-3'>
                    <div className='image m-auto '>
                        <img src='../../assets/images/Ahmed Hamed.jpg' alt='my name is Ahmed' />
                    </div>
                </div>
            </div>
        </header>
    )
}
