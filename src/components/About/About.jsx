import React from 'react'
import './About.css'
const About = () => {
  return (
    <div className='about-page'>
        <div className='about-section'>
              <h1>About Me</h1>
              <div>I am passionate about all things Django. I work hard, I care about writing clean code and I genuinely love to learn new things. I am currently looking for the right opportunity to work in an environment that will help me to progress into a Django developer.</div>
        </div>
        <div className='education-section'>
              <h1>Education</h1>
              <div>
                  <p>Daffodil International Universiry.</p>
                  <p>B.Sc in CSE , Sep 2017-Dec 2021</p>
                  <p>CGPA 3.81 out of 4</p>
              </div>
              
        </div>

        <div className='work-history'>
              <h1>Work History</h1>
              <div>
              Full Stack Developer Intern Sep 21- Dec 21 <br/>
              Where, My role was to develop full-fledged web applications. Where in client-side I used react
js and server-side I used Django. Usually, I designed a data model layer, working on e-commerce
based apps.
              </div>
              
              
        </div>

        <div className='certificate'>
            <h1>Professional Certificate</h1>
            <div>
            Full Stack Web Development Python Django with React JS at Skill Jobs March 21 - Aug 21.<br/>
            SQL for Data Science at Coursera.<br/>
            Data Analysis with Python - IBM Developer Skills Network.<br/>
            Data Visualization with Python - IBM Developer Skills Network.
            </div>
            
        </div>

    </div>
  )
}

export default About;