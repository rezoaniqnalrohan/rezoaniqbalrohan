import { Link } from "react-router-dom";


export default function ServiceAreaTwo() {
  return (
    <>
    
      {/* <!-- development Section Start --> */}
      <section className="development-section-unique bg-black fix section-padding">
        <img src="/assets/img/development/development-ele.png" alt="dev element" className="dev-ele d-md-block d-none updowns" />
        <div className="container">
          <div className="section-header-unique mb-48 d-flex justify-content-center gap-2">
            <div className="text-rot text-theme fw-bold fs-20px text-uppercase table-rotated-header wow fadeInUp"
              data-wow-delay="0.4s">
              Services
            </div>
            <div>
              <div className="head-one wow fadeInUp" data-wow-delay="0.5s">
                <span className="what text-white-stroke">Expertise,</span>
                <span></span>
              </div>
              <div className="head-two d-flex gap-xxl-3 gap-lg-2 gap-1 flex-lg-nowrap flex-wrap wow fadeInUp"
                data-wow-delay="0.6s">
                <span className="ab text-white">Built to Scale</span>
                <p className="fs-six fw-medium text-white opacity-75">
                  Delivering high-performance full-stack applications, custom e-commerce systems, database engineering, and AI-driven automation.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 align-items-end">
            <div className="col-lg-5">
              <div
                className="development-left__wrapper overflow-hidden position-relative d-flex justify-content-between">
                <div className="statick-title">
                  REZOAN
                </div>
                <div className="mater-custom-tablet pb-4">
                  <div className="overflow-hidden">
                     <div className="tags-container2 relative">
        
                     </div>
                  </div>
                </div>
                <div className="border-right-cus d-none">
                  <div className="bar"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="development-content">
                <div className="development-items wow fadeInUp" data-wow-delay="0.5s">
                  <div className="content">
                    <div className="box">
                      <div>
                        <h2
                          className="text-uppercase mb-xxl-3 mb-2 d-flex align-items-center gap-xxl-3 gap-2 text-white">
                          <span className="serial text-capitalize fw-semibold">
                            <span className="sri text-white opacity-75 fw-medium">01</span>
                            <img src="/assets/img/development/arrow-left.png" alt="arrow"
                              className="arrow" />
                          </span>
                          <Link to="/service-details">
                            Full-Stack Web Development
                          </Link>
                        </h2>
                        <p className="thi-pra ps-4 opacity-75 mb-lg-3 mb-2 text-white">
                          Robust web applications built with PHP, Laravel, React, and RESTful APIs tailored to high-scale performance.
                        </p>
                      </div>
                      <div className="dev-tags d-flex flex-wrap gap-2">
                        <span className="tags">PHP / LARAVEL</span>
                        <span className="tags">REACT.JS</span>
                        <span className="tags">HTML5 &amp; CSS3</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/service-details" className="thumb">
                    <img src="/assets/img/development/development1.svg" alt="Web Development" />
                  </Link>
                </div>
                <div className="border-bottom border-in"></div>
                <div className="development-items wow fadeInUp" data-wow-delay="0.7s">
                  <Link to="/service-details" className="thumb">
                    <img src="/assets/img/development/development2.svg" alt="E-Commerce & UI/UX" />
                  </Link>
                  <div className="content">
                    <div className="box">
                      <div>
                        <h2
                          className="text-uppercase mb-xxl-3 mb-2 d-flex align-items-center gap-xxl-3 gap-2 text-white">
                          <span className="serial text-capitalize fw-semibold">
                            <span className="sri text-white opacity-75 fw-medium">02</span>
                            <img src="/assets/img/development/arrow-left.png" alt="arrow"
                              className="arrow" />
                          </span>
                          <Link to="/service-details">
                            E-Commerce &amp; UI/UX
                          </Link>
                        </h2>
                        <p className="thi-pra ps-4 text-white opacity-75 mb-lg-3 mb-2">
                          End-to-end e-commerce solutions, stock management systems, B2B dashboards, and intuitive user experiences.
                        </p>
                      </div>
                      <div className="dev-tags d-flex flex-wrap gap-2">
                        <span className="tags">WORDPRESS</span>
                        <span className="tags">UI/UX DESIGN</span>
                        <span className="tags">PHOTOSHOP / AI</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-bottom border-in"></div>
                <div className="development-items wow fadeInUp" data-wow-delay="0.9s">
                  <div className="content">
                    <div className="box">
                      <div>
                        <h2
                          className="text-uppercase mb-xxl-3 mb-2 d-flex align-items-center gap-xxl-3 gap-2 text-white">
                          <span className="serial text-capitalize fw-semibold">
                            <span className="sri text-white opacity-75 fw-medium">03</span>
                            <img src="/assets/img/development/arrow-left.png" alt="arrow"
                              className="arrow" />
                          </span>
                          <Link to="/service-details">
                            AI Automation &amp; Database
                          </Link>
                        </h2>
                        <p className="thi-pra ps-4 opacity-75 mb-lg-3 mb-2 text-white">
                          AI-assisted development, business process automation, and database engineering using MySQL, PostgreSQL &amp; Supabase.
                        </p>
                      </div>
                      <div className="dev-tags d-flex flex-wrap gap-2">
                        <span className="tags">AI CODING</span>
                        <span className="tags">SUPABASE</span>
                        <span className="tags">MYSQL / POSTGRESQL</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/service-details" className="thumb">
                    <img src="/assets/img/development/development3.svg" alt="AI & Database" />
                  </Link>
                </div>
                <div className="border-bottom border-in"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  )
}
