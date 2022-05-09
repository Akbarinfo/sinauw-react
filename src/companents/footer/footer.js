import './footer.css'
//images
import footerlogo from '../../imgs/footer-logo.svg'

function footer(){
  return(
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-part row">
            <div className="footer-main">
              <div className="footer-logo">
                <a href="/"><img src={footerlogo} alt="footer-logo" width="117" height="56" /></a>
              </div>
              <p className="footer-desc">Any feedback or questions? Contact us on our social media</p>
              <ul className="footer-list row">
                <li className="footer-item"><a href="#" target="_blank"><i className='bx bxl-facebook icon-socical'></i></a></li>
                <li className="footer-item"><a href="#" target="_blank"><i className='bx bxl-twitter icon-socical'></i></a></li>
                <li className="footer-item"><a href="#" target="_blank"><i className='bx bxl-instagram icon-socical'></i></a></li>
              </ul>
            </div>

            <nav className="footer-nav row">
              <ul className="footer-nav-list">
                <li className="footer-nav-item">Menu</li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#">Home</a></li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#">Courses</a></li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#">Webinar</a></li>
              </ul>

              <ul className="footer-nav-list">
                <li className="footer-nav-item">Services</li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#">Materials Update</a></li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#">Trusted Mentor</a></li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#">Free E-book</a></li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#">Meeting </a></li>
              </ul>

              <ul className="footer-nav-list">
                <li className="footer-nav-item">Further Information</li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#">Terms & Conditions</a></li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#">Privacy Policy</a></li>
              </ul>

              <ul className="footer-nav-list">
                <li className="footer-nav-item">Apps Download</li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#">Google Play Store</a></li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#"></a></li>
                <li className="footer-nav-item"><a className="footer-nav-link" href="#">App Store</a></li>
              </ul>
            </nav>
          </div>
          <p className="footer-copright">Copyright 2021 Sinauw. All Rights Reserved.</p>
        </div>
      </footer>

    </>
  )
}

export default footer