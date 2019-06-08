import React from 'react';
import './App.css';
import email from './email.jpg';
import linkedin from './linkedin.png';
import facebook from './facebook.png';


console.log(email);
console.log(linkedin);
console.log(facebook);



class Contact extends React.Component {
  render() {
    return (
      <div className="Contact" id="Contact">
        
          <h1 className="Contacth1">Contact Me</h1>
          <div class="card-deck cardcontact">
            <div class="card mx-5">
              <img class="card-img-top" src={email} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Email</h5>
                <p class="card-text"> alicexyz.zhou@mail.utoronto.ca </p>
                <h5 class="card-title">Telephone</h5>
                <p class="card-text">(647)-830-2123</p>
              </div>
            </div>

            <div class="card mx-5">
              <img class="card-img-top" src={linkedin} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">LinkedIn</h5>
                <p class="card-text"> <a href="https://www.linkedin.com/in/alice-x-zhou/"> https://www.linkedin.com/in/alice-x-zhou/ </a></p>
                <h5 class="card-title">GitHub</h5>
                <p class="card-text"><a href="https://github.com/zhoua0805"> https://github.com/zhoua0805 </a></p>
              </div>
              </div>

            <div class="card mx-5">
              <img class="card-img-top" src={facebook} alt="Card image cap"/>
              <div class="card-body">
                <h5 class="card-title">Facebook</h5>
                <p class="card-text"> <a href="https://www.facebook.com/profile.php?id=100011286493946"> https://www.facebook.com/profile.php?id=100011286493946 </a></p>
                <h5 class="card-title">Instagram</h5>
                <p class="card-text"> <a href="https://www.instagram.com/alice_zhou0805/"> https://www.instagram.com/alice_zhou0805/ </a></p>
              </div>
              </div>
            </div>
            
      </div>);
  }
}

export default Contact;