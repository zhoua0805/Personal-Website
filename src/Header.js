import React from 'react';
import './App.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <nav class="navbar navbar-dark navbar-expand-md bg-dark rounded" >

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="navbar-collapse collapse order-1 order-md-0 ml-5 mr-0 ">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> About Me</a>
                    </li>
                </ul>
            </div>

            <div class="navbar-collapse collapse order-2 order-md-0 mx-0 ">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#"> Projects</a>
                    </li>
                </ul>
            </div>


          <a href="/" class="navbar-brand mr-5 order-0 order-md-3 p-2 "> Alice  Zhou</a>

          <div class="navbar-collapse collapse order-3 order-md-4 ml-5">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link" href="#"> Skills </a>
                  </li>
              </ul>
          </div>

          <div class="navbar-collapse collapse order-4 order-md-4  p-0">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <a class="nav-link" href="#">Contact</a>
                  </li>
                
              </ul>
          </div>

          </nav>
      </div>
    );
  }
}

export default Header;