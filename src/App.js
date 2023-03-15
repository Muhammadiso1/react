import React, { Component } from 'react';

import './style.css'
import bar from "../src/images/menu.png"

import logo from "../src/images/image.png"
import reone from "../src/images/Re.png"
import retwo from "../src/images/Re2.png"
import rethree from "../src/images/Re3.png"

import fb from "../src/images/fb.png"
import group from "../src/images/Group.png"
import insta from "../src/images/insta.png"
import linkedin from "../src/images/Linkedin.png"

class App extends Component {
  render() {
    return (
      <div className='container'>
      <header>
        <img src={bar} alt="bar" />
        <ul>
          <li><a href="#">Works</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </header>   
        <main>
          <h1>Hi, I am John,</h1>
          <h1>Creative Technologies</h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <button type='button'>Download Resume</button>
          <img src={logo} alt="img-1" />
                    
          </main>   
          <div className="page-1">
          <div className="box-0">
          <a href="#">Recent posts</a>
           <p>View all</p>
          </div>
            <div className="box-1"><h1>Making a design system from scratch</h1>
            <p>12 Feb 2020   |     Design, Pattern</p>
            <h6>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h6>
            </div>
            <div className="box-2"><h1>Making a design system from scratch</h1>
            <p>12 Feb 2020   |     Design, Pattern</p>
            <h6>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h6>
            </div>
          </div>
          <div className="page-2">
            <p>Featured works</p>
            <div className="box-1">
              <img src={reone} alt="reone"/>
              <div className="text">
              <h1>Designing Dashboards</h1>
              <span>2020</span><a href="#">Dashboard</a>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            
              </div>
              </div>
            <div className="box-1">
              <img src={retwo} alt="reone"/>
              <div className="text">
              <h1>Vibrant Portraits of 2020</h1>
              <span>2018</span><a href="#">Illustration</a>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            
              </div>
              </div>
            <div className="box-1">
              <img src={rethree} alt="reone"/>
              <div className="text">
              <h1>36 Days of Malayalam type</h1>
              <span>2018</span><a href="#">Typography</a>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            
              </div>
              </div>
          </div>
          <footer>
        <div className="social">
          <img src={fb} alt="fb" />
          <img src={insta} alt="insta" />
          <img src={group} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
        </div>
        
           <a href="#" className='copyright'>Copyright ©2020 All rights reserved </a>
          </footer>
      
      </div>
    );
  }
}

export default App;