import { Link } from "react-router-dom";


export default function FooterOne() {
  return (
    <>
      {/* <!--<< Footer Section Start >>--> */}
      <footer className="footer-section footer-section-main fix">
        <div className="container">
          <div className="row g-lg-0 g-4 justify-content-between">
            <div className="col-lg-7">
              <div className="left-side-footer">
                <div className="left-area">
                  <div className="serial text-nowrap wow fadeInLeft" data-wow-delay="0.3s">Footer {"011"} -</div>
                  <h2 className="visible-from-bottom">Rezoan Iqbal</h2>
                </div>
              </div>
              <div className="location-area-wrap">
                <div className="location-area-item">
                  <div className="text-location">Location</div>
                  <div className="text-name visible-from-bottom">
                    Homna (3546), Cumilla, <br /> Bangladesh
                  </div>
                </div>
                <div className="location-area-item">
                  <div className="text-location">CONTACT ME</div>
                  <div className="text-name">
                    +8801316357404 <br /> rezoaniqbalrohan@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="right-side-footer">
                <h3 className="wow fadeInUp" data-wow-delay="0.3s">Quick Links</h3>
                <ul className="r-link wow fadeInUp" data-wow-delay="0.4s">
                  <li>
                    <Link to="/about">
                      About Me
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/project">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
                <Link to="/" className="footer-logo-big wow fadeInUp d-block text-decoration-none my-3" data-wow-delay="0.5s">
                  <span className="fs-48px fw-bold text-white heading-font text-uppercase">
                    REZOAN<span className="text-theme">.</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-4">
          <div className="container">
            <div className="justify-content-md-between justify-content-center d-flex flex-md-nowrap flex-wrap gap-3">
              <p className="text-white opacity-75 wow fadeInLeft body-font" data-wow-delay=".3s">
                &copy; {new Date().getFullYear()} <span className="text-p1">Rezoan Iqbal.</span> All Rights Reserved.
              </p>
              <div className="footer-bottom-link">
                <Link to="/contact">
                  Terms &amp; Conditions
                </Link>
                <span className="text-white opacity-50 px-2">//</span>
                <Link to="/contact">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}