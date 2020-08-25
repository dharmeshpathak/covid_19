import React from 'react'
import "./footer.css"
import Main from './Main';

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

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a className="facebook" href="nn#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#nnnm"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#bnbn"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#njmn"><i className="fa fa-linkedin"></i></a></li>
              <li><a className="linkedin fa fa-linkedin" href="#njmn"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>

</footer>
        </>
    )
}

export default Footer
