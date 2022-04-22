import React from 'react'
import './Skills.css'
const Skills = () => {
  const webTech=[{"name":"HTML","percent":85},{"name":"CSS","percent":65}, {"name":"JAVASCRIPT","percent":45},{"name":"Python","percent":80},{"name":"Django","percent":70}, {"name":"React JS","percent":75}  ]
  return (
    <div className='skills-page-container'>
        <div className='web-content'>
            <div className='skills-page-headings'>Web Technology Skills</div>
            {
              webTech.map((data,i)=>{ 
                return(
                  <div className="progress-list-container" key={i}>
                      <h4>{data.name}</h4>
                        <div className="progressbar-container">
                          <div className="progressbar-complete" style={{width: `${data.percent}%`}}>
                            <div className="progressbar-liquid"></div>
                          </div>
                          <span className="progress">{data.percent}%</span>
                        </div>
              </div>
              )}
              )
            }
            
        </div>

        <div className='ml-content'>
            <div className='skills-page-headings'>Machine Learning Skills</div>
            <div className='key-skills'>
              <h1>Key Skills</h1>
              <ul>
                  <li>Data and Quantitative Analysis</li>
                  <li>Decision Analytics</li>
                  <li>Predictive Modeling</li>
                  <li>Data-Driven Personalization</li>
                  <li>Machine Learning Algorithms</li>
                  <li>Organizational and analytical skills</li>
                  <li>Understanding of technical documentation</li>
              </ul>
            </div>
            <div className='libraries'>
                <h1>Libraries</h1>
                <ul className='ml-library-skills'>
                  <li>Numpy</li>
                  <li>Pandas</li>
                  <li>Matplotlib</li>
                  <li>Seaborn</li>
                  <li>PyTorch</li>
                  <li>Tensorflow</li>
                </ul>
                
            </div>
            

        </div>
    </div>
  )
}

export default Skills