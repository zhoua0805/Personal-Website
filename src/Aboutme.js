import React from 'react';
import './App.css';
import civ from './civ.jpg';
import christmas from './christmas.jpg';
import ben from './ben.jpg';
import travel from './travel.jpg';


console.log(civ);
console.log(christmas);
console.log(ben);
console.log(travel);

class Aboutme extends React.Component {
  render() {
    return (
      <div className="Aboutme" id="Aboutme">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3" ></li>

          </ol>
          <div class="carousel-inner">

            <div class="carousel-item active">
              <div className="piano">
              <img class="d-block w-100" src={christmas} alt="First slide"/>
              <div class="carousel-caption d-none d-md-block bg-dark rounded">
                <h5>About Me</h5>
                <p>Hey my name is Alice! I am a second year Engineering Science student at the University of Toronto. My goal is to make a difference to the world using my innovation, determination, and engineering skills.</p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
            <div className="piano">
              <img class="d-block w-100" src={civ} alt="Second slide"/>
              <div class="carousel-caption d-none d-md-block bg-dark rounded">
                <h5>School Projects</h5>
                <p>During first year, I was involved in many design projects, such as building a mat-board bridge, designing an improved firefighter safety alarm system, etc.</p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div className="piano">
              <img class="d-block w-100" src={ben} alt="Third slide"/>
              <div class="carousel-caption d-none d-md-block bg-dark rounded">
                <h5>Extra-curricular Activities</h5>
                <p>Outside of school, I like attending hackathons and volunteering for EngSci outreaching events</p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div className="piano">
                <img class="d-block w-100" src={travel} alt="Fourth slide"/>
                <div class="carousel-caption d-none d-md-block bg-dark rounded">
                <h5>Hobbies</h5>
                <p>travelling, piano, and many more...</p>
                </div>
              </div>
            </div>

          </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>


          <div className="whitekey1"></div>
          <div className="whitekey2"></div>
       </div>

    );
  }
}

export default Aboutme;