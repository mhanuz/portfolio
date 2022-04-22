import React from 'react'
import './Project.css'
import img1 from '../../images/v-blog-pic.PNG'
import img2 from '../../images/v-blog-pic.PNG'
import img3 from '../../images/Shop-APP.PNG'
const Projects = () => {
  return (
    <>
      <div className='project-page-container'>
      <div className="card-container">
      <div className="card">
          <div className="card-body">
              <span className="card-number card-circle subtle">1</span>
              <span className='card-author subtle' >Category: React+ Django</span>
              <h2 className='card-title'>Visitor's Blog</h2>
              <span className='card-description subtle'>
              This is visitor's blog site. Where people can find good places to visit. This site has some features like user creation, login, logout, redirecting after login, post show user-wise and crud operation. One user can not delete other user post. Every user has their respective profile.
              </span>
              <div className='card-read'><a target="_blank" rel="noreferrer" href="https://github.com/mhanuz/Dj_React_Blog">Source Code</a></div>
          </div>
              <img src={img1} alt="images" className="card-media" />
              <span className='card-tag subtle'><a target="_blank" rel="noreferrer" href="https://morning-tor-91967.herokuapp.com/">Live View</a></span>
      </div>
    </div>

    <div className="card-container">
      <div className="card">
          <div className="card-body">
              <span className="card-number card-circle subtle">2</span>
              <span className='card-author subtle' >Category:Django</span>
              <h2 className='card-title'>name</h2>
              <span className='card-description subtle'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </span>
              <div className='card-read'>Source Code</div>
          </div>
              <img src={img2} alt="images" className="card-media" />
              <span className='card-tag subtle'>Live View</span>
      </div>
    </div>

    <div className="card-container">
      <div className="card">
          <div className="card-body">
              <span className="card-number card-circle subtle">3</span>
              <span className='card-author subtle' >Category: Djanog+React Js</span>
              <h2 className='card-title'>Shop APP</h2>
              <span className='card-description subtle'>
              This is an ecommerece application. where you can find several kinds of mobile phones. This site allow's a visitor to show products categorywise and add to cart.For products ordering you should have an account. And also user authentication and authorization.
              </span>
              <div className='card-read'><a target="_blank" rel="noreferrer" href="https://github.com/mhanuz/djreact-ecom-app">Source Code</a></div>
          </div>
              <img src={img3} alt="images" className="card-media" />
              <span className='card-tag subtle'><a target="_blank" rel="noreferrer" href="https://djreact-ecom-app.herokuapp.com/">Live View</a></span>
      </div>
    </div>
      </div>
    </>
  )
}

export default Projects;