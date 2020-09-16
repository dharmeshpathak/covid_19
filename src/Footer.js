import React from 'react'
import "./footer.css"
import Main from './Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedinIn, faDribbble, faTwitter } from "@fortawesome/free-brands-svg-icons"
function Footer() {
    return (
        <>
         <Main />
            <footer className="site-footer">
           
      
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2020 All Rights Reserved by 
         Dharmesh Pathak.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="nn#"><FontAwesomeIcon icon={faFacebook} /></a></li>
              <li><a className="twitter" href="#nnnm"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a className="dribbble" href="#bnbn"><FontAwesomeIcon icon={faDribbble} /> </a></li>
              
              <li><a className="linkedin" href="https://www.linkedin.com/in/dharmesh-pathak-6894a0137/"> <FontAwesomeIcon icon={faLinkedinIn}  size="lg" /></a></li>
              
              <li>
              </li>
            </ul>
          </div>
        </div>
      </div>
      

</footer>
        </>
    )
}

export default Footer
