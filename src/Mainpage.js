import React from 'react';
import './App.css';
import profile from './profile1.jpg';

console.log(profile);

class Mainpage extends React.Component {
  render() {
    return (
      <div className="Mainpage">
    
      <div class="card card1 bg-light mb-3 border-top-0 border-dark" >
         <img class="card-img-top" src={profile} alt="Card image cap" />
         <div class="card-body">
            <h5 class="card-title">Student Engineer, Life-long Learner</h5>
            <p class="card-text">“Life is like a piano. What you get out of it depends on how you play it.” -Tom Lehrer</p>
            <a href="#Aboutme" class="btn btn-primary">Let's get started!</a>
         </div>
      </div>
      
      </div>
    );
  }
}

export default Mainpage;