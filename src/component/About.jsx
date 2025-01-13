import React from 'react'
import './About.css'
import aniket from './images/anik.jpg'
import govind from './images/Govind.jpeg'
import nikita from './images/Nikita.jpeg'
import nisha from './images/Nisha.jpeg'
import yashoda from './images/Yashoda.jpeg'
import varsha from './images/Varsha.jpeg'
import abhi from './images/Abhi.jpeg'
import kamlesh from './images/Kamlesh.jpeg'
const About = () => {
  return (
    <div className='Abbody'>
      <div class="title"><img src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
<div className="heading"><h1>Welcome To Our Website</h1></div>
</div>
    <div class="about_us">
         
        <div className="box-1"><img src={aniket} /></div>
        <div className="box-2"></div>
        <div className="box-3"><h1>About Me </h1>
     <p>We're Small Crative Design Studio Based in New Work ,Working With Adventurous Client And Providing Cretative concept,Branding,Graphic Design,Art Direction And Degital Communication Services. </p>
     <h2>Aniket  Sonawat<br/> <span>Team Leader</span></h2>
    
     </div>
</div>
<div className="team">
<h1>Our Team Members</h1>
</div>
<div className="team-member">
    <div className="content">
<div className="main"><div className="circle"></div></div>
<div className="img"><img src={govind} /></div>
<h2>Govind Aanjana</h2>
<p>Designer</p>
    </div>
    <div className="content">
        <div className="main"><div className="circle"></div></div>
<div className="img"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWts_0JFShDJCjvoHC9eWxgEUzjo9EyL99w&s" /> </div>

<h2>Divyani Patidar</h2>
<p>Designer</p>
    </div>
    <div className="content">
        <div className="main"><div className="circle"></div></div>
<div className="img"><img src={nisha} /></div>
<h2>Nisha Kumawat</h2>
<p>Designer</p>
    </div>
    <div className="content">
        <div className="main"><div className="circle"></div></div>
<div className="img"><img src={abhi} /></div>
<h2>Abhishek Rathore</h2>
<p>Designer</p>
    </div>
    <div className="content">
        <div className="main"><div className="circle"></div></div>
<div className="img"><img src={nikita} /></div>
<h2>Nikita Chouhan</h2>
<p>Designer</p>
    </div>
    <div className="content">
        <div className="main"><div className="circle"></div></div>
<div className="img"><img src={kamlesh} /></div>
<h2>Kamlesh Patidar</h2>
<p>Designer</p>
    </div>
    <div className="content">
        <div className="main"><div className="circle"></div></div>
<div className="img"><img src={varsha} /></div>
<h2>Varsha Rathore</h2>
<p>Designer</p>
    </div>
    <div className="content">
        <div className="main"><div className="circle"></div></div>
<div className="img"><img src={yashoda} /></div>
<h2>Jaya Dhakad</h2>
<p>Designer</p>
    </div>
</div>
    </div>
  )
}

export default About
