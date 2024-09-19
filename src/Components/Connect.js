import React from 'react' ;
import '../Css/Connect.css' ;

export default function Connect() {
  return (
    <div className='w-100'>
      <h2 className='sub_title mt-5 pt-3'> Connect Me </h2>

        <div className='d-flex align-items-center justify-content-center  py-5'>
          <div className='d-flex flex-column text-center text-md-start'>
            <a className='text-decoration-none text-white fs-3 my-4' href='https://www.facebook.com/ahmedhamed.hammed?mibextid=ZbWKwL' target='blank'>
              <span><i class="fa-brands fa-facebook text-primary mx-3"></i> Facebook</span>
            </a>
            <a className='text-decoration-none text-white fs-3 my-4' href='https://www.linkedin.com/in/ahmed-hamed-610537294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='blank'>
              <span><i class="fa-brands fa-linkedin text-info mx-3"></i> Linkedin</span>
            </a>
            <a className='text-decoration-none text-white fs-3 my-4' href='https://github.com/AhmedHamed2002' target='blank'>
              <span><i class="fa-brands fa-github t-o mx-3"></i> Github</span>
            </a>
            <span className='text-white fs-3 my-4'><i class="fa-brands fa-whatsapp t-g mx-3"></i> +20 1020841565 </span>
            <span className='text-white fs-5 fs-md-3 my-4'><i class="fa-solid fa-envelope text-danger mx-3"></i> ah1973826450@gmail.com </span>
          </div>
        </div>
        </div>
  )
}
