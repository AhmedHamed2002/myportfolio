import React from 'react' ;  
import '../Css/Projects.css' ;

export default function Projects() {

  let project =  [
    {
      demo:"https://ahmedhamed2002.github.io/web-page-with-responsive-2/", 
      github:"https://github.com/AhmedHamed2002/web-page-with-responsive-2"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/DEPI_task8/", 
      github:"https://github.com/AhmedHamed2002/DEPI_task8"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/DEPI_task9/", 
      github:"https://github.com/AhmedHamed2002/DEPI_task9"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/X-O-Game/", 
      github:"https://github.com/AhmedHamed2002/X-O-Game"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/Time-and-Date/", 
      github:"https://github.com/AhmedHamed2002/Time-and-Date"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/Tasks/", 
      github:"https://github.com/AhmedHamed2002/Tasks"
    } ,  
    {
      demo:"https://ahmedhamed2002.github.io/space-/", 
      github:"https://github.com/AhmedHamed2002/space-"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/guess/", 
      github:"https://github.com/AhmedHamed2002/guess"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/DEPI_task12/", 
      github:"https://github.com/AhmedHamed2002/DEPI_task12"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/DEPI_task13/", 
      github:"https://github.com/AhmedHamed2002/DEPI_task13"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/P18_AiChatBot/", 
      github:"https://github.com/AhmedHamed2002/P18_AiChatBot"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/DEPI_task10/", 
      github:"https://github.com/AhmedHamed2002/DEPI_task10"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/p17_bootstrap_3/", 
      github:"https://github.com/AhmedHamed2002/p17_bootstrap_3"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/DEPI_task7/", 
      github:"https://github.com/AhmedHamed2002/DEPI_task7"
    } , 
    {
      demo:"https://ahmedhamed2002.github.io/Culcolater/", 
      github:"https://github.com/AhmedHamed2002/Culcolater"
    } , 
    {
      demo:"https://prayer-cactus.surge.sh/", 
      github:"https://github.com/AhmedHamed2002/p6_prayer_Timings"
    }  
] ;

  return (
    <div className='container-fluid'>
      <h2 className='sub_title mt-5 pt-3'> Some Projects </h2>
      <div className='row my-5 py-5'>

          {project.map((i , index) => { 
            return(
              
              <div className='col-sm-12 col-md-6 col-lg-4 my-3'>
                <div className='Card'>
                  <div className='image'>
                    <img src={`../../assets/images/${index+1}.png`} alt={`project_${index+1}_image`}/>
                  </div>
                  <div className='text d-flex flex-md-row flex-column'>
                    <a href={i.demo}>
                      <button type="button" class="btn b1 rounded-pill mx-2">Live preview</button>
                    </a>
                    <a href={i.github}>
                      <button type="button" class="btn b2 rounded-pill mt-3 mt-md-0">Checkout github</button>
                    </a>
                  </div>  
                </div>
              </div>
            ) ;
          })}
          </div>
        </div>
          
    
  ); 
}
